import{k as l,$ as u,ah as p,o as e,c as n,a as s,V as t,T as c,F as v,a9 as b,P as h}from"./@vue-d9027515.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const g={class:"layout-navbars-breadcrumb-user-news"},k={class:"head-box"},y={class:"head-box-title"},f={class:"content-box"},x={class:"content-box-msg"},C={class:"content-box-time"},L=l({name:"layoutBreadcrumbUserNews"}),B=l({...L,setup(N){const o=u({newsList:[{label:"关于版本发布的通知",value:"oginix-vite-demo，基于 vue3 + CompositionAPI + typescript + vite + element plus，正式发布时间：2021年02月28日！",time:"2020-12-08"},{label:"关于学习交流的通知",value:"QQ群号码 665452019，欢迎小伙伴入群学习交流探讨！",time:"2020-12-08"}]}),r=()=>{o.newsList=[]},d=()=>{window.open("https://github.com/akram8/oginix-vite-demo")};return(a,$)=>{const _=p("el-empty");return e(),n("div",g,[s("div",k,[s("div",y,t(a.$t("message.user.newTitle")),1),o.newsList.length>0?(e(),n("div",{key:0,class:"head-box-btn",onClick:r},t(a.$t("message.user.newBtn")),1)):c("",!0)]),s("div",f,[o.newsList.length>0?(e(!0),n(v,{key:0},b(o.newsList,(i,m)=>(e(),n("div",{class:"content-box-item",key:m},[s("div",null,t(i.label),1),s("div",x,t(i.value),1),s("div",C,t(i.time),1)]))),128)):(e(),h(_,{key:1,description:a.$t("message.user.newDesc")},null,8,["description"]))]),o.newsList.length>0?(e(),n("div",{key:0,class:"foot-box",onClick:d},t(a.$t("message.user.newGo")),1)):c("",!0)])}}});const V=w(B,[["__scopeId","data-v-bf295cca"]]);export{V as default};