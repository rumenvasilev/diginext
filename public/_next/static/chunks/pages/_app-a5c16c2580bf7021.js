(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{71877:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(54634)}])},54634:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return w}});var n=i(11527);i(73147),i(30460);var s=i(64306),r=i(96677),a=i(41293),u=i(80217),o=i(79237);class l extends o.F{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||r._,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,n=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){let i=(0,s.oE)(this.state.data,t,this.options);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=this.promise;return null==(e=this.retryer)||e.cancel(t),i?i.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){-1!==this.observers.indexOf(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var i,n,r,a;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(r=this.retryer)||r.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let o=this.observers.find(t=>t.options.queryFn);o&&this.setOptions(o.options)}Array.isArray(this.options.queryKey);let l=(0,s.G9)(),h={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},c=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(l)return this.abortSignalConsumed=!0,l.signal}})};c(h);let d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(h)):Promise.reject("Missing queryFn"),f={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:d};c(f),null==(i=this.options.behavior)||i.onFetch(f),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(n=f.fetchOptions)?void 0:n.meta))&&this.dispatch({type:"fetch",meta:null==(a=f.fetchOptions)?void 0:a.meta});let p=t=>{if((0,u.DV)(t)&&t.silent||this.dispatch({type:"error",error:t}),!(0,u.DV)(t)){var e,i;null==(e=(i=this.cache.config).onError)||e.call(i,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,u.Mz)({fn:f.fetchFn,abort:null==l?void 0:l.abort.bind(l),onSuccess:t=>{var e,i;if(void 0===t){p(Error("undefined"));return}this.setData(t),null==(e=(i=this.cache.config).onSuccess)||e.call(i,t,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:p,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var i,n;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=t.meta)?i:null,fetchStatus:(0,u.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(n=t.dataUpdatedAt)?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,u.DV)(s)&&s.revert&&this.revertState)return{...this.revertState};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),a.V.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}var h=i(34309);class c extends h.l{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,i){var n;let r=e.queryKey,a=null!=(n=e.queryHash)?n:(0,s.Rm)(r,e),u=this.get(a);return u||(u=new l({cache:this,logger:t.getLogger(),queryKey:r,queryHash:a,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(r)}),this.add(u)),u}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(e=>e!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){a.V.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){let[i]=(0,s.I6)(t,e);return void 0===i.exact&&(i.exact=!0),this.queries.find(t=>(0,s._x)(i,t))}findAll(t,e){let[i]=(0,s.I6)(t,e);return Object.keys(i).length>0?this.queries.filter(t=>(0,s._x)(i,t)):this.queries}notify(t){a.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){a.V.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){a.V.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}var d=i(3265);class f extends h.l{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,i){let n=new d.m({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:i,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(n),n}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){a.V.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(e=>(0,s.X7)(t,e))}findAll(t){return this.mutations.filter(e=>(0,s.X7)(t,e))}notify(t){a.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.mutations.filter(t=>t.state.isPaused);return a.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(s.ZT)),Promise.resolve()))}}var p=i(29844),y=i(53142);function v(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}var m=i(50103);let b=function(){return null},g=new class{constructor(t={}){this.queryCache=t.queryCache||new c,this.mutationCache=t.mutationCache||new f,this.logger=t.logger||r._,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}mount(){this.unsubscribeFocus=p.j.subscribe(()=>{p.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=y.N.subscribe(()=>{y.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())})}unmount(){var t,e;null==(t=this.unsubscribeFocus)||t.call(this),null==(e=this.unsubscribeOnline)||e.call(this)}isFetching(t,e){let[i]=(0,s.I6)(t,e);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state.data}ensureQueryData(t,e,i){let n=(0,s._v)(t,e,i),r=this.getQueryData(n.queryKey);return r?Promise.resolve(r):this.fetchQuery(n)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let i=e.data;return[t,i]})}setQueryData(t,e,i){let n=this.queryCache.find(t),r=null==n?void 0:n.state.data,a=(0,s.SE)(e,r);if(void 0===a)return;let u=(0,s._v)(t),o=this.defaultQueryOptions(u);return this.queryCache.build(this,o).setData(a,{...i,manual:!0})}setQueriesData(t,e,i){return a.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state}removeQueries(t,e){let[i]=(0,s.I6)(t,e),n=this.queryCache;a.V.batch(()=>{n.findAll(i).forEach(t=>{n.remove(t)})})}resetQueries(t,e,i){let[n,r]=(0,s.I6)(t,e,i),u=this.queryCache,o={type:"active",...n};return a.V.batch(()=>(u.findAll(n).forEach(t=>{t.reset()}),this.refetchQueries(o,r)))}cancelQueries(t,e,i){let[n,r={}]=(0,s.I6)(t,e,i);void 0===r.revert&&(r.revert=!0);let u=a.V.batch(()=>this.queryCache.findAll(n).map(t=>t.cancel(r)));return Promise.all(u).then(s.ZT).catch(s.ZT)}invalidateQueries(t,e,i){let[n,r]=(0,s.I6)(t,e,i);return a.V.batch(()=>{var t,e;if(this.queryCache.findAll(n).forEach(t=>{t.invalidate()}),"none"===n.refetchType)return Promise.resolve();let i={...n,type:null!=(t=null!=(e=n.refetchType)?e:n.type)?t:"active"};return this.refetchQueries(i,r)})}refetchQueries(t,e,i){let[n,r]=(0,s.I6)(t,e,i),u=a.V.batch(()=>this.queryCache.findAll(n).filter(t=>!t.isDisabled()).map(t=>{var e;return t.fetch(void 0,{...r,cancelRefetch:null==(e=null==r?void 0:r.cancelRefetch)||e,meta:{refetchPage:n.refetchPage}})})),o=Promise.all(u).then(s.ZT);return null!=r&&r.throwOnError||(o=o.catch(s.ZT)),o}fetchQuery(t,e,i){let n=(0,s._v)(t,e,i),r=this.defaultQueryOptions(n);void 0===r.retry&&(r.retry=!1);let a=this.queryCache.build(this,r);return a.isStaleByTime(r.staleTime)?a.fetch(r):Promise.resolve(a.state.data)}prefetchQuery(t,e,i){return this.fetchQuery(t,e,i).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(t,e,i){let n=(0,s._v)(t,e,i);return n.behavior={onFetch(t){t.fetchFn=()=>{var e,i,n,s,r,a,u;let o;let l=null==(e=t.fetchOptions)?void 0:null==(i=e.meta)?void 0:i.refetchPage,h=null==(n=t.fetchOptions)?void 0:null==(s=n.meta)?void 0:s.fetchMore,c=null==h?void 0:h.pageParam,d=(null==h?void 0:h.direction)==="forward",f=(null==h?void 0:h.direction)==="backward",p=(null==(r=t.state.data)?void 0:r.pages)||[],y=(null==(a=t.state.data)?void 0:a.pageParams)||[],m=y,b=!1,g=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get(){var e,i;return null!=(e=t.signal)&&e.aborted?b=!0:null==(i=t.signal)||i.addEventListener("abort",()=>{b=!0}),t.signal}})},C=t.options.queryFn||(()=>Promise.reject("Missing queryFn")),w=(t,e,i,n)=>(m=n?[e,...m]:[...m,e],n?[i,...t]:[...t,i]),q=(e,i,n,s)=>{if(b)return Promise.reject("Cancelled");if(void 0===n&&!i&&e.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:n,meta:t.options.meta};g(r);let a=C(r),u=Promise.resolve(a).then(t=>w(e,n,t,s));return u};if(p.length){if(d){let O=void 0!==c,P=O?c:v(t.options,p);o=q(p,O,P)}else if(f){let F=void 0!==c,S=F?c:null==(u=t.options).getPreviousPageParam?void 0:u.getPreviousPageParam(p[0],p);o=q(p,F,S,!0)}else{m=[];let E=void 0===t.options.getNextPageParam,D=!l||!p[0]||l(p[0],0,p);o=D?q([],E,y[0]):Promise.resolve(w([],y[0],p[0]));for(let A=1;A<p.length;A++)o=o.then(e=>{let i=!l||!p[A]||l(p[A],A,p);if(i){let n=E?y[A]:v(t.options,e);return q(e,E,n)}return Promise.resolve(w(e,y[A],p[A]))})}}else o=q([]);let x=o.then(t=>({pages:t,pageParams:m}));return x}}},this.fetchQuery(n)}prefetchInfiniteQuery(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){let i=this.queryDefaults.find(e=>(0,s.yF)(t)===(0,s.yF)(e.queryKey));i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;let e=this.queryDefaults.find(e=>(0,s.to)(t,e.queryKey));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){let i=this.mutationDefaults.find(e=>(0,s.yF)(t)===(0,s.yF)(e.mutationKey));i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;let e=this.mutationDefaults.find(e=>(0,s.to)(t,e.mutationKey));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=(0,s.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}},C=t=>{let{Component:e,pageProps:i}=t;return(0,n.jsxs)(m.aH,{client:g,children:[(0,n.jsx)(e,{...i}),(0,n.jsx)(b,{initialIsOpen:!1})]})};var w=C},73147:function(){},30460:function(){},29844:function(t,e,i){"use strict";i.d(e,{j:function(){return a}});var n=i(34309),s=i(64306);class r extends n.l{constructor(){super(),this.setup=t=>{if(!s.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let a=new r},96677:function(t,e,i){"use strict";i.d(e,{_:function(){return n}});let n=console},3265:function(t,e,i){"use strict";i.d(e,{R:function(){return o},m:function(){return u}});var n=i(96677),s=i(41293),r=i(79237),a=i(80217);class u extends r.F{constructor(t){super(),this.options={...t.defaultOptions,...t.options},this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||n._,this.observers=[],this.state=t.state||o(),this.updateCacheTime(this.options.cacheTime),this.scheduleGc()}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}async execute(){var t,e,i,n,s,r,u,o,l,h,c,d,f,p,y,v;let m="loading"===this.state.status;try{if(!m){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(u=(o=this.mutationCache.config).onMutate)?void 0:u.call(o,this.state.variables,this));let b=await (null==(l=(h=this.options).onMutate)?void 0:l.call(h,this.state.variables));b!==this.state.context&&this.dispatch({type:"loading",context:b,variables:this.state.variables})}let g=await (()=>{var t;return this.retryer=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,g,this.state.variables,this.state.context,this)),await (null==(i=(n=this.options).onSuccess)?void 0:i.call(n,g,this.state.variables,this.state.context)),await (null==(s=(r=this.options).onSettled)?void 0:s.call(r,g,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:g}),g}catch(C){try{throw await (null==(c=(d=this.mutationCache.config).onError)?void 0:c.call(d,C,this.state.variables,this.state.context,this)),await (null==(f=(p=this.options).onError)?void 0:f.call(p,C,this.state.variables,this.state.context)),await (null==(y=(v=this.options).onSettled)?void 0:y.call(v,void 0,C,this.state.variables,this.state.context)),C}finally{this.dispatch({type:"error",error:C})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),s.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},41293:function(t,e,i){"use strict";i.d(e,{V:function(){return s}});var n=i(64306);let s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},r=t=>{let i;e++;try{i=t()}finally{--e||o()}return i},a=s=>{e?t.push(s):(0,n.A4)(()=>{i(s)})},u=t=>(...e)=>{a(()=>{t(...e)})},o=()=>{let e=t;t=[],e.length&&(0,n.A4)(()=>{s(()=>{e.forEach(t=>{i(t)})})})},l=t=>{i=t},h=t=>{s=t};return{batch:r,batchCalls:u,schedule:a,setNotifyFunction:l,setBatchNotifyFunction:h}}()},53142:function(t,e,i){"use strict";i.d(e,{N:function(){return a}});var n=i(34309),s=i(64306);class r extends n.l{constructor(){super(),this.setup=t=>{if(!s.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("online",e,!1),window.addEventListener("offline",e,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setOnline(t):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let a=new r},79237:function(t,e,i){"use strict";i.d(e,{F:function(){return s}});var n=i(64306);class s{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,n.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:n.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},80217:function(t,e,i){"use strict";i.d(e,{DV:function(){return l},Kw:function(){return u},Mz:function(){return h}});var n=i(29844),s=i(53142),r=i(64306);function a(t){return Math.min(1e3*2**t,3e4)}function u(t){return(null!=t?t:"online")!=="online"||s.N.isOnline()}class o{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}}function l(t){return t instanceof o}function h(t){let e,i,l,h=!1,c=0,d=!1,f=new Promise((t,e)=>{i=t,l=e}),p=e=>{d||(g(new o(e)),null==t.abort||t.abort())},y=()=>{h=!0},v=()=>{h=!1},m=()=>!n.j.isFocused()||"always"!==t.networkMode&&!s.N.isOnline(),b=n=>{d||(d=!0,null==t.onSuccess||t.onSuccess(n),null==e||e(),i(n))},g=i=>{d||(d=!0,null==t.onError||t.onError(i),null==e||e(),l(i))},C=()=>new Promise(i=>{e=t=>{if(d||!m())return i(t)},null==t.onPause||t.onPause()}).then(()=>{e=void 0,d||null==t.onContinue||t.onContinue()}),w=()=>{let e;if(!d){try{e=t.fn()}catch(i){e=Promise.reject(i)}Promise.resolve(e).then(b).catch(e=>{var i,n;if(d)return;let s=null!=(i=t.retry)?i:3,u=null!=(n=t.retryDelay)?n:a,o="function"==typeof u?u(c,e):u,l=!0===s||"number"==typeof s&&c<s||"function"==typeof s&&s(c,e);if(h||!l){g(e);return}c++,null==t.onFail||t.onFail(c,e),(0,r.Gh)(o).then(()=>{if(m())return C()}).then(()=>{h?g(e):w()})})}};return u(t.networkMode)?w():C().then(w),{promise:f,cancel:p,continue(){null==e||e()},cancelRetry:y,continueRetry:v}}},34309:function(t,e,i){"use strict";i.d(e,{l:function(){return n}});class n{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(e=>e!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},64306:function(t,e,i){"use strict";i.d(e,{A4:function(){return O},G9:function(){return P},Gh:function(){return q},I6:function(){return h},Kp:function(){return u},PN:function(){return a},Rm:function(){return f},SE:function(){return r},VS:function(){return m},X7:function(){return d},ZT:function(){return s},_v:function(){return o},_x:function(){return c},lV:function(){return l},oE:function(){return F},sk:function(){return n},to:function(){return y},yF:function(){return p}});let n="undefined"==typeof window||"Deno"in window;function s(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function u(t,e){return Math.max(t+(e||0)-Date.now(),0)}function o(t,e,i){return w(t)?"function"==typeof e?{...i,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function l(t,e,i){return w(t)?"function"==typeof e?{...i,mutationKey:t,mutationFn:e}:{...e,mutationKey:t}:"function"==typeof t?{...e,mutationFn:t}:{...t}}function h(t,e,i){return w(t)?[{...e,queryKey:t},i]:[t||{},e]}function c(t,e){let{type:i="all",exact:n,fetchStatus:s,predicate:r,queryKey:a,stale:u}=t;if(w(a)){if(n){if(e.queryHash!==f(a,e.options))return!1}else{if(!v(e.queryKey,a))return!1}}if("all"!==i){let o=e.isActive();if("active"===i&&!o||"inactive"===i&&o)return!1}return("boolean"!=typeof u||e.isStale()===u)&&(void 0===s||s===e.state.fetchStatus)&&(!r||!!r(e))}function d(t,e){let{exact:i,fetching:n,predicate:s,mutationKey:r}=t;if(w(r)){if(!e.options.mutationKey)return!1;if(i){if(p(e.options.mutationKey)!==p(r))return!1}else{if(!v(e.options.mutationKey,r))return!1}}return("boolean"!=typeof n||"loading"===e.state.status===n)&&(!s||!!s(e))}function f(t,e){let i=(null==e?void 0:e.queryKeyHashFn)||p;return i(t)}function p(t){return JSON.stringify(t,(t,e)=>g(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function y(t,e){return v(t,e)}function v(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!v(t[i],e[i]))}function m(t,e){if(t&&!e||e&&!t)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function b(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function g(t){if(!C(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(C(i)&&i.hasOwnProperty("isPrototypeOf"))}function C(t){return"[object Object]"===Object.prototype.toString.call(t)}function w(t){return Array.isArray(t)}function q(t){return new Promise(e=>{setTimeout(e,t)})}function O(t){q(0).then(t)}function P(){if("function"==typeof AbortController)return new AbortController}function F(t,e,i){return null!=i.isDataEqual&&i.isDataEqual(t,e)?t:"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let n=b(e)&&b(i);if(n||g(e)&&g(i)){let s=n?e.length:Object.keys(e).length,r=n?i:Object.keys(i),a=r.length,u=n?[]:{},o=0;for(let l=0;l<a;l++){let h=n?l:r[l];u[h]=t(e[h],i[h]),u[h]===e[h]&&o++}return s===a&&o===s?e:u}return i}(t,e):e}},50103:function(t,e,i){"use strict";i.d(e,{NL:function(){return u},aH:function(){return o}});var n=i(50959);let s=n.createContext(void 0),r=n.createContext(!1);function a(t,e){return t||(e&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=s),window.ReactQueryClientContext):s)}let u=({context:t}={})=>{let e=n.useContext(a(t,n.useContext(r)));if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=({client:t,children:e,context:i,contextSharing:s=!1})=>{n.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);let u=a(i,s);return n.createElement(r.Provider,{value:!i&&s},n.createElement(u.Provider,{value:t},e))}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[9774,179],function(){return e(71877),e(62604)}),_N_E=t.O()}]);