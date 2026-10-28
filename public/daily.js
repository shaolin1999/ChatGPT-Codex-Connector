(()=>{"use strict";
const $=id=>document.getElementById(id);
const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined&&text!==null)e.textContent=String(text);if(cls)e.className=cls;return e};
let activeIssue=null,archivePage=1,archivePages=1,archiveSize=10,archiveReadTicket=0;
async function request(url,options){const r=await fetch(url,{cache:"no-store",...options});const d=await r.json();if(!r.ok||!d.ok)throw Error(d.error||"操作失败");return d;}
function firstFiveLines(value){
 return String(value||"").replace(/\r\n?/g,"\n").split("\n").slice(0,5).join("\n");
}
function showFullIssue(issue){
 if(!issue)return;
 const panel=$("daily-paper-detail");
 $("daily-detail-number").textContent="发布日期 / "+issue.issue_date;
 $("daily-detail-title").textContent=issue.headline;
 $("daily-detail-body").textContent=issue.body;
 panel.hidden=false;
 panel.scrollIntoView({behavior:"smooth",block:"start"});
}
function renderIssue(issue){
 $("daily-paper-detail").hidden=true;
 activeIssue=issue;
 const preview=$("daily-current-preview"),read=$("daily-current-read"),status=$("daily-current-status");
 if(!issue){
   $("daily-current-date").textContent="尚无简报";
   $("daily-current-title").textContent="等待第一期 AI 前沿文献简报";
   status.hidden=false;
   status.textContent="暂无已发布简报。请在页面最下方的投稿中心提交并发布第一期。";
   preview.hidden=true;preview.textContent="";
   read.hidden=true;
   return;
 }
 $("daily-current-date").textContent=issue.issue_date;
 $("daily-current-title").textContent=issue.headline;
 preview.textContent=firstFiveLines(issue.body);
 preview.hidden=false;
 status.textContent="";
 status.hidden=true;
 read.hidden=false;
 read.onclick=()=>showFullIssue(activeIssue);
}
async function loadLatest(){
 try{const d=await request("/api/digests?latest=1");renderIssue(d.issue);}
 catch(error){$("daily-current-status").hidden=false;$("daily-current-status").textContent="简报暂时无法加载："+error.message;}
}
async function readArchivedIssue(id,button){
 const ticket=++archiveReadTicket;
 const status=$("daily-history-reader-status"),body=$("daily-history-reader-body");
 const previous=$("daily-history-list").querySelector(".is-selected");
 if(previous)previous.classList.remove("is-selected");
 const row=button.closest(".daily-history-row");if(row)row.classList.add("is-selected");
 $("daily-history-reader-title").textContent="正在读取完整简报…";
 $("daily-history-reader-date").textContent="RESEARCH DIGEST / FULL TEXT";
 body.hidden=true;body.textContent="";
 status.hidden=false;status.textContent="正在读取当期完整正文…";
 button.disabled=true;
 try{
  const data=await request("/api/digests?id="+encodeURIComponent(id));
  if(ticket!==archiveReadTicket)return;
  const issue=data.issue;
  $("daily-history-reader-title").textContent=issue.headline;
  $("daily-history-reader-date").textContent="发布日期 / "+issue.issue_date;
  body.textContent=issue.body||"本期暂无正文";
  body.hidden=false;
  status.textContent="";status.hidden=true;
  if(window.matchMedia("(max-width: 950px)").matches)
   $("daily-history-reader").scrollIntoView({behavior:"smooth",block:"start"});
 }catch(error){
  if(ticket===archiveReadTicket){status.textContent="读取简报失败："+error.message;$("daily-history-reader-title").textContent="暂时无法查看简报";}
 }finally{button.disabled=false;}
}
function resetArchiveReader(){
 archiveReadTicket++;
 $("daily-history-reader-date").textContent="RESEARCH DIGEST / FULL TEXT";
 $("daily-history-reader-title").textContent="选择一份简报阅读全文";
 $("daily-history-reader-status").hidden=false;
 $("daily-history-reader-status").textContent="在左侧列表点击“查看完整简报”，正文将显示在这里。";
 $("daily-history-reader-body").hidden=true;$("daily-history-reader-body").textContent="";
 const previous=$("daily-history-list").querySelector(".is-selected");
 if(previous)previous.classList.remove("is-selected");
}
function updateArchivePager(){
 $("daily-history-page").textContent="第 "+archivePage+" / "+archivePages+" 页";
 $("daily-history-prev").disabled=archivePage<=1;
 $("daily-history-next").disabled=archivePage>=archivePages;
 $("daily-history-jump").max=String(archivePages);
 $("daily-history-jump").value=String(archivePage);
}
async function loadArchive(){
 const status=$("daily-history-status"),list=$("daily-history-list");
 status.textContent="正在读取往期简报…";list.replaceChildren();
 try{
  const data=await request("/api/digests?page="+archivePage+"&per_page="+archiveSize);
  archivePages=Math.max(1,Math.ceil(data.total/data.per_page));
  if(archivePage>archivePages){archivePage=archivePages;return loadArchive();}
  status.textContent=data.total?"共 "+data.total+" 期":"暂无往期推送";
  for(const issue of data.issues){
   const row=el("article",null,"daily-history-row");
   const date=el("time",issue.issue_date,"daily-history-row-date");date.dateTime=issue.issue_date;
   const title=el("strong",issue.headline,"daily-history-row-title");
   const open=el("button","查看完整简报 ↗","daily-history-open");open.type="button";
   open.setAttribute("aria-label","查看 "+issue.issue_date+" "+issue.headline+" 的完整简报");
   open.addEventListener("click",()=>readArchivedIssue(issue.id,open));
   row.append(date,title,open);list.append(row);
  }
  if(!data.issues.length)list.append(el("p","暂无已发布简报。","daily-history-empty"));
  updateArchivePager();
 }catch(error){status.textContent="往期推送读取失败："+error.message;updateArchivePager();}
}
function jumpArchivePage(){
 const number=Number($("daily-history-jump").value);
 if(!Number.isSafeInteger(number)||number<1||number>archivePages){
  $("daily-history-status").textContent="请输入 1 至 "+archivePages+" 的页码";
  $("daily-history-jump").focus();return;
 }
 if(number!==archivePage){archivePage=number;resetArchiveReader();loadArchive();}
 else updateArchivePager();
}
function setTab(name){
 const valid=["digest","paper","code"];
 if(!valid.includes(name))name="digest";
 for(const kind of valid){
   const tab=$("submission-tab-"+kind);
   const panel=$(kind==="digest"?"daily-submit-panel":kind==="paper"?"new-sharing":"code-publish");
   const selected=kind===name;
   tab.setAttribute("aria-selected",String(selected));tab.tabIndex=selected?0:-1;panel.hidden=!selected;
 }
}
function init(){
 const tabs=[...document.querySelectorAll("[data-submission-tab]")];
 tabs.forEach((b,i)=>{
  b.addEventListener("click",()=>setTab(b.dataset.submissionTab));
  b.addEventListener("keydown",e=>{
    if(!["ArrowRight","ArrowLeft","Home","End"].includes(e.key))return;
    e.preventDefault();let n=e.key==="Home"?0:e.key==="End"?tabs.length-1:(i+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;
    setTab(tabs[n].dataset.submissionTab);tabs[n].focus();
  });
 });
 document.querySelectorAll("[data-open-submission]").forEach(a=>a.addEventListener("click",()=>setTab(a.dataset.openSubmission)));
 $("daily-detail-close").addEventListener("click",()=>{$("daily-paper-detail").hidden=true;});
 $("daily-history-prev").addEventListener("click",()=>{if(archivePage>1){archivePage--;resetArchiveReader();loadArchive();}});
 $("daily-history-next").addEventListener("click",()=>{if(archivePage<archivePages){archivePage++;resetArchiveReader();loadArchive();}});
 $("daily-history-size").addEventListener("change",()=>{archiveSize=Number($("daily-history-size").value)||10;archivePage=1;resetArchiveReader();loadArchive();});
 $("daily-history-go").addEventListener("click",jumpArchivePage);
 $("daily-history-jump").addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();jumpArchivePage();}});
 $("daily-history-reader-close").addEventListener("click",resetArchiveReader);
 $("daily-submit-date").value=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);
 $("daily-submit-body").addEventListener("input",()=>{
   const count=Array.from($("daily-submit-body").value).length;
   $("daily-submit-count").textContent=count+" / 20,000 字符";
   $("daily-submit-count").classList.toggle("over-limit",count>20000);
 });
 $("daily-submit-form").addEventListener("submit",async event=>{
   event.preventDefault();const button=$("daily-submit-button"),feedback=$("daily-submit-feedback");
   const date=$("daily-submit-date").value,headline=$("daily-submit-headline").value.trim(),body=$("daily-submit-body").value.trim(),token=$("daily-submit-token").value;
   if(Array.from(body).length>20000){feedback.textContent="简报不能超过 20,000 字符";return;}
   button.disabled=true;feedback.textContent="正在验证发布暗号并保存简报…";
   try{
     const result=await request("/api/digests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({issue_date:date,headline,body,approval_code:token})});
     feedback.textContent=result.message;
     $("daily-submit-token").value="";archivePage=1;resetArchiveReader();
     await Promise.all([loadLatest(),loadArchive()]);
     $("daily-digest").scrollIntoView({behavior:"smooth"});
   }catch(error){feedback.textContent="发布失败："+error.message;}
   finally{button.disabled=false;}
 });
 const hash=location.hash;
 setTab(hash==="#new-sharing"?"paper":hash==="#code-publish"?"code":"digest");
 loadLatest();loadArchive();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();