/* Cloud-backed Markdown library: validation and metadata extraction.
   Each user-supplied Markdown is stored as plain UTF-8, never executed as HTML. */
export const MAX_MD_BYTES=1048576;
export const MAX_MD_FILES=8;
export const MAX_MD_REQUEST_BYTES=3145728;
export class LibraryError extends Error{
 constructor(message,status=400){super(message);this.status=status;}
}
export function cleanMdPath(value){
 if(typeof value!=="string")throw new LibraryError("Markdown 文件路径必须为文字");
 const path=value.normalize("NFC").replace(/\\/g,"/");
 if(!path||path.length>400||path.startsWith("/")||path.includes("?")||path.includes("#")){
  throw new LibraryError("文献路径不合法，需使用相对路径和 .md 后缀");
 }
 const parts=path.split("/");
 if(parts.some(part=>!part||part==="."||part===".."||part.startsWith(".")||part.length>180||
   /[\u0000-\u001f\u007f]/.test(part))){
  throw new LibraryError("文献文件路径包含无效目录或隐藏文件");
 }
 if(!/\.(md|markdown)$/i.test(path))throw new LibraryError("仅支持 .md 或 .markdown 文件");
 return path;
}
function simpleValue(text){return String(text||"").trim().replace(/^['"“”‘’]+|['"“”‘’]+$/g,"").trim();}
function splitList(value){
 let s=String(value||"").trim();
 if(s.startsWith("[")&&s.endsWith("]"))s=s.slice(1,-1);
 return s.split(/\s*[,，、;；]\s*/).map(v=>simpleValue(v.replace(/^\[\[/,"").replace(/\]\]$/,""))).filter(Boolean);
}
const categories={
 tags:"keyword",tag:"keyword",keyword:"keyword",keywords:"keyword",关键词:"keyword",标签:"keyword",
 materials:"material",material:"material",材料:"material",原料:"material",
 pollutants:"pollutant",pollutant:"pollutant",污染物:"pollutant",目标污染物:"pollutant",
 methods:"method",method:"method",方法:"method",研究方法:"method",
 structures:"structure",structure:"structure",结构:"structure",材料结构:"structure",
 topics:"topic",topic:"topic",研究方向:"topic",研究主题:"topic"
};
export function metadataForMd(path,body){
 const text=String(body||"").replace(/^\uFEFF/,"").replace(/\r\n?/g,"\n");
 const fm=text.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);
 const props={}, content=fm?text.slice(fm[0].length):text;
 if(fm){
  let last="";
  for(const line of fm[1].split("\n")){
   const m=line.match(/^([\w\u3400-\u9fff-]+)\s*:\s*(.*)$/u);
   if(m){last=m[1];props[last]=m[2].trim();}
   else if(last&&/^\s*-\s+/.test(line))props[last]=(props[last]?props[last]+",":"")+line.replace(/^\s*-\s+/,"").trim();
  }
 }
 const raw=content.replace(/\x60{3}[\s\S]*?\x60{3}/g,"");
 const heading=content.match(/^#\s+(.+)$/m);
 const title=(simpleValue(props.title)||simpleValue(heading?.[1])||path.split("/").pop().replace(/\.(md|markdown)$/i,"")).slice(0,400);
 const keywords={},links=[],linkSeen=new Set();
 const addWord=(type,word)=>{
  const label=String(word||"").replace(/^#/,"").trim();
  if(!label||label.length>160)return;
  keywords[type]||[];
  if(!keywords[type].some(x=>x.normalize("NFKC").toLowerCase()===label.normalize("NFKC").toLowerCase())){
   if(keywords[type].length<300)keywords[type].push(label.slice(0,85));
  }
 };
 const addLink=ref=>{
  ref=String(ref||"").split("|")[0].split("#")[0].trim();
  if(!ref||ref.length>400||/\.(?:png|jpe?g|gif|webp|svg|pdf|mp[34])$/i.test(ref))return;
  if(!linkSeen.has(ref)&&links.length<750){linkSeen.add(ref);links.push(ref);}
 };
 for(const [k,v]of Object.entries(props)){
  const type=categories[k.toLowerCase()]||categories[k];
  if(type)for(const x of splitList(v))addWord(type,x);
 }
 for(const m of raw.matchAll(/!?\[\[([^\]\n]+)\]\]/g))addLink(m[1]);
 for(const m of raw.matchAll(/(?<!!)\[[^\]\n]*\]\(([^)\n]+)\)/g)){
  let ref=m[1].replace(/^<|>$/g,"").split("#")[0].split("?")[0].trim();
  if(/^(https?:|mailto:|data:)/i.test(ref)||!/\.(?:md|markdown)$/i.test(ref))continue;
  try{ref=decodeURIComponent(ref);}catch{}addLink(ref);
 }
 for(const m of raw.matchAll(/(?:^|[\s(（])#([\p{L}\p{N}_/+.-]{2,60})/gmu))addWord("keyword",m[1]);
 for(const line of raw.split("\n").slice(0,180)){
  const m=line.match(/^\s*(?:[-*]\s*)?(?:\*\*)?(关键词|Keywords?|材料|污染物|研究方法|方法|结构|研究方向)(?:\*\*)?\s*[:：]\s*(.{1,1200})$/iu);
  if(!m)continue;
  const type=categories[m[1].toLowerCase()]||categories[m[1]]||"keyword";
  for(const item of splitList(m[2]))addWord(type,item);
 }
 return {title,aliases:splitList(props.aliases||props.alias||"").slice(0,40),
   doi:String(props.doi||"").replace(/^https?:\/\/doi\.org\//i,"").slice(0,200),
   journal:String(props.journal||props.publication||"").slice(0,240),
   keywords,rawLinks:links};
}
export async function readBodyBounded(request,maxBytes=MAX_MD_REQUEST_BYTES){
 const reader=request.body?.getReader();if(!reader)return "";
 let total=0;const chunks=[];
 while(true){
  const {done,value}=await reader.read();
  if(done)break;
  total+=value.byteLength;
  if(total>maxBytes){await reader.cancel().catch(()=>{});throw new LibraryError("上传包超过 3 MB，请分批上传",413);}
  chunks.push(value);
 }
 const bytes=new Uint8Array(total);let offset=0;
 for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
 try{return new TextDecoder("utf-8",{fatal:true}).decode(bytes);}
 catch{throw new LibraryError("文件内容不是有效的 UTF-8 文本");}
}
