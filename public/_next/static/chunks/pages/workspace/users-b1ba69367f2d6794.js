(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{54868:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/users",function(){return n(39973)}])},77272:function(e,t,n){"use strict";n.d(t,{Hg:function(){return r},av:function(){return i},hv:function(){return l}});var s=n(22859);let i=e=>(0,s.FF)(["workspaces"],"/api/v1/workspace",e),l=e=>(0,s.yt)(["workspaces"],"/api/v1/workspace",e),r=e=>(0,s.FF)(["workspaces","invite"],"/api/v1/workspace/invite",e)},44064:function(e,t,n){"use strict";n.d(t,{D:function(){return m},V:function(){return h}});var s=n(11527),i=n(68834),l=n(8357),r=n(59850),a=n(75616),o=n(58699),d=n(70802),c=n(36865),u=n(7094),x=n(89335);function m(e){let{token:{colorTextHeading:t}}=a.Z.useToken(),{isDarkMode:n}=(0,x.vs)(),{color:i=n?"white":"black",value:l}=e;return(0,s.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:i},children:l})}let h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useRouter)(),{breadcrumbs:n=[],title:x="Page Title",actions:h=[(0,s.jsx)(o.ZP,{type:"default",icon:(0,s.jsx)(i.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,s.jsx)(o.ZP,{type:"default",icon:(0,s.jsx)(l.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:p}}=a.Z.useToken();return(0,s.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(d.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,s.jsx)(r.Z,{})},"breadcrumb-home"),n.map((e,t)=>(0,s.jsxs)(d.Z.Item,{href:e.url,children:[e.icon,(0,s.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,s.jsxs)("div",{className:" flex w-full flex-col md:flex-row",children:[(0,s.jsx)(m,{value:x}),(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,{wrap:!0,children:h})})]})]})}},39973:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var s,i=n(11527),l=n(77665),r=n(44064),a=n(93938),o=n(48274),d=n(58699),c=n(85273),u=n(99678),x=n(95065),m=n(31620),h=n(88758),p=n(50959),g=n(68802),f=n.n(g),j=n(77272);let v=[],k=e=>{let{label:t,value:n,closable:s,onClose:l,color:r}=e,a=e=>{e.preventDefault(),e.stopPropagation()};return(0,i.jsx)(c.Z,{color:f()(n)?"default":"error",onMouseDown:a,closable:s,onClose:l,style:{marginRight:3},children:t})},w=()=>{let e=u.Z.useApp(),[t]=x.Z.useForm(),[n,s]=(0,p.useState)(!1),[l]=(0,j.Hg)(),r=()=>{t.resetFields(["emails"])},a=e=>{console.log("selected:",e),s(e.filter(e=>f()(e)).length>0)},o=async t=>{console.log("data :>> ",t);let n=await l(t);(null==n?void 0:n.status)&&(r(),e.modal.success({title:"Congrats!",content:(0,i.jsx)(i.Fragment,{children:"Invitation emails have been sent successfully."}),closable:!0}))},c=t=>{console.log("Failed:",t),e.notification.error({message:"Failed",description:"Something is wrong."})};return(0,i.jsxs)("div",{children:[(0,i.jsx)(m.Z.Title,{level:4,children:"Emails"}),(0,i.jsxs)(x.Z,{name:"invite",form:t,onFinish:o,onFinishFailed:c,children:[(0,i.jsx)(x.Z.Item,{name:"emails",children:(0,i.jsx)(h.Z,{style:{width:300},mode:"tags",showArrow:!1,onChange:a,tokenSeparators:[","," "],options:v,tagRender:e=>k(e),dropdownRender:e=>(0,i.jsx)(i.Fragment,{})})}),(0,i.jsx)(x.Z.Item,{children:(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,i.jsx)(d.ZP,{type:"primary",htmlType:"submit",disabled:!n,children:"Invite"}),(0,i.jsx)(d.ZP,{children:"Clear"})]})})]})]})},Z=()=>(0,i.jsx)(o.Z,{placement:"bottomRight",trigger:"click",content:(0,i.jsx)(w,{}),children:(0,i.jsx)(d.ZP,{type:"default",icon:(0,i.jsx)(a.Z,{className:"align-middle"}),children:"Invite"},"workspace-setting-btn")});var y=n(35396),b=n(13740),F=n(5433),N=n(36865),I=n(61663),P=n(40083),_=n(74637),C=n.n(_),A=n(24483),S=n(59823),T=n(10340),E=n(65438),R=n(14198);let O=n(64814),U=n(54498);C().extend(U),C().extend(O);let D=null!==(s=R.XL.tableConfig.defaultPageSize)&&void 0!==s?s:20,H=()=>{let{responsive:e}=(0,E.Jl)(),t=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==e?void 0:e.md)?"left":void 0,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"User name",dataIndex:"slug",key:"slug",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],render:e=>(0,i.jsx)(d.ZP,{type:"link",style:{padding:0},children:e}),onFilter:(e,t)=>!t.slug||t.slug.indexOf(e.toString())>-1},{title:"Email",dataIndex:"email",key:"email",width:80},{title:"Roles",dataIndex:"roles",key:"roles",width:40,filterSearch:!0,filters:[{text:"goon",value:"goon"}],render:e=>{var t;return(0,i.jsx)(i.Fragment,{children:null===(t=e[0])||void 0===t?void 0:t.name})}},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,i.jsx)(S.q,{date:e}),sorter:(e,t)=>C()(e.updatedAt).diff(C()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,i.jsx)(S.q,{date:e}),sorter:(e,t)=>C()(e.createdAt).diff(C()(t.createdAt))},{title:(0,i.jsx)(m.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==e?void 0:e.md)?30:26,render:(e,t)=>t.actions}],[n,s]=(0,p.useState)(1),{data:l,status:r}=(0,A.mO)({populate:"roles,teams",pagination:{page:n,size:D}}),{list:a,pagination:o}=l||{},{total_items:c}=o||{};console.log("users :>> ",a);let[u]=(0,A.kZ)(),[x,{setQuery:h}]=(0,T.o)(),g=async e=>{let t=await u({_id:e});(null==t?void 0:t.status)&&F.Z.success({message:"Item deleted successfully."})},f=e=>{let{current:t}=e;t&&s(t)},j=(null==a?void 0:a.map((e,t)=>({...e,actions:(0,i.jsxs)(N.Z.Compact,{children:[(0,i.jsx)(d.ZP,{icon:(0,i.jsx)(y.Z,{}),onClick:()=>h({lv1:"edit",type:"user",user:e.slug})}),(0,i.jsx)(I.Z,{title:"Are you sure to delete this item?",description:(0,i.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>g(e._id),okText:"Yes",cancelText:"No",children:(0,i.jsx)(d.ZP,{icon:(0,i.jsx)(b.Z,{})})})]})})))||[];return console.log("displayedUsers :>> ",j),(0,i.jsx)("div",{children:(0,i.jsx)(P.Z,{loading:"loading"===r,columns:t,dataSource:j,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{pageSize:D,total:c},onChange:f})})};var X=n(42789),q=n(13179);let z=()=>(0,i.jsx)(l.Wk,{children:(0,i.jsxs)(X.o,{meta:(0,i.jsx)(q.h,{title:"Users",description:"List of users in the workspace."}),children:[(0,i.jsx)(r.V,{title:"Users",breadcrumbs:[{name:"Workspace"}],actions:[(0,i.jsx)(Z,{},"invite-member-btn")]}),(0,i.jsx)(H,{})]})});var L=z}},function(e){e.O(0,[201,967,326,686,160,774,888,179],function(){return e(e.s=54868)}),_N_E=e.O()}]);