import{_ as T}from"./index-be8ca750.js";import{E as B,a as $}from"./element-plus-3b133bec.js";import{k as f,aN as A,e as O,$ as P,i as U,ah as i,ar as V,o as c,c as F,W as e,Q as l,a as L,U as s,R as M,P as u,u as H}from"./@vue-d9027515.js";import"./pinia-a73ffef5.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-e0b9a81d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-b46b26c7.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-8d2808ea.js";import"./axios-aba6f0e0.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-0ee01be3.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";const I={class:"system-dic-container layout-padding"},Y={class:"system-user-search mb15"},j=f({name:"systemDic"}),ke=f({...j,setup(Q){const b=A(()=>T(()=>import("./dialog-76f8780d.js"),["assets/js/dialog-76f8780d.js","assets/js/@vue-d9027515.js"])),d=O(),a=P({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),p=()=>{a.tableData.loading=!0;const o=[];for(let t=0;t<2;t++)o.push({dicName:t===0?"角色标识":"用户性别",fieldName:t===0?"SYS_ROLE":"SYS_UERINFO",describe:t===0?"这是角色字典":"这是用户性别字典",status:!0,createTime:new Date().toLocaleString(),list:[]});a.tableData.data=o,a.tableData.total=a.tableData.data.length,setTimeout(()=>{a.tableData.loading=!1},500)},D=o=>{d.value.openDialog(o)},v=(o,t)=>{d.value.openDialog(o,t)},w=o=>{B.confirm(`此操作将永久删除字典名称：“${o.dicName}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{p(),$.success("删除成功")}).catch(()=>{})},y=o=>{a.tableData.param.pageSize=o,p()},h=o=>{a.tableData.param.pageNum=o,p()};return U(()=>{p()}),(o,t)=>{const z=i("el-input"),C=i("ele-Search"),_=i("el-icon"),m=i("el-button"),N=i("ele-FolderAdd"),r=i("el-table-column"),g=i("el-tag"),S=i("el-table"),k=i("el-pagination"),x=i("el-card"),E=V("loading");return c(),F("div",I,[e(x,{shadow:"hover",class:"layout-padding-auto"},{default:l(()=>[L("div",Y,[e(z,{size:"default",placeholder:"请输入字典名称",style:{"max-width":"180px"}}),e(m,{size:"default",type:"primary",class:"ml10"},{default:l(()=>[e(_,null,{default:l(()=>[e(C)]),_:1}),s(" 查询 ")]),_:1}),e(m,{size:"default",type:"success",class:"ml10",onClick:t[0]||(t[0]=n=>D("add"))},{default:l(()=>[e(_,null,{default:l(()=>[e(N)]),_:1}),s(" 新增字典 ")]),_:1})]),M((c(),u(S,{data:a.tableData.data,style:{width:"100%"}},{default:l(()=>[e(r,{type:"index",label:"序号",width:"50"}),e(r,{prop:"dicName",label:"字典名称","show-overflow-tooltip":""}),e(r,{prop:"fieldName",label:"字段名","show-overflow-tooltip":""}),e(r,{prop:"status",label:"字典状态","show-overflow-tooltip":""},{default:l(n=>[n.row.status?(c(),u(g,{key:0,type:"success"},{default:l(()=>[s("启用")]),_:1})):(c(),u(g,{key:1,type:"info"},{default:l(()=>[s("禁用")]),_:1}))]),_:1}),e(r,{prop:"describe",label:"字典描述","show-overflow-tooltip":""}),e(r,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),e(r,{label:"操作",width:"100"},{default:l(n=>[e(m,{size:"small",text:"",type:"primary",onClick:R=>v("edit",n.row)},{default:l(()=>[s("修改")]),_:2},1032,["onClick"]),e(m,{size:"small",text:"",type:"primary",onClick:R=>w(n.row)},{default:l(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[E,a.tableData.loading]]),e(k,{onSizeChange:y,onCurrentChange:h,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":a.tableData.param.pageNum,"onUpdate:currentPage":t[1]||(t[1]=n=>a.tableData.param.pageNum=n),background:"","page-size":a.tableData.param.pageSize,"onUpdate:pageSize":t[2]||(t[2]=n=>a.tableData.param.pageSize=n),layout:"total, sizes, prev, pager, next, jumper",total:a.tableData.total},null,8,["current-page","page-size","total"])]),_:1}),e(H(b),{ref_key:"dicDialogRef",ref:d,onRefresh:t[3]||(t[3]=n=>p())},null,512)])}}});export{ke as default};
