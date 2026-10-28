import {respond,database,sourceAllowed,adminAuthorized} from "../_lib/community.js";
import {MAX_MD_BYTES,MAX_MD_FILES,MAX_MD_REQUEST_BYTES,LibraryError,cleanMdPath,metadataForMd,readBodyBounded} from "../_lib/literature-library.js";

const CREATE_TABLE="CREATE TABLE IF NOT EXISTS literature_md_library ("+
 "path TEXT PRIMARY KEY,"+
 "content TEXT NOT NULL,"+
 "meta_json TEXT NOT NULL,"+
 "size_bytes INTEGER NOT NULL,"+
 "created_at TEXT NOT NULL DEFAULT (datetime('now')),"+
 "updated_at TEXT NOT NULL DEFAULT (datetime('now'))"+
 ")";
async function ensureTable(db){
 await db.prepare(CREATE_TABLE).run();
 await db.prepare("CREATE INDEX IF NOT EXISTS idx_literature_md_updated ON literature_md_library(updated_at DESC)").run();
}
const headers={
 "Cache-Control":"no-store",
 "X-Content-Type-Options":"nosniff",
 "Referrer-Policy":"no-referrer",
 "Content-Security-Policy":"default-src 'none'; sandbox"
};
export async function onRequestGet({request,env}){
 const db=database(env);
 if(!db)return respond({ok:false,error:"网站尚未绑定 D1 数据库 DB"},503);
 const url=new URL(request.url),q=url.searchParams;
 try{
  await ensureTable(db);
  if(q.has("file")){
   const path=cleanMdPath(q.get("file"));
   const row=await db.prepare("SELECT content FROM literature_md_library WHERE path=?").bind(path).first();
   if(!row)return respond({ok:false,error:"云端 Markdown 文件不存在"},404);
   return new Response(row.content,{status:200,headers:{...headers,"Content-Type":"text/plain; charset=utf-8"}});
  }
  if(q.get("index")==="1"){
   const offset=Math.max(0,Math.min(100000,Number(q.get("offset"))||0));
   const limit=250;
   const [rows,count]=await Promise.all([
    db.prepare("SELECT path,meta_json,size_bytes,updated_at FROM literature_md_library ORDER BY path LIMIT ? OFFSET ?").bind(limit,offset).all(),
    db.prepare("SELECT COUNT(*) AS n FROM literature_md_library").first()
   ]);
   const items=[];
   for(const row of rows.results||[]){
    let metadata;try{metadata=JSON.parse(row.meta_json);}catch{continue;}
    items.push({path:row.path,metadata,url:"/api/literature-library?file="+encodeURIComponent(row.path),
     size_bytes:row.size_bytes,updated_at:row.updated_at});
   }
   const total=Number(count?.n||0),nextOffset=offset+limit<total?offset+limit:null;
   return respond({ok:true,items,total,next_offset:nextOffset});
  }
  return respond({ok:false,error:"请指定 index=1 或 file=文件路径"},400);
 }catch(error){
  if(error instanceof LibraryError)return respond({ok:false,error:error.message},error.status);
  console.error("Cloud Markdown read failed",error);
  return respond({ok:false,error:"云端 Markdown 库读取失败，请检查 D1 绑定"},503);
 }
}
export async function onRequestPost({request,env}){
 if(!sourceAllowed(request))return respond({ok:false,error:"不接受跨站上传"},403);
 if(!adminAuthorized(request,env))return respond({ok:false,error:"请使用有效的管理员密钥 ADMIN_REVIEW_TOKEN 上传"},401);
 const db=database(env);
 if(!db)return respond({ok:false,error:"网站尚未绑定 D1 数据库 DB"},503);
 if((request.headers.get("Content-Type")||"").split(";")[0].trim().toLowerCase()!=="application/json")
  return respond({ok:false,error:"上传格式必须为 JSON"},415);
 if(Number(request.headers.get("Content-Length")||0)>MAX_MD_REQUEST_BYTES)
  return respond({ok:false,error:"上传包超过 3 MB，请分批上传"},413);
 try{
  const payload=JSON.parse(await readBodyBounded(request));
  const files=payload?.files;
  if(!Array.isArray(files)||files.length<1||files.length>MAX_MD_FILES)
   throw new LibraryError("单批必须上传 1–8 个 Markdown 文件");
  const pending=[],seen=new Set(),encoder=new TextEncoder();
  for(const file of files){
   const path=cleanMdPath(file?.path);
   const lower=path.normalize("NFKC").toLowerCase();
   if(seen.has(lower))throw new LibraryError("同一批次存在重复文件路径："+path);
   seen.add(lower);
   if(typeof file?.content!=="string"||!file.content.trim()||file.content.includes("\u0000"))
    throw new LibraryError("Markdown 文件为空或包含非法字符："+path);
   const bytes=encoder.encode(file.content).byteLength;
   if(bytes>MAX_MD_BYTES)throw new LibraryError("单个 .md 不得超过 1 MB："+path,413);
   const metadata=metadataForMd(path,file.content);
   pending.push({path,content:file.content,bytes,metadata});
  }
  await ensureTable(db);
  const originalRows=await db.prepare(
   "SELECT path FROM literature_md_library WHERE path IN ("+pending.map(()=>"?").join(",")+")"
  ).bind(...pending.map(f=>f.path)).all();
  const previous=new Set((originalRows.results||[]).map(r=>r.path));
  const stmts=pending.map(f=>db.prepare(
   "INSERT INTO literature_md_library(path,content,meta_json,size_bytes) VALUES(?,?,?,?) "+
   "ON CONFLICT(path) DO UPDATE SET content=excluded.content,meta_json=excluded.meta_json,"+
   "size_bytes=excluded.size_bytes,updated_at=datetime('now')"
  ).bind(f.path,f.content,JSON.stringify(f.metadata),f.bytes));
  await db.batch(stmts);
  return respond({ok:true,processed:pending.length,created:pending.filter(f=>!previous.has(f.path)).length,
   replaced:pending.filter(f=>previous.has(f.path)).length,
   message:"Markdown 已保存到 D1 云端文献库，知识图谱可立即重新加载。"});
 }catch(error){
  if(error instanceof LibraryError)return respond({ok:false,error:error.message},error.status);
  if(error instanceof SyntaxError)return respond({ok:false,error:"提交数据不是有效 JSON"},400);
  console.error("Cloud Markdown upload failed",error);
  return respond({ok:false,error:"云端 Markdown 保存失败，请在 Cloudflare 查看 D1 日志"},503);
 }
}
