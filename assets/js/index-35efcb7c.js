import{k as c,$ as w,j as g,i as C,ah as o,R as k,X as S,o as e,c as r,W as i,Q as l,F as y,a9 as M,P as B,a as n,u as b,a4 as H}from"./@vue-d9027515.js";import{l as I}from"./logo-mini-36d25161.js";import{_ as L}from"./plugin-vueexport-helper-c27b6911.js";const T=["src"],F=["innerHTML"],N={class:"sponsors-close"},V=c({name:"layoutSponsors"}),j=c({...V,setup(z){const s=w({sponsors:{list:[{url:I,text:"Hi~",link:"https://github.com/akram8/oginix-vite-demo"}],isShow:!1,index:0}}),_=g(()=>s.sponsors.list.length<=1?"never":"hover"),p=()=>{s.sponsors.isShow=!1},d=t=>{s.sponsors.index=t},u=()=>{window.open(s.sponsors.list[s.sponsors.index].link)},m=()=>{setTimeout(()=>{s.sponsors.isShow=!0},3e3)};return C(()=>{m()}),(t,D)=>{const h=o("el-carousel-item"),f=o("el-carousel"),x=o("SvgIcon");return k((e(),r("div",{class:"sponsors-container",title:"点击前往体验",onClick:u},[i(f,{height:"240px","indicator-position":"none",arrow:b(_),onChange:d},{default:l(()=>[(e(!0),r(y,null,M(s.sponsors.list,(a,v)=>(e(),B(h,{key:v},{default:l(()=>[n("img",{src:a.url,class:"sponsors-img"},null,8,T),n("div",{class:"sponsors-text",innerHTML:a.text},null,8,F)]),_:2},1024))),128))]),_:1},8,["arrow"]),n("div",N,[i(x,{name:"ele-Close",size:12,title:"关闭赞助商",onClick:H(p,["stop"])},null,8,["onClick"])])],512)),[[S,s.sponsors.isShow]])}}});const R=L(j,[["__scopeId","data-v-fa7da30b"]]);export{R as default};