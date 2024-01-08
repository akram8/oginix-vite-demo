import{k as R,e as M,$ as Q,ah as a,o as r,c,W as l,Q as t,F as h,a9 as V,u as W,a as q,U,R as X,P as n,T as w,X as j}from"./@vue-d9027515.js";import{a as E}from"./element-plus-08547807.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@element-plus-6327e551.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";const k=[{label:"姓名",prop:"name",placeholder:"请输入姓名",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"邮箱",prop:"email",placeholder:"请输入用户邮箱",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"登陆时间",prop:"autograph",placeholder:"选择时间",clearable:!0,disabled:!1,required:!0,type:"date",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"职务",prop:"occupation",placeholder:"请选择职务",clearable:!0,disabled:!1,required:!0,type:"select",i18n:!1,i18nText:"",options:[{label:"计算机 / 互联网 / 通信",value:"1"},{label:"生产 / 工艺 / 制造",value:"2"},{label:"医疗 / 护理 / 制药",value:"3"}],isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"",prop:"",placeholder:"",clearable:!0,disabled:!1,required:!0,type:"",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24},{label:"备注",prop:"remarks",placeholder:"请输入",clearable:!0,disabled:!1,required:!0,type:"textarea",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24}],G={class:"dynamic-form-container layout-pd"},H=q("span",{class:"ml10"},"年度",-1),J={class:"flex-margin"},K=R({name:"pagesDynamicForm"}),ce=R({...K,setup(Y){const y=M(),o=Q({formData:k,form:{name:"",email:"",autograph:"",occupation:"",list:[{year:"",month:"",day:""}],remarks:""}}),S=()=>{o.form.list.push({year:"",month:"",day:""})},C=p=>{o.form.list.splice(p,1)},T=p=>{p&&p.validate(u=>{if(u)E.success("验证成功");else return!1})},$=p=>{p&&p.resetFields()};return(p,u)=>{const i=a("el-input"),D=a("el-date-picker"),F=a("el-option"),z=a("el-select"),f=a("el-form-item"),B=a("ele-Plus"),x=a("el-icon"),_=a("el-button"),N=a("ele-Delete"),b=a("el-col"),g=a("el-row"),P=a("el-form"),I=a("el-card"),O=a("ele-RefreshRight"),A=a("SvgIcon");return r(),c("div",G,[l(I,{shadow:"hover",header:"动态复杂表单"},{default:t(()=>[l(P,{model:o.form,ref_key:"formRulesOneRef",ref:y,size:"default","label-width":"100px",class:"mt35"},{default:t(()=>[l(g,{gutter:35},{default:t(()=>[(r(!0),c(h,null,V(W(k),(e,L)=>X((r(),n(b,{xs:e.xs,sm:e.sm,md:e.md,lg:e.md,xl:e.xl,class:"mb20",key:L},{default:t(()=>[e.type!==""?(r(),c(h,{key:0},[e.type!==""?(r(),n(f,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}不能为空`,trigger:e.type==="input"?"blur":"change"}]},{default:t(()=>[e.type==="input"?(r(),n(i,{key:0,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="date"?(r(),n(D,{key:1,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,type:"date",placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="select"?(r(),n(z,{key:2,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},{default:t(()=>[(r(!0),c(h,null,V(e.options,s=>(r(),n(F,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):w("",!0),e.type==="textarea"?(r(),n(i,{key:3,type:"textarea",modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):w("",!0)]),_:2},1032,["label","prop","rules"])):w("",!0)],64)):(r(!0),c(h,{key:1},V(o.form.list,(s,d)=>(r(),n(g,{gutter:35,key:d},{default:t(()=>[l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(f,{label:"年度",prop:`list[${d}].year`,rules:[{required:!0,message:"年度不能为空",trigger:"blur"}]},{label:t(()=>[d===0?(r(),n(_,{key:0,type:"primary",circle:"",size:"small",onClick:S},{default:t(()=>[l(x,null,{default:t(()=>[l(B)]),_:1})]),_:1})):(r(),n(_,{key:1,type:"danger",circle:"",size:"small",onClick:m=>C(d)},{default:t(()=>[l(x,null,{default:t(()=>[l(N)]),_:1})]),_:2},1032,["onClick"])),H]),default:t(()=>[l(i,{modelValue:o.form.list[d].year,"onUpdate:modelValue":m=>o.form.list[d].year=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(f,{label:"月度",prop:`list[${d}].month`,rules:[{required:!0,message:"月度不能为空",trigger:"blur"}]},{default:t(()=>[l(i,{modelValue:o.form.list[d].month,"onUpdate:modelValue":m=>o.form.list[d].month=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(f,{label:"日度",prop:`list[${d}].day`,rules:[{required:!0,message:"日度不能为空",trigger:"blur"}]},{default:t(()=>[l(i,{modelValue:o.form.list[d].day,"onUpdate:modelValue":m=>o.form.list[d].day=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["xs","sm","md","lg","xl"])),[[j,e.isShow]])),128))]),_:1})]),_:1},8,["model"])]),_:1}),l(g,{class:"flex mt15"},{default:t(()=>[q("div",J,[l(_,{size:"default",onClick:u[0]||(u[0]=e=>$(y.value))},{default:t(()=>[l(x,null,{default:t(()=>[l(O)]),_:1}),U(" 重置表单 ")]),_:1}),l(_,{size:"default",type:"primary",onClick:u[1]||(u[1]=e=>T(y.value))},{default:t(()=>[l(A,{name:"iconfont icon-shuxing"}),U(" 验证表单 ")]),_:1})])]),_:1})])}}});export{ce as default};