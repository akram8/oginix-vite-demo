import{k as L,e as g,$ as R,i as W,_ as E,ah as a,R as D,X as x,o as G,c as z,a as t,K as P,a4 as l,U as $,V as u,W as n,Q as m,aa as N,Y as Z,n as K,bb as U,b9 as X}from"./@vue-d9027515.js";import{f as d}from"./formatTime-29ac8c52.js";import{u as j,L as Q}from"./index-f345148b.js";import{s as J}from"./pinia-a73ffef5.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-e0b9a81d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-b46b26c7.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-8d2808ea.js";import"./axios-aba6f0e0.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./element-plus-3b133bec.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-0ee01be3.js";import"./vue-demi-71ba0ef2.js";const p=r=>(U("data-v-0b189848"),r=r(),X(),r),ee=p(()=>t("div",{class:"layout-lock-screen-mask"},null,-1)),oe={class:"layout-lock-screen"},te=["onTouchstart","onTouchmove","onTouchend"],ne={class:"layout-lock-screen-date-box"},se={class:"layout-lock-screen-date-box-time"},ie={class:"layout-lock-screen-date-box-minutes"},ce={class:"layout-lock-screen-date-box-info"},ae={class:"layout-lock-screen-date-top"},re=p(()=>t("div",{class:"layout-lock-screen-date-top-text"},"上滑解锁",-1)),le={class:"layout-lock-screen-login"},me={class:"layout-lock-screen-login-box"},pe=p(()=>t("div",{class:"layout-lock-screen-login-box-img"},[t("img",{src:"https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60WFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60WFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"})],-1)),ue=p(()=>t("div",{class:"layout-lock-screen-login-box-name"},"Administrator",-1)),de={class:"layout-lock-screen-login-box-value"},fe={class:"layout-lock-screen-login-icon"},_e=L({name:"layoutLockScreen"}),ve=L({..._e,setup(r){const f=g(),_=g(),T=j(),{themeConfig:s}=J(T),e=R({transparency:1,downClientY:0,moveDifference:0,isShowLoockLogin:!1,isFlags:!1,querySelectorEl:"",time:{hm:"",s:"",mdq:""},setIntervalTime:0,isShowLockScreen:!1,isShowLockScreenIntervalTime:0,lockScreenPassword:""}),b=o=>{e.isFlags=!0,e.downClientY=o.clientY},I=o=>{e.isFlags=!0,e.downClientY=o.touches[0].clientY},C=o=>{e.moveDifference=o.clientY-e.downClientY,v()},M=o=>{e.moveDifference=o.touches[0].clientY-e.downClientY,v()},v=()=>{if(e.isFlags){const o=e.querySelectorEl,c=e.transparency-=1/200;if(e.moveDifference>=0)return!1;o.setAttribute("style",`top:${e.moveDifference}px;cursor:pointer;opacity:${c};`),e.moveDifference<-400&&(o.setAttribute("style",`top:${-o.clientHeight}px;cursor:pointer;transition:all 0.3s ease;`),e.moveDifference=-o.clientHeight,setTimeout(()=>{var i;o&&((i=o.parentNode)==null||i.removeChild(o))},300)),e.moveDifference===-o.clientHeight&&(e.isShowLoockLogin=!0,_.value.focus())}},h=()=>{e.isFlags=!1,e.transparency=1,e.moveDifference>=-400&&e.querySelectorEl.setAttribute("style","top:0px;opacity:1;transition:all 0.3s ease;")},Y=()=>{K(()=>{e.querySelectorEl=f.value})},k=()=>{e.time.hm=d(new Date,"HH:MM"),e.time.s=d(new Date,"SS"),e.time.mdq=d(new Date,"mm月dd日，WWW")},q=()=>{k(),e.setIntervalTime=window.setInterval(()=>{k()},1e3)},A=()=>{s.value.isLockScreen?e.isShowLockScreenIntervalTime=window.setInterval(()=>{if(s.value.lockScreenTime<=1)return e.isShowLockScreen=!0,S(),!1;s.value.lockScreenTime--},1e3):clearInterval(e.isShowLockScreenIntervalTime)},S=()=>{s.value.isDrawer=!1,Q.set("themeConfig",s.value)},w=()=>{s.value.isLockScreen=!1,s.value.lockScreenTime=30,S()};return W(()=>{Y(),q(),A()}),E(()=>{window.clearInterval(e.setIntervalTime),window.clearInterval(e.isShowLockScreenIntervalTime)}),(o,c)=>{const i=a("SvgIcon"),V=a("ele-Right"),B=a("el-icon"),F=a("el-button"),H=a("el-input");return D((G(),z("div",null,[ee,t("div",{class:P(["layout-lock-screen-img",{"layout-lock-screen-filter":e.isShowLoockLogin}])},null,2),t("div",oe,[t("div",{class:"layout-lock-screen-date",ref_key:"layoutLockScreenDateRef",ref:f,onMousedown:b,onMousemove:C,onMouseup:h,onTouchstart:l(I,["stop"]),onTouchmove:l(M,["stop"]),onTouchend:l(h,["stop"])},[t("div",ne,[t("div",se,[$(u(e.time.hm),1),t("span",ie,u(e.time.s),1)]),t("div",ce,u(e.time.mdq),1)]),t("div",ae,[n(i,{name:"ele-Top"}),re])],40,te),n(Z,{name:"el-zoom-in-center"},{default:m(()=>[D(t("div",le,[t("div",me,[pe,ue,t("div",de,[n(H,{placeholder:"请输入密码",ref_key:"layoutLockScreenInputRef",ref:_,modelValue:e.lockScreenPassword,"onUpdate:modelValue":c[0]||(c[0]=y=>e.lockScreenPassword=y),onKeyup:c[1]||(c[1]=N(l(y=>w(),["stop"]),["enter","native"]))},{append:m(()=>[n(F,{onClick:w},{default:m(()=>[n(B,{class:"el-input__icon"},{default:m(()=>[n(V)]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),t("div",fe,[n(i,{name:"ele-Microphone",size:20}),n(i,{name:"ele-AlarmClock",size:20}),n(i,{name:"ele-SwitchButton",size:20})])],512),[[x,e.isShowLoockLogin]])]),_:1})])],512)),[[x,e.isShowLockScreen]])}}});const Oe=O(ve,[["__scopeId","data-v-0b189848"]]);export{Oe as default};
