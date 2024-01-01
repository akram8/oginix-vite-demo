import{R as q,S as z,T as U,U as R,E as V}from"./@element-plus-6327e551.js";import{k as B,$ as L,j as M,a0 as N,ah as i,o as n,c as r,a as s,V as c,L as u,T as d,P as y,Q as o,W as l,U as I,bb as P,b9 as Q}from"./@vue-d9027515.js";import{_ as A}from"./plugin-vueexport-helper-c27b6911.js";const j=e=>{let t="";for(var D=0;D<e.length;D++)t+=e[D].charCodeAt().toString(16);return t.length>6?t=t.substr(-6):t.length>3?t=t.substr(-3):t="aquamarine","#"+t},T=Object.freeze(Object.defineProperty({__proto__:null,getColor:j},Symbol.toStringTag,{value:"Module"})),O=B({name:"chatItem",components:{Edit:q,Comment:z,Download:U,DeleteFilled:R,MoreFilled:V},props:{chatData:{type:Object,default:()=>{}},direction:{type:String,default:"default"},hasAction:{type:Boolean,default:!0},mStyle:{type:String,default:""},fStyle:{type:String,default:""},audioStyle:{type:String,default:""},videoStyle:{type:String,default:"height: 300px; width: 100%;"}},setup(e,t){const v="https://akram8.github.io/oginix-vite-demo/"+"/download/backlogFilePreview/",_=L({message:M(()=>e.chatData.message)}),C=a=>{t.emit("onClickQuote",a)},w=a=>{t.emit("btnEdit",a)},g=a=>{t.emit("btnSaveEdit",a)},f=a=>{t.emit("btnCancelEdit",a)},b=a=>{t.emit("btnQuote",a)},k=a=>{t.emit("btnDelete",a)},S=a=>{window.location.href=v+a.file.fileId},p=a=>String(localStorage.getItem("userId"))===String(a),h=()=>{let a="";return e.direction==="default"?a=p(e.chatData.userId)?"flex-direction: row-reverse;":"flex-direction: row;":e.direction==="left"?a="flex-direction: row;":e.direction==="right"&&(a="flex-direction: row-reverse;"),a};return{uploadURL:v,...N(_),openQuotePanel:C,showMessageEdit:w,messageEdit:g,messageEditCancel:f,messageQuote:b,messageDelete:k,downloadFile:S,isCurrentUser:p,getPanelStyle:h,utils:T}}});const W=e=>(P("data-v-e225be78"),e=e(),Q(),e),G={class:"message-name"},H={class:"message-time"},J=W(()=>s("span",{style:{float:"left",color:"#8f959e"}},"| ",-1)),K={key:0},X={key:2,class:"demo-image__preview"},Y={key:3},Z=["src"],x=["label"],ee={key:4},te=["src"],ae={class:"file-content"},le={class:"file-name"},oe={class:"file-size"},se={key:0,class:"other"},ie={class:"other-button-group"};function ne(e,t,D,v,_,C){const w=i("el-input"),g=i("el-form-item"),f=i("el-button"),b=i("el-form"),k=i("el-image"),S=i("Edit"),p=i("el-icon"),h=i("el-tooltip"),a=i("Comment"),E=i("DeleteFilled"),F=i("Download"),de=i("MoreFilled"),$=i("el-button-group");return n(),r("div",{class:"item-panel",style:u(e.getPanelStyle())},[s("div",{class:"avatar",style:u("background:"+e.utils.getColor(e.chatData.name))},[s("span",null,c(e.chatData.name.substring(0,2)),1)],4),s("div",{class:"message",style:u(e.mStyle)},[s("div",G,[s("span",null,c(e.chatData.name),1),s("span",H,c(e.chatData.time),1)]),s("div",{class:"message-panel",style:u(e.chatData.qoute&&(e.chatData.qoute.message||e.chatData.qoute.file)?"background: #cce0ff;padding: 10px 12px;border-radius: 5px;":"")},[e.chatData.qoute?(n(),r("div",{key:0,class:"send-quote",onClick:t[0]||(t[0]=m=>e.openQuotePanel(e.chatData.qoute))},[J,s("pre",null,c(`引用 ${e.chatData.qoute.name}: ${e.chatData.qoute.file&&e.chatData.qoute.file.fileId?"【文件】"+e.chatData.qoute.file.name:e.chatData.qoute.message}`),1)])):d("",!0),e.chatData.message?(n(),r("div",{key:1,class:"message-info",style:u(e.chatData.qoute&&(e.chatData.qoute.message||e.chatData.qoute.file)?"padding: 0px;":"")},[e.chatData.showEdit===void 0||e.chatData.showEdit===""?(n(),r("pre",K,c(e.chatData.message),1)):(n(),y(b,{key:1,inline:!0},{default:o(()=>[l(g,null,{default:o(()=>[l(w,{type:"textarea",modelValue:e.$props.chatData.message,"onUpdate:modelValue":t[1]||(t[1]=m=>e.$props.chatData.message=m),style:{width:"600px","min-width":"auto"},autosize:{minRows:1,maxRows:4}},null,8,["modelValue"])]),_:1}),l(g,null,{default:o(()=>[l(f,{round:"",size:"small",type:"primary",onClick:t[2]||(t[2]=m=>e.messageEdit(e.chatData))},{default:o(()=>[I("保存")]),_:1}),l(f,{round:"",size:"small",onClick:t[3]||(t[3]=m=>e.messageEditCancel(e.chatData))},{default:o(()=>[I("取消")]),_:1})]),_:1})]),_:1}))],4)):d("",!0),e.chatData.file&&e.chatData.file.type&&e.chatData.file.type==="image"?(n(),r("div",X,[l(k,{style:{width:"auto",height:"100px","min-width":"30px","min-height":"30px","max-width":"380px"},src1:e.chatData.file.fileSrc,src:e.uploadURL+e.chatData.file.fileId,"zoom-rate":1.2,"preview-src-list":[e.uploadURL+e.chatData.file.fileId],"initial-index":4,fit:"contain"},null,8,["src1","src","zoom-rate","preview-src-list"])])):d("",!0),e.chatData.file&&e.chatData.file.type&&e.chatData.file.type==="video"?(n(),r("div",Y,[s("video",{style:u(e.videoStyle),src:e.uploadURL+e.chatData.file.fileId,controls:""},[s("track",{kind:"metadata",label:e.chatData.file.name},null,8,x)],12,Z)])):d("",!0),e.chatData.file&&e.chatData.file.type&&e.chatData.file.type==="audio"?(n(),r("div",ee,[s("audio",{style:u(e.audioStyle),src:e.uploadURL+e.chatData.file.fileId,controls:""},null,12,te)])):d("",!0),e.chatData.file&&e.chatData.file.type&&e.chatData.file.type!=="image"&&e.chatData.file.type!=="video"&&e.chatData.file.type!=="audio"?(n(),r("div",{key:5,class:"message-file",style:u(e.fStyle)},[s("div",{class:"file-avatar",style:u({backgroundColor:e.chatData.file.typeColor})},c(e.chatData.file.type),5),s("div",ae,[s("div",le,c(e.chatData.file.name),1),s("div",oe,c(e.chatData.file.size),1)])],4)):d("",!0)],4)],4),e.hasAction?(n(),r("div",se,[s("div",ie,[l($,{class:"ml-4",size:"small"},{default:o(()=>[!(e.chatData.file&&e.chatData.file.fileId&&String(e.chatData.file.fileId).length>0)&&e.isCurrentUser(e.chatData.userId)?(n(),y(h,{key:0,content:"编辑","show-after":300,placement:"top"},{default:o(()=>[l(f,{disabled:e.chatData.file&&e.chatData.file.fileId&&String(e.chatData.file.fileId).length>0,onClick:t[4]||(t[4]=m=>e.showMessageEdit(e.chatData)),size:"small"},{default:o(()=>[l(p,null,{default:o(()=>[l(S)]),_:1})]),_:1},8,["disabled"])]),_:1})):d("",!0),l(h,{content:"引用","show-after":300,placement:"top"},{default:o(()=>[l(f,{onClick:t[5]||(t[5]=m=>e.messageQuote(e.chatData)),size:"small"},{default:o(()=>[l(p,null,{default:o(()=>[l(a)]),_:1})]),_:1})]),_:1}),e.isCurrentUser(e.chatData.userId)?(n(),y(h,{key:1,content:"删除","show-after":300,placement:"top"},{default:o(()=>[l(f,{disabled:!e.isCurrentUser(e.chatData.userId),onClick:t[6]||(t[6]=m=>e.messageDelete(e.chatData)),size:"small"},{default:o(()=>[l(p,null,{default:o(()=>[l(E)]),_:1})]),_:1},8,["disabled"])]),_:1})):d("",!0),e.chatData.file&&e.chatData.file.type?(n(),y(h,{key:2,content:"下载","show-after":300,placement:"top"},{default:o(()=>[l(f,{onClick:t[7]||(t[7]=m=>e.downloadFile(e.chatData)),size:"small"},{default:o(()=>[l(p,null,{default:o(()=>[l(F)]),_:1})]),_:1})]),_:1})):d("",!0),d("",!0)]),_:1})])])):d("",!0)],4)}const me=A(O,[["render",ne],["__scopeId","data-v-e225be78"]]);export{me as default};
