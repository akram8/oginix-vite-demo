import{d as h,r as $,a as E,c as s,e as r,f as x,j as e,k as l,g as F,i as V,t as I,H as P,I as j,J as p}from"./index-f97ca1e0.js";const A={class:"system-dic-dialog-container"},H=F("span",{class:"ml10"},"字段",-1),J={class:"dialog-footer"},L=h({name:"systemDicDialog"}),q=h({...L,emits:["refresh"],setup(O,{expose:y,emit:D}){const w=$(),o=E({ruleForm:{dicName:"",fieldName:"",status:!0,list:[],describe:""},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),v=(u,a)=>{u==="edit"?(a.fieldName==="SYS_UERINFO"?a.list=[{id:Math.random(),label:"sex",value:"1"},{id:Math.random(),label:"sex",value:"0"}]:a.list=[{id:Math.random(),label:"role",value:"admin"},{id:Math.random(),label:"role",value:"common"},{id:Math.random(),label:"roleName",value:"超级管理员"},{id:Math.random(),label:"roleName",value:"普通用户"}],o.ruleForm=a,o.dialog.title="修改字典",o.dialog.submitTxt="修 改"):(o.dialog.title="新增字典",o.dialog.submitTxt="新 增"),o.dialog.isShowDialog=!0},f=()=>{o.dialog.isShowDialog=!1},N=()=>{f()},U=()=>{f(),D("refresh")},k=()=>{o.ruleForm.list.push({id:Math.random(),label:"",value:""})},C=u=>{o.ruleForm.list.splice(u,1)};return y({openDialog:v}),(u,a)=>{const S=s("el-alert"),m=s("el-input"),i=s("el-form-item"),d=s("el-col"),M=s("el-switch"),z=s("ele-Plus"),g=s("el-icon"),c=s("el-button"),R=s("ele-Delete"),b=s("el-row"),T=s("el-form"),B=s("el-dialog");return r(),x("div",A,[e(B,{title:o.dialog.title,modelValue:o.dialog.isShowDialog,"onUpdate:modelValue":a[4]||(a[4]=t=>o.dialog.isShowDialog=t),width:"769px"},{footer:l(()=>[F("span",J,[e(c,{onClick:N,size:"default"},{default:l(()=>[V("取 消")]),_:1}),e(c,{type:"primary",onClick:U,size:"default"},{default:l(()=>[V(I(o.dialog.submitTxt),1)]),_:1})])]),default:l(()=>[e(S,{title:"半成品，交互过于复杂，请自行扩展！",type:"warning",closable:!1,class:"mb20"}),e(T,{ref_key:"dicDialogFormRef",ref:w,model:o.ruleForm,size:"default","label-width":"90px"},{default:l(()=>[e(b,{gutter:35},{default:l(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(i,{label:"字典名称"},{default:l(()=>[e(m,{modelValue:o.ruleForm.dicName,"onUpdate:modelValue":a[0]||(a[0]=t=>o.ruleForm.dicName=t),placeholder:"请输入字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(i,{label:"字段名"},{default:l(()=>[e(m,{modelValue:o.ruleForm.fieldName,"onUpdate:modelValue":a[1]||(a[1]=t=>o.ruleForm.fieldName=t),placeholder:"请输入字段名，拼接 ruleForm.list",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(i,{label:"字典状态"},{default:l(()=>[e(M,{modelValue:o.ruleForm.status,"onUpdate:modelValue":a[2]||(a[2]=t=>o.ruleForm.status=t),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[(r(!0),x(P,null,j(o.ruleForm.list,(t,n)=>(r(),p(b,{gutter:35,key:n},{default:l(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(i,{prop:`list[${n}].label`},{label:l(()=>[n===0?(r(),p(c,{key:0,type:"primary",circle:"",size:"small",onClick:k},{default:l(()=>[e(g,null,{default:l(()=>[e(z)]),_:1})]),_:1})):(r(),p(c,{key:1,type:"danger",circle:"",size:"small",onClick:_=>C(n)},{default:l(()=>[e(g,null,{default:l(()=>[e(R)]),_:1})]),_:2},1032,["onClick"])),H]),default:l(()=>[e(m,{modelValue:t.label,"onUpdate:modelValue":_=>t.label=_,style:{width:"100%"},placeholder:"请输入字段名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(i,{label:"属性",prop:`list[${n}].value`},{default:l(()=>[e(m,{modelValue:t.value,"onUpdate:modelValue":_=>t.value=_,style:{width:"100%"},placeholder:"请输入属性值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(i,{label:"字典描述"},{default:l(()=>[e(m,{modelValue:o.ruleForm.describe,"onUpdate:modelValue":a[3]||(a[3]=t=>o.ruleForm.describe=t),type:"textarea",placeholder:"请输入字典描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{q as default};
