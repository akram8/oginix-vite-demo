import{M as k}from"./@element-plus-96a31696.js";import{I as M}from"./index-c7d13164.js";import{k as g,$ as V,i as C,ah as m,ar as F,o as r,c as i,a as s,W as n,u as I,Q as l,U as d,R as U,F as B,a9 as L,V as _}from"./@vue-d9027515.js";import{_ as N}from"./plugin-vueexport-helper-c27b6911.js";import"./pinia-a73ffef5.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-e0b9a81d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-b46b26c7.js";import"./js-cookie-cf83ad76.js";import"./nprogress-8d2808ea.js";import"./axios-aba6f0e0.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./element-plus-77f413b4.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-0ee01be3.js";function S(u){return M({url:"https://yapi.smart-xwork.cn/mock/177849/api/meeting/userList",method:"get",data:u})}const Y={class:"chant-menu-container"},b={class:"search-panel"},T={class:"menu-panel"},E={class:"item-avatar"},P=["src"],Q={key:1},R={class:"item-name"},W={class:"user"},$={class:"message text-ellipsis"},j={class:"item-time"},q=g({name:"chatMenu"}),z=g({...q,setup(u){const o=V({userData:[],search:"",loading:!1}),f=e=>new Date(e).getFullYear()===new Date().getFullYear(),h=e=>!f(e)||new Date(e).getMonth()+1!==new Date().getMonth()+1?!1:new Date(e).getDay()===new Date().getDay(),v=e=>{if(e=="")return"";const c=e.split(" "),a=c[0].split("-");return h(e)?c[1]:f(e)?a[1]+"月"+a[2]+"日":a[0]+"年"+a[1]+"月"+a[2]+"日"},D=()=>{o.loading=!0,S().then(e=>{e.code==200&&(o.userData=e.data),o.loading=!1}).finally(()=>{o.loading=!1})};return C(()=>{D()}),(e,c)=>{const a=m("el-input"),w=m("SvgIcon"),p=m("el-dropdown-item"),y=m("el-dropdown"),x=F("loading");return r(),i("div",Y,[s("div",b,[n(a,{modelValue:o.search,"onUpdate:modelValue":c[0]||(c[0]=t=>o.search=t),class:"w-50 m-2",placeholder:"搜索","prefix-icon":I(k)},null,8,["modelValue","prefix-icon"]),n(y,{trigger:"click",placement:"bottom-end"},{dropdown:l(()=>[n(p,null,{default:l(()=>[d("创建群组")]),_:1}),n(p,null,{default:l(()=>[d("添加外部联系人")]),_:1}),n(p,null,{default:l(()=>[d("创建文档")]),_:1}),n(p,null,{default:l(()=>[d("加入会议")]),_:1})]),default:l(()=>[n(w,{name:"ele-CirclePlus",class:"plusIocn"})]),_:1})]),U((r(),i("div",T,[(r(!0),i(B,null,L(o.userData,t=>(r(),i("div",{class:"menu-item",key:t.id},[s("div",E,[t.avatar.length>0?(r(),i("img",{key:0,src:t.avatar},null,8,P)):(r(),i("span",Q,_(t.name.substring(0,2)),1))]),s("div",R,[s("div",W,_(t.name),1),s("div",$,[s("span",null,_(t.lastMessage),1)])]),s("div",j,_(v(t.time)),1)]))),128))])),[[x,o.loading]])])}}});const Fe=N(z,[["__scopeId","data-v-d47ac22d"]]);export{Fe as default};
