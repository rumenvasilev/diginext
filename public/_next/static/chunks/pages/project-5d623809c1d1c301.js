(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{26860:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return n(94700)}])},10891:function(e,t,n){"use strict";n.d(t,{VD:function(){return s},Ys:function(){return l},_M:function(){return r}});var i=n(83360);let s=e=>(0,i.wz)(["apps","list"],"/api/v1/app",e),r=()=>(0,i.TV)(["apps","delete"],"/api/v1/app"),l=()=>(0,i.TV)(["projects","apps","environment","delete"],"/api/v1/app/environment")},1940:function(e,t,n){"use strict";n.d(t,{BT:function(){return r},E_:function(){return l},Zz:function(){return s}});var i=n(83360);let s=e=>(0,i.wz)(["projects","list"],"/api/v1/project",e),r=e=>(0,i.wz)(["projects","list"],"/api/v1/project/with-apps",e),l=()=>(0,i.TV)(["projects","delete"],"/api/v1/project")},81289:function(e,t,n){"use strict";n.d(t,{D:function(){return x},V:function(){return j}});var i=n(11527),s=n(95752),r=n(99513),l=n(18467),a=n(515),o=n(82129),c=n(8290),d=n(20193),p=n(95954),u=n(85276);function x(e){let{token:{colorTextHeading:t}}=a.Z.useToken(),{isDarkMode:n}=(0,u.vs)(),{color:s=n?"white":"black",value:r}=e;return(0,i.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:s},children:r})}let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,p.useRouter)(),{breadcrumbs:n=[],title:u="Page Title",actions:j=[(0,i.jsx)(o.ZP,{type:"default",icon:(0,i.jsx)(s.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,i.jsx)(o.ZP,{type:"default",icon:(0,i.jsx)(r.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:h}}=a.Z.useToken();return(0,i.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(c.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,i.jsx)(l.Z,{})},"breadcrumb-home"),n.map((e,t)=>(0,i.jsxs)(c.Z.Item,{href:e.url,children:[e.icon,(0,i.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,i.jsxs)("div",{className:" flex w-full flex-row",children:[(0,i.jsx)(x,{value:u}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{children:j})})]})]})}},94700:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var i,s=n(11527),r=n(66109),l=n(81289),a=n(48409),o=n(79908),c=n(5962),d=n(59140),p=n(85718),u=n(37537),x=n(23407),j=n(63072),h=n(82129),f=n(3741),m=n(20193),g=n(14354),Z=n(42741),v=n(78559),y=n(91736),b=n(74637),w=n.n(b),k=n(32699),P=n(94603),_=n.n(P),C=n(95954),S=n(50959),N=n(10891),T=n(1940),A=n(1830),E=n(32365),I=n(74883);let z=n(64814),L=n(54498);w().extend(L),w().extend(z);let V=[{title:"Project/app",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0,render:(e,t)=>"project"===t.type?(0,s.jsx)(_(),{href:"/project/".concat(t.slug),children:e}):(0,s.jsx)(s.Fragment,{children:e})},{title:"Cluster",width:60,dataIndex:"cluster",key:"cluster",render:e=>(0,s.jsx)(h.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.cluster&&t.cluster.indexOf(e.toString())>-1||!0},{title:"Last updated by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.owner&&t.owner.indexOf(e.toString())>-1||!0,render:e=>(0,s.jsx)(s.Fragment,{children:null==e?void 0:e.name})},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,s.jsx)(A.q,{date:e}),sorter:(e,t)=>w()(e.updatedAt).diff(w()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,s.jsx)(A.q,{date:e}),sorter:(e,t)=>w()(e.createdAt).diff(w()(t.createdAt))},{title:"Status",dataIndex:"status",fixed:"right",key:"status",width:30,filters:[{text:"live",value:"live"}],render:e=>(0,s.jsx)(f.Z,{color:"warning",icon:(0,s.jsx)(a.Z,{className:"align-middle"}),children:e})},{title:"Action",key:"action",fixed:"right",width:70,dataIndex:"action",render:(e,t)=>t.actions}],F=null!==(i=I.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,O=()=>{let e=(0,C.useRouter)(),[t,{setQuery:n}]=(0,E.o)(),[i,r]=(0,S.useState)(t.page?parseInt(t.page,10):1),{data:l}=(0,T.BT)({populate:"owner",pagination:{page:i,size:F}}),{list:a,pagination:f}=l||{},{total_pages:b,total_items:w}=f||{},[P,_]=(0,T.E_)(),[A,I]=(0,N._M)(),[z,L]=(0,N.Ys)(),O=(e,t,i)=>{n({lv1:"build",project:e,app:t,env:i})},M=(e,t,i)=>{n({lv1:"release",project:e,app:t,env:i})},R=async e=>{let t=await P({_id:e});console.log("[deleteProject] result :>> ",t)},X=async e=>{let t=await A({_id:e});console.log("[deleteApp] result :>> ",t)},Y=async(e,t)=>{let n=await z({_id:e,env:t});console.log("[deleteEnvironment] result :>> ",n)};(0,S.useEffect)(()=>{if(!e.isReady)return;let n=t.page?parseInt(t.page.toString(),10):1;r(n)},[t.page]);let U=null==a?void 0:a.map(e=>({...e,type:"project",actions:(0,s.jsxs)(m.Z.Compact,{children:[(0,s.jsx)(g.Z,{title:"Edit project",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(o.Z,{})})}),(0,s.jsx)(Z.Z,{title:"Are you sure to delete this project?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: all of the related apps & deployed environments will be also deleted."}),onConfirm:()=>R(e._id),okText:"Yes",cancelText:"No",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(c.Z,{})})})]}),key:e._id,id:e._id,status:"N/A",children:e.apps?e.apps.map(t=>{var n;let i=Object.keys(null!==(n=t.environment)&&void 0!==n?n:{}),r=i.map(n=>{let i=t.environment?t.environment[n]:"[]",r=(0,y.pM)(i)?JSON.parse(i):{},l={name:n.toUpperCase(),key:"".concat(e.slug,"-").concat(t.slug,"-").concat(n),id:n,slug:n,projectSlug:e.slug,appSlug:t.slug,type:"prod"!==n?"env":"env-prod",status:"N/A",url:r.domains?"https://".concat(r.domains[0]):"",prereleaseUrl:"prod"===n?"https://".concat(e.slug,"-").concat(t.slug,".prerelease.diginext.site").toLowerCase():"",...r};return l.actions="prod"===n?(0,s.jsxs)(m.Z.Compact,{children:[(0,s.jsx)(g.Z,{title:"Preview pre-release site",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(d.Z,{}),href:l.prereleaseUrl,target:"_blank",disabled:(0,k.isEmpty)(l.prereleaseUrl)})}),(0,s.jsx)(g.Z,{title:"View live website",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(p.Z,{}),href:l.url,target:"_blank",disabled:(0,k.isEmpty)(l.url)})}),(0,s.jsx)(g.Z,{title:"List of builds",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(u.Z,{}),onClick:()=>O(l.projectSlug,l.appSlug,n)})}),(0,s.jsx)(g.Z,{title:"All releases",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(x.Z,{}),onClick:()=>M(l.projectSlug,l.appSlug,n)})}),(0,s.jsx)(g.Z,{title:"Modify environment variables (coming soon)",placement:"topRight",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(j.Z,{}),disabled:!0})}),(0,s.jsx)(Z.Z,{title:"Are you sure to delete this environment?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back (excepts re-deploying)."}),onConfirm:()=>Y(t._id,n),okText:"Yes",cancelText:"No",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(c.Z,{})})})]}):(0,s.jsxs)(m.Z.Compact,{children:[(0,s.jsx)(g.Z,{title:"View website",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(d.Z,{}),href:l.url,target:"_blank",disabled:(0,k.isEmpty)(l.url)})}),(0,s.jsx)(g.Z,{title:"List of builds",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(u.Z,{}),onClick:()=>O(l.projectSlug,l.appSlug,l.id)})}),(0,s.jsx)(g.Z,{title:"Modify environment variables (coming soon)",placement:"topRight",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(j.Z,{}),disabled:!0})}),(0,s.jsx)(Z.Z,{title:"Are you sure to delete this environment?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back (excepts re-deploying)."}),onConfirm:()=>Y(t._id,n),okText:"Yes",cancelText:"No",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(c.Z,{})})})]}),l});return{...t,key:t._id,id:t._id,status:"N/A",type:"app",children:r,actions:(0,s.jsxs)(m.Z.Compact,{children:[(0,s.jsx)(g.Z,{title:"Edit app",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(o.Z,{})})}),(0,s.jsx)(Z.Z,{title:"Are you sure to delete this app?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: all of the related deployed environments will be also deleted."}),onConfirm:()=>X(t._id),okText:"Yes",cancelText:"No",children:(0,s.jsx)(h.ZP,{icon:(0,s.jsx)(c.Z,{})})})]})}}):[]})),B=e=>{let{current:t}=e;n({page:null!=t?t:1})};return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{columns:V,dataSource:U,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{showSizeChanger:!0,current:i,defaultPageSize:F,total:w},onChange:B})})};var M=n(7337),R=n(96861);let X=()=>(0,s.jsx)(r.Wk,{children:(0,s.jsxs)(M.o,{meta:(0,s.jsx)(R.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,s.jsx)(l.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,s.jsx)(O,{})]})});var Y=X},96861:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var i=n(11527),s=n(67559),r=n.n(s),l=n(95954),a=n(68449),o=n(74883);let c=e=>{let t=(0,l.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,i.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,i.jsx)(a.PB,{title:"".concat(e.title," | ").concat(o.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.XL.locale,site_name:o.XL.site_name}}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[201,967,340,326,166,774,888,179],function(){return e(e.s=26860)}),_N_E=e.O()}]);