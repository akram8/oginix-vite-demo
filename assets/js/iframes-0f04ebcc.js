import{k as h,e as y,j as d,f as m,ar as I,o as n,c as o,a as k,F as w,a9 as O,u as c,R as p,W as R,Q as v,X as x,a2 as L,n as b}from"./@vue-d9027515.js";import{u as B}from"./vue-router-a2fac16f.js";const P={class:"layout-padding layout-padding-unset layout-iframe"},S={class:"layout-padding-auto layout-padding-view"},T=["src","data-url"],V=h({name:"layoutIframeView"}),E=h({...V,props:{refreshKey:{type:String,default:()=>""},name:{type:String,default:()=>"slide-right"},list:{type:Array,default:()=>[]}},setup(l){const s=l,f=y(),i=B(),g=d(()=>s.list.filter(e=>{var t;return(t=e.meta)==null?void 0:t.isIframeOpen})),_=d(()=>i.path),u=(e,t)=>{b(()=>{if(!f.value)return!1;f.value.forEach(r=>{r.dataset.url===e&&(r.onload=()=>{var a;(a=t.meta)!=null&&a.isIframeOpen&&t.meta.loading&&(t.meta.loading=!1)})})})};return m(()=>i.fullPath,e=>{const t=s.list.find(r=>r.path===e);if(!t)return!1;t.meta.isIframeOpen||(t.meta.isIframeOpen=!0),u(e,t)},{immediate:!0}),m(()=>s.refreshKey,()=>{const e=s.list.find(t=>t.path===i.path);if(!e)return!1;e.meta.isIframeOpen&&(e.meta.isIframeOpen=!1),setTimeout(()=>{e.meta.isIframeOpen=!0,e.meta.loading=!0,u(i.fullPath,e)})},{deep:!0}),(e,t)=>{const r=I("loading");return n(),o("div",P,[k("div",S,[(n(!0),o(w,null,O(c(g),a=>p((n(),o("div",{class:"w100",key:a.path,"element-loading-background":"white"},[R(L,{name:l.name},{default:v(()=>[p((n(),o("iframe",{src:a.meta.isLink,key:a.path,frameborder:"0",height:"100%",width:"100%",style:{position:"absolute"},"data-url":a.path,ref_for:!0,ref_key:"iframeRef",ref:f},null,8,T)),[[x,c(_)===a.path]])]),_:2},1032,["name"])])),[[r,a.meta.loading]])),128))])])}}});export{E as default};