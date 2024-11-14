(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{58202:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return pages}});var n=s(11163),r=s(22598),l=s(16835),a=s(87547),i=s(71471),c=s(71230),o=s(15746),d=s(51423),u=s(67294),p=s(57838),m=s(96159),x=s(93967),f=s.n(x),v=s(64217),j=s(53124),b=s(48054),statistic_Number=e=>{let t;let{value:s,formatter:n,precision:r,decimalSeparator:l,groupSeparator:a="",prefixCls:i}=e;if("function"==typeof n)t=n(s);else{let e=String(s),n=e.match(/^(-?)(\d*)(\.(\d+))?$/);if(n&&"-"!==e){let e=n[1],s=n[2]||"0",c=n[4]||"";s=s.replace(/\B(?=(\d{3})+(?!\d))/g,a),"number"==typeof r&&(c=c.padEnd(r,"0").slice(0,r>0?r:0)),c&&(c=`${l}${c}`),t=[u.createElement("span",{key:"int",className:`${i}-content-value-int`},e,s),c&&u.createElement("span",{key:"decimal",className:`${i}-content-value-decimal`},c)]}else t=e}return u.createElement("span",{className:`${i}-content-value`},t)},h=s(14747),g=s(83559),S=s(83262);let genStatisticStyle=e=>{let{componentCls:t,marginXXS:s,padding:n,colorTextDescription:r,titleFontSize:l,colorTextHeading:a,contentFontSize:i,fontFamily:c}=e;return{[t]:Object.assign(Object.assign({},(0,h.Wf)(e)),{[`${t}-title`]:{marginBottom:s,color:r,fontSize:l},[`${t}-skeleton`]:{paddingTop:n},[`${t}-content`]:{color:a,fontSize:i,fontFamily:c,[`${t}-content-value`]:{display:"inline-block",direction:"ltr"},[`${t}-content-prefix, ${t}-content-suffix`]:{display:"inline-block"},[`${t}-content-prefix`]:{marginInlineEnd:s},[`${t}-content-suffix`]:{marginInlineStart:s}}})}};var _=(0,g.I$)("Statistic",e=>{let t=(0,S.mergeToken)(e,{});return[genStatisticStyle(t)]},e=>{let{fontSizeHeading3:t,fontSize:s}=e;return{titleFontSize:s,contentFontSize:t}}),__rest=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s},statistic_Statistic=e=>{let{prefixCls:t,className:s,rootClassName:n,style:r,valueStyle:l,value:a=0,title:i,valueRender:c,prefix:o,suffix:d,loading:p=!1,formatter:m,precision:x,decimalSeparator:h=".",groupSeparator:g=",",onMouseEnter:S,onMouseLeave:y}=e,Z=__rest(e,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:O,direction:w,statistic:E}=u.useContext(j.E_),$=O("statistic",t),[N,k,C]=_($),D=u.createElement(statistic_Number,{decimalSeparator:h,groupSeparator:g,prefixCls:$,formatter:m,precision:x,value:a}),T=f()($,{[`${$}-rtl`]:"rtl"===w},null==E?void 0:E.className,s,n,k,C),P=(0,v.Z)(Z,{aria:!0,data:!0});return N(u.createElement("div",Object.assign({},P,{className:T,style:Object.assign(Object.assign({},null==E?void 0:E.style),r),onMouseEnter:S,onMouseLeave:y}),i&&u.createElement("div",{className:`${$}-title`},i),u.createElement(b.Z,{paragraph:!1,loading:p,className:`${$}-skeleton`},u.createElement("div",{style:l,className:`${$}-content`},o&&u.createElement("span",{className:`${$}-content-prefix`},o),c?c(D):D,d&&u.createElement("span",{className:`${$}-content-suffix`},d)))))};let y=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];var Countdown_rest=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};let Z=1e3/30;var O=u.memo(e=>{let{value:t,format:s="HH:mm:ss",onChange:n,onFinish:r}=e,l=Countdown_rest(e,["value","format","onChange","onFinish"]),a=(0,p.Z)(),i=u.useRef(null),stopTimer=()=>{null==r||r(),i.current&&(clearInterval(i.current),i.current=null)},syncTimer=()=>{let e=new Date(t).getTime();e>=Date.now()&&(i.current=setInterval(()=>{a(),null==n||n(e-Date.now()),e<Date.now()&&stopTimer()},Z))};return u.useEffect(()=>(syncTimer(),()=>{i.current&&(clearInterval(i.current),i.current=null)}),[t]),u.createElement(statistic_Statistic,Object.assign({},l,{value:t,valueRender:e=>(0,m.Tm)(e,{title:void 0}),formatter:(e,t)=>(function(e,t){let{format:s=""}=t,n=new Date(e).getTime(),r=Date.now();return function(e,t){let s=e,n=/\[[^\]]*]/g,r=(t.match(n)||[]).map(e=>e.slice(1,-1)),l=t.replace(n,"[]"),a=y.reduce((e,t)=>{let[n,r]=t;if(e.includes(n)){let t=Math.floor(s/r);return s-=t*r,e.replace(RegExp(`${n}+`,"g"),e=>{let s=e.length;return t.toString().padStart(s,"0")})}return e},l),i=0;return a.replace(n,()=>{let e=r[i];return i+=1,e})}(Math.max(n-r,0),s)})(e,Object.assign(Object.assign({},t),{format:s}))}))});statistic_Statistic.Countdown=O;var w=s(44167),E=s(85893),Dashboard=function(){var e=(0,r.aC)(),t=((0,l.Z)(e,1)[0]||{}).activeWorkspace,s=((0,w.$)().data||{}).data;return(0,E.jsxs)("div",{className:"px-4 py-6",children:[(0,E.jsxs)(i.Z.Title,{level:1,children:[null==t?void 0:t.name," Workspace"]}),(0,E.jsxs)(c.Z,{gutter:[16,16],children:[(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{prefix:(0,E.jsx)(a.Z,{}),title:"Users",value:null==s?void 0:s.all.users})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Projects",value:null==s?void 0:s.all.projects})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Apps",value:null==s?void 0:s.all.apps})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Clusters",value:null==s?void 0:s.all.clusters})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Databases",value:null==s?void 0:s.all.databases})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Database backups",value:null==s?void 0:s.all.db_backups})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Gits",value:null==s?void 0:s.all.gits})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Container Registries",value:null==s?void 0:s.all.registries})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Frameworks",value:null==s?void 0:s.all.frameworks})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Builds",value:null==s?void 0:s.all.builds})})}),(0,E.jsx)(o.Z,{span:4,xs:12,md:6,children:(0,E.jsx)(d.Z,{bordered:!1,children:(0,E.jsx)(statistic_Statistic,{title:"Releases",value:null==s?void 0:s.all.releases})})})]})]})},$=s(6761),N=s(1071),pages=function(){return(0,n.useRouter)(),(0,E.jsx)(r.Wk,{children:(0,E.jsx)($.o,{meta:(0,E.jsx)(N.h,{title:"Dashboard",description:"Your workspace overview."}),children:(0,E.jsx)(Dashboard,{})})})}},48312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(58202)}])}},function(e){e.O(0,[3662,5877,3945,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);