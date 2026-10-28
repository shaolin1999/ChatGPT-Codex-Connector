#!/usr/bin/env node
// Build graph index from public/literature-md/ before static deployment.
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {buildGraph}=require("../public/graph-core.js");
const root=path.resolve(__dirname,"../public/literature-md");
const out=path.resolve(__dirname,"../public/data/literature-graph.json");
function scan(dir){
 if(!fs.existsSync(dir))return[];
 return fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e=>{
  if(e.name.startsWith("."))return[];
  const p=path.join(dir,e.name);
  if(e.isDirectory())return scan(p);
  if(!e.isFile()||!/\.(?:md|markdown)$/i.test(e.name))return[];
  const relative=path.relative(root,p).split(path.sep).join("/");
  if(fs.statSync(p).size>4194304){console.warn("Skipping >4 MB",relative);return[];}
  return[{path:relative,content:fs.readFileSync(p,"utf8"),
   url:"/literature-md/"+relative.split("/").map(encodeURIComponent).join("/")}];
 });
}
const graph=buildGraph(scan(root));
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,JSON.stringify(graph,null,2)+"\n","utf8");
console.log("Graph built",graph.stats);
if(graph.unresolved.length)console.warn("Unresolved links",graph.unresolved.length);
