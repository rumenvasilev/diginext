(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6647:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return n(75857)}])},60130:function(e,t,n){"use strict";n.d(t,{BT:function(){return s},Zz:function(){return r}});var i=n(14223);let r=e=>(0,i.wz)(["projects"],"/api/v1/project",e),s=e=>(0,i.wz)(["projects"],"/api/v1/project/with-apps",e)},45788:function(e,t,n){"use strict";n.d(t,{D:function(){return x},V:function(){return j}});var i=n(85893),r=n(42952),s=n(89705),a=n(73403),l=n(92195),c=n(71577),o=n(75527),d=n(26713),p=n(11163),u=n(5678);function x(e){let{token:{colorTextHeading:t}}=l.Z.useToken(),{isDarkMode:n}=(0,u.vs)(),{color:r=n?"white":"black",value:s}=e;return(0,i.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:r},children:s})}let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,p.useRouter)(),{breadcrumbs:n=[],title:u="Page Title",actions:j=[(0,i.jsx)(c.Z,{type:"default",icon:(0,i.jsx)(r.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,i.jsx)(c.Z,{type:"default",icon:(0,i.jsx)(s.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:h}}=l.Z.useToken();return(0,i.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(o.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,i.jsx)(a.Z,{})},"breadcrumb-home"),n.map((e,t)=>(0,i.jsxs)(o.Z.Item,{href:e.url,children:[e.icon,(0,i.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,i.jsxs)("div",{className:" flex w-full flex-row",children:[(0,i.jsx)(x,{value:u}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{children:j})})]})]})}},75857:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i,r=n(85893),s=n(45669),a=n(45788),l=n(45605),c=n(86548),o=n(30159),d=n(99611),p=n(10524),u=n(50067),x=n(67841),j=n(77516),h=n(71577),f=n(51904),g=n(26713),m=n(83062),Z=n(21889),v=n(92351),b=n(27484),w=n.n(b),y=n(96486),k=n(41664),S=n.n(k),_=n(11163),C=n(67294),N=n(60130),P=n(77418),A=n(25026),E=n(51369);let I=n(56176),L=n(84110);w().extend(L),w().extend(I);let T=[{title:"Project/app",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0,render:(e,t)=>"project"===t.type?(0,r.jsx)(S(),{href:"/project/".concat(t.slug),children:e}):(0,r.jsx)(r.Fragment,{children:e})},{title:"Cluster",width:60,dataIndex:"cluster",key:"cluster",render:e=>(0,r.jsx)(h.Z,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.cluster&&t.cluster.indexOf(e.toString())>-1||!0},{title:"Last updated by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.owner&&t.owner.indexOf(e.toString())>-1||!0,render:e=>(0,r.jsx)(r.Fragment,{children:null==e?void 0:e.name})},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,r.jsx)(P.q,{date:e}),sorter:(e,t)=>w()(e.updatedAt).diff(w()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(P.q,{date:e}),sorter:(e,t)=>w()(e.createdAt).diff(w()(t.createdAt))},{title:"Status",dataIndex:"status",fixed:"right",key:"status",width:30,filters:[{text:"live",value:"live"}],render:e=>(0,r.jsx)(f.Z,{color:"warning",icon:(0,r.jsx)(l.Z,{className:"align-middle"}),children:e})},{title:"Action",key:"action",fixed:"right",width:70,dataIndex:"action",render:(e,t)=>t.actions}],z=null!==(i=E.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,F=()=>{let e=(0,_.useRouter)(),[t,{setQuery:n}]=(0,A.o)(),[i,s]=(0,C.useState)(t.page?parseInt(t.page,10):1),{data:a}=(0,N.BT)({populate:"owner",pagination:{page:i,size:z}}),{list:l,pagination:f}=a||{},{total_pages:b}=f||{},w=(e,t,i)=>{n({lv1:"build",project:e,app:t,env:i})},k=(e,t,i)=>{n({lv1:"release",project:e,app:t,env:i})};(0,C.useEffect)(()=>{if(!e.isReady)return;let n=t.page?parseInt(t.page.toString(),10):1;s(n)},[t.page]);let S=null==l?void 0:l.map(e=>({...e,type:"project",actions:(0,r.jsxs)(g.Z.Compact,{children:[(0,r.jsx)(m.Z,{title:"Edit project",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(c.Z,{})})}),(0,r.jsx)(h.Z,{icon:(0,r.jsx)(o.Z,{})})]}),key:e._id,id:e._id,status:"N/A",children:e.apps?e.apps.map(t=>{var n;let i=Object.keys(null!==(n=t.environment)&&void 0!==n?n:{}),s=i.map(n=>{let i=t.environment?t.environment[n]:"[]",s=(0,v.pM)(i)?JSON.parse(i):{},a={name:n.toUpperCase(),key:"".concat(e.slug,"-").concat(t.slug,"-").concat(n),id:n,slug:n,projectSlug:e.slug,appSlug:t.slug,type:"prod"!==n?"env":"env-prod",status:"N/A",url:s.domains?"https://".concat(s.domains[0]):"",prereleaseUrl:"prod"===n?"https://".concat(e.slug,"-").concat(t.slug,".prerelease.diginext.site").toLowerCase():"",...s};return a.actions="prod"===n?(0,r.jsxs)(g.Z.Compact,{children:[(0,r.jsx)(m.Z,{title:"Preview pre-release site",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(d.Z,{}),href:a.prereleaseUrl,target:"_blank",disabled:(0,y.isEmpty)(a.prereleaseUrl)})}),(0,r.jsx)(m.Z,{title:"View live website",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(p.Z,{}),href:a.url,target:"_blank",disabled:(0,y.isEmpty)(a.url)})}),(0,r.jsx)(m.Z,{title:"List of builds",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(u.Z,{}),onClick:()=>w(a.projectSlug,a.appSlug,n)})}),(0,r.jsx)(m.Z,{title:"All releases",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(x.Z,{}),onClick:()=>k(a.projectSlug,a.appSlug,n)})}),(0,r.jsx)(m.Z,{title:"Modify environment variables (coming soon)",placement:"topRight",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(j.Z,{}),disabled:!0})})]}):(0,r.jsxs)(g.Z.Compact,{children:[(0,r.jsx)(m.Z,{title:"View website",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(d.Z,{}),href:a.url,target:"_blank",disabled:(0,y.isEmpty)(a.url)})}),(0,r.jsx)(m.Z,{title:"List of builds",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(u.Z,{}),onClick:()=>w(a.projectSlug,a.appSlug,a.id)})}),(0,r.jsx)(m.Z,{title:"Modify environment variables (coming soon)",placement:"topRight",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(j.Z,{}),disabled:!0})})]}),a});return{...t,key:t._id,id:t._id,status:"N/A",type:"app",children:s,actions:(0,r.jsxs)(g.Z.Compact,{children:[(0,r.jsx)(m.Z,{title:"Edit app",children:(0,r.jsx)(h.Z,{icon:(0,r.jsx)(c.Z,{})})}),(0,r.jsx)(h.Z,{icon:(0,r.jsx)(o.Z,{})})]})}}):[]})),P=e=>{let{current:t}=e;n({page:null!=t?t:1})};return(0,r.jsx)("div",{children:(0,r.jsx)(Z.Z,{columns:T,dataSource:S,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{current:i,pageSize:z,total:b},onChange:P})})};var O=n(83202),R=n(69008);let X=()=>(0,r.jsx)(s.Wk,{children:(0,r.jsxs)(O.o,{meta:(0,r.jsx)(R.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,r.jsx)(a.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,r.jsx)(F,{})]})});var U=X},69008:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var i=n(85893),r=n(9008),s=n.n(r),a=n(11163),l=n(2962),c=n(51369);let o=e=>{let t=(0,a.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,i.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,i.jsx)(l.PB,{title:"".concat(e.title," | ").concat(c.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:c.XL.locale,site_name:c.XL.site_name}}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[662,420,584,202,774,888,179],function(){return e(e.s=6647)}),_N_E=e.O()}]);