import{C as u}from"./countup.js-d088875c.js";import{k as m,e as I,$ as S,i as R,ah as e,o as i,c as p,W as o,Q as n,F as B,a9 as L,a as t,U,n as V,P as j,L as _,V as d,K as q,bb as z,b9 as M}from"./@vue-d9027515.js";import{_ as E}from"./plugin-vueexport-helper-c27b6911.js";const f=s=>(z("data-v-b3a01b07"),s=s(),M(),s),F={class:"layout-pd"},T={class:"countup-card-item-title pb3"},$=f(()=>t("div",{class:"countup-card-item-title-num pb6"},null,-1)),A={class:"countup-card-item-tip pb3"},D=f(()=>t("div",{class:"countup-card-item-tip-num"},null,-1)),K={class:"flex-warp"},P={class:"flex-warp-item"},Q={class:"flex-warp-item-box"},W=m({name:"funCountup"}),G=m({...W,setup(s){const l=I([]),h=S({topCardItemList:[{title:"今日访问人数",titleNum:"123",tip:"在场人数",tipNum:"911",color:"--el-color-primary",iconColor:"#ffcb47",icon:"iconfont icon-jinridaiban"},{title:"实验室总数",titleNum:"123",tip:"使用中",tipNum:"611",color:"--el-color-success",iconColor:"#70cf41",icon:"iconfont icon-AIshiyanshi"},{title:"申请人数（月）",titleNum:"123",tip:"通过人数",tipNum:"911",color:"--el-color-warning",iconColor:"#dfae64",icon:"iconfont icon-shenqingkaiban"},{title:"销售情况",titleNum:"123",tip:"销售数",tipNum:"911",color:"--el-color-danger",iconColor:"#e56565",icon:"iconfont icon-ditu"}]}),r=()=>{V(()=>{l.value.forEach(a=>{new u(a.querySelector(".countup-card-item-title-num"),Math.random()*1e4).start(),new u(a.querySelector(".countup-card-item-tip-num"),Math.random()*1e3).start()})})},b=()=>{r()};return R(()=>{r()}),(a,H)=>{const C=e("el-alert"),y=e("el-col"),x=e("el-row"),v=e("ele-RefreshRight"),g=e("el-icon"),N=e("el-button"),k=e("el-card");return i(),p("div",F,[o(k,{shadow:"hover",header:"数字滚动演示"},{default:n(()=>[o(C,{title:"感谢优秀的 `countup.js`，项目地址：https://github.com/inorganik/countUp.js",type:"success",closable:!1,class:"mb15"}),o(x,{gutter:20},{default:n(()=>[(i(!0),p(B,null,L(h.topCardItemList,(c,w)=>(i(),j(y,{sm:6,class:"mb15",key:w},{default:n(()=>[t("div",{class:"countup-card-item countup-card-item-box",style:_({background:`var(${c.color})`})},[t("div",{class:"countup-card-item-flex",ref_for:!0,ref_key:"topCardItemRefs",ref:l},[t("div",T,d(c.title),1),$,t("div",A,d(c.tip),1),D],512),t("i",{class:q(c.icon),style:_({color:c.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),t("div",K,[t("div",P,[t("div",Q,[o(N,{type:"primary",size:"default",onClick:b},{default:n(()=>[o(g,null,{default:n(()=>[o(v)]),_:1}),U(" 重置/刷新数值 ")]),_:1})])])])]),_:1})])}}});const Y=E(G,[["__scopeId","data-v-b3a01b07"]]);export{Y as default};
