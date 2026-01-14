(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ol(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vh={exports:{}},Ho={};var s_;function Iy(){if(s_)return Ho;s_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var o_;function By(){return o_||(o_=1,vh.exports=Iy()),vh.exports}var ve=By(),xh={exports:{}},rt={};var l_;function Hy(){if(l_)return rt;l_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function S(U,$,pe){this.props=U,this.context=$,this.refs=M,this.updater=pe||b}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=S.prototype;function P(U,$,pe){this.props=U,this.context=$,this.refs=M,this.updater=pe||b}var N=P.prototype=new O;N.constructor=P,A(N,S.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function I(){}var D={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function T(U,$,pe){var Ae=pe.ref;return{$$typeof:s,type:U,key:$,ref:Ae!==void 0?Ae:null,props:pe}}function w(U,$){return T(U.type,$,U.props)}function H(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function K(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(pe){return $[pe]})}var Q=/\/+/g;function le(U,$){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):$.toString(36)}function ce(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,$,pe,Ae,Be){var ae=typeof U;(ae==="undefined"||ae==="boolean")&&(U=null);var fe=!1;if(U===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(U.$$typeof){case s:case e:fe=!0;break;case _:return fe=U._init,F(fe(U._payload),$,pe,Ae,Be)}}if(fe)return Be=Be(U),fe=Ae===""?"."+le(U,0):Ae,z(Be)?(pe="",fe!=null&&(pe=fe.replace(Q,"$&/")+"/"),F(Be,$,pe,"",function(He){return He})):Be!=null&&(H(Be)&&(Be=w(Be,pe+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(Q,"$&/")+"/")+fe)),$.push(Be)),1;fe=0;var De=Ae===""?".":Ae+":";if(z(U))for(var ke=0;ke<U.length;ke++)Ae=U[ke],ae=De+le(Ae,ke),fe+=F(Ae,$,pe,ae,Be);else if(ke=y(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Ae=U.next()).done;)Ae=Ae.value,ae=De+le(Ae,ke++),fe+=F(Ae,$,pe,ae,Be);else if(ae==="object"){if(typeof U.then=="function")return F(ce(U),$,pe,Ae,Be);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return fe}function V(U,$,pe){if(U==null)return U;var Ae=[],Be=0;return F(U,Ae,"","",function(ae){return $.call(pe,ae,Be++)}),Ae}function te(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(pe){(U._status===0||U._status===-1)&&(U._status=1,U._result=pe)},function(pe){(U._status===0||U._status===-1)&&(U._status=2,U._result=pe)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var ye=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:V,forEach:function(U,$,pe){V(U,function(){$.apply(this,arguments)},pe)},count:function(U){var $=0;return V(U,function(){$++}),$},toArray:function(U){return V(U,function($){return $})||[]},only:function(U){if(!H(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=g,rt.Children=Se,rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=P,rt.StrictMode=a,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return D.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,$,pe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=A({},U.props),Be=U.key;if($!=null)for(ae in $.key!==void 0&&(Be=""+$.key),$)!Y.call($,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&$.ref===void 0||(Ae[ae]=$[ae]);var ae=arguments.length-2;if(ae===1)Ae.children=pe;else if(1<ae){for(var fe=Array(ae),De=0;De<ae;De++)fe[De]=arguments[De+2];Ae.children=fe}return T(U.type,Be,Ae)},rt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},rt.createElement=function(U,$,pe){var Ae,Be={},ae=null;if($!=null)for(Ae in $.key!==void 0&&(ae=""+$.key),$)Y.call($,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=$[Ae]);var fe=arguments.length-2;if(fe===1)Be.children=pe;else if(1<fe){for(var De=Array(fe),ke=0;ke<fe;ke++)De[ke]=arguments[ke+2];Be.children=De}if(U&&U.defaultProps)for(Ae in fe=U.defaultProps,fe)Be[Ae]===void 0&&(Be[Ae]=fe[Ae]);return T(U,ae,Be)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:h,render:U}},rt.isValidElement=H,rt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:te}},rt.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},rt.startTransition=function(U){var $=D.T,pe={};D.T=pe;try{var Ae=U(),Be=D.S;Be!==null&&Be(pe,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(I,ye)}catch(ae){ye(ae)}finally{$!==null&&pe.types!==null&&($.types=pe.types),D.T=$}},rt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},rt.use=function(U){return D.H.use(U)},rt.useActionState=function(U,$,pe){return D.H.useActionState(U,$,pe)},rt.useCallback=function(U,$){return D.H.useCallback(U,$)},rt.useContext=function(U){return D.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,$){return D.H.useDeferredValue(U,$)},rt.useEffect=function(U,$){return D.H.useEffect(U,$)},rt.useEffectEvent=function(U){return D.H.useEffectEvent(U)},rt.useId=function(){return D.H.useId()},rt.useImperativeHandle=function(U,$,pe){return D.H.useImperativeHandle(U,$,pe)},rt.useInsertionEffect=function(U,$){return D.H.useInsertionEffect(U,$)},rt.useLayoutEffect=function(U,$){return D.H.useLayoutEffect(U,$)},rt.useMemo=function(U,$){return D.H.useMemo(U,$)},rt.useOptimistic=function(U,$){return D.H.useOptimistic(U,$)},rt.useReducer=function(U,$,pe){return D.H.useReducer(U,$,pe)},rt.useRef=function(U){return D.H.useRef(U)},rt.useState=function(U){return D.H.useState(U)},rt.useSyncExternalStore=function(U,$,pe){return D.H.useSyncExternalStore(U,$,pe)},rt.useTransition=function(){return D.H.useTransition()},rt.version="19.2.3",rt}var c_;function lu(){return c_||(c_=1,xh.exports=Hy()),xh.exports}var dt=lu();const On=ol(dt);var Sh={exports:{}},Vo={},yh={exports:{}},Mh={};var u_;function Vy(){return u_||(u_=1,(function(s){function e(F,V){var te=F.length;F.push(V);e:for(;0<te;){var ye=te-1>>>1,Se=F[ye];if(0<l(Se,V))F[ye]=V,F[te]=Se,te=ye;else break e}}function i(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var V=F[0],te=F.pop();if(te!==V){F[0]=te;e:for(var ye=0,Se=F.length,U=Se>>>1;ye<U;){var $=2*(ye+1)-1,pe=F[$],Ae=$+1,Be=F[Ae];if(0>l(pe,te))Ae<Se&&0>l(Be,pe)?(F[ye]=Be,F[Ae]=te,ye=Ae):(F[ye]=pe,F[$]=te,ye=$);else if(Ae<Se&&0>l(Be,te))F[ye]=Be,F[Ae]=te,ye=Ae;else break e}}return V}function l(F,V){var te=F.sortIndex-V.sortIndex;return te!==0?te:F.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,v=3,y=!1,b=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var V=i(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=F)a(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function z(F){if(A=!1,N(F),!b)if(i(m)!==null)b=!0,I||(I=!0,K());else{var V=i(p);V!==null&&ce(z,V.startTime-F)}}var I=!1,D=-1,Y=5,T=-1;function w(){return M?!0:!(s.unstable_now()-T<Y)}function H(){if(M=!1,I){var F=s.unstable_now();T=F;var V=!0;try{e:{b=!1,A&&(A=!1,O(D),D=-1),y=!0;var te=v;try{t:{for(N(F),g=i(m);g!==null&&!(g.expirationTime>F&&w());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,v=g.priorityLevel;var Se=ye(g.expirationTime<=F);if(F=s.unstable_now(),typeof Se=="function"){g.callback=Se,N(F),V=!0;break t}g===i(m)&&a(m),N(F)}else a(m);g=i(m)}if(g!==null)V=!0;else{var U=i(p);U!==null&&ce(z,U.startTime-F),V=!1}}break e}finally{g=null,v=te,y=!1}V=void 0}}finally{V?K():I=!1}}}var K;if(typeof P=="function")K=function(){P(H)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,le=Q.port2;Q.port1.onmessage=H,K=function(){le.postMessage(null)}}else K=function(){S(H,0)};function ce(F,V){D=S(function(){F(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(F){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var te=v;v=V;try{return F()}finally{v=te}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=v;v=F;try{return V()}finally{v=te}},s.unstable_scheduleCallback=function(F,V,te){var ye=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ye+te:ye):te=ye,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,F={id:_++,callback:V,priorityLevel:F,startTime:te,expirationTime:Se,sortIndex:-1},te>ye?(F.sortIndex=te,e(p,F),i(m)===null&&F===i(p)&&(A?(O(D),D=-1):A=!0,ce(z,te-ye))):(F.sortIndex=Se,e(m,F),b||y||(b=!0,I||(I=!0,K()))),F},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(F){var V=v;return function(){var te=v;v=V;try{return F.apply(this,arguments)}finally{v=te}}}})(Mh)),Mh}var f_;function Gy(){return f_||(f_=1,yh.exports=Vy()),yh.exports}var Eh={exports:{}},Un={};var h_;function ky(){if(h_)return Un;h_=1;var s=lu();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Un.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Un.requestFormReset=function(m){a.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var d_;function Xy(){if(d_)return Eh.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eh.exports=ky(),Eh.exports}var p_;function qy(){if(p_)return Vo;p_=1;var s=Gy(),e=lu(),i=Xy();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=d;else{for(var x=!1,R=u.child;R;){if(R===r){x=!0,r=u,o=d;break}if(R===o){x=!0,o=u,r=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===r){x=!0,r=d,o=u;break}if(R===o){x=!0,o=d,r=u;break}R=R.sibling}if(!x)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return n=t.displayName||null,n!==null?n:le(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return le(t(n))}catch{}}return null}var ce=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function U(t){return{current:t}}function $(t){0>Se||(t.current=ye[Se],ye[Se]=null,Se--)}function pe(t,n){Se++,ye[Se]=t.current,t.current=n}var Ae=U(null),Be=U(null),ae=U(null),fe=U(null);function De(t,n){switch(pe(ae,n),pe(Be,t),pe(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?w0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=w0(n),t=D0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Ae),pe(Ae,t)}function ke(){$(Ae),$(Be),$(ae)}function He(t){t.memoizedState!==null&&pe(fe,t);var n=Ae.current,r=D0(n,t.type);n!==r&&(pe(Be,t),pe(Ae,r))}function pt(t){Be.current===t&&($(Ae),$(Be)),fe.current===t&&($(fe),Fo._currentValue=te)}var Jt,vt;function mt(t){if(Jt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",vt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+vt}var wt=!1;function ot(t,n){if(!t||wt)return"";wt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(oe){var ie=oe}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(oe){ie=oe}t.call(ge.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var B=x.split(`
`),ee=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var he=`
`+B[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?mt(r):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return mt("Activity");default:return""}}function G(t){try{var n="",r=null;do n+=$t(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Kt=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,Nt=s.unstable_cancelCallback,je=s.unstable_shouldYield,L=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,de=s.unstable_ImmediatePriority,xe=s.unstable_UserBlockingPriority,ue=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,Xe=s.log,tt=s.unstable_setDisableYieldValue,Ee=null,be=null;function ze(t){if(typeof Xe=="function"&&tt(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ee,t)}catch{}}var Pe=Math.clz32?Math.clz32:X,we=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(we(t)/ct|0)|0}var Le=256,Te=262144,Fe=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Me(o):(x&=R,x!==0?u=Me(x):r||(r=R&~t,r!==0&&(u=Me(r))))):(R=o&~d,R!==0?u=Me(R):x!==0?u=Me(x):r||(r=o&~t,r!==0&&(u=Me(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function nt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function bt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,r,o,u,d){var x=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(r=x&~r;0<r;){var he=31-Pe(r),ge=1<<he;R[he]=0,B[he]=-1;var ie=ee[he];if(ie!==null)for(ee[he]=null,he=0;he<ie.length;he++){var oe=ie[he];oe!==null&&(oe.lane&=-536870913)}r&=~ge}o!==0&&dl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function dl(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function js(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Pe(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function zr(t,n){var r=n&-n;return r=(r&42)!==0?1:Ys(r),(r&(t.suspendedLanes|n))!==0?0:r}function Ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:$0(t.type))}function Li(t,n){var r=V.p;try{return V.p=t,n()}finally{V.p=r}}var ai=Math.random().toString(36).slice(2),sn="__reactFiber$"+ai,xn="__reactProps$"+ai,xi="__reactContainer$"+ai,Br="__reactEvents$"+ai,Hr="__reactListeners$"+ai,pl="__reactHandles$"+ai,Zs="__reactResources$"+ai,sr="__reactMarker$"+ai;function Qs(t){delete t[sn],delete t[xn],delete t[Br],delete t[Hr],delete t[pl]}function Ta(t){var n=t[sn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[xi]||r[sn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=z0(t);t!==null;){if(r=t[sn])return r;t=z0(t)}return n}t=r,r=t.parentNode}return null}function Aa(t){if(t=t[sn]||t[xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function or(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Ra(t){var n=t[Zs];return n||(n=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[sr]=!0}var W=new Set,se={};function ne(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(se[t]=n,t=0;t<n.length;t++)W.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Ne={};function Ve(t){return Kt.call(Ne,t)?!0:Kt.call(Ie,t)?!1:Ue.test(t)?Ne[t]=!0:(Ie[t]=!0,!1)}function qe(t,n,r){if(Ve(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Je(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function We(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Dt(t)?"checked":"value";t._valueTracker=Zt(t,n,""+t[n])}}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Ze(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ut=/[\n"\\]/g;function at(t){return t.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,r,o,u,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yn(t,x,$e(n)):r!=null?yn(t,x,$e(r)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function ji(t,n,r,o,u,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Wt(t);return}r=r!=null?""+$e(r):"",n=n!=null?""+$e(n):r,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Wt(t)}function yn(t,n,r){n==="number"&&Ze(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function ri(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+$e(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,r){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+$e(r):""}function Mn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(ce(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=$e(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Wt(t)}function dn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||En.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Vr(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&bn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&bn(t,d,n[d])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Px.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gr=null,kr=null;function Cp(t){var n=Aa(t);if(n&&(t=n.stateNode)){var r=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(a(90));Sn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Ot(o)}break e;case"textarea":Ft(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&ri(t,!!r.multiple,n,!1)}}}var gu=!1;function wp(t,n,r){if(gu)return t(n,r);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(Gr!==null||kr!==null)&&(nc(),Gr&&(n=Gr,t=kr,kr=Gr=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function Js(t,n){var r=t.stateNode;if(r===null)return null;var o=r[xn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Ki)try{var $s={};Object.defineProperty($s,"passive",{get:function(){_u=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{_u=!1}var Ca=null,vu=null,gl=null;function Dp(){if(gl)return gl;var t,n=vu,r=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<r&&n[t]===u[t];t++);var x=r-t;for(o=1;o<=x&&n[r-o]===u[d-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Up(){return!1}function Hn(t){function n(r,o,u,d,x){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(r=t[R],this[R]=r?r(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Up,this.isPropagationStopped=Up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Hn(lr),eo=g({},lr,{view:0,detail:0}),Fx=Hn(eo),xu,Su,to,Sl=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(xu=t.screenX-to.screenX,Su=t.screenY-to.screenY):Su=xu=0,to=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Lp=Hn(Sl),zx=g({},Sl,{dataTransfer:0}),Ix=Hn(zx),Bx=g({},eo,{relatedTarget:0}),yu=Hn(Bx),Hx=g({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=Hn(Hx),Gx=g({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kx=Hn(Gx),Xx=g({},lr,{data:0}),Np=Hn(Xx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=jx[t])?!!n[t]:!1}function Mu(){return Yx}var Kx=g({},eo,{key:function(t){if(t.key){var n=qx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zx=Hn(Kx),Qx=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Hn(Qx),Jx=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),$x=Hn(Jx),eS=g({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Hn(eS),nS=g({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=Hn(nS),aS=g({},lr,{newState:0,oldState:0}),rS=Hn(aS),sS=[9,13,27,32],Eu=Ki&&"CompositionEvent"in window,no=null;Ki&&"documentMode"in document&&(no=document.documentMode);var oS=Ki&&"TextEvent"in window&&!no,Pp=Ki&&(!Eu||no&&8<no&&11>=no),Fp=" ",zp=!1;function Ip(t,n){switch(t){case"keyup":return sS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function lS(t,n){switch(t){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(zp=!0,Fp);case"textInput":return t=n.data,t===Fp&&zp?null:t;default:return null}}function cS(t,n){if(Xr)return t==="compositionend"||!Eu&&Ip(t,n)?(t=Dp(),gl=vu=Ca=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pp&&n.locale!=="ko"?null:n.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!uS[t.type]:n==="textarea"}function Vp(t,n,r,o){Gr?kr?kr.push(o):kr=[o]:Gr=o,n=cc(n,"onChange"),0<n.length&&(r=new xl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var io=null,ao=null;function fS(t){E0(t,0)}function yl(t){var n=or(t);if(Ot(n))return t}function Gp(t,n){if(t==="change")return n}var kp=!1;if(Ki){var bu;if(Ki){var Tu="oninput"in document;if(!Tu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Tu=typeof Xp.oninput=="function"}bu=Tu}else bu=!1;kp=bu&&(!document.documentMode||9<document.documentMode)}function qp(){io&&(io.detachEvent("onpropertychange",Wp),ao=io=null)}function Wp(t){if(t.propertyName==="value"&&yl(ao)){var n=[];Vp(n,ao,t,mu(t)),wp(fS,n)}}function hS(t,n,r){t==="focusin"?(qp(),io=n,ao=r,io.attachEvent("onpropertychange",Wp)):t==="focusout"&&qp()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(ao)}function pS(t,n){if(t==="click")return yl(n)}function mS(t,n){if(t==="input"||t==="change")return yl(n)}function gS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:gS;function ro(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Kt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,n){var r=jp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=jp(r)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ze(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Ze(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var _S=Ki&&"documentMode"in document&&11>=document.documentMode,qr=null,Ru=null,so=null,Cu=!1;function Qp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Cu||qr==null||qr!==Ze(o)||(o=qr,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=cc(Ru,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=qr)))}function cr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Wr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},wu={},Jp={};Ki&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ur(t){if(wu[t])return wu[t];if(!Wr[t])return t;var n=Wr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Jp)return wu[t]=n[r];return t}var $p=ur("animationend"),em=ur("animationiteration"),tm=ur("animationstart"),vS=ur("transitionrun"),xS=ur("transitionstart"),SS=ur("transitioncancel"),nm=ur("transitionend"),im=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function yi(t,n){im.set(t,n),ne(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],jr=0,Uu=0;function El(){for(var t=jr,n=Uu=jr=0;n<t;){var r=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&am(r,u,d)}}function bl(t,n,r,o){si[jr++]=t,si[jr++]=n,si[jr++]=r,si[jr++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lu(t,n,r,o){return bl(t,n,r,o),Tl(t)}function fr(t,n){return bl(t,null,null,n),Tl(t)}function am(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Pe(r),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),d):null}function Tl(t){if(50<wo)throw wo=0,Gf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function yS(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,r,o){return new yS(t,n,r,o)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var r=t.alternate;return r===null?(r=Kn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function rm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,r,o,u,d){var x=0;if(o=t,typeof t=="function")Nu(t)&&(x=1);else if(typeof t=="string")x=Ay(t,r,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=Kn(31,r,n,u),t.elementType=T,t.lanes=d,t;case A:return hr(r.children,u,d,n);case M:x=8,u|=24;break;case S:return t=Kn(12,r,n,u|2),t.elementType=S,t.lanes=d,t;case z:return t=Kn(13,r,n,u),t.elementType=z,t.lanes=d,t;case I:return t=Kn(19,r,n,u),t.elementType=I,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:x=10;break e;case O:x=9;break e;case N:x=11;break e;case D:x=14;break e;case Y:x=16,o=null;break e}x=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=Kn(x,r,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function hr(t,n,r,o){return t=Kn(7,t,o,n),t.lanes=r,t}function Ou(t,n,r){return t=Kn(6,t,null,n),t.lanes=r,t}function sm(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Pu(t,n,r){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var om=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var r=om.get(t);return r!==void 0?r:(n={value:t,source:n,stack:G(n)},om.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Kr=[],Zr=0,Rl=null,oo=0,li=[],ci=0,wa=null,Ni=1,Oi="";function Qi(t,n){Kr[Zr++]=oo,Kr[Zr++]=Rl,Rl=t,oo=n}function lm(t,n,r){li[ci++]=Ni,li[ci++]=Oi,li[ci++]=wa,wa=t;var o=Ni;t=Oi;var u=32-Pe(o)-1;o&=~(1<<u),r+=1;var d=32-Pe(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ni=1<<32-Pe(n)+u|r<<u|o,Oi=d+t}else Ni=1<<d|r<<u|o,Oi=t}function Fu(t){t.return!==null&&(Qi(t,1),lm(t,1,0))}function zu(t){for(;t===Rl;)Rl=Kr[--Zr],Kr[Zr]=null,oo=Kr[--Zr],Kr[Zr]=null;for(;t===wa;)wa=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null,Ni=li[--ci],li[ci]=null}function cm(t,n){li[ci++]=Ni,li[ci++]=Oi,li[ci++]=wa,Ni=n.id,Oi=n.overflow,wa=t}var Tn=null,jt=null,yt=!1,Da=null,ui=!1,Iu=Error(a(519));function Ua(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(oi(n,t)),Iu}function um(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[sn]=t,n[xn]=o,r){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(r=0;r<Uo.length;r++)_t(Uo[r],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||R0(n.textContent,r)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ua(t,!0)}function fm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function Qr(t){if(t!==Tn)return!1;if(!yt)return fm(t),yt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||ih(t.type,t.memoizedProps)),r=!r),r&&jt&&Ua(t),fm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));jt=F0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));jt=F0(t)}else n===27?(n=jt,qa(t.type)?(t=lh,lh=null,jt=t):jt=n):jt=Tn?hi(t.stateNode.nextSibling):null;return!0}function dr(){jt=Tn=null,yt=!1}function Bu(){var t=Da;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Da=null),t}function lo(t){Da===null?Da=[t]:Da.push(t)}var Hu=U(null),pr=null,Ji=null;function La(t,n,r){pe(Hu,n._currentValue),n._currentValue=r}function $i(t){t._currentValue=Hu.current,$(Hu)}function Vu(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Gu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=r,R=d.alternate,R!==null&&(R.lanes|=r),Vu(d.return,r,t),o||(x=null);break e}d=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=r,d=x.alternate,d!==null&&(d.lanes|=r),Vu(x,r,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Jr(t,n,r,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var R=u.type;Yn(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===fe.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&Gu(n,t,r,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return hm(pr,t)}function wl(t,n){return pr===null&&mr(t),hm(t,n)}function hm(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ji===null){if(t===null)throw Error(a(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return r}var MS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},ES=s.unstable_scheduleCallback,bS=s.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new MS,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&ES(bS,function(){t.controller.abort()})}var uo=null,Xu=0,$r=0,es=null;function TS(t,n){if(uo===null){var r=uo=[];Xu=0,$r=Yf(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Xu++,n.then(dm,dm),n}function dm(){if(--Xu===0&&uo!==null){es!==null&&(es.status="fulfilled");var t=uo;uo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function AS(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var pm=F.S;F.S=function(t,n){Qg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&TS(t,n),pm!==null&&pm(t,n)};var gr=U(null);function qu(){var t=gr.current;return t!==null?t:qt.pooledCache}function Dl(t,n){n===null?pe(gr,gr.current):pe(gr,n.pool)}function mm(){var t=qu();return t===null?null:{parent:on._currentValue,pool:t}}var ts=Error(a(460)),Wu=Error(a(474)),Ul=Error(a(542)),Ll={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Yi,Yi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t}throw vr=n,ts}}function _r(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(vr=r,ts):r}}var vr=null;function vm(){if(vr===null)throw Error(a(459));var t=vr;return vr=null,t}function xm(t){if(t===ts||t===Ul)throw Error(a(483))}var ns=null,fo=0;function Nl(t){var n=fo;return fo+=1,ns===null&&(ns=[]),_m(ns,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(j,k){if(t){var J=j.deletions;J===null?(j.deletions=[k],j.flags|=16):J.push(k)}}function r(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Zi(j,k),j.index=0,j.sibling=null,j}function d(j,k,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<k?(j.flags|=67108866,k):J):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function x(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,J,me){return k===null||k.tag!==6?(k=Ou(J,j.mode,me),k.return=j,k):(k=u(k,J),k.return=j,k)}function B(j,k,J,me){var Qe=J.type;return Qe===A?he(j,k,J.props.children,me,J.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Y&&_r(Qe)===k.type)?(k=u(k,J.props),ho(k,J),k.return=j,k):(k=Al(J.type,J.key,J.props,null,j.mode,me),ho(k,J),k.return=j,k)}function ee(j,k,J,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Pu(J,j.mode,me),k.return=j,k):(k=u(k,J.children||[]),k.return=j,k)}function he(j,k,J,me,Qe){return k===null||k.tag!==7?(k=hr(J,j.mode,me,Qe),k.return=j,k):(k=u(k,J),k.return=j,k)}function ge(j,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ou(""+k,j.mode,J),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return J=Al(k.type,k.key,k.props,null,j.mode,J),ho(J,k),J.return=j,J;case b:return k=Pu(k,j.mode,J),k.return=j,k;case Y:return k=_r(k),ge(j,k,J)}if(ce(k)||K(k))return k=hr(k,j.mode,J,null),k.return=j,k;if(typeof k.then=="function")return ge(j,Nl(k),J);if(k.$$typeof===P)return ge(j,wl(j,k),J);Ol(j,k)}return null}function ie(j,k,J,me){var Qe=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Qe!==null?null:R(j,k,""+J,me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Qe?B(j,k,J,me):null;case b:return J.key===Qe?ee(j,k,J,me):null;case Y:return J=_r(J),ie(j,k,J,me)}if(ce(J)||K(J))return Qe!==null?null:he(j,k,J,me,null);if(typeof J.then=="function")return ie(j,k,Nl(J),me);if(J.$$typeof===P)return ie(j,k,wl(j,J),me);Ol(j,J)}return null}function oe(j,k,J,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return j=j.get(J)||null,R(k,j,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case y:return j=j.get(me.key===null?J:me.key)||null,B(k,j,me,Qe);case b:return j=j.get(me.key===null?J:me.key)||null,ee(k,j,me,Qe);case Y:return me=_r(me),oe(j,k,J,me,Qe)}if(ce(me)||K(me))return j=j.get(J)||null,he(k,j,me,Qe,null);if(typeof me.then=="function")return oe(j,k,J,Nl(me),Qe);if(me.$$typeof===P)return oe(j,k,J,wl(k,me),Qe);Ol(k,me)}return null}function Ge(j,k,J,me){for(var Qe=null,At=null,Ye=k,ut=k=0,St=null;Ye!==null&&ut<J.length;ut++){Ye.index>ut?(St=Ye,Ye=null):St=Ye.sibling;var Rt=ie(j,Ye,J[ut],me);if(Rt===null){Ye===null&&(Ye=St);break}t&&Ye&&Rt.alternate===null&&n(j,Ye),k=d(Rt,k,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt,Ye=St}if(ut===J.length)return r(j,Ye),yt&&Qi(j,ut),Qe;if(Ye===null){for(;ut<J.length;ut++)Ye=ge(j,J[ut],me),Ye!==null&&(k=d(Ye,k,ut),At===null?Qe=Ye:At.sibling=Ye,At=Ye);return yt&&Qi(j,ut),Qe}for(Ye=o(Ye);ut<J.length;ut++)St=oe(Ye,j,ut,J[ut],me),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?ut:St.key),k=d(St,k,ut),At===null?Qe=St:At.sibling=St,At=St);return t&&Ye.forEach(function(Za){return n(j,Za)}),yt&&Qi(j,ut),Qe}function et(j,k,J,me){if(J==null)throw Error(a(151));for(var Qe=null,At=null,Ye=k,ut=k=0,St=null,Rt=J.next();Ye!==null&&!Rt.done;ut++,Rt=J.next()){Ye.index>ut?(St=Ye,Ye=null):St=Ye.sibling;var Za=ie(j,Ye,Rt.value,me);if(Za===null){Ye===null&&(Ye=St);break}t&&Ye&&Za.alternate===null&&n(j,Ye),k=d(Za,k,ut),At===null?Qe=Za:At.sibling=Za,At=Za,Ye=St}if(Rt.done)return r(j,Ye),yt&&Qi(j,ut),Qe;if(Ye===null){for(;!Rt.done;ut++,Rt=J.next())Rt=ge(j,Rt.value,me),Rt!==null&&(k=d(Rt,k,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return yt&&Qi(j,ut),Qe}for(Ye=o(Ye);!Rt.done;ut++,Rt=J.next())Rt=oe(Ye,j,ut,Rt.value,me),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?ut:Rt.key),k=d(Rt,k,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return t&&Ye.forEach(function(zy){return n(j,zy)}),yt&&Qi(j,ut),Qe}function Xt(j,k,J,me){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:e:{for(var Qe=J.key;k!==null;){if(k.key===Qe){if(Qe=J.type,Qe===A){if(k.tag===7){r(j,k.sibling),me=u(k,J.props.children),me.return=j,j=me;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Y&&_r(Qe)===k.type){r(j,k.sibling),me=u(k,J.props),ho(me,J),me.return=j,j=me;break e}r(j,k);break}else n(j,k);k=k.sibling}J.type===A?(me=hr(J.props.children,j.mode,me,J.key),me.return=j,j=me):(me=Al(J.type,J.key,J.props,null,j.mode,me),ho(me,J),me.return=j,j=me)}return x(j);case b:e:{for(Qe=J.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){r(j,k.sibling),me=u(k,J.children||[]),me.return=j,j=me;break e}else{r(j,k);break}else n(j,k);k=k.sibling}me=Pu(J,j.mode,me),me.return=j,j=me}return x(j);case Y:return J=_r(J),Xt(j,k,J,me)}if(ce(J))return Ge(j,k,J,me);if(K(J)){if(Qe=K(J),typeof Qe!="function")throw Error(a(150));return J=Qe.call(J),et(j,k,J,me)}if(typeof J.then=="function")return Xt(j,k,Nl(J),me);if(J.$$typeof===P)return Xt(j,k,wl(j,J),me);Ol(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(r(j,k.sibling),me=u(k,J),me.return=j,j=me):(r(j,k),me=Ou(J,j.mode,me),me.return=j,j=me),x(j)):r(j,k)}return function(j,k,J,me){try{fo=0;var Qe=Xt(j,k,J,me);return ns=null,Qe}catch(Ye){if(Ye===ts||Ye===Ul)throw Ye;var At=Kn(29,Ye,null,j.mode);return At.lanes=me,At.return=j,At}}}var xr=Sm(!0),ym=Sm(!1),Na=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),am(t,null,r),n}return bl(t,o,n,r),Tl(t)}function po(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,js(t,r)}}function Ku(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Zu=!1;function mo(){if(Zu){var t=es;if(t!==null)throw t}}function go(t,n,r,o){Zu=!1;var u=t.updateQueue;Na=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,ee=B.next;B.next=null,x===null?d=ee:x.next=ee,x=B;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==x&&(R===null?he.firstBaseUpdate=ee:R.next=ee,he.lastBaseUpdate=B))}if(d!==null){var ge=u.baseState;x=0,he=ee=B=null,R=d;do{var ie=R.lane&-536870913,oe=ie!==R.lane;if(oe?(xt&ie)===ie:(o&ie)===ie){ie!==0&&ie===$r&&(Zu=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ge=t,et=R;ie=n;var Xt=r;switch(et.tag){case 1:if(Ge=et.payload,typeof Ge=="function"){ge=Ge.call(Xt,ge,ie);break e}ge=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=et.payload,ie=typeof Ge=="function"?Ge.call(Xt,ge,ie):Ge,ie==null)break e;ge=g({},ge,ie);break e;case 2:Na=!0}}ie=R.callback,ie!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ee=he=oe,B=ge):he=he.next=oe,x|=ie;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);he===null&&(B=ge),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=he,d===null&&(u.shared.lanes=0),Ha|=x,t.lanes=x,t.memoizedState=ge}}function Mm(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function Em(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Mm(r[t],n)}var is=U(null),Pl=U(0);function bm(t,n){t=la,pe(Pl,t),pe(is,n),la=t|n.baseLanes}function Qu(){pe(Pl,la),pe(is,is.current)}function Ju(){la=Pl.current,$(is),$(Pl)}var Zn=U(null),fi=null;function Fa(t){var n=t.alternate;pe(nn,nn.current&1),pe(Zn,t),fi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(fi=t)}function $u(t){pe(nn,nn.current),pe(Zn,t),fi===null&&(fi=t)}function Tm(t){t.tag===22?(pe(nn,nn.current),pe(Zn,t),fi===null&&(fi=t)):za()}function za(){pe(nn,nn.current),pe(Zn,Zn.current)}function Qn(t){$(Zn),fi===t&&(fi=null),$(nn)}var nn=U(0);function Fl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||sh(r)||oh(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,lt=null,Gt=null,ln=null,zl=!1,as=!1,Sr=!1,Il=0,_o=0,rs=null,RS=0;function en(){throw Error(a(321))}function ef(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Yn(t[r],n[r]))return!1;return!0}function tf(t,n,r,o,u,d){return ea=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?lg:_f,Sr=!1,d=r(o,u),Sr=!1,as&&(d=Rm(n,r,o,u)),Am(t),d}function Am(t){F.H=So;var n=Gt!==null&&Gt.next!==null;if(ea=0,ln=Gt=lt=null,zl=!1,_o=0,rs=null,n)throw Error(a(300));t===null||cn||(t=t.dependencies,t!==null&&Cl(t)&&(cn=!0))}function Rm(t,n,r,o){lt=t;var u=0;do{if(as&&(rs=null),_o=0,as=!1,25<=u)throw Error(a(301));if(u+=1,ln=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=cg,d=n(r,o)}while(as);return d}function CS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function nf(){var t=Il!==0;return Il=0,t}function af(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function rf(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}ea=0,ln=Gt=lt=null,as=!1,_o=Il=0,rs=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?lt.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=ln===null?lt.memoizedState:ln.next;if(n!==null)ln=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},ln===null?lt.memoizedState=ln=t:ln=ln.next=t}return ln}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=_o;return _o+=1,rs===null&&(rs=[]),t=_m(rs,t,n),n=lt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?lg:_f),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===P)return An(t)}throw Error(a(438,String(t)))}function sf(t){var n=null,r=lt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Bl(),lt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=w;return n.index++,r}function ta(t,n){return typeof n=="function"?n(t):n}function Vl(t){var n=an();return of(n,Gt,t)}function of(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=x=null,B=null,ee=n,he=!1;do{var ge=ee.lane&-536870913;if(ge!==ee.lane?(xt&ge)===ge:(ea&ge)===ge){var ie=ee.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ge===$r&&(he=!0);else if((ea&ie)===ie){ee=ee.next,ie===$r&&(he=!0);continue}else ge={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=ge,x=d):B=B.next=ge,lt.lanes|=ie,Ha|=ie;ge=ee.action,Sr&&r(d,ge),d=ee.hasEagerState?ee.eagerState:r(d,ge)}else ie={lane:ge,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=ie,x=d):B=B.next=ie,lt.lanes|=ge,Ha|=ge;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?x=d:B.next=R,!Yn(d,t.memoizedState)&&(cn=!0,he&&(r=es,r!==null)))throw r;t.memoizedState=d,t.baseState=x,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=an(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Yn(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function Cm(t,n,r){var o=lt,u=an(),d=yt;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var x=!Yn((Gt||u).memoizedState,r);if(x&&(u.memoizedState=r,cn=!0),u=u.queue,ff(Um.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Dm.bind(null,o,u,r,n),null),qt===null)throw Error(a(349));d||(ea&127)!==0||wm(o,n,r)}return r}function wm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=lt.updateQueue,n===null?(n=Bl(),lt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Dm(t,n,r,o){n.value=r,n.getSnapshot=o,Lm(n)&&Nm(t)}function Um(t,n,r){return r(function(){Lm(n)&&Nm(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Yn(t,r)}catch{return!0}}function Nm(t){var n=fr(t,2);n!==null&&qn(n,t,2)}function cf(t){var n=Fn();if(typeof t=="function"){var r=t;if(t=r(),Sr){ze(!0);try{r()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function Om(t,n,r,o){return t.baseState=r,of(t,Gt,typeof o=="function"?o:ta)}function wS(t,n,r,o,u){if(Xl(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};F.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,Pm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function Pm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,x={};F.T=x;try{var R=r(u,o),B=F.S;B!==null&&B(x,R),Fm(t,n,R)}catch(ee){uf(t,n,ee)}finally{d!==null&&x.types!==null&&(d.types=x.types),F.T=d}}else try{d=r(u,o),Fm(t,n,d)}catch(ee){uf(t,n,ee)}}function Fm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){zm(t,n,o)},function(o){return uf(t,n,o)}):zm(t,n,r)}function zm(t,n,r){n.status="fulfilled",n.value=r,Im(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Pm(t,r)))}function uf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Im(n),n=n.next;while(n!==o)}t.action=null}function Im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bm(t,n){return n}function Hm(t,n){if(yt){var r=qt.formState;if(r!==null){e:{var o=lt;if(yt){if(jt){t:{for(var u=jt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){jt=hi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=r[0])}}return r=Fn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},r.queue=o,r=rg.bind(null,lt,o),o.dispatch=r,o=cf(!1),d=gf.bind(null,lt,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=wS.bind(null,lt,u,d,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Vm(t){var n=an();return Gm(n,Gt,t)}function Gm(t,n,r){if(n=of(t,n,Bm)[0],t=Vl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(x){throw x===ts?Ul:x}else o=n;n=an();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(lt.flags|=2048,ss(9,{destroy:void 0},DS.bind(null,u,r),null)),[o,d,t]}function DS(t,n){t.action=n}function km(t){var n=an(),r=Gt;if(r!==null)return Gm(n,r,t);an(),n=n.memoizedState,r=an();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Bl(),lt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Xm(){return an().memoizedState}function Gl(t,n,r,o){var u=Fn();lt.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function kl(t,n,r,o){var u=an();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&ef(o,Gt.memoizedState.deps)?u.memoizedState=ss(n,d,r,o):(lt.flags|=t,u.memoizedState=ss(1|n,d,r,o))}function qm(t,n){Gl(8390656,8,t,n)}function ff(t,n){kl(2048,8,t,n)}function US(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Bl(),lt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Wm(t){var n=an().memoizedState;return US({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return kl(4,2,t,n)}function Ym(t,n){return kl(4,4,t,n)}function Km(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zm(t,n,r){r=r!=null?r.concat([t]):null,kl(4,4,Km.bind(null,n,t),r)}function hf(){}function Qm(t,n){var r=an();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Jm(t,n){var r=an();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),Sr){ze(!0);try{t()}finally{ze(!1)}}return r.memoizedState=[o,n],o}function df(t,n,r){return r===void 0||(ea&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=$g(),lt.lanes|=t,Ha|=t,r)}function $m(t,n,r,o){return Yn(r,n)?r:is.current!==null?(t=df(t,r,o),Yn(t,n)||(cn=!0),t):(ea&42)===0||(ea&1073741824)!==0&&(xt&261930)===0?(cn=!0,t.memoizedState=r):(t=$g(),lt.lanes|=t,Ha|=t,n)}function eg(t,n,r,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var x=F.T,R={};F.T=R,gf(t,!1,n,r);try{var B=u(),ee=F.S;if(ee!==null&&ee(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var he=AS(B,o);xo(t,n,he,ei(t))}else xo(t,n,o,ei(t))}catch(ge){xo(t,n,{then:function(){},status:"rejected",reason:ge},ei())}finally{V.p=d,x!==null&&R.types!==null&&(x.types=R.types),F.T=x}}function LS(){}function pf(t,n,r,o){if(t.tag!==5)throw Error(a(476));var u=tg(t).queue;eg(t,u,n,te,r===null?LS:function(){return ng(t),r(o)})}function tg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:te},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ng(t){var n=tg(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},ei())}function mf(){return An(Fo)}function ig(){return an().memoizedState}function ag(){return an().memoizedState}function NS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ei();t=Oa(r);var o=Pa(n,t,r);o!==null&&(qn(o,n,r),po(o,n,r)),n={cache:ku()},t.payload=n;return}n=n.return}}function OS(t,n,r){var o=ei();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xl(t)?sg(n,r):(r=Lu(t,n,r,o),r!==null&&(qn(r,t,o),og(r,n,o)))}function rg(t,n,r){var o=ei();xo(t,n,r,o)}function xo(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))sg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,r);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,x))return bl(t,n,u,0),qt===null&&El(),!1}catch{}if(r=Lu(t,n,u,o),r!==null)return qn(r,t,o),og(r,n,o),!0}return!1}function gf(t,n,r,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(a(479))}else n=Lu(t,r,o,2),n!==null&&qn(n,t,2)}function Xl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function sg(t,n){as=zl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function og(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,js(t,r)}}var So={readContext:An,use:Hl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};So.useEffectEvent=en;var lg={readContext:An,use:Hl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:qm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Gl(4194308,4,Km.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var r=Fn();n=n===void 0?null:n;var o=t();if(Sr){ze(!0);try{t()}finally{ze(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Fn();if(r!==void 0){var u=r(n);if(Sr){ze(!0);try{r(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=OS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,r=rg.bind(null,lt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:hf,useDeferredValue:function(t,n){var r=Fn();return df(r,t,n)},useTransition:function(){var t=cf(!1);return t=eg.bind(null,lt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=lt,u=Fn();if(yt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),qt===null)throw Error(a(349));(xt&127)!==0||wm(o,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,qm(Um.bind(null,o,d,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},Dm.bind(null,o,d,r,n),null),r},useId:function(){var t=Fn(),n=qt.identifierPrefix;if(yt){var r=Oi,o=Ni;r=(o&~(1<<32-Pe(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Il++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=RS++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=gf.bind(null,lt,!0,r),r.dispatch=n,[t,n]},useMemoCache:sf,useCacheRefresh:function(){return Fn().memoizedState=NS.bind(null,lt)},useEffectEvent:function(t){var n=Fn(),r={impl:t};return n.memoizedState=r,function(){if((Lt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},_f={readContext:An,use:Hl,useCallback:Qm,useContext:An,useEffect:ff,useImperativeHandle:Zm,useInsertionEffect:jm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Vl,useRef:Xm,useState:function(){return Vl(ta)},useDebugValue:hf,useDeferredValue:function(t,n){var r=an();return $m(r,Gt.memoizedState,t,n)},useTransition:function(){var t=Vl(ta)[0],n=an().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Cm,useId:ig,useHostTransitionStatus:mf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var r=an();return Om(r,Gt,t,n)},useMemoCache:sf,useCacheRefresh:ag};_f.useEffectEvent=Wm;var cg={readContext:An,use:Hl,useCallback:Qm,useContext:An,useEffect:ff,useImperativeHandle:Zm,useInsertionEffect:jm,useLayoutEffect:Ym,useMemo:Jm,useReducer:lf,useRef:Xm,useState:function(){return lf(ta)},useDebugValue:hf,useDeferredValue:function(t,n){var r=an();return Gt===null?df(r,t,n):$m(r,Gt.memoizedState,t,n)},useTransition:function(){var t=lf(ta)[0],n=an().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Cm,useId:ig,useHostTransitionStatus:mf,useFormState:km,useActionState:km,useOptimistic:function(t,n){var r=an();return Gt!==null?Om(r,Gt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:sf,useCacheRefresh:ag};cg.useEffectEvent=Wm;function vf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var xf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ei(),u=Oa(o);u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(qn(n,t,o),po(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ei(),u=Oa(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(qn(n,t,o),po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ei(),o=Oa(r);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,r),n!==null&&(qn(n,t,r),po(n,t,r))}};function ug(t,n,r,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!ro(r,o)||!ro(u,d):!0}function fg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function hg(t){Ml(t)}function dg(t){console.error(t)}function pg(t){Ml(t)}function ql(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function mg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,r){return r=Oa(r),r.tag=3,r.payload={element:null},r.callback=function(){ql(t,n)},r}function gg(t){return t=Oa(t),t.tag=3,t}function _g(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){mg(n,r,o)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){mg(n,r,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function PS(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Jr(n,r,u,!0),r=Zn.current,r!==null){switch(r.tag){case 31:case 13:return fi===null?ic():r.alternate===null&&tn===0&&(tn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Ll?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),qf(t,o,u)),!1;case 22:return r.flags|=65536,o===Ll?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),qf(t,o,u)),!1}throw Error(a(435,r.tag))}return qf(t,o,u),ic(),!1}if(yt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(t=Error(a(422),{cause:o}),lo(oi(t,r)))):(o!==Iu&&(n=Error(a(423),{cause:o}),lo(oi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,r),u=Sf(t.stateNode,o,u),Ku(t,u),tn!==4&&(tn=2)),!1;var d=Error(a(520),{cause:o});if(d=oi(d,r),Co===null?Co=[d]:Co.push(d),tn!==4&&(tn=2),n===null)return!0;o=oi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Sf(r.stateNode,o,t),Ku(r,t),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=gg(u),_g(u,t,r,o),Ku(r,u),!1}r=r.return}while(r!==null);return!1}var yf=Error(a(461)),cn=!1;function Rn(t,n,r,o){n.child=t===null?ym(n,null,r,o):xr(n,t.child,r,o)}function vg(t,n,r,o,u){r=r.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return mr(n),o=tf(t,n,r,x,d,u),R=nf(),t!==null&&!cn?(af(t,n,u),na(t,n,u)):(yt&&R&&Fu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function xg(t,n,r,o,u){if(t===null){var d=r.type;return typeof d=="function"&&!Nu(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Sg(t,n,d,o,u)):(t=Al(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!wf(t,u)){var x=d.memoizedProps;if(r=r.compare,r=r!==null?r:ro,r(x,o)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Zi(d,o),t.ref=n.ref,t.return=n,n.child=t}function Sg(t,n,r,o,u){if(t!==null){var d=t.memoizedProps;if(ro(d,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=d,wf(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,na(t,n,u)}return Mf(t,n,r,o,u)}function yg(t,n,r,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Mg(t,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,d!==null?d.cachePool:null),d!==null?bm(n,d):Qu(),Tm(n);else return o=n.lanes=536870912,Mg(t,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(Dl(n,d.cachePool),bm(n,d),za(),n.memoizedState=null):(t!==null&&Dl(n,null),Qu(),za());return Rn(t,n,u,r),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(t,n,r,o,u){var d=qu();return d=d===null?null:{parent:on._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},t!==null&&Dl(n,null),Qu(),Tm(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Eg(t,n,r){return xr(n,t.child,null,r),t=Wl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function FS(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,yo(null,t);if($u(n),(t=jt)?(t=P0(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},r=sm(t),r.return=n,n.child=r,Tn=n,jt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Wl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=Eg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(cn||Jr(t,n,r,!1),u=(r&t.childLanes)!==0,cn||u){if(o=qt,o!==null&&(x=zr(o,r),x!==0&&x!==d.retryLane))throw d.retryLane=x,fr(t,x),qn(o,t,x),yf;ic(),n=Eg(t,n,r)}else t=d.treeContext,jt=hi(x.nextSibling),Tn=n,yt=!0,Da=null,ui=!1,t!==null&&cm(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function jl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Mf(t,n,r,o,u){return mr(n),r=tf(t,n,r,o,void 0,u),o=nf(),t!==null&&!cn?(af(t,n,u),na(t,n,u)):(yt&&o&&Fu(n),n.flags|=1,Rn(t,n,r,u),n.child)}function bg(t,n,r,o,u,d){return mr(n),n.updateQueue=null,r=Rm(n,o,r,u),Am(t),o=nf(),t!==null&&!cn?(af(t,n,d),na(t,n,d)):(yt&&o&&Fu(n),n.flags|=1,Rn(t,n,r,d),n.child)}function Tg(t,n,r,o,u){if(mr(n),n.stateNode===null){var d=Yr,x=r.contextType;typeof x=="object"&&x!==null&&(d=An(x)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),x=r.contextType,d.context=typeof x=="object"&&x!==null?An(x):Yr,d.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(vf(n,r,x,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&xf.enqueueReplaceState(d,d.state,null),go(n,o,d,u),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,B=yr(r,R);d.props=B;var ee=d.context,he=r.contextType;x=Yr,typeof he=="object"&&he!==null&&(x=An(he));var ge=r.getDerivedStateFromProps;he=typeof ge=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==x)&&fg(n,d,o,x),Na=!1;var ie=n.memoizedState;d.state=ie,go(n,o,d,u),mo(),ee=n.memoizedState,R||ie!==ee||Na?(typeof ge=="function"&&(vf(n,r,ge,o),ee=n.memoizedState),(B=Na||ug(n,r,B,o,ie,ee,x))?(he||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=x,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Yu(t,n),x=n.memoizedProps,he=yr(r,x),d.props=he,ge=n.pendingProps,ie=d.context,ee=r.contextType,B=Yr,typeof ee=="object"&&ee!==null&&(B=An(ee)),R=r.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==ge||ie!==B)&&fg(n,d,o,B),Na=!1,ie=n.memoizedState,d.state=ie,go(n,o,d,u),mo();var oe=n.memoizedState;x!==ge||ie!==oe||Na||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof R=="function"&&(vf(n,r,R,o),oe=n.memoizedState),(he=Na||ug(n,r,he,o,ie,oe,B)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,oe,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,oe,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),d.props=o,d.state=oe,d.context=B,o=he):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,u),n.child=xr(n,null,r,u)):Rn(t,n,r,u),n.memoizedState=d.state,t=n.child):t=na(t,n,u),t}function Ag(t,n,r,o){return dr(),n.flags|=256,Rn(t,n,r,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:mm()}}function Tf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=$n),t}function Rg(t,n,r){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Fa(n):za(),(t=jt)?(t=P0(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},r=sm(t),r.return=n,n.child=r,Tn=n,jt=null)):t=null,t===null)throw Ua(n);return oh(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(za(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=hr(o,u,r,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=bf(r),o.childLanes=Tf(t,x,r),n.memoizedState=Ef,yo(null,o)):(Fa(n),Af(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(Fa(n),n.flags&=-257,n=Rf(t,n,r)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),R=hr(R,u,r,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,xr(n,t.child,null,r),o=n.child,o.memoizedState=bf(r),o.childLanes=Tf(t,x,r),n.memoizedState=Ef,n=yo(null,o));else if(Fa(n),oh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ee=x.dgst;x=ee,o=Error(a(419)),o.stack="",o.digest=x,lo({value:o,source:null,stack:null}),n=Rf(t,n,r)}else if(cn||Jr(t,n,r,!1),x=(r&t.childLanes)!==0,cn||x){if(x=qt,x!==null&&(o=zr(x,r),o!==0&&o!==B.retryLane))throw B.retryLane=o,fr(t,o),qn(x,t,o),yf;sh(R)||ic(),n=Rf(t,n,r)}else sh(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,jt=hi(R.nextSibling),Tn=n,yt=!0,Da=null,ui=!1,t!==null&&cm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(za(),R=o.fallback,u=n.mode,B=t.child,ee=B.sibling,o=Zi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?R=Zi(ee,R):(R=hr(R,u,r,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=bf(r):(u=R.cachePool,u!==null?(B=on._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=mm(),R={baseLanes:R.baseLanes|r,cachePool:u}),o.memoizedState=R,o.childLanes=Tf(t,x,r),n.memoizedState=Ef,yo(t.child,o)):(Fa(n),r=t.child,t=r.sibling,r=Zi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=r,n.memoizedState=null,r)}function Af(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Rf(t,n,r){return xr(n,t.child,null,r),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Cg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,r)}function Cf(t,n,r,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=r,x.tailMode=u,x.treeForkCount=d)}function wg(t,n,r){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=nn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,pe(nn,x),Rn(t,n,o,r),o=yt?oo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,r,n);else if(t.tag===19)Cg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Fl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Cf(n,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Cf(n,!0,r,null,d,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Jr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=Zi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Zi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function zS(t,n,r){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),La(n,on,t.memoizedState.cache),dr();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Rg(t,n,r):(Fa(n),t=na(t,n,r),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Jr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return wg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(nn,nn.current),o)break;return null;case 22:return n.lanes=0,yg(t,n,r,n.pendingProps);case 24:La(n,on,t.memoizedState.cache)}return na(t,n,r)}function Dg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!wf(t,r)&&(n.flags&128)===0)return cn=!1,zS(t,n,r);cn=(t.flags&131072)!==0}else cn=!1,yt&&(n.flags&1048576)!==0&&lm(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")Nu(t)?(o=yr(t,o),n.tag=1,n=Tg(null,n,t,o,r)):(n.tag=0,n=Mf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=vg(null,n,t,o,r);break e}else if(u===D){n.tag=14,n=xg(null,n,t,o,r);break e}}throw n=le(t)||t,Error(a(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=yr(o,n.pendingProps),Tg(t,n,o,u,r);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Yu(t,n),go(n,o,null,r);var x=n.memoizedState;if(o=x.cache,La(n,on,o),o!==d.cache&&Gu(n,[on],r,!0),mo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Ag(t,n,o,r);break e}else if(o!==u){u=oi(Error(a(424)),n),lo(u),n=Ag(t,n,o,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=hi(t.firstChild),Tn=n,yt=!0,Da=null,ui=!0,r=ym(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),o===u){n=na(t,n,r);break e}Rn(t,n,o,r)}n=n.child}return n;case 26:return jl(t,n),t===null?(r=V0(n.type,null,n.pendingProps,null))?n.memoizedState=r:yt||(r=n.type,t=n.pendingProps,o=uc(ae.current).createElement(r),o[sn]=n,o[xn]=t,Cn(o,r,t),C(o),n.stateNode=o):n.memoizedState=V0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&yt&&(o=n.stateNode=I0(n.type,n.pendingProps,ae.current),Tn=n,ui=!0,u=jt,qa(n.type)?(lh=u,jt=hi(o.firstChild)):jt=u),Rn(t,n,n.pendingProps.children,r),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=jt)&&(o=dy(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,jt=hi(o.firstChild),ui=!1,u=!0):u=!1),u||Ua(n)),He(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,ih(u,d)?o=null:x!==null&&ih(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,CS,null,null,r),Fo._currentValue=u),jl(t,n),Rn(t,n,o,r),n.child;case 6:return t===null&&yt&&((t=r=jt)&&(r=py(r,n.pendingProps,ui),r!==null?(n.stateNode=r,Tn=n,jt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Rg(t,n,r);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,r):Rn(t,n,o,r),n.child;case 11:return vg(t,n,n.type,n.pendingProps,r);case 7:return Rn(t,n,n.pendingProps,r),n.child;case 8:return Rn(t,n,n.pendingProps.children,r),n.child;case 12:return Rn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,mr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,r),n.child;case 14:return xg(t,n,n.type,n.pendingProps,r);case 15:return Sg(t,n,n.type,n.pendingProps,r);case 19:return wg(t,n,r);case 31:return FS(t,n,r);case 22:return yg(t,n,r,n.pendingProps);case 24:return mr(n),o=An(on),t===null?(u=qu(),u===null&&(u=qt,d=ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:o,cache:u},ju(n),La(n,on,u)):((t.lanes&r)!==0&&(Yu(t,n),go(n,null,null,r),mo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,on,o)):(o=d.cache,La(n,on,o),o!==u.cache&&Gu(n,[on],r,!0))),Rn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ia(t){t.flags|=4}function Df(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(i0())t.flags|=8192;else throw vr=Ll,Wu}else t.flags&=-16777217}function Ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!W0(n))if(i0())t.flags|=8192;else throw vr=Ll,Wu}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pt():536870912,t.lanes|=n,us|=n)}function Mo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function IS(t,n,r){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(on),ke(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),Yt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ia(n),d!==null?(Yt(n),Ug(n,d)):(Yt(n),Df(n,u,null,o,r))):d?d!==t.memoizedState?(ia(n),Yt(n),Ug(n,d)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ia(n),Yt(n),Df(n,u,t,o,r)),null;case 27:if(pt(n),r=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Yt(n),null}t=Ae.current,Qr(n)?um(n):(t=I0(u,o,r),n.stateNode=t,ia(n))}return Yt(n),null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Yt(n),null}if(d=Ae.current,Qr(n))um(n);else{var x=uc(ae.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[sn]=n,d[xn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return Yt(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=ae.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||R0(t.nodeValue,r)),t||Ua(n,!0)}else t=uc(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Yt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[sn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else r=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[sn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Kl(n,n.updateQueue),Yt(n),null);case 4:return ke(),t===null&&Jf(n.stateNode.containerInfo),Yt(n),null;case 10:return $i(n.type),Yt(n),null;case 19:if($(nn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Mo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Fl(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)rm(r,t),r=r.sibling;return pe(nn,nn.current&1|2),yt&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>ec&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Fl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Yt(n),null}else 2*E()-o.renderingStartTime>ec&&r!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,r=nn.current,pe(nn,u?r&1|2:r&1),yt&&Qi(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Qn(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),r=n.updateQueue,r!==null&&Kl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&$(gr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(on),Yt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function BS(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(on),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(a(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(nn),null;case 4:return ke(),null;case 10:return $i(n.type),null;case 22:case 23:return Qn(n),Ju(),t!==null&&$(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(on),null;case 25:return null;default:return null}}function Lg(t,n){switch(zu(n),n.tag){case 3:$i(on),ke();break;case 26:case 27:case 5:pt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:$(nn);break;case 10:$i(n.type);break;case 22:case 23:Qn(n),Ju(),t!==null&&$(gr);break;case 24:$i(on)}}function Eo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var d=r.create,x=r.inst;o=d(),x.destroy=o}r=r.next}while(r!==u)}}catch(R){It(n,n.return,R)}}function Ia(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var B=r,ee=R;try{ee()}catch(he){It(u,B,he)}}}o=o.next}while(o!==d)}}catch(he){It(n,n.return,he)}}function Ng(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Em(n,r)}catch(o){It(t,t.return,o)}}}function Og(t,n,r){r.props=yr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){It(t,n,o)}}function bo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){It(t,n,u)}}function Pi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){It(t,n,u)}else r.current=null}function Pg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){It(t,t.return,u)}}function Uf(t,n,r){try{var o=t.stateNode;oy(o,t.type,r,n),o[xn]=n}catch(u){It(t,t.return,u)}}function Fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&qa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Nf(t,n,r),t=t.sibling;t!==null;)Nf(t,n,r),t=t.sibling}function Zl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Zl(t,n,r),t=t.sibling;t!==null;)Zl(t,n,r),t=t.sibling}function zg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,r),n[sn]=t,n[xn]=r}catch(d){It(t,t.return,d)}}var aa=!1,un=!1,Of=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,_n=null;function HS(t,n){if(t=t.containerInfo,th=_c,t=Zp(t),Au(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var x=0,R=-1,B=-1,ee=0,he=0,ge=t,ie=null;t:for(;;){for(var oe;ge!==r||u!==0&&ge.nodeType!==3||(R=x+u),ge!==d||o!==0&&ge.nodeType!==3||(B=x+o),ge.nodeType===3&&(x+=ge.nodeValue.length),(oe=ge.firstChild)!==null;)ie=ge,ge=oe;for(;;){if(ge===t)break t;if(ie===r&&++ee===u&&(R=x),ie===d&&++he===o&&(B=x),(oe=ge.nextSibling)!==null)break;ge=ie,ie=ge.parentNode}ge=oe}r=R===-1||B===-1?null:{start:R,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(nh={focusedElem:t,selectionRange:r},_c=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var Ge=yr(r.type,u);t=o.getSnapshotBeforeUpdate(Ge,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){It(r,r.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)rh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Bg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:sa(t,r),o&4&&Eo(5,r);break;case 1:if(sa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(x){It(r,r.return,x)}else{var u=yr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){It(r,r.return,x)}}o&64&&Ng(r),o&512&&bo(r,r.return);break;case 3:if(sa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Em(t,n)}catch(x){It(r,r.return,x)}}break;case 27:n===null&&o&4&&zg(r);case 26:case 5:sa(t,r),n===null&&o&4&&Pg(r),o&512&&bo(r,r.return);break;case 12:sa(t,r);break;case 31:sa(t,r),o&4&&Gg(t,r);break;case 13:sa(t,r),o&4&&kg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=KS.bind(null,r),my(t,r))));break;case 22:if(o=r.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||un,u=aa;var d=un;aa=o,(un=n)&&!d?oa(t,r,(r.subtreeFlags&8772)!==0):sa(t,r),aa=u,un=d}break;case 30:break;default:sa(t,r)}}function Hg(t){var n=t.alternate;n!==null&&(t.alternate=null,Hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Vn=!1;function ra(t,n,r){for(r=r.child;r!==null;)Vg(t,n,r),r=r.sibling}function Vg(t,n,r){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ee,r)}catch{}switch(r.tag){case 26:un||Pi(r,n),ra(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:un||Pi(r,n);var o=Qt,u=Vn;qa(r.type)&&(Qt=r.stateNode,Vn=!1),ra(t,n,r),No(r.stateNode),Qt=o,Vn=u;break;case 5:un||Pi(r,n);case 6:if(o=Qt,u=Vn,Qt=null,ra(t,n,r),Qt=o,Vn=u,Qt!==null)if(Vn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(r.stateNode)}catch(d){It(r,n,d)}else try{Qt.removeChild(r.stateNode)}catch(d){It(r,n,d)}break;case 18:Qt!==null&&(Vn?(t=Qt,N0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),vs(t)):N0(Qt,r.stateNode));break;case 4:o=Qt,u=Vn,Qt=r.stateNode.containerInfo,Vn=!0,ra(t,n,r),Qt=o,Vn=u;break;case 0:case 11:case 14:case 15:Ia(2,r,n),un||Ia(4,r,n),ra(t,n,r);break;case 1:un||(Pi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Og(r,n,o)),ra(t,n,r);break;case 21:ra(t,n,r);break;case 22:un=(o=un)||r.memoizedState!==null,ra(t,n,r),un=o;break;default:ra(t,n,r)}}function Gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vs(t)}catch(r){It(n,n.return,r)}}}function kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(r){It(n,n.return,r)}}function VS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ig),n;default:throw Error(a(435,t.tag))}}function Ql(t,n){var r=VS(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=ZS.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){Qt=R.stateNode,Vn=!1;break e}break;case 5:Qt=R.stateNode,Vn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(Qt===null)throw Error(a(160));Vg(d,x,u),Qt=null,Vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xg(n,t),n=n.sibling}var Mi=null;function Xg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),kn(t),o&4&&(Ia(3,t,t.return),Eo(3,t),Ia(5,t,t.return));break;case 1:Gn(n,t),kn(t),o&512&&(un||r===null||Pi(r,r.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Mi;if(Gn(n,t),kn(t),o&512&&(un||r===null||Pi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[sr]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,r),d[sn]=t,C(d),o=d;break e;case"link":var x=X0("link","href",u).get(o+(r.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){x.splice(R,1);break t}}d=u.createElement(o),Cn(d,o,r),u.head.appendChild(d);break;case"meta":if(x=X0("meta","content",u).get(o+(r.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){x.splice(R,1);break t}}d=u.createElement(o),Cn(d,o,r),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[sn]=t,C(d),o=d}t.stateNode=o}else q0(u,t.type,t.stateNode);else t.stateNode=k0(u,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?q0(u,t.type,t.stateNode):k0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Gn(n,t),kn(t),o&512&&(un||r===null||Pi(r,r.return)),r!==null&&o&4&&Uf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Gn(n,t),kn(t),o&512&&(un||r===null||Pi(r,r.return)),t.flags&32){u=t.stateNode;try{dn(u,"")}catch(Ge){It(t,t.return,Ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Uf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Gn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Ge){It(t,t.return,Ge)}}break;case 3:if(dc=null,u=Mi,Mi=fc(n.containerInfo),Gn(n,t),Mi=u,kn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(Ge){It(t,t.return,Ge)}Of&&(Of=!1,qg(t));break;case 4:o=Mi,Mi=fc(t.stateNode.containerInfo),Gn(n,t),kn(t),Mi=o;break;case 12:Gn(n,t),kn(t);break;case 31:Gn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Gn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&($l=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,ee=aa,he=un;if(aa=ee||u,un=he||B,Gn(n,t),un=he,aa=ee,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||B||aa||un||Mr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(d=B.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=B.stateNode;var ge=B.memoizedProps.style,ie=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;R.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ge){It(B,B.return,Ge)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ge){It(B,B.return,Ge)}}}else if(n.tag===18){if(r===null){B=n;try{var oe=B.stateNode;u?O0(oe,!0):O0(B.stateNode,!1)}catch(Ge){It(B,B.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Ql(t,r))));break;case 19:Gn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Fg(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,d=Lf(t);Zl(t,d,u);break;case 5:var x=r.stateNode;r.flags&32&&(dn(x,""),r.flags&=-33);var R=Lf(t);Zl(t,R,x);break;case 3:case 4:var B=r.stateNode.containerInfo,ee=Lf(t);Nf(t,ee,B);break;default:throw Error(a(161))}}catch(he){It(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bg(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Mr(n);break;case 1:Pi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Og(n,n.return,r),Mr(n);break;case 27:No(n.stateNode);case 26:case 5:Pi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function oa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:oa(u,d,r),Eo(4,d);break;case 1:if(oa(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){It(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Mm(B[u],R)}catch(ee){It(o,o.return,ee)}}r&&x&64&&Ng(d),bo(d,d.return);break;case 27:zg(d);case 26:case 5:oa(u,d,r),r&&o===null&&x&4&&Pg(d),bo(d,d.return);break;case 12:oa(u,d,r);break;case 31:oa(u,d,r),r&&x&4&&Gg(u,d);break;case 13:oa(u,d,r),r&&x&4&&kg(u,d);break;case 22:d.memoizedState===null&&oa(u,d,r),bo(d,d.return);break;case 30:break;default:oa(u,d,r)}n=n.sibling}}function Pf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&co(r))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Ei(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wg(t,n,r,o),n=n.sibling}function Wg(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,r,o),u&2048&&Eo(9,n);break;case 1:Ei(t,n,r,o);break;case 3:Ei(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(u&2048){Ei(t,n,r,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){It(n,n.return,B)}}else Ei(t,n,r,o);break;case 31:Ei(t,n,r,o);break;case 13:Ei(t,n,r,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,r,o):To(t,n):d._visibility&2?Ei(t,n,r,o):(d._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(x,n);break;case 24:Ei(t,n,r,o),u&2048&&Ff(n.alternate,n);break;default:Ei(t,n,r,o)}}function os(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=r,B=o,ee=x.flags;switch(x.tag){case 0:case 11:case 15:os(d,x,R,B,u),Eo(8,x);break;case 23:break;case 22:var he=x.stateNode;x.memoizedState!==null?he._visibility&2?os(d,x,R,B,u):To(d,x):(he._visibility|=2,os(d,x,R,B,u)),u&&ee&2048&&Pf(x.alternate,x);break;case 24:os(d,x,R,B,u),u&&ee&2048&&Ff(x.alternate,x);break;default:os(d,x,R,B,u)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:To(r,o),u&2048&&Pf(o.alternate,o);break;case 24:To(r,o),u&2048&&Ff(o.alternate,o);break;default:To(r,o)}n=n.sibling}}var Ao=8192;function ls(t,n,r){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)jg(t,n,r),t=t.sibling}function jg(t,n,r){switch(t.tag){case 26:ls(t,n,r),t.flags&Ao&&t.memoizedState!==null&&Ry(r,Mi,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,r);break;case 3:case 4:var o=Mi;Mi=fc(t.stateNode.containerInfo),ls(t,n,r),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,ls(t,n,r),Ao=o):ls(t,n,r));break;default:ls(t,n,r)}}function Yg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];_n=o,Zg(o,t)}Yg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Ro(t);break;default:Ro(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];_n=o,Zg(o,t)}Yg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Jl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Zg(t,n){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:Ia(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,_n=o;else e:for(r=t;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(Hg(o),o===r){_n=null;break e}if(u!==null){u.return=d,_n=u;break e}_n=d}}}var GS={getCacheForType:function(t){var n=An(on),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return An(on).controller.signal}},kS=typeof WeakMap=="function"?WeakMap:Map,Lt=0,qt=null,gt=null,xt=0,zt=0,Jn=null,Ba=!1,cs=!1,zf=!1,la=0,tn=0,Ha=0,Er=0,If=0,$n=0,us=0,Co=null,Xn=null,Bf=!1,$l=0,Qg=0,ec=1/0,tc=null,Va=null,pn=0,Ga=null,fs=null,ca=0,Hf=0,Vf=null,Jg=null,wo=0,Gf=null;function ei(){return(Lt&2)!==0&&xt!==0?xt&-xt:F.T!==null?Yf():Ks()}function $g(){if($n===0)if((xt&536870912)===0||yt){var t=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),$n=t}else $n=536870912;return t=Zn.current,t!==null&&(t.flags|=32),$n}function qn(t,n,r){(t===qt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),ka(t,xt,$n,!1)),Dn(t,r),((Lt&2)===0||t!==qt)&&(t===qt&&((Lt&2)===0&&(Er|=r),tn===4&&ka(t,xt,$n,!1)),Fi(t))}function e0(t,n,r){if((Lt&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),u=o?WS(t,n):Xf(t,n,!0),d=o;do{if(u===0){cs&&!o&&ka(t,n,0,!1);break}else{if(r=t.current.alternate,d&&!XS(r)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;u=Co;var B=R.current.memoizedState.isDehydrated;if(B&&(hs(R,x).flags|=256),x=Xf(R,x,!1),x!==2){if(zf&&!B){R.errorRecoveryDisabledLanes|=d,Er|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){hs(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,$n,!Ba);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=$l+300-E(),10<u)){if(ka(o,n,$n,!Ba),_e(o,0,!0)!==0)break e;ca=n,o.timeoutHandle=U0(t0.bind(null,o,r,Xn,tc,Bf,n,$n,Er,us,Ba,d,"Throttled",-0,0),u);break e}t0(o,r,Xn,tc,Bf,n,$n,Er,us,Ba,d,null,-0,0)}}break}while(!0);Fi(t)}function t0(t,n,r,o,u,d,x,R,B,ee,he,ge,ie,oe){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},jg(n,d,ge);var Ge=(d&62914560)===d?$l-E():(d&4194048)===d?Qg-E():0;if(Ge=Cy(ge,Ge),Ge!==null){ca=d,t.cancelPendingCommit=Ge(c0.bind(null,t,n,d,r,o,u,x,R,B,he,ge,null,ie,oe)),ka(t,d,x,!ee);return}}c0(t,n,d,r,o,u,x,R,B)}function XS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,r,o){n&=~If,n&=~Er,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Pe(u),x=1<<d;o[d]=-1,u&=~x}r!==0&&dl(t,r,n)}function nc(){return(Lt&6)===0?(Do(0),!1):!0}function kf(){if(gt!==null){if(zt===0)var t=gt.return;else t=gt,Ji=pr=null,rf(t),ns=null,fo=0,t=gt;for(;t!==null;)Lg(t.alternate,t),t=t.return;gt=null}}function hs(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,uy(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ca=0,kf(),qt=t,gt=r=Zi(t.current,null),xt=n,zt=0,Jn=null,Ba=!1,cs=Re(t,n),zf=!1,us=$n=If=Er=Ha=tn=0,Xn=Co=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),d=1<<u;n|=t[u],o&=~d}return la=n,El(),r}function n0(t,n){lt=null,F.H=So,n===ts||n===Ul?(n=vm(),zt=3):n===Wu?(n=vm(),zt=4):zt=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,gt===null&&(tn=1,ql(t,oi(n,t.current)))}function i0(){var t=Zn.current;return t===null?!0:(xt&4194048)===xt?fi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===fi:!1}function a0(){var t=F.H;return F.H=So,t===null?So:t}function r0(){var t=F.A;return F.A=GS,t}function ic(){tn=4,Ba||(xt&4194048)!==xt&&Zn.current!==null||(cs=!0),(Ha&134217727)===0&&(Er&134217727)===0||qt===null||ka(qt,xt,$n,!1)}function Xf(t,n,r){var o=Lt;Lt|=2;var u=a0(),d=r0();(qt!==t||xt!==n)&&(tc=null,hs(t,n)),n=!1;var x=tn;e:do try{if(zt!==0&&gt!==null){var R=gt,B=Jn;switch(zt){case 8:kf(),x=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ee=zt;if(zt=0,Jn=null,ds(t,R,B,ee),r&&cs){x=0;break e}break;default:ee=zt,zt=0,Jn=null,ds(t,R,B,ee)}}qS(),x=tn;break}catch(he){n0(t,he)}while(!0);return n&&t.shellSuspendCounter++,Ji=pr=null,Lt=o,F.H=u,F.A=d,gt===null&&(qt=null,xt=0,El()),x}function qS(){for(;gt!==null;)s0(gt)}function WS(t,n){var r=Lt;Lt|=2;var o=a0(),u=r0();qt!==t||xt!==n?(tc=null,ec=E()+500,hs(t,n)):cs=Re(t,n);e:do try{if(zt!==0&&gt!==null){n=gt;var d=Jn;t:switch(zt){case 1:zt=0,Jn=null,ds(t,n,d,1);break;case 2:case 9:if(gm(d)){zt=0,Jn=null,o0(n);break}n=function(){zt!==2&&zt!==9||qt!==t||(zt=7),Fi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:gm(d)?(zt=0,Jn=null,o0(n)):(zt=0,Jn=null,ds(t,n,d,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var R=gt;if(x?W0(x):R.stateNode.complete){zt=0,Jn=null;var B=R.sibling;if(B!==null)gt=B;else{var ee=R.return;ee!==null?(gt=ee,ac(ee)):gt=null}break t}}zt=0,Jn=null,ds(t,n,d,5);break;case 6:zt=0,Jn=null,ds(t,n,d,6);break;case 8:kf(),tn=6;break e;default:throw Error(a(462))}}jS();break}catch(he){n0(t,he)}while(!0);return Ji=pr=null,F.H=o,F.A=u,Lt=r,gt!==null?0:(qt=null,xt=0,El(),tn)}function jS(){for(;gt!==null&&!je();)s0(gt)}function s0(t){var n=Dg(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?ac(t):gt=n}function o0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=bg(r,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=bg(r,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:rf(n);default:Lg(r,n),n=gt=rm(n,la),n=Dg(r,n,la)}t.memoizedProps=t.pendingProps,n===null?ac(t):gt=n}function ds(t,n,r,o){Ji=pr=null,rf(n),ns=null,fo=0;var u=n.return;try{if(PS(t,u,n,r,xt)){tn=1,ql(t,oi(r,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;tn=1,ql(t,oi(r,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:cs||(xt&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),l0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){l0(n,Ba);return}t=n.return;var r=IS(n.alternate,n,la);if(r!==null){gt=r;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);tn===0&&(tn=5)}function l0(t,n){do{var r=BS(t.alternate,t);if(r!==null){r.flags&=32767,gt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=r}while(t!==null);tn=6,gt=null}function c0(t,n,r,o,u,d,x,R,B){t.cancelPendingCommit=null;do rc();while(pn!==0);if((Lt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=Uu,vi(t,r,d,x,R,B),t===qt&&(gt=qt=null,xt=0),fs=n,Ga=t,ca=r,Hf=d,Vf=u,Jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,QS(ue,function(){return p0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=V.p,V.p=2,x=Lt,Lt|=4;try{HS(t,n,r)}finally{Lt=x,V.p=u,F.T=o}}pn=1,u0(),f0(),h0()}}function u0(){if(pn===1){pn=0;var t=Ga,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var o=V.p;V.p=2;var u=Lt;Lt|=4;try{Xg(n,t);var d=nh,x=Zp(t.containerInfo),R=d.focusedElem,B=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&Kp(R.ownerDocument.documentElement,R)){if(B!==null&&Au(R)){var ee=B.start,he=B.end;if(he===void 0&&(he=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(he,R.value.length);else{var ge=R.ownerDocument||document,ie=ge&&ge.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),Ge=R.textContent.length,et=Math.min(B.start,Ge),Xt=B.end===void 0?et:Math.min(B.end,Ge);!oe.extend&&et>Xt&&(x=Xt,Xt=et,et=x);var j=Yp(R,et),k=Yp(R,Xt);if(j&&k&&(oe.rangeCount!==1||oe.anchorNode!==j.node||oe.anchorOffset!==j.offset||oe.focusNode!==k.node||oe.focusOffset!==k.offset)){var J=ge.createRange();J.setStart(j.node,j.offset),oe.removeAllRanges(),et>Xt?(oe.addRange(J),oe.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),oe.addRange(J))}}}}for(ge=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&ge.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ge.length;R++){var me=ge[R];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}_c=!!th,nh=th=null}finally{Lt=u,V.p=o,F.T=r}}t.current=n,pn=2}}function f0(){if(pn===2){pn=0;var t=Ga,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var o=V.p;V.p=2;var u=Lt;Lt|=4;try{Bg(t,n.alternate,n)}finally{Lt=u,V.p=o,F.T=r}}pn=3}}function h0(){if(pn===4||pn===3){pn=0,L();var t=Ga,n=fs,r=ca,o=Jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,fs=Ga=null,d0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Ir(r),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=V.p,V.p=2,F.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{F.T=n,V.p=u}}(ca&3)!==0&&rc(),Fi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===Gf?wo++:(wo=0,Gf=t):wo=0,Do(0)}}function d0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function rc(){return u0(),f0(),h0(),p0()}function p0(){if(pn!==5)return!1;var t=Ga,n=Hf;Hf=0;var r=Ir(ca),o=F.T,u=V.p;try{V.p=32>r?32:r,F.T=null,r=Vf,Vf=null;var d=Ga,x=ca;if(pn=0,fs=Ga=null,ca=0,(Lt&6)!==0)throw Error(a(331));var R=Lt;if(Lt|=4,Kg(d.current),Wg(d,d.current,x,r),Lt=R,Do(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{V.p=u,F.T=o,d0(t,n)}}function m0(t,n,r){n=oi(r,n),n=Sf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Fi(t))}function It(t,n,r){if(t.tag===3)m0(t,t,r);else for(;n!==null;){if(n.tag===3){m0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=oi(r,t),r=gg(2),o=Pa(n,r,2),o!==null&&(_g(r,o,n,t),Dn(o,2),Fi(o));break}}n=n.return}}function qf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new kS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(zf=!0,u.add(r),t=YS.bind(null,t,n,r),n.then(t,t))}function YS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,qt===t&&(xt&r)===r&&(tn===4||tn===3&&(xt&62914560)===xt&&300>E()-$l?(Lt&2)===0&&hs(t,0):If|=r,us===xt&&(us=0)),Fi(t)}function g0(t,n){n===0&&(n=Pt()),t=fr(t,n),t!==null&&(Dn(t,n),Fi(t))}function KS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),g0(t,r)}function ZS(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),g0(t,r)}function QS(t,n){return Et(t,n)}var sc=null,ps=null,Wf=!1,oc=!1,jf=!1,Xa=0;function Fi(t){t!==ps&&t.next===null&&(ps===null?sc=ps=t:ps=ps.next=t),oc=!0,Wf||(Wf=!0,$S())}function Do(t,n){if(!jf&&oc){jf=!0;do for(var r=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Pe(42|t)+1)-1,d&=u&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,S0(o,d))}else d=xt,d=_e(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Re(o,d)||(r=!0,S0(o,d));o=o.next}while(r);jf=!1}}function JS(){_0()}function _0(){oc=Wf=!1;var t=0;Xa!==0&&cy()&&(t=Xa);for(var n=E(),r=null,o=sc;o!==null;){var u=o.next,d=v0(o,n);d===0?(o.next=null,r===null?sc=u:r.next=u,u===null&&(ps=r)):(r=o,(t!==0||(d&3)!==0)&&(oc=!0)),o=u}pn!==0&&pn!==5||Do(t),Xa!==0&&(Xa=0)}function v0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Pe(d),R=1<<x,B=u[x];B===-1?((R&r)===0||(R&o)!==0)&&(u[x]=nt(R,n)):B<=n&&(t.expiredLanes|=R),d&=~R}if(n=qt,r=xt,r=_e(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Nt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Re(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Nt(o),Ir(r)){case 2:case 8:r=xe;break;case 32:r=ue;break;case 268435456:r=Ce;break;default:r=ue}return o=x0.bind(null,t),r=Et(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Nt(o),t.callbackPriority=2,t.callbackNode=null,2}function x0(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(rc()&&t.callbackNode!==r)return null;var o=xt;return o=_e(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(e0(t,o,n),v0(t,E()),t.callbackNode!=null&&t.callbackNode===r?x0.bind(null,t):null)}function S0(t,n){if(rc())return null;e0(t,n,!0)}function $S(){fy(function(){(Lt&6)!==0?Et(de,JS):_0()})}function Yf(){if(Xa===0){var t=$r;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Xa=t}return Xa}function y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function M0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function ey(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var d=y0((u[xn]||null).action),x=o.submitter;x&&(n=(n=x[xn]||null)?y0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new xl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var B=x?M0(u,x):new FormData(u);pf(r,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=x?M0(u,x):new FormData(u),pf(r,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Kf=0;Kf<Du.length;Kf++){var Zf=Du[Kf],ty=Zf.toLowerCase(),ny=Zf[0].toUpperCase()+Zf.slice(1);yi(ty,"on"+ny)}yi($p,"onAnimationEnd"),yi(em,"onAnimationIteration"),yi(tm,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(vS,"onTransitionRun"),yi(xS,"onTransitionStart"),yi(SS,"onTransitionCancel"),yi(nm,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function E0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],B=R.instance,ee=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(he){Ml(he)}u.currentTarget=null,d=B}else for(x=0;x<o.length;x++){if(R=o[x],B=R.instance,ee=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(he){Ml(he)}u.currentTarget=null,d=B}}}}function _t(t,n){var r=n[Br];r===void 0&&(r=n[Br]=new Set);var o=t+"__bubble";r.has(o)||(b0(n,t,2,!1),r.add(o))}function Qf(t,n,r){var o=0;n&&(o|=4),b0(r,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[lc]){t[lc]=!0,W.forEach(function(r){r!=="selectionchange"&&(iy.has(r)||Qf(r,!1,t),Qf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,Qf("selectionchange",!1,n))}}function b0(t,n,r,o){switch($0(n)){case 2:var u=Uy;break;case 8:u=Ly;break;default:u=dh}r=u.bind(null,n,r,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function $f(t,n,r,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ta(R),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=d=x;continue e}R=R.parentNode}}o=o.return}wp(function(){var ee=d,he=mu(r),ge=[];e:{var ie=im.get(t);if(ie!==void 0){var oe=xl,Ge=t;switch(t){case"keypress":if(_l(r)===0)break e;case"keydown":case"keyup":oe=Zx;break;case"focusin":Ge="focus",oe=yu;break;case"focusout":Ge="blur",oe=yu;break;case"beforeblur":case"afterblur":oe=yu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=$x;break;case $p:case em:case tm:oe=Vx;break;case nm:oe=tS;break;case"scroll":case"scrollend":oe=Fx;break;case"wheel":oe=iS;break;case"copy":case"cut":case"paste":oe=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Op;break;case"toggle":case"beforetoggle":oe=rS}var et=(n&4)!==0,Xt=!et&&(t==="scroll"||t==="scrollend"),j=et?ie!==null?ie+"Capture":null:ie;et=[];for(var k=ee,J;k!==null;){var me=k;if(J=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||J===null||j===null||(me=Js(k,j),me!=null&&et.push(Lo(k,me,J))),Xt)break;k=k.return}0<et.length&&(ie=new oe(ie,Ge,null,r,he),ge.push({event:ie,listeners:et}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ie&&r!==pu&&(Ge=r.relatedTarget||r.fromElement)&&(Ta(Ge)||Ge[xi]))break e;if((oe||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(Ge=r.relatedTarget||r.toElement,oe=ee,Ge=Ge?Ta(Ge):null,Ge!==null&&(Xt=c(Ge),et=Ge.tag,Ge!==Xt||et!==5&&et!==27&&et!==6)&&(Ge=null)):(oe=null,Ge=ee),oe!==Ge)){if(et=Lp,me="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=Op,me="onPointerLeave",j="onPointerEnter",k="pointer"),Xt=oe==null?ie:or(oe),J=Ge==null?ie:or(Ge),ie=new et(me,k+"leave",oe,r,he),ie.target=Xt,ie.relatedTarget=J,me=null,Ta(he)===ee&&(et=new et(j,k+"enter",Ge,r,he),et.target=J,et.relatedTarget=Xt,me=et),Xt=me,oe&&Ge)t:{for(et=ay,j=oe,k=Ge,J=0,me=j;me;me=et(me))J++;me=0;for(var Qe=k;Qe;Qe=et(Qe))me++;for(;0<J-me;)j=et(j),J--;for(;0<me-J;)k=et(k),me--;for(;J--;){if(j===k||k!==null&&j===k.alternate){et=j;break t}j=et(j),k=et(k)}et=null}else et=null;oe!==null&&T0(ge,ie,oe,et,!1),Ge!==null&&Xt!==null&&T0(ge,Xt,Ge,et,!0)}}e:{if(ie=ee?or(ee):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var At=Gp;else if(Hp(ie))if(kp)At=mS;else{At=dS;var Ye=hS}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Si(ee.elementType)&&(At=Gp):At=pS;if(At&&(At=At(t,ee))){Vp(ge,At,r,he);break e}Ye&&Ye(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&yn(ie,"number",ie.value)}switch(Ye=ee?or(ee):window,t){case"focusin":(Hp(Ye)||Ye.contentEditable==="true")&&(qr=Ye,Ru=ee,so=null);break;case"focusout":so=Ru=qr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Qp(ge,r,he);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Qp(ge,r,he)}var ut;if(Eu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Xr?Ip(t,r)&&(St="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(St="onCompositionStart");St&&(Pp&&r.locale!=="ko"&&(Xr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Xr&&(ut=Dp()):(Ca=he,vu="value"in Ca?Ca.value:Ca.textContent,Xr=!0)),Ye=cc(ee,St),0<Ye.length&&(St=new Np(St,t,null,r,he),ge.push({event:St,listeners:Ye}),ut?St.data=ut:(ut=Bp(r),ut!==null&&(St.data=ut)))),(ut=oS?lS(t,r):cS(t,r))&&(St=cc(ee,"onBeforeInput"),0<St.length&&(Ye=new Np("onBeforeInput","beforeinput",null,r,he),ge.push({event:Ye,listeners:St}),Ye.data=ut)),ey(ge,t,ee,r,he)}E0(ge,n)})}function Lo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function cc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Js(t,r),u!=null&&o.unshift(Lo(t,u,d)),u=Js(t,n),u!=null&&o.push(Lo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ay(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,n,r,o,u){for(var d=n._reactName,x=[];r!==null&&r!==o;){var R=r,B=R.alternate,ee=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ee===null||(B=ee,u?(ee=Js(r,d),ee!=null&&x.unshift(Lo(r,ee,B))):u||(ee=Js(r,d),ee!=null&&x.push(Lo(r,ee,B)))),r=r.return}x.length!==0&&t.push({event:n,listeners:x})}var ry=/\r\n?/g,sy=/\u0000|\uFFFD/g;function A0(t){return(typeof t=="string"?t:""+t).replace(ry,`
`).replace(sy,"")}function R0(t,n){return n=A0(n),A0(t)===n}function kt(t,n,r,o,u,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||dn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&dn(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,r,o);break;case"style":Vr(t,o,d);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ml(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ml(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=ml(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ox.get(r)||r,qe(t,r,o))}}function eh(t,n,r,o,u,d){switch(r){case"style":Vr(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?dn(t,o):(typeof o=="number"||typeof o=="bigint")&&dn(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=t[xn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):qe(t,r,o)}}}function Cn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var x=r[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:kt(t,n,d,x,r,null)}}u&&kt(t,n,"srcSet",r.srcSet,r,null),o&&kt(t,n,"src",r.src,r,null);return;case"input":_t("invalid",t);var R=d=x=u=null,B=null,ee=null;for(o in r)if(r.hasOwnProperty(o)){var he=r[o];if(he!=null)switch(o){case"name":u=he;break;case"type":x=he;break;case"checked":B=he;break;case"defaultChecked":ee=he;break;case"value":d=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,n));break;default:kt(t,n,o,he,r,null)}}ji(t,d,R,B,ee,x,u,!1);return;case"select":_t("invalid",t),o=x=d=null;for(u in r)if(r.hasOwnProperty(u)&&(R=r[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:kt(t,n,u,R,r,null)}n=d,r=x,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):r!=null&&ri(t,!!o,r,!0);return;case"textarea":_t("invalid",t),d=u=o=null;for(x in r)if(r.hasOwnProperty(x)&&(R=r[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:kt(t,n,x,R,r,null)}Mn(t,o,u,d);return;case"option":for(B in r)r.hasOwnProperty(B)&&(o=r[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":kt(t,n,B,o,r,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)_t(Uo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in r)if(r.hasOwnProperty(ee)&&(o=r[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:kt(t,n,ee,o,r,null)}return;default:if(Si(n)){for(he in r)r.hasOwnProperty(he)&&(o=r[he],o!==void 0&&eh(t,n,he,o,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(o=r[R],o!=null&&kt(t,n,R,o,r,null))}function oy(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,R=null,B=null,ee=null,he=null;for(oe in r){var ge=r[oe];if(r.hasOwnProperty(oe)&&ge!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(oe)||kt(t,n,oe,null,o,ge)}}for(var ie in o){var oe=o[ie];if(ge=r[ie],o.hasOwnProperty(ie)&&(oe!=null||ge!=null))switch(ie){case"type":d=oe;break;case"name":u=oe;break;case"checked":ee=oe;break;case"defaultChecked":he=oe;break;case"value":x=oe;break;case"defaultValue":R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,n));break;default:oe!==ge&&kt(t,n,ie,oe,o,ge)}}Sn(t,x,R,B,ee,he,d,u);return;case"select":oe=x=R=ie=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":oe=B;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=r[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ie=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==B&&kt(t,n,u,d,o,B)}n=R,r=x,o=oe,ie!=null?ri(t,!!r,ie,!1):!!o!=!!r&&(n!=null?ri(t,!!r,n,!0):ri(t,!!r,r?[]:"",!1));return;case"textarea":oe=ie=null;for(R in r)if(u=r[R],r.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:kt(t,n,R,null,o,u)}for(x in o)if(u=o[x],d=r[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ie=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&kt(t,n,x,u,o,d)}Ft(t,ie,oe);return;case"option":for(var Ge in r)ie=r[Ge],r.hasOwnProperty(Ge)&&ie!=null&&!o.hasOwnProperty(Ge)&&(Ge==="selected"?t.selected=!1:kt(t,n,Ge,null,o,ie));for(B in o)ie=o[B],oe=r[B],o.hasOwnProperty(B)&&ie!==oe&&(ie!=null||oe!=null)&&(B==="selected"?t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol":kt(t,n,B,ie,o,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in r)ie=r[et],r.hasOwnProperty(et)&&ie!=null&&!o.hasOwnProperty(et)&&kt(t,n,et,null,o,ie);for(ee in o)if(ie=o[ee],oe=r[ee],o.hasOwnProperty(ee)&&ie!==oe&&(ie!=null||oe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,n));break;default:kt(t,n,ee,ie,o,oe)}return;default:if(Si(n)){for(var Xt in r)ie=r[Xt],r.hasOwnProperty(Xt)&&ie!==void 0&&!o.hasOwnProperty(Xt)&&eh(t,n,Xt,void 0,o,ie);for(he in o)ie=o[he],oe=r[he],!o.hasOwnProperty(he)||ie===oe||ie===void 0&&oe===void 0||eh(t,n,he,ie,o,oe);return}}for(var j in r)ie=r[j],r.hasOwnProperty(j)&&ie!=null&&!o.hasOwnProperty(j)&&kt(t,n,j,null,o,ie);for(ge in o)ie=o[ge],oe=r[ge],!o.hasOwnProperty(ge)||ie===oe||ie==null&&oe==null||kt(t,n,ge,ie,o,oe)}function C0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,x=u.initiatorType,R=u.duration;if(d&&R&&C0(x)){for(x=0,R=u.responseEnd,o+=1;o<r.length;o++){var B=r[o],ee=B.startTime;if(ee>R)break;var he=B.transferSize,ge=B.initiatorType;he&&C0(ge)&&(B=B.responseEnd,x+=he*(B<R?1:(R-ee)/(B-ee)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var th=null,nh=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function w0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ih(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function cy(){var t=window.event;return t&&t.type==="popstate"?t===ah?!1:(ah=t,!0):(ah=null,!1)}var U0=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(hy)}:U0;function hy(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function N0(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),vs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")No(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,No(r);for(var d=r.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[sr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=x}}else r==="body"&&No(t.ownerDocument.body);r=u}while(r);vs(n)}function O0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function rh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":rh(r),Qs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function dy(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function py(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=hi(t.nextSibling),t===null))return null;return t}function P0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function sh(t){return t.data==="$?"||t.data==="$~"}function oh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function my(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var lh=null;function F0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return hi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function z0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function I0(t,n,r){switch(n=uc(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function No(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qs(t)}var di=new Map,B0=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=V.d;V.d={f:gy,r:_y,D:vy,C:xy,L:Sy,m:yy,X:Ey,S:My,M:by};function gy(){var t=ua.f(),n=nc();return t||n}function _y(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?ng(n):ua.r(t)}var ms=typeof document>"u"?null:document;function H0(t,n,r){var o=ms;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),B0.has(u)||(B0.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),C(n),o.head.appendChild(n)))}}function vy(t){ua.D(t),H0("dns-prefetch",t,null)}function xy(t,n){ua.C(t,n),H0("preconnect",t,n)}function Sy(t,n,r){ua.L(t,n,r);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+at(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+at(r.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var d=u;switch(n){case"style":d=gs(t);break;case"script":d=_s(t)}di.has(d)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),di.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(d))||n==="script"&&o.querySelector(Po(d))||(n=o.createElement("link"),Cn(n,"link",t),C(n),o.head.appendChild(n)))}}function yy(t,n){ua.m(t,n);var r=ms;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_s(t)}if(!di.has(d)&&(t=g({rel:"modulepreload",href:t},n),di.set(d,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Po(d)))return}o=r.createElement("link"),Cn(o,"link",t),C(o),r.head.appendChild(o)}}}function My(t,n,r){ua.S(t,n,r);var o=ms;if(o&&t){var u=Ra(o).hoistableStyles,d=gs(t);n=n||"default";var x=u.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Oo(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=di.get(d))&&ch(t,r);var B=x=o.createElement("link");C(B),Cn(B,"link",t),B._p=new Promise(function(ee,he){B.onload=ee,B.onerror=he}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,hc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(d,x)}}}function Ey(t,n){ua.X(t,n);var r=ms;if(r&&t){var o=Ra(r).hoistableScripts,u=_s(t),d=o.get(u);d||(d=r.querySelector(Po(u)),d||(t=g({src:t,async:!0},n),(n=di.get(u))&&uh(t,n),d=r.createElement("script"),C(d),Cn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function by(t,n){ua.M(t,n);var r=ms;if(r&&t){var o=Ra(r).hoistableScripts,u=_s(t),d=o.get(u);d||(d=r.querySelector(Po(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=di.get(u))&&uh(t,n),d=r.createElement("script"),C(d),Cn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function V0(t,n,r,o){var u=(u=ae.current)?fc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=gs(r.href),r=Ra(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=gs(r.href);var d=Ra(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Oo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),di.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},di.set(t,r),d||Ty(u,t,r,x.state))),n&&o===null)throw Error(a(528,""));return x}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(r),r=Ra(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function gs(t){return'href="'+at(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function G0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ty(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",r),C(n),t.head.appendChild(n))}function _s(t){return'[src="'+at(t)+'"]'}function Po(t){return"script[async]"+t}function k0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(r.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),Cn(o,"style",u),hc(o,r.precedence,t),n.instance=o;case"stylesheet":u=gs(r.href);var d=t.querySelector(Oo(u));if(d)return n.state.loading|=4,n.instance=d,C(d),d;o=G0(r),(u=di.get(u))&&ch(o,u),d=(t.ownerDocument||t).createElement("link"),C(d);var x=d;return x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),Cn(d,"link",o),n.state.loading|=4,hc(d,r.precedence,t),n.instance=d;case"script":return d=_s(r.src),(u=t.querySelector(Po(d)))?(n.instance=u,C(u),u):(o=r,(u=di.get(d))&&(o=g({},r),uh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,r.precedence,t));return n.instance}function hc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function X0(t,n,r){if(dc===null){var o=new Map,u=dc=new Map;u.set(r,o)}else u=dc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[sr]||d[sn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function q0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Ay(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ry(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=gs(o.href),d=n.querySelector(Oo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=d,C(d);return}d=n.ownerDocument||n,o=G0(o),(u=di.get(u))&&ch(o,u),d=d.createElement("link"),C(d);var x=d;x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),Cn(d,"link",o),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=pc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var fh=0;function Cy(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&fh===0&&(fh=62500*ly());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>fh?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(wy,t),mc=null,pc.call(t))}function wy(t,n){if(!(n.state.loading&4)){var r=mc.get(t);if(r)var o=r.get(null);else{r=new Map,mc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),o=x)}o&&r.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=r.get(x)||o,d===o&&r.set(null,u),r.set(x,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:P,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Dy(t,n,r,o,u,d,x,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function j0(t,n,r,o,u,d,x,R,B,ee,he,ge){return t=new Dy(t,n,r,x,B,ee,he,ge,R),n=1,d===!0&&(n|=24),d=Kn(3,null,null,n),t.current=d,d.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},ju(d),t}function Y0(t){return t?(t=Yr,t):Yr}function K0(t,n,r,o,u,d){u=Y0(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Pa(t,o,n),r!==null&&(qn(r,t,n),po(r,t,n))}function Z0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function hh(t,n){Z0(t,n),(t=t.alternate)&&Z0(t,n)}function Q0(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&qn(n,t,67108864),hh(t,67108864)}}function J0(t){if(t.tag===13||t.tag===31){var n=ei();n=Ys(n);var r=fr(t,n);r!==null&&qn(r,t,n),hh(t,n)}}var _c=!0;function Uy(t,n,r,o){var u=F.T;F.T=null;var d=V.p;try{V.p=2,dh(t,n,r,o)}finally{V.p=d,F.T=u}}function Ly(t,n,r,o){var u=F.T;F.T=null;var d=V.p;try{V.p=8,dh(t,n,r,o)}finally{V.p=d,F.T=u}}function dh(t,n,r,o){if(_c){var u=ph(o);if(u===null)$f(t,n,o,vc,r),e_(t,o);else if(Oy(u,t,n,r,o))o.stopPropagation();else if(e_(t,o),n&4&&-1<Ny.indexOf(t)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Me(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var B=1<<31-Pe(x);R.entanglements[1]|=B,x&=~B}Fi(d),(Lt&6)===0&&(ec=E()+500,Do(0))}}break;case 31:case 13:R=fr(d,2),R!==null&&qn(R,d,2),nc(),hh(d,2)}if(d=ph(o),d===null&&$f(t,n,o,vc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(t,n,o,null,r)}}function ph(t){return t=mu(t),mh(t)}var vc=null;function mh(t){if(vc=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function $0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case de:return 2;case xe:return 8;case ue:case Ke:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var gh=!1,Wa=null,ja=null,Ya=null,zo=new Map,Io=new Map,Ka=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Bo(t,n,r,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Q0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Oy(t,n,r,o,u){switch(n){case"focusin":return Wa=Bo(Wa,t,n,r,o,u),!0;case"dragenter":return ja=Bo(ja,t,n,r,o,u),!0;case"mouseover":return Ya=Bo(Ya,t,n,r,o,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Bo(zo.get(d)||null,t,n,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Io.set(d,Bo(Io.get(d)||null,t,n,r,o,u)),!0}return!1}function t_(t){var n=Ta(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Li(t.priority,function(){J0(r)});return}}else if(n===31){if(n=h(r),n!==null){t.blockedOn=n,Li(t.priority,function(){J0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=ph(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);pu=o,r.target.dispatchEvent(o),pu=null}else return n=Aa(r),n!==null&&Q0(n),t.blockedOn=r,!1;n.shift()}return!0}function n_(t,n,r){xc(t)&&r.delete(n)}function Py(){gh=!1,Wa!==null&&xc(Wa)&&(Wa=null),ja!==null&&xc(ja)&&(ja=null),Ya!==null&&xc(Ya)&&(Ya=null),zo.forEach(n_),Io.forEach(n_)}function Sc(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Py)))}var yc=null;function i_(t){yc!==t&&(yc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(mh(o||r)===null)continue;break}var d=Aa(r);d!==null&&(t.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function vs(t){function n(B){return Sc(B,t)}Wa!==null&&Sc(Wa,t),ja!==null&&Sc(ja,t),Ya!==null&&Sc(Ya,t),zo.forEach(n),Io.forEach(n);for(var r=0;r<Ka.length;r++){var o=Ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(r=Ka[0],r.blockedOn===null);)t_(r),r.blockedOn===null&&Ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],x=u[xn]||null;if(typeof d=="function")x||i_(r);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[xn]||null)R=x.formAction;else if(mh(u)!==null)continue}else R=x.action;typeof R=="function"?r[o+1]=R:(r.splice(o,3),o-=3),i_(r)}}}function a_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _h(t){this._internalRoot=t}Mc.prototype.render=_h.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ei();K0(r,o,t,n,null,null)},Mc.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;K0(t.current,2,null,t,null,null),nc(),n[xi]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ks();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Ka.length&&n!==0&&n<Ka[r].priority;r++);Ka.splice(r,0,t),r===0&&t_(t)}};var r_=e.version;if(r_!=="19.2.3")throw Error(a(527,r_,"19.2.3"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Ee=Ec.inject(Fy),be=Ec}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",u=hg,d=dg,x=pg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=j0(t,1,!1,null,null,r,o,null,u,d,x,a_),t[xi]=n.current,Jf(t),new _h(n)},Vo.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,u="",d=hg,x=dg,R=pg,B=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),n=j0(t,1,!0,n,r??null,o,u,B,d,x,R,a_),n.context=Y0(null),r=n.current,o=ei(),o=Ys(o),u=Oa(o),u.callback=null,Pa(r,u,o),r=o,n.current.lanes=r,Dn(n,r),Fi(n),t[xi]=n.current,Jf(t),new Mc(n)},Vo.version="19.2.3",Vo}var m_;function Wy(){if(m_)return Sh.exports;m_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sh.exports=qy(),Sh.exports}var jy=Wy();const Yy=ol(jy);var bh,g_;function Ky(){if(g_)return bh;g_=1;var s=typeof Element<"u",e=typeof Map=="function",i=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(c,f){if(c===f)return!0;if(c&&f&&typeof c=="object"&&typeof f=="object"){if(c.constructor!==f.constructor)return!1;var h,m,p;if(Array.isArray(c)){if(h=c.length,h!=f.length)return!1;for(m=h;m--!==0;)if(!l(c[m],f[m]))return!1;return!0}var _;if(e&&c instanceof Map&&f instanceof Map){if(c.size!==f.size)return!1;for(_=c.entries();!(m=_.next()).done;)if(!f.has(m.value[0]))return!1;for(_=c.entries();!(m=_.next()).done;)if(!l(m.value[1],f.get(m.value[0])))return!1;return!0}if(i&&c instanceof Set&&f instanceof Set){if(c.size!==f.size)return!1;for(_=c.entries();!(m=_.next()).done;)if(!f.has(m.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(c)&&ArrayBuffer.isView(f)){if(h=c.length,h!=f.length)return!1;for(m=h;m--!==0;)if(c[m]!==f[m])return!1;return!0}if(c.constructor===RegExp)return c.source===f.source&&c.flags===f.flags;if(c.valueOf!==Object.prototype.valueOf&&typeof c.valueOf=="function"&&typeof f.valueOf=="function")return c.valueOf()===f.valueOf();if(c.toString!==Object.prototype.toString&&typeof c.toString=="function"&&typeof f.toString=="function")return c.toString()===f.toString();if(p=Object.keys(c),h=p.length,h!==Object.keys(f).length)return!1;for(m=h;m--!==0;)if(!Object.prototype.hasOwnProperty.call(f,p[m]))return!1;if(s&&c instanceof Element)return!1;for(m=h;m--!==0;)if(!((p[m]==="_owner"||p[m]==="__v"||p[m]==="__o")&&c.$$typeof)&&!l(c[p[m]],f[p[m]]))return!1;return!0}return c!==c&&f!==f}return bh=function(f,h){try{return l(f,h)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},bh}var Zy=Ky();const Qy=ol(Zy);var Th,__;function Jy(){if(__)return Th;__=1;var s=function(e,i,a,l,c,f,h,m){if(!e){var p;if(i===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var _=[a,l,c,f,h,m],g=0;p=new Error(i.replace(/%s/g,function(){return _[g++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return Th=s,Th}var $y=Jy();const v_=ol($y);var Ah,x_;function eM(){return x_||(x_=1,Ah=function(e,i,a,l){var c=a?a.call(l,e,i):void 0;if(c!==void 0)return!!c;if(e===i)return!0;if(typeof e!="object"||!e||typeof i!="object"||!i)return!1;var f=Object.keys(e),h=Object.keys(i);if(f.length!==h.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(i),p=0;p<f.length;p++){var _=f[p];if(!m(_))return!1;var g=e[_],v=i[_];if(c=a?a.call(l,g,v,_):void 0,c===!1||c===void 0&&g!==v)return!1}return!0}),Ah}var tM=eM();const nM=ol(tM);var Iv=(s=>(s.BASE="base",s.BODY="body",s.HEAD="head",s.HTML="html",s.LINK="link",s.META="meta",s.NOSCRIPT="noscript",s.SCRIPT="script",s.STYLE="style",s.TITLE="title",s.FRAGMENT="Symbol(react.fragment)",s))(Iv||{}),Rh={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},S_=Object.values(Iv),pp={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},iM=Object.entries(pp).reduce((s,[e,i])=>(s[i]=e,s),{}),wi="data-rh",Ps={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Fs=(s,e)=>{for(let i=s.length-1;i>=0;i-=1){const a=s[i];if(Object.prototype.hasOwnProperty.call(a,e))return a[e]}return null},aM=s=>{let e=Fs(s,"title");const i=Fs(s,Ps.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),i&&e)return i.replace(/%s/g,()=>e);const a=Fs(s,Ps.DEFAULT_TITLE);return e||a||void 0},rM=s=>Fs(s,Ps.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ch=(s,e)=>e.filter(i=>typeof i[s]<"u").map(i=>i[s]).reduce((i,a)=>({...i,...a}),{}),sM=(s,e)=>e.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,a)=>{if(!i.length){const l=Object.keys(a);for(let c=0;c<l.length;c+=1){const h=l[c].toLowerCase();if(s.indexOf(h)!==-1&&a[h])return i.concat(a)}}return i},[]),oM=s=>console&&typeof console.warn=="function"&&console.warn(s),Go=(s,e,i)=>{const a={};return i.filter(l=>Array.isArray(l[s])?!0:(typeof l[s]<"u"&&oM(`Helmet: ${s} should be of type "Array". Instead found type "${typeof l[s]}"`),!1)).map(l=>l[s]).reverse().reduce((l,c)=>{const f={};c.filter(m=>{let p;const _=Object.keys(m);for(let v=0;v<_.length;v+=1){const y=_[v],b=y.toLowerCase();e.indexOf(b)!==-1&&!(p==="rel"&&m[p].toLowerCase()==="canonical")&&!(b==="rel"&&m[b].toLowerCase()==="stylesheet")&&(p=b),e.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(p=y)}if(!p||!m[p])return!1;const g=m[p].toLowerCase();return a[p]||(a[p]={}),f[p]||(f[p]={}),a[p][g]?!1:(f[p][g]=!0,!0)}).reverse().forEach(m=>l.push(m));const h=Object.keys(f);for(let m=0;m<h.length;m+=1){const p=h[m],_={...a[p],...f[p]};a[p]=_}return l},[]).reverse()},lM=(s,e)=>{if(Array.isArray(s)&&s.length){for(let i=0;i<s.length;i+=1)if(s[i][e])return!0}return!1},cM=s=>({baseTag:sM(["href"],s),bodyAttributes:Ch("bodyAttributes",s),defer:Fs(s,Ps.DEFER),encode:Fs(s,Ps.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ch("htmlAttributes",s),linkTags:Go("link",["rel","href"],s),metaTags:Go("meta",["name","charset","http-equiv","property","itemprop"],s),noscriptTags:Go("noscript",["innerHTML"],s),onChangeClientState:rM(s),scriptTags:Go("script",["src","innerHTML"],s),styleTags:Go("style",["cssText"],s),title:aM(s),titleAttributes:Ch("titleAttributes",s),prioritizeSeoTags:lM(s,Ps.PRIORITIZE_SEO_TAGS)}),Bv=s=>Array.isArray(s)?s.join(""):s,uM=(s,e)=>{const i=Object.keys(s);for(let a=0;a<i.length;a+=1)if(e[i[a]]&&e[i[a]].includes(s[i[a]]))return!0;return!1},wh=(s,e)=>Array.isArray(s)?s.reduce((i,a)=>(uM(a,e)?i.priority.push(a):i.default.push(a),i),{priority:[],default:[]}):{default:s,priority:[]},y_=(s,e)=>({...s,[e]:void 0}),fM=["noscript","script","style"],hd=(s,e=!0)=>e===!1?String(s):String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Hv=s=>Object.keys(s).reduce((e,i)=>{const a=typeof s[i]<"u"?`${i}="${s[i]}"`:`${i}`;return e?`${e} ${a}`:a},""),hM=(s,e,i,a)=>{const l=Hv(i),c=Bv(e);return l?`<${s} ${wi}="true" ${l}>${hd(c,a)}</${s}>`:`<${s} ${wi}="true">${hd(c,a)}</${s}>`},dM=(s,e,i=!0)=>e.reduce((a,l)=>{const c=l,f=Object.keys(c).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,_)=>{const g=typeof c[_]>"u"?_:`${_}="${hd(c[_],i)}"`;return p?`${p} ${g}`:g},""),h=c.innerHTML||c.cssText||"",m=fM.indexOf(s)===-1;return`${a}<${s} ${wi}="true" ${f}${m?"/>":`>${h}</${s}>`}`},""),Vv=(s,e={})=>Object.keys(s).reduce((i,a)=>{const l=pp[a];return i[l||a]=s[a],i},e),pM=(s,e,i)=>{const a={key:e,[wi]:!0},l=Vv(i,a);return[On.createElement("title",l,e)]},jc=(s,e)=>e.map((i,a)=>{const l={key:a,[wi]:!0};return Object.keys(i).forEach(c=>{const h=pp[c]||c;if(h==="innerHTML"||h==="cssText"){const m=i.innerHTML||i.cssText;l.dangerouslySetInnerHTML={__html:m}}else l[h]=i[c]}),On.createElement(s,l)}),mi=(s,e,i=!0)=>{switch(s){case"title":return{toComponent:()=>pM(s,e.title,e.titleAttributes),toString:()=>hM(s,e.title,e.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Vv(e),toString:()=>Hv(e)};default:return{toComponent:()=>jc(s,e),toString:()=>dM(s,e,i)}}},mM=({metaTags:s,linkTags:e,scriptTags:i,encode:a})=>{const l=wh(s,Rh.meta),c=wh(e,Rh.link),f=wh(i,Rh.script);return{priorityMethods:{toComponent:()=>[...jc("meta",l.priority),...jc("link",c.priority),...jc("script",f.priority)],toString:()=>`${mi("meta",l.priority,a)} ${mi("link",c.priority,a)} ${mi("script",f.priority,a)}`},metaTags:l.default,linkTags:c.default,scriptTags:f.default}},gM=s=>{const{baseTag:e,bodyAttributes:i,encode:a=!0,htmlAttributes:l,noscriptTags:c,styleTags:f,title:h="",titleAttributes:m,prioritizeSeoTags:p}=s;let{linkTags:_,metaTags:g,scriptTags:v}=s,y={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:y,linkTags:_,metaTags:g,scriptTags:v}=mM(s)),{priority:y,base:mi("base",e,a),bodyAttributes:mi("bodyAttributes",i,a),htmlAttributes:mi("htmlAttributes",l,a),link:mi("link",_,a),meta:mi("meta",g,a),noscript:mi("noscript",c,a),script:mi("script",v,a),style:mi("style",f,a),title:mi("title",{title:h,titleAttributes:m},a)}},dd=gM,bc=[],Gv=!!(typeof window<"u"&&window.document&&window.document.createElement),pd=class{instances=[];canUseDOM=Gv;context;value={setHelmet:s=>{this.context.helmet=s},helmetInstances:{get:()=>this.canUseDOM?bc:this.instances,add:s=>{(this.canUseDOM?bc:this.instances).push(s)},remove:s=>{const e=(this.canUseDOM?bc:this.instances).indexOf(s);(this.canUseDOM?bc:this.instances).splice(e,1)}}};constructor(s,e){this.context=s,this.canUseDOM=e||!1,e||(s.helmet=dd({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},_M={},kv=On.createContext(_M),Xv=class qv extends dt.Component{static canUseDOM=Gv;helmetData;constructor(e){super(e),this.helmetData=new pd(this.props.context||{},qv.canUseDOM)}render(){return On.createElement(kv.Provider,{value:this.helmetData.value},this.props.children)}},xs=(s,e)=>{const i=document.head||document.querySelector("head"),a=i.querySelectorAll(`${s}[${wi}]`),l=[].slice.call(a),c=[];let f;return e&&e.length&&e.forEach(h=>{const m=document.createElement(s);for(const p in h)if(Object.prototype.hasOwnProperty.call(h,p))if(p==="innerHTML")m.innerHTML=h.innerHTML;else if(p==="cssText")m.styleSheet?m.styleSheet.cssText=h.cssText:m.appendChild(document.createTextNode(h.cssText));else{const _=p,g=typeof h[_]>"u"?"":h[_];m.setAttribute(p,g)}m.setAttribute(wi,"true"),l.some((p,_)=>(f=_,m.isEqualNode(p)))?l.splice(f,1):c.push(m)}),l.forEach(h=>h.parentNode?.removeChild(h)),c.forEach(h=>i.appendChild(h)),{oldTags:l,newTags:c}},md=(s,e)=>{const i=document.getElementsByTagName(s)[0];if(!i)return;const a=i.getAttribute(wi),l=a?a.split(","):[],c=[...l],f=Object.keys(e);for(const h of f){const m=e[h]||"";i.getAttribute(h)!==m&&i.setAttribute(h,m),l.indexOf(h)===-1&&l.push(h);const p=c.indexOf(h);p!==-1&&c.splice(p,1)}for(let h=c.length-1;h>=0;h-=1)i.removeAttribute(c[h]);l.length===c.length?i.removeAttribute(wi):i.getAttribute(wi)!==f.join(",")&&i.setAttribute(wi,f.join(","))},vM=(s,e)=>{typeof s<"u"&&document.title!==s&&(document.title=Bv(s)),md("title",e)},M_=(s,e)=>{const{baseTag:i,bodyAttributes:a,htmlAttributes:l,linkTags:c,metaTags:f,noscriptTags:h,onChangeClientState:m,scriptTags:p,styleTags:_,title:g,titleAttributes:v}=s;md("body",a),md("html",l),vM(g,v);const y={baseTag:xs("base",i),linkTags:xs("link",c),metaTags:xs("meta",f),noscriptTags:xs("noscript",h),scriptTags:xs("script",p),styleTags:xs("style",_)},b={},A={};Object.keys(y).forEach(M=>{const{newTags:S,oldTags:O}=y[M];S.length&&(b[M]=S),O.length&&(A[M]=y[M].oldTags)}),e&&e(),m(s,b,A)},ko=null,xM=s=>{ko&&cancelAnimationFrame(ko),s.defer?ko=requestAnimationFrame(()=>{M_(s,()=>{ko=null})}):(M_(s),ko=null)},SM=xM,E_=class extends dt.Component{rendered=!1;shouldComponentUpdate(s){return!nM(s,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:s}=this.props.context;s.remove(this),this.emitChange()}emitChange(){const{helmetInstances:s,setHelmet:e}=this.props.context;let i=null;const a=cM(s.get().map(l=>{const c={...l.props};return delete c.context,c}));Xv.canUseDOM?SM(a):dd&&(i=dd(a)),e(i)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:s}=this.props.context;s.add(this),this.emitChange()}render(){return this.init(),null}},yM=class extends dt.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(s){return!Qy(y_(this.props,"helmetData"),y_(s,"helmetData"))}mapNestedChildrenToProps(s,e){if(!e)return null;switch(s.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${s.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(s,e,i,a){return{...e,[s.type]:[...e[s.type]||[],{...i,...this.mapNestedChildrenToProps(s,a)}]}}mapObjectTypeChildren(s,e,i,a){switch(s.type){case"title":return{...e,[s.type]:a,titleAttributes:{...i}};case"body":return{...e,bodyAttributes:{...i}};case"html":return{...e,htmlAttributes:{...i}};default:return{...e,[s.type]:{...i}}}}mapArrayTypeChildrenToProps(s,e){let i={...e};return Object.keys(s).forEach(a=>{i={...i,[a]:s[a]}}),i}warnOnInvalidChildren(s,e){return v_(S_.some(i=>s.type===i),typeof s.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${S_.join(", ")} are allowed. Helmet does not support rendering <${s.type}> elements. Refer to our API for more information.`),v_(!e||typeof e=="string"||Array.isArray(e)&&!e.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${s.type}>. Did you forget to wrap your children in braces? ( <${s.type}>{\`\`}</${s.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(s,e){let i={};return On.Children.forEach(s,a=>{if(!a||!a.props)return;const{children:l,...c}=a.props,f=Object.keys(c).reduce((m,p)=>(m[iM[p]||p]=c[p],m),{});let{type:h}=a;switch(typeof h=="symbol"?h=h.toString():this.warnOnInvalidChildren(a,l),h){case"Symbol(react.fragment)":e=this.mapChildrenToProps(l,e);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(a,i,f,l);break;default:e=this.mapObjectTypeChildren(a,e,f,l);break}}),this.mapArrayTypeChildrenToProps(i,e)}render(){const{children:s,...e}=this.props;let i={...e},{helmetData:a}=e;if(s&&(i=this.mapChildrenToProps(s,i)),a&&!(a instanceof pd)){const l=a;a=new pd(l.context,!0),delete i.helmetData}return a?On.createElement(E_,{...i,context:a.value}):On.createElement(kv.Consumer,null,l=>On.createElement(E_,{...i,context:l}))}};const it=s=>typeof s=="string",Xo=()=>{let s,e;const i=new Promise((a,l)=>{s=a,e=l});return i.resolve=s,i.reject=e,i},b_=s=>s==null?"":""+s,MM=(s,e,i)=>{s.forEach(a=>{e[a]&&(i[a]=e[a])})},EM=/###/g,T_=s=>s&&s.indexOf("###")>-1?s.replace(EM,"."):s,A_=s=>!s||it(s),el=(s,e,i)=>{const a=it(e)?e.split("."):e;let l=0;for(;l<a.length-1;){if(A_(s))return{};const c=T_(a[l]);!s[c]&&i&&(s[c]=new i),Object.prototype.hasOwnProperty.call(s,c)?s=s[c]:s={},++l}return A_(s)?{}:{obj:s,k:T_(a[l])}},R_=(s,e,i)=>{const{obj:a,k:l}=el(s,e,Object);if(a!==void 0||e.length===1){a[l]=i;return}let c=e[e.length-1],f=e.slice(0,e.length-1),h=el(s,f,Object);for(;h.obj===void 0&&f.length;)c=`${f[f.length-1]}.${c}`,f=f.slice(0,f.length-1),h=el(s,f,Object),h?.obj&&typeof h.obj[`${h.k}.${c}`]<"u"&&(h.obj=void 0);h.obj[`${h.k}.${c}`]=i},bM=(s,e,i,a)=>{const{obj:l,k:c}=el(s,e,Object);l[c]=l[c]||[],l[c].push(i)},eu=(s,e)=>{const{obj:i,k:a}=el(s,e);if(i&&Object.prototype.hasOwnProperty.call(i,a))return i[a]},TM=(s,e,i)=>{const a=eu(s,i);return a!==void 0?a:eu(e,i)},Wv=(s,e,i)=>{for(const a in e)a!=="__proto__"&&a!=="constructor"&&(a in s?it(s[a])||s[a]instanceof String||it(e[a])||e[a]instanceof String?i&&(s[a]=e[a]):Wv(s[a],e[a],i):s[a]=e[a]);return s},Ss=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var AM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const RM=s=>it(s)?s.replace(/[&<>"'\/]/g,e=>AM[e]):s;class CM{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const a=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,a),this.regExpQueue.push(e),a}}const wM=[" ",",","?","!",";"],DM=new CM(20),UM=(s,e,i)=>{e=e||"",i=i||"";const a=wM.filter(f=>e.indexOf(f)<0&&i.indexOf(f)<0);if(a.length===0)return!0;const l=DM.getRegExp(`(${a.map(f=>f==="?"?"\\?":f).join("|")})`);let c=!l.test(s);if(!c){const f=s.indexOf(i);f>0&&!l.test(s.substring(0,f))&&(c=!0)}return c},gd=(s,e,i=".")=>{if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const a=e.split(i);let l=s;for(let c=0;c<a.length;){if(!l||typeof l!="object")return;let f,h="";for(let m=c;m<a.length;++m)if(m!==c&&(h+=i),h+=a[m],f=l[h],f!==void 0){if(["string","number","boolean"].indexOf(typeof f)>-1&&m<a.length-1)continue;c+=m-c+1;break}l=f}return l},nl=s=>s?.replace("_","-"),LM={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console?.[s]?.apply?.(console,e)}};class tu{constructor(e,i={}){this.init(e,i)}init(e,i={}){this.prefix=i.prefix||"i18next:",this.logger=e||LM,this.options=i,this.debug=i.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,a,l){return l&&!this.debug?null:(it(e[0])&&(e[0]=`${a}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new tu(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new tu(this.logger,e)}}var Bi=new tu;class cu{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const l=this.observers[a].get(i)||0;this.observers[a].set(i,l+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e,...i){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([l,c])=>{for(let f=0;f<c;f++)l(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([l,c])=>{for(let f=0;f<c;f++)l.apply(l,[e,...i])})}}class C_ extends cu{constructor(e,i={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,a,l={}){const c=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,f=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure;let h;e.indexOf(".")>-1?h=e.split("."):(h=[e,i],a&&(Array.isArray(a)?h.push(...a):it(a)&&c?h.push(...a.split(c)):h.push(a)));const m=eu(this.data,h);return!m&&!i&&!a&&e.indexOf(".")>-1&&(e=h[0],i=h[1],a=h.slice(2).join(".")),m||!f||!it(a)?m:gd(this.data?.[e]?.[i],a,c)}addResource(e,i,a,l,c={silent:!1}){const f=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let h=[e,i];a&&(h=h.concat(f?a.split(f):a)),e.indexOf(".")>-1&&(h=e.split("."),l=i,i=h[1]),this.addNamespaces(i),R_(this.data,h,l),c.silent||this.emit("added",e,i,a,l)}addResources(e,i,a,l={silent:!1}){for(const c in a)(it(a[c])||Array.isArray(a[c]))&&this.addResource(e,i,c,a[c],{silent:!0});l.silent||this.emit("added",e,i,a)}addResourceBundle(e,i,a,l,c,f={silent:!1,skipCopy:!1}){let h=[e,i];e.indexOf(".")>-1&&(h=e.split("."),l=a,a=i,i=h[1]),this.addNamespaces(i);let m=eu(this.data,h)||{};f.skipCopy||(a=JSON.parse(JSON.stringify(a))),l?Wv(m,a,c):m={...m,...a},R_(this.data,h,m),f.silent||this.emit("added",e,i,a)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(l=>i[l]&&Object.keys(i[l]).length>0)}toJSON(){return this.data}}var jv={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,i,a,l){return s.forEach(c=>{e=this.processors[c]?.process(e,i,a,l)??e}),e}};const Yv=Symbol("i18next/PATH_KEY");function NM(){const s=[],e=Object.create(null);let i;return e.get=(a,l)=>(i?.revoke?.(),l===Yv?s:(s.push(l),i=Proxy.revocable(a,e),i.proxy)),Proxy.revocable(Object.create(null),e).proxy}function _d(s,e){const{[Yv]:i}=s(NM());return i.join(e?.keySeparator??".")}const w_={},Dh=s=>!it(s)&&typeof s!="boolean"&&typeof s!="number";class nu extends cu{constructor(e,i={}){super(),MM(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Bi.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,i={interpolation:{}}){const a={...i};if(e==null)return!1;const l=this.resolve(e,a);if(l?.res===void 0)return!1;const c=Dh(l.res);return!(a.returnObjects===!1&&c)}extractFromKey(e,i){let a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let c=i.ns||this.options.defaultNS||[];const f=a&&e.indexOf(a)>-1,h=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!UM(e,a,l);if(f&&!h){const m=e.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:e,namespaces:it(c)?[c]:c};const p=e.split(a);(a!==l||a===l&&this.options.ns.indexOf(p[0])>-1)&&(c=p.shift()),e=p.join(l)}return{key:e,namespaces:it(c)?[c]:c}}translate(e,i,a){let l=typeof i=="object"?{...i}:i;if(typeof l!="object"&&this.options.overloadTranslationOptionHandler&&(l=this.options.overloadTranslationOptionHandler(arguments)),typeof l=="object"&&(l={...l}),l||(l={}),e==null)return"";typeof e=="function"&&(e=_d(e,{...this.options,...l})),Array.isArray(e)||(e=[String(e)]);const c=l.returnDetails!==void 0?l.returnDetails:this.options.returnDetails,f=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,{key:h,namespaces:m}=this.extractFromKey(e[e.length-1],l),p=m[m.length-1];let _=l.nsSeparator!==void 0?l.nsSeparator:this.options.nsSeparator;_===void 0&&(_=":");const g=l.lng||this.language,v=l.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(g?.toLowerCase()==="cimode")return v?c?{res:`${p}${_}${h}`,usedKey:h,exactUsedKey:h,usedLng:g,usedNS:p,usedParams:this.getUsedParamsDetails(l)}:`${p}${_}${h}`:c?{res:h,usedKey:h,exactUsedKey:h,usedLng:g,usedNS:p,usedParams:this.getUsedParamsDetails(l)}:h;const y=this.resolve(e,l);let b=y?.res;const A=y?.usedKey||h,M=y?.exactUsedKey||h,S=["[object Number]","[object Function]","[object RegExp]"],O=l.joinArrays!==void 0?l.joinArrays:this.options.joinArrays,P=!this.i18nFormat||this.i18nFormat.handleAsObject,N=l.count!==void 0&&!it(l.count),z=nu.hasDefaultValue(l),I=N?this.pluralResolver.getSuffix(g,l.count,l):"",D=l.ordinal&&N?this.pluralResolver.getSuffix(g,l.count,{ordinal:!1}):"",Y=N&&!l.ordinal&&l.count===0,T=Y&&l[`defaultValue${this.options.pluralSeparator}zero`]||l[`defaultValue${I}`]||l[`defaultValue${D}`]||l.defaultValue;let w=b;P&&!b&&z&&(w=T);const H=Dh(w),K=Object.prototype.toString.apply(w);if(P&&w&&H&&S.indexOf(K)<0&&!(it(O)&&Array.isArray(w))){if(!l.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Q=this.options.returnedObjectHandler?this.options.returnedObjectHandler(A,w,{...l,ns:m}):`key '${h} (${this.language})' returned an object instead of string.`;return c?(y.res=Q,y.usedParams=this.getUsedParamsDetails(l),y):Q}if(f){const Q=Array.isArray(w),le=Q?[]:{},ce=Q?M:A;for(const F in w)if(Object.prototype.hasOwnProperty.call(w,F)){const V=`${ce}${f}${F}`;z&&!b?le[F]=this.translate(V,{...l,defaultValue:Dh(T)?T[F]:void 0,joinArrays:!1,ns:m}):le[F]=this.translate(V,{...l,joinArrays:!1,ns:m}),le[F]===V&&(le[F]=w[F])}b=le}}else if(P&&it(O)&&Array.isArray(b))b=b.join(O),b&&(b=this.extendTranslation(b,e,l,a));else{let Q=!1,le=!1;!this.isValidLookup(b)&&z&&(Q=!0,b=T),this.isValidLookup(b)||(le=!0,b=h);const F=(l.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&le?void 0:b,V=z&&T!==b&&this.options.updateMissing;if(le||Q||V){if(this.logger.log(V?"updateKey":"missingKey",g,p,h,V?T:b),f){const U=this.resolve(h,{...l,keySeparator:!1});U&&U.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let te=[];const ye=this.languageUtils.getFallbackCodes(this.options.fallbackLng,l.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ye&&ye[0])for(let U=0;U<ye.length;U++)te.push(ye[U]);else this.options.saveMissingTo==="all"?te=this.languageUtils.toResolveHierarchy(l.lng||this.language):te.push(l.lng||this.language);const Se=(U,$,pe)=>{const Ae=z&&pe!==b?pe:F;this.options.missingKeyHandler?this.options.missingKeyHandler(U,p,$,Ae,V,l):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(U,p,$,Ae,V,l),this.emit("missingKey",U,p,$,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&N?te.forEach(U=>{const $=this.pluralResolver.getSuffixes(U,l);Y&&l[`defaultValue${this.options.pluralSeparator}zero`]&&$.indexOf(`${this.options.pluralSeparator}zero`)<0&&$.push(`${this.options.pluralSeparator}zero`),$.forEach(pe=>{Se([U],h+pe,l[`defaultValue${pe}`]||T)})}):Se(te,h,T))}b=this.extendTranslation(b,e,l,y,a),le&&b===h&&this.options.appendNamespaceToMissingKey&&(b=`${p}${_}${h}`),(le||Q)&&this.options.parseMissingKeyHandler&&(b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}${_}${h}`:h,Q?b:void 0,l))}return c?(y.res=b,y.usedParams=this.getUsedParamsDetails(l),y):b}extendTranslation(e,i,a,l,c){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const m=it(e)&&(a?.interpolation?.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(m){const g=e.match(this.interpolator.nestingRegexp);p=g&&g.length}let _=a.replace&&!it(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(_={...this.options.interpolation.defaultVariables,..._}),e=this.interpolator.interpolate(e,_,a.lng||this.language||l.usedLng,a),m){const g=e.match(this.interpolator.nestingRegexp),v=g&&g.length;p<v&&(a.nest=!1)}!a.lng&&l&&l.res&&(a.lng=this.language||l.usedLng),a.nest!==!1&&(e=this.interpolator.nest(e,(...g)=>c?.[0]===g[0]&&!a.context?(this.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${i[0]}`),null):this.translate(...g,i),a)),a.interpolation&&this.interpolator.reset()}const f=a.postProcess||this.options.postProcess,h=it(f)?[f]:f;return e!=null&&h?.length&&a.applyPostProcessor!==!1&&(e=jv.handle(h,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...l,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),e}resolve(e,i={}){let a,l,c,f,h;return it(e)&&(e=[e]),e.forEach(m=>{if(this.isValidLookup(a))return;const p=this.extractFromKey(m,i),_=p.key;l=_;let g=p.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const v=i.count!==void 0&&!it(i.count),y=v&&!i.ordinal&&i.count===0,b=i.context!==void 0&&(it(i.context)||typeof i.context=="number")&&i.context!=="",A=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);g.forEach(M=>{this.isValidLookup(a)||(h=M,!w_[`${A[0]}-${M}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(h)&&(w_[`${A[0]}-${M}`]=!0,this.logger.warn(`key "${l}" for languages "${A.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),A.forEach(S=>{if(this.isValidLookup(a))return;f=S;const O=[_];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(O,_,S,M,i);else{let N;v&&(N=this.pluralResolver.getSuffix(S,i.count,i));const z=`${this.options.pluralSeparator}zero`,I=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(i.ordinal&&N.indexOf(I)===0&&O.push(_+N.replace(I,this.options.pluralSeparator)),O.push(_+N),y&&O.push(_+z)),b){const D=`${_}${this.options.contextSeparator||"_"}${i.context}`;O.push(D),v&&(i.ordinal&&N.indexOf(I)===0&&O.push(D+N.replace(I,this.options.pluralSeparator)),O.push(D+N),y&&O.push(D+z))}}let P;for(;P=O.pop();)this.isValidLookup(a)||(c=P,a=this.getResource(S,M,P,i))}))})}),{res:a,usedKey:l,exactUsedKey:c,usedLng:f,usedNS:h}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,a,l={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,i,a,l):this.resourceStore.getResource(e,i,a,l)}getUsedParamsDetails(e={}){const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=e.replace&&!it(e.replace);let l=a?e.replace:e;if(a&&typeof e.count<"u"&&(l.count=e.count),this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),!a){l={...l};for(const c of i)delete l[c]}return l}static hasDefaultValue(e){const i="defaultValue";for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&i===a.substring(0,i.length)&&e[a]!==void 0)return!0;return!1}}class D_{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Bi.create("languageUtils")}getScriptPartFromCode(e){if(e=nl(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=nl(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(it(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(a=>{if(i)return;const l=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(l))&&(i=l)}),!i&&this.options.supportedLngs&&e.forEach(a=>{if(i)return;const l=this.getScriptPartFromCode(a);if(this.isSupportedCode(l))return i=l;const c=this.getLanguagePartFromCode(a);if(this.isSupportedCode(c))return i=c;i=this.options.supportedLngs.find(f=>{if(f===c)return f;if(!(f.indexOf("-")<0&&c.indexOf("-")<0)&&(f.indexOf("-")>0&&c.indexOf("-")<0&&f.substring(0,f.indexOf("-"))===c||f.indexOf(c)===0&&c.length>1))return f})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),it(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let a=e[i];return a||(a=e[this.getScriptPartFromCode(i)]),a||(a=e[this.formatLanguageCode(i)]),a||(a=e[this.getLanguagePartFromCode(i)]),a||(a=e.default),a||[]}toResolveHierarchy(e,i){const a=this.getFallbackCodes((i===!1?[]:i)||this.options.fallbackLng||[],e),l=[],c=f=>{f&&(this.isSupportedCode(f)?l.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return it(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&c(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&c(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&c(this.getLanguagePartFromCode(e))):it(e)&&c(this.formatLanguageCode(e)),a.forEach(f=>{l.indexOf(f)<0&&c(this.formatLanguageCode(f))}),l}}const U_={zero:0,one:1,two:2,few:3,many:4,other:5},L_={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class OM{constructor(e,i={}){this.languageUtils=e,this.options=i,this.logger=Bi.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,i={}){const a=nl(e==="dev"?"en":e),l=i.ordinal?"ordinal":"cardinal",c=JSON.stringify({cleanedCode:a,type:l});if(c in this.pluralRulesCache)return this.pluralRulesCache[c];let f;try{f=new Intl.PluralRules(a,{type:l})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),L_;if(!e.match(/-|_/))return L_;const m=this.languageUtils.getLanguagePartFromCode(e);f=this.getRule(m,i)}return this.pluralRulesCache[c]=f,f}needsPlural(e,i={}){let a=this.getRule(e,i);return a||(a=this.getRule("dev",i)),a?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,i,a={}){return this.getSuffixes(e,a).map(l=>`${i}${l}`)}getSuffixes(e,i={}){let a=this.getRule(e,i);return a||(a=this.getRule("dev",i)),a?a.resolvedOptions().pluralCategories.sort((l,c)=>U_[l]-U_[c]).map(l=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${l}`):[]}getSuffix(e,i,a={}){const l=this.getRule(e,a);return l?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${l.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,a))}}const N_=(s,e,i,a=".",l=!0)=>{let c=TM(s,e,i);return!c&&l&&it(i)&&(c=gd(s,i,a),c===void 0&&(c=gd(e,i,a))),c},Uh=s=>s.replace(/\$/g,"$$$$");class O_{constructor(e={}){this.logger=Bi.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:a,useRawValueToEscape:l,prefix:c,prefixEscaped:f,suffix:h,suffixEscaped:m,formatSeparator:p,unescapeSuffix:_,unescapePrefix:g,nestingPrefix:v,nestingPrefixEscaped:y,nestingSuffix:b,nestingSuffixEscaped:A,nestingOptionsSeparator:M,maxReplaces:S,alwaysFormat:O}=e.interpolation;this.escape=i!==void 0?i:RM,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=l!==void 0?l:!1,this.prefix=c?Ss(c):f||"{{",this.suffix=h?Ss(h):m||"}}",this.formatSeparator=p||",",this.unescapePrefix=_?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":_||"",this.nestingPrefix=v?Ss(v):y||Ss("$t("),this.nestingSuffix=b?Ss(b):A||Ss(")"),this.nestingOptionsSeparator=M||",",this.maxReplaces=S||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,a)=>i?.source===a?(i.lastIndex=0,i):new RegExp(a,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,i,a,l){let c,f,h;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=y=>{if(y.indexOf(this.formatSeparator)<0){const S=N_(i,m,y,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,a,{...l,...i,interpolationkey:y}):S}const b=y.split(this.formatSeparator),A=b.shift().trim(),M=b.join(this.formatSeparator).trim();return this.format(N_(i,m,A,this.options.keySeparator,this.options.ignoreJSONStructure),M,a,{...l,...i,interpolationkey:A})};this.resetRegExp();const _=l?.missingInterpolationHandler||this.options.missingInterpolationHandler,g=l?.interpolation?.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:y=>Uh(y)},{regex:this.regexp,safeValue:y=>this.escapeValue?Uh(this.escape(y)):Uh(y)}].forEach(y=>{for(h=0;c=y.regex.exec(e);){const b=c[1].trim();if(f=p(b),f===void 0)if(typeof _=="function"){const M=_(e,c,l);f=it(M)?M:""}else if(l&&Object.prototype.hasOwnProperty.call(l,b))f="";else if(g){f=c[0];continue}else this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`),f="";else!it(f)&&!this.useRawValueToEscape&&(f=b_(f));const A=y.safeValue(f);if(e=e.replace(c[0],A),g?(y.regex.lastIndex+=f.length,y.regex.lastIndex-=c[0].length):y.regex.lastIndex=0,h++,h>=this.maxReplaces)break}}),e}nest(e,i,a={}){let l,c,f;const h=(m,p)=>{const _=this.nestingOptionsSeparator;if(m.indexOf(_)<0)return m;const g=m.split(new RegExp(`${_}[ ]*{`));let v=`{${g[1]}`;m=g[0],v=this.interpolate(v,f);const y=v.match(/'/g),b=v.match(/"/g);((y?.length??0)%2===0&&!b||b.length%2!==0)&&(v=v.replace(/'/g,'"'));try{f=JSON.parse(v),p&&(f={...p,...f})}catch(A){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,A),`${m}${_}${v}`}return f.defaultValue&&f.defaultValue.indexOf(this.prefix)>-1&&delete f.defaultValue,m};for(;l=this.nestingRegexp.exec(e);){let m=[];f={...a},f=f.replace&&!it(f.replace)?f.replace:f,f.applyPostProcessor=!1,delete f.defaultValue;const p=/{.*}/.test(l[1])?l[1].lastIndexOf("}")+1:l[1].indexOf(this.formatSeparator);if(p!==-1&&(m=l[1].slice(p).split(this.formatSeparator).map(_=>_.trim()).filter(Boolean),l[1]=l[1].slice(0,p)),c=i(h.call(this,l[1].trim(),f),f),c&&l[0]===e&&!it(c))return c;it(c)||(c=b_(c)),c||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${e}`),c=""),m.length&&(c=m.reduce((_,g)=>this.format(_,g,a.lng,{...a,interpolationkey:l[1].trim()}),c.trim())),e=e.replace(l[0],c),this.regexp.lastIndex=0}return e}}const PM=s=>{let e=s.toLowerCase().trim();const i={};if(s.indexOf("(")>-1){const a=s.split("(");e=a[0].toLowerCase().trim();const l=a[1].substring(0,a[1].length-1);e==="currency"&&l.indexOf(":")<0?i.currency||(i.currency=l.trim()):e==="relativetime"&&l.indexOf(":")<0?i.range||(i.range=l.trim()):l.split(";").forEach(f=>{if(f){const[h,...m]=f.split(":"),p=m.join(":").trim().replace(/^'+|'+$/g,""),_=h.trim();i[_]||(i[_]=p),p==="false"&&(i[_]=!1),p==="true"&&(i[_]=!0),isNaN(p)||(i[_]=parseInt(p,10))}})}return{formatName:e,formatOptions:i}},P_=s=>{const e={};return(i,a,l)=>{let c=l;l&&l.interpolationkey&&l.formatParams&&l.formatParams[l.interpolationkey]&&l[l.interpolationkey]&&(c={...c,[l.interpolationkey]:void 0});const f=a+JSON.stringify(c);let h=e[f];return h||(h=s(nl(a),l),e[f]=h),h(i)}},FM=s=>(e,i,a)=>s(nl(i),a)(e);class zM{constructor(e={}){this.logger=Bi.create("formatter"),this.options=e,this.init(e)}init(e,i={interpolation:{}}){this.formatSeparator=i.interpolation.formatSeparator||",";const a=i.cacheInBuiltFormats?P_:FM;this.formats={number:a((l,c)=>{const f=new Intl.NumberFormat(l,{...c});return h=>f.format(h)}),currency:a((l,c)=>{const f=new Intl.NumberFormat(l,{...c,style:"currency"});return h=>f.format(h)}),datetime:a((l,c)=>{const f=new Intl.DateTimeFormat(l,{...c});return h=>f.format(h)}),relativetime:a((l,c)=>{const f=new Intl.RelativeTimeFormat(l,{...c});return h=>f.format(h,c.range||"day")}),list:a((l,c)=>{const f=new Intl.ListFormat(l,{...c});return h=>f.format(h)})}}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=P_(i)}format(e,i,a,l={}){const c=i.split(this.formatSeparator);if(c.length>1&&c[0].indexOf("(")>1&&c[0].indexOf(")")<0&&c.find(h=>h.indexOf(")")>-1)){const h=c.findIndex(m=>m.indexOf(")")>-1);c[0]=[c[0],...c.splice(1,h)].join(this.formatSeparator)}return c.reduce((h,m)=>{const{formatName:p,formatOptions:_}=PM(m);if(this.formats[p]){let g=h;try{const v=l?.formatParams?.[l.interpolationkey]||{},y=v.locale||v.lng||l.locale||l.lng||a;g=this.formats[p](h,y,{..._,...l,...v})}catch(v){this.logger.warn(v)}return g}else this.logger.warn(`there was no format function for ${p}`);return h},e)}}const IM=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class BM extends cu{constructor(e,i,a,l={}){super(),this.backend=e,this.store=i,this.services=a,this.languageUtils=a.languageUtils,this.options=l,this.logger=Bi.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=l.maxParallelReads||10,this.readingCalls=0,this.maxRetries=l.maxRetries>=0?l.maxRetries:5,this.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(a,l.backend,l)}queueLoad(e,i,a,l){const c={},f={},h={},m={};return e.forEach(p=>{let _=!0;i.forEach(g=>{const v=`${p}|${g}`;!a.reload&&this.store.hasResourceBundle(p,g)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?f[v]===void 0&&(f[v]=!0):(this.state[v]=1,_=!1,f[v]===void 0&&(f[v]=!0),c[v]===void 0&&(c[v]=!0),m[g]===void 0&&(m[g]=!0)))}),_||(h[p]=!0)}),(Object.keys(c).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(c),pending:Object.keys(f),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(m)}}loaded(e,i,a){const l=e.split("|"),c=l[0],f=l[1];i&&this.emit("failedLoading",c,f,i),!i&&a&&this.store.addResourceBundle(c,f,a,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&a&&(this.state[e]=0);const h={};this.queue.forEach(m=>{bM(m.loaded,[c],f),IM(m,e),i&&m.errors.push(i),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(p=>{h[p]||(h[p]={});const _=m.loaded[p];_.length&&_.forEach(g=>{h[p][g]===void 0&&(h[p][g]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",h),this.queue=this.queue.filter(m=>!m.done)}read(e,i,a,l=0,c=this.retryTimeout,f){if(!e.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:a,tried:l,wait:c,callback:f});return}this.readingCalls++;const h=(p,_)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(p&&_&&l<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,a,l+1,c*2,f)},c);return}f(p,_)},m=this.backend[a].bind(this.backend);if(m.length===2){try{const p=m(e,i);p&&typeof p.then=="function"?p.then(_=>h(null,_)).catch(h):h(null,p)}catch(p){h(p)}return}return m(e,i,h)}prepareLoading(e,i,a={},l){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();it(e)&&(e=this.languageUtils.toResolveHierarchy(e)),it(i)&&(i=[i]);const c=this.queueLoad(e,i,a,l);if(!c.toLoad.length)return c.pending.length||l(),null;c.toLoad.forEach(f=>{this.loadOne(f)})}load(e,i,a){this.prepareLoading(e,i,{},a)}reload(e,i,a){this.prepareLoading(e,i,{reload:!0},a)}loadOne(e,i=""){const a=e.split("|"),l=a[0],c=a[1];this.read(l,c,"read",void 0,void 0,(f,h)=>{f&&this.logger.warn(`${i}loading namespace ${c} for language ${l} failed`,f),!f&&h&&this.logger.log(`${i}loaded namespace ${c} for language ${l}`,h),this.loaded(e,f,h)})}saveMissing(e,i,a,l,c,f={},h=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${a}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if(this.backend?.create){const m={...f,isUpdate:c},p=this.backend.create.bind(this.backend);if(p.length<6)try{let _;p.length===5?_=p(e,i,a,l,m):_=p(e,i,a,l),_&&typeof _.then=="function"?_.then(g=>h(null,g)).catch(h):h(null,_)}catch(_){h(_)}else p(e,i,a,l,h,m)}!e||!e[0]||this.store.addResource(e[0],i,a,l)}}}const Lh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),it(s[1])&&(e.defaultValue=s[1]),it(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const i=s[3]||s[2];Object.keys(i).forEach(a=>{e[a]=i[a]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),F_=s=>(it(s.ns)&&(s.ns=[s.ns]),it(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),it(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs?.indexOf?.("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s),Tc=()=>{},HM=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(i=>{typeof s[i]=="function"&&(s[i]=s[i].bind(s))})};class tl extends cu{constructor(e={},i){if(super(),this.options=F_(e),this.services={},this.logger=Bi,this.modules={external:[]},HM(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(e={},i){this.isInitializing=!0,typeof e=="function"&&(i=e,e={}),e.defaultNS==null&&e.ns&&(it(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const a=Lh();this.options={...a,...this.options,...F_(e)},this.options.interpolation={...a.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=a.overloadTranslationOptionHandler);const l=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?Bi.init(l(this.modules.logger),this.options):Bi.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:p=zM;const _=new D_(this.options);this.store=new C_(this.options.resources,this.options);const g=this.services;g.logger=Bi,g.resourceStore=this.store,g.languageUtils=_,g.pluralResolver=new OM(_,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),p&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(g.formatter=l(p),g.formatter.init&&g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new O_(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new BM(l(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",(y,...b)=>{this.emit(y,...b)}),this.modules.languageDetector&&(g.languageDetector=l(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=l(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new nu(this.services,this.options),this.translator.on("*",(y,...b)=>{this.emit(y,...b)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Tc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=(..._)=>this.store[p](..._)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=(..._)=>(this.store[p](..._),this)});const h=Xo(),m=()=>{const p=(_,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(g),i(_,g)};if(this.languages&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),h}loadResources(e,i=Tc){let a=i;const l=it(e)?e:this.language;if(typeof e=="function"&&(a=e),!this.options.resources||this.options.partialBundledLanguages){if(l?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const c=[],f=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(p=>{p!=="cimode"&&c.indexOf(p)<0&&c.push(p)})};l?f(l):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>f(m)),this.options.preload?.forEach?.(h=>f(h)),this.services.backendConnector.load(c,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(h)})}else a(null)}reloadResources(e,i,a){const l=Xo();return typeof e=="function"&&(a=e,e=void 0),typeof i=="function"&&(a=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),a||(a=Tc),this.services.backendConnector.reload(e,i,c=>{l.resolve(),a(c)}),l}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&jv.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let i=0;i<this.languages.length;i++){const a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,i){this.isLanguageChangingTo=e;const a=Xo();this.emit("languageChanging",e);const l=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},c=(h,m)=>{m?this.isLanguageChangingTo===e&&(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,a.resolve((...p)=>this.t(...p)),i&&i(h,(...p)=>this.t(...p))},f=h=>{!e&&!h&&this.services.languageDetector&&(h=[]);const m=it(h)?h:h&&h[0],p=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(it(h)?[h]:h);p&&(this.language||l(p),this.translator.language||this.translator.changeLanguage(p),this.services.languageDetector?.cacheUserLanguage?.(p)),this.loadResources(p,_=>{c(_,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(e),a}getFixedT(e,i,a){const l=(c,f,...h)=>{let m;typeof f!="object"?m=this.options.overloadTranslationOptionHandler([c,f].concat(h)):m={...f},m.lng=m.lng||l.lng,m.lngs=m.lngs||l.lngs,m.ns=m.ns||l.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||a||l.keyPrefix);const p=this.options.keySeparator||".";let _;return m.keyPrefix&&Array.isArray(c)?_=c.map(g=>(typeof g=="function"&&(g=_d(g,{...this.options,...f})),`${m.keyPrefix}${p}${g}`)):(typeof c=="function"&&(c=_d(c,{...this.options,...f})),_=m.keyPrefix?`${m.keyPrefix}${p}${c}`:c),this.t(_,m)};return it(e)?l.lng=e:l.lngs=e,l.ns=i,l.keyPrefix=a,l}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,i={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=i.lng||this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const f=(h,m)=>{const p=this.services.backendConnector.state[`${h}|${m}`];return p===-1||p===0||p===2};if(i.precheck){const h=i.precheck(this,f);if(h!==void 0)return h}return!!(this.hasResourceBundle(a,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(a,e)&&(!l||f(c,e)))}loadNamespaces(e,i){const a=Xo();return this.options.ns?(it(e)&&(e=[e]),e.forEach(l=>{this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}),this.loadResources(l=>{a.resolve(),i&&i(l)}),a):(i&&i(),Promise.resolve())}loadLanguages(e,i){const a=Xo();it(e)&&(e=[e]);const l=this.options.preload||[],c=e.filter(f=>l.indexOf(f)<0&&this.services.languageUtils.isSupportedCode(f));return c.length?(this.options.preload=l.concat(c),this.loadResources(f=>{a.resolve(),i&&i(f)}),a):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const l=new Intl.Locale(e);if(l&&l.getTextInfo){const c=l.getTextInfo();if(c&&c.direction)return c.direction}}catch{}const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=this.services?.languageUtils||new D_(Lh());return e.toLowerCase().indexOf("-latn")>1?"ltr":i.indexOf(a.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},i){const a=new tl(e,i);return a.createInstance=tl.createInstance,a}cloneInstance(e={},i=Tc){const a=e.forkResourceStore;a&&delete e.forkResourceStore;const l={...this.options,...e,isClone:!0},c=new tl(l);if((e.debug!==void 0||e.prefix!==void 0)&&(c.logger=c.logger.clone(e)),["store","services","language"].forEach(h=>{c[h]=this[h]}),c.services={...this.services},c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},a){const h=Object.keys(this.store.data).reduce((m,p)=>(m[p]={...this.store.data[p]},m[p]=Object.keys(m[p]).reduce((_,g)=>(_[g]={...m[p][g]},_),m[p]),m),{});c.store=new C_(h,l),c.services.resourceStore=c.store}if(e.interpolation){const m={...Lh().interpolation,...this.options.interpolation,...e.interpolation},p={...l,interpolation:m};c.services.interpolator=new O_(p)}return c.translator=new nu(c.services,l),c.translator.on("*",(h,...m)=>{c.emit(h,...m)}),c.init(l,i),c.translator.options=l,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Bn=tl.createInstance();Bn.createInstance;Bn.dir;Bn.init;Bn.loadResources;Bn.reloadResources;Bn.use;Bn.changeLanguage;Bn.getFixedT;Bn.t;Bn.exists;Bn.setDefaultNamespace;Bn.hasLoadedNamespace;Bn.loadNamespaces;Bn.loadLanguages;const VM=(s,e,i,a)=>{const l=[i,{code:e,...a||{}}];if(s?.services?.logger?.forward)return s.services.logger.forward(l,"warn","react-i18next::",!0);Pr(l[0])&&(l[0]=`react-i18next:: ${l[0]}`),s?.services?.logger?.warn?s.services.logger.warn(...l):console?.warn&&console.warn(...l)},z_={},Kv=(s,e,i,a)=>{Pr(i)&&z_[i]||(Pr(i)&&(z_[i]=new Date),VM(s,e,i,a))},Zv=(s,e)=>()=>{if(s.isInitialized)e();else{const i=()=>{setTimeout(()=>{s.off("initialized",i)},0),e()};s.on("initialized",i)}},vd=(s,e,i)=>{s.loadNamespaces(e,Zv(s,i))},I_=(s,e,i,a)=>{if(Pr(i)&&(i=[i]),s.options.preload&&s.options.preload.indexOf(e)>-1)return vd(s,i,a);i.forEach(l=>{s.options.ns.indexOf(l)<0&&s.options.ns.push(l)}),s.loadLanguages(e,Zv(s,a))},GM=(s,e,i={})=>!e.languages||!e.languages.length?(Kv(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(s,{lng:i.lng,precheck:(a,l)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,s))return!1}}),Pr=s=>typeof s=="string",kM=s=>typeof s=="object"&&s!==null,XM=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,qM={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},WM=s=>qM[s],jM=s=>s.replace(XM,WM);let xd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:jM,transDefaultProps:void 0};const YM=(s={})=>{xd={...xd,...s}},KM=()=>xd;let Qv;const ZM=s=>{Qv=s},QM=()=>Qv,JM={type:"3rdParty",init(s){YM(s.options.react),ZM(s)}},$M=dt.createContext();class eE{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Nh={exports:{}},Oh={};var B_;function tE(){if(B_)return Oh;B_=1;var s=lu();function e(g,v){return g===v&&(g!==0||1/g===1/v)||g!==g&&v!==v}var i=typeof Object.is=="function"?Object.is:e,a=s.useState,l=s.useEffect,c=s.useLayoutEffect,f=s.useDebugValue;function h(g,v){var y=v(),b=a({inst:{value:y,getSnapshot:v}}),A=b[0].inst,M=b[1];return c(function(){A.value=y,A.getSnapshot=v,m(A)&&M({inst:A})},[g,y,v]),l(function(){return m(A)&&M({inst:A}),g(function(){m(A)&&M({inst:A})})},[g]),f(y),y}function m(g){var v=g.getSnapshot;g=g.value;try{var y=v();return!i(g,y)}catch{return!0}}function p(g,v){return v()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:h;return Oh.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:_,Oh}var H_;function nE(){return H_||(H_=1,Nh.exports=tE()),Nh.exports}var iE=nE();const aE=(s,e)=>Pr(e)?e:kM(e)&&Pr(e.defaultValue)?e.defaultValue:Array.isArray(s)?s[s.length-1]:s,rE={t:aE,ready:!1},sE=()=>()=>{},Xs=(s,e={})=>{const{i18n:i}=e,{i18n:a,defaultNS:l}=dt.useContext($M)||{},c=i||a||QM();c&&!c.reportNamespaces&&(c.reportNamespaces=new eE),c||Kv(c,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const f=dt.useMemo(()=>({...KM(),...c?.options?.react,...e}),[c,e]),{useSuspense:h,keyPrefix:m}=f,p=l||c?.options?.defaultNS,_=Pr(p)?[p]:p||["translation"],g=dt.useMemo(()=>_,_);c?.reportNamespaces?.addUsedNamespaces?.(g);const v=dt.useRef(0),y=dt.useCallback(T=>{if(!c)return sE;const{bindI18n:w,bindI18nStore:H}=f,K=()=>{v.current+=1,T()};return w&&c.on(w,K),H&&c.store.on(H,K),()=>{w&&w.split(" ").forEach(Q=>c.off(Q,K)),H&&H.split(" ").forEach(Q=>c.store.off(Q,K))}},[c,f]),b=dt.useRef(),A=dt.useCallback(()=>{if(!c)return rE;const T=!!(c.isInitialized||c.initializedStoreOnce)&&g.every(ce=>GM(ce,c,f)),w=e.lng||c.language,H=v.current,K=b.current;if(K&&K.ready===T&&K.lng===w&&K.keyPrefix===m&&K.revision===H)return K;const le={t:c.getFixedT(w,f.nsMode==="fallback"?g:g[0],m),ready:T,lng:w,keyPrefix:m,revision:H};return b.current=le,le},[c,g,m,f,e.lng]),[M,S]=dt.useState(0),{t:O,ready:P}=iE.useSyncExternalStore(y,A,A);dt.useEffect(()=>{if(c&&!P&&!h){const T=()=>S(w=>w+1);e.lng?I_(c,e.lng,g,T):vd(c,g,T)}},[c,e.lng,g,P,h,M]);const N=c||{},z=dt.useRef(null),I=dt.useRef(),D=T=>{const w=Object.getOwnPropertyDescriptors(T);w.__original&&delete w.__original;const H=Object.create(Object.getPrototypeOf(T),w);if(!Object.prototype.hasOwnProperty.call(H,"__original"))try{Object.defineProperty(H,"__original",{value:T,writable:!1,enumerable:!1,configurable:!1})}catch{}return H},Y=dt.useMemo(()=>{const T=N,w=T?.language;let H=T;T&&(z.current&&z.current.__original===T?I.current!==w?(H=D(T),z.current=H,I.current=w):H=z.current:(H=D(T),z.current=H,I.current=w));const K=[O,H,P];return K.t=O,K.i18n=H,K.ready=P,K},[O,N,P,N.resolvedLanguage,N.language,N.languages]);if(c&&h&&!P)throw new Promise(T=>{const w=()=>T();e.lng?I_(c,e.lng,g,w):vd(c,g,w)});return Y};var Jv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V_=On.createContext&&On.createContext(Jv),oE=["attr","size","title"];function lE(s,e){if(s==null)return{};var i=cE(s,e),a,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)a=c[l],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(s,a)&&(i[a]=s[a])}return i}function cE(s,e){if(s==null)return{};var i={};for(var a in s)if(Object.prototype.hasOwnProperty.call(s,a)){if(e.indexOf(a)>=0)continue;i[a]=s[a]}return i}function iu(){return iu=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=i[a])}return s},iu.apply(this,arguments)}function G_(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,a)}return i}function au(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?G_(Object(i),!0).forEach(function(a){uE(s,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):G_(Object(i)).forEach(function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(i,a))})}return s}function uE(s,e,i){return e=fE(e),e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function fE(s){var e=hE(s,"string");return typeof e=="symbol"?e:e+""}function hE(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var a=i.call(s,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function $v(s){return s&&s.map((e,i)=>On.createElement(e.tag,au({key:i},e.attr),$v(e.child)))}function mp(s){return e=>On.createElement(dE,iu({attr:au({},s.attr)},e),$v(s.child))}function dE(s){var e=i=>{var{attr:a,size:l,title:c}=s,f=lE(s,oE),h=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),On.createElement("svg",iu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,f,{className:m,style:au(au({color:s.color||i.color},i.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&On.createElement("title",null,c),s.children)};return V_!==void 0?On.createElement(V_.Consumer,null,i=>e(i)):e(Jv)}function pE(s){return mp({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(s)}function mE(s){return mp({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(s)}function gE(s){return mp({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(s)}const _E=()=>{const{t:s,i18n:e}=Xs(),[i,a]=dt.useState(!1),[l,c]=dt.useState(!1),[f,h]=dt.useState(0),[m,p]=dt.useState(!1),_=[{code:"uz",name:"O'zbekcha",flag:"🇺🇿"},{code:"ru",name:"Русский",flag:"🇷🇺"},{code:"en",name:"English",flag:"🇬🇧"}],g=()=>{a(!i)},v=()=>{a(!1)},y=b=>{e.changeLanguage(b),localStorage.setItem("language",b),p(!1)};return dt.useEffect(()=>{const b=()=>{const A=window.scrollY;A>f&&A>80?c(!0):A<f&&c(!1),h(A)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[f]),ve.jsxs("section",{className:"main-section",id:"asosiy",children:[ve.jsx("nav",{className:`navbar ${l?"navbar-hidden":""}`,children:ve.jsxs("div",{className:"nav-container",children:[ve.jsxs("div",{className:"logo-container",children:[ve.jsx("h1",{className:"logo",children:"AyTi Xizmati"}),ve.jsx("a",{href:"tel:+998773009928",className:"phone-link",children:"+998 77-300-99-28"}),ve.jsxs("div",{className:"lang-selector-wrapper",children:[ve.jsxs("button",{className:"lang-toggle-btn",onClick:()=>p(!m),children:[ve.jsx(mE,{className:"lang-icon"}),ve.jsx("span",{className:"lang-text",children:e.language.toUpperCase()})]}),m&&ve.jsx("div",{className:"lang-dropdown-menu",children:_.map(b=>ve.jsxs("button",{className:`lang-dropdown-item ${e.language===b.code?"active":""}`,onClick:()=>y(b.code),children:[ve.jsx("span",{className:"flag",children:b.flag}),ve.jsx("span",{className:"lang-name",children:b.name})]},b.code))})]})]}),ve.jsx("div",{className:"header-right",children:ve.jsx("div",{className:"menu-icon",onClick:g,children:i?ve.jsx(gE,{}):ve.jsx(pE,{})})}),ve.jsxs("ul",{className:i?"nav-menu active":"nav-menu",children:[ve.jsx("li",{children:ve.jsx("a",{href:"#asosiy",onClick:v,children:s("nav.home")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#narxlar",onClick:v,children:s("nav.services")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#jarayon",onClick:v,children:s("nav.process")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#faq",onClick:v,children:s("nav.faq")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#aloqa",onClick:v,children:s("nav.contact")})})]})]})}),ve.jsxs("div",{className:"main-content",children:[ve.jsx("h1",{className:"main-title",children:s("hero.title")}),ve.jsxs("div",{className:"main-buttons",children:[ve.jsx("a",{href:"#aloqa",className:"btn btn-primary",children:s("hero.cta1")}),ve.jsx("a",{href:"https://t.me/ayti_xizmatibot",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:s("hero.cta2")})]})]})]})},vE=()=>{const{t:s}=Xs(),e=s("pricing.plans",{returnObjects:!0})||[];return ve.jsx("section",{className:"pricing",id:"narxlar",children:ve.jsxs("div",{className:"container",children:[ve.jsx("h2",{className:"section-title",children:s("pricing.title")}),ve.jsx("div",{className:"pricing-grid",children:Array.isArray(e)&&e.map((i,a)=>ve.jsxs("div",{className:"pricing-card",children:[ve.jsx("h3",{children:i.name}),ve.jsx("ul",{className:"pricing-features",children:i.features&&i.features.map((l,c)=>ve.jsx("li",{children:l},c))}),ve.jsx("div",{className:"price-tag",children:i.price})]},a))}),ve.jsx("div",{className:"pricing-cta-container",children:ve.jsx("a",{href:"#aloqa",className:"btn btn-pricing-main",children:s("pricing.cta")})})]})})},xE=()=>{const{t:s}=Xs(),e=s("process.steps",{returnObjects:!0})||[];return ve.jsx("section",{className:"process",id:"jarayon",children:ve.jsxs("div",{className:"container",children:[ve.jsx("h2",{className:"section-title",children:s("process.title")}),ve.jsx("div",{className:"process-timeline",children:Array.isArray(e)&&e.map((i,a)=>ve.jsxs("div",{className:"process-step",children:[ve.jsx("div",{className:"step-number",children:i.number}),ve.jsxs("div",{className:"step-content",children:[ve.jsx("h3",{children:i.title}),ve.jsx("p",{children:i.description})]})]},a))})]})})},SE=()=>{const{t:s}=Xs(),[e,i]=dt.useState(null),a=s("faq.items",{returnObjects:!0})||[],l=c=>{i(e===c?null:c)};return ve.jsx("section",{className:"faq",id:"faq",children:ve.jsxs("div",{className:"container faq-container",children:[ve.jsx("h2",{className:"section-title",children:s("faq.title")}),ve.jsx("div",{className:"faq-list",children:Array.isArray(a)&&a.map((c,f)=>ve.jsxs("div",{className:"faq-item",children:[ve.jsxs("button",{className:`faq-question ${e===f?"active":""}`,onClick:()=>l(f),children:[c.question,ve.jsx("span",{className:`faq-icon ${e===f?"active":""}`,children:"+"})]}),ve.jsx("div",{className:`faq-answer ${e===f?"active":""}`,children:ve.jsx("p",{children:c.answer})})]},f))})]})})},yE=()=>{const{t:s}=Xs(),[e,i]=dt.useState({name:"",phone:"",username:"",message:""}),[a,l]=dt.useState(!1),[c,f]=dt.useState({message:"",type:"",visible:!1}),h="https://script.google.com/macros/s/AKfycbyMPF4ivmpWtHSako7ZCrOfGFMXDVSylEz6yg0FGlCjDs6TdcdhkvuteAMDaucy-k0/exec",m=_=>{const{name:g,value:v}=_.target;let y=v;if(g==="name"&&v.length>0&&(y=v.charAt(0).toUpperCase()+v.slice(1)),g==="phone"){const b=v.replace(/\D/g,"");let A=b.startsWith("998")?b.slice(3):b;A=A.slice(0,9),A?A.length<=2?y=`+998 ${A}`:A.length<=5?y=`+998 ${A.slice(0,2)} ${A.slice(2)}`:A.length<=7?y=`+998 ${A.slice(0,2)} ${A.slice(2,5)} ${A.slice(5)}`:y=`+998 ${A.slice(0,2)} ${A.slice(2,5)} ${A.slice(5,7)} ${A.slice(7)}`:y="+998 "}if(g==="username"){const b=v.replace(/@/g,"");y=b?`@${b}`:"@"}i(b=>({...b,[g]:y}))},p=async _=>{_.preventDefault(),l(!0);try{const g=new URLSearchParams({name:e.name,phone:e.phone,username:e.username,message:e.message}).toString();await fetch(h,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:g}),f({message:s("contact.success"),type:"success",visible:!0}),i({name:"",phone:"",username:"",message:""}),setTimeout(()=>{f(v=>({...v,visible:!1}))},4e3)}catch{f({message:s("contact.error"),type:"error",visible:!0}),setTimeout(()=>{f(v=>({...v,visible:!1}))},3e3)}finally{l(!1)}};return ve.jsxs(ve.Fragment,{children:[c.visible&&ve.jsx("div",{className:`toast-notification toast-${c.type}`,children:c.message}),ve.jsxs("section",{className:"contact",id:"aloqa",children:[ve.jsxs("div",{className:"container",children:[ve.jsx("h2",{className:"section-title",children:s("contact.title")}),ve.jsx("div",{className:"contact-form-container",children:ve.jsxs("form",{className:"contact-form",onSubmit:p,children:[ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:s("contact.form.name")}),ve.jsx("input",{type:"text",name:"name",value:e.name,onChange:m,required:!0})]}),ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:s("contact.form.phone")}),ve.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:m,required:!0})]}),ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:s("contact.form.username")}),ve.jsx("input",{type:"text",name:"username",value:e.username,onChange:m})]}),ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:s("contact.form.message")}),ve.jsx("textarea",{name:"message",value:e.message,onChange:m,rows:"1",required:!0})]}),ve.jsx("button",{type:"submit",className:"submit-btn",disabled:a,children:s(a?"contact.form.submitting":"contact.form.submit")})]})})]}),ve.jsxs("footer",{className:"footer",children:[ve.jsx("div",{className:"footer-contacts",children:ve.jsxs("div",{className:"footer-links",children:[ve.jsx("a",{href:"https://t.me/AyTi_Xizmati",target:"_blank",rel:"noopener noreferrer",children:s("footer.telegram")}),ve.jsx("a",{href:"https://www.instagram.com/ayti_xizmati",target:"_blank",rel:"noopener noreferrer",children:s("footer.instagram")}),ve.jsx("a",{href:"https://t.me/AyTi_xizmatibot",target:"_blank",rel:"noopener noreferrer",children:s("footer.bot")}),ve.jsx("a",{href:"tel:+998773009928",children:"+998 77 300 99 28"}),ve.jsx("span",{className:"contact-location",children:s("footer.address")})]})}),ve.jsx("p",{className:"copyright",children:s("footer.copyright")})]})]})]})},ME=()=>{const{t:s}=Xs();return ve.jsxs(yM,{children:[ve.jsx("title",{children:s("seo.title")}),ve.jsx("meta",{name:"description",content:s("seo.description")}),ve.jsx("meta",{name:"keywords",content:s("seo.keywords")}),ve.jsx("meta",{charset:"UTF-8"}),ve.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})};const gp="182",EE=0,k_=1,bE=2,Yc=1,TE=2,Jo=3,rr=0,jn=1,ga=2,va=0,zs=1,X_=2,q_=3,W_=4,AE=5,Ur=100,RE=101,CE=102,wE=103,DE=104,UE=200,LE=201,NE=202,OE=203,Sd=204,yd=205,PE=206,FE=207,zE=208,IE=209,BE=210,HE=211,VE=212,GE=213,kE=214,Md=0,Ed=1,bd=2,Bs=3,Td=4,Ad=5,Rd=6,Cd=7,ex=0,XE=1,qE=2,Gi=0,tx=1,nx=2,ix=3,ax=4,rx=5,sx=6,ox=7,lx=300,Fr=301,Hs=302,wd=303,Dd=304,uu=306,Ud=1e3,_a=1001,Ld=1002,wn=1003,WE=1004,Ac=1005,Pn=1006,Ph=1007,Nr=1008,_i=1009,cx=1010,ux=1011,il=1012,_p=1013,qi=1014,Hi=1015,ya=1016,vp=1017,xp=1018,al=1020,fx=35902,hx=35899,dx=1021,px=1022,Di=1023,Ma=1026,Or=1027,mx=1028,Sp=1029,Vs=1030,yp=1031,Mp=1033,Kc=33776,Zc=33777,Qc=33778,Jc=33779,Nd=35840,Od=35841,Pd=35842,Fd=35843,zd=36196,Id=37492,Bd=37496,Hd=37488,Vd=37489,Gd=37490,kd=37491,Xd=37808,qd=37809,Wd=37810,jd=37811,Yd=37812,Kd=37813,Zd=37814,Qd=37815,Jd=37816,$d=37817,ep=37818,tp=37819,np=37820,ip=37821,ap=36492,rp=36494,sp=36495,op=36283,lp=36284,cp=36285,up=36286,jE=3200,YE=0,KE=1,ir="",gi="srgb",Gs="srgb-linear",ru="linear",Bt="srgb",ys=7680,j_=519,ZE=512,QE=513,JE=514,Ep=515,$E=516,eb=517,bp=518,tb=519,Y_=35044,K_="300 es",Vi=2e3,su=2001;function gx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nb(){const s=ou("canvas");return s.style.display="block",s}const Z_={};function Q_(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function rl(...s){const e=s.join(" ");e in Z_||(Z_[e]=!0,st(...s))}function ib(s,e,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}class qs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,fp=180/Math.PI;function ll(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function ab(s,e){return(s%e+e)%e}function zh(s,e,i){return(1-i)*s+i*e}function qo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(e=0,i=0){Vt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,h){let m=a[l+0],p=a[l+1],_=a[l+2],g=a[l+3],v=c[f+0],y=c[f+1],b=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=v,e[i+1]=y,e[i+2]=b,e[i+3]=A;return}if(g!==A||m!==v||p!==y||_!==b){let M=m*v+p*y+_*b+g*A;M<0&&(v=-v,y=-y,b=-b,A=-A,M=-M);let S=1-h;if(M<.9995){const O=Math.acos(M),P=Math.sin(O);S=Math.sin(S*O)/P,h=Math.sin(h*O)/P,m=m*S+v*h,p=p*S+y*h,_=_*S+b*h,g=g*S+A*h}else{m=m*S+v*h,p=p*S+y*h,_=_*S+b*h,g=g*S+A*h;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,a,l,c,f){const h=a[l],m=a[l+1],p=a[l+2],_=a[l+3],g=c[f],v=c[f+1],y=c[f+2],b=c[f+3];return e[i]=h*b+_*g+m*y-p*v,e[i+1]=m*b+_*v+p*g-h*y,e[i+2]=p*b+_*y+h*v-m*g,e[i+3]=_*b-h*g-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(l/2),g=h(c/2),v=m(a/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"YZX":this._x=v*_*g+p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g-v*y*b;break;case"XZY":this._x=v*_*g-p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g+v*y*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=a+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(a>h&&a>g){const y=2*Math.sqrt(1+a-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-a-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-a-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=a*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-a*p,this._z=c*_+f*p+a*m-l*h,this._w=f*_-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let a=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,i=0,a=0){re.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(J_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*a),_=2*(h*i-c*l),g=2*(c*a-f*i);return this.x=i+m*p+f*g-h*_,this.y=a+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-a*m,this.z=a*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new re,J_=new cl;class ft{constructor(e,i,a,l,c,f,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p)}set(e,i,a,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],b=a[8],A=l[0],M=l[3],S=l[6],O=l[1],P=l[4],N=l[7],z=l[2],I=l[5],D=l[8];return c[0]=f*A+h*O+m*z,c[3]=f*M+h*P+m*I,c[6]=f*S+h*N+m*D,c[1]=p*A+_*O+g*z,c[4]=p*M+_*P+g*I,c[7]=p*S+_*N+g*D,c[2]=v*A+y*O+b*z,c[5]=v*M+y*P+b*I,c[8]=v*S+y*N+b*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-a*c*_+a*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*f-h*p,v=h*m-_*c,y=p*c-f*m,b=i*g+a*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(l*p-_*a)*A,e[2]=(h*a-l*f)*A,e[3]=v*A,e[4]=(_*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=y*A,e[7]=(a*m-p*i)*A,e[8]=(f*i-a*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Bh.makeScale(e,i)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new ft,$_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ev=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rb(){const s={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Gs]:{primaries:e,whitePoint:a,transfer:ru,toXYZ:$_,fromXYZ:ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:a,transfer:Bt,toXYZ:$_,fromXYZ:ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Tt=rb();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class sb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ms===void 0&&(Ms=ou("canvas")),Ms.width=e.width,Ms.height=e.height;const l=Ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Ms}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(xa(i[a]/255)*255):i[a]=xa(i[a]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ob=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Hh(l[f].image)):c.push(Hh(l[f]))}else c=Hh(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Hh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let lb=0;const Vh=new re;class In extends qs{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,a=_a,l=_a,c=Pn,f=Nr,h=Di,m=_i,p=In.DEFAULT_ANISOTROPY,_=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ll(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=lx;In.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,a=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],b=m[9],A=m[2],M=m[6],S=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,N=(y+1)/2,z=(S+1)/2,I=(_+v)/4,D=(g+A)/4,Y=(b+M)/4;return P>N&&P>z?P<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(P),l=I/a,c=D/a):N>z?N<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),a=I/l,c=Y/l):z<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),a=D/c,l=Y/c),this.set(a,l,c,i),this}let O=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(v-_)*(v-_));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(g-A)/O,this.z=(v-_)/O,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cb extends qs{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:a.depth},c=new In(l);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends cb{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class _x extends In{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ub extends In{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Rc.copy(a.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Cc.subVectors(this.max,Wo),Es.subVectors(e.a,Wo),bs.subVectors(e.b,Wo),Ts.subVectors(e.c,Wo),Qa.subVectors(bs,Es),Ja.subVectors(Ts,bs),br.subVectors(Es,Ts);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-br.z,br.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,br.z,0,-br.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-br.y,br.x,0];return!Gh(i,Es,bs,Ts,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,Es,bs,Ts,Cc))?!1:(wc.crossVectors(Qa,Ja),i=[wc.x,wc.y,wc.z],Gh(i,Es,bs,Ts,Cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new re,new re,new re,new re,new re,new re,new re,new re],bi=new re,Rc=new ul,Es=new re,bs=new re,Ts=new re,Qa=new re,Ja=new re,br=new re,Wo=new re,Cc=new re,wc=new re,Tr=new re;function Gh(s,e,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){Tr.fromArray(s,c);const h=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),_=a.dot(Tr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const fb=new ul,jo=new re,kh=new re;class Ap{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):fb.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(jo,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(kh)),this.expandByPoint(jo.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new re,Xh=new re,Dc=new re,$a=new re,qh=new re,Uc=new re,Wh=new re;class hb{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Xh.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Xh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Dc),h=$a.dot(this.direction),m=-$a.dot(Dc),p=$a.lengthSq(),_=Math.abs(1-f*f);let g,v,y,b;if(_>0)if(g=f*m-h,v=f*h-m,b=c*_,g>=0)if(v>=-b)if(v<=b){const A=1/_;g*=A,v*=A,y=g*(g+f*v+2*h)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;else v<=-b?(g=Math.max(0,-(-f*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p):v<=b?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(g=Math.max(0,-(f*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Xh).addScaledVector(Dc,v),y}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const a=ha.dot(this.direction),l=ha.dot(ha)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),_>=0?(c=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,a,l,c){qh.subVectors(i,e),Uc.subVectors(a,e),Wh.crossVectors(qh,Uc);let f=this.direction.dot(Wh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(Uc.crossVectors($a,Uc));if(m<0)return null;const p=h*this.direction.dot(qh.cross($a));if(p<0||m+p>f)return null;const _=-h*$a.dot(Wh);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,a,l,c,f,h,m,p,_,g,v,y,b,A,M){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,h,m,p,_,g,v,y,b,A,M)}set(e,i,a,l,c,f,h,m,p,_,g,v,y,b,A,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=a,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=g,S[14]=v,S[3]=y,S[7]=b,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,a=e.elements,l=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*_,y=f*g,b=h*_,A=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=v-A*p,i[9]=-h*m,i[2]=A-v*p,i[6]=b+y*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*_,y=m*g,b=p*_,A=p*g;i[0]=v+A*h,i[4]=b*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=y*h-b,i[6]=A+v*h,i[10]=f*m}else if(e.order==="ZXY"){const v=m*_,y=m*g,b=p*_,A=p*g;i[0]=v-A*h,i[4]=-f*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=f*_,i[9]=A-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const v=f*_,y=f*g,b=h*_,A=h*g;i[0]=m*_,i[4]=b*p-y,i[8]=v*p+A,i[1]=m*g,i[5]=A*p+v,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,y=f*p,b=h*m,A=h*p;i[0]=m*_,i[4]=A-v*g,i[8]=b*g+y,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+b,i[10]=v-A*g}else if(e.order==="XZY"){const v=f*m,y=f*p,b=h*m,A=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+A,i[5]=f*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*_,i[10]=A*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(db,e,pb)}lookAt(e,i,a){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),er.crossVectors(a,ti),er.lengthSq()===0&&(Math.abs(a.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),er.crossVectors(a,ti)),er.normalize(),Lc.crossVectors(ti,er),l[0]=er.x,l[4]=Lc.x,l[8]=ti.x,l[1]=er.y,l[5]=Lc.y,l[9]=ti.y,l[2]=er.z,l[6]=Lc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],b=a[2],A=a[6],M=a[10],S=a[14],O=a[3],P=a[7],N=a[11],z=a[15],I=l[0],D=l[4],Y=l[8],T=l[12],w=l[1],H=l[5],K=l[9],Q=l[13],le=l[2],ce=l[6],F=l[10],V=l[14],te=l[3],ye=l[7],Se=l[11],U=l[15];return c[0]=f*I+h*w+m*le+p*te,c[4]=f*D+h*H+m*ce+p*ye,c[8]=f*Y+h*K+m*F+p*Se,c[12]=f*T+h*Q+m*V+p*U,c[1]=_*I+g*w+v*le+y*te,c[5]=_*D+g*H+v*ce+y*ye,c[9]=_*Y+g*K+v*F+y*Se,c[13]=_*T+g*Q+v*V+y*U,c[2]=b*I+A*w+M*le+S*te,c[6]=b*D+A*H+M*ce+S*ye,c[10]=b*Y+A*K+M*F+S*Se,c[14]=b*T+A*Q+M*V+S*U,c[3]=O*I+P*w+N*le+z*te,c[7]=O*D+P*H+N*ce+z*ye,c[11]=O*Y+P*K+N*F+z*Se,c[15]=O*T+P*Q+N*V+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],v=e[10],y=e[14],b=e[3],A=e[7],M=e[11],S=e[15],O=m*y-p*v,P=h*y-p*g,N=h*v-m*g,z=f*y-p*_,I=f*v-m*_,D=f*g-h*_;return i*(A*O-M*P+S*N)-a*(b*O-M*z+S*I)+l*(b*P-A*z+S*D)-c*(b*N-A*I+M*D)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],v=e[10],y=e[11],b=e[12],A=e[13],M=e[14],S=e[15],O=g*M*p-A*v*p+A*m*y-h*M*y-g*m*S+h*v*S,P=b*v*p-_*M*p-b*m*y+f*M*y+_*m*S-f*v*S,N=_*A*p-b*g*p+b*h*y-f*A*y-_*h*S+f*g*S,z=b*g*m-_*A*m-b*h*v+f*A*v+_*h*M-f*g*M,I=i*O+a*P+l*N+c*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=O*D,e[1]=(A*v*c-g*M*c-A*l*y+a*M*y+g*l*S-a*v*S)*D,e[2]=(h*M*c-A*m*c+A*l*p-a*M*p-h*l*S+a*m*S)*D,e[3]=(g*m*c-h*v*c-g*l*p+a*v*p+h*l*y-a*m*y)*D,e[4]=P*D,e[5]=(_*M*c-b*v*c+b*l*y-i*M*y-_*l*S+i*v*S)*D,e[6]=(b*m*c-f*M*c-b*l*p+i*M*p+f*l*S-i*m*S)*D,e[7]=(f*v*c-_*m*c+_*l*p-i*v*p-f*l*y+i*m*y)*D,e[8]=N*D,e[9]=(b*g*c-_*A*c-b*a*y+i*A*y+_*a*S-i*g*S)*D,e[10]=(f*A*c-b*h*c+b*a*p-i*A*p-f*a*S+i*h*S)*D,e[11]=(_*h*c-f*g*c-_*a*p+i*g*p+f*a*y-i*h*y)*D,e[12]=z*D,e[13]=(_*A*l-b*g*l+b*a*v-i*A*v-_*a*M+i*g*M)*D,e[14]=(b*h*l-f*A*l-b*a*m+i*A*m+f*a*M-i*h*M)*D,e[15]=(f*g*l-_*h*l+_*a*m-i*g*m-f*a*v+i*h*v)*D,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+a,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+a,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,v=c*p,y=c*_,b=c*g,A=f*_,M=f*g,S=h*g,O=m*p,P=m*_,N=m*g,z=a.x,I=a.y,D=a.z;return l[0]=(1-(A+S))*z,l[1]=(y+N)*z,l[2]=(b-P)*z,l[3]=0,l[4]=(y-N)*I,l[5]=(1-(v+S))*I,l[6]=(M+O)*I,l[7]=0,l[8]=(b+P)*D,l[9]=(M-O)*D,l[10]=(1-(v+A))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return a.set(1,1,1),i.identity(),this;let c=As.set(l[0],l[1],l[2]).length();const f=As.set(l[4],l[5],l[6]).length(),h=As.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,_=1/f,g=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),a.x=c,a.y=f,a.z=h,this}makePerspective(e,i,a,l,c,f,h=Vi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(a-l),v=(i+e)/(i-e),y=(a+l)/(a-l);let b,A;if(m)b=c/(f-c),A=f*c/(f-c);else if(h===Vi)b=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===su)b=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,l,c,f,h=Vi,m=!1){const p=this.elements,_=2/(i-e),g=2/(a-l),v=-(i+e)/(i-e),y=-(a+l)/(a-l);let b,A;if(m)b=1/(f-c),A=f/(f-c);else if(h===Vi)b=-2/(f-c),A=-(f+c)/(f-c);else if(h===su)b=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const As=new re,Ti=new hn,db=new re(0,0,0),pb=new re(1,1,1),er=new re,Lc=new re,ti=new re,tv=new hn,nv=new cl;class Ea{constructor(e=0,i=0,a=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mb=0;const iv=new re,Rs=new cl,da=new hn,Nc=new re,Yo=new re,gb=new re,_b=new cl,av=new re(1,0,0),rv=new re(0,1,0),sv=new re(0,0,1),ov={type:"added"},vb={type:"removed"},Cs={type:"childadded",child:null},jh={type:"childremoved",child:null};class ii extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new re,i=new Ea,a=new cl,l=new re(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ft}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(av,e)}rotateY(e){return this.rotateOnAxis(rv,e)}rotateZ(e){return this.rotateOnAxis(sv,e)}translateOnAxis(e,i){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(av,e)}translateY(e){return this.translateOnAxis(rv,e)}translateZ(e){return this.translateOnAxis(sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Nc.copy(e):Nc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Yo,Nc,this.up):da.lookAt(Nc,Yo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Rs.setFromRotationMatrix(da),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(vb),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,_b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),v=f(e.skeletons),y=f(e.animations),b=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}ii.DEFAULT_UP=new re(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new re,pa=new re,Yh=new re,ma=new re,ws=new re,Ds=new re,lv=new re,Kh=new re,Zh=new re,Qh=new re,Jh=new rn,$h=new rn,ed=new rn;class Ci{constructor(e=new re,i=new re,a=new re){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Ai.subVectors(l,i),pa.subVectors(a,i),Yh.subVectors(e,i);const f=Ai.dot(Ai),h=Ai.dot(pa),m=Ai.dot(Yh),p=pa.dot(pa),_=pa.dot(Yh),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(p*m-h*_)*v,b=(f*_-h*m)*v;return c.set(1-y-b,b,y)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,a,l,c,f,h,m){return this.getBarycoord(e,i,a,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(f,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(e,i,a,l,c,f){return Jh.setScalar(0),$h.setScalar(0),ed.setScalar(0),Jh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,a),ed.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Jh,c.x),f.addScaledVector($h,c.y),f.addScaledVector(ed,c.z),f}static isFrontFacing(e,i,a,l){return Ai.subVectors(a,i),pa.subVectors(e,i),Ai.cross(pa).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ai.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,h;ws.subVectors(l,a),Ds.subVectors(c,a),Kh.subVectors(e,a);const m=ws.dot(Kh),p=Ds.dot(Kh);if(m<=0&&p<=0)return i.copy(a);Zh.subVectors(e,l);const _=ws.dot(Zh),g=Ds.dot(Zh);if(_>=0&&g<=_)return i.copy(l);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(a).addScaledVector(ws,f);Qh.subVectors(e,c);const y=ws.dot(Qh),b=Ds.dot(Qh);if(b>=0&&y<=b)return i.copy(c);const A=y*p-m*b;if(A<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(a).addScaledVector(Ds,h);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return lv.subVectors(c,l),h=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(lv,h);const S=1/(M+A+v);return f=A*S,h=v*S,i.copy(a).addScaledVector(ws,f).addScaledVector(Ds,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function td(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ht{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=a,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Tt.workingColorSpace){if(e=ab(e,1),i=Mt(i,0,1),a=Mt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=td(f,c,e+1/3),this.g=td(f,c,e),this.b=td(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function a(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const a=xx[e.toLowerCase()];return a!==void 0?this.setHex(a,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),i);const a=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case a:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-a)/g+2;break;case c:m=(a-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=gi){Tt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,a=Nn.g,l=Nn.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(Oc);const a=zh(tr.h,Oc.h,i),l=zh(tr.s,Oc.s,i),c=zh(tr.l,Oc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ht;Ht.NAMES=xx;let xb=0;class fu extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=zs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=yd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(a.blending=this.blending),this.side!==rr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Sd&&(a.blendSrc=this.blendSrc),this.blendDst!==yd&&(a.blendDst=this.blendDst),this.blendEquation!==Ur&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sx extends fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new re,Pc=new Vt;let Sb=0;class Xi{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=Y_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(e),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=qo(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Wn(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y_&&(e.usage=this.usage),e}}class yx extends Xi{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class Mx extends Xi{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Sa extends Xi{constructor(e,i,a){super(new Float32Array(e),i,a)}}let yb=0;const pi=new hn,nd=new ii,Us=new re,ni=new ul,Ko=new ul,vn=new re;class ba extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?Mx:yx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ft().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,a){return pi.makeTranslation(e,i,a),this.applyMatrix4(pi),this}scale(e,i,a){return pi.makeScale(e,i,a),this.applyMatrix4(pi),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Sa(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,Ko.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Ko.max),ni.expandByPoint(vn)):(ni.expandByPoint(Ko.min),ni.expandByPoint(Ko.max))}ni.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)vn.fromBufferAttribute(h,p),m&&(Us.fromBufferAttribute(e,p),vn.add(Us)),l=Math.max(l,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<a.count;Y++)h[Y]=new re,m[Y]=new re;const p=new re,_=new re,g=new re,v=new Vt,y=new Vt,b=new Vt,A=new re,M=new re;function S(Y,T,w){p.fromBufferAttribute(a,Y),_.fromBufferAttribute(a,T),g.fromBufferAttribute(a,w),v.fromBufferAttribute(c,Y),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(v),b.sub(v);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(H),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(H),h[Y].add(A),h[T].add(A),h[w].add(A),m[Y].add(M),m[T].add(M),m[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Y=0,T=O.length;Y<T;++Y){const w=O[Y],H=w.start,K=w.count;for(let Q=H,le=H+K;Q<le;Q+=3)S(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new re,N=new re,z=new re,I=new re;function D(Y){z.fromBufferAttribute(l,Y),I.copy(z);const T=h[Y];P.copy(T),P.sub(z.multiplyScalar(z.dot(T))).normalize(),N.crossVectors(I,T);const H=N.dot(m[Y])<0?-1:1;f.setXYZW(Y,P.x,P.y,P.z,H)}for(let Y=0,T=O.length;Y<T;++Y){const w=O[Y],H=w.start,K=w.count;for(let Q=H,le=H+K;Q<le;Q+=3)D(e.getX(Q+0)),D(e.getX(Q+1)),D(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const l=new re,c=new re,f=new re,h=new re,m=new re,p=new re,_=new re,g=new re;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),A=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,M),h.add(_),m.add(_),p.add(_),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,v=new p.constructor(m.length*_);let y=0,b=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*_;for(let S=0;S<_;S++)v[b++]=p[y++]}return new Xi(v,_,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ba,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=e(v,a);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new hn,Ar=new hb,Fc=new Ap,uv=new re,zc=new re,Ic=new re,Bc=new re,id=new re,Hc=new re,fv=new re,Vc=new re;class Wi extends ii{constructor(e=new ba,i=new Sx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(id.fromBufferAttribute(g,e),f?Hc.addScaledVector(id,_):Hc.addScaledVector(id.sub(i),_))}i.add(Hc)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(c),Ar.copy(e.ray).recast(e.near),!(Fc.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Fc,uv)===null||Ar.origin.distanceToSquared(uv)>(e.far-e.near)**2))&&(cv.copy(c).invert(),Ar.copy(e.ray).applyMatrix4(cv),!(a.boundingBox!==null&&Ar.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,A=v.length;b<A;b++){const M=v[b],S=f[M.materialIndex],O=Math.max(M.start,y.start),P=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let N=O,z=P;N<z;N+=3){const I=h.getX(N),D=h.getX(N+1),Y=h.getX(N+2);l=Gc(this,S,e,a,p,_,g,I,D,Y),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let M=b,S=A;M<S;M+=3){const O=h.getX(M),P=h.getX(M+1),N=h.getX(M+2);l=Gc(this,f,e,a,p,_,g,O,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,A=v.length;b<A;b++){const M=v[b],S=f[M.materialIndex],O=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=O,z=P;N<z;N+=3){const I=N,D=N+1,Y=N+2;l=Gc(this,S,e,a,p,_,g,I,D,Y),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=b,S=A;M<S;M+=3){const O=M,P=M+1,N=M+2;l=Gc(this,f,e,a,p,_,g,O,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Mb(s,e,i,a,l,c,f,h){let m;if(e.side===jn?m=a.intersectTriangle(f,c,l,!0,h):m=a.intersectTriangle(l,c,f,e.side===rr,h),m===null)return null;Vc.copy(h),Vc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:s}}function Gc(s,e,i,a,l,c,f,h,m,p){s.getVertexPosition(h,zc),s.getVertexPosition(m,Ic),s.getVertexPosition(p,Bc);const _=Mb(s,e,i,a,zc,Ic,Bc,fv);if(_){const g=new re;Ci.getBarycoord(fv,zc,Ic,Bc,g),l&&(_.uv=Ci.getInterpolatedAttribute(l,h,m,p,g,new Vt)),c&&(_.uv1=Ci.getInterpolatedAttribute(c,h,m,p,g,new Vt)),f&&(_.normal=Ci.getInterpolatedAttribute(f,h,m,p,g,new re),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new re,materialIndex:0};Ci.getNormal(zc,Ic,Bc,v.normal),_.face=v,_.barycoord=g}return _}class fl extends ba{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,a,i,e,f,c,0),b("z","y","x",1,-1,a,i,-e,f,c,1),b("x","z","y",1,1,e,a,i,l,f,2),b("x","z","y",1,-1,e,a,-i,l,f,3),b("x","y","z",1,-1,e,i,a,l,c,4),b("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new Sa(p,3)),this.setAttribute("normal",new Sa(_,3)),this.setAttribute("uv",new Sa(g,2));function b(A,M,S,O,P,N,z,I,D,Y,T){const w=N/D,H=z/Y,K=N/2,Q=z/2,le=I/2,ce=D+1,F=Y+1;let V=0,te=0;const ye=new re;for(let Se=0;Se<F;Se++){const U=Se*H-Q;for(let $=0;$<ce;$++){const pe=$*w-K;ye[A]=pe*O,ye[M]=U*P,ye[S]=le,p.push(ye.x,ye.y,ye.z),ye[A]=0,ye[M]=0,ye[S]=I>0?1:-1,_.push(ye.x,ye.y,ye.z),g.push($/D),g.push(1-Se/Y),V+=1}}for(let Se=0;Se<Y;Se++)for(let U=0;U<D;U++){const $=v+U+ce*Se,pe=v+U+ce*(Se+1),Ae=v+(U+1)+ce*(Se+1),Be=v+(U+1)+ce*Se;m.push($,pe,Be),m.push(pe,Ae,Be),te+=6}h.addGroup(y,te,T),y+=te,v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const i in s){e[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone():Array.isArray(l)?e[i][a]=l.slice():e[i][a]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const a=ks(s[i]);for(const l in a)e[l]=a[l]}return e}function Eb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ex(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const bb={clone:ks,merge:zn};var Tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tb,this.fragmentShader=Ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Eb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class bx extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new re,hv=new Vt,dv=new Vt;class Ri extends bx{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,hv,dv),i.subVectors(dv,hv)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Fh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ls=-90,Ns=1;class Rb extends ii{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(Ls,Ns,e,i);l.layers=this.layers,this.add(l);const c=new Ri(Ls,Ns,e,i);c.layers=this.layers,this.add(c);const f=new Ri(Ls,Ns,e,i);f.layers=this.layers,this.add(f);const h=new Ri(Ls,Ns,e,i);h.layers=this.layers,this.add(h);const m=new Ri(Ls,Ns,e,i);m.layers=this.layers,this.add(m);const p=new Ri(Ls,Ns,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Vi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===su)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,l),e.render(i,c),e.setRenderTarget(a,1,l),e.render(i,f),e.setRenderTarget(a,2,l),e.render(i,h),e.setRenderTarget(a,3,l),e.render(i,m),e.setRenderTarget(a,4,l),e.render(i,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,l),e.render(i,_),e.setRenderTarget(g,v,y),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Tx extends In{constructor(e=[],i=Fr,a,l,c,f,h,m,p,_){super(e,i,a,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new Tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),c=new Ui({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const f=new Wi(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=Pn),new Rb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}class kc extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,a),S=this._getHandJoint(p,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new kc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}class wb extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Db extends In{constructor(e=null,i=1,a=1,l,c,f,h,m,p=wn,_=wn,g,v){super(null,f,h,m,p,_,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new re,Ub=new re,Lb=new ft;class Dr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=rd.subVectors(a,i).cross(Ub.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(rd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||Lb.getNormalMatrix(e),l=this.coplanarPoint(rd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Ap,Nb=new Vt(.5,.5),Xc=new re;class Rx{constructor(e=new Dr,i=new Dr,a=new Dr,l=new Dr,c=new Dr,f=new Dr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=Vi,a=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],v=c[6],y=c[7],b=c[8],A=c[9],M=c[10],S=c[11],O=c[12],P=c[13],N=c[14],z=c[15];if(l[0].setComponents(p-f,y-_,S-b,z-O).normalize(),l[1].setComponents(p+f,y+_,S+b,z+O).normalize(),l[2].setComponents(p+h,y+g,S+A,z+P).normalize(),l[3].setComponents(p-h,y-g,S-A,z-P).normalize(),a)l[4].setComponents(m,v,M,N).normalize(),l[5].setComponents(p-m,y-v,S-M,z-N).normalize();else if(l[4].setComponents(p-m,y-v,S-M,z-N).normalize(),i===Vi)l[5].setComponents(p+m,y+v,S+M,z+N).normalize();else if(i===su)l[5].setComponents(m,v,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const i=Nb.distanceTo(e.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends In{constructor(e,i,a=qi,l,c,f,h=wn,m=wn,p,_=Ma,g=1){if(_!==Ma&&_!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,f,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ob extends sl{constructor(e,i=qi,a=Fr,l,c,f=wn,h=wn,m,p=Ma){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,a,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cx extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hl extends ba{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(a),m=Math.floor(l),p=h+1,_=m+1,g=e/h,v=i/m,y=[],b=[],A=[],M=[];for(let S=0;S<_;S++){const O=S*v-f;for(let P=0;P<p;P++){const N=P*g-c;b.push(N,-O,0),A.push(0,0,1),M.push(P/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<h;O++){const P=O+p*S,N=O+p*(S+1),z=O+1+p*(S+1),I=O+1+p*S;y.push(P,N,I),y.push(N,z,I)}this.setIndex(y),this.setAttribute("position",new Sa(b,3)),this.setAttribute("normal",new Sa(A,3)),this.setAttribute("uv",new Sa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pb extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fb extends fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zb extends fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rp extends bx{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ib extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function pv(s,e,i,a){const l=Bb(a);switch(i){case dx:return s*e;case mx:return s*e/l.components*l.byteLength;case Sp:return s*e/l.components*l.byteLength;case Vs:return s*e*2/l.components*l.byteLength;case yp:return s*e*2/l.components*l.byteLength;case px:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case Mp:return s*e*4/l.components*l.byteLength;case Kc:case Zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:case Fd:return Math.max(s,16)*Math.max(e,8)/4;case Nd:case Pd:return Math.max(s,8)*Math.max(e,8)/2;case zd:case Id:case Hd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bd:case Gd:case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ap:case rp:case sp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case op:case lp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cp:case up:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Bb(s){switch(s){case _i:case cx:return{byteLength:1,components:1};case il:case ux:case ya:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case qi:case _p:case Hi:return{byteLength:4,components:1};case fx:case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function wx(){let s=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Hb(s){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],A=g[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,g[v]=A)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const A=g[y];s.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Vb,alphahash_pars_fragment:Gb,alphamap_fragment:kb,alphamap_pars_fragment:Xb,alphatest_fragment:qb,alphatest_pars_fragment:Wb,aomap_fragment:jb,aomap_pars_fragment:Yb,batching_pars_vertex:Kb,batching_vertex:Zb,begin_vertex:Qb,beginnormal_vertex:Jb,bsdfs:$b,iridescence_fragment:eT,bumpmap_pars_fragment:tT,clipping_planes_fragment:nT,clipping_planes_pars_fragment:iT,clipping_planes_pars_vertex:aT,clipping_planes_vertex:rT,color_fragment:sT,color_pars_fragment:oT,color_pars_vertex:lT,color_vertex:cT,common:uT,cube_uv_reflection_fragment:fT,defaultnormal_vertex:hT,displacementmap_pars_vertex:dT,displacementmap_vertex:pT,emissivemap_fragment:mT,emissivemap_pars_fragment:gT,colorspace_fragment:_T,colorspace_pars_fragment:vT,envmap_fragment:xT,envmap_common_pars_fragment:ST,envmap_pars_fragment:yT,envmap_pars_vertex:MT,envmap_physical_pars_fragment:NT,envmap_vertex:ET,fog_vertex:bT,fog_pars_vertex:TT,fog_fragment:AT,fog_pars_fragment:RT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:wT,lights_lambert_fragment:DT,lights_lambert_pars_fragment:UT,lights_pars_begin:LT,lights_toon_fragment:OT,lights_toon_pars_fragment:PT,lights_phong_fragment:FT,lights_phong_pars_fragment:zT,lights_physical_fragment:IT,lights_physical_pars_fragment:BT,lights_fragment_begin:HT,lights_fragment_maps:VT,lights_fragment_end:GT,logdepthbuf_fragment:kT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:qT,logdepthbuf_vertex:WT,map_fragment:jT,map_pars_fragment:YT,map_particle_fragment:KT,map_particle_pars_fragment:ZT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:JT,morphinstance_vertex:$T,morphcolor_vertex:e1,morphnormal_vertex:t1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:a1,normal_fragment_maps:r1,normal_pars_fragment:s1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:d1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:_1,dithering_fragment:v1,dithering_pars_fragment:x1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:b1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:w1,specularmap_fragment:D1,specularmap_pars_fragment:U1,tonemapping_fragment:L1,tonemapping_pars_fragment:N1,transmission_fragment:O1,transmission_pars_fragment:P1,uv_pars_fragment:F1,uv_pars_vertex:z1,uv_vertex:I1,worldpos_vertex:B1,background_vert:H1,background_frag:V1,backgroundCube_vert:G1,backgroundCube_frag:k1,cube_vert:X1,cube_frag:q1,depth_vert:W1,depth_frag:j1,distance_vert:Y1,distance_frag:K1,equirect_vert:Z1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:$1,meshbasic_vert:eA,meshbasic_frag:tA,meshlambert_vert:nA,meshlambert_frag:iA,meshmatcap_vert:aA,meshmatcap_frag:rA,meshnormal_vert:sA,meshnormal_frag:oA,meshphong_vert:lA,meshphong_frag:cA,meshphysical_vert:uA,meshphysical_frag:fA,meshtoon_vert:hA,meshtoon_frag:dA,points_vert:pA,points_frag:mA,shadow_vert:gA,shadow_frag:_A,sprite_vert:vA,sprite_frag:xA},Oe={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ii={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ii.physical={uniforms:zn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const qc={r:0,b:0,g:0},Cr=new Ea,SA=new hn;function yA(s,e,i,a,l,c,f){const h=new Ht(0);let m=c===!0?0:1,p,_,g=null,v=0,y=null;function b(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?i:e).get(N)),N}function A(P){let N=!1;const z=b(P);z===null?S(h,m):z&&z.isColor&&(S(z,1),N=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||N)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(P,N){const z=b(N);z&&(z.isCubeTexture||z.mapping===uu)?(_===void 0&&(_=new Wi(new fl(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ks(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,D,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cr.copy(N.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Cr)),_.material.toneMapped=Tt.getTransfer(z.colorSpace)!==Bt,(g!==z||v!==z.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=z,v=z.version,y=s.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Wi(new hl(2,2),new Ui({name:"BackgroundMaterial",uniforms:ks(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(z.colorSpace)!==Bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||v!==z.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=z,v=z.version,y=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function S(P,N){P.getRGB(qc,Ex(s)),a.buffers.color.setClear(qc.r,qc.g,qc.b,N,f)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,N=1){h.set(P),m=N,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,S(h,m)},render:A,addToRenderList:M,dispose:O}}function MA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,f=!1;function h(w,H,K,Q,le){let ce=!1;const F=g(Q,K,H);c!==F&&(c=F,p(c.object)),ce=y(w,Q,K,le),ce&&b(w,Q,K,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,N(w,H,K,Q),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,H,K){const Q=K.wireframe===!0;let le=a[w.id];le===void 0&&(le={},a[w.id]=le);let ce=le[H.id];ce===void 0&&(ce={},le[H.id]=ce);let F=ce[Q];return F===void 0&&(F=v(m()),ce[Q]=F),F}function v(w){const H=[],K=[],Q=[];for(let le=0;le<i;le++)H[le]=0,K[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:Q,object:w,attributes:{},index:null}}function y(w,H,K,Q){const le=c.attributes,ce=H.attributes;let F=0;const V=K.getAttributes();for(const te in V)if(V[te].location>=0){const Se=le[te];let U=ce[te];if(U===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;F++}return c.attributesNum!==F||c.index!==Q}function b(w,H,K,Q){const le={},ce=H.attributes;let F=0;const V=K.getAttributes();for(const te in V)if(V[te].location>=0){let Se=ce[te];Se===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),le[te]=U,F++}c.attributes=le,c.attributesNum=F,c.index=Q}function A(){const w=c.newAttributes;for(let H=0,K=w.length;H<K;H++)w[H]=0}function M(w){S(w,0)}function S(w,H){const K=c.newAttributes,Q=c.enabledAttributes,le=c.attributeDivisors;K[w]=1,Q[w]===0&&(s.enableVertexAttribArray(w),Q[w]=1),le[w]!==H&&(s.vertexAttribDivisor(w,H),le[w]=H)}function O(){const w=c.newAttributes,H=c.enabledAttributes;for(let K=0,Q=H.length;K<Q;K++)H[K]!==w[K]&&(s.disableVertexAttribArray(K),H[K]=0)}function P(w,H,K,Q,le,ce,F){F===!0?s.vertexAttribIPointer(w,H,K,le,ce):s.vertexAttribPointer(w,H,K,Q,le,ce)}function N(w,H,K,Q){A();const le=Q.attributes,ce=K.getAttributes(),F=H.defaultAttributeValues;for(const V in ce){const te=ce[V];if(te.location>=0){let ye=le[V];if(ye===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ye!==void 0){const Se=ye.normalized,U=ye.itemSize,$=e.get(ye);if($===void 0)continue;const pe=$.buffer,Ae=$.type,Be=$.bytesPerElement,ae=Ae===s.INT||Ae===s.UNSIGNED_INT||ye.gpuType===_p;if(ye.isInterleavedBufferAttribute){const fe=ye.data,De=fe.stride,ke=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<te.locationSize;He++)S(te.location+He,fe.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<te.locationSize;He++)M(te.location+He);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let He=0;He<te.locationSize;He++)P(te.location+He,U/te.locationSize,Ae,Se,De*Be,(ke+U/te.locationSize*He)*Be,ae)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<te.locationSize;fe++)S(te.location+fe,ye.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<te.locationSize;fe++)M(te.location+fe);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let fe=0;fe<te.locationSize;fe++)P(te.location+fe,U/te.locationSize,Ae,Se,U*Be,U/te.locationSize*fe*Be,ae)}}else if(F!==void 0){const Se=F[V];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(te.location,Se);break;case 3:s.vertexAttrib3fv(te.location,Se);break;case 4:s.vertexAttrib4fv(te.location,Se);break;default:s.vertexAttrib1fv(te.location,Se)}}}}O()}function z(){Y();for(const w in a){const H=a[w];for(const K in H){const Q=H[K];for(const le in Q)_(Q[le].object),delete Q[le];delete H[K]}delete a[w]}}function I(w){if(a[w.id]===void 0)return;const H=a[w.id];for(const K in H){const Q=H[K];for(const le in Q)_(Q[le].object),delete Q[le];delete H[K]}delete a[w.id]}function D(w){for(const H in a){const K=a[H];if(K[w.id]===void 0)continue;const Q=K[w.id];for(const le in Q)_(Q[le].object),delete Q[le];delete K[w.id]}}function Y(){T(),f=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function EA(s,e,i){let a;function l(p){a=p}function c(p,_){s.drawArrays(a,p,_),i.update(_,a,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(a,p,_,g),i.update(_,a,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,a,1)}function m(p,_,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,_,0,v,0,g);let b=0;for(let A=0;A<g;A++)b+=_[A]*v[A];i.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function bA(s,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(D){return!(D!==Di&&a.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const Y=D===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==_i&&a.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Hi&&!Y)}function m(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:N,maxSamples:z,samples:I}}function TA(s){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Dr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||l;return l=v,a=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,S=s.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const O=c?0:a,P=O*4;let N=S.clippingState||null;m.value=N,N=_(b,v,P,y);for(let z=0;z!==P;++z)N[z]=i[z];S.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,y,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const S=y+A*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,N=y;P!==A;++P,N+=4)f.copy(g[P]).applyMatrix4(O,h),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function AA(s){let e=new WeakMap;function i(f,h){return h===wd?f.mapping=Fr:h===Dd&&(f.mapping=Hs),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===wd||h===Dd)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Ax(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const ar=4,mv=[.125,.215,.35,.446,.526,.582],Lr=20,RA=256,Zo=new Rp,gv=new Ht;let sd=null,od=0,ld=0,cd=!1;const CA=new re;class _v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:h=CA}=c;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ya,format:Di,colorSpace:Gs,depthBuffer:!1},l=vv(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wA(c)),this._blurMaterial=UA(c,e,i),this._ggxMaterial=DA(c,e,i)}return l}_compileMaterial(e){const i=new Wi(new ba,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,a,l,c){const m=new Ri(90,1,i,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(gv),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new fl,new Sx({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let S=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,S=!0):(M.color.copy(gv),S=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):N===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const z=this._cubeSize;Os(l,N*z,P>2?z:0,z,z),g.setRenderTarget(l),S&&g.render(A,m),g.render(e,m)}g.toneMapping=y,g.autoClear=v,e.background=O}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Fr||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Os(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,Zo)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[a];h.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,y=g*v,{_lodMax:b}=this,A=this._sizeLods[a],M=3*A*(a>b-ar?a-b+ar:0),S=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Os(c,M,S,3*A,2*A),l.setRenderTarget(c),l.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Os(e,M,S,3*A,2*A),l.setRenderTarget(e),l.render(h,Zo)}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Lr-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):Lr;M>Lr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Lr}`);const S=[];let O=0;for(let D=0;D<Lr;++D){const Y=D/A,T=Math.exp(-Y*Y/2);S.push(T),D===0?O+=T:D<M&&(O+=2*T)}for(let D=0;D<S.length;D++)S[D]=S[D]/O;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-a;const N=this._sizeLods[l],z=3*N*(l>P-ar?l-P+ar:0),I=4*(this._cubeSize-N);Os(i,z,I,3*N,2*N),m.setRenderTarget(i),m.render(g,Zo)}}function wA(s){const e=[],i=[],a=[];let l=s;const c=s-ar+1+mv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-ar?m=mv[f-s+ar-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,A=3,M=2,S=1,O=new Float32Array(A*b*y),P=new Float32Array(M*b*y),N=new Float32Array(S*b*y);for(let I=0;I<y;I++){const D=I%3*2/3-1,Y=I>2?0:-1,T=[D,Y,0,D+2/3,Y,0,D+2/3,Y+1,0,D,Y,0,D+2/3,Y+1,0,D,Y+1,0];O.set(T,A*b*I),P.set(v,M*b*I);const w=[I,I,I,I,I,I];N.set(w,S*b*I)}const z=new ba;z.setAttribute("position",new Xi(O,A)),z.setAttribute("uv",new Xi(P,M)),z.setAttribute("faceIndex",new Xi(N,S)),a.push(new Wi(z,null)),l>ar&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function vv(s,e,i){const a=new ki(s,e,i);return a.texture.mapping=uu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Os(s,e,i,a,l){s.viewport.set(e,i,a,l),s.scissor.set(e,i,a,l)}function DA(s,e,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function UA(s,e,i){const a=new Float32Array(Lr),l=new re(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function xv(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Sv(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LA(s){let e=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===wd||m===Dd,_=m===Fr||m===Hs;if(p||_){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new _v(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new _v(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function NA(s){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=s.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&rl("WebGLRenderer: "+a+" extension not supported."),l}}}function OA(s,e,i,a){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,b=g.attributes.position;let A=0;if(y!==null){const O=y.array;A=y.version;for(let P=0,N=O.length;P<N;P+=3){const z=O[P+0],I=O[P+1],D=O[P+2];v.push(z,I,I,D,D,z)}}else if(b!==void 0){const O=b.array;A=b.version;for(let P=0,N=O.length/3-1;P<N;P+=3){const z=P+0,I=P+1,D=P+2;v.push(z,I,I,D,D,z)}}else return;const M=new(gx(v)?Mx:yx)(v,1);M.version=A;const S=c.get(g);S&&e.remove(S),c.set(g,M)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function PA(s,e,i){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,y){s.drawElements(a,y,c,v*f),i.update(y,a,1)}function p(v,y,b){b!==0&&(s.drawElementsInstanced(a,y,c,v*f,b),i.update(y,a,b))}function _(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,b);let M=0;for(let S=0;S<b;S++)M+=y[S];i.update(M,a,1)}function g(v,y,b,A){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<v.length;S++)p(v[S]/f,y[S],A[S]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,A,0,b);let S=0;for(let O=0;O<b;O++)S+=y[O]*A[O];i.update(S,a,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function FA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Ct("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function zA(s,e,i){const a=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(h);if(v===void 0||v.count!==g){let w=function(){Y.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),A===!0&&(N=2),M===!0&&(N=3);let z=h.attributes.position.count*N,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const D=new Float32Array(z*I*4*g),Y=new _x(D,z,I,g);Y.type=Hi,Y.needsUpdate=!0;const T=N*4;for(let H=0;H<g;H++){const K=S[H],Q=O[H],le=P[H],ce=z*I*4*H;for(let F=0;F<K.count;F++){const V=F*T;b===!0&&(l.fromBufferAttribute(K,F),D[ce+V+0]=l.x,D[ce+V+1]=l.y,D[ce+V+2]=l.z,D[ce+V+3]=0),A===!0&&(l.fromBufferAttribute(Q,F),D[ce+V+4]=l.x,D[ce+V+5]=l.y,D[ce+V+6]=l.z,D[ce+V+7]=0),M===!0&&(l.fromBufferAttribute(le,F),D[ce+V+8]=l.x,D[ce+V+9]=l.y,D[ce+V+10]=l.z,D[ce+V+11]=le.itemSize===4?l.w:1)}}v={count:g,texture:Y,size:new Vt(z,I)},a.set(h,v),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function IA(s,e,i,a){let l=new WeakMap;function c(m){const p=a.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const BA={[tx]:"LINEAR_TONE_MAPPING",[nx]:"REINHARD_TONE_MAPPING",[ix]:"CINEON_TONE_MAPPING",[ax]:"ACES_FILMIC_TONE_MAPPING",[sx]:"AGX_TONE_MAPPING",[ox]:"NEUTRAL_TONE_MAPPING",[rx]:"CUSTOM_TONE_MAPPING"};function HA(s,e,i,a,l){const c=new ki(e,i,{type:s,depthBuffer:a,stencilBuffer:l}),f=new ki(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),h=new ba;h.setAttribute("position",new Sa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Sa([0,2,0,0,2,0],2));const m=new Pb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Wi(h,m),_=new Rp(-1,1,1,-1,0,1);let g=null,v=null,y=!1,b,A=null,M=[],S=!1;this.setSize=function(O,P){c.setSize(O,P),f.setSize(O,P);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(O,P)}},this.setEffects=function(O){M=O,S=M.length>0&&M[0].isRenderPass===!0;const P=c.width,N=c.height;for(let z=0;z<M.length;z++){const I=M[z];I.setSize&&I.setSize(P,N)}},this.begin=function(O,P){if(y||O.toneMapping===Gi&&M.length===0)return!1;if(A=P,P!==null){const N=P.width,z=P.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return S===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=Gi,!0},this.hasRenderPass=function(){return S},this.end=function(O,P){O.toneMapping=b,y=!0;let N=c,z=f;for(let I=0;I<M.length;I++){const D=M[I];if(D.enabled!==!1&&(D.render(O,z,N,P),D.needsSwap!==!1)){const Y=N;N=z,z=Y}}if(g!==O.outputColorSpace||v!==O.toneMapping){g=O.outputColorSpace,v=O.toneMapping,m.defines={},Tt.getTransfer(g)===Bt&&(m.defines.SRGB_TRANSFER="");const I=BA[v];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,O.setRenderTarget(A),O.render(p,_),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Dx=new In,hp=new sl(1,1),Ux=new _x,Lx=new ub,Nx=new Tx,yv=[],Mv=[],Ev=new Float32Array(16),bv=new Float32Array(9),Tv=new Float32Array(4);function Ws(s,e,i){const a=s[0];if(a<=0||a>0)return s;const l=e*i;let c=yv[l];if(c===void 0&&(c=new Float32Array(l),yv[l]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,a=e.length;i<a;i++)s[i]=e[i]}function du(s,e){let i=Mv[e];i===void 0&&(i=new Int32Array(e),Mv[e]=i);for(let a=0;a!==e;++a)i[a]=s.allocateTextureUnit();return i}function VA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function GA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function kA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function XA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function qA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,a))return;Tv.set(a),s.uniformMatrix2fv(this.addr,!1,Tv),gn(i,a)}}function WA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,a))return;bv.set(a),s.uniformMatrix3fv(this.addr,!1,bv),gn(i,a)}}function jA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,a))return;Ev.set(a),s.uniformMatrix4fv(this.addr,!1,Ev),gn(i,a)}}function YA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function KA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function ZA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function QA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function JA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function eR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function tR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function nR(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?bp:Ep,c=hp):c=Dx,i.setTexture2D(e||c,l)}function iR(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||Lx,l)}function aR(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||Nx,l)}function rR(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||Ux,l)}function sR(s){switch(s){case 5126:return VA;case 35664:return GA;case 35665:return kA;case 35666:return XA;case 35674:return qA;case 35675:return WA;case 35676:return jA;case 5124:case 35670:return YA;case 35667:case 35671:return KA;case 35668:case 35672:return ZA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return $A;case 36295:return eR;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return rR}}function oR(s,e){s.uniform1fv(this.addr,e)}function lR(s,e){const i=Ws(e,this.size,2);s.uniform2fv(this.addr,i)}function cR(s,e){const i=Ws(e,this.size,3);s.uniform3fv(this.addr,i)}function uR(s,e){const i=Ws(e,this.size,4);s.uniform4fv(this.addr,i)}function fR(s,e){const i=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function hR(s,e){const i=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function dR(s,e){const i=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function pR(s,e){s.uniform1iv(this.addr,e)}function mR(s,e){s.uniform2iv(this.addr,e)}function gR(s,e){s.uniform3iv(this.addr,e)}function _R(s,e){s.uniform4iv(this.addr,e)}function vR(s,e){s.uniform1uiv(this.addr,e)}function xR(s,e){s.uniform2uiv(this.addr,e)}function SR(s,e){s.uniform3uiv(this.addr,e)}function yR(s,e){s.uniform4uiv(this.addr,e)}function MR(s,e,i){const a=this.cache,l=e.length,c=du(i,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=hp:f=Dx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function ER(s,e,i){const a=this.cache,l=e.length,c=du(i,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Lx,c[f])}function bR(s,e,i){const a=this.cache,l=e.length,c=du(i,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Nx,c[f])}function TR(s,e,i){const a=this.cache,l=e.length,c=du(i,l);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Ux,c[f])}function AR(s){switch(s){case 5126:return oR;case 35664:return lR;case 35665:return cR;case 35666:return uR;case 35674:return fR;case 35675:return hR;case 35676:return dR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return vR;case 36294:return xR;case 36295:return SR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return TR}}class RR{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=sR(i.type)}}class CR{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AR(i.type)}}class wR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],a)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function Av(s,e){s.seq.push(e),s.map[e.id]=e}function DR(s,e,i){const a=s.name,l=a.length;for(ud.lastIndex=0;;){const c=ud.exec(a),f=ud.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Av(i,p===void 0?new RR(h,s,e):new CR(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new wR(h),Av(i,g)),i=g}}}class $c{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);DR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function Rv(s,e,i){const a=s.createShader(e);return s.shaderSource(a,i),s.compileShader(a),a}const UR=37297;let LR=0;function NR(s,e){const i=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const Cv=new ft;function OR(s){Tt._getMatrix(Cv,Tt.workingColorSpace,s);const e=`mat3( ${Cv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case ru:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wv(s,e,i){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+NR(s.getShaderSource(e),h)}else return c}function PR(s,e){const i=OR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const FR={[tx]:"Linear",[nx]:"Reinhard",[ix]:"Cineon",[ax]:"ACESFilmic",[sx]:"AgX",[ox]:"Neutral",[rx]:"Custom"};function zR(s,e){const i=FR[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new re;function IR(){Tt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function HR(s){const e=[];for(const i in s){const a=s[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function VR(s,e){const i={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function $o(s){return s!==""}function Dv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(s){return s.replace(GR,XR)}const kR=new Map;function XR(s,e){let i=ht[e];if(i===void 0){const a=kR.get(e);if(a!==void 0)i=ht[a],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return dp(i)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(s){return s.replace(qR,WR)}function WR(s,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Nv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jR={[Yc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function YR(s){return jR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KR={[Fr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function ZR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":KR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const QR={[Hs]:"ENVMAP_MODE_REFRACTION"};function JR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":QR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $R={[ex]:"ENVMAP_BLENDING_MULTIPLY",[XE]:"ENVMAP_BLENDING_MIX",[qE]:"ENVMAP_BLENDING_ADD"};function eC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$R[s.combine]||"ENVMAP_BLENDING_NONE"}function tC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function nC(s,e,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=YR(i),p=ZR(i),_=JR(i),g=eC(i),v=tC(i),y=BR(i),b=HR(c),A=l.createProgram();let M,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`)):(M=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?ht.tonemapping_pars_fragment:"",i.toneMapping!==Gi?zR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,PR("linearToOutputTexel",i.outputColorSpace),IR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=dp(f),f=Dv(f,i),f=Uv(f,i),h=dp(h),h=Dv(h,i),h=Uv(h,i),f=Lv(f),h=Lv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=O+M+f,N=O+S+h,z=Rv(l,l.VERTEX_SHADER,P),I=Rv(l,l.FRAGMENT_SHADER,N);l.attachShader(A,z),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function D(H){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",Q=l.getShaderInfoLog(z)||"",le=l.getShaderInfoLog(I)||"",ce=K.trim(),F=Q.trim(),V=le.trim();let te=!0,ye=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,z,I);else{const Se=wv(l,z,"vertex"),U=wv(l,I,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+Se+`
`+U)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(F===""||V==="")&&(ye=!1);ye&&(H.diagnostics={runnable:te,programLog:ce,vertexShader:{log:F,prefix:M},fragmentShader:{log:V,prefix:S}})}l.deleteShader(z),l.deleteShader(I),Y=new $c(l,A),T=VR(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&D(this),Y};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,UR)),w},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=LR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=I,this}let iC=0;class aC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new rC(e),i.set(e,a)),a}}class rC{constructor(e){this.id=iC++,this.code=e,this.usedTimes=0}}function sC(s,e,i,a,l,c,f){const h=new vx,m=new aC,p=new Set,_=[],g=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,w,H,K,Q){const le=K.fog,ce=Q.geometry,F=T.isMeshStandardMaterial?K.environment:null,V=(T.isMeshStandardMaterial?i:e).get(T.envMap||F),te=V&&V.mapping===uu?V.image.height:null,ye=b[T.type];T.precision!==null&&(y=l.getMaxPrecision(T.precision),y!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const Se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=Se!==void 0?Se.length:0;let $=0;ce.morphAttributes.position!==void 0&&($=1),ce.morphAttributes.normal!==void 0&&($=2),ce.morphAttributes.color!==void 0&&($=3);let pe,Ae,Be,ae;if(ye){const bt=Ii[ye];pe=bt.vertexShader,Ae=bt.fragmentShader}else pe=T.vertexShader,Ae=T.fragmentShader,m.update(T),Be=m.getVertexShaderID(T),ae=m.getFragmentShaderID(T);const fe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),ke=Q.isInstancedMesh===!0,He=Q.isBatchedMesh===!0,pt=!!T.map,Jt=!!T.matcap,vt=!!V,mt=!!T.aoMap,wt=!!T.lightMap,ot=!!T.bumpMap,$t=!!T.normalMap,G=!!T.displacementMap,Kt=!!T.emissiveMap,Et=!!T.metalnessMap,Nt=!!T.roughnessMap,je=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,de=T.sheen>0,xe=T.transmission>0,ue=je&&!!T.anisotropyMap,Ke=L&&!!T.clearcoatMap,Ce=L&&!!T.clearcoatNormalMap,Xe=L&&!!T.clearcoatRoughnessMap,tt=q&&!!T.iridescenceMap,Ee=q&&!!T.iridescenceThicknessMap,be=de&&!!T.sheenColorMap,ze=de&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,we=!!T.specularColorMap,ct=!!T.specularIntensityMap,X=xe&&!!T.transmissionMap,Le=xe&&!!T.thicknessMap,Te=!!T.gradientMap,Fe=!!T.alphaMap,Me=T.alphaTest>0,_e=!!T.alphaHash,Re=!!T.extensions;let nt=Gi;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Pt={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:Ae,defines:T.defines,customVertexShaderID:Be,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:He,batchingColor:He&&Q._colorsTexture!==null,instancing:ke,instancingColor:ke&&Q.instanceColor!==null,instancingMorph:ke&&Q.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Gs,alphaToCoverage:!!T.alphaToCoverage,map:pt,matcap:Jt,envMap:vt,envMapMode:vt&&V.mapping,envMapCubeUVHeight:te,aoMap:mt,lightMap:wt,bumpMap:ot,normalMap:$t,displacementMap:G,emissiveMap:Kt,normalMapObjectSpace:$t&&T.normalMapType===KE,normalMapTangentSpace:$t&&T.normalMapType===YE,metalnessMap:Et,roughnessMap:Nt,anisotropy:je,anisotropyMap:ue,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:E,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:be,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:we,specularIntensityMap:ct,transmission:xe,transmissionMap:X,thicknessMap:Le,gradientMap:Te,opaque:T.transparent===!1&&T.blending===zs&&T.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:_e,combine:T.combine,mapUv:pt&&A(T.map.channel),aoMapUv:mt&&A(T.aoMap.channel),lightMapUv:wt&&A(T.lightMap.channel),bumpMapUv:ot&&A(T.bumpMap.channel),normalMapUv:$t&&A(T.normalMap.channel),displacementMapUv:G&&A(T.displacementMap.channel),emissiveMapUv:Kt&&A(T.emissiveMap.channel),metalnessMapUv:Et&&A(T.metalnessMap.channel),roughnessMapUv:Nt&&A(T.roughnessMap.channel),anisotropyMapUv:ue&&A(T.anisotropyMap.channel),clearcoatMapUv:Ke&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(T.sheenRoughnessMap.channel),specularMapUv:Pe&&A(T.specularMap.channel),specularColorMapUv:we&&A(T.specularColorMap.channel),specularIntensityMapUv:ct&&A(T.specularIntensityMap.channel),transmissionMapUv:X&&A(T.transmissionMap.channel),thicknessMapUv:Le&&A(T.thicknessMap.channel),alphaMapUv:Fe&&A(T.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&($t||je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ce.attributes.uv&&(pt||Fe),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:De,skinning:Q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:pt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:Kt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Re&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&T.extensions.multiDraw===!0||He)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function S(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)w.push(H),w.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(O(w,T),P(w,T),w.push(s.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function O(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function P(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function N(T){const w=b[T.type];let H;if(w){const K=Ii[w];H=bb.clone(K.uniforms)}else H=T.uniforms;return H}function z(T,w){let H=g.get(w);return H!==void 0?++H.usedTimes:(H=new nC(s,w,T,c),_.push(H),g.set(w,H)),H}function I(T){if(--T.usedTimes===0){const w=_.indexOf(T);_[w]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function D(T){m.remove(T)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:N,acquireProgram:z,releaseProgram:I,releaseShaderCache:D,programs:_,dispose:Y}}function oC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function lC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ov(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pv(){const s=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(g,v,y,b,A,M){let S=s[e];return S===void 0?(S={id:g.id,object:g,geometry:v,material:y,groupOrder:b,renderOrder:g.renderOrder,z:A,group:M},s[e]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=y,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=A,S.group=M),e++,S}function h(g,v,y,b,A,M){const S=f(g,v,y,b,A,M);y.transmission>0?a.push(S):y.transparent===!0?l.push(S):i.push(S)}function m(g,v,y,b,A,M){const S=f(g,v,y,b,A,M);y.transmission>0?a.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,v){i.length>1&&i.sort(g||lC),a.length>1&&a.sort(v||Ov),l.length>1&&l.sort(v||Ov)}function _(){for(let g=e,v=s.length;g<v;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function cC(){let s=new WeakMap;function e(a,l){const c=s.get(a);let f;return c===void 0?(f=new Pv,s.set(a,[f])):l>=c.length?(f=new Pv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function uC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Ht};break;case"SpotLight":i={position:new re,direction:new re,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":i={color:new Ht,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function fC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let hC=0;function dC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pC(s){const e=new uC,i=fC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new re);const l=new re,c=new hn,f=new hn;function h(p){let _=0,g=0,v=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let y=0,b=0,A=0,M=0,S=0,O=0,P=0,N=0,z=0,I=0,D=0;p.sort(dC);for(let T=0,w=p.length;T<w;T++){const H=p[T],K=H.color,Q=H.intensity,le=H.distance;let ce=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Vs?ce=H.shadow.map.texture:ce=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=K.r*Q,g+=K.g*Q,v+=K.b*Q;else if(H.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(H.sh.coefficients[F],Q);D++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,te=i.get(H);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,a.directionalShadow[y]=te,a.directionalShadowMap[y]=ce,a.directionalShadowMatrix[y]=H.shadow.matrix,O++}a.directional[y]=F,y++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(K).multiplyScalar(Q),F.distance=le,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,a.spot[A]=F;const V=H.shadow;if(H.map&&(a.spotLightMap[z]=H.map,z++,V.updateMatrices(H),H.castShadow&&I++),a.spotLightMatrix[A]=V.matrix,H.castShadow){const te=i.get(H);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,a.spotShadow[A]=te,a.spotShadowMap[A]=ce,N++}A++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(K).multiplyScalar(Q),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=F,M++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const V=H.shadow,te=i.get(H);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,te.shadowCameraNear=V.camera.near,te.shadowCameraFar=V.camera.far,a.pointShadow[b]=te,a.pointShadowMap[b]=ce,a.pointShadowMatrix[b]=H.shadow.matrix,P++}a.point[b]=F,b++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(Q),F.groundColor.copy(H.groundColor).multiplyScalar(Q),a.hemi[S]=F,S++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Oe.LTC_FLOAT_1,a.rectAreaLTC2=Oe.LTC_FLOAT_2):(a.rectAreaLTC1=Oe.LTC_HALF_1,a.rectAreaLTC2=Oe.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const Y=a.hash;(Y.directionalLength!==y||Y.pointLength!==b||Y.spotLength!==A||Y.rectAreaLength!==M||Y.hemiLength!==S||Y.numDirectionalShadows!==O||Y.numPointShadows!==P||Y.numSpotShadows!==N||Y.numSpotMaps!==z||Y.numLightProbes!==D)&&(a.directional.length=y,a.spot.length=A,a.rectArea.length=M,a.point.length=b,a.hemi.length=S,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=N+z-I,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=D,Y.directionalLength=y,Y.pointLength=b,Y.spotLength=A,Y.rectAreaLength=M,Y.hemiLength=S,Y.numDirectionalShadows=O,Y.numPointShadows=P,Y.numSpotShadows=N,Y.numSpotMaps=z,Y.numLightProbes=D,a.version=hC++)}function m(p,_){let g=0,v=0,y=0,b=0,A=0;const M=_.matrixWorldInverse;for(let S=0,O=p.length;S<O;S++){const P=p[S];if(P.isDirectionalLight){const N=a.directional[g];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(P.isSpotLight){const N=a.spot[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const N=a.rectArea[b];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),f.identity(),c.copy(P.matrixWorld),c.premultiply(M),f.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(P.isPointLight){const N=a.point[v];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),v++}else if(P.isHemisphereLight){const N=a.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:a}}function Fv(s){const e=new pC(s),i=[],a=[];function l(_){p.camera=_,i.length=0,a.length=0}function c(_){i.push(_)}function f(_){a.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function mC(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Fv(s),e.set(l,[h])):c>=f.length?(h=new Fv(s),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:i,dispose:a}}const gC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_C=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vC=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],xC=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],zv=new hn,Qo=new re,fd=new re;function SC(s,e,i){let a=new Rx;const l=new Vt,c=new Vt,f=new rn,h=new Fb,m=new zb,p={},_=i.maxTextureSize,g={[rr]:jn,[jn]:rr,[ga]:ga},v=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:gC,fragmentShader:_C}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new ba;b.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Wi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let S=this.type;this.render=function(I,D,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===TE&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Yc);const T=s.getRenderTarget(),w=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),K=s.state;K.setBlending(va),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=S!==this.type;Q&&D.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(ce=>ce.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,ce=I.length;le<ce;le++){const F=I[le],V=F.shadow;if(V===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const te=V.getFrameExtents();if(l.multiply(te),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/te.x),l.x=c.x*te.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/te.y),l.y=c.y*te.y,V.mapSize.y=c.y)),V.map===null||Q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Jo){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ki(l.x,l.y,{format:Vs,type:ya,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new sl(l.x,l.y,Hi),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Ma,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn}else{F.isPointLight?(V.map=new Ax(l.x),V.map.depthTexture=new Ob(l.x,qi)):(V.map=new ki(l.x,l.y),V.map.depthTexture=new sl(l.x,l.y,qi)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Ma;const Se=s.state.buffers.depth.getReversed();this.type===Yc?(V.map.depthTexture.compareFunction=Se?bp:Ep,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn)}V.camera.updateProjectionMatrix()}const ye=V.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ye;Se++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(V.map),s.clear());const U=V.getViewport(Se);f.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),K.viewport(f)}if(F.isPointLight){const U=V.camera,$=V.matrix,pe=F.distance||U.far;pe!==U.far&&(U.far=pe,U.updateProjectionMatrix()),Qo.setFromMatrixPosition(F.matrixWorld),U.position.copy(Qo),fd.copy(U.position),fd.add(vC[Se]),U.up.copy(xC[Se]),U.lookAt(fd),U.updateMatrixWorld(),$.makeTranslation(-Qo.x,-Qo.y,-Qo.z),zv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V._frustum.setFromProjectionMatrix(zv,U.coordinateSystem,U.reversedDepth)}else V.updateMatrices(F);a=V.getFrustum(),N(D,Y,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Jo&&O(V,Y),V.needsUpdate=!1}S=this.type,M.needsUpdate=!1,s.setRenderTarget(T,w,H)};function O(I,D){const Y=e.update(A);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ki(l.x,l.y,{format:Vs,type:ya})),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(D,null,Y,v,A,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(D,null,Y,y,A,null)}function P(I,D,Y,T){let w=null;const H=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)w=H;else if(w=Y.isPointLight===!0?m:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const K=w.uuid,Q=D.uuid;let le=p[K];le===void 0&&(le={},p[K]=le);let ce=le[Q];ce===void 0&&(ce=w.clone(),le[Q]=ce,D.addEventListener("dispose",z)),w=ce}if(w.visible=D.visible,w.wireframe=D.wireframe,T===Jo?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:g[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=s.properties.get(w);K.light=Y}return w}function N(I,D,Y,T,w){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Jo)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const Q=e.update(I),le=I.material;if(Array.isArray(le)){const ce=Q.groups;for(let F=0,V=ce.length;F<V;F++){const te=ce[F],ye=le[te.materialIndex];if(ye&&ye.visible){const Se=P(I,ye,T,w);I.onBeforeShadow(s,I,D,Y,Q,Se,te),s.renderBufferDirect(Y,null,Q,Se,I,te),I.onAfterShadow(s,I,D,Y,Q,Se,te)}}}else if(le.visible){const ce=P(I,le,T,w);I.onBeforeShadow(s,I,D,Y,Q,ce,null),s.renderBufferDirect(Y,null,Q,ce,I,null),I.onAfterShadow(s,I,D,Y,Q,ce,null)}}const K=I.children;for(let Q=0,le=K.length;Q<le;Q++)N(K[Q],D,Y,T,w)}function z(I){I.target.removeEventListener("dispose",z);for(const Y in p){const T=p[Y],w=I.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const yC={[Md]:Ed,[bd]:Rd,[Td]:Cd,[Bs]:Ad,[Ed]:Md,[Rd]:bd,[Cd]:Td,[Ad]:Bs};function MC(s,e){function i(){let X=!1;const Le=new rn;let Te=null;const Fe=new rn(0,0,0,0);return{setMask:function(Me){Te!==Me&&!X&&(s.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){X=Me},setClear:function(Me,_e,Re,nt,Pt){Pt===!0&&(Me*=nt,_e*=nt,Re*=nt),Le.set(Me,_e,Re,nt),Fe.equals(Le)===!1&&(s.clearColor(Me,_e,Re,nt),Fe.copy(Le))},reset:function(){X=!1,Te=null,Fe.set(-1,0,0,0)}}}function a(){let X=!1,Le=!1,Te=null,Fe=null,Me=null;return{setReversed:function(_e){if(Le!==_e){const Re=e.get("EXT_clip_control");_e?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const nt=Me;Me=null,this.setClear(nt)}},getReversed:function(){return Le},setTest:function(_e){_e?fe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!X&&(s.depthMask(_e),Te=_e)},setFunc:function(_e){if(Le&&(_e=yC[_e]),Fe!==_e){switch(_e){case Md:s.depthFunc(s.NEVER);break;case Ed:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Td:s.depthFunc(s.EQUAL);break;case Ad:s.depthFunc(s.GEQUAL);break;case Rd:s.depthFunc(s.GREATER);break;case Cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Me!==_e&&(Le&&(_e=1-_e),s.clearDepth(_e),Me=_e)},reset:function(){X=!1,Te=null,Fe=null,Me=null,Le=!1}}}function l(){let X=!1,Le=null,Te=null,Fe=null,Me=null,_e=null,Re=null,nt=null,Pt=null;return{setTest:function(bt){X||(bt?fe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!X&&(s.stencilMask(bt),Le=bt)},setFunc:function(bt,Dn,vi){(Te!==bt||Fe!==Dn||Me!==vi)&&(s.stencilFunc(bt,Dn,vi),Te=bt,Fe=Dn,Me=vi)},setOp:function(bt,Dn,vi){(_e!==bt||Re!==Dn||nt!==vi)&&(s.stencilOp(bt,Dn,vi),_e=bt,Re=Dn,nt=vi)},setLocked:function(bt){X=bt},setClear:function(bt){Pt!==bt&&(s.clearStencil(bt),Pt=bt)},reset:function(){X=!1,Le=null,Te=null,Fe=null,Me=null,_e=null,Re=null,nt=null,Pt=null}}}const c=new i,f=new a,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],b=null,A=!1,M=null,S=null,O=null,P=null,N=null,z=null,I=null,D=new Ht(0,0,0),Y=0,T=!1,w=null,H=null,K=null,Q=null,le=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(te)[1]),F=V>=1):te.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),F=V>=2);let ye=null,Se={};const U=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),pe=new rn().fromArray(U),Ae=new rn().fromArray($);function Be(X,Le,Te,Fe){const Me=new Uint8Array(4),_e=s.createTexture();s.bindTexture(X,_e),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Te;Re++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Le+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return _e}const ae={};ae[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),fe(s.DEPTH_TEST),f.setFunc(Bs),ot(!1),$t(k_),fe(s.CULL_FACE),mt(va);function fe(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function De(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function ke(X,Le){return g[X]!==Le?(s.bindFramebuffer(X,Le),g[X]=Le,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function He(X,Le){let Te=y,Fe=!1;if(X){Te=v.get(Le),Te===void 0&&(Te=[],v.set(Le,Te));const Me=X.textures;if(Te.length!==Me.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Re=Me.length;_e<Re;_e++)Te[_e]=s.COLOR_ATTACHMENT0+_e;Te.length=Me.length,Fe=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Te)}function pt(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const Jt={[Ur]:s.FUNC_ADD,[RE]:s.FUNC_SUBTRACT,[CE]:s.FUNC_REVERSE_SUBTRACT};Jt[wE]=s.MIN,Jt[DE]=s.MAX;const vt={[UE]:s.ZERO,[LE]:s.ONE,[NE]:s.SRC_COLOR,[Sd]:s.SRC_ALPHA,[BE]:s.SRC_ALPHA_SATURATE,[zE]:s.DST_COLOR,[PE]:s.DST_ALPHA,[OE]:s.ONE_MINUS_SRC_COLOR,[yd]:s.ONE_MINUS_SRC_ALPHA,[IE]:s.ONE_MINUS_DST_COLOR,[FE]:s.ONE_MINUS_DST_ALPHA,[HE]:s.CONSTANT_COLOR,[VE]:s.ONE_MINUS_CONSTANT_COLOR,[GE]:s.CONSTANT_ALPHA,[kE]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Le,Te,Fe,Me,_e,Re,nt,Pt,bt){if(X===va){A===!0&&(De(s.BLEND),A=!1);return}if(A===!1&&(fe(s.BLEND),A=!0),X!==AE){if(X!==M||bt!==T){if((S!==Ur||N!==Ur)&&(s.blendEquation(s.FUNC_ADD),S=Ur,N=Ur),bt)switch(X){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFunc(s.ONE,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case W_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case X_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case q_:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}O=null,P=null,z=null,I=null,D.set(0,0,0),Y=0,M=X,T=bt}return}Me=Me||Le,_e=_e||Te,Re=Re||Fe,(Le!==S||Me!==N)&&(s.blendEquationSeparate(Jt[Le],Jt[Me]),S=Le,N=Me),(Te!==O||Fe!==P||_e!==z||Re!==I)&&(s.blendFuncSeparate(vt[Te],vt[Fe],vt[_e],vt[Re]),O=Te,P=Fe,z=_e,I=Re),(nt.equals(D)===!1||Pt!==Y)&&(s.blendColor(nt.r,nt.g,nt.b,Pt),D.copy(nt),Y=Pt),M=X,T=!1}function wt(X,Le){X.side===ga?De(s.CULL_FACE):fe(s.CULL_FACE);let Te=X.side===jn;Le&&(Te=!Te),ot(Te),X.blending===zs&&X.transparent===!1?mt(va):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Fe=X.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function $t(X){X!==EE?(fe(s.CULL_FACE),X!==H&&(X===k_?s.cullFace(s.BACK):X===bE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),H=X}function G(X){X!==K&&(F&&s.lineWidth(X),K=X)}function Kt(X,Le,Te){X?(fe(s.POLYGON_OFFSET_FILL),(Q!==Le||le!==Te)&&(s.polygonOffset(Le,Te),Q=Le,le=Te)):De(s.POLYGON_OFFSET_FILL)}function Et(X){X?fe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Nt(X){X===void 0&&(X=s.TEXTURE0+ce-1),ye!==X&&(s.activeTexture(X),ye=X)}function je(X,Le,Te){Te===void 0&&(ye===null?Te=s.TEXTURE0+ce-1:Te=ye);let Fe=Se[Te];Fe===void 0&&(Fe={type:void 0,texture:void 0},Se[Te]=Fe),(Fe.type!==X||Fe.texture!==Le)&&(ye!==Te&&(s.activeTexture(Te),ye=Te),s.bindTexture(X,Le||ae[X]),Fe.type=X,Fe.texture=Le)}function L(){const X=Se[ye];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function de(){try{s.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function xe(){try{s.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ce(){try{s.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Xe(){try{s.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function tt(){try{s.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ee(){try{s.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function be(X){pe.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),pe.copy(X))}function ze(X){Ae.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Pe(X,Le){let Te=p.get(Le);Te===void 0&&(Te=new WeakMap,p.set(Le,Te));let Fe=Te.get(X);Fe===void 0&&(Fe=s.getUniformBlockIndex(Le,X.name),Te.set(X,Fe))}function we(X,Le){const Fe=p.get(Le).get(X);m.get(Le)!==Fe&&(s.uniformBlockBinding(Le,Fe,X.__bindingPointIndex),m.set(Le,Fe))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ye=null,Se={},g={},v=new WeakMap,y=[],b=null,A=!1,M=null,S=null,O=null,P=null,N=null,z=null,I=null,D=new Ht(0,0,0),Y=0,T=!1,w=null,H=null,K=null,Q=null,le=null,pe.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:fe,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:pt,setBlending:mt,setMaterial:wt,setFlipSided:ot,setCullFace:$t,setLineWidth:G,setPolygonOffset:Kt,setScissorTest:Et,activeTexture:Nt,bindTexture:je,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:tt,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:de,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:be,viewport:ze,reset:ct}}function EC(s,e,i,a,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):ou("canvas")}function A(L,E,q){let de=1;const xe=je(L);if((xe.width>q||xe.height>q)&&(de=q/Math.max(xe.width,xe.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(de*xe.width),Ke=Math.floor(de*xe.height);g===void 0&&(g=b(ue,Ke));const Ce=E?b(ue,Ke):g;return Ce.width=ue,Ce.height=Ke,Ce.getContext("2d").drawImage(L,0,0,ue,Ke),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Ke+")."),Ce}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,E,q,de,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=E;if(E===s.RED&&(q===s.FLOAT&&(ue=s.R32F),q===s.HALF_FLOAT&&(ue=s.R16F),q===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.R8UI),q===s.UNSIGNED_SHORT&&(ue=s.R16UI),q===s.UNSIGNED_INT&&(ue=s.R32UI),q===s.BYTE&&(ue=s.R8I),q===s.SHORT&&(ue=s.R16I),q===s.INT&&(ue=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ue=s.RG32F),q===s.HALF_FLOAT&&(ue=s.RG16F),q===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),q===s.UNSIGNED_INT&&(ue=s.RG32UI),q===s.BYTE&&(ue=s.RG8I),q===s.SHORT&&(ue=s.RG16I),q===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),q===s.UNSIGNED_INT&&(ue=s.RGB32UI),q===s.BYTE&&(ue=s.RGB8I),q===s.SHORT&&(ue=s.RGB16I),q===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),q===s.BYTE&&(ue=s.RGBA8I),q===s.SHORT&&(ue=s.RGBA16I),q===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const Ke=xe?ru:Tt.getTransfer(de);q===s.FLOAT&&(ue=s.RGBA32F),q===s.HALF_FLOAT&&(ue=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ue=Ke===Bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function N(L,E){let q;return L?E===null||E===qi||E===al?q=s.DEPTH24_STENCIL8:E===Hi?q=s.DEPTH32F_STENCIL8:E===il&&(q=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===al?q=s.DEPTH_COMPONENT24:E===Hi?q=s.DEPTH_COMPONENT32F:E===il&&(q=s.DEPTH_COMPONENT16),q}function z(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),Y(E),E.isVideoTexture&&_.delete(E)}function D(L){const E=L.target;E.removeEventListener("dispose",D),w(E)}function Y(L){const E=a.get(L);if(E.__webglInit===void 0)return;const q=L.source,de=v.get(q);if(de){const xe=de[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&T(L),Object.keys(de).length===0&&v.delete(q)}a.remove(L)}function T(L){const E=a.get(L);s.deleteTexture(E.__webglTexture);const q=L.source,de=v.get(q);delete de[E.__cacheKey],f.memory.textures--}function w(L){const E=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let xe=0;xe<E.__webglFramebuffer[de].length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[de][xe]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let de=0,xe=q.length;de<xe;de++){const ue=a.get(q[de]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),a.remove(q[de])}a.remove(L)}let H=0;function K(){H=0}function Q(){const L=H;return L>=l.maxTextures&&st("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function le(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ce(L,E){const q=a.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const de=L.image;if(de===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function F(L,E){const q=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ae(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function V(L,E){const q=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ae(q,L,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function te(L,E){const q=a.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){fe(q,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const ye={[Ud]:s.REPEAT,[_a]:s.CLAMP_TO_EDGE,[Ld]:s.MIRRORED_REPEAT},Se={[wn]:s.NEAREST,[WE]:s.NEAREST_MIPMAP_NEAREST,[Ac]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Ph]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},U={[ZE]:s.NEVER,[tb]:s.ALWAYS,[QE]:s.LESS,[Ep]:s.LEQUAL,[JE]:s.EQUAL,[bp]:s.GEQUAL,[$E]:s.GREATER,[eb]:s.NOTEQUAL};function $(L,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Ph||E.magFilter===Ac||E.magFilter===Nr||E.minFilter===Pn||E.minFilter===Ph||E.minFilter===Ac||E.minFilter===Nr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ye[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ye[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ye[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Se[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Ac&&E.minFilter!==Nr||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function pe(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const de=E.source;let xe=v.get(de);xe===void 0&&(xe={},v.set(de,xe));const ue=le(E);if(ue!==L.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),xe[ue].usedTimes++;const Ke=xe[L.__cacheKey];Ke!==void 0&&(xe[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&T(E)),L.__cacheKey=ue,L.__webglTexture=xe[ue].texture}return q}function Ae(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Be(L,E,q,de){const ue=L.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,de,E.data);else{ue.sort((Ee,be)=>Ee.start-be.start);let Ke=0;for(let Ee=1;Ee<ue.length;Ee++){const be=ue[Ke],ze=ue[Ee],Pe=be.start+be.count,we=Ae(ze.start,E.width,4),ct=Ae(be.start,E.width,4);ze.start<=Pe+1&&we===ct&&Ae(ze.start+ze.count-1,E.width,4)===we?be.count=Math.max(be.count,ze.start+ze.count-be.start):(++Ke,ue[Ke]=ze)}ue.length=Ke+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),Xe=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,be=ue.length;Ee<be;Ee++){const ze=ue[Ee],Pe=Math.floor(ze.start/4),we=Math.ceil(ze.count/4),ct=Pe%E.width,X=Math.floor(Pe/E.width),Le=we,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ct,X,Le,Te,q,de,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function ae(L,E,q){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const xe=pe(L,E),ue=E.source;i.bindTexture(de,L.__webglTexture,s.TEXTURE0+q);const Ke=a.get(ue);if(ue.version!==Ke.__version||xe===!0){i.activeTexture(s.TEXTURE0+q);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Xe=E.colorSpace===ir?null:Tt.getPrimaries(E.colorSpace),tt=E.colorSpace===ir||Ce===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ee=A(E.image,!1,l.maxTextureSize);Ee=Nt(E,Ee);const be=c.convert(E.format,E.colorSpace),ze=c.convert(E.type);let Pe=P(E.internalFormat,be,ze,E.colorSpace,E.isVideoTexture);$(de,E);let we;const ct=E.mipmaps,X=E.isVideoTexture!==!0,Le=Ke.__version===void 0||xe===!0,Te=ue.dataReady,Fe=z(E,Ee);if(E.isDepthTexture)Pe=N(E.format===Or,E.type),Le&&(X?i.texStorage2D(s.TEXTURE_2D,1,Pe,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,be,ze,null));else if(E.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(s.TEXTURE_2D,Fe,Pe,ct[0].width,ct[0].height);for(let Me=0,_e=ct.length;Me<_e;Me++)we=ct[Me],X?Te&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,we.width,we.height,be,ze,we.data):i.texImage2D(s.TEXTURE_2D,Me,Pe,we.width,we.height,0,be,ze,we.data);E.generateMipmaps=!1}else X?(Le&&i.texStorage2D(s.TEXTURE_2D,Fe,Pe,Ee.width,Ee.height),Te&&Be(E,Ee,be,ze)):i.texImage2D(s.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,be,ze,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Pe,ct[0].width,ct[0].height,Ee.depth);for(let Me=0,_e=ct.length;Me<_e;Me++)if(we=ct[Me],E.format!==Di)if(be!==null)if(X){if(Te)if(E.layerUpdates.size>0){const Re=pv(we.width,we.height,E.format,E.type);for(const nt of E.layerUpdates){const Pt=we.data.subarray(nt*Re/we.data.BYTES_PER_ELEMENT,(nt+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,nt,we.width,we.height,1,be,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,we.width,we.height,Ee.depth,be,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Pe,we.width,we.height,Ee.depth,0,we.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,we.width,we.height,Ee.depth,be,ze,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Me,Pe,we.width,we.height,Ee.depth,0,be,ze,we.data)}else{X&&Le&&i.texStorage2D(s.TEXTURE_2D,Fe,Pe,ct[0].width,ct[0].height);for(let Me=0,_e=ct.length;Me<_e;Me++)we=ct[Me],E.format!==Di?be!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,we.width,we.height,be,we.data):i.compressedTexImage2D(s.TEXTURE_2D,Me,Pe,we.width,we.height,0,we.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,we.width,we.height,be,ze,we.data):i.texImage2D(s.TEXTURE_2D,Me,Pe,we.width,we.height,0,be,ze,we.data)}else if(E.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Pe,Ee.width,Ee.height,Ee.depth),Te)if(E.layerUpdates.size>0){const Me=pv(Ee.width,Ee.height,E.format,E.type);for(const _e of E.layerUpdates){const Re=Ee.data.subarray(_e*Me/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Ee.width,Ee.height,1,be,ze,Re)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,ze,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,be,ze,Ee.data);else if(E.isData3DTexture)X?(Le&&i.texStorage3D(s.TEXTURE_3D,Fe,Pe,Ee.width,Ee.height,Ee.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,ze,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,be,ze,Ee.data);else if(E.isFramebufferTexture){if(Le)if(X)i.texStorage2D(s.TEXTURE_2D,Fe,Pe,Ee.width,Ee.height);else{let Me=Ee.width,_e=Ee.height;for(let Re=0;Re<Fe;Re++)i.texImage2D(s.TEXTURE_2D,Re,Pe,Me,_e,0,be,ze,null),Me>>=1,_e>>=1}}else if(ct.length>0){if(X&&Le){const Me=je(ct[0]);i.texStorage2D(s.TEXTURE_2D,Fe,Pe,Me.width,Me.height)}for(let Me=0,_e=ct.length;Me<_e;Me++)we=ct[Me],X?Te&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,be,ze,we):i.texImage2D(s.TEXTURE_2D,Me,Pe,be,ze,we);E.generateMipmaps=!1}else if(X){if(Le){const Me=je(Ee);i.texStorage2D(s.TEXTURE_2D,Fe,Pe,Me.width,Me.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,be,ze,Ee)}else i.texImage2D(s.TEXTURE_2D,0,Pe,be,ze,Ee);M(E)&&S(de),Ke.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function fe(L,E,q){if(E.image.length!==6)return;const de=pe(L,E),xe=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const ue=a.get(xe);if(xe.version!==ue.__version||de===!0){i.activeTexture(s.TEXTURE0+q);const Ke=Tt.getPrimaries(Tt.workingColorSpace),Ce=E.colorSpace===ir?null:Tt.getPrimaries(E.colorSpace),Xe=E.colorSpace===ir||Ke===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,be=[];for(let _e=0;_e<6;_e++)!tt&&!Ee?be[_e]=A(E.image[_e],!0,l.maxCubemapSize):be[_e]=Ee?E.image[_e].image:E.image[_e],be[_e]=Nt(E,be[_e]);const ze=be[0],Pe=c.convert(E.format,E.colorSpace),we=c.convert(E.type),ct=P(E.internalFormat,Pe,we,E.colorSpace),X=E.isVideoTexture!==!0,Le=ue.__version===void 0||de===!0,Te=xe.dataReady;let Fe=z(E,ze);$(s.TEXTURE_CUBE_MAP,E);let Me;if(tt){X&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ct,ze.width,ze.height);for(let _e=0;_e<6;_e++){Me=be[_e].mipmaps;for(let Re=0;Re<Me.length;Re++){const nt=Me[Re];E.format!==Di?Pe!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,ct,nt.width,nt.height,0,nt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,nt.width,nt.height,Pe,we,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,ct,nt.width,nt.height,0,Pe,we,nt.data)}}}else{if(Me=E.mipmaps,X&&Le){Me.length>0&&Fe++;const _e=je(be[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ct,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ee){X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be[_e].width,be[_e].height,Pe,we,be[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,be[_e].width,be[_e].height,0,Pe,we,be[_e].data);for(let Re=0;Re<Me.length;Re++){const Pt=Me[Re].image[_e].image;X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Pt.width,Pt.height,Pe,we,Pt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,ct,Pt.width,Pt.height,0,Pe,we,Pt.data)}}else{X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe,we,be[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Pe,we,be[_e]);for(let Re=0;Re<Me.length;Re++){const nt=Me[Re];X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Pe,we,nt.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,ct,Pe,we,nt.image[_e])}}}M(E)&&S(s.TEXTURE_CUBE_MAP),ue.__version=xe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function De(L,E,q,de,xe,ue){const Ke=c.convert(q.format,q.colorSpace),Ce=c.convert(q.type),Xe=P(q.internalFormat,Ke,Ce,q.colorSpace),tt=a.get(E),Ee=a.get(q);if(Ee.__renderTarget=E,!tt.__hasExternalTextures){const be=Math.max(1,E.width>>ue),ze=Math.max(1,E.height>>ue);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?i.texImage3D(xe,ue,Xe,be,ze,E.depth,0,Ke,Ce,null):i.texImage2D(xe,ue,Xe,be,ze,0,Ke,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Kt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,xe,Ee.__webglTexture,0,G(E)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,xe,Ee.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(L,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const de=E.depthTexture,xe=de&&de.isDepthTexture?de.type:null,ue=N(E.stencilBuffer,xe),Ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Kt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),ue,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,L)}else{const de=E.textures;for(let xe=0;xe<de.length;xe++){const ue=de[xe],Ke=c.convert(ue.format,ue.colorSpace),Ce=c.convert(ue.type),Xe=P(ue.internalFormat,Ke,Ce,ue.colorSpace);Kt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),Xe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),Xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Xe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(L,E,q){const de=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=a.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),$(s.TEXTURE_CUBE_MAP,E.depthTexture);const tt=c.convert(E.depthTexture.format),Ee=c.convert(E.depthTexture.type);let be;E.depthTexture.format===Ma?be=s.DEPTH_COMPONENT24:E.depthTexture.format===Or&&(be=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,be,E.width,E.height,0,tt,Ee,null)}}else ce(E.depthTexture,0);const ue=xe.__webglTexture,Ke=G(E),Ce=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Xe=E.depthTexture.format===Or?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)Kt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,Ce,ue,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,Ce,ue,0);else if(E.depthTexture.format===Or)Kt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,Ce,ue,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,Ce,ue,0);else throw new Error("Unknown depthTexture format")}function pt(L){const E=a.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",xe)};de.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=de}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let de=0;de<6;de++)He(E.__webglFramebuffer[de],L,de);else{const de=L.texture.mipmaps;de&&de.length>0?He(E.__webglFramebuffer[0],L,0):He(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),ke(E.__webglDepthbuffer[de],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ue)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ke(E.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(L,E,q){const de=a.get(L);E!==void 0&&De(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&pt(L)}function vt(L){const E=L.texture,q=a.get(L),de=a.get(E);L.addEventListener("dispose",D);const xe=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,f.memory.textures++),ue){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<E.mipmaps.length;Xe++)q.__webglFramebuffer[Ce][Xe]=s.createFramebuffer()}else q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const tt=a.get(xe[Ce]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Kt(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Xe=xe[Ce];q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const tt=c.convert(Xe.format,Xe.colorSpace),Ee=c.convert(Xe.type),be=P(Xe.internalFormat,tt,Ee,Xe.colorSpace,L.isXRRenderTarget===!0),ze=G(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,be,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),$(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)De(q.__webglFramebuffer[Ce][Xe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else De(q.__webglFramebuffer[Ce],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(E)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const tt=xe[Ce],Ee=a.get(tt);let be=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(be,Ee.__webglTexture),$(be,tt),De(q.__webglFramebuffer,L,tt,s.COLOR_ATTACHMENT0+Ce,be,0),M(tt)&&S(be)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,de.__webglTexture),$(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)De(q.__webglFramebuffer[Xe],L,E,s.COLOR_ATTACHMENT0,Ce,Xe);else De(q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Ce,0);M(E)&&S(Ce),i.unbindTexture()}L.depthBuffer&&pt(L)}function mt(L){const E=L.textures;for(let q=0,de=E.length;q<de;q++){const xe=E[q];if(M(xe)){const ue=O(L),Ke=a.get(xe).__webglTexture;i.bindTexture(ue,Ke),S(ue),i.unbindTexture()}}}const wt=[],ot=[];function $t(L){if(L.samples>0){if(Kt(L)===!1){const E=L.textures,q=L.width,de=L.height;let xe=s.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=a.get(L),Ce=E.length>1;if(Ce)for(let tt=0;tt<E.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=L.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[tt]);const Ee=a.get(E[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,q,de,0,0,q,de,xe,s.NEAREST),m===!0&&(wt.length=0,ot.length=0,wt.push(s.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(wt.push(ue),ot.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let tt=0;tt<E.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[tt]);const Ee=a.get(E[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function Kt(L){const E=a.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Nt(L,E){const q=L.colorSpace,de=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Gs&&q!==ir&&(Tt.getTransfer(q)===Bt?(de!==Di||xe!==_i)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",q)),E}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=te,this.rebindTextures=Jt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function bC(s,e){function i(a,l=ir){let c;const f=Tt.getTransfer(l);if(a===_i)return s.UNSIGNED_BYTE;if(a===vp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===fx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===hx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===cx)return s.BYTE;if(a===ux)return s.SHORT;if(a===il)return s.UNSIGNED_SHORT;if(a===_p)return s.INT;if(a===qi)return s.UNSIGNED_INT;if(a===Hi)return s.FLOAT;if(a===ya)return s.HALF_FLOAT;if(a===dx)return s.ALPHA;if(a===px)return s.RGB;if(a===Di)return s.RGBA;if(a===Ma)return s.DEPTH_COMPONENT;if(a===Or)return s.DEPTH_STENCIL;if(a===mx)return s.RED;if(a===Sp)return s.RED_INTEGER;if(a===Vs)return s.RG;if(a===yp)return s.RG_INTEGER;if(a===Mp)return s.RGBA_INTEGER;if(a===Kc||a===Zc||a===Qc||a===Jc)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Nd||a===Od||a===Pd||a===Fd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Od)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zd||a===Id||a===Bd||a===Hd||a===Vd||a===Gd||a===kd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===zd||a===Id)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Bd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Hd)return c.COMPRESSED_R11_EAC;if(a===Vd)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Gd)return c.COMPRESSED_RG11_EAC;if(a===kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Xd||a===qd||a===Wd||a===jd||a===Yd||a===Kd||a===Zd||a===Qd||a===Jd||a===$d||a===ep||a===tp||a===np||a===ip)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Xd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Wd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Yd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Qd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Jd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===$d)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ep)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===tp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===np)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ip)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ap||a===rp||a===sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===ap)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===op||a===lp||a===cp||a===up)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===op)return c.COMPRESSED_RED_RGTC1_EXT;if(a===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===up)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===al?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const TC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new Cx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new Ui({vertexShader:TC,fragmentShader:AC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new hl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CC extends qs{constructor(e,i){super();const a=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",M=new RC,S={},O=i.getContextAttributes();let P=null,N=null;const z=[],I=[],D=new Vt;let Y=null;const T=new Ri;T.viewport=new rn;const w=new Ri;w.viewport=new rn;const H=[T,w],K=new Ib;let Q=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=z[ae];return fe===void 0&&(fe=new ad,z[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=z[ae];return fe===void 0&&(fe=new ad,z[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=z[ae];return fe===void 0&&(fe=new ad,z[ae]=fe),fe.getHandSpace()};function ce(ae){const fe=I.indexOf(ae.inputSource);if(fe===-1)return;const De=z[fe];De!==void 0&&(De.update(ae.inputSource,ae.frame,p||f),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",V);for(let ae=0;ae<z.length;ae++){const fe=I[ae];fe!==null&&(I[ae]=null,z[ae].disconnect(fe))}Q=null,le=null,M.reset();for(const ae in S)delete S[ae];e.setRenderTarget(P),y=null,v=null,g=null,l=null,N=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(Y),e.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,a.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,a.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",F),l.addEventListener("inputsourceschange",V),O.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(D),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;O.depth&&(He=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=O.stencil?Or:Ma,ke=O.stencil?al:qi);const pt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(pt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ki(v.textureWidth,v.textureHeight,{format:Di,type:_i,depthTexture:new sl(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const De={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ki(y.framebufferWidth,y.framebufferHeight,{format:Di,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(ae){for(let fe=0;fe<ae.removed.length;fe++){const De=ae.removed[fe],ke=I.indexOf(De);ke>=0&&(I[ke]=null,z[ke].disconnect(De))}for(let fe=0;fe<ae.added.length;fe++){const De=ae.added[fe];let ke=I.indexOf(De);if(ke===-1){for(let pt=0;pt<z.length;pt++)if(pt>=I.length){I.push(De),ke=pt;break}else if(I[pt]===null){I[pt]=De,ke=pt;break}if(ke===-1)break}const He=z[ke];He&&He.connect(De)}}const te=new re,ye=new re;function Se(ae,fe,De){te.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(De.matrixWorld);const ke=te.distanceTo(ye),He=fe.projectionMatrix.elements,pt=De.projectionMatrix.elements,Jt=He[14]/(He[10]-1),vt=He[14]/(He[10]+1),mt=(He[9]+1)/He[5],wt=(He[9]-1)/He[5],ot=(He[8]-1)/He[0],$t=(pt[8]+1)/pt[0],G=Jt*ot,Kt=Jt*$t,Et=ke/(-ot+$t),Nt=Et*-ot;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Nt),ae.translateZ(Et),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),He[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Jt+Et,L=vt+Et,E=G-Nt,q=Kt+(ke-Nt),de=mt*vt/L*je,xe=wt*vt/L*je;ae.projectionMatrix.makePerspective(E,q,de,xe,je,L),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function U(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let fe=ae.near,De=ae.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(De=M.depthFar)),K.near=w.near=T.near=fe,K.far=w.far=T.far=De,(Q!==K.near||le!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,le=K.far),K.layers.mask=ae.layers.mask|6,T.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;const ke=ae.parent,He=K.cameras;U(K,ke);for(let pt=0;pt<He.length;pt++)U(He[pt],ke);He.length===2?Se(K,T,w):K.projectionMatrix.copy(T.projectionMatrix),$(ae,K,ke)};function $(ae,fe,De){De===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=fp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(ae){m=ae,v!==null&&(v.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(ae){return S[ae]};let pe=null;function Ae(ae,fe){if(_=fe.getViewerPose(p||f),b=fe,_!==null){const De=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ke=!1;De.length!==K.cameras.length&&(K.cameras.length=0,ke=!0);for(let vt=0;vt<De.length;vt++){const mt=De[vt];let wt=null;if(y!==null)wt=y.getViewport(mt);else{const $t=g.getViewSubImage(v,mt);wt=$t.viewport,vt===0&&(e.setRenderTargetTextures(N,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(N))}let ot=H[vt];ot===void 0&&(ot=new Ri,ot.layers.enable(vt),ot.viewport=new rn,H[vt]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(wt.x,wt.y,wt.width,wt.height),vt===0&&(K.matrix.copy(ot.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ke===!0&&K.cameras.push(ot)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=a.getBinding();const vt=g.getDepthInformation(De[0]);vt&&vt.isValid&&vt.texture&&M.init(vt,l.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),g=a.getBinding();for(let vt=0;vt<De.length;vt++){const mt=De[vt].camera;if(mt){let wt=S[mt];wt||(wt=new Cx,S[mt]=wt);const ot=g.getCameraImage(mt);wt.sourceTexture=ot}}}}for(let De=0;De<z.length;De++){const ke=I[De],He=z[De];ke!==null&&He!==void 0&&He.update(ke,fe,p||f)}pe&&pe(ae,fe),fe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:fe}),b=null}const Be=new wx;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(ae){pe=ae},this.dispose=function(){}}}const wr=new Ea,wC=new hn;function DC(s,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,Ex(s)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,O,P,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),g(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S)):S.isMeshStandardMaterial?(c(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,N)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),A(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,O,P):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===jn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===jn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const O=e.get(S),P=O.envMap,N=O.envMapRotation;P&&(M.envMap.value=P,wr.copy(N),wr.x*=-1,wr.y*=-1,wr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),M.envMapRotation.value.setFromMatrix4(wC.makeRotationFromEuler(wr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,O,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*O,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,O){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const O=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function UC(s,e,i,a){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,P){const N=P.program;a.uniformBlockBinding(O,N)}function p(O,P){let N=l[O.id];N===void 0&&(b(O),N=_(O),l[O.id]=N,O.addEventListener("dispose",M));const z=P.program;a.updateUBOMapping(O,z);const I=e.render.frame;c[O.id]!==I&&(v(O),c[O.id]=I)}function _(O){const P=g();O.__bindingPointIndex=P;const N=s.createBuffer(),z=O.__size,I=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function g(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const P=l[O.id],N=O.uniforms,z=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,D=N.length;I<D;I++){const Y=Array.isArray(N[I])?N[I]:[N[I]];for(let T=0,w=Y.length;T<w;T++){const H=Y[T];if(y(H,I,T,z)===!0){const K=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let ce=0;ce<Q.length;ce++){const F=Q[ce],V=A(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,K+le,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,le),le+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,P,N,z){const I=O.value,D=P+"_"+N;if(z[D]===void 0)return typeof I=="number"||typeof I=="boolean"?z[D]=I:z[D]=I.clone(),!0;{const Y=z[D];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return z[D]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function b(O){const P=O.uniforms;let N=0;const z=16;for(let D=0,Y=P.length;D<Y;D++){const T=Array.isArray(P[D])?P[D]:[P[D]];for(let w=0,H=T.length;w<H;w++){const K=T[w],Q=Array.isArray(K.value)?K.value:[K.value];for(let le=0,ce=Q.length;le<ce;le++){const F=Q[le],V=A(F),te=N%z,ye=te%V.boundary,Se=te+ye;N+=ye,Se!==0&&z-Se<V.storage&&(N+=z-Se),K.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=V.storage}}}const I=N%z;return I>0&&(N+=z-I),O.__size=N,O.__cache={},this}function A(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",O),P}function M(O){const P=O.target;P.removeEventListener("dispose",M);const N=f.indexOf(P.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function S(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const LC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function NC(){return zi===null&&(zi=new Db(LC,16,16,Vs,ya),zi.name="DFG_LUT",zi.minFilter=Pn,zi.magFilter=Pn,zi.wrapS=_a,zi.wrapT=_a,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class OC{constructor(e={}){const{canvas:i=nb(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=_i}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=f;const A=y,M=new Set([Mp,yp,Sp]),S=new Set([_i,qi,il,al,vp,xp]),O=new Uint32Array(4),P=new Int32Array(4);let N=null,z=null;const I=[],D=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=gi;let H=0,K=0,Q=null,le=-1,ce=null;const F=new rn,V=new rn;let te=null;const ye=new Ht(0);let Se=0,U=i.width,$=i.height,pe=1,Ae=null,Be=null;const ae=new rn(0,0,U,$),fe=new rn(0,0,U,$);let De=!1;const ke=new Rx;let He=!1,pt=!1;const Jt=new hn,vt=new re,mt=new rn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function $t(){return Q===null?pe:1}let G=a;function Kt(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const W="webgl2";if(G=Kt(W,C),G===null)throw Kt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let Et,Nt,je,L,E,q,de,xe,ue,Ke,Ce,Xe,tt,Ee,be,ze,Pe,we,ct,X,Le,Te,Fe,Me;function _e(){Et=new NA(G),Et.init(),Te=new bC(G,Et),Nt=new bA(G,Et,e,Te),je=new MC(G,Et),Nt.reversedDepthBuffer&&v&&je.buffers.depth.setReversed(!0),L=new FA(G),E=new oC,q=new EC(G,Et,je,E,Nt,Te,L),de=new AA(T),xe=new LA(T),ue=new Hb(G),Fe=new MA(G,ue),Ke=new OA(G,ue,L,Fe),Ce=new IA(G,Ke,ue,L),ct=new zA(G,Nt,q),ze=new TA(E),Xe=new sC(T,de,xe,Et,Nt,Fe,ze),tt=new DC(T,E),Ee=new cC,be=new mC(Et),we=new yA(T,de,xe,je,Ce,b,m),Pe=new SC(T,Ce,Nt),Me=new UC(G,L,Nt,je),X=new EA(G,Et,L),Le=new PA(G,Et,L),L.programs=Xe.programs,T.capabilities=Nt,T.extensions=Et,T.properties=E,T.renderLists=Ee,T.shadowMap=Pe,T.state=je,T.info=L}_e(),A!==_i&&(Y=new HA(A,i.width,i.height,l,c));const Re=new CC(T,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(U,$,!1))},this.getSize=function(C){return C.set(U,$)},this.setSize=function(C,W,se=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,$=W,i.width=Math.floor(C*pe),i.height=Math.floor(W*pe),se===!0&&(i.style.width=C+"px",i.style.height=W+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(U*pe,$*pe).floor()},this.setDrawingBufferSize=function(C,W,se){U=C,$=W,pe=se,i.width=Math.floor(C*se),i.height=Math.floor(W*se),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(A===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,W,se,ne){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,W,se,ne),je.viewport(F.copy(ae).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,W,se,ne){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,W,se,ne),je.scissor(V.copy(fe).multiplyScalar(pe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){je.setScissorTest(De=C)},this.setOpaqueSort=function(C){Ae=C},this.setTransparentSort=function(C){Be=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,se=!0){let ne=0;if(C){let Z=!1;if(Q!==null){const Ue=Q.texture.format;Z=M.has(Ue)}if(Z){const Ue=Q.texture.type,Ie=S.has(Ue),Ne=we.getClearColor(),Ve=we.getClearAlpha(),qe=Ne.r,Je=Ne.g,We=Ne.b;Ie?(O[0]=qe,O[1]=Je,O[2]=We,O[3]=Ve,G.clearBufferuiv(G.COLOR,0,O)):(P[0]=qe,P[1]=Je,P[2]=We,P[3]=Ve,G.clearBufferiv(G.COLOR,0,P))}else ne|=G.COLOR_BUFFER_BIT}W&&(ne|=G.DEPTH_BUFFER_BIT),se&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),we.dispose(),Ee.dispose(),be.dispose(),E.dispose(),de.dispose(),xe.dispose(),Ce.dispose(),Fe.dispose(),Me.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ir),Re.removeEventListener("sessionend",Ks),Li.stop()};function nt(C){C.preventDefault(),Q_("WebGLRenderer: Context Lost."),w=!0}function Pt(){Q_("WebGLRenderer: Context Restored."),w=!1;const C=L.autoReset,W=Pe.enabled,se=Pe.autoUpdate,ne=Pe.needsUpdate,Z=Pe.type;_e(),L.autoReset=C,Pe.enabled=W,Pe.autoUpdate=se,Pe.needsUpdate=ne,Pe.type=Z}function bt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Dn(C){const W=C.target;W.removeEventListener("dispose",Dn),vi(W)}function vi(C){dl(C),E.remove(C)}function dl(C){const W=E.get(C).programs;W!==void 0&&(W.forEach(function(se){Xe.releaseProgram(se)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,se,ne,Z,Ue){W===null&&(W=wt);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=sr(C,W,se,ne,Z);je.setMaterial(ne,Ie);let Ve=se.index,qe=1;if(ne.wireframe===!0){if(Ve=Ke.getWireframeAttribute(se),Ve===void 0)return;qe=2}const Je=se.drawRange,We=se.attributes.position;let $e=Je.start*qe,Dt=(Je.start+Je.count)*qe;Ue!==null&&($e=Math.max($e,Ue.start*qe),Dt=Math.min(Dt,(Ue.start+Ue.count)*qe)),Ve!==null?($e=Math.max($e,0),Dt=Math.min(Dt,Ve.count)):We!=null&&($e=Math.max($e,0),Dt=Math.min(Dt,We.count));const Zt=Dt-$e;if(Zt<0||Zt===1/0)return;Fe.setup(Z,ne,Ne,se,Ve);let Wt,Ot=X;if(Ve!==null&&(Wt=ue.get(Ve),Ot=Le,Ot.setIndex(Wt)),Z.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*$t()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(Z.isLine){let Ze=ne.linewidth;Ze===void 0&&(Ze=1),je.setLineWidth(Ze*$t()),Z.isLineSegments?Ot.setMode(G.LINES):Z.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else Z.isPoints?Ot.setMode(G.POINTS):Z.isSprite&&Ot.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ze=Z._multiDrawStarts,Ut=Z._multiDrawCounts,at=Z._multiDrawCount,Sn=Ve?ue.get(Ve).bytesPerElement:1,ji=E.get(ne).currentProgram.getUniforms();for(let yn=0;yn<at;yn++)ji.setValue(G,"_gl_DrawID",yn),Ot.render(Ze[yn]/Sn,Ut[yn])}else if(Z.isInstancedMesh)Ot.renderInstances($e,Zt,Z.count);else if(se.isInstancedBufferGeometry){const Ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ut=Math.min(se.instanceCount,Ze);Ot.renderInstances($e,Zt,Ut)}else Ot.render($e,Zt)};function js(C,W,se){C.transparent===!0&&C.side===ga&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Hr(C,W,se),C.side=rr,C.needsUpdate=!0,Hr(C,W,se),C.side=ga):Hr(C,W,se)}this.compile=function(C,W,se=null){se===null&&(se=C),z=be.get(se),z.init(W),D.push(z),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),C!==se&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const ne=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let Ie=0;Ie<Ue.length;Ie++){const Ne=Ue[Ie];js(Ne,se,Z),ne.add(Ne)}else js(Ue,se,Z),ne.add(Ue)}),z=D.pop(),ne},this.compileAsync=function(C,W,se=null){const ne=this.compile(C,W,se);return new Promise(Z=>{function Ue(){if(ne.forEach(function(Ie){E.get(Ie).currentProgram.isReady()&&ne.delete(Ie)}),ne.size===0){Z(C);return}setTimeout(Ue,10)}Et.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let zr=null;function Ys(C){zr&&zr(C)}function Ir(){Li.stop()}function Ks(){Li.start()}const Li=new wx;Li.setAnimationLoop(Ys),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){zr=C,Re.setAnimationLoop(C),C===null?Li.stop():Li.start()},Re.addEventListener("sessionstart",Ir),Re.addEventListener("sessionend",Ks),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,ne=Y!==null&&(Q===null||se)&&Y.begin(T,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,W,Q),z=be.get(C,D.length),z.init(W),D.push(z),Jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(Jt,Vi,W.reversedDepth),pt=this.localClippingEnabled,He=ze.init(this.clippingPlanes,pt),N=Ee.get(C,I.length),N.init(),I.push(N),Re.enabled===!0&&Re.isPresenting===!0){const Ie=T.xr.getDepthSensingMesh();Ie!==null&&ai(Ie,W,-1/0,T.sortObjects)}ai(C,W,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(Ae,Be),ot=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ot&&we.addToRenderList(N,C),this.info.render.frame++,He===!0&&ze.beginShadows();const Z=z.state.shadowsArray;if(Pe.render(Z,C,W),He===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&Y.hasRenderPass())===!1){const Ie=N.opaque,Ne=N.transmissive;if(z.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(Ne.length>0)for(let qe=0,Je=Ve.length;qe<Je;qe++){const We=Ve[qe];xn(Ie,Ne,C,We)}ot&&we.render(C);for(let qe=0,Je=Ve.length;qe<Je;qe++){const We=Ve[qe];sn(N,C,We,We.viewport)}}else Ne.length>0&&xn(Ie,Ne,C,W),ot&&we.render(C),sn(N,C,W)}Q!==null&&K===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),ne&&Y.end(T),C.isScene===!0&&C.onAfterRender(T,C,W),Fe.resetDefaultState(),le=-1,ce=null,D.pop(),D.length>0?(z=D[D.length-1],He===!0&&ze.setGlobalState(T.clippingPlanes,z.state.camera)):z=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function ai(C,W,se,ne){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){ne&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Jt);const Ie=Ce.update(C),Ne=C.material;Ne.visible&&N.push(C,Ie,Ne,se,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Ie=Ce.update(C),Ne=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),mt.copy(Ie.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ne)){const Ve=Ie.groups;for(let qe=0,Je=Ve.length;qe<Je;qe++){const We=Ve[qe],$e=Ne[We.materialIndex];$e&&$e.visible&&N.push(C,Ie,$e,se,mt.z,We)}}else Ne.visible&&N.push(C,Ie,Ne,se,mt.z,null)}}const Ue=C.children;for(let Ie=0,Ne=Ue.length;Ie<Ne;Ie++)ai(Ue[Ie],W,se,ne)}function sn(C,W,se,ne){const{opaque:Z,transmissive:Ue,transparent:Ie}=C;z.setupLightsView(se),He===!0&&ze.setGlobalState(T.clippingPlanes,se),ne&&je.viewport(F.copy(ne)),Z.length>0&&xi(Z,W,se),Ue.length>0&&xi(Ue,W,se),Ie.length>0&&xi(Ie,W,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function xn(C,W,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ne.id]===void 0){const $e=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ne.id]=new ki(1,1,{generateMipmaps:!0,type:$e?ya:_i,minFilter:Nr,samples:Nt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=z.state.transmissionRenderTarget[ne.id],Ie=ne.viewport||F;Ue.setSize(Ie.z*T.transmissionResolutionScale,Ie.w*T.transmissionResolutionScale);const Ne=T.getRenderTarget(),Ve=T.getActiveCubeFace(),qe=T.getActiveMipmapLevel();T.setRenderTarget(Ue),T.getClearColor(ye),Se=T.getClearAlpha(),Se<1&&T.setClearColor(16777215,.5),T.clear(),ot&&we.render(se);const Je=T.toneMapping;T.toneMapping=Gi;const We=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),z.setupLightsView(ne),He===!0&&ze.setGlobalState(T.clippingPlanes,ne),xi(C,se,ne),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Et.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Dt=0,Zt=W.length;Dt<Zt;Dt++){const Wt=W[Dt],{object:Ot,geometry:Ze,material:Ut,group:at}=Wt;if(Ut.side===ga&&Ot.layers.test(ne.layers)){const Sn=Ut.side;Ut.side=jn,Ut.needsUpdate=!0,Br(Ot,se,ne,Ze,Ut,at),Ut.side=Sn,Ut.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}T.setRenderTarget(Ne,Ve,qe),T.setClearColor(ye,Se),We!==void 0&&(ne.viewport=We),T.toneMapping=Je}function xi(C,W,se){const ne=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Ue=C.length;Z<Ue;Z++){const Ie=C[Z],{object:Ne,geometry:Ve,group:qe}=Ie;let Je=Ie.material;Je.allowOverride===!0&&ne!==null&&(Je=ne),Ne.layers.test(se.layers)&&Br(Ne,W,se,Ve,Je,qe)}}function Br(C,W,se,ne,Z,Ue){C.onBeforeRender(T,W,se,ne,Z,Ue),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(T,W,se,ne,C,Ue),Z.transparent===!0&&Z.side===ga&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,T.renderBufferDirect(se,W,ne,Z,C,Ue),Z.side=rr,Z.needsUpdate=!0,T.renderBufferDirect(se,W,ne,Z,C,Ue),Z.side=ga):T.renderBufferDirect(se,W,ne,Z,C,Ue),C.onAfterRender(T,W,se,ne,Z,Ue)}function Hr(C,W,se){W.isScene!==!0&&(W=wt);const ne=E.get(C),Z=z.state.lights,Ue=z.state.shadowsArray,Ie=Z.state.version,Ne=Xe.getParameters(C,Z.state,Ue,W,se),Ve=Xe.getProgramCacheKey(Ne);let qe=ne.programs;ne.environment=C.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(C.isMeshStandardMaterial?xe:de).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",Dn),qe=new Map,ne.programs=qe);let Je=qe.get(Ve);if(Je!==void 0){if(ne.currentProgram===Je&&ne.lightsStateVersion===Ie)return Zs(C,Ne),Je}else Ne.uniforms=Xe.getUniforms(C),C.onBeforeCompile(Ne,T),Je=Xe.acquireProgram(Ne,Ve),qe.set(Ve,Je),ne.uniforms=Ne.uniforms;const We=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=ze.uniform),Zs(C,Ne),ne.needsLights=Ta(C),ne.lightsStateVersion=Ie,ne.needsLights&&(We.ambientLightColor.value=Z.state.ambient,We.lightProbe.value=Z.state.probe,We.directionalLights.value=Z.state.directional,We.directionalLightShadows.value=Z.state.directionalShadow,We.spotLights.value=Z.state.spot,We.spotLightShadows.value=Z.state.spotShadow,We.rectAreaLights.value=Z.state.rectArea,We.ltc_1.value=Z.state.rectAreaLTC1,We.ltc_2.value=Z.state.rectAreaLTC2,We.pointLights.value=Z.state.point,We.pointLightShadows.value=Z.state.pointShadow,We.hemisphereLights.value=Z.state.hemi,We.directionalShadowMap.value=Z.state.directionalShadowMap,We.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,We.spotShadowMap.value=Z.state.spotShadowMap,We.spotLightMatrix.value=Z.state.spotLightMatrix,We.spotLightMap.value=Z.state.spotLightMap,We.pointShadowMap.value=Z.state.pointShadowMap,We.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=Je,ne.uniformsList=null,Je}function pl(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Zs(C,W){const se=E.get(C);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function sr(C,W,se,ne,Z){W.isScene!==!0&&(W=wt),q.resetTextureUnits();const Ue=W.fog,Ie=ne.isMeshStandardMaterial?W.environment:null,Ne=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gs,Ve=(ne.isMeshStandardMaterial?xe:de).get(ne.envMap||Ie),qe=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Je=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!se.morphAttributes.position,$e=!!se.morphAttributes.normal,Dt=!!se.morphAttributes.color;let Zt=Gi;ne.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Zt=T.toneMapping);const Wt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Wt!==void 0?Wt.length:0,Ze=E.get(ne),Ut=z.state.lights;if(He===!0&&(pt===!0||C!==ce)){const En=C===ce&&ne.id===le;ze.setState(ne,C,En)}let at=!1;ne.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ut.state.version||Ze.outputColorSpace!==Ne||Z.isBatchedMesh&&Ze.batching===!1||!Z.isBatchedMesh&&Ze.batching===!0||Z.isBatchedMesh&&Ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ze.instancing===!1||!Z.isInstancedMesh&&Ze.instancing===!0||Z.isSkinnedMesh&&Ze.skinning===!1||!Z.isSkinnedMesh&&Ze.skinning===!0||Z.isInstancedMesh&&Ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ze.instancingMorph===!1&&Z.morphTexture!==null||Ze.envMap!==Ve||ne.fog===!0&&Ze.fog!==Ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ze.numPlanes||Ze.numIntersection!==ze.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Je||Ze.morphTargets!==We||Ze.morphNormals!==$e||Ze.morphColors!==Dt||Ze.toneMapping!==Zt||Ze.morphTargetsCount!==Ot)&&(at=!0):(at=!0,Ze.__version=ne.version);let Sn=Ze.currentProgram;at===!0&&(Sn=Hr(ne,W,Z));let ji=!1,yn=!1,ri=!1;const Ft=Sn.getUniforms(),Mn=Ze.uniforms;if(je.useProgram(Sn.program)&&(ji=!0,yn=!0,ri=!0),ne.id!==le&&(le=ne.id,yn=!0),ji||ce!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(G,"projectionMatrix",C.projectionMatrix),Ft.setValue(G,"viewMatrix",C.matrixWorldInverse);const bn=Ft.map.cameraPosition;bn!==void 0&&bn.setValue(G,vt.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),ce!==C&&(ce=C,yn=!0,ri=!0)}if(Ze.needsLights&&(Ut.state.directionalShadowMap.length>0&&Ft.setValue(G,"directionalShadowMap",Ut.state.directionalShadowMap,q),Ut.state.spotShadowMap.length>0&&Ft.setValue(G,"spotShadowMap",Ut.state.spotShadowMap,q),Ut.state.pointShadowMap.length>0&&Ft.setValue(G,"pointShadowMap",Ut.state.pointShadowMap,q)),Z.isSkinnedMesh){Ft.setOptional(G,Z,"bindMatrix"),Ft.setOptional(G,Z,"bindMatrixInverse");const En=Z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(G,"boneTexture",En.boneTexture,q))}Z.isBatchedMesh&&(Ft.setOptional(G,Z,"batchingTexture"),Ft.setValue(G,"batchingTexture",Z._matricesTexture,q),Ft.setOptional(G,Z,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Ft.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const dn=se.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ct.update(Z,se,Sn),(yn||Ze.receiveShadow!==Z.receiveShadow)&&(Ze.receiveShadow=Z.receiveShadow,Ft.setValue(G,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Mn.envMap.value=Ve,Mn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=NC()),yn&&(Ft.setValue(G,"toneMappingExposure",T.toneMappingExposure),Ze.needsLights&&Qs(Mn,ri),Ue&&ne.fog===!0&&tt.refreshFogUniforms(Mn,Ue),tt.refreshMaterialUniforms(Mn,ne,pe,$,z.state.transmissionRenderTarget[C.id]),$c.upload(G,pl(Ze),Mn,q)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($c.upload(G,pl(Ze),Mn,q),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(G,"center",Z.center),Ft.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(G,"normalMatrix",Z.normalMatrix),Ft.setValue(G,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const En=ne.uniformsGroups;for(let bn=0,Vr=En.length;bn<Vr;bn++){const Si=En[bn];Me.update(Si,Sn),Me.bind(Si,Sn)}}return Sn}function Qs(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,W,se){const ne=E.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=W,E.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const se=E.get(C);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const Aa=G.createFramebuffer();this.setRenderTarget=function(C,W=0,se=0){Q=C,H=W,K=se;let ne=null,Z=!1,Ue=!1;if(C){const Ne=E.get(C);if(Ne.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Ne.__webglFramebuffer),F.copy(C.viewport),V.copy(C.scissor),te=C.scissorTest,je.viewport(F),je.scissor(V),je.setScissorTest(te),le=-1;return}else if(Ne.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Ne.__hasExternalTextures)q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(Ne.__boundDepthTexture!==Je){if(Je!==null&&E.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const qe=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?ne=qe[W][se]:ne=qe[W],Z=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?ne=E.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?ne=qe[se]:ne=qe,F.copy(C.viewport),V.copy(C.scissor),te=C.scissorTest}else F.copy(ae).multiplyScalar(pe).floor(),V.copy(fe).multiplyScalar(pe).floor(),te=De;if(se!==0&&(ne=Aa),je.bindFramebuffer(G.FRAMEBUFFER,ne)&&je.drawBuffers(C,ne),je.viewport(F),je.scissor(V),je.setScissorTest(te),Z){const Ne=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,se)}else if(Ue){const Ne=W;for(let Ve=0;Ve<C.textures.length;Ve++){const qe=E.get(C.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,se,Ne)}}else if(C!==null&&se!==0){const Ne=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,se)}le=-1},this.readRenderTargetPixels=function(C,W,se,ne,Z,Ue,Ie,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){je.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const qe=C.textures[Ne],Je=qe.format,We=qe.type;if(!Nt.textureFormatReadable(Je)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(We)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ne&&se>=0&&se<=C.height-Z&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),G.readPixels(W,se,ne,Z,Te.convert(Je),Te.convert(We),Ue))}finally{const qe=Q!==null?E.get(Q).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,W,se,ne,Z,Ue,Ie,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve)if(W>=0&&W<=C.width-ne&&se>=0&&se<=C.height-Z){je.bindFramebuffer(G.FRAMEBUFFER,Ve);const qe=C.textures[Ne],Je=qe.format,We=qe.type;if(!Nt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),G.readPixels(W,se,ne,Z,Te.convert(Je),Te.convert(We),0);const Dt=Q!==null?E.get(Q).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Dt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ib(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer($e),G.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,se=0){const ne=Math.pow(2,-se),Z=Math.floor(C.image.width*ne),Ue=Math.floor(C.image.height*ne),Ie=W!==null?W.x:0,Ne=W!==null?W.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ie,Ne,Z,Ue),je.unbindTexture()};const or=G.createFramebuffer(),Ra=G.createFramebuffer();this.copyTextureToTexture=function(C,W,se=null,ne=null,Z=0,Ue=null){Ue===null&&(Z!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Z,Z=0):Ue=0);let Ie,Ne,Ve,qe,Je,We,$e,Dt,Zt;const Wt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(se!==null)Ie=se.max.x-se.min.x,Ne=se.max.y-se.min.y,Ve=se.isBox3?se.max.z-se.min.z:1,qe=se.min.x,Je=se.min.y,We=se.isBox3?se.min.z:0;else{const dn=Math.pow(2,-Z);Ie=Math.floor(Wt.width*dn),Ne=Math.floor(Wt.height*dn),C.isDataArrayTexture?Ve=Wt.depth:C.isData3DTexture?Ve=Math.floor(Wt.depth*dn):Ve=1,qe=0,Je=0,We=0}ne!==null?($e=ne.x,Dt=ne.y,Zt=ne.z):($e=0,Dt=0,Zt=0);const Ot=Te.convert(W.format),Ze=Te.convert(W.type);let Ut;W.isData3DTexture?(q.setTexture3D(W,0),Ut=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),Ut=G.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),Ut=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ji=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We);const Ft=C.isDataArrayTexture||C.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const dn=E.get(C),En=E.get(W),bn=E.get(dn.__renderTarget),Vr=E.get(En.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Si=0;Si<Ve;Si++)Ft&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(C).__webglTexture,Z,We+Si),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(W).__webglTexture,Ue,Zt+Si)),G.blitFramebuffer(qe,Je,Ie,Ne,$e,Dt,Ie,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||E.has(C)){const dn=E.get(C),En=E.get(W);je.bindFramebuffer(G.READ_FRAMEBUFFER,or),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ra);for(let bn=0;bn<Ve;bn++)Ft?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Z,We+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Z),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Ue,Zt+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Ue),Z!==0?G.blitFramebuffer(qe,Je,Ie,Ne,$e,Dt,Ie,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(Ut,Ue,$e,Dt,Zt+bn,qe,Je,Ie,Ne):G.copyTexSubImage2D(Ut,Ue,$e,Dt,qe,Je,Ie,Ne);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ut,Ue,$e,Dt,Zt,Ie,Ne,Ve,Ot,Ze,Wt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Ut,Ue,$e,Dt,Zt,Ie,Ne,Ve,Ot,Wt.data):G.texSubImage3D(Ut,Ue,$e,Dt,Zt,Ie,Ne,Ve,Ot,Ze,Wt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,$e,Dt,Ie,Ne,Ot,Ze,Wt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,$e,Dt,Wt.width,Wt.height,Ot,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,$e,Dt,Ie,Ne,Ot,Ze,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ji),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Ue===0&&W.generateMipmaps&&G.generateMipmap(Ut),je.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){H=0,K=0,Q=null,je.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const PC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,FC=`
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;

// Precomputed constants
#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

// Optimized hash - inline multiplication
#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

// Precomputed camera basis vectors (normalized vec3(1,1,1), vec3(1,0,-1))
const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);

// Precomputed branch direction
const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  // Precompute reciprocals to avoid division
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  // Precompute time-based values
  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  // Precompute ray reciprocal for strides
  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  // Precompute for intersection test
  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      
      // Optimized flake position calculation
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        // Avoid branching with step functions where possible
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;function zC({color:s="#ffffff",flakeSize:e=.01,minFlakeSize:i=1.25,pixelResolution:a=200,speed:l=1.25,depthFade:c=8,farPlane:f=20,brightness:h=1,gamma:m=.4545,density:p=.3,variant:_="square",direction:g=125,className:v="",style:y={}}){const b=dt.useRef(null),A=dt.useRef(0),M=dt.useRef(!0),S=dt.useRef(null),O=dt.useRef(null),P=dt.useRef(null),N=dt.useMemo(()=>_==="round"?1:_==="snowflake"?2:0,[_]),z=dt.useMemo(()=>{const D=new Ht(s);return new re(D.r,D.g,D.b)},[s]),I=dt.useCallback(()=>{P.current&&clearTimeout(P.current),P.current=window.setTimeout(()=>{const D=b.current,Y=S.current,T=O.current;if(!D||!Y||!T)return;const w=D.offsetWidth,H=D.offsetHeight;Y.setSize(w,H),T.uniforms.uResolution.value.set(w,H)},100)},[]);return dt.useEffect(()=>{const D=b.current;if(!D)return;const Y=new IntersectionObserver(([T])=>{M.current=T.isIntersecting},{threshold:0});return Y.observe(D),()=>Y.disconnect()},[]),dt.useEffect(()=>{const D=b.current;if(!D)return;const Y=new wb,T=new Rp(-1,1,1,-1,0,1),w=new OC({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(D.offsetWidth,D.offsetHeight),w.setClearColor(0,0),D.appendChild(w.domElement),S.current=w;const H=new Ui({vertexShader:PC,fragmentShader:FC,uniforms:{uTime:{value:0},uResolution:{value:new Vt(D.offsetWidth,D.offsetHeight)},uFlakeSize:{value:e},uMinFlakeSize:{value:i},uPixelResolution:{value:a},uSpeed:{value:l},uDepthFade:{value:c},uFarPlane:{value:f},uColor:{value:z.clone()},uBrightness:{value:h},uGamma:{value:m},uDensity:{value:p},uVariant:{value:N},uDirection:{value:g*Math.PI/180}},transparent:!0});O.current=H;const K=new hl(2,2);Y.add(new Wi(K,H)),window.addEventListener("resize",I);const Q=performance.now(),le=()=>{A.current=requestAnimationFrame(le),M.current&&(H.uniforms.uTime.value=(performance.now()-Q)*.001,w.render(Y,T))};return le(),()=>{cancelAnimationFrame(A.current),window.removeEventListener("resize",I),P.current&&clearTimeout(P.current),D.contains(w.domElement)&&D.removeChild(w.domElement),w.dispose(),K.dispose(),H.dispose(),S.current=null,O.current=null}},[I]),dt.useEffect(()=>{const D=O.current;D&&(D.uniforms.uFlakeSize.value=e,D.uniforms.uMinFlakeSize.value=i,D.uniforms.uPixelResolution.value=a,D.uniforms.uSpeed.value=l,D.uniforms.uDepthFade.value=c,D.uniforms.uFarPlane.value=f,D.uniforms.uBrightness.value=h,D.uniforms.uGamma.value=m,D.uniforms.uDensity.value=p,D.uniforms.uVariant.value=N,D.uniforms.uDirection.value=g*Math.PI/180,D.uniforms.uColor.value.copy(z))},[e,i,a,l,c,f,h,m,p,N,g,z]),ve.jsx("div",{ref:b,className:`pixel-snow-container ${v}`,style:y})}function IC(){return ve.jsxs(ve.Fragment,{children:[ve.jsx(zC,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,backgroundColor:"#0F172A"},flakeSize:.005,pixelResolution:500,speed:2.7,depthFade:20,farPlane:5,brightness:.7,density:.4,variant:"round",direction:185,color:"#38BDF8"}),ve.jsx(ME,{}),ve.jsx(_E,{}),ve.jsx(vE,{}),ve.jsx(xE,{}),ve.jsx(SE,{}),ve.jsx(yE,{})]})}const BC={home:"Asosiy",services:"Xizmatlar",process:"Jarayon",faq:"FAQ",contact:"Aloqa"},HC={title:"NATIJAGA yo'naltirilgan SAYTLAR ishlab chiqamiz",cta1:"Buyurtma berish",cta2:"Telegram bot orqali"},VC={title:"Xizmat tariflarimiz",cta:"Sayt buyurtma qilish",plans:[{name:"Minimal",price:"$100+",features:["1 sahifali sayt","Buyurtma tugmasi","Domen + hosting","Mobilga mos dizayn"]},{name:"Standart",price:"$300+",features:["3-5 sahifa","Buyurtma formasi","Domen + hosting","Mobil qurilmalarga mos","SEO (Google)","Admin panel"]},{name:"Biznes",price:"$600+",features:["5-7 sahifa","Xizmatlar bo'limlari","Buyurtma formasi","Domen + hosting","SEO (Google)","Admin panel","Analitika","Individual dizayn"]},{name:"Individual",price:"$1200+",features:["7+ sahifa","Individual yondashuv","Kengaytiriladigan struktura","Murojaat formasi","Domen + hosting","SEO (Google)","Individual dizayn","Admin panel","Analitika"]}]},GC={title:"Loyihangizni qanday amalga oshiramiz",steps:[{number:"01",title:"Maslahat",description:"Sizning ehtiyojlaringizni o'rganamiz va eng yaxshi yechimlarni taklif qilamiz."},{number:"02",title:"Rejalashtirish",description:"Loyiha strukturasini ishlab chiqamiz va dizayn prototipi tayyorlaymiz."},{number:"03",title:"Ishlab chiqish",description:"Zamonaviy texnologiyalar yordamida saytingizni professional darajada yaratamiz."},{number:"04",title:"Testlash va Ishga tushirish",description:"Saytni sinab ko'ramiz va internetga joylaymiz."}]},kC={title:"Savollaringizga shu yerda javob topasiz",items:[{question:"Sayt qancha muddatda tayyor bo'ladi?",answer:"Sayt tayyorlanish muddati tanlangan tarif va loyiha hajmiga bog'liq. O'rtacha hisobda 5 kundan 30 kungacha bo'lgan muddatda loyiha yakunlanadi."},{question:"Sayt narxi nimaga bog'liq?",answer:"Sayt narxi tanlangan tarif, sahifalar soni va saytda joylashtiriladigan ma'lumotlar hajmiga qarab belgilanadi."},{question:"Domen va hostingni o'zim olishim kerakmi?",answer:"Yo'q. Domen va hosting biz tomonimizdan taqdim etiladi va loyiha doirasida to'liq sozlab beriladi."},{question:"Buyurtma berilgandan keyin jarayon qanday bo'ladi?",answer:"Avvolo loyiha uchun muammoga yechim beruvchi struktura ishlab chiqiladi va siz bilan tasdiqlanadi. Shundan so'ng ish boshlanadi."},{question:"Sayt topshirilgandan keyin texnik yordam bo'ladimi?",answer:"Ha. Sayt topshirilgandan so'ng tanlangan tarifga qarab 1 oydan 3 oygacha bepul texnik yordam ko'rsatiladi."}]},XC={title:"Raqamingizni qoldiring, biz tezda aloqaga chiqamiz!",form:{name:"Ismingiz",phone:"Telefon raqam",username:"Telegram username",message:"Xabar",submit:"Yuborish",submitting:"Yuborilmoqda..."},success:"✅ Xabaringiz muvaffaqiyatli yuborildi!",error:"❌ Xatolik yuz berdi. Qayta urinib ko'ring."},qC={telegram:"Telegram",instagram:"Instagram",bot:"Telegram bot",address:"Toshkent shahar, Olmazor tumani",copyright:"© 2026 AyTi Xizmati. Barcha huquqlar himoyalangan."},WC={title:"AyTi Xizmati - Natijaga yo'naltirilgan saytlar va Telegram botlar yaratish",description:"Professional darajadagi web saytlar, telegram botlar va IT yechimlar. Arzon narxlar va yuqori sifat. Toshkentda sayt yaratish xizmati.",keywords:"sayt yaratish, web sayt yaratish xizmatlari, sayt yaratish narxi, IT xizmatlar, professional web sayt, dasturlash xizmatlari, web dizayn, biznes uchun sayt, kompaniya uchun sayt, onlayn xizmatlar yaratish, telegram bot yasash xizmatlari"},jC={nav:BC,hero:HC,pricing:VC,process:GC,faq:kC,contact:XC,footer:qC,seo:WC},YC={home:"Главная",services:"Услуги",process:"Процесс",faq:"FAQ",contact:"Контакты"},KC={title:"РЕЗУЛЬТАТИВНЫЕ САЙТЫ ДЛЯ ВАШЕГО БИЗНЕСА",cta1:"Заказать сайт",cta2:"Через Telegram бот"},ZC={title:"Наши тарифы",cta:"Заказать сайт",plans:[{name:"Минимум",price:"$100+",features:["1-страничный сайт","Кнопка заказа","Домен + хостинг","Адаптивный дизайн"]},{name:"Стандарт",price:"$300+",features:["3-5 страниц","Форма заказа","Домен + хостинг","Мобильная адаптация","SEO (Google)","Админ-панель"]},{name:"Бизнес",price:"$600+",features:["5-7 страниц","Разделы услуг","Форма заказа","Домен + хостинг","SEO (Google)","Админ-панель","Аналитика","Индивидуальный дизайн"]},{name:"Индивидуальный",price:"$1200+",features:["7+ страниц","Индивидуальный подход","Масштабируемая структура","Форма обратной связи","Домен + хостинг","SEO (Google)","Индивидуальный дизайн","Админ-панель","Аналитика"]}]},QC={title:"Как мы реализуем ваш проект",steps:[{number:"01",title:"Консультация",description:"Изучаем ваши потребности и предлагаем лучшие решения."},{number:"02",title:"Планирование",description:"Разрабатываем структуру проекта и прототип дизайна."},{number:"03",title:"Разработка",description:"Создаем ваш сайт, используя современные технологии."},{number:"04",title:"Тестирование и запуск",description:"Тестируем сайт и запускаем его в интернет."}]},JC={title:"Ответы на ваши вопросы",items:[{question:"Сколько времени занимает разработка сайта?",answer:"Время зависит от выбранного тарифа и объема проекта. В среднем проект завершается за 5-30 дней."},{question:"От чего зависит стоимость сайта?",answer:"Стоимость зависит от выбранного тарифа, количества страниц и объема информации."},{question:"Нужно ли мне самому покупать домен и хостинг?",answer:"Нет. Домен и хостинг предоставляются нами и полностью настраиваются."},{question:"Как проходит процесс после заказа?",answer:"Сначала разрабатывается структура проекта и согласовывается с вами, затем начинается работа."},{question:"Будет ли техническая поддержка после запуска?",answer:"Да. После запуска мы предоставляем бесплатную техническую поддержку от 1 до 3 месяцев."}]},$C={title:"Оставьте свой номер, мы вам перезвоним!",form:{name:"Имя",phone:"Номер телефона",username:"Имя пользователя Telegram",message:"Сообщение",submit:"Отправить",submitting:"Отправка..."},success:"✅ Ваше сообщение успешно отправлено!",error:"❌ Произошла ошибка. Попробуйте еще раз."},e3={telegram:"Telegram",instagram:"Instagram",bot:"Telegram бот",address:"г. Ташкент, Алмазарский район",copyright:"© 2026 AyTi Xizmati. Все права защищены."},t3={title:"AyTi Xizmati - Создание результативных сайтов и Telegram ботов",description:"Профессиональные веб-сайты, telegram-боты и IT-решения. Доступные цены и высокое качество. Услуги по созданию сайтов в Ташкенте.",keywords:"создание сайтов, услуги создания веб-сайтов, цена создания сайта, IT услуги, профессиональный веб-сайт, услуги программирования, веб-дизайн, сайт для бизнеса, сайт для компании, создание онлайн сервисов, услуги создания телеграм ботов"},n3={nav:YC,hero:KC,pricing:ZC,process:QC,faq:JC,contact:$C,footer:e3,seo:t3},i3={home:"Home",services:"Services",process:"Process",faq:"FAQ",contact:"Contact"},a3={title:"RESULTS-DRIVEN WEBSITES FOR YOUR BUSINESS",cta1:"Order a Website",cta2:"Via Telegram Bot"},r3={title:"Our Pricing Plans",cta:"Order a Website",plans:[{name:"Minimal",price:"$100+",features:["1-page website","Order button","Domain + hosting","Mobile responsive design"]},{name:"Standard",price:"$300+",features:["3-5 pages","Order form","Domain + hosting","Mobile adaptation","SEO (Google)","Admin panel"]},{name:"Business",price:"$600+",features:["5-7 pages","Service sections","Order form","Domain + hosting","SEO (Google)","Admin panel","Analytics","Custom design"]},{name:"Individual",price:"$1200+",features:["7+ pages","Custom approach","Scalable structure","Contact form","Domain + hosting","SEO (Google)","Custom design","Admin panel","Analytics"]}]},s3={title:"How We Implement Your Project",steps:[{number:"01",title:"Consultation",description:"We study your needs and offer the best solutions."},{number:"02",title:"Planning",description:"We develop the project structure and design prototype."},{number:"03",title:"Development",description:"We create your website using modern technologies."},{number:"04",title:"Testing & Launch",description:"We test the site and launch it on the internet."}]},o3={title:"Answers to Your Questions",items:[{question:"How long does website development take?",answer:"The time depends on the chosen plan and project scope. On average, a project is completed in 5-30 days."},{question:"What does the website cost depend on?",answer:"The cost depends on the chosen plan, number of pages, and amount of information."},{question:"Do I need to buy domain and hosting myself?",answer:"No. Domain and hosting are provided by us and fully configured."},{question:"How does the process work after ordering?",answer:"First, we develop the project structure and agree with you, then the work begins."},{question:"Will there be technical support after launch?",answer:"Yes. After launch, we provide free technical support for 1 to 3 months."}]},l3={title:"Leave your number, we'll call you back!",form:{name:"Name",phone:"Phone number",username:"Telegram username",message:"Message",submit:"Send",submitting:"Sending..."},success:"✅ Your message was sent successfully!",error:"❌ An error occurred. Please try again."},c3={telegram:"Telegram",instagram:"Instagram",bot:"Telegram bot",address:"Tashkent city, Olmazor district",copyright:"© 2026 AyTi Xizmati. All rights reserved."},u3={title:"AyTi Xizmati - Result-Oriented Website and Telegram Bot Creation",description:"Professional websites, Telegram bots, and IT solutions. Affordable prices and high quality. Website creation services in Tashkent.",keywords:"website creation, web development services, website cost, IT services, professional website, programming services, web design, business website, company website, online services creation, telegram bot creation services"},f3={nav:i3,hero:a3,pricing:r3,process:s3,faq:o3,contact:l3,footer:c3,seo:u3},h3={uz:{translation:jC},ru:{translation:n3},en:{translation:f3}};Bn.use(JM).init({resources:h3,lng:localStorage.getItem("language")||"uz",fallbackLng:"uz",interpolation:{escapeValue:!1}});Yy.createRoot(document.getElementById("root")).render(ve.jsx(On.StrictMode,{children:ve.jsx(Xv,{children:ve.jsx(IC,{})})}));
