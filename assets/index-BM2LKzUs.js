(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function xl(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zd={exports:{}},Zo={};var Hv;function kM(){if(Hv)return Zo;Hv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var f in o)f!=="key"&&(u[f]=o[f])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:c,ref:o!==void 0?o:null,props:u}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var Vv;function XM(){return Vv||(Vv=1,zd.exports=kM()),zd.exports}var ve=XM(),Bd={exports:{}},st={};var Gv;function qM(){if(Gv)return st;Gv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(O,ee,me){this.props=O,this.context=ee,this.refs=M,this.updater=me||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function L(O,ee,me){this.props=O,this.context=ee,this.refs=M,this.updater=me||E}var N=L.prototype=new D;N.constructor=L,T(N,x.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function z(){}var U={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function A(O,ee,me){var Re=me.ref;return{$$typeof:r,type:O,key:ee,ref:Re!==void 0?Re:null,props:me}}function w(O,ee){return A(O.type,ee,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function K(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(me){return ee[me]})}var $=/\/+/g;function ue(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):ee.toString(36)}function ce(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function I(O,ee,me,Re,He){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var de=!1;if(O===null)de=!0;else switch(re){case"bigint":case"string":case"number":de=!0;break;case"object":switch(O.$$typeof){case r:case e:de=!0;break;case v:return de=O._init,I(de(O._payload),ee,me,Re,He)}}if(de)return He=He(O),de=Re===""?"."+ue(O,0):Re,F(He)?(me="",de!=null&&(me=de.replace($,"$&/")+"/"),I(He,ee,me,"",function(Ve){return Ve})):He!=null&&(H(He)&&(He=w(He,me+(He.key==null||O&&O.key===He.key?"":(""+He.key).replace($,"$&/")+"/")+de)),ee.push(He)),1;de=0;var Le=Re===""?".":Re+":";if(F(O))for(var Xe=0;Xe<O.length;Xe++)Re=O[Xe],re=Le+ue(Re,Xe),de+=I(Re,ee,me,re,He);else if(Xe=S(O),typeof Xe=="function")for(O=Xe.call(O),Xe=0;!(Re=O.next()).done;)Re=Re.value,re=Le+ue(Re,Xe++),de+=I(Re,ee,me,re,He);else if(re==="object"){if(typeof O.then=="function")return I(ce(O),ee,me,Re,He);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return de}function V(O,ee,me){if(O==null)return O;var Re=[],He=0;return I(O,Re,"","",function(re){return ee.call(me,re,He++)}),Re}function ne(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(me){(O._status===0||O._status===-1)&&(O._status=1,O._result=me)},function(me){(O._status===0||O._status===-1)&&(O._status=2,O._result=me)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ye={map:V,forEach:function(O,ee,me){V(O,function(){ee.apply(this,arguments)},me)},count:function(O){var ee=0;return V(O,function(){ee++}),ee},toArray:function(O){return V(O,function(ee){return ee})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return st.Activity=g,st.Children=ye,st.Component=x,st.Fragment=n,st.Profiler=o,st.PureComponent=L,st.StrictMode=a,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return U.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(O,ee,me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Re=T({},O.props),He=O.key;if(ee!=null)for(re in ee.key!==void 0&&(He=""+ee.key),ee)!j.call(ee,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&ee.ref===void 0||(Re[re]=ee[re]);var re=arguments.length-2;if(re===1)Re.children=me;else if(1<re){for(var de=Array(re),Le=0;Le<re;Le++)de[Le]=arguments[Le+2];Re.children=de}return A(O.type,He,Re)},st.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},st.createElement=function(O,ee,me){var Re,He={},re=null;if(ee!=null)for(Re in ee.key!==void 0&&(re=""+ee.key),ee)j.call(ee,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(He[Re]=ee[Re]);var de=arguments.length-2;if(de===1)He.children=me;else if(1<de){for(var Le=Array(de),Xe=0;Xe<de;Xe++)Le[Xe]=arguments[Xe+2];He.children=Le}if(O&&O.defaultProps)for(Re in de=O.defaultProps,de)He[Re]===void 0&&(He[Re]=de[Re]);return A(O,re,He)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:f,render:O}},st.isValidElement=H,st.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ne}},st.memo=function(O,ee){return{$$typeof:h,type:O,compare:ee===void 0?null:ee}},st.startTransition=function(O){var ee=U.T,me={};U.T=me;try{var Re=O(),He=U.S;He!==null&&He(me,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(z,Me)}catch(re){Me(re)}finally{ee!==null&&me.types!==null&&(ee.types=me.types),U.T=ee}},st.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},st.use=function(O){return U.H.use(O)},st.useActionState=function(O,ee,me){return U.H.useActionState(O,ee,me)},st.useCallback=function(O,ee){return U.H.useCallback(O,ee)},st.useContext=function(O){return U.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,ee){return U.H.useDeferredValue(O,ee)},st.useEffect=function(O,ee){return U.H.useEffect(O,ee)},st.useEffectEvent=function(O){return U.H.useEffectEvent(O)},st.useId=function(){return U.H.useId()},st.useImperativeHandle=function(O,ee,me){return U.H.useImperativeHandle(O,ee,me)},st.useInsertionEffect=function(O,ee){return U.H.useInsertionEffect(O,ee)},st.useLayoutEffect=function(O,ee){return U.H.useLayoutEffect(O,ee)},st.useMemo=function(O,ee){return U.H.useMemo(O,ee)},st.useOptimistic=function(O,ee){return U.H.useOptimistic(O,ee)},st.useReducer=function(O,ee,me){return U.H.useReducer(O,ee,me)},st.useRef=function(O){return U.H.useRef(O)},st.useState=function(O){return U.H.useState(O)},st.useSyncExternalStore=function(O,ee,me){return U.H.useSyncExternalStore(O,ee,me)},st.useTransition=function(){return U.H.useTransition()},st.version="19.2.3",st}var kv;function Ac(){return kv||(kv=1,Bd.exports=qM()),Bd.exports}var J=Ac();const Pn=xl(J);var Hd={exports:{}},$o={},Vd={exports:{}},Gd={};var Xv;function WM(){return Xv||(Xv=1,(function(r){function e(I,V){var ne=I.length;I.push(V);e:for(;0<ne;){var Me=ne-1>>>1,ye=I[Me];if(0<o(ye,V))I[Me]=V,I[ne]=ye,ne=Me;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var V=I[0],ne=I.pop();if(ne!==V){I[0]=ne;e:for(var Me=0,ye=I.length,O=ye>>>1;Me<O;){var ee=2*(Me+1)-1,me=I[ee],Re=ee+1,He=I[Re];if(0>o(me,ne))Re<ye&&0>o(He,me)?(I[Me]=He,I[Re]=ne,Me=Re):(I[Me]=me,I[ee]=ne,Me=ee);else if(Re<ye&&0>o(He,ne))I[Me]=He,I[Re]=ne,Me=Re;else break e}}return V}function o(I,V){var ne=I.sortIndex-V.sortIndex;return ne!==0?ne:I.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],h=[],v=1,g=null,_=3,S=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(I){for(var V=n(h);V!==null;){if(V.callback===null)a(h);else if(V.startTime<=I)a(h),V.sortIndex=V.expirationTime,e(p,V);else break;V=n(h)}}function F(I){if(T=!1,N(I),!E)if(n(p)!==null)E=!0,z||(z=!0,K());else{var V=n(h);V!==null&&ce(F,V.startTime-I)}}var z=!1,U=-1,j=5,A=-1;function w(){return M?!0:!(r.unstable_now()-A<j)}function H(){if(M=!1,z){var I=r.unstable_now();A=I;var V=!0;try{e:{E=!1,T&&(T=!1,D(U),U=-1),S=!0;var ne=_;try{t:{for(N(I),g=n(p);g!==null&&!(g.expirationTime>I&&w());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,_=g.priorityLevel;var ye=Me(g.expirationTime<=I);if(I=r.unstable_now(),typeof ye=="function"){g.callback=ye,N(I),V=!0;break t}g===n(p)&&a(p),N(I)}else a(p);g=n(p)}if(g!==null)V=!0;else{var O=n(h);O!==null&&ce(F,O.startTime-I),V=!1}}break e}finally{g=null,_=ne,S=!1}V=void 0}}finally{V?K():z=!1}}}var K;if(typeof L=="function")K=function(){L(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ue=$.port2;$.port1.onmessage=H,K=function(){ue.postMessage(null)}}else K=function(){x(H,0)};function ce(I,V){U=x(function(){I(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var ne=_;_=V;try{return I()}finally{_=ne}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ne=_;_=I;try{return V()}finally{_=ne}},r.unstable_scheduleCallback=function(I,V,ne){var Me=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Me+ne:Me):ne=Me,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=ne+ye,I={id:v++,callback:V,priorityLevel:I,startTime:ne,expirationTime:ye,sortIndex:-1},ne>Me?(I.sortIndex=ne,e(h,I),n(p)===null&&I===n(h)&&(T?(D(U),U=-1):T=!0,ce(F,ne-Me))):(I.sortIndex=ye,e(p,I),E||S||(E=!0,z||(z=!0,K()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var V=_;return function(){var ne=_;_=V;try{return I.apply(this,arguments)}finally{_=ne}}}})(Gd)),Gd}var qv;function jM(){return qv||(qv=1,Vd.exports=WM()),Vd.exports}var kd={exports:{}},Un={};var Wv;function YM(){if(Wv)return Un;Wv=1;var r=Ac();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,h,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:h,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(p,h,null,v)},Un.flushSync=function(p){var h=c.T,v=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=h,a.p=v,a.d.f()}},Un.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Un.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Un.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,g=f(v,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:S}):v==="script"&&a.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Un.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,g=f(v,h.crossOrigin);a.d.L(p,v,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Un.requestFormReset=function(p){a.d.r(p)},Un.unstable_batchedUpdates=function(p,h){return p(h)},Un.useFormState=function(p,h,v){return c.H.useFormState(p,h,v)},Un.useFormStatus=function(){return c.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var jv;function KM(){if(jv)return kd.exports;jv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kd.exports=YM(),kd.exports}var Yv;function ZM(){if(Yv)return $o;Yv=1;var r=jM(),e=Ac(),n=KM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return p(d),t;if(m===l)return p(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=m;else{for(var y=!1,R=d.child;R;){if(R===s){y=!0,s=d,l=m;break}if(R===l){y=!0,l=d,s=m;break}R=R.sibling}if(!y){for(R=m.child;R;){if(R===s){y=!0,s=m,l=d;break}if(R===l){y=!0,l=m,s=d;break}R=R.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var $=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case j:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}var ce=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Me=[],ye=-1;function O(t){return{current:t}}function ee(t){0>ye||(t.current=Me[ye],Me[ye]=null,ye--)}function me(t,i){ye++,Me[ye]=t.current,t.current=i}var Re=O(null),He=O(null),re=O(null),de=O(null);function Le(t,i){switch(me(re,i),me(He,t),me(Re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=uv(i),t=cv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Re),me(Re,t)}function Xe(){ee(Re),ee(He),ee(re)}function Ve(t){t.memoizedState!==null&&me(de,t);var i=Re.current,s=cv(i,t.type);i!==s&&(me(He,t),me(Re,s))}function pt(t){He.current===t&&(ee(Re),ee(He)),de.current===t&&(ee(de),Wo._currentValue=ne)}var Jt,_t;function mt(t){if(Jt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Jt=i&&i[1]||"",_t=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+_t}var wt=!1;function lt(t,i){if(!t||wt)return"";wt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ae=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){ae=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){ae=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),y=m[0],R=m[1];if(y&&R){var B=y.split(`
`),te=R.split(`
`);for(d=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;d<te.length&&!te[d].includes("DetermineComponentFrameRoot");)d++;if(l===B.length||d===te.length)for(l=B.length-1,d=te.length-1;1<=l&&0<=d&&B[l]!==te[d];)d--;for(;1<=l&&0<=d;l--,d--)if(B[l]!==te[d]){if(l!==1||d!==1)do if(l--,d--,0>d||B[l]!==te[d]){var he=`
`+B[l].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=l&&0<=d);break}}}finally{wt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?mt(s):""}function en(t,i){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==i&&i!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return mt("Activity");default:return""}}function G(t){try{var i="",s=null;do i+=en(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Kt=Object.prototype.hasOwnProperty,Et=r.unstable_scheduleCallback,Nt=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,pe=r.unstable_ImmediatePriority,Se=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,Ze=r.unstable_LowPriority,we=r.unstable_IdlePriority,qe=r.log,nt=r.unstable_setDisableYieldValue,be=null,Te=null;function ze(t){if(typeof qe=="function"&&nt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(be,t)}catch{}}var Fe=Math.clz32?Math.clz32:X,De=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(De(t)/ct|0)|0}var Ne=256,Ae=262144,Ie=4194304;function Ee(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var d=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?d=Ee(l):(y&=R,y!==0?d=Ee(y):s||(s=R&~t,s!==0&&(d=Ee(s))))):(R=l&~m,R!==0?d=Ee(R):y!==0?d=Ee(y):s||(s=l&~t,s!==0&&(d=Ee(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function it(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function bt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ln(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yi(t,i,s,l,d,m){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,te=t.hiddenUpdates;for(s=y&~s;0<s;){var he=31-Fe(s),_e=1<<he;R[he]=0,B[he]=-1;var ae=te[he];if(ae!==null)for(te[he]=null,he=0;he<ae.length;he++){var le=ae[he];le!==null&&(le.lane&=-536870913)}s&=~_e}l!==0&&Rl(t,l,0),m!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function Rl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Fe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function io(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Fe(s),d=1<<l;d&i|t[l]&i&&(t[l]|=i),s&=~d}}function qr(t,i){var s=i&-i;return s=(s&42)!==0?1:ao(s),(s&(t.suspendedLanes|i))!==0?0:s}function ao(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ro(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Nv(t.type))}function Fi(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var si=Math.random().toString(36).slice(2),on="__reactFiber$"+si,Sn="__reactProps$"+si,Mi="__reactContainer$"+si,jr="__reactEvents$"+si,Yr="__reactListeners$"+si,Cl="__reactHandles$"+si,so="__reactResources$"+si,hr="__reactMarker$"+si;function oo(t){delete t[on],delete t[Sn],delete t[jr],delete t[Yr],delete t[Cl]}function La(t){var i=t[on];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Mi]||s[on]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=vv(t);t!==null;){if(s=t[on])return s;t=vv(t)}return i}t=s,s=t.parentNode}return null}function Ua(t){if(t=t[on]||t[Mi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function pr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Na(t){var i=t[so];return i||(i=t[so]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(t){t[hr]=!0}var W=new Set,oe={};function ie(t,i){Z(t,i),Z(t+"Capture",i)}function Z(t,i){for(oe[t]=i,t=0;t<i.length;t++)W.add(i[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Oe={};function Ge(t){return Kt.call(Oe,t)?!0:Kt.call(Be,t)?!1:Ue.test(t)?Oe[t]=!0:(Be[t]=!0,!1)}function We(t,i,s){if(Ge(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Zt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Wt(t){if(!t._valueTracker){var i=Dt(t)?"checked":"value";t._valueTracker=Zt(t,i,""+t[i])}}function Ot(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Dt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function $e(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function rt(t){return t.replace(Lt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function yn(t,i,s,l,d,m,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+et(i)):t.value!==""+et(i)&&(t.value=""+et(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Mn(t,y,et(i)):s!=null?Mn(t,y,et(s)):l!=null&&t.removeAttribute("value"),d==null&&m!=null&&(t.defaultChecked=!!m),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function $i(t,i,s,l,d,m,y,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Wt(t);return}s=s!=null?""+et(s):"",i=i!=null?""+et(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Wt(t)}function Mn(t,i,s){i==="number"&&$e(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function oi(t,i,s,l){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+et(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Ft(t,i,s){if(i!=null&&(i=""+et(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+et(s):""}function En(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ce(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=et(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Wt(t)}function pn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||bn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Kr(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&s[d]!==l&&Tn(t,d,l)}else for(var m in i)i.hasOwnProperty(m)&&Tn(t,m,i[m])}function Ei(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var BS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),HS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return HS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Oc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zr=null,$r=null;function lm(t){var i=Ua(t);if(i&&(t=i.stateNode)){var s=t[Sn]||null;e:switch(t=i.stateNode,i.type){case"input":if(yn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+rt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var d=l[Sn]||null;if(!d)throw Error(a(90));yn(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ot(l)}break e;case"textarea":Ft(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&oi(t,!!s.multiple,i,!1)}}}var Fc=!1;function um(t,i,s){if(Fc)return t(i,s);Fc=!0;try{var l=t(i);return l}finally{if(Fc=!1,(Zr!==null||$r!==null)&&(gu(),Zr&&(i=Zr,t=$r,$r=Zr=null,lm(i),t)))for(i=0;i<t.length;i++)lm(t[i])}}function lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Ji)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ic=!1}var Oa=null,zc=null,Dl=null;function cm(){if(Dl)return Dl;var t,i=zc,s=i.length,l,d="value"in Oa?Oa.value:Oa.textContent,m=d.length;for(t=0;t<s&&i[t]===d[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===d[m-l];l++);return Dl=d.slice(t,1<l?1-l:void 0)}function Ll(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function fm(){return!1}function Vn(t){function i(s,l,d,m,y){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ul:fm,this.isPropagationStopped=fm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),i}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Vn(mr),co=g({},mr,{view:0,detail:0}),VS=Vn(co),Bc,Hc,fo,Ol=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Bc=t.screenX-fo.screenX,Hc=t.screenY-fo.screenY):Hc=Bc=0,fo=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),dm=Vn(Ol),GS=g({},Ol,{dataTransfer:0}),kS=Vn(GS),XS=g({},co,{relatedTarget:0}),Vc=Vn(XS),qS=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),WS=Vn(qS),jS=g({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YS=Vn(jS),KS=g({},mr,{data:0}),hm=Vn(KS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=QS[t])?!!i[t]:!1}function Gc(){return JS}var ey=g({},co,{key:function(t){if(t.key){var i=ZS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=Vn(ey),ny=g({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Vn(ny),iy=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),ay=Vn(iy),ry=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=Vn(ry),oy=g({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Vn(oy),uy=g({},mr,{newState:0,oldState:0}),cy=Vn(uy),fy=[9,13,27,32],kc=Ji&&"CompositionEvent"in window,ho=null;Ji&&"documentMode"in document&&(ho=document.documentMode);var dy=Ji&&"TextEvent"in window&&!ho,mm=Ji&&(!kc||ho&&8<ho&&11>=ho),gm=" ",vm=!1;function _m(t,i){switch(t){case"keyup":return fy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function hy(t,i){switch(t){case"compositionend":return xm(i);case"keypress":return i.which!==32?null:(vm=!0,gm);case"textInput":return t=i.data,t===gm&&vm?null:t;default:return null}}function py(t,i){if(Qr)return t==="compositionend"||!kc&&_m(t,i)?(t=cm(),Dl=zc=Oa=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mm&&i.locale!=="ko"?null:i.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!my[t.type]:i==="textarea"}function ym(t,i,s,l){Zr?$r?$r.push(l):$r=[l]:Zr=l,i=Eu(i,"onChange"),0<i.length&&(s=new Nl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var po=null,mo=null;function gy(t){iv(t,0)}function Pl(t){var i=pr(t);if(Ot(i))return t}function Mm(t,i){if(t==="change")return i}var Em=!1;if(Ji){var Xc;if(Ji){var qc="oninput"in document;if(!qc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),qc=typeof bm.oninput=="function"}Xc=qc}else Xc=!1;Em=Xc&&(!document.documentMode||9<document.documentMode)}function Tm(){po&&(po.detachEvent("onpropertychange",Am),mo=po=null)}function Am(t){if(t.propertyName==="value"&&Pl(mo)){var i=[];ym(i,mo,t,Pc(t)),um(gy,i)}}function vy(t,i,s){t==="focusin"?(Tm(),po=i,mo=s,po.attachEvent("onpropertychange",Am)):t==="focusout"&&Tm()}function _y(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(mo)}function xy(t,i){if(t==="click")return Pl(i)}function Sy(t,i){if(t==="input"||t==="change")return Pl(i)}function yy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:yy;function go(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!Kt.call(i,d)||!Kn(t[d],i[d]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,i){var s=Rm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Rm(s)}}function wm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?wm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=$e(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=$e(t.document)}return i}function Wc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var My=Ji&&"documentMode"in document&&11>=document.documentMode,Jr=null,jc=null,vo=null,Yc=!1;function Lm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yc||Jr==null||Jr!==$e(l)||(l=Jr,"selectionStart"in l&&Wc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vo&&go(vo,l)||(vo=l,l=Eu(jc,"onSelect"),0<l.length&&(i=new Nl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function gr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Kc={},Um={};Ji&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function vr(t){if(Kc[t])return Kc[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Um)return Kc[t]=i[s];return t}var Nm=vr("animationend"),Om=vr("animationiteration"),Pm=vr("animationstart"),Ey=vr("transitionrun"),by=vr("transitionstart"),Ty=vr("transitioncancel"),Fm=vr("transitionend"),Im=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function bi(t,i){Im.set(t,i),ie(i,[t])}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],ts=0,$c=0;function Il(){for(var t=ts,i=$c=ts=0;i<t;){var s=li[i];li[i++]=null;var l=li[i];li[i++]=null;var d=li[i];li[i++]=null;var m=li[i];if(li[i++]=null,l!==null&&d!==null){var y=l.pending;y===null?d.next=d:(d.next=y.next,y.next=d),l.pending=d}m!==0&&zm(s,d,m)}}function zl(t,i,s,l){li[ts++]=t,li[ts++]=i,li[ts++]=s,li[ts++]=l,$c|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Qc(t,i,s,l){return zl(t,i,s,l),Bl(t)}function _r(t,i){return zl(t,null,null,i),Bl(t)}function zm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var d=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(d=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,d&&i!==null&&(d=31-Fe(s),t=m.hiddenUpdates,l=t[d],l===null?t[d]=[i]:l.push(i),i.lane=s|536870912),m):null}function Bl(t){if(50<Bo)throw Bo=0,ld=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ns={};function Ay(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,i,s,l){return new Ay(t,i,s,l)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,i){var s=t.alternate;return s===null?(s=Zn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Bm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Hl(t,i,s,l,d,m){var y=0;if(l=t,typeof t=="function")Jc(t)&&(y=1);else if(typeof t=="string")y=LM(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=Zn(31,s,i,d),t.elementType=A,t.lanes=m,t;case T:return xr(s.children,d,m,i);case M:y=8,d|=24;break;case x:return t=Zn(12,s,i,d|2),t.elementType=x,t.lanes=m,t;case F:return t=Zn(13,s,i,d),t.elementType=F,t.lanes=m,t;case z:return t=Zn(19,s,i,d),t.elementType=z,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case D:y=9;break e;case N:y=11;break e;case U:y=14;break e;case j:y=16,l=null;break e}y=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Zn(y,s,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function xr(t,i,s,l){return t=Zn(7,t,l,i),t.lanes=s,t}function ef(t,i,s){return t=Zn(6,t,null,i),t.lanes=s,t}function Hm(t){var i=Zn(18,null,null,0);return i.stateNode=t,i}function tf(t,i,s){return i=Zn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Vm=new WeakMap;function ui(t,i){if(typeof t=="object"&&t!==null){var s=Vm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:G(i)},Vm.set(t,i),i)}return{value:t,source:i,stack:G(i)}}var is=[],as=0,Vl=null,_o=0,ci=[],fi=0,Pa=null,Ii=1,zi="";function ta(t,i){is[as++]=_o,is[as++]=Vl,Vl=t,_o=i}function Gm(t,i,s){ci[fi++]=Ii,ci[fi++]=zi,ci[fi++]=Pa,Pa=t;var l=Ii;t=zi;var d=32-Fe(l)-1;l&=~(1<<d),s+=1;var m=32-Fe(i)+d;if(30<m){var y=d-d%5;m=(l&(1<<y)-1).toString(32),l>>=y,d-=y,Ii=1<<32-Fe(i)+d|s<<d|l,zi=m+t}else Ii=1<<m|s<<d|l,zi=t}function nf(t){t.return!==null&&(ta(t,1),Gm(t,1,0))}function af(t){for(;t===Vl;)Vl=is[--as],is[as]=null,_o=is[--as],is[as]=null;for(;t===Pa;)Pa=ci[--fi],ci[fi]=null,zi=ci[--fi],ci[fi]=null,Ii=ci[--fi],ci[fi]=null}function km(t,i){ci[fi++]=Ii,ci[fi++]=zi,ci[fi++]=Pa,Ii=i.id,zi=i.overflow,Pa=t}var An=null,jt=null,yt=!1,Fa=null,di=!1,rf=Error(a(519));function Ia(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(ui(i,t)),rf}function Xm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[on]=t,i[Sn]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<Vo.length;s++)vt(Vo[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),$i(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),En(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||ov(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=Qi),i=!0):i=!1,i||Ia(t,!0)}function qm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function rs(t){if(t!==An)return!1;if(!yt)return qm(t),yt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ed(t.type,t.memoizedProps)),s=!s),s&&jt&&Ia(t),qm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));jt=gv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));jt=gv(t)}else i===27?(i=jt,$a(t.type)?(t=Cd,Cd=null,jt=t):jt=i):jt=An?pi(t.stateNode.nextSibling):null;return!0}function Sr(){jt=An=null,yt=!1}function sf(){var t=Fa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Fa=null),t}function xo(t){Fa===null?Fa=[t]:Fa.push(t)}var of=O(null),yr=null,na=null;function za(t,i,s){me(of,i._currentValue),i._currentValue=s}function ia(t){t._currentValue=of.current,ee(of)}function lf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function uf(t,i,s,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=d;for(var B=0;B<i.length;B++)if(R.context===i[B]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),lf(m.return,s,t),l||(y=null);break e}m=R.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(a(341));y.lanes|=s,m=y.alternate,m!==null&&(m.lanes|=s),lf(y,s,t),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===t){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function ss(t,i,s,l){t=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var R=d.type;Kn(d.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(d===de.current){if(y=d.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}d=d.return}t!==null&&uf(i,t,s,l),i.flags|=262144}function Gl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){yr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Wm(yr,t)}function kl(t,i){return yr===null&&Mr(t),Wm(t,i)}function Wm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},na===null){if(t===null)throw Error(a(308));na=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else na=na.next=i;return s}var Ry=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Cy=r.unstable_scheduleCallback,wy=r.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new Ry,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&Cy(wy,function(){t.controller.abort()})}var yo=null,ff=0,os=0,ls=null;function Dy(t,i){if(yo===null){var s=yo=[];ff=0,os=pd(),ls={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ff++,i.then(jm,jm),i}function jm(){if(--ff===0&&yo!==null){ls!==null&&(ls.status="fulfilled");var t=yo;yo=null,os=0,ls=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ly(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var Ym=I.S;I.S=function(t,i){L0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Dy(t,i),Ym!==null&&Ym(t,i)};var Er=O(null);function df(){var t=Er.current;return t!==null?t:qt.pooledCache}function Xl(t,i){i===null?me(Er,Er.current):me(Er,i.pool)}function Km(){var t=df();return t===null?null:{parent:ln._currentValue,pool:t}}var us=Error(a(460)),hf=Error(a(474)),ql=Error(a(542)),Wl={then:function(){}};function Zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $m(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Qi,Qi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jm(t),t;default:if(typeof i.status=="string")i.then(Qi,Qi);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jm(t),t}throw Tr=i,us}}function br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Tr=s,us):s}}var Tr=null;function Qm(){if(Tr===null)throw Error(a(459));var t=Tr;return Tr=null,t}function Jm(t){if(t===us||t===ql)throw Error(a(483))}var cs=null,Mo=0;function jl(t){var i=Mo;return Mo+=1,cs===null&&(cs=[]),$m(cs,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Yl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function eg(t){function i(Y,k){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[k],Y.flags|=16):Q.push(k)}}function s(Y,k){if(!t)return null;for(;k!==null;)i(Y,k),k=k.sibling;return null}function l(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function d(Y,k){return Y=ea(Y,k),Y.index=0,Y.sibling=null,Y}function m(Y,k,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<k?(Y.flags|=67108866,k):Q):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function y(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,Q,ge){return k===null||k.tag!==6?(k=ef(Q,Y.mode,ge),k.return=Y,k):(k=d(k,Q),k.return=Y,k)}function B(Y,k,Q,ge){var Qe=Q.type;return Qe===T?he(Y,k,Q.props.children,ge,Q.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===j&&br(Qe)===k.type)?(k=d(k,Q.props),Eo(k,Q),k.return=Y,k):(k=Hl(Q.type,Q.key,Q.props,null,Y.mode,ge),Eo(k,Q),k.return=Y,k)}function te(Y,k,Q,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=tf(Q,Y.mode,ge),k.return=Y,k):(k=d(k,Q.children||[]),k.return=Y,k)}function he(Y,k,Q,ge,Qe){return k===null||k.tag!==7?(k=xr(Q,Y.mode,ge,Qe),k.return=Y,k):(k=d(k,Q),k.return=Y,k)}function _e(Y,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ef(""+k,Y.mode,Q),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return Q=Hl(k.type,k.key,k.props,null,Y.mode,Q),Eo(Q,k),Q.return=Y,Q;case E:return k=tf(k,Y.mode,Q),k.return=Y,k;case j:return k=br(k),_e(Y,k,Q)}if(ce(k)||K(k))return k=xr(k,Y.mode,Q,null),k.return=Y,k;if(typeof k.then=="function")return _e(Y,jl(k),Q);if(k.$$typeof===L)return _e(Y,kl(Y,k),Q);Yl(Y,k)}return null}function ae(Y,k,Q,ge){var Qe=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:R(Y,k,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Qe?B(Y,k,Q,ge):null;case E:return Q.key===Qe?te(Y,k,Q,ge):null;case j:return Q=br(Q),ae(Y,k,Q,ge)}if(ce(Q)||K(Q))return Qe!==null?null:he(Y,k,Q,ge,null);if(typeof Q.then=="function")return ae(Y,k,jl(Q),ge);if(Q.$$typeof===L)return ae(Y,k,kl(Y,Q),ge);Yl(Y,Q)}return null}function le(Y,k,Q,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(Q)||null,R(k,Y,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return Y=Y.get(ge.key===null?Q:ge.key)||null,B(k,Y,ge,Qe);case E:return Y=Y.get(ge.key===null?Q:ge.key)||null,te(k,Y,ge,Qe);case j:return ge=br(ge),le(Y,k,Q,ge,Qe)}if(ce(ge)||K(ge))return Y=Y.get(Q)||null,he(k,Y,ge,Qe,null);if(typeof ge.then=="function")return le(Y,k,Q,jl(ge),Qe);if(ge.$$typeof===L)return le(Y,k,Q,kl(k,ge),Qe);Yl(k,ge)}return null}function ke(Y,k,Q,ge){for(var Qe=null,At=null,Ke=k,ft=k=0,St=null;Ke!==null&&ft<Q.length;ft++){Ke.index>ft?(St=Ke,Ke=null):St=Ke.sibling;var Rt=ae(Y,Ke,Q[ft],ge);if(Rt===null){Ke===null&&(Ke=St);break}t&&Ke&&Rt.alternate===null&&i(Y,Ke),k=m(Rt,k,ft),At===null?Qe=Rt:At.sibling=Rt,At=Rt,Ke=St}if(ft===Q.length)return s(Y,Ke),yt&&ta(Y,ft),Qe;if(Ke===null){for(;ft<Q.length;ft++)Ke=_e(Y,Q[ft],ge),Ke!==null&&(k=m(Ke,k,ft),At===null?Qe=Ke:At.sibling=Ke,At=Ke);return yt&&ta(Y,ft),Qe}for(Ke=l(Ke);ft<Q.length;ft++)St=le(Ke,Y,ft,Q[ft],ge),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?ft:St.key),k=m(St,k,ft),At===null?Qe=St:At.sibling=St,At=St);return t&&Ke.forEach(function(nr){return i(Y,nr)}),yt&&ta(Y,ft),Qe}function tt(Y,k,Q,ge){if(Q==null)throw Error(a(151));for(var Qe=null,At=null,Ke=k,ft=k=0,St=null,Rt=Q.next();Ke!==null&&!Rt.done;ft++,Rt=Q.next()){Ke.index>ft?(St=Ke,Ke=null):St=Ke.sibling;var nr=ae(Y,Ke,Rt.value,ge);if(nr===null){Ke===null&&(Ke=St);break}t&&Ke&&nr.alternate===null&&i(Y,Ke),k=m(nr,k,ft),At===null?Qe=nr:At.sibling=nr,At=nr,Ke=St}if(Rt.done)return s(Y,Ke),yt&&ta(Y,ft),Qe;if(Ke===null){for(;!Rt.done;ft++,Rt=Q.next())Rt=_e(Y,Rt.value,ge),Rt!==null&&(k=m(Rt,k,ft),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return yt&&ta(Y,ft),Qe}for(Ke=l(Ke);!Rt.done;ft++,Rt=Q.next())Rt=le(Ke,Y,ft,Rt.value,ge),Rt!==null&&(t&&Rt.alternate!==null&&Ke.delete(Rt.key===null?ft:Rt.key),k=m(Rt,k,ft),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return t&&Ke.forEach(function(GM){return i(Y,GM)}),yt&&ta(Y,ft),Qe}function Xt(Y,k,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var Qe=Q.key;k!==null;){if(k.key===Qe){if(Qe=Q.type,Qe===T){if(k.tag===7){s(Y,k.sibling),ge=d(k,Q.props.children),ge.return=Y,Y=ge;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===j&&br(Qe)===k.type){s(Y,k.sibling),ge=d(k,Q.props),Eo(ge,Q),ge.return=Y,Y=ge;break e}s(Y,k);break}else i(Y,k);k=k.sibling}Q.type===T?(ge=xr(Q.props.children,Y.mode,ge,Q.key),ge.return=Y,Y=ge):(ge=Hl(Q.type,Q.key,Q.props,null,Y.mode,ge),Eo(ge,Q),ge.return=Y,Y=ge)}return y(Y);case E:e:{for(Qe=Q.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){s(Y,k.sibling),ge=d(k,Q.children||[]),ge.return=Y,Y=ge;break e}else{s(Y,k);break}else i(Y,k);k=k.sibling}ge=tf(Q,Y.mode,ge),ge.return=Y,Y=ge}return y(Y);case j:return Q=br(Q),Xt(Y,k,Q,ge)}if(ce(Q))return ke(Y,k,Q,ge);if(K(Q)){if(Qe=K(Q),typeof Qe!="function")throw Error(a(150));return Q=Qe.call(Q),tt(Y,k,Q,ge)}if(typeof Q.then=="function")return Xt(Y,k,jl(Q),ge);if(Q.$$typeof===L)return Xt(Y,k,kl(Y,Q),ge);Yl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(s(Y,k.sibling),ge=d(k,Q),ge.return=Y,Y=ge):(s(Y,k),ge=ef(Q,Y.mode,ge),ge.return=Y,Y=ge),y(Y)):s(Y,k)}return function(Y,k,Q,ge){try{Mo=0;var Qe=Xt(Y,k,Q,ge);return cs=null,Qe}catch(Ke){if(Ke===us||Ke===ql)throw Ke;var At=Zn(29,Ke,null,Y.mode);return At.lanes=ge,At.return=Y,At}}}var Ar=eg(!0),tg=eg(!1),Ba=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ut&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Bl(t),zm(t,null,s),i}return zl(t,l,i,s),Bl(t)}function bo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,io(t,s)}}function gf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var vf=!1;function To(){if(vf){var t=ls;if(t!==null)throw t}}function Ao(t,i,s,l){vf=!1;var d=t.updateQueue;Ba=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var B=R,te=B.next;B.next=null,y===null?m=te:y.next=te,y=B;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==y&&(R===null?he.firstBaseUpdate=te:R.next=te,he.lastBaseUpdate=B))}if(m!==null){var _e=d.baseState;y=0,he=te=B=null,R=m;do{var ae=R.lane&-536870913,le=ae!==R.lane;if(le?(xt&ae)===ae:(l&ae)===ae){ae!==0&&ae===os&&(vf=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ke=t,tt=R;ae=i;var Xt=s;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){_e=ke.call(Xt,_e,ae);break e}_e=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ae=typeof ke=="function"?ke.call(Xt,_e,ae):ke,ae==null)break e;_e=g({},_e,ae);break e;case 2:Ba=!0}}ae=R.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=d.callbacks,le===null?d.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(te=he=le,B=_e):he=he.next=le,y|=ae;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;le=R,R=le.next,le.next=null,d.lastBaseUpdate=le,d.shared.pending=null}}while(!0);he===null&&(B=_e),d.baseState=B,d.firstBaseUpdate=te,d.lastBaseUpdate=he,m===null&&(d.shared.lanes=0),Wa|=y,t.lanes=y,t.memoizedState=_e}}function ng(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ig(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ng(s[t],i)}var fs=O(null),Kl=O(0);function ag(t,i){t=da,me(Kl,t),me(fs,i),da=t|i.baseLanes}function _f(){me(Kl,da),me(fs,fs.current)}function xf(){da=Kl.current,ee(fs),ee(Kl)}var $n=O(null),hi=null;function Ga(t){var i=t.alternate;me(an,an.current&1),me($n,t),hi===null&&(i===null||fs.current!==null||i.memoizedState!==null)&&(hi=t)}function Sf(t){me(an,an.current),me($n,t),hi===null&&(hi=t)}function rg(t){t.tag===22?(me(an,an.current),me($n,t),hi===null&&(hi=t)):ka()}function ka(){me(an,an.current),me($n,$n.current)}function Qn(t){ee($n),hi===t&&(hi=null),ee(an)}var an=O(0);function Zl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ad(s)||Rd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var aa=0,ut=null,Gt=null,un=null,$l=!1,ds=!1,Rr=!1,Ql=0,Ro=0,hs=null,Uy=0;function tn(){throw Error(a(321))}function yf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function Mf(t,i,s,l,d,m){return aa=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Gg:If,Rr=!1,m=s(l,d),Rr=!1,ds&&(m=og(i,s,l,d)),sg(t),m}function sg(t){I.H=Do;var i=Gt!==null&&Gt.next!==null;if(aa=0,un=Gt=ut=null,$l=!1,Ro=0,hs=null,i)throw Error(a(300));t===null||cn||(t=t.dependencies,t!==null&&Gl(t)&&(cn=!0))}function og(t,i,s,l){ut=t;var d=0;do{if(ds&&(hs=null),Ro=0,ds=!1,25<=d)throw Error(a(301));if(d+=1,un=Gt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=kg,m=i(s,l)}while(ds);return m}function Ny(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ut.flags|=1024),i}function Ef(){var t=Ql!==0;return Ql=0,t}function bf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Tf(t){if($l){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$l=!1}aa=0,un=Gt=ut=null,ds=!1,Ro=Ql=0,hs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ut.memoizedState=un=t:un=un.next=t,un}function rn(){if(Gt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=un===null?ut.memoizedState:un.next;if(i!==null)un=i,Gt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?ut.memoizedState=un=t:un=un.next=t}return un}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,hs===null&&(hs=[]),t=$m(hs,t,i),i=ut,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Gg:If),t}function eu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===L)return Rn(t)}throw Error(a(438,String(t)))}function Af(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Jl(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function ra(t,i){return typeof i=="function"?i(t):i}function tu(t){var i=rn();return Rf(i,Gt,t)}function Rf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var d=t.baseQueue,m=l.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}i.baseQueue=d=m,l.pending=null}if(m=t.baseState,d===null)t.memoizedState=m;else{i=d.next;var R=y=null,B=null,te=i,he=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(xt&_e)===_e:(aa&_e)===_e){var ae=te.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===os&&(he=!0);else if((aa&ae)===ae){te=te.next,ae===os&&(he=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(R=B=_e,y=m):B=B.next=_e,ut.lanes|=ae,Wa|=ae;_e=te.action,Rr&&s(m,_e),m=te.hasEagerState?te.eagerState:s(m,_e)}else ae={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(R=B=ae,y=m):B=B.next=ae,ut.lanes|=_e,Wa|=_e;te=te.next}while(te!==null&&te!==i);if(B===null?y=m:B.next=R,!Kn(m,t.memoizedState)&&(cn=!0,he&&(s=ls,s!==null)))throw s;t.memoizedState=m,t.baseState=y,t.baseQueue=B,l.lastRenderedState=m}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cf(t){var i=rn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var y=d=d.next;do m=t(m,y.action),y=y.next;while(y!==d);Kn(m,i.memoizedState)||(cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function lg(t,i,s){var l=ut,d=rn(),m=yt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!Kn((Gt||d).memoizedState,s);if(y&&(d.memoizedState=s,cn=!0),d=d.queue,Lf(fg.bind(null,l,d,t),[t]),d.getSnapshot!==i||y||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ps(9,{destroy:void 0},cg.bind(null,l,d,s,i),null),qt===null)throw Error(a(349));m||(aa&127)!==0||ug(l,i,s)}return s}function ug(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=Jl(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function cg(t,i,s,l){i.value=s,i.getSnapshot=l,dg(i)&&hg(t)}function fg(t,i,s){return s(function(){dg(i)&&hg(t)})}function dg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function hg(t){var i=_r(t,2);i!==null&&Wn(i,t,2)}function wf(t){var i=In();if(typeof t=="function"){var s=t;if(t=s(),Rr){ze(!0);try{s()}finally{ze(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},i}function pg(t,i,s,l){return t.baseState=s,Rf(t,Gt,typeof l=="function"?l:ra)}function Oy(t,i,s,l,d){if(au(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,mg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function mg(t,i){var s=i.action,l=i.payload,d=t.state;if(i.isTransition){var m=I.T,y={};I.T=y;try{var R=s(d,l),B=I.S;B!==null&&B(y,R),gg(t,i,R)}catch(te){Df(t,i,te)}finally{m!==null&&y.types!==null&&(m.types=y.types),I.T=m}}else try{m=s(d,l),gg(t,i,m)}catch(te){Df(t,i,te)}}function gg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){vg(t,i,l)},function(l){return Df(t,i,l)}):vg(t,i,s)}function vg(t,i,s){i.status="fulfilled",i.value=s,_g(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,mg(t,s)))}function Df(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,_g(i),i=i.next;while(i!==l)}t.action=null}function _g(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function xg(t,i){return i}function Sg(t,i){if(yt){var s=qt.formState;if(s!==null){e:{var l=ut;if(yt){if(jt){t:{for(var d=jt,m=di;d.nodeType!==8;){if(!m){d=null;break t}if(d=pi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){jt=pi(d.nextSibling),l=d.data==="F!";break e}}Ia(l)}l=!1}l&&(i=s[0])}}return s=In(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},s.queue=l,s=Bg.bind(null,ut,l),l.dispatch=s,l=wf(!1),m=Ff.bind(null,ut,!1,l.queue),l=In(),d={state:i,dispatch:null,action:t,pending:null},l.queue=d,s=Oy.bind(null,ut,d,m,s),d.dispatch=s,l.memoizedState=t,[i,s,!1]}function yg(t){var i=rn();return Mg(i,Gt,t)}function Mg(t,i,s){if(i=Rf(t,i,xg)[0],t=tu(ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Co(i)}catch(y){throw y===us?ql:y}else l=i;i=rn();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,ps(9,{destroy:void 0},Py.bind(null,d,s),null)),[l,m,t]}function Py(t,i){t.action=i}function Eg(t){var i=rn(),s=Gt;if(s!==null)return Mg(i,s,t);rn(),i=i.memoizedState,s=rn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ps(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=Jl(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function bg(){return rn().memoizedState}function nu(t,i,s,l){var d=In();ut.flags|=t,d.memoizedState=ps(1|i,{destroy:void 0},s,l===void 0?null:l)}function iu(t,i,s,l){var d=rn();l=l===void 0?null:l;var m=d.memoizedState.inst;Gt!==null&&l!==null&&yf(l,Gt.memoizedState.deps)?d.memoizedState=ps(i,m,s,l):(ut.flags|=t,d.memoizedState=ps(1|i,m,s,l))}function Tg(t,i){nu(8390656,8,t,i)}function Lf(t,i){iu(2048,8,t,i)}function Fy(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=Jl(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Ag(t){var i=rn().memoizedState;return Fy({ref:i,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Rg(t,i){return iu(4,2,t,i)}function Cg(t,i){return iu(4,4,t,i)}function wg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dg(t,i,s){s=s!=null?s.concat([t]):null,iu(4,4,wg.bind(null,i,t),s)}function Uf(){}function Lg(t,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&yf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ug(t,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&yf(i,l[1]))return l[0];if(l=t(),Rr){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l}function Nf(t,i,s){return s===void 0||(aa&1073741824)!==0&&(xt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=N0(),ut.lanes|=t,Wa|=t,s)}function Ng(t,i,s,l){return Kn(s,i)?s:fs.current!==null?(t=Nf(t,s,l),Kn(t,i)||(cn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(xt&261930)===0?(cn=!0,t.memoizedState=s):(t=N0(),ut.lanes|=t,Wa|=t,i)}function Og(t,i,s,l,d){var m=V.p;V.p=m!==0&&8>m?m:8;var y=I.T,R={};I.T=R,Ff(t,!1,i,s);try{var B=d(),te=I.S;if(te!==null&&te(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var he=Ly(B,l);wo(t,i,he,ti(t))}else wo(t,i,l,ti(t))}catch(_e){wo(t,i,{then:function(){},status:"rejected",reason:_e},ti())}finally{V.p=m,y!==null&&R.types!==null&&(y.types=R.types),I.T=y}}function Iy(){}function Of(t,i,s,l){if(t.tag!==5)throw Error(a(476));var d=Pg(t).queue;Og(t,d,i,ne,s===null?Iy:function(){return Fg(t),s(l)})}function Pg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ne},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Fg(t){var i=Pg(t);i.next===null&&(i=t.alternate.memoizedState),wo(t,i.next.queue,{},ti())}function Pf(){return Rn(Wo)}function Ig(){return rn().memoizedState}function zg(){return rn().memoizedState}function zy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();t=Ha(s);var l=Va(i,t,s);l!==null&&(Wn(l,i,s),bo(l,i,s)),i={cache:cf()},t.payload=i;return}i=i.return}}function By(t,i,s){var l=ti();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},au(t)?Hg(i,s):(s=Qc(t,i,s,l),s!==null&&(Wn(s,t,l),Vg(s,i,l)))}function Bg(t,i,s){var l=ti();wo(t,i,s,l)}function wo(t,i,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(au(t))Hg(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,R=m(y,s);if(d.hasEagerState=!0,d.eagerState=R,Kn(R,y))return zl(t,i,d,0),qt===null&&Il(),!1}catch{}if(s=Qc(t,i,d,l),s!==null)return Wn(s,t,l),Vg(s,i,l),!0}return!1}function Ff(t,i,s,l){if(l={lane:2,revertLane:pd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},au(t)){if(i)throw Error(a(479))}else i=Qc(t,s,l,2),i!==null&&Wn(i,t,2)}function au(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function Hg(t,i){ds=$l=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Vg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,io(t,s)}}var Do={readContext:Rn,use:eu,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Do.useEffectEvent=tn;var Gg={readContext:Rn,use:eu,useCallback:function(t,i){return In().memoizedState=[t,i===void 0?null:i],t},useContext:Rn,useEffect:Tg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,nu(4194308,4,wg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return nu(4194308,4,t,i)},useInsertionEffect:function(t,i){nu(4,2,t,i)},useMemo:function(t,i){var s=In();i=i===void 0?null:i;var l=t();if(Rr){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=In();if(s!==void 0){var d=s(i);if(Rr){ze(!0);try{s(i)}finally{ze(!1)}}}else d=i;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=By.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=In();return t={current:t},i.memoizedState=t},useState:function(t){t=wf(t);var i=t.queue,s=Bg.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Uf,useDeferredValue:function(t,i){var s=In();return Nf(s,t,i)},useTransition:function(){var t=wf(!1);return t=Og.bind(null,ut,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,d=In();if(yt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qt===null)throw Error(a(349));(xt&127)!==0||ug(l,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,Tg(fg.bind(null,l,m,t),[t]),l.flags|=2048,ps(9,{destroy:void 0},cg.bind(null,l,m,s,i),null),s},useId:function(){var t=In(),i=qt.identifierPrefix;if(yt){var s=zi,l=Ii;s=(l&~(1<<32-Fe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Ql++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Uy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Pf,useFormState:Sg,useActionState:Sg,useOptimistic:function(t){var i=In();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ff.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:Af,useCacheRefresh:function(){return In().memoizedState=zy.bind(null,ut)},useEffectEvent:function(t){var i=In(),s={impl:t};return i.memoizedState=s,function(){if((Ut&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},If={readContext:Rn,use:eu,useCallback:Lg,useContext:Rn,useEffect:Lf,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ug,useReducer:tu,useRef:bg,useState:function(){return tu(ra)},useDebugValue:Uf,useDeferredValue:function(t,i){var s=rn();return Ng(s,Gt.memoizedState,t,i)},useTransition:function(){var t=tu(ra)[0],i=rn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:Pf,useFormState:yg,useActionState:yg,useOptimistic:function(t,i){var s=rn();return pg(s,Gt,t,i)},useMemoCache:Af,useCacheRefresh:zg};If.useEffectEvent=Ag;var kg={readContext:Rn,use:eu,useCallback:Lg,useContext:Rn,useEffect:Lf,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ug,useReducer:Cf,useRef:bg,useState:function(){return Cf(ra)},useDebugValue:Uf,useDeferredValue:function(t,i){var s=rn();return Gt===null?Nf(s,t,i):Ng(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Cf(ra)[0],i=rn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:Pf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,i){var s=rn();return Gt!==null?pg(s,Gt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Af,useCacheRefresh:zg};kg.useEffectEvent=Ag;function zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Bf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ti(),d=Ha(l);d.payload=i,s!=null&&(d.callback=s),i=Va(t,d,l),i!==null&&(Wn(i,t,l),bo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ti(),d=Ha(l);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=Va(t,d,l),i!==null&&(Wn(i,t,l),bo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ti(),l=Ha(s);l.tag=2,i!=null&&(l.callback=i),i=Va(t,l,s),i!==null&&(Wn(i,t,s),bo(i,t,s))}};function Xg(t,i,s,l,d,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,y):i.prototype&&i.prototype.isPureReactComponent?!go(s,l)||!go(d,m):!0}function qg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Bf.enqueueReplaceState(i,i.state,null)}function Cr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var d in t)s[d]===void 0&&(s[d]=t[d])}return s}function Wg(t){Fl(t)}function jg(t){console.error(t)}function Yg(t){Fl(t)}function ru(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Kg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Hf(t,i,s){return s=Ha(s),s.tag=3,s.payload={element:null},s.callback=function(){ru(t,i)},s}function Zg(t){return t=Ha(t),t.tag=3,t}function $g(t,i,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;t.payload=function(){return d(m)},t.callback=function(){Kg(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Kg(i,s,l),typeof d!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Hy(t,i,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ss(i,s,d,!0),s=$n.current,s!==null){switch(s.tag){case 31:case 13:return hi===null?vu():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===Wl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),fd(t,l,d)),!1;case 22:return s.flags|=65536,l===Wl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),fd(t,l,d)),!1}throw Error(a(435,s.tag))}return fd(t,l,d),vu(),!1}if(yt)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==rf&&(t=Error(a(422),{cause:l}),xo(ui(t,s)))):(l!==rf&&(i=Error(a(423),{cause:l}),xo(ui(i,s))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=ui(l,s),d=Hf(t.stateNode,l,d),gf(t,d),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:l});if(m=ui(m,s),zo===null?zo=[m]:zo.push(m),nn!==4&&(nn=2),i===null)return!0;l=ui(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=d&-d,s.lanes|=t,t=Hf(s.stateNode,l,t),gf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ja===null||!ja.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=Zg(d),$g(d,t,s,l),gf(s,d),!1}s=s.return}while(s!==null);return!1}var Vf=Error(a(461)),cn=!1;function Cn(t,i,s,l){i.child=t===null?tg(i,null,s,l):Ar(i,t.child,s,l)}function Qg(t,i,s,l,d){s=s.render;var m=i.ref;if("ref"in l){var y={};for(var R in l)R!=="ref"&&(y[R]=l[R])}else y=l;return Mr(i),l=Mf(t,i,s,y,m,d),R=Ef(),t!==null&&!cn?(bf(t,i,d),sa(t,i,d)):(yt&&R&&nf(i),i.flags|=1,Cn(t,i,l,d),i.child)}function Jg(t,i,s,l,d){if(t===null){var m=s.type;return typeof m=="function"&&!Jc(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,e0(t,i,m,l,d)):(t=Hl(s.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Kf(t,d)){var y=m.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(y,l)&&t.ref===i.ref)return sa(t,i,d)}return i.flags|=1,t=ea(m,l),t.ref=i.ref,t.return=i,i.child=t}function e0(t,i,s,l,d){if(t!==null){var m=t.memoizedProps;if(go(m,l)&&t.ref===i.ref)if(cn=!1,i.pendingProps=l=m,Kf(t,d))(t.flags&131072)!==0&&(cn=!0);else return i.lanes=t.lanes,sa(t,i,d)}return Gf(t,i,s,l,d)}function t0(t,i,s,l){var d=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,i.child=null;return n0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(i,m!==null?m.cachePool:null),m!==null?ag(i,m):_f(),rg(i);else return l=i.lanes=536870912,n0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(Xl(i,m.cachePool),ag(i,m),ka(),i.memoizedState=null):(t!==null&&Xl(i,null),_f(),ka());return Cn(t,i,d,s),i.child}function Lo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function n0(t,i,s,l,d){var m=df();return m=m===null?null:{parent:ln._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&Xl(i,null),_f(),rg(i),t!==null&&ss(t,i,l,!0),i.childLanes=d,null}function su(t,i){return i=lu({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function i0(t,i,s){return Ar(i,t.child,null,s),t=su(i,i.pendingProps),t.flags|=2,Qn(i),i.memoizedState=null,t}function Vy(t,i,s){var l=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(yt){if(l.mode==="hidden")return t=su(i,l),i.lanes=536870912,Lo(null,t);if(Sf(i),(t=jt)?(t=mv(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},s=Hm(t),s.return=i,i.child=s,An=i,jt=null)):t=null,t===null)throw Ia(i);return i.lanes=536870912,null}return su(i,l)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Sf(i),d)if(i.flags&256)i.flags&=-257,i=i0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(cn||ss(t,i,s,!1),d=(s&t.childLanes)!==0,cn||d){if(l=qt,l!==null&&(y=qr(l,s),y!==0&&y!==m.retryLane))throw m.retryLane=y,_r(t,y),Wn(l,t,y),Vf;vu(),i=i0(t,i,s)}else t=m.treeContext,jt=pi(y.nextSibling),An=i,yt=!0,Fa=null,di=!1,t!==null&&km(i,t),i=su(i,l),i.flags|=4096;return i}return t=ea(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function ou(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Gf(t,i,s,l,d){return Mr(i),s=Mf(t,i,s,l,void 0,d),l=Ef(),t!==null&&!cn?(bf(t,i,d),sa(t,i,d)):(yt&&l&&nf(i),i.flags|=1,Cn(t,i,s,d),i.child)}function a0(t,i,s,l,d,m){return Mr(i),i.updateQueue=null,s=og(i,l,s,d),sg(t),l=Ef(),t!==null&&!cn?(bf(t,i,m),sa(t,i,m)):(yt&&l&&nf(i),i.flags|=1,Cn(t,i,s,m),i.child)}function r0(t,i,s,l,d){if(Mr(i),i.stateNode===null){var m=ns,y=s.contextType;typeof y=="object"&&y!==null&&(m=Rn(y)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Bf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},pf(i),y=s.contextType,m.context=typeof y=="object"&&y!==null?Rn(y):ns,m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(zf(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&Bf.enqueueReplaceState(m,m.state,null),Ao(i,l,m,d),To(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var R=i.memoizedProps,B=Cr(s,R);m.props=B;var te=m.context,he=s.contextType;y=ns,typeof he=="object"&&he!==null&&(y=Rn(he));var _e=s.getDerivedStateFromProps;he=typeof _e=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,he||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||te!==y)&&qg(i,m,l,y),Ba=!1;var ae=i.memoizedState;m.state=ae,Ao(i,l,m,d),To(),te=i.memoizedState,R||ae!==te||Ba?(typeof _e=="function"&&(zf(i,s,_e,l),te=i.memoizedState),(B=Ba||Xg(i,s,B,l,ae,te,y))?(he||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),m.props=l,m.state=te,m.context=y,l=B):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,mf(t,i),y=i.memoizedProps,he=Cr(s,y),m.props=he,_e=i.pendingProps,ae=m.context,te=s.contextType,B=ns,typeof te=="object"&&te!==null&&(B=Rn(te)),R=s.getDerivedStateFromProps,(te=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==_e||ae!==B)&&qg(i,m,l,B),Ba=!1,ae=i.memoizedState,m.state=ae,Ao(i,l,m,d),To();var le=i.memoizedState;y!==_e||ae!==le||Ba||t!==null&&t.dependencies!==null&&Gl(t.dependencies)?(typeof R=="function"&&(zf(i,s,R,l),le=i.memoizedState),(he=Ba||Xg(i,s,he,l,ae,le,B)||t!==null&&t.dependencies!==null&&Gl(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,le,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,le,B)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),m.props=l,m.state=le,m.context=B,l=he):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,ou(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Ar(i,t.child,null,d),i.child=Ar(i,null,s,d)):Cn(t,i,s,d),i.memoizedState=m.state,t=i.child):t=sa(t,i,d),t}function s0(t,i,s,l){return Sr(),i.flags|=256,Cn(t,i,s,l),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:Km()}}function qf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ei),t}function o0(t,i,s){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(d=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(yt){if(d?Ga(i):ka(),(t=jt)?(t=mv(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},s=Hm(t),s.return=i,i.child=s,An=i,jt=null)):t=null,t===null)throw Ia(i);return Rd(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,d?(ka(),d=i.mode,R=lu({mode:"hidden",children:R},d),l=xr(l,d,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Xf(s),l.childLanes=qf(t,y,s),i.memoizedState=kf,Lo(null,l)):(Ga(i),Wf(i,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(m)i.flags&256?(Ga(i),i.flags&=-257,i=jf(t,i,s)):i.memoizedState!==null?(ka(),i.child=t.child,i.flags|=128,i=null):(ka(),R=l.fallback,d=i.mode,l=lu({mode:"visible",children:l.children},d),R=xr(R,d,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Ar(i,t.child,null,s),l=i.child,l.memoizedState=Xf(s),l.childLanes=qf(t,y,s),i.memoizedState=kf,i=Lo(null,l));else if(Ga(i),Rd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var te=y.dgst;y=te,l=Error(a(419)),l.stack="",l.digest=y,xo({value:l,source:null,stack:null}),i=jf(t,i,s)}else if(cn||ss(t,i,s,!1),y=(s&t.childLanes)!==0,cn||y){if(y=qt,y!==null&&(l=qr(y,s),l!==0&&l!==B.retryLane))throw B.retryLane=l,_r(t,l),Wn(y,t,l),Vf;Ad(R)||vu(),i=jf(t,i,s)}else Ad(R)?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,jt=pi(R.nextSibling),An=i,yt=!0,Fa=null,di=!1,t!==null&&km(i,t),i=Wf(i,l.children),i.flags|=4096);return i}return d?(ka(),R=l.fallback,d=i.mode,B=t.child,te=B.sibling,l=ea(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,te!==null?R=ea(te,R):(R=xr(R,d,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Lo(null,l),l=i.child,R=t.child.memoizedState,R===null?R=Xf(s):(d=R.cachePool,d!==null?(B=ln._currentValue,d=d.parent!==B?{parent:B,pool:B}:d):d=Km(),R={baseLanes:R.baseLanes|s,cachePool:d}),l.memoizedState=R,l.childLanes=qf(t,y,s),i.memoizedState=kf,Lo(t.child,l)):(Ga(i),s=t.child,t=s.sibling,s=ea(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function Wf(t,i){return i=lu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function lu(t,i){return t=Zn(22,t,null,i),t.lanes=0,t}function jf(t,i,s){return Ar(i,t.child,null,s),t=Wf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function l0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),lf(t.return,i,s)}function Yf(t,i,s,l,d,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=d,y.treeForkCount=m)}function u0(t,i,s){var l=i.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var y=an.current,R=(y&2)!==0;if(R?(y=y&1|2,i.flags|=128):y&=1,me(an,y),Cn(t,i,l,s),l=yt?_o:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,s,i);else if(t.tag===19)l0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&Zl(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Yf(i,!1,d,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Zl(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}Yf(i,!0,s,null,m,l);break;case"together":Yf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function sa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Wa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ss(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ea(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ea(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Gl(t)))}function Gy(t,i,s){switch(i.tag){case 3:Le(i,i.stateNode.containerInfo),za(i,ln,t.memoizedState.cache),Sr();break;case 27:case 5:Ve(i);break;case 4:Le(i,i.stateNode.containerInfo);break;case 10:za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Sf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(i),i.flags|=128,null):(s&i.child.childLanes)!==0?o0(t,i,s):(Ga(i),t=sa(t,i,s),t!==null?t.sibling:null);Ga(i);break;case 19:var d=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ss(t,i,s,!1),l=(s&i.childLanes)!==0),d){if(l)return u0(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),me(an,an.current),l)break;return null;case 22:return i.lanes=0,t0(t,i,s,i.pendingProps);case 24:za(i,ln,t.memoizedState.cache)}return sa(t,i,s)}function c0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)cn=!0;else{if(!Kf(t,s)&&(i.flags&128)===0)return cn=!1,Gy(t,i,s);cn=(t.flags&131072)!==0}else cn=!1,yt&&(i.flags&1048576)!==0&&Gm(i,_o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=br(i.elementType),i.type=t,typeof t=="function")Jc(t)?(l=Cr(t,l),i.tag=1,i=r0(null,i,t,l,s)):(i.tag=0,i=Gf(null,i,t,l,s));else{if(t!=null){var d=t.$$typeof;if(d===N){i.tag=11,i=Qg(null,i,t,l,s);break e}else if(d===U){i.tag=14,i=Jg(null,i,t,l,s);break e}}throw i=ue(t)||t,Error(a(306,i,""))}}return i;case 0:return Gf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,d=Cr(l,i.pendingProps),r0(t,i,l,d,s);case 3:e:{if(Le(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,mf(t,i),Ao(i,l,null,s);var y=i.memoizedState;if(l=y.cache,za(i,ln,l),l!==m.cache&&uf(i,[ln],s,!0),To(),l=y.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=s0(t,i,l,s);break e}else if(l!==d){d=ui(Error(a(424)),i),xo(d),i=s0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=pi(t.firstChild),An=i,yt=!0,Fa=null,di=!0,s=tg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Sr(),l===d){i=sa(t,i,s);break e}Cn(t,i,l,s)}i=i.child}return i;case 26:return ou(t,i),t===null?(s=yv(i.type,null,i.pendingProps,null))?i.memoizedState=s:yt||(s=i.type,t=i.pendingProps,l=bu(re.current).createElement(s),l[on]=i,l[Sn]=t,wn(l,s,t),C(l),i.stateNode=l):i.memoizedState=yv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&yt&&(l=i.stateNode=_v(i.type,i.pendingProps,re.current),An=i,di=!0,d=jt,$a(i.type)?(Cd=d,jt=pi(l.firstChild)):jt=d),Cn(t,i,i.pendingProps.children,s),ou(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&yt&&((d=l=jt)&&(l=_M(l,i.type,i.pendingProps,di),l!==null?(i.stateNode=l,An=i,jt=pi(l.firstChild),di=!1,d=!0):d=!1),d||Ia(i)),Ve(i),d=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,l=m.children,Ed(d,m)?l=null:y!==null&&Ed(d,y)&&(i.flags|=32),i.memoizedState!==null&&(d=Mf(t,i,Ny,null,null,s),Wo._currentValue=d),ou(t,i),Cn(t,i,l,s),i.child;case 6:return t===null&&yt&&((t=s=jt)&&(s=xM(s,i.pendingProps,di),s!==null?(i.stateNode=s,An=i,jt=null,t=!0):t=!1),t||Ia(i)),null;case 13:return o0(t,i,s);case 4:return Le(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ar(i,null,l,s):Cn(t,i,l,s),i.child;case 11:return Qg(t,i,i.type,i.pendingProps,s);case 7:return Cn(t,i,i.pendingProps,s),i.child;case 8:return Cn(t,i,i.pendingProps.children,s),i.child;case 12:return Cn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,za(i,i.type,l.value),Cn(t,i,l.children,s),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,Mr(i),d=Rn(d),l=l(d),i.flags|=1,Cn(t,i,l,s),i.child;case 14:return Jg(t,i,i.type,i.pendingProps,s);case 15:return e0(t,i,i.type,i.pendingProps,s);case 19:return u0(t,i,s);case 31:return Vy(t,i,s);case 22:return t0(t,i,s,i.pendingProps);case 24:return Mr(i),l=Rn(ln),t===null?(d=df(),d===null&&(d=qt,m=cf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:l,cache:d},pf(i),za(i,ln,d)):((t.lanes&s)!==0&&(mf(t,i),Ao(i,null,null,s),To()),d=t.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),za(i,ln,l)):(l=m.cache,za(i,ln,l),l!==d.cache&&uf(i,[ln],s,!0))),Cn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function oa(t){t.flags|=4}function Zf(t,i,s,l,d){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(I0())t.flags|=8192;else throw Tr=Wl,hf}else t.flags&=-16777217}function f0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Av(i))if(I0())t.flags|=8192;else throw Tr=Wl,hf}function uu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Pt():536870912,t.lanes|=i,_s|=i)}function Uo(t,i){if(!yt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Yt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function ky(t,i,s){var l=i.pendingProps;switch(af(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(i),null;case 1:return Yt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ia(ln),Xe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(rs(i)?oa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sf())),Yt(i),null;case 26:var d=i.type,m=i.memoizedState;return t===null?(oa(i),m!==null?(Yt(i),f0(i,m)):(Yt(i),Zf(i,d,null,l,s))):m?m!==t.memoizedState?(oa(i),Yt(i),f0(i,m)):(Yt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&oa(i),Yt(i),Zf(i,d,t,l,s)),null;case 27:if(pt(i),s=re.current,d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}t=Re.current,rs(i)?Xm(i):(t=_v(d,l,s),i.stateNode=t,oa(i))}return Yt(i),null;case 5:if(pt(i),d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}if(m=Re.current,rs(i))Xm(i);else{var y=bu(re.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?y.createElement(d,{is:l.is}):y.createElement(d)}}m[on]=i,m[Sn]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(wn(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&oa(i)}}return Yt(i),Zf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=re.current,rs(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,d=An,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[on]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||ov(t.nodeValue,s)),t||Ia(i,!0)}else t=bu(t).createTextNode(l),t[on]=i,i.stateNode=t}return Yt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=rs(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[on]=i}else Sr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),t=!1}else s=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Qn(i),i):(Qn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Yt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=rs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[on]=i}else Sr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),d=!1}else d=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Qn(i),i):(Qn(i),null)}return Qn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),uu(i,i.updateQueue),Yt(i),null);case 4:return Xe(),t===null&&_d(i.stateNode.containerInfo),Yt(i),null;case 10:return ia(i.type),Yt(i),null;case 19:if(ee(an),l=i.memoizedState,l===null)return Yt(i),null;if(d=(i.flags&128)!==0,m=l.rendering,m===null)if(d)Uo(l,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Zl(t),m!==null){for(i.flags|=128,Uo(l,!1),t=m.updateQueue,i.updateQueue=t,uu(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Bm(s,t),s=s.sibling;return me(an,an.current&1|2),yt&&ta(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&b()>pu&&(i.flags|=128,d=!0,Uo(l,!1),i.lanes=4194304)}else{if(!d)if(t=Zl(m),t!==null){if(i.flags|=128,d=!0,t=t.updateQueue,i.updateQueue=t,uu(i,t),Uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!yt)return Yt(i),null}else 2*b()-l.renderingStartTime>pu&&s!==536870912&&(i.flags|=128,d=!0,Uo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=b(),t.sibling=null,s=an.current,me(an,d?s&1|2:s&1),yt&&ta(i,l.treeForkCount),t):(Yt(i),null);case 22:case 23:return Qn(i),xf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Yt(i),i.subtreeFlags&6&&(i.flags|=8192)):Yt(i),s=i.updateQueue,s!==null&&uu(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ee(Er),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ia(ln),Yt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Xy(t,i){switch(af(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ia(ln),Xe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return pt(i),null;case 31:if(i.memoizedState!==null){if(Qn(i),i.alternate===null)throw Error(a(340));Sr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Qn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Sr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ee(an),null;case 4:return Xe(),null;case 10:return ia(i.type),null;case 22:case 23:return Qn(i),xf(),t!==null&&ee(Er),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function d0(t,i){switch(af(i),i.tag){case 3:ia(ln),Xe();break;case 26:case 27:case 5:pt(i);break;case 4:Xe();break;case 31:i.memoizedState!==null&&Qn(i);break;case 13:Qn(i);break;case 19:ee(an);break;case 10:ia(i.type);break;case 22:case 23:Qn(i),xf(),t!==null&&ee(Er);break;case 24:ia(ln)}}function No(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&t)===t){l=void 0;var m=s.create,y=s.inst;l=m(),y.destroy=l}s=s.next}while(s!==d)}}catch(R){zt(i,i.return,R)}}function Xa(t,i,s){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&t)===t){var y=l.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,d=i;var B=s,te=R;try{te()}catch(he){zt(d,B,he)}}}l=l.next}while(l!==m)}}catch(he){zt(i,i.return,he)}}function h0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{ig(i,s)}catch(l){zt(t,t.return,l)}}}function p0(t,i,s){s.props=Cr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function Oo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(d){zt(t,i,d)}}function Bi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){zt(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){zt(t,i,d)}else s.current=null}function m0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){zt(t,t.return,d)}}function $f(t,i,s){try{var l=t.stateNode;dM(l,t.type,s,i),l[Sn]=i}catch(d){zt(t,t.return,d)}}function g0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Qi));else if(l!==4&&(l===27&&$a(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Jf(t,i,s),t=t.sibling;t!==null;)Jf(t,i,s),t=t.sibling}function cu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&$a(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(cu(t,i,s),t=t.sibling;t!==null;)cu(t,i,s),t=t.sibling}function v0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);wn(i,l,s),i[on]=t,i[Sn]=s}catch(m){zt(t,t.return,m)}}var la=!1,fn=!1,ed=!1,_0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function qy(t,i){if(t=t.containerInfo,yd=Lu,t=Dm(t),Wc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var y=0,R=-1,B=-1,te=0,he=0,_e=t,ae=null;t:for(;;){for(var le;_e!==s||d!==0&&_e.nodeType!==3||(R=y+d),_e!==m||l!==0&&_e.nodeType!==3||(B=y+l),_e.nodeType===3&&(y+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ae=_e,_e=le;for(;;){if(_e===t)break t;if(ae===s&&++te===d&&(R=y),ae===m&&++he===l&&(B=y),(le=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=le}s=R===-1||B===-1?null:{start:R,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Md={focusedElem:t,selectionRange:s},Lu=!1,_n=i;_n!==null;)if(i=_n,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,_n=t;else for(;_n!==null;){switch(i=_n,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)d=t[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ke=Cr(s.type,d);t=l.getSnapshotBeforeUpdate(ke,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Td(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,_n=t;break}_n=i.return}}function x0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ca(t,s),l&4&&No(5,s);break;case 1:if(ca(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){zt(s,s.return,y)}else{var d=Cr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(s,s.return,y)}}l&64&&h0(s),l&512&&Oo(s,s.return);break;case 3:if(ca(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ig(t,i)}catch(y){zt(s,s.return,y)}}break;case 27:i===null&&l&4&&v0(s);case 26:case 5:ca(t,s),i===null&&l&4&&m0(s),l&512&&Oo(s,s.return);break;case 12:ca(t,s);break;case 31:ca(t,s),l&4&&M0(t,s);break;case 13:ca(t,s),l&4&&E0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=eM.bind(null,s),SM(t,s))));break;case 22:if(l=s.memoizedState!==null||la,!l){i=i!==null&&i.memoizedState!==null||fn,d=la;var m=fn;la=l,(fn=i)&&!m?fa(t,s,(s.subtreeFlags&8772)!==0):ca(t,s),la=d,fn=m}break;case 30:break;default:ca(t,s)}}function S0(t){var i=t.alternate;i!==null&&(t.alternate=null,S0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&oo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Gn=!1;function ua(t,i,s){for(s=s.child;s!==null;)y0(t,i,s),s=s.sibling}function y0(t,i,s){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(be,s)}catch{}switch(s.tag){case 26:fn||Bi(s,i),ua(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:fn||Bi(s,i);var l=$t,d=Gn;$a(s.type)&&($t=s.stateNode,Gn=!1),ua(t,i,s),ko(s.stateNode),$t=l,Gn=d;break;case 5:fn||Bi(s,i);case 6:if(l=$t,d=Gn,$t=null,ua(t,i,s),$t=l,Gn=d,$t!==null)if(Gn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(m){zt(s,i,m)}else try{$t.removeChild(s.stateNode)}catch(m){zt(s,i,m)}break;case 18:$t!==null&&(Gn?(t=$t,hv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),As(t)):hv($t,s.stateNode));break;case 4:l=$t,d=Gn,$t=s.stateNode.containerInfo,Gn=!0,ua(t,i,s),$t=l,Gn=d;break;case 0:case 11:case 14:case 15:Xa(2,s,i),fn||Xa(4,s,i),ua(t,i,s);break;case 1:fn||(Bi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&p0(s,i,l)),ua(t,i,s);break;case 21:ua(t,i,s);break;case 22:fn=(l=fn)||s.memoizedState!==null,ua(t,i,s),fn=l;break;default:ua(t,i,s)}}function M0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{As(t)}catch(s){zt(i,i.return,s)}}}function E0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{As(t)}catch(s){zt(i,i.return,s)}}function Wy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new _0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new _0),i;default:throw Error(a(435,t.tag))}}function fu(t,i){var s=Wy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var d=tM.bind(null,t,l);l.then(d,d)}})}function kn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],m=t,y=i,R=y;e:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){$t=R.stateNode,Gn=!1;break e}break;case 5:$t=R.stateNode,Gn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if($t===null)throw Error(a(160));y0(m,y,d),$t=null,Gn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)b0(i,t),i=i.sibling}var Ti=null;function b0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(i,t),Xn(t),l&4&&(Xa(3,t,t.return),No(3,t),Xa(5,t,t.return));break;case 1:kn(i,t),Xn(t),l&512&&(fn||s===null||Bi(s,s.return)),l&64&&la&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Ti;if(kn(i,t),Xn(t),l&512&&(fn||s===null||Bi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[hr]||m[on]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),wn(m,l,s),m[on]=t,C(m),l=m;break e;case"link":var y=bv("link","href",d).get(l+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(m=y[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break t}}m=d.createElement(l),wn(m,l,s),d.head.appendChild(m);break;case"meta":if(y=bv("meta","content",d).get(l+(s.content||""))){for(R=0;R<y.length;R++)if(m=y[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break t}}m=d.createElement(l),wn(m,l,s),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[on]=t,C(m),l=m}t.stateNode=l}else Tv(d,t.type,t.stateNode);else t.stateNode=Ev(d,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?Tv(d,t.type,t.stateNode):Ev(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$f(t,t.memoizedProps,s.memoizedProps)}break;case 27:kn(i,t),Xn(t),l&512&&(fn||s===null||Bi(s,s.return)),s!==null&&l&4&&$f(t,t.memoizedProps,s.memoizedProps);break;case 5:if(kn(i,t),Xn(t),l&512&&(fn||s===null||Bi(s,s.return)),t.flags&32){d=t.stateNode;try{pn(d,"")}catch(ke){zt(t,t.return,ke)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,$f(t,d,s!==null?s.memoizedProps:d)),l&1024&&(ed=!0);break;case 6:if(kn(i,t),Xn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ke){zt(t,t.return,ke)}}break;case 3:if(Ru=null,d=Ti,Ti=Tu(i.containerInfo),kn(i,t),Ti=d,Xn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{As(i.containerInfo)}catch(ke){zt(t,t.return,ke)}ed&&(ed=!1,T0(t));break;case 4:l=Ti,Ti=Tu(t.stateNode.containerInfo),kn(i,t),Xn(t),Ti=l;break;case 12:kn(i,t),Xn(t);break;case 31:kn(i,t),Xn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,fu(t,l)));break;case 13:kn(i,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(hu=b()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,fu(t,l)));break;case 22:d=t.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,te=la,he=fn;if(la=te||d,fn=he||B,kn(i,t),fn=he,la=te,Xn(t),l&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||B||la||fn||wr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(m=B.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=B.stateNode;var _e=B.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){zt(B,B.return,ke)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=d?"":B.memoizedProps}catch(ke){zt(B,B.return,ke)}}}else if(i.tag===18){if(s===null){B=i;try{var le=B.stateNode;d?pv(le,!0):pv(B.stateNode,!1)}catch(ke){zt(B,B.return,ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,fu(t,s))));break;case 19:kn(i,t),Xn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,fu(t,l)));break;case 30:break;case 21:break;default:kn(i,t),Xn(t)}}function Xn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(g0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=Qf(t);cu(t,m,d);break;case 5:var y=s.stateNode;s.flags&32&&(pn(y,""),s.flags&=-33);var R=Qf(t);cu(t,R,y);break;case 3:case 4:var B=s.stateNode.containerInfo,te=Qf(t);Jf(t,te,B);break;default:throw Error(a(161))}}catch(he){zt(t,t.return,he)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;T0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ca(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)x0(t,i.alternate,i),i=i.sibling}function wr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Xa(4,i,i.return),wr(i);break;case 1:Bi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&p0(i,i.return,s),wr(i);break;case 27:ko(i.stateNode);case 26:case 5:Bi(i,i.return),wr(i);break;case 22:i.memoizedState===null&&wr(i);break;case 30:wr(i);break;default:wr(i)}t=t.sibling}}function fa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:fa(d,m,s),No(4,m);break;case 1:if(fa(d,m,s),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(te){zt(l,l.return,te)}if(l=m,d=l.updateQueue,d!==null){var R=l.stateNode;try{var B=d.shared.hiddenCallbacks;if(B!==null)for(d.shared.hiddenCallbacks=null,d=0;d<B.length;d++)ng(B[d],R)}catch(te){zt(l,l.return,te)}}s&&y&64&&h0(m),Oo(m,m.return);break;case 27:v0(m);case 26:case 5:fa(d,m,s),s&&l===null&&y&4&&m0(m),Oo(m,m.return);break;case 12:fa(d,m,s);break;case 31:fa(d,m,s),s&&y&4&&M0(d,m);break;case 13:fa(d,m,s),s&&y&4&&E0(d,m);break;case 22:m.memoizedState===null&&fa(d,m,s),Oo(m,m.return);break;case 30:break;default:fa(d,m,s)}i=i.sibling}}function td(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&So(s))}function nd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&So(t))}function Ai(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)A0(t,i,s,l),i=i.sibling}function A0(t,i,s,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(t,i,s,l),d&2048&&No(9,i);break;case 1:Ai(t,i,s,l);break;case 3:Ai(t,i,s,l),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&So(t)));break;case 12:if(d&2048){Ai(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,R=m.onPostCommit;typeof R=="function"&&R(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(i,i.return,B)}}else Ai(t,i,s,l);break;case 31:Ai(t,i,s,l);break;case 13:Ai(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?Ai(t,i,s,l):Po(t,i):m._visibility&2?Ai(t,i,s,l):(m._visibility|=2,ms(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),d&2048&&td(y,i);break;case 24:Ai(t,i,s,l),d&2048&&nd(i.alternate,i);break;default:Ai(t,i,s,l)}}function ms(t,i,s,l,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,R=s,B=l,te=y.flags;switch(y.tag){case 0:case 11:case 15:ms(m,y,R,B,d),No(8,y);break;case 23:break;case 22:var he=y.stateNode;y.memoizedState!==null?he._visibility&2?ms(m,y,R,B,d):Po(m,y):(he._visibility|=2,ms(m,y,R,B,d)),d&&te&2048&&td(y.alternate,y);break;case 24:ms(m,y,R,B,d),d&&te&2048&&nd(y.alternate,y);break;default:ms(m,y,R,B,d)}i=i.sibling}}function Po(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,d=l.flags;switch(l.tag){case 22:Po(s,l),d&2048&&td(l.alternate,l);break;case 24:Po(s,l),d&2048&&nd(l.alternate,l);break;default:Po(s,l)}i=i.sibling}}var Fo=8192;function gs(t,i,s){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)R0(t,i,s),t=t.sibling}function R0(t,i,s){switch(t.tag){case 26:gs(t,i,s),t.flags&Fo&&t.memoizedState!==null&&UM(s,Ti,t.memoizedState,t.memoizedProps);break;case 5:gs(t,i,s);break;case 3:case 4:var l=Ti;Ti=Tu(t.stateNode.containerInfo),gs(t,i,s),Ti=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Fo,Fo=16777216,gs(t,i,s),Fo=l):gs(t,i,s));break;default:gs(t,i,s)}}function C0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Io(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];_n=l,D0(l,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(t),t=t.sibling}function w0(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,du(t)):Io(t);break;default:Io(t)}}function du(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];_n=l,D0(l,t)}C0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Xa(8,i,i.return),du(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,du(i));break;default:du(i)}t=t.sibling}}function D0(t,i){for(;_n!==null;){var s=_n;switch(s.tag){case 0:case 11:case 15:Xa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:So(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,_n=l;else e:for(s=t;_n!==null;){l=_n;var d=l.sibling,m=l.return;if(S0(l),l===s){_n=null;break e}if(d!==null){d.return=m,_n=d;break e}_n=m}}}var jy={getCacheForType:function(t){var i=Rn(ln),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Rn(ln).controller.signal}},Yy=typeof WeakMap=="function"?WeakMap:Map,Ut=0,qt=null,gt=null,xt=0,It=0,Jn=null,qa=!1,vs=!1,id=!1,da=0,nn=0,Wa=0,Dr=0,ad=0,ei=0,_s=0,zo=null,qn=null,rd=!1,hu=0,L0=0,pu=1/0,mu=null,ja=null,mn=0,Ya=null,xs=null,ha=0,sd=0,od=null,U0=null,Bo=0,ld=null;function ti(){return(Ut&2)!==0&&xt!==0?xt&-xt:I.T!==null?pd():ro()}function N0(){if(ei===0)if((xt&536870912)===0||yt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ei=t}else ei=536870912;return t=$n.current,t!==null&&(t.flags|=32),ei}function Wn(t,i,s){(t===qt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),Ka(t,xt,ei,!1)),Ln(t,s),((Ut&2)===0||t!==qt)&&(t===qt&&((Ut&2)===0&&(Dr|=s),nn===4&&Ka(t,xt,ei,!1)),Hi(t))}function O0(t,i,s){if((Ut&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ce(t,i),d=l?$y(t,i):cd(t,i,!0),m=l;do{if(d===0){vs&&!l&&Ka(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Ky(s)){d=cd(t,i,!1),m=!1;continue}if(d===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var R=t;d=zo;var B=R.current.memoizedState.isDehydrated;if(B&&(Ss(R,y).flags|=256),y=cd(R,y,!1),y!==2){if(id&&!B){R.errorRecoveryDisabledLanes|=m,Dr|=m,d=4;break e}m=qn,qn=d,m!==null&&(qn===null?qn=m:qn.push.apply(qn,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){Ss(t,0),Ka(t,i,0,!0);break}e:{switch(l=t,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ka(l,i,ei,!qa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=hu+300-b(),10<d)){if(Ka(l,i,ei,!qa),xe(l,0,!0)!==0)break e;ha=i,l.timeoutHandle=fv(P0.bind(null,l,s,qn,mu,rd,i,ei,Dr,_s,qa,m,"Throttled",-0,0),d);break e}P0(l,s,qn,mu,rd,i,ei,Dr,_s,qa,m,null,-0,0)}}break}while(!0);Hi(t)}function P0(t,i,s,l,d,m,y,R,B,te,he,_e,ae,le){if(t.timeoutHandle=-1,_e=i.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},R0(i,m,_e);var ke=(m&62914560)===m?hu-b():(m&4194048)===m?L0-b():0;if(ke=NM(_e,ke),ke!==null){ha=m,t.cancelPendingCommit=ke(k0.bind(null,t,i,m,s,l,d,y,R,B,he,_e,null,ae,le)),Ka(t,m,y,!te);return}}k0(t,i,m,s,l,d,y,R,B)}function Ky(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],m=d.getSnapshot;d=d.value;try{if(!Kn(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ka(t,i,s,l){i&=~ad,i&=~Dr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var d=i;0<d;){var m=31-Fe(d),y=1<<m;l[m]=-1,d&=~y}s!==0&&Rl(t,s,i)}function gu(){return(Ut&6)===0?(Ho(0),!1):!0}function ud(){if(gt!==null){if(It===0)var t=gt.return;else t=gt,na=yr=null,Tf(t),cs=null,Mo=0,t=gt;for(;t!==null;)d0(t.alternate,t),t=t.return;gt=null}}function Ss(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,mM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ha=0,ud(),qt=t,gt=s=ea(t.current,null),xt=i,It=0,Jn=null,qa=!1,vs=Ce(t,i),id=!1,_s=ei=ad=Dr=Wa=nn=0,qn=zo=null,rd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var d=31-Fe(l),m=1<<d;i|=t[d],l&=~m}return da=i,Il(),s}function F0(t,i){ut=null,I.H=Do,i===us||i===ql?(i=Qm(),It=3):i===hf?(i=Qm(),It=4):It=i===Vf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jn=i,gt===null&&(nn=1,ru(t,ui(i,t.current)))}function I0(){var t=$n.current;return t===null?!0:(xt&4194048)===xt?hi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===hi:!1}function z0(){var t=I.H;return I.H=Do,t===null?Do:t}function B0(){var t=I.A;return I.A=jy,t}function vu(){nn=4,qa||(xt&4194048)!==xt&&$n.current!==null||(vs=!0),(Wa&134217727)===0&&(Dr&134217727)===0||qt===null||Ka(qt,xt,ei,!1)}function cd(t,i,s){var l=Ut;Ut|=2;var d=z0(),m=B0();(qt!==t||xt!==i)&&(mu=null,Ss(t,i)),i=!1;var y=nn;e:do try{if(It!==0&&gt!==null){var R=gt,B=Jn;switch(It){case 8:ud(),y=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var te=It;if(It=0,Jn=null,ys(t,R,B,te),s&&vs){y=0;break e}break;default:te=It,It=0,Jn=null,ys(t,R,B,te)}}Zy(),y=nn;break}catch(he){F0(t,he)}while(!0);return i&&t.shellSuspendCounter++,na=yr=null,Ut=l,I.H=d,I.A=m,gt===null&&(qt=null,xt=0,Il()),y}function Zy(){for(;gt!==null;)H0(gt)}function $y(t,i){var s=Ut;Ut|=2;var l=z0(),d=B0();qt!==t||xt!==i?(mu=null,pu=b()+500,Ss(t,i)):vs=Ce(t,i);e:do try{if(It!==0&&gt!==null){i=gt;var m=Jn;t:switch(It){case 1:It=0,Jn=null,ys(t,i,m,1);break;case 2:case 9:if(Zm(m)){It=0,Jn=null,V0(i);break}i=function(){It!==2&&It!==9||qt!==t||(It=7),Hi(t)},m.then(i,i);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Zm(m)?(It=0,Jn=null,V0(i)):(It=0,Jn=null,ys(t,i,m,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var R=gt;if(y?Av(y):R.stateNode.complete){It=0,Jn=null;var B=R.sibling;if(B!==null)gt=B;else{var te=R.return;te!==null?(gt=te,_u(te)):gt=null}break t}}It=0,Jn=null,ys(t,i,m,5);break;case 6:It=0,Jn=null,ys(t,i,m,6);break;case 8:ud(),nn=6;break e;default:throw Error(a(462))}}Qy();break}catch(he){F0(t,he)}while(!0);return na=yr=null,I.H=l,I.A=d,Ut=s,gt!==null?0:(qt=null,xt=0,Il(),nn)}function Qy(){for(;gt!==null&&!Ye();)H0(gt)}function H0(t){var i=c0(t.alternate,t,da);t.memoizedProps=t.pendingProps,i===null?_u(t):gt=i}function V0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=a0(s,i,i.pendingProps,i.type,void 0,xt);break;case 11:i=a0(s,i,i.pendingProps,i.type.render,i.ref,xt);break;case 5:Tf(i);default:d0(s,i),i=gt=Bm(i,da),i=c0(s,i,da)}t.memoizedProps=t.pendingProps,i===null?_u(t):gt=i}function ys(t,i,s,l){na=yr=null,Tf(i),cs=null,Mo=0;var d=i.return;try{if(Hy(t,d,i,s,xt)){nn=1,ru(t,ui(s,t.current)),gt=null;return}}catch(m){if(d!==null)throw gt=d,m;nn=1,ru(t,ui(s,t.current)),gt=null;return}i.flags&32768?(yt||l===1?t=!0:vs||(xt&536870912)!==0?t=!1:(qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=$n.current,l!==null&&l.tag===13&&(l.flags|=16384))),G0(i,t)):_u(i)}function _u(t){var i=t;do{if((i.flags&32768)!==0){G0(i,qa);return}t=i.return;var s=ky(i.alternate,i,da);if(s!==null){gt=s;return}if(i=i.sibling,i!==null){gt=i;return}gt=i=t}while(i!==null);nn===0&&(nn=5)}function G0(t,i){do{var s=Xy(t.alternate,t);if(s!==null){s.flags&=32767,gt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){gt=t;return}gt=t=s}while(t!==null);nn=6,gt=null}function k0(t,i,s,l,d,m,y,R,B){t.cancelPendingCommit=null;do xu();while(mn!==0);if((Ut&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=$c,yi(t,s,m,y,R,B),t===qt&&(gt=qt=null,xt=0),xs=i,Ya=t,ha=s,sd=m,od=d,U0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nM(fe,function(){return Y0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,d=V.p,V.p=2,y=Ut,Ut|=4;try{qy(t,i,s)}finally{Ut=y,V.p=d,I.T=l}}mn=1,X0(),q0(),W0()}}function X0(){if(mn===1){mn=0;var t=Ya,i=xs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=V.p;V.p=2;var d=Ut;Ut|=4;try{b0(i,t);var m=Md,y=Dm(t.containerInfo),R=m.focusedElem,B=m.selectionRange;if(y!==R&&R&&R.ownerDocument&&wm(R.ownerDocument.documentElement,R)){if(B!==null&&Wc(R)){var te=B.start,he=B.end;if(he===void 0&&(he=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(he,R.value.length);else{var _e=R.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),ke=R.textContent.length,tt=Math.min(B.start,ke),Xt=B.end===void 0?tt:Math.min(B.end,ke);!le.extend&&tt>Xt&&(y=Xt,Xt=tt,tt=y);var Y=Cm(R,tt),k=Cm(R,Xt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var Q=_e.createRange();Q.setStart(Y.node,Y.offset),le.removeAllRanges(),tt>Xt?(le.addRange(Q),le.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),le.addRange(Q))}}}}for(_e=[],le=R;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ge=_e[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Lu=!!yd,Md=yd=null}finally{Ut=d,V.p=l,I.T=s}}t.current=i,mn=2}}function q0(){if(mn===2){mn=0;var t=Ya,i=xs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=V.p;V.p=2;var d=Ut;Ut|=4;try{x0(t,i.alternate,i)}finally{Ut=d,V.p=l,I.T=s}}mn=3}}function W0(){if(mn===4||mn===3){mn=0,P();var t=Ya,i=xs,s=ha,l=U0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,xs=Ya=null,j0(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(ja=null),Wr(s),i=i.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(be,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,d=V.p,V.p=2,I.T=null;try{for(var m=t.onRecoverableError,y=0;y<l.length;y++){var R=l[y];m(R.value,{componentStack:R.stack})}}finally{I.T=i,V.p=d}}(ha&3)!==0&&xu(),Hi(t),d=t.pendingLanes,(s&261930)!==0&&(d&42)!==0?t===ld?Bo++:(Bo=0,ld=t):Bo=0,Ho(0)}}function j0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,So(i)))}function xu(){return X0(),q0(),W0(),Y0()}function Y0(){if(mn!==5)return!1;var t=Ya,i=sd;sd=0;var s=Wr(ha),l=I.T,d=V.p;try{V.p=32>s?32:s,I.T=null,s=od,od=null;var m=Ya,y=ha;if(mn=0,xs=Ya=null,ha=0,(Ut&6)!==0)throw Error(a(331));var R=Ut;if(Ut|=4,w0(m.current),A0(m,m.current,y,s),Ut=R,Ho(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(be,m)}catch{}return!0}finally{V.p=d,I.T=l,j0(t,i)}}function K0(t,i,s){i=ui(s,i),i=Hf(t.stateNode,i,2),t=Va(t,i,2),t!==null&&(Ln(t,2),Hi(t))}function zt(t,i,s){if(t.tag===3)K0(t,t,s);else for(;i!==null;){if(i.tag===3){K0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){t=ui(s,t),s=Zg(2),l=Va(i,s,2),l!==null&&($g(s,l,i,t),Ln(l,2),Hi(l));break}}i=i.return}}function fd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Yy;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(id=!0,d.add(s),t=Jy.bind(null,t,i,s),i.then(t,t))}function Jy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,qt===t&&(xt&s)===s&&(nn===4||nn===3&&(xt&62914560)===xt&&300>b()-hu?(Ut&2)===0&&Ss(t,0):ad|=s,_s===xt&&(_s=0)),Hi(t)}function Z0(t,i){i===0&&(i=Pt()),t=_r(t,i),t!==null&&(Ln(t,i),Hi(t))}function eM(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Z0(t,s)}function tM(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Z0(t,s)}function nM(t,i){return Et(t,i)}var Su=null,Ms=null,dd=!1,yu=!1,hd=!1,Za=0;function Hi(t){t!==Ms&&t.next===null&&(Ms===null?Su=Ms=t:Ms=Ms.next=t),yu=!0,dd||(dd=!0,aM())}function Ho(t,i){if(!hd&&yu){hd=!0;do for(var s=!1,l=Su;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var y=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Fe(42|t)+1)-1,m&=d&~(y&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,ev(l,m))}else m=xt,m=xe(l,l===qt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ce(l,m)||(s=!0,ev(l,m));l=l.next}while(s);hd=!1}}function iM(){$0()}function $0(){yu=dd=!1;var t=0;Za!==0&&pM()&&(t=Za);for(var i=b(),s=null,l=Su;l!==null;){var d=l.next,m=Q0(l,i);m===0?(l.next=null,s===null?Su=d:s.next=d,d===null&&(Ms=s)):(s=l,(t!==0||(m&3)!==0)&&(yu=!0)),l=d}mn!==0&&mn!==5||Ho(t),Za!==0&&(Za=0)}function Q0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-Fe(m),R=1<<y,B=d[y];B===-1?((R&s)===0||(R&l)!==0)&&(d[y]=it(R,i)):B<=i&&(t.expiredLanes|=R),m&=~R}if(i=qt,s=xt,s=xe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(It===2||It===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Nt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Nt(l),Wr(s)){case 2:case 8:s=Se;break;case 32:s=fe;break;case 268435456:s=we;break;default:s=fe}return l=J0.bind(null,t),s=Et(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Nt(l),t.callbackPriority=2,t.callbackNode=null,2}function J0(t,i){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(xu()&&t.callbackNode!==s)return null;var l=xt;return l=xe(t,t===qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(O0(t,l,i),Q0(t,b()),t.callbackNode!=null&&t.callbackNode===s?J0.bind(null,t):null)}function ev(t,i){if(xu())return null;O0(t,i,!0)}function aM(){gM(function(){(Ut&6)!==0?Et(pe,iM):$0()})}function pd(){if(Za===0){var t=os;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Za=t}return Za}function tv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(""+t)}function nv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function rM(t,i,s,l,d){if(i==="submit"&&s&&s.stateNode===d){var m=tv((d[Sn]||null).action),y=l.submitter;y&&(i=(i=y[Sn]||null)?tv(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var R=new Nl("action","action",null,l,d);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Za!==0){var B=y?nv(d,y):new FormData(d);Of(s,{pending:!0,data:B,method:d.method,action:m},null,B)}}else typeof m=="function"&&(R.preventDefault(),B=y?nv(d,y):new FormData(d),Of(s,{pending:!0,data:B,method:d.method,action:m},m,B))},currentTarget:d}]})}}for(var md=0;md<Zc.length;md++){var gd=Zc[md],sM=gd.toLowerCase(),oM=gd[0].toUpperCase()+gd.slice(1);bi(sM,"on"+oM)}bi(Nm,"onAnimationEnd"),bi(Om,"onAnimationIteration"),bi(Pm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Ey,"onTransitionRun"),bi(by,"onTransitionStart"),bi(Ty,"onTransitionCancel"),bi(Fm,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function iv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var y=l.length-1;0<=y;y--){var R=l[y],B=R.instance,te=R.currentTarget;if(R=R.listener,B!==m&&d.isPropagationStopped())break e;m=R,d.currentTarget=te;try{m(d)}catch(he){Fl(he)}d.currentTarget=null,m=B}else for(y=0;y<l.length;y++){if(R=l[y],B=R.instance,te=R.currentTarget,R=R.listener,B!==m&&d.isPropagationStopped())break e;m=R,d.currentTarget=te;try{m(d)}catch(he){Fl(he)}d.currentTarget=null,m=B}}}}function vt(t,i){var s=i[jr];s===void 0&&(s=i[jr]=new Set);var l=t+"__bubble";s.has(l)||(av(i,t,2,!1),s.add(l))}function vd(t,i,s){var l=0;i&&(l|=4),av(s,t,l,i)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function _d(t){if(!t[Mu]){t[Mu]=!0,W.forEach(function(s){s!=="selectionchange"&&(lM.has(s)||vd(s,!1,t),vd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Mu]||(i[Mu]=!0,vd("selectionchange",!1,i))}}function av(t,i,s,l){switch(Nv(i)){case 2:var d=FM;break;case 8:d=IM;break;default:d=Nd}s=d.bind(null,i,s,t),d=void 0,!Ic||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function xd(t,i,s,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var R=l.stateNode.containerInfo;if(R===d)break;if(y===4)for(y=l.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;R!==null;){if(y=La(R),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){l=m=y;continue e}R=R.parentNode}}l=l.return}um(function(){var te=m,he=Pc(s),_e=[];e:{var ae=Im.get(t);if(ae!==void 0){var le=Nl,ke=t;switch(t){case"keypress":if(Ll(s)===0)break e;case"keydown":case"keyup":le=ty;break;case"focusin":ke="focus",le=Vc;break;case"focusout":ke="blur",le=Vc;break;case"beforeblur":case"afterblur":le=Vc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=kS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=ay;break;case Nm:case Om:case Pm:le=WS;break;case Fm:le=sy;break;case"scroll":case"scrollend":le=VS;break;case"wheel":le=ly;break;case"copy":case"cut":case"paste":le=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=pm;break;case"toggle":case"beforetoggle":le=cy}var tt=(i&4)!==0,Xt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var k=te,Q;k!==null;){var ge=k;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||Y===null||(ge=lo(k,Y),ge!=null&&tt.push(Go(k,ge,Q))),Xt)break;k=k.return}0<tt.length&&(ae=new le(ae,ke,null,s,he),_e.push({event:ae,listeners:tt}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&s!==Oc&&(ke=s.relatedTarget||s.fromElement)&&(La(ke)||ke[Mi]))break e;if((le||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(ke=s.relatedTarget||s.toElement,le=te,ke=ke?La(ke):null,ke!==null&&(Xt=u(ke),tt=ke.tag,ke!==Xt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=te),le!==ke)){if(tt=dm,ge="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=pm,ge="onPointerLeave",Y="onPointerEnter",k="pointer"),Xt=le==null?ae:pr(le),Q=ke==null?ae:pr(ke),ae=new tt(ge,k+"leave",le,s,he),ae.target=Xt,ae.relatedTarget=Q,ge=null,La(he)===te&&(tt=new tt(Y,k+"enter",ke,s,he),tt.target=Q,tt.relatedTarget=Xt,ge=tt),Xt=ge,le&&ke)t:{for(tt=uM,Y=le,k=ke,Q=0,ge=Y;ge;ge=tt(ge))Q++;ge=0;for(var Qe=k;Qe;Qe=tt(Qe))ge++;for(;0<Q-ge;)Y=tt(Y),Q--;for(;0<ge-Q;)k=tt(k),ge--;for(;Q--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;le!==null&&rv(_e,ae,le,tt,!1),ke!==null&&Xt!==null&&rv(_e,Xt,ke,tt,!0)}}e:{if(ae=te?pr(te):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var At=Mm;else if(Sm(ae))if(Em)At=Sy;else{At=_y;var Ke=vy}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Ei(te.elementType)&&(At=Mm):At=xy;if(At&&(At=At(t,te))){ym(_e,At,s,he);break e}Ke&&Ke(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&Mn(ae,"number",ae.value)}switch(Ke=te?pr(te):window,t){case"focusin":(Sm(Ke)||Ke.contentEditable==="true")&&(Jr=Ke,jc=te,vo=null);break;case"focusout":vo=jc=Jr=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Lm(_e,s,he);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Lm(_e,s,he)}var ft;if(kc)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Qr?_m(t,s)&&(St="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(St="onCompositionStart");St&&(mm&&s.locale!=="ko"&&(Qr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Qr&&(ft=cm()):(Oa=he,zc="value"in Oa?Oa.value:Oa.textContent,Qr=!0)),Ke=Eu(te,St),0<Ke.length&&(St=new hm(St,t,null,s,he),_e.push({event:St,listeners:Ke}),ft?St.data=ft:(ft=xm(s),ft!==null&&(St.data=ft)))),(ft=dy?hy(t,s):py(t,s))&&(St=Eu(te,"onBeforeInput"),0<St.length&&(Ke=new hm("onBeforeInput","beforeinput",null,s,he),_e.push({event:Ke,listeners:St}),Ke.data=ft)),rM(_e,t,te,s,he)}iv(_e,i)})}function Go(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Eu(t,i){for(var s=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=lo(t,s),d!=null&&l.unshift(Go(t,d,m)),d=lo(t,i),d!=null&&l.push(Go(t,d,m))),t.tag===3)return l;t=t.return}return[]}function uM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rv(t,i,s,l,d){for(var m=i._reactName,y=[];s!==null&&s!==l;){var R=s,B=R.alternate,te=R.stateNode;if(R=R.tag,B!==null&&B===l)break;R!==5&&R!==26&&R!==27||te===null||(B=te,d?(te=lo(s,m),te!=null&&y.unshift(Go(s,te,B))):d||(te=lo(s,m),te!=null&&y.push(Go(s,te,B)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var cM=/\r\n?/g,fM=/\u0000|\uFFFD/g;function sv(t){return(typeof t=="string"?t:""+t).replace(cM,`
`).replace(fM,"")}function ov(t,i){return i=sv(i),sv(t)===i}function kt(t,i,s,l,d,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||pn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&pn(t,""+l);break;case"className":Je(t,"class",l);break;case"tabIndex":Je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,s,l);break;case"style":Kr(t,l,m);break;case"data":if(i!=="object"){Je(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&kt(t,i,"name",d.name,d,null),kt(t,i,"formEncType",d.formEncType,d,null),kt(t,i,"formMethod",d.formMethod,d,null),kt(t,i,"formTarget",d.formTarget,d,null)):(kt(t,i,"encType",d.encType,d,null),kt(t,i,"method",d.method,d,null),kt(t,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),We(t,"popover",l);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":We(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=BS.get(s)||s,We(t,s,l))}}function Sd(t,i,s,l,d,m){switch(s){case"style":Kr(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?pn(t,l):(typeof l=="number"||typeof l=="bigint")&&pn(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=t[Sn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,d);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):We(t,s,l)}}}function wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var y=s[m];if(y!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:kt(t,i,m,y,s,null)}}d&&kt(t,i,"srcSet",s.srcSet,s,null),l&&kt(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var R=m=y=d=null,B=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var he=s[l];if(he!=null)switch(l){case"name":d=he;break;case"type":y=he;break;case"checked":B=he;break;case"defaultChecked":te=he;break;case"value":m=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,i));break;default:kt(t,i,l,he,s,null)}}$i(t,m,R,B,te,y,d,!1);return;case"select":vt("invalid",t),l=y=m=null;for(d in s)if(s.hasOwnProperty(d)&&(R=s[d],R!=null))switch(d){case"value":m=R;break;case"defaultValue":y=R;break;case"multiple":l=R;default:kt(t,i,d,R,s,null)}i=m,s=y,t.multiple=!!l,i!=null?oi(t,!!l,i,!1):s!=null&&oi(t,!!l,s,!0);return;case"textarea":vt("invalid",t),m=d=l=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":l=R;break;case"defaultValue":d=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:kt(t,i,y,R,s,null)}En(t,l,d,m);return;case"option":for(B in s)s.hasOwnProperty(B)&&(l=s[B],l!=null)&&(B==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":kt(t,i,B,l,s,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<Vo.length;l++)vt(Vo[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:kt(t,i,te,l,s,null)}return;default:if(Ei(i)){for(he in s)s.hasOwnProperty(he)&&(l=s[he],l!==void 0&&Sd(t,i,he,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&kt(t,i,R,l,s,null))}function dM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,R=null,B=null,te=null,he=null;for(le in s){var _e=s[le];if(s.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=_e;default:l.hasOwnProperty(le)||kt(t,i,le,null,l,_e)}}for(var ae in l){var le=l[ae];if(_e=s[ae],l.hasOwnProperty(ae)&&(le!=null||_e!=null))switch(ae){case"type":m=le;break;case"name":d=le;break;case"checked":te=le;break;case"defaultChecked":he=le;break;case"value":y=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==_e&&kt(t,i,ae,le,l,_e)}}yn(t,y,R,B,te,he,m,d);return;case"select":le=y=R=ae=null;for(m in s)if(B=s[m],s.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":le=B;default:l.hasOwnProperty(m)||kt(t,i,m,null,l,B)}for(d in l)if(m=l[d],B=s[d],l.hasOwnProperty(d)&&(m!=null||B!=null))switch(d){case"value":ae=m;break;case"defaultValue":R=m;break;case"multiple":y=m;default:m!==B&&kt(t,i,d,m,l,B)}i=R,s=y,l=le,ae!=null?oi(t,!!s,ae,!1):!!l!=!!s&&(i!=null?oi(t,!!s,i,!0):oi(t,!!s,s?[]:"",!1));return;case"textarea":le=ae=null;for(R in s)if(d=s[R],s.hasOwnProperty(R)&&d!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:kt(t,i,R,null,l,d)}for(y in l)if(d=l[y],m=s[y],l.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":ae=d;break;case"defaultValue":le=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&kt(t,i,y,d,l,m)}Ft(t,ae,le);return;case"option":for(var ke in s)ae=s[ke],s.hasOwnProperty(ke)&&ae!=null&&!l.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:kt(t,i,ke,null,l,ae));for(B in l)ae=l[B],le=s[B],l.hasOwnProperty(B)&&ae!==le&&(ae!=null||le!=null)&&(B==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":kt(t,i,B,ae,l,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)ae=s[tt],s.hasOwnProperty(tt)&&ae!=null&&!l.hasOwnProperty(tt)&&kt(t,i,tt,null,l,ae);for(te in l)if(ae=l[te],le=s[te],l.hasOwnProperty(te)&&ae!==le&&(ae!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:kt(t,i,te,ae,l,le)}return;default:if(Ei(i)){for(var Xt in s)ae=s[Xt],s.hasOwnProperty(Xt)&&ae!==void 0&&!l.hasOwnProperty(Xt)&&Sd(t,i,Xt,void 0,l,ae);for(he in l)ae=l[he],le=s[he],!l.hasOwnProperty(he)||ae===le||ae===void 0&&le===void 0||Sd(t,i,he,ae,l,le);return}}for(var Y in s)ae=s[Y],s.hasOwnProperty(Y)&&ae!=null&&!l.hasOwnProperty(Y)&&kt(t,i,Y,null,l,ae);for(_e in l)ae=l[_e],le=s[_e],!l.hasOwnProperty(_e)||ae===le||ae==null&&le==null||kt(t,i,_e,ae,l,le)}function lv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],m=d.transferSize,y=d.initiatorType,R=d.duration;if(m&&R&&lv(y)){for(y=0,R=d.responseEnd,l+=1;l<s.length;l++){var B=s[l],te=B.startTime;if(te>R)break;var he=B.transferSize,_e=B.initiatorType;he&&lv(_e)&&(B=B.responseEnd,y+=he*(B<R?1:(R-te)/(B-te)))}if(--l,i+=8*(m+y)/(d.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yd=null,Md=null;function bu(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ed(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bd=null;function pM(){var t=window.event;return t&&t.type==="popstate"?t===bd?!1:(bd=t,!0):(bd=null,!1)}var fv=typeof setTimeout=="function"?setTimeout:void 0,mM=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,gM=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(t){return dv.resolve(null).then(t).catch(vM)}:fv;function vM(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function hv(t,i){var s=i,l=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(d),As(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ko(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ko(s);for(var m=s.firstChild;m;){var y=m.nextSibling,R=m.nodeName;m[hr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=y}}else s==="body"&&ko(t.ownerDocument.body);s=d}while(s);As(i)}function pv(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Td(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Td(s),oo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function _M(t,i,s,l){for(;t.nodeType===1;){var d=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[hr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function xM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=pi(t.nextSibling),t===null))return null;return t}function mv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=pi(t.nextSibling),t===null))return null;return t}function Ad(t){return t.data==="$?"||t.data==="$~"}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function pi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Cd=null;function gv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return pi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function vv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function _v(t,i,s){switch(i=bu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ko(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);oo(t)}var mi=new Map,xv=new Set;function Tu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=V.d;V.d={f:yM,r:MM,D:EM,C:bM,L:TM,m:AM,X:CM,S:RM,M:wM};function yM(){var t=pa.f(),i=gu();return t||i}function MM(t){var i=Ua(t);i!==null&&i.tag===5&&i.type==="form"?Fg(i):pa.r(t)}var Es=typeof document>"u"?null:document;function Sv(t,i,s){var l=Es;if(l&&typeof i=="string"&&i){var d=rt(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),xv.has(d)||(xv.add(d),t={rel:t,crossOrigin:s,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),wn(i,"link",t),C(i),l.head.appendChild(i)))}}function EM(t){pa.D(t),Sv("dns-prefetch",t,null)}function bM(t,i){pa.C(t,i),Sv("preconnect",t,i)}function TM(t,i,s){pa.L(t,i,s);var l=Es;if(l&&t&&i){var d='link[rel="preload"][as="'+rt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+rt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+rt(s.imageSizes)+'"]')):d+='[href="'+rt(t)+'"]';var m=d;switch(i){case"style":m=bs(t);break;case"script":m=Ts(t)}mi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),mi.set(m,t),l.querySelector(d)!==null||i==="style"&&l.querySelector(Xo(m))||i==="script"&&l.querySelector(qo(m))||(i=l.createElement("link"),wn(i,"link",t),C(i),l.head.appendChild(i)))}}function AM(t,i){pa.m(t,i);var s=Es;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(t)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ts(t)}if(!mi.has(m)&&(t=g({rel:"modulepreload",href:t},i),mi.set(m,t),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qo(m)))return}l=s.createElement("link"),wn(l,"link",t),C(l),s.head.appendChild(l)}}}function RM(t,i,s){pa.S(t,i,s);var l=Es;if(l&&t){var d=Na(l).hoistableStyles,m=bs(t);i=i||"default";var y=d.get(m);if(!y){var R={loading:0,preload:null};if(y=l.querySelector(Xo(m)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=mi.get(m))&&wd(t,s);var B=y=l.createElement("link");C(B),wn(B,"link",t),B._p=new Promise(function(te,he){B.onload=te,B.onerror=he}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Au(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:R},d.set(m,y)}}}function CM(t,i){pa.X(t,i);var s=Es;if(s&&t){var l=Na(s).hoistableScripts,d=Ts(t),m=l.get(d);m||(m=s.querySelector(qo(d)),m||(t=g({src:t,async:!0},i),(i=mi.get(d))&&Dd(t,i),m=s.createElement("script"),C(m),wn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function wM(t,i){pa.M(t,i);var s=Es;if(s&&t){var l=Na(s).hoistableScripts,d=Ts(t),m=l.get(d);m||(m=s.querySelector(qo(d)),m||(t=g({src:t,async:!0,type:"module"},i),(i=mi.get(d))&&Dd(t,i),m=s.createElement("script"),C(m),wn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function yv(t,i,s,l){var d=(d=re.current)?Tu(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=bs(s.href),s=Na(d).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=bs(s.href);var m=Na(d).hoistableStyles,y=m.get(t);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=d.querySelector(Xo(t)))&&!m._p&&(y.instance=m,y.state.loading=5),mi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},mi.set(t,s),m||DM(d,t,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ts(s),s=Na(d).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function bs(t){return'href="'+rt(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function Mv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function DM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),C(i),t.head.appendChild(i))}function Ts(t){return'[src="'+rt(t)+'"]'}function qo(t){return"script[async]"+t}function Ev(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+rt(s.href)+'"]');if(l)return i.instance=l,C(l),l;var d=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),C(l),wn(l,"style",d),Au(l,s.precedence,t),i.instance=l;case"stylesheet":d=bs(s.href);var m=t.querySelector(Xo(d));if(m)return i.state.loading|=4,i.instance=m,C(m),m;l=Mv(s),(d=mi.get(d))&&wd(l,d),m=(t.ownerDocument||t).createElement("link"),C(m);var y=m;return y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),wn(m,"link",l),i.state.loading|=4,Au(m,s.precedence,t),i.instance=m;case"script":return m=Ts(s.src),(d=t.querySelector(qo(m)))?(i.instance=d,C(d),d):(l=s,(d=mi.get(m))&&(l=g({},s),Dd(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),C(d),wn(d,"link",l),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Au(l,s.precedence,t));return i.instance}function Au(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,y=0;y<l.length;y++){var R=l[y];if(R.dataset.precedence===i)m=R;else if(m!==d)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function wd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Dd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ru=null;function bv(t,i,s){if(Ru===null){var l=new Map,d=Ru=new Map;d.set(s,l)}else d=Ru,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),d=0;d<s.length;d++){var m=s[d];if(!(m[hr]||m[on]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var R=l.get(y);R?R.push(m):l.set(y,[m])}}return l}function Tv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function LM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Av(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function UM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=bs(l.href),m=i.querySelector(Xo(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Cu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,C(m);return}m=i.ownerDocument||i,l=Mv(l),(d=mi.get(d))&&wd(l,d),m=m.createElement("link"),C(m);var y=m;y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),wn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Cu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ld=0;function NM(t,i){return t.stylesheets&&t.count===0&&Du(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Du(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Ld===0&&(Ld=62500*hM());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Du(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Ld?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Du(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wu=null;function Du(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wu=new Map,i.forEach(OM,t),wu=null,Cu.call(t))}function OM(t,i){if(!(i.state.loading&4)){var s=wu.get(t);if(s)var l=s.get(null);else{s=new Map,wu.set(t,s);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}d=i.instance,y=d.getAttribute("data-precedence"),m=s.get(y)||l,m===l&&s.set(null,d),s.set(y,d),this.count++,l=Cu.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var Wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function PM(t,i,s,l,d,m,y,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Rv(t,i,s,l,d,m,y,R,B,te,he,_e){return t=new PM(t,i,s,y,B,te,he,_e,R),i=1,m===!0&&(i|=24),m=Zn(3,null,null,i),t.current=m,m.stateNode=t,i=cf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},pf(m),t}function Cv(t){return t?(t=ns,t):ns}function wv(t,i,s,l,d,m){d=Cv(d),l.context===null?l.context=d:l.pendingContext=d,l=Ha(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Va(t,l,i),s!==null&&(Wn(s,t,i),bo(s,t,i))}function Dv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Ud(t,i){Dv(t,i),(t=t.alternate)&&Dv(t,i)}function Lv(t){if(t.tag===13||t.tag===31){var i=_r(t,67108864);i!==null&&Wn(i,t,67108864),Ud(t,67108864)}}function Uv(t){if(t.tag===13||t.tag===31){var i=ti();i=ao(i);var s=_r(t,i);s!==null&&Wn(s,t,i),Ud(t,i)}}var Lu=!0;function FM(t,i,s,l){var d=I.T;I.T=null;var m=V.p;try{V.p=2,Nd(t,i,s,l)}finally{V.p=m,I.T=d}}function IM(t,i,s,l){var d=I.T;I.T=null;var m=V.p;try{V.p=8,Nd(t,i,s,l)}finally{V.p=m,I.T=d}}function Nd(t,i,s,l){if(Lu){var d=Od(l);if(d===null)xd(t,i,l,Uu,s),Ov(t,l);else if(BM(d,t,i,s,l))l.stopPropagation();else if(Ov(t,l),i&4&&-1<zM.indexOf(t)){for(;d!==null;){var m=Ua(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Ee(m.pendingLanes);if(y!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var B=1<<31-Fe(y);R.entanglements[1]|=B,y&=~B}Hi(m),(Ut&6)===0&&(pu=b()+500,Ho(0))}}break;case 31:case 13:R=_r(m,2),R!==null&&Wn(R,m,2),gu(),Ud(m,2)}if(m=Od(l),m===null&&xd(t,i,l,Uu,s),m===d)break;d=m}d!==null&&l.stopPropagation()}else xd(t,i,l,null,s)}}function Od(t){return t=Pc(t),Pd(t)}var Uu=null;function Pd(t){if(Uu=null,t=La(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Uu=t,null}function Nv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pe:return 2;case Se:return 8;case fe:case Ze:return 32;case we:return 268435456;default:return 32}default:return 32}}var Fd=!1,Qa=null,Ja=null,er=null,jo=new Map,Yo=new Map,tr=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ov(t,i){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(i.pointerId)}}function Ko(t,i,s,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ua(i),i!==null&&Lv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function BM(t,i,s,l,d){switch(i){case"focusin":return Qa=Ko(Qa,t,i,s,l,d),!0;case"dragenter":return Ja=Ko(Ja,t,i,s,l,d),!0;case"mouseover":return er=Ko(er,t,i,s,l,d),!0;case"pointerover":var m=d.pointerId;return jo.set(m,Ko(jo.get(m)||null,t,i,s,l,d)),!0;case"gotpointercapture":return m=d.pointerId,Yo.set(m,Ko(Yo.get(m)||null,t,i,s,l,d)),!0}return!1}function Pv(t){var i=La(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,Fi(t.priority,function(){Uv(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,Fi(t.priority,function(){Uv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Od(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Oc=l,s.target.dispatchEvent(l),Oc=null}else return i=Ua(s),i!==null&&Lv(i),t.blockedOn=s,!1;i.shift()}return!0}function Fv(t,i,s){Nu(t)&&s.delete(i)}function HM(){Fd=!1,Qa!==null&&Nu(Qa)&&(Qa=null),Ja!==null&&Nu(Ja)&&(Ja=null),er!==null&&Nu(er)&&(er=null),jo.forEach(Fv),Yo.forEach(Fv)}function Ou(t,i){t.blockedOn===i&&(t.blockedOn=null,Fd||(Fd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,HM)))}var Pu=null;function Iv(t){Pu!==t&&(Pu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pu===t&&(Pu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],d=t[i+2];if(typeof l!="function"){if(Pd(l||s)===null)continue;break}var m=Ua(s);m!==null&&(t.splice(i,3),i-=3,Of(m,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function As(t){function i(B){return Ou(B,t)}Qa!==null&&Ou(Qa,t),Ja!==null&&Ou(Ja,t),er!==null&&Ou(er,t),jo.forEach(i),Yo.forEach(i);for(var s=0;s<tr.length;s++){var l=tr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<tr.length&&(s=tr[0],s.blockedOn===null);)Pv(s),s.blockedOn===null&&tr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],m=s[l+1],y=d[Sn]||null;if(typeof m=="function")y||Iv(s);else if(y){var R=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[Sn]||null)R=y.formAction;else if(Pd(d)!==null)continue}else R=y.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),Iv(s)}}}function zv(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function Id(t){this._internalRoot=t}Fu.prototype.render=Id.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ti();wv(s,l,t,i,null,null)},Fu.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;wv(t.current,2,null,t,null,null),gu(),i[Mi]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var i=ro();t={blockedOn:null,target:t,priority:i};for(var s=0;s<tr.length&&i!==0&&i<tr[s].priority;s++);tr.splice(s,0,t),s===0&&Pv(t)}};var Bv=e.version;if(Bv!=="19.2.3")throw Error(a(527,Bv,"19.2.3"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var VM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{be=Iu.inject(VM),Te=Iu}catch{}}return $o.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",d=Wg,m=jg,y=Yg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Rv(t,1,!1,null,null,s,l,null,d,m,y,zv),t[Mi]=i.current,_d(t),new Id(i)},$o.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,d="",m=Wg,y=jg,R=Yg,B=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),i=Rv(t,1,!0,i,s??null,l,d,B,m,y,R,zv),i.context=Cv(null),s=i.current,l=ti(),l=ao(l),d=Ha(l),d.callback=null,Va(s,d,l),s=l,i.current.lanes=s,Ln(i,s),Hi(i),t[Mi]=i.current,_d(t),new Fu(i)},$o.version="19.2.3",$o}var Kv;function $M(){if(Kv)return Hd.exports;Kv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Hd.exports=ZM(),Hd.exports}var QM=$M();const JM=xl(QM);var Xd,Zv;function eE(){if(Zv)return Xd;Zv=1;var r=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(u,c){if(u===c)return!0;if(u&&c&&typeof u=="object"&&typeof c=="object"){if(u.constructor!==c.constructor)return!1;var f,p,h;if(Array.isArray(u)){if(f=u.length,f!=c.length)return!1;for(p=f;p--!==0;)if(!o(u[p],c[p]))return!1;return!0}var v;if(e&&u instanceof Map&&c instanceof Map){if(u.size!==c.size)return!1;for(v=u.entries();!(p=v.next()).done;)if(!c.has(p.value[0]))return!1;for(v=u.entries();!(p=v.next()).done;)if(!o(p.value[1],c.get(p.value[0])))return!1;return!0}if(n&&u instanceof Set&&c instanceof Set){if(u.size!==c.size)return!1;for(v=u.entries();!(p=v.next()).done;)if(!c.has(p.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(c)){if(f=u.length,f!=c.length)return!1;for(p=f;p--!==0;)if(u[p]!==c[p])return!1;return!0}if(u.constructor===RegExp)return u.source===c.source&&u.flags===c.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof c.valueOf=="function")return u.valueOf()===c.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof c.toString=="function")return u.toString()===c.toString();if(h=Object.keys(u),f=h.length,f!==Object.keys(c).length)return!1;for(p=f;p--!==0;)if(!Object.prototype.hasOwnProperty.call(c,h[p]))return!1;if(r&&u instanceof Element)return!1;for(p=f;p--!==0;)if(!((h[p]==="_owner"||h[p]==="__v"||h[p]==="__o")&&u.$$typeof)&&!o(u[h[p]],c[h[p]]))return!1;return!0}return u!==u&&c!==c}return Xd=function(c,f){try{return o(c,f)}catch(p){if((p.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw p}},Xd}var tE=eE();const nE=xl(tE);var qd,$v;function iE(){if($v)return qd;$v=1;var r=function(e,n,a,o,u,c,f,p){if(!e){var h;if(n===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[a,o,u,c,f,p],g=0;h=new Error(n.replace(/%s/g,function(){return v[g++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return qd=r,qd}var aE=iE();const Qv=xl(aE);var Wd,Jv;function rE(){return Jv||(Jv=1,Wd=function(e,n,a,o){var u=a?a.call(o,e,n):void 0;if(u!==void 0)return!!u;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var c=Object.keys(e),f=Object.keys(n);if(c.length!==f.length)return!1;for(var p=Object.prototype.hasOwnProperty.bind(n),h=0;h<c.length;h++){var v=c[h];if(!p(v))return!1;var g=e[v],_=n[v];if(u=a?a.call(o,g,_,v):void 0,u===!1||u===void 0&&g!==_)return!1}return!0}),Wd}var sE=rE();const oE=xl(sE);var bx=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(bx||{}),jd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},e_=Object.values(bx),Hp={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},lE=Object.entries(Hp).reduce((r,[e,n])=>(r[n]=e,r),{}),Ui="data-rh",ks={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Xs=(r,e)=>{for(let n=r.length-1;n>=0;n-=1){const a=r[n];if(Object.prototype.hasOwnProperty.call(a,e))return a[e]}return null},uE=r=>{let e=Xs(r,"title");const n=Xs(r,ks.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const a=Xs(r,ks.DEFAULT_TITLE);return e||a||void 0},cE=r=>Xs(r,ks.ON_CHANGE_CLIENT_STATE)||(()=>{}),Yd=(r,e)=>e.filter(n=>typeof n[r]<"u").map(n=>n[r]).reduce((n,a)=>({...n,...a}),{}),fE=(r,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,a)=>{if(!n.length){const o=Object.keys(a);for(let u=0;u<o.length;u+=1){const f=o[u].toLowerCase();if(r.indexOf(f)!==-1&&a[f])return n.concat(a)}}return n},[]),dE=r=>console&&typeof console.warn=="function"&&console.warn(r),Qo=(r,e,n)=>{const a={};return n.filter(o=>Array.isArray(o[r])?!0:(typeof o[r]<"u"&&dE(`Helmet: ${r} should be of type "Array". Instead found type "${typeof o[r]}"`),!1)).map(o=>o[r]).reverse().reduce((o,u)=>{const c={};u.filter(p=>{let h;const v=Object.keys(p);for(let _=0;_<v.length;_+=1){const S=v[_],E=S.toLowerCase();e.indexOf(E)!==-1&&!(h==="rel"&&p[h].toLowerCase()==="canonical")&&!(E==="rel"&&p[E].toLowerCase()==="stylesheet")&&(h=E),e.indexOf(S)!==-1&&(S==="innerHTML"||S==="cssText"||S==="itemprop")&&(h=S)}if(!h||!p[h])return!1;const g=p[h].toLowerCase();return a[h]||(a[h]={}),c[h]||(c[h]={}),a[h][g]?!1:(c[h][g]=!0,!0)}).reverse().forEach(p=>o.push(p));const f=Object.keys(c);for(let p=0;p<f.length;p+=1){const h=f[p],v={...a[h],...c[h]};a[h]=v}return o},[]).reverse()},hE=(r,e)=>{if(Array.isArray(r)&&r.length){for(let n=0;n<r.length;n+=1)if(r[n][e])return!0}return!1},pE=r=>({baseTag:fE(["href"],r),bodyAttributes:Yd("bodyAttributes",r),defer:Xs(r,ks.DEFER),encode:Xs(r,ks.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Yd("htmlAttributes",r),linkTags:Qo("link",["rel","href"],r),metaTags:Qo("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Qo("noscript",["innerHTML"],r),onChangeClientState:cE(r),scriptTags:Qo("script",["src","innerHTML"],r),styleTags:Qo("style",["cssText"],r),title:uE(r),titleAttributes:Yd("titleAttributes",r),prioritizeSeoTags:hE(r,ks.PRIORITIZE_SEO_TAGS)}),Tx=r=>Array.isArray(r)?r.join(""):r,mE=(r,e)=>{const n=Object.keys(r);for(let a=0;a<n.length;a+=1)if(e[n[a]]&&e[n[a]].includes(r[n[a]]))return!0;return!1},Kd=(r,e)=>Array.isArray(r)?r.reduce((n,a)=>(mE(a,e)?n.priority.push(a):n.default.push(a),n),{priority:[],default:[]}):{default:r,priority:[]},t_=(r,e)=>({...r,[e]:void 0}),gE=["noscript","script","style"],Ph=(r,e=!0)=>e===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ax=r=>Object.keys(r).reduce((e,n)=>{const a=typeof r[n]<"u"?`${n}="${r[n]}"`:`${n}`;return e?`${e} ${a}`:a},""),vE=(r,e,n,a)=>{const o=Ax(n),u=Tx(e);return o?`<${r} ${Ui}="true" ${o}>${Ph(u,a)}</${r}>`:`<${r} ${Ui}="true">${Ph(u,a)}</${r}>`},_E=(r,e,n=!0)=>e.reduce((a,o)=>{const u=o,c=Object.keys(u).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,v)=>{const g=typeof u[v]>"u"?v:`${v}="${Ph(u[v],n)}"`;return h?`${h} ${g}`:g},""),f=u.innerHTML||u.cssText||"",p=gE.indexOf(r)===-1;return`${a}<${r} ${Ui}="true" ${c}${p?"/>":`>${f}</${r}>`}`},""),Rx=(r,e={})=>Object.keys(r).reduce((n,a)=>{const o=Hp[a];return n[o||a]=r[a],n},e),xE=(r,e,n)=>{const a={key:e,[Ui]:!0},o=Rx(n,a);return[Pn.createElement("title",o,e)]},lc=(r,e)=>e.map((n,a)=>{const o={key:a,[Ui]:!0};return Object.keys(n).forEach(u=>{const f=Hp[u]||u;if(f==="innerHTML"||f==="cssText"){const p=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:p}}else o[f]=n[u]}),Pn.createElement(r,o)}),vi=(r,e,n=!0)=>{switch(r){case"title":return{toComponent:()=>xE(r,e.title,e.titleAttributes),toString:()=>vE(r,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Rx(e),toString:()=>Ax(e)};default:return{toComponent:()=>lc(r,e),toString:()=>_E(r,e,n)}}},SE=({metaTags:r,linkTags:e,scriptTags:n,encode:a})=>{const o=Kd(r,jd.meta),u=Kd(e,jd.link),c=Kd(n,jd.script);return{priorityMethods:{toComponent:()=>[...lc("meta",o.priority),...lc("link",u.priority),...lc("script",c.priority)],toString:()=>`${vi("meta",o.priority,a)} ${vi("link",u.priority,a)} ${vi("script",c.priority,a)}`},metaTags:o.default,linkTags:u.default,scriptTags:c.default}},yE=r=>{const{baseTag:e,bodyAttributes:n,encode:a=!0,htmlAttributes:o,noscriptTags:u,styleTags:c,title:f="",titleAttributes:p,prioritizeSeoTags:h}=r;let{linkTags:v,metaTags:g,scriptTags:_}=r,S={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:S,linkTags:v,metaTags:g,scriptTags:_}=SE(r)),{priority:S,base:vi("base",e,a),bodyAttributes:vi("bodyAttributes",n,a),htmlAttributes:vi("htmlAttributes",o,a),link:vi("link",v,a),meta:vi("meta",g,a),noscript:vi("noscript",u,a),script:vi("script",_,a),style:vi("style",c,a),title:vi("title",{title:f,titleAttributes:p},a)}},Fh=yE,zu=[],Cx=!!(typeof window<"u"&&window.document&&window.document.createElement),Ih=class{instances=[];canUseDOM=Cx;context;value={setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?zu:this.instances,add:r=>{(this.canUseDOM?zu:this.instances).push(r)},remove:r=>{const e=(this.canUseDOM?zu:this.instances).indexOf(r);(this.canUseDOM?zu:this.instances).splice(e,1)}}};constructor(r,e){this.context=r,this.canUseDOM=e||!1,e||(r.helmet=Fh({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ME={},wx=Pn.createContext(ME),Dx=class Lx extends J.Component{static canUseDOM=Cx;helmetData;constructor(e){super(e),this.helmetData=new Ih(this.props.context||{},Lx.canUseDOM)}render(){return Pn.createElement(wx.Provider,{value:this.helmetData.value},this.props.children)}},Rs=(r,e)=>{const n=document.head||document.querySelector("head"),a=n.querySelectorAll(`${r}[${Ui}]`),o=[].slice.call(a),u=[];let c;return e&&e.length&&e.forEach(f=>{const p=document.createElement(r);for(const h in f)if(Object.prototype.hasOwnProperty.call(f,h))if(h==="innerHTML")p.innerHTML=f.innerHTML;else if(h==="cssText")p.styleSheet?p.styleSheet.cssText=f.cssText:p.appendChild(document.createTextNode(f.cssText));else{const v=h,g=typeof f[v]>"u"?"":f[v];p.setAttribute(h,g)}p.setAttribute(Ui,"true"),o.some((h,v)=>(c=v,p.isEqualNode(h)))?o.splice(c,1):u.push(p)}),o.forEach(f=>f.parentNode?.removeChild(f)),u.forEach(f=>n.appendChild(f)),{oldTags:o,newTags:u}},zh=(r,e)=>{const n=document.getElementsByTagName(r)[0];if(!n)return;const a=n.getAttribute(Ui),o=a?a.split(","):[],u=[...o],c=Object.keys(e);for(const f of c){const p=e[f]||"";n.getAttribute(f)!==p&&n.setAttribute(f,p),o.indexOf(f)===-1&&o.push(f);const h=u.indexOf(f);h!==-1&&u.splice(h,1)}for(let f=u.length-1;f>=0;f-=1)n.removeAttribute(u[f]);o.length===u.length?n.removeAttribute(Ui):n.getAttribute(Ui)!==c.join(",")&&n.setAttribute(Ui,c.join(","))},EE=(r,e)=>{typeof r<"u"&&document.title!==r&&(document.title=Tx(r)),zh("title",e)},n_=(r,e)=>{const{baseTag:n,bodyAttributes:a,htmlAttributes:o,linkTags:u,metaTags:c,noscriptTags:f,onChangeClientState:p,scriptTags:h,styleTags:v,title:g,titleAttributes:_}=r;zh("body",a),zh("html",o),EE(g,_);const S={baseTag:Rs("base",n),linkTags:Rs("link",u),metaTags:Rs("meta",c),noscriptTags:Rs("noscript",f),scriptTags:Rs("script",h),styleTags:Rs("style",v)},E={},T={};Object.keys(S).forEach(M=>{const{newTags:x,oldTags:D}=S[M];x.length&&(E[M]=x),D.length&&(T[M]=S[M].oldTags)}),e&&e(),p(r,E,T)},Jo=null,bE=r=>{Jo&&cancelAnimationFrame(Jo),r.defer?Jo=requestAnimationFrame(()=>{n_(r,()=>{Jo=null})}):(n_(r),Jo=null)},TE=bE,i_=class extends J.Component{rendered=!1;shouldComponentUpdate(r){return!oE(r,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:r}=this.props.context;r.remove(this),this.emitChange()}emitChange(){const{helmetInstances:r,setHelmet:e}=this.props.context;let n=null;const a=pE(r.get().map(o=>{const u={...o.props};return delete u.context,u}));Dx.canUseDOM?TE(a):Fh&&(n=Fh(a)),e(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:r}=this.props.context;r.add(this),this.emitChange()}render(){return this.init(),null}},AE=class extends J.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(r){return!nE(t_(this.props,"helmetData"),t_(r,"helmetData"))}mapNestedChildrenToProps(r,e){if(!e)return null;switch(r.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,e,n,a){return{...e,[r.type]:[...e[r.type]||[],{...n,...this.mapNestedChildrenToProps(r,a)}]}}mapObjectTypeChildren(r,e,n,a){switch(r.type){case"title":return{...e,[r.type]:a,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[r.type]:{...n}}}}mapArrayTypeChildrenToProps(r,e){let n={...e};return Object.keys(r).forEach(a=>{n={...n,[a]:r[a]}}),n}warnOnInvalidChildren(r,e){return Qv(e_.some(n=>r.type===n),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${e_.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),Qv(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,e){let n={};return Pn.Children.forEach(r,a=>{if(!a||!a.props)return;const{children:o,...u}=a.props,c=Object.keys(u).reduce((p,h)=>(p[lE[h]||h]=u[h],p),{});let{type:f}=a;switch(typeof f=="symbol"?f=f.toString():this.warnOnInvalidChildren(a,o),f){case"Symbol(react.fragment)":e=this.mapChildrenToProps(o,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(a,n,c,o);break;default:e=this.mapObjectTypeChildren(a,e,c,o);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:r,...e}=this.props;let n={...e},{helmetData:a}=e;if(r&&(n=this.mapChildrenToProps(r,n)),a&&!(a instanceof Ih)){const o=a;a=new Ih(o.context,!0),delete n.helmetData}return a?Pn.createElement(i_,{...n,context:a.value}):Pn.createElement(wx.Consumer,null,o=>Pn.createElement(i_,{...n,context:o}))}};var a_="popstate";function RE(r={}){function e(a,o){let{pathname:u,search:c,hash:f}=a.location;return Bh("",{pathname:u,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:hl(o)}return wE(e,n,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Si(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CE(){return Math.random().toString(36).substring(2,10)}function r_(r,e){return{usr:r.state,key:r.key,idx:e}}function Bh(r,e,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Qs(e):e,state:n,key:e&&e.key||a||CE()}}function hl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Qs(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function wE(r,e,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,f="POP",p=null,h=v();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function v(){return(c.state||{idx:null}).idx}function g(){f="POP";let M=v(),x=M==null?null:M-h;h=M,p&&p({action:f,location:T.location,delta:x})}function _(M,x){f="PUSH";let D=Bh(T.location,M,x);h=v()+1;let L=r_(D,h),N=T.createHref(D);try{c.pushState(L,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(N)}u&&p&&p({action:f,location:T.location,delta:1})}function S(M,x){f="REPLACE";let D=Bh(T.location,M,x);h=v();let L=r_(D,h),N=T.createHref(D);c.replaceState(L,"",N),u&&p&&p({action:f,location:T.location,delta:0})}function E(M){return DE(M)}let T={get action(){return f},get location(){return r(o,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(a_,g),p=M,()=>{o.removeEventListener(a_,g),p=null}},createHref(M){return e(o,M)},createURL:E,encodeLocation(M){let x=E(M);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(M){return c.go(M)}};return T}function DE(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(n,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:hl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Ux(r,e,n="/"){return LE(r,e,n,!1)}function LE(r,e,n,a){let o=typeof e=="string"?Qs(e):e,u=Aa(o.pathname||"/",n);if(u==null)return null;let c=Nx(r);UE(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let h=kE(u);f=VE(c[p],h,a)}return f}function Nx(r,e=[],n=[],a="",o=!1){let u=(c,f,p=o,h)=>{let v={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&p)return;Qt(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let g=Ma([a,v.relativePath]),_=n.concat(v);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Nx(c.children,e,_,g,p)),!(c.path==null&&!c.index)&&e.push({path:g,score:BE(g,c.index),routesMeta:_})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))u(c,f);else for(let p of Ox(c.path))u(c,f,!0,p)}),e}function Ox(r){let e=r.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=Ox(a.join("/")),f=[];return f.push(...c.map(p=>p===""?u:[u,p].join("/"))),o&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function UE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:HE(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var NE=/^:[\w-]+$/,OE=3,PE=2,FE=1,IE=10,zE=-2,s_=r=>r==="*";function BE(r,e){let n=r.split("/"),a=n.length;return n.some(s_)&&(a+=zE),e&&(a+=PE),n.filter(o=>!s_(o)).reduce((o,u)=>o+(NE.test(u)?OE:u===""?FE:IE),a)}function HE(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function VE(r,e,n=!1){let{routesMeta:a}=r,o={},u="/",c=[];for(let f=0;f<a.length;++f){let p=a[f],h=f===a.length-1,v=u==="/"?e:e.slice(u.length)||"/",g=vc({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},v),_=p.route;if(!g&&h&&n&&!a[a.length-1].route.index&&(g=vc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Ma([u,g.pathname]),pathnameBase:jE(Ma([u,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(u=Ma([u,g.pathnameBase]))}return c}function vc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=GE(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:a.reduce((h,{paramName:v,isOptional:g},_)=>{if(v==="*"){let E=f[_]||"";c=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return g&&!S?h[v]=void 0:h[v]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:c,pattern:r}}function GE(r,e=!1,n=!0){Si(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(a.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function kE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Aa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}var Px=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XE=r=>Px.test(r);function qE(r,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?Qs(r):r,u;if(n)if(XE(n))u=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Si(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${n}`)}n.startsWith("/")?u=o_(n.substring(1),"/"):u=o_(n,e)}else u=e;return{pathname:u,search:YE(a),hash:KE(o)}}function o_(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zd(r,e,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function WE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vp(r){let e=WE(r);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function Gp(r,e,n,a=!1){let o;typeof r=="string"?o=Qs(r):(o={...r},Qt(!o.pathname||!o.pathname.includes("?"),Zd("?","pathname","search",o)),Qt(!o.pathname||!o.pathname.includes("#"),Zd("#","pathname","hash",o)),Qt(!o.search||!o.search.includes("#"),Zd("#","search","hash",o)));let u=r===""||o.pathname==="",c=u?"/":o.pathname,f;if(c==null)f=n;else{let g=e.length-1;if(!a&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}f=g>=0?e[g]:"/"}let p=qE(o,f),h=c&&c!=="/"&&c.endsWith("/"),v=(u||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||v)&&(p.pathname+="/"),p}var Ma=r=>r.join("/").replace(/\/\/+/g,"/"),jE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),YE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,KE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,ZE=class{constructor(r,e,n,a=!1){this.status=r,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function $E(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function QE(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ix(r,e){let n=r;if(typeof n!="string"||!Px.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,o=!1;if(Fx)try{let u=new URL(window.location.href),c=n.startsWith("//")?new URL(u.protocol+n):new URL(n),f=Aa(c.pathname,e);c.origin===u.origin&&f!=null?n=f+c.search+c.hash:o=!0}catch{Si(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zx=["POST","PUT","PATCH","DELETE"];new Set(zx);var JE=["GET",...zx];new Set(JE);var Js=J.createContext(null);Js.displayName="DataRouter";var Rc=J.createContext(null);Rc.displayName="DataRouterState";var eb=J.createContext(!1),Bx=J.createContext({isTransitioning:!1});Bx.displayName="ViewTransition";var tb=J.createContext(new Map);tb.displayName="Fetchers";var nb=J.createContext(null);nb.displayName="Await";var ri=J.createContext(null);ri.displayName="Navigation";var Sl=J.createContext(null);Sl.displayName="Location";var Pi=J.createContext({outlet:null,matches:[],isDataRoute:!1});Pi.displayName="Route";var kp=J.createContext(null);kp.displayName="RouteError";var Hx="REACT_ROUTER_ERROR",ib="REDIRECT",ab="ROUTE_ERROR_RESPONSE";function rb(r){if(r.startsWith(`${Hx}:${ib}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function sb(r){if(r.startsWith(`${Hx}:${ab}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new ZE(e.status,e.statusText,e.data)}catch{}}function ob(r,{relative:e}={}){Qt(eo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=J.useContext(ri),{hash:o,pathname:u,search:c}=yl(r,{relative:e}),f=u;return n!=="/"&&(f=u==="/"?n:Ma([n,u])),a.createHref({pathname:f,search:c,hash:o})}function eo(){return J.useContext(Sl)!=null}function dr(){return Qt(eo(),"useLocation() may be used only in the context of a <Router> component."),J.useContext(Sl).location}var Vx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gx(r){J.useContext(ri).static||J.useLayoutEffect(r)}function Xp(){let{isDataRoute:r}=J.useContext(Pi);return r?yb():lb()}function lb(){Qt(eo(),"useNavigate() may be used only in the context of a <Router> component.");let r=J.useContext(Js),{basename:e,navigator:n}=J.useContext(ri),{matches:a}=J.useContext(Pi),{pathname:o}=dr(),u=JSON.stringify(Vp(a)),c=J.useRef(!1);return Gx(()=>{c.current=!0}),J.useCallback((p,h={})=>{if(Si(c.current,Vx),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=Gp(p,JSON.parse(u),o,h.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ma([e,v.pathname])),(h.replace?n.replace:n.push)(v,h.state,h)},[e,n,u,o,r])}J.createContext(null);function ub(){let{matches:r}=J.useContext(Pi),e=r[r.length-1];return e?e.params:{}}function yl(r,{relative:e}={}){let{matches:n}=J.useContext(Pi),{pathname:a}=dr(),o=JSON.stringify(Vp(n));return J.useMemo(()=>Gp(r,JSON.parse(o),a,e==="path"),[r,o,a,e])}function cb(r,e){return kx(r,e)}function kx(r,e,n,a,o){Qt(eo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=J.useContext(ri),{matches:c}=J.useContext(Pi),f=c[c.length-1],p=f?f.params:{},h=f?f.pathname:"/",v=f?f.pathnameBase:"/",g=f&&f.route;{let D=g&&g.path||"";qx(h,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let _=dr(),S;if(e){let D=typeof e=="string"?Qs(e):e;Qt(v==="/"||D.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=_;let E=S.pathname||"/",T=E;if(v!=="/"){let D=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let M=Ux(r,{pathname:T});Si(g||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Si(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=mb(M&&M.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:Ma([v,u.encodeLocation?u.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:Ma([v,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),c,n,a,o);return e&&x?J.createElement(Sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function fb(){let r=Sb(),e=$E(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=J.createElement(J.Fragment,null,J.createElement("p",null,"💿 Hey developer 👋"),J.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",J.createElement("code",{style:u},"ErrorBoundary")," or"," ",J.createElement("code",{style:u},"errorElement")," prop on your route.")),J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),n?J.createElement("pre",{style:o},n):null,c)}var db=J.createElement(fb,null),Xx=class extends J.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=sb(r.digest);n&&(r=n)}let e=r!==void 0?J.createElement(Pi.Provider,{value:this.props.routeContext},J.createElement(kp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?J.createElement(hb,{error:r},e):e}};Xx.contextType=eb;var $d=new WeakMap;function hb({children:r,error:e}){let{basename:n}=J.useContext(ri);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=rb(e.digest);if(a){let o=$d.get(e);if(o)throw o;let u=Ix(a.location,n);if(Fx&&!$d.get(e))if(u.isExternal||a.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:a.replace}));throw $d.set(e,c),c}return J.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return r}function pb({routeContext:r,match:e,children:n}){let a=J.useContext(Js);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),J.createElement(Pi.Provider,{value:r},n)}function mb(r,e=[],n=null,a=null,o=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let u=r,c=n?.errors;if(c!=null){let v=u.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,p=-1;if(n)for(let v=0;v<u.length;v++){let g=u[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:_,errors:S}=n,E=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||E){f=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}let h=n&&a?(v,g)=>{a(v,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:QE(n.matches),errorInfo:g})}:void 0;return u.reduceRight((v,g,_)=>{let S,E=!1,T=null,M=null;n&&(S=c&&g.route.id?c[g.route.id]:void 0,T=g.route.errorElement||db,f&&(p<0&&_===0?(qx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):p===_&&(E=!0,M=g.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,_+1)),D=()=>{let L;return S?L=T:E?L=M:g.route.Component?L=J.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=v,J.createElement(pb,{match:g,routeContext:{outlet:v,matches:x,isDataRoute:n!=null},children:L})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?J.createElement(Xx,{location:n.location,revalidation:n.revalidation,component:T,error:S,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):D()},null)}function qp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gb(r){let e=J.useContext(Js);return Qt(e,qp(r)),e}function vb(r){let e=J.useContext(Rc);return Qt(e,qp(r)),e}function _b(r){let e=J.useContext(Pi);return Qt(e,qp(r)),e}function Wp(r){let e=_b(r),n=e.matches[e.matches.length-1];return Qt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function xb(){return Wp("useRouteId")}function Sb(){let r=J.useContext(kp),e=vb("useRouteError"),n=Wp("useRouteError");return r!==void 0?r:e.errors?.[n]}function yb(){let{router:r}=gb("useNavigate"),e=Wp("useNavigate"),n=J.useRef(!1);return Gx(()=>{n.current=!0}),J.useCallback(async(o,u={})=>{Si(n.current,Vx),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var l_={};function qx(r,e,n){!e&&!l_[r]&&(l_[r]=!0,Si(!1,n))}J.memo(Mb);function Mb({routes:r,future:e,state:n,onError:a}){return kx(r,void 0,n,a,e)}function Eb({to:r,replace:e,state:n,relative:a}){Qt(eo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=J.useContext(ri);Si(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=J.useContext(Pi),{pathname:c}=dr(),f=Xp(),p=Gp(r,Vp(u),c,a==="path"),h=JSON.stringify(p);return J.useEffect(()=>{f(JSON.parse(h),{replace:e,state:n,relative:a})},[f,h,a,e,n]),null}function Hh(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bb({basename:r="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:u=!1,unstable_useTransitions:c}){Qt(!eo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=J.useMemo(()=>({basename:f,navigator:o,static:u,unstable_useTransitions:c,future:{}}),[f,o,u,c]);typeof n=="string"&&(n=Qs(n));let{pathname:h="/",search:v="",hash:g="",state:_=null,key:S="default"}=n,E=J.useMemo(()=>{let T=Aa(h,f);return T==null?null:{location:{pathname:T,search:v,hash:g,state:_,key:S},navigationType:a}},[f,h,v,g,_,S,a]);return Si(E!=null,`<Router basename="${f}"> is not able to match the URL "${h}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:J.createElement(ri.Provider,{value:p},J.createElement(Sl.Provider,{children:e,value:E}))}function Tb({children:r,location:e}){return cb(Vh(r),e)}function Vh(r,e=[]){let n=[];return J.Children.forEach(r,(a,o)=>{if(!J.isValidElement(a))return;let u=[...e,o];if(a.type===J.Fragment){n.push.apply(n,Vh(a.props.children,u));return}Qt(a.type===Hh,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Vh(a.props.children,u)),n.push(c)}),n}var uc="get",cc="application/x-www-form-urlencoded";function Cc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Ab(r){return Cc(r)&&r.tagName.toLowerCase()==="button"}function Rb(r){return Cc(r)&&r.tagName.toLowerCase()==="form"}function Cb(r){return Cc(r)&&r.tagName.toLowerCase()==="input"}function wb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Db(r,e){return r.button===0&&(!e||e==="_self")&&!wb(r)}var Bu=null;function Lb(){if(Bu===null)try{new FormData(document.createElement("form"),0),Bu=!1}catch{Bu=!0}return Bu}var Ub=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qd(r){return r!=null&&!Ub.has(r)?(Si(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cc}"`),null):r}function Nb(r,e){let n,a,o,u,c;if(Rb(r)){let f=r.getAttribute("action");a=f?Aa(f,e):null,n=r.getAttribute("method")||uc,o=Qd(r.getAttribute("enctype"))||cc,u=new FormData(r)}else if(Ab(r)||Cb(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(a=p?Aa(p,e):null,n=r.getAttribute("formmethod")||f.getAttribute("method")||uc,o=Qd(r.getAttribute("formenctype"))||Qd(f.getAttribute("enctype"))||cc,u=new FormData(f,r),!Lb()){let{name:h,type:v,value:g}=r;if(v==="image"){let _=h?`${h}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else h&&u.append(h,g)}}else{if(Cc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=uc,a=null,o=cc,c=r}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ob(r,e,n,a){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:e&&Aa(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${a}`,o}async function Pb(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ib(r,e,n){let a=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await Pb(u,n);return c.links?c.links():[]}return[]}));return Vb(a.flat(1).filter(Fb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function u_(r,e,n,a,o,u){let c=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>n[h].pathname!==p.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,h)=>c(p,h)||f(p,h)):u==="data"?e.filter((p,h)=>{let v=a.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function zb(r,e,{includeHydrateFallback:n}={}){return Bb(r.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Bb(r){return[...new Set(r)]}function Hb(r){let e={},n=Object.keys(r).sort();for(let a of n)e[a]=r[a];return e}function Vb(r,e){let n=new Set;return new Set(e),r.reduce((a,o)=>{let u=JSON.stringify(Hb(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function Wx(){let r=J.useContext(Js);return jp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Gb(){let r=J.useContext(Rc);return jp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Yp=J.createContext(void 0);Yp.displayName="FrameworkContext";function jx(){let r=J.useContext(Yp);return jp(r,"You must render this element inside a <HydratedRouter> element"),r}function kb(r,e){let n=J.useContext(Yp),[a,o]=J.useState(!1),[u,c]=J.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:v,onTouchStart:g}=e,_=J.useRef(null);J.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=x=>{x.forEach(D=>{c(D.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return _.current&&M.observe(_.current),()=>{M.disconnect()}}},[r]),J.useEffect(()=>{if(a){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[a]);let S=()=>{o(!0)},E=()=>{o(!1),c(!1)};return n?r!=="intent"?[u,_,{}]:[u,_,{onFocus:el(f,S),onBlur:el(p,E),onMouseEnter:el(h,S),onMouseLeave:el(v,E),onTouchStart:el(g,S)}]:[!1,_,{}]}function el(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function Xb({page:r,...e}){let{router:n}=Wx(),a=J.useMemo(()=>Ux(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?J.createElement(Wb,{page:r,matches:a,...e}):null}function qb(r){let{manifest:e,routeModules:n}=jx(),[a,o]=J.useState([]);return J.useEffect(()=>{let u=!1;return Ib(r,e,n).then(c=>{u||o(c)}),()=>{u=!0}},[r,e,n]),a}function Wb({page:r,matches:e,...n}){let a=dr(),{future:o,manifest:u,routeModules:c}=jx(),{basename:f}=Wx(),{loaderData:p,matches:h}=Gb(),v=J.useMemo(()=>u_(r,e,h,u,a,"data"),[r,e,h,u,a]),g=J.useMemo(()=>u_(r,e,h,u,a,"assets"),[r,e,h,u,a]),_=J.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let T=new Set,M=!1;if(e.forEach(D=>{let L=u.routes[D.route.id];!L||!L.hasLoader||(!v.some(N=>N.route.id===D.route.id)&&D.route.id in p&&c[D.route.id]?.shouldRevalidate||L.hasClientLoader?M=!0:T.add(D.route.id))}),T.size===0)return[];let x=Ob(r,f,o.unstable_trailingSlashAwareDataRequests,"data");return M&&T.size>0&&x.searchParams.set("_routes",e.filter(D=>T.has(D.route.id)).map(D=>D.route.id).join(",")),[x.pathname+x.search]},[f,o.unstable_trailingSlashAwareDataRequests,p,a,u,v,e,r,c]),S=J.useMemo(()=>zb(g,u),[g,u]),E=qb(g);return J.createElement(J.Fragment,null,_.map(T=>J.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),S.map(T=>J.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),E.map(({key:T,link:M})=>J.createElement("link",{key:T,nonce:n.nonce,...M})))}function jb(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Yb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yb&&(window.__reactRouterVersion="7.12.0")}catch{}function Kb({basename:r,children:e,unstable_useTransitions:n,window:a}){let o=J.useRef();o.current==null&&(o.current=RE({window:a,v5Compat:!0}));let u=o.current,[c,f]=J.useState({action:u.action,location:u.location}),p=J.useCallback(h=>{n===!1?f(h):J.startTransition(()=>f(h))},[n]);return J.useLayoutEffect(()=>u.listen(p),[u,p]),J.createElement(bb,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:u,unstable_useTransitions:n})}var Yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kx=J.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,state:f,target:p,to:h,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...S},E){let{basename:T,unstable_useTransitions:M}=J.useContext(ri),x=typeof h=="string"&&Yx.test(h),D=Ix(h,T);h=D.to;let L=ob(h,{relative:o}),[N,F,z]=kb(a,S),U=Jb(h,{replace:c,state:f,target:p,preventScrollReset:v,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:_,unstable_useTransitions:M});function j(w){e&&e(w),w.defaultPrevented||U(w)}let A=J.createElement("a",{...S,...z,href:D.absoluteURL||L,onClick:D.isExternal||u?e:j,ref:jb(E,F),target:p,"data-discover":!x&&n==="render"?"true":void 0});return N&&!x?J.createElement(J.Fragment,null,A,J.createElement(Xb,{page:L})):A});Kx.displayName="Link";var Zb=J.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:f,children:p,...h},v){let g=yl(c,{relative:h.relative}),_=dr(),S=J.useContext(Rc),{navigator:E,basename:T}=J.useContext(ri),M=S!=null&&aT(g)&&f===!0,x=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=_.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(D=D.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&T&&(L=Aa(L,T)||L);const N=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let F=D===x||!o&&D.startsWith(x)&&D.charAt(N)==="/",z=L!=null&&(L===x||!o&&L.startsWith(x)&&L.charAt(x.length)==="/"),U={isActive:F,isPending:z,isTransitioning:M},j=F?e:void 0,A;typeof a=="function"?A=a(U):A=[a,F?"active":null,z?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(U):u;return J.createElement(Kx,{...h,"aria-current":j,className:A,ref:v,style:w,to:c,viewTransition:f},typeof p=="function"?p(U):p)});Zb.displayName="NavLink";var $b=J.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:u,method:c=uc,action:f,onSubmit:p,relative:h,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_,...S},E)=>{let{unstable_useTransitions:T}=J.useContext(ri),M=nT(),x=iT(f,{relative:h}),D=c.toLowerCase()==="get"?"get":"post",L=typeof f=="string"&&Yx.test(f),N=F=>{if(p&&p(F),F.defaultPrevented)return;F.preventDefault();let z=F.nativeEvent.submitter,U=z?.getAttribute("formmethod")||c,j=()=>M(z||F.currentTarget,{fetcherKey:e,method:U,navigate:n,replace:o,state:u,relative:h,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:_});T&&n!==!1?J.startTransition(()=>j()):j()};return J.createElement("form",{ref:E,method:D,action:x,onSubmit:a?p:N,...S,"data-discover":!L&&r==="render"?"true":void 0})});$b.displayName="Form";function Qb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zx(r){let e=J.useContext(Js);return Qt(e,Qb(r)),e}function Jb(r,{target:e,replace:n,state:a,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:f,unstable_useTransitions:p}={}){let h=Xp(),v=dr(),g=yl(r,{relative:u});return J.useCallback(_=>{if(Db(_,e)){_.preventDefault();let S=n!==void 0?n:hl(v)===hl(g),E=()=>h(r,{replace:S,state:a,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:f});p?J.startTransition(()=>E()):E()}},[v,h,g,n,a,e,r,o,u,c,f,p])}var eT=0,tT=()=>`__${String(++eT)}__`;function nT(){let{router:r}=Zx("useSubmit"),{basename:e}=J.useContext(ri),n=xb(),a=r.fetch,o=r.navigate;return J.useCallback(async(u,c={})=>{let{action:f,method:p,encType:h,formData:v,body:g}=Nb(u,e);if(c.navigate===!1){let _=c.fetcherKey||tT();await a(_,n,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||p,formEncType:c.encType||h,flushSync:c.flushSync})}else await o(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||p,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,o,e,n])}function iT(r,{relative:e}={}){let{basename:n}=J.useContext(ri),a=J.useContext(Pi);Qt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...yl(r||".",{relative:e})},c=dr();if(r==null){u.search=c.search;let f=new URLSearchParams(u.search),p=f.getAll("index");if(p.some(v=>v==="")){f.delete("index"),p.filter(g=>g).forEach(g=>f.append("index",g));let v=f.toString();u.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Ma([n,u.pathname])),hl(u)}function aT(r,{relative:e}={}){let n=J.useContext(Bx);Qt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Zx("useViewTransitionState"),o=yl(r,{relative:e});if(!n.isTransitioning)return!1;let u=Aa(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=Aa(n.nextLocation.pathname,a)||n.nextLocation.pathname;return vc(o.pathname,c)!=null||vc(o.pathname,u)!=null}const at=r=>typeof r=="string",tl=()=>{let r,e;const n=new Promise((a,o)=>{r=a,e=o});return n.resolve=r,n.reject=e,n},c_=r=>r==null?"":""+r,rT=(r,e,n)=>{r.forEach(a=>{e[a]&&(n[a]=e[a])})},sT=/###/g,f_=r=>r&&r.indexOf("###")>-1?r.replace(sT,"."):r,d_=r=>!r||at(r),fl=(r,e,n)=>{const a=at(e)?e.split("."):e;let o=0;for(;o<a.length-1;){if(d_(r))return{};const u=f_(a[o]);!r[u]&&n&&(r[u]=new n),Object.prototype.hasOwnProperty.call(r,u)?r=r[u]:r={},++o}return d_(r)?{}:{obj:r,k:f_(a[o])}},h_=(r,e,n)=>{const{obj:a,k:o}=fl(r,e,Object);if(a!==void 0||e.length===1){a[o]=n;return}let u=e[e.length-1],c=e.slice(0,e.length-1),f=fl(r,c,Object);for(;f.obj===void 0&&c.length;)u=`${c[c.length-1]}.${u}`,c=c.slice(0,c.length-1),f=fl(r,c,Object),f?.obj&&typeof f.obj[`${f.k}.${u}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${u}`]=n},oT=(r,e,n,a)=>{const{obj:o,k:u}=fl(r,e,Object);o[u]=o[u]||[],o[u].push(n)},_c=(r,e)=>{const{obj:n,k:a}=fl(r,e);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},lT=(r,e,n)=>{const a=_c(r,n);return a!==void 0?a:_c(e,n)},$x=(r,e,n)=>{for(const a in e)a!=="__proto__"&&a!=="constructor"&&(a in r?at(r[a])||r[a]instanceof String||at(e[a])||e[a]instanceof String?n&&(r[a]=e[a]):$x(r[a],e[a],n):r[a]=e[a]);return r},Cs=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var uT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const cT=r=>at(r)?r.replace(/[&<>"'\/]/g,e=>uT[e]):r;class fT{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const a=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,a),this.regExpQueue.push(e),a}}const dT=[" ",",","?","!",";"],hT=new fT(20),pT=(r,e,n)=>{e=e||"",n=n||"";const a=dT.filter(c=>e.indexOf(c)<0&&n.indexOf(c)<0);if(a.length===0)return!0;const o=hT.getRegExp(`(${a.map(c=>c==="?"?"\\?":c).join("|")})`);let u=!o.test(r);if(!u){const c=r.indexOf(n);c>0&&!o.test(r.substring(0,c))&&(u=!0)}return u},Gh=(r,e,n=".")=>{if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const a=e.split(n);let o=r;for(let u=0;u<a.length;){if(!o||typeof o!="object")return;let c,f="";for(let p=u;p<a.length;++p)if(p!==u&&(f+=n),f+=a[p],c=o[f],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&p<a.length-1)continue;u+=p-u+1;break}o=c}return o},pl=r=>r?.replace("_","-"),mT={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){console?.[r]?.apply?.(console,e)}};class xc{constructor(e,n={}){this.init(e,n)}init(e,n={}){this.prefix=n.prefix||"i18next:",this.logger=e||mT,this.options=n,this.debug=n.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,a,o){return o&&!this.debug?null:(at(e[0])&&(e[0]=`${a}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new xc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new xc(this.logger,e)}}var ki=new xc;class wc{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e,...n){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,u])=>{for(let c=0;c<u;c++)o(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,u])=>{for(let c=0;c<u;c++)o.apply(o,[e,...n])})}}class p_ extends wc{constructor(e,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,a,o={}){const u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,c=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,n],a&&(Array.isArray(a)?f.push(...a):at(a)&&u?f.push(...a.split(u)):f.push(a)));const p=_c(this.data,f);return!p&&!n&&!a&&e.indexOf(".")>-1&&(e=f[0],n=f[1],a=f.slice(2).join(".")),p||!c||!at(a)?p:Gh(this.data?.[e]?.[n],a,u)}addResource(e,n,a,o,u={silent:!1}){const c=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let f=[e,n];a&&(f=f.concat(c?a.split(c):a)),e.indexOf(".")>-1&&(f=e.split("."),o=n,n=f[1]),this.addNamespaces(n),h_(this.data,f,o),u.silent||this.emit("added",e,n,a,o)}addResources(e,n,a,o={silent:!1}){for(const u in a)(at(a[u])||Array.isArray(a[u]))&&this.addResource(e,n,u,a[u],{silent:!0});o.silent||this.emit("added",e,n,a)}addResourceBundle(e,n,a,o,u,c={silent:!1,skipCopy:!1}){let f=[e,n];e.indexOf(".")>-1&&(f=e.split("."),o=a,a=n,n=f[1]),this.addNamespaces(n);let p=_c(this.data,f)||{};c.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?$x(p,a,u):p={...p,...a},h_(this.data,f,p),c.silent||this.emit("added",e,n,a)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Qx={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,n,a,o){return r.forEach(u=>{e=this.processors[u]?.process(e,n,a,o)??e}),e}};const Jx=Symbol("i18next/PATH_KEY");function gT(){const r=[],e=Object.create(null);let n;return e.get=(a,o)=>(n?.revoke?.(),o===Jx?r:(r.push(o),n=Proxy.revocable(a,e),n.proxy)),Proxy.revocable(Object.create(null),e).proxy}function kh(r,e){const{[Jx]:n}=r(gT());return n.join(e?.keySeparator??".")}const m_={},Jd=r=>!at(r)&&typeof r!="boolean"&&typeof r!="number";class Sc extends wc{constructor(e,n={}){super(),rT(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ki.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,n={interpolation:{}}){const a={...n};if(e==null)return!1;const o=this.resolve(e,a);if(o?.res===void 0)return!1;const u=Jd(o.res);return!(a.returnObjects===!1&&u)}extractFromKey(e,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let u=n.ns||this.options.defaultNS||[];const c=a&&e.indexOf(a)>-1,f=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!pT(e,a,o);if(c&&!f){const p=e.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:e,namespaces:at(u)?[u]:u};const h=e.split(a);(a!==o||a===o&&this.options.ns.indexOf(h[0])>-1)&&(u=h.shift()),e=h.join(o)}return{key:e,namespaces:at(u)?[u]:u}}translate(e,n,a){let o=typeof n=="object"?{...n}:n;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=kh(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]);const u=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:f,namespaces:p}=this.extractFromKey(e[e.length-1],o),h=p[p.length-1];let v=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;v===void 0&&(v=":");const g=o.lng||this.language,_=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(g?.toLowerCase()==="cimode")return _?u?{res:`${h}${v}${f}`,usedKey:f,exactUsedKey:f,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(o)}:`${h}${v}${f}`:u?{res:f,usedKey:f,exactUsedKey:f,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(o)}:f;const S=this.resolve(e,o);let E=S?.res;const T=S?.usedKey||f,M=S?.exactUsedKey||f,x=["[object Number]","[object Function]","[object RegExp]"],D=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,L=!this.i18nFormat||this.i18nFormat.handleAsObject,N=o.count!==void 0&&!at(o.count),F=Sc.hasDefaultValue(o),z=N?this.pluralResolver.getSuffix(g,o.count,o):"",U=o.ordinal&&N?this.pluralResolver.getSuffix(g,o.count,{ordinal:!1}):"",j=N&&!o.ordinal&&o.count===0,A=j&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${z}`]||o[`defaultValue${U}`]||o.defaultValue;let w=E;L&&!E&&F&&(w=A);const H=Jd(w),K=Object.prototype.toString.apply(w);if(L&&w&&H&&x.indexOf(K)<0&&!(at(D)&&Array.isArray(w))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(T,w,{...o,ns:p}):`key '${f} (${this.language})' returned an object instead of string.`;return u?(S.res=$,S.usedParams=this.getUsedParamsDetails(o),S):$}if(c){const $=Array.isArray(w),ue=$?[]:{},ce=$?M:T;for(const I in w)if(Object.prototype.hasOwnProperty.call(w,I)){const V=`${ce}${c}${I}`;F&&!E?ue[I]=this.translate(V,{...o,defaultValue:Jd(A)?A[I]:void 0,joinArrays:!1,ns:p}):ue[I]=this.translate(V,{...o,joinArrays:!1,ns:p}),ue[I]===V&&(ue[I]=w[I])}E=ue}}else if(L&&at(D)&&Array.isArray(E))E=E.join(D),E&&(E=this.extendTranslation(E,e,o,a));else{let $=!1,ue=!1;!this.isValidLookup(E)&&F&&($=!0,E=A),this.isValidLookup(E)||(ue=!0,E=f);const I=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ue?void 0:E,V=F&&A!==E&&this.options.updateMissing;if(ue||$||V){if(this.logger.log(V?"updateKey":"missingKey",g,h,f,V?A:E),c){const O=this.resolve(f,{...o,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ne=[];const Me=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Me&&Me[0])for(let O=0;O<Me.length;O++)ne.push(Me[O]);else this.options.saveMissingTo==="all"?ne=this.languageUtils.toResolveHierarchy(o.lng||this.language):ne.push(o.lng||this.language);const ye=(O,ee,me)=>{const Re=F&&me!==E?me:I;this.options.missingKeyHandler?this.options.missingKeyHandler(O,h,ee,Re,V,o):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(O,h,ee,Re,V,o),this.emit("missingKey",O,h,ee,E)};this.options.saveMissing&&(this.options.saveMissingPlurals&&N?ne.forEach(O=>{const ee=this.pluralResolver.getSuffixes(O,o);j&&o[`defaultValue${this.options.pluralSeparator}zero`]&&ee.indexOf(`${this.options.pluralSeparator}zero`)<0&&ee.push(`${this.options.pluralSeparator}zero`),ee.forEach(me=>{ye([O],f+me,o[`defaultValue${me}`]||A)})}):ye(ne,f,A))}E=this.extendTranslation(E,e,o,S,a),ue&&E===f&&this.options.appendNamespaceToMissingKey&&(E=`${h}${v}${f}`),(ue||$)&&this.options.parseMissingKeyHandler&&(E=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}${v}${f}`:f,$?E:void 0,o))}return u?(S.res=E,S.usedParams=this.getUsedParamsDetails(o),S):E}extendTranslation(e,n,a,o,u){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const p=at(e)&&(a?.interpolation?.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(p){const g=e.match(this.interpolator.nestingRegexp);h=g&&g.length}let v=a.replace&&!at(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),e=this.interpolator.interpolate(e,v,a.lng||this.language||o.usedLng,a),p){const g=e.match(this.interpolator.nestingRegexp),_=g&&g.length;h<_&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(e=this.interpolator.nest(e,(...g)=>u?.[0]===g[0]&&!a.context?(this.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`),null):this.translate(...g,n),a)),a.interpolation&&this.interpolator.reset()}const c=a.postProcess||this.options.postProcess,f=at(c)?[c]:c;return e!=null&&f?.length&&a.applyPostProcessor!==!1&&(e=Qx.handle(f,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),e}resolve(e,n={}){let a,o,u,c,f;return at(e)&&(e=[e]),e.forEach(p=>{if(this.isValidLookup(a))return;const h=this.extractFromKey(p,n),v=h.key;o=v;let g=h.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const _=n.count!==void 0&&!at(n.count),S=_&&!n.ordinal&&n.count===0,E=n.context!==void 0&&(at(n.context)||typeof n.context=="number")&&n.context!=="",T=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);g.forEach(M=>{this.isValidLookup(a)||(f=M,!m_[`${T[0]}-${M}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(f)&&(m_[`${T[0]}-${M}`]=!0,this.logger.warn(`key "${o}" for languages "${T.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),T.forEach(x=>{if(this.isValidLookup(a))return;c=x;const D=[v];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(D,v,x,M,n);else{let N;_&&(N=this.pluralResolver.getSuffix(x,n.count,n));const F=`${this.options.pluralSeparator}zero`,z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(_&&(n.ordinal&&N.indexOf(z)===0&&D.push(v+N.replace(z,this.options.pluralSeparator)),D.push(v+N),S&&D.push(v+F)),E){const U=`${v}${this.options.contextSeparator||"_"}${n.context}`;D.push(U),_&&(n.ordinal&&N.indexOf(z)===0&&D.push(U+N.replace(z,this.options.pluralSeparator)),D.push(U+N),S&&D.push(U+F))}}let L;for(;L=D.pop();)this.isValidLookup(a)||(u=L,a=this.getResource(x,M,L,n))}))})}),{res:a,usedKey:o,exactUsedKey:u,usedLng:c,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,a,o={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,n,a,o):this.resourceStore.getResource(e,n,a,o)}getUsedParamsDetails(e={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=e.replace&&!at(e.replace);let o=a?e.replace:e;if(a&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const u of n)delete o[u]}return o}static hasDefaultValue(e){const n="defaultValue";for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&n===a.substring(0,n.length)&&e[a]!==void 0)return!0;return!1}}class g_{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ki.create("languageUtils")}getScriptPartFromCode(e){if(e=pl(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=pl(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(at(e)&&e.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&e.forEach(a=>{if(n)return;const o=this.getScriptPartFromCode(a);if(this.isSupportedCode(o))return n=o;const u=this.getLanguagePartFromCode(a);if(this.isSupportedCode(u))return n=u;n=this.options.supportedLngs.find(c=>{if(c===u)return c;if(!(c.indexOf("-")<0&&u.indexOf("-")<0)&&(c.indexOf("-")>0&&u.indexOf("-")<0&&c.substring(0,c.indexOf("-"))===u||c.indexOf(u)===0&&u.length>1))return c})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),at(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let a=e[n];return a||(a=e[this.getScriptPartFromCode(n)]),a||(a=e[this.formatLanguageCode(n)]),a||(a=e[this.getLanguagePartFromCode(n)]),a||(a=e.default),a||[]}toResolveHierarchy(e,n){const a=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],e),o=[],u=c=>{c&&(this.isSupportedCode(c)?o.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return at(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(e))):at(e)&&u(this.formatLanguageCode(e)),a.forEach(c=>{o.indexOf(c)<0&&u(this.formatLanguageCode(c))}),o}}const v_={zero:0,one:1,two:2,few:3,many:4,other:5},__={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class vT{constructor(e,n={}){this.languageUtils=e,this.options=n,this.logger=ki.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,n={}){const a=pl(e==="dev"?"en":e),o=n.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:a,type:o});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let c;try{c=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),__;if(!e.match(/-|_/))return __;const p=this.languageUtils.getLanguagePartFromCode(e);c=this.getRule(p,n)}return this.pluralRulesCache[u]=c,c}needsPlural(e,n={}){let a=this.getRule(e,n);return a||(a=this.getRule("dev",n)),a?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,n,a={}){return this.getSuffixes(e,a).map(o=>`${n}${o}`)}getSuffixes(e,n={}){let a=this.getRule(e,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,u)=>v_[o]-v_[u]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,n,a={}){const o=this.getRule(e,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,a))}}const x_=(r,e,n,a=".",o=!0)=>{let u=lT(r,e,n);return!u&&o&&at(n)&&(u=Gh(r,n,a),u===void 0&&(u=Gh(e,n,a))),u},eh=r=>r.replace(/\$/g,"$$$$");class S_{constructor(e={}){this.logger=ki.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(n=>n),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:u,prefixEscaped:c,suffix:f,suffixEscaped:p,formatSeparator:h,unescapeSuffix:v,unescapePrefix:g,nestingPrefix:_,nestingPrefixEscaped:S,nestingSuffix:E,nestingSuffixEscaped:T,nestingOptionsSeparator:M,maxReplaces:x,alwaysFormat:D}=e.interpolation;this.escape=n!==void 0?n:cT,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=u?Cs(u):c||"{{",this.suffix=f?Cs(f):p||"}}",this.formatSeparator=h||",",this.unescapePrefix=v?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":v||"",this.nestingPrefix=_?Cs(_):S||Cs("$t("),this.nestingSuffix=E?Cs(E):T||Cs(")"),this.nestingOptionsSeparator=M||",",this.maxReplaces=x||1e3,this.alwaysFormat=D!==void 0?D:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,a)=>n?.source===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,n,a,o){let u,c,f;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=S=>{if(S.indexOf(this.formatSeparator)<0){const x=x_(n,p,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(x,void 0,a,{...o,...n,interpolationkey:S}):x}const E=S.split(this.formatSeparator),T=E.shift().trim(),M=E.join(this.formatSeparator).trim();return this.format(x_(n,p,T,this.options.keySeparator,this.options.ignoreJSONStructure),M,a,{...o,...n,interpolationkey:T})};this.resetRegExp();const v=o?.missingInterpolationHandler||this.options.missingInterpolationHandler,g=o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>eh(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?eh(this.escape(S)):eh(S)}].forEach(S=>{for(f=0;u=S.regex.exec(e);){const E=u[1].trim();if(c=h(E),c===void 0)if(typeof v=="function"){const M=v(e,u,o);c=at(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,E))c="";else if(g){c=u[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`),c="";else!at(c)&&!this.useRawValueToEscape&&(c=c_(c));const T=S.safeValue(c);if(e=e.replace(u[0],T),g?(S.regex.lastIndex+=c.length,S.regex.lastIndex-=u[0].length):S.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,n,a={}){let o,u,c;const f=(p,h)=>{const v=this.nestingOptionsSeparator;if(p.indexOf(v)<0)return p;const g=p.split(new RegExp(`${v}[ ]*{`));let _=`{${g[1]}`;p=g[0],_=this.interpolate(_,c);const S=_.match(/'/g),E=_.match(/"/g);((S?.length??0)%2===0&&!E||E.length%2!==0)&&(_=_.replace(/'/g,'"'));try{c=JSON.parse(_),h&&(c={...h,...c})}catch(T){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,T),`${p}${v}${_}`}return c.defaultValue&&c.defaultValue.indexOf(this.prefix)>-1&&delete c.defaultValue,p};for(;o=this.nestingRegexp.exec(e);){let p=[];c={...a},c=c.replace&&!at(c.replace)?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;const h=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(h!==-1&&(p=o[1].slice(h).split(this.formatSeparator).map(v=>v.trim()).filter(Boolean),o[1]=o[1].slice(0,h)),u=n(f.call(this,o[1].trim(),c),c),u&&o[0]===e&&!at(u))return u;at(u)||(u=c_(u)),u||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),u=""),p.length&&(u=p.reduce((v,g)=>this.format(v,g,a.lng,{...a,interpolationkey:o[1].trim()}),u.trim())),e=e.replace(o[0],u),this.regexp.lastIndex=0}return e}}const _T=r=>{let e=r.toLowerCase().trim();const n={};if(r.indexOf("(")>-1){const a=r.split("(");e=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);e==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(c=>{if(c){const[f,...p]=c.split(":"),h=p.join(":").trim().replace(/^'+|'+$/g,""),v=f.trim();n[v]||(n[v]=h),h==="false"&&(n[v]=!1),h==="true"&&(n[v]=!0),isNaN(h)||(n[v]=parseInt(h,10))}})}return{formatName:e,formatOptions:n}},y_=r=>{const e={};return(n,a,o)=>{let u=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(u={...u,[o.interpolationkey]:void 0});const c=a+JSON.stringify(u);let f=e[c];return f||(f=r(pl(a),o),e[c]=f),f(n)}},xT=r=>(e,n,a)=>r(pl(n),a)(e);class ST{constructor(e={}){this.logger=ki.create("formatter"),this.options=e,this.init(e)}init(e,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const a=n.cacheInBuiltFormats?y_:xT;this.formats={number:a((o,u)=>{const c=new Intl.NumberFormat(o,{...u});return f=>c.format(f)}),currency:a((o,u)=>{const c=new Intl.NumberFormat(o,{...u,style:"currency"});return f=>c.format(f)}),datetime:a((o,u)=>{const c=new Intl.DateTimeFormat(o,{...u});return f=>c.format(f)}),relativetime:a((o,u)=>{const c=new Intl.RelativeTimeFormat(o,{...u});return f=>c.format(f,u.range||"day")}),list:a((o,u)=>{const c=new Intl.ListFormat(o,{...u});return f=>c.format(f)})}}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=y_(n)}format(e,n,a,o={}){const u=n.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(f=>f.indexOf(")")>-1)){const f=u.findIndex(p=>p.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,f)].join(this.formatSeparator)}return u.reduce((f,p)=>{const{formatName:h,formatOptions:v}=_T(p);if(this.formats[h]){let g=f;try{const _=o?.formatParams?.[o.interpolationkey]||{},S=_.locale||_.lng||o.locale||o.lng||a;g=this.formats[h](f,S,{...v,...o,..._})}catch(_){this.logger.warn(_)}return g}else this.logger.warn(`there was no format function for ${h}`);return f},e)}}const yT=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class MT extends wc{constructor(e,n,a,o={}){super(),this.backend=e,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=ki.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(a,o.backend,o)}queueLoad(e,n,a,o){const u={},c={},f={},p={};return e.forEach(h=>{let v=!0;n.forEach(g=>{const _=`${h}|${g}`;!a.reload&&this.store.hasResourceBundle(h,g)?this.state[_]=2:this.state[_]<0||(this.state[_]===1?c[_]===void 0&&(c[_]=!0):(this.state[_]=1,v=!1,c[_]===void 0&&(c[_]=!0),u[_]===void 0&&(u[_]=!0),p[g]===void 0&&(p[g]=!0)))}),v||(f[h]=!0)}),(Object.keys(u).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(u),pending:Object.keys(c),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(p)}}loaded(e,n,a){const o=e.split("|"),u=o[0],c=o[1];n&&this.emit("failedLoading",u,c,n),!n&&a&&this.store.addResourceBundle(u,c,a,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&a&&(this.state[e]=0);const f={};this.queue.forEach(p=>{oT(p.loaded,[u],c),yT(p,e),n&&p.errors.push(n),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(h=>{f[h]||(f[h]={});const v=p.loaded[h];v.length&&v.forEach(g=>{f[h][g]===void 0&&(f[h][g]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(p=>!p.done)}read(e,n,a,o=0,u=this.retryTimeout,c){if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:a,tried:o,wait:u,callback:c});return}this.readingCalls++;const f=(h,v)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(h&&v&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,a,o+1,u*2,c)},u);return}c(h,v)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const h=p(e,n);h&&typeof h.then=="function"?h.then(v=>f(null,v)).catch(f):f(null,h)}catch(h){f(h)}return}return p(e,n,f)}prepareLoading(e,n,a={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();at(e)&&(e=this.languageUtils.toResolveHierarchy(e)),at(n)&&(n=[n]);const u=this.queueLoad(e,n,a,o);if(!u.toLoad.length)return u.pending.length||o(),null;u.toLoad.forEach(c=>{this.loadOne(c)})}load(e,n,a){this.prepareLoading(e,n,{},a)}reload(e,n,a){this.prepareLoading(e,n,{reload:!0},a)}loadOne(e,n=""){const a=e.split("|"),o=a[0],u=a[1];this.read(o,u,"read",void 0,void 0,(c,f)=>{c&&this.logger.warn(`${n}loading namespace ${u} for language ${o} failed`,c),!c&&f&&this.logger.log(`${n}loaded namespace ${u} for language ${o}`,f),this.loaded(e,c,f)})}saveMissing(e,n,a,o,u,c={},f=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if(this.backend?.create){const p={...c,isUpdate:u},h=this.backend.create.bind(this.backend);if(h.length<6)try{let v;h.length===5?v=h(e,n,a,o,p):v=h(e,n,a,o),v&&typeof v.then=="function"?v.then(g=>f(null,g)).catch(f):f(null,v)}catch(v){f(v)}else h(e,n,a,o,f,p)}!e||!e[0]||this.store.addResource(e[0],n,a,o)}}}const th=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),at(r[1])&&(e.defaultValue=r[1]),at(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const n=r[3]||r[2];Object.keys(n).forEach(a=>{e[a]=n[a]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),M_=r=>(at(r.ns)&&(r.ns=[r.ns]),at(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),at(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs?.indexOf?.("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r),Hu=()=>{},ET=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(n=>{typeof r[n]=="function"&&(r[n]=r[n].bind(r))})};class dl extends wc{constructor(e={},n){if(super(),this.options=M_(e),this.services={},this.logger=ki,this.modules={external:[]},ET(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(e={},n){this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),e.defaultNS==null&&e.ns&&(at(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const a=th();this.options={...a,...this.options,...M_(e)},this.options.interpolation={...a.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=a.overloadTranslationOptionHandler);const o=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?ki.init(o(this.modules.logger),this.options):ki.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=ST;const v=new g_(this.options);this.store=new p_(this.options.resources,this.options);const g=this.services;g.logger=ki,g.resourceStore=this.store,g.languageUtils=v,g.pluralResolver=new vT(v,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),h&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(g.formatter=o(h),g.formatter.init&&g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new S_(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new MT(o(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",(S,...E)=>{this.emit(S,...E)}),this.modules.languageDetector&&(g.languageDetector=o(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=o(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new Sc(this.services,this.options),this.translator.on("*",(S,...E)=>{this.emit(S,...E)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Hu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=(...v)=>this.store[h](...v)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=(...v)=>(this.store[h](...v),this)});const f=tl(),p=()=>{const h=(v,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(g),n(v,g)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?p():setTimeout(p,0),f}loadResources(e,n=Hu){let a=n;const o=at(e)?e:this.language;if(typeof e=="function"&&(a=e),!this.options.resources||this.options.partialBundledLanguages){if(o?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const u=[],c=f=>{if(!f||f==="cimode")return;this.services.languageUtils.toResolveHierarchy(f).forEach(h=>{h!=="cimode"&&u.indexOf(h)<0&&u.push(h)})};o?c(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p=>c(p)),this.options.preload?.forEach?.(f=>c(f)),this.services.backendConnector.load(u,this.options.ns,f=>{!f&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(f)})}else a(null)}reloadResources(e,n,a){const o=tl();return typeof e=="function"&&(a=e,e=void 0),typeof n=="function"&&(a=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),a||(a=Hu),this.services.backendConnector.reload(e,n,u=>{o.resolve(),a(u)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Qx.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,n){this.isLanguageChangingTo=e;const a=tl();this.emit("languageChanging",e);const o=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,p)=>{p?this.isLanguageChangingTo===e&&(o(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,a.resolve((...h)=>this.t(...h)),n&&n(f,(...h)=>this.t(...h))},c=f=>{!e&&!f&&this.services.languageDetector&&(f=[]);const p=at(f)?f:f&&f[0],h=this.store.hasLanguageSomeTranslations(p)?p:this.services.languageUtils.getBestMatchFromCodes(at(f)?[f]:f);h&&(this.language||o(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector?.cacheUserLanguage?.(h)),this.loadResources(h,v=>{u(v,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?c(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(c):this.services.languageDetector.detect(c):c(e),a}getFixedT(e,n,a){const o=(u,c,...f)=>{let p;typeof c!="object"?p=this.options.overloadTranslationOptionHandler([u,c].concat(f)):p={...c},p.lng=p.lng||o.lng,p.lngs=p.lngs||o.lngs,p.ns=p.ns||o.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||o.keyPrefix);const h=this.options.keySeparator||".";let v;return p.keyPrefix&&Array.isArray(u)?v=u.map(g=>(typeof g=="function"&&(g=kh(g,{...this.options,...c})),`${p.keyPrefix}${h}${g}`)):(typeof u=="function"&&(u=kh(u,{...this.options,...c})),v=p.keyPrefix?`${p.keyPrefix}${h}${u}`:u),this.t(v,p)};return at(e)?o.lng=e:o.lngs=e,o.ns=n,o.keyPrefix=a,o}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const c=(f,p)=>{const h=this.services.backendConnector.state[`${f}|${p}`];return h===-1||h===0||h===2};if(n.precheck){const f=n.precheck(this,c);if(f!==void 0)return f}return!!(this.hasResourceBundle(a,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(a,e)&&(!o||c(u,e)))}loadNamespaces(e,n){const a=tl();return this.options.ns?(at(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(e,n){const a=tl();at(e)&&(e=[e]);const o=this.options.preload||[],u=e.filter(c=>o.indexOf(c)<0&&this.services.languageUtils.isSupportedCode(c));return u.length?(this.options.preload=o.concat(u),this.loadResources(c=>{a.resolve(),n&&n(c)}),a):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const o=new Intl.Locale(e);if(o&&o.getTextInfo){const u=o.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=this.services?.languageUtils||new g_(th());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(a.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},n){const a=new dl(e,n);return a.createInstance=dl.createInstance,a}cloneInstance(e={},n=Hu){const a=e.forkResourceStore;a&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},u=new dl(o);if((e.debug!==void 0||e.prefix!==void 0)&&(u.logger=u.logger.clone(e)),["store","services","language"].forEach(f=>{u[f]=this[f]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},a){const f=Object.keys(this.store.data).reduce((p,h)=>(p[h]={...this.store.data[h]},p[h]=Object.keys(p[h]).reduce((v,g)=>(v[g]={...p[h][g]},v),p[h]),p),{});u.store=new p_(f,o),u.services.resourceStore=u.store}if(e.interpolation){const p={...th().interpolation,...this.options.interpolation,...e.interpolation},h={...o,interpolation:p};u.services.interpolator=new S_(h)}return u.translator=new Sc(u.services,o),u.translator.on("*",(f,...p)=>{u.emit(f,...p)}),u.init(o,n),u.translator.options=o,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Hn=dl.createInstance();Hn.createInstance;Hn.dir;Hn.init;Hn.loadResources;Hn.reloadResources;Hn.use;Hn.changeLanguage;Hn.getFixedT;Hn.t;Hn.exists;Hn.setDefaultNamespace;Hn.hasLoadedNamespace;Hn.loadNamespaces;Hn.loadLanguages;const bT=(r,e,n,a)=>{const o=[n,{code:e,...a||{}}];if(r?.services?.logger?.forward)return r.services.logger.forward(o,"warn","react-i18next::",!0);Gr(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),r?.services?.logger?.warn?r.services.logger.warn(...o):console?.warn&&console.warn(...o)},E_={},eS=(r,e,n,a)=>{Gr(n)&&E_[n]||(Gr(n)&&(E_[n]=new Date),bT(r,e,n,a))},tS=(r,e)=>()=>{if(r.isInitialized)e();else{const n=()=>{setTimeout(()=>{r.off("initialized",n)},0),e()};r.on("initialized",n)}},Xh=(r,e,n)=>{r.loadNamespaces(e,tS(r,n))},b_=(r,e,n,a)=>{if(Gr(n)&&(n=[n]),r.options.preload&&r.options.preload.indexOf(e)>-1)return Xh(r,n,a);n.forEach(o=>{r.options.ns.indexOf(o)<0&&r.options.ns.push(o)}),r.loadLanguages(e,tS(r,a))},TT=(r,e,n={})=>!e.languages||!e.languages.length?(eS(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(r,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,r))return!1}}),Gr=r=>typeof r=="string",AT=r=>typeof r=="object"&&r!==null,RT=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,CT={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},wT=r=>CT[r],DT=r=>r.replace(RT,wT);let qh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:DT,transDefaultProps:void 0};const LT=(r={})=>{qh={...qh,...r}},UT=()=>qh;let nS;const NT=r=>{nS=r},OT=()=>nS,PT={type:"3rdParty",init(r){LT(r.options.react),NT(r)}},FT=J.createContext();class IT{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var nh={exports:{}},ih={};var T_;function zT(){if(T_)return ih;T_=1;var r=Ac();function e(g,_){return g===_&&(g!==0||1/g===1/_)||g!==g&&_!==_}var n=typeof Object.is=="function"?Object.is:e,a=r.useState,o=r.useEffect,u=r.useLayoutEffect,c=r.useDebugValue;function f(g,_){var S=_(),E=a({inst:{value:S,getSnapshot:_}}),T=E[0].inst,M=E[1];return u(function(){T.value=S,T.getSnapshot=_,p(T)&&M({inst:T})},[g,S,_]),o(function(){return p(T)&&M({inst:T}),g(function(){p(T)&&M({inst:T})})},[g]),c(S),S}function p(g){var _=g.getSnapshot;g=g.value;try{var S=_();return!n(g,S)}catch{return!0}}function h(g,_){return _()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:f;return ih.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:v,ih}var A_;function BT(){return A_||(A_=1,nh.exports=zT()),nh.exports}var HT=BT();const VT=(r,e)=>Gr(e)?e:AT(e)&&Gr(e.defaultValue)?e.defaultValue:Array.isArray(r)?r[r.length-1]:r,GT={t:VT,ready:!1},kT=()=>()=>{},Xr=(r,e={})=>{const{i18n:n}=e,{i18n:a,defaultNS:o}=J.useContext(FT)||{},u=n||a||OT();u&&!u.reportNamespaces&&(u.reportNamespaces=new IT),u||eS(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const c=J.useMemo(()=>({...UT(),...u?.options?.react,...e}),[u,e]),{useSuspense:f,keyPrefix:p}=c,h=o||u?.options?.defaultNS,v=Gr(h)?[h]:h||["translation"],g=J.useMemo(()=>v,v);u?.reportNamespaces?.addUsedNamespaces?.(g);const _=J.useRef(0),S=J.useCallback(A=>{if(!u)return kT;const{bindI18n:w,bindI18nStore:H}=c,K=()=>{_.current+=1,A()};return w&&u.on(w,K),H&&u.store.on(H,K),()=>{w&&w.split(" ").forEach($=>u.off($,K)),H&&H.split(" ").forEach($=>u.store.off($,K))}},[u,c]),E=J.useRef(),T=J.useCallback(()=>{if(!u)return GT;const A=!!(u.isInitialized||u.initializedStoreOnce)&&g.every(ce=>TT(ce,u,c)),w=e.lng||u.language,H=_.current,K=E.current;if(K&&K.ready===A&&K.lng===w&&K.keyPrefix===p&&K.revision===H)return K;const ue={t:u.getFixedT(w,c.nsMode==="fallback"?g:g[0],p),ready:A,lng:w,keyPrefix:p,revision:H};return E.current=ue,ue},[u,g,p,c,e.lng]),[M,x]=J.useState(0),{t:D,ready:L}=HT.useSyncExternalStore(S,T,T);J.useEffect(()=>{if(u&&!L&&!f){const A=()=>x(w=>w+1);e.lng?b_(u,e.lng,g,A):Xh(u,g,A)}},[u,e.lng,g,L,f,M]);const N=u||{},F=J.useRef(null),z=J.useRef(),U=A=>{const w=Object.getOwnPropertyDescriptors(A);w.__original&&delete w.__original;const H=Object.create(Object.getPrototypeOf(A),w);if(!Object.prototype.hasOwnProperty.call(H,"__original"))try{Object.defineProperty(H,"__original",{value:A,writable:!1,enumerable:!1,configurable:!1})}catch{}return H},j=J.useMemo(()=>{const A=N,w=A?.language;let H=A;A&&(F.current&&F.current.__original===A?z.current!==w?(H=U(A),F.current=H,z.current=w):H=F.current:(H=U(A),F.current=H,z.current=w));const K=[D,H,L];return K.t=D,K.i18n=H,K.ready=L,K},[D,N,L,N.resolvedLanguage,N.language,N.languages]);if(u&&f&&!L)throw new Promise(A=>{const w=()=>A();e.lng?b_(u,e.lng,g,w):Xh(u,g,w)});return j};var iS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R_=Pn.createContext&&Pn.createContext(iS),XT=["attr","size","title"];function qT(r,e){if(r==null)return{};var n=WT(r,e),a,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)a=u[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function WT(r,e){if(r==null)return{};var n={};for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)){if(e.indexOf(a)>=0)continue;n[a]=r[a]}return n}function yc(){return yc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},yc.apply(this,arguments)}function C_(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,a)}return n}function Mc(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C_(Object(n),!0).forEach(function(a){jT(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):C_(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function jT(r,e,n){return e=YT(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function YT(r){var e=KT(r,"string");return typeof e=="symbol"?e:e+""}function KT(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function aS(r){return r&&r.map((e,n)=>Pn.createElement(e.tag,Mc({key:n},e.attr),aS(e.child)))}function Kp(r){return e=>Pn.createElement(ZT,yc({attr:Mc({},r.attr)},e),aS(r.child))}function ZT(r){var e=n=>{var{attr:a,size:o,title:u}=r,c=qT(r,XT),f=o||n.size||"1em",p;return n.className&&(p=n.className),r.className&&(p=(p?p+" ":"")+r.className),Pn.createElement("svg",yc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,c,{className:p,style:Mc(Mc({color:r.color||n.color},n.style),r.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&Pn.createElement("title",null,u),r.children)};return R_!==void 0?Pn.createElement(R_.Consumer,null,n=>e(n)):e(iS)}function $T(r){return Kp({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function QT(r){return Kp({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function JT(r){return Kp({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}const e1=()=>{const{t:r,i18n:e}=Xr(),n=Xp(),[a,o]=J.useState(!1),[u,c]=J.useState(!1),[f,p]=J.useState(0),[h,v]=J.useState(!1),g=[{code:"uz",name:"O'zbekcha",flag:"🇺🇿"},{code:"ru",name:"Русский",flag:"🇷🇺"},{code:"en",name:"English",flag:"🇬🇧"}],_=()=>{o(!a)},S=()=>{o(!1)},E=T=>{e.changeLanguage(T),localStorage.setItem("language",T),n(`/${T}`),v(!1)};return J.useEffect(()=>{const T=()=>{const M=window.scrollY;M>f&&M>80?c(!0):M<f&&c(!1),p(M)};return window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)},[f]),ve.jsxs("section",{className:"main-section",id:"asosiy",children:[ve.jsx("nav",{className:`navbar ${u?"navbar-hidden":""}`,children:ve.jsxs("div",{className:"nav-container",children:[ve.jsxs("div",{className:"logo-container",children:[ve.jsx("h1",{className:"logo",children:"AyTi Xizmati"}),ve.jsx("a",{href:"tel:+998773009928",className:"phone-link",children:"+998 77-300-99-28"}),ve.jsxs("div",{className:"lang-selector-wrapper",children:[ve.jsxs("button",{className:"lang-toggle-btn",onClick:()=>v(!h),children:[ve.jsx(QT,{className:"lang-icon"}),ve.jsx("span",{className:"lang-text",children:e.language.toUpperCase()})]}),h&&ve.jsx("div",{className:"lang-dropdown-menu",children:g.map(T=>ve.jsxs("button",{className:`lang-dropdown-item ${e.language===T.code?"active":""}`,onClick:()=>E(T.code),children:[ve.jsx("span",{className:"flag",children:T.flag}),ve.jsx("span",{className:"lang-name",children:T.name})]},T.code))})]})]}),ve.jsx("div",{className:"header-right",children:ve.jsx("div",{className:"menu-icon",onClick:_,children:a?ve.jsx(JT,{}):ve.jsx($T,{})})}),ve.jsxs("ul",{className:a?"nav-menu active":"nav-menu",children:[ve.jsx("li",{children:ve.jsx("a",{href:"#asosiy",onClick:S,children:r("nav.home")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#narxlar",onClick:S,children:r("nav.services")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#jarayon",onClick:S,children:r("nav.process")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#faq",onClick:S,children:r("nav.faq")})}),ve.jsx("li",{children:ve.jsx("a",{href:"#aloqa",onClick:S,children:r("nav.contact")})})]})]})}),ve.jsxs("div",{className:"main-content",children:[ve.jsx("h1",{className:"main-title",children:r("hero.title")}),ve.jsxs("div",{className:"main-buttons",children:[ve.jsx("a",{href:"#aloqa",className:"btn btn-primary",children:r("hero.cta1")}),ve.jsx("a",{href:"https://t.me/ayti_xizmatibot",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:r("hero.cta2")})]})]})]})},t1=()=>{const{t:r}=Xr(),e=r("pricing.plans",{returnObjects:!0})||[];return ve.jsx("section",{className:"pricing",id:"narxlar",children:ve.jsxs("div",{className:"container",children:[ve.jsx("h2",{className:"section-title",children:r("pricing.title")}),ve.jsx("div",{className:"pricing-grid",children:Array.isArray(e)&&e.map((n,a)=>ve.jsxs("div",{className:"pricing-card",children:[ve.jsx("h3",{children:n.name}),ve.jsx("ul",{className:"pricing-features",children:n.features&&n.features.map((o,u)=>ve.jsx("li",{children:o},u))}),ve.jsx("div",{className:"price-tag",children:n.price})]},a))}),ve.jsx("div",{className:"pricing-cta-container",children:ve.jsx("a",{href:"#aloqa",className:"btn btn-pricing-main",children:r("pricing.cta")})})]})})},n1=()=>{const{t:r}=Xr(),e=r("process.steps",{returnObjects:!0})||[];return ve.jsx("section",{className:"process",id:"jarayon",children:ve.jsxs("div",{className:"container",children:[ve.jsx("h2",{className:"section-title",children:r("process.title")}),ve.jsx("div",{className:"process-timeline",children:Array.isArray(e)&&e.map((n,a)=>ve.jsxs("div",{className:"process-step",children:[ve.jsx("div",{className:"step-number",children:n.number}),ve.jsxs("div",{className:"step-content",children:[ve.jsx("h3",{children:n.title}),ve.jsx("p",{children:n.description})]})]},a))})]})})},i1=()=>{const{t:r}=Xr(),[e,n]=J.useState(null),a=r("faq.items",{returnObjects:!0})||[],o=u=>{n(e===u?null:u)};return ve.jsx("section",{className:"faq",id:"faq",children:ve.jsxs("div",{className:"container faq-container",children:[ve.jsx("h2",{className:"section-title",children:r("faq.title")}),ve.jsx("div",{className:"faq-list",children:Array.isArray(a)&&a.map((u,c)=>ve.jsxs("div",{className:"faq-item",children:[ve.jsxs("button",{className:`faq-question ${e===c?"active":""}`,onClick:()=>o(c),children:[u.question,ve.jsx("span",{className:`faq-icon ${e===c?"active":""}`,children:"+"})]}),ve.jsx("div",{className:`faq-answer ${e===c?"active":""}`,children:ve.jsx("p",{children:u.answer})})]},c))})]})})},a1=()=>{const{t:r}=Xr(),[e,n]=J.useState({name:"",phone:"",username:"",message:""}),[a,o]=J.useState(!1),[u,c]=J.useState({message:"",type:"",visible:!1}),f="https://script.google.com/macros/s/AKfycbyMPF4ivmpWtHSako7ZCrOfGFMXDVSylEz6yg0FGlCjDs6TdcdhkvuteAMDaucy-k0/exec",p=v=>{const{name:g,value:_}=v.target;let S=_;if(g==="name"&&_.length>0&&(S=_.charAt(0).toUpperCase()+_.slice(1)),g==="phone"){const E=_.replace(/\D/g,"");let T=E.startsWith("998")?E.slice(3):E;T=T.slice(0,9),T?T.length<=2?S=`+998 ${T}`:T.length<=5?S=`+998 ${T.slice(0,2)} ${T.slice(2)}`:T.length<=7?S=`+998 ${T.slice(0,2)} ${T.slice(2,5)} ${T.slice(5)}`:S=`+998 ${T.slice(0,2)} ${T.slice(2,5)} ${T.slice(5,7)} ${T.slice(7)}`:S="+998 "}if(g==="username"){const E=_.replace(/@/g,"");S=E?`@${E}`:"@"}n(E=>({...E,[g]:S}))},h=async v=>{v.preventDefault(),o(!0);try{const g=new URLSearchParams({name:e.name,phone:e.phone,username:e.username,message:e.message}).toString();await fetch(f,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:g}),c({message:r("contact.success"),type:"success",visible:!0}),n({name:"",phone:"",username:"",message:""}),setTimeout(()=>{c(_=>({..._,visible:!1}))},4e3)}catch{c({message:r("contact.error"),type:"error",visible:!0}),setTimeout(()=>{c(_=>({..._,visible:!1}))},3e3)}finally{o(!1)}};return ve.jsxs(ve.Fragment,{children:[u.visible&&ve.jsx("div",{className:`toast-notification toast-${u.type}`,children:u.message}),ve.jsxs("section",{className:"contact",id:"aloqa",children:[ve.jsxs("div",{className:"container",children:[ve.jsx("h2",{className:"section-title",children:r("contact.title")}),ve.jsx("div",{className:"contact-form-container",children:ve.jsxs("form",{className:"contact-form",onSubmit:h,children:[ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:r("contact.form.name")}),ve.jsx("input",{type:"text",name:"name",value:e.name,onChange:p,required:!0})]}),ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:r("contact.form.phone")}),ve.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:p,required:!0})]}),ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:r("contact.form.username")}),ve.jsx("input",{type:"text",name:"username",value:e.username,onChange:p})]}),ve.jsxs("div",{className:"form-group",children:[ve.jsx("label",{children:r("contact.form.message")}),ve.jsx("textarea",{name:"message",value:e.message,onChange:p,rows:"1",required:!0})]}),ve.jsx("button",{type:"submit",className:"submit-btn",disabled:a,children:r(a?"contact.form.submitting":"contact.form.submit")})]})})]}),ve.jsxs("footer",{className:"footer",children:[ve.jsx("div",{className:"footer-contacts",children:ve.jsxs("div",{className:"footer-links",children:[ve.jsx("a",{href:"https://t.me/AyTi_Xizmati",target:"_blank",rel:"noopener noreferrer",children:r("footer.telegram")}),ve.jsx("a",{href:"https://www.instagram.com/ayti_xizmati",target:"_blank",rel:"noopener noreferrer",children:r("footer.instagram")}),ve.jsx("a",{href:"https://t.me/AyTi_xizmatibot",target:"_blank",rel:"noopener noreferrer",children:r("footer.bot")}),ve.jsx("a",{href:"tel:+998773009928",children:"+998 77 300 99 28"}),ve.jsx("span",{className:"contact-location",children:r("footer.address")})]})}),ve.jsx("p",{className:"copyright",children:r("footer.copyright")})]})]})]})},r1=()=>{const{t:r}=Xr();return ve.jsxs(AE,{children:[ve.jsx("title",{children:r("seo.title")}),ve.jsx("meta",{name:"description",content:r("seo.description")}),ve.jsx("meta",{name:"keywords",content:r("seo.keywords")}),ve.jsx("meta",{charset:"UTF-8"}),ve.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})};const Zp="182",s1=0,w_=1,o1=2,fc=1,l1=2,ul=3,fr=0,Yn=1,Sa=2,Ea=0,qs=1,D_=2,L_=3,U_=4,u1=5,zr=100,c1=101,f1=102,d1=103,h1=104,p1=200,m1=201,g1=202,v1=203,Wh=204,jh=205,_1=206,x1=207,S1=208,y1=209,M1=210,E1=211,b1=212,T1=213,A1=214,Yh=0,Kh=1,Zh=2,js=3,$h=4,Qh=5,Jh=6,ep=7,rS=0,R1=1,C1=2,Wi=0,sS=1,oS=2,lS=3,uS=4,cS=5,fS=6,dS=7,hS=300,kr=301,Ys=302,tp=303,np=304,Dc=306,ip=1e3,ya=1001,ap=1002,Dn=1003,w1=1004,Vu=1005,Fn=1006,ah=1007,Hr=1008,xi=1009,pS=1010,mS=1011,ml=1012,$p=1013,Ki=1014,Xi=1015,Ra=1016,Qp=1017,Jp=1018,gl=1020,gS=35902,vS=35899,_S=1021,xS=1022,Ni=1023,Ca=1026,Vr=1027,SS=1028,em=1029,Ks=1030,tm=1031,nm=1033,dc=33776,hc=33777,pc=33778,mc=33779,rp=35840,sp=35841,op=35842,lp=35843,up=36196,cp=37492,fp=37496,dp=37488,hp=37489,pp=37490,mp=37491,gp=37808,vp=37809,_p=37810,xp=37811,Sp=37812,yp=37813,Mp=37814,Ep=37815,bp=37816,Tp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Lp=36494,Up=36495,Np=36283,Op=36284,Pp=36285,Fp=36286,D1=3200,L1=0,U1=1,ur="",_i="srgb",Zs="srgb-linear",Ec="linear",Bt="srgb",ws=7680,N_=519,N1=512,O1=513,P1=514,im=515,F1=516,I1=517,am=518,z1=519,O_=35044,P_="300 es",qi=2e3,bc=2001;function yS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function B1(){const r=Tc("canvas");return r.style.display="block",r}const F_={};function I_(...r){const e="THREE."+r.shift();console.log(e,...r)}function ot(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function vl(...r){const e=r.join(" ");e in F_||(F_[e]=!0,ot(...r))}function H1(r,e,n){return new Promise(function(a,o){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}class to{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=Math.PI/180,Ip=180/Math.PI;function Ml(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function Mt(r,e,n){return Math.max(e,Math.min(n,r))}function V1(r,e){return(r%e+e)%e}function sh(r,e,n){return(1-n)*r+n*e}function nl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(e=0,n=0){Vt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*a-c*o+e.x,this.y=u*o+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class El{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,u,c,f){let p=a[o+0],h=a[o+1],v=a[o+2],g=a[o+3],_=u[c+0],S=u[c+1],E=u[c+2],T=u[c+3];if(f<=0){e[n+0]=p,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(f>=1){e[n+0]=_,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(g!==T||p!==_||h!==S||v!==E){let M=p*_+h*S+v*E+g*T;M<0&&(_=-_,S=-S,E=-E,T=-T,M=-M);let x=1-f;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);x=Math.sin(x*D)/L,f=Math.sin(f*D)/L,p=p*x+_*f,h=h*x+S*f,v=v*x+E*f,g=g*x+T*f}else{p=p*x+_*f,h=h*x+S*f,v=v*x+E*f,g=g*x+T*f;const D=1/Math.sqrt(p*p+h*h+v*v+g*g);p*=D,h*=D,v*=D,g*=D}}e[n]=p,e[n+1]=h,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,o,u,c){const f=a[o],p=a[o+1],h=a[o+2],v=a[o+3],g=u[c],_=u[c+1],S=u[c+2],E=u[c+3];return e[n]=f*E+v*g+p*S-h*_,e[n+1]=p*E+v*_+h*g-f*S,e[n+2]=h*E+v*S+f*_-p*g,e[n+3]=v*E-f*g-p*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,u=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(a/2),v=f(o/2),g=f(u/2),_=p(a/2),S=p(o/2),E=p(u/2);switch(c){case"XYZ":this._x=_*v*g+h*S*E,this._y=h*S*g-_*v*E,this._z=h*v*E+_*S*g,this._w=h*v*g-_*S*E;break;case"YXZ":this._x=_*v*g+h*S*E,this._y=h*S*g-_*v*E,this._z=h*v*E-_*S*g,this._w=h*v*g+_*S*E;break;case"ZXY":this._x=_*v*g-h*S*E,this._y=h*S*g+_*v*E,this._z=h*v*E+_*S*g,this._w=h*v*g-_*S*E;break;case"ZYX":this._x=_*v*g-h*S*E,this._y=h*S*g+_*v*E,this._z=h*v*E-_*S*g,this._w=h*v*g+_*S*E;break;case"YZX":this._x=_*v*g+h*S*E,this._y=h*S*g+_*v*E,this._z=h*v*E-_*S*g,this._w=h*v*g-_*S*E;break;case"XZY":this._x=_*v*g-h*S*E,this._y=h*S*g-_*v*E,this._z=h*v*E+_*S*g,this._w=h*v*g+_*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],u=n[8],c=n[1],f=n[5],p=n[9],h=n[2],v=n[6],g=n[10],_=a+f+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-h)*S,this._z=(c-o)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(v-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(u+h)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(u-h)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-o)/S,this._x=(u+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,u=e._z,c=e._w,f=n._x,p=n._y,h=n._z,v=n._w;return this._x=a*v+c*f+o*h-u*p,this._y=o*v+c*p+u*f-a*h,this._z=u*v+c*h+a*p-o*f,this._w=c*v-a*f-o*p-u*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,u=e._z,c=e._w,f=this.dot(e);f<0&&(a=-a,o=-o,u=-u,c=-c,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),v=Math.sin(h);p=Math.sin(p*h)/v,n=Math.sin(n*h)/v,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,a=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(z_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(z_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,u=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*o-f*a),v=2*(f*n-u*o),g=2*(u*a-c*n);return this.x=n+p*h+c*g-f*v,this.y=a+p*v+f*h-u*g,this.z=o+p*g+u*v-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,u=e.z,c=n.x,f=n.y,p=n.z;return this.x=o*p-u*f,this.y=u*c-a*p,this.z=a*f-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new se,z_=new El;class dt{constructor(e,n,a,o,u,c,f,p,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,c,f,p,h)}set(e,n,a,o,u,c,f,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=u,v[5]=p,v[6]=a,v[7]=c,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,c=a[0],f=a[3],p=a[6],h=a[1],v=a[4],g=a[7],_=a[2],S=a[5],E=a[8],T=o[0],M=o[3],x=o[6],D=o[1],L=o[4],N=o[7],F=o[2],z=o[5],U=o[8];return u[0]=c*T+f*D+p*F,u[3]=c*M+f*L+p*z,u[6]=c*x+f*N+p*U,u[1]=h*T+v*D+g*F,u[4]=h*M+v*L+g*z,u[7]=h*x+v*N+g*U,u[2]=_*T+S*D+E*F,u[5]=_*M+S*L+E*z,u[8]=_*x+S*N+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],f=e[5],p=e[6],h=e[7],v=e[8];return n*c*v-n*f*h-a*u*v+a*f*p+o*u*h-o*c*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],f=e[5],p=e[6],h=e[7],v=e[8],g=v*c-f*h,_=f*p-v*u,S=h*u-c*p,E=n*g+a*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(o*h-v*a)*T,e[2]=(f*a-o*c)*T,e[3]=_*T,e[4]=(v*n-o*p)*T,e[5]=(o*u-f*n)*T,e[6]=S*T,e[7]=(a*p-h*n)*T,e[8]=(c*n-a*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,u,c,f){const p=Math.cos(u),h=Math.sin(u);return this.set(a*p,a*h,-a*(p*c+h*f)+c+e,-o*h,o*p,-o*(-h*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(lh.makeScale(e,n)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,n){return this.premultiply(lh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new dt,B_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G1(){const r={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Bt&&(o.r=ba(o.r),o.g=ba(o.g),o.b=ba(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Bt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ur?Ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Zs]:{primaries:e,whitePoint:a,transfer:Ec,toXYZ:B_,fromXYZ:H_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:a,transfer:Bt,toXYZ:B_,fromXYZ:H_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),r}const Tt=G1();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ds;class k1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ds===void 0&&(Ds=Tc("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Ds}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tc("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=ba(u[c]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ba(n[a]/255)*255):n[a]=ba(n[a]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X1=0;class rm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?u.push(uh(o[c].image)):u.push(uh(o[c]))}else u=uh(o);a.url=u}return n||(e.images[this.uuid]=a),a}}function uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?k1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let q1=0;const ch=new se;class Bn extends to{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,a=ya,o=ya,u=Fn,c=Hr,f=Ni,p=xi,h=Bn.DEFAULT_ANISOTROPY,v=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Ml(),this.name="",this.source=new rm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ip:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ip:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=hS;Bn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,a=0,o=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,u;const p=e.elements,h=p[0],v=p[4],g=p[8],_=p[1],S=p[5],E=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(h+1)/2,N=(S+1)/2,F=(x+1)/2,z=(v+_)/4,U=(g+T)/4,j=(E+M)/4;return L>N&&L>F?L<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(L),o=z/a,u=U/a):N>F?N<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(N),a=z/o,u=j/o):F<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(F),a=U/u,o=j/u),this.set(a,o,u,n),this}let D=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(g-T)/D,this.z=(_-v)/D,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W1 extends to{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const o={width:e,height:n,depth:a.depth},u=new Bn(o);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new rm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends W1{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class MS extends Bn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j1 extends Bn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ri):Ri.fromBufferAttribute(u,c),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Gu.copy(a.boundingBox)),Gu.applyMatrix4(e.matrixWorld),this.union(Gu)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),ku.subVectors(this.max,il),Ls.subVectors(e.a,il),Us.subVectors(e.b,il),Ns.subVectors(e.c,il),ir.subVectors(Us,Ls),ar.subVectors(Ns,Us),Lr.subVectors(Ls,Ns);let n=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Lr.z,Lr.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Lr.z,0,-Lr.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Lr.y,Lr.x,0];return!fh(n,Ls,Us,Ns,ku)||(n=[1,0,0,0,1,0,0,0,1],!fh(n,Ls,Us,Ns,ku))?!1:(Xu.crossVectors(ir,ar),n=[Xu.x,Xu.y,Xu.z],fh(n,Ls,Us,Ns,ku))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new se,new se,new se,new se,new se,new se,new se,new se],Ri=new se,Gu=new bl,Ls=new se,Us=new se,Ns=new se,ir=new se,ar=new se,Lr=new se,il=new se,ku=new se,Xu=new se,Ur=new se;function fh(r,e,n,a,o){for(let u=0,c=r.length-3;u<=c;u+=3){Ur.fromArray(r,u);const f=o.x*Math.abs(Ur.x)+o.y*Math.abs(Ur.y)+o.z*Math.abs(Ur.z),p=e.dot(Ur),h=n.dot(Ur),v=a.dot(Ur);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>f)return!1}return!0}const Y1=new bl,al=new se,dh=new se;class sm{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):Y1.setFromPoints(e).getCenter(a);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,a.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const n=al.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(al,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(dh)),this.expandByPoint(al.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new se,hh=new se,qu=new se,rr=new se,ph=new se,Wu=new se,mh=new se;class K1{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ga.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,n),ga.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){hh.copy(e).add(n).multiplyScalar(.5),qu.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(hh);const u=e.distanceTo(n)*.5,c=-this.direction.dot(qu),f=rr.dot(this.direction),p=-rr.dot(qu),h=rr.lengthSq(),v=Math.abs(1-c*c);let g,_,S,E;if(v>0)if(g=c*p-f,_=c*f-p,E=u*v,g>=0)if(_>=-E)if(_<=E){const T=1/v;g*=T,_*=T,S=g*(g+c*_+2*f)+_*(c*g+_+2*p)+h}else _=u,g=Math.max(0,-(c*_+f)),S=-g*g+_*(_+2*p)+h;else _=-u,g=Math.max(0,-(c*_+f)),S=-g*g+_*(_+2*p)+h;else _<=-E?(g=Math.max(0,-(-c*u+f)),_=g>0?-u:Math.min(Math.max(-u,-p),u),S=-g*g+_*(_+2*p)+h):_<=E?(g=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+h):(g=Math.max(0,-(c*u+f)),_=g>0?u:Math.min(Math.max(-u,-p),u),S=-g*g+_*(_+2*p)+h);else _=c>0?-u:u,g=Math.max(0,-(c*_+f)),S=-g*g+_*(_+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(hh).addScaledVector(qu,_),S}intersectSphere(e,n){ga.subVectors(e.center,this.origin);const a=ga.dot(this.direction),o=ga.dot(ga)-a*a,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,u,c,f,p;const h=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(a=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(a=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),v>=0?(u=(e.min.y-_.y)*v,c=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,c=(e.min.y-_.y)*v),a>c||u>o||((u>a||isNaN(a))&&(a=u),(c<o||isNaN(o))&&(o=c),g>=0?(f=(e.min.z-_.z)*g,p=(e.max.z-_.z)*g):(f=(e.max.z-_.z)*g,p=(e.min.z-_.z)*g),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,n,a,o,u){ph.subVectors(n,e),Wu.subVectors(a,e),mh.crossVectors(ph,Wu);let c=this.direction.dot(mh),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;rr.subVectors(this.origin,e);const p=f*this.direction.dot(Wu.crossVectors(rr,Wu));if(p<0)return null;const h=f*this.direction.dot(ph.cross(rr));if(h<0||p+h>c)return null;const v=-f*rr.dot(mh);return v<0?null:this.at(v/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,n,a,o,u,c,f,p,h,v,g,_,S,E,T,M){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,c,f,p,h,v,g,_,S,E,T,M)}set(e,n,a,o,u,c,f,p,h,v,g,_,S,E,T,M){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=o,x[1]=u,x[5]=c,x[9]=f,x[13]=p,x[2]=h,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),u=1/Os.setFromMatrixColumn(e,1).length(),c=1/Os.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,u=e.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(o),h=Math.sin(o),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const _=c*v,S=c*g,E=f*v,T=f*g;n[0]=p*v,n[4]=-p*g,n[8]=h,n[1]=S+E*h,n[5]=_-T*h,n[9]=-f*p,n[2]=T-_*h,n[6]=E+S*h,n[10]=c*p}else if(e.order==="YXZ"){const _=p*v,S=p*g,E=h*v,T=h*g;n[0]=_+T*f,n[4]=E*f-S,n[8]=c*h,n[1]=c*g,n[5]=c*v,n[9]=-f,n[2]=S*f-E,n[6]=T+_*f,n[10]=c*p}else if(e.order==="ZXY"){const _=p*v,S=p*g,E=h*v,T=h*g;n[0]=_-T*f,n[4]=-c*g,n[8]=E+S*f,n[1]=S+E*f,n[5]=c*v,n[9]=T-_*f,n[2]=-c*h,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const _=c*v,S=c*g,E=f*v,T=f*g;n[0]=p*v,n[4]=E*h-S,n[8]=_*h+T,n[1]=p*g,n[5]=T*h+_,n[9]=S*h-E,n[2]=-h,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const _=c*p,S=c*h,E=f*p,T=f*h;n[0]=p*v,n[4]=T-_*g,n[8]=E*g+S,n[1]=g,n[5]=c*v,n[9]=-f*v,n[2]=-h*v,n[6]=S*g+E,n[10]=_-T*g}else if(e.order==="XZY"){const _=c*p,S=c*h,E=f*p,T=f*h;n[0]=p*v,n[4]=-g,n[8]=h*v,n[1]=_*g+T,n[5]=c*v,n[9]=S*g-E,n[2]=E*g-S,n[6]=f*v,n[10]=T*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z1,e,$1)}lookAt(e,n,a){const o=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),sr.crossVectors(a,ni),sr.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),sr.crossVectors(a,ni)),sr.normalize(),ju.crossVectors(ni,sr),o[0]=sr.x,o[4]=ju.x,o[8]=ni.x,o[1]=sr.y,o[5]=ju.y,o[9]=ni.y,o[2]=sr.z,o[6]=ju.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,c=a[0],f=a[4],p=a[8],h=a[12],v=a[1],g=a[5],_=a[9],S=a[13],E=a[2],T=a[6],M=a[10],x=a[14],D=a[3],L=a[7],N=a[11],F=a[15],z=o[0],U=o[4],j=o[8],A=o[12],w=o[1],H=o[5],K=o[9],$=o[13],ue=o[2],ce=o[6],I=o[10],V=o[14],ne=o[3],Me=o[7],ye=o[11],O=o[15];return u[0]=c*z+f*w+p*ue+h*ne,u[4]=c*U+f*H+p*ce+h*Me,u[8]=c*j+f*K+p*I+h*ye,u[12]=c*A+f*$+p*V+h*O,u[1]=v*z+g*w+_*ue+S*ne,u[5]=v*U+g*H+_*ce+S*Me,u[9]=v*j+g*K+_*I+S*ye,u[13]=v*A+g*$+_*V+S*O,u[2]=E*z+T*w+M*ue+x*ne,u[6]=E*U+T*H+M*ce+x*Me,u[10]=E*j+T*K+M*I+x*ye,u[14]=E*A+T*$+M*V+x*O,u[3]=D*z+L*w+N*ue+F*ne,u[7]=D*U+L*H+N*ce+F*Me,u[11]=D*j+L*K+N*I+F*ye,u[15]=D*A+L*$+N*V+F*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],u=e[12],c=e[1],f=e[5],p=e[9],h=e[13],v=e[2],g=e[6],_=e[10],S=e[14],E=e[3],T=e[7],M=e[11],x=e[15],D=p*S-h*_,L=f*S-h*g,N=f*_-p*g,F=c*S-h*v,z=c*_-p*v,U=c*g-f*v;return n*(T*D-M*L+x*N)-a*(E*D-M*F+x*z)+o*(E*L-T*F+x*U)-u*(E*N-T*z+M*U)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],c=e[4],f=e[5],p=e[6],h=e[7],v=e[8],g=e[9],_=e[10],S=e[11],E=e[12],T=e[13],M=e[14],x=e[15],D=g*M*h-T*_*h+T*p*S-f*M*S-g*p*x+f*_*x,L=E*_*h-v*M*h-E*p*S+c*M*S+v*p*x-c*_*x,N=v*T*h-E*g*h+E*f*S-c*T*S-v*f*x+c*g*x,F=E*g*p-v*T*p-E*f*_+c*T*_+v*f*M-c*g*M,z=n*D+a*L+o*N+u*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return e[0]=D*U,e[1]=(T*_*u-g*M*u-T*o*S+a*M*S+g*o*x-a*_*x)*U,e[2]=(f*M*u-T*p*u+T*o*h-a*M*h-f*o*x+a*p*x)*U,e[3]=(g*p*u-f*_*u-g*o*h+a*_*h+f*o*S-a*p*S)*U,e[4]=L*U,e[5]=(v*M*u-E*_*u+E*o*S-n*M*S-v*o*x+n*_*x)*U,e[6]=(E*p*u-c*M*u-E*o*h+n*M*h+c*o*x-n*p*x)*U,e[7]=(c*_*u-v*p*u+v*o*h-n*_*h-c*o*S+n*p*S)*U,e[8]=N*U,e[9]=(E*g*u-v*T*u-E*a*S+n*T*S+v*a*x-n*g*x)*U,e[10]=(c*T*u-E*f*u+E*a*h-n*T*h-c*a*x+n*f*x)*U,e[11]=(v*f*u-c*g*u-v*a*h+n*g*h+c*a*S-n*f*S)*U,e[12]=F*U,e[13]=(v*T*o-E*g*o+E*a*_-n*T*_-v*a*M+n*g*M)*U,e[14]=(E*f*o-c*T*o-E*a*p+n*T*p+c*a*M-n*f*M)*U,e[15]=(c*g*o-v*f*o+v*a*p-n*g*p-c*a*_+n*f*_)*U,this}scale(e){const n=this.elements,a=e.x,o=e.y,u=e.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,c=e.x,f=e.y,p=e.z,h=u*c,v=u*f;return this.set(h*c+a,h*f-o*p,h*p+o*f,0,h*f+o*p,v*f+a,v*p-o*c,0,h*p-o*f,v*p+o*c,u*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,u,c){return this.set(1,a,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,u=n._x,c=n._y,f=n._z,p=n._w,h=u+u,v=c+c,g=f+f,_=u*h,S=u*v,E=u*g,T=c*v,M=c*g,x=f*g,D=p*h,L=p*v,N=p*g,F=a.x,z=a.y,U=a.z;return o[0]=(1-(T+x))*F,o[1]=(S+N)*F,o[2]=(E-L)*F,o[3]=0,o[4]=(S-N)*z,o[5]=(1-(_+x))*z,o[6]=(M+D)*z,o[7]=0,o[8]=(E+L)*U,o[9]=(M-D)*U,o[10]=(1-(_+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let u=Os.set(o[0],o[1],o[2]).length();const c=Os.set(o[4],o[5],o[6]).length(),f=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),Ci.copy(this);const h=1/u,v=1/c,g=1/f;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,n.setFromRotationMatrix(Ci),a.x=u,a.y=c,a.z=f,this}makePerspective(e,n,a,o,u,c,f=qi,p=!1){const h=this.elements,v=2*u/(n-e),g=2*u/(a-o),_=(n+e)/(n-e),S=(a+o)/(a-o);let E,T;if(p)E=u/(c-u),T=c*u/(c-u);else if(f===qi)E=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(f===bc)E=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,o,u,c,f=qi,p=!1){const h=this.elements,v=2/(n-e),g=2/(a-o),_=-(n+e)/(n-e),S=-(a+o)/(a-o);let E,T;if(p)E=1/(c-u),T=c/(c-u);else if(f===qi)E=-2/(c-u),T=-(c+u)/(c-u);else if(f===bc)E=-1/(c-u),T=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Os=new se,Ci=new hn,Z1=new se(0,0,0),$1=new se(1,1,1),sr=new se,ju=new se,ni=new se,V_=new hn,G_=new El;class wa{constructor(e=0,n=0,a=0,o=wa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,u=o[0],c=o[4],f=o[8],p=o[1],h=o[5],v=o[9],g=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return V_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wa.DEFAULT_ORDER="XYZ";class ES{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q1=0;const k_=new se,Ps=new El,va=new hn,Yu=new se,rl=new se,J1=new se,eA=new El,X_=new se(1,0,0),q_=new se(0,1,0),W_=new se(0,0,1),j_={type:"added"},tA={type:"removed"},Fs={type:"childadded",child:null},gh={type:"childremoved",child:null};class ai extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new se,n=new wa,a=new El,o=new se(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new dt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ES,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(X_,e)}rotateY(e){return this.rotateOnAxis(q_,e)}rotateZ(e){return this.rotateOnAxis(W_,e)}translateOnAxis(e,n){return k_.copy(e).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(X_,e)}translateY(e){return this.translateOnAxis(q_,e)}translateZ(e){return this.translateOnAxis(W_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Yu.copy(e):Yu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(rl,Yu,this.up):va.lookAt(Yu,rl,this.up),this.quaternion.setFromRotationMatrix(va),o&&(va.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(va),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tA),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,J1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,eA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const g=p[h];u(e.shapes,g)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(u(e.materials,this.material[p]));o.material=f}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(u(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),v=c(e.images),g=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),v.length>0&&(a.images=v),g.length>0&&(a.shapes=g),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function c(f){const p=[];for(const h in f){const v=f[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}ai.DEFAULT_UP=new se(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new se,_a=new se,vh=new se,xa=new se,Is=new se,zs=new se,Y_=new se,_h=new se,xh=new se,Sh=new se,yh=new sn,Mh=new sn,Eh=new sn;class Li{constructor(e=new se,n=new se,a=new se){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),wi.subVectors(e,n),o.cross(wi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,a,o,u){wi.subVectors(o,n),_a.subVectors(a,n),vh.subVectors(e,n);const c=wi.dot(wi),f=wi.dot(_a),p=wi.dot(vh),h=_a.dot(_a),v=_a.dot(vh),g=c*h-f*f;if(g===0)return u.set(0,0,0),null;const _=1/g,S=(h*p-f*v)*_,E=(c*v-f*p)*_;return u.set(1-S-E,E,S)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,n,a,o,u,c,f,p){return this.getBarycoord(e,n,a,o,xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,xa.x),p.addScaledVector(c,xa.y),p.addScaledVector(f,xa.z),p)}static getInterpolatedAttribute(e,n,a,o,u,c){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(e,n),Mh.fromBufferAttribute(e,a),Eh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(yh,u.x),c.addScaledVector(Mh,u.y),c.addScaledVector(Eh,u.z),c}static isFrontFacing(e,n,a,o){return wi.subVectors(a,n),_a.subVectors(e,n),wi.cross(_a).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),wi.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,u){return Li.getInterpolation(e,this.a,this.b,this.c,n,a,o,u)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,u=this.c;let c,f;Is.subVectors(o,a),zs.subVectors(u,a),_h.subVectors(e,a);const p=Is.dot(_h),h=zs.dot(_h);if(p<=0&&h<=0)return n.copy(a);xh.subVectors(e,o);const v=Is.dot(xh),g=zs.dot(xh);if(v>=0&&g<=v)return n.copy(o);const _=p*g-v*h;if(_<=0&&p>=0&&v<=0)return c=p/(p-v),n.copy(a).addScaledVector(Is,c);Sh.subVectors(e,u);const S=Is.dot(Sh),E=zs.dot(Sh);if(E>=0&&S<=E)return n.copy(u);const T=S*h-p*E;if(T<=0&&h>=0&&E<=0)return f=h/(h-E),n.copy(a).addScaledVector(zs,f);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return Y_.subVectors(u,o),f=(g-v)/(g-v+(S-E)),n.copy(o).addScaledVector(Y_,f);const x=1/(M+T+_);return c=T*x,f=_*x,n.copy(a).addScaledVector(Is,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function bh(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Ht{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Tt.workingColorSpace){if(e=V1(e,1),n=Mt(n,0,1),a=Mt(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=bh(c,u,e+1/3),this.g=bh(c,u,e),this.b=bh(c,u,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=_i){function a(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const a=bS[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Tt.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(On.copy(this),n);const a=On.r,o=On.g,u=On.b,c=Math.max(a,o,u),f=Math.min(a,o,u);let p,h;const v=(f+c)/2;if(f===c)p=0,h=0;else{const g=c-f;switch(h=v<=.5?g/(c+f):g/(2-c-f),c){case a:p=(o-u)/g+(o<u?6:0);break;case o:p=(u-a)/g+2;break;case u:p=(a-o)/g+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(On.copy(this),n),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=_i){Tt.workingToColorSpace(On.copy(this),e);const n=On.r,a=On.g,o=On.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(Ku);const a=sh(or.h,Ku.h,n),o=sh(or.s,Ku.s,n),u=sh(or.l,Ku.l,n);return this.setHSL(a,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ht;Ht.NAMES=bS;let nA=0;class Lc extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=qs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=jh,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(a.blending=this.blending),this.side!==fr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Wh&&(a.blendSrc=this.blendSrc),this.blendDst!==jh&&(a.blendDst=this.blendDst),this.blendEquation!==zr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const c=[];for(const f in u){const p=u[f];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class TS extends Lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=rS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new se,Zu=new Vt;let iA=0;class Yi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=O_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Zu.fromBufferAttribute(this,n),Zu.applyMatrix3(e),this.setXY(n,Zu.x,Zu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=nl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=nl(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=nl(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=nl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=nl(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,u){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array),u=jn(u,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O_&&(e.usage=this.usage),e}}class AS extends Yi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class RS extends Yi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ta extends Yi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let aA=0;const gi=new hn,Th=new ai,Bs=new se,ii=new bl,sl=new bl,xn=new se;class Da extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yS(e)?RS:AS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new dt().getNormalMatrix(e);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,n,a){return gi.makeTranslation(e,n,a),this.applyMatrix4(gi),this}scale(e,n,a){return gi.makeScale(e,n,a),this.applyMatrix4(gi),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ta(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const a=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];sl.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ii.min,sl.min),ii.expandByPoint(xn),xn.addVectors(ii.max,sl.max),ii.expandByPoint(xn)):(ii.expandByPoint(sl.min),ii.expandByPoint(sl.max))}ii.getCenter(a);let o=0;for(let u=0,c=e.count;u<c;u++)xn.fromBufferAttribute(e,u),o=Math.max(o,a.distanceToSquared(xn));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],p=this.morphTargetsRelative;for(let h=0,v=f.count;h<v;h++)xn.fromBufferAttribute(f,h),p&&(Bs.fromBufferAttribute(e,h),xn.add(Bs)),o=Math.max(o,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<a.count;j++)f[j]=new se,p[j]=new se;const h=new se,v=new se,g=new se,_=new Vt,S=new Vt,E=new Vt,T=new se,M=new se;function x(j,A,w){h.fromBufferAttribute(a,j),v.fromBufferAttribute(a,A),g.fromBufferAttribute(a,w),_.fromBufferAttribute(u,j),S.fromBufferAttribute(u,A),E.fromBufferAttribute(u,w),v.sub(h),g.sub(h),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(H),f[j].add(T),f[A].add(T),f[w].add(T),p[j].add(M),p[A].add(M),p[w].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,A=D.length;j<A;++j){const w=D[j],H=w.start,K=w.count;for(let $=H,ue=H+K;$<ue;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new se,N=new se,F=new se,z=new se;function U(j){F.fromBufferAttribute(o,j),z.copy(F);const A=f[j];L.copy(A),L.sub(F.multiplyScalar(F.dot(A))).normalize(),N.crossVectors(z,A);const H=N.dot(p[j])<0?-1:1;c.setXYZW(j,L.x,L.y,L.z,H)}for(let j=0,A=D.length;j<A;++j){const w=D[j],H=w.start,K=w.count;for(let $=H,ue=H+K;$<ue;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Yi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new se,u=new se,c=new se,f=new se,p=new se,h=new se,v=new se,g=new se;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),T=e.getX(_+1),M=e.getX(_+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,M),v.subVectors(c,u),g.subVectors(o,u),v.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),h.fromBufferAttribute(a,M),f.add(v),p.add(v),h.add(v),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),v.subVectors(c,u),g.subVectors(o,u),v.cross(g),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,p){const h=f.array,v=f.itemSize,g=f.normalized,_=new h.constructor(p.length*v);let S=0,E=0;for(let T=0,M=p.length;T<M;T++){f.isInterleavedBufferAttribute?S=p[T]*f.data.stride+f.offset:S=p[T]*v;for(let x=0;x<v;x++)_[E++]=h[S++]}return new Yi(_,v,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Da,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,a);n.setAttribute(f,h)}const u=this.morphAttributes;for(const f in u){const p=[],h=u[f];for(let v=0,g=h.length;v<g;v++){const _=h[v],S=e(_,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(n))}const u=e.morphAttributes;for(const h in u){const v=[],g=u[h];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,v=c.length;h<v;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K_=new hn,Nr=new K1,$u=new sm,Z_=new se,Qu=new se,Ju=new se,ec=new se,Ah=new se,tc=new se,$_=new se,nc=new se;class Zi extends ai{constructor(e=new Da,n=new TS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const f=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(u&&f){tc.set(0,0,0);for(let p=0,h=u.length;p<h;p++){const v=f[p],g=u[p];v!==0&&(Ah.fromBufferAttribute(g,e),c?tc.addScaledVector(Ah,v):tc.addScaledVector(Ah.sub(n),v))}n.add(tc)}return n}raycast(e,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),$u.copy(a.boundingSphere),$u.applyMatrix4(u),Nr.copy(e.ray).recast(e.near),!($u.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere($u,Z_)===null||Nr.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(K_.copy(u).invert(),Nr.copy(e.ray).applyMatrix4(K_),!(a.boundingBox!==null&&Nr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,a){let o;const u=this.geometry,c=this.material,f=u.index,p=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,_=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=c[M.materialIndex],D=Math.max(M.start,S.start),L=Math.min(f.count,Math.min(M.start+M.count,S.start+S.count));for(let N=D,F=L;N<F;N+=3){const z=f.getX(N),U=f.getX(N+1),j=f.getX(N+2);o=ic(this,x,e,a,h,v,g,z,U,j),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let M=E,x=T;M<x;M+=3){const D=f.getX(M),L=f.getX(M+1),N=f.getX(M+2);o=ic(this,c,e,a,h,v,g,D,L,N),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=c[M.materialIndex],D=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let N=D,F=L;N<F;N+=3){const z=N,U=N+1,j=N+2;o=ic(this,x,e,a,h,v,g,z,U,j),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let M=E,x=T;M<x;M+=3){const D=M,L=M+1,N=M+2;o=ic(this,c,e,a,h,v,g,D,L,N),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function rA(r,e,n,a,o,u,c,f){let p;if(e.side===Yn?p=a.intersectTriangle(c,u,o,!0,f):p=a.intersectTriangle(o,u,c,e.side===fr,f),p===null)return null;nc.copy(f),nc.applyMatrix4(r.matrixWorld);const h=n.ray.origin.distanceTo(nc);return h<n.near||h>n.far?null:{distance:h,point:nc.clone(),object:r}}function ic(r,e,n,a,o,u,c,f,p,h){r.getVertexPosition(f,Qu),r.getVertexPosition(p,Ju),r.getVertexPosition(h,ec);const v=rA(r,e,n,a,Qu,Ju,ec,$_);if(v){const g=new se;Li.getBarycoord($_,Qu,Ju,ec,g),o&&(v.uv=Li.getInterpolatedAttribute(o,f,p,h,g,new Vt)),u&&(v.uv1=Li.getInterpolatedAttribute(u,f,p,h,g,new Vt)),c&&(v.normal=Li.getInterpolatedAttribute(c,f,p,h,g,new se),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:p,c:h,normal:new se,materialIndex:0};Li.getNormal(Qu,Ju,ec,_.normal),v.face=_,v.barycoord=g}return v}class Tl extends Da{constructor(e=1,n=1,a=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:c};const f=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],h=[],v=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,a,n,e,c,u,0),E("z","y","x",1,-1,a,n,-e,c,u,1),E("x","z","y",1,1,e,a,n,o,c,2),E("x","z","y",1,-1,e,a,-n,o,c,3),E("x","y","z",1,-1,e,n,a,o,u,4),E("x","y","z",-1,-1,e,n,-a,o,u,5),this.setIndex(p),this.setAttribute("position",new Ta(h,3)),this.setAttribute("normal",new Ta(v,3)),this.setAttribute("uv",new Ta(g,2));function E(T,M,x,D,L,N,F,z,U,j,A){const w=N/U,H=F/j,K=N/2,$=F/2,ue=z/2,ce=U+1,I=j+1;let V=0,ne=0;const Me=new se;for(let ye=0;ye<I;ye++){const O=ye*H-$;for(let ee=0;ee<ce;ee++){const me=ee*w-K;Me[T]=me*D,Me[M]=O*L,Me[x]=ue,h.push(Me.x,Me.y,Me.z),Me[T]=0,Me[M]=0,Me[x]=z>0?1:-1,v.push(Me.x,Me.y,Me.z),g.push(ee/U),g.push(1-ye/j),V+=1}}for(let ye=0;ye<j;ye++)for(let O=0;O<U;O++){const ee=_+O+ce*ye,me=_+O+ce*(ye+1),Re=_+(O+1)+ce*(ye+1),He=_+(O+1)+ce*ye;p.push(ee,me,He),p.push(me,Re,He),ne+=6}f.addGroup(S,ne,A),S+=ne,_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function zn(r){const e={};for(let n=0;n<r.length;n++){const a=$s(r[n]);for(const o in a)e[o]=a[o]}return e}function sA(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function CS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const oA={clone:$s,merge:zn};var lA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lA,this.fragmentShader=uA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=sA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class wS extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new se,Q_=new Vt,J_=new Vt;class Di extends wS{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ip*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ip*2*Math.atan(Math.tan(rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,Q_,J_),n.subVectors(J_,Q_)}setViewOffset(e,n,a,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*a/h,o*=c.width/p,a*=c.height/h}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class cA extends ai{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Di(Hs,Vs,e,n);o.layers=this.layers,this.add(o);const u=new Di(Hs,Vs,e,n);u.layers=this.layers,this.add(u);const c=new Di(Hs,Vs,e,n);c.layers=this.layers,this.add(c);const f=new Di(Hs,Vs,e,n);f.layers=this.layers,this.add(f);const p=new Di(Hs,Vs,e,n);p.layers=this.layers,this.add(p);const h=new Di(Hs,Vs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,u,c,f,p]=n;for(const h of n)this.remove(h);if(e===qi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,p,h,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,u),e.setRenderTarget(a,1,o),e.render(n,c),e.setRenderTarget(a,2,o),e.render(n,f),e.setRenderTarget(a,3,o),e.render(n,p),e.setRenderTarget(a,4,o),e.render(n,h),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(n,v),e.setRenderTarget(g,_,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class DS extends Bn{constructor(e=[],n=kr,a,o,u,c,f,p,h,v){super(e,n,a,o,u,c,f,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new DS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Tl(5,5,5),u=new Oi({name:"CubemapFromEquirect",uniforms:$s(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Yn,blending:Ea});u.uniforms.tEquirect.value=n;const c=new Zi(o,u),f=n.minFilter;return n.minFilter===Hr&&(n.minFilter=Fn),new cA(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,o);e.setRenderTarget(u)}}class ac extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fA={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,u=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const M=n.getJointPose(T,a),x=this._getHandJoint(h,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&_>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(fA)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=u!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new ac;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class dA extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wa,this.environmentIntensity=1,this.environmentRotation=new wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hA extends Bn{constructor(e=null,n=1,a=1,o,u,c,f,p,h=Dn,v=Dn,g,_){super(null,c,f,p,h,v,o,u,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new se,pA=new se,mA=new dt;class Ir{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Ch.subVectors(a,n).cross(pA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Ch),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||mA.getNormalMatrix(e),o=this.coplanarPoint(Ch).applyMatrix4(e),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new sm,gA=new Vt(.5,.5),rc=new se;class US{constructor(e=new Ir,n=new Ir,a=new Ir,o=new Ir,u=new Ir,c=new Ir){this.planes=[e,n,a,o,u,c]}set(e,n,a,o,u,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(u),f[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=qi,a=!1){const o=this.planes,u=e.elements,c=u[0],f=u[1],p=u[2],h=u[3],v=u[4],g=u[5],_=u[6],S=u[7],E=u[8],T=u[9],M=u[10],x=u[11],D=u[12],L=u[13],N=u[14],F=u[15];if(o[0].setComponents(h-c,S-v,x-E,F-D).normalize(),o[1].setComponents(h+c,S+v,x+E,F+D).normalize(),o[2].setComponents(h+f,S+g,x+T,F+L).normalize(),o[3].setComponents(h-f,S-g,x-T,F-L).normalize(),a)o[4].setComponents(p,_,M,N).normalize(),o[5].setComponents(h-p,S-_,x-M,F-N).normalize();else if(o[4].setComponents(h-p,S-_,x-M,F-N).normalize(),n===qi)o[5].setComponents(h+p,S+_,x+M,F+N).normalize();else if(n===bc)o[5].setComponents(p,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=gA.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(rc.x=o.normal.x>0?e.max.x:e.min.x,rc.y=o.normal.y>0?e.max.y:e.min.y,rc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _l extends Bn{constructor(e,n,a=Ki,o,u,c,f=Dn,p=Dn,h,v=Ca,g=1){if(v!==Ca&&v!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,o,u,c,f,p,v,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vA extends _l{constructor(e,n=Ki,a=kr,o,u,c=Dn,f=Dn,p,h=Ca){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,a,o,u,c,f,p,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class NS extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Al extends Da{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const u=e/2,c=n/2,f=Math.floor(a),p=Math.floor(o),h=f+1,v=p+1,g=e/f,_=n/p,S=[],E=[],T=[],M=[];for(let x=0;x<v;x++){const D=x*_-c;for(let L=0;L<h;L++){const N=L*g-u;E.push(N,-D,0),T.push(0,0,1),M.push(L/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<f;D++){const L=D+h*x,N=D+h*(x+1),F=D+1+h*(x+1),z=D+1+h*x;S.push(L,N,z),S.push(N,F,z)}this.setIndex(S),this.setAttribute("position",new Ta(E,3)),this.setAttribute("normal",new Ta(T,3)),this.setAttribute("uv",new Ta(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}class _A extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xA extends Lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SA extends Lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class om extends wS{constructor(e=-1,n=1,a=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-e,c=a+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,c=u+h*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yA extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ex(r,e,n,a){const o=MA(a);switch(n){case _S:return r*e;case SS:return r*e/o.components*o.byteLength;case em:return r*e/o.components*o.byteLength;case Ks:return r*e*2/o.components*o.byteLength;case tm:return r*e*2/o.components*o.byteLength;case xS:return r*e*3/o.components*o.byteLength;case Ni:return r*e*4/o.components*o.byteLength;case nm:return r*e*4/o.components*o.byteLength;case dc:case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sp:case lp:return Math.max(r,16)*Math.max(e,8)/4;case rp:case op:return Math.max(r,8)*Math.max(e,8)/2;case up:case cp:case dp:case hp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fp:case pp:case mp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case bp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Lp:case Up:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Np:case Op:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Pp:case Fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MA(r){switch(r){case xi:case pS:return{byteLength:1,components:1};case ml:case mS:case Ra:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case Ki:case $p:case Xi:return{byteLength:4,components:1};case gS:case vS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);function OS(){let r=null,e=!1,n=null,a=null;function o(u,c){n(u,c),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){r=u}}}function EA(r){const e=new WeakMap;function n(f,p){const h=f.array,v=f.usage,g=h.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,h,v),f.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,h){const v=p.array,g=p.updateRanges;if(r.bindBuffer(h,f),g.length===0)r.bufferSubData(h,0,v);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],T=g[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const T=g[S];r.bufferSubData(h,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:o,remove:u,update:c}}var bA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TA=`#ifdef USE_ALPHAHASH
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
#endif`,AA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DA=`#ifdef USE_AOMAP
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
#endif`,LA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UA=`#ifdef USE_BATCHING
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
#endif`,NA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IA=`#ifdef USE_IRIDESCENCE
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
#endif`,zA=`#ifdef USE_BUMPMAP
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
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jA=`#define PI 3.141592653589793
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
} // validated`,YA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KA=`vec3 transformedNormal = objectNormal;
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
#endif`,ZA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$A=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eR="gl_FragColor = linearToOutputTexel( gl_FragColor );",tR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nR=`#ifdef USE_ENVMAP
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
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aR=`#ifdef USE_ENVMAP
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
#endif`,rR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
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
#endif`,oR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fR=`#ifdef USE_GRADIENTMAP
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
}`,dR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mR=`uniform bool receiveShadow;
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
#endif`,gR=`#ifdef USE_ENVMAP
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
#endif`,vR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_R=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yR=`PhysicalMaterial material;
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
#endif`,MR=`uniform sampler2D dfgLUT;
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
}`,ER=`
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
#endif`,bR=`#if defined( RE_IndirectDiffuse )
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
#endif`,TR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NR=`#if defined( USE_POINTS_UV )
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
#endif`,OR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BR=`#ifdef USE_MORPHTARGETS
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
#endif`,HR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WR=`#ifdef USE_NORMALMAP
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
#endif`,jR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$R=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lC=`float getShadowMask() {
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
}`,uC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cC=`#ifdef USE_SKINNING
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
#endif`,fC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dC=`#ifdef USE_SKINNING
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
#endif`,hC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vC=`#ifdef USE_TRANSMISSION
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
#endif`,_C=`#ifdef USE_TRANSMISSION
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
#endif`,xC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bC=`uniform sampler2D t2D;
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
}`,TC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wC=`#include <common>
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
}`,DC=`#if DEPTH_PACKING == 3200
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
}`,LC=`#define DISTANCE
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
}`,UC=`#define DISTANCE
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
}`,NC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PC=`uniform float scale;
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
}`,FC=`uniform vec3 diffuse;
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
}`,IC=`#include <common>
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
}`,zC=`uniform vec3 diffuse;
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
}`,BC=`#define LAMBERT
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
}`,HC=`#define LAMBERT
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
}`,VC=`#define MATCAP
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
}`,GC=`#define MATCAP
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
}`,kC=`#define NORMAL
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
}`,XC=`#define NORMAL
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
}`,qC=`#define PHONG
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
}`,WC=`#define PHONG
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
}`,jC=`#define STANDARD
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
}`,YC=`#define STANDARD
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
}`,KC=`#define TOON
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
}`,ZC=`#define TOON
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
}`,$C=`uniform float size;
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
}`,QC=`uniform vec3 diffuse;
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
}`,JC=`#include <common>
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
}`,e3=`uniform vec3 color;
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
}`,t3=`uniform float rotation;
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
}`,n3=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:bA,alphahash_pars_fragment:TA,alphamap_fragment:AA,alphamap_pars_fragment:RA,alphatest_fragment:CA,alphatest_pars_fragment:wA,aomap_fragment:DA,aomap_pars_fragment:LA,batching_pars_vertex:UA,batching_vertex:NA,begin_vertex:OA,beginnormal_vertex:PA,bsdfs:FA,iridescence_fragment:IA,bumpmap_pars_fragment:zA,clipping_planes_fragment:BA,clipping_planes_pars_fragment:HA,clipping_planes_pars_vertex:VA,clipping_planes_vertex:GA,color_fragment:kA,color_pars_fragment:XA,color_pars_vertex:qA,color_vertex:WA,common:jA,cube_uv_reflection_fragment:YA,defaultnormal_vertex:KA,displacementmap_pars_vertex:ZA,displacementmap_vertex:$A,emissivemap_fragment:QA,emissivemap_pars_fragment:JA,colorspace_fragment:eR,colorspace_pars_fragment:tR,envmap_fragment:nR,envmap_common_pars_fragment:iR,envmap_pars_fragment:aR,envmap_pars_vertex:rR,envmap_physical_pars_fragment:gR,envmap_vertex:sR,fog_vertex:oR,fog_pars_vertex:lR,fog_fragment:uR,fog_pars_fragment:cR,gradientmap_pars_fragment:fR,lightmap_pars_fragment:dR,lights_lambert_fragment:hR,lights_lambert_pars_fragment:pR,lights_pars_begin:mR,lights_toon_fragment:vR,lights_toon_pars_fragment:_R,lights_phong_fragment:xR,lights_phong_pars_fragment:SR,lights_physical_fragment:yR,lights_physical_pars_fragment:MR,lights_fragment_begin:ER,lights_fragment_maps:bR,lights_fragment_end:TR,logdepthbuf_fragment:AR,logdepthbuf_pars_fragment:RR,logdepthbuf_pars_vertex:CR,logdepthbuf_vertex:wR,map_fragment:DR,map_pars_fragment:LR,map_particle_fragment:UR,map_particle_pars_fragment:NR,metalnessmap_fragment:OR,metalnessmap_pars_fragment:PR,morphinstance_vertex:FR,morphcolor_vertex:IR,morphnormal_vertex:zR,morphtarget_pars_vertex:BR,morphtarget_vertex:HR,normal_fragment_begin:VR,normal_fragment_maps:GR,normal_pars_fragment:kR,normal_pars_vertex:XR,normal_vertex:qR,normalmap_pars_fragment:WR,clearcoat_normal_fragment_begin:jR,clearcoat_normal_fragment_maps:YR,clearcoat_pars_fragment:KR,iridescence_pars_fragment:ZR,opaque_fragment:$R,packing:QR,premultiplied_alpha_fragment:JR,project_vertex:eC,dithering_fragment:tC,dithering_pars_fragment:nC,roughnessmap_fragment:iC,roughnessmap_pars_fragment:aC,shadowmap_pars_fragment:rC,shadowmap_pars_vertex:sC,shadowmap_vertex:oC,shadowmask_pars_fragment:lC,skinbase_vertex:uC,skinning_pars_vertex:cC,skinning_vertex:fC,skinnormal_vertex:dC,specularmap_fragment:hC,specularmap_pars_fragment:pC,tonemapping_fragment:mC,tonemapping_pars_fragment:gC,transmission_fragment:vC,transmission_pars_fragment:_C,uv_pars_fragment:xC,uv_pars_vertex:SC,uv_vertex:yC,worldpos_vertex:MC,background_vert:EC,background_frag:bC,backgroundCube_vert:TC,backgroundCube_frag:AC,cube_vert:RC,cube_frag:CC,depth_vert:wC,depth_frag:DC,distance_vert:LC,distance_frag:UC,equirect_vert:NC,equirect_frag:OC,linedashed_vert:PC,linedashed_frag:FC,meshbasic_vert:IC,meshbasic_frag:zC,meshlambert_vert:BC,meshlambert_frag:HC,meshmatcap_vert:VC,meshmatcap_frag:GC,meshnormal_vert:kC,meshnormal_frag:XC,meshphong_vert:qC,meshphong_frag:WC,meshphysical_vert:jC,meshphysical_frag:YC,meshtoon_vert:KC,meshtoon_frag:ZC,points_vert:$C,points_frag:QC,shadow_vert:JC,shadow_frag:e3,sprite_vert:t3,sprite_frag:n3},Pe={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Gi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gi.physical={uniforms:zn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const sc={r:0,b:0,g:0},Pr=new wa,i3=new hn;function a3(r,e,n,a,o,u,c){const f=new Ht(0);let p=u===!0?0:1,h,v,g=null,_=0,S=null;function E(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?n:e).get(N)),N}function T(L){let N=!1;const F=E(L);F===null?x(f,p):F&&F.isColor&&(x(F,1),N=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,N){const F=E(N);F&&(F.isCubeTexture||F.mapping===Dc)?(v===void 0&&(v=new Zi(new Tl(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:$s(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,U,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Pr.copy(N.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(i3.makeRotationFromEuler(Pr)),v.material.toneMapped=Tt.getTransfer(F.colorSpace)!==Bt,(g!==F||_!==F.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=F,_=F.version,S=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new Zi(new Al(2,2),new Oi({name:"BackgroundMaterial",uniforms:$s(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(F.colorSpace)!==Bt,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||_!==F.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,g=F,_=F.version,S=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,N){L.getRGB(sc,CS(r)),a.buffers.color.setClear(sc.r,sc.g,sc.b,N,c)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,N=1){f.set(L),p=N,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(f,p)},render:T,addToRenderList:M,dispose:D}}function r3(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let u=o,c=!1;function f(w,H,K,$,ue){let ce=!1;const I=g($,K,H);u!==I&&(u=I,h(u.object)),ce=S(w,$,K,ue),ce&&E(w,$,K,ue),ue!==null&&e.update(ue,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,N(w,H,K,$),ue!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return r.createVertexArray()}function h(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,H,K){const $=K.wireframe===!0;let ue=a[w.id];ue===void 0&&(ue={},a[w.id]=ue);let ce=ue[H.id];ce===void 0&&(ce={},ue[H.id]=ce);let I=ce[$];return I===void 0&&(I=_(p()),ce[$]=I),I}function _(w){const H=[],K=[],$=[];for(let ue=0;ue<n;ue++)H[ue]=0,K[ue]=0,$[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:$,object:w,attributes:{},index:null}}function S(w,H,K,$){const ue=u.attributes,ce=H.attributes;let I=0;const V=K.getAttributes();for(const ne in V)if(V[ne].location>=0){const ye=ue[ne];let O=ce[ne];if(O===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),ye===void 0||ye.attribute!==O||O&&ye.data!==O.data)return!0;I++}return u.attributesNum!==I||u.index!==$}function E(w,H,K,$){const ue={},ce=H.attributes;let I=0;const V=K.getAttributes();for(const ne in V)if(V[ne].location>=0){let ye=ce[ne];ye===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor));const O={};O.attribute=ye,ye&&ye.data&&(O.data=ye.data),ue[ne]=O,I++}u.attributes=ue,u.attributesNum=I,u.index=$}function T(){const w=u.newAttributes;for(let H=0,K=w.length;H<K;H++)w[H]=0}function M(w){x(w,0)}function x(w,H){const K=u.newAttributes,$=u.enabledAttributes,ue=u.attributeDivisors;K[w]=1,$[w]===0&&(r.enableVertexAttribArray(w),$[w]=1),ue[w]!==H&&(r.vertexAttribDivisor(w,H),ue[w]=H)}function D(){const w=u.newAttributes,H=u.enabledAttributes;for(let K=0,$=H.length;K<$;K++)H[K]!==w[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function L(w,H,K,$,ue,ce,I){I===!0?r.vertexAttribIPointer(w,H,K,ue,ce):r.vertexAttribPointer(w,H,K,$,ue,ce)}function N(w,H,K,$){T();const ue=$.attributes,ce=K.getAttributes(),I=H.defaultAttributeValues;for(const V in ce){const ne=ce[V];if(ne.location>=0){let Me=ue[V];if(Me===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const ye=Me.normalized,O=Me.itemSize,ee=e.get(Me);if(ee===void 0)continue;const me=ee.buffer,Re=ee.type,He=ee.bytesPerElement,re=Re===r.INT||Re===r.UNSIGNED_INT||Me.gpuType===$p;if(Me.isInterleavedBufferAttribute){const de=Me.data,Le=de.stride,Xe=Me.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ne.locationSize;Ve++)x(ne.location+Ve,de.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<ne.locationSize;Ve++)M(ne.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Ve=0;Ve<ne.locationSize;Ve++)L(ne.location+Ve,O/ne.locationSize,Re,ye,Le*He,(Xe+O/ne.locationSize*Ve)*He,re)}else{if(Me.isInstancedBufferAttribute){for(let de=0;de<ne.locationSize;de++)x(ne.location+de,Me.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let de=0;de<ne.locationSize;de++)M(ne.location+de);r.bindBuffer(r.ARRAY_BUFFER,me);for(let de=0;de<ne.locationSize;de++)L(ne.location+de,O/ne.locationSize,Re,ye,O*He,O/ne.locationSize*de*He,re)}}else if(I!==void 0){const ye=I[V];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(ne.location,ye);break;case 3:r.vertexAttrib3fv(ne.location,ye);break;case 4:r.vertexAttrib4fv(ne.location,ye);break;default:r.vertexAttrib1fv(ne.location,ye)}}}}D()}function F(){j();for(const w in a){const H=a[w];for(const K in H){const $=H[K];for(const ue in $)v($[ue].object),delete $[ue];delete H[K]}delete a[w]}}function z(w){if(a[w.id]===void 0)return;const H=a[w.id];for(const K in H){const $=H[K];for(const ue in $)v($[ue].object),delete $[ue];delete H[K]}delete a[w.id]}function U(w){for(const H in a){const K=a[H];if(K[w.id]===void 0)continue;const $=K[w.id];for(const ue in $)v($[ue].object),delete $[ue];delete K[w.id]}}function j(){A(),c=!0,u!==o&&(u=o,h(u.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:M,disableUnusedAttributes:D}}function s3(r,e,n){let a;function o(h){a=h}function u(h,v){r.drawArrays(a,h,v),n.update(v,a,1)}function c(h,v,g){g!==0&&(r.drawArraysInstanced(a,h,v,g),n.update(v,a,g))}function f(h,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];n.update(S,a,1)}function p(h,v,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)c(h[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(a,h,0,v,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*_[T];n.update(E,a,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function o3(r,e,n,a){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==Ni&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const j=U===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==xi&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Xi&&!j)}function p(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const v=p(h);v!==h&&(ot("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:N,maxSamples:F,samples:z}}function l3(r){const e=this;let n=null,a=0,o=!1,u=!1;const c=new Ir,f=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||a!==0||o;return o=_,a=g.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=r.get(g);if(!o||E===null||E.length===0||u&&!M)u?v(null):h();else{const D=u?0:a,L=D*4;let N=x.clippingState||null;p.value=N,N=v(E,_,L,S);for(let F=0;F!==L;++F)N[F]=n[F];x.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(g,_,S,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const x=S+T*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,N=S;L!==T;++L,N+=4)c.copy(g[L]).applyMatrix4(D,f),c.normal.toArray(M,N),M[N+3]=c.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function u3(r){let e=new WeakMap;function n(c,f){return f===tp?c.mapping=kr:f===np&&(c.mapping=Ys),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===tp||f===np)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new LS(p.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",o),n(h.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:a,dispose:u}}const cr=4,tx=[.125,.215,.35,.446,.526,.582],Br=20,c3=256,ol=new om,nx=new Ht;let wh=null,Dh=0,Lh=0,Uh=!1;const f3=new se;class ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,u={}){const{size:c=256,position:f=f3}=u;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Dh,Lh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ra,format:Ni,colorSpace:Zs,depthBuffer:!1},o=ax(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ax(e,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d3(u)),this._blurMaterial=p3(u,e,n),this._ggxMaterial=h3(u,e,n)}return o}_compileMaterial(e){const n=new Zi(new Da,e);this._renderer.compile(n,ol)}_sceneToCubeUV(e,n,a,o,u){const p=new Di(90,1,n,a),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(nx),g.toneMapping=Wi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zi(new Tl,new TS({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(nx),x=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(p.up.set(0,h[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[L],u.y,u.z)):N===1?(p.up.set(0,0,h[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[L],u.z)):(p.up.set(0,h[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[L]));const F=this._cubeSize;Gs(o,N*F,L>2?F:0,F,F),g.setRenderTarget(o),x&&g.render(T,p),g.render(e,p)}g.toneMapping=S,g.autoClear=_,e.background=D}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===kr||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;Gs(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,ol)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,h=a/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-v*v),_=0+h*1.25,S=g*_,{_lodMax:E}=this,T=this._sizeLods[a],M=3*T*(a>E-cr?a-E+cr:0),x=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=E-n,Gs(u,M,x,3*T,2*T),o.setRenderTarget(u),o.render(f,ol),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=E-a,Gs(e,M,x,3*T,2*T),o.setRenderTarget(e),o.render(f,ol)}_blur(e,n,a,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,o,"latitudinal",u),this._halfBlur(c,e,a,a,o,"longitudinal",u)}_halfBlur(e,n,a,o,u,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=h;const _=h.uniforms,S=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Br-1),T=u/E,M=isFinite(u)?1+Math.floor(v*T):Br;M>Br&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Br}`);const x=[];let D=0;for(let U=0;U<Br;++U){const j=U/T,A=Math.exp(-j*j/2);x.push(A),U===0?D+=A:U<M&&(D+=2*A)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-a;const N=this._sizeLods[o],F=3*N*(o>L-cr?o-L+cr:0),z=4*(this._cubeSize-N);Gs(n,F,z,3*N,2*N),p.setRenderTarget(n),p.render(g,ol)}}function d3(r){const e=[],n=[],a=[];let o=r;const u=r-cr+1+tx.length;for(let c=0;c<u;c++){const f=Math.pow(2,o);e.push(f);let p=1/f;c>r-cr?p=tx[c-r+cr-1]:c===0&&(p=0),n.push(p);const h=1/(f-2),v=-h,g=1+h,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,T=3,M=2,x=1,D=new Float32Array(T*E*S),L=new Float32Array(M*E*S),N=new Float32Array(x*E*S);for(let z=0;z<S;z++){const U=z%3*2/3-1,j=z>2?0:-1,A=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(A,T*E*z),L.set(_,M*E*z);const w=[z,z,z,z,z,z];N.set(w,x*E*z)}const F=new Da;F.setAttribute("position",new Yi(D,T)),F.setAttribute("uv",new Yi(L,M)),F.setAttribute("faceIndex",new Yi(N,x)),a.push(new Zi(F,null)),o>cr&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function ax(r,e,n){const a=new ji(r,e,n);return a.texture.mapping=Dc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Gs(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function h3(r,e,n){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function p3(r,e,n){const a=new Float32Array(Br),o=new se(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function rx(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function sx(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function m3(r){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===tp||p===np,v=p===kr||p===Ys;if(h||v){let g=e.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new ix(r)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return h&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new ix(r)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f){let p=0;const h=6;for(let v=0;v<h;v++)f[v]!==void 0&&p++;return p===h}function u(f){const p=f.target;p.removeEventListener("dispose",u);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function g3(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&vl("WebGLRenderer: "+a+" extension not supported."),o}}}function v3(r,e,n,a){const o={},u=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const S=u.get(_);S&&(e.remove(S),u.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(g,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(g){const _=g.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function h(g){const _=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let L=0,N=D.length;L<N;L+=3){const F=D[L+0],z=D[L+1],U=D[L+2];_.push(F,z,z,U,U,F)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,N=D.length/3-1;L<N;L+=3){const F=L+0,z=L+1,U=L+2;_.push(F,z,z,U,U,F)}}else return;const M=new(yS(_)?RS:AS)(_,1);M.version=T;const x=u.get(g);x&&e.remove(x),u.set(g,M)}function v(g){const _=u.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return u.get(g)}return{get:f,update:p,getWireframeAttribute:v}}function _3(r,e,n){let a;function o(_){a=_}let u,c;function f(_){u=_.type,c=_.bytesPerElement}function p(_,S){r.drawElements(a,S,u,_*c),n.update(S,a,1)}function h(_,S,E){E!==0&&(r.drawElementsInstanced(a,S,u,_*c,E),n.update(S,a,E))}function v(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,u,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];n.update(M,a,1)}function g(_,S,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)h(_[x]/c,S[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,u,_,0,T,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*T[D];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function x3(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=f*(u/3);break;case r.LINES:n.lines+=f*(u/2);break;case r.LINE_STRIP:n.lines+=f*(u-1);break;case r.LINE_LOOP:n.lines+=f*u;break;case r.POINTS:n.points+=f*u;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function S3(r,e,n){const a=new WeakMap,o=new sn;function u(c,f,p){const h=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=v!==void 0?v.length:0;let _=a.get(f);if(_===void 0||_.count!==g){let w=function(){j.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var S=w;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),M===!0&&(N=3);let F=f.attributes.position.count*N,z=1;F>e.maxTextureSize&&(z=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const U=new Float32Array(F*z*4*g),j=new MS(U,F,z,g);j.type=Xi,j.needsUpdate=!0;const A=N*4;for(let H=0;H<g;H++){const K=x[H],$=D[H],ue=L[H],ce=F*z*4*H;for(let I=0;I<K.count;I++){const V=I*A;E===!0&&(o.fromBufferAttribute(K,I),U[ce+V+0]=o.x,U[ce+V+1]=o.y,U[ce+V+2]=o.z,U[ce+V+3]=0),T===!0&&(o.fromBufferAttribute($,I),U[ce+V+4]=o.x,U[ce+V+5]=o.y,U[ce+V+6]=o.z,U[ce+V+7]=0),M===!0&&(o.fromBufferAttribute(ue,I),U[ce+V+8]=o.x,U[ce+V+9]=o.y,U[ce+V+10]=o.z,U[ce+V+11]=ue.itemSize===4?o.w:1)}}_={count:g,texture:j,size:new Vt(F,z)},a.set(f,_),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let E=0;for(let M=0;M<h.length;M++)E+=h[M];const T=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:u}}function y3(r,e,n,a){let o=new WeakMap;function u(p){const h=a.render.frame,v=p.geometry,g=e.get(p,v);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==h&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return g}function c(){o=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:u,dispose:c}}const M3={[sS]:"LINEAR_TONE_MAPPING",[oS]:"REINHARD_TONE_MAPPING",[lS]:"CINEON_TONE_MAPPING",[uS]:"ACES_FILMIC_TONE_MAPPING",[fS]:"AGX_TONE_MAPPING",[dS]:"NEUTRAL_TONE_MAPPING",[cS]:"CUSTOM_TONE_MAPPING"};function E3(r,e,n,a,o){const u=new ji(e,n,{type:r,depthBuffer:a,stencilBuffer:o}),c=new ji(e,n,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),f=new Da;f.setAttribute("position",new Ta([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ta([0,2,0,0,2,0],2));const p=new _A({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Zi(f,p),v=new om(-1,1,1,-1,0,1);let g=null,_=null,S=!1,E,T=null,M=[],x=!1;this.setSize=function(D,L){u.setSize(D,L),c.setSize(D,L);for(let N=0;N<M.length;N++){const F=M[N];F.setSize&&F.setSize(D,L)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const L=u.width,N=u.height;for(let F=0;F<M.length;F++){const z=M[F];z.setSize&&z.setSize(L,N)}},this.begin=function(D,L){if(S||D.toneMapping===Wi&&M.length===0)return!1;if(T=L,L!==null){const N=L.width,F=L.height;(u.width!==N||u.height!==F)&&this.setSize(N,F)}return x===!1&&D.setRenderTarget(u),E=D.toneMapping,D.toneMapping=Wi,!0},this.hasRenderPass=function(){return x},this.end=function(D,L){D.toneMapping=E,S=!0;let N=u,F=c;for(let z=0;z<M.length;z++){const U=M[z];if(U.enabled!==!1&&(U.render(D,F,N,L),U.needsSwap!==!1)){const j=N;N=F,F=j}}if(g!==D.outputColorSpace||_!==D.toneMapping){g=D.outputColorSpace,_=D.toneMapping,p.defines={},Tt.getTransfer(g)===Bt&&(p.defines.SRGB_TRANSFER="");const z=M3[_];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(T),D.render(h,v),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),c.dispose(),f.dispose(),p.dispose()}}const PS=new Bn,zp=new _l(1,1),FS=new MS,IS=new j1,zS=new DS,ox=[],lx=[],ux=new Float32Array(16),cx=new Float32Array(9),fx=new Float32Array(4);function no(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let u=ox[o];if(u===void 0&&(u=new Float32Array(o),ox[o]=u),e!==0){a.toArray(u,0);for(let c=1,f=0;c!==e;++c)f+=n,r[c].toArray(u,f)}return u}function gn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function vn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Nc(r,e){let n=lx[e];n===void 0&&(n=new Int32Array(e),lx[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function b3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function T3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;r.uniform2fv(this.addr,e),vn(n,e)}}function A3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;r.uniform3fv(this.addr,e),vn(n,e)}}function R3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;r.uniform4fv(this.addr,e),vn(n,e)}}function C3(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(gn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,a))return;fx.set(a),r.uniformMatrix2fv(this.addr,!1,fx),vn(n,a)}}function w3(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(gn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,a))return;cx.set(a),r.uniformMatrix3fv(this.addr,!1,cx),vn(n,a)}}function D3(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(gn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(gn(n,a))return;ux.set(a),r.uniformMatrix4fv(this.addr,!1,ux),vn(n,a)}}function L3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function U3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;r.uniform2iv(this.addr,e),vn(n,e)}}function N3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;r.uniform3iv(this.addr,e),vn(n,e)}}function O3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;r.uniform4iv(this.addr,e),vn(n,e)}}function P3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function F3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;r.uniform2uiv(this.addr,e),vn(n,e)}}function I3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;r.uniform3uiv(this.addr,e),vn(n,e)}}function z3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;r.uniform4uiv(this.addr,e),vn(n,e)}}function B3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let u;this.type===r.SAMPLER_2D_SHADOW?(zp.compareFunction=n.isReversedDepthBuffer()?am:im,u=zp):u=PS,n.setTexture2D(e||u,o)}function H3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||IS,o)}function V3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||zS,o)}function G3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||FS,o)}function k3(r){switch(r){case 5126:return b3;case 35664:return T3;case 35665:return A3;case 35666:return R3;case 35674:return C3;case 35675:return w3;case 35676:return D3;case 5124:case 35670:return L3;case 35667:case 35671:return U3;case 35668:case 35672:return N3;case 35669:case 35673:return O3;case 5125:return P3;case 36294:return F3;case 36295:return I3;case 36296:return z3;case 35678:case 36198:case 36298:case 36306:case 35682:return B3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return V3;case 36289:case 36303:case 36311:case 36292:return G3}}function X3(r,e){r.uniform1fv(this.addr,e)}function q3(r,e){const n=no(e,this.size,2);r.uniform2fv(this.addr,n)}function W3(r,e){const n=no(e,this.size,3);r.uniform3fv(this.addr,n)}function j3(r,e){const n=no(e,this.size,4);r.uniform4fv(this.addr,n)}function Y3(r,e){const n=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function K3(r,e){const n=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Z3(r,e){const n=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function $3(r,e){r.uniform1iv(this.addr,e)}function Q3(r,e){r.uniform2iv(this.addr,e)}function J3(r,e){r.uniform3iv(this.addr,e)}function e2(r,e){r.uniform4iv(this.addr,e)}function t2(r,e){r.uniform1uiv(this.addr,e)}function n2(r,e){r.uniform2uiv(this.addr,e)}function i2(r,e){r.uniform3uiv(this.addr,e)}function a2(r,e){r.uniform4uiv(this.addr,e)}function r2(r,e,n){const a=this.cache,o=e.length,u=Nc(n,o);gn(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));let c;this.type===r.SAMPLER_2D_SHADOW?c=zp:c=PS;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||c,u[f])}function s2(r,e,n){const a=this.cache,o=e.length,u=Nc(n,o);gn(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||IS,u[c])}function o2(r,e,n){const a=this.cache,o=e.length,u=Nc(n,o);gn(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||zS,u[c])}function l2(r,e,n){const a=this.cache,o=e.length,u=Nc(n,o);gn(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||FS,u[c])}function u2(r){switch(r){case 5126:return X3;case 35664:return q3;case 35665:return W3;case 35666:return j3;case 35674:return Y3;case 35675:return K3;case 35676:return Z3;case 5124:case 35670:return $3;case 35667:case 35671:return Q3;case 35668:case 35672:return J3;case 35669:case 35673:return e2;case 5125:return t2;case 36294:return n2;case 36295:return i2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return l2}}class c2{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=k3(n.type)}}class f2{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=u2(n.type)}}class d2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const f=o[u];f.setValue(e,n[f.id],a)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function dx(r,e){r.seq.push(e),r.map[e.id]=e}function h2(r,e,n){const a=r.name,o=a.length;for(Nh.lastIndex=0;;){const u=Nh.exec(a),c=Nh.lastIndex;let f=u[1];const p=u[2]==="]",h=u[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===o){dx(n,h===void 0?new c2(f,r,e):new f2(f,r,e));break}else{let g=n.map[f];g===void 0&&(g=new d2(f),dx(n,g)),n=g}}}class gc{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=e.getActiveUniform(n,c),p=e.getUniformLocation(n,f.name);h2(f,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let u=0,c=n.length;u!==c;++u){const f=n[u],p=a[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&a.push(c)}return a}}function hx(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const p2=37297;let m2=0;function g2(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const px=new dt;function v2(r){Tt._getMatrix(px,Tt.workingColorSpace,r);const e=`mat3( ${px.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Ec:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mx(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+g2(r.getShaderSource(e),f)}else return u}function _2(r,e){const n=v2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const x2={[sS]:"Linear",[oS]:"Reinhard",[lS]:"Cineon",[uS]:"ACESFilmic",[fS]:"AgX",[dS]:"Neutral",[cS]:"Custom"};function S2(r,e){const n=x2[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oc=new se;function y2(){Tt.getLuminanceCoefficients(oc);const r=oc.x.toFixed(4),e=oc.y.toFixed(4),n=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function E2(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function b2(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=r.getActiveAttrib(e,o),c=u.name;let f=1;u.type===r.FLOAT_MAT2&&(f=2),u.type===r.FLOAT_MAT3&&(f=3),u.type===r.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:r.getAttribLocation(e,c),locationSize:f}}return n}function cl(r){return r!==""}function gx(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(r){return r.replace(T2,R2)}const A2=new Map;function R2(r,e){let n=ht[e];if(n===void 0){const a=A2.get(e);if(a!==void 0)n=ht[a],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Bp(n)}const C2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(r){return r.replace(C2,w2)}function w2(r,e,n,a){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function xx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const D2={[fc]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function L2(r){return D2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U2={[kr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function N2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":U2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const O2={[Ys]:"ENVMAP_MODE_REFRACTION"};function P2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":O2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const F2={[rS]:"ENVMAP_BLENDING_MULTIPLY",[R1]:"ENVMAP_BLENDING_MIX",[C1]:"ENVMAP_BLENDING_ADD"};function I2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":F2[r.combine]||"ENVMAP_BLENDING_NONE"}function z2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function B2(r,e,n,a){const o=r.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=L2(n),h=N2(n),v=P2(n),g=I2(n),_=z2(n),S=M2(n),E=E2(u),T=o.createProgram();let M,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(cl).join(`
`),x.length>0&&(x+=`
`)):(M=[xx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),x=[xx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?ht.tonemapping_pars_fragment:"",n.toneMapping!==Wi?S2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,_2("linearToOutputTexel",n.outputColorSpace),y2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cl).join(`
`)),c=Bp(c),c=gx(c,n),c=vx(c,n),f=Bp(f),f=gx(f,n),f=vx(f,n),c=_x(c),f=_x(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+M+c,N=D+x+f,F=hx(o,o.VERTEX_SHADER,L),z=hx(o,o.FRAGMENT_SHADER,N);o.attachShader(T,F),o.attachShader(T,z),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(H){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(T)||"",$=o.getShaderInfoLog(F)||"",ue=o.getShaderInfoLog(z)||"",ce=K.trim(),I=$.trim(),V=ue.trim();let ne=!0,Me=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,F,z);else{const ye=mx(o,F,"vertex"),O=mx(o,z,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+ye+`
`+O)}else ce!==""?ot("WebGLProgram: Program Info Log:",ce):(I===""||V==="")&&(Me=!1);Me&&(H.diagnostics={runnable:ne,programLog:ce,vertexShader:{log:I,prefix:M},fragmentShader:{log:V,prefix:x}})}o.deleteShader(F),o.deleteShader(z),j=new gc(o,T),A=b2(o,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,p2)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=m2++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=z,this}let H2=0;class V2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new G2(e),n.set(e,a)),a}}class G2{constructor(e){this.id=H2++,this.code=e,this.usedTimes=0}}function k2(r,e,n,a,o,u,c){const f=new ES,p=new V2,h=new Set,v=[],g=new Map,_=o.logarithmicDepthBuffer;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return h.add(A),A===0?"uv":`uv${A}`}function M(A,w,H,K,$){const ue=K.fog,ce=$.geometry,I=A.isMeshStandardMaterial?K.environment:null,V=(A.isMeshStandardMaterial?n:e).get(A.envMap||I),ne=V&&V.mapping===Dc?V.image.height:null,Me=E[A.type];A.precision!==null&&(S=o.getMaxPrecision(A.precision),S!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const ye=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=ye!==void 0?ye.length:0;let ee=0;ce.morphAttributes.position!==void 0&&(ee=1),ce.morphAttributes.normal!==void 0&&(ee=2),ce.morphAttributes.color!==void 0&&(ee=3);let me,Re,He,re;if(Me){const bt=Gi[Me];me=bt.vertexShader,Re=bt.fragmentShader}else me=A.vertexShader,Re=A.fragmentShader,p.update(A),He=p.getVertexShaderID(A),re=p.getFragmentShaderID(A);const de=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Xe=$.isInstancedMesh===!0,Ve=$.isBatchedMesh===!0,pt=!!A.map,Jt=!!A.matcap,_t=!!V,mt=!!A.aoMap,wt=!!A.lightMap,lt=!!A.bumpMap,en=!!A.normalMap,G=!!A.displacementMap,Kt=!!A.emissiveMap,Et=!!A.metalnessMap,Nt=!!A.roughnessMap,Ye=A.anisotropy>0,P=A.clearcoat>0,b=A.dispersion>0,q=A.iridescence>0,pe=A.sheen>0,Se=A.transmission>0,fe=Ye&&!!A.anisotropyMap,Ze=P&&!!A.clearcoatMap,we=P&&!!A.clearcoatNormalMap,qe=P&&!!A.clearcoatRoughnessMap,nt=q&&!!A.iridescenceMap,be=q&&!!A.iridescenceThicknessMap,Te=pe&&!!A.sheenColorMap,ze=pe&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,De=!!A.specularColorMap,ct=!!A.specularIntensityMap,X=Se&&!!A.transmissionMap,Ne=Se&&!!A.thicknessMap,Ae=!!A.gradientMap,Ie=!!A.alphaMap,Ee=A.alphaTest>0,xe=!!A.alphaHash,Ce=!!A.extensions;let it=Wi;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(it=r.toneMapping);const Pt={shaderID:Me,shaderType:A.type,shaderName:A.name,vertexShader:me,fragmentShader:Re,defines:A.defines,customVertexShaderID:He,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&$._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&$.instanceColor!==null,instancingMorph:Xe&&$.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Zs,alphaToCoverage:!!A.alphaToCoverage,map:pt,matcap:Jt,envMap:_t,envMapMode:_t&&V.mapping,envMapCubeUVHeight:ne,aoMap:mt,lightMap:wt,bumpMap:lt,normalMap:en,displacementMap:G,emissiveMap:Kt,normalMapObjectSpace:en&&A.normalMapType===U1,normalMapTangentSpace:en&&A.normalMapType===L1,metalnessMap:Et,roughnessMap:Nt,anisotropy:Ye,anisotropyMap:fe,clearcoat:P,clearcoatMap:Ze,clearcoatNormalMap:we,clearcoatRoughnessMap:qe,dispersion:b,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:De,specularIntensityMap:ct,transmission:Se,transmissionMap:X,thicknessMap:Ne,gradientMap:Ae,opaque:A.transparent===!1&&A.blending===qs&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:xe,combine:A.combine,mapUv:pt&&T(A.map.channel),aoMapUv:mt&&T(A.aoMap.channel),lightMapUv:wt&&T(A.lightMap.channel),bumpMapUv:lt&&T(A.bumpMap.channel),normalMapUv:en&&T(A.normalMap.channel),displacementMapUv:G&&T(A.displacementMap.channel),emissiveMapUv:Kt&&T(A.emissiveMap.channel),metalnessMapUv:Et&&T(A.metalnessMap.channel),roughnessMapUv:Nt&&T(A.roughnessMap.channel),anisotropyMapUv:fe&&T(A.anisotropyMap.channel),clearcoatMapUv:Ze&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(A.sheenRoughnessMap.channel),specularMapUv:Fe&&T(A.specularMap.channel),specularColorMapUv:De&&T(A.specularColorMap.channel),specularIntensityMapUv:ct&&T(A.specularIntensityMap.channel),transmissionMapUv:X&&T(A.transmissionMap.channel),thicknessMapUv:Ne&&T(A.thicknessMap.channel),alphaMapUv:Ie&&T(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(en||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(pt||Ie),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Le,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:Kt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===Yn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Ve)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)w.push(H),w.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(D(w,A),L(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function D(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function L(A,w){f.disableAll(),w.instancing&&f.enable(0),w.instancingColor&&f.enable(1),w.instancingMorph&&f.enable(2),w.matcap&&f.enable(3),w.envMap&&f.enable(4),w.normalMapObjectSpace&&f.enable(5),w.normalMapTangentSpace&&f.enable(6),w.clearcoat&&f.enable(7),w.iridescence&&f.enable(8),w.alphaTest&&f.enable(9),w.vertexColors&&f.enable(10),w.vertexAlphas&&f.enable(11),w.vertexUv1s&&f.enable(12),w.vertexUv2s&&f.enable(13),w.vertexUv3s&&f.enable(14),w.vertexTangents&&f.enable(15),w.anisotropy&&f.enable(16),w.alphaHash&&f.enable(17),w.batching&&f.enable(18),w.dispersion&&f.enable(19),w.batchingColor&&f.enable(20),w.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),A.push(f.mask)}function N(A){const w=E[A.type];let H;if(w){const K=Gi[w];H=oA.clone(K.uniforms)}else H=A.uniforms;return H}function F(A,w){let H=g.get(w);return H!==void 0?++H.usedTimes:(H=new B2(r,w,A,u),v.push(H),g.set(w,H)),H}function z(A){if(--A.usedTimes===0){const w=v.indexOf(A);v[w]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function U(A){p.remove(A)}function j(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:F,releaseProgram:z,releaseShaderCache:U,programs:v,dispose:j}}function X2(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function a(c){r.delete(c)}function o(c,f,p){r.get(c)[f]=p}function u(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:u}}function q2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yx(){const r=[];let e=0;const n=[],a=[],o=[];function u(){e=0,n.length=0,a.length=0,o.length=0}function c(g,_,S,E,T,M){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},r[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=M),e++,x}function f(g,_,S,E,T,M){const x=c(g,_,S,E,T,M);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):n.push(x)}function p(g,_,S,E,T,M){const x=c(g,_,S,E,T,M);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function h(g,_){n.length>1&&n.sort(g||q2),a.length>1&&a.sort(_||Sx),o.length>1&&o.sort(_||Sx)}function v(){for(let g=e,_=r.length;g<_;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:f,unshift:p,finish:v,sort:h}}function W2(){let r=new WeakMap;function e(a,o){const u=r.get(a);let c;return u===void 0?(c=new yx,r.set(a,[c])):o>=u.length?(c=new yx,u.push(c)):c=u[o],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function j2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Ht};break;case"SpotLight":n={position:new se,direction:new se,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":n={color:new Ht,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=n,n}}}function Y2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let K2=0;function Z2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $2(r){const e=new j2,n=Y2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new se);const o=new se,u=new hn,c=new hn;function f(h){let v=0,g=0,_=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let S=0,E=0,T=0,M=0,x=0,D=0,L=0,N=0,F=0,z=0,U=0;h.sort(Z2);for(let A=0,w=h.length;A<w;A++){const H=h[A],K=H.color,$=H.intensity,ue=H.distance;let ce=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ks?ce=H.shadow.map.texture:ce=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=K.r*$,g+=K.g*$,_+=K.b*$;else if(H.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(H.sh.coefficients[I],$);U++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,ne=n.get(H);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,a.directionalShadow[S]=ne,a.directionalShadowMap[S]=ce,a.directionalShadowMatrix[S]=H.shadow.matrix,D++}a.directional[S]=I,S++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(K).multiplyScalar($),I.distance=ue,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,a.spot[T]=I;const V=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,V.updateMatrices(H),H.castShadow&&z++),a.spotLightMatrix[T]=V.matrix,H.castShadow){const ne=n.get(H);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,a.spotShadow[T]=ne,a.spotShadowMap[T]=ce,N++}T++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(K).multiplyScalar($),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=I,M++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const V=H.shadow,ne=n.get(H);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,a.pointShadow[E]=ne,a.pointShadowMap[E]=ce,a.pointShadowMatrix[E]=H.shadow.matrix,L++}a.point[E]=I,E++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar($),I.groundColor.copy(H.groundColor).multiplyScalar($),a.hemi[x]=I,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=g,a.ambient[2]=_;const j=a.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==D||j.numPointShadows!==L||j.numSpotShadows!==N||j.numSpotMaps!==F||j.numLightProbes!==U)&&(a.directional.length=S,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=N+F-z,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=U,j.directionalLength=S,j.pointLength=E,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=D,j.numPointShadows=L,j.numSpotShadows=N,j.numSpotMaps=F,j.numLightProbes=U,a.version=K2++)}function p(h,v){let g=0,_=0,S=0,E=0,T=0;const M=v.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const L=h[x];if(L.isDirectionalLight){const N=a.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(M),g++}else if(L.isSpotLight){const N=a.spot[S];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const N=a.rectArea[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),c.identity(),u.copy(L.matrixWorld),u.premultiply(M),c.extractRotation(u),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const N=a.point[_];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const N=a.hemi[T];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),T++}}}return{setup:f,setupView:p,state:a}}function Mx(r){const e=new $2(r),n=[],a=[];function o(v){h.camera=v,n.length=0,a.length=0}function u(v){n.push(v)}function c(v){a.push(v)}function f(){e.setup(n)}function p(v){e.setupView(n,v)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function Q2(r){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let f;return c===void 0?(f=new Mx(r),e.set(o,[f])):u>=c.length?(f=new Mx(r),c.push(f)):f=c[u],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const J2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`,tw=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],nw=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],Ex=new hn,ll=new se,Oh=new se;function iw(r,e,n){let a=new US;const o=new Vt,u=new Vt,c=new sn,f=new xA,p=new SA,h={},v=n.maxTextureSize,g={[fr]:Yn,[Yn]:fr,[Sa]:Sa},_=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:J2,fragmentShader:ew}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Da;E.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Zi(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let x=this.type;this.render=function(z,U,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===l1&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=fc);const A=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ea),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=x!==this.type;$&&U.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(ce=>ce.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,ce=z.length;ue<ce;ue++){const I=z[ue],V=I.shadow;if(V===void 0){ot("WebGLShadowMap:",I,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ne=V.getFrameExtents();if(o.multiply(ne),u.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/ne.x),o.x=u.x*ne.x,V.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/ne.y),o.y=u.y*ne.y,V.mapSize.y=u.y)),V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ul){if(I.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ji(o.x,o.y,{format:Ks,type:Ra,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=I.name+".shadowMap",V.map.depthTexture=new _l(o.x,o.y,Xi),V.map.depthTexture.name=I.name+".shadowMapDepth",V.map.depthTexture.format=Ca,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn}else{I.isPointLight?(V.map=new LS(o.x),V.map.depthTexture=new vA(o.x,Ki)):(V.map=new ji(o.x,o.y),V.map.depthTexture=new _l(o.x,o.y,Ki)),V.map.depthTexture.name=I.name+".shadowMap",V.map.depthTexture.format=Ca;const ye=r.state.buffers.depth.getReversed();this.type===fc?(V.map.depthTexture.compareFunction=ye?am:im,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn)}V.camera.updateProjectionMatrix()}const Me=V.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Me;ye++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,ye),r.clear();else{ye===0&&(r.setRenderTarget(V.map),r.clear());const O=V.getViewport(ye);c.set(u.x*O.x,u.y*O.y,u.x*O.z,u.y*O.w),K.viewport(c)}if(I.isPointLight){const O=V.camera,ee=V.matrix,me=I.distance||O.far;me!==O.far&&(O.far=me,O.updateProjectionMatrix()),ll.setFromMatrixPosition(I.matrixWorld),O.position.copy(ll),Oh.copy(O.position),Oh.add(tw[ye]),O.up.copy(nw[ye]),O.lookAt(Oh),O.updateMatrixWorld(),ee.makeTranslation(-ll.x,-ll.y,-ll.z),Ex.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ex,O.coordinateSystem,O.reversedDepth)}else V.updateMatrices(I);a=V.getFrustum(),N(U,j,V.camera,I,this.type)}V.isPointLightShadow!==!0&&this.type===ul&&D(V,j),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(A,w,H)};function D(z,U){const j=e.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ji(o.x,o.y,{format:Ks,type:Ra})),_.uniforms.shadow_pass.value=z.map.depthTexture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(U,null,j,_,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(U,null,j,S,T,null)}function L(z,U,j,A){let w=null;const H=j.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)w=H;else if(w=j.isPointLight===!0?p:f,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=w.uuid,$=U.uuid;let ue=h[K];ue===void 0&&(ue={},h[K]=ue);let ce=ue[$];ce===void 0&&(ce=w.clone(),ue[$]=ce,U.addEventListener("dispose",F)),w=ce}if(w.visible=U.visible,w.wireframe=U.wireframe,A===ul?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:g[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=r.properties.get(w);K.light=j}return w}function N(z,U,j,A,w){if(z.visible===!1)return;if(z.layers.test(U.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===ul)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,z.matrixWorld);const $=e.update(z),ue=z.material;if(Array.isArray(ue)){const ce=$.groups;for(let I=0,V=ce.length;I<V;I++){const ne=ce[I],Me=ue[ne.materialIndex];if(Me&&Me.visible){const ye=L(z,Me,A,w);z.onBeforeShadow(r,z,U,j,$,ye,ne),r.renderBufferDirect(j,null,$,ye,z,ne),z.onAfterShadow(r,z,U,j,$,ye,ne)}}}else if(ue.visible){const ce=L(z,ue,A,w);z.onBeforeShadow(r,z,U,j,$,ce,null),r.renderBufferDirect(j,null,$,ce,z,null),z.onAfterShadow(r,z,U,j,$,ce,null)}}const K=z.children;for(let $=0,ue=K.length;$<ue;$++)N(K[$],U,j,A,w)}function F(z){z.target.removeEventListener("dispose",F);for(const j in h){const A=h[j],w=z.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const aw={[Yh]:Kh,[Zh]:Jh,[$h]:ep,[js]:Qh,[Kh]:Yh,[Jh]:Zh,[ep]:$h,[Qh]:js};function rw(r,e){function n(){let X=!1;const Ne=new sn;let Ae=null;const Ie=new sn(0,0,0,0);return{setMask:function(Ee){Ae!==Ee&&!X&&(r.colorMask(Ee,Ee,Ee,Ee),Ae=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,xe,Ce,it,Pt){Pt===!0&&(Ee*=it,xe*=it,Ce*=it),Ne.set(Ee,xe,Ce,it),Ie.equals(Ne)===!1&&(r.clearColor(Ee,xe,Ce,it),Ie.copy(Ne))},reset:function(){X=!1,Ae=null,Ie.set(-1,0,0,0)}}}function a(){let X=!1,Ne=!1,Ae=null,Ie=null,Ee=null;return{setReversed:function(xe){if(Ne!==xe){const Ce=e.get("EXT_clip_control");xe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ne=xe;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(xe){xe?de(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(xe){Ae!==xe&&!X&&(r.depthMask(xe),Ae=xe)},setFunc:function(xe){if(Ne&&(xe=aw[xe]),Ie!==xe){switch(xe){case Yh:r.depthFunc(r.NEVER);break;case Kh:r.depthFunc(r.ALWAYS);break;case Zh:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case $h:r.depthFunc(r.EQUAL);break;case Qh:r.depthFunc(r.GEQUAL);break;case Jh:r.depthFunc(r.GREATER);break;case ep:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ee!==xe&&(Ne&&(xe=1-xe),r.clearDepth(xe),Ee=xe)},reset:function(){X=!1,Ae=null,Ie=null,Ee=null,Ne=!1}}}function o(){let X=!1,Ne=null,Ae=null,Ie=null,Ee=null,xe=null,Ce=null,it=null,Pt=null;return{setTest:function(bt){X||(bt?de(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!X&&(r.stencilMask(bt),Ne=bt)},setFunc:function(bt,Ln,yi){(Ae!==bt||Ie!==Ln||Ee!==yi)&&(r.stencilFunc(bt,Ln,yi),Ae=bt,Ie=Ln,Ee=yi)},setOp:function(bt,Ln,yi){(xe!==bt||Ce!==Ln||it!==yi)&&(r.stencilOp(bt,Ln,yi),xe=bt,Ce=Ln,it=yi)},setLocked:function(bt){X=bt},setClear:function(bt){Pt!==bt&&(r.clearStencil(bt),Pt=bt)},reset:function(){X=!1,Ne=null,Ae=null,Ie=null,Ee=null,xe=null,Ce=null,it=null,Pt=null}}}const u=new n,c=new a,f=new o,p=new WeakMap,h=new WeakMap;let v={},g={},_=new WeakMap,S=[],E=null,T=!1,M=null,x=null,D=null,L=null,N=null,F=null,z=null,U=new Ht(0,0,0),j=0,A=!1,w=null,H=null,K=null,$=null,ue=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),I=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),I=V>=2);let Me=null,ye={};const O=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),me=new sn().fromArray(O),Re=new sn().fromArray(ee);function He(X,Ne,Ae,Ie){const Ee=new Uint8Array(4),xe=r.createTexture();r.bindTexture(X,xe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Ae;Ce++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Ne+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return xe}const re={};re[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),de(r.DEPTH_TEST),c.setFunc(js),lt(!1),en(w_),de(r.CULL_FACE),mt(Ea);function de(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Le(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Xe(X,Ne){return g[X]!==Ne?(r.bindFramebuffer(X,Ne),g[X]=Ne,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ne),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ve(X,Ne){let Ae=S,Ie=!1;if(X){Ae=_.get(Ne),Ae===void 0&&(Ae=[],_.set(Ne,Ae));const Ee=X.textures;if(Ae.length!==Ee.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Ce=Ee.length;xe<Ce;xe++)Ae[xe]=r.COLOR_ATTACHMENT0+xe;Ae.length=Ee.length,Ie=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Ae)}function pt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Jt={[zr]:r.FUNC_ADD,[c1]:r.FUNC_SUBTRACT,[f1]:r.FUNC_REVERSE_SUBTRACT};Jt[d1]=r.MIN,Jt[h1]=r.MAX;const _t={[p1]:r.ZERO,[m1]:r.ONE,[g1]:r.SRC_COLOR,[Wh]:r.SRC_ALPHA,[M1]:r.SRC_ALPHA_SATURATE,[S1]:r.DST_COLOR,[_1]:r.DST_ALPHA,[v1]:r.ONE_MINUS_SRC_COLOR,[jh]:r.ONE_MINUS_SRC_ALPHA,[y1]:r.ONE_MINUS_DST_COLOR,[x1]:r.ONE_MINUS_DST_ALPHA,[E1]:r.CONSTANT_COLOR,[b1]:r.ONE_MINUS_CONSTANT_COLOR,[T1]:r.CONSTANT_ALPHA,[A1]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Ne,Ae,Ie,Ee,xe,Ce,it,Pt,bt){if(X===Ea){T===!0&&(Le(r.BLEND),T=!1);return}if(T===!1&&(de(r.BLEND),T=!0),X!==u1){if(X!==M||bt!==A){if((x!==zr||N!==zr)&&(r.blendEquation(r.FUNC_ADD),x=zr,N=zr),bt)switch(X){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFunc(r.ONE,r.ONE);break;case L_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case U_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",X);break}else switch(X){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case L_:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",X);break}D=null,L=null,F=null,z=null,U.set(0,0,0),j=0,M=X,A=bt}return}Ee=Ee||Ne,xe=xe||Ae,Ce=Ce||Ie,(Ne!==x||Ee!==N)&&(r.blendEquationSeparate(Jt[Ne],Jt[Ee]),x=Ne,N=Ee),(Ae!==D||Ie!==L||xe!==F||Ce!==z)&&(r.blendFuncSeparate(_t[Ae],_t[Ie],_t[xe],_t[Ce]),D=Ae,L=Ie,F=xe,z=Ce),(it.equals(U)===!1||Pt!==j)&&(r.blendColor(it.r,it.g,it.b,Pt),U.copy(it),j=Pt),M=X,A=!1}function wt(X,Ne){X.side===Sa?Le(r.CULL_FACE):de(r.CULL_FACE);let Ae=X.side===Yn;Ne&&(Ae=!Ae),lt(Ae),X.blending===qs&&X.transparent===!1?mt(Ea):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ie=X.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function en(X){X!==s1?(de(r.CULL_FACE),X!==H&&(X===w_?r.cullFace(r.BACK):X===o1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),H=X}function G(X){X!==K&&(I&&r.lineWidth(X),K=X)}function Kt(X,Ne,Ae){X?(de(r.POLYGON_OFFSET_FILL),($!==Ne||ue!==Ae)&&(r.polygonOffset(Ne,Ae),$=Ne,ue=Ae)):Le(r.POLYGON_OFFSET_FILL)}function Et(X){X?de(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function Nt(X){X===void 0&&(X=r.TEXTURE0+ce-1),Me!==X&&(r.activeTexture(X),Me=X)}function Ye(X,Ne,Ae){Ae===void 0&&(Me===null?Ae=r.TEXTURE0+ce-1:Ae=Me);let Ie=ye[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},ye[Ae]=Ie),(Ie.type!==X||Ie.texture!==Ne)&&(Me!==Ae&&(r.activeTexture(Ae),Me=Ae),r.bindTexture(X,Ne||re[X]),Ie.type=X,Ie.texture=Ne)}function P(){const X=ye[Me];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function pe(){try{r.texSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Se(){try{r.texSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Ze(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function we(){try{r.texStorage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function qe(){try{r.texStorage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function nt(){try{r.texImage2D(...arguments)}catch(X){Ct("WebGLState:",X)}}function be(){try{r.texImage3D(...arguments)}catch(X){Ct("WebGLState:",X)}}function Te(X){me.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),me.copy(X))}function ze(X){Re.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Fe(X,Ne){let Ae=h.get(Ne);Ae===void 0&&(Ae=new WeakMap,h.set(Ne,Ae));let Ie=Ae.get(X);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ne,X.name),Ae.set(X,Ie))}function De(X,Ne){const Ie=h.get(Ne).get(X);p.get(Ne)!==Ie&&(r.uniformBlockBinding(Ne,Ie,X.__bindingPointIndex),p.set(Ne,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Me=null,ye={},g={},_=new WeakMap,S=[],E=null,T=!1,M=null,x=null,D=null,L=null,N=null,F=null,z=null,U=new Ht(0,0,0),j=0,A=!1,w=null,H=null,K=null,$=null,ue=null,me.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:de,disable:Le,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:pt,setBlending:mt,setMaterial:wt,setFlipSided:lt,setCullFace:en,setLineWidth:G,setPolygonOffset:Kt,setScissorTest:Et,activeTexture:Nt,bindTexture:Ye,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:nt,texImage3D:be,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:we,texStorage3D:qe,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:Te,viewport:ze,reset:ct}}function sw(r,e,n,a,o,u,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return S?new OffscreenCanvas(P,b):Tc("canvas")}function T(P,b,q){let pe=1;const Se=Ye(P);if((Se.width>q||Se.height>q)&&(pe=q/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(pe*Se.width),Ze=Math.floor(pe*Se.height);g===void 0&&(g=E(fe,Ze));const we=b?E(fe,Ze):g;return we.width=fe,we.height=Ze,we.getContext("2d").drawImage(P,0,0,fe,Ze),ot("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+fe+"x"+Ze+")."),we}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,b,q,pe,Se=!1){if(P!==null){if(r[P]!==void 0)return r[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=b;if(b===r.RED&&(q===r.FLOAT&&(fe=r.R32F),q===r.HALF_FLOAT&&(fe=r.R16F),q===r.UNSIGNED_BYTE&&(fe=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.R8UI),q===r.UNSIGNED_SHORT&&(fe=r.R16UI),q===r.UNSIGNED_INT&&(fe=r.R32UI),q===r.BYTE&&(fe=r.R8I),q===r.SHORT&&(fe=r.R16I),q===r.INT&&(fe=r.R32I)),b===r.RG&&(q===r.FLOAT&&(fe=r.RG32F),q===r.HALF_FLOAT&&(fe=r.RG16F),q===r.UNSIGNED_BYTE&&(fe=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.RG8UI),q===r.UNSIGNED_SHORT&&(fe=r.RG16UI),q===r.UNSIGNED_INT&&(fe=r.RG32UI),q===r.BYTE&&(fe=r.RG8I),q===r.SHORT&&(fe=r.RG16I),q===r.INT&&(fe=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),q===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),q===r.UNSIGNED_INT&&(fe=r.RGB32UI),q===r.BYTE&&(fe=r.RGB8I),q===r.SHORT&&(fe=r.RGB16I),q===r.INT&&(fe=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),q===r.UNSIGNED_INT&&(fe=r.RGBA32UI),q===r.BYTE&&(fe=r.RGBA8I),q===r.SHORT&&(fe=r.RGBA16I),q===r.INT&&(fe=r.RGBA32I)),b===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),b===r.RGBA){const Ze=Se?Ec:Tt.getTransfer(pe);q===r.FLOAT&&(fe=r.RGBA32F),q===r.HALF_FLOAT&&(fe=r.RGBA16F),q===r.UNSIGNED_BYTE&&(fe=Ze===Bt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function N(P,b){let q;return P?b===null||b===Ki||b===gl?q=r.DEPTH24_STENCIL8:b===Xi?q=r.DEPTH32F_STENCIL8:b===ml&&(q=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===gl?q=r.DEPTH_COMPONENT24:b===Xi?q=r.DEPTH_COMPONENT32F:b===ml&&(q=r.DEPTH_COMPONENT16),q}function F(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function z(P){const b=P.target;b.removeEventListener("dispose",z),j(b),b.isVideoTexture&&v.delete(b)}function U(P){const b=P.target;b.removeEventListener("dispose",U),w(b)}function j(P){const b=a.get(P);if(b.__webglInit===void 0)return;const q=P.source,pe=_.get(q);if(pe){const Se=pe[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&A(P),Object.keys(pe).length===0&&_.delete(q)}a.remove(P)}function A(P){const b=a.get(P);r.deleteTexture(b.__webglTexture);const q=P.source,pe=_.get(q);delete pe[b.__cacheKey],c.memory.textures--}function w(P){const b=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Se=0;Se<b.__webglFramebuffer[pe].length;Se++)r.deleteFramebuffer(b.__webglFramebuffer[pe][Se]);else r.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)r.deleteFramebuffer(b.__webglFramebuffer[pe]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=P.textures;for(let pe=0,Se=q.length;pe<Se;pe++){const fe=a.get(q[pe]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),c.memory.textures--),a.remove(q[pe])}a.remove(P)}let H=0;function K(){H=0}function $(){const P=H;return P>=o.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),H+=1,P}function ue(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ce(P,b){const q=a.get(P);if(P.isVideoTexture&&Et(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const pe=P.image;if(pe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,P,b);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function I(P,b){const q=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){re(q,P,b);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function V(P,b){const q=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){re(q,P,b);return}n.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function ne(P,b){const q=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){de(q,P,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const Me={[ip]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[ap]:r.MIRRORED_REPEAT},ye={[Dn]:r.NEAREST,[w1]:r.NEAREST_MIPMAP_NEAREST,[Vu]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[ah]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},O={[N1]:r.NEVER,[z1]:r.ALWAYS,[O1]:r.LESS,[im]:r.LEQUAL,[P1]:r.EQUAL,[am]:r.GEQUAL,[F1]:r.GREATER,[I1]:r.NOTEQUAL};function ee(P,b){if(b.type===Xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===ah||b.magFilter===Vu||b.magFilter===Hr||b.minFilter===Fn||b.minFilter===ah||b.minFilter===Vu||b.minFilter===Hr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Me[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Me[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Me[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ye[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Vu&&b.minFilter!==Hr||b.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function me(P,b){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",z));const pe=b.source;let Se=_.get(pe);Se===void 0&&(Se={},_.set(pe,Se));const fe=ue(b);if(fe!==P.__cacheKey){Se[fe]===void 0&&(Se[fe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,q=!0),Se[fe].usedTimes++;const Ze=Se[P.__cacheKey];Ze!==void 0&&(Se[P.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(b)),P.__cacheKey=fe,P.__webglTexture=Se[fe].texture}return q}function Re(P,b,q){return Math.floor(Math.floor(P/q)/b)}function He(P,b,q,pe){const fe=P.updateRanges;if(fe.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,q,pe,b.data);else{fe.sort((be,Te)=>be.start-Te.start);let Ze=0;for(let be=1;be<fe.length;be++){const Te=fe[Ze],ze=fe[be],Fe=Te.start+Te.count,De=Re(ze.start,b.width,4),ct=Re(Te.start,b.width,4);ze.start<=Fe+1&&De===ct&&Re(ze.start+ze.count-1,b.width,4)===De?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++Ze,fe[Ze]=ze)}fe.length=Ze+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),qe=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let be=0,Te=fe.length;be<Te;be++){const ze=fe[be],Fe=Math.floor(ze.start/4),De=Math.ceil(ze.count/4),ct=Fe%b.width,X=Math.floor(Fe/b.width),Ne=De,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,ct,X,Ne,Ae,q,pe,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function re(P,b,q){let pe=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=r.TEXTURE_3D);const Se=me(P,b),fe=b.source;n.bindTexture(pe,P.__webglTexture,r.TEXTURE0+q);const Ze=a.get(fe);if(fe.version!==Ze.__version||Se===!0){n.activeTexture(r.TEXTURE0+q);const we=Tt.getPrimaries(Tt.workingColorSpace),qe=b.colorSpace===ur?null:Tt.getPrimaries(b.colorSpace),nt=b.colorSpace===ur||we===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let be=T(b.image,!1,o.maxTextureSize);be=Nt(b,be);const Te=u.convert(b.format,b.colorSpace),ze=u.convert(b.type);let Fe=L(b.internalFormat,Te,ze,b.colorSpace,b.isVideoTexture);ee(pe,b);let De;const ct=b.mipmaps,X=b.isVideoTexture!==!0,Ne=Ze.__version===void 0||Se===!0,Ae=fe.dataReady,Ie=F(b,be);if(b.isDepthTexture)Fe=N(b.format===Vr,b.type),Ne&&(X?n.texStorage2D(r.TEXTURE_2D,1,Fe,be.width,be.height):n.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Te,ze,null));else if(b.isDataTexture)if(ct.length>0){X&&Ne&&n.texStorage2D(r.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let Ee=0,xe=ct.length;Ee<xe;Ee++)De=ct[Ee],X?Ae&&n.texSubImage2D(r.TEXTURE_2D,Ee,0,0,De.width,De.height,Te,ze,De.data):n.texImage2D(r.TEXTURE_2D,Ee,Fe,De.width,De.height,0,Te,ze,De.data);b.generateMipmaps=!1}else X?(Ne&&n.texStorage2D(r.TEXTURE_2D,Ie,Fe,be.width,be.height),Ae&&He(b,be,Te,ze)):n.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Te,ze,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Ne&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Fe,ct[0].width,ct[0].height,be.depth);for(let Ee=0,xe=ct.length;Ee<xe;Ee++)if(De=ct[Ee],b.format!==Ni)if(Te!==null)if(X){if(Ae)if(b.layerUpdates.size>0){const Ce=ex(De.width,De.height,b.format,b.type);for(const it of b.layerUpdates){const Pt=De.data.subarray(it*Ce/De.data.BYTES_PER_ELEMENT,(it+1)*Ce/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,it,De.width,De.height,1,Te,Pt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,be.depth,Te,De.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Fe,De.width,De.height,be.depth,0,De.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ae&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,be.depth,Te,ze,De.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Fe,De.width,De.height,be.depth,0,Te,ze,De.data)}else{X&&Ne&&n.texStorage2D(r.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let Ee=0,xe=ct.length;Ee<xe;Ee++)De=ct[Ee],b.format!==Ni?Te!==null?X?Ae&&n.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,De.width,De.height,Te,De.data):n.compressedTexImage2D(r.TEXTURE_2D,Ee,Fe,De.width,De.height,0,De.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ae&&n.texSubImage2D(r.TEXTURE_2D,Ee,0,0,De.width,De.height,Te,ze,De.data):n.texImage2D(r.TEXTURE_2D,Ee,Fe,De.width,De.height,0,Te,ze,De.data)}else if(b.isDataArrayTexture)if(X){if(Ne&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Fe,be.width,be.height,be.depth),Ae)if(b.layerUpdates.size>0){const Ee=ex(be.width,be.height,b.format,b.type);for(const xe of b.layerUpdates){const Ce=be.data.subarray(xe*Ee/be.data.BYTES_PER_ELEMENT,(xe+1)*Ee/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,Te,ze,Ce)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Te,ze,be.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Te,ze,be.data);else if(b.isData3DTexture)X?(Ne&&n.texStorage3D(r.TEXTURE_3D,Ie,Fe,be.width,be.height,be.depth),Ae&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Te,ze,be.data)):n.texImage3D(r.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Te,ze,be.data);else if(b.isFramebufferTexture){if(Ne)if(X)n.texStorage2D(r.TEXTURE_2D,Ie,Fe,be.width,be.height);else{let Ee=be.width,xe=be.height;for(let Ce=0;Ce<Ie;Ce++)n.texImage2D(r.TEXTURE_2D,Ce,Fe,Ee,xe,0,Te,ze,null),Ee>>=1,xe>>=1}}else if(ct.length>0){if(X&&Ne){const Ee=Ye(ct[0]);n.texStorage2D(r.TEXTURE_2D,Ie,Fe,Ee.width,Ee.height)}for(let Ee=0,xe=ct.length;Ee<xe;Ee++)De=ct[Ee],X?Ae&&n.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Te,ze,De):n.texImage2D(r.TEXTURE_2D,Ee,Fe,Te,ze,De);b.generateMipmaps=!1}else if(X){if(Ne){const Ee=Ye(be);n.texStorage2D(r.TEXTURE_2D,Ie,Fe,Ee.width,Ee.height)}Ae&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,ze,be)}else n.texImage2D(r.TEXTURE_2D,0,Fe,Te,ze,be);M(b)&&x(pe),Ze.__version=fe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function de(P,b,q){if(b.image.length!==6)return;const pe=me(P,b),Se=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const fe=a.get(Se);if(Se.version!==fe.__version||pe===!0){n.activeTexture(r.TEXTURE0+q);const Ze=Tt.getPrimaries(Tt.workingColorSpace),we=b.colorSpace===ur?null:Tt.getPrimaries(b.colorSpace),qe=b.colorSpace===ur||Ze===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let xe=0;xe<6;xe++)!nt&&!be?Te[xe]=T(b.image[xe],!0,o.maxCubemapSize):Te[xe]=be?b.image[xe].image:b.image[xe],Te[xe]=Nt(b,Te[xe]);const ze=Te[0],Fe=u.convert(b.format,b.colorSpace),De=u.convert(b.type),ct=L(b.internalFormat,Fe,De,b.colorSpace),X=b.isVideoTexture!==!0,Ne=fe.__version===void 0||pe===!0,Ae=Se.dataReady;let Ie=F(b,ze);ee(r.TEXTURE_CUBE_MAP,b);let Ee;if(nt){X&&Ne&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,ze.width,ze.height);for(let xe=0;xe<6;xe++){Ee=Te[xe].mipmaps;for(let Ce=0;Ce<Ee.length;Ce++){const it=Ee[Ce];b.format!==Ni?Fe!==null?X?Ae&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Fe,it.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Fe,De,it.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,Fe,De,it.data)}}}else{if(Ee=b.mipmaps,X&&Ne){Ee.length>0&&Ie++;const xe=Ye(Te[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){X?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te[xe].width,Te[xe].height,Fe,De,Te[xe].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Te[xe].width,Te[xe].height,0,Fe,De,Te[xe].data);for(let Ce=0;Ce<Ee.length;Ce++){const Pt=Ee[Ce].image[xe].image;X?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Pt.width,Pt.height,Fe,De,Pt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Pt.width,Pt.height,0,Fe,De,Pt.data)}}else{X?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe,De,Te[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Fe,De,Te[xe]);for(let Ce=0;Ce<Ee.length;Ce++){const it=Ee[Ce];X?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Fe,De,it.image[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Fe,De,it.image[xe])}}}M(b)&&x(r.TEXTURE_CUBE_MAP),fe.__version=Se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Le(P,b,q,pe,Se,fe){const Ze=u.convert(q.format,q.colorSpace),we=u.convert(q.type),qe=L(q.internalFormat,Ze,we,q.colorSpace),nt=a.get(b),be=a.get(q);if(be.__renderTarget=b,!nt.__hasExternalTextures){const Te=Math.max(1,b.width>>fe),ze=Math.max(1,b.height>>fe);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?n.texImage3D(Se,fe,qe,Te,ze,b.depth,0,Ze,we,null):n.texImage2D(Se,fe,qe,Te,ze,0,Ze,we,null)}n.bindFramebuffer(r.FRAMEBUFFER,P),Kt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Se,be.__webglTexture,0,G(b)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Se,be.__webglTexture,fe),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(P,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const pe=b.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,fe=N(b.stencilBuffer,Se),Ze=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Kt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),fe,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ze,r.RENDERBUFFER,P)}else{const pe=b.textures;for(let Se=0;Se<pe.length;Se++){const fe=pe[Se],Ze=u.convert(fe.format,fe.colorSpace),we=u.convert(fe.type),qe=L(fe.internalFormat,Ze,we,fe.colorSpace);Kt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),qe,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),qe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,qe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(P,b,q){const pe=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=a.get(b.depthTexture);if(Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),ee(r.TEXTURE_CUBE_MAP,b.depthTexture);const nt=u.convert(b.depthTexture.format),be=u.convert(b.depthTexture.type);let Te;b.depthTexture.format===Ca?Te=r.DEPTH_COMPONENT24:b.depthTexture.format===Vr&&(Te=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Te,b.width,b.height,0,nt,be,null)}}else ce(b.depthTexture,0);const fe=Se.__webglTexture,Ze=G(b),we=pe?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,qe=b.depthTexture.format===Vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ca)Kt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qe,we,fe,0,Ze):r.framebufferTexture2D(r.FRAMEBUFFER,qe,we,fe,0);else if(b.depthTexture.format===Vr)Kt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qe,we,fe,0,Ze):r.framebufferTexture2D(r.FRAMEBUFFER,qe,we,fe,0);else throw new Error("Unknown depthTexture format")}function pt(P){const b=a.get(P),q=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=pe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Ve(b.__webglFramebuffer[pe],P,pe);else{const pe=P.texture.mipmaps;pe&&pe.length>0?Ve(b.__webglFramebuffer[0],P,0):Ve(b.__webglFramebuffer,P,0)}else if(q){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=r.createRenderbuffer(),Xe(b.__webglDepthbuffer[pe],P,!1);else{const Se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,fe)}}else{const pe=P.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xe(b.__webglDepthbuffer,P,!1);else{const Se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,fe)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(P,b,q){const pe=a.get(P);b!==void 0&&Le(pe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&pt(P)}function _t(P){const b=P.texture,q=a.get(P),pe=a.get(b);P.addEventListener("dispose",U);const Se=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Ze=Se.length>1;if(Ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=b.version,c.memory.textures++),fe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let qe=0;qe<b.mipmaps.length;qe++)q.__webglFramebuffer[we][qe]=r.createFramebuffer()}else q.__webglFramebuffer[we]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)q.__webglFramebuffer[we]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ze)for(let we=0,qe=Se.length;we<qe;we++){const nt=a.get(Se[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&Kt(P)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<Se.length;we++){const qe=Se[we];q.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const nt=u.convert(qe.format,qe.colorSpace),be=u.convert(qe.type),Te=L(qe.internalFormat,nt,be,qe.colorSpace,P.isXRRenderTarget===!0),ze=G(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Te,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,q.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){n.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(r.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)Le(q.__webglFramebuffer[we][qe],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe);else Le(q.__webglFramebuffer[we],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ze){for(let we=0,qe=Se.length;we<qe;we++){const nt=Se[we],be=a.get(nt);let Te=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Te,be.__webglTexture),ee(Te,nt),Le(q.__webglFramebuffer,P,nt,r.COLOR_ATTACHMENT0+we,Te,0),M(nt)&&x(Te)}n.unbindTexture()}else{let we=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ee(we,b),b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)Le(q.__webglFramebuffer[qe],P,b,r.COLOR_ATTACHMENT0,we,qe);else Le(q.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,we,0);M(b)&&x(we),n.unbindTexture()}P.depthBuffer&&pt(P)}function mt(P){const b=P.textures;for(let q=0,pe=b.length;q<pe;q++){const Se=b[q];if(M(Se)){const fe=D(P),Ze=a.get(Se).__webglTexture;n.bindTexture(fe,Ze),x(fe),n.unbindTexture()}}}const wt=[],lt=[];function en(P){if(P.samples>0){if(Kt(P)===!1){const b=P.textures,q=P.width,pe=P.height;let Se=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ze=a.get(P),we=b.length>1;if(we)for(let nt=0;nt<b.length;nt++)n.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const qe=P.texture.mipmaps;qe&&qe.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[nt]);const be=a.get(b[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,q,pe,0,0,q,pe,Se,r.NEAREST),p===!0&&(wt.length=0,lt.length=0,wt.push(r.COLOR_ATTACHMENT0+nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(wt.push(fe),lt.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<b.length;nt++){n.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[nt]);const be=a.get(b[nt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,be,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function G(P){return Math.min(o.maxSamples,P.samples)}function Kt(P){const b=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(P){const b=c.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function Nt(P,b){const q=P.colorSpace,pe=P.format,Se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Zs&&q!==ur&&(Tt.getTransfer(q)===Bt?(pe!==Ni||Se!==xi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",q)),b}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=Jt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ow(r,e){function n(a,o=ur){let u;const c=Tt.getTransfer(o);if(a===xi)return r.UNSIGNED_BYTE;if(a===Qp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Jp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===gS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===vS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===pS)return r.BYTE;if(a===mS)return r.SHORT;if(a===ml)return r.UNSIGNED_SHORT;if(a===$p)return r.INT;if(a===Ki)return r.UNSIGNED_INT;if(a===Xi)return r.FLOAT;if(a===Ra)return r.HALF_FLOAT;if(a===_S)return r.ALPHA;if(a===xS)return r.RGB;if(a===Ni)return r.RGBA;if(a===Ca)return r.DEPTH_COMPONENT;if(a===Vr)return r.DEPTH_STENCIL;if(a===SS)return r.RED;if(a===em)return r.RED_INTEGER;if(a===Ks)return r.RG;if(a===tm)return r.RG_INTEGER;if(a===nm)return r.RGBA_INTEGER;if(a===dc||a===hc||a===pc||a===mc)if(c===Bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===rp||a===sp||a===op||a===lp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===rp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===op)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===lp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===up||a===cp||a===fp||a===dp||a===hp||a===pp||a===mp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===up||a===cp)return c===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===fp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===dp)return u.COMPRESSED_R11_EAC;if(a===hp)return u.COMPRESSED_SIGNED_R11_EAC;if(a===pp)return u.COMPRESSED_RG11_EAC;if(a===mp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===gp||a===vp||a===_p||a===xp||a===Sp||a===yp||a===Mp||a===Ep||a===bp||a===Tp||a===Ap||a===Rp||a===Cp||a===wp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===gp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===vp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===_p)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===xp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Sp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===yp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Mp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ep)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===bp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Tp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ap)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Rp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Cp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===wp)return c===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Dp||a===Lp||a===Up)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===Dp)return c===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Lp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Up)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Np||a===Op||a===Pp||a===Fp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===Np)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Op)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
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

}`;class cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new NS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Oi({vertexShader:lw,fragmentShader:uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zi(new Al(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fw extends to{constructor(e,n){super();const a=this;let o=null,u=1,c=null,f="local-floor",p=1,h=null,v=null,g=null,_=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",M=new cw,x={},D=n.getContextAttributes();let L=null,N=null;const F=[],z=[],U=new Vt;let j=null;const A=new Di;A.viewport=new sn;const w=new Di;w.viewport=new sn;const H=[A,w],K=new yA;let $=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=F[re];return de===void 0&&(de=new Rh,F[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=F[re];return de===void 0&&(de=new Rh,F[re]=de),de.getGripSpace()},this.getHand=function(re){let de=F[re];return de===void 0&&(de=new Rh,F[re]=de),de.getHandSpace()};function ce(re){const de=z.indexOf(re.inputSource);if(de===-1)return;const Le=F[de];Le!==void 0&&(Le.update(re.inputSource,re.frame,h||c),Le.dispatchEvent({type:re.type,data:re.inputSource}))}function I(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",V);for(let re=0;re<F.length;re++){const de=z[re];de!==null&&(z[re]=null,F[re].disconnect(de))}$=null,ue=null,M.reset();for(const re in x)delete x[re];e.setRenderTarget(L),S=null,_=null,g=null,o=null,N=null,He.stop(),a.isPresenting=!1,e.setPixelRatio(j),e.setSize(U.width,U.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){u=re,a.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,a.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",I),o.addEventListener("inputsourceschange",V),D.xrCompatible!==!0&&await n.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Xe=null,Ve=null;D.depth&&(Ve=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Le=D.stencil?Vr:Ca,Xe=D.stencil?gl:Ki);const pt={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:u};g=this.getBinding(),_=g.createProjectionLayer(pt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new ji(_.textureWidth,_.textureHeight,{format:Ni,type:xi,depthTexture:new _l(_.textureWidth,_.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,n,Le),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ji(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await o.requestReferenceSpace(f),He.setContext(o),He.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(re){for(let de=0;de<re.removed.length;de++){const Le=re.removed[de],Xe=z.indexOf(Le);Xe>=0&&(z[Xe]=null,F[Xe].disconnect(Le))}for(let de=0;de<re.added.length;de++){const Le=re.added[de];let Xe=z.indexOf(Le);if(Xe===-1){for(let pt=0;pt<F.length;pt++)if(pt>=z.length){z.push(Le),Xe=pt;break}else if(z[pt]===null){z[pt]=Le,Xe=pt;break}if(Xe===-1)break}const Ve=F[Xe];Ve&&Ve.connect(Le)}}const ne=new se,Me=new se;function ye(re,de,Le){ne.setFromMatrixPosition(de.matrixWorld),Me.setFromMatrixPosition(Le.matrixWorld);const Xe=ne.distanceTo(Me),Ve=de.projectionMatrix.elements,pt=Le.projectionMatrix.elements,Jt=Ve[14]/(Ve[10]-1),_t=Ve[14]/(Ve[10]+1),mt=(Ve[9]+1)/Ve[5],wt=(Ve[9]-1)/Ve[5],lt=(Ve[8]-1)/Ve[0],en=(pt[8]+1)/pt[0],G=Jt*lt,Kt=Jt*en,Et=Xe/(-lt+en),Nt=Et*-lt;if(de.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(Et),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ve[10]===-1)re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ye=Jt+Et,P=_t+Et,b=G-Nt,q=Kt+(Xe-Nt),pe=mt*_t/P*Ye,Se=wt*_t/P*Ye;re.projectionMatrix.makePerspective(b,q,pe,Se,Ye,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let de=re.near,Le=re.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Le=M.depthFar)),K.near=w.near=A.near=de,K.far=w.far=A.far=Le,($!==K.near||ue!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),$=K.near,ue=K.far),K.layers.mask=re.layers.mask|6,A.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;const Xe=re.parent,Ve=K.cameras;O(K,Xe);for(let pt=0;pt<Ve.length;pt++)O(Ve[pt],Xe);Ve.length===2?ye(K,A,w):K.projectionMatrix.copy(A.projectionMatrix),ee(re,K,Xe)};function ee(re,de,Le){Le===null?re.matrix.copy(de.matrixWorld):(re.matrix.copy(Le.matrixWorld),re.matrix.invert(),re.matrix.multiply(de.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ip*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(re){p=re,_!==null&&(_.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(re){return x[re]};let me=null;function Re(re,de){if(v=de.getViewerPose(h||c),E=de,v!==null){const Le=v.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let Xe=!1;Le.length!==K.cameras.length&&(K.cameras.length=0,Xe=!0);for(let _t=0;_t<Le.length;_t++){const mt=Le[_t];let wt=null;if(S!==null)wt=S.getViewport(mt);else{const en=g.getViewSubImage(_,mt);wt=en.viewport,_t===0&&(e.setRenderTargetTextures(N,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(N))}let lt=H[_t];lt===void 0&&(lt=new Di,lt.layers.enable(_t),lt.viewport=new sn,H[_t]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(wt.x,wt.y,wt.width,wt.height),_t===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Xe===!0&&K.cameras.push(lt)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){g=a.getBinding();const _t=g.getDepthInformation(Le[0]);_t&&_t.isValid&&_t.texture&&M.init(_t,o.renderState)}if(Ve&&Ve.includes("camera-access")&&T){e.state.unbindTexture(),g=a.getBinding();for(let _t=0;_t<Le.length;_t++){const mt=Le[_t].camera;if(mt){let wt=x[mt];wt||(wt=new NS,x[mt]=wt);const lt=g.getCameraImage(mt);wt.sourceTexture=lt}}}}for(let Le=0;Le<F.length;Le++){const Xe=z[Le],Ve=F[Le];Xe!==null&&Ve!==void 0&&Ve.update(Xe,de,h||c)}me&&me(re,de),de.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:de}),E=null}const He=new OS;He.setAnimationLoop(Re),this.setAnimationLoop=function(re){me=re},this.dispose=function(){}}}const Fr=new wa,dw=new hn;function hw(r,e){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,CS(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,D,L,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,N)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),T(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,D,L):x.isSpriteMaterial?h(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,N=D.envMapRotation;L&&(M.envMap.value=L,Fr.copy(N),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),M.envMapRotation.value.setFromMatrix4(dw.makeRotationFromEuler(Fr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,D,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=L*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function pw(r,e,n,a){let o={},u={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const N=L.program;a.uniformBlockBinding(D,N)}function h(D,L){let N=o[D.id];N===void 0&&(E(D),N=v(D),o[D.id]=N,D.addEventListener("dispose",M));const F=L.program;a.updateUBOMapping(D,F);const z=e.render.frame;u[D.id]!==z&&(_(D),u[D.id]=z)}function v(D){const L=g();D.__bindingPointIndex=L;const N=r.createBuffer(),F=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function g(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=o[D.id],N=D.uniforms,F=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,U=N.length;z<U;z++){const j=Array.isArray(N[z])?N[z]:[N[z]];for(let A=0,w=j.length;A<w;A++){const H=j[A];if(S(H,z,A,F)===!0){const K=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let ce=0;ce<$.length;ce++){const I=$[ce],V=T(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,K+ue,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ue),ue+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,N,F){const z=D.value,U=L+"_"+N;if(F[U]===void 0)return typeof z=="number"||typeof z=="boolean"?F[U]=z:F[U]=z.clone(),!0;{const j=F[U];if(typeof z=="number"||typeof z=="boolean"){if(j!==z)return F[U]=z,!0}else if(j.equals(z)===!1)return j.copy(z),!0}return!1}function E(D){const L=D.uniforms;let N=0;const F=16;for(let U=0,j=L.length;U<j;U++){const A=Array.isArray(L[U])?L[U]:[L[U]];for(let w=0,H=A.length;w<H;w++){const K=A[w],$=Array.isArray(K.value)?K.value:[K.value];for(let ue=0,ce=$.length;ue<ce;ue++){const I=$[ue],V=T(I),ne=N%F,Me=ne%V.boundary,ye=ne+Me;N+=Me,ye!==0&&F-ye<V.storage&&(N+=F-ye),K.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=V.storage}}}const z=N%F;return z>0&&(N+=F-z),D.__size=N,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",D),L}function M(D){const L=D.target;L.removeEventListener("dispose",M);const N=c.indexOf(L.__bindingPointIndex);c.splice(N,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete u[L.id]}function x(){for(const D in o)r.deleteBuffer(o[D]);c=[],o={},u={}}return{bind:p,update:h,dispose:x}}const mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function gw(){return Vi===null&&(Vi=new hA(mw,16,16,Ks,Ra),Vi.name="DFG_LUT",Vi.minFilter=Fn,Vi.magFilter=Fn,Vi.wrapS=ya,Vi.wrapT=ya,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class vw{constructor(e={}){const{canvas:n=B1(),context:a=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:S=xi}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const T=S,M=new Set([nm,tm,em]),x=new Set([xi,Ki,ml,gl,Qp,Jp]),D=new Uint32Array(4),L=new Int32Array(4);let N=null,F=null;const z=[],U=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=_i;let H=0,K=0,$=null,ue=-1,ce=null;const I=new sn,V=new sn;let ne=null;const Me=new Ht(0);let ye=0,O=n.width,ee=n.height,me=1,Re=null,He=null;const re=new sn(0,0,O,ee),de=new sn(0,0,O,ee);let Le=!1;const Xe=new US;let Ve=!1,pt=!1;const Jt=new hn,_t=new se,mt=new sn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function en(){return $===null?me:1}let G=a;function Kt(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:o,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zp}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",bt,!1),G===null){const W="webgl2";if(G=Kt(W,C),G===null)throw Kt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let Et,Nt,Ye,P,b,q,pe,Se,fe,Ze,we,qe,nt,be,Te,ze,Fe,De,ct,X,Ne,Ae,Ie,Ee;function xe(){Et=new g3(G),Et.init(),Ae=new ow(G,Et),Nt=new o3(G,Et,e,Ae),Ye=new rw(G,Et),Nt.reversedDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),P=new x3(G),b=new X2,q=new sw(G,Et,Ye,b,Nt,Ae,P),pe=new u3(A),Se=new m3(A),fe=new EA(G),Ie=new r3(G,fe),Ze=new v3(G,fe,P,Ie),we=new y3(G,Ze,fe,P),ct=new S3(G,Nt,q),ze=new l3(b),qe=new k2(A,pe,Se,Et,Nt,Ie,ze),nt=new hw(A,b),be=new W2,Te=new Q2(Et),De=new a3(A,pe,Se,Ye,we,E,p),Fe=new iw(A,we,Nt),Ee=new pw(G,P,Nt,Ye),X=new s3(G,Et,P),Ne=new _3(G,Et,P),P.programs=qe.programs,A.capabilities=Nt,A.extensions=Et,A.properties=b,A.renderLists=be,A.shadowMap=Fe,A.state=Ye,A.info=P}xe(),T!==xi&&(j=new E3(T,n.width,n.height,o,u));const Ce=new fw(A,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(O,ee,!1))},this.getSize=function(C){return C.set(O,ee)},this.setSize=function(C,W,oe=!0){if(Ce.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ee=W,n.width=Math.floor(C*me),n.height=Math.floor(W*me),oe===!0&&(n.style.width=C+"px",n.style.height=W+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(O*me,ee*me).floor()},this.setDrawingBufferSize=function(C,W,oe){O=C,ee=W,me=oe,n.width=Math.floor(C*oe),n.height=Math.floor(W*oe),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(T===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,W,oe,ie){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,W,oe,ie),Ye.viewport(I.copy(re).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,W,oe,ie){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,W,oe,ie),Ye.scissor(V.copy(de).multiplyScalar(me).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){Ye.setScissorTest(Le=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){He=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,oe=!0){let ie=0;if(C){let Z=!1;if($!==null){const Ue=$.texture.format;Z=M.has(Ue)}if(Z){const Ue=$.texture.type,Be=x.has(Ue),Oe=De.getClearColor(),Ge=De.getClearAlpha(),We=Oe.r,Je=Oe.g,je=Oe.b;Be?(D[0]=We,D[1]=Je,D[2]=je,D[3]=Ge,G.clearBufferuiv(G.COLOR,0,D)):(L[0]=We,L[1]=Je,L[2]=je,L[3]=Ge,G.clearBufferiv(G.COLOR,0,L))}else ie|=G.COLOR_BUFFER_BIT}W&&(ie|=G.DEPTH_BUFFER_BIT),oe&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),De.dispose(),be.dispose(),Te.dispose(),b.dispose(),pe.dispose(),Se.dispose(),we.dispose(),Ie.dispose(),Ee.dispose(),qe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Wr),Ce.removeEventListener("sessionend",ro),Fi.stop()};function it(C){C.preventDefault(),I_("WebGLRenderer: Context Lost."),w=!0}function Pt(){I_("WebGLRenderer: Context Restored."),w=!1;const C=P.autoReset,W=Fe.enabled,oe=Fe.autoUpdate,ie=Fe.needsUpdate,Z=Fe.type;xe(),P.autoReset=C,Fe.enabled=W,Fe.autoUpdate=oe,Fe.needsUpdate=ie,Fe.type=Z}function bt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ln(C){const W=C.target;W.removeEventListener("dispose",Ln),yi(W)}function yi(C){Rl(C),b.remove(C)}function Rl(C){const W=b.get(C).programs;W!==void 0&&(W.forEach(function(oe){qe.releaseProgram(oe)}),C.isShaderMaterial&&qe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,oe,ie,Z,Ue){W===null&&(W=wt);const Be=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=hr(C,W,oe,ie,Z);Ye.setMaterial(ie,Be);let Ge=oe.index,We=1;if(ie.wireframe===!0){if(Ge=Ze.getWireframeAttribute(oe),Ge===void 0)return;We=2}const Je=oe.drawRange,je=oe.attributes.position;let et=Je.start*We,Dt=(Je.start+Je.count)*We;Ue!==null&&(et=Math.max(et,Ue.start*We),Dt=Math.min(Dt,(Ue.start+Ue.count)*We)),Ge!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ge.count)):je!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,je.count));const Zt=Dt-et;if(Zt<0||Zt===1/0)return;Ie.setup(Z,ie,Oe,oe,Ge);let Wt,Ot=X;if(Ge!==null&&(Wt=fe.get(Ge),Ot=Ne,Ot.setIndex(Wt)),Z.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*en()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(Z.isLine){let $e=ie.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*en()),Z.isLineSegments?Ot.setMode(G.LINES):Z.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else Z.isPoints?Ot.setMode(G.POINTS):Z.isSprite&&Ot.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $e=Z._multiDrawStarts,Lt=Z._multiDrawCounts,rt=Z._multiDrawCount,yn=Ge?fe.get(Ge).bytesPerElement:1,$i=b.get(ie).currentProgram.getUniforms();for(let Mn=0;Mn<rt;Mn++)$i.setValue(G,"_gl_DrawID",Mn),Ot.render($e[Mn]/yn,Lt[Mn])}else if(Z.isInstancedMesh)Ot.renderInstances(et,Zt,Z.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Lt=Math.min(oe.instanceCount,$e);Ot.renderInstances(et,Zt,Lt)}else Ot.render(et,Zt)};function io(C,W,oe){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Yr(C,W,oe),C.side=fr,C.needsUpdate=!0,Yr(C,W,oe),C.side=Sa):Yr(C,W,oe)}this.compile=function(C,W,oe=null){oe===null&&(oe=C),F=Te.get(oe),F.init(W),U.push(F),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),C!==oe&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const ie=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Oe=Ue[Be];io(Oe,oe,Z),ie.add(Oe)}else io(Ue,oe,Z),ie.add(Ue)}),F=U.pop(),ie},this.compileAsync=function(C,W,oe=null){const ie=this.compile(C,W,oe);return new Promise(Z=>{function Ue(){if(ie.forEach(function(Be){b.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){Z(C);return}setTimeout(Ue,10)}Et.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let qr=null;function ao(C){qr&&qr(C)}function Wr(){Fi.stop()}function ro(){Fi.start()}const Fi=new OS;Fi.setAnimationLoop(ao),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(C){qr=C,Ce.setAnimationLoop(C),C===null?Fi.stop():Fi.start()},Ce.addEventListener("sessionstart",Wr),Ce.addEventListener("sessionend",ro),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ie=j!==null&&($===null||oe)&&j.begin(A,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,W,$),F=Te.get(C,U.length),F.init(W),U.push(F),Jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xe.setFromProjectionMatrix(Jt,qi,W.reversedDepth),pt=this.localClippingEnabled,Ve=ze.init(this.clippingPlanes,pt),N=be.get(C,z.length),N.init(),z.push(N),Ce.enabled===!0&&Ce.isPresenting===!0){const Be=A.xr.getDepthSensingMesh();Be!==null&&si(Be,W,-1/0,A.sortObjects)}si(C,W,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(Re,He),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&De.addToRenderList(N,C),this.info.render.frame++,Ve===!0&&ze.beginShadows();const Z=F.state.shadowsArray;if(Fe.render(Z,C,W),Ve===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&j.hasRenderPass())===!1){const Be=N.opaque,Oe=N.transmissive;if(F.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Oe.length>0)for(let We=0,Je=Ge.length;We<Je;We++){const je=Ge[We];Sn(Be,Oe,C,je)}lt&&De.render(C);for(let We=0,Je=Ge.length;We<Je;We++){const je=Ge[We];on(N,C,je,je.viewport)}}else Oe.length>0&&Sn(Be,Oe,C,W),lt&&De.render(C),on(N,C,W)}$!==null&&K===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),ie&&j.end(A),C.isScene===!0&&C.onAfterRender(A,C,W),Ie.resetDefaultState(),ue=-1,ce=null,U.pop(),U.length>0?(F=U[U.length-1],Ve===!0&&ze.setGlobalState(A.clippingPlanes,F.state.camera)):F=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function si(C,W,oe,ie){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xe.intersectsSprite(C)){ie&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Jt);const Be=we.update(C),Oe=C.material;Oe.visible&&N.push(C,Be,Oe,oe,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xe.intersectsObject(C))){const Be=we.update(C),Oe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),mt.copy(Be.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(Jt)),Array.isArray(Oe)){const Ge=Be.groups;for(let We=0,Je=Ge.length;We<Je;We++){const je=Ge[We],et=Oe[je.materialIndex];et&&et.visible&&N.push(C,Be,et,oe,mt.z,je)}}else Oe.visible&&N.push(C,Be,Oe,oe,mt.z,null)}}const Ue=C.children;for(let Be=0,Oe=Ue.length;Be<Oe;Be++)si(Ue[Be],W,oe,ie)}function on(C,W,oe,ie){const{opaque:Z,transmissive:Ue,transparent:Be}=C;F.setupLightsView(oe),Ve===!0&&ze.setGlobalState(A.clippingPlanes,oe),ie&&Ye.viewport(I.copy(ie)),Z.length>0&&Mi(Z,W,oe),Ue.length>0&&Mi(Ue,W,oe),Be.length>0&&Mi(Be,W,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Sn(C,W,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ie.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ie.id]=new ji(1,1,{generateMipmaps:!0,type:et?Ra:xi,minFilter:Hr,samples:Nt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=F.state.transmissionRenderTarget[ie.id],Be=ie.viewport||I;Ue.setSize(Be.z*A.transmissionResolutionScale,Be.w*A.transmissionResolutionScale);const Oe=A.getRenderTarget(),Ge=A.getActiveCubeFace(),We=A.getActiveMipmapLevel();A.setRenderTarget(Ue),A.getClearColor(Me),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),lt&&De.render(oe);const Je=A.toneMapping;A.toneMapping=Wi;const je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),F.setupLightsView(ie),Ve===!0&&ze.setGlobalState(A.clippingPlanes,ie),Mi(C,oe,ie),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Zt=W.length;Dt<Zt;Dt++){const Wt=W[Dt],{object:Ot,geometry:$e,material:Lt,group:rt}=Wt;if(Lt.side===Sa&&Ot.layers.test(ie.layers)){const yn=Lt.side;Lt.side=Yn,Lt.needsUpdate=!0,jr(Ot,oe,ie,$e,Lt,rt),Lt.side=yn,Lt.needsUpdate=!0,et=!0}}et===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}A.setRenderTarget(Oe,Ge,We),A.setClearColor(Me,ye),je!==void 0&&(ie.viewport=je),A.toneMapping=Je}function Mi(C,W,oe){const ie=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Ue=C.length;Z<Ue;Z++){const Be=C[Z],{object:Oe,geometry:Ge,group:We}=Be;let Je=Be.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Oe.layers.test(oe.layers)&&jr(Oe,W,oe,Ge,Je,We)}}function jr(C,W,oe,ie,Z,Ue){C.onBeforeRender(A,W,oe,ie,Z,Ue),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(A,W,oe,ie,C,Ue),Z.transparent===!0&&Z.side===Sa&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,A.renderBufferDirect(oe,W,ie,Z,C,Ue),Z.side=fr,Z.needsUpdate=!0,A.renderBufferDirect(oe,W,ie,Z,C,Ue),Z.side=Sa):A.renderBufferDirect(oe,W,ie,Z,C,Ue),C.onAfterRender(A,W,oe,ie,Z,Ue)}function Yr(C,W,oe){W.isScene!==!0&&(W=wt);const ie=b.get(C),Z=F.state.lights,Ue=F.state.shadowsArray,Be=Z.state.version,Oe=qe.getParameters(C,Z.state,Ue,W,oe),Ge=qe.getProgramCacheKey(Oe);let We=ie.programs;ie.environment=C.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(C.isMeshStandardMaterial?Se:pe).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Ln),We=new Map,ie.programs=We);let Je=We.get(Ge);if(Je!==void 0){if(ie.currentProgram===Je&&ie.lightsStateVersion===Be)return so(C,Oe),Je}else Oe.uniforms=qe.getUniforms(C),C.onBeforeCompile(Oe,A),Je=qe.acquireProgram(Oe,Ge),We.set(Ge,Je),ie.uniforms=Oe.uniforms;const je=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=ze.uniform),so(C,Oe),ie.needsLights=La(C),ie.lightsStateVersion=Be,ie.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),ie.currentProgram=Je,ie.uniformsList=null,Je}function Cl(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=gc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function so(C,W){const oe=b.get(C);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function hr(C,W,oe,ie,Z){W.isScene!==!0&&(W=wt),q.resetTextureUnits();const Ue=W.fog,Be=ie.isMeshStandardMaterial?W.environment:null,Oe=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Zs,Ge=(ie.isMeshStandardMaterial?Se:pe).get(ie.envMap||Be),We=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,Dt=!!oe.morphAttributes.color;let Zt=Wi;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Zt=A.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Wt!==void 0?Wt.length:0,$e=b.get(ie),Lt=F.state.lights;if(Ve===!0&&(pt===!0||C!==ce)){const bn=C===ce&&ie.id===ue;ze.setState(ie,C,bn)}let rt=!1;ie.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Lt.state.version||$e.outputColorSpace!==Oe||Z.isBatchedMesh&&$e.batching===!1||!Z.isBatchedMesh&&$e.batching===!0||Z.isBatchedMesh&&$e.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$e.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$e.instancing===!1||!Z.isInstancedMesh&&$e.instancing===!0||Z.isSkinnedMesh&&$e.skinning===!1||!Z.isSkinnedMesh&&$e.skinning===!0||Z.isInstancedMesh&&$e.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$e.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$e.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$e.instancingMorph===!1&&Z.morphTexture!==null||$e.envMap!==Ge||ie.fog===!0&&$e.fog!==Ue||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==Je||$e.morphTargets!==je||$e.morphNormals!==et||$e.morphColors!==Dt||$e.toneMapping!==Zt||$e.morphTargetsCount!==Ot)&&(rt=!0):(rt=!0,$e.__version=ie.version);let yn=$e.currentProgram;rt===!0&&(yn=Yr(ie,W,Z));let $i=!1,Mn=!1,oi=!1;const Ft=yn.getUniforms(),En=$e.uniforms;if(Ye.useProgram(yn.program)&&($i=!0,Mn=!0,oi=!0),ie.id!==ue&&(ue=ie.id,Mn=!0),$i||ce!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(G,"projectionMatrix",C.projectionMatrix),Ft.setValue(G,"viewMatrix",C.matrixWorldInverse);const Tn=Ft.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,_t.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),ce!==C&&(ce=C,Mn=!0,oi=!0)}if($e.needsLights&&(Lt.state.directionalShadowMap.length>0&&Ft.setValue(G,"directionalShadowMap",Lt.state.directionalShadowMap,q),Lt.state.spotShadowMap.length>0&&Ft.setValue(G,"spotShadowMap",Lt.state.spotShadowMap,q),Lt.state.pointShadowMap.length>0&&Ft.setValue(G,"pointShadowMap",Lt.state.pointShadowMap,q)),Z.isSkinnedMesh){Ft.setOptional(G,Z,"bindMatrix"),Ft.setOptional(G,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ft.setValue(G,"boneTexture",bn.boneTexture,q))}Z.isBatchedMesh&&(Ft.setOptional(G,Z,"batchingTexture"),Ft.setValue(G,"batchingTexture",Z._matricesTexture,q),Ft.setOptional(G,Z,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Ft.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const pn=oe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ct.update(Z,oe,yn),(Mn||$e.receiveShadow!==Z.receiveShadow)&&($e.receiveShadow=Z.receiveShadow,Ft.setValue(G,"receiveShadow",Z.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(En.envMap.value=Ge,En.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=gw()),Mn&&(Ft.setValue(G,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&oo(En,oi),Ue&&ie.fog===!0&&nt.refreshFogUniforms(En,Ue),nt.refreshMaterialUniforms(En,ie,me,ee,F.state.transmissionRenderTarget[C.id]),gc.upload(G,Cl($e),En,q)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(gc.upload(G,Cl($e),En,q),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(G,"center",Z.center),Ft.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(G,"normalMatrix",Z.normalMatrix),Ft.setValue(G,"modelMatrix",Z.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bn=ie.uniformsGroups;for(let Tn=0,Kr=bn.length;Tn<Kr;Tn++){const Ei=bn[Tn];Ee.update(Ei,yn),Ee.bind(Ei,yn)}}return yn}function oo(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function La(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,W,oe){const ie=b.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=W,b.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const oe=b.get(C);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const Ua=G.createFramebuffer();this.setRenderTarget=function(C,W=0,oe=0){$=C,H=W,K=oe;let ie=null,Z=!1,Ue=!1;if(C){const Oe=b.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),I.copy(C.viewport),V.copy(C.scissor),ne=C.scissorTest,Ye.viewport(I),Ye.scissor(V),Ye.setScissorTest(ne),ue=-1;return}else if(Oe.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Oe.__hasExternalTextures)q.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&b.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const We=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[W])?ie=We[W][oe]:ie=We[W],Z=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?ie=b.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[oe]:ie=We,I.copy(C.viewport),V.copy(C.scissor),ne=C.scissorTest}else I.copy(re).multiplyScalar(me).floor(),V.copy(de).multiplyScalar(me).floor(),ne=Le;if(oe!==0&&(ie=Ua),Ye.bindFramebuffer(G.FRAMEBUFFER,ie)&&Ye.drawBuffers(C,ie),Ye.viewport(I),Ye.scissor(V),Ye.setScissorTest(ne),Z){const Oe=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,oe)}else if(Ue){const Oe=W;for(let Ge=0;Ge<C.textures.length;Ge++){const We=b.get(C.textures[Ge]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ge,We.__webglTexture,oe,Oe)}}else if(C!==null&&oe!==0){const Oe=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,oe)}ue=-1},this.readRenderTargetPixels=function(C,W,oe,ie,Z,Ue,Be,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const We=C.textures[Oe],Je=We.format,je=We.type;if(!Nt.textureFormatReadable(Je)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(je)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ie&&oe>=0&&oe<=C.height-Z&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(W,oe,ie,Z,Ae.convert(Je),Ae.convert(je),Ue))}finally{const We=$!==null?b.get($).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,W,oe,ie,Z,Ue,Be,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge)if(W>=0&&W<=C.width-ie&&oe>=0&&oe<=C.height-Z){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);const We=C.textures[Oe],Je=We.format,je=We.type;if(!Nt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(W,oe,ie,Z,Ae.convert(Je),Ae.convert(je),0);const Dt=$!==null?b.get($).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Dt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await H1(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(et),G.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,oe=0){const ie=Math.pow(2,-oe),Z=Math.floor(C.image.width*ie),Ue=Math.floor(C.image.height*ie),Be=W!==null?W.x:0,Oe=W!==null?W.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Be,Oe,Z,Ue),Ye.unbindTexture()};const pr=G.createFramebuffer(),Na=G.createFramebuffer();this.copyTextureToTexture=function(C,W,oe=null,ie=null,Z=0,Ue=null){Ue===null&&(Z!==0?(vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Z,Z=0):Ue=0);let Be,Oe,Ge,We,Je,je,et,Dt,Zt;const Wt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(oe!==null)Be=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,Je=oe.min.y,je=oe.isBox3?oe.min.z:0;else{const pn=Math.pow(2,-Z);Be=Math.floor(Wt.width*pn),Oe=Math.floor(Wt.height*pn),C.isDataArrayTexture?Ge=Wt.depth:C.isData3DTexture?Ge=Math.floor(Wt.depth*pn):Ge=1,We=0,Je=0,je=0}ie!==null?(et=ie.x,Dt=ie.y,Zt=ie.z):(et=0,Dt=0,Zt=0);const Ot=Ae.convert(W.format),$e=Ae.convert(W.type);let Lt;W.isData3DTexture?(q.setTexture3D(W,0),Lt=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),Lt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),Lt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const rt=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),$i=G.getParameter(G.UNPACK_SKIP_PIXELS),Mn=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,je);const Ft=C.isDataArrayTexture||C.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const pn=b.get(C),bn=b.get(W),Tn=b.get(pn.__renderTarget),Kr=b.get(bn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Ei=0;Ei<Ge;Ei++)Ft&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Z,je+Ei),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(W).__webglTexture,Ue,Zt+Ei)),G.blitFramebuffer(We,Je,Be,Oe,et,Dt,Be,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||b.has(C)){const pn=b.get(C),bn=b.get(W);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,pr),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Na);for(let Tn=0;Tn<Ge;Tn++)Ft?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Z,je+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Z),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Ue,Zt+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Ue),Z!==0?G.blitFramebuffer(We,Je,Be,Oe,et,Dt,Be,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(Lt,Ue,et,Dt,Zt+Tn,We,Je,Be,Oe):G.copyTexSubImage2D(Lt,Ue,et,Dt,We,Je,Be,Oe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Lt,Ue,et,Dt,Zt,Be,Oe,Ge,Ot,$e,Wt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Lt,Ue,et,Dt,Zt,Be,Oe,Ge,Ot,Wt.data):G.texSubImage3D(Lt,Ue,et,Dt,Zt,Be,Oe,Ge,Ot,$e,Wt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,et,Dt,Be,Oe,Ot,$e,Wt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,et,Dt,Wt.width,Wt.height,Ot,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,et,Dt,Be,Oe,Ot,$e,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,rt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$i),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),Ue===0&&W.generateMipmaps&&G.generateMipmap(Lt),Ye.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){H=0,K=0,$=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const _w=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,xw=`
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
`;function Sw({color:r="#ffffff",flakeSize:e=.01,minFlakeSize:n=1.25,pixelResolution:a=200,speed:o=1.25,depthFade:u=8,farPlane:c=20,brightness:f=1,gamma:p=.4545,density:h=.3,variant:v="square",direction:g=125,className:_="",style:S={}}){const E=J.useRef(null),T=J.useRef(0),M=J.useRef(!0),x=J.useRef(null),D=J.useRef(null),L=J.useRef(null),N=J.useMemo(()=>v==="round"?1:v==="snowflake"?2:0,[v]),F=J.useMemo(()=>{const U=new Ht(r);return new se(U.r,U.g,U.b)},[r]),z=J.useCallback(()=>{L.current&&clearTimeout(L.current),L.current=window.setTimeout(()=>{const U=E.current,j=x.current,A=D.current;if(!U||!j||!A)return;const w=U.offsetWidth,H=U.offsetHeight;j.setSize(w,H),A.uniforms.uResolution.value.set(w,H)},100)},[]);return J.useEffect(()=>{const U=E.current;if(!U)return;const j=new IntersectionObserver(([A])=>{M.current=A.isIntersecting},{threshold:0});return j.observe(U),()=>j.disconnect()},[]),J.useEffect(()=>{const U=E.current;if(!U)return;const j=new dA,A=new om(-1,1,1,-1,0,1),w=new vw({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(U.offsetWidth,U.offsetHeight),w.setClearColor(0,0),U.appendChild(w.domElement),x.current=w;const H=new Oi({vertexShader:_w,fragmentShader:xw,uniforms:{uTime:{value:0},uResolution:{value:new Vt(U.offsetWidth,U.offsetHeight)},uFlakeSize:{value:e},uMinFlakeSize:{value:n},uPixelResolution:{value:a},uSpeed:{value:o},uDepthFade:{value:u},uFarPlane:{value:c},uColor:{value:F.clone()},uBrightness:{value:f},uGamma:{value:p},uDensity:{value:h},uVariant:{value:N},uDirection:{value:g*Math.PI/180}},transparent:!0});D.current=H;const K=new Al(2,2);j.add(new Zi(K,H)),window.addEventListener("resize",z);const $=performance.now(),ue=()=>{T.current=requestAnimationFrame(ue),M.current&&(H.uniforms.uTime.value=(performance.now()-$)*.001,w.render(j,A))};return ue(),()=>{cancelAnimationFrame(T.current),window.removeEventListener("resize",z),L.current&&clearTimeout(L.current),U.contains(w.domElement)&&U.removeChild(w.domElement),w.dispose(),K.dispose(),H.dispose(),x.current=null,D.current=null}},[z]),J.useEffect(()=>{const U=D.current;U&&(U.uniforms.uFlakeSize.value=e,U.uniforms.uMinFlakeSize.value=n,U.uniforms.uPixelResolution.value=a,U.uniforms.uSpeed.value=o,U.uniforms.uDepthFade.value=u,U.uniforms.uFarPlane.value=c,U.uniforms.uBrightness.value=f,U.uniforms.uGamma.value=p,U.uniforms.uDensity.value=h,U.uniforms.uVariant.value=N,U.uniforms.uDirection.value=g*Math.PI/180,U.uniforms.uColor.value.copy(F))},[e,n,a,o,u,c,f,p,h,N,g,F]),ve.jsx("div",{ref:E,className:`pixel-snow-container ${_}`,style:S})}function yw(){const{lang:r}=ub(),{i18n:e}=Xr();return J.useEffect(()=>{if(sessionStorage.redirect){const n=sessionStorage.redirect;delete sessionStorage.redirect;const a=n.match(/^\/(en|ru|uz)/),o=a?a[1]:r;o&&o!=="uz"&&window.history.replaceState(null,null,`/${o}`)}},[r]),J.useEffect(()=>{const a=r&&["uz","ru","en"].includes(r)?r:"uz";e.changeLanguage(a),localStorage.setItem("language",a)},[r,e]),ve.jsxs(ve.Fragment,{children:[ve.jsx(Sw,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,backgroundColor:"#0F172A"},flakeSize:.005,pixelResolution:500,speed:2.7,depthFade:20,farPlane:5,brightness:.7,density:.4,variant:"round",direction:185,color:"#38BDF8"}),ve.jsx(r1,{}),ve.jsx(e1,{}),ve.jsx(t1,{}),ve.jsx(n1,{}),ve.jsx(i1,{}),ve.jsx(a1,{})]})}function Mw(){return ve.jsxs(Tb,{children:[ve.jsx(Hh,{path:"/:lang?",element:ve.jsx(yw,{})}),ve.jsx(Hh,{path:"*",element:ve.jsx(Eb,{to:"/uz",replace:!0})})]})}const Ew={home:"Asosiy",services:"Xizmatlar",process:"Jarayon",faq:"FAQ",contact:"Aloqa"},bw={title:"NATIJAGA yo'naltirilgan SAYTLAR ishlab chiqamiz",cta1:"Buyurtma berish",cta2:"Telegram bot orqali"},Tw={title:"Xizmat tariflarimiz",cta:"Sayt buyurtma qilish",plans:[{name:"Minimal",price:"$100+",features:["1 sahifali sayt","Buyurtma tugmasi","Domen + hosting","Mobilga mos dizayn"]},{name:"Standart",price:"$300+",features:["3-5 sahifa","Buyurtma formasi","Domen + hosting","Mobil qurilmalarga mos","SEO (Google)","Admin panel"]},{name:"Biznes",price:"$600+",features:["5-7 sahifa","Xizmatlar bo'limlari","Buyurtma formasi","Domen + hosting","SEO (Google)","Admin panel","Analitika","Individual dizayn"]},{name:"Individual",price:"$1200+",features:["7+ sahifa","Individual yondashuv","Kengaytiriladigan struktura","Murojaat formasi","Domen + hosting","SEO (Google)","Individual dizayn","Admin panel","Analitika"]}]},Aw={title:"Loyihangizni qanday amalga oshiramiz",steps:[{number:"01",title:"Maslahat",description:"Sizning ehtiyojlaringizni o'rganamiz va eng yaxshi yechimlarni taklif qilamiz."},{number:"02",title:"Rejalashtirish",description:"Loyiha strukturasini ishlab chiqamiz va dizayn prototipi tayyorlaymiz."},{number:"03",title:"Ishlab chiqish",description:"Zamonaviy texnologiyalar yordamida saytingizni professional darajada yaratamiz."},{number:"04",title:"Testlash va Ishga tushirish",description:"Saytni sinab ko'ramiz va internetga joylaymiz."}]},Rw={title:"Savollaringizga shu yerda javob topasiz",items:[{question:"Sayt qancha muddatda tayyor bo'ladi?",answer:"Sayt tayyorlanish muddati tanlangan tarif va loyiha hajmiga bog'liq. O'rtacha hisobda 5 kundan 30 kungacha bo'lgan muddatda loyiha yakunlanadi."},{question:"Sayt narxi nimaga bog'liq?",answer:"Sayt narxi tanlangan tarif, sahifalar soni va saytda joylashtiriladigan ma'lumotlar hajmiga qarab belgilanadi."},{question:"Domen va hostingni o'zim olishim kerakmi?",answer:"Yo'q. Domen va hosting biz tomonimizdan taqdim etiladi va loyiha doirasida to'liq sozlab beriladi."},{question:"Buyurtma berilgandan keyin jarayon qanday bo'ladi?",answer:"Avvolo loyiha uchun muammoga yechim beruvchi struktura ishlab chiqiladi va siz bilan tasdiqlanadi. Shundan so'ng ish boshlanadi."},{question:"Sayt topshirilgandan keyin texnik yordam bo'ladimi?",answer:"Ha. Sayt topshirilgandan so'ng tanlangan tarifga qarab 1 oydan 3 oygacha bepul texnik yordam ko'rsatiladi."}]},Cw={title:"Raqamingizni qoldiring, biz tezda aloqaga chiqamiz!",form:{name:"Ismingiz",phone:"Telefon raqam",username:"Telegram username",message:"Xabar",submit:"Yuborish",submitting:"Yuborilmoqda..."},success:"✅ Xabaringiz muvaffaqiyatli yuborildi!",error:"❌ Xatolik yuz berdi. Qayta urinib ko'ring."},ww={telegram:"Telegram",instagram:"Instagram",bot:"Telegram bot",address:"Toshkent shahar, Olmazor tumani",copyright:"© 2026 AyTi Xizmati. Barcha huquqlar himoyalangan."},Dw={title:"AyTi Xizmati - Natijaga yo'naltirilgan saytlar va Telegram botlar yaratish",description:"Professional darajadagi web saytlar, telegram botlar va IT yechimlar. Arzon narxlar va yuqori sifat. Toshkentda sayt yaratish xizmati.",keywords:"sayt yaratish, web sayt yaratish xizmatlari, sayt yaratish narxi, IT xizmatlar, professional web sayt, dasturlash xizmatlari, web dizayn, biznes uchun sayt, kompaniya uchun sayt, onlayn xizmatlar yaratish, telegram bot yasash xizmatlari"},Lw={nav:Ew,hero:bw,pricing:Tw,process:Aw,faq:Rw,contact:Cw,footer:ww,seo:Dw},Uw={home:"Главная",services:"Услуги",process:"Процесс",faq:"FAQ",contact:"Контакты"},Nw={title:"РЕЗУЛЬТАТИВНЫЕ САЙТЫ ДЛЯ ВАШЕГО БИЗНЕСА",cta1:"Заказать сайт",cta2:"Через Telegram бот"},Ow={title:"Наши тарифы",cta:"Заказать сайт",plans:[{name:"Минимум",price:"$100+",features:["1-страничный сайт","Кнопка заказа","Домен + хостинг","Адаптивный дизайн"]},{name:"Стандарт",price:"$300+",features:["3-5 страниц","Форма заказа","Домен + хостинг","Мобильная адаптация","SEO (Google)","Админ-панель"]},{name:"Бизнес",price:"$600+",features:["5-7 страниц","Разделы услуг","Форма заказа","Домен + хостинг","SEO (Google)","Админ-панель","Аналитика","Индивидуальный дизайн"]},{name:"Индивидуальный",price:"$1200+",features:["7+ страниц","Индивидуальный подход","Масштабируемая структура","Форма обратной связи","Домен + хостинг","SEO (Google)","Индивидуальный дизайн","Админ-панель","Аналитика"]}]},Pw={title:"Как мы реализуем ваш проект",steps:[{number:"01",title:"Консультация",description:"Изучаем ваши потребности и предлагаем лучшие решения."},{number:"02",title:"Планирование",description:"Разрабатываем структуру проекта и прототип дизайна."},{number:"03",title:"Разработка",description:"Создаем ваш сайт, используя современные технологии."},{number:"04",title:"Тестирование и запуск",description:"Тестируем сайт и запускаем его в интернет."}]},Fw={title:"Ответы на ваши вопросы",items:[{question:"Сколько времени занимает разработка сайта?",answer:"Время зависит от выбранного тарифа и объема проекта. В среднем проект завершается за 5-30 дней."},{question:"От чего зависит стоимость сайта?",answer:"Стоимость зависит от выбранного тарифа, количества страниц и объема информации."},{question:"Нужно ли мне самому покупать домен и хостинг?",answer:"Нет. Домен и хостинг предоставляются нами и полностью настраиваются."},{question:"Как проходит процесс после заказа?",answer:"Сначала разрабатывается структура проекта и согласовывается с вами, затем начинается работа."},{question:"Будет ли техническая поддержка после запуска?",answer:"Да. После запуска мы предоставляем бесплатную техническую поддержку от 1 до 3 месяцев."}]},Iw={title:"Оставьте свой номер, мы вам перезвоним!",form:{name:"Имя",phone:"Номер телефона",username:"Имя пользователя Telegram",message:"Сообщение",submit:"Отправить",submitting:"Отправка..."},success:"✅ Ваше сообщение успешно отправлено!",error:"❌ Произошла ошибка. Попробуйте еще раз."},zw={telegram:"Telegram",instagram:"Instagram",bot:"Telegram бот",address:"г. Ташкент, Алмазарский район",copyright:"© 2026 AyTi Xizmati. Все права защищены."},Bw={title:"AyTi Xizmati - Создание результативных сайтов и Telegram ботов",description:"Профессиональные веб-сайты, telegram-боты и IT-решения. Доступные цены и высокое качество. Услуги по созданию сайтов в Ташкенте.",keywords:"создание сайтов, услуги создания веб-сайтов, цена создания сайта, IT услуги, профессиональный веб-сайт, услуги программирования, веб-дизайн, сайт для бизнеса, сайт для компании, создание онлайн сервисов, услуги создания телеграм ботов"},Hw={nav:Uw,hero:Nw,pricing:Ow,process:Pw,faq:Fw,contact:Iw,footer:zw,seo:Bw},Vw={home:"Home",services:"Services",process:"Process",faq:"FAQ",contact:"Contact"},Gw={title:"RESULTS-DRIVEN WEBSITES FOR YOUR BUSINESS",cta1:"Order a Website",cta2:"Via Telegram Bot"},kw={title:"Our Pricing Plans",cta:"Order a Website",plans:[{name:"Minimal",price:"$100+",features:["1-page website","Order button","Domain + hosting","Mobile responsive design"]},{name:"Standard",price:"$300+",features:["3-5 pages","Order form","Domain + hosting","Mobile adaptation","SEO (Google)","Admin panel"]},{name:"Business",price:"$600+",features:["5-7 pages","Service sections","Order form","Domain + hosting","SEO (Google)","Admin panel","Analytics","Custom design"]},{name:"Individual",price:"$1200+",features:["7+ pages","Custom approach","Scalable structure","Contact form","Domain + hosting","SEO (Google)","Custom design","Admin panel","Analytics"]}]},Xw={title:"How We Implement Your Project",steps:[{number:"01",title:"Consultation",description:"We study your needs and offer the best solutions."},{number:"02",title:"Planning",description:"We develop the project structure and design prototype."},{number:"03",title:"Development",description:"We create your website using modern technologies."},{number:"04",title:"Testing & Launch",description:"We test the site and launch it on the internet."}]},qw={title:"Answers to Your Questions",items:[{question:"How long does website development take?",answer:"The time depends on the chosen plan and project scope. On average, a project is completed in 5-30 days."},{question:"What does the website cost depend on?",answer:"The cost depends on the chosen plan, number of pages, and amount of information."},{question:"Do I need to buy domain and hosting myself?",answer:"No. Domain and hosting are provided by us and fully configured."},{question:"How does the process work after ordering?",answer:"First, we develop the project structure and agree with you, then the work begins."},{question:"Will there be technical support after launch?",answer:"Yes. After launch, we provide free technical support for 1 to 3 months."}]},Ww={title:"Leave your number, we'll call you back!",form:{name:"Name",phone:"Phone number",username:"Telegram username",message:"Message",submit:"Send",submitting:"Sending..."},success:"✅ Your message was sent successfully!",error:"❌ An error occurred. Please try again."},jw={telegram:"Telegram",instagram:"Instagram",bot:"Telegram bot",address:"Tashkent city, Olmazor district",copyright:"© 2026 AyTi Xizmati. All rights reserved."},Yw={title:"AyTi Xizmati - Result-Oriented Website and Telegram Bot Creation",description:"Professional websites, Telegram bots, and IT solutions. Affordable prices and high quality. Website creation services in Tashkent.",keywords:"website creation, web development services, website cost, IT services, professional website, programming services, web design, business website, company website, online services creation, telegram bot creation services"},Kw={nav:Vw,hero:Gw,pricing:kw,process:Xw,faq:qw,contact:Ww,footer:jw,seo:Yw},Zw={uz:{translation:Lw},ru:{translation:Hw},en:{translation:Kw}},$w=()=>{const e=window.location.pathname.match(/^\/(en|ru|uz)/);return e&&["en","ru","uz"].includes(e[1])?e[1]:localStorage.getItem("language")||"uz"};Hn.use(PT).init({resources:Zw,lng:$w(),fallbackLng:"uz",interpolation:{escapeValue:!1}});JM.createRoot(document.getElementById("root")).render(ve.jsx(Pn.StrictMode,{children:ve.jsx(Kb,{children:ve.jsx(Dx,{children:ve.jsx(Mw,{})})})}));
