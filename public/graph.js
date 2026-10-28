(()=>{"use strict";
const $=id=>document.getElementById(id),core=window.LiteratureGraphCore;
if(!core)return;
let graph={nodes:[],edges:[],stats:{}},view={nodes:[],edges:[]},selected=null,localFiles=new Map(),mode="public",scale=1,ox=0,oy=0,pointer=null,moved=false;
const svgNS="http://www.w3.org/2000/svg",colors={paper:"#8fc3b6",keyword:"#dfae65",material:"#8ccfa0",pollutant:"#f38e93",method:"#9daef8",structure:"#c7a0eb",topic:"#e5bb83"};
const svg=(type,attrs={})=>{const n=document.createElementNS(svgNS,type);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,v);return n};
function escapeText(s){return String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function setStatus(s){$("graph-stats").textContent=s;}
function validGraph(data){
 return data&&Array.isArray(data.nodes)&&Array.isArray(data.edges);
}
function connected(id){return graph.edges.filter(e=>e.source===id||e.target===id).map(e=>({edge:e,node:graph.nodes.find(n=>n.id===(e.source===id?e.target:e.source))})).filter(x=>x.node);}
function getById(id){return graph.nodes.find(n=>n.id===id);}
function filterView(){
 const q=core.norm($("graph-search").value),type=$("graph-type").value,limit=Number($("graph-limit").value);
 const degrees=new Map();
 for(const e of graph.edges){degrees.set(e.source,(degrees.get(e.source)||0)+1);degrees.set(e.target,(degrees.get(e.target)||0)+1);}
 const all=graph.nodes.filter(n=>(type==="all"||n.type===type)&&(!q||core.norm(n.label+" "+(n.path||"")).includes(q)));
 all.sort((a,b)=>(degrees.get(b.id)||0)-(degrees.get(a.id)||0)||a.label.localeCompare(b.label));
 const matched=new Set(all.slice(0,limit).map(n=>n.id));
 // Search and type filters keep directly relevant nodes visible.
 if(type!=="all"||q){for(const e of graph.edges)if(matched.has(e.source)&&!matched.has(e.target)&&matched.size<limit)matched.add(e.target);}
 view.nodes=graph.nodes.filter(n=>matched.has(n.id));
 const ids=new Set(view.nodes.map(n=>n.id));
 view.edges=graph.edges.filter(e=>ids.has(e.source)&&ids.has(e.target));
 draw();
 setStatus("文献 "+(graph.stats.papers||0)+" 篇 · 关键词/分类 "+(graph.stats.tags||0)+" 个 · 显示 "+view.nodes.length+" 节点 / "+view.edges.length+" 条关系");
}
function draw(){
 const canvas=$("graph-canvas");canvas.replaceChildren();
 const width=900,height=590,defs=svg("g");
 if(!view.nodes.length){
  const empty=svg("text",{x:450,y:285,"text-anchor":"middle",fill:"#b5d4be","font-size":"17"});
  empty.textContent="暂无文献图谱。请选择本地 Markdown 文件夹，或在仓库导入公开笔记。";canvas.append(empty);return;
 }
 const nodes=view.nodes.map((n,i)=>{
  const angle=i*2.39996323,r=Math.min(270,24*Math.sqrt(i+1));
  return {...n,x:width/2+Math.cos(angle)*r,y:height/2+Math.sin(angle)*r,vx:0,vy:0};
 });
 const byId=new Map(nodes.map(n=>[n.id,n]));
 // Deterministic bounded force relaxation avoids adding third-party graph libraries.
 for(let step=0;step<105;step++){
  for(const n of nodes){n.vx=0;n.vy=0;}
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
   const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d2=Math.max(60,dx*dx+dy*dy);
   if(d2>39000)continue;const power=430/d2;
   a.vx+=dx*power;a.vy+=dy*power;b.vx-=dx*power;b.vy-=dy*power;
  }
  for(const e of view.edges){
   const a=byId.get(e.source),b=byId.get(e.target);
   const dx=b.x-a.x,dy=b.y-a.y,d=Math.max(1,Math.hypot(dx,dy));
   const target=e.kind==="wiki"?110:76,force=(d-target)*.012;
   a.vx+=dx/d*force;a.vy+=dy/d*force;b.vx-=dx/d*force;b.vy-=dy/d*force;
  }
  for(const n of nodes){n.x=Math.max(28,Math.min(width-28,n.x+n.vx*.5+(width/2-n.x)*.001));n.y=Math.max(28,Math.min(height-28,n.y+n.vy*.5+(height/2-n.y)*.001));}
 }
 const viewport=svg("g",{transform:"translate("+ox+" "+oy+") scale("+scale+")"});canvas.append(viewport);
 for(const e of view.edges){
  const a=byId.get(e.source),b=byId.get(e.target);
  viewport.append(svg("line",{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:e.kind==="wiki"?"#9ac4b8":"#66857a","stroke-width":e.kind==="wiki"?1.45:.7,"stroke-opacity":e.kind==="wiki"?.75:.35}));
 }
 for(const n of nodes){
  const group=svg("g",{class:"graph-node",tabindex:"0",role:"button","aria-label":n.label});
  const degree=connected(n.id).length;
  const radius=n.type==="paper"?Math.min(12,5+Math.sqrt(degree)*1.4):Math.min(11,4+Math.sqrt(degree)*1.3);
  const dot=svg("circle",{cx:n.x,cy:n.y,r:radius,fill:colors[n.type]||"#b7d5c4",stroke:n.id===selected?"#fff":"#203c31","stroke-width":n.id===selected?2.5:.7});
  group.append(dot);
  if(n.id===selected||n.type==="paper"||degree>=4||nodes.length<55){
   const label=svg("text",{x:n.x+radius+4,y:n.y+3.6,fill:n.id===selected?"#fff":"#d0e3d5","font-size":n.id===selected?13:10,"pointer-events":"none"});
   label.textContent=n.label.length>28?n.label.slice(0,26)+"…":n.label;group.append(label);
  }
  group.addEventListener("click",e=>{e.stopPropagation();select(n.id);});
  group.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();select(n.id);}});
  viewport.append(group);
 }
 const down=e=>{if(e.target.closest&&e.target.closest(".graph-node"))return;pointer={x:e.clientX,y:e.clientY,ox,oy};moved=false;canvas.setPointerCapture(e.pointerId);};
 canvas.onpointerdown=down;
 canvas.onpointermove=e=>{if(!pointer)return;const box=canvas.getBoundingClientRect();ox=pointer.ox+(e.clientX-pointer.x)*900/box.width;oy=pointer.oy+(e.clientY-pointer.y)*590/box.height;moved=true;viewport.setAttribute("transform","translate("+ox+" "+oy+") scale("+scale+")");};
 canvas.onpointerup=()=>{pointer=null;};
 canvas.onpointercancel=()=>{pointer=null;};
 canvas.onwheel=e=>{e.preventDefault();const next=Math.max(.45,Math.min(3.2,scale*(e.deltaY>0?.9:1.1)));scale=next;viewport.setAttribute("transform","translate("+ox+" "+oy+") scale("+scale+")");};
}
function button(label,action){const b=document.createElement("button");b.type="button";b.textContent=label;b.className="graph-related";b.addEventListener("click",action);return b;}
function select(id){
 selected=id;const n=getById(id);if(!n)return;const panel=$("graph-inspector");panel.replaceChildren();
 const type=document.createElement("small");type.className="graph-node-type";type.textContent=core.TYPE_LABELS[n.type]||n.type;
 const title=document.createElement("h3");title.textContent=n.label;panel.append(type,title);
 if(n.type==="paper"){
  const path=document.createElement("p");path.textContent="文件："+n.path;panel.append(path);
  const read=button("阅读 Markdown 原文 ↗",()=>openArticle(n.id));read.className="graph-primary";panel.append(read);
  if(n.doi){const a=document.createElement("a");a.href="https://doi.org/"+encodeURIComponent(n.doi).replace(/%2F/g,"/");a.textContent="打开 DOI ↗";a.target="_blank";a.rel="noopener noreferrer";panel.append(a);}
 }
 const near=connected(id).sort((a,b)=>a.node.label.localeCompare(b.node.label));
 const h=document.createElement("h4");h.textContent="关联节点（"+near.length+"）";panel.append(h);
 for(const x of near.slice(0,45))panel.append(button((core.TYPE_LABELS[x.node.type]||"")+" · "+x.node.label,()=>select(x.node.id)));
 if(near.length>45){const p=document.createElement("p");p.textContent="仅显示前 45 项，请使用搜索缩小范围。";panel.append(p);}
 draw();
}
function plainMarkdownToDOM(markdown,target){
 target.replaceChildren();
 // All source content is untrusted; never use innerHTML or execute embedded HTML.
 const lines=String(markdown||"").replace(/\r\n?/g,"\n").split("\n");
 let pre=null;
 for(const raw of lines){
  const line=raw.trimEnd();
  if(line.startsWith("\x60\x60\x60")){if(pre){target.append(pre);pre=null;}else pre=document.createElement("pre");continue;}
  if(pre){pre.append(document.createTextNode(raw+"\n"));continue;}
  const heading=line.match(/^(#{1,5})\s+(.+)$/);
  const node=document.createElement(heading?"h"+Math.min(5,heading[1].length):"p");
  const text=heading?heading[2]:line;
  const tokens=text.split(/(\[\[[^\]]+\]\]|\[[^\]]+\]\([^)]+\))/g);
  for(const token of tokens){
   if(token.startsWith("[[")){
    const rawRef=token.slice(2,-2),alias=rawRef.split("|");
    const a=document.createElement("a");a.textContent=alias[1]||alias[0];a.href="#literature-graph";
    a.addEventListener("click",e=>{e.preventDefault();const ref=core.norm(alias[0].split("#")[0]);const n=graph.nodes.find(n=>n.type==="paper"&&[n.label,n.path,n.path.replace(/\.md$/i,""),n.path.split("/").pop().replace(/\.md$/i,""),...(n.aliases||[])].some(x=>core.norm(x)===ref));if(n)openArticle(n.id);else setStatus("未找到双链目标："+alias[0]);});
    node.append(a);
   }else if(/^\[[^\]]+\]\([^)]+\)$/.test(token)){
    const m=token.match(/^\[([^\]]+)\]\(([^)]+)\)$/),a=document.createElement("a");a.textContent=m[1];
    const href=m[2].trim();if(/^https?:\/\//i.test(href)){a.href=href;a.target="_blank";a.rel="noopener noreferrer";}else if(/\.md(?:#.*)?$/i.test(href)){a.href="#literature-graph";a.addEventListener("click",e=>{e.preventDefault();const target=graph.nodes.find(n=>n.type==="paper"&&core.norm(n.path.split("/").pop())===core.norm(href.split("/").pop()));if(target)openArticle(target.id);});}else{node.append(document.createTextNode(token));continue;}node.append(a);
   }else node.append(document.createTextNode(token));
  }
  target.append(node);
 }
 if(pre)target.append(pre);
}
async function openArticle(id){
 const n=getById(id);if(!n||n.type!=="paper")return;select(id);
 const panel=$("graph-article");panel.hidden=false;$("graph-article-title").textContent=n.label;
 $("graph-article-meta").textContent=[n.path,n.journal,n.doi?"DOI "+n.doi:""].filter(Boolean).join(" · ");
 $("graph-markdown").textContent="正在读取 Markdown…";
 const backs=graph.edges.filter(e=>e.target===n.id&&e.kind==="wiki").map(e=>getById(e.source)).filter(Boolean);
 const backlinks=$("graph-backlinks");backlinks.replaceChildren();const h=document.createElement("h4");h.textContent="反向链接（"+backs.length+"）";backlinks.append(h);
 for(const x of backs)backlinks.append(button(x.label,()=>openArticle(x.id)));
 try{
  let markdown=n.markdown;
  if(markdown==null&&mode==="local")markdown=localFiles.get(n.path);
  if(markdown==null&&n.url){
   const res=await fetch(n.url,{cache:"no-store"});if(!res.ok)throw Error("HTTP "+res.status);
   markdown=await res.text();
  }
  if(markdown==null)throw Error("缺少原文文件。请导入原始 Markdown 文件夹或发布公开文献库。");
  plainMarkdownToDOM(markdown,$("graph-markdown"));
 }catch(err){$("graph-markdown").textContent="无法打开 Markdown："+err.message;}
 panel.scrollIntoView({behavior:"smooth",block:"start"});
}
async function loadPublic(){
 mode="public";localFiles.clear();
 try{
  const response=await fetch("/data/literature-graph.json",{cache:"no-store"});
  if(!response.ok)throw Error("HTTP "+response.status);
  const data=await response.json();if(!validGraph(data))throw Error("索引格式错误");
  graph=data;selected=null;scale=1;ox=0;oy=0;filterView();
  $("graph-import-status").textContent=graph.stats.papers?"已载入网站公开图谱":"网站尚未发布 Markdown 文献库。可先导入本地文件夹预览，或将 .md 放进 public/literature-md/ 后重新构建。";
 }catch(err){setStatus("公开图谱读取失败："+err.message);}
}
async function importFolder(files){
 const chosen=Array.from(files||[]).filter(f=>/\.(?:md|markdown)$/i.test(f.name));
 if(!chosen.length){$("graph-import-status").textContent="没有选择 Markdown 文件";return;}
 if(chosen.length>2500){$("graph-import-status").textContent="单次最多处理 2500 个 Markdown 文件，请分批建立静态图谱。";return;}
 $("graph-import-status").textContent="正在本地解析 "+chosen.length+" 个 Markdown 文件…";
 const parsed=[];localFiles.clear();
 for(const file of chosen){
  if(file.size>4194304)continue;
  const path=(file.webkitRelativePath||file.name).replace(/^[^/]+\//,"");
  const content=await file.text();
  parsed.push({path,content});localFiles.set(path,content);
 }
 graph=core.buildGraph(parsed);mode="local";selected=null;scale=1;ox=0;oy=0;filterView();
 $("graph-import-status").textContent="已在浏览器本地导入 "+graph.stats.papers+" 篇、"+graph.stats.tags+" 个关键词/分类，"+graph.stats.unresolved+" 条未解析双链。未上传服务器。";
}
function init(){
 for(const id of ["graph-search","graph-type","graph-limit"])$(id).addEventListener(id==="graph-search"?"input":"change",filterView);
 $("graph-fit").addEventListener("click",()=>{scale=1;ox=0;oy=0;draw();});
 $("graph-files").addEventListener("change",e=>importFolder(e.target.files).catch(err=>$("graph-import-status").textContent="导入失败："+err.message));
 $("graph-reload").addEventListener("click",loadPublic);
 $("graph-article-close").addEventListener("click",()=>{$("graph-article").hidden=true;});
 loadPublic();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();