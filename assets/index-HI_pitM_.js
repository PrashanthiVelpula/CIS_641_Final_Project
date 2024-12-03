function vS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E_={exports:{}},bl={},S_={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),yS=Symbol.for("react.portal"),wS=Symbol.for("react.fragment"),ES=Symbol.for("react.strict_mode"),SS=Symbol.for("react.profiler"),CS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),TS=Symbol.for("react.forward_ref"),kS=Symbol.for("react.suspense"),xS=Symbol.for("react.memo"),NS=Symbol.for("react.lazy"),op=Symbol.iterator;function PS(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var C_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I_=Object.assign,T_={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||C_}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k_(){}k_.prototype=Wi.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=T_,this.updater=n||C_}var Qd=qd.prototype=new k_;Qd.constructor=qd;I_(Qd,Wi.prototype);Qd.isPureReactComponent=!0;var ap=Array.isArray,x_=Object.prototype.hasOwnProperty,Xd={current:null},N_={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:So,type:t,key:s,ref:o,props:i,_owner:Xd.current}}function bS(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function RS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RS(""+t.key):e.toString(36)}function fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case So:case yS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vc(o,0):r,ap(i)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),fa(i,e,n,"",function(c){return c})):i!=null&&(Jd(i)&&(i=bS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vc(s,a);o+=fa(s,e,n,l,i)}else if(l=PS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vc(s,a++),o+=fa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vo(t,e,n){if(t==null)return t;var r=[],i=0;return fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},ha={transition:null},OS={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Xd};function b_(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Vo,forEach:function(t,e,n){Vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vo(t,function(){e++}),e},toArray:function(t){return Vo(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Wi;W.Fragment=wS;W.Profiler=SS;W.PureComponent=qd;W.StrictMode=ES;W.Suspense=kS;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;W.act=b_;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x_.call(e,l)&&!N_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:So,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CS,_context:t},t.Consumer=t};W.createElement=P_;W.createFactory=function(t){var e=P_.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:TS,render:t}};W.isValidElement=Jd;W.lazy=function(t){return{$$typeof:NS,_payload:{_status:-1,_result:t},_init:AS}};W.memo=function(t,e){return{$$typeof:xS,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=ha.transition;ha.transition={};try{t()}finally{ha.transition=e}};W.unstable_act=b_;W.useCallback=function(t,e){return ze.current.useCallback(t,e)};W.useContext=function(t){return ze.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};W.useEffect=function(t,e){return ze.current.useEffect(t,e)};W.useId=function(){return ze.current.useId()};W.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return ze.current.useMemo(t,e)};W.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};W.useRef=function(t){return ze.current.useRef(t)};W.useState=function(t){return ze.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return ze.current.useTransition()};W.version="18.3.1";S_.exports=W;var S=S_.exports;const Zd=w_(S),DS=vS({__proto__:null,default:Zd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=S,MS=Symbol.for("react.element"),FS=Symbol.for("react.fragment"),jS=Object.prototype.hasOwnProperty,US=LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zS={key:!0,ref:!0,__self:!0,__source:!0};function R_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jS.call(e,r)&&!zS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MS,type:t,key:s,ref:o,props:i,_owner:US.current}}bl.Fragment=FS;bl.jsx=R_;bl.jsxs=R_;E_.exports=bl;var h=E_.exports,A_={exports:{}},st={},O_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var M=P.length;P.push(D);e:for(;0<M;){var se=M-1>>>1,he=P[se];if(0<i(he,D))P[se]=D,P[M]=he,M=se;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],M=P.pop();if(M!==D){P[0]=M;e:for(var se=0,he=P.length,z=he>>>1;se<z;){var vt=2*(se+1)-1,Sn=P[vt],Rt=vt+1,Bo=P[Rt];if(0>i(Sn,M))Rt<he&&0>i(Bo,Sn)?(P[se]=Bo,P[Rt]=M,se=Rt):(P[se]=Sn,P[vt]=M,se=vt);else if(Rt<he&&0>i(Bo,M))P[se]=Bo,P[Rt]=M,se=Rt;else break e}}return D}function i(P,D){var M=P.sortIndex-D.sortIndex;return M!==0?M:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,_=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=P)r(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function y(P){if(w=!1,g(P),!v)if(n(l)!==null)v=!0,Yr(I);else{var D=n(c);D!==null&&es(y,D.startTime-P)}}function I(P,D){v=!1,w&&(w=!1,m(N),N=-1),_=!0;var M=f;try{for(g(D),u=n(l);u!==null&&(!(u.expirationTime>D)||P&&!Qe());){var se=u.callback;if(typeof se=="function"){u.callback=null,f=u.priorityLevel;var he=se(u.expirationTime<=D);D=t.unstable_now(),typeof he=="function"?u.callback=he:u===n(l)&&r(l),g(D)}else r(l);u=n(l)}if(u!==null)var z=!0;else{var vt=n(c);vt!==null&&es(y,vt.startTime-D),z=!1}return z}finally{u=null,f=M,_=!1}}var C=!1,k=null,N=-1,G=5,L=-1;function Qe(){return!(t.unstable_now()-L<G)}function ur(){if(k!==null){var P=t.unstable_now();L=P;var D=!0;try{D=k(!0,P)}finally{D?En():(C=!1,k=null)}}else C=!1}var En;if(typeof p=="function")En=function(){p(ur)};else if(typeof MessageChannel<"u"){var Zi=new MessageChannel,Wo=Zi.port2;Zi.port1.onmessage=ur,En=function(){Wo.postMessage(null)}}else En=function(){E(ur,0)};function Yr(P){k=P,C||(C=!0,En())}function es(P,D){N=E(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Yr(I))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return P()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=f;f=P;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(P,D,M){var se=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?se+M:se):M=se,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=M+he,P={id:d++,callback:D,priorityLevel:P,startTime:M,expirationTime:he,sortIndex:-1},M>se?(P.sortIndex=M,e(c,P),n(l)===null&&P===n(c)&&(w?(m(N),N=-1):w=!0,es(y,M-se))):(P.sortIndex=he,e(l,P),v||_||(v=!0,Yr(I))),P},t.unstable_shouldYield=Qe,t.unstable_wrapCallback=function(P){var D=f;return function(){var M=f;f=D;try{return P.apply(this,arguments)}finally{f=M}}}})(D_);O_.exports=D_;var $S=O_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WS=S,it=$S;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L_=new Set,$s={};function $r(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for($s[t]=e,t=0;t<e.length;t++)L_.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,BS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cp={},up={};function VS(t){return pu.call(up,t)?!0:pu.call(cp,t)?!1:BS.test(t)?up[t]=!0:(cp[t]=!0,!1)}function HS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GS(t,e,n,r){if(e===null||typeof e>"u"||HS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);xe[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);xe[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);xe[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GS(e,n,i,r)&&(n=null),r||i===null?VS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=WS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),M_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),j_=Symbol.for("react.offscreen"),dp=Symbol.iterator;function ts(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,yc;function ms(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var wc=!1;function Ec(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ms(t):""}function KS(t){switch(t.tag){case 5:return ms(t.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Xr:return"Portal";case mu:return"Profiler";case rf:return"StrictMode";case gu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F_:return(t.displayName||"Context")+".Consumer";case M_:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case of:return e=t.displayName||null,e!==null?e:vu(t.type)||"Memo";case kn:e=t._payload,t=t._init;try{return vu(t(e))}catch{}}return null}function YS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qS(t){var e=U_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=qS(t))}function z_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=U_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yu(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $_(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function wu(t,e){$_(t,e);var n=Xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||Ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gs=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(gs(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xn(n)}}function W_(t,e){var n=Xn(e.value),r=Xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,V_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QS=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){QS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function H_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function G_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XS=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(XS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xu=null,pi=null,mi=null;function gp(t){if(t=To(t)){if(typeof xu!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Ll(e),xu(t.stateNode,t.type,e))}}function K_(t){pi?mi?mi.push(t):mi=[t]:pi=t}function Y_(){if(pi){var t=pi,e=mi;if(mi=pi=null,gp(t),e)for(t=0;t<e.length;t++)gp(e[t])}}function q_(t,e){return t(e)}function Q_(){}var Sc=!1;function X_(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return q_(t,e,n)}finally{Sc=!1,(pi!==null||mi!==null)&&(Q_(),Y_())}}function Bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Nu=!1;if(on)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Nu=!1}function JS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Is=!1,Aa=null,Oa=!1,Pu=null,ZS={onError:function(t){Is=!0,Aa=t}};function eC(t,e,n,r,i,s,o,a,l){Is=!1,Aa=null,JS.apply(ZS,arguments)}function tC(t,e,n,r,i,s,o,a,l){if(eC.apply(this,arguments),Is){if(Is){var c=Aa;Is=!1,Aa=null}else throw Error(T(198));Oa||(Oa=!0,Pu=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _p(t){if(Wr(t)!==t)throw Error(T(188))}function nC(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _p(i),t;if(s===r)return _p(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Z_(t){return t=nC(t),t!==null?ev(t):null}function ev(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ev(t);if(e!==null)return e;t=t.sibling}return null}var tv=it.unstable_scheduleCallback,vp=it.unstable_cancelCallback,rC=it.unstable_shouldYield,iC=it.unstable_requestPaint,fe=it.unstable_now,sC=it.unstable_getCurrentPriorityLevel,lf=it.unstable_ImmediatePriority,nv=it.unstable_UserBlockingPriority,Da=it.unstable_NormalPriority,oC=it.unstable_LowPriority,rv=it.unstable_IdlePriority,Rl=null,zt=null;function aC(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:uC,lC=Math.log,cC=Math.LN2;function uC(t){return t>>>=0,t===0?32:31-(lC(t)/cC|0)|0}var Yo=64,qo=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_s(a):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tt(e),i=1<<n,r|=t[n],e&=~i;return r}function dC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iv(){var t=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tt(e),t[e]=n}function hC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ov,uf,av,lv,cv,Ru=!1,Qo=[],Un=null,zn=null,$n=null,Vs=new Map,Hs=new Map,Nn=[],pC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(e.pointerId)}}function rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=To(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mC(t,e,n,r,i){switch(e){case"focusin":return Un=rs(Un,t,e,n,r,i),!0;case"dragenter":return zn=rs(zn,t,e,n,r,i),!0;case"mouseover":return $n=rs($n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,rs(Vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hs.set(s,rs(Hs.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=_r(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=J_(n),e!==null){t.blockedOn=e,cv(t.priority,function(){av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ku=r,n.target.dispatchEvent(r),ku=null}else return e=To(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function wp(t,e,n){pa(t)&&n.delete(e)}function gC(){Ru=!1,Un!==null&&pa(Un)&&(Un=null),zn!==null&&pa(zn)&&(zn=null),$n!==null&&pa($n)&&($n=null),Vs.forEach(wp),Hs.forEach(wp)}function is(t,e){t.blockedOn===e&&(t.blockedOn=null,Ru||(Ru=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,gC)))}function Gs(t){function e(i){return is(i,t)}if(0<Qo.length){is(Qo[0],t);for(var n=1;n<Qo.length;n++){var r=Qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&is(Un,t),zn!==null&&is(zn,t),$n!==null&&is($n,t),Vs.forEach(e),Hs.forEach(e),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&Nn.shift()}var gi=mn.ReactCurrentBatchConfig,Ma=!0;function _C(t,e,n,r){var i=K,s=gi.transition;gi.transition=null;try{K=1,df(t,e,n,r)}finally{K=i,gi.transition=s}}function vC(t,e,n,r){var i=K,s=gi.transition;gi.transition=null;try{K=4,df(t,e,n,r)}finally{K=i,gi.transition=s}}function df(t,e,n,r){if(Ma){var i=Au(t,e,n,r);if(i===null)Oc(t,e,r,Fa,n),yp(t,r);else if(mC(i,t,e,n,r))r.stopPropagation();else if(yp(t,r),e&4&&-1<pC.indexOf(t)){for(;i!==null;){var s=To(i);if(s!==null&&ov(s),s=Au(t,e,n,r),s===null&&Oc(t,e,r,Fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var Fa=null;function Au(t,e,n,r){if(Fa=null,t=af(r),t=_r(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function dv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sC()){case lf:return 1;case nv:return 4;case Da:case oC:return 16;case rv:return 536870912;default:return 16}default:return 16}}var Dn=null,ff=null,ma=null;function fv(){if(ma)return ma;var t,e=ff,n=e.length,r,i="value"in Dn?Dn.value:Dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ma=i.slice(t,1<r?1-r:void 0)}function ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Ep(){return!1}function ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Ep,this.isPropagationStopped=Ep,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=ot(Bi),Io=le({},Bi,{view:0,detail:0}),yC=ot(Io),Ic,Tc,ss,Al=le({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ss&&(ss&&t.type==="mousemove"?(Ic=t.screenX-ss.screenX,Tc=t.screenY-ss.screenY):Tc=Ic=0,ss=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Sp=ot(Al),wC=le({},Al,{dataTransfer:0}),EC=ot(wC),SC=le({},Io,{relatedTarget:0}),kc=ot(SC),CC=le({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),IC=ot(CC),TC=le({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kC=ot(TC),xC=le({},Bi,{data:0}),Cp=ot(xC),NC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bC[t])?!!e[t]:!1}function pf(){return RC}var AC=le({},Io,{key:function(t){if(t.key){var e=NC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OC=ot(AC),DC=le({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=ot(DC),LC=le({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),MC=ot(LC),FC=le({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jC=ot(FC),UC=le({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zC=ot(UC),$C=[9,13,27,32],mf=on&&"CompositionEvent"in window,Ts=null;on&&"documentMode"in document&&(Ts=document.documentMode);var WC=on&&"TextEvent"in window&&!Ts,hv=on&&(!mf||Ts&&8<Ts&&11>=Ts),Tp=" ",kp=!1;function pv(t,e){switch(t){case"keyup":return $C.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function BC(t,e){switch(t){case"compositionend":return mv(e);case"keypress":return e.which!==32?null:(kp=!0,Tp);case"textInput":return t=e.data,t===Tp&&kp?null:t;default:return null}}function VC(t,e){if(Zr)return t==="compositionend"||!mf&&pv(t,e)?(t=fv(),ma=ff=Dn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hv&&e.locale!=="ko"?null:e.data;default:return null}}var HC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HC[t.type]:e==="textarea"}function gv(t,e,n,r){K_(r),e=ja(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ks=null,Ks=null;function GC(t){xv(t,0)}function Ol(t){var e=ni(t);if(z_(e))return t}function KC(t,e){if(t==="change")return e}var _v=!1;if(on){var xc;if(on){var Nc="oninput"in document;if(!Nc){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Nc=typeof Np.oninput=="function"}xc=Nc}else xc=!1;_v=xc&&(!document.documentMode||9<document.documentMode)}function Pp(){ks&&(ks.detachEvent("onpropertychange",vv),Ks=ks=null)}function vv(t){if(t.propertyName==="value"&&Ol(Ks)){var e=[];gv(e,Ks,t,af(t)),X_(GC,e)}}function YC(t,e,n){t==="focusin"?(Pp(),ks=e,Ks=n,ks.attachEvent("onpropertychange",vv)):t==="focusout"&&Pp()}function qC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(Ks)}function QC(t,e){if(t==="click")return Ol(e)}function XC(t,e){if(t==="input"||t==="change")return Ol(e)}function JC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:JC;function Ys(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pu.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var n=bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wv(){for(var t=window,e=Ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ra(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZC(t){var e=wv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(r!==null&&gf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rp(n,s);var o=Rp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e1=on&&"documentMode"in document&&11>=document.documentMode,ei=null,Ou=null,xs=null,Du=!1;function Ap(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||ei==null||ei!==Ra(r)||(r=ei,"selectionStart"in r&&gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xs&&Ys(xs,r)||(xs=r,r=ja(Ou,"onSelect"),0<r.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function Jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Pc={},Ev={};on&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Dl(t){if(Pc[t])return Pc[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return Pc[t]=e[n];return t}var Sv=Dl("animationend"),Cv=Dl("animationiteration"),Iv=Dl("animationstart"),Tv=Dl("transitionend"),kv=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){kv.set(t,e),$r(e,[t])}for(var bc=0;bc<Op.length;bc++){var Rc=Op[bc],t1=Rc.toLowerCase(),n1=Rc[0].toUpperCase()+Rc.slice(1);sr(t1,"on"+n1)}sr(Sv,"onAnimationEnd");sr(Cv,"onAnimationIteration");sr(Iv,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Tv,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function Dp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tC(r,e,void 0,t),t.currentTarget=null}function xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dp(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dp(i,a,c),s=l}}}if(Oa)throw t=Pu,Oa=!1,Pu=null,t}function Z(t,e){var n=e[Uu];n===void 0&&(n=e[Uu]=new Set);var r=t+"__bubble";n.has(r)||(Nv(e,t,2,!1),n.add(r))}function Ac(t,e,n){var r=0;e&&(r|=4),Nv(n,t,r,e)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[Zo]){t[Zo]=!0,L_.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zo]||(e[Zo]=!0,Ac("selectionchange",!1,e))}}function Nv(t,e,n,r){switch(dv(e)){case 1:var i=_C;break;case 4:i=vC;break;default:i=df}n=i.bind(null,e,n,t),i=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}X_(function(){var c=s,d=af(n),u=[];e:{var f=kv.get(t);if(f!==void 0){var _=hf,v=t;switch(t){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":_=OC;break;case"focusin":v="focus",_=kc;break;case"focusout":v="blur",_=kc;break;case"beforeblur":case"afterblur":_=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=EC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=MC;break;case Sv:case Cv:case Iv:_=IC;break;case Tv:_=jC;break;case"scroll":_=yC;break;case"wheel":_=zC;break;case"copy":case"cut":case"paste":_=kC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ip}var w=(e&4)!==0,E=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,g;p!==null;){g=p;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=Bs(p,m),y!=null&&w.push(Qs(p,y,g)))),E)break;p=p.return}0<w.length&&(f=new _(f,v,null,n,d),u.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==ku&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[an]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?_r(v):null,v!==null&&(E=Wr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(w=Sp,y="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Ip,y="onPointerLeave",m="onPointerEnter",p="pointer"),E=_==null?f:ni(_),g=v==null?f:ni(v),f=new w(y,p+"leave",_,n,d),f.target=E,f.relatedTarget=g,y=null,_r(d)===c&&(w=new w(m,p+"enter",v,n,d),w.target=g,w.relatedTarget=E,y=w),E=y,_&&v)t:{for(w=_,m=v,p=0,g=w;g;g=qr(g))p++;for(g=0,y=m;y;y=qr(y))g++;for(;0<p-g;)w=qr(w),p--;for(;0<g-p;)m=qr(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=qr(w),m=qr(m)}w=null}else w=null;_!==null&&Lp(u,f,_,w,!1),v!==null&&E!==null&&Lp(u,E,v,w,!0)}}e:{if(f=c?ni(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var I=KC;else if(xp(f))if(_v)I=XC;else{I=qC;var C=YC}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=QC);if(I&&(I=I(t,c))){gv(u,I,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Eu(f,"number",f.value)}switch(C=c?ni(c):window,t){case"focusin":(xp(C)||C.contentEditable==="true")&&(ei=C,Ou=c,xs=null);break;case"focusout":xs=Ou=ei=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Ap(u,n,d);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Ap(u,n,d)}var k;if(mf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Zr?pv(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(hv&&n.locale!=="ko"&&(Zr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Zr&&(k=fv()):(Dn=d,ff="value"in Dn?Dn.value:Dn.textContent,Zr=!0)),C=ja(c,N),0<C.length&&(N=new Cp(N,t,null,n,d),u.push({event:N,listeners:C}),k?N.data=k:(k=mv(n),k!==null&&(N.data=k)))),(k=WC?BC(t,n):VC(t,n))&&(c=ja(c,"onBeforeInput"),0<c.length&&(d=new Cp("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=k))}xv(u,e)})}function Qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bs(t,n),s!=null&&r.unshift(Qs(t,s,i)),s=Bs(t,e),s!=null&&r.push(Qs(t,s,i))),t=t.return}return r}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Bs(n,s),l!=null&&o.unshift(Qs(n,l,a))):i||(l=Bs(n,s),l!=null&&o.push(Qs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var i1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Mp(t){return(typeof t=="string"?t:""+t).replace(i1,`
`).replace(s1,"")}function ea(t,e,n){if(e=Mp(e),Mp(t)!==e&&n)throw Error(T(425))}function Ua(){}var Lu=null,Mu=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(t){return Fp.resolve(null).then(t).catch(l1)}:ju;function l1(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gs(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Vi,Xs="__reactProps$"+Vi,an="__reactContainer$"+Vi,Uu="__reactEvents$"+Vi,c1="__reactListeners$"+Vi,u1="__reactHandles$"+Vi;function _r(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[an]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jp(t);t!==null;){if(n=t[Mt])return n;t=jp(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[Mt]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Ll(t){return t[Xs]||null}var zu=[],ri=-1;function or(t){return{current:t}}function ee(t){0>ri||(t.current=zu[ri],zu[ri]=null,ri--)}function J(t,e){ri++,zu[ri]=t.current,t.current=e}var Jn={},Oe=or(Jn),Ge=or(!1),xr=Jn;function ki(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function za(){ee(Ge),ee(Oe)}function Up(t,e,n){if(Oe.current!==Jn)throw Error(T(168));J(Oe,e),J(Ge,n)}function Pv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,YS(t)||"Unknown",i));return le({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,xr=Oe.current,J(Oe,t),J(Ge,Ge.current),!0}function zp(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Pv(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,ee(Ge),ee(Oe),J(Oe,t)):ee(Ge),J(Ge,n)}var qt=null,Ml=!1,Lc=!1;function bv(t){qt===null?qt=[t]:qt.push(t)}function d1(t){Ml=!0,bv(t)}function ar(){if(!Lc&&qt!==null){Lc=!0;var t=0,e=K;try{var n=qt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qt=null,Ml=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),tv(lf,ar),i}finally{K=e,Lc=!1}}return null}var ii=[],si=0,Wa=null,Ba=0,lt=[],ct=0,Nr=null,Qt=1,Xt="";function fr(t,e){ii[si++]=Ba,ii[si++]=Wa,Wa=t,Ba=e}function Rv(t,e,n){lt[ct++]=Qt,lt[ct++]=Xt,lt[ct++]=Nr,Nr=t;var r=Qt;t=Xt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var s=32-Tt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qt=1<<32-Tt(e)+i|n<<i|r,Xt=s+t}else Qt=1<<s|n<<i|r,Xt=t}function _f(t){t.return!==null&&(fr(t,1),Rv(t,1,0))}function vf(t){for(;t===Wa;)Wa=ii[--si],ii[si]=null,Ba=ii[--si],ii[si]=null;for(;t===Nr;)Nr=lt[--ct],lt[ct]=null,Xt=lt[--ct],lt[ct]=null,Qt=lt[--ct],lt[ct]=null}var et=null,Je=null,re=!1,St=null;function Av(t,e){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,et=t,Je=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,et=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:Qt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,et=t,Je=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wu(t){if(re){var e=Je;if(e){var n=e;if(!$p(t,e)){if($u(t))throw Error(T(418));e=Wn(n.nextSibling);var r=et;e&&$p(t,e)?Av(r,n):(t.flags=t.flags&-4097|2,re=!1,et=t)}}else{if($u(t))throw Error(T(418));t.flags=t.flags&-4097|2,re=!1,et=t}}}function Wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;et=t}function ta(t){if(t!==et)return!1;if(!re)return Wp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=Je)){if($u(t))throw Ov(),Error(T(418));for(;e;)Av(t,e),e=Wn(e.nextSibling)}if(Wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=et?Wn(t.stateNode.nextSibling):null;return!0}function Ov(){for(var t=Je;t;)t=Wn(t.nextSibling)}function xi(){Je=et=null,re=!1}function yf(t){St===null?St=[t]:St.push(t)}var f1=mn.ReactCurrentBatchConfig;function os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function na(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bp(t){var e=t._init;return e(t._payload)}function Dv(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Gn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,y){return p===null||p.tag!==6?(p=Wc(g,m.mode,y),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,y){var I=g.type;return I===Jr?d(m,p,g.props.children,y,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===kn&&Bp(I)===p.type)?(y=i(p,g.props),y.ref=os(m,p,g),y.return=m,y):(y=Ca(g.type,g.key,g.props,null,m.mode,y),y.ref=os(m,p,g),y.return=m,y)}function c(m,p,g,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Bc(g,m.mode,y),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,y,I){return p===null||p.tag!==7?(p=Cr(g,m.mode,y,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wc(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ho:return g=Ca(p.type,p.key,p.props,null,m.mode,g),g.ref=os(m,null,p),g.return=m,g;case Xr:return p=Bc(p,m.mode,g),p.return=m,p;case kn:var y=p._init;return u(m,y(p._payload),g)}if(gs(p)||ts(p))return p=Cr(p,m.mode,g,null),p.return=m,p;na(m,p)}return null}function f(m,p,g,y){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,p,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ho:return g.key===I?l(m,p,g,y):null;case Xr:return g.key===I?c(m,p,g,y):null;case kn:return I=g._init,f(m,p,I(g._payload),y)}if(gs(g)||ts(g))return I!==null?null:d(m,p,g,y,null);na(m,g)}return null}function _(m,p,g,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,a(p,m,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ho:return m=m.get(y.key===null?g:y.key)||null,l(p,m,y,I);case Xr:return m=m.get(y.key===null?g:y.key)||null,c(p,m,y,I);case kn:var C=y._init;return _(m,p,g,C(y._payload),I)}if(gs(y)||ts(y))return m=m.get(g)||null,d(p,m,y,I,null);na(p,y)}return null}function v(m,p,g,y){for(var I=null,C=null,k=p,N=p=0,G=null;k!==null&&N<g.length;N++){k.index>N?(G=k,k=null):G=k.sibling;var L=f(m,k,g[N],y);if(L===null){k===null&&(k=G);break}t&&k&&L.alternate===null&&e(m,k),p=s(L,p,N),C===null?I=L:C.sibling=L,C=L,k=G}if(N===g.length)return n(m,k),re&&fr(m,N),I;if(k===null){for(;N<g.length;N++)k=u(m,g[N],y),k!==null&&(p=s(k,p,N),C===null?I=k:C.sibling=k,C=k);return re&&fr(m,N),I}for(k=r(m,k);N<g.length;N++)G=_(k,m,N,g[N],y),G!==null&&(t&&G.alternate!==null&&k.delete(G.key===null?N:G.key),p=s(G,p,N),C===null?I=G:C.sibling=G,C=G);return t&&k.forEach(function(Qe){return e(m,Qe)}),re&&fr(m,N),I}function w(m,p,g,y){var I=ts(g);if(typeof I!="function")throw Error(T(150));if(g=I.call(g),g==null)throw Error(T(151));for(var C=I=null,k=p,N=p=0,G=null,L=g.next();k!==null&&!L.done;N++,L=g.next()){k.index>N?(G=k,k=null):G=k.sibling;var Qe=f(m,k,L.value,y);if(Qe===null){k===null&&(k=G);break}t&&k&&Qe.alternate===null&&e(m,k),p=s(Qe,p,N),C===null?I=Qe:C.sibling=Qe,C=Qe,k=G}if(L.done)return n(m,k),re&&fr(m,N),I;if(k===null){for(;!L.done;N++,L=g.next())L=u(m,L.value,y),L!==null&&(p=s(L,p,N),C===null?I=L:C.sibling=L,C=L);return re&&fr(m,N),I}for(k=r(m,k);!L.done;N++,L=g.next())L=_(k,m,N,L.value,y),L!==null&&(t&&L.alternate!==null&&k.delete(L.key===null?N:L.key),p=s(L,p,N),C===null?I=L:C.sibling=L,C=L);return t&&k.forEach(function(ur){return e(m,ur)}),re&&fr(m,N),I}function E(m,p,g,y){if(typeof g=="object"&&g!==null&&g.type===Jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ho:e:{for(var I=g.key,C=p;C!==null;){if(C.key===I){if(I=g.type,I===Jr){if(C.tag===7){n(m,C.sibling),p=i(C,g.props.children),p.return=m,m=p;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===kn&&Bp(I)===C.type){n(m,C.sibling),p=i(C,g.props),p.ref=os(m,C,g),p.return=m,m=p;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===Jr?(p=Cr(g.props.children,m.mode,y,g.key),p.return=m,m=p):(y=Ca(g.type,g.key,g.props,null,m.mode,y),y.ref=os(m,p,g),y.return=m,m=y)}return o(m);case Xr:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Bc(g,m.mode,y),p.return=m,m=p}return o(m);case kn:return C=g._init,E(m,p,C(g._payload),y)}if(gs(g))return v(m,p,g,y);if(ts(g))return w(m,p,g,y);na(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Wc(g,m.mode,y),p.return=m,m=p),o(m)):n(m,p)}return E}var Ni=Dv(!0),Lv=Dv(!1),Va=or(null),Ha=null,oi=null,wf=null;function Ef(){wf=oi=Ha=null}function Sf(t){var e=Va.current;ee(Va),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _i(t,e){Ha=t,wf=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Be=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(Ha===null)throw Error(T(308));oi=t,Ha.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var vr=null;function Cf(t){vr===null?vr=[t]:vr.push(t)}function Mv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,ln(t,r)}function ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,ln(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}function Vp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(f=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){u=v.call(_,u,f);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(_,u,f):v,f==null)break e;u=le({},u,f);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=u):d=d.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=u}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var ko={},$t=or(ko),Js=or(ko),Zs=or(ko);function yr(t){if(t===ko)throw Error(T(174));return t}function Tf(t,e){switch(J(Zs,e),J(Js,t),J($t,ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}ee($t),J($t,e)}function Pi(){ee($t),ee(Js),ee(Zs)}function jv(t){yr(Zs.current);var e=yr($t.current),n=Cu(e,t.type);e!==n&&(J(Js,t),J($t,n))}function kf(t){Js.current===t&&(ee($t),ee(Js))}var oe=or(0);function Ka(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function xf(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var va=mn.ReactCurrentDispatcher,Fc=mn.ReactCurrentBatchConfig,Pr=0,ae=null,ge=null,Ee=null,Ya=!1,Ns=!1,eo=0,h1=0;function be(){throw Error(T(321))}function Nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function Pf(t,e,n,r,i,s){if(Pr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?_1:v1,t=n(r,i),Ns){s=0;do{if(Ns=!1,eo=0,25<=s)throw Error(T(301));s+=1,Ee=ge=null,e.updateQueue=null,va.current=y1,t=n(r,i)}while(Ns)}if(va.current=qa,e=ge!==null&&ge.next!==null,Pr=0,Ee=ge=ae=null,Ya=!1,e)throw Error(T(300));return t}function bf(){var t=eo!==0;return eo=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ae.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function mt(){if(ge===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Ee===null?ae.memoizedState:Ee.next;if(e!==null)Ee=e,ge=t;else{if(t===null)throw Error(T(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ee===null?ae.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function to(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=mt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Pr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,ae.lanes|=d,br|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(Be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=mt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(Be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Uv(){}function zv(t,e){var n=ae,r=mt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,Be=!0),r=r.queue,Rf(Bv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,no(9,Wv.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(T(349));Pr&30||$v(n,e,i)}return i}function $v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,r){e.value=n,e.getSnapshot=r,Vv(e)&&Hv(t)}function Bv(t,e,n){return n(function(){Vv(e)&&Hv(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function Hv(t){var e=ln(t,1);e!==null&&kt(e,t,1,-1)}function Gp(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=g1.bind(null,ae,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gv(){return mt().memoizedState}function ya(t,e,n,r){var i=Dt();ae.flags|=t,i.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Nf(r,o.deps)){i.memoizedState=no(e,n,s,r);return}}ae.flags|=t,i.memoizedState=no(1|e,n,s,r)}function Kp(t,e){return ya(8390656,8,t,e)}function Rf(t,e){return Fl(2048,8,t,e)}function Kv(t,e){return Fl(4,2,t,e)}function Yv(t,e){return Fl(4,4,t,e)}function qv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,qv.bind(null,e,t),n)}function Af(){}function Xv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zv(t,e,n){return Pr&21?(Nt(n,e)||(n=iv(),ae.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Be=!0),t.memoizedState=n)}function p1(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{K=n,Fc.transition=r}}function ey(){return mt().memoizedState}function m1(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ty(t))ny(e,n);else if(n=Mv(t,e,n,r),n!==null){var i=Fe();kt(n,t,r,i),ry(n,e,r)}}function g1(t,e,n){var r=Hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ty(t))ny(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var l=e.interleaved;l===null?(i.next=i,Cf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Mv(t,e,i,r),n!==null&&(i=Fe(),kt(n,t,r,i),ry(n,e,r))}}function ty(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function ny(t,e){Ns=Ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ry(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}var qa={readContext:pt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},_1={readContext:pt,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ya(4194308,4,qv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return ya(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=m1.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:Gp,useDebugValue:Af,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=Gp(!1),e=t[0];return t=p1.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Dt();if(re){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Ce===null)throw Error(T(349));Pr&30||$v(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kp(Bv.bind(null,r,s,t),[t]),r.flags|=2048,no(9,Wv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dt(),e=Ce.identifierPrefix;if(re){var n=Xt,r=Qt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=h1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},v1={readContext:pt,useCallback:Xv,useContext:pt,useEffect:Rf,useImperativeHandle:Qv,useInsertionEffect:Kv,useLayoutEffect:Yv,useMemo:Jv,useReducer:jc,useRef:Gv,useState:function(){return jc(to)},useDebugValue:Af,useDeferredValue:function(t){var e=mt();return Zv(e,ge.memoizedState,t)},useTransition:function(){var t=jc(to)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:zv,useId:ey,unstable_isNewReconciler:!1},y1={readContext:pt,useCallback:Xv,useContext:pt,useEffect:Rf,useImperativeHandle:Qv,useInsertionEffect:Kv,useLayoutEffect:Yv,useMemo:Jv,useReducer:Uc,useRef:Gv,useState:function(){return Uc(to)},useDebugValue:Af,useDeferredValue:function(t){var e=mt();return ge===null?e.memoizedState=t:Zv(e,ge.memoizedState,t)},useTransition:function(){var t=Uc(to)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:zv,useId:ey,unstable_isNewReconciler:!1};function wt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Hn(t),s=nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(kt(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Hn(t),s=nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bn(t,s,i),e!==null&&(kt(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=Hn(t),i=nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bn(t,i,r),e!==null&&(kt(e,t,r,n),_a(e,t,r))}};function Yp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,r)||!Ys(i,s):!0}function iy(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Ke(e)?xr:Oe.current,r=e.contextTypes,s=(r=r!=null)?ki(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Hu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Ke(e)?xr:Oe.current,i.context=ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jl.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bi(t,e){try{var n="",r=e;do n+=KS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function sy(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xa||(Xa=!0,nd=r),Gu(t,e)},n}function oy(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new w1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=D1.bind(null,t,e,n),e.then(t,t))}function Xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,Bn(n,e,1))),n.lanes|=1),t)}var E1=mn.ReactCurrentOwner,Be=!1;function Le(t,e,n,r){e.child=t===null?Lv(e,null,n,r):Ni(e,t.child,n,r)}function Zp(t,e,n,r,i){n=n.render;var s=e.ref;return _i(e,i),r=Pf(t,e,n,r,s,i),n=bf(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(re&&n&&_f(e),e.flags|=1,Le(t,e,r,i),e.child)}function em(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ay(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(o,r)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ay(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ys(s,r)&&t.ref===e.ref)if(Be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Be=!0);else return e.lanes=t.lanes,cn(t,e,i)}return Ku(t,e,n,r,i)}function ly(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(li,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(li,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(li,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(li,Xe),Xe|=r;return Le(t,e,i,n),e.child}function cy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,r,i){var s=Ke(n)?xr:Oe.current;return s=ki(e,s),_i(e,i),n=Pf(t,e,n,r,s,i),r=bf(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(re&&r&&_f(e),e.flags|=1,Le(t,e,n,i),e.child)}function tm(t,e,n,r,i){if(Ke(n)){var s=!0;$a(e)}else s=!1;if(_i(e,i),e.stateNode===null)wa(t,e),iy(e,n,r),Hu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Ke(n)?xr:Oe.current,c=ki(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&qp(e,o,r,c),xn=!1;var f=e.memoizedState;o.state=f,Ga(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ge.current||xn?(typeof d=="function"&&(Vu(e,n,d,r),l=e.memoizedState),(a=xn||Yp(e,n,a,r,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:wt(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ke(n)?xr:Oe.current,l=ki(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&qp(e,o,r,l),xn=!1,f=e.memoizedState,o.state=f,Ga(e,r,o,i);var v=e.memoizedState;a!==u||f!==v||Ge.current||xn?(typeof _=="function"&&(Vu(e,n,_,r),v=e.memoizedState),(c=xn||Yp(e,n,c,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Yu(t,e,n,r,s,i)}function Yu(t,e,n,r,i,s){cy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zp(e,n,!1),cn(t,e,s);r=e.stateNode,E1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,a,s)):Le(t,e,a,s),e.memoizedState=r.state,i&&zp(e,n,!0),e.child}function uy(t){var e=t.stateNode;e.pendingContext?Up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Up(t,e.context,!1),Tf(t,e.containerInfo)}function nm(t,e,n,r,i){return xi(),yf(i),e.flags|=256,Le(t,e,n,r),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function dy(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(oe,i&1),t===null)return Wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$l(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=qu,t):Of(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return S1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gn(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qu,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Of(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ra(t,e,n,r){return r!==null&&yf(r),Ni(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function S1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zc(Error(T(422))),ra(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$l({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=Qu(o),e.memoizedState=qu,s);if(!(e.mode&1))return ra(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=zc(s,r,void 0),ra(t,e,o,r)}if(a=(o&t.childLanes)!==0,Be||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ln(t,i),kt(r,t,i,-1))}return Uf(),r=zc(Error(T(421))),ra(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=L1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=Wn(i.nextSibling),et=e,re=!0,St=null,t!==null&&(lt[ct++]=Qt,lt[ct++]=Xt,lt[ct++]=Nr,Qt=t.id,Xt=t.overflow,Nr=e),e=Of(e,r.children),e.flags|=4096,e)}function rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bu(t.return,e,n)}function $c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,n,e);else if(t.tag===19)rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ka(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ka(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function C1(t,e,n){switch(e.tag){case 3:uy(e),xi();break;case 5:jv(e);break;case 1:Ke(e.type)&&$a(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(Va,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?dy(t,e,n):(J(oe,oe.current&1),t=cn(t,e,n),t!==null?t.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,ly(t,e,n)}return cn(t,e,n)}var hy,Xu,py,my;hy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};py=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr($t.current);var s=null;switch(n){case"input":i=yu(t,i),r=yu(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Su(t,i),r=Su(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ua)}Iu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($s.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($s.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};my=function(t,e,n,r){n!==r&&(e.flags|=4)};function as(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function I1(t,e,n){var r=e.pendingProps;switch(vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Ke(e.type)&&za(),Re(e),null;case 3:return r=e.stateNode,Pi(),ee(Ge),ee(Oe),xf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,St!==null&&(sd(St),St=null))),Xu(t,e),Re(e),null;case 5:kf(e);var i=yr(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)py(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Re(e),null}if(t=yr($t.current),ta(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mt]=e,r[Xs]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<vs.length;i++)Z(vs[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":fp(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":pp(r,s),Z("invalid",r)}Iu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ea(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ea(r.textContent,a,t),i=["children",""+a]):$s.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":Go(r),hp(r,s,!0);break;case"textarea":Go(r),mp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ua)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[Xs]=r,hy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tu(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<vs.length;i++)Z(vs[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":fp(t,r),i=yu(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),Z("invalid",t);break;case"textarea":pp(t,r),i=Su(t,r),Z("invalid",t);break;default:i=r}Iu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ws(t,l):typeof l=="number"&&Ws(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($s.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&nf(t,s,l,o))}switch(n){case"input":Go(t),hp(t,r,!1);break;case"textarea":Go(t),mp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)my(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=yr(Zs.current),yr($t.current),ta(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(s=r.nodeValue!==n)&&(t=et,t!==null))switch(t.tag){case 3:ea(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ea(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return Re(e),null;case 13:if(ee(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Je!==null&&e.mode&1&&!(e.flags&128))Ov(),xi(),e.flags|=98560,s=!1;else if(s=ta(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Mt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else St!==null&&(sd(St),St=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ye===0&&(ye=3):Uf())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return Pi(),Xu(t,e),t===null&&qs(e.stateNode.containerInfo),Re(e),null;case 10:return Sf(e.type._context),Re(e),null;case 17:return Ke(e.type)&&za(),Re(e),null;case 19:if(ee(oe),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)as(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ka(t),o!==null){for(e.flags|=128,as(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>Ri&&(e.flags|=128,r=!0,as(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ka(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),as(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Re(e),null}else 2*fe()-s.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,as(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function T1(t,e){switch(vf(e),e.tag){case 1:return Ke(e.type)&&za(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(),ee(Ge),ee(Oe),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(ee(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(oe),null;case 4:return Pi(),null;case 10:return Sf(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var ia=!1,Ae=!1,k1=typeof WeakSet=="function"?WeakSet:Set,b=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Ju(t,e,n){try{n()}catch(r){ce(t,e,r)}}var im=!1;function x1(t,e){if(Lu=Ma,t=wv(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var _;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)f=u,u=_;for(;;){if(u===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(_=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mu={focusedElem:t,selectionRange:n},Ma=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:wt(e.type,w),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(y){ce(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=im,im=!1,v}function Ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ju(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gy(t){var e=t.alternate;e!==null&&(t.alternate=null,gy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[Xs],delete e[Uu],delete e[c1],delete e[u1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _y(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ua));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var Ie=null,Et=!1;function Cn(t,e,n){for(n=n.child;n!==null;)vy(t,e,n),n=n.sibling}function vy(t,e,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Ae||ai(n,e);case 6:var r=Ie,i=Et;Ie=null,Cn(t,e,n),Ie=r,Et=i,Ie!==null&&(Et?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Et?(t=Ie,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),Gs(t)):Dc(Ie,n.stateNode));break;case 4:r=Ie,i=Et,Ie=n.stateNode.containerInfo,Et=!0,Cn(t,e,n),Ie=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ju(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Ae&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Cn(t,e,n),Ae=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new k1),e.forEach(function(r){var i=M1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,Et=!1;break e;case 3:Ie=a.stateNode.containerInfo,Et=!0;break e;case 4:Ie=a.stateNode.containerInfo,Et=!0;break e}a=a.return}if(Ie===null)throw Error(T(160));vy(s,o,i),Ie=null,Et=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yy(e,t),e=e.sibling}function yy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),At(t),r&4){try{Ps(3,t,t.return),Ul(3,t)}catch(w){ce(t,t.return,w)}try{Ps(5,t,t.return)}catch(w){ce(t,t.return,w)}}break;case 1:yt(e,t),At(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(yt(e,t),At(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(w){ce(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$_(i,s),Tu(a,o);var c=Tu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?G_(i,u):d==="dangerouslySetInnerHTML"?V_(i,u):d==="children"?Ws(i,u):nf(i,d,u,c)}switch(a){case"input":wu(i,s);break;case"textarea":W_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?hi(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xs]=s}catch(w){ce(t,t.return,w)}}break;case 6:if(yt(e,t),At(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ce(t,t.return,w)}}break;case 3:if(yt(e,t),At(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gs(e.containerInfo)}catch(w){ce(t,t.return,w)}break;case 4:yt(e,t),At(t);break;case 13:yt(e,t),At(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mf=fe())),r&4&&om(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(c=Ae)||d,yt(e,t),Ae=c):yt(e,t),At(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(u=b=d;b!==null;){switch(f=b,_=f.child,f.tag){case 0:case 11:case 14:case 15:Ps(4,f,f.return);break;case 1:ai(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:ai(f,f.return);break;case 22:if(f.memoizedState!==null){lm(u);continue}}_!==null?(_.return=f,b=_):lm(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=H_("display",o))}catch(w){ce(t,t.return,w)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){ce(t,t.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:yt(e,t),At(t),r&4&&om(t);break;case 21:break;default:yt(e,t),At(t)}}function At(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_y(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ws(i,""),r.flags&=-33);var s=sm(t);td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sm(t);ed(t,a,o);break;default:throw Error(T(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function N1(t,e,n){b=t,wy(t)}function wy(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ia;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=ia;var c=Ae;if(ia=o,(Ae=l)&&!c)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?cm(i):l!==null?(l.return=o,b=l):cm(i);for(;s!==null;)b=s,wy(s),s=s.sibling;b=i,ia=a,Ae=c}am(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):am(t)}}function am(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Gs(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ae||e.flags&512&&Zu(e)}catch(f){ce(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function lm(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function cm(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Zu(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Zu(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var P1=Math.ceil,Qa=mn.ReactCurrentDispatcher,Df=mn.ReactCurrentOwner,ft=mn.ReactCurrentBatchConfig,B=0,Ce=null,pe=null,ke=0,Xe=0,li=or(0),ye=0,ro=null,br=0,zl=0,Lf=0,bs=null,We=null,Mf=0,Ri=1/0,Yt=null,Xa=!1,nd=null,Vn=null,sa=!1,Ln=null,Ja=0,Rs=0,rd=null,Ea=-1,Sa=0;function Fe(){return B&6?fe():Ea!==-1?Ea:Ea=fe()}function Hn(t){return t.mode&1?B&2&&ke!==0?ke&-ke:f1.transition!==null?(Sa===0&&(Sa=iv()),Sa):(t=K,t!==0||(t=window.event,t=t===void 0?16:dv(t.type)),t):1}function kt(t,e,n,r){if(50<Rs)throw Rs=0,rd=null,Error(T(185));Co(t,n,r),(!(B&2)||t!==Ce)&&(t===Ce&&(!(B&2)&&(zl|=n),ye===4&&Pn(t,ke)),Ye(t,r),n===1&&B===0&&!(e.mode&1)&&(Ri=fe()+500,Ml&&ar()))}function Ye(t,e){var n=t.callbackNode;fC(t,e);var r=La(t,t===Ce?ke:0);if(r===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?d1(um.bind(null,t)):bv(um.bind(null,t)),a1(function(){!(B&6)&&ar()}),n=null;else{switch(sv(r)){case 1:n=lf;break;case 4:n=nv;break;case 16:n=Da;break;case 536870912:n=rv;break;default:n=Da}n=Ny(n,Ey.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ey(t,e){if(Ea=-1,Sa=0,B&6)throw Error(T(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=La(t,t===Ce?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Za(t,r);else{e=r;var i=B;B|=2;var s=Cy();(Ce!==t||ke!==e)&&(Yt=null,Ri=fe()+500,Sr(t,e));do try{A1();break}catch(a){Sy(t,a)}while(!0);Ef(),Qa.current=s,B=i,pe!==null?e=0:(Ce=null,ke=0,e=ye)}if(e!==0){if(e===2&&(i=bu(t),i!==0&&(r=i,e=id(t,i))),e===1)throw n=ro,Sr(t,0),Pn(t,r),Ye(t,fe()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!b1(i)&&(e=Za(t,r),e===2&&(s=bu(t),s!==0&&(r=s,e=id(t,s))),e===1))throw n=ro,Sr(t,0),Pn(t,r),Ye(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:hr(t,We,Yt);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=Mf+500-fe(),10<e)){if(La(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ju(hr.bind(null,t,We,Yt),e);break}hr(t,We,Yt);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P1(r/1960))-r,10<r){t.timeoutHandle=ju(hr.bind(null,t,We,Yt),r);break}hr(t,We,Yt);break;case 5:hr(t,We,Yt);break;default:throw Error(T(329))}}}return Ye(t,fe()),t.callbackNode===n?Ey.bind(null,t):null}function id(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Za(t,e),t!==2&&(e=We,We=n,e!==null&&sd(e)),t}function sd(t){We===null?We=t:We.push.apply(We,t)}function b1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~Lf,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tt(e),r=1<<n;t[n]=-1,e&=~r}}function um(t){if(B&6)throw Error(T(327));vi();var e=La(t,0);if(!(e&1))return Ye(t,fe()),null;var n=Za(t,e);if(t.tag!==0&&n===2){var r=bu(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=ro,Sr(t,0),Pn(t,e),Ye(t,fe()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,We,Yt),Ye(t,fe()),null}function Ff(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Ri=fe()+500,Ml&&ar())}}function Rr(t){Ln!==null&&Ln.tag===0&&!(B&6)&&vi();var e=B;B|=1;var n=ft.transition,r=K;try{if(ft.transition=null,K=1,t)return t()}finally{K=r,ft.transition=n,B=e,!(B&6)&&ar()}}function jf(){Xe=li.current,ee(li)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o1(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:Pi(),ee(Ge),ee(Oe),xf();break;case 5:kf(r);break;case 4:Pi();break;case 13:ee(oe);break;case 19:ee(oe);break;case 10:Sf(r.type._context);break;case 22:case 23:jf()}n=n.return}if(Ce=t,pe=t=Gn(t.current,null),ke=Xe=e,ye=0,ro=null,Lf=zl=br=0,We=bs=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vr=null}return t}function Sy(t,e){do{var n=pe;try{if(Ef(),va.current=qa,Ya){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ya=!1}if(Pr=0,Ee=ge=ae=null,Ns=!1,eo=0,Df.current=null,n===null||n.return===null){ye=1,ro=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Xp(o);if(_!==null){_.flags&=-257,Jp(_,o,a,s,e),_.mode&1&&Qp(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Qp(s,c,e),Uf();break e}l=Error(T(426))}}else if(re&&a.mode&1){var E=Xp(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Jp(E,o,a,s,e),yf(bi(l,a));break e}}s=l=bi(l,a),ye!==4&&(ye=2),bs===null?bs=[s]:bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=sy(s,l,e);Vp(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vn===null||!Vn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=oy(s,a,e);Vp(s,y);break e}}s=s.return}while(s!==null)}Ty(n)}catch(I){e=I,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Cy(){var t=Qa.current;return Qa.current=qa,t===null?qa:t}function Uf(){(ye===0||ye===3||ye===2)&&(ye=4),Ce===null||!(br&268435455)&&!(zl&268435455)||Pn(Ce,ke)}function Za(t,e){var n=B;B|=2;var r=Cy();(Ce!==t||ke!==e)&&(Yt=null,Sr(t,e));do try{R1();break}catch(i){Sy(t,i)}while(!0);if(Ef(),B=n,Qa.current=r,pe!==null)throw Error(T(261));return Ce=null,ke=0,ye}function R1(){for(;pe!==null;)Iy(pe)}function A1(){for(;pe!==null&&!rC();)Iy(pe)}function Iy(t){var e=xy(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Ty(t):pe=e,Df.current=null}function Ty(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=T1(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,pe=null;return}}else if(n=I1(n,e,Xe),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ye===0&&(ye=5)}function hr(t,e,n){var r=K,i=ft.transition;try{ft.transition=null,K=1,O1(t,e,n,r)}finally{ft.transition=i,K=r}return null}function O1(t,e,n,r){do vi();while(Ln!==null);if(B&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hC(t,s),t===Ce&&(pe=Ce=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sa||(sa=!0,Ny(Da,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=K;K=1;var a=B;B|=4,Df.current=null,x1(t,n),yy(n,t),ZC(Mu),Ma=!!Lu,Mu=Lu=null,t.current=n,N1(n),iC(),B=a,K=o,ft.transition=s}else t.current=n;if(sa&&(sa=!1,Ln=t,Ja=i),s=t.pendingLanes,s===0&&(Vn=null),aC(n.stateNode),Ye(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,t=nd,nd=null,t;return Ja&1&&t.tag!==0&&vi(),s=t.pendingLanes,s&1?t===rd?Rs++:(Rs=0,rd=t):Rs=0,ar(),null}function vi(){if(Ln!==null){var t=sv(Ja),e=ft.transition,n=K;try{if(ft.transition=null,K=16>t?16:t,Ln===null)var r=!1;else{if(t=Ln,Ln=null,Ja=0,B&6)throw Error(T(331));var i=B;for(B|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(b=c;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Ps(8,d,s)}var u=d.child;if(u!==null)u.return=d,b=u;else for(;b!==null;){d=b;var f=d.sibling,_=d.return;if(gy(d),d===c){b=null;break}if(f!==null){f.return=_,b=f;break}b=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ps(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,b=g;else e:for(o=p;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(I){ce(a,a.return,I)}if(a===o){b=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,b=y;break e}b=a.return}}if(B=i,ar(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Rl,t)}catch{}r=!0}return r}finally{K=n,ft.transition=e}}return!1}function dm(t,e,n){e=bi(n,e),e=sy(t,e,1),t=Bn(t,e,1),e=Fe(),t!==null&&(Co(t,1,e),Ye(t,e))}function ce(t,e,n){if(t.tag===3)dm(t,t,n);else for(;e!==null;){if(e.tag===3){dm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){t=bi(n,t),t=oy(e,t,1),e=Bn(e,t,1),t=Fe(),e!==null&&(Co(e,1,t),Ye(e,t));break}}e=e.return}}function D1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(ke&n)===n&&(ye===4||ye===3&&(ke&130023424)===ke&&500>fe()-Mf?Sr(t,0):Lf|=n),Ye(t,e)}function ky(t,e){e===0&&(t.mode&1?(e=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):e=1);var n=Fe();t=ln(t,e),t!==null&&(Co(t,e,n),Ye(t,n))}function L1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ky(t,n)}function M1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),ky(t,n)}var xy;xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)Be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Be=!1,C1(t,e,n);Be=!!(t.flags&131072)}else Be=!1,re&&e.flags&1048576&&Rv(e,Ba,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wa(t,e),t=e.pendingProps;var i=ki(e,Oe.current);_i(e,n),i=Pf(null,e,r,t,i,n);var s=bf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,If(e),i.updater=jl,e.stateNode=i,i._reactInternals=e,Hu(e,r,t,n),e=Yu(null,e,r,!0,s,n)):(e.tag=0,re&&s&&_f(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=j1(r),t=wt(r,t),i){case 0:e=Ku(null,e,r,t,n);break e;case 1:e=tm(null,e,r,t,n);break e;case 11:e=Zp(null,e,r,t,n);break e;case 14:e=em(null,e,r,wt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),Ku(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),tm(t,e,r,i,n);case 3:e:{if(uy(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fv(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bi(Error(T(423)),e),e=nm(t,e,r,n,i);break e}else if(r!==i){i=bi(Error(T(424)),e),e=nm(t,e,r,n,i);break e}else for(Je=Wn(e.stateNode.containerInfo.firstChild),et=e,re=!0,St=null,n=Lv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=cn(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return jv(e),t===null&&Wu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fu(r,i)?o=null:s!==null&&Fu(r,s)&&(e.flags|=32),cy(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Wu(e),null;case 13:return dy(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),Zp(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(Va,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Ge.current){e=cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_i(e,n),i=pt(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=wt(r,e.pendingProps),i=wt(r.type,i),em(t,e,r,i,n);case 15:return ay(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),wa(t,e),e.tag=1,Ke(r)?(t=!0,$a(e)):t=!1,_i(e,n),iy(e,r,i),Hu(e,r,i,n),Yu(null,e,r,!0,t,n);case 19:return fy(t,e,n);case 22:return ly(t,e,n)}throw Error(T(156,e.tag))};function Ny(t,e){return tv(t,e)}function F1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,e,n,r){return new F1(t,e,n,r)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j1(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===of)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return Cr(n.children,i,s,e);case rf:o=8,i|=8;break;case mu:return t=ut(12,n,e,i|2),t.elementType=mu,t.lanes=s,t;case gu:return t=ut(13,n,e,i),t.elementType=gu,t.lanes=s,t;case _u:return t=ut(19,n,e,i),t.elementType=_u,t.lanes=s,t;case j_:return $l(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M_:o=10;break e;case F_:o=9;break e;case sf:o=11;break e;case of:o=14;break e;case kn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=ut(7,t,r,e),t.lanes=n,t}function $l(t,e,n,r){return t=ut(22,t,r,e),t.elementType=j_,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=ut(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,i,s,o,a,l){return t=new U1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function z1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Py(t){if(!t)return Jn;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Ke(n))return Pv(t,n,e)}return e}function by(t,e,n,r,i,s,o,a,l){return t=$f(n,r,!0,t,i,s,o,a,l),t.context=Py(null),n=t.current,r=Fe(),i=Hn(n),s=nn(r,i),s.callback=e??null,Bn(n,s,i),t.current.lanes=i,Co(t,i,r),Ye(t,r),t}function Wl(t,e,n,r){var i=e.current,s=Fe(),o=Hn(i);return n=Py(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bn(i,e,o),t!==null&&(kt(t,i,o,s),_a(t,i,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wf(t,e){fm(t,e),(t=t.alternate)&&fm(t,e)}function $1(){return null}var Ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bf(t){this._internalRoot=t}Bl.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Wl(t,e,null,null)};Bl.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Wl(null,t,null,null)}),e[an]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nn.length&&e!==0&&e<Nn[n].priority;n++);Nn.splice(n,0,t),n===0&&uv(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function W1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=el(o);s.call(c)}}var o=by(e,r,t,0,null,!1,!1,"",hm);return t._reactRootContainer=o,t[an]=o.current,qs(t.nodeType===8?t.parentNode:t),Rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=el(l);a.call(c)}}var l=$f(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=l,t[an]=l.current,qs(t.nodeType===8?t.parentNode:t),Rr(function(){Wl(e,l,n,r)}),l}function Hl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=el(o);a.call(l)}}Wl(e,o,t,i)}else o=W1(n,e,t,i,r);return el(o)}ov=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(cf(e,n|1),Ye(e,fe()),!(B&6)&&(Ri=fe()+500,ar()))}break;case 13:Rr(function(){var r=ln(t,1);if(r!==null){var i=Fe();kt(r,t,1,i)}}),Wf(t,1)}};uf=function(t){if(t.tag===13){var e=ln(t,134217728);if(e!==null){var n=Fe();kt(e,t,134217728,n)}Wf(t,134217728)}};av=function(t){if(t.tag===13){var e=Hn(t),n=ln(t,e);if(n!==null){var r=Fe();kt(n,t,e,r)}Wf(t,e)}};lv=function(){return K};cv=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};xu=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ll(r);if(!i)throw Error(T(90));z_(r),wu(r,i)}}}break;case"textarea":W_(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};q_=Ff;Q_=Rr;var B1={usingClientEntryPoint:!1,Events:[To,ni,Ll,K_,Y_,Ff]},ls={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V1={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z_(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Rl=oa.inject(V1),zt=oa}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;st.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(T(200));return z1(t,e,null,n)};st.createRoot=function(t,e){if(!Vf(t))throw Error(T(299));var n=!1,r="",i=Ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,i),t[an]=e.current,qs(t.nodeType===8?t.parentNode:t),new Bf(e)};st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Z_(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t){return Rr(t)};st.hydrate=function(t,e,n){if(!Vl(e))throw Error(T(200));return Hl(null,t,e,!0,n)};st.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ry;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=by(e,null,t,1,n??null,i,!1,s,o),t[an]=e.current,qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bl(e)};st.render=function(t,e,n){if(!Vl(e))throw Error(T(200));return Hl(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(T(40));return t._reactRootContainer?(Rr(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1};st.unstable_batchedUpdates=Ff;st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Hl(t,e,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function Ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ay)}catch(t){console.error(t)}}Ay(),A_.exports=st;var H1=A_.exports,Oy,pm=H1;Oy=pm.createRoot,pm.hydrateRoot;const G1="_style1_po0e3_33",K1="_fadeIn_po0e3_1",Y1="_style2_po0e3_261",q1="_btn_style_po0e3_51",Q1="_backbutton_style_po0e3_299",X1="_input_group_po0e3_73",J1="_FieldError_po0e3_109",Z1="_error_po0e3_121",eI="_App_po0e3_15",tI="_hidden_po0e3_537",nI="_getStartedContainer_po0e3_547",rI="_getStartedButton_po0e3_567",iI="_darken_po0e3_613",ne={style1:G1,fadeIn:K1,style2:Y1,btn_style:q1,backbutton_style:Q1,input_group:X1,FieldError:J1,error:Z1,App:eI,hidden:tI,getStartedContainer:nI,getStartedButton:rI,darken:iI},Dy=S.createContext(),sI=({children:t})=>{const[e,n]=S.useState(!1),r=()=>{n(i=>!i)};return h.jsx(Dy.Provider,{value:{isDarkTheme:e,toggleTheme:r},children:t})},gn=()=>S.useContext(Dy);/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},io.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const mm="popstate";function oI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Br(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),od("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Ly(s))}function r(i,s){Hf(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return lI(e,n,r,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aI(){return Math.random().toString(36).substr(2,8)}function gm(t,e){return{usr:t.state,key:t.key,idx:e}}function od(t,e,n,r){return n===void 0&&(n=null),io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Br(e):e,{state:n,key:e&&e.key||r||aI()})}function Ly(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Br(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Mn.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(io({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=Mn.Pop;let E=d(),m=E==null?null:E-c;c=E,l&&l({action:a,location:w.location,delta:m})}function f(E,m){a=Mn.Push;let p=od(w.location,E,m);n&&n(p,E),c=d()+1;let g=gm(p,c),y=w.createHref(p);try{o.pushState(g,"",y)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(y)}s&&l&&l({action:a,location:w.location,delta:1})}function _(E,m){a=Mn.Replace;let p=od(w.location,E,m);n&&n(p,E),c=d();let g=gm(p,c),y=w.createHref(p);o.replaceState(g,"",y),s&&l&&l({action:a,location:w.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Ly(E);return p=p.replace(/ $/,"%20"),me(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mm,u),l=E,()=>{i.removeEventListener(mm,u),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:_,go(E){return o.go(E)}};return w}var _m;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_m||(_m={}));function cI(t,e,n){return n===void 0&&(n="/"),uI(t,e,n,!1)}function uI(t,e,n,r){let i=typeof e=="string"?Br(e):e,s=jy(i.pathname||"/",n);if(s==null)return null;let o=My(t);dI(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=SI(s);a=wI(o[l],c,r)}return a}function My(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ir([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),My(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:vI(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Fy(s.path))i(s,o,l)}),e}function Fy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function dI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fI=/^:[\w-]+$/,hI=3,pI=2,mI=1,gI=10,_I=-2,vm=t=>t==="*";function vI(t,e){let n=t.split("/"),r=n.length;return n.some(vm)&&(r+=_I),e&&(r+=pI),n.filter(i=>!vm(i)).reduce((i,s)=>i+(fI.test(s)?hI:s===""?mI:gI),r)}function yI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function wI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",u=ym({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ym({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ir([s,u.pathname]),pathnameBase:kI(Ir([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=Ir([s,u.pathnameBase]))}return o}function ym(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:f,isOptional:_}=d;if(f==="*"){let w=a[u]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[u];return _&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function EI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jy(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Br(t):t;return{pathname:n?n.startsWith("/")?n:II(n,e):e,search:xI(r),hash:NI(i)}}function II(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function TI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uy(t,e){let n=TI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Br(t):(i=io({},t),me(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),u-=1;i.pathname=f.join("/")}a=u>=0?e[u]:"/"}let l=CI(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),kI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $y=["post","put","patch","delete"];new Set($y);const bI=["get",...$y];new Set(bI);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},so.apply(this,arguments)}const Gf=S.createContext(null),RI=S.createContext(null),xo=S.createContext(null),Gl=S.createContext(null),lr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Wy=S.createContext(null);function No(){return S.useContext(Gl)!=null}function Kf(){return No()||me(!1),S.useContext(Gl).location}function By(t){S.useContext(xo).static||S.useLayoutEffect(t)}function _t(){let{isDataRoute:t}=S.useContext(lr);return t?VI():AI()}function AI(){No()||me(!1);let t=S.useContext(Gf),{basename:e,future:n,navigator:r}=S.useContext(xo),{matches:i}=S.useContext(lr),{pathname:s}=Kf(),o=JSON.stringify(Uy(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return By(()=>{a.current=!0}),S.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=zy(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Ir([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,s,t])}function Kl(){let{matches:t}=S.useContext(lr),e=t[t.length-1];return e?e.params:{}}function OI(t,e){return DI(t,e)}function DI(t,e,n,r){No()||me(!1);let{navigator:i}=S.useContext(xo),{matches:s}=S.useContext(lr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Kf(),d;if(e){var u;let E=typeof e=="string"?Br(e):e;l==="/"||(u=E.pathname)!=null&&u.startsWith(l)||me(!1),d=E}else d=c;let f=d.pathname||"/",_=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");_="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=cI(t,{pathname:_}),w=UI(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Ir([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Ir([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&w?S.createElement(Gl.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mn.Pop}},w):w}function LI(){let t=BI(),e=PI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const MI=S.createElement(LI,null);class FI extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(lr.Provider,{value:this.props.routeContext},S.createElement(Wy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jI(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Gf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(lr.Provider,{value:e},r)}function UI(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||me(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:_}=n,v=u.route.loader&&f[u.route.id]===void 0&&(!_||_[u.route.id]===void 0);if(u.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let _,v=!1,w=null,E=null;n&&(_=a&&u.route.id?a[u.route.id]:void 0,w=u.route.errorElement||MI,l&&(c<0&&f===0?(v=!0,E=null):c===f&&(v=!0,E=u.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let g;return _?g=w:v?g=E:u.route.Component?g=S.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=d,S.createElement(jI,{match:u,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?S.createElement(FI,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Vy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Vy||{}),tl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tl||{});function zI(t){let e=S.useContext(Gf);return e||me(!1),e}function $I(t){let e=S.useContext(RI);return e||me(!1),e}function WI(t){let e=S.useContext(lr);return e||me(!1),e}function Hy(t){let e=WI(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function BI(){var t;let e=S.useContext(Wy),n=$I(tl.UseRouteError),r=Hy(tl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function VI(){let{router:t}=zI(Vy.UseNavigateStable),e=Hy(tl.UseNavigateStable),n=S.useRef(!1);return By(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,so({fromRouteId:e},s)))},[t,e])}const wm={};function HI(t,e){wm[e]||(wm[e]=!0,console.warn(e))}const Em=(t,e,n)=>HI(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function GI(t,e){t!=null&&t.v7_startTransition||Em("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Em("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Sm(t){let{to:e,replace:n,state:r,relative:i}=t;No()||me(!1);let{future:s,static:o}=S.useContext(xo),{matches:a}=S.useContext(lr),{pathname:l}=Kf(),c=_t(),d=zy(e,Uy(a,s.v7_relativeSplatPath),l,i==="path"),u=JSON.stringify(d);return S.useEffect(()=>c(JSON.parse(u),{replace:n,state:r,relative:i}),[c,u,i,n,r]),null}function De(t){me(!1)}function KI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:s,static:o=!1,future:a}=t;No()&&me(!1);let l=e.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:s,static:o,future:so({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Br(r));let{pathname:d="/",search:u="",hash:f="",state:_=null,key:v="default"}=r,w=S.useMemo(()=>{let E=jy(d,l);return E==null?null:{location:{pathname:E,search:u,hash:f,state:_,key:v},navigationType:i}},[l,d,u,f,_,v,i]);return w==null?null:S.createElement(xo.Provider,{value:c},S.createElement(Gl.Provider,{children:n,value:w}))}function Cm(t){let{children:e,location:n}=t;return OI(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,ad(r.props.children,s));return}r.type!==De&&me(!1),!r.props.index||!r.props.children||me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const YI="6";try{window.__reactRouterVersion=YI}catch{}const qI="startTransition",Im=DS[qI];function QI(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=oI({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=S.useCallback(u=>{c&&Im?Im(()=>l(u)):l(u)},[l,c]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>GI(r),[r]),S.createElement(KI,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Tm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Tm||(Tm={}));var km;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(km||(km={}));var Gy={exports:{}},XI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JI=XI,ZI=JI;function Ky(){}function Yy(){}Yy.resetWarningCache=Ky;var eT=function(){function t(r,i,s,o,a,l){if(l!==ZI){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Yy,resetWarningCache:Ky};return n.PropTypes=n,n};Gy.exports=eT();var tT=Gy.exports;const F=w_(tT);var xm={};/**
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
 */const qy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw Hi(e)},Hi=function(t){return new Error("Firebase Database ("+qy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Qy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),r.push(n[d],n[u],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new rT;const f=s<<2|a>>4;if(r.push(f),c!==64){const _=a<<4&240|c>>2;if(r.push(_),u!==64){const v=c<<6&192|u;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xy=function(t){const e=Qy(t);return Yf.encodeByteArray(e,!0)},nl=function(t){return Xy(t).replace(/\./g,"")},rl=function(t){try{return Yf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iT(t){return Jy(void 0,t)}function Jy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sT(n)||(t[n]=Jy(t[n],e[n]));return t}function sT(t){return t!=="__proto__"}/**
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
 */function oT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aT=()=>oT().__FIREBASE_DEFAULTS__,lT=()=>{if(typeof process>"u"||typeof xm>"u")return;const t=xm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rl(t[1]);return e&&JSON.parse(e)},qf=()=>{try{return aT()||lT()||cT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zy=t=>{var e,n;return(n=(e=qf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uT=t=>{const e=Zy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},e0=()=>{var t;return(t=qf())===null||t===void 0?void 0:t.config},t0=t=>{var e;return(e=qf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Po{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nl(JSON.stringify(n)),nl(JSON.stringify(o)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function fT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function n0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function r0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hT(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i0(){return qy.NODE_ADMIN===!0}function s0(){try{return typeof indexedDB=="object"}catch{return!1}}function o0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mT="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mT,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,a,r)}}function gT(t,e){return t.replace(_T,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _T=/\{\$([^}]+)}/g;/**
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
 */function oo(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const a0=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=oo(rl(s[0])||""),n=oo(rl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},vT=function(t){const e=a0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yT=function(t){const e=a0(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ld(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ao(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nm(s)&&Nm(o)){if(!ao(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nm(t){return t!==null&&typeof t=="object"}/**
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
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class wT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ET(t,e){const n=new ST(t,e);return n.subscribe.bind(n)}class ST{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hc),i.error===void 0&&(i.error=Hc),i.complete===void 0&&(i.complete=Hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hc(){}function Yl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const IT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ql=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const TT=1e3,kT=2,xT=4*60*60*1e3,NT=.5;function Pm(t,e=TT,n=kT){const r=e*Math.pow(n,t),i=Math.round(NT*r*(Math.random()-.5)*2);return Math.min(xT,r+i)}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class PT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Po;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RT(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bT(t){return t===pr?void 0:t}function RT(t){return t.instantiationMode==="EAGER"}/**
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
 */class AT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const OT={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},DT=Y.INFO,LT={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},MT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=DT,this._logHandler=MT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const FT=(t,e)=>e.some(n=>t instanceof n);let bm,Rm;function jT(){return bm||(bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UT(){return Rm||(Rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l0=new WeakMap,cd=new WeakMap,c0=new WeakMap,Gc=new WeakMap,Xf=new WeakMap;function zT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&l0.set(n,t)}).catch(()=>{}),Xf.set(e,t),e}function $T(t){if(cd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WT(t){ud=t(ud)}function BT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return c0.set(r,e.sort?e.sort():[e]),Kn(r)}:UT().includes(t)?function(...e){return t.apply(Kc(this),e),Kn(l0.get(this))}:function(...e){return Kn(t.apply(Kc(this),e))}}function VT(t){return typeof t=="function"?BT(t):(t instanceof IDBTransaction&&$T(t),FT(t,jT())?new Proxy(t,ud):t)}function Kn(t){if(t instanceof IDBRequest)return zT(t);if(Gc.has(t))return Gc.get(t);const e=VT(t);return e!==t&&(Gc.set(t,e),Xf.set(e,t)),e}const Kc=t=>Xf.get(t);function u0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kn(o.result),l.oldVersion,l.newVersion,Kn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const HT=["get","getKey","getAll","getAllKeys","count"],GT=["put","add","delete","clear"],Yc=new Map;function Am(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yc.set(e,s),s}WT(t=>({...t,get:(e,n,r)=>Am(e,n)||t.get(e,n,r),has:(e,n)=>!!Am(e,n)||t.has(e,n)}));/**
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
 */class KT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",Om="0.10.16";/**
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
 */const un=new Ql("@firebase/app"),qT="@firebase/app-compat",QT="@firebase/analytics-compat",XT="@firebase/analytics",JT="@firebase/app-check-compat",ZT="@firebase/app-check",ek="@firebase/auth",tk="@firebase/auth-compat",nk="@firebase/database",rk="@firebase/data-connect",ik="@firebase/database-compat",sk="@firebase/functions",ok="@firebase/functions-compat",ak="@firebase/installations",lk="@firebase/installations-compat",ck="@firebase/messaging",uk="@firebase/messaging-compat",dk="@firebase/performance",fk="@firebase/performance-compat",hk="@firebase/remote-config",pk="@firebase/remote-config-compat",mk="@firebase/storage",gk="@firebase/storage-compat",_k="@firebase/firestore",vk="@firebase/vertexai",yk="@firebase/firestore-compat",wk="firebase",Ek="11.0.2";/**
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
 */const fd="[DEFAULT]",Sk={[dd]:"fire-core",[qT]:"fire-core-compat",[XT]:"fire-analytics",[QT]:"fire-analytics-compat",[ZT]:"fire-app-check",[JT]:"fire-app-check-compat",[ek]:"fire-auth",[tk]:"fire-auth-compat",[nk]:"fire-rtdb",[rk]:"fire-data-connect",[ik]:"fire-rtdb-compat",[sk]:"fire-fn",[ok]:"fire-fn-compat",[ak]:"fire-iid",[lk]:"fire-iid-compat",[ck]:"fire-fcm",[uk]:"fire-fcm-compat",[dk]:"fire-perf",[fk]:"fire-perf-compat",[hk]:"fire-rc",[pk]:"fire-rc-compat",[mk]:"fire-gcs",[gk]:"fire-gcs-compat",[_k]:"fire-fst",[yk]:"fire-fst-compat",[vk]:"fire-vertex","fire-js":"fire-js",[wk]:"fire-js-all"};/**
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
 */const sl=new Map,Ck=new Map,hd=new Map;function Dm(t,e){try{t.container.addComponent(e)}catch(n){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(hd.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,t);for(const n of sl.values())Dm(n,t);for(const n of Ck.values())Dm(n,t);return!0}function Hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t.settings!==void 0}/**
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
 */const Ik={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Vr("app","Firebase",Ik);/**
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
 */class Tk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ki=Ek;function d0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=e0()),!n)throw Yn.create("no-options");const s=sl.get(i);if(s){if(ao(n,s.options)&&ao(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new AT(i);for(const l of hd.values())o.addComponent(l);const a=new Tk(n,r,o);return sl.set(i,a),a}function Jf(t=fd){const e=sl.get(t);if(!e&&t===fd&&e0())return d0();if(!e)throw Yn.create("no-app",{appName:t});return e}function ht(t,e,n){var r;let i=(r=Sk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}Vt(new Pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kk="firebase-heartbeat-database",xk=1,lo="firebase-heartbeat-store";let qc=null;function f0(){return qc||(qc=u0(kk,xk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),qc}async function Nk(t){try{const n=(await f0()).transaction(lo),r=await n.objectStore(lo).get(h0(t));return await n.done,r}catch(e){if(e instanceof Gt)un.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(n.message)}}}async function Lm(t,e){try{const r=(await f0()).transaction(lo,"readwrite");await r.objectStore(lo).put(e,h0(t)),await r.done}catch(n){if(n instanceof Gt)un.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function h0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pk=1024,bk=30*24*60*60*1e3;class Rk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ok(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mm(),{heartbeatsToSend:r,unsentEntries:i}=Ak(this._heartbeatsCache.heartbeats),s=nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return un.warn(n),""}}}function Mm(){return new Date().toISOString().substring(0,10)}function Ak(t,e=Pk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ok{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s0()?o0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fm(t){return nl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dk(t){Vt(new Pt("platform-logger",e=>new KT(e),"PRIVATE")),Vt(new Pt("heartbeat",e=>new Rk(e),"PRIVATE")),ht(dd,Om,t),ht(dd,Om,"esm2017"),ht("fire-js","")}Dk("");var Lk="firebase",Mk="11.0.2";/**
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
 */ht(Lk,Mk,"app");const p0="@firebase/installations",Zf="0.6.11";/**
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
 */const m0=1e4,g0=`w:${Zf}`,_0="FIS_v2",Fk="https://firebaseinstallations.googleapis.com/v1",jk=60*60*1e3,Uk="installations",zk="Installations";/**
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
 */const $k={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ar=new Vr(Uk,zk,$k);function v0(t){return t instanceof Gt&&t.code.includes("request-failed")}/**
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
 */function y0({projectId:t}){return`${Fk}/projects/${t}/installations`}function w0(t){return{token:t.token,requestStatus:2,expiresIn:Bk(t.expiresIn),creationTime:Date.now()}}async function E0(t,e){const r=(await e.json()).error;return Ar.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function S0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Wk(t,{refreshToken:e}){const n=S0(t);return n.append("Authorization",Vk(e)),n}async function C0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Bk(t){return Number(t.replace("s","000"))}function Vk(t){return`${_0} ${t}`}/**
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
 */async function Hk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=y0(t),i=S0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:_0,appId:t.appId,sdkVersion:g0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await C0(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:w0(c.authToken)}}else throw await E0("Create Installation",l)}/**
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
 */function I0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Gk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kk=/^[cdef][\w-]{21}$/,pd="";function Yk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qk(t);return Kk.test(n)?n:pd}catch{return pd}}function qk(t){return Gk(t).substr(0,22)}/**
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
 */function Xl(t){return`${t.appName}!${t.appId}`}/**
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
 */const T0=new Map;function k0(t,e){const n=Xl(t);x0(n,e),Qk(n,e)}function x0(t,e){const n=T0.get(t);if(n)for(const r of n)r(e)}function Qk(t,e){const n=Xk();n&&n.postMessage({key:t,fid:e}),Jk()}let wr=null;function Xk(){return!wr&&"BroadcastChannel"in self&&(wr=new BroadcastChannel("[Firebase] FID Change"),wr.onmessage=t=>{x0(t.data.key,t.data.fid)}),wr}function Jk(){T0.size===0&&wr&&(wr.close(),wr=null)}/**
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
 */const Zk="firebase-installations-database",ex=1,Or="firebase-installations-store";let Qc=null;function eh(){return Qc||(Qc=u0(Zk,ex,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}})),Qc}async function ol(t,e){const n=Xl(t),i=(await eh()).transaction(Or,"readwrite"),s=i.objectStore(Or),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&k0(t,e.fid),e}async function N0(t){const e=Xl(t),r=(await eh()).transaction(Or,"readwrite");await r.objectStore(Or).delete(e),await r.done}async function Jl(t,e){const n=Xl(t),i=(await eh()).transaction(Or,"readwrite"),s=i.objectStore(Or),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&k0(t,a.fid),a}/**
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
 */async function th(t){let e;const n=await Jl(t.appConfig,r=>{const i=tx(r),s=nx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===pd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tx(t){const e=t||{fid:Yk(),registrationStatus:0};return P0(e)}function nx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ar.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ix(t)}:{installationEntry:e}}async function rx(t,e){try{const n=await Hk(t,e);return ol(t.appConfig,n)}catch(n){throw v0(n)&&n.customData.serverCode===409?await N0(t.appConfig):await ol(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ix(t){let e=await jm(t.appConfig);for(;e.registrationStatus===1;)await I0(100),e=await jm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await th(t);return r||n}return e}function jm(t){return Jl(t,e=>{if(!e)throw Ar.create("installation-not-found");return P0(e)})}function P0(t){return sx(t)?{fid:t.fid,registrationStatus:0}:t}function sx(t){return t.registrationStatus===1&&t.registrationTime+m0<Date.now()}/**
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
 */async function ox({appConfig:t,heartbeatServiceProvider:e},n){const r=ax(t,n),i=Wk(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:g0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await C0(()=>fetch(r,a));if(l.ok){const c=await l.json();return w0(c)}else throw await E0("Generate Auth Token",l)}function ax(t,{fid:e}){return`${y0(t)}/${e}/authTokens:generate`}/**
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
 */async function nh(t,e=!1){let n;const r=await Jl(t.appConfig,s=>{if(!b0(s))throw Ar.create("not-registered");const o=s.authToken;if(!e&&ux(o))return s;if(o.requestStatus===1)return n=lx(t,e),s;{if(!navigator.onLine)throw Ar.create("app-offline");const a=fx(s);return n=cx(t,a),a}});return n?await n:r.authToken}async function lx(t,e){let n=await Um(t.appConfig);for(;n.authToken.requestStatus===1;)await I0(100),n=await Um(t.appConfig);const r=n.authToken;return r.requestStatus===0?nh(t,e):r}function Um(t){return Jl(t,e=>{if(!b0(e))throw Ar.create("not-registered");const n=e.authToken;return hx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function cx(t,e){try{const n=await ox(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ol(t.appConfig,r),n}catch(n){if(v0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ol(t.appConfig,r)}throw n}}function b0(t){return t!==void 0&&t.registrationStatus===2}function ux(t){return t.requestStatus===2&&!dx(t)}function dx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jk}function fx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hx(t){return t.requestStatus===1&&t.requestTime+m0<Date.now()}/**
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
 */async function px(t){const e=t,{installationEntry:n,registrationPromise:r}=await th(e);return r?r.catch(console.error):nh(e).catch(console.error),n.fid}/**
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
 */async function mx(t,e=!1){const n=t;return await gx(n),(await nh(n,e)).token}async function gx(t){const{registrationPromise:e}=await th(t);e&&await e}/**
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
 */function _x(t){if(!t||!t.options)throw Xc("App Configuration");if(!t.name)throw Xc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xc(t){return Ar.create("missing-app-config-values",{valueName:t})}/**
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
 */const R0="installations",vx="installations-internal",yx=t=>{const e=t.getProvider("app").getImmediate(),n=_x(e),r=Hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wx=t=>{const e=t.getProvider("app").getImmediate(),n=Hr(e,R0).getImmediate();return{getId:()=>px(n),getToken:i=>mx(n,i)}};function Ex(){Vt(new Pt(R0,yx,"PUBLIC")),Vt(new Pt(vx,wx,"PRIVATE"))}Ex();ht(p0,Zf);ht(p0,Zf,"esm2017");/**
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
 */const al="analytics",Sx="firebase_id",Cx="origin",Ix=60*1e3,Tx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rh="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new Ql("@firebase/analytics");/**
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
 */const kx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tt=new Vr("analytics","Analytics",kx);/**
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
 */function xx(t){if(!t.startsWith(rh)){const e=tt.create("invalid-gtag-resource",{gtagURL:t});return qe.warn(e.message),""}return t}function A0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Nx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Px(t,e){const n=Nx("firebase-js-sdk-policy",{createScriptURL:xx}),r=document.createElement("script"),i=`${rh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function bx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Rx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await A0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){qe.error(a)}t("config",i,s)}async function Ax(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await A0(n);for(const l of o){const c=a.find(u=>u.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){qe.error(s)}}function Ox(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Ax(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Rx(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){qe.error(a)}}return i}function Dx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Ox(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Lx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(rh)&&n.src.includes(t))return n;return null}/**
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
 */const Mx=30,Fx=1e3;class jx{constructor(e={},n=Fx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const O0=new jx;function Ux(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Ux(r)},s=Tx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function $x(t,e=O0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw tt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Vx;return setTimeout(async()=>{a.abort()},Ix),D0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function D0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=O0){var s;const{appId:o,measurementId:a}=t;try{await Wx(r,e)}catch(l){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await zx(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Bx(c)){if(i.deleteThrottleMetadata(o),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pm(n,i.intervalMillis,Mx):Pm(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,u),qe.debug(`Calling attemptFetch again in ${d} millis`),D0(t,u,r,i)}}function Wx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bx(t){if(!(t instanceof Gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Vx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Gx(){if(s0())try{await o0()}catch(t){return qe.warn(tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qe.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kx(t,e,n,r,i,s,o){var a;const l=$x(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>qe.error(_)),e.push(l);const c=Gx().then(_=>{if(_)return r.getId()}),[d,u]=await Promise.all([l,c]);Lx(s)||Px(s,d.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Cx]="firebase",f.update=!0,u!=null&&(f[Sx]=u),i("config",d.measurementId,f),d.measurementId}/**
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
 */class Yx{constructor(e){this.app=e}_delete(){return delete As[this.app.options.appId],Promise.resolve()}}let As={},zm=[];const $m={};let Jc="dataLayer",qx="gtag",Wm,L0,Bm=!1;function Qx(){const t=[];if(n0()&&t.push("This is a browser extension environment."),pT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=tt.create("invalid-analytics-context",{errorInfo:e});qe.warn(n.message)}}function Xx(t,e,n){Qx();const r=t.options.appId;if(!r)throw tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(As[r]!=null)throw tt.create("already-exists",{id:r});if(!Bm){bx(Jc);const{wrappedGtag:s,gtagCore:o}=Dx(As,zm,$m,Jc,qx);L0=s,Wm=o,Bm=!0}return As[r]=Kx(t,zm,$m,e,Wm,Jc,n),new Yx(t)}function Jx(t=Jf()){t=Pe(t);const e=Hr(t,al);return e.isInitialized()?e.getImmediate():Zx(t)}function Zx(t,e={}){const n=Hr(t,al);if(n.isInitialized()){const i=n.getImmediate();if(ao(e,n.getOptions()))return i;throw tt.create("already-initialized")}return n.initialize({options:e})}function eN(t,e,n,r){t=Pe(t),Hx(L0,As[t.app.options.appId],e,n,r).catch(i=>qe.error(i))}const Vm="@firebase/analytics",Hm="0.10.10";function tN(){Vt(new Pt(al,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Xx(r,i,n)},"PUBLIC")),Vt(new Pt("analytics-internal",t,"PRIVATE")),ht(Vm,Hm),ht(Vm,Hm,"esm2017");function t(e){try{const n=e.getProvider(al).getImmediate();return{logEvent:(r,i,s)=>eN(n,r,i,s)}}catch(n){throw tt.create("interop-component-reg-failed",{reason:n})}}}tN();function ih(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function M0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nN=M0,F0=new Vr("auth","Firebase",M0());/**
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
 */const ll=new Ql("@firebase/auth");function rN(t,...e){ll.logLevel<=Y.WARN&&ll.warn(`Auth (${Ki}): ${t}`,...e)}function Ia(t,...e){ll.logLevel<=Y.ERROR&&ll.error(`Auth (${Ki}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw sh(t,...e)}function Wt(t,...e){return sh(t,...e)}function j0(t,e,n){const r=Object.assign(Object.assign({},nN()),{[e]:n});return new Vr("auth","Firebase",r).create(e,{appName:t.name})}function rn(t){return j0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return F0.create(t,...e)}function O(t,e,...n){if(!t)throw sh(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function dn(t,e){t||Jt(e)}/**
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
 */function md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iN(){return Gm()==="http:"||Gm()==="https:"}function Gm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iN()||n0()||"connection"in navigator)?navigator.onLine:!0}function oN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qf()||r0()}get(){return sN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oh(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class U0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lN=new bo(3e4,6e4);function _n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vn(t,e,n,r,i={}){return z0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return fT()||(c.referrerPolicy="no-referrer"),U0.fetch()($0(t,t.config.apiHost,n,a),c)})}async function z0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aN),e);try{const i=new uN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw aa(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw j0(t,d,c);bt(t,d)}}catch(i){if(i instanceof Gt)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Ro(t,e,n,r,i={}){const s=await vn(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?oh(t.config,i):`${t.config.apiScheme}://${i}`}function cN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),lN.get())})}}function aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wt(t,e,r);return i.customData._tokenResponse=n,i}function Km(t){return t!==void 0&&t.enterprise!==void 0}class dN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fN(t,e){return vn(t,"GET","/v2/recaptchaConfig",_n(t,e))}/**
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
 */async function hN(t,e){return vn(t,"POST","/v1/accounts:delete",e)}async function W0(t,e){return vn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pN(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=ah(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Os(Zc(i.auth_time)),issuedAtTime:Os(Zc(i.iat)),expirationTime:Os(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=rl(n);return i?JSON.parse(i):(Ia("Failed to decode base64 JWT payload"),null)}catch(i){return Ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ym(t){const e=ah(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&mN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,W0(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?B0(s.providerUserInfo):[],a=vN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function _N(t){const e=Pe(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B0(t){return t.map(e=>{var{providerId:n}=e,r=ih(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yN(t,e){const n=await z0(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",U0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wN(t,e){return vn(t,"POST","/v2/accounts:revokeToken",_n(t,e))}/**
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
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Ym(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yi;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function In(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pN(this,e)}reload(){return _N(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await co(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:y,isAnonymous:I,providerData:C,stsTokenManager:k}=n;O(g&&k,e,"internal-error");const N=yi.fromJSON(this.name,k);O(typeof g=="string",e,"internal-error"),In(u,e.name),In(f,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof I=="boolean",e,"internal-error"),In(_,e.name),In(v,e.name),In(w,e.name),In(E,e.name),In(m,e.name),In(p,e.name);const G=new Zt({uid:g,auth:e,email:f,emailVerified:y,displayName:u,isAnonymous:I,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:N,createdAt:m,lastLoginAt:p});return C&&Array.isArray(C)&&(G.providerData=C.map(L=>Object.assign({},L))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new yi;i.updateFromServerResponse(n);const s=new Zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?B0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new yi;a.updateFromIdToken(r);const l=new Zt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const qm=new Map;function en(t){dn(t instanceof Function,"Expected a class definition");let e=qm.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qm.set(t,e),e)}/**
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
 */class V0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V0.type="NONE";const Qm=V0;/**
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
 */function Ta(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ta(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ta("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(en(Qm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||en(Qm);const o=Ta(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Zt._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new wi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new wi(s,e,r))}}/**
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
 */function Xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q0(e))return"Blackberry";if(X0(e))return"Webos";if(G0(e))return"Safari";if((e.includes("chrome/")||K0(e))&&!e.includes("edge/"))return"Chrome";if(q0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H0(t=Ue()){return/firefox\//i.test(t)}function G0(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K0(t=Ue()){return/crios\//i.test(t)}function Y0(t=Ue()){return/iemobile/i.test(t)}function q0(t=Ue()){return/android/i.test(t)}function Q0(t=Ue()){return/blackberry/i.test(t)}function X0(t=Ue()){return/webos/i.test(t)}function lh(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EN(t=Ue()){var e;return lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SN(){return hT()&&document.documentMode===10}function J0(t=Ue()){return lh(t)||q0(t)||X0(t)||Q0(t)||/windows phone/i.test(t)||Y0(t)}/**
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
 */function Z0(t,e=[]){let n;switch(t){case"Browser":n=Xm(Ue());break;case"Worker":n=`${Xm(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
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
 */class CN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function IN(t,e={}){return vn(t,"GET","/v2/passwordPolicy",_n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const TN=6;class kN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class xN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new CN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await W0(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(rn(this));const n=e?Pe(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IN(this),n=new kN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return Pe(t)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ET(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NN(t){Zl=t}function ew(t){return Zl.loadJS(t)}function PN(){return Zl.recaptchaEnterpriseScript}function bN(){return Zl.gapiScript}function RN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class AN{constructor(){this.enterprise=new ON}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ON{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const DN="recaptcha-enterprise",tw="NO_RECAPTCHA";class LN{constructor(e){this.type=DN,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dN(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Km(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(tw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new AN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Km(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=PN();l.length!==0&&(l+=a),ew(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Zm(t,e,n,r=!1,i=!1){const s=new LN(t);let o;if(i)o=tw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ul(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zm(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function MN(t,e){const n=Hr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ao(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function FN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jN(t,e,n){const r=cr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nw(e),{host:o,port:a}=UN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zN()}function nw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UN(t){const e=nw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:eg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:eg(o)}}}function eg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function $N(t,e){return vn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function WN(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",_n(t,e))}async function BN(t,e){return vn(t,"POST","/v1/accounts:sendOobCode",_n(t,e))}async function VN(t,e){return BN(t,e)}/**
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
 */async function HN(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}async function GN(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}/**
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
 */class uo extends ch{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ul(e,n,"signInWithPassword",WN);case"emailLink":return HN(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ul(e,r,"signUpPassword",$N);case"emailLink":return GN(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ei(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",_n(t,e))}/**
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
 */const KN="http://localhost";class Dr extends ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ih(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:KN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
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
 */function YN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qN(t){const e=ys(ws(t)).link,n=e?ys(ws(e)).deep_link_id:null,r=ys(ws(t)).deep_link_id;return(r?ys(ws(r)).link:null)||r||n||e||t}class uh{constructor(e){var n,r,i,s,o,a;const l=ys(ws(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=YN((i=l.mode)!==null&&i!==void 0?i:null);O(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qN(e);try{return new uh(n)}catch{return null}}}/**
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
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=uh.parseLink(n);return O(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ao extends rw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends Ao{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class An extends Ao{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
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
 */class On extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function QN(t,e){return Ro(t,"POST","/v1/accounts:signUp",_n(t,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zt._fromIdTokenResponse(e,r,i),o=tg(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tg(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dl extends Gt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dl(e,n,r,i)}}function iw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(t,s,e,r):s})}async function XN(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function JN(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(rn(r));const i="reauthenticate";try{const s=await co(t,iw(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=ah(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
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
 */async function sw(t,e,n=!1){if(Ft(t.app))return Promise.reject(rn(t));const r="signIn",i=await iw(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ZN(t,e){return sw(cr(t),e)}/**
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
 */async function ow(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eP(t,e,n){const r=cr(t);await ul(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VN)}async function tP(t,e,n){if(Ft(t.app))return Promise.reject(rn(t));const r=cr(t),o=await ul(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ow(t),l}),a=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function nP(t,e,n){return Ft(t.app)?Promise.reject(rn(t)):ZN(Pe(t),Yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ow(t),r})}function rP(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function iP(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function sP(t){return Pe(t).signOut()}const fl="__sak";/**
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
 */class aw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fl,"1"),this.storage.removeItem(fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oP=1e3,aP=10;class lw extends aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lw.type="LOCAL";const lP=lw;/**
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
 */class cw extends aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cw.type="SESSION";const uw=cw;/**
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
 */function cP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await cP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
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
 */function dh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=dh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function dP(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function dw(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function fP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pP(){return dw()?self:null}/**
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
 */const fw="firebaseLocalStorageDb",mP=1,hl="firebaseLocalStorage",hw="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function gP(){const t=indexedDB.deleteDatabase(fw);return new Oo(t).toPromise()}function _d(){const t=indexedDB.open(fw,mP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:hw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await gP(),e(await _d()))})})}async function ng(t,e,n){const r=tc(t,!0).put({[hw]:e,value:n});return new Oo(r).toPromise()}async function _P(t,e){const n=tc(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function rg(t,e){const n=tc(t,!0).delete(e);return new Oo(n).toPromise()}const vP=800,yP=3;class pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(pP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fP(),!this.activeServiceWorker)return;this.sender=new uP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await ng(e,fl,"1"),await rg(e,fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ng(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_P(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tc(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pw.type="LOCAL";const wP=pw;new bo(3e4,6e4);/**
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
 */function EP(t,e){return e?en(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fh extends ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SP(t){return sw(t.auth,new fh(t),t.bypassAuthState)}function CP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),JN(n,new fh(t),t.bypassAuthState)}async function IP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),XN(n,new fh(t),t.bypassAuthState)}/**
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
 */class mw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SP;case"linkViaPopup":case"linkViaRedirect":return IP;case"reauthViaPopup":case"reauthViaRedirect":return CP;default:bt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TP=new bo(2e3,1e4);class ci extends mw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TP.get())};e()}}ci.currentPopupAction=null;/**
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
 */const kP="pendingRedirect",ka=new Map;class xP extends mw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await NP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NP(t,e){const n=RP(e),r=bP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PP(t,e){ka.set(t._key(),e)}function bP(t){return en(t._redirectPersistence)}function RP(t){return Ta(kP,t.config.apiKey,t.name)}async function AP(t,e,n=!1){if(Ft(t.app))return Promise.reject(rn(t));const r=cr(t),i=EP(r,e),o=await new xP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const OP=10*60*1e3;class DP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gw(t);default:return!1}}/**
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
 */async function MP(t,e={}){return vn(t,"GET","/v1/projects",e)}/**
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
 */const FP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jP=/^https?/;async function UP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MP(t);for(const n of e)try{if(zP(n))return}catch{}bt(t,"unauthorized-domain")}function zP(t){const e=md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jP.test(n))return!1;if(FP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $P=new bo(3e4,6e4);function sg(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WP(t){return new Promise((e,n)=>{var r,i,s;function o(){sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sg(),n(Wt(t,"network-request-failed"))},timeout:$P.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)o();else{const a=RN("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},ew(`${bN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xa=null,e})}let xa=null;function BP(t){return xa=xa||WP(t),xa}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const VP=new bo(5e3,15e3),HP="__/auth/iframe",GP="emulator/auth/iframe",KP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qP(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oh(e,GP):`https://${t.config.authDomain}/${HP}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},i=YP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gi(r).slice(1)}`}async function QP(t){const e=await BP(t),n=Bt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:qP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Bt().setTimeout(()=>{s(o)},VP.get());function l(){Bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const XP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JP=500,ZP=600,eb="_blank",tb="http://localhost";class og{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nb(t,e,n,r=JP,i=ZP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ue().toLowerCase();n&&(a=K0(c)?eb:n),H0(c)&&(e=e||tb,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(EN(c)&&a!=="_self")return rb(e||"",a),new og(null);const u=window.open(e||"",a,d);O(u,t,"popup-blocked");try{u.focus()}catch{}return new og(u)}function rb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ib="__/auth/handler",sb="emulator/auth/handler",ob=encodeURIComponent("fac");async function ag(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(e instanceof rw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ld(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Ao){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${ob}=${encodeURIComponent(l)}`:"";return`${ab(t)}?${Gi(a).slice(1)}${c}`}function ab({config:t}){return t.emulator?oh(t,sb):`https://${t.authDomain}/${ib}`}/**
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
 */const eu="webStorageSupport";class lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uw,this._completeRedirectFn=AP,this._overrideRedirectResult=PP}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ag(e,n,r,md(),i);return nb(e,o,dh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ag(e,n,r,md(),i);return dP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QP(e),r=new DP(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[eu];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J0()||G0()||lh()}}const cb=lb;var lg="@firebase/auth",cg="1.8.1";/**
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
 */class ub{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function db(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fb(t){Vt(new Pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z0(t)},c=new xN(r,i,s,l);return FN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vt(new Pt("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new ub(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(lg,cg,db(t)),ht(lg,cg,"esm2017")}/**
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
 */const hb=5*60,pb=t0("authIdTokenMaxAge")||hb;let ug=null;const mb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pb)return;const i=n==null?void 0:n.token;ug!==i&&(ug=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _w(t=Jf()){const e=Hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MN(t,{popupRedirectResolver:cb,persistence:[wP,lP,uw]}),r=t0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mb(s.toString());iP(n,o,()=>o(n.currentUser)),rP(n,a=>o(a))}}const i=Zy("auth");return i&&jN(n,`http://${i}`),n}function gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fb("Browser");var dg={};const fg="@firebase/database",hg="1.0.10";/**
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
 */let vw="";function _b(t){vw=t}/**
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
 */class vb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class yb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vb(e)}}catch{}return new yb},Er=yw("localStorage"),wb=yw("sessionStorage");/**
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
 */const Si=new Ql("@firebase/database"),Eb=function(){let t=1;return function(){return t++}}(),ww=function(t){const e=IT(t),n=new wT;n.update(e);const r=n.digest();return Yf.encodeByteArray(r)},Do=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Do.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let Ds=null,pg=!0;const Sb=function(t,e){x(!e,"Can't turn on custom loggers persistently."),Si.logLevel=Y.VERBOSE,Ds=Si.log.bind(Si)},Te=function(...t){if(pg===!0&&(pg=!1,Ds===null&&wb.get("logging_enabled")===!0&&Sb()),Ds){const e=Do.apply(null,t);Ds(e)}},Lo=function(t){return function(...e){Te(t,...e)}},vd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Do(...t);Si.error(e)},fn=function(...t){const e=`FIREBASE FATAL ERROR: ${Do(...t)}`;throw Si.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Do(...t);Si.warn(e)},Cb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ib=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Oi="[MIN_NAME]",Mr="[MAX_NAME]",Gr=function(t,e){if(t===e)return 0;if(t===Oi||e===Mr)return-1;if(e===Oi||t===Mr)return 1;{const n=mg(t),r=mg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Tb=function(t,e){return t===e?0:t<e?-1:1},cs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},ph=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=ph(t[e[r]]);return n+="}",n},Ew=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sw=function(t){x(!hh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},kb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Nb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Pb=new RegExp("^-?(0*)\\d{1,10}$"),bb=-2147483648,Rb=2147483647,mg=function(t){if(Pb.test(t)){const e=Number(t);if(e>=bb&&e<=Rb)return e}return null},qi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ab=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ls=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ob{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Db{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Na{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Na.OWNER="owner";/**
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
 */const mh="5",Cw="v",Iw="s",Tw="r",kw="f",xw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nw="ls",Pw="p",yd="ac",bw="websocket",Rw="long_polling";/**
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
 */class Aw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Lb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ow(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===bw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Rw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Lb(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Mb{constructor(){this.counters_={}}incrementCounter(e,n=1){Kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iT(this.counters_)}}/**
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
 */const tu={},nu={};function gh(t){const e=t.toString();return tu[e]||(tu[e]=new Mb),tu[e]}function Fb(t,e){const n=t.toString();return nu[n]||(nu[n]=e()),nu[n]}/**
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
 */class jb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&qi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gg="start",Ub="close",zb="pLPCommand",$b="pRTLPCB",Dw="id",Lw="pw",Mw="ser",Wb="cb",Bb="seg",Vb="ts",Hb="d",Gb="dframe",Fw=1870,jw=30,Kb=Fw-jw,Yb=25e3,qb=3e4;class ui{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Lo(e),this.stats_=gh(n),this.urlFn=l=>(this.appCheckToken&&(l[yd]=this.appCheckToken),Ow(n,Rw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qb)),Ib(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _h((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gg)this.id=a,this.password=l;else if(o===Ub)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gg]="t",r[Mw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Wb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cw]=mh,this.transportSessionId&&(r[Iw]=this.transportSessionId),this.lastSessionId&&(r[Nw]=this.lastSessionId),this.applicationId&&(r[Pw]=this.applicationId),this.appCheckToken&&(r[yd]=this.appCheckToken),typeof location<"u"&&location.hostname&&xw.test(location.hostname)&&(r[Tw]=kw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kb()&&!xb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Xy(n),i=Ew(r,Kb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Gb]="t",r[Dw]=e,r[Lw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _h{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Eb(),window[zb+this.uniqueCallbackIdentifier]=e,window[$b+this.uniqueCallbackIdentifier]=n,this.myIFrame=_h.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dw]=this.myID,e[Lw]=this.myPW,e[Mw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jw+r.length<=Fw;){const o=this.pendingSegs.shift();r=r+"&"+Bb+i+"="+o.seg+"&"+Vb+i+"="+o.ts+"&"+Hb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Yb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Qb=16384,Xb=45e3;let pl=null;typeof MozWebSocket<"u"?pl=MozWebSocket:typeof WebSocket<"u"&&(pl=WebSocket);class Ct{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Lo(this.connId),this.stats_=gh(n),this.connURL=Ct.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Cw]=mh,typeof location<"u"&&location.hostname&&xw.test(location.hostname)&&(o[Tw]=kw),n&&(o[Iw]=n),r&&(o[Nw]=r),i&&(o[yd]=i),s&&(o[Pw]=s),Ow(e,bw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Er.set("previous_websocket_failure",!0);try{let r;i0(),this.mySock=new pl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pl!==null&&!Ct.forceDisallow_}static previouslyFailed(){return Er.isInMemoryStorage||Er.get("previous_websocket_failure")===!0}markConnectionHealthy(){Er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=oo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ew(n,Qb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Xb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ct.responsesRequiredToBeHealthy=2;Ct.healthyTimeout=3e4;/**
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
 */class fo{static get ALL_TRANSPORTS(){return[ui,Ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ct&&Ct.isAvailable();let r=n&&!Ct.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ct];else{const i=this.transports_=[];for(const s of fo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fo.globalTransportInitialized_=!1;/**
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
 */const Jb=6e4,Zb=5e3,eR=10*1024,tR=100*1024,ru="t",_g="d",nR="s",vg="r",rR="e",yg="o",wg="a",Eg="n",Sg="p",iR="h";class sR{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Lo("c:"+this.id+":"),this.transportManager_=new fo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ru in e){const n=e[ru];n===wg?this.upgradeIfSecondaryHealthy_():n===vg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),r=cs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Eg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),r=cs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(ru,e);if(_g in e){const r=e[_g];if(n===iR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Eg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===nR?this.onConnectionShutdown_(r):n===vg?this.onReset_(r):n===rR?vd("Server Error: "+r):n===yg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mh!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Zb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Uw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class zw{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ml extends zw{static getInstance(){return new ml}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cg=32,Ig=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new q("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function vh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function oR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ho(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $w(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Me(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function aR(t,e){const n=ho(t,0),r=ho(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Gr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function yh(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class lR{constructor(e,n){this.errorPrefix_=n,this.parts_=ho(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ql(this.parts_[r]);Ww(this)}}function cR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ql(e),Ww(t)}function uR(t){const e=t.parts_.pop();t.byteLength_-=ql(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ww(t){if(t.byteLength_>Ig)throw new Error(t.errorPrefix_+"has a key path longer than "+Ig+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cg+") or object contains a cycle "+mr(t))}function mr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class wh extends zw{static getInstance(){return new wh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const us=1e3,dR=60*5*1e3,Tg=30*1e3,fR=1.3,hR=3e4,pR="server_kill",kg=3;class sn extends Uw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sn.nextPersistentConnectionId_++,this.log_=Lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=us,this.maxReconnectDelay_=dR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!i0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ml.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Po,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;sn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kt(e,"w")){const r=Ai(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vd("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hR&&(this.reconnectDelay_=us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new sR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{je(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(pR)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&je(u),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ld(this.interruptReasons_)&&(this.reconnectDelay_=us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ph(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kg&&(this.reconnectDelay_=Tg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vw.replace(/\./g,"-")]=1,Qf()?e["framework.cordova"]=1:r0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ml.getInstance().currentlyOnline();return ld(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(Oi,e),i=new U(Oi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
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
 */let la;class Bw extends nc{static get __EMPTY_NODE(){return la}static set __EMPTY_NODE(e){la=e}compare(e,n){return Gr(e.name,n.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Mr,la)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,la)}toString(){return".key"}}const Ci=new Bw;/**
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
 */class ca{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class mR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ca(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ca(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ca(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ca(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new mR;/**
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
 */function gR(t,e){return Gr(t.name,e.name)}function Eh(t,e){return Gr(t,e)}/**
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
 */let wd;function _R(t){wd=t}const Vw=function(t){return typeof t=="number"?"number:"+Sw(t):"string:"+t},Hw=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kt(e,".sv"),"Priority must be a string or number.")}else x(t===wd||t.isEmpty(),"priority of unexpected type.");x(t===wd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xg;class we{static set __childrenNodeConstructor(e){xg=e}static get __childrenNodeConstructor(){return xg}constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:j(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sw(this.value_):e+=this.value_,this.lazyHash_=ww(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Gw,Kw;function vR(t){Gw=t}function yR(t){Kw=t}class wR extends nc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Gr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Mr,new we("[PRIORITY-POST]",Kw))}makePost(e,n){const r=Gw(e);return new U(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const de=new wR;/**
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
 */const ER=Math.log(2);class SR{constructor(e){const n=s=>parseInt(Math.log(s)/ER,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new Se(f,u.node,Se.BLACK,null,null);{const _=parseInt(d/2,10)+l,v=i(l,_),w=i(_+1,c);return u=t[_],f=n?n(u):u,new Se(f,u.node,Se.BLACK,v,w)}},s=function(l){let c=null,d=null,u=t.length;const f=function(v,w){const E=u-v,m=u;u-=v;const p=i(E+1,m),g=t[E],y=n?n(g):g;_(new Se(y,g.node,w,null,p))},_=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));w?f(E,Se.BLACK):(f(E,Se.BLACK),f(E,Se.RED))}return d},o=new SR(t.length),a=s(o);return new Ve(r||e,a)};/**
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
 */let iu;const Qr={};class tn{static get Default(){return x(Qr&&de,"ChildrenNode.ts has not been loaded"),iu=iu||new tn({".priority":Qr},{".priority":de}),iu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Kt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=gl(r,e.getCompare()):a=Qr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new tn(d,c)}addToIndexes(e,n){const r=il(this.indexes_,(i,s)=>{const o=Ai(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Qr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gl(a,o.getCompare())}else return Qr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=il(this.indexes_,i=>{if(i===Qr)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
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
 */let ds;class A{static get EMPTY_NODE(){return ds||(ds=new A(new Ve(Eh),null,tn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Hw(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ds:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{x(j(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(de,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vw(this.getPriority().val())+":"),this.forEachChild(de,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ww(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mo?-1:0}withIndex(e){if(e===Ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(de),i=n.getIterator(de);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ci?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CR extends A{constructor(){super(new Ve(Eh),A.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Mo=new CR;Object.defineProperties(U,{MIN:{value:new U(Oi,A.EMPTY_NODE)},MAX:{value:new U(Mr,Mo)}});Bw.__EMPTY_NODE=A.EMPTY_NODE;we.__childrenNodeConstructor=A;_R(Mo);yR(Mo);/**
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
 */const IR=!0;function _e(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,_e(e))}if(!(t instanceof Array)&&IR){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=gl(n,gR,o=>o.name,Eh);if(r){const o=gl(n,de.getCompare());return new A(s,_e(e),new tn({".priority":o},{".priority":de}))}else return new A(s,_e(e),tn.Default)}else{let n=A.EMPTY_NODE;return Ne(t,(r,i)=>{if(Kt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}vR(_e);/**
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
 */class TR extends nc{constructor(e){super(),this.indexPath_=e,x(!$(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Gr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Mo);return new U(Mr,e)}toString(){return ho(this.indexPath_,0).join("/")}}/**
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
 */class kR extends nc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Gr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=_e(e);return new U(n,r)}toString(){return".value"}}const xR=new kR;/**
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
 */function Yw(t){return{type:"value",snapshotNode:t}}function Di(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function po(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function NR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Sh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(po(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Di(n,r)):o.trackChildChange(mo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(de,(i,s)=>{n.hasChild(i)||r.trackChildChange(po(i,s))}),n.isLeafNode()||n.forEachChild(de,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(mo(i,s,o))}else r.trackChildChange(Di(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class go{constructor(e){this.indexedFilter_=new Sh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=go.getStartPost_(e),this.endPost_=go.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(de,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class PR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new go(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,_)=>u(_,f)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new U(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(mo(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(po(n,u));const w=a.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Di(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(po(c.name,c.node)),s.trackChildChange(Di(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class Ch{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Oi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Ch;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bR(t){return t.loadsAllData()?new Sh(t.getIndex()):t.hasLimit()?new PR(t):new go(t)}function Ng(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===xR?n="$value":t.index_===Ci?n="$key":(x(t.index_ instanceof TR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
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
 */class _l extends Uw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Lo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_l.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ng(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Ai(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=_l.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ng(e._queryParams),r=e._path.toString(),i=new Po;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=oo(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class RR{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function vl(){return{value:null,children:new Map}}function qw(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,vl());const i=t.children.get(r);e=X(e),qw(i,e,n)}}function Ed(t,e,n){t.value!==null?n(e,t.value):AR(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Ed(i,s,n)})}function AR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class OR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const bg=10*1e3,DR=30*1e3,LR=5*60*1e3;class MR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OR(e);const r=bg+(DR-bg)*Math.random();Ls(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,s)=>{s>0&&Kt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*LR))}}/**
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
 */var It;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function Ih(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Th(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=It.ACK_USER_WRITE,this.source=Ih()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new yl(H(),n,this.revert)}}else return x(j(this.path)===e,"operationForChild called for unrelated child."),new yl(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class _o{constructor(e,n){this.source=e,this.path=n,this.type=It.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new _o(this.source,H()):new _o(this.source,X(this.path))}}/**
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
 */class Fr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=It.OVERWRITE}operationForChild(e){return $(this.path)?new Fr(this.source,H(),this.snap.getImmediateChild(e)):new Fr(this.source,X(this.path),this.snap)}}/**
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
 */class Li{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=It.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new Fr(this.source,H(),n.value):new Li(this.source,H(),n)}else return x(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Li(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class er{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class FR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(NR(o.childName,o.snapshotNode))}),fs(t,i,"child_removed",e,r,n),fs(t,i,"child_added",e,r,n),fs(t,i,"child_moved",s,r,n),fs(t,i,"child_changed",e,r,n),fs(t,i,"value",e,r,n),i}function fs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>zR(t,a,l)),o.forEach(a=>{const l=UR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function UR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zR(t,e,n){if(e.childName==null||n.childName==null)throw Hi("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function rc(t,e){return{eventCache:t,serverCache:e}}function Ms(t,e,n,r){return rc(new er(e,n,r),t.serverCache)}function Qw(t,e,n,r){return rc(t.eventCache,new er(e,n,r))}function wl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function jr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let su;const $R=()=>(su||(su=new Ve(Tb)),su);class Q{static fromObject(e){let n=new Q(null);return Ne(e,(r,i)=>{n=n.set(new q(r),i)}),n}constructor(e,n=$R()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if($(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ue(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Q(null)}}set(e,n){if($(e))return new Q(n,this.children);{const r=j(e),s=(this.children.get(r)||new Q(null)).set(X(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if($(e))return n;{const r=j(e),s=(this.children.get(r)||new Q(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ue(n,i),r):new Q(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new Q(null))}}function Fs(t,e,n){if($(e))return new xt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function Sd(t,e,n){let r=t;return Ne(n,(i,s)=>{r=Fs(r,ue(e,i),s)}),r}function Rg(t,e){if($(e))return xt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new xt(n)}}function Cd(t,e){return Kr(t,e)!=null}function Kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Ag(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function qn(t,e){if($(e))return t;{const n=Kr(t,e);return n!=null?new xt(new Q(n)):new xt(t.writeTree_.subtree(e))}}function Id(t){return t.writeTree_.isEmpty()}function Mi(t,e){return Xw(H(),t.writeTree_,e)}function Xw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Xw(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
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
 */function ic(t,e){return tE(e,t)}function WR(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Fs(t.visibleWrites,e,n)),t.lastWriteId=r}function BR(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Sd(t.visibleWrites,e,n),t.lastWriteId=r}function VR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&GR(a,r.path)?i=!1:dt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return KR(t),!0;if(r.snap)t.visibleWrites=Rg(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=Rg(t.visibleWrites,ue(r.path,l))})}return!0}else return!1}function GR(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(ue(t.path,n),e))return!0;return!1}function KR(t){t.visibleWrites=Jw(t.allWrites,YR,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function YR(t){return t.visible}function Jw(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dt(n,o)?(a=Me(n,o),r=Fs(r,a,s.snap)):dt(o,n)&&(a=Me(o,n),r=Fs(r,H(),s.snap.getChild(a)));else if(s.children){if(dt(n,o))a=Me(n,o),r=Sd(r,a,s.children);else if(dt(o,n))if(a=Me(o,n),$(a))r=Sd(r,H(),s.children);else{const l=Ai(s.children,j(a));if(l){const c=l.getChild(X(a));r=Fs(r,H(),c)}}}else throw Hi("WriteRecord should have .snap or .children")}}return r}function Zw(t,e,n,r,i){if(!r&&!i){const s=Kr(t.visibleWrites,e);if(s!=null)return s;{const o=qn(t.visibleWrites,e);if(Id(o))return n;if(n==null&&!Cd(o,H()))return null;{const a=n||A.EMPTY_NODE;return Mi(o,a)}}}else{const s=qn(t.visibleWrites,e);if(!i&&Id(s))return n;if(!i&&n==null&&!Cd(s,H()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=Jw(t.allWrites,o,e),l=n||A.EMPTY_NODE;return Mi(a,l)}}}function qR(t,e,n){let r=A.EMPTY_NODE;const i=Kr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=qn(t.visibleWrites,e);return n.forEachChild(de,(o,a)=>{const l=Mi(qn(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),Ag(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=qn(t.visibleWrites,e);return Ag(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function QR(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Cd(t.visibleWrites,s))return null;{const o=qn(t.visibleWrites,s);return Id(o)?i.getChild(n):Mi(o,i.getChild(n))}}function XR(t,e,n,r){const i=ue(e,n),s=Kr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=qn(t.visibleWrites,i);return Mi(o,r.getNode().getImmediateChild(n))}else return null}function JR(t,e){return Kr(t.visibleWrites,e)}function ZR(t,e,n,r,i,s,o){let a;const l=qn(t.visibleWrites,e),c=Kr(l,H());if(c!=null)a=c;else if(n!=null)a=Mi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)u(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function eA(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function El(t,e,n,r){return Zw(t.writeTree,t.treePath,e,n,r)}function xh(t,e){return qR(t.writeTree,t.treePath,e)}function Og(t,e,n,r){return QR(t.writeTree,t.treePath,e,n,r)}function Sl(t,e){return JR(t.writeTree,ue(t.treePath,e))}function tA(t,e,n,r,i,s){return ZR(t.writeTree,t.treePath,e,n,r,i,s)}function Nh(t,e,n){return XR(t.writeTree,t.treePath,e,n)}function eE(t,e){return tE(ue(t.treePath,e),t.writeTree)}function tE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class nA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,mo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,po(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Di(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,mo(r,e.snapshotNode,i.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class rA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const nE=new rA;class Ph{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jr(this.viewCache_),s=tA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function iA(t){return{filter:t}}function sA(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oA(t,e,n,r,i){const s=new nA;let o,a;if(n.type===It.OVERWRITE){const c=n;c.source.fromUser?o=Td(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!$(c.path),o=Cl(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===It.MERGE){const c=n;c.source.fromUser?o=lA(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=kd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===It.ACK_USER_WRITE){const c=n;c.revert?o=dA(t,e,c.path,r,i,s):o=cA(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===It.LISTEN_COMPLETE)o=uA(t,e,n.path,r,s);else throw Hi("Unknown operation type: "+n.type);const l=s.getChanges();return aA(e,o,l),{viewCache:o,changes:l}}function aA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Yw(wl(e)))}}function rE(t,e,n,r,i,s){const o=e.eventCache;if(Sl(r,n)!=null)return e;{let a,l;if($(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=jr(e),d=c instanceof A?c:A.EMPTY_NODE,u=xh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=El(r,jr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=j(n);if(c===".priority"){x(Zn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Og(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=X(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Og(r,n,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=Nh(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return Ms(e,a,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function Cl(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if($(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),_,null)}else{const _=j(n);if(!l.isCompleteForPath(n)&&Zn(n)>1)return e;const v=X(n),E=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),_,E,v,nE,null)}const u=Qw(e,c,l.isFullyInitialized()||$(n),d.filtersNodes()),f=new Ph(i,u,s);return rE(t,u,n,i,f,a)}function Td(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Ph(i,e,s);if($(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ms(e,c,!0,t.filter.filtersNodes());else{const u=j(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ms(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=X(n),_=a.getNode().getImmediateChild(u);let v;if($(f))v=r;else{const w=d.getCompleteChild(u);w!=null?vh(f)===".priority"&&w.getChild($w(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=A.EMPTY_NODE}if(_.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),u,v,f,d,o);l=Ms(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Dg(t,e){return t.eventCache.isCompleteForChild(e)}function lA(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=ue(n,l);Dg(e,j(d))&&(a=Td(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=ue(n,l);Dg(e,j(d))||(a=Td(t,a,d,c,i,s,o))}),a}function Lg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function kd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;$(n)?c=r:c=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),v=Lg(t,_,f);l=Cl(t,l,new q(u),v,i,s,o,a)}}),c.children.inorderTraversal((u,f)=>{const _=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!_){const v=e.serverCache.getNode().getImmediateChild(u),w=Lg(t,v,f);l=Cl(t,l,new q(u),w,i,s,o,a)}}),l}function cA(t,e,n,r,i,s,o){if(Sl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if($(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cl(t,e,n,l.getNode().getChild(n),i,s,a,o);if($(n)){let c=new Q(null);return l.getNode().forEachChild(Ci,(d,u)=>{c=c.set(new q(d),u)}),kd(t,e,n,c,i,s,a,o)}else return e}else{let c=new Q(null);return r.foreach((d,u)=>{const f=ue(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),kd(t,e,n,c,i,s,a,o)}}function uA(t,e,n,r,i){const s=e.serverCache,o=Qw(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return rE(t,o,n,r,nE,i)}function dA(t,e,n,r,i,s){let o;if(Sl(r,n)!=null)return e;{const a=new Ph(r,e,i),l=e.eventCache.getNode();let c;if($(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=El(r,jr(e));else{const u=e.serverCache.getNode();x(u instanceof A,"serverChildren would be complete if leaf node"),d=xh(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=j(n);let u=Nh(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,X(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,A.EMPTY_NODE,X(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=El(r,jr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Sl(r,H())!=null,Ms(e,c,o,t.filter.filtersNodes())}}/**
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
 */class fA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Sh(r.getIndex()),s=bR(r);this.processor_=iA(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new er(l,o.isFullyInitialized(),i.filtersNodes()),u=new er(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=rc(u,d),this.eventGenerator_=new FR(this.query_)}get query(){return this.query_}}function hA(t){return t.viewCache_.serverCache.getNode()}function pA(t){return wl(t.viewCache_)}function mA(t,e){const n=jr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Mg(t){return t.eventRegistrations_.length===0}function gA(t,e){t.eventRegistrations_.push(e)}function Fg(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function jg(t,e,n,r){e.type===It.MERGE&&e.source.queryId!==null&&(x(jr(t.viewCache_),"We should always have a full cache before handling merges"),x(wl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=oA(t.processor_,i,e,n,r);return sA(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,iE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function _A(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(s,o)=>{r.push(Di(s,o))}),n.isFullyInitialized()&&r.push(Yw(n.getNode())),iE(t,r,n.getNode(),e)}function iE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return jR(t.eventGenerator_,e,n,i)}/**
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
 */let Il;class sE{constructor(){this.views=new Map}}function vA(t){x(!Il,"__referenceConstructor has already been defined"),Il=t}function yA(){return x(Il,"Reference.ts has not been loaded"),Il}function wA(t){return t.views.size===0}function bh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),jg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(jg(o,e,n,r));return s}}function oE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=El(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=xh(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const c=rc(new er(a,l,!1),new er(r,i,!1));return new fA(e,c)}return o}function EA(t,e,n,r,i,s){const o=oE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gA(o,n),_A(o,n)}function SA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=tr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fg(c,n,r)),Mg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fg(l,n,r)),Mg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!tr(t)&&s.push(new(yA())(e._repo,e._path)),{removed:s,events:o}}function aE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qn(t,e){let n=null;for(const r of t.views.values())n=n||mA(r,e);return n}function lE(t,e){if(e._queryParams.loadsAllData())return sc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cE(t,e){return lE(t,e)!=null}function tr(t){return sc(t)!=null}function sc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Tl;function CA(t){x(!Tl,"__referenceConstructor has already been defined"),Tl=t}function IA(){return x(Tl,"Reference.ts has not been loaded"),Tl}let TA=1;class Ug{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=eA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uE(t,e,n,r,i){return WR(t.pendingWriteTree_,e,n,r,i),i?Qi(t,new Fr(Ih(),e,n)):[]}function kA(t,e,n,r){BR(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return Qi(t,new Li(Ih(),e,i))}function Fn(t,e,n=!1){const r=VR(t.pendingWriteTree_,e);if(HR(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(H(),!0):Ne(r.children,o=>{s=s.set(new q(o),!0)}),Qi(t,new yl(r.path,s,n))}else return[]}function Fo(t,e,n){return Qi(t,new Fr(Th(),e,n))}function xA(t,e,n){const r=Q.fromObject(n);return Qi(t,new Li(Th(),e,r))}function NA(t,e){return Qi(t,new _o(Th(),e))}function PA(t,e,n){const r=Ah(t,n);if(r){const i=Oh(r),s=i.path,o=i.queryId,a=Me(s,e),l=new _o(kh(o),a);return Dh(t,s,l)}else return[]}function kl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||cE(o,e))){const l=SA(o,e,n,r);wA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,_)=>tr(_));if(d&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=AA(f);for(let v=0;v<_.length;++v){const w=_[v],E=w.query,m=pE(t,w);t.listenProvider_.startListening(js(E),vo(t,E),m.hashFn,m.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(js(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(oc(f));t.listenProvider_.stopListening(js(f),_)}))}OA(t,c)}return a}function dE(t,e,n,r){const i=Ah(t,r);if(i!=null){const s=Oh(i),o=s.path,a=s.queryId,l=Me(o,e),c=new Fr(kh(a),l,n);return Dh(t,o,c)}else return[]}function bA(t,e,n,r){const i=Ah(t,r);if(i){const s=Oh(i),o=s.path,a=s.queryId,l=Me(o,e),c=Q.fromObject(n),d=new Li(kh(a),l,c);return Dh(t,o,d)}else return[]}function xd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Me(f,i);s=s||Qn(_,v),o=o||tr(_)});let a=t.syncPointTree_.get(i);a?(o=o||tr(a),s=s||Qn(a,H())):(a=new sE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=Qn(v,H());w&&(s=s.updateImmediateChild(_,w))}));const c=cE(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=oc(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=DA();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=ic(t.pendingWriteTree_,i);let u=EA(a,e,n,d,s,l);if(!c&&!o&&!r){const f=lE(a,e);u=u.concat(LA(t,e,f))}return u}function Rh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Me(o,e),c=Qn(a,l);if(c)return c});return Zw(i,e,s,n,!0)}function RA(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Me(c,n);r=r||Qn(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Qn(i,H()):(i=new sE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new er(r,!0,!1):null,a=ic(t.pendingWriteTree_,e._path),l=oE(i,e,a,s?o.getNode():A.EMPTY_NODE,s);return pA(l)}function Qi(t,e){return fE(e,t.syncPointTree_,null,ic(t.pendingWriteTree_,H()))}function fE(t,e,n,r){if($(t.path))return hE(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Qn(i,H()));let s=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=eE(r,o);s=s.concat(fE(a,l,c,d))}return i&&(s=s.concat(bh(i,t,r,n))),s}}function hE(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Qn(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=eE(r,o),d=t.operationForChild(o);d&&(s=s.concat(hE(d,a,l,c)))}),i&&(s=s.concat(bh(i,t,r,n))),s}function pE(t,e){const n=e.query,r=vo(t,n);return{hashFn:()=>(hA(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?PA(t,n._path,r):NA(t,n._path);{const s=Nb(i,n);return kl(t,n,null,s)}}}}function vo(t,e){const n=oc(e);return t.queryToTagMap.get(n)}function oc(t){return t._path.toString()+"$"+t._queryIdentifier}function Ah(t,e){return t.tagToQueryMap.get(e)}function Oh(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function Dh(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=ic(t.pendingWriteTree_,e);return bh(r,n,i,null)}function AA(t){return t.fold((e,n,r)=>{if(n&&tr(n))return[sc(n)];{let i=[];return n&&(i=aE(n)),Ne(r,(s,o)=>{i=i.concat(o)}),i}})}function js(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(IA())(t._repo,t._path):t}function OA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=oc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function DA(){return TA++}function LA(t,e,n){const r=e._path,i=vo(t,e),s=pE(t,n),o=t.listenProvider_.startListening(js(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!$(c)&&d&&tr(d))return[sc(d).query];{let f=[];return d&&(f=f.concat(aE(d).map(_=>_.query))),Ne(u,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(js(d),vo(t,d))}}return o}/**
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
 */class Lh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lh(n)}node(){return this.node_}}class Mh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Mh(this.syncTree_,n)}node(){return Rh(this.syncTree_,this.path_)}}const MA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return FA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jA(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},FA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},jA=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},mE=function(t,e,n,r){return Fh(e,new Mh(n,t),r)},gE=function(t,e,n){return Fh(t,new Lh(e),n)};function Fh(t,e,n){const r=t.getPriority().val(),i=zg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=zg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(de,(a,l)=>{const c=Fh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class jh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Uh(t,e){let n=e instanceof q?e:new q(e),r=t,i=j(n);for(;i!==null;){const s=Ai(r.node.children,i)||{children:{},childCount:0};r=new jh(i,r,s),n=X(n),i=j(n)}return r}function Xi(t){return t.node.value}function _E(t,e){t.node.value=e,Nd(t)}function vE(t){return t.node.childCount>0}function UA(t){return Xi(t)===void 0&&!vE(t)}function ac(t,e){Ne(t.node.children,(n,r)=>{e(new jh(n,t,r))})}function yE(t,e,n,r){n&&!r&&e(t),ac(t,i=>{yE(i,e,!0,r)}),n&&r&&e(t)}function zA(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function jo(t){return new q(t.parent===null?t.name:jo(t.parent)+"/"+t.name)}function Nd(t){t.parent!==null&&$A(t.parent,t.name,t)}function $A(t,e,n){const r=UA(n),i=Kt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Nd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nd(t))}/**
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
 */const WA=/[\[\].#$\/\u0000-\u001F\u007F]/,BA=/[\[\].#$\u0000-\u001F\u007F]/,ou=10*1024*1024,zh=function(t){return typeof t=="string"&&t.length!==0&&!WA.test(t)},wE=function(t){return typeof t=="string"&&t.length!==0&&!BA.test(t)},VA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wE(t)},HA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!hh(t)||t&&typeof t=="object"&&Kt(t,".sv")},EE=function(t,e,n,r){r&&e===void 0||lc(Yl(t,"value"),e,n)},lc=function(t,e,n){const r=n instanceof q?new lR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mr(r));if(typeof e=="function")throw new Error(t+"contains a function "+mr(r)+" with contents = "+e.toString());if(hh(e))throw new Error(t+"contains "+e.toString()+" "+mr(r));if(typeof e=="string"&&e.length>ou/3&&ql(e)>ou)throw new Error(t+"contains a string greater than "+ou+" utf8 bytes "+mr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zh(o)))throw new Error(t+" contains an invalid key ("+o+") "+mr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cR(r,o),lc(t,a,r),uR(r)}),i&&s)throw new Error(t+' contains ".value" child '+mr(r)+" in addition to actual children.")}},GA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ho(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!zh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(aR);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&dt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},KA=function(t,e,n,r){const i=Yl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ne(e,(o,a)=>{const l=new q(o);if(lc(i,a,ue(n,l)),vh(l)===".priority"&&!HA(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),GA(i,s)},SE=function(t,e,n,r){if(!wE(n))throw new Error(Yl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),SE(t,e,n)},$h=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VA(n))throw new Error(Yl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class QA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function CE(t,e,n){cc(t,n),IE(t,r=>yh(r,e))}function gt(t,e,n){cc(t,n),IE(t,r=>dt(r,e)||dt(e,r))}function IE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(XA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function XA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ds&&Te("event: "+n.toString()),qi(r)}}}/**
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
 */const JA="repo_interrupt",ZA=25;class eO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vl(),this.transactionQueueTree_=new jh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tO(t,e,n){if(t.stats_=gh(t.repoInfo_),t.forceRestClient_||Ab())t.server_=new _l(t.repoInfo_,(r,i,s,o)=>{$g(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new sn(t.repoInfo_,e,(r,i,s,o)=>{$g(t,r,i,s,o)},r=>{Wg(t,r)},r=>{nO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Fb(t.repoInfo_,()=>new MR(t.stats_,t.server_)),t.infoData_=new RR,t.infoSyncTree_=new Ug({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Fo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wh(t,"connected",!1),t.serverSyncTree_=new Ug({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);gt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function TE(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uc(t){return MA({timestamp:TE(t)})}function $g(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=il(n,c=>_e(c));o=bA(t.serverSyncTree_,s,l,i)}else{const l=_e(n);o=dE(t.serverSyncTree_,s,l,i)}else if(r){const l=il(n,c=>_e(c));o=xA(t.serverSyncTree_,s,l)}else{const l=_e(n);o=Fo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Fi(t,s)),gt(t.eventQueue_,a,o)}function Wg(t,e){Wh(t,"connected",e),e===!1&&oO(t)}function nO(t,e){Ne(e,(n,r)=>{Wh(t,n,r)})}function Wh(t,e,n){const r=new q("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Fo(t.infoSyncTree_,r,i);gt(t.eventQueue_,r,s)}function Bh(t){return t.nextWriteId_++}function rO(t,e,n){const r=RA(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());xd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fo(t.serverSyncTree_,e._path,s);else{const a=vo(t.serverSyncTree_,e);o=dE(t.serverSyncTree_,e._path,s,a)}return gt(t.eventQueue_,e._path,o),kl(t.serverSyncTree_,e,n,null,!0),s},i=>(Uo(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function iO(t,e,n,r,i){Uo(t,"set",{path:e.toString(),value:n,priority:r});const s=uc(t),o=_e(n,r),a=Rh(t.serverSyncTree_,e),l=gE(o,a,s),c=Bh(t),d=uE(t.serverSyncTree_,e,l,c,!0);cc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||je("set at "+e+" failed: "+f);const w=Fn(t.serverSyncTree_,c,!v);gt(t.eventQueue_,e,w),Pd(t,i,f,_)});const u=Hh(t,e);Fi(t,u),gt(t.eventQueue_,u,[])}function sO(t,e,n,r){Uo(t,"update",{path:e.toString(),value:n});let i=!0;const s=uc(t),o={};if(Ne(n,(a,l)=>{i=!1,o[a]=mE(ue(e,a),_e(l),t.serverSyncTree_,s)}),i)Te("update() called with empty data.  Don't do anything."),Pd(t,r,"ok",void 0);else{const a=Bh(t),l=kA(t.serverSyncTree_,e,o,a);cc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||je("update at "+e+" failed: "+c);const f=Fn(t.serverSyncTree_,a,!u),_=f.length>0?Fi(t,e):e;gt(t.eventQueue_,_,f),Pd(t,r,c,d)}),Ne(n,c=>{const d=Hh(t,ue(e,c));Fi(t,d)}),gt(t.eventQueue_,e,[])}}function oO(t){Uo(t,"onDisconnectEvents");const e=uc(t),n=vl();Ed(t.onDisconnect_,H(),(i,s)=>{const o=mE(i,s,t.serverSyncTree_,e);qw(n,i,o)});let r=[];Ed(n,H(),(i,s)=>{r=r.concat(Fo(t.serverSyncTree_,i,s));const o=Hh(t,i);Fi(t,o)}),t.onDisconnect_=vl(),gt(t.eventQueue_,H(),r)}function aO(t,e,n){let r;j(e._path)===".info"?r=xd(t.infoSyncTree_,e,n):r=xd(t.serverSyncTree_,e,n),CE(t.eventQueue_,e._path,r)}function Bg(t,e,n){let r;j(e._path)===".info"?r=kl(t.infoSyncTree_,e,n):r=kl(t.serverSyncTree_,e,n),CE(t.eventQueue_,e._path,r)}function lO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(JA)}function Uo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Pd(t,e,n,r){e&&qi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function kE(t,e,n){return Rh(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Vh(t,e=t.transactionQueueTree_){if(e||dc(t,e),Xi(e)){const n=NE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cO(t,jo(e),n)}else vE(e)&&ac(e,n=>{Vh(t,n)})}function cO(t,e,n){const r=n.map(c=>c.currentWriteId),i=kE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Me(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Uo(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Fn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();dc(t,Uh(t.transactionQueueTree_,e)),Vh(t,t.transactionQueueTree_),gt(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)qi(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Fi(t,e)}},o)}function Fi(t,e){const n=xE(t,e),r=jo(n),i=NE(t,n);return uO(t,i,r),r}function uO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Me(n,l.path);let d=!1,u;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ZA)d=!0,u="maxretry",i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=kE(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){lc("transaction failed: Data returned ",_,l.path);let v=_e(_);typeof _=="object"&&_!=null&&Kt(_,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,m=uc(t),p=gE(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=Bh(t),o.splice(o.indexOf(E),1),i=i.concat(uE(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Fn(t.serverSyncTree_,E,!0))}else d=!0,u="nodata",i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0))}gt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}dc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)qi(r[a]);Vh(t,t.transactionQueueTree_)}function xE(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&Xi(r)===void 0;)r=Uh(r,n),e=X(e),n=j(e);return r}function NE(t,e){const n=[];return PE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function PE(t,e,n){const r=Xi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ac(e,i=>{PE(t,i,n)})}function dc(t,e){const n=Xi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_E(e,n.length>0?n:void 0)}ac(e,r=>{dc(t,r)})}function Hh(t,e){const n=jo(xE(t,e)),r=Uh(t.transactionQueueTree_,e);return zA(r,i=>{au(t,i)}),au(t,r),yE(r,i=>{au(t,i)}),n}function au(t,e){const n=Xi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_E(e,void 0):n.length=s+1,gt(t.eventQueue_,jo(e),i);for(let o=0;o<r.length;o++)qi(r[o])}}/**
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
 */function dO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vg=function(t,e){const n=hO(t),r=n.namespace;n.domain==="firebase.com"&&fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Aw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},hO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=dO(t.substring(d,u)));const f=fO(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Hg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pO=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Hg.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Hg.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class mO{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class gO{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class bE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Gh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:vh(this._path)}get ref(){return new yn(this._repo,this._path)}get _queryIdentifier(){const e=Pg(this._queryParams),n=ph(e);return n==="{}"?"default":n}get _queryObject(){return Pg(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Gh))return!1;const n=this._repo===e._repo,r=yh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+oR(this._path)}}class yn extends Gh{constructor(e,n){super(e,n,new Ch,!1)}get parent(){const e=$w(this._path);return e===null?null:new yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=ji(this.ref,e);return new yo(this._node.getChild(n),r,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new yo(i,ji(this.ref,r),de)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function He(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?ji(t._root,e):t._root}function ji(t,e){return t=Pe(t),j(t._path)===null?YA("child","path",e):SE("child","path",e),new yn(t._repo,ue(t._path,e))}function RE(t,e){t=Pe(t),$h("push",t._path),EE("push",e,t._path,!0);const n=TE(t._repo),r=pO(n),i=ji(t,r),s=ji(t,r);let o;return e!=null?o=AE(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function bd(t){return $h("remove",t._path),AE(t,null)}function AE(t,e){t=Pe(t),$h("set",t._path),EE("set",e,t._path,!1);const n=new Po;return iO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _O(t,e){KA("update",e,t._path);const n=new Po;return sO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function OE(t){t=Pe(t);const e=new bE(()=>{}),n=new fc(e);return rO(t._repo,t,n).then(r=>new yo(r,new yn(t._repo,t._path),t._queryParams.getIndex()))}class fc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mO("value",this,new yo(e.snapshotNode,new yn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gO(this,e,n):null}matches(e){return e instanceof fc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vO(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{Bg(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new bE(n,s||void 0),a=new fc(o);return aO(t._repo,t,a),()=>Bg(t._repo,t,a)}function Ui(t,e,n,r){return vO(t,"value",e,n,r)}vA(yn);CA(yn);/**
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
 */const yO="FIREBASE_DATABASE_EMULATOR_HOST",Rd={};let wO=!1;function EO(t,e,n,r){t.repoInfo_=new Aw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function SO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vg(s,i),a=o.repoInfo,l;typeof process<"u"&&dg&&(l=dg[yO]),l?(s=`http://${l}?ns=${a.namespace}`,o=Vg(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Db(t.name,t.options,e);qA("Invalid Firebase Database URL",o),$(o.path)||fn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=IO(a,t,c,new Ob(t.name,n));return new TO(d,t)}function CO(t,e){const n=Rd[e];(!n||n[t.key]!==t)&&fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lO(t),delete n[t.key]}function IO(t,e,n,r){let i=Rd[e.name];i||(i={},Rd[e.name]=i);let s=i[t.toURLString()];return s&&fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eO(t,wO,n,r),i[t.toURLString()]=s,s}class TO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yn(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fn("Cannot call "+e+" on a deleted database.")}}function DE(t=Jf(),e){const n=Hr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=uT("database");r&&kO(n,...r)}return n}function kO(t,e,n,r={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&fn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Na(Na.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dT(r.mockUserToken,t.app.options.projectId);s=new Na(o)}EO(i,e,n,s)}/**
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
 */function xO(t){_b(Ki),Vt(new Pt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ht(fg,hg,t),ht(fg,hg,"esm2017")}sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xO();const NO={apiKey:"AIzaSyDUfmBPE8zyNpu_CvRNcNuqK-9NJFAHQqg",authDomain:"home-goods-inventory-system.firebaseapp.com",projectId:"home-goods-inventory-system",storageBucket:"home-goods-inventory-system.appspot.com",messagingSenderId:"832889371836",appId:"1:832889371836:web:0835ab013150bc05d964b9",measurementId:"G-1HL856XXMY"},Kh=d0(NO);Jx(Kh);const Yh=_w(Kh),Ze=DE(Kh),PO="/CIS_641_Final_Project/assets/login1-Y-55spug.jpg";function LE({onLogin:t}){const e=_t(),[n,r]=S.useState({value:"",isTouched:!1}),[i,s]=S.useState({value:"",isTouched:!1}),[o,a]=S.useState(""),[l,c]=S.useState({}),[d,u]=S.useState(!1),f=(g,y)=>{let I="";switch(g){case"Username":y||(I="Username is required");break;case"Password":y||(I="Password is required");break}return I},_=(g,y)=>{const I=f(g,y);c(C=>({...C,[g]:I})),g==="Username"?r(C=>({...C,isTouched:!0})):g==="Password"&&s(C=>({...C,isTouched:!0}))},v=()=>n.value&&i.value,w=async g=>{g.preventDefault();const y=f("Username",n.value),I=f("Password",i.value);if(y||I){c({Username:y,Password:I});return}try{await nP(Yh,n.value,i.value),t(),e("/item-categories")}catch(C){a(C.message)}},E=g=>{g.preventDefault(),e("/create-account")},m=g=>{g.preventDefault(),e("/forgot-password")},p=()=>{u(!0),document.querySelector(".App")};return h.jsx("div",{className:`${ne.App} ${d?ne.darkBackground:""}`,style:{backgroundImage:`url(${PO})`},children:d?h.jsx("div",{className:ne.App,children:h.jsx("form",{onSubmit:w,children:h.jsxs("div",{className:ne.style1,children:[h.jsxs("div",{className:ne.input_group,children:[h.jsx("label",{htmlFor:"user_name",children:"Username"}),h.jsx("input",{type:"email",id:"user_name",name:"user_name1",placeholder:"Enter User Name",value:n.value,onChange:g=>r({...n,value:g.target.value}),onBlur:()=>_("Username",n.value)}),n.isTouched&&l.Username&&h.jsx("p",{className:"FieldError",children:l.Username})]}),h.jsxs("div",{className:ne.input_group,children:[h.jsx("label",{htmlFor:"password",children:"Password"}),h.jsx("input",{type:"password",id:"password",name:"password_1",placeholder:"Enter Password",value:i.value,onChange:g=>s({...i,value:g.target.value}),onBlur:()=>_("Password",i.value)}),i.isTouched&&l.Password&&h.jsx("p",{className:"FieldError",children:l.Password})]}),o&&h.jsx("div",{className:ne.error,children:o}),h.jsx("div",{className:ne.btn_style,children:h.jsx("button",{type:"submit",disabled:!v(),children:"Login"})}),h.jsx("div",{className:ne.btn_style,children:h.jsx("button",{onClick:E,children:"Create Account"})}),h.jsx("div",{className:ne.btn_style,children:h.jsx("button",{onClick:m,children:"Forgot Password?"})})]})})}):h.jsx("div",{className:ne.getStartedContainer,children:h.jsx("button",{className:ne.getStartedButton,onClick:p,children:"Get Started"})})})}LE.propTypes={onLogin:F.func.isRequired};function bO(){const t=_t(),[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState({value:"",isTouched:!1}),[a,l]=S.useState({value:"",isTouched:!1}),[c,d]=S.useState(""),[u,f]=S.useState({}),[_,v]=S.useState(""),w=C=>/^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.gvsu\.edu)$/.test(C),E=C=>{const N=/[A-Z]/.test(C),G=/\d/.test(C),L=/[!@#$%^&*(),.?":{}|<>]/.test(C);return C.length<8?"Password should be at least 8 characters long":N?G?L?null:"Password should contain at least one special character":"Password should contain at least one number":"Password should contain at least one uppercase letter"},m=(C,k)=>{let N="";switch(C){case"Firstname":k||(N="First name is required");break;case"Lastname":k||(N="Last name is required");break;case"Email":(!k||!w(k))&&(N="Enter a valid Mail");break;case"Password":N=E(k);break;case"Repassword":k!==a.value&&(N="Passwords do not match");break}return N},p=(C,k)=>{const N=m(C,k);f(G=>({...G,[C]:N}))},g=()=>{const C={Firstname:m("Firstname",e),Lastname:m("Lastname",r),Email:m("Email",s.value),Password:m("Password",a.value),Repassword:m("Repassword",c)};return f(C),!Object.values(C).some(k=>k)},y=async C=>{if(C.preventDefault(),g())try{await tP(Yh,s.value,a.value),t("/account_success")}catch(k){v(k.message)}},I=()=>{t("/")};return h.jsx("div",{className:ne.App,children:h.jsx("form",{onSubmit:y,children:h.jsxs("div",{className:ne.style1,children:[h.jsxs("div",{className:ne.input_group,children:[h.jsxs("label",{htmlFor:"first_name",children:["First Name ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"text",id:"first_name",name:"first_name1",placeholder:"Enter First name",value:e,onChange:C=>n(C.target.value),onBlur:()=>p("Firstname",e)}),u.Firstname&&h.jsx("p",{className:"FieldError",children:u.Firstname})]}),h.jsxs("div",{className:ne.input_group,children:[h.jsxs("label",{htmlFor:"last_name",children:["Last Name ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"text",id:"last_name",name:"last_name1",placeholder:"Enter Last name",value:r,onChange:C=>i(C.target.value),onBlur:()=>p("Lastname",r)}),u.Lastname&&h.jsx("p",{className:"FieldError",children:u.Lastname})]}),h.jsxs("div",{className:ne.input_group,children:[h.jsxs("label",{htmlFor:"e_mail",children:["E-mail ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"email",id:"e_mail",name:"e_mail1",placeholder:"Enter Email",value:s.value,onChange:C=>o({...s,value:C.target.value}),onBlur:()=>p("Email",s.value)}),u.Email&&h.jsx("p",{className:"FieldError",children:u.Email})]}),h.jsxs("div",{className:ne.input_group,children:[h.jsxs("label",{htmlFor:"password",children:["Create Password ",h.jsx("sup",{children:"*"})," "]}),h.jsx("input",{type:"password",id:"password",name:"password1",placeholder:"Enter Password",value:a.value,onChange:C=>l({...a,value:C.target.value}),onBlur:()=>p("Password",a.value)}),u.Password&&h.jsx("p",{className:"FieldError",children:u.Password})]}),h.jsxs("div",{className:ne.input_group,children:[h.jsxs("label",{htmlFor:"repassword",children:["Re - Enter Password ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"password",id:"repassword",name:"repassword1",placeholder:"Re - Enter Password",value:c,onChange:C=>d(C.target.value),onBlur:()=>p("Repassword",c)}),u.Repassword&&h.jsx("p",{className:"FieldError",children:u.Repassword})]}),_&&h.jsx("div",{className:ne.error,children:_}),h.jsx("div",{className:ne.btn_style,children:h.jsx("button",{type:"submit",children:"Create Account"})}),h.jsx("div",{className:ne.btn_style,children:h.jsx("button",{onClick:I,children:"Back"})})]})})})}function RO(){const t=_t(),e=n=>{n.preventDefault(),t("/")};return h.jsxs("div",{className:ne.style2,children:[h.jsx("h1",{children:"Account Created Successfully! Please Return to Login Page."}),h.jsx("div",{className:ne.backbutton_style,children:h.jsx("button",{onClick:e,children:"Back to Account"})})]})}const AO="_search_item_17v4h_3",OO="_searchBar_17v4h_35",DO="_item_styles_17v4h_75",LO="_item_17v4h_75",MO="_delete_icon_17v4h_157",FO="_confirmation_17v4h_239",jO="_outer_17v4h_293",dr={search_item:AO,searchBar:OO,item_styles:DO,item:LO,delete_icon:MO,confirmation:FO,outer:jO,"add-button":"_add-button_17v4h_381"},Gg=()=>{};let qh={},ME={},FE=null,jE={mark:Gg,measure:Gg};try{typeof window<"u"&&(qh=window),typeof document<"u"&&(ME=document),typeof MutationObserver<"u"&&(FE=MutationObserver),typeof performance<"u"&&(jE=performance)}catch{}const{userAgent:Kg=""}=qh.navigator||{},nr=qh,te=ME,Yg=FE,ua=jE;nr.document;const wn=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",UE=~Kg.indexOf("MSIE")||~Kg.indexOf("Trident/");var ie="classic",zE="duotone",nt="sharp",rt="sharp-duotone",UO=[ie,zE,nt,rt],zO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},qg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$O=["kit"],WO=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,BO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,VO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},HO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},GO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},KO={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},YO={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},qO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$E={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},QO=["solid","regular","light","thin","duotone","brands"],WE=[1,2,3,4,5,6,7,8,9,10],XO=WE.concat([11,12,13,14,15,16,17,18,19,20]),Es={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},JO=[...Object.keys(KO),...QO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Es.GROUP,Es.SWAP_OPACITY,Es.PRIMARY,Es.SECONDARY].concat(WE.map(t=>"".concat(t,"x"))).concat(XO.map(t=>"w-".concat(t))),ZO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},eD={kit:{"fa-kit":"fak"}},tD={kit:{fak:"fa-kit"}},Qg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const hn="___FONT_AWESOME___",Ad=16,BE="fa",VE="svg-inline--fa",Ur="data-fa-i2svg",Od="data-fa-pseudo-element",nD="data-fa-pseudo-element-pending",Qh="data-prefix",Xh="data-icon",Xg="fontawesome-i2svg",rD="async",iD=["HTML","HEAD","STYLE","SCRIPT"],HE=(()=>{try{return!0}catch{return!1}})(),GE=[ie,nt,rt];function zo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ie]}})}const KE={...$E};KE[ie]={...$E[ie],...qg.kit,...qg["kit-duotone"]};const Tr=zo(KE),Dd={...qO};Dd[ie]={...Dd[ie],...Qg.kit,...Qg["kit-duotone"]};const wo=zo(Dd),Ld={...YO};Ld[ie]={...Ld[ie],...tD.kit};const kr=zo(Ld),Md={...GO};Md[ie]={...Md[ie],...eD.kit};const sD=zo(Md),oD=WO,YE="fa-layers-text",aD=BO,lD={...zO};zo(lD);const cD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lu=Es,zi=new Set;Object.keys(wo[ie]).map(zi.add.bind(zi));Object.keys(wo[nt]).map(zi.add.bind(zi));Object.keys(wo[rt]).map(zi.add.bind(zi));const uD=[...$O,...JO],Us=nr.FontAwesomeConfig||{};function dD(t){var e=te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function fD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}te&&typeof te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=fD(dD(n));i!=null&&(Us[r]=i)});const qE={styleDefault:"solid",familyDefault:"classic",cssPrefix:BE,replacementClass:VE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Us.familyPrefix&&(Us.cssPrefix=Us.familyPrefix);const $i={...qE,...Us};$i.autoReplaceSvg||($i.observeMutations=!1);const R={};Object.keys(qE).forEach(t=>{Object.defineProperty(R,t,{enumerable:!0,set:function(e){$i[t]=e,zs.forEach(n=>n(R))},get:function(){return $i[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){$i.cssPrefix=t,zs.forEach(e=>e(R))},get:function(){return $i.cssPrefix}});nr.FontAwesomeConfig=R;const zs=[];function hD(t){return zs.push(t),()=>{zs.splice(zs.indexOf(t),1)}}const Tn=Ad,jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pD(t){if(!t||!wn)return;const e=te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return te.head.insertBefore(e,r),t}const mD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Eo(){let t=12,e="";for(;t-- >0;)e+=mD[Math.random()*62|0];return e}function Ji(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jh(t){return t.classList?Ji(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function QE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(QE(t[n]),'" '),"").trim()}function hc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Zh(t){return t.size!==jt.size||t.x!==jt.x||t.y!==jt.y||t.rotate!==jt.rotate||t.flipX||t.flipY}function _D(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function vD(t){let{transform:e,width:n=Ad,height:r=Ad,startCentered:i=!1}=t,s="";return i&&UE?s+="translate(".concat(e.x/Tn-n/2,"em, ").concat(e.y/Tn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Tn,"em), calc(-50% + ").concat(e.y/Tn,"em)) "):s+="translate(".concat(e.x/Tn,"em, ").concat(e.y/Tn,"em) "),s+="scale(".concat(e.size/Tn*(e.flipX?-1:1),", ").concat(e.size/Tn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var yD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function XE(){const t=BE,e=VE,n=R.cssPrefix,r=R.replacementClass;let i=yD;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Jg=!1;function cu(){R.autoAddCss&&!Jg&&(pD(XE()),Jg=!0)}var wD={mixout(){return{dom:{css:XE,insertCss:cu}}},hooks(){return{beforeDOMElementCreation(){cu()},beforeI2svg(){cu()}}}};const pn=nr||{};pn[hn]||(pn[hn]={});pn[hn].styles||(pn[hn].styles={});pn[hn].hooks||(pn[hn].hooks={});pn[hn].shims||(pn[hn].shims=[]);var Ut=pn[hn];const JE=[],ZE=function(){te.removeEventListener("DOMContentLoaded",ZE),xl=1,JE.map(t=>t())};let xl=!1;wn&&(xl=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),xl||te.addEventListener("DOMContentLoaded",ZE));function ED(t){wn&&(xl?setTimeout(t,0):JE.push(t))}function $o(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?QE(t):"<".concat(e," ").concat(gD(n),">").concat(r.map($o).join(""),"</").concat(e,">")}function Zg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var uu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)c=s[l],d=a(d,e[c],c,e);return d};function SD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Fd(t){const e=SD(t);return e.length===1?e[0].toString(16):null}function CD(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function e_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function jd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=e_(e);typeof Ut.hooks.addPack=="function"&&!r?Ut.hooks.addPack(t,e_(e)):Ut.styles[t]={...Ut.styles[t]||{},...i},t==="fas"&&jd("fa",e)}const{styles:gr,shims:ID}=Ut,TD={[ie]:Object.values(kr[ie]),[nt]:Object.values(kr[nt]),[rt]:Object.values(kr[rt])};let ep=null,eS={},tS={},nS={},rS={},iS={};const kD={[ie]:Object.keys(Tr[ie]),[nt]:Object.keys(Tr[nt]),[rt]:Object.keys(Tr[rt])};function xD(t){return~uD.indexOf(t)}function ND(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!xD(i)?i:null}const sS=()=>{const t=r=>uu(gr,(i,s,o)=>(i[o]=uu(s,r,{}),i),{});eS=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),tS=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),iS=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in gr||R.autoFetchSvg,n=uu(ID,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});nS=n.names,rS=n.unicodes,ep=pc(R.styleDefault,{family:R.familyDefault})};hD(t=>{ep=pc(t.styleDefault,{family:R.familyDefault})});sS();function tp(t,e){return(eS[t]||{})[e]}function PD(t,e){return(tS[t]||{})[e]}function jn(t,e){return(iS[t]||{})[e]}function oS(t){return nS[t]||{prefix:null,iconName:null}}function bD(t){const e=rS[t],n=tp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rr(){return ep}const np=()=>({prefix:null,iconName:null,rest:[]});function pc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ie}=e,r=Tr[n][t],i=wo[n][t]||wo[n][r],s=t in Ut.styles?t:null;return i||s||null}const RD={[ie]:Object.keys(kr[ie]),[nt]:Object.keys(kr[nt]),[rt]:Object.keys(kr[rt])};function mc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[ie]:"".concat(R.cssPrefix,"-").concat(ie),[nt]:"".concat(R.cssPrefix,"-").concat(nt),[rt]:"".concat(R.cssPrefix,"-").concat(rt)};let i=null,s=ie;const o=UO.filter(l=>l!==zE);o.forEach(l=>{(t.includes(r[l])||t.some(c=>RD[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const d=ND(R.cssPrefix,c);if(gr[c]?(c=TD[s].includes(c)?sD[s][c]:c,i=c,l.prefix=c):kD[s].indexOf(c)>-1?(i=c,l.prefix=pc(c,{family:s})):d?l.iconName=d:c!==R.replacementClass&&!o.some(u=>c===r[u])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const u=i==="fa"?oS(l.iconName):{},f=jn(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||f||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!gr.far&&gr.fas&&!R.autoFetchSvg&&(l.prefix="fas")}return l},np());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===nt&&(gr.fass||R.autoFetchSvg)&&(a.prefix="fass",a.iconName=jn(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===rt&&(gr.fasds||R.autoFetchSvg)&&(a.prefix="fasds",a.iconName=jn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=rr()||"fas"),a}class AD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},jd(s,i[s]);const o=kr[ie][s];o&&jd(o,i[s]),sS()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let t_=[],di={};const Ii={},OD=Object.keys(Ii);function DD(t,e){let{mixoutsTo:n}=e;return t_=t,di={},Object.keys(Ii).forEach(r=>{OD.indexOf(r)===-1&&delete Ii[r]}),t_.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{di[o]||(di[o]=[]),di[o].push(s[o])})}r.provides&&r.provides(Ii)}),n}function Ud(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(di[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function zr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(di[t]||[]).forEach(s=>{s.apply(null,n)})}function ir(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ii[t]?Ii[t].apply(null,e):void 0}function zd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||rr();if(e)return e=jn(n,e)||e,Zg(aS.definitions,n,e)||Zg(Ut.styles,n,e)}const aS=new AD,LD=()=>{R.autoReplaceSvg=!1,R.observeMutations=!1,zr("noAuto")},MD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wn?(zr("beforeI2svg",t),ir("pseudoElements2svg",t),ir("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,ED(()=>{jD({autoReplaceSvgRoot:e}),zr("watch",t)})}},FD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:jn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pc(t[0]);return{prefix:n,iconName:jn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(oD))){const e=mc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||rr(),iconName:jn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=rr();return{prefix:e,iconName:jn(e,t)||t}}}},at={noAuto:LD,config:R,dom:MD,parse:FD,library:aS,findIconDefinition:zd,toHtml:$o},jD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=te}=t;(Object.keys(Ut.styles).length>0||R.autoFetchSvg)&&wn&&R.autoReplaceSvg&&at.dom.i2svg({node:e})};function gc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>$o(n))}}),Object.defineProperty(t,"node",{get:function(){if(!wn)return;const n=te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function UD(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Zh(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=hc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function zD(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function rp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:d,watchable:u=!1}=t,{width:f,height:_}=n.found?n:e,v=r==="fak",w=[R.replacementClass,i?"".concat(R.cssPrefix,"-").concat(i):""].filter(I=>d.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(d.classes).join(" ");let E={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(_)}};const m=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(f/_*16*.0625,"em")}:{};u&&(E.attributes[Ur]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||Eo())},children:[a]}),delete E.attributes.title);const p={...E,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...m,...d.styles}},{children:g,attributes:y}=n.found&&e.found?ir("generateAbstractMask",p)||{children:[],attributes:{}}:ir("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=g,p.attributes=y,o?zD(p):UD(p)}function n_(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Ur]="");const c={...o.styles};Zh(i)&&(c.transform=vD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=hc(c);d.length>0&&(l.style=d);const u=[];return u.push({tag:"span",attributes:l,children:[e]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function $D(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=hc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:du}=Ut;function $d(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(lu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(lu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(lu.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const WD={found:!1,width:512,height:512};function BD(t,e){!HE&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wd(t,e){let n=e;return e==="fa"&&R.styleDefault!==null&&(e=rr()),new Promise((r,i)=>{if(n==="fa"){const s=oS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&du[e]&&du[e][t]){const s=du[e][t];return r($d(s))}BD(t,e),r({...WD,icon:R.showMissingIcons&&t?ir("missingIconAbstract")||{}:{}})})}const r_=()=>{},Bd=R.measurePerformance&&ua&&ua.mark&&ua.measure?ua:{mark:r_,measure:r_},Ss='FA "6.6.0"',VD=t=>(Bd.mark("".concat(Ss," ").concat(t," begins")),()=>lS(t)),lS=t=>{Bd.mark("".concat(Ss," ").concat(t," ends")),Bd.measure("".concat(Ss," ").concat(t),"".concat(Ss," ").concat(t," begins"),"".concat(Ss," ").concat(t," ends"))};var ip={begin:VD,end:lS};const Pa=()=>{};function i_(t){return typeof(t.getAttribute?t.getAttribute(Ur):null)=="string"}function HD(t){const e=t.getAttribute?t.getAttribute(Qh):null,n=t.getAttribute?t.getAttribute(Xh):null;return e&&n}function GD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function KD(){return R.autoReplaceSvg===!0?ba.replace:ba[R.autoReplaceSvg]||ba.replace}function YD(t){return te.createElementNS("http://www.w3.org/2000/svg",t)}function qD(t){return te.createElement(t)}function cS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?YD:qD}=e;if(typeof t=="string")return te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(cS(s,{ceFn:n}))}),r}function QD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ba={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(cS(n),e)}),e.getAttribute(Ur)===null&&R.keepOriginalSource){let n=te.createComment(QD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Jh(e).indexOf(R.replacementClass))return ba.replace(t);const r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===R.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>$o(s)).join(`
`);e.setAttribute(Ur,""),e.innerHTML=i}};function s_(t){t()}function uS(t,e){const n=typeof e=="function"?e:Pa;if(t.length===0)n();else{let r=s_;R.mutateApproach===rD&&(r=nr.requestAnimationFrame||s_),r(()=>{const i=KD(),s=ip.begin("mutate");t.map(i),s(),n()})}}let sp=!1;function dS(){sp=!0}function Vd(){sp=!1}let Nl=null;function o_(t){if(!Yg||!R.observeMutations)return;const{treeCallback:e=Pa,nodeCallback:n=Pa,pseudoElementsCallback:r=Pa,observeMutationsRoot:i=te}=t;Nl=new Yg(s=>{if(sp)return;const o=rr();Ji(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!i_(a.addedNodes[0])&&(R.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&R.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&i_(a.target)&&~cD.indexOf(a.attributeName))if(a.attributeName==="class"&&HD(a.target)){const{prefix:l,iconName:c}=mc(Jh(a.target));a.target.setAttribute(Qh,l||o),c&&a.target.setAttribute(Xh,c)}else GD(a.target)&&n(a.target)})}),wn&&Nl.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function XD(){Nl&&Nl.disconnect()}function JD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function ZD(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=mc(Jh(t));return i.prefix||(i.prefix=rr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=PD(i.prefix,t.innerText)||tp(i.prefix,Fd(t.innerText))),!i.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function eL(t){const e=Ji(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||Eo()):(e["aria-hidden"]="true",e.focusable="false")),e}function tL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function a_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=ZD(t),s=eL(t),o=Ud("parseNodeAttributes",{},t);let a=e.styleParser?JD(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:nL}=Ut;function fS(t){const e=R.autoReplaceSvg==="nest"?a_(t,{styleParser:!1}):a_(t);return~e.extra.classes.indexOf(YE)?ir("generateLayersText",t,e):ir("generateSvgReplacementMutation",t,e)}let Ht=new Set;GE.map(t=>{Ht.add("fa-".concat(t))});Object.keys(Tr[ie]).map(Ht.add.bind(Ht));Object.keys(Tr[nt]).map(Ht.add.bind(Ht));Object.keys(Tr[rt]).map(Ht.add.bind(Ht));Ht=[...Ht];function l_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wn)return Promise.resolve();const n=te.documentElement.classList,r=d=>n.add("".concat(Xg,"-").concat(d)),i=d=>n.remove("".concat(Xg,"-").concat(d)),s=R.autoFetchSvg?Ht:GE.map(d=>"fa-".concat(d)).concat(Object.keys(nL));s.includes("fa")||s.push("fa");const o=[".".concat(YE,":not([").concat(Ur,"])")].concat(s.map(d=>".".concat(d,":not([").concat(Ur,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ji(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=ip.begin("onTree"),c=a.reduce((d,u)=>{try{const f=fS(u);f&&d.push(f)}catch(f){HE||f.name==="MissingIcon"&&console.error(f)}return d},[]);return new Promise((d,u)=>{Promise.all(c).then(f=>{uS(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(f=>{l(),u(f)})})}function rL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fS(t).then(n=>{n&&uS([n],e)})}function iL(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:zd(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:zd(i||{})),t(r,{...n,mask:i})}}const sL=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=jt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:u,iconName:f,icon:_}=t;return gc({type:"icon",...t},()=>(zr("beforeDOMElementCreation",{iconDefinition:t,params:e}),R.autoA11y&&(o?c["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(a||Eo()):(c["aria-hidden"]="true",c.focusable="false")),rp({icons:{main:$d(_),mask:i?$d(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:f,transform:{...jt,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:l}})))};var oL={mixout(){return{icon:iL(sL)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=l_,t.nodeCallback=rL,t}}},provides(t){t.i2svg=function(e){const{node:n=te,callback:r=()=>{}}=e;return l_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:d,extra:u}=n;return new Promise((f,_)=>{Promise.all([Wd(r,o),c.iconName?Wd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[w,E]=v;f([e,rp({icons:{main:w,mask:E},prefix:o,iconName:r,transform:a,symbol:l,maskId:d,title:i,titleId:s,extra:u,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=hc(o);a.length>0&&(r.style=a);let l;return Zh(s)&&(l=ir("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},aL={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gc({type:"layer"},()=>{zr("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},lL={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return gc({type:"counter",content:t},()=>(zr("beforeDOMElementCreation",{content:t,params:e}),$D({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(R.cssPrefix,"-layers-counter"),...r]}})))}}}},cL={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=jt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return gc({type:"text",content:t},()=>(zr("beforeDOMElementCreation",{content:t,params:e}),n_({content:t,transform:{...jt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(R.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(UE){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return R.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,n_({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const uL=new RegExp('"',"ug"),c_=[1105920,1112319],u_={FontAwesome:{normal:"fas",400:"fas"},...HO,...VO,...ZO},Hd=Object.keys(u_).reduce((t,e)=>(t[e.toLowerCase()]=u_[e],t),{}),dL=Object.keys(Hd).reduce((t,e)=>{const n=Hd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function fL(t){const e=t.replace(uL,""),n=CD(e,0),r=n>=c_[0]&&n<=c_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Fd(i?e[0]:e),isSecondary:r||i}}function hL(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Hd[n]||{})[i]||dL[n]}function d_(t,e){const n="".concat(nD).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Ji(t.children).filter(f=>f.getAttribute(Od)===e)[0],a=nr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(aD),d=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){const f=a.getPropertyValue("content");let _=hL(l,d);const{value:v,isSecondary:w}=fL(f),E=c[0].startsWith("FontAwesome");let m=tp(_,v),p=m;if(E){const g=bD(v);g.iconName&&g.prefix&&(m=g.iconName,_=g.prefix)}if(m&&!w&&(!o||o.getAttribute(Qh)!==_||o.getAttribute(Xh)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);const g=tL(),{extra:y}=g;y.attributes[Od]=e,Wd(m,_).then(I=>{const C=rp({...g,icons:{main:I,mask:np()},prefix:_,iconName:p,extra:y,watchable:!0}),k=te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=C.map(N=>$o(N)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function pL(t){return Promise.all([d_(t,"::before"),d_(t,"::after")])}function mL(t){return t.parentNode!==document.head&&!~iD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Od)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function f_(t){if(wn)return new Promise((e,n)=>{const r=Ji(t.querySelectorAll("*")).filter(mL).map(pL),i=ip.begin("searchPseudoElements");dS(),Promise.all(r).then(()=>{i(),Vd(),e()}).catch(()=>{i(),Vd(),n()})})}var gL={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=f_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=te}=e;R.searchPseudoElements&&f_(n)}}};let h_=!1;var _L={mixout(){return{dom:{unwatch(){dS(),h_=!0}}}},hooks(){return{bootstrap(){o_(Ud("mutationObserverCallbacks",{}))},noAuto(){XD()},watch(t){const{observeMutationsRoot:e}=t;h_?Vd():o_(Ud("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const p_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var vL={mixout(){return{parse:{transform:t=>p_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=p_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(c)},u={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:d,path:u};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const fu={x:0,y:0,width:"100%",height:"100%"};function m_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function yL(t){return t.tag==="g"?t.children:[t]}var wL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?mc(n.split(" ").map(i=>i.trim())):np();return r.prefix||(r.prefix=rr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:d,icon:u}=s,f=_D({transform:a,containerWidth:d,iconWidth:l}),_={tag:"rect",attributes:{...fu,fill:"white"}},v=c.children?{children:c.children.map(m_)}:{},w={tag:"g",attributes:{...f.inner},children:[m_({tag:c.tag,attributes:{...c.attributes,...f.path},...v})]},E={tag:"g",attributes:{...f.outer},children:[w]},m="mask-".concat(o||Eo()),p="clip-".concat(o||Eo()),g={tag:"mask",attributes:{...fu,id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,E]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:yL(u)},g]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(m,")"),...fu}}),{children:n,attributes:r}}}},EL={provides(t){let e=!1;nr.matchMedia&&(e=nr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},SL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},CL=[wD,oL,aL,lL,cL,gL,_L,vL,wL,EL,SL];DD(CL,{mixoutsTo:at});at.noAuto;at.config;at.library;at.dom;const Gd=at.parse;at.findIconDefinition;at.toHtml;const IL=at.icon;at.layer;at.text;at.counter;function g_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g_(Object(n),!0).forEach(function(r){fi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pl(t){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pl(t)}function fi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function TL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kL(t,e){if(t==null)return{};var n=TL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Kd(t){return xL(t)||NL(t)||PL(t)||bL()}function xL(t){if(Array.isArray(t))return Yd(t)}function NL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function PL(t,e){if(t){if(typeof t=="string")return Yd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yd(t,e)}}function Yd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function bL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RL(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,d=t.spinReverse,u=t.pulse,f=t.fixedWidth,_=t.inverse,v=t.border,w=t.listItem,E=t.flip,m=t.size,p=t.rotation,g=t.pull,y=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":f,"fa-inverse":_,"fa-border":v,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},fi(e,"fa-".concat(m),typeof m<"u"&&m!==null),fi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),fi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),fi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(I){return y[I]?I:null}).filter(function(I){return I})}function AL(t){return t=t-0,t===t}function hS(t){return AL(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var OL=["style"];function DL(t){return t.charAt(0).toUpperCase()+t.slice(1)}function LL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=hS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[DL(i)]=s:e[i]=s,e},{})}function pS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return pS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=LL(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[hS(c)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=kL(n,OL);return i.attrs.style=Lt(Lt({},i.attrs.style),o),t.apply(void 0,[e.tag,Lt(Lt({},i.attrs),a)].concat(Kd(r)))}var mS=!1;try{mS=!0}catch{}function ML(){if(!mS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function __(t){if(t&&Pl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gd.icon)return Gd.icon(t);if(t===null)return null;if(t&&Pl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function hu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fi({},t,e):{}}var v_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},_c=Zd.forwardRef(function(t,e){var n=Lt(Lt({},v_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,d=__(r),u=hu("classes",[].concat(Kd(RL(n)),Kd((o||"").split(" ")))),f=hu("transform",typeof n.transform=="string"?Gd.transform(n.transform):n.transform),_=hu("mask",__(i)),v=IL(d,Lt(Lt(Lt(Lt({},u),f),_),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!v)return ML("Could not find icon",d),null;var w=v.abstract,E={ref:e};return Object.keys(n).forEach(function(m){v_.hasOwnProperty(m)||(E[m]=n[m])}),FL(w[0],E)});_c.displayName="FontAwesomeIcon";_c.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};var FL=pS.bind(null,Zd.createElement);const gS={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]};function jL(){const t=_t(),[e,n]=S.useState([]),[r,i]=S.useState(""),[s,o]=S.useState(!1),[a,l]=S.useState(null),{isDarkTheme:c}=gn();S.useEffect(()=>{const p=He(Ze,"categories");Ui(p,g=>{const y=g.val(),I=y?Object.values(y):[];n(I)})},[]);const d=p=>{t(`/item-types/${p}`)},u=()=>{t("/add-item-categories")},f=p=>{l(p),o(!0)},_=()=>{if(a){const p=He(Ze,"categories");Ui(p,g=>{const y=g.val(),I=Object.keys(y).find(C=>y[C]===a);if(I){const C=He(Ze,`categories/${I}`);bd(C).then(()=>{console.log(`Deleted ${a} from categories`);const k=He(Ze,`items/${a}`);return bd(k)}).then(()=>{console.log(`Deleted ${a} from items`),n(k=>k.filter(N=>N!==a)),l(null),o(!1)}).catch(k=>{console.error("Error deleting category: ",k)})}},{onlyOnce:!0})}},v=()=>{l(null),o(!1)},w=e.filter(p=>p.toLowerCase().includes(r.toLowerCase())),E={color:c?"#f8f8f8":"#333"},m={backgroundColor:c?"#333":"#fff"};return h.jsxs("div",{children:[h.jsxs("div",{className:dr.search_item,children:[h.jsx("h1",{style:E,children:"Item Categories Page"}),h.jsx("input",{type:"text",placeholder:"Search The Item",className:dr.searchBar,onChange:p=>i(p.target.value)}),h.jsx("button",{className:"add-button",onClick:u,children:"Add New Category"})]}),h.jsx("div",{className:dr.item_styles,children:w.map(p=>h.jsxs("div",{className:dr.item,children:[h.jsxs("h1",{style:E,onClick:()=>d(p),children:[" ",p," "]}),h.jsx(_c,{icon:gS,className:dr.delete_icon,onClick:()=>f(p)})]},p))}),s&&h.jsx("div",{className:dr.outer,style:E,children:h.jsxs("div",{className:dr.confirmation,style:m,children:[h.jsxs("p",{children:["Are you sure you want to delete ",a,"?"]}),h.jsx("button",{onClick:_,children:"Yes"}),h.jsx("button",{onClick:v,children:"No"})]})})]})}const UL="_confirmation_y2chg_1",zL="_outer_y2chg_53",$L="_form_group_y2chg_79",WL="_form_container_y2chg_113",da={confirmation:UL,outer:zL,form_group:$L,form_container:WL};function BL(){const t=_t(),[e,n]=S.useState(""),[r,i]=S.useState(!1),{isDarkTheme:s}=gn(),o={color:s?"#f8f8f8":"#333"},a={backgroundColor:s?"#333":"#fff"},l=()=>e.trim().length>0,c=f=>{f.preventDefault(),i(!0)},d=async()=>{const f=He(Ze,"categories");await RE(f,e),t("/item-categories")},u=()=>{i(!1)};return h.jsx("div",{children:h.jsxs("div",{className:da.form_container,children:[h.jsx("h1",{style:o,children:"Add Item Category"}),h.jsxs("form",{onSubmit:c,style:a,children:[h.jsxs("div",{className:da.form_group,children:[h.jsx("label",{htmlFor:"Cat_name",style:{color:s?"#f8f8f8":"#333"},children:"Enter Category Name :"}),h.jsx("input",{type:"text",placeholder:"Enter Category Name",id:"Cat_name",name:"new_category",value:e,onChange:f=>n(f.target.value)})]}),h.jsx("div",{children:h.jsx("button",{disabled:!l(),children:"Save"})}),r&&h.jsx(h.Fragment,{children:h.jsx("div",{className:da.outer,style:o,children:h.jsxs("div",{className:da.confirmation,style:a,children:[h.jsx("p",{children:"Do you want to confirm saving this new category?"}),h.jsx("button",{onClick:d,children:"Yes"}),h.jsx("button",{onClick:u,children:"No"})]})})})]})]})})}const VL="_item_styles_1dii5_15",HL="_item_container_1dii5_31",GL="_item_1dii5_15",KL="_image_style_1dii5_133",YL="_delete_icon_container_1dii5_167",qL="_delete_icon_1dii5_167",QL="_search_item_1dii5_205",XL="_searchBar_1dii5_233",JL="_confirmation_1dii5_307",ZL="_outer_1dii5_361",Ot={item_styles:VL,item_container:HL,item:GL,image_style:KL,delete_icon_container:YL,delete_icon:qL,search_item:QL,searchBar:XL,confirmation:JL,outer:ZL};function eM(){const t=_t(),{category:e}=Kl(),[n,r]=S.useState([]),[i,s]=S.useState(""),[o,a]=S.useState(!1),[l,c]=S.useState(null),{isDarkTheme:d}=gn(),u={color:d?"#f8f8f8":"#333"},f={backgroundColor:d?"#333":"#fff"};S.useEffect(()=>{const y=He(Ze,`items/${e}`);Ui(y,I=>{const C=I.val(),k=C?Object.keys(C).map(N=>({id:N,...C[N]})):[];r(k)})},[e]);const _=()=>{t(`/add-item-type/${e}`)},v=()=>{t("/item-categories")},w=async()=>{if(l){const y=He(Ze,`items/${e}/${l}`);try{await bd(y),r(I=>I.filter(C=>C.id!==l)),console.log(`Deleted item: ${l}`)}catch(I){console.error("Error deleting item: ",I)}finally{c(null),a(!1)}}},E=y=>{t(`/details/${e}/${y}`)},m=n.filter(y=>y.name.toLowerCase().includes(i.toLowerCase())),p=y=>{c(y),a(!0)},g=()=>{c(null),a(!1)};return h.jsxs("div",{children:[h.jsxs("div",{className:Ot.search_item,children:[h.jsx("button",{onClick:v,className:"styles.backbutton",children:"Back"}),h.jsxs("h1",{style:u,children:["Items in ",e]}),h.jsx("input",{type:"text",placeholder:"Search the item",className:Ot.searchBar,onChange:y=>s(y.target.value)}),h.jsx("button",{onClick:_,children:"Add New Item"})]}),h.jsx("div",{className:Ot.item_styles,children:m.map(y=>h.jsxs("div",{className:Ot.item_container,style:f,children:[h.jsxs("div",{className:Ot.item,onClick:()=>E(y.name),children:[h.jsx("div",{style:{fontSize:"20px",fontWeight:"bold"},children:y.name}),h.jsx("img",{className:Ot.image_style,src:y.image,alt:"Item"}),h.jsxs("strong",{children:["$",y.price]})]}),h.jsx("div",{className:Ot.delete_icon_container,children:h.jsx(_c,{icon:gS,className:Ot.delete_icon,onClick:()=>p(y.id)})})]},y.id))}),o&&h.jsx("div",{className:Ot.outer,style:u,children:h.jsxs("div",{className:Ot.confirmation,style:f,children:[h.jsx("p",{children:"Deleting this item is permanent. Proceed?"}),h.jsx("button",{onClick:w,children:"Yes"}),h.jsx("button",{onClick:g,children:"No"})]})})]})}const tM="_form_container_lywez_1",nM="_form_group_lywez_29",rM="_custom_dropdown_lywez_65",iM="_dropdown_list_lywez_91",sM="_dropdown_item_lywez_119",oM="_submit_button_lywez_143",aM="_cancel_button_lywez_165",lM="_confirmation_lywez_193",cM="_outer_lywez_247",V={form_container:tM,form_group:nM,custom_dropdown:rM,dropdown_list:iM,dropdown_item:sM,submit_button:oM,cancel_button:aM,confirmation:lM,outer:cM};function uM(){const t=_t(),{categorys:e}=Kl(),[n,r]=S.useState(""),[i,s]=S.useState([]),[o,a]=S.useState([]),[l,c]=S.useState(""),[d,u]=S.useState(!1),[f,_]=S.useState(""),[v,w]=S.useState(""),[E,m]=S.useState(""),[p,g]=S.useState(""),[y,I]=S.useState(""),[C,k]=S.useState(""),[N,G]=S.useState(""),[L,Qe]=S.useState(""),[ur,En]=S.useState(!1),{isDarkTheme:Zi}=gn(),Wo={backgroundColor:Zi?"#333":"#fff"},Yr={color:Zi?"#f8f8f8":"#333"};S.useEffect(()=>{const z=He(Ze,"categories");Ui(z,vt=>{const Sn=vt.val(),Rt=Sn?Object.values(Sn):[];s(Rt),a(Rt)})},[]),S.useEffect(()=>{a(i.filter(z=>z.toLowerCase().includes(l.toLowerCase())))},[l,i]);const es=async z=>{z.preventDefault();const vt={category:n,name:f,price:C,stock:v,manufacturer:E,image:p,desc:y,dimension:N,warranty:L};try{await RE(He(Ze,`items/${n}`),vt),t(`/item-types/${n}`)}catch(Sn){console.error("Error adding item to Firebase:",Sn)}},P=()=>{t(`/item-types/${e}`)},D=z=>{r(z),c(z),u(!1)},M=z=>{z.preventDefault(),En(!0)},se=()=>{En(!1)},he=n.trim()!==""&&f.trim()!=="";return h.jsxs("div",{className:V.form_container,children:[h.jsx("h1",{style:Yr,children:"Add New Item"}),h.jsxs("form",{onSubmit:M,style:Wo,children:[h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"category_name",children:"Category Name:"}),h.jsxs("div",{className:V.custom_dropdown,children:[h.jsx("input",{type:"text",placeholder:"Select or search categories...",value:l,onChange:z=>{c(z.target.value),u(!0)},onFocus:()=>u(!0)}),d&&h.jsx("div",{className:V.dropdown_list,children:o.length>0?o.map(z=>h.jsx("div",{className:V.dropdown_item,onClick:()=>D(z),children:z},z)):h.jsx("div",{className:V.dropdown_item,children:"No categories found"})})]})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"item_type",children:"Item Name:"}),h.jsx("input",{type:"text",id:"item_type",value:f,onChange:z=>_(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"item_price",children:"Item Price:"}),h.jsx("input",{type:"number",id:"item_price",value:C,onChange:z=>k(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"item_stock",children:"Item Stock:"}),h.jsx("input",{type:"number",id:"item_stock",value:v,onChange:z=>w(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"item_desc",children:"Decription:"}),h.jsx("input",{type:"text",id:"item_desc",value:y,onChange:z=>I(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"item_manufacturer",children:"Manufacturer:"}),h.jsx("input",{type:"text",id:"item_manufacturer",value:E,onChange:z=>m(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"dimension",children:"Dimensions and weight:"}),h.jsx("input",{type:"text",id:"dimension",value:N,onChange:z=>G(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"warranty",children:"Warranty:"}),h.jsx("input",{type:"text",id:"warranty",value:L,onChange:z=>Qe(z.target.value)})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"item_image",children:"Image URL:"}),h.jsx("input",{type:"text",id:"item_image",value:p,onChange:z=>g(z.target.value)})]}),h.jsx("button",{type:"submit",className:V.submit_button,disabled:!he,children:"Add New Item"}),h.jsx("button",{type:"button",onClick:P,className:V.cancel_button,children:"Cancel"})]}),ur&&h.jsx(h.Fragment,{children:h.jsx("div",{className:V.outer,style:Yr,children:h.jsxs("div",{className:V.confirmation,style:Wo,children:[h.jsx("p",{children:"Do you want to confirm saving this new item?"}),h.jsx("button",{onClick:es,children:"Yes"}),h.jsx("button",{onClick:se,children:"No"})]})})})]})}const dM="_details_wrapper_1ix3h_3",fM="_details_heading_1ix3h_59",hM="_details_content_1ix3h_77",pM="_details_image_1ix3h_123",mM="_details_buttons_1ix3h_149",hs={details_wrapper:dM,details_heading:fM,details_content:hM,details_image:pM,details_buttons:mM};function gM(){const{item:t,category:e}=Kl(),n=_t(),[r,i]=S.useState(null),[s,o]=S.useState(!0),[a,l]=S.useState(null),{isDarkTheme:c}=gn(),d={color:c?"#f8f8f8":"#333"};S.useEffect(()=>{const _=He(DE());console.log("Fetching details for:",{category:e,item:t}),OE(ji(_,`items/${e}`)).then(v=>{if(v.exists()){const w=v.val(),E=Object.entries(w).find(([m,p])=>p.name.trim().toLowerCase()===t.trim().toLowerCase());if(E){const[m,p]=E;i(p),l(m)}else console.log("Item not found in category."),i(null)}else console.log("No data available for this category."),i(null);o(!1)}).catch(v=>{console.error("Error fetching data: ",v),o(!1)})},[e,t]);const u=()=>{n(`/item-types/${e}`)},f=()=>{a?n(`/editdetails/${e}/${a}`):console.error("Item ID is undefined.")};return s?h.jsx("div",{children:"Loading..."}):r?h.jsxs("div",{className:hs.details_wrapper,style:d,children:[h.jsxs("div",{className:hs.details_buttons,children:[h.jsx("button",{onClick:u,children:"Back"}),h.jsx("button",{onClick:f,children:"Edit Item Details"})]}),h.jsxs("h1",{style:d,className:hs.details_heading,children:["Item Details: ",r.name]}),h.jsxs("div",{className:hs.details_content,children:[h.jsxs("p",{children:[h.jsx("span",{children:"Item Category:"})," ",r.category]}),h.jsxs("p",{children:[h.jsx("span",{children:"Item Name:"})," ",r.name]}),h.jsxs("p",{children:[h.jsx("span",{children:"Item Price:"})," ",r.price,"$"]}),h.jsxs("p",{children:[h.jsx("span",{children:"Item Stock:"})," ",r.stock]}),h.jsxs("p",{children:[h.jsx("span",{children:"Description:"})," ",r.desc]}),h.jsxs("p",{children:[h.jsx("span",{children:"Manufacturer:"})," ",r.manufacturer]}),h.jsxs("p",{children:[h.jsx("span",{children:"Dimensions & Weight:"})," ",r.dimension]}),h.jsxs("p",{children:[h.jsx("span",{children:"Warranty:"})," ",r.warranty]})]}),r.image&&h.jsx("div",{className:hs.details_image,children:h.jsx("img",{src:r.image,alt:`${r.name}`})})]}):h.jsx("div",{children:"Item not found."})}function _M(){const{category:t,itemId:e}=Kl(),[n,r]=S.useState({name:"",price:"",stock:"",desc:"",manufacturer:"",dimension:"",warranty:"",image:""}),[i,s]=S.useState(!0),[o,a]=S.useState(null),[l,c]=S.useState(!1),d=_t(),{isDarkTheme:u}=gn(),f={color:u?"#f8f8f8":"#333"},_={backgroundColor:u?"#333":"#fff"};S.useEffect(()=>{(async()=>{try{const y=He(Ze,`items/${t}/${e}`),I=await OE(y);I.exists()?r(I.val()):a("Item not found.")}catch{a("Failed to load item details.")}finally{s(!1)}})()},[t,e]);const v=g=>{const{name:y,value:I}=g.target;r(C=>({...C,[y]:I}))},w=async()=>{try{const g=He(Ze,`items/${t}/${e}`);await _O(g,n),d(`/details/${t}/${n.name}`)}catch{a("Failed to save changes.")}},E=()=>d(`/details/${t}/${n.name}`),m=()=>c(!1),p=g=>{g.preventDefault(),c(!0)};return i?h.jsx("p",{children:"Loading item details..."}):o?h.jsx("p",{className:V.error,children:o}):h.jsxs("div",{className:V.form_container,children:[h.jsx("h1",{style:f,children:"Edit Item Details"}),h.jsxs("form",{onSubmit:p,style:_,children:[h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"name",children:"Item Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"price",children:"Item Price:"}),h.jsx("input",{type:"number",id:"price",name:"price",value:n.price,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"stock",children:"Item Stock:"}),h.jsx("input",{type:"number",id:"stock",name:"stock",value:n.stock,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"desc",children:"Description:"}),h.jsx("input",{type:"text",id:"desc",name:"desc",value:n.desc,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"manufacturer",children:"Manufacturer:"}),h.jsx("input",{type:"text",id:"manufacturer",name:"manufacturer",value:n.manufacturer,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"dimension",children:"Dimensions and Weight:"}),h.jsx("input",{type:"text",id:"dimension",name:"dimension",value:n.dimension,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"warranty",children:"Warranty:"}),h.jsx("input",{type:"text",id:"warranty",name:"warranty",value:n.warranty,onChange:v})]}),h.jsxs("div",{className:V.form_group,children:[h.jsx("label",{htmlFor:"image",children:"Image URL:"}),h.jsx("input",{type:"text",id:"image",name:"image",value:n.image,onChange:v})]}),h.jsx("button",{type:"submit",className:V.submit_button,children:"Save"}),h.jsx("button",{type:"button",onClick:E,className:V.cancel_button,children:"Cancel"})]}),l&&h.jsx("div",{className:V.outer,style:f,children:h.jsxs("div",{className:V.confirmation,style:_,children:[h.jsx("p",{style:f,children:"Do you want to confirm these changes?"}),h.jsx("button",{onClick:w,children:"Yes"}),h.jsx("button",{onClick:m,children:"No"})]})})]})}const vM="_App_1g683_3",yM="_input_group_1g683_41",wM="_btn_style_1g683_97",EM="_message_1g683_133",SM="_back_to_login_1g683_149",ps={App:vM,input_group:yM,btn_style:wM,message:EM,back_to_login:SM};function y_(){const[t,e]=S.useState(""),[n,r]=S.useState(""),i=_t(),s=async o=>{o.preventDefault();const a=_w();try{await eP(a,t),r("Password reset email sent successfully. Please check your inbox.")}catch(l){r(`Error: ${l.message}`)}};return h.jsxs("div",{className:ps.App,children:[h.jsx("h1",{children:"Forgot Password"}),h.jsxs("form",{onSubmit:s,children:[h.jsxs("div",{className:ps.input_group,children:[h.jsx("label",{htmlFor:"email",children:"Email"}),h.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:t,onChange:o=>e(o.target.value)})]}),h.jsx("div",{className:ps.btn_style,children:h.jsx("button",{type:"submit",children:"Send Reset Email"})}),n&&h.jsx("div",{className:ps.message,children:n})]}),h.jsx("button",{className:ps.back_to_login,onClick:()=>i("/"),children:"Back to Login"})]})}function _S(){const[t,e]=S.useState({}),[n,r]=S.useState(0),[i,s]=S.useState(0),[o,a]=S.useState(!0),{isDarkTheme:l}=gn(),c={color:l?"#f8f8f8":"#333"};return S.useEffect(()=>{const d=He(Ze,"items"),u=He(Ze,"categories"),f=v=>{const w=v.val();if(w){const E={};let m=0;for(let p in w){const g=w[p]||{},y=Object.keys(g).length;E[p]={itemCount:y,items:g},m+=y}e(E),r(m)}else e({}),r(0);a(!1)};Ui(u,v=>{const w=v.val();s(w?Object.keys(w).length:0)},v=>{console.error("Error fetching categories:",v)}),Ui(d,f,v=>{console.error("Error fetching items:",v),a(!1)})},[]),o?h.jsx("p",{children:"Loading inventory..."}):h.jsxs("div",{style:c,children:[h.jsxs("h1",{style:c,children:["Total Categories: ",i]})," ",h.jsxs("h2",{children:["Total Items in Inventory: ",n]}),h.jsx("h3",{children:"Items by Category:"}),Object.keys(t).length>0?h.jsx("ul",{children:Object.entries(t).map(([d,{itemCount:u,items:f}])=>h.jsxs("li",{children:[h.jsxs("strong",{children:[d,":"]})," ",u," items",h.jsx("ul",{children:Object.entries(f).map(([_,v])=>h.jsxs("li",{children:[h.jsx("strong",{children:v.name}),": Stock - ",v.stock," "]},_))})]},d))}):h.jsx("p",{children:"No items found."})]})}const CM=({onLogout:t})=>{const e=_t(),{isDarkTheme:n,toggleTheme:r}=gn(),[i,s]=S.useState(!1),[o,a]=S.useState(!1),l=()=>{e("/inventory")},c=async()=>{try{await sP(Yh),t(),e("/")}catch(w){console.error("Logout error:",w)}},d=()=>{e("/item-categories")},u=w=>{w.preventDefault(),s(!0)},f=()=>{s(!1)},_={color:n?"#f8f8f8":"#333"},v={backgroundColor:n?"#333":"#fff"};return h.jsxs("header",{className:"header-container",children:[h.jsx("button",{className:"header-button",onClick:d,children:"Home"}),h.jsx("button",{className:"header-button",onClick:l,children:"Count "}),o&&h.jsx(_S,{}),h.jsx("button",{className:"header-button",onClick:r,children:n?"Light Mode":"Dark Mode"}),h.jsx("button",{className:"header-button",onClick:u,children:"Logout"}),i&&h.jsx("div",{className:"confirmation-overlay",style:_,children:h.jsxs("div",{className:"confirmation-modal",style:v,children:[h.jsx("p",{children:"Are you sure you want to log out?"}),h.jsx("button",{onClick:c,children:"Yes"}),h.jsx("button",{onClick:f,children:"No"})]})})]})},IM=({children:t,isLoggedIn:e,onLogout:n})=>{const{isDarkTheme:r}=gn(),i={backgroundColor:r?"#333":"#f8f8f8",color:r?"#f8f8f8":"#333",minHeight:"100vh",width:"100vw",margin:0,padding:0,overflowX:"hidden"};return h.jsxs("div",{style:i,children:[e&&h.jsx(CM,{onLogout:n}),h.jsx("main",{children:t})," "]})};function TM(){const[t,e]=S.useState(()=>localStorage.getItem("isLoggedIn")==="true"),n=()=>{e(!0),localStorage.setItem("isLoggedIn","true")},r=()=>{e(!1),localStorage.removeItem("isLoggedIn")},[i,s]=S.useState([]),o=f=>{s(_=>[..._,f])},a=f=>{const _=i.filter(v=>v!==f);s(_)},l=[{}],c=(f,_)=>{switch(_.type){case"addItem":return[...f,_.payload];case"editItem":return f.map(v=>v.id===_.payload.id?{..._.payload}:v);default:return f}},[d,u]=S.useReducer(c,l);return h.jsx(sI,{children:h.jsx(QI,{children:t?h.jsx(IM,{isLoggedIn:t,onLogout:r,children:h.jsxs(Cm,{children:[h.jsx(De,{path:"/item-categories",element:h.jsx(jL,{categories:i,handleDelete:a})}),h.jsx(De,{path:"/add-item-categories",element:h.jsx(BL,{addCategory:o})}),h.jsx(De,{path:"/item-types/:category",element:h.jsx(eM,{items:d})}),h.jsx(De,{path:"/add-item-type/:categorys",element:h.jsx(uM,{addItem:f=>u({type:"addItem",payload:f})})}),h.jsx(De,{path:"/details/:category/:item",element:h.jsx(gM,{items:d})}),h.jsx(De,{path:"/editdetails/:category/:itemId",element:h.jsx(_M,{})}),h.jsx(De,{path:"/inventory",element:h.jsx(_S,{})}),h.jsx(De,{path:"/forgot-password",element:h.jsx(y_,{})}),h.jsx(De,{path:"*",element:h.jsx(Sm,{to:"/item-categories"})})," "]})}):h.jsxs(Cm,{children:[h.jsx(De,{path:"/",element:h.jsx(LE,{onLogin:n})}),h.jsx(De,{path:"/create-account",element:h.jsx(bO,{})}),h.jsx(De,{path:"/account_success",element:h.jsx(RO,{})}),h.jsx(De,{path:"/forgot-password",element:h.jsx(y_,{})}),h.jsx(De,{path:"*",element:h.jsx(Sm,{to:"/"})})," "]})})})}Oy(document.getElementById("root")).render(h.jsx(S.StrictMode,{children:h.jsx(TM,{})}));
