const m=()=>{let e=window.navigator.userAgent;if(e.indexOf("MSIE")>=0)return"ie";if(e.indexOf("Firefox")>=0)return"Firefox";if(e.indexOf("Chrome")>=0)return"Chrome";if(e.indexOf("Opera")>=0)return"Opera";if(e.indexOf("Safari")>=0)return"Safari"},u=(e,i)=>{m()=="ie"?w(e):p(e,i)},w=(e,i)=>{let c=e,o=new ActiveXObject("Excel.Application"),n=o.Workbooks.Add(),l=n.Worksheets(1),a=document.body.createTextRange();a.moveToElementText(c),a.select,a.execCommand("Copy"),l.Paste(),o.Visible=!0;try{let s=o.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(s){print("Nested catch caught "+s)}finally{n.SaveAs(fname),n.Close(savechanges=!1),o.Quit(),o=null,window.setInterval("Cleanup();",1),window.setInterval("Cleanup();",1)}},p=function(){const e="data:application/vnd.ms-excel;base64,",i='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',c=function(n){return window.btoa(unescape(encodeURIComponent(n)))},o=(n,l)=>n.replace(/{(\w+)}/g,(a,s)=>l[s]);return(n,l)=>{const s=e+c(o(i,{worksheet:l,table:n}));if(navigator.userAgent.indexOf("Firefox")>-1)window.location.href=s;else{const x=document.createElement("a");x.href=s,x.download=l||"";let t;window.MouseEvent?t=new MouseEvent("click"):(t=document.createEvent("MouseEvents"),t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),x.dispatchEvent(t)}}}(),g=(e,i,c)=>{const o={image:x,text:s};let n=e.reduce((t,r)=>(t+=`<th>${r.title}</th>`,t),"");n=`<thead><tr>${n}</tr></thead>`;let l=i.reduce((t,r)=>{const f=e.reduce((h,d)=>(h+=o[d.type||"text"](r[d.key],d),h),"");return t+=`<tr>${f}</tr>`,t},"");l=`<tbody>${l}</tbody>`;const a=n+l;u(a,c);function s(t){return`<td style="text-align: center">${t}</td>`}function x(t,r){return r=Object.assign({width:40,height:60},r),`<td style="width: ${r.width}px; height: ${r.height}px; text-align: center; vertical-align: middle"><img src="${t}" width=${r.width} height=${r.height}></td>`}};export{g as t};