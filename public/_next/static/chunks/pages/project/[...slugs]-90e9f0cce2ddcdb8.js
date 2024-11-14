(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2178],{56466:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1413),c=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zm52 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"appstore-add",theme:"outlined"},a=n(91146),i=c.forwardRef(function(e,t){return c.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))})},47389:function(e,t,n){"use strict";var r=n(1413),c=n(67294),o=n(27363),a=n(91146),i=c.forwardRef(function(e,t){return c.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o.Z}))});t.Z=i},74767:function(e,t,n){"use strict";n.d(t,{u:function(){return AppList}});var r=n(59499),c=n(16835),o=n(8751),a=n(47389),i=n(1413),s=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"}}]},name:"pause-circle",theme:"outlined"},d=n(91146),l=s.forwardRef(function(e,t){return s.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:u}))}),f=n(55287),p=n(50067),j=n(10524),x=n(56466),h=n(84213),v=n(73318),m=n(66309),g=n(78957),Z=n(44973),w=n(27484),y=n.n(w),b=n(11163),P=n(34187),O=n(61123),k=n(90447),_=n(56832),S=n(85893);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=n(56176),E=n(84110);y().extend(E),y().extend(A);var AppList=function(){(0,b.useRouter)();var e=(0,_.o)(),t=(0,c.Z)(e,2),n=t[0],r=t[1].setQuery,i=n.project,u=[{title:"App name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:function(e,t){return t.name&&t.name.indexOf(e.toString())>-1||!0}},{title:"Project",width:60,dataIndex:"project",key:"project",render:function(e,t){return(0,S.jsx)(v.ZP,{type:"link",style:{padding:0},children:t.projectSlug})}},{title:"Last updated by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:function(e,t){return!t.owner||(t.owner.slug||"").indexOf(e.toString())>-1},render:function(e){return(0,S.jsx)(S.Fragment,{children:null==e?void 0:e.slug})}},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:50,render:function(e){return(0,S.jsx)(O.q,{date:e})},sorter:function(e,t){return y()(e.updatedAt).diff(y()(t.updatedAt))}},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:function(e){return(0,S.jsx)(O.q,{date:e})},sorter:function(e,t){return y()(e.createdAt).diff(y()(t.createdAt))}},{title:"Status",dataIndex:"status",fixed:"right",key:"status",width:30,filters:[{text:"live",value:"live"}],render:function(e){return e?(0,S.jsx)(m.Z,{color:"success",icon:(0,S.jsx)(o.Z,{className:"align-middle"}),children:e}):"-"}},{title:"Action",key:"action",fixed:"right",width:60,dataIndex:"action",render:function(e,t){switch(e){case"app":case"project":return(0,S.jsxs)(g.Z.Compact,{children:[(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(a.Z,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(l,{})})]});case"env":return(0,S.jsxs)(g.Z.Compact,{children:[(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(f.Z,{}),href:t.url,target:"_blank"}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(l,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(p.Z,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(a.Z,{})})]});case"env-prod":return(0,S.jsxs)(g.Z.Compact,{children:[(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(f.Z,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(j.Z,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(l,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(x.Z,{})}),(0,S.jsx)(v.ZP,{icon:(0,S.jsx)(a.Z,{})})]});default:return(0,S.jsx)(S.Fragment,{})}}}],d={};i&&(d={projectSlug:i});var w=(0,P.VD)({filter:d,populate:"owner,project"}),A=w.data,E=w.status,V=((A||{}).list||[]).map(function(e){var t,n=Object.keys(null!==(t=e.deployEnvironment)&&void 0!==t?t:{}).map(function(t){var n=(e.deployEnvironment||{})[t]||{};return _objectSpread({name:t.toUpperCase(),key:"".concat(e.slug,"-").concat(t),id:t,slug:t,action:"prod"!==t?"env":"env-prod",status:"live",url:n.domains?"https://".concat(n.domains[0]):""},n)});return _objectSpread(_objectSpread({},e),{},{children:n})}),z=(0,s.useRef)(null),C=(0,h.Z)(z);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(k.V,{title:"Apps",breadcrumbs:[{name:"Workspace"}]}),(0,S.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:z,children:(0,S.jsx)(Z.Z,{loading:"loading"===E,columns:u,dataSource:V,scroll:{x:1e3,y:void 0!==(null==C?void 0:C.height)?C.height-140:void 0},pagination:{pageSize:200,position:["bottomCenter"]},expandable:{defaultExpandAllRows:!0},onChange:function(e){var t=e.current;r({page:null!=t?t:1})}})})]})}},31550:function(e,t,n){"use strict";n.r(t),n(67294);var r=n(22598),c=n(90447),o=n(74767),a=n(6761),i=n(1071),s=n(85893);t.default=function(){return(0,s.jsx)(r.Wk,{children:(0,s.jsxs)(a.o,{meta:(0,s.jsx)(i.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,s.jsx)(c.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,s.jsx)(o.u,{})]})})}},89045:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[...slugs]",function(){return n(31550)}])}},function(e){e.O(0,[3662,5877,3945,9774,2888,179],function(){return e(e.s=89045)}),_N_E=e.O()}]);