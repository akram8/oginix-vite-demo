import{k as m,ah as d,o as a,c as h,a as n,U as p,V as S,P as r,Q as l,T as c,W as f,J as b,K as y,L as g,bb as w,b9 as x}from"./@vue-d9027515.js";import{_ as P}from"./plugin-vueexport-helper-c27b6911.js";const V=o=>(w("data-v-50a93fa7"),o=o(),x(),o),$={class:"custom-panel-title"},I={class:"title-left"},N=V(()=>n("div",{class:"title-tag"},null,-1)),z={class:"title-right"},A=m({name:"panel"}),E=m({...A,props:{title:{type:String,default:""},titleBgColor:{type:String,default:"#f2f4f8"},isEdit:{type:Boolean,default:!1},type:{type:String},hasBorder:{type:Boolean,default:!0},hasPadding:{type:Boolean,default:!0},bodyStyle:{type:String,defaults:""},linkBtn:{type:Boolean,default:!1},showSubmit:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},showClose:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!1}},emits:["btnClick"],setup(o,{emit:k}){const e=o,s=u=>{k("btnClick",u)};return(u,t)=>{const i=d("el-button"),B=d("ele-Plus"),v=d("el-icon"),C=d("el-tooltip");return a(),h("div",{class:y(["custom-panel",e.hasBorder?"border":""])},[n("div",$,[n("div",I,[N,p(S(e.title),1)]),n("div",z,[e.showClose?(a(),r(i,{key:0,onClick:t[0]||(t[0]=_=>s("close")),link:e.linkBtn,type:"primary"},{default:l(()=>[p("关闭")]),_:1},8,["link"])):c("",!0),e.showCancel?(a(),r(i,{key:1,onClick:t[1]||(t[1]=_=>s("cancel")),link:e.linkBtn,type:"primary"},{default:l(()=>[p("取消")]),_:1},8,["link"])):c("",!0),e.showSubmit?(a(),r(i,{key:2,onClick:t[2]||(t[2]=_=>s("save")),link:e.linkBtn,type:"primary",class:"mr10"},{default:l(()=>[p("确定")]),_:1},8,["link"])):c("",!0),e.showAddBtn?(a(),r(C,{key:3,content:"添加",placement:"top"},{default:l(()=>[f(i,{type:"primary",size:"small",circle:"",onClick:t[3]||(t[3]=_=>s("add"))},{default:l(()=>[f(v,null,{default:l(()=>[f(B)]),_:1})]),_:1})]),_:1})):c("",!0)])]),n("div",{class:y(["custom-panel-body",e.hasPadding?"padding18":""]),style:g(e.bodyStyle)},[b(u.$slots,"default",{},void 0,!0)],6)],2)}}});const J=P(E,[["__scopeId","data-v-50a93fa7"]]);export{J as default};
