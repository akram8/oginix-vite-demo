import{_ as V,u as W,o as $}from"./index-be8ca750.js";import{k as y,aN as w,$ as x,j as C,i as R,f as q,ah as p,o as s,P as c,Q as n,c as k,F as g,a9 as v,u,W as d,a as f,V as h,ab as E,a4 as M}from"./@vue-d9027515.js";import{u as N,o as O}from"./vue-router-a2fac16f.js";import{s as j}from"./pinia-a73ffef5.js";import"./vue-i18n-e0b9a81d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-b46b26c7.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-8d2808ea.js";import"./axios-aba6f0e0.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./element-plus-3b133bec.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-0ee01be3.js";import"./vue-demi-71ba0ef2.js";const F=y({name:"navMenuVertical"}),Pe=y({...F,props:{menuList:{type:Array,default:()=>[]}},setup(L){const A=L,b=w(()=>V(()=>import("./subItem-535d2bce.js"),["assets/js/subItem-535d2bce.js","assets/js/@vue-d9027515.js","assets/js/index-be8ca750.js","assets/js/pinia-a73ffef5.js","assets/js/vue-demi-71ba0ef2.js","assets/js/vue-router-a2fac16f.js","assets/js/vue-i18n-e0b9a81d.js","assets/js/@intlify-9e8a497c.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-b46b26c7.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-96a31696.js","assets/js/nprogress-8d2808ea.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-aba6f0e0.js","assets/js/qs-bbfcbdf3.js","assets/js/side-channel-eafc5c70.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-9ceb8f5b.js","assets/js/object-inspect-7b08a46e.js","assets/js/element-plus-3b133bec.js","assets/js/lodash-es-36eb724a.js","assets/js/@vueuse-2d9216d7.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-6aac7dfa.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-1d60d822.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-682dc3ac.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-0ee01be3.js","assets/css/index-47129bcd.css"])),D=W(),{themeConfig:l}=j(D),a=N(),i=x({defaultActive:a.meta.isDynamic?a.meta.isDynamicPath:a.path,isCollapse:!1}),P=C(()=>A.menuList),S=C(()=>l.value),_=t=>{const{path:r,meta:o}=t,m=o!=null&&o.isDynamic?o.isDynamicPath.split("/"):r.split("/");return m.length>=4&&(o!=null&&o.isHide)?m.splice(0,3).join("/"):r},B=t=>{$.handleOpenLink(t)};return R(()=>{i.defaultActive=_(a)}),O(t=>{i.defaultActive=_(t),document.body.clientWidth<1e3&&(l.value.isCollapse=!1)}),q(()=>l.value.isCollapse,t=>{document.body.clientWidth<=1e3?i.isCollapse=!1:i.isCollapse=t},{immediate:!0}),(t,r)=>{const o=p("SvgIcon"),m=p("el-sub-menu"),I=p("el-menu-item"),T=p("el-menu");return s(),c(T,{router:"","default-active":i.defaultActive,"background-color":"transparent",collapse:i.isCollapse,"unique-opened":u(S).isUniqueOpened,"collapse-transition":!1},{default:n(()=>[(s(!0),k(g,null,v(u(P),e=>(s(),k(g,null,[e.children&&e.children.length>0?(s(),c(m,{index:e.path,key:e.path},{title:n(()=>[d(o,{name:e.meta.icon},null,8,["name"]),f("span",null,h(t.$t(e.meta.title)),1)]),default:n(()=>[d(u(b),{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(s(),c(I,{index:e.path,key:e.path},E({default:n(()=>[d(o,{name:e.meta.icon},null,8,["name"])]),_:2},[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?{name:"title",fn:n(()=>[f("span",null,h(t.$t(e.meta.title)),1)]),key:"0"}:{name:"title",fn:n(()=>[f("a",{class:"w100",onClick:M(H=>B(e),["prevent"])},h(t.$t(e.meta.title)),9,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}}});export{Pe as default};
