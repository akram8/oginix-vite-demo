import{d as p,a as k,y,o as v,b as L,P as b,c as I,e as o,J as S,k as V,w as M,f as a,C as d,B as u,g as i,H as m,I as E,j as B,t as $,G as T,v as W,T as j}from"./index-f97ca1e0.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const N={class:"el-dropdown-menu"},O=["onClick"],z=p({name:"layoutTagsViewContextmenu"}),A=p({...z,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(f,{expose:x,emit:_}){const n=f,e=k({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"message.tagsView.refresh",affix:!1,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"message.tagsView.close",affix:!1,icon:"ele-Close"},{contextMenuClickId:2,txt:"message.tagsView.closeOther",affix:!1,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"message.tagsView.closeAll",affix:!1,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"message.tagsView.fullscreen",affix:!1,icon:"iconfont icon-fullscreen"}],item:{},arrowLeft:10}),r=y(()=>n.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:n.dropdown.y}:n.dropdown),w=t=>{_("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},C=t=>{var l;e.item=t,(l=t.meta)!=null&&l.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,c(),setTimeout(()=>{e.isShow=!0},10)},c=()=>{e.isShow=!1};return v(()=>{document.body.addEventListener("click",c)}),L(()=>{document.body.removeEventListener("click",c)}),b(()=>n.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),x({openContextmenu:C}),(t,l)=>{const h=I("SvgIcon");return o(),S(j,{name:"el-zoom-in-center"},{default:V(()=>[M((o(),a("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:d(`top: ${u(r).y+5}px;left: ${u(r).x}px;`),key:Math.random()},[i("ul",N,[(o(!0),a(m,null,E(e.dropdownList,(s,g)=>(o(),a(m,null,[s.affix?T("",!0):(o(),a("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:g,onClick:F=>w(s.contextMenuClickId)},[B(h,{name:s.icon},null,8,["name"]),i("span",null,$(t.$t(s.txt)),1)],8,O))],64))),256))]),i("div",{class:"el-popper__arrow",style:d({left:`${e.arrowLeft}px`})},null,4)],4)),[[W,e.isShow]])]),_:1})}}});const H=D(A,[["__scopeId","data-v-2b05a1ce"]]);export{H as default};
