"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{45669:function(e,t,n){n.d(t,{Wk:function(){return y},aC:function(){return j},x4:function(){return p}});var i=n(85893),l=n(50888),s=n(67848),r=n(85945),a=n(99138),o=n(78945),c=n(47041),u=n(96486),d=n(11163),h=n(67294),g=n(69931),x=n(25026),m=n(91144),v=n(51369);let p=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null!==(e=t.redirectURL)&&void 0!==e?e:v.De.NEXT_PUBLIC_API_BASE_URL;window.location.href="".concat(v.De.NEXT_PUBLIC_API_BASE_URL,"/auth/google?redirect_url=").concat(n)},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{access_token:t=(0,c.getCookie)("x-auth-cookie")}=e,n=(0,d.useRouter)(),[i]=(0,x.o)();return(0,s.a)({staleTime:12e4,queryKey:["auth"],queryFn:async()=>{var e;let{access_token:l}=i,s=null!==(e=null!=t?t:(0,c.getCookie)("x-auth-cookie"))&&void 0!==e?e:l,{data:r}=await o.Z.get("".concat(v.De.NEXT_PUBLIC_API_BASE_URL,"/auth/profile"),{headers:s?{Authorization:"Bearer ".concat(s)}:{}});return console.log("".concat(n.asPath," > queryFn :>> "),{data:r}),r}})},j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{redirectUrl:t}=e,n=(0,d.useRouter)(),[i]=(0,x.o)(),{access_token:l=(0,c.getCookie)("x-auth-cookie")}=i;l&&(0,c.setCookie)("x-auth-cookie",l);let{data:s,isError:a,isFetched:o,isLoading:u,isSuccess:g}=f({access_token:l}),{status:m,data:v}=s||{},p=(0,r.NL)(),j=async()=>{await p.invalidateQueries({queryKey:["auth"]})};return(0,h.useEffect)(()=>{void 0!==m&&setTimeout(()=>{let e=(0,c.getCookie)("x-auth-cookie");e?j():n.push(t?"/login?redirect_url=".concat(t):"/login")},200)},[m]),[v,{reload:j,isError:a,isLoading:u,isFetched:o,isSuccess:g,status:m}]},y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{children:t}=e;(0,d.useRouter)();let[n,{isLoading:s,isFetched:r}]=j(),o=(0,m.c)({name:null==n?void 0:n.workspaces[0].slug});return s?(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)("span",{className:"ml-2",children:"Loading..."})]}):r&&(0,u.isEmpty)(n)?(0,i.jsx)(i.Fragment,{}):o?(0,i.jsx)(i.Fragment,{children:t}):(0,i.jsx)(g.Z,{className:"text-center",children:(0,i.jsx)(a.Z,{message:"Error",description:"This workspace does not exists.",type:"error"})})}},12780:function(e,t,n){n.d(t,{BY:function(){return l},wl:function(){return s}});var i=n(14223);let l=e=>(0,i.wz)(["builds"],"/api/v1/build",e),s=e=>(0,i.AQ)(["logs"],"/api/v1/build/logs",e)},84435:function(e,t,n){n.d(t,{pD:function(){return s},ve:function(){return r},x7:function(){return l}});var i=n(14223);let l=e=>(0,i.wz)(["clusters"],"/api/v1/cluster",e),s=e=>(0,i.AQ)(["clusters"],"/api/v1/cluster",e),r=(e,t)=>(0,i.yt)(["clusters"],"/api/v1/cluster",e,t)},51855:function(e,t,n){n.d(t,{av:function(){return s},xh:function(){return l}});var i=n(14223);let l=e=>(0,i.AQ)(["workspaces"],"/api/v1/workspace",e),s=e=>(0,i.FF)(["workspaces"],"/api/v1/workspace",e)},14223:function(e,t,n){n.d(t,{AQ:function(){return h},FF:function(){return g},wz:function(){return d},yt:function(){return x}});var i=n(85945),l=n(67848),s=n(48228),r=n(78945),a=n(47041),o=n(96486),c=n(11163),u=n(51369);let d=function(e,t){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=(0,c.useRouter)(),h=null!==(n=d.query.access_token)&&void 0!==n?n:(0,a.getCookie)("x-auth-cookie"),g=h?{Authorization:"Bearer ".concat(h)}:{},{pagination:x={page:1,size:20},populate:m,filter:v,sort:p="-createdAt"}=s,f=new URLSearchParams(x).toString(),j=m?"populate=".concat(m):"",y=v?new URLSearchParams(v).toString():"",k="sort=".concat(p),Z=(0,i.NL)(),_=[...e];return(0,o.isEmpty)(v)||_.push(v),(0,o.isEmpty)(x)||_.push(x),(0,l.a)({queryKey:_,queryFn:async()=>{let{data:n}=await r.Z.get("".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(y,"&").concat(k,"&").concat(j,"&").concat(f),{...s,headers:g}),{current_page:i,total_pages:l,total_items:o,page_size:c,next_page:d,prev_page:h,...x}=n,{token:m={}}=x;return m.access_token&&(0,a.setCookie)("x-auth-cookie",m.access_token),console.log("data :>> ",n),{list:n.data.map(t=>(Z.setQueryData([...e,t._id],t),Z.setQueryData([...e,{slug:t.slug}],t),{...t,key:t._id}))||[],pagination:{current_page:i,total_pages:l,total_items:o,page_size:c,next_page:d,prev_page:h}}}})},h=function(e,t){var n;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=(0,c.useRouter)(),d=null!==(n=s.query.access_token)&&void 0!==n?n:(0,a.getCookie)("x-auth-cookie"),h=d?{Authorization:"Bearer ".concat(d)}:{},{populate:g,filter:x}=i,m=g?"populate=".concat(g):"",v=x?new URLSearchParams(x).toString():"",p=[...e];return void 0!==x.slug&&null!==x.slug&&p.push(x),(0,l.a)({enabled:void 0!==x.slug&&null!==x.slug,queryKey:p,queryFn:async()=>{let e="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(v,"&").concat(m),{data:n}=await r.Z.get(e,{...i,headers:h}),{token:l={}}=n;l.access_token&&(0,a.setCookie)("x-auth-cookie",l.access_token);let s=(0,o.isArray)(n.data)?n.data.map(e=>({...e,key:e._id}))[0]:n.data[0];return s}})},g=function(e,t){var n;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,c.useRouter)(),d=(0,i.NL)(),h=null!==(n=o.query.access_token)&&void 0!==n?n:(0,a.getCookie)("x-auth-cookie"),g=h?{Authorization:"Bearer ".concat(h)}:{},x=(0,s.D)({mutationFn:async e=>{let n="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t),{data:i}=await r.Z.post(n,e,{...l,headers:g});return i.data},onMutate:async t=>(await d.cancelQueries({queryKey:e}),t)}),m=x.mutateAsync,{status:v}=x;return[m,v]},x=function(e,t){var n;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=(0,c.useRouter)(),h=(0,i.NL)(),g=null!==(n=d.query.access_token)&&void 0!==n?n:(0,a.getCookie)("x-auth-cookie"),x=g?{Authorization:"Bearer ".concat(g)}:{},{pagination:m={page:1,size:20},populate:v,sort:p="-createdAt"}=o,f=new URLSearchParams(m).toString(),j=l?new URLSearchParams(l).toString():"",y="".concat(u.De.NEXT_PUBLIC_API_BASE_URL).concat(t,"?").concat(j,"&").concat("sort=".concat(p),"&").concat(v?"populate=".concat(v):"","&").concat(f),k=(0,s.D)({mutationFn:async e=>{let{data:t}=await r.Z.patch(y,e,{...o,headers:x});return t.data},onSuccess:(t,n,i)=>{h.invalidateQueries({queryKey:e})},onSettled:(e,t,n,i)=>{}});return[k.mutateAsync,k.status]}},69931:function(e,t,n){var i=n(85893);let l=e=>(0,i.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ".concat(e.className),children:e.children});t.Z=l},77418:function(e,t,n){n.d(t,{q:function(){return c}});var i=n(85893),l=n(83062),s=n(27484),r=n.n(s);n(67294);let a=n(56176),o=n(84110);r().extend(o),r().extend(a);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{date:t}=e;return(0,i.jsx)(l.Z,{title:r()(t).format("LLL"),children:(0,i.jsx)("span",{children:t?r()(t).fromNow():"-"})})}},46003:function(e,t,n){n.d(t,{O:function(){return Z}});var i=n(85893),l=n(50091),s=n(92195),r=n(33100),a=n(27484),o=n.n(a),c=n(25935),u=n(96486),d=n(11163),h=n(67294),g=n(12780),x=n(25026),m=n(51369);let v=n(57046),p=n(56176),f=n(84110);o().extend(f),o().extend(p);let{useApp:j}=l.Z,y="command failed with exit code 1",k=e=>"".concat(e).replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,""),Z=e=>{let{slug:t}=e;(0,d.useRouter)(),j();let[n]=(0,x.o)(),{build_slug:l}=n,{data:a="",isLoading:o}=(0,g.wl)({filter:{slug:null!=t?t:l}});console.log({logData:a});let p=k(a),f=p.split("\n").map((e,t)=>e.toString()),Z=m.De.NEXT_PUBLIC_API_BASE_URL,[_,b]=(0,h.useState)(["Connecting..."]),[w,C]=(0,h.useState)("in_progress"),[E,S]=(0,h.useState)(!1),{token:{colorText:N}}=s.Z.useToken();return(0,h.useEffect)(()=>{console.log("lines :>> ",f),(0,u.isEmpty)(a)||b(f)},[f.length]),(0,h.useEffect)(()=>{let e=a.toString().toLowerCase();(e.indexOf("finished deploying")>-1||e.indexOf(y)>-1||e.indexOf("[error]")>-1)&&S(!0),e.indexOf("finished deploying")>-1&&C("success"),(e.indexOf(y)>-1||e.indexOf("[error]")>-1)&&C("failed");let t=v(Z,{transports:["websocket"]});return t.on("connect",()=>{console.log("connected:",t.connected),t.emit("join",{room:l}),t.on("message",e=>{let{action:n,message:i}=e;i&&(b(e=>[...e,i]),((null==i?void 0:i.toLowerCase().indexOf(y))>-1||(null==i?void 0:i.toLowerCase().indexOf("[error]"))>-1)&&(C("failed"),S(!0))),"end"===n&&(t.disconnect(),S(!0),C("success"))})}),t.on("disconnect",()=>{b(e=>[...e,"Disconnected with build server."])}),()=>{t.disconnect(),b([])}},[]),(0,i.jsxs)("div",{style:{color:N},children:[(0,i.jsx)(r.Z,{children:_.filter(e=>""!==e).map((e,t)=>"".concat(e).toLowerCase().indexOf("error")>-1?(0,i.jsx)(r.Z.Item,{className:"text-red-600",children:(0,c.ZP)("".concat(e))},"message-".concat(t)):(0,i.jsx)(r.Z.Item,{children:(0,c.ZP)("".concat(e))},"message-".concat(t)))}),"failed"===w&&(0,i.jsx)("h2",{className:"text-xl text-red-600",children:"Build lỗi rồi m\xe1 ơi!"}),"success"===w&&(0,i.jsx)("h2",{className:"text-xl text-green-600",children:"Build th\xe0nh c\xf4ng rồi, đỉnh qu\xe1 idol ơi!"})]})}},25026:function(e,t,n){n.d(t,{o:function(){return s}});var i=n(11163),l=n(67294);let s=()=>{let e=(0,i.useRouter)(),[t,n]=(0,l.useState)(e.query),s=i=>{let l={...t};return i.forEach(e=>{delete l[e]}),n(l),new URLSearchParams(l),e.push(e.pathname,{query:l}),t},r=()=>{let e=Object.keys(t);return s(e)};return(0,l.useEffect)(()=>{if(!e.isReady)return;let t=e.asPath;if(-1===t.indexOf("?")){r();return}let i=new URLSearchParams(t.split("?")[1]),l=Object.fromEntries(i);n(l)},[e.asPath,e.isReady]),[t,{setQuery:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l={...t,...i};return n(l),e.push("".concat(e.pathname),{query:l}),l},deleteQuery:s,deleteAllQueryKeys:r}]}},91144:function(e,t,n){n.d(t,{c:function(){return r}});var i=n(51855),l=n(25026),s=n(67294);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t]=s.useState(()=>{try{var t,n;return null==window?void 0:null===(t=window.location)||void 0===t?void 0:null===(n=t.hostname)||void 0===n?void 0:n.split(".")[e]}catch(i){console.error(i.message);return}});return t}(),[{workspace:n}]=(0,l.o)(),r="app"===t||"localhost"===t||"diginext"===t?e.name:null!=n?n:t,{data:a}=(0,i.xh)({filter:{slug:r}});return a}},83202:function(e,t,n){n.d(t,{o:function(){return eq}});var i,l=n(85893),s=n(58720),r=n(92195),a=n(50091),o=n(5678),c=n(97183),u=n(11163),d=n(67294),h=n(84435),g=n(97937),x=n(50888),m=n(63606),v=n(44384),p=n(79531),f=n(45669);let j=e=>{let t;let{updateApi:n,label:i,status:s,name:r,requiredMessage:a="This field is required.",defaultValue:c,value:u}=e,[h,j]=(0,f.aC)(),[y]=v.Z.useForm(),[k,Z]=(0,d.useState)(null!=u?u:c),_=(0,o.Nr)(k,500);(0,d.useEffect)(()=>{y.setFieldValue(r,u),Z(u)},[u]),(0,d.useEffect)(()=>{_!==u&&y.submit()},[_]);let b=e=>{y.setFieldValue(r,e.currentTarget.value),Z(e.currentTarget.value)},w=async e=>{console.log("Submit:",e);let t={...e};u||(t.owner=null==h?void 0:h._id);let i=await n(t);console.log("result :>> ",i)},C=e=>{console.log("Failed:",e)};return"error"===s&&(t=(0,l.jsx)(g.Z,{})),"loading"===s&&(t=(0,l.jsx)(x.Z,{})),"success"===s&&(t=(0,l.jsx)(m.Z,{color:"green"})),(0,l.jsx)(v.Z,{layout:"vertical",name:"edit",form:y,onFinish:w,onFinishFailed:C,autoComplete:"off",children:(0,l.jsx)(v.Z.Item,{label:i,name:r,rules:[{required:!0,message:"Please input your ".concat(r)}],children:(0,l.jsx)(p.Z,{suffix:t,onChange:b})})})};var y=n(25026);let k=e=>{let{data:t}=e,[{cluster_slug:n}]=(0,y.o)(),{data:i}=(0,h.pD)({filter:{slug:n}}),[s,r]=(0,h.ve)({id:null==i?void 0:i._id});return console.log("cluster :>> ",i),(0,l.jsx)("div",{children:(0,l.jsx)(j,{label:"Cluster name",name:"name",value:null==i?void 0:i.name,updateApi:s,status:r})})},Z=()=>{let e;let[{type:t}]=(0,y.o)();return"cluster"===t&&(e=(0,l.jsx)(k,{})),(0,l.jsx)("div",{children:e})};var _=n(53971),b=n(52545),w=n(45350),C=n(65184),E=n(13179),S=n(70125),N=n(40717),P=n(13520),A=n(139),L=n(26522),R=n(87547),I=n(55355),T=n(94149),B=n(42952),U=n(36907),F=n(87412),O=n(96486),D=n(41664),q=n.n(D);let z=(0,d.createContext)({sidebarCollapsed:!1}),X=()=>{let e=(0,d.useContext)(z);return e};var M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,d.useState)(!1),i=e=>void 0!==e?n(e):n(e=>!e);return(0,l.jsx)(z.Provider,{value:{sidebarCollapsed:t,toggleSidebar:i},children:e.children})};let Q=[{key:"menu/",icon:(0,l.jsx)(_.Z,{}),label:"Dashboard"},{key:"menu/project",icon:(0,l.jsx)(b.Z,{}),label:"Projects"},{key:"menu/framework",icon:(0,l.jsx)(w.Z,{}),label:"Frameworks"},{key:"menu/git",icon:(0,l.jsx)(C.Z,{}),label:"Git Providers"},{key:"menu/infrastructure",icon:(0,l.jsx)(E.Z,{}),label:"Infrastructure",children:[{key:"menu/infrastructure/cloud-provider",icon:(0,l.jsx)(S.Z,{}),label:"Cloud Providers"},{key:"menu/infrastructure/cluster",icon:(0,l.jsx)(N.Z,{}),label:"K8S Clusters"},{key:"menu/infrastructure/database",icon:(0,l.jsx)(P.Z,{}),label:"Databases"},{key:"menu/infrastructure/registry",icon:(0,l.jsx)(A.Z,{}),label:"Container Registries"}]},{key:"menu/workspace",icon:(0,l.jsx)(L.Z,{}),label:"Workspace",children:[{key:"menu/workspace/users",icon:(0,l.jsx)(R.Z,{}),label:"Users"},{key:"menu/workspace/teams",icon:(0,l.jsx)(I.Z,{}),label:"Teams"},{key:"menu/workspace/roles",icon:(0,l.jsx)(T.Z,{}),label:"Roles"},{key:"menu/workspace/settings",icon:(0,l.jsx)(B.Z,{}),label:"Settings"}]}],Y=()=>{let e=(0,u.useRouter)(),{sidebarCollapsed:t,toggleSidebar:n}=X(),{isDarkMode:i}=(0,o.vs)(),s="menu/".concat((0,O.trimStart)(e.pathname,"/").split("/")[0]),r="menu".concat((0,O.trimEnd)(e.pathname,"/")),a=t=>{let n=(0,O.trimStart)(t.key,"menu");e.push(n)};return(0,l.jsxs)(F.ZP,{theme:"light",collapsible:!0,collapsed:t,onCollapse:e=>n&&n(e),style:{overflow:"auto",height:"100vh",position:"fixed",left:0,top:0,bottom:0},children:[t?(0,l.jsx)("div",{className:"mx-auto my-5 w-[32px]",children:(0,l.jsx)(q(),{href:"/",children:(0,l.jsx)("img",{src:i?"".concat(e.basePath,"/assets/images/diginext-icon-white.svg"):"".concat(e.basePath,"/assets/images/diginext-icon-black.svg"),alt:"Diginext Logo"})})}):(0,l.jsx)("div",{className:"mx-auto my-5 w-36",children:(0,l.jsx)(q(),{href:"/",children:(0,l.jsx)("img",{src:i?"".concat(e.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(e.basePath,"/assets/images/diginext_logo.svg"),alt:"Diginext Logo"})})}),(0,l.jsx)(U.Z,{mode:"inline",inlineCollapsed:t,defaultOpenKeys:[s],defaultSelectedKeys:[s,r],items:Q,onSelect:a})]})};var V=n(51369);let H=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsxs)("div",{children:[e.children,(0,l.jsxs)("div",{className:"border-t border-gray-300 py-8 text-center text-xs",children:["\xa9 Copyright ",new Date().getFullYear()," ",V.XL.title,". Powered by ",(0,l.jsx)("a",{href:"https://wearetopgroup.com",children:"TOP GROUP"}),"."]})]})};var K=n(19944),W=n(84477),G=n(68795),J=n(25035),$=n(80882),ee=n(26713),et=n(71577),en=n(74627),ei=n(98293);let{Header:el}=c.Z,es=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onSidebarChange:t}=e,{isDarkMode:n,toggle:i}=(0,o.vs)(),[s]=(0,f.aC)(),{token:{colorBgContainer:a}}=r.Z.useToken(),{sidebarCollapsed:c,toggleSidebar:u}=X();return(0,d.useEffect)(()=>t&&t(c),[c]),(0,l.jsx)(el,{className:"w-full",style:{position:"sticky",top:0,paddingInline:24,lineHeight:"48px",height:48,zIndex:100,background:a},children:(0,l.jsxs)("div",{className:"flex ",children:[(0,l.jsx)("div",{className:"grow",children:d.createElement(c?K.Z:W.Z,{className:"trigger",onClick:()=>u&&u()})}),(0,l.jsxs)(ee.Z,{size:4,children:[(0,l.jsx)(et.Z,{type:"text",icon:(0,l.jsx)(G.Z,{})}),(0,l.jsx)(et.Z,{type:"text",icon:(0,l.jsx)(J.Z,{})}),(0,l.jsx)(et.Z,{type:"text",style:{fontSize:18,verticalAlign:"middle",paddingTop:0},onClick:i,icon:n?(0,l.jsx)("i",{className:"ri-sun-line inline-block"}):(0,l.jsx)("i",{className:"ri-moon-line inline-block"})}),(0,l.jsx)(en.Z,{placement:"bottomRight",trigger:"click",content:(0,l.jsxs)(ee.Z,{direction:"vertical",children:[(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"mb-0",children:(0,l.jsx)("strong",{children:null==s?void 0:s.name})}),(0,l.jsx)("p",{className:"mb-0",children:null==s?void 0:s.email})]}),(0,l.jsxs)(ee.Z.Compact,{direction:"vertical",className:"w-full",children:[(0,l.jsx)(et.Z,{children:"Profile"}),(0,l.jsx)(et.Z,{href:"/logout",children:"Sign out"})]})]}),children:(0,l.jsxs)("div",{className:"cursor-pointer align-middle",children:[(0,l.jsx)(ei.C,{style:{lineHeight:"20px"},icon:(0,l.jsx)(R.Z,{style:{verticalAlign:"middle"}}),src:null==s?void 0:s.image,size:24}),(0,l.jsx)("span",{className:"ml-2 inline-block",children:null==s?void 0:s.name}),(0,l.jsx)($.Z,{className:"ml-2"})]})})]})]})})};var er=n(45605),ea=n(18429),eo=n(8751),ec=n(37993),eu=n(99611),ed=n(67841),eh=n(51904),eg=n(83062),ex=n(21889),em=n(27484),ev=n.n(em),ep=n(12780),ef=n(14223);let ej=e=>(0,ef.wz)(["releases"],"/api/v1/release",e),ey=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return(0,ef.yt)(["releases"],"/api/v1/release/rollout",e,t)},ek=e=>(0,ef.FF)(["releases"],"/api/v1/release/from-build",e),eZ=e=>(0,ef.yt)(["releases"],"/api/v1/release/preview",e);var e_=n(77418);let eb=n(56176),ew=n(84110);ev().extend(ew),ev().extend(eb);let{useApp:eC}=a.Z,eE=[{title:"Name",width:70,dataIndex:"name",key:"name",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0,render:(e,t)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:(0,l.jsx)(q(),{href:{pathname:"/build/[...slugs]",query:{slugs:[t.slug]}},children:(0,l.jsx)("strong",{children:e})})}),(0,l.jsxs)("p",{children:["Created ",(0,l.jsx)(e_.q,{date:t.createdAt})]})]})},{title:"Created by",dataIndex:"owner",key:"owner",width:40,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.owner&&(t.owner.slug||"").indexOf(e.toString())>-1||!0,render:e=>(0,l.jsx)(l.Fragment,{children:null==e?void 0:e.name})},{title:"Status",dataIndex:"status",key:"status",width:30,filters:[{text:"live",value:"live"}],render:e=>{let t="warning",n=(0,l.jsx)(er.Z,{});switch(e){case"building":t="processing",n=(0,l.jsx)(x.Z,{className:"align-middle"});break;case"failed":t="error",n=(0,l.jsx)(ea.Z,{className:"align-middle"});break;case"success":t="success",n=(0,l.jsx)(eo.Z,{className:"align-middle"});break;default:t="default",n=(0,l.jsx)(er.Z,{})}return(0,l.jsx)(eh.Z,{color:t,icon:n,children:e})}},{title:"Action",key:"action",width:30,dataIndex:"action"}],eS=()=>{(0,u.useRouter)();let e=eC(),[t,{setQuery:n}]=(0,y.o)(),{project:i,app:s,env:r}=t,a={};i&&(a.projectSlug=i),s&&(a.appSlug=s),r&&(a.env=r);let[o,c]=(0,d.useState)(1),{data:h}=(0,ep.BY)({populate:"owner",pagination:{page:o,size:100},filter:a}),{list:g,pagination:x}=h||{},{total_pages:m}=x||{},v=e=>{n({lv2:"build_logs",build_slug:e})},[p]=ek(),f=async t=>{if((0,O.isEmpty)(t)){e.notification.error({message:"Failed to release the build.",description:"Build not found: ".concat(t),placement:"top"});return}try{let n=await p({build:t});e.notification.success({message:"Congrats, the release has been created successfully!",description:(0,l.jsxs)(l.Fragment,{children:["You can now preview it on ",(0,l.jsx)("a",{href:"https://".concat(null==n?void 0:n.prereleaseUrl),children:"PRE-RELEASE"})," endpoint."]}),placement:"top"})}catch(i){console.error("Could not process releasing this build:",i),e.notification.error({message:"Failed to roll out.",description:"Could not process releasing this build: ".concat(i),placement:"top"})}},j=null==g?void 0:g.map(e=>({id:e._id,...e,action:(0,l.jsxs)(ee.Z.Compact,{children:[(0,l.jsx)(eg.Z,{title:"View log history",children:(0,l.jsx)(et.Z,{icon:(0,l.jsx)(ec.Z,{}),onClick:()=>v(e.slug)})}),(0,l.jsx)(eg.Z,{title:"Go to image link",children:(0,l.jsx)(et.Z,{icon:(0,l.jsx)(eu.Z,{}),href:"https://".concat(e.image),target:"_blank"})}),"prod"===e.env&&(0,l.jsx)(eg.Z,{title:"Release this build",children:(0,l.jsx)(et.Z,{icon:(0,l.jsx)(ed.Z,{}),onClick:()=>{var t;return f(null===(t=e._id)||void 0===t?void 0:t.toString())}})})]})})),k=e=>{let{current:t}=e;c(null!=t?t:1)};return(0,l.jsx)("div",{children:(0,l.jsx)(ex.Z,{columns:eE,dataSource:j,scroll:{x:600},sticky:{offsetHeader:0},pagination:{current:o,pageSize:100,total:m},onChange:k})})};var eN=n(46003);let eP=n(56176),eA=n(84110);ev().extend(eA),ev().extend(eP);let{useApp:eL}=a.Z,eR=[{title:"Name",width:70,dataIndex:"name",key:"name",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0,render:(e,t)=>{var n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:(0,l.jsx)("strong",{children:e})}),(0,l.jsxs)("p",{children:["Author: ",null!==(i=null===(n=t.owner)||void 0===n?void 0:n.name)&&void 0!==i?i:"-",(0,l.jsx)("br",{}),"Created ",(0,l.jsx)(e_.q,{date:t.createdAt})]})]})}},{title:"Build status",dataIndex:"buildStatus",key:"buildStatus",width:30,filters:[{text:"start",value:"start"},{text:"failed",value:"failed"},{text:"success",value:"success"},{text:"building",value:"building"}],render:e=>{let t="warning",n=(0,l.jsx)(er.Z,{});switch(e){case"building":t="processing",n=(0,l.jsx)(x.Z,{className:"align-middle"});break;case"failed":t="error",n=(0,l.jsx)(ea.Z,{className:"align-middle"});break;case"success":t="success",n=(0,l.jsx)(eo.Z,{className:"align-middle"});break;default:t="default",n=(0,l.jsx)(er.Z,{})}return(0,l.jsx)(eh.Z,{color:t,icon:n,children:e})}},{title:"Active",dataIndex:"active",key:"active",width:20,filters:[{text:"active",value:!0}],onFilter:(e,t)=>t.active===e,render:e=>!0===e?(0,l.jsx)(eh.Z,{color:"blue",icon:(0,l.jsx)(eo.Z,{}),children:"active"}):"-"},{title:"Action",key:"action",width:30,dataIndex:"action",render:e=>e}],eI=()=>{(0,u.useRouter)();let e=eL(),[t]=(0,y.o)(),{project:n,app:i,offsetHeader:s=0,env:r="prod"}=t,a={};n&&(a.projectSlug=n),i&&(a.appSlug=i),r&&(a.env=r);let[o,c]=(0,d.useState)(1),{data:h}=ej({populate:"owner",pagination:{page:o,size:100},filter:a}),{list:g=[],pagination:m}=h||{},{total_pages:v}=m||{},[p,f]=ey();console.log("rolloutApiStatus :>> ",f);let[j,k]=(0,d.useState)(""),[Z]=eZ(),_=async t=>{if((0,O.isEmpty)(t)){e.notification.error({message:"Failed to roll out.",description:"Release not found: ".concat(t),placement:"top"});return}k(t);try{let n=await p({id:t});e.notification.success({message:"Congrats, the release has been rolled out successfully!",description:(0,l.jsxs)(l.Fragment,{children:["Your website is ready to access on PRODUCTION environment:"," ",(0,l.jsx)("a",{href:"https://".concat(null==n?void 0:n.productionUrl),target:"_blank",rel:"noreferrer",children:null==n?void 0:n.productionUrl})]}),placement:"top"})}catch(i){console.error("Could not process rolling out this release:",i),e.notification.error({message:"Failed to roll out.",description:"Could not process rolling out this release: ".concat(i),placement:"top"})}k("")},b=async t=>{if((0,O.isEmpty)(t)){e.notification.error({message:"Failed to preview.",description:"Release not found: ".concat(t),placement:"top"});return}try{let n=await Z({id:t});e.notification.success({message:"Congrats!",description:(0,l.jsxs)(l.Fragment,{children:["The PRE-RELEASE environment has been setup successfully at:"," ",(0,l.jsx)("a",{href:"https://".concat(null==n?void 0:n.prereleaseUrl),target:"_blank",rel:"noreferrer",children:null==n?void 0:n.prereleaseUrl})]}),placement:"top"})}catch(i){e.notification.error({message:"Failed to start preview.",description:"Could not set up the pre-release environment of this release: ".concat(i),placement:"top"})}},w=g.map(e=>({...e,id:e._id,state:""!==j?f:!0===e.active?"success":"none",action:(0,l.jsxs)(ee.Z.Compact,{children:[(0,l.jsx)(eg.Z,{title:"Roll out",children:(0,l.jsx)(et.Z,{icon:""!==j&&"loading"===f?(0,l.jsx)(x.Z,{}):(0,l.jsx)(ed.Z,{}),onClick:()=>_(e._id)})}),(0,l.jsx)(eg.Z,{title:"Preview",children:(0,l.jsx)(et.Z,{icon:(0,l.jsx)(eu.Z,{}),onClick:()=>b(e._id),target:"_blank"})})]})}));console.log({displayedReleases:w});let C=e=>{let{current:t}=e;c(null!=t?t:1)};return(0,l.jsx)("div",{children:(0,l.jsx)(ex.Z,{columns:eR,dataSource:w,scroll:{x:600},sticky:{offsetHeader:s},pagination:{current:o,pageSize:100,total:v},onChange:C})})};var eT=n(85265);let eB=(0,d.createContext)({}),eU=()=>{let e=(0,d.useContext)(eB);return e};var eF=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,d.useState)({lv1:!1,lv2:!1}),[i,s]=(0,d.useState)(),[r,a]=(0,d.useState)(),o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lv1",t=arguments.length>1?arguments[1]:void 0;return void 0!==t?n(n=>{let i={...n};return i[e]=t,i}):n(t=>{let n={...t};return n[e]=!t[e],n})},c=e=>{e?o(e,!1):n({lv1:!1,lv2:!1})},u=()=>{n(e=>({...e,lv1:!1}))},h=()=>{n(e=>({...e,lv2:!1}))},g=(e,t)=>{switch(null==t?void 0:t.level){case 1:s(e),o("lv1",!0);break;case 2:a(e),o("lv2",!0)}};return(0,l.jsxs)(eB.Provider,{value:{drawerVisibility:t,toggleDrawer:o,showDrawer:g,closeDrawer:c},children:[e.children,(0,l.jsxs)(eT.Z,{title:null==i?void 0:i.title,placement:"right",onClose:u,open:t.lv1,size:"large",children:[null==i?void 0:i.content,(0,l.jsx)(eT.Z,{title:null==r?void 0:r.title,placement:"right",onClose:h,open:t.lv2,size:"large",children:null==r?void 0:r.content})]})]})};let eO=e=>{let{useSidebar:t}=e;(0,u.useRouter)();let{sidebarCollapsed:n}=X(),i="auto";t&&(i=n?80:200);let s=eU(),{drawerVisibility:a,showDrawer:o,closeDrawer:h}=s,[g,{setQuery:x,deleteQuery:m,deleteAllQueryKeys:v}]=(0,y.o)(),{lv1:p,lv2:f,type:j,slug:k,project:_,app:b,env:w}=g,{token:{colorText:C}}=r.Z.useToken(),E=()=>{o&&o({title:"Builds",content:(0,l.jsx)(eS,{})},{level:1})},S=()=>{o&&o({title:"Releases",content:(0,l.jsx)(eI,{})},{level:1})},N=()=>{o&&o({title:"Build Logs",content:(0,l.jsx)(eN.O,{})},{level:2})},P=()=>{o&&o({title:"Edit",content:(0,l.jsx)(Z,{})},{level:1})};return(0,d.useEffect)(()=>{switch(p){case"build":E();break;case"release":S();break;case"edit":P();break;default:h&&h("lv1")}"build_logs"===f?N():h&&h("lv2")},[p,f,_,b,w]),(0,d.useEffect)(()=>{(null==a?void 0:a.lv1)===!1&&m(["lv1","project","app","release"])},[null==a?void 0:a.lv1]),(0,d.useEffect)(()=>{(null==a?void 0:a.lv2)===!1&&m(["lv2","build_slug"])},[null==a?void 0:a.lv2]),(0,l.jsxs)(c.Z,{hasSider:!0,children:[e.meta,t&&(0,l.jsx)(Y,{}),(0,l.jsxs)(c.Z,{className:"min-h-screen transition-all",style:{marginLeft:i},children:[t&&(0,l.jsx)(es,{}),(0,l.jsx)("div",{className:"grow px-2",children:e.children}),(0,l.jsx)(H,{})]})]})};function eD(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{components:t=[],children:n,...i}=e;return(0,l.jsx)(l.Fragment,{children:t.reduceRight((t,n)=>(0,d.createElement)(n,{...i,key:e.key},t),n)})}let eq=e=>{let{isDarkMode:t}=(0,o.vs)(),{useSidebar:n=!0}=e;return(0,l.jsx)(s.ZP,{theme:{hashed:!1,algorithm:t?r.Z.darkAlgorithm:r.Z.defaultAlgorithm},children:(0,l.jsx)(eD,{components:[M,eF],children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(eO,{meta:e.meta,useSidebar:n,children:e.children})})})})}},51369:function(e,t,n){n.d(t,{De:function(){return o},XL:function(){return a},r8:function(){return c}});var i=n(4793),l=n(96486),s=n(83454);let r={DEVELOPMENT:"development",STAGING:"staging",CANARY:"canary",PRODUCTION:"production"},a={site_name:"Diginext Admin",title:"Diginext Admin",description:"Welcome to an Admin Panel of Diginext.",locale:"en",tableConfig:{defaultPageSize:20}};class o{static get ENV(){return this.grab("NODE_ENV","development").toUpperCase()}static get NEXT_PUBLIC_BASE_PATH(){return""}static getBasePath(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",{NEXT_PUBLIC_BASE_PATH:t}=this;return(""===t?t:"/".concat(t))+e}static path(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.getBasePath(e)}static get NEXT_PUBLIC_ENV(){return"production"}static get NEXT_PUBLIC_API_BASE_URL(){return(0,l.trimEnd)("https://api.diginext.site","/")||"/"}static get NEXT_PUBLIC_DOMAIN(){return"diginext.site"}static get NEXT_PUBLIC_BASE_URL(){return(0,l.trimEnd)("https://app.diginext.site","/")||"/"}static get DISABLE_INPECT_MEMORY(){return(0,i.AM)(this.grab("DISABLE_INPECT_MEMORY"))}static get SECONDS_INPECT_MEMORY(){return(0,i.Hq)(this.grab("SECONDS_INPECT_MEMORY"))}static get CORS_WHITELIST(){return s.env.CORS_WHITELIST?s.env.CORS_WHITELIST.split(";"):["localhost","192.168","127.0","digitop.vn","diginext.site","diginext.vn"]}}o.grab=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i={...s.env};return null!==(t=i[e])&&void 0!==t?t:n};let c=()=>o.NEXT_PUBLIC_ENV===r.DEVELOPMENT}}]);