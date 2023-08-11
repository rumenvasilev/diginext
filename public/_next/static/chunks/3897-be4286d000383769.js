"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3897],{23897:function(e,l,t){t.d(l,{S:function(){return Z}});var a=t(11527),i=t(13740),n=t(30388),d=t(36865),o=t(61663),r=t(58699),u=t(85273),s=t(88158),v=t(46457),c=t(5489),m=t(74637),p=t.n(m),x=t(32699),h=t(25698),g=t.n(h),f=t(50959),y=t(58436),j=t(28731);let k=e=>(0,j.wz)(["monitor-deployment","list"],"/api/v1/monitor/deployments",e),R=e=>(0,j.TV)(["monitor-deployment","delete"],"/api/v1/monitor/deployments",e);var S=t(51959),w=t(42149),I=t(8462),b=t(18315);let A=t(64814),C=t(54498);p().extend(C),p().extend(A);let Z=e=>{var l,t;let{responsive:m}=(0,b.Jl)(),[h,{setQuery:j}]=(0,I.o)(),{namespace:A,cluster:C}=h,{data:Z,status:F}=(0,y.x7)(),{list:N=[]}=Z||{},[T,M]=(0,f.useState)(0),[P,D]=(0,f.useState)(1),{data:E,status:O}=k({filter:h}),{list:_,pagination:z}=E||{},{total_items:H=null!==(l=null==_?void 0:_.length)&&void 0!==l?l:0}=z||{},[V,q]=R(),J=(e,l)=>{var t,a;let{current:i}=e;M(null!==(a=null===(t=l.currentDataSource)||void 0===t?void 0:t.length)&&void 0!==a?a:0),i&&D(i)};(0,f.useEffect)(()=>M(null!==(t=null==_?void 0:_.length)&&void 0!==t?t:0),[_]);let U=(null==_?void 0:_.map((e,l)=>({...e,key:"ns-".concat(l),actions:(0,a.jsx)(d.Z.Compact,{children:(0,a.jsx)(o.Z,{title:"Are you sure to delete this item?",description:(0,a.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm(){var l,t;return V({cluster:e.cluster,namespace:null===(l=e.metadata)||void 0===l?void 0:l.namespace,name:null===(t=e.metadata)||void 0===t?void 0:t.name})},okText:"Yes",cancelText:"No",children:(0,a.jsx)(r.ZP,{icon:(0,a.jsx)(i.Z,{})})})})})))||[],W=null==_?void 0:_.map(e=>{var l,t;return{text:(null===(l=e.metadata)||void 0===l?void 0:l.name)||"",value:(null===(t=e.metadata)||void 0===t?void 0:t.name)||""}}).filter(e=>""!==e.value).filter((e,l,t)=>l===t.findIndex(l=>l.text===e.text)),Y=null==_?void 0:_.map(e=>{var l,t;return{text:(null===(l=e.metadata)||void 0===l?void 0:l.namespace)||"",value:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||""}}).filter(e=>""!==e.value).filter((e,l,t)=>l===t.findIndex(l=>l.text===e.text)),B=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==m?void 0:m.md)?"left":void 0,filterSearch:!0,render(e,l){var t;return null===(t=l.metadata)||void 0===t?void 0:t.name},filters:W,onFilter(e,l){var t,a;return null===(t=l.metadata)||void 0===t||!t.name||(null===(a=l.metadata)||void 0===a?void 0:a.name.indexOf(e.toString()))>-1}},{title:"Pods",dataIndex:"pods",key:"pods",width:15,render(e,l){var t,i,n,d,o,r,s,v,c,m;let p=null!==(c=null!==(r=null===(t=l.status)||void 0===t?void 0:t.availableReplicas)&&void 0!==r?r:null===(i=l.status)||void 0===i?void 0:i.readyReplicas)&&void 0!==c?c:(null!==(s=null===(n=l.status)||void 0===n?void 0:n.replicas)&&void 0!==s?s:0)-(null!==(v=null===(d=l.status)||void 0===d?void 0:d.unavailableReplicas)&&void 0!==v?v:0),x=null!==(m=null===(o=l.status)||void 0===o?void 0:o.replicas)&&void 0!==m?m:0;return(0,a.jsxs)(u.Z,{color:0===p?"error":p<x?"warning":"default",children:[p,"/",x]})},filterSearch:!0,filters:[{text:"Ready",value:"ready"},{text:"Partial",value:"partial"},{text:"Failed",value:"failed"}],onFilter(e,l){var t,a,i,n,d,o,r,u,s,v;let c=null!==(s=null!==(o=null===(t=l.status)||void 0===t?void 0:t.availableReplicas)&&void 0!==o?o:null===(a=l.status)||void 0===a?void 0:a.readyReplicas)&&void 0!==s?s:(null!==(r=null===(i=l.status)||void 0===i?void 0:i.replicas)&&void 0!==r?r:0)-(null!==(u=null===(n=l.status)||void 0===n?void 0:n.unavailableReplicas)&&void 0!==u?u:0),m=null!==(v=null===(d=l.status)||void 0===d?void 0:d.replicas)&&void 0!==v?v:0;return"failed"===e?0===c:"partial"===e?c>0&&c<m:c===m},sorter(e,l){var t,a,i,n,d,o,r,u,s,v,c,m,p,x,h,g;let f=null!==(m=null!==(s=null===(t=e.status)||void 0===t?void 0:t.availableReplicas)&&void 0!==s?s:null===(a=e.status)||void 0===a?void 0:a.readyReplicas)&&void 0!==m?m:(null!==(v=null===(i=e.status)||void 0===i?void 0:i.replicas)&&void 0!==v?v:0)-(null!==(c=null===(n=e.status)||void 0===n?void 0:n.unavailableReplicas)&&void 0!==c?c:0),y=null!==(g=null!==(p=null===(d=l.status)||void 0===d?void 0:d.availableReplicas)&&void 0!==p?p:null===(o=l.status)||void 0===o?void 0:o.readyReplicas)&&void 0!==g?g:(null!==(x=null===(r=l.status)||void 0===r?void 0:r.replicas)&&void 0!==x?x:0)-(null!==(h=null===(u=l.status)||void 0===u?void 0:u.unavailableReplicas)&&void 0!==h?h:0);return f-y}},{title:"CPU",dataIndex:"cpu",key:"cpu",width:17,render(e,l){var t,i;let n=(0,x.toInteger)(null===(t=l.cpuAvg)||void 0===t?void 0:t.replace("m",""))||0,d=(0,x.toInteger)(null===(i=l.cpuCapacity)||void 0===i?void 0:i.replace("m",""))||0;return 0===d?(0,a.jsx)(s.Z,{overlay:(0,a.jsxs)(a.Fragment,{children:["Recommend: ",l.cpuRecommend]}),children:(0,a.jsx)(u.Z,{color:0===d?"default":n>.8*d?"warning":"success",children:l.cpuAvg})}):(0,a.jsx)(u.Z,{color:0===d?"default":n>.8*d?"warning":"success",children:l.cpuAvg})},sorter(e,l){var t,a;return(0,x.toInteger)(null===(t=e.cpuAvg)||void 0===t?void 0:t.replace("m",""))-(0,x.toInteger)(null===(a=l.cpuAvg)||void 0===a?void 0:a.replace("m",""))}},{title:"MEM",dataIndex:"memory",key:"memory",width:17,render(e,l){var t,i;let n=(0,x.toInteger)(null===(t=l.memoryAvg)||void 0===t?void 0:t.replace("Mi",""))||0,d=(0,x.toInteger)(null===(i=l.memoryCapacity)||void 0===i?void 0:i.replace("Mi",""))||0;return 0===d?(0,a.jsx)(s.Z,{overlay:(0,a.jsxs)(a.Fragment,{children:["Recommend: ",l.memoryRecommend]}),children:(0,a.jsx)(u.Z,{color:0===d?"default":n>.8*d?"warning":"success",children:l.memoryAvg})}):(0,a.jsx)(u.Z,{color:0===d?"default":n>.8*d?"warning":"success",children:l.memoryAvg})},sorter(e,l){var t,a;return(0,x.toInteger)(null===(t=e.memoryAvg)||void 0===t?void 0:t.replace("Mi",""))-(0,x.toInteger)(null===(a=l.memoryAvg)||void 0===a?void 0:a.replace("Mi",""))}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render(e,l){var t;return(0,a.jsx)(g(),{href:"#",onClick(e){var t;e.preventDefault(),j({...h,namespace:null===(t=l.metadata)||void 0===t?void 0:t.namespace})},children:null===(t=l.metadata)||void 0===t?void 0:t.namespace})},filterSearch:!0,filters:Y,onFilter(e,l){var t,a;return null===(t=l.metadata)||void 0===t||!t.namespace||(null===(a=l.metadata)||void 0===a?void 0:a.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterSlug",key:"clusterSlug",width:30,render:e=>(0,a.jsx)(g(),{href:"#",onClick(l){l.preventDefault(),j({...h,cluster:e})},children:e}),filterSearch:!0,filters:N.map(e=>({text:e.slug||"",value:e.slug||""})),onFilter:(e,l)=>!l.clusterSlug||l.clusterSlug.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render(e,l){var t;return(0,a.jsx)(S.q,{date:null===(t=l.metadata)||void 0===t?void 0:t.creationTimestamp})},sorter(e,l){var t,a;return p()(null===(t=e.metadata)||void 0===t?void 0:t.creationTimestamp).diff(p()(null===(a=l.metadata)||void 0===a?void 0:a.creationTimestamp))}},{title:(0,a.jsx)(v.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==m||m.md,12),render:(e,l)=>l.actions}],G=(0,f.useRef)(null),K=(0,n.Z)(G),L=(null==e?void 0:e.autoHeight)?"flex-auto h-auto":"h-full flex-auto overflow-hidden",Q=(null==e?void 0:e.autoHeight)?void 0:void 0!==(null==K?void 0:K.height)?K.height-140:void 0;return(0,a.jsxs)(a.Fragment,{children:[(null==e?void 0:e.hideHeader)?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(w.V,{title:"Deployments (".concat(T,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,a.jsx)("div",{className:L,ref:G,children:(0,a.jsx)(c.Z,{sticky:!0,loading:"loading"===O,size:"small",columns:B,dataSource:U,scroll:{x:1e3,y:Q},pagination:{pageSize:200,position:["bottomCenter"],hideOnSinglePage:!0},onChange:(e,l,t,a)=>J(e,a)})})]})}}}]);