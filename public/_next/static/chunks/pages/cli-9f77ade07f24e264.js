(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{30145:function(e,t,i){"use strict";var n=i(45645),s=i(50959),a=i(76777),c=i(807),o=function(e,t){return s.createElement(c.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a.Z}))};o.displayName="CopyOutlined",t.Z=s.forwardRef(o)},18467:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(45645),s=i(50959),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},c=i(807),o=function(e,t){return s.createElement(c.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};o.displayName="HomeOutlined";var r=s.forwardRef(o)},52391:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return i(13604)}])},44754:function(e,t,i){"use strict";var n=i(11527),s=i(30145),a=i(17434),c=i(78007),o=i(82129),r=i(20193),l=i(32699),d=i(85276);let u=e=>{let{children:t,value:i,mode:u="block",type:h="text"}=e,[p,m]=(0,d.m9)();return(0,n.jsx)(n.Fragment,{children:"block"===u?(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)(a.Z.Paragraph,{children:"text"===h?(0,n.jsx)("pre",{children:i}):(0,n.jsx)(c.Z,{type:"password",className:"flex-none",disabled:!0,value:i})}),(0,n.jsx)(o.ZP,{type:"primary",danger:!(0,l.isEmpty)(p),size:"large",onClick:()=>m(i),icon:(0,n.jsx)(s.Z,{}),children:p?"Copied":"Copy"})]}):(0,n.jsxs)(r.Z.Compact,{children:[(0,n.jsx)(c.Z,{type:h,className:"flex-none",disabled:!0,value:i}),(0,n.jsx)(o.ZP,{type:"primary",danger:!(0,l.isEmpty)(p),size:"large",onClick:()=>m(i),icon:(0,n.jsx)(s.Z,{}),children:p?"Copied":"Copy"})]})})};t.Z=u},44643:function(e,t,i){"use strict";var n=i(11527),s=i(95954),a=i(50959),c=i(85276);let o=e=>{let t=(0,s.useRouter)(),{isDarkMode:i}=(0,c.vs)(),[o,r]=(0,a.useState)("".concat(t.basePath,"/assets/images/diginext_logo_white.svg"));return(0,a.useEffect)(()=>{r(i?"".concat(t.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(t.basePath,"/assets/images/diginext_logo.svg"))},[i]),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,n.jsx)("img",{src:o,alt:"Diginext Logo"})}),e.useTagline&&(0,n.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};t.Z=o},13604:function(e,t,i){"use strict";i.r(t);var n=i(11527),s=i(18467),a=i(82129),c=i(39502),o=i(32699),r=i(94603),l=i.n(r),d=i(95954),u=i(50959),h=i(66109),p=i(49113),m=i(76780),x=i(44754),f=i(44643),v=i(70038),g=i(95967),j=i(96861);i(74883);let w=()=>{var e,t,i;(0,d.useRouter)();let r=null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.origin,[w,{isFetched:y}]=(0,h.aC)({redirectUrl:"".concat(r,"/cli")}),[Z]=(0,p.Hc)(),_=null==w?void 0:null===(t=w.activeWorkspace)||void 0===t?void 0:t.slug,b=(0,v.c)({name:_}),{slug:k}=b||{},E=async e=>{if(!k||!b)return;let t=await Z({userId:e,workspace:k}),i=null==t?void 0:t.data;console.log("joinedUser :>> ",i)};return(0,u.useEffect)(()=>{(0,o.isEmpty)(w)||E(w._id)},[w,b]),!(0,o.isEmpty)(w)&&(0,n.jsx)(g.o,{useSidebar:!1,meta:(0,n.jsx)(j.h,{title:"CLI Authentication",description:"Authenticate before using the CLI commands."}),children:(0,n.jsxs)(m.Z,{className:"max-w-md ",children:[(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)(f.Z,{})}),(0,o.isEmpty)(b)?(0,n.jsx)(c.Z,{message:"Error",description:"This workspace does not exists.",type:"error",showIcon:!0}):(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{children:"Copy & paste this ACCESS TOKEN into your command interface:"}),(0,n.jsx)(x.Z,{value:(0,o.isEmpty)(w)?"":null===(i=null==w?void 0:w.token)||void 0===i?void 0:i.access_token}),(0,n.jsx)(a.ZP,{size:"large",className:"mt-2",href:"/",icon:(0,n.jsx)(s.Z,{}),children:"Dashboard"})]})]})})};t.default=w},96861:function(e,t,i){"use strict";i.d(t,{h:function(){return l}});var n=i(11527),s=i(67559),a=i.n(s),c=i(95954),o=i(68449),r=i(74883);let l=e=>{let t=(0,c.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,n.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,n.jsx)(o.PB,{title:"".concat(e.title," | ").concat(r.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:r.XL.locale,site_name:r.XL.site_name}}),(0,n.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[201,967,218,522,774,888,179],function(){return e(e.s=52391)}),_N_E=e.O()}]);