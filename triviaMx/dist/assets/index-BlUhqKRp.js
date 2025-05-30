(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function s0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var rf={exports:{}},is={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Ib(){if(zg)return is;zg=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:i,type:r,key:h,ref:u!==void 0?u:null,props:f}}return is.Fragment=n,is.jsx=a,is.jsxs=a,is}var Lg;function kb(){return Lg||(Lg=1,rf.exports=Ib()),rf.exports}var N=kb(),of={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Bb(){if(Ug)return ae;Ug=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function C(S){return S===null||typeof S!="object"?null:(S=b&&S[b]||S["@@iterator"],typeof S=="function"?S:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,G={};function W(S,U,B){this.props=S,this.context=U,this.refs=G,this.updater=B||O}W.prototype.isReactComponent={},W.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},W.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function le(){}le.prototype=W.prototype;function se(S,U,B){this.props=S,this.context=U,this.refs=G,this.updater=B||O}var te=se.prototype=new le;te.constructor=se,I(te,W.prototype),te.isPureReactComponent=!0;var re=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ie=Object.prototype.hasOwnProperty;function P(S,U,B,j,Q,oe){return B=oe.ref,{$$typeof:i,type:S,key:U,ref:B!==void 0?B:null,props:oe}}function Be(S,U){return P(S.type,U,void 0,void 0,void 0,S.props)}function ft(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function tn(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return U[B]})}var Ot=/\/+/g;function Xe(S,U){return typeof S=="object"&&S!==null&&S.key!=null?tn(""+S.key):U.toString(36)}function bt(){}function nn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(bt,bt):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Ze(S,U,B,j,Q){var oe=typeof S;(oe==="undefined"||oe==="boolean")&&(S=null);var F=!1;if(S===null)F=!0;else switch(oe){case"bigint":case"string":case"number":F=!0;break;case"object":switch(S.$$typeof){case i:case n:F=!0;break;case y:return F=S._init,Ze(F(S._payload),U,B,j,Q)}}if(F)return Q=Q(S),F=j===""?"."+Xe(S,0):j,re(Q)?(B="",F!=null&&(B=F.replace(Ot,"$&/")+"/"),Ze(Q,U,B,"",function(fe){return fe})):Q!=null&&(ft(Q)&&(Q=Be(Q,B+(Q.key==null||S&&S.key===Q.key?"":(""+Q.key).replace(Ot,"$&/")+"/")+F)),U.push(Q)),1;F=0;var Ke=j===""?".":j+":";if(re(S))for(var Y=0;Y<S.length;Y++)j=S[Y],oe=Ke+Xe(j,Y),F+=Ze(j,U,B,oe,Q);else if(Y=C(S),typeof Y=="function")for(S=Y.call(S),Y=0;!(j=S.next()).done;)j=j.value,oe=Ke+Xe(j,Y++),F+=Ze(j,U,B,oe,Q);else if(oe==="object"){if(typeof S.then=="function")return Ze(nn(S),U,B,j,Q);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return F}function D(S,U,B){if(S==null)return S;var j=[],Q=0;return Ze(S,j,"","",function(oe){return U.call(B,oe,Q++)}),j}function H(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var Z=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function ce(){}return ae.Children={map:D,forEach:function(S,U,B){D(S,function(){U.apply(this,arguments)},B)},count:function(S){var U=0;return D(S,function(){U++}),U},toArray:function(S){return D(S,function(U){return U})||[]},only:function(S){if(!ft(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ae.Component=W,ae.Fragment=a,ae.Profiler=u,ae.PureComponent=se,ae.StrictMode=r,ae.Suspense=g,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ae.__COMPILER_RUNTIME={__proto__:null,c:function(S){return K.H.useMemoCache(S)}},ae.cache=function(S){return function(){return S.apply(null,arguments)}},ae.cloneElement=function(S,U,B){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var j=I({},S.props),Q=S.key,oe=void 0;if(U!=null)for(F in U.ref!==void 0&&(oe=void 0),U.key!==void 0&&(Q=""+U.key),U)!ie.call(U,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&U.ref===void 0||(j[F]=U[F]);var F=arguments.length-2;if(F===1)j.children=B;else if(1<F){for(var Ke=Array(F),Y=0;Y<F;Y++)Ke[Y]=arguments[Y+2];j.children=Ke}return P(S.type,Q,void 0,void 0,oe,j)},ae.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},ae.createElement=function(S,U,B){var j,Q={},oe=null;if(U!=null)for(j in U.key!==void 0&&(oe=""+U.key),U)ie.call(U,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(Q[j]=U[j]);var F=arguments.length-2;if(F===1)Q.children=B;else if(1<F){for(var Ke=Array(F),Y=0;Y<F;Y++)Ke[Y]=arguments[Y+2];Q.children=Ke}if(S&&S.defaultProps)for(j in F=S.defaultProps,F)Q[j]===void 0&&(Q[j]=F[j]);return P(S,oe,void 0,void 0,null,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(S){return{$$typeof:p,render:S}},ae.isValidElement=ft,ae.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:H}},ae.memo=function(S,U){return{$$typeof:m,type:S,compare:U===void 0?null:U}},ae.startTransition=function(S){var U=K.T,B={};K.T=B;try{var j=S(),Q=K.S;Q!==null&&Q(B,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(ce,Z)}catch(oe){Z(oe)}finally{K.T=U}},ae.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ae.use=function(S){return K.H.use(S)},ae.useActionState=function(S,U,B){return K.H.useActionState(S,U,B)},ae.useCallback=function(S,U){return K.H.useCallback(S,U)},ae.useContext=function(S){return K.H.useContext(S)},ae.useDebugValue=function(){},ae.useDeferredValue=function(S,U){return K.H.useDeferredValue(S,U)},ae.useEffect=function(S,U,B){var j=K.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return j.useEffect(S,U)},ae.useId=function(){return K.H.useId()},ae.useImperativeHandle=function(S,U,B){return K.H.useImperativeHandle(S,U,B)},ae.useInsertionEffect=function(S,U){return K.H.useInsertionEffect(S,U)},ae.useLayoutEffect=function(S,U){return K.H.useLayoutEffect(S,U)},ae.useMemo=function(S,U){return K.H.useMemo(S,U)},ae.useOptimistic=function(S,U){return K.H.useOptimistic(S,U)},ae.useReducer=function(S,U,B){return K.H.useReducer(S,U,B)},ae.useRef=function(S){return K.H.useRef(S)},ae.useState=function(S){return K.H.useState(S)},ae.useSyncExternalStore=function(S,U,B){return K.H.useSyncExternalStore(S,U,B)},ae.useTransition=function(){return K.H.useTransition()},ae.version="19.1.0",ae}var Ig;function lh(){return Ig||(Ig=1,of.exports=Bb()),of.exports}var pe=lh();const Ql=s0(pe);var uf={exports:{}},ls={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Hb(){return kg||(kg=1,function(i){function n(D,H){var Z=D.length;D.push(H);e:for(;0<Z;){var ce=Z-1>>>1,S=D[ce];if(0<u(S,H))D[ce]=H,D[Z]=S,Z=ce;else break e}}function a(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],Z=D.pop();if(Z!==H){D[0]=Z;e:for(var ce=0,S=D.length,U=S>>>1;ce<U;){var B=2*(ce+1)-1,j=D[B],Q=B+1,oe=D[Q];if(0>u(j,Z))Q<S&&0>u(oe,j)?(D[ce]=oe,D[Q]=Z,ce=Q):(D[ce]=j,D[B]=Z,ce=B);else if(Q<S&&0>u(oe,Z))D[ce]=oe,D[Q]=Z,ce=Q;else break e}}return H}function u(D,H){var Z=D.sortIndex-H.sortIndex;return Z!==0?Z:D.id-H.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var g=[],m=[],y=1,b=null,C=3,O=!1,I=!1,G=!1,W=!1,le=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function re(D){for(var H=a(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=D)r(m),H.sortIndex=H.expirationTime,n(g,H);else break;H=a(m)}}function K(D){if(G=!1,re(D),!I)if(a(g)!==null)I=!0,ie||(ie=!0,Xe());else{var H=a(m);H!==null&&Ze(K,H.startTime-D)}}var ie=!1,P=-1,Be=5,ft=-1;function tn(){return W?!0:!(i.unstable_now()-ft<Be)}function Ot(){if(W=!1,ie){var D=i.unstable_now();ft=D;var H=!0;try{e:{I=!1,G&&(G=!1,se(P),P=-1),O=!0;var Z=C;try{t:{for(re(D),b=a(g);b!==null&&!(b.expirationTime>D&&tn());){var ce=b.callback;if(typeof ce=="function"){b.callback=null,C=b.priorityLevel;var S=ce(b.expirationTime<=D);if(D=i.unstable_now(),typeof S=="function"){b.callback=S,re(D),H=!0;break t}b===a(g)&&r(g),re(D)}else r(g);b=a(g)}if(b!==null)H=!0;else{var U=a(m);U!==null&&Ze(K,U.startTime-D),H=!1}}break e}finally{b=null,C=Z,O=!1}H=void 0}}finally{H?Xe():ie=!1}}}var Xe;if(typeof te=="function")Xe=function(){te(Ot)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,nn=bt.port2;bt.port1.onmessage=Ot,Xe=function(){nn.postMessage(null)}}else Xe=function(){le(Ot,0)};function Ze(D,H){P=le(function(){D(i.unstable_now())},H)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(D){switch(C){case 1:case 2:case 3:var H=3;break;default:H=C}var Z=C;C=H;try{return D()}finally{C=Z}},i.unstable_requestPaint=function(){W=!0},i.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=C;C=D;try{return H()}finally{C=Z}},i.unstable_scheduleCallback=function(D,H,Z){var ce=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=Z+S,D={id:y++,callback:H,priorityLevel:D,startTime:Z,expirationTime:S,sortIndex:-1},Z>ce?(D.sortIndex=Z,n(m,D),a(g)===null&&D===a(m)&&(G?(se(P),P=-1):G=!0,Ze(K,Z-ce))):(D.sortIndex=S,n(g,D),I||O||(I=!0,ie||(ie=!0,Xe()))),D},i.unstable_shouldYield=tn,i.unstable_wrapCallback=function(D){var H=C;return function(){var Z=C;C=H;try{return D.apply(this,arguments)}finally{C=Z}}}}(ff)),ff}var Bg;function jb(){return Bg||(Bg=1,cf.exports=Hb()),cf.exports}var hf={exports:{}},yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function qb(){if(Hg)return yt;Hg=1;var i=lh();function n(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(g,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:g,containerInfo:m,implementation:y}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,yt.createPortal=function(g,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return f(g,m,null,y)},yt.flushSync=function(g){var m=h.T,y=r.p;try{if(h.T=null,r.p=2,g)return g()}finally{h.T=m,r.p=y,r.d.f()}},yt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(g,m))},yt.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},yt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,O=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:C,fetchPriority:O}):y==="script"&&r.d.X(g,{crossOrigin:b,integrity:C,fetchPriority:O,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},yt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);r.d.M(g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(g)},yt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=p(y,m.crossOrigin);r.d.L(g,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},yt.preloadModule=function(g,m){if(typeof g=="string")if(m){var y=p(m.as,m.crossOrigin);r.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(g)},yt.requestFormReset=function(g){r.d.r(g)},yt.unstable_batchedUpdates=function(g,m){return g(m)},yt.useFormState=function(g,m,y){return h.H.useFormState(g,m,y)},yt.useFormStatus=function(){return h.H.useHostTransitionStatus()},yt.version="19.1.0",yt}var jg;function Gb(){if(jg)return hf.exports;jg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),hf.exports=qb(),hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Yb(){if(qg)return ls;qg=1;var i=jb(),n=lh(),a=Gb();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,s=t;;){var o=l.return;if(o===null)break;var c=o.alternate;if(c===null){if(s=o.return,s!==null){l=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===l)return p(o),e;if(c===s)return p(o),t;c=c.sibling}throw Error(r(188))}if(l.return!==s.return)l=o,s=c;else{for(var d=!1,_=o.child;_;){if(_===l){d=!0,l=o,s=c;break}if(_===s){d=!0,s=o,l=c;break}_=_.sibling}if(!d){for(_=c.child;_;){if(_===l){d=!0,l=c,s=o;break}if(_===s){d=!0,s=c,l=o;break}_=_.sibling}if(!d)throw Error(r(189))}}if(l.alternate!==s)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),se=Symbol.for("react.consumer"),te=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),tn=Symbol.for("react.memo_cache_sentinel"),Ot=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=Ot&&e[Ot]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function nn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case W:return"Profiler";case G:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList";case ft:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case te:return(e.displayName||"Context")+".Provider";case se:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:nn(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return nn(e(t))}catch{}}return null}var Ze=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ce=[],S=-1;function U(e){return{current:e}}function B(e){0>S||(e.current=ce[S],ce[S]=null,S--)}function j(e,t){S++,ce[S]=e.current,e.current=t}var Q=U(null),oe=U(null),F=U(null),Ke=U(null);function Y(e,t){switch(j(F,t),j(oe,e),j(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rg(t),e=og(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Q),j(Q,e)}function fe(){B(Q),B(oe),B(F)}function He(e){e.memoizedState!==null&&j(Ke,e);var t=Q.current,l=og(t,e.type);t!==l&&(j(oe,e),j(Q,l))}function We(e){oe.current===e&&(B(Q),B(oe)),Ke.current===e&&(B(Ke),Wa._currentValue=Z)}var Je=Object.prototype.hasOwnProperty,aa=i.unstable_scheduleCallback,Ko=i.unstable_cancelCallback,pv=i.unstable_shouldYield,mv=i.unstable_requestPaint,hn=i.unstable_now,gv=i.unstable_getCurrentPriorityLevel,qh=i.unstable_ImmediatePriority,Gh=i.unstable_UserBlockingPriority,Gs=i.unstable_NormalPriority,_v=i.unstable_LowPriority,Yh=i.unstable_IdlePriority,yv=i.log,vv=i.unstable_setDisableYieldValue,sa=null,Mt=null;function Gn(e){if(typeof yv=="function"&&vv(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(sa,e)}catch{}}var zt=Math.clz32?Math.clz32:Ev,bv=Math.log,Sv=Math.LN2;function Ev(e){return e>>>=0,e===0?32:31-(bv(e)/Sv|0)|0}var Ys=256,Vs=4194304;function Si(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qs(e,t,l){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var _=s&134217727;return _!==0?(s=_&~c,s!==0?o=Si(s):(d&=_,d!==0?o=Si(d):l||(l=_&~e,l!==0&&(o=Si(l))))):(_=s&~c,_!==0?o=Si(_):d!==0?o=Si(d):l||(l=s&~e,l!==0&&(o=Si(l)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,l=t&-t,c>=l||c===32&&(l&4194048)!==0)?t:o}function ra(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vh(){var e=Ys;return Ys<<=1,(Ys&4194048)===0&&(Ys=256),e}function Qh(){var e=Vs;return Vs<<=1,(Vs&62914560)===0&&(Vs=4194304),e}function Po(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xv(e,t,l,s,o,c){var d=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var _=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(l=d&~l;0<l;){var M=31-zt(l),L=1<<M;_[M]=0,v[M]=-1;var A=w[M];if(A!==null)for(w[M]=null,M=0;M<A.length;M++){var R=A[M];R!==null&&(R.lane&=-536870913)}l&=~L}s!==0&&Xh(e,s,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function Xh(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-zt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|l&4194090}function Zh(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var s=31-zt(l),o=1<<s;o&t|e[s]&t&&(e[s]|=t),l&=~o}}function Fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kh(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Ag(e.type))}function Tv(e,t){var l=H.p;try{return H.p=e,t()}finally{H.p=l}}var Yn=Math.random().toString(36).slice(2),gt="__reactFiber$"+Yn,Ct="__reactProps$"+Yn,Fi="__reactContainer$"+Yn,Wo="__reactEvents$"+Yn,wv="__reactListeners$"+Yn,Av="__reactHandles$"+Yn,Ph="__reactResources$"+Yn,ua="__reactMarker$"+Yn;function Jo(e){delete e[gt],delete e[Ct],delete e[Wo],delete e[wv],delete e[Av]}function $i(e){var t=e[gt];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Fi]||l[gt]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=hg(e);e!==null;){if(l=e[gt])return l;e=hg(e)}return t}e=l,l=e.parentNode}return null}function Wi(e){if(e=e[gt]||e[Fi]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ca(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ji(e){var t=e[Ph];return t||(t=e[Ph]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[ua]=!0}var Fh=new Set,$h={};function Ei(e,t){el(e,t),el(e+"Capture",t)}function el(e,t){for($h[e]=t,e=0;e<t.length;e++)Fh.add(t[e])}var Rv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wh={},Jh={};function Nv(e){return Je.call(Jh,e)?!0:Je.call(Wh,e)?!1:Rv.test(e)?Jh[e]=!0:(Wh[e]=!0,!1)}function Xs(e,t,l){if(Nv(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Zs(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function vn(e,t,l,s){if(s===null)e.removeAttribute(l);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+s)}}var eu,ed;function tl(e){if(eu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||"",ed=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eu+e+ed}var tu=!1;function nu(e,t){if(!e||tu)return"";tu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(R){var A=R}Reflect.construct(e,[],L)}else{try{L.call()}catch(R){A=R}e.call(L.prototype)}}else{try{throw Error()}catch(R){A=R}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),d=c[0],_=c[1];if(d&&_){var v=d.split(`
`),w=_.split(`
`);for(o=s=0;s<v.length&&!v[s].includes("DetermineComponentFrameRoot");)s++;for(;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;if(s===v.length||o===w.length)for(s=v.length-1,o=w.length-1;1<=s&&0<=o&&v[s]!==w[o];)o--;for(;1<=s&&0<=o;s--,o--)if(v[s]!==w[o]){if(s!==1||o!==1)do if(s--,o--,0>o||v[s]!==w[o]){var M=`
`+v[s].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=s&&0<=o);break}}}finally{tu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?tl(l):""}function Dv(e){switch(e.tag){case 26:case 27:case 5:return tl(e.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 15:return nu(e.type,!1);case 11:return nu(e.type.render,!1);case 1:return nu(e.type,!0);case 31:return tl("Activity");default:return""}}function td(e){try{var t="";do t+=Dv(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ov(e){var t=nd(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){e._valueTracker||(e._valueTracker=Ov(e))}function id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),s="";return e&&(s=nd(e)?e.checked?"true":"false":e.value),e=s,e!==l?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mv=/[\n"\\]/g;function Qt(e){return e.replace(Mv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function iu(e,t,l,s,o,c,d,_){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?lu(e,d,Vt(t)):l!=null?lu(e,d,Vt(l)):s!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Vt(_):e.removeAttribute("name")}function ld(e,t,l,s,o,c,d,_){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||l!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;l=l!=null?""+Vt(l):"",t=t!=null?""+Vt(t):l,_||t===e.value||(e.value=t),e.defaultValue=t}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=_?e.checked:!!s,e.defaultChecked=!!s,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function lu(e,t,l){t==="number"&&Ps(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function nl(e,t,l,s){if(e=e.options,t){t={};for(var o=0;o<l.length;o++)t["$"+l[o]]=!0;for(l=0;l<e.length;l++)o=t.hasOwnProperty("$"+e[l].value),e[l].selected!==o&&(e[l].selected=o),o&&s&&(e[l].defaultSelected=!0)}else{for(l=""+Vt(l),t=null,o=0;o<e.length;o++){if(e[o].value===l){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ad(e,t,l){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Vt(l):""}function sd(e,t,l,s){if(t==null){if(s!=null){if(l!=null)throw Error(r(92));if(Ze(s)){if(1<s.length)throw Error(r(93));s=s[0]}l=s}l==null&&(l=""),t=l}l=Vt(t),e.defaultValue=l,s=e.textContent,s===l&&s!==""&&s!==null&&(e.value=s)}function il(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rd(e,t,l){var s=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,l):typeof l!="number"||l===0||zv.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function od(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var s in l)!l.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in t)s=t[o],t.hasOwnProperty(o)&&l[o]!==s&&rd(e,o,s)}else for(var c in t)t.hasOwnProperty(c)&&rd(e,c,t[c])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fs(e){return Uv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var su=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,al=null;function ud(e){var t=Wi(e);if(t&&(e=t.stateNode)){var l=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(iu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var s=l[t];if(s!==e&&s.form===e.form){var o=s[Ct]||null;if(!o)throw Error(r(90));iu(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<l.length;t++)s=l[t],s.form===e.form&&id(s)}break e;case"textarea":ad(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&nl(e,!!l.multiple,t,!1)}}}var ou=!1;function cd(e,t,l){if(ou)return e(t,l);ou=!0;try{var s=e(t);return s}finally{if(ou=!1,(ll!==null||al!==null)&&(Ur(),ll&&(t=ll,e=al,al=ll=null,ud(t),e)))for(t=0;t<e.length;t++)ud(e[t])}}function fa(e,t){var l=e.stateNode;if(l===null)return null;var s=l[Ct]||null;if(s===null)return null;l=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(bn)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){uu=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{uu=!1}var Vn=null,cu=null,$s=null;function fd(){if($s)return $s;var e,t=cu,l=t.length,s,o="value"in Vn?Vn.value:Vn.textContent,c=o.length;for(e=0;e<l&&t[e]===o[e];e++);var d=l-e;for(s=1;s<=d&&t[l-s]===o[c-s];s++);return $s=o.slice(e,1<s?1-s:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Js(){return!0}function hd(){return!1}function xt(e){function t(l,s,o,c,d){this._reactName=l,this._targetInst=o,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(l=e[_],this[_]=l?l(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Js:hd,this.isPropagationStopped=hd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),t}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=xt(Ci),da=y({},Ci,{view:0,detail:0}),Iv=xt(da),fu,hu,pa,tr=y({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pa&&(pa&&e.type==="mousemove"?(fu=e.screenX-pa.screenX,hu=e.screenY-pa.screenY):hu=fu=0,pa=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:hu}}),dd=xt(tr),kv=y({},tr,{dataTransfer:0}),Bv=xt(kv),Hv=y({},da,{relatedTarget:0}),du=xt(Hv),jv=y({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=xt(jv),Gv=y({},Ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yv=xt(Gv),Vv=y({},Ci,{data:0}),pd=xt(Vv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zv[e])?!!t[e]:!1}function pu(){return Kv}var Pv=y({},da,{key:function(e){if(e.key){var t=Qv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fv=xt(Pv),$v=y({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=xt($v),Wv=y({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Jv=xt(Wv),e1=y({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=xt(e1),n1=y({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=xt(n1),l1=y({},Ci,{newState:0,oldState:0}),a1=xt(l1),s1=[9,13,27,32],mu=bn&&"CompositionEvent"in window,ma=null;bn&&"documentMode"in document&&(ma=document.documentMode);var r1=bn&&"TextEvent"in window&&!ma,gd=bn&&(!mu||ma&&8<ma&&11>=ma),_d=" ",yd=!1;function vd(e,t){switch(e){case"keyup":return s1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function o1(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(yd=!0,_d);case"textInput":return e=t.data,e===_d&&yd?null:e;default:return null}}function u1(e,t){if(sl)return e==="compositionend"||!mu&&vd(e,t)?(e=fd(),$s=cu=Vn=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gd&&t.locale!=="ko"?null:t.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!c1[e.type]:t==="textarea"}function Ed(e,t,l,s){ll?al?al.push(s):al=[s]:ll=s,t=qr(t,"onChange"),0<t.length&&(l=new er("onChange","change",null,l,s),e.push({event:l,listeners:t}))}var ga=null,_a=null;function f1(e){ng(e,0)}function nr(e){var t=ca(e);if(id(t))return e}function Cd(e,t){if(e==="change")return t}var xd=!1;if(bn){var gu;if(bn){var _u="oninput"in document;if(!_u){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),_u=typeof Td.oninput=="function"}gu=_u}else gu=!1;xd=gu&&(!document.documentMode||9<document.documentMode)}function wd(){ga&&(ga.detachEvent("onpropertychange",Ad),_a=ga=null)}function Ad(e){if(e.propertyName==="value"&&nr(_a)){var t=[];Ed(t,_a,e,ru(e)),cd(f1,t)}}function h1(e,t,l){e==="focusin"?(wd(),ga=t,_a=l,ga.attachEvent("onpropertychange",Ad)):e==="focusout"&&wd()}function d1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nr(_a)}function p1(e,t){if(e==="click")return nr(t)}function m1(e,t){if(e==="input"||e==="change")return nr(t)}function g1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:g1;function ya(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),s=Object.keys(t);if(l.length!==s.length)return!1;for(s=0;s<l.length;s++){var o=l[s];if(!Je.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function Rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var l=Rd(e);e=0;for(var s;l;){if(l.nodeType===3){if(s=e+l.textContent.length,e<=t&&s>=t)return{node:l,offset:t-e};e=s}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Rd(l)}}function Dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ps(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Ps(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _1=bn&&"documentMode"in document&&11>=document.documentMode,rl=null,vu=null,va=null,bu=!1;function Md(e,t,l){var s=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bu||rl==null||rl!==Ps(s)||(s=rl,"selectionStart"in s&&yu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),va&&ya(va,s)||(va=s,s=qr(vu,"onSelect"),0<s.length&&(t=new er("onSelect","select",null,t,l),e.push({event:t,listeners:s}),t.target=rl)))}function xi(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ol={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionrun:xi("Transition","TransitionRun"),transitionstart:xi("Transition","TransitionStart"),transitioncancel:xi("Transition","TransitionCancel"),transitionend:xi("Transition","TransitionEnd")},Su={},zd={};bn&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ti(e){if(Su[e])return Su[e];if(!ol[e])return e;var t=ol[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in zd)return Su[e]=t[l];return e}var Ld=Ti("animationend"),Ud=Ti("animationiteration"),Id=Ti("animationstart"),y1=Ti("transitionrun"),v1=Ti("transitionstart"),b1=Ti("transitioncancel"),kd=Ti("transitionend"),Bd=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function ln(e,t){Bd.set(e,t),Ei(t,[e])}var Hd=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var l=Hd.get(e);return l!==void 0?l:(t={value:e,source:t,stack:td(t)},Hd.set(e,t),t)}return{value:e,source:t,stack:td(t)}}var Zt=[],ul=0,Cu=0;function ir(){for(var e=ul,t=Cu=ul=0;t<e;){var l=Zt[t];Zt[t++]=null;var s=Zt[t];Zt[t++]=null;var o=Zt[t];Zt[t++]=null;var c=Zt[t];if(Zt[t++]=null,s!==null&&o!==null){var d=s.pending;d===null?o.next=o:(o.next=d.next,d.next=o),s.pending=o}c!==0&&jd(l,o,c)}}function lr(e,t,l,s){Zt[ul++]=e,Zt[ul++]=t,Zt[ul++]=l,Zt[ul++]=s,Cu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function xu(e,t,l,s){return lr(e,t,l,s),ar(e)}function cl(e,t){return lr(e,null,null,t),ar(e)}function jd(e,t,l){e.lanes|=l;var s=e.alternate;s!==null&&(s.lanes|=l);for(var o=!1,c=e.return;c!==null;)c.childLanes|=l,s=c.alternate,s!==null&&(s.childLanes|=l),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-zt(l),e=c.hiddenUpdates,s=e[o],s===null?e[o]=[t]:s.push(t),t.lane=l|536870912),c):null}function ar(e){if(50<Va)throw Va=0,Dc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function S1(e,t,l,s){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,l,s){return new S1(e,t,l,s)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var l=e.alternate;return l===null?(l=Ut(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function qd(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function sr(e,t,l,s,o,c){var d=0;if(s=e,typeof e=="function")Tu(e)&&(d=1);else if(typeof e=="string")d=Cb(e,l,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ft:return e=Ut(31,l,t,o),e.elementType=ft,e.lanes=c,e;case I:return wi(l.children,o,c,t);case G:d=8,o|=24;break;case W:return e=Ut(12,l,t,o|2),e.elementType=W,e.lanes=c,e;case K:return e=Ut(13,l,t,o),e.elementType=K,e.lanes=c,e;case ie:return e=Ut(19,l,t,o),e.elementType=ie,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:case te:d=10;break e;case se:d=9;break e;case re:d=11;break e;case P:d=14;break e;case Be:d=16,s=null;break e}d=29,l=Error(r(130,e===null?"null":typeof e,"")),s=null}return t=Ut(d,l,t,o),t.elementType=e,t.type=s,t.lanes=c,t}function wi(e,t,l,s){return e=Ut(7,e,s,t),e.lanes=l,e}function wu(e,t,l){return e=Ut(6,e,null,t),e.lanes=l,e}function Au(e,t,l){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hl=[],dl=0,rr=null,or=0,Kt=[],Pt=0,Ai=null,En=1,Cn="";function Ri(e,t){hl[dl++]=or,hl[dl++]=rr,rr=e,or=t}function Gd(e,t,l){Kt[Pt++]=En,Kt[Pt++]=Cn,Kt[Pt++]=Ai,Ai=e;var s=En;e=Cn;var o=32-zt(s)-1;s&=~(1<<o),l+=1;var c=32-zt(t)+o;if(30<c){var d=o-o%5;c=(s&(1<<d)-1).toString(32),s>>=d,o-=d,En=1<<32-zt(t)+o|l<<o|s,Cn=c+e}else En=1<<c|l<<o|s,Cn=e}function Ru(e){e.return!==null&&(Ri(e,1),Gd(e,1,0))}function Nu(e){for(;e===rr;)rr=hl[--dl],hl[dl]=null,or=hl[--dl],hl[dl]=null;for(;e===Ai;)Ai=Kt[--Pt],Kt[Pt]=null,Cn=Kt[--Pt],Kt[Pt]=null,En=Kt[--Pt],Kt[Pt]=null}var St=null,qe=null,Ce=!1,Ni=null,dn=!1,Du=Error(r(519));function Di(e){var t=Error(r(418,""));throw Ea(Xt(t,e)),Du}function Yd(e){var t=e.stateNode,l=e.type,s=e.memoizedProps;switch(t[gt]=e,t[Ct]=s,l){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(l=0;l<Xa.length;l++)_e(Xa[l],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),ld(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ks(t);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),sd(t,s.value,s.defaultValue,s.children),Ks(t)}l=s.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||s.suppressHydrationWarning===!0||sg(t.textContent,l)?(s.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),s.onScroll!=null&&_e("scroll",t),s.onScrollEnd!=null&&_e("scrollend",t),s.onClick!=null&&(t.onclick=Gr),t=!0):t=!1,t||Di(e)}function Vd(e){for(St=e.return;St;)switch(St.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:St=St.return}}function ba(e){if(e!==St)return!1;if(!Ce)return Vd(e),Ce=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Xc(e.type,e.memoizedProps)),l=!l),l&&qe&&Di(e),Vd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){qe=sn(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}qe=null}}else t===27?(t=qe,si(e.type)?(e=Fc,Fc=null,qe=e):qe=t):qe=St?sn(e.stateNode.nextSibling):null;return!0}function Sa(){qe=St=null,Ce=!1}function Qd(){var e=Ni;return e!==null&&(At===null?At=e:At.push.apply(At,e),Ni=null),e}function Ea(e){Ni===null?Ni=[e]:Ni.push(e)}var Ou=U(null),Oi=null,xn=null;function Qn(e,t,l){j(Ou,t._currentValue),t._currentValue=l}function Tn(e){e._currentValue=Ou.current,B(Ou)}function Mu(e,t,l){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===l)break;e=e.return}}function zu(e,t,l,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var d=o.child;c=c.firstContext;e:for(;c!==null;){var _=c;c=o;for(var v=0;v<t.length;v++)if(_.context===t[v]){c.lanes|=l,_=c.alternate,_!==null&&(_.lanes|=l),Mu(c.return,l,e),s||(d=null);break e}c=_.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(r(341));d.lanes|=l,c=d.alternate,c!==null&&(c.lanes|=l),Mu(d,l,e),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===e){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Ca(e,t,l,s){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var _=o.type;Lt(o.pendingProps.value,d.value)||(e!==null?e.push(_):e=[_])}}else if(o===Ke.current){if(d=o.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Wa):e=[Wa])}o=o.return}e!==null&&zu(t,e,l,s),t.flags|=262144}function ur(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mi(e){Oi=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return Xd(Oi,e)}function cr(e,t){return Oi===null&&Mi(e),Xd(e,t)}function Xd(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},xn===null){if(e===null)throw Error(r(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return l}var E1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},C1=i.unstable_scheduleCallback,x1=i.unstable_NormalPriority,et={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new E1,data:new Map,refCount:0}}function xa(e){e.refCount--,e.refCount===0&&C1(x1,function(){e.controller.abort()})}var Ta=null,Uu=0,pl=0,ml=null;function T1(e,t){if(Ta===null){var l=Ta=[];Uu=0,pl=kc(),ml={status:"pending",value:void 0,then:function(s){l.push(s)}}}return Uu++,t.then(Zd,Zd),t}function Zd(){if(--Uu===0&&Ta!==null){ml!==null&&(ml.status="fulfilled");var e=Ta;Ta=null,pl=0,ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function w1(e,t){var l=[],s={status:"pending",value:null,reason:null,then:function(o){l.push(o)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var o=0;o<l.length;o++)(0,l[o])(t)},function(o){for(s.status="rejected",s.reason=o,o=0;o<l.length;o++)(0,l[o])(void 0)}),s}var Kd=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&T1(e,t),Kd!==null&&Kd(e,t)};var zi=U(null);function Iu(){var e=zi.current;return e!==null?e:Me.pooledCache}function fr(e,t){t===null?j(zi,zi.current):j(zi,t.pool)}function Pd(){var e=Iu();return e===null?null:{parent:et._currentValue,pool:e}}var wa=Error(r(460)),Fd=Error(r(474)),hr=Error(r(542)),ku={then:function(){}};function $d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dr(){}function Wd(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(dr,dr),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ep(e),e;default:if(typeof t.status=="string")t.then(dr,dr);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=s}},function(s){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ep(e),e}throw Aa=t,wa}}var Aa=null;function Jd(){if(Aa===null)throw Error(r(459));var e=Aa;return Aa=null,e}function ep(e){if(e===wa||e===hr)throw Error(r(483))}var Xn=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,l){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Te&2)!==0){var o=s.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),s.pending=t,t=ar(e),jd(e,null,l),t}return lr(e,s,t,l),ar(e)}function Ra(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,l|=s,t.lanes=l,Zh(e,l)}}function ju(e,t){var l=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,l===s)){var o=null,c=null;if(l=l.firstBaseUpdate,l!==null){do{var d={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};c===null?o=c=d:c=c.next=d,l=l.next}while(l!==null);c===null?o=c=t:c=c.next=t}else o=c=t;l={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var qu=!1;function Na(){if(qu){var e=ml;if(e!==null)throw e}}function Da(e,t,l,s){qu=!1;var o=e.updateQueue;Xn=!1;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,_=o.shared.pending;if(_!==null){o.shared.pending=null;var v=_,w=v.next;v.next=null,d===null?c=w:d.next=w,d=v;var M=e.alternate;M!==null&&(M=M.updateQueue,_=M.lastBaseUpdate,_!==d&&(_===null?M.firstBaseUpdate=w:_.next=w,M.lastBaseUpdate=v))}if(c!==null){var L=o.baseState;d=0,M=w=v=null,_=c;do{var A=_.lane&-536870913,R=A!==_.lane;if(R?(be&A)===A:(s&A)===A){A!==0&&A===pl&&(qu=!0),M!==null&&(M=M.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ne=e,$=_;A=t;var Ne=l;switch($.tag){case 1:if(ne=$.payload,typeof ne=="function"){L=ne.call(Ne,L,A);break e}L=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$.payload,A=typeof ne=="function"?ne.call(Ne,L,A):ne,A==null)break e;L=y({},L,A);break e;case 2:Xn=!0}}A=_.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=o.callbacks,R===null?o.callbacks=[A]:R.push(A))}else R={lane:A,tag:_.tag,payload:_.payload,callback:_.callback,next:null},M===null?(w=M=R,v=L):M=M.next=R,d|=A;if(_=_.next,_===null){if(_=o.shared.pending,_===null)break;R=_,_=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);M===null&&(v=L),o.baseState=v,o.firstBaseUpdate=w,o.lastBaseUpdate=M,c===null&&(o.shared.lanes=0),ni|=d,e.lanes=d,e.memoizedState=L}}function tp(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function np(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)tp(l[e],t)}var gl=U(null),pr=U(0);function ip(e,t){e=Mn,j(pr,e),j(gl,t),Mn=e|t.baseLanes}function Gu(){j(pr,Mn),j(gl,gl.current)}function Yu(){Mn=pr.current,B(gl),B(pr)}var Pn=0,he=null,Ae=null,Pe=null,mr=!1,_l=!1,Li=!1,gr=0,Oa=0,yl=null,A1=0;function Ve(){throw Error(r(321))}function Vu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Lt(e[l],t[l]))return!1;return!0}function Qu(e,t,l,s,o,c){return Pn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?jp:qp,Li=!1,c=l(s,o),Li=!1,_l&&(c=ap(t,l,s,o)),lp(e),c}function lp(e){D.H=Er;var t=Ae!==null&&Ae.next!==null;if(Pn=0,Pe=Ae=he=null,mr=!1,Oa=0,yl=null,t)throw Error(r(300));e===null||at||(e=e.dependencies,e!==null&&ur(e)&&(at=!0))}function ap(e,t,l,s){he=e;var o=0;do{if(_l&&(yl=null),Oa=0,_l=!1,25<=o)throw Error(r(301));if(o+=1,Pe=Ae=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=L1,c=t(l,s)}while(_l);return c}function R1(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Ma(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(he.flags|=1024),t}function Xu(){var e=gr!==0;return gr=0,e}function Zu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ku(e){if(mr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mr=!1}Pn=0,Pe=Ae=he=null,_l=!1,Oa=gr=0,yl=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?he.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Fe(){if(Ae===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Pe===null?he.memoizedState:Pe.next;if(t!==null)Pe=t,Ae=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Pe===null?he.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ma(e){var t=Oa;return Oa+=1,yl===null&&(yl=[]),e=Wd(yl,e,t),t=he,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?jp:qp),e}function _r(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ma(e);if(e.$$typeof===te)return _t(e)}throw Error(r(438,String(e)))}function Fu(e){var t=null,l=he.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Pu(),he.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),s=0;s<e;s++)l[s]=tn;return t.index++,l}function wn(e,t){return typeof t=="function"?t(e):t}function yr(e){var t=Fe();return $u(t,Ae,e)}function $u(e,t,l){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=l;var o=e.baseQueue,c=s.pending;if(c!==null){if(o!==null){var d=o.next;o.next=c.next,c.next=d}t.baseQueue=o=c,s.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var _=d=null,v=null,w=t,M=!1;do{var L=w.lane&-536870913;if(L!==w.lane?(be&L)===L:(Pn&L)===L){var A=w.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),L===pl&&(M=!0);else if((Pn&A)===A){w=w.next,A===pl&&(M=!0);continue}else L={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(_=v=L,d=c):v=v.next=L,he.lanes|=A,ni|=A;L=w.action,Li&&l(c,L),c=w.hasEagerState?w.eagerState:l(c,L)}else A={lane:L,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(_=v=A,d=c):v=v.next=A,he.lanes|=L,ni|=L;w=w.next}while(w!==null&&w!==t);if(v===null?d=c:v.next=_,!Lt(c,e.memoizedState)&&(at=!0,M&&(l=ml,l!==null)))throw l;e.memoizedState=c,e.baseState=d,e.baseQueue=v,s.lastRenderedState=c}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Wu(e){var t=Fe(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var s=l.dispatch,o=l.pending,c=t.memoizedState;if(o!==null){l.pending=null;var d=o=o.next;do c=e(c,d.action),d=d.next;while(d!==o);Lt(c,t.memoizedState)||(at=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),l.lastRenderedState=c}return[c,s]}function sp(e,t,l){var s=he,o=Fe(),c=Ce;if(c){if(l===void 0)throw Error(r(407));l=l()}else l=t();var d=!Lt((Ae||o).memoizedState,l);d&&(o.memoizedState=l,at=!0),o=o.queue;var _=up.bind(null,s,o,e);if(za(2048,8,_,[e]),o.getSnapshot!==t||d||Pe!==null&&Pe.memoizedState.tag&1){if(s.flags|=2048,vl(9,vr(),op.bind(null,s,o,l,t),null),Me===null)throw Error(r(349));c||(Pn&124)!==0||rp(s,t,l)}return l}function rp(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=he.updateQueue,t===null?(t=Pu(),he.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function op(e,t,l,s){t.value=l,t.getSnapshot=s,cp(t)&&fp(e)}function up(e,t,l){return l(function(){cp(t)&&fp(e)})}function cp(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Lt(e,l)}catch{return!0}}function fp(e){var t=cl(e,2);t!==null&&jt(t,e,2)}function Ju(e){var t=Tt();if(typeof e=="function"){var l=e;if(e=l(),Li){Gn(!0);try{l()}finally{Gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function hp(e,t,l,s){return e.baseState=l,$u(e,Ae,typeof s=="function"?s:wn)}function N1(e,t,l,s,o){if(Sr(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};D.T!==null?l(!0):c.isTransition=!1,s(c),l=t.pending,l===null?(c.next=t.pending=c,dp(t,c)):(c.next=l.next,t.pending=l.next=c)}}function dp(e,t){var l=t.action,s=t.payload,o=e.state;if(t.isTransition){var c=D.T,d={};D.T=d;try{var _=l(o,s),v=D.S;v!==null&&v(d,_),pp(e,t,_)}catch(w){ec(e,t,w)}finally{D.T=c}}else try{c=l(o,s),pp(e,t,c)}catch(w){ec(e,t,w)}}function pp(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(s){mp(e,t,s)},function(s){return ec(e,t,s)}):mp(e,t,l)}function mp(e,t,l){t.status="fulfilled",t.value=l,gp(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,dp(e,l)))}function ec(e,t,l){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=l,gp(t),t=t.next;while(t!==s)}e.action=null}function gp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _p(e,t){return t}function yp(e,t){if(Ce){var l=Me.formState;if(l!==null){e:{var s=he;if(Ce){if(qe){t:{for(var o=qe,c=dn;o.nodeType!==8;){if(!c){o=null;break t}if(o=sn(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){qe=sn(o.nextSibling),s=o.data==="F!";break e}}Di(s)}s=!1}s&&(t=l[0])}}return l=Tt(),l.memoizedState=l.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_p,lastRenderedState:t},l.queue=s,l=kp.bind(null,he,s),s.dispatch=l,s=Ju(!1),c=ac.bind(null,he,!1,s.queue),s=Tt(),o={state:t,dispatch:null,action:e,pending:null},s.queue=o,l=N1.bind(null,he,o,c,l),o.dispatch=l,s.memoizedState=e,[t,l,!1]}function vp(e){var t=Fe();return bp(t,Ae,e)}function bp(e,t,l){if(t=$u(e,t,_p)[0],e=yr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Ma(t)}catch(d){throw d===wa?hr:d}else s=t;t=Fe();var o=t.queue,c=o.dispatch;return l!==t.memoizedState&&(he.flags|=2048,vl(9,vr(),D1.bind(null,o,l),null)),[s,c,e]}function D1(e,t){e.action=t}function Sp(e){var t=Fe(),l=Ae;if(l!==null)return bp(t,l,e);Fe(),t=t.memoizedState,l=Fe();var s=l.queue.dispatch;return l.memoizedState=e,[t,s,!1]}function vl(e,t,l,s){return e={tag:e,create:l,deps:s,inst:t,next:null},t=he.updateQueue,t===null&&(t=Pu(),he.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(s=l.next,l.next=e,e.next=s,t.lastEffect=e),e}function vr(){return{destroy:void 0,resource:void 0}}function Ep(){return Fe().memoizedState}function br(e,t,l,s){var o=Tt();s=s===void 0?null:s,he.flags|=e,o.memoizedState=vl(1|t,vr(),l,s)}function za(e,t,l,s){var o=Fe();s=s===void 0?null:s;var c=o.memoizedState.inst;Ae!==null&&s!==null&&Vu(s,Ae.memoizedState.deps)?o.memoizedState=vl(t,c,l,s):(he.flags|=e,o.memoizedState=vl(1|t,c,l,s))}function Cp(e,t){br(8390656,8,e,t)}function xp(e,t){za(2048,8,e,t)}function Tp(e,t){return za(4,2,e,t)}function wp(e,t){return za(4,4,e,t)}function Ap(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rp(e,t,l){l=l!=null?l.concat([e]):null,za(4,4,Ap.bind(null,t,e),l)}function tc(){}function Np(e,t){var l=Fe();t=t===void 0?null:t;var s=l.memoizedState;return t!==null&&Vu(t,s[1])?s[0]:(l.memoizedState=[e,t],e)}function Dp(e,t){var l=Fe();t=t===void 0?null:t;var s=l.memoizedState;if(t!==null&&Vu(t,s[1]))return s[0];if(s=e(),Li){Gn(!0);try{e()}finally{Gn(!1)}}return l.memoizedState=[s,t],s}function nc(e,t,l){return l===void 0||(Pn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=zm(),he.lanes|=e,ni|=e,l)}function Op(e,t,l,s){return Lt(l,t)?l:gl.current!==null?(e=nc(e,l,s),Lt(e,t)||(at=!0),e):(Pn&42)===0?(at=!0,e.memoizedState=l):(e=zm(),he.lanes|=e,ni|=e,t)}function Mp(e,t,l,s,o){var c=H.p;H.p=c!==0&&8>c?c:8;var d=D.T,_={};D.T=_,ac(e,!1,t,l);try{var v=o(),w=D.S;if(w!==null&&w(_,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var M=w1(v,s);La(e,t,M,Ht(e))}else La(e,t,s,Ht(e))}catch(L){La(e,t,{then:function(){},status:"rejected",reason:L},Ht())}finally{H.p=c,D.T=d}}function O1(){}function ic(e,t,l,s){if(e.tag!==5)throw Error(r(476));var o=zp(e).queue;Mp(e,o,t,Z,l===null?O1:function(){return Lp(e),l(s)})}function zp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:Z},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lp(e){var t=zp(e).next.queue;La(e,t,{},Ht())}function lc(){return _t(Wa)}function Up(){return Fe().memoizedState}function Ip(){return Fe().memoizedState}function M1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Ht();e=Zn(l);var s=Kn(t,e,l);s!==null&&(jt(s,t,l),Ra(s,t,l)),t={cache:Lu()},e.payload=t;return}t=t.return}}function z1(e,t,l){var s=Ht();l={lane:s,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Sr(e)?Bp(t,l):(l=xu(e,t,l,s),l!==null&&(jt(l,e,s),Hp(l,t,s)))}function kp(e,t,l){var s=Ht();La(e,t,l,s)}function La(e,t,l,s){var o={lane:s,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Sr(e))Bp(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,_=c(d,l);if(o.hasEagerState=!0,o.eagerState=_,Lt(_,d))return lr(e,t,o,0),Me===null&&ir(),!1}catch{}finally{}if(l=xu(e,t,o,s),l!==null)return jt(l,e,s),Hp(l,t,s),!0}return!1}function ac(e,t,l,s){if(s={lane:2,revertLane:kc(),action:s,hasEagerState:!1,eagerState:null,next:null},Sr(e)){if(t)throw Error(r(479))}else t=xu(e,l,s,2),t!==null&&jt(t,e,2)}function Sr(e){var t=e.alternate;return e===he||t!==null&&t===he}function Bp(e,t){_l=mr=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Hp(e,t,l){if((l&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,l|=s,t.lanes=l,Zh(e,l)}}var Er={readContext:_t,use:_r,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},jp={readContext:_t,use:_r,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Cp,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,br(4194308,4,Ap.bind(null,t,e),l)},useLayoutEffect:function(e,t){return br(4194308,4,e,t)},useInsertionEffect:function(e,t){br(4,2,e,t)},useMemo:function(e,t){var l=Tt();t=t===void 0?null:t;var s=e();if(Li){Gn(!0);try{e()}finally{Gn(!1)}}return l.memoizedState=[s,t],s},useReducer:function(e,t,l){var s=Tt();if(l!==void 0){var o=l(t);if(Li){Gn(!0);try{l(t)}finally{Gn(!1)}}}else o=t;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=z1.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ju(e);var t=e.queue,l=kp.bind(null,he,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:tc,useDeferredValue:function(e,t){var l=Tt();return nc(l,e,t)},useTransition:function(){var e=Ju(!1);return e=Mp.bind(null,he,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var s=he,o=Tt();if(Ce){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Me===null)throw Error(r(349));(be&124)!==0||rp(s,t,l)}o.memoizedState=l;var c={value:l,getSnapshot:t};return o.queue=c,Cp(up.bind(null,s,c,e),[e]),s.flags|=2048,vl(9,vr(),op.bind(null,s,c,l,t),null),l},useId:function(){var e=Tt(),t=Me.identifierPrefix;if(Ce){var l=Cn,s=En;l=(s&~(1<<32-zt(s)-1)).toString(32)+l,t="«"+t+"R"+l,l=gr++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=A1++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:lc,useFormState:yp,useActionState:yp,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ac.bind(null,he,!0,l),l.dispatch=t,[e,t]},useMemoCache:Fu,useCacheRefresh:function(){return Tt().memoizedState=M1.bind(null,he)}},qp={readContext:_t,use:_r,useCallback:Np,useContext:_t,useEffect:xp,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:wp,useMemo:Dp,useReducer:yr,useRef:Ep,useState:function(){return yr(wn)},useDebugValue:tc,useDeferredValue:function(e,t){var l=Fe();return Op(l,Ae.memoizedState,e,t)},useTransition:function(){var e=yr(wn)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ma(e),t]},useSyncExternalStore:sp,useId:Up,useHostTransitionStatus:lc,useFormState:vp,useActionState:vp,useOptimistic:function(e,t){var l=Fe();return hp(l,Ae,e,t)},useMemoCache:Fu,useCacheRefresh:Ip},L1={readContext:_t,use:_r,useCallback:Np,useContext:_t,useEffect:xp,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:wp,useMemo:Dp,useReducer:Wu,useRef:Ep,useState:function(){return Wu(wn)},useDebugValue:tc,useDeferredValue:function(e,t){var l=Fe();return Ae===null?nc(l,e,t):Op(l,Ae.memoizedState,e,t)},useTransition:function(){var e=Wu(wn)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ma(e),t]},useSyncExternalStore:sp,useId:Up,useHostTransitionStatus:lc,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,t){var l=Fe();return Ae!==null?hp(l,Ae,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:Ip},bl=null,Ua=0;function Cr(e){var t=Ua;return Ua+=1,bl===null&&(bl=[]),Wd(bl,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xr(e,t){throw t.$$typeof===b?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gp(e){var t=e._init;return t(e._payload)}function Yp(e){function t(x,E){if(e){var T=x.deletions;T===null?(x.deletions=[E],x.flags|=16):T.push(E)}}function l(x,E){if(!e)return null;for(;E!==null;)t(x,E),E=E.sibling;return null}function s(x){for(var E=new Map;x!==null;)x.key!==null?E.set(x.key,x):E.set(x.index,x),x=x.sibling;return E}function o(x,E){return x=Sn(x,E),x.index=0,x.sibling=null,x}function c(x,E,T){return x.index=T,e?(T=x.alternate,T!==null?(T=T.index,T<E?(x.flags|=67108866,E):T):(x.flags|=67108866,E)):(x.flags|=1048576,E)}function d(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function _(x,E,T,z){return E===null||E.tag!==6?(E=wu(T,x.mode,z),E.return=x,E):(E=o(E,T),E.return=x,E)}function v(x,E,T,z){var q=T.type;return q===I?M(x,E,T.props.children,z,T.key):E!==null&&(E.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Be&&Gp(q)===E.type)?(E=o(E,T.props),Ia(E,T),E.return=x,E):(E=sr(T.type,T.key,T.props,null,x.mode,z),Ia(E,T),E.return=x,E)}function w(x,E,T,z){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Au(T,x.mode,z),E.return=x,E):(E=o(E,T.children||[]),E.return=x,E)}function M(x,E,T,z,q){return E===null||E.tag!==7?(E=wi(T,x.mode,z,q),E.return=x,E):(E=o(E,T),E.return=x,E)}function L(x,E,T){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=wu(""+E,x.mode,T),E.return=x,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return T=sr(E.type,E.key,E.props,null,x.mode,T),Ia(T,E),T.return=x,T;case O:return E=Au(E,x.mode,T),E.return=x,E;case Be:var z=E._init;return E=z(E._payload),L(x,E,T)}if(Ze(E)||Xe(E))return E=wi(E,x.mode,T,null),E.return=x,E;if(typeof E.then=="function")return L(x,Cr(E),T);if(E.$$typeof===te)return L(x,cr(x,E),T);xr(x,E)}return null}function A(x,E,T,z){var q=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return q!==null?null:_(x,E,""+T,z);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case C:return T.key===q?v(x,E,T,z):null;case O:return T.key===q?w(x,E,T,z):null;case Be:return q=T._init,T=q(T._payload),A(x,E,T,z)}if(Ze(T)||Xe(T))return q!==null?null:M(x,E,T,z,null);if(typeof T.then=="function")return A(x,E,Cr(T),z);if(T.$$typeof===te)return A(x,E,cr(x,T),z);xr(x,T)}return null}function R(x,E,T,z,q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return x=x.get(T)||null,_(E,x,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return x=x.get(z.key===null?T:z.key)||null,v(E,x,z,q);case O:return x=x.get(z.key===null?T:z.key)||null,w(E,x,z,q);case Be:var de=z._init;return z=de(z._payload),R(x,E,T,z,q)}if(Ze(z)||Xe(z))return x=x.get(T)||null,M(E,x,z,q,null);if(typeof z.then=="function")return R(x,E,T,Cr(z),q);if(z.$$typeof===te)return R(x,E,T,cr(E,z),q);xr(E,z)}return null}function ne(x,E,T,z){for(var q=null,de=null,X=E,J=E=0,rt=null;X!==null&&J<T.length;J++){X.index>J?(rt=X,X=null):rt=X.sibling;var Se=A(x,X,T[J],z);if(Se===null){X===null&&(X=rt);break}e&&X&&Se.alternate===null&&t(x,X),E=c(Se,E,J),de===null?q=Se:de.sibling=Se,de=Se,X=rt}if(J===T.length)return l(x,X),Ce&&Ri(x,J),q;if(X===null){for(;J<T.length;J++)X=L(x,T[J],z),X!==null&&(E=c(X,E,J),de===null?q=X:de.sibling=X,de=X);return Ce&&Ri(x,J),q}for(X=s(X);J<T.length;J++)rt=R(X,x,J,T[J],z),rt!==null&&(e&&rt.alternate!==null&&X.delete(rt.key===null?J:rt.key),E=c(rt,E,J),de===null?q=rt:de.sibling=rt,de=rt);return e&&X.forEach(function(fi){return t(x,fi)}),Ce&&Ri(x,J),q}function $(x,E,T,z){if(T==null)throw Error(r(151));for(var q=null,de=null,X=E,J=E=0,rt=null,Se=T.next();X!==null&&!Se.done;J++,Se=T.next()){X.index>J?(rt=X,X=null):rt=X.sibling;var fi=A(x,X,Se.value,z);if(fi===null){X===null&&(X=rt);break}e&&X&&fi.alternate===null&&t(x,X),E=c(fi,E,J),de===null?q=fi:de.sibling=fi,de=fi,X=rt}if(Se.done)return l(x,X),Ce&&Ri(x,J),q;if(X===null){for(;!Se.done;J++,Se=T.next())Se=L(x,Se.value,z),Se!==null&&(E=c(Se,E,J),de===null?q=Se:de.sibling=Se,de=Se);return Ce&&Ri(x,J),q}for(X=s(X);!Se.done;J++,Se=T.next())Se=R(X,x,J,Se.value,z),Se!==null&&(e&&Se.alternate!==null&&X.delete(Se.key===null?J:Se.key),E=c(Se,E,J),de===null?q=Se:de.sibling=Se,de=Se);return e&&X.forEach(function(Ub){return t(x,Ub)}),Ce&&Ri(x,J),q}function Ne(x,E,T,z){if(typeof T=="object"&&T!==null&&T.type===I&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case C:e:{for(var q=T.key;E!==null;){if(E.key===q){if(q=T.type,q===I){if(E.tag===7){l(x,E.sibling),z=o(E,T.props.children),z.return=x,x=z;break e}}else if(E.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Be&&Gp(q)===E.type){l(x,E.sibling),z=o(E,T.props),Ia(z,T),z.return=x,x=z;break e}l(x,E);break}else t(x,E);E=E.sibling}T.type===I?(z=wi(T.props.children,x.mode,z,T.key),z.return=x,x=z):(z=sr(T.type,T.key,T.props,null,x.mode,z),Ia(z,T),z.return=x,x=z)}return d(x);case O:e:{for(q=T.key;E!==null;){if(E.key===q)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){l(x,E.sibling),z=o(E,T.children||[]),z.return=x,x=z;break e}else{l(x,E);break}else t(x,E);E=E.sibling}z=Au(T,x.mode,z),z.return=x,x=z}return d(x);case Be:return q=T._init,T=q(T._payload),Ne(x,E,T,z)}if(Ze(T))return ne(x,E,T,z);if(Xe(T)){if(q=Xe(T),typeof q!="function")throw Error(r(150));return T=q.call(T),$(x,E,T,z)}if(typeof T.then=="function")return Ne(x,E,Cr(T),z);if(T.$$typeof===te)return Ne(x,E,cr(x,T),z);xr(x,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,E!==null&&E.tag===6?(l(x,E.sibling),z=o(E,T),z.return=x,x=z):(l(x,E),z=wu(T,x.mode,z),z.return=x,x=z),d(x)):l(x,E)}return function(x,E,T,z){try{Ua=0;var q=Ne(x,E,T,z);return bl=null,q}catch(X){if(X===wa||X===hr)throw X;var de=Ut(29,X,null,x.mode);return de.lanes=z,de.return=x,de}finally{}}}var Sl=Yp(!0),Vp=Yp(!1),Ft=U(null),pn=null;function Fn(e){var t=e.alternate;j(tt,tt.current&1),j(Ft,e),pn===null&&(t===null||gl.current!==null||t.memoizedState!==null)&&(pn=e)}function Qp(e){if(e.tag===22){if(j(tt,tt.current),j(Ft,e),pn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(pn=e)}}else $n()}function $n(){j(tt,tt.current),j(Ft,Ft.current)}function An(e){B(Ft),pn===e&&(pn=null),B(tt)}var tt=U(0);function Tr(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Pc(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function sc(e,t,l,s){t=e.memoizedState,l=l(s,t),l=l==null?t:y({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var rc={enqueueSetState:function(e,t,l){e=e._reactInternals;var s=Ht(),o=Zn(s);o.payload=t,l!=null&&(o.callback=l),t=Kn(e,o,s),t!==null&&(jt(t,e,s),Ra(t,e,s))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var s=Ht(),o=Zn(s);o.tag=1,o.payload=t,l!=null&&(o.callback=l),t=Kn(e,o,s),t!==null&&(jt(t,e,s),Ra(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ht(),s=Zn(l);s.tag=2,t!=null&&(s.callback=t),t=Kn(e,s,l),t!==null&&(jt(t,e,l),Ra(t,e,l))}};function Xp(e,t,l,s,o,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):t.prototype&&t.prototype.isPureReactComponent?!ya(l,s)||!ya(o,c):!0}function Zp(e,t,l,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,s),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function Ui(e,t){var l=t;if("ref"in t){l={};for(var s in t)s!=="ref"&&(l[s]=t[s])}if(e=e.defaultProps){l===t&&(l=y({},l));for(var o in e)l[o]===void 0&&(l[o]=e[o])}return l}var wr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kp(e){wr(e)}function Pp(e){console.error(e)}function Fp(e){wr(e)}function Ar(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function $p(e,t,l){try{var s=e.onCaughtError;s(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function oc(e,t,l){return l=Zn(l),l.tag=3,l.payload={element:null},l.callback=function(){Ar(e,t)},l}function Wp(e){return e=Zn(e),e.tag=3,e}function Jp(e,t,l,s){var o=l.type.getDerivedStateFromError;if(typeof o=="function"){var c=s.value;e.payload=function(){return o(c)},e.callback=function(){$p(t,l,s)}}var d=l.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){$p(t,l,s),typeof o!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})})}function U1(e,t,l,s,o){if(l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=l.alternate,t!==null&&Ca(t,l,o,!0),l=Ft.current,l!==null){switch(l.tag){case 13:return pn===null?Mc():l.alternate===null&&Ge===0&&(Ge=3),l.flags&=-257,l.flags|=65536,l.lanes=o,s===ku?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([s]):t.add(s),Lc(e,s,o)),!1;case 22:return l.flags|=65536,s===ku?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([s]):l.add(s)),Lc(e,s,o)),!1}throw Error(r(435,l.tag))}return Lc(e,s,o),Mc(),!1}if(Ce)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,s!==Du&&(e=Error(r(422),{cause:s}),Ea(Xt(e,l)))):(s!==Du&&(t=Error(r(423),{cause:s}),Ea(Xt(t,l))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Xt(s,l),o=oc(e.stateNode,s,o),ju(e,o),Ge!==4&&(Ge=2)),!1;var c=Error(r(520),{cause:s});if(c=Xt(c,l),Ya===null?Ya=[c]:Ya.push(c),Ge!==4&&(Ge=2),t===null)return!0;s=Xt(s,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=o&-o,l.lanes|=e,e=oc(l.stateNode,s,e),ju(l,e),!1;case 1:if(t=l.type,c=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))))return l.flags|=65536,o&=-o,l.lanes|=o,o=Wp(o),Jp(o,e,l,s),ju(l,o),!1}l=l.return}while(l!==null);return!1}var em=Error(r(461)),at=!1;function ht(e,t,l,s){t.child=e===null?Vp(t,null,l,s):Sl(t,e.child,l,s)}function tm(e,t,l,s,o){l=l.render;var c=t.ref;if("ref"in s){var d={};for(var _ in s)_!=="ref"&&(d[_]=s[_])}else d=s;return Mi(t),s=Qu(e,t,l,d,c,o),_=Xu(),e!==null&&!at?(Zu(e,t,o),Rn(e,t,o)):(Ce&&_&&Ru(t),t.flags|=1,ht(e,t,s,o),t.child)}function nm(e,t,l,s,o){if(e===null){var c=l.type;return typeof c=="function"&&!Tu(c)&&c.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=c,im(e,t,c,s,o)):(e=sr(l.type,null,s,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!gc(e,o)){var d=c.memoizedProps;if(l=l.compare,l=l!==null?l:ya,l(d,s)&&e.ref===t.ref)return Rn(e,t,o)}return t.flags|=1,e=Sn(c,s),e.ref=t.ref,e.return=t,t.child=e}function im(e,t,l,s,o){if(e!==null){var c=e.memoizedProps;if(ya(c,s)&&e.ref===t.ref)if(at=!1,t.pendingProps=s=c,gc(e,o))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,Rn(e,t,o)}return uc(e,t,l,s,o)}function lm(e,t,l){var s=t.pendingProps,o=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((t.flags&128)!==0){if(s=c!==null?c.baseLanes|l:l,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;t.childLanes=c&~s}else t.childLanes=0,t.child=null;return am(e,t,s,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fr(t,c!==null?c.cachePool:null),c!==null?ip(t,c):Gu(),Qp(t);else return t.lanes=t.childLanes=536870912,am(e,t,c!==null?c.baseLanes|l:l,l)}else c!==null?(fr(t,c.cachePool),ip(t,c),$n(),t.memoizedState=null):(e!==null&&fr(t,null),Gu(),$n());return ht(e,t,o,l),t.child}function am(e,t,l,s){var o=Iu();return o=o===null?null:{parent:et._currentValue,pool:o},t.memoizedState={baseLanes:l,cachePool:o},e!==null&&fr(t,null),Gu(),Qp(t),e!==null&&Ca(e,t,s,!0),null}function Rr(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function uc(e,t,l,s,o){return Mi(t),l=Qu(e,t,l,s,void 0,o),s=Xu(),e!==null&&!at?(Zu(e,t,o),Rn(e,t,o)):(Ce&&s&&Ru(t),t.flags|=1,ht(e,t,l,o),t.child)}function sm(e,t,l,s,o,c){return Mi(t),t.updateQueue=null,l=ap(t,s,l,o),lp(e),s=Xu(),e!==null&&!at?(Zu(e,t,c),Rn(e,t,c)):(Ce&&s&&Ru(t),t.flags|=1,ht(e,t,l,c),t.child)}function rm(e,t,l,s,o){if(Mi(t),t.stateNode===null){var c=fl,d=l.contextType;typeof d=="object"&&d!==null&&(c=_t(d)),c=new l(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=rc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},Bu(t),d=l.contextType,c.context=typeof d=="object"&&d!==null?_t(d):fl,c.state=t.memoizedState,d=l.getDerivedStateFromProps,typeof d=="function"&&(sc(t,l,d,s),c.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&rc.enqueueReplaceState(c,c.state,null),Da(t,s,c,o),Na(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var _=t.memoizedProps,v=Ui(l,_);c.props=v;var w=c.context,M=l.contextType;d=fl,typeof M=="object"&&M!==null&&(d=_t(M));var L=l.getDerivedStateFromProps;M=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,M||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_||w!==d)&&Zp(t,c,s,d),Xn=!1;var A=t.memoizedState;c.state=A,Da(t,s,c,o),Na(),w=t.memoizedState,_||A!==w||Xn?(typeof L=="function"&&(sc(t,l,L,s),w=t.memoizedState),(v=Xn||Xp(t,l,v,s,A,w,d))?(M||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=w),c.props=s,c.state=w,c.context=d,s=v):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,Hu(e,t),d=t.memoizedProps,M=Ui(l,d),c.props=M,L=t.pendingProps,A=c.context,w=l.contextType,v=fl,typeof w=="object"&&w!==null&&(v=_t(w)),_=l.getDerivedStateFromProps,(w=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==L||A!==v)&&Zp(t,c,s,v),Xn=!1,A=t.memoizedState,c.state=A,Da(t,s,c,o),Na();var R=t.memoizedState;d!==L||A!==R||Xn||e!==null&&e.dependencies!==null&&ur(e.dependencies)?(typeof _=="function"&&(sc(t,l,_,s),R=t.memoizedState),(M=Xn||Xp(t,l,M,s,A,R,v)||e!==null&&e.dependencies!==null&&ur(e.dependencies))?(w||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,R,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,R,v)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=R),c.props=s,c.state=R,c.context=v,s=M):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,Rr(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,l=s&&typeof l.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=Sl(t,e.child,null,o),t.child=Sl(t,null,l,o)):ht(e,t,l,o),t.memoizedState=c.state,e=t.child):e=Rn(e,t,o),e}function om(e,t,l,s){return Sa(),t.flags|=256,ht(e,t,l,s),t.child}var cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(e){return{baseLanes:e,cachePool:Pd()}}function hc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=$t),e}function um(e,t,l){var s=t.pendingProps,o=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),d&&(o=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Fn(t):$n(),Ce){var _=qe,v;if(v=_){e:{for(v=_,_=dn;v.nodeType!==8;){if(!_){_=null;break e}if(v=sn(v.nextSibling),v===null){_=null;break e}}_=v}_!==null?(t.memoizedState={dehydrated:_,treeContext:Ai!==null?{id:En,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},v=Ut(18,null,null,0),v.stateNode=_,v.return=t,t.child=v,St=t,qe=null,v=!0):v=!1}v||Di(t)}if(_=t.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return Pc(_)?t.lanes=32:t.lanes=536870912,null;An(t)}return _=s.children,s=s.fallback,o?($n(),o=t.mode,_=Nr({mode:"hidden",children:_},o),s=wi(s,o,l,null),_.return=t,s.return=t,_.sibling=s,t.child=_,o=t.child,o.memoizedState=fc(l),o.childLanes=hc(e,d,l),t.memoizedState=cc,s):(Fn(t),dc(t,_))}if(v=e.memoizedState,v!==null&&(_=v.dehydrated,_!==null)){if(c)t.flags&256?(Fn(t),t.flags&=-257,t=pc(e,t,l)):t.memoizedState!==null?($n(),t.child=e.child,t.flags|=128,t=null):($n(),o=s.fallback,_=t.mode,s=Nr({mode:"visible",children:s.children},_),o=wi(o,_,l,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,Sl(t,e.child,null,l),s=t.child,s.memoizedState=fc(l),s.childLanes=hc(e,d,l),t.memoizedState=cc,t=o);else if(Fn(t),Pc(_)){if(d=_.nextSibling&&_.nextSibling.dataset,d)var w=d.dgst;d=w,s=Error(r(419)),s.stack="",s.digest=d,Ea({value:s,source:null,stack:null}),t=pc(e,t,l)}else if(at||Ca(e,t,l,!1),d=(l&e.childLanes)!==0,at||d){if(d=Me,d!==null&&(s=l&-l,s=(s&42)!==0?1:Fo(s),s=(s&(d.suspendedLanes|l))!==0?0:s,s!==0&&s!==v.retryLane))throw v.retryLane=s,cl(e,s),jt(d,e,s),em;_.data==="$?"||Mc(),t=pc(e,t,l)}else _.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,qe=sn(_.nextSibling),St=t,Ce=!0,Ni=null,dn=!1,e!==null&&(Kt[Pt++]=En,Kt[Pt++]=Cn,Kt[Pt++]=Ai,En=e.id,Cn=e.overflow,Ai=t),t=dc(t,s.children),t.flags|=4096);return t}return o?($n(),o=s.fallback,_=t.mode,v=e.child,w=v.sibling,s=Sn(v,{mode:"hidden",children:s.children}),s.subtreeFlags=v.subtreeFlags&65011712,w!==null?o=Sn(w,o):(o=wi(o,_,l,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,_=e.child.memoizedState,_===null?_=fc(l):(v=_.cachePool,v!==null?(w=et._currentValue,v=v.parent!==w?{parent:w,pool:w}:v):v=Pd(),_={baseLanes:_.baseLanes|l,cachePool:v}),o.memoizedState=_,o.childLanes=hc(e,d,l),t.memoizedState=cc,s):(Fn(t),l=e.child,e=l.sibling,l=Sn(l,{mode:"visible",children:s.children}),l.return=t,l.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=l,t.memoizedState=null,l)}function dc(e,t){return t=Nr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nr(e,t){return e=Ut(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function pc(e,t,l){return Sl(t,e.child,null,l),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cm(e,t,l){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Mu(e.return,t,l)}function mc(e,t,l,s,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:l,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=l,c.tailMode=o)}function fm(e,t,l){var s=t.pendingProps,o=s.revealOrder,c=s.tail;if(ht(e,t,s.children,l),s=tt.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cm(e,l,t);else if(e.tag===19)cm(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(j(tt,s),o){case"forwards":for(l=t.child,o=null;l!==null;)e=l.alternate,e!==null&&Tr(e)===null&&(o=l),l=l.sibling;l=o,l===null?(o=t.child,t.child=null):(o=l.sibling,l.sibling=null),mc(t,!1,o,l,c);break;case"backwards":for(l=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Tr(e)===null){t.child=o;break}e=o.sibling,o.sibling=l,l=o,o=e}mc(t,!0,l,null,c);break;case"together":mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rn(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ni|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Sn(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Sn(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ur(e)))}function I1(e,t,l){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),Qn(t,et,e.memoizedState.cache),Sa();break;case 27:case 5:He(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Fn(t),t.flags|=128,null):(l&t.child.childLanes)!==0?um(e,t,l):(Fn(t),e=Rn(e,t,l),e!==null?e.sibling:null);Fn(t);break;case 19:var o=(e.flags&128)!==0;if(s=(l&t.childLanes)!==0,s||(Ca(e,t,l,!1),s=(l&t.childLanes)!==0),o){if(s)return fm(e,t,l);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),j(tt,tt.current),s)break;return null;case 22:case 23:return t.lanes=0,lm(e,t,l);case 24:Qn(t,et,e.memoizedState.cache)}return Rn(e,t,l)}function hm(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!gc(e,l)&&(t.flags&128)===0)return at=!1,I1(e,t,l);at=(e.flags&131072)!==0}else at=!1,Ce&&(t.flags&1048576)!==0&&Gd(t,or,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=t.elementType,o=s._init;if(s=o(s._payload),t.type=s,typeof s=="function")Tu(s)?(e=Ui(s,e),t.tag=1,t=rm(null,t,s,e,l)):(t.tag=0,t=uc(null,t,s,e,l));else{if(s!=null){if(o=s.$$typeof,o===re){t.tag=11,t=tm(null,t,s,e,l);break e}else if(o===P){t.tag=14,t=nm(null,t,s,e,l);break e}}throw t=nn(s)||s,Error(r(306,t,""))}}return t;case 0:return uc(e,t,t.type,t.pendingProps,l);case 1:return s=t.type,o=Ui(s,t.pendingProps),rm(e,t,s,o,l);case 3:e:{if(Y(t,t.stateNode.containerInfo),e===null)throw Error(r(387));s=t.pendingProps;var c=t.memoizedState;o=c.element,Hu(e,t),Da(t,s,null,l);var d=t.memoizedState;if(s=d.cache,Qn(t,et,s),s!==c.cache&&zu(t,[et],l,!0),Na(),s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=om(e,t,s,l);break e}else if(s!==o){o=Xt(Error(r(424)),t),Ea(o),t=om(e,t,s,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=sn(e.firstChild),St=t,Ce=!0,Ni=null,dn=!0,l=Vp(t,null,s,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Sa(),s===o){t=Rn(e,t,l);break e}ht(e,t,s,l)}t=t.child}return t;case 26:return Rr(e,t),e===null?(l=gg(t.type,null,t.pendingProps,null))?t.memoizedState=l:Ce||(l=t.type,e=t.pendingProps,s=Yr(F.current).createElement(l),s[gt]=t,s[Ct]=e,pt(s,l,e),lt(s),t.stateNode=s):t.memoizedState=gg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return He(t),e===null&&Ce&&(s=t.stateNode=dg(t.type,t.pendingProps,F.current),St=t,dn=!0,o=qe,si(t.type)?(Fc=o,qe=sn(s.firstChild)):qe=o),ht(e,t,t.pendingProps.children,l),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=s=qe)&&(s=cb(s,t.type,t.pendingProps,dn),s!==null?(t.stateNode=s,St=t,qe=sn(s.firstChild),dn=!1,o=!0):o=!1),o||Di(t)),He(t),o=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,s=c.children,Xc(o,c)?s=null:d!==null&&Xc(o,d)&&(t.flags|=32),t.memoizedState!==null&&(o=Qu(e,t,R1,null,null,l),Wa._currentValue=o),Rr(e,t),ht(e,t,s,l),t.child;case 6:return e===null&&Ce&&((e=l=qe)&&(l=fb(l,t.pendingProps,dn),l!==null?(t.stateNode=l,St=t,qe=null,e=!0):e=!1),e||Di(t)),null;case 13:return um(e,t,l);case 4:return Y(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Sl(t,null,s,l):ht(e,t,s,l),t.child;case 11:return tm(e,t,t.type,t.pendingProps,l);case 7:return ht(e,t,t.pendingProps,l),t.child;case 8:return ht(e,t,t.pendingProps.children,l),t.child;case 12:return ht(e,t,t.pendingProps.children,l),t.child;case 10:return s=t.pendingProps,Qn(t,t.type,s.value),ht(e,t,s.children,l),t.child;case 9:return o=t.type._context,s=t.pendingProps.children,Mi(t),o=_t(o),s=s(o),t.flags|=1,ht(e,t,s,l),t.child;case 14:return nm(e,t,t.type,t.pendingProps,l);case 15:return im(e,t,t.type,t.pendingProps,l);case 19:return fm(e,t,l);case 31:return s=t.pendingProps,l=t.mode,s={mode:s.mode,children:s.children},e===null?(l=Nr(s,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Sn(e.child,s),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return lm(e,t,l);case 24:return Mi(t),s=_t(et),e===null?(o=Iu(),o===null&&(o=Me,c=Lu(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=l),o=c),t.memoizedState={parent:s,cache:o},Bu(t),Qn(t,et,o)):((e.lanes&l)!==0&&(Hu(e,t),Da(t,null,null,l),Na()),o=e.memoizedState,c=t.memoizedState,o.parent!==s?(o={parent:s,cache:s},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Qn(t,et,s)):(s=c.cache,Qn(t,et,s),s!==o.cache&&zu(t,[et],l,!0))),ht(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Nn(e){e.flags|=4}function dm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sg(t)){if(t=Ft.current,t!==null&&((be&4194048)===be?pn!==null:(be&62914560)!==be&&(be&536870912)===0||t!==pn))throw Aa=ku,Fd;e.flags|=8192}}function Dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qh():536870912,e.lanes|=t,Tl|=t)}function ka(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,s=0;if(t)for(var o=e.child;o!==null;)l|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)l|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=l,t}function k1(e,t,l){var s=t.pendingProps;switch(Nu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return l=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Tn(et),fe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ba(t)?Nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qd())),je(t),null;case 26:return l=t.memoizedState,e===null?(Nn(t),l!==null?(je(t),dm(t,l)):(je(t),t.flags&=-16777217)):l?l!==e.memoizedState?(Nn(t),je(t),dm(t,l)):(je(t),t.flags&=-16777217):(e.memoizedProps!==s&&Nn(t),je(t),t.flags&=-16777217),null;case 27:We(t),l=F.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Nn(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return je(t),null}e=Q.current,ba(t)?Yd(t):(e=dg(o,s,l),t.stateNode=e,Nn(t))}return je(t),null;case 5:if(We(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Nn(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return je(t),null}if(e=Q.current,ba(t))Yd(t);else{switch(o=Yr(F.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?o.createElement(l,{is:s.is}):o.createElement(l)}}e[gt]=t,e[Ct]=s;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(pt(e,l,s),l){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Nn(t)}}return je(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Nn(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(r(166));if(e=F.current,ba(t)){if(e=t.stateNode,l=t.memoizedProps,s=null,o=St,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[gt]=t,e=!!(e.nodeValue===l||s!==null&&s.suppressHydrationWarning===!0||sg(e.nodeValue,l)),e||Di(t)}else e=Yr(e).createTextNode(s),e[gt]=t,t.stateNode=e}return je(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ba(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[gt]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else o=Qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(An(t),t):(An(t),null)}if(An(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=s!==null,e=e!==null&&e.memoizedState!==null,l){s=t.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool);var c=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Dr(t,t.updateQueue),je(t),null;case 4:return fe(),e===null&&qc(t.stateNode.containerInfo),je(t),null;case 10:return Tn(t.type),je(t),null;case 19:if(B(tt),o=t.memoizedState,o===null)return je(t),null;if(s=(t.flags&128)!==0,c=o.rendering,c===null)if(s)ka(o,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Tr(e),c!==null){for(t.flags|=128,ka(o,!1),e=c.updateQueue,t.updateQueue=e,Dr(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)qd(l,e),l=l.sibling;return j(tt,tt.current&1|2),t.child}e=e.sibling}o.tail!==null&&hn()>zr&&(t.flags|=128,s=!0,ka(o,!1),t.lanes=4194304)}else{if(!s)if(e=Tr(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Dr(t,e),ka(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Ce)return je(t),null}else 2*hn()-o.renderingStartTime>zr&&l!==536870912&&(t.flags|=128,s=!0,ka(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(e=o.last,e!==null?e.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=hn(),t.sibling=null,e=tt.current,j(tt,s?e&1|2:e&1),t):(je(t),null);case 22:case 23:return An(t),Yu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(l&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),l=t.updateQueue,l!==null&&Dr(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==l&&(t.flags|=2048),e!==null&&B(zi),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Tn(et),je(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function B1(e,t){switch(Nu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(et),fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return We(t),null;case 13:if(An(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(tt),null;case 4:return fe(),null;case 10:return Tn(t.type),null;case 22:case 23:return An(t),Yu(),e!==null&&B(zi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(et),null;case 25:return null;default:return null}}function pm(e,t){switch(Nu(t),t.tag){case 3:Tn(et),fe();break;case 26:case 27:case 5:We(t);break;case 4:fe();break;case 13:An(t);break;case 19:B(tt);break;case 10:Tn(t.type);break;case 22:case 23:An(t),Yu(),e!==null&&B(zi);break;case 24:Tn(et)}}function Ba(e,t){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var o=s.next;l=o;do{if((l.tag&e)===e){s=void 0;var c=l.create,d=l.inst;s=c(),d.destroy=s}l=l.next}while(l!==o)}}catch(_){De(t,t.return,_)}}function Wn(e,t,l){try{var s=t.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){var d=s.inst,_=d.destroy;if(_!==void 0){d.destroy=void 0,o=t;var v=l,w=_;try{w()}catch(M){De(o,v,M)}}}s=s.next}while(s!==c)}}catch(M){De(t,t.return,M)}}function mm(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{np(t,l)}catch(s){De(e,e.return,s)}}}function gm(e,t,l){l.props=Ui(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(s){De(e,t,s)}}function Ha(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof l=="function"?e.refCleanup=l(s):l.current=s}}catch(o){De(e,t,o)}}function mn(e,t){var l=e.ref,s=e.refCleanup;if(l!==null)if(typeof s=="function")try{s()}catch(o){De(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(o){De(e,t,o)}else l.current=null}function _m(e){var t=e.type,l=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&s.focus();break e;case"img":l.src?s.src=l.src:l.srcSet&&(s.srcset=l.srcSet)}}catch(o){De(e,e.return,o)}}function _c(e,t,l){try{var s=e.stateNode;ab(s,e.type,l,t),s[Ct]=t}catch(o){De(e,e.return,o)}}function ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&si(e.type)||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&si(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,t,l){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Gr));else if(s!==4&&(s===27&&si(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(vc(e,t,l),e=e.sibling;e!==null;)vc(e,t,l),e=e.sibling}function Or(e,t,l){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(s!==4&&(s===27&&si(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Or(e,t,l),e=e.sibling;e!==null;)Or(e,t,l),e=e.sibling}function vm(e){var t=e.stateNode,l=e.memoizedProps;try{for(var s=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);pt(t,s,l),t[gt]=e,t[Ct]=l}catch(c){De(e,e.return,c)}}var Dn=!1,Qe=!1,bc=!1,bm=typeof WeakSet=="function"?WeakSet:Set,st=null;function H1(e,t){if(e=e.containerInfo,Vc=Pr,e=Od(e),yu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var s=l.getSelection&&l.getSelection();if(s&&s.rangeCount!==0){l=s.anchorNode;var o=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var d=0,_=-1,v=-1,w=0,M=0,L=e,A=null;t:for(;;){for(var R;L!==l||o!==0&&L.nodeType!==3||(_=d+o),L!==c||s!==0&&L.nodeType!==3||(v=d+s),L.nodeType===3&&(d+=L.nodeValue.length),(R=L.firstChild)!==null;)A=L,L=R;for(;;){if(L===e)break t;if(A===l&&++w===o&&(_=d),A===c&&++M===s&&(v=d),(R=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=R}l=_===-1||v===-1?null:{start:_,end:v}}else l=null}l=l||{start:0,end:0}}else l=null;for(Qc={focusedElem:e,selectionRange:l},Pr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,l=t,o=c.memoizedProps,c=c.memoizedState,s=l.stateNode;try{var ne=Ui(l.type,o,l.elementType===l.type);e=s.getSnapshotBeforeUpdate(ne,c),s.__reactInternalSnapshotBeforeUpdate=e}catch($){De(l,l.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Kc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function Sm(e,t,l){var s=l.flags;switch(l.tag){case 0:case 11:case 15:Jn(e,l),s&4&&Ba(5,l);break;case 1:if(Jn(e,l),s&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(d){De(l,l.return,d)}else{var o=Ui(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){De(l,l.return,d)}}s&64&&mm(l),s&512&&Ha(l,l.return);break;case 3:if(Jn(e,l),s&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{np(e,t)}catch(d){De(l,l.return,d)}}break;case 27:t===null&&s&4&&vm(l);case 26:case 5:Jn(e,l),t===null&&s&4&&_m(l),s&512&&Ha(l,l.return);break;case 12:Jn(e,l);break;case 13:Jn(e,l),s&4&&xm(e,l),s&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=K1.bind(null,l),hb(e,l))));break;case 22:if(s=l.memoizedState!==null||Dn,!s){t=t!==null&&t.memoizedState!==null||Qe,o=Dn;var c=Qe;Dn=s,(Qe=t)&&!c?ei(e,l,(l.subtreeFlags&8772)!==0):Jn(e,l),Dn=o,Qe=c}break;case 30:break;default:Jn(e,l)}}function Em(e){var t=e.alternate;t!==null&&(e.alternate=null,Em(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,wt=!1;function On(e,t,l){for(l=l.child;l!==null;)Cm(e,t,l),l=l.sibling}function Cm(e,t,l){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(sa,l)}catch{}switch(l.tag){case 26:Qe||mn(l,t),On(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Qe||mn(l,t);var s=ke,o=wt;si(l.type)&&(ke=l.stateNode,wt=!1),On(e,t,l),Ka(l.stateNode),ke=s,wt=o;break;case 5:Qe||mn(l,t);case 6:if(s=ke,o=wt,ke=null,On(e,t,l),ke=s,wt=o,ke!==null)if(wt)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(l.stateNode)}catch(c){De(l,t,c)}else try{ke.removeChild(l.stateNode)}catch(c){De(l,t,c)}break;case 18:ke!==null&&(wt?(e=ke,fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),ns(e)):fg(ke,l.stateNode));break;case 4:s=ke,o=wt,ke=l.stateNode.containerInfo,wt=!0,On(e,t,l),ke=s,wt=o;break;case 0:case 11:case 14:case 15:Qe||Wn(2,l,t),Qe||Wn(4,l,t),On(e,t,l);break;case 1:Qe||(mn(l,t),s=l.stateNode,typeof s.componentWillUnmount=="function"&&gm(l,t,s)),On(e,t,l);break;case 21:On(e,t,l);break;case 22:Qe=(s=Qe)||l.memoizedState!==null,On(e,t,l),Qe=s;break;default:On(e,t,l)}}function xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ns(e)}catch(l){De(t,t.return,l)}}function j1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bm),t;default:throw Error(r(435,e.tag))}}function Sc(e,t){var l=j1(e);t.forEach(function(s){var o=P1.bind(null,e,s);l.has(s)||(l.add(s),s.then(o,o))})}function It(e,t){var l=t.deletions;if(l!==null)for(var s=0;s<l.length;s++){var o=l[s],c=e,d=t,_=d;e:for(;_!==null;){switch(_.tag){case 27:if(si(_.type)){ke=_.stateNode,wt=!1;break e}break;case 5:ke=_.stateNode,wt=!1;break e;case 3:case 4:ke=_.stateNode.containerInfo,wt=!0;break e}_=_.return}if(ke===null)throw Error(r(160));Cm(c,d,o),ke=null,wt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Tm(t,e),t=t.sibling}var an=null;function Tm(e,t){var l=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(t,e),kt(e),s&4&&(Wn(3,e,e.return),Ba(3,e),Wn(5,e,e.return));break;case 1:It(t,e),kt(e),s&512&&(Qe||l===null||mn(l,l.return)),s&64&&Dn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?s:l.concat(s))));break;case 26:var o=an;if(It(t,e),kt(e),s&512&&(Qe||l===null||mn(l,l.return)),s&4){var c=l!==null?l.memoizedState:null;if(s=e.memoizedState,l===null)if(s===null)if(e.stateNode===null){e:{s=e.type,l=e.memoizedProps,o=o.ownerDocument||o;t:switch(s){case"title":c=o.getElementsByTagName("title")[0],(!c||c[ua]||c[gt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(s),o.head.insertBefore(c,o.querySelector("head > title"))),pt(c,s,l),c[gt]=e,lt(c),s=c;break e;case"link":var d=vg("link","href",o).get(s+(l.href||""));if(d){for(var _=0;_<d.length;_++)if(c=d[_],c.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&c.getAttribute("rel")===(l.rel==null?null:l.rel)&&c.getAttribute("title")===(l.title==null?null:l.title)&&c.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){d.splice(_,1);break t}}c=o.createElement(s),pt(c,s,l),o.head.appendChild(c);break;case"meta":if(d=vg("meta","content",o).get(s+(l.content||""))){for(_=0;_<d.length;_++)if(c=d[_],c.getAttribute("content")===(l.content==null?null:""+l.content)&&c.getAttribute("name")===(l.name==null?null:l.name)&&c.getAttribute("property")===(l.property==null?null:l.property)&&c.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&c.getAttribute("charset")===(l.charSet==null?null:l.charSet)){d.splice(_,1);break t}}c=o.createElement(s),pt(c,s,l),o.head.appendChild(c);break;default:throw Error(r(468,s))}c[gt]=e,lt(c),s=c}e.stateNode=s}else bg(o,e.type,e.stateNode);else e.stateNode=yg(o,s,e.memoizedProps);else c!==s?(c===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):c.count--,s===null?bg(o,e.type,e.stateNode):yg(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&_c(e,e.memoizedProps,l.memoizedProps)}break;case 27:It(t,e),kt(e),s&512&&(Qe||l===null||mn(l,l.return)),l!==null&&s&4&&_c(e,e.memoizedProps,l.memoizedProps);break;case 5:if(It(t,e),kt(e),s&512&&(Qe||l===null||mn(l,l.return)),e.flags&32){o=e.stateNode;try{il(o,"")}catch(R){De(e,e.return,R)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,_c(e,o,l!==null?l.memoizedProps:o)),s&1024&&(bc=!0);break;case 6:if(It(t,e),kt(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,l=e.stateNode;try{l.nodeValue=s}catch(R){De(e,e.return,R)}}break;case 3:if(Xr=null,o=an,an=Vr(t.containerInfo),It(t,e),an=o,kt(e),s&4&&l!==null&&l.memoizedState.isDehydrated)try{ns(t.containerInfo)}catch(R){De(e,e.return,R)}bc&&(bc=!1,wm(e));break;case 4:s=an,an=Vr(e.stateNode.containerInfo),It(t,e),kt(e),an=s;break;case 12:It(t,e),kt(e);break;case 13:It(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ac=hn()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Sc(e,s)));break;case 22:o=e.memoizedState!==null;var v=l!==null&&l.memoizedState!==null,w=Dn,M=Qe;if(Dn=w||o,Qe=M||v,It(t,e),Qe=M,Dn=w,kt(e),s&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(l===null||v||Dn||Qe||Ii(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){v=l=t;try{if(c=v.stateNode,o)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=v.stateNode;var L=v.memoizedProps.style,A=L!=null&&L.hasOwnProperty("display")?L.display:null;_.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(R){De(v,v.return,R)}}}else if(t.tag===6){if(l===null){v=t;try{v.stateNode.nodeValue=o?"":v.memoizedProps}catch(R){De(v,v.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(l=s.retryQueue,l!==null&&(s.retryQueue=null,Sc(e,l))));break;case 19:It(t,e),kt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Sc(e,s)));break;case 30:break;case 21:break;default:It(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var l,s=e.return;s!==null;){if(ym(s)){l=s;break}s=s.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var o=l.stateNode,c=yc(e);Or(e,c,o);break;case 5:var d=l.stateNode;l.flags&32&&(il(d,""),l.flags&=-33);var _=yc(e);Or(e,_,d);break;case 3:case 4:var v=l.stateNode.containerInfo,w=yc(e);vc(e,w,v);break;default:throw Error(r(161))}}catch(M){De(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sm(e,t.alternate,t),t=t.sibling}function Ii(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Ii(t);break;case 1:mn(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&gm(t,t.return,l),Ii(t);break;case 27:Ka(t.stateNode);case 26:case 5:mn(t,t.return),Ii(t);break;case 22:t.memoizedState===null&&Ii(t);break;case 30:Ii(t);break;default:Ii(t)}e=e.sibling}}function ei(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,o=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:ei(o,c,l),Ba(4,c);break;case 1:if(ei(o,c,l),s=c,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(w){De(s,s.return,w)}if(s=c,o=s.updateQueue,o!==null){var _=s.stateNode;try{var v=o.shared.hiddenCallbacks;if(v!==null)for(o.shared.hiddenCallbacks=null,o=0;o<v.length;o++)tp(v[o],_)}catch(w){De(s,s.return,w)}}l&&d&64&&mm(c),Ha(c,c.return);break;case 27:vm(c);case 26:case 5:ei(o,c,l),l&&s===null&&d&4&&_m(c),Ha(c,c.return);break;case 12:ei(o,c,l);break;case 13:ei(o,c,l),l&&d&4&&xm(o,c);break;case 22:c.memoizedState===null&&ei(o,c,l),Ha(c,c.return);break;case 30:break;default:ei(o,c,l)}t=t.sibling}}function Ec(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&xa(l))}function Cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xa(e))}function gn(e,t,l,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(e,t,l,s),t=t.sibling}function Am(e,t,l,s){var o=t.flags;switch(t.tag){case 0:case 11:case 15:gn(e,t,l,s),o&2048&&Ba(9,t);break;case 1:gn(e,t,l,s);break;case 3:gn(e,t,l,s),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xa(e)));break;case 12:if(o&2048){gn(e,t,l,s),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,_=c.onPostCommit;typeof _=="function"&&_(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){De(t,t.return,v)}}else gn(e,t,l,s);break;case 13:gn(e,t,l,s);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?gn(e,t,l,s):ja(e,t):c._visibility&2?gn(e,t,l,s):(c._visibility|=2,El(e,t,l,s,(t.subtreeFlags&10256)!==0)),o&2048&&Ec(d,t);break;case 24:gn(e,t,l,s),o&2048&&Cc(t.alternate,t);break;default:gn(e,t,l,s)}}function El(e,t,l,s,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,d=t,_=l,v=s,w=d.flags;switch(d.tag){case 0:case 11:case 15:El(c,d,_,v,o),Ba(8,d);break;case 23:break;case 22:var M=d.stateNode;d.memoizedState!==null?M._visibility&2?El(c,d,_,v,o):ja(c,d):(M._visibility|=2,El(c,d,_,v,o)),o&&w&2048&&Ec(d.alternate,d);break;case 24:El(c,d,_,v,o),o&&w&2048&&Cc(d.alternate,d);break;default:El(c,d,_,v,o)}t=t.sibling}}function ja(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,s=t,o=s.flags;switch(s.tag){case 22:ja(l,s),o&2048&&Ec(s.alternate,s);break;case 24:ja(l,s),o&2048&&Cc(s.alternate,s);break;default:ja(l,s)}t=t.sibling}}var qa=8192;function Cl(e){if(e.subtreeFlags&qa)for(e=e.child;e!==null;)Rm(e),e=e.sibling}function Rm(e){switch(e.tag){case 26:Cl(e),e.flags&qa&&e.memoizedState!==null&&Tb(an,e.memoizedState,e.memoizedProps);break;case 5:Cl(e);break;case 3:case 4:var t=an;an=Vr(e.stateNode.containerInfo),Cl(e),an=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=qa,qa=16777216,Cl(e),qa=t):Cl(e));break;default:Cl(e)}}function Nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ga(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var s=t[l];st=s,Om(s,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dm(e),e=e.sibling}function Dm(e){switch(e.tag){case 0:case 11:case 15:Ga(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Ga(e);break;case 12:Ga(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mr(e)):Ga(e);break;default:Ga(e)}}function Mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var s=t[l];st=s,Om(s,e)}Nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),Mr(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Mr(t));break;default:Mr(t)}e=e.sibling}}function Om(e,t){for(;st!==null;){var l=st;switch(l.tag){case 0:case 11:case 15:Wn(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var s=l.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:xa(l.memoizedState.cache)}if(s=l.child,s!==null)s.return=l,st=s;else e:for(l=e;st!==null;){s=st;var o=s.sibling,c=s.return;if(Em(s),s===l){st=null;break e}if(o!==null){o.return=c,st=o;break e}st=c}}}var q1={getCacheForType:function(e){var t=_t(et),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},G1=typeof WeakMap=="function"?WeakMap:Map,Te=0,Me=null,ge=null,be=0,we=0,Bt=null,ti=!1,xl=!1,xc=!1,Mn=0,Ge=0,ni=0,ki=0,Tc=0,$t=0,Tl=0,Ya=null,At=null,wc=!1,Ac=0,zr=1/0,Lr=null,ii=null,dt=0,li=null,wl=null,Al=0,Rc=0,Nc=null,Mm=null,Va=0,Dc=null;function Ht(){if((Te&2)!==0&&be!==0)return be&-be;if(D.T!==null){var e=pl;return e!==0?e:kc()}return Kh()}function zm(){$t===0&&($t=(be&536870912)===0||Ce?Vh():536870912);var e=Ft.current;return e!==null&&(e.flags|=32),$t}function jt(e,t,l){(e===Me&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),ai(e,be,$t,!1)),oa(e,l),((Te&2)===0||e!==Me)&&(e===Me&&((Te&2)===0&&(ki|=l),Ge===4&&ai(e,be,$t,!1)),_n(e))}function Lm(e,t,l){if((Te&6)!==0)throw Error(r(327));var s=!l&&(t&124)===0&&(t&e.expiredLanes)===0||ra(e,t),o=s?Q1(e,t):zc(e,t,!0),c=s;do{if(o===0){xl&&!s&&ai(e,t,0,!1);break}else{if(l=e.current.alternate,c&&!Y1(l)){o=zc(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var _=e;o=Ya;var v=_.current.memoizedState.isDehydrated;if(v&&(Rl(_,d).flags|=256),d=zc(_,d,!1),d!==2){if(xc&&!v){_.errorRecoveryDisabledLanes|=c,ki|=c,o=4;break e}c=At,At=o,c!==null&&(At===null?At=c:At.push.apply(At,c))}o=d}if(c=!1,o!==2)continue}}if(o===1){Rl(e,0),ai(e,t,0,!0);break}e:{switch(s=e,c=o,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:ai(s,t,$t,!ti);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=Ac+300-hn(),10<o)){if(ai(s,t,$t,!ti),Qs(s,0,!0)!==0)break e;s.timeoutHandle=ug(Um.bind(null,s,l,At,Lr,wc,t,$t,ki,Tl,ti,c,2,-0,0),o);break e}Um(s,l,At,Lr,wc,t,$t,ki,Tl,ti,c,0,-0,0)}}break}while(!0);_n(e)}function Um(e,t,l,s,o,c,d,_,v,w,M,L,A,R){if(e.timeoutHandle=-1,L=t.subtreeFlags,(L&8192||(L&16785408)===16785408)&&($a={stylesheets:null,count:0,unsuspend:xb},Rm(t),L=wb(),L!==null)){e.cancelPendingCommit=L(Gm.bind(null,e,t,c,l,s,o,d,_,v,M,1,A,R)),ai(e,c,d,!w);return}Gm(e,t,c,l,s,o,d,_,v)}function Y1(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var s=0;s<l.length;s++){var o=l[s],c=o.getSnapshot;o=o.value;try{if(!Lt(c(),o))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ai(e,t,l,s){t&=~Tc,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var o=t;0<o;){var c=31-zt(o),d=1<<c;s[c]=-1,o&=~d}l!==0&&Xh(e,l,t)}function Ur(){return(Te&6)===0?(Qa(0),!1):!0}function Oc(){if(ge!==null){if(we===0)var e=ge.return;else e=ge,xn=Oi=null,Ku(e),bl=null,Ua=0,e=ge;for(;e!==null;)pm(e.alternate,e),e=e.return;ge=null}}function Rl(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,rb(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Oc(),Me=e,ge=l=Sn(e.current,null),be=t,we=0,Bt=null,ti=!1,xl=ra(e,t),xc=!1,Tl=$t=Tc=ki=ni=Ge=0,At=Ya=null,wc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var o=31-zt(s),c=1<<o;t|=e[o],s&=~c}return Mn=t,ir(),l}function Im(e,t){he=null,D.H=Er,t===wa||t===hr?(t=Jd(),we=3):t===Fd?(t=Jd(),we=4):we=t===em?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,ge===null&&(Ge=1,Ar(e,Xt(t,e.current)))}function km(){var e=D.H;return D.H=Er,e===null?Er:e}function Bm(){var e=D.A;return D.A=q1,e}function Mc(){Ge=4,ti||(be&4194048)!==be&&Ft.current!==null||(xl=!0),(ni&134217727)===0&&(ki&134217727)===0||Me===null||ai(Me,be,$t,!1)}function zc(e,t,l){var s=Te;Te|=2;var o=km(),c=Bm();(Me!==e||be!==t)&&(Lr=null,Rl(e,t)),t=!1;var d=Ge;e:do try{if(we!==0&&ge!==null){var _=ge,v=Bt;switch(we){case 8:Oc(),d=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var w=we;if(we=0,Bt=null,Nl(e,_,v,w),l&&xl){d=0;break e}break;default:w=we,we=0,Bt=null,Nl(e,_,v,w)}}V1(),d=Ge;break}catch(M){Im(e,M)}while(!0);return t&&e.shellSuspendCounter++,xn=Oi=null,Te=s,D.H=o,D.A=c,ge===null&&(Me=null,be=0,ir()),d}function V1(){for(;ge!==null;)Hm(ge)}function Q1(e,t){var l=Te;Te|=2;var s=km(),o=Bm();Me!==e||be!==t?(Lr=null,zr=hn()+500,Rl(e,t)):xl=ra(e,t);e:do try{if(we!==0&&ge!==null){t=ge;var c=Bt;t:switch(we){case 1:we=0,Bt=null,Nl(e,t,c,1);break;case 2:case 9:if($d(c)){we=0,Bt=null,jm(t);break}t=function(){we!==2&&we!==9||Me!==e||(we=7),_n(e)},c.then(t,t);break e;case 3:we=7;break e;case 4:we=5;break e;case 7:$d(c)?(we=0,Bt=null,jm(t)):(we=0,Bt=null,Nl(e,t,c,7));break;case 5:var d=null;switch(ge.tag){case 26:d=ge.memoizedState;case 5:case 27:var _=ge;if(!d||Sg(d)){we=0,Bt=null;var v=_.sibling;if(v!==null)ge=v;else{var w=_.return;w!==null?(ge=w,Ir(w)):ge=null}break t}}we=0,Bt=null,Nl(e,t,c,5);break;case 6:we=0,Bt=null,Nl(e,t,c,6);break;case 8:Oc(),Ge=6;break e;default:throw Error(r(462))}}X1();break}catch(M){Im(e,M)}while(!0);return xn=Oi=null,D.H=s,D.A=o,Te=l,ge!==null?0:(Me=null,be=0,ir(),Ge)}function X1(){for(;ge!==null&&!pv();)Hm(ge)}function Hm(e){var t=hm(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?Ir(e):ge=t}function jm(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=sm(l,t,t.pendingProps,t.type,void 0,be);break;case 11:t=sm(l,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Ku(t);default:pm(l,t),t=ge=qd(t,Mn),t=hm(l,t,Mn)}e.memoizedProps=e.pendingProps,t===null?Ir(e):ge=t}function Nl(e,t,l,s){xn=Oi=null,Ku(t),bl=null,Ua=0;var o=t.return;try{if(U1(e,o,t,l,be)){Ge=1,Ar(e,Xt(l,e.current)),ge=null;return}}catch(c){if(o!==null)throw ge=o,c;Ge=1,Ar(e,Xt(l,e.current)),ge=null;return}t.flags&32768?(Ce||s===1?e=!0:xl||(be&536870912)!==0?e=!1:(ti=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ft.current,s!==null&&s.tag===13&&(s.flags|=16384))),qm(t,e)):Ir(t)}function Ir(e){var t=e;do{if((t.flags&32768)!==0){qm(t,ti);return}e=t.return;var l=k1(t.alternate,t,Mn);if(l!==null){ge=l;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ge===0&&(Ge=5)}function qm(e,t){do{var l=B1(e.alternate,e);if(l!==null){l.flags&=32767,ge=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=l}while(e!==null);Ge=6,ge=null}function Gm(e,t,l,s,o,c,d,_,v){e.cancelPendingCommit=null;do kr();while(dt!==0);if((Te&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=Cu,xv(e,l,c,d,_,v),e===Me&&(ge=Me=null,be=0),wl=t,li=e,Al=l,Rc=c,Nc=o,Mm=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F1(Gs,function(){return Zm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=D.T,D.T=null,o=H.p,H.p=2,d=Te,Te|=4;try{H1(e,t,l)}finally{Te=d,H.p=o,D.T=s}}dt=1,Ym(),Vm(),Qm()}}function Ym(){if(dt===1){dt=0;var e=li,t=wl,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null;var s=H.p;H.p=2;var o=Te;Te|=4;try{Tm(t,e);var c=Qc,d=Od(e.containerInfo),_=c.focusedElem,v=c.selectionRange;if(d!==_&&_&&_.ownerDocument&&Dd(_.ownerDocument.documentElement,_)){if(v!==null&&yu(_)){var w=v.start,M=v.end;if(M===void 0&&(M=w),"selectionStart"in _)_.selectionStart=w,_.selectionEnd=Math.min(M,_.value.length);else{var L=_.ownerDocument||document,A=L&&L.defaultView||window;if(A.getSelection){var R=A.getSelection(),ne=_.textContent.length,$=Math.min(v.start,ne),Ne=v.end===void 0?$:Math.min(v.end,ne);!R.extend&&$>Ne&&(d=Ne,Ne=$,$=d);var x=Nd(_,$),E=Nd(_,Ne);if(x&&E&&(R.rangeCount!==1||R.anchorNode!==x.node||R.anchorOffset!==x.offset||R.focusNode!==E.node||R.focusOffset!==E.offset)){var T=L.createRange();T.setStart(x.node,x.offset),R.removeAllRanges(),$>Ne?(R.addRange(T),R.extend(E.node,E.offset)):(T.setEnd(E.node,E.offset),R.addRange(T))}}}}for(L=[],R=_;R=R.parentNode;)R.nodeType===1&&L.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<L.length;_++){var z=L[_];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Pr=!!Vc,Qc=Vc=null}finally{Te=o,H.p=s,D.T=l}}e.current=t,dt=2}}function Vm(){if(dt===2){dt=0;var e=li,t=wl,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=D.T,D.T=null;var s=H.p;H.p=2;var o=Te;Te|=4;try{Sm(e,t.alternate,t)}finally{Te=o,H.p=s,D.T=l}}dt=3}}function Qm(){if(dt===4||dt===3){dt=0,mv();var e=li,t=wl,l=Al,s=Mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?dt=5:(dt=0,wl=li=null,Xm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ii=null),$o(l),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(sa,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=D.T,o=H.p,H.p=2,D.T=null;try{for(var c=e.onRecoverableError,d=0;d<s.length;d++){var _=s[d];c(_.value,{componentStack:_.stack})}}finally{D.T=t,H.p=o}}(Al&3)!==0&&kr(),_n(e),o=e.pendingLanes,(l&4194090)!==0&&(o&42)!==0?e===Dc?Va++:(Va=0,Dc=e):Va=0,Qa(0)}}function Xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xa(t)))}function kr(e){return Ym(),Vm(),Qm(),Zm()}function Zm(){if(dt!==5)return!1;var e=li,t=Rc;Rc=0;var l=$o(Al),s=D.T,o=H.p;try{H.p=32>l?32:l,D.T=null,l=Nc,Nc=null;var c=li,d=Al;if(dt=0,wl=li=null,Al=0,(Te&6)!==0)throw Error(r(331));var _=Te;if(Te|=4,Dm(c.current),Am(c,c.current,d,l),Te=_,Qa(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(sa,c)}catch{}return!0}finally{H.p=o,D.T=s,Xm(e,t)}}function Km(e,t,l){t=Xt(l,t),t=oc(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(oa(e,2),_n(e))}function De(e,t,l){if(e.tag===3)Km(e,e,l);else for(;t!==null;){if(t.tag===3){Km(t,e,l);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ii===null||!ii.has(s))){e=Xt(l,e),l=Wp(2),s=Kn(t,l,2),s!==null&&(Jp(l,s,t,e),oa(s,2),_n(s));break}}t=t.return}}function Lc(e,t,l){var s=e.pingCache;if(s===null){s=e.pingCache=new G1;var o=new Set;s.set(t,o)}else o=s.get(t),o===void 0&&(o=new Set,s.set(t,o));o.has(l)||(xc=!0,o.add(l),e=Z1.bind(null,e,t,l),t.then(e,e))}function Z1(e,t,l){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Me===e&&(be&l)===l&&(Ge===4||Ge===3&&(be&62914560)===be&&300>hn()-Ac?(Te&2)===0&&Rl(e,0):Tc|=l,Tl===be&&(Tl=0)),_n(e)}function Pm(e,t){t===0&&(t=Qh()),e=cl(e,t),e!==null&&(oa(e,t),_n(e))}function K1(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Pm(e,l)}function P1(e,t){var l=0;switch(e.tag){case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(l=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(t),Pm(e,l)}function F1(e,t){return aa(e,t)}var Br=null,Dl=null,Uc=!1,Hr=!1,Ic=!1,Bi=0;function _n(e){e!==Dl&&e.next===null&&(Dl===null?Br=Dl=e:Dl=Dl.next=e),Hr=!0,Uc||(Uc=!0,W1())}function Qa(e,t){if(!Ic&&Hr){Ic=!0;do for(var l=!1,s=Br;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var c=0;else{var d=s.suspendedLanes,_=s.pingedLanes;c=(1<<31-zt(42|e)+1)-1,c&=o&~(d&~_),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(l=!0,Jm(s,c))}else c=be,c=Qs(s,s===Me?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||ra(s,c)||(l=!0,Jm(s,c));s=s.next}while(l);Ic=!1}}function $1(){Fm()}function Fm(){Hr=Uc=!1;var e=0;Bi!==0&&(sb()&&(e=Bi),Bi=0);for(var t=hn(),l=null,s=Br;s!==null;){var o=s.next,c=$m(s,t);c===0?(s.next=null,l===null?Br=o:l.next=o,o===null&&(Dl=l)):(l=s,(e!==0||(c&3)!==0)&&(Hr=!0)),s=o}Qa(e)}function $m(e,t){for(var l=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-zt(c),_=1<<d,v=o[d];v===-1?((_&l)===0||(_&s)!==0)&&(o[d]=Cv(_,t)):v<=t&&(e.expiredLanes|=_),c&=~_}if(t=Me,l=be,l=Qs(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,l===0||e===t&&(we===2||we===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ko(s),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||ra(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(s!==null&&Ko(s),$o(l)){case 2:case 8:l=Gh;break;case 32:l=Gs;break;case 268435456:l=Yh;break;default:l=Gs}return s=Wm.bind(null,e),l=aa(l,s),e.callbackPriority=t,e.callbackNode=l,t}return s!==null&&s!==null&&Ko(s),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(dt!==0&&dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(kr()&&e.callbackNode!==l)return null;var s=be;return s=Qs(e,e===Me?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Lm(e,s,t),$m(e,hn()),e.callbackNode!=null&&e.callbackNode===l?Wm.bind(null,e):null)}function Jm(e,t){if(kr())return null;Lm(e,t,!0)}function W1(){ob(function(){(Te&6)!==0?aa(qh,$1):Fm()})}function kc(){return Bi===0&&(Bi=Vh()),Bi}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fs(""+e)}function tg(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function J1(e,t,l,s,o){if(t==="submit"&&l&&l.stateNode===o){var c=eg((o[Ct]||null).action),d=s.submitter;d&&(t=(t=d[Ct]||null)?eg(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var _=new er("action","action",null,s,o);e.push({event:_,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Bi!==0){var v=d?tg(o,d):new FormData(o);ic(l,{pending:!0,data:v,method:o.method,action:c},null,v)}}else typeof c=="function"&&(_.preventDefault(),v=d?tg(o,d):new FormData(o),ic(l,{pending:!0,data:v,method:o.method,action:c},c,v))},currentTarget:o}]})}}for(var Bc=0;Bc<Eu.length;Bc++){var Hc=Eu[Bc],eb=Hc.toLowerCase(),tb=Hc[0].toUpperCase()+Hc.slice(1);ln(eb,"on"+tb)}ln(Ld,"onAnimationEnd"),ln(Ud,"onAnimationIteration"),ln(Id,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(y1,"onTransitionRun"),ln(v1,"onTransitionStart"),ln(b1,"onTransitionCancel"),ln(kd,"onTransitionEnd"),el("onMouseEnter",["mouseout","mouseover"]),el("onMouseLeave",["mouseout","mouseover"]),el("onPointerEnter",["pointerout","pointerover"]),el("onPointerLeave",["pointerout","pointerover"]),Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));function ng(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var s=e[l],o=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var d=s.length-1;0<=d;d--){var _=s[d],v=_.instance,w=_.currentTarget;if(_=_.listener,v!==c&&o.isPropagationStopped())break e;c=_,o.currentTarget=w;try{c(o)}catch(M){wr(M)}o.currentTarget=null,c=v}else for(d=0;d<s.length;d++){if(_=s[d],v=_.instance,w=_.currentTarget,_=_.listener,v!==c&&o.isPropagationStopped())break e;c=_,o.currentTarget=w;try{c(o)}catch(M){wr(M)}o.currentTarget=null,c=v}}}}function _e(e,t){var l=t[Wo];l===void 0&&(l=t[Wo]=new Set);var s=e+"__bubble";l.has(s)||(ig(t,e,2,!1),l.add(s))}function jc(e,t,l){var s=0;t&&(s|=4),ig(l,e,s,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function qc(e){if(!e[jr]){e[jr]=!0,Fh.forEach(function(l){l!=="selectionchange"&&(nb.has(l)||jc(l,!1,e),jc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,jc("selectionchange",!1,t))}}function ig(e,t,l,s){switch(Ag(t)){case 2:var o=Nb;break;case 8:o=Db;break;default:o=tf}l=o.bind(null,t,l,e),o=void 0,!uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(t,l,{capture:!0,passive:o}):e.addEventListener(t,l,!0):o!==void 0?e.addEventListener(t,l,{passive:o}):e.addEventListener(t,l,!1)}function Gc(e,t,l,s,o){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var _=s.stateNode.containerInfo;if(_===o)break;if(d===4)for(d=s.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;_!==null;){if(d=$i(_),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){s=c=d;continue e}_=_.parentNode}}s=s.return}cd(function(){var w=c,M=ru(l),L=[];e:{var A=Bd.get(e);if(A!==void 0){var R=er,ne=e;switch(e){case"keypress":if(Ws(l)===0)break e;case"keydown":case"keyup":R=Fv;break;case"focusin":ne="focus",R=du;break;case"focusout":ne="blur",R=du;break;case"beforeblur":case"afterblur":R=du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Jv;break;case Ld:case Ud:case Id:R=qv;break;case kd:R=t1;break;case"scroll":case"scrollend":R=Iv;break;case"wheel":R=i1;break;case"copy":case"cut":case"paste":R=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=md;break;case"toggle":case"beforetoggle":R=a1}var $=(t&4)!==0,Ne=!$&&(e==="scroll"||e==="scrollend"),x=$?A!==null?A+"Capture":null:A;$=[];for(var E=w,T;E!==null;){var z=E;if(T=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||T===null||x===null||(z=fa(E,x),z!=null&&$.push(Za(E,z,T))),Ne)break;E=E.return}0<$.length&&(A=new R(A,ne,null,l,M),L.push({event:A,listeners:$}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&l!==su&&(ne=l.relatedTarget||l.fromElement)&&($i(ne)||ne[Fi]))break e;if((R||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,R?(ne=l.relatedTarget||l.toElement,R=w,ne=ne?$i(ne):null,ne!==null&&(Ne=f(ne),$=ne.tag,ne!==Ne||$!==5&&$!==27&&$!==6)&&(ne=null)):(R=null,ne=w),R!==ne)){if($=dd,z="onMouseLeave",x="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&($=md,z="onPointerLeave",x="onPointerEnter",E="pointer"),Ne=R==null?A:ca(R),T=ne==null?A:ca(ne),A=new $(z,E+"leave",R,l,M),A.target=Ne,A.relatedTarget=T,z=null,$i(M)===w&&($=new $(x,E+"enter",ne,l,M),$.target=T,$.relatedTarget=Ne,z=$),Ne=z,R&&ne)t:{for($=R,x=ne,E=0,T=$;T;T=Ol(T))E++;for(T=0,z=x;z;z=Ol(z))T++;for(;0<E-T;)$=Ol($),E--;for(;0<T-E;)x=Ol(x),T--;for(;E--;){if($===x||x!==null&&$===x.alternate)break t;$=Ol($),x=Ol(x)}$=null}else $=null;R!==null&&lg(L,A,R,$,!1),ne!==null&&Ne!==null&&lg(L,Ne,ne,$,!0)}}e:{if(A=w?ca(w):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var q=Cd;else if(Sd(A))if(xd)q=m1;else{q=d1;var de=h1}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?w&&au(w.elementType)&&(q=Cd):q=p1;if(q&&(q=q(e,w))){Ed(L,q,l,M);break e}de&&de(e,A,w),e==="focusout"&&w&&A.type==="number"&&w.memoizedProps.value!=null&&lu(A,"number",A.value)}switch(de=w?ca(w):window,e){case"focusin":(Sd(de)||de.contentEditable==="true")&&(rl=de,vu=w,va=null);break;case"focusout":va=vu=rl=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Md(L,l,M);break;case"selectionchange":if(_1)break;case"keydown":case"keyup":Md(L,l,M)}var X;if(mu)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else sl?vd(e,l)&&(J="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(gd&&l.locale!=="ko"&&(sl||J!=="onCompositionStart"?J==="onCompositionEnd"&&sl&&(X=fd()):(Vn=M,cu="value"in Vn?Vn.value:Vn.textContent,sl=!0)),de=qr(w,J),0<de.length&&(J=new pd(J,e,null,l,M),L.push({event:J,listeners:de}),X?J.data=X:(X=bd(l),X!==null&&(J.data=X)))),(X=r1?o1(e,l):u1(e,l))&&(J=qr(w,"onBeforeInput"),0<J.length&&(de=new pd("onBeforeInput","beforeinput",null,l,M),L.push({event:de,listeners:J}),de.data=X)),J1(L,e,w,l,M)}ng(L,t)})}function Za(e,t,l){return{instance:e,listener:t,currentTarget:l}}function qr(e,t){for(var l=t+"Capture",s=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=fa(e,l),o!=null&&s.unshift(Za(e,o,c)),o=fa(e,t),o!=null&&s.push(Za(e,o,c))),e.tag===3)return s;e=e.return}return[]}function Ol(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lg(e,t,l,s,o){for(var c=t._reactName,d=[];l!==null&&l!==s;){var _=l,v=_.alternate,w=_.stateNode;if(_=_.tag,v!==null&&v===s)break;_!==5&&_!==26&&_!==27||w===null||(v=w,o?(w=fa(l,c),w!=null&&d.unshift(Za(l,w,v))):o||(w=fa(l,c),w!=null&&d.push(Za(l,w,v)))),l=l.return}d.length!==0&&e.push({event:t,listeners:d})}var ib=/\r\n?/g,lb=/\u0000|\uFFFD/g;function ag(e){return(typeof e=="string"?e:""+e).replace(ib,`
`).replace(lb,"")}function sg(e,t){return t=ag(t),ag(e)===t}function Gr(){}function Re(e,t,l,s,o,c){switch(l){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||il(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&il(e,""+s);break;case"className":Zs(e,"class",s);break;case"tabIndex":Zs(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Zs(e,l,s);break;case"style":od(e,s,c);break;case"data":if(t!=="object"){Zs(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(l);break}s=Fs(""+s),e.setAttribute(l,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(l==="formAction"?(t!=="input"&&Re(e,t,"name",o.name,o,null),Re(e,t,"formEncType",o.formEncType,o,null),Re(e,t,"formMethod",o.formMethod,o,null),Re(e,t,"formTarget",o.formTarget,o,null)):(Re(e,t,"encType",o.encType,o,null),Re(e,t,"method",o.method,o,null),Re(e,t,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(l);break}s=Fs(""+s),e.setAttribute(l,s);break;case"onClick":s!=null&&(e.onclick=Gr);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(l=s.__html,l!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}l=Fs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(l,""+s):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":s===!0?e.setAttribute(l,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(l,s):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(l,s):e.removeAttribute(l);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(l):e.setAttribute(l,s);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Xs(e,"popover",s);break;case"xlinkActuate":vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":vn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":vn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":vn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":vn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Xs(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Lv.get(l)||l,Xs(e,l,s))}}function Yc(e,t,l,s,o,c){switch(l){case"style":od(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(l=s.__html,l!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof s=="string"?il(e,s):(typeof s=="number"||typeof s=="bigint")&&il(e,""+s);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Gr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$h.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(o=l.endsWith("Capture"),t=l.slice(2,o?l.length-7:void 0),c=e[Ct]||null,c=c!=null?c[l]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof s=="function")){typeof c!="function"&&c!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,s,o);break e}l in e?e[l]=s:s===!0?e.setAttribute(l,""):Xs(e,l,s)}}}function pt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var s=!1,o=!1,c;for(c in l)if(l.hasOwnProperty(c)){var d=l[c];if(d!=null)switch(c){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Re(e,t,c,d,l,null)}}o&&Re(e,t,"srcSet",l.srcSet,l,null),s&&Re(e,t,"src",l.src,l,null);return;case"input":_e("invalid",e);var _=c=d=o=null,v=null,w=null;for(s in l)if(l.hasOwnProperty(s)){var M=l[s];if(M!=null)switch(s){case"name":o=M;break;case"type":d=M;break;case"checked":v=M;break;case"defaultChecked":w=M;break;case"value":c=M;break;case"defaultValue":_=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:Re(e,t,s,M,l,null)}}ld(e,c,_,v,w,d,o,!1),Ks(e);return;case"select":_e("invalid",e),s=d=c=null;for(o in l)if(l.hasOwnProperty(o)&&(_=l[o],_!=null))switch(o){case"value":c=_;break;case"defaultValue":d=_;break;case"multiple":s=_;default:Re(e,t,o,_,l,null)}t=c,l=d,e.multiple=!!s,t!=null?nl(e,!!s,t,!1):l!=null&&nl(e,!!s,l,!0);return;case"textarea":_e("invalid",e),c=o=s=null;for(d in l)if(l.hasOwnProperty(d)&&(_=l[d],_!=null))switch(d){case"value":s=_;break;case"defaultValue":o=_;break;case"children":c=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:Re(e,t,d,_,l,null)}sd(e,s,o,c),Ks(e);return;case"option":for(v in l)if(l.hasOwnProperty(v)&&(s=l[v],s!=null))switch(v){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Re(e,t,v,s,l,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(s=0;s<Xa.length;s++)_e(Xa[s],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in l)if(l.hasOwnProperty(w)&&(s=l[w],s!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Re(e,t,w,s,l,null)}return;default:if(au(t)){for(M in l)l.hasOwnProperty(M)&&(s=l[M],s!==void 0&&Yc(e,t,M,s,l,void 0));return}}for(_ in l)l.hasOwnProperty(_)&&(s=l[_],s!=null&&Re(e,t,_,s,l,null))}function ab(e,t,l,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,d=null,_=null,v=null,w=null,M=null;for(R in l){var L=l[R];if(l.hasOwnProperty(R)&&L!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=L;default:s.hasOwnProperty(R)||Re(e,t,R,null,s,L)}}for(var A in s){var R=s[A];if(L=l[A],s.hasOwnProperty(A)&&(R!=null||L!=null))switch(A){case"type":c=R;break;case"name":o=R;break;case"checked":w=R;break;case"defaultChecked":M=R;break;case"value":d=R;break;case"defaultValue":_=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:R!==L&&Re(e,t,A,R,s,L)}}iu(e,d,_,v,w,M,c,o);return;case"select":R=d=_=A=null;for(c in l)if(v=l[c],l.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":R=v;default:s.hasOwnProperty(c)||Re(e,t,c,null,s,v)}for(o in s)if(c=s[o],v=l[o],s.hasOwnProperty(o)&&(c!=null||v!=null))switch(o){case"value":A=c;break;case"defaultValue":_=c;break;case"multiple":d=c;default:c!==v&&Re(e,t,o,c,s,v)}t=_,l=d,s=R,A!=null?nl(e,!!l,A,!1):!!s!=!!l&&(t!=null?nl(e,!!l,t,!0):nl(e,!!l,l?[]:"",!1));return;case"textarea":R=A=null;for(_ in l)if(o=l[_],l.hasOwnProperty(_)&&o!=null&&!s.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Re(e,t,_,null,s,o)}for(d in s)if(o=s[d],c=l[d],s.hasOwnProperty(d)&&(o!=null||c!=null))switch(d){case"value":A=o;break;case"defaultValue":R=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==c&&Re(e,t,d,o,s,c)}ad(e,A,R);return;case"option":for(var ne in l)if(A=l[ne],l.hasOwnProperty(ne)&&A!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Re(e,t,ne,null,s,A)}for(v in s)if(A=s[v],R=l[v],s.hasOwnProperty(v)&&A!==R&&(A!=null||R!=null))switch(v){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Re(e,t,v,A,s,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in l)A=l[$],l.hasOwnProperty($)&&A!=null&&!s.hasOwnProperty($)&&Re(e,t,$,null,s,A);for(w in s)if(A=s[w],R=l[w],s.hasOwnProperty(w)&&A!==R&&(A!=null||R!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,t));break;default:Re(e,t,w,A,s,R)}return;default:if(au(t)){for(var Ne in l)A=l[Ne],l.hasOwnProperty(Ne)&&A!==void 0&&!s.hasOwnProperty(Ne)&&Yc(e,t,Ne,void 0,s,A);for(M in s)A=s[M],R=l[M],!s.hasOwnProperty(M)||A===R||A===void 0&&R===void 0||Yc(e,t,M,A,s,R);return}}for(var x in l)A=l[x],l.hasOwnProperty(x)&&A!=null&&!s.hasOwnProperty(x)&&Re(e,t,x,null,s,A);for(L in s)A=s[L],R=l[L],!s.hasOwnProperty(L)||A===R||A==null&&R==null||Re(e,t,L,A,s,R)}var Vc=null,Qc=null;function Yr(e){return e.nodeType===9?e:e.ownerDocument}function rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function og(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function sb(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,rb=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,ob=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(e){return cg.resolve(null).then(e).catch(ub)}:ug;function ub(e){setTimeout(function(){throw e})}function si(e){return e==="head"}function fg(e,t){var l=t,s=0,o=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"){if(0<s&&8>s){l=s;var d=e.ownerDocument;if(l&1&&Ka(d.documentElement),l&2&&Ka(d.body),l&4)for(l=d.head,Ka(l),d=l.firstChild;d;){var _=d.nextSibling,v=d.nodeName;d[ua]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||l.removeChild(d),d=_}}if(o===0){e.removeChild(c),ns(t);return}o--}else l==="$"||l==="$?"||l==="$!"?o++:s=l.charCodeAt(0)-48;else s=0;l=c}while(l);ns(t)}function Kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Kc(l),Jo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function cb(e,t,l,s){for(;e.nodeType===1;){var o=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ua])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=sn(e.nextSibling),e===null)break}return null}function fb(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=sn(e.nextSibling),e===null))return null;return e}function Pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function hb(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var s=function(){t(),l.removeEventListener("DOMContentLoaded",s)};l.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Fc=null;function hg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function dg(e,t,l){switch(t=Yr(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ka(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jo(e)}var Wt=new Map,pg=new Set;function Vr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=H.d;H.d={f:db,r:pb,D:mb,C:gb,L:_b,m:yb,X:bb,S:vb,M:Sb};function db(){var e=zn.f(),t=Ur();return e||t}function pb(e){var t=Wi(e);t!==null&&t.tag===5&&t.type==="form"?Lp(t):zn.r(e)}var Ml=typeof document>"u"?null:document;function mg(e,t,l){var s=Ml;if(s&&typeof t=="string"&&t){var o=Qt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof l=="string"&&(o+='[crossorigin="'+l+'"]'),pg.has(o)||(pg.add(o),e={rel:e,crossOrigin:l,href:t},s.querySelector(o)===null&&(t=s.createElement("link"),pt(t,"link",e),lt(t),s.head.appendChild(t)))}}function mb(e){zn.D(e),mg("dns-prefetch",e,null)}function gb(e,t){zn.C(e,t),mg("preconnect",e,t)}function _b(e,t,l){zn.L(e,t,l);var s=Ml;if(s&&e&&t){var o='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(o+='[imagesrcset="'+Qt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(o+='[imagesizes="'+Qt(l.imageSizes)+'"]')):o+='[href="'+Qt(e)+'"]';var c=o;switch(t){case"style":c=zl(e);break;case"script":c=Ll(e)}Wt.has(c)||(e=y({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Wt.set(c,e),s.querySelector(o)!==null||t==="style"&&s.querySelector(Pa(c))||t==="script"&&s.querySelector(Fa(c))||(t=s.createElement("link"),pt(t,"link",e),lt(t),s.head.appendChild(t)))}}function yb(e,t){zn.m(e,t);var l=Ml;if(l&&e){var s=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Qt(s)+'"][href="'+Qt(e)+'"]',c=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ll(e)}if(!Wt.has(c)&&(e=y({rel:"modulepreload",href:e},t),Wt.set(c,e),l.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Fa(c)))return}s=l.createElement("link"),pt(s,"link",e),lt(s),l.head.appendChild(s)}}}function vb(e,t,l){zn.S(e,t,l);var s=Ml;if(s&&e){var o=Ji(s).hoistableStyles,c=zl(e);t=t||"default";var d=o.get(c);if(!d){var _={loading:0,preload:null};if(d=s.querySelector(Pa(c)))_.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Wt.get(c))&&$c(e,l);var v=d=s.createElement("link");lt(v),pt(v,"link",e),v._p=new Promise(function(w,M){v.onload=w,v.onerror=M}),v.addEventListener("load",function(){_.loading|=1}),v.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Qr(d,t,s)}d={type:"stylesheet",instance:d,count:1,state:_},o.set(c,d)}}}function bb(e,t){zn.X(e,t);var l=Ml;if(l&&e){var s=Ji(l).hoistableScripts,o=Ll(e),c=s.get(o);c||(c=l.querySelector(Fa(o)),c||(e=y({src:e,async:!0},t),(t=Wt.get(o))&&Wc(e,t),c=l.createElement("script"),lt(c),pt(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function Sb(e,t){zn.M(e,t);var l=Ml;if(l&&e){var s=Ji(l).hoistableScripts,o=Ll(e),c=s.get(o);c||(c=l.querySelector(Fa(o)),c||(e=y({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&Wc(e,t),c=l.createElement("script"),lt(c),pt(c,"link",e),l.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(o,c))}}function gg(e,t,l,s){var o=(o=F.current)?Vr(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=zl(l.href),l=Ji(o).hoistableStyles,s=l.get(t),s||(s={type:"style",instance:null,count:0,state:null},l.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=zl(l.href);var c=Ji(o).hoistableStyles,d=c.get(e);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=o.querySelector(Pa(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wt.set(e,l),c||Eb(o,e,l,d.state))),t&&s===null)throw Error(r(528,""));return d}if(t&&s!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(l),l=Ji(o).hoistableScripts,s=l.get(t),s||(s={type:"script",instance:null,count:0,state:null},l.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function zl(e){return'href="'+Qt(e)+'"'}function Pa(e){return'link[rel="stylesheet"]['+e+"]"}function _g(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Eb(e,t,l,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),pt(t,"link",l),lt(t),e.head.appendChild(t))}function Ll(e){return'[src="'+Qt(e)+'"]'}function Fa(e){return"script[async]"+e}function yg(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Qt(l.href)+'"]');if(s)return t.instance=s,lt(s),s;var o=y({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),lt(s),pt(s,"style",o),Qr(s,l.precedence,e),t.instance=s;case"stylesheet":o=zl(l.href);var c=e.querySelector(Pa(o));if(c)return t.state.loading|=4,t.instance=c,lt(c),c;s=_g(l),(o=Wt.get(o))&&$c(s,o),c=(e.ownerDocument||e).createElement("link"),lt(c);var d=c;return d._p=new Promise(function(_,v){d.onload=_,d.onerror=v}),pt(c,"link",s),t.state.loading|=4,Qr(c,l.precedence,e),t.instance=c;case"script":return c=Ll(l.src),(o=e.querySelector(Fa(c)))?(t.instance=o,lt(o),o):(s=l,(o=Wt.get(c))&&(s=y({},l),Wc(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),lt(o),pt(o,"link",s),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Qr(s,l.precedence,e));return t.instance}function Qr(e,t,l){for(var s=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,c=o,d=0;d<s.length;d++){var _=s[d];if(_.dataset.precedence===t)c=_;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xr=null;function vg(e,t,l){if(Xr===null){var s=new Map,o=Xr=new Map;o.set(l,s)}else o=Xr,s=o.get(l),s||(s=new Map,o.set(l,s));if(s.has(e))return s;for(s.set(e,null),l=l.getElementsByTagName(e),o=0;o<l.length;o++){var c=l[o];if(!(c[ua]||c[gt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var _=s.get(d);_?_.push(c):s.set(d,[c])}}return s}function bg(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Cb(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $a=null;function xb(){}function Tb(e,t,l){if($a===null)throw Error(r(475));var s=$a;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=zl(l.href),c=e.querySelector(Pa(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Zr.bind(s),e.then(s,s)),t.state.loading|=4,t.instance=c,lt(c);return}c=e.ownerDocument||e,l=_g(l),(o=Wt.get(o))&&$c(l,o),c=c.createElement("link"),lt(c);var d=c;d._p=new Promise(function(_,v){d.onload=_,d.onerror=v}),pt(c,"link",l),t.instance=c}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(s.count++,t=Zr.bind(s),e.addEventListener("load",t),e.addEventListener("error",t))}}function wb(){if($a===null)throw Error(r(475));var e=$a;return e.stylesheets&&e.count===0&&Jc(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Jc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Zr(){if(this.count--,this.count===0){if(this.stylesheets)Jc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kr=null;function Jc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kr=new Map,t.forEach(Ab,e),Kr=null,Zr.call(e))}function Ab(e,t){if(!(t.state.loading&4)){var l=Kr.get(e);if(l)var s=l.get(null);else{l=new Map,Kr.set(e,l);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var d=o[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(l.set(d.dataset.precedence,d),s=d)}s&&l.set(null,s)}o=t.instance,d=o.getAttribute("data-precedence"),c=l.get(d)||s,c===s&&l.set(null,o),l.set(d,o),this.count++,s=Zr.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Wa={$$typeof:te,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Rb(e,t,l,s,o,c,d,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.hiddenUpdates=Po(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Eg(e,t,l,s,o,c,d,_,v,w,M,L){return e=new Rb(e,t,l,d,_,v,w,L),t=1,c===!0&&(t|=24),c=Ut(3,null,null,t),e.current=c,c.stateNode=e,t=Lu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:l,cache:t},Bu(c),e}function Cg(e){return e?(e=fl,e):fl}function xg(e,t,l,s,o,c){o=Cg(o),s.context===null?s.context=o:s.pendingContext=o,s=Zn(t),s.payload={element:l},c=c===void 0?null:c,c!==null&&(s.callback=c),l=Kn(e,s,t),l!==null&&(jt(l,e,t),Ra(l,e,t))}function Tg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ef(e,t){Tg(e,t),(e=e.alternate)&&Tg(e,t)}function wg(e){if(e.tag===13){var t=cl(e,67108864);t!==null&&jt(t,e,67108864),ef(e,67108864)}}var Pr=!0;function Nb(e,t,l,s){var o=D.T;D.T=null;var c=H.p;try{H.p=2,tf(e,t,l,s)}finally{H.p=c,D.T=o}}function Db(e,t,l,s){var o=D.T;D.T=null;var c=H.p;try{H.p=8,tf(e,t,l,s)}finally{H.p=c,D.T=o}}function tf(e,t,l,s){if(Pr){var o=nf(s);if(o===null)Gc(e,t,s,Fr,l),Rg(e,s);else if(Mb(o,e,t,l,s))s.stopPropagation();else if(Rg(e,s),t&4&&-1<Ob.indexOf(e)){for(;o!==null;){var c=Wi(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=Si(c.pendingLanes);if(d!==0){var _=c;for(_.pendingLanes|=2,_.entangledLanes|=2;d;){var v=1<<31-zt(d);_.entanglements[1]|=v,d&=~v}_n(c),(Te&6)===0&&(zr=hn()+500,Qa(0))}}break;case 13:_=cl(c,2),_!==null&&jt(_,c,2),Ur(),ef(c,2)}if(c=nf(s),c===null&&Gc(e,t,s,Fr,l),c===o)break;o=c}o!==null&&s.stopPropagation()}else Gc(e,t,s,null,l)}}function nf(e){return e=ru(e),lf(e)}var Fr=null;function lf(e){if(Fr=null,e=$i(e),e!==null){var t=f(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=h(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fr=e,null}function Ag(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gv()){case qh:return 2;case Gh:return 8;case Gs:case _v:return 32;case Yh:return 268435456;default:return 32}default:return 32}}var af=!1,ri=null,oi=null,ui=null,Ja=new Map,es=new Map,ci=[],Ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(e,t){switch(e){case"focusin":case"focusout":ri=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ui=null;break;case"pointerover":case"pointerout":Ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(t.pointerId)}}function ts(e,t,l,s,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:l,eventSystemFlags:s,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Wi(t),t!==null&&wg(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Mb(e,t,l,s,o){switch(t){case"focusin":return ri=ts(ri,e,t,l,s,o),!0;case"dragenter":return oi=ts(oi,e,t,l,s,o),!0;case"mouseover":return ui=ts(ui,e,t,l,s,o),!0;case"pointerover":var c=o.pointerId;return Ja.set(c,ts(Ja.get(c)||null,e,t,l,s,o)),!0;case"gotpointercapture":return c=o.pointerId,es.set(c,ts(es.get(c)||null,e,t,l,s,o)),!0}return!1}function Ng(e){var t=$i(e.target);if(t!==null){var l=f(t);if(l!==null){if(t=l.tag,t===13){if(t=h(l),t!==null){e.blockedOn=t,Tv(e.priority,function(){if(l.tag===13){var s=Ht();s=Fo(s);var o=cl(l,s);o!==null&&jt(o,l,s),ef(l,s)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=nf(e.nativeEvent);if(l===null){l=e.nativeEvent;var s=new l.constructor(l.type,l);su=s,l.target.dispatchEvent(s),su=null}else return t=Wi(l),t!==null&&wg(t),e.blockedOn=l,!1;t.shift()}return!0}function Dg(e,t,l){$r(e)&&l.delete(t)}function zb(){af=!1,ri!==null&&$r(ri)&&(ri=null),oi!==null&&$r(oi)&&(oi=null),ui!==null&&$r(ui)&&(ui=null),Ja.forEach(Dg),es.forEach(Dg)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,af||(af=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zb)))}var Jr=null;function Og(e){Jr!==e&&(Jr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Jr===e&&(Jr=null);for(var t=0;t<e.length;t+=3){var l=e[t],s=e[t+1],o=e[t+2];if(typeof s!="function"){if(lf(s||l)===null)continue;break}var c=Wi(l);c!==null&&(e.splice(t,3),t-=3,ic(c,{pending:!0,data:o,method:l.method,action:s},s,o))}}))}function ns(e){function t(v){return Wr(v,e)}ri!==null&&Wr(ri,e),oi!==null&&Wr(oi,e),ui!==null&&Wr(ui,e),Ja.forEach(t),es.forEach(t);for(var l=0;l<ci.length;l++){var s=ci[l];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ci.length&&(l=ci[0],l.blockedOn===null);)Ng(l),l.blockedOn===null&&ci.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(s=0;s<l.length;s+=3){var o=l[s],c=l[s+1],d=o[Ct]||null;if(typeof c=="function")d||Og(l);else if(d){var _=null;if(c&&c.hasAttribute("formAction")){if(o=c,d=c[Ct]||null)_=d.formAction;else if(lf(o)!==null)continue}else _=d.action;typeof _=="function"?l[s+1]=_:(l.splice(s,3),s-=3),Og(l)}}}function sf(e){this._internalRoot=e}eo.prototype.render=sf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,s=Ht();xg(l,s,e,t,null,null)},eo.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xg(e.current,2,null,e,null,null),Ur(),t[Fi]=null}};function eo(e){this._internalRoot=e}eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kh();e={blockedOn:null,target:e,priority:t};for(var l=0;l<ci.length&&t!==0&&t<ci[l].priority;l++);ci.splice(l,0,e),l===0&&Ng(e)}};var Mg=n.version;if(Mg!=="19.1.0")throw Error(r(527,Mg,"19.1.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Lb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{sa=to.inject(Lb),Mt=to}catch{}}return ls.createRoot=function(e,t){if(!u(e))throw Error(r(299));var l=!1,s="",o=Kp,c=Pp,d=Fp,_=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(_=t.unstable_transitionCallbacks)),t=Eg(e,1,!1,null,null,l,s,o,c,d,_,null),e[Fi]=t.current,qc(e),new sf(t)},ls.hydrateRoot=function(e,t,l){if(!u(e))throw Error(r(299));var s=!1,o="",c=Kp,d=Pp,_=Fp,v=null,w=null;return l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(o=l.identifierPrefix),l.onUncaughtError!==void 0&&(c=l.onUncaughtError),l.onCaughtError!==void 0&&(d=l.onCaughtError),l.onRecoverableError!==void 0&&(_=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(v=l.unstable_transitionCallbacks),l.formState!==void 0&&(w=l.formState)),t=Eg(e,1,!0,t,l??null,s,o,c,d,_,v,w),t.context=Cg(null),l=t.current,s=Ht(),s=Fo(s),o=Zn(s),o.callback=null,Kn(l,o,s),l=s,t.current.lanes=l,oa(t,l),_n(t),e[Fi]=t.current,qc(e),new eo(t)},ls.version="19.1.0",ls}var Gg;function Vb(){if(Gg)return uf.exports;Gg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),uf.exports=Yb(),uf.exports}var Qb=Vb();const Xb=s0(Qb),Zb=()=>{};var Yg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(i,n){if(!i)throw ta(n)},ta=function(i){return new Error("Firebase Database ("+r0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=function(i){const n=[];let a=0;for(let r=0;r<i.length;r++){let u=i.charCodeAt(r);u<128?n[a++]=u:u<2048?(n[a++]=u>>6|192,n[a++]=u&63|128):(u&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(u=65536+((u&1023)<<10)+(i.charCodeAt(++r)&1023),n[a++]=u>>18|240,n[a++]=u>>12&63|128,n[a++]=u>>6&63|128,n[a++]=u&63|128):(n[a++]=u>>12|224,n[a++]=u>>6&63|128,n[a++]=u&63|128)}return n},Kb=function(i){const n=[];let a=0,r=0;for(;a<i.length;){const u=i[a++];if(u<128)n[r++]=String.fromCharCode(u);else if(u>191&&u<224){const f=i[a++];n[r++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=i[a++],h=i[a++],p=i[a++],g=((u&7)<<18|(f&63)<<12|(h&63)<<6|p&63)-65536;n[r++]=String.fromCharCode(55296+(g>>10)),n[r++]=String.fromCharCode(56320+(g&1023))}else{const f=i[a++],h=i[a++];n[r++]=String.fromCharCode((u&15)<<12|(f&63)<<6|h&63)}}return n.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,n){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let u=0;u<i.length;u+=3){const f=i[u],h=u+1<i.length,p=h?i[u+1]:0,g=u+2<i.length,m=g?i[u+2]:0,y=f>>2,b=(f&3)<<4|p>>4;let C=(p&15)<<2|m>>6,O=m&63;g||(O=64,h||(C=64)),r.push(a[y],a[b],a[C],a[O])}return r.join("")},encodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(i):this.encodeByteArray(o0(i),n)},decodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(i):Kb(this.decodeStringToByteArray(i,n))},decodeStringToByteArray(i,n){this.init_();const a=n?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let u=0;u<i.length;){const f=a[i.charAt(u++)],p=u<i.length?a[i.charAt(u)]:0;++u;const m=u<i.length?a[i.charAt(u)]:64;++u;const b=u<i.length?a[i.charAt(u)]:64;if(++u,f==null||p==null||m==null||b==null)throw new Pb;const C=f<<2|p>>4;if(r.push(C),m!==64){const O=p<<4&240|m>>2;if(r.push(O),b!==64){const I=m<<6&192|b;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Pb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u0=function(i){const n=o0(i);return ah.encodeByteArray(n,!0)},po=function(i){return u0(i).replace(/\./g,"")},Mf=function(i){try{return ah.decodeString(i,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(i){return c0(void 0,i)}function c0(i,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:const a=n;return new Date(a.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return n}for(const a in n)!n.hasOwnProperty(a)||!$b(a)||(i[a]=c0(i[a],n[a]));return i}function $b(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=()=>Wb().__FIREBASE_DEFAULTS__,eS=()=>{if(typeof process>"u"||typeof Yg>"u")return;const i=Yg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},tS=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=i&&Mf(i[1]);return n&&JSON.parse(n)},f0=()=>{try{return Zb()||Jb()||eS()||tS()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},nS=i=>{var n,a;return(a=(n=f0())===null||n===void 0?void 0:n.emulatorHosts)===null||a===void 0?void 0:a[i]},iS=i=>{const n=nS(i);if(!n)return;const a=n.lastIndexOf(":");if(a<=0||a+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const r=parseInt(n.substring(a+1),10);return n[0]==="["?[n.substring(1,a-1),r]:[n.substring(0,a),r]},h0=()=>{var i;return(i=f0())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,a)=>{this.resolve=n,this.reject=a})}wrapCallback(n){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(a):n(a,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(i,n){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},r=n||"demo-project",u=i.iat||0,f=i.sub||i.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:u,exp:u+3600,auth_time:u,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}}},i);return[po(JSON.stringify(a)),po(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(aS())}function sS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rS(){return r0.NODE_ADMIN===!0}function oS(){try{return typeof indexedDB=="object"}catch{return!1}}function uS(){return new Promise((i,n)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(r);u.onsuccess=()=>{u.result.close(),a||self.indexedDB.deleteDatabase(r),i(!0)},u.onupgradeneeded=()=>{a=!1},u.onerror=()=>{var f;n(((f=u.error)===null||f===void 0?void 0:f.message)||"")}}catch(a){n(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="FirebaseError";class Os extends Error{constructor(n,a,r){super(a),this.code=n,this.customData=r,this.name=cS,Object.setPrototypeOf(this,Os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p0.prototype.create)}}class p0{constructor(n,a,r){this.service=n,this.serviceName=a,this.errors=r}create(n,...a){const r=a[0]||{},u=`${this.service}/${n}`,f=this.errors[n],h=f?fS(f,r):"Error",p=`${this.serviceName}: ${h} (${u}).`;return new Os(u,p,r)}}function fS(i,n){return i.replace(hS,(a,r)=>{const u=n[r];return u!=null?String(u):`<${r}?>`})}const hS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(i){return JSON.parse(i)}function nt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=function(i){let n={},a={},r={},u="";try{const f=i.split(".");n=ys(Mf(f[0])||""),a=ys(Mf(f[1])||""),u=f[2],r=a.d||{},delete a.d}catch{}return{header:n,claims:a,data:r,signature:u}},dS=function(i){const n=m0(i),a=n.claims;return!!a&&typeof a=="object"&&a.hasOwnProperty("iat")},pS=function(i){const n=m0(i).claims;return typeof n=="object"&&n.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function Xl(i,n){if(Object.prototype.hasOwnProperty.call(i,n))return i[n]}function Vg(i){for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n))return!1;return!0}function mo(i,n,a){const r={};for(const u in i)Object.prototype.hasOwnProperty.call(i,u)&&(r[u]=n.call(a,i[u],u,i));return r}function go(i,n){if(i===n)return!0;const a=Object.keys(i),r=Object.keys(n);for(const u of a){if(!r.includes(u))return!1;const f=i[u],h=n[u];if(Qg(f)&&Qg(h)){if(!go(f,h))return!1}else if(f!==h)return!1}for(const u of r)if(!a.includes(u))return!1;return!0}function Qg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(i){const n=[];for(const[a,r]of Object.entries(i))Array.isArray(r)?r.forEach(u=>{n.push(encodeURIComponent(a)+"="+encodeURIComponent(u))}):n.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return n.length?"&"+n.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(n,a){a||(a=0);const r=this.W_;if(typeof n=="string")for(let b=0;b<16;b++)r[b]=n.charCodeAt(a)<<24|n.charCodeAt(a+1)<<16|n.charCodeAt(a+2)<<8|n.charCodeAt(a+3),a+=4;else for(let b=0;b<16;b++)r[b]=n[a]<<24|n[a+1]<<16|n[a+2]<<8|n[a+3],a+=4;for(let b=16;b<80;b++){const C=r[b-3]^r[b-8]^r[b-14]^r[b-16];r[b]=(C<<1|C>>>31)&4294967295}let u=this.chain_[0],f=this.chain_[1],h=this.chain_[2],p=this.chain_[3],g=this.chain_[4],m,y;for(let b=0;b<80;b++){b<40?b<20?(m=p^f&(h^p),y=1518500249):(m=f^h^p,y=1859775393):b<60?(m=f&h|p&(f|h),y=2400959708):(m=f^h^p,y=3395469782);const C=(u<<5|u>>>27)+m+g+y+r[b]&4294967295;g=p,p=h,h=(f<<30|f>>>2)&4294967295,f=u,u=C}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+f&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(n,a){if(n==null)return;a===void 0&&(a=n.length);const r=a-this.blockSize;let u=0;const f=this.buf_;let h=this.inbuf_;for(;u<a;){if(h===0)for(;u<=r;)this.compress_(n,u),u+=this.blockSize;if(typeof n=="string"){for(;u<a;)if(f[h]=n.charCodeAt(u),++h,++u,h===this.blockSize){this.compress_(f),h=0;break}}else for(;u<a;)if(f[h]=n[u],++h,++u,h===this.blockSize){this.compress_(f),h=0;break}}this.inbuf_=h,this.total_+=a}digest(){const n=[];let a=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let u=this.blockSize-1;u>=56;u--)this.buf_[u]=a&255,a/=256;this.compress_(this.buf_);let r=0;for(let u=0;u<5;u++)for(let f=24;f>=0;f-=8)n[r]=this.chain_[u]>>f&255,++r;return n}}function g0(i,n){return`${i} failed: ${n} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=function(i){const n=[];let a=0;for(let r=0;r<i.length;r++){let u=i.charCodeAt(r);if(u>=55296&&u<=56319){const f=u-55296;r++,k(r<i.length,"Surrogate pair missing trail surrogate.");const h=i.charCodeAt(r)-56320;u=65536+(f<<10)+h}u<128?n[a++]=u:u<2048?(n[a++]=u>>6|192,n[a++]=u&63|128):u<65536?(n[a++]=u>>12|224,n[a++]=u>>6&63|128,n[a++]=u&63|128):(n[a++]=u>>18|240,n[a++]=u>>12&63|128,n[a++]=u>>6&63|128,n[a++]=u&63|128)}return n},Lo=function(i){let n=0;for(let a=0;a<i.length;a++){const r=i.charCodeAt(a);r<128?n++:r<2048?n+=2:r>=55296&&r<=56319?(n+=4,a++):n+=3}return n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(i){return i&&i._delegate?i._delegate:i}class vs{constructor(n,a,r){this.name=n,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(n,a){this.name=n,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const a=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(a)){const r=new sh;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:a});u&&r.resolve(u)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(n){var a;const r=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),u=(a=n==null?void 0:n.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(f){if(u)return null;throw f}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(bS(n))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);try{const f=this.getOrInitializeService({instanceIdentifier:u});r.resolve(f)}catch{}}}}clearInstance(n=ji){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...n.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=ji){return this.instances.has(n)}getOptions(n=ji){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:a={}}=n,r=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[f,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(f);r===p&&h.resolve(u)}return u}onInit(n,a){var r;const u=this.normalizeInstanceIdentifier(a),f=(r=this.onInitCallbacks.get(u))!==null&&r!==void 0?r:new Set;f.add(n),this.onInitCallbacks.set(u,f);const h=this.instances.get(u);return h&&n(h,u),()=>{f.delete(n)}}invokeOnInitCallbacks(n,a){const r=this.onInitCallbacks.get(a);if(r)for(const u of r)try{u(n,a)}catch{}}getOrInitializeService({instanceIdentifier:n,options:a={}}){let r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vS(n),options:a}),this.instances.set(n,r),this.instancesOptions.set(n,a),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch{}return r||null}normalizeInstanceIdentifier(n=ji){return this.component?this.component.multipleInstances?n:ji:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vS(i){return i===ji?void 0:i}function bS(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const a=this.getProvider(n.name);if(a.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);a.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const a=new yS(n,this);return this.providers.set(n,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ze||(ze={}));const ES={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},CS=ze.INFO,xS={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},TS=(i,n,...a)=>{if(n<i.logLevel)return;const r=new Date().toISOString(),u=xS[n];if(u)console[u](`[${r}]  ${i.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class _0{constructor(n){this.name=n,this._logLevel=CS,this._logHandler=TS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in ze))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?ES[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...n),this._logHandler(this,ze.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...n),this._logHandler(this,ze.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...n),this._logHandler(this,ze.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...n),this._logHandler(this,ze.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...n),this._logHandler(this,ze.ERROR,...n)}}const wS=(i,n)=>n.some(a=>i instanceof a);let Xg,Zg;function AS(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RS(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y0=new WeakMap,zf=new WeakMap,v0=new WeakMap,df=new WeakMap,rh=new WeakMap;function NS(i){const n=new Promise((a,r)=>{const u=()=>{i.removeEventListener("success",f),i.removeEventListener("error",h)},f=()=>{a(di(i.result)),u()},h=()=>{r(i.error),u()};i.addEventListener("success",f),i.addEventListener("error",h)});return n.then(a=>{a instanceof IDBCursor&&y0.set(a,i)}).catch(()=>{}),rh.set(n,i),n}function DS(i){if(zf.has(i))return;const n=new Promise((a,r)=>{const u=()=>{i.removeEventListener("complete",f),i.removeEventListener("error",h),i.removeEventListener("abort",h)},f=()=>{a(),u()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),u()};i.addEventListener("complete",f),i.addEventListener("error",h),i.addEventListener("abort",h)});zf.set(i,n)}let Lf={get(i,n,a){if(i instanceof IDBTransaction){if(n==="done")return zf.get(i);if(n==="objectStoreNames")return i.objectStoreNames||v0.get(i);if(n==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return di(i[n])},set(i,n,a){return i[n]=a,!0},has(i,n){return i instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in i}};function OS(i){Lf=i(Lf)}function MS(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...a){const r=i.call(pf(this),n,...a);return v0.set(r,n.sort?n.sort():[n]),di(r)}:RS().includes(i)?function(...n){return i.apply(pf(this),n),di(y0.get(this))}:function(...n){return di(i.apply(pf(this),n))}}function zS(i){return typeof i=="function"?MS(i):(i instanceof IDBTransaction&&DS(i),wS(i,AS())?new Proxy(i,Lf):i)}function di(i){if(i instanceof IDBRequest)return NS(i);if(df.has(i))return df.get(i);const n=zS(i);return n!==i&&(df.set(i,n),rh.set(n,i)),n}const pf=i=>rh.get(i);function LS(i,n,{blocked:a,upgrade:r,blocking:u,terminated:f}={}){const h=indexedDB.open(i,n),p=di(h);return r&&h.addEventListener("upgradeneeded",g=>{r(di(h.result),g.oldVersion,g.newVersion,di(h.transaction),g)}),a&&h.addEventListener("blocked",g=>a(g.oldVersion,g.newVersion,g)),p.then(g=>{f&&g.addEventListener("close",()=>f()),u&&g.addEventListener("versionchange",m=>u(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const US=["get","getKey","getAll","getAllKeys","count"],IS=["put","add","delete","clear"],mf=new Map;function Kg(i,n){if(!(i instanceof IDBDatabase&&!(n in i)&&typeof n=="string"))return;if(mf.get(n))return mf.get(n);const a=n.replace(/FromIndex$/,""),r=n!==a,u=IS.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(u||US.includes(a)))return;const f=async function(h,...p){const g=this.transaction(h,u?"readwrite":"readonly");let m=g.store;return r&&(m=m.index(p.shift())),(await Promise.all([m[a](...p),u&&g.done]))[0]};return mf.set(n,f),f}OS(i=>({...i,get:(n,a,r)=>Kg(n,a)||i.get(n,a,r),has:(n,a)=>!!Kg(n,a)||i.has(n,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(BS(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function BS(i){const n=i.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Uf="@firebase/app",Pg="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new _0("@firebase/app"),HS="@firebase/app-compat",jS="@firebase/analytics-compat",qS="@firebase/analytics",GS="@firebase/app-check-compat",YS="@firebase/app-check",VS="@firebase/auth",QS="@firebase/auth-compat",XS="@firebase/database",ZS="@firebase/data-connect",KS="@firebase/database-compat",PS="@firebase/functions",FS="@firebase/functions-compat",$S="@firebase/installations",WS="@firebase/installations-compat",JS="@firebase/messaging",eE="@firebase/messaging-compat",tE="@firebase/performance",nE="@firebase/performance-compat",iE="@firebase/remote-config",lE="@firebase/remote-config-compat",aE="@firebase/storage",sE="@firebase/storage-compat",rE="@firebase/firestore",oE="@firebase/vertexai",uE="@firebase/firestore-compat",cE="firebase",fE="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="[DEFAULT]",hE={[Uf]:"fire-core",[HS]:"fire-core-compat",[qS]:"fire-analytics",[jS]:"fire-analytics-compat",[YS]:"fire-app-check",[GS]:"fire-app-check-compat",[VS]:"fire-auth",[QS]:"fire-auth-compat",[XS]:"fire-rtdb",[ZS]:"fire-data-connect",[KS]:"fire-rtdb-compat",[PS]:"fire-fn",[FS]:"fire-fn-compat",[$S]:"fire-iid",[WS]:"fire-iid-compat",[JS]:"fire-fcm",[eE]:"fire-fcm-compat",[tE]:"fire-perf",[nE]:"fire-perf-compat",[iE]:"fire-rc",[lE]:"fire-rc-compat",[aE]:"fire-gcs",[sE]:"fire-gcs-compat",[rE]:"fire-fst",[uE]:"fire-fst-compat",[oE]:"fire-vertex","fire-js":"fire-js",[cE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,dE=new Map,kf=new Map;function Fg(i,n){try{i.container.addComponent(n)}catch(a){Bn.debug(`Component ${n.name} failed to register with FirebaseApp ${i.name}`,a)}}function yo(i){const n=i.name;if(kf.has(n))return Bn.debug(`There were multiple attempts to register component ${n}.`),!1;kf.set(n,i);for(const a of _o.values())Fg(a,i);for(const a of dE.values())Fg(a,i);return!0}function pE(i,n){const a=i.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),i.container.getProvider(n)}function mE(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new p0("app","Firebase",gE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(n,a,r){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=fE;function b0(i,n={}){let a=i;typeof n!="object"&&(n={name:n});const r=Object.assign({name:If,automaticDataCollectionEnabled:!1},n),u=r.name;if(typeof u!="string"||!u)throw pi.create("bad-app-name",{appName:String(u)});if(a||(a=h0()),!a)throw pi.create("no-options");const f=_o.get(u);if(f){if(go(a,f.options)&&go(r,f.config))return f;throw pi.create("duplicate-app",{appName:u})}const h=new SS(u);for(const g of kf.values())h.addComponent(g);const p=new _E(a,r,h);return _o.set(u,p),p}function vE(i=If){const n=_o.get(i);if(!n&&i===If&&h0())return b0();if(!n)throw pi.create("no-app",{appName:i});return n}function Gl(i,n,a){var r;let u=(r=hE[i])!==null&&r!==void 0?r:i;a&&(u+=`-${a}`);const f=u.match(/\s|\//),h=n.match(/\s|\//);if(f||h){const p=[`Unable to register library "${u}" with version "${n}":`];f&&p.push(`library name "${u}" contains illegal characters (whitespace or "/")`),f&&h&&p.push("and"),h&&p.push(`version name "${n}" contains illegal characters (whitespace or "/")`),Bn.warn(p.join(" "));return}yo(new vs(`${u}-version`,()=>({library:u,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firebase-heartbeat-database",SE=1,bs="firebase-heartbeat-store";let gf=null;function S0(){return gf||(gf=LS(bE,SE,{upgrade:(i,n)=>{switch(n){case 0:try{i.createObjectStore(bs)}catch(a){console.warn(a)}}}}).catch(i=>{throw pi.create("idb-open",{originalErrorMessage:i.message})})),gf}async function EE(i){try{const a=(await S0()).transaction(bs),r=await a.objectStore(bs).get(E0(i));return await a.done,r}catch(n){if(n instanceof Os)Bn.warn(n.message);else{const a=pi.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(a.message)}}}async function $g(i,n){try{const r=(await S0()).transaction(bs,"readwrite");await r.objectStore(bs).put(n,E0(i)),await r.done}catch(a){if(a instanceof Os)Bn.warn(a.message);else{const r=pi.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});Bn.warn(r.message)}}}function E0(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=1024,xE=30;class TE{constructor(n){this.container=n,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new AE(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var n,a;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Wg();if(((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)===null||a===void 0?void 0:a.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(h=>h.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:u}),this._heartbeatsCache.heartbeats.length>xE){const h=RE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=Wg(),{heartbeatsToSend:r,unsentEntries:u}=wE(this._heartbeatsCache.heartbeats),f=po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(a){return Bn.warn(a),""}}}function Wg(){return new Date().toISOString().substring(0,10)}function wE(i,n=CE){const a=[];let r=i.slice();for(const u of i){const f=a.find(h=>h.agent===u.agent);if(f){if(f.dates.push(u.date),Jg(a)>n){f.dates.pop();break}}else if(a.push({agent:u.agent,dates:[u.date]}),Jg(a)>n){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class AE{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oS()?uS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await EE(this.app);return a!=null&&a.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var a;if(await this._canUseIndexedDBPromise){const u=await this.read();return $g(this.app,{lastSentHeartbeatDate:(a=n.lastSentHeartbeatDate)!==null&&a!==void 0?a:u.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var a;if(await this._canUseIndexedDBPromise){const u=await this.read();return $g(this.app,{lastSentHeartbeatDate:(a=n.lastSentHeartbeatDate)!==null&&a!==void 0?a:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...n.heartbeats]})}else return}}function Jg(i){return po(JSON.stringify({version:2,heartbeats:i})).length}function RE(i){if(i.length===0)return-1;let n=0,a=i[0].date;for(let r=1;r<i.length;r++)i[r].date<a&&(a=i[r].date,n=r);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(i){yo(new vs("platform-logger",n=>new kS(n),"PRIVATE")),yo(new vs("heartbeat",n=>new TE(n),"PRIVATE")),Gl(Uf,Pg,i),Gl(Uf,Pg,"esm2017"),Gl("fire-js","")}NE("");var DE="firebase",OE="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gl(DE,OE,"app");var e_={};const t_="@firebase/database",n_="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C0="";function ME(i){C0=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(n){this.domStorage_=n,this.prefix_="firebase:"}set(n,a){a==null?this.domStorage_.removeItem(this.prefixedName_(n)):this.domStorage_.setItem(this.prefixedName_(n),nt(a))}get(n){const a=this.domStorage_.getItem(this.prefixedName_(n));return a==null?null:ys(a)}remove(n){this.domStorage_.removeItem(this.prefixedName_(n))}prefixedName_(n){return this.prefix_+n}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(n,a){a==null?delete this.cache_[n]:this.cache_[n]=a}get(n){return jn(this.cache_,n)?this.cache_[n]:null}remove(n){delete this.cache_[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const n=window[i];return n.setItem("firebase:sentinel","cache"),n.removeItem("firebase:sentinel"),new zE(n)}}catch{}return new LE},Gi=x0("localStorage"),UE=x0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new _0("@firebase/database"),IE=function(){let i=1;return function(){return i++}}(),T0=function(i){const n=_S(i),a=new gS;a.update(n);const r=a.digest();return ah.encodeByteArray(r)},zs=function(...i){let n="";for(let a=0;a<i.length;a++){const r=i[a];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?n+=zs.apply(null,r):typeof r=="object"?n+=nt(r):n+=r,n+=" "}return n};let hs=null,i_=!0;const kE=function(i,n){k(!0,"Can't turn on custom loggers persistently."),Yl.logLevel=ze.VERBOSE,hs=Yl.log.bind(Yl)},vt=function(...i){if(i_===!0&&(i_=!1,hs===null&&UE.get("logging_enabled")===!0&&kE()),hs){const n=zs.apply(null,i);hs(n)}},Ls=function(i){return function(...n){vt(i,...n)}},Bf=function(...i){const n="FIREBASE INTERNAL ERROR: "+zs(...i);Yl.error(n)},Hn=function(...i){const n=`FIREBASE FATAL ERROR: ${zs(...i)}`;throw Yl.error(n),new Error(n)},Yt=function(...i){const n="FIREBASE WARNING: "+zs(...i);Yl.warn(n)},BE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},w0=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},HE=function(i){if(document.readyState==="complete")i();else{let n=!1;const a=function(){if(!document.body){setTimeout(a,Math.floor(10));return}n||(n=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&a()}),window.attachEvent("onload",a))}},Zl="[MIN_NAME]",Xi="[MAX_NAME]",na=function(i,n){if(i===n)return 0;if(i===Zl||n===Xi)return-1;if(n===Zl||i===Xi)return 1;{const a=l_(i),r=l_(n);return a!==null?r!==null?a-r===0?i.length-n.length:a-r:-1:r!==null?1:i<n?-1:1}},jE=function(i,n){return i===n?0:i<n?-1:1},as=function(i,n){if(n&&i in n)return n[i];throw new Error("Missing required key ("+i+") in object: "+nt(n))},oh=function(i){if(typeof i!="object"||i===null)return nt(i);const n=[];for(const r in i)n.push(r);n.sort();let a="{";for(let r=0;r<n.length;r++)r!==0&&(a+=","),a+=nt(n[r]),a+=":",a+=oh(i[n[r]]);return a+="}",a},A0=function(i,n){const a=i.length;if(a<=n)return[i];const r=[];for(let u=0;u<a;u+=n)u+n>a?r.push(i.substring(u,a)):r.push(i.substring(u,u+n));return r};function Dt(i,n){for(const a in i)i.hasOwnProperty(a)&&n(a,i[a])}const R0=function(i){k(!w0(i),"Invalid JSON number");const n=11,a=52,r=(1<<n-1)-1;let u,f,h,p,g;i===0?(f=0,h=0,u=1/i===-1/0?1:0):(u=i<0,i=Math.abs(i),i>=Math.pow(2,1-r)?(p=Math.min(Math.floor(Math.log(i)/Math.LN2),r),f=p+r,h=Math.round(i*Math.pow(2,a-p)-Math.pow(2,a))):(f=0,h=Math.round(i/Math.pow(2,1-r-a))));const m=[];for(g=a;g;g-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(g=n;g;g-=1)m.push(f%2?1:0),f=Math.floor(f/2);m.push(u?1:0),m.reverse();const y=m.join("");let b="";for(g=0;g<64;g+=8){let C=parseInt(y.substr(g,8),2).toString(16);C.length===1&&(C="0"+C),b=b+C}return b.toLowerCase()},qE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YE(i,n){let a="Unknown Error";i==="too_big"?a="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?a="Client doesn't have permission to access the desired data.":i==="unavailable"&&(a="The service is unavailable");const r=new Error(i+" at "+n._path.toString()+": "+a);return r.code=i.toUpperCase(),r}const VE=new RegExp("^-?(0*)\\d{1,10}$"),QE=-2147483648,XE=2147483647,l_=function(i){if(VE.test(i)){const n=Number(i);if(n>=QE&&n<=XE)return n}return null},Us=function(i){try{i()}catch(n){setTimeout(()=>{const a=n.stack||"";throw Yt("Exception was thrown by user callback.",a),n},Math.floor(0))}},ZE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ds=function(i,n){const a=setTimeout(i,n);return typeof a=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(a):typeof a=="object"&&a.unref&&a.unref(),a};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(n,a){this.appCheckProvider=a,this.appName=n.name,mE(n)&&n.settings.appCheckToken&&(this.serverAppAppCheckToken=n.settings.appCheckToken),this.appCheck=a==null?void 0:a.getImmediate({optional:!0}),this.appCheck||a==null||a.get().then(r=>this.appCheck=r)}getToken(n){if(this.serverAppAppCheckToken){if(n)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(n):new Promise((a,r)=>{setTimeout(()=>{this.appCheck?this.getToken(n).then(a,r):a(null)},0)})}addTokenChangeListener(n){var a;(a=this.appCheckProvider)===null||a===void 0||a.get().then(r=>r.addTokenListener(n))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(n,a,r){this.appName_=n,this.firebaseOptions_=a,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(u=>this.auth_=u)}getToken(n){return this.auth_?this.auth_.getToken(n).catch(a=>a&&a.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)):new Promise((a,r)=>{setTimeout(()=>{this.auth_?this.getToken(n).then(a,r):a(null)},0)})}addTokenChangeListener(n){this.auth_?this.auth_.addAuthTokenListener(n):this.authProvider_.get().then(a=>a.addAuthTokenListener(n))}removeTokenChangeListener(n){this.authProvider_.get().then(a=>a.removeAuthTokenListener(n))}notifyForInvalidToken(){let n='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?n+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?n+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':n+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(n)}}class ro{constructor(n){this.accessToken=n}getToken(n){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(n){n(this.accessToken)}removeTokenChangeListener(n){}notifyForInvalidToken(){}}ro.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="5",N0="v",D0="s",O0="r",M0="f",z0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,L0="ls",U0="p",Hf="ac",I0="websocket",k0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(n,a,r,u,f=!1,h="",p=!1,g=!1,m=null){this.secure=a,this.namespace=r,this.webSocketOnly=u,this.nodeAdmin=f,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=g,this.emulatorOptions=m,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gi.get("host:"+n)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(n){n!==this.internalHost&&(this.internalHost=n,this.isCacheableHost()&&Gi.set("host:"+this._host,this.internalHost))}toString(){let n=this.toURLString();return this.persistenceKey&&(n+="<"+this.persistenceKey+">"),n}toURLString(){const n=this.secure?"https://":"http://",a=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${n}${this.host}/${a}`}}function FE(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function H0(i,n,a){k(typeof n=="string","typeof type must == string"),k(typeof a=="object","typeof params must == object");let r;if(n===I0)r=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(n===k0)r=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+n);FE(i)&&(a.ns=i.namespace);const u=[];return Dt(a,(f,h)=>{u.push(f+"="+h)}),r+u.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.counters_={}}incrementCounter(n,a=1){jn(this.counters_,n)||(this.counters_[n]=0),this.counters_[n]+=a}get(){return Fb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f={},yf={};function ch(i){const n=i.toString();return _f[n]||(_f[n]=new $E),_f[n]}function WE(i,n){const a=i.toString();return yf[a]||(yf[a]=n()),yf[a]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(n){this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(n,a){this.closeAfterResponse=n,this.onClose=a,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(n,a){for(this.pendingResponses[n]=a;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let u=0;u<r.length;++u)r[u]&&Us(()=>{this.onMessage_(r[u])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="start",e3="close",t3="pLPCommand",n3="pRTLPCB",j0="id",q0="pw",G0="ser",i3="cb",l3="seg",a3="ts",s3="d",r3="dframe",Y0=1870,V0=30,o3=Y0-V0,u3=25e3,c3=3e4;class Hl{constructor(n,a,r,u,f,h,p){this.connId=n,this.repoInfo=a,this.applicationId=r,this.appCheckToken=u,this.authToken=f,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ls(n),this.stats_=ch(a),this.urlFn=g=>(this.appCheckToken&&(g[Hf]=this.appCheckToken),H0(a,k0,g))}open(n,a){this.curSegmentNum=0,this.onDisconnect_=a,this.myPacketOrderer=new JE(n),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(c3)),HE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fh((...f)=>{const[h,p,g,m,y]=f;if(this.incrementIncomingBytes_(f),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===a_)this.id=p,this.password=g;else if(h===e3)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...f)=>{const[h,p]=f;this.incrementIncomingBytes_(f),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const r={};r[a_]="t",r[G0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[i3]=this.scriptTagHolder.uniqueCallbackIdentifier),r[N0]=uh,this.transportSessionId&&(r[D0]=this.transportSessionId),this.lastSessionId&&(r[L0]=this.lastSessionId),this.applicationId&&(r[U0]=this.applicationId),this.appCheckToken&&(r[Hf]=this.appCheckToken),typeof location<"u"&&location.hostname&&z0.test(location.hostname)&&(r[O0]=M0);const u=this.urlFn(r);this.log_("Connecting via long-poll to "+u),this.scriptTagHolder.addTag(u,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hl.forceAllow_=!0}static forceDisallow(){Hl.forceDisallow_=!0}static isAvailable(){return Hl.forceAllow_?!0:!Hl.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qE()&&!GE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(n){const a=nt(n);this.bytesSent+=a.length,this.stats_.incrementCounter("bytes_sent",a.length);const r=u0(a),u=A0(r,o3);for(let f=0;f<u.length;f++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,u.length,u[f]),this.curSegmentNum++}addDisconnectPingFrame(n,a){this.myDisconnFrame=document.createElement("iframe");const r={};r[r3]="t",r[j0]=n,r[q0]=a,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(n){const a=nt(n).length;this.bytesReceived+=a,this.stats_.incrementCounter("bytes_received",a)}}class fh{constructor(n,a,r,u){this.onDisconnect=r,this.urlFn=u,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IE(),window[t3+this.uniqueCallbackIdentifier]=n,window[n3+this.uniqueCallbackIdentifier]=a,this.myIFrame=fh.createIFrame_();let f="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(f='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+f+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){vt("frame writing exception"),p.stack&&vt(p.stack),vt(p)}}}static createIFrame_(){const n=document.createElement("iframe");if(n.style.display="none",document.body){document.body.appendChild(n);try{n.contentWindow.document||vt("No IE domain setting required")}catch{const r=document.domain;n.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return n.contentDocument?n.doc=n.contentDocument:n.contentWindow?n.doc=n.contentWindow.document:n.document&&(n.doc=n.document),n}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const n=this.onDisconnect;n&&(this.onDisconnect=null,n())}startLongPoll(n,a){for(this.myID=n,this.myPW=a,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const n={};n[j0]=this.myID,n[q0]=this.myPW,n[G0]=this.currentSerial;let a=this.urlFn(n),r="",u=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V0+r.length<=Y0;){const h=this.pendingSegs.shift();r=r+"&"+l3+u+"="+h.seg+"&"+a3+u+"="+h.ts+"&"+s3+u+"="+h.d,u++}return a=a+r,this.addLongPollTag_(a,this.currentSerial),!0}else return!1}enqueueSegment(n,a,r){this.pendingSegs.push({seg:n,ts:a,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(n,a){this.outstandingRequests.add(a);const r=()=>{this.outstandingRequests.delete(a),this.newRequest_()},u=setTimeout(r,Math.floor(u3)),f=()=>{clearTimeout(u),r()};this.addTag(n,f)}addTag(n,a){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=n,r.onload=r.onreadystatechange=function(){const u=r.readyState;(!u||u==="loaded"||u==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),a())},r.onerror=()=>{vt("Long-poll script failed to load: "+n),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=16384,h3=45e3;let vo=null;typeof MozWebSocket<"u"?vo=MozWebSocket:typeof WebSocket<"u"&&(vo=WebSocket);class rn{constructor(n,a,r,u,f,h,p){this.connId=n,this.applicationId=r,this.appCheckToken=u,this.authToken=f,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ls(this.connId),this.stats_=ch(a),this.connURL=rn.connectionURL_(a,h,p,u,r),this.nodeAdmin=a.nodeAdmin}static connectionURL_(n,a,r,u,f){const h={};return h[N0]=uh,typeof location<"u"&&location.hostname&&z0.test(location.hostname)&&(h[O0]=M0),a&&(h[D0]=a),r&&(h[L0]=r),u&&(h[Hf]=u),f&&(h[U0]=f),H0(n,I0,h)}open(n,a){this.onDisconnect=a,this.onMessage=n,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gi.set("previous_websocket_failure",!0);try{let r;rS(),this.mySock=new vo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const u=r.message||r.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const u=r.message||r.data;u&&this.log_(u),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let n=!1;if(typeof navigator<"u"&&navigator.userAgent){const a=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(a);r&&r.length>1&&parseFloat(r[1])<4.4&&(n=!0)}return!n&&vo!==null&&!rn.forceDisallow_}static previouslyFailed(){return Gi.isInMemoryStorage||Gi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gi.remove("previous_websocket_failure")}appendFrame_(n){if(this.frames.push(n),this.frames.length===this.totalFrames){const a=this.frames.join("");this.frames=null;const r=ys(a);this.onMessage(r)}}handleNewFrameCount_(n){this.totalFrames=n,this.frames=[]}extractFrameCount_(n){if(k(this.frames===null,"We already have a frame buffer"),n.length<=6){const a=Number(n);if(!isNaN(a))return this.handleNewFrameCount_(a),null}return this.handleNewFrameCount_(1),n}handleIncomingFrame(n){if(this.mySock===null)return;const a=n.data;if(this.bytesReceived+=a.length,this.stats_.incrementCounter("bytes_received",a.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(a);else{const r=this.extractFrameCount_(a);r!==null&&this.appendFrame_(r)}}send(n){this.resetKeepAlive();const a=nt(n);this.bytesSent+=a.length,this.stats_.incrementCounter("bytes_sent",a.length);const r=A0(a,f3);r.length>1&&this.sendString_(String(r.length));for(let u=0;u<r.length;u++)this.sendString_(r[u])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h3))}sendString_(n){try{this.mySock.send(n)}catch(a){this.log_("Exception thrown from WebSocket.send():",a.message||a.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{static get ALL_TRANSPORTS(){return[Hl,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(n){this.initTransports_(n)}initTransports_(n){const a=rn&&rn.isAvailable();let r=a&&!rn.previouslyFailed();if(n.webSocketOnly&&(a||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rn];else{const u=this.transports_=[];for(const f of Ss.ALL_TRANSPORTS)f&&f.isAvailable()&&u.push(f);Ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ss.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3=6e4,p3=5e3,m3=10*1024,g3=100*1024,vf="t",s_="d",_3="s",r_="r",y3="e",o_="o",u_="a",c_="n",f_="p",v3="h";class b3{constructor(n,a,r,u,f,h,p,g,m,y){this.id=n,this.repoInfo_=a,this.applicationId_=r,this.appCheckToken_=u,this.authToken_=f,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=g,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ls("c:"+this.id+":"),this.transportManager_=new Ss(a),this.log_("Connection created"),this.start_()}start_(){const n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const a=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(a,r)},Math.floor(0));const u=n.healthyTimeout||0;u>0&&(this.healthyTimeout_=ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(u)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(n){return a=>{n===this.conn_?this.onConnectionLost_(a):n===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(n){return a=>{this.state_!==2&&(n===this.rx_?this.onPrimaryMessageReceived_(a):n===this.secondaryConn_?this.onSecondaryMessageReceived_(a):this.log_("message on old connection"))}}sendRequest(n){const a={t:"d",d:n};this.sendData_(a)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(n){if(vf in n){const a=n[vf];a===u_?this.upgradeIfSecondaryHealthy_():a===r_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):a===o_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(n){const a=as("t",n),r=as("d",n);if(a==="c")this.onSecondaryControl_(r);else if(a==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+a)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:f_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(n){const a=as("t",n),r=as("d",n);a==="c"?this.onControl_(r):a==="d"&&this.onDataMessage_(r)}onDataMessage_(n){this.onPrimaryResponse_(),this.onMessage_(n)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(n){const a=as(vf,n);if(s_ in n){const r=n[s_];if(a===v3){const u=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(u.h=this.repoInfo_.host),this.onHandshake_(u)}else if(a===c_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let u=0;u<this.pendingDataMessages.length;++u)this.onDataMessage_(this.pendingDataMessages[u]);this.pendingDataMessages=[],this.tryCleanupConnection()}else a===_3?this.onConnectionShutdown_(r):a===r_?this.onReset_(r):a===y3?Bf("Server Error: "+r):a===o_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bf("Unknown control packet command: "+a)}}onHandshake_(n){const a=n.ts,r=n.v,u=n.h;this.sessionId=n.s,this.repoInfo_.host=u,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,a),uh!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const n=this.transportManager_.upgradeTransport();n&&this.startUpgrade_(n)}startUpgrade_(n){this.secondaryConn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const a=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(a,r),ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d3))}onReset_(n){this.log_("Reset packet received.  New host: "+n),this.repoInfo_.host=n,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(n,a){this.log_("Realtime connection established."),this.conn_=n,this.state_=1,this.onReady_&&(this.onReady_(a,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:f_,d:{}}}))}onSecondaryConnectionLost_(){const n=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===n||this.rx_===n)&&this.close()}onConnectionLost_(n){this.conn_=null,!n&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(n){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(n),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(n){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(n)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{put(n,a,r,u){}merge(n,a,r,u){}refreshAuthToken(n){}refreshAppCheckToken(n){}onDisconnectPut(n,a,r){}onDisconnectMerge(n,a,r){}onDisconnectCancel(n,a){}reportStats(n){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(n){this.allowedEvents_=n,this.listeners_={},k(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}trigger(n,...a){if(Array.isArray(this.listeners_[n])){const r=[...this.listeners_[n]];for(let u=0;u<r.length;u++)r[u].callback.apply(r[u].context,a)}}on(n,a,r){this.validateEventType_(n),this.listeners_[n]=this.listeners_[n]||[],this.listeners_[n].push({callback:a,context:r});const u=this.getInitialEvent(n);u&&a.apply(r,u)}off(n,a,r){this.validateEventType_(n);const u=this.listeners_[n]||[];for(let f=0;f<u.length;f++)if(u[f].callback===a&&(!r||r===u[f].context)){u.splice(f,1);return}}validateEventType_(n){k(this.allowedEvents_.find(a=>a===n),"Unknown event: "+n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends X0{static getInstance(){return new bo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!d0()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(n){return k(n==="online","Unknown event type: "+n),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=32,d_=768;class Oe{constructor(n,a){if(a===void 0){this.pieces_=n.split("/");let r=0;for(let u=0;u<this.pieces_.length;u++)this.pieces_[u].length>0&&(this.pieces_[r]=this.pieces_[u],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=a}toString(){let n="";for(let a=this.pieceNum_;a<this.pieces_.length;a++)this.pieces_[a]!==""&&(n+="/"+this.pieces_[a]);return n||"/"}}function Ee(){return new Oe("")}function ve(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function _i(i){return i.pieces_.length-i.pieceNum_}function Le(i){let n=i.pieceNum_;return n<i.pieces_.length&&n++,new Oe(i.pieces_,n)}function Z0(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function S3(i){let n="";for(let a=i.pieceNum_;a<i.pieces_.length;a++)i.pieces_[a]!==""&&(n+="/"+encodeURIComponent(String(i.pieces_[a])));return n||"/"}function K0(i,n=0){return i.pieces_.slice(i.pieceNum_+n)}function P0(i){if(i.pieceNum_>=i.pieces_.length)return null;const n=[];for(let a=i.pieceNum_;a<i.pieces_.length-1;a++)n.push(i.pieces_[a]);return new Oe(n,0)}function it(i,n){const a=[];for(let r=i.pieceNum_;r<i.pieces_.length;r++)a.push(i.pieces_[r]);if(n instanceof Oe)for(let r=n.pieceNum_;r<n.pieces_.length;r++)a.push(n.pieces_[r]);else{const r=n.split("/");for(let u=0;u<r.length;u++)r[u].length>0&&a.push(r[u])}return new Oe(a,0)}function ye(i){return i.pieceNum_>=i.pieces_.length}function Et(i,n){const a=ve(i),r=ve(n);if(a===null)return n;if(a===r)return Et(Le(i),Le(n));throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+i+")")}function F0(i,n){if(_i(i)!==_i(n))return!1;for(let a=i.pieceNum_,r=n.pieceNum_;a<=i.pieces_.length;a++,r++)if(i.pieces_[a]!==n.pieces_[r])return!1;return!0}function on(i,n){let a=i.pieceNum_,r=n.pieceNum_;if(_i(i)>_i(n))return!1;for(;a<i.pieces_.length;){if(i.pieces_[a]!==n.pieces_[r])return!1;++a,++r}return!0}class E3{constructor(n,a){this.errorPrefix_=a,this.parts_=K0(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lo(this.parts_[r]);$0(this)}}function C3(i,n){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(n),i.byteLength_+=Lo(n),$0(i)}function x3(i){const n=i.parts_.pop();i.byteLength_-=Lo(n),i.parts_.length>0&&(i.byteLength_-=1)}function $0(i){if(i.byteLength_>d_)throw new Error(i.errorPrefix_+"has a key path longer than "+d_+" bytes ("+i.byteLength_+").");if(i.parts_.length>h_)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+h_+") or object contains a cycle "+qi(i))}function qi(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends X0{static getInstance(){return new hh}constructor(){super(["visible"]);let n,a;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(a="visibilitychange",n="hidden"):typeof document.mozHidden<"u"?(a="mozvisibilitychange",n="mozHidden"):typeof document.msHidden<"u"?(a="msvisibilitychange",n="msHidden"):typeof document.webkitHidden<"u"&&(a="webkitvisibilitychange",n="webkitHidden")),this.visible_=!0,a&&document.addEventListener(a,()=>{const r=!document[n];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(n){return k(n==="visible","Unknown event type: "+n),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=1e3,T3=60*5*1e3,p_=30*1e3,w3=1.3,A3=3e4,R3="server_kill",m_=3;class kn extends Q0{constructor(n,a,r,u,f,h,p,g){if(super(),this.repoInfo_=n,this.applicationId_=a,this.onDataUpdate_=r,this.onConnectStatus_=u,this.onServerInfoUpdate_=f,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=g,this.id=kn.nextPersistentConnectionId_++,this.log_=Ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=T3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hh.getInstance().on("visible",this.onVisible_,this),n.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(n,a,r){const u=++this.requestNumber_,f={r:u,a:n,b:a};this.log_(nt(f)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(f),r&&(this.requestCBHash_[u]=r)}get(n){this.initConnection_();const a=new sh,u={action:"g",request:{p:n._path.toString(),q:n._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?a.resolve(p):a.reject(p)}};this.outstandingGets_.push(u),this.outstandingGetCount_++;const f=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(f),a.promise}listen(n,a,r,u){this.initConnection_();const f=n._queryIdentifier,h=n._path.toString();this.log_("Listen called for "+h+" "+f),this.listens.has(h)||this.listens.set(h,new Map),k(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(h).has(f),"listen() called twice for same path/queryId.");const p={onComplete:u,hashFn:a,query:n,tag:r};this.listens.get(h).set(f,p),this.connected_&&this.sendListen_(p)}sendGet_(n){const a=this.outstandingGets_[n];this.sendRequest("g",a.request,r=>{delete this.outstandingGets_[n],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),a.onComplete&&a.onComplete(r)})}sendListen_(n){const a=n.query,r=a._path.toString(),u=a._queryIdentifier;this.log_("Listen on "+r+" for "+u);const f={p:r},h="q";n.tag&&(f.q=a._queryObject,f.t=n.tag),f.h=n.hashFn(),this.sendRequest(h,f,p=>{const g=p.d,m=p.s;kn.warnOnListenWarnings_(g,a),(this.listens.get(r)&&this.listens.get(r).get(u))===n&&(this.log_("listen response",p),m!=="ok"&&this.removeListen_(r,u),n.onComplete&&n.onComplete(m,g))})}static warnOnListenWarnings_(n,a){if(n&&typeof n=="object"&&jn(n,"w")){const r=Xl(n,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const u='".indexOn": "'+a._queryParams.getIndex().toString()+'"',f=a._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${u} at ${f} to your security rules for better performance.`)}}}refreshAuthToken(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(n)}reduceReconnectDelayIfAdminCredential_(n){(n&&n.length===40||pS(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=p_)}refreshAppCheckToken(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const n=this.authToken_,a=dS(n)?"auth":"gauth",r={cred:n};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(a,r,u=>{const f=u.s,h=u.d||"error";this.authToken_===n&&(f==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(f,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},n=>{const a=n.s,r=n.d||"error";a==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(a,r)})}unlisten(n,a){const r=n._path.toString(),u=n._queryIdentifier;this.log_("Unlisten called for "+r+" "+u),k(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,u)&&this.connected_&&this.sendUnlisten_(r,u,n._queryObject,a)}sendUnlisten_(n,a,r,u){this.log_("Unlisten on "+n+" for "+a);const f={p:n},h="n";u&&(f.q=r,f.t=u),this.sendRequest(h,f)}onDisconnectPut(n,a,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,a,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:a,onComplete:r})}onDisconnectMerge(n,a,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,a,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:a,onComplete:r})}onDisconnectCancel(n,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,a):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:a})}sendOnDisconnect_(n,a,r,u){const f={p:a,d:r};this.log_("onDisconnect "+n,f),this.sendRequest(n,f,h=>{u&&setTimeout(()=>{u(h.s,h.d)},Math.floor(0))})}put(n,a,r,u){this.putInternal("p",n,a,r,u)}merge(n,a,r,u){this.putInternal("m",n,a,r,u)}putInternal(n,a,r,u,f){this.initConnection_();const h={p:a,d:r};f!==void 0&&(h.h=f),this.outstandingPuts_.push({action:n,request:h,onComplete:u}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+a)}sendPut_(n){const a=this.outstandingPuts_[n].action,r=this.outstandingPuts_[n].request,u=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(a,r,f=>{this.log_(a+" response",f),delete this.outstandingPuts_[n],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),u&&u(f.s,f.d)})}reportStats(n){if(this.connected_){const a={c:n};this.log_("reportStats",a),this.sendRequest("s",a,r=>{if(r.s!=="ok"){const f=r.d;this.log_("reportStats","Error sending stats: "+f)}})}}onDataMessage_(n){if("r"in n){this.log_("from server: "+nt(n));const a=n.r,r=this.requestCBHash_[a];r&&(delete this.requestCBHash_[a],r(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}}onDataPush_(n,a){this.log_("handleServerMessage",n,a),n==="d"?this.onDataUpdate_(a.p,a.d,!1,a.t):n==="m"?this.onDataUpdate_(a.p,a.d,!0,a.t):n==="c"?this.onListenRevoked_(a.p,a.q):n==="ac"?this.onAuthRevoked_(a.s,a.d):n==="apc"?this.onAppCheckRevoked_(a.s,a.d):n==="sd"?this.onSecurityDebugPacket_(a):Bf("Unrecognized action received from server: "+nt(n)+`
Are you using the latest client?`)}onReady_(n,a){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=a,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(n){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(n))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=n}onOnline_(n){n?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>A3&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const n=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let a=Math.max(0,this.reconnectDelay_-n);a=Math.random()*a,this.log_("Trying to reconnect in "+a+"ms"),this.scheduleConnect_(a),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*w3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const n=this.onDataMessage_.bind(this),a=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),u=this.id+":"+kn.nextConnectionId_++,f=this.lastSessionId;let h=!1,p=null;const g=function(){p?p.close():(h=!0,r())},m=function(b){k(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(b)};this.realtime_={close:g,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,C]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=C&&C.token,p=new b3(u,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,a,r,O=>{Yt(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(R3)},f))}catch(b){this.log_("Failed to get token: "+b),h||(this.repoInfo_.nodeAdmin&&Yt(b),g())}}}interrupt(n){vt("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(n){vt("Resuming connection for reason: "+n),delete this.interruptReasons_[n],Vg(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(n){const a=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:a})}cancelSentTransactions_(){for(let n=0;n<this.outstandingPuts_.length;n++){const a=this.outstandingPuts_[n];a&&"h"in a.request&&a.queued&&(a.onComplete&&a.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(n,a){let r;a?r=a.map(f=>oh(f)).join("$"):r="default";const u=this.removeListen_(n,r);u&&u.onComplete&&u.onComplete("permission_denied")}removeListen_(n,a){const r=new Oe(n).toString();let u;if(this.listens.has(r)){const f=this.listens.get(r);u=f.get(a),f.delete(a),f.size===0&&this.listens.delete(r)}else u=void 0;return u}onAuthRevoked_(n,a){vt("Auth token revoked: "+n+"/"+a),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=m_&&(this.reconnectDelay_=p_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(n,a){vt("App check token revoked: "+n+"/"+a),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=m_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const n of this.listens.values())for(const a of n.values())this.sendListen_(a);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){const n=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(n.action,n.pathString,n.data,n.onComplete)}for(let n=0;n<this.outstandingGets_.length;n++)this.outstandingGets_[n]&&this.sendGet_(n)}sendConnectStats_(){const n={};let a="js";n["sdk."+a+"."+C0.replace(/\./g,"-")]=1,d0()?n["framework.cordova"]=1:sS()&&(n["framework.reactnative"]=1),this.reportStats(n)}shouldReconnect_(){const n=bo.getInstance().currentlyOnline();return Vg(this.interruptReasons_)&&n}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(n,a){this.name=n,this.node=a}static Wrap(n,a){return new me(n,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(n,a){const r=new me(Zl,n),u=new me(Zl,a);return this.compare(r,u)!==0}minPost(){return me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class W0 extends Uo{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(n){no=n}compare(n,a){return na(n.name,a.name)}isDefinedOn(n){throw ta("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(n,a){return!1}minPost(){return me.MIN}maxPost(){return new me(Xi,no)}makePost(n,a){return k(typeof n=="string","KeyIndex indexValue must always be a string."),new me(n,no)}toString(){return".key"}}const Vl=new W0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(n,a,r,u,f=null){this.isReverse_=u,this.resultGenerator_=f,this.nodeStack_=[];let h=1;for(;!n.isEmpty();)if(n=n,h=a?r(n.key,a):1,u&&(h*=-1),h<0)this.isReverse_?n=n.left:n=n.right;else if(h===0){this.nodeStack_.push(n);break}else this.nodeStack_.push(n),this.isReverse_?n=n.right:n=n.left}getNext(){if(this.nodeStack_.length===0)return null;let n=this.nodeStack_.pop(),a;if(this.resultGenerator_?a=this.resultGenerator_(n.key,n.value):a={key:n.key,value:n.value},this.isReverse_)for(n=n.left;!n.isEmpty();)this.nodeStack_.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack_.push(n),n=n.left;return a}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const n=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(n.key,n.value):{key:n.key,value:n.value}}}class ut{constructor(n,a,r,u,f){this.key=n,this.value=a,this.color=r??ut.RED,this.left=u??Rt.EMPTY_NODE,this.right=f??Rt.EMPTY_NODE}copy(n,a,r,u,f){return new ut(n??this.key,a??this.value,r??this.color,u??this.left,f??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||!!n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,a,r){let u=this;const f=r(n,u.key);return f<0?u=u.copy(null,null,null,u.left.insert(n,a,r),null):f===0?u=u.copy(null,a,null,null,null):u=u.copy(null,null,null,null,u.right.insert(n,a,r)),u.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let n=this;return!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.removeMin_(),null),n.fixUp_()}remove(n,a){let r,u;if(r=this,a(n,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(n,a),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),a(n,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;u=r.right.min_(),r=r.copy(u.key,u.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(n,a))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let n=this;return n.right.isRed_()&&!n.left.isRed_()&&(n=n.rotateLeft_()),n.left.isRed_()&&n.left.left.isRed_()&&(n=n.rotateRight_()),n.left.isRed_()&&n.right.isRed_()&&(n=n.colorFlip_()),n}moveRedLeft_(){let n=this.colorFlip_();return n.right.left.isRed_()&&(n=n.copy(null,null,null,null,n.right.rotateRight_()),n=n.rotateLeft_(),n=n.colorFlip_()),n}moveRedRight_(){let n=this.colorFlip_();return n.left.left.isRed_()&&(n=n.rotateRight_(),n=n.colorFlip_()),n}rotateLeft_(){const n=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight_(){const n=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip_(){const n=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,a)}checkMaxDepth_(){const n=this.check_();return Math.pow(2,n)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const n=this.left.check_();if(n!==this.right.check_())throw new Error("Black depths differ");return n+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class N3{copy(n,a,r,u,f){return this}insert(n,a,r){return new ut(n,a,null)}remove(n,a){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(n,a=Rt.EMPTY_NODE){this.comparator_=n,this.root_=a}insert(n,a){return new Rt(this.comparator_,this.root_.insert(n,a,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(n){return new Rt(this.comparator_,this.root_.remove(n,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(n){let a,r=this.root_;for(;!r.isEmpty();){if(a=this.comparator_(n,r.key),a===0)return r.value;a<0?r=r.left:a>0&&(r=r.right)}return null}getPredecessorKey(n){let a,r=this.root_,u=null;for(;!r.isEmpty();)if(a=this.comparator_(n,r.key),a===0){if(r.left.isEmpty())return u?u.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else a<0?r=r.left:a>0&&(u=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(n){return this.root_.inorderTraversal(n)}reverseTraversal(n){return this.root_.reverseTraversal(n)}getIterator(n){return new io(this.root_,null,this.comparator_,!1,n)}getIteratorFrom(n,a){return new io(this.root_,n,this.comparator_,!1,a)}getReverseIteratorFrom(n,a){return new io(this.root_,n,this.comparator_,!0,a)}getReverseIterator(n){return new io(this.root_,null,this.comparator_,!0,n)}}Rt.EMPTY_NODE=new N3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D3(i,n){return na(i.name,n.name)}function dh(i,n){return na(i,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf;function O3(i){jf=i}const J0=function(i){return typeof i=="number"?"number:"+R0(i):"string:"+i},ey=function(i){if(i.isLeafNode()){const n=i.val();k(typeof n=="string"||typeof n=="number"||typeof n=="object"&&jn(n,".sv"),"Priority must be a string or number.")}else k(i===jf||i.isEmpty(),"priority of unexpected type.");k(i===jf||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_;class ot{static set __childrenNodeConstructor(n){g_=n}static get __childrenNodeConstructor(){return g_}constructor(n,a=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=n,this.priorityNode_=a,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ey(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(n){return new ot(this.value_,n)}getImmediateChild(n){return n===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(n){return ye(n)?this:ve(n)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(n,a){return null}updateImmediateChild(n,a){return n===".priority"?this.updatePriority(a):a.isEmpty()&&n!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(n,a).updatePriority(this.priorityNode_)}updateChild(n,a){const r=ve(n);return r===null?a:a.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||_i(n)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(n),a)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(n,a){return!1}val(n){return n&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let n="";this.priorityNode_.isEmpty()||(n+="priority:"+J0(this.priorityNode_.val())+":");const a=typeof this.value_;n+=a+":",a==="number"?n+=R0(this.value_):n+=this.value_,this.lazyHash_=T0(n)}return this.lazyHash_}getValue(){return this.value_}compareTo(n){return n===ot.__childrenNodeConstructor.EMPTY_NODE?1:n instanceof ot.__childrenNodeConstructor?-1:(k(n.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(n))}compareToLeafNode_(n){const a=typeof n.value_,r=typeof this.value_,u=ot.VALUE_TYPE_ORDER.indexOf(a),f=ot.VALUE_TYPE_ORDER.indexOf(r);return k(u>=0,"Unknown leaf type: "+a),k(f>=0,"Unknown leaf type: "+r),u===f?r==="object"?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:f-u}withIndex(){return this}isIndexed(){return!0}equals(n){if(n===this)return!0;if(n.isLeafNode()){const a=n;return this.value_===a.value_&&this.priorityNode_.equals(a.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty,ny;function M3(i){ty=i}function z3(i){ny=i}class L3 extends Uo{compare(n,a){const r=n.node.getPriority(),u=a.node.getPriority(),f=r.compareTo(u);return f===0?na(n.name,a.name):f}isDefinedOn(n){return!n.getPriority().isEmpty()}indexedValueChanged(n,a){return!n.getPriority().equals(a.getPriority())}minPost(){return me.MIN}maxPost(){return new me(Xi,new ot("[PRIORITY-POST]",ny))}makePost(n,a){const r=ty(n);return new me(a,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ye=new L3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U3=Math.log(2);class I3{constructor(n){const a=f=>parseInt(Math.log(f)/U3,10),r=f=>parseInt(Array(f+1).join("1"),2);this.count=a(n+1),this.current_=this.count-1;const u=r(this.count);this.bits_=n+1&u}nextBitIsOne(){const n=!(this.bits_&1<<this.current_);return this.current_--,n}}const So=function(i,n,a,r){i.sort(n);const u=function(g,m){const y=m-g;let b,C;if(y===0)return null;if(y===1)return b=i[g],C=a?a(b):b,new ut(C,b.node,ut.BLACK,null,null);{const O=parseInt(y/2,10)+g,I=u(g,O),G=u(O+1,m);return b=i[O],C=a?a(b):b,new ut(C,b.node,ut.BLACK,I,G)}},f=function(g){let m=null,y=null,b=i.length;const C=function(I,G){const W=b-I,le=b;b-=I;const se=u(W+1,le),te=i[W],re=a?a(te):te;O(new ut(re,te.node,G,null,se))},O=function(I){m?(m.left=I,m=I):(y=I,m=I)};for(let I=0;I<g.count;++I){const G=g.nextBitIsOne(),W=Math.pow(2,g.count-(I+1));G?C(W,ut.BLACK):(C(W,ut.BLACK),C(W,ut.RED))}return y},h=new I3(i.length),p=f(h);return new Rt(r||n,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;const Ul={};class In{static get Default(){return k(Ul&&Ye,"ChildrenNode.ts has not been loaded"),bf=bf||new In({".priority":Ul},{".priority":Ye}),bf}constructor(n,a){this.indexes_=n,this.indexSet_=a}get(n){const a=Xl(this.indexes_,n);if(!a)throw new Error("No index defined for "+n);return a instanceof Rt?a:null}hasIndex(n){return jn(this.indexSet_,n.toString())}addIndex(n,a){k(n!==Vl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let u=!1;const f=a.getIterator(me.Wrap);let h=f.getNext();for(;h;)u=u||n.isDefinedOn(h.node),r.push(h),h=f.getNext();let p;u?p=So(r,n.getCompare()):p=Ul;const g=n.toString(),m=Object.assign({},this.indexSet_);m[g]=n;const y=Object.assign({},this.indexes_);return y[g]=p,new In(y,m)}addToIndexes(n,a){const r=mo(this.indexes_,(u,f)=>{const h=Xl(this.indexSet_,f);if(k(h,"Missing index implementation for "+f),u===Ul)if(h.isDefinedOn(n.node)){const p=[],g=a.getIterator(me.Wrap);let m=g.getNext();for(;m;)m.name!==n.name&&p.push(m),m=g.getNext();return p.push(n),So(p,h.getCompare())}else return Ul;else{const p=a.get(n.name);let g=u;return p&&(g=g.remove(new me(n.name,p))),g.insert(n,n.node)}});return new In(r,this.indexSet_)}removeFromIndexes(n,a){const r=mo(this.indexes_,u=>{if(u===Ul)return u;{const f=a.get(n.name);return f?u.remove(new me(n.name,f)):u}});return new In(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class ee{static get EMPTY_NODE(){return rs||(rs=new ee(new Rt(dh),null,In.Default))}constructor(n,a,r){this.children_=n,this.priorityNode_=a,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ey(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(n){return this.children_.isEmpty()?this:new ee(this.children_,n,this.indexMap_)}getImmediateChild(n){if(n===".priority")return this.getPriority();{const a=this.children_.get(n);return a===null?rs:a}}getChild(n){const a=ve(n);return a===null?this:this.getImmediateChild(a).getChild(Le(n))}hasChild(n){return this.children_.get(n)!==null}updateImmediateChild(n,a){if(k(a,"We should always be passing snapshot nodes"),n===".priority")return this.updatePriority(a);{const r=new me(n,a);let u,f;a.isEmpty()?(u=this.children_.remove(n),f=this.indexMap_.removeFromIndexes(r,this.children_)):(u=this.children_.insert(n,a),f=this.indexMap_.addToIndexes(r,this.children_));const h=u.isEmpty()?rs:this.priorityNode_;return new ee(u,h,f)}}updateChild(n,a){const r=ve(n);if(r===null)return a;{k(ve(n)!==".priority"||_i(n)===1,".priority must be the last token in a path");const u=this.getImmediateChild(r).updateChild(Le(n),a);return this.updateImmediateChild(r,u)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(n){if(this.isEmpty())return null;const a={};let r=0,u=0,f=!0;if(this.forEachChild(Ye,(h,p)=>{a[h]=p.val(n),r++,f&&ee.INTEGER_REGEXP_.test(h)?u=Math.max(u,Number(h)):f=!1}),!n&&f&&u<2*r){const h=[];for(const p in a)h[p]=a[p];return h}else return n&&!this.getPriority().isEmpty()&&(a[".priority"]=this.getPriority().val()),a}hash(){if(this.lazyHash_===null){let n="";this.getPriority().isEmpty()||(n+="priority:"+J0(this.getPriority().val())+":"),this.forEachChild(Ye,(a,r)=>{const u=r.hash();u!==""&&(n+=":"+a+":"+u)}),this.lazyHash_=n===""?"":T0(n)}return this.lazyHash_}getPredecessorChildName(n,a,r){const u=this.resolveIndex_(r);if(u){const f=u.getPredecessorKey(new me(n,a));return f?f.name:null}else return this.children_.getPredecessorKey(n)}getFirstChildName(n){const a=this.resolveIndex_(n);if(a){const r=a.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(n){const a=this.getFirstChildName(n);return a?new me(a,this.children_.get(a)):null}getLastChildName(n){const a=this.resolveIndex_(n);if(a){const r=a.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(n){const a=this.getLastChildName(n);return a?new me(a,this.children_.get(a)):null}forEachChild(n,a){const r=this.resolveIndex_(n);return r?r.inorderTraversal(u=>a(u.name,u.node)):this.children_.inorderTraversal(a)}getIterator(n){return this.getIteratorFrom(n.minPost(),n)}getIteratorFrom(n,a){const r=this.resolveIndex_(a);if(r)return r.getIteratorFrom(n,u=>u);{const u=this.children_.getIteratorFrom(n.name,me.Wrap);let f=u.peek();for(;f!=null&&a.compare(f,n)<0;)u.getNext(),f=u.peek();return u}}getReverseIterator(n){return this.getReverseIteratorFrom(n.maxPost(),n)}getReverseIteratorFrom(n,a){const r=this.resolveIndex_(a);if(r)return r.getReverseIteratorFrom(n,u=>u);{const u=this.children_.getReverseIteratorFrom(n.name,me.Wrap);let f=u.peek();for(;f!=null&&a.compare(f,n)>0;)u.getNext(),f=u.peek();return u}}compareTo(n){return this.isEmpty()?n.isEmpty()?0:-1:n.isLeafNode()||n.isEmpty()?1:n===Is?-1:0}withIndex(n){if(n===Vl||this.indexMap_.hasIndex(n))return this;{const a=this.indexMap_.addIndex(n,this.children_);return new ee(this.children_,this.priorityNode_,a)}}isIndexed(n){return n===Vl||this.indexMap_.hasIndex(n)}equals(n){if(n===this)return!0;if(n.isLeafNode())return!1;{const a=n;if(this.getPriority().equals(a.getPriority()))if(this.children_.count()===a.children_.count()){const r=this.getIterator(Ye),u=a.getIterator(Ye);let f=r.getNext(),h=u.getNext();for(;f&&h;){if(f.name!==h.name||!f.node.equals(h.node))return!1;f=r.getNext(),h=u.getNext()}return f===null&&h===null}else return!1;else return!1}}resolveIndex_(n){return n===Vl?null:this.indexMap_.get(n.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class k3 extends ee{constructor(){super(new Rt(dh),ee.EMPTY_NODE,In.Default)}compareTo(n){return n===this?0:1}equals(n){return n===this}getPriority(){return this}getImmediateChild(n){return ee.EMPTY_NODE}isEmpty(){return!1}}const Is=new k3;Object.defineProperties(me,{MIN:{value:new me(Zl,ee.EMPTY_NODE)},MAX:{value:new me(Xi,Is)}});W0.__EMPTY_NODE=ee.EMPTY_NODE;ot.__childrenNodeConstructor=ee;O3(Is);z3(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B3=!0;function mt(i,n=null){if(i===null)return ee.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(n=i[".priority"]),k(n===null||typeof n=="string"||typeof n=="number"||typeof n=="object"&&".sv"in n,"Invalid priority type found: "+typeof n),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const a=i;return new ot(a,mt(n))}if(!(i instanceof Array)&&B3){const a=[];let r=!1;if(Dt(i,(h,p)=>{if(h.substring(0,1)!=="."){const g=mt(p);g.isEmpty()||(r=r||!g.getPriority().isEmpty(),a.push(new me(h,g)))}}),a.length===0)return ee.EMPTY_NODE;const f=So(a,D3,h=>h.name,dh);if(r){const h=So(a,Ye.getCompare());return new ee(f,mt(n),new In({".priority":h},{".priority":Ye}))}else return new ee(f,mt(n),In.Default)}else{let a=ee.EMPTY_NODE;return Dt(i,(r,u)=>{if(jn(i,r)&&r.substring(0,1)!=="."){const f=mt(u);(f.isLeafNode()||!f.isEmpty())&&(a=a.updateImmediateChild(r,f))}}),a.updatePriority(mt(n))}}M3(mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3 extends Uo{constructor(n){super(),this.indexPath_=n,k(!ye(n)&&ve(n)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(n){return n.getChild(this.indexPath_)}isDefinedOn(n){return!n.getChild(this.indexPath_).isEmpty()}compare(n,a){const r=this.extractChild(n.node),u=this.extractChild(a.node),f=r.compareTo(u);return f===0?na(n.name,a.name):f}makePost(n,a){const r=mt(n),u=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new me(a,u)}maxPost(){const n=ee.EMPTY_NODE.updateChild(this.indexPath_,Is);return new me(Xi,n)}toString(){return K0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3 extends Uo{compare(n,a){const r=n.node.compareTo(a.node);return r===0?na(n.name,a.name):r}isDefinedOn(n){return!0}indexedValueChanged(n,a){return!n.equals(a)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(n,a){const r=mt(n);return new me(a,r)}toString(){return".value"}}const q3=new j3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(i){return{type:"value",snapshotNode:i}}function Kl(i,n){return{type:"child_added",snapshotNode:n,childName:i}}function Es(i,n){return{type:"child_removed",snapshotNode:n,childName:i}}function Cs(i,n,a){return{type:"child_changed",snapshotNode:n,childName:i,oldSnap:a}}function G3(i,n){return{type:"child_moved",snapshotNode:n,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(n){this.index_=n}updateChild(n,a,r,u,f,h){k(n.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=n.getImmediateChild(a);return p.getChild(u).equals(r.getChild(u))&&p.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?n.hasChild(a)?h.trackChildChange(Es(a,p)):k(n.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?h.trackChildChange(Kl(a,r)):h.trackChildChange(Cs(a,r,p))),n.isLeafNode()&&r.isEmpty())?n:n.updateImmediateChild(a,r).withIndex(this.index_)}updateFullNode(n,a,r){return r!=null&&(n.isLeafNode()||n.forEachChild(Ye,(u,f)=>{a.hasChild(u)||r.trackChildChange(Es(u,f))}),a.isLeafNode()||a.forEachChild(Ye,(u,f)=>{if(n.hasChild(u)){const h=n.getImmediateChild(u);h.equals(f)||r.trackChildChange(Cs(u,f,h))}else r.trackChildChange(Kl(u,f))})),a.withIndex(this.index_)}updatePriority(n,a){return n.isEmpty()?ee.EMPTY_NODE:n.updatePriority(a)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(n){this.indexedFilter_=new ph(n.getIndex()),this.index_=n.getIndex(),this.startPost_=xs.getStartPost_(n),this.endPost_=xs.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(n){const a=this.startIsInclusive_?this.index_.compare(this.getStartPost(),n)<=0:this.index_.compare(this.getStartPost(),n)<0,r=this.endIsInclusive_?this.index_.compare(n,this.getEndPost())<=0:this.index_.compare(n,this.getEndPost())<0;return a&&r}updateChild(n,a,r,u,f,h){return this.matches(new me(a,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(n,a,r,u,f,h)}updateFullNode(n,a,r){a.isLeafNode()&&(a=ee.EMPTY_NODE);let u=a.withIndex(this.index_);u=u.updatePriority(ee.EMPTY_NODE);const f=this;return a.forEachChild(Ye,(h,p)=>{f.matches(new me(h,p))||(u=u.updateImmediateChild(h,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(n,u,r)}updatePriority(n,a){return n}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(n){if(n.hasStart()){const a=n.getIndexStartName();return n.getIndex().makePost(n.getIndexStartValue(),a)}else return n.getIndex().minPost()}static getEndPost_(n){if(n.hasEnd()){const a=n.getIndexEndName();return n.getIndex().makePost(n.getIndexEndValue(),a)}else return n.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(n){this.withinDirectionalStart=a=>this.reverse_?this.withinEndPost(a):this.withinStartPost(a),this.withinDirectionalEnd=a=>this.reverse_?this.withinStartPost(a):this.withinEndPost(a),this.withinStartPost=a=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),a);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=a=>{const r=this.index_.compare(a,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xs(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}updateChild(n,a,r,u,f,h){return this.rangedFilter_.matches(new me(a,r))||(r=ee.EMPTY_NODE),n.getImmediateChild(a).equals(r)?n:n.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(n,a,r,u,f,h):this.fullLimitUpdateChild_(n,a,r,f,h)}updateFullNode(n,a,r){let u;if(a.isLeafNode()||a.isEmpty())u=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<a.numChildren()&&a.isIndexed(this.index_)){u=ee.EMPTY_NODE.withIndex(this.index_);let f;this.reverse_?f=a.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):f=a.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;f.hasNext()&&h<this.limit_;){const p=f.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))u=u.updateImmediateChild(p.name,p.node),h++;else break;else continue}}else{u=a.withIndex(this.index_),u=u.updatePriority(ee.EMPTY_NODE);let f;this.reverse_?f=u.getReverseIterator(this.index_):f=u.getIterator(this.index_);let h=0;for(;f.hasNext();){const p=f.getNext();h<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?h++:u=u.updateImmediateChild(p.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(n,u,r)}updatePriority(n,a){return n}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(n,a,r,u,f){let h;if(this.reverse_){const b=this.index_.getCompare();h=(C,O)=>b(O,C)}else h=this.index_.getCompare();const p=n;k(p.numChildren()===this.limit_,"");const g=new me(a,r),m=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),y=this.rangedFilter_.matches(g);if(p.hasChild(a)){const b=p.getImmediateChild(a);let C=u.getChildAfterChild(this.index_,m,this.reverse_);for(;C!=null&&(C.name===a||p.hasChild(C.name));)C=u.getChildAfterChild(this.index_,C,this.reverse_);const O=C==null?1:h(C,g);if(y&&!r.isEmpty()&&O>=0)return f!=null&&f.trackChildChange(Cs(a,r,b)),p.updateImmediateChild(a,r);{f!=null&&f.trackChildChange(Es(a,b));const G=p.updateImmediateChild(a,ee.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(f!=null&&f.trackChildChange(Kl(C.name,C.node)),G.updateImmediateChild(C.name,C.node)):G}}else return r.isEmpty()?n:y&&h(m,g)>=0?(f!=null&&(f.trackChildChange(Es(m.name,m.node)),f.trackChildChange(Kl(a,r))),p.updateImmediateChild(a,r).updateImmediateChild(m.name,ee.EMPTY_NODE)):n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zl}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ye}copy(){const n=new mh;return n.limitSet_=this.limitSet_,n.limit_=this.limit_,n.startSet_=this.startSet_,n.startAfterSet_=this.startAfterSet_,n.indexStartValue_=this.indexStartValue_,n.startNameSet_=this.startNameSet_,n.indexStartName_=this.indexStartName_,n.endSet_=this.endSet_,n.endBeforeSet_=this.endBeforeSet_,n.indexEndValue_=this.indexEndValue_,n.endNameSet_=this.endNameSet_,n.indexEndName_=this.indexEndName_,n.index_=this.index_,n.viewFrom_=this.viewFrom_,n}}function V3(i){return i.loadsAllData()?new ph(i.getIndex()):i.hasLimit()?new Y3(i):new xs(i)}function __(i){const n={};if(i.isDefault())return n;let a;if(i.index_===Ye?a="$priority":i.index_===q3?a="$value":i.index_===Vl?a="$key":(k(i.index_ instanceof H3,"Unrecognized index type!"),a=i.index_.toString()),n.orderBy=nt(a),i.startSet_){const r=i.startAfterSet_?"startAfter":"startAt";n[r]=nt(i.indexStartValue_),i.startNameSet_&&(n[r]+=","+nt(i.indexStartName_))}if(i.endSet_){const r=i.endBeforeSet_?"endBefore":"endAt";n[r]=nt(i.indexEndValue_),i.endNameSet_&&(n[r]+=","+nt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?n.limitToFirst=i.limit_:n.limitToLast=i.limit_),n}function y_(i){const n={};if(i.startSet_&&(n.sp=i.indexStartValue_,i.startNameSet_&&(n.sn=i.indexStartName_),n.sin=!i.startAfterSet_),i.endSet_&&(n.ep=i.indexEndValue_,i.endNameSet_&&(n.en=i.indexEndName_),n.ein=!i.endBeforeSet_),i.limitSet_){n.l=i.limit_;let a=i.viewFrom_;a===""&&(i.isViewFromLeft()?a="l":a="r"),n.vf=a}return i.index_!==Ye&&(n.i=i.index_.toString()),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Q0{reportStats(n){throw new Error("Method not implemented.")}static getListenId_(n,a){return a!==void 0?"tag$"+a:(k(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())}constructor(n,a,r,u){super(),this.repoInfo_=n,this.onDataUpdate_=a,this.authTokenProvider_=r,this.appCheckTokenProvider_=u,this.log_=Ls("p:rest:"),this.listens_={}}listen(n,a,r,u){const f=n._path.toString();this.log_("Listen called for "+f+" "+n._queryIdentifier);const h=Eo.getListenId_(n,r),p={};this.listens_[h]=p;const g=__(n._queryParams);this.restRequest_(f+".json",g,(m,y)=>{let b=y;if(m===404&&(b=null,m=null),m===null&&this.onDataUpdate_(f,b,!1,r),Xl(this.listens_,h)===p){let C;m?m===401?C="permission_denied":C="rest_error:"+m:C="ok",u(C,null)}})}unlisten(n,a){const r=Eo.getListenId_(n,a);delete this.listens_[r]}get(n){const a=__(n._queryParams),r=n._path.toString(),u=new sh;return this.restRequest_(r+".json",a,(f,h)=>{let p=h;f===404&&(p=null,f=null),f===null?(this.onDataUpdate_(r,p,!1,null),u.resolve(p)):u.reject(new Error(p))}),u.promise}refreshAuthToken(n){}restRequest_(n,a={},r){return a.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([u,f])=>{u&&u.accessToken&&(a.auth=u.accessToken),f&&f.token&&(a.ac=f.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+n+"?ns="+this.repoInfo_.namespace+mS(a);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(r&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let g=null;if(p.status>=200&&p.status<300){try{g=ys(p.responseText)}catch{Yt("Failed to parse JSON response for "+h+": "+p.responseText)}r(null,g)}else p.status!==401&&p.status!==404&&Yt("Got unsuccessful REST response for "+h+" Status: "+p.status),r(p.status);r=null}},p.open("GET",h,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(n){return this.rootNode_.getChild(n)}updateSnapshot(n,a){this.rootNode_=this.rootNode_.updateChild(n,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){return{value:null,children:new Map}}function ly(i,n,a){if(ye(n))i.value=a,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(n,a);else{const r=ve(n);i.children.has(r)||i.children.set(r,Co());const u=i.children.get(r);n=Le(n),ly(u,n,a)}}function qf(i,n,a){i.value!==null?a(n,i.value):X3(i,(r,u)=>{const f=new Oe(n.toString()+"/"+r);qf(u,f,a)})}function X3(i,n){i.children.forEach((a,r)=>{n(r,a)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(n){this.collection_=n,this.last_=null}get(){const n=this.collection_.get(),a=Object.assign({},n);return this.last_&&Dt(this.last_,(r,u)=>{a[r]=a[r]-u}),this.last_=n,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=10*1e3,K3=30*1e3,P3=5*60*1e3;class F3{constructor(n,a){this.server_=a,this.statsToReport_={},this.statsListener_=new Z3(n);const r=v_+(K3-v_)*Math.random();ds(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const n=this.statsListener_.get(),a={};let r=!1;Dt(n,(u,f)=>{f>0&&jn(this.statsToReport_,u)&&(a[u]=f,r=!0)}),r&&this.server_.reportStats(a),ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*P3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function ay(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _h(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(n,a,r){this.path=n,this.affectedTree=a,this.revert=r,this.type=un.ACK_USER_WRITE,this.source=ay()}operationForChild(n){if(ye(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const a=this.affectedTree.subtree(new Oe(n));return new xo(Ee(),a,this.revert)}}else return k(ve(this.path)===n,"operationForChild called for unrelated child."),new xo(Le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(n,a){this.source=n,this.path=a,this.type=un.LISTEN_COMPLETE}operationForChild(n){return ye(this.path)?new Ts(this.source,Ee()):new Ts(this.source,Le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(n,a,r){this.source=n,this.path=a,this.snap=r,this.type=un.OVERWRITE}operationForChild(n){return ye(this.path)?new Zi(this.source,Ee(),this.snap.getImmediateChild(n)):new Zi(this.source,Le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(n,a,r){this.source=n,this.path=a,this.children=r,this.type=un.MERGE}operationForChild(n){if(ye(this.path)){const a=this.children.subtree(new Oe(n));return a.isEmpty()?null:a.value?new Zi(this.source,Ee(),a.value):new ws(this.source,Ee(),a)}else return k(ve(this.path)===n,"Can't get a merge for a child not on the path of the operation"),new ws(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(n,a,r){this.node_=n,this.fullyInitialized_=a,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(n){if(ye(n))return this.isFullyInitialized()&&!this.filtered_;const a=ve(n);return this.isCompleteForChild(a)}isCompleteForChild(n){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(n)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(n){this.query_=n,this.index_=this.query_._queryParams.getIndex()}}function W3(i,n,a,r){const u=[],f=[];return n.forEach(h=>{h.type==="child_changed"&&i.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&f.push(G3(h.childName,h.snapshotNode))}),os(i,u,"child_removed",n,r,a),os(i,u,"child_added",n,r,a),os(i,u,"child_moved",f,r,a),os(i,u,"child_changed",n,r,a),os(i,u,"value",n,r,a),u}function os(i,n,a,r,u,f){const h=r.filter(p=>p.type===a);h.sort((p,g)=>eC(i,p,g)),h.forEach(p=>{const g=J3(i,p,f);u.forEach(m=>{m.respondsTo(p.type)&&n.push(m.createEvent(g,i.query_))})})}function J3(i,n,a){return n.type==="value"||n.type==="child_removed"||(n.prevName=a.getPredecessorChildName(n.childName,n.snapshotNode,i.index_)),n}function eC(i,n,a){if(n.childName==null||a.childName==null)throw ta("Should only compare child_ events.");const r=new me(n.childName,n.snapshotNode),u=new me(a.childName,a.snapshotNode);return i.index_.compare(r,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(i,n){return{eventCache:i,serverCache:n}}function ps(i,n,a,r){return Io(new yi(n,a,r),i.serverCache)}function sy(i,n,a,r){return Io(i.eventCache,new yi(n,a,r))}function To(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Ki(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf;const tC=()=>(Sf||(Sf=new Rt(jE)),Sf);class Ie{static fromObject(n){let a=new Ie(null);return Dt(n,(r,u)=>{a=a.set(new Oe(r),u)}),a}constructor(n,a=tC()){this.value=n,this.children=a}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(n,a){if(this.value!=null&&a(this.value))return{path:Ee(),value:this.value};if(ye(n))return null;{const r=ve(n),u=this.children.get(r);if(u!==null){const f=u.findRootMostMatchingPathAndValue(Le(n),a);return f!=null?{path:it(new Oe(r),f.path),value:f.value}:null}else return null}}findRootMostValueAndPath(n){return this.findRootMostMatchingPathAndValue(n,()=>!0)}subtree(n){if(ye(n))return this;{const a=ve(n),r=this.children.get(a);return r!==null?r.subtree(Le(n)):new Ie(null)}}set(n,a){if(ye(n))return new Ie(a,this.children);{const r=ve(n),f=(this.children.get(r)||new Ie(null)).set(Le(n),a),h=this.children.insert(r,f);return new Ie(this.value,h)}}remove(n){if(ye(n))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const a=ve(n),r=this.children.get(a);if(r){const u=r.remove(Le(n));let f;return u.isEmpty()?f=this.children.remove(a):f=this.children.insert(a,u),this.value===null&&f.isEmpty()?new Ie(null):new Ie(this.value,f)}else return this}}get(n){if(ye(n))return this.value;{const a=ve(n),r=this.children.get(a);return r?r.get(Le(n)):null}}setTree(n,a){if(ye(n))return a;{const r=ve(n),f=(this.children.get(r)||new Ie(null)).setTree(Le(n),a);let h;return f.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,f),new Ie(this.value,h)}}fold(n){return this.fold_(Ee(),n)}fold_(n,a){const r={};return this.children.inorderTraversal((u,f)=>{r[u]=f.fold_(it(n,u),a)}),a(n,this.value,r)}findOnPath(n,a){return this.findOnPath_(n,Ee(),a)}findOnPath_(n,a,r){const u=this.value?r(a,this.value):!1;if(u)return u;if(ye(n))return null;{const f=ve(n),h=this.children.get(f);return h?h.findOnPath_(Le(n),it(a,f),r):null}}foreachOnPath(n,a){return this.foreachOnPath_(n,Ee(),a)}foreachOnPath_(n,a,r){if(ye(n))return this;{this.value&&r(a,this.value);const u=ve(n),f=this.children.get(u);return f?f.foreachOnPath_(Le(n),it(a,u),r):new Ie(null)}}foreach(n){this.foreach_(Ee(),n)}foreach_(n,a){this.children.inorderTraversal((r,u)=>{u.foreach_(it(n,r),a)}),this.value&&a(n,this.value)}foreachChild(n){this.children.inorderTraversal((a,r)=>{r.value&&n(a,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(n){this.writeTree_=n}static empty(){return new cn(new Ie(null))}}function ms(i,n,a){if(ye(n))return new cn(new Ie(a));{const r=i.writeTree_.findRootMostValueAndPath(n);if(r!=null){const u=r.path;let f=r.value;const h=Et(u,n);return f=f.updateChild(h,a),new cn(i.writeTree_.set(u,f))}else{const u=new Ie(a),f=i.writeTree_.setTree(n,u);return new cn(f)}}}function b_(i,n,a){let r=i;return Dt(a,(u,f)=>{r=ms(r,it(n,u),f)}),r}function S_(i,n){if(ye(n))return cn.empty();{const a=i.writeTree_.setTree(n,new Ie(null));return new cn(a)}}function Gf(i,n){return Pi(i,n)!=null}function Pi(i,n){const a=i.writeTree_.findRootMostValueAndPath(n);return a!=null?i.writeTree_.get(a.path).getChild(Et(a.path,n)):null}function E_(i){const n=[],a=i.writeTree_.value;return a!=null?a.isLeafNode()||a.forEachChild(Ye,(r,u)=>{n.push(new me(r,u))}):i.writeTree_.children.inorderTraversal((r,u)=>{u.value!=null&&n.push(new me(r,u.value))}),n}function mi(i,n){if(ye(n))return i;{const a=Pi(i,n);return a!=null?new cn(new Ie(a)):new cn(i.writeTree_.subtree(n))}}function Yf(i){return i.writeTree_.isEmpty()}function Pl(i,n){return ry(Ee(),i.writeTree_,n)}function ry(i,n,a){if(n.value!=null)return a.updateChild(i,n.value);{let r=null;return n.children.inorderTraversal((u,f)=>{u===".priority"?(k(f.value!==null,"Priority writes must always be leaf nodes"),r=f.value):a=ry(it(i,u),f,a)}),!a.getChild(i).isEmpty()&&r!==null&&(a=a.updateChild(it(i,".priority"),r)),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(i,n){return fy(n,i)}function nC(i,n,a,r,u){k(r>i.lastWriteId,"Stacking an older write on top of newer ones"),u===void 0&&(u=!0),i.allWrites.push({path:n,snap:a,writeId:r,visible:u}),u&&(i.visibleWrites=ms(i.visibleWrites,n,a)),i.lastWriteId=r}function iC(i,n){for(let a=0;a<i.allWrites.length;a++){const r=i.allWrites[a];if(r.writeId===n)return r}return null}function lC(i,n){const a=i.allWrites.findIndex(p=>p.writeId===n);k(a>=0,"removeWrite called with nonexistent writeId.");const r=i.allWrites[a];i.allWrites.splice(a,1);let u=r.visible,f=!1,h=i.allWrites.length-1;for(;u&&h>=0;){const p=i.allWrites[h];p.visible&&(h>=a&&aC(p,r.path)?u=!1:on(r.path,p.path)&&(f=!0)),h--}if(u){if(f)return sC(i),!0;if(r.snap)i.visibleWrites=S_(i.visibleWrites,r.path);else{const p=r.children;Dt(p,g=>{i.visibleWrites=S_(i.visibleWrites,it(r.path,g))})}return!0}else return!1}function aC(i,n){if(i.snap)return on(i.path,n);for(const a in i.children)if(i.children.hasOwnProperty(a)&&on(it(i.path,a),n))return!0;return!1}function sC(i){i.visibleWrites=oy(i.allWrites,rC,Ee()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function rC(i){return i.visible}function oy(i,n,a){let r=cn.empty();for(let u=0;u<i.length;++u){const f=i[u];if(n(f)){const h=f.path;let p;if(f.snap)on(a,h)?(p=Et(a,h),r=ms(r,p,f.snap)):on(h,a)&&(p=Et(h,a),r=ms(r,Ee(),f.snap.getChild(p)));else if(f.children){if(on(a,h))p=Et(a,h),r=b_(r,p,f.children);else if(on(h,a))if(p=Et(h,a),ye(p))r=b_(r,Ee(),f.children);else{const g=Xl(f.children,ve(p));if(g){const m=g.getChild(Le(p));r=ms(r,Ee(),m)}}}else throw ta("WriteRecord should have .snap or .children")}}return r}function uy(i,n,a,r,u){if(!r&&!u){const f=Pi(i.visibleWrites,n);if(f!=null)return f;{const h=mi(i.visibleWrites,n);if(Yf(h))return a;if(a==null&&!Gf(h,Ee()))return null;{const p=a||ee.EMPTY_NODE;return Pl(h,p)}}}else{const f=mi(i.visibleWrites,n);if(!u&&Yf(f))return a;if(!u&&a==null&&!Gf(f,Ee()))return null;{const h=function(m){return(m.visible||u)&&(!r||!~r.indexOf(m.writeId))&&(on(m.path,n)||on(n,m.path))},p=oy(i.allWrites,h,n),g=a||ee.EMPTY_NODE;return Pl(p,g)}}}function oC(i,n,a){let r=ee.EMPTY_NODE;const u=Pi(i.visibleWrites,n);if(u)return u.isLeafNode()||u.forEachChild(Ye,(f,h)=>{r=r.updateImmediateChild(f,h)}),r;if(a){const f=mi(i.visibleWrites,n);return a.forEachChild(Ye,(h,p)=>{const g=Pl(mi(f,new Oe(h)),p);r=r.updateImmediateChild(h,g)}),E_(f).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const f=mi(i.visibleWrites,n);return E_(f).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function uC(i,n,a,r,u){k(r||u,"Either existingEventSnap or existingServerSnap must exist");const f=it(n,a);if(Gf(i.visibleWrites,f))return null;{const h=mi(i.visibleWrites,f);return Yf(h)?u.getChild(a):Pl(h,u.getChild(a))}}function cC(i,n,a,r){const u=it(n,a),f=Pi(i.visibleWrites,u);if(f!=null)return f;if(r.isCompleteForChild(a)){const h=mi(i.visibleWrites,u);return Pl(h,r.getNode().getImmediateChild(a))}else return null}function fC(i,n){return Pi(i.visibleWrites,n)}function hC(i,n,a,r,u,f,h){let p;const g=mi(i.visibleWrites,n),m=Pi(g,Ee());if(m!=null)p=m;else if(a!=null)p=Pl(g,a);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const y=[],b=h.getCompare(),C=f?p.getReverseIteratorFrom(r,h):p.getIteratorFrom(r,h);let O=C.getNext();for(;O&&y.length<u;)b(O,r)!==0&&y.push(O),O=C.getNext();return y}else return[]}function dC(){return{visibleWrites:cn.empty(),allWrites:[],lastWriteId:-1}}function wo(i,n,a,r){return uy(i.writeTree,i.treePath,n,a,r)}function yh(i,n){return oC(i.writeTree,i.treePath,n)}function C_(i,n,a,r){return uC(i.writeTree,i.treePath,n,a,r)}function Ao(i,n){return fC(i.writeTree,it(i.treePath,n))}function pC(i,n,a,r,u,f){return hC(i.writeTree,i.treePath,n,a,r,u,f)}function vh(i,n,a){return cC(i.writeTree,i.treePath,n,a)}function cy(i,n){return fy(it(i.treePath,n),i.writeTree)}function fy(i,n){return{treePath:i,writeTree:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.changeMap=new Map}trackChildChange(n){const a=n.type,r=n.childName;k(a==="child_added"||a==="child_changed"||a==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const u=this.changeMap.get(r);if(u){const f=u.type;if(a==="child_added"&&f==="child_removed")this.changeMap.set(r,Cs(r,n.snapshotNode,u.snapshotNode));else if(a==="child_removed"&&f==="child_added")this.changeMap.delete(r);else if(a==="child_removed"&&f==="child_changed")this.changeMap.set(r,Es(r,u.oldSnap));else if(a==="child_changed"&&f==="child_added")this.changeMap.set(r,Kl(r,n.snapshotNode));else if(a==="child_changed"&&f==="child_changed")this.changeMap.set(r,Cs(r,n.snapshotNode,u.oldSnap));else throw ta("Illegal combination of changes: "+n+" occurred after "+u)}else this.changeMap.set(r,n)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{getCompleteChild(n){return null}getChildAfterChild(n,a,r){return null}}const hy=new gC;class bh{constructor(n,a,r=null){this.writes_=n,this.viewCache_=a,this.optCompleteServerCache_=r}getCompleteChild(n){const a=this.viewCache_.eventCache;if(a.isCompleteForChild(n))return a.getNode().getImmediateChild(n);{const r=this.optCompleteServerCache_!=null?new yi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vh(this.writes_,n,r)}}getChildAfterChild(n,a,r){const u=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),f=pC(this.writes_,u,a,1,r,n);return f.length===0?null:f[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(i){return{filter:i}}function yC(i,n){k(n.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),k(n.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function vC(i,n,a,r,u){const f=new mC;let h,p;if(a.type===un.OVERWRITE){const m=a;m.source.fromUser?h=Vf(i,n,m.path,m.snap,r,u,f):(k(m.source.fromServer,"Unknown source."),p=m.source.tagged||n.serverCache.isFiltered()&&!ye(m.path),h=Ro(i,n,m.path,m.snap,r,u,p,f))}else if(a.type===un.MERGE){const m=a;m.source.fromUser?h=SC(i,n,m.path,m.children,r,u,f):(k(m.source.fromServer,"Unknown source."),p=m.source.tagged||n.serverCache.isFiltered(),h=Qf(i,n,m.path,m.children,r,u,p,f))}else if(a.type===un.ACK_USER_WRITE){const m=a;m.revert?h=xC(i,n,m.path,r,u,f):h=EC(i,n,m.path,m.affectedTree,r,u,f)}else if(a.type===un.LISTEN_COMPLETE)h=CC(i,n,a.path,r,f);else throw ta("Unknown operation type: "+a.type);const g=f.getChanges();return bC(n,h,g),{viewCache:h,changes:g}}function bC(i,n,a){const r=n.eventCache;if(r.isFullyInitialized()){const u=r.getNode().isLeafNode()||r.getNode().isEmpty(),f=To(i);(a.length>0||!i.eventCache.isFullyInitialized()||u&&!r.getNode().equals(f)||!r.getNode().getPriority().equals(f.getPriority()))&&a.push(iy(To(n)))}}function dy(i,n,a,r,u,f){const h=n.eventCache;if(Ao(r,a)!=null)return n;{let p,g;if(ye(a))if(k(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const m=Ki(n),y=m instanceof ee?m:ee.EMPTY_NODE,b=yh(r,y);p=i.filter.updateFullNode(n.eventCache.getNode(),b,f)}else{const m=wo(r,Ki(n));p=i.filter.updateFullNode(n.eventCache.getNode(),m,f)}else{const m=ve(a);if(m===".priority"){k(_i(a)===1,"Can't have a priority with additional path components");const y=h.getNode();g=n.serverCache.getNode();const b=C_(r,a,y,g);b!=null?p=i.filter.updatePriority(y,b):p=h.getNode()}else{const y=Le(a);let b;if(h.isCompleteForChild(m)){g=n.serverCache.getNode();const C=C_(r,a,h.getNode(),g);C!=null?b=h.getNode().getImmediateChild(m).updateChild(y,C):b=h.getNode().getImmediateChild(m)}else b=vh(r,m,n.serverCache);b!=null?p=i.filter.updateChild(h.getNode(),m,b,y,u,f):p=h.getNode()}}return ps(n,p,h.isFullyInitialized()||ye(a),i.filter.filtersNodes())}}function Ro(i,n,a,r,u,f,h,p){const g=n.serverCache;let m;const y=h?i.filter:i.filter.getIndexedFilter();if(ye(a))m=y.updateFullNode(g.getNode(),r,null);else if(y.filtersNodes()&&!g.isFiltered()){const O=g.getNode().updateChild(a,r);m=y.updateFullNode(g.getNode(),O,null)}else{const O=ve(a);if(!g.isCompleteForPath(a)&&_i(a)>1)return n;const I=Le(a),W=g.getNode().getImmediateChild(O).updateChild(I,r);O===".priority"?m=y.updatePriority(g.getNode(),W):m=y.updateChild(g.getNode(),O,W,I,hy,null)}const b=sy(n,m,g.isFullyInitialized()||ye(a),y.filtersNodes()),C=new bh(u,b,f);return dy(i,b,a,u,C,p)}function Vf(i,n,a,r,u,f,h){const p=n.eventCache;let g,m;const y=new bh(u,n,f);if(ye(a))m=i.filter.updateFullNode(n.eventCache.getNode(),r,h),g=ps(n,m,!0,i.filter.filtersNodes());else{const b=ve(a);if(b===".priority")m=i.filter.updatePriority(n.eventCache.getNode(),r),g=ps(n,m,p.isFullyInitialized(),p.isFiltered());else{const C=Le(a),O=p.getNode().getImmediateChild(b);let I;if(ye(C))I=r;else{const G=y.getCompleteChild(b);G!=null?Z0(C)===".priority"&&G.getChild(P0(C)).isEmpty()?I=G:I=G.updateChild(C,r):I=ee.EMPTY_NODE}if(O.equals(I))g=n;else{const G=i.filter.updateChild(p.getNode(),b,I,C,y,h);g=ps(n,G,p.isFullyInitialized(),i.filter.filtersNodes())}}}return g}function x_(i,n){return i.eventCache.isCompleteForChild(n)}function SC(i,n,a,r,u,f,h){let p=n;return r.foreach((g,m)=>{const y=it(a,g);x_(n,ve(y))&&(p=Vf(i,p,y,m,u,f,h))}),r.foreach((g,m)=>{const y=it(a,g);x_(n,ve(y))||(p=Vf(i,p,y,m,u,f,h))}),p}function T_(i,n,a){return a.foreach((r,u)=>{n=n.updateChild(r,u)}),n}function Qf(i,n,a,r,u,f,h,p){if(n.serverCache.getNode().isEmpty()&&!n.serverCache.isFullyInitialized())return n;let g=n,m;ye(a)?m=r:m=new Ie(null).setTree(a,r);const y=n.serverCache.getNode();return m.children.inorderTraversal((b,C)=>{if(y.hasChild(b)){const O=n.serverCache.getNode().getImmediateChild(b),I=T_(i,O,C);g=Ro(i,g,new Oe(b),I,u,f,h,p)}}),m.children.inorderTraversal((b,C)=>{const O=!n.serverCache.isCompleteForChild(b)&&C.value===null;if(!y.hasChild(b)&&!O){const I=n.serverCache.getNode().getImmediateChild(b),G=T_(i,I,C);g=Ro(i,g,new Oe(b),G,u,f,h,p)}}),g}function EC(i,n,a,r,u,f,h){if(Ao(u,a)!=null)return n;const p=n.serverCache.isFiltered(),g=n.serverCache;if(r.value!=null){if(ye(a)&&g.isFullyInitialized()||g.isCompleteForPath(a))return Ro(i,n,a,g.getNode().getChild(a),u,f,p,h);if(ye(a)){let m=new Ie(null);return g.getNode().forEachChild(Vl,(y,b)=>{m=m.set(new Oe(y),b)}),Qf(i,n,a,m,u,f,p,h)}else return n}else{let m=new Ie(null);return r.foreach((y,b)=>{const C=it(a,y);g.isCompleteForPath(C)&&(m=m.set(y,g.getNode().getChild(C)))}),Qf(i,n,a,m,u,f,p,h)}}function CC(i,n,a,r,u){const f=n.serverCache,h=sy(n,f.getNode(),f.isFullyInitialized()||ye(a),f.isFiltered());return dy(i,h,a,r,hy,u)}function xC(i,n,a,r,u,f){let h;if(Ao(r,a)!=null)return n;{const p=new bh(r,n,u),g=n.eventCache.getNode();let m;if(ye(a)||ve(a)===".priority"){let y;if(n.serverCache.isFullyInitialized())y=wo(r,Ki(n));else{const b=n.serverCache.getNode();k(b instanceof ee,"serverChildren would be complete if leaf node"),y=yh(r,b)}y=y,m=i.filter.updateFullNode(g,y,f)}else{const y=ve(a);let b=vh(r,y,n.serverCache);b==null&&n.serverCache.isCompleteForChild(y)&&(b=g.getImmediateChild(y)),b!=null?m=i.filter.updateChild(g,y,b,Le(a),p,f):n.eventCache.getNode().hasChild(y)?m=i.filter.updateChild(g,y,ee.EMPTY_NODE,Le(a),p,f):m=g,m.isEmpty()&&n.serverCache.isFullyInitialized()&&(h=wo(r,Ki(n)),h.isLeafNode()&&(m=i.filter.updateFullNode(m,h,f)))}return h=n.serverCache.isFullyInitialized()||Ao(r,Ee())!=null,ps(n,m,h,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(n,a){this.query_=n,this.eventRegistrations_=[];const r=this.query_._queryParams,u=new ph(r.getIndex()),f=V3(r);this.processor_=_C(f);const h=a.serverCache,p=a.eventCache,g=u.updateFullNode(ee.EMPTY_NODE,h.getNode(),null),m=f.updateFullNode(ee.EMPTY_NODE,p.getNode(),null),y=new yi(g,h.isFullyInitialized(),u.filtersNodes()),b=new yi(m,p.isFullyInitialized(),f.filtersNodes());this.viewCache_=Io(b,y),this.eventGenerator_=new $3(this.query_)}get query(){return this.query_}}function wC(i){return i.viewCache_.serverCache.getNode()}function AC(i){return To(i.viewCache_)}function RC(i,n){const a=Ki(i.viewCache_);return a&&(i.query._queryParams.loadsAllData()||!ye(n)&&!a.getImmediateChild(ve(n)).isEmpty())?a.getChild(n):null}function w_(i){return i.eventRegistrations_.length===0}function NC(i,n){i.eventRegistrations_.push(n)}function A_(i,n,a){const r=[];if(a){k(n==null,"A cancel should cancel all event registrations.");const u=i.query._path;i.eventRegistrations_.forEach(f=>{const h=f.createCancelEvent(a,u);h&&r.push(h)})}if(n){let u=[];for(let f=0;f<i.eventRegistrations_.length;++f){const h=i.eventRegistrations_[f];if(!h.matches(n))u.push(h);else if(n.hasAnyCallback()){u=u.concat(i.eventRegistrations_.slice(f+1));break}}i.eventRegistrations_=u}else i.eventRegistrations_=[];return r}function R_(i,n,a,r){n.type===un.MERGE&&n.source.queryId!==null&&(k(Ki(i.viewCache_),"We should always have a full cache before handling merges"),k(To(i.viewCache_),"Missing event cache, even though we have a server cache"));const u=i.viewCache_,f=vC(i.processor_,u,n,a,r);return yC(i.processor_,f.viewCache),k(f.viewCache.serverCache.isFullyInitialized()||!u.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=f.viewCache,py(i,f.changes,f.viewCache.eventCache.getNode(),null)}function DC(i,n){const a=i.viewCache_.eventCache,r=[];return a.getNode().isLeafNode()||a.getNode().forEachChild(Ye,(f,h)=>{r.push(Kl(f,h))}),a.isFullyInitialized()&&r.push(iy(a.getNode())),py(i,r,a.getNode(),n)}function py(i,n,a,r){const u=r?[r]:i.eventRegistrations_;return W3(i.eventGenerator_,n,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;class my{constructor(){this.views=new Map}}function OC(i){k(!No,"__referenceConstructor has already been defined"),No=i}function MC(){return k(No,"Reference.ts has not been loaded"),No}function zC(i){return i.views.size===0}function Sh(i,n,a,r){const u=n.source.queryId;if(u!==null){const f=i.views.get(u);return k(f!=null,"SyncTree gave us an op for an invalid query."),R_(f,n,a,r)}else{let f=[];for(const h of i.views.values())f=f.concat(R_(h,n,a,r));return f}}function gy(i,n,a,r,u){const f=n._queryIdentifier,h=i.views.get(f);if(!h){let p=wo(a,u?r:null),g=!1;p?g=!0:r instanceof ee?(p=yh(a,r),g=!1):(p=ee.EMPTY_NODE,g=!1);const m=Io(new yi(p,g,!1),new yi(r,u,!1));return new TC(n,m)}return h}function LC(i,n,a,r,u,f){const h=gy(i,n,r,u,f);return i.views.has(n._queryIdentifier)||i.views.set(n._queryIdentifier,h),NC(h,a),DC(h,a)}function UC(i,n,a,r){const u=n._queryIdentifier,f=[];let h=[];const p=vi(i);if(u==="default")for(const[g,m]of i.views.entries())h=h.concat(A_(m,a,r)),w_(m)&&(i.views.delete(g),m.query._queryParams.loadsAllData()||f.push(m.query));else{const g=i.views.get(u);g&&(h=h.concat(A_(g,a,r)),w_(g)&&(i.views.delete(u),g.query._queryParams.loadsAllData()||f.push(g.query)))}return p&&!vi(i)&&f.push(new(MC())(n._repo,n._path)),{removed:f,events:h}}function _y(i){const n=[];for(const a of i.views.values())a.query._queryParams.loadsAllData()||n.push(a);return n}function gi(i,n){let a=null;for(const r of i.views.values())a=a||RC(r,n);return a}function yy(i,n){if(n._queryParams.loadsAllData())return Bo(i);{const r=n._queryIdentifier;return i.views.get(r)}}function vy(i,n){return yy(i,n)!=null}function vi(i){return Bo(i)!=null}function Bo(i){for(const n of i.views.values())if(n.query._queryParams.loadsAllData())return n;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;function IC(i){k(!Do,"__referenceConstructor has already been defined"),Do=i}function kC(){return k(Do,"Reference.ts has not been loaded"),Do}let BC=1;class N_{constructor(n){this.listenProvider_=n,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=dC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function HC(i,n,a,r,u){return nC(i.pendingWriteTree_,n,a,r,u),u?Bs(i,new Zi(ay(),n,a)):[]}function jl(i,n,a=!1){const r=iC(i.pendingWriteTree_,n);if(lC(i.pendingWriteTree_,n)){let f=new Ie(null);return r.snap!=null?f=f.set(Ee(),!0):Dt(r.children,h=>{f=f.set(new Oe(h),!0)}),Bs(i,new xo(r.path,f,a))}else return[]}function ks(i,n,a){return Bs(i,new Zi(gh(),n,a))}function jC(i,n,a){const r=Ie.fromObject(a);return Bs(i,new ws(gh(),n,r))}function qC(i,n){return Bs(i,new Ts(gh(),n))}function GC(i,n,a){const r=Eh(i,a);if(r){const u=Ch(r),f=u.path,h=u.queryId,p=Et(f,n),g=new Ts(_h(h),p);return xh(i,f,g)}else return[]}function by(i,n,a,r,u=!1){const f=n._path,h=i.syncPointTree_.get(f);let p=[];if(h&&(n._queryIdentifier==="default"||vy(h,n))){const g=UC(h,n,a,r);zC(h)&&(i.syncPointTree_=i.syncPointTree_.remove(f));const m=g.removed;if(p=g.events,!u){const y=m.findIndex(C=>C._queryParams.loadsAllData())!==-1,b=i.syncPointTree_.findOnPath(f,(C,O)=>vi(O));if(y&&!b){const C=i.syncPointTree_.subtree(f);if(!C.isEmpty()){const O=XC(C);for(let I=0;I<O.length;++I){const G=O[I],W=G.query,le=Ty(i,G);i.listenProvider_.startListening(gs(W),As(i,W),le.hashFn,le.onComplete)}}}!b&&m.length>0&&!r&&(y?i.listenProvider_.stopListening(gs(n),null):m.forEach(C=>{const O=i.queryToTagMap.get(Ho(C));i.listenProvider_.stopListening(gs(C),O)}))}ZC(i,m)}return p}function Sy(i,n,a,r){const u=Eh(i,r);if(u!=null){const f=Ch(u),h=f.path,p=f.queryId,g=Et(h,n),m=new Zi(_h(p),g,a);return xh(i,h,m)}else return[]}function YC(i,n,a,r){const u=Eh(i,r);if(u){const f=Ch(u),h=f.path,p=f.queryId,g=Et(h,n),m=Ie.fromObject(a),y=new ws(_h(p),g,m);return xh(i,h,y)}else return[]}function VC(i,n,a,r=!1){const u=n._path;let f=null,h=!1;i.syncPointTree_.foreachOnPath(u,(C,O)=>{const I=Et(C,u);f=f||gi(O,I),h=h||vi(O)});let p=i.syncPointTree_.get(u);p?(h=h||vi(p),f=f||gi(p,Ee())):(p=new my,i.syncPointTree_=i.syncPointTree_.set(u,p));let g;f!=null?g=!0:(g=!1,f=ee.EMPTY_NODE,i.syncPointTree_.subtree(u).foreachChild((O,I)=>{const G=gi(I,Ee());G&&(f=f.updateImmediateChild(O,G))}));const m=vy(p,n);if(!m&&!n._queryParams.loadsAllData()){const C=Ho(n);k(!i.queryToTagMap.has(C),"View does not exist, but we have a tag");const O=KC();i.queryToTagMap.set(C,O),i.tagToQueryMap.set(O,C)}const y=ko(i.pendingWriteTree_,u);let b=LC(p,n,a,y,f,g);if(!m&&!h&&!r){const C=yy(p,n);b=b.concat(PC(i,n,C))}return b}function Ey(i,n,a){const u=i.pendingWriteTree_,f=i.syncPointTree_.findOnPath(n,(h,p)=>{const g=Et(h,n),m=gi(p,g);if(m)return m});return uy(u,n,f,a,!0)}function QC(i,n){const a=n._path;let r=null;i.syncPointTree_.foreachOnPath(a,(m,y)=>{const b=Et(m,a);r=r||gi(y,b)});let u=i.syncPointTree_.get(a);u?r=r||gi(u,Ee()):(u=new my,i.syncPointTree_=i.syncPointTree_.set(a,u));const f=r!=null,h=f?new yi(r,!0,!1):null,p=ko(i.pendingWriteTree_,n._path),g=gy(u,n,p,f?h.getNode():ee.EMPTY_NODE,f);return AC(g)}function Bs(i,n){return Cy(n,i.syncPointTree_,null,ko(i.pendingWriteTree_,Ee()))}function Cy(i,n,a,r){if(ye(i.path))return xy(i,n,a,r);{const u=n.get(Ee());a==null&&u!=null&&(a=gi(u,Ee()));let f=[];const h=ve(i.path),p=i.operationForChild(h),g=n.children.get(h);if(g&&p){const m=a?a.getImmediateChild(h):null,y=cy(r,h);f=f.concat(Cy(p,g,m,y))}return u&&(f=f.concat(Sh(u,i,r,a))),f}}function xy(i,n,a,r){const u=n.get(Ee());a==null&&u!=null&&(a=gi(u,Ee()));let f=[];return n.children.inorderTraversal((h,p)=>{const g=a?a.getImmediateChild(h):null,m=cy(r,h),y=i.operationForChild(h);y&&(f=f.concat(xy(y,p,g,m)))}),u&&(f=f.concat(Sh(u,i,r,a))),f}function Ty(i,n){const a=n.query,r=As(i,a);return{hashFn:()=>(wC(n)||ee.EMPTY_NODE).hash(),onComplete:u=>{if(u==="ok")return r?GC(i,a._path,r):qC(i,a._path);{const f=YE(u,a);return by(i,a,null,f)}}}}function As(i,n){const a=Ho(n);return i.queryToTagMap.get(a)}function Ho(i){return i._path.toString()+"$"+i._queryIdentifier}function Eh(i,n){return i.tagToQueryMap.get(n)}function Ch(i){const n=i.indexOf("$");return k(n!==-1&&n<i.length-1,"Bad queryKey."),{queryId:i.substr(n+1),path:new Oe(i.substr(0,n))}}function xh(i,n,a){const r=i.syncPointTree_.get(n);k(r,"Missing sync point for query tag that we're tracking");const u=ko(i.pendingWriteTree_,n);return Sh(r,a,u,null)}function XC(i){return i.fold((n,a,r)=>{if(a&&vi(a))return[Bo(a)];{let u=[];return a&&(u=_y(a)),Dt(r,(f,h)=>{u=u.concat(h)}),u}})}function gs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(kC())(i._repo,i._path):i}function ZC(i,n){for(let a=0;a<n.length;++a){const r=n[a];if(!r._queryParams.loadsAllData()){const u=Ho(r),f=i.queryToTagMap.get(u);i.queryToTagMap.delete(u),i.tagToQueryMap.delete(f)}}}function KC(){return BC++}function PC(i,n,a){const r=n._path,u=As(i,n),f=Ty(i,a),h=i.listenProvider_.startListening(gs(n),u,f.hashFn,f.onComplete),p=i.syncPointTree_.subtree(r);if(u)k(!vi(p.value),"If we're adding a query, it shouldn't be shadowed");else{const g=p.fold((m,y,b)=>{if(!ye(m)&&y&&vi(y))return[Bo(y).query];{let C=[];return y&&(C=C.concat(_y(y).map(O=>O.query))),Dt(b,(O,I)=>{C=C.concat(I)}),C}});for(let m=0;m<g.length;++m){const y=g[m];i.listenProvider_.stopListening(gs(y),As(i,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(n){this.node_=n}getImmediateChild(n){const a=this.node_.getImmediateChild(n);return new Th(a)}node(){return this.node_}}class wh{constructor(n,a){this.syncTree_=n,this.path_=a}getImmediateChild(n){const a=it(this.path_,n);return new wh(this.syncTree_,a)}node(){return Ey(this.syncTree_,this.path_)}}const FC=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},D_=function(i,n,a){if(!i||typeof i!="object")return i;if(k(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return $C(i[".sv"],n,a);if(typeof i[".sv"]=="object")return WC(i[".sv"],n);k(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},$C=function(i,n,a){switch(i){case"timestamp":return a.timestamp;default:k(!1,"Unexpected server value: "+i)}},WC=function(i,n,a){i.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const r=i.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const u=n.node();if(k(u!==null&&typeof u<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!u.isLeafNode())return r;const h=u.getValue();return typeof h!="number"?r:h+r},JC=function(i,n,a,r){return Ah(n,new wh(a,i),r)},ex=function(i,n,a){return Ah(i,new Th(n),a)};function Ah(i,n,a){const r=i.getPriority().val(),u=D_(r,n.getImmediateChild(".priority"),a);let f;if(i.isLeafNode()){const h=i,p=D_(h.getValue(),n,a);return p!==h.getValue()||u!==h.getPriority().val()?new ot(p,mt(u)):i}else{const h=i;return f=h,u!==h.getPriority().val()&&(f=f.updatePriority(new ot(u))),h.forEachChild(Ye,(p,g)=>{const m=Ah(g,n.getImmediateChild(p),a);m!==g&&(f=f.updateImmediateChild(p,m))}),f}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(n="",a=null,r={children:{},childCount:0}){this.name=n,this.parent=a,this.node=r}}function Nh(i,n){let a=n instanceof Oe?n:new Oe(n),r=i,u=ve(a);for(;u!==null;){const f=Xl(r.node.children,u)||{children:{},childCount:0};r=new Rh(u,r,f),a=Le(a),u=ve(a)}return r}function ia(i){return i.node.value}function wy(i,n){i.node.value=n,Xf(i)}function Ay(i){return i.node.childCount>0}function tx(i){return ia(i)===void 0&&!Ay(i)}function jo(i,n){Dt(i.node.children,(a,r)=>{n(new Rh(a,i,r))})}function Ry(i,n,a,r){a&&n(i),jo(i,u=>{Ry(u,n,!0)})}function nx(i,n,a){let r=i.parent;for(;r!==null;){if(n(r))return!0;r=r.parent}return!1}function Hs(i){return new Oe(i.parent===null?i.name:Hs(i.parent)+"/"+i.name)}function Xf(i){i.parent!==null&&ix(i.parent,i.name,i)}function ix(i,n,a){const r=tx(a),u=jn(i.node.children,n);r&&u?(delete i.node.children[n],i.node.childCount--,Xf(i)):!r&&!u&&(i.node.children[n]=a.node,i.node.childCount++,Xf(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/[\[\].#$\/\u0000-\u001F\u007F]/,ax=/[\[\].#$\u0000-\u001F\u007F]/,Ef=10*1024*1024,Ny=function(i){return typeof i=="string"&&i.length!==0&&!lx.test(i)},Dy=function(i){return typeof i=="string"&&i.length!==0&&!ax.test(i)},sx=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Dy(i)},Oy=function(i,n,a){const r=a instanceof Oe?new E3(a,i):a;if(n===void 0)throw new Error(i+"contains undefined "+qi(r));if(typeof n=="function")throw new Error(i+"contains a function "+qi(r)+" with contents = "+n.toString());if(w0(n))throw new Error(i+"contains "+n.toString()+" "+qi(r));if(typeof n=="string"&&n.length>Ef/3&&Lo(n)>Ef)throw new Error(i+"contains a string greater than "+Ef+" utf8 bytes "+qi(r)+" ('"+n.substring(0,50)+"...')");if(n&&typeof n=="object"){let u=!1,f=!1;if(Dt(n,(h,p)=>{if(h===".value")u=!0;else if(h!==".priority"&&h!==".sv"&&(f=!0,!Ny(h)))throw new Error(i+" contains an invalid key ("+h+") "+qi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C3(r,h),Oy(i,p,r),x3(r)}),u&&f)throw new Error(i+' contains ".value" child '+qi(r)+" in addition to actual children.")}},My=function(i,n,a,r){if(!Dy(a))throw new Error(g0(i,n)+'was an invalid path = "'+a+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rx=function(i,n,a,r){a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),My(i,n,a)},ox=function(i,n){const a=n.path.toString();if(typeof n.repoInfo.host!="string"||n.repoInfo.host.length===0||!Ny(n.repoInfo.namespace)&&n.repoInfo.host.split(":")[0]!=="localhost"||a.length!==0&&!sx(a))throw new Error(g0(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cx(i,n){let a=null;for(let r=0;r<n.length;r++){const u=n[r],f=u.getPath();a!==null&&!F0(f,a.path)&&(i.eventLists_.push(a),a=null),a===null&&(a={events:[],path:f}),a.events.push(u)}a&&i.eventLists_.push(a)}function bi(i,n,a){cx(i,a),fx(i,r=>on(r,n)||on(n,r))}function fx(i,n){i.recursionDepth_++;let a=!0;for(let r=0;r<i.eventLists_.length;r++){const u=i.eventLists_[r];if(u){const f=u.path;n(f)?(hx(i.eventLists_[r]),i.eventLists_[r]=null):a=!1}}a&&(i.eventLists_=[]),i.recursionDepth_--}function hx(i){for(let n=0;n<i.events.length;n++){const a=i.events[n];if(a!==null){i.events[n]=null;const r=a.getEventRunner();hs&&vt("event: "+a.toString()),Us(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="repo_interrupt",px=25;class mx{constructor(n,a,r,u){this.repoInfo_=n,this.forceRestClient_=a,this.authTokenProvider_=r,this.appCheckProvider_=u,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ux,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Co(),this.transactionQueueTree_=new Rh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gx(i,n,a){if(i.stats_=ch(i.repoInfo_),i.forceRestClient_||ZE())i.server_=new Eo(i.repoInfo_,(r,u,f,h)=>{O_(i,r,u,f,h)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>M_(i,!0),0);else{if(typeof a<"u"&&a!==null){if(typeof a!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(a)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}i.persistentConnection_=new kn(i.repoInfo_,n,(r,u,f,h)=>{O_(i,r,u,f,h)},r=>{M_(i,r)},r=>{yx(i,r)},i.authTokenProvider_,i.appCheckProvider_,a),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(r=>{i.server_.refreshAuthToken(r)}),i.appCheckProvider_.addTokenChangeListener(r=>{i.server_.refreshAppCheckToken(r.token)}),i.statsReporter_=WE(i.repoInfo_,()=>new F3(i.stats_,i.server_)),i.infoData_=new Q3,i.infoSyncTree_=new N_({startListening:(r,u,f,h)=>{let p=[];const g=i.infoData_.getNode(r._path);return g.isEmpty()||(p=ks(i.infoSyncTree_,r._path,g),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),Dh(i,"connected",!1),i.serverSyncTree_=new N_({startListening:(r,u,f,h)=>(i.server_.listen(r,f,u,(p,g)=>{const m=h(p,g);bi(i.eventQueue_,r._path,m)}),[]),stopListening:(r,u)=>{i.server_.unlisten(r,u)}})}function _x(i){const a=i.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+a}function zy(i){return FC({timestamp:_x(i)})}function O_(i,n,a,r,u){i.dataUpdateCount++;const f=new Oe(n);a=i.interceptServerDataCallback_?i.interceptServerDataCallback_(n,a):a;let h=[];if(u)if(r){const g=mo(a,m=>mt(m));h=YC(i.serverSyncTree_,f,g,u)}else{const g=mt(a);h=Sy(i.serverSyncTree_,f,g,u)}else if(r){const g=mo(a,m=>mt(m));h=jC(i.serverSyncTree_,f,g)}else{const g=mt(a);h=ks(i.serverSyncTree_,f,g)}let p=f;h.length>0&&(p=zh(i,f)),bi(i.eventQueue_,p,h)}function M_(i,n){Dh(i,"connected",n),n===!1&&Sx(i)}function yx(i,n){Dt(n,(a,r)=>{Dh(i,a,r)})}function Dh(i,n,a){const r=new Oe("/.info/"+n),u=mt(a);i.infoData_.updateSnapshot(r,u);const f=ks(i.infoSyncTree_,r,u);bi(i.eventQueue_,r,f)}function vx(i){return i.nextWriteId_++}function bx(i,n,a){const r=QC(i.serverSyncTree_,n);return r!=null?Promise.resolve(r):i.server_.get(n).then(u=>{const f=mt(u).withIndex(n._queryParams.getIndex());VC(i.serverSyncTree_,n,a,!0);let h;if(n._queryParams.loadsAllData())h=ks(i.serverSyncTree_,n._path,f);else{const p=As(i.serverSyncTree_,n);h=Sy(i.serverSyncTree_,n._path,f,p)}return bi(i.eventQueue_,n._path,h),by(i.serverSyncTree_,n,a,null,!0),f},u=>(Oh(i,"get for query "+nt(n)+" failed: "+u),Promise.reject(new Error(u))))}function Sx(i){Oh(i,"onDisconnectEvents");const n=zy(i),a=Co();qf(i.onDisconnect_,Ee(),(u,f)=>{const h=JC(u,f,i.serverSyncTree_,n);ly(a,u,h)});let r=[];qf(a,Ee(),(u,f)=>{r=r.concat(ks(i.serverSyncTree_,u,f));const h=Tx(i,u);zh(i,h)}),i.onDisconnect_=Co(),bi(i.eventQueue_,Ee(),r)}function Ex(i){i.persistentConnection_&&i.persistentConnection_.interrupt(dx)}function Oh(i,...n){let a="";i.persistentConnection_&&(a=i.persistentConnection_.id+":"),vt(a,...n)}function Ly(i,n,a){return Ey(i.serverSyncTree_,n,a)||ee.EMPTY_NODE}function Mh(i,n=i.transactionQueueTree_){if(n||qo(i,n),ia(n)){const a=Iy(i,n);k(a.length>0,"Sending zero length transaction queue"),a.every(u=>u.status===0)&&Cx(i,Hs(n),a)}else Ay(n)&&jo(n,a=>{Mh(i,a)})}function Cx(i,n,a){const r=a.map(m=>m.currentWriteId),u=Ly(i,n,r);let f=u;const h=u.hash();for(let m=0;m<a.length;m++){const y=a[m];k(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=Et(n,y.path);f=f.updateChild(b,y.currentOutputSnapshotRaw)}const p=f.val(!0),g=n;i.server_.put(g.toString(),p,m=>{Oh(i,"transaction put response",{path:g.toString(),status:m});let y=[];if(m==="ok"){const b=[];for(let C=0;C<a.length;C++)a[C].status=2,y=y.concat(jl(i.serverSyncTree_,a[C].currentWriteId)),a[C].onComplete&&b.push(()=>a[C].onComplete(null,!0,a[C].currentOutputSnapshotResolved)),a[C].unwatcher();qo(i,Nh(i.transactionQueueTree_,n)),Mh(i,i.transactionQueueTree_),bi(i.eventQueue_,n,y);for(let C=0;C<b.length;C++)Us(b[C])}else{if(m==="datastale")for(let b=0;b<a.length;b++)a[b].status===3?a[b].status=4:a[b].status=0;else{Yt("transaction at "+g.toString()+" failed: "+m);for(let b=0;b<a.length;b++)a[b].status=4,a[b].abortReason=m}zh(i,n)}},h)}function zh(i,n){const a=Uy(i,n),r=Hs(a),u=Iy(i,a);return xx(i,u,r),r}function xx(i,n,a){if(n.length===0)return;const r=[];let u=[];const h=n.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<n.length;p++){const g=n[p],m=Et(a,g.path);let y=!1,b;if(k(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)y=!0,b=g.abortReason,u=u.concat(jl(i.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=px)y=!0,b="maxretry",u=u.concat(jl(i.serverSyncTree_,g.currentWriteId,!0));else{const C=Ly(i,g.path,h);g.currentInputSnapshot=C;const O=n[p].update(C.val());if(O!==void 0){Oy("transaction failed: Data returned ",O,g.path);let I=mt(O);typeof O=="object"&&O!=null&&jn(O,".priority")||(I=I.updatePriority(C.getPriority()));const W=g.currentWriteId,le=zy(i),se=ex(I,C,le);g.currentOutputSnapshotRaw=I,g.currentOutputSnapshotResolved=se,g.currentWriteId=vx(i),h.splice(h.indexOf(W),1),u=u.concat(HC(i.serverSyncTree_,g.path,se,g.currentWriteId,g.applyLocally)),u=u.concat(jl(i.serverSyncTree_,W,!0))}else y=!0,b="nodata",u=u.concat(jl(i.serverSyncTree_,g.currentWriteId,!0))}bi(i.eventQueue_,a,u),u=[],y&&(n[p].status=2,function(C){setTimeout(C,Math.floor(0))}(n[p].unwatcher),n[p].onComplete&&(b==="nodata"?r.push(()=>n[p].onComplete(null,!1,n[p].currentInputSnapshot)):r.push(()=>n[p].onComplete(new Error(b),!1,null))))}qo(i,i.transactionQueueTree_);for(let p=0;p<r.length;p++)Us(r[p]);Mh(i,i.transactionQueueTree_)}function Uy(i,n){let a,r=i.transactionQueueTree_;for(a=ve(n);a!==null&&ia(r)===void 0;)r=Nh(r,a),n=Le(n),a=ve(n);return r}function Iy(i,n){const a=[];return ky(i,n,a),a.sort((r,u)=>r.order-u.order),a}function ky(i,n,a){const r=ia(n);if(r)for(let u=0;u<r.length;u++)a.push(r[u]);jo(n,u=>{ky(i,u,a)})}function qo(i,n){const a=ia(n);if(a){let r=0;for(let u=0;u<a.length;u++)a[u].status!==2&&(a[r]=a[u],r++);a.length=r,wy(n,a.length>0?a:void 0)}jo(n,r=>{qo(i,r)})}function Tx(i,n){const a=Hs(Uy(i,n)),r=Nh(i.transactionQueueTree_,n);return nx(r,u=>{Cf(i,u)}),Cf(i,r),Ry(r,u=>{Cf(i,u)}),a}function Cf(i,n){const a=ia(n);if(a){const r=[];let u=[],f=-1;for(let h=0;h<a.length;h++)a[h].status===3||(a[h].status===1?(k(f===h-1,"All SENT items should be at beginning of queue."),f=h,a[h].status=3,a[h].abortReason="set"):(k(a[h].status===0,"Unexpected transaction status in abort"),a[h].unwatcher(),u=u.concat(jl(i.serverSyncTree_,a[h].currentWriteId,!0)),a[h].onComplete&&r.push(a[h].onComplete.bind(null,new Error("set"),!1,null))));f===-1?wy(n,void 0):a.length=f+1,bi(i.eventQueue_,Hs(n),u);for(let h=0;h<r.length;h++)Us(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(i){let n="";const a=i.split("/");for(let r=0;r<a.length;r++)if(a[r].length>0){let u=a[r];try{u=decodeURIComponent(u.replace(/\+/g," "))}catch{}n+="/"+u}return n}function Ax(i){const n={};i.charAt(0)==="?"&&(i=i.substring(1));for(const a of i.split("&")){if(a.length===0)continue;const r=a.split("=");r.length===2?n[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${a}' in query '${i}'`)}return n}const z_=function(i,n){const a=Rx(i),r=a.namespace;a.domain==="firebase.com"&&Hn(a.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&a.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),a.secure||BE();const u=a.scheme==="ws"||a.scheme==="wss";return{repoInfo:new B0(a.host,a.secure,r,u,n,"",r!==a.subdomain),path:new Oe(a.pathString)}},Rx=function(i){let n="",a="",r="",u="",f="",h=!0,p="https",g=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(p=i.substring(0,m-1),i=i.substring(m+2));let y=i.indexOf("/");y===-1&&(y=i.length);let b=i.indexOf("?");b===-1&&(b=i.length),n=i.substring(0,Math.min(y,b)),y<b&&(u=wx(i.substring(y,b)));const C=Ax(i.substring(Math.min(i.length,b)));m=n.indexOf(":"),m>=0?(h=p==="https"||p==="wss",g=parseInt(n.substring(m+1),10)):m=n.length;const O=n.slice(0,m);if(O.toLowerCase()==="localhost")a="localhost";else if(O.split(".").length<=2)a=O;else{const I=n.indexOf(".");r=n.substring(0,I).toLowerCase(),a=n.substring(I+1),f=r}"ns"in C&&(f=C.ns)}return{host:n,port:g,domain:a,subdomain:r,secure:h,scheme:p,pathString:u,namespace:f}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(n,a,r,u){this.eventType=n,this.eventRegistration=a,this.snapshot=r,this.prevName=u}getPath(){const n=this.snapshot.ref;return this.eventType==="value"?n._path:n.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class Dx{constructor(n,a,r){this.eventRegistration=n,this.error=a,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(n,a){this.snapshotCallback=n,this.cancelCallback=a}onValue(n,a){this.snapshotCallback.call(null,n,a)}onCancel(n){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,n)}get hasCancelCallback(){return!!this.cancelCallback}matches(n){return this.snapshotCallback===n.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===n.snapshotCallback.userCallback&&this.snapshotCallback.context===n.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(n,a,r,u){this._repo=n,this._path=a,this._queryParams=r,this._orderByCalled=u}get key(){return ye(this._path)?null:Z0(this._path)}get ref(){return new qn(this._repo,this._path)}get _queryIdentifier(){const n=y_(this._queryParams),a=oh(n);return a==="{}"?"default":a}get _queryObject(){return y_(this._queryParams)}isEqual(n){if(n=Ms(n),!(n instanceof Lh))return!1;const a=this._repo===n._repo,r=F0(this._path,n._path),u=this._queryIdentifier===n._queryIdentifier;return a&&r&&u}toJSON(){return this.toString()}toString(){return this._repo.toString()+S3(this._path)}}class qn extends Lh{constructor(n,a){super(n,a,new mh,!1)}get parent(){const n=P0(this._path);return n===null?null:new qn(this._repo,n)}get root(){let n=this;for(;n.parent!==null;)n=n.parent;return n}}class Rs{constructor(n,a,r){this._node=n,this.ref=a,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(n){const a=new Oe(n),r=Zf(this.ref,n);return new Rs(this._node.getChild(a),r,Ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(n){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,u)=>n(new Rs(u,Zf(this.ref,r),Ye)))}hasChild(n){const a=new Oe(n);return!this._node.getChild(a).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mx(i,n){return i=Ms(i),i._checkNotDeleted("ref"),n!==void 0?Zf(i._root,n):i._root}function Zf(i,n){return i=Ms(i),ve(i._path)===null?rx("child","path",n):My("child","path",n),new qn(i._repo,it(i._path,n))}function zx(i){i=Ms(i);const n=new Ox(()=>{}),a=new Uh(n);return bx(i._repo,i,a).then(r=>new Rs(r,new qn(i._repo,i._path),i._queryParams.getIndex()))}class Uh{constructor(n){this.callbackContext=n}respondsTo(n){return n==="value"}createEvent(n,a){const r=a._queryParams.getIndex();return new Nx("value",this,new Rs(n.snapshotNode,new qn(a._repo,a._path),r))}getEventRunner(n){return n.getEventType()==="cancel"?()=>this.callbackContext.onCancel(n.error):()=>this.callbackContext.onValue(n.snapshot,null)}createCancelEvent(n,a){return this.callbackContext.hasCancelCallback?new Dx(this,n,a):null}matches(n){return n instanceof Uh?!n.callbackContext||!this.callbackContext?!0:n.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}OC(qn);IC(qn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="FIREBASE_DATABASE_EMULATOR_HOST",Kf={};let Ux=!1;function Ix(i,n,a,r){i.repoInfo_=new B0(n,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,a),r&&(i.authTokenProvider_=r)}function kx(i,n,a,r,u){let f=r||i.options.databaseURL;f===void 0&&(i.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",i.options.projectId),f=`${i.options.projectId}-default-rtdb.firebaseio.com`);let h=z_(f,u),p=h.repoInfo,g;typeof process<"u"&&e_&&(g=e_[Lx]),g?(f=`http://${g}?ns=${p.namespace}`,h=z_(f,u),p=h.repoInfo):h.repoInfo.secure;const m=new PE(i.name,i.options,n);ox("Invalid Firebase Database URL",h),ye(h.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=Hx(p,i,m,new KE(i,a));return new jx(y,i)}function Bx(i,n){const a=Kf[n];(!a||a[i.key]!==i)&&Hn(`Database ${n}(${i.repoInfo_}) has already been deleted.`),Ex(i),delete a[i.key]}function Hx(i,n,a,r){let u=Kf[n.name];u||(u={},Kf[n.name]=u);let f=u[i.toURLString()];return f&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),f=new mx(i,Ux,a,r),u[i.toURLString()]=f,f}class jx{constructor(n,a){this._repoInternal=n,this.app=a,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qn(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(n){this._rootInternal===null&&Hn("Cannot call "+n+" on a deleted database.")}}function qx(i=vE(),n){const a=pE(i,"database").getImmediate({identifier:n});if(!a._instanceStarted){const r=iS("database");r&&Gx(a,...r)}return a}function Gx(i,n,a,r={}){i=Ms(i),i._checkNotDeleted("useEmulator");const u=`${n}:${a}`,f=i._repoInternal;if(i._instanceStarted){if(u===i._repoInternal.repoInfo_.host&&go(r,f.repoInfo_.emulatorOptions))return;Hn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(f.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new ro(ro.OWNER);else if(r.mockUserToken){const p=typeof r.mockUserToken=="string"?r.mockUserToken:lS(r.mockUserToken,i.app.options.projectId);h=new ro(p)}Ix(f,u,r,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(i){ME(yE),yo(new vs("database",(n,{instanceIdentifier:a})=>{const r=n.getProvider("app").getImmediate(),u=n.getProvider("auth-internal"),f=n.getProvider("app-check-internal");return kx(r,u,f,a)},"PUBLIC").setMultipleInstances(!0)),Gl(t_,n_,i),Gl(t_,n_,"esm2017")}kn.prototype.simpleListen=function(i,n){this.sendRequest("q",{p:i},n)};kn.prototype.echo=function(i,n){this.sendRequest("echo",{d:i},n)};Yx();const Vx={apiKey:"AIzaSyASNNVYo0BqiFUviv3g1SxIb-SutNf2EwQ",authDomain:"trivia-track.firebaseapp.com",databaseURL:"https://trivia-track-default-rtdb.firebaseio.com",projectId:"trivia-track",storageBucket:"trivia-track.firebasestorage.app",messagingSenderId:"844365235478",appId:"1:844365235478:web:ce59be2be47670574a3c37"},Qx=b0(Vx),Xx=qx(Qx),xf={},Hi={},Zx=async i=>{try{const a={1:"culturaGeneral",2:"deportes",3:"geografiaHistoria",4:"cienciaTecnologia",5:"cineMusicaTV",6:"arteLiteratura"}[i];if(!a)throw new Error("Categoría inválida");if(Hi[a]||(Hi[a]=[]),!xf[a]){const m=Mx(Xx,a),y=await zx(m);if(!y.exists())throw new Error(`No hay preguntas disponibles para la categoría ${a}`);xf[a]=y.val()}const r=xf[a],u=r.length;Hi[a].length>=u&&(Hi[a]=[],console.log(`Todas las preguntas de ${a} han sido mostradas. Reiniciando ciclo.`));let f,h=0;const p=u*2;do if(f=Math.floor(Math.random()*u),h++,h>p){Hi[a]=[];break}while(Hi[a].includes(f));Hi[a].push(f);const g=r[f];if(!g)throw new Error("No se encontró la pregunta");return{...g,category:a}}catch(n){throw console.error("Error al obtener pregunta:",n),n}},Kx=""+new URL("dice-roll-DtPjOM46.mp3",import.meta.url).href,Px=""+new URL("correct-answer-EVJCPu21.mp3",import.meta.url).href,Fx=""+new URL("wrong-answer-oTn-Tupp.mp3",import.meta.url).href,$x=""+new URL("powerUp-pGO4Li0D.mp3",import.meta.url).href,Wx=""+new URL("Sad-Trombone-BhOcSrp2.mp3",import.meta.url).href,Jx=""+new URL("tenSeconds-DTJuC3aX.mp3",import.meta.url).href,eT=""+new URL("Running-Fc-jJfHU.mp3",import.meta.url).href,tT=""+new URL("teleport-C1Nq3o-u.mp3",import.meta.url).href,L_=new Audio(Kx),U_=new Audio(Px),I_=new Audio(Fx),k_=new Audio($x),B_=new Audio(Wx),Tf=new Audio(Jx),H_=new Audio(eT),j_=new Audio(tT);let qt=!0;const Jt={playDiceRoll:()=>{qt&&(L_.currentTime=0,L_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},playCriticalTime:()=>{qt&&(Tf.currentTime=0,Tf.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},stopCriticalTime:()=>{qt&&Tf.pause()},playCorrectAnswer:()=>{qt&&(U_.currentTime=0,U_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},playMove:()=>{qt&&(H_.currentTime=16,H_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},playTeleport:()=>{qt&&(j_.currentTime=0,j_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},playWrongAnswer:()=>{qt&&(I_.currentTime=0,I_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},playGameWin:()=>{qt&&(k_.currentTime=0,k_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},playGameOver:()=>{qt&&(B_.currentTime=0,B_.play().catch(i=>console.warn("Error reproduciendo sonido:",i)))},toggleSound:()=>(qt=!qt,qt),isSoundEnabled:()=>qt},By=pe.createContext(),js=()=>pe.useContext(By),nT=({children:i})=>{const[n,a]=pe.useState(0),[r,u]=pe.useState(0),[f,h]=pe.useState(null),[p,g]=pe.useState(null),[m,y]=pe.useState(!1),[b,C]=pe.useState(20),[O,I]=pe.useState(!1),[G,W]=pe.useState(!1),[le,se]=pe.useState(null),[te,re]=pe.useState(null),[K,ie]=pe.useState(null),[P,Be]=pe.useState(!1),[ft,tn]=pe.useState(0),[Ot,Xe]=pe.useState(!0),bt=50,nn={1:"Cultura General",2:"Deportes",3:"Geografía e Historia",4:"Ciencia y Tecnología",5:"Cine, Música y TV",6:"Arte y Literatura"},Ze=()=>{y(!0),re(null),ie(null);const Y=Math.floor(Math.random()*6)+1;h(Y),D(Y)},D=async Y=>{try{const fe=await Zx(Y);g(fe),H(),y(!1)}catch(fe){console.error("Error obteniendo pregunta:",fe),y(!1);const He=Y%6+1;D(He)}},H=()=>{C(20),I(!0)},Z=()=>{I(!1)},ce=Y=>{if(te!==null)return;re(Y),Z();const fe=Y===p.correctAnswerIndex;ie(fe?"correct":"incorrect"),fe?Jt.playCorrectAnswer():Jt.playWrongAnswer(),setTimeout(()=>{g(null),setTimeout(()=>{U(fe)},1500)},1500)},S=()=>{Z(),ie("incorrect"),Jt.playWrongAnswer(),setTimeout(()=>{g(null),setTimeout(()=>{U(!1)},1500)},1500)},U=Y=>{if(Xe(Y),Y){const fe=n,He=Math.min(n+f,bt);B(fe,He,!0)}else{const fe=r,He=Math.min(r+f,bt);B(fe,He,!1)}},B=(Y,fe,He)=>{Be(!0),tn(Y),Jt.playMove();let We=Y;const Je=()=>{if(We++,tn(We),We>=fe){[11,22,33,44].includes(fe)?setTimeout(()=>{j(fe,He)},500):Q(fe,He);return}setTimeout(Je,300)};setTimeout(Je,200)},j=(Y,fe)=>{let He,We;switch(Y){case 11:He=1,We=21;break;case 22:He=12,We=32;break;case 33:He=23,We=43;break;case 44:He=34,We=49;break;default:return Y}let Je;do Je=Math.floor(Math.random()*(We-He+1))+He;while(Je===Y);Jt.playTeleport();const aa=Y;setTimeout(()=>{B(aa,Je,fe)},500)},Q=(Y,fe)=>{fe?(a(Y),Y===bt&&oe("player")):(u(Y),Y===bt&&oe("ignorance")),Be(!1)},oe=Y=>{W(!0),se(Y),Z(),Y==="player"?Jt.playGameWin():Jt.playGameOver()},F=()=>{a(0),u(0),h(null),g(null),y(!1),C(20),I(!1),W(!1),se(null),re(null),ie(null)};pe.useEffect(()=>{let Y;return O&&b>0?Y=setInterval(()=>{C(fe=>fe-1)},1e3):b===0&&O&&S(),O&&b<=10&&b>0?Jt.playCriticalTime():Jt.stopCriticalTime(),()=>{Y&&clearInterval(Y)}},[O,b]);const Ke={playerPosition:n,ignorancePosition:r,currentDice:f,currentQuestion:p,loading:m,timer:b,timerActive:O,gameOver:G,winner:le,selectedAnswer:te,answerStatus:K,BOARD_SIZE:bt,CATEGORIES:nn,rollDice:Ze,selectAnswer:ce,resetGame:F,animatingPlayer:P,animationPosition:ft,isPlayerTurn:Ot};return N.jsx(By.Provider,{value:Ke,children:i})};var Nt=function(){return Nt=Object.assign||function(n){for(var a,r=1,u=arguments.length;r<u;r++){a=arguments[r];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(n[f]=a[f])}return n},Nt.apply(this,arguments)};function Ns(i,n,a){if(a||arguments.length===2)for(var r=0,u=n.length,f;r<u;r++)(f||!(r in n))&&(f||(f=Array.prototype.slice.call(n,0,r)),f[r]=n[r]);return i.concat(f||Array.prototype.slice.call(n))}var Ue="-ms-",_s="-moz-",xe="-webkit-",Hy="comm",Go="rule",Ih="decl",iT="@import",jy="@keyframes",lT="@layer",qy=Math.abs,kh=String.fromCharCode,Pf=Object.assign;function aT(i,n){return ct(i,0)^45?(((n<<2^ct(i,0))<<2^ct(i,1))<<2^ct(i,2))<<2^ct(i,3):0}function Gy(i){return i.trim()}function Un(i,n){return(i=n.exec(i))?i[0]:i}function ue(i,n,a){return i.replace(n,a)}function oo(i,n,a){return i.indexOf(n,a)}function ct(i,n){return i.charCodeAt(n)|0}function Fl(i,n,a){return i.slice(n,a)}function yn(i){return i.length}function Yy(i){return i.length}function fs(i,n){return n.push(i),i}function sT(i,n){return i.map(n).join("")}function q_(i,n){return i.filter(function(a){return!Un(a,n)})}var Yo=1,$l=1,Vy=0,en=0,$e=0,la="";function Vo(i,n,a,r,u,f,h,p){return{value:i,root:n,parent:a,type:r,props:u,children:f,line:Yo,column:$l,length:h,return:"",siblings:p}}function hi(i,n){return Pf(Vo("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},n)}function Il(i){for(;i.root;)i=hi(i.root,{children:[i]});fs(i,i.siblings)}function rT(){return $e}function oT(){return $e=en>0?ct(la,--en):0,$l--,$e===10&&($l=1,Yo--),$e}function fn(){return $e=en<Vy?ct(la,en++):0,$l++,$e===10&&($l=1,Yo++),$e}function Vi(){return ct(la,en)}function uo(){return en}function Qo(i,n){return Fl(la,i,n)}function Ff(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uT(i){return Yo=$l=1,Vy=yn(la=i),en=0,[]}function cT(i){return la="",i}function wf(i){return Gy(Qo(en-1,$f(i===91?i+2:i===40?i+1:i)))}function fT(i){for(;($e=Vi())&&$e<33;)fn();return Ff(i)>2||Ff($e)>3?"":" "}function hT(i,n){for(;--n&&fn()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Qo(i,uo()+(n<6&&Vi()==32&&fn()==32))}function $f(i){for(;fn();)switch($e){case i:return en;case 34:case 39:i!==34&&i!==39&&$f($e);break;case 40:i===41&&$f(i);break;case 92:fn();break}return en}function dT(i,n){for(;fn()&&i+$e!==57;)if(i+$e===84&&Vi()===47)break;return"/*"+Qo(n,en-1)+"*"+kh(i===47?i:fn())}function pT(i){for(;!Ff(Vi());)fn();return Qo(i,en)}function mT(i){return cT(co("",null,null,null,[""],i=uT(i),0,[0],i))}function co(i,n,a,r,u,f,h,p,g){for(var m=0,y=0,b=h,C=0,O=0,I=0,G=1,W=1,le=1,se=0,te="",re=u,K=f,ie=r,P=te;W;)switch(I=se,se=fn()){case 40:if(I!=108&&ct(P,b-1)==58){oo(P+=ue(wf(se),"&","&\f"),"&\f",qy(m?p[m-1]:0))!=-1&&(le=-1);break}case 34:case 39:case 91:P+=wf(se);break;case 9:case 10:case 13:case 32:P+=fT(I);break;case 92:P+=hT(uo()-1,7);continue;case 47:switch(Vi()){case 42:case 47:fs(gT(dT(fn(),uo()),n,a,g),g);break;default:P+="/"}break;case 123*G:p[m++]=yn(P)*le;case 125*G:case 59:case 0:switch(se){case 0:case 125:W=0;case 59+y:le==-1&&(P=ue(P,/\f/g,"")),O>0&&yn(P)-b&&fs(O>32?Y_(P+";",r,a,b-1,g):Y_(ue(P," ","")+";",r,a,b-2,g),g);break;case 59:P+=";";default:if(fs(ie=G_(P,n,a,m,y,u,p,te,re=[],K=[],b,f),f),se===123)if(y===0)co(P,n,ie,ie,re,f,b,p,K);else switch(C===99&&ct(P,3)===110?100:C){case 100:case 108:case 109:case 115:co(i,ie,ie,r&&fs(G_(i,ie,ie,0,0,u,p,te,u,re=[],b,K),K),u,K,b,p,r?re:K);break;default:co(P,ie,ie,ie,[""],K,0,p,K)}}m=y=O=0,G=le=1,te=P="",b=h;break;case 58:b=1+yn(P),O=I;default:if(G<1){if(se==123)--G;else if(se==125&&G++==0&&oT()==125)continue}switch(P+=kh(se),se*G){case 38:le=y>0?1:(P+="\f",-1);break;case 44:p[m++]=(yn(P)-1)*le,le=1;break;case 64:Vi()===45&&(P+=wf(fn())),C=Vi(),y=b=yn(te=P+=pT(uo())),se++;break;case 45:I===45&&yn(P)==2&&(G=0)}}return f}function G_(i,n,a,r,u,f,h,p,g,m,y,b){for(var C=u-1,O=u===0?f:[""],I=Yy(O),G=0,W=0,le=0;G<r;++G)for(var se=0,te=Fl(i,C+1,C=qy(W=h[G])),re=i;se<I;++se)(re=Gy(W>0?O[se]+" "+te:ue(te,/&\f/g,O[se])))&&(g[le++]=re);return Vo(i,n,a,u===0?Go:p,g,m,y,b)}function gT(i,n,a,r){return Vo(i,n,a,Hy,kh(rT()),Fl(i,2,-2),0,r)}function Y_(i,n,a,r,u){return Vo(i,n,a,Ih,Fl(i,0,r),Fl(i,r+1,-1),r,u)}function Qy(i,n,a){switch(aT(i,n)){case 5103:return xe+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+i+i;case 4789:return _s+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+i+_s+i+Ue+i+i;case 5936:switch(ct(i,n+11)){case 114:return xe+i+Ue+ue(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return xe+i+Ue+ue(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return xe+i+Ue+ue(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return xe+i+Ue+i+i;case 6165:return xe+i+Ue+"flex-"+i+i;case 5187:return xe+i+ue(i,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Ue+"flex-$1$2")+i;case 5443:return xe+i+Ue+"flex-item-"+ue(i,/flex-|-self/g,"")+(Un(i,/flex-|baseline/)?"":Ue+"grid-row-"+ue(i,/flex-|-self/g,""))+i;case 4675:return xe+i+Ue+"flex-line-pack"+ue(i,/align-content|flex-|-self/g,"")+i;case 5548:return xe+i+Ue+ue(i,"shrink","negative")+i;case 5292:return xe+i+Ue+ue(i,"basis","preferred-size")+i;case 6060:return xe+"box-"+ue(i,"-grow","")+xe+i+Ue+ue(i,"grow","positive")+i;case 4554:return xe+ue(i,/([^-])(transform)/g,"$1"+xe+"$2")+i;case 6187:return ue(ue(ue(i,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),i,"")+i;case 5495:case 3959:return ue(i,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return ue(ue(i,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+i+i;case 4200:if(!Un(i,/flex-|baseline/))return Ue+"grid-column-align"+Fl(i,n)+i;break;case 2592:case 3360:return Ue+ue(i,"template-","")+i;case 4384:case 3616:return a&&a.some(function(r,u){return n=u,Un(r.props,/grid-\w+-end/)})?~oo(i+(a=a[n].value),"span",0)?i:Ue+ue(i,"-start","")+i+Ue+"grid-row-span:"+(~oo(a,"span",0)?Un(a,/\d+/):+Un(a,/\d+/)-+Un(i,/\d+/))+";":Ue+ue(i,"-start","")+i;case 4896:case 4128:return a&&a.some(function(r){return Un(r.props,/grid-\w+-start/)})?i:Ue+ue(ue(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return ue(i,/(.+)-inline(.+)/,xe+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(i)-1-n>6)switch(ct(i,n+1)){case 109:if(ct(i,n+4)!==45)break;case 102:return ue(i,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+_s+(ct(i,n+3)==108?"$3":"$2-$3"))+i;case 115:return~oo(i,"stretch",0)?Qy(ue(i,"stretch","fill-available"),n,a)+i:i}break;case 5152:case 5920:return ue(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,u,f,h,p,g,m){return Ue+u+":"+f+m+(h?Ue+u+"-span:"+(p?g:+g-+f)+m:"")+i});case 4949:if(ct(i,n+6)===121)return ue(i,":",":"+xe)+i;break;case 6444:switch(ct(i,ct(i,14)===45?18:11)){case 120:return ue(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(ct(i,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Ue+"$2box$3")+i;case 100:return ue(i,":",":"+Ue)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(i,"scroll-","scroll-snap-")+i}return i}function Oo(i,n){for(var a="",r=0;r<i.length;r++)a+=n(i[r],r,i,n)||"";return a}function _T(i,n,a,r){switch(i.type){case lT:if(i.children.length)break;case iT:case Ih:return i.return=i.return||i.value;case Hy:return"";case jy:return i.return=i.value+"{"+Oo(i.children,r)+"}";case Go:if(!yn(i.value=i.props.join(",")))return""}return yn(a=Oo(i.children,r))?i.return=i.value+"{"+a+"}":""}function yT(i){var n=Yy(i);return function(a,r,u,f){for(var h="",p=0;p<n;p++)h+=i[p](a,r,u,f)||"";return h}}function vT(i){return function(n){n.root||(n=n.return)&&i(n)}}function bT(i,n,a,r){if(i.length>-1&&!i.return)switch(i.type){case Ih:i.return=Qy(i.value,i.length,a);return;case jy:return Oo([hi(i,{value:ue(i.value,"@","@"+xe)})],r);case Go:if(i.length)return sT(a=i.props,function(u){switch(Un(u,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Il(hi(i,{props:[ue(u,/:(read-\w+)/,":"+_s+"$1")]})),Il(hi(i,{props:[u]})),Pf(i,{props:q_(a,r)});break;case"::placeholder":Il(hi(i,{props:[ue(u,/:(plac\w+)/,":"+xe+"input-$1")]})),Il(hi(i,{props:[ue(u,/:(plac\w+)/,":"+_s+"$1")]})),Il(hi(i,{props:[ue(u,/:(plac\w+)/,Ue+"input-$1")]})),Il(hi(i,{props:[u]})),Pf(i,{props:q_(a,r)});break}return""})}}var ST={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Wl=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",Xy="active",Zy="data-styled-version",Xo="6.1.17",Bh=`/*!sc*/
`,Mo=typeof window<"u"&&"HTMLElement"in window,ET=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),Zo=Object.freeze([]),Jl=Object.freeze({});function CT(i,n,a){return a===void 0&&(a=Jl),i.theme!==a.theme&&i.theme||n||a.theme}var Ky=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TT=/(^-|-$)/g;function V_(i){return i.replace(xT,"-").replace(TT,"")}var wT=/(a)(d)/gi,lo=52,Q_=function(i){return String.fromCharCode(i+(i>25?39:97))};function Wf(i){var n,a="";for(n=Math.abs(i);n>lo;n=n/lo|0)a=Q_(n%lo)+a;return(Q_(n%lo)+a).replace(wT,"$1-$2")}var Af,Py=5381,ql=function(i,n){for(var a=n.length;a;)i=33*i^n.charCodeAt(--a);return i},Fy=function(i){return ql(Py,i)};function $y(i){return Wf(Fy(i)>>>0)}function AT(i){return i.displayName||i.name||"Component"}function Rf(i){return typeof i=="string"&&!0}var Wy=typeof Symbol=="function"&&Symbol.for,Jy=Wy?Symbol.for("react.memo"):60115,RT=Wy?Symbol.for("react.forward_ref"):60112,NT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},DT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ev={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},OT=((Af={})[RT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Af[Jy]=ev,Af);function X_(i){return("type"in(n=i)&&n.type.$$typeof)===Jy?ev:"$$typeof"in i?OT[i.$$typeof]:NT;var n}var MT=Object.defineProperty,zT=Object.getOwnPropertyNames,Z_=Object.getOwnPropertySymbols,LT=Object.getOwnPropertyDescriptor,UT=Object.getPrototypeOf,K_=Object.prototype;function tv(i,n,a){if(typeof n!="string"){if(K_){var r=UT(n);r&&r!==K_&&tv(i,r,a)}var u=zT(n);Z_&&(u=u.concat(Z_(n)));for(var f=X_(i),h=X_(n),p=0;p<u.length;++p){var g=u[p];if(!(g in DT||a&&a[g]||h&&g in h||f&&g in f)){var m=LT(n,g);try{MT(i,g,m)}catch{}}}}return i}function ea(i){return typeof i=="function"}function Hh(i){return typeof i=="object"&&"styledComponentId"in i}function Yi(i,n){return i&&n?"".concat(i," ").concat(n):i||n||""}function Jf(i,n){if(i.length===0)return"";for(var a=i[0],r=1;r<i.length;r++)a+=i[r];return a}function Ds(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function eh(i,n,a){if(a===void 0&&(a=!1),!a&&!Ds(i)&&!Array.isArray(i))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)i[r]=eh(i[r],n[r]);else if(Ds(n))for(var r in n)i[r]=eh(i[r],n[r]);return i}function jh(i,n){Object.defineProperty(i,"toString",{value:n})}function qs(i){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var IT=function(){function i(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return i.prototype.indexOfGroup=function(n){for(var a=0,r=0;r<n;r++)a+=this.groupSizes[r];return a},i.prototype.insertRules=function(n,a){if(n>=this.groupSizes.length){for(var r=this.groupSizes,u=r.length,f=u;n>=f;)if((f<<=1)<0)throw qs(16,"".concat(n));this.groupSizes=new Uint32Array(f),this.groupSizes.set(r),this.length=f;for(var h=u;h<f;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(n+1),g=(h=0,a.length);h<g;h++)this.tag.insertRule(p,a[h])&&(this.groupSizes[n]++,p++)},i.prototype.clearGroup=function(n){if(n<this.length){var a=this.groupSizes[n],r=this.indexOfGroup(n),u=r+a;this.groupSizes[n]=0;for(var f=r;f<u;f++)this.tag.deleteRule(r)}},i.prototype.getGroup=function(n){var a="";if(n>=this.length||this.groupSizes[n]===0)return a;for(var r=this.groupSizes[n],u=this.indexOfGroup(n),f=u+r,h=u;h<f;h++)a+="".concat(this.tag.getRule(h)).concat(Bh);return a},i}(),fo=new Map,zo=new Map,ho=1,ao=function(i){if(fo.has(i))return fo.get(i);for(;zo.has(ho);)ho++;var n=ho++;return fo.set(i,n),zo.set(n,i),n},kT=function(i,n){ho=n+1,fo.set(i,n),zo.set(n,i)},BT="style[".concat(Wl,"][").concat(Zy,'="').concat(Xo,'"]'),HT=new RegExp("^".concat(Wl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jT=function(i,n,a){for(var r,u=a.split(","),f=0,h=u.length;f<h;f++)(r=u[f])&&i.registerName(n,r)},qT=function(i,n){for(var a,r=((a=n.textContent)!==null&&a!==void 0?a:"").split(Bh),u=[],f=0,h=r.length;f<h;f++){var p=r[f].trim();if(p){var g=p.match(HT);if(g){var m=0|parseInt(g[1],10),y=g[2];m!==0&&(kT(y,m),jT(i,y,g[3]),i.getTag().insertRules(m,u)),u.length=0}else u.push(p)}}},P_=function(i){for(var n=document.querySelectorAll(BT),a=0,r=n.length;a<r;a++){var u=n[a];u&&u.getAttribute(Wl)!==Xy&&(qT(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function GT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nv=function(i){var n=document.head,a=i||n,r=document.createElement("style"),u=function(p){var g=Array.from(p.querySelectorAll("style[".concat(Wl,"]")));return g[g.length-1]}(a),f=u!==void 0?u.nextSibling:null;r.setAttribute(Wl,Xy),r.setAttribute(Zy,Xo);var h=GT();return h&&r.setAttribute("nonce",h),a.insertBefore(r,f),r},YT=function(){function i(n){this.element=nv(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var r=document.styleSheets,u=0,f=r.length;u<f;u++){var h=r[u];if(h.ownerNode===a)return h}throw qs(17)}(this.element),this.length=0}return i.prototype.insertRule=function(n,a){try{return this.sheet.insertRule(a,n),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},i.prototype.getRule=function(n){var a=this.sheet.cssRules[n];return a&&a.cssText?a.cssText:""},i}(),VT=function(){function i(n){this.element=nv(n),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(n,a){if(n<=this.length&&n>=0){var r=document.createTextNode(a);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},i.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},i}(),QT=function(){function i(n){this.rules=[],this.length=0}return i.prototype.insertRule=function(n,a){return n<=this.length&&(this.rules.splice(n,0,a),this.length++,!0)},i.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},i.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},i}(),F_=Mo,XT={isServer:!Mo,useCSSOMInjection:!ET},iv=function(){function i(n,a,r){n===void 0&&(n=Jl),a===void 0&&(a={});var u=this;this.options=Nt(Nt({},XT),n),this.gs=a,this.names=new Map(r),this.server=!!n.isServer,!this.server&&Mo&&F_&&(F_=!1,P_(this)),jh(this,function(){return function(f){for(var h=f.getTag(),p=h.length,g="",m=function(b){var C=function(le){return zo.get(le)}(b);if(C===void 0)return"continue";var O=f.names.get(C),I=h.getGroup(b);if(O===void 0||!O.size||I.length===0)return"continue";var G="".concat(Wl,".g").concat(b,'[id="').concat(C,'"]'),W="";O!==void 0&&O.forEach(function(le){le.length>0&&(W+="".concat(le,","))}),g+="".concat(I).concat(G,'{content:"').concat(W,'"}').concat(Bh)},y=0;y<p;y++)m(y);return g}(u)})}return i.registerId=function(n){return ao(n)},i.prototype.rehydrate=function(){!this.server&&Mo&&P_(this)},i.prototype.reconstructWithOptions=function(n,a){return a===void 0&&(a=!0),new i(Nt(Nt({},this.options),n),this.gs,a&&this.names||void 0)},i.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(n=function(a){var r=a.useCSSOMInjection,u=a.target;return a.isServer?new QT(u):r?new YT(u):new VT(u)}(this.options),new IT(n)));var n},i.prototype.hasNameForId=function(n,a){return this.names.has(n)&&this.names.get(n).has(a)},i.prototype.registerName=function(n,a){if(ao(n),this.names.has(n))this.names.get(n).add(a);else{var r=new Set;r.add(a),this.names.set(n,r)}},i.prototype.insertRules=function(n,a,r){this.registerName(n,a),this.getTag().insertRules(ao(n),r)},i.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},i.prototype.clearRules=function(n){this.getTag().clearGroup(ao(n)),this.clearNames(n)},i.prototype.clearTag=function(){this.tag=void 0},i}(),ZT=/&/g,KT=/^\s*\/\/.*$/gm;function lv(i,n){return i.map(function(a){return a.type==="rule"&&(a.value="".concat(n," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(n," ")),a.props=a.props.map(function(r){return"".concat(n," ").concat(r)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=lv(a.children,n)),a})}function PT(i){var n,a,r,u=Jl,f=u.options,h=f===void 0?Jl:f,p=u.plugins,g=p===void 0?Zo:p,m=function(C,O,I){return I.startsWith(a)&&I.endsWith(a)&&I.replaceAll(a,"").length>0?".".concat(n):C},y=g.slice();y.push(function(C){C.type===Go&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(ZT,a).replace(r,m))}),h.prefix&&y.push(bT),y.push(_T);var b=function(C,O,I,G){O===void 0&&(O=""),I===void 0&&(I=""),G===void 0&&(G="&"),n=G,a=O,r=new RegExp("\\".concat(a,"\\b"),"g");var W=C.replace(KT,""),le=mT(I||O?"".concat(I," ").concat(O," { ").concat(W," }"):W);h.namespace&&(le=lv(le,h.namespace));var se=[];return Oo(le,yT(y.concat(vT(function(te){return se.push(te)})))),se};return b.hash=g.length?g.reduce(function(C,O){return O.name||qs(15),ql(C,O.name)},Py).toString():"",b}var FT=new iv,th=PT(),av=Ql.createContext({shouldForwardProp:void 0,styleSheet:FT,stylis:th});av.Consumer;Ql.createContext(void 0);function $_(){return pe.useContext(av)}var sv=function(){function i(n,a){var r=this;this.inject=function(u,f){f===void 0&&(f=th);var h=r.name+f.hash;u.hasNameForId(r.id,h)||u.insertRules(r.id,h,f(r.rules,h,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=a,jh(this,function(){throw qs(12,String(r.name))})}return i.prototype.getName=function(n){return n===void 0&&(n=th),this.name+n.hash},i}(),$T=function(i){return i>="A"&&i<="Z"};function W_(i){for(var n="",a=0;a<i.length;a++){var r=i[a];if(a===1&&r==="-"&&i[0]==="-")return i;$T(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var rv=function(i){return i==null||i===!1||i===""},ov=function(i){var n,a,r=[];for(var u in i){var f=i[u];i.hasOwnProperty(u)&&!rv(f)&&(Array.isArray(f)&&f.isCss||ea(f)?r.push("".concat(W_(u),":"),f,";"):Ds(f)?r.push.apply(r,Ns(Ns(["".concat(u," {")],ov(f),!1),["}"],!1)):r.push("".concat(W_(u),": ").concat((n=u,(a=f)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||n in ST||n.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return r};function Qi(i,n,a,r){if(rv(i))return[];if(Hh(i))return[".".concat(i.styledComponentId)];if(ea(i)){if(!ea(f=i)||f.prototype&&f.prototype.isReactComponent||!n)return[i];var u=i(n);return Qi(u,n,a,r)}var f;return i instanceof sv?a?(i.inject(a,r),[i.getName(r)]):[i]:Ds(i)?ov(i):Array.isArray(i)?Array.prototype.concat.apply(Zo,i.map(function(h){return Qi(h,n,a,r)})):[i.toString()]}function WT(i){for(var n=0;n<i.length;n+=1){var a=i[n];if(ea(a)&&!Hh(a))return!1}return!0}var JT=Fy(Xo),e2=function(){function i(n,a,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&WT(n),this.componentId=a,this.baseHash=ql(JT,a),this.baseStyle=r,iv.registerId(a)}return i.prototype.generateAndInjectStyles=function(n,a,r){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,a,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))u=Yi(u,this.staticRulesId);else{var f=Jf(Qi(this.rules,n,a,r)),h=Wf(ql(this.baseHash,f)>>>0);if(!a.hasNameForId(this.componentId,h)){var p=r(f,".".concat(h),void 0,this.componentId);a.insertRules(this.componentId,h,p)}u=Yi(u,h),this.staticRulesId=h}else{for(var g=ql(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")m+=b;else if(b){var C=Jf(Qi(b,n,a,r));g=ql(g,C+y),m+=C}}if(m){var O=Wf(g>>>0);a.hasNameForId(this.componentId,O)||a.insertRules(this.componentId,O,r(m,".".concat(O),void 0,this.componentId)),u=Yi(u,O)}}return u},i}(),uv=Ql.createContext(void 0);uv.Consumer;var Nf={};function t2(i,n,a){var r=Hh(i),u=i,f=!Rf(i),h=n.attrs,p=h===void 0?Zo:h,g=n.componentId,m=g===void 0?function(re,K){var ie=typeof re!="string"?"sc":V_(re);Nf[ie]=(Nf[ie]||0)+1;var P="".concat(ie,"-").concat($y(Xo+ie+Nf[ie]));return K?"".concat(K,"-").concat(P):P}(n.displayName,n.parentComponentId):g,y=n.displayName,b=y===void 0?function(re){return Rf(re)?"styled.".concat(re):"Styled(".concat(AT(re),")")}(i):y,C=n.displayName&&n.componentId?"".concat(V_(n.displayName),"-").concat(n.componentId):n.componentId||m,O=r&&u.attrs?u.attrs.concat(p).filter(Boolean):p,I=n.shouldForwardProp;if(r&&u.shouldForwardProp){var G=u.shouldForwardProp;if(n.shouldForwardProp){var W=n.shouldForwardProp;I=function(re,K){return G(re,K)&&W(re,K)}}else I=G}var le=new e2(a,C,r?u.componentStyle:void 0);function se(re,K){return function(ie,P,Be){var ft=ie.attrs,tn=ie.componentStyle,Ot=ie.defaultProps,Xe=ie.foldedComponentIds,bt=ie.styledComponentId,nn=ie.target,Ze=Ql.useContext(uv),D=$_(),H=ie.shouldForwardProp||D.shouldForwardProp,Z=CT(P,Ze,Ot)||Jl,ce=function(oe,F,Ke){for(var Y,fe=Nt(Nt({},F),{className:void 0,theme:Ke}),He=0;He<oe.length;He+=1){var We=ea(Y=oe[He])?Y(fe):Y;for(var Je in We)fe[Je]=Je==="className"?Yi(fe[Je],We[Je]):Je==="style"?Nt(Nt({},fe[Je]),We[Je]):We[Je]}return F.className&&(fe.className=Yi(fe.className,F.className)),fe}(ft,P,Z),S=ce.as||nn,U={};for(var B in ce)ce[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&ce.theme===Z||(B==="forwardedAs"?U.as=ce.forwardedAs:H&&!H(B,S)||(U[B]=ce[B]));var j=function(oe,F){var Ke=$_(),Y=oe.generateAndInjectStyles(F,Ke.styleSheet,Ke.stylis);return Y}(tn,ce),Q=Yi(Xe,bt);return j&&(Q+=" "+j),ce.className&&(Q+=" "+ce.className),U[Rf(S)&&!Ky.has(S)?"class":"className"]=Q,Be&&(U.ref=Be),pe.createElement(S,U)}(te,re,K)}se.displayName=b;var te=Ql.forwardRef(se);return te.attrs=O,te.componentStyle=le,te.displayName=b,te.shouldForwardProp=I,te.foldedComponentIds=r?Yi(u.foldedComponentIds,u.styledComponentId):"",te.styledComponentId=C,te.target=r?u.target:i,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=r?function(K){for(var ie=[],P=1;P<arguments.length;P++)ie[P-1]=arguments[P];for(var Be=0,ft=ie;Be<ft.length;Be++)eh(K,ft[Be],!0);return K}({},u.defaultProps,re):re}}),jh(te,function(){return".".concat(te.styledComponentId)}),f&&tv(te,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function J_(i,n){for(var a=[i[0]],r=0,u=n.length;r<u;r+=1)a.push(n[r],i[r+1]);return a}var e0=function(i){return Object.assign(i,{isCss:!0})};function cv(i){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];if(ea(i)||Ds(i))return e0(Qi(J_(Zo,Ns([i],n,!0))));var r=i;return n.length===0&&r.length===1&&typeof r[0]=="string"?Qi(r):e0(Qi(J_(r,n)))}function nh(i,n,a){if(a===void 0&&(a=Jl),!n)throw qs(1,n);var r=function(u){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return i(n,a,cv.apply(void 0,Ns([u],f,!1)))};return r.attrs=function(u){return nh(i,n,Nt(Nt({},a),{attrs:Array.prototype.concat(a.attrs,u).filter(Boolean)}))},r.withConfig=function(u){return nh(i,n,Nt(Nt({},a),u))},r}var fv=function(i){return nh(t2,i)},V=fv;Ky.forEach(function(i){V[i]=fv(i)});function n2(i){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];var r=Jf(cv.apply(void 0,Ns([i],n,!1))),u=$y(r);return new sv(u,r)}const i2=""+new URL("black-hole-B6tSg9eR.svg",import.meta.url).href,hv=""+new URL("alien-3-D7v3E2hM.svg",import.meta.url).href,dv=""+new URL("ufo-YtXNBIFE.png",import.meta.url).href,Ln=({number:i,...n})=>{const{playerPosition:a,ignorancePosition:r,animatingPlayer:u,animationPosition:f,isPlayerTurn:h}=js(),p=!u&&i===a,g=!u&&i===r,m=u&&i===f,y=u&&h,b=u&&!h,C=p||g||m,O=[11,22,33,44].includes(i);return N.jsxs(l2,{isactive:C,isVerticalColumn:O,...n,children:[N.jsx(a2,{children:i}),N.jsxs(s2,{children:[(p||m&&y)&&N.jsx(t0,{player:"player",isAnimating:m&&y}),(g||m&&b)&&N.jsx(t0,{player:"ignorance",isAnimating:m&&b})]})]})},l2=V.div`
  position: relative;
  width: ${i=>(i.isVerticalColumn,"28px")};
  height: ${i=>i.isVerticalColumn?"40px":"28px"};
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${i=>i.isVerticalColumn?`url(${i2})`:"none"};
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${i=>i.isVerticalColumn?"rgba(255, 243, 224, 0.3)":"rgba(255, 255, 255, 0.7)"};
  transition: all 0.2s ease;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  // Destacar casillas con jugadores
  ${i=>i.isactive&&`
    border: 2px solid #f39c12;
    box-shadow: 0 0 5px rgba(243, 156, 18, 0.5);
    z-index: 2;
  `}
  
  // Efecto pulsante para casillas especiales
  ${i=>i.isVerticalColumn&&`
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% { background-color: rgba(255, 243, 224, 0.3); }
      50% { background-color: rgba(255, 200, 100, 0.5); }
      100% { background-color: rgba(255, 243, 224, 0.3); }
    }
  `}
  
  /* Responsive design - sizes */
  @media (min-width: 375px) {
    width: ${i=>(i.isVerticalColumn,"32px")};
    height: ${i=>i.isVerticalColumn?"50px":"32px"};
  }
  
  @media (min-width: 480px) {
    width: ${i=>(i.isVerticalColumn,"36px")};
    height: ${i=>i.isVerticalColumn?"60px":"36px"};
  }
  
  @media (min-width: 768px) {
    width: ${i=>(i.isVerticalColumn,"50px")};
    height: ${i=>i.isVerticalColumn?"80px":"50px"};
  }
  
  @media (min-width: 1024px) {
    width: ${i=>(i.isVerticalColumn,"60px")};
    height: ${i=>i.isVerticalColumn?"100px":"60px"};
  }
`,a2=V.span`
  font-size: 10px;
  position: absolute;
  top: 1px;
  left: 1px;
  color: #333;
  
  @media (min-width: 480px) {
    font-size: 11px;
  }
  
  @media (min-width: 768px) {
    font-size: 14px;
    top: 2px;
    left: 2px;
  }
`,s2=V.div`
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  
  @media (min-width: 480px) {
    gap: 2px;
  }
`,t0=V.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-image: ${i=>i.player==="ignorance"?`url(${hv})`:`url(${dv})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  /* Only animate if this piece is currently moving */
  animation: ${i=>i.isAnimating?"bounce 0.3s ease infinite alternate":"none"};
  
  @keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-4px); }
  }
`,r2=""+new URL("hubble-space-jiCg6EjB.png",import.meta.url).href,o2=()=>{const{playerPosition:i,ignorancePosition:n,BOARD_SIZE:a}=js(),r=pe.useRef(null),[u,f]=pe.useState("landscape");pe.useEffect(()=>{const p=()=>{const g=window.innerWidth,m=window.innerHeight;f(g<m?"portrait":"landscape")};return p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]);const h=()=>N.jsxs(N.Fragment,{children:[N.jsx(us,{children:[1,2,3,4,5,6,7,8,9,10].map(p=>N.jsx(Ln,{number:p,playerPosition:i,ignorancePosition:n,"data-square":p},p))},"row-1"),N.jsx(so,{alignRight:!0,children:N.jsx(Ln,{number:11,playerPosition:i,ignorancePosition:n,"data-square":11,isVerticalColumn:!0},11)}),N.jsx(us,{children:[21,20,19,18,17,16,15,14,13,12].map(p=>N.jsx(Ln,{number:p,playerPosition:i,ignorancePosition:n,"data-square":p},p))},"row-3"),N.jsx(so,{alignLeft:!0,children:N.jsx(Ln,{number:22,playerPosition:i,ignorancePosition:n,"data-square":22,isVerticalColumn:!0},22)}),N.jsx(us,{children:[23,24,25,26,27,28,29,30,31,32].map(p=>N.jsx(Ln,{number:p,playerPosition:i,ignorancePosition:n,"data-square":p},p))},"row-5"),N.jsx(so,{alignRight:!0,children:N.jsx(Ln,{number:33,playerPosition:i,ignorancePosition:n,"data-square":33,isVerticalColumn:!0},33)}),N.jsx(us,{children:[43,42,41,40,39,38,37,36,35,34].map(p=>N.jsx(Ln,{number:p,playerPosition:i,ignorancePosition:n,"data-square":p},p))},"row-7"),N.jsx(so,{alignLeft:!0,children:N.jsx(Ln,{number:44,playerPosition:i,ignorancePosition:n,"data-square":44,isVerticalColumn:!0},44)}),N.jsx(us,{children:[45,46,47,48,49,50].map(p=>N.jsx(Ln,{number:p,playerPosition:i,ignorancePosition:n,"data-square":p},p))},"row-9")]});return pe.useEffect(()=>{if(r.current&&i>0){const p=r.current.querySelector(`[data-square="${i}"]`);p&&p.scrollIntoView({behavior:"smooth",block:"center"})}},[i]),N.jsxs(u2,{children:[N.jsx(f2,{children:N.jsxs(h2,{children:[N.jsxs(n0,{player:"player",children:[N.jsx(l0,{player:"player"}),N.jsx(i0,{children:N.jsxs(a0,{children:["Casilla ",i]})})]}),N.jsxs(n0,{player:"ignorance",children:[N.jsx(l0,{player:"ignorance"}),N.jsx(i0,{children:N.jsxs(a0,{children:["Casilla ",n]})})]})]})}),N.jsx(c2,{ref:r,orientation:u,children:h()})]})},u2=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`,c2=V.div`
  /* Estructura de filas para el patrón serpiente */
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0; /* Eliminar espacio vertical entre filas */
  padding: ${i=>i.orientation==="portrait"?"5px":"10px"};
  background-image: url(${r2});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  max-width: 100%;
  position: relative; /* Para permitir posicionamiento absoluto dentro */
  
  /* Scrollbar para móviles pequeños */
  @media (max-width: 480px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  }
`,f2=V.div`

  width: 100%;
  margin-top: 0;
  overflow-x: hidden;
  margin-bottom: 5px;
  
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`,h2=V.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  
  @media (max-width: 380px) {
    flex-direction: row;
    align-items: center;
  }
  
  @media (min-width: 768px) {
    justify-content: space-evenly;
    gap: 0;
  }
`,n0=V.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background-color: ${i=>i.player==="player"?"#eaf2ff":"#ffebee"};
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  
  @media (min-width: 480px) {
    padding: 8px 12px;
    min-width: 150px;
  }
`,i0=V.div`
  display: flex;
  flex-direction: column;
`;V.span`
  font-weight: 500;
  font-size: 14px;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;const l0=V.div`
  width: 15px;
  height: 15px;
  background-image: ${i=>i.player==="ignorance"?`url(${hv})`:`url(${dv})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  flex-shrink: 0;
`,a0=V.span`
  font-size: 12px;
  color: #666;
  
  @media (min-width: 768px) {
    font-size: 14px;
  }
`,us=V.div`
  display: flex;
  flex-direction: ${i=>i.isVertical?"column":"row"};
  width: 100%;
  height: auto;
  justify-content: ${i=>i.isVertical?"center":"flex-start"};
  align-items: center;
  margin: 0;
  padding: 0;
`,so=V.div`
  display: flex;
  justify-content: ${i=>i.alignRight?"flex-end":"flex-start"};
  width: 100%;
`,d2=()=>{const{currentQuestion:i,timer:n,CATEGORIES:a,currentDice:r}=js();if(!i)return null;const u=a[r],f=n<=10;return N.jsxs(p2,{children:[N.jsxs(m2,{children:[N.jsx(g2,{children:u}),N.jsxs(_2,{critical:f,children:[n," ",n===1?"segundo":"segundos"]})]}),N.jsx(y2,{children:i.question})]})},p2=V.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  
  @media (min-width: 480px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`,m2=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 5px;
  
  @media (min-width: 480px) {
    flex-wrap: nowrap;
  }
`,g2=V.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 14px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`,_2=V.div`
  background-color: ${i=>i.critical?"#e74c3c":"#3498db"};
  color: white;
  padding: 3px 8px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;
  transition: background-color 0.3s ease;
  ${i=>i.critical&&"animation: pulse 1s infinite;"}
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  
  @media (min-width: 480px) {
    font-size: 14px;
    padding: 4px 10px;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 5px 12px;
  }
`,y2=V.p`
  font-size: 16px;
  color: #34495e;
  line-height: 1.4;
  margin: 0;
  
  @media (min-width: 480px) {
    font-size: 17px;
    line-height: 1.5;
  }
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`,v2=()=>{const{currentQuestion:i,selectAnswer:n,selectedAnswer:a,answerStatus:r}=js();return i?N.jsx(b2,{children:i.options.map((u,f)=>{const h=a===f,p=i.correctAnswerIndex===f;let g="";return r?p?g="correct":h&&(g="incorrect"):h&&(g="selected"),N.jsxs(S2,{onClick:()=>n(f),status:g,disabled:a!==null,children:[N.jsx(E2,{children:String.fromCharCode(65+f)}),N.jsx(C2,{children:u})]},f)})}):null},b2=V.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 800px;
  
  @media (min-width: 480px) {
    gap: 10px;
  }
`,S2=V.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background-color: ${i=>i.status==="correct"?"#2ecc71":i.status==="incorrect"?"#e74c3c":i.status==="selected"?"#3498db":"#f1f2f6"};
  color: ${i=>i.status?"#ffffff":"#333333"};
  font-size: 14px;
  cursor: ${i=>i.disabled?"default":"pointer"};
  transition: all 0.2s ease;
  text-align: left;
  outline: none; /* Remover outline para una mejor apariencia en móviles */
  
  /* Efecto de feedback táctil para móviles */
  &:active {
    transform: ${i=>i.disabled?"none":"scale(0.98)"};
  }
  
  &:hover {
    background-color: ${i=>i.disabled?i.status==="correct"?"#2ecc71":i.status==="incorrect"?"#e74c3c":i.status==="selected"?"#3498db":"#f1f2f6":"#dfe4ea"};
  }
  
  @media (min-width: 480px) {
    font-size: 15px;
    padding: 10px 12px;
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 12px 20px;
  }
`,E2=V.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  font-weight: bold;
  flex-shrink: 0; /* Evitar que se comprima */
  font-size: 12px;
  
  @media (min-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }
`,C2=V.span`
  flex: 1;
  word-break: break-word; /* Permitir que texto largo se rompa adecuadamente */
  hyphens: auto;
  
  /* Limitar a 2 líneas en móviles muy pequeños si el texto es muy largo */
  @media (max-width: 320px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`,x2=({value:i,rolling:n,onRollEnd:a})=>{const[r,u]=pe.useState({x:0,y:0,z:0}),[f,h]=pe.useState(!1),p={1:{x:0,y:0,z:0},2:{x:-90,y:0,z:0},3:{x:0,y:-90,z:0},4:{x:0,y:90,z:0},5:{x:90,y:0,z:0},6:{x:180,y:0,z:0}};return pe.useEffect(()=>{if(n&&!f&&Jt.playDiceRoll(),h(n),n){let m=0;const y=setInterval(()=>{m<20?(u({x:Math.floor(Math.random()*360),y:Math.floor(Math.random()*360),z:Math.floor(Math.random()*360)}),m++):(i&&p[i]&&u(p[i]),clearInterval(y),a&&a())},100);return()=>clearInterval(y)}else i&&!n&&u(p[i]||{x:0,y:0,z:0})},[n,i,f]),N.jsx(w2,{children:N.jsx(A2,{rolling:n,children:N.jsxs(R2,{style:{transform:`rotateX(${r.x}deg) rotateY(${r.y}deg) rotateZ(${r.z}deg)`},children:[N.jsx(kl,{className:"front",children:"1"}),N.jsx(kl,{className:"back",children:"6"}),N.jsx(kl,{className:"right",children:"3"}),N.jsx(kl,{className:"left",children:"4"}),N.jsx(kl,{className:"top",children:"2"}),N.jsx(kl,{className:"bottom",children:"5"})]})})})},T2=n2`
  0% { transform: translateY(0) rotate(0); }
  25% { transform: translateY(-30px) rotate(90deg); }
  50% { transform: translateY(0) rotate(180deg); }
  75% { transform: translateY(-20px) rotate(270deg); }
  100% { transform: translateY(0) rotate(360deg); }
`,w2=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  perspective: 600px;
  height: 100px;
`,A2=V.div`
  width: 60px;
  height: 60px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${i=>i.rolling?T2:"none"} 0.5s ease-in-out infinite;
  animation-iteration-count: ${i=>i.rolling?4:0};
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,R2=V.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
`,kl=V.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid #333;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
  
  // Configurar los puntos del dado
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  &.front {
    transform: translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='8' fill='%23333'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    font-size: 0;
  }
  
  &.back {
    transform: rotateY(180deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='15' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='30' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='30' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  &.right {
    transform: rotateY(90deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23333'/%3E%3Ccircle cx='30' cy='45' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  &.left {
    transform: rotateY(-90deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='15' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  &.top {
    transform: rotateX(90deg) translateZ(30px);
    
    &::before, &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background-color: #333;
    }
    
    &::before {
      width: 12px;
      height: 12px;
      top: 10px;
      left: 10px;
    }
    
    &::after {
      width: 12px;
      height: 12px;
      bottom: 10px;
      right: 10px;
    }
    
    font-size: 0;
  }
  
  &.bottom {
    transform: rotateX(-90deg) translateZ(30px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='15' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='15' r='6' fill='%23333'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23333'/%3E%3Ccircle cx='15' cy='45' r='6' fill='%23333'/%3E%3Ccircle cx='45' cy='45' r='6' fill='%23333'/%3E%3C/svg%3E");
    font-size: 0;
  }
  
  @media (min-width: 768px) {
    font-size: 30px;
    
    &.front, &.back, &.right, &.left, &.top, &.bottom {
      transform-origin: center;
    }
    
    &.front {
      transform: translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='10' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.back {
      transform: rotateY(180deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='40' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='40' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.right {
      transform: rotateY(90deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='40' cy='40' r='8' fill='%23333'/%3E%3Ccircle cx='40' cy='60' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.left {
      transform: rotateY(-90deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
    
    &.bottom {
      transform: rotateX(-90deg) translateZ(40px);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='20' r='8' fill='%23333'/%3E%3Ccircle cx='40' cy='40' r='8' fill='%23333'/%3E%3Ccircle cx='20' cy='60' r='8' fill='%23333'/%3E%3Ccircle cx='60' cy='60' r='8' fill='%23333'/%3E%3C/svg%3E");
    }
  }
`,ih=({variant:i="primary",disabled:n=!1,onClick:a,children:r,...u})=>N.jsx(N2,{variant:i,disabled:n,onClick:n?void 0:a,...u,children:r}),Df=i=>{switch(i){case"primary":return{bg:"#3498db",hover:"#2980b9",text:"#fff"};case"secondary":return{bg:"#95a5a6",hover:"#7f8c8d",text:"#fff"};case"success":return{bg:"#2ecc71",hover:"#27ae60",text:"#fff"};case"danger":return{bg:"#e74c3c",hover:"#c0392b",text:"#fff"};default:return{bg:"#3498db",hover:"#2980b9",text:"#fff"}}},N2=V.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: ${i=>i.disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s ease;
  text-align: center;
  
  background-color: ${i=>i.disabled?"#cccccc":Df(i.variant).bg};
  
  color: ${i=>i.disabled?"#666666":Df(i.variant).text};
  
  &:hover {
    background-color: ${i=>i.disabled?"#cccccc":Df(i.variant).hover};
  }
  
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 12px 24px;
  }
`,Of=({show:i,title:n,children:a,onClose:r,actions:u})=>i?N.jsx(D2,{children:N.jsxs(O2,{children:[N.jsxs(M2,{children:[N.jsx(z2,{children:n}),r&&N.jsx(L2,{onClick:r,children:"×"})]}),N.jsx(U2,{children:a}),u&&N.jsx(I2,{children:u})]})}):null,D2=V.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 15px;
`,O2=V.div`
  background-color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (min-width: 768px) {
    width: 80%;
  }
`,M2=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e1e1e1;
`,z2=V.h3`
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`,L2=V.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #95a5a6;
  
  &:hover {
    color: #7f8c8d;
  }
`,U2=V.div`
  padding: 20px;
  font-size: 16px;
  color: #34495e;
  line-height: 1.5;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`,I2=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px 20px;
  border-top: 1px solid #e1e1e1;
`,k2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%20512%20512'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3esound-loud%3c/title%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='white'%20fill-rule='evenodd'%3e%3cg%20id='icon'%20fill='white'%20transform='translate(42.666667,%2085.333333)'%3e%3cpath%20d='M361.299413,341.610667%20L328.014293,314.98176%20C402.206933,233.906133%20402.206933,109.96608%20328.013013,28.8906667%20L361.298133,2.26304%20C447.910187,98.97536%20447.908907,244.898347%20361.299413,341.610667%20Z%20M276.912853,69.77216%20L243.588693,96.4309333%20C283.38432,138.998613%20283.38304,204.87488%20243.589973,247.44256%20L276.914133,274.101333%20C329.118507,215.880107%20329.118507,127.992107%20276.912853,69.77216%20Z%20M191.749973,1.42108547e-14%20L80.8957867,87.2292267%20L7.10542736e-15,87.2292267%20L7.10542736e-15,257.895893%20L81.0208,257.895893%20L191.749973,343.35424%20L191.749973,1.42108547e-14%20L191.749973,1.42108547e-14%20Z%20M42.6666667,129.895893%20L95.6874667,129.895893%20L149.083307,87.8749867%20L149.083307,256.520747%20L95.5624533,215.229227%20L42.6666667,215.229227%20L42.6666667,129.895893%20Z'%20id='Shape'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",B2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%20512%20512'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3esound-off%3c/title%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='white'%20fill-rule='evenodd'%3e%3cg%20id='icon'%20fill='white'%20transform='translate(42.666667,%2059.581722)'%3e%3cpath%20d='M47.0849493,-1.42108547e-14%20L409.751616,362.666662%20L379.581717,392.836561%20L191.749,205.003%20L191.749973,369.105851%20L81.0208,283.647505%20L7.10542736e-15,283.647505%20L7.10542736e-15,112.980838%20L80.8957867,112.980838%20L91.433,104.688%20L16.9150553,30.169894%20L47.0849493,-1.42108547e-14%20Z%20M361.298133,28.0146513%20C429.03793,103.653926%20443.79725,209.394854%20405.578543,298.152074%20L372.628731,265.200172%20C396.498116,194.196781%20381.626371,113.22828%20328.013013,54.642278%20L361.298133,28.0146513%20Z%20M121.824,135.078%20L95.6874667,155.647505%20L42.6666667,155.647505%20L42.6666667,240.980838%20L95.5624533,240.980838%20L149.083307,282.272358%20L149.083,162.337%20L121.824,135.078%20Z%20M276.912853,95.5237713%20C305.539112,127.447886%20318.468552,168.292377%20315.701384,208.274722%20L266.463468,159.037386%20C261.494642,145.732631%20253.869746,133.179747%20243.588693,122.182545%20L243.588693,122.182545%20Z%20M191.749973,25.7516113%20L191.749,84.325%20L158.969,51.545%20L191.749973,25.7516113%20Z'%20id='Combined-Shape'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",H2=()=>{const[i,n]=pe.useState(Jt.isSoundEnabled()),a=()=>{const r=Jt.toggleSound();n(r)};return N.jsx(j2,{onClick:a,soundOn:i,children:i?N.jsx("span",{role:"img","aria-label":"Sonido activado",children:N.jsx("img",{src:k2})}):N.jsx("span",{role:"img","aria-label":"Sonido desactivado",children:N.jsx("img",{src:B2})})})},j2=V.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  color: ${i=>i.soundOn?"#3498db":"#95a5a6"};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`,q2=()=>{const{currentDice:i,currentQuestion:n,loading:a,rollDice:r,gameOver:u,winner:f,resetGame:h,playerPosition:p,ignorancePosition:g}=js(),[m,y]=pe.useState(!1),[b,C]=pe.useState(!1),[O,I]=pe.useState(!1);pe.useEffect(()=>{const le=()=>{C(window.innerWidth<480)};return le(),window.addEventListener("resize",le),()=>window.removeEventListener("resize",le)},[]);const G=()=>{I(!0),setTimeout(()=>{r(),I(!1)},2e3)},W=()=>u?N.jsxs(Of,{show:!0,title:f==="player"?"¡Felicidades! Has ganado":"Has perdido",actions:N.jsx(ih,{onClick:h,variant:"primary",children:"Jugar de nuevo"}),children:[N.jsx(iw,{winner:f,children:f==="player"?"¡Has derrotado a la ignorancia! Tu conocimiento te ha llevado a la victoria.":"La ignorancia ha ganado esta vez. ¡No te rindas, sigue aprendiendo y vuelve a intentarlo!"}),N.jsxs(lw,{children:[N.jsxs("span",{children:["Tu posición final: Casilla ",p]}),N.jsxs("span",{children:["Posición final de la ignorancia: Casilla ",g]})]})]}):N.jsxs(N.Fragment,{children:[N.jsx(o2,{}),N.jsxs(X2,{children:[!n&&!a&&N.jsxs(Z2,{children:[N.jsx(x2,{value:i,rolling:O}),N.jsx(K2,{onClick:G,variant:"primary",disabled:O,children:O?"Tirando...":b?"Tirar":"Tirar dado"})]}),a&&N.jsxs(F2,{children:[N.jsx($2,{}),N.jsx(W2,{children:"Cargando pregunta..."})]}),n&&N.jsx(Of,{show:!0,title:`Pregunta valor ${i}`,onClose:()=>{},children:N.jsxs(P2,{children:[N.jsx(d2,{}),N.jsx(v2,{})]})})]})]});return N.jsxs(G2,{children:[N.jsxs(Y2,{children:[N.jsx(V2,{children:"Cosmic Trivia"}),N.jsxs(Q2,{children:[N.jsx(H2,{}),N.jsx(ih,{onClick:()=>y(!0),variant:"secondary",children:b?"?":"Reglas"})]})]}),W(),N.jsxs(Of,{show:m,title:"Reglas del juego",onClose:()=>y(!1),children:[N.jsxs(J2,{children:[N.jsx(cs,{children:"Tira el dado para determinar una categoría de preguntas."}),N.jsx(cs,{children:"Si caes en un 'Hoyo Negro' Serás teletransportado a una casilla aleatoria."}),N.jsx(cs,{children:"Responde correctamente y avanzarás el número de casillas que muestre el dado."}),N.jsx(cs,{children:'Si respondes incorrectamente o se acaba el tiempo (20 segundos), la "ignorancia" avanzará el número de casillas que muestre el dado.'}),N.jsx(cs,{children:"El primero en llegar a la casilla 50 gana la partida."})]}),N.jsxs(ew,{children:[N.jsx(tw,{children:"Categorías:"}),N.jsxs(nw,{children:[N.jsx(Bl,{category:1,children:"1 - Cultura General"}),N.jsx(Bl,{category:2,children:"2 - Deportes"}),N.jsx(Bl,{category:3,children:"3 - Geografía e Historia"}),N.jsx(Bl,{category:4,children:"4 - Ciencia y Tecnología"}),N.jsx(Bl,{category:5,children:"5 - Cine, Música y TV"}),N.jsx(Bl,{category:6,children:"6 - Arte y Literatura"})]})]})]})]})},G2=V.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  
  @media (min-width: 480px) {
    padding: 15px;
  }
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`,Y2=V.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 15px;
  padding: 0 5px;
  
  @media (min-width: 480px) {
    margin-bottom: 20px;
  }
`,V2=V.h1`
  font-size: 22px;
  color:rgb(152, 158, 163);
  margin: 0;
  
  @media (min-width: 480px) {
    font-size: 24px;
  }
  
  @media (min-width: 768px) {
    font-size: 32px;
  }
`,Q2=V.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,X2=V.div`
  width: 100%;
  max-width: 800px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Z2=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  
  @media (max-width: 380px) {
    flex-direction: ${i=>i.currentDice?"column":"row"};
  }
`,K2=V(ih)`
  min-width: 100px;
`,P2=V.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;V.div`
  margin: 10px 0;
  font-size: 16px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  
  @media (min-width: 480px) {
    font-size: 18px;
    margin: 15px 0;
  }
`;V.span`
  display: inline-block;
  margin-left: 8px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  
  @media (min-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }
`;const F2=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`,$2=V.div`
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,W2=V.div`
  color: #7f8c8d;
  font-size: 16px;
`,J2=V.ul`
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
`,cs=V.li`
  margin-bottom: 8px;
`,ew=V.div`
  background-color: #f1f2f6;
  padding: 10px;
  border-radius: 8px;
  
  @media (min-width: 480px) {
    padding: 15px;
  }
`,tw=V.h4`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 15px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
`,nw=V.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`,Bl=V.div`
  margin-bottom: 5px;
  padding: 5px;
  border-left: 4px solid ${i=>({1:"#3498db",2:"#2ecc71",3:"#e67e22",4:"#9b59b6",5:"#e74c3c",6:"#f1c40f"})[i.category]||"#95a5a6"};
  padding-left: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  
  @media (min-width: 480px) {
    font-size: 14px;
  }
`,iw=V.p`
  font-size: 16px;
  text-align: center;
  color: ${i=>i.winner==="player"?"#2ecc71":"#e74c3c"};
  margin-bottom: 20px;
  
  @media (min-width: 480px) {
    font-size: 18px;
  }
`,lw=V.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #f1f2f6;
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
  
  @media (min-width: 480px) {
    font-size: 16px;
  }
`,aw=""+new URL("cosmicTrivia-logo-DVr008M7.png",import.meta.url).href,sw=""+new URL("piano15secs-BDG1H-O4.mp3",import.meta.url).href,rw=({onComplete:i})=>{const n=pe.useRef(null),[a,r]=pe.useState(!0),[u,f]=pe.useState(0),[h,p]=pe.useState(!1),g=()=>{p(!0),n.current&&n.current.play().catch(C=>{console.warn("Reproducción de audio fallida:",C)});const y=setInterval(()=>{f(C=>{const O=C+6.666666666666667;return O>=100?100:O})},1e3),b=setTimeout(()=>{r(!1),setTimeout(()=>i(),500)},15e3);return{interval:y,timer:b}};pe.useEffect(()=>{let y,b;if(h){const C=g();y=C.interval,b=C.timer}return()=>{y&&clearInterval(y),b&&clearTimeout(b),n.current&&(n.current.pause(),n.current.currentTime=0)}},[h,i]);const m=()=>{n.current&&n.current.pause(),r(!1),setTimeout(()=>i(),500)};return N.jsxs("div",{className:`splash-container ${a?"":"fade-out"}`,children:[N.jsx("div",{className:"logo-container",children:N.jsx("img",{src:aw,alt:"TriviaMx Logo",className:"splash-logo"})}),h?N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"progress-bar-container",children:N.jsx("div",{className:"progress-bar",style:{width:`${u}%`}})}),N.jsx("button",{className:"skip-button",onClick:m,children:"Saltar Intro"})]}):N.jsx("button",{className:"start-button",onClick:()=>p(!0),children:"Iniciar Aplicación"}),N.jsx("audio",{ref:n,src:sw,preload:"auto"})]})};function ow(){const[i,n]=pe.useState(!0),a=()=>{n(!1)};return N.jsx("div",{className:"App",children:i?N.jsx(rw,{onComplete:a}):N.jsx(nT,{children:N.jsx(q2,{})})})}Xb.createRoot(document.getElementById("root")).render(N.jsx(Ql.StrictMode,{children:N.jsx(ow,{})}));
