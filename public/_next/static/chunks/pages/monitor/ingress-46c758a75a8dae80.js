(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{8975:function(e,t,n){"use strict";n.d(t,{T:function(){return IngressList}});var r=n(59499),a=n(16835),i=n(48689),o=n(84213),l=n(78957),u=n(86738),s=n(73318),d=n(71471),c=n(44973),f=n(27484),v=n.n(f),m=n(41664),p=n.n(m),x=n(67294),g=n(47859),h=n(11778),j=n(61123),b=n(90447),y=n(56832),S=n(3669),O=n(85893);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=n(56176),_=n(84110);v().extend(_),v().extend(w);var IngressList=function(e){var t=(0,S.Jl)().responsive,n=(0,y.o)(),r=(0,a.Z)(n,2),f=r[0],m=r[1].setQuery,w=f.namespace,_=f.cluster,k=(0,g.x7)(),C=k.data;k.status;var P=(C||{}).list,T=(0,x.useState)(0),N=T[0],Z=T[1],I=(0,x.useState)(1),E=(I[0],I[1]),D=(0,h.wz)(["monitor-ingress","list"],"/api/v1/monitor/ingresses",{filter:{cluster:_,namespace:w}}),F=D.data,A=D.status,z=F||{},H=z.list;(z.pagination||{}).total_items;var K=(0,h.TV)(["monitor-ingress","delete"],"/api/v1/monitor/ingresses",void 0),L=(0,a.Z)(K,2),V=L[0];L[1];var onTableChange=function(e,t){var n,r,a=e.current;Z(null!==(n=null===(r=t.currentDataSource)||void 0===r?void 0:r.length)&&void 0!==n?n:0),a&&E(a)};(0,x.useEffect)(function(){var e;return Z(null!==(e=null==H?void 0:H.length)&&void 0!==e?e:0)},[H]);var W=(null==H?void 0:H.map(function(e,t){return _objectSpread(_objectSpread({},e),{},{key:"ns-".concat(t),actions:(0,O.jsx)(l.Z.Compact,{children:(0,O.jsx)(u.Z,{title:"Are you sure to delete this item?",description:(0,O.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:function(){var t,n;return V({cluster:e.cluster,namespace:null===(t=e.metadata)||void 0===t?void 0:t.namespace,name:null===(n=e.metadata)||void 0===n?void 0:n.name})},okText:"Yes",cancelText:"No",children:(0,O.jsx)(s.ZP,{icon:(0,O.jsx)(i.Z,{})})})})})}))||[],X=null==H?void 0:H.map(function(e){var t,n;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(n=e.metadata)||void 0===n?void 0:n.name)||""}}).filter(function(e){return""!==e.value}).filter(function(e,t,n){return t===n.findIndex(function(t){return t.text===e.text})}),q=null==H?void 0:H.map(function(e){var t,n;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(n=e.metadata)||void 0===n?void 0:n.namespace)||""}}).filter(function(e){return""!==e.value}).filter(function(e,t,n){return t===n.findIndex(function(t){return t.text===e.text})}),J=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:null!=t&&t.md?"left":void 0,filterSearch:!0,render:function(e,t){var n;return null===(n=t.metadata)||void 0===n?void 0:n.name},filters:X,onFilter:function(e,t){var n,r;return null===(n=t.metadata)||void 0===n||!n.name||(null===(r=t.metadata)||void 0===r?void 0:r.name.indexOf(e.toString()))>-1}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render:function(e,t){var n;return(0,O.jsx)(p(),{href:"#",onClick:function(e){var n;e.preventDefault(),m(_objectSpread(_objectSpread({},f),{},{namespace:null===(n=t.metadata)||void 0===n?void 0:n.namespace}))},children:null===(n=t.metadata)||void 0===n?void 0:n.namespace})},filterSearch:!0,filters:q,onFilter:function(e,t){var n,r;return null===(n=t.metadata)||void 0===n||!n.namespace||(null===(r=t.metadata)||void 0===r?void 0:r.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterSlug",key:"clusterSlug",width:30,render:function(e){return(0,O.jsx)(s.ZP,{type:"link",style:{padding:0},onClick:function(t){m(_objectSpread(_objectSpread({},f),{},{cluster:e}))},children:e})},filterSearch:!0,filters:(void 0===P?[]:P).map(function(e){return{text:e.slug||"",value:e.slug||""}}),onFilter:function(e,t){return!t.clusterSlug||t.clusterSlug.indexOf(e.toString())>-1}},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render:function(e,t){var n;return(0,O.jsx)(j.q,{date:null===(n=t.metadata)||void 0===n?void 0:n.creationTimestamp})},sorter:function(e,t){var n,r;return v()(null===(n=e.metadata)||void 0===n?void 0:n.creationTimestamp).diff(v()(null===(r=t.metadata)||void 0===r?void 0:r.creationTimestamp))}},{title:(0,O.jsx)(d.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:null!=t&&t.md?30:26,render:function(e,t){return t.actions}}],Q=(0,x.useRef)(null),R=(0,o.Z)(Q),Y=null!=e&&e.autoHeight?"flex-auto":"h-full flex-auto overflow-hidden",B=null!=e&&e.autoHeight?void 0:void 0!==(null==R?void 0:R.height)?R.height-140:void 0;return(0,O.jsxs)(O.Fragment,{children:[null!=e&&e.hideHeader?(0,O.jsx)(O.Fragment,{}):(0,O.jsx)(b.V,{title:"Ingresses (".concat(N,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,O.jsx)("div",{className:Y,ref:Q,children:(0,O.jsx)(c.Z,{sticky:!0,size:"small",loading:"loading"===A,columns:J,dataSource:W,scroll:{x:1e3,y:B},pagination:{pageSize:200,position:["bottomCenter"],hideOnSinglePage:!0},onChange:function(e,t,n,r){return onTableChange(e,r)}})})]})}},85465:function(e,t,n){"use strict";n.r(t);var r=n(22598),a=n(8975),i=n(6761),o=n(1071),l=n(85893);t.default=function(){return(0,l.jsx)(r.Wk,{children:(0,l.jsx)(i.o,{meta:(0,l.jsx)(o.h,{title:"Ingresses",description:"List of ingresses."}),children:(0,l.jsx)(a.T,{})})})}},70573:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/ingress",function(){return n(85465)}])}},function(e){e.O(0,[3662,5877,3945,9774,2888,179],function(){return e(e.s=70573)}),_N_E=e.O()}]);