(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6648],{35396:function(e,t,n){"use strict";var r=n(30001),i=n(50959),d=n(62658),o=n(94590),a=function(e,t){return i.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:d.Z}))};a.displayName="EditOutlined",t.Z=i.forwardRef(a)},49677:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/infrastructure/cluster",function(){return n(27388)}])},27388:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r,i=n(11527),d=n(78177),o=n(58699),a=n(39445),l=n(14367),s=n(42149),c=n(35396),u=n(13740),f=n(30388),x=n(36865),h=n(61663),m=n(5489),p=n(74637),g=n.n(p),w=n(50959),v=n(58436),j=n(51959),k=n(8462),y=n(18315),N=n(55915);let C=n(64814),Z=n(54498);g().extend(Z),g().extend(C);let _=null!==(r=N.XL.tableConfig.defaultPageSize)&&void 0!==r?r:20,S=()=>{let{responsive:e}=(0,y.Jl)(),t=[{title:"Name",width:70,dataIndex:"name",key:"name",fixed:(null==e?void 0:e.md)?"left":void 0,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Short name",width:60,dataIndex:"shortName",key:"shortName",render:e=>(0,i.jsx)(o.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.shortName||t.shortName.indexOf(e.toString())>-1},{title:"Provider",dataIndex:"provider",key:"provider",width:40,render:(e,t)=>(0,i.jsx)(i.Fragment,{children:t.providerShortName})},{title:"Verified",dataIndex:"isVerified",key:"isVerified",width:30,render:(e,t)=>(0,i.jsx)(i.Fragment,{children:t.isVerified?"YES":"NO"})},{title:"Created by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.name||"").toLowerCase().indexOf(e.toString())>-1,render:(e,t)=>(0,i.jsx)(i.Fragment,{children:t.owner&&t.owner.name})},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,i.jsx)(j.q,{date:e}),sorter:(e,t)=>g()(e.createdAt).diff(g()(t.createdAt))},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,i.jsx)(j.q,{date:e}),sorter:(e,t)=>g()(e.updatedAt).diff(g()(t.updatedAt))},{title:"Action",key:"action",width:50,fixed:"right",render:(e,t)=>t.actions}],[n,r]=(0,w.useState)(1),{data:d,status:a}=(0,v.x7)({populate:"owner",pagination:{page:n,size:_}}),{list:l,pagination:s}=d||{},{total_items:p}=s||{};console.log("clusters :>> ",l);let[N]=(0,v.An)(),[C,{setQuery:Z}]=(0,k.o)(),S=async e=>{let t=await N({_id:e});console.log("deleteCluster :>> ",t)},b=(null==l?void 0:l.map(e=>({...e,actions:(0,i.jsxs)(x.Z.Compact,{children:[(0,i.jsx)(o.ZP,{icon:(0,i.jsx)(c.Z,{}),onClick:()=>Z({lv1:"edit",type:"cluster",cluster_slug:e.slug})}),(0,i.jsx)(h.Z,{title:"Are you sure to delete this cluster?",description:(0,i.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>S(e._id),okText:"Yes",cancelText:"No",children:(0,i.jsx)(o.ZP,{icon:(0,i.jsx)(u.Z,{})})})]})})))||[],A=e=>{let{current:t}=e;t&&r(t)},E=(0,w.useRef)(null),I=(0,f.Z)(E);return(0,i.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:E,children:(0,i.jsx)(m.Z,{sticky:!0,size:"small",loading:"loading"===a,columns:t,dataSource:b,scroll:{x:1e3,y:void 0!==(null==I?void 0:I.height)?I.height-140:void 0},pagination:{pageSize:_,total:p,position:["bottomCenter"]},onChange:A})})};var b=n(1242),A=n(77736);let E=()=>{(0,a.useRouter)();let[e,{setQuery:t}]=(0,k.o)();return(0,i.jsx)(l.Wk,{children:(0,i.jsxs)(b.o,{meta:(0,i.jsx)(A.h,{title:"Clusters",description:"List of your cloud providers."}),children:[(0,i.jsx)(s.V,{title:"Kubernetes Clusters",breadcrumbs:[{name:"Infrastructure"}],actions:[(0,i.jsx)(o.ZP,{type:"default",icon:(0,i.jsx)(d.Z,{className:"align-middle"}),onClick:()=>t({lv1:"new",type:"cluster"}),children:"New"},"workspace-setting-btn")]}),(0,i.jsx)(S,{})]})})};var I=E}},function(e){e.O(0,[8201,2967,9001,8874,9774,2888,179],function(){return e(e.s=49677)}),_N_E=e.O()}]);