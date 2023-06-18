(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1688],{51322:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/select",function(){return a(34341)}])},77272:function(e,s,a){"use strict";a.d(s,{Hg:function(){return r},av:function(){return i},hv:function(){return n}});var t=a(22859);let i=e=>(0,t.FF)(["workspaces"],"/api/v1/workspace",e),n=e=>(0,t.yt)(["workspaces"],"/api/v1/workspace",e),r=e=>(0,t.FF)(["workspaces","invite"],"/api/v1/workspace/invite",e)},70809:function(e,s,a){"use strict";var t=a(11527),i=a(7094),n=a(50959),r=a(89335);let l=e=>{let s=(0,i.useRouter)(),{isDarkMode:a}=(0,r.vs)(),[l,c]=(0,n.useState)("".concat(s.basePath,"/assets/images/diginext_logo_white.svg"));return(0,n.useEffect)(()=>{c(a?"".concat(s.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(s.basePath,"/assets/images/diginext_logo.svg"))},[a]),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,t.jsx)("img",{src:l,alt:"Diginext Logo"})}),e.useTagline&&(0,t.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};s.Z=l},34341:function(e,s,a){"use strict";a.r(s);var t=a(11527),i=a(70861),n=a(31620),r=a(95065),l=a(88758),c=a(36865),o=a(97393),u=a(87175),d=a(88158),h=a(58699),x=a(62973),m=a.n(x),p=a(7094),v=a(50959),g=a(77665),w=a(24483),j=a(77272),f=a(24330),_=a(70809),k=a(42789),Z=a(13179),b=a(14198);let{Title:N}=n.Z,y=()=>{var e,s;let a=(0,p.useRouter)(),[n,x]=(0,v.useState)(""),[y,C]=(0,v.useState)(""),[E,S]=(0,v.useState)(""),I=e=>x(e.currentTarget.value),[P,{refetch:F}]=(0,g.aC)(),[T,D]=(0,j.av)(),[L]=(0,w.Hc)(),{workspaces:q=[]}=P||{},R=async e=>{let s=await L({userId:P._id,workspace:e});if(null==s?void 0:s.status){F();let e=new URL(window.location.href),s=e.searchParams.get("redirect_url")||window.location.origin;a.push(s)}},W=async e=>{let s={};s.name=e.name,s.public=void 0!==e.public&&e.public,s.dx_key=y;let t=await T(s);if(null==t?void 0:t.status)null==t||t.data,await F(),a.push((0,b.r8)()?"".concat(b.De.NEXT_PUBLIC_BASE_URL):"/");else{var i;S((null==t?void 0:null===(i=t.messages)||void 0===i?void 0:i.join("."))||"Internal Server Error")}},X=e=>{console.log("Failed:",e)},B=e=>{console.log("workspace > id :>> ",e),R(e)};return(0,t.jsx)(k.o,{useSidebar:!1,meta:(0,t.jsx)(Z.h,{title:"Select/Create a Workspace",description:"Select or create your workspace."}),children:(0,t.jsxs)(f.Z,{className:"text-center",children:[(0,t.jsx)(_.Z,{}),q.length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)(N,{level:3,children:"Select a workspace:"}),(0,t.jsx)("p",{children:"Choose a workspace which you want to interact with:"}),(0,t.jsx)(r.Z,{name:"select",children:(0,t.jsx)(r.Z.Item,{name:"workspace",children:(0,t.jsx)(l.Z,{size:"large",value:"".concat(null===(e=q[0])||void 0===e?void 0:e.name," (").concat(null===(s=q[0])||void 0===s?void 0:s.slug,")"),onChange:B,options:null==q?void 0:q.map(e=>({label:"".concat(e.name," (").concat(e.slug,")"),value:e._id}))})})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(N,{level:3,children:"Create a new workspace:"}),(0,t.jsxs)(r.Z,{name:"create",onFinish:W,onFinishFailed:X,autoComplete:"off",children:[(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(r.Z.Item,{name:"public",valuePropName:"checked",children:(0,t.jsx)(o.Z,{children:"Public"})}),(0,t.jsxs)(c.Z.Compact,{className:"w-full",children:[(0,t.jsx)(r.Z.Item,{name:"name",style:{flex:"auto"},rules:[{required:!0,message:"Workspace name is required."}],children:(0,t.jsx)(u.Z,{className:"text-center text-lg",placeholder:"Workspace name",onChange:I})}),(0,t.jsx)(r.Z.Item,{name:"dx_key",style:{flex:"auto"},rules:[{required:!0,message:"Diginext Key is required."}],children:(0,t.jsx)(u.Z,{className:"text-center text-lg",placeholder:"Diginext KEY",onChange:e=>C(e.currentTarget.value),suffix:(0,t.jsx)(d.Z,{title:"Where can I get this?",children:(0,t.jsx)(m(),{href:b.De.DX_SITE,target:"_blank",children:(0,t.jsx)(i.Z,{})})})})}),(0,t.jsx)(r.Z.Item,{children:(0,t.jsx)(h.ZP,{type:"primary",htmlType:"submit",disabled:""===n||""===y,className:"h-[38px]",children:"GO!"})})]})]}),(0,t.jsx)(r.Z.ErrorList,{className:"text-red-400",errors:[E]})]})]})]})})};s.default=y}},function(e){e.O(0,[8201,2967,3859,8160,9774,2888,179],function(){return e(e.s=51322)}),_N_E=e.O()}]);