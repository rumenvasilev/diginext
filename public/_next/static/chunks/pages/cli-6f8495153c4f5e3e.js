(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{59762:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return i(58454)}])},53068:function(e,t,i){"use strict";i.d(t,{Hc:function(){return c},mO:function(){return n}});var s=i(14223);let n=e=>(0,s.wz)(["users"],"/api/v1/user",e),c=(e,t)=>(0,s.yt)(["users"],"/api/v1/user/join-workspace",e,t)},7154:function(e,t,i){"use strict";var s=i(85893),n=i(11163),c=i(67294),a=i(5678);let r=e=>{let t=(0,n.useRouter)(),{isDarkMode:i}=(0,a.vs)(),[r,o]=(0,c.useState)("".concat(t.basePath,"/assets/images/diginext_logo_white.svg"));return(0,c.useEffect)(()=>{o(i?"".concat(t.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(t.basePath,"/assets/images/diginext_logo.svg"))},[i]),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,s.jsx)("img",{src:r,alt:"Diginext Logo"})}),e.useTagline&&(0,s.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};t.Z=r},58454:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var s=i(85893),n=i(99138),c=i(96486),a=i(41664),r=i.n(a),o=i(11163),l=i(67294),u=i(45669),d=i(53068),p=i(69931),h=i(57132),x=i(22850),m=i(71577),f=i(5678);let v=e=>{let{children:t,value:i}=e,[n,a]=(0,f.m9)();return(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(x.Z.Paragraph,{children:(0,s.jsx)("pre",{children:i})}),(0,s.jsx)(m.Z,{type:"primary",danger:!(0,c.isEmpty)(n),size:"large",onClick:()=>a(i),icon:(0,s.jsx)(h.Z,{}),children:n?"Copied":"Copy"})]})};var g=i(7154),j=i(91144),w=i(83202),_=i(69008);i(51369);let k=()=>{var e;(0,o.useRouter)();let t=null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.origin,[i,{isFetched:a}]=(0,u.aC)({redirectUrl:"".concat(t,"/cli")}),[h]=(0,d.Hc)(),x=(null==i?void 0:i.workspaces)&&(null==i?void 0:i.workspaces.length)>0?null==i?void 0:i.workspaces[0].slug:void 0,m=(0,j.c)({name:x}),f=async e=>{if(!x||!m)return;let t=await h({userId:e,workspace:x});console.log("joinedUser :>> ",t)};return(0,l.useEffect)(()=>{(0,c.isEmpty)(i)||f(i._id)},[i,m]),!(0,c.isEmpty)(i)&&(0,s.jsx)(w.o,{useSidebar:!1,meta:(0,s.jsx)(_.h,{title:"CLI Authentication",description:"Authenticate before using the CLI commands."}),children:(0,s.jsxs)(p.Z,{className:"max-w-md ",children:[(0,s.jsx)(r(),{href:"/",children:(0,s.jsx)(g.Z,{})}),(0,c.isEmpty)(m)?(0,s.jsx)(n.Z,{message:"Error",description:"This workspace does not exists.",type:"error",showIcon:!0}):(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{children:"Copy & paste this ACCESS TOKEN into your command interface:"}),(0,s.jsx)(v,{value:(0,c.isEmpty)(i)?"":(null==i?void 0:i.token).access_token})]})]})})};var y=k},69008:function(e,t,i){"use strict";i.d(t,{h:function(){return l}});var s=i(85893),n=i(9008),c=i.n(n),a=i(11163),r=i(2962),o=i(51369);let l=e=>{let t=(0,a.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,s.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,s.jsx)(r.PB,{title:"".concat(e.title," | ").concat(o.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.XL.locale,site_name:o.XL.site_name}}),(0,s.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[662,420,850,202,774,888,179],function(){return e(e.s=59762)}),_N_E=e.O()}]);