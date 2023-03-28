import{_ as r}from"./index-be8ca750.js";import{a as _}from"./element-plus-3b133bec.js";import{k as s,aN as i,e as b,$ as g,i as f,o as y,c as D,a as k,W as p,u as l,M as v}from"./@vue-d9027515.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./pinia-a73ffef5.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-e0b9a81d.js";import"./@intlify-9e8a497c.js";import"./source-map-7d7e1c08.js";import"./vue-b46b26c7.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-8d2808ea.js";import"./axios-aba6f0e0.js";import"./qs-bbfcbdf3.js";import"./side-channel-eafc5c70.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-9ceb8f5b.js";import"./object-inspect-7b08a46e.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-0ee01be3.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-6aac7dfa.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-682dc3ac.js";const S={class:"table-demo-container layout-padding"},C={class:"table-demo-padding layout-padding-view layout-padding-auto"},T=s({name:"makeTableDemo"}),q=s({...T,setup(N){const m=i(()=>r(()=>import("./index-c152e577.js"),["assets/js/index-c152e577.js","assets/js/js-table2excel-d887c4ea.js","assets/js/sortablejs-be94e56d.js","assets/js/pinia-a73ffef5.js","assets/js/vue-demi-71ba0ef2.js","assets/js/@vue-d9027515.js","assets/js/index-be8ca750.js","assets/js/vue-router-a2fac16f.js","assets/js/vue-i18n-e0b9a81d.js","assets/js/@intlify-9e8a497c.js","assets/js/source-map-7d7e1c08.js","assets/js/vue-b46b26c7.js","assets/js/js-cookie-cf83ad76.js","assets/js/@element-plus-96a31696.js","assets/js/nprogress-8d2808ea.js","assets/css/nprogress-8b89e2e0.css","assets/js/axios-aba6f0e0.js","assets/js/qs-bbfcbdf3.js","assets/js/side-channel-eafc5c70.js","assets/js/get-intrinsic-b9397c9a.js","assets/js/has-symbols-e8f3ca0e.js","assets/js/function-bind-22e7ee79.js","assets/js/has-26d28e02.js","assets/js/call-bind-9ceb8f5b.js","assets/js/object-inspect-7b08a46e.js","assets/js/element-plus-3b133bec.js","assets/js/lodash-es-36eb724a.js","assets/js/@vueuse-2d9216d7.js","assets/js/@popperjs-c75af06c.js","assets/js/@ctrl-f8748455.js","assets/js/dayjs-6aac7dfa.js","assets/js/async-validator-dee29e8b.js","assets/js/memoize-one-297ddbcb.js","assets/js/escape-html-1d60d822.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/js/@floating-ui-682dc3ac.js","assets/js/mitt-f7ef348c.js","assets/js/vue-grid-layout-0ee01be3.js","assets/css/index-47129bcd.css","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/index-516062e8.css"])),n=i(()=>r(()=>import("./search-872eadd2.js"),["assets/js/search-872eadd2.js","assets/js/@vue-d9027515.js","assets/js/_plugin-vue_export-helper-c27b6911.js","assets/css/search-290802b2.css"])),o=b(),t=g({tableData:{data:[],header:[{key:"name",colWidth:"",title:"应检尽检核酸采样点名称",type:"text",isCheck:!0},{key:"address",colWidth:"",title:"详细地址",type:"text",isCheck:!0},{key:"phone",colWidth:"",title:"采样点联系电话",type:"text",isCheck:!0},{key:"time",colWidth:"",title:"开放时间",type:"text",isCheck:!0},{key:"isSupport",colWidth:"",title:"是否支持24小时核酸检测",type:"text",isCheck:!0},{key:"image",colWidth:"",width:"70",height:"40",title:"图片描述",type:"image",isCheck:!0}],config:{total:0,loading:!0,isBorder:!1,isSerialNo:!0,isSelection:!0,isOperate:!0},search:[{label:"采样点名称",prop:"name",placeholder:"请输入应检尽检核酸采样点名称",required:!0,type:"input"},{label:"详细地址",prop:"address",placeholder:"请输入详细地址",required:!1,type:"input"},{label:"联系电话",prop:"phone",placeholder:"请输入采样点联系电话",required:!1,type:"input"},{label:"开放时间",prop:"time",placeholder:"请选择",required:!1,type:"date"},{label:"支持24小时",prop:"isSupport",placeholder:"请选择",required:!1,type:"select",options:[{label:"是",value:1},{label:"否",value:0}]},{label:"图片描述",prop:"image",placeholder:"请输入图片描述",required:!1,type:"input"},{label:"核酸机构",prop:"mechanism",placeholder:"请输入核酸机构",required:!1,type:"input"}],param:{pageNum:1,pageSize:10}}}),a=()=>{t.tableData.config.loading=!0,t.tableData.data=[];for(let e=0;e<20;e++)t.tableData.data.push({id:`123456789${e+1}`,name:`莲塘别墅广场${e+1}`,address:`中沧公寓中庭榕树下${e+1}`,phone:`0592-6081259${e+1}`,time:"6:00 ~ 24:00",isSupport:`${e%2===0?"是":"否"}`,image:"https://img2.baidu.com/it/u=417454395,2713356475&fm=253&fmt=auto?w=200&h=200"});t.tableData.config.total=t.tableData.data.length,setTimeout(()=>{t.tableData.config.loading=!1},500)},d=e=>{t.tableData.param=Object.assign({},t.tableData.param,{...e}),o.value.pageReset()},c=e=>{_.success(`删除${e.name}成功！`),a()},u=e=>{t.tableData.param.pageNum=e.pageNum,t.tableData.param.pageSize=e.pageSize,a()},h=e=>{t.tableData.header=e};return f(()=>{a()}),(e,R)=>(y(),D("div",S,[k("div",C,[p(l(n),{search:t.tableData.search,onSearch:d},null,8,["search"]),p(l(m),v({ref_key:"tableRef",ref:o},t.tableData,{class:"table-demo",onDelRow:c,onPageChange:u,onSortHeader:h}),null,16)])]))}});const de=x(q,[["__scopeId","data-v-dc4563e8"]]);export{de as default};
