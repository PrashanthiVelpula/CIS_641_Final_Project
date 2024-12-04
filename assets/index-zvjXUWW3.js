import{r as g,a as ff,R as pf,g as mf,b as gc}from"./vendor-Bkz_NVCf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var _c={exports:{}},ni={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=g,_f=Symbol.for("react.element"),yf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,bf=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wf={key:!0,ref:!0,__self:!0,__source:!0};function yc(t,e,n){var s,i={},r=null,o=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)vf.call(e,s)&&!wf.hasOwnProperty(s)&&(i[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:_f,type:t,key:r,ref:o,props:i,_owner:bf.current}}ni.Fragment=yf;ni.jsx=yc;ni.jsxs=yc;_c.exports=ni;var h=_c.exports,vc,ua=ff;vc=ua.createRoot,ua.hydrateRoot;const If="_style1_x6zql_33",Ef="_fadeIn_x6zql_1",Cf="_style2_x6zql_283",Sf="_btn_style_x6zql_51",Tf="_backbutton_style_x6zql_321",xf="_input_group_x6zql_73",kf="_FieldError_x6zql_109",Af="_error_x6zql_121",Nf="_App_x6zql_15",Rf="_hidden_x6zql_559",Pf="_getStartedContainer_x6zql_569",Of="_getStartedButton_x6zql_589",Df="_darken_x6zql_635",B={style1:If,fadeIn:Ef,style2:Cf,btn_style:Sf,backbutton_style:Tf,input_group:xf,FieldError:kf,error:Af,App:Nf,hidden:Rf,getStartedContainer:Pf,getStartedButton:Of,darken:Df},bc=g.createContext(),Lf=({children:t})=>{const[e,n]=g.useState(!1),s=()=>{n(i=>!i)};return h.jsx(bc.Provider,{value:{isDarkTheme:e,toggleTheme:s},children:t})},He=()=>g.useContext(bc);/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mn(){return Mn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Mn.apply(this,arguments)}var nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nt||(nt={}));const da="popstate";function Mf(t){t===void 0&&(t={});function e(i,r){let{pathname:o="/",search:a="",hash:l=""}=Lt(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),er("",{pathname:o,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof r=="string"?r:wc(r))}function s(i,r){Vr(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(r)+")")}return jf(e,n,s,t)}function G(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ff(){return Math.random().toString(36).substr(2,8)}function ha(t,e){return{usr:t.state,key:t.key,idx:e}}function er(t,e,n,s){return n===void 0&&(n=null),Mn({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lt(e):e,{state:n,key:e&&e.key||s||Ff()})}function wc(t){let{pathname:e="/",search:n="",hash:s=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Lt(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substr(s),t=t.substr(0,s)),t&&(e.pathname=t)}return e}function jf(t,e,n,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:r=!1}=s,o=i.history,a=nt.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Mn({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=nt.Pop;let _=u(),I=_==null?null:_-c;c=_,l&&l({action:a,location:y.location,delta:I})}function f(_,I){a=nt.Push;let b=er(y.location,_,I);n&&n(b,_),c=u()+1;let w=ha(b,c),E=y.createHref(b);try{o.pushState(w,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}r&&l&&l({action:a,location:y.location,delta:1})}function p(_,I){a=nt.Replace;let b=er(y.location,_,I);n&&n(b,_),c=u();let w=ha(b,c),E=y.createHref(b);o.replaceState(w,"",E),r&&l&&l({action:a,location:y.location,delta:0})}function m(_){let I=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof _=="string"?_:wc(_);return b=b.replace(/ $/,"%20"),G(I,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,I)}let y={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(da,d),l=_,()=>{i.removeEventListener(da,d),l=null}},createHref(_){return e(i,_)},createURL:m,encodeLocation(_){let I=m(_);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:f,replace:p,go(_){return o.go(_)}};return y}var fa;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fa||(fa={}));function Uf(t,e,n){return n===void 0&&(n="/"),Wf(t,e,n,!1)}function Wf(t,e,n,s){let i=typeof e=="string"?Lt(e):e,r=Cc(i.pathname||"/",n);if(r==null)return null;let o=Ic(t);$f(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Xf(r);a=Qf(o[l],c,s)}return a}function Ic(t,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let i=(r,o,a)=>{let l={relativePath:a===void 0?r.path||"":a,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(s),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(s.length));let c=Et([s,l.relativePath]),u=n.concat(l);r.children&&r.children.length>0&&(G(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ic(r.children,e,u,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:Kf(c,r.index),routesMeta:u})};return t.forEach((r,o)=>{var a;if(r.path===""||!((a=r.path)!=null&&a.includes("?")))i(r,o);else for(let l of Ec(r.path))i(r,o,l)}),e}function Ec(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,i=n.endsWith("?"),r=n.replace(/\?$/,"");if(s.length===0)return i?[r,""]:[r];let o=Ec(s.join("/")),a=[];return a.push(...o.map(l=>l===""?r:[r,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function $f(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Yf(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Bf=/^:[\w-]+$/,Vf=3,zf=2,Hf=1,qf=10,Gf=-2,pa=t=>t==="*";function Kf(t,e){let n=t.split("/"),s=n.length;return n.some(pa)&&(s+=Gf),e&&(s+=zf),n.filter(i=>!pa(i)).reduce((i,r)=>i+(Bf.test(r)?Vf:r===""?Hf:qf),s)}function Yf(t,e){return t.length===e.length&&t.slice(0,-1).every((s,i)=>s===e[i])?t[t.length-1]-e[e.length-1]:0}function Qf(t,e,n){let{routesMeta:s}=t,i={},r="/",o=[];for(let a=0;a<s.length;++a){let l=s[a],c=a===s.length-1,u=r==="/"?e:e.slice(r.length)||"/",d=ma({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&n&&!s[s.length-1].route.index&&(d=ma({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Et([r,d.pathname]),pathnameBase:np(Et([r,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(r=Et([r,d.pathnameBase]))}return o}function ma(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=Jf(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let r=i[0],o=r.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:s.reduce((c,u,d)=>{let{paramName:f,isOptional:p}=u;if(f==="*"){let y=a[d]||"";o=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[d];return p&&!m?c[f]=void 0:c[f]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:o,pattern:t}}function Jf(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(s.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),s]}function Xf(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}function Zf(t,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:i=""}=typeof t=="string"?Lt(t):t;return{pathname:n?n.startsWith("/")?n:ep(n,e):e,search:sp(s),hash:ip(i)}}function ep(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ni(t,e,n,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sc(t,e){let n=tp(t);return e?n.map((s,i)=>i===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function Tc(t,e,n,s){s===void 0&&(s=!1);let i;typeof t=="string"?i=Lt(t):(i=Mn({},t),G(!i.pathname||!i.pathname.includes("?"),Ni("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Ni("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Ni("#","search","hash",i)));let r=t===""||i.pathname==="",o=r?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!s&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Zf(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(r||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Et=t=>t.join("/").replace(/\/\/+/g,"/"),np=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sp=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ip=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rp(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xc=["post","put","patch","delete"];new Set(xc);const op=["get",...xc];new Set(op);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fn(){return Fn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Fn.apply(this,arguments)}const zr=g.createContext(null),ap=g.createContext(null),Zn=g.createContext(null),si=g.createContext(null),mt=g.createContext({outlet:null,matches:[],isDataRoute:!1}),kc=g.createContext(null);function es(){return g.useContext(si)!=null}function Hr(){return es()||G(!1),g.useContext(si).location}function Ac(t){g.useContext(Zn).static||g.useLayoutEffect(t)}function ge(){let{isDataRoute:t}=g.useContext(mt);return t?bp():lp()}function lp(){es()||G(!1);let t=g.useContext(zr),{basename:e,future:n,navigator:s}=g.useContext(Zn),{matches:i}=g.useContext(mt),{pathname:r}=Hr(),o=JSON.stringify(Sc(i,n.v7_relativeSplatPath)),a=g.useRef(!1);return Ac(()=>{a.current=!0}),g.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){s.go(c);return}let d=Tc(c,JSON.parse(o),r,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Et([e,d.pathname])),(u.replace?s.replace:s.push)(d,u.state,u)},[e,s,o,r,t])}function ii(){let{matches:t}=g.useContext(mt),e=t[t.length-1];return e?e.params:{}}function cp(t,e){return up(t,e)}function up(t,e,n,s){es()||G(!1);let{navigator:i}=g.useContext(Zn),{matches:r}=g.useContext(mt),o=r[r.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Hr(),u;if(e){var d;let _=typeof e=="string"?Lt(e):e;l==="/"||(d=_.pathname)!=null&&d.startsWith(l)||G(!1),u=_}else u=c;let f=u.pathname||"/",p=f;if(l!=="/"){let _=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let m=Uf(t,{pathname:p}),y=mp(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Et([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Et([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),r,n,s);return e&&y?g.createElement(si.Provider,{value:{location:Fn({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nt.Pop}},y):y}function dp(){let t=vp(),e=rp(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},e),n?g.createElement("pre",{style:i},n):null,null)}const hp=g.createElement(dp,null);class fp extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?g.createElement(mt.Provider,{value:this.props.routeContext},g.createElement(kc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pp(t){let{routeContext:e,match:n,children:s}=t,i=g.useContext(zr);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(mt.Provider,{value:e},s)}function mp(t,e,n,s){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=s)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||G(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&s&&s.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:p}=n,m=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||m){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let p,m=!1,y=null,_=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||hp,l&&(c<0&&f===0?(m=!0,_=null):c===f&&(m=!0,_=d.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,f+1)),b=()=>{let w;return p?w=y:m?w=_:d.route.Component?w=g.createElement(d.route.Component,null):d.route.element?w=d.route.element:w=u,g.createElement(pp,{match:d,routeContext:{outlet:u,matches:I,isDataRoute:n!=null},children:w})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?g.createElement(fp,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:b(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):b()},null)}var Nc=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Nc||{}),xs=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xs||{});function gp(t){let e=g.useContext(zr);return e||G(!1),e}function _p(t){let e=g.useContext(ap);return e||G(!1),e}function yp(t){let e=g.useContext(mt);return e||G(!1),e}function Rc(t){let e=yp(),n=e.matches[e.matches.length-1];return n.route.id||G(!1),n.route.id}function vp(){var t;let e=g.useContext(kc),n=_p(xs.UseRouteError),s=Rc(xs.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[s]}function bp(){let{router:t}=gp(Nc.UseNavigateStable),e=Rc(xs.UseNavigateStable),n=g.useRef(!1);return Ac(()=>{n.current=!0}),g.useCallback(function(i,r){r===void 0&&(r={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fn({fromRouteId:e},r)))},[t,e])}const ga={};function wp(t,e){ga[e]||(ga[e]=!0,console.warn(e))}const _a=(t,e,n)=>wp(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Ip(t,e){t!=null&&t.v7_startTransition||_a("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&_a("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function ya(t){let{to:e,replace:n,state:s,relative:i}=t;es()||G(!1);let{future:r,static:o}=g.useContext(Zn),{matches:a}=g.useContext(mt),{pathname:l}=Hr(),c=ge(),u=Tc(e,Sc(a,r.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(u);return g.useEffect(()=>c(JSON.parse(d),{replace:n,state:s,relative:i}),[c,d,i,n,s]),null}function te(t){G(!1)}function Ep(t){let{basename:e="/",children:n=null,location:s,navigationType:i=nt.Pop,navigator:r,static:o=!1,future:a}=t;es()&&G(!1);let l=e.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:l,navigator:r,static:o,future:Fn({v7_relativeSplatPath:!1},a)}),[l,a,r,o]);typeof s=="string"&&(s=Lt(s));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:m="default"}=s,y=g.useMemo(()=>{let _=Cc(u,l);return _==null?null:{location:{pathname:_,search:d,hash:f,state:p,key:m},navigationType:i}},[l,u,d,f,p,m,i]);return y==null?null:g.createElement(Zn.Provider,{value:c},g.createElement(si.Provider,{children:n,value:y}))}function va(t){let{children:e,location:n}=t;return cp(tr(e),n)}new Promise(()=>{});function tr(t,e){e===void 0&&(e=[]);let n=[];return g.Children.forEach(t,(s,i)=>{if(!g.isValidElement(s))return;let r=[...e,i];if(s.type===g.Fragment){n.push.apply(n,tr(s.props.children,r));return}s.type!==te&&G(!1),!s.props.index||!s.props.children||G(!1);let o={id:s.props.id||r.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=tr(s.props.children,r)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Cp="6";try{window.__reactRouterVersion=Cp}catch{}const Sp="startTransition",ba=pf[Sp];function Tp(t){let{basename:e,children:n,future:s,window:i}=t,r=g.useRef();r.current==null&&(r.current=Mf({window:i,v5Compat:!0}));let o=r.current,[a,l]=g.useState({action:o.action,location:o.location}),{v7_startTransition:c}=s||{},u=g.useCallback(d=>{c&&ba?ba(()=>l(d)):l(d)},[l,c]);return g.useLayoutEffect(()=>o.listen(u),[o,u]),g.useEffect(()=>Ip(s),[s]),g.createElement(Ep,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:s})}var wa;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wa||(wa={}));var Ia;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ia||(Ia={}));var Pc={exports:{}},xp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kp=xp,Ap=kp;function Oc(){}function Dc(){}Dc.resetWarningCache=Oc;var Np=function(){function t(s,i,r,o,a,l){if(l!==Ap){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Dc,resetWarningCache:Oc};return n.PropTypes=n,n};Pc.exports=Np();var Rp=Pc.exports;const A=mf(Rp);var Ea={};/**
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
 */const Lc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(t,e){if(!t)throw cn(e)},cn=function(t){return new Error("Firebase Database ("+Lc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Mc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Op;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fc=function(t){const e=Mc(t);return qr.encodeByteArray(e,!0)},ks=function(t){return Fc(t).replace(/\./g,"")},As=function(t){try{return qr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dp(t){return jc(void 0,t)}function jc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lp(n)||(t[n]=jc(t[n],e[n]));return t}function Lp(t){return t!=="__proto__"}/**
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
 */function Mp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fp=()=>Mp().__FIREBASE_DEFAULTS__,jp=()=>{if(typeof process>"u"||typeof Ea>"u")return;const t=Ea.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Up=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&As(t[1]);return e&&JSON.parse(e)},Gr=()=>{try{return Fp()||jp()||Up()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uc=t=>{var e,n;return(n=(e=Gr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wp=t=>{const e=Uc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wc=()=>{var t;return(t=Gr())===null||t===void 0?void 0:t.config},$c=t=>{var e;return(e=Gr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ts{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $p(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ks(JSON.stringify(n)),ks(JSON.stringify(o)),""].join(".")}/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function Bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vp(){const t=ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zc(){return Lc.NODE_ADMIN===!0}function Hc(){try{return typeof indexedDB=="object"}catch{return!1}}function qc(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function zp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hp="FirebaseError";class Re extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Hp,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mt.prototype.create)}}class Mt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?qp(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Re(i,a,s)}}function qp(t,e){return t.replace(Gp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Gp=/\{\$([^}]+)}/g;/**
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
 */function jn(t){return JSON.parse(t)}function Y(t){return JSON.stringify(t)}/**
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
 */const Gc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=jn(As(r[0])||""),n=jn(As(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Kp=function(t){const e=Gc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Yp=function(t){const e=Gc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Un(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ca(r)&&Ca(o)){if(!Un(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ca(t){return t!==null&&typeof t=="object"}/**
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
 */function un(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Qp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Jp(t,e){const n=new Xp(t,e);return n.subscribe.bind(n)}class Xp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zp(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ri),i.error===void 0&&(i.error=Ri),i.complete===void 0&&(i.complete=Ri);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ri(){}function ri(t,e){return`${t} failed: ${e} argument `}/**
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
 */const em=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const tm=1e3,nm=2,sm=4*60*60*1e3,im=.5;function Sa(t,e=tm,n=nm){const s=e*Math.pow(n,t),i=Math.round(im*s*(Math.random()-.5)*2);return Math.min(sm,s+i)}/**
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
 */function ee(t){return t&&t._delegate?t._delegate:t}class be{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class rm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ts;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(am(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:om(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function om(t){return t===yt?void 0:t}function am(t){return t.instantiationMode==="EAGER"}/**
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
 */class lm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const cm={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},um=F.INFO,dm={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},hm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ai{constructor(e){this.name=e,this._logLevel=um,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const fm=(t,e)=>e.some(n=>t instanceof n);let Ta,xa;function pm(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return xa||(xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,sr=new WeakMap,Yc=new WeakMap,Pi=new WeakMap,Yr=new WeakMap;function gm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),Yr.set(e,t),e}function _m(t){if(sr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});sr.set(t,e)}let ir={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ym(t){ir=t(ir)}function vm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Oi(this),e,...n);return Yc.set(s,e.sort?e.sort():[e]),rt(s)}:mm().includes(t)?function(...e){return t.apply(Oi(this),e),rt(Kc.get(this))}:function(...e){return rt(t.apply(Oi(this),e))}}function bm(t){return typeof t=="function"?vm(t):(t instanceof IDBTransaction&&_m(t),fm(t,pm())?new Proxy(t,ir):t)}function rt(t){if(t instanceof IDBRequest)return gm(t);if(Pi.has(t))return Pi.get(t);const e=bm(t);return e!==t&&(Pi.set(t,e),Yr.set(e,t)),e}const Oi=t=>Yr.get(t);function Qc(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=rt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(rt(o.result),l.oldVersion,l.newVersion,rt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wm=["get","getKey","getAll","getAllKeys","count"],Im=["put","add","delete","clear"],Di=new Map;function ka(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Im.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Di.set(e,r),r}ym(t=>({...t,get:(e,n,s)=>ka(e,n)||t.get(e,n,s),has:(e,n)=>!!ka(e,n)||t.has(e,n)}));/**
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
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rr="@firebase/app",Aa="0.10.16";/**
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
 */const We=new ai("@firebase/app"),Sm="@firebase/app-compat",Tm="@firebase/analytics-compat",xm="@firebase/analytics",km="@firebase/app-check-compat",Am="@firebase/app-check",Nm="@firebase/auth",Rm="@firebase/auth-compat",Pm="@firebase/database",Om="@firebase/data-connect",Dm="@firebase/database-compat",Lm="@firebase/functions",Mm="@firebase/functions-compat",Fm="@firebase/installations",jm="@firebase/installations-compat",Um="@firebase/messaging",Wm="@firebase/messaging-compat",$m="@firebase/performance",Bm="@firebase/performance-compat",Vm="@firebase/remote-config",zm="@firebase/remote-config-compat",Hm="@firebase/storage",qm="@firebase/storage-compat",Gm="@firebase/firestore",Km="@firebase/vertexai",Ym="@firebase/firestore-compat",Qm="firebase",Jm="11.0.2";/**
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
 */const or="[DEFAULT]",Xm={[rr]:"fire-core",[Sm]:"fire-core-compat",[xm]:"fire-analytics",[Tm]:"fire-analytics-compat",[Am]:"fire-app-check",[km]:"fire-app-check-compat",[Nm]:"fire-auth",[Rm]:"fire-auth-compat",[Pm]:"fire-rtdb",[Om]:"fire-data-connect",[Dm]:"fire-rtdb-compat",[Lm]:"fire-fn",[Mm]:"fire-fn-compat",[Fm]:"fire-iid",[jm]:"fire-iid-compat",[Um]:"fire-fcm",[Wm]:"fire-fcm-compat",[$m]:"fire-perf",[Bm]:"fire-perf-compat",[Vm]:"fire-rc",[zm]:"fire-rc-compat",[Hm]:"fire-gcs",[qm]:"fire-gcs-compat",[Gm]:"fire-fst",[Ym]:"fire-fst-compat",[Km]:"fire-vertex","fire-js":"fire-js",[Qm]:"fire-js-all"};/**
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
 */const Rs=new Map,Zm=new Map,ar=new Map;function Na(t,e){try{t.container.addComponent(e)}catch(n){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ae(t){const e=t.name;if(ar.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;ar.set(e,t);for(const n of Rs.values())Na(n,t);for(const n of Zm.values())Na(n,t);return!0}function Ft(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ce(t){return t.settings!==void 0}/**
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
 */const eg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ot=new Mt("app","Firebase",eg);/**
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
 */class tg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=Jm;function Jc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:or,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ot.create("bad-app-name",{appName:String(i)});if(n||(n=Wc()),!n)throw ot.create("no-options");const r=Rs.get(i);if(r){if(Un(n,r.options)&&Un(s,r.config))return r;throw ot.create("duplicate-app",{appName:i})}const o=new lm(i);for(const l of ar.values())o.addComponent(l);const a=new tg(n,s,o);return Rs.set(i,a),a}function Qr(t=or){const e=Rs.get(t);if(!e&&t===or&&Wc())return Jc();if(!e)throw ot.create("no-app",{appName:t});return e}function pe(t,e,n){var s;let i=(s=Xm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}Ae(new be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ng="firebase-heartbeat-database",sg=1,Wn="firebase-heartbeat-store";let Li=null;function Xc(){return Li||(Li=Qc(ng,sg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wn)}catch(n){console.warn(n)}}}}).catch(t=>{throw ot.create("idb-open",{originalErrorMessage:t.message})})),Li}async function ig(t){try{const n=(await Xc()).transaction(Wn),s=await n.objectStore(Wn).get(Zc(t));return await n.done,s}catch(e){if(e instanceof Re)We.warn(e.message);else{const n=ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(n.message)}}}async function Ra(t,e){try{const s=(await Xc()).transaction(Wn,"readwrite");await s.objectStore(Wn).put(e,Zc(t)),await s.done}catch(n){if(n instanceof Re)We.warn(n.message);else{const s=ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});We.warn(s.message)}}}function Zc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rg=1024,og=30*24*60*60*1e3;class ag{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pa();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=og}),this._storage.overwrite(this._heartbeatsCache))}catch(s){We.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pa(),{heartbeatsToSend:s,unsentEntries:i}=lg(this._heartbeatsCache.heartbeats),r=ks(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return We.warn(n),""}}}function Pa(){return new Date().toISOString().substring(0,10)}function lg(t,e=rg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Oa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hc()?qc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ig(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Oa(t){return ks(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ug(t){Ae(new be("platform-logger",e=>new Em(e),"PRIVATE")),Ae(new be("heartbeat",e=>new ag(e),"PRIVATE")),pe(rr,Aa,t),pe(rr,Aa,"esm2017"),pe("fire-js","")}ug("");var dg="firebase",hg="11.0.2";/**
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
 */pe(dg,hg,"app");const eu="@firebase/installations",Jr="0.6.11";/**
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
 */const tu=1e4,nu=`w:${Jr}`,su="FIS_v2",fg="https://firebaseinstallations.googleapis.com/v1",pg=60*60*1e3,mg="installations",gg="Installations";/**
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
 */const _g={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tt=new Mt(mg,gg,_g);function iu(t){return t instanceof Re&&t.code.includes("request-failed")}/**
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
 */function ru({projectId:t}){return`${fg}/projects/${t}/installations`}function ou(t){return{token:t.token,requestStatus:2,expiresIn:vg(t.expiresIn),creationTime:Date.now()}}async function au(t,e){const s=(await e.json()).error;return Tt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function lu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function yg(t,{refreshToken:e}){const n=lu(t);return n.append("Authorization",bg(e)),n}async function cu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vg(t){return Number(t.replace("s","000"))}function bg(t){return`${su} ${t}`}/**
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
 */async function wg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ru(t),i=lu(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:su,appId:t.appId,sdkVersion:nu},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await cu(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ou(c.authToken)}}else throw await au("Create Installation",l)}/**
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
 */function uu(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ig(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Eg=/^[cdef][\w-]{21}$/,lr="";function Cg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Sg(t);return Eg.test(n)?n:lr}catch{return lr}}function Sg(t){return Ig(t).substr(0,22)}/**
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
 */function li(t){return`${t.appName}!${t.appId}`}/**
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
 */const du=new Map;function hu(t,e){const n=li(t);fu(n,e),Tg(n,e)}function fu(t,e){const n=du.get(t);if(n)for(const s of n)s(e)}function Tg(t,e){const n=xg();n&&n.postMessage({key:t,fid:e}),kg()}let wt=null;function xg(){return!wt&&"BroadcastChannel"in self&&(wt=new BroadcastChannel("[Firebase] FID Change"),wt.onmessage=t=>{fu(t.data.key,t.data.fid)}),wt}function kg(){du.size===0&&wt&&(wt.close(),wt=null)}/**
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
 */const Ag="firebase-installations-database",Ng=1,xt="firebase-installations-store";let Mi=null;function Xr(){return Mi||(Mi=Qc(Ag,Ng,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xt)}}})),Mi}async function Ps(t,e){const n=li(t),i=(await Xr()).transaction(xt,"readwrite"),r=i.objectStore(xt),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hu(t,e.fid),e}async function pu(t){const e=li(t),s=(await Xr()).transaction(xt,"readwrite");await s.objectStore(xt).delete(e),await s.done}async function ci(t,e){const n=li(t),i=(await Xr()).transaction(xt,"readwrite"),r=i.objectStore(xt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hu(t,a.fid),a}/**
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
 */async function Zr(t){let e;const n=await ci(t.appConfig,s=>{const i=Rg(s),r=Pg(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===lr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Rg(t){const e=t||{fid:Cg(),registrationStatus:0};return mu(e)}function Pg(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Tt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Og(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Dg(t)}:{installationEntry:e}}async function Og(t,e){try{const n=await wg(t,e);return Ps(t.appConfig,n)}catch(n){throw iu(n)&&n.customData.serverCode===409?await pu(t.appConfig):await Ps(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Dg(t){let e=await Da(t.appConfig);for(;e.registrationStatus===1;)await uu(100),e=await Da(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Zr(t);return s||n}return e}function Da(t){return ci(t,e=>{if(!e)throw Tt.create("installation-not-found");return mu(e)})}function mu(t){return Lg(t)?{fid:t.fid,registrationStatus:0}:t}function Lg(t){return t.registrationStatus===1&&t.registrationTime+tu<Date.now()}/**
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
 */async function Mg({appConfig:t,heartbeatServiceProvider:e},n){const s=Fg(t,n),i=yg(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:nu,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await cu(()=>fetch(s,a));if(l.ok){const c=await l.json();return ou(c)}else throw await au("Generate Auth Token",l)}function Fg(t,{fid:e}){return`${ru(t)}/${e}/authTokens:generate`}/**
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
 */async function eo(t,e=!1){let n;const s=await ci(t.appConfig,r=>{if(!gu(r))throw Tt.create("not-registered");const o=r.authToken;if(!e&&Wg(o))return r;if(o.requestStatus===1)return n=jg(t,e),r;{if(!navigator.onLine)throw Tt.create("app-offline");const a=Bg(r);return n=Ug(t,a),a}});return n?await n:s.authToken}async function jg(t,e){let n=await La(t.appConfig);for(;n.authToken.requestStatus===1;)await uu(100),n=await La(t.appConfig);const s=n.authToken;return s.requestStatus===0?eo(t,e):s}function La(t){return ci(t,e=>{if(!gu(e))throw Tt.create("not-registered");const n=e.authToken;return Vg(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ug(t,e){try{const n=await Mg(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ps(t.appConfig,s),n}catch(n){if(iu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ps(t.appConfig,s)}throw n}}function gu(t){return t!==void 0&&t.registrationStatus===2}function Wg(t){return t.requestStatus===2&&!$g(t)}function $g(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pg}function Bg(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Vg(t){return t.requestStatus===1&&t.requestTime+tu<Date.now()}/**
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
 */async function zg(t){const e=t,{installationEntry:n,registrationPromise:s}=await Zr(e);return s?s.catch(console.error):eo(e).catch(console.error),n.fid}/**
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
 */async function Hg(t,e=!1){const n=t;return await qg(n),(await eo(n,e)).token}async function qg(t){const{registrationPromise:e}=await Zr(t);e&&await e}/**
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
 */function Gg(t){if(!t||!t.options)throw Fi("App Configuration");if(!t.name)throw Fi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fi(t){return Tt.create("missing-app-config-values",{valueName:t})}/**
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
 */const _u="installations",Kg="installations-internal",Yg=t=>{const e=t.getProvider("app").getImmediate(),n=Gg(e),s=Ft(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Qg=t=>{const e=t.getProvider("app").getImmediate(),n=Ft(e,_u).getImmediate();return{getId:()=>zg(n),getToken:i=>Hg(n,i)}};function Jg(){Ae(new be(_u,Yg,"PUBLIC")),Ae(new be(Kg,Qg,"PRIVATE"))}Jg();pe(eu,Jr);pe(eu,Jr,"esm2017");/**
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
 */const Os="analytics",Xg="firebase_id",Zg="origin",e_=60*1e3,t_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",to="https://www.googletagmanager.com/gtag/js";/**
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
 */const ae=new ai("@firebase/analytics");/**
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
 */const n_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new Mt("analytics","Analytics",n_);/**
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
 */function s_(t){if(!t.startsWith(to)){const e=ce.create("invalid-gtag-resource",{gtagURL:t});return ae.warn(e.message),""}return t}function yu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function i_(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function r_(t,e){const n=i_("firebase-js-sdk-policy",{createScriptURL:s_}),s=document.createElement("script"),i=`${to}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function o_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function a_(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await yu(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){ae.error(a)}t("config",i,r)}async function l_(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await yu(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){ae.error(r)}}function c_(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await l_(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await a_(t,e,n,s,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){ae.error(a)}}return i}function u_(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=c_(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function d_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(to)&&n.src.includes(t))return n;return null}/**
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
 */const h_=30,f_=1e3;class p_{constructor(e={},n=f_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vu=new p_;function m_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function g_(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:m_(s)},r=t_.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function __(t,e=vu,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw ce.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ce.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new b_;return setTimeout(async()=>{a.abort()},e_),bu({appId:s,apiKey:i,measurementId:r},o,a,e)}async function bu(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=vu){var r;const{appId:o,measurementId:a}=t;try{await y_(s,e)}catch(l){if(a)return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await g_(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!v_(c)){if(i.deleteThrottleMetadata(o),a)return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Sa(n,i.intervalMillis,h_):Sa(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),ae.debug(`Calling attemptFetch again in ${u} millis`),bu(t,d,s,i)}}function y_(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function v_(t){if(!(t instanceof Re)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class b_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function w_(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function I_(){if(Hc())try{await qc()}catch(t){return ae.warn(ce.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ae.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function E_(t,e,n,s,i,r,o){var a;const l=__(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&ae.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>ae.error(p)),e.push(l);const c=I_().then(p=>{if(p)return s.getId()}),[u,d]=await Promise.all([l,c]);d_(r)||r_(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Zg]="firebase",f.update=!0,d!=null&&(f[Xg]=d),i("config",u.measurementId,f),u.measurementId}/**
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
 */class C_{constructor(e){this.app=e}_delete(){return delete xn[this.app.options.appId],Promise.resolve()}}let xn={},Ma=[];const Fa={};let ji="dataLayer",S_="gtag",ja,wu,Ua=!1;function T_(){const t=[];if(Bc()&&t.push("This is a browser extension environment."),zp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:e});ae.warn(n.message)}}function x_(t,e,n){T_();const s=t.options.appId;if(!s)throw ce.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ce.create("no-api-key");if(xn[s]!=null)throw ce.create("already-exists",{id:s});if(!Ua){o_(ji);const{wrappedGtag:r,gtagCore:o}=u_(xn,Ma,Fa,ji,S_);wu=r,ja=o,Ua=!0}return xn[s]=E_(t,Ma,Fa,e,ja,ji,n),new C_(t)}function k_(t=Qr()){t=ee(t);const e=Ft(t,Os);return e.isInitialized()?e.getImmediate():A_(t)}function A_(t,e={}){const n=Ft(t,Os);if(n.isInitialized()){const i=n.getImmediate();if(Un(e,n.getOptions()))return i;throw ce.create("already-initialized")}return n.initialize({options:e})}function N_(t,e,n,s){t=ee(t),w_(wu,xn[t.app.options.appId],e,n,s).catch(i=>ae.error(i))}const Wa="@firebase/analytics",$a="0.10.10";function R_(){Ae(new be(Os,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return x_(s,i,n)},"PUBLIC")),Ae(new be("analytics-internal",t,"PRIVATE")),pe(Wa,$a),pe(Wa,$a,"esm2017");function t(e){try{const n=e.getProvider(Os).getImmediate();return{logEvent:(s,i,r)=>N_(n,s,i,r)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}R_();function no(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P_=Iu,Eu=new Mt("auth","Firebase",Iu());/**
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
 */const Ds=new ai("@firebase/auth");function O_(t,...e){Ds.logLevel<=F.WARN&&Ds.warn(`Auth (${dn}): ${t}`,...e)}function bs(t,...e){Ds.logLevel<=F.ERROR&&Ds.error(`Auth (${dn}): ${t}`,...e)}/**
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
 */function we(t,...e){throw so(t,...e)}function xe(t,...e){return so(t,...e)}function Cu(t,e,n){const s=Object.assign(Object.assign({},P_()),{[e]:n});return new Mt("auth","Firebase",s).create(e,{appName:t.name})}function je(t){return Cu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function so(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Eu.create(t,...e)}function x(t,e,...n){if(!t)throw so(e,...n)}function De(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bs(e),new Error(e)}function $e(t,e){t||De(e)}/**
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
 */function cr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function D_(){return Ba()==="http:"||Ba()==="https:"}function Ba(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function L_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D_()||Bc()||"connection"in navigator)?navigator.onLine:!0}function M_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,$e(n>e,"Short delay should be less than long delay!"),this.isMobile=Kr()||Vc()}get(){return L_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function io(t,e){$e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Su{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const F_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const j_=new ns(3e4,6e4);function qe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ge(t,e,n,s,i={}){return Tu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=un(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Bp()||(c.referrerPolicy="no-referrer"),Su.fetch()(xu(t,t.config.apiHost,n,a),c)})}async function Tu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},F_),e);try{const i=new W_(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ms(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ms(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ms(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Cu(t,u,c);we(t,u)}}catch(i){if(i instanceof Re)throw i;we(t,"network-request-failed",{message:String(i)})}}async function ss(t,e,n,s,i={}){const r=await Ge(t,e,n,s,i);return"mfaPendingCredential"in r&&we(t,"multi-factor-auth-required",{_serverResponse:r}),r}function xu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?io(t.config,i):`${t.config.apiScheme}://${i}`}function U_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xe(this.auth,"network-request-failed")),j_.get())})}}function ms(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xe(t,e,s);return i.customData._tokenResponse=n,i}function Va(t){return t!==void 0&&t.enterprise!==void 0}class $_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return U_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function B_(t,e){return Ge(t,"GET","/v2/recaptchaConfig",qe(t,e))}/**
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
 */async function V_(t,e){return Ge(t,"POST","/v1/accounts:delete",e)}async function ku(t,e){return Ge(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function z_(t,e=!1){const n=ee(t),s=await n.getIdToken(e),i=ro(s);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:kn(Ui(i.auth_time)),issuedAtTime:kn(Ui(i.iat)),expirationTime:kn(Ui(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ui(t){return Number(t)*1e3}function ro(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=As(n);return i?JSON.parse(i):(bs("Failed to decode base64 JWT payload"),null)}catch(i){return bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function za(t){const e=ro(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $n(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Re&&H_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function H_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class q_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ur{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(t){var e;const n=t.auth,s=await t.getIdToken(),i=await $n(t,ku(n,{idToken:s}));x(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Au(r.providerUserInfo):[],a=K_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ur(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function G_(t){const e=ee(t);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K_(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Au(t){return t.map(e=>{var{providerId:n}=e,s=no(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Y_(t,e){const n=await Tu(t,{},async()=>{const s=un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=xu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Su.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Q_(t,e){return Ge(t,"POST","/v2/accounts:revokeToken",qe(t,e))}/**
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
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):za(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=za(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Y_(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new qt;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(x(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
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
 */function Qe(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Le{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=no(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ur(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await $n(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return z_(this,e)}reload(){return G_(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ls(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(je(this.auth));const e=await this.getIdToken();return await $n(this,V_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:E,isAnonymous:k,providerData:S,stsTokenManager:M}=n;x(w&&M,e,"internal-error");const z=qt.fromJSON(this.name,M);x(typeof w=="string",e,"internal-error"),Qe(d,e.name),Qe(f,e.name),x(typeof E=="boolean",e,"internal-error"),x(typeof k=="boolean",e,"internal-error"),Qe(p,e.name),Qe(m,e.name),Qe(y,e.name),Qe(_,e.name),Qe(I,e.name),Qe(b,e.name);const Oe=new Le({uid:w,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:k,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:z,createdAt:I,lastLoginAt:b});return S&&Array.isArray(S)&&(Oe.providerData=S.map(Wt=>Object.assign({},Wt))),_&&(Oe._redirectEventId=_),Oe}static async _fromIdTokenResponse(e,n,s=!1){const i=new qt;i.updateFromServerResponse(n);const r=new Le({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ls(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];x(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Au(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new qt;a.updateFromIdToken(s);const l=new Le({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ur(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ha=new Map;function Me(t){$e(t instanceof Function,"Expected a class definition");let e=Ha.get(t);return e?($e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ha.set(t,e),e)}/**
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
 */class Nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nu.type="NONE";const qa=Nu;/**
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
 */function ws(t,e,n){return`firebase:${t}:${e}:${n}`}class Gt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ws(this.userKey,i.apiKey,r),this.fullPersistenceKey=ws("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Gt(Me(qa),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Me(qa);const o=ws(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Le._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Gt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Gt(r,e,s))}}/**
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
 */function Ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Du(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ru(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mu(e))return"Blackberry";if(Fu(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||Ou(e))&&!e.includes("edge/"))return"Chrome";if(Lu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ru(t=ie()){return/firefox\//i.test(t)}function Pu(t=ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ou(t=ie()){return/crios\//i.test(t)}function Du(t=ie()){return/iemobile/i.test(t)}function Lu(t=ie()){return/android/i.test(t)}function Mu(t=ie()){return/blackberry/i.test(t)}function Fu(t=ie()){return/webos/i.test(t)}function oo(t=ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function J_(t=ie()){var e;return oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X_(){return Vp()&&document.documentMode===10}function ju(t=ie()){return oo(t)||Lu(t)||Fu(t)||Mu(t)||/windows phone/i.test(t)||Du(t)}/**
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
 */function Uu(t,e=[]){let n;switch(t){case"Browser":n=Ga(ie());break;case"Worker":n=`${Ga(ie())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dn}/${s}`}/**
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
 */class Z_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ey(t,e={}){return Ge(t,"GET","/v2/passwordPolicy",qe(t,e))}/**
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
 */const ty=6;class ny{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ty,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class sy{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ka(this),this.idTokenSubscription=new Ka(this),this.beforeStateQueue=new Z_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Me(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ku(this,{idToken:e}),s=await Le._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ce(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ls(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=M_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(je(this));const n=e?ee(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ey(this),n=new ny(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Q_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Me(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[Me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gt(t){return ee(t)}class Ka{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jp(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iy(t){ui=t}function Wu(t){return ui.loadJS(t)}function ry(){return ui.recaptchaEnterpriseScript}function oy(){return ui.gapiScript}function ay(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ly{constructor(){this.enterprise=new cy}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cy{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uy="recaptcha-enterprise",$u="NO_RECAPTCHA";class dy{constructor(e){this.type=uy,this.auth=gt(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{B_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new $_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Va(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o($u)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ly().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Va(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ry();l.length!==0&&(l+=a),Wu(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ya(t,e,n,s=!1,i=!1){const r=new dy(t);let o;if(i)o=$u;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ms(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ya(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ya(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function hy(t,e){const n=Ft(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Un(r,e??{}))return i;we(i,"already-initialized")}return n.initialize({options:e})}function fy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Me);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function py(t,e,n){const s=gt(t);x(s._canInitEmulator,s,"emulator-config-failed"),x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Bu(e),{host:o,port:a}=my(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),gy()}function Bu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function my(t){const e=Bu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Qa(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Qa(o)}}}function Qa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ao{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,n){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}async function _y(t,e){return Ge(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yy(t,e){return ss(t,"POST","/v1/accounts:signInWithPassword",qe(t,e))}async function vy(t,e){return Ge(t,"POST","/v1/accounts:sendOobCode",qe(t,e))}async function by(t,e){return vy(t,e)}/**
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
 */async function wy(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",qe(t,e))}async function Iy(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",qe(t,e))}/**
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
 */class Bn extends ao{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Bn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,n,"signInWithPassword",yy);case"emailLink":return wy(e,{email:this._email,oobCode:this._password});default:we(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ms(e,s,"signUpPassword",_y);case"emailLink":return Iy(e,{idToken:n,email:this._email,oobCode:this._password});default:we(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kt(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",qe(t,e))}/**
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
 */const Ey="http://localhost";class kt extends ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):we("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=no(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new kt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Kt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:Ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=un(n)}return e}}/**
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
 */function Cy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sy(t){const e=En(Cn(t)).link,n=e?En(Cn(e)).deep_link_id:null,s=En(Cn(t)).deep_link_id;return(s?En(Cn(s)).link:null)||s||n||e||t}class lo{constructor(e){var n,s,i,r,o,a;const l=En(Cn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=Cy((i=l.mode)!==null&&i!==void 0?i:null);x(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sy(e);try{return new lo(n)}catch{return null}}}/**
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
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=lo.parseLink(n);return x(s,"argument-error"),Bn._fromEmailAndCode(e,s.code,s.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class is extends Vu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xe extends is{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ze.credential(n,s)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class et extends is{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch{return null}}}et.GITHUB_SIGN_IN_METHOD="github.com";et.PROVIDER_ID="github.com";/**
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
 */class tt extends is{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return tt.credential(n,s)}catch{return null}}}tt.TWITTER_SIGN_IN_METHOD="twitter.com";tt.PROVIDER_ID="twitter.com";/**
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
 */async function Ty(t,e){return ss(t,"POST","/v1/accounts:signUp",qe(t,e))}/**
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
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Le._fromIdTokenResponse(e,s,i),o=Ja(s);return new At({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ja(s);return new At({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ja(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fs extends Re{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Fs(e,n,s,i)}}function zu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(t,r,e,s):r})}async function xy(t,e,n=!1){const s=await $n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",s)}/**
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
 */async function ky(t,e,n=!1){const{auth:s}=t;if(Ce(s.app))return Promise.reject(je(s));const i="reauthenticate";try{const r=await $n(t,zu(s,i,e,t),n);x(r.idToken,s,"internal-error");const o=ro(r.idToken);x(o,s,"internal-error");const{sub:a}=o;return x(t.uid===a,s,"user-mismatch"),At._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&we(s,"user-mismatch"),r}}/**
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
 */async function Hu(t,e,n=!1){if(Ce(t.app))return Promise.reject(je(t));const s="signIn",i=await zu(t,s,e),r=await At._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Ay(t,e){return Hu(gt(t),e)}/**
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
 */async function qu(t){const e=gt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ny(t,e,n){const s=gt(t);await Ms(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",by)}async function Ry(t,e,n){if(Ce(t.app))return Promise.reject(je(t));const s=gt(t),o=await Ms(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ty).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qu(t),l}),a=await At._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Py(t,e,n){return Ce(t.app)?Promise.reject(je(t)):Ay(ee(t),hn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&qu(t),s})}function Oy(t,e,n,s){return ee(t).onIdTokenChanged(e,n,s)}function Dy(t,e,n){return ee(t).beforeAuthStateChanged(e,n)}function Ly(t){return ee(t).signOut()}const js="__sak";/**
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
 */class Gu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(js,"1"),this.storage.removeItem(js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const My=1e3,Fy=10;class Ku extends Gu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ju(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);X_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fy):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},My)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ku.type="LOCAL";const jy=Ku;/**
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
 */class Yu extends Gu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yu.type="SESSION";const Qu=Yu;/**
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
 */function Uy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new di(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Uy(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}di.receivers=[];/**
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
 */function co(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Wy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=co("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ke(){return window}function $y(t){ke().location.href=t}/**
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
 */function Ju(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function By(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zy(){return Ju()?self:null}/**
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
 */const Xu="firebaseLocalStorageDb",Hy=1,Us="firebaseLocalStorage",Zu="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hi(t,e){return t.transaction([Us],e?"readwrite":"readonly").objectStore(Us)}function qy(){const t=indexedDB.deleteDatabase(Xu);return new rs(t).toPromise()}function dr(){const t=indexedDB.open(Xu,Hy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Us,{keyPath:Zu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Us)?e(s):(s.close(),await qy(),e(await dr()))})})}async function Xa(t,e,n){const s=hi(t,!0).put({[Zu]:e,value:n});return new rs(s).toPromise()}async function Gy(t,e){const n=hi(t,!1).get(e),s=await new rs(n).toPromise();return s===void 0?null:s.value}function Za(t,e){const n=hi(t,!0).delete(e);return new rs(n).toPromise()}const Ky=800,Yy=3;class ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Yy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=di._getInstance(zy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await By(),!this.activeServiceWorker)return;this.sender=new Wy(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dr();return await Xa(e,js,"1"),await Za(e,js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xa(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Gy(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Za(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=hi(i,!1).getAll();return new rs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ed.type="LOCAL";const Qy=ed;new ns(3e4,6e4);/**
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
 */function Jy(t,e){return e?Me(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uo extends ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xy(t){return Hu(t.auth,new uo(t),t.bypassAuthState)}function Zy(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),ky(n,new uo(t),t.bypassAuthState)}async function ev(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),xy(n,new uo(t),t.bypassAuthState)}/**
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
 */class td{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xy;case"linkViaPopup":case"linkViaRedirect":return ev;case"reauthViaPopup":case"reauthViaRedirect":return Zy;default:we(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tv=new ns(2e3,1e4);class Bt extends td{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}Bt.currentPopupAction=null;/**
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
 */const nv="pendingRedirect",Is=new Map;class sv extends td{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const s=await iv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iv(t,e){const n=av(e),s=ov(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function rv(t,e){Is.set(t._key(),e)}function ov(t){return Me(t._redirectPersistence)}function av(t){return ws(nv,t.config.apiKey,t.name)}async function lv(t,e,n=!1){if(Ce(t.app))return Promise.reject(je(t));const s=gt(t),i=Jy(s,e),o=await new sv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const cv=10*60*1e3;class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!nd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cv&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(e))}saveEventToCache(e){this.cachedEventUids.add(el(e)),this.lastProcessedEventTime=Date.now()}}function el(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nd(t);default:return!1}}/**
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
 */async function hv(t,e={}){return Ge(t,"GET","/v1/projects",e)}/**
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
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pv=/^https?/;async function mv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hv(t);for(const n of e)try{if(gv(n))return}catch{}we(t,"unauthorized-domain")}function gv(t){const e=cr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!pv.test(n))return!1;if(fv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const _v=new ns(3e4,6e4);function tl(){const t=ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yv(t){return new Promise((e,n)=>{var s,i,r;function o(){tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tl(),n(xe(t,"network-request-failed"))},timeout:_v.get()})}if(!((i=(s=ke().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ke().gapi)===null||r===void 0)&&r.load)o();else{const a=ay("iframefcb");return ke()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},Wu(`${oy()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Es=null,e})}let Es=null;function vv(t){return Es=Es||yv(t),Es}/**
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
 */const bv=new ns(5e3,15e3),wv="__/auth/iframe",Iv="emulator/auth/iframe",Ev={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sv(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?io(e,Iv):`https://${t.config.authDomain}/${wv}`,s={apiKey:e.apiKey,appName:t.name,v:dn},i=Cv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${un(s).slice(1)}`}async function Tv(t){const e=await vv(t),n=ke().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Sv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ev,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=ke().setTimeout(()=>{r(o)},bv.get());function l(){ke().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kv=500,Av=600,Nv="_blank",Rv="http://localhost";class nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pv(t,e,n,s=kv,i=Av){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ie().toLowerCase();n&&(a=Ou(c)?Nv:n),Ru(c)&&(e=e||Rv,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(J_(c)&&a!=="_self")return Ov(e||"",a),new nl(null);const d=window.open(e||"",a,u);x(d,t,"popup-blocked");try{d.focus()}catch{}return new nl(d)}function Ov(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Dv="__/auth/handler",Lv="emulator/auth/handler",Mv=encodeURIComponent("fac");async function sl(t,e,n,s,i,r){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:dn,eventId:i};if(e instanceof Vu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof is){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Mv}=${encodeURIComponent(l)}`:"";return`${Fv(t)}?${un(a).slice(1)}${c}`}function Fv({config:t}){return t.emulator?io(t,Lv):`https://${t.authDomain}/${Dv}`}/**
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
 */const Wi="webStorageSupport";class jv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qu,this._completeRedirectFn=lv,this._overrideRedirectResult=rv}async _openPopup(e,n,s,i){var r;$e((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await sl(e,n,s,cr(),i);return Pv(e,o,co())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await sl(e,n,s,cr(),i);return $y(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):($e(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Tv(e),s=new uv(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wi,{type:Wi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Wi];o!==void 0&&n(!!o),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ju()||Pu()||oo()}}const Uv=jv;var il="@firebase/auth",rl="1.8.1";/**
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
 */class Wv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $v(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bv(t){Ae(new be("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uu(t)},c=new sy(s,i,r,l);return fy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ae(new be("auth-internal",e=>{const n=gt(e.getProvider("auth").getImmediate());return(s=>new Wv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(il,rl,$v(t)),pe(il,rl,"esm2017")}/**
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
 */const Vv=5*60,zv=$c("authIdTokenMaxAge")||Vv;let ol=null;const Hv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zv)return;const i=n==null?void 0:n.token;ol!==i&&(ol=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sd(t=Qr()){const e=Ft(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hy(t,{popupRedirectResolver:Uv,persistence:[Qy,jy,Qu]}),s=$c("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Hv(r.toString());Dy(n,o,()=>o(n.currentUser)),Oy(n,a=>o(a))}}const i=Uc("auth");return i&&py(n,`http://${i}`),n}function qv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iy({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xe("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",qv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bv("Browser");var al={};const ll="@firebase/database",cl="1.0.10";/**
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
 */let id="";function Gv(t){id=t}/**
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
 */class Kv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Y(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Yv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Kv(e)}}catch{}return new Yv},It=rd("localStorage"),Qv=rd("sessionStorage");/**
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
 */const Yt=new ai("@firebase/database"),Jv=function(){let t=1;return function(){return t++}}(),od=function(t){const e=em(t),n=new Qp;n.update(e);const s=n.digest();return qr.encodeByteArray(s)},os=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=os.apply(null,s):typeof s=="object"?e+=Y(s):e+=s,e+=" "}return e};let An=null,ul=!0;const Xv=function(t,e){v(!e,"Can't turn on custom loggers persistently."),Yt.logLevel=F.VERBOSE,An=Yt.log.bind(Yt)},X=function(...t){if(ul===!0&&(ul=!1,An===null&&Qv.get("logging_enabled")===!0&&Xv()),An){const e=os.apply(null,t);An(e)}},as=function(t){return function(...e){X(t,...e)}},hr=function(...t){const e="FIREBASE INTERNAL ERROR: "+os(...t);Yt.error(e)},Be=function(...t){const e=`FIREBASE FATAL ERROR: ${os(...t)}`;throw Yt.error(e),new Error(e)},se=function(...t){const e="FIREBASE WARNING: "+os(...t);Yt.warn(e)},Zv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ho=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},eb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zt="[MIN_NAME]",Nt="[MAX_NAME]",jt=function(t,e){if(t===e)return 0;if(t===Zt||e===Nt)return-1;if(e===Zt||t===Nt)return 1;{const n=dl(t),s=dl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},tb=function(t,e){return t===e?0:t<e?-1:1},_n=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Y(e))},fo=function(t){if(typeof t!="object"||t===null)return Y(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Y(e[s]),n+=":",n+=fo(t[e[s]]);return n+="}",n},ad=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Z(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ld=function(t){v(!ho(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},nb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ib(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const rb=new RegExp("^-?(0*)\\d{1,10}$"),ob=-2147483648,ab=2147483647,dl=function(t){if(rb.test(t)){const e=Number(t);if(e>=ob&&e<=ab)return e}return null},fn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw se("Exception was thrown by user callback.",n),e},Math.floor(0))}},lb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ub{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(X("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',se(e)}}class Cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cs.OWNER="owner";/**
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
 */const po="5",cd="v",ud="s",dd="r",hd="f",fd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pd="ls",md="p",fr="ac",gd="websocket",_d="long_polling";/**
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
 */class yd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=It.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&It.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function db(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vd(t,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");let s;if(e===gd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_d)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);db(t)&&(n.ns=t.namespace);const i=[];return Z(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class hb{constructor(){this.counters_={}}incrementCounter(e,n=1){Pe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Dp(this.counters_)}}/**
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
 */const $i={},Bi={};function mo(t){const e=t.toString();return $i[e]||($i[e]=new hb),$i[e]}function fb(t,e){const n=t.toString();return Bi[n]||(Bi[n]=e()),Bi[n]}/**
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
 */class pb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hl="start",mb="close",gb="pLPCommand",_b="pRTLPCB",bd="id",wd="pw",Id="ser",yb="cb",vb="seg",bb="ts",wb="d",Ib="dframe",Ed=1870,Cd=30,Eb=Ed-Cd,Cb=25e3,Sb=3e4;class Vt{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=as(e),this.stats_=mo(n),this.urlFn=l=>(this.appCheckToken&&(l[fr]=this.appCheckToken),vd(n,_d,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sb)),eb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new go((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hl)this.id=a,this.password=l;else if(o===mb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[hl]="t",s[Id]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cd]=po,this.transportSessionId&&(s[ud]=this.transportSessionId),this.lastSessionId&&(s[pd]=this.lastSessionId),this.applicationId&&(s[md]=this.applicationId),this.appCheckToken&&(s[fr]=this.appCheckToken),typeof location<"u"&&location.hostname&&fd.test(location.hostname)&&(s[dd]=hd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vt.forceAllow_=!0}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){return Vt.forceAllow_?!0:!Vt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nb()&&!sb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Y(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Fc(n),i=ad(s,Eb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ib]="t",s[bd]=e,s[wd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Y(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class go{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jv(),window[gb+this.uniqueCallbackIdentifier]=e,window[_b+this.uniqueCallbackIdentifier]=n,this.myIFrame=go.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){X("frame writing exception"),a.stack&&X(a.stack),X(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||X("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bd]=this.myID,e[wd]=this.myPW,e[Id]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cd+s.length<=Ed;){const o=this.pendingSegs.shift();s=s+"&"+vb+i+"="+o.seg+"&"+bb+i+"="+o.ts+"&"+wb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Cb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{X("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Tb=16384,xb=45e3;let Ws=null;typeof MozWebSocket<"u"?Ws=MozWebSocket:typeof WebSocket<"u"&&(Ws=WebSocket);class _e{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=as(this.connId),this.stats_=mo(n),this.connURL=_e.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[cd]=po,typeof location<"u"&&location.hostname&&fd.test(location.hostname)&&(o[dd]=hd),n&&(o[ud]=n),s&&(o[pd]=s),i&&(o[fr]=i),r&&(o[md]=r),vd(e,gd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,It.set("previous_websocket_failure",!0);try{let s;zc(),this.mySock=new Ws(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ws!==null&&!_e.forceDisallow_}static previouslyFailed(){return It.isInMemoryStorage||It.get("previous_websocket_failure")===!0}markConnectionHealthy(){It.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=jn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Y(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ad(n,Tb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_e.responsesRequiredToBeHealthy=2;_e.healthyTimeout=3e4;/**
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
 */class Vn{static get ALL_TRANSPORTS(){return[Vt,_e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_e&&_e.isAvailable();let s=n&&!_e.previouslyFailed();if(e.webSocketOnly&&(n||se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_e];else{const i=this.transports_=[];for(const r of Vn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vn.globalTransportInitialized_=!1;/**
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
 */const kb=6e4,Ab=5e3,Nb=10*1024,Rb=100*1024,Vi="t",fl="d",Pb="s",pl="r",Ob="e",ml="o",gl="a",_l="n",yl="p",Db="h";class Lb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=as("c:"+this.id+":"),this.transportManager_=new Vn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Nn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Nb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vi in e){const n=e[Vi];n===gl?this.upgradeIfSecondaryHealthy_():n===pl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ml&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_n("t",e),s=_n("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_l,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_n("t",e),s=_n("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_n(Vi,e);if(fl in e){const s=e[fl];if(n===Db){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_l){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Pb?this.onConnectionShutdown_(s):n===pl?this.onReset_(s):n===Ob?hr("Server Error: "+s):n===ml?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),po!==s&&se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Nn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ab))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(It.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sd{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Td{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $s extends Td{static getInstance(){return new $s}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vl=32,bl=768;class j{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function L(){return new j("")}function N(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ct(t){return t.pieces_.length-t.pieceNum_}function W(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new j(t.pieces_,e)}function _o(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Mb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new j(e,0)}function H(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof j)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new j(n,0)}function P(t){return t.pieceNum_>=t.pieces_.length}function ne(t,e){const n=N(t),s=N(e);if(n===null)return e;if(n===s)return ne(W(t),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fb(t,e){const n=zn(t,0),s=zn(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=jt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function yo(t,e){if(ct(t)!==ct(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function fe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ct(t)>ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jb{constructor(e,n){this.errorPrefix_=n,this.parts_=zn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=oi(this.parts_[s]);kd(this)}}function Ub(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oi(e),kd(t)}function Wb(t){const e=t.parts_.pop();t.byteLength_-=oi(e),t.parts_.length>0&&(t.byteLength_-=1)}function kd(t){if(t.byteLength_>bl)throw new Error(t.errorPrefix_+"has a key path longer than "+bl+" bytes ("+t.byteLength_+").");if(t.parts_.length>vl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vl+") or object contains a cycle "+vt(t))}function vt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vo extends Td{static getInstance(){return new vo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yn=1e3,$b=60*5*1e3,wl=30*1e3,Bb=1.3,Vb=3e4,zb="server_kill",Il=3;class Ue extends Sd{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ue.nextPersistentConnectionId_++,this.log_=as("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yn,this.maxReconnectDelay_=$b,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$s.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Y(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ts,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ue.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pe(e,"w")){const s=Xt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Y(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hr("Unrecognized action received from server: "+Y(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Vb&&(this.reconnectDelay_=yn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ue.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?X("getToken() completed but was canceled"):(X("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Lb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{se(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zb)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&se(d),l())}}}interrupt(e){X("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){X("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nr(this.interruptReasons_)&&(this.reconnectDelay_=yn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>fo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new j(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){X("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Il&&(this.reconnectDelay_=wl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){X("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Il&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+id.replace(/\./g,"-")]=1,Kr()?e["framework.cordova"]=1:Vc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$s.getInstance().currentlyOnline();return nr(this.interruptReasons_)&&e}}Ue.nextPersistentConnectionId_=0;Ue.nextConnectionId_=0;/**
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
 */class R{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new R(e,n)}}/**
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
 */class fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new R(Zt,e),i=new R(Zt,n);return this.compare(s,i)!==0}minPost(){return R.MIN}}/**
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
 */let gs;class Ad extends fi{static get __EMPTY_NODE(){return gs}static set __EMPTY_NODE(e){gs=e}compare(e,n){return jt(e.name,n.name)}isDefinedOn(e){throw cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return R.MIN}maxPost(){return new R(Nt,gs)}makePost(e,n){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,gs)}toString(){return".key"}}const Qt=new Ad;/**
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
 */class _s{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class J{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??J.RED,this.left=i??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,n,s,i,r){return new J(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}J.RED=!0;J.BLACK=!1;class Hb{copy(e,n,s,i,r){return this}insert(e,n,s){return new J(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,n=re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,J.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,J.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _s(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _s(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new Hb;/**
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
 */function qb(t,e){return jt(t.name,e.name)}function bo(t,e){return jt(t,e)}/**
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
 */let pr;function Gb(t){pr=t}const Nd=function(t){return typeof t=="number"?"number:"+ld(t):"string:"+t},Rd=function(t){if(t.isLeafNode()){const e=t.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pe(e,".sv"),"Priority must be a string or number.")}else v(t===pr||t.isEmpty(),"priority of unexpected type.");v(t===pr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let El;class Q{static set __childrenNodeConstructor(e){El=e}static get __childrenNodeConstructor(){return El}constructor(e,n=Q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rd(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return P(e)?this:N(e)===".priority"?this.priorityNode_:Q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=N(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Q.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ld(this.value_):e+=this.value_,this.lazyHash_=od(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Q.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Q.VALUE_TYPE_ORDER.indexOf(n),r=Q.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+n),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Pd,Od;function Kb(t){Pd=t}function Yb(t){Od=t}class Qb extends fi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?jt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return R.MIN}maxPost(){return new R(Nt,new Q("[PRIORITY-POST]",Od))}makePost(e,n){const s=Pd(e);return new R(n,new Q("[PRIORITY-POST]",s))}toString(){return".priority"}}const q=new Qb;/**
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
 */const Jb=Math.log(2);class Xb{constructor(e){const n=r=>parseInt(Math.log(r)/Jb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bs=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new J(f,d.node,J.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),y=i(p+1,c);return d=t[p],f=n?n(d):d,new J(f,d.node,J.BLACK,m,y)}},r=function(l){let c=null,u=null,d=t.length;const f=function(m,y){const _=d-m,I=d;d-=m;const b=i(_+1,I),w=t[_],E=n?n(w):w;p(new J(E,w.node,y,null,b))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));y?f(_,J.BLACK):(f(_,J.BLACK),f(_,J.RED))}return u},o=new Xb(t.length),a=r(o);return new re(s||e,a)};/**
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
 */let zi;const $t={};class Fe{static get Default(){return v($t&&q,"ChildrenNode.ts has not been loaded"),zi=zi||new Fe({".priority":$t},{".priority":q}),zi}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Xt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof re?n:null}hasIndex(e){return Pe(this.indexSet_,e.toString())}addIndex(e,n){v(e!==Qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(R.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Bs(s,e.getCompare()):a=$t;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Fe(u,c)}addToIndexes(e,n){const s=Ns(this.indexes_,(i,r)=>{const o=Xt(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===$t)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(R.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Bs(a,o.getCompare())}else return $t;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new R(e.name,a))),l.insert(e,e.node)}});return new Fe(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ns(this.indexes_,i=>{if(i===$t)return i;{const r=n.get(e.name);return r?i.remove(new R(e.name,r)):i}});return new Fe(s,this.indexSet_)}}/**
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
 */let vn;class T{static get EMPTY_NODE(){return vn||(vn=new T(new re(bo),null,Fe.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Rd(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vn}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vn:n}}getChild(e){const n=N(e);return n===null?this:this.getImmediateChild(n).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new R(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?vn:this.priorityNode_;return new T(i,o,r)}}updateChild(e,n){const s=N(e);if(s===null)return n;{v(N(e)!==".priority"||ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(W(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(q,(o,a)=>{n[o]=a.val(e),s++,r&&T.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nd(this.getPriority().val())+":"),this.forEachChild(q,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":od(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new R(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new R(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new R(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,R.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ls?-1:0}withIndex(e){if(e===Qt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(q),i=n.getIterator(q);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qt?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zb extends T{constructor(){super(new re(bo),T.EMPTY_NODE,Fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const ls=new Zb;Object.defineProperties(R,{MIN:{value:new R(Zt,T.EMPTY_NODE)},MAX:{value:new R(Nt,ls)}});Ad.__EMPTY_NODE=T.EMPTY_NODE;Q.__childrenNodeConstructor=T;Gb(ls);Yb(ls);/**
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
 */const ew=!0;function K(t,e=null){if(t===null)return T.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Q(n,K(e))}if(!(t instanceof Array)&&ew){const n=[];let s=!1;if(Z(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=K(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new R(o,l)))}}),n.length===0)return T.EMPTY_NODE;const r=Bs(n,qb,o=>o.name,bo);if(s){const o=Bs(n,q.getCompare());return new T(r,K(e),new Fe({".priority":o},{".priority":q}))}else return new T(r,K(e),Fe.Default)}else{let n=T.EMPTY_NODE;return Z(t,(s,i)=>{if(Pe(t,s)&&s.substring(0,1)!=="."){const r=K(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(K(e))}}Kb(K);/**
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
 */class tw extends fi{constructor(e){super(),this.indexPath_=e,v(!P(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?jt(e.name,n.name):r}makePost(e,n){const s=K(e),i=T.EMPTY_NODE.updateChild(this.indexPath_,s);return new R(n,i)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,ls);return new R(Nt,e)}toString(){return zn(this.indexPath_,0).join("/")}}/**
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
 */class nw extends fi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?jt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,n){const s=K(e);return new R(n,s)}toString(){return".value"}}const sw=new nw;/**
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
 */function Dd(t){return{type:"value",snapshotNode:t}}function en(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hn(n,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(en(n,s)):o.trackChildChange(qn(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(q,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hn(i,r))}),n.isLeafNode()||n.forEachChild(q,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(qn(i,r,o))}else s.trackChildChange(en(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Gn{constructor(e){this.indexedFilter_=new wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gn.getStartPost_(e),this.endPost_=Gn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new R(n,s))||(s=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=T.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(T.EMPTY_NODE);const r=this;return n.forEachChild(q,(o,a)=>{r.matches(new R(o,a))||(i=i.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class rw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new R(n,s))||(s=T.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new R(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(qn(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hn(n,d));const y=a.updateImmediateChild(n,T.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(en(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hn(c.name,c.node)),r.trackChildChange(en(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
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
 */class Io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zt}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Io;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ow(t){return t.loadsAllData()?new wo(t.getIndex()):t.hasLimit()?new rw(t):new Gn(t)}function Cl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===q?n="$priority":t.index_===sw?n="$value":t.index_===Qt?n="$key":(v(t.index_ instanceof tw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Y(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Y(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Y(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Y(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Y(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==q&&(e.i=t.index_.toString()),e}/**
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
 */class Vs extends Sd{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=as("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vs.getListenId_(e,s),a={};this.listens_[o]=a;const l=Cl(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Xt(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Vs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Cl(e._queryParams),s=e._path.toString(),i=new ts;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+un(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jn(a.responseText)}catch{se("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&se("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class aw{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zs(){return{value:null,children:new Map}}function Ld(t,e,n){if(P(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=N(e);t.children.has(s)||t.children.set(s,zs());const i=t.children.get(s);e=W(e),Ld(i,e,n)}}function mr(t,e,n){t.value!==null?n(e,t.value):lw(t,(s,i)=>{const r=new j(e.toString()+"/"+s);mr(i,r,n)})}function lw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class cw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Z(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Tl=10*1e3,uw=30*1e3,dw=5*60*1e3;class hw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cw(e);const s=Tl+(uw-Tl)*Math.random();Nn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Z(e,(i,r)=>{r>0&&Pe(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Nn(this.reportStats_.bind(this),Math.floor(Math.random()*2*dw))}}/**
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
 */var ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ye||(ye={}));function Eo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function So(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Hs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ye.ACK_USER_WRITE,this.source=Eo()}operationForChild(e){if(P(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new j(e));return new Hs(L(),n,this.revert)}}else return v(N(this.path)===e,"operationForChild called for unrelated child."),new Hs(W(this.path),this.affectedTree,this.revert)}}/**
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
 */class Kn{constructor(e,n){this.source=e,this.path=n,this.type=ye.LISTEN_COMPLETE}operationForChild(e){return P(this.path)?new Kn(this.source,L()):new Kn(this.source,W(this.path))}}/**
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
 */class Rt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ye.OVERWRITE}operationForChild(e){return P(this.path)?new Rt(this.source,L(),this.snap.getImmediateChild(e)):new Rt(this.source,W(this.path),this.snap)}}/**
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
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ye.MERGE}operationForChild(e){if(P(this.path)){const n=this.children.subtree(new j(e));return n.isEmpty()?null:n.value?new Rt(this.source,L(),n.value):new tn(this.source,L(),n)}else return v(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tn(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ut{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(P(e))return this.isFullyInitialized()&&!this.filtered_;const n=N(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class fw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(iw(o.childName,o.snapshotNode))}),bn(t,i,"child_removed",e,s,n),bn(t,i,"child_added",e,s,n),bn(t,i,"child_moved",r,s,n),bn(t,i,"child_changed",e,s,n),bn(t,i,"value",e,s,n),i}function bn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>gw(t,a,l)),o.forEach(a=>{const l=mw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function mw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gw(t,e,n){if(e.childName==null||n.childName==null)throw cn("Should only compare child_ events.");const s=new R(e.childName,e.snapshotNode),i=new R(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function pi(t,e){return{eventCache:t,serverCache:e}}function Rn(t,e,n,s){return pi(new ut(e,n,s),t.serverCache)}function Md(t,e,n,s){return pi(t.eventCache,new ut(e,n,s))}function qs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Hi;const _w=()=>(Hi||(Hi=new re(tb)),Hi);class U{static fromObject(e){let n=new U(null);return Z(e,(s,i)=>{n=n.set(new j(s),i)}),n}constructor(e,n=_w()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:L(),value:this.value};if(P(e))return null;{const s=N(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(W(e),n);return r!=null?{path:H(new j(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(P(e))return this;{const n=N(e),s=this.children.get(n);return s!==null?s.subtree(W(e)):new U(null)}}set(e,n){if(P(e))return new U(n,this.children);{const s=N(e),r=(this.children.get(s)||new U(null)).set(W(e),n),o=this.children.insert(s,r);return new U(this.value,o)}}remove(e){if(P(e))return this.children.isEmpty()?new U(null):new U(null,this.children);{const n=N(e),s=this.children.get(n);if(s){const i=s.remove(W(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new U(null):new U(this.value,r)}else return this}}get(e){if(P(e))return this.value;{const n=N(e),s=this.children.get(n);return s?s.get(W(e)):null}}setTree(e,n){if(P(e))return n;{const s=N(e),r=(this.children.get(s)||new U(null)).setTree(W(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new U(this.value,o)}}fold(e){return this.fold_(L(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(H(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,L(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(P(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(W(e),H(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,L(),n)}foreachOnPath_(e,n,s){if(P(e))return this;{this.value&&s(n,this.value);const i=N(e),r=this.children.get(i);return r?r.foreachOnPath_(W(e),H(n,i),s):new U(null)}}foreach(e){this.foreach_(L(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(H(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new U(null))}}function Pn(t,e,n){if(P(e))return new ve(new U(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ne(i,e);return r=r.updateChild(o,n),new ve(t.writeTree_.set(i,r))}else{const i=new U(n),r=t.writeTree_.setTree(e,i);return new ve(r)}}}function gr(t,e,n){let s=t;return Z(n,(i,r)=>{s=Pn(s,H(e,i),r)}),s}function xl(t,e){if(P(e))return ve.empty();{const n=t.writeTree_.setTree(e,new U(null));return new ve(n)}}function _r(t,e){return Ut(t,e)!=null}function Ut(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ne(n.path,e)):null}function kl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(q,(s,i)=>{e.push(new R(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new R(s,i.value))}),e}function at(t,e){if(P(e))return t;{const n=Ut(t,e);return n!=null?new ve(new U(n)):new ve(t.writeTree_.subtree(e))}}function yr(t){return t.writeTree_.isEmpty()}function nn(t,e){return Fd(L(),t.writeTree_,e)}function Fd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Fd(H(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(H(t,".priority"),s)),n}}/**
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
 */function mi(t,e){return $d(e,t)}function yw(t,e,n,s,i){v(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Pn(t.visibleWrites,e,n)),t.lastWriteId=s}function vw(t,e,n,s){v(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=gr(t.visibleWrites,e,n),t.lastWriteId=s}function bw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ww(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);v(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Iw(a,s.path)?i=!1:fe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Ew(t),!0;if(s.snap)t.visibleWrites=xl(t.visibleWrites,s.path);else{const a=s.children;Z(a,l=>{t.visibleWrites=xl(t.visibleWrites,H(s.path,l))})}return!0}else return!1}function Iw(t,e){if(t.snap)return fe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fe(H(t.path,n),e))return!0;return!1}function Ew(t){t.visibleWrites=jd(t.allWrites,Cw,L()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Cw(t){return t.visible}function jd(t,e,n){let s=ve.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)fe(n,o)?(a=ne(n,o),s=Pn(s,a,r.snap)):fe(o,n)&&(a=ne(o,n),s=Pn(s,L(),r.snap.getChild(a)));else if(r.children){if(fe(n,o))a=ne(n,o),s=gr(s,a,r.children);else if(fe(o,n))if(a=ne(o,n),P(a))s=gr(s,L(),r.children);else{const l=Xt(r.children,N(a));if(l){const c=l.getChild(W(a));s=Pn(s,L(),c)}}}else throw cn("WriteRecord should have .snap or .children")}}return s}function Ud(t,e,n,s,i){if(!s&&!i){const r=Ut(t.visibleWrites,e);if(r!=null)return r;{const o=at(t.visibleWrites,e);if(yr(o))return n;if(n==null&&!_r(o,L()))return null;{const a=n||T.EMPTY_NODE;return nn(o,a)}}}else{const r=at(t.visibleWrites,e);if(!i&&yr(r))return n;if(!i&&n==null&&!_r(r,L()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(fe(c.path,e)||fe(e,c.path))},a=jd(t.allWrites,o,e),l=n||T.EMPTY_NODE;return nn(a,l)}}}function Sw(t,e,n){let s=T.EMPTY_NODE;const i=Ut(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(q,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=at(t.visibleWrites,e);return n.forEachChild(q,(o,a)=>{const l=nn(at(r,new j(o)),a);s=s.updateImmediateChild(o,l)}),kl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=at(t.visibleWrites,e);return kl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Tw(t,e,n,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=H(e,n);if(_r(t.visibleWrites,r))return null;{const o=at(t.visibleWrites,r);return yr(o)?i.getChild(n):nn(o,i.getChild(n))}}function xw(t,e,n,s){const i=H(e,n),r=Ut(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=at(t.visibleWrites,i);return nn(o,s.getNode().getImmediateChild(n))}else return null}function kw(t,e){return Ut(t.visibleWrites,e)}function Aw(t,e,n,s,i,r,o){let a;const l=at(t.visibleWrites,e),c=Ut(l,L());if(c!=null)a=c;else if(n!=null)a=nn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Nw(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function Gs(t,e,n,s){return Ud(t.writeTree,t.treePath,e,n,s)}function To(t,e){return Sw(t.writeTree,t.treePath,e)}function Al(t,e,n,s){return Tw(t.writeTree,t.treePath,e,n,s)}function Ks(t,e){return kw(t.writeTree,H(t.treePath,e))}function Rw(t,e,n,s,i,r){return Aw(t.writeTree,t.treePath,e,n,s,i,r)}function xo(t,e,n){return xw(t.writeTree,t.treePath,e,n)}function Wd(t,e){return $d(H(t.treePath,e),t.writeTree)}function $d(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Pw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,qn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,en(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,qn(s,e.snapshotNode,i.oldSnap));else throw cn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ow{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bd=new Ow;class ko{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ut(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pt(this.viewCache_),r=Rw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Dw(t){return{filter:t}}function Lw(t,e){v(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Mw(t,e,n,s,i){const r=new Pw;let o,a;if(n.type===ye.OVERWRITE){const c=n;c.source.fromUser?o=vr(t,e,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!P(c.path),o=Ys(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ye.MERGE){const c=n;c.source.fromUser?o=jw(t,e,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=br(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ye.ACK_USER_WRITE){const c=n;c.revert?o=$w(t,e,c.path,s,i,r):o=Uw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ye.LISTEN_COMPLETE)o=Ww(t,e,n.path,s,r);else throw cn("Unknown operation type: "+n.type);const l=r.getChanges();return Fw(e,o,l),{viewCache:o,changes:l}}function Fw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=qs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Dd(qs(e)))}}function Vd(t,e,n,s,i,r){const o=e.eventCache;if(Ks(s,n)!=null)return e;{let a,l;if(P(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pt(e),u=c instanceof T?c:T.EMPTY_NODE,d=To(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Gs(s,Pt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(n);if(c===".priority"){v(ct(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Al(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=W(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Al(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=xo(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Rn(e,a,o.isFullyInitialized()||P(n),t.filter.filtersNodes())}}function Ys(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(P(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=N(n);if(!l.isCompleteForPath(n)&&ct(n)>1)return e;const m=W(n),_=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),p,_,m,Bd,null)}const d=Md(e,c,l.isFullyInitialized()||P(n),u.filtersNodes()),f=new ko(i,d,r);return Vd(t,d,n,i,f,a)}function vr(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ko(i,e,r);if(P(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Rn(e,c,!0,t.filter.filtersNodes());else{const d=N(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Rn(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=W(n),p=a.getNode().getImmediateChild(d);let m;if(P(f))m=s;else{const y=u.getCompleteChild(d);y!=null?_o(f)===".priority"&&y.getChild(xd(f)).isEmpty()?m=y:m=y.updateChild(f,s):m=T.EMPTY_NODE}if(p.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Rn(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nl(t,e){return t.eventCache.isCompleteForChild(e)}function jw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=H(n,l);Nl(e,N(u))&&(a=vr(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=H(n,l);Nl(e,N(u))||(a=vr(t,a,u,c,i,r,o))}),a}function Rl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function br(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;P(n)?c=s:c=new U(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=Rl(t,p,f);l=Ys(t,l,new j(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),y=Rl(t,m,f);l=Ys(t,l,new j(d),y,i,r,o,a)}}),l}function Uw(t,e,n,s,i,r,o){if(Ks(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(P(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ys(t,e,n,l.getNode().getChild(n),i,r,a,o);if(P(n)){let c=new U(null);return l.getNode().forEachChild(Qt,(u,d)=>{c=c.set(new j(u),d)}),br(t,e,n,c,i,r,a,o)}else return e}else{let c=new U(null);return s.foreach((u,d)=>{const f=H(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),br(t,e,n,c,i,r,a,o)}}function Ww(t,e,n,s,i){const r=e.serverCache,o=Md(e,r.getNode(),r.isFullyInitialized()||P(n),r.isFiltered());return Vd(t,o,n,s,Bd,i)}function $w(t,e,n,s,i,r){let o;if(Ks(s,n)!=null)return e;{const a=new ko(s,e,i),l=e.eventCache.getNode();let c;if(P(n)||N(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gs(s,Pt(e));else{const d=e.serverCache.getNode();v(d instanceof T,"serverChildren would be complete if leaf node"),u=To(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=N(n);let d=xo(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,W(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,T.EMPTY_NODE,W(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gs(s,Pt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ks(s,L())!=null,Rn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Bw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new wo(s.getIndex()),r=ow(s);this.processor_=Dw(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,a.getNode(),null),u=new ut(l,o.isFullyInitialized(),i.filtersNodes()),d=new ut(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pi(d,u),this.eventGenerator_=new fw(this.query_)}get query(){return this.query_}}function Vw(t){return t.viewCache_.serverCache.getNode()}function zw(t){return qs(t.viewCache_)}function Hw(t,e){const n=Pt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!P(e)&&!n.getImmediateChild(N(e)).isEmpty())?n.getChild(e):null}function Pl(t){return t.eventRegistrations_.length===0}function qw(t,e){t.eventRegistrations_.push(e)}function Ol(t,e,n){const s=[];if(n){v(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Dl(t,e,n,s){e.type===ye.MERGE&&e.source.queryId!==null&&(v(Pt(t.viewCache_),"We should always have a full cache before handling merges"),v(qs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Mw(t.processor_,i,e,n,s);return Lw(t.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,zd(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Gw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(q,(r,o)=>{s.push(en(r,o))}),n.isFullyInitialized()&&s.push(Dd(n.getNode())),zd(t,s,n.getNode(),e)}function zd(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return pw(t.eventGenerator_,e,n,i)}/**
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
 */let Qs;class Hd{constructor(){this.views=new Map}}function Kw(t){v(!Qs,"__referenceConstructor has already been defined"),Qs=t}function Yw(){return v(Qs,"Reference.ts has not been loaded"),Qs}function Qw(t){return t.views.size===0}function Ao(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),Dl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Dl(o,e,n,s));return r}}function qd(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Gs(n,i?s:null),l=!1;a?l=!0:s instanceof T?(a=To(n,s),l=!1):(a=T.EMPTY_NODE,l=!1);const c=pi(new ut(a,l,!1),new ut(s,i,!1));return new Bw(e,c)}return o}function Jw(t,e,n,s,i,r){const o=qd(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),qw(o,n),Gw(o,n)}function Xw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=dt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ol(c,n,s)),Pl(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ol(l,n,s)),Pl(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!dt(t)&&r.push(new(Yw())(e._repo,e._path)),{removed:r,events:o}}function Gd(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function lt(t,e){let n=null;for(const s of t.views.values())n=n||Hw(s,e);return n}function Kd(t,e){if(e._queryParams.loadsAllData())return gi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Yd(t,e){return Kd(t,e)!=null}function dt(t){return gi(t)!=null}function gi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Js;function Zw(t){v(!Js,"__referenceConstructor has already been defined"),Js=t}function eI(){return v(Js,"Reference.ts has not been loaded"),Js}let tI=1;class Ll{constructor(e){this.listenProvider_=e,this.syncPointTree_=new U(null),this.pendingWriteTree_=Nw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qd(t,e,n,s,i){return yw(t.pendingWriteTree_,e,n,s,i),i?pn(t,new Rt(Eo(),e,n)):[]}function nI(t,e,n,s){vw(t.pendingWriteTree_,e,n,s);const i=U.fromObject(n);return pn(t,new tn(Eo(),e,i))}function st(t,e,n=!1){const s=bw(t.pendingWriteTree_,e);if(ww(t.pendingWriteTree_,e)){let r=new U(null);return s.snap!=null?r=r.set(L(),!0):Z(s.children,o=>{r=r.set(new j(o),!0)}),pn(t,new Hs(s.path,r,n))}else return[]}function cs(t,e,n){return pn(t,new Rt(Co(),e,n))}function sI(t,e,n){const s=U.fromObject(n);return pn(t,new tn(Co(),e,s))}function iI(t,e){return pn(t,new Kn(Co(),e))}function rI(t,e,n){const s=Ro(t,n);if(s){const i=Po(s),r=i.path,o=i.queryId,a=ne(r,e),l=new Kn(So(o),a);return Oo(t,r,l)}else return[]}function Xs(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Yd(o,e))){const l=Xw(o,e,n,s);Qw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,p)=>dt(p));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=lI(f);for(let m=0;m<p.length;++m){const y=p[m],_=y.query,I=eh(t,y);t.listenProvider_.startListening(On(_),Yn(t,_),I.hashFn,I.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(On(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(_i(f));t.listenProvider_.stopListening(On(f),p)}))}cI(t,c)}return a}function Jd(t,e,n,s){const i=Ro(t,s);if(i!=null){const r=Po(i),o=r.path,a=r.queryId,l=ne(o,e),c=new Rt(So(a),l,n);return Oo(t,o,c)}else return[]}function oI(t,e,n,s){const i=Ro(t,s);if(i){const r=Po(i),o=r.path,a=r.queryId,l=ne(o,e),c=U.fromObject(n),u=new tn(So(a),l,c);return Oo(t,o,u)}else return[]}function wr(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const m=ne(f,i);r=r||lt(p,m),o=o||dt(p)});let a=t.syncPointTree_.get(i);a?(o=o||dt(a),r=r||lt(a,L())):(a=new Hd,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=T.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const y=lt(m,L());y&&(r=r.updateImmediateChild(p,y))}));const c=Yd(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=_i(e);v(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=uI();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=mi(t.pendingWriteTree_,i);let d=Jw(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Kd(a,e);d=d.concat(dI(t,e,f))}return d}function No(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ne(o,e),c=lt(a,l);if(c)return c});return Ud(i,e,r,n,!0)}function aI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ne(c,n);s=s||lt(u,d)});let i=t.syncPointTree_.get(n);i?s=s||lt(i,L()):(i=new Hd,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new ut(s,!0,!1):null,a=mi(t.pendingWriteTree_,e._path),l=qd(i,e,a,r?o.getNode():T.EMPTY_NODE,r);return zw(l)}function pn(t,e){return Xd(e,t.syncPointTree_,null,mi(t.pendingWriteTree_,L()))}function Xd(t,e,n,s){if(P(t.path))return Zd(t,e,n,s);{const i=e.get(L());n==null&&i!=null&&(n=lt(i,L()));let r=[];const o=N(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Wd(s,o);r=r.concat(Xd(a,l,c,u))}return i&&(r=r.concat(Ao(i,t,s,n))),r}}function Zd(t,e,n,s){const i=e.get(L());n==null&&i!=null&&(n=lt(i,L()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Wd(s,o),u=t.operationForChild(o);u&&(r=r.concat(Zd(u,a,l,c)))}),i&&(r=r.concat(Ao(i,t,s,n))),r}function eh(t,e){const n=e.query,s=Yn(t,n);return{hashFn:()=>(Vw(e)||T.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?rI(t,n._path,s):iI(t,n._path);{const r=ib(i,n);return Xs(t,n,null,r)}}}}function Yn(t,e){const n=_i(e);return t.queryToTagMap.get(n)}function _i(t){return t._path.toString()+"$"+t._queryIdentifier}function Ro(t,e){return t.tagToQueryMap.get(e)}function Po(t){const e=t.indexOf("$");return v(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new j(t.substr(0,e))}}function Oo(t,e,n){const s=t.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=mi(t.pendingWriteTree_,e);return Ao(s,n,i,null)}function lI(t){return t.fold((e,n,s)=>{if(n&&dt(n))return[gi(n)];{let i=[];return n&&(i=Gd(n)),Z(s,(r,o)=>{i=i.concat(o)}),i}})}function On(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eI())(t._repo,t._path):t}function cI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=_i(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function uI(){return tI++}function dI(t,e,n){const s=e._path,i=Yn(t,e),r=eh(t,n),o=t.listenProvider_.startListening(On(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)v(!dt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!P(c)&&u&&dt(u))return[gi(u).query];{let f=[];return u&&(f=f.concat(Gd(u).map(p=>p.query))),Z(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(On(u),Yn(t,u))}}return o}/**
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
 */class Do{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Do(n)}node(){return this.node_}}class Lo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=H(this.path_,e);return new Lo(this.syncTree_,n)}node(){return No(this.syncTree_,this.path_)}}const hI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ml=function(t,e,n){if(!t||typeof t!="object")return t;if(v(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pI(t[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+t)}},pI=function(t,e,n){t.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},th=function(t,e,n,s){return Mo(e,new Lo(n,t),s)},nh=function(t,e,n){return Mo(t,new Do(e),n)};function Mo(t,e,n){const s=t.getPriority().val(),i=Ml(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ml(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Q(a,K(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Q(i))),o.forEachChild(q,(a,l)=>{const c=Mo(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Fo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function jo(t,e){let n=e instanceof j?e:new j(e),s=t,i=N(n);for(;i!==null;){const r=Xt(s.node.children,i)||{children:{},childCount:0};s=new Fo(i,s,r),n=W(n),i=N(n)}return s}function mn(t){return t.node.value}function sh(t,e){t.node.value=e,Ir(t)}function ih(t){return t.node.childCount>0}function mI(t){return mn(t)===void 0&&!ih(t)}function yi(t,e){Z(t.node.children,(n,s)=>{e(new Fo(n,t,s))})}function rh(t,e,n,s){n&&!s&&e(t),yi(t,i=>{rh(i,e,!0,s)}),n&&s&&e(t)}function gI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function us(t){return new j(t.parent===null?t.name:us(t.parent)+"/"+t.name)}function Ir(t){t.parent!==null&&_I(t.parent,t.name,t)}function _I(t,e,n){const s=mI(n),i=Pe(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ir(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ir(t))}/**
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
 */const yI=/[\[\].#$\/\u0000-\u001F\u007F]/,vI=/[\[\].#$\u0000-\u001F\u007F]/,qi=10*1024*1024,Uo=function(t){return typeof t=="string"&&t.length!==0&&!yI.test(t)},oh=function(t){return typeof t=="string"&&t.length!==0&&!vI.test(t)},bI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oh(t)},wI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ho(t)||t&&typeof t=="object"&&Pe(t,".sv")},ah=function(t,e,n,s){s&&e===void 0||vi(ri(t,"value"),e,n)},vi=function(t,e,n){const s=n instanceof j?new jb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vt(s));if(typeof e=="function")throw new Error(t+"contains a function "+vt(s)+" with contents = "+e.toString());if(ho(e))throw new Error(t+"contains "+e.toString()+" "+vt(s));if(typeof e=="string"&&e.length>qi/3&&oi(e)>qi)throw new Error(t+"contains a string greater than "+qi+" utf8 bytes "+vt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Z(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Uo(o)))throw new Error(t+" contains an invalid key ("+o+") "+vt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ub(s,o),vi(t,a,s),Wb(s)}),i&&r)throw new Error(t+' contains ".value" child '+vt(s)+" in addition to actual children.")}},II=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=zn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Uo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&fe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},EI=function(t,e,n,s){const i=ri(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Z(e,(o,a)=>{const l=new j(o);if(vi(i,a,H(n,l)),_o(l)===".priority"&&!wI(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),II(i,r)},lh=function(t,e,n,s){if(!oh(n))throw new Error(ri(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lh(t,e,n)},Wo=function(t,e){if(N(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},SI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Uo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bI(n))throw new Error(ri(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ch(t,e,n){bi(t,n),uh(t,s=>yo(s,e))}function me(t,e,n){bi(t,n),uh(t,s=>fe(s,e)||fe(e,s))}function uh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(xI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();An&&X("event: "+n.toString()),fn(s)}}}/**
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
 */const kI="repo_interrupt",AI=25;class NI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zs(),this.transactionQueueTree_=new Fo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RI(t,e,n){if(t.stats_=mo(t.repoInfo_),t.forceRestClient_||lb())t.server_=new Vs(t.repoInfo_,(s,i,r,o)=>{Fl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Y(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ue(t.repoInfo_,e,(s,i,r,o)=>{Fl(t,s,i,r,o)},s=>{jl(t,s)},s=>{PI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=fb(t.repoInfo_,()=>new hw(t.stats_,t.server_)),t.infoData_=new aw,t.infoSyncTree_=new Ll({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=cs(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$o(t,"connected",!1),t.serverSyncTree_=new Ll({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);me(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function dh(t){const n=t.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wi(t){return hI({timestamp:dh(t)})}function Fl(t,e,n,s,i){t.dataUpdateCount++;const r=new j(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ns(n,c=>K(c));o=oI(t.serverSyncTree_,r,l,i)}else{const l=K(n);o=Jd(t.serverSyncTree_,r,l,i)}else if(s){const l=Ns(n,c=>K(c));o=sI(t.serverSyncTree_,r,l)}else{const l=K(n);o=cs(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=sn(t,r)),me(t.eventQueue_,a,o)}function jl(t,e){$o(t,"connected",e),e===!1&&MI(t)}function PI(t,e){Z(e,(n,s)=>{$o(t,n,s)})}function $o(t,e,n){const s=new j("/.info/"+e),i=K(n);t.infoData_.updateSnapshot(s,i);const r=cs(t.infoSyncTree_,s,i);me(t.eventQueue_,s,r)}function Bo(t){return t.nextWriteId_++}function OI(t,e,n){const s=aI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=K(i).withIndex(e._queryParams.getIndex());wr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=cs(t.serverSyncTree_,e._path,r);else{const a=Yn(t.serverSyncTree_,e);o=Jd(t.serverSyncTree_,e._path,r,a)}return me(t.eventQueue_,e._path,o),Xs(t.serverSyncTree_,e,n,null,!0),r},i=>(ds(t,"get for query "+Y(e)+" failed: "+i),Promise.reject(new Error(i))))}function DI(t,e,n,s,i){ds(t,"set",{path:e.toString(),value:n,priority:s});const r=wi(t),o=K(n,s),a=No(t.serverSyncTree_,e),l=nh(o,a,r),c=Bo(t),u=Qd(t.serverSyncTree_,e,l,c,!0);bi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||se("set at "+e+" failed: "+f);const y=st(t.serverSyncTree_,c,!m);me(t.eventQueue_,e,y),Er(t,i,f,p)});const d=zo(t,e);sn(t,d),me(t.eventQueue_,d,[])}function LI(t,e,n,s){ds(t,"update",{path:e.toString(),value:n});let i=!0;const r=wi(t),o={};if(Z(n,(a,l)=>{i=!1,o[a]=th(H(e,a),K(l),t.serverSyncTree_,r)}),i)X("update() called with empty data.  Don't do anything."),Er(t,s,"ok",void 0);else{const a=Bo(t),l=nI(t.serverSyncTree_,e,o,a);bi(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||se("update at "+e+" failed: "+c);const f=st(t.serverSyncTree_,a,!d),p=f.length>0?sn(t,e):e;me(t.eventQueue_,p,f),Er(t,s,c,u)}),Z(n,c=>{const u=zo(t,H(e,c));sn(t,u)}),me(t.eventQueue_,e,[])}}function MI(t){ds(t,"onDisconnectEvents");const e=wi(t),n=zs();mr(t.onDisconnect_,L(),(i,r)=>{const o=th(i,r,t.serverSyncTree_,e);Ld(n,i,o)});let s=[];mr(n,L(),(i,r)=>{s=s.concat(cs(t.serverSyncTree_,i,r));const o=zo(t,i);sn(t,o)}),t.onDisconnect_=zs(),me(t.eventQueue_,L(),s)}function FI(t,e,n){let s;N(e._path)===".info"?s=wr(t.infoSyncTree_,e,n):s=wr(t.serverSyncTree_,e,n),ch(t.eventQueue_,e._path,s)}function Ul(t,e,n){let s;N(e._path)===".info"?s=Xs(t.infoSyncTree_,e,n):s=Xs(t.serverSyncTree_,e,n),ch(t.eventQueue_,e._path,s)}function jI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kI)}function ds(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),X(n,...e)}function Er(t,e,n,s){e&&fn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function hh(t,e,n){return No(t.serverSyncTree_,e,n)||T.EMPTY_NODE}function Vo(t,e=t.transactionQueueTree_){if(e||Ii(t,e),mn(e)){const n=ph(t,e);v(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&UI(t,us(e),n)}else ih(e)&&yi(e,n=>{Vo(t,n)})}function UI(t,e,n){const s=n.map(c=>c.currentWriteId),i=hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ne(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ds(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(st(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ii(t,jo(t.transactionQueueTree_,e)),Vo(t,t.transactionQueueTree_),me(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)fn(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{se("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}sn(t,e)}},o)}function sn(t,e){const n=fh(t,e),s=us(n),i=ph(t,n);return WI(t,i,s),s}function WI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ne(n,l.path);let u=!1,d;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(st(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AI)u=!0,d="maxretry",i=i.concat(st(t.serverSyncTree_,l.currentWriteId,!0));else{const f=hh(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){vi("transaction failed: Data returned ",p,l.path);let m=K(p);typeof p=="object"&&p!=null&&Pe(p,".priority")||(m=m.updatePriority(f.getPriority()));const _=l.currentWriteId,I=wi(t),b=nh(m,f,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=b,l.currentWriteId=Bo(t),o.splice(o.indexOf(_),1),i=i.concat(Qd(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(st(t.serverSyncTree_,_,!0))}else u=!0,d="nodata",i=i.concat(st(t.serverSyncTree_,l.currentWriteId,!0))}me(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ii(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)fn(s[a]);Vo(t,t.transactionQueueTree_)}function fh(t,e){let n,s=t.transactionQueueTree_;for(n=N(e);n!==null&&mn(s)===void 0;)s=jo(s,n),e=W(e),n=N(e);return s}function ph(t,e){const n=[];return mh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function mh(t,e,n){const s=mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);yi(e,i=>{mh(t,i,n)})}function Ii(t,e){const n=mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,sh(e,n.length>0?n:void 0)}yi(e,s=>{Ii(t,s)})}function zo(t,e){const n=us(fh(t,e)),s=jo(t.transactionQueueTree_,e);return gI(s,i=>{Gi(t,i)}),Gi(t,s),rh(s,i=>{Gi(t,i)}),n}function Gi(t,e){const n=mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(v(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(st(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?sh(e,void 0):n.length=r+1,me(t.eventQueue_,us(e),i);for(let o=0;o<s.length;o++)fn(s[o])}}/**
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
 */function $I(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function BI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):se(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wl=function(t,e){const n=VI(t),s=n.namespace;n.domain==="firebase.com"&&Be(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Zv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new j(n.pathString)}},VI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=$I(t.substring(u,d)));const f=BI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const $l="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zI=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$l.charAt(n%64),n=Math.floor(n/64);v(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$l.charAt(e[i]);return v(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class HI{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Y(this.snapshot.exportVal())}}class qI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ho{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return P(this._path)?null:_o(this._path)}get ref(){return new Ke(this._repo,this._path)}get _queryIdentifier(){const e=Sl(this._queryParams),n=fo(e);return n==="{}"?"default":n}get _queryObject(){return Sl(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Ho))return!1;const n=this._repo===e._repo,s=yo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mb(this._path)}}class Ke extends Ho{constructor(e,n){super(e,n,new Io,!1)}get parent(){const e=xd(this._path);return e===null?null:new Ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new j(e),s=rn(this.ref,e);return new Qn(this._node.getChild(n),s,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Qn(i,rn(this.ref,s),q)))}hasChild(e){const n=new j(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function oe(t,e){return t=ee(t),t._checkNotDeleted("ref"),e!==void 0?rn(t._root,e):t._root}function rn(t,e){return t=ee(t),N(t._path)===null?CI("child","path",e):lh("child","path",e),new Ke(t._repo,H(t._path,e))}function _h(t,e){t=ee(t),Wo("push",t._path),ah("push",e,t._path,!0);const n=dh(t._repo),s=zI(n),i=rn(t,s),r=rn(t,s);let o;return e!=null?o=yh(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Cr(t){return Wo("remove",t._path),yh(t,null)}function yh(t,e){t=ee(t),Wo("set",t._path),ah("set",e,t._path,!1);const n=new ts;return DI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function GI(t,e){EI("update",e,t._path);const n=new ts;return LI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function vh(t){t=ee(t);const e=new gh(()=>{}),n=new Ei(e);return OI(t._repo,t,n).then(s=>new Qn(s,new Ke(t._repo,t._path),t._queryParams.getIndex()))}class Ei{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new HI("value",this,new Qn(e.snapshotNode,new Ke(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qI(this,e,n):null}matches(e){return e instanceof Ei?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KI(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,d)=>{Ul(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new gh(n,r||void 0),a=new Ei(o);return FI(t._repo,t,a),()=>Ul(t._repo,t,a)}function on(t,e,n,s){return KI(t,"value",e,n,s)}Kw(Ke);Zw(Ke);/**
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
 */const YI="FIREBASE_DATABASE_EMULATOR_HOST",Sr={};let QI=!1;function JI(t,e,n,s){t.repoInfo_=new yd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function XI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),X("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wl(r,i),a=o.repoInfo,l;typeof process<"u"&&al&&(l=al[YI]),l?(r=`http://${l}?ns=${a.namespace}`,o=Wl(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new ub(t.name,t.options,e);SI("Invalid Firebase Database URL",o),P(o.path)||Be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=eE(a,t,c,new cb(t.name,n));return new tE(u,t)}function ZI(t,e){const n=Sr[e];(!n||n[t.key]!==t)&&Be(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jI(t),delete n[t.key]}function eE(t,e,n,s){let i=Sr[e.name];i||(i={},Sr[e.name]=i);let r=i[t.toURLString()];return r&&Be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new NI(t,QI,n,s),i[t.toURLString()]=r,r}class tE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ke(this._repo,L())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Be("Cannot call "+e+" on a deleted database.")}}function bh(t=Qr(),e){const n=Ft(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Wp("database");s&&nE(n,...s)}return n}function nE(t,e,n,s={}){t=ee(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Be("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Cs(Cs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:$p(s.mockUserToken,t.app.options.projectId);r=new Cs(o)}JI(i,e,n,r)}/**
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
 */function sE(t){Gv(dn),Ae(new be("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return XI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),pe(ll,cl,t),pe(ll,cl,"esm2017")}Ue.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ue.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sE();const iE={apiKey:"AIzaSyDUfmBPE8zyNpu_CvRNcNuqK-9NJFAHQqg",authDomain:"home-goods-inventory-system.firebaseapp.com",projectId:"home-goods-inventory-system",storageBucket:"home-goods-inventory-system.appspot.com",messagingSenderId:"832889371836",appId:"1:832889371836:web:0835ab013150bc05d964b9",measurementId:"G-1HL856XXMY"},qo=Jc(iE);k_(qo);const Go=sd(qo),le=bh(qo),rE="/CIS_641_Final_Project/assets/login1-Y-55spug.jpg";function wh({onLogin:t}){const e=ge(),[n,s]=g.useState({value:"",isTouched:!1}),[i,r]=g.useState({value:"",isTouched:!1}),[o,a]=g.useState(""),[l,c]=g.useState({}),[u,d]=g.useState(!1),f=(w,E)=>{let k="";switch(w){case"Username":E||(k="Username is required");break;case"Password":E||(k="Password is required");break}return k},p=(w,E)=>{const k=f(w,E);c(S=>({...S,[w]:k})),w==="Username"?s(S=>({...S,isTouched:!0})):w==="Password"&&r(S=>({...S,isTouched:!0}))},m=()=>n.value&&i.value,y=async w=>{w.preventDefault();const E=f("Username",n.value),k=f("Password",i.value);if(E||k){c({Username:E,Password:k});return}try{await Py(Go,n.value,i.value),t(),e("/item-categories")}catch(S){a(S.message)}},_=w=>{w.preventDefault(),e("/create-account")},I=w=>{w.preventDefault(),e("/forgot-password")},b=()=>{d(!0),document.querySelector(".App")};return h.jsx("div",{className:`${B.App} ${u?B.darkBackground:""}`,style:{backgroundImage:`url(${rE})`},children:u?h.jsx("div",{className:B.App,children:h.jsx("form",{onSubmit:y,children:h.jsxs("div",{className:B.style1,children:[h.jsxs("div",{className:B.input_group,children:[h.jsx("label",{htmlFor:"user_name",children:"Username"}),h.jsx("input",{type:"email",id:"user_name",name:"user_name1",placeholder:"Enter User Name",value:n.value,onChange:w=>s({...n,value:w.target.value}),onBlur:()=>p("Username",n.value)}),n.isTouched&&l.Username&&h.jsx("p",{className:"FieldError",children:l.Username})]}),h.jsxs("div",{className:B.input_group,children:[h.jsx("label",{htmlFor:"password",children:"Password"}),h.jsx("input",{type:"password",id:"password",name:"password_1",placeholder:"Enter Password",value:i.value,onChange:w=>r({...i,value:w.target.value}),onBlur:()=>p("Password",i.value)}),i.isTouched&&l.Password&&h.jsx("p",{className:"FieldError",children:l.Password})]}),o&&h.jsx("div",{className:B.error,children:o}),h.jsx("div",{className:B.btn_style,children:h.jsx("button",{type:"submit",disabled:!m(),children:"Login"})}),h.jsx("div",{className:B.btn_style,children:h.jsx("button",{onClick:_,children:"Create Account"})}),h.jsx("div",{className:B.btn_style,children:h.jsx("button",{onClick:I,children:"Forgot Password?"})})]})})}):h.jsx("div",{className:B.getStartedContainer,children:h.jsx("button",{className:B.getStartedButton,onClick:b,children:"Get Started"})})})}wh.propTypes={onLogin:A.func.isRequired};function oE(){const t=ge(),[e,n]=g.useState(""),[s,i]=g.useState(""),[r,o]=g.useState({value:"",isTouched:!1}),[a,l]=g.useState({value:"",isTouched:!1}),[c,u]=g.useState(""),[d,f]=g.useState({}),[p,m]=g.useState(""),y=S=>/^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.gvsu\.edu)$/.test(S),_=S=>{const z=/[A-Z]/.test(S),Oe=/\d/.test(S),Wt=/[!@#$%^&*(),.?":{}|<>]/.test(S);return S.length<8?"Password should be at least 8 characters long":z?Oe?Wt?null:"Password should contain at least one special character":"Password should contain at least one number":"Password should contain at least one uppercase letter"},I=(S,M)=>{let z="";switch(S){case"Firstname":M||(z="First name is required");break;case"Lastname":M||(z="Last name is required");break;case"Email":(!M||!y(M))&&(z="Enter a valid Mail");break;case"Password":z=_(M);break;case"Repassword":M!==a.value&&(z="Passwords do not match");break}return z},b=(S,M)=>{const z=I(S,M);f(Oe=>({...Oe,[S]:z}))},w=()=>{const S={Firstname:I("Firstname",e),Lastname:I("Lastname",s),Email:I("Email",r.value),Password:I("Password",a.value),Repassword:I("Repassword",c)};return f(S),!Object.values(S).some(M=>M)},E=async S=>{if(S.preventDefault(),w())try{await Ry(Go,r.value,a.value),t("/account_success")}catch(M){m(M.message)}},k=()=>{t("/")};return h.jsx("div",{className:B.App,children:h.jsx("form",{onSubmit:E,children:h.jsxs("div",{className:B.style1,children:[h.jsxs("div",{className:B.input_group,children:[h.jsxs("label",{htmlFor:"first_name",children:["First Name ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"text",id:"first_name",name:"first_name1",placeholder:"Enter First name",value:e,onChange:S=>n(S.target.value),onBlur:()=>b("Firstname",e)}),d.Firstname&&h.jsx("p",{className:"FieldError",children:d.Firstname})]}),h.jsxs("div",{className:B.input_group,children:[h.jsxs("label",{htmlFor:"last_name",children:["Last Name ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"text",id:"last_name",name:"last_name1",placeholder:"Enter Last name",value:s,onChange:S=>i(S.target.value),onBlur:()=>b("Lastname",s)}),d.Lastname&&h.jsx("p",{className:"FieldError",children:d.Lastname})]}),h.jsxs("div",{className:B.input_group,children:[h.jsxs("label",{htmlFor:"e_mail",children:["E-mail ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"email",id:"e_mail",name:"e_mail1",placeholder:"Enter Email",value:r.value,onChange:S=>o({...r,value:S.target.value}),onBlur:()=>b("Email",r.value)}),d.Email&&h.jsx("p",{className:"FieldError",children:d.Email})]}),h.jsxs("div",{className:B.input_group,children:[h.jsxs("label",{htmlFor:"password",children:["Create Password ",h.jsx("sup",{children:"*"})," "]}),h.jsx("input",{type:"password",id:"password",name:"password1",placeholder:"Enter Password",value:a.value,onChange:S=>l({...a,value:S.target.value}),onBlur:()=>b("Password",a.value)}),d.Password&&h.jsx("p",{className:"FieldError",children:d.Password})]}),h.jsxs("div",{className:B.input_group,children:[h.jsxs("label",{htmlFor:"repassword",children:["Re - Enter Password ",h.jsx("sup",{children:"*"})]}),h.jsx("input",{type:"password",id:"repassword",name:"repassword1",placeholder:"Re - Enter Password",value:c,onChange:S=>u(S.target.value),onBlur:()=>b("Repassword",c)}),d.Repassword&&h.jsx("p",{className:"FieldError",children:d.Repassword})]}),p&&h.jsx("div",{className:B.error,children:p}),h.jsx("div",{className:B.btn_style,children:h.jsx("button",{type:"submit",children:"Create Account"})}),h.jsx("div",{className:B.btn_style,children:h.jsx("button",{onClick:k,children:"Back"})})]})})})}function aE(){const t=ge(),e=n=>{n.preventDefault(),t("/")};return h.jsxs("div",{className:B.style2,children:[h.jsx("h2",{children:"Account Created Successfully! Please Return to Login Page."}),h.jsx("div",{className:B.backbutton_style,children:h.jsx("button",{onClick:e,children:"Back to Account"})})]})}const lE="_search_item_12f5w_3",cE="_searchBar_12f5w_35",uE="_item_styles_12f5w_75",dE="_item_12f5w_75",hE="_delete_icon_12f5w_157",fE="_confirmation_12f5w_239",pE="_outer_12f5w_293",_t={search_item:lE,searchBar:cE,item_styles:uE,item:dE,delete_icon:hE,confirmation:fE,outer:pE,"add-button":"_add-button_12f5w_381"},Bl=()=>{};let Ko={},Ih={},Eh=null,Ch={mark:Bl,measure:Bl};try{typeof window<"u"&&(Ko=window),typeof document<"u"&&(Ih=document),typeof MutationObserver<"u"&&(Eh=MutationObserver),typeof performance<"u"&&(Ch=performance)}catch{}const{userAgent:Vl=""}=Ko.navigator||{},ht=Ko,$=Ih,zl=Eh,ys=Ch;ht.document;const Ye=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",Sh=~Vl.indexOf("MSIE")||~Vl.indexOf("Trident/");var V="classic",Th="duotone",ue="sharp",de="sharp-duotone",mE=[V,Th,ue,de],gE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Hl={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_E=["kit"],yE=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,vE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bE={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},wE={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},IE={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},EE={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},CE={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},SE={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xh={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},TE=["solid","regular","light","thin","duotone","brands"],kh=[1,2,3,4,5,6,7,8,9,10],xE=kh.concat([11,12,13,14,15,16,17,18,19,20]),Sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kE=[...Object.keys(EE),...TE,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sn.GROUP,Sn.SWAP_OPACITY,Sn.PRIMARY,Sn.SECONDARY].concat(kh.map(t=>"".concat(t,"x"))).concat(xE.map(t=>"w-".concat(t))),AE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},NE={kit:{"fa-kit":"fak"}},RE={kit:{fak:"fa-kit"}},ql={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ve="___FONT_AWESOME___",Tr=16,Ah="fa",Nh="svg-inline--fa",Ot="data-fa-i2svg",xr="data-fa-pseudo-element",PE="data-fa-pseudo-element-pending",Yo="data-prefix",Qo="data-icon",Gl="fontawesome-i2svg",OE="async",DE=["HTML","HEAD","STYLE","SCRIPT"],Rh=(()=>{try{return!0}catch{return!1}})(),Ph=[V,ue,de];function hs(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[V]}})}const Oh={...xh};Oh[V]={...xh[V],...Hl.kit,...Hl["kit-duotone"]};const Ct=hs(Oh),kr={...SE};kr[V]={...kr[V],...ql.kit,...ql["kit-duotone"]};const Jn=hs(kr),Ar={...CE};Ar[V]={...Ar[V],...RE.kit};const St=hs(Ar),Nr={...IE};Nr[V]={...Nr[V],...NE.kit};const LE=hs(Nr),ME=yE,Dh="fa-layers-text",FE=vE,jE={...gE};hs(jE);const UE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ki=Sn,an=new Set;Object.keys(Jn[V]).map(an.add.bind(an));Object.keys(Jn[ue]).map(an.add.bind(an));Object.keys(Jn[de]).map(an.add.bind(an));const WE=[..._E,...kE],Dn=ht.FontAwesomeConfig||{};function $E(t){var e=$.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function BE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$&&typeof $.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=BE($E(n));i!=null&&(Dn[s]=i)});const Lh={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ah,replacementClass:Nh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dn.familyPrefix&&(Dn.cssPrefix=Dn.familyPrefix);const ln={...Lh,...Dn};ln.autoReplaceSvg||(ln.observeMutations=!1);const C={};Object.keys(Lh).forEach(t=>{Object.defineProperty(C,t,{enumerable:!0,set:function(e){ln[t]=e,Ln.forEach(n=>n(C))},get:function(){return ln[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){ln.cssPrefix=t,Ln.forEach(e=>e(C))},get:function(){return ln.cssPrefix}});ht.FontAwesomeConfig=C;const Ln=[];function VE(t){return Ln.push(t),()=>{Ln.splice(Ln.indexOf(t),1)}}const Je=Tr,Se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zE(t){if(!t||!Ye)return;const e=$.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return $.head.insertBefore(e,s),t}const HE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xn(){let t=12,e="";for(;t-- >0;)e+=HE[Math.random()*62|0];return e}function gn(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jo(t){return t.classList?gn(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Mh(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qE(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Mh(t[n]),'" '),"").trim()}function Ci(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Xo(t){return t.size!==Se.size||t.x!==Se.x||t.y!==Se.y||t.rotate!==Se.rotate||t.flipX||t.flipY}function GE(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:c}}function KE(t){let{transform:e,width:n=Tr,height:s=Tr,startCentered:i=!1}=t,r="";return i&&Sh?r+="translate(".concat(e.x/Je-n/2,"em, ").concat(e.y/Je-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/Je,"em), calc(-50% + ").concat(e.y/Je,"em)) "):r+="translate(".concat(e.x/Je,"em, ").concat(e.y/Je,"em) "),r+="scale(".concat(e.size/Je*(e.flipX?-1:1),", ").concat(e.size/Je*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var YE=`:root, :host {
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
}`;function Fh(){const t=Ah,e=Nh,n=C.cssPrefix,s=C.replacementClass;let i=YE;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let Kl=!1;function Yi(){C.autoAddCss&&!Kl&&(zE(Fh()),Kl=!0)}var QE={mixout(){return{dom:{css:Fh,insertCss:Yi}}},hooks(){return{beforeDOMElementCreation(){Yi()},beforeI2svg(){Yi()}}}};const ze=ht||{};ze[Ve]||(ze[Ve]={});ze[Ve].styles||(ze[Ve].styles={});ze[Ve].hooks||(ze[Ve].hooks={});ze[Ve].shims||(ze[Ve].shims=[]);var Te=ze[Ve];const jh=[],Uh=function(){$.removeEventListener("DOMContentLoaded",Uh),Zs=1,jh.map(t=>t())};let Zs=!1;Ye&&(Zs=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),Zs||$.addEventListener("DOMContentLoaded",Uh));function JE(t){Ye&&(Zs?setTimeout(t,0):jh.push(t))}function fs(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?Mh(t):"<".concat(e," ").concat(qE(n),">").concat(s.map(fs).join(""),"</").concat(e,">")}function Yl(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Qi=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,c,u;for(s===void 0?(l=1,u=e[r[0]]):(l=0,u=s);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function XE(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Rr(t){const e=XE(t);return e.length===1?e[0].toString(16):null}function ZE(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function Ql(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function Pr(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=Ql(e);typeof Te.hooks.addPack=="function"&&!s?Te.hooks.addPack(t,Ql(e)):Te.styles[t]={...Te.styles[t]||{},...i},t==="fas"&&Pr("fa",e)}const{styles:bt,shims:eC}=Te,tC={[V]:Object.values(St[V]),[ue]:Object.values(St[ue]),[de]:Object.values(St[de])};let Zo=null,Wh={},$h={},Bh={},Vh={},zh={};const nC={[V]:Object.keys(Ct[V]),[ue]:Object.keys(Ct[ue]),[de]:Object.keys(Ct[de])};function sC(t){return~WE.indexOf(t)}function iC(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!sC(i)?i:null}const Hh=()=>{const t=s=>Qi(bt,(i,r,o)=>(i[o]=Qi(r,s,{}),i),{});Wh=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),$h=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),zh=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in bt||C.autoFetchSvg,n=Qi(eC,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Bh=n.names,Vh=n.unicodes,Zo=Si(C.styleDefault,{family:C.familyDefault})};VE(t=>{Zo=Si(t.styleDefault,{family:C.familyDefault})});Hh();function ea(t,e){return(Wh[t]||{})[e]}function rC(t,e){return($h[t]||{})[e]}function it(t,e){return(zh[t]||{})[e]}function qh(t){return Bh[t]||{prefix:null,iconName:null}}function oC(t){const e=Vh[t],n=ea("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Zo}const ta=()=>({prefix:null,iconName:null,rest:[]});function Si(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=V}=e,s=Ct[n][t],i=Jn[n][t]||Jn[n][s],r=t in Te.styles?t:null;return i||r||null}const aC={[V]:Object.keys(St[V]),[ue]:Object.keys(St[ue]),[de]:Object.keys(St[de])};function Ti(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,s={[V]:"".concat(C.cssPrefix,"-").concat(V),[ue]:"".concat(C.cssPrefix,"-").concat(ue),[de]:"".concat(C.cssPrefix,"-").concat(de)};let i=null,r=V;const o=mE.filter(l=>l!==Th);o.forEach(l=>{(t.includes(s[l])||t.some(c=>aC[l].includes(c)))&&(r=l)});const a=t.reduce((l,c)=>{const u=iC(C.cssPrefix,c);if(bt[c]?(c=tC[r].includes(c)?LE[r][c]:c,i=c,l.prefix=c):nC[r].indexOf(c)>-1?(i=c,l.prefix=Si(c,{family:r})):u?l.iconName=u:c!==C.replacementClass&&!o.some(d=>c===s[d])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const d=i==="fa"?qh(l.iconName):{},f=it(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||f||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!bt.far&&bt.fas&&!C.autoFetchSvg&&(l.prefix="fas")}return l},ta());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&r===ue&&(bt.fass||C.autoFetchSvg)&&(a.prefix="fass",a.iconName=it(a.prefix,a.iconName)||a.iconName),!a.prefix&&r===de&&(bt.fasds||C.autoFetchSvg)&&(a.prefix="fasds",a.iconName=it(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=ft()||"fas"),a}class lC{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]={...this.definitions[r]||{},...i[r]},Pr(r,i[r]);const o=St[V][r];o&&Pr(o,i[r]),Hh()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][o]=a}),e}}let Jl=[],zt={};const Jt={},cC=Object.keys(Jt);function uC(t,e){let{mixoutsTo:n}=e;return Jl=t,zt={},Object.keys(Jt).forEach(s=>{cC.indexOf(s)===-1&&delete Jt[s]}),Jl.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{zt[o]||(zt[o]=[]),zt[o].push(r[o])})}s.provides&&s.provides(Jt)}),n}function Or(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(zt[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function Dt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(zt[t]||[]).forEach(r=>{r.apply(null,n)})}function pt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Jt[t]?Jt[t].apply(null,e):void 0}function Dr(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ft();if(e)return e=it(n,e)||e,Yl(Gh.definitions,n,e)||Yl(Te.styles,n,e)}const Gh=new lC,dC=()=>{C.autoReplaceSvg=!1,C.observeMutations=!1,Dt("noAuto")},hC={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(Dt("beforeI2svg",t),pt("pseudoElements2svg",t),pt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,JE(()=>{pC({autoReplaceSvgRoot:e}),Dt("watch",t)})}},fC={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:it(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Si(t[0]);return{prefix:n,iconName:it(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(ME))){const e=Ti(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ft(),iconName:it(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ft();return{prefix:e,iconName:it(e,t)||t}}}},he={noAuto:dC,config:C,dom:hC,parse:fC,library:Gh,findIconDefinition:Dr,toHtml:fs},pC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$}=t;(Object.keys(Te.styles).length>0||C.autoFetchSvg)&&Ye&&C.autoReplaceSvg&&he.dom.i2svg({node:e})};function xi(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>fs(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Ye)return;const n=$.createElement("div");return n.innerHTML=t.html,n.children}}),t}function mC(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(Xo(o)&&n.found&&!s.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Ci({...r,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function gC(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:s}]}]}function na(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:d=!1}=t,{width:f,height:p}=n.found?n:e,m=s==="fak",y=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(k=>u.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(u.classes).join(" ");let _={children:[],attributes:{...u.attributes,"data-prefix":s,"data-icon":i,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const I=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(_.attributes[Ot]=""),a&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Xn())},children:[a]}),delete _.attributes.title);const b={..._,prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:{...I,...u.styles}},{children:w,attributes:E}=n.found&&e.found?pt("generateAbstractMask",b)||{children:[],attributes:{}}:pt("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=w,b.attributes=E,o?gC(b):mC(b)}function Xl(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l={...o.attributes,...r?{title:r}:{},class:o.classes.join(" ")};a&&(l[Ot]="");const c={...o.styles};Xo(i)&&(c.transform=KE({transform:i,startCentered:!0,width:n,height:s}),c["-webkit-transform"]=c.transform);const u=Ci(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),r&&d.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),d}function _C(t){const{content:e,title:n,extra:s}=t,i={...s.attributes,...n?{title:n}:{},class:s.classes.join(" ")},r=Ci(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ji}=Te;function Lr(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(Ki.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(Ki.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(Ki.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const yC={found:!1,width:512,height:512};function vC(t,e){!Rh&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Mr(t,e){let n=e;return e==="fa"&&C.styleDefault!==null&&(e=ft()),new Promise((s,i)=>{if(n==="fa"){const r=qh(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Ji[e]&&Ji[e][t]){const r=Ji[e][t];return s(Lr(r))}vC(t,e),s({...yC,icon:C.showMissingIcons&&t?pt("missingIconAbstract")||{}:{}})})}const Zl=()=>{},Fr=C.measurePerformance&&ys&&ys.mark&&ys.measure?ys:{mark:Zl,measure:Zl},Tn='FA "6.6.0"',bC=t=>(Fr.mark("".concat(Tn," ").concat(t," begins")),()=>Kh(t)),Kh=t=>{Fr.mark("".concat(Tn," ").concat(t," ends")),Fr.measure("".concat(Tn," ").concat(t),"".concat(Tn," ").concat(t," begins"),"".concat(Tn," ").concat(t," ends"))};var sa={begin:bC,end:Kh};const Ss=()=>{};function ec(t){return typeof(t.getAttribute?t.getAttribute(Ot):null)=="string"}function wC(t){const e=t.getAttribute?t.getAttribute(Yo):null,n=t.getAttribute?t.getAttribute(Qo):null;return e&&n}function IC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function EC(){return C.autoReplaceSvg===!0?Ts.replace:Ts[C.autoReplaceSvg]||Ts.replace}function CC(t){return $.createElementNS("http://www.w3.org/2000/svg",t)}function SC(t){return $.createElement(t)}function Yh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?CC:SC}=e;if(typeof t=="string")return $.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Yh(r,{ceFn:n}))}),s}function TC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ts={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Yh(n),e)}),e.getAttribute(Ot)===null&&C.keepOriginalSource){let n=$.createComment(TC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Jo(e).indexOf(C.replacementClass))return Ts.replace(t);const s=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===C.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>fs(r)).join(`
`);e.setAttribute(Ot,""),e.innerHTML=i}};function tc(t){t()}function Qh(t,e){const n=typeof e=="function"?e:Ss;if(t.length===0)n();else{let s=tc;C.mutateApproach===OE&&(s=ht.requestAnimationFrame||tc),s(()=>{const i=EC(),r=sa.begin("mutate");t.map(i),r(),n()})}}let ia=!1;function Jh(){ia=!0}function jr(){ia=!1}let ei=null;function nc(t){if(!zl||!C.observeMutations)return;const{treeCallback:e=Ss,nodeCallback:n=Ss,pseudoElementsCallback:s=Ss,observeMutationsRoot:i=$}=t;ei=new zl(r=>{if(ia)return;const o=ft();gn(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!ec(a.addedNodes[0])&&(C.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&C.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&ec(a.target)&&~UE.indexOf(a.attributeName))if(a.attributeName==="class"&&wC(a.target)){const{prefix:l,iconName:c}=Ti(Jo(a.target));a.target.setAttribute(Yo,l||o),c&&a.target.setAttribute(Qo,c)}else IC(a.target)&&n(a.target)})}),Ye&&ei.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xC(){ei&&ei.disconnect()}function kC(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function AC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=Ti(Jo(t));return i.prefix||(i.prefix=ft()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=rC(i.prefix,t.innerText)||ea(i.prefix,Rr(t.innerText))),!i.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function NC(t){const e=gn(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(s||Xn()):(e["aria-hidden"]="true",e.focusable="false")),e}function RC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=AC(t),r=NC(t),o=Or("parseNodeAttributes",{},t);let a=e.styleParser?kC(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r},...o}}const{styles:PC}=Te;function Xh(t){const e=C.autoReplaceSvg==="nest"?sc(t,{styleParser:!1}):sc(t);return~e.extra.classes.indexOf(Dh)?pt("generateLayersText",t,e):pt("generateSvgReplacementMutation",t,e)}let Ne=new Set;Ph.map(t=>{Ne.add("fa-".concat(t))});Object.keys(Ct[V]).map(Ne.add.bind(Ne));Object.keys(Ct[ue]).map(Ne.add.bind(Ne));Object.keys(Ct[de]).map(Ne.add.bind(Ne));Ne=[...Ne];function ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();const n=$.documentElement.classList,s=u=>n.add("".concat(Gl,"-").concat(u)),i=u=>n.remove("".concat(Gl,"-").concat(u)),r=C.autoFetchSvg?Ne:Ph.map(u=>"fa-".concat(u)).concat(Object.keys(PC));r.includes("fa")||r.push("fa");const o=[".".concat(Dh,":not([").concat(Ot,"])")].concat(r.map(u=>".".concat(u,":not([").concat(Ot,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=gn(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=sa.begin("onTree"),c=a.reduce((u,d)=>{try{const f=Xh(d);f&&u.push(f)}catch(f){Rh||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(f=>{Qh(f,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),d(f)})})}function OC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xh(t).then(n=>{n&&Qh([n],e)})}function DC(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:Dr(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Dr(i||{})),t(s,{...n,mask:i})}}const LC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Se,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:p}=t;return xi({type:"icon",...t},()=>(Dt("beforeDOMElementCreation",{iconDefinition:t,params:e}),C.autoA11y&&(o?c["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(a||Xn()):(c["aria-hidden"]="true",c.focusable="false")),na({icons:{main:Lr(p),mask:i?Lr(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...Se,...n},symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var MC={mixout(){return{icon:DC(LC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ic,t.nodeCallback=OC,t}}},provides(t){t.i2svg=function(e){const{node:n=$,callback:s=()=>{}}=e;return ic(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:d}=n;return new Promise((f,p)=>{Promise.all([Mr(s,o),c.iconName?Mr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(m=>{let[y,_]=m;f([e,na({icons:{main:y,mask:_},prefix:o,iconName:s,transform:a,symbol:l,maskId:u,title:i,titleId:r,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=Ci(o);a.length>0&&(s.style=a);let l;return Xo(r)&&(l=pt("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},FC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return xi({type:"layer"},()=>{Dt("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},jC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return xi({type:"counter",content:t},()=>(Dt("beforeDOMElementCreation",{content:t,params:e}),_C({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(C.cssPrefix,"-layers-counter"),...s]}})))}}}},UC={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Se,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return xi({type:"text",content:t},()=>(Dt("beforeDOMElementCreation",{content:t,params:e}),Xl({content:t,transform:{...Se,...n},title:s,extra:{attributes:r,styles:o,classes:["".concat(C.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(Sh){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return C.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Xl({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const WC=new RegExp('"',"ug"),rc=[1105920,1112319],oc={FontAwesome:{normal:"fas",400:"fas"},...wE,...bE,...AE},Ur=Object.keys(oc).reduce((t,e)=>(t[e.toLowerCase()]=oc[e],t),{}),$C=Object.keys(Ur).reduce((t,e)=>{const n=Ur[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function BC(t){const e=t.replace(WC,""),n=ZE(e,0),s=n>=rc[0]&&n<=rc[1],i=e.length===2?e[0]===e[1]:!1;return{value:Rr(i?e[0]:e),isSecondary:s||i}}function VC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(Ur[n]||{})[i]||$C[n]}function ac(t,e){const n="".concat(PE).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=gn(t.children).filter(f=>f.getAttribute(xr)===e)[0],a=ht.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(FE),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),s();if(c&&d!=="none"&&d!==""){const f=a.getPropertyValue("content");let p=VC(l,u);const{value:m,isSecondary:y}=BC(f),_=c[0].startsWith("FontAwesome");let I=ea(p,m),b=I;if(_){const w=oC(m);w.iconName&&w.prefix&&(I=w.iconName,p=w.prefix)}if(I&&!y&&(!o||o.getAttribute(Yo)!==p||o.getAttribute(Qo)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const w=RC(),{extra:E}=w;E.attributes[xr]=e,Mr(I,p).then(k=>{const S=na({...w,icons:{main:k,mask:ta()},prefix:p,iconName:b,extra:E,watchable:!0}),M=$.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=S.map(z=>fs(z)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function zC(t){return Promise.all([ac(t,"::before"),ac(t,"::after")])}function HC(t){return t.parentNode!==document.head&&!~DE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function lc(t){if(Ye)return new Promise((e,n)=>{const s=gn(t.querySelectorAll("*")).filter(HC).map(zC),i=sa.begin("searchPseudoElements");Jh(),Promise.all(s).then(()=>{i(),jr(),e()}).catch(()=>{i(),jr(),n()})})}var qC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=lc,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$}=e;C.searchPseudoElements&&lc(n)}}};let cc=!1;var GC={mixout(){return{dom:{unwatch(){Jh(),cc=!0}}}},hooks(){return{bootstrap(){nc(Or("mutationObserverCallbacks",{}))},noAuto(){xC()},watch(t){const{observeMutationsRoot:e}=t;cc?jr():nc(Or("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const uc=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var KC={mixout(){return{parse:{transform:t=>uc(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=uc(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},d={transform:"translate(".concat(r/2*-1," -256)")},f={outer:o,inner:u,path:d};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const Xi={x:0,y:0,width:"100%",height:"100%"};function dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function YC(t){return t.tag==="g"?t.children:[t]}var QC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?Ti(n.split(" ").map(i=>i.trim())):ta();return s.prefix||(s.prefix=ft()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:d}=r,f=GE({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...Xi,fill:"white"}},m=c.children?{children:c.children.map(dc)}:{},y={tag:"g",attributes:{...f.inner},children:[dc({tag:c.tag,attributes:{...c.attributes,...f.path},...m})]},_={tag:"g",attributes:{...f.outer},children:[y]},I="mask-".concat(o||Xn()),b="clip-".concat(o||Xn()),w={tag:"mask",attributes:{...Xi,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,_]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:YC(d)},w]};return n.push(E,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(I,")"),...Xi}}),{children:n,attributes:s}}}},JC={provides(t){let e=!1;ht.matchMedia&&(e=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...s,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const r={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...s,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...s,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...s,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},XC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},ZC=[QE,MC,FC,jC,UC,qC,GC,KC,QC,JC,XC];uC(ZC,{mixoutsTo:he});he.noAuto;he.config;he.library;he.dom;const Wr=he.parse;he.findIconDefinition;he.toHtml;const eS=he.icon;he.layer;he.text;he.counter;function hc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function Ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hc(Object(n),!0).forEach(function(s){Ht(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hc(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function ti(t){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ti(t)}function Ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tS(t,e){if(t==null)return{};var n={},s=Object.keys(t),i,r;for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nS(t,e){if(t==null)return{};var n=tS(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function $r(t){return sS(t)||iS(t)||rS(t)||oS()}function sS(t){if(Array.isArray(t))return Br(t)}function iS(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rS(t,e){if(t){if(typeof t=="string")return Br(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(t,e)}}function Br(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function oS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aS(t){var e,n=t.beat,s=t.fade,i=t.beatFade,r=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,m=t.border,y=t.listItem,_=t.flip,I=t.size,b=t.rotation,w=t.pull,E=(e={"fa-beat":n,"fa-fade":s,"fa-beat-fade":i,"fa-bounce":r,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":y,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Ht(e,"fa-".concat(I),typeof I<"u"&&I!==null),Ht(e,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),Ht(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Ht(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(k){return E[k]?k:null}).filter(function(k){return k})}function lS(t){return t=t-0,t===t}function Zh(t){return lS(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var cS=["style"];function uS(t){return t.charAt(0).toUpperCase()+t.slice(1)}function dS(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=Zh(n.slice(0,s)),r=n.slice(s+1).trim();return i.startsWith("webkit")?e[uS(i)]=r:e[i]=r,e},{})}function ef(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var s=(e.children||[]).map(function(l){return ef(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=dS(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Zh(c)]=u}return l},{attrs:{}}),r=n.style,o=r===void 0?{}:r,a=nS(n,cS);return i.attrs.style=Ee(Ee({},i.attrs.style),o),t.apply(void 0,[e.tag,Ee(Ee({},i.attrs),a)].concat($r(s)))}var tf=!1;try{tf=!0}catch{}function hS(){if(!tf&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function fc(t){if(t&&ti(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wr.icon)return Wr.icon(t);if(t===null)return null;if(t&&ti(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ht({},t,e):{}}var pc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ki=gc.forwardRef(function(t,e){var n=Ee(Ee({},pc),t),s=n.icon,i=n.mask,r=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,u=fc(s),d=Zi("classes",[].concat($r(aS(n)),$r((o||"").split(" ")))),f=Zi("transform",typeof n.transform=="string"?Wr.transform(n.transform):n.transform),p=Zi("mask",fc(i)),m=eS(u,Ee(Ee(Ee(Ee({},d),f),p),{},{symbol:r,title:a,titleId:l,maskId:c}));if(!m)return hS("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(n).forEach(function(I){pc.hasOwnProperty(I)||(_[I]=n[I])}),fS(y[0],_)});ki.displayName="FontAwesomeIcon";ki.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var fS=ef.bind(null,gc.createElement);const nf={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]};function pS(){const t=ge(),[e,n]=g.useState([]),[s,i]=g.useState(""),[r,o]=g.useState(!1),[a,l]=g.useState(null),{isDarkTheme:c}=He();g.useEffect(()=>{const b=oe(le,"categories");on(b,w=>{const E=w.val(),k=E?Object.values(E):[];n(k)})},[]);const u=b=>{t(`/item-types/${b}`)},d=()=>{t("/add-item-categories")},f=b=>{l(b),o(!0)},p=()=>{if(a){const b=oe(le,"categories");on(b,w=>{const E=w.val(),k=Object.keys(E).find(S=>E[S]===a);if(k){const S=oe(le,`categories/${k}`);Cr(S).then(()=>{console.log(`Deleted ${a} from categories`);const M=oe(le,`items/${a}`);return Cr(M)}).then(()=>{console.log(`Deleted ${a} from items`),n(M=>M.filter(z=>z!==a)),l(null),o(!1)}).catch(M=>{console.error("Error deleting category: ",M)})}},{onlyOnce:!0})}},m=()=>{l(null),o(!1)},y=e.filter(b=>b.toLowerCase().includes(s.toLowerCase())),_={color:c?"#f8f8f8":"#333"},I={backgroundColor:c?"#333":"#fff"};return h.jsxs("div",{children:[h.jsxs("div",{className:_t.search_item,children:[h.jsx("h1",{style:_,children:"Item Categories Page...."}),h.jsx("input",{type:"text",placeholder:"Search The Item",className:_t.searchBar,onChange:b=>i(b.target.value)}),h.jsx("button",{className:"add-button",onClick:d,children:"Add New Category"})]}),h.jsx("div",{className:_t.item_styles,children:y.map(b=>h.jsxs("div",{className:_t.item,children:[h.jsxs("h1",{style:_,onClick:()=>u(b),children:[" ",b," "]}),h.jsx(ki,{icon:nf,className:_t.delete_icon,onClick:()=>f(b)})]},b))}),r&&h.jsx("div",{className:_t.outer,style:_,children:h.jsxs("div",{className:_t.confirmation,style:I,children:[h.jsxs("p",{children:["Are you sure you want to delete ",a,"?"]}),h.jsx("button",{onClick:p,children:"Yes"}),h.jsx("button",{onClick:m,children:"No"})]})})]})}const mS="_confirmation_y2chg_1",gS="_outer_y2chg_53",_S="_form_group_y2chg_79",yS="_form_container_y2chg_113",vs={confirmation:mS,outer:gS,form_group:_S,form_container:yS};function vS(){const t=ge(),[e,n]=g.useState(""),[s,i]=g.useState(!1),{isDarkTheme:r}=He(),o={color:r?"#f8f8f8":"#333"},a={backgroundColor:r?"#333":"#fff"},l=()=>e.trim().length>0,c=f=>{f.preventDefault(),i(!0)},u=async()=>{const f=oe(le,"categories");await _h(f,e),t("/item-categories")},d=()=>{i(!1)};return h.jsx("div",{children:h.jsxs("div",{className:vs.form_container,children:[h.jsx("h1",{style:o,children:"Add Item Category"}),h.jsxs("form",{onSubmit:c,style:a,children:[h.jsxs("div",{className:vs.form_group,children:[h.jsx("label",{htmlFor:"Cat_name",style:{color:r?"#f8f8f8":"#333"},children:"Enter Category Name :"}),h.jsx("input",{type:"text",placeholder:"Enter Category Name",id:"Cat_name",name:"new_category",value:e,onChange:f=>n(f.target.value)})]}),h.jsx("div",{children:h.jsx("button",{disabled:!l(),children:"Save"})}),s&&h.jsx(h.Fragment,{children:h.jsx("div",{className:vs.outer,style:o,children:h.jsxs("div",{className:vs.confirmation,style:a,children:[h.jsx("p",{children:"Do you want to confirm saving this new category?"}),h.jsx("button",{onClick:u,children:"Yes"}),h.jsx("button",{onClick:d,children:"No"})]})})})]})]})})}const bS="_item_styles_1dii5_15",wS="_item_container_1dii5_31",IS="_item_1dii5_15",ES="_image_style_1dii5_133",CS="_delete_icon_container_1dii5_167",SS="_delete_icon_1dii5_167",TS="_search_item_1dii5_205",xS="_searchBar_1dii5_233",kS="_confirmation_1dii5_307",AS="_outer_1dii5_361",Ie={item_styles:bS,item_container:wS,item:IS,image_style:ES,delete_icon_container:CS,delete_icon:SS,search_item:TS,searchBar:xS,confirmation:kS,outer:AS};function NS(){const t=ge(),{category:e}=ii(),[n,s]=g.useState([]),[i,r]=g.useState(""),[o,a]=g.useState(!1),[l,c]=g.useState(null),{isDarkTheme:u}=He(),d={color:u?"#f8f8f8":"#333"},f={backgroundColor:u?"#333":"#fff"};g.useEffect(()=>{const E=oe(le,`items/${e}`);on(E,k=>{const S=k.val(),M=S?Object.keys(S).map(z=>({id:z,...S[z]})):[];s(M)})},[e]);const p=()=>{t(`/add-item-type/${e}`)},m=()=>{t("/item-categories")},y=async()=>{if(l){const E=oe(le,`items/${e}/${l}`);try{await Cr(E),s(k=>k.filter(S=>S.id!==l)),console.log(`Deleted item: ${l}`)}catch(k){console.error("Error deleting item: ",k)}finally{c(null),a(!1)}}},_=E=>{t(`/details/${e}/${E}`)},I=n.filter(E=>E.name.toLowerCase().includes(i.toLowerCase())),b=E=>{c(E),a(!0)},w=()=>{c(null),a(!1)};return h.jsxs("div",{children:[h.jsxs("div",{className:Ie.search_item,children:[h.jsx("button",{onClick:m,className:"styles.backbutton",children:"Back"}),h.jsxs("h1",{style:d,children:["Items in ",e]}),h.jsx("input",{type:"text",placeholder:"Search the item",className:Ie.searchBar,onChange:E=>r(E.target.value)}),h.jsx("button",{onClick:p,children:"Add New Item"})]}),h.jsx("div",{className:Ie.item_styles,children:I.map(E=>h.jsxs("div",{className:Ie.item_container,style:f,children:[h.jsxs("div",{className:Ie.item,onClick:()=>_(E.name),children:[h.jsx("div",{style:{fontSize:"20px",fontWeight:"bold"},children:E.name}),h.jsx("img",{className:Ie.image_style,src:E.image,alt:"Item"}),h.jsxs("strong",{children:["$",E.price]})]}),h.jsx("div",{className:Ie.delete_icon_container,children:h.jsx(ki,{icon:nf,className:Ie.delete_icon,onClick:()=>b(E.id)})})]},E.id))}),o&&h.jsx("div",{className:Ie.outer,style:d,children:h.jsxs("div",{className:Ie.confirmation,style:f,children:[h.jsx("p",{children:"Deleting this item is permanent. Proceed?"}),h.jsx("button",{onClick:y,children:"Yes"}),h.jsx("button",{onClick:w,children:"No"})]})})]})}const RS="_form_container_lywez_1",PS="_form_group_lywez_29",OS="_custom_dropdown_lywez_65",DS="_dropdown_list_lywez_91",LS="_dropdown_item_lywez_119",MS="_submit_button_lywez_143",FS="_cancel_button_lywez_165",jS="_confirmation_lywez_193",US="_outer_lywez_247",D={form_container:RS,form_group:PS,custom_dropdown:OS,dropdown_list:DS,dropdown_item:LS,submit_button:MS,cancel_button:FS,confirmation:jS,outer:US};function WS(){const t=ge(),{categorys:e}=ii(),[n,s]=g.useState(""),[i,r]=g.useState([]),[o,a]=g.useState([]),[l,c]=g.useState(""),[u,d]=g.useState(!1),[f,p]=g.useState(""),[m,y]=g.useState(""),[_,I]=g.useState(""),[b,w]=g.useState(""),[E,k]=g.useState(""),[S,M]=g.useState(""),[z,Oe]=g.useState(""),[Wt,rf]=g.useState(""),[of,ra]=g.useState(!1),{isDarkTheme:oa}=He(),aa={backgroundColor:oa?"#333":"#fff"},la={color:oa?"#f8f8f8":"#333"};g.useEffect(()=>{const O=oe(le,"categories");on(O,Ai=>{const ps=Ai.val(),ca=ps?Object.values(ps):[];r(ca),a(ca)})},[]),g.useEffect(()=>{a(i.filter(O=>O.toLowerCase().includes(l.toLowerCase())))},[l,i]);const af=async O=>{O.preventDefault();const Ai={category:n,name:f,price:S,stock:m,manufacturer:_,image:b,desc:E,dimension:z,warranty:Wt};try{await _h(oe(le,`items/${n}`),Ai),t(`/item-types/${n}`)}catch(ps){console.error("Error adding item to Firebase:",ps)}},lf=()=>{t(`/item-types/${e}`)},cf=O=>{s(O),c(O),d(!1)},uf=O=>{O.preventDefault(),ra(!0)},df=()=>{ra(!1)},hf=n.trim()!==""&&f.trim()!=="";return h.jsxs("div",{className:D.form_container,children:[h.jsx("h1",{style:la,children:"Add New Item"}),h.jsxs("form",{onSubmit:uf,style:aa,children:[h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"category_name",children:"Category Name:"}),h.jsxs("div",{className:D.custom_dropdown,children:[h.jsx("input",{type:"text",placeholder:"Select or search categories...",value:l,onChange:O=>{c(O.target.value),d(!0)},onFocus:()=>d(!0)}),u&&h.jsx("div",{className:D.dropdown_list,children:o.length>0?o.map(O=>h.jsx("div",{className:D.dropdown_item,onClick:()=>cf(O),children:O},O)):h.jsx("div",{className:D.dropdown_item,children:"No categories found"})})]})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"item_type",children:"Item Name:"}),h.jsx("input",{type:"text",id:"item_type",value:f,onChange:O=>p(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"item_price",children:"Item Price:"}),h.jsx("input",{type:"number",id:"item_price",value:S,onChange:O=>M(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"item_stock",children:"Item Stock:"}),h.jsx("input",{type:"number",id:"item_stock",value:m,onChange:O=>y(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"item_desc",children:"Decription:"}),h.jsx("input",{type:"text",id:"item_desc",value:E,onChange:O=>k(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"item_manufacturer",children:"Manufacturer:"}),h.jsx("input",{type:"text",id:"item_manufacturer",value:_,onChange:O=>I(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"dimension",children:"Dimensions and weight:"}),h.jsx("input",{type:"text",id:"dimension",value:z,onChange:O=>Oe(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"warranty",children:"Warranty:"}),h.jsx("input",{type:"text",id:"warranty",value:Wt,onChange:O=>rf(O.target.value)})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"item_image",children:"Image URL:"}),h.jsx("input",{type:"text",id:"item_image",value:b,onChange:O=>w(O.target.value)})]}),h.jsx("button",{type:"submit",className:D.submit_button,disabled:!hf,children:"Add New Item"}),h.jsx("button",{type:"button",onClick:lf,className:D.cancel_button,children:"Cancel"})]}),of&&h.jsx(h.Fragment,{children:h.jsx("div",{className:D.outer,style:la,children:h.jsxs("div",{className:D.confirmation,style:aa,children:[h.jsx("p",{children:"Do you want to confirm saving this new item?"}),h.jsx("button",{onClick:af,children:"Yes"}),h.jsx("button",{onClick:df,children:"No"})]})})})]})}const $S="_details_wrapper_116sh_29",BS="_details_heading_116sh_85",VS="_details_content_116sh_105",zS="_details_image_116sh_153",HS="_details_buttons_116sh_179",wn={details_wrapper:$S,details_heading:BS,details_content:VS,details_image:zS,details_buttons:HS};function qS(){const{item:t,category:e}=ii(),n=ge(),[s,i]=g.useState(null),[r,o]=g.useState(!0),[a,l]=g.useState(null),{isDarkTheme:c}=He(),u={color:c?"#f8f8f8":"#333"};g.useEffect(()=>{const p=oe(bh());console.log("Fetching details for:",{category:e,item:t}),vh(rn(p,`items/${e}`)).then(m=>{if(m.exists()){const y=m.val(),_=Object.entries(y).find(([I,b])=>b.name.trim().toLowerCase()===t.trim().toLowerCase());if(_){const[I,b]=_;i(b),l(I)}else console.log("Item not found in category."),i(null)}else console.log("No data available for this category."),i(null);o(!1)}).catch(m=>{console.error("Error fetching data: ",m),o(!1)})},[e,t]);const d=()=>{n(`/item-types/${e}`)},f=()=>{a?n(`/editdetails/${e}/${a}`):console.error("Item ID is undefined.")};return r?h.jsx("div",{children:"Loading..."}):s?h.jsxs("div",{className:wn.details_wrapper,style:u,children:[h.jsxs("div",{className:wn.details_buttons,children:[h.jsx("button",{onClick:d,children:"Back"}),h.jsx("button",{onClick:f,children:"Edit Item Details"})]}),h.jsxs("h1",{style:u,className:wn.details_heading,children:["Item Details: ",s.name]}),h.jsxs("div",{className:wn.details_content,children:[h.jsxs("p",{children:[h.jsx("span",{children:"Item Category:"})," ",s.category]}),h.jsxs("p",{children:[h.jsx("span",{children:"Item Name:"})," ",s.name]}),h.jsxs("p",{children:[h.jsx("span",{children:"Item Price:"})," ",s.price,"$"]}),h.jsxs("p",{children:[h.jsx("span",{children:"Item Stock:"})," ",s.stock]}),h.jsxs("p",{children:[h.jsx("span",{children:"Description:"})," ",s.desc]}),h.jsxs("p",{children:[h.jsx("span",{children:"Manufacturer:"})," ",s.manufacturer]}),h.jsxs("p",{children:[h.jsx("span",{children:"Dimensions & Weight:"})," ",s.dimension]}),h.jsxs("p",{children:[h.jsx("span",{children:"Warranty:"})," ",s.warranty]})]}),s.image&&h.jsx("div",{className:wn.details_image,children:h.jsx("img",{src:s.image,alt:`${s.name}`})})]}):h.jsx("div",{children:"Item not found."})}function GS(){const{category:t,itemId:e}=ii(),[n,s]=g.useState({name:"",price:"",stock:"",desc:"",manufacturer:"",dimension:"",warranty:"",image:""}),[i,r]=g.useState(!0),[o,a]=g.useState(null),[l,c]=g.useState(!1),u=ge(),{isDarkTheme:d}=He(),f={color:d?"#f8f8f8":"#333"},p={backgroundColor:d?"#333":"#fff"};g.useEffect(()=>{(async()=>{try{const E=oe(le,`items/${t}/${e}`),k=await vh(E);k.exists()?s(k.val()):a("Item not found.")}catch{a("Failed to load item details.")}finally{r(!1)}})()},[t,e]);const m=w=>{const{name:E,value:k}=w.target;s(S=>({...S,[E]:k}))},y=async()=>{try{const w=oe(le,`items/${t}/${e}`);await GI(w,n),u(`/details/${t}/${n.name}`)}catch{a("Failed to save changes.")}},_=()=>u(`/details/${t}/${n.name}`),I=()=>c(!1),b=w=>{w.preventDefault(),c(!0)};return i?h.jsx("p",{children:"Loading item details..."}):o?h.jsx("p",{className:D.error,children:o}):h.jsxs("div",{className:D.form_container,children:[h.jsx("h1",{style:f,children:"Edit Item Details"}),h.jsxs("form",{onSubmit:b,style:p,children:[h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"name",children:"Item Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"price",children:"Item Price:"}),h.jsx("input",{type:"number",id:"price",name:"price",value:n.price,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"stock",children:"Item Stock:"}),h.jsx("input",{type:"number",id:"stock",name:"stock",value:n.stock,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"desc",children:"Description:"}),h.jsx("input",{type:"text",id:"desc",name:"desc",value:n.desc,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"manufacturer",children:"Manufacturer:"}),h.jsx("input",{type:"text",id:"manufacturer",name:"manufacturer",value:n.manufacturer,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"dimension",children:"Dimensions and Weight:"}),h.jsx("input",{type:"text",id:"dimension",name:"dimension",value:n.dimension,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"warranty",children:"Warranty:"}),h.jsx("input",{type:"text",id:"warranty",name:"warranty",value:n.warranty,onChange:m})]}),h.jsxs("div",{className:D.form_group,children:[h.jsx("label",{htmlFor:"image",children:"Image URL:"}),h.jsx("input",{type:"text",id:"image",name:"image",value:n.image,onChange:m})]}),h.jsx("button",{type:"submit",className:D.submit_button,children:"Save"}),h.jsx("button",{type:"button",onClick:_,className:D.cancel_button,children:"Cancel"})]}),l&&h.jsx("div",{className:D.outer,style:f,children:h.jsxs("div",{className:D.confirmation,style:p,children:[h.jsx("p",{style:f,children:"Do you want to confirm these changes?"}),h.jsx("button",{onClick:y,children:"Yes"}),h.jsx("button",{onClick:I,children:"No"})]})})]})}const KS="_App_1g683_3",YS="_input_group_1g683_41",QS="_btn_style_1g683_97",JS="_message_1g683_133",XS="_back_to_login_1g683_149",In={App:KS,input_group:YS,btn_style:QS,message:JS,back_to_login:XS};function mc(){const[t,e]=g.useState(""),[n,s]=g.useState(""),i=ge(),r=async o=>{o.preventDefault();const a=sd();try{await Ny(a,t),s("Password reset email sent successfully. Please check your inbox.")}catch(l){s(`Error: ${l.message}`)}};return h.jsxs("div",{className:In.App,children:[h.jsx("h1",{children:"Forgot Password"}),h.jsxs("form",{onSubmit:r,children:[h.jsxs("div",{className:In.input_group,children:[h.jsx("label",{htmlFor:"email",children:"Email"}),h.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:t,onChange:o=>e(o.target.value)})]}),h.jsx("div",{className:In.btn_style,children:h.jsx("button",{type:"submit",children:"Send Reset Email"})}),n&&h.jsx("div",{className:In.message,children:n})]}),h.jsx("button",{className:In.back_to_login,onClick:()=>i("/"),children:"Back to Login"})]})}function sf(){const[t,e]=g.useState({}),[n,s]=g.useState(0),[i,r]=g.useState(0),[o,a]=g.useState(!0),{isDarkTheme:l}=He(),c={color:l?"#f8f8f8":"#333"};return g.useEffect(()=>{const u=oe(le,"items"),d=oe(le,"categories"),f=m=>{const y=m.val();if(y){const _={};let I=0;for(let b in y){const w=y[b]||{},E=Object.keys(w).length;_[b]={itemCount:E,items:w},I+=E}e(_),s(I)}else e({}),s(0);a(!1)};on(d,m=>{const y=m.val();r(y?Object.keys(y).length:0)},m=>{console.error("Error fetching categories:",m)}),on(u,f,m=>{console.error("Error fetching items:",m),a(!1)})},[]),o?h.jsx("p",{children:"Loading inventory..."}):h.jsxs("div",{style:c,children:[h.jsxs("h1",{style:c,children:["Total Categories: ",i]})," ",h.jsxs("h2",{children:["Total Items in Inventory: ",n]}),h.jsx("h3",{children:"Items by Category:"}),Object.keys(t).length>0?h.jsx("ul",{children:Object.entries(t).map(([u,{itemCount:d,items:f}])=>h.jsxs("li",{children:[h.jsxs("strong",{children:[u,":"]})," ",d," items",h.jsx("ul",{children:Object.entries(f).map(([p,m])=>h.jsxs("li",{children:[h.jsx("strong",{children:m.name}),": Stock - ",m.stock," "]},p))})]},u))}):h.jsx("p",{children:"No items found."})]})}const ZS=({onLogout:t})=>{const e=ge(),{isDarkTheme:n,toggleTheme:s}=He(),[i,r]=g.useState(!1),[o,a]=g.useState(!1),l=()=>{e("/inventory")},c=async()=>{try{await Ly(Go),t(),e("/")}catch(y){console.error("Logout error:",y)}},u=()=>{e("/item-categories")},d=y=>{y.preventDefault(),r(!0)},f=()=>{r(!1)},p={color:n?"#f8f8f8":"#333"},m={backgroundColor:n?"#333":"#fff"};return h.jsxs("header",{className:"header-container",children:[h.jsx("button",{className:"header-button",onClick:u,children:"Home"}),h.jsx("button",{className:"header-button",onClick:l,children:"Count "}),o&&h.jsx(sf,{}),h.jsx("button",{className:"header-button",onClick:s,children:n?"Light Mode":"Dark Mode"}),h.jsx("button",{className:"header-button",onClick:d,children:"Logout"}),i&&h.jsx("div",{className:"confirmation-overlay",style:p,children:h.jsxs("div",{className:"confirmation-modal",style:m,children:[h.jsx("p",{children:"Are you sure you want to log out?"}),h.jsx("button",{onClick:c,children:"Yes"}),h.jsx("button",{onClick:f,children:"No"})]})})]})},eT=({children:t,isLoggedIn:e,onLogout:n})=>{const{isDarkTheme:s}=He(),i={backgroundColor:s?"#333":"#f8f8f8",color:s?"#f8f8f8":"#333",minHeight:"100vh",width:"100vw",margin:0,padding:0,overflowX:"hidden"};return h.jsxs("div",{style:i,children:[e&&h.jsx(ZS,{onLogout:n}),h.jsx("main",{children:t})," "]})};function tT(){const[t,e]=g.useState(()=>localStorage.getItem("isLoggedIn")==="true"),n=()=>{e(!0),localStorage.setItem("isLoggedIn","true")},s=()=>{e(!1),localStorage.removeItem("isLoggedIn")},[i,r]=g.useState([]),o=f=>{r(p=>[...p,f])},a=f=>{const p=i.filter(m=>m!==f);r(p)},l=[{}],c=(f,p)=>{switch(p.type){case"addItem":return[...f,p.payload];case"editItem":return f.map(m=>m.id===p.payload.id?{...p.payload}:m);default:return f}},[u,d]=g.useReducer(c,l);return h.jsx(Lf,{children:h.jsx(Tp,{children:t?h.jsx(eT,{isLoggedIn:t,onLogout:s,children:h.jsxs(va,{children:[h.jsx(te,{path:"/item-categories",element:h.jsx(pS,{categories:i,handleDelete:a})}),h.jsx(te,{path:"/add-item-categories",element:h.jsx(vS,{addCategory:o})}),h.jsx(te,{path:"/item-types/:category",element:h.jsx(NS,{items:u})}),h.jsx(te,{path:"/add-item-type/:categorys",element:h.jsx(WS,{addItem:f=>d({type:"addItem",payload:f})})}),h.jsx(te,{path:"/details/:category/:item",element:h.jsx(qS,{items:u})}),h.jsx(te,{path:"/editdetails/:category/:itemId",element:h.jsx(GS,{})}),h.jsx(te,{path:"/inventory",element:h.jsx(sf,{})}),h.jsx(te,{path:"/forgot-password",element:h.jsx(mc,{})}),h.jsx(te,{path:"*",element:h.jsx(ya,{to:"/item-categories"})})," "]})}):h.jsxs(va,{children:[h.jsx(te,{path:"/",element:h.jsx(wh,{onLogin:n})}),h.jsx(te,{path:"/create-account",element:h.jsx(oE,{})}),h.jsx(te,{path:"/account_success",element:h.jsx(aE,{})}),h.jsx(te,{path:"/forgot-password",element:h.jsx(mc,{})}),h.jsx(te,{path:"*",element:h.jsx(ya,{to:"/"})})," "]})})})}vc(document.getElementById("root")).render(h.jsx(g.StrictMode,{children:h.jsx(tT,{})}));
