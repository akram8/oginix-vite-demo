import{Q as p}from"./qrcodejs2-fixes-9fe6cbf5.js";import{k as a,e as f,i as u,ah as e,o as h,c as v,W as o,Q as s,a as c,U as g}from"./@vue-d9027515.js";import{_ as x}from"./plugin-vueexport-helper-c27b6911.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";const q={class:"qrcode-container layout-pd"},b={class:"qrcode-img-warp"},k={class:"mb30 mt30 qrcode-img"},y=a({name:"funQrcode"}),w=a({...y,setup(Q){const t=f(),n=()=>{new p(t.value,{text:`https://akram8.github.io/oginix-vite-demo/#/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},r=()=>{t.value.innerHTML="",n()};return u(()=>{n()}),(C,R)=>{const d=e("el-alert"),_=e("ele-Refresh"),i=e("el-icon"),l=e("el-button"),m=e("el-card");return h(),v("div",q,[o(m,{shadow:"hover",header:"qrcodejs2 二维码生成"},{default:s(()=>[o(d,{title:"感谢优秀的 `qrcodejs2`，项目地址：https://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),c("div",b,[c("div",k,[c("div",{class:"qrcode",ref_key:"qrcodeRef",ref:t},null,512)]),o(l,{type:"primary",size:"default",onClick:r},{default:s(()=>[o(i,null,{default:s(()=>[o(_)]),_:1}),g(" 重新生成 ")]),_:1})])]),_:1})])}}});const D=x(w,[["__scopeId","data-v-8e3d3d30"]]);export{D as default};
