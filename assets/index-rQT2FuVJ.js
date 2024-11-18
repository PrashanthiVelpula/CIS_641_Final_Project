function dS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function p_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m_={exports:{}},Il={},g_={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),fS=Symbol.for("react.portal"),hS=Symbol.for("react.fragment"),pS=Symbol.for("react.strict_mode"),mS=Symbol.for("react.profiler"),gS=Symbol.for("react.provider"),_S=Symbol.for("react.context"),vS=Symbol.for("react.forward_ref"),yS=Symbol.for("react.suspense"),wS=Symbol.for("react.memo"),ES=Symbol.for("react.lazy"),np=Symbol.iterator;function SS(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v_=Object.assign,y_={};function zi(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||__}zi.prototype.isReactComponent={};zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w_(){}w_.prototype=zi.prototype;function Gd(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||__}var Kd=Gd.prototype=new w_;Kd.constructor=Gd;v_(Kd,zi.prototype);Kd.isPureReactComponent=!0;var rp=Array.isArray,E_=Object.prototype.hasOwnProperty,Yd={current:null},S_={key:!0,ref:!0,__self:!0,__source:!0};function C_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E_.call(e,r)&&!S_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vo,type:t,key:s,ref:o,props:i,_owner:Yd.current}}function CS(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function IS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IS(""+t.key):e.toString(36)}function oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case fS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mc(o,0):r,rp(i)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),oa(i,e,n,"",function(c){return c})):i!=null&&(qd(i)&&(i=CS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+mc(s,a);o+=oa(s,e,n,l,i)}else if(l=SS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+mc(s,a++),o+=oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uo(t,e,n){if(t==null)return t;var r=[],i=0;return oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},aa={transition:null},kS={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:aa,ReactCurrentOwner:Yd};function I_(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=zi;W.Fragment=hS;W.Profiler=mS;W.PureComponent=Gd;W.StrictMode=pS;W.Suspense=yS;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;W.act=I_;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=v_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)E_.call(e,l)&&!S_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vo,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:_S,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gS,_context:t},t.Consumer=t};W.createElement=C_;W.createFactory=function(t){var e=C_.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:vS,render:t}};W.isValidElement=qd;W.lazy=function(t){return{$$typeof:ES,_payload:{_status:-1,_result:t},_init:TS}};W.memo=function(t,e){return{$$typeof:wS,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=aa.transition;aa.transition={};try{t()}finally{aa.transition=e}};W.unstable_act=I_;W.useCallback=function(t,e){return Ue.current.useCallback(t,e)};W.useContext=function(t){return Ue.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ue.current.useEffect(t,e)};W.useId=function(){return Ue.current.useId()};W.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ue.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};W.useRef=function(t){return Ue.current.useRef(t)};W.useState=function(t){return Ue.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Ue.current.useTransition()};W.version="18.3.1";g_.exports=W;var S=g_.exports;const Qd=p_(S),xS=dS({__proto__:null,default:Qd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NS=S,PS=Symbol.for("react.element"),RS=Symbol.for("react.fragment"),bS=Object.prototype.hasOwnProperty,AS=NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OS={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bS.call(e,r)&&!OS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PS,type:t,key:s,ref:o,props:i,_owner:AS.current}}Il.Fragment=RS;Il.jsx=T_;Il.jsxs=T_;m_.exports=Il;var g=m_.exports,k_={exports:{}},it={},x_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var M=k.length;k.push(D);e:for(;0<M;){var ue=M-1>>>1,ye=k[ue];if(0<i(ye,D))k[ue]=D,k[M]=ye,M=ue;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],M=k.pop();if(M!==D){k[0]=M;e:for(var ue=0,ye=k.length,Fo=ye>>>1;ue<Fo;){var ar=2*(ue+1)-1,pc=k[ar],lr=ar+1,jo=k[lr];if(0>i(pc,M))lr<ye&&0>i(jo,pc)?(k[ue]=jo,k[lr]=M,ue=lr):(k[ue]=pc,k[ar]=M,ue=ar);else if(lr<ye&&0>i(jo,M))k[ue]=jo,k[lr]=M,ue=lr;else break e}}return D}function i(k,D){var M=k.sortIndex-D.sortIndex;return M!==0?M:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,m=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=k)r(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function E(k){if(y=!1,_(k),!v)if(n(l)!==null)v=!0,or(I);else{var D=n(c);D!==null&&_n(E,D.startTime-k)}}function I(k,D){v=!1,y&&(y=!1,p(b),b=-1),m=!0;var M=f;try{for(_(D),u=n(l);u!==null&&(!(u.expirationTime>D)||k&&!qe());){var ue=u.callback;if(typeof ue=="function"){u.callback=null,f=u.priorityLevel;var ye=ue(u.expirationTime<=D);D=t.unstable_now(),typeof ye=="function"?u.callback=ye:u===n(l)&&r(l),_(D)}else r(l);u=n(l)}if(u!==null)var Fo=!0;else{var ar=n(c);ar!==null&&_n(E,ar.startTime-D),Fo=!1}return Fo}finally{u=null,f=M,m=!1}}var P=!1,x=null,b=-1,G=5,L=-1;function qe(){return!(t.unstable_now()-L<G)}function ir(){if(x!==null){var k=t.unstable_now();L=k;var D=!0;try{D=x(!0,k)}finally{D?sr():(P=!1,x=null)}}else P=!1}var sr;if(typeof h=="function")sr=function(){h(ir)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,V=Mo.port2;Mo.port1.onmessage=ir,sr=function(){V.postMessage(null)}}else sr=function(){w(ir,0)};function or(k){x=k,P||(P=!0,sr())}function _n(k,D){b=w(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,or(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return k()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=f;f=k;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(k,D,M){var ue=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ue+M:ue):M=ue,k){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=M+ye,k={id:d++,callback:D,priorityLevel:k,startTime:M,expirationTime:ye,sortIndex:-1},M>ue?(k.sortIndex=M,e(c,k),n(l)===null&&k===n(c)&&(y?(p(b),b=-1):y=!0,_n(E,M-ue))):(k.sortIndex=ye,e(l,k),v||m||(v=!0,or(I))),k},t.unstable_shouldYield=qe,t.unstable_wrapCallback=function(k){var D=f;return function(){var M=f;f=D;try{return k.apply(this,arguments)}finally{f=M}}}})(N_);x_.exports=N_;var DS=x_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=S,rt=DS;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P_=new Set,Fs={};function Ur(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Fs[t]=e,t=0;t<e.length;t++)P_.add(e[t])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,MS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},op={};function FS(t){return du.call(op,t)?!0:du.call(sp,t)?!1:MS.test(t)?op[t]=!0:(sp[t]=!0,!1)}function jS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function US(t,e,n,r){if(e===null||typeof e>"u"||jS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Jd);xe[e]=new ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Jd);xe[e]=new ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Jd);xe[e]=new ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new ze(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zd(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(US(e,n,i,r)&&(n=null),r||i===null?FS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),A_=Symbol.for("react.offscreen"),ap=Symbol.iterator;function Xi(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,gc;function ds(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var _c=!1;function vc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function zS(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case qr:return"Portal";case fu:return"Profiler";case ef:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b_:return(t.displayName||"Context")+".Consumer";case R_:return(t._context.displayName||"Context")+".Provider";case tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nf:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function WS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $S(t){var e=O_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=$S(t))}function D_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=O_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ta(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&Zd(t,"checked",e,!1)}function _u(t,e){L_(t,e);var n=Gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,Gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||Ta(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(fs(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gn(n)}}function M_(t,e){var n=Gn(e.value),r=Gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $o,j_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BS=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(t){BS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ys[e]=ys[t]})});function U_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ys.hasOwnProperty(t)&&ys[t]?(""+e).trim():e+"px"}function z_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=U_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VS=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(t,e){if(e){if(VS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Iu=null,fi=null,hi=null;function fp(t){if(t=Eo(t)){if(typeof Iu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Pl(e),Iu(t.stateNode,t.type,e))}}function W_(t){fi?hi?hi.push(t):hi=[t]:fi=t}function $_(){if(fi){var t=fi,e=hi;if(hi=fi=null,fp(t),e)for(t=0;t<e.length;t++)fp(e[t])}}function B_(t,e){return t(e)}function V_(){}var yc=!1;function H_(t,e,n){if(yc)return t(e,n);yc=!0;try{return B_(t,e,n)}finally{yc=!1,(fi!==null||hi!==null)&&(V_(),$_())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Tu=!1;if(nn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Tu=!1}function HS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ws=!1,ka=null,xa=!1,ku=null,GS={onError:function(t){ws=!0,ka=t}};function KS(t,e,n,r,i,s,o,a,l){ws=!1,ka=null,HS.apply(GS,arguments)}function YS(t,e,n,r,i,s,o,a,l){if(KS.apply(this,arguments),ws){if(ws){var c=ka;ws=!1,ka=null}else throw Error(C(198));xa||(xa=!0,ku=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hp(t){if(zr(t)!==t)throw Error(C(188))}function qS(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hp(i),t;if(s===r)return hp(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function K_(t){return t=qS(t),t!==null?Y_(t):null}function Y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Y_(t);if(e!==null)return e;t=t.sibling}return null}var q_=rt.unstable_scheduleCallback,pp=rt.unstable_cancelCallback,QS=rt.unstable_shouldYield,XS=rt.unstable_requestPaint,de=rt.unstable_now,JS=rt.unstable_getCurrentPriorityLevel,sf=rt.unstable_ImmediatePriority,Q_=rt.unstable_UserBlockingPriority,Na=rt.unstable_NormalPriority,ZS=rt.unstable_LowPriority,X_=rt.unstable_IdlePriority,Tl=null,Ft=null;function eC(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:rC,tC=Math.log,nC=Math.LN2;function rC(t){return t>>>=0,t===0?32:31-(tC(t)/nC|0)|0}var Bo=64,Vo=4194304;function hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hs(a):(s&=o,s!==0&&(r=hs(s)))}else o=n&~i,o!==0?r=hs(o):s!==0&&(r=hs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function iC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=iC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J_(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function oC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function Z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ev,af,tv,nv,rv,Nu=!1,Ho=[],Dn=null,Ln=null,Mn=null,zs=new Map,Ws=new Map,Cn=[],aC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function Zi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Eo(e),e!==null&&af(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lC(t,e,n,r,i){switch(e){case"focusin":return Dn=Zi(Dn,t,e,n,r,i),!0;case"dragenter":return Ln=Zi(Ln,t,e,n,r,i),!0;case"mouseover":return Mn=Zi(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zs.set(s,Zi(zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ws.set(s,Zi(Ws.get(s)||null,t,e,n,r,i)),!0}return!1}function iv(t){var e=mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=G_(n),e!==null){t.blockedOn=e,rv(t.priority,function(){tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cu=r,n.target.dispatchEvent(r),Cu=null}else return e=Eo(n),e!==null&&af(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){la(t)&&n.delete(e)}function cC(){Nu=!1,Dn!==null&&la(Dn)&&(Dn=null),Ln!==null&&la(Ln)&&(Ln=null),Mn!==null&&la(Mn)&&(Mn=null),zs.forEach(gp),Ws.forEach(gp)}function es(t,e){t.blockedOn===e&&(t.blockedOn=null,Nu||(Nu=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,cC)))}function $s(t){function e(i){return es(i,t)}if(0<Ho.length){es(Ho[0],t);for(var n=1;n<Ho.length;n++){var r=Ho[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&es(Dn,t),Ln!==null&&es(Ln,t),Mn!==null&&es(Mn,t),zs.forEach(e),Ws.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)iv(n),n.blockedOn===null&&Cn.shift()}var pi=fn.ReactCurrentBatchConfig,Ra=!0;function uC(t,e,n,r){var i=H,s=pi.transition;pi.transition=null;try{H=1,lf(t,e,n,r)}finally{H=i,pi.transition=s}}function dC(t,e,n,r){var i=H,s=pi.transition;pi.transition=null;try{H=4,lf(t,e,n,r)}finally{H=i,pi.transition=s}}function lf(t,e,n,r){if(Ra){var i=Pu(t,e,n,r);if(i===null)Rc(t,e,r,ba,n),mp(t,r);else if(lC(i,t,e,n,r))r.stopPropagation();else if(mp(t,r),e&4&&-1<aC.indexOf(t)){for(;i!==null;){var s=Eo(i);if(s!==null&&ev(s),s=Pu(t,e,n,r),s===null&&Rc(t,e,r,ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rc(t,e,r,null,n)}}var ba=null;function Pu(t,e,n,r){if(ba=null,t=rf(r),t=mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ba=t,null}function sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JS()){case sf:return 1;case Q_:return 4;case Na:case ZS:return 16;case X_:return 536870912;default:return 16}default:return 16}}var Pn=null,cf=null,ca=null;function ov(){if(ca)return ca;var t,e=cf,n=e.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ca=i.slice(t,1<r?1-r:void 0)}function ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function _p(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:_p,this.isPropagationStopped=_p,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=st(Wi),wo=oe({},Wi,{view:0,detail:0}),fC=st(wo),Ec,Sc,ts,kl=oe({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?(Ec=t.screenX-ts.screenX,Sc=t.screenY-ts.screenY):Sc=Ec=0,ts=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),vp=st(kl),hC=oe({},kl,{dataTransfer:0}),pC=st(hC),mC=oe({},wo,{relatedTarget:0}),Cc=st(mC),gC=oe({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),_C=st(gC),vC=oe({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yC=st(vC),wC=oe({},Wi,{data:0}),yp=st(wC),EC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CC[t])?!!e[t]:!1}function df(){return IC}var TC=oe({},wo,{key:function(t){if(t.key){var e=EC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kC=st(TC),xC=oe({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=st(xC),NC=oe({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),PC=st(NC),RC=oe({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),bC=st(RC),AC=oe({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OC=st(AC),DC=[9,13,27,32],ff=nn&&"CompositionEvent"in window,Es=null;nn&&"documentMode"in document&&(Es=document.documentMode);var LC=nn&&"TextEvent"in window&&!Es,av=nn&&(!ff||Es&&8<Es&&11>=Es),Ep=" ",Sp=!1;function lv(t,e){switch(t){case"keyup":return DC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function MC(t,e){switch(t){case"compositionend":return cv(e);case"keypress":return e.which!==32?null:(Sp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Sp?null:t;default:return null}}function FC(t,e){if(Xr)return t==="compositionend"||!ff&&lv(t,e)?(t=ov(),ca=cf=Pn=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return av&&e.locale!=="ko"?null:e.data;default:return null}}var jC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jC[t.type]:e==="textarea"}function uv(t,e,n,r){W_(r),e=Aa(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ss=null,Bs=null;function UC(t){Ev(t,0)}function xl(t){var e=ei(t);if(D_(e))return t}function zC(t,e){if(t==="change")return e}var dv=!1;if(nn){var Ic;if(nn){var Tc="oninput"in document;if(!Tc){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Tc=typeof Ip.oninput=="function"}Ic=Tc}else Ic=!1;dv=Ic&&(!document.documentMode||9<document.documentMode)}function Tp(){Ss&&(Ss.detachEvent("onpropertychange",fv),Bs=Ss=null)}function fv(t){if(t.propertyName==="value"&&xl(Bs)){var e=[];uv(e,Bs,t,rf(t)),H_(UC,e)}}function WC(t,e,n){t==="focusin"?(Tp(),Ss=e,Bs=n,Ss.attachEvent("onpropertychange",fv)):t==="focusout"&&Tp()}function $C(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Bs)}function BC(t,e){if(t==="click")return xl(e)}function VC(t,e){if(t==="input"||t==="change")return xl(e)}function HC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:HC;function Vs(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!du.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,e){var n=kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pv(){for(var t=window,e=Ta();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ta(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GC(t){var e=pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hv(n.ownerDocument.documentElement,n)){if(r!==null&&hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xp(n,s);var o=xp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KC=nn&&"documentMode"in document&&11>=document.documentMode,Jr=null,Ru=null,Cs=null,bu=!1;function Np(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||Jr==null||Jr!==Ta(r)||(r=Jr,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cs&&Vs(Cs,r)||(Cs=r,r=Aa(Ru,"onSelect"),0<r.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jr)))}function Ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},kc={},mv={};nn&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Nl(t){if(kc[t])return kc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mv)return kc[t]=e[n];return t}var gv=Nl("animationend"),_v=Nl("animationiteration"),vv=Nl("animationstart"),yv=Nl("transitionend"),wv=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){wv.set(t,e),Ur(e,[t])}for(var xc=0;xc<Pp.length;xc++){var Nc=Pp[xc],YC=Nc.toLowerCase(),qC=Nc[0].toUpperCase()+Nc.slice(1);er(YC,"on"+qC)}er(gv,"onAnimationEnd");er(_v,"onAnimationIteration");er(vv,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(yv,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));function Rp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YS(r,e,void 0,t),t.currentTarget=null}function Ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rp(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rp(i,a,c),s=l}}}if(xa)throw t=ku,xa=!1,ku=null,t}function J(t,e){var n=e[Mu];n===void 0&&(n=e[Mu]=new Set);var r=t+"__bubble";n.has(r)||(Sv(e,t,2,!1),n.add(r))}function Pc(t,e,n){var r=0;e&&(r|=4),Sv(n,t,r,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Yo]){t[Yo]=!0,P_.forEach(function(n){n!=="selectionchange"&&(QC.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,Pc("selectionchange",!1,e))}}function Sv(t,e,n,r){switch(sv(e)){case 1:var i=uC;break;case 4:i=dC;break;default:i=lf}n=i.bind(null,e,n,t),i=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}H_(function(){var c=s,d=rf(n),u=[];e:{var f=wv.get(t);if(f!==void 0){var m=uf,v=t;switch(t){case"keypress":if(ua(n)===0)break e;case"keydown":case"keyup":m=kC;break;case"focusin":v="focus",m=Cc;break;case"focusout":v="blur",m=Cc;break;case"beforeblur":case"afterblur":m=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=PC;break;case gv:case _v:case vv:m=_C;break;case yv:m=bC;break;case"scroll":m=fC;break;case"wheel":m=OC;break;case"copy":case"cut":case"paste":m=yC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wp}var y=(e&4)!==0,w=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var h=c,_;h!==null;){_=h;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,p!==null&&(E=Us(h,p),E!=null&&y.push(Gs(h,E,_)))),w)break;h=h.return}0<y.length&&(f=new m(f,v,null,n,d),u.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Cu&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[rn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?mr(v):null,v!==null&&(w=zr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=vp,E="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=wp,E="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?f:ei(m),_=v==null?f:ei(v),f=new y(E,h+"leave",m,n,d),f.target=w,f.relatedTarget=_,E=null,mr(d)===c&&(y=new y(p,h+"enter",v,n,d),y.target=_,y.relatedTarget=w,E=y),w=E,m&&v)t:{for(y=m,p=v,h=0,_=y;_;_=Kr(_))h++;for(_=0,E=p;E;E=Kr(E))_++;for(;0<h-_;)y=Kr(y),h--;for(;0<_-h;)p=Kr(p),_--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=Kr(y),p=Kr(p)}y=null}else y=null;m!==null&&bp(u,f,m,y,!1),v!==null&&w!==null&&bp(u,w,v,y,!0)}}e:{if(f=c?ei(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var I=zC;else if(Cp(f))if(dv)I=VC;else{I=$C;var P=WC}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=BC);if(I&&(I=I(t,c))){uv(u,I,n,d);break e}P&&P(t,f,c),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&vu(f,"number",f.value)}switch(P=c?ei(c):window,t){case"focusin":(Cp(P)||P.contentEditable==="true")&&(Jr=P,Ru=c,Cs=null);break;case"focusout":Cs=Ru=Jr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Np(u,n,d);break;case"selectionchange":if(KC)break;case"keydown":case"keyup":Np(u,n,d)}var x;if(ff)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Xr?lv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(av&&n.locale!=="ko"&&(Xr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Xr&&(x=ov()):(Pn=d,cf="value"in Pn?Pn.value:Pn.textContent,Xr=!0)),P=Aa(c,b),0<P.length&&(b=new yp(b,t,null,n,d),u.push({event:b,listeners:P}),x?b.data=x:(x=cv(n),x!==null&&(b.data=x)))),(x=LC?MC(t,n):FC(t,n))&&(c=Aa(c,"onBeforeInput"),0<c.length&&(d=new yp("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=x))}Ev(u,e)})}function Gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Us(t,n),s!=null&&r.unshift(Gs(t,s,i)),s=Us(t,e),s!=null&&r.push(Gs(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Us(n,s),l!=null&&o.unshift(Gs(n,l,a))):i||(l=Us(n,s),l!=null&&o.push(Gs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XC=/\r\n?/g,JC=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(XC,`
`).replace(JC,"")}function qo(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(C(425))}function Oa(){}var Au=null,Ou=null;function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,ZC=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(t1)}:Lu;function t1(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$s(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $i=Math.random().toString(36).slice(2),Ot="__reactFiber$"+$i,Ks="__reactProps$"+$i,rn="__reactContainer$"+$i,Mu="__reactEvents$"+$i,n1="__reactListeners$"+$i,r1="__reactHandles$"+$i;function mr(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rn]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dp(t);t!==null;){if(n=t[Ot])return n;t=Dp(t)}return e}t=n,n=t.parentNode}return null}function Eo(t){return t=t[Ot]||t[rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Pl(t){return t[Ks]||null}var Fu=[],ti=-1;function tr(t){return{current:t}}function ee(t){0>ti||(t.current=Fu[ti],Fu[ti]=null,ti--)}function X(t,e){ti++,Fu[ti]=t.current,t.current=e}var Kn={},Oe=tr(Kn),He=tr(!1),Tr=Kn;function Ii(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(t){return t=t.childContextTypes,t!=null}function Da(){ee(He),ee(Oe)}function Lp(t,e,n){if(Oe.current!==Kn)throw Error(C(168));X(Oe,e),X(He,n)}function Cv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,WS(t)||"Unknown",i));return oe({},n,r)}function La(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,Tr=Oe.current,X(Oe,t),X(He,He.current),!0}function Mp(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Cv(t,e,Tr),r.__reactInternalMemoizedMergedChildContext=t,ee(He),ee(Oe),X(Oe,t)):ee(He),X(He,n)}var Gt=null,Rl=!1,Ac=!1;function Iv(t){Gt===null?Gt=[t]:Gt.push(t)}function i1(t){Rl=!0,Iv(t)}function nr(){if(!Ac&&Gt!==null){Ac=!0;var t=0,e=H;try{var n=Gt;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gt=null,Rl=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(t+1)),q_(sf,nr),i}finally{H=e,Ac=!1}}return null}var ni=[],ri=0,Ma=null,Fa=0,lt=[],ct=0,kr=null,Kt=1,Yt="";function ur(t,e){ni[ri++]=Fa,ni[ri++]=Ma,Ma=t,Fa=e}function Tv(t,e,n){lt[ct++]=Kt,lt[ct++]=Yt,lt[ct++]=kr,kr=t;var r=Kt;t=Yt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Ct(e)+i|n<<i|r,Yt=s+t}else Kt=1<<s|n<<i|r,Yt=t}function pf(t){t.return!==null&&(ur(t,1),Tv(t,1,0))}function mf(t){for(;t===Ma;)Ma=ni[--ri],ni[ri]=null,Fa=ni[--ri],ni[ri]=null;for(;t===kr;)kr=lt[--ct],lt[ct]=null,Yt=lt[--ct],lt[ct]=null,Kt=lt[--ct],lt[ct]=null}var Ze=null,Xe=null,ne=!1,wt=null;function kv(t,e){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Kt,overflow:Yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Xe=null,!0):!1;default:return!1}}function ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uu(t){if(ne){var e=Xe;if(e){var n=e;if(!Fp(t,e)){if(ju(t))throw Error(C(418));e=Fn(n.nextSibling);var r=Ze;e&&Fp(t,e)?kv(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ze=t)}}else{if(ju(t))throw Error(C(418));t.flags=t.flags&-4097|2,ne=!1,Ze=t}}}function jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Qo(t){if(t!==Ze)return!1;if(!ne)return jp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Du(t.type,t.memoizedProps)),e&&(e=Xe)){if(ju(t))throw xv(),Error(C(418));for(;e;)kv(t,e),e=Fn(e.nextSibling)}if(jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Ze?Fn(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=Xe;t;)t=Fn(t.nextSibling)}function Ti(){Xe=Ze=null,ne=!1}function gf(t){wt===null?wt=[t]:wt.push(t)}var s1=fn.ReactCurrentBatchConfig;function ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Xo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Up(t){var e=t._init;return e(t._payload)}function Nv(t){function e(p,h){if(t){var _=p.deletions;_===null?(p.deletions=[h],p.flags|=16):_.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Wn(p,h),p.index=0,p.sibling=null,p}function s(p,h,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<h?(p.flags|=2,h):_):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,_,E){return h===null||h.tag!==6?(h=Uc(_,p.mode,E),h.return=p,h):(h=i(h,_),h.return=p,h)}function l(p,h,_,E){var I=_.type;return I===Qr?d(p,h,_.props.children,E,_.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===En&&Up(I)===h.type)?(E=i(h,_.props),E.ref=ns(p,h,_),E.return=p,E):(E=_a(_.type,_.key,_.props,null,p.mode,E),E.ref=ns(p,h,_),E.return=p,E)}function c(p,h,_,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==_.containerInfo||h.stateNode.implementation!==_.implementation?(h=zc(_,p.mode,E),h.return=p,h):(h=i(h,_.children||[]),h.return=p,h)}function d(p,h,_,E,I){return h===null||h.tag!==7?(h=Er(_,p.mode,E,I),h.return=p,h):(h=i(h,_),h.return=p,h)}function u(p,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Uc(""+h,p.mode,_),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zo:return _=_a(h.type,h.key,h.props,null,p.mode,_),_.ref=ns(p,null,h),_.return=p,_;case qr:return h=zc(h,p.mode,_),h.return=p,h;case En:var E=h._init;return u(p,E(h._payload),_)}if(fs(h)||Xi(h))return h=Er(h,p.mode,_,null),h.return=p,h;Xo(p,h)}return null}function f(p,h,_,E){var I=h!==null?h.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return I!==null?null:a(p,h,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zo:return _.key===I?l(p,h,_,E):null;case qr:return _.key===I?c(p,h,_,E):null;case En:return I=_._init,f(p,h,I(_._payload),E)}if(fs(_)||Xi(_))return I!==null?null:d(p,h,_,E,null);Xo(p,_)}return null}function m(p,h,_,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(_)||null,a(h,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case zo:return p=p.get(E.key===null?_:E.key)||null,l(h,p,E,I);case qr:return p=p.get(E.key===null?_:E.key)||null,c(h,p,E,I);case En:var P=E._init;return m(p,h,_,P(E._payload),I)}if(fs(E)||Xi(E))return p=p.get(_)||null,d(h,p,E,I,null);Xo(h,E)}return null}function v(p,h,_,E){for(var I=null,P=null,x=h,b=h=0,G=null;x!==null&&b<_.length;b++){x.index>b?(G=x,x=null):G=x.sibling;var L=f(p,x,_[b],E);if(L===null){x===null&&(x=G);break}t&&x&&L.alternate===null&&e(p,x),h=s(L,h,b),P===null?I=L:P.sibling=L,P=L,x=G}if(b===_.length)return n(p,x),ne&&ur(p,b),I;if(x===null){for(;b<_.length;b++)x=u(p,_[b],E),x!==null&&(h=s(x,h,b),P===null?I=x:P.sibling=x,P=x);return ne&&ur(p,b),I}for(x=r(p,x);b<_.length;b++)G=m(x,p,b,_[b],E),G!==null&&(t&&G.alternate!==null&&x.delete(G.key===null?b:G.key),h=s(G,h,b),P===null?I=G:P.sibling=G,P=G);return t&&x.forEach(function(qe){return e(p,qe)}),ne&&ur(p,b),I}function y(p,h,_,E){var I=Xi(_);if(typeof I!="function")throw Error(C(150));if(_=I.call(_),_==null)throw Error(C(151));for(var P=I=null,x=h,b=h=0,G=null,L=_.next();x!==null&&!L.done;b++,L=_.next()){x.index>b?(G=x,x=null):G=x.sibling;var qe=f(p,x,L.value,E);if(qe===null){x===null&&(x=G);break}t&&x&&qe.alternate===null&&e(p,x),h=s(qe,h,b),P===null?I=qe:P.sibling=qe,P=qe,x=G}if(L.done)return n(p,x),ne&&ur(p,b),I;if(x===null){for(;!L.done;b++,L=_.next())L=u(p,L.value,E),L!==null&&(h=s(L,h,b),P===null?I=L:P.sibling=L,P=L);return ne&&ur(p,b),I}for(x=r(p,x);!L.done;b++,L=_.next())L=m(x,p,b,L.value,E),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?b:L.key),h=s(L,h,b),P===null?I=L:P.sibling=L,P=L);return t&&x.forEach(function(ir){return e(p,ir)}),ne&&ur(p,b),I}function w(p,h,_,E){if(typeof _=="object"&&_!==null&&_.type===Qr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case zo:e:{for(var I=_.key,P=h;P!==null;){if(P.key===I){if(I=_.type,I===Qr){if(P.tag===7){n(p,P.sibling),h=i(P,_.props.children),h.return=p,p=h;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===En&&Up(I)===P.type){n(p,P.sibling),h=i(P,_.props),h.ref=ns(p,P,_),h.return=p,p=h;break e}n(p,P);break}else e(p,P);P=P.sibling}_.type===Qr?(h=Er(_.props.children,p.mode,E,_.key),h.return=p,p=h):(E=_a(_.type,_.key,_.props,null,p.mode,E),E.ref=ns(p,h,_),E.return=p,p=E)}return o(p);case qr:e:{for(P=_.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===_.containerInfo&&h.stateNode.implementation===_.implementation){n(p,h.sibling),h=i(h,_.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=zc(_,p.mode,E),h.return=p,p=h}return o(p);case En:return P=_._init,w(p,h,P(_._payload),E)}if(fs(_))return v(p,h,_,E);if(Xi(_))return y(p,h,_,E);Xo(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,_),h.return=p,p=h):(n(p,h),h=Uc(_,p.mode,E),h.return=p,p=h),o(p)):n(p,h)}return w}var ki=Nv(!0),Pv=Nv(!1),ja=tr(null),Ua=null,ii=null,_f=null;function vf(){_f=ii=Ua=null}function yf(t){var e=ja.current;ee(ja),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){Ua=t,_f=ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},ii===null){if(Ua===null)throw Error(C(308));ii=t,Ua.dependencies={lanes:0,firstContext:t}}else ii=ii.next=t;return e}var gr=null;function wf(t){gr===null?gr=[t]:gr.push(t)}function Rv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wf(e)):(n.next=i.next,i.next=n),e.interleaved=n,sn(t,r)}function sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sn=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sn(t,n)}return i=r.interleaved,i===null?(e.next=e,wf(r)):(e.next=i.next,i.next=e),r.interleaved=e,sn(t,n)}function da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,of(t,n)}}function zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function za(t,e,n,r){var i=t.updateQueue;Sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){u=v.call(m,u,f);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(m,u,f):v,f==null)break e;u=oe({},u,f);break e;case 2:Sn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=u):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nr|=o,t.lanes=o,t.memoizedState=u}}function Wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var So={},jt=tr(So),Ys=tr(So),qs=tr(So);function _r(t){if(t===So)throw Error(C(174));return t}function Sf(t,e){switch(X(qs,e),X(Ys,t),X(jt,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wu(e,t)}ee(jt),X(jt,e)}function xi(){ee(jt),ee(Ys),ee(qs)}function Av(t){_r(qs.current);var e=_r(jt.current),n=wu(e,t.type);e!==n&&(X(Ys,t),X(jt,n))}function Cf(t){Ys.current===t&&(ee(jt),ee(Ys))}var ie=tr(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function If(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var fa=fn.ReactCurrentDispatcher,Dc=fn.ReactCurrentBatchConfig,xr=0,se=null,pe=null,Ee=null,$a=!1,Is=!1,Qs=0,o1=0;function Re(){throw Error(C(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function kf(t,e,n,r,i,s){if(xr=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fa.current=t===null||t.memoizedState===null?u1:d1,t=n(r,i),Is){s=0;do{if(Is=!1,Qs=0,25<=s)throw Error(C(301));s+=1,Ee=pe=null,e.updateQueue=null,fa.current=f1,t=n(r,i)}while(Is)}if(fa.current=Ba,e=pe!==null&&pe.next!==null,xr=0,Ee=pe=se=null,$a=!1,e)throw Error(C(300));return t}function xf(){var t=Qs!==0;return Qs=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?se.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function mt(){if(pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=Ee===null?se.memoizedState:Ee.next;if(e!==null)Ee=e,pe=t;else{if(t===null)throw Error(C(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ee===null?se.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Xs(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=mt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((xr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,se.lanes|=d,Nr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,Nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=mt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ov(){}function Dv(t,e){var n=se,r=mt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,Nf(Fv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Js(9,Mv.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(C(349));xr&30||Lv(n,e,i)}return i}function Lv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mv(t,e,n,r){e.value=n,e.getSnapshot=r,jv(e)&&Uv(t)}function Fv(t,e,n){return n(function(){jv(e)&&Uv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Uv(t){var e=sn(t,1);e!==null&&It(e,t,1,-1)}function $p(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=c1.bind(null,se,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zv(){return mt().memoizedState}function ha(t,e,n,r){var i=bt();se.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function bl(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&Tf(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}se.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function Bp(t,e){return ha(8390656,8,t,e)}function Nf(t,e){return bl(2048,8,t,e)}function Wv(t,e){return bl(4,2,t,e)}function $v(t,e){return bl(4,4,t,e)}function Bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vv(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Bv.bind(null,e,t),n)}function Pf(){}function Hv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kv(t,e,n){return xr&21?(kt(n,e)||(n=J_(),se.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function a1(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{H=n,Dc.transition=r}}function Yv(){return mt().memoizedState}function l1(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Qv(e,n);else if(n=Rv(t,e,n,r),n!==null){var i=Me();It(n,t,r,i),Xv(n,e,r)}}function c1(t,e,n){var r=zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Qv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,wf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Rv(t,e,i,r),n!==null&&(i=Me(),It(n,t,r,i),Xv(n,e,r))}}function qv(t){var e=t.alternate;return t===se||e!==null&&e===se}function Qv(t,e){Is=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,of(t,n)}}var Ba={readContext:pt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},u1={readContext:pt,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ha(4194308,4,Bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=l1.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:$p,useDebugValue:Pf,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=$p(!1),e=t[0];return t=a1.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=bt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ce===null)throw Error(C(349));xr&30||Lv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bp(Fv.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,Mv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Ce.identifierPrefix;if(ne){var n=Yt,r=Kt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},d1={readContext:pt,useCallback:Hv,useContext:pt,useEffect:Nf,useImperativeHandle:Vv,useInsertionEffect:Wv,useLayoutEffect:$v,useMemo:Gv,useReducer:Lc,useRef:zv,useState:function(){return Lc(Xs)},useDebugValue:Pf,useDeferredValue:function(t){var e=mt();return Kv(e,pe.memoizedState,t)},useTransition:function(){var t=Lc(Xs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Ov,useSyncExternalStore:Dv,useId:Yv,unstable_isNewReconciler:!1},f1={readContext:pt,useCallback:Hv,useContext:pt,useEffect:Nf,useImperativeHandle:Vv,useInsertionEffect:Wv,useLayoutEffect:$v,useMemo:Gv,useReducer:Mc,useRef:zv,useState:function(){return Mc(Xs)},useDebugValue:Pf,useDeferredValue:function(t){var e=mt();return pe===null?e.memoizedState=t:Kv(e,pe.memoizedState,t)},useTransition:function(){var t=Mc(Xs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Ov,useSyncExternalStore:Dv,useId:Yv,unstable_isNewReconciler:!1};function vt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=zn(t),s=Zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(It(e,t,i,r),da(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=zn(t),s=Zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(It(e,t,i,r),da(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=zn(t),i=Zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=jn(t,i,r),e!==null&&(It(e,t,r,n),da(e,t,r))}};function Vp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vs(n,r)||!Vs(i,s):!0}function Jv(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Ge(e)?Tr:Oe.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Ge(e)?Tr:Oe.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Al.enqueueReplaceState(i,i.state,null),za(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ni(t,e){try{var n="",r=e;do n+=zS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var h1=typeof WeakMap=="function"?WeakMap:Map;function Zv(t,e,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,Zu=r),Bu(t,e)},n}function ey(t,e,n){n=Zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bu(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new h1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=x1.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zt(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var p1=fn.ReactCurrentOwner,$e=!1;function De(t,e,n,r){e.child=t===null?Pv(e,null,n,r):ki(e,t.child,n,r)}function qp(t,e,n,r,i){n=n.render;var s=e.ref;return mi(e,i),r=kf(t,e,n,r,s,i),n=xf(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,on(t,e,i)):(ne&&n&&pf(e),e.flags|=1,De(t,e,r,i),e.child)}function Qp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ty(t,e,s,r,i)):(t=_a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vs,n(o,r)&&t.ref===e.ref)return on(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ty(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vs(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,on(t,e,i)}return Vu(t,e,n,r,i)}function ny(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(oi,Qe),Qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(oi,Qe),Qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(oi,Qe),Qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(oi,Qe),Qe|=r;return De(t,e,i,n),e.child}function ry(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vu(t,e,n,r,i){var s=Ge(n)?Tr:Oe.current;return s=Ii(e,s),mi(e,i),n=kf(t,e,n,r,s,i),r=xf(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,on(t,e,i)):(ne&&r&&pf(e),e.flags|=1,De(t,e,n,i),e.child)}function Xp(t,e,n,r,i){if(Ge(n)){var s=!0;La(e)}else s=!1;if(mi(e,i),e.stateNode===null)pa(t,e),Jv(e,n,r),$u(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Ge(n)?Tr:Oe.current,c=Ii(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Hp(e,o,r,c),Sn=!1;var f=e.memoizedState;o.state=f,za(e,r,o,i),l=e.memoizedState,a!==r||f!==l||He.current||Sn?(typeof d=="function"&&(Wu(e,n,d,r),l=e.memoizedState),(a=Sn||Vp(e,n,a,r,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vt(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ge(n)?Tr:Oe.current,l=Ii(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&Hp(e,o,r,l),Sn=!1,f=e.memoizedState,o.state=f,za(e,r,o,i);var v=e.memoizedState;a!==u||f!==v||He.current||Sn?(typeof m=="function"&&(Wu(e,n,m,r),v=e.memoizedState),(c=Sn||Vp(e,n,c,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Hu(t,e,n,r,s,i)}function Hu(t,e,n,r,i,s){ry(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mp(e,n,!1),on(t,e,s);r=e.stateNode,p1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ki(e,t.child,null,s),e.child=ki(e,null,a,s)):De(t,e,a,s),e.memoizedState=r.state,i&&Mp(e,n,!0),e.child}function iy(t){var e=t.stateNode;e.pendingContext?Lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(t,e.context,!1),Sf(t,e.containerInfo)}function Jp(t,e,n,r,i){return Ti(),gf(i),e.flags|=256,De(t,e,n,r),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function sy(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ie,i&1),t===null)return Uu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ll(o,r,0,null),t=Er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ku(n),e.memoizedState=Gu,t):Rf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return m1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ku(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gu,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rf(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jo(t,e,n,r){return r!==null&&gf(r),ki(e,t.child,null,n),t=Rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function m1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(C(422))),Jo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ll({mode:"visible",children:r.children},i,0,null),s=Er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ki(e,t.child,null,o),e.child.memoizedState=Ku(o),e.memoizedState=Gu,s);if(!(e.mode&1))return Jo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Fc(s,r,void 0),Jo(t,e,o,r)}if(a=(o&t.childLanes)!==0,$e||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sn(t,i),It(r,t,i,-1))}return Mf(),r=Fc(Error(C(421))),Jo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=N1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xe=Fn(i.nextSibling),Ze=e,ne=!0,wt=null,t!==null&&(lt[ct++]=Kt,lt[ct++]=Yt,lt[ct++]=kr,Kt=t.id,Yt=t.overflow,kr=e),e=Rf(e,r.children),e.flags|=4096,e)}function Zp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zu(t.return,e,n)}function jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function oy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(De(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function on(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g1(t,e,n){switch(e.tag){case 3:iy(e),Ti();break;case 5:Av(e);break;case 1:Ge(e.type)&&La(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(ja,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?sy(t,e,n):(X(ie,ie.current&1),t=on(t,e,n),t!==null?t.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,ny(t,e,n)}return on(t,e,n)}var ay,Yu,ly,cy;ay=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};ly=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_r(jt.current);var s=null;switch(n){case"input":i=gu(t,i),r=gu(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=yu(t,i),r=yu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oa)}Eu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cy=function(t,e,n,r){n!==r&&(e.flags|=4)};function rs(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _1(t,e,n){var r=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return Ge(e.type)&&Da(),be(e),null;case 3:return r=e.stateNode,xi(),ee(He),ee(Oe),If(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(nd(wt),wt=null))),Yu(t,e),be(e),null;case 5:Cf(e);var i=_r(qs.current);if(n=e.type,t!==null&&e.stateNode!=null)ly(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return be(e),null}if(t=_r(jt.current),Qo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<ps.length;i++)J(ps[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":lp(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":up(r,s),J("invalid",r)}Eu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qo(r.textContent,a,t),i=["children",""+a]):Fs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Wo(r),cp(r,s,!0);break;case"textarea":Wo(r),dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[Ks]=r,ay(t,e,!1,!1),e.stateNode=t;e:{switch(o=Su(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<ps.length;i++)J(ps[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":lp(t,r),i=gu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",t);break;case"textarea":up(t,r),i=yu(t,r),J("invalid",t);break;default:i=r}Eu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?z_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&j_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&js(t,l):typeof l=="number"&&js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Zd(t,s,l,o))}switch(n){case"input":Wo(t),cp(t,r,!1);break;case"textarea":Wo(t),dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?di(t,!!r.multiple,s,!1):r.defaultValue!=null&&di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return be(e),null;case 6:if(t&&e.stateNode!=null)cy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=_r(qs.current),_r(jt.current),Qo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:qo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return be(e),null;case 13:if(ee(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Xe!==null&&e.mode&1&&!(e.flags&128))xv(),Ti(),e.flags|=98560,s=!1;else if(s=Qo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ot]=e}else Ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;be(e),s=!1}else wt!==null&&(nd(wt),wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?_e===0&&(_e=3):Mf())),e.updateQueue!==null&&(e.flags|=4),be(e),null);case 4:return xi(),Yu(t,e),t===null&&Hs(e.stateNode.containerInfo),be(e),null;case 10:return yf(e.type._context),be(e),null;case 17:return Ge(e.type)&&Da(),be(e),null;case 19:if(ee(ie),s=e.memoizedState,s===null)return be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)rs(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wa(t),o!==null){for(e.flags|=128,rs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>Pi&&(e.flags|=128,r=!0,rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return be(e),null}else 2*de()-s.renderingStartTime>Pi&&n!==1073741824&&(e.flags|=128,r=!0,rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),e):(be(e),null);case 22:case 23:return Lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qe&1073741824&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function v1(t,e){switch(mf(e),e.tag){case 1:return Ge(e.type)&&Da(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xi(),ee(He),ee(Oe),If(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cf(e),null;case 13:if(ee(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(ie),null;case 4:return xi(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Zo=!1,Ae=!1,y1=typeof WeakSet=="function"?WeakSet:Set,N=null;function si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function qu(t,e,n){try{n()}catch(r){ae(t,e,r)}}var em=!1;function w1(t,e){if(Au=Ra,t=pv(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var m;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)f=u,u=m;for(;;){if(u===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(m=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},Ra=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:vt(e.type,y),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){ae(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=em,em=!1,v}function Ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qu(e,n,s)}i=i.next}while(i!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uy(t){var e=t.alternate;e!==null&&(t.alternate=null,uy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[Ks],delete e[Mu],delete e[n1],delete e[r1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dy(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(r!==4&&(t=t.child,t!==null))for(Xu(t,e,n),t=t.sibling;t!==null;)Xu(t,e,n),t=t.sibling}function Ju(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ju(t,e,n),t=t.sibling;t!==null;)Ju(t,e,n),t=t.sibling}var Ie=null,yt=!1;function vn(t,e,n){for(n=n.child;n!==null;)fy(t,e,n),n=n.sibling}function fy(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:Ae||si(n,e);case 6:var r=Ie,i=yt;Ie=null,vn(t,e,n),Ie=r,yt=i,Ie!==null&&(yt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(yt?(t=Ie,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),$s(t)):bc(Ie,n.stateNode));break;case 4:r=Ie,i=yt,Ie=n.stateNode.containerInfo,yt=!0,vn(t,e,n),Ie=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qu(n,e,o),i=i.next}while(i!==r)}vn(t,e,n);break;case 1:if(!Ae&&(si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}vn(t,e,n);break;case 21:vn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,vn(t,e,n),Ae=r):vn(t,e,n);break;default:vn(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y1),e.forEach(function(r){var i=P1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,yt=!1;break e;case 3:Ie=a.stateNode.containerInfo,yt=!0;break e;case 4:Ie=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ie===null)throw Error(C(160));fy(s,o,i),Ie=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hy(e,t),e=e.sibling}function hy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),Rt(t),r&4){try{Ts(3,t,t.return),Ol(3,t)}catch(y){ae(t,t.return,y)}try{Ts(5,t,t.return)}catch(y){ae(t,t.return,y)}}break;case 1:_t(e,t),Rt(t),r&512&&n!==null&&si(n,n.return);break;case 5:if(_t(e,t),Rt(t),r&512&&n!==null&&si(n,n.return),t.flags&32){var i=t.stateNode;try{js(i,"")}catch(y){ae(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L_(i,s),Su(a,o);var c=Su(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?z_(i,u):d==="dangerouslySetInnerHTML"?j_(i,u):d==="children"?js(i,u):Zd(i,d,u,c)}switch(a){case"input":_u(i,s);break;case"textarea":M_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?di(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?di(i,!!s.multiple,s.defaultValue,!0):di(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(y){ae(t,t.return,y)}}break;case 6:if(_t(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ae(t,t.return,y)}}break;case 3:if(_t(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(y){ae(t,t.return,y)}break;case 4:_t(e,t),Rt(t);break;case 13:_t(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Of=de())),r&4&&nm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(c=Ae)||d,_t(e,t),Ae=c):_t(e,t),Rt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(u=N=d;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ts(4,f,f.return);break;case 1:si(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:si(f,f.return);break;case 22:if(f.memoizedState!==null){im(u);continue}}m!==null?(m.return=f,N=m):im(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=U_("display",o))}catch(y){ae(t,t.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){ae(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:_t(e,t),Rt(t),r&4&&nm(t);break;case 21:break;default:_t(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dy(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(js(i,""),r.flags&=-33);var s=tm(t);Ju(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tm(t);Xu(t,a,o);break;default:throw Error(C(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E1(t,e,n){N=t,py(t)}function py(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=Zo;var c=Ae;if(Zo=o,(Ae=l)&&!c)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?sm(i):l!==null?(l.return=o,N=l):sm(i);for(;s!==null;)N=s,py(s),s=s.sibling;N=i,Zo=a,Ae=c}rm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):rm(t)}}function rm(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&$s(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ae||e.flags&512&&Qu(e)}catch(f){ae(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function im(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function sm(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{Qu(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{Qu(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var S1=Math.ceil,Va=fn.ReactCurrentDispatcher,bf=fn.ReactCurrentOwner,ft=fn.ReactCurrentBatchConfig,$=0,Ce=null,fe=null,ke=0,Qe=0,oi=tr(0),_e=0,Zs=null,Nr=0,Dl=0,Af=0,ks=null,We=null,Of=0,Pi=1/0,Ht=null,Ha=!1,Zu=null,Un=null,ea=!1,Rn=null,Ga=0,xs=0,ed=null,ma=-1,ga=0;function Me(){return $&6?de():ma!==-1?ma:ma=de()}function zn(t){return t.mode&1?$&2&&ke!==0?ke&-ke:s1.transition!==null?(ga===0&&(ga=J_()),ga):(t=H,t!==0||(t=window.event,t=t===void 0?16:sv(t.type)),t):1}function It(t,e,n,r){if(50<xs)throw xs=0,ed=null,Error(C(185));yo(t,n,r),(!($&2)||t!==Ce)&&(t===Ce&&(!($&2)&&(Dl|=n),_e===4&&In(t,ke)),Ke(t,r),n===1&&$===0&&!(e.mode&1)&&(Pi=de()+500,Rl&&nr()))}function Ke(t,e){var n=t.callbackNode;sC(t,e);var r=Pa(t,t===Ce?ke:0);if(r===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?i1(om.bind(null,t)):Iv(om.bind(null,t)),e1(function(){!($&6)&&nr()}),n=null;else{switch(Z_(r)){case 1:n=sf;break;case 4:n=Q_;break;case 16:n=Na;break;case 536870912:n=X_;break;default:n=Na}n=Sy(n,my.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function my(t,e){if(ma=-1,ga=0,$&6)throw Error(C(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=Pa(t,t===Ce?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ka(t,r);else{e=r;var i=$;$|=2;var s=_y();(Ce!==t||ke!==e)&&(Ht=null,Pi=de()+500,wr(t,e));do try{T1();break}catch(a){gy(t,a)}while(!0);vf(),Va.current=s,$=i,fe!==null?e=0:(Ce=null,ke=0,e=_e)}if(e!==0){if(e===2&&(i=xu(t),i!==0&&(r=i,e=td(t,i))),e===1)throw n=Zs,wr(t,0),In(t,r),Ke(t,de()),n;if(e===6)In(t,r);else{if(i=t.current.alternate,!(r&30)&&!C1(i)&&(e=Ka(t,r),e===2&&(s=xu(t),s!==0&&(r=s,e=td(t,s))),e===1))throw n=Zs,wr(t,0),In(t,r),Ke(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:dr(t,We,Ht);break;case 3:if(In(t,r),(r&130023424)===r&&(e=Of+500-de(),10<e)){if(Pa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lu(dr.bind(null,t,We,Ht),e);break}dr(t,We,Ht);break;case 4:if(In(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S1(r/1960))-r,10<r){t.timeoutHandle=Lu(dr.bind(null,t,We,Ht),r);break}dr(t,We,Ht);break;case 5:dr(t,We,Ht);break;default:throw Error(C(329))}}}return Ke(t,de()),t.callbackNode===n?my.bind(null,t):null}function td(t,e){var n=ks;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Ka(t,e),t!==2&&(e=We,We=n,e!==null&&nd(e)),t}function nd(t){We===null?We=t:We.push.apply(We,t)}function C1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(t,e){for(e&=~Af,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function om(t){if($&6)throw Error(C(327));gi();var e=Pa(t,0);if(!(e&1))return Ke(t,de()),null;var n=Ka(t,e);if(t.tag!==0&&n===2){var r=xu(t);r!==0&&(e=r,n=td(t,r))}if(n===1)throw n=Zs,wr(t,0),In(t,e),Ke(t,de()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,We,Ht),Ke(t,de()),null}function Df(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Pi=de()+500,Rl&&nr())}}function Pr(t){Rn!==null&&Rn.tag===0&&!($&6)&&gi();var e=$;$|=1;var n=ft.transition,r=H;try{if(ft.transition=null,H=1,t)return t()}finally{H=r,ft.transition=n,$=e,!($&6)&&nr()}}function Lf(){Qe=oi.current,ee(oi)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZC(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Da();break;case 3:xi(),ee(He),ee(Oe),If();break;case 5:Cf(r);break;case 4:xi();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:yf(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(Ce=t,fe=t=Wn(t.current,null),ke=Qe=e,_e=0,Zs=null,Af=Dl=Nr=0,We=ks=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gr=null}return t}function gy(t,e){do{var n=fe;try{if(vf(),fa.current=Ba,$a){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$a=!1}if(xr=0,Ee=pe=se=null,Is=!1,Qs=0,bf.current=null,n===null||n.return===null){_e=1,Zs=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Kp(o);if(m!==null){m.flags&=-257,Yp(m,o,a,s,e),m.mode&1&&Gp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Gp(s,c,e),Mf();break e}l=Error(C(426))}}else if(ne&&a.mode&1){var w=Kp(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Yp(w,o,a,s,e),gf(Ni(l,a));break e}}s=l=Ni(l,a),_e!==4&&(_e=2),ks===null?ks=[s]:ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Zv(s,l,e);zp(s,p);break e;case 1:a=l;var h=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Un===null||!Un.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=ey(s,a,e);zp(s,E);break e}}s=s.return}while(s!==null)}yy(n)}catch(I){e=I,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function _y(){var t=Va.current;return Va.current=Ba,t===null?Ba:t}function Mf(){(_e===0||_e===3||_e===2)&&(_e=4),Ce===null||!(Nr&268435455)&&!(Dl&268435455)||In(Ce,ke)}function Ka(t,e){var n=$;$|=2;var r=_y();(Ce!==t||ke!==e)&&(Ht=null,wr(t,e));do try{I1();break}catch(i){gy(t,i)}while(!0);if(vf(),$=n,Va.current=r,fe!==null)throw Error(C(261));return Ce=null,ke=0,_e}function I1(){for(;fe!==null;)vy(fe)}function T1(){for(;fe!==null&&!QS();)vy(fe)}function vy(t){var e=Ey(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?yy(t):fe=e,bf.current=null}function yy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=v1(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,fe=null;return}}else if(n=_1(n,e,Qe),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);_e===0&&(_e=5)}function dr(t,e,n){var r=H,i=ft.transition;try{ft.transition=null,H=1,k1(t,e,n,r)}finally{ft.transition=i,H=r}return null}function k1(t,e,n,r){do gi();while(Rn!==null);if($&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oC(t,s),t===Ce&&(fe=Ce=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,Sy(Na,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=H;H=1;var a=$;$|=4,bf.current=null,w1(t,n),hy(n,t),GC(Ou),Ra=!!Au,Ou=Au=null,t.current=n,E1(n),XS(),$=a,H=o,ft.transition=s}else t.current=n;if(ea&&(ea=!1,Rn=t,Ga=i),s=t.pendingLanes,s===0&&(Un=null),eC(n.stateNode),Ke(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,t=Zu,Zu=null,t;return Ga&1&&t.tag!==0&&gi(),s=t.pendingLanes,s&1?t===ed?xs++:(xs=0,ed=t):xs=0,nr(),null}function gi(){if(Rn!==null){var t=Z_(Ga),e=ft.transition,n=H;try{if(ft.transition=null,H=16>t?16:t,Rn===null)var r=!1;else{if(t=Rn,Rn=null,Ga=0,$&6)throw Error(C(331));var i=$;for($|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Ts(8,d,s)}var u=d.child;if(u!==null)u.return=d,N=u;else for(;N!==null;){d=N;var f=d.sibling,m=d.return;if(uy(d),d===c){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ts(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var h=t.current;for(N=h;N!==null;){o=N;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,N=_;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(I){ae(a,a.return,I)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if($=i,nr(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Tl,t)}catch{}r=!0}return r}finally{H=n,ft.transition=e}}return!1}function am(t,e,n){e=Ni(n,e),e=Zv(t,e,1),t=jn(t,e,1),e=Me(),t!==null&&(yo(t,1,e),Ke(t,e))}function ae(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=Ni(n,t),t=ey(e,t,1),e=jn(e,t,1),t=Me(),e!==null&&(yo(e,1,t),Ke(e,t));break}}e=e.return}}function x1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(ke&n)===n&&(_e===4||_e===3&&(ke&130023424)===ke&&500>de()-Of?wr(t,0):Af|=n),Ke(t,e)}function wy(t,e){e===0&&(t.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var n=Me();t=sn(t,e),t!==null&&(yo(t,e,n),Ke(t,n))}function N1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wy(t,n)}function P1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),wy(t,n)}var Ey;Ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,g1(t,e,n);$e=!!(t.flags&131072)}else $e=!1,ne&&e.flags&1048576&&Tv(e,Fa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pa(t,e),t=e.pendingProps;var i=Ii(e,Oe.current);mi(e,n),i=kf(null,e,r,t,i,n);var s=xf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(s=!0,La(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ef(e),i.updater=Al,e.stateNode=i,i._reactInternals=e,$u(e,r,t,n),e=Hu(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&pf(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=b1(r),t=vt(r,t),i){case 0:e=Vu(null,e,r,t,n);break e;case 1:e=Xp(null,e,r,t,n);break e;case 11:e=qp(null,e,r,t,n);break e;case 14:e=Qp(null,e,r,vt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Vu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Xp(t,e,r,i,n);case 3:e:{if(iy(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bv(t,e),za(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ni(Error(C(423)),e),e=Jp(t,e,r,n,i);break e}else if(r!==i){i=Ni(Error(C(424)),e),e=Jp(t,e,r,n,i);break e}else for(Xe=Fn(e.stateNode.containerInfo.firstChild),Ze=e,ne=!0,wt=null,n=Pv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){e=on(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return Av(e),t===null&&Uu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Du(r,i)?o=null:s!==null&&Du(r,s)&&(e.flags|=32),ry(t,e),De(t,e,o,n),e.child;case 6:return t===null&&Uu(e),null;case 13:return sy(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ki(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),qp(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(ja,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!He.current){e=on(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Zt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mi(e,n),i=pt(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=vt(r,e.pendingProps),i=vt(r.type,i),Qp(t,e,r,i,n);case 15:return ty(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),pa(t,e),e.tag=1,Ge(r)?(t=!0,La(e)):t=!1,mi(e,n),Jv(e,r,i),$u(e,r,i,n),Hu(null,e,r,!0,t,n);case 19:return oy(t,e,n);case 22:return ny(t,e,n)}throw Error(C(156,e.tag))};function Sy(t,e){return q_(t,e)}function R1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,e,n,r){return new R1(t,e,n,r)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b1(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tf)return 11;if(t===nf)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _a(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qr:return Er(n.children,i,s,e);case ef:o=8,i|=8;break;case fu:return t=ut(12,n,e,i|2),t.elementType=fu,t.lanes=s,t;case hu:return t=ut(13,n,e,i),t.elementType=hu,t.lanes=s,t;case pu:return t=ut(19,n,e,i),t.elementType=pu,t.lanes=s,t;case A_:return Ll(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R_:o=10;break e;case b_:o=9;break e;case tf:o=11;break e;case nf:o=14;break e;case En:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Er(t,e,n,r){return t=ut(7,t,r,e),t.lanes=n,t}function Ll(t,e,n,r){return t=ut(22,t,r,e),t.elementType=A_,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=ut(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jf(t,e,n,r,i,s,o,a,l){return t=new A1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(s),t}function O1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cy(t){if(!t)return Kn;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ge(n))return Cv(t,n,e)}return e}function Iy(t,e,n,r,i,s,o,a,l){return t=jf(n,r,!0,t,i,s,o,a,l),t.context=Cy(null),n=t.current,r=Me(),i=zn(n),s=Zt(r,i),s.callback=e??null,jn(n,s,i),t.current.lanes=i,yo(t,i,r),Ke(t,r),t}function Ml(t,e,n,r){var i=e.current,s=Me(),o=zn(i);return n=Cy(n),e.context===null?e.context=n:e.pendingContext=n,e=Zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(i,e,o),t!==null&&(It(t,i,o,s),da(t,i,o)),o}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uf(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function D1(){return null}var Ty=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}Fl.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Ml(t,e,null,null)};Fl.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Ml(null,t,null,null)}),e[rn]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&iv(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cm(){}function L1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ya(o);s.call(c)}}var o=Iy(e,r,t,0,null,!1,!1,"",cm);return t._reactRootContainer=o,t[rn]=o.current,Hs(t.nodeType===8?t.parentNode:t),Pr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ya(l);a.call(c)}}var l=jf(t,0,!1,null,null,!1,!1,"",cm);return t._reactRootContainer=l,t[rn]=l.current,Hs(t.nodeType===8?t.parentNode:t),Pr(function(){Ml(e,l,n,r)}),l}function Ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ya(o);a.call(l)}}Ml(e,o,t,i)}else o=L1(n,e,t,i,r);return Ya(o)}ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hs(e.pendingLanes);n!==0&&(of(e,n|1),Ke(e,de()),!($&6)&&(Pi=de()+500,nr()))}break;case 13:Pr(function(){var r=sn(t,1);if(r!==null){var i=Me();It(r,t,1,i)}}),Uf(t,1)}};af=function(t){if(t.tag===13){var e=sn(t,134217728);if(e!==null){var n=Me();It(e,t,134217728,n)}Uf(t,134217728)}};tv=function(t){if(t.tag===13){var e=zn(t),n=sn(t,e);if(n!==null){var r=Me();It(n,t,e,r)}Uf(t,e)}};nv=function(){return H};rv=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Iu=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pl(r);if(!i)throw Error(C(90));D_(r),_u(r,i)}}}break;case"textarea":M_(t,n);break;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}};B_=Df;V_=Pr;var M1={usingClientEntryPoint:!1,Events:[Eo,ei,Pl,W_,$_,Df]},is={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F1={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K_(t),t===null?null:t.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{Tl=ta.inject(F1),Ft=ta}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M1;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(C(200));return O1(t,e,null,n)};it.createRoot=function(t,e){if(!Wf(t))throw Error(C(299));var n=!1,r="",i=Ty;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jf(t,1,!1,null,null,n,!1,r,i),t[rn]=e.current,Hs(t.nodeType===8?t.parentNode:t),new zf(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=K_(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return Pr(t)};it.hydrate=function(t,e,n){if(!jl(e))throw Error(C(200));return Ul(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ty;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Iy(e,null,t,1,n??null,i,!1,s,o),t[rn]=e.current,Hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fl(e)};it.render=function(t,e,n){if(!jl(e))throw Error(C(200));return Ul(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!jl(t))throw Error(C(40));return t._reactRootContainer?(Pr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[rn]=null})}),!0):!1};it.unstable_batchedUpdates=Df;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Ul(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function ky(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ky)}catch(t){console.error(t)}}ky(),k_.exports=it;var j1=k_.exports,xy,um=j1;xy=um.createRoot,um.hydrateRoot;const U1="_App_5qj94_13",z1="_style1_5qj94_31",W1="_btn_style_5qj94_57",$1="_input_group_5qj94_79",B1="_FieldError_5qj94_113",V1="_error_5qj94_139",he={App:U1,style1:z1,btn_style:W1,input_group:$1,FieldError:B1,error:V1};var dm={};/**
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
 */const Ny={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Bi(e)},Bi=function(t){return new Error("Firebase Database ("+Ny.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Py=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},H1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[d],n[u],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Py(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):H1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new G1;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),u!==64){const v=c<<6&192|u;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ry=function(t){const e=Py(t);return $f.encodeByteArray(e,!0)},qa=function(t){return Ry(t).replace(/\./g,"")},Qa=function(t){try{return $f.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function K1(t){return by(void 0,t)}function by(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y1(n)||(t[n]=by(t[n],e[n]));return t}function Y1(t){return t!=="__proto__"}/**
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
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Q1=()=>q1().__FIREBASE_DEFAULTS__,X1=()=>{if(typeof process>"u"||typeof dm>"u")return;const t=dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},J1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qa(t[1]);return e&&JSON.parse(e)},Bf=()=>{try{return Q1()||X1()||J1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ay=t=>{var e,n;return(n=(e=Bf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Z1=t=>{const e=Ay(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Oy=()=>{var t;return(t=Bf())===null||t===void 0?void 0:t.config},Dy=t=>{var e;return(e=Bf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qa(JSON.stringify(n)),qa(JSON.stringify(o)),""].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function tI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ly(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function My(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nI(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fy(){return Ny.NODE_ADMIN===!0}function jy(){try{return typeof indexedDB=="object"}catch{return!1}}function Uy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function rI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iI="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iI,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function sI(t,e){return t.replace(oI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oI=/\{\$([^}]+)}/g;/**
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
 */function eo(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
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
 */const zy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=eo(Qa(s[0])||""),n=eo(Qa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},aI=function(t){const e=zy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lI=function(t){const e=zy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function to(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fm(s)&&fm(o)){if(!to(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fm(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class cI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function uI(t,e){const n=new dI(t,e);return n.subscribe.bind(n)}class dI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wc),i.error===void 0&&(i.error=Wc),i.complete===void 0&&(i.complete=Wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}function zl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const hI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const pI=1e3,mI=2,gI=4*60*60*1e3,_I=.5;function hm(t,e=pI,n=mI){const r=e*Math.pow(n,t),i=Math.round(_I*r*(Math.random()-.5)*2);return Math.min(gI,r+i)}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class vI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Co;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===fr?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
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
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const SI={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},CI=K.INFO,II={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=II[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const kI=(t,e)=>e.some(n=>t instanceof n);let pm,mm;function xI(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NI(){return mm||(mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wy=new WeakMap,id=new WeakMap,$y=new WeakMap,$c=new WeakMap,Hf=new WeakMap;function PI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wy.set(n,t)}).catch(()=>{}),Hf.set(e,t),e}function RI(t){if(id.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});id.set(t,e)}let sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$y.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bI(t){sd=t(sd)}function AI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return $y.set(r,e.sort?e.sort():[e]),$n(r)}:NI().includes(t)?function(...e){return t.apply(Bc(this),e),$n(Wy.get(this))}:function(...e){return $n(t.apply(Bc(this),e))}}function OI(t){return typeof t=="function"?AI(t):(t instanceof IDBTransaction&&RI(t),kI(t,xI())?new Proxy(t,sd):t)}function $n(t){if(t instanceof IDBRequest)return PI(t);if($c.has(t))return $c.get(t);const e=OI(t);return e!==t&&($c.set(t,e),Hf.set(e,t)),e}const Bc=t=>Hf.get(t);function By(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$n(o);return r&&o.addEventListener("upgradeneeded",l=>{r($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const DI=["get","getKey","getAll","getAllKeys","count"],LI=["put","add","delete","clear"],Vc=new Map;function gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Vc.set(e,s),s}bI(t=>({...t,get:(e,n,r)=>gm(e,n)||t.get(e,n,r),has:(e,n)=>!!gm(e,n)||t.has(e,n)}));/**
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
 */class MI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const od="@firebase/app",_m="0.10.16";/**
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
 */const an=new $l("@firebase/app"),jI="@firebase/app-compat",UI="@firebase/analytics-compat",zI="@firebase/analytics",WI="@firebase/app-check-compat",$I="@firebase/app-check",BI="@firebase/auth",VI="@firebase/auth-compat",HI="@firebase/database",GI="@firebase/data-connect",KI="@firebase/database-compat",YI="@firebase/functions",qI="@firebase/functions-compat",QI="@firebase/installations",XI="@firebase/installations-compat",JI="@firebase/messaging",ZI="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",rT="@firebase/remote-config-compat",iT="@firebase/storage",sT="@firebase/storage-compat",oT="@firebase/firestore",aT="@firebase/vertexai",lT="@firebase/firestore-compat",cT="firebase",uT="11.0.2";/**
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
 */const ad="[DEFAULT]",dT={[od]:"fire-core",[jI]:"fire-core-compat",[zI]:"fire-analytics",[UI]:"fire-analytics-compat",[$I]:"fire-app-check",[WI]:"fire-app-check-compat",[BI]:"fire-auth",[VI]:"fire-auth-compat",[HI]:"fire-rtdb",[GI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[YI]:"fire-fn",[qI]:"fire-fn-compat",[QI]:"fire-iid",[XI]:"fire-iid-compat",[JI]:"fire-fcm",[ZI]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[rT]:"fire-rc-compat",[iT]:"fire-gcs",[sT]:"fire-gcs-compat",[oT]:"fire-fst",[lT]:"fire-fst-compat",[aT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const Ja=new Map,fT=new Map,ld=new Map;function vm(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wt(t){const e=t.name;if(ld.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,t);for(const n of Ja.values())vm(n,t);for(const n of fT.values())vm(n,t);return!0}function $r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t.settings!==void 0}/**
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
 */const hT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Wr("app","Firebase",hT);/**
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
 */class pT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hi=uT;function Vy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ad,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=Oy()),!n)throw Bn.create("no-options");const s=Ja.get(i);if(s){if(to(n,s.options)&&to(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new EI(i);for(const l of ld.values())o.addComponent(l);const a=new pT(n,r,o);return Ja.set(i,a),a}function Gf(t=ad){const e=Ja.get(t);if(!e&&t===ad&&Oy())return Vy();if(!e)throw Bn.create("no-app",{appName:t});return e}function ht(t,e,n){var r;let i=(r=dT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}Wt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mT="firebase-heartbeat-database",gT=1,no="firebase-heartbeat-store";let Hc=null;function Hy(){return Hc||(Hc=By(mT,gT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function _T(t){try{const n=(await Hy()).transaction(no),r=await n.objectStore(no).get(Gy(t));return await n.done,r}catch(e){if(e instanceof Bt)an.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(n.message)}}}async function ym(t,e){try{const r=(await Hy()).transaction(no,"readwrite");await r.objectStore(no).put(e,Gy(t)),await r.done}catch(n){if(n instanceof Bt)an.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(r.message)}}}function Gy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vT=1024,yT=30*24*60*60*1e3;class wT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ST(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){an.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wm(),{heartbeatsToSend:r,unsentEntries:i}=ET(this._heartbeatsCache.heartbeats),s=qa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return an.warn(n),""}}}function wm(){return new Date().toISOString().substring(0,10)}function ET(t,e=vT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Em(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Em(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ST{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jy()?Uy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Em(t){return qa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CT(t){Wt(new xt("platform-logger",e=>new MI(e),"PRIVATE")),Wt(new xt("heartbeat",e=>new wT(e),"PRIVATE")),ht(od,_m,t),ht(od,_m,"esm2017"),ht("fire-js","")}CT("");var IT="firebase",TT="11.0.2";/**
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
 */ht(IT,TT,"app");const Ky="@firebase/installations",Kf="0.6.11";/**
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
 */const Yy=1e4,qy=`w:${Kf}`,Qy="FIS_v2",kT="https://firebaseinstallations.googleapis.com/v1",xT=60*60*1e3,NT="installations",PT="Installations";/**
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
 */const RT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rr=new Wr(NT,PT,RT);function Xy(t){return t instanceof Bt&&t.code.includes("request-failed")}/**
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
 */function Jy({projectId:t}){return`${kT}/projects/${t}/installations`}function Zy(t){return{token:t.token,requestStatus:2,expiresIn:AT(t.expiresIn),creationTime:Date.now()}}async function e0(t,e){const r=(await e.json()).error;return Rr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function t0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bT(t,{refreshToken:e}){const n=t0(t);return n.append("Authorization",OT(e)),n}async function n0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function AT(t){return Number(t.replace("s","000"))}function OT(t){return`${Qy} ${t}`}/**
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
 */async function DT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Jy(t),i=t0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Qy,appId:t.appId,sdkVersion:qy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await n0(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Zy(c.authToken)}}else throw await e0("Create Installation",l)}/**
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
 */function r0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function LT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MT=/^[cdef][\w-]{21}$/,cd="";function FT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jT(t);return MT.test(n)?n:cd}catch{return cd}}function jT(t){return LT(t).substr(0,22)}/**
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
 */function Bl(t){return`${t.appName}!${t.appId}`}/**
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
 */const i0=new Map;function s0(t,e){const n=Bl(t);o0(n,e),UT(n,e)}function o0(t,e){const n=i0.get(t);if(n)for(const r of n)r(e)}function UT(t,e){const n=zT();n&&n.postMessage({key:t,fid:e}),WT()}let vr=null;function zT(){return!vr&&"BroadcastChannel"in self&&(vr=new BroadcastChannel("[Firebase] FID Change"),vr.onmessage=t=>{o0(t.data.key,t.data.fid)}),vr}function WT(){i0.size===0&&vr&&(vr.close(),vr=null)}/**
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
 */const $T="firebase-installations-database",BT=1,br="firebase-installations-store";let Gc=null;function Yf(){return Gc||(Gc=By($T,BT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}})),Gc}async function Za(t,e){const n=Bl(t),i=(await Yf()).transaction(br,"readwrite"),s=i.objectStore(br),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&s0(t,e.fid),e}async function a0(t){const e=Bl(t),r=(await Yf()).transaction(br,"readwrite");await r.objectStore(br).delete(e),await r.done}async function Vl(t,e){const n=Bl(t),i=(await Yf()).transaction(br,"readwrite"),s=i.objectStore(br),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&s0(t,a.fid),a}/**
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
 */async function qf(t){let e;const n=await Vl(t.appConfig,r=>{const i=VT(r),s=HT(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function VT(t){const e=t||{fid:FT(),registrationStatus:0};return l0(e)}function HT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KT(t)}:{installationEntry:e}}async function GT(t,e){try{const n=await DT(t,e);return Za(t.appConfig,n)}catch(n){throw Xy(n)&&n.customData.serverCode===409?await a0(t.appConfig):await Za(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KT(t){let e=await Sm(t.appConfig);for(;e.registrationStatus===1;)await r0(100),e=await Sm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qf(t);return r||n}return e}function Sm(t){return Vl(t,e=>{if(!e)throw Rr.create("installation-not-found");return l0(e)})}function l0(t){return YT(t)?{fid:t.fid,registrationStatus:0}:t}function YT(t){return t.registrationStatus===1&&t.registrationTime+Yy<Date.now()}/**
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
 */async function qT({appConfig:t,heartbeatServiceProvider:e},n){const r=QT(t,n),i=bT(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:qy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await n0(()=>fetch(r,a));if(l.ok){const c=await l.json();return Zy(c)}else throw await e0("Generate Auth Token",l)}function QT(t,{fid:e}){return`${Jy(t)}/${e}/authTokens:generate`}/**
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
 */async function Qf(t,e=!1){let n;const r=await Vl(t.appConfig,s=>{if(!c0(s))throw Rr.create("not-registered");const o=s.authToken;if(!e&&ZT(o))return s;if(o.requestStatus===1)return n=XT(t,e),s;{if(!navigator.onLine)throw Rr.create("app-offline");const a=tk(s);return n=JT(t,a),a}});return n?await n:r.authToken}async function XT(t,e){let n=await Cm(t.appConfig);for(;n.authToken.requestStatus===1;)await r0(100),n=await Cm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qf(t,e):r}function Cm(t){return Vl(t,e=>{if(!c0(e))throw Rr.create("not-registered");const n=e.authToken;return nk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JT(t,e){try{const n=await qT(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Za(t.appConfig,r),n}catch(n){if(Xy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await a0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Za(t.appConfig,r)}throw n}}function c0(t){return t!==void 0&&t.registrationStatus===2}function ZT(t){return t.requestStatus===2&&!ek(t)}function ek(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xT}function tk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nk(t){return t.requestStatus===1&&t.requestTime+Yy<Date.now()}/**
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
 */async function rk(t){const e=t,{installationEntry:n,registrationPromise:r}=await qf(e);return r?r.catch(console.error):Qf(e).catch(console.error),n.fid}/**
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
 */async function ik(t,e=!1){const n=t;return await sk(n),(await Qf(n,e)).token}async function sk(t){const{registrationPromise:e}=await qf(t);e&&await e}/**
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
 */function ok(t){if(!t||!t.options)throw Kc("App Configuration");if(!t.name)throw Kc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kc(t){return Rr.create("missing-app-config-values",{valueName:t})}/**
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
 */const u0="installations",ak="installations-internal",lk=t=>{const e=t.getProvider("app").getImmediate(),n=ok(e),r=$r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ck=t=>{const e=t.getProvider("app").getImmediate(),n=$r(e,u0).getImmediate();return{getId:()=>rk(n),getToken:i=>ik(n,i)}};function uk(){Wt(new xt(u0,lk,"PUBLIC")),Wt(new xt(ak,ck,"PRIVATE"))}uk();ht(Ky,Kf);ht(Ky,Kf,"esm2017");/**
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
 */const el="analytics",dk="firebase_id",fk="origin",hk=60*1e3,pk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ye=new $l("@firebase/analytics");/**
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
 */const mk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new Wr("analytics","Analytics",mk);/**
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
 */function gk(t){if(!t.startsWith(Xf)){const e=et.create("invalid-gtag-resource",{gtagURL:t});return Ye.warn(e.message),""}return t}function d0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _k(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function vk(t,e){const n=_k("firebase-js-sdk-policy",{createScriptURL:gk}),r=document.createElement("script"),i=`${Xf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function yk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wk(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await d0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ye.error(a)}t("config",i,s)}async function Ek(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await d0(n);for(const l of o){const c=a.find(u=>u.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ye.error(s)}}function Sk(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Ek(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await wk(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ye.error(a)}}return i}function Ck(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Sk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ik(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xf)&&n.src.includes(t))return n;return null}/**
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
 */const Tk=30,kk=1e3;class xk{constructor(e={},n=kk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const f0=new xk;function Nk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Pk(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Nk(r)},s=pk.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Rk(t,e=f0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ok;return setTimeout(async()=>{a.abort()},hk),h0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function h0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=f0){var s;const{appId:o,measurementId:a}=t;try{await bk(r,e)}catch(l){if(a)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Pk(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Ak(c)){if(i.deleteThrottleMetadata(o),a)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?hm(n,i.intervalMillis,Tk):hm(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,u),Ye.debug(`Calling attemptFetch again in ${d} millis`),h0(t,u,r,i)}}function bk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ak(t){if(!(t instanceof Bt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ok{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dk(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Lk(){if(jy())try{await Uy()}catch(t){return Ye.warn(et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ye.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Mk(t,e,n,r,i,s,o){var a;const l=Rk(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ye.error(m)),e.push(l);const c=Lk().then(m=>{if(m)return r.getId()}),[d,u]=await Promise.all([l,c]);Ik(s)||vk(s,d.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[fk]="firebase",f.update=!0,u!=null&&(f[dk]=u),i("config",d.measurementId,f),d.measurementId}/**
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
 */class Fk{constructor(e){this.app=e}_delete(){return delete Ns[this.app.options.appId],Promise.resolve()}}let Ns={},Im=[];const Tm={};let Yc="dataLayer",jk="gtag",km,p0,xm=!1;function Uk(){const t=[];if(Ly()&&t.push("This is a browser extension environment."),rI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:e});Ye.warn(n.message)}}function zk(t,e,n){Uk();const r=t.options.appId;if(!r)throw et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(Ns[r]!=null)throw et.create("already-exists",{id:r});if(!xm){yk(Yc);const{wrappedGtag:s,gtagCore:o}=Ck(Ns,Im,Tm,Yc,jk);p0=s,km=o,xm=!0}return Ns[r]=Mk(t,Im,Tm,e,km,Yc,n),new Fk(t)}function Wk(t=Gf()){t=Pe(t);const e=$r(t,el);return e.isInitialized()?e.getImmediate():$k(t)}function $k(t,e={}){const n=$r(t,el);if(n.isInitialized()){const i=n.getImmediate();if(to(e,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:e})}function Bk(t,e,n,r){t=Pe(t),Dk(p0,Ns[t.app.options.appId],e,n,r).catch(i=>Ye.error(i))}const Nm="@firebase/analytics",Pm="0.10.10";function Vk(){Wt(new xt(el,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return zk(r,i,n)},"PUBLIC")),Wt(new xt("analytics-internal",t,"PRIVATE")),ht(Nm,Pm),ht(Nm,Pm,"esm2017");function t(e){try{const n=e.getProvider(el).getImmediate();return{logEvent:(r,i,s)=>Bk(n,r,i,s)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}Vk();function Jf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function m0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hk=m0,g0=new Wr("auth","Firebase",m0());/**
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
 */const tl=new $l("@firebase/auth");function Gk(t,...e){tl.logLevel<=K.WARN&&tl.warn(`Auth (${Hi}): ${t}`,...e)}function va(t,...e){tl.logLevel<=K.ERROR&&tl.error(`Auth (${Hi}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw Zf(t,...e)}function Ut(t,...e){return Zf(t,...e)}function _0(t,e,n){const r=Object.assign(Object.assign({},Hk()),{[e]:n});return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function en(t){return _0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return g0.create(t,...e)}function O(t,e,...n){if(!t)throw Zf(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw va(e),new Error(e)}function ln(t,e){t||qt(e)}/**
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
 */function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kk(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kk()||Ly()||"connection"in navigator)?navigator.onLine:!0}function qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Vf()||My()}get(){return Yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eh(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class v0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xk=new Io(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pn(t,e,n,r,i={}){return y0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return tI()||(c.referrerPolicy="no-referrer"),v0.fetch()(w0(t,t.config.apiHost,n,a),c)})}async function y0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qk),e);try{const i=new Zk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw na(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _0(t,d,c);Nt(t,d)}}catch(i){if(i instanceof Bt)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function To(t,e,n,r,i={}){const s=await pn(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function w0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?eh(t.config,i):`${t.config.apiScheme}://${i}`}function Jk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),Xk.get())})}}function na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}function bm(t){return t!==void 0&&t.enterprise!==void 0}class ex{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tx(t,e){return pn(t,"GET","/v2/recaptchaConfig",hn(t,e))}/**
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
 */async function nx(t,e){return pn(t,"POST","/v1/accounts:delete",e)}async function E0(t,e){return pn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rx(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=th(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ps(qc(i.auth_time)),issuedAtTime:Ps(qc(i.iat)),expirationTime:Ps(qc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return va("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qa(n);return i?JSON.parse(i):(va("Failed to decode base64 JWT payload"),null)}catch(i){return va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Am(t){const e=th(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&ix(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ix({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ro(t,E0(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?S0(s.providerUserInfo):[],a=ax(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function ox(t){const e=Pe(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ax(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function S0(t){return t.map(e=>{var{providerId:n}=e,r=Jf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lx(t,e){const n=await y0(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=w0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",v0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cx(t,e){return pn(t,"POST","/v2/accounts:revokeToken",hn(t,e))}/**
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
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Am(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _i;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
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
 */function yn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rx(this,e)}reload(){return ox(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await ro(this,nx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:E,isAnonymous:I,providerData:P,stsTokenManager:x}=n;O(_&&x,e,"internal-error");const b=_i.fromJSON(this.name,x);O(typeof _=="string",e,"internal-error"),yn(u,e.name),yn(f,e.name),O(typeof E=="boolean",e,"internal-error"),O(typeof I=="boolean",e,"internal-error"),yn(m,e.name),yn(v,e.name),yn(y,e.name),yn(w,e.name),yn(p,e.name),yn(h,e.name);const G=new Qt({uid:_,auth:e,email:f,emailVerified:E,displayName:u,isAnonymous:I,photoURL:v,phoneNumber:m,tenantId:y,stsTokenManager:b,createdAt:p,lastLoginAt:h});return P&&Array.isArray(P)&&(G.providerData=P.map(L=>Object.assign({},L))),w&&(G._redirectEventId=w),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new _i;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?S0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new _i;a.updateFromIdToken(r);const l=new Qt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Om=new Map;function Xt(t){ln(t instanceof Function,"Expected a class definition");let e=Om.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Om.set(t,e),e)}/**
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
 */class C0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C0.type="NONE";const Dm=C0;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vi(Xt(Dm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xt(Dm);const o=ya(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Qt._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new vi(s,e,r))}}/**
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
 */function Lm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P0(e))return"Blackberry";if(R0(e))return"Webos";if(T0(e))return"Safari";if((e.includes("chrome/")||k0(e))&&!e.includes("edge/"))return"Chrome";if(N0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function I0(t=je()){return/firefox\//i.test(t)}function T0(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function k0(t=je()){return/crios\//i.test(t)}function x0(t=je()){return/iemobile/i.test(t)}function N0(t=je()){return/android/i.test(t)}function P0(t=je()){return/blackberry/i.test(t)}function R0(t=je()){return/webos/i.test(t)}function nh(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ux(t=je()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dx(){return nI()&&document.documentMode===10}function b0(t=je()){return nh(t)||N0(t)||R0(t)||P0(t)||/windows phone/i.test(t)||x0(t)}/**
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
 */function A0(t,e=[]){let n;switch(t){case"Browser":n=Lm(je());break;case"Worker":n=`${Lm(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
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
 */class fx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hx(t,e={}){return pn(t,"GET","/v2/passwordPolicy",hn(t,e))}/**
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
 */const px=6;class mx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:px,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class gx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mm(this),this.idTokenSubscription=new Mm(this),this.beforeStateQueue=new fx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E0(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(en(this));const n=e?Pe(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hx(this),n=new mx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return Pe(t)}class Mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=uI(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _x(t){Hl=t}function O0(t){return Hl.loadJS(t)}function vx(){return Hl.recaptchaEnterpriseScript}function yx(){return Hl.gapiScript}function wx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ex{constructor(){this.enterprise=new Sx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Sx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Cx="recaptcha-enterprise",D0="NO_RECAPTCHA";class Ix{constructor(e){this.type=Cx,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ex(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;bm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(D0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ex().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&bm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=vx();l.length!==0&&(l+=a),O0(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fm(t,e,n,r=!1,i=!1){const s=new Ix(t);let o;if(i)o=D0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function rl(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Fm(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function Tx(t,e){const n=$r(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(to(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xx(t,e,n){const r=rr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=L0(e),{host:o,port:a}=Nx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Px()}function L0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nx(t){const e=L0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jm(o)}}}function jm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Px(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function Rx(t,e){return pn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bx(t,e){return To(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}async function Ax(t,e){return pn(t,"POST","/v1/accounts:sendOobCode",hn(t,e))}async function Ox(t,e){return Ax(t,e)}/**
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
 */async function Dx(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function Lx(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
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
 */class io extends rh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rl(e,n,"signInWithPassword",bx);case"emailLink":return Dx(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rl(e,r,"signUpPassword",Rx);case"emailLink":return Lx(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yi(t,e){return To(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
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
 */const Mx="http://localhost";class Ar extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ar(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:Mx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */function Fx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jx(t){const e=ms(gs(t)).link,n=e?ms(gs(e)).deep_link_id:null,r=ms(gs(t)).deep_link_id;return(r?ms(gs(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,i,s,o,a;const l=ms(gs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=Fx((i=l.mode)!==null&&i!==void 0?i:null);O(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jx(e);try{return new ih(n)}catch{return null}}}/**
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
 */class Gi{constructor(){this.providerId=Gi.PROVIDER_ID}static credential(e,n){return io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return O(r,"argument-error"),io._fromEmailAndCode(e,r.code,r.tenantId)}}Gi.PROVIDER_ID="password";Gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class M0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends M0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tn extends ko{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
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
 */class kn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class xn extends ko{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
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
 */class Nn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function Ux(t,e){return To(t,"POST","/v1/accounts:signUp",hn(t,e))}/**
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
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=Um(r);return new Or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Um(r);return new Or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class il extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new il(e,n,r,i)}}function F0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,r):s})}async function zx(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Or._forOperation(t,"link",r)}/**
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
 */async function Wx(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(en(r));const i="reauthenticate";try{const s=await ro(t,F0(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=th(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
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
 */async function j0(t,e,n=!1){if(Dt(t.app))return Promise.reject(en(t));const r="signIn",i=await F0(t,r,e),s=await Or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $x(t,e){return j0(rr(t),e)}/**
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
 */async function U0(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Bx(t,e,n){const r=rr(t);await rl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ox)}async function Vx(t,e,n){if(Dt(t.app))return Promise.reject(en(t));const r=rr(t),o=await rl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ux).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&U0(t),l}),a=await Or._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Hx(t,e,n){return Dt(t.app)?Promise.reject(en(t)):$x(Pe(t),Gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&U0(t),r})}function Gx(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function Kx(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function Yx(t){return Pe(t).signOut()}const sl="__sak";/**
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
 */class z0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qx=1e3,Qx=10;class W0 extends z0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W0.type="LOCAL";const Xx=W0;/**
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
 */class $0 extends z0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$0.type="SESSION";const B0=$0;/**
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
 */function Jx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Jx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
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
 */function sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=sh("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function eN(t){zt().location.href=t}/**
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
 */function V0(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function tN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rN(){return V0()?self:null}/**
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
 */const H0="firebaseLocalStorageDb",iN=1,ol="firebaseLocalStorage",G0="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function sN(){const t=indexedDB.deleteDatabase(H0);return new xo(t).toPromise()}function fd(){const t=indexedDB.open(H0,iN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:G0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await sN(),e(await fd()))})})}async function zm(t,e,n){const r=Kl(t,!0).put({[G0]:e,value:n});return new xo(r).toPromise()}async function oN(t,e){const n=Kl(t,!1).get(e),r=await new xo(n).toPromise();return r===void 0?null:r.value}function Wm(t,e){const n=Kl(t,!0).delete(e);return new xo(n).toPromise()}const aN=800,lN=3;class K0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(rN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tN(),!this.activeServiceWorker)return;this.sender=new Zx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await zm(e,sl,"1"),await Wm(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kl(i,!1).getAll();return new xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K0.type="LOCAL";const cN=K0;new Io(3e4,6e4);/**
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
 */function uN(t,e){return e?Xt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dN(t){return j0(t.auth,new oh(t),t.bypassAuthState)}function fN(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Wx(n,new oh(t),t.bypassAuthState)}async function hN(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),zx(n,new oh(t),t.bypassAuthState)}/**
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
 */class Y0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dN;case"linkViaPopup":case"linkViaRedirect":return hN;case"reauthViaPopup":case"reauthViaRedirect":return fN;default:Nt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pN=new Io(2e3,1e4);class ai extends Y0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pN.get())};e()}}ai.currentPopupAction=null;/**
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
 */const mN="pendingRedirect",wa=new Map;class gN extends Y0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wa.get(this.auth._key());if(!e){try{const r=await _N(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wa.set(this.auth._key(),e)}return this.bypassAuthState||wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _N(t,e){const n=wN(e),r=yN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vN(t,e){wa.set(t._key(),e)}function yN(t){return Xt(t._redirectPersistence)}function wN(t){return ya(mN,t.config.apiKey,t.name)}async function EN(t,e,n=!1){if(Dt(t.app))return Promise.reject(en(t));const r=rr(t),i=uN(r,e),o=await new gN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SN=10*60*1e3;class CN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SN&&this.cachedEventUids.clear(),this.cachedEventUids.has($m(e))}saveEventToCache(e){this.cachedEventUids.add($m(e)),this.lastProcessedEventTime=Date.now()}}function $m(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(t);default:return!1}}/**
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
 */async function TN(t,e={}){return pn(t,"GET","/v1/projects",e)}/**
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
 */const kN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xN=/^https?/;async function NN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TN(t);for(const n of e)try{if(PN(n))return}catch{}Nt(t,"unauthorized-domain")}function PN(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xN.test(n))return!1;if(kN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RN=new Io(3e4,6e4);function Bm(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bN(t){return new Promise((e,n)=>{var r,i,s;function o(){Bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bm(),n(Ut(t,"network-request-failed"))},timeout:RN.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=wx("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},O0(`${yx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ea=null,e})}let Ea=null;function AN(t){return Ea=Ea||bN(t),Ea}/**
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
 */const ON=new Io(5e3,15e3),DN="__/auth/iframe",LN="emulator/auth/iframe",MN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jN(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,LN):`https://${t.config.authDomain}/${DN}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},i=FN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vi(r).slice(1)}`}async function UN(t){const e=await AN(t),n=zt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:jN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},ON.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const zN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WN=500,$N=600,BN="_blank",VN="http://localhost";class Vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HN(t,e,n,r=WN,i=$N){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=je().toLowerCase();n&&(a=k0(c)?BN:n),I0(c)&&(e=e||VN,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(ux(c)&&a!=="_self")return GN(e||"",a),new Vm(null);const u=window.open(e||"",a,d);O(u,t,"popup-blocked");try{u.focus()}catch{}return new Vm(u)}function GN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KN="__/auth/handler",YN="emulator/auth/handler",qN=encodeURIComponent("fac");async function Hm(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(e instanceof M0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof ko){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${qN}=${encodeURIComponent(l)}`:"";return`${QN(t)}?${Vi(a).slice(1)}${c}`}function QN({config:t}){return t.emulator?eh(t,YN):`https://${t.authDomain}/${KN}`}/**
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
 */const Qc="webStorageSupport";class XN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B0,this._completeRedirectFn=EN,this._overrideRedirectResult=vN}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hm(e,n,r,ud(),i);return HN(e,o,sh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hm(e,n,r,ud(),i);return eN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UN(e),r=new CN(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b0()||T0()||nh()}}const JN=XN;var Gm="@firebase/auth",Km="1.8.1";/**
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
 */class ZN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tP(t){Wt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(t)},c=new gx(r,i,s,l);return kx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wt(new xt("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new ZN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Gm,Km,eP(t)),ht(Gm,Km,"esm2017")}/**
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
 */const nP=5*60,rP=Dy("authIdTokenMaxAge")||nP;let Ym=null;const iP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rP)return;const i=n==null?void 0:n.token;Ym!==i&&(Ym=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q0(t=Gf()){const e=$r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tx(t,{popupRedirectResolver:JN,persistence:[cN,Xx,B0]}),r=Dy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=iP(s.toString());Kx(n,o,()=>o(n.currentUser)),Gx(n,a=>o(a))}}const i=Ay("auth");return i&&xx(n,`http://${i}`),n}function sP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_x({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tP("Browser");var qm={};const Qm="@firebase/database",Xm="1.0.10";/**
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
 */let X0="";function oP(t){X0=t}/**
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
 */class aP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:eo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class lP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const J0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aP(e)}}catch{}return new lP},yr=J0("localStorage"),cP=J0("sessionStorage");/**
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
 */const wi=new $l("@firebase/database"),uP=function(){let t=1;return function(){return t++}}(),Z0=function(t){const e=hI(t),n=new cI;n.update(e);const r=n.digest();return $f.encodeByteArray(r)},No=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=No.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Rs=null,Jm=!0;const dP=function(t,e){T(!e,"Can't turn on custom loggers persistently."),wi.logLevel=K.VERBOSE,Rs=wi.log.bind(wi)},Te=function(...t){if(Jm===!0&&(Jm=!1,Rs===null&&cP.get("logging_enabled")===!0&&dP()),Rs){const e=No.apply(null,t);Rs(e)}},Po=function(t){return function(...e){Te(t,...e)}},hd=function(...t){const e="FIREBASE INTERNAL ERROR: "+No(...t);wi.error(e)},cn=function(...t){const e=`FIREBASE FATAL ERROR: ${No(...t)}`;throw wi.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+No(...t);wi.warn(e)},fP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ah=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bi="[MIN_NAME]",Dr="[MAX_NAME]",Br=function(t,e){if(t===e)return 0;if(t===bi||e===Dr)return-1;if(e===bi||t===Dr)return 1;{const n=Zm(t),r=Zm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},pP=function(t,e){return t===e?0:t<e?-1:1},ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},lh=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=lh(t[e[r]]);return n+="}",n},ew=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tw=function(t){T(!ah(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},mP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _P(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const vP=new RegExp("^-?(0*)\\d{1,10}$"),yP=-2147483648,wP=2147483647,Zm=function(t){if(vP.test(t)){const e=Number(t);if(e>=yP&&e<=wP)return e}return null},Ki=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},EP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class SP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class CP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Sa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sa.OWNER="owner";/**
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
 */const ch="5",nw="v",rw="s",iw="r",sw="f",ow=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aw="ls",lw="p",pd="ac",cw="websocket",uw="long_polling";/**
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
 */class dw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function IP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fw(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===cw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IP(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class TP{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return K1(this.counters_)}}/**
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
 */const Xc={},Jc={};function uh(t){const e=t.toString();return Xc[e]||(Xc[e]=new TP),Xc[e]}function kP(t,e){const n=t.toString();return Jc[n]||(Jc[n]=e()),Jc[n]}/**
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
 */class xP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ki(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const eg="start",NP="close",PP="pLPCommand",RP="pRTLPCB",hw="id",pw="pw",mw="ser",bP="cb",AP="seg",OP="ts",DP="d",LP="dframe",gw=1870,_w=30,MP=gw-_w,FP=25e3,jP=3e4;class li{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Po(e),this.stats_=uh(n),this.urlFn=l=>(this.appCheckToken&&(l[pd]=this.appCheckToken),fw(n,uw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jP)),hP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dh((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===eg)this.id=a,this.password=l;else if(o===NP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[eg]="t",r[mw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[nw]=ch,this.transportSessionId&&(r[rw]=this.transportSessionId),this.lastSessionId&&(r[aw]=this.lastSessionId),this.applicationId&&(r[lw]=this.applicationId),this.appCheckToken&&(r[pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&ow.test(location.hostname)&&(r[iw]=sw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){li.forceAllow_=!0}static forceDisallow(){li.forceDisallow_=!0}static isAvailable(){return li.forceAllow_?!0:!li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mP()&&!gP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ry(n),i=ew(r,MP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[LP]="t",r[hw]=e,r[pw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uP(),window[PP+this.uniqueCallbackIdentifier]=e,window[RP+this.uniqueCallbackIdentifier]=n,this.myIFrame=dh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hw]=this.myID,e[pw]=this.myPW,e[mw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_w+r.length<=gw;){const o=this.pendingSegs.shift();r=r+"&"+AP+i+"="+o.seg+"&"+OP+i+"="+o.ts+"&"+DP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(FP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const UP=16384,zP=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class Et{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Po(this.connId),this.stats_=uh(n),this.connURL=Et.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[nw]=ch,typeof location<"u"&&location.hostname&&ow.test(location.hostname)&&(o[iw]=sw),n&&(o[rw]=n),r&&(o[aw]=r),i&&(o[pd]=i),s&&(o[lw]=s),fw(e,cw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yr.set("previous_websocket_failure",!0);try{let r;Fy(),this.mySock=new al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&al!==null&&!Et.forceDisallow_}static previouslyFailed(){return yr.isInMemoryStorage||yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=eo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ew(n,UP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
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
 */class so{static get ALL_TRANSPORTS(){return[li,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Et&&Et.isAvailable();let r=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const i=this.transports_=[];for(const s of so.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);so.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}so.globalTransportInitialized_=!1;/**
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
 */const WP=6e4,$P=5e3,BP=10*1024,VP=100*1024,Zc="t",tg="d",HP="s",ng="r",GP="e",rg="o",ig="a",sg="n",og="p",KP="h";class YP{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Po("c:"+this.id+":"),this.transportManager_=new so(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zc in e){const n=e[Zc];n===ig?this.upgradeIfSecondaryHealthy_():n===ng?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ss("t",e),r=ss("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:og,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ig,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ss("t",e),r=ss("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ss(Zc,e);if(tg in e){const r=e[tg];if(n===KP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===sg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===HP?this.onConnectionShutdown_(r):n===ng?this.onReset_(r):n===GP?hd("Server Error: "+r):n===rg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ch!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($P))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:og,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class yw{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ll extends yw{static getInstance(){return new ll}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ag=32,lg=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new Y("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function fh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ww(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Le(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QP(t,e){const n=oo(t,0),r=oo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Br(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function hh(t,e){if(Yn(t)!==Yn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Yn(t)>Yn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class XP{constructor(e,n){this.errorPrefix_=n,this.parts_=oo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wl(this.parts_[r]);Ew(this)}}function JP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wl(e),Ew(t)}function ZP(t){const e=t.parts_.pop();t.byteLength_-=Wl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ew(t){if(t.byteLength_>lg)throw new Error(t.errorPrefix_+"has a key path longer than "+lg+" bytes ("+t.byteLength_+").");if(t.parts_.length>ag)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ag+") or object contains a cycle "+hr(t))}function hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ph extends yw{static getInstance(){return new ph}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const os=1e3,eR=60*5*1e3,cg=30*1e3,tR=1.3,nR=3e4,rR="server_kill",ug=3;class tn extends vw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tn.nextPersistentConnectionId_++,this.log_=Po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=os,this.maxReconnectDelay_=eR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ph.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Co,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;tn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const r=Ri(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hd("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nR&&(this.reconnectDelay_=os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new YP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Fe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(rR)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Fe(u),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rd(this.interruptReasons_)&&(this.reconnectDelay_=os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>lh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ug&&(this.reconnectDelay_=cg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ug&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+X0.replace(/\./g,"-")]=1,Vf()?e["framework.cordova"]=1:My()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return rd(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(bi,e),i=new j(bi,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let ra;class Sw extends Yl{static get __EMPTY_NODE(){return ra}static set __EMPTY_NODE(e){ra=e}compare(e,n){return Br(e.name,n.name)}isDefinedOn(e){throw Bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Dr,ra)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ra)}toString(){return".key"}}const Ei=new Sw;/**
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
 */class ia{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Be.EMPTY_NODE,this.right=s??Be.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class iR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ia(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ia(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new iR;/**
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
 */function sR(t,e){return Br(t.name,e.name)}function mh(t,e){return Br(t,e)}/**
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
 */let md;function oR(t){md=t}const Cw=function(t){return typeof t=="number"?"number:"+tw(t):"string:"+t},Iw=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else T(t===md||t.isEmpty(),"priority of unexpected type.");T(t===md||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let dg;class we{static set __childrenNodeConstructor(e){dg=e}static get __childrenNodeConstructor(){return dg}constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:F(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tw(this.value_):e+=this.value_,this.lazyHash_=Z0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Tw,kw;function aR(t){Tw=t}function lR(t){kw=t}class cR extends Yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Dr,new we("[PRIORITY-POST]",kw))}makePost(e,n){const r=Tw(e);return new j(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new cR;/**
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
 */const uR=Math.log(2);class dR{constructor(e){const n=s=>parseInt(Math.log(s)/uR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cl=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new Se(f,u.node,Se.BLACK,null,null);{const m=parseInt(d/2,10)+l,v=i(l,m),y=i(m+1,c);return u=t[m],f=n?n(u):u,new Se(f,u.node,Se.BLACK,v,y)}},s=function(l){let c=null,d=null,u=t.length;const f=function(v,y){const w=u-v,p=u;u-=v;const h=i(w+1,p),_=t[w],E=n?n(_):_;m(new Se(E,_.node,y,null,h))},m=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(v+1));y?f(w,Se.BLACK):(f(w,Se.BLACK),f(w,Se.RED))}return d},o=new dR(t.length),a=s(o);return new Be(r||e,a)};/**
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
 */let eu;const Yr={};class Jt{static get Default(){return T(Yr&&ce,"ChildrenNode.ts has not been loaded"),eu=eu||new Jt({".priority":Yr},{".priority":ce}),eu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=cl(r,e.getCompare()):a=Yr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Jt(d,c)}addToIndexes(e,n){const r=Xa(this.indexes_,(i,s)=>{const o=Ri(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),cl(a,o.getCompare())}else return Yr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Xa(this.indexes_,i=>{if(i===Yr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
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
 */let as;class A{static get EMPTY_NODE(){return as||(as=new A(new Be(mh),null,Jt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Iw(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||as}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?as:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?as:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{T(F(e)!==".priority"||Yn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cw(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Z0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ro?-1:0}withIndex(e){if(e===Ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),i=n.getIterator(ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ei?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fR extends A{constructor(){super(new Be(mh),A.EMPTY_NODE,Jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Ro=new fR;Object.defineProperties(j,{MIN:{value:new j(bi,A.EMPTY_NODE)},MAX:{value:new j(Dr,Ro)}});Sw.__EMPTY_NODE=A.EMPTY_NODE;we.__childrenNodeConstructor=A;oR(Ro);lR(Ro);/**
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
 */const hR=!0;function me(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,me(e))}if(!(t instanceof Array)&&hR){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=cl(n,sR,o=>o.name,mh);if(r){const o=cl(n,ce.getCompare());return new A(s,me(e),new Jt({".priority":o},{".priority":ce}))}else return new A(s,me(e),Jt.Default)}else{let n=A.EMPTY_NODE;return Ne(t,(r,i)=>{if(Vt(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}aR(me);/**
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
 */class pR extends Yl{constructor(e){super(),this.indexPath_=e,T(!z(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Br(e.name,n.name):s}makePost(e,n){const r=me(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Ro);return new j(Dr,e)}toString(){return oo(this.indexPath_,0).join("/")}}/**
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
 */class mR extends Yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=me(e);return new j(n,r)}toString(){return".value"}}const gR=new mR;/**
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
 */function xw(t){return{type:"value",snapshotNode:t}}function Ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ao(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function lo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _R(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ao(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ai(n,r)):o.trackChildChange(lo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(ao(i,s))}),n.isLeafNode()||n.forEachChild(ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(lo(i,s,o))}else r.trackChildChange(Ai(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class co{constructor(e){this.indexedFilter_=new gh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=co.getStartPost_(e),this.endPost_=co.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new co(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,m)=>u(m,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new j(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(lo(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ao(n,u));const y=a.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ai(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ao(c.name,c.node)),s.trackChildChange(Ai(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class _h{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new _h;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yR(t){return t.loadsAllData()?new gh(t.getIndex()):t.hasLimit()?new vR(t):new co(t)}function fg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===gR?n="$value":t.index_===Ei?n="$key":(T(t.index_ instanceof pR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class ul extends vw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Po("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),a={};this.listens_[o]=a;const l=fg(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Ri(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=fg(e._queryParams),r=e._path.toString(),i=new Co;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=eo(a.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class wR{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function dl(){return{value:null,children:new Map}}function Nw(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,dl());const i=t.children.get(r);e=Q(e),Nw(i,e,n)}}function gd(t,e,n){t.value!==null?n(e,t.value):ER(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);gd(i,s,n)})}function ER(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class SR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const pg=10*1e3,CR=30*1e3,IR=5*60*1e3;class TR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new SR(e);const r=pg+(CR-pg)*Math.random();bs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(i,s)=>{s>0&&Vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*IR))}}/**
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
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function vh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class fl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=vh()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new fl(B(),n,this.revert)}}else return T(F(this.path)===e,"operationForChild called for unrelated child."),new fl(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class uo{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new uo(this.source,B()):new uo(this.source,Q(this.path))}}/**
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
 */class Lr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return z(this.path)?new Lr(this.source,B(),this.snap.getImmediateChild(e)):new Lr(this.source,Q(this.path),this.snap)}}/**
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
 */class Oi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new Lr(this.source,B(),n.value):new Oi(this.source,B(),n)}else return T(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oi(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class kR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_R(o.childName,o.snapshotNode))}),ls(t,i,"child_removed",e,r,n),ls(t,i,"child_added",e,r,n),ls(t,i,"child_moved",s,r,n),ls(t,i,"child_changed",e,r,n),ls(t,i,"value",e,r,n),i}function ls(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>PR(t,a,l)),o.forEach(a=>{const l=NR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function NR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function PR(t,e,n){if(e.childName==null||n.childName==null)throw Bi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ql(t,e){return{eventCache:t,serverCache:e}}function As(t,e,n,r){return ql(new qn(e,n,r),t.serverCache)}function Pw(t,e,n,r){return ql(t.eventCache,new qn(e,n,r))}function hl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let tu;const RR=()=>(tu||(tu=new Be(pP)),tu);class q{static fromObject(e){let n=new q(null);return Ne(e,(r,i)=>{n=n.set(new Y(r),i)}),n}constructor(e,n=RR()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(z(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:le(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new q(null)}}set(e,n){if(z(e))return new q(n,this.children);{const r=F(e),s=(this.children.get(r)||new q(null)).set(Q(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(z(e))return n;{const r=F(e),s=(this.children.get(r)||new q(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),le(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new q(null))}}function Os(t,e,n){if(z(e))return new Tt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new Tt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new Tt(s)}}}function _d(t,e,n){let r=t;return Ne(n,(i,s)=>{r=Os(r,le(e,i),s)}),r}function mg(t,e){if(z(e))return Tt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new Tt(n)}}function vd(t,e){return Vr(t,e)!=null}function Vr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function gg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function Vn(t,e){if(z(e))return t;{const n=Vr(t,e);return n!=null?new Tt(new q(n)):new Tt(t.writeTree_.subtree(e))}}function yd(t){return t.writeTree_.isEmpty()}function Di(t,e){return Rw(B(),t.writeTree_,e)}function Rw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Rw(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function Ql(t,e){return Dw(e,t)}function bR(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Os(t.visibleWrites,e,n)),t.lastWriteId=r}function AR(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_d(t.visibleWrites,e,n),t.lastWriteId=r}function OR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LR(a,r.path)?i=!1:dt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return MR(t),!0;if(r.snap)t.visibleWrites=mg(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=mg(t.visibleWrites,le(r.path,l))})}return!0}else return!1}function LR(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(le(t.path,n),e))return!0;return!1}function MR(t){t.visibleWrites=bw(t.allWrites,FR,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function FR(t){return t.visible}function bw(t,e,n){let r=Tt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dt(n,o)?(a=Le(n,o),r=Os(r,a,s.snap)):dt(o,n)&&(a=Le(o,n),r=Os(r,B(),s.snap.getChild(a)));else if(s.children){if(dt(n,o))a=Le(n,o),r=_d(r,a,s.children);else if(dt(o,n))if(a=Le(o,n),z(a))r=_d(r,B(),s.children);else{const l=Ri(s.children,F(a));if(l){const c=l.getChild(Q(a));r=Os(r,B(),c)}}}else throw Bi("WriteRecord should have .snap or .children")}}return r}function Aw(t,e,n,r,i){if(!r&&!i){const s=Vr(t.visibleWrites,e);if(s!=null)return s;{const o=Vn(t.visibleWrites,e);if(yd(o))return n;if(n==null&&!vd(o,B()))return null;{const a=n||A.EMPTY_NODE;return Di(o,a)}}}else{const s=Vn(t.visibleWrites,e);if(!i&&yd(s))return n;if(!i&&n==null&&!vd(s,B()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=bw(t.allWrites,o,e),l=n||A.EMPTY_NODE;return Di(a,l)}}}function jR(t,e,n){let r=A.EMPTY_NODE;const i=Vr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Vn(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=Di(Vn(s,new Y(o)),a);r=r.updateImmediateChild(o,l)}),gg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Vn(t.visibleWrites,e);return gg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function UR(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(vd(t.visibleWrites,s))return null;{const o=Vn(t.visibleWrites,s);return yd(o)?i.getChild(n):Di(o,i.getChild(n))}}function zR(t,e,n,r){const i=le(e,n),s=Vr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Vn(t.visibleWrites,i);return Di(o,r.getNode().getImmediateChild(n))}else return null}function WR(t,e){return Vr(t.visibleWrites,e)}function $R(t,e,n,r,i,s,o){let a;const l=Vn(t.visibleWrites,e),c=Vr(l,B());if(c!=null)a=c;else if(n!=null)a=Di(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&d.length<i;)u(m,r)!==0&&d.push(m),m=f.getNext();return d}else return[]}function BR(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function pl(t,e,n,r){return Aw(t.writeTree,t.treePath,e,n,r)}function Eh(t,e){return jR(t.writeTree,t.treePath,e)}function _g(t,e,n,r){return UR(t.writeTree,t.treePath,e,n,r)}function ml(t,e){return WR(t.writeTree,le(t.treePath,e))}function VR(t,e,n,r,i,s){return $R(t.writeTree,t.treePath,e,n,r,i,s)}function Sh(t,e,n){return zR(t.writeTree,t.treePath,e,n)}function Ow(t,e){return Dw(le(t.treePath,e),t.writeTree)}function Dw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class HR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,lo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ao(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ai(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,lo(r,e.snapshotNode,i.oldSnap));else throw Bi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class GR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Lw=new GR;class Ch{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mr(this.viewCache_),s=VR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function KR(t){return{filter:t}}function YR(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qR(t,e,n,r,i){const s=new HR;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=wd(t,e,c.path,c.snap,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=gl(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=XR(t,e,c.path,c.children,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ed(t,e,c.path,c.children,r,i,a,s))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=eb(t,e,c.path,r,i,s):o=JR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===St.LISTEN_COMPLETE)o=ZR(t,e,n.path,r,s);else throw Bi("Unknown operation type: "+n.type);const l=s.getChanges();return QR(e,o,l),{viewCache:o,changes:l}}function QR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xw(hl(e)))}}function Mw(t,e,n,r,i,s){const o=e.eventCache;if(ml(r,n)!=null)return e;{let a,l;if(z(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Mr(e),d=c instanceof A?c:A.EMPTY_NODE,u=Eh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=pl(r,Mr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=F(n);if(c===".priority"){T(Yn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=_g(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=Q(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=_g(r,n,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=Sh(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return As(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function gl(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),m,null)}else{const m=F(n);if(!l.isCompleteForPath(n)&&Yn(n)>1)return e;const v=Q(n),w=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?c=d.updatePriority(l.getNode(),w):c=d.updateChild(l.getNode(),m,w,v,Lw,null)}const u=Pw(e,c,l.isFullyInitialized()||z(n),d.filtersNodes()),f=new Ch(i,u,s);return Mw(t,u,n,i,f,a)}function wd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new Ch(i,e,s);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=As(e,c,!0,t.filter.filtersNodes());else{const u=F(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=As(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),m=a.getNode().getImmediateChild(u);let v;if(z(f))v=r;else{const y=d.getCompleteChild(u);y!=null?fh(f)===".priority"&&y.getChild(ww(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=A.EMPTY_NODE}if(m.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),u,v,f,d,o);l=As(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function vg(t,e){return t.eventCache.isCompleteForChild(e)}function XR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=le(n,l);vg(e,F(d))&&(a=wd(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=le(n,l);vg(e,F(d))||(a=wd(t,a,d,c,i,s,o))}),a}function yg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ed(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=r:c=new q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),v=yg(t,m,f);l=gl(t,l,new Y(u),v,i,s,o,a)}}),c.children.inorderTraversal((u,f)=>{const m=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!m){const v=e.serverCache.getNode().getImmediateChild(u),y=yg(t,v,f);l=gl(t,l,new Y(u),y,i,s,o,a)}}),l}function JR(t,e,n,r,i,s,o){if(ml(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let c=new q(null);return l.getNode().forEachChild(Ei,(d,u)=>{c=c.set(new Y(d),u)}),Ed(t,e,n,c,i,s,a,o)}else return e}else{let c=new q(null);return r.foreach((d,u)=>{const f=le(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Ed(t,e,n,c,i,s,a,o)}}function ZR(t,e,n,r,i){const s=e.serverCache,o=Pw(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Mw(t,o,n,r,Lw,i)}function eb(t,e,n,r,i,s){let o;if(ml(r,n)!=null)return e;{const a=new Ch(r,e,i),l=e.eventCache.getNode();let c;if(z(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=pl(r,Mr(e));else{const u=e.serverCache.getNode();T(u instanceof A,"serverChildren would be complete if leaf node"),d=Eh(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=F(n);let u=Sh(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,Q(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,A.EMPTY_NODE,Q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pl(r,Mr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ml(r,B())!=null,As(e,c,o,t.filter.filtersNodes())}}/**
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
 */class tb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gh(r.getIndex()),s=yR(r);this.processor_=KR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),d=new qn(l,o.isFullyInitialized(),i.filtersNodes()),u=new qn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ql(u,d),this.eventGenerator_=new kR(this.query_)}get query(){return this.query_}}function nb(t){return t.viewCache_.serverCache.getNode()}function rb(t){return hl(t.viewCache_)}function ib(t,e){const n=Mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function wg(t){return t.eventRegistrations_.length===0}function sb(t,e){t.eventRegistrations_.push(e)}function Eg(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Sg(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(T(Mr(t.viewCache_),"We should always have a full cache before handling merges"),T(hl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qR(t.processor_,i,e,n,r);return YR(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Fw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ob(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{r.push(Ai(s,o))}),n.isFullyInitialized()&&r.push(xw(n.getNode())),Fw(t,r,n.getNode(),e)}function Fw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xR(t.eventGenerator_,e,n,i)}/**
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
 */let _l;class jw{constructor(){this.views=new Map}}function ab(t){T(!_l,"__referenceConstructor has already been defined"),_l=t}function lb(){return T(_l,"Reference.ts has not been loaded"),_l}function cb(t){return t.views.size===0}function Ih(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),Sg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Sg(o,e,n,r));return s}}function Uw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=pl(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=Eh(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const c=ql(new qn(a,l,!1),new qn(r,i,!1));return new tb(e,c)}return o}function ub(t,e,n,r,i,s){const o=Uw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),sb(o,n),ob(o,n)}function db(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Qn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Eg(c,n,r)),wg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Eg(l,n,r)),wg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Qn(t)&&s.push(new(lb())(e._repo,e._path)),{removed:s,events:o}}function zw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hn(t,e){let n=null;for(const r of t.views.values())n=n||ib(r,e);return n}function Ww(t,e){if(e._queryParams.loadsAllData())return Xl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $w(t,e){return Ww(t,e)!=null}function Qn(t){return Xl(t)!=null}function Xl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let vl;function fb(t){T(!vl,"__referenceConstructor has already been defined"),vl=t}function hb(){return T(vl,"Reference.ts has not been loaded"),vl}let pb=1;class Cg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=BR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bw(t,e,n,r,i){return bR(t.pendingWriteTree_,e,n,r,i),i?Yi(t,new Lr(vh(),e,n)):[]}function mb(t,e,n,r){AR(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Yi(t,new Oi(vh(),e,i))}function bn(t,e,n=!1){const r=OR(t.pendingWriteTree_,e);if(DR(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Ne(r.children,o=>{s=s.set(new Y(o),!0)}),Yi(t,new fl(r.path,s,n))}else return[]}function bo(t,e,n){return Yi(t,new Lr(yh(),e,n))}function gb(t,e,n){const r=q.fromObject(n);return Yi(t,new Oi(yh(),e,r))}function _b(t,e){return Yi(t,new uo(yh(),e))}function vb(t,e,n){const r=kh(t,n);if(r){const i=xh(r),s=i.path,o=i.queryId,a=Le(s,e),l=new uo(wh(o),a);return Nh(t,s,l)}else return[]}function yl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$w(o,e))){const l=db(o,e,n,r);cb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,m)=>Qn(m));if(d&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=Eb(f);for(let v=0;v<m.length;++v){const y=m[v],w=y.query,p=Kw(t,y);t.listenProvider_.startListening(Ds(w),fo(t,w),p.hashFn,p.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ds(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(Jl(f));t.listenProvider_.stopListening(Ds(f),m)}))}Sb(t,c)}return a}function Vw(t,e,n,r){const i=kh(t,r);if(i!=null){const s=xh(i),o=s.path,a=s.queryId,l=Le(o,e),c=new Lr(wh(a),l,n);return Nh(t,o,c)}else return[]}function yb(t,e,n,r){const i=kh(t,r);if(i){const s=xh(i),o=s.path,a=s.queryId,l=Le(o,e),c=q.fromObject(n),d=new Oi(wh(a),l,c);return Nh(t,o,d)}else return[]}function Sd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=Le(f,i);s=s||Hn(m,v),o=o||Qn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Qn(a),s=s||Hn(a,B())):(a=new jw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const y=Hn(v,B());y&&(s=s.updateImmediateChild(m,y))}));const c=$w(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Jl(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=Cb();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const d=Ql(t.pendingWriteTree_,i);let u=ub(a,e,n,d,s,l);if(!c&&!o&&!r){const f=Ww(a,e);u=u.concat(Ib(t,e,f))}return u}function Th(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=Hn(a,l);if(c)return c});return Aw(i,e,s,n,!0)}function wb(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Le(c,n);r=r||Hn(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Hn(i,B()):(i=new jw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new qn(r,!0,!1):null,a=Ql(t.pendingWriteTree_,e._path),l=Uw(i,e,a,s?o.getNode():A.EMPTY_NODE,s);return rb(l)}function Yi(t,e){return Hw(e,t.syncPointTree_,null,Ql(t.pendingWriteTree_,B()))}function Hw(t,e,n,r){if(z(t.path))return Gw(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Hn(i,B()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Ow(r,o);s=s.concat(Hw(a,l,c,d))}return i&&(s=s.concat(Ih(i,t,r,n))),s}}function Gw(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Hn(i,B()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ow(r,o),d=t.operationForChild(o);d&&(s=s.concat(Gw(d,a,l,c)))}),i&&(s=s.concat(Ih(i,t,r,n))),s}function Kw(t,e){const n=e.query,r=fo(t,n);return{hashFn:()=>(nb(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?vb(t,n._path,r):_b(t,n._path);{const s=_P(i,n);return yl(t,n,null,s)}}}}function fo(t,e){const n=Jl(e);return t.queryToTagMap.get(n)}function Jl(t){return t._path.toString()+"$"+t._queryIdentifier}function kh(t,e){return t.tagToQueryMap.get(e)}function xh(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function Nh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Ql(t.pendingWriteTree_,e);return Ih(r,n,i,null)}function Eb(t){return t.fold((e,n,r)=>{if(n&&Qn(n))return[Xl(n)];{let i=[];return n&&(i=zw(n)),Ne(r,(s,o)=>{i=i.concat(o)}),i}})}function Ds(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hb())(t._repo,t._path):t}function Sb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Jl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Cb(){return pb++}function Ib(t,e,n){const r=e._path,i=fo(t,e),s=Kw(t,n),o=t.listenProvider_.startListening(Ds(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!Qn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!z(c)&&d&&Qn(d))return[Xl(d).query];{let f=[];return d&&(f=f.concat(zw(d).map(m=>m.query))),Ne(u,(m,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Ds(d),fo(t,d))}}return o}/**
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
 */class Ph{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ph(n)}node(){return this.node_}}class Rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Rh(this.syncTree_,n)}node(){return Th(this.syncTree_,this.path_)}}const Tb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ig=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xb(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},xb=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Yw=function(t,e,n,r){return bh(e,new Rh(n,t),r)},qw=function(t,e,n){return bh(t,new Ph(e),n)};function bh(t,e,n){const r=t.getPriority().val(),i=Ig(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ig(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(ce,(a,l)=>{const c=bh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Ah{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Oh(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=F(n);for(;i!==null;){const s=Ri(r.node.children,i)||{children:{},childCount:0};r=new Ah(i,r,s),n=Q(n),i=F(n)}return r}function qi(t){return t.node.value}function Qw(t,e){t.node.value=e,Cd(t)}function Xw(t){return t.node.childCount>0}function Nb(t){return qi(t)===void 0&&!Xw(t)}function Zl(t,e){Ne(t.node.children,(n,r)=>{e(new Ah(n,t,r))})}function Jw(t,e,n,r){n&&!r&&e(t),Zl(t,i=>{Jw(i,e,!0,r)}),n&&r&&e(t)}function Pb(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ao(t){return new Y(t.parent===null?t.name:Ao(t.parent)+"/"+t.name)}function Cd(t){t.parent!==null&&Rb(t.parent,t.name,t)}function Rb(t,e,n){const r=Nb(n),i=Vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cd(t))}/**
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
 */const bb=/[\[\].#$\/\u0000-\u001F\u007F]/,Ab=/[\[\].#$\u0000-\u001F\u007F]/,nu=10*1024*1024,Dh=function(t){return typeof t=="string"&&t.length!==0&&!bb.test(t)},Zw=function(t){return typeof t=="string"&&t.length!==0&&!Ab.test(t)},Ob=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zw(t)},Db=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ah(t)||t&&typeof t=="object"&&Vt(t,".sv")},eE=function(t,e,n,r){r&&e===void 0||ec(zl(t,"value"),e,n)},ec=function(t,e,n){const r=n instanceof Y?new XP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+hr(r)+" with contents = "+e.toString());if(ah(e))throw new Error(t+"contains "+e.toString()+" "+hr(r));if(typeof e=="string"&&e.length>nu/3&&Wl(e)>nu)throw new Error(t+"contains a string greater than "+nu+" utf8 bytes "+hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Dh(o)))throw new Error(t+" contains an invalid key ("+o+") "+hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JP(r,o),ec(t,a,r),ZP(r)}),i&&s)throw new Error(t+' contains ".value" child '+hr(r)+" in addition to actual children.")}},Lb=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=oo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Dh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&dt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Mb=function(t,e,n,r){const i=zl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ne(e,(o,a)=>{const l=new Y(o);if(ec(i,a,le(n,l)),fh(l)===".priority"&&!Db(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Lb(i,s)},tE=function(t,e,n,r){if(!Zw(n))throw new Error(zl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tE(t,e,n)},Lh=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ob(n))throw new Error(zl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ub{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function nE(t,e,n){tc(t,n),rE(t,r=>hh(r,e))}function gt(t,e,n){tc(t,n),rE(t,r=>dt(r,e)||dt(e,r))}function rE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Rs&&Te("event: "+n.toString()),Ki(r)}}}/**
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
 */const Wb="repo_interrupt",$b=25;class Bb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ub,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new Ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vb(t,e,n){if(t.stats_=uh(t.repoInfo_),t.forceRestClient_||EP())t.server_=new ul(t.repoInfo_,(r,i,s,o)=>{Tg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tn(t.repoInfo_,e,(r,i,s,o)=>{Tg(t,r,i,s,o)},r=>{kg(t,r)},r=>{Hb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kP(t.repoInfo_,()=>new TR(t.stats_,t.server_)),t.infoData_=new wR,t.infoSyncTree_=new Cg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=bo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mh(t,"connected",!1),t.serverSyncTree_=new Cg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);gt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iE(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nc(t){return Tb({timestamp:iE(t)})}function Tg(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Xa(n,c=>me(c));o=yb(t.serverSyncTree_,s,l,i)}else{const l=me(n);o=Vw(t.serverSyncTree_,s,l,i)}else if(r){const l=Xa(n,c=>me(c));o=gb(t.serverSyncTree_,s,l)}else{const l=me(n);o=bo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Li(t,s)),gt(t.eventQueue_,a,o)}function kg(t,e){Mh(t,"connected",e),e===!1&&qb(t)}function Hb(t,e){Ne(e,(n,r)=>{Mh(t,n,r)})}function Mh(t,e,n){const r=new Y("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=bo(t.infoSyncTree_,r,i);gt(t.eventQueue_,r,s)}function Fh(t){return t.nextWriteId_++}function Gb(t,e,n){const r=wb(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());Sd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bo(t.serverSyncTree_,e._path,s);else{const a=fo(t.serverSyncTree_,e);o=Vw(t.serverSyncTree_,e._path,s,a)}return gt(t.eventQueue_,e._path,o),yl(t.serverSyncTree_,e,n,null,!0),s},i=>(Oo(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function Kb(t,e,n,r,i){Oo(t,"set",{path:e.toString(),value:n,priority:r});const s=nc(t),o=me(n,r),a=Th(t.serverSyncTree_,e),l=qw(o,a,s),c=Fh(t),d=Bw(t.serverSyncTree_,e,l,c,!0);tc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||Fe("set at "+e+" failed: "+f);const y=bn(t.serverSyncTree_,c,!v);gt(t.eventQueue_,e,y),Id(t,i,f,m)});const u=Uh(t,e);Li(t,u),gt(t.eventQueue_,u,[])}function Yb(t,e,n,r){Oo(t,"update",{path:e.toString(),value:n});let i=!0;const s=nc(t),o={};if(Ne(n,(a,l)=>{i=!1,o[a]=Yw(le(e,a),me(l),t.serverSyncTree_,s)}),i)Te("update() called with empty data.  Don't do anything."),Id(t,r,"ok",void 0);else{const a=Fh(t),l=mb(t.serverSyncTree_,e,o,a);tc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Fe("update at "+e+" failed: "+c);const f=bn(t.serverSyncTree_,a,!u),m=f.length>0?Li(t,e):e;gt(t.eventQueue_,m,f),Id(t,r,c,d)}),Ne(n,c=>{const d=Uh(t,le(e,c));Li(t,d)}),gt(t.eventQueue_,e,[])}}function qb(t){Oo(t,"onDisconnectEvents");const e=nc(t),n=dl();gd(t.onDisconnect_,B(),(i,s)=>{const o=Yw(i,s,t.serverSyncTree_,e);Nw(n,i,o)});let r=[];gd(n,B(),(i,s)=>{r=r.concat(bo(t.serverSyncTree_,i,s));const o=Uh(t,i);Li(t,o)}),t.onDisconnect_=dl(),gt(t.eventQueue_,B(),r)}function Qb(t,e,n){let r;F(e._path)===".info"?r=Sd(t.infoSyncTree_,e,n):r=Sd(t.serverSyncTree_,e,n),nE(t.eventQueue_,e._path,r)}function xg(t,e,n){let r;F(e._path)===".info"?r=yl(t.infoSyncTree_,e,n):r=yl(t.serverSyncTree_,e,n),nE(t.eventQueue_,e._path,r)}function Xb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wb)}function Oo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Id(t,e,n,r){e&&Ki(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sE(t,e,n){return Th(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function jh(t,e=t.transactionQueueTree_){if(e||rc(t,e),qi(e)){const n=aE(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jb(t,Ao(e),n)}else Xw(e)&&Zl(e,n=>{jh(t,n)})}function Jb(t,e,n){const r=n.map(c=>c.currentWriteId),i=sE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];T(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Le(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Oo(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(bn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rc(t,Oh(t.transactionQueueTree_,e)),jh(t,t.transactionQueueTree_),gt(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)Ki(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Fe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Li(t,e)}},o)}function Li(t,e){const n=oE(t,e),r=Ao(n),i=aE(t,n);return Zb(t,i,r),r}function Zb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let d=!1,u;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$b)d=!0,u="maxretry",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=sE(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){ec("transaction failed: Data returned ",m,l.path);let v=me(m);typeof m=="object"&&m!=null&&Vt(m,".priority")||(v=v.updatePriority(f.getPriority()));const w=l.currentWriteId,p=nc(t),h=qw(v,f,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=Fh(t),o.splice(o.indexOf(w),1),i=i.concat(Bw(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(bn(t.serverSyncTree_,w,!0))}else d=!0,u="nodata",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0))}gt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}rc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ki(r[a]);jh(t,t.transactionQueueTree_)}function oE(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&qi(r)===void 0;)r=Oh(r,n),e=Q(e),n=F(e);return r}function aE(t,e){const n=[];return lE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function lE(t,e,n){const r=qi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Zl(e,i=>{lE(t,i,n)})}function rc(t,e){const n=qi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Qw(e,n.length>0?n:void 0)}Zl(e,r=>{rc(t,r)})}function Uh(t,e){const n=Ao(oE(t,e)),r=Oh(t.transactionQueueTree_,e);return Pb(r,i=>{ru(t,i)}),ru(t,r),Jw(r,i=>{ru(t,i)}),n}function ru(t,e){const n=qi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Qw(e,void 0):n.length=s+1,gt(t.eventQueue_,Ao(e),i);for(let o=0;o<r.length;o++)Ki(r[o])}}/**
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
 */function eA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ng=function(t,e){const n=nA(t),r=n.namespace;n.domain==="firebase.com"&&cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},nA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=eA(t.substring(d,u)));const f=tA(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Pg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Pg.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Pg.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class iA{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class sA{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:fh(this._path)}get ref(){return new mn(this._repo,this._path)}get _queryIdentifier(){const e=hg(this._queryParams),n=lh(e);return n==="{}"?"default":n}get _queryObject(){return hg(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof zh))return!1;const n=this._repo===e._repo,r=hh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+qP(this._path)}}class mn extends zh{constructor(e,n){super(e,n,new _h,!1)}get parent(){const e=ww(this._path);return e===null?null:new mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ho{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=Mi(this.ref,e);return new ho(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ho(i,Mi(this.ref,r),ce)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ve(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Mi(t._root,e):t._root}function Mi(t,e){return t=Pe(t),F(t._path)===null?Fb("child","path",e):tE("child","path",e),new mn(t._repo,le(t._path,e))}function uE(t,e){t=Pe(t),Lh("push",t._path),eE("push",e,t._path,!0);const n=iE(t._repo),r=rA(n),i=Mi(t,r),s=Mi(t,r);let o;return e!=null?o=dE(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Td(t){return Lh("remove",t._path),dE(t,null)}function dE(t,e){t=Pe(t),Lh("set",t._path),eE("set",e,t._path,!1);const n=new Co;return Kb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function oA(t,e){Mb("update",e,t._path);const n=new Co;return Yb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function fE(t){t=Pe(t);const e=new cE(()=>{}),n=new ic(e);return Gb(t._repo,t,n).then(r=>new ho(r,new mn(t._repo,t._path),t._queryParams.getIndex()))}class ic{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iA("value",this,new ho(e.snapshotNode,new mn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sA(this,e,n):null}matches(e){return e instanceof ic?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function aA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{xg(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new cE(n,s||void 0),a=new ic(o);return Qb(t._repo,t,a),()=>xg(t._repo,t,a)}function Fi(t,e,n,r){return aA(t,"value",e,n,r)}ab(mn);fb(mn);/**
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
 */const lA="FIREBASE_DATABASE_EMULATOR_HOST",kd={};let cA=!1;function uA(t,e,n,r){t.repoInfo_=new dw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function dA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ng(s,i),a=o.repoInfo,l;typeof process<"u"&&qm&&(l=qm[lA]),l?(s=`http://${l}?ns=${a.namespace}`,o=Ng(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new CP(t.name,t.options,e);jb("Invalid Firebase Database URL",o),z(o.path)||cn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=hA(a,t,c,new SP(t.name,n));return new pA(d,t)}function fA(t,e){const n=kd[e];(!n||n[t.key]!==t)&&cn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xb(t),delete n[t.key]}function hA(t,e,n,r){let i=kd[e.name];i||(i={},kd[e.name]=i);let s=i[t.toURLString()];return s&&cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Bb(t,cA,n,r),i[t.toURLString()]=s,s}class pA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mn(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&cn("Cannot call "+e+" on a deleted database.")}}function hE(t=Gf(),e){const n=$r(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Z1("database");r&&mA(n,...r)}return n}function mA(t,e,n,r={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&cn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Sa(Sa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:eI(r.mockUserToken,t.app.options.projectId);s=new Sa(o)}uA(i,e,n,s)}/**
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
 */function gA(t){oP(Hi),Wt(new xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ht(Qm,Xm,t),ht(Qm,Xm,"esm2017")}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gA();const _A={apiKey:"AIzaSyDUfmBPE8zyNpu_CvRNcNuqK-9NJFAHQqg",authDomain:"home-goods-inventory-system.firebaseapp.com",projectId:"home-goods-inventory-system",storageBucket:"home-goods-inventory-system.appspot.com",messagingSenderId:"832889371836",appId:"1:832889371836:web:0835ab013150bc05d964b9",measurementId:"G-1HL856XXMY"},Wh=Vy(_A);Wk(Wh);const $h=Q0(Wh),Je=hE(Wh),pE=S.createContext(),vA=({children:t})=>{const[e,n]=S.useState(!1),r=()=>{n(i=>!i)};return g.jsx(pE.Provider,{value:{isDarkTheme:e,toggleTheme:r},children:t})},mE=()=>S.useContext(pE);/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},po.apply(this,arguments)}var An;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(An||(An={}));const Rg="popstate";function yA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Hr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),xd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:gE(s))}function r(i,s){Bh(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return EA(e,n,r,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wA(){return Math.random().toString(36).substr(2,8)}function bg(t,e){return{usr:t.state,key:t.key,idx:e}}function xd(t,e,n,r){return n===void 0&&(n=null),po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hr(e):e,{state:n,key:e&&e.key||r||wA()})}function gE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function EA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=An.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(po({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=An.Pop;let w=d(),p=w==null?null:w-c;c=w,l&&l({action:a,location:y.location,delta:p})}function f(w,p){a=An.Push;let h=xd(y.location,w,p);n&&n(h,w),c=d()+1;let _=bg(h,c),E=y.createHref(h);try{o.pushState(_,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function m(w,p){a=An.Replace;let h=xd(y.location,w,p);n&&n(h,w),c=d();let _=bg(h,c),E=y.createHref(h);o.replaceState(_,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:gE(w);return h=h.replace(/ $/,"%20"),ve(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Rg,u),l=w,()=>{i.removeEventListener(Rg,u),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(w){return o.go(w)}};return y}var Ag;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ag||(Ag={}));function SA(t,e,n){return n===void 0&&(n="/"),CA(t,e,n,!1)}function CA(t,e,n,r){let i=typeof e=="string"?Hr(e):e,s=yE(i.pathname||"/",n);if(s==null)return null;let o=_E(t);IA(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=LA(s);a=OA(o[l],c,r)}return a}function _E(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Sr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_E(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vE(s.path))i(s,o,l)}),e}function vE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function IA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TA=/^:[\w-]+$/,kA=3,xA=2,NA=1,PA=10,RA=-2,Og=t=>t==="*";function bA(t,e){let n=t.split("/"),r=n.length;return n.some(Og)&&(r+=RA),e&&(r+=xA),n.filter(i=>!Og(i)).reduce((i,s)=>i+(TA.test(s)?kA:s===""?NA:PA),r)}function AA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function OA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",u=Dg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Dg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Sr([s,u.pathname]),pathnameBase:WA(Sr([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=Sr([s,u.pathnameBase]))}return o}function Dg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=DA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let y=a[u]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[u];return m&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function DA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Hr(t):t;return{pathname:n?n.startsWith("/")?n:FA(n,e):e,search:$A(r),hash:BA(i)}}function FA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function iu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function UA(t,e){let n=jA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Hr(t):(i=po({},t),ve(!i.pathname||!i.pathname.includes("?"),iu("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),iu("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),iu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),u-=1;i.pathname=f.join("/")}a=u>=0?e[u]:"/"}let l=MA(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),WA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$A=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const wE=["post","put","patch","delete"];new Set(wE);const HA=["get",...wE];new Set(HA);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}const Vh=S.createContext(null),GA=S.createContext(null),sc=S.createContext(null),oc=S.createContext(null),Gr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),EE=S.createContext(null);function ac(){return S.useContext(oc)!=null}function SE(){return ac()||ve(!1),S.useContext(oc).location}function CE(t){S.useContext(sc).static||S.useLayoutEffect(t)}function Pt(){let{isDataRoute:t}=S.useContext(Gr);return t?sO():KA()}function KA(){ac()||ve(!1);let t=S.useContext(Vh),{basename:e,future:n,navigator:r}=S.useContext(sc),{matches:i}=S.useContext(Gr),{pathname:s}=SE(),o=JSON.stringify(UA(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return CE(()=>{a.current=!0}),S.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=zA(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Sr([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,s,t])}function lc(){let{matches:t}=S.useContext(Gr),e=t[t.length-1];return e?e.params:{}}function YA(t,e){return qA(t,e)}function qA(t,e,n,r){ac()||ve(!1);let{navigator:i}=S.useContext(sc),{matches:s}=S.useContext(Gr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=SE(),d;if(e){var u;let w=typeof e=="string"?Hr(e):e;l==="/"||(u=w.pathname)!=null&&u.startsWith(l)||ve(!1),d=w}else d=c;let f=d.pathname||"/",m=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=SA(t,{pathname:m}),y=eO(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Sr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Sr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?S.createElement(oc.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:An.Pop}},y):y}function QA(){let t=iO(),e=VA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const XA=S.createElement(QA,null);class JA extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Gr.Provider,{value:this.props.routeContext},S.createElement(EE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZA(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Vh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Gr.Provider,{value:e},r)}function eO(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:m}=n,v=u.route.loader&&f[u.route.id]===void 0&&(!m||m[u.route.id]===void 0);if(u.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let m,v=!1,y=null,w=null;n&&(m=a&&u.route.id?a[u.route.id]:void 0,y=u.route.errorElement||XA,l&&(c<0&&f===0?(v=!0,w=null):c===f&&(v=!0,w=u.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,f+1)),h=()=>{let _;return m?_=y:v?_=w:u.route.Component?_=S.createElement(u.route.Component,null):u.route.element?_=u.route.element:_=d,S.createElement(ZA,{match:u,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:_})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?S.createElement(JA,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var IE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(IE||{}),wl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wl||{});function tO(t){let e=S.useContext(Vh);return e||ve(!1),e}function nO(t){let e=S.useContext(GA);return e||ve(!1),e}function rO(t){let e=S.useContext(Gr);return e||ve(!1),e}function TE(t){let e=rO(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function iO(){var t;let e=S.useContext(EE),n=nO(wl.UseRouteError),r=TE(wl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function sO(){let{router:t}=tO(IE.UseNavigateStable),e=TE(wl.UseNavigateStable),n=S.useRef(!1);return CE(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,mo({fromRouteId:e},s)))},[t,e])}const Lg={};function oO(t,e){Lg[e]||(Lg[e]=!0,console.warn(e))}const Mg=(t,e,n)=>oO(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function aO(t,e){t!=null&&t.v7_startTransition||Mg("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Mg("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function at(t){ve(!1)}function lO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=An.Pop,navigator:s,static:o=!1,future:a}=t;ac()&&ve(!1);let l=e.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:s,static:o,future:mo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Hr(r));let{pathname:d="/",search:u="",hash:f="",state:m=null,key:v="default"}=r,y=S.useMemo(()=>{let w=yE(d,l);return w==null?null:{location:{pathname:w,search:u,hash:f,state:m,key:v},navigationType:i}},[l,d,u,f,m,v,i]);return y==null?null:S.createElement(sc.Provider,{value:c},S.createElement(oc.Provider,{children:n,value:y}))}function cO(t){let{children:e,location:n}=t;return YA(Nd(e),n)}new Promise(()=>{});function Nd(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Nd(r.props.children,s));return}r.type!==at&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const uO="6";try{window.__reactRouterVersion=uO}catch{}const dO="startTransition",Fg=xS[dO];function fO(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=yA({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=S.useCallback(u=>{c&&Fg?Fg(()=>l(u)):l(u)},[l,c]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>aO(r),[r]),S.createElement(lO,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var jg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jg||(jg={}));var Ug;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ug||(Ug={}));function hO({onLogin:t}){const e=Pt(),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),l=()=>n&&i,c=async f=>{f.preventDefault();try{await Hx($h,n,i),t(),e("/item-categories")}catch(m){a(m.message)}},d=f=>{f.preventDefault(),e("/create-account")},u=f=>{f.preventDefault(),e("/forgot-password")};return g.jsx("div",{className:he.App,children:g.jsx("form",{onSubmit:c,children:g.jsxs("div",{className:he.style1,children:[g.jsxs("div",{className:he.input_group,children:[g.jsx("label",{htmlFor:"user_name",children:"Username"}),g.jsx("input",{type:"email",id:"user_name",name:"user_name1",placeholder:"Enter User Name",value:n,onChange:f=>r(f.target.value)})]}),g.jsxs("div",{className:he.input_group,children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsx("input",{type:"password",id:"password",name:"password_1",placeholder:"Enter Password",value:i,onChange:f=>s(f.target.value)})]}),o&&g.jsx("div",{className:he.error,children:o})," ",g.jsx("div",{className:he.btn_style,children:g.jsx("button",{type:"submit",disabled:!l(),children:"Login"})}),g.jsx("div",{className:he.btn_style,children:g.jsx("button",{onClick:d,children:"Create Account"})}),g.jsx("div",{className:he.btn_style,children:g.jsx("button",{onClick:u,children:"Forgot Password?"})})]})})})}function pO(){const t=Pt(),[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState({value:"",isTouched:!1}),[a,l]=S.useState({value:"",isTouched:!1}),[c,d]=S.useState(""),[u,f]=S.useState(""),m=p=>/^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.gvsu\.edu)$/.test(p),v=p=>{const _=/[A-Z]/.test(p),E=/\d/.test(p),I=/[!@#$%^&*(),.?":{}|<>]/.test(p);return p.length<8?"Password should be at least 8 characters long":_?E?I?null:"Password should contain at least one special character":"Password should contain at least one number":"Password should contain at least one uppercase letter"},y=()=>e&&r&&s.value&&m(s.value)&&a.value.length>=8&&a.value===c&&!v(a.value),w=async p=>{if(p.preventDefault(),a.value!==c){f("Passwords do not match.");return}if(!m(s.value)){f("Email must be valid.");return}try{await Vx($h,s.value,a.value),t("/account_success")}catch(h){f(h.message)}};return g.jsx("div",{className:he.App,children:g.jsx("form",{onSubmit:w,children:g.jsxs("div",{className:he.style1,children:[g.jsxs("div",{className:he.input_group,children:[g.jsxs("label",{htmlFor:"first_name",children:["First Name ",g.jsx("sup",{children:"*"})]}),g.jsx("input",{type:"text",id:"first_name",name:"first_name1",placeholder:"Enter First name",value:e,onChange:p=>{n(p.target.value)}})]}),g.jsxs("div",{className:he.input_group,children:[g.jsxs("label",{htmlFor:"last_name",children:["Last Name ",g.jsx("sup",{children:"*"})]}),g.jsx("input",{type:"text",id:"last_name",name:"last_name1",placeholder:"Enter Last name",value:r,onChange:p=>{i(p.target.value)}})]}),g.jsxs("div",{className:he.input_group,children:[g.jsxs("label",{htmlFor:"e_mail",children:["E-mail ",g.jsx("sup",{children:"*"})]}),g.jsx("input",{type:"email",id:"e_mail",name:"e_mail1",placeholder:"Enter Email",value:s.value,onChange:p=>o({...s,value:p.target.value}),onBlur:()=>o({...s,isTouched:!0})}),s.isTouched&&!m(s.value)&&g.jsx("p",{className:"FieldError",children:"Enter a correct email (must be Gmail or GVSU email)"})]}),g.jsxs("div",{className:he.input_group,children:[g.jsxs("label",{htmlFor:"password",children:["Create Password ",g.jsx("sup",{children:"*"})," "]}),g.jsx("input",{type:"password",id:"password",name:"password1",placeholder:"Enter Password",value:a.value,onChange:p=>l({...a,value:p.target.value}),onBlur:()=>l({...a,isTouched:!0})}),a.isTouched&&v(a.value)&&g.jsx("p",{className:"FieldError",children:v(a.value)})]}),g.jsxs("div",{className:he.input_group,children:[g.jsxs("label",{htmlFor:"repassword",children:["Re - Enter Password ",g.jsx("sup",{children:"*"})]}),g.jsx("input",{type:"password",id:"repassword",name:"repassword1",placeholder:"Re - Enter Password",value:c,onChange:p=>d(p.target.value)}),c&&a.value!==c&&g.jsx("p",{className:"FieldError",children:"Passwords do not match"})]}),u&&g.jsx("div",{className:he.error,children:u}),g.jsx("div",{className:he.btn_style,children:g.jsx("button",{type:"submit",disabled:!y(),children:"Create Account"})})]})})})}function mO(){const t=Pt(),e=n=>{n.preventDefault(),t("/")};return g.jsxs("div",{className:he.style1,children:[g.jsx("h1",{children:"Congrats!! Account Created Successfully"}),g.jsx("div",{className:he.btn_style,children:g.jsx("button",{onClick:e,children:"Back to Account"})})]})}const gO="_search_item_gmsci_3",_O="_searchBar_gmsci_23",vO="_item_styles_gmsci_53",yO="_item_gmsci_53",wO="_delete_icon_gmsci_123",cs={search_item:gO,searchBar:_O,item_styles:vO,item:yO,delete_icon:wO,"dark-mode":"_dark-mode_gmsci_175"},zg=()=>{};let Hh={},kE={},xE=null,NE={mark:zg,measure:zg};try{typeof window<"u"&&(Hh=window),typeof document<"u"&&(kE=document),typeof MutationObserver<"u"&&(xE=MutationObserver),typeof performance<"u"&&(NE=performance)}catch{}const{userAgent:Wg=""}=Hh.navigator||{},Xn=Hh,te=kE,$g=xE,sa=NE;Xn.document;const gn=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",PE=~Wg.indexOf("MSIE")||~Wg.indexOf("Trident/");var re="classic",RE="duotone",tt="sharp",nt="sharp-duotone",EO=[re,RE,tt,nt],SO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Bg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},CO=["kit"],IO=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,TO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,kO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},xO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},NO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},PO={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},RO={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},bO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},bE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},AO=["solid","regular","light","thin","duotone","brands"],AE=[1,2,3,4,5,6,7,8,9,10],OO=AE.concat([11,12,13,14,15,16,17,18,19,20]),_s={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},DO=[...Object.keys(PO),...AO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_s.GROUP,_s.SWAP_OPACITY,_s.PRIMARY,_s.SECONDARY].concat(AE.map(t=>"".concat(t,"x"))).concat(OO.map(t=>"w-".concat(t))),LO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},MO={kit:{"fa-kit":"fak"}},FO={kit:{fak:"fa-kit"}},Vg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const un="___FONT_AWESOME___",Pd=16,OE="fa",DE="svg-inline--fa",Fr="data-fa-i2svg",Rd="data-fa-pseudo-element",jO="data-fa-pseudo-element-pending",Gh="data-prefix",Kh="data-icon",Hg="fontawesome-i2svg",UO="async",zO=["HTML","HEAD","STYLE","SCRIPT"],LE=(()=>{try{return!0}catch{return!1}})(),ME=[re,tt,nt];function Do(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[re]}})}const FE={...bE};FE[re]={...bE[re],...Bg.kit,...Bg["kit-duotone"]};const Cr=Do(FE),bd={...bO};bd[re]={...bd[re],...Vg.kit,...Vg["kit-duotone"]};const go=Do(bd),Ad={...RO};Ad[re]={...Ad[re],...FO.kit};const Ir=Do(Ad),Od={...NO};Od[re]={...Od[re],...MO.kit};const WO=Do(Od),$O=IO,jE="fa-layers-text",BO=TO,VO={...SO};Do(VO);const HO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],su=_s,ji=new Set;Object.keys(go[re]).map(ji.add.bind(ji));Object.keys(go[tt]).map(ji.add.bind(ji));Object.keys(go[nt]).map(ji.add.bind(ji));const GO=[...CO,...DO],Ls=Xn.FontAwesomeConfig||{};function KO(t){var e=te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function YO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}te&&typeof te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=YO(KO(n));i!=null&&(Ls[r]=i)});const UE={styleDefault:"solid",familyDefault:"classic",cssPrefix:OE,replacementClass:DE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ls.familyPrefix&&(Ls.cssPrefix=Ls.familyPrefix);const Ui={...UE,...Ls};Ui.autoReplaceSvg||(Ui.observeMutations=!1);const R={};Object.keys(UE).forEach(t=>{Object.defineProperty(R,t,{enumerable:!0,set:function(e){Ui[t]=e,Ms.forEach(n=>n(R))},get:function(){return Ui[t]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Ui.cssPrefix=t,Ms.forEach(e=>e(R))},get:function(){return Ui.cssPrefix}});Xn.FontAwesomeConfig=R;const Ms=[];function qO(t){return Ms.push(t),()=>{Ms.splice(Ms.indexOf(t),1)}}const wn=Pd,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function QO(t){if(!t||!gn)return;const e=te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return te.head.insertBefore(e,r),t}const XO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _o(){let t=12,e="";for(;t-- >0;)e+=XO[Math.random()*62|0];return e}function Qi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yh(t){return t.classList?Qi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function zE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function JO(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(zE(t[n]),'" '),"").trim()}function cc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qh(t){return t.size!==Lt.size||t.x!==Lt.x||t.y!==Lt.y||t.rotate!==Lt.rotate||t.flipX||t.flipY}function ZO(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function eD(t){let{transform:e,width:n=Pd,height:r=Pd,startCentered:i=!1}=t,s="";return i&&PE?s+="translate(".concat(e.x/wn-n/2,"em, ").concat(e.y/wn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/wn,"em), calc(-50% + ").concat(e.y/wn,"em)) "):s+="translate(".concat(e.x/wn,"em, ").concat(e.y/wn,"em) "),s+="scale(".concat(e.size/wn*(e.flipX?-1:1),", ").concat(e.size/wn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var tD=`:root, :host {
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
}`;function WE(){const t=OE,e=DE,n=R.cssPrefix,r=R.replacementClass;let i=tD;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Gg=!1;function ou(){R.autoAddCss&&!Gg&&(QO(WE()),Gg=!0)}var nD={mixout(){return{dom:{css:WE,insertCss:ou}}},hooks(){return{beforeDOMElementCreation(){ou()},beforeI2svg(){ou()}}}};const dn=Xn||{};dn[un]||(dn[un]={});dn[un].styles||(dn[un].styles={});dn[un].hooks||(dn[un].hooks={});dn[un].shims||(dn[un].shims=[]);var Mt=dn[un];const $E=[],BE=function(){te.removeEventListener("DOMContentLoaded",BE),El=1,$E.map(t=>t())};let El=!1;gn&&(El=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),El||te.addEventListener("DOMContentLoaded",BE));function rD(t){gn&&(El?setTimeout(t,0):$E.push(t))}function Lo(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?zE(t):"<".concat(e," ").concat(JO(n),">").concat(r.map(Lo).join(""),"</").concat(e,">")}function Kg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var au=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)c=s[l],d=a(d,e[c],c,e);return d};function iD(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Dd(t){const e=iD(t);return e.length===1?e[0].toString(16):null}function sD(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Yg(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ld(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Yg(e);typeof Mt.hooks.addPack=="function"&&!r?Mt.hooks.addPack(t,Yg(e)):Mt.styles[t]={...Mt.styles[t]||{},...i},t==="fas"&&Ld("fa",e)}const{styles:pr,shims:oD}=Mt,aD={[re]:Object.values(Ir[re]),[tt]:Object.values(Ir[tt]),[nt]:Object.values(Ir[nt])};let Qh=null,VE={},HE={},GE={},KE={},YE={};const lD={[re]:Object.keys(Cr[re]),[tt]:Object.keys(Cr[tt]),[nt]:Object.keys(Cr[nt])};function cD(t){return~GO.indexOf(t)}function uD(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!cD(i)?i:null}const qE=()=>{const t=r=>au(pr,(i,s,o)=>(i[o]=au(s,r,{}),i),{});VE=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),HE=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),YE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in pr||R.autoFetchSvg,n=au(oD,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});GE=n.names,KE=n.unicodes,Qh=uc(R.styleDefault,{family:R.familyDefault})};qO(t=>{Qh=uc(t.styleDefault,{family:R.familyDefault})});qE();function Xh(t,e){return(VE[t]||{})[e]}function dD(t,e){return(HE[t]||{})[e]}function On(t,e){return(YE[t]||{})[e]}function QE(t){return GE[t]||{prefix:null,iconName:null}}function fD(t){const e=KE[t],n=Xh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jn(){return Qh}const Jh=()=>({prefix:null,iconName:null,rest:[]});function uc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=re}=e,r=Cr[n][t],i=go[n][t]||go[n][r],s=t in Mt.styles?t:null;return i||s||null}const hD={[re]:Object.keys(Ir[re]),[tt]:Object.keys(Ir[tt]),[nt]:Object.keys(Ir[nt])};function dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[re]:"".concat(R.cssPrefix,"-").concat(re),[tt]:"".concat(R.cssPrefix,"-").concat(tt),[nt]:"".concat(R.cssPrefix,"-").concat(nt)};let i=null,s=re;const o=EO.filter(l=>l!==RE);o.forEach(l=>{(t.includes(r[l])||t.some(c=>hD[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const d=uD(R.cssPrefix,c);if(pr[c]?(c=aD[s].includes(c)?WO[s][c]:c,i=c,l.prefix=c):lD[s].indexOf(c)>-1?(i=c,l.prefix=uc(c,{family:s})):d?l.iconName=d:c!==R.replacementClass&&!o.some(u=>c===r[u])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const u=i==="fa"?QE(l.iconName):{},f=On(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||f||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!pr.far&&pr.fas&&!R.autoFetchSvg&&(l.prefix="fas")}return l},Jh());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===tt&&(pr.fass||R.autoFetchSvg)&&(a.prefix="fass",a.iconName=On(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===nt&&(pr.fasds||R.autoFetchSvg)&&(a.prefix="fasds",a.iconName=On(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Jn()||"fas"),a}class pD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Ld(s,i[s]);const o=Ir[re][s];o&&Ld(o,i[s]),qE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let qg=[],ci={};const Si={},mD=Object.keys(Si);function gD(t,e){let{mixoutsTo:n}=e;return qg=t,ci={},Object.keys(Si).forEach(r=>{mD.indexOf(r)===-1&&delete Si[r]}),qg.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ci[o]||(ci[o]=[]),ci[o].push(s[o])})}r.provides&&r.provides(Si)}),n}function Md(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ci[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function jr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ci[t]||[]).forEach(s=>{s.apply(null,n)})}function Zn(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Si[t]?Si[t].apply(null,e):void 0}function Fd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Jn();if(e)return e=On(n,e)||e,Kg(XE.definitions,n,e)||Kg(Mt.styles,n,e)}const XE=new pD,_D=()=>{R.autoReplaceSvg=!1,R.observeMutations=!1,jr("noAuto")},vD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gn?(jr("beforeI2svg",t),Zn("pseudoElements2svg",t),Zn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,rD(()=>{wD({autoReplaceSvgRoot:e}),jr("watch",t)})}},yD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:On(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=uc(t[0]);return{prefix:n,iconName:On(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match($O))){const e=dc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Jn(),iconName:On(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Jn();return{prefix:e,iconName:On(e,t)||t}}}},ot={noAuto:_D,config:R,dom:vD,parse:yD,library:XE,findIconDefinition:Fd,toHtml:Lo},wD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=te}=t;(Object.keys(Mt.styles).length>0||R.autoFetchSvg)&&gn&&R.autoReplaceSvg&&ot.dom.i2svg({node:e})};function fc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Lo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!gn)return;const n=te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ED(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(qh(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=cc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function SD(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Zh(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:d,watchable:u=!1}=t,{width:f,height:m}=n.found?n:e,v=r==="fak",y=[R.replacementClass,i?"".concat(R.cssPrefix,"-").concat(i):""].filter(I=>d.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(d.classes).join(" ");let w={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(m)}};const p=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(f/m*16*.0625,"em")}:{};u&&(w.attributes[Fr]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||_o())},children:[a]}),delete w.attributes.title);const h={...w,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...p,...d.styles}},{children:_,attributes:E}=n.found&&e.found?Zn("generateAbstractMask",h)||{children:[],attributes:{}}:Zn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=_,h.attributes=E,o?SD(h):ED(h)}function Qg(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Fr]="");const c={...o.styles};qh(i)&&(c.transform=eD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=cc(c);d.length>0&&(l.style=d);const u=[];return u.push({tag:"span",attributes:l,children:[e]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function CD(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=cc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:lu}=Mt;function jd(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(su.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(su.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(su.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const ID={found:!1,width:512,height:512};function TD(t,e){!LE&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ud(t,e){let n=e;return e==="fa"&&R.styleDefault!==null&&(e=Jn()),new Promise((r,i)=>{if(n==="fa"){const s=QE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&lu[e]&&lu[e][t]){const s=lu[e][t];return r(jd(s))}TD(t,e),r({...ID,icon:R.showMissingIcons&&t?Zn("missingIconAbstract")||{}:{}})})}const Xg=()=>{},zd=R.measurePerformance&&sa&&sa.mark&&sa.measure?sa:{mark:Xg,measure:Xg},vs='FA "6.6.0"',kD=t=>(zd.mark("".concat(vs," ").concat(t," begins")),()=>JE(t)),JE=t=>{zd.mark("".concat(vs," ").concat(t," ends")),zd.measure("".concat(vs," ").concat(t),"".concat(vs," ").concat(t," begins"),"".concat(vs," ").concat(t," ends"))};var ep={begin:kD,end:JE};const Ca=()=>{};function Jg(t){return typeof(t.getAttribute?t.getAttribute(Fr):null)=="string"}function xD(t){const e=t.getAttribute?t.getAttribute(Gh):null,n=t.getAttribute?t.getAttribute(Kh):null;return e&&n}function ND(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function PD(){return R.autoReplaceSvg===!0?Ia.replace:Ia[R.autoReplaceSvg]||Ia.replace}function RD(t){return te.createElementNS("http://www.w3.org/2000/svg",t)}function bD(t){return te.createElement(t)}function ZE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?RD:bD}=e;if(typeof t=="string")return te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(ZE(s,{ceFn:n}))}),r}function AD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ia={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ZE(n),e)}),e.getAttribute(Fr)===null&&R.keepOriginalSource){let n=te.createComment(AD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yh(e).indexOf(R.replacementClass))return Ia.replace(t);const r=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===R.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Lo(s)).join(`
`);e.setAttribute(Fr,""),e.innerHTML=i}};function Zg(t){t()}function eS(t,e){const n=typeof e=="function"?e:Ca;if(t.length===0)n();else{let r=Zg;R.mutateApproach===UO&&(r=Xn.requestAnimationFrame||Zg),r(()=>{const i=PD(),s=ep.begin("mutate");t.map(i),s(),n()})}}let tp=!1;function tS(){tp=!0}function Wd(){tp=!1}let Sl=null;function e_(t){if(!$g||!R.observeMutations)return;const{treeCallback:e=Ca,nodeCallback:n=Ca,pseudoElementsCallback:r=Ca,observeMutationsRoot:i=te}=t;Sl=new $g(s=>{if(tp)return;const o=Jn();Qi(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Jg(a.addedNodes[0])&&(R.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&R.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Jg(a.target)&&~HO.indexOf(a.attributeName))if(a.attributeName==="class"&&xD(a.target)){const{prefix:l,iconName:c}=dc(Yh(a.target));a.target.setAttribute(Gh,l||o),c&&a.target.setAttribute(Kh,c)}else ND(a.target)&&n(a.target)})}),gn&&Sl.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function OD(){Sl&&Sl.disconnect()}function DD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function LD(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=dc(Yh(t));return i.prefix||(i.prefix=Jn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=dD(i.prefix,t.innerText)||Xh(i.prefix,Dd(t.innerText))),!i.iconName&&R.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function MD(t){const e=Qi(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||_o()):(e["aria-hidden"]="true",e.focusable="false")),e}function FD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=LD(t),s=MD(t),o=Md("parseNodeAttributes",{},t);let a=e.styleParser?DD(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:jD}=Mt;function nS(t){const e=R.autoReplaceSvg==="nest"?t_(t,{styleParser:!1}):t_(t);return~e.extra.classes.indexOf(jE)?Zn("generateLayersText",t,e):Zn("generateSvgReplacementMutation",t,e)}let $t=new Set;ME.map(t=>{$t.add("fa-".concat(t))});Object.keys(Cr[re]).map($t.add.bind($t));Object.keys(Cr[tt]).map($t.add.bind($t));Object.keys(Cr[nt]).map($t.add.bind($t));$t=[...$t];function n_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gn)return Promise.resolve();const n=te.documentElement.classList,r=d=>n.add("".concat(Hg,"-").concat(d)),i=d=>n.remove("".concat(Hg,"-").concat(d)),s=R.autoFetchSvg?$t:ME.map(d=>"fa-".concat(d)).concat(Object.keys(jD));s.includes("fa")||s.push("fa");const o=[".".concat(jE,":not([").concat(Fr,"])")].concat(s.map(d=>".".concat(d,":not([").concat(Fr,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Qi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=ep.begin("onTree"),c=a.reduce((d,u)=>{try{const f=nS(u);f&&d.push(f)}catch(f){LE||f.name==="MissingIcon"&&console.error(f)}return d},[]);return new Promise((d,u)=>{Promise.all(c).then(f=>{eS(f,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(f=>{l(),u(f)})})}function UD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nS(t).then(n=>{n&&eS([n],e)})}function zD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Fd(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Fd(i||{})),t(r,{...n,mask:i})}}const WD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Lt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:u,iconName:f,icon:m}=t;return fc({type:"icon",...t},()=>(jr("beforeDOMElementCreation",{iconDefinition:t,params:e}),R.autoA11y&&(o?c["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(a||_o()):(c["aria-hidden"]="true",c.focusable="false")),Zh({icons:{main:jd(m),mask:i?jd(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:f,transform:{...Lt,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:l}})))};var $D={mixout(){return{icon:zD(WD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=n_,t.nodeCallback=UD,t}}},provides(t){t.i2svg=function(e){const{node:n=te,callback:r=()=>{}}=e;return n_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:d,extra:u}=n;return new Promise((f,m)=>{Promise.all([Ud(r,o),c.iconName?Ud(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[y,w]=v;f([e,Zh({icons:{main:y,mask:w},prefix:o,iconName:r,transform:a,symbol:l,maskId:d,title:i,titleId:s,extra:u,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=cc(o);a.length>0&&(r.style=a);let l;return qh(s)&&(l=Zn("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},BD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return fc({type:"layer"},()=>{jr("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},VD={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return fc({type:"counter",content:t},()=>(jr("beforeDOMElementCreation",{content:t,params:e}),CD({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(R.cssPrefix,"-layers-counter"),...r]}})))}}}},HD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Lt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return fc({type:"text",content:t},()=>(jr("beforeDOMElementCreation",{content:t,params:e}),Qg({content:t,transform:{...Lt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(R.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(PE){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return R.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Qg({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const GD=new RegExp('"',"ug"),r_=[1105920,1112319],i_={FontAwesome:{normal:"fas",400:"fas"},...xO,...kO,...LO},$d=Object.keys(i_).reduce((t,e)=>(t[e.toLowerCase()]=i_[e],t),{}),KD=Object.keys($d).reduce((t,e)=>{const n=$d[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function YD(t){const e=t.replace(GD,""),n=sD(e,0),r=n>=r_[0]&&n<=r_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Dd(i?e[0]:e),isSecondary:r||i}}function qD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return($d[n]||{})[i]||KD[n]}function s_(t,e){const n="".concat(jO).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Qi(t.children).filter(f=>f.getAttribute(Rd)===e)[0],a=Xn.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(BO),d=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){const f=a.getPropertyValue("content");let m=qD(l,d);const{value:v,isSecondary:y}=YD(f),w=c[0].startsWith("FontAwesome");let p=Xh(m,v),h=p;if(w){const _=fD(v);_.iconName&&_.prefix&&(p=_.iconName,m=_.prefix)}if(p&&!y&&(!o||o.getAttribute(Gh)!==m||o.getAttribute(Kh)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const _=FD(),{extra:E}=_;E.attributes[Rd]=e,Ud(p,m).then(I=>{const P=Zh({..._,icons:{main:I,mask:Jh()},prefix:m,iconName:h,extra:E,watchable:!0}),x=te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(x,t.firstChild):t.appendChild(x),x.outerHTML=P.map(b=>Lo(b)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function QD(t){return Promise.all([s_(t,"::before"),s_(t,"::after")])}function XD(t){return t.parentNode!==document.head&&!~zO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function o_(t){if(gn)return new Promise((e,n)=>{const r=Qi(t.querySelectorAll("*")).filter(XD).map(QD),i=ep.begin("searchPseudoElements");tS(),Promise.all(r).then(()=>{i(),Wd(),e()}).catch(()=>{i(),Wd(),n()})})}var JD={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=o_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=te}=e;R.searchPseudoElements&&o_(n)}}};let a_=!1;var ZD={mixout(){return{dom:{unwatch(){tS(),a_=!0}}}},hooks(){return{bootstrap(){e_(Md("mutationObserverCallbacks",{}))},noAuto(){OD()},watch(t){const{observeMutationsRoot:e}=t;a_?Wd():e_(Md("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const l_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var eL={mixout(){return{parse:{transform:t=>l_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=l_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(c)},u={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:d,path:u};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const cu={x:0,y:0,width:"100%",height:"100%"};function c_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function tL(t){return t.tag==="g"?t.children:[t]}var nL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?dc(n.split(" ").map(i=>i.trim())):Jh();return r.prefix||(r.prefix=Jn()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:d,icon:u}=s,f=ZO({transform:a,containerWidth:d,iconWidth:l}),m={tag:"rect",attributes:{...cu,fill:"white"}},v=c.children?{children:c.children.map(c_)}:{},y={tag:"g",attributes:{...f.inner},children:[c_({tag:c.tag,attributes:{...c.attributes,...f.path},...v})]},w={tag:"g",attributes:{...f.outer},children:[y]},p="mask-".concat(o||_o()),h="clip-".concat(o||_o()),_={tag:"mask",attributes:{...cu,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,w]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:tL(u)},_]};return n.push(E,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...cu}}),{children:n,attributes:r}}}},rL={provides(t){let e=!1;Xn.matchMedia&&(e=Xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},iL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},sL=[nD,$D,BD,VD,HD,JD,ZD,eL,nL,rL,iL];gD(sL,{mixoutsTo:ot});ot.noAuto;ot.config;ot.library;ot.dom;const Bd=ot.parse;ot.findIconDefinition;ot.toHtml;const oL=ot.icon;ot.layer;ot.text;ot.counter;var rS={exports:{}},aL="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lL=aL,cL=lL;function iS(){}function sS(){}sS.resetWarningCache=iS;var uL=function(){function t(r,i,s,o,a,l){if(l!==cL){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sS,resetWarningCache:iS};return n.PropTypes=n,n};rS.exports=uL();var dL=rS.exports;const U=p_(dL);function u_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function At(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u_(Object(n),!0).forEach(function(r){ui(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cl(t){"@babel/helpers - typeof";return Cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cl(t)}function ui(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hL(t,e){if(t==null)return{};var n=fL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vd(t){return pL(t)||mL(t)||gL(t)||_L()}function pL(t){if(Array.isArray(t))return Hd(t)}function mL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gL(t,e){if(t){if(typeof t=="string")return Hd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hd(t,e)}}function Hd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vL(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,d=t.spinReverse,u=t.pulse,f=t.fixedWidth,m=t.inverse,v=t.border,y=t.listItem,w=t.flip,p=t.size,h=t.rotation,_=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":f,"fa-inverse":m,"fa-border":v,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},ui(e,"fa-".concat(p),typeof p<"u"&&p!==null),ui(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ui(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),ui(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function yL(t){return t=t-0,t===t}function oS(t){return yL(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var wL=["style"];function EL(t){return t.charAt(0).toUpperCase()+t.slice(1)}function SL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=oS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[EL(i)]=s:e[i]=s,e},{})}function aS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return aS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=SL(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[oS(c)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=hL(n,wL);return i.attrs.style=At(At({},i.attrs.style),o),t.apply(void 0,[e.tag,At(At({},i.attrs),a)].concat(Vd(r)))}var lS=!1;try{lS=!0}catch{}function CL(){if(!lS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function d_(t){if(t&&Cl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bd.icon)return Bd.icon(t);if(t===null)return null;if(t&&Cl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function uu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ui({},t,e):{}}var f_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},hc=Qd.forwardRef(function(t,e){var n=At(At({},f_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,d=d_(r),u=uu("classes",[].concat(Vd(vL(n)),Vd((o||"").split(" ")))),f=uu("transform",typeof n.transform=="string"?Bd.transform(n.transform):n.transform),m=uu("mask",d_(i)),v=oL(d,At(At(At(At({},u),f),m),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!v)return CL("Could not find icon",d),null;var y=v.abstract,w={ref:e};return Object.keys(n).forEach(function(p){f_.hasOwnProperty(p)||(w[p]=n[p])}),IL(y[0],w)});hc.displayName="FontAwesomeIcon";hc.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};var IL=aS.bind(null,Qd.createElement);const cS={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]};function TL(){const t=Pt(),[e,n]=S.useState([]),[r,i]=S.useState("");S.useEffect(()=>{const c=Ve(Je,"categories");Fi(c,d=>{const u=d.val(),f=u?Object.values(u):[];n(f)})},[]);const s=c=>{t(`/item-types/${c}`)},o=()=>{t("/add-item-categories")},a=c=>{if(window.confirm(`Are you sure you want to delete ${c}?`)){const u=Ve(Je,"categories");Fi(u,f=>{const m=f.val(),v=Object.keys(m).find(y=>m[y]===c);if(v){const y=Ve(Je,`categories/${v}`);Td(y).then(()=>{console.log(`Deleted ${c} from categories`);const w=Ve(Je,`items/${c}`);return Td(w)}).then(()=>{console.log(`Deleted ${c} from items`),n(w=>w.filter(p=>p!==c))}).catch(w=>{console.error("Error deleting category: ",w)})}},{onlyOnce:!0})}else console.log(`Deletion of ${c} was cancelled.`)},l=e.filter(c=>c.toLowerCase().includes(r.toLowerCase()));return g.jsxs("div",{children:[g.jsxs("div",{className:cs.search_item,children:[g.jsx("h1",{children:"Item Categories Page"}),g.jsx("input",{type:"text",placeholder:"Search The Item",className:cs.searchBar,onChange:c=>i(c.target.value)}),g.jsx("button",{onClick:o,children:"Add New Category"})]}),g.jsx("div",{className:cs.item_styles,children:l.map(c=>g.jsxs("div",{className:cs.item,children:[g.jsxs("h1",{onClick:()=>s(c),children:[" ",c," "]}),g.jsx(hc,{icon:cS,className:cs.delete_icon,onClick:()=>a(c)})]},c))})]})}const h_={};function kL(){const t=Pt(),[e,n]=S.useState(""),[r,i]=S.useState(!1),s=()=>e.trim().length>0,o=c=>{c.preventDefault(),i(!0)},a=async()=>{const c=Ve(Je,"categories");await uE(c,e),t("/item-categories")},l=()=>{i(!1)};return g.jsxs("div",{children:[g.jsx("div",{children:g.jsx("h1",{children:"Add Item Category"})}),g.jsxs("form",{onSubmit:o,children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"Cat_name",children:"Enter Category Name"}),g.jsx("input",{type:"text",placeholder:"Enter Category Name",id:"Cat_name",name:"new_category",value:e,onChange:c=>n(c.target.value)})]}),g.jsx("div",{children:g.jsx("button",{disabled:!s(),children:"Save"})})]}),r&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:h_.modal_overlay}),g.jsxs("div",{className:h_.confirmation_modal,children:[g.jsx("p",{children:"Would you like to add a new category?"}),g.jsx("button",{onClick:a,children:"Yes"}),g.jsx("button",{onClick:l,children:"No"})]})]})]})}const xL="_item_styles_ek261_3",NL="_item_container_ek261_21",PL="_item_ek261_3",RL="_delete_icon_ek261_83",bL="_search_item_ek261_111",AL="_searchBar_ek261_127",OL="_save_button_ek261_183",DL="_cancel_button_ek261_183",cr={item_styles:xL,item_container:NL,item:PL,delete_icon:RL,search_item:bL,searchBar:AL,save_button:OL,cancel_button:DL};function LL(){const t=Pt(),{category:e}=lc(),[n,r]=S.useState([]),[i,s]=S.useState("");S.useEffect(()=>{const u=Ve(Je,`items/${e}`);Fi(u,f=>{const m=f.val(),v=m?Object.keys(m).map(y=>({id:y,...m[y]})):[];r(v)})},[e]);const o=()=>{t(`/add-item-type/${e}`)},a=()=>{t("/item-categories")},l=async u=>{if(window.confirm("Are you sure you want to delete this item?")){const m=Ve(Je,`items/${e}/${u}`);await Td(m)}},c=u=>{console.log(`Navigating to details for category: ${e}, item: ${u}`),t(`/details/${e}/${u}`)},d=n.filter(u=>u.name.toLowerCase().includes(i.toLowerCase()));return g.jsxs("div",{children:[g.jsxs("div",{className:cr.search_item,children:[g.jsx("button",{onClick:a,children:"Back"}),g.jsxs("h1",{children:["Items in ",e]}),g.jsx("input",{type:"text",placeholder:"Search the item",className:cr.searchBar,onChange:u=>s(u.target.value)}),g.jsx("button",{onClick:o,children:"Add New Item"})]}),g.jsx("div",{className:cr.item_styles,children:d.map(u=>g.jsxs("div",{className:cr.item_container,children:[g.jsx("div",{className:cr.item,onClick:()=>c(u.name),children:g.jsx("strong",{children:u.name})}),g.jsx("div",{className:cr.delete_icon_container,children:g.jsx(hc,{icon:cS,className:cr.delete_icon,onClick:()=>l(u.id)})})]},u.id))})]})}const Z={"form-container":"_form-container_1i4tw_1","form-group":"_form-group_1i4tw_29","custom-dropdown":"_custom-dropdown_1i4tw_65","dropdown-list":"_dropdown-list_1i4tw_91","dropdown-item":"_dropdown-item_1i4tw_119","submit-button":"_submit-button_1i4tw_139","cancel-button":"_cancel-button_1i4tw_161"};function ML(){const t=Pt(),{categorys:e}=lc(),[n,r]=S.useState(""),[i,s]=S.useState([]),[o,a]=S.useState([]),[l,c]=S.useState(""),[d,u]=S.useState(!1),[f,m]=S.useState(""),[v,y]=S.useState(""),[w,p]=S.useState(""),[h,_]=S.useState(""),[E,I]=S.useState(""),[P,x]=S.useState(""),[b,G]=S.useState(!1);S.useEffect(()=>{const V=Ve(Je,"categories");Fi(V,or=>{const _n=or.val(),k=_n?Object.values(_n):[];s(k),a(k)})},[]),S.useEffect(()=>{a(i.filter(V=>V.toLowerCase().includes(l.toLowerCase())))},[l,i]);const L=async V=>{V.preventDefault();const or={category:n,name:f,details:v,reviews:w,rating:h,image:E};try{await uE(Ve(Je,`items/${n}`),or),t(`/item-types/${n}`)}catch(_n){console.error("Error adding item to Firebase:",_n)}},qe=()=>{t(`/item-types/${e}`)},ir=V=>{r(V),c(V),u(!1)},sr=V=>{V.preventDefault(),G(!0)},Mo=()=>{G(!1)};return g.jsxs("div",{className:Z["form-container"],children:[g.jsx("h1",{children:"Add New Item"}),g.jsxs("form",{onSubmit:sr,children:[g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"category_name",children:"Category Name:"}),g.jsxs("div",{className:Z["custom-dropdown"],children:[g.jsx("input",{type:"text",placeholder:"Select or search categories...",value:l,onChange:V=>{c(V.target.value),u(!0)},onFocus:()=>u(!0)}),d&&g.jsx("div",{className:Z["dropdown-list"],children:o.length>0?o.map(V=>g.jsx("div",{className:Z["dropdown-item"],onClick:()=>ir(V),children:V},V)):g.jsx("div",{className:Z["dropdown-item"],children:"No categories found"})})]})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"item_type",children:"Item Name:"}),g.jsx("input",{type:"text",id:"item_type",value:f,onChange:V=>m(V.target.value)})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"item_details",children:"Item Stock:"}),g.jsx("input",{type:"number",id:"item_details",value:v,onChange:V=>y(V.target.value)})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"item_reviews",children:"Reviews:"}),g.jsx("input",{type:"text",id:"item_reviews",value:w,onChange:V=>p(V.target.value)})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"item_rating",children:"Rating:"}),g.jsx("input",{type:"text",id:"item_rating",value:h,onChange:V=>_(V.target.value)})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"item_image",children:"Image URL:"}),g.jsx("input",{type:"text",id:"item_image",value:E,onChange:V=>I(V.target.value)})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"item_image",children:"Image Decription:"}),g.jsx("input",{type:"text",id:"item_image",value:P,onChange:V=>x(V.target.value)})]}),g.jsx("button",{type:"submit",className:Z["submit-button"],children:"Add New Item"}),g.jsx("button",{type:"button",onClick:qe,className:Z["cancel-button"],children:"Cancel"})]}),b&&g.jsxs("div",{children:[g.jsx("p",{children:"Would you like to add new item "}),g.jsx("button",{onClick:L,children:"Yes"}),g.jsx("button",{onClick:Mo,children:"No"})]})]})}function FL(){const{item:t,category:e}=lc(),n=Pt(),[r,i]=S.useState(null),[s,o]=S.useState(!0),[a,l]=S.useState(null);S.useEffect(()=>{const u=Ve(hE());console.log("Fetching details for:",{category:e,item:t}),fE(Mi(u,`items/${e}`)).then(f=>{if(f.exists()){const m=f.val(),v=Object.entries(m).find(([y,w])=>w.name.trim().toLowerCase()===t.trim().toLowerCase());if(v){const[y,w]=v;i(w),l(y)}else console.log("Item not found in category."),i(null)}else console.log("No data available for this category."),i(null);o(!1)}).catch(f=>{console.error("Error fetching data: ",f),o(!1)})},[e,t]);const c=()=>{a?n(`/editdetails/${e}/${a}`):console.error("Item ID is undefined.")},d=()=>{n(`/item-types/${e}`)};return s?g.jsx("div",{children:"Loading..."}):r?g.jsxs("div",{children:[g.jsxs("div",{children:[g.jsx("button",{onClick:d,children:"Back"}),g.jsxs("h1",{children:["Item Details: ",r.name]}),g.jsx("button",{onClick:c,children:"Edit Item Details"})]}),g.jsxs("div",{children:[g.jsxs("p",{children:["Item Category: ",r.category]}),g.jsxs("p",{children:["Item Name: ",r.name]}),g.jsxs("p",{children:["Item Stock: ",r.details]}),g.jsxs("p",{children:["Item Reviews: ",r.reviews]}),g.jsxs("p",{children:["Item Rating: ",r.rating]}),g.jsxs("p",{children:["Item Description: ",r.desc]}),r.image&&g.jsx("img",{src:r.image,alt:`${r.name}`,style:{maxWidth:"200px",margin:"10px 0"}})]})]}):g.jsx("div",{children:"Item not found."})}function jL(){const{category:t,itemId:e}=lc(),[n,r]=S.useState({name:"",details:"",reviews:"",rating:"",image:"",desc:""}),[i,s]=S.useState(!0),[o,a]=S.useState(null),[l,c]=S.useState(!1),d=Pt();S.useEffect(()=>{(async()=>{try{const w=Ve(Je,`items/${t}/${e}`),p=await fE(w);p.exists()?r(p.val()):a("Item not found.")}catch{a("Failed to load item details.")}finally{s(!1)}})()},[t,e]);const u=y=>{const{name:w,value:p}=y.target;r(h=>({...h,[w]:p}))},f=async()=>{try{const y=Ve(Je,`items/${t}/${e}`);await oA(y,n),d(`/item-types/${t}`)}catch{a("Failed to save changes.")}},m=()=>{c(!1)},v=y=>{y.preventDefault(),c(!0)};return i?g.jsx("p",{children:"Loading item details..."}):o?g.jsx("p",{className:Z.error,children:o}):g.jsxs("div",{className:Z["form-container"],children:[g.jsx("h1",{children:"Edit Item Details"}),g.jsxs("form",{onSubmit:v,children:[g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"name",children:"Item Name:"}),g.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:u})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"details",children:"Item Stock:"}),g.jsx("input",{type:"number",id:"details",name:"details",value:n.details,onChange:u})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"reviews",children:"Reviews:"}),g.jsx("input",{type:"text",id:"reviews",name:"reviews",value:n.reviews,onChange:u})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"rating",children:"Rating:"}),g.jsx("input",{type:"number",id:"rating",name:"rating",value:n.rating,onChange:u})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"image",children:"Image URL:"}),g.jsx("input",{type:"text",id:"image",name:"image",value:n.image,onChange:u})]}),g.jsxs("div",{className:Z["form-group"],children:[g.jsx("label",{htmlFor:"desc",children:"Image Description:"}),g.jsx("input",{type:"text",id:"desc",name:"desc",value:n.desc,onChange:u})]}),g.jsx("button",{type:"submit",className:Z["submit-button"],children:"Save Changes"}),g.jsx("button",{type:"button",onClick:()=>d(`/item-types/${t}`),className:Z["cancel-button"],children:"Cancel"})]}),l&&g.jsxs("div",{className:Z["confirmation-modal"],children:[g.jsx("p",{children:"Are you sure you want to save these changes?"}),g.jsx("button",{onClick:f,children:"Yes"}),g.jsx("button",{onClick:m,children:"No"})]})]})}function uS(){const[t,e]=S.useState({}),[n,r]=S.useState(0),[i,s]=S.useState(0),[o,a]=S.useState(!0);return S.useEffect(()=>{const l=Ve(Je,"items"),c=Ve(Je,"categories"),d=f=>{const m=f.val();if(m){const v={};let y=0;for(let w in m){const p=m[w]||{},h=Object.keys(p).length;v[w]={itemCount:h,items:p},y+=h}e(v),r(y)}else e({}),r(0);a(!1)};Fi(c,f=>{const m=f.val();s(m?Object.keys(m).length:0)},f=>{console.error("Error fetching categories:",f)}),Fi(l,d,f=>{console.error("Error fetching items:",f),a(!1)})},[]),o?g.jsx("p",{children:"Loading inventory..."}):g.jsxs("div",{children:[g.jsxs("h1",{children:["Total Categories: ",i]})," ",g.jsxs("h2",{children:["Total Items in Inventory: ",n]}),g.jsx("h3",{children:"Items by Category:"}),Object.keys(t).length>0?g.jsx("ul",{children:Object.entries(t).map(([l,{itemCount:c,items:d}])=>g.jsxs("li",{children:[g.jsxs("strong",{children:[l,":"]})," ",c," items",g.jsx("ul",{children:Object.entries(d).map(([u,f])=>g.jsxs("li",{children:[g.jsx("strong",{children:f.name}),": Stock - ",f.details," "]},u))})]},l))}):g.jsx("p",{children:"No items found."})]})}const UL=({onLogout:t})=>{const e=Pt(),{isDarkTheme:n,toggleTheme:r}=mE(),[i,s]=S.useState(!1),[o,a]=S.useState(!1),l=()=>{e("/inventory")},c=async()=>{try{await Yx($h),t(),e("/")}catch(m){console.error("Logout error:",m)}},d=()=>{e("/item-categories")},u=m=>{m.preventDefault(),s(!0)},f=()=>{s(!1)};return g.jsxs("header",{style:{display:"flex",justifyContent:"space-between",padding:"2px",background:"#f8f8f8",borderBottom:"1px solid #ccc"},children:[g.jsx("button",{style:{height:40,margin:20,borderRadius:5,fontWeight:"bold"},onClick:d,children:"Home"}),g.jsx("button",{style:{height:40,margin:20,borderRadius:5,fontWeight:"bold"},onClick:l,children:"Count "}),o&&g.jsx(uS,{}),g.jsx("button",{style:{height:40,margin:20,borderRadius:5,fontWeight:"bold"},onClick:r,children:n?"Light Mode":"Dark Mode"}),g.jsx("button",{style:{height:40,margin:20,borderRadius:5,fontWeight:"bold"},onClick:u,children:"Logout"}),i&&g.jsxs("div",{children:[g.jsx("p",{children:"Are You sure to Logout?"}),g.jsx("button",{onClick:c,children:"Yes"}),g.jsx("button",{onClick:f,children:"No"})]})]})},zL=({children:t,isLoggedIn:e,onLogout:n})=>{const{isDarkTheme:r}=mE(),i={backgroundColor:r?"#333":"#f8f8f8",color:r?"#f8f8f8":"#333",minHeight:"100vh"};return g.jsxs("div",{style:i,children:[e&&g.jsx(UL,{onLogout:n}),g.jsx("main",{children:t})," "]})},WL="_App_1g683_3",$L="_input_group_1g683_41",BL="_btn_style_1g683_97",VL="_message_1g683_133",HL="_back_to_login_1g683_149",us={App:WL,input_group:$L,btn_style:BL,message:VL,back_to_login:HL};function GL(){const[t,e]=S.useState(""),[n,r]=S.useState(""),i=Pt(),s=async o=>{o.preventDefault();const a=Q0();try{await Bx(a,t),r("Password reset email sent successfully. Please check your inbox.")}catch(l){r(`Error: ${l.message}`)}};return g.jsxs("div",{className:us.App,children:[g.jsx("h1",{children:"Forgot Password"}),g.jsxs("form",{onSubmit:s,children:[g.jsxs("div",{className:us.input_group,children:[g.jsx("label",{htmlFor:"email",children:"Email"}),g.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:t,onChange:o=>e(o.target.value)})]}),g.jsx("div",{className:us.btn_style,children:g.jsx("button",{type:"submit",children:"Send Reset Email"})}),n&&g.jsx("div",{className:us.message,children:n})]}),g.jsx("button",{className:us.back_to_login,onClick:()=>i("/"),children:"Back to Login"})]})}function KL(){const[t,e]=S.useState(()=>localStorage.getItem("isLoggedIn")==="true"),n=()=>{e(!0),localStorage.setItem("isLoggedIn","true")},r=()=>{e(!1),localStorage.removeItem("isLoggedIn")},[i,s]=S.useState(["Furniture","Decor","Appliances","Tools","Kitchen Ware"]),o=f=>{s(m=>[...m,f])},a=f=>{const m=i.filter(v=>v!==f);s(m)},l=[{id:1,category:"Furniture",name:"Sofa",details:"Blue color",reviews:100,rating:5,image:"/Assets/download.jpg"},{id:2,category:"Decor",name:"Chair",details:"Small",reviews:700,rating:3,image:"/Assets/chair.jpg"},{id:3,category:"Appliances",name:"Electric",details:"Huge",reviews:1200,rating:4.5},{id:4,category:"Tools",name:"Screw Driver",details:"100",reviews:900,rating:3.5},{id:5,category:"Kitchen Ware",name:"Spoon",details:"900",reviews:70,rating:5},{id:6,category:"Furniture",name:"Bed",details:"9*9",reviews:7e3,rating:4.9}],c=(f,m)=>{switch(m.type){case"addItem":return[...f,m.payload];case"editItem":return f.map(v=>v.id===m.payload.id?{...m.payload}:v);default:return f}},[d,u]=S.useReducer(c,l);return g.jsx(vA,{children:g.jsx(fO,{future:{v7_relativeSplatPath:!0},children:g.jsx(zL,{isLoggedIn:t,onLogout:r,children:g.jsx("div",{className:"App",children:g.jsxs(cO,{children:[g.jsx(at,{path:"/",element:g.jsx(hO,{onLogin:n})}),g.jsx(at,{path:"/create-account",element:g.jsx(pO,{})}),g.jsx(at,{path:"/account_success",element:g.jsx(mO,{})}),g.jsx(at,{path:"/item-categories",element:g.jsx(TL,{categories:i,handleDelete:a})}),g.jsx(at,{path:"/add-item-categories",element:g.jsx(kL,{addCategory:o})}),g.jsx(at,{path:"/item-types/:category",element:g.jsx(LL,{items:d})}),g.jsx(at,{path:"/add-item-type/:categorys",element:g.jsx(ML,{addItem:f=>u({type:"addItem",payload:f})})}),g.jsx(at,{path:"/details/:category/:item",element:g.jsx(FL,{items:d})}),g.jsx(at,{path:"/editdetails/:category/:itemId",element:g.jsx(jL,{})}),g.jsx(at,{path:"/forgot-password",element:g.jsx(GL,{})})," ",g.jsx(at,{path:"/inventory",element:g.jsx(uS,{})})]})})})})})}xy(document.getElementById("root")).render(g.jsx(S.StrictMode,{children:g.jsx(KL,{})}));
