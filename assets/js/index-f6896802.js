import{k as l,$ as x,j as v,i as C,ah as o,R as S,X as k,o as e,c as a,W as c,Q as i,F as y,a9 as B,P as M,a as n,u as I,a4 as L}from"./@vue-d9027515.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const T="/oginix-vite-demo/assets/png/ccflowRightNextAdmin-93a8068b.png",F=["src"],H=["innerHTML"],P={class:"sponsors-close"},R=l({name:"layoutSponsors"}),V=l({...R,setup(b){const s=x({sponsors:{list:[{url:T,text:"驰骋BPM系统包含表单引擎+流程引擎+权限控制,方便集成,配置灵活,功能强大,适合中国国情的工作流引擎.演示:http://demo.ccflow.org。右上角点star方可加群: 1060674395",link:"http://www.ccflow.org/"}],isShow:!1,index:0}}),p=v(()=>s.sponsors.list.length<=1?"never":"hover"),_=()=>{s.sponsors.isShow=!1},d=t=>{s.sponsors.index=t},u=()=>{window.open(s.sponsors.list[s.sponsors.index].link)},h=()=>{setTimeout(()=>{s.sponsors.isShow=!0},3e3)};return C(()=>{h()}),(t,j)=>{const m=o("el-carousel-item"),w=o("el-carousel"),f=o("SvgIcon");return S((e(),a("div",{class:"sponsors-container",title:"点击前往体验",onClick:u},[c(w,{height:"240px","indicator-position":"none",arrow:I(p),onChange:d},{default:i(()=>[(e(!0),a(y,null,B(s.sponsors.list,(r,g)=>(e(),M(m,{key:g},{default:i(()=>[n("img",{src:r.url,class:"sponsors-img"},null,8,F),n("div",{class:"sponsors-text",innerHTML:r.text},null,8,H)]),_:2},1024))),128))]),_:1},8,["arrow"]),n("div",P,[c(f,{name:"ele-Close",size:12,title:"关闭赞助商",onClick:L(_,["stop"])},null,8,["onClick"])])],512)),[[k,s.sponsors.isShow]])}}});const D=N(V,[["__scopeId","data-v-1476017a"]]);export{D as default};