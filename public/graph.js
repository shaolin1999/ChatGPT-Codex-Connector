(()=>{"use strict";
const $=id=>document.getElementById(id),core=window.LiteratureGraphCore;
if(!core)return;
let graph={nodes:[],edges:[],stats:{}},view={nodes:[],edges:[]},selected=null,localFiles=new Map(),mode="public",scale=1,ox=0,oy=0,pointer=null,moved=false,cloudIndex=[],simulation=null,simulationFrame=0,draggedNode=null;
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
 const q=core.norm($("graph-search").value),type=$("graph-type").value;
 const degrees=new Map();
 for(const e of graph.edges){degrees.set(e.source,(degrees.get(e.source)||0)+1);degrees.set(e.target,(degrees.get(e.target)||0)+1);}
 const all=graph.nodes.filter(n=>(type==="all"||n.type===type)&&(!q||core.norm(n.label+" "+(n.path||"")).includes(q)));
 const matched=new Set(all.map(n=>n.id));
 if(type!=="all"||q){for(const e of graph.edges)if(matched.has(e.source))matched.add(e.target);else if(matched.has(e.target))matched.add(e.source);}
 view.nodes=graph.nodes.filter(n=>matched.has(n.id));
 const ids=new Set(view.nodes.map(n=>n.id));
 view.edges=graph.edges.filter(e=>ids.has(e.source)&&ids.has(e.target));
 draw();
 setStatus("文献 "+(graph.stats.papers||0)+" 篇 · 关键词/分类 "+(graph.stats.tags||0)+" 个 · 已显示全部 "+view.nodes.length+" 节点 / "+view.edges.length+" 条关系");
}
function stopSimulation(){if(simulationFrame)cancelAnimationFrame(simulationFrame);simulationFrame=0;simulation=null;}
function draw(){
 stopSimulation();
 const canvas=$("graph-canvas");canvas.replaceChildren();
 const width=900,height=590;
 if(!view.nodes.length){
  const message=svg("text",{x:450,y:285,"text-anchor":"middle",fill:"#b5d4be","font-size":"16"});
  message.textContent="暂无文献关系。上传 Markdown，或选择本地文件夹导入。";canvas.append(message);return;
 }
 const nodes=view.nodes.map((n,i)=>({
  ...n,x:450+Math.cos(i*2.399963)*Math.min(250,14*Math.sqrt(i+1)),
  y:295+Math.sin(i*2.399963)*Math.min(215,12*Math.sqrt(i+1)),vx:0,vy:0,fixed:false
 }));
 const lookup=new Map(nodes.map(n=>[n.id,n]));
 const viewport=svg("g");canvas.append(viewport);
 const lines=svg("g"),circles=svg("g");
 viewport.append(lines,circles);
 const visualEdges=view.edges.map(e=>{const line=svg("line",{stroke:e.kind==="wiki"?"#b4ded0":"#718c7e","stroke-opacity":e.kind==="wiki"?.75:.43,"stroke-width":e.kind==="wiki"?1.4:.85});lines.append(line);return {...e,el:line,a:lookup.get(e.source),b:lookup.get(e.target)};}).filter(e=>e.a&&e.b);
 const degrees=new Map();for(const e of visualEdges){degrees.set(e.source,(degrees.get(e.source)||0)+1);degrees.set(e.target,(degrees.get(e.target)||0)+1);}
 const glyphs=nodes.map(n=>{
  const group=svg("g",{class:"graph-node",tabindex:"0",role:"button","aria-label":n.label});
  const degree=degrees.get(n.id)||0,radius=n.type==="paper"?Math.min(13,6+Math.sqrt(degree)*1.3):Math.min(12,4.5+Math.sqrt(degree)*1.25);
  group.append(svg("circle",{r:radius,fill:colors[n.type]||"#bfd7c5",stroke:n.id===selected?"#fff":"#2d473b","stroke-width":n.id===selected?2.7:.7}));
  if(n.id===selected||n.type==="paper"||degree>=4||nodes.length<70){
   const label=svg("text",{x:radius+5,y:3,fill:n.id===selected?"#fff":"#d3e7d9","font-size":n.id===selected?13:10,"pointer-events":"none"});
   label.textContent=n.label.length>31?n.label.slice(0,29)+"…":n.label;group.append(label);
  }
  group.addEventListener("click",event=>{event.stopPropagation();if(!group.dataset.dragged)select(n.id);delete group.dataset.dragged;});
  group.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();select(n.id);}});
  group.addEventListener("pointerdown",event=>{
   event.stopPropagation();event.preventDefault();draggedNode={node:n,pointerId:event.pointerId,element:group,startX:event.clientX,startY:event.clientY};
   n.fixed=true;group.setPointerCapture(event.pointerId);simulation.alpha=Math.max(simulation.alpha,.19);
  });
  group.addEventListener("pointermove",event=>{
   if(!draggedNode||draggedNode.node!==n)return;
   const box=canvas.getBoundingClientRect();
   n.x=((event.clientX-box.left)*900/box.width-ox)/scale;
   n.y=((event.clientY-box.top)*590/box.height-oy)/scale;
   n.vx=0;n.vy=0;
   if(Math.hypot(event.clientX-draggedNode.startX,event.clientY-draggedNode.startY)>4)group.dataset.dragged="1";
   simulation.alpha=.28;paint();
  });
  const release=()=>{if(draggedNode?.node===n){n.fixed=false;draggedNode=null;simulation.alpha=.18;}};
  group.addEventListener("pointerup",release);group.addEventListener("pointercancel",release);
  circles.append(group);return{n,group};
 });
 function paint(){
  viewport.setAttribute("transform","translate("+ox+" "+oy+") scale("+scale+")");
  for(const e of visualEdges)e.el.setAttribute("x1",e.a.x),e.el.setAttribute("y1",e.a.y),e.el.setAttribute("x2",e.b.x),e.el.setAttribute("y2",e.b.y);
  for(const g of glyphs)g.group.setAttribute("transform","translate("+g.n.x+" "+g.n.y+")");
 }
 simulation={alpha:.85,step:0};
 function tick(){
  if(!simulation)return;
  const alpha=simulation.alpha;
  for(const n of nodes){if(!n.fixed){n.vx+=(450-n.x)*.00028*alpha;n.vy+=(295-n.y)*.00028*alpha;}}
  // Local repulsion is sampled to avoid O(N^2) work on large paper collections.
  const count=nodes.length;
  for(let i=0;i<count;i++){
   const a=nodes[i],iterations=Math.min(count-1,24);
   for(let k=1;k<=iterations;k++){
    const j=(i+k*37)%count;if(j===i)continue;
    const b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d2=Math.max(30,dx*dx+dy*dy);
    if(d2>26000)continue;
    const impulse=Math.min(.95,210*alpha/d2);
    if(!a.fixed){a.vx+=dx*impulse;a.vy+=dy*impulse;}
    if(!b.fixed){b.vx-=dx*impulse;b.vy-=dy*impulse;}
   }
  }
  for(const e of visualEdges){
   const dx=e.b.x-e.a.x,dy=e.b.y-e.a.y,d=Math.max(1,Math.hypot(dx,dy));
   const desired=e.kind==="wiki"?96:65;
   const pull=(d-desired)*.012*alpha,fx=dx/d*pull,fy=dy/d*pull;
   if(!e.a.fixed){e.a.vx+=fx;e.a.vy+=fy;}
   if(!e.b.fixed){e.b.vx-=fx;e.b.vy-=fy;}
  }
  for(const n of nodes){
   if(n.fixed)continue;
   n.vx*=.82;n.vy*=.82;
   n.x=Math.max(15,Math.min(885,n.x+Math.max(-8,Math.min(8,n.vx))));
   n.y=Math.max(15,Math.min(575,n.y+Math.max(-8,Math.min(8,n.vy))));
  }
  paint();simulation.step++;simulation.alpha=Math.max(.007,simulation.alpha*.986);
  if(simulation.alpha>.008||draggedNode)simulationFrame=requestAnimationFrame(tick);
  else simulationFrame=0;
 }
 const down=event=>{if(event.target.closest?.(".graph-node"))return;pointer={x:event.clientX,y:event.clientY,ox,oy};canvas.setPointerCapture(event.pointerId);};
 canvas.onpointerdown=down;
 canvas.onpointermove=event=>{if(!pointer)return;const rect=canvas.getBoundingClientRect();ox=pointer.ox+(event.clientX-pointer.x)*900/rect.width;oy=pointer.oy+(event.clientY-pointer.y)*590/rect.height;paint();};
 canvas.onpointerup=()=>{pointer=null};canvas.onpointercancel=()=>{pointer=null};
 canvas.onwheel=event=>{event.preventDefault();scale=Math.max(.3,Math.min(4,scale*(event.deltaY>0?.90:1.1)));paint();};
 simulationFrame=requestAnimationFrame(tick);
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
 for(const x of near)panel.append(button((core.TYPE_LABELS[x.node.type]||"")+" · "+x.node.label,()=>select(x.node.id)));
 
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
  if(!response.ok)throw Error("静态图谱 HTTP "+response.status);
  const staticData=await response.json();if(!validGraph(staticData))throw Error("静态索引格式错误");
  const cloud=[];
  let offset=0;
  do{
   const response=await fetch("/api/literature-library?index=1&offset="+offset,{cache:"no-store"});
   if(!response.ok)throw Error("云端文献接口 HTTP "+response.status);
   const data=await response.json();
   if(!data.ok)throw Error(data.error||"云端索引不可用");
   cloud.push(...(data.items||[]));
   if(cloud.length>10000)throw Error("云端文献超过图谱最大读取量 10000 篇");
   offset=data.next_offset;
  }while(offset!==null);
  cloudIndex=cloud;
  const notes=staticData.nodes.filter(n=>n.type==="paper");
  // The static graph still contributes its original edges and tag nodes;
  // the cloud graph is reconstructed from indexed metadata in-browser.
  const cloudNodes=cloud.map(row=>{
   const m=row.metadata||{};
   return {id:"n:"+row.path,path:row.path,label:m.title||row.path,
     type:"paper",url:row.url,doi:m.doi||"",journal:m.journal||"",
     aliases:m.aliases||[],keywords:m.keywords||{},rawLinks:m.rawLinks||[]};
  });
  const normalize=core.norm;
  const allPapers=new Map();
  for(const n of notes)allPapers.set(normalize(n.path),n);
  for(const n of cloudNodes)allPapers.set(normalize(n.path),n);
  const combined=[...allPapers.values()];
  const terms=new Map(),edges=[],unique=new Set(),unresolved=[],orphans=new Map();
  const aliases=new Map();
  const add=(key,n)=>{const k=normalize(key);if(!k)return;const a=aliases.get(k)||[];if(!a.includes(n))a.push(n);aliases.set(k,a);};
  for(const n of combined){
   add(n.path,n);add(n.path.replace(/\.(md|markdown)$/i,""),n);
   add(n.label,n);add(n.path.split("/").pop().replace(/\.(md|markdown)$/i,""),n);
   for(const a of n.aliases||[])add(a,n);
  }
  const resolve=(value,n)=>{
   const ref=String(value||"").replace(/\\/g,"/").split("#")[0].trim();
   const base=n.path.split("/").slice(0,-1).join("/");
   for(const key of [core.pathClean(base+"/"+ref),ref,ref.replace(/\.(md|markdown)$/i,"")]){
    const found=aliases.get(normalize(key));if(found&&found.length===1)return found[0];
   }
   return null;
  };
  const addEdge=(source,target,kind)=>{
   if(source===target)return;
   const k=kind+"|"+source+"|"+target;
   if(unique.has(k))return;unique.add(k);edges.push({source,target,kind});
  };
  for(const e of staticData.edges||[]){
   if(e.kind==="wiki"&&combined.some(n=>n.id===e.source)&&combined.some(n=>n.id===e.target))addEdge(e.source,e.target,"wiki");
  }
  for(const n of combined){
   const m=n.rawLinks||[];
   for(const ref of m){const linked=resolve(ref,n);if(linked)addEdge(n.id,linked.id,"wiki");else{
     const label=String(ref).split("#")[0].replace(/\\/g,"/").split("/").pop().replace(/\.(md|markdown)$/i,"").trim();
     if(label){const id="t:keyword:"+normalize(label);if(!orphans.has(id))orphans.set(id,{id,type:"keyword",label});addEdge(n.id,id,"wiki-keyword");}
     unresolved.push({from:n.path,target:ref});
    }}
   for(const [type,items]of Object.entries(n.keywords||{})){
    for(const word of Array.isArray(items)?items:[]){
     const label=String(word||"").trim();if(!label)continue;
     const id="t:"+type+":"+normalize(label);
     if(!terms.has(id))terms.set(id,{id,type,label});
     addEdge(n.id,id,"tag");
    }
   }
  }
  for(const [id,node]of orphans)if(!terms.has(id))terms.set(id,node);
  graph={version:1,nodes:[...combined,...terms.values()],edges,unresolved,
   stats:{papers:combined.length,tags:terms.size,wikilinks:edges.filter(e=>e.kind==="wiki").length,tagLinks:edges.filter(e=>e.kind==="tag").length,unresolved:unresolved.length}};
  selected=null;scale=1;ox=0;oy=0;filterView();
  $("graph-import-status").textContent=graph.stats.papers?
   "网站公开图谱已加载：云端 "+cloud.length+" 篇、静态 "+staticData.stats.papers+" 篇。":
   "云端文献库暂无记录。可以在下方使用管理员密钥直接上传 .md 或文件夹。";
 }catch(err){setStatus("图谱读取失败："+err.message);$("graph-import-status").textContent="云端加载失败："+err.message;}
}
async function uploadToCloud(){
 const status=$("graph-cloud-status"),button=$("graph-cloud-submit"),token=$("graph-cloud-token").value.trim();
 const files=[...$("graph-cloud-files").files,...$("graph-cloud-folder").files].filter(f=>/\.(md|markdown)$/i.test(f.name));
 if(!token){status.textContent="请输入 ADMIN_REVIEW_TOKEN 管理员密钥";return;}
 if(!files.length){status.textContent="请先选择 .md 文件或文件夹";return;}
 if(files.length>2500){status.textContent="一次最多选择 2500 篇文献";return;}
 const seen=new Set(),chosen=[];
 for(const file of files){
  if(file.size>1048576||file.size===0){status.textContent="单个文件需为 1 MB 以内："+file.name;return;}
  const path=(file.webkitRelativePath||file.name).replace(/^[^/]+\//,"");
  if(!path||path.split("/").some(x=>!x||x==="."||x==="..")){status.textContent="文件夹路径异常："+path;return;}
  if(seen.has(path)){status.textContent="本批选择了重复路径："+path;return;}
  seen.add(path);chosen.push({file,path});
 }
 button.disabled=true;let done=0,created=0,replaced=0;
 try{
  let batch=[],batchBytes=0;
  const send=async()=>{
   if(!batch.length)return;
   const response=await fetch("/api/literature-library",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
    body:JSON.stringify({files:batch})});
   const result=await response.json();
   if(!response.ok||!result.ok)throw Error(result.error||"上传失败");
   done+=result.processed;created+=result.created;replaced+=result.replaced;
   status.textContent="已保存 "+done+" / "+chosen.length+" 篇（新增 "+created+"，覆盖 "+replaced+"）";
   batch=[];batchBytes=0;
  };
  for(const {file,path}of chosen){
   const content=await file.text();
   const entry={path,content};
   const size=new TextEncoder().encode(JSON.stringify(entry)).length;
   if(batch.length>=8||batchBytes+size>2400000)await send();
   batch.push(entry);batchBytes+=size;
  }
  await send();
  $("graph-cloud-token").value="";
  $("graph-cloud-files").value="";$("graph-cloud-folder").value="";
  await loadPublic();
  status.textContent="上传成功：共 "+done+" 篇（新增 "+created+"，覆盖 "+replaced+"）。已更新公开知识图谱。";
 }catch(err){status.textContent="已保存 "+done+" 篇；后续上传失败："+err.message+"。可再次选择相同文件覆盖重试。";}
 finally{button.disabled=false;}
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
 for(const id of ["graph-search","graph-type"])$(id).addEventListener(id==="graph-search"?"input":"change",filterView);
 $("graph-fit").addEventListener("click",()=>{scale=1;ox=0;oy=0;draw();});
 $("graph-files").addEventListener("change",e=>importFolder(e.target.files).catch(err=>$("graph-import-status").textContent="导入失败："+err.message));
 $("graph-reload").addEventListener("click",loadPublic);
 $("graph-cloud-submit").addEventListener("click",uploadToCloud);
 $("graph-article-close").addEventListener("click",()=>{$("graph-article").hidden=true;});
 loadPublic();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();