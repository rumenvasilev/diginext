(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{79609:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framework",function(){return n(34145)}])},34145:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i,r=n(11527),o=n(31621),a=n(64394),l=n(88977),s=n(89087),d=n(97450),c=n(13918),x=n(70892),f=n(47605),u=n(94034),w=n(74637),m=n.n(w),g=n(50959),h=n(18934),k=n(40223),p=n(65143),j=n(65088);let v=n(64814),y=n(54498);m().extend(y),m().extend(v);let _=[{title:"Name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Git",width:60,dataIndex:"git",key:"git",render:(e,t)=>{var n;return(0,r.jsx)(a.ZP,{type:"link",style:{padding:0},children:null===(n=t.git)||void 0===n?void 0:n.name})},filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.git||(t.git.name||"").indexOf(e.toString())>-1},{title:"Version",dataIndex:"version",key:"version",width:30},{title:"Created by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.name||"").toLowerCase().indexOf(e.toString())>-1,render:(e,t)=>(0,r.jsx)(r.Fragment,{children:t.owner.name})},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(k.q,{date:e}),sorter:(e,t)=>m()(e.createdAt).diff(m()(t.createdAt))},{title:"Action",key:"action",width:50,fixed:"right",render:(e,t)=>t.actions}],C=null!==(i=j.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,b=()=>{let[e,t]=(0,g.useState)(1),{data:n}=(0,h.Dh)({populate:"git,owner",pagination:{page:e,size:C}}),{list:i,pagination:o}=n||{},{total_items:l}=o||{};console.log("frameworks :>> ",i);let[s]=(0,h.mt)(),[w,{setQuery:m}]=(0,p.o)(),k=async e=>{let t=await s({_id:e});console.log("deleteItem :>> ",t)},j=(null==i?void 0:i.map(e=>({...e,actions:(0,r.jsxs)(x.Z.Compact,{children:[(0,r.jsx)(a.ZP,{icon:(0,r.jsx)(d.Z,{}),onClick:()=>m({lv1:"edit",type:"framework",framework_slug:e.slug})}),(0,r.jsx)(f.Z,{title:"Are you sure to delete this framework?",description:(0,r.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>k(e._id),okText:"Yes",cancelText:"No",children:(0,r.jsx)(a.ZP,{icon:(0,r.jsx)(c.Z,{})})})]})})))||[],v=e=>{let{current:n}=e;n&&t(n)};return(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{columns:_,dataSource:j,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{pageSize:C,total:l},onChange:v})})};var N=n(15953),Z=n(56049);let S=()=>{let[e,{setQuery:t}]=(0,p.o)();return(0,r.jsx)(l.Wk,{children:(0,r.jsxs)(N.o,{meta:(0,r.jsx)(Z.h,{title:"Frameworks",description:"The collection of boilerplate frameworks to start new project."}),children:[(0,r.jsx)(s.V,{title:"Frameworks",breadcrumbs:[{name:"Workspace"}],actions:[(0,r.jsx)(a.ZP,{type:"default",icon:(0,r.jsx)(o.Z,{className:"align-middle"}),onClick:()=>t({lv1:"new",type:"framework"}),children:"New"},"workspace-setting-btn")]}),(0,r.jsx)(b,{})]})})};var P=S}},function(e){e.O(0,[201,66,623,517,42,774,888,179],function(){return e(e.s=79609)}),_N_E=e.O()}]);