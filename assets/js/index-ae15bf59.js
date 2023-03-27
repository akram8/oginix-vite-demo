import{b as h}from"./vue-router-a2fac16f.js";import{a as u}from"./element-plus-3b133bec.js";import{k as d,$ as f,ah as s,o as N,c as v,a as t,W as a,Q as i,U as n,V as b}from"./@vue-d9027515.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@element-plus-96a31696.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";const y={class:"layout-padding"},I={class:"layout-padding-auto layout-padding-view"},x={class:"flex-margin",style:{width:"400px"}},k=t("div",null,"1、设置非国际化：格式：tagsViewName=xxx",-1),z=t("br",null,null,-1),C=t("div",null,'2、设置国际化：格式：tagsViewName=JSON.stringify({"zh-cn":"测试用","en":"test+page","zh-tw":"測試用"})',-1),D=t("br",null,null,-1),S=t("div",null,"3、设置国际化后，去顶栏切换语言查看演示效果",-1),B=t("br",null,null,-1),T=t("div",null,[n(" 4、 "),t("a",{href:"https://gitee.com/q7but",target:"_black"},"感谢@q7but"),n("、 "),t("a",{href:"https://github.com/akram8/oginix-vite-demo/pulls/22/files",target:"_black"},"!22 add 添加自定义 tagVIewName 拓展,支持国际化")],-1),U=d({name:"paramsDynamic"}),Y=d({...U,setup(q){const p=h(),e=f({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),_=()=>{if(!e.tagsViewName)return u.warning("动态路由tagsViewName为必填，因为路由配置了");if(!e.value)return u.warning("路由参数id值为必填");p.push({name:"paramsDynamicDetails",params:{t:"oginix-vite-demo",id:e.value,tagsViewName:e.tagsViewName}}),e.value=""},g=()=>{e.tagsViewNameIsI18n=!e.tagsViewNameIsI18n,e.tagsViewNameIsI18n?e.tagsViewName=JSON.stringify({"zh-cn":"我是动态路由",en:"Im dynamic routing","zh-tw":"我是動態路由"}):e.tagsViewName="我是动态路由测试tagsViewName(非国际化)"};return(E,o)=>{const w=s("el-alert"),m=s("el-input"),r=s("SvgIcon"),c=s("el-button"),V=s("el-result");return N(),v("div",y,[t("div",I,[t("div",x,[a(V,{icon:"warning",title:"动态路由",subTitle:"可 `开启 TagsView 共用` 进行单标签测试"},{extra:i(()=>[a(w,{type:"success",closable:!1,class:"mb30"},{default:i(()=>[k,z,C,D,S,B,T]),_:1}),a(m,{modelValue:e.tagsViewName,"onUpdate:modelValue":o[0]||(o[0]=l=>e.tagsViewName=l),placeholder:"请输入tagsView 名称",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),a(m,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),placeholder:"请输入路由参数id值",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),a(c,{type:"primary",size:"default",class:"mt15",onClick:_},{default:i(()=>[a(r,{name:"iconfont icon-dongtai"}),n(" 动态路由传参 ")]),_:1}),a(c,{type:"primary",size:"default",class:"mt15",onClick:g},{default:i(()=>[a(r,{name:"iconfont icon-fuhao-zhongwen"}),n(" "+b(e.tagsViewNameIsI18n?"普通的演示":"国际化演示"),1)]),_:1})]),_:1})])])])}}});export{Y as default};
