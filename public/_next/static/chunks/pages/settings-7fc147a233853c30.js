(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{6800:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(62747)}])},4514:function(e,t,n){"use strict";n.d(t,{Hg:function(){return l},av:function(){return s},hv:function(){return c}});var i=n(84886);let s=e=>(0,i.FF)(["workspaces"],"/api/v1/workspace",e),c=e=>(0,i.yt)(["workspaces"],"/api/v1/workspace",e),l=e=>(0,i.FF)(["workspaces","invite"],"/api/v1/workspace/invite",e)},62747:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(11527),s=n(18820),c=n(32352),l=n(65338),a=n(47749),r=n(64686);let o=()=>(0,i.jsx)(a.Z,{title:"Are you sure?",description:"This action cannot be undone.",placement:"bottomRight",children:(0,i.jsx)(r.ZP,{type:"default",danger:!0,icon:(0,i.jsx)(l.Z,{className:"align-middle"}),children:"Destroy"})});var d=n(73611),u=n(69786),p=n(31494),v=n(91273),h=n(50959),x=n(4514),j=n(2186);let k=()=>{let e=d.Z.useApp(),t=(0,j.c)(),[n,s]=(0,h.useState)(null==t?void 0:t.public),[c,l]=(0,x.hv)({filter:{_id:null==t?void 0:t._id}}),a=async n=>{let i=await c({public:n});(null==i?void 0:i.status)&&(s(n),e.notification.success({message:"Congrats!",description:'Made "'.concat(null==t?void 0:t.name,'" workspace ').concat(n?"PUBLIC":"PRIVATE"," successfully.")}))};return(0,i.jsxs)(u.Z,{direction:"horizontal",size:6,children:[(0,i.jsx)(p.Z.Title,{level:5,style:{marginBottom:0},children:"Public"}),(0,i.jsx)(v.Z,{checked:n,onChange:a,loading:"loading"===l})]})};var f=n(27899),w=n(56070),_=n(24695),m=n(74637),y=n.n(m),Z=n(85410),g=n(84886);let b=e=>(0,g.wz)(["users","list"],"/api/v1/api_key",e);var E=n(99657);let C=n(64814),N=n(54498);y().extend(N),y().extend(C);let P=()=>{var e;let t=(0,j.c)(),{data:{list:n=[]}={list:[]}}=b(),{data:s}=(0,Z.sc)();return(0,i.jsxs)("div",{className:"px-4 py-6",children:[(0,i.jsxs)(p.Z.Title,{children:[null==t?void 0:t.name," Workspace"]}),(0,i.jsx)(f.Z,{title:"DX_KEY",children:(0,i.jsx)("div",{children:(0,i.jsx)(E.Z,{mode:"inline",value:(null==t?void 0:t.dx_key)||""})},"dx-key")}),(0,i.jsx)(w.Z,{dashed:!0}),n.length>0&&(0,i.jsx)(_.Z,{dataSource:n,renderItem(e,t){let{name:n,email:s,token:{access_token:c}={access_token:""}}=e;return(0,i.jsx)(f.Z,{title:n,children:(0,i.jsx)("div",{children:(0,i.jsx)(E.Z,{type:"password",mode:"inline",value:c})},"api-key-".concat(c))})}}),(0,i.jsx)(w.Z,{dashed:!0}),(0,i.jsx)(f.Z,{title:"PUBLIC KEY",children:(0,i.jsx)("div",{children:(0,i.jsx)(E.Z,{mode:"inline",value:(null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.publicKey)||""})},"ssh-public-key")})]})};var T=n(46761),W=n(10769);let F=()=>(0,i.jsx)(s.Wk,{children:(0,i.jsxs)(T.o,{meta:(0,i.jsx)(W.h,{title:"Settings",description:"Workspace's configuration."}),children:[(0,i.jsx)(c.V,{title:"Workspace Settings",breadcrumbs:[{name:"Workspace"}],actions:[(0,i.jsx)(k,{},"workspace-privacy-switch"),(0,i.jsx)(o,{},"destroy-workspace-button")]}),(0,i.jsx)(P,{})]})});var I=F},2186:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var i=n(18820);let s=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let[e]=(0,i.aC)();return null==e?void 0:e.activeWorkspace}}},function(e){e.O(0,[8201,8564,2967,1003,9521,2982,5371,9774,2888,179],function(){return e(e.s=6800)}),_N_E=e.O()}]);