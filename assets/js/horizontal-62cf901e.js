import{d as A,M as T,_ as w,X as N,u as P,s as f,R as V,a as j,y as E,N as O,aJ as v,c as r,e as o,f as d,j as a,k as c,H as k,I as F,B as C,J as g,g as y,t as m,aC as J,i as L,h as U,A as X,z as q}from"./index-f97ca1e0.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const K={class:"el-menu-horizontal-warp"},Q=A({name:"navMenuHorizontal"}),W=A({...Q,props:{menuList:{type:Array,default:()=>[]}},setup(S){const R=S,x=T(()=>w(()=>import("./subItem-e013c1b7.js"),["assets/js/subItem-e013c1b7.js","assets/js/index-f97ca1e0.js","assets/css/index-a7bdd87a.css"])),B=N(),I=P(),{routesList:z}=f(B),{themeConfig:p}=f(I),$=V(),l=j({defaultActive:""}),b=E(()=>R.menuList),_=s=>s.filter(t=>{var e;return!((e=t.meta)!=null&&e.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=_(t.children)),t)),D=s=>{const t=s.split("/");let e={children:[]};return _(z.value).map((i,u)=>{i.path===`/${t[1]}`&&(i.k=u,e.item={...i},e.children=[{...i}],i.children&&(e.children=i.children))}),e},h=s=>{const{path:t,meta:e}=s;if(p.value.layout==="classic")l.defaultActive=`/${t==null?void 0:t.split("/")[1]}`;else{const i=e!=null&&e.isDynamic?e.isDynamicPath.split("/"):t.split("/");i.length>=4&&(e!=null&&e.isHide)?l.defaultActive=i.splice(0,3).join("/"):l.defaultActive=t}},H=s=>{X.handleOpenLink(s)};return O(()=>{h($)}),v(s=>{h(s);let{layout:t,isClassicSplitMenu:e}=p.value;t==="classic"&&e&&q.emit("setSendClassicChildren",D(s.path))}),(s,t)=>{const e=r("SvgIcon"),i=r("el-sub-menu"),u=r("el-menu-item"),M=r("el-menu");return o(),d("div",K,[a(M,{router:"","default-active":l.defaultActive,"background-color":"transparent",mode:"horizontal"},{default:c(()=>[(o(!0),d(k,null,F(C(b),n=>(o(),d(k,null,[n.children&&n.children.length>0?(o(),g(i,{index:n.path,key:n.path},{title:c(()=>[a(e,{name:n.meta.icon},null,8,["name"]),y("span",null,m(s.$t(n.meta.title)),1)]),default:c(()=>[a(C(x),{chil:n.children},null,8,["chil"])]),_:2},1032,["index"])):(o(),g(u,{index:n.path,key:n.path},J({_:2},[!n.meta.isLink||n.meta.isLink&&n.meta.isIframe?{name:"title",fn:c(()=>[a(e,{name:n.meta.icon},null,8,["name"]),L(" "+m(s.$t(n.meta.title)),1)]),key:"0"}:{name:"title",fn:c(()=>[y("a",{class:"w100",onClick:U(Y=>H(n),["prevent"])},[a(e,{name:n.meta.icon},null,8,["name"]),L(" "+m(s.$t(n.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])])}}});const te=G(W,[["__scopeId","data-v-a37785d1"]]);export{te as default};
