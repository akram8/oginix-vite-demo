import{Q as p}from"./qrcodejs2-fixes-9fe6cbf5.js";import{k as a,e as m,i as u,ah as e,o as h,c as v,W as o,Q as s,a as c,U as g}from"./@vue-d9027515.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";const q={class:"qrcode-container layout-pd"},b={class:"qrcode-img-warp"},y={class:"mb30 mt30 qrcode-img"},w=a({name:"funQrcode"}),k=a({...w,setup(Q){const t=m(),n=()=>{new p(t.value,{text:`https://lyt-top.gitee.io/oginix-vite-demo-preview/#/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},r=()=>{t.value.innerHTML="",n()};return u(()=>{n()}),(C,R)=>{const _=e("el-alert"),d=e("ele-Refresh"),i=e("el-icon"),l=e("el-button"),f=e("el-card");return h(),v("div",q,[o(f,{shadow:"hover",header:"qrcodejs2 二维码生成"},{default:s(()=>[o(_,{title:"感谢优秀的 `qrcodejs2`，项目地址：https://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),c("div",b,[c("div",y,[c("div",{class:"qrcode",ref_key:"qrcodeRef",ref:t},null,512)]),o(l,{type:"primary",size:"default",onClick:r},{default:s(()=>[o(i,null,{default:s(()=>[o(d)]),_:1}),g(" 重新生成 ")]),_:1})])]),_:1})])}}});const D=x(k,[["__scopeId","data-v-fdcb16f6"]]);export{D as default};
