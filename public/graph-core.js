/* Parse Obsidian Markdown links and explicit metadata; browser + Node compatible. */
(function(root,factory){const api=factory();if(typeof module!=="undefined"&&module.exports)module.exports=api;if(root)root.LiteratureGraphCore=api;})(typeof globalThis!=="undefined"?globalThis:null,function(){
"use strict";
const FIELDS={
 tags:"keyword",tag:"keyword",keywords:"keyword",keyword:"keyword",关键词:"keyword",标签:"keyword",
 materials:"material",material:"material",材料:"material",原料:"material",
 pollutants:"pollutant",pollutant:"pollutant",污染物:"pollutant",目标污染物:"pollutant",
 methods:"method",method:"method",方法:"method",研究方法:"method",
 structures:"structure",structure:"structure",结构:"structure",材料结构:"structure",
 topics:"topic",topic:"topic",研究方向:"topic",研究主题:"topic"
};
const TYPE_LABELS={paper:"文献",keyword:"关键词",material:"材料",pollutant:"污染物",method:"方法",structure:"结构",topic:"主题"};
function norm(v){return String(v||"").normalize("NFKC").trim().replace(/\s+/g," ").toLocaleLowerCase("en");}
function unquote(v){return String(v||"").trim().replace(/^["'“”‘’]+|["'“”‘’]+$/g,"").trim();}
function pathClean(p){const stack=[];for(const s of String(p||"").replace(/\\/g,"/").replace(/^\.\//,"").split("/")){if(!s||s===".")continue;if(s==="..")stack.pop();else stack.push(s);}return stack.join("/");}
function stem(path){return(String(path||"").split("/").pop()||"").replace(/\.(?:md|markdown)$/i,"");}
function values(raw){if(Array.isArray(raw))return raw.flatMap(values);let s=String(raw||"").trim();if(!s)return[];if(s.startsWith("[")&&s.endsWith("]"))s=s.slice(1,-1);return s.split(/\s*[,，;；、]\s*/).map(x=>unquote(x.replace(/^\[\[/,"").replace(/\]\]$/,""))).filter(Boolean);}
function frontmatter(md){
 const props={},str=String(md||"").replace(/^\uFEFF/,"");
 const m=str.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s*\r?\n|$)/);
 if(!m)return{props,content:str};let last="";
 for(const line of m[1].split(/\r?\n/)){
  const kv=line.match(/^([\w\u3400-\u9FFF-]+)\s*:\s*(.*)$/u);
  if(kv){last=kv[1];props[last]=kv[2].trim();}
  else if(last&&/^\s+-\s+/.test(line))props[last]=(props[last]?props[last]+",":"")+line.replace(/^\s+-\s+/,"").trim();
 }
 return{props,content:str.slice(m[0].length)};
}
function withoutFences(s){return s.replace(/\x60{3}[\s\S]*?\x60{3}/g,"");}
function extractLinks(md){
 const src=withoutFences(String(md||"")),out=[];let m;
 const wiki=/(!?)\[\[([^\]\n]+)\]\]/g;
 while((m=wiki.exec(src))){const ref=m[2].split("|")[0].split("#")[0].trim();if(ref&&!/\.(?:png|jpe?g|gif|webp|svg|pdf|mp4|mp3)$/i.test(ref))out.push(ref);}
 const standard=/!?\[([^\]\n]*)\]\((<?[^)\n]+>?)\)/g;
 while((m=standard.exec(src))){
  if(m[0].startsWith("!"))continue;
  let ref=m[2].trim().replace(/^<|>$/g,"").split("#")[0].split("?")[0];
  if(!ref||/^(?:https?:|mailto:|data:|javascript:)/i.test(ref)||!/\.(?:md|markdown)$/i.test(ref))continue;
  try{ref=decodeURIComponent(ref);}catch{}out.push(ref);
 }
 return[...new Set(out)];
}
function extractTags(md){
 const fm=frontmatter(md),tags={};
 for(const [k,v]of Object.entries(fm.props)){
  const type=FIELDS[k.toLowerCase()]||FIELDS[k];if(!type)continue;
  const list=tags[type]||[];
  for(const value of values(v)){const label=value.replace(/^#/,"").trim();if(label&&!list.some(x=>norm(x)===norm(label)))list.push(label.slice(0,85));}
  tags[type]=list;
 }
 const body=withoutFences(fm.content);let m;
 const hashtag=/(?:^|[\s(（])#([\p{L}\p{N}_/+-]{2,60})/gmu;
 while((m=hashtag.exec(body))){const list=tags.keyword||[];if(!list.some(x=>norm(x)===norm(m[1])))list.push(m[1]);tags.keyword=list;}
 for(const line of body.split(/\r?\n/).slice(0,120)){
  const found=line.match(/^\s*(?:[-*]\s*)?(?:\*\*)?(关键词|Keywords?|材料|污染物|研究方法|方法|结构|研究方向)(?:\*\*)?\s*[:：]\s*(.{1,320})$/iu);
  if(!found)continue;
  const type=FIELDS[found[1].toLowerCase()]||FIELDS[found[1]]||"keyword",list=tags[type]||[];
  for(const value of values(found[2])){const label=value.replace(/^#/,"").trim();if(label&&!list.some(x=>norm(x)===norm(label)))list.push(label.slice(0,85));}
  tags[type]=list;
 }
 return tags;
}
function buildGraph(files){
 const notes=[],known=new Set();
 for(const f of files||[]){
  const path=pathClean(f.path);
  if(!/\.(?:md|markdown)$/i.test(path)||known.has(norm(path)))continue;known.add(norm(path));
  const md=String(f.content||""),fm=frontmatter(md),heading=fm.content.match(/^#\s+(.+)$/m);
  const n={id:"n:"+path,path,title:(unquote(fm.props.title)||unquote(heading&&heading[1])||stem(path)).slice(0,400),
   aliases:values(fm.props.aliases||fm.props.alias||""),keywords:extractTags(md),
   rawLinks:extractLinks(md),url:String(f.url||""),
   doi:String(fm.props.doi||"").trim().replace(/^https?:\/\/doi\.org\//i,"").slice(0,200),
   journal:String(fm.props.journal||fm.props.publication||"").slice(0,240)};
  if(f.embedContent)n.markdown=md;notes.push(n);
 }
 const byPath=new Map(),byName=new Map();
 function add(map,k,n){k=norm(k);if(!k)return;const arr=map.get(k)||[];if(!arr.includes(n))arr.push(n);map.set(k,arr);}
 for(const n of notes){
  add(byPath,n.path,n);add(byPath,n.path.replace(/\.(?:md|markdown)$/i,""),n);
  add(byName,stem(n.path),n);add(byName,n.title,n);for(const alias of n.aliases)add(byName,alias,n);
 }
 function resolve(ref,from){
  const name=String(ref||"").replace(/\\/g,"/").split("#")[0].trim();if(!name)return null;
  const local=pathClean(from.path.split("/").slice(0,-1).join("/")+"/"+name);
  for(const key of [local,name])for(const candidate of [key,key.replace(/\.(?:md|markdown)$/i,"")]){
   const found=byPath.get(norm(candidate));if(found&&found.length===1)return found[0];
  }
  const found=byName.get(norm(stem(name.replace(/\.(?:md|markdown)$/i,"")+".md")))||byName.get(norm(name));
  return found&&found.length===1?found[0]:null;
 }
 const nodes=notes.map(n=>({id:n.id,type:"paper",label:n.title,path:n.path,url:n.url,doi:n.doi,
  journal:n.journal,aliases:n.aliases,keywords:n.keywords,...(n.markdown!==undefined?{markdown:n.markdown}:{})}));
 const edges=[],seen=new Set(),terms=new Map(),unresolved=[];
 function edge(a,b,kind){if(a===b)return;const k=kind+"|"+a+"|"+b;if(seen.has(k))return;seen.add(k);edges.push({source:a,target:b,kind});}
 for(const n of notes){
  for(const ref of n.rawLinks){const target=resolve(ref,n);if(target)edge(n.id,target.id,"wiki");else unresolved.push({from:n.path,target:ref});}
  for(const [type,list]of Object.entries(n.keywords))for(const value of list){
   const label=String(value||"").trim();if(!label)continue;
   const id="t:"+type+":"+norm(label);if(!terms.has(id))terms.set(id,{id,type,label});
   edge(n.id,id,"tag");
  }
 }
 nodes.push(...terms.values());
 return{version:1,nodes,edges,unresolved,stats:{
  papers:notes.length,tags:terms.size,wikilinks:edges.filter(e=>e.kind==="wiki").length,
  tagLinks:edges.filter(e=>e.kind==="tag").length,unresolved:unresolved.length
 },generatedAt:new Date().toISOString()};
}
return{buildGraph,frontmatter,extractLinks,extractTags,pathClean,norm,TYPE_LABELS};
});
