import{k as v,$ as V,ah as d,ar as b,o as _,c as f,W as a,Q as e,U as l,a as r,R as m,P as x,bb as y,b9 as k}from"./@vue-d9027515.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const C=s=>(y("data-v-c821f5ce"),s=s(),k(),s),D={class:"drag-container layout-pd"},z={class:"drag-dom"},B={class:"drag-header"},I=C(()=>r("p",null,"鼠标放标题头进行 Dialog 对话框拖动",-1)),$={class:"dialog-footer"},N=v({name:"pagesDrag"}),P=v({...N,setup(s){const t=V({dialogVisible:!1});return(S,o)=>{const c=d("ele-Pointer"),p=d("el-icon"),i=d("el-button"),u=d("el-card"),h=d("el-dialog"),g=b("drag");return _(),f("div",D,[a(u,{shadow:"hover",header:"拖动指令效果（v-drag）作用于 Dialog 对话框"},{default:e(()=>[a(i,{type:"primary",onClick:o[0]||(o[0]=n=>t.dialogVisible=!0),size:"default"},{default:e(()=>[a(p,null,{default:e(()=>[a(c)]),_:1}),l(" 点击打开 Dialog ")]),_:1})]),_:1}),a(u,{shadow:"hover",header:"自定义div",class:"mt15"},{default:e(()=>[r("div",z,[r("div",B,[m((_(),x(i,{type:"success",size:"default"},{default:e(()=>[a(p,null,{default:e(()=>[a(c)]),_:1}),l(" 按住进行拖动测试 ")]),_:1})),[[g,[".drag-container .drag-dom",".drag-container .drag-header"]]])])])]),_:1}),a(h,{modelValue:t.dialogVisible,"onUpdate:modelValue":o[3]||(o[3]=n=>t.dialogVisible=n),width:"769px"},{header:e(()=>[m((_(),f("div",null,[l("拖动指令效果（v-drag）")])),[[g,[".drag-container .el-dialog",".drag-container .el-dialog__header"]]])]),footer:e(()=>[r("span",$,[a(i,{onClick:o[1]||(o[1]=n=>t.dialogVisible=!1),size:"default"},{default:e(()=>[l("取 消")]),_:1}),a(i,{type:"primary",onClick:o[2]||(o[2]=n=>t.dialogVisible=!1),size:"default"},{default:e(()=>[l("确 定")]),_:1})])]),default:e(()=>[I]),_:1},8,["modelValue"])])}}});const Q=w(P,[["__scopeId","data-v-c821f5ce"]]);export{Q as default};
