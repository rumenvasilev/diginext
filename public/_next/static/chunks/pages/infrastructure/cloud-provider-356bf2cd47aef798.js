(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{61943:function(e,t,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/infrastructure/cloud-provider",function(){return d(54375)}])},54375:function(e,t,d){"use strict";d.r(t),d.d(t,{default:function(){return y}});var n,r=d(11527),i=d(39445),o=d(14367),a=d(42149),l=d(30388),u=d(58699),s=d(5489),c=d(74637),f=d.n(c),h=d(50959),v=d(87824),m=d(51959),x=d(18315),p=d(55915);let g=d(64814),_=d(54498);f().extend(_),f().extend(g);let k=null!==(n=p.XL.tableConfig.defaultPageSize)&&void 0!==n?n:20,A=()=>{let{responsive:e}=(0,x.Jl)(),t=[{title:"Name",width:70,dataIndex:"name",key:"name",fixed:(null==e?void 0:e.md)?"left":void 0,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name.indexOf(e.toString())>-1},{title:"Short name",width:60,dataIndex:"shortName",key:"shortName",render:e=>(0,r.jsx)(u.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.shortName.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(m.q,{date:e}),sorter:(e,t)=>f()(e.createdAt).diff(f()(t.createdAt))},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,r.jsx)(m.q,{date:e}),sorter:(e,t)=>f()(e.updatedAt).diff(f()(t.updatedAt))}],[d,n]=(0,h.useState)(1),{data:i,status:o}=(0,v.nu)({pagination:{page:d,size:k}}),{list:a,pagination:c}=i||{},{total_items:p}=c||{};console.log("cloudProviders :>> ",a);let g=e=>{let{current:t}=e;t&&n(t)},_=(null==a?void 0:a.map((e,t)=>{var d,n,r,i;return{id:null!==(d=e._id)&&void 0!==d?d:t.toString(),key:null!==(n=e._id)&&void 0!==n?n:t.toString(),name:null!==(r=e.name)&&void 0!==r?r:"",shortName:null!==(i=e.shortName)&&void 0!==i?i:"",updatedAt:f()(e.updatedAt).format("LLL"),createdAt:f()(e.createdAt).format("LLL")}}))||[],A=(0,h.useRef)(null),N=(0,l.Z)(A);return(0,r.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:A,children:(0,r.jsx)(s.Z,{sticky:!0,size:"small",loading:"loading"===o,columns:t,dataSource:_,scroll:{x:1200,y:void 0!==(null==N?void 0:N.height)?N.height-140:void 0},pagination:{pageSize:k,total:p,position:["bottomCenter"]},onChange:g})})};var N=d(1242),w=d(77736);let j=()=>((0,i.useRouter)(),(0,r.jsx)(o.Wk,{children:(0,r.jsxs)(N.o,{meta:(0,r.jsx)(w.h,{title:"Cloud Provider List",description:"List of your cloud providers."}),children:[(0,r.jsx)(a.V,{title:"Cloud Providers",breadcrumbs:[{name:"Infrastructure"}]}),(0,r.jsx)(A,{})]})}));var y=j}},function(e){e.O(0,[8201,2967,5108,8874,9774,2888,179],function(){return e(e.s=61943)}),_N_E=e.O()}]);