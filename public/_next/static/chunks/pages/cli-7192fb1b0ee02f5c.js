(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{30145:function(e,t,s){"use strict";var i=s(45645),n=s(50959),a=s(76777),c=s(807),r=function(e,t){return n.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:a.Z}))};r.displayName="CopyOutlined",t.Z=n.forwardRef(r)},18467:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var i=s(45645),n=s(50959),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},c=s(807),r=function(e,t){return n.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:a}))};r.displayName="HomeOutlined";var o=n.forwardRef(r)},52391:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return s(13604)}])},49113:function(e,t,s){"use strict";s.d(t,{Hc:function(){return a},mO:function(){return n}});var i=s(83360);let n=e=>(0,i.wz)(["users","list"],"/api/v1/user",e),a=e=>(0,i.yt)(["users"],"/api/v1/user/join-workspace",e)},44754:function(e,t,s){"use strict";var i=s(11527),n=s(30145),a=s(17434),c=s(78007),r=s(82129),o=s(20193),l=s(32699),d=s(85276);let u=e=>{let{children:t,value:s,mode:u="block",type:h="text"}=e,[p,m]=(0,d.m9)();return(0,i.jsx)(i.Fragment,{children:"block"===u?(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)(a.Z.Paragraph,{children:"text"===h?(0,i.jsx)("pre",{children:s}):(0,i.jsx)(c.Z,{type:"password",className:"flex-none",disabled:!0,value:s})}),(0,i.jsx)(r.ZP,{type:"primary",danger:!(0,l.isEmpty)(p),size:"large",onClick:()=>m(s),icon:(0,i.jsx)(n.Z,{}),children:p?"Copied":"Copy"})]}):(0,i.jsxs)(o.Z.Compact,{children:[(0,i.jsx)(c.Z,{type:h,className:"flex-none",disabled:!0,value:s}),(0,i.jsx)(r.ZP,{type:"primary",danger:!(0,l.isEmpty)(p),size:"large",onClick:()=>m(s),icon:(0,i.jsx)(n.Z,{}),children:p?"Copied":"Copy"})]})})};t.Z=u},44643:function(e,t,s){"use strict";var i=s(11527),n=s(95954),a=s(50959),c=s(85276);let r=e=>{let t=(0,n.useRouter)(),{isDarkMode:s}=(0,c.vs)(),[r,o]=(0,a.useState)("".concat(t.basePath,"/assets/images/diginext_logo_white.svg"));return(0,a.useEffect)(()=>{o(s?"".concat(t.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(t.basePath,"/assets/images/diginext_logo.svg"))},[s]),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,i.jsx)("img",{src:r,alt:"Diginext Logo"})}),e.useTagline&&(0,i.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};t.Z=r},13604:function(e,t,s){"use strict";s.r(t);var i=s(11527),n=s(18467),a=s(82129),c=s(39502),r=s(32699),o=s(94603),l=s.n(o),d=s(95954),u=s(50959),h=s(66109),p=s(49113),m=s(76780),x=s(44754),f=s(44643),v=s(70038),g=s(47954),j=s(96861);s(74883);let w=()=>{var e,t;(0,d.useRouter)();let s=null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.origin,[o,{isFetched:w}]=(0,h.aC)({redirectUrl:"".concat(s,"/cli")}),[y]=(0,p.Hc)(),Z=(null==o?void 0:o.workspaces)&&(null==o?void 0:o.workspaces.length)>0?null==o?void 0:o.workspaces[0].slug:void 0,_=(0,v.c)({name:Z}),{slug:k}=_||{},b=async e=>{if(!k||!_)return;let t=await y({userId:e,workspace:k}),s=null==t?void 0:t.data;console.log("joinedUser :>> ",s)};return(0,u.useEffect)(()=>{(0,r.isEmpty)(o)||b(o._id)},[o,_]),!(0,r.isEmpty)(o)&&(0,i.jsx)(g.o,{useSidebar:!1,meta:(0,i.jsx)(j.h,{title:"CLI Authentication",description:"Authenticate before using the CLI commands."}),children:(0,i.jsxs)(m.Z,{className:"max-w-md ",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)(f.Z,{})}),(0,r.isEmpty)(_)?(0,i.jsx)(c.Z,{message:"Error",description:"This workspace does not exists.",type:"error",showIcon:!0}):(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("p",{children:"Copy & paste this ACCESS TOKEN into your command interface:"}),(0,i.jsx)(x.Z,{value:(0,r.isEmpty)(o)?"":null===(t=null==o?void 0:o.token)||void 0===t?void 0:t.access_token}),(0,i.jsx)(a.ZP,{size:"large",className:"mt-2",href:"/",icon:(0,i.jsx)(n.Z,{}),children:"Dashboard"})]})]})})};t.default=w},96861:function(e,t,s){"use strict";s.d(t,{h:function(){return l}});var i=s(11527),n=s(67559),a=s.n(n),c=s(95954),r=s(68449),o=s(74883);let l=e=>{let t=(0,c.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,i.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,i.jsx)(r.PB,{title:"".concat(e.title," | ").concat(o.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.XL.locale,site_name:o.XL.site_name}}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[201,967,218,570,774,888,179],function(){return e(e.s=52391)}),_N_E=e.O()}]);