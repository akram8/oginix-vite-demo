import{d as f,M as i,_ as u,r as M,R as H,F as L,u as B,s as _,y as a,o as E,az as P,c as o,e as m,J as p,k as d,j as s,B as e,G as A,C as I}from"./index-f97ca1e0.js";const N=f({name:"layoutMain"}),D=f({...N,setup(S,{expose:y}){const g=i(()=>u(()=>import("./parent-d2d580e0.js"),["assets/js/parent-d2d580e0.js","assets/js/index-f97ca1e0.js","assets/css/index-a7bdd87a.css"])),x=i(()=>u(()=>import("./index-4b8b914a.js"),["assets/js/index-4b8b914a.js","assets/js/index-f97ca1e0.js","assets/css/index-a7bdd87a.css","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/index-820463a9.css"])),r=M(),b=H(),h=L(),k=B(),{themeConfig:t}=_(k),{isTagsViewCurrenFull:v}=_(h),C=a(()=>t.value.isFooter&&!b.meta.isIframe),w=a(()=>t.value.isFixedHeader),R=a(()=>t.value.isFixedHeader?".layout-backtop-header-fixed .el-scrollbar__wrap":".layout-backtop .el-scrollbar__wrap"),n=a(()=>{if(v.value)return"0px";const{isTagsview:l,layout:c}=t.value;return l&&c!=="classic"?"85px":"51px"});return E(()=>{P.done(600)}),y({layoutMainScrollbarRef:r}),(l,c)=>{const T=o("el-scrollbar"),F=o("el-backtop"),V=o("el-main");return m(),p(V,{class:"layout-main",style:I(e(w)?`height: calc(100% - ${e(n)})`:`minHeight: calc(100% - ${e(n)})`)},{default:d(()=>[s(T,{ref_key:"layoutMainScrollbarRef",ref:r,class:"layout-main-scroll layout-backtop-header-fixed","wrap-class":"layout-main-scroll","view-class":"layout-main-scroll"},{default:d(()=>[s(e(g)),e(C)?(m(),p(e(x),{key:0})):A("",!0)]),_:1},512),s(F,{target:e(R)},null,8,["target"])]),_:1},8,["style"])}}});export{D as default};
