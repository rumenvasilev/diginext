(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[315],{73403:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t=n(1413),a=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},l=n(42135),i=function(e,r){return a.createElement(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:r,icon:o}))};i.displayName="HomeOutlined";var c=a.forwardRef(i)},75527:function(e,r,n){"use strict";n.d(r,{Z:function(){return C}});var t=n(74902),a=n(94184),o=n.n(a),l=n(50344),i=n(67294),c=n(53124),s=n(36907),u=n(96159),d=n(80882),m=n(8703),p=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)0>r.indexOf(t[a])&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};let b=e=>{var r;let n;let{prefixCls:t,separator:a="/",children:o,menu:l,overlay:s,dropdownProps:u}=e,b=p(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),{getPrefixCls:h}=i.useContext(c.E_),f=h("breadcrumb",t);return(r=n="href"in b?i.createElement("a",Object.assign({className:`${f}-link`},b),o):i.createElement("span",Object.assign({className:`${f}-link`},b),o),n=l||s?i.createElement(m.Z,Object.assign({menu:l,overlay:s,placement:"bottom"},u),i.createElement("span",{className:`${f}-overlay-link`},r,i.createElement(d.Z,null))):r,null!=o)?i.createElement("li",null,n,a&&i.createElement("span",{className:`${f}-separator`},a)):null};b.__ANT_BREADCRUMB_ITEM=!0;let h=e=>{let{children:r}=e,{getPrefixCls:n}=i.useContext(c.E_),t=n("breadcrumb");return i.createElement("span",{className:`${t}-separator`},r||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var f=n(67968),x=n(45503),g=n(14747);let v=e=>{let{componentCls:r,iconCls:n}=e;return{[r]:Object.assign(Object.assign({},(0,g.Wf)(e)),{color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize,[n]:{fontSize:e.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.breadcrumbLinkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,g.Qy)(e)),[`li:last-child > ${r}-separator`]:{display:"none"},[`${r}-separator`]:{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor},[`${r}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}};var j=(0,f.Z)("Breadcrumb",e=>{let r=(0,x.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[v(r)]}),y=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)0>r.indexOf(t[a])&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function k(e,r,n,t){let a=n.indexOf(e)===n.length-1,o=function(e,r){if(!e.breadcrumbName)return null;let n=Object.keys(r).join("|"),t=e.breadcrumbName.replace(RegExp(`:(${n})`,"g"),(e,n)=>r[n]||e);return t}(e,r);return a?i.createElement("span",null,o):i.createElement("a",{href:`#/${t.join("/")}`},o)}let S=(e,r)=>(e=(e||"").replace(/^\//,""),Object.keys(r).forEach(n=>{e=e.replace(`:${n}`,r[n])}),e),O=(e,r,n)=>{let a=(0,t.Z)(e),o=S(r||"",n);return o&&a.push(o),a},E=e=>{let r;var{prefixCls:n,separator:t="/",style:a,className:d,routes:m,children:p,itemRender:h=k,params:f={}}=e,x=y(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]);let{getPrefixCls:g,direction:v}=i.useContext(c.E_),E=g("breadcrumb",n),[C,w]=j(E);if(m&&m.length>0){let _=[];r=m.map(e=>{let r;let n=S(e.path,f);n&&_.push(n),e.children&&e.children.length&&(r=i.createElement(s.Z,{items:e.children.map(e=>({key:e.path||e.breadcrumbName,label:h(e,f,m,O(_,e.path,f))}))}));let a={separator:t};return r&&(a.overlay=r),i.createElement(b,Object.assign({},a,{key:n||e.breadcrumbName}),h(e,f,m,_))})}else p&&(r=(0,l.Z)(p).map((e,r)=>e?(0,u.Tm)(e,{separator:t,key:r}):e));let N=o()(E,{[`${E}-rtl`]:"rtl"===v},d,w);return C(i.createElement("nav",Object.assign({className:N,style:a},x),i.createElement("ol",null,r)))};E.Item=b,E.Separator=h;var C=E},92565:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/settings",function(){return n(21324)}])},45788:function(e,r,n){"use strict";n.d(r,{D:function(){return p},V:function(){return b}});var t=n(85893),a=n(42952),o=n(89705),l=n(73403),i=n(92195),c=n(71577),s=n(75527),u=n(26713),d=n(11163),m=n(5678);function p(e){let{token:{colorTextHeading:r}}=i.Z.useToken(),{isDarkMode:n}=(0,m.vs)(),{color:a=n?"white":"black",value:o}=e;return(0,t.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:a},children:o})}let b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,d.useRouter)(),{breadcrumbs:n=[],title:m="Page Title",actions:b=[(0,t.jsx)(c.Z,{type:"default",icon:(0,t.jsx)(a.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,t.jsx)(c.Z,{type:"default",icon:(0,t.jsx)(o.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:h}}=i.Z.useToken();return(0,t.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(s.Z.Item,{href:"".concat(r.basePath,"/"),children:(0,t.jsx)(l.Z,{})},"breadcrumb-home"),n.map((e,r)=>(0,t.jsxs)(s.Z.Item,{href:e.url,children:[e.icon,(0,t.jsx)("span",{children:e.name})]},"breadcrumb-".concat(r)))]}),(0,t.jsxs)("div",{className:" flex w-full flex-row",children:[(0,t.jsx)(p,{value:m}),(0,t.jsx)("div",{children:(0,t.jsx)(u.Z,{children:b})})]})]})}},21324:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return b}});var t=n(85893),a=n(45669),o=n(45788),l=n(27484),i=n.n(l);n(67294);let c=n(56176),s=n(84110);i().extend(s),i().extend(c);let u=()=>(0,t.jsx)("div",{className:"px-4 py-6",children:(0,t.jsx)("h2",{children:"(Coming soon)"})});var d=n(5346),m=n(69008);let p=()=>(0,t.jsx)(a.Wk,{children:(0,t.jsxs)(d.o,{meta:(0,t.jsx)(m.h,{title:"Settings",description:"Workspace's configuration."}),children:[(0,t.jsx)(o.V,{title:"Workspace Settings",breadcrumbs:[{name:"Workspace"}]}),(0,t.jsx)(u,{})]})});var b=p},69008:function(e,r,n){"use strict";n.d(r,{h:function(){return s}});var t=n(85893),a=n(9008),o=n.n(a),l=n(11163),i=n(2962),c=n(51369);let s=e=>{let r=(0,l.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(i.PB,{title:"".concat(e.title," | ").concat(c.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:c.XL.locale,site_name:c.XL.site_name}}),(0,t.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[662,762,691,784,774,888,179],function(){return e(e.s=92565)}),_N_E=e.O()}]);