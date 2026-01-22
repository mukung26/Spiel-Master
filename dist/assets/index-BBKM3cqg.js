(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},au={},p0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),pS=Symbol.for("react.portal"),gS=Symbol.for("react.fragment"),mS=Symbol.for("react.strict_mode"),vS=Symbol.for("react.profiler"),_S=Symbol.for("react.provider"),yS=Symbol.for("react.context"),wS=Symbol.for("react.forward_ref"),ES=Symbol.for("react.suspense"),xS=Symbol.for("react.memo"),bS=Symbol.for("react.lazy"),hm=Symbol.iterator;function IS(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var g0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,v0={};function qs(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||g0}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _0(){}_0.prototype=qs.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||g0}var Kf=Yf.prototype=new _0;Kf.constructor=Yf;m0(Kf,qs.prototype);Kf.isPureReactComponent=!0;var fm=Array.isArray,y0=Object.prototype.hasOwnProperty,qf={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y0.call(e,r)&&!w0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Va,type:t,key:s,ref:o,props:i,_owner:qf.current}}function SS(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function kS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function dd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kS(""+t.key):e.toString(36)}function Vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Va:case pS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dd(o,0):r,fm(i)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Vl(i,e,n,"",function(c){return c})):i!=null&&(Qf(i)&&(i=SS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+dd(s,a);o+=Vl(s,e,n,l,i)}else if(l=IS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+dd(s,a++),o+=Vl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(t,e,n){if(t==null)return t;var r=[],i=0;return Vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Wl={transition:null},CS={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:qf};function x0(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ml,forEach:function(t,e,n){ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ml(t,function(){e++}),e},toArray:function(t){return ml(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=qs;X.Fragment=gS;X.Profiler=vS;X.PureComponent=Yf;X.StrictMode=mS;X.Suspense=ES;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;X.act=x0;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=m0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)y0.call(e,l)&&!w0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Va,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:yS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_S,_context:t},t.Consumer=t};X.createElement=E0;X.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:wS,render:t}};X.isValidElement=Qf;X.lazy=function(t){return{$$typeof:bS,_payload:{_status:-1,_result:t},_init:TS}};X.memo=function(t,e){return{$$typeof:xS,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};X.unstable_act=x0;X.useCallback=function(t,e){return yt.current.useCallback(t,e)};X.useContext=function(t){return yt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};X.useEffect=function(t,e){return yt.current.useEffect(t,e)};X.useId=function(){return yt.current.useId()};X.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return yt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};X.useRef=function(t){return yt.current.useRef(t)};X.useState=function(t){return yt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return yt.current.useTransition()};X.version="18.3.1";p0.exports=X;var y=p0.exports;const gt=fS(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NS=y,RS=Symbol.for("react.element"),AS=Symbol.for("react.fragment"),OS=Object.prototype.hasOwnProperty,PS=NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DS={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OS.call(e,r)&&!DS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RS,type:t,key:s,ref:o,props:i,_owner:PS.current}}au.Fragment=AS;au.jsx=b0;au.jsxs=b0;f0.exports=au;var u=f0.exports,lh={},I0={exports:{}},Kt={},S0={exports:{}},k0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var I=D.length;D.push(N);e:for(;0<I;){var F=I-1>>>1,z=D[F];if(0<i(z,N))D[F]=N,D[I]=z,I=F;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var N=D[0],I=D.pop();if(I!==N){D[0]=I;e:for(var F=0,z=D.length,U=z>>>1;F<U;){var oe=2*(F+1)-1,ce=D[oe],te=oe+1,Re=D[te];if(0>i(ce,I))te<z&&0>i(Re,ce)?(D[F]=Re,D[te]=I,F=te):(D[F]=ce,D[oe]=I,F=oe);else if(te<z&&0>i(Re,I))D[F]=Re,D[te]=I,F=te;else break e}}return N}function i(D,N){var I=D.sortIndex-N.sortIndex;return I!==0?I:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,g=!1,_=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=D)r(c),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(c)}}function x(D){if(w=!1,m(D),!_)if(n(l)!==null)_=!0,Le(k);else{var N=n(c);N!==null&&G(x,N.startTime-D)}}function k(D,N){_=!1,w&&(w=!1,v(S),S=-1),g=!0;var I=f;try{for(m(N),d=n(l);d!==null&&(!(d.expirationTime>N)||D&&!L());){var F=d.callback;if(typeof F=="function"){d.callback=null,f=d.priorityLevel;var z=F(d.expirationTime<=N);N=t.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&r(l),m(N)}else r(l);d=n(l)}if(d!==null)var U=!0;else{var oe=n(c);oe!==null&&G(x,oe.startTime-N),U=!1}return U}finally{d=null,f=I,g=!1}}var b=!1,T=null,S=-1,C=5,R=-1;function L(){return!(t.unstable_now()-R<C)}function B(){if(T!==null){var D=t.unstable_now();R=D;var N=!0;try{N=T(!0,D)}finally{N?J():(b=!1,T=null)}}else b=!1}var J;if(typeof p=="function")J=function(){p(B)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Oe=Z.port2;Z.port1.onmessage=B,J=function(){Oe.postMessage(null)}}else J=function(){E(B,0)};function Le(D){T=D,b||(b=!0,J())}function G(D,N){S=E(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Le(k))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var I=f;f=N;try{return D()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=f;f=D;try{return N()}finally{f=I}},t.unstable_scheduleCallback=function(D,N,I){var F=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?F+I:F):I=F,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=I+z,D={id:h++,callback:N,priorityLevel:D,startTime:I,expirationTime:z,sortIndex:-1},I>F?(D.sortIndex=I,e(c,D),n(l)===null&&D===n(c)&&(w?(v(S),S=-1):w=!0,G(x,I-F))):(D.sortIndex=z,e(l,D),_||g||(_=!0,Le(k))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var N=f;return function(){var I=f;f=N;try{return D.apply(this,arguments)}finally{f=I}}}})(k0);S0.exports=k0;var LS=S0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MS=y,$t=LS;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,sa={};function zi(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(sa[t]=e,t=0;t<e.length;t++)T0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ch=Object.prototype.hasOwnProperty,jS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gm={},mm={};function US(t){return ch.call(mm,t)?!0:ch.call(gm,t)?!1:jS.test(t)?mm[t]=!0:(gm[t]=!0,!1)}function FS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zS(t,e,n,r){if(e===null||typeof e>"u"||FS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Xf);nt[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Xf);nt[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Xf);nt[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zf(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zS(e,n,i,r)&&(n=null),r||i===null?US(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=MS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),rs=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),dh=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),vm=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=vm&&t[vm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,hd;function Oo(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var fd=!1;function pd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function BS(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case rs:return"Portal";case uh:return"Profiler";case ep:return"StrictMode";case dh:return"Suspense";case hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case C0:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function HS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VS(t){var e=A0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=VS(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&Zf(t,"checked",e,!1)}function gh(t,e){P0(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Po(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function D0(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,M0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WS=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(t){WS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fo[e]=Fo[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fo.hasOwnProperty(t)&&Fo[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $S=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yh(t,e){if(e){if($S[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=null;function rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xh=null,ys=null,ws=null;function xm(t){if(t=Ga(t)){if(typeof xh!="function")throw Error(A(280));var e=t.stateNode;e&&(e=hu(e),xh(t.stateNode,t.type,e))}}function F0(t){ys?ws?ws.push(t):ws=[t]:ys=t}function z0(){if(ys){var t=ys,e=ws;if(ws=ys=null,xm(t),e)for(t=0;t<e.length;t++)xm(e[t])}}function B0(t,e){return t(e)}function H0(){}var gd=!1;function V0(t,e,n){if(gd)return t(e,n);gd=!0;try{return B0(t,e,n)}finally{gd=!1,(ys!==null||ws!==null)&&(H0(),z0())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var bh=!1;if(ur)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){bh=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{bh=!1}function GS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var zo=!1,ac=null,lc=!1,Ih=null,YS={onError:function(t){zo=!0,ac=t}};function KS(t,e,n,r,i,s,o,a,l){zo=!1,ac=null,GS.apply(YS,arguments)}function qS(t,e,n,r,i,s,o,a,l){if(KS.apply(this,arguments),zo){if(zo){var c=ac;zo=!1,ac=null}else throw Error(A(198));lc||(lc=!0,Ih=c)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(Bi(t)!==t)throw Error(A(188))}function QS(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bm(i),t;if(s===r)return bm(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function $0(t){return t=QS(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=$t.unstable_scheduleCallback,Im=$t.unstable_cancelCallback,JS=$t.unstable_shouldYield,XS=$t.unstable_requestPaint,Ae=$t.unstable_now,ZS=$t.unstable_getCurrentPriorityLevel,ip=$t.unstable_ImmediatePriority,K0=$t.unstable_UserBlockingPriority,cc=$t.unstable_NormalPriority,ek=$t.unstable_LowPriority,q0=$t.unstable_IdlePriority,lu=null,Bn=null;function tk(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:ik,nk=Math.log,rk=Math.LN2;function ik(t){return t>>>=0,t===0?32:31-(nk(t)/rk|0)|0}var wl=64,El=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Do(a):(s&=o,s!==0&&(r=Do(s)))}else o=n&~i,o!==0?r=Do(o):s!==0&&(r=Do(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function sk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ok(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q0(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function ak(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X0,op,Z0,ew,tw,kh=!1,xl=[],Lr=null,Mr=null,jr=null,la=new Map,ca=new Map,Cr=[],lk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function _o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ga(e),e!==null&&op(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ck(t,e,n,r,i){switch(e){case"focusin":return Lr=_o(Lr,t,e,n,r,i),!0;case"dragenter":return Mr=_o(Mr,t,e,n,r,i),!0;case"mouseover":return jr=_o(jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return la.set(s,_o(la.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ca.set(s,_o(ca.get(s)||null,t,e,n,r,i)),!0}return!1}function nw(t){var e=mi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,tw(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Eh=r,n.target.dispatchEvent(r),Eh=null}else return e=Ga(n),e!==null&&op(e),t.blockedOn=n,!1;e.shift()}return!0}function km(t,e,n){$l(t)&&n.delete(e)}function uk(){kh=!1,Lr!==null&&$l(Lr)&&(Lr=null),Mr!==null&&$l(Mr)&&(Mr=null),jr!==null&&$l(jr)&&(jr=null),la.forEach(km),ca.forEach(km)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,uk)))}function ua(t){function e(i){return yo(i,t)}if(0<xl.length){yo(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&yo(Lr,t),Mr!==null&&yo(Mr,t),jr!==null&&yo(jr,t),la.forEach(e),ca.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)nw(n),n.blockedOn===null&&Cr.shift()}var Es=vr.ReactCurrentBatchConfig,dc=!0;function dk(t,e,n,r){var i=le,s=Es.transition;Es.transition=null;try{le=1,ap(t,e,n,r)}finally{le=i,Es.transition=s}}function hk(t,e,n,r){var i=le,s=Es.transition;Es.transition=null;try{le=4,ap(t,e,n,r)}finally{le=i,Es.transition=s}}function ap(t,e,n,r){if(dc){var i=Th(t,e,n,r);if(i===null)kd(t,e,r,hc,n),Sm(t,r);else if(ck(i,t,e,n,r))r.stopPropagation();else if(Sm(t,r),e&4&&-1<lk.indexOf(t)){for(;i!==null;){var s=Ga(i);if(s!==null&&X0(s),s=Th(t,e,n,r),s===null&&kd(t,e,r,hc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kd(t,e,r,null,n)}}var hc=null;function Th(t,e,n,r){if(hc=null,t=rp(r),t=mi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZS()){case ip:return 1;case K0:return 4;case cc:case ek:return 16;case q0:return 536870912;default:return 16}default:return 16}}var Rr=null,lp=null,Gl=null;function iw(){if(Gl)return Gl;var t,e=lp,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function Tm(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:Tm,this.isPropagationStopped=Tm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=qt(Qs),$a=Ie({},Qs,{view:0,detail:0}),fk=qt($a),vd,_d,wo,cu=Ie({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(vd=t.screenX-wo.screenX,_d=t.screenY-wo.screenY):_d=vd=0,wo=t),vd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),Cm=qt(cu),pk=Ie({},cu,{dataTransfer:0}),gk=qt(pk),mk=Ie({},$a,{relatedTarget:0}),yd=qt(mk),vk=Ie({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),_k=qt(vk),yk=Ie({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wk=qt(yk),Ek=Ie({},Qs,{data:0}),Nm=qt(Ek),xk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ik={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ik[t])?!!e[t]:!1}function up(){return Sk}var kk=Ie({},$a,{key:function(t){if(t.key){var e=xk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tk=qt(kk),Ck=Ie({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=qt(Ck),Nk=Ie({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),Rk=qt(Nk),Ak=Ie({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ok=qt(Ak),Pk=Ie({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=qt(Pk),Lk=[9,13,27,32],dp=ur&&"CompositionEvent"in window,Bo=null;ur&&"documentMode"in document&&(Bo=document.documentMode);var Mk=ur&&"TextEvent"in window&&!Bo,sw=ur&&(!dp||Bo&&8<Bo&&11>=Bo),Am=" ",Om=!1;function ow(t,e){switch(t){case"keyup":return Lk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function jk(t,e){switch(t){case"compositionend":return aw(e);case"keypress":return e.which!==32?null:(Om=!0,Am);case"textInput":return t=e.data,t===Am&&Om?null:t;default:return null}}function Uk(t,e){if(ss)return t==="compositionend"||!dp&&ow(t,e)?(t=iw(),Gl=lp=Rr=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sw&&e.locale!=="ko"?null:e.data;default:return null}}var Fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fk[t.type]:e==="textarea"}function lw(t,e,n,r){F0(r),e=fc(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ho=null,da=null;function zk(t){yw(t,0)}function uu(t){var e=ls(t);if(O0(e))return t}function Bk(t,e){if(t==="change")return e}var cw=!1;if(ur){var wd;if(ur){var Ed="oninput"in document;if(!Ed){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),Ed=typeof Dm.oninput=="function"}wd=Ed}else wd=!1;cw=wd&&(!document.documentMode||9<document.documentMode)}function Lm(){Ho&&(Ho.detachEvent("onpropertychange",uw),da=Ho=null)}function uw(t){if(t.propertyName==="value"&&uu(da)){var e=[];lw(e,da,t,rp(t)),V0(zk,e)}}function Hk(t,e,n){t==="focusin"?(Lm(),Ho=e,da=n,Ho.attachEvent("onpropertychange",uw)):t==="focusout"&&Lm()}function Vk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uu(da)}function Wk(t,e){if(t==="click")return uu(e)}function $k(t,e){if(t==="input"||t==="change")return uu(e)}function Gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:Gk;function ha(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ch.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function dw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hw(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yk(t){var e=hw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dw(n.ownerDocument.documentElement,n)){if(r!==null&&hp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jm(n,s);var o=jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kk=ur&&"documentMode"in document&&11>=document.documentMode,os=null,Ch=null,Vo=null,Nh=!1;function Um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||os==null||os!==oc(r)||(r=os,"selectionStart"in r&&hp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ha(Vo,r)||(Vo=r,r=fc(Ch,"onSelect"),0<r.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=os)))}function Il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},xd={},fw={};ur&&(fw=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function du(t){if(xd[t])return xd[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fw)return xd[t]=e[n];return t}var pw=du("animationend"),gw=du("animationiteration"),mw=du("animationstart"),vw=du("transitionend"),_w=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(t,e){_w.set(t,e),zi(e,[t])}for(var bd=0;bd<Fm.length;bd++){var Id=Fm[bd],qk=Id.toLowerCase(),Qk=Id[0].toUpperCase()+Id.slice(1);ri(qk,"on"+Qk)}ri(pw,"onAnimationEnd");ri(gw,"onAnimationIteration");ri(mw,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(vw,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qS(r,e,void 0,t),t.currentTarget=null}function yw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;zm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;zm(i,a,c),s=l}}}if(lc)throw t=Ih,lc=!1,Ih=null,t}function ge(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(ww(e,t,2,!1),n.add(r))}function Sd(t,e,n){var r=0;e&&(r|=4),ww(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Sl]){t[Sl]=!0,T0.forEach(function(n){n!=="selectionchange"&&(Jk.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Sd("selectionchange",!1,e))}}function ww(t,e,n,r){switch(rw(e)){case 1:var i=dk;break;case 4:i=hk;break;default:i=ap}n=i.bind(null,e,n,t),i=void 0,!bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}V0(function(){var c=s,h=rp(n),d=[];e:{var f=_w.get(t);if(f!==void 0){var g=cp,_=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":g=Tk;break;case"focusin":_="focus",g=yd;break;case"focusout":_="blur",g=yd;break;case"beforeblur":case"afterblur":g=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rk;break;case pw:case gw:case mw:g=_k;break;case vw:g=Ok;break;case"scroll":g=fk;break;case"wheel":g=Dk;break;case"copy":case"cut":case"paste":g=wk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Rm}var w=(e&4)!==0,E=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,v!==null&&(x=aa(p,v),x!=null&&w.push(pa(p,x,m)))),E)break;p=p.return}0<w.length&&(f=new g(f,_,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Eh&&(_=n.relatedTarget||n.fromElement)&&(mi(_)||_[dr]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?mi(_):null,_!==null&&(E=Bi(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(w=Cm,x="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Rm,x="onPointerLeave",v="onPointerEnter",p="pointer"),E=g==null?f:ls(g),m=_==null?f:ls(_),f=new w(x,p+"leave",g,n,h),f.target=E,f.relatedTarget=m,x=null,mi(h)===c&&(w=new w(v,p+"enter",_,n,h),w.target=m,w.relatedTarget=E,x=w),E=x,g&&_)t:{for(w=g,v=_,p=0,m=w;m;m=Zi(m))p++;for(m=0,x=v;x;x=Zi(x))m++;for(;0<p-m;)w=Zi(w),p--;for(;0<m-p;)v=Zi(v),m--;for(;p--;){if(w===v||v!==null&&w===v.alternate)break t;w=Zi(w),v=Zi(v)}w=null}else w=null;g!==null&&Bm(d,f,g,w,!1),_!==null&&E!==null&&Bm(d,E,_,w,!0)}}e:{if(f=c?ls(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=Bk;else if(Pm(f))if(cw)k=$k;else{k=Vk;var b=Hk}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Wk);if(k&&(k=k(t,c))){lw(d,k,n,h);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&mh(f,"number",f.value)}switch(b=c?ls(c):window,t){case"focusin":(Pm(b)||b.contentEditable==="true")&&(os=b,Ch=c,Vo=null);break;case"focusout":Vo=Ch=os=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Um(d,n,h);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":Um(d,n,h)}var T;if(dp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ss?ow(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(sw&&n.locale!=="ko"&&(ss||S!=="onCompositionStart"?S==="onCompositionEnd"&&ss&&(T=iw()):(Rr=h,lp="value"in Rr?Rr.value:Rr.textContent,ss=!0)),b=fc(c,S),0<b.length&&(S=new Nm(S,t,null,n,h),d.push({event:S,listeners:b}),T?S.data=T:(T=aw(n),T!==null&&(S.data=T)))),(T=Mk?jk(t,n):Uk(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(h=new Nm("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=T))}yw(d,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=aa(t,n),s!=null&&r.unshift(pa(t,s,i)),s=aa(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function Zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=aa(n,s),l!=null&&o.unshift(pa(n,l,a))):i||(l=aa(n,s),l!=null&&o.push(pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xk=/\r\n?/g,Zk=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(Xk,`
`).replace(Zk,"")}function kl(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(A(425))}function pc(){}var Rh=null,Ah=null;function Oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,eT=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,tT=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(t){return Vm.resolve(null).then(t).catch(nT)}:Ph;function nT(t){setTimeout(function(){throw t})}function Td(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ua(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Js,ga="__reactProps$"+Js,dr="__reactContainer$"+Js,Dh="__reactEvents$"+Js,rT="__reactListeners$"+Js,iT="__reactHandles$"+Js;function mi(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wm(t);t!==null;){if(n=t[Ln])return n;t=Wm(t)}return e}t=n,n=t.parentNode}return null}function Ga(t){return t=t[Ln]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function hu(t){return t[ga]||null}var Lh=[],cs=-1;function ii(t){return{current:t}}function me(t){0>cs||(t.current=Lh[cs],Lh[cs]=null,cs--)}function he(t,e){cs++,Lh[cs]=t.current,t.current=e}var Kr={},ut=ii(Kr),Tt=ii(!1),ki=Kr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function gc(){me(Tt),me(ut)}function $m(t,e,n){if(ut.current!==Kr)throw Error(A(168));he(ut,e),he(Tt,n)}function Ew(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,HS(t)||"Unknown",i));return Ie({},n,r)}function mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,ki=ut.current,he(ut,t),he(Tt,Tt.current),!0}function Gm(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=Ew(t,e,ki),r.__reactInternalMemoizedMergedChildContext=t,me(Tt),me(ut),he(ut,t)):me(Tt),he(Tt,n)}var er=null,fu=!1,Cd=!1;function xw(t){er===null?er=[t]:er.push(t)}function sT(t){fu=!0,xw(t)}function si(){if(!Cd&&er!==null){Cd=!0;var t=0,e=le;try{var n=er;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}er=null,fu=!1}catch(i){throw er!==null&&(er=er.slice(t+1)),Y0(ip,si),i}finally{le=e,Cd=!1}}return null}var us=[],ds=0,vc=null,_c=0,Xt=[],Zt=0,Ti=null,tr=1,nr="";function di(t,e){us[ds++]=_c,us[ds++]=vc,vc=t,_c=e}function bw(t,e,n){Xt[Zt++]=tr,Xt[Zt++]=nr,Xt[Zt++]=Ti,Ti=t;var r=tr;t=nr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tr=1<<32-En(e)+i|n<<i|r,nr=s+t}else tr=1<<s|n<<i|r,nr=t}function fp(t){t.return!==null&&(di(t,1),bw(t,1,0))}function pp(t){for(;t===vc;)vc=us[--ds],us[ds]=null,_c=us[--ds],us[ds]=null;for(;t===Ti;)Ti=Xt[--Zt],Xt[Zt]=null,nr=Xt[--Zt],Xt[Zt]=null,tr=Xt[--Zt],Xt[Zt]=null}var Wt=null,Ht=null,ve=!1,yn=null;function Iw(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Ht=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(ve){var e=Ht;if(e){var n=e;if(!Ym(t,e)){if(Mh(t))throw Error(A(418));e=Ur(n.nextSibling);var r=Wt;e&&Ym(t,e)?Iw(r,n):(t.flags=t.flags&-4097|2,ve=!1,Wt=t)}}else{if(Mh(t))throw Error(A(418));t.flags=t.flags&-4097|2,ve=!1,Wt=t}}}function Km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Tl(t){if(t!==Wt)return!1;if(!ve)return Km(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oh(t.type,t.memoizedProps)),e&&(e=Ht)){if(Mh(t))throw Sw(),Error(A(418));for(;e;)Iw(t,e),e=Ur(e.nextSibling)}if(Km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Wt?Ur(t.stateNode.nextSibling):null;return!0}function Sw(){for(var t=Ht;t;)t=Ur(t.nextSibling)}function Ds(){Ht=Wt=null,ve=!1}function gp(t){yn===null?yn=[t]:yn.push(t)}var oT=vr.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function kw(t){function e(v,p){if(t){var m=v.deletions;m===null?(v.deletions=[p],v.flags|=16):m.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=Hr(v,p),v.index=0,v.sibling=null,v}function s(v,p,m){return v.index=m,t?(m=v.alternate,m!==null?(m=m.index,m<p?(v.flags|=2,p):m):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,m,x){return p===null||p.tag!==6?(p=Ld(m,v.mode,x),p.return=v,p):(p=i(p,m),p.return=v,p)}function l(v,p,m,x){var k=m.type;return k===is?h(v,p,m.props.children,x,m.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sr&&qm(k)===p.type)?(x=i(p,m.props),x.ref=Eo(v,p,m),x.return=v,x):(x=ec(m.type,m.key,m.props,null,v.mode,x),x.ref=Eo(v,p,m),x.return=v,x)}function c(v,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Md(m,v.mode,x),p.return=v,p):(p=i(p,m.children||[]),p.return=v,p)}function h(v,p,m,x,k){return p===null||p.tag!==7?(p=xi(m,v.mode,x,k),p.return=v,p):(p=i(p,m),p.return=v,p)}function d(v,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ld(""+p,v.mode,m),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vl:return m=ec(p.type,p.key,p.props,null,v.mode,m),m.ref=Eo(v,null,p),m.return=v,m;case rs:return p=Md(p,v.mode,m),p.return=v,p;case Sr:var x=p._init;return d(v,x(p._payload),m)}if(Po(p)||mo(p))return p=xi(p,v.mode,m,null),p.return=v,p;Cl(v,p)}return null}function f(v,p,m,x){var k=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(v,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vl:return m.key===k?l(v,p,m,x):null;case rs:return m.key===k?c(v,p,m,x):null;case Sr:return k=m._init,f(v,p,k(m._payload),x)}if(Po(m)||mo(m))return k!==null?null:h(v,p,m,x,null);Cl(v,m)}return null}function g(v,p,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(m)||null,a(p,v,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vl:return v=v.get(x.key===null?m:x.key)||null,l(p,v,x,k);case rs:return v=v.get(x.key===null?m:x.key)||null,c(p,v,x,k);case Sr:var b=x._init;return g(v,p,m,b(x._payload),k)}if(Po(x)||mo(x))return v=v.get(m)||null,h(p,v,x,k,null);Cl(p,x)}return null}function _(v,p,m,x){for(var k=null,b=null,T=p,S=p=0,C=null;T!==null&&S<m.length;S++){T.index>S?(C=T,T=null):C=T.sibling;var R=f(v,T,m[S],x);if(R===null){T===null&&(T=C);break}t&&T&&R.alternate===null&&e(v,T),p=s(R,p,S),b===null?k=R:b.sibling=R,b=R,T=C}if(S===m.length)return n(v,T),ve&&di(v,S),k;if(T===null){for(;S<m.length;S++)T=d(v,m[S],x),T!==null&&(p=s(T,p,S),b===null?k=T:b.sibling=T,b=T);return ve&&di(v,S),k}for(T=r(v,T);S<m.length;S++)C=g(T,v,S,m[S],x),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?S:C.key),p=s(C,p,S),b===null?k=C:b.sibling=C,b=C);return t&&T.forEach(function(L){return e(v,L)}),ve&&di(v,S),k}function w(v,p,m,x){var k=mo(m);if(typeof k!="function")throw Error(A(150));if(m=k.call(m),m==null)throw Error(A(151));for(var b=k=null,T=p,S=p=0,C=null,R=m.next();T!==null&&!R.done;S++,R=m.next()){T.index>S?(C=T,T=null):C=T.sibling;var L=f(v,T,R.value,x);if(L===null){T===null&&(T=C);break}t&&T&&L.alternate===null&&e(v,T),p=s(L,p,S),b===null?k=L:b.sibling=L,b=L,T=C}if(R.done)return n(v,T),ve&&di(v,S),k;if(T===null){for(;!R.done;S++,R=m.next())R=d(v,R.value,x),R!==null&&(p=s(R,p,S),b===null?k=R:b.sibling=R,b=R);return ve&&di(v,S),k}for(T=r(v,T);!R.done;S++,R=m.next())R=g(T,v,S,R.value,x),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?S:R.key),p=s(R,p,S),b===null?k=R:b.sibling=R,b=R);return t&&T.forEach(function(B){return e(v,B)}),ve&&di(v,S),k}function E(v,p,m,x){if(typeof m=="object"&&m!==null&&m.type===is&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vl:e:{for(var k=m.key,b=p;b!==null;){if(b.key===k){if(k=m.type,k===is){if(b.tag===7){n(v,b.sibling),p=i(b,m.props.children),p.return=v,v=p;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sr&&qm(k)===b.type){n(v,b.sibling),p=i(b,m.props),p.ref=Eo(v,b,m),p.return=v,v=p;break e}n(v,b);break}else e(v,b);b=b.sibling}m.type===is?(p=xi(m.props.children,v.mode,x,m.key),p.return=v,v=p):(x=ec(m.type,m.key,m.props,null,v.mode,x),x.ref=Eo(v,p,m),x.return=v,v=x)}return o(v);case rs:e:{for(b=m.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(v,p.sibling),p=i(p,m.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=Md(m,v.mode,x),p.return=v,v=p}return o(v);case Sr:return b=m._init,E(v,p,b(m._payload),x)}if(Po(m))return _(v,p,m,x);if(mo(m))return w(v,p,m,x);Cl(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,m),p.return=v,v=p):(n(v,p),p=Ld(m,v.mode,x),p.return=v,v=p),o(v)):n(v,p)}return E}var Ls=kw(!0),Tw=kw(!1),yc=ii(null),wc=null,hs=null,mp=null;function vp(){mp=hs=wc=null}function _p(t){var e=yc.current;me(yc),t._currentValue=e}function Uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){wc=t,mp=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(mp!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(wc===null)throw Error(A(308));hs=t,wc.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var vi=null;function yp(t){vi===null?vi=[t]:vi.push(t)}function Cw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(f=e,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=Ie({},d,f);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=d):h=h.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ni|=o,t.lanes=o,t.memoizedState=d}}function Jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Ya={},Hn=ii(Ya),ma=ii(Ya),va=ii(Ya);function _i(t){if(t===Ya)throw Error(A(174));return t}function Ep(t,e){switch(he(va,e),he(ma,t),he(Hn,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}me(Hn),he(Hn,e)}function Ms(){me(Hn),me(ma),me(va)}function Rw(t){_i(va.current);var e=_i(Hn.current),n=_h(e,t.type);e!==n&&(he(ma,t),he(Hn,n))}function xp(t){ma.current===t&&(me(Hn),me(ma))}var Ee=ii(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function bp(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var ql=vr.ReactCurrentDispatcher,Rd=vr.ReactCurrentBatchConfig,Ci=0,be=null,je=null,We=null,bc=!1,Wo=!1,_a=0,aT=0;function ot(){throw Error(A(321))}function Ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function Sp(t,e,n,r,i,s){if(Ci=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?dT:hT,t=n(r,i),Wo){s=0;do{if(Wo=!1,_a=0,25<=s)throw Error(A(301));s+=1,We=je=null,e.updateQueue=null,ql.current=fT,t=n(r,i)}while(Wo)}if(ql.current=Ic,e=je!==null&&je.next!==null,Ci=0,We=je=be=null,bc=!1,e)throw Error(A(300));return t}function kp(){var t=_a!==0;return _a=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?be.memoizedState=We=t:We=We.next=t,We}function cn(){if(je===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=We===null?be.memoizedState:We.next;if(e!==null)We=e,je=t;else{if(t===null)throw Error(A(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},We===null?be.memoizedState=We=t:We=We.next=t}return We}function ya(t,e){return typeof e=="function"?e(t):e}function Ad(t){var e=cn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ci&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,be.lanes|=h,Ni|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Sn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=cn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Sn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Aw(){}function Ow(t,e){var n=be,r=cn(),i=e(),s=!Sn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,Tp(Lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,wa(9,Dw.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(A(349));Ci&30||Pw(n,e,i)}return i}function Pw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dw(t,e,n,r){e.value=n,e.getSnapshot=r,Mw(e)&&jw(t)}function Lw(t,e,n){return n(function(){Mw(e)&&jw(t)})}function Mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function jw(t){var e=hr(t,1);e!==null&&xn(e,t,1,-1)}function Xm(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,be,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Uw(){return cn().memoizedState}function Ql(t,e,n,r){var i=Dn();be.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function pu(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Ip(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}be.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function Zm(t,e){return Ql(8390656,8,t,e)}function Tp(t,e){return pu(2048,8,t,e)}function Fw(t,e){return pu(4,2,t,e)}function zw(t,e){return pu(4,4,t,e)}function Bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hw(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,Bw.bind(null,e,t),n)}function Cp(){}function Vw(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ip(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ww(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ip(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $w(t,e,n){return Ci&21?(Sn(n,e)||(n=Q0(),be.lanes|=n,Ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function lT(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{le=n,Rd.transition=r}}function Gw(){return cn().memoizedState}function cT(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yw(t))Kw(e,n);else if(n=Cw(t,e,n,r),n!==null){var i=vt();xn(n,t,r,i),qw(n,e,r)}}function uT(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yw(t))Kw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,o)){var l=e.interleaved;l===null?(i.next=i,yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Cw(t,e,i,r),n!==null&&(i=vt(),xn(n,t,r,i),qw(n,e,r))}}function Yw(t){var e=t.alternate;return t===be||e!==null&&e===be}function Kw(t,e){Wo=bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}var Ic={readContext:ln,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},dT={readContext:ln,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,Bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cT.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:Cp,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=lT.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Dn();if(ve){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),qe===null)throw Error(A(349));Ci&30||Pw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zm(Lw.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,Dw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=qe.identifierPrefix;if(ve){var n=nr,r=tr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hT={readContext:ln,useCallback:Vw,useContext:ln,useEffect:Tp,useImperativeHandle:Hw,useInsertionEffect:Fw,useLayoutEffect:zw,useMemo:Ww,useReducer:Ad,useRef:Uw,useState:function(){return Ad(ya)},useDebugValue:Cp,useDeferredValue:function(t){var e=cn();return $w(e,je.memoizedState,t)},useTransition:function(){var t=Ad(ya)[0],e=cn().memoizedState;return[t,e]},useMutableSource:Aw,useSyncExternalStore:Ow,useId:Gw,unstable_isNewReconciler:!1},fT={readContext:ln,useCallback:Vw,useContext:ln,useEffect:Tp,useImperativeHandle:Hw,useInsertionEffect:Fw,useLayoutEffect:zw,useMemo:Ww,useReducer:Od,useRef:Uw,useState:function(){return Od(ya)},useDebugValue:Cp,useDeferredValue:function(t){var e=cn();return je===null?e.memoizedState=t:$w(e,je.memoizedState,t)},useTransition:function(){var t=Od(ya)[0],e=cn().memoizedState;return[t,e]},useMutableSource:Aw,useSyncExternalStore:Ow,useId:Gw,unstable_isNewReconciler:!1};function vn(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Br(t),s=ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(xn(e,t,i,r),Kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Br(t),s=ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(xn(e,t,i,r),Kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Br(t),i=ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(xn(e,t,r,n),Kl(e,t,r))}};function ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,r)||!ha(i,s):!0}function Qw(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=Ct(e)?ki:ut.current,r=e.contextTypes,s=(r=r!=null)?Ps(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=Ct(e)?ki:ut.current,i.context=Ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",r=e;do n+=BS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pT=typeof WeakMap=="function"?WeakMap:Map;function Jw(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,Jh=r),Bh(t,e)},n}function Xw(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bh(t,e),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CT.bind(null,t,e,n),e.then(t,t))}function rv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function iv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var gT=vr.ReactCurrentOwner,St=!1;function ft(t,e,n,r){e.child=t===null?Tw(e,null,n,r):Ls(e,t.child,n,r)}function sv(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=Sp(t,e,n,r,s,i),n=kp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(ve&&n&&fp(e),e.flags|=1,ft(t,e,r,i),e.child)}function ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zw(t,e,s,r,i)):(t=ec(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,r)&&t.ref===e.ref)return fr(t,e,i)}return e.flags|=1,t=Hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ha(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,fr(t,e,i)}return Hh(t,e,n,r,i)}function eE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ps,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(ps,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(ps,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(ps,Ft),Ft|=r;return ft(t,e,i,n),e.child}function tE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,r,i){var s=Ct(n)?ki:ut.current;return s=Ps(e,s),xs(e,i),n=Sp(t,e,n,r,s,i),r=kp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(ve&&r&&fp(e),e.flags|=1,ft(t,e,n,i),e.child)}function av(t,e,n,r,i){if(Ct(n)){var s=!0;mc(e)}else s=!1;if(xs(e,i),e.stateNode===null)Jl(t,e),Qw(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=Ct(n)?ki:ut.current,c=Ps(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&tv(e,o,r,c),kr=!1;var f=e.memoizedState;o.state=f,Ec(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Tt.current||kr?(typeof h=="function"&&(Fh(e,n,h,r),l=e.memoizedState),(a=kr||ev(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=Ct(n)?ki:ut.current,l=Ps(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&tv(e,o,r,l),kr=!1,f=e.memoizedState,o.state=f,Ec(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||Tt.current||kr?(typeof g=="function"&&(Fh(e,n,g,r),_=e.memoizedState),(c=kr||ev(e,n,c,r,f,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Vh(t,e,n,r,s,i)}function Vh(t,e,n,r,i,s){tE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gm(e,n,!1),fr(t,e,s);r=e.stateNode,gT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ls(e,t.child,null,s),e.child=Ls(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&Gm(e,n,!0),e.child}function nE(t){var e=t.stateNode;e.pendingContext?$m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$m(t,e.context,!1),Ep(t,e.containerInfo)}function lv(t,e,n,r,i){return Ds(),gp(i),e.flags|=256,ft(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function $h(t){return{baseLanes:t,cachePool:null,transitions:null}}function rE(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(Ee,i&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,r,0,null),t=xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$h(n),e.memoizedState=Wh,t):Np(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Hr(a,s):(s=xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return s=t.child,t=s.sibling,r=Hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Np(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&gp(r),Ls(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(A(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_u({mode:"visible",children:r.children},i,0,null),s=xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ls(e,t.child,null,o),e.child.memoizedState=$h(o),e.memoizedState=Wh,s);if(!(e.mode&1))return Nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Pd(s,r,void 0),Nl(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),xn(r,t,i,-1))}return Lp(),r=Pd(Error(A(421))),Nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Ur(i.nextSibling),Wt=e,ve=!0,yn=null,t!==null&&(Xt[Zt++]=tr,Xt[Zt++]=nr,Xt[Zt++]=Ti,tr=t.id,nr=t.overflow,Ti=e),e=Np(e,r.children),e.flags|=4096,e)}function cv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uh(t.return,e,n)}function Dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cv(t,n,e);else if(t.tag===19)cv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dd(e,!0,n,null,s);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vT(t,e,n){switch(e.tag){case 3:nE(e),Ds();break;case 5:Rw(e);break;case 1:Ct(e.type)&&mc(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(yc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?rE(t,e,n):(he(Ee,Ee.current&1),t=fr(t,e,n),t!==null?t.sibling:null);he(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,eE(t,e,n)}return fr(t,e,n)}var sE,Gh,oE,aE;sE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gh=function(){};oE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_i(Hn.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=vh(t,i),r=vh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}yh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};aE=function(t,e,n,r){n!==r&&(e.flags|=4)};function xo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _T(t,e,n){var r=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Ct(e.type)&&gc(),at(e),null;case 3:return r=e.stateNode,Ms(),me(Tt),me(ut),bp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(ef(yn),yn=null))),Gh(t,e),at(e),null;case 5:xp(e);var i=_i(va.current);if(n=e.type,t!==null&&e.stateNode!=null)oE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return at(e),null}if(t=_i(Hn.current),Tl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ln]=e,r[ga]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Lo.length;i++)ge(Lo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":_m(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":wm(r,s),ge("invalid",r)}yh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":_l(r),ym(r,s,!0);break;case"textarea":_l(r),Em(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ln]=e,t[ga]=r,sE(t,e,!1,!1),e.stateNode=t;e:{switch(o=wh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<Lo.length;i++)ge(Lo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":_m(t,r),i=ph(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ge("invalid",t);break;case"textarea":wm(t,r),i=vh(t,r),ge("invalid",t);break;default:i=r}yh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Zf(t,s,l,o))}switch(n){case"input":_l(t),ym(t,r,!1);break;case"textarea":_l(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_s(t,!!r.multiple,s,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)aE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=_i(va.current),_i(Hn.current),Tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return at(e),null;case 13:if(me(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Ht!==null&&e.mode&1&&!(e.flags&128))Sw(),Ds(),e.flags|=98560,s=!1;else if(s=Tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Ln]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else yn!==null&&(ef(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?ze===0&&(ze=3):Lp())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Ms(),Gh(t,e),t===null&&fa(e.stateNode.containerInfo),at(e),null;case 10:return _p(e.type._context),at(e),null;case 17:return Ct(e.type)&&gc(),at(e),null;case 19:if(me(Ee),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xo(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,xo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Us&&(e.flags|=128,r=!0,xo(s,!1),e.lanes=4194304)}else{if(!r)if(t=xc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return at(e),null}else 2*Ae()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=Ee.current,he(Ee,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Dp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function yT(t,e){switch(pp(e),e.tag){case 1:return Ct(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),me(Tt),me(ut),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xp(e),null;case 13:if(me(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(Ee),null;case 4:return Ms(),null;case 10:return _p(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var Rl=!1,lt=!1,wT=typeof WeakSet=="function"?WeakSet:Set,j=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Yh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var uv=!1;function ET(t,e){if(Rh=dc,t=hw(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++h===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ah={focusedElem:t,selectionRange:n},dc=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,E=_.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:vn(e.type,w),E);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){Se(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return _=uv,uv=!1,_}function $o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yh(e,n,s)}i=i.next}while(i!==r)}}function mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lE(t){var e=t.alternate;e!==null&&(t.alternate=null,lE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[ga],delete e[Dh],delete e[rT],delete e[iT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cE(t){return t.tag===5||t.tag===3||t.tag===4}function dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}var et=null,_n=!1;function br(t,e,n){for(n=n.child;n!==null;)uE(t,e,n),n=n.sibling}function uE(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:lt||fs(n,e);case 6:var r=et,i=_n;et=null,br(t,e,n),et=r,_n=i,et!==null&&(_n?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(_n?(t=et,n=n.stateNode,t.nodeType===8?Td(t.parentNode,n):t.nodeType===1&&Td(t,n),ua(t)):Td(et,n.stateNode));break;case 4:r=et,i=_n,et=n.stateNode.containerInfo,_n=!0,br(t,e,n),et=r,_n=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yh(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!lt&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,br(t,e,n),lt=r):br(t,e,n);break;default:br(t,e,n)}}function hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wT),e.forEach(function(r){var i=RT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,_n=!1;break e;case 3:et=a.stateNode.containerInfo,_n=!0;break e;case 4:et=a.stateNode.containerInfo,_n=!0;break e}a=a.return}if(et===null)throw Error(A(160));uE(s,o,i),et=null,_n=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Se(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dE(e,t),e=e.sibling}function dE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Pn(t),r&4){try{$o(3,t,t.return),mu(3,t)}catch(w){Se(t,t.return,w)}try{$o(5,t,t.return)}catch(w){Se(t,t.return,w)}}break;case 1:gn(e,t),Pn(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(gn(e,t),Pn(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var i=t.stateNode;try{oa(i,"")}catch(w){Se(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&P0(i,s),wh(a,o);var c=wh(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?U0(i,d):h==="dangerouslySetInnerHTML"?M0(i,d):h==="children"?oa(i,d):Zf(i,h,d,c)}switch(a){case"input":gh(i,s);break;case"textarea":D0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?_s(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[ga]=s}catch(w){Se(t,t.return,w)}}break;case 6:if(gn(e,t),Pn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Se(t,t.return,w)}}break;case 3:if(gn(e,t),Pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(w){Se(t,t.return,w)}break;case 4:gn(e,t),Pn(t);break;case 13:gn(e,t),Pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Op=Ae())),r&4&&hv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(c=lt)||h,gn(e,t),lt=c):gn(e,t),Pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(j=t,h=t.child;h!==null;){for(d=j=h;j!==null;){switch(f=j,g=f.child,f.tag){case 0:case 11:case 14:case 15:$o(4,f,f.return);break;case 1:fs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Se(r,n,w)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){pv(d);continue}}g!==null?(g.return=f,j=g):pv(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j0("display",o))}catch(w){Se(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Se(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gn(e,t),Pn(t),r&4&&hv(t);break;case 21:break;default:gn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cE(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oa(i,""),r.flags&=-33);var s=dv(t);Qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dv(t);qh(t,a,o);break;default:throw Error(A(161))}}catch(l){Se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xT(t,e,n){j=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=Rl;var c=lt;if(Rl=o,(lt=l)&&!c)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?gv(i):l!==null?(l.return=o,j=l):gv(i);for(;s!==null;)j=s,hE(s),s=s.sibling;j=i,Rl=a,lt=c}fv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):fv(t)}}function fv(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||mu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ua(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}lt||e.flags&512&&Kh(e)}catch(f){Se(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function pv(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function gv(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mu(4,e)}catch(l){Se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Se(e,i,l)}}var s=e.return;try{Kh(e)}catch(l){Se(e,s,l)}break;case 5:var o=e.return;try{Kh(e)}catch(l){Se(e,o,l)}}}catch(l){Se(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var bT=Math.ceil,Sc=vr.ReactCurrentDispatcher,Rp=vr.ReactCurrentOwner,sn=vr.ReactCurrentBatchConfig,ee=0,qe=null,De=null,tt=0,Ft=0,ps=ii(0),ze=0,Ea=null,Ni=0,vu=0,Ap=0,Go=null,bt=null,Op=0,Us=1/0,Zn=null,kc=!1,Jh=null,zr=null,Al=!1,Ar=null,Tc=0,Yo=0,Xh=null,Xl=-1,Zl=0;function vt(){return ee&6?Ae():Xl!==-1?Xl:Xl=Ae()}function Br(t){return t.mode&1?ee&2&&tt!==0?tt&-tt:oT.transition!==null?(Zl===0&&(Zl=Q0()),Zl):(t=le,t!==0||(t=window.event,t=t===void 0?16:rw(t.type)),t):1}function xn(t,e,n,r){if(50<Yo)throw Yo=0,Xh=null,Error(A(185));Wa(t,n,r),(!(ee&2)||t!==qe)&&(t===qe&&(!(ee&2)&&(vu|=n),ze===4&&Nr(t,tt)),Nt(t,r),n===1&&ee===0&&!(e.mode&1)&&(Us=Ae()+500,fu&&si()))}function Nt(t,e){var n=t.callbackNode;ok(t,e);var r=uc(t,t===qe?tt:0);if(r===0)n!==null&&Im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Im(n),e===1)t.tag===0?sT(mv.bind(null,t)):xw(mv.bind(null,t)),tT(function(){!(ee&6)&&si()}),n=null;else{switch(J0(r)){case 1:n=ip;break;case 4:n=K0;break;case 16:n=cc;break;case 536870912:n=q0;break;default:n=cc}n=wE(n,fE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fE(t,e){if(Xl=-1,Zl=0,ee&6)throw Error(A(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=uc(t,t===qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cc(t,r);else{e=r;var i=ee;ee|=2;var s=gE();(qe!==t||tt!==e)&&(Zn=null,Us=Ae()+500,Ei(t,e));do try{kT();break}catch(a){pE(t,a)}while(!0);vp(),Sc.current=s,ee=i,De!==null?e=0:(qe=null,tt=0,e=ze)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=Zh(t,i))),e===1)throw n=Ea,Ei(t,0),Nr(t,r),Nt(t,Ae()),n;if(e===6)Nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!IT(i)&&(e=Cc(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=Zh(t,s))),e===1))throw n=Ea,Ei(t,0),Nr(t,r),Nt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:hi(t,bt,Zn);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=Op+500-Ae(),10<e)){if(uc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ph(hi.bind(null,t,bt,Zn),e);break}hi(t,bt,Zn);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bT(r/1960))-r,10<r){t.timeoutHandle=Ph(hi.bind(null,t,bt,Zn),r);break}hi(t,bt,Zn);break;case 5:hi(t,bt,Zn);break;default:throw Error(A(329))}}}return Nt(t,Ae()),t.callbackNode===n?fE.bind(null,t):null}function Zh(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=bt,bt=n,e!==null&&ef(e)),t}function ef(t){bt===null?bt=t:bt.push.apply(bt,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~Ap,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function mv(t){if(ee&6)throw Error(A(327));bs();var e=uc(t,0);if(!(e&1))return Nt(t,Ae()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=Ea,Ei(t,0),Nr(t,e),Nt(t,Ae()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,bt,Zn),Nt(t,Ae()),null}function Pp(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Us=Ae()+500,fu&&si())}}function Ri(t){Ar!==null&&Ar.tag===0&&!(ee&6)&&bs();var e=ee;ee|=1;var n=sn.transition,r=le;try{if(sn.transition=null,le=1,t)return t()}finally{le=r,sn.transition=n,ee=e,!(ee&6)&&si()}}function Dp(){Ft=ps.current,me(ps)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eT(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:Ms(),me(Tt),me(ut),bp();break;case 5:xp(r);break;case 4:Ms();break;case 13:me(Ee);break;case 19:me(Ee);break;case 10:_p(r.type._context);break;case 22:case 23:Dp()}n=n.return}if(qe=t,De=t=Hr(t.current,null),tt=Ft=e,ze=0,Ea=null,Ap=vu=Ni=0,bt=Go=null,vi!==null){for(e=0;e<vi.length;e++)if(n=vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vi=null}return t}function pE(t,e){do{var n=De;try{if(vp(),ql.current=Ic,bc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bc=!1}if(Ci=0,We=je=be=null,Wo=!1,_a=0,Rp.current=null,n===null||n.return===null){ze=1,Ea=e,De=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=rv(o);if(g!==null){g.flags&=-257,iv(g,o,a,s,e),g.mode&1&&nv(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){nv(s,c,e),Lp();break e}l=Error(A(426))}}else if(ve&&a.mode&1){var E=rv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),iv(E,o,a,s,e),gp(js(l,a));break e}}s=l=js(l,a),ze!==4&&(ze=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Jw(s,l,e);Qm(s,v);break e;case 1:a=l;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zr===null||!zr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Xw(s,a,e);Qm(s,x);break e}}s=s.return}while(s!==null)}vE(n)}catch(k){e=k,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function gE(){var t=Sc.current;return Sc.current=Ic,t===null?Ic:t}function Lp(){(ze===0||ze===3||ze===2)&&(ze=4),qe===null||!(Ni&268435455)&&!(vu&268435455)||Nr(qe,tt)}function Cc(t,e){var n=ee;ee|=2;var r=gE();(qe!==t||tt!==e)&&(Zn=null,Ei(t,e));do try{ST();break}catch(i){pE(t,i)}while(!0);if(vp(),ee=n,Sc.current=r,De!==null)throw Error(A(261));return qe=null,tt=0,ze}function ST(){for(;De!==null;)mE(De)}function kT(){for(;De!==null&&!JS();)mE(De)}function mE(t){var e=yE(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?vE(t):De=e,Rp.current=null}function vE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yT(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,De=null;return}}else if(n=_T(n,e,Ft),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);ze===0&&(ze=5)}function hi(t,e,n){var r=le,i=sn.transition;try{sn.transition=null,le=1,TT(t,e,n,r)}finally{sn.transition=i,le=r}return null}function TT(t,e,n,r){do bs();while(Ar!==null);if(ee&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ak(t,s),t===qe&&(De=qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,wE(cc,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=le;le=1;var a=ee;ee|=4,Rp.current=null,ET(t,n),dE(n,t),Yk(Ah),dc=!!Rh,Ah=Rh=null,t.current=n,xT(n),XS(),ee=a,le=o,sn.transition=s}else t.current=n;if(Al&&(Al=!1,Ar=t,Tc=i),s=t.pendingLanes,s===0&&(zr=null),tk(n.stateNode),Nt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=Jh,Jh=null,t;return Tc&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===Xh?Yo++:(Yo=0,Xh=t):Yo=0,si(),null}function bs(){if(Ar!==null){var t=J0(Tc),e=sn.transition,n=le;try{if(sn.transition=null,le=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Tc=0,ee&6)throw Error(A(331));var i=ee;for(ee|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(j=c;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:$o(8,h,s)}var d=h.child;if(d!==null)d.return=h,j=d;else for(;j!==null;){h=j;var f=h.sibling,g=h.return;if(lE(h),h===c){j=null;break}if(f!==null){f.return=g,j=f;break}j=g}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,j=v;break e}j=s.return}}var p=t.current;for(j=p;j!==null;){o=j;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,j=m;else e:for(o=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mu(9,a)}}catch(k){Se(a,a.return,k)}if(a===o){j=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,j=x;break e}j=a.return}}if(ee=i,si(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(lu,t)}catch{}r=!0}return r}finally{le=n,sn.transition=e}}return!1}function vv(t,e,n){e=js(n,e),e=Jw(t,e,1),t=Fr(t,e,1),e=vt(),t!==null&&(Wa(t,1,e),Nt(t,e))}function Se(t,e,n){if(t.tag===3)vv(t,t,n);else for(;e!==null;){if(e.tag===3){vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){t=js(n,t),t=Xw(e,t,1),e=Fr(e,t,1),t=vt(),e!==null&&(Wa(e,1,t),Nt(e,t));break}}e=e.return}}function CT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(tt&n)===n&&(ze===4||ze===3&&(tt&130023424)===tt&&500>Ae()-Op?Ei(t,0):Ap|=n),Nt(t,e)}function _E(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var n=vt();t=hr(t,e),t!==null&&(Wa(t,e,n),Nt(t,n))}function NT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_E(t,n)}function RT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),_E(t,n)}var yE;yE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,vT(t,e,n);St=!!(t.flags&131072)}else St=!1,ve&&e.flags&1048576&&bw(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var i=Ps(e,ut.current);xs(e,n),i=Sp(null,e,r,t,i,n);var s=kp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,mc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wp(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=Vh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&fp(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OT(r),t=vn(r,t),i){case 0:e=Hh(null,e,r,t,n);break e;case 1:e=av(null,e,r,t,n);break e;case 11:e=sv(null,e,r,t,n);break e;case 14:e=ov(null,e,r,vn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),av(t,e,r,i,n);case 3:e:{if(nE(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Nw(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=js(Error(A(423)),e),e=lv(t,e,r,n,i);break e}else if(r!==i){i=js(Error(A(424)),e),e=lv(t,e,r,n,i);break e}else for(Ht=Ur(e.stateNode.containerInfo.firstChild),Wt=e,ve=!0,yn=null,n=Tw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),r===i){e=fr(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return Rw(e),t===null&&jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oh(r,i)?o=null:s!==null&&Oh(r,s)&&(e.flags|=32),tE(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return rE(t,e,n);case 4:return Ep(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ls(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),sv(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(yc,r._currentValue),r._currentValue=o,s!==null)if(Sn(s.value,o)){if(s.children===i.children&&!Tt.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ar(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=ln(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=vn(r,e.pendingProps),i=vn(r.type,i),ov(t,e,r,i,n);case 15:return Zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Jl(t,e),e.tag=1,Ct(r)?(t=!0,mc(e)):t=!1,xs(e,n),Qw(e,r,i),zh(e,r,i,n),Vh(null,e,r,!0,t,n);case 19:return iE(t,e,n);case 22:return eE(t,e,n)}throw Error(A(156,e.tag))};function wE(t,e){return Y0(t,e)}function AT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new AT(t,e,n,r)}function Mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OT(t){if(typeof t=="function")return Mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function Hr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case is:return xi(n.children,i,s,e);case ep:o=8,i|=8;break;case uh:return t=tn(12,n,e,i|2),t.elementType=uh,t.lanes=s,t;case dh:return t=tn(13,n,e,i),t.elementType=dh,t.lanes=s,t;case hh:return t=tn(19,n,e,i),t.elementType=hh,t.lanes=s,t;case R0:return _u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C0:o=10;break e;case N0:o=9;break e;case tp:o=11;break e;case np:o=14;break e;case Sr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xi(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=tn(22,t,r,e),t.elementType=R0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ld(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=md(0),this.expirationTimes=md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jp(t,e,n,r,i,s,o,a,l){return t=new PT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(s),t}function DT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return Kr;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Ew(t,n,e)}return e}function xE(t,e,n,r,i,s,o,a,l){return t=jp(n,r,!0,t,i,s,o,a,l),t.context=EE(null),n=t.current,r=vt(),i=Br(n),s=ar(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,Wa(t,i,r),Nt(t,r),t}function yu(t,e,n,r){var i=e.current,s=vt(),o=Br(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(xn(t,i,o,s),Kl(t,i,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _v(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){_v(t,e),(t=t.alternate)&&_v(t,e)}function LT(){return null}var bE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fp(t){this._internalRoot=t}wu.prototype.render=Fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));yu(t,e,null,null)};wu.prototype.unmount=Fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){yu(null,t,null,null)}),e[dr]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&nw(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yv(){}function MT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Nc(o);s.call(c)}}var o=xE(e,r,t,0,null,!1,!1,"",yv);return t._reactRootContainer=o,t[dr]=o.current,fa(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nc(l);a.call(c)}}var l=jp(t,0,!1,null,null,!1,!1,"",yv);return t._reactRootContainer=l,t[dr]=l.current,fa(t.nodeType===8?t.parentNode:t),Ri(function(){yu(e,l,n,r)}),l}function xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nc(o);a.call(l)}}yu(e,o,t,i)}else o=MT(n,e,t,i,r);return Nc(o)}X0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(sp(e,n|1),Nt(e,Ae()),!(ee&6)&&(Us=Ae()+500,si()))}break;case 13:Ri(function(){var r=hr(t,1);if(r!==null){var i=vt();xn(r,t,1,i)}}),Up(t,1)}};op=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=vt();xn(e,t,134217728,n)}Up(t,134217728)}};Z0=function(t){if(t.tag===13){var e=Br(t),n=hr(t,e);if(n!==null){var r=vt();xn(n,t,e,r)}Up(t,e)}};ew=function(){return le};tw=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};xh=function(t,e,n){switch(e){case"input":if(gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hu(r);if(!i)throw Error(A(90));O0(r),gh(r,i)}}}break;case"textarea":D0(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};B0=Pp;H0=Ri;var jT={usingClientEntryPoint:!1,Events:[Ga,ls,hu,F0,z0,Pp]},bo={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UT={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$0(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||LT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{lu=Ol.inject(UT),Bn=Ol}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jT;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(A(200));return DT(t,e,null,n)};Kt.createRoot=function(t,e){if(!zp(t))throw Error(A(299));var n=!1,r="",i=bE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jp(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,fa(t.nodeType===8?t.parentNode:t),new Fp(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=$0(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Ri(t)};Kt.hydrate=function(t,e,n){if(!Eu(e))throw Error(A(200));return xu(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xE(e,null,t,1,n??null,i,!1,s,o),t[dr]=e.current,fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wu(e)};Kt.render=function(t,e,n){if(!Eu(e))throw Error(A(200));return xu(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(A(40));return t._reactRootContainer?(Ri(function(){xu(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Pp;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eu(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return xu(t,e,n,!1,r)};Kt.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),I0.exports=Kt;var gs=I0.exports,wv=gs;lh.createRoot=wv.createRoot,lh.hydrateRoot=wv.hydrateRoot;var Me=(t=>(t.HOME="HOME",t.CHAT="CHAT",t.TRANSLATOR="TRANSLATOR",t.EDITOR="EDITOR",t))(Me||{});const FT=["N/A"],zT=`
OFFICIAL SELLER SUPPORT SOP (GENERAL GUIDELINES)

1. LOGISTICS & DELIVERY
- Standard Delivery: 3-7 business days for local orders, 14-25 days for international shipping.
- Delayed Orders: Apologize sincerely. Check tracking status. If lost, offer full refund or replacement.
- Address Changes: Allowed only before the order status is "Processed" or "Shipped".
- Delivered but Not Received: Ask customer to check with neighbors/family/reception. If not found, initiate investigation.

2. CANCELLATIONS
- Unpaid Orders: Automatically cancel after set timeframe (e.g., 24h).
- Paid/Unshipped: Customer can request cancellation. Seller approval required if packing has started.
- Shipped: Cancellation is not possible. Customer must refuse delivery or return upon receipt.

3. PRODUCT ISSUES (DAMAGED, WRONG, MISSING)
- Low Value Items: Consider offering a refund or voucher without requiring return to save shipping costs.
- High Value Items: Request clear photo/video evidence. Require return for full refund.
- Wrong Item Sent: Apologize and arrange for exchange or refund.

4. RETURNS & REFUNDS
- Change of Mind: Generally allowed if item is sealed and within return window (e.g., 7 days).
- Refund Processing: 
  - E-wallets: 1-3 business days.
  - Credit Cards: 7-14 business days.
  - Bank Transfer: Up to 30 days.

5. CUSTOMER INTERACTION
- Tone: Professional, Empathetic, Helpful, using "We/Us" to represent the brand.
- Response Time: Aim to reply within 12-24 hours.
- Service Recovery: Use vouchers or discounts for valid complaints to retain customer loyalty.
`,BT=({users:t,max:e=4})=>{const n=[...t].sort((a,l)=>a.photoURL?-1:1),r=n.slice(0,e),i=n.length-e,s=a=>a?a.charAt(0).toUpperCase():"?",o=a=>{let l=0;for(let h=0;h<a.length;h++)l=a.charCodeAt(h)+((l<<5)-l);const c=(l&16777215).toString(16).toUpperCase();return"#"+"00000".substring(0,6-c.length)+c};return u.jsxs("div",{className:"flex items-center -space-x-3 hover:space-x-1 transition-all duration-300 mr-4",children:[r.map(a=>u.jsxs("div",{className:"relative group cursor-pointer transition-transform hover:-translate-y-1 z-0 hover:z-10",title:a.displayName||"Anonymous",children:[u.jsx("div",{className:`
            w-9 h-9 rounded-full border-2 border-white dark:border-[#202124] 
            flex items-center justify-center text-xs font-bold text-white shadow-sm overflow-hidden
          `,style:{backgroundColor:a.photoURL?"transparent":o(a.displayName||"A")},children:a.photoURL?u.jsx("img",{src:a.photoURL,alt:a.displayName||"",className:"w-full h-full object-cover"}):u.jsx("span",{children:s(a.displayName)})}),u.jsx("span",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-[#202124] rounded-full"}),u.jsx("div",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity",children:a.displayName})]},a.uid)),i>0&&u.jsx("div",{className:"relative z-0",children:u.jsxs("div",{className:"w-9 h-9 rounded-full border-2 border-white dark:border-[#202124] bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold shadow-sm",children:["+",i]})}),u.jsx("div",{className:"ml-4 w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 cursor-pointer transition-colors",title:"History",children:u.jsx("i",{className:"fa-solid fa-clock-rotate-left"})})]})};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SE=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>y.createElement("svg",{ref:l,...VT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:SE("lucide",i),...a},[...o.map(([c,h])=>y.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,e)=>{const n=y.forwardRef(({className:r,...i},s)=>y.createElement(WT,{ref:s,iconNode:e,className:SE(`lucide-${HT(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=$("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=$("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=$("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=$("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=$("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=$("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=$("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=$("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=$("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=$("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=$("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=$("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=$("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=$("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=$("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=$("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=$("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=$("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=$("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=$("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=$("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=$("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=$("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=$("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=$("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=$("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=$("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=$("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=$("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=$("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=$("Sparkle",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=$("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=$("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=$("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=$("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=$("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=$("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=$("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),_C=({isAdmin:t,activeUsers:e,currentUser:n,onLogin:r,onLogout:i,syncStatus:s,isSyncing:o,isDarkMode:a,toggleDarkMode:l,onToggleSidebar:c,onLogoClick:h})=>{var f;const d=()=>s==="cloud"?u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-3 py-1.5 rounded-full",children:[u.jsx("i",{className:"fa-solid fa-cloud text-[10px]"}),u.jsx("span",{className:"hidden sm:inline",children:"Live"})]}):s==="error"?u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/40 px-3 py-1.5 rounded-full",children:[u.jsx("i",{className:"fa-solid fa-circle-exclamation text-[10px]"}),u.jsx("span",{className:"hidden sm:inline",children:"Error"})]}):u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full",children:[u.jsx("i",{className:"fa-solid fa-database text-[10px]"}),u.jsx("span",{className:"hidden sm:inline",children:"Local"})]});return u.jsxs("header",{className:"sticky top-0 z-30 bg-white/80 dark:bg-[#202124]/80 backdrop-blur-sm transition-colors duration-300 px-4 h-16 flex items-center justify-between border-b border-gray-100 dark:border-gray-800",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[c&&u.jsx("button",{onClick:c,className:"w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 rounded-full transition-colors",children:u.jsx(sC,{size:20})}),u.jsxs("div",{className:`flex items-center gap-3 ${h?"cursor-pointer hover:opacity-80 transition-opacity":""}`,onClick:h,children:[u.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-md flex items-center justify-center text-white",children:u.jsx("i",{className:"fa-solid fa-layer-group text-lg"})}),u.jsx("div",{children:u.jsx("h1",{className:"text-xl font-medium text-gray-800 dark:text-gray-100 tracking-tight hidden md:block",children:"Spiel Master"})})]})]}),u.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[e.length>0&&u.jsx("div",{className:"hidden sm:block",children:u.jsx(BT,{users:e})}),u.jsx("div",{className:"h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block"}),u.jsx("div",{className:"hidden sm:block",children:d()}),u.jsx("button",{onClick:l,className:"w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",title:"Toggle Dark Mode",children:u.jsx("i",{className:`fa-solid ${a?"fa-sun":"fa-moon"} text-lg`})}),n?u.jsx("div",{className:"flex items-center gap-2 pl-2",children:u.jsxs("button",{onClick:i,className:"group relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-red-200 dark:hover:border-red-900 transition-all",title:"Logout",children:[n.photoURL?u.jsx("img",{src:n.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):u.jsx("div",{className:"w-full h-full bg-blue-500 text-white flex items-center justify-center font-bold",children:((f=n.displayName)==null?void 0:f.charAt(0))||"U"}),u.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:u.jsx("i",{className:"fa-solid fa-right-from-bracket text-white text-xs"})})]})}):u.jsxs("button",{onClick:r,className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-500/30",children:[u.jsx("i",{className:"fa-brands fa-google"}),u.jsx("span",{className:"hidden sm:inline",children:"Sign in"})]})]})]})},yC=({value:t,onChange:e})=>u.jsxs("div",{className:"relative group w-full max-w-2xl",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none",children:u.jsx("i",{className:"fa-solid fa-magnifying-glass text-gray-400 dark:text-gray-500 group-focus-within:text-blue-600 transition-colors text-lg"})}),u.jsx("input",{type:"text",className:"block w-full pl-12 pr-10 py-3.5 bg-white dark:bg-[#303134] rounded-full shadow-sm hover:shadow-md focus:shadow-md border border-transparent hover:border-transparent focus:border-transparent focus:ring-0 transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base",placeholder:"Search for spiels...",value:t,onChange:n=>e(n.target.value)}),t&&u.jsx("button",{onClick:()=>e(""),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",children:u.jsx("i",{className:"fa-solid fa-xmark text-lg"})})]});function wC(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.useMemo(()=>r=>{e.forEach(i=>i(r))},e)}const Iu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zs(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function Wp(t){return"nodeType"in t}function Ot(t){var e,n;return t?Zs(t)?t:Wp(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function $p(t){const{Document:e}=Ot(t);return t instanceof e}function Ka(t){return Zs(t)?!1:t instanceof Ot(t).HTMLElement}function AE(t){return t instanceof Ot(t).SVGElement}function eo(t){return t?Zs(t)?t.document:Wp(t)?$p(t)?t:Ka(t)||AE(t)?t.ownerDocument:document:document:document}const Wn=Iu?y.useLayoutEffect:y.useEffect;function Gp(t){const e=y.useRef(t);return Wn(()=>{e.current=t}),y.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}function EC(){const t=y.useRef(null),e=y.useCallback((r,i)=>{t.current=setInterval(r,i)},[]),n=y.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function xa(t,e){e===void 0&&(e=[t]);const n=y.useRef(t);return Wn(()=>{n.current!==t&&(n.current=t)},e),n}function qa(t,e){const n=y.useRef();return y.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Ac(t){const e=Gp(t),n=y.useRef(null),r=y.useCallback(i=>{i!==n.current&&(e==null||e(i,n.current)),n.current=i},[]);return[n,r]}function nf(t){const e=y.useRef();return y.useEffect(()=>{e.current=t},[t]),e.current}let Ud={};function Qa(t,e){return y.useMemo(()=>{if(e)return e;const n=Ud[t]==null?0:Ud[t]+1;return Ud[t]=n,t+"-"+n},[t,e])}function OE(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((s,o)=>{const a=Object.entries(o);for(const[l,c]of a){const h=s[l];h!=null&&(s[l]=h+t*c)}return s},{...e})}}const Is=OE(1),Oc=OE(-1);function xC(t){return"clientX"in t&&"clientY"in t}function Yp(t){if(!t)return!1;const{KeyboardEvent:e}=Ot(t.target);return e&&t instanceof e}function bC(t){if(!t)return!1;const{TouchEvent:e}=Ot(t.target);return e&&t instanceof e}function rf(t){if(bC(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return xC(t)?{x:t.clientX,y:t.clientY}:null}const ba=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[ba.Translate.toString(t),ba.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),bv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function IC(t){return t.matches(bv)?t:t.querySelector(bv)}const SC={display:"none"};function kC(t){let{id:e,value:n}=t;return gt.createElement("div",{id:e,style:SC},n)}function TC(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return gt.createElement("div",{id:e,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function CC(){const[t,e]=y.useState("");return{announce:y.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const PE=y.createContext(null);function NC(t){const e=y.useContext(PE);y.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function RC(){const[t]=y.useState(()=>new Set),e=y.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[y.useCallback(r=>{let{type:i,event:s}=r;t.forEach(o=>{var a;return(a=o[i])==null?void 0:a.call(o,s)})},[t]),e]}const AC={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},OC={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function PC(t){let{announcements:e=OC,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=AC}=t;const{announce:s,announcement:o}=CC(),a=Qa("DndLiveRegion"),[l,c]=y.useState(!1);if(y.useEffect(()=>{c(!0)},[]),NC(y.useMemo(()=>({onDragStart(d){let{active:f}=d;s(e.onDragStart({active:f}))},onDragMove(d){let{active:f,over:g}=d;e.onDragMove&&s(e.onDragMove({active:f,over:g}))},onDragOver(d){let{active:f,over:g}=d;s(e.onDragOver({active:f,over:g}))},onDragEnd(d){let{active:f,over:g}=d;s(e.onDragEnd({active:f,over:g}))},onDragCancel(d){let{active:f,over:g}=d;s(e.onDragCancel({active:f,over:g}))}}),[s,e])),!l)return null;const h=gt.createElement(gt.Fragment,null,gt.createElement(kC,{id:r,value:i.draggable}),gt.createElement(TC,{id:a,announcement:o}));return n?gs.createPortal(h,n):h}var Ue;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(Ue||(Ue={}));function Pc(){}function DC(t,e){return y.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function LC(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const kn=Object.freeze({x:0,y:0});function MC(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function jC(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function UC(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function FC(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function Iv(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const zC=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=Iv(e,e.left,e.top),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const c=MC(Iv(l),i);s.push({id:a,data:{droppableContainer:o,value:c}})}}return s.sort(jC)};function BC(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.left+e.width,t.left+t.width),s=Math.min(e.top+e.height,t.top+t.height),o=i-r,a=s-n;if(r<i&&n<s){const l=e.width*e.height,c=t.width*t.height,h=o*a,d=h/(l+c-h);return Number(d.toFixed(4))}return 0}const HC=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=[];for(const s of r){const{id:o}=s,a=n.get(o);if(a){const l=BC(a,e);l>0&&i.push({id:o,data:{droppableContainer:s,value:l}})}}return i.sort(UC)};function VC(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function DE(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:kn}function WC(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return i.reduce((o,a)=>({...o,top:o.top+t*a.y,bottom:o.bottom+t*a.y,left:o.left+t*a.x,right:o.right+t*a.x}),{...n})}}const $C=WC(1);function GC(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function YC(t,e,n){const r=GC(e);if(!r)return t;const{scaleX:i,scaleY:s,x:o,y:a}=r,l=t.left-o-(1-i)*parseFloat(n),c=t.top-a-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),h=i?t.width/i:t.width,d=s?t.height/s:t.height;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l}}const KC={ignoreTransform:!1};function to(t,e){e===void 0&&(e=KC);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:c,transformOrigin:h}=Ot(t).getComputedStyle(t);c&&(n=YC(n,c,h))}const{top:r,left:i,width:s,height:o,bottom:a,right:l}=n;return{top:r,left:i,width:s,height:o,bottom:a,right:l}}function Sv(t){return to(t,{ignoreTransform:!0})}function qC(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function QC(t,e){return e===void 0&&(e=Ot(t).getComputedStyle(t)),e.position==="fixed"}function JC(t,e){e===void 0&&(e=Ot(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const s=e[i];return typeof s=="string"?n.test(s):!1})}function Kp(t,e){const n=[];function r(i){if(e!=null&&n.length>=e||!i)return n;if($p(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Ka(i)||AE(i)||n.includes(i))return n;const s=Ot(t).getComputedStyle(i);return i!==t&&JC(i,s)&&n.push(i),QC(i,s)?n:r(i.parentNode)}return t?r(t):n}function LE(t){const[e]=Kp(t,1);return e??null}function Fd(t){return!Iu||!t?null:Zs(t)?t:Wp(t)?$p(t)||t===eo(t).scrollingElement?window:Ka(t)?t:null:null}function ME(t){return Zs(t)?t.scrollX:t.scrollLeft}function jE(t){return Zs(t)?t.scrollY:t.scrollTop}function sf(t){return{x:ME(t),y:jE(t)}}var $e;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})($e||($e={}));function UE(t){return!Iu||!t?!1:t===document.scrollingElement}function FE(t){const e={x:0,y:0},n=UE(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},i=t.scrollTop<=e.y,s=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,a=t.scrollLeft>=r.x;return{isTop:i,isLeft:s,isBottom:o,isRight:a,maxScroll:r,minScroll:e}}const XC={x:.2,y:.2};function ZC(t,e,n,r,i){let{top:s,left:o,right:a,bottom:l}=n;r===void 0&&(r=10),i===void 0&&(i=XC);const{isTop:c,isBottom:h,isLeft:d,isRight:f}=FE(t),g={x:0,y:0},_={x:0,y:0},w={height:e.height*i.y,width:e.width*i.x};return!c&&s<=e.top+w.height?(g.y=$e.Backward,_.y=r*Math.abs((e.top+w.height-s)/w.height)):!h&&l>=e.bottom-w.height&&(g.y=$e.Forward,_.y=r*Math.abs((e.bottom-w.height-l)/w.height)),!f&&a>=e.right-w.width?(g.x=$e.Forward,_.x=r*Math.abs((e.right-w.width-a)/w.width)):!d&&o<=e.left+w.width&&(g.x=$e.Backward,_.x=r*Math.abs((e.left+w.width-o)/w.width)),{direction:g,speed:_}}function eN(t){if(t===document.scrollingElement){const{innerWidth:s,innerHeight:o}=window;return{top:0,left:0,right:s,bottom:o,width:s,height:o}}const{top:e,left:n,right:r,bottom:i}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:i,width:t.clientWidth,height:t.clientHeight}}function zE(t){return t.reduce((e,n)=>Is(e,sf(n)),kn)}function tN(t){return t.reduce((e,n)=>e+ME(n),0)}function nN(t){return t.reduce((e,n)=>e+jE(n),0)}function rN(t,e){if(e===void 0&&(e=to),!t)return;const{top:n,left:r,bottom:i,right:s}=e(t);LE(t)&&(i<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const iN=[["x",["left","right"],tN],["y",["top","bottom"],nN]];class qp{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Kp(n),i=zE(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[s,o,a]of iN)for(const l of o)Object.defineProperty(this,l,{get:()=>{const c=a(r),h=i[s]-c;return this.rect[l]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ko{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var i;(i=this.target)==null||i.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function sN(t){const{EventTarget:e}=Ot(t);return t instanceof e?t:eo(t)}function zd(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Jt;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Jt||(Jt={}));function kv(t){t.preventDefault()}function oN(t){t.stopPropagation()}var re;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(re||(re={}));const BE={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},aN=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case re.Right:return{...n,x:n.x+25};case re.Left:return{...n,x:n.x-25};case re.Down:return{...n,y:n.y+25};case re.Up:return{...n,y:n.y-25}}};class HE{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new Ko(eo(n)),this.windowListeners=new Ko(Ot(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Jt.Resize,this.handleCancel),this.windowListeners.add(Jt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Jt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&rN(r),n(kn)}handleKeyDown(e){if(Yp(e)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:s=BE,coordinateGetter:o=aN,scrollBehavior:a="smooth"}=i,{code:l}=e;if(s.end.includes(l)){this.handleEnd(e);return}if(s.cancel.includes(l)){this.handleCancel(e);return}const{collisionRect:c}=r.current,h=c?{x:c.left,y:c.top}:kn;this.referenceCoordinates||(this.referenceCoordinates=h);const d=o(e,{active:n,context:r.current,currentCoordinates:h});if(d){const f=Oc(d,h),g={x:0,y:0},{scrollableAncestors:_}=r.current;for(const w of _){const E=e.code,{isTop:v,isRight:p,isLeft:m,isBottom:x,maxScroll:k,minScroll:b}=FE(w),T=eN(w),S={x:Math.min(E===re.Right?T.right-T.width/2:T.right,Math.max(E===re.Right?T.left:T.left+T.width/2,d.x)),y:Math.min(E===re.Down?T.bottom-T.height/2:T.bottom,Math.max(E===re.Down?T.top:T.top+T.height/2,d.y))},C=E===re.Right&&!p||E===re.Left&&!m,R=E===re.Down&&!x||E===re.Up&&!v;if(C&&S.x!==d.x){const L=w.scrollLeft+f.x,B=E===re.Right&&L<=k.x||E===re.Left&&L>=b.x;if(B&&!f.y){w.scrollTo({left:L,behavior:a});return}B?g.x=w.scrollLeft-L:g.x=E===re.Right?w.scrollLeft-k.x:w.scrollLeft-b.x,g.x&&w.scrollBy({left:-g.x,behavior:a});break}else if(R&&S.y!==d.y){const L=w.scrollTop+f.y,B=E===re.Down&&L<=k.y||E===re.Up&&L>=b.y;if(B&&!f.x){w.scrollTo({top:L,behavior:a});return}B?g.y=w.scrollTop-L:g.y=E===re.Down?w.scrollTop-k.y:w.scrollTop-b.y,g.y&&w.scrollBy({top:-g.y,behavior:a});break}}this.handleMove(e,Is(Oc(d,this.referenceCoordinates),g))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}HE.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=BE,onActivation:i}=e,{active:s}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const a=s.activatorNode.current;return a&&t.target!==a?!1:(t.preventDefault(),i==null||i({event:t.nativeEvent}),!0)}return!1}}];function Tv(t){return!!(t&&"distance"in t)}function Cv(t){return!!(t&&"delay"in t)}class Qp{constructor(e,n,r){var i;r===void 0&&(r=sN(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:s}=e,{target:o}=s;this.props=e,this.events=n,this.document=eo(o),this.documentListeners=new Ko(this.document),this.listeners=new Ko(r),this.windowListeners=new Ko(Ot(o)),this.initialCoordinates=(i=rf(s))!=null?i:kn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Jt.Resize,this.handleCancel),this.windowListeners.add(Jt.DragStart,kv),this.windowListeners.add(Jt.VisibilityChange,this.handleCancel),this.windowListeners.add(Jt.ContextMenu,kv),this.documentListeners.add(Jt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Cv(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Tv(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:i}=this.props;i(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Jt.Click,oN,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Jt.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:i,props:s}=this,{onMove:o,options:{activationConstraint:a}}=s;if(!i)return;const l=(n=rf(e))!=null?n:kn,c=Oc(i,l);if(!r&&a){if(Tv(a)){if(a.tolerance!=null&&zd(c,a.tolerance))return this.handleCancel();if(zd(c,a.distance))return this.handleStart()}if(Cv(a)&&zd(c,a.tolerance))return this.handleCancel();this.handlePending(a,c);return}e.cancelable&&e.preventDefault(),o(l)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===re.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const lN={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Jp extends Qp{constructor(e){const{event:n}=e,r=eo(n.target);super(e,lN,r)}}Jp.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const cN={move:{name:"mousemove"},end:{name:"mouseup"}};var of;(function(t){t[t.RightClick=2]="RightClick"})(of||(of={}));class uN extends Qp{constructor(e){super(e,cN,eo(e.event.target))}}uN.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===of.RightClick?!1:(r==null||r({event:n}),!0)}}];const Bd={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class dN extends Qp{constructor(e){super(e,Bd)}static setup(){return window.addEventListener(Bd.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Bd.move.name,e)};function e(){}}}dN.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:i}=n;return i.length>1?!1:(r==null||r({event:n}),!0)}}];var qo;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(qo||(qo={}));var Dc;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(Dc||(Dc={}));function hN(t){let{acceleration:e,activator:n=qo.Pointer,canScroll:r,draggingRect:i,enabled:s,interval:o=5,order:a=Dc.TreeOrder,pointerCoordinates:l,scrollableAncestors:c,scrollableAncestorRects:h,delta:d,threshold:f}=t;const g=pN({delta:d,disabled:!s}),[_,w]=EC(),E=y.useRef({x:0,y:0}),v=y.useRef({x:0,y:0}),p=y.useMemo(()=>{switch(n){case qo.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case qo.DraggableRect:return i}},[n,i,l]),m=y.useRef(null),x=y.useCallback(()=>{const b=m.current;if(!b)return;const T=E.current.x*v.current.x,S=E.current.y*v.current.y;b.scrollBy(T,S)},[]),k=y.useMemo(()=>a===Dc.TreeOrder?[...c].reverse():c,[a,c]);y.useEffect(()=>{if(!s||!c.length||!p){w();return}for(const b of k){if((r==null?void 0:r(b))===!1)continue;const T=c.indexOf(b),S=h[T];if(!S)continue;const{direction:C,speed:R}=ZC(b,S,p,e,f);for(const L of["x","y"])g[L][C[L]]||(R[L]=0,C[L]=0);if(R.x>0||R.y>0){w(),m.current=b,_(x,o),E.current=R,v.current=C;return}}E.current={x:0,y:0},v.current={x:0,y:0},w()},[e,x,r,w,s,o,JSON.stringify(p),JSON.stringify(g),_,c,k,h,JSON.stringify(f)])}const fN={x:{[$e.Backward]:!1,[$e.Forward]:!1},y:{[$e.Backward]:!1,[$e.Forward]:!1}};function pN(t){let{delta:e,disabled:n}=t;const r=nf(e);return qa(i=>{if(n||!r||!i)return fN;const s={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[$e.Backward]:i.x[$e.Backward]||s.x===-1,[$e.Forward]:i.x[$e.Forward]||s.x===1},y:{[$e.Backward]:i.y[$e.Backward]||s.y===-1,[$e.Forward]:i.y[$e.Forward]||s.y===1}}},[n,e,r])}function gN(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return qa(i=>{var s;return e==null?null:(s=r??i)!=null?s:null},[r,e])}function mN(t,e){return y.useMemo(()=>t.reduce((n,r)=>{const{sensor:i}=r,s=i.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...s]},[]),[t,e])}var Ia;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Ia||(Ia={}));var af;(function(t){t.Optimized="optimized"})(af||(af={}));const Nv=new Map;function vN(t,e){let{dragging:n,dependencies:r,config:i}=e;const[s,o]=y.useState(null),{frequency:a,measure:l,strategy:c}=i,h=y.useRef(t),d=E(),f=xa(d),g=y.useCallback(function(v){v===void 0&&(v=[]),!f.current&&o(p=>p===null?v:p.concat(v.filter(m=>!p.includes(m))))},[f]),_=y.useRef(null),w=qa(v=>{if(d&&!n)return Nv;if(!v||v===Nv||h.current!==t||s!=null){const p=new Map;for(let m of t){if(!m)continue;if(s&&s.length>0&&!s.includes(m.id)&&m.rect.current){p.set(m.id,m.rect.current);continue}const x=m.node.current,k=x?new qp(l(x),x):null;m.rect.current=k,k&&p.set(m.id,k)}return p}return v},[t,s,n,d,l]);return y.useEffect(()=>{h.current=t},[t]),y.useEffect(()=>{d||g()},[n,d]),y.useEffect(()=>{s&&s.length>0&&o(null)},[JSON.stringify(s)]),y.useEffect(()=>{d||typeof a!="number"||_.current!==null||(_.current=setTimeout(()=>{g(),_.current=null},a))},[a,d,g,...r]),{droppableRects:w,measureDroppableContainers:g,measuringScheduled:s!=null};function E(){switch(c){case Ia.Always:return!1;case Ia.BeforeDragging:return n;default:return!n}}}function VE(t,e){return qa(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function _N(t,e){return VE(t,e)}function yN(t){let{callback:e,disabled:n}=t;const r=Gp(e),i=y.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return y.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function Su(t){let{callback:e,disabled:n}=t;const r=Gp(e),i=y.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return y.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function wN(t){return new qp(to(t),t)}function Rv(t,e,n){e===void 0&&(e=wN);const[r,i]=y.useState(null);function s(){i(l=>{if(!t)return null;if(t.isConnected===!1){var c;return(c=l??n)!=null?c:null}const h=e(t);return JSON.stringify(l)===JSON.stringify(h)?l:h})}const o=yN({callback(l){if(t)for(const c of l){const{type:h,target:d}=c;if(h==="childList"&&d instanceof HTMLElement&&d.contains(t)){s();break}}}}),a=Su({callback:s});return Wn(()=>{s(),t?(a==null||a.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(a==null||a.disconnect(),o==null||o.disconnect())},[t]),r}function EN(t){const e=VE(t);return DE(t,e)}const Av=[];function xN(t){const e=y.useRef(t),n=qa(r=>t?r&&r!==Av&&t&&e.current&&t.parentNode===e.current.parentNode?r:Kp(t):Av,[t]);return y.useEffect(()=>{e.current=t},[t]),n}function bN(t){const[e,n]=y.useState(null),r=y.useRef(t),i=y.useCallback(s=>{const o=Fd(s.target);o&&n(a=>a?(a.set(o,sf(o)),new Map(a)):null)},[]);return y.useEffect(()=>{const s=r.current;if(t!==s){o(s);const a=t.map(l=>{const c=Fd(l);return c?(c.addEventListener("scroll",i,{passive:!0}),[c,sf(c)]):null}).filter(l=>l!=null);n(a.length?new Map(a):null),r.current=t}return()=>{o(t),o(s)};function o(a){a.forEach(l=>{const c=Fd(l);c==null||c.removeEventListener("scroll",i)})}},[i,t]),y.useMemo(()=>t.length?e?Array.from(e.values()).reduce((s,o)=>Is(s,o),kn):zE(t):kn,[t,e])}function Ov(t,e){e===void 0&&(e=[]);const n=y.useRef(null);return y.useEffect(()=>{n.current=null},e),y.useEffect(()=>{const r=t!==kn;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Oc(t,n.current):kn}function IN(t){y.useEffect(()=>{if(!Iu)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function SN(t,e){return y.useMemo(()=>t.reduce((n,r)=>{let{eventName:i,handler:s}=r;return n[i]=o=>{s(o,e)},n},{}),[t,e])}function WE(t){return y.useMemo(()=>t?qC(t):null,[t])}const Pv=[];function kN(t,e){e===void 0&&(e=to);const[n]=t,r=WE(n?Ot(n):null),[i,s]=y.useState(Pv);function o(){s(()=>t.length?t.map(l=>UE(l)?r:new qp(e(l),l)):Pv)}const a=Su({callback:o});return Wn(()=>{a==null||a.disconnect(),o(),t.forEach(l=>a==null?void 0:a.observe(l))},[t]),i}function TN(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return Ka(e)?e:t}function CN(t){let{measure:e}=t;const[n,r]=y.useState(null),i=y.useCallback(c=>{for(const{target:h}of c)if(Ka(h)){r(d=>{const f=e(h);return d?{...d,width:f.width,height:f.height}:f});break}},[e]),s=Su({callback:i}),o=y.useCallback(c=>{const h=TN(c);s==null||s.disconnect(),h&&(s==null||s.observe(h)),r(h?e(h):null)},[e,s]),[a,l]=Ac(o);return y.useMemo(()=>({nodeRef:a,rect:n,setRef:l}),[n,a,l])}const NN=[{sensor:Jp,options:{}},{sensor:HE,options:{}}],RN={current:{}},tc={draggable:{measure:Sv},droppable:{measure:Sv,strategy:Ia.WhileDragging,frequency:af.Optimized},dragOverlay:{measure:to}};class Qo extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const AN={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Qo,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Pc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:tc,measureDroppableContainers:Pc,windowRect:null,measuringScheduled:!1},ON={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Pc,draggableNodes:new Map,over:null,measureDroppableContainers:Pc},ku=y.createContext(ON),$E=y.createContext(AN);function PN(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Qo}}}function DN(t,e){switch(e.type){case Ue.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case Ue.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case Ue.DragEnd:case Ue.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ue.RegisterDroppable:{const{element:n}=e,{id:r}=n,i=new Qo(t.droppable.containers);return i.set(r,n),{...t,droppable:{...t.droppable,containers:i}}}case Ue.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const o=new Qo(t.droppable.containers);return o.set(n,{...s,disabled:i}),{...t,droppable:{...t.droppable,containers:o}}}case Ue.UnregisterDroppable:{const{id:n,key:r}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const s=new Qo(t.droppable.containers);return s.delete(n),{...t,droppable:{...t.droppable,containers:s}}}default:return t}}function LN(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:i}=y.useContext(ku),s=nf(r),o=nf(n==null?void 0:n.id);return y.useEffect(()=>{if(!e&&!r&&s&&o!=null){if(!Yp(s)||document.activeElement===s.target)return;const a=i.get(o);if(!a)return;const{activatorNode:l,node:c}=a;if(!l.current&&!c.current)return;requestAnimationFrame(()=>{for(const h of[l.current,c.current]){if(!h)continue;const d=IC(h);if(d){d.focus();break}}})}},[r,e,i,o,s]),null}function MN(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((i,s)=>s({transform:i,...r}),n):n}function jN(t){return y.useMemo(()=>({draggable:{...tc.draggable,...t==null?void 0:t.draggable},droppable:{...tc.droppable,...t==null?void 0:t.droppable},dragOverlay:{...tc.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function UN(t){let{activeNode:e,measure:n,initialRect:r,config:i=!0}=t;const s=y.useRef(!1),{x:o,y:a}=typeof i=="boolean"?{x:i,y:i}:i;Wn(()=>{if(!o&&!a||!e){s.current=!1;return}if(s.current||!r)return;const c=e==null?void 0:e.node.current;if(!c||c.isConnected===!1)return;const h=n(c),d=DE(h,r);if(o||(d.x=0),a||(d.y=0),s.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const f=LE(c);f&&f.scrollBy({top:d.y,left:d.x})}},[e,o,a,r,n])}const GE=y.createContext({...kn,scaleX:1,scaleY:1});var Tr;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(Tr||(Tr={}));const FN=y.memo(function(e){var n,r,i,s;let{id:o,accessibility:a,autoScroll:l=!0,children:c,sensors:h=NN,collisionDetection:d=HC,measuring:f,modifiers:g,..._}=e;const w=y.useReducer(DN,void 0,PN),[E,v]=w,[p,m]=RC(),[x,k]=y.useState(Tr.Uninitialized),b=x===Tr.Initialized,{draggable:{active:T,nodes:S,translate:C},droppable:{containers:R}}=E,L=T!=null?S.get(T):null,B=y.useRef({initial:null,translated:null}),J=y.useMemo(()=>{var st;return T!=null?{id:T,data:(st=L==null?void 0:L.data)!=null?st:RN,rect:B}:null},[T,L]),Z=y.useRef(null),[Oe,Le]=y.useState(null),[G,D]=y.useState(null),N=xa(_,Object.values(_)),I=Qa("DndDescribedBy",o),F=y.useMemo(()=>R.getEnabled(),[R]),z=jN(f),{droppableRects:U,measureDroppableContainers:oe,measuringScheduled:ce}=vN(F,{dragging:b,dependencies:[C.x,C.y],config:z.droppable}),te=gN(S,T),Re=y.useMemo(()=>G?rf(G):null,[G]),Dt=hS(),Nn=_N(te,z.draggable.measure);UN({activeNode:T!=null?S.get(T):null,config:Dt.layoutShiftCompensation,initialRect:Nn,measure:z.draggable.measure});const ie=Rv(te,z.draggable.measure,Nn),ci=Rv(te?te.parentElement:null),Lt=y.useRef({activatorEvent:null,active:null,activeNode:te,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:S,draggingNode:null,draggingNodeRect:null,droppableContainers:R,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Kn=R.getNodeFor((n=Lt.current.over)==null?void 0:n.id),pn=CN({measure:z.dragOverlay.measure}),pe=(r=pn.nodeRef.current)!=null?r:te,qn=b?(i=pn.rect)!=null?i:ie:null,Qn=!!(pn.nodeRef.current&&pn.rect),Ki=EN(Qn?null:ie),qi=WE(pe?Ot(pe):null),Rn=xN(b?Kn??te:null),Qi=kN(Rn),Ji=MN(g,{transform:{x:C.x-Ki.x,y:C.y-Ki.y,scaleX:1,scaleY:1},activatorEvent:G,active:J,activeNodeRect:ie,containerNodeRect:ci,draggingNodeRect:qn,over:Lt.current.over,overlayNodeRect:pn.rect,scrollableAncestors:Rn,scrollableAncestorRects:Qi,windowRect:qi}),uo=Re?Is(Re,C):null,ho=bN(Rn),ld=Ov(ho),gl=Ov(ho,[ie]),M=Is(Ji,ld),Y=qn?$C(qn,Ji):null,ye=J&&Y?d({active:J,collisionRect:Y,droppableRects:U,droppableContainers:F,pointerCoordinates:uo}):null,Et=FC(ye,"id"),[dt,Jn]=y.useState(null),ui=Qn?Ji:Is(Ji,gl),lS=VC(ui,(s=dt==null?void 0:dt.rect)!=null?s:null,ie),cd=y.useRef(null),um=y.useCallback((st,Mt)=>{let{sensor:jt,options:wr}=Mt;if(Z.current==null)return;const Qt=S.get(Z.current);if(!Qt)return;const Ut=st.nativeEvent,An=new jt({active:Z.current,activeNode:Qt,event:Ut,options:wr,context:Lt,onAbort(Xe){if(!S.get(Xe))return;const{onDragAbort:On}=N.current,Xn={id:Xe};On==null||On(Xn),p({type:"onDragAbort",event:Xn})},onPending(Xe,Er,On,Xn){if(!S.get(Xe))return;const{onDragPending:po}=N.current,xr={id:Xe,constraint:Er,initialCoordinates:On,offset:Xn};po==null||po(xr),p({type:"onDragPending",event:xr})},onStart(Xe){const Er=Z.current;if(Er==null)return;const On=S.get(Er);if(!On)return;const{onDragStart:Xn}=N.current,fo={activatorEvent:Ut,active:{id:Er,data:On.data,rect:B}};gs.unstable_batchedUpdates(()=>{Xn==null||Xn(fo),k(Tr.Initializing),v({type:Ue.DragStart,initialCoordinates:Xe,active:Er}),p({type:"onDragStart",event:fo}),Le(cd.current),D(Ut)})},onMove(Xe){v({type:Ue.DragMove,coordinates:Xe})},onEnd:Xi(Ue.DragEnd),onCancel:Xi(Ue.DragCancel)});cd.current=An;function Xi(Xe){return async function(){const{active:On,collisions:Xn,over:fo,scrollAdjustedTranslate:po}=Lt.current;let xr=null;if(On&&po){const{cancelDrop:go}=N.current;xr={activatorEvent:Ut,active:On,collisions:Xn,delta:po,over:fo},Xe===Ue.DragEnd&&typeof go=="function"&&await Promise.resolve(go(xr))&&(Xe=Ue.DragCancel)}Z.current=null,gs.unstable_batchedUpdates(()=>{v({type:Xe}),k(Tr.Uninitialized),Jn(null),Le(null),D(null),cd.current=null;const go=Xe===Ue.DragEnd?"onDragEnd":"onDragCancel";if(xr){const ud=N.current[go];ud==null||ud(xr),p({type:go,event:xr})}})}}},[S]),cS=y.useCallback((st,Mt)=>(jt,wr)=>{const Qt=jt.nativeEvent,Ut=S.get(wr);if(Z.current!==null||!Ut||Qt.dndKit||Qt.defaultPrevented)return;const An={active:Ut};st(jt,Mt.options,An)===!0&&(Qt.dndKit={capturedBy:Mt.sensor},Z.current=wr,um(jt,Mt))},[S,um]),dm=mN(h,cS);IN(h),Wn(()=>{ie&&x===Tr.Initializing&&k(Tr.Initialized)},[ie,x]),y.useEffect(()=>{const{onDragMove:st}=N.current,{active:Mt,activatorEvent:jt,collisions:wr,over:Qt}=Lt.current;if(!Mt||!jt)return;const Ut={active:Mt,activatorEvent:jt,collisions:wr,delta:{x:M.x,y:M.y},over:Qt};gs.unstable_batchedUpdates(()=>{st==null||st(Ut),p({type:"onDragMove",event:Ut})})},[M.x,M.y]),y.useEffect(()=>{const{active:st,activatorEvent:Mt,collisions:jt,droppableContainers:wr,scrollAdjustedTranslate:Qt}=Lt.current;if(!st||Z.current==null||!Mt||!Qt)return;const{onDragOver:Ut}=N.current,An=wr.get(Et),Xi=An&&An.rect.current?{id:An.id,rect:An.rect.current,data:An.data,disabled:An.disabled}:null,Xe={active:st,activatorEvent:Mt,collisions:jt,delta:{x:Qt.x,y:Qt.y},over:Xi};gs.unstable_batchedUpdates(()=>{Jn(Xi),Ut==null||Ut(Xe),p({type:"onDragOver",event:Xe})})},[Et]),Wn(()=>{Lt.current={activatorEvent:G,active:J,activeNode:te,collisionRect:Y,collisions:ye,droppableRects:U,draggableNodes:S,draggingNode:pe,draggingNodeRect:qn,droppableContainers:R,over:dt,scrollableAncestors:Rn,scrollAdjustedTranslate:M},B.current={initial:qn,translated:Y}},[J,te,ye,Y,S,pe,qn,U,R,dt,Rn,M]),hN({...Dt,delta:C,draggingRect:Y,pointerCoordinates:uo,scrollableAncestors:Rn,scrollableAncestorRects:Qi});const uS=y.useMemo(()=>({active:J,activeNode:te,activeNodeRect:ie,activatorEvent:G,collisions:ye,containerNodeRect:ci,dragOverlay:pn,draggableNodes:S,droppableContainers:R,droppableRects:U,over:dt,measureDroppableContainers:oe,scrollableAncestors:Rn,scrollableAncestorRects:Qi,measuringConfiguration:z,measuringScheduled:ce,windowRect:qi}),[J,te,ie,G,ye,ci,pn,S,R,U,dt,oe,Rn,Qi,z,ce,qi]),dS=y.useMemo(()=>({activatorEvent:G,activators:dm,active:J,activeNodeRect:ie,ariaDescribedById:{draggable:I},dispatch:v,draggableNodes:S,over:dt,measureDroppableContainers:oe}),[G,dm,J,ie,v,I,S,dt,oe]);return gt.createElement(PE.Provider,{value:m},gt.createElement(ku.Provider,{value:dS},gt.createElement($E.Provider,{value:uS},gt.createElement(GE.Provider,{value:lS},c)),gt.createElement(LN,{disabled:(a==null?void 0:a.restoreFocus)===!1})),gt.createElement(PC,{...a,hiddenTextDescribedById:I}));function hS(){const st=(Oe==null?void 0:Oe.autoScrollEnabled)===!1,Mt=typeof l=="object"?l.enabled===!1:l===!1,jt=b&&!st&&!Mt;return typeof l=="object"?{...l,enabled:jt}:{enabled:jt}}}),zN=y.createContext(null),Dv="button",BN="Draggable";function HN(t){let{id:e,data:n,disabled:r=!1,attributes:i}=t;const s=Qa(BN),{activators:o,activatorEvent:a,active:l,activeNodeRect:c,ariaDescribedById:h,draggableNodes:d,over:f}=y.useContext(ku),{role:g=Dv,roleDescription:_="draggable",tabIndex:w=0}=i??{},E=(l==null?void 0:l.id)===e,v=y.useContext(E?GE:zN),[p,m]=Ac(),[x,k]=Ac(),b=SN(o,e),T=xa(n);Wn(()=>(d.set(e,{id:e,key:s,node:p,activatorNode:x,data:T}),()=>{const C=d.get(e);C&&C.key===s&&d.delete(e)}),[d,e]);const S=y.useMemo(()=>({role:g,tabIndex:w,"aria-disabled":r,"aria-pressed":E&&g===Dv?!0:void 0,"aria-roledescription":_,"aria-describedby":h.draggable}),[r,g,w,E,_,h.draggable]);return{active:l,activatorEvent:a,activeNodeRect:c,attributes:S,isDragging:E,listeners:r?void 0:b,node:p,over:f,setNodeRef:m,setActivatorNodeRef:k,transform:v}}function VN(){return y.useContext($E)}const WN="Droppable",$N={timeout:25};function GN(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:i}=t;const s=Qa(WN),{active:o,dispatch:a,over:l,measureDroppableContainers:c}=y.useContext(ku),h=y.useRef({disabled:n}),d=y.useRef(!1),f=y.useRef(null),g=y.useRef(null),{disabled:_,updateMeasurementsFor:w,timeout:E}={...$N,...i},v=xa(w??r),p=y.useCallback(()=>{if(!d.current){d.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{c(Array.isArray(v.current)?v.current:[v.current]),g.current=null},E)},[E]),m=Su({callback:p,disabled:_||!o}),x=y.useCallback((S,C)=>{m&&(C&&(m.unobserve(C),d.current=!1),S&&m.observe(S))},[m]),[k,b]=Ac(x),T=xa(e);return y.useEffect(()=>{!m||!k.current||(m.disconnect(),d.current=!1,m.observe(k.current))},[k,m]),y.useEffect(()=>(a({type:Ue.RegisterDroppable,element:{id:r,key:s,disabled:n,node:k,rect:f,data:T}}),()=>a({type:Ue.UnregisterDroppable,key:s,id:r})),[r]),y.useEffect(()=>{n!==h.current.disabled&&(a({type:Ue.SetDroppableDisabled,id:r,key:s,disabled:n}),h.current.disabled=n)},[r,s,n,a]),{active:o,rect:f,isOver:(l==null?void 0:l.id)===r,node:k,over:l,setNodeRef:b}}function YE(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function YN(t,e){return t.reduce((n,r,i)=>{const s=e.get(r);return s&&(n[i]=s),n},Array(t.length))}function Pl(t){return t!==null&&t>=0}function KN(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function qN(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const Dl={scaleX:1,scaleY:1},QN=t=>{var e;let{rects:n,activeNodeRect:r,activeIndex:i,overIndex:s,index:o}=t;const a=(e=n[i])!=null?e:r;if(!a)return null;const l=JN(n,o,i);if(o===i){const c=n[s];return c?{x:i<s?c.left+c.width-(a.left+a.width):c.left-a.left,y:0,...Dl}:null}return o>i&&o<=s?{x:-a.width-l,y:0,...Dl}:o<i&&o>=s?{x:a.width+l,y:0,...Dl}:{x:0,y:0,...Dl}};function JN(t,e,n){const r=t[e],i=t[e-1],s=t[e+1];return!r||!i&&!s?0:n<e?i?r.left-(i.left+i.width):s.left-(r.left+r.width):s?s.left-(r.left+r.width):r.left-(i.left+i.width)}const KE=t=>{let{rects:e,activeIndex:n,overIndex:r,index:i}=t;const s=YE(e,r,n),o=e[i],a=s[i];return!a||!o?null:{x:a.left-o.left,y:a.top-o.top,scaleX:a.width/o.width,scaleY:a.height/o.height}},qE="Sortable",QE=gt.createContext({activeIndex:-1,containerId:qE,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:KE,disabled:{draggable:!1,droppable:!1}});function XN(t){let{children:e,id:n,items:r,strategy:i=KE,disabled:s=!1}=t;const{active:o,dragOverlay:a,droppableRects:l,over:c,measureDroppableContainers:h}=VN(),d=Qa(qE,n),f=a.rect!==null,g=y.useMemo(()=>r.map(b=>typeof b=="object"&&"id"in b?b.id:b),[r]),_=o!=null,w=o?g.indexOf(o.id):-1,E=c?g.indexOf(c.id):-1,v=y.useRef(g),p=!KN(g,v.current),m=E!==-1&&w===-1||p,x=qN(s);Wn(()=>{p&&_&&h(g)},[p,g,_,h]),y.useEffect(()=>{v.current=g},[g]);const k=y.useMemo(()=>({activeIndex:w,containerId:d,disabled:x,disableTransforms:m,items:g,overIndex:E,useDragOverlay:f,sortedRects:YN(g,l),strategy:i}),[w,d,x.draggable,x.droppable,m,g,E,l,f,i]);return gt.createElement(QE.Provider,{value:k},e)}const ZN=t=>{let{id:e,items:n,activeIndex:r,overIndex:i}=t;return YE(n,r,i).indexOf(e)},e1=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:i,items:s,newIndex:o,previousItems:a,previousContainerId:l,transition:c}=t;return!c||!r||a!==s&&i===o?!1:n?!0:o!==i&&e===l},t1={duration:200,easing:"ease"},JE="transform",n1=ba.Transition.toString({property:JE,duration:0,easing:"linear"}),r1={roleDescription:"sortable"};function i1(t){let{disabled:e,index:n,node:r,rect:i}=t;const[s,o]=y.useState(null),a=y.useRef(n);return Wn(()=>{if(!e&&n!==a.current&&r.current){const l=i.current;if(l){const c=to(r.current,{ignoreTransform:!0}),h={x:l.left-c.left,y:l.top-c.top,scaleX:l.width/c.width,scaleY:l.height/c.height};(h.x||h.y)&&o(h)}}n!==a.current&&(a.current=n)},[e,n,r,i]),y.useEffect(()=>{s&&o(null)},[s]),s}function s1(t){let{animateLayoutChanges:e=e1,attributes:n,disabled:r,data:i,getNewIndex:s=ZN,id:o,strategy:a,resizeObserverConfig:l,transition:c=t1}=t;const{items:h,containerId:d,activeIndex:f,disabled:g,disableTransforms:_,sortedRects:w,overIndex:E,useDragOverlay:v,strategy:p}=y.useContext(QE),m=o1(r,g),x=h.indexOf(o),k=y.useMemo(()=>({sortable:{containerId:d,index:x,items:h},...i}),[d,i,x,h]),b=y.useMemo(()=>h.slice(h.indexOf(o)),[h,o]),{rect:T,node:S,isOver:C,setNodeRef:R}=GN({id:o,data:k,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...l}}),{active:L,activatorEvent:B,activeNodeRect:J,attributes:Z,setNodeRef:Oe,listeners:Le,isDragging:G,over:D,setActivatorNodeRef:N,transform:I}=HN({id:o,data:k,attributes:{...r1,...n},disabled:m.draggable}),F=wC(R,Oe),z=!!L,U=z&&!_&&Pl(f)&&Pl(E),oe=!v&&G,ce=oe&&U?I:null,Re=U?ce??(a??p)({rects:w,activeNodeRect:J,activeIndex:f,overIndex:E,index:x}):null,Dt=Pl(f)&&Pl(E)?s({id:o,items:h,activeIndex:f,overIndex:E}):x,Nn=L==null?void 0:L.id,ie=y.useRef({activeId:Nn,items:h,newIndex:Dt,containerId:d}),ci=h!==ie.current.items,Lt=e({active:L,containerId:d,isDragging:G,isSorting:z,id:o,index:x,items:h,newIndex:ie.current.newIndex,previousItems:ie.current.items,previousContainerId:ie.current.containerId,transition:c,wasDragging:ie.current.activeId!=null}),Kn=i1({disabled:!Lt,index:x,node:S,rect:T});return y.useEffect(()=>{z&&ie.current.newIndex!==Dt&&(ie.current.newIndex=Dt),d!==ie.current.containerId&&(ie.current.containerId=d),h!==ie.current.items&&(ie.current.items=h)},[z,Dt,d,h]),y.useEffect(()=>{if(Nn===ie.current.activeId)return;if(Nn!=null&&ie.current.activeId==null){ie.current.activeId=Nn;return}const pe=setTimeout(()=>{ie.current.activeId=Nn},50);return()=>clearTimeout(pe)},[Nn]),{active:L,activeIndex:f,attributes:Z,data:k,rect:T,index:x,newIndex:Dt,items:h,isOver:C,isSorting:z,isDragging:G,listeners:Le,node:S,overIndex:E,over:D,setNodeRef:F,setActivatorNodeRef:N,setDroppableNodeRef:R,setDraggableNodeRef:Oe,transform:Kn??Re,transition:pn()};function pn(){if(Kn||ci&&ie.current.newIndex===x)return n1;if(!(oe&&!Yp(B)||!c)&&(z||Lt))return ba.Transition.toString({...c,property:JE})}}function o1(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}re.Down,re.Right,re.Up,re.Left;const a1=({cat:t,selected:e,onSelect:n,isAdmin:r,onEditCategory:i,onDeleteCategory:s,isEditMode:o})=>{const{attributes:a,listeners:l,setNodeRef:c,transform:h,transition:d,isDragging:f}=s1({id:t,disabled:!o}),g={transform:ba.Transform.toString(h),transition:d,zIndex:f?50:1,opacity:f?.5:1,touchAction:"none"};return u.jsxs("div",{ref:c,style:g,className:"relative group flex-shrink-0",children:[u.jsxs("div",{className:`relative px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap select-none flex items-center gap-2 ${e===t?"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent":"bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:[o&&u.jsx("span",{...a,...l,className:"cursor-grab text-gray-400 hover:text-gray-600",children:u.jsx(ZT,{size:12})}),u.jsx("button",{onClick:()=>n(t),className:"focus:outline-none",children:t})]}),r&&o&&t!=="N/A"&&u.jsxs("div",{className:"absolute -top-2 -right-2 flex gap-1 z-10 pointer-events-auto animate-in zoom-in duration-200",children:[u.jsx("button",{onPointerDown:_=>_.stopPropagation(),onClick:_=>{_.stopPropagation(),i==null||i(t)},className:"w-5 h-5 bg-white dark:bg-gray-700 text-blue-600 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform",title:"Edit",children:u.jsx("i",{className:"fa-solid fa-pencil text-[8px]"})}),u.jsx("button",{onPointerDown:_=>_.stopPropagation(),onClick:_=>{_.stopPropagation(),s==null||s(t)},className:"w-5 h-5 bg-white dark:bg-gray-700 text-red-500 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform",title:"Delete",children:u.jsx("i",{className:"fa-solid fa-trash text-[8px]"})})]})]})},l1=({categories:t,selected:e,onSelect:n,isAdmin:r,onEditCategory:i,onDeleteCategory:s,onReorder:o,isEditMode:a})=>{const l=LC(DC(Jp,{activationConstraint:{distance:5}})),c=h=>{const{active:d,over:f}=h;if(f&&d.id!==f.id&&o){const g=t.indexOf(d.id),_=t.indexOf(f.id),w=[...t];w.splice(g,1),w.splice(_,0,d.id),o(w)}};return u.jsxs("div",{className:"flex gap-2 py-2 no-scrollbar overflow-x-auto items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("button",{onClick:()=>n("All"),className:`px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap ${e==="All"?"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent":"bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:"All"})}),a?u.jsx(FN,{sensors:l,collisionDetection:zC,onDragEnd:c,children:u.jsx(XN,{items:t,strategy:QN,children:t.map(h=>u.jsx(a1,{cat:h,selected:e,onSelect:n,isAdmin:r,onEditCategory:i,onDeleteCategory:s,isEditMode:!0},h))})}):t.map(h=>u.jsx("button",{onClick:()=>n(h),className:`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg border transition-all whitespace-nowrap ${e===h?"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-transparent":"bg-white dark:bg-[#303134] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:h},h))]})},Lv=({spiel:t,onCopy:e,isAdmin:n,onEdit:r,onDelete:i,onRestore:s,onPin:o,onExpand:a,isTrashView:l=!1,onViewImage:c,isEditMode:h=!1})=>{const d=async(b,T)=>{try{await navigator.clipboard.writeText(b),e(`${T} Copied!`)}catch{e("Failed to copy text.")}},f=b=>{if(!b)return null;const T=/(https?:\/\/[^\s]+)/g;return b.split(T).map((C,R)=>C.match(T)?u.jsx("a",{href:C,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline z-20 relative break-all font-bold",onClick:L=>L.stopPropagation(),children:C},R):C)},g=t.category==="Return/Refund"||t.title.toLowerCase().includes("scam")||t.title.toLowerCase().includes("urgent"),w=g&&!l?"bg-[#3f1212] border-red-900/50":t.color?`${t.color} border-transparent`:"bg-white dark:bg-[#1e1e1e] border-gray-200 dark:border-[#333]",E=g&&!l,v=E?"text-white":"text-gray-900 dark:text-gray-100",p=E?"text-white/80":"text-gray-600 dark:text-gray-300",m=E?"border-white/20":"border-gray-200 dark:border-gray-700",x=t.images||[],k=()=>{if(x.length===0)return null;const b=(R,L)=>{R.stopPropagation(),c==null||c(L)},T="w-full bg-black border-b border-gray-200 dark:border-gray-800";if(x.length===1)return u.jsx("div",{className:"w-full h-40 bg-gray-100 dark:bg-gray-800 relative group/image",children:u.jsx("img",{src:x[0],alt:"attachment",className:"w-full h-full object-cover transition-opacity hover:opacity-90 cursor-zoom-in",onClick:R=>b(R,x[0]),loading:"lazy"})});if(x.length===2)return u.jsx("div",{className:`${T} h-40 grid grid-cols-2 gap-[1px]`,children:x.map((R,L)=>u.jsx("div",{className:"relative w-full h-full overflow-hidden bg-white dark:bg-gray-800",children:u.jsx("img",{src:R,alt:`attachment ${L}`,className:"w-full h-full object-cover hover:opacity-90 cursor-zoom-in",onClick:B=>b(B,R),loading:"lazy"})},L))});if(x.length===3)return u.jsxs("div",{className:`${T} h-52 flex flex-col gap-[1px]`,children:[u.jsx("div",{className:"w-full h-[60%] overflow-hidden relative bg-white dark:bg-gray-800",children:u.jsx("img",{src:x[0],alt:"attachment 0",className:"w-full h-full object-cover hover:opacity-90 cursor-zoom-in",onClick:R=>b(R,x[0]),loading:"lazy"})}),u.jsx("div",{className:"w-full h-[40%] grid grid-cols-2 gap-[1px]",children:x.slice(1).map((R,L)=>u.jsx("div",{className:"relative w-full h-full overflow-hidden bg-white dark:bg-gray-800",children:u.jsx("img",{src:R,alt:`attachment ${L+1}`,className:"w-full h-full object-cover hover:opacity-90 cursor-zoom-in",onClick:B=>b(B,R),loading:"lazy"})},L))})]});const S=x.slice(0,4),C=x.length-4;return u.jsx("div",{className:`${T} h-52 grid grid-cols-2 grid-rows-2 gap-[1px]`,children:S.map((R,L)=>u.jsxs("div",{className:"relative w-full h-full overflow-hidden group/item bg-white dark:bg-gray-800",children:[u.jsx("img",{src:R,alt:`attachment ${L}`,className:"w-full h-full object-cover hover:opacity-90 cursor-zoom-in",onClick:B=>b(B,R),loading:"lazy"}),L===3&&C>0&&u.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors",onClick:B=>{B.stopPropagation(),a==null||a()},children:u.jsxs("span",{className:"text-white font-bold text-lg",children:["+",C]})})]},L))})};return u.jsxs("div",{id:t.id,className:`
        relative flex flex-col break-inside-avoid h-full rounded-xl overflow-hidden transition-all duration-200 border shadow-sm
        ${w}
        ${l?"":"cursor-pointer hover:shadow-md"}
      `,onClick:l?void 0:a,children:[k(),u.jsxs("div",{className:"p-4 flex flex-col gap-2 flex-grow",children:[u.jsxs("div",{className:"flex justify-between items-start gap-2 relative",children:[u.jsx("h3",{className:`font-bold text-sm leading-tight pr-4 ${v}`,children:t.title}),u.jsxs("div",{className:"flex flex-col items-center gap-1",children:[t.isDefault&&u.jsx(bu,{size:12,className:"text-orange-500 flex-shrink-0"}),t.isPinned&&!l&&u.jsx("div",{className:"absolute top-0 right-0 -mt-1 -mr-1",children:u.jsx(Rc,{size:12,className:"text-gray-900 dark:text-gray-100 fill-current"})})]})]}),u.jsxs("div",{className:`space-y-2 text-xs leading-relaxed ${p}`,children:[t.english&&u.jsx("div",{className:"line-clamp-6 transition-all select-none",children:f(t.english)}),t.english&&t.brazil&&u.jsx("div",{className:`border-t border-dashed ${m}`}),t.brazil&&u.jsx("div",{className:"line-clamp-6 transition-all select-none",children:f(t.brazil)})]}),u.jsxs("div",{className:"flex items-center justify-between pt-3 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:[u.jsxs("div",{className:"flex gap-1.5",children:[t.english&&u.jsx("button",{onClick:b=>{b.stopPropagation(),d(t.english,"EN")},className:`px-2 py-0.5 rounded text-[9px] font-black border opacity-80 hover:opacity-100 transition-opacity ${E?"border-white/40 text-white":"border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400"}`,children:"EN"}),t.brazil&&u.jsx("button",{onClick:b=>{b.stopPropagation(),d(t.brazil,"BR")},className:`px-2 py-0.5 rounded text-[9px] font-black border opacity-80 hover:opacity-100 transition-opacity ${E?"border-white/40 text-white":"border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400"}`,children:"BZ"})]}),u.jsx("div",{className:"flex gap-1",children:l?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:b=>{b.stopPropagation(),s==null||s()},className:"p-1 text-green-500",children:u.jsx(CE,{size:14})}),u.jsx("button",{onClick:b=>{b.stopPropagation(),i==null||i()},className:"p-1 text-red-500",children:u.jsx(Oi,{size:14})})]}):u.jsxs(u.Fragment,{children:[o&&u.jsx("button",{onClick:b=>{b.stopPropagation(),o()},className:`p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${t.isPinned?"text-gray-900 dark:text-gray-100":"text-gray-400"}`,children:u.jsx(Rc,{size:14,className:t.isPinned?"fill-current":""})}),n&&!t.isDefault&&u.jsx("button",{onClick:b=>{b.stopPropagation(),r==null||r()},className:`p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${E?"text-white/70 hover:text-white":"text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,children:u.jsx(TE,{size:14})}),n&&!t.isDefault&&u.jsx("button",{onClick:b=>{b.stopPropagation(),i==null||i()},className:"p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-400 hover:text-red-500",children:u.jsx(Oi,{size:14})})]})})]})]})]})},XE=async t=>new Promise((e,n)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=i=>{var o;const s=new Image;s.src=(o=i.target)==null?void 0:o.result,s.onload=()=>{const a=document.createElement("canvas");let l=s.width,c=s.height;const h=800,d=800;l>c?l>h&&(c*=h/l,l=h):c>d&&(l*=d/c,c=d),a.width=l,a.height=c;const f=a.getContext("2d");if(!f){n(new Error("Could not get canvas context"));return}f.drawImage(s,0,0,l,c),e(a.toDataURL("image/jpeg",.6))},s.onerror=a=>n(a)},r.onerror=i=>n(i)}),c1=[{label:"Default",value:"bg-white dark:bg-[#1e1e1e]"},{label:"Red",value:"bg-red-100 dark:bg-red-900/30"},{label:"Orange",value:"bg-orange-100 dark:bg-orange-900/30"},{label:"Yellow",value:"bg-yellow-100 dark:bg-yellow-900/30"},{label:"Green",value:"bg-green-100 dark:bg-green-900/30"},{label:"Teal",value:"bg-teal-100 dark:bg-teal-900/30"},{label:"Blue",value:"bg-blue-100 dark:bg-blue-900/30"},{label:"Purple",value:"bg-purple-100 dark:bg-purple-900/30"},{label:"Pink",value:"bg-pink-100 dark:bg-pink-900/30"},{label:"Gray",value:"bg-gray-100 dark:bg-gray-800"}],u1=({categories:t,onClose:e,onSubmit:n,initialData:r,onPushInitialData:i,onRepairDatabase:s,currentSpiels:o=[]})=>{const[a,l]=y.useState("content"),[c,h]=y.useState(!1),[d,f]=y.useState({category:t[0]||"N/A",title:"",english:"",brazil:"",tags:[],images:[],color:"bg-white dark:bg-[#1e1e1e]"}),g=y.useMemo(()=>{const p=JSON.stringify(o),m=new TextEncoder().encode(p).length,x=(m/1024).toFixed(2),k=(m/(1024*1024*1024)*100).toFixed(6);return{kb:x,percentage:k,count:o.length}},[o]);y.useEffect(()=>{r&&f({category:r.category,title:r.title,english:r.english,brazil:r.brazil,tags:r.tags||[],images:r.images||[],color:r.color||"bg-white dark:bg-[#1e1e1e]"})},[r]),y.useEffect(()=>{const p=m=>{m.key==="Escape"&&e()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[e]),y.useEffect(()=>{const p=async m=>{var k;const x=(k=m.clipboardData)==null?void 0:k.items;if(x){for(let b=0;b<x.length;b++)if(x[b].type.indexOf("image")!==-1){const T=x[b].getAsFile();T&&await _(T)}}};return window.addEventListener("paste",p),()=>window.removeEventListener("paste",p)},[d.images]);const _=async p=>{h(!0);try{const m=await XE(p);f(x=>({...x,images:[...x.images||[],m]}))}catch(m){console.error("Image compression failed",m)}finally{h(!1)}},w=async p=>{if(p.preventDefault(),p.dataTransfer.files&&p.dataTransfer.files[0]){const m=p.dataTransfer.files[0];m.type.startsWith("image/")&&await _(m)}},E=p=>{f(m=>{var x;return{...m,images:(x=m.images)==null?void 0:x.filter((k,b)=>b!==p)}})},v=p=>{if(p.preventDefault(),a==="settings"){e();return}n(d)};return u.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:u.jsxs("div",{className:`
        ${d.color?d.color.split(" ")[0]:"bg-white"} dark:bg-[#1e1e1e]
        rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-300
      `,children:[u.jsxs("div",{className:"px-8 pt-8 border-b border-black/5 dark:border-white/10",children:[u.jsxs("div",{className:"flex justify-between items-center mb-6",children:[u.jsxs("h2",{className:"text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter flex items-center gap-2",children:[u.jsx(JT,{className:"text-orange-500",size:20}),r?"Edit My Spiel":"Create My Spiel"]}),u.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",children:u.jsx("i",{className:"fa-solid fa-circle-xmark text-2xl"})})]}),u.jsxs("div",{className:"flex gap-6",children:[u.jsx("button",{onClick:()=>l("content"),className:`pb-4 text-[10px] font-black uppercase tracking-widest border-b-4 transition-all ${a==="content"?"border-orange-500 text-orange-600 dark:text-orange-400":"border-transparent text-gray-400 dark:text-slate-500"}`,children:"Content & Media"}),u.jsx("button",{onClick:()=>l("settings"),className:`pb-4 text-[10px] font-black uppercase tracking-widest border-b-4 transition-all ${a==="settings"?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-400 dark:text-slate-500"}`,children:"System & Storage"})]})]}),u.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:u.jsx("form",{id:"admin-form",onSubmit:v,className:"p-8 space-y-6",children:a==="content"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest",children:"Category"}),u.jsx("select",{className:"w-full p-3 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl font-bold text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors",value:d.category,onChange:p=>f({...d,category:p.target.value}),children:t.map(p=>u.jsx("option",{value:p,children:p},p))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest",children:"Title"}),u.jsx("input",{type:"text",className:"w-full p-3 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl font-bold text-sm text-gray-900 dark:text-white outline-none focus:border-orange-500 transition-colors",value:d.title,onChange:p=>f({...d,title:p.target.value}),required:!0,placeholder:"e.g., Refund Approved"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black text-red-600 dark:text-red-400 uppercase mb-2 tracking-widest",children:"English Response"}),u.jsx("textarea",{className:"w-full p-4 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl h-48 text-sm font-medium text-gray-900 dark:text-white outline-none focus:border-red-500 transition-colors resize-none",value:d.english,onChange:p=>f({...d,english:p.target.value}),required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase mb-2 tracking-widest",children:"Brazil (Portuguese)"}),u.jsx("textarea",{className:"w-full p-4 bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl h-48 text-sm font-medium text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors resize-none",value:d.brazil,onChange:p=>f({...d,brazil:p.target.value}),required:!0})]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest flex items-center gap-2",children:[u.jsx(kE,{size:14}),"Card Background"]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:c1.map(p=>u.jsx("button",{type:"button",onClick:()=>f({...d,color:p.value}),className:`w-8 h-8 rounded-full border-2 transition-all shadow-sm ${p.value.split(" ")[0]} ${d.color===p.value?"border-orange-500 scale-110":"border-gray-200 dark:border-gray-700 hover:scale-105"}`,title:p.label},p.label))})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase mb-2 tracking-widest flex items-center gap-2",children:[u.jsx(tC,{size:14}),"Visual Aids (Images)"]}),u.jsx("div",{className:"border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:bg-white/40 dark:hover:bg-black/40 hover:border-blue-400 transition-all cursor-pointer bg-white/20 dark:bg-black/20",onDragOver:p=>p.preventDefault(),onDrop:w,children:c?u.jsxs("div",{className:"animate-pulse flex flex-col items-center",children:[u.jsx(Ev,{size:24,className:"mb-2 text-blue-500 animate-spin"}),u.jsx("span",{className:"text-xs font-bold",children:"Compressing Image..."})]}):u.jsxs("div",{className:"text-center",children:[u.jsx(gC,{size:24,className:"mx-auto mb-2 opacity-50"}),u.jsxs("p",{className:"text-xs font-bold mb-1",children:["Drag & Drop or ",u.jsx("span",{className:"text-blue-500",children:"Paste (Ctrl+V)"})," images here"]}),u.jsx("p",{className:"text-[10px] opacity-60",children:"Images will be automatically compressed to save storage."})]})}),d.images&&d.images.length>0&&u.jsx("div",{className:"flex gap-3 mt-4 overflow-x-auto pb-2",children:d.images.map((p,m)=>u.jsxs("div",{className:"relative group flex-shrink-0",children:[u.jsx("img",{src:p,alt:"preview",className:"h-20 w-auto rounded-lg border border-gray-200 dark:border-slate-700 object-cover"}),u.jsx("button",{type:"button",onClick:()=>E(m),className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity",children:u.jsx(Xs,{size:12})})]},m))})]})]}):u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("h4",{className:"text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-2",children:[u.jsx(eC,{size:14,className:"text-blue-500"}),"Storage Monitor"]}),u.jsx("span",{className:"text-[10px] font-bold text-slate-400",children:"Limit: 1.00 GB"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800",children:[u.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase mb-1",children:"My Spiels"}),u.jsx("p",{className:"text-xl font-black text-blue-500",children:g.count})]}),u.jsxs("div",{className:"bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800",children:[u.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase mb-1",children:"Data Size"}),u.jsxs("p",{className:"text-xl font-black text-orange-500",children:[g.kb," ",u.jsx("span",{className:"text-xs",children:"KB"})]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-[10px] font-black uppercase tracking-tighter text-slate-500",children:[u.jsx("span",{children:"Usage Status"}),u.jsxs("span",{className:parseFloat(g.percentage)>80?"text-red-500":"text-green-500",children:[g.percentage,"% Used"]})]}),u.jsx("div",{className:"w-full h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000",style:{width:`${Math.max(parseFloat(g.percentage)*1e3,2)}%`}})}),u.jsx("p",{className:"text-[9px] text-slate-500 italic",children:"Estimating based on template character count. Actual Firebase storage includes metadata."})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s&&u.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 flex flex-col gap-3",children:[u.jsxs("div",{children:[u.jsxs("h4",{className:"text-xs font-black text-green-900 dark:text-green-100 uppercase mb-1 flex items-center gap-1.5",children:[u.jsx(Ev,{size:12}),"Repair Database"]}),u.jsx("p",{className:"text-[10px] text-green-700 dark:text-green-300 font-bold leading-relaxed",children:"Clean up cloud paths and fix broken template IDs."})]}),u.jsx("button",{type:"button",onClick:s,className:"bg-green-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-green-700 transition-colors self-start",children:"Sync & Repair"})]}),i&&u.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 flex flex-col gap-3",children:[u.jsxs("div",{children:[u.jsxs("h4",{className:"text-xs font-black text-blue-900 dark:text-blue-100 uppercase mb-1 flex items-center gap-1.5",children:[u.jsx(nC,{size:12}),"Factory Reset"]}),u.jsx("p",{className:"text-[10px] text-blue-700 dark:text-blue-300 font-bold leading-relaxed",children:"Wipe all custom spiels and restore defaults."})]}),u.jsx("button",{type:"button",onClick:i,className:"bg-blue-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-700 transition-colors self-start",children:"Reset to Default"})]})]})]})})}),u.jsxs("div",{className:"p-8 border-t border-black/5 dark:border-white/10 flex justify-end gap-4",children:[u.jsx("button",{type:"button",onClick:e,className:"text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors",children:"Close"}),a==="content"&&u.jsx("button",{form:"admin-form",type:"submit",className:"px-8 py-3 rounded-2xl text-white font-black text-xs uppercase tracking-widest shadow-lg bg-orange-500 hover:bg-orange-600 transition-transform active:scale-95",children:r?"Update Spiel":"Create Spiel"})]})]})})},Mv=({message:t})=>u.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce",children:u.jsxs("div",{className:"bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3",children:[u.jsx("i",{className:"fa-solid fa-circle-check text-green-400"}),u.jsx("span",{className:"text-sm font-medium",children:t})]})}),d1=({spiels:t,onSelectSpiel:e,filterText:n="",variant:r})=>{const[i,s]=y.useState("latest"),[o,a]=y.useState(!1),l=y.useMemo(()=>n?t.filter(d=>d.title.toLowerCase().includes(n.toLowerCase())):t,[t,n]),c=y.useMemo(()=>[...l].sort((d,f)=>{switch(i){case"az":return d.title.localeCompare(f.title);case"oldest":return d.createdAt-f.createdAt;case"latest":default:return f.createdAt-d.createdAt}}),[l,i]),h={latest:"Latest",oldest:"Oldest",az:"A-Z"}[i];return u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsxs("div",{className:"relative px-5 mb-1 group",children:[u.jsxs("button",{onClick:()=>a(!o),className:"flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 uppercase tracking-wider font-semibold transition-colors",children:[u.jsx("span",{children:h}),u.jsx(qT,{size:10})]}),o&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>a(!1)}),u.jsxs("div",{className:"absolute top-full left-5 mt-1 bg-white dark:bg-[#282a2c] rounded shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-20 min-w-[120px]",children:[u.jsx("button",{onClick:()=>{s("latest"),a(!1)},className:"w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300",children:"Latest"}),u.jsx("button",{onClick:()=>{s("oldest"),a(!1)},className:"w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300",children:"Oldest"}),u.jsx("button",{onClick:()=>{s("az"),a(!1)},className:"w-full text-left px-3 py-1.5 text-[11px] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300",children:"Name (A-Z)"})]})]})]}),u.jsx("div",{className:"flex flex-col",children:c.length===0?u.jsx("div",{className:"px-5 py-4 text-left",children:u.jsx("p",{className:"text-xs text-gray-400 italic",children:"No items found."})}):c.map(d=>u.jsx("button",{onClick:()=>e(d.id),className:`
                group w-full text-left pl-5 pr-2 py-1.5
                text-sm font-medium transition-all duration-150
                text-gray-600 dark:text-gray-400
                hover:text-blue-600 dark:hover:text-blue-400
                hover:bg-blue-50 dark:hover:bg-blue-900/10
                border-l-[3px] border-transparent hover:border-blue-500
                truncate
              `,title:d.title,children:d.title},d.id))})]})},h1=({title:t,message:e,onConfirm:n,onCancel:r,isDeleting:i})=>u.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200",children:u.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden p-6 border border-gray-100 dark:border-slate-800 transform transition-all scale-100",children:[u.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[u.jsx("div",{className:"w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-4 shadow-sm",children:u.jsx("i",{className:"fa-solid fa-trash-can text-2xl"})}),u.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:t}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 leading-relaxed px-2",children:e})]}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:r,disabled:i,className:"flex-1 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50",children:"Cancel"}),u.jsx("button",{onClick:n,disabled:i,className:"flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",children:i?u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fa-solid fa-circle-notch fa-spin"}),u.jsx("span",{children:"Deleting..."})]}):u.jsx("span",{children:"Delete"})})]})]})}),jv=({onClose:t,onGoogleLogin:e,onAdminLogin:n})=>{const[r,i]=y.useState("select"),[s,o]=y.useState(""),[a,l]=y.useState(""),[c,h]=y.useState(""),d=f=>{f.preventDefault(),s==="Admin"&&a==="Korikong3263!"?(n("Admin"),t()):s==="User"&&a==="Korikong3263!"?(n("User"),t()):h("Invalid credentials")};return u.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:u.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 relative flex flex-col",children:[u.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10",children:u.jsx(Xs,{size:20})}),u.jsxs("div",{className:"p-8 text-center",children:[u.jsx("div",{className:"w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500",children:u.jsx(bu,{size:32})}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"Welcome Back"}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-8",children:"Access your workspace"}),r==="select"?u.jsxs("div",{className:"space-y-3",children:[u.jsxs("button",{onClick:e,className:"w-full py-3 px-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-xl flex items-center justify-center gap-3 transition-all font-medium text-gray-700 dark:text-gray-200",children:[u.jsx("i",{className:"fa-brands fa-google text-red-500 text-lg"}),"Sign in with Google"]}),u.jsxs("div",{className:"relative py-2",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-200 dark:border-slate-700"})}),u.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:u.jsx("span",{className:"bg-white dark:bg-slate-900 px-2 text-gray-500",children:"Or"})})]}),u.jsxs("button",{onClick:()=>i("admin"),className:"w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2",children:[u.jsx(tf,{size:16}),"Admin / User Access"]})]}):u.jsxs("form",{onSubmit:d,className:"space-y-4 animate-in slide-in-from-right duration-200",children:[u.jsxs("div",{className:"text-left",children:[u.jsx("label",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block",children:"Username"}),u.jsxs("div",{className:"relative",children:[u.jsx(RE,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"text",value:s,onChange:f=>o(f.target.value),className:"w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors",placeholder:"Enter username"})]})]}),u.jsxs("div",{className:"text-left",children:[u.jsx("label",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block",children:"Password"}),u.jsxs("div",{className:"relative",children:[u.jsx(tf,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),u.jsx("input",{type:"password",value:a,onChange:f=>l(f.target.value),className:"w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors",placeholder:"Enter password"})]})]}),c&&u.jsx("p",{className:"text-xs text-red-500 font-bold",children:c}),u.jsxs("div",{className:"pt-2 flex gap-3",children:[u.jsx("button",{type:"button",onClick:()=>{i("select"),h("")},className:"flex-1 py-2.5 text-xs font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors",children:"Back"}),u.jsx("button",{type:"submit",className:"flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wide transition-all shadow-lg shadow-blue-500/30",children:"Login"})]})]})]}),u.jsx("div",{className:"p-4 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-slate-800",children:u.jsxs("div",{className:"flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 font-medium",children:[u.jsx(Bp,{size:12}),u.jsx("span",{children:"Bug or improvement? Contact"}),u.jsx("a",{href:"https://link.seatalk.io/profile/open?seatalk_id=1223036706",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline font-bold",children:"Kong"})]})})]})})},f1=({onLoginClick:t})=>u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl w-full max-w-md text-center shadow-2xl animate-fade-in",children:[u.jsx("div",{className:"w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg",children:u.jsx(dC,{className:"text-orange-600",size:40})}),u.jsx("h1",{className:"text-3xl font-black text-white mb-2 tracking-tight",children:"Spiel Master"}),u.jsx("div",{className:"space-y-4 mb-8",children:u.jsx("p",{className:"text-white/90 text-sm font-medium leading-relaxed",children:"Restricted Access. Please sign in to access response templates and Gemini AI tools."})}),u.jsxs("button",{onClick:t,className:"w-full bg-white text-orange-600 py-3.5 rounded-xl font-bold text-sm hover:bg-orange-50 transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2",children:[u.jsx("i",{className:"fa-brands fa-google text-lg"}),"Sign in / Admin Access"]}),u.jsxs("div",{className:"mt-8 flex flex-col items-center gap-4",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-white/60",children:[u.jsx(tf,{size:12}),u.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold",children:"Secure Workspace"})]}),u.jsxs("div",{className:"bg-white/10 rounded-lg p-2.5 flex items-center gap-2 text-[10px] text-white/80 font-medium",children:[u.jsx(Bp,{size:12}),u.jsx("span",{children:"If there's a bug or improvements, kindly contact"}),u.jsx("a",{href:"https://link.seatalk.io/profile/open?seatalk_id=1223036706",target:"_blank",rel:"noopener noreferrer",className:"bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded transition-colors font-bold uppercase tracking-wide",children:"Kong"})]})]})]})}),p1=[{label:"Default",value:"bg-white dark:bg-[#202124]"},{label:"Red",value:"bg-red-100 dark:bg-red-900/30"},{label:"Orange",value:"bg-orange-100 dark:bg-orange-900/30"},{label:"Yellow",value:"bg-yellow-100 dark:bg-yellow-900/30"},{label:"Green",value:"bg-green-100 dark:bg-green-900/30"},{label:"Teal",value:"bg-teal-100 dark:bg-teal-900/30"},{label:"Blue",value:"bg-blue-100 dark:bg-blue-900/30"},{label:"Purple",value:"bg-purple-100 dark:bg-purple-900/30"},{label:"Pink",value:"bg-pink-100 dark:bg-pink-900/30"},{label:"Gray",value:"bg-gray-100 dark:bg-gray-800"}],g1=({spiel:t,onClose:e,onCopy:n,onEdit:r,isAdmin:i,onSave:s,onViewImage:o})=>{const[a,l]=y.useState({title:t.title,english:t.english,brazil:t.brazil,images:t.images||[],color:t.color||"bg-white dark:bg-[#202124]",isPinned:t.isPinned||!1}),[c,h]=y.useState(!1),[d,f]=y.useState(!1),[g,_]=y.useState(!1),w=y.useRef(!1),E=y.useRef(a);y.useEffect(()=>{E.current=a,w.current=c},[a,c]);const v=()=>{w.current&&s&&!t.isDefault&&i&&s(t.id,E.current),e()},p=async(S,C)=>{try{await navigator.clipboard.writeText(S),n(`Copied ${C}`)}catch{n("Failed to copy")}},m=i&&!t.isDefault;y.useEffect(()=>{const S=R=>{R.key==="Escape"&&v()},C=async R=>{var B;if(!m)return;const L=(B=R.clipboardData)==null?void 0:B.items;if(L){for(let J=0;J<L.length;J++)if(L[J].type.indexOf("image")!==-1){const Z=L[J].getAsFile();if(Z){f(!0);try{const Oe=await XE(Z);l(Le=>({...Le,images:[...Le.images,Oe]})),h(!0),n("Image pasted and added")}catch(Oe){console.error(Oe),n("Failed to process image")}finally{f(!1)}}}}};return window.addEventListener("keydown",S),window.addEventListener("paste",C),()=>{window.removeEventListener("keydown",S),window.removeEventListener("paste",C)}},[m]);const x=(S,C)=>{l(R=>({...R,[S]:C})),h(!0)},k=S=>{l(C=>({...C,images:C.images.filter((R,L)=>L!==S)})),h(!0)},b=()=>{m&&x("isPinned",!a.isPinned)},T=a.color;return u.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",onClick:v,children:u.jsxs("div",{className:`${T} w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200 dark:border-gray-700 transition-colors duration-300 scale-100 text-gray-900 dark:text-gray-100 relative`,onClick:S=>{S.stopPropagation(),_(!1)},children:[u.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${t.isDefault?"bg-orange-50 text-orange-600 dark:bg-orange-900/20":"bg-blue-50 text-blue-600 dark:bg-blue-900/20"}`,children:t.category}),t.isDefault?u.jsx(bu,{size:14,className:"text-orange-500"}):u.jsx(RE,{size:14,className:"text-blue-500"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[m&&u.jsx("button",{onClick:b,className:`p-2 rounded-full transition-colors ${a.isPinned?"text-gray-900 dark:text-gray-100 bg-black/5 dark:bg-white/10":"text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"}`,title:a.isPinned?"Unpin":"Pin note",children:u.jsx(Rc,{size:20,className:a.isPinned?"fill-current":""})}),u.jsxs("button",{onClick:v,className:"p-2 rounded-full transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10",title:c?"Save & Close":"Close",children:[c?u.jsx("span",{className:"text-xs font-bold mr-2 text-blue-500",children:"Done"}):null,u.jsx(Xs,{size:20})]})]})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6",children:[u.jsx("div",{className:"border-b border-black/5 dark:border-white/10 pb-4",children:m?u.jsx("input",{type:"text",value:a.title,onChange:S=>x("title",S.target.value),className:"w-full text-2xl font-bold leading-tight bg-transparent border-none focus:ring-0 outline-none placeholder-gray-400",placeholder:"Title"}):u.jsx("h2",{className:"text-2xl font-bold leading-tight text-gray-900 dark:text-white",children:t.title})}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"space-y-2 h-full flex flex-col",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400",children:"English Response"}),u.jsx("button",{onClick:()=>p(a.english,"English"),className:"p-1.5 transition-colors rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",title:"Copy English",children:u.jsx(Ai,{size:16})})]}),u.jsx("div",{className:"flex-1 p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/20 overflow-hidden flex flex-col",children:m?u.jsx("textarea",{value:a.english,onChange:S=>x("english",S.target.value),className:"w-full h-full min-h-[300px] bg-transparent border-none focus:ring-0 outline-none resize-none text-sm md:text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 custom-scrollbar",placeholder:"Type English response..."}):u.jsx("div",{className:"overflow-y-auto max-h-[400px] custom-scrollbar",children:u.jsx("p",{className:"text-sm md:text-base whitespace-pre-wrap font-medium leading-relaxed text-gray-800 dark:text-gray-200",children:t.english})})})]}),u.jsxs("div",{className:"space-y-2 h-full flex flex-col",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400",children:"Portuguese (Brazil)"}),u.jsx("button",{onClick:()=>p(a.brazil,"Portuguese"),className:"p-1.5 transition-colors rounded-md text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20",title:"Copy Portuguese",children:u.jsx(Ai,{size:16})})]}),u.jsx("div",{className:"flex-1 p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/20 overflow-hidden flex flex-col",children:m?u.jsx("textarea",{value:a.brazil,onChange:S=>x("brazil",S.target.value),className:"w-full h-full min-h-[300px] bg-transparent border-none focus:ring-0 outline-none resize-none text-sm md:text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 custom-scrollbar",placeholder:"Type Portuguese response..."}):u.jsx("div",{className:"overflow-y-auto max-h-[400px] custom-scrollbar",children:u.jsx("p",{className:"text-sm md:text-base whitespace-pre-wrap font-medium leading-relaxed text-gray-800 dark:text-gray-200",children:t.brazil})})})]})]}),(a.images.length>0||d)&&u.jsxs("div",{className:"space-y-2 pt-4",children:[u.jsx("span",{className:"text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400",children:"Visual Aids"}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[a.images.map((S,C)=>u.jsxs("div",{className:"relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 aspect-square bg-gray-100 dark:bg-gray-800 cursor-zoom-in",children:[u.jsx("div",{onClick:()=>o==null?void 0:o(S),className:"w-full h-full",children:u.jsx("img",{src:S,alt:`Visual aid ${C+1}`,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),u.jsx("div",{className:"absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none",children:u.jsx("div",{className:"w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white",children:u.jsx(vC,{size:18})})}),m&&u.jsx("button",{onClick:R=>{R.stopPropagation(),k(C)},className:"absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 pointer-events-auto",title:"Remove Image",children:u.jsx(Oi,{size:14})})]},C)),d&&u.jsx("div",{className:"relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center",children:u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"})})]}),m&&u.jsx("p",{className:"text-[10px] text-gray-400 mt-2 italic",children:"Tip: Click anywhere in this window and press Ctrl+V to paste an image."})]})]}),u.jsxs("div",{className:"p-4 border-t border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex justify-between items-center text-[10px] font-medium text-gray-500 dark:text-gray-400 relative",children:[m&&u.jsxs("div",{className:"relative",children:[u.jsx("button",{onClick:S=>{S.stopPropagation(),_(!g)},className:"p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors",title:"Change background color",children:u.jsx(kE,{size:16})}),g&&u.jsx("div",{className:"absolute bottom-full left-0 mb-2 p-2 bg-white dark:bg-[#303134] rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 flex gap-2 z-50 animate-in fade-in zoom-in-95 duration-200",children:p1.map(S=>u.jsx("button",{onClick:C=>{C.stopPropagation(),x("color",S.value),_(!1)},className:`w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform ${S.value.split(" ")[0]} ${a.color===S.value?"ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800":""}`,title:S.label},S.label))})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsxs("span",{children:["Created: ",new Date(t.createdAt).toLocaleDateString()]}),u.jsxs("span",{children:["ID: ",t.id.substring(0,8),"..."]})]}),m&&u.jsx("button",{onClick:v,className:"px-4 py-1.5 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 rounded-lg text-gray-900 dark:text-gray-100 font-bold transition-colors",children:"Close"})]})]})})},m1=({src:t,onClose:e,onCopy:n})=>{const[r,i]=y.useState(!1),[s,o]=y.useState(1),[a,l]=y.useState({x:0,y:0}),[c,h]=y.useState(!1),d=y.useRef({x:0,y:0}),f=y.useRef(null);y.useEffect(()=>{const m=x=>{x.key==="Escape"&&e()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[e]);const g=async()=>{try{const x=await(await fetch(t)).blob();await navigator.clipboard.write([new ClipboardItem({[x.type]:x})]),i(!0),n&&n("Image copied to clipboard"),setTimeout(()=>i(!1),2e3)}catch(m){console.error(m),n&&n("Failed to copy image")}},_=m=>{m.stopPropagation();const x=-m.deltaY,k=.1;let b=s+(x>0?k:-k);b=Math.min(Math.max(.5,b),5),o(b)},w=m=>{m.preventDefault(),h(!0),d.current={x:m.clientX-a.x,y:m.clientY-a.y}},E=m=>{c&&l({x:m.clientX-d.current.x,y:m.clientY-d.current.y})},v=()=>{h(!1)},p=()=>{o(1),l({x:0,y:0})};return u.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden",onClick:e,onWheel:_,children:[u.jsxs("div",{className:"absolute top-0 left-0 right-0 p-4 z-50 flex justify-between items-start pointer-events-none",children:[u.jsxs("div",{className:"pointer-events-auto flex gap-2",children:[u.jsx("button",{onClick:m=>{m.stopPropagation(),p()},className:"p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors",title:"Reset View",children:u.jsx(CE,{size:20})}),u.jsxs("div",{className:"bg-black/50 text-white/70 px-3 py-2 rounded-full text-xs font-mono font-bold",children:[Math.round(s*100),"%"]})]}),u.jsxs("div",{className:"pointer-events-auto flex gap-2",children:[u.jsx("button",{onClick:m=>{m.stopPropagation(),g()},className:`
                p-2 rounded-full transition-all shadow-lg border border-white/10
                ${r?"bg-green-600 text-white":"bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}
              `,title:"Copy Image",children:r?u.jsx(Hp,{size:20}):u.jsx(Ai,{size:20})}),u.jsx("button",{onClick:e,className:"p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors",children:u.jsx(Xs,{size:28})})]})]}),u.jsx("div",{className:"relative w-full h-full flex items-center justify-center cursor-move",onMouseDown:w,onMouseMove:E,onMouseUp:v,onMouseLeave:v,onClick:m=>m.stopPropagation(),children:u.jsx("img",{ref:f,src:t,className:"max-w-none transition-transform duration-75 ease-linear select-none",style:{transform:`translate(${a.x}px, ${a.y}px) scale(${s})`,maxHeight:"85vh",maxWidth:"85vw"},draggable:!1,alt:"Expanded"})}),u.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-medium pointer-events-none bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm",children:"Scroll to zoom • Drag to pan"})]})};var v1={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Uv;(function(t){t.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",t.OUTCOME_OK="OUTCOME_OK",t.OUTCOME_FAILED="OUTCOME_FAILED",t.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Uv||(Uv={}));var Fv;(function(t){t.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",t.PYTHON="PYTHON"})(Fv||(Fv={}));var zv;(function(t){t.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",t.SILENT="SILENT",t.WHEN_IDLE="WHEN_IDLE",t.INTERRUPT="INTERRUPT"})(zv||(zv={}));var Bv;(function(t){t.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT",t.NULL="NULL"})(Bv||(Bv={}));var Hv;(function(t){t.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",t.SIMPLE_SEARCH="SIMPLE_SEARCH",t.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Hv||(Hv={}));var Vv;(function(t){t.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",t.NO_AUTH="NO_AUTH",t.API_KEY_AUTH="API_KEY_AUTH",t.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",t.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",t.OAUTH="OAUTH",t.OIDC_AUTH="OIDC_AUTH"})(Vv||(Vv={}));var Wv;(function(t){t.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",t.HTTP_IN_QUERY="HTTP_IN_QUERY",t.HTTP_IN_HEADER="HTTP_IN_HEADER",t.HTTP_IN_PATH="HTTP_IN_PATH",t.HTTP_IN_BODY="HTTP_IN_BODY",t.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(Wv||(Wv={}));var $v;(function(t){t.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",t.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",t.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",t.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})($v||($v={}));var Gv;(function(t){t.UNSPECIFIED="UNSPECIFIED",t.BLOCKING="BLOCKING",t.NON_BLOCKING="NON_BLOCKING"})(Gv||(Gv={}));var Yv;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Yv||(Yv={}));var Kv;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE",t.VALIDATED="VALIDATED"})(Kv||(Kv={}));var qv;(function(t){t.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH",t.MINIMAL="MINIMAL"})(qv||(qv={}));var Qv;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",t.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",t.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(Qv||(Qv={}));var Jv;(function(t){t.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",t.SEVERITY="SEVERITY",t.PROBABILITY="PROBABILITY"})(Jv||(Jv={}));var Xv;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE",t.OFF="OFF"})(Xv||(Xv={}));var Zv;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.IMAGE_SAFETY="IMAGE_SAFETY",t.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",t.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",t.NO_IMAGE="NO_IMAGE",t.IMAGE_RECITATION="IMAGE_RECITATION",t.IMAGE_OTHER="IMAGE_OTHER"})(Zv||(Zv={}));var e_;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(e_||(e_={}));var t_;(function(t){t.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",t.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",t.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",t.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",t.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(t_||(t_={}));var n_;(function(t){t.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",t.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",t.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",t.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",t.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(n_||(n_={}));var r_;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.IMAGE_SAFETY="IMAGE_SAFETY",t.MODEL_ARMOR="MODEL_ARMOR",t.JAILBREAK="JAILBREAK"})(r_||(r_={}));var i_;(function(t){t.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",t.ON_DEMAND="ON_DEMAND",t.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(i_||(i_={}));var s_;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.AUDIO="AUDIO"})(s_||(s_={}));var o_;(function(t){t.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",t.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",t.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",t.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(o_||(o_={}));var a_;(function(t){t.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",t.TUNING_MODE_FULL="TUNING_MODE_FULL",t.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(a_||(a_={}));var l_;(function(t){t.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",t.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",t.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",t.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",t.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",t.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",t.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(l_||(l_={}));var c_;(function(t){t.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",t.JOB_STATE_QUEUED="JOB_STATE_QUEUED",t.JOB_STATE_PENDING="JOB_STATE_PENDING",t.JOB_STATE_RUNNING="JOB_STATE_RUNNING",t.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",t.JOB_STATE_FAILED="JOB_STATE_FAILED",t.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",t.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",t.JOB_STATE_PAUSED="JOB_STATE_PAUSED",t.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",t.JOB_STATE_UPDATING="JOB_STATE_UPDATING",t.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(c_||(c_={}));var u_;(function(t){t.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",t.TUNING_TASK_I2V="TUNING_TASK_I2V",t.TUNING_TASK_T2V="TUNING_TASK_T2V",t.TUNING_TASK_R2V="TUNING_TASK_R2V"})(u_||(u_={}));var d_;(function(t){t.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",t.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",t.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",t.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",t.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(d_||(d_={}));var h_;(function(t){t.COLLECTION="COLLECTION"})(h_||(h_={}));var f_;(function(t){t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",t.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",t.BALANCED="BALANCED",t.PRIORITIZE_COST="PRIORITIZE_COST"})(f_||(f_={}));var p_;(function(t){t.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",t.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(p_||(p_={}));var g_;(function(t){t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(g_||(g_={}));var m_;(function(t){t.DONT_ALLOW="DONT_ALLOW",t.ALLOW_ADULT="ALLOW_ADULT",t.ALLOW_ALL="ALLOW_ALL"})(m_||(m_={}));var v_;(function(t){t.auto="auto",t.en="en",t.ja="ja",t.ko="ko",t.hi="hi",t.zh="zh",t.pt="pt",t.es="es"})(v_||(v_={}));var __;(function(t){t.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",t.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",t.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",t.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",t.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(__||(__={}));var y_;(function(t){t.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",t.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",t.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",t.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(y_||(y_={}));var w_;(function(t){t.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",t.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",t.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",t.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(w_||(w_={}));var E_;(function(t){t.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",t.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",t.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",t.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",t.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",t.EDIT_MODE_STYLE="EDIT_MODE_STYLE",t.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",t.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(E_||(E_={}));var x_;(function(t){t.FOREGROUND="FOREGROUND",t.BACKGROUND="BACKGROUND",t.PROMPT="PROMPT",t.SEMANTIC="SEMANTIC",t.INTERACTIVE="INTERACTIVE"})(x_||(x_={}));var b_;(function(t){t.ASSET="ASSET",t.STYLE="STYLE"})(b_||(b_={}));var I_;(function(t){t.INSERT="INSERT",t.REMOVE="REMOVE",t.REMOVE_STATIC="REMOVE_STATIC",t.OUTPAINT="OUTPAINT"})(I_||(I_={}));var S_;(function(t){t.OPTIMIZED="OPTIMIZED",t.LOSSLESS="LOSSLESS"})(S_||(S_={}));var k_;(function(t){t.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",t.PREFERENCE_TUNING="PREFERENCE_TUNING"})(k_||(k_={}));var T_;(function(t){t.STATE_UNSPECIFIED="STATE_UNSPECIFIED",t.STATE_PENDING="STATE_PENDING",t.STATE_ACTIVE="STATE_ACTIVE",t.STATE_FAILED="STATE_FAILED"})(T_||(T_={}));var C_;(function(t){t.STATE_UNSPECIFIED="STATE_UNSPECIFIED",t.PROCESSING="PROCESSING",t.ACTIVE="ACTIVE",t.FAILED="FAILED"})(C_||(C_={}));var N_;(function(t){t.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",t.UPLOADED="UPLOADED",t.GENERATED="GENERATED",t.REGISTERED="REGISTERED"})(N_||(N_={}));var R_;(function(t){t.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.RESPONSE_REJECTED="RESPONSE_REJECTED",t.NEED_MORE_INPUT="NEED_MORE_INPUT"})(R_||(R_={}));var A_;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.VIDEO="VIDEO",t.AUDIO="AUDIO",t.DOCUMENT="DOCUMENT"})(A_||(A_={}));var O_;(function(t){t.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",t.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",t.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(O_||(O_={}));var P_;(function(t){t.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",t.ACTIVITY_START="ACTIVITY_START",t.ACTIVITY_END="ACTIVITY_END"})(P_||(P_={}));var D_;(function(t){t.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",t.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",t.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(D_||(D_={}));var L_;(function(t){t.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",t.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",t.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(L_||(L_={}));var M_;(function(t){t.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",t.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",t.NO_INTERRUPTION="NO_INTERRUPTION"})(M_||(M_={}));var j_;(function(t){t.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",t.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",t.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(j_||(j_={}));var U_;(function(t){t.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",t.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",t.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",t.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",t.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",t.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",t.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",t.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",t.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",t.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",t.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",t.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",t.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(U_||(U_={}));var F_;(function(t){t.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",t.QUALITY="QUALITY",t.DIVERSITY="DIVERSITY",t.VOCALIZATION="VOCALIZATION"})(F_||(F_={}));var z_;(function(t){t.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",t.PLAY="PLAY",t.PAUSE="PAUSE",t.STOP="STOP",t.RESET_CONTEXT="RESET_CONTEXT"})(z_||(z_={}));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var B_;(function(t){t.PAGED_ITEM_BATCH_JOBS="batchJobs",t.PAGED_ITEM_MODELS="models",t.PAGED_ITEM_TUNING_JOBS="tuningJobs",t.PAGED_ITEM_FILES="files",t.PAGED_ITEM_CACHED_CONTENTS="cachedContents",t.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",t.PAGED_ITEM_DOCUMENTS="documents"})(B_||(B_={}));function Lc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function H_(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function we(t){return this instanceof we?(this.v=t,this):new we(t)}function Jo(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),i[Symbol.asyncIterator]=function(){return this},i;function o(g){return function(_){return Promise.resolve(_).then(g,d)}}function a(g,_){r[g]&&(i[g]=function(w){return new Promise(function(E,v){s.push([g,w,E,v])>1||l(g,w)})},_&&(i[g]=_(i[g])))}function l(g,_){try{c(r[g](_))}catch(w){f(s[0][3],w)}}function c(g){g.value instanceof we?Promise.resolve(g.value.v).then(h,d):f(s[0][2],g)}function h(g){l("next",g)}function d(g){l("throw",g)}function f(g,_){g(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Ss(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof H_=="function"?H_(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ZE=function(){const{crypto:t}=globalThis;if(t!=null&&t.randomUUID)return ZE=t.randomUUID.bind(t),t.randomUUID();const e=new Uint8Array(1),n=t?()=>t.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,r=>(+r^n()&15>>+r/4).toString(16))};const _1=()=>ZE();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function lf(t){return typeof t=="object"&&t!==null&&("name"in t&&t.name==="AbortError"||"message"in t&&String(t.message).includes("FetchRequestCanceledException"))}const cf=t=>{if(t instanceof Error)return t;if(typeof t=="object"&&t!==null){try{if(Object.prototype.toString.call(t)==="[object Error]"){const e=new Error(t.message,t.cause?{cause:t.cause}:{});return t.stack&&(e.stack=t.stack),t.cause&&!e.cause&&(e.cause=t.cause),t.name&&(e.name=t.name),e}}catch{}try{return new Error(JSON.stringify(t))}catch{}}return new Error(t)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class un extends Error{}class _t extends un{constructor(e,n,r,i){super(`${_t.makeMessage(e,n,r)}`),this.status=e,this.headers=i,this.error=n}static makeMessage(e,n,r){const i=n!=null&&n.message?typeof n.message=="string"?n.message:JSON.stringify(n.message):n?JSON.stringify(n):r;return e&&i?`${e} ${i}`:e?`${e} status code (no body)`:i||"(no status code or body)"}static generate(e,n,r,i){if(!e||!i)return new Tu({message:r,cause:cf(n)});const s=n;return e===400?new tx(e,s,r,i):e===401?new nx(e,s,r,i):e===403?new rx(e,s,r,i):e===404?new ix(e,s,r,i):e===409?new sx(e,s,r,i):e===422?new ox(e,s,r,i):e===429?new ax(e,s,r,i):e>=500?new lx(e,s,r,i):new _t(e,s,r,i)}}class uf extends _t{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}}class Tu extends _t{constructor({message:e,cause:n}){super(void 0,void 0,e||"Connection error.",void 0),n&&(this.cause=n)}}class ex extends Tu{constructor({message:e}={}){super({message:e??"Request timed out."})}}class tx extends _t{}class nx extends _t{}class rx extends _t{}class ix extends _t{}class sx extends _t{}class ox extends _t{}class ax extends _t{}class lx extends _t{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const y1=/^[a-z][a-z0-9+.-]*:/i,w1=t=>y1.test(t);let df=t=>(df=Array.isArray,df(t));const E1=df;let x1=E1;const V_=x1;function b1(t){if(!t)return!0;for(const e in t)return!1;return!0}function I1(t,e){return Object.prototype.hasOwnProperty.call(t,e)}const S1=(t,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new un(`${t} must be an integer`);if(e<0)throw new un(`${t} must be a positive integer`);return e},k1=t=>{try{return JSON.parse(t)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T1=t=>new Promise(e=>setTimeout(e,t));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ns="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function C1(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const N1=()=>{var t,e,n,r,i;const s=C1();if(s==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ns,"X-Stainless-OS":$_(Deno.build.os),"X-Stainless-Arch":W_(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:(e=(t=Deno.version)===null||t===void 0?void 0:t.deno)!==null&&e!==void 0?e:"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ns,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(s==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ns,"X-Stainless-OS":$_((n=globalThis.process.platform)!==null&&n!==void 0?n:"unknown"),"X-Stainless-Arch":W_((r=globalThis.process.arch)!==null&&r!==void 0?r:"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":(i=globalThis.process.version)!==null&&i!==void 0?i:"unknown"};const o=R1();return o?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ns,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${o.browser}`,"X-Stainless-Runtime-Version":o.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":ns,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function R1(){if(typeof navigator>"u"||!navigator)return null;const t=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:e,pattern:n}of t){const r=n.exec(navigator.userAgent);if(r){const i=r[1]||0,s=r[2]||0,o=r[3]||0;return{browser:e,version:`${i}.${s}.${o}`}}}return null}const W_=t=>t==="x32"?"x32":t==="x86_64"||t==="x64"?"x64":t==="arm"?"arm":t==="aarch64"||t==="arm64"?"arm64":t?`other:${t}`:"unknown",$_=t=>(t=t.toLowerCase(),t.includes("ios")?"iOS":t==="android"?"Android":t==="darwin"?"MacOS":t==="win32"?"Windows":t==="freebsd"?"FreeBSD":t==="openbsd"?"OpenBSD":t==="linux"?"Linux":t?`Other:${t}`:"Unknown");let Ll;const A1=()=>Ll??(Ll=N1());/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function O1(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function cx(...t){const e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...t)}function P1(t){let e=Symbol.asyncIterator in t?t[Symbol.asyncIterator]():t[Symbol.iterator]();return cx({start(){},async pull(n){const{done:r,value:i}=await e.next();r?n.close():n.enqueue(i)},async cancel(){var n;await((n=e.return)===null||n===void 0?void 0:n.call(e))}})}function ux(t){if(t[Symbol.asyncIterator])return t;const e=t.getReader();return{async next(){try{const n=await e.read();return n!=null&&n.done&&e.releaseLock(),n}catch(n){throw e.releaseLock(),n}},async return(){const n=e.cancel();return e.releaseLock(),await n,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function D1(t){var e,n;if(t===null||typeof t!="object")return;if(t[Symbol.asyncIterator]){await((n=(e=t[Symbol.asyncIterator]()).return)===null||n===void 0?void 0:n.call(e));return}const r=t.getReader(),i=r.cancel();r.releaseLock(),await i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const L1=({headers:t,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dx=()=>{var t;if(typeof File>"u"){const{process:e}=globalThis,n=typeof((t=e==null?void 0:e.versions)===null||t===void 0?void 0:t.node)=="string"&&parseInt(e.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(n?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Hd(t,e,n){return dx(),new File(t,e??"unknown_file",n)}function M1(t){return(typeof t=="object"&&t!==null&&("name"in t&&t.name&&String(t.name)||"url"in t&&t.url&&String(t.url)||"filename"in t&&t.filename&&String(t.filename)||"path"in t&&t.path&&String(t.path))||"").split(/[\\/]/).pop()||void 0}const j1=t=>t!=null&&typeof t=="object"&&typeof t[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const hx=t=>t!=null&&typeof t=="object"&&typeof t.size=="number"&&typeof t.type=="string"&&typeof t.text=="function"&&typeof t.slice=="function"&&typeof t.arrayBuffer=="function",U1=t=>t!=null&&typeof t=="object"&&typeof t.name=="string"&&typeof t.lastModified=="number"&&hx(t),F1=t=>t!=null&&typeof t=="object"&&typeof t.url=="string"&&typeof t.blob=="function";async function z1(t,e,n){if(dx(),t=await t,U1(t))return t instanceof File?t:Hd([await t.arrayBuffer()],t.name);if(F1(t)){const i=await t.blob();return e||(e=new URL(t.url).pathname.split(/[\\/]/).pop()),Hd(await hf(i),e,n)}const r=await hf(t);if(e||(e=M1(t)),!(n!=null&&n.type)){const i=r.find(s=>typeof s=="object"&&"type"in s&&s.type);typeof i=="string"&&(n=Object.assign(Object.assign({},n),{type:i}))}return Hd(r,e,n)}async function hf(t){var e,n,r,i,s;let o=[];if(typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer)o.push(t);else if(hx(t))o.push(t instanceof Blob?t:await t.arrayBuffer());else if(j1(t))try{for(var a=!0,l=Ss(t),c;c=await l.next(),e=c.done,!e;a=!0){i=c.value,a=!1;const h=i;o.push(...await hf(h))}}catch(h){n={error:h}}finally{try{!a&&!e&&(r=l.return)&&await r.call(l)}finally{if(n)throw n.error}}else{const h=(s=t==null?void 0:t.constructor)===null||s===void 0?void 0:s.name;throw new Error(`Unexpected data type: ${typeof t}${h?`; constructor: ${h}`:""}${B1(t)}`)}return o}function B1(t){return typeof t!="object"||t===null?"":`; props: [${Object.getOwnPropertyNames(t).map(n=>`"${n}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class fx{constructor(e){this._client=e}}fx._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function px(t){return t.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const G_=Object.freeze(Object.create(null)),H1=(t=px)=>function(n,...r){if(n.length===1)return n[0];let i=!1;const s=[],o=n.reduce((h,d,f)=>{var g,_,w;/[?#]/.test(d)&&(i=!0);const E=r[f];let v=(i?encodeURIComponent:t)(""+E);return f!==r.length&&(E==null||typeof E=="object"&&E.toString===((w=Object.getPrototypeOf((_=Object.getPrototypeOf((g=E.hasOwnProperty)!==null&&g!==void 0?g:G_))!==null&&_!==void 0?_:G_))===null||w===void 0?void 0:w.toString))&&(v=E+"",s.push({start:h.length+d.length,length:v.length,error:`Value of type ${Object.prototype.toString.call(E).slice(8,-1)} is not a valid path parameter`})),h+d+(f===r.length?"":v)},""),a=o.split(/[?#]/,1)[0],l=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let c;for(;(c=l.exec(a))!==null;)s.push({start:c.index,length:c[0].length,error:`Value "${c[0]}" can't be safely passed as a path parameter`});if(s.sort((h,d)=>h.start-d.start),s.length>0){let h=0;const d=s.reduce((f,g)=>{const _=" ".repeat(g.start-h),w="^".repeat(g.length);return h=g.start+g.length,f+_+w},"");throw new un(`Path parameters result in path with invalid segments:
${s.map(f=>f.error).join(`
`)}
${o}
${d}`)}return o},Ml=H1(px);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gx extends fx{create(e,n){var r;const{api_version:i=this._client.apiVersion}=e,s=Lc(e,["api_version"]);if("model"in s&&"agent_config"in s)throw new un("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in s&&"generation_config"in s)throw new un("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Ml`/${i}/interactions`,Object.assign(Object.assign({body:s},n),{stream:(r=e.stream)!==null&&r!==void 0?r:!1}))}delete(e,n={},r){const{api_version:i=this._client.apiVersion}=n??{};return this._client.delete(Ml`/${i}/interactions/${e}`,r)}cancel(e,n={},r){const{api_version:i=this._client.apiVersion}=n??{};return this._client.post(Ml`/${i}/interactions/${e}/cancel`,r)}get(e,n={},r){var i;const s=n??{},{api_version:o=this._client.apiVersion}=s,a=Lc(s,["api_version"]);return this._client.get(Ml`/${o}/interactions/${e}`,Object.assign(Object.assign({query:a},r),{stream:(i=n==null?void 0:n.stream)!==null&&i!==void 0?i:!1}))}}gx._key=Object.freeze(["interactions"]);class mx extends gx{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function V1(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}let jl;function Xp(t){let e;return(jl??(e=new globalThis.TextEncoder,jl=e.encode.bind(e)))(t)}let Ul;function Y_(t){let e;return(Ul??(e=new globalThis.TextDecoder,Ul=e.decode.bind(e)))(t)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Cu{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null}decode(e){if(e==null)return[];const n=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?Xp(e):e;this.buffer=V1([this.buffer,n]);const r=[];let i;for(;(i=W1(this.buffer,this.carriageReturnIndex))!=null;){if(i.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=i.index;continue}if(this.carriageReturnIndex!=null&&(i.index!==this.carriageReturnIndex+1||i.carriage)){r.push(Y_(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null;continue}const s=this.carriageReturnIndex!==null?i.preceding-1:i.preceding,o=Y_(this.buffer.subarray(0,s));r.push(o),this.buffer=this.buffer.subarray(i.index),this.carriageReturnIndex=null}return r}flush(){return this.buffer.length?this.decode(`
`):[]}}Cu.NEWLINE_CHARS=new Set([`
`,"\r"]);Cu.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function W1(t,e){for(let i=e??0;i<t.length;i++){if(t[i]===10)return{preceding:i,index:i+1,carriage:!1};if(t[i]===13)return{preceding:i,index:i+1,carriage:!0}}return null}function $1(t){for(let r=0;r<t.length-1;r++){if(t[r]===10&&t[r+1]===10||t[r]===13&&t[r+1]===13)return r+2;if(t[r]===13&&t[r+1]===10&&r+3<t.length&&t[r+2]===13&&t[r+3]===10)return r+4}return-1}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Mc={off:0,error:200,warn:300,info:400,debug:500},K_=(t,e,n)=>{if(t){if(I1(Mc,t))return t;ht(n).warn(`${e} was set to ${JSON.stringify(t)}, expected one of ${JSON.stringify(Object.keys(Mc))}`)}};function Mo(){}function Fl(t,e,n){return!e||Mc[t]>Mc[n]?Mo:e[t].bind(e)}const G1={error:Mo,warn:Mo,info:Mo,debug:Mo};let q_=new WeakMap;function ht(t){var e;const n=t.logger,r=(e=t.logLevel)!==null&&e!==void 0?e:"off";if(!n)return G1;const i=q_.get(n);if(i&&i[0]===r)return i[1];const s={error:Fl("error",n,r),warn:Fl("warn",n,r),info:Fl("info",n,r),debug:Fl("debug",n,r)};return q_.set(n,[r,s]),s}const fi=t=>(t.options&&(t.options=Object.assign({},t.options),delete t.options.headers),t.headers&&(t.headers=Object.fromEntries((t.headers instanceof Headers?[...t.headers]:Object.entries(t.headers)).map(([e,n])=>[e,e.toLowerCase()==="x-goog-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":n]))),"retryOfRequestLogID"in t&&(t.retryOfRequestLogID&&(t.retryOf=t.retryOfRequestLogID),delete t.retryOfRequestLogID),t);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ms{constructor(e,n,r){this.iterator=e,this.controller=n,this.client=r}static fromSSEResponse(e,n,r){let i=!1;const s=r?ht(r):console;function o(){return Jo(this,arguments,function*(){var l,c,h,d;if(i)throw new un("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let f=!1;try{try{for(var g=!0,_=Ss(Y1(e,n)),w;w=yield we(_.next()),l=w.done,!l;g=!0){d=w.value,g=!1;const E=d;if(!f)if(E.data.startsWith("[DONE]")){f=!0;continue}else try{yield yield we(JSON.parse(E.data))}catch(v){throw s.error("Could not parse message into JSON:",E.data),s.error("From chunk:",E.raw),v}}}catch(E){c={error:E}}finally{try{!g&&!l&&(h=_.return)&&(yield we(h.call(_)))}finally{if(c)throw c.error}}f=!0}catch(E){if(lf(E))return yield we(void 0);throw E}finally{f||n.abort()}})}return new ms(o,n,r)}static fromReadableStream(e,n,r){let i=!1;function s(){return Jo(this,arguments,function*(){var l,c,h,d;const f=new Cu,g=ux(e);try{for(var _=!0,w=Ss(g),E;E=yield we(w.next()),l=E.done,!l;_=!0){d=E.value,_=!1;const v=d;for(const p of f.decode(v))yield yield we(p)}}catch(v){c={error:v}}finally{try{!_&&!l&&(h=w.return)&&(yield we(h.call(w)))}finally{if(c)throw c.error}}for(const v of f.flush())yield yield we(v)})}function o(){return Jo(this,arguments,function*(){var l,c,h,d;if(i)throw new un("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let f=!1;try{try{for(var g=!0,_=Ss(s()),w;w=yield we(_.next()),l=w.done,!l;g=!0){d=w.value,g=!1;const E=d;f||E&&(yield yield we(JSON.parse(E)))}}catch(E){c={error:E}}finally{try{!g&&!l&&(h=_.return)&&(yield we(h.call(_)))}finally{if(c)throw c.error}}f=!0}catch(E){if(lf(E))return yield we(void 0);throw E}finally{f||n.abort()}})}return new ms(o,n,r)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],n=[],r=this.iterator(),i=s=>({next:()=>{if(s.length===0){const o=r.next();e.push(o),n.push(o)}return s.shift()}});return[new ms(()=>i(e),this.controller,this.client),new ms(()=>i(n),this.controller,this.client)]}toReadableStream(){const e=this;let n;return cx({async start(){n=e[Symbol.asyncIterator]()},async pull(r){try{const{value:i,done:s}=await n.next();if(s)return r.close();const o=Xp(JSON.stringify(i)+`
`);r.enqueue(o)}catch(i){r.error(i)}},async cancel(){var r;await((r=n.return)===null||r===void 0?void 0:r.call(n))}})}}function Y1(t,e){return Jo(this,arguments,function*(){var r,i,s,o;if(!t.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new un("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new un("Attempted to iterate over a response with no body");const a=new q1,l=new Cu,c=ux(t.body);try{for(var h=!0,d=Ss(K1(c)),f;f=yield we(d.next()),r=f.done,!r;h=!0){o=f.value,h=!1;const g=o;for(const _ of l.decode(g)){const w=a.decode(_);w&&(yield yield we(w))}}}catch(g){i={error:g}}finally{try{!h&&!r&&(s=d.return)&&(yield we(s.call(d)))}finally{if(i)throw i.error}}for(const g of l.flush()){const _=a.decode(g);_&&(yield yield we(_))}})}function K1(t){return Jo(this,arguments,function*(){var n,r,i,s;let o=new Uint8Array;try{for(var a=!0,l=Ss(t),c;c=yield we(l.next()),n=c.done,!n;a=!0){s=c.value,a=!1;const h=s;if(h==null)continue;const d=h instanceof ArrayBuffer?new Uint8Array(h):typeof h=="string"?Xp(h):h;let f=new Uint8Array(o.length+d.length);f.set(o),f.set(d,o.length),o=f;let g;for(;(g=$1(o))!==-1;)yield yield we(o.slice(0,g)),o=o.slice(g)}}catch(h){r={error:h}}finally{try{!a&&!n&&(i=l.return)&&(yield we(i.call(l)))}finally{if(r)throw r.error}}o.length>0&&(yield yield we(o))})}class q1{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const s={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],s}if(this.chunks.push(e),e.startsWith(":"))return null;let[n,r,i]=Q1(e,":");return i.startsWith(" ")&&(i=i.substring(1)),n==="event"?this.event=i:n==="data"&&this.data.push(i),null}}function Q1(t,e){const n=t.indexOf(e);return n!==-1?[t.substring(0,n),e,t.substring(n+e.length)]:[t,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function J1(t,e){const{response:n,requestLogID:r,retryOfRequestLogID:i,startTime:s}=e,o=await(async()=>{var a;if(e.options.stream)return ht(t).debug("response",n.status,n.url,n.headers,n.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(n,e.controller,t):ms.fromSSEResponse(n,e.controller,t);if(n.status===204)return null;if(e.options.__binaryResponse)return n;const l=n.headers.get("content-type"),c=(a=l==null?void 0:l.split(";")[0])===null||a===void 0?void 0:a.trim();return(c==null?void 0:c.includes("application/json"))||(c==null?void 0:c.endsWith("+json"))?await n.json():await n.text()})();return ht(t).debug(`[${r}] response parsed`,fi({retryOfRequestLogID:i,url:n.url,status:n.status,body:o,durationMs:Date.now()-s})),o}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zp extends Promise{constructor(e,n,r=J1){super(i=>{i(null)}),this.responsePromise=n,this.parseResponse=r,this.client=e}_thenUnwrap(e){return new Zp(this.client,this.responsePromise,async(n,r)=>e(await this.parseResponse(n,r),r))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,n]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:n}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(this.client,e))),this.parsedPromise}then(e,n){return this.parse().then(e,n)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const vx=Symbol("brand.privateNullableHeaders");function*X1(t){if(!t)return;if(vx in t){const{values:r,nulls:i}=t;yield*r.entries();for(const s of i)yield[s,null];return}let e=!1,n;t instanceof Headers?n=t.entries():V_(t)?n=t:(e=!0,n=Object.entries(t??{}));for(let r of n){const i=r[0];if(typeof i!="string")throw new TypeError("expected header name to be a string");const s=V_(r[1])?r[1]:[r[1]];let o=!1;for(const a of s)a!==void 0&&(e&&!o&&(o=!0,yield[i,null]),yield[i,a])}}const Io=t=>{const e=new Headers,n=new Set;for(const r of t){const i=new Set;for(const[s,o]of X1(r)){const a=s.toLowerCase();i.has(a)||(e.delete(s),i.add(a)),o===null?(e.delete(s),n.add(a)):(e.append(s,o),n.delete(a))}}return{[vx]:!0,values:e,nulls:n}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vd=t=>{var e,n,r,i,s,o;if(typeof globalThis.process<"u")return(r=(n=(e=v1)===null||e===void 0?void 0:e[t])===null||n===void 0?void 0:n.trim())!==null&&r!==void 0?r:void 0;if(typeof globalThis.Deno<"u")return(o=(s=(i=globalThis.Deno.env)===null||i===void 0?void 0:i.get)===null||s===void 0?void 0:s.call(i,t))===null||o===void 0?void 0:o.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var _x;class Nu{constructor(e){var n,r,i,s,o,a,l,{baseURL:c=Vd("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:h=(n=Vd("GEMINI_API_KEY"))!==null&&n!==void 0?n:null,apiVersion:d="v1beta"}=e,f=Lc(e,["baseURL","apiKey","apiVersion"]);const g=Object.assign(Object.assign({apiKey:h,apiVersion:d},f),{baseURL:c||"https://generativelanguage.googleapis.com"});this.baseURL=g.baseURL,this.timeout=(r=g.timeout)!==null&&r!==void 0?r:Nu.DEFAULT_TIMEOUT,this.logger=(i=g.logger)!==null&&i!==void 0?i:console;const _="warn";this.logLevel=_,this.logLevel=(o=(s=K_(g.logLevel,"ClientOptions.logLevel",this))!==null&&s!==void 0?s:K_(Vd("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&o!==void 0?o:_,this.fetchOptions=g.fetchOptions,this.maxRetries=(a=g.maxRetries)!==null&&a!==void 0?a:2,this.fetch=(l=g.fetch)!==null&&l!==void 0?l:O1(),this.encoder=L1,this._options=g,this.apiKey=h,this.apiVersion=d,this.clientAdapter=g.clientAdapter}withOptions(e){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),e))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:n}){if(!(e.has("authorization")||e.has("x-goog-api-key"))&&!(this.apiKey&&e.get("x-goog-api-key"))&&!n.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(e){const n=Io([e.headers]);if(!(n.values.has("authorization")||n.values.has("x-goog-api-key"))){if(this.apiKey)return Io([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return Io([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(e){return Object.entries(e).filter(([n,r])=>typeof r<"u").map(([n,r])=>{if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")return`${encodeURIComponent(n)}=${encodeURIComponent(r)}`;if(r===null)return`${encodeURIComponent(n)}=`;throw new un(`Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${ns}`}defaultIdempotencyKey(){return`stainless-node-retry-${_1()}`}makeStatusError(e,n,r,i){return _t.generate(e,n,r,i)}buildURL(e,n,r){const i=!this.baseURLOverridden()&&r||this.baseURL,s=w1(e)?new URL(e):new URL(i+(i.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),o=this.defaultQuery();return b1(o)||(n=Object.assign(Object.assign({},o),n)),typeof n=="object"&&n&&!Array.isArray(n)&&(s.search=this.stringifyQuery(n)),s.toString()}async prepareOptions(e){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!e.path.startsWith(`/${this.apiVersion}/projects/`)){const n=e.path.slice(this.apiVersion.length+1);e.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${n}`}}async prepareRequest(e,{url:n,options:r}){}get(e,n){return this.methodRequest("get",e,n)}post(e,n){return this.methodRequest("post",e,n)}patch(e,n){return this.methodRequest("patch",e,n)}put(e,n){return this.methodRequest("put",e,n)}delete(e,n){return this.methodRequest("delete",e,n)}methodRequest(e,n,r){return this.request(Promise.resolve(r).then(i=>Object.assign({method:e,path:n},i)))}request(e,n=null){return new Zp(this,this.makeRequest(e,n,void 0))}async makeRequest(e,n,r){var i,s,o;const a=await e,l=(i=a.maxRetries)!==null&&i!==void 0?i:this.maxRetries;n==null&&(n=l),await this.prepareOptions(a);const{req:c,url:h,timeout:d}=await this.buildRequest(a,{retryCount:l-n});await this.prepareRequest(c,{url:h,options:a});const f="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),g=r===void 0?"":`, retryOf: ${r}`,_=Date.now();if(ht(this).debug(`[${f}] sending request`,fi({retryOfRequestLogID:r,method:a.method,url:h,options:a,headers:c.headers})),!((s=a.signal)===null||s===void 0)&&s.aborted)throw new uf;const w=new AbortController,E=await this.fetchWithTimeout(h,c,d,w).catch(cf),v=Date.now();if(E instanceof globalThis.Error){const m=`retrying, ${n} attempts remaining`;if(!((o=a.signal)===null||o===void 0)&&o.aborted)throw new uf;const x=lf(E)||/timed? ?out/i.test(String(E)+("cause"in E?String(E.cause):""));if(n)return ht(this).info(`[${f}] connection ${x?"timed out":"failed"} - ${m}`),ht(this).debug(`[${f}] connection ${x?"timed out":"failed"} (${m})`,fi({retryOfRequestLogID:r,url:h,durationMs:v-_,message:E.message})),this.retryRequest(a,n,r??f);throw ht(this).info(`[${f}] connection ${x?"timed out":"failed"} - error; no more retries left`),ht(this).debug(`[${f}] connection ${x?"timed out":"failed"} (error; no more retries left)`,fi({retryOfRequestLogID:r,url:h,durationMs:v-_,message:E.message})),x?new ex:new Tu({cause:E})}const p=`[${f}${g}] ${c.method} ${h} ${E.ok?"succeeded":"failed"} with status ${E.status} in ${v-_}ms`;if(!E.ok){const m=await this.shouldRetry(E);if(n&&m){const C=`retrying, ${n} attempts remaining`;return await D1(E.body),ht(this).info(`${p} - ${C}`),ht(this).debug(`[${f}] response error (${C})`,fi({retryOfRequestLogID:r,url:E.url,status:E.status,headers:E.headers,durationMs:v-_})),this.retryRequest(a,n,r??f,E.headers)}const x=m?"error; no more retries left":"error; not retryable";ht(this).info(`${p} - ${x}`);const k=await E.text().catch(C=>cf(C).message),b=k1(k),T=b?void 0:k;throw ht(this).debug(`[${f}] response error (${x})`,fi({retryOfRequestLogID:r,url:E.url,status:E.status,headers:E.headers,message:T,durationMs:Date.now()-_})),this.makeStatusError(E.status,b,T,E.headers)}return ht(this).info(p),ht(this).debug(`[${f}] response start`,fi({retryOfRequestLogID:r,url:E.url,status:E.status,headers:E.headers,durationMs:v-_})),{response:E,options:a,controller:w,requestLogID:f,retryOfRequestLogID:r,startTime:_}}async fetchWithTimeout(e,n,r,i){const s=n||{},{signal:o,method:a}=s,l=Lc(s,["signal","method"]);o&&o.addEventListener("abort",()=>i.abort());const c=setTimeout(()=>i.abort(),r),h=globalThis.ReadableStream&&l.body instanceof globalThis.ReadableStream||typeof l.body=="object"&&l.body!==null&&Symbol.asyncIterator in l.body,d=Object.assign(Object.assign(Object.assign({signal:i.signal},h?{duplex:"half"}:{}),{method:"GET"}),l);a&&(d.method=a.toUpperCase());try{return await this.fetch.call(void 0,e,d)}finally{clearTimeout(c)}}async shouldRetry(e){const n=e.headers.get("x-should-retry");return n==="true"?!0:n==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,n,r,i){var s;let o;const a=i==null?void 0:i.get("retry-after-ms");if(a){const c=parseFloat(a);Number.isNaN(c)||(o=c)}const l=i==null?void 0:i.get("retry-after");if(l&&!o){const c=parseFloat(l);Number.isNaN(c)?o=Date.parse(l)-Date.now():o=c*1e3}if(!(o&&0<=o&&o<60*1e3)){const c=(s=e.maxRetries)!==null&&s!==void 0?s:this.maxRetries;o=this.calculateDefaultRetryTimeoutMillis(n,c)}return await T1(o),this.makeRequest(e,n-1,r)}calculateDefaultRetryTimeoutMillis(e,n){const s=n-e,o=Math.min(.5*Math.pow(2,s),8),a=1-Math.random()*.25;return o*a*1e3}async buildRequest(e,{retryCount:n=0}={}){var r,i,s;const o=Object.assign({},e),{method:a,path:l,query:c,defaultBaseURL:h}=o,d=this.buildURL(l,c,h);"timeout"in o&&S1("timeout",o.timeout),o.timeout=(r=o.timeout)!==null&&r!==void 0?r:this.timeout;const{bodyHeaders:f,body:g}=this.buildBody({options:o}),_=await this.buildHeaders({options:e,method:a,bodyHeaders:f,retryCount:n});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:a,headers:_},o.signal&&{signal:o.signal}),globalThis.ReadableStream&&g instanceof globalThis.ReadableStream&&{duplex:"half"}),g&&{body:g}),(i=this.fetchOptions)!==null&&i!==void 0?i:{}),(s=o.fetchOptions)!==null&&s!==void 0?s:{}),url:d,timeout:o.timeout}}async buildHeaders({options:e,method:n,bodyHeaders:r,retryCount:i}){let s={};this.idempotencyHeader&&n!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),s[this.idempotencyHeader]=e.idempotencyKey);const o=await this.authHeaders(e);let a=Io([s,Object.assign(Object.assign({Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(i)},e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{}),A1()),this._options.defaultHeaders,r,e.headers,o]);return this.validateHeaders(a),a.values}buildBody({options:{body:e,headers:n}}){if(!e)return{bodyHeaders:void 0,body:void 0};const r=Io([n]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&r.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:P1(e)}:this.encoder({body:e,headers:r})}}Nu.DEFAULT_TIMEOUT=6e4;class it extends Nu{constructor(){super(...arguments),this.interactions=new mx(this)}}_x=it;it.GeminiNextGenAPIClient=_x;it.GeminiNextGenAPIClientError=un;it.APIError=_t;it.APIConnectionError=Tu;it.APIConnectionTimeoutError=ex;it.APIUserAbortError=uf;it.NotFoundError=ix;it.ConflictError=sx;it.RateLimitError=ax;it.BadRequestError=tx;it.AuthenticationError=nx;it.InternalServerError=lx;it.PermissionDeniedError=rx;it.UnprocessableEntityError=ox;it.toFile=z1;it.Interactions=mx;const yx=()=>{throw new Error("API_KEY environment variable is not defined.")},Z1=async(t,e=[],n="")=>{try{const r=yx(),i="gemini-3-flash-preview",s=`
      You are an expert E-Commerce Seller Support Assistant.
      
      GLOBAL SOP CONTEXT:
      ${zT}
      
      USER-SPECIFIC DIRECTIVE:
      ${n||"Standard professional response."}
      
      INSTRUCTIONS:
      - Answer the user's query professionally based on the context.
      - Provide a single, clear response in the primary language (English) unless explicitly asked to translate.
      - Use "We" and "Our" to represent the brand.
      - Maintain a professional, empathetic, and helpful tone.
    `;return(await r.chats.create({model:i,history:e,config:{systemInstruction:s}}).sendMessage({message:t})).text||""}catch(r){return console.error("Gemini Error:",r),`Error: ${r.message||"I encountered an issue connecting to the AI service."}`}},eR=async(t,e)=>{try{return(await yx().models.generateContent({model:"gemini-3-flash-preview",contents:`Translate the following text to ${e}. 
      Maintain a professional Customer Service tone suitable for e-commerce. 
      If there is slang, translate it to its professional equivalent in the target language.
      
      Text to translate:
      ${t}`,config:{systemInstruction:"You are a professional translator for Customer Service. Focus on speed, accuracy, and professional tone."}})).text||"Translation failed."}catch(n){throw console.error("Translation Error:",n),new Error(n.message||"Translation failed")}};var Q_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw no(e)},no=function(t){return new Error("Firebase Database ("+wx.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[h],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ex(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new nR;const f=s<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const _=c<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xx=function(t){const e=Ex(t);return eg.encodeByteArray(e,!0)},jc=function(t){return xx(t).replace(/\./g,"")},Uc=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){return Sa(void 0,t)}function Sa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iR(n)||(t[n]=Sa(t[n],e[n]));return t}function iR(t){return t!=="__proto__"}/**
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
 */function bx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sR=()=>bx().__FIREBASE_DEFAULTS__,oR=()=>{if(typeof process>"u"||typeof Q_>"u")return;const t=Q_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uc(t[1]);return e&&JSON.parse(e)},tg=()=>{try{return sR()||oR()||aR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ix=()=>{var t;return(t=tg())===null||t===void 0?void 0:t.config},lR=t=>{var e;return(e=tg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jc(JSON.stringify(n)),jc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Sx(){var t;const e=(t=tg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uR(){return typeof window<"u"||kx()}function kx(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function dR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ru(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cx(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hR(){return wx.NODE_ADMIN===!0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function fR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pR,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}}function gR(t,e){return t.replace(mR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return JSON.parse(t)}function Fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ka(Uc(s[0])||""),n=ka(Uc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},vR=function(t){const e=Nx(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_R=function(t){const e=Nx(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ff(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(J_(s)&&J_(o)){if(!ff(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function J_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):d<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const f=(i<<5|i>>>27)+c+l+h+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Rx(t,e){const n=new wR(t,e);return n.subscribe.bind(n)}class wR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ER(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ER(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function At(t,e){return`${t} failed: ${e} argument `}function Ge(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(At(t,e)+"must be a valid function.")}function X_(t,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(At(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Au=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function W(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pi="[DEFAULT]";/**
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
 */class pf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new It;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bR(t){return t===pi?void 0:t}function IR(t){return t.instantiationMode==="EAGER"}/**
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
 */class rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Ax={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},SR=ae.INFO,kR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},TR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=SR,this._logHandler=TR,this._userLogHandler=null,ig.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ax[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function CR(t){ig.forEach(e=>{e.setLogLevel(t)})}function NR(t,e){for(const n of ig){let r=null;e&&e.level&&(r=Ax[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const RR=(t,e)=>e.some(n=>t instanceof n);let Z_,ey;function AR(){return Z_||(Z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ox=new WeakMap,gf=new WeakMap,Px=new WeakMap,$d=new WeakMap,sg=new WeakMap;function PR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ox.set(n,t)}).catch(()=>{}),sg.set(e,t),e}function DR(t){if(gf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gf.set(t,e)}let mf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Px.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LR(t){mf=t(mf)}function MR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gd(this),e,...n);return Px.set(r,e.sort?e.sort():[e]),Vr(r)}:OR().includes(t)?function(...e){return t.apply(Gd(this),e),Vr(Ox.get(this))}:function(...e){return Vr(t.apply(Gd(this),e))}}function jR(t){return typeof t=="function"?MR(t):(t instanceof IDBTransaction&&DR(t),RR(t,AR())?new Proxy(t,mf):t)}function Vr(t){if(t instanceof IDBRequest)return PR(t);if($d.has(t))return $d.get(t);const e=jR(t);return e!==t&&($d.set(t,e),sg.set(e,t)),e}const Gd=t=>sg.get(t);function UR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vr(o.result),l.oldVersion,l.newVersion,Vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const FR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],Yd=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yd.set(e,s),s}LR(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
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
 */class BR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",vf="0.10.13";/**
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
 */const pr=new Ja("@firebase/app"),VR="@firebase/app-compat",WR="@firebase/analytics-compat",$R="@firebase/analytics",GR="@firebase/app-check-compat",YR="@firebase/app-check",KR="@firebase/auth",qR="@firebase/auth-compat",QR="@firebase/database",JR="@firebase/data-connect",XR="@firebase/database-compat",ZR="@firebase/functions",eA="@firebase/functions-compat",tA="@firebase/installations",nA="@firebase/installations-compat",rA="@firebase/messaging",iA="@firebase/messaging-compat",sA="@firebase/performance",oA="@firebase/performance-compat",aA="@firebase/remote-config",lA="@firebase/remote-config-compat",cA="@firebase/storage",uA="@firebase/storage-compat",dA="@firebase/firestore",hA="@firebase/vertexai-preview",fA="@firebase/firestore-compat",pA="firebase",gA="10.14.1";/**
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
 */const qr="[DEFAULT]",mA={[Hc]:"fire-core",[VR]:"fire-core-compat",[$R]:"fire-analytics",[WR]:"fire-analytics-compat",[YR]:"fire-app-check",[GR]:"fire-app-check-compat",[KR]:"fire-auth",[qR]:"fire-auth-compat",[QR]:"fire-rtdb",[JR]:"fire-data-connect",[XR]:"fire-rtdb-compat",[ZR]:"fire-fn",[eA]:"fire-fn-compat",[tA]:"fire-iid",[nA]:"fire-iid-compat",[rA]:"fire-fcm",[iA]:"fire-fcm-compat",[sA]:"fire-perf",[oA]:"fire-perf-compat",[aA]:"fire-rc",[lA]:"fire-rc-compat",[cA]:"fire-gcs",[uA]:"fire-gcs-compat",[dA]:"fire-fst",[fA]:"fire-fst-compat",[hA]:"fire-vertex","fire-js":"fire-js",[pA]:"fire-js-all"};/**
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
 */const Qr=new Map,Fs=new Map,zs=new Map;function Ta(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dx(t,e){t.container.addOrOverwriteComponent(e)}function Jr(t){const e=t.name;if(zs.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,t);for(const n of Qr.values())Ta(n,t);for(const n of Fs.values())Ta(n,t);return!0}function Lx(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vA(t,e,n=qr){Lx(t,e).clearInstance(n)}function Mx(t){return t.options!==void 0}function ke(t){return t.settings!==void 0}function _A(){zs.clear()}/**
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
 */const yA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new Hi("app","Firebase",yA);/**
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
 */let jx=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}};/**
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
 */class wA extends jx{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,bn(Hc,vf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ag(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw on.create("server-app-deleted")}}/**
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
 */const oi=gA;function og(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=Ix()),!n)throw on.create("no-options");const s=Qr.get(i);if(s){if(ff(n,s.options)&&ff(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new rg(i);for(const l of zs.values())o.addComponent(l);const a=new jx(n,r,o);return Qr.set(i,a),a}function EA(t,e){if(uR()&&!kx())throw on.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Mx(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,d)=>Math.imul(31,h)+d.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw on.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Fs.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new rg(s);for(const c of zs.values())a.addComponent(c);const l=new wA(n,e,s,a);return Fs.set(s,l),l}function xA(t=qr){const e=Qr.get(t);if(!e&&t===qr&&Ix())return og();if(!e)throw on.create("no-app",{appName:t});return e}function bA(){return Array.from(Qr.values())}async function ag(t){let e=!1;const n=t.name;Qr.has(n)?(e=!0,Qr.delete(n)):Fs.has(n)&&t.decRefCount()<=0&&(Fs.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function bn(t,e,n){var r;let i=(r=mA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}Jr(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ux(t,e){if(t!==null&&typeof t!="function")throw on.create("invalid-log-argument");NR(t,e)}function Fx(t){CR(t)}/**
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
 */const IA="firebase-heartbeat-database",SA=1,Ca="firebase-heartbeat-store";let Kd=null;function zx(){return Kd||(Kd=UR(IA,SA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Kd}async function kA(t){try{const n=(await zx()).transaction(Ca),r=await n.objectStore(Ca).get(Bx(t));return await n.done,r}catch(e){if(e instanceof Rt)pr.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function ny(t,e){try{const r=(await zx()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,Bx(t)),await r.done}catch(n){if(n instanceof Rt)pr.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Bx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TA=1024,CA=30*24*60*60*1e3;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ry();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=CA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ry(),{heartbeatsToSend:r,unsentEntries:i}=RA(this._heartbeatsCache.heartbeats),s=jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pr.warn(n),""}}}function ry(){return new Date().toISOString().substring(0,10)}function RA(t,e=TA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?fR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iy(t){return jc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OA(t){Jr(new dn("platform-logger",e=>new BR(e),"PRIVATE")),Jr(new dn("heartbeat",e=>new NA(e),"PRIVATE")),bn(Hc,vf,t),bn(Hc,vf,"esm2017"),bn("fire-js","")}OA("");const PA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Rt,SDK_VERSION:oi,_DEFAULT_ENTRY_NAME:qr,_addComponent:Ta,_addOrOverwriteComponent:Dx,_apps:Qr,_clearComponents:_A,_components:zs,_getProvider:Lx,_isFirebaseApp:Mx,_isFirebaseServerApp:ke,_registerComponent:Jr,_removeServiceInstance:vA,_serverApps:Fs,deleteApp:ag,getApp:xA,getApps:bA,initializeApp:og,initializeServerApp:EA,onLog:Ux,registerVersion:bn,setLogLevel:Fx},Symbol.toStringTag,{value:"Module"}));/**
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
 */class DA{constructor(e,n){this._delegate=e,this.firebase=n,Ta(e,new dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ag(this._delegate)))}_getService(e,n=qr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=qr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ta(this._delegate,e)}_addOrOverwriteComponent(e){Dx(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const LA={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},sy=new Hi("app-compat","Firebase",LA);/**
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
 */function MA(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:bn,setLogLevel:Fx,onLog:Ux,apps:null,SDK_VERSION:oi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:PA}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||qr,!Gt(e,c))throw sy.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const d=og(c,h);if(Gt(e,d.name))return e[d.name];const f=new t(d,n);return e[d.name]=f,f}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,d=h.replace("-compat","");if(Jr(c)&&c.type==="PUBLIC"){const f=(g=i())=>{if(typeof g[d]!="function")throw sy.create("invalid-app-argument",{appName:h});return g[d]()};c.serviceProps!==void 0&&Sa(f,c.serviceProps),n[d]=f,t.prototype[d]=function(...g){return this._getService.bind(this,h).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function Hx(){const t=MA(DA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Hx,extendNamespace:e,createSubscribe:Rx,ErrorFactory:Hi,deepExtend:Sa});function e(n){Sa(t,n)}return t}const jA=Hx();/**
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
 */const oy=new Ja("@firebase/app-compat"),UA="@firebase/app-compat",FA="0.2.43";/**
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
 */function zA(t){bn(UA,FA,t)}/**
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
 */try{const t=bx();if(t.firebase!==void 0){oy.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&oy.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const an=jA;zA();var BA="firebase",HA="10.14.1";/**
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
 */an.registerVersion(BA,HA,"app-compat");function lg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const So={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},es={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function VA(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Vx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WA=VA,$A=Vx,Wx=new Hi("auth","Firebase",Vx());/**
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
 */const Vc=new Ja("@firebase/auth");function GA(t,...e){Vc.logLevel<=ae.WARN&&Vc.warn(`Auth (${oi}): ${t}`,...e)}function nc(t,...e){Vc.logLevel<=ae.ERROR&&Vc.error(`Auth (${oi}): ${t}`,...e)}/**
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
 */function rt(t,...e){throw ug(t,...e)}function Be(t,...e){return ug(t,...e)}function cg(t,e,n){const r=Object.assign(Object.assign({},$A()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function Qe(t){return cg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ro(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rt(t,"argument-error"),cg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ug(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wx.create(t,...e)}function O(t,e,...n){if(!t)throw ug(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function Tn(t,e){t||zn(e)}/**
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
 */function Na(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dg(){return ay()==="http:"||ay()==="https:"}function ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dg()||Tx()||"connection"in navigator)?navigator.onLine:!0}function KA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=ng()||Ru()}get(){return YA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hg(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $x{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QA=new Xa(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ne(t,e,n,r,i={}){return Gx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return dR()||(c.referrerPolicy="no-referrer"),$x.fetch()(Yx(t,t.config.apiHost,n,a),c)})}async function Gx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qA),e);try{const i=new XA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Uo(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cg(t,h,c);rt(t,h)}}catch(i){if(i instanceof Rt)throw i;rt(t,"network-request-failed",{message:String(i)})}}async function _r(t,e,n,r,i={}){const s=await Ne(t,e,n,r,i);return"mfaPendingCredential"in s&&rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Yx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hg(t.config,i):`${t.config.apiScheme}://${i}`}function JA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),QA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Be(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function ly(t){return t!==void 0&&t.getResponse!==void 0}function cy(t){return t!==void 0&&t.enterprise!==void 0}class ZA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function eO(t){return(await Ne(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tO(t,e){return Ne(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
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
 */async function nO(t,e){return Ne(t,"POST","/v1/accounts:delete",e)}async function rO(t,e){return Ne(t,"POST","/v1/accounts:update",e)}async function Kx(t,e){return Ne(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iO(t,e=!1){const n=W(t),r=await n.getIdToken(e),i=Ou(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xo(qd(i.auth_time)),issuedAtTime:Xo(qd(i.iat)),expirationTime:Xo(qd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qd(t){return Number(t)*1e3}function Ou(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uc(n);return i?JSON.parse(i):(nc("Failed to decode base64 JWT payload"),null)}catch(i){return nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uy(t){const e=Ou(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&sO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _f{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xo(this.lastLoginAt),this.creationTime=Xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(t){var e;const n=t.auth,r=await t.getIdToken(),i=await gr(t,Kx(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qx(s.providerUserInfo):[],a=lO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _f(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function aO(t){const e=W(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qx(t){return t.map(e=>{var{providerId:n}=e,r=lg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cO(t,e){const n=await Gx(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Yx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$x.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uO(t,e){return Ne(t,"POST","/v2/accounts:revokeToken",Ce(t,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=uy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ks;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function Ir(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=lg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _f(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iO(this,e)}reload(){return aO(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(Qe(this.auth));const e=await this.getIdToken();return await gr(this,nO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:m,emailVerified:x,isAnonymous:k,providerData:b,stsTokenManager:T}=n;O(m&&T,e,"internal-error");const S=ks.fromJSON(this.name,T);O(typeof m=="string",e,"internal-error"),Ir(d,e.name),Ir(f,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),Ir(g,e.name),Ir(_,e.name),Ir(w,e.name),Ir(E,e.name),Ir(v,e.name),Ir(p,e.name);const C=new rr({uid:m,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:k,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:S,createdAt:v,lastLoginAt:p});return b&&Array.isArray(b)&&(C.providerData=b.map(R=>Object.assign({},R))),E&&(C._redirectEventId=E),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new ks;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ra(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qx(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ks;a.updateFromIdToken(r);const l=new rr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _f(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const dy=new Map;function Vt(t){Tn(t instanceof Function,"Expected a class definition");let e=dy.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dy.set(t,e),e)}/**
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
 */class Qx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qx.type="NONE";const Bs=Qx;/**
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
 */function bi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=bi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Vt(Bs),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Vt(Bs);const o=bi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=rr._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ts(s,e,r))}}/**
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
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tb(e))return"Blackberry";if(nb(e))return"Webos";if(Xx(e))return"Safari";if((e.includes("chrome/")||Zx(e))&&!e.includes("edge/"))return"Chrome";if(Za(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jx(t=He()){return/firefox\//i.test(t)}function Xx(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zx(t=He()){return/crios\//i.test(t)}function eb(t=He()){return/iemobile/i.test(t)}function Za(t=He()){return/android/i.test(t)}function tb(t=He()){return/blackberry/i.test(t)}function nb(t=He()){return/webos/i.test(t)}function el(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dO(t=He()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function hO(t=He()){var e;return el(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fO(){return Cx()&&document.documentMode===10}function rb(t=He()){return el(t)||Za(t)||nb(t)||tb(t)||/windows phone/i.test(t)||eb(t)}/**
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
 */function ib(t,e=[]){let n;switch(t){case"Browser":n=hy(He());break;case"Worker":n=`${hy(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class pO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gO(t,e={}){return Ne(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
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
 */const mO=6;class vO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _O{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new pO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kx(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(Qe(this));const n=e?W(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(Qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(Qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gO(this),n=new vO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ib(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Te(t){return W(t)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rx(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yO(t){tl=t}function fg(t){return tl.loadJS(t)}function wO(){return tl.recaptchaV2Script}function EO(){return tl.recaptchaEnterpriseScript}function xO(){return tl.gapiScript}function sb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bO="recaptcha-enterprise",IO="NO_RECAPTCHA";class SO{constructor(e){this.type=bO,this.auth=Te(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ZA(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(IO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=EO();l.length!==0&&(l+=a),fg(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function py(t,e,n,r=!1){const i=new SO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Aa(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await py(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await py(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function kO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TO(t,e,n){const r=Te(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ob(e),{host:o,port:a}=CO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NO()}function ob(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CO(t){const e=ob(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gy(o)}}}function gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class io{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
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
 */async function ab(t,e){return Ne(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function RO(t,e){return Ne(t,"POST","/v1/accounts:update",e)}async function AO(t,e){return Ne(t,"POST","/v1/accounts:signUp",e)}async function OO(t,e){return Ne(t,"POST","/v1/accounts:update",Ce(t,e))}/**
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
 */async function PO(t,e){return _r(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function Pu(t,e){return Ne(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function DO(t,e){return Pu(t,e)}async function LO(t,e){return Pu(t,e)}async function MO(t,e){return Pu(t,e)}async function jO(t,e){return Pu(t,e)}/**
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
 */async function UO(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function FO(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
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
 */class Oa extends io{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Aa(e,n,"signInWithPassword",PO);case"emailLink":return UO(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Aa(e,r,"signUpPassword",AO);case"emailLink":return FO(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lr(t,e){return _r(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
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
 */const zO="http://localhost";class $n extends io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=lg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}buildRequest(){const e={requestUri:zO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */async function BO(t,e){return Ne(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function HO(t,e){return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function VO(t,e){const n=await _r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw Uo(t,"account-exists-with-different-credential",n);return n}const WO={USER_NOT_FOUND:"user-not-found"};async function $O(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),WO)}/**
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
 */class Ii extends io{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ii({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ii({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return HO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return VO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $O(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ii({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function GO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YO(t){const e=vs(jo(t)).link,n=e?vs(jo(e)).deep_link_id:null,r=vs(jo(t)).deep_link_id;return(r?vs(jo(r)).link:null)||r||n||e||t}class Du{constructor(e){var n,r,i,s,o,a;const l=vs(jo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=GO((i=l.mode)!==null&&i!==void 0?i:null);O(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=YO(e);try{return new Du(n)}catch{return null}}}/**
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
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return Oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Du.parseLink(n);return O(r,"argument-error"),Oa._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends yr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Cs extends so{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),$n._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),$n._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Cs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Cs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Cs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Mn extends so{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
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
 */class jn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Un extends so{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */const KO="http://localhost";class Hs extends io{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Hs(r,s)}static _create(e,n){return new Hs(e,n)}buildRequest(){return{requestUri:KO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const qO="saml.";class Wc extends yr{constructor(e){O(e.startsWith(qO),"argument-error"),super(e)}static credentialFromResult(e){return Wc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Hs.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Hs._create(r,n)}catch{return null}}}/**
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
 */class Fn extends so{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function lb(t,e){return _r(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=my(r);return new hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=my(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function my(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function QO(t){var e;if(ke(t.app))return Promise.reject(Qe(t));const n=Te(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new hn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await lb(n,{returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class $c extends Rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $c(e,n,r,i)}}function cb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function ub(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function JO(t,e){const n=W(t);await Lu(!0,n,e);const{providerUserInfo:r}=await rO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=ub(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function pg(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}async function Lu(t,e,n){await Ra(e);const r=ub(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,i)}/**
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
 */async function db(t,e,n=!1){const{auth:r}=t;if(ke(r.app))return Promise.reject(Qe(r));const i="reauthenticate";try{const s=await gr(t,cb(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Ou(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),hn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
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
 */async function hb(t,e,n=!1){if(ke(t.app))return Promise.reject(Qe(t));const r="signIn",i=await cb(t,r,e),s=await hn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Mu(t,e){return hb(Te(t),e)}async function fb(t,e){const n=W(t);return await Lu(!1,n,e.providerId),pg(n,e)}async function pb(t,e){return db(W(t),e)}/**
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
 */async function XO(t,e){return _r(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
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
 */async function ZO(t,e){if(ke(t.app))return Promise.reject(Qe(t));const n=Te(t),r=await XO(n,{token:e,returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class nl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?gg._fromServerResponse(e,n):"totpInfo"in n?mg._fromServerResponse(e,n):rt(e,"internal-error")}}class gg extends nl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new gg(n)}}class mg extends nl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new mg(n)}}/**
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
 */function ju(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function vg(t){const e=Te(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eP(t,e,n){const r=Te(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ju(r,i,n),await Aa(r,i,"getOobCode",LO)}async function tP(t,e,n){await ab(W(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vg(t),r})}async function nP(t,e){await OO(W(t),{oobCode:e})}async function gb(t,e){const n=W(t),r=await ab(n,{oobCode:e}),i=r.requestType;switch(O(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=nl._fromServerResponse(Te(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function rP(t,e){const{data:n}=await gb(W(t),e);return n.email}async function iP(t,e,n){if(ke(t.app))return Promise.reject(Qe(t));const r=Te(t),o=await Aa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vg(t),l}),a=await hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sP(t,e,n){return ke(t.app)?Promise.reject(Qe(t)):Mu(W(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vg(t),r})}/**
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
 */async function oP(t,e,n){const r=Te(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){O(a.handleCodeInApp,r,"argument-error"),a&&ju(r,o,a)}s(i,n),await Aa(r,i,"getOobCode",MO)}function aP(t,e){const n=Du.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function lP(t,e,n){if(ke(t.app))return Promise.reject(Qe(t));const r=W(t),i=ai.credentialWithLink(e,n||Na());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Mu(r,i)}/**
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
 */async function cP(t,e){return Ne(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
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
 */async function uP(t,e){const n=dg()?Na():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await cP(W(t),r);return i||[]}async function dP(t,e){const n=W(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ju(n.auth,i,e);const{email:s}=await DO(n.auth,i);s!==t.email&&await t.reload()}async function hP(t,e,n){const r=W(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ju(r.auth,s,n);const{email:o}=await jO(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function fP(t,e){return Ne(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=W(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,fP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gP(t,e){const n=W(t);return ke(n.auth.app)?Promise.reject(Qe(n.auth)):mb(n,e,null)}function mP(t,e){return mb(W(t),null,e)}async function mb(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await gr(t,RO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function vP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ou(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ns(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new _P(s,i);case"github.com":return new yP(s,i);case"google.com":return new wP(s,i);case"twitter.com":return new EP(s,i,t.screenName||null);case"custom":case"anonymous":return new Ns(s,null);default:return new Ns(s,r,i)}}class Ns{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class vb extends Ns{constructor(e,n,r,i){super(e,n,r),this.username=i}}class _P extends Ns{constructor(e,n){super(e,"facebook.com",n)}}class yP extends vb{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class wP extends Ns{constructor(e,n){super(e,"google.com",n)}}class EP extends vb{constructor(e,n,r){super(e,"twitter.com",n,r)}}function xP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:vP(n)}/**
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
 */class yi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new yi("enroll",e,n)}static _fromMfaPendingCredential(e){return new yi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return yi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return yi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class _g{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Te(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>nl._fromServerResponse(r,a));O(i.mfaPendingCredential,r,"internal-error");const o=yi._fromMfaPendingCredential(i.mfaPendingCredential);return new _g(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await hn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return O(n.user,r,"internal-error"),hn._forOperation(n.user,n.operationType,c);default:rt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function bP(t,e){var n;const r=W(t),i=e;return O(e.customData.operationType,r,"argument-error"),O((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),_g._fromError(r,i)}/**
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
 */function IP(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function SP(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function kP(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class yg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>nl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new yg(e)}async getSession(){return yi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await gr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await gr(this.user,kP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Qd=new WeakMap;function TP(t){const e=W(t);return Qd.has(e)||Qd.set(e,yg._fromUser(e)),Qd.get(e)}const Gc="__sak";/**
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
 */class _b{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CP=1e3,NP=10;class yb extends _b{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yb.type="LOCAL";const wg=yb;/**
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
 */class wb extends _b{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wb.type="SESSION";const Di=wb;/**
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
 */function RP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await RP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
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
 */function rl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=rl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pe(){return window}function OP(t){Pe().location.href=t}/**
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
 */function Eg(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function PP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LP(){return Eg()?self:null}/**
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
 */const Eb="firebaseLocalStorageDb",MP=1,Yc="firebaseLocalStorage",xb="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fu(t,e){return t.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function jP(){const t=indexedDB.deleteDatabase(Eb);return new il(t).toPromise()}function yf(){const t=indexedDB.open(Eb,MP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yc,{keyPath:xb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yc)?e(r):(r.close(),await jP(),e(await yf()))})})}async function vy(t,e,n){const r=Fu(t,!0).put({[xb]:e,value:n});return new il(r).toPromise()}async function UP(t,e){const n=Fu(t,!1).get(e),r=await new il(n).toPromise();return r===void 0?null:r.value}function _y(t,e){const n=Fu(t,!0).delete(e);return new il(n).toPromise()}const FP=800,zP=3;class bb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(LP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PP(),!this.activeServiceWorker)return;this.sender=new AP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await vy(e,Gc,"1"),await _y(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_y(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fu(i,!1).getAll();return new il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bb.type="LOCAL";const Pa=bb;/**
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
 */function BP(t,e){return Ne(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function HP(t,e){return Ne(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
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
 */const VP=500,WP=6e4,zl=1e12;class $P{constructor(e){this.auth=e,this.counter=zl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new GP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||zl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||zl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||zl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class GP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=YP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},WP)},VP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function YP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Jd=sb("rcb"),KP=new Xa(3e4,6e4);class qP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Pe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(QP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&ly(Pe().grecaptcha)?Promise.resolve(Pe().grecaptcha):new Promise((r,i)=>{const s=Pe().setTimeout(()=>{i(Be(e,"network-request-failed"))},KP.get());Pe()[Jd]=()=>{Pe().clearTimeout(s),delete Pe()[Jd];const a=Pe().grecaptcha;if(!a||!ly(a)){i(Be(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const d=l(c,h);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${wO()}?${Vi({onload:Jd,render:"explicit",hl:n})}`;fg(o).catch(()=>{clearTimeout(s),i(Be(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Pe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function QP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class JP{async load(e){return new $P(e)}clearedOneInstance(){}}/**
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
 */const Ib="recaptcha",XP={theme:"light",type:"image"};let ZP=class{constructor(e,n,r=Object.assign({},XP)){this.parameters=r,this.type=Ib,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Te(e),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new JP:new qP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Pe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(dg()&&!Eg(),this.auth,"internal-error"),await eD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await eO(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function eD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class xg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ii._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function tD(t,e,n){if(ke(t.app))return Promise.reject(Qe(t));const r=Te(t),i=await zu(r,e,W(n));return new xg(i,s=>Mu(r,s))}async function nD(t,e,n){const r=W(t);await Lu(!1,r,"phone");const i=await zu(r.auth,e,W(n));return new xg(i,s=>fb(r,s))}async function rD(t,e,n){const r=W(t);if(ke(r.auth.app))return Promise.reject(Qe(r.auth));const i=await zu(r.auth,e,W(n));return new xg(i,s=>pb(r,s))}async function zu(t,e,n){var r;const i=await n.verify();try{O(typeof i=="string",t,"argument-error"),O(n.type===Ib,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return O(o.type==="enroll",t,"internal-error"),(await IP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await BP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BO(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function iD(t,e){const n=W(t);if(ke(n.auth.app))return Promise.reject(Qe(n.auth));await pg(n,e)}/**
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
 */let Li=class rc{constructor(e){this.providerId=rc.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,n){return zu(this.auth,e,W(n))}static credential(e,n){return Ii._fromVerification(e,n)}static credentialFromResult(e){const n=e;return rc.credentialFromTaggedObject(n)}static credentialFromError(e){return rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ii._fromTokenResponse(n,r):null}};Li.PROVIDER_ID="phone";Li.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Wi(t,e){return e?Vt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bg extends io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sD(t){return hb(t.auth,new bg(t),t.bypassAuthState)}function oD(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),db(n,new bg(t),t.bypassAuthState)}async function aD(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),pg(n,new bg(t),t.bypassAuthState)}/**
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
 */class Sb{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sD;case"linkViaPopup":case"linkViaRedirect":return aD;case"reauthViaPopup":case"reauthViaRedirect":return oD;default:rt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lD=new Xa(2e3,1e4);async function cD(t,e,n){if(ke(t.app))return Promise.reject(Be(t,"operation-not-supported-in-this-environment"));const r=Te(t);ro(t,e,yr);const i=Wi(r,n);return new ir(r,"signInViaPopup",e,i).executeNotNull()}async function uD(t,e,n){const r=W(t);if(ke(r.auth.app))return Promise.reject(Be(r.auth,"operation-not-supported-in-this-environment"));ro(r.auth,e,yr);const i=Wi(r.auth,n);return new ir(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function dD(t,e,n){const r=W(t);ro(r.auth,e,yr);const i=Wi(r.auth,n);return new ir(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ir extends Sb{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lD.get())};e()}}ir.currentPopupAction=null;/**
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
 */const hD="pendingRedirect",Zo=new Map;class fD extends Sb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const r=await pD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pD(t,e){const n=Tb(e),r=kb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Ig(t,e){return kb(t)._set(Tb(e),"true")}function gD(){Zo.clear()}function Sg(t,e){Zo.set(t._key(),e)}function kb(t){return Vt(t._redirectPersistence)}function Tb(t){return bi(hD,t.config.apiKey,t.name)}/**
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
 */function mD(t,e,n){return vD(t,e,n)}async function vD(t,e,n){if(ke(t.app))return Promise.reject(Qe(t));const r=Te(t);ro(t,e,yr),await r._initializationPromise;const i=Wi(r,n);return await Ig(i,r),i._openRedirect(r,e,"signInViaRedirect")}function _D(t,e,n){return yD(t,e,n)}async function yD(t,e,n){const r=W(t);if(ro(r.auth,e,yr),ke(r.auth.app))return Promise.reject(Qe(r.auth));await r.auth._initializationPromise;const i=Wi(r.auth,n);await Ig(i,r.auth);const s=await Cb(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function wD(t,e,n){return ED(t,e,n)}async function ED(t,e,n){const r=W(t);ro(r.auth,e,yr),await r.auth._initializationPromise;const i=Wi(r.auth,n);await Lu(!1,r,e.providerId),await Ig(i,r.auth);const s=await Cb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function xD(t,e){return await Te(t)._initializationPromise,Bu(t,e,!1)}async function Bu(t,e,n=!1){if(ke(t.app))return Promise.reject(Qe(t));const r=Te(t),i=Wi(r,e),o=await new fD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Cb(t){const e=rl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const bD=10*60*1e3;class Nb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ID(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bD&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ID(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rb(t);default:return!1}}/**
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
 */async function Ab(t,e={}){return Ne(t,"GET","/v1/projects",e)}/**
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
 */const SD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kD=/^https?/;async function TD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ab(t);for(const n of e)try{if(CD(n))return}catch{}rt(t,"unauthorized-domain")}function CD(t){const e=Na(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kD.test(n))return!1;if(SD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ND=new Xa(3e4,6e4);function wy(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RD(t){return new Promise((e,n)=>{var r,i,s;function o(){wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wy(),n(Be(t,"network-request-failed"))},timeout:ND.get()})}if(!((i=(r=Pe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pe().gapi)===null||s===void 0)&&s.load)o();else{const a=sb("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},fg(`${xO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ic=null,e})}let ic=null;function AD(t){return ic=ic||RD(t),ic}/**
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
 */const OD=new Xa(5e3,15e3),PD="__/auth/iframe",DD="emulator/auth/iframe",LD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jD(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hg(e,DD):`https://${t.config.authDomain}/${PD}`,r={apiKey:e.apiKey,appName:t.name,v:oi},i=MD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vi(r).slice(1)}`}async function UD(t){const e=await AD(t),n=Pe().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:jD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=Pe().setTimeout(()=>{s(o)},OD.get());function l(){Pe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const FD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zD=500,BD=600,HD="_blank",VD="http://localhost";class Ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WD(t,e,n,r=zD,i=BD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=He().toLowerCase();n&&(a=Zx(c)?HD:n),Jx(c)&&(e=e||VD,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(hO(c)&&a!=="_self")return $D(e||"",a),new Ey(null);const d=window.open(e||"",a,h);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Ey(d)}function $D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GD="__/auth/handler",YD="emulator/auth/handler",KD=encodeURIComponent("fac");async function wf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:i};if(e instanceof yr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof so){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${KD}=${encodeURIComponent(l)}`:"";return`${qD(t)}?${Vi(a).slice(1)}${c}`}function qD({config:t}){return t.emulator?hg(t,YD):`https://${t.authDomain}/${GD}`}/**
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
 */const Xd="webStorageSupport";class QD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=Bu,this._overrideRedirectResult=Sg}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wf(e,n,r,Na(),i);return WD(e,o,rl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wf(e,n,r,Na(),i);return OP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UD(e),r=new Nb(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rb()||Xx()||el()}}const JD=QD;class XD{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return zn("unexpected MultiFactorSessionType")}}}class kg extends XD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new kg(e)}_finalizeEnroll(e,n,r){return SP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return HP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ob{constructor(){}static assertion(e){return kg._fromCredential(e)}}Ob.FACTOR_ID="phone";var xy="@firebase/auth",by="1.7.9";/**
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
 */class ZD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tL(t){Jr(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ib(t)},c=new _O(r,i,s,l);return kO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new dn("auth-internal",e=>{const n=Te(e.getProvider("auth").getImmediate());return(r=>new ZD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(xy,by,eL(t)),bn(xy,by,"esm2017")}/**
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
 */const nL=5*60;lR("authIdTokenMaxAge");function rL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Be("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tL("Browser");/**
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
 */function Mi(){return window}/**
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
 */const iL=2e3;async function sL(t,e,n){var r;const{BuildInfo:i}=Mi();Tn(e.sessionId,"AuthEvent did not contain a session ID");const s=await uL(e.sessionId),o={};return el()?o.ibi=i.packageName:Za()?o.apn=i.packageName:rt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function oL(t){const{BuildInfo:e}=Mi(),n={};el()?n.iosBundleId=e.packageName:Za()?n.androidPackageName=e.packageName:rt(t,"operation-not-supported-in-this-environment"),await Ab(t,n)}function aL(t){const{cordova:e}=Mi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,dO()?"_blank":"_system","location=yes"),n(i)})})}async function lL(t,e,n){const{cordova:r}=Mi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const f=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Be(t,"redirect-cancelled-by-user"))},iL))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Za()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function cL(t){var e,n,r,i,s,o,a,l,c,h;const d=Mi();O(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((h=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function uL(t){const e=dL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function dL(t){if(Tn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const hL=20;class fL extends Nb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function pL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:vL(),postBody:null,tenantId:t.tenantId,error:Be(t,"no-auth-event")}}function gL(t,e){return Ef()._set(xf(t),e)}async function Iy(t){const e=await Ef()._get(xf(t));return e&&await Ef()._remove(xf(t)),e}function mL(t,e){var n,r;const i=yL(e);if(i.includes("/__/auth/callback")){const s=sc(i),o=s.firebaseError?_L(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Be(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function vL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<hL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Ef(){return Vt(wg)}function xf(t){return bi("authEvent",t.config.apiKey,t.name)}function _L(t){try{return JSON.parse(t)}catch{return null}}function yL(t){const e=sc(t),n=e.link?decodeURIComponent(e.link):void 0,r=sc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return sc(i).link||i||r||n||t}function sc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return vs(n.join("?"))}/**
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
 */const wL=500;class EL{constructor(){this._redirectPersistence=Di,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Bu,this._overrideRedirectResult=Sg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new fL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){cL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),gD(),await this._originValidation(e);const o=pL(e,r,i);await gL(e,o);const a=await sL(e,o,n),l=await aL(a);return lL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Mi(),o=setTimeout(async()=>{await Iy(e),n.onEvent(Sy())},wL),a=async h=>{clearTimeout(o);const d=await Iy(e);let f=null;d&&(h!=null&&h.url)&&(f=mL(d,h.url)),n.onEvent(f||Sy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Mi().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof l=="function")try{l(h)}catch(d){console.error(d)}}}}const xL=EL;function Sy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Be("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bL(t,e){Te(t)._logFramework(e)}var IL="@firebase/auth-compat",SL="0.5.14";/**
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
 */const kL=1e3;function ea(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function TL(){return ea()==="http:"||ea()==="https:"}function Pb(t=He()){return!!((ea()==="file:"||ea()==="ionic:"||ea()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function CL(){return Ru()||Sx()}function NL(){return Cx()&&(document==null?void 0:document.documentMode)===11}function RL(t=He()){return/Edge\/\d+/.test(t)}function AL(t=He()){return NL()||RL(t)}function Db(){try{const t=self.localStorage,e=rl();if(t)return t.setItem(e,"1"),t.removeItem(e),AL()?Fc():!0}catch{return Tg()&&Fc()}return!1}function Tg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Zd(){return(TL()||Tx()||Pb())&&!CL()&&Db()&&!Tg()}function Lb(){return Pb()&&typeof document<"u"}async function OL(){return Lb()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},kL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function PL(){return typeof window<"u"?window:null}/**
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
 */const zt={LOCAL:"local",NONE:"none",SESSION:"session"},ko=O,Mb="persistence";function DL(t,e){if(ko(Object.values(zt).includes(e),t,"invalid-persistence-type"),Ru()){ko(e!==zt.SESSION,t,"unsupported-persistence-type");return}if(Sx()){ko(e===zt.NONE,t,"unsupported-persistence-type");return}if(Tg()){ko(e===zt.NONE||e===zt.LOCAL&&Fc(),t,"unsupported-persistence-type");return}ko(e===zt.NONE||Db(),t,"unsupported-persistence-type")}async function bf(t){await t._initializationPromise;const e=jb(),n=bi(Mb,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function LL(t,e){const n=jb();if(!n)return[];const r=bi(Mb,t,e);switch(n.getItem(r)){case zt.NONE:return[Bs];case zt.LOCAL:return[Pa,Di];case zt.SESSION:return[Di];default:return[]}}function jb(){var t;try{return((t=PL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const ML=O;class Or{constructor(){this.browserResolver=Vt(JD),this.cordovaResolver=Vt(xL),this.underlyingResolver=null,this._redirectPersistence=Di,this._completeRedirectFn=Bu,this._overrideRedirectResult=Sg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Lb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ML(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Ub(t){return t.unwrap()}function jL(t){return t.wrapped()}/**
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
 */function UL(t){return Fb(t)}function FL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new zL(t,bP(t,e))}else if(r){const i=Fb(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Fb(t){const{_tokenResponse:e}=t instanceof Rt?t.customData:t;if(!e)return null;if(!(t instanceof Rt)&&"temporaryProof"in e&&"phoneNumber"in e)return Li.credentialFromResult(t);const n=e.providerId;if(!n||n===So.PASSWORD)return null;let r;switch(n){case So.GOOGLE:r=jn;break;case So.FACEBOOK:r=Mn;break;case So.GITHUB:r=Un;break;case So.TWITTER:r=Fn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Hs._create(n,a):$n._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Cs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Rt?r.credentialFromError(t):r.credentialFromResult(t)}function xt(t,e){return e.catch(n=>{throw n instanceof Rt&&FL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:UL(n),additionalUserInfo:xP(n),user:sr.getOrCreate(i)}})}async function If(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>xt(t,n.confirm(r))}}class zL{constructor(e,n){this.resolver=n,this.auth=jL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xt(Ub(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class sr{constructor(e){this._delegate=e,this.multiFactor=TP(e)}static getOrCreate(e){return sr.USER_MAP.has(e)||sr.USER_MAP.set(e,new sr(e)),sr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xt(this.auth,fb(this._delegate,e))}async linkWithPhoneNumber(e,n){return If(this.auth,nD(this._delegate,e,n))}async linkWithPopup(e){return xt(this.auth,dD(this._delegate,e,Or))}async linkWithRedirect(e){return await bf(Te(this.auth)),wD(this._delegate,e,Or)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xt(this.auth,pb(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return If(this.auth,rD(this._delegate,e,n))}reauthenticateWithPopup(e){return xt(this.auth,uD(this._delegate,e,Or))}async reauthenticateWithRedirect(e){return await bf(Te(this.auth)),_D(this._delegate,e,Or)}sendEmailVerification(e){return dP(this._delegate,e)}async unlink(e){return await JO(this._delegate,e),this}updateEmail(e){return gP(this._delegate,e)}updatePassword(e){return mP(this._delegate,e)}updatePhoneNumber(e){return iD(this._delegate,e)}updateProfile(e){return pP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return hP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}sr.USER_MAP=new WeakMap;/**
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
 */const To=O;class Sf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;To(r,"invalid-api-key",{appName:e.name}),To(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Or:void 0;this._delegate=n.initialize({options:{persistence:BL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(WA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){TO(this._delegate,e,n)}applyActionCode(e){return nP(this._delegate,e)}checkActionCode(e){return gb(this._delegate,e)}confirmPasswordReset(e,n){return tP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return xt(this._delegate,iP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return uP(this._delegate,e)}isSignInWithEmailLink(e){return aP(this._delegate,e)}async getRedirectResult(){To(Zd(),this._delegate,"operation-not-supported-in-this-environment");const e=await xD(this._delegate,Or);return e?xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){bL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=ky(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=ky(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return oP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return eP(this._delegate,e,n||void 0)}async setPersistence(e){DL(this._delegate,e);let n;switch(e){case zt.SESSION:n=Di;break;case zt.LOCAL:n=await Vt(Pa)._isAvailable()?Pa:wg;break;case zt.NONE:n=Bs;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xt(this._delegate,QO(this._delegate))}signInWithCredential(e){return xt(this._delegate,Mu(this._delegate,e))}signInWithCustomToken(e){return xt(this._delegate,ZO(this._delegate,e))}signInWithEmailAndPassword(e,n){return xt(this._delegate,sP(this._delegate,e,n))}signInWithEmailLink(e,n){return xt(this._delegate,lP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return If(this._delegate,tD(this._delegate,e,n))}async signInWithPopup(e){return To(Zd(),this._delegate,"operation-not-supported-in-this-environment"),xt(this._delegate,cD(this._delegate,e,Or))}async signInWithRedirect(e){return To(Zd(),this._delegate,"operation-not-supported-in-this-environment"),await bf(this._delegate),mD(this._delegate,e,Or)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Sf.Persistence=zt;function ky(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&sr.getOrCreate(o)),error:e,complete:n}}function BL(t,e){const n=LL(t,e);if(typeof self<"u"&&!n.includes(Pa)&&n.push(Pa),typeof window<"u")for(const r of[wg,Di])n.includes(r)||n.push(r);return n.includes(Bs)||n.push(Bs),n}/**
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
 */class Cg{constructor(){this.providerId="phone",this._delegate=new Li(Ub(an.auth()))}static credential(e,n){return Li.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Cg.PHONE_SIGN_IN_METHOD=Li.PHONE_SIGN_IN_METHOD;Cg.PROVIDER_ID=Li.PROVIDER_ID;/**
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
 */const HL=O;class VL{constructor(e,n,r=an.app()){var i;HL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ZP(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const WL="auth-compat";function $L(t){t.INTERNAL.registerComponent(new dn(WL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Sf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:es.EMAIL_SIGNIN,PASSWORD_RESET:es.PASSWORD_RESET,RECOVER_EMAIL:es.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:es.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:es.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:es.VERIFY_EMAIL}},EmailAuthProvider:ai,FacebookAuthProvider:Mn,GithubAuthProvider:Un,GoogleAuthProvider:jn,OAuthProvider:Cs,SAMLAuthProvider:Wc,PhoneAuthProvider:Cg,PhoneMultiFactorGenerator:Ob,RecaptchaVerifier:VL,TwitterAuthProvider:Fn,Auth:Sf,AuthCredential:io,Error:Rt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(IL,SL)}$L(an);var Ty={};const Cy="@firebase/database",Ny="1.0.8";/**
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
 */let zb="";function Bb(t){zb=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ka(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GL(e)}}catch{}return new YL},wi=Hb("localStorage"),kf=Hb("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Ja("@firebase/database"),Vb=function(){let t=1;return function(){return t++}}(),Wb=function(t){const e=xR(t),n=new yR;n.update(e);const r=n.digest();return eg.encodeByteArray(r)},sl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sl.apply(null,r):typeof r=="object"?e+=Fe(r):e+=r,e+=" "}return e};let Si=null,Ry=!0;const $b=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Rs.logLevel=ae.VERBOSE,Si=Rs.log.bind(Rs),e&&kf.set("logging_enabled",!0)):typeof t=="function"?Si=t:(Si=null,kf.remove("logging_enabled"))},Ke=function(...t){if(Ry===!0&&(Ry=!1,Si===null&&kf.get("logging_enabled")===!0&&$b(!0)),Si){const e=sl.apply(null,t);Si(e)}},ol=function(t){return function(...e){Ke(t,...e)}},Tf=function(...t){const e="FIREBASE INTERNAL ERROR: "+sl(...t);Rs.error(e)},Gn=function(...t){const e=`FIREBASE FATAL ERROR: ${sl(...t)}`;throw Rs.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+sl(...t);Rs.warn(e)},KL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xr="[MIN_NAME]",mr="[MAX_NAME]",$i=function(t,e){if(t===e)return 0;if(t===Xr||e===mr)return-1;if(e===Xr||t===mr)return 1;{const n=Ay(t),r=Ay(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},QL=function(t,e){return t===e?0:t<e?-1:1},Co=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Fe(e))},Ng=function(t){if(typeof t!="object"||t===null)return Fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Fe(e[r]),n+=":",n+=Ng(t[e[r]]);return n+="}",n},Gb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Yb=function(t){P(!Hu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},JL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ZL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const eM=new RegExp("^-?(0*)\\d{1,10}$"),tM=-2147483648,nM=2147483647,Ay=function(t){if(eM.test(t)){const e=Number(t);if(e>=tM&&e<=nM)return e}return null},oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},rM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ta=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class iM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="5",Kb="v",qb="s",Qb="r",Jb="f",Xb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zb="ls",eI="p",Cf="ac",tI="websocket",nI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iI(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===tI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oM(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(){this.counters_={}}incrementCounter(e,n=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh={},th={};function Ag(t){const e=t.toString();return eh[e]||(eh[e]=new aM),eh[e]}function lM(t,e){const n=t.toString();return th[n]||(th[n]=e()),th[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="start",uM="close",dM="pLPCommand",hM="pRTLPCB",sI="id",oI="pw",aI="ser",fM="cb",pM="seg",gM="ts",mM="d",vM="dframe",lI=1870,cI=30,_M=lI-cI,yM=25e3,wM=3e4;class Pr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ol(e),this.stats_=Ag(n),this.urlFn=l=>(this.appCheckToken&&(l[Cf]=this.appCheckToken),iI(n,nI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wM)),qL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Og((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oy)this.id=a,this.password=l;else if(o===uM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Oy]="t",r[aI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Kb]=Rg,this.transportSessionId&&(r[qb]=this.transportSessionId),this.lastSessionId&&(r[Zb]=this.lastSessionId),this.applicationId&&(r[eI]=this.applicationId),this.appCheckToken&&(r[Cf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xb.test(location.hostname)&&(r[Qb]=Jb);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pr.forceAllow_=!0}static forceDisallow(){Pr.forceDisallow_=!0}static isAvailable(){return Pr.forceAllow_?!0:!Pr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JL()&&!XL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xx(n),i=Gb(r,_M);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vM]="t",r[sI]=e,r[oI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Og{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vb(),window[dM+this.uniqueCallbackIdentifier]=e,window[hM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Og.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sI]=this.myID,e[oI]=this.myPW,e[aI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cI+r.length<=lI;){const o=this.pendingSegs.shift();r=r+"&"+pM+i+"="+o.seg+"&"+gM+i+"="+o.ts+"&"+mM+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yM)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=16384,xM=45e3;let Kc=null;typeof MozWebSocket<"u"?Kc=MozWebSocket:typeof WebSocket<"u"&&(Kc=WebSocket);class en{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ol(this.connId),this.stats_=Ag(n),this.connURL=en.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Kb]=Rg,typeof location<"u"&&location.hostname&&Xb.test(location.hostname)&&(o[Qb]=Jb),n&&(o[qb]=n),r&&(o[Zb]=r),i&&(o[Cf]=i),s&&(o[eI]=s),iI(e,tI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wi.set("previous_websocket_failure",!0);try{let r;hR(),this.mySock=new Kc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Kc!==null&&!en.forceDisallow_}static previouslyFailed(){return wi.isInMemoryStorage||wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ka(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gb(n,EM);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pr,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const i=this.transports_=[];for(const s of Vs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=6e4,IM=5e3,SM=10*1024,kM=100*1024,nh="t",Py="d",TM="s",Dy="r",CM="e",Ly="o",My="a",jy="n",Uy="p",NM="h";class RM{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ol("c:"+this.id+":"),this.transportManager_=new Vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ta(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nh in e){const n=e[nh];n===My?this.upgradeIfSecondaryHealthy_():n===Dy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ly&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Co("t",e),r=Co("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:My,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Co("t",e),r=Co("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Co(nh,e);if(Py in e){const r=e[Py];if(n===NM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===jy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TM?this.onConnectionShutdown_(r):n===Dy?this.onReset_(r):n===CM?Tf("Server Error: "+r):n===Ly?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rg!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ta(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ta(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends dI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ng()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=32,zy=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zr(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Pg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Da(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function _e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function mt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return mt(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function OM(t,e){const n=Da(t,0),r=Da(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=$i(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Dg(t,e){if(Zr(t)!==Zr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zr(t)>Zr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class PM{constructor(e,n){this.errorPrefix_=n,this.parts_=Da(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Au(this.parts_[r]);fI(this)}}function DM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Au(e),fI(t)}function LM(t){const e=t.parts_.pop();t.byteLength_-=Au(e),t.parts_.length>0&&(t.byteLength_-=1)}function fI(t){if(t.byteLength_>zy)throw new Error(t.errorPrefix_+"has a key path longer than "+zy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fy+") or object contains a cycle "+gi(t))}function gi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends dI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Lg}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=1e3,MM=60*5*1e3,By=30*1e3,jM=1.3,UM=3e4,FM="server_kill",Hy=3;class cr extends uI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cr.nextPersistentConnectionId_++,this.log_=ol("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=No,this.maxReconnectDelay_=MM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Fe(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new It,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;cr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gt(e,"w")){const r=Pi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_R(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=By)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Tf("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=No,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=No,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UM&&(this.reconnectDelay_=No),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new RM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ct(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(FM)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ct(d),l())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zc(this.interruptReasons_)&&(this.reconnectDelay_=No,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ng(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hy&&(this.reconnectDelay_=By,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zb.replace(/\./g,"-")]=1,ng()?e["framework.cordova"]=1:Ru()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qc.getInstance().currentlyOnline();return zc(this.interruptReasons_)&&e}}cr.nextPersistentConnectionId_=0;cr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(Xr,e),i=new Q(Xr,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;class pI extends Vu{static get __EMPTY_NODE(){return Bl}static set __EMPTY_NODE(e){Bl=e}compare(e,n){return $i(e.name,n.name)}isDefinedOn(e){throw no("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(mr,Bl)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Bl)}toString(){return".key"}}const Vn=new pI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??kt.EMPTY_NODE,this.right=s??kt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return kt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class zM{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kt{constructor(e,n=kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hl(this.root_,null,this.comparator_,!0,e)}}kt.EMPTY_NODE=new zM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t,e){return $i(t.name,e.name)}function Mg(t,e){return $i(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf;function HM(t){Nf=t}const gI=function(t){return typeof t=="number"?"number:"+Yb(t):"string:"+t},mI=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else P(t===Nf||t.isEmpty(),"priority of unexpected type.");P(t===Nf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mI(this.priorityNode_)}static set __childrenNodeConstructor(e){Vy=e}static get __childrenNodeConstructor(){return Vy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:K(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Zr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Yb(this.value_):e+=this.value_,this.lazyHash_=Wb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(n),s=Ve.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vI,_I;function VM(t){vI=t}function WM(t){_I=t}class $M extends Vu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?$i(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(mr,new Ve("[PRIORITY-POST]",_I))}makePost(e,n){const r=vI(e);return new Q(n,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new $M;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=Math.log(2);class YM{constructor(e){const n=s=>parseInt(Math.log(s)/GM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qc=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let d,f;if(h===0)return null;if(h===1)return d=t[l],f=n?n(d):d,new Ye(f,d.node,Ye.BLACK,null,null);{const g=parseInt(h/2,10)+l,_=i(l,g),w=i(g+1,c);return d=t[g],f=n?n(d):d,new Ye(f,d.node,Ye.BLACK,_,w)}},s=function(l){let c=null,h=null,d=t.length;const f=function(_,w){const E=d-_,v=d;d-=_;const p=i(E+1,v),m=t[E],x=n?n(m):m;g(new Ye(x,m.node,w,null,p))},g=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));w?f(E,Ye.BLACK):(f(E,Ye.BLACK),f(E,Ye.RED))}return h},o=new YM(t.length),a=s(o);return new kt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh;const ts={};class or{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ts&&fe,"ChildrenNode.ts has not been loaded"),rh=rh||new or({".priority":ts},{".priority":fe}),rh}get(e){const n=Pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kt?n:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Qc(r,e.getCompare()):a=ts;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new or(h,c)}addToIndexes(e,n){const r=Bc(this.indexes_,(i,s)=>{const o=Pi(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===ts)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Qc(a,o.getCompare())}else return ts;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new or(r,this.indexSet_)}removeFromIndexes(e,n){const r=Bc(this.indexes_,i=>{if(i===ts)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new or(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class H{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mI(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ro||(Ro=new H(new kt(Mg),null,or.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ro}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ro:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ro:this.priorityNode_;return new H(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{P(K(e)!==".priority"||Zr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,a)=>{n[o]=a.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gI(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wb(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===al?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KM extends H{constructor(){super(new kt(Mg),H.EMPTY_NODE,or.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const al=new KM;Object.defineProperties(Q,{MIN:{value:new Q(Xr,H.EMPTY_NODE)},MAX:{value:new Q(mr,al)}});pI.__EMPTY_NODE=H.EMPTY_NODE;Ve.__childrenNodeConstructor=H;HM(al);WM(al);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=!0;function xe(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,xe(e))}if(!(t instanceof Array)&&qM){const n=[];let r=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return H.EMPTY_NODE;const s=Qc(n,BM,o=>o.name,Mg);if(r){const o=Qc(n,fe.getCompare());return new H(s,xe(e),new or({".priority":o},{".priority":fe}))}else return new H(s,xe(e),or.Default)}else{let n=H.EMPTY_NODE;return Je(t,(r,i)=>{if(Gt(t,r)&&r.substring(0,1)!=="."){const s=xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(xe(e))}}VM(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Vu{constructor(e){super(),this.indexPath_=e,P(!q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?$i(e.name,n.name):s}makePost(e,n){const r=xe(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,al);return new Q(mr,e)}toString(){return Da(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM extends Vu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?$i(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=xe(e);return new Q(n,r)}toString(){return".value"}}const Ug=new QM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function La(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ma(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(La(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Ma(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(La(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ma(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.indexedFilter_=new Fg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ja.getStartPost_(e),this.endPost_=ja.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ja(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=H.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new Q(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ma(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(La(n,d));const w=a.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ws(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(La(c.name,c.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Wu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZM(t){return t.loadsAllData()?new Fg(t.getIndex()):t.hasLimit()?new XM(t):new ja(t)}function e2(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function t2(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Rf(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function n2(t,e,n){let r;return t.index_===Vn||n?r=Rf(t,e,n):r=Rf(t,e,mr),r.startAfterSet_=!0,r}function Af(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function r2(t,e,n){let r;return t.index_===Vn||n?r=Af(t,e,n):r=Af(t,e,Xr),r.endBeforeSet_=!0,r}function $u(t,e){const n=t.copy();return n.index_=e,n}function Wy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===Ug?n="$value":t.index_===Vn?n="$key":(P(t.index_ instanceof jg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $y(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends uI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ol("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Jc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Wy(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Pi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Jc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Wy(e._queryParams),r=e._path.toString(),i=new It;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ka(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){return{value:null,children:new Map}}function ao(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Xc());const i=t.children.get(r);e=ue(e),ao(i,e,n)}}function Of(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(fe,(r,i)=>{ao(t,new se(r),i)}),Of(t,e)}}else if(t.children.size>0){const n=K(e);return e=ue(e),t.children.has(n)&&Of(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Pf(t,e,n){t.value!==null?n(e,t.value):s2(t,(r,i)=>{const s=new se(e.toString()+"/"+r);Pf(i,s,n)})}function s2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=10*1e3,a2=30*1e3,l2=5*60*1e3;class c2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o2(e);const r=Gy+(a2-Gy)*Math.random();ta(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&Gt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ta(this.reportStats_.bind(this),Math.floor(Math.random()*2*l2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wn||(wn={}));function zg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wn.ACK_USER_WRITE,this.source=zg()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Zc(ne(),n,this.revert)}}else return P(K(this.path)===e,"operationForChild called for unrelated child."),new Zc(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.source=e,this.path=n,this.type=wn.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Ua(this.source,ne()):new Ua(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wn.OVERWRITE}operationForChild(e){return q(this.path)?new ji(this.source,ne(),this.snap.getImmediateChild(e)):new ji(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wn.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new ji(this.source,ne(),n.value):new $s(this.source,ne(),n)}else return P(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $s(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function d2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(JM(o.childName,o.snapshotNode))}),Ao(t,i,"child_removed",e,r,n),Ao(t,i,"child_added",e,r,n),Ao(t,i,"child_moved",s,r,n),Ao(t,i,"child_changed",e,r,n),Ao(t,i,"value",e,r,n),i}function Ao(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>f2(t,a,l)),o.forEach(a=>{const l=h2(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function h2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function f2(t,e,n){if(e.childName==null||n.childName==null)throw no("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){return{eventCache:t,serverCache:e}}function na(t,e,n,r){return Gu(new ei(e,n,r),t.serverCache)}function wI(t,e,n,r){return Gu(t.eventCache,new ei(e,n,r))}function eu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ui(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;const p2=()=>(ih||(ih=new kt(QL)),ih);class de{constructor(e,n=p2()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return Je(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:_e(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new de(null)}}set(e,n){if(q(e))return new de(n,this.children);{const r=K(e),s=(this.children.get(r)||new de(null)).set(ue(e),n),o=this.children.insert(r,s);return new de(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new de(null):new de(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const r=K(e),s=(this.children.get(r)||new de(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new de(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(_e(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),_e(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),_e(n,i),r):new de(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(_e(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.writeTree_=e}static empty(){return new In(new de(null))}}function ra(t,e,n){if(q(e))return new In(new de(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=mt(i,e);return s=s.updateChild(o,n),new In(t.writeTree_.set(i,s))}else{const i=new de(n),s=t.writeTree_.setTree(e,i);return new In(s)}}}function Df(t,e,n){let r=t;return Je(n,(i,s)=>{r=ra(r,_e(e,i),s)}),r}function Yy(t,e){if(q(e))return In.empty();{const n=t.writeTree_.setTree(e,new de(null));return new In(n)}}function Lf(t,e){return Gi(t,e)!=null}function Gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function Ky(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function Wr(t,e){if(q(e))return t;{const n=Gi(t,e);return n!=null?new In(new de(n)):new In(t.writeTree_.subtree(e))}}function Mf(t){return t.writeTree_.isEmpty()}function Gs(t,e){return EI(ne(),t.writeTree_,e)}function EI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=EI(_e(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(_e(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e){return SI(e,t)}function g2(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ra(t.visibleWrites,e,n)),t.lastWriteId=r}function m2(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Df(t.visibleWrites,e,n),t.lastWriteId=r}function v2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&y2(a,r.path)?i=!1:nn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return w2(t),!0;if(r.snap)t.visibleWrites=Yy(t.visibleWrites,r.path);else{const a=r.children;Je(a,l=>{t.visibleWrites=Yy(t.visibleWrites,_e(r.path,l))})}return!0}else return!1}function y2(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(_e(t.path,n),e))return!0;return!1}function w2(t){t.visibleWrites=xI(t.allWrites,E2,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function E2(t){return t.visible}function xI(t,e,n){let r=In.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)nn(n,o)?(a=mt(n,o),r=ra(r,a,s.snap)):nn(o,n)&&(a=mt(o,n),r=ra(r,ne(),s.snap.getChild(a)));else if(s.children){if(nn(n,o))a=mt(n,o),r=Df(r,a,s.children);else if(nn(o,n))if(a=mt(o,n),q(a))r=Df(r,ne(),s.children);else{const l=Pi(s.children,K(a));if(l){const c=l.getChild(ue(a));r=ra(r,ne(),c)}}}else throw no("WriteRecord should have .snap or .children")}}return r}function bI(t,e,n,r,i){if(!r&&!i){const s=Gi(t.visibleWrites,e);if(s!=null)return s;{const o=Wr(t.visibleWrites,e);if(Mf(o))return n;if(n==null&&!Lf(o,ne()))return null;{const a=n||H.EMPTY_NODE;return Gs(o,a)}}}else{const s=Wr(t.visibleWrites,e);if(!i&&Mf(s))return n;if(!i&&n==null&&!Lf(s,ne()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},a=xI(t.allWrites,o,e),l=n||H.EMPTY_NODE;return Gs(a,l)}}}function x2(t,e,n){let r=H.EMPTY_NODE;const i=Gi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Wr(t.visibleWrites,e);return n.forEachChild(fe,(o,a)=>{const l=Gs(Wr(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),Ky(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Wr(t.visibleWrites,e);return Ky(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function b2(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_e(e,n);if(Lf(t.visibleWrites,s))return null;{const o=Wr(t.visibleWrites,s);return Mf(o)?i.getChild(n):Gs(o,i.getChild(n))}}function I2(t,e,n,r){const i=_e(e,n),s=Gi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Wr(t.visibleWrites,i);return Gs(o,r.getNode().getImmediateChild(n))}else return null}function S2(t,e){return Gi(t.visibleWrites,e)}function k2(t,e,n,r,i,s,o){let a;const l=Wr(t.visibleWrites,e),c=Gi(l,ne());if(c!=null)a=c;else if(n!=null)a=Gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&h.length<i;)d(g,r)!==0&&h.push(g),g=f.getNext();return h}else return[]}function T2(){return{visibleWrites:In.empty(),allWrites:[],lastWriteId:-1}}function tu(t,e,n,r){return bI(t.writeTree,t.treePath,e,n,r)}function Vg(t,e){return x2(t.writeTree,t.treePath,e)}function qy(t,e,n,r){return b2(t.writeTree,t.treePath,e,n,r)}function nu(t,e){return S2(t.writeTree,_e(t.treePath,e))}function C2(t,e,n,r,i,s){return k2(t.writeTree,t.treePath,e,n,r,i,s)}function Wg(t,e,n){return I2(t.writeTree,t.treePath,e,n)}function II(t,e){return SI(_e(t.treePath,e),t.writeTree)}function SI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ma(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,La(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ma(r,e.snapshotNode,i.oldSnap));else throw no("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const kI=new R2;class $g{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ui(this.viewCache_),s=C2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t){return{filter:t}}function O2(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function P2(t,e,n,r,i){const s=new N2;let o,a;if(n.type===wn.OVERWRITE){const c=n;c.source.fromUser?o=jf(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=ru(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===wn.MERGE){const c=n;c.source.fromUser?o=L2(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Uf(t,e,c.path,c.children,r,i,a,s))}else if(n.type===wn.ACK_USER_WRITE){const c=n;c.revert?o=U2(t,e,c.path,r,i,s):o=M2(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wn.LISTEN_COMPLETE)o=j2(t,e,n.path,r,s);else throw no("Unknown operation type: "+n.type);const l=s.getChanges();return D2(e,o,l),{viewCache:o,changes:l}}function D2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=eu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(yI(eu(e)))}}function TI(t,e,n,r,i,s){const o=e.eventCache;if(nu(r,n)!=null)return e;{let a,l;if(q(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ui(e),h=c instanceof H?c:H.EMPTY_NODE,d=Vg(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=tu(r,Ui(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){P(Zr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=qy(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=ue(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=qy(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(h,f):d=o.getNode().getImmediateChild(c)}else d=Wg(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,i,s):a=o.getNode()}}return na(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function ru(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&Zr(n)>1)return e;const _=ue(n),E=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=h.updatePriority(l.getNode(),E):c=h.updateChild(l.getNode(),g,E,_,kI,null)}const d=wI(e,c,l.isFullyInitialized()||q(n),h.filtersNodes()),f=new $g(i,d,s);return TI(t,d,n,i,f,a)}function jf(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new $g(i,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=na(e,c,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=na(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ue(n),g=a.getNode().getImmediateChild(d);let _;if(q(f))_=r;else{const w=h.getCompleteChild(d);w!=null?Pg(f)===".priority"&&w.getChild(hI(f)).isEmpty()?_=w:_=w.updateChild(f,r):_=H.EMPTY_NODE}if(g.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,f,h,o);l=na(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qy(t,e){return t.eventCache.isCompleteForChild(e)}function L2(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=_e(n,l);Qy(e,K(h))&&(a=jf(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=_e(n,l);Qy(e,K(h))||(a=jf(t,a,h,c,i,s,o))}),a}function Jy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Uf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=r:c=new de(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=Jy(t,g,f);l=ru(t,l,new se(d),_,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),w=Jy(t,_,f);l=ru(t,l,new se(d),w,i,s,o,a)}}),l}function M2(t,e,n,r,i,s,o){if(nu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ru(t,e,n,l.getNode().getChild(n),i,s,a,o);if(q(n)){let c=new de(null);return l.getNode().forEachChild(Vn,(h,d)=>{c=c.set(new se(h),d)}),Uf(t,e,n,c,i,s,a,o)}else return e}else{let c=new de(null);return r.foreach((h,d)=>{const f=_e(n,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),Uf(t,e,n,c,i,s,a,o)}}function j2(t,e,n,r,i){const s=e.serverCache,o=wI(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return TI(t,o,n,r,kI,i)}function U2(t,e,n,r,i,s){let o;if(nu(r,n)!=null)return e;{const a=new $g(r,e,i),l=e.eventCache.getNode();let c;if(q(n)||K(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=tu(r,Ui(e));else{const d=e.serverCache.getNode();P(d instanceof H,"serverChildren would be complete if leaf node"),h=Vg(r,d)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=K(n);let d=Wg(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,ue(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,H.EMPTY_NODE,ue(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tu(r,Ui(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||nu(r,ne())!=null,na(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fg(r.getIndex()),s=ZM(r);this.processor_=A2(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(H.EMPTY_NODE,a.getNode(),null),h=new ei(l,o.isFullyInitialized(),i.filtersNodes()),d=new ei(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Gu(d,h),this.eventGenerator_=new u2(this.query_)}get query(){return this.query_}}function z2(t){return t.viewCache_.serverCache.getNode()}function B2(t){return eu(t.viewCache_)}function H2(t,e){const n=Ui(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Xy(t){return t.eventRegistrations_.length===0}function V2(t,e){t.eventRegistrations_.push(e)}function Zy(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function e0(t,e,n,r){e.type===wn.MERGE&&e.source.queryId!==null&&(P(Ui(t.viewCache_),"We should always have a full cache before handling merges"),P(eu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=P2(t.processor_,i,e,n,r);return O2(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,CI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function W2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(yI(n.getNode())),CI(t,r,n.getNode(),e)}function CI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return d2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;class NI{constructor(){this.views=new Map}}function $2(t){P(!iu,"__referenceConstructor has already been defined"),iu=t}function G2(){return P(iu,"Reference.ts has not been loaded"),iu}function Y2(t){return t.views.size===0}function Gg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),e0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(e0(o,e,n,r));return s}}function RI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=tu(n,i?r:null),l=!1;a?l=!0:r instanceof H?(a=Vg(n,r),l=!1):(a=H.EMPTY_NODE,l=!1);const c=Gu(new ei(a,l,!1),new ei(r,i,!1));return new F2(e,c)}return o}function K2(t,e,n,r,i,s){const o=RI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),V2(o,n),W2(o,n)}function q2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ti(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Zy(c,n,r)),Xy(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Zy(l,n,r)),Xy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ti(t)&&s.push(new(G2())(e._repo,e._path)),{removed:s,events:o}}function AI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $r(t,e){let n=null;for(const r of t.views.values())n=n||H2(r,e);return n}function OI(t,e){if(e._queryParams.loadsAllData())return Ku(t);{const r=e._queryIdentifier;return t.views.get(r)}}function PI(t,e){return OI(t,e)!=null}function ti(t){return Ku(t)!=null}function Ku(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;function Q2(t){P(!su,"__referenceConstructor has already been defined"),su=t}function J2(){return P(su,"Reference.ts has not been loaded"),su}let X2=1;class t0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=T2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yg(t,e,n,r,i){return g2(t.pendingWriteTree_,e,n,r,i),i?lo(t,new ji(zg(),e,n)):[]}function Z2(t,e,n,r){m2(t.pendingWriteTree_,e,n,r);const i=de.fromObject(n);return lo(t,new $s(zg(),e,i))}function Dr(t,e,n=!1){const r=v2(t.pendingWriteTree_,e);if(_2(t.pendingWriteTree_,e)){let s=new de(null);return r.snap!=null?s=s.set(ne(),!0):Je(r.children,o=>{s=s.set(new se(o),!0)}),lo(t,new Zc(r.path,s,n))}else return[]}function ll(t,e,n){return lo(t,new ji(Bg(),e,n))}function ej(t,e,n){const r=de.fromObject(n);return lo(t,new $s(Bg(),e,r))}function tj(t,e){return lo(t,new Ua(Bg(),e))}function nj(t,e,n){const r=Kg(t,n);if(r){const i=qg(r),s=i.path,o=i.queryId,a=mt(s,e),l=new Ua(Hg(o),a);return Qg(t,s,l)}else return[]}function ou(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||PI(o,e))){const l=q2(o,e,n,r);Y2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>ti(g));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=sj(f);for(let _=0;_<g.length;++_){const w=g[_],E=w.query,v=jI(t,w);t.listenProvider_.startListening(ia(E),Fa(t,E),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(ia(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(Qu(f));t.listenProvider_.stopListening(ia(f),g)}))}oj(t,c)}return a}function DI(t,e,n,r){const i=Kg(t,r);if(i!=null){const s=qg(i),o=s.path,a=s.queryId,l=mt(o,e),c=new ji(Hg(a),l,n);return Qg(t,o,c)}else return[]}function rj(t,e,n,r){const i=Kg(t,r);if(i){const s=qg(i),o=s.path,a=s.queryId,l=mt(o,e),c=de.fromObject(n),h=new $s(Hg(a),l,c);return Qg(t,o,h)}else return[]}function Ff(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=mt(f,i);s=s||$r(g,_),o=o||ti(g)});let a=t.syncPointTree_.get(i);a?(o=o||ti(a),s=s||$r(a,ne())):(a=new NI,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const w=$r(_,ne());w&&(s=s.updateImmediateChild(g,w))}));const c=PI(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Qu(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=aj();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=Yu(t.pendingWriteTree_,i);let d=K2(a,e,n,h,s,l);if(!c&&!o&&!r){const f=OI(a,e);d=d.concat(lj(t,e,f))}return d}function qu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=mt(o,e),c=$r(a,l);if(c)return c});return bI(i,e,s,n,!0)}function ij(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const d=mt(c,n);r=r||$r(h,d)});let i=t.syncPointTree_.get(n);i?r=r||$r(i,ne()):(i=new NI,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new ei(r,!0,!1):null,a=Yu(t.pendingWriteTree_,e._path),l=RI(i,e,a,s?o.getNode():H.EMPTY_NODE,s);return B2(l)}function lo(t,e){return LI(e,t.syncPointTree_,null,Yu(t.pendingWriteTree_,ne()))}function LI(t,e,n,r){if(q(t.path))return MI(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=$r(i,ne()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=II(r,o);s=s.concat(LI(a,l,c,h))}return i&&(s=s.concat(Gg(i,t,r,n))),s}}function MI(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=$r(i,ne()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=II(r,o),h=t.operationForChild(o);h&&(s=s.concat(MI(h,a,l,c)))}),i&&(s=s.concat(Gg(i,t,r,n))),s}function jI(t,e){const n=e.query,r=Fa(t,n);return{hashFn:()=>(z2(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?nj(t,n._path,r):tj(t,n._path);{const s=ZL(i,n);return ou(t,n,null,s)}}}}function Fa(t,e){const n=Qu(e);return t.queryToTagMap.get(n)}function Qu(t){return t._path.toString()+"$"+t._queryIdentifier}function Kg(t,e){return t.tagToQueryMap.get(e)}function qg(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Qg(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Yu(t.pendingWriteTree_,e);return Gg(r,n,i,null)}function sj(t){return t.fold((e,n,r)=>{if(n&&ti(n))return[Ku(n)];{let i=[];return n&&(i=AI(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function ia(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(J2())(t._repo,t._path):t}function oj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Qu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function aj(){return X2++}function lj(t,e,n){const r=e._path,i=Fa(t,e),s=jI(t,n),o=t.listenProvider_.startListening(ia(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!ti(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!q(c)&&h&&ti(h))return[Ku(h).query];{let f=[];return h&&(f=f.concat(AI(h).map(g=>g.query))),Je(d,(g,_)=>{f=f.concat(_)}),f}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(ia(h),Fa(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jg(n)}node(){return this.node_}}class Xg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Xg(this.syncTree_,n)}node(){return qu(this.syncTree_,this.path_)}}const cj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},n0=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dj(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},dj=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},UI=function(t,e,n,r){return em(e,new Xg(n,t),r)},Zg=function(t,e,n){return em(t,new Jg(e),n)};function em(t,e,n){const r=t.getPriority().val(),i=n0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=n0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ve(a,xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ve(i))),o.forEachChild(fe,(a,l)=>{const c=em(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ju(t,e){let n=e instanceof se?e:new se(e),r=t,i=K(n);for(;i!==null;){const s=Pi(r.node.children,i)||{children:{},childCount:0};r=new tm(i,r,s),n=ue(n),i=K(n)}return r}function Yi(t){return t.node.value}function nm(t,e){t.node.value=e,zf(t)}function FI(t){return t.node.childCount>0}function hj(t){return Yi(t)===void 0&&!FI(t)}function Xu(t,e){Je(t.node.children,(n,r)=>{e(new tm(n,t,r))})}function zI(t,e,n,r){n&&e(t),Xu(t,i=>{zI(i,e,!0)})}function fj(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function cl(t){return new se(t.parent===null?t.name:cl(t.parent)+"/"+t.name)}function zf(t){t.parent!==null&&pj(t.parent,t.name,t)}function pj(t,e,n){const r=hj(n),i=Gt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gj=/[\[\].#$\/\u0000-\u001F\u007F]/,mj=/[\[\].#$\u0000-\u001F\u007F]/,sh=10*1024*1024,Zu=function(t){return typeof t=="string"&&t.length!==0&&!gj.test(t)},BI=function(t){return typeof t=="string"&&t.length!==0&&!mj.test(t)},vj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BI(t)},za=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Hu(t)||t&&typeof t=="object"&&Gt(t,".sv")},Yn=function(t,e,n,r){r&&e===void 0||ul(At(t,"value"),e,n)},ul=function(t,e,n){const r=n instanceof se?new PM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gi(r));if(typeof e=="function")throw new Error(t+"contains a function "+gi(r)+" with contents = "+e.toString());if(Hu(e))throw new Error(t+"contains "+e.toString()+" "+gi(r));if(typeof e=="string"&&e.length>sh/3&&Au(e)>sh)throw new Error(t+"contains a string greater than "+sh+" utf8 bytes "+gi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Zu(o)))throw new Error(t+" contains an invalid key ("+o+") "+gi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DM(r,o),ul(t,a,r),LM(r)}),i&&s)throw new Error(t+' contains ".value" child '+gi(r)+" in addition to actual children.")}},_j=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Da(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Zu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OM);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&nn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},HI=function(t,e,n,r){const i=At(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Je(e,(o,a)=>{const l=new se(o);if(ul(i,a,_e(n,l)),Pg(l)===".priority"&&!za(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),_j(i,s)},rm=function(t,e,n){if(Hu(e))throw new Error(At(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!za(e))throw new Error(At(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},dl=function(t,e,n,r){if(n!==void 0&&!Zu(n))throw new Error(At(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Ba=function(t,e,n,r){if(!BI(n))throw new Error(At(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yj=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ba(t,e,n)},rn=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},VI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vj(n))throw new Error(At(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ed(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Dg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function WI(t,e,n){ed(t,n),$I(t,r=>Dg(r,e))}function Yt(t,e,n){ed(t,n),$I(t,r=>nn(r,e)||nn(e,r))}function $I(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Ej(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ej(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Si&&Ke("event: "+n.toString()),oo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="repo_interrupt",xj=25;class bj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xc(),this.transactionQueueTree_=new tm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ij(t,e,n){if(t.stats_=Ag(t.repoInfo_),t.forceRestClient_||rM())t.server_=new Jc(t.repoInfo_,(r,i,s,o)=>{r0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>i0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cr(t.repoInfo_,e,(r,i,s,o)=>{r0(t,r,i,s,o)},r=>{i0(t,r)},r=>{Sj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=lM(t.repoInfo_,()=>new c2(t.stats_,t.server_)),t.infoData_=new i2,t.infoSyncTree_=new t0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ll(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),im(t,"connected",!1),t.serverSyncTree_=new t0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Yt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function YI(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hl(t){return cj({timestamp:YI(t)})}function r0(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Bc(n,c=>xe(c));o=rj(t.serverSyncTree_,s,l,i)}else{const l=xe(n);o=DI(t.serverSyncTree_,s,l,i)}else if(r){const l=Bc(n,c=>xe(c));o=ej(t.serverSyncTree_,s,l)}else{const l=xe(n);o=ll(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ys(t,s)),Yt(t.eventQueue_,a,o)}function i0(t,e){im(t,"connected",e),e===!1&&Cj(t)}function Sj(t,e){Je(e,(n,r)=>{im(t,n,r)})}function im(t,e,n){const r=new se("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(r,i);const s=ll(t.infoSyncTree_,r,i);Yt(t.eventQueue_,r,s)}function td(t){return t.nextWriteId_++}function kj(t,e,n){const r=ij(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=xe(i).withIndex(e._queryParams.getIndex());Ff(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ll(t.serverSyncTree_,e._path,s);else{const a=Fa(t.serverSyncTree_,e);o=DI(t.serverSyncTree_,e._path,s,a)}return Yt(t.eventQueue_,e._path,o),ou(t.serverSyncTree_,e,n,null,!0),s},i=>(co(t,"get for query "+Fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function sm(t,e,n,r,i){co(t,"set",{path:e.toString(),value:n,priority:r});const s=hl(t),o=xe(n,r),a=qu(t.serverSyncTree_,e),l=Zg(o,a,s),c=td(t),h=Yg(t.serverSyncTree_,e,l,c,!0);ed(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const _=f==="ok";_||ct("set at "+e+" failed: "+f);const w=Dr(t.serverSyncTree_,c,!_);Yt(t.eventQueue_,e,w),ni(t,i,f,g)});const d=am(t,e);Ys(t,d),Yt(t.eventQueue_,d,[])}function Tj(t,e,n,r){co(t,"update",{path:e.toString(),value:n});let i=!0;const s=hl(t),o={};if(Je(n,(a,l)=>{i=!1,o[a]=UI(_e(e,a),xe(l),t.serverSyncTree_,s)}),i)Ke("update() called with empty data.  Don't do anything."),ni(t,r,"ok",void 0);else{const a=td(t),l=Z2(t.serverSyncTree_,e,o,a);ed(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const d=c==="ok";d||ct("update at "+e+" failed: "+c);const f=Dr(t.serverSyncTree_,a,!d),g=f.length>0?Ys(t,e):e;Yt(t.eventQueue_,g,f),ni(t,r,c,h)}),Je(n,c=>{const h=am(t,_e(e,c));Ys(t,h)}),Yt(t.eventQueue_,e,[])}}function Cj(t){co(t,"onDisconnectEvents");const e=hl(t),n=Xc();Pf(t.onDisconnect_,ne(),(i,s)=>{const o=UI(i,s,t.serverSyncTree_,e);ao(n,i,o)});let r=[];Pf(n,ne(),(i,s)=>{r=r.concat(ll(t.serverSyncTree_,i,s));const o=am(t,i);Ys(t,o)}),t.onDisconnect_=Xc(),Yt(t.eventQueue_,ne(),r)}function Nj(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Of(t.onDisconnect_,e),ni(t,n,r,i)})}function s0(t,e,n,r){const i=xe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&ao(t.onDisconnect_,e,i),ni(t,r,s,o)})}function Rj(t,e,n,r,i){const s=xe(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&ao(t.onDisconnect_,e,s),ni(t,i,o,a)})}function Aj(t,e,n,r){if(zc(n)){Ke("onDisconnect().update() called with empty data.  Don't do anything."),ni(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Je(n,(o,a)=>{const l=xe(a);ao(t.onDisconnect_,_e(e,o),l)}),ni(t,r,i,s)})}function Oj(t,e,n){let r;K(e._path)===".info"?r=Ff(t.infoSyncTree_,e,n):r=Ff(t.serverSyncTree_,e,n),WI(t.eventQueue_,e._path,r)}function Bf(t,e,n){let r;K(e._path)===".info"?r=ou(t.infoSyncTree_,e,n):r=ou(t.serverSyncTree_,e,n),WI(t.eventQueue_,e._path,r)}function KI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GI)}function Pj(t){t.persistentConnection_&&t.persistentConnection_.resume(GI)}function co(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function ni(t,e,n,r){e&&oo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Dj(t,e,n,r,i,s){co(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Vb(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=om(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{ul("transaction failed: Data returned ",l,o.path),o.status=0;const c=Ju(t.transactionQueueTree_,e),h=Yi(c)||[];h.push(o),nm(c,h);let d;typeof l=="object"&&l!==null&&Gt(l,".priority")?(d=Pi(l,".priority"),P(za(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(qu(t.serverSyncTree_,e)||H.EMPTY_NODE).getPriority().val();const f=hl(t),g=xe(l,d),_=Zg(g,a,f);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=td(t);const w=Yg(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);Yt(t.eventQueue_,e,w),nd(t,t.transactionQueueTree_)}}function om(t,e,n){return qu(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function nd(t,e=t.transactionQueueTree_){if(e||rd(t,e),Yi(e)){const n=QI(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Lj(t,cl(e),n)}else FI(e)&&Xu(e,n=>{nd(t,n)})}function Lj(t,e,n){const r=n.map(c=>c.currentWriteId),i=om(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];P(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=mt(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{co(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Dr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rd(t,Ju(t.transactionQueueTree_,e)),nd(t,t.transactionQueueTree_),Yt(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)oo(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ys(t,e)}},o)}function Ys(t,e){const n=qI(t,e),r=cl(n),i=QI(t,n);return Mj(t,i,r),r}function Mj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=mt(n,l.path);let h=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=xj)h=!0,d="maxretry",i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=om(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){ul("transaction failed: Data returned ",g,l.path);let _=xe(g);typeof g=="object"&&g!=null&&Gt(g,".priority")||(_=_.updatePriority(f.getPriority()));const E=l.currentWriteId,v=hl(t),p=Zg(_,f,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=td(t),o.splice(o.indexOf(E),1),i=i.concat(Yg(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Dr(t.serverSyncTree_,E,!0))}else h=!0,d="nodata",i=i.concat(Dr(t.serverSyncTree_,l.currentWriteId,!0))}Yt(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}rd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)oo(r[a]);nd(t,t.transactionQueueTree_)}function qI(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&Yi(r)===void 0;)r=Ju(r,n),e=ue(e),n=K(e);return r}function QI(t,e){const n=[];return JI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function JI(t,e,n){const r=Yi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xu(e,i=>{JI(t,i,n)})}function rd(t,e){const n=Yi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nm(e,n.length>0?n:void 0)}Xu(e,r=>{rd(t,r)})}function am(t,e){const n=cl(qI(t,e)),r=Ju(t.transactionQueueTree_,e);return fj(r,i=>{oh(t,i)}),oh(t,r),zI(r,i=>{oh(t,i)}),n}function oh(t,e){const n=Yi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nm(e,void 0):n.length=s+1,Yt(t.eventQueue_,cl(e),i);for(let o=0;o<r.length;o++)oo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Uj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hf=function(t,e){const n=Fj(t),r=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},Fj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=jj(t.substring(h,d)));const f=Uj(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zj=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=o0.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=o0.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class ZI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let Bj=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new It;return Nj(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rn("OnDisconnect.remove",this._path);const e=new It;return s0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rn("OnDisconnect.set",this._path),Yn("OnDisconnect.set",e,this._path,!1);const n=new It;return s0(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){rn("OnDisconnect.setWithPriority",this._path),Yn("OnDisconnect.setWithPriority",e,this._path,!1),rm("OnDisconnect.setWithPriority",n);const r=new It;return Rj(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){rn("OnDisconnect.update",this._path),HI("OnDisconnect.update",e,this._path);const n=new It;return Aj(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class Pt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:Pg(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=$y(this._queryParams),n=Ng(e);return n==="{}"?"default":n}get _queryObject(){return $y(this._queryParams)}isEqual(e){if(e=W(e),!(e instanceof Pt))return!1;const n=this._repo===e._repo,r=Dg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AM(this._path)}}function id(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function li(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Vn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Xr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===fe){if(e!=null&&!za(e)||n!=null&&!za(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(P(t.getIndex()instanceof jg||t.getIndex()===Ug,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function sd(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class fn extends Pt{constructor(e,n){super(e,n,new Wu,!1)}get parent(){const e=hI(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let od=class Vf{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Fi(this.ref,e);return new Vf(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vf(i,Fi(this.ref,r),fe)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function eS(t,e){return t=W(t),t._checkNotDeleted("ref"),e!==void 0?Fi(t._root,e):t._root}function a0(t,e){t=W(t),t._checkNotDeleted("refFromURL");const n=Hf(e,t._repo.repoInfo_.nodeAdmin);VI("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Gn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),eS(t,n.path.toString())}function Fi(t,e){return t=W(t),K(t._path)===null?yj("child","path",e):Ba("child","path",e),new fn(t._repo,_e(t._path,e))}function Hj(t,e){t=W(t),rn("push",t._path),Yn("push",e,t._path,!0);const n=YI(t._repo),r=zj(n),i=Fi(t,r),s=Fi(t,r);let o;return e!=null?o=cm(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Vj(t){return rn("remove",t._path),cm(t,null)}function cm(t,e){t=W(t),rn("set",t._path),Yn("set",e,t._path,!1);const n=new It;return sm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Wj(t,e){t=W(t),rn("setPriority",t._path),rm("setPriority",e);const n=new It;return sm(t._repo,_e(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function $j(t,e,n){if(rn("setWithPriority",t._path),Yn("setWithPriority",e,t._path,!1),rm("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new It;return sm(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function Gj(t,e){HI("update",e,t._path);const n=new It;return Tj(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Yj(t){t=W(t);const e=new lm(()=>{}),n=new fl(e);return kj(t._repo,t,n).then(r=>new od(r,new fn(t._repo,t._path),t._queryParams.getIndex()))}class fl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new XI("value",this,new od(e.snapshotNode,new fn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZI(this,e,n):null}matches(e){return e instanceof fl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ad{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZI(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=Fi(new fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new XI(e.type,this,new od(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ad?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function pl(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,d)=>{Bf(t._repo,t,a),l(h,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new lm(n,s||void 0),a=e==="value"?new fl(o):new ad(e,o);return Oj(t._repo,t,a),()=>Bf(t._repo,t,a)}function Wf(t,e,n,r){return pl(t,"value",e,n,r)}function l0(t,e,n,r){return pl(t,"child_added",e,n,r)}function c0(t,e,n,r){return pl(t,"child_changed",e,n,r)}function u0(t,e,n,r){return pl(t,"child_moved",e,n,r)}function d0(t,e,n,r){return pl(t,"child_removed",e,n,r)}function h0(t,e,n){let r=null;const i=n?new lm(n):null;e==="value"?r=new fl(i):e&&(r=new ad(e,i)),Bf(t._repo,t,r)}class Cn{}class tS extends Cn{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Yn("endAt",this._value,e._path,!0);const n=Af(e._queryParams,this._value,this._key);if(sd(n),li(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Pt(e._repo,e._path,n,e._orderByCalled)}}function Kj(t,e){return dl("endAt","key",e),new tS(t,e)}class qj extends Cn{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Yn("endBefore",this._value,e._path,!1);const n=r2(e._queryParams,this._value,this._key);if(sd(n),li(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Pt(e._repo,e._path,n,e._orderByCalled)}}function Qj(t,e){return dl("endBefore","key",e),new qj(t,e)}class nS extends Cn{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Yn("startAt",this._value,e._path,!0);const n=Rf(e._queryParams,this._value,this._key);if(sd(n),li(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Pt(e._repo,e._path,n,e._orderByCalled)}}function Jj(t=null,e){return dl("startAt","key",e),new nS(t,e)}class Xj extends Cn{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Yn("startAfter",this._value,e._path,!1);const n=n2(e._queryParams,this._value,this._key);if(sd(n),li(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Pt(e._repo,e._path,n,e._orderByCalled)}}function Zj(t,e){return dl("startAfter","key",e),new Xj(t,e)}class eU extends Cn{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Pt(e._repo,e._path,e2(e._queryParams,this._limit),e._orderByCalled)}}function tU(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new eU(t)}class nU extends Cn{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Pt(e._repo,e._path,t2(e._queryParams,this._limit),e._orderByCalled)}}function rU(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new nU(t)}class iU extends Cn{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){id(e,"orderByChild");const n=new se(this._path);if(q(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new jg(n),i=$u(e._queryParams,r);return li(i),new Pt(e._repo,e._path,i,!0)}}function sU(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ba("orderByChild","path",t),new iU(t)}class oU extends Cn{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){id(e,"orderByKey");const n=$u(e._queryParams,Vn);return li(n),new Pt(e._repo,e._path,n,!0)}}function aU(){return new oU}class lU extends Cn{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){id(e,"orderByPriority");const n=$u(e._queryParams,fe);return li(n),new Pt(e._repo,e._path,n,!0)}}function cU(){return new lU}class uU extends Cn{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){id(e,"orderByValue");const n=$u(e._queryParams,Ug);return li(n),new Pt(e._repo,e._path,n,!0)}}function dU(){return new uU}class hU extends Cn{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Yn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new tS(this._value,this._key)._apply(new nS(this._value,this._key)._apply(e))}}function fU(t,e){return dl("equalTo","key",e),new hU(t,e)}function mn(t,...e){let n=W(t);for(const r of e)n=r._apply(n);return n}$2(fn);Q2(fn);/**
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
 */const pU="FIREBASE_DATABASE_EMULATOR_HOST",$f={};let gU=!1;function mU(t,e,n,r){t.repoInfo_=new rI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function rS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hf(s,i),a=o.repoInfo,l,c;typeof process<"u"&&Ty&&(c=Ty[pU]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Hf(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new As(As.OWNER):new sM(t.name,t.options,e);VI("Invalid Firebase Database URL",o),q(o.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=_U(a,t,h,new iM(t.name,n));return new yU(d,t)}function vU(t,e){const n=$f[e];(!n||n[t.key]!==t)&&Gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KI(t),delete n[t.key]}function _U(t,e,n,r){let i=$f[e.name];i||(i={},$f[e.name]=i);let s=i[t.toURLString()];return s&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new bj(t,gU,n,r),i[t.toURLString()]=s,s}let yU=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ij(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gn("Cannot call "+e+" on a deleted database.")}};function iS(){Vs.IS_TRANSPORT_INITIALIZED&&ct("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function wU(){iS(),Pr.forceDisallow()}function EU(){iS(),en.forceDisallow(),Pr.forceAllow()}function xU(t,e,n,r={}){t=W(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new As(As.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:cR(r.mockUserToken,t.app.options.projectId);s=new As(o)}mU(i,e,n,s)}function bU(t){t=W(t),t._checkNotDeleted("goOffline"),KI(t._repo)}function IU(t){t=W(t),t._checkNotDeleted("goOnline"),Pj(t._repo)}function SU(t,e){$b(t,e)}/**
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
 */function kU(t){Bb(oi),Jr(new dn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),bn(Cy,Ny,t),bn(Cy,Ny,"esm2017")}/**
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
 */const TU={".sv":"timestamp"};function CU(){return TU}function NU(t){return{".sv":{increment:t}}}/**
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
 */let RU=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function AU(t,e,n){var r;if(t=W(t),rn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new It,o=(l,c,h)=>{let d=null;l?s.reject(l):(d=new od(h,new fn(t._repo,t._path),fe),s.resolve(new RU(c,d)))},a=Wf(t,()=>{});return Dj(t._repo,t._path,e,o,a,i),s.promise}cr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kU();const OU="@firebase/database-compat",PU="1.0.8";/**
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
 */const DU=new Ja("@firebase/database-compat"),sS=function(t){const e="FIREBASE WARNING: "+t;DU.warn(e)};/**
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
 */const LU=function(t,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(At(t,e)+"must be a boolean.")},MU=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(At(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(e){this._delegate=e}cancel(e){V("OnDisconnect.cancel",0,1,arguments.length),Ge("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){V("OnDisconnect.remove",0,1,arguments.length),Ge("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){V("OnDisconnect.set",1,2,arguments.length),Ge("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){V("OnDisconnect.setWithPriority",2,3,arguments.length),Ge("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(V("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,sS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ge("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return V("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this._database=e,this._delegate=n}val(){return V("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return V("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return V("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return V("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return V("DataSnapshot.child",0,1,arguments.length),e=String(e),Ba("DataSnapshot.child","path",e),new Gr(this._database,this._delegate.child(e))}hasChild(e){return V("DataSnapshot.hasChild",1,1,arguments.length),Ba("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return V("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return V("DataSnapshot.forEach",1,1,arguments.length),Ge("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Gr(this._database,n)))}hasChildren(){return V("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return V("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return V("DataSnapshot.ref",0,0,arguments.length),new Bt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ze{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;V("Query.on",2,4,arguments.length),Ge("Query.on","callback",n,!1);const o=Ze.getCancelAndContextArgs_("Query.on",r,i),a=(c,h)=>{n.call(o.context,new Gr(this.database,c),h)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Wf(this._delegate,a,l),n;case"child_added":return l0(this._delegate,a,l),n;case"child_removed":return d0(this._delegate,a,l),n;case"child_changed":return c0(this._delegate,a,l),n;case"child_moved":return u0(this._delegate,a,l),n;default:throw new Error(At("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(V("Query.off",0,3,arguments.length),MU("Query.off",e),Ge("Query.off","callback",n,!0),X_("Query.off","context",r),n){const i=()=>{};i.userCallback=n,i.context=r,h0(this._delegate,e,i)}else h0(this._delegate,e)}get(){return Yj(this._delegate).then(e=>new Gr(this.database,e))}once(e,n,r,i){V("Query.once",1,4,arguments.length),Ge("Query.once","callback",n,!0);const s=Ze.getCancelAndContextArgs_("Query.once",r,i),o=new It,a=(c,h)=>{const d=new Gr(this.database,c);n&&n.call(s.context,d,h),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Wf(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":l0(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":d0(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":c0(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":u0(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(At("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return V("Query.limitToFirst",1,1,arguments.length),new Ze(this.database,mn(this._delegate,tU(e)))}limitToLast(e){return V("Query.limitToLast",1,1,arguments.length),new Ze(this.database,mn(this._delegate,rU(e)))}orderByChild(e){return V("Query.orderByChild",1,1,arguments.length),new Ze(this.database,mn(this._delegate,sU(e)))}orderByKey(){return V("Query.orderByKey",0,0,arguments.length),new Ze(this.database,mn(this._delegate,aU()))}orderByPriority(){return V("Query.orderByPriority",0,0,arguments.length),new Ze(this.database,mn(this._delegate,cU()))}orderByValue(){return V("Query.orderByValue",0,0,arguments.length),new Ze(this.database,mn(this._delegate,dU()))}startAt(e=null,n){return V("Query.startAt",0,2,arguments.length),new Ze(this.database,mn(this._delegate,Jj(e,n)))}startAfter(e=null,n){return V("Query.startAfter",0,2,arguments.length),new Ze(this.database,mn(this._delegate,Zj(e,n)))}endAt(e=null,n){return V("Query.endAt",0,2,arguments.length),new Ze(this.database,mn(this._delegate,Kj(e,n)))}endBefore(e=null,n){return V("Query.endBefore",0,2,arguments.length),new Ze(this.database,mn(this._delegate,Qj(e,n)))}equalTo(e,n){return V("Query.equalTo",1,2,arguments.length),new Ze(this.database,mn(this._delegate,fU(e,n)))}toString(){return V("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return V("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(V("Query.isEqual",1,1,arguments.length),!(e instanceof Ze)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ge(e,"cancel",i.cancel,!0),i.context=r,X_(e,"context",i.context);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(At(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Bt(this.database,new fn(this._delegate._repo,this._delegate._path))}}class Bt extends Ze{constructor(e,n){super(e,new Pt(n._repo,n._path,new Wu,!1)),this.database=e,this._delegate=n}getKey(){return V("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return V("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Bt(this.database,Fi(this._delegate,e))}getParent(){V("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Bt(this.database,e):null}getRoot(){return V("Reference.root",0,0,arguments.length),new Bt(this.database,this._delegate.root)}set(e,n){V("Reference.set",1,2,arguments.length),Ge("Reference.set","onComplete",n,!0);const r=cm(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(V("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,sS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}rn("Reference.update",this._delegate._path),Ge("Reference.update","onComplete",n,!0);const r=Gj(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){V("Reference.setWithPriority",2,3,arguments.length),Ge("Reference.setWithPriority","onComplete",r,!0);const i=$j(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){V("Reference.remove",0,1,arguments.length),Ge("Reference.remove","onComplete",e,!0);const n=Vj(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){V("Reference.transaction",1,3,arguments.length),Ge("Reference.transaction","transactionUpdate",e,!1),Ge("Reference.transaction","onComplete",n,!0),LU("Reference.transaction","applyLocally",r);const i=AU(this._delegate,e,{applyLocally:r}).then(s=>new UU(s.committed,new Gr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){V("Reference.setPriority",1,2,arguments.length),Ge("Reference.setPriority","onComplete",n,!0);const r=Wj(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){V("Reference.push",0,2,arguments.length),Ge("Reference.push","onComplete",n,!0);const r=Hj(this._delegate,e),i=r.then(o=>new Bt(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Bt(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return rn("Reference.onDisconnect",this._delegate._path),new jU(new Bj(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:wU,forceLongPolling:EU}}useEmulator(e,n,r={}){xU(this._delegate,e,n,r)}ref(e){if(V("database.ref",0,1,arguments.length),e instanceof Bt){const n=a0(this._delegate,e.toString());return new Bt(this,n)}else{const n=eS(this._delegate,e);return new Bt(this,n)}}refFromURL(e){V("database.refFromURL",1,1,arguments.length);const r=a0(this._delegate,e);return new Bt(this,r)}goOffline(){return V("database.goOffline",0,0,arguments.length),bU(this._delegate)}goOnline(){return V("database.goOnline",0,0,arguments.length),IU(this._delegate)}}Ha.ServerValue={TIMESTAMP:CU(),increment:t=>NU(t)};function FU({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){Bb(n);const a=new rg("database-standalone"),l=new pf("auth-internal",a);l.setComponent(new dn("auth-internal",()=>r,"PRIVATE"));let c;return i&&(c=new pf("app-check-internal",a),c.setComponent(new dn("app-check-internal",()=>i,"PRIVATE"))),{instance:new Ha(rS(t,l,c,e,o),t),namespace:s}}var zU=Object.freeze({__proto__:null,initStandalone:FU});/**
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
 */const BU=Ha.ServerValue;function HU(t){t.INTERNAL.registerComponent(new dn("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new Ha(i,r)},"PUBLIC").setServiceProps({Reference:Bt,Query:Ze,Database:Ha,DataSnapshot:Gr,enableLogging:SU,INTERNAL:zU,ServerValue:BU}).setMultipleInstances(!0)),t.registerVersion(OU,PU)}HU(an);const VU={apiKey:"AIzaSyDD_CE0YjvmEBm65fbXv1X5zYRXjbV1UL8",authDomain:"spiel-master-1a1df.firebaseapp.com",databaseURL:"https://spiel-master-1a1df-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"spiel-master-1a1df",storageBucket:"spiel-master-1a1df.firebasestorage.app",messagingSenderId:"486111805415",appId:"1:486111805415:web:5cd01eaf33688cc1ab8742",measurementId:"G-K1LTRBX73Q"};an.apps.length?an.app():an.initializeApp(VU);const Gf=an.auth(),WU=new an.auth.GoogleAuthProvider,pt=an.database(),$U=({user:t})=>{var S;const[e,n]=y.useState(""),[r,i]=y.useState([]),[s,o]=y.useState(!1),[a,l]=y.useState(!1),[c,h]=y.useState({aboutMe:"",responseStyle:"",isEnabled:!0}),[d,f]=y.useState(!1),[g,_]=y.useState(!1),w=y.useRef(null),E=y.useRef(null);y.useEffect(()=>{if(!(t!=null&&t.uid))return;const C=pt.ref(`chats/${t.uid}`),R=pt.ref(`user_config/${t.uid}/custom_instructions`),L=J=>{const Z=J.val();if(Z){const Oe=Date.now(),Le=72*60*60*1e3,G={},D=[];Object.entries(Z).forEach(([N,I])=>{const F=new Date(I.timestamp).getTime();Oe-F>Le?G[N]=null:D.push({...I,id:N,timestamp:new Date(I.timestamp)})}),Object.keys(G).length>0&&C.update(G).catch(console.error),D.sort((N,I)=>N.timestamp.getTime()-I.timestamp.getTime()),i(D)}else{const Oe=`Hello ${t.displayName||"there"}! I'm your Seller Support Assistant.

I can help you with customer inquiries, policy details, and SOPs.`;i([{id:"welcome",role:"model",text:Oe,timestamp:new Date}])}},B=J=>{const Z=J.val();Z&&h(Z)};return C.on("value",L),R.on("value",B),()=>{C.off("value",L),R.off("value",B)}},[t]);const v=()=>{var C;(C=w.current)==null||C.scrollIntoView({behavior:"smooth"})};y.useEffect(()=>{v()},[r,s]),y.useEffect(()=>{E.current&&(E.current.style.height="auto",E.current.style.height=`${Math.min(E.current.scrollHeight,200)}px`)},[e]);const p=async()=>{if(t!=null&&t.uid){f(!0);try{await pt.ref(`user_config/${t.uid}/custom_instructions`).set(c),_(!0),setTimeout(()=>_(!1),3e3)}catch(C){console.error(C)}finally{f(!1)}}},m=async()=>{if(t!=null&&t.uid&&window.confirm("Delete all chat messages? This cannot be undone."))try{const C=pt.ref(`chats/${t.uid}`);i([]),await C.set(null)}catch(C){console.error("Failed to clear history",C),alert("Failed to clear history. Please try again.")}},x=async()=>{if(!e.trim()||s||!(t!=null&&t.uid))return;const C=e;n(""),o(!0),E.current&&(E.current.style.height="auto");const R=c.isEnabled?`CONTEXT ABOUT ME: ${c.aboutMe}

MY PREFERRED RESPONSE STYLE: ${c.responseStyle}`:"",L=pt.ref(`chats/${t.uid}`);await L.push({role:"user",text:C,timestamp:new Date().toISOString()});try{const B=r.filter(Z=>Z.id!=="welcome"&&!Z.text.startsWith("Error:")).map(Z=>({role:Z.role,parts:[{text:Z.text}]})),J=await Z1(C,B,R);await L.push({role:"model",text:J,timestamp:new Date().toISOString()})}catch(B){console.error(B);const J=`Error: ${B.message||"Check your configuration."}`;i(Z=>[...Z,{id:"error-"+Date.now(),role:"model",text:J,timestamp:new Date}])}finally{o(!1)}},k=C=>{if(C.key==="Enter"){if(C.shiftKey)return;C.preventDefault(),x()}},b=C=>{navigator.clipboard.writeText(C)},T=({text:C})=>{let R={english:C,portuguese:""};try{const B=JSON.parse(C);(B.english||B.portuguese)&&(R=B)}catch{}const L=B=>(B==null?void 0:B.replace(/\*\*/g,"").replace(/<br>/g,`
`).replace(/`/g,""))||"";return u.jsx("div",{className:"w-full",children:R.portuguese?u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-slate-300",children:"English Response"}),u.jsx("button",{onClick:()=>b(L(R.english)),className:"text-gray-400 hover:text-gray-900 dark:text-slate-500 dark:hover:text-white transition-colors",title:"Copy English",children:u.jsx(Ai,{size:14})})]}),u.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-slate-200 whitespace-pre-wrap font-normal",children:L(R.english)})]}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-slate-300",children:"Portuguese Response"}),u.jsx("button",{onClick:()=>b(L(R.portuguese)),className:"text-gray-400 hover:text-gray-900 dark:text-slate-500 dark:hover:text-white transition-colors",title:"Copy Portuguese",children:u.jsx(Ai,{size:14})})]}),u.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-slate-200 whitespace-pre-wrap font-normal",children:L(R.portuguese)})]})]}):u.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-slate-200 whitespace-pre-wrap font-normal",children:L(R.english)})})};return u.jsxs("div",{className:"h-full flex flex-col bg-[#f0f2f5] dark:bg-[#202124] text-gray-900 dark:text-white overflow-hidden relative font-sans animate-fade-in transition-colors duration-300",children:[u.jsx("div",{className:"flex-1 overflow-y-auto px-4 md:px-0 py-6 custom-scrollbar scroll-smooth",children:u.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[r.length===0&&u.jsxs("div",{className:"mt-20 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[u.jsx("div",{className:"w-16 h-16 bg-gradient-to-tr from-blue-500 to-red-500 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6",children:u.jsx(hC,{size:32,className:"text-white fill-white"})}),u.jsxs("h1",{className:"text-4xl md:text-5xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-transparent bg-clip-text",children:["Hello, ",((S=t.displayName)==null?void 0:S.split(" ")[0])||"Agent"]}),u.jsx("p",{className:"text-xl text-gray-500 dark:text-slate-400 font-light",children:"How can I help with your cases today?"})]}),r.map(C=>u.jsx("div",{className:"group animate-in fade-in slide-in-from-bottom-2 duration-500",children:C.role==="user"?u.jsx("div",{className:"flex justify-end mb-6",children:u.jsx("div",{className:"bg-white dark:bg-[#282a2c] text-gray-800 dark:text-white px-5 py-3.5 rounded-3xl rounded-br-sm max-w-[80%] shadow-sm border border-gray-200 dark:border-transparent text-[15px] leading-relaxed whitespace-pre-wrap",children:C.text})}):u.jsxs("div",{className:"flex gap-4 mb-8",children:[u.jsx("div",{className:"flex-shrink-0 mt-1",children:u.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center shadow-lg",children:u.jsx(jd,{size:16,className:"text-white fill-white"})})}),u.jsx("div",{className:"flex-1 min-w-0 py-1",children:u.jsx(T,{text:C.text})})]})},C.id)),s&&u.jsxs("div",{className:"flex gap-4 mb-8 animate-pulse",children:[u.jsx("div",{className:"flex-shrink-0 mt-1",children:u.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center",children:u.jsx(jd,{size:16,className:"text-white"})})}),u.jsxs("div",{className:"flex-1 space-y-3 py-2",children:[u.jsx("div",{className:"h-4 bg-gray-200 dark:bg-[#282a2c] rounded w-3/4"}),u.jsx("div",{className:"h-4 bg-gray-200 dark:bg-[#282a2c] rounded w-1/2"})]})]}),u.jsx("div",{ref:w,className:"h-4"})]})}),u.jsx("div",{className:"p-4 md:p-6 bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300",children:u.jsxs("div",{className:"max-w-3xl mx-auto",children:[u.jsxs("div",{className:"relative bg-white dark:bg-[#1e1f20] rounded-3xl border border-gray-200 dark:border-transparent focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:bg-[#282a2c] dark:focus-within:ring-0 shadow-sm transition-all",children:[c.isEnabled&&(c.aboutMe||c.responseStyle)&&u.jsx("div",{className:"absolute -top-8 left-4 flex items-center gap-2",children:u.jsxs("div",{className:"flex items-center gap-1.5 bg-white dark:bg-[#1e1f20] text-gray-500 dark:text-slate-400 text-[10px] font-medium uppercase px-3 py-1 rounded-full border border-gray-200 dark:border-[#282a2c] shadow-sm",children:[u.jsx(KT,{size:12}),u.jsx("span",{children:"Custom Instructions Active"})]})}),u.jsx("textarea",{ref:E,value:e,onChange:C=>n(C.target.value),onKeyDown:k,placeholder:"Ask Gemini",className:"w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-3xl pl-6 pr-14 py-4 focus:outline-none resize-none custom-scrollbar overflow-hidden min-h-[56px] text-base",disabled:s,rows:1}),u.jsxs("div",{className:"absolute right-2 bottom-2 flex items-center gap-1",children:[u.jsx("button",{onClick:()=>l(!0),className:"p-2 text-gray-400 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-[#333537] transition-colors",title:"Instructions",children:u.jsx(uC,{size:20})}),u.jsx("button",{onClick:m,className:"p-2 text-gray-400 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-[#333537] transition-colors",title:"Clear History",children:u.jsx(Oi,{size:20})}),u.jsx("button",{onClick:x,disabled:s||!e.trim(),className:`p-2 rounded-full transition-all flex items-center justify-center ${e.trim()?"bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-slate-200":"bg-gray-200 text-gray-400 dark:bg-[#333537] dark:text-slate-500 cursor-not-allowed"}`,children:s?u.jsx(Vp,{className:"animate-spin",size:20}):u.jsx(cC,{size:20,className:e.trim()?"ml-0.5":""})})]})]}),u.jsx("p",{className:"text-center text-[11px] text-gray-400 dark:text-slate-500 mt-3",children:"Gemini can make mistakes, so double-check it. Messages older than 72h are automatically deleted."})]})}),a&&u.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:u.jsxs("div",{className:"bg-white dark:bg-[#1e1f20] border border-gray-200 dark:border-[#282a2c] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-colors",children:[u.jsxs("div",{className:"px-8 py-6 border-b border-gray-100 dark:border-[#282a2c] flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(jd,{className:"text-blue-500 dark:text-blue-400",size:18}),u.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"System Instructions"})]}),u.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white transition-colors",children:u.jsx(Xs,{size:20})})]}),u.jsxs("div",{className:"p-8 space-y-6",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-xs font-medium text-gray-500 dark:text-slate-400",children:"What should the AI know about you?"}),u.jsx("textarea",{value:c.aboutMe,onChange:C=>h({...c,aboutMe:C.target.value}),className:"w-full h-24 bg-gray-50 dark:bg-[#0b0b0b] border border-gray-200 dark:border-[#282a2c] rounded-xl p-4 text-sm text-gray-900 dark:text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all placeholder-gray-400 dark:placeholder-slate-600",placeholder:"e.g., I am a senior agent handling escalated logistics cases."})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-xs font-medium text-gray-500 dark:text-slate-400",children:"How should the AI respond?"}),u.jsx("textarea",{value:c.responseStyle,onChange:C=>h({...c,responseStyle:C.target.value}),className:"w-full h-24 bg-gray-50 dark:bg-[#0b0b0b] border border-gray-200 dark:border-[#282a2c] rounded-xl p-4 text-sm text-gray-900 dark:text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all placeholder-gray-400 dark:placeholder-slate-600",placeholder:"e.g., Use a very formal tone, always include the ticket ID placeholder."})]}),u.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#282a2c]",children:[u.jsxs("label",{className:"flex items-center gap-3 cursor-pointer group",children:[u.jsx("div",{className:`w-10 h-6 rounded-full p-1 transition-colors ${c.isEnabled?"bg-blue-600":"bg-gray-300 dark:bg-[#333537]"}`,children:u.jsx("div",{className:`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${c.isEnabled?"translate-x-4":"translate-x-0"}`})}),u.jsx("input",{type:"checkbox",className:"hidden",checked:c.isEnabled,onChange:C=>h({...c,isEnabled:C.target.checked})}),u.jsx("span",{className:"text-xs font-medium text-gray-600 dark:text-slate-300",children:"Enable Custom Instructions"})]}),u.jsxs("div",{className:"flex items-center gap-4",children:[g&&u.jsx("span",{className:"text-xs text-green-500 dark:text-green-400",children:"Saved"}),u.jsx("button",{onClick:p,className:"bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 px-6 py-2 rounded-full text-xs font-bold transition-all",children:d?"Saving...":"Save"})]})]})]}),u.jsx("div",{className:"p-4 bg-gray-50 dark:bg-[#282a2c]/50 text-center",children:u.jsxs("button",{onClick:m,className:"text-xs text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 flex items-center justify-center gap-2 w-full",children:[u.jsx(Oi,{size:12})," Clear Chat History"]})})]})})]})},GU=()=>{const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(!1),[o,a]=y.useState(!1),[l,c]=y.useState("Portuguese (Brazil)"),[h,d]=y.useState("English"),f=y.useRef(null);y.useEffect(()=>{if(f.current&&clearTimeout(f.current),!t.trim()){r(""),s(!1);return}return s(!0),f.current=setTimeout(()=>{g()},1e3),()=>{f.current&&clearTimeout(f.current)}},[t,l]);const g=async()=>{if(t.trim()){s(!0);try{const E=await eR(t,l);r(E)}catch(E){console.error("Translation failed",E)}finally{s(!1)}}},_=()=>{n&&(navigator.clipboard.writeText(n),a(!0),setTimeout(()=>a(!1),2e3))},w=()=>{const E=h,v=l,p=t,m=n;d(v),c(E),e(m),r(p)};return u.jsxs("div",{className:"p-6 md:p-12 max-w-6xl mx-auto h-full flex flex-col animate-fade-in overflow-y-auto",children:[u.jsxs("div",{className:"mb-8 text-center md:text-left",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2 justify-center md:justify-start",children:[u.jsx(bu,{className:"text-orange-500",size:20}),u.jsx("span",{className:"text-xs font-black text-orange-500 uppercase tracking-widest",children:"AI Intelligence Tool"})]}),u.jsx("h2",{className:"text-4xl font-bold mb-4 text-gray-900 dark:text-white",children:"AI Pro Translator"}),u.jsx("p",{className:"text-gray-500 dark:text-slate-400 text-lg max-w-2xl",children:"Lightning-fast translations between English and Portuguese, optimized for professional Customer Service."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-[400px]",children:[u.jsxs("div",{className:"group relative bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 flex flex-col transition-all shadow-xl overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-5 blur-2xl rounded-full -mr-10 -mt-10"}),u.jsxs("div",{className:"flex items-center justify-between mb-4 relative z-10",children:[u.jsx("span",{className:"text-[10px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest",children:h}),u.jsx("button",{onClick:w,className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full text-gray-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:rotate-180 duration-500",title:"Swap Languages",children:u.jsx(GT,{size:16})})]}),u.jsx("textarea",{value:t,onChange:E=>e(E.target.value),placeholder:"Start typing to translate...",className:"flex-1 bg-transparent text-gray-900 dark:text-white text-xl placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none resize-none custom-scrollbar font-medium relative z-10"}),t&&u.jsx("button",{onClick:()=>e(""),className:"absolute bottom-6 right-6 p-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-500 dark:text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors z-10",children:"Clear"})]}),u.jsxs("div",{className:"group relative bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 flex flex-col transition-all shadow-2xl overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-700 opacity-5 blur-2xl rounded-full -mr-10 -mt-10"}),u.jsxs("div",{className:"flex items-center justify-between mb-4 relative z-10",children:[u.jsx("span",{className:"text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest",children:l}),n&&!i&&u.jsxs("button",{onClick:_,className:"flex items-center gap-1.5 text-[9px] font-black text-gray-500 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm",children:[o?u.jsx(Hp,{size:12,className:"text-green-500"}):u.jsx(Ai,{size:12}),o?"COPIED":"COPY"]})]}),u.jsxs("div",{className:"flex-1 relative z-10 overflow-y-auto custom-scrollbar",children:[i?u.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-gray-50/40 dark:bg-slate-900/40 backdrop-blur-[1px]",children:[u.jsx(Vp,{className:"animate-spin text-blue-500",size:32}),u.jsx("span",{className:"mt-3 text-[9px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest animate-pulse",children:"Processing"})]}):null,u.jsx("p",{className:`text-xl font-medium leading-relaxed ${n?"text-gray-900 dark:text-white":"text-gray-400 dark:text-slate-700 italic"}`,children:n||"Translation result..."})]})]})]}),u.jsxs("div",{className:"mt-6 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-6 shadow-lg",children:[u.jsxs("div",{className:"flex items-center gap-8",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-1",children:"Target Language"}),u.jsxs("select",{value:l,onChange:E=>c(E.target.value),className:"bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white font-black text-xs px-3 py-1.5 rounded-lg focus:outline-none cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors border-none",children:[u.jsx("option",{value:"Portuguese (Brazil)",children:"Portuguese (Brazil)"}),u.jsx("option",{value:"English",children:"English"}),u.jsx("option",{value:"Spanish",children:"Spanish"}),u.jsx("option",{value:"Chinese (Simplified)",children:"Chinese (Simplified)"})]})]}),u.jsx("div",{className:"h-10 w-px bg-gray-200 dark:bg-slate-700 hidden sm:block"}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] font-black text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-1",children:"AI Engine"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(mC,{size:14,className:"text-yellow-500"}),u.jsx("span",{className:"text-gray-900 dark:text-white font-black text-xs uppercase tracking-tight",children:"Gemini 3 Flash"})]})]})]}),u.jsx("div",{className:"text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-wider text-right max-w-xs leading-relaxed hidden sm:block",children:"Optimized for professional tone and e-commerce terminology."})]})]})},YU="SpielMasterEditor_V2",Ks="current_workspace",KU=1,oS=()=>new Promise((t,e)=>{const n=indexedDB.open(YU,KU);n.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(Ks)||i.createObjectStore(Ks,{keyPath:"id"})},n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{e(r.target.error)}}),ah=async(t,e)=>{const n=await oS();return new Promise((r,i)=>{const o=n.transaction([Ks],"readwrite").objectStore(Ks),a={id:"current",imageBase64:t,objects:e,timestamp:Date.now()},l=o.put(a);l.onsuccess=()=>r(),l.onerror=()=>i(l.error)})},qU=async()=>{const t=await oS();return new Promise((e,n)=>{const s=t.transaction([Ks],"readonly").objectStore(Ks).get("current");s.onsuccess=()=>{e(s.result||null)},s.onerror=()=>n(s.error)})},QU=()=>{var G,D;const t=y.useRef(null),e=y.useRef(null),[n,r]=y.useState(null),[i,s]=y.useState([]),[o,a]=y.useState(null),[l,c]=y.useState("select"),[h,d]=y.useState(!1),[f,g]=y.useState({x:0,y:0}),[_,w]=y.useState("#ef4444"),[E,v]=y.useState([[]]),[p,m]=y.useState(0);y.useEffect(()=>{(async()=>{try{const I=await qU();if(I){if(I.imageBase64){const F=new Image;F.src=I.imageBase64,F.onload=()=>r(F)}I.objects&&I.objects.length>0&&(s(I.objects),v([I.objects]),m(0))}}catch(I){console.error("Failed to load editor state",I)}})()},[]),y.useEffect(()=>{const N=async()=>{if(!n)return;let I=n.src;if(n.src.startsWith("blob:"))try{const z=await(await fetch(n.src)).blob(),U=new FileReader;U.readAsDataURL(z),U.onloadend=()=>{const oe=U.result;ah(oe,i)};return}catch(F){console.error("Failed to convert blob for saving",F)}ah(I,i)};if(n){const I=setTimeout(N,500);return()=>clearTimeout(I)}},[n,i]);const x=N=>{const I=E.slice(0,p+1);I.push(N),v(I),m(I.length-1),s(N)},k=y.useCallback(()=>{if(p>0){const N=p-1;m(N),s(E[N])}},[E,p]),b=y.useCallback(()=>{if(p<E.length-1){const N=p+1;m(N),s(E[N])}},[E,p]),T=y.useCallback(()=>{if(i.length>0){const N=i.slice(0,-1);x(N)}},[i,E,p]);y.useEffect(()=>{const N=I=>{(I.ctrlKey||I.metaKey)&&I.key==="z"&&(I.preventDefault(),k()),(I.ctrlKey||I.metaKey)&&(I.key==="y"||I.shiftKey&&I.key==="Z")&&(I.preventDefault(),b()),(I.key==="Backspace"||I.key==="Delete")&&i.length>0&&(I.preventDefault(),T())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[k,b,T,i]),y.useEffect(()=>{const N=I=>{var z;const F=(z=I.clipboardData)==null?void 0:z.items;if(F){for(let U=0;U<F.length;U++)if(F[U].type.indexOf("image")!==-1){const oe=F[U].getAsFile();if(oe){const ce=new Image;ce.src=URL.createObjectURL(oe),ce.onload=()=>{r(ce),s([]),v([[]]),m(0),a(null)}}}}};return window.addEventListener("paste",N),()=>window.removeEventListener("paste",N)},[]);const S=(N,I,F,z,U)=>{const ce=z-I,te=U-F,Re=Math.atan2(te,ce);N.moveTo(I,F),N.lineTo(z,U),N.lineTo(z-20*Math.cos(Re-Math.PI/6),U-20*Math.sin(Re-Math.PI/6)),N.moveTo(z,U),N.lineTo(z-20*Math.cos(Re+Math.PI/6),U-20*Math.sin(Re+Math.PI/6))},C=(N,I,F,z,U)=>{const oe=Math.abs(z-I)/2,ce=Math.abs(U-F)/2,te=Math.min(I,z)+oe,Re=Math.min(F,U)+ce;N.ellipse(te,Re,oe,ce,0,0,2*Math.PI)},R=(N,I,F,z,U)=>{N.rect(I,F,z-I,U-F)};y.useEffect(()=>{const N=t.current;if(!N||!e.current)return;const I=N.getContext("2d");if(!I)return;const F=e.current;if(I.clearRect(0,0,N.width,N.height),n){const U=F.clientWidth-40,oe=F.clientHeight-40;let ce=n.width,te=n.height;if(ce>U||te>oe){const Re=Math.min(U/ce,oe/te);ce*=Re,te*=Re}N.width=ce,N.height=te,I.drawImage(n,0,0,ce,te)}else N.width=F.clientWidth-40,N.height=500,I.fillStyle=window.matchMedia("(prefers-color-scheme: dark)").matches?"#282a2c":"#ffffff",I.fillRect(0,0,N.width,N.height),I.strokeStyle="#94a3b8",I.lineWidth=2,I.setLineDash([10,10]),I.strokeRect(10,10,N.width-20,N.height-20),I.setLineDash([]),I.fillStyle="#94a3b8",I.font="bold 20px Inter, sans-serif",I.textAlign="center",I.fillText("Paste Image (Ctrl+V) to Start Editing",N.width/2,N.height/2);const z=U=>{I.strokeStyle=U.color,I.lineWidth=4,I.lineCap="round",I.lineJoin="round",I.beginPath(),U.type==="arrow"?S(I,U.x,U.y,U.endX,U.endY):U.type==="circle"?C(I,U.x,U.y,U.endX,U.endY):U.type==="box"&&R(I,U.x,U.y,U.endX,U.endY),I.stroke()};i.forEach(z),o&&(I.save(),I.shadowColor="rgba(0,0,0,0.5)",I.shadowBlur=10,z(o),I.restore())},[n,i,o,(G=e.current)==null?void 0:G.clientWidth,(D=e.current)==null?void 0:D.clientHeight]);const L=N=>{const I=t.current;if(!I)return{x:0,y:0};const F=I.getBoundingClientRect();return{x:N.clientX-F.left,y:N.clientY-F.top}},B=N=>{if(l==="select"||!n)return;d(!0);const I=L(N);g(I)},J=N=>{if(!h||l==="select")return;const I=L(N);a({type:l,x:f.x,y:f.y,endX:I.x,endY:I.y,color:_})},Z=N=>{if(!(!h||l==="select")&&(d(!1),o)){const I=[...i,o];x(I),a(null)}},Oe=async()=>{t.current&&t.current.toBlob(N=>{N&&(navigator.clipboard.write([new ClipboardItem({"image/png":N})]),alert("Copied to clipboard!"))})},Le=async()=>{r(null),s([]),v([[]]),m(0),a(null);try{await ah(null,[])}catch(N){console.error("Failed to clear editor storage",N)}};return u.jsxs("div",{className:"h-full flex flex-col bg-[#f0f2f5] dark:bg-[#202124]",children:[u.jsxs("div",{className:"p-4 bg-white dark:bg-[#1e1e1e] border-b border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4 shadow-sm z-10",children:[u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsxs("div",{className:"flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-lg",children:[u.jsx("button",{onClick:()=>c("select"),className:`p-2 rounded-md transition-all ${l==="select"?"bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm":"text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`,title:"View Mode",children:u.jsx(aC,{size:18})}),u.jsx("div",{className:"w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"}),u.jsx("button",{onClick:()=>c("arrow"),className:`p-2 rounded-md transition-all ${l==="arrow"?"bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm":"text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`,title:"Draw Arrow",children:u.jsx(YT,{size:18})}),u.jsx("button",{onClick:()=>c("box"),className:`p-2 rounded-md transition-all ${l==="box"?"bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm":"text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`,title:"Draw Box",children:u.jsx(fC,{size:18})}),u.jsx("button",{onClick:()=>c("circle"),className:`p-2 rounded-md transition-all ${l==="circle"?"bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm":"text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`,title:"Draw Circle",children:u.jsx(QT,{size:18})})]}),u.jsx("div",{className:"flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-lg px-2 gap-3",children:u.jsx("input",{type:"color",value:_,onChange:N=>w(N.target.value),className:"w-6 h-6 rounded cursor-pointer border-0 bg-transparent p-0",title:"Choose Color"})}),u.jsx("div",{className:"h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"}),u.jsx("button",{onClick:k,disabled:p<=0,className:"p-2.5 text-gray-500 dark:text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500",title:"Undo (Ctrl+Z)",children:u.jsx(pC,{size:16})}),u.jsx("button",{onClick:b,disabled:p>=E.length-1,className:"p-2.5 text-gray-500 dark:text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500",title:"Redo (Ctrl+Y)",children:u.jsx(lC,{size:16})}),u.jsx("div",{className:"h-8 w-px bg-gray-200 dark:bg-gray-700 mx-1"}),u.jsx("button",{onClick:T,disabled:i.length===0,className:"p-2.5 text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30",title:"Eraser: Undo Last Shape (Delete Key)",children:u.jsx(XT,{size:16})}),u.jsx("button",{onClick:Le,disabled:!n,className:"p-2.5 text-gray-500 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-30",title:"Reset: Delete Image & Clear All",children:u.jsx(Oi,{size:16})})]}),u.jsx("div",{children:u.jsxs("button",{onClick:Oe,disabled:!n,className:"flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0",children:[u.jsx(Ai,{size:16})," Copy Result"]})})]}),u.jsx("div",{ref:e,className:"flex-1 bg-gray-200 dark:bg-[#0f172a] overflow-hidden flex items-center justify-center relative",children:u.jsx("canvas",{ref:t,onMouseDown:B,onMouseMove:J,onMouseUp:Z,onMouseLeave:Z,className:`shadow-2xl rounded-lg transition-shadow ${l==="select"?"cursor-default":"cursor-crosshair"}`})}),u.jsx("div",{className:"bg-white dark:bg-[#1e1e1e] p-2 border-t border-gray-200 dark:border-gray-800 text-center",children:u.jsxs("p",{className:"text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2",children:[u.jsx(NE,{size:12}),"Paste Image (Ctrl+V) • Undo (Ctrl+Z) • Redo (Ctrl+Y) • Auto-saved"]})})]})},JU=()=>{const[t,e]=y.useState(null),[n,r]=y.useState([]),[i,s]=y.useState(!0);return y.useEffect(()=>{const o=Gf.onAuthStateChanged(c=>{if(e(c),s(!1),c){const h=pt.ref("/status/"+c.uid);pt.ref(".info/connected").on("value",f=>{f.val()!==!1&&h.onDisconnect().remove().then(()=>{h.set({uid:c.uid,displayName:c.displayName,photoURL:c.photoURL,email:c.email,status:"online",lastSeen:an.database.ServerValue.TIMESTAMP})})})}}),a=pt.ref("/status"),l=c=>{const h=c.val();if(h){const d=Object.values(h);r(d)}else r([])};return a.on("value",l),()=>{o(),a.off("value",l)}},[]),{currentUser:t,activeUsers:n,loading:i}},XU=["jerwincruspero611@gmail.com","jcruspero3263@gmail.com","segagt505@shopeemobile-external.com"],ZU=()=>{const{currentUser:t,activeUsers:e,loading:n}=JU(),[r,i]=y.useState(null),[s,o]=y.useState(!1),a=y.useMemo(()=>r||t,[t,r]),[l,c]=y.useState([]),[h,d]=y.useState(FT),[f,g]=y.useState(""),[_,w]=y.useState("All"),[E,v]=y.useState(Me.HOME),[p,m]=y.useState(!1),x=y.useMemo(()=>r?r.email==="admin@internal":(a==null?void 0:a.email)&&XU.includes(a.email),[a,r]),[k,b]=y.useState(!1),[T,S]=y.useState(void 0),[C,R]=y.useState(null),[L,B]=y.useState(null),[J,Z]=y.useState(null),[Oe,Le]=y.useState(!1),[G,D]=y.useState(!1),[N,I]=y.useState(null),[F,z]=y.useState("cloud"),[U,oe]=y.useState(!1),[ce,te]=y.useState(!0),[Re,Dt]=y.useState(!1),[Nn,ie]=y.useState({show:!1,title:"",message:"",type:"info"}),ci=()=>{o(!0)},Lt=async()=>{try{await Gf.signInWithPopup(WU),o(!1)}catch(M){console.error("Login failed",M),pe("Google Login failed")}},Kn=M=>{M==="Admin"?(i({uid:"admin_local_user",displayName:"Administrator",email:"admin@internal",photoURL:null}),pe("Welcome, Administrator")):(i({uid:"credential_local_user",displayName:"User",email:"user@internal",photoURL:null}),pe("Welcome, User")),o(!1)},pn=async()=>{try{r?i(null):await Gf.signOut(),c([]),pe("Logged out")}catch(M){console.error("Logout failed",M)}};y.useEffect(()=>{if(!(a!=null&&a.uid)){c([]);return}Le(!0);const M=pt.ref(`users/${a.uid}/spiels`),Y=ye=>{const Et=ye.val();if(Et){const dt=Object.values(Et);dt.sort((Jn,ui)=>Jn.order!==void 0&&ui.order!==void 0?Jn.order-ui.order:ui.createdAt-Jn.createdAt),c(dt)}else c([]);Le(!1)};return M.on("value",Y,ye=>{console.error(ye),Le(!1),z("error")}),()=>{M.off("value",Y)}},[a]),y.useEffect(()=>{U?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[U]);const pe=M=>{Z(M),setTimeout(()=>Z(null),3e3)},qn=y.useMemo(()=>l,[l]),Qn=y.useMemo(()=>qn.filter(M=>{var Jn;const Y=!!M.isDeleted;if(G&&!Y||!G&&Y)return!1;const ye=_==="All"||M.category===_,Et=f.toLowerCase(),dt=M.title.toLowerCase().includes(Et)||M.english.toLowerCase().includes(Et)||M.brazil.toLowerCase().includes(Et)||((Jn=M.tags)==null?void 0:Jn.some(ui=>ui.toLowerCase().includes(Et)));return ye&&dt}),[qn,_,f,G]),Ki=y.useMemo(()=>Qn.filter(M=>M.isPinned),[Qn]),qi=y.useMemo(()=>Qn.filter(M=>!M.isPinned),[Qn]),Rn=M=>{if(E!==Me.HOME)v(Me.HOME),setTimeout(()=>{const Y=document.getElementById(M);Y&&(Y.scrollIntoView({behavior:"smooth",block:"center"}),Y.classList.add("ring-2","ring-blue-500"),setTimeout(()=>Y.classList.remove("ring-2","ring-blue-500"),2e3))},100);else{const Y=document.getElementById(M);Y&&(Y.scrollIntoView({behavior:"smooth",block:"center"}),Y.classList.add("ring-2","ring-blue-500"),setTimeout(()=>Y.classList.remove("ring-2","ring-blue-500"),2e3))}Dt(!1)},Qi=async M=>{if(!(a!=null&&a.uid)){ie({show:!0,title:"Login Required",message:"You must be logged in to create or edit personal templates.",type:"error"});return}try{if(T)await pt.ref(`users/${a.uid}/spiels/${T.id}`).set({...T,...M}),pe("Template updated");else{const ye=pt.ref(`users/${a.uid}/spiels`).push(),Et=l.length,dt={...M,id:ye.key,createdAt:Date.now(),isDeleted:!1,isDefault:!1,isPinned:!1,order:Et};await ye.set(dt),pe("New template created")}b(!1),S(void 0)}catch(Y){console.error(Y),pe("Error saving template")}},Ji=async(M,Y)=>{if(a!=null&&a.uid)try{await pt.ref(`users/${a.uid}/spiels/${M}`).update(Y),pe("Saved")}catch(ye){console.error("Quick save failed",ye),pe("Failed to save changes")}},uo=async M=>{if(!(a!=null&&a.uid)){pe("Login to pin items");return}try{await pt.ref(`users/${a.uid}/spiels/${M.id}`).set({...M,isPinned:!M.isPinned})}catch(Y){console.error(Y),pe("Failed to pin")}},ho=async M=>{if(!(a!=null&&a.uid))return;const Y=l.find(ye=>ye.id===M);Y&&(await pt.ref(`users/${a.uid}/spiels/${M}`).set({...Y,isDeleted:!1}),pe("Spiel restored"))},ld=async()=>{if(!N||!(a!=null&&a.uid))return;const M=N,Y=pt.ref(`users/${a.uid}/spiels/${M}`);if(G)await Y.remove(),pe("Spiel permanently deleted");else{const ye=l.find(Et=>Et.id===M);ye&&(await Y.set({...ye,isDeleted:!0}),pe("Moved to Trash"))}I(null)},gl=()=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"p-4 pl-6 border-b border-gray-100 dark:border-gray-800",children:[u.jsx("h3",{className:"text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3",children:"AI Tools"}),u.jsxs("div",{className:"space-y-1",children:[u.jsxs("button",{onClick:()=>v(Me.CHAT),className:`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${E===Me.CHAT?"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[u.jsx(oC,{size:14,className:E===Me.CHAT?"text-blue-500":"text-gray-400"})," Chat AI"]}),u.jsxs("button",{onClick:()=>v(Me.TRANSLATOR),className:`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${E===Me.TRANSLATOR?"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[u.jsx(rC,{size:14,className:E===Me.TRANSLATOR?"text-orange-500":"text-gray-400"})," Translator AI"]}),u.jsxs("button",{onClick:()=>v(Me.EDITOR),className:`w-full text-left px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 ${E===Me.EDITOR?"bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[u.jsx(NE,{size:14,className:E===Me.EDITOR?"text-purple-500":"text-gray-400"})," Image Editor"]})]})]}),u.jsx("div",{className:"flex flex-col flex-1 min-h-0",children:u.jsxs("div",{className:"pt-6",children:[u.jsx("div",{className:"px-5 mb-3 flex items-center justify-between group",children:u.jsx("button",{onClick:()=>{v(Me.HOME),Dt(!1)},className:"text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 w-full text-left",children:"Spiels"})}),u.jsx("div",{className:"border-b border-gray-200 dark:border-gray-700 mx-5 mb-2"}),u.jsx("div",{className:"px-0",children:u.jsx(d1,{spiels:l.filter(M=>!M.isDeleted),onSelectSpiel:Rn,filterText:f,variant:"user"})})]})}),u.jsx("div",{className:"p-6 border-t border-gray-100 dark:border-gray-800 mt-auto bg-gray-50/50 dark:bg-black/20",children:u.jsxs("div",{className:"group flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-slate-700",children:[u.jsx(Bp,{size:14,className:"text-gray-400 group-hover:text-blue-500 mt-0.5"}),u.jsxs("p",{className:"text-[10px] font-bold text-gray-500 dark:text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors",children:["If there's a bug or improvements, kindly contact ",u.jsx("a",{href:"#",className:"text-blue-600 dark:text-blue-400 font-black hover:underline",children:"Kong"}),"."]})]})})]});return n?u.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-slate-900",children:u.jsx(Vp,{className:"animate-spin text-blue-500",size:32})}):a?u.jsxs("div",{className:"h-screen flex flex-col bg-[#f0f2f5] dark:bg-[#202124] transition-colors duration-300 overflow-hidden font-sans relative",children:[u.jsx(_C,{isAdmin:x||!1,activeUsers:e,currentUser:a,onLogin:ci,onLogout:pn,syncStatus:F,isSyncing:Oe,isDarkMode:U,toggleDarkMode:()=>oe(!U),onToggleSidebar:()=>te(!ce),onLogoClick:()=>v(Me.HOME)}),s&&u.jsx(jv,{onClose:()=>o(!1),onGoogleLogin:Lt,onAdminLogin:Kn}),L&&u.jsx(m1,{src:L,onClose:()=>B(null),onCopy:pe}),C&&u.jsx(g1,{spiel:C,onClose:()=>R(null),onCopy:pe,isAdmin:!C.isDefault,onEdit:()=>{R(null),S(C),b(!0)},onSave:Ji,onViewImage:B}),u.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[u.jsx("aside",{className:`
          bg-white dark:bg-[#202124] border-r border-gray-100 dark:border-gray-800 flex-shrink-0 hidden md:flex flex-col z-10 transition-all duration-300 ease-in-out
          ${ce?"w-72 opacity-100":"w-0 opacity-0 overflow-hidden border-none"}
        `,children:u.jsx(gl,{})}),Re&&u.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[u.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:()=>Dt(!1)}),u.jsxs("aside",{className:"relative w-72 bg-white dark:bg-[#202124] h-full shadow-2xl flex flex-col transition-all animate-in slide-in-from-left duration-300",children:[u.jsxs("div",{className:"p-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-black/20",children:[u.jsx("h2",{className:"text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400",children:"Navigation"}),u.jsx("button",{onClick:()=>Dt(!1),className:"text-gray-400 hover:text-red-500 transition-colors bg-transparent p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",children:u.jsx(Xs,{size:18})})]}),u.jsx(gl,{})]})]}),u.jsx("main",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative",children:E===Me.HOME?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"bg-[#f0f2f5]/90 dark:bg-[#202124]/90 backdrop-blur-md z-20 px-4 sm:px-8 pt-6 pb-4",children:u.jsxs("div",{className:"w-full mx-auto",children:[u.jsx("div",{className:"mb-6 flex justify-center",children:u.jsx(yC,{value:f,onChange:g})}),u.jsx("div",{className:"flex items-center gap-3",children:u.jsxs("div",{className:"flex-1 overflow-hidden flex items-center gap-2",children:[u.jsx(l1,{categories:h,selected:_,onSelect:w,isAdmin:!0,onReorder:d,isEditMode:p}),u.jsx("div",{className:"h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>m(!p),className:`flex items-center justify-center w-9 h-9 rounded-lg transition-all ${p?"bg-blue-600 text-white shadow-md ring-2 ring-blue-300":"bg-white text-gray-500 dark:bg-[#303134] hover:bg-gray-50 dark:hover:bg-gray-700"}`,title:p?"Finish Editing":"Manage Categories",children:p?u.jsx(Hp,{size:16}):u.jsx(TE,{size:16})}),u.jsx("button",{onClick:()=>D(!G),className:`flex items-center justify-center w-9 h-9 rounded-lg transition-all ${G?"bg-red-600 text-white shadow-md ring-2 ring-red-300":"bg-white text-gray-500 dark:bg-[#303134] hover:bg-gray-50 dark:hover:bg-gray-700"}`,title:G?"Hide Trash":"Show Trash",children:G?u.jsx($T,{size:16}):u.jsx(Oi,{size:16})}),!G&&u.jsx("button",{onClick:()=>{S(void 0),b(!0)},className:"flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white w-9 h-9 rounded-lg shadow-lg flex items-center justify-center transition-all",children:u.jsx(xv,{size:18})})]})]})})]})}),u.jsx("div",{className:"flex-1 overflow-y-auto px-4 sm:px-8 scroll-smooth",children:u.jsxs("div",{className:"w-full pb-24 mx-auto",children:[l.length===0&&!Oe&&u.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in slide-in-from-bottom-4",children:[u.jsx("div",{className:"w-24 h-24 bg-white dark:bg-[#303134] rounded-full flex items-center justify-center shadow-xl mb-6",children:u.jsx(iC,{size:48,className:"text-gray-300 dark:text-gray-600"})}),u.jsx("h2",{className:"text-2xl font-black text-gray-800 dark:text-gray-200 mb-2",children:"You don't have spiels yet"}),u.jsx("p",{className:"text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed",children:"Start building your personal library of response templates. They will appear here like sticky notes."}),u.jsxs("button",{onClick:()=>{S(void 0),b(!0)},className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1",children:[u.jsx(xv,{size:20}),"Create your first spiel"]})]}),Ki.length>0&&!G&&u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4 px-1",children:[u.jsx(Rc,{size:12,className:"text-gray-400"}),u.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-widest",children:"Pinned"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",children:Ki.map(M=>u.jsx(Lv,{spiel:M,onCopy:pe,isAdmin:!M.isDefault,onEdit:()=>{S(M),b(!0)},onDelete:()=>I(M.id),onRestore:()=>ho(M.id),onPin:()=>uo(M),onExpand:()=>R(M),onViewImage:B,isEditMode:p},M.id))}),u.jsx("div",{className:"my-8 border-t border-gray-200 dark:border-gray-700"})]}),Ki.length>0&&!G&&qi.length>0&&u.jsx("div",{className:"flex items-center gap-2 mb-4 px-1",children:u.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-widest",children:"Others"})}),l.length>0&&u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",children:(G?Qn:qi).map(M=>u.jsx(Lv,{spiel:M,onCopy:pe,isAdmin:!M.isDefault,isTrashView:G,onEdit:()=>{S(M),b(!0)},onDelete:()=>I(M.id),onRestore:()=>ho(M.id),onPin:G?void 0:()=>uo(M),onExpand:()=>R(M),onViewImage:B,isEditMode:p},M.id))}),Qn.length===0&&l.length>0&&u.jsx("div",{className:"text-center py-20 opacity-50",children:u.jsx("p",{children:"No spiels match your search."})})]})})]}):u.jsxs("div",{className:"h-full w-full overflow-hidden bg-[#f0f2f5] dark:bg-[#202124]",children:[E===Me.CHAT&&u.jsx($U,{user:a}),E===Me.TRANSLATOR&&u.jsx(GU,{}),E===Me.EDITOR&&u.jsx(QU,{})]})})]}),k&&u.jsx(u1,{categories:h,onClose:()=>b(!1),onSubmit:Qi,initialData:T,currentSpiels:l}),N&&u.jsx(h1,{title:G?"Delete Forever?":"Move to Trash?",message:"This action is managed via your personal workspace.",onConfirm:ld,onCancel:()=>I(null)}),J&&u.jsx(Mv,{message:J})]}):u.jsxs(u.Fragment,{children:[u.jsx(f1,{onLoginClick:()=>o(!0)}),s&&u.jsx(jv,{onClose:()=>o(!1),onGoogleLogin:Lt,onAdminLogin:Kn}),J&&u.jsx(Mv,{message:J})]})},aS=document.getElementById("root");if(!aS)throw new Error("Could not find root element to mount to");const eF=lh.createRoot(aS);eF.render(u.jsx(gt.StrictMode,{children:u.jsx(ZU,{})}));
