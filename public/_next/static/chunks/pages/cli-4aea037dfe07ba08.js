(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5957],{72945:function(e,s,t){"use strict";var n=t(11163),a=t(67294),i=t(79661),r=t(85893);s.Z=function(e){var s=(0,n.useRouter)(),t=(0,i.vs)().isDarkMode,c=(0,a.useState)("".concat(s.basePath,"/assets/images/diginext_logo_white.svg")),o=c[0],u=c[1];return(0,a.useEffect)(function(){u(t?"".concat(s.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(s.basePath,"/assets/images/diginext_logo.svg"))},[t]),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className||""),children:(0,r.jsx)("img",{src:o,alt:"DXUP Logo",className:"inline-block"})}),e.useTagline&&(0,r.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})}},28698:function(e,s,t){"use strict";t.r(s);var n=t(50029),a=t(16835),i=t(87794),r=t.n(i),c=t(73403),o=t(73318),u=t(40056),l=t(96486),d=t(41664),f=t.n(d),h=t(67294),m=t(22598),v=t(15832),x=t(54846),p=t(95696),g=t(72945),_=t(14829),k=t(6761),j=t(1071),b=t(85893);s.default=function(){var e,s,t,i=(0,m.aC)(),d=(0,a.Z)(i,2),w=d[0];d[1].isFetched;var E=(0,v.Hc)(),N=(0,a.Z)(E,1)[0],Z=null==w?void 0:null===(s=w.activeWorkspace)||void 0===s?void 0:s.slug,y=(0,_.c)({name:Z}),C=(y||{}).slug,P=(e=(0,n.Z)(r().mark(function _callee(e){var s;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(C){t.next=2;break}return t.abrupt("return");case 2:if(y){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,N({userId:e,workspace:C});case 6:console.log("joinedUser :>> ",null==(s=t.sent)?void 0:s.data);case 9:case"end":return t.stop()}},_callee)})),function(s){return e.apply(this,arguments)});return(0,h.useEffect)(function(){(0,l.isEmpty)(w)||P(w._id)},[w,y]),!(0,l.isEmpty)(w)&&(0,b.jsx)(k.o,{useSidebar:!1,meta:(0,b.jsx)(j.h,{title:"CLI Authentication",description:"Authenticate before using the CLI commands."}),children:(0,b.jsxs)(x.Z,{className:"max-w-md ",children:[(0,b.jsx)(f(),{href:"/",children:(0,b.jsx)(g.Z,{})}),(0,l.isEmpty)(y)?(0,b.jsx)(u.Z,{message:"Error",description:"This workspace does not exists.",type:"error",showIcon:!0}):(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("p",{children:"Copy & paste this ACCESS TOKEN into your command interface:"}),(0,b.jsx)(p.Z,{value:(0,l.isEmpty)(w)?"":null==w?void 0:null===(t=w.token)||void 0===t?void 0:t.access_token}),(0,b.jsx)(o.ZP,{size:"large",className:"mt-2",href:"/",icon:(0,b.jsx)(c.Z,{}),children:"Dashboard"})]})]})})}},14829:function(e,s,t){"use strict";t.d(s,{c:function(){return useWorkspace}});var n=t(16835),a=t(22598),useWorkspace=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=(0,a.aC)(),s=(0,n.Z)(e,1)[0];return null==s?void 0:s.activeWorkspace}},59762:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cli",function(){return t(28698)}])}},function(e){e.O(0,[3662,5877,3945,9774,2888,179],function(){return e(e.s=59762)}),_N_E=e.O()}]);