(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3479],{26574:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/pod",function(){return a(4148)}])},4148:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return F}});var n=a(11527),i=a(2154),r=a(13740),d=a(30388);a(5433);var l=a(36865),o=a(61663),s=a(58699),u=a(85273),v=a(46457),c=a(75921),m=a(74637),h=a.n(m),x=a(32699),p=a(47725),f=a.n(p),y=a(50959),j=a(73621),k=a(19005);let S=e=>(0,k.wz)(["monitor-pod","list"],"/api/v1/monitor/pods",e);var g=a(22820),N=a(58012),w=a(97591),I=a(49309),C=a(90400);let Z=a(64814),_=a(54498);h().extend(_),h().extend(Z);let b=()=>{var e;let{responsive:t}=(0,C.Jl)(),{data:a,status:i}=(0,j.x7)(),{list:m=[]}=a||{},[p,k]=(0,y.useState)(0),[Z,_]=(0,y.useState)(1),{data:b,status:P}=S({filter:{clusterShortName:""}}),{list:T,pagination:E}=b||{},{total_items:F}=E||{},[O]=(0,g.kZ)(),[A,{setQuery:M}]=(0,I.o)(),z=(e,t)=>{var a,n;let{current:i}=e;k(null!==(n=null===(a=t.currentDataSource)||void 0===a?void 0:a.length)&&void 0!==n?n:0),i&&_(i)};(0,y.useEffect)(()=>k(null!==(e=null==T?void 0:T.length)&&void 0!==e?e:0),[T]);let R=(null==T?void 0:T.map((e,t)=>({...e,key:"ns-".concat(t),actions:(0,n.jsx)(l.Z.Compact,{children:(0,n.jsx)(o.Z,{title:"Are you sure to delete this item?",description:(0,n.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),okText:"Yes",cancelText:"No",children:(0,n.jsx)(s.ZP,{icon:(0,n.jsx)(r.Z,{})})})})})))||[],W=null==T?void 0:T.map(e=>{var t,a;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(a=e.metadata)||void 0===a?void 0:a.name)||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),X=null==T?void 0:T.map(e=>{var t,a;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(a=e.metadata)||void 0===a?void 0:a.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),q=null==T?void 0:T.map(e=>{var t,a,n;let i=(null===(t=e.status)||void 0===t?void 0:null===(a=t.containerStatuses)||void 0===a?void 0:a.find(e=>!1===e.ready))?"Crashed":null===(n=e.status)||void 0===n?void 0:n.phase;return{text:i||"",value:i||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),D=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==t?void 0:t.md)?"left":void 0,filterSearch:!0,render(e,t){var a;return null===(a=t.metadata)||void 0===a?void 0:a.name},filters:W,onFilter(e,t){var a,n;return null===(a=t.metadata)||void 0===a||!a.name||(null===(n=t.metadata)||void 0===n?void 0:n.name.indexOf(e.toString()))>-1}},{title:"Phase",dataIndex:"phase",key:"phase",width:18,render(e,t){var a,i,r;let d=(null===(a=t.status)||void 0===a?void 0:null===(i=a.containerStatuses)||void 0===i?void 0:i.find(e=>!1===e.ready))?"Crashed":null===(r=t.status)||void 0===r?void 0:r.phase;return(0,n.jsx)(u.Z,{color:"Running"===d||"Succeeded"===d?"success":"Crashed"===d||"Failed"===d?"error":"blue",children:d})},filterSearch:!0,filters:q,onFilter(e,t){var a,n,i;let r=(null===(a=t.status)||void 0===a?void 0:null===(n=a.containerStatuses)||void 0===n?void 0:n.find(e=>!1===e.ready))?"Crashed":null===(i=t.status)||void 0===i?void 0:i.phase;return e===r}},{title:"CPU",dataIndex:"cpu",key:"cpu",width:17,render:(e,t)=>(0,n.jsx)(u.Z,{children:t.cpu}),sorter(e,t){var a,n;return(0,x.toInteger)(null===(a=e.cpu)||void 0===a?void 0:a.replace("m",""))-(0,x.toInteger)(null===(n=t.cpu)||void 0===n?void 0:n.replace("m",""))}},{title:"MEM",dataIndex:"memory",key:"memory",width:17,render:(e,t)=>(0,n.jsx)(u.Z,{children:t.memory}),sorter(e,t){var a,n;return(0,x.toInteger)(null===(a=e.memory)||void 0===a?void 0:a.replace("Mi",""))-(0,x.toInteger)(null===(n=t.memory)||void 0===n?void 0:n.replace("Mi",""))}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:25,render(e,t){var a;return(0,n.jsx)(f(),{href:"#",children:null===(a=t.metadata)||void 0===a?void 0:a.namespace})},filterSearch:!0,filters:X,onFilter(e,t){var a,n;return null===(a=t.metadata)||void 0===a||!a.namespace||(null===(n=t.metadata)||void 0===n?void 0:n.namespace.indexOf(e.toString()))>-1}},{title:"Node",dataIndex:"node",key:"node",width:25,render(e,t){var a;return(0,n.jsx)(f(),{href:"#",children:null===(a=t.spec)||void 0===a?void 0:a.nodeName})}},{title:"Cluster",dataIndex:"clusterShortName",key:"clusterShortName",width:25,render:e=>(0,n.jsx)(s.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:m.map(e=>({text:e.shortName||"",value:e.shortName||""})),onFilter:(e,t)=>!t.clusterShortName||t.clusterShortName.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:25,render(e,t){var a;return(0,n.jsx)(N.q,{date:null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp})},sorter(e,t){var a,n;return h()(null===(a=e.metadata)||void 0===a?void 0:a.creationTimestamp).diff(h()(null===(n=t.metadata)||void 0===n?void 0:n.creationTimestamp))}},{title:(0,n.jsx)(v.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==t?void 0:t.md)?22:18,render:(e,t)=>t.actions}],J=(0,y.useRef)(null),L=(0,d.Z)(J);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.V,{title:"Pods (".concat(p,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,n.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:J,children:(0,n.jsx)(c.Z,{sticky:!0,size:"small",loading:"loading"===P,columns:D,dataSource:R,scroll:{x:1e3,y:void 0!==(null==L?void 0:L.height)?L.height-140:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,a,n)=>z(e,n)})})]})};var P=a(27481),T=a(24810);let E=()=>(0,n.jsx)(i.Wk,{children:(0,n.jsx)(P.o,{meta:(0,n.jsx)(T.h,{title:"Pods",description:"List of pods."}),children:(0,n.jsx)(b,{})})});var F=E}},function(e){e.O(0,[8201,2967,6839,5932,9774,2888,179],function(){return e(e.s=26574)}),_N_E=e.O()}]);