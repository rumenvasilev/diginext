(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{58898:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/git",function(){return n(1057)}])},1057:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i,r=n(11527),o=n(96430),a=n(82129),l=n(66109),d=n(81289),s=n(79908),c=n(5962),u=n(20193),x=n(42741),g=n(32942),f=n(74637),h=n.n(f),p=n(50959),k=n(95019),w=n(1830),m=n(32365),v=n(74883);let j=n(64814),y=n(54498);h().extend(y),h().extend(j);let _=[{title:"Name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Host",dataIndex:"host",key:"host",width:50},{title:"Namespace",width:50,dataIndex:"gitWorkspace",key:"gitWorkspace",render:(e,t)=>{var n;return(0,r.jsx)(a.ZP,{type:"link",style:{padding:0},href:null===(n=t.repo)||void 0===n?void 0:n.url,target:"_blank",children:e})},filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.gitWorkspace||t.gitWorkspace.indexOf(e.toString())>-1},{title:"Created by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.name||"").toLowerCase().indexOf(e.toString())>-1,render:(e,t)=>(0,r.jsx)(r.Fragment,{children:t.owner.name})},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(w.q,{date:e}),sorter:(e,t)=>h()(e.createdAt).diff(h()(t.createdAt))},{title:"Action",key:"action",width:50,fixed:"right",render:(e,t)=>t.actions}],C=null!==(i=v.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,N=()=>{let[e,t]=(0,p.useState)(1),{data:n}=(0,k.y3)({populate:"owner",pagination:{page:e,size:C}}),{list:i,pagination:o}=n||{},{total_items:l}=o||{};console.log("gitProviders :>> ",i);let[d]=(0,k.CX)(),[f,{setQuery:h}]=(0,m.o)(),w=async e=>{let t=await d({_id:e});console.log("deleteItem :>> ",t)},v=(null==i?void 0:i.map(e=>({...e,actions:(0,r.jsxs)(u.Z.Compact,{children:[(0,r.jsx)(a.ZP,{icon:(0,r.jsx)(s.Z,{}),onClick:()=>h({lv1:"edit",type:"git-provider",git_provider_slug:e.slug})}),(0,r.jsx)(x.Z,{title:"Are you sure to delete this git provider?",description:(0,r.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>w(e._id),okText:"Yes",cancelText:"No",children:(0,r.jsx)(a.ZP,{icon:(0,r.jsx)(c.Z,{})})})]})})))||[],j=e=>{let{current:n}=e;n&&t(n)};return(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{columns:_,dataSource:v,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{pageSize:C,total:l},onChange:j})})};var P=n(47954),b=n(96861);let Z=()=>{let[,{setQuery:e}]=(0,m.o)();return(0,r.jsx)(l.Wk,{children:(0,r.jsxs)(P.o,{meta:(0,r.jsx)(b.h,{title:"Git Providers",description:"The collection of GIT Providers for your team."}),children:[(0,r.jsx)(d.V,{title:"Git Providers",breadcrumbs:[{name:"Workspace"}],actions:[(0,r.jsx)(a.ZP,{type:"default",icon:(0,r.jsx)(o.Z,{className:"align-middle"}),onClick:()=>e({lv1:"new",type:"git-provider"}),children:"New"},"git-new-btn")]}),(0,r.jsx)(N,{})]})})};var S=Z}},function(e){e.O(0,[201,967,218,570,251,774,888,179],function(){return e(e.s=58898)}),_N_E=e.O()}]);