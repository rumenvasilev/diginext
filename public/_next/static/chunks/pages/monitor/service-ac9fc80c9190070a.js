(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8018],{10601:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/service",function(){return a(99275)}])},99275:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}});var i=a(11527),n=a(2154),r=a(13740),l=a(30388);a(5433);var d=a(36865),o=a(61663),s=a(58699),c=a(46457),u=a(75921),v=a(74637),m=a.n(v),x=a(47725),h=a.n(x),f=a(50959),p=a(73621),N=a(19005);let S=e=>(0,N.wz)(["monitor-service","list"],"/api/v1/monitor/services",e);var j=a(22820),k=a(58012),g=a(97591),w=a(49309),_=a(90400);let y=a(64814),Z=a(54498);m().extend(Z),m().extend(y);let C=()=>{var e;let{responsive:t}=(0,_.Jl)(),{data:a,status:n}=(0,p.x7)(),{list:v=[]}=a||{},[x,N]=(0,f.useState)(0),[y,Z]=(0,f.useState)(1),{data:C,status:T}=S({filter:{clusterShortName:""}}),{list:b,pagination:E}=C||{},{total_items:I}=E||{},[O]=(0,j.kZ)(),[A,{setQuery:F}]=(0,w.o)(),P=(e,t)=>{var a,i;let{current:n}=e;N(null!==(i=null===(a=t.currentDataSource)||void 0===a?void 0:a.length)&&void 0!==i?i:0),n&&Z(n)};(0,f.useEffect)(()=>N(null!==(e=null==b?void 0:b.length)&&void 0!==e?e:0),[b]);let z=(null==b?void 0:b.map((e,t)=>({...e,key:"ns-".concat(t),actions:(0,i.jsx)(d.Z.Compact,{children:(0,i.jsx)(o.Z,{title:"Are you sure to delete this item?",description:(0,i.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),okText:"Yes",cancelText:"No",children:(0,i.jsx)(s.ZP,{icon:(0,i.jsx)(r.Z,{})})})})})))||[],W=null==b?void 0:b.map(e=>{var t,a;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(a=e.metadata)||void 0===a?void 0:a.name)||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),X=null==b?void 0:b.map(e=>{var t,a;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(a=e.metadata)||void 0===a?void 0:a.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),q=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==t?void 0:t.md)?"left":void 0,filterSearch:!0,render(e,t){var a;return null===(a=t.metadata)||void 0===a?void 0:a.name},filters:W,onFilter(e,t){var a,i;return null===(a=t.metadata)||void 0===a||!a.name||(null===(i=t.metadata)||void 0===i?void 0:i.name.indexOf(e.toString()))>-1}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render(e,t){var a;return(0,i.jsx)(h(),{href:"#",children:null===(a=t.metadata)||void 0===a?void 0:a.namespace})},filterSearch:!0,filters:X,onFilter(e,t){var a,i;return null===(a=t.metadata)||void 0===a||!a.namespace||(null===(i=t.metadata)||void 0===i?void 0:i.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterShortName",key:"clusterShortName",width:30,render:e=>(0,i.jsx)(s.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:v.map(e=>({text:e.shortName||"",value:e.shortName||""})),onFilter:(e,t)=>!t.clusterShortName||t.clusterShortName.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render(e,t){var a;return(0,i.jsx)(k.q,{date:null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp})},sorter(e,t){var a,i;return m()(null===(a=e.metadata)||void 0===a?void 0:a.creationTimestamp).diff(m()(null===(i=t.metadata)||void 0===i?void 0:i.creationTimestamp))}},{title:(0,i.jsx)(c.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==t?void 0:t.md)?30:26,render:(e,t)=>t.actions}],D=(0,f.useRef)(null),J=(0,l.Z)(D);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.V,{title:"Services (".concat(x,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,i.jsx)("div",{className:"flex-auto overflow-auto",ref:D,children:(0,i.jsx)(u.Z,{sticky:!0,size:"small",loading:"loading"===T,columns:q,dataSource:z,scroll:{x:1e3,y:void 0!==(null==J?void 0:J.height)?J.height-140:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,a,i)=>P(e,i)})})]})};var T=a(27481),b=a(24810);let E=()=>(0,i.jsx)(n.Wk,{children:(0,i.jsx)(T.o,{meta:(0,i.jsx)(b.h,{title:"Services",description:"List of services."}),children:(0,i.jsx)(C,{})})});var I=E}},function(e){e.O(0,[8201,2967,6839,5932,9774,2888,179],function(){return e(e.s=10601)}),_N_E=e.O()}]);