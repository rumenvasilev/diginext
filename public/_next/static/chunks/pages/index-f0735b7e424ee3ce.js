(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{31888:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(86042)}])},86042:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return R}});var n=l(11527),s=l(39445),r=l(14367),a=l(3513),i=l(46457),c=l(87078),d=l(2401),o=l(476),u=l(84875),x=l.n(u),m=l(50959),p=l(94843),j=l(21971);let v=e=>{let t;let{value:l,formatter:n,precision:s,decimalSeparator:r,groupSeparator:a="",prefixCls:i}=e;if("function"==typeof n)t=n(l);else{let c=String(l),d=c.match(/^(-?)(\d*)(\.(\d+))?$/);if(d&&"-"!==c){let o=d[1],u=d[2]||"0",x=d[4]||"";u=u.replace(/\B(?=(\d{3})+(?!\d))/g,a),"number"==typeof s&&(x=x.padEnd(s,"0").slice(0,s>0?s:0)),x&&(x=`${r}${x}`),t=[m.createElement("span",{key:"int",className:`${i}-content-value-int`},o,u),x&&m.createElement("span",{key:"decimal",className:`${i}-content-value-decimal`},x)]}else t=c}return m.createElement("span",{className:`${i}-content-value`},t)};var f=l(81520),h=l(44362),b=l(6290);let Z=e=>{let{componentCls:t,marginXXS:l,padding:n,colorTextDescription:s,statisticTitleFontSize:r,colorTextHeading:a,statisticContentFontSize:i,statisticFontFamily:c}=e;return{[`${t}`]:Object.assign(Object.assign({},(0,b.Wf)(e)),{[`${t}-title`]:{marginBottom:l,color:s,fontSize:r},[`${t}-skeleton`]:{paddingTop:n},[`${t}-content`]:{color:a,fontSize:i,fontFamily:c,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:l},[`${t}-content-suffix`]:{marginInlineStart:l}}})}};var g=(0,f.Z)("Statistic",e=>{let{fontSizeHeading3:t,fontSize:l,fontFamily:n}=e,s=(0,h.TS)(e,{statisticTitleFontSize:l,statisticContentFontSize:t,statisticFontFamily:n});return[Z(s)]}),$=l(19920),E=l(40150);let k=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]],w=1e3/30,N=e=>{let{value:t,format:l="HH:mm:ss",onChange:n,onFinish:s}=e,r=(0,$.Z)(),a=m.useRef(null),i=()=>{null==s||s(),a.current&&(clearInterval(a.current),a.current=null)},c=()=>{let e=new Date(t).getTime();e>=Date.now()&&(a.current=setInterval(()=>{r(),null==n||n(e-Date.now()),e<Date.now()&&i()},w))};m.useEffect(()=>(c(),()=>{a.current&&(clearInterval(a.current),a.current=null)}),[t]);let d=(e,t)=>(function(e,t){let{format:l=""}=t,n=new Date(e).getTime(),s=Date.now();return function(e,t){let l=e,n=/\[[^\]]*]/g,s=(t.match(n)||[]).map(e=>e.slice(1,-1)),r=t.replace(n,"[]"),a=k.reduce((e,t)=>{let[n,s]=t;if(e.includes(n)){let r=Math.floor(l/s);return l-=r*s,e.replace(RegExp(`${n}+`,"g"),e=>{let t=e.length;return r.toString().padStart(t,"0")})}return e},r),i=0;return a.replace(n,()=>{let e=s[i];return i+=1,e})}(Math.max(n-s,0),l)})(e,Object.assign(Object.assign({},t),{format:l})),o=e=>(0,E.Tm)(e,{title:void 0});return m.createElement(y,Object.assign({},e,{valueRender:o,formatter:d}))};var _=m.memo(N);let S=e=>{let{prefixCls:t,className:l,rootClassName:n,style:s,valueStyle:r,value:a=0,title:i,valueRender:c,prefix:d,suffix:o,loading:u=!1,onMouseEnter:f,onMouseLeave:h,decimalSeparator:b=".",groupSeparator:Z=","}=e,{getPrefixCls:$,direction:E}=m.useContext(p.E_),k=$("statistic",t),[w,N]=g(k),_=m.createElement(v,Object.assign({decimalSeparator:b,groupSeparator:Z,prefixCls:k},e,{value:a})),S=x()(k,{[`${k}-rtl`]:"rtl"===E},l,n,N);return w(m.createElement("div",{className:S,style:s,onMouseEnter:f,onMouseLeave:h},i&&m.createElement("div",{className:`${k}-title`},i),m.createElement(j.Z,{paragraph:!1,loading:u,className:`${k}-skeleton`},m.createElement("div",{style:r,className:`${k}-content`},d&&m.createElement("span",{className:`${k}-content-prefix`},d),c?c(_):_,o&&m.createElement("span",{className:`${k}-content-suffix`},o)))))};S.Countdown=_;var y=S,C=l(96714);let D=()=>{let[e]=(0,r.aC)(),{activeWorkspace:t}=e||{},{data:l}=(0,C.$)(),{data:s}=l||{};return(0,n.jsxs)("div",{className:"px-4 py-6",children:[(0,n.jsxs)(i.Z.Title,{level:1,children:[null==t?void 0:t.name," Workspace"]}),(0,n.jsxs)(c.Z,{gutter:[16,16],children:[(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{prefix:(0,n.jsx)(a.Z,{}),title:"Users",value:null==s?void 0:s.all.users})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Projects",value:null==s?void 0:s.all.projects})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Apps",value:null==s?void 0:s.all.apps})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Clusters",value:null==s?void 0:s.all.clusters})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Databases",value:null==s?void 0:s.all.databases})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Database backups",value:null==s?void 0:s.all.db_backups})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Gits",value:null==s?void 0:s.all.gits})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Container Registries",value:null==s?void 0:s.all.registries})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Frameworks",value:null==s?void 0:s.all.frameworks})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Builds",value:null==s?void 0:s.all.builds})})}),(0,n.jsx)(d.Z,{span:4,xs:12,md:6,children:(0,n.jsx)(o.Z,{bordered:!1,children:(0,n.jsx)(y,{title:"Releases",value:null==s?void 0:s.all.releases})})})]})]})};var T=l(1242),O=l(77736);let F=()=>((0,s.useRouter)(),(0,n.jsx)(r.Wk,{children:(0,n.jsx)(T.o,{meta:(0,n.jsx)(O.h,{title:"Dashboard",description:"Your workspace overview."}),children:(0,n.jsx)(D,{})})}));var R=F}},function(e){e.O(0,[8201,2967,5108,8874,9774,2888,179],function(){return e(e.s=31888)}),_N_E=e.O()}]);