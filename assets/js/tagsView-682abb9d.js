import{_ as Re,a as J,u as be,c as _e,b as xe,o as Z,e as d,S as y,M as ee}from"./index-173eb89e.js";import{k as ie,aN as qe,e as D,$ as Se,j as O,H as De,_ as Ae,ai as Ie,i as ke,f as Pe,ah as se,o as h,c as T,W as E,Q as Ue,a as ae,K as M,u as V,F as te,a9 as $e,a4 as R,T as b,P as N,V as Oe,n as j}from"./@vue-d9027515.js";import{u as Ee,b as Me,o as Ne}from"./vue-router-a2fac16f.js";import{S as je}from"./sortablejs-be94e56d.js";import{s as B}from"./pinia-a73ffef5.js";import{a as Be}from"./element-plus-3b133bec.js";import{_ as We}from"./plugin-vueexport-helper-c27b6911.js";import"./vue-i18n-e0b9a81d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-b46b26c7.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-8d2808ea.js";import"./axios-aba6f0e0.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-0ee01be3.js";import"./vue-demi-71ba0ef2.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";const Fe=["data-url","onContextmenu","onMousedown","onClick"],He={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},ze=ie({name:"layoutTagsView"}),Ke=ie({...ze,setup(ve){const ne=qe(()=>Re(()=>import("./contextmenu-eacdea8b.js"),["assets/js/contextmenu-eacdea8b.js","assets/js/@vue-d9027515.js","assets/js/plugin-vueexport-helper-c27b6911.js","assets/css/contextmenu-282ea43e.css"])),f=D([]),_=D(),W=D(),re=D(),le=J(),ue=be(),oe=J(),ce=_e(),{themeConfig:F}=B(ue),{tagsViewRoutes:H}=B(oe),{routesList:me}=B(ce),w=xe(),m=Ee(),c=Me(),t=Se({routeActive:"",routePath:m.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),fe=O(()=>F.value.tagsStyle),u=O(()=>F.value),pe=O(()=>s=>Z.setTagsViewNameI18n(s)),x=s=>u.value.isShareTagsView?s.path===t.routePath:s.query&&Object.keys(s.query).length||s.params&&Object.keys(s.params).length?s.url?s.url===t.routeActive:s.path===t.routeActive:s.path===t.routePath,p=s=>{y.set("tagsViewList",s)},z=async()=>{t.routeActive=await g(m),t.routePath=await m.meta.isDynamic?m.meta.isDynamicPath:m.path,t.tagsViewList=[],t.tagsViewRoutesList=H.value,ge()},ge=async()=>{y.get("tagsViewList")&&u.value.isCacheTagsView?t.tagsViewList=await y.get("tagsViewList"):(await t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=g(s),t.tagsViewList.push({...s}),w.addCachedView(s))}),await A(m.path,m)),Y(u.value.isShareTagsView?t.routePath:t.routeActive)},K=async(s,e)=>{var i,l;let a=(i=e==null?void 0:e.meta)!=null&&i.isDynamic?e.meta.isDynamicPath:s;if(t.tagsViewList.filter(r=>{var o,C;return r.path===a&&ee((o=e==null?void 0:e.meta)!=null&&o.isDynamic?r.params?r.params:null:r.query?r.query:null,(C=e==null?void 0:e.meta)!=null&&C.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)}).length<=0){let r=t.tagsViewRoutesList.find(o=>o.path===a);if(!r||r.meta.isAffix||r.meta.isLink&&!r.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?r.params=e.params:r.query=e==null?void 0:e.query,r.url=g(r),t.tagsViewList.push({...r}),await w.addCachedView(r),p(t.tagsViewList)}},v=(s,e)=>{var n;let a=(n=e==null?void 0:e.meta)!=null&&n.isDynamic?e.meta.isDynamicPath:s;t.tagsViewList.forEach(i=>{var l,r,o;i.path===a&&!ee((l=e==null?void 0:e.meta)!=null&&l.isDynamic?i.params?i.params:null:i.query?i.query:null,(r=e==null?void 0:e.meta)!=null&&r.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)&&((o=e==null?void 0:e.meta)!=null&&o.isDynamic?i.params=e.params:i.query=e==null?void 0:e.query,i.url=g(i),p(t.tagsViewList))})},A=(s,e)=>{j(async()=>{var n,i,l;let a;if((n=e==null?void 0:e.meta)!=null&&n.isDynamic){if(u.value.isShareTagsView?await v(s,e):await K(s,e),t.tagsViewList.some(r=>{var o;return r.path===((o=e==null?void 0:e.meta)==null?void 0:o.isDynamicPath)}))return p(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(r=>{var o;return r.path===((o=e==null?void 0:e.meta)==null?void 0:o.isDynamicPath)})}else{if(u.value.isShareTagsView?await v(s,e):await K(s,e),t.tagsViewList.some(r=>r.path===s))return p(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(r=>r.path===s)}if(!a||(i=a==null?void 0:a.meta)!=null&&i.isLink&&!a.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?a.params=e!=null&&e.params?e==null?void 0:e.params:m.params:a.query=e!=null&&e.query?e==null?void 0:e.query:m.query,a.url=g(a),await w.addCachedView(a),await t.tagsViewList.push({...a}),await p(t.tagsViewList)})},Q=async s=>{var n;const e=decodeURI(s);let a={};if(t.tagsViewList.forEach(i=>{i.transUrl=L(i),i.transUrl?i.transUrl===L(i)&&(a=i):i.path===e&&(a=i)}),!a)return!1;await w.delCachedView(a),d.emit("onTagsViewRefreshRouterView",s),(n=a.meta)!=null&&n.isKeepAlive&&w.addCachedView(a)},I=s=>{t.tagsViewList.map((e,a,n)=>{var i;(i=e.meta)!=null&&i.isAffix||(u.value.isShareTagsView?e.path===s:e.url===s)&&(w.delCachedView(e),t.tagsViewList.splice(a,1),setTimeout(()=>{(t.tagsViewList.length===a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)?n[n.length-1].meta.isDynamic?a!==n.length?c.push({name:n[a].name,params:n[a].params}):c.push({name:n[n.length-1].name,params:n[n.length-1].params}):a!==n.length?c.push({path:n[a].path,query:n[a].query}):c.push({path:n[n.length-1].path,query:n[n.length-1].query}):(t.tagsViewList.length!==a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)&&(n[a].meta.isDynamic?c.push({name:n[a].name,params:n[a].params}):c.push({path:n[a].path,query:n[a].query}))},0))}),p(t.tagsViewList)},we=s=>{y.get("tagsViewList")&&(t.tagsViewList=[],y.get("tagsViewList").map(e=>{var a;(a=e.meta)!=null&&a.isAffix&&!e.meta.isHide&&(e.url=g(e),w.delOthersCachedViews(e),t.tagsViewList.push({...e}))}),A(s,m),p(t.tagsViewList))},he=()=>{y.get("tagsViewList")&&(w.delAllCachedViews(),t.tagsViewList=[],y.get("tagsViewList").map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=g(s),t.tagsViewList.push({...s}),c.push({path:t.tagsViewList[t.tagsViewList.length-1].path}))}),p(t.tagsViewList))},de=async s=>{const e=t.tagsViewList.find(a=>u.value.isShareTagsView?a.path===s:a.url===s);e.meta.isDynamic?await c.push({name:e.name,params:e.params}):await c.push({name:e.name,query:e.query}),le.setCurrenFullscreen(!0)},X=s=>{let e={};return t.tagsViewList.forEach(a=>{a.transUrl=L(a),a.transUrl?a.transUrl===L(a)&&a.transUrl===s.commonUrl&&(e=a):a.path===decodeURI(s.path)&&(e=a)}),e||null},k=async s=>{if(s.commonUrl=L(s),!X(s))return Be({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:e,name:a,params:n,query:i,meta:l,url:r}=X(s);switch(s.contextMenuClickId){case 0:l.isDynamic?await c.push({name:a,params:n}):await c.push({path:e,query:i}),Q(m.fullPath);break;case 1:I(u.value.isShareTagsView?e:r);break;case 2:l.isDynamic?await c.push({name:a,params:n}):await c.push({path:e,query:i}),we(e);break;case 3:he();break;case 4:de(u.value.isShareTagsView?e:r);break}},ye=(s,e)=>{const{clientX:a,clientY:n}=e;t.dropdown.x=a,t.dropdown.y=n,W.value.openContextmenu(s)},Ve=(s,e)=>{var a;if(!((a=s.meta)!=null&&a.isAffix)&&e.button===1){const n=Object.assign({},{contextMenuClickId:1,...s});k(n)}},Le=(s,e)=>{t.tagsRefsIndex=e,c.push(s),u.value.layout==="columns"&&(me.value.find(n=>n.path.indexOf(`/${s.path.split("/")[1]}`)>-1).children?u.value.isCollapse=!1:u.value.isCollapse=!0)},L=s=>{var n,i;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e)return"";let a="";for(let[l,r]of Object.entries(e))(n=s.meta)!=null&&n.isDynamic?a+=`/${r}`:a+=`&${l}=${r}`;return(i=s.meta)!=null&&i.isDynamic?s.isFnClick?decodeURI(s.path):`${s.path.split(":")[0]}${a.replace(/^\//,"")}`:`${s.path}${a.replace(/^&/,"?")}`},g=s=>{var n;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e||Object.keys(e).length<=0)return s.path;let a="";for(let i in e)a+=e[i];return`${(n=s.meta)!=null&&n.isDynamic?s.meta.isDynamicPath:s.path}-${a}`},Ce=s=>{_.value.$refs.wrapRef.scrollLeft+=s.wheelDelta/4},Te=()=>{j(()=>{if(f.value.length<=0)return!1;let s=f.value[t.tagsRefsIndex],e=t.tagsRefsIndex,a=f.value.length,n=f.value[0],i=f.value[f.value.length-1],l=_.value.$refs.wrapRef,r=l.scrollWidth,o=l.offsetWidth,C=l.scrollLeft,$=f.value[t.tagsRefsIndex-1],G=f.value[t.tagsRefsIndex+1],q=0,S=0;s===n?l.scrollLeft=0:s===i?l.scrollLeft=r-o:(e===0?q=n.offsetLeft-5:q=($==null?void 0:$.offsetLeft)-5,e===a?S=i.offsetLeft+i.offsetWidth+5:S=G.offsetLeft+G.offsetWidth+5,S>C+o?l.scrollLeft=S-o:q<C&&(l.scrollLeft=q)),_.value.update()})},Y=s=>{j(async()=>{let e=await t.tagsViewList;t.tagsRefsIndex=e.findIndex(a=>u.value.isShareTagsView?a.path===s:a.url===s),Te()})},P=async()=>{const s=document.querySelector(".layout-navbars-tagsview-ul");if(!s)return!1;t.sortable.el&&t.sortable.destroy(),t.sortable=je.create(s,{animation:300,dataIdAttr:"data-url",disabled:!u.value.isSortableTagsView,onEnd:()=>{const e=[];t.sortable.toArray().map(a=>{t.tagsViewList.map(n=>{n.url===a&&e.push({...n})})}),p(e)}})},U=async()=>{await P(),Z.isMobile()&&t.sortable.el&&t.sortable.destroy()};return De(()=>{U(),window.addEventListener("resize",U),d.on("onCurrentContextmenuClick",s=>{s.isFnClick=!0,k(s)}),d.on("openOrCloseSortable",()=>{P()}),d.on("openShareTagsView",()=>{u.value.isShareTagsView&&(c.push("/home"),t.tagsViewList=[],t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=g(s),t.tagsViewList.push({...s}))}))})}),Ae(()=>{d.off("onCurrentContextmenuClick",()=>{}),d.off("openOrCloseSortable",()=>{}),d.off("openShareTagsView",()=>{}),window.removeEventListener("resize",U)}),Ie(()=>{f.value=[]}),ke(()=>{z(),P()}),Ne(async s=>{t.routeActive=g(s),t.routePath=s.meta.isDynamic?s.meta.isDynamicPath:s.path,await A(s.path,s),Y(u.value.isShareTagsView?t.routePath:t.routeActive)}),Pe(()=>H.value,s=>{if(s.length===t.tagsViewRoutesList.length)return!1;z()},{deep:!0}),(s,e)=>{const a=se("SvgIcon"),n=se("el-scrollbar");return h(),T("div",{class:M(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":V(u).layout==="classic"}])},[E(n,{ref_key:"scrollbarRef",ref:_,onWheel:R(Ce,["prevent"])},{default:Ue(()=>[ae("ul",{class:M(["layout-navbars-tagsview-ul",V(fe)]),ref_key:"tagsUlRef",ref:re},[(h(!0),T(te,null,$e(t.tagsViewList,(i,l)=>(h(),T("li",{key:l,class:M(["layout-navbars-tagsview-ul-li",{"is-active":x(i)}]),"data-url":i.url,onContextmenu:R(r=>ye(i,r),["prevent"]),onMousedown:r=>Ve(i,r),onClick:r=>Le(i,l),ref_for:!0,ref:r=>{r&&(f.value[l]=r)}},[x(i)?(h(),T("i",He)):b("",!0),!x(i)&&V(u).isTagsviewIcon?(h(),N(a,{key:1,name:i.meta.icon,class:"pr5"},null,8,["name"])):b("",!0),ae("span",null,Oe(V(pe)(i)),1),x(i)?(h(),T(te,{key:2},[E(a,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:e[0]||(e[0]=R(r=>Q(s.$route.fullPath),["stop"]))}),i.meta.isAffix?b("",!0):(h(),N(a,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:R(r=>I(V(u).isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],64)):b("",!0),i.meta.isAffix?b("",!0):(h(),N(a,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:R(r=>I(V(u).isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],42,Fe))),128))],2)]),_:1},8,["onWheel"]),E(V(ne),{dropdown:t.dropdown,ref_key:"contextmenuRef",ref:W,onCurrentContextmenuClick:k},null,8,["dropdown"])],2)}}});const As=We(Ke,[["__scopeId","data-v-21d159d0"]]);export{As as default};
