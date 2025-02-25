function dE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ea(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rv={exports:{}},iu={},iv={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),hE=Symbol.for("react.portal"),fE=Symbol.for("react.fragment"),pE=Symbol.for("react.strict_mode"),mE=Symbol.for("react.profiler"),gE=Symbol.for("react.provider"),yE=Symbol.for("react.context"),vE=Symbol.for("react.forward_ref"),_E=Symbol.for("react.suspense"),wE=Symbol.for("react.memo"),xE=Symbol.for("react.lazy"),Hg=Symbol.iterator;function EE(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sv=Object.assign,av={};function No(t,e,n){this.props=t,this.context=e,this.refs=av,this.updater=n||ov}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lv(){}lv.prototype=No.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=av,this.updater=n||ov}var rp=np.prototype=new lv;rp.constructor=np;sv(rp,No.prototype);rp.isPureReactComponent=!0;var Wg=Array.isArray,cv=Object.prototype.hasOwnProperty,ip={current:null},uv={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)cv.call(e,r)&&!uv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ta,type:t,key:o,ref:s,props:i,_owner:ip.current}}function TE(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function op(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function bE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gg=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bE(""+t.key):e.toString(36)}function Nl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ta:case hE:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+yd(s,0):r,Wg(i)?(n="",t!=null&&(n=t.replace(Gg,"$&/")+"/"),Nl(i,e,n,"",function(u){return u})):i!=null&&(op(i)&&(i=TE(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Wg(t))for(var l=0;l<t.length;l++){o=t[l];var c=r+yd(o,l);s+=Nl(o,e,n,c,i)}else if(c=EE(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=r+yd(o,l++),s+=Nl(o,e,n,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function il(t,e,n){if(t==null)return t;var r=[],i=0;return Nl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function SE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Ml={transition:null},kE={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:ip};function hv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=No;te.Fragment=fE;te.Profiler=mE;te.PureComponent=np;te.StrictMode=pE;te.Suspense=_E;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kE;te.act=hv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sv({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)cv.call(e,c)&&!uv.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ta,type:t.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(t){return t={$$typeof:yE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gE,_context:t},t.Consumer=t};te.createElement=dv;te.createFactory=function(t){var e=dv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:vE,render:t}};te.isValidElement=op;te.lazy=function(t){return{$$typeof:xE,_payload:{_status:-1,_result:t},_init:SE}};te.memo=function(t,e){return{$$typeof:wE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};te.unstable_act=hv;te.useCallback=function(t,e){return It.current.useCallback(t,e)};te.useContext=function(t){return It.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return It.current.useDeferredValue(t)};te.useEffect=function(t,e){return It.current.useEffect(t,e)};te.useId=function(){return It.current.useId()};te.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return It.current.useMemo(t,e)};te.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};te.useRef=function(t){return It.current.useRef(t)};te.useState=function(t){return It.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return It.current.useTransition()};te.version="18.3.1";iv.exports=te;var D=iv.exports;const ge=Ea(D),IE=dE({__proto__:null,default:ge},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=D,AE=Symbol.for("react.element"),PE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,jE=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OE={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)RE.call(e,r)&&!OE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AE,type:t,key:o,ref:s,props:i,_owner:jE.current}}iu.Fragment=PE;iu.jsx=fv;iu.jsxs=fv;rv.exports=iu;var h=rv.exports,ph={},pv={exports:{}},Yt={},mv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var K=U.length;U.push(q);e:for(;0<K;){var de=K-1>>>1,ne=U[de];if(0<i(ne,q))U[de]=q,U[K]=ne,K=de;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],K=U.pop();if(K!==q){U[0]=K;e:for(var de=0,ne=U.length,be=ne>>>1;de<be;){var Vt=2*(de+1)-1,At=U[Vt],xt=Vt+1,Pt=U[xt];if(0>i(At,K))xt<ne&&0>i(Pt,At)?(U[de]=Pt,U[xt]=K,de=xt):(U[de]=At,U[Vt]=K,de=Vt);else if(xt<ne&&0>i(Pt,K))U[de]=Pt,U[xt]=K,de=xt;else break e}}return q}function i(U,q){var K=U.sortIndex-q.sortIndex;return K!==0?K:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,m=null,g=3,T=!1,I=!1,A=!1,R=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(U){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=U)r(u),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(u)}}function P(U){if(A=!1,E(U),!I)if(n(c)!==null)I=!0,Yr(L);else{var q=n(u);q!==null&&Ft(P,q.startTime-U)}}function L(U,q){I=!1,A&&(A=!1,x(_),_=-1),T=!0;var K=g;try{for(E(q),m=n(c);m!==null&&(!(m.expirationTime>q)||U&&!C());){var de=m.callback;if(typeof de=="function"){m.callback=null,g=m.priorityLevel;var ne=de(m.expirationTime<=q);q=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(c)&&r(c),E(q)}else r(c);m=n(c)}if(m!==null)var be=!0;else{var Vt=n(u);Vt!==null&&Ft(P,Vt.startTime-q),be=!1}return be}finally{m=null,g=K,T=!1}}var N=!1,w=null,_=-1,b=5,S=-1;function C(){return!(t.unstable_now()-S<b)}function j(){if(w!==null){var U=t.unstable_now();S=U;var q=!0;try{q=w(!0,U)}finally{q?k():(N=!1,w=null)}}else N=!1}var k;if(typeof v=="function")k=function(){v(j)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,an=nt.port2;nt.port1.onmessage=j,k=function(){an.postMessage(null)}}else k=function(){R(j,0)};function Yr(U){w=U,N||(N=!0,k())}function Ft(U,q){_=R(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){I||T||(I=!0,Yr(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var K=g;g=q;try{return U()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var K=g;g=U;try{return q()}finally{g=K}},t.unstable_scheduleCallback=function(U,q,K){var de=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?de+K:de):K=de,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=K+ne,U={id:f++,callback:q,priorityLevel:U,startTime:K,expirationTime:ne,sortIndex:-1},K>de?(U.sortIndex=K,e(u,U),n(c)===null&&U===n(u)&&(A?(x(_),_=-1):A=!0,Ft(P,K-de))):(U.sortIndex=ne,e(c,U),I||T||(I=!0,Yr(L))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var q=g;return function(){var K=g;g=q;try{return U.apply(this,arguments)}finally{g=K}}}})(gv);mv.exports=gv;var NE=mv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME=D,Qt=NE;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,$s={};function Ri(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for($s[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,LE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qg={},Qg={};function DE(t){return mh.call(Qg,t)?!0:mh.call(qg,t)?!1:LE.test(t)?Qg[t]=!0:(qg[t]=!0,!1)}function FE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VE(t,e,n,r){if(e===null||typeof e>"u"||FE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var sp=/[\-:]([a-z])/g;function ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sp,ap);ct[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sp,ap);ct[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sp,ap);ct[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VE(e,n,i,r)&&(n=null),r||i===null?DE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=ME.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),vv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),Yg=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,vd;function vs(t){if(vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vd=e&&e[1]||""}return`
`+vd+t}var _d=!1;function wd(t,e){if(!t||_d)return"";_d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{_d=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function zE(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=wd(t.type,!1),t;case 11:return t=wd(t.type.render,!1),t;case 1:return t=wd(t.type,!0),t;default:return""}}function _h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hi:return"Fragment";case Ui:return"Portal";case gh:return"Profiler";case cp:return"StrictMode";case yh:return"Suspense";case vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _v:return(t.displayName||"Context")+".Consumer";case vv:return(t._context.displayName||"Context")+".Provider";case up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dp:return e=t.displayName||null,e!==null?e:_h(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return _h(t(e))}catch{}}return null}function BE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _h(e);case 8:return e===cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $E(t){var e=xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=$E(t))}function Ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tv(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function xh(t,e){Tv(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eh(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eh(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _s=Array.isArray;function io(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(_s(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function bv(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Us(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UE=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(t){UE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ks[e]=ks[t]})});function Iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ks.hasOwnProperty(t)&&ks[t]?(""+e).trim():e+"px"}function Cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HE=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(HE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=null;function hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ch=null,oo=null,so=null;function e1(t){if(t=ka(t)){if(typeof Ch!="function")throw Error(z(280));var e=t.stateNode;e&&(e=cu(e),Ch(t.stateNode,t.type,e))}}function Av(t){oo?so?so.push(t):so=[t]:oo=t}function Pv(){if(oo){var t=oo,e=so;if(so=oo=null,e1(t),e)for(t=0;t<e.length;t++)e1(e[t])}}function Rv(t,e){return t(e)}function jv(){}var xd=!1;function Ov(t,e,n){if(xd)return t(e,n);xd=!0;try{return Rv(t,e,n)}finally{xd=!1,(oo!==null||so!==null)&&(jv(),Pv())}}function Hs(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Ah=!1;if(Kn)try{var as={};Object.defineProperty(as,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Ah=!1}function WE(t,e,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Is=!1,oc=null,sc=!1,Ph=null,GE={onError:function(t){Is=!0,oc=t}};function qE(t,e,n,r,i,o,s,l,c){Is=!1,oc=null,WE.apply(GE,arguments)}function QE(t,e,n,r,i,o,s,l,c){if(qE.apply(this,arguments),Is){if(Is){var u=oc;Is=!1,oc=null}else throw Error(z(198));sc||(sc=!0,Ph=u)}}function ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function t1(t){if(ji(t)!==t)throw Error(z(188))}function YE(t){var e=t.alternate;if(!e){if(e=ji(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return t1(i),t;if(o===r)return t1(i),e;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Mv(t){return t=YE(t),t!==null?Lv(t):null}function Lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lv(t);if(e!==null)return e;t=t.sibling}return null}var Dv=Qt.unstable_scheduleCallback,n1=Qt.unstable_cancelCallback,KE=Qt.unstable_shouldYield,XE=Qt.unstable_requestPaint,Be=Qt.unstable_now,JE=Qt.unstable_getCurrentPriorityLevel,fp=Qt.unstable_ImmediatePriority,Fv=Qt.unstable_UserBlockingPriority,ac=Qt.unstable_NormalPriority,ZE=Qt.unstable_LowPriority,Vv=Qt.unstable_IdlePriority,ou=null,An=null;function e3(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:r3,t3=Math.log,n3=Math.LN2;function r3(t){return t>>>=0,t===0?32:31-(t3(t)/n3|0)|0}var ll=64,cl=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ws(l):(o&=s,o!==0&&(r=ws(o)))}else s=n&~i,s!==0?r=ws(s):o!==0&&(r=ws(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function i3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o3(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-yn(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=i3(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zv(){var t=ll;return ll<<=1,!(ll&4194240)&&(ll=64),t}function Ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function s3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $v,mp,Uv,Hv,Wv,jh=!1,ul=[],br=null,Sr=null,kr=null,Ws=new Map,Gs=new Map,vr=[],a3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r1(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ls(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ka(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function l3(t,e,n,r,i){switch(e){case"focusin":return br=ls(br,t,e,n,r,i),!0;case"dragenter":return Sr=ls(Sr,t,e,n,r,i),!0;case"mouseover":return kr=ls(kr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ws.set(o,ls(Ws.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gs.set(o,ls(Gs.get(o)||null,t,e,n,r,i)),!0}return!1}function Gv(t){var e=si(t.target);if(e!==null){var n=ji(e);if(n!==null){if(e=n.tag,e===13){if(e=Nv(n),e!==null){t.blockedOn=e,Wv(t.priority,function(){Uv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ih=r,n.target.dispatchEvent(r),Ih=null}else return e=ka(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function i1(t,e,n){Ll(t)&&n.delete(e)}function c3(){jh=!1,br!==null&&Ll(br)&&(br=null),Sr!==null&&Ll(Sr)&&(Sr=null),kr!==null&&Ll(kr)&&(kr=null),Ws.forEach(i1),Gs.forEach(i1)}function cs(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,c3)))}function qs(t){function e(i){return cs(i,t)}if(0<ul.length){cs(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&cs(br,t),Sr!==null&&cs(Sr,t),kr!==null&&cs(kr,t),Ws.forEach(e),Gs.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&vr.shift()}var ao=rr.ReactCurrentBatchConfig,cc=!0;function u3(t,e,n,r){var i=he,o=ao.transition;ao.transition=null;try{he=1,gp(t,e,n,r)}finally{he=i,ao.transition=o}}function d3(t,e,n,r){var i=he,o=ao.transition;ao.transition=null;try{he=4,gp(t,e,n,r)}finally{he=i,ao.transition=o}}function gp(t,e,n,r){if(cc){var i=Oh(t,e,n,r);if(i===null)jd(t,e,r,uc,n),r1(t,r);else if(l3(i,t,e,n,r))r.stopPropagation();else if(r1(t,r),e&4&&-1<a3.indexOf(t)){for(;i!==null;){var o=ka(i);if(o!==null&&$v(o),o=Oh(t,e,n,r),o===null&&jd(t,e,r,uc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else jd(t,e,r,null,n)}}var uc=null;function Oh(t,e,n,r){if(uc=null,t=hp(r),t=si(t),t!==null)if(e=ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uc=t,null}function qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JE()){case fp:return 1;case Fv:return 4;case ac:case ZE:return 16;case Vv:return 536870912;default:return 16}default:return 16}}var wr=null,yp=null,Dl=null;function Qv(){if(Dl)return Dl;var t,e=yp,n=e.length,r,i="value"in wr?wr.value:wr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Dl=i.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function o1(){return!1}function Kt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dl:o1,this.isPropagationStopped=o1,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=Kt(Mo),Sa=Le({},Mo,{view:0,detail:0}),h3=Kt(Sa),Td,bd,us,su=Le({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Td=t.screenX-us.screenX,bd=t.screenY-us.screenY):bd=Td=0,us=t),Td)},movementY:function(t){return"movementY"in t?t.movementY:bd}}),s1=Kt(su),f3=Le({},su,{dataTransfer:0}),p3=Kt(f3),m3=Le({},Sa,{relatedTarget:0}),Sd=Kt(m3),g3=Le({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),y3=Kt(g3),v3=Le({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_3=Kt(v3),w3=Le({},Mo,{data:0}),a1=Kt(w3),x3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T3[t])?!!e[t]:!1}function _p(){return b3}var S3=Le({},Sa,{key:function(t){if(t.key){var e=x3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_p,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k3=Kt(S3),I3=Le({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l1=Kt(I3),C3=Le({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_p}),A3=Kt(C3),P3=Le({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),R3=Kt(P3),j3=Le({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O3=Kt(j3),N3=[9,13,27,32],wp=Kn&&"CompositionEvent"in window,Cs=null;Kn&&"documentMode"in document&&(Cs=document.documentMode);var M3=Kn&&"TextEvent"in window&&!Cs,Yv=Kn&&(!wp||Cs&&8<Cs&&11>=Cs),c1=" ",u1=!1;function Kv(t,e){switch(t){case"keyup":return N3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function L3(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(u1=!0,c1);case"textInput":return t=e.data,t===c1&&u1?null:t;default:return null}}function D3(t,e){if(Wi)return t==="compositionend"||!wp&&Kv(t,e)?(t=Qv(),Dl=yp=wr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yv&&e.locale!=="ko"?null:e.data;default:return null}}var F3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F3[t.type]:e==="textarea"}function Jv(t,e,n,r){Av(r),e=dc(e,"onChange"),0<e.length&&(n=new vp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,Qs=null;function V3(t){c2(t,0)}function au(t){var e=Qi(t);if(Ev(e))return t}function z3(t,e){if(t==="change")return e}var Zv=!1;if(Kn){var kd;if(Kn){var Id="oninput"in document;if(!Id){var h1=document.createElement("div");h1.setAttribute("oninput","return;"),Id=typeof h1.oninput=="function"}kd=Id}else kd=!1;Zv=kd&&(!document.documentMode||9<document.documentMode)}function f1(){As&&(As.detachEvent("onpropertychange",e2),Qs=As=null)}function e2(t){if(t.propertyName==="value"&&au(Qs)){var e=[];Jv(e,Qs,t,hp(t)),Ov(V3,e)}}function B3(t,e,n){t==="focusin"?(f1(),As=e,Qs=n,As.attachEvent("onpropertychange",e2)):t==="focusout"&&f1()}function $3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(Qs)}function U3(t,e){if(t==="click")return au(e)}function H3(t,e){if(t==="input"||t==="change")return au(e)}function W3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:W3;function Ys(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mh.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function p1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m1(t,e){var n=p1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=p1(n)}}function t2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n2(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function G3(t){var e=n2(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t2(n.ownerDocument.documentElement,n)){if(r!==null&&xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=m1(n,o);var s=m1(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q3=Kn&&"documentMode"in document&&11>=document.documentMode,Gi=null,Nh=null,Ps=null,Mh=!1;function g1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Gi==null||Gi!==ic(r)||(r=Gi,"selectionStart"in r&&xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ps&&Ys(Ps,r)||(Ps=r,r=dc(Nh,"onSelect"),0<r.length&&(e=new vp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gi)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Cd={},r2={};Kn&&(r2=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function lu(t){if(Cd[t])return Cd[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r2)return Cd[t]=e[n];return t}var i2=lu("animationend"),o2=lu("animationiteration"),s2=lu("animationstart"),a2=lu("transitionend"),l2=new Map,y1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){l2.set(t,e),Ri(e,[t])}for(var Ad=0;Ad<y1.length;Ad++){var Pd=y1[Ad],Q3=Pd.toLowerCase(),Y3=Pd[0].toUpperCase()+Pd.slice(1);Wr(Q3,"on"+Y3)}Wr(i2,"onAnimationEnd");Wr(o2,"onAnimationIteration");Wr(s2,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(a2,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K3=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function v1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QE(r,e,void 0,t),t.currentTarget=null}function c2(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;v1(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;v1(i,l,u),o=c}}}if(sc)throw t=Ph,sc=!1,Ph=null,t}function we(t,e){var n=e[zh];n===void 0&&(n=e[zh]=new Set);var r=t+"__bubble";n.has(r)||(u2(e,t,2,!1),n.add(r))}function Rd(t,e,n){var r=0;e&&(r|=4),u2(n,t,r,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Ks(t){if(!t[fl]){t[fl]=!0,yv.forEach(function(n){n!=="selectionchange"&&(K3.has(n)||Rd(n,!1,t),Rd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,Rd("selectionchange",!1,e))}}function u2(t,e,n,r){switch(qv(e)){case 1:var i=u3;break;case 4:i=d3;break;default:i=gp}n=i.bind(null,e,n,t),i=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jd(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=si(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Ov(function(){var u=o,f=hp(n),m=[];e:{var g=l2.get(t);if(g!==void 0){var T=vp,I=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":T=k3;break;case"focusin":I="focus",T=Sd;break;case"focusout":I="blur",T=Sd;break;case"beforeblur":case"afterblur":T=Sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=s1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=p3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=A3;break;case i2:case o2:case s2:T=y3;break;case a2:T=R3;break;case"scroll":T=h3;break;case"wheel":T=O3;break;case"copy":case"cut":case"paste":T=_3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=l1}var A=(e&4)!==0,R=!A&&t==="scroll",x=A?g!==null?g+"Capture":null:g;A=[];for(var v=u,E;v!==null;){E=v;var P=E.stateNode;if(E.tag===5&&P!==null&&(E=P,x!==null&&(P=Hs(v,x),P!=null&&A.push(Xs(v,P,E)))),R)break;v=v.return}0<A.length&&(g=new T(g,I,null,n,f),m.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==Ih&&(I=n.relatedTarget||n.fromElement)&&(si(I)||I[Xn]))break e;if((T||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,T?(I=n.relatedTarget||n.toElement,T=u,I=I?si(I):null,I!==null&&(R=ji(I),I!==R||I.tag!==5&&I.tag!==6)&&(I=null)):(T=null,I=u),T!==I)){if(A=s1,P="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=l1,P="onPointerLeave",x="onPointerEnter",v="pointer"),R=T==null?g:Qi(T),E=I==null?g:Qi(I),g=new A(P,v+"leave",T,n,f),g.target=R,g.relatedTarget=E,P=null,si(f)===u&&(A=new A(x,v+"enter",I,n,f),A.target=E,A.relatedTarget=R,P=A),R=P,T&&I)t:{for(A=T,x=I,v=0,E=A;E;E=Fi(E))v++;for(E=0,P=x;P;P=Fi(P))E++;for(;0<v-E;)A=Fi(A),v--;for(;0<E-v;)x=Fi(x),E--;for(;v--;){if(A===x||x!==null&&A===x.alternate)break t;A=Fi(A),x=Fi(x)}A=null}else A=null;T!==null&&_1(m,g,T,A,!1),I!==null&&R!==null&&_1(m,R,I,A,!0)}}e:{if(g=u?Qi(u):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var L=z3;else if(d1(g))if(Zv)L=H3;else{L=$3;var N=B3}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=U3);if(L&&(L=L(t,u))){Jv(m,L,n,f);break e}N&&N(t,g,u),t==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Eh(g,"number",g.value)}switch(N=u?Qi(u):window,t){case"focusin":(d1(N)||N.contentEditable==="true")&&(Gi=N,Nh=u,Ps=null);break;case"focusout":Ps=Nh=Gi=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,g1(m,n,f);break;case"selectionchange":if(q3)break;case"keydown":case"keyup":g1(m,n,f)}var w;if(wp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Wi?Kv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Yv&&n.locale!=="ko"&&(Wi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Wi&&(w=Qv()):(wr=f,yp="value"in wr?wr.value:wr.textContent,Wi=!0)),N=dc(u,_),0<N.length&&(_=new a1(_,t,null,n,f),m.push({event:_,listeners:N}),w?_.data=w:(w=Xv(n),w!==null&&(_.data=w)))),(w=M3?L3(t,n):D3(t,n))&&(u=dc(u,"onBeforeInput"),0<u.length&&(f=new a1("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=w))}c2(m,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hs(t,n),o!=null&&r.unshift(Xs(t,o,i)),o=Hs(t,e),o!=null&&r.push(Xs(t,o,i))),t=t.return}return r}function Fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _1(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Hs(n,o),c!=null&&s.unshift(Xs(n,c,l))):i||(c=Hs(n,o),c!=null&&s.push(Xs(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var X3=/\r\n?/g,J3=/\u0000|\uFFFD/g;function w1(t){return(typeof t=="string"?t:""+t).replace(X3,`
`).replace(J3,"")}function pl(t,e,n){if(e=w1(e),w1(t)!==e&&n)throw Error(z(425))}function hc(){}var Lh=null,Dh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,Z3=typeof clearTimeout=="function"?clearTimeout:void 0,x1=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof x1<"u"?function(t){return x1.resolve(null).then(t).catch(tT)}:Vh;function tT(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qs(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function E1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),kn="__reactFiber$"+Lo,Js="__reactProps$"+Lo,Xn="__reactContainer$"+Lo,zh="__reactEvents$"+Lo,nT="__reactListeners$"+Lo,rT="__reactHandles$"+Lo;function si(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=E1(t);t!==null;){if(n=t[kn])return n;t=E1(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[kn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function cu(t){return t[Js]||null}var Bh=[],Yi=-1;function Gr(t){return{current:t}}function Ee(t){0>Yi||(t.current=Bh[Yi],Bh[Yi]=null,Yi--)}function ye(t,e){Yi++,Bh[Yi]=t.current,t.current=e}var Fr={},wt=Gr(Fr),Nt=Gr(!1),_i=Fr;function go(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function fc(){Ee(Nt),Ee(wt)}function T1(t,e,n){if(wt.current!==Fr)throw Error(z(168));ye(wt,e),ye(Nt,n)}function d2(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,BE(t)||"Unknown",i));return Le({},n,r)}function pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,_i=wt.current,ye(wt,t),ye(Nt,Nt.current),!0}function b1(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=d2(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,Ee(Nt),Ee(wt),ye(wt,t)):Ee(Nt),ye(Nt,n)}var Gn=null,uu=!1,Nd=!1;function h2(t){Gn===null?Gn=[t]:Gn.push(t)}function iT(t){uu=!0,h2(t)}function qr(){if(!Nd&&Gn!==null){Nd=!0;var t=0,e=he;try{var n=Gn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,uu=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),Dv(fp,qr),i}finally{he=e,Nd=!1}}return null}var Ki=[],Xi=0,mc=null,gc=0,Zt=[],en=0,wi=null,qn=1,Qn="";function ni(t,e){Ki[Xi++]=gc,Ki[Xi++]=mc,mc=t,gc=e}function f2(t,e,n){Zt[en++]=qn,Zt[en++]=Qn,Zt[en++]=wi,wi=t;var r=qn;t=Qn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var o=32-yn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qn=1<<32-yn(e)+i|n<<i|r,Qn=o+t}else qn=1<<o|n<<i|r,Qn=t}function Ep(t){t.return!==null&&(ni(t,1),f2(t,1,0))}function Tp(t){for(;t===mc;)mc=Ki[--Xi],Ki[Xi]=null,gc=Ki[--Xi],Ki[Xi]=null;for(;t===wi;)wi=Zt[--en],Zt[en]=null,Qn=Zt[--en],Zt[en]=null,qn=Zt[--en],Zt[en]=null}var Wt=null,Ht=null,Ce=!1,hn=null;function p2(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function S1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:qn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Ht=null,!0):!1;default:return!1}}function $h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uh(t){if(Ce){var e=Ht;if(e){var n=e;if(!S1(t,e)){if($h(t))throw Error(z(418));e=Ir(n.nextSibling);var r=Wt;e&&S1(t,e)?p2(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Wt=t)}}else{if($h(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ce=!1,Wt=t}}}function k1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function ml(t){if(t!==Wt)return!1;if(!Ce)return k1(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=Ht)){if($h(t))throw m2(),Error(z(418));for(;e;)p2(t,e),e=Ir(e.nextSibling)}if(k1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Wt?Ir(t.stateNode.nextSibling):null;return!0}function m2(){for(var t=Ht;t;)t=Ir(t.nextSibling)}function yo(){Ht=Wt=null,Ce=!1}function bp(t){hn===null?hn=[t]:hn.push(t)}var oT=rr.ReactCurrentBatchConfig;function ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function gl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function I1(t){var e=t._init;return e(t._payload)}function g2(t){function e(x,v){if(t){var E=x.deletions;E===null?(x.deletions=[v],x.flags|=16):E.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=Rr(x,v),x.index=0,x.sibling=null,x}function o(x,v,E){return x.index=E,t?(E=x.alternate,E!==null?(E=E.index,E<v?(x.flags|=2,v):E):(x.flags|=2,v)):(x.flags|=1048576,v)}function s(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,E,P){return v===null||v.tag!==6?(v=Bd(E,x.mode,P),v.return=x,v):(v=i(v,E),v.return=x,v)}function c(x,v,E,P){var L=E.type;return L===Hi?f(x,v,E.props.children,P,E.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&I1(L)===v.type)?(P=i(v,E.props),P.ref=ds(x,v,E),P.return=x,P):(P=Wl(E.type,E.key,E.props,null,x.mode,P),P.ref=ds(x,v,E),P.return=x,P)}function u(x,v,E,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=$d(E,x.mode,P),v.return=x,v):(v=i(v,E.children||[]),v.return=x,v)}function f(x,v,E,P,L){return v===null||v.tag!==7?(v=hi(E,x.mode,P,L),v.return=x,v):(v=i(v,E),v.return=x,v)}function m(x,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Bd(""+v,x.mode,E),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ol:return E=Wl(v.type,v.key,v.props,null,x.mode,E),E.ref=ds(x,null,v),E.return=x,E;case Ui:return v=$d(v,x.mode,E),v.return=x,v;case gr:var P=v._init;return m(x,P(v._payload),E)}if(_s(v)||ss(v))return v=hi(v,x.mode,E,null),v.return=x,v;gl(x,v)}return null}function g(x,v,E,P){var L=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:l(x,v,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ol:return E.key===L?c(x,v,E,P):null;case Ui:return E.key===L?u(x,v,E,P):null;case gr:return L=E._init,g(x,v,L(E._payload),P)}if(_s(E)||ss(E))return L!==null?null:f(x,v,E,P,null);gl(x,E)}return null}function T(x,v,E,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return x=x.get(E)||null,l(v,x,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ol:return x=x.get(P.key===null?E:P.key)||null,c(v,x,P,L);case Ui:return x=x.get(P.key===null?E:P.key)||null,u(v,x,P,L);case gr:var N=P._init;return T(x,v,E,N(P._payload),L)}if(_s(P)||ss(P))return x=x.get(E)||null,f(v,x,P,L,null);gl(v,P)}return null}function I(x,v,E,P){for(var L=null,N=null,w=v,_=v=0,b=null;w!==null&&_<E.length;_++){w.index>_?(b=w,w=null):b=w.sibling;var S=g(x,w,E[_],P);if(S===null){w===null&&(w=b);break}t&&w&&S.alternate===null&&e(x,w),v=o(S,v,_),N===null?L=S:N.sibling=S,N=S,w=b}if(_===E.length)return n(x,w),Ce&&ni(x,_),L;if(w===null){for(;_<E.length;_++)w=m(x,E[_],P),w!==null&&(v=o(w,v,_),N===null?L=w:N.sibling=w,N=w);return Ce&&ni(x,_),L}for(w=r(x,w);_<E.length;_++)b=T(w,x,_,E[_],P),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?_:b.key),v=o(b,v,_),N===null?L=b:N.sibling=b,N=b);return t&&w.forEach(function(C){return e(x,C)}),Ce&&ni(x,_),L}function A(x,v,E,P){var L=ss(E);if(typeof L!="function")throw Error(z(150));if(E=L.call(E),E==null)throw Error(z(151));for(var N=L=null,w=v,_=v=0,b=null,S=E.next();w!==null&&!S.done;_++,S=E.next()){w.index>_?(b=w,w=null):b=w.sibling;var C=g(x,w,S.value,P);if(C===null){w===null&&(w=b);break}t&&w&&C.alternate===null&&e(x,w),v=o(C,v,_),N===null?L=C:N.sibling=C,N=C,w=b}if(S.done)return n(x,w),Ce&&ni(x,_),L;if(w===null){for(;!S.done;_++,S=E.next())S=m(x,S.value,P),S!==null&&(v=o(S,v,_),N===null?L=S:N.sibling=S,N=S);return Ce&&ni(x,_),L}for(w=r(x,w);!S.done;_++,S=E.next())S=T(w,x,_,S.value,P),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?_:S.key),v=o(S,v,_),N===null?L=S:N.sibling=S,N=S);return t&&w.forEach(function(j){return e(x,j)}),Ce&&ni(x,_),L}function R(x,v,E,P){if(typeof E=="object"&&E!==null&&E.type===Hi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ol:e:{for(var L=E.key,N=v;N!==null;){if(N.key===L){if(L=E.type,L===Hi){if(N.tag===7){n(x,N.sibling),v=i(N,E.props.children),v.return=x,x=v;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&I1(L)===N.type){n(x,N.sibling),v=i(N,E.props),v.ref=ds(x,N,E),v.return=x,x=v;break e}n(x,N);break}else e(x,N);N=N.sibling}E.type===Hi?(v=hi(E.props.children,x.mode,P,E.key),v.return=x,x=v):(P=Wl(E.type,E.key,E.props,null,x.mode,P),P.ref=ds(x,v,E),P.return=x,x=P)}return s(x);case Ui:e:{for(N=E.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(x,v.sibling),v=i(v,E.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=$d(E,x.mode,P),v.return=x,x=v}return s(x);case gr:return N=E._init,R(x,v,N(E._payload),P)}if(_s(E))return I(x,v,E,P);if(ss(E))return A(x,v,E,P);gl(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,E),v.return=x,x=v):(n(x,v),v=Bd(E,x.mode,P),v.return=x,x=v),s(x)):n(x,v)}return R}var vo=g2(!0),y2=g2(!1),yc=Gr(null),vc=null,Ji=null,Sp=null;function kp(){Sp=Ji=vc=null}function Ip(t){var e=yc.current;Ee(yc),t._currentValue=e}function Hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){vc=t,Sp=Ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},Ji===null){if(vc===null)throw Error(z(308));Ji=t,vc.dependencies={lanes:0,firstContext:t}}else Ji=Ji.next=t;return e}var ai=null;function Cp(t){ai===null?ai=[t]:ai.push(t)}function v2(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}function C1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,r){var i=t.updateQueue;yr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;s=0,f=u=c=null,l=o;do{var g=l.lane,T=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,A=l;switch(g=e,T=n,A.tag){case 1:if(I=A.payload,typeof I=="function"){m=I.call(T,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=A.payload,g=typeof I=="function"?I.call(T,m,g):I,g==null)break e;m=Le({},m,g);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=T,c=m):f=f.next=T,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ei|=s,t.lanes=s,t.memoizedState=m}}function A1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ia={},Pn=Gr(Ia),Zs=Gr(Ia),ea=Gr(Ia);function li(t){if(t===Ia)throw Error(z(174));return t}function Pp(t,e){switch(ye(ea,e),ye(Zs,t),ye(Pn,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}Ee(Pn),ye(Pn,e)}function _o(){Ee(Pn),Ee(Zs),Ee(ea)}function w2(t){li(ea.current);var e=li(Pn.current),n=bh(e,t.type);e!==n&&(ye(Zs,t),ye(Pn,n))}function Rp(t){Zs.current===t&&(Ee(Pn),Ee(Zs))}var Oe=Gr(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function jp(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var zl=rr.ReactCurrentDispatcher,Ld=rr.ReactCurrentBatchConfig,xi=0,Ne=null,Ge=null,Ke=null,xc=!1,Rs=!1,ta=0,sT=0;function ft(){throw Error(z(321))}function Op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Np(t,e,n,r,i,o){if(xi=o,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?uT:dT,t=n(r,i),Rs){o=0;do{if(Rs=!1,ta=0,25<=o)throw Error(z(301));o+=1,Ke=Ge=null,e.updateQueue=null,zl.current=hT,t=n(r,i)}while(Rs)}if(zl.current=Ec,e=Ge!==null&&Ge.next!==null,xi=0,Ke=Ge=Ne=null,xc=!1,e)throw Error(z(300));return t}function Mp(){var t=ta!==0;return ta=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function on(){if(Ge===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ke===null?Ne.memoizedState:Ke.next;if(e!==null)Ke=e,Ge=t;else{if(t===null)throw Error(z(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function na(t,e){return typeof e=="function"?e(t):e}function Dd(t){var e=on(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var f=u.lane;if((xi&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,s=r):c=c.next=m,Ne.lanes|=f,Ei|=f}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,wn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ne.lanes|=o,Ei|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fd(t){var e=on(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);wn(o,e.memoizedState)||(Ot=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function x2(){}function E2(t,e){var n=Ne,r=on(),i=e(),o=!wn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ot=!0),r=r.queue,Lp(S2.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ra(9,b2.bind(null,n,r,i,e),void 0,null),et===null)throw Error(z(349));xi&30||T2(n,e,i)}return i}function T2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b2(t,e,n,r){e.value=n,e.getSnapshot=r,k2(e)&&I2(t)}function S2(t,e,n){return n(function(){k2(e)&&I2(t)})}function k2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function I2(t){var e=Jn(t,1);e!==null&&vn(e,t,1,-1)}function P1(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=cT.bind(null,Ne,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function C2(){return on().memoizedState}function Bl(t,e,n,r){var i=En();Ne.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var i=on();r=r===void 0?null:r;var o=void 0;if(Ge!==null){var s=Ge.memoizedState;if(o=s.destroy,r!==null&&Op(r,s.deps)){i.memoizedState=ra(e,n,o,r);return}}Ne.flags|=t,i.memoizedState=ra(1|e,n,o,r)}function R1(t,e){return Bl(8390656,8,t,e)}function Lp(t,e){return du(2048,8,t,e)}function A2(t,e){return du(4,2,t,e)}function P2(t,e){return du(4,4,t,e)}function R2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j2(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,R2.bind(null,e,t),n)}function Dp(){}function O2(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function N2(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M2(t,e,n){return xi&21?(wn(n,e)||(n=zv(),Ne.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function aT(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Ld.transition;Ld.transition={};try{t(!1),e()}finally{he=n,Ld.transition=r}}function L2(){return on().memoizedState}function lT(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D2(t))F2(e,n);else if(n=v2(t,e,n,r),n!==null){var i=kt();vn(n,t,r,i),V2(n,e,r)}}function cT(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D2(t))F2(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,wn(l,s)){var c=e.interleaved;c===null?(i.next=i,Cp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=v2(t,e,i,r),n!==null&&(i=kt(),vn(n,t,r,i),V2(n,e,r))}}function D2(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function F2(t,e){Rs=xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}var Ec={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},uT={readContext:rn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:R1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,R2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lT.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:P1,useDebugValue:Dp,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=P1(!1),e=t[0];return t=aT.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=En();if(Ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),et===null)throw Error(z(349));xi&30||T2(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,R1(S2.bind(null,r,o,t),[t]),r.flags|=2048,ra(9,b2.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=En(),e=et.identifierPrefix;if(Ce){var n=Qn,r=qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dT={readContext:rn,useCallback:O2,useContext:rn,useEffect:Lp,useImperativeHandle:j2,useInsertionEffect:A2,useLayoutEffect:P2,useMemo:N2,useReducer:Dd,useRef:C2,useState:function(){return Dd(na)},useDebugValue:Dp,useDeferredValue:function(t){var e=on();return M2(e,Ge.memoizedState,t)},useTransition:function(){var t=Dd(na)[0],e=on().memoizedState;return[t,e]},useMutableSource:x2,useSyncExternalStore:E2,useId:L2,unstable_isNewReconciler:!1},hT={readContext:rn,useCallback:O2,useContext:rn,useEffect:Lp,useImperativeHandle:j2,useInsertionEffect:A2,useLayoutEffect:P2,useMemo:N2,useReducer:Fd,useRef:C2,useState:function(){return Fd(na)},useDebugValue:Dp,useDeferredValue:function(t){var e=on();return Ge===null?e.memoizedState=t:M2(e,Ge.memoizedState,t)},useTransition:function(){var t=Fd(na)[0],e=on().memoizedState;return[t,e]},useMutableSource:x2,useSyncExternalStore:E2,useId:L2,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Pr(t),o=Yn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Cr(t,o,i),e!==null&&(vn(e,t,i,r),Vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Pr(t),o=Yn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Cr(t,o,i),e!==null&&(vn(e,t,i,r),Vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Pr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cr(t,i,r),e!==null&&(vn(e,t,r,n),Vl(e,t,r))}};function j1(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,r)||!Ys(i,o):!0}function z2(t,e,n){var r=!1,i=Fr,o=e.contextType;return typeof o=="object"&&o!==null?o=rn(o):(i=Mt(e)?_i:wt.current,r=e.contextTypes,o=(r=r!=null)?go(t,i):Fr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function O1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ap(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=rn(o):(o=Mt(e)?_i:wt.current,i.context=go(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Wh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),_c(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wo(t,e){try{var n="",r=e;do n+=zE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function B2(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bc||(bc=!0,rf=r),qh(t,e)},n}function $2(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function N1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IT.bind(null,t,e,n),e.then(t,t))}function M1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function L1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var pT=rr.ReactCurrentOwner,Ot=!1;function St(t,e,n,r){e.child=t===null?y2(e,null,n,r):vo(e,t.child,n,r)}function D1(t,e,n,r,i){n=n.render;var o=e.ref;return lo(e,i),r=Np(t,e,n,r,o,i),n=Mp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ce&&n&&Ep(e),e.flags|=1,St(t,e,r,i),e.child)}function F1(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Wp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,U2(t,e,o,r,i)):(t=Wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(s,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Rr(o,r),t.ref=e.ref,t.return=e,e.child=t}function U2(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ys(o,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return Qh(t,e,n,r,i)}function H2(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(eo,$t),$t|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(eo,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ye(eo,$t),$t|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ye(eo,$t),$t|=r;return St(t,e,i,n),e.child}function W2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,r,i){var o=Mt(n)?_i:wt.current;return o=go(e,o),lo(e,i),n=Np(t,e,n,r,o,i),r=Mp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(Ce&&r&&Ep(e),e.flags|=1,St(t,e,n,i),e.child)}function V1(t,e,n,r,i){if(Mt(n)){var o=!0;pc(e)}else o=!1;if(lo(e,i),e.stateNode===null)$l(t,e),z2(e,n,r),Gh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Mt(n)?_i:wt.current,u=go(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&O1(e,s,r,u),yr=!1;var g=e.memoizedState;s.state=g,_c(e,r,s,i),c=e.memoizedState,l!==r||g!==c||Nt.current||yr?(typeof f=="function"&&(Wh(e,n,f,r),c=e.memoizedState),(l=yr||j1(e,n,l,r,g,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,_2(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:un(e.type,l),s.props=u,m=e.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=rn(c):(c=Mt(n)?_i:wt.current,c=go(e,c));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==c)&&O1(e,s,r,c),yr=!1,g=e.memoizedState,s.state=g,_c(e,r,s,i);var I=e.memoizedState;l!==m||g!==I||Nt.current||yr?(typeof T=="function"&&(Wh(e,n,T,r),I=e.memoizedState),(u=yr||j1(e,n,u,r,g,I,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Yh(t,e,n,r,o,i)}function Yh(t,e,n,r,i,o){W2(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&b1(e,n,!1),Zn(t,e,o);r=e.stateNode,pT.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=vo(e,t.child,null,o),e.child=vo(e,null,l,o)):St(t,e,l,o),e.memoizedState=r.state,i&&b1(e,n,!0),e.child}function G2(t){var e=t.stateNode;e.pendingContext?T1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&T1(t,e.context,!1),Pp(t,e.containerInfo)}function z1(t,e,n,r,i){return yo(),bp(i),e.flags|=256,St(t,e,n,r),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function q2(t,e,n){var r=e.pendingProps,i=Oe.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Oe,i&1),t===null)return Uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=mu(s,r,0,null),t=hi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Xh(n),e.memoizedState=Kh,t):Fp(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mT(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Rr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rr(l,o):(o=hi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Xh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Kh,r}return o=t.child,t=o.sibling,r=Rr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fp(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,r){return r!==null&&bp(r),vo(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Vd(Error(z(422))),yl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),o=hi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&vo(e,t.child,null,s),e.child.memoizedState=Xh(s),e.memoizedState=Kh,o);if(!(e.mode&1))return yl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=Vd(o,r,void 0),yl(t,e,s,r)}if(l=(s&t.childLanes)!==0,Ot||l){if(r=et,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jn(t,i),vn(r,t,i,-1))}return Hp(),r=Vd(Error(z(421))),yl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CT.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ht=Ir(i.nextSibling),Wt=e,Ce=!0,hn=null,t!==null&&(Zt[en++]=qn,Zt[en++]=Qn,Zt[en++]=wi,qn=t.id,Qn=t.overflow,wi=e),e=Fp(e,r.children),e.flags|=4096,e)}function B1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hh(t.return,e,n)}function zd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Q2(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(St(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B1(t,n,e);else if(t.tag===19)B1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zd(e,!0,n,null,o);break;case"together":zd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gT(t,e,n){switch(e.tag){case 3:G2(e),yo();break;case 5:w2(e);break;case 1:Mt(e.type)&&pc(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(yc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?q2(t,e,n):(ye(Oe,Oe.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);ye(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,H2(t,e,n)}return Zn(t,e,n)}var Y2,Jh,K2,X2;Y2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jh=function(){};K2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(Pn.current);var o=null;switch(n){case"input":i=wh(t,i),r=wh(t,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=Th(t,i),r=Th(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hc)}Sh(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",t),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};X2=function(t,e,n,r){n!==r&&(e.flags|=4)};function hs(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yT(t,e,n){var r=e.pendingProps;switch(Tp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Mt(e.type)&&fc(),pt(e),null;case 3:return r=e.stateNode,_o(),Ee(Nt),Ee(wt),jp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(af(hn),hn=null))),Jh(t,e),pt(e),null;case 5:Rp(e);var i=li(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)K2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return pt(e),null}if(t=li(Pn.current),ml(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[kn]=e,r[Js]=o,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)we(xs[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Kg(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Jg(r,o),we("invalid",r)}Sh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),i=["children",""+l]):$s.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":sl(r),Xg(r,o,!0);break;case"textarea":sl(r),Zg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[kn]=e,t[Js]=r,Y2(t,e,!1,!1),e.stateNode=t;e:{switch(s=kh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)we(xs[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Kg(t,r),i=wh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),we("invalid",t);break;case"textarea":Jg(t,r),i=Th(t,r),we("invalid",t);break;default:i=r}Sh(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Cv(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kv(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Us(t,c):typeof c=="number"&&Us(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($s.hasOwnProperty(o)?c!=null&&o==="onScroll"&&we("scroll",t):c!=null&&lp(t,o,c,s))}switch(n){case"input":sl(t),Xg(t,r,!1);break;case"textarea":sl(t),Zg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?io(t,!!r.multiple,o,!1):r.defaultValue!=null&&io(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)X2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=li(ea.current),li(Pn.current),ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(o=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return pt(e),null;case 13:if(Ee(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ht!==null&&e.mode&1&&!(e.flags&128))m2(),yo(),e.flags|=98560,o=!1;else if(o=ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[kn]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),o=!1}else hn!==null&&(af(hn),hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?qe===0&&(qe=3):Hp())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return _o(),Jh(t,e),t===null&&Ks(e.stateNode.containerInfo),pt(e),null;case 10:return Ip(e.type._context),pt(e),null;case 17:return Mt(e.type)&&fc(),pt(e),null;case 19:if(Ee(Oe),o=e.memoizedState,o===null)return pt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)hs(o,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=wc(t),s!==null){for(e.flags|=128,hs(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Oe,Oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Be()>xo&&(e.flags|=128,r=!0,hs(o,!1),e.lanes=4194304)}else{if(!r)if(t=wc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ce)return pt(e),null}else 2*Be()-o.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,r=!0,hs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Be(),e.sibling=null,n=Oe.current,ye(Oe,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function vT(t,e){switch(Tp(e),e.tag){case 1:return Mt(e.type)&&fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),Ee(Nt),Ee(wt),jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(Ee(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Oe),null;case 4:return _o(),null;case 10:return Ip(e.type._context),null;case 22:case 23:return Up(),null;case 24:return null;default:return null}}var vl=!1,yt=!1,_T=typeof WeakSet=="function"?WeakSet:Set,H=null;function Zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Zh(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var $1=!1;function wT(t,e){if(Lh=cc,t=n2(),xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var T;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(c=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=s),g===o&&++f===r&&(c=s),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dh={focusedElem:t,selectionRange:n},cc=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var A=I.memoizedProps,R=I.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?A:un(e.type,A),R);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(P){Ve(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return I=$1,$1=!1,I}function js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zh(e,n,o)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J2(t){var e=t.alternate;e!==null&&(t.alternate=null,J2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[Js],delete e[zh],delete e[nT],delete e[rT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z2(t){return t.tag===5||t.tag===3||t.tag===4}function U1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var it=null,dn=!1;function ur(t,e,n){for(n=n.child;n!==null;)e_(t,e,n),n=n.sibling}function e_(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:yt||Zi(n,e);case 6:var r=it,i=dn;it=null,ur(t,e,n),it=r,dn=i,it!==null&&(dn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(dn?(t=it,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),qs(t)):Od(it,n.stateNode));break;case 4:r=it,i=dn,it=n.stateNode.containerInfo,dn=!0,ur(t,e,n),it=r,dn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zh(n,e,s),i=i.next}while(i!==r)}ur(t,e,n);break;case 1:if(!yt&&(Zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,e,l)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,ur(t,e,n),yt=r):ur(t,e,n);break;default:ur(t,e,n)}}function H1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _T),e.forEach(function(r){var i=AT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,dn=!1;break e;case 3:it=l.stateNode.containerInfo,dn=!0;break e;case 4:it=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(it===null)throw Error(z(160));e_(o,s,i),it=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t_(e,t),e=e.sibling}function t_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),xn(t),r&4){try{js(3,t,t.return),fu(3,t)}catch(A){Ve(t,t.return,A)}try{js(5,t,t.return)}catch(A){Ve(t,t.return,A)}}break;case 1:cn(e,t),xn(t),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(cn(e,t),xn(t),r&512&&n!==null&&Zi(n,n.return),t.flags&32){var i=t.stateNode;try{Us(i,"")}catch(A){Ve(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Tv(i,o),kh(l,s);var u=kh(l,o);for(s=0;s<c.length;s+=2){var f=c[s],m=c[s+1];f==="style"?Cv(i,m):f==="dangerouslySetInnerHTML"?kv(i,m):f==="children"?Us(i,m):lp(i,f,m,u)}switch(l){case"input":xh(i,o);break;case"textarea":bv(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?io(i,!!o.multiple,T,!1):g!==!!o.multiple&&(o.defaultValue!=null?io(i,!!o.multiple,o.defaultValue,!0):io(i,!!o.multiple,o.multiple?[]:"",!1))}i[Js]=o}catch(A){Ve(t,t.return,A)}}break;case 6:if(cn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(A){Ve(t,t.return,A)}}break;case 3:if(cn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(A){Ve(t,t.return,A)}break;case 4:cn(e,t),xn(t);break;case 13:cn(e,t),xn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bp=Be())),r&4&&H1(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||f,cn(e,t),yt=u):cn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,T=g.child,g.tag){case 0:case 11:case 14:case 15:js(4,g,g.return);break;case 1:Zi(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(A){Ve(r,n,A)}}break;case 5:Zi(g,g.return);break;case 22:if(g.memoizedState!==null){G1(m);continue}}T!==null?(T.return=g,H=T):G1(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Iv("display",s))}catch(A){Ve(t,t.return,A)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(A){Ve(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:cn(e,t),xn(t),r&4&&H1(t);break;case 21:break;default:cn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z2(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Us(i,""),r.flags&=-33);var o=U1(t);nf(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=U1(t);tf(t,l,s);break;default:throw Error(z(161))}}catch(c){Ve(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xT(t,e,n){H=t,n_(t)}function n_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vl;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||yt;l=vl;var u=yt;if(vl=s,(yt=c)&&!u)for(H=i;H!==null;)s=H,c=s.child,s.tag===22&&s.memoizedState!==null?q1(i):c!==null?(c.return=s,H=c):q1(i);for(;o!==null;)H=o,n_(o),o=o.sibling;H=i,vl=l,yt=u}W1(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):W1(t)}}function W1(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&A1(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}A1(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}yt||e.flags&512&&ef(e)}catch(g){Ve(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function G1(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function q1(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(c){Ve(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ve(e,i,c)}}var o=e.return;try{ef(e)}catch(c){Ve(e,o,c)}break;case 5:var s=e.return;try{ef(e)}catch(c){Ve(e,s,c)}}}catch(c){Ve(e,e.return,c)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var ET=Math.ceil,Tc=rr.ReactCurrentDispatcher,Vp=rr.ReactCurrentOwner,nn=rr.ReactCurrentBatchConfig,ae=0,et=null,He=null,lt=0,$t=0,eo=Gr(0),qe=0,ia=null,Ei=0,pu=0,zp=0,Os=null,jt=null,Bp=0,xo=1/0,Hn=null,bc=!1,rf=null,Ar=null,_l=!1,xr=null,Sc=0,Ns=0,of=null,Ul=-1,Hl=0;function kt(){return ae&6?Be():Ul!==-1?Ul:Ul=Be()}function Pr(t){return t.mode&1?ae&2&&lt!==0?lt&-lt:oT.transition!==null?(Hl===0&&(Hl=zv()),Hl):(t=he,t!==0||(t=window.event,t=t===void 0?16:qv(t.type)),t):1}function vn(t,e,n,r){if(50<Ns)throw Ns=0,of=null,Error(z(185));ba(t,n,r),(!(ae&2)||t!==et)&&(t===et&&(!(ae&2)&&(pu|=n),qe===4&&_r(t,lt)),Lt(t,r),n===1&&ae===0&&!(e.mode&1)&&(xo=Be()+500,uu&&qr()))}function Lt(t,e){var n=t.callbackNode;o3(t,e);var r=lc(t,t===et?lt:0);if(r===0)n!==null&&n1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&n1(n),e===1)t.tag===0?iT(Q1.bind(null,t)):h2(Q1.bind(null,t)),eT(function(){!(ae&6)&&qr()}),n=null;else{switch(Bv(r)){case 1:n=fp;break;case 4:n=Fv;break;case 16:n=ac;break;case 536870912:n=Vv;break;default:n=ac}n=u_(n,r_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r_(t,e){if(Ul=-1,Hl=0,ae&6)throw Error(z(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var r=lc(t,t===et?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kc(t,r);else{e=r;var i=ae;ae|=2;var o=o_();(et!==t||lt!==e)&&(Hn=null,xo=Be()+500,di(t,e));do try{ST();break}catch(l){i_(t,l)}while(!0);kp(),Tc.current=o,ae=i,He!==null?e=0:(et=null,lt=0,e=qe)}if(e!==0){if(e===2&&(i=Rh(t),i!==0&&(r=i,e=sf(t,i))),e===1)throw n=ia,di(t,0),_r(t,r),Lt(t,Be()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!TT(i)&&(e=kc(t,r),e===2&&(o=Rh(t),o!==0&&(r=o,e=sf(t,o))),e===1))throw n=ia,di(t,0),_r(t,r),Lt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:ri(t,jt,Hn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=Bp+500-Be(),10<e)){if(lc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vh(ri.bind(null,t,jt,Hn),e);break}ri(t,jt,Hn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-yn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ET(r/1960))-r,10<r){t.timeoutHandle=Vh(ri.bind(null,t,jt,Hn),r);break}ri(t,jt,Hn);break;case 5:ri(t,jt,Hn);break;default:throw Error(z(329))}}}return Lt(t,Be()),t.callbackNode===n?r_.bind(null,t):null}function sf(t,e){var n=Os;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=kc(t,e),t!==2&&(e=jt,jt=n,e!==null&&af(e)),t}function af(t){jt===null?jt=t:jt.push.apply(jt,t)}function TT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~zp,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Q1(t){if(ae&6)throw Error(z(327));co();var e=lc(t,0);if(!(e&1))return Lt(t,Be()),null;var n=kc(t,e);if(t.tag!==0&&n===2){var r=Rh(t);r!==0&&(e=r,n=sf(t,r))}if(n===1)throw n=ia,di(t,0),_r(t,e),Lt(t,Be()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,jt,Hn),Lt(t,Be()),null}function $p(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(xo=Be()+500,uu&&qr())}}function Ti(t){xr!==null&&xr.tag===0&&!(ae&6)&&co();var e=ae;ae|=1;var n=nn.transition,r=he;try{if(nn.transition=null,he=1,t)return t()}finally{he=r,nn.transition=n,ae=e,!(ae&6)&&qr()}}function Up(){$t=eo.current,Ee(eo)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z3(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Tp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fc();break;case 3:_o(),Ee(Nt),Ee(wt),jp();break;case 5:Rp(r);break;case 4:_o();break;case 13:Ee(Oe);break;case 19:Ee(Oe);break;case 10:Ip(r.type._context);break;case 22:case 23:Up()}n=n.return}if(et=t,He=t=Rr(t.current,null),lt=$t=e,qe=0,ia=null,zp=pu=Ei=0,jt=Os=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ai=null}return t}function i_(t,e){do{var n=He;try{if(kp(),zl.current=Ec,xc){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xc=!1}if(xi=0,Ke=Ge=Ne=null,Rs=!1,ta=0,Vp.current=null,n===null||n.return===null){qe=1,ia=e,He=null;break}e:{var o=t,s=n.return,l=n,c=e;if(e=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=M1(s);if(T!==null){T.flags&=-257,L1(T,s,l,o,e),T.mode&1&&N1(o,u,e),e=T,c=u;var I=e.updateQueue;if(I===null){var A=new Set;A.add(c),e.updateQueue=A}else I.add(c);break e}else{if(!(e&1)){N1(o,u,e),Hp();break e}c=Error(z(426))}}else if(Ce&&l.mode&1){var R=M1(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),L1(R,s,l,o,e),bp(wo(c,l));break e}}o=c=wo(c,l),qe!==4&&(qe=2),Os===null?Os=[o]:Os.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=B2(o,c,e);C1(o,x);break e;case 1:l=c;var v=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ar===null||!Ar.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var P=$2(o,l,e);C1(o,P);break e}}o=o.return}while(o!==null)}a_(n)}catch(L){e=L,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function o_(){var t=Tc.current;return Tc.current=Ec,t===null?Ec:t}function Hp(){(qe===0||qe===3||qe===2)&&(qe=4),et===null||!(Ei&268435455)&&!(pu&268435455)||_r(et,lt)}function kc(t,e){var n=ae;ae|=2;var r=o_();(et!==t||lt!==e)&&(Hn=null,di(t,e));do try{bT();break}catch(i){i_(t,i)}while(!0);if(kp(),ae=n,Tc.current=r,He!==null)throw Error(z(261));return et=null,lt=0,qe}function bT(){for(;He!==null;)s_(He)}function ST(){for(;He!==null&&!KE();)s_(He)}function s_(t){var e=c_(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?a_(t):He=e,Vp.current=null}function a_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vT(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,He=null;return}}else if(n=yT(n,e,$t),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);qe===0&&(qe=5)}function ri(t,e,n){var r=he,i=nn.transition;try{nn.transition=null,he=1,kT(t,e,n,r)}finally{nn.transition=i,he=r}return null}function kT(t,e,n,r){do co();while(xr!==null);if(ae&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(s3(t,o),t===et&&(He=et=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,u_(ac,function(){return co(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=nn.transition,nn.transition=null;var s=he;he=1;var l=ae;ae|=4,Vp.current=null,wT(t,n),t_(n,t),G3(Dh),cc=!!Lh,Dh=Lh=null,t.current=n,xT(n),XE(),ae=l,he=s,nn.transition=o}else t.current=n;if(_l&&(_l=!1,xr=t,Sc=i),o=t.pendingLanes,o===0&&(Ar=null),e3(n.stateNode),Lt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bc)throw bc=!1,t=rf,rf=null,t;return Sc&1&&t.tag!==0&&co(),o=t.pendingLanes,o&1?t===of?Ns++:(Ns=0,of=t):Ns=0,qr(),null}function co(){if(xr!==null){var t=Bv(Sc),e=nn.transition,n=he;try{if(nn.transition=null,he=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Sc=0,ae&6)throw Error(z(331));var i=ae;for(ae|=4,H=t.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(H=u;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:js(8,f,o)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,T=f.return;if(J2(f),f===u){H=null;break}if(g!==null){g.return=T,H=g;break}H=T}}}var I=o.alternate;if(I!==null){var A=I.child;if(A!==null){I.child=null;do{var R=A.sibling;A.sibling=null,A=R}while(A!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:js(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,H=x;break e}H=o.return}}var v=t.current;for(H=v;H!==null;){s=H;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,H=E;else e:for(s=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(L){Ve(l,l.return,L)}if(l===s){H=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,H=P;break e}H=l.return}}if(ae=i,qr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{he=n,nn.transition=e}}return!1}function Y1(t,e,n){e=wo(n,e),e=B2(t,e,1),t=Cr(t,e,1),e=kt(),t!==null&&(ba(t,1,e),Lt(t,e))}function Ve(t,e,n){if(t.tag===3)Y1(t,t,n);else for(;e!==null;){if(e.tag===3){Y1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=wo(n,t),t=$2(e,t,1),e=Cr(e,t,1),t=kt(),e!==null&&(ba(e,1,t),Lt(e,t));break}}e=e.return}}function IT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(lt&n)===n&&(qe===4||qe===3&&(lt&130023424)===lt&&500>Be()-Bp?di(t,0):zp|=n),Lt(t,e)}function l_(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=kt();t=Jn(t,e),t!==null&&(ba(t,e,n),Lt(t,n))}function CT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l_(t,n)}function AT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),l_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,gT(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Ce&&e.flags&1048576&&f2(e,gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$l(t,e),t=e.pendingProps;var i=go(e,wt.current);lo(e,n),i=Np(null,e,r,t,i,n);var o=Mp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(o=!0,pc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ap(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Gh(e,r,t,n),e=Yh(null,e,r,!0,o,n)):(e.tag=0,Ce&&o&&Ep(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($l(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RT(r),t=un(r,t),i){case 0:e=Qh(null,e,r,t,n);break e;case 1:e=V1(null,e,r,t,n);break e;case 11:e=D1(null,e,r,t,n);break e;case 14:e=F1(null,e,r,un(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Qh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),V1(t,e,r,i,n);case 3:e:{if(G2(e),t===null)throw Error(z(387));r=e.pendingProps,o=e.memoizedState,i=o.element,_2(t,e),_c(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=wo(Error(z(423)),e),e=z1(t,e,r,n,i);break e}else if(r!==i){i=wo(Error(z(424)),e),e=z1(t,e,r,n,i);break e}else for(Ht=Ir(e.stateNode.containerInfo.firstChild),Wt=e,Ce=!0,hn=null,n=y2(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),r===i){e=Zn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return w2(e),t===null&&Uh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Fh(r,i)?s=null:o!==null&&Fh(r,o)&&(e.flags|=32),W2(t,e),St(t,e,s,n),e.child;case 6:return t===null&&Uh(e),null;case 13:return q2(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vo(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),D1(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ye(yc,r._currentValue),r._currentValue=s,o!==null)if(wn(o.value,s)){if(o.children===i.children&&!Nt.current){e=Zn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Yn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hh(o.return,n,e),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lo(e,n),i=rn(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),F1(t,e,r,i,n);case 15:return U2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),$l(t,e),e.tag=1,Mt(r)?(t=!0,pc(e)):t=!1,lo(e,n),z2(e,r,i),Gh(e,r,i,n),Yh(null,e,r,!0,t,n);case 19:return Q2(t,e,n);case 22:return H2(t,e,n)}throw Error(z(156,e.tag))};function u_(t,e){return Dv(t,e)}function PT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new PT(t,e,n,r)}function Wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RT(t){if(typeof t=="function")return Wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===up)return 11;if(t===dp)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Wp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Hi:return hi(n.children,i,o,e);case cp:s=8,i|=8;break;case gh:return t=tn(12,n,e,i|2),t.elementType=gh,t.lanes=o,t;case yh:return t=tn(13,n,e,i),t.elementType=yh,t.lanes=o,t;case vh:return t=tn(19,n,e,i),t.elementType=vh,t.lanes=o,t;case wv:return mu(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vv:s=10;break e;case _v:s=9;break e;case up:s=11;break e;case dp:s=14;break e;case gr:s=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=tn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function hi(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=tn(22,t,r,e),t.elementType=wv,t.lanes=n,t.stateNode={isHidden:!1},t}function Bd(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function $d(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ed(0),this.expirationTimes=Ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ed(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gp(t,e,n,r,i,o,s,l,c){return t=new jT(t,e,n,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=tn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(o),t}function OT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function d_(t){if(!t)return Fr;t=t._reactInternals;e:{if(ji(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Mt(n))return d2(t,n,e)}return e}function h_(t,e,n,r,i,o,s,l,c){return t=Gp(n,r,!0,t,i,o,s,l,c),t.context=d_(null),n=t.current,r=kt(),i=Pr(n),o=Yn(r,i),o.callback=e??null,Cr(n,o,i),t.current.lanes=i,ba(t,i,r),Lt(t,r),t}function gu(t,e,n,r){var i=e.current,o=kt(),s=Pr(i);return n=d_(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(i,e,s),t!==null&&(vn(t,i,s,o),Vl(t,i,s)),s}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function K1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){K1(t,e),(t=t.alternate)&&K1(t,e)}function NT(){return null}var f_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qp(t){this._internalRoot=t}yu.prototype.render=Qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));gu(t,e,null,null)};yu.prototype.unmount=Qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ti(function(){gu(null,t,null,null)}),e[Xn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&Gv(t)}};function Yp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function X1(){}function MT(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ic(s);o.call(u)}}var s=h_(e,r,t,0,null,!1,!1,"",X1);return t._reactRootContainer=s,t[Xn]=s.current,Ks(t.nodeType===8?t.parentNode:t),Ti(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ic(c);l.call(u)}}var c=Gp(t,0,!1,null,null,!1,!1,"",X1);return t._reactRootContainer=c,t[Xn]=c.current,Ks(t.nodeType===8?t.parentNode:t),Ti(function(){gu(e,c,n,r)}),c}function _u(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Ic(s);l.call(c)}}gu(e,s,t,i)}else s=MT(n,e,t,i,r);return Ic(s)}$v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(pp(e,n|1),Lt(e,Be()),!(ae&6)&&(xo=Be()+500,qr()))}break;case 13:Ti(function(){var r=Jn(t,1);if(r!==null){var i=kt();vn(r,t,1,i)}}),qp(t,1)}};mp=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=kt();vn(e,t,134217728,n)}qp(t,134217728)}};Uv=function(t){if(t.tag===13){var e=Pr(t),n=Jn(t,e);if(n!==null){var r=kt();vn(n,t,e,r)}qp(t,e)}};Hv=function(){return he};Wv=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Ch=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(z(90));Ev(r),xh(r,i)}}}break;case"textarea":bv(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};Rv=$p;jv=Ti;var LT={usingClientEntryPoint:!1,Events:[ka,Qi,cu,Av,Pv,$p]},fs={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DT={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mv(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||NT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{ou=wl.inject(DT),An=wl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LT;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yp(e))throw Error(z(200));return OT(t,e,null,n)};Yt.createRoot=function(t,e){if(!Yp(t))throw Error(z(299));var n=!1,r="",i=f_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gp(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Ks(t.nodeType===8?t.parentNode:t),new Qp(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Mv(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Ti(t)};Yt.hydrate=function(t,e,n){if(!vu(e))throw Error(z(200));return _u(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Yp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=f_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=h_(e,null,t,1,n??null,i,!1,o,s),t[Xn]=e.current,Ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};Yt.render=function(t,e,n){if(!vu(e))throw Error(z(200));return _u(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!vu(t))throw Error(z(40));return t._reactRootContainer?(Ti(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Yt.unstable_batchedUpdates=$p;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return _u(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function p_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_)}catch(t){console.error(t)}}p_(),pv.exports=Yt;var m_=pv.exports,J1=m_;ph.createRoot=J1.createRoot,ph.hydrateRoot=J1.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const Z1="popstate";function FT(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return lf("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cc(i)}return zT(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function g_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VT(){return Math.random().toString(36).substr(2,8)}function e0(t,e){return{usr:t.state,key:t.key,idx:e}}function lf(t,e,n,r){return n===void 0&&(n=null),oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Do(e):e,{state:n,key:e&&e.key||r||VT()})}function Cc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Do(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=Er.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(oa({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function m(){l=Er.Pop;let R=f(),x=R==null?null:R-u;u=R,c&&c({action:l,location:A.location,delta:x})}function g(R,x){l=Er.Push;let v=lf(A.location,R,x);u=f()+1;let E=e0(v,u),P=A.createHref(v);try{s.pushState(E,"",P)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(P)}o&&c&&c({action:l,location:A.location,delta:1})}function T(R,x){l=Er.Replace;let v=lf(A.location,R,x);u=f();let E=e0(v,u),P=A.createHref(v);s.replaceState(E,"",P),o&&c&&c({action:l,location:A.location,delta:0})}function I(R){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof R=="string"?R:Cc(R);return v=v.replace(/ $/,"%20"),Me(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let A={get action(){return l},get location(){return t(i,s)},listen(R){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Z1,m),c=R,()=>{i.removeEventListener(Z1,m),c=null}},createHref(R){return e(i,R)},createURL:I,encodeLocation(R){let x=I(R);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:T,go(R){return s.go(R)}};return A}var t0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(t0||(t0={}));function BT(t,e,n){return n===void 0&&(n="/"),$T(t,e,n,!1)}function $T(t,e,n,r){let i=typeof e=="string"?Do(e):e,o=Eo(i.pathname||"/",n);if(o==null)return null;let s=y_(t);UT(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=e5(o);l=JT(s[c],u,r)}return l}function y_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=jr([r,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&(Me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),y_(o.children,e,f,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:KT(u,o.index),routesMeta:f})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of v_(o.path))i(o,s,c)}),e}function v_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=v_(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function UT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:XT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const HT=/^:[\w-]+$/,WT=3,GT=2,qT=1,QT=10,YT=-2,n0=t=>t==="*";function KT(t,e){let n=t.split("/"),r=n.length;return n.some(n0)&&(r+=YT),e&&(r+=GT),n.filter(i=>!n0(i)).reduce((i,o)=>i+(HT.test(o)?WT:o===""?qT:QT),r)}function XT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JT(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=Ac({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Ac({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:jr([o,m.pathname]),pathnameBase:i5(jr([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=jr([o,m.pathnameBase]))}return s}function Ac(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:T}=f;if(g==="*"){let A=l[m]||"";s=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const I=l[m];return T&&!I?u[g]=void 0:u[g]=(I||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function ZT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),g_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function e5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return g_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function t5(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Do(t):t;return{pathname:n?n.startsWith("/")?n:n5(n,e):e,search:o5(r),hash:s5(i)}}function n5(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ud(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r5(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Kp(t,e){let n=r5(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Do(t):(i=oa({},t),Me(!i.pathname||!i.pathname.includes("?"),Ud("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),Ud("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),Ud("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let c=t5(i,l),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),i5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,s5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function a5(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const __=["post","put","patch","delete"];new Set(__);const l5=["get",...__];new Set(l5);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(this,arguments)}const wu=D.createContext(null),w_=D.createContext(null),ir=D.createContext(null),xu=D.createContext(null),Qr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),x_=D.createContext(null);function c5(t,e){let{relative:n}=e===void 0?{}:e;Fo()||Me(!1);let{basename:r,navigator:i}=D.useContext(ir),{hash:o,pathname:s,search:l}=Eu(t,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:jr([r,s])),i.createHref({pathname:c,search:l,hash:o})}function Fo(){return D.useContext(xu)!=null}function Vo(){return Fo()||Me(!1),D.useContext(xu).location}function E_(t){D.useContext(ir).static||D.useLayoutEffect(t)}function T_(){let{isDataRoute:t}=D.useContext(Qr);return t?E5():u5()}function u5(){Fo()||Me(!1);let t=D.useContext(wu),{basename:e,future:n,navigator:r}=D.useContext(ir),{matches:i}=D.useContext(Qr),{pathname:o}=Vo(),s=JSON.stringify(Kp(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return E_(()=>{l.current=!0}),D.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=Xp(u,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:jr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function Eu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(ir),{matches:i}=D.useContext(Qr),{pathname:o}=Vo(),s=JSON.stringify(Kp(i,r.v7_relativeSplatPath));return D.useMemo(()=>Xp(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function d5(t,e){return h5(t,e)}function h5(t,e,n,r){Fo()||Me(!1);let{navigator:i}=D.useContext(ir),{matches:o}=D.useContext(Qr),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Vo(),f;if(e){var m;let R=typeof e=="string"?Do(e):e;c==="/"||(m=R.pathname)!=null&&m.startsWith(c)||Me(!1),f=R}else f=u;let g=f.pathname||"/",T=g;if(c!=="/"){let R=c.replace(/^\//,"").split("/");T="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let I=BT(t,{pathname:T}),A=y5(I&&I.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:jr([c,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?c:jr([c,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),o,n,r);return e&&A?D.createElement(xu.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Er.Pop}},A):A}function f5(){let t=x5(),e=a5(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const p5=D.createElement(f5,null);class m5 extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Qr.Provider,{value:this.props.routeContext},D.createElement(x_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g5(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(wu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Qr.Provider,{value:e},r)}function y5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Me(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:T}=n,I=m.route.loader&&g[m.route.id]===void 0&&(!T||T[m.route.id]===void 0);if(m.route.lazy||I){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,m,g)=>{let T,I=!1,A=null,R=null;n&&(T=l&&m.route.id?l[m.route.id]:void 0,A=m.route.errorElement||p5,c&&(u<0&&g===0?(I=!0,R=null):u===g&&(I=!0,R=m.route.hydrateFallbackElement||null)));let x=e.concat(s.slice(0,g+1)),v=()=>{let E;return T?E=A:I?E=R:m.route.Component?E=D.createElement(m.route.Component,null):m.route.element?E=m.route.element:E=f,D.createElement(g5,{match:m,routeContext:{outlet:f,matches:x,isDataRoute:n!=null},children:E})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?D.createElement(m5,{location:n.location,revalidation:n.revalidation,component:A,error:T,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var b_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(b_||{}),Pc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pc||{});function v5(t){let e=D.useContext(wu);return e||Me(!1),e}function _5(t){let e=D.useContext(w_);return e||Me(!1),e}function w5(t){let e=D.useContext(Qr);return e||Me(!1),e}function S_(t){let e=w5(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function x5(){var t;let e=D.useContext(x_),n=_5(Pc.UseRouteError),r=S_(Pc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function E5(){let{router:t}=v5(b_.UseNavigateStable),e=S_(Pc.UseNavigateStable),n=D.useRef(!1);return E_(()=>{n.current=!0}),D.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sa({fromRouteId:e},o)))},[t,e])}function T5(t){let{to:e,replace:n,state:r,relative:i}=t;Fo()||Me(!1);let{future:o,static:s}=D.useContext(ir),{matches:l}=D.useContext(Qr),{pathname:c}=Vo(),u=T_(),f=Xp(e,Kp(l,o.v7_relativeSplatPath),c,i==="path"),m=JSON.stringify(f);return D.useEffect(()=>u(JSON.parse(m),{replace:n,state:r,relative:i}),[u,m,i,n,r]),null}function We(t){Me(!1)}function b5(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Er.Pop,navigator:o,static:s=!1,future:l}=t;Fo()&&Me(!1);let c=e.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:c,navigator:o,static:s,future:sa({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=Do(r));let{pathname:f="/",search:m="",hash:g="",state:T=null,key:I="default"}=r,A=D.useMemo(()=>{let R=Eo(f,c);return R==null?null:{location:{pathname:R,search:m,hash:g,state:T,key:I},navigationType:i}},[c,f,m,g,T,I,i]);return A==null?null:D.createElement(ir.Provider,{value:u},D.createElement(xu.Provider,{children:n,value:A}))}function S5(t){let{children:e,location:n}=t;return d5(cf(e),n)}new Promise(()=>{});function cf(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let o=[...e,i];if(r.type===D.Fragment){n.push.apply(n,cf(r.props.children,o));return}r.type!==We&&Me(!1),!r.props.index||!r.props.children||Me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=cf(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rc(){return Rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rc.apply(this,arguments)}function k_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function k5(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function I5(t,e){return t.button===0&&(!e||e==="_self")&&!k5(t)}const C5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],A5=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],P5="6";try{window.__reactRouterVersion=P5}catch{}const R5=D.createContext({isTransitioning:!1}),j5="startTransition",r0=IE[j5];function O5(t){let{basename:e,children:n,future:r,window:i}=t,o=D.useRef();o.current==null&&(o.current=FT({window:i,v5Compat:!0}));let s=o.current,[l,c]=D.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=D.useCallback(m=>{u&&r0?r0(()=>c(m)):c(m)},[c,u]);return D.useLayoutEffect(()=>s.listen(f),[s,f]),D.createElement(b5,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const N5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L5=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:f,unstable_viewTransition:m}=e,g=k_(e,C5),{basename:T}=D.useContext(ir),I,A=!1;if(typeof u=="string"&&M5.test(u)&&(I=u,N5))try{let E=new URL(window.location.href),P=u.startsWith("//")?new URL(E.protocol+u):new URL(u),L=Eo(P.pathname,T);P.origin===E.origin&&L!=null?u=L+P.search+P.hash:A=!0}catch{}let R=c5(u,{relative:i}),x=F5(u,{replace:s,state:l,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:m});function v(E){r&&r(E),E.defaultPrevented||x(E)}return D.createElement("a",Rc({},g,{href:I||R,onClick:A||o?r:v,ref:n,target:c}))}),Jp=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:c,unstable_viewTransition:u,children:f}=e,m=k_(e,A5),g=Eu(c,{relative:m.relative}),T=Vo(),I=D.useContext(w_),{navigator:A,basename:R}=D.useContext(ir),x=I!=null&&V5(g)&&u===!0,v=A.encodeLocation?A.encodeLocation(g).pathname:g.pathname,E=T.pathname,P=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(E=E.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&R&&(P=Eo(P,R)||P);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let N=E===v||!s&&E.startsWith(v)&&E.charAt(L)==="/",w=P!=null&&(P===v||!s&&P.startsWith(v)&&P.charAt(v.length)==="/"),_={isActive:N,isPending:w,isTransitioning:x},b=N?r:void 0,S;typeof o=="function"?S=o(_):S=[o,N?"active":null,w?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(_):l;return D.createElement(L5,Rc({},m,{"aria-current":b,className:S,ref:n,style:C,to:c,unstable_viewTransition:u}),typeof f=="function"?f(_):f)});var uf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uf||(uf={}));var i0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(i0||(i0={}));function D5(t){let e=D.useContext(wu);return e||Me(!1),e}function F5(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=e===void 0?{}:e,c=T_(),u=Vo(),f=Eu(t,{relative:s});return D.useCallback(m=>{if(I5(m,n)){m.preventDefault();let g=r!==void 0?r:Cc(u)===Cc(f);c(t,{replace:g,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[u,c,f,r,i,n,t,o,s,l])}function V5(t,e){e===void 0&&(e={});let n=D.useContext(R5);n==null&&Me(!1);let{basename:r}=D5(uf.useViewTransitionState),i=Eu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Eo(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Eo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ac(i.pathname,s)!=null||Ac(i.pathname,o)!=null}var Ze=function(){return Ze=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ze.apply(this,arguments)};function aa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var xe="-ms-",Ms="-moz-",ue="-webkit-",I_="comm",Tu="rule",Zp="decl",z5="@import",C_="@keyframes",B5="@layer",A_=Math.abs,em=String.fromCharCode,df=Object.assign;function $5(t,e){return Xe(t,0)^45?(((e<<2^Xe(t,0))<<2^Xe(t,1))<<2^Xe(t,2))<<2^Xe(t,3):0}function P_(t){return t.trim()}function Wn(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function Gl(t,e,n){return t.indexOf(e,n)}function Xe(t,e){return t.charCodeAt(e)|0}function To(t,e,n){return t.slice(e,n)}function Tn(t){return t.length}function R_(t){return t.length}function Es(t,e){return e.push(t),t}function U5(t,e){return t.map(e).join("")}function o0(t,e){return t.filter(function(n){return!Wn(n,e)})}var bu=1,bo=1,j_=0,sn=0,Ue=0,zo="";function Su(t,e,n,r,i,o,s,l){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:bu,column:bo,length:s,return:"",siblings:l}}function mr(t,e){return df(Su("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Vi(t){for(;t.root;)t=mr(t.root,{children:[t]});Es(t,t.siblings)}function H5(){return Ue}function W5(){return Ue=sn>0?Xe(zo,--sn):0,bo--,Ue===10&&(bo=1,bu--),Ue}function _n(){return Ue=sn<j_?Xe(zo,sn++):0,bo++,Ue===10&&(bo=1,bu++),Ue}function fi(){return Xe(zo,sn)}function ql(){return sn}function ku(t,e){return To(zo,t,e)}function hf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G5(t){return bu=bo=1,j_=Tn(zo=t),sn=0,[]}function q5(t){return zo="",t}function Hd(t){return P_(ku(sn-1,ff(t===91?t+2:t===40?t+1:t)))}function Q5(t){for(;(Ue=fi())&&Ue<33;)_n();return hf(t)>2||hf(Ue)>3?"":" "}function Y5(t,e){for(;--e&&_n()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return ku(t,ql()+(e<6&&fi()==32&&_n()==32))}function ff(t){for(;_n();)switch(Ue){case t:return sn;case 34:case 39:t!==34&&t!==39&&ff(Ue);break;case 40:t===41&&ff(t);break;case 92:_n();break}return sn}function K5(t,e){for(;_n()&&t+Ue!==57;)if(t+Ue===84&&fi()===47)break;return"/*"+ku(e,sn-1)+"*"+em(t===47?t:_n())}function X5(t){for(;!hf(fi());)_n();return ku(t,sn)}function J5(t){return q5(Ql("",null,null,null,[""],t=G5(t),0,[0],t))}function Ql(t,e,n,r,i,o,s,l,c){for(var u=0,f=0,m=s,g=0,T=0,I=0,A=1,R=1,x=1,v=0,E="",P=i,L=o,N=r,w=E;R;)switch(I=v,v=_n()){case 40:if(I!=108&&Xe(w,m-1)==58){Gl(w+=Z(Hd(v),"&","&\f"),"&\f",A_(u?l[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:w+=Hd(v);break;case 9:case 10:case 13:case 32:w+=Q5(I);break;case 92:w+=Y5(ql()-1,7);continue;case 47:switch(fi()){case 42:case 47:Es(Z5(K5(_n(),ql()),e,n,c),c);break;default:w+="/"}break;case 123*A:l[u++]=Tn(w)*x;case 125*A:case 59:case 0:switch(v){case 0:case 125:R=0;case 59+f:x==-1&&(w=Z(w,/\f/g,"")),T>0&&Tn(w)-m&&Es(T>32?a0(w+";",r,n,m-1,c):a0(Z(w," ","")+";",r,n,m-2,c),c);break;case 59:w+=";";default:if(Es(N=s0(w,e,n,u,f,i,l,E,P=[],L=[],m,o),o),v===123)if(f===0)Ql(w,e,N,N,P,o,m,l,L);else switch(g===99&&Xe(w,3)===110?100:g){case 100:case 108:case 109:case 115:Ql(t,N,N,r&&Es(s0(t,N,N,0,0,i,l,E,i,P=[],m,L),L),i,L,m,l,r?P:L);break;default:Ql(w,N,N,N,[""],L,0,l,L)}}u=f=T=0,A=x=1,E=w="",m=s;break;case 58:m=1+Tn(w),T=I;default:if(A<1){if(v==123)--A;else if(v==125&&A++==0&&W5()==125)continue}switch(w+=em(v),v*A){case 38:x=f>0?1:(w+="\f",-1);break;case 44:l[u++]=(Tn(w)-1)*x,x=1;break;case 64:fi()===45&&(w+=Hd(_n())),g=fi(),f=m=Tn(E=w+=X5(ql())),v++;break;case 45:I===45&&Tn(w)==2&&(A=0)}}return o}function s0(t,e,n,r,i,o,s,l,c,u,f,m){for(var g=i-1,T=i===0?o:[""],I=R_(T),A=0,R=0,x=0;A<r;++A)for(var v=0,E=To(t,g+1,g=A_(R=s[A])),P=t;v<I;++v)(P=P_(R>0?T[v]+" "+E:Z(E,/&\f/g,T[v])))&&(c[x++]=P);return Su(t,e,n,i===0?Tu:l,c,u,f,m)}function Z5(t,e,n,r){return Su(t,e,n,I_,em(H5()),To(t,2,-2),0,r)}function a0(t,e,n,r,i){return Su(t,e,n,Zp,To(t,0,r),To(t,r+1,-1),r,i)}function O_(t,e,n){switch($5(t,e)){case 5103:return ue+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+t+t;case 4789:return Ms+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+t+Ms+t+xe+t+t;case 5936:switch(Xe(t,e+11)){case 114:return ue+t+xe+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ue+t+xe+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ue+t+xe+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ue+t+xe+t+t;case 6165:return ue+t+xe+"flex-"+t+t;case 5187:return ue+t+Z(t,/(\w+).+(:[^]+)/,ue+"box-$1$2"+xe+"flex-$1$2")+t;case 5443:return ue+t+xe+"flex-item-"+Z(t,/flex-|-self/g,"")+(Wn(t,/flex-|baseline/)?"":xe+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return ue+t+xe+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return ue+t+xe+Z(t,"shrink","negative")+t;case 5292:return ue+t+xe+Z(t,"basis","preferred-size")+t;case 6060:return ue+"box-"+Z(t,"-grow","")+ue+t+xe+Z(t,"grow","positive")+t;case 4554:return ue+Z(t,/([^-])(transform)/g,"$1"+ue+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+t+t;case 4200:if(!Wn(t,/flex-|baseline/))return xe+"grid-column-align"+To(t,e)+t;break;case 2592:case 3360:return xe+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Wn(r.props,/grid-\w+-end/)})?~Gl(t+(n=n[e].value),"span",0)?t:xe+Z(t,"-start","")+t+xe+"grid-row-span:"+(~Gl(n,"span",0)?Wn(n,/\d+/):+Wn(n,/\d+/)-+Wn(t,/\d+/))+";":xe+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Wn(r.props,/grid-\w+-start/)})?t:xe+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,ue+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(t)-1-e>6)switch(Xe(t,e+1)){case 109:if(Xe(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ms+(Xe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Gl(t,"stretch",0)?O_(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,c,u){return xe+i+":"+o+u+(s?xe+i+"-span:"+(l?c:+c-+o)+u:"")+t});case 4949:if(Xe(t,e+6)===121)return Z(t,":",":"+ue)+t;break;case 6444:switch(Xe(t,Xe(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Xe(t,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+xe+"$2box$3")+t;case 100:return Z(t,":",":"+xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function jc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function eb(t,e,n,r){switch(t.type){case B5:if(t.children.length)break;case z5:case Zp:return t.return=t.return||t.value;case I_:return"";case C_:return t.return=t.value+"{"+jc(t.children,r)+"}";case Tu:if(!Tn(t.value=t.props.join(",")))return""}return Tn(n=jc(t.children,r))?t.return=t.value+"{"+n+"}":""}function tb(t){var e=R_(t);return function(n,r,i,o){for(var s="",l=0;l<e;l++)s+=t[l](n,r,i,o)||"";return s}}function nb(t){return function(e){e.root||(e=e.return)&&t(e)}}function rb(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Zp:t.return=O_(t.value,t.length,n);return;case C_:return jc([mr(t,{value:Z(t.value,"@","@"+ue)})],r);case Tu:if(t.length)return U5(n=t.props,function(i){switch(Wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vi(mr(t,{props:[Z(i,/:(read-\w+)/,":"+Ms+"$1")]})),Vi(mr(t,{props:[i]})),df(t,{props:o0(n,r)});break;case"::placeholder":Vi(mr(t,{props:[Z(i,/:(plac\w+)/,":"+ue+"input-$1")]})),Vi(mr(t,{props:[Z(i,/:(plac\w+)/,":"+Ms+"$1")]})),Vi(mr(t,{props:[Z(i,/:(plac\w+)/,xe+"input-$1")]})),Vi(mr(t,{props:[i]})),df(t,{props:o0(n,r)});break}return""})}}var ib={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},So=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",N_="active",M_="data-styled-version",Iu="6.1.12",tm=`/*!sc*/
`,Oc=typeof window<"u"&&"HTMLElement"in window,ob=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),sb={},Cu=Object.freeze([]),ko=Object.freeze({});function L_(t,e,n){return n===void 0&&(n=ko),t.theme!==n.theme&&t.theme||e||n.theme}var D_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ab=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lb=/(^-|-$)/g;function l0(t){return t.replace(ab,"-").replace(lb,"")}var cb=/(a)(d)/gi,xl=52,c0=function(t){return String.fromCharCode(t+(t>25?39:97))};function pf(t){var e,n="";for(e=Math.abs(t);e>xl;e=e/xl|0)n=c0(e%xl)+n;return(c0(e%xl)+n).replace(cb,"$1-$2")}var Wd,F_=5381,to=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},V_=function(t){return to(F_,t)};function z_(t){return pf(V_(t)>>>0)}function ub(t){return t.displayName||t.name||"Component"}function Gd(t){return typeof t=="string"&&!0}var B_=typeof Symbol=="function"&&Symbol.for,$_=B_?Symbol.for("react.memo"):60115,db=B_?Symbol.for("react.forward_ref"):60112,hb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pb=((Wd={})[db]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wd[$_]=U_,Wd);function u0(t){return("type"in(e=t)&&e.type.$$typeof)===$_?U_:"$$typeof"in t?pb[t.$$typeof]:hb;var e}var mb=Object.defineProperty,gb=Object.getOwnPropertyNames,d0=Object.getOwnPropertySymbols,yb=Object.getOwnPropertyDescriptor,vb=Object.getPrototypeOf,h0=Object.prototype;function H_(t,e,n){if(typeof e!="string"){if(h0){var r=vb(e);r&&r!==h0&&H_(t,r,n)}var i=gb(e);d0&&(i=i.concat(d0(e)));for(var o=u0(t),s=u0(e),l=0;l<i.length;++l){var c=i[l];if(!(c in fb||n&&n[c]||s&&c in s||o&&c in o)){var u=yb(e,c);try{mb(t,c,u)}catch{}}}}return t}function bi(t){return typeof t=="function"}function nm(t){return typeof t=="object"&&"styledComponentId"in t}function ci(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function mf(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function la(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function gf(t,e,n){if(n===void 0&&(n=!1),!n&&!la(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=gf(t[r],e[r]);else if(la(e))for(var r in e)t[r]=gf(t[r],e[r]);return t}function rm(t,e){Object.defineProperty(t,"toString",{value:e})}function Si(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var _b=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Si(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(tm);return n},t}(),Yl=new Map,Nc=new Map,Kl=1,El=function(t){if(Yl.has(t))return Yl.get(t);for(;Nc.has(Kl);)Kl++;var e=Kl++;return Yl.set(t,e),Nc.set(e,t),e},wb=function(t,e){Kl=e+1,Yl.set(t,e),Nc.set(e,t)},xb="style[".concat(So,"][").concat(M_,'="').concat(Iu,'"]'),Eb=new RegExp("^".concat(So,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tb=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},bb=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(tm),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var c=l.match(Eb);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(wb(f,u),Tb(t,f,c[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},f0=function(t){for(var e=document.querySelectorAll(xb),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(So)!==N_&&(bb(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Sb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var W_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(So,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(So,N_),r.setAttribute(M_,Iu);var s=Sb();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},kb=function(){function t(e){this.element=W_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Si(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Ib=function(){function t(e){this.element=W_(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Cb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),p0=Oc,Ab={isServer:!Oc,useCSSOMInjection:!ob},Mc=function(){function t(e,n,r){e===void 0&&(e=ko),n===void 0&&(n={});var i=this;this.options=Ze(Ze({},Ab),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Oc&&p0&&(p0=!1,f0(this)),rm(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",u=function(m){var g=function(x){return Nc.get(x)}(m);if(g===void 0)return"continue";var T=o.names.get(g),I=s.getGroup(m);if(T===void 0||!T.size||I.length===0)return"continue";var A="".concat(So,".g").concat(m,'[id="').concat(g,'"]'),R="";T!==void 0&&T.forEach(function(x){x.length>0&&(R+="".concat(x,","))}),c+="".concat(I).concat(A,'{content:"').concat(R,'"}').concat(tm)},f=0;f<l;f++)u(f);return c}(i)})}return t.registerId=function(e){return El(e)},t.prototype.rehydrate=function(){!this.server&&Oc&&f0(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ze(Ze({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Cb(i):r?new kb(i):new Ib(i)}(this.options),new _b(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(El(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(El(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(El(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Pb=/&/g,Rb=/^\s*\/\/.*$/gm;function G_(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=G_(n.children,e)),n})}function jb(t){var e,n,r,i=ko,o=i.options,s=o===void 0?ko:o,l=i.plugins,c=l===void 0?Cu:l,u=function(g,T,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):g},f=c.slice();f.push(function(g){g.type===Tu&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Pb,n).replace(r,u))}),s.prefix&&f.push(rb),f.push(eb);var m=function(g,T,I,A){T===void 0&&(T=""),I===void 0&&(I=""),A===void 0&&(A="&"),e=A,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var R=g.replace(Rb,""),x=J5(I||T?"".concat(I," ").concat(T," { ").concat(R," }"):R);s.namespace&&(x=G_(x,s.namespace));var v=[];return jc(x,tb(f.concat(nb(function(E){return v.push(E)})))),v};return m.hash=c.length?c.reduce(function(g,T){return T.name||Si(15),to(g,T.name)},F_).toString():"",m}var Ob=new Mc,yf=jb(),q_=ge.createContext({shouldForwardProp:void 0,styleSheet:Ob,stylis:yf});q_.Consumer;ge.createContext(void 0);function vf(){return D.useContext(q_)}var Nb=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yf);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,rm(this,function(){throw Si(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=yf),this.name+e.hash},t}(),Mb=function(t){return t>="A"&&t<="Z"};function m0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Mb(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Q_=function(t){return t==null||t===!1||t===""},Y_=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Q_(o)&&(Array.isArray(o)&&o.isCss||bi(o)?r.push("".concat(m0(i),":"),o,";"):la(o)?r.push.apply(r,aa(aa(["".concat(i," {")],Y_(o),!1),["}"],!1)):r.push("".concat(m0(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ib||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Or(t,e,n,r){if(Q_(t))return[];if(nm(t))return[".".concat(t.styledComponentId)];if(bi(t)){if(!bi(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Or(i,e,n,r)}var o;return t instanceof Nb?n?(t.inject(n,r),[t.getName(r)]):[t]:la(t)?Y_(t):Array.isArray(t)?Array.prototype.concat.apply(Cu,t.map(function(s){return Or(s,e,n,r)})):[t.toString()]}function K_(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(bi(n)&&!nm(n))return!1}return!0}var Lb=V_(Iu),Db=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&K_(e),this.componentId=n,this.baseHash=to(Lb,n),this.baseStyle=r,Mc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ci(i,this.staticRulesId);else{var o=mf(Or(this.rules,e,n,r)),s=pf(to(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=ci(i,s),this.staticRulesId=s}else{for(var c=to(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")u+=m;else if(m){var g=mf(Or(m,e,n,r));c=to(c,g+f),u+=g}}if(u){var T=pf(c>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(u,".".concat(T),void 0,this.componentId)),i=ci(i,T)}}return i},t}(),ca=ge.createContext(void 0);ca.Consumer;function Fb(t){var e=ge.useContext(ca),n=D.useMemo(function(){return function(r,i){if(!r)throw Si(14);if(bi(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Si(8);return i?Ze(Ze({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?ge.createElement(ca.Provider,{value:n},t.children):null}var qd={};function Vb(t,e,n){var r=nm(t),i=t,o=!Gd(t),s=e.attrs,l=s===void 0?Cu:s,c=e.componentId,u=c===void 0?function(P,L){var N=typeof P!="string"?"sc":l0(P);qd[N]=(qd[N]||0)+1;var w="".concat(N,"-").concat(z_(Iu+N+qd[N]));return L?"".concat(L,"-").concat(w):w}(e.displayName,e.parentComponentId):c,f=e.displayName,m=f===void 0?function(P){return Gd(P)?"styled.".concat(P):"Styled(".concat(ub(P),")")}(t):f,g=e.displayName&&e.componentId?"".concat(l0(e.displayName),"-").concat(e.componentId):e.componentId||u,T=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;I=function(P,L){return A(P,L)&&R(P,L)}}else I=A}var x=new Db(n,g,r?i.componentStyle:void 0);function v(P,L){return function(N,w,_){var b=N.attrs,S=N.componentStyle,C=N.defaultProps,j=N.foldedComponentIds,k=N.styledComponentId,nt=N.target,an=ge.useContext(ca),Yr=vf(),Ft=N.shouldForwardProp||Yr.shouldForwardProp,U=L_(w,an,C)||ko,q=function(At,xt,Pt){for(var Kr,Dn=Ze(Ze({},xt),{className:void 0,theme:Pt}),sr=0;sr<At.length;sr+=1){var Fn=bi(Kr=At[sr])?Kr(Dn):Kr;for(var Jt in Fn)Dn[Jt]=Jt==="className"?ci(Dn[Jt],Fn[Jt]):Jt==="style"?Ze(Ze({},Dn[Jt]),Fn[Jt]):Fn[Jt]}return xt.className&&(Dn.className=ci(Dn.className,xt.className)),Dn}(b,w,U),K=q.as||nt,de={};for(var ne in q)q[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&q.theme===U||(ne==="forwardedAs"?de.as=q.forwardedAs:Ft&&!Ft(ne,K)||(de[ne]=q[ne]));var be=function(At,xt){var Pt=vf(),Kr=At.generateAndInjectStyles(xt,Pt.styleSheet,Pt.stylis);return Kr}(S,q),Vt=ci(j,k);return be&&(Vt+=" "+be),q.className&&(Vt+=" "+q.className),de[Gd(K)&&!D_.has(K)?"class":"className"]=Vt,de.ref=_,D.createElement(K,de)}(E,P,L)}v.displayName=m;var E=ge.forwardRef(v);return E.attrs=T,E.componentStyle=x,E.displayName=m,E.shouldForwardProp=I,E.foldedComponentIds=r?ci(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=g,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(L){for(var N=[],w=1;w<arguments.length;w++)N[w-1]=arguments[w];for(var _=0,b=N;_<b.length;_++)gf(L,b[_],!0);return L}({},i.defaultProps,P):P}}),rm(E,function(){return".".concat(E.styledComponentId)}),o&&H_(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function g0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var y0=function(t){return Object.assign(t,{isCss:!0})};function X_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(bi(t)||la(t))return y0(Or(g0(Cu,aa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Or(r):y0(Or(g0(r,e)))}function _f(t,e,n){if(n===void 0&&(n=ko),!e)throw Si(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,X_.apply(void 0,aa([i],o,!1)))};return r.attrs=function(i){return _f(t,e,Ze(Ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return _f(t,e,Ze(Ze({},n),i))},r}var J_=function(t){return _f(Vb,t)},X=J_;D_.forEach(function(t){X[t]=J_(t)});var zb=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=K_(e),Mc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(mf(Or(this.rules,n,r,i)),""),s=this.componentId+e;r.insertRules(s,s,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Mc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function Bb(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=X_.apply(void 0,aa([t],e,!1)),i="sc-global-".concat(z_(JSON.stringify(r))),o=new zb(r,i),s=function(c){var u=vf(),f=ge.useContext(ca),m=ge.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(m,c,u.styleSheet,f,u.stylis),ge.useLayoutEffect(function(){if(!u.styleSheet.server)return l(m,c,u.styleSheet,f,u.stylis),function(){return o.removeStyles(m,u.styleSheet)}},[m,c,u.styleSheet,f,u.stylis]),null};function l(c,u,f,m,g){if(o.isStatic)o.renderStyles(c,sb,f,g);else{var T=Ze(Ze({},u),{theme:L_(u,m,s.defaultProps)});o.renderStyles(c,T,f,g)}}return ge.memo(s)}const $b=Bb`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  background-color: #FFFFFF;
  scroll-behavior: smooth; /* Smooth scrolling */
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  scroll-behavior: smooth; /* Smooth scrolling */
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
  background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
  background: #fff;
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

h1 {
  color: ${({theme:t})=>t.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
  color: ${({theme:t})=>t.colors.heading};
  font-size: 4.4rem;
  font-weight: 500;
  white-space: normal;
  text-align: center;
}

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({theme:t})=>t.colors.text};
  opacity: 0.7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight: 400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
}

.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}

input, textarea {
  max-width: 50rem;
  color: ${({theme:t})=>t.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  text-transform: uppercase;
  box-shadow: ${({theme:t})=>t.colors.shadowSupport};
}

input[type="submit"] {
  max-width: 16rem;
  margin-top: 2rem;
  background-color: ${({theme:t})=>t.colors.btn};
  color: ${({theme:t})=>t.colors.white};
  padding: 1.4rem 2.2rem;
  border-style: solid;
  border-width: 0.1rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: ${({theme:t})=>t.media.tab}) {
  .container {
    padding: 0 3.2rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({theme:t})=>t.media.mobile}) {
  html {
    font-size: 50%;
  }

  .grid {
    gap: 3.2rem;
  }

  .grid-two-column, .grid-three-column, .grid-four-column {
    grid-template-columns: 1fr;
  }
}
`;var Z_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v0=ge.createContext&&ge.createContext(Z_),Ub=["attr","size","title"];function Hb(t,e){if(t==null)return{};var n=Wb(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Wb(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Lc(){return Lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lc.apply(this,arguments)}function _0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Dc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_0(Object(n),!0).forEach(function(r){Gb(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gb(t,e,n){return e=qb(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qb(t){var e=Qb(t,"string");return typeof e=="symbol"?e:e+""}function Qb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ew(t){return t&&t.map((e,n)=>ge.createElement(e.tag,Dc({key:n},e.attr),ew(e.child)))}function fe(t){return e=>ge.createElement(Yb,Lc({attr:Dc({},t.attr)},e),ew(t.child))}function Yb(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=Hb(t,Ub),l=i||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),ge.createElement("svg",Lc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:Dc(Dc({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ge.createElement("title",null,o),t.children)};return v0!==void 0?ge.createElement(v0.Consumer,null,n=>e(n)):e(Z_)}function Kb(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z",fill:"currentColor"},child:[]}]})(t)}function Xb(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"},child:[]}]})(t)}const Jb=()=>{const[t,e]=D.useState(!1);return h.jsxs(Zb,{role:"navigation","aria-label":"Main Navigation",children:[h.jsx("div",{className:`overlay ${t?"active":""}`,onClick:()=>e(!1)}),h.jsxs("div",{className:"menuIcon",children:[h.jsx("div",{className:"mobile-navbar-btn","aria-label":t?"Close menu":"Open menu","aria-expanded":t,onClick:()=>e(!t),children:t?h.jsx(Kb,{className:"mobile-nav-icon close-icon","aria-hidden":"true"}):h.jsx(Xb,{className:"mobile-nav-icon","aria-hidden":"true"})}),h.jsx("ul",{className:`navbar-list ${t?"active":""}`,role:"menubar",children:["Home","About","Contact","Blog","FAQ","Franchise"].map((n,r)=>h.jsx("li",{role:"none",children:h.jsx(Jp,{className:"navbar-link",onClick:()=>e(!1),to:`/${n.toLowerCase()}`,role:"menuitem","aria-label":n,children:n})},r))})]})]})},Zb=X.nav`
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #252525;
    width: 100%;
    position: relative;
    z-index: 1001;
  }

  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          transition: color 0.3s ease;
        }

        &:hover,
        &:active {
          color: #ffcc00;
        }
      }
    }
  }

  /* Hidden by default in desktop view */
  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 3.5rem;
      cursor: pointer;
      color: #febb12;
      transition: color 0.3s ease;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001;
    }
  }

  /* Overlay effect */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* Show hamburger menu when screen size is 1000px or smaller */
  @media (max-width: 1000px) {
    .mobile-navbar-btn {
      display: block;
    }

    /* Slide-in menu effect */
    .navbar-list {
      position: fixed;
      top: 0;
      right: -100%;
      width: 75%;
      height: 100%;
      background-color: rgba(37, 37, 37, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      transform: translateX(0);
      transition: right 0.4s ease-in-out;
      z-index: 10000;
    }

    .navbar-list.active {
      right: 0;
    }

    /* Styling for navbar links in mobile view */
    .navbar-link {
      font-size: 2.5rem;
      color: #ffcc00;
      text-transform: uppercase;
      padding: 1rem 2rem;
      display: block;
      width: 100%;
      text-align: center;
      transition: background 0.3s ease;
    }

    .navbar-link:hover {
      background: rgba(255, 204, 0, 0.2);
    }

    /* Menu icon */
    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`,eS=()=>h.jsxs(tS,{children:[h.jsx(Jp,{to:"/",children:h.jsxs(nS,{children:[h.jsx(rS,{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png",alt:"Logo"}),h.jsxs(iS,{children:[h.jsx(oS,{children:"STOCK"}),h.jsx(aS,{}),h.jsx(sS,{children:"ARCHERY"})]})]})}),h.jsx(Jb,{})]}),tS=X.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: rgba(37, 37, 37, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    padding: 0 1.6rem; /* Reduce padding on mobile */
  }
`,nS=X.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    margin-left: 0; /* Ensure no margin on mobile */
  }
`,rS=X.img`
  width: 50px; /* Increase size if needed */
  height: 50px; /* Increase size if needed */
  border-radius: 50%; /* Ensure it’s perfectly round */
  margin-right: 0.5rem; /* Space between logo and text */
  object-fit: cover; /* Ensure the image covers the circle properly */
  
  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    width: 50px; /* Adjust size on mobile if needed */
    height: 50px; /* Adjust size on mobile if needed */
    margin-right: 0.5rem; /* Reduce space on mobile */
  }
`,iS=X.div`
  font-size: 3rem; /* Adjust size as needed */
  font-weight: bold; /* You can choose the desired font weight */
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    margin-left: 1.5rem; /* Move text to the right on mobile */
  }
`,oS=X.span`
  color: #fff; /* White color */
`,sS=X.span`
  color: #febb12; /* Yellow color */
`,aS=X.span`
  margin-left: 0.5rem; /* Adjust the spacing as needed */
`,w0=()=>{};let im={},tw={},nw=null,rw={mark:w0,measure:w0};try{typeof window<"u"&&(im=window),typeof document<"u"&&(tw=document),typeof MutationObserver<"u"&&(nw=MutationObserver),typeof performance<"u"&&(rw=performance)}catch{}const{userAgent:x0=""}=im.navigator||{},Vr=im,Te=tw,E0=nw,Tl=rw;Vr.document;const or=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",iw=~x0.indexOf("MSIE")||~x0.indexOf("Trident/");var Ae="classic",ow="duotone",Gt="sharp",qt="sharp-duotone",lS=[Ae,ow,Gt,qt],cS={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},T0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},uS=["kit"],dS=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,hS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fS={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},pS={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},mS={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},gS={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},yS={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},vS={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},sw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},_S=["solid","regular","light","thin","duotone","brands"],aw=[1,2,3,4,5,6,7,8,9,10],wS=aw.concat([11,12,13,14,15,16,17,18,19,20]),Ts={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xS=[...Object.keys(gS),..._S,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ts.GROUP,Ts.SWAP_OPACITY,Ts.PRIMARY,Ts.SECONDARY].concat(aw.map(t=>"".concat(t,"x"))).concat(wS.map(t=>"w-".concat(t))),ES={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},TS={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},bS={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},b0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const er="___FONT_AWESOME___",wf=16,lw="fa",cw="svg-inline--fa",ki="data-fa-i2svg",xf="data-fa-pseudo-element",SS="data-fa-pseudo-element-pending",om="data-prefix",sm="data-icon",S0="fontawesome-i2svg",kS="async",IS=["HTML","HEAD","STYLE","SCRIPT"],uw=(()=>{try{return!0}catch{return!1}})(),dw=[Ae,Gt,qt];function Ca(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ae]}})}const hw={...sw};hw[Ae]={...sw[Ae],...T0.kit,...T0["kit-duotone"]};const pi=Ca(hw),Ef={...vS};Ef[Ae]={...Ef[Ae],...b0.kit,...b0["kit-duotone"]};const ua=Ca(Ef),Tf={...yS};Tf[Ae]={...Tf[Ae],...bS.kit};const mi=Ca(Tf),bf={...mS};bf[Ae]={...bf[Ae],...TS.kit};const CS=Ca(bf),AS=dS,fw="fa-layers-text",PS=hS,RS={...cS};Ca(RS);const jS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qd=Ts,Io=new Set;Object.keys(ua[Ae]).map(Io.add.bind(Io));Object.keys(ua[Gt]).map(Io.add.bind(Io));Object.keys(ua[qt]).map(Io.add.bind(Io));const OS=[...uS,...xS],Ls=Vr.FontAwesomeConfig||{};function NS(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function MS(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Te&&typeof Te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=MS(NS(n));i!=null&&(Ls[r]=i)});const pw={styleDefault:"solid",familyDefault:"classic",cssPrefix:lw,replacementClass:cw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ls.familyPrefix&&(Ls.cssPrefix=Ls.familyPrefix);const Co={...pw,...Ls};Co.autoReplaceSvg||(Co.observeMutations=!1);const W={};Object.keys(pw).forEach(t=>{Object.defineProperty(W,t,{enumerable:!0,set:function(e){Co[t]=e,Ds.forEach(n=>n(W))},get:function(){return Co[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(t){Co.cssPrefix=t,Ds.forEach(e=>e(W))},get:function(){return Co.cssPrefix}});Vr.FontAwesomeConfig=W;const Ds=[];function LS(t){return Ds.push(t),()=>{Ds.splice(Ds.indexOf(t),1)}}const dr=wf,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function DS(t){if(!t||!or)return;const e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Te.head.insertBefore(e,r),t}const FS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function da(){let t=12,e="";for(;t-- >0;)e+=FS[Math.random()*62|0];return e}function Bo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function am(t){return t.classList?Bo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function mw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function VS(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(mw(t[n]),'" '),"").trim()}function Au(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function lm(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function zS(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function BS(t){let{transform:e,width:n=wf,height:r=wf,startCentered:i=!1}=t,o="";return i&&iw?o+="translate(".concat(e.x/dr-n/2,"em, ").concat(e.y/dr-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/dr,"em), calc(-50% + ").concat(e.y/dr,"em)) "):o+="translate(".concat(e.x/dr,"em, ").concat(e.y/dr,"em) "),o+="scale(".concat(e.size/dr*(e.flipX?-1:1),", ").concat(e.size/dr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var $S=`:root, :host {
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
}`;function gw(){const t=lw,e=cw,n=W.cssPrefix,r=W.replacementClass;let i=$S;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let k0=!1;function Yd(){W.autoAddCss&&!k0&&(DS(gw()),k0=!0)}var US={mixout(){return{dom:{css:gw,insertCss:Yd}}},hooks(){return{beforeDOMElementCreation(){Yd()},beforeI2svg(){Yd()}}}};const tr=Vr||{};tr[er]||(tr[er]={});tr[er].styles||(tr[er].styles={});tr[er].hooks||(tr[er].hooks={});tr[er].shims||(tr[er].shims=[]);var Cn=tr[er];const yw=[],vw=function(){Te.removeEventListener("DOMContentLoaded",vw),Fc=1,yw.map(t=>t())};let Fc=!1;or&&(Fc=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Fc||Te.addEventListener("DOMContentLoaded",vw));function HS(t){or&&(Fc?setTimeout(t,0):yw.push(t))}function Aa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?mw(t):"<".concat(e," ").concat(VS(n),">").concat(r.map(Aa).join(""),"</").concat(e,">")}function I0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Kd=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,c,u,f;for(r===void 0?(c=1,f=e[o[0]]):(c=0,f=r);c<s;c++)u=o[c],f=l(f,e[u],u,e);return f};function WS(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Sf(t){const e=WS(t);return e.length===1?e[0].toString(16):null}function GS(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function C0(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function kf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=C0(e);typeof Cn.hooks.addPack=="function"&&!r?Cn.hooks.addPack(t,C0(e)):Cn.styles[t]={...Cn.styles[t]||{},...i},t==="fas"&&kf("fa",e)}const{styles:oi,shims:qS}=Cn,QS={[Ae]:Object.values(mi[Ae]),[Gt]:Object.values(mi[Gt]),[qt]:Object.values(mi[qt])};let cm=null,_w={},ww={},xw={},Ew={},Tw={};const YS={[Ae]:Object.keys(pi[Ae]),[Gt]:Object.keys(pi[Gt]),[qt]:Object.keys(pi[qt])};function KS(t){return~OS.indexOf(t)}function XS(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!KS(i)?i:null}const bw=()=>{const t=r=>Kd(oi,(i,o,s)=>(i[s]=Kd(o,r,{}),i),{});_w=t((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),ww=t((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Tw=t((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const e="far"in oi||W.autoFetchSvg,n=Kd(qS,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});xw=n.names,Ew=n.unicodes,cm=Pu(W.styleDefault,{family:W.familyDefault})};LS(t=>{cm=Pu(t.styleDefault,{family:W.familyDefault})});bw();function um(t,e){return(_w[t]||{})[e]}function JS(t,e){return(ww[t]||{})[e]}function Tr(t,e){return(Tw[t]||{})[e]}function Sw(t){return xw[t]||{prefix:null,iconName:null}}function ZS(t){const e=Ew[t],n=um("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zr(){return cm}const dm=()=>({prefix:null,iconName:null,rest:[]});function Pu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ae}=e,r=pi[n][t],i=ua[n][t]||ua[n][r],o=t in Cn.styles?t:null;return i||o||null}const e6={[Ae]:Object.keys(mi[Ae]),[Gt]:Object.keys(mi[Gt]),[qt]:Object.keys(mi[qt])};function Ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ae]:"".concat(W.cssPrefix,"-").concat(Ae),[Gt]:"".concat(W.cssPrefix,"-").concat(Gt),[qt]:"".concat(W.cssPrefix,"-").concat(qt)};let i=null,o=Ae;const s=lS.filter(c=>c!==ow);s.forEach(c=>{(t.includes(r[c])||t.some(u=>e6[c].includes(u)))&&(o=c)});const l=t.reduce((c,u)=>{const f=XS(W.cssPrefix,u);if(oi[u]?(u=QS[o].includes(u)?CS[o][u]:u,i=u,c.prefix=u):YS[o].indexOf(u)>-1?(i=u,c.prefix=Pu(u,{family:o})):f?c.iconName=f:u!==W.replacementClass&&!s.some(m=>u===r[m])&&c.rest.push(u),!n&&c.prefix&&c.iconName){const m=i==="fa"?Sw(c.iconName):{},g=Tr(c.prefix,c.iconName);m.prefix&&(i=null),c.iconName=m.iconName||g||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!oi.far&&oi.fas&&!W.autoFetchSvg&&(c.prefix="fas")}return c},dm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Gt&&(oi.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=Tr(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===qt&&(oi.fasds||W.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Tr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=zr()||"fas"),l}class t6{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},kf(o,i[o]);const s=mi[Ae][o];s&&kf(s,i[o]),bw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],c=l[2];e[o]||(e[o]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[o][u]=l)}),e[o][s]=l}),e}}let A0=[],no={};const uo={},n6=Object.keys(uo);function r6(t,e){let{mixoutsTo:n}=e;return A0=t,no={},Object.keys(uo).forEach(r=>{n6.indexOf(r)===-1&&delete uo[r]}),A0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{no[s]||(no[s]=[]),no[s].push(o[s])})}r.provides&&r.provides(uo)}),n}function If(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(no[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function Ii(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(no[t]||[]).forEach(o=>{o.apply(null,n)})}function Br(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[t]?uo[t].apply(null,e):void 0}function Cf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||zr();if(e)return e=Tr(n,e)||e,I0(kw.definitions,n,e)||I0(Cn.styles,n,e)}const kw=new t6,i6=()=>{W.autoReplaceSvg=!1,W.observeMutations=!1,Ii("noAuto")},o6={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return or?(Ii("beforeI2svg",t),Br("pseudoElements2svg",t),Br("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,HS(()=>{a6({autoReplaceSvgRoot:e}),Ii("watch",t)})}},s6={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Pu(t[0]);return{prefix:n,iconName:Tr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(W.cssPrefix,"-"))>-1||t.match(AS))){const e=Ru(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||zr(),iconName:Tr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=zr();return{prefix:e,iconName:Tr(e,t)||t}}}},Xt={noAuto:i6,config:W,dom:o6,parse:s6,library:kw,findIconDefinition:Cf,toHtml:Aa},a6=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Te}=t;(Object.keys(Cn.styles).length>0||W.autoFetchSvg)&&or&&W.autoReplaceSvg&&Xt.dom.i2svg({node:e})};function ju(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Aa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!or)return;const n=Te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function l6(t){let{children:e,main:n,mask:r,attributes:i,styles:o,transform:s}=t;if(lm(s)&&n.found&&!r.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};i.style=Au({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function c6(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function hm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:c,titleId:u,extra:f,watchable:m=!1}=t,{width:g,height:T}=n.found?n:e,I=r==="fak",A=[W.replacementClass,i?"".concat(W.cssPrefix,"-").concat(i):""].filter(L=>f.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(f.classes).join(" ");let R={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(T)}};const x=I&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/T*16*.0625,"em")}:{};m&&(R.attributes[ki]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||da())},children:[l]}),delete R.attributes.title);const v={...R,prefix:r,iconName:i,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:{...x,...f.styles}},{children:E,attributes:P}=n.found&&e.found?Br("generateAbstractMask",v)||{children:[],attributes:{}}:Br("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=E,v.attributes=P,s?c6(v):l6(v)}function P0(t){const{content:e,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=t,c={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(c[ki]="");const u={...s.styles};lm(i)&&(u.transform=BS({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=Au(u);f.length>0&&(c.style=f);const m=[];return m.push({tag:"span",attributes:c,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function u6(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Au(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Xd}=Cn;function Af(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Qd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Qd.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Qd.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const d6={found:!1,width:512,height:512};function h6(t,e){!uw&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Pf(t,e){let n=e;return e==="fa"&&W.styleDefault!==null&&(e=zr()),new Promise((r,i)=>{if(n==="fa"){const o=Sw(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Xd[e]&&Xd[e][t]){const o=Xd[e][t];return r(Af(o))}h6(t,e),r({...d6,icon:W.showMissingIcons&&t?Br("missingIconAbstract")||{}:{}})})}const R0=()=>{},Rf=W.measurePerformance&&Tl&&Tl.mark&&Tl.measure?Tl:{mark:R0,measure:R0},bs='FA "6.6.0"',f6=t=>(Rf.mark("".concat(bs," ").concat(t," begins")),()=>Iw(t)),Iw=t=>{Rf.mark("".concat(bs," ").concat(t," ends")),Rf.measure("".concat(bs," ").concat(t),"".concat(bs," ").concat(t," begins"),"".concat(bs," ").concat(t," ends"))};var fm={begin:f6,end:Iw};const Xl=()=>{};function j0(t){return typeof(t.getAttribute?t.getAttribute(ki):null)=="string"}function p6(t){const e=t.getAttribute?t.getAttribute(om):null,n=t.getAttribute?t.getAttribute(sm):null;return e&&n}function m6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function g6(){return W.autoReplaceSvg===!0?Jl.replace:Jl[W.autoReplaceSvg]||Jl.replace}function y6(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function v6(t){return Te.createElement(t)}function Cw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?y6:v6}=e;if(typeof t=="string")return Te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(Cw(o,{ceFn:n}))}),r}function _6(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Jl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Cw(n),e)}),e.getAttribute(ki)===null&&W.keepOriginalSource){let n=Te.createComment(_6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~am(e).indexOf(W.replacementClass))return Jl.replace(t);const r=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===W.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Aa(o)).join(`
`);e.setAttribute(ki,""),e.innerHTML=i}};function O0(t){t()}function Aw(t,e){const n=typeof e=="function"?e:Xl;if(t.length===0)n();else{let r=O0;W.mutateApproach===kS&&(r=Vr.requestAnimationFrame||O0),r(()=>{const i=g6(),o=fm.begin("mutate");t.map(i),o(),n()})}}let pm=!1;function Pw(){pm=!0}function jf(){pm=!1}let Vc=null;function N0(t){if(!E0||!W.observeMutations)return;const{treeCallback:e=Xl,nodeCallback:n=Xl,pseudoElementsCallback:r=Xl,observeMutationsRoot:i=Te}=t;Vc=new E0(o=>{if(pm)return;const s=zr();Bo(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!j0(l.addedNodes[0])&&(W.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&W.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&j0(l.target)&&~jS.indexOf(l.attributeName))if(l.attributeName==="class"&&p6(l.target)){const{prefix:c,iconName:u}=Ru(am(l.target));l.target.setAttribute(om,c||s),u&&l.target.setAttribute(sm,u)}else m6(l.target)&&n(l.target)})}),or&&Vc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function w6(){Vc&&Vc.disconnect()}function x6(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function E6(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ru(am(t));return i.prefix||(i.prefix=zr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=JS(i.prefix,t.innerText)||um(i.prefix,Sf(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function T6(t){const e=Bo(t.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||da()):(e["aria-hidden"]="true",e.focusable="false")),e}function b6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function M0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=E6(t),o=T6(t),s=If("parseNodeAttributes",{},t);let l=e.styleParser?x6(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:S6}=Cn;function Rw(t){const e=W.autoReplaceSvg==="nest"?M0(t,{styleParser:!1}):M0(t);return~e.extra.classes.indexOf(fw)?Br("generateLayersText",t,e):Br("generateSvgReplacementMutation",t,e)}let On=new Set;dw.map(t=>{On.add("fa-".concat(t))});Object.keys(pi[Ae]).map(On.add.bind(On));Object.keys(pi[Gt]).map(On.add.bind(On));Object.keys(pi[qt]).map(On.add.bind(On));On=[...On];function L0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!or)return Promise.resolve();const n=Te.documentElement.classList,r=f=>n.add("".concat(S0,"-").concat(f)),i=f=>n.remove("".concat(S0,"-").concat(f)),o=W.autoFetchSvg?On:dw.map(f=>"fa-".concat(f)).concat(Object.keys(S6));o.includes("fa")||o.push("fa");const s=[".".concat(fw,":not([").concat(ki,"])")].concat(o.map(f=>".".concat(f,":not([").concat(ki,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Bo(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const c=fm.begin("onTree"),u=l.reduce((f,m)=>{try{const g=Rw(m);g&&f.push(g)}catch(g){uw||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise((f,m)=>{Promise.all(u).then(g=>{Aw(g,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),f()})}).catch(g=>{c(),m(g)})})}function k6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rw(t).then(n=>{n&&Aw([n],e)})}function I6(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Cf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Cf(i||{})),t(r,{...n,mask:i})}}const C6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=In,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:c=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:T}=t;return ju({type:"icon",...t},()=>(Ii("beforeDOMElementCreation",{iconDefinition:t,params:e}),W.autoA11y&&(s?u["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(l||da()):(u["aria-hidden"]="true",u.focusable="false")),hm({icons:{main:Af(T),mask:i?Af(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:{...In,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:u,styles:f,classes:c}})))};var A6={mixout(){return{icon:I6(C6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=L0,t.nodeCallback=k6,t}}},provides(t){t.i2svg=function(e){const{node:n=Te,callback:r=()=>{}}=e;return L0(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:c,mask:u,maskId:f,extra:m}=n;return new Promise((g,T)=>{Promise.all([Pf(r,s),u.iconName?Pf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[A,R]=I;g([e,hm({icons:{main:A,mask:R},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:i,titleId:o,extra:m,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:o,styles:s}=e;const l=Au(s);l.length>0&&(r.style=l);let c;return lm(o)&&(c=Br("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},P6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ju({type:"layer"},()=>{Ii("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},R6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=e;return ju({type:"counter",content:t},()=>(Ii("beforeDOMElementCreation",{content:t,params:e}),u6({content:t.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(W.cssPrefix,"-layers-counter"),...r]}})))}}}},j6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=In,title:r=null,classes:i=[],attributes:o={},styles:s={}}=e;return ju({type:"text",content:t},()=>(Ii("beforeDOMElementCreation",{content:t,params:e}),P0({content:t,transform:{...In,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(W.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(iw){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/c,l=u.height/c}return W.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,P0({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const O6=new RegExp('"',"ug"),D0=[1105920,1112319],F0={FontAwesome:{normal:"fas",400:"fas"},...pS,...fS,...ES},Of=Object.keys(F0).reduce((t,e)=>(t[e.toLowerCase()]=F0[e],t),{}),N6=Object.keys(Of).reduce((t,e)=>{const n=Of[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function M6(t){const e=t.replace(O6,""),n=GS(e,0),r=n>=D0[0]&&n<=D0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Sf(i?e[0]:e),isSecondary:r||i}}function L6(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Of[n]||{})[i]||N6[n]}function V0(t,e){const n="".concat(SS).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const s=Bo(t.children).filter(g=>g.getAttribute(xf)===e)[0],l=Vr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(PS),f=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&m!=="none"&&m!==""){const g=l.getPropertyValue("content");let T=L6(c,f);const{value:I,isSecondary:A}=M6(g),R=u[0].startsWith("FontAwesome");let x=um(T,I),v=x;if(R){const E=ZS(I);E.iconName&&E.prefix&&(x=E.iconName,T=E.prefix)}if(x&&!A&&(!s||s.getAttribute(om)!==T||s.getAttribute(sm)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const E=b6(),{extra:P}=E;P.attributes[xf]=e,Pf(x,T).then(L=>{const N=hm({...E,icons:{main:L,mask:dm()},prefix:T,iconName:v,extra:P,watchable:!0}),w=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=N.map(_=>Aa(_)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function D6(t){return Promise.all([V0(t,"::before"),V0(t,"::after")])}function F6(t){return t.parentNode!==document.head&&!~IS.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function z0(t){if(or)return new Promise((e,n)=>{const r=Bo(t.querySelectorAll("*")).filter(F6).map(D6),i=fm.begin("searchPseudoElements");Pw(),Promise.all(r).then(()=>{i(),jf(),e()}).catch(()=>{i(),jf(),n()})})}var V6={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=z0,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Te}=e;W.searchPseudoElements&&z0(n)}}};let B0=!1;var z6={mixout(){return{dom:{unwatch(){Pw(),B0=!0}}}},hooks(){return{bootstrap(){N0(If("mutationObserverCallbacks",{}))},noAuto(){w6()},watch(t){const{observeMutationsRoot:e}=t;B0?jf():N0(If("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const $0=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var B6={mixout(){return{parse:{transform:t=>$0(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=$0(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:o}=e;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:m};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Jd={x:0,y:0,width:"100%",height:"100%"};function U0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $6(t){return t.tag==="g"?t.children:[t]}var U6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ru(n.split(" ").map(i=>i.trim())):dm();return r.prefix||(r.prefix=zr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=e;const{width:c,icon:u}=i,{width:f,icon:m}=o,g=zS({transform:l,containerWidth:f,iconWidth:c}),T={tag:"rect",attributes:{...Jd,fill:"white"}},I=u.children?{children:u.children.map(U0)}:{},A={tag:"g",attributes:{...g.inner},children:[U0({tag:u.tag,attributes:{...u.attributes,...g.path},...I})]},R={tag:"g",attributes:{...g.outer},children:[A]},x="mask-".concat(s||da()),v="clip-".concat(s||da()),E={tag:"mask",attributes:{...Jd,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[T,R]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:$6(m)},E]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")"),...Jd}}),{children:n,attributes:r}}}},H6={provides(t){let e=!1;Vr.matchMedia&&(e=Vr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},W6={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},G6=[US,A6,P6,R6,j6,V6,z6,B6,U6,H6,W6];r6(G6,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;const Nf=Xt.parse;Xt.findIconDefinition;Xt.toHtml;const q6=Xt.icon;Xt.layer;Xt.text;Xt.counter;var jw={exports:{}},Q6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y6=Q6,K6=Y6;function Ow(){}function Nw(){}Nw.resetWarningCache=Ow;var X6=function(){function t(r,i,o,s,l,c){if(c!==K6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Nw,resetWarningCache:Ow};return n.PropTypes=n,n};jw.exports=X6();var Pa=jw.exports;const G=Ea(Pa);function H0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?H0(Object(n),!0).forEach(function(r){ro(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zc(t){"@babel/helpers - typeof";return zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zc(t)}function ro(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Z6(t,e){if(t==null)return{};var n=J6(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Mf(t){return ek(t)||tk(t)||nk(t)||rk()}function ek(t){if(Array.isArray(t))return Lf(t)}function tk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nk(t,e){if(t){if(typeof t=="string")return Lf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lf(t,e)}}function Lf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ik(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,c=t.spin,u=t.spinPulse,f=t.spinReverse,m=t.pulse,g=t.fixedWidth,T=t.inverse,I=t.border,A=t.listItem,R=t.flip,x=t.size,v=t.rotation,E=t.pull,P=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":g,"fa-inverse":T,"fa-border":I,"fa-li":A,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},ro(e,"fa-".concat(x),typeof x<"u"&&x!==null),ro(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),ro(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),ro(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(P).map(function(L){return P[L]?L:null}).filter(function(L){return L})}function ok(t){return t=t-0,t===t}function Mw(t){return ok(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var sk=["style"];function ak(t){return t.charAt(0).toUpperCase()+t.slice(1)}function lk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Mw(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[ak(i)]=o:e[i]=o,e},{})}function Lw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Lw(t,c)}),i=Object.keys(e.attributes||{}).reduce(function(c,u){var f=e.attributes[u];switch(u){case"class":c.attrs.className=f,delete e.attributes.class;break;case"style":c.attrs.style=lk(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[Mw(u)]=f}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=Z6(n,sk);return i.attrs.style=bn(bn({},i.attrs.style),s),t.apply(void 0,[e.tag,bn(bn({},i.attrs),l)].concat(Mf(r)))}var Dw=!1;try{Dw=!0}catch{}function ck(){if(!Dw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function W0(t){if(t&&zc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Nf.icon)return Nf.icon(t);if(t===null)return null;if(t&&zc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ro({},t,e):{}}var G0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ut=ge.forwardRef(function(t,e){var n=bn(bn({},G0),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,c=n.titleId,u=n.maskId,f=W0(r),m=Zd("classes",[].concat(Mf(ik(n)),Mf((s||"").split(" ")))),g=Zd("transform",typeof n.transform=="string"?Nf.transform(n.transform):n.transform),T=Zd("mask",W0(i)),I=q6(f,bn(bn(bn(bn({},m),g),T),{},{symbol:o,title:l,titleId:c,maskId:u}));if(!I)return ck("Could not find icon",f),null;var A=I.abstract,R={ref:e};return Object.keys(n).forEach(function(x){G0.hasOwnProperty(x)||(R[x]=n[x])}),uk(A[0],R)});Ut.displayName="FontAwesomeIcon";Ut.propTypes={beat:G.bool,border:G.bool,beatFade:G.bool,bounce:G.bool,className:G.string,fade:G.bool,flash:G.bool,mask:G.oneOfType([G.object,G.array,G.string]),maskId:G.string,fixedWidth:G.bool,inverse:G.bool,flip:G.oneOf([!0,!1,"horizontal","vertical","both"]),icon:G.oneOfType([G.object,G.array,G.string]),listItem:G.bool,pull:G.oneOf(["right","left"]),pulse:G.bool,rotation:G.oneOf([0,90,180,270]),shake:G.bool,size:G.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:G.bool,spinPulse:G.bool,spinReverse:G.bool,symbol:G.oneOfType([G.bool,G.string]),title:G.string,titleId:G.string,transform:G.oneOfType([G.string,G.object]),swapOpacity:G.bool};var uk=Lw.bind(null,ge.createElement);const mm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Fw={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Vw={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},dk={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},zw={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},hk={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};var q0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},$w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=o>>2,m=(o&3)<<4|l>>4;let g=(l&15)<<2|u>>6,T=u&63;c||(T=64,s||(g=64)),r.push(n[f],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||m==null)throw new pk;const g=o<<2|l>>4;if(r.push(g),u!==64){const T=l<<4&240|u>>2;if(r.push(T),m!==64){const I=u<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mk=function(t){const e=Bw(t);return $w.encodeByteArray(e,!0)},Bc=function(t){return mk(t).replace(/\./g,"")},gk=function(t){try{return $w.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vk=()=>yk().__FIREBASE_DEFAULTS__,_k=()=>{if(typeof process>"u"||typeof q0>"u")return;const t=q0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gk(t[1]);return e&&JSON.parse(e)},gm=()=>{try{return vk()||_k()||wk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xk=t=>{var e,n;return(n=(e=gm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ek=t=>{const e=xk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uw=()=>{var t;return(t=gm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bc(JSON.stringify(n)),Bc(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kk(){var t;const e=(t=gm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ik(){return!kk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ck(){try{return typeof indexedDB=="object"}catch{return!1}}function Ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="FirebaseError";class $o extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pk,Object.setPrototypeOf(this,$o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hw.prototype.create)}}class Hw{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Rk(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new $o(i,l,r)}}function Rk(t,e){return t.replace(jk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jk=/\{\$([^}]+)}/g;function Df(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Q0(o)&&Q0(s)){if(!Df(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q0(t){return t!==null&&typeof t=="object"}/**
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
 */function ha(t){return t&&t._delegate?t._delegate:t}class fa{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ii="[DEFAULT]";/**
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
 */class Ok{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mk(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nk(t){return t===ii?void 0:t}function Mk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ok(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Dk={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Fk=se.INFO,Vk={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},zk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Vk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ww{constructor(e){this.name=e,this._logLevel=Fk,this._logHandler=zk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Bk=(t,e)=>e.some(n=>t instanceof n);let Y0,K0;function $k(){return Y0||(Y0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uk(){return K0||(K0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gw=new WeakMap,Ff=new WeakMap,qw=new WeakMap,eh=new WeakMap,ym=new WeakMap;function Hk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Nr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Gw.set(n,t)}).catch(()=>{}),ym.set(e,t),e}function Wk(t){if(Ff.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Ff.set(t,e)}let Vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ff.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gk(t){Vf=t(Vf)}function qk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return qw.set(r,e.sort?e.sort():[e]),Nr(r)}:Uk().includes(t)?function(...e){return t.apply(th(this),e),Nr(Gw.get(this))}:function(...e){return Nr(t.apply(th(this),e))}}function Qk(t){return typeof t=="function"?qk(t):(t instanceof IDBTransaction&&Wk(t),Bk(t,$k())?new Proxy(t,Vf):t)}function Nr(t){if(t instanceof IDBRequest)return Hk(t);if(eh.has(t))return eh.get(t);const e=Qk(t);return e!==t&&(eh.set(t,e),ym.set(e,t)),e}const th=t=>ym.get(t);function Yk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Nr(s);return r&&s.addEventListener("upgradeneeded",c=>{r(Nr(s.result),c.oldVersion,c.newVersion,Nr(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Kk=["get","getKey","getAll","getAllKeys","count"],Xk=["put","add","delete","clear"],nh=new Map;function X0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kk.includes(n)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return nh.set(e,o),o}Gk(t=>({...t,get:(e,n,r)=>X0(e,n)||t.get(e,n,r),has:(e,n)=>!!X0(e,n)||t.has(e,n)}));/**
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
 */class Jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zf="@firebase/app",J0="0.10.9";/**
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
 */const nr=new Ww("@firebase/app"),eI="@firebase/app-compat",tI="@firebase/analytics-compat",nI="@firebase/analytics",rI="@firebase/app-check-compat",iI="@firebase/app-check",oI="@firebase/auth",sI="@firebase/auth-compat",aI="@firebase/database",lI="@firebase/database-compat",cI="@firebase/functions",uI="@firebase/functions-compat",dI="@firebase/installations",hI="@firebase/installations-compat",fI="@firebase/messaging",pI="@firebase/messaging-compat",mI="@firebase/performance",gI="@firebase/performance-compat",yI="@firebase/remote-config",vI="@firebase/remote-config-compat",_I="@firebase/storage",wI="@firebase/storage-compat",xI="@firebase/firestore",EI="@firebase/vertexai-preview",TI="@firebase/firestore-compat",bI="firebase",SI="10.13.0";/**
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
 */const Bf="[DEFAULT]",kI={[zf]:"fire-core",[eI]:"fire-core-compat",[nI]:"fire-analytics",[tI]:"fire-analytics-compat",[iI]:"fire-app-check",[rI]:"fire-app-check-compat",[oI]:"fire-auth",[sI]:"fire-auth-compat",[aI]:"fire-rtdb",[lI]:"fire-rtdb-compat",[cI]:"fire-fn",[uI]:"fire-fn-compat",[dI]:"fire-iid",[hI]:"fire-iid-compat",[fI]:"fire-fcm",[pI]:"fire-fcm-compat",[mI]:"fire-perf",[gI]:"fire-perf-compat",[yI]:"fire-rc",[vI]:"fire-rc-compat",[_I]:"fire-gcs",[wI]:"fire-gcs-compat",[xI]:"fire-fst",[TI]:"fire-fst-compat",[EI]:"fire-vertex","fire-js":"fire-js",[bI]:"fire-js-all"};/**
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
 */const $c=new Map,II=new Map,$f=new Map;function Z0(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Uc(t){const e=t.name;if($f.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;$f.set(e,t);for(const n of $c.values())Z0(n,t);for(const n of II.values())Z0(n,t);return!0}function CI(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const AI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new Hw("app","Firebase",AI);/**
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
 */class PI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const RI=SI;function Qw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=Uw()),!n)throw Mr.create("no-options");const o=$c.get(i);if(o){if(Df(n,o.options)&&Df(r,o.config))return o;throw Mr.create("duplicate-app",{appName:i})}const s=new Lk(i);for(const c of $f.values())s.addComponent(c);const l=new PI(n,r,s);return $c.set(i,l),l}function jI(t=Bf){const e=$c.get(t);if(!e&&t===Bf&&Uw())return Qw();if(!e)throw Mr.create("no-app",{appName:t});return e}function ho(t,e,n){var r;let i=(r=kI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(l.join(" "));return}Uc(new fa(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OI="firebase-heartbeat-database",NI=1,pa="firebase-heartbeat-store";let rh=null;function Yw(){return rh||(rh=Yk(OI,NI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function MI(t){try{const n=(await Yw()).transaction(pa),r=await n.objectStore(pa).get(Kw(t));return await n.done,r}catch(e){if(e instanceof $o)nr.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(n.message)}}}async function ey(t,e){try{const r=(await Yw()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,Kw(t)),await r.done}catch(n){if(n instanceof $o)nr.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(r.message)}}}function Kw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LI=1024,DI=30*24*60*60*1e3;class FI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ty();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=DI}),this._storage.overwrite(this._heartbeatsCache))}catch(i){nr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ty(),{heartbeatsToSend:r,unsentEntries:i}=VI(this._heartbeatsCache.heartbeats),o=Bc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return nr.warn(n),""}}}function ty(){return new Date().toISOString().substring(0,10)}function VI(t,e=LI){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ny(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ck()?Ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ny(t){return Bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BI(t){Uc(new fa("platform-logger",e=>new Jk(e),"PRIVATE")),Uc(new fa("heartbeat",e=>new FI(e),"PRIVATE")),ho(zf,J0,t),ho(zf,J0,"esm2017"),ho("fire-js","")}BI("");var $I="firebase",UI="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ho($I,UI,"app");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function b(){}b.prototype=_.prototype,w.D=_.prototype,w.prototype=new b,w.prototype.constructor=w,w.C=function(S,C,j){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return _.prototype[C].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,b){b||(b=0);var S=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)S[C]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(C=0;16>C;++C)S[C]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=w.g[0],b=w.g[1],C=w.g[2];var j=w.g[3],k=_+(j^b&(C^j))+S[0]+3614090360&4294967295;_=b+(k<<7&4294967295|k>>>25),k=j+(C^_&(b^C))+S[1]+3905402710&4294967295,j=_+(k<<12&4294967295|k>>>20),k=C+(b^j&(_^b))+S[2]+606105819&4294967295,C=j+(k<<17&4294967295|k>>>15),k=b+(_^C&(j^_))+S[3]+3250441966&4294967295,b=C+(k<<22&4294967295|k>>>10),k=_+(j^b&(C^j))+S[4]+4118548399&4294967295,_=b+(k<<7&4294967295|k>>>25),k=j+(C^_&(b^C))+S[5]+1200080426&4294967295,j=_+(k<<12&4294967295|k>>>20),k=C+(b^j&(_^b))+S[6]+2821735955&4294967295,C=j+(k<<17&4294967295|k>>>15),k=b+(_^C&(j^_))+S[7]+4249261313&4294967295,b=C+(k<<22&4294967295|k>>>10),k=_+(j^b&(C^j))+S[8]+1770035416&4294967295,_=b+(k<<7&4294967295|k>>>25),k=j+(C^_&(b^C))+S[9]+2336552879&4294967295,j=_+(k<<12&4294967295|k>>>20),k=C+(b^j&(_^b))+S[10]+4294925233&4294967295,C=j+(k<<17&4294967295|k>>>15),k=b+(_^C&(j^_))+S[11]+2304563134&4294967295,b=C+(k<<22&4294967295|k>>>10),k=_+(j^b&(C^j))+S[12]+1804603682&4294967295,_=b+(k<<7&4294967295|k>>>25),k=j+(C^_&(b^C))+S[13]+4254626195&4294967295,j=_+(k<<12&4294967295|k>>>20),k=C+(b^j&(_^b))+S[14]+2792965006&4294967295,C=j+(k<<17&4294967295|k>>>15),k=b+(_^C&(j^_))+S[15]+1236535329&4294967295,b=C+(k<<22&4294967295|k>>>10),k=_+(C^j&(b^C))+S[1]+4129170786&4294967295,_=b+(k<<5&4294967295|k>>>27),k=j+(b^C&(_^b))+S[6]+3225465664&4294967295,j=_+(k<<9&4294967295|k>>>23),k=C+(_^b&(j^_))+S[11]+643717713&4294967295,C=j+(k<<14&4294967295|k>>>18),k=b+(j^_&(C^j))+S[0]+3921069994&4294967295,b=C+(k<<20&4294967295|k>>>12),k=_+(C^j&(b^C))+S[5]+3593408605&4294967295,_=b+(k<<5&4294967295|k>>>27),k=j+(b^C&(_^b))+S[10]+38016083&4294967295,j=_+(k<<9&4294967295|k>>>23),k=C+(_^b&(j^_))+S[15]+3634488961&4294967295,C=j+(k<<14&4294967295|k>>>18),k=b+(j^_&(C^j))+S[4]+3889429448&4294967295,b=C+(k<<20&4294967295|k>>>12),k=_+(C^j&(b^C))+S[9]+568446438&4294967295,_=b+(k<<5&4294967295|k>>>27),k=j+(b^C&(_^b))+S[14]+3275163606&4294967295,j=_+(k<<9&4294967295|k>>>23),k=C+(_^b&(j^_))+S[3]+4107603335&4294967295,C=j+(k<<14&4294967295|k>>>18),k=b+(j^_&(C^j))+S[8]+1163531501&4294967295,b=C+(k<<20&4294967295|k>>>12),k=_+(C^j&(b^C))+S[13]+2850285829&4294967295,_=b+(k<<5&4294967295|k>>>27),k=j+(b^C&(_^b))+S[2]+4243563512&4294967295,j=_+(k<<9&4294967295|k>>>23),k=C+(_^b&(j^_))+S[7]+1735328473&4294967295,C=j+(k<<14&4294967295|k>>>18),k=b+(j^_&(C^j))+S[12]+2368359562&4294967295,b=C+(k<<20&4294967295|k>>>12),k=_+(b^C^j)+S[5]+4294588738&4294967295,_=b+(k<<4&4294967295|k>>>28),k=j+(_^b^C)+S[8]+2272392833&4294967295,j=_+(k<<11&4294967295|k>>>21),k=C+(j^_^b)+S[11]+1839030562&4294967295,C=j+(k<<16&4294967295|k>>>16),k=b+(C^j^_)+S[14]+4259657740&4294967295,b=C+(k<<23&4294967295|k>>>9),k=_+(b^C^j)+S[1]+2763975236&4294967295,_=b+(k<<4&4294967295|k>>>28),k=j+(_^b^C)+S[4]+1272893353&4294967295,j=_+(k<<11&4294967295|k>>>21),k=C+(j^_^b)+S[7]+4139469664&4294967295,C=j+(k<<16&4294967295|k>>>16),k=b+(C^j^_)+S[10]+3200236656&4294967295,b=C+(k<<23&4294967295|k>>>9),k=_+(b^C^j)+S[13]+681279174&4294967295,_=b+(k<<4&4294967295|k>>>28),k=j+(_^b^C)+S[0]+3936430074&4294967295,j=_+(k<<11&4294967295|k>>>21),k=C+(j^_^b)+S[3]+3572445317&4294967295,C=j+(k<<16&4294967295|k>>>16),k=b+(C^j^_)+S[6]+76029189&4294967295,b=C+(k<<23&4294967295|k>>>9),k=_+(b^C^j)+S[9]+3654602809&4294967295,_=b+(k<<4&4294967295|k>>>28),k=j+(_^b^C)+S[12]+3873151461&4294967295,j=_+(k<<11&4294967295|k>>>21),k=C+(j^_^b)+S[15]+530742520&4294967295,C=j+(k<<16&4294967295|k>>>16),k=b+(C^j^_)+S[2]+3299628645&4294967295,b=C+(k<<23&4294967295|k>>>9),k=_+(C^(b|~j))+S[0]+4096336452&4294967295,_=b+(k<<6&4294967295|k>>>26),k=j+(b^(_|~C))+S[7]+1126891415&4294967295,j=_+(k<<10&4294967295|k>>>22),k=C+(_^(j|~b))+S[14]+2878612391&4294967295,C=j+(k<<15&4294967295|k>>>17),k=b+(j^(C|~_))+S[5]+4237533241&4294967295,b=C+(k<<21&4294967295|k>>>11),k=_+(C^(b|~j))+S[12]+1700485571&4294967295,_=b+(k<<6&4294967295|k>>>26),k=j+(b^(_|~C))+S[3]+2399980690&4294967295,j=_+(k<<10&4294967295|k>>>22),k=C+(_^(j|~b))+S[10]+4293915773&4294967295,C=j+(k<<15&4294967295|k>>>17),k=b+(j^(C|~_))+S[1]+2240044497&4294967295,b=C+(k<<21&4294967295|k>>>11),k=_+(C^(b|~j))+S[8]+1873313359&4294967295,_=b+(k<<6&4294967295|k>>>26),k=j+(b^(_|~C))+S[15]+4264355552&4294967295,j=_+(k<<10&4294967295|k>>>22),k=C+(_^(j|~b))+S[6]+2734768916&4294967295,C=j+(k<<15&4294967295|k>>>17),k=b+(j^(C|~_))+S[13]+1309151649&4294967295,b=C+(k<<21&4294967295|k>>>11),k=_+(C^(b|~j))+S[4]+4149444226&4294967295,_=b+(k<<6&4294967295|k>>>26),k=j+(b^(_|~C))+S[11]+3174756917&4294967295,j=_+(k<<10&4294967295|k>>>22),k=C+(_^(j|~b))+S[2]+718787259&4294967295,C=j+(k<<15&4294967295|k>>>17),k=b+(j^(C|~_))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+j&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var b=_-this.blockSize,S=this.B,C=this.h,j=0;j<_;){if(C==0)for(;j<=b;)i(this,w,j),j+=this.blockSize;if(typeof w=="string"){for(;j<_;)if(S[C++]=w.charCodeAt(j++),C==this.blockSize){i(this,S),C=0;break}}else for(;j<_;)if(S[C++]=w[j++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var b=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=b&255,b/=256;for(this.u(w),w=Array(16),_=b=0;4>_;++_)for(var S=0;32>S;S+=8)w[b++]=this.g[_]>>>S&255;return w};function o(w,_){var b=l;return Object.prototype.hasOwnProperty.call(b,w)?b[w]:b[w]=_(w)}function s(w,_){this.h=_;for(var b=[],S=!0,C=w.length-1;0<=C;C--){var j=w[C]|0;S&&j==_||(b[C]=j,S=!1)}this.g=b}var l={};function c(w){return-128<=w&&128>w?o(w,function(_){return new s([_|0],0>_?-1:0)}):new s([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return R(u(-w));for(var _=[],b=1,S=0;w>=b;S++)_[S]=w/b|0,b*=4294967296;return new s(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return R(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(_,8)),S=m,C=0;C<w.length;C+=8){var j=Math.min(8,w.length-C),k=parseInt(w.substring(C,C+j),_);8>j?(j=u(Math.pow(_,j)),S=S.j(j).add(u(k))):(S=S.j(b),S=S.add(u(k)))}return S}var m=c(0),g=c(1),T=c(16777216);t=s.prototype,t.m=function(){if(A(this))return-R(this).m();for(var w=0,_=1,b=0;b<this.g.length;b++){var S=this.i(b);w+=(0<=S?S:4294967296+S)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(A(this))return"-"+R(this).toString(w);for(var _=u(Math.pow(w,6)),b=this,S="";;){var C=P(b,_).g;b=x(b,C.j(_));var j=((0<b.g.length?b.g[0]:b.h)>>>0).toString(w);if(b=C,I(b))return j+S;for(;6>j.length;)j="0"+j;S=j+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=x(this,w),A(w)?-1:I(w)?0:1};function R(w){for(var _=w.g.length,b=[],S=0;S<_;S++)b[S]=~w.g[S];return new s(b,~w.h).add(g)}t.abs=function(){return A(this)?R(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],S=0,C=0;C<=_;C++){var j=S+(this.i(C)&65535)+(w.i(C)&65535),k=(j>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);S=k>>>16,j&=65535,k&=65535,b[C]=k<<16|j}return new s(b,b[b.length-1]&-2147483648?-1:0)};function x(w,_){return w.add(R(_))}t.j=function(w){if(I(this)||I(w))return m;if(A(this))return A(w)?R(this).j(R(w)):R(R(this).j(w));if(A(w))return R(this.j(R(w)));if(0>this.l(T)&&0>w.l(T))return u(this.m()*w.m());for(var _=this.g.length+w.g.length,b=[],S=0;S<2*_;S++)b[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<w.g.length;C++){var j=this.i(S)>>>16,k=this.i(S)&65535,nt=w.i(C)>>>16,an=w.i(C)&65535;b[2*S+2*C]+=k*an,v(b,2*S+2*C),b[2*S+2*C+1]+=j*an,v(b,2*S+2*C+1),b[2*S+2*C+1]+=k*nt,v(b,2*S+2*C+1),b[2*S+2*C+2]+=j*nt,v(b,2*S+2*C+2)}for(S=0;S<_;S++)b[S]=b[2*S+1]<<16|b[2*S];for(S=_;S<2*_;S++)b[S]=0;return new s(b,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function E(w,_){this.g=w,this.h=_}function P(w,_){if(I(_))throw Error("division by zero");if(I(w))return new E(m,m);if(A(w))return _=P(R(w),_),new E(R(_.g),R(_.h));if(A(_))return _=P(w,R(_)),new E(R(_.g),_.h);if(30<w.g.length){if(A(w)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var b=g,S=_;0>=S.l(w);)b=L(b),S=L(S);var C=N(b,1),j=N(S,1);for(S=N(S,2),b=N(b,2);!I(S);){var k=j.add(S);0>=k.l(w)&&(C=C.add(b),j=k),S=N(S,1),b=N(b,1)}return _=x(w,C.j(_)),new E(C,_)}for(C=m;0<=w.l(_);){for(b=Math.max(1,Math.floor(w.m()/_.m())),S=Math.ceil(Math.log(b)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),j=u(b),k=j.j(_);A(k)||0<k.l(w);)b-=S,j=u(b),k=j.j(_);I(j)&&(j=g),C=C.add(j),w=x(w,k)}return new E(C,w)}t.A=function(w){return P(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],S=0;S<_;S++)b[S]=this.i(S)&w.i(S);return new s(b,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],S=0;S<_;S++)b[S]=this.i(S)|w.i(S);return new s(b,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],S=0;S<_;S++)b[S]=this.i(S)^w.i(S);return new s(b,this.h^w.h)};function L(w){for(var _=w.g.length+1,b=[],S=0;S<_;S++)b[S]=w.i(S)<<1|w.i(S-1)>>>31;return new s(b,w.h)}function N(w,_){var b=_>>5;_%=32;for(var S=w.g.length-b,C=[],j=0;j<S;j++)C[j]=0<_?w.i(j+b)>>>_|w.i(j+b+1)<<32-_:w.i(j+b);return new s(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=f,Xw=s}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jw,Zw,Ss,ex,Zl,Uf,tx,nx,rx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bl=="object"&&bl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in p))break e;p=p[O]}a=a[a.length-1],y=p[a],d=d(y),d!=y&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var p=0,y=!1,O={next:function(){if(!y&&p<a.length){var M=p++;return{value:d(M,a[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(d,O)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function T(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function I(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,O,M){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return d.prototype[O].apply(y,$)}}function A(a){const d=a.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=a[y];return p}return[]}function R(a,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const O=a.length||0,M=y.length||0;a.length=O+M;for(let $=0;$<M;$++)a[O+$]=y[$]}else a.push(y)}}class x{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var L=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function N(a,d,p){for(const y in a)d.call(p,a[y],y,a)}function w(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function _(a){const d={};for(const p in a)d[p]=a[p];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)a[p]=y[p];for(let M=0;M<b.length;M++)p=b[M],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function C(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function j(a){l.setTimeout(()=>{throw a},0)}function k(){var a=q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class nt{constructor(){this.h=this.g=null}add(d,p){const y=an.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var an=new x(()=>new Yr,a=>a.reset());class Yr{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ft,U=!1,q=new nt,K=()=>{const a=l.Promise.resolve(void 0);Ft=()=>{a.then(de)}};var de=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(p){j(p)}var d=an;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}U=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function At(a,d){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(L){e:{try{P(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&At.aa.h.call(this)}}I(At,be);var xt={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Kr=0;function Dn(a,d,p,y,O){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=O,this.key=++Kr,this.da=this.fa=!1}function sr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fn(a){this.src=a,this.g={},this.h=0}Fn.prototype.add=function(a,d,p,y,O){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var $=Yu(a,d,y,O);return-1<$?(d=a[$],p||(d.fa=!1)):(d=new Dn(d,this.src,M,!!y,O),d.fa=p,a.push(d)),d};function Jt(a,d){var p=d.type;if(p in a.g){var y=a.g[p],O=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=O)&&Array.prototype.splice.call(y,O,1),M&&(sr(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Yu(a,d,p,y){for(var O=0;O<a.length;++O){var M=a[O];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==y)return O}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),Xu={};function Wm(a,d,p,y,O){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Wm(a,d[M],p,y,O);return null}return p=Qm(p),a&&a[Pt]?a.K(d,p,u(y)?!!y.capture:!!y,O):L4(a,d,p,!1,y,O)}function L4(a,d,p,y,O,M){if(!d)throw Error("Invalid event type");var $=u(O)?!!O.capture:!!O,pe=Zu(a);if(pe||(a[Ku]=pe=new Fn(a)),p=pe.add(d,p,y,$,M),p.proxy)return p;if(y=D4(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)Vt||(O=$),O===void 0&&(O=!1),a.addEventListener(d.toString(),y,O);else if(a.attachEvent)a.attachEvent(qm(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function D4(){function a(p){return d.call(a.src,a.listener,p)}const d=F4;return a}function Gm(a,d,p,y,O){if(Array.isArray(d))for(var M=0;M<d.length;M++)Gm(a,d[M],p,y,O);else y=u(y)?!!y.capture:!!y,p=Qm(p),a&&a[Pt]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],p=Yu(M,p,y,O),-1<p&&(sr(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=Zu(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Yu(d,p,y,O)),(p=-1<a?d[a]:null)&&Ju(p))}function Ju(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Pt])Jt(d.i,a);else{var p=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(p,y,a.capture):d.detachEvent?d.detachEvent(qm(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Zu(d))?(Jt(p,a),p.h==0&&(p.src=null,d[Ku]=null)):sr(a)}}}function qm(a){return a in Xu?Xu[a]:Xu[a]="on"+a}function F4(a,d){if(a.da)a=!0;else{d=new At(d,this);var p=a.listener,y=a.ha||a.src;a.fa&&Ju(a),a=p.call(y,d)}return a}function Zu(a){return a=a[Ku],a instanceof Fn?a:null}var ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qm(a){return typeof a=="function"?a:(a[ed]||(a[ed]=function(d){return a.handleEvent(d)}),a[ed])}function ut(){ne.call(this),this.i=new Fn(this),this.M=this,this.F=null}I(ut,ne),ut.prototype[Pt]=!0,ut.prototype.removeEventListener=function(a,d,p,y){Gm(this,a,d,p,y)};function Et(a,d){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new be(d,a);else if(d instanceof be)d.target=d.target||a;else{var O=d;d=new be(y,a),S(d,O)}if(O=!0,p)for(var M=p.length-1;0<=M;M--){var $=d.g=p[M];O=$a($,y,!0,d)&&O}if($=d.g=a,O=$a($,y,!0,d)&&O,O=$a($,y,!1,d)&&O,p)for(M=0;M<p.length;M++)$=d.g=p[M],O=$a($,y,!1,d)&&O}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],y=0;y<p.length;y++)sr(p[y]);delete a.g[d],a.h--}}this.F=null},ut.prototype.K=function(a,d,p,y){return this.i.add(String(a),d,!1,p,y)},ut.prototype.L=function(a,d,p,y){return this.i.add(String(a),d,!0,p,y)};function $a(a,d,p,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,M=0;M<d.length;++M){var $=d[M];if($&&!$.da&&$.capture==p){var pe=$.listener,rt=$.ha||$.src;$.fa&&Jt(a.i,$),O=pe.call(rt,y)!==!1&&O}}return O&&!y.defaultPrevented}function Ym(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Km(a){a.g=Ym(()=>{a.g=null,a.i&&(a.i=!1,Km(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class V4 extends ne{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Km(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Go(a){ne.call(this),this.h=a,this.g={}}I(Go,ne);var Xm=[];function Jm(a){N(a.g,function(d,p){this.g.hasOwnProperty(p)&&Ju(d)},a),a.g={}}Go.prototype.N=function(){Go.aa.N.call(this),Jm(this)},Go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var td=l.JSON.stringify,z4=l.JSON.parse,B4=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function nd(){}nd.prototype.h=null;function Zm(a){return a.h||(a.h=a.i())}function eg(){}var qo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rd(){be.call(this,"d")}I(rd,be);function id(){be.call(this,"c")}I(id,be);var Xr={},tg=null;function Ua(){return tg=tg||new ut}Xr.La="serverreachability";function ng(a){be.call(this,Xr.La,a)}I(ng,be);function Qo(a){const d=Ua();Et(d,new ng(d))}Xr.STAT_EVENT="statevent";function rg(a,d){be.call(this,Xr.STAT_EVENT,a),this.stat=d}I(rg,be);function Tt(a){const d=Ua();Et(d,new rg(d,a))}Xr.Ma="timingevent";function ig(a,d){be.call(this,Xr.Ma,a),this.size=d}I(ig,be);function Yo(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Ko(){this.g=!0}Ko.prototype.xa=function(){this.g=!1};function $4(a,d,p,y,O,M){a.info(function(){if(a.g)if(M)for(var $="",pe=M.split("&"),rt=0;rt<pe.length;rt++){var le=pe[rt].split("=");if(1<le.length){var dt=le[0];le=le[1];var ht=dt.split("_");$=2<=ht.length&&ht[1]=="type"?$+(dt+"="+le+"&"):$+(dt+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+d+`
`+p+`
`+$})}function U4(a,d,p,y,O,M,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+d+`
`+p+`
`+M+" "+$})}function Ni(a,d,p,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+W4(a,p)+(y?" "+y:"")})}function H4(a,d){a.info(function(){return"TIMEOUT: "+d})}Ko.prototype.info=function(){};function W4(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return td(p)}catch{return d}}var Ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},og={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},od;function Wa(){}I(Wa,nd),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},od=new Wa;function ar(a,d,p,y){this.j=a,this.i=d,this.l=p,this.R=y||1,this.U=new Go(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sg}function sg(){this.i=null,this.g="",this.h=!1}var ag={},sd={};function ad(a,d,p){a.L=1,a.v=Ya(Vn(d)),a.m=p,a.P=!0,lg(a,null)}function lg(a,d){a.F=Date.now(),Ga(a),a.A=Vn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Eg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new sg,a.g=zg(a.j,p?d:null,!a.m),0<a.O&&(a.M=new V4(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Xm[0]=O.toString()),O=Xm);for(var M=0;M<O.length;M++){var $=Wm(p,O[M],y||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Qo(),$4(a.i,a.u,a.A,a.l,a.R,a.m)}ar.prototype.ca=function(a){a=a.target;const d=this.M;d&&zn(a)==3?d.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const ht=zn(this.g);var d=this.g.Ba();const Di=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Ag(this.g)))){this.J||ht!=4||d==7||(d==8||0>=Di?Qo(3):Qo(2)),ld(this);var p=this.g.Z();this.X=p;t:if(cg(this)){var y=Ag(this.g);a="";var O=y.length,M=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),Xo(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(M&&d==O-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,U4(this.i,this.u,this.A,this.l,this.R,ht,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,rt=this.g;if((pe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var le=pe;break t}}le=null}if(p=le)Ni(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cd(this,p);else{this.o=!1,this.s=3,Tt(12),Jr(this),Xo(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<$.length;)if(ln=G4(this,$),ln==sd){ht==4&&(this.s=4,Tt(14),p=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ag){this.s=4,Tt(15),Ni(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Ni(this.i,this.l,ln,null),cd(this,ln);if(cg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||$.length!=0||this.h.h||(this.s=1,Tt(16),p=!1),this.o=this.o&&p,!p)Ni(this.i,this.l,$,"[Invalid Chunked Response]"),Jr(this),Xo(this);else if(0<$.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),md(dt),dt.M=!0,Tt(11))}}else Ni(this.i,this.l,$,null),cd(this,$);ht==4&&Jr(this),this.o&&!this.J&&(ht==4?Lg(this.j,this):(this.o=!1,Ga(this)))}else cE(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Jr(this),Xo(this)}}}catch{}finally{}};function cg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function G4(a,d){var p=a.C,y=d.indexOf(`
`,p);return y==-1?sd:(p=Number(d.substring(p,y)),isNaN(p)?ag:(y+=1,y+p>d.length?sd:(d=d.slice(y,y+p),a.C=y+p,d)))}ar.prototype.cancel=function(){this.J=!0,Jr(this)};function Ga(a){a.S=Date.now()+a.I,ug(a,a.I)}function ug(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yo(g(a.ba,a),d)}function ld(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(H4(this.i,this.A),this.L!=2&&(Qo(),Tt(17)),Jr(this),this.s=2,Xo(this)):ug(this,this.S-a)};function Xo(a){a.j.G==0||a.J||Lg(a.j,a)}function Jr(a){ld(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Jm(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function cd(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||ud(p.h,a))){if(!a.K&&ud(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)el(p),Ja(p);else break e;pd(p),Tt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=Yo(g(p.Za,p),6e3));if(1>=fg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ei(p,11)}else if((a.K||p.g==a)&&el(p),!v(d))for(O=p.Da.g.parse(d),d=0;d<O.length;d++){let le=O[d];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const dt=le[3];dt!=null&&(p.la=dt,p.j.info("VER="+p.la));const ht=le[4];ht!=null&&(p.Aa=ht,p.j.info("SVER="+p.Aa));const Di=le[5];Di!=null&&typeof Di=="number"&&0<Di&&(y=1.5*Di,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const ln=a.g;if(ln){const nl=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var M=y.h;M.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(dd(M,M.h),M.h=null))}if(y.D){const gd=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;gd&&(y.ya=gd,_e(y.I,y.D,gd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var $=a;if(y.qa=Vg(y,y.J?y.ia:null,y.W),$.K){pg(y.h,$);var pe=$,rt=y.L;rt&&(pe.I=rt),pe.B&&(ld(pe),Ga(pe)),y.g=$}else Ng(y);0<p.i.length&&Za(p)}else le[0]!="stop"&&le[0]!="close"||ei(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ei(p,7):fd(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}Qo(4)}catch{}}var q4=class{constructor(a,d){this.g=a,this.map=d}};function dg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fg(a){return a.h?1:a.g?a.g.size:0}function ud(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function dd(a,d){a.g?a.g.add(d):a.h=d}function pg(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}dg.prototype.cancel=function(){if(this.i=mg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return A(a.i)}function Q4(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],p=a.length,y=0;y<p;y++)d.push(a[y]);return d}d=[],p=0;for(y in a)d[p++]=a[y];return d}function Y4(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const y in a)d[p++]=y;return d}}}function gg(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Y4(a),y=Q4(a),O=y.length,M=0;M<O;M++)d.call(void 0,y[M],p&&p[M],a)}var yg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function K4(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),O=null;if(0<=y){var M=a[p].substring(0,y);O=a[p].substring(y+1)}else M=a[p];d(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,qa(this,a.j),this.o=a.o,this.g=a.g,Qa(this,a.s),this.l=a.l;var d=a.i,p=new es;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),vg(this,p),this.m=a.m}else a&&(d=String(a).match(yg))?(this.h=!1,qa(this,d[1]||"",!0),this.o=Jo(d[2]||""),this.g=Jo(d[3]||"",!0),Qa(this,d[4]),this.l=Jo(d[5]||"",!0),vg(this,d[6]||"",!0),this.m=Jo(d[7]||"")):(this.h=!1,this.i=new es(null,this.h))}Zr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Zo(d,_g,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Zo(d,_g,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Zo(p,p.charAt(0)=="/"?Z4:J4,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Zo(p,tE)),a.join("")};function Vn(a){return new Zr(a)}function qa(a,d,p){a.j=p?Jo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Qa(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function vg(a,d,p){d instanceof es?(a.i=d,nE(a.i,a.h)):(p||(d=Zo(d,eE)),a.i=new es(d,a.h))}function _e(a,d,p){a.i.set(d,p)}function Ya(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Jo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zo(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,X4),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function X4(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _g=/[#\/\?@]/g,J4=/[#\?:]/g,Z4=/[#\?]/g,eE=/[#\?@]/g,tE=/#/g;function es(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function lr(a){a.g||(a.g=new Map,a.h=0,a.i&&K4(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=es.prototype,t.add=function(a,d){lr(this),this.i=null,a=Mi(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function wg(a,d){lr(a),d=Mi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function xg(a,d){return lr(a),d=Mi(a,d),a.g.has(d)}t.forEach=function(a,d){lr(this),this.g.forEach(function(p,y){p.forEach(function(O){a.call(d,O,y,this)},this)},this)},t.na=function(){lr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const O=a[y];for(let M=0;M<O.length;M++)p.push(d[y])}return p},t.V=function(a){lr(this);let d=[];if(typeof a=="string")xg(this,a)&&(d=d.concat(this.g.get(Mi(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return lr(this),this.i=null,a=Mi(this,a),xg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Eg(a,d,p){wg(a,d),0<p.length&&(a.i=null,a.g.set(Mi(a,d),A(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const M=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var O=M;$[y]!==""&&(O+="="+encodeURIComponent(String($[y]))),a.push(O)}}return this.i=a.join("&")};function Mi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function nE(a,d){d&&!a.j&&(lr(a),a.i=null,a.g.forEach(function(p,y){var O=y.toLowerCase();y!=O&&(wg(this,y),Eg(this,O,p))},a)),a.j=d}function rE(a,d){const p=new Ko;if(l.Image){const y=new Image;y.onload=T(cr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=T(cr,p,"TestLoadImage: error",!1,d,y),y.onabort=T(cr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=T(cr,p,"TestLoadImage: timeout",!1,d,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function iE(a,d){const p=new Ko,y=new AbortController,O=setTimeout(()=>{y.abort(),cr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(M=>{clearTimeout(O),M.ok?cr(p,"TestPingServer: ok",!0,d):cr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),cr(p,"TestPingServer: error",!1,d)})}function cr(a,d,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function oE(){this.g=new B4}function sE(a,d,p){const y=p||"";try{gg(a,function(O,M){let $=O;u(O)&&($=td(O)),d.push(y+M+"="+encodeURIComponent($))})}catch(O){throw d.push(y+"type="+encodeURIComponent("_badmap")),O}}function ts(a){this.l=a.Ub||null,this.j=a.eb||!1}I(ts,nd),ts.prototype.g=function(){return new Ka(this.l,this.j)},ts.prototype.i=function(a){return function(){return a}}({});function Ka(a,d){ut.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ka,ut),t=Ka.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ns(this):rs(this),this.readyState==3&&Tg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ns(this))},t.Qa=function(a){this.g&&(this.response=a,ns(this))},t.ga=function(){this.g&&ns(this)};function ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,rs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bg(a){let d="";return N(a,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function hd(a,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=bg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):_e(a,d,p))}function De(a){ut.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(De,ut);var aE=/^https?$/i,lE=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():od.g(),this.v=this.o?Zm(this.o):Zm(od),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){Sg(this,M);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())p.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lE,d,void 0))||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of p)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cg(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Sg(this,M)}};function Sg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,kg(a),Xa(a)}function kg(a){a.A||(a.A=!0,Et(a,"complete"),Et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Et(this,"complete"),Et(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ig(this):this.bb())},t.bb=function(){Ig(this)};function Ig(a){if(a.h&&typeof s<"u"&&(!a.v[1]||zn(a)!=4||a.Z()!=2)){if(a.u&&zn(a)==4)Ym(a.Ea,0,a);else if(Et(a,"readystatechange"),zn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=$===0){var O=String(a.D).match(yg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!aE.test(O?O.toLowerCase():"")}p=y}if(p)Et(a,"complete"),Et(a,"success");else{a.m=6;try{var M=2<zn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",kg(a)}}finally{Xa(a)}}}}function Xa(a,d){if(a.g){Cg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Et(a,"ready");try{p.onreadystatechange=y}catch{}}}function Cg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),z4(d)}};function Ag(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cE(a){const d={};a=(a.g&&2<=zn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=C(a[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[O]||[];d[O]=M,M.push(p)}w(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Pg(a){this.Aa=0,this.i=[],this.j=new Ko,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,a),this.cb=is("retryDelaySeedMs",1e4,a),this.Wa=is("forwardChannelMaxRetries",2,a),this.wa=is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dg(a&&a.concurrentRequestLimit),this.Da=new oE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pg.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,y){Tt(0),this.W=a,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Vg(this,null,this.W),Za(this)};function fd(a){if(Rg(a),a.G==3){var d=a.U++,p=Vn(a.I);if(_e(p,"SID",a.K),_e(p,"RID",d),_e(p,"TYPE","terminate"),os(a,p),d=new ar(a,a.j,d),d.L=2,d.v=Ya(Vn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=zg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ga(d)}Fg(a)}function Ja(a){a.g&&(md(a),a.g.cancel(),a.g=null)}function Rg(a){Ja(a),a.u&&(l.clearTimeout(a.u),a.u=null),el(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Za(a){if(!hg(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ft||K(),U||(Ft(),U=!0),q.add(d,a),a.B=0}}function uE(a,d){return fg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yo(g(a.Ga,a,d),Dg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new ar(this,this.j,a);let M=this.o;if(this.S&&(M?(M=_(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Og(this,O,d),p=Vn(this.I),_e(p,"RID",a),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),os(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(bg(M)))+"&"+d:this.m&&hd(p,this.m,M)),dd(this.h,O),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",d),_e(p,"SID","null"),O.T=!0,ad(O,p,null)):ad(O,p,d),this.G=2}}else this.G==3&&(a?jg(this,a):this.i.length==0||hg(this.h)||jg(this))};function jg(a,d){var p;d?p=d.l:p=a.U++;const y=Vn(a.I);_e(y,"SID",a.K),_e(y,"RID",p),_e(y,"AID",a.T),os(a,y),a.m&&a.o&&hd(y,a.m,a.o),p=new ar(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Og(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dd(a.h,p),ad(p,y,d)}function os(a,d){a.H&&N(a.H,function(p,y){_e(d,y,p)}),a.l&&gg({},function(p,y){_e(d,y,p)})}function Og(a,d,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let M=-1;for(;;){const $=["count="+p];M==-1?0<p?(M=O[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let pe=!0;for(let rt=0;rt<p;rt++){let le=O[rt].g;const dt=O[rt].map;if(le-=M,0>le)M=Math.max(0,O[rt].g-100),pe=!1;else try{sE(dt,$,"req"+le+"_")}catch{y&&y(dt)}}if(pe){y=$.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,y}function Ng(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ft||K(),U||(Ft(),U=!0),q.add(d,a),a.v=0}}function pd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yo(g(a.Fa,a),Dg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Mg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yo(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Ja(this),Mg(this))};function md(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Mg(a){a.g=new ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Vn(a.qa);_e(d,"RID","rpc"),_e(d,"SID",a.K),_e(d,"AID",a.T),_e(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(d,"TO",a.ja),_e(d,"TYPE","xmlhttp"),os(a,d),a.m&&a.o&&hd(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ya(Vn(d)),p.m=null,p.P=!0,lg(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),pd(this),Tt(19))};function el(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lg(a,d){var p=null;if(a.g==d){el(a),md(a),a.g=null;var y=2}else if(ud(a.h,d))p=d.D,pg(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var O=a.B;y=Ua(),Et(y,new ig(y,p)),Za(a)}else Ng(a);else if(O=d.s,O==3||O==0&&0<d.X||!(y==1&&uE(a,d)||y==2&&pd(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),O){case 1:ei(a,5);break;case 4:ei(a,10);break;case 3:ei(a,6);break;default:ei(a,2)}}}function Dg(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function ei(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),y=a.Xa;const O=!y;y=new Zr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qa(y,"https"),Ya(y),O?rE(y.toString(),p):iE(y.toString(),p)}else Tt(2);a.G=0,a.l&&a.l.sa(d),Fg(a),Rg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Fg(a){if(a.G=0,a.ka=[],a.l){const d=mg(a.h);(d.length!=0||a.i.length!=0)&&(R(a.ka,d),R(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Vg(a,d,p){var y=p instanceof Zr?Vn(p):new Zr(p);if(y.g!="")d&&(y.g=d+"."+y.g),Qa(y,y.s);else{var O=l.location;y=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var M=new Zr(null);y&&qa(M,y),d&&(M.g=d),O&&Qa(M,O),p&&(M.l=p),y=M}return p=a.D,d=a.ya,p&&d&&_e(y,p,d),_e(y,"VER",a.la),os(a,y),y}function zg(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new De(new ts({eb:p})):new De(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bg(){}t=Bg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(a,d){return new zt(a,d)};function zt(a,d){ut.call(this),this.g=new Pg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!v(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Li(this)}I(zt,ut),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){fd(this.g)},zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=td(a),a=p);d.i.push(new q4(d.Ya++,a)),d.G==3&&Za(d)},zt.prototype.N=function(){this.g.l=null,delete this.j,fd(this.g),delete this.g,zt.aa.N.call(this)};function $g(a){rd.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}I($g,rd);function Ug(){id.call(this),this.status=1}I(Ug,id);function Li(a){this.g=a}I(Li,Bg),Li.prototype.ua=function(){Et(this.g,"a")},Li.prototype.ta=function(a){Et(this.g,new $g(a))},Li.prototype.sa=function(a){Et(this.g,new Ug)},Li.prototype.ra=function(){Et(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,rx=function(){return new tl},nx=function(){return Ua()},tx=Xr,Uf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,Zl=Ha,og.COMPLETE="complete",ex=og,eg.EventType=qo,qo.OPEN="a",qo.CLOSE="b",qo.ERROR="c",qo.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ss=eg,Zw=ts,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,Jw=De}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Ww("@firebase/firestore");function ps(){return Ci.logLevel}function Q(t,...e){if(Ci.logLevel<=se.DEBUG){const n=e.map(vm);Ci.debug(`Firestore (${Uo}): ${t}`,...n)}}function Ai(t,...e){if(Ci.logLevel<=se.ERROR){const n=e.map(vm);Ci.error(`Firestore (${Uo}): ${t}`,...n)}}function Hc(t,...e){if(Ci.logLevel<=se.WARN){const n=e.map(vm);Ci.warn(`Firestore (${Uo}): ${t}`,...n)}}function vm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw Ai(e),new Error(e)}function Qe(t,e){t||ie()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends $o{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class WI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GI{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new gi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new gi)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new ix(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new gt(e)}}class qI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new qI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new YI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=XI(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.timestamp=e}static fromTimestamp(e){return new je(e)}static min(){return new je(new tt(0,0))}static max(){return new je(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ma.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ma?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends ma{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const JI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends ma{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return JI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new Y(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(ze.fromString(e))}static fromName(e){return new ee(ze.fromString(e).popFirst(5))}static empty(){return new ee(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new ze(e.slice()))}}function ZI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=je.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new $r(i,ee.empty(),e)}function eC(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(je.min(),ee.empty(),-1)}static max(){return new $r(je.max(),ee.empty(),-1)}}function tC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==nC)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},c=>r(c))}),s=!0,o===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const u=c;n(e[u]).next(f=>{s[u]=f,++l,l===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function iC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ou(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ax.oe=-1;function _m(t){return t==null}function Wc(t){return t===0&&1/t==-1/0}function oC(t){return typeof t=="number"&&Number.isInteger(t)&&!Wc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ra(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,o){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new mn([])}unionWith(e){let n=new _t(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new sC("Invalid base64 string: "+o):o}}(e);return new Nn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Nn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nn.EMPTY_BYTE_STRING=new Nn("");const aC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=aC.exec(t);if(Qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ga(t){return typeof t=="string"?Nn.fromBase64String(t):Nn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cx(t){const e=t.mapValue.fields.__previous_value__;return wm(e)?cx(e):e}function Gc(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n,r,i,o,s,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class qc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Po(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wm(t)?4:uC(t)?9007199254740991:cC(t)?10:11:ie()}function Mn(t,e){if(t===e)return!0;const n=Po(t);if(n!==Po(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gc(t).isEqual(Gc(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Pi(i.timestampValue),l=Pi(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ga(i.bytesValue).isEqual(ga(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=st(i.doubleValue),l=st(o.doubleValue);return s===l?Wc(s)===Wc(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Ao(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(oy(s)!==oy(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Mn(s[c],l[c])))return!1;return!0}(t,e);default:return ie()}}function ya(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Ro(t,e){if(t===e)return 0;const n=Po(t),r=Po(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=st(o.integerValue||o.doubleValue),c=st(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ay(t.timestampValue,e.timestampValue);case 4:return ay(Gc(t),Gc(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(o,s){const l=ga(o),c=ga(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=me(l[u],c[u]);if(f!==0)return f}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=me(st(o.latitude),st(s.latitude));return l!==0?l:me(st(o.longitude),st(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ly(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,c,u,f;const m=o.fields||{},g=s.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,I=(c=g.value)===null||c===void 0?void 0:c.arrayValue,A=me(((u=T==null?void 0:T.values)===null||u===void 0?void 0:u.length)||0,((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:ly(T,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===kl.mapValue&&s===kl.mapValue)return 0;if(o===kl.mapValue)return 1;if(s===kl.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),u=s.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=me(c[m],f[m]);if(g!==0)return g;const T=Ro(l[c[m]],u[f[m]]);if(T!==0)return T}return me(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ie()}}function ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Pi(t),r=Pi(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function ly(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Ro(n[i],r[i]);if(o)return o}return me(n.length,r.length)}function jo(t){return Hf(t)}function Hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ga(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Hf(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Hf(n.fields[s])}`;return i+"}"}(t.mapValue):ie()}function Wf(t){return!!t&&"integerValue"in t}function xm(t){return!!t&&"arrayValue"in t}function ec(t){return!!t&&"mapValue"in t}function cC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ra(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ec(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=Fs(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());ec(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ec(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ra(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new pn(Fs(this.value))}}function ux(t){const e=[];return Ra(t.fields,(n,r)=>{const i=new at([n]);if(ec(r)){const o=ux(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new fn(e,0,je.min(),je.min(),je.min(),pn.empty(),0)}static newFoundDocument(e,n,r,i){return new fn(e,1,n,je.min(),r,i,0)}static newNoDocument(e,n){return new fn(e,2,n,je.min(),je.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new fn(e,3,n,je.min(),je.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(je.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=je.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(e,n){this.position=e,this.inclusive=n}}function cy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=ee.comparator(ee.fromName(s.referenceValue),n.key):r=Ro(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function dC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dx{}class Je extends dx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fC(e,n,r):n==="array-contains"?new gC(e,r):n==="in"?new yC(e,r):n==="not-in"?new vC(e,r):n==="array-contains-any"?new _C(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pC(e,r):new mC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ro(n,this.value)):n!==null&&Po(this.value)===Po(n)&&this.matchesComparison(Ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ur extends dx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ur(e,n)}matches(e){return hx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hx(t){return t.op==="and"}function fx(t){return hC(t)&&hx(t)}function hC(t){for(const e of t.filters)if(e instanceof Ur)return!1;return!0}function Gf(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+jo(t.value);if(fx(t))return t.filters.map(e=>Gf(e)).join(",");{const e=t.filters.map(n=>Gf(n)).join(",");return`${t.op}(${e})`}}function px(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof Ur?function(r,i){return i instanceof Ur&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&px(s,i.filters[l]),!0):!1}(t,e):void ie()}function mx(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${jo(n.value)}`}(t):t instanceof Ur?function(n){return n.op.toString()+" {"+n.getFilters().map(mx).join(" ,")+"}"}(t):"Filter"}class fC extends Je{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class pC extends Je{constructor(e,n){super(e,"in",n),this.keys=gx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mC extends Je{constructor(e,n){super(e,"not-in",n),this.keys=gx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class gC extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xm(n)&&ya(n.arrayValue,this.value)}}class yC extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ya(this.value.arrayValue,n)}}class vC extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ya(this.value.arrayValue,n)}}class _C extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ya(this.value.arrayValue,r))}}/**
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
 */class wC{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function dy(t,e=null,n=[],r=[],i=null,o=null,s=null){return new wC(t,e,n,r,i,o,s)}function Em(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),_m(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>jo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>jo(r)).join(",")),e.ue=n}return e.ue}function Tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!px(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uy(t.startAt,e.startAt)&&uy(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xC(t,e,n,r,i,o,s,l){return new Nu(t,e,n,r,i,o,s,l)}function EC(t){return new Nu(t)}function hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TC(t){return t.collectionGroup!==null}function Vs(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new _t(at.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Yc(o,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Yc(at.keyField(),r))}return e.ce}function yi(t){const e=ve(t);return e.le||(e.le=bC(e,Vs(t))),e.le}function bC(t,e){if(t.limitType==="F")return dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Yc(i.field,o)});const n=t.endAt?new Qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qc(t.startAt.position,t.startAt.inclusive):null;return dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qf(t,e,n){return new Nu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yx(t,e){return Tm(yi(t),yi(e))&&t.limitType===e.limitType}function vx(t){return`${Em(yi(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mx(i)).join(", ")}]`),_m(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>jo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>jo(i)).join(",")),`Target(${r})`}(yi(t))}; limitType=${t.limitType})`}function bm(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ee.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Vs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,c){const u=cy(s,l,c);return s.inclusive?u<=0:u<0}(r.startAt,Vs(r),i)||r.endAt&&!function(s,l,c){const u=cy(s,l,c);return s.inclusive?u>=0:u>0}(r.endAt,Vs(r),i))}(t,e)}function SC(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const o=kC(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function kC(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(o,s,l){const c=s.data.field(o),u=l.data.field(o);return c!==null&&u!==null?Ro(c,u):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ra(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return lx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new Dt(ee.comparator);function Kc(){return IC}const _x=new Dt(ee.comparator);function Il(...t){let e=_x;for(const n of t)e=e.insert(n.key,n);return e}function wx(t){let e=_x;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ui(){return zs()}function xx(){return zs()}function zs(){return new Ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const CC=new Dt(ee.comparator),AC=new _t(ee.comparator);function vt(...t){let e=AC;for(const n of t)e=e.add(n);return e}const PC=new _t(me);function RC(){return PC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function Ex(t){return{integerValue:""+t}}function jC(t,e){return oC(e)?Ex(e):Sm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this._=void 0}}function OC(t,e,n){return t instanceof Xc?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&wm(o)&&(o=cx(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof va?bx(t,e):t instanceof _a?Sx(t,e):function(i,o){const s=Tx(i,o),l=fy(s)+fy(i.Pe);return Wf(s)&&Wf(i.Pe)?Ex(l):Sm(i.serializer,l)}(t,e)}function NC(t,e,n){return t instanceof va?bx(t,e):t instanceof _a?Sx(t,e):n}function Tx(t,e){return t instanceof Jc?function(r){return Wf(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Xc extends Mu{}class va extends Mu{constructor(e){super(),this.elements=e}}function bx(t,e){const n=kx(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _a extends Mu{constructor(e){super(),this.elements=e}}function Sx(t,e){let n=kx(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class Jc extends Mu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function fy(t){return st(t.integerValue||t.doubleValue)}function kx(t){return xm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof va&&i instanceof va||r instanceof _a&&i instanceof _a?Ao(r.elements,i.elements,Mn):r instanceof Jc&&i instanceof Jc?Mn(r.Pe,i.Pe):r instanceof Xc&&i instanceof Xc}(t.transform,e.transform)}class LC{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lu{}function Ix(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ax(t.key,Rn.none()):new ja(t.key,t.data,Rn.none());{const n=t.data,r=pn.empty();let i=new _t(at.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Oi(t.key,r,new mn(i.toArray()),Rn.none())}}function DC(t,e,n){t instanceof ja?function(i,o,s){const l=i.value.clone(),c=my(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Oi?function(i,o,s){if(!tc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=my(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(Cx(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof ja?function(o,s,l,c){if(!tc(o.precondition,s))return l;const u=o.value.clone(),f=gy(o.fieldTransforms,c,s);return u.setAll(f),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Oi?function(o,s,l,c){if(!tc(o.precondition,s))return l;const u=gy(o.fieldTransforms,c,s),f=s.data;return f.setAll(Cx(o)),f.setAll(u),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,l){return tc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function FC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=Tx(r.transform,i||null);o!=null&&(n===null&&(n=pn.empty()),n.set(r.field,o))}return n||null}function py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ao(r,i,(o,s)=>MC(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ja extends Lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Oi extends Lu{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function my(t,e,n){const r=new Map;Qe(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,NC(s,l,n[i]))}return r}function gy(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,OC(o,s,e))}return r}class Ax extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VC extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&DC(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const c=Ix(s,l);c!==null&&r.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(je.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),vt())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(n,r)=>py(n,r))&&Ao(this.baseMutations,e.baseMutations,(n,r)=>py(n,r))}}class km{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Qe(e.mutations.length===r.length);let i=function(){return CC}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new km(e,n,r,i)}}/**
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
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,oe;function $C(t){switch(t){default:return ie();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function UC(t){if(t===void 0)return Ai("GRPC error has no .code"),B.UNKNOWN;switch(t){case $e.OK:return B.OK;case $e.CANCELLED:return B.CANCELLED;case $e.UNKNOWN:return B.UNKNOWN;case $e.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case $e.INTERNAL:return B.INTERNAL;case $e.UNAVAILABLE:return B.UNAVAILABLE;case $e.UNAUTHENTICATED:return B.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case $e.NOT_FOUND:return B.NOT_FOUND;case $e.ALREADY_EXISTS:return B.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return B.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case $e.ABORTED:return B.ABORTED;case $e.OUT_OF_RANGE:return B.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return B.UNIMPLEMENTED;case $e.DATA_LOSS:return B.DATA_LOSS;default:return ie()}}(oe=$e||($e={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Xw([4294967295,4294967295],0);class HC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GC(t,e){return Qf(t,e.toTimestamp())}function fo(t){return Qe(!!t),je.fromTimestamp(function(n){const r=Pi(n);return new tt(r.seconds,r.nanos)}(t))}function Px(t,e){return Yf(t,e).canonicalString()}function Yf(t,e){const n=function(i){return new ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qC(t){const e=ze.fromString(t);return Qe(tA(e)),e}function Kf(t,e){return Px(t.databaseId,e.path)}function QC(t){const e=qC(t);return e.length===4?ze.emptyPath():KC(e)}function YC(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KC(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yy(t,e,n){return{name:Kf(t,e),fields:n.value.mapValue.fields}}function XC(t,e){let n;if(e instanceof ja)n={update:yy(t,e.key,e.value)};else if(e instanceof Ax)n={delete:Kf(t,e.key)};else if(e instanceof Oi)n={update:yy(t,e.key,e.data),updateMask:eA(e.fieldMask)};else{if(!(e instanceof VC))return ie();n={verify:Kf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof Xc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof va)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _a)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jc)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:GC(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ie()}(t,e.precondition)),n}function JC(t,e){return t&&t.length>0?(Qe(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?fo(i.updateTime):fo(o);return s.isEqual(je.min())&&(s=fo(o)),new LC(s,i.transformResults||[])}(n,e))):[]}function ZC(t){let e=QC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const g=Rx(m);return g instanceof Ur&&fx(g)?g.getFilters():[g]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(g=>function(I){return new Yc($i(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,_m(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,T=m.values||[];return new Qc(T,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,T=m.values||[];return new Qc(T,g)}(n.endAt)),xC(e,i,s,o,l,"F",c,u)}function Rx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$i(n.unaryFilter.field);return Je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$i(n.unaryFilter.field);return Je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Je.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ur.create(n.compositeFilter.filters.map(r=>Rx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function $i(t){return at.fromServerFormat(t.fieldPath)}function eA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.ct=e}}function rA(t){const e=ZC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qf(e,e.limit,"L"):e}/**
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
 */class iA{constructor(){this.un=new oA}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve($r.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class oA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(ze.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oo(0)}static kn(){return new Oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.changes=new Ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class aA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,mn.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,vt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=vt()){const i=ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Il();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,vt()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=Kc();const s=zs(),l=function(){return zs()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Oi)?o=o.insert(u.key,u):f!==void 0?(s.set(u.key,f.mutation.getFieldMask()),Bs(f.mutation,u,f.mutation.getFieldMask(),tt.now())):s.set(u.key,mn.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((u,f)=>s.set(u,f)),n.forEach((u,f)=>{var m;return l.set(u,new aA(f,(m=s.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new Dt((s,l)=>s-l),o=vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||mn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(i.get(l.batchId)||vt()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=xx();f.forEach(g=>{if(!o.has(g)){const T=Ix(n.get(g),r.get(g));T!==null&&m.set(g,T),o=o.add(g)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,m))}return V.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return ee.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):V.resolve(ui());let l=-1,c=o;return s.next(u=>V.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),o.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,c,u,vt())).next(f=>({batchId:l,changes:wx(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Il();return this.indexManager.getCollectionParents(e,o).next(l=>V.forEach(l,c=>{const u=function(m,g){return new Nu(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((m,g)=>{s=s.insert(m,g)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((c,u)=>{const f=u.getKey();s.get(f)===null&&(s=s.insert(f,fn.newInvalidDocument(f)))});let l=Il();return s.forEach((c,u)=>{const f=o.get(c);f!==void 0&&Bs(f.mutation,u,mn.empty(),tt.now()),bm(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fo(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:rA(i.bundledQuery),readTime:fo(i.readTime)}}(n)),V.resolve()}}/**
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
 */class uA{constructor(){this.overlays=new Dt(ee.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ui();return V.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=ui(),o=n.length+1,s=new ee(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Dt((u,f)=>u-f);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=o.get(u.largestBatchId);f===null&&(f=ui(),o=o.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ui(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let o=this.Ir.get(n);o===void 0&&(o=vt(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.sessionToken=Nn.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.Tr=new _t(Ye.Er),this.dr=new _t(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new ze([])),r=new Ye(n,e),i=new Ye(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new ze([])),r=new Ye(n,e),i=new Ye(n,e+1);let o=vt();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(Ye.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zC(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new Ye(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(s)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const l=this.Dr(s.wr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(me);return n.forEach(i=>{const o=new Ye(i,0),s=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;ee.isDocumentKey(o)||(o=o.child(""));const s=new Ye(new ee(o),0);let l=new _t(me);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},s),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const o=new Ye(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.Mr=e,this.docs=function(){return new Dt(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():fn.newInvalidDocument(n))}getEntries(e,n){let r=Kc();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():fn.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Kc();const s=n.path,l=new ee(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||tC(eC(f),r)<=0||(i.has(f.key)||bm(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ie()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pA(this)}getSize(e){return V.resolve(this.size)}}class pA extends sA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.persistence=e,this.Nr=new Ho(n=>Em(n),Tm),this.lastRemoteSnapshotVersion=je.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Im,this.targetCount=0,this.kr=Oo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ax(0),this.Kr=!1,this.Kr=!0,this.$r=new dA,this.referenceDelegate=e(this),this.Ur=new mA(this),this.indexManager=new iA,this.remoteDocumentCache=function(i){return new fA(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nA(n),this.Gr=new cA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new hA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new yA(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class yA extends rC{constructor(e){super(),this.currentSequenceNumber=e}}class Cm{constructor(e){this.persistence=e,this.Jr=new Im,this.Yr=null}static Zr(e){return new Cm(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=ee.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,je.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=vt(),i=vt();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Am(e,n.fromCache,r,i)}}/**
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
 */class vA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _A{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ik()?8:iC(Sk())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new vA;return this.Xi(e,n,s).next(l=>{if(o.result=l,this.zi)return this.es(e,n,s,l.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ps()<=se.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(ps()<=se.DEBUG&&Q("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ps()<=se.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yi(n))):V.resolve())}Yi(e,n){if(hy(n))return V.resolve(null);let r=yi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qf(n,null,"F"),r=yi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=vt(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,s,c.readTime)?this.Yi(e,qf(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,i){return hy(n)||i.isEqual(je.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?V.resolve(null):(ps()<=se.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ms(n)),this.rs(e,s,n,ZI(i,-1)).next(l=>l))})}ts(e,n){let r=new _t(SC(e));return n.forEach((i,o)=>{bm(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return ps()<=se.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",ms(n)),this.Ji.getDocumentsMatchingQuery(e,n,$r.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Dt(me),this._s=new Ho(o=>Em(o),Tm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function xA(t,e,n,r){return new wA(t,e,n,r)}async function jx(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let c=vt();for(const u of i){s.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of o){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:l}))})})}function EA(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let T=V.resolve();return g.forEach(I=>{T=T.next(()=>f.getEntry(c,I)).next(A=>{const R=u.docVersions.get(I);Qe(R!==null),A.version.compareTo(R)<0&&(m.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),f.addEntry(A)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=vt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TA(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bA(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class vy{constructor(){this.activeTargetIds=RC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SA{constructor(){this.so=new vy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kA{_o(e){}shutdown(){}}/**
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
 */class _y{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cl=null;function ih(){return Cl===null?Cl=function(){return 268435456+Math.round(2147483648*Math.random())}():Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class AA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const l=ih(),c=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,o,s),this.No(n,c,u,i).then(f=>(Q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Hc("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(n,r,i,o,s,l){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=IA[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=ih();return new Promise((s,l)=>{const c=new Jw;c.setWithCredentials(!0),c.listenOnce(ex.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Zl.NO_ERROR:const f=c.getResponseJson();Q(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Zl.TIMEOUT:Q(mt,`RPC '${e}' ${o} timed out`),l(new Y(B.DEADLINE_EXCEEDED,"Request time out"));break;case Zl.HTTP_ERROR:const m=c.getStatus();if(Q(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const I=function(R){const x=R.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(x)>=0?x:B.UNKNOWN}(T.status);l(new Y(I,T.message))}else l(new Y(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(B.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{Q(mt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);Q(mt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const i=ih(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rx(),l=nx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Zw({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=o.join("");Q(mt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=s.createWebChannel(f,c);let g=!1,T=!1;const I=new CA({Io:R=>{T?Q(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(Q(mt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),Q(mt,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},To:()=>m.close()}),A=(R,x,v)=>{R.listen(x,E=>{try{v(E)}catch(P){setTimeout(()=>{throw P},0)}})};return A(m,Ss.EventType.OPEN,()=>{T||(Q(mt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),A(m,Ss.EventType.CLOSE,()=>{T||(T=!0,Q(mt,`RPC '${e}' stream ${i} transport closed`),I.So())}),A(m,Ss.EventType.ERROR,R=>{T||(T=!0,Hc(mt,`RPC '${e}' stream ${i} transport errored:`,R),I.So(new Y(B.UNAVAILABLE,"The operation could not be completed")))}),A(m,Ss.EventType.MESSAGE,R=>{var x;if(!T){const v=R.data[0];Qe(!!v);const E=v,P=E.error||((x=E[0])===null||x===void 0?void 0:x.error);if(P){Q(mt,`RPC '${e}' stream ${i} received error:`,P);const L=P.status;let N=function(b){const S=$e[b];if(S!==void 0)return UC(S)}(L),w=P.message;N===void 0&&(N=B.INTERNAL,w="Unknown error status: "+L+" with message "+P.message),T=!0,I.So(new Y(N,w)),m.close()}else Q(mt,`RPC '${e}' stream ${i} received:`,v),I.bo(v)}}),A(l,tx.STAT_EVENT,R=>{R.stat===Uf.PROXY?Q(mt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Uf.NOPROXY&&Q(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new HC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,r,i,o,s,l,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ox(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Ai(n.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RA extends PA{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Qe(!!e.streamToken),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=JC(e.writeResults,e.commitTime),r=fo(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=YC(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Yf(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(B.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Yf(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(B.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class OA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ai(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Na(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.L_.add(4),await Oa(u),u.q_.set("Unknown"),u.L_.delete(4),await Fu(u)}(this))})}),this.q_=new OA(r,i)}}async function Fu(t){if(Na(t))for(const e of t.B_)await e(!0)}async function Oa(t){for(const e of t.B_)await e(!1)}function Na(t){return ve(t).L_.size===0}async function Nx(t,e,n){if(!Ou(e))throw e;t.L_.add(1),await Oa(t),t.q_.set("Offline"),n||(n=()=>TA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fu(t)})}function Mx(t,e){return e().catch(n=>Nx(t,n,e))}async function Vu(t){const e=ve(t),n=Hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;MA(e);)try{const i=await bA(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,LA(e,i)}catch(i){await Nx(e,i)}Lx(e)&&Dx(e)}function MA(t){return Na(t)&&t.O_.length<10}function LA(t,e){t.O_.push(e);const n=Hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Lx(t){return Na(t)&&!Hr(t).n_()&&t.O_.length>0}function Dx(t){Hr(t).start()}async function DA(t){Hr(t).p_()}async function FA(t){const e=Hr(t);for(const n of t.O_)e.m_(n.mutations)}async function VA(t,e,n){const r=t.O_.shift(),i=km.from(r,e,n);await Mx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vu(t)}async function zA(t,e){e&&Hr(t).V_&&await async function(r,i){if(function(s){return $C(s)&&s!==B.ABORTED}(i.code)){const o=r.O_.shift();Hr(r).s_(),await Mx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Vu(r)}}(t,e),Lx(t)&&Dx(t)}async function wy(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Na(n);n.L_.add(3),await Oa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fu(n)}async function BA(t,e){const n=ve(t);e?(n.L_.delete(2),await Fu(n)):e||(n.L_.add(2),await Oa(n),n.q_.set("Unknown"))}function Hr(t){return t.U_||(t.U_=function(n,r,i){const o=ve(n);return o.w_(),new RA(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DA.bind(null,t),mo:zA.bind(null,t),f_:FA.bind(null,t),g_:VA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Vu(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Pm(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fx(t,e){if(Ai("AsyncQueue",`${e}: ${t}`),Ou(t))return new Y(B.UNAVAILABLE,`${e}: ${t}`);throw t}class $A{constructor(){this.queries=xy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ve(n),o=i.queries;i.queries=xy(),o.forEach((s,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Y(B.ABORTED,"Firestore shutting down"))}}function xy(){return new Ho(t=>vx(t),yx)}function UA(t){t.Y_.forEach(e=>{e.next()})}var Ey,Ty;(Ty=Ey||(Ey={})).ea="default",Ty.Cache="cache";class HA{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Ho(l=>vx(l),yx),this.Ma=new Map,this.xa=new Set,this.Oa=new Dt(ee.comparator),this.Na=new Map,this.La=new Im,this.Ba={},this.ka=new Map,this.qa=Oo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WA(t,e,n){const r=YA(t);try{const i=await function(s,l){const c=ve(s),u=tt.now(),f=l.reduce((T,I)=>T.add(I.key),vt());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let I=Kc(),A=vt();return c.cs.getEntries(T,f).next(R=>{I=R,I.forEach((x,v)=>{v.isValidDocument()||(A=A.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,I)).next(R=>{m=R;const x=[];for(const v of l){const E=FC(v,m.get(v.key).overlayedDocument);E!=null&&x.push(new Oi(v.key,E,ux(E.value.mapValue),Rn.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,x,l)}).next(R=>{g=R;const x=R.applyToLocalDocumentSet(m,A);return c.documentOverlayCache.saveOverlays(T,R.batchId,x)})}).then(()=>({batchId:g.batchId,changes:wx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let u=s.Ba[s.currentUser.toKey()];u||(u=new Dt(me)),u=u.insert(l,c),s.Ba[s.currentUser.toKey()]=u}(r,i.batchId,n),await zu(r,i.changes),await Vu(r.remoteStore)}catch(i){const o=Fx(i,"Failed to persist write");n.reject(o)}}function by(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=ve(s);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(u=!0)}),u&&UA(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GA(t,e){const n=ve(t),r=e.batch.batchId;try{const i=await EA(n.localStore,e);zx(n,r,null),Vx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zu(n,i)}catch(i){await sx(i)}}async function qA(t,e,n){const r=ve(t);try{const i=await function(s,l){const c=ve(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(Qe(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);zx(r,e,n),Vx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zu(r,i)}catch(i){await sx(i)}}function Vx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function zx(t,e,n){const r=ve(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function zu(t,e,n){const r=ve(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{s.push(r.Ka(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=Am.Wi(c.targetId,u);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(c,u){const f=ve(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(u,g=>V.forEach(g.$i,T=>f.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>V.forEach(g.Ui,T=>f.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Ou(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const T=f.os.get(g),I=T.snapshotVersion,A=T.withLastLimboFreeSnapshotVersion(I);f.os=f.os.insert(g,A)}}}(r.localStore,o))}async function QA(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await jx(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new Y(B.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zu(n,r.hs)}}function YA(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qA.bind(null,e),e}class Sy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return xA(this.persistence,new _A,e.initialUser,this.serializer)}createPersistence(e){return new gA(Cm.Zr,this.serializer)}createSharedClientState(e){return new SA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>by(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QA.bind(null,this.syncEngine),await BA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $A}()}createDatastore(e){const n=Du(e.databaseInfo.databaseId),r=function(o){return new AA(o)}(e.databaseInfo);return function(o,s,l,c){return new jA(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new NA(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>by(this.syncEngine,n,0),function(){return _y.D()?new _y:new kA}())}createSyncEngine(e,n){return function(i,o,s,l,c,u,f){const m=new HA(i,o,s,l,c,u);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ve(i);Q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Oa(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=ox.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fx(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sh(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ky(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZA(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>wy(e.remoteStore,i)),t._onlineComponents=e}function JA(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JA(n))throw n;Hc("Error using user provided cache. Falling back to memory cache: "+n),await sh(t,new Sy)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await sh(t,new Sy);return t._offlineComponents}async function e9(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await ky(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await ky(t,new KA))),t._onlineComponents}function t9(t){return e9(t).then(e=>e.syncEngine)}/**
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
 */function Bx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t,e,n){if(!n)throw new Y(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n9(t,e,n,r){if(e===!0&&r===!0)throw new Y(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cy(t){if(!ee.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ay(t){if(ee.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Zc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rm(t);throw new Y(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Py({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Py(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HI;switch(r.type){case"firstParty":return new QI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iy.get(n);r&&(Q("ComponentProvider","Removing Datastore"),Iy.delete(n),r.terminate())}(this),Promise.resolve()}}function r9(t,e,n,r={}){var i;const o=(t=Zc(t,Bu))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Hc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=gt.MOCK_USER;else{l=bk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(u)}t._authCredentials=new WI(new ix(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jm(this.firestore,e,this._query)}}class jn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jn(this.firestore,e,this._key)}}class Lr extends jm{constructor(e,n,r){super(e,n,EC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jn(this.firestore,null,new ee(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function Om(t,e,...n){if(t=ha(t),$x("collection","path",e),t instanceof Bu){const r=ze.fromString(e,...n);return Ay(r),new Lr(t,null,r)}{if(!(t instanceof jn||t instanceof Lr))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Ay(r),new Lr(t.firestore,null,r)}}function Ux(t,e,...n){if(t=ha(t),arguments.length===1&&(e=ox.newId()),$x("doc","path",e),t instanceof Bu){const r=ze.fromString(e,...n);return Cy(r),new jn(t,null,new ee(r))}{if(!(t instanceof jn||t instanceof Lr))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Cy(r),new jn(t.firestore,t instanceof Lr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ox(this,"async_queue_retry"),this.Eu=()=>{const n=oh();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new gi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Ou(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Ai("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Pm.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(i),i}du(){this.hu&&ie()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Nm extends Bu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new i9}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hx(this),this._firestoreClient.terminate()}}function o9(t,e){const n=typeof t=="object"?t:jI(),r=typeof t=="string"?t:"(default)",i=CI(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ek("firestore");o&&r9(i,...o)}return i}function s9(t){return t._firestoreClient||Hx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hx(t){var e,n,r;const i=t._freezeSettings(),o=function(l,c,u,f){return new lC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Bx(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XA(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wa(Nn.fromBase64String(e))}catch(n){throw new Y(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wa(Nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a9=/^__.*__$/;class l9{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ja(e,this.data,n,this.fieldTransforms)}}function Yx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Mm{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return eu(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Yx(this.wu)&&a9.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class c9{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Du(e)}Nu(e,n,r,i=!1){return new Mm({wu:e,methodName:n,Ou:r,path:at.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kx(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new c9(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xx(t,e,n,r,i,o={}){const s=t.Nu(o.merge||o.mergeFields?2:0,e,n,i);t4("Data must be an object, but it was:",s,r);const l=Zx(r,s);let c,u;if(o.merge)c=new mn(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const g=u9(e,m,n);if(!s.contains(g))throw new Y(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);f9(f,g)||f.push(g)}c=new mn(f),u=s.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=s.fieldTransforms;return new l9(new pn(l),c,u)}function Jx(t,e){if(e4(t=ha(t)))return t4("Unsupported field value:",e,t),Zx(t,e);if(t instanceof Gx)return function(r,i){if(!Yx(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let c=Jx(l,i.Fu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=ha(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=tt.fromDate(r);return{timestampValue:Qf(i.serializer,o)}}if(r instanceof tt){const o=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qf(i.serializer,o)}}if(r instanceof qx)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wa)return{bytesValue:WC(i.serializer,r._byteString)};if(r instanceof jn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Px(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Qx)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(c=>{if(typeof c!="number")throw l.Mu("VectorValues must only contain numeric values.");return Sm(l.serializer,c)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Rm(r)}`)}(t,e)}function Zx(t,e){const n={};return lx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ra(t,(r,i)=>{const o=Jx(i,e.bu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function e4(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof qx||t instanceof wa||t instanceof jn||t instanceof Gx||t instanceof Qx)}function t4(t,e,n){if(!e4(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rm(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function u9(t,e,n){if((e=ha(e))instanceof Wx)return e._internalPath;if(typeof e=="string")return h9(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const d9=new RegExp("[~\\*/\\[\\]]");function h9(t,e,n){if(e.search(d9)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wx(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new Y(B.INVALID_ARGUMENT,l+t+c)}function f9(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function p9(t,e,n){t=Zc(t,jn);const r=Zc(t.firestore,Nm),i=n4(t.converter,e);return i4(r,[Xx(Kx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function r4(t,e){const n=Zc(t.firestore,Nm),r=Ux(t),i=n4(t.converter,e);return i4(n,[Xx(Kx(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Rn.exists(!1))]).then(()=>r)}function i4(t,e){return function(r,i){const o=new gi;return r.asyncQueue.enqueueAndForget(async()=>WA(await t9(r),i,o)),o.promise}(s9(t),e)}(function(e,n=!0){(function(i){Uo=i})(RI),Uc(new fa("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new Nm(new GI(r.getProvider("auth-internal")),new KI(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qc(u.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ho(iy,"4.7.0",e),ho(iy,"4.7.0","esm2017")})();const m9={apiKey:"AIzaSyBmR3GSVYkjoqB3abYYPo0NqhyDX-ILUKU",authDomain:"lead-generation-database.firebaseapp.com",projectId:"lead-generation-database",storageBucket:"lead-generation-database.appspot.com",messagingSenderId:"42227662086",appId:"1:42227662086:web:cc1043134a2cebdf66f287"},g9=Qw(m9),Lm=o9(g9),y9=()=>{const[t,e]=D.useState(""),n=l=>{e(l.target.value)},r=async l=>{l.preventDefault();try{const c=new Date().toISOString().split("T")[0],u=await r4(Om(Lm,"submissions"),{phone:t});console.log("Document written with ID: ",u.id),e("")}catch(c){console.error("Error adding document: ",c)}},i="+917645086121",o=encodeURIComponent("Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?"),s=`https://wa.me/${i}?text=${o}`;return h.jsxs(v9,{children:[h.jsx("section",{className:"contact-short","aria-labelledby":"contact-short-heading",children:h.jsxs("div",{className:"grid grid-two-column",children:[h.jsx("div",{className:"contact-text",children:h.jsx("h3",{id:"contact-short-heading",children:"Talk to us today"})}),h.jsx("div",{className:"contact-short-btn",children:h.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:h.jsxs(_9,{children:[h.jsx(Ut,{icon:Vw,className:"whatsapp-icon","aria-hidden":"true"}),h.jsx("span",{children:"Contact Us"})]})})})]})}),h.jsx("footer",{"aria-labelledby":"footer-heading",role:"contentinfo",children:h.jsxs("div",{className:"container grid grid-four-column",children:[h.jsxs("div",{className:"footer-about",children:[h.jsxs("h3",{id:"footer-heading",children:[h.jsx("span",{className:"stock",children:"Stock"})," ",h.jsx("span",{className:"archery",children:"Archery"})]}),h.jsx("a",{href:"/","aria-label":"Visit our homepage",children:h.jsx("p",{children:"Besides Babulal Sweets, Manik Sarkar Chowk, Adampur, Bhagalpur 812001, Bihar."})})]}),h.jsxs("div",{className:"footer-subscribe",children:[h.jsx("h3",{children:"Feel Free to Contact Us"}),h.jsxs("form",{onSubmit:r,"aria-labelledby":"subscribe-form-heading",children:[h.jsx("input",{id:"phone-input",name:"phone",type:"tel",required:!0,autoComplete:"off",placeholder:"Phone number",value:t,onChange:n}),h.jsx("input",{type:"submit",value:"Submit","aria-label":"Submit subscription form"})]})]}),h.jsxs("div",{className:"footer-social",children:[h.jsx("h3",{children:"Follow Us"}),h.jsxs("div",{className:"footer-social--icons",role:"list",children:[h.jsx("a",{href:"https://www.linkedin.com/company/stockarchery/",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on LinkedIn",children:h.jsx(Ut,{icon:mm,style:{color:"#0077b5"},className:"icons"})}),h.jsx("a",{href:"https://www.instagram.com/stock.archery/?hl=en",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Instagram",children:h.jsx(Ut,{icon:Fw,style:{color:"#e1306c"},className:"icons"})}),h.jsx("a",{href:"https://www.youtube.com/@stock.archery",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on YouTube",children:h.jsx(Ut,{icon:dk,style:{color:"#ff0000"},className:"icons"})}),h.jsx("a",{href:"https://x.com/stockarchery",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Twitter",children:h.jsx(Ut,{icon:zw,style:{color:"#0077b5"},className:"icons"})})]})]}),h.jsxs("div",{className:"footer-contact",children:[h.jsx("h3",{children:"Call Us"}),h.jsx("a",{href:"tel:+919229102334","aria-label":"Call us at +91 9229102334",children:h.jsx("h3",{children:"+91 9229102334"})}),h.jsx("a",{href:"tel:+918252052601","aria-label":"Call us at +91 8252052601",children:h.jsx("h3",{children:"+91 8252052601"})})]})]})})]})},v9=X.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgba(37, 37, 37, 255);
    border-radius: 2rem;
    border: 3px solid #febb12;
    box-shadow: ${({theme:t})=>t.colors.shadowSupport};
    transform: translateY(50%);

    .grid {
      display: grid;
      gap: 2rem;

      .contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #febb12;
      }

      .contact-short-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none; /* Remove underline from the link */
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(37, 37, 37, 255);

    h3 {
      color: ${({theme:t})=>t.colors.yellow};
      margin-bottom: 2.4rem;
      font-size: 2rem;
    }

    .stock {
      color: #ffffff; /* White color for Stock */
    }

    .archery {
      color: #febb12; /* Existing color for Archery */
    }

    p {
      color: #febb12;
      font-size: 1.5rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      .icons {
        font-size: 2.0rem;
        color: inherit; /* Use color from parent element */
        cursor: pointer;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="tel"] {
          width: 250px;
          padding: 0.75rem 1rem;
          border-radius: 1.5rem;
          border: 2px solid ${({theme:t})=>t.colors.yellow};
        }

        input[type="submit"] {
          width: 150px;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid #febb12;
          background-color: #febb12;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #e6c072;
            border-color: #febb12;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({theme:t})=>t.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .contact-short {
      max-width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .contact-short-btn {
        margin-top: 2rem;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`,_9=X.button`
  background-color: #28a745; /* Green color */
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1.5rem; /* Added border radius */

  .whatsapp-icon {
    font-size: 2rem; /* Size of the WhatsApp icon */
  }

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`,o4=X.button`
  text-decoration: none;
  max-width: auto;
  background-color: #fdbe11;
  color: #252525;
  padding: 1.4rem 2.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
   box-shadow: 0 2rem 2rem 0 rgba(196, 143, 33, 0.3);

    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #252525;
    font-size: 1.8rem;
    
  }
`,w9=(t,e)=>{switch(e.type){case"HOME_UPDATE":return{...t,name:e.payload.name,image:e.payload.image,paragraph:e.payload.paragraph};case"ABOUT_UPDATE":return{...t,name:e.payload.name,image:e.payload.image,paragraph:e.payload.paragraph};case"VIDEO_UPDATE":return{...t,name2:e.payload.name2,paragraph2:e.payload.paragraph2};case"GET_SERVICES":return{...t,services:e.payload};default:return t}},s4=ge.createContext(),x9={name:"",image:"",paragraph:"",services:[]},E9=({children:t})=>{const[e,n]=D.useReducer(w9,x9),r=()=>n({type:"HOME_UPDATE",payload:{name:"STOCK ARCHERY",image:"./images/B.gif",paragraph:"Welcome to Stock Archery, your premier source for expert trading knowledge and strategies. Achieve trading success with our in-depth resources, tips, and insights tailored for savvy investors. Start mastering the market today"}}),i=()=>n({type:"ABOUT_UPDATE",payload:{name:"Bihar's First Trading Floor",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726054959/Screenshot__32_-removebg-preview_ahrfou.png",paragraph:"Introducing Stock Archery's  live trading classes—where education meets real-time trading. Gain hands-on experience and practical skills in our interactive sessions. Elevate your trading expertise with our unique, live-learning approach. Join now and experience the future of trading education"}}),o=()=>n({type:"VIDEO_UPDATE",payload:{name2:"STOCK ARCHERY",paragraph2:"First of its kind, we offer live trading classes where students can learn and trade in real-time. This unique approach combines education with practical trading experience, providing a hands-on learning environment."}});return D.useEffect(()=>{o()},[]),h.jsx(s4.Provider,{value:{...e,updateHomePage:r,updateAboutPage:i,updateVideoPage:o},children:t})},$u=()=>D.useContext(s4);var Fe={},Dm={},Ma={},La={},a4="Expected a function",Ry=NaN,T9="[object Symbol]",b9=/^\s+|\s+$/g,S9=/^[-+]0x[0-9a-f]+$/i,k9=/^0b[01]+$/i,I9=/^0o[0-7]+$/i,C9=parseInt,A9=typeof rl=="object"&&rl&&rl.Object===Object&&rl,P9=typeof self=="object"&&self&&self.Object===Object&&self,R9=A9||P9||Function("return this")(),j9=Object.prototype,O9=j9.toString,N9=Math.max,M9=Math.min,ah=function(){return R9.Date.now()};function L9(t,e,n){var r,i,o,s,l,c,u=0,f=!1,m=!1,g=!0;if(typeof t!="function")throw new TypeError(a4);e=jy(e)||0,tu(n)&&(f=!!n.leading,m="maxWait"in n,o=m?N9(jy(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g);function T(N){var w=r,_=i;return r=i=void 0,u=N,s=t.apply(_,w),s}function I(N){return u=N,l=setTimeout(x,e),f?T(N):s}function A(N){var w=N-c,_=N-u,b=e-w;return m?M9(b,o-_):b}function R(N){var w=N-c,_=N-u;return c===void 0||w>=e||w<0||m&&_>=o}function x(){var N=ah();if(R(N))return v(N);l=setTimeout(x,A(N))}function v(N){return l=void 0,g&&r?T(N):(r=i=void 0,s)}function E(){l!==void 0&&clearTimeout(l),u=0,r=c=i=l=void 0}function P(){return l===void 0?s:v(ah())}function L(){var N=ah(),w=R(N);if(r=arguments,i=this,c=N,w){if(l===void 0)return I(c);if(m)return l=setTimeout(x,e),T(c)}return l===void 0&&(l=setTimeout(x,e)),s}return L.cancel=E,L.flush=P,L}function D9(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(a4);return tu(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),L9(t,e,{leading:r,maxWait:e,trailing:i})}function tu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function F9(t){return!!t&&typeof t=="object"}function V9(t){return typeof t=="symbol"||F9(t)&&O9.call(t)==T9}function jy(t){if(typeof t=="number")return t;if(V9(t))return Ry;if(tu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=tu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(b9,"");var n=k9.test(t);return n||I9.test(t)?C9(t.slice(2),n?2:8):S9.test(t)?Ry:+t}var z9=D9,Da={};Object.defineProperty(Da,"__esModule",{value:!0});Da.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),nc.has(n)||nc.set(n,new Set);var o=nc.get(n);if(!o.has(i)){var s=function(){var l=!1;try{var c=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,c)}catch{}return l}();e.addEventListener(n,r,s?{passive:!0}:!1),o.add(i)}};Da.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),nc.get(n).delete(r.name||n)};var nc=new Map;Object.defineProperty(La,"__esModule",{value:!0});var B9=z9,$9=H9(B9),U9=Da;function H9(t){return t&&t.__esModule?t:{default:t}}var W9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,$9.default)(e,n)},Pe={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=W9(function(i){Pe.scrollHandler(e)},n);Pe.scrollSpyContainers.push(e),(0,U9.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return Pe.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=Pe.scrollSpyContainers[Pe.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(Pe.currentPositionX(e),Pe.currentPositionY(e))})},addStateHandler:function(e){Pe.spySetState.push(e)},addSpyHandler:function(e,n){var r=Pe.scrollSpyContainers[Pe.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(Pe.currentPositionX(n),Pe.currentPositionY(n))},updateStates:function(){Pe.spySetState.forEach(function(e){return e()})},unmount:function(e,n){Pe.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Pe.spySetState&&Pe.spySetState.length&&Pe.spySetState.indexOf(e)>-1&&Pe.spySetState.splice(Pe.spySetState.indexOf(e),1),document.removeEventListener("scroll",Pe.scrollHandler)},update:function(){return Pe.scrollSpyContainers.forEach(function(e){return Pe.scrollHandler(e)})}};La.default=Pe;var Wo={},Fa={};Object.defineProperty(Fa,"__esModule",{value:!0});var G9=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,i=r?"#"+r:"",o=window&&window.location,s=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",s):history.replaceState(history.state,"",s)},q9=function(){return window.location.hash.replace(/^#/,"")},Q9=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},Y9=function(e){return getComputedStyle(e).position!=="static"},lh=function(e,n){for(var r=e.offsetTop,i=e.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},K9=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Y9(e)){if(n.offsetParent!==e){var i=function(f){return f===e||f===document},o=lh(n,i),s=o.offsetTop,l=o.offsetParent;if(l!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return s}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var c=function(f){return f===document};return lh(n,c).offsetTop-lh(e,c).offsetTop};Fa.default={updateHash:G9,getHash:q9,filterElementInContainer:Q9,scrollOffset:K9};var Uu={},Fm={};Object.defineProperty(Fm,"__esModule",{value:!0});Fm.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Vm={};Object.defineProperty(Vm,"__esModule",{value:!0});var X9=Da,J9=["mousedown","mousewheel","touchmove","keydown"];Vm.default={subscribe:function(e){return typeof document<"u"&&J9.forEach(function(n){return(0,X9.addPassiveEventListener)(document,n,e)})}};var Va={};Object.defineProperty(Va,"__esModule",{value:!0});var Xf={registered:{},scrollEvent:{register:function(e,n){Xf.registered[e]=n},remove:function(e){Xf.registered[e]=null}}};Va.default=Xf;Object.defineProperty(Uu,"__esModule",{value:!0});var Z9=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eP=Fa;Hu(eP);var tP=Fm,Oy=Hu(tP),nP=Vm,rP=Hu(nP),iP=Va,Sn=Hu(iP);function Hu(t){return t&&t.__esModule?t:{default:t}}var l4=function(e){return Oy.default[e.smooth]||Oy.default.defaultEasing},oP=function(e){return typeof e=="function"?e:function(){return e}},sP=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Jf=function(){return sP()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),c4=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},u4=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},d4=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},aP=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},lP=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},cP=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){Sn.default.registered.end&&Sn.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=t.bind(null,e,n);Jf.call(window,o);return}Sn.default.registered.end&&Sn.default.registered.end(i.to,i.target,i.currentPosition)},zm=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},za=function(e,n,r,i){n.data=n.data||c4(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(rP.default.subscribe(o),zm(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?u4(n):d4(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Sn.default.registered.end&&Sn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=oP(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var s=l4(n),l=cP.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Sn.default.registered.begin&&Sn.default.registered.begin(n.data.to,n.data.target),Jf.call(window,l)},n.delay);return}Sn.default.registered.begin&&Sn.default.registered.begin(n.data.to,n.data.target),Jf.call(window,l)},Wu=function(e){return e=Z9({},e),e.data=e.data||c4(),e.absolute=!0,e},uP=function(e){za(0,Wu(e))},dP=function(e,n){za(e,Wu(n))},hP=function(e){e=Wu(e),zm(e),za(e.horizontal?aP(e):lP(e),e)},fP=function(e,n){n=Wu(n),zm(n);var r=n.horizontal?u4(n):d4(n);za(e+r,n)};Uu.default={animateTopScroll:za,getAnimationType:l4,scrollToTop:uP,scrollToBottom:hP,scrollTo:dP,scrollMore:fP};Object.defineProperty(Wo,"__esModule",{value:!0});var pP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mP=Fa,gP=Bm(mP),yP=Uu,vP=Bm(yP),_P=Va,Al=Bm(_P);function Bm(t){return t&&t.__esModule?t:{default:t}}var Pl={},Ny=void 0;Wo.default={unmount:function(){Pl={}},register:function(e,n){Pl[e]=n},unregister:function(e){delete Pl[e]},get:function(e){return Pl[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Ny=e},getActiveLink:function(){return Ny},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=pP({},n,{absolute:!1});var i=n.containerId,o=n.container,s=void 0;i?s=document.getElementById(i):o&&o.nodeType?s=o:s=document,n.absolute=!0;var l=n.horizontal,c=gP.default.scrollOffset(s,r,l)+(n.offset||0);if(!n.smooth){Al.default.registered.begin&&Al.default.registered.begin(e,r),s===document?n.horizontal?window.scrollTo(c,0):window.scrollTo(0,c):s.scrollTop=c,Al.default.registered.end&&Al.default.registered.end(e,r);return}vP.default.animateTopScroll(c,n,e,r)}};var Gu={};Object.defineProperty(Gu,"__esModule",{value:!0});var wP=Fa,ch=xP(wP);function xP(t){return t&&t.__esModule?t:{default:t}}var EP={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,i=r.get(e);if(i&&(n||e!==r.getActiveLink())){var o=this.containers[e]||document;r.scrollTo(e,{container:o})}},getHash:function(){return ch.default.getHash()},changeHash:function(e,n){this.isInitialized()&&ch.default.getHash()!==e&&ch.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Gu.default=EP;Object.defineProperty(Ma,"__esModule",{value:!0});var Rl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},TP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),bP=D,My=Ba(bP),SP=La,jl=Ba(SP),kP=Wo,IP=Ba(kP),CP=Pa,Se=Ba(CP),AP=Gu,hr=Ba(AP);function Ba(t){return t&&t.__esModule?t:{default:t}}function PP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function RP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function jP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ly={to:Se.default.string.isRequired,containerId:Se.default.string,container:Se.default.object,activeClass:Se.default.string,activeStyle:Se.default.object,spy:Se.default.bool,horizontal:Se.default.bool,smooth:Se.default.oneOfType([Se.default.bool,Se.default.string]),offset:Se.default.number,delay:Se.default.number,isDynamic:Se.default.bool,onClick:Se.default.func,duration:Se.default.oneOfType([Se.default.number,Se.default.func]),absolute:Se.default.bool,onSetActive:Se.default.func,onSetInactive:Se.default.func,ignoreCancelEvents:Se.default.bool,hashSpy:Se.default.bool,saveHashHistory:Se.default.bool,spyThrottle:Se.default.number};Ma.default=function(t,e){var n=e||IP.default,r=function(o){jP(s,o);function s(l){PP(this,s);var c=RP(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(c),c.state={active:!1},c}return TP(s,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c&&!u?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();jl.default.isMounted(c)||jl.default.mount(c,this.props.spyThrottle),this.props.hashSpy&&(hr.default.isMounted()||hr.default.mount(n),hr.default.mapContainer(this.props.to,c)),jl.default.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){jl.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u={};this.state&&this.state.active?u=Rl({},this.props.style,this.props.activeStyle):u=Rl({},this.props.style);var f=Rl({},this.props);for(var m in Ly)f.hasOwnProperty(m)&&delete f[m];return f.className=c,f.style=u,f.onClick=this.handleClick,My.default.createElement(t,f)}}]),s}(My.default.PureComponent),i=function(){var s=this;this.scrollTo=function(l,c){n.scrollTo(l,Rl({},s.state,c))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.spyHandler=function(l,c){var u=s.getScrollSpyContainer();if(!(hr.default.isMounted()&&!hr.default.isInitialized())){var f=s.props.horizontal,m=s.props.to,g=null,T=void 0,I=void 0;if(f){var A=0,R=0,x=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();x=v.left}if(!g||s.props.isDynamic){if(g=n.get(m),!g)return;var E=g.getBoundingClientRect();A=E.left-x+l,R=A+E.width}var P=l-s.props.offset;T=P>=Math.floor(A)&&P<Math.floor(R),I=P<Math.floor(A)||P>=Math.floor(R)}else{var L=0,N=0,w=0;if(u.getBoundingClientRect){var _=u.getBoundingClientRect();w=_.top}if(!g||s.props.isDynamic){if(g=n.get(m),!g)return;var b=g.getBoundingClientRect();L=b.top-w+c,N=L+b.height}var S=c-s.props.offset;T=S>=Math.floor(L)&&S<Math.floor(N),I=S<Math.floor(L)||S>=Math.floor(N)}var C=n.getActiveLink();if(I){if(m===C&&n.setActiveLink(void 0),s.props.hashSpy&&hr.default.getHash()===m){var j=s.props.saveHashHistory,k=j===void 0?!1:j;hr.default.changeHash("",k)}s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive(m,g))}if(T&&(C!==m||s.state.active===!1)){n.setActiveLink(m);var nt=s.props.saveHashHistory,an=nt===void 0?!1:nt;s.props.hashSpy&&hr.default.changeHash(m,an),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(m,g))}}}};return r.propTypes=Ly,r.defaultProps={offset:0},r};Object.defineProperty(Dm,"__esModule",{value:!0});var OP=D,Dy=h4(OP),NP=Ma,MP=h4(NP);function h4(t){return t&&t.__esModule?t:{default:t}}function LP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fy(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function DP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var FP=function(t){DP(e,t);function e(){var n,r,i,o;LP(this,e);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return o=(r=(i=Fy(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),i),i.render=function(){return Dy.default.createElement("a",i.props,i.props.children)},r),Fy(i,o)}return e}(Dy.default.Component);Dm.default=(0,MP.default)(FP);var $m={};Object.defineProperty($m,"__esModule",{value:!0});var VP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),zP=D,Vy=f4(zP),BP=Ma,$P=f4(BP);function f4(t){return t&&t.__esModule?t:{default:t}}function UP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function HP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function WP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var GP=function(t){WP(e,t);function e(){return UP(this,e),HP(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return VP(e,[{key:"render",value:function(){return Vy.default.createElement("button",this.props,this.props.children)}}]),e}(Vy.default.Component);$m.default=(0,$P.default)(GP);var Um={},qu={};Object.defineProperty(qu,"__esModule",{value:!0});var qP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},QP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),YP=D,zy=Qu(YP),KP=m_;Qu(KP);var XP=Wo,By=Qu(XP),JP=Pa,$y=Qu(JP);function Qu(t){return t&&t.__esModule?t:{default:t}}function ZP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e8(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function t8(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}qu.default=function(t){var e=function(n){t8(r,n);function r(i){ZP(this,r);var o=e8(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return QP(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;By.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){By.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return zy.default.createElement(t,qP({},this.props,{parentBindings:this.childBindings}))}}]),r}(zy.default.Component);return e.propTypes={name:$y.default.string,id:$y.default.string},e};Object.defineProperty(Um,"__esModule",{value:!0});var Uy=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n8=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r8=D,Hy=Hm(r8),i8=qu,o8=Hm(i8),s8=Pa,Wy=Hm(s8);function Hm(t){return t&&t.__esModule?t:{default:t}}function a8(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l8(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function c8(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p4=function(t){c8(e,t);function e(){return a8(this,e),l8(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return n8(e,[{key:"render",value:function(){var r=this,i=Uy({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,Hy.default.createElement("div",Uy({},i,{ref:function(s){r.props.parentBindings.domNode=s}}),this.props.children)}}]),e}(Hy.default.Component);p4.propTypes={name:Wy.default.string,id:Wy.default.string};Um.default=(0,o8.default)(p4);var uh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gy=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function qy(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qy(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Yy(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ol=D,ti=La,dh=Wo,Re=Pa,fr=Gu,Ky={to:Re.string.isRequired,containerId:Re.string,container:Re.object,activeClass:Re.string,spy:Re.bool,smooth:Re.oneOfType([Re.bool,Re.string]),offset:Re.number,delay:Re.number,isDynamic:Re.bool,onClick:Re.func,duration:Re.oneOfType([Re.number,Re.func]),absolute:Re.bool,onSetActive:Re.func,onSetInactive:Re.func,ignoreCancelEvents:Re.bool,hashSpy:Re.bool,spyThrottle:Re.number},u8={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||dh,i=function(s){Yy(l,s);function l(c){qy(this,l);var u=Qy(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,c));return o.call(u),u.state={active:!1},u}return Gy(l,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,f=this.props.container;return u?document.getElementById(u):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();ti.isMounted(u)||ti.mount(u,this.props.spyThrottle),this.props.hashSpy&&(fr.isMounted()||fr.mount(r),fr.mapContainer(this.props.to,u)),this.props.spy&&ti.addStateHandler(this.stateHandler),ti.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){ti.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var f=uh({},this.props);for(var m in Ky)f.hasOwnProperty(m)&&delete f[m];return f.className=u,f.onClick=this.handleClick,Ol.createElement(e,f)}}]),l}(Ol.Component),o=function(){var l=this;this.scrollTo=function(c,u){r.scrollTo(c,uh({},l.state,u))},this.handleClick=function(c){l.props.onClick&&l.props.onClick(c),c.stopPropagation&&c.stopPropagation(),c.preventDefault&&c.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){r.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(c){var u=l.getScrollSpyContainer();if(!(fr.isMounted()&&!fr.isInitialized())){var f=l.props.to,m=null,g=0,T=0,I=0;if(u.getBoundingClientRect){var A=u.getBoundingClientRect();I=A.top}if(!m||l.props.isDynamic){if(m=r.get(f),!m)return;var R=m.getBoundingClientRect();g=R.top-I+c,T=g+R.height}var x=c-l.props.offset,v=x>=Math.floor(g)&&x<Math.floor(T),E=x<Math.floor(g)||x>=Math.floor(T),P=r.getActiveLink();if(E)return f===P&&r.setActiveLink(void 0),l.props.hashSpy&&fr.getHash()===f&&fr.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),ti.updateStates();if(v&&P!==f)return r.setActiveLink(f),l.props.hashSpy&&fr.changeHash(f),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(f)),ti.updateStates()}}};return i.propTypes=Ky,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Yy(i,r);function i(o){qy(this,i);var s=Qy(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return s.childBindings={domNode:null},s}return Gy(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;dh.unregister(this.props.name)}},{key:"registerElems",value:function(s){dh.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return Ol.createElement(e,uh({},this.props,{parentBindings:this.childBindings}))}}]),i}(Ol.Component);return n.propTypes={name:Re.string,id:Re.string},n}},d8=u8;Object.defineProperty(Fe,"__esModule",{value:!0});Fe.Helpers=Fe.ScrollElement=Fe.ScrollLink=Fe.animateScroll=Fe.scrollSpy=Fe.Events=Fe.scroller=Fe.Element=Fe.Button=S4=Fe.Link=void 0;var h8=Dm,m4=Ln(h8),f8=$m,g4=Ln(f8),p8=Um,y4=Ln(p8),m8=Wo,v4=Ln(m8),g8=Va,_4=Ln(g8),y8=La,w4=Ln(y8),v8=Uu,x4=Ln(v8),_8=Ma,E4=Ln(_8),w8=qu,T4=Ln(w8),x8=d8,b4=Ln(x8);function Ln(t){return t&&t.__esModule?t:{default:t}}var S4=Fe.Link=m4.default;Fe.Button=g4.default;Fe.Element=y4.default;Fe.scroller=v4.default;Fe.Events=_4.default;Fe.scrollSpy=w4.default;Fe.animateScroll=x4.default;Fe.ScrollLink=E4.default;Fe.ScrollElement=T4.default;Fe.Helpers=b4.default;Fe.default={Link:m4.default,Button:g4.default,Element:y4.default,scroller:v4.default,Events:_4.default,scrollSpy:w4.default,animateScroll:x4.default,ScrollLink:E4.default,ScrollElement:T4.default,Helpers:b4.default};const E8=()=>{const{image:t,paragraph:e}=$u();return h.jsx(T8,{children:h.jsxs("div",{className:"container grid grid-two-column",children:[h.jsxs("div",{className:"section-hero-data",role:"banner","aria-labelledby":"hero-heading",children:[h.jsxs("h1",{id:"hero-heading",className:"hero-heading",children:[h.jsx("span",{className:"stock",children:"Stock"})," ",h.jsx("span",{className:"archery",children:"Archery"})]}),h.jsx("p",{className:"hero-para",children:e}),h.jsx(S4,{to:"sections-page",smooth:!0,duration:500,"aria-label":"Learn more about our services",children:h.jsx(o4,{className:"btn hireme-btn",children:"Know more"})})]}),h.jsxs("div",{className:"section-hero-image",role:"figure","aria-labelledby":"hero-image-caption",children:[h.jsx("picture",{children:h.jsx("img",{src:t,alt:"Hero illustration showing archery",className:"hero-img"})}),h.jsx("figcaption",{id:"hero-image-caption",className:"sr-only",children:"Hero illustration showing archery equipment and practice."})]})]})})},T8=X.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`,b8=X.div`
  display: flex;
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,S8=X.div`
  flex: 1;
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`,k8=X.div`
  flex: 1;
  padding: 0;
  margin: 0;

  h2 {
    font-size: 4rem;
    color: #fff;
    margin: 0;
    padding: 0;

    span {
      color: #febb12;
    }
  }

  p {
    font-size: 2rem;
    text-align: justify;
    color: #fdd788;
    margin: 40px 0 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,k4=()=>{const t=D.useRef(null);return D.useEffect(()=>{const e=t.current;if(e){e.muted=!0,e.preload="auto";const n=()=>{e.play().catch(i=>{console.error("Autoplay failed:",i)})};e.readyState>=3?n():e.addEventListener("canplaythrough",n,{once:!0});const r=()=>{e.currentTime=0,e.play().catch(i=>{console.error("Autoplay failed after looping:",i)})};return e.addEventListener("ended",r),()=>{e.removeEventListener("canplaythrough",n),e.removeEventListener("ended",r)}}},[]),h.jsxs(b8,{children:[h.jsx(S8,{children:h.jsxs("video",{ref:t,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",children:[h.jsx("source",{src:"/pro.mp4",type:"video/mp4"}),h.jsx("source",{src:"/pro.webm",type:"video/webm"}),"Your browser does not support the video tag."]})}),h.jsxs(k8,{children:[h.jsxs("h2",{children:["Bihar's ",h.jsx("span",{children:"First"})," Trading ",h.jsx("span",{children:"Floor"})]}),h.jsx("p",{children:"Experience Bihar’s premier stock market institute where education meets action. Our live trading classes allow students to learn and trade simultaneously in a real market setting. Gain hands-on experience, guided by expert mentors, and master strategies that work. Join us and elevate your trading skills with real-time practice."})]})]})},I8=X.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(33.333% - 20px);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8%;
    right: 0;
    width: 0.5px;
    height: 90%;
    background-color: #febb12;
    display: block;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;

    &::after {
      display: none;
    }
  }
`,C8=X.img`
  border-radius: 10px;
  width: 180px;  /* Fixed width */
  height: 160px; /* Fixed height */
  object-fit: cover; /* Ensures image covers the entire container without distortion */
  margin-bottom: 10px;
  background: #e0e0e0; /* Placeholder color */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 80%;  /* Adjust width for smaller screens */
    height: auto; /* Maintain aspect ratio */
  }
`,A8=X.h2`
  margin: 10px 0;
  font-size: 18px;
  color: #febb12;
`,P8=X.p`
  font-size: 14px;
  color: #FDD788;
`,R8=X.hr`
  border: none;
  border-top: 1px solid #febb12;
  margin: 20px 0;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,zi=({image:t,heading:e,text:n})=>{const[r,i]=D.useState(!1),o=()=>{i(!0)};return h.jsxs(h.Fragment,{children:[h.jsxs(I8,{children:[h.jsx(C8,{src:t,alt:e,onLoad:o,className:r?"loaded":""}),h.jsx(A8,{children:e}),h.jsx(P8,{children:n})]}),h.jsx(R8,{})]})},j8=X.div`
  padding: 20px;
  background-color: rgba(37, 37, 37, 1);
`,O8=X.h1`
  text-align: center;
  font-size: 50px;
  color: #febb12;
  margin-bottom: 40px;

  span {
    color: #fff;
  }
`,Xy=X.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,I4=()=>h.jsxs(j8,{id:"sections-page",children:[h.jsxs(O8,{children:[h.jsx("span",{children:"Our"})," Services"]}),h.jsxs(D.Suspense,{fallback:h.jsx("div",{children:"Loading..."}),children:[h.jsxs(Xy,{children:[h.jsx(zi,{image:"/one.jpeg",heading:h.jsx(h.Fragment,{children:h.jsx("strong",{children:"Bihar’s First Live Trading Institute"})}),text:"The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education."}),h.jsx(zi,{image:"/two.jpeg",heading:h.jsx(h.Fragment,{children:h.jsx("strong",{children:"Learn and Trade Simultaneously"})}),text:"Students gain hands-on experience by learning and trading in a live market environment."}),h.jsx(zi,{image:"/Three.jpg",heading:h.jsx(h.Fragment,{children:h.jsx("strong",{children:"Expert Mentor Guidance"})}),text:"Benefit from personalized instruction and proven strategies from seasoned trading professionals."})]}),h.jsxs(Xy,{children:[h.jsx(zi,{image:"/Four.jpg",heading:h.jsx(h.Fragment,{children:h.jsx("strong",{children:"Real-Time Market Exposure"})}),text:"Develop practical trading skills with immediate application in the live market."}),h.jsx(zi,{image:"/Five.jpg",heading:h.jsx(h.Fragment,{children:h.jsx("strong",{children:"Comprehensive Trading Experience"})}),text:"A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise."}),h.jsx(zi,{image:"/six.jpg",heading:h.jsx(h.Fragment,{children:h.jsx("strong",{children:"Interactive Learning Environment"})}),text:"Engage in an energetic and collaborative setting where real-time discussions and peer interactions enhance the learning experience."})]})]})]}),N8=()=>{const{updateHomePage:t}=$u();return D.useEffect(()=>t(),[]),h.jsxs(h.Fragment,{children:[h.jsx(E8,{}),h.jsx(k4,{}),h.jsx(I4,{})]})},C4=()=>{const{image:t,paragraph:e}=$u();return h.jsx(M8,{children:h.jsxs("div",{className:"container grid grid-two-column",children:[h.jsxs("div",{className:"section-hero-data",children:[h.jsxs("h1",{className:"hero-heading",children:[h.jsx("span",{className:"stock",children:"Stock"})," ",h.jsx("span",{className:"archery",children:"Archery"})]}),h.jsx("p",{className:"hero-para",children:e}),h.jsx(Jp,{to:"/content","aria-label":"Learn more about Stock Archery",children:h.jsx(o4,{className:"btn hireme-btn",children:"Know more"})})]}),h.jsx("div",{className:"section-hero-image",children:h.jsx("picture",{children:h.jsx("img",{src:t,alt:"Stock Archery promotional image",className:"hero-img"})})})]})})},M8=X.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`,L8=X.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #252525;
  gap: 40px;
`,D8=X.h1`
  color: #febb12;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  & span {
    color: #ffffff;
  }
`,A4=X.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  background-color: #252525;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,F8=X.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 30px;
  border: 6px solid #4a90e2;
  transition: transform 0.3s ease;

  ${A4}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`,V8=X.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  }
`,z8=X.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #febb12;
  font-weight: bold;
`,B8=X.h4`
  font-size: 2rem;
  margin: 5px 0;
  color: #febb12;
  font-weight: 2000;
`,$8=X.p`
  font-size: 1.5rem;
  color: #fdd788;
  margin: 10px 0;
  line-height: 1.6;
  max-width: 1500px;
`,U8=X.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`,hh=X.a`
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #8ebbf2;
    transform: scale(1.1);
  }
`,H8=({name:t,subject:e,bio:n,image:r,linkedin:i,twitter:o,instagram:s})=>h.jsx("article",{children:h.jsxs(A4,{children:[h.jsx(F8,{src:r,alt:`Portrait of ${t}`}),h.jsxs(V8,{children:[h.jsx(z8,{children:t}),h.jsx(B8,{children:e}),h.jsx($8,{children:n}),h.jsxs(U8,{children:[i&&h.jsx(hh,{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":`LinkedIn profile of ${t}`,children:h.jsx(Ut,{icon:mm,style:{color:"#0077b5"}})}),o&&h.jsx(hh,{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":`Twitter profile of ${t}`,children:h.jsx(Ut,{icon:zw,style:{color:"#000000"}})}),s&&h.jsx(hh,{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":`Instagram profile of ${t}`,children:h.jsx(Ut,{icon:Fw,style:{color:"#e1306c"}})})]})]})]})}),W8=()=>{const t=[{subject:"Prem Sandesh",bio:"With over eight years of experience in price action trading and a specialization in swing trades, I offer unparalleled expertise in market dynamics. My mission is to equip aspiring traders with essential insights and skills for confident, profitable market navigation. Discover comprehensive strategies and practical techniques tailored for success. Join me to enhance your trading skills and achieve remarkable results in the ever-evolving financial markets.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/t_Profile/v1726052942/Screenshot_30_fbcyw9.png",linkedin:"https://www.linkedin.com/in/prem-sandesh-b29927289/",twitter:"https://x.com/stockarchery",instagram:"https://www.instagram.com/stock.archery/"},{subject:"Kumar Ankit",bio:"Hello, I'm Kumar Ankit, your dedicated mentor—Certified Researcher, Trader, and Financial Advisor with nearly a decade of market experience. With my extensive expertise, I emphasize that mastering a single trading setup can lead to significant success in the stock market. My mission is to guide you in discovering that pivotal setup, ensuring you have the tools and knowledge needed to excel. Join me to unlock your trading potential and achieve financial success with proven strategies and personalized support. See you soon on your path to market mastery!",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/t_Profile/v1724152394/ankit_mwv8wb.png",linkedin:"https://www.linkedin.com/in/kumar-ankit-964823323/",twitter:"https://x.com/stockarchery",instagram:"https://www.instagram.com/stock.archery/"}];return h.jsxs(L8,{children:[h.jsxs(D8,{children:[h.jsx("span",{children:"Meet"})," Our Mentors"]}),t.map((e,n)=>h.jsx(H8,{...e},n))]})},G8=()=>{const{updateAboutPage:t}=$u();return D.useEffect(()=>{t()},[t]),h.jsxs("div",{children:[h.jsx(C4,{}),h.jsx(W8,{})]})},q8=()=>{const t=async n=>{n.preventDefault();const r=n.target,i={username:r.username.value,phonenumber:r.phonenumber.value,message:r.message.value,tradingExperience:r.tradingExperience.value,city:r.city.value,occupation:r.occupation.value};try{const o=new Date().toISOString().split("T")[0];await r4(Om(Lm,o),i),alert("Message sent successfully!")}catch(o){console.error("Error adding document: ",o),alert("Error sending message, please try again.")}r.reset()},e=X.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://source.unsplash.com/1600x900/?finance,technology") no-repeat center;
    background-size: cover;
    padding: 2rem;

    .container {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(15px);
      border-radius: 15px;
      padding: 3rem;
      width: 100%;
      max-width: 500px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    h2 {
      font-size: 2rem;
      color: #222; /* Dark color for better visibility */
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Soft shadow for readability */
      background: rgba(255, 255, 255, 0.6); /* Light background for contrast */
      padding: 0.5rem 1rem;
      border-radius: 8px;
      display: inline-block;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 10px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.9); /* White background for inputs */
      color: #222;
      outline: none;
      transition: all 0.3s ease;

      &::placeholder {
        color: #555;
      }

      &:focus {
        background: #fff;
        border-color: #ff7eb3;
        box-shadow: 0 0 10px rgba(255, 126, 179, 0.5);
      }
    }

    textarea {
      resize: none;
      min-height: 120px;
    }

    .submit-btn {
      background: linear-gradient(135deg, #ff7eb3, #ff5f9e);
      color: #fff;
      border: none;
      padding: 1rem;
      font-size: 1.2rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: linear-gradient(135deg, #ff5f9e, #ff3b80);
        transform: translateY(-3px);
      }
    }
  `;return h.jsx(e,{children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{children:"Get in Touch"}),h.jsxs("form",{onSubmit:t,className:"contact-form",children:[h.jsx("input",{type:"text",name:"username",placeholder:"Your Name",required:!0}),h.jsx("input",{type:"tel",name:"phonenumber",placeholder:"Phone Number",required:!0}),h.jsx("textarea",{name:"message",placeholder:"Your Message",required:!0}),h.jsx("input",{type:"text",name:"tradingExperience",placeholder:"Trading Experience"}),h.jsx("input",{type:"text",name:"city",placeholder:"City"}),h.jsx("input",{type:"text",name:"occupation",placeholder:"Occupation"}),h.jsx("button",{type:"submit",className:"submit-btn",children:"Send Message"})]})]})})};function Q8(t){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function Y8(t){return fe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function K8(t){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(t)}function X8(t){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(t)}function J8(t){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(t)}function Z8(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var P4=D,e7=Z8(P4);function Jy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function t7(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var n7=!!(typeof window<"u"&&window.document&&window.document.createElement);function r7(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],l;function c(){l=t(s.map(function(f){return f.props})),u.canUseDOM?e(l):n&&(l=n(l))}var u=function(f){t7(m,f);function m(){return f.apply(this,arguments)||this}m.peek=function(){return l},m.rewind=function(){if(m.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var I=l;return l=void 0,s=[],I};var g=m.prototype;return g.UNSAFE_componentWillMount=function(){s.push(this),c()},g.componentDidUpdate=function(){c()},g.componentWillUnmount=function(){var I=s.indexOf(this);s.splice(I,1),c()},g.render=function(){return e7.createElement(o,this.props)},m}(P4.PureComponent);return Jy(u,"displayName","SideEffect("+r(o)+")"),Jy(u,"canUseDOM",n7),u}}var i7=r7;const o7=Ea(i7);var s7=typeof Element<"u",a7=typeof Map=="function",l7=typeof Set=="function",c7=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function rc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!rc(t[r],e[r]))return!1;return!0}var o;if(a7&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!rc(r.value[1],e.get(r.value[0])))return!1;return!0}if(l7&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(c7&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(s7&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!rc(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var u7=function(e,n){try{return rc(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const d7=Ea(u7);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Zy=Object.getOwnPropertySymbols,h7=Object.prototype.hasOwnProperty,f7=Object.prototype.propertyIsEnumerable;function p7(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function m7(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var g7=m7()?Object.assign:function(t,e){for(var n,r=p7(t),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)h7.call(n,s)&&(r[s]=n[s]);if(Zy){i=Zy(n);for(var l=0;l<i.length;l++)f7.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};const y7=Ea(g7);var vi={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},J={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(J).map(function(t){return J[t]});var Ie={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},nu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},xa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},v7=Object.keys(nu).reduce(function(t,e){return t[nu[e]]=e,t},{}),_7=[J.NOSCRIPT,J.SCRIPT,J.STYLE],gn="data-react-helmet",w7=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x7=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},E7=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},T7=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},ev=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},b7=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Zf=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},S7=function(e){var n=po(e,J.TITLE),r=po(e,xa.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=po(e,xa.DEFAULT_TITLE);return n||i||void 0},k7=function(e){return po(e,xa.ON_CHANGE_CLIENT_STATE)||function(){}},fh=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,i){return Rt({},r,i)},{})},I7=function(e,n){return n.filter(function(r){return typeof r[J.BASE]<"u"}).map(function(r){return r[J.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),s=0;s<o.length;s++){var l=o[s],c=l.toLowerCase();if(e.indexOf(c)!==-1&&i[c])return r.concat(i)}return r},[])},gs=function(e,n,r){var i={};return r.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&R7("Helmet: "+e+' should be of type "Array". Instead found type "'+w7(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var l={};s.filter(function(g){for(var T=void 0,I=Object.keys(g),A=0;A<I.length;A++){var R=I[A],x=R.toLowerCase();n.indexOf(x)!==-1&&!(T===Ie.REL&&g[T].toLowerCase()==="canonical")&&!(x===Ie.REL&&g[x].toLowerCase()==="stylesheet")&&(T=x),n.indexOf(R)!==-1&&(R===Ie.INNER_HTML||R===Ie.CSS_TEXT||R===Ie.ITEM_PROP)&&(T=R)}if(!T||!g[T])return!1;var v=g[T].toLowerCase();return i[T]||(i[T]={}),l[T]||(l[T]={}),i[T][v]?!1:(l[T][v]=!0,!0)}).reverse().forEach(function(g){return o.push(g)});for(var c=Object.keys(l),u=0;u<c.length;u++){var f=c[u],m=y7({},i[f],l[f]);i[f]=m}return o},[]).reverse()},po=function(e,n){for(var r=e.length-1;r>=0;r--){var i=e[r];if(i.hasOwnProperty(n))return i[n]}return null},C7=function(e){return{baseTag:I7([Ie.HREF,Ie.TARGET],e),bodyAttributes:fh(vi.BODY,e),defer:po(e,xa.DEFER),encode:po(e,xa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:fh(vi.HTML,e),linkTags:gs(J.LINK,[Ie.REL,Ie.HREF],e),metaTags:gs(J.META,[Ie.NAME,Ie.CHARSET,Ie.HTTPEQUIV,Ie.PROPERTY,Ie.ITEM_PROP],e),noscriptTags:gs(J.NOSCRIPT,[Ie.INNER_HTML],e),onChangeClientState:k7(e),scriptTags:gs(J.SCRIPT,[Ie.SRC,Ie.INNER_HTML],e),styleTags:gs(J.STYLE,[Ie.CSS_TEXT],e),title:S7(e),titleAttributes:fh(vi.TITLE,e)}},ep=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){ep(e)},0)}}(),tv=function(e){return clearTimeout(e)},A7=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ep:global.requestAnimationFrame||ep,P7=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tv:global.cancelAnimationFrame||tv,R7=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},ys=null,j7=function(e){ys&&P7(ys),e.defer?ys=A7(function(){nv(e,function(){ys=null})}):(nv(e),ys=null)},nv=function(e,n){var r=e.baseTag,i=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,l=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,f=e.scriptTags,m=e.styleTags,g=e.title,T=e.titleAttributes;tp(J.BODY,i),tp(J.HTML,o),O7(g,T);var I={baseTag:Bi(J.BASE,r),linkTags:Bi(J.LINK,s),metaTags:Bi(J.META,l),noscriptTags:Bi(J.NOSCRIPT,c),scriptTags:Bi(J.SCRIPT,f),styleTags:Bi(J.STYLE,m)},A={},R={};Object.keys(I).forEach(function(x){var v=I[x],E=v.newTags,P=v.oldTags;E.length&&(A[x]=E),P.length&&(R[x]=I[x].oldTags)}),n&&n(),u(e,A,R)},R4=function(e){return Array.isArray(e)?e.join(""):e},O7=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=R4(e)),tp(J.TITLE,n)},tp=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var i=r.getAttribute(gn),o=i?i.split(","):[],s=[].concat(o),l=Object.keys(n),c=0;c<l.length;c++){var u=l[c],f=n[u]||"";r.getAttribute(u)!==f&&r.setAttribute(u,f),o.indexOf(u)===-1&&o.push(u);var m=s.indexOf(u);m!==-1&&s.splice(m,1)}for(var g=s.length-1;g>=0;g--)r.removeAttribute(s[g]);o.length===s.length?r.removeAttribute(gn):r.getAttribute(gn)!==l.join(",")&&r.setAttribute(gn,l.join(","))}},Bi=function(e,n){var r=document.head||document.querySelector(J.HEAD),i=r.querySelectorAll(e+"["+gn+"]"),o=Array.prototype.slice.call(i),s=[],l=void 0;return n&&n.length&&n.forEach(function(c){var u=document.createElement(e);for(var f in c)if(c.hasOwnProperty(f))if(f===Ie.INNER_HTML)u.innerHTML=c.innerHTML;else if(f===Ie.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{var m=typeof c[f]>"u"?"":c[f];u.setAttribute(f,m)}u.setAttribute(gn,"true"),o.some(function(g,T){return l=T,u.isEqualNode(g)})?o.splice(l,1):s.push(u)}),o.forEach(function(c){return c.parentNode.removeChild(c)}),s.forEach(function(c){return r.appendChild(c)}),{oldTags:o,newTags:s}},j4=function(e){return Object.keys(e).reduce(function(n,r){var i=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+i:i},"")},N7=function(e,n,r,i){var o=j4(r),s=R4(n);return o?"<"+e+" "+gn+'="true" '+o+">"+Zf(s,i)+"</"+e+">":"<"+e+" "+gn+'="true">'+Zf(s,i)+"</"+e+">"},M7=function(e,n,r){return n.reduce(function(i,o){var s=Object.keys(o).filter(function(u){return!(u===Ie.INNER_HTML||u===Ie.CSS_TEXT)}).reduce(function(u,f){var m=typeof o[f]>"u"?f:f+'="'+Zf(o[f],r)+'"';return u?u+" "+m:m},""),l=o.innerHTML||o.cssText||"",c=_7.indexOf(e)===-1;return i+"<"+e+" "+gn+'="true" '+s+(c?"/>":">"+l+"</"+e+">")},"")},O4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[nu[i]||i]=e[i],r},n)},L7=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[v7[i]||i]=e[i],r},n)},D7=function(e,n,r){var i,o=(i={key:n},i[gn]=!0,i),s=O4(r,o);return[ge.createElement(J.TITLE,s,n)]},F7=function(e,n){return n.map(function(r,i){var o,s=(o={key:i},o[gn]=!0,o);return Object.keys(r).forEach(function(l){var c=nu[l]||l;if(c===Ie.INNER_HTML||c===Ie.CSS_TEXT){var u=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=r[l]}),ge.createElement(e,s)})},Bn=function(e,n,r){switch(e){case J.TITLE:return{toComponent:function(){return D7(e,n.title,n.titleAttributes)},toString:function(){return N7(e,n.title,n.titleAttributes,r)}};case vi.BODY:case vi.HTML:return{toComponent:function(){return O4(n)},toString:function(){return j4(n)}};default:return{toComponent:function(){return F7(e,n)},toString:function(){return M7(e,n,r)}}}},N4=function(e){var n=e.baseTag,r=e.bodyAttributes,i=e.encode,o=e.htmlAttributes,s=e.linkTags,l=e.metaTags,c=e.noscriptTags,u=e.scriptTags,f=e.styleTags,m=e.title,g=m===void 0?"":m,T=e.titleAttributes;return{base:Bn(J.BASE,n,i),bodyAttributes:Bn(vi.BODY,r,i),htmlAttributes:Bn(vi.HTML,o,i),link:Bn(J.LINK,s,i),meta:Bn(J.META,l,i),noscript:Bn(J.NOSCRIPT,c,i),script:Bn(J.SCRIPT,u,i),style:Bn(J.STYLE,f,i),title:Bn(J.TITLE,{title:g,titleAttributes:T},i)}},V7=function(e){var n,r;return r=n=function(i){T7(o,i);function o(){return x7(this,o),b7(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(l){return!d7(this.props,l)},o.prototype.mapNestedChildrenToProps=function(l,c){if(!c)return null;switch(l.type){case J.SCRIPT:case J.NOSCRIPT:return{innerHTML:c};case J.STYLE:return{cssText:c}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(l){var c,u=l.child,f=l.arrayTypeChildren,m=l.newChildProps,g=l.nestedChildren;return Rt({},f,(c={},c[u.type]=[].concat(f[u.type]||[],[Rt({},m,this.mapNestedChildrenToProps(u,g))]),c))},o.prototype.mapObjectTypeChildren=function(l){var c,u,f=l.child,m=l.newProps,g=l.newChildProps,T=l.nestedChildren;switch(f.type){case J.TITLE:return Rt({},m,(c={},c[f.type]=T,c.titleAttributes=Rt({},g),c));case J.BODY:return Rt({},m,{bodyAttributes:Rt({},g)});case J.HTML:return Rt({},m,{htmlAttributes:Rt({},g)})}return Rt({},m,(u={},u[f.type]=Rt({},g),u))},o.prototype.mapArrayTypeChildrenToProps=function(l,c){var u=Rt({},c);return Object.keys(l).forEach(function(f){var m;u=Rt({},u,(m={},m[f]=l[f],m))}),u},o.prototype.warnOnInvalidChildren=function(l,c){return!0},o.prototype.mapChildrenToProps=function(l,c){var u=this,f={};return ge.Children.forEach(l,function(m){if(!(!m||!m.props)){var g=m.props,T=g.children,I=ev(g,["children"]),A=L7(I);switch(u.warnOnInvalidChildren(m,T),m.type){case J.LINK:case J.META:case J.NOSCRIPT:case J.SCRIPT:case J.STYLE:f=u.flattenArrayTypeChildren({child:m,arrayTypeChildren:f,newChildProps:A,nestedChildren:T});break;default:c=u.mapObjectTypeChildren({child:m,newProps:c,newChildProps:A,nestedChildren:T});break}}}),c=this.mapArrayTypeChildrenToProps(f,c),c},o.prototype.render=function(){var l=this.props,c=l.children,u=ev(l,["children"]),f=Rt({},u);return c&&(f=this.mapChildrenToProps(c,f)),ge.createElement(e,f)},E7(o,null,[{key:"canUseDOM",set:function(l){e.canUseDOM=l}}]),o}(ge.Component),n.propTypes={base:G.object,bodyAttributes:G.object,children:G.oneOfType([G.arrayOf(G.node),G.node]),defaultTitle:G.string,defer:G.bool,encodeSpecialCharacters:G.bool,htmlAttributes:G.object,link:G.arrayOf(G.object),meta:G.arrayOf(G.object),noscript:G.arrayOf(G.object),onChangeClientState:G.func,script:G.arrayOf(G.object),style:G.arrayOf(G.object),title:G.string,titleAttributes:G.object,titleTemplate:G.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var i=e.rewind();return i||(i=N4({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},z7=function(){return null},B7=o7(C7,j7,N4)(z7),ru=V7(B7);ru.renderStatic=ru.rewind;const $7=X.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */
  color: #fff;
`,U7=X.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
`,H7=X.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`,W7=X.div`
  background-color: #252525;
  border-radius: 15px; /* Rounded corners */
  border: 2px solid #ddd; /* Border around each question */
  padding: 15px 20px; /* Adjust padding */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 20px; /* Space between FAQ items */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
  display: flex;
  flex-direction: column;
`,G7=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,q7=X.div`
  font-size: 1.9rem; /* Larger font size */
  font-weight: bold;
  color: #febb12;
  flex-grow: 1;
`,Q7=X.div`
  max-height: ${({isOpen:t})=>t?"300px":"0"};
  overflow: hidden;
  transition: max-height 0.6s ease, padding 0.6s ease;
  padding: ${({isOpen:t})=>t?"10px 0":"0"};
  font-size: 1.9rem; /* Larger font size for better readability */
  background-color: #252525;
  color: #fff;
`,Y7=X.div`
  transition: transform 0.3s ease;
  transform: ${({isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem; /* Adjust size if needed */
  color: #febb12; /* Yellow color for the arrow */
`,K7=()=>{const[t,e]=D.useState(null),n=i=>{e(t===i?null:i)},r=[{question:"Whom is this training suitable for ?",answer:"Anyone intrested in learning stock market from scratch is welcome to join the course."},{question:"Is laptop mandatory to attend the training ?",answer:"No, a laptop is not mandatory to attend the training. However, having a laptop is highly recommended as it enhances your learning experience."},{question:"Do I need to pay entire fees at once ?",answer:"Yes, you need to pay the entire fees at once."},{question:"How long will this training last ?",answer:"The training duration is of 2 months, excluding weekends, with one year of handholding support."},{question:"Will I be able to trade independently after this training ends ?",answer:"Absolutely Yes, many individuals successfully pursue trading as a full-time career after this course."},{question:"Will I receive a certificate of course completion ?",answer:"Yes, you will."}];return h.jsxs($7,{children:[h.jsxs(ru,{children:[h.jsx("title",{children:"Frequently Asked Questions | Stock Archery"}),h.jsx("meta",{name:"description",content:"Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more."}),h.jsx("meta",{name:"keywords",content:"FAQ, capital markets training, Stock Archery, trading education, financial markets, trading course, stock market questions"}),h.jsx("meta",{property:"og:title",content:"Frequently Asked Questions | Stock Archery"}),h.jsx("meta",{property:"og:description",content:"Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more."}),h.jsx("meta",{property:"og:image",content:"./images/faq-image.svg"}),h.jsx("meta",{property:"og:url",content:"https://www.stockarchery.com/faq"})]}),h.jsx(U7,{children:"Frequently Asked Questions"}),h.jsx(H7,{children:r.map((i,o)=>h.jsxs(W7,{onClick:()=>n(o),role:"button","aria-expanded":t===o,"aria-controls":`answer-${o}`,tabIndex:"0",children:[h.jsxs(G7,{children:[h.jsx(q7,{children:i.question}),h.jsx(Y7,{isOpen:t===o,children:t===o?h.jsx(X8,{}):h.jsx(K8,{})})]}),h.jsx(Q7,{id:`answer-${o}`,isOpen:t===o,children:i.answer})]},o))})]})},X7=X.button`
  display: flex;
  align-items: center;
  background-color: green;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d00; /* Darker green on hover */
  }

  svg {
    margin-right: 8px;
  }
`,J7=X(X7)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensures the button is above other elements */
`,Z7=()=>{const t=()=>{const r=`https://wa.me/+917645086121?text=${encodeURIComponent("Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?")}`;window.open(r,"_blank")};return h.jsxs(J7,{onClick:t,children:[h.jsx(Q8,{}),"Contact Us"]})},eR=()=>{const[t,e]=D.useState(null),[n,r]=D.useState(window.innerWidth<=768);D.useEffect(()=>{const N=()=>{r(window.innerWidth<=768)};return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const i={width:"100%",marginBottom:"none",margin:"0 auto",padding:"20px",backgroundColor:"rgba(37, 37, 37, 1)",color:"#febb12"},o={display:"flex",alignItems:"center",flexDirection:n?"column":"row",marginBottom:"40px",textAlign:n?"center":"left",gap:n?"20px":"40px"},s={width:n?"100%":"60%",maxWidth:n?"300px":"500px",height:n?"auto":"400px",objectFit:"cover",borderRadius:"10px",marginBottom:n?"20px":"0"},l={marginTop:n?"20px":"0",textAlign:n?"center":"left",flex:1},c={fontSize:n?"2.5rem":"3rem",marginBottom:"20px",color:"#febb12",fontWeight:"bold"},u={color:"#fff"},f={fontSize:n?"1.5rem":"1.8rem",lineHeight:"1.6",marginBottom:"15px",textAlign:"justify",color:"#FDD788"},m={fontSize:n?"2.5rem":"3rem",textAlign:"center",marginBottom:"30px",color:"#febb12",fontWeight:"bold"},g={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",gap:"20px",marginBottom:"30px"},T={position:"relative",width:"100%",maxWidth:"300px",perspective:"1000px",margin:"0 auto"},I=N=>({position:"relative",width:"100%",height:"350px",transition:"transform 0.6s",transformStyle:"preserve-3d",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",transform:N?"rotateY(180deg)":"rotateY(0deg)"}),A={position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",backgroundColor:"rgba(37,37,37,255)",color:"#febb12",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box",borderRadius:"10px",overflow:"hidden"},R={position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",backgroundColor:"#333",color:"#FDD788",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box",transform:"rotateY(180deg)",borderRadius:"10px",overflow:"hidden"},x={width:"100%",height:"200px",objectFit:"cover",borderRadius:"10px"},v={fontSize:n?"1.8rem":"2rem",margin:"10px 0",color:"#febb12",fontWeight:"bold"},E={fontSize:n?"1.6rem":"1.5rem",color:"#FDD788"},P={display:"none"},L=[{title:"Live Market Sessions",text:"Our trading floor, the first of its kind in Bihar, offers a unique opportunity to learn and trade during live market.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/2nd_s04uzo.jpg",backText:"Join our live market sessions at Stock Archery to gain unparalleled real-time trading experience and actionable insights directly from industry experts. Our sessions offer a unique opportunity to engage with the market as it unfolds, providing you with hands-on learning and immediate feedback from seasoned professionals."},{title:"One-on-One Mentorship",text:"Stock Archery offers personalized mentorship, empowering you with tailored guidance and support for success.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/3rd_jem2df.jpg",backText:"Our exclusive one-on-one mentorship program offers personalized support tailored to your unique trading needs. Designed to help you navigate the complexities of the stock market with confidence, this program provides direct access to expert guidance and customized strategies."},{title:"Doubt Clearing Sessions",text:"We are dedicated to sustainable practices that protect the environment and promote a healthier future.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152393/5th_-_Copy_flkcme.jpg",backText:"Clear your doubts and overcome trading challenges with our in-depth, personalized sessions. Our program is designed to tackle your specific trading issues head-on, providing targeted solutions and expert advice to address your unique concerns. Benefit from comprehensive, one-on-one discussions that focus on resolving your trading difficulties and refining your strategies."},{title:"1 Year Handhold Support",text:"We actively engage with and support our local communities through various initiatives and partnerships.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726124281/12343_sobrul.webp",backText:"Enjoy a full year of dedicated support with our comprehensive trading program, designed to keep you on track with your trading goals and ensure continuous progress. Our year-long support package offers you ongoing access to expert guidance, personalized feedback, and strategic insights tailored to your evolving needs."}];return h.jsxs(h.Fragment,{children:[h.jsxs(ru,{children:[h.jsx("title",{children:"About Us | Stock Archery"}),h.jsx("meta",{name:"description",content:"Learn about Stock Archery, Bihar’s premier trading floor offering hands-on trading education, live market sessions, and personalized mentorship. Discover our innovative approach and services to enhance your trading skills."}),h.jsx("meta",{name:"keywords",content:"Stock Archery, trading education, live market sessions, one-on-one mentorship, trading support, Bihar"}),h.jsx("meta",{property:"og:title",content:"About Us | Stock Archery"}),h.jsx("meta",{property:"og:description",content:"Discover Stock Archery's premier trading floor in Bihar. Learn about our live market sessions, one-on-one mentorship, and year-long support programs designed to enhance your trading skills."}),h.jsx("meta",{property:"og:image",content:"./images/about1.svg"}),h.jsx("meta",{property:"og:url",content:"https://www.stockarchery.com/about"})]}),h.jsxs("div",{style:i,children:[h.jsxs("section",{style:o,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726124858/Screenshot__33_-removebg-preview_eltals.png",alt:"About Stock Archery",style:s}),h.jsxs("div",{style:l,children:[h.jsxs("h1",{style:c,children:[h.jsx("span",{style:u,children:"ABOUT"})," US"]}),h.jsx("p",{style:f,children:"Stock Archery is Bihar’s premier trading floor and educational hub, offering unmatched hands-on trading education during live market sessions. As a pioneer in the region, we specialize in practical, real-time trading experience. Our expert trainers provide comprehensive, step-by-step guidance, ensuring that students master essential trading skills. At Stock Archery, our innovative approach promotes learning by doing—students trade alongside seasoned professionals, merging theory with real-world practice. Whether you're a novice or seeking advanced skill enhancement, Stock Archery delivers tailored classes to achieve your trading goals. Discover the future of trading education and elevate your market success with us today."})]})]}),h.jsxs("h1",{style:m,children:[h.jsx("span",{style:u,children:"Our"})," Services"]}),h.jsx("div",{style:g,children:L.map((N,w)=>h.jsx("div",{style:T,onMouseEnter:()=>e(w),onMouseLeave:()=>e(null),role:"region","aria-labelledby":`card-${w}-title`,children:h.jsxs("div",{style:I(t===w),children:[h.jsxs("div",{style:A,children:[h.jsx("img",{src:N.image,alt:`Image representing ${N.title}`,style:x}),h.jsx("strong",{children:h.jsx("h2",{id:`card-${w}-title`,style:v,children:N.title})}),h.jsx("p",{style:E,children:N.text})]}),h.jsxs("div",{style:R,children:[h.jsx("h2",{style:P,"aria-hidden":"true",children:N.title}),h.jsx("p",{style:E,children:N.backText})]})]})},w))})]})]})},tR=()=>{const t=[{title:"Ola Electric IPO Success: Journey, Milestones, and Market Impact",description:"Ola Electric, a subsidiary of the ride-hailing giant Ola, has become a symbol of India's electric vehicle (EV) revolution.",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png",route:"/ola"},{title:"Zerodha Cancels Referral Program",description:"Zerodha Cancels Referral Program: A Detailed Analysis",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png",route:"/ref"},{title:"Stock Market Analysis During Festive Season",description:"Discover how the Indian stock market has performed during the festive seasons over the last five years.",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725431242/334-removebg-preview_ezjbws.png",route:"/festival"},{title:"IT Stocks Propel Nifty to Fresh All-Time High; Sensex Surges Over 250 Points",description:"The Indian stock market witnessed a significant surge today as the Nifty 50 index reached a fresh all-time high, driven primarily by gains in IT stocks. ",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920780/Screenshot_16_oa5p7v.png",route:"/it"},{title:"The Impact of Bajaj Housing Finance’s Rs 6,500 Crore IPO Announcement",description:"Bajaj Finance and Bajaj Finserv Surge by 5% on September 2nd: The Impact of Bajaj Housing Finance’s Rs 6,500 Crore IPO Announcement",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725353763/5_drivgt.jpg",route:"/bjaj"},{title:"Bajaj Housing Finance IPO",description:"The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792949/Bajaj-Housing-Finance-IPO-Price-Set-at-_66-70-Per-Share-IW-News-Title-removebg-preview_q15hyc.png",route:"/bjaj2"},{title:"Five Things To Learn In stock Market",description:"Five Things you should learn fast or market will make you learn in its own way",imgUrl:"./images/9.gif",route:"/five"}],e=(n,r,i,o)=>{const l=`${window.location.origin}${r}`,c=encodeURIComponent(l),u=encodeURIComponent(i),f=encodeURIComponent(o);let m="";switch(n){case"linkedin":m=`https://www.linkedin.com/shareArticle?mini=true&url=${c}&title=${u}`;break;case"telegram":m=`https://telegram.me/share/url?url=${c}&text=${u} - ${f}`;break;case"whatsapp":m=`https://api.whatsapp.com/send?text=${u}%20${c}%20%0A%0AImage:%20${f}`;break;default:return}window.open(m,"_blank")};return h.jsxs("div",{className:"blog-page",children:[h.jsx("style",{children:`
    /* General Styles */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        background: rgba(37, 37, 37, 255);
    }

    /* Hero Section Styles */
    .hero {
        color: black;
        text-align: center;
        background: rgba(37, 37, 37, 255);
    }

    .hero h2 {
        font-size: 3.5rem;
        margin: 0;
        color: #febb12;
    }

    .hero p {
        font-size: 2rem;
        margin: 10px 0 0;
    }

    /* Cards Container Styles */
    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    @media (min-width: 1024px) {
        .cards-container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .card {
        background: white;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-decoration: none;
        color: #febb12;
        position: relative;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    }

    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card-content {
        padding: 20px;
    }

    .card-title {
        font-size: 2rem;
        margin: 0 0 10px;
        font-weight: bold;
    }

    .card-description {
        font-size: 1.5rem;
        margin: 0;
        color: #000000;
        font-weight: bold;
    }

    .card-link {
        display: block;
        margin-top: 15px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #febb12;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .card-link:hover {
        color: #0056b3;
    }

    .share-icons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    .share-icon {
        font-size: 3rem;
        cursor: pointer;
        color: #0056b3;
        transition: color 0.3s ease;
    }

    .share-icon:hover {
        color: #0056b3;
    }
    `}),h.jsx("section",{className:"hero",children:h.jsx("div",{className:"container",children:h.jsx("h2",{children:"BLOGS"})})}),h.jsx("div",{className:"container",children:h.jsx("div",{className:"cards-container",children:t.map((n,r)=>h.jsxs("a",{href:n.route,className:"card",children:[h.jsx("img",{src:n.imgUrl,alt:n.title,className:"card-image"}),h.jsxs("div",{className:"card-content",children:[h.jsx("h3",{className:"card-title",children:n.title}),h.jsx("p",{className:"card-description",children:n.description}),h.jsx("span",{className:"card-link",children:"Read More"})]}),h.jsxs("div",{className:"share-icons",children:[h.jsx(Ut,{icon:mm,className:"share-icon",onClick:()=>e("linkedin",n.route,n.title,n.imgUrl)}),h.jsx(Ut,{icon:hk,className:"share-icon",onClick:()=>e("telegram",n.route,n.title,n.imgUrl)}),h.jsx(Ut,{icon:Vw,className:"share-icon",onClick:()=>e("whatsapp",n.route,n.title,n.imgUrl)})]})]},r))})})]})},ke={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",animation:"fadeIn 1s ease-in-out",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},nR=()=>h.jsxs("div",{style:ke.body,children:[h.jsx("header",{style:ke.header}),h.jsxs("main",{style:ke.main,children:[h.jsx("h1",{style:ke.h1,children:"Ola Electric IPO Success: Journey, Milestones, and Market Impact"}),h.jsx("h2",{style:ke.h2,children:"The Birth of Ola Electric"}),h.jsx("p",{style:ke.p,children:"Ola Electric was officially founded in 2017, but its roots trace back to the larger vision of Bhavish Aggarwal, the co-founder of Ola Cabs. Recognizing the global shift towards sustainable transportation and the Indian government's push for electric mobility, Aggarwal envisioned an electric ecosystem that would encompass not just vehicles but also the infrastructure required to support them. Ola Electric's mission was clear from the start: to create affordable, high-performance electric vehicles that could replace traditional internal combustion engine (ICE) vehicles in India. This vision was aligned with India's National Electric Mobility Mission Plan, which aimed to achieve significant electrification of the automobile industry by 2030."}),h.jsx("h2",{style:ke.h2,children:"Early Challenges and Strategic Alliances"}),h.jsx("p",{style:ke.p,children:"The journey to building a robust electric vehicle company was fraught with challenges. In a market dominated by ICE vehicles, the acceptance of electric vehicles (EVs) was a significant hurdle. Concerns about range anxiety, charging infrastructure, and the high initial cost of EVs were major roadblocks. To address these issues, Ola Electric adopted a multi-pronged strategy. The company started by focusing on electric two-wheelers, a segment that had a higher acceptance rate among Indian consumers due to lower costs and easier urban mobility. This decision proved crucial as it allowed Ola Electric to establish a foothold in the burgeoning EV market. In 2018, Ola Electric raised $56 million in its first funding round from Tiger Global and Matrix Partners. This funding was instrumental in accelerating the company's R&D efforts and scaling its production capabilities."}),h.jsx("h2",{style:ke.h2,children:"The Ola Electric Scooter: A Game Changer"}),h.jsx("p",{style:ke.p,children:"In 2020, Ola Electric unveiled its first electric scooter, the Ola S1, which was met with widespread acclaim. The scooter was designed to be both affordable and technologically advanced, with features such as app-based keyless entry, voice controls, and a robust battery pack offering a range of over 100 kilometers on a single charge. The Ola S1's launch was a pivotal moment for the company. It not only demonstrated Ola Electric's ability to deliver a high-quality product but also set new standards in the Indian EV market. The scooter's success was underpinned by Ola's investment in a sprawling manufacturing facility in Krishnagiri, Tamil Nadu, dubbed the 'Futurefactory.'"}),h.jsx("h2",{style:ke.h2,children:"The Futurefactory: A Vision Realized"}),h.jsx("p",{style:ke.p,children:"The Futurefactory, one of the world's largest electric two-wheeler production facilities, is a testament to Ola Electric's ambitious vision. Spread over 500 acres, the factory has an annual production capacity of 10 million vehicles, making it the largest of its kind globally. This facility is a critical component of Ola Electric's strategy to scale its operations and meet the growing demand for electric vehicles. The factory is also a shining example of sustainable manufacturing, powered entirely by renewable energy sources, and is expected to be the world's first carbon-negative two-wheeler factory."}),h.jsx("p",{style:ke.p,children:"In conclusion, Ola Electric's remarkable performance in the stock market is a reflection of its strategic vision, innovative product offerings, and strong market fundamentals. As the company continues to expand and capture a larger share of the electric vehicle market, it is likely to maintain its position as a leading player in the industry."}),h.jsxs("div",{style:ke.socialIcons,children:[h.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:ke.socialIcon,children:h.jsx("i",{className:"fab fa-twitter",style:ke.socialIconInner})}),h.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:ke.socialIcon,children:h.jsx("i",{className:"fab fa-facebook-f",style:ke.socialIconInner})}),h.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:ke.socialIcon,children:h.jsx("i",{className:"fab fa-whatsapp",style:ke.socialIconInner})}),h.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:ke.socialIcon,children:h.jsx("i",{className:"fab fa-telegram",style:ke.socialIconInner})}),h.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:ke.socialIcon,children:h.jsx("i",{className:"fab fa-linkedin",style:ke.socialIconInner})})]})]}),h.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.5em;
            }
            .social-icons a {
              margin: 0 8px;
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h1 {
              font-size: 1.8em;
            }
            h2 {
              font-size: 1.3em;
            }
            .social-icons {
              flex-direction: row;
              align-items: center;
            }
            .social-icons a {
              margin: 5px 5px;
              font-size: 18px;
            }
          }
        `})]}),ce={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",animation:"fadeIn 1s ease-in-out",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},h3:{fontSize:"1.0em",color:"#000000",transition:"color 0.3s ease"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},rR=()=>h.jsxs("div",{style:ce.body,children:[h.jsx("header",{style:ce.header}),h.jsxs("main",{style:ce.main,children:[h.jsx("h1",{style:ce.h1,children:"Zerodha Cancels Referral Program"}),h.jsx("h2",{style:ce.h2,children:"Introduction"}),h.jsx("p",{style:ce.p,children:"Zerodha, India's largest stockbroker, has recently announced the cancellation of its popular referral program. This decision has stirred conversations in the financial community, as the referral program was a significant part of Zerodha's customer acquisition strategy. In this report, we will explore the reasons behind this decision, its potential impact, and what it means for Zerodha and its users."}),h.jsx("h2",{style:ce.h2,children:"Background of Zerodha's Referral Program"}),h.jsx("p",{style:ce.p,children:"Zerodha's referral program was introduced as an innovative way to incentivize existing users to bring new customers to the platform. The program offered monetary rewards or brokerage credits to those who referred new users who successfully opened trading accounts with Zerodha. This approach not only helped Zerodha grow its user base rapidly but also created a strong community of traders who were actively engaged with the platform."}),h.jsx("h2",{style:ce.h2,children:"Why Zerodha Cancelled the Referral Program"}),h.jsx("p",{style:ce.p,children:"There are several reasons behind Zerodha's decision to cancel its referral program:"}),h.jsxs("ol",{children:[h.jsx("li",{children:h.jsxs("p",{style:ce.p,children:[h.jsx("h3",{style:ce.h3,children:"Regulatory Compliance:"})," The financial industry in India is heavily regulated. The Securities and Exchange Board of India (SEBI) has been tightening regulations around promotional activities, including referral programs, to ensure transparency and protect investors. Zerodha's decision could be influenced by the need to comply with these evolving regulations, thereby avoiding potential legal issues."]})}),h.jsx("li",{children:h.jsxs("p",{style:ce.p,children:[h.jsx("h3",{style:ce.h3,children:"Sustainability Concerns:"})," As Zerodha's user base grew, the cost of maintaining the referral program may have become unsustainable. The company might have found that the expenses associated with rewarding referrals were outweighing the benefits, especially as the program matured and the rate of new user acquisition slowed down."]})}),h.jsx("li",{children:h.jsxs("p",{style:ce.p,children:[h.jsx("h3",{style:ce.h3,children:"Focus on Organic Growth:"})," Zerodha has always emphasized the importance of organic growth and providing value through its products and services. By canceling the referral program, the company may be aiming to shift its focus entirely to organic user acquisition strategies, such as content marketing, educational initiatives, and word-of-mouth."]})})]}),h.jsx("h2",{style:ce.h2,children:"Impact on Users and the Market"}),h.jsx("p",{style:ce.p,children:"The cancellation of the referral program is likely to have mixed reactions among Zerodha's users. While some may be disappointed by the loss of an incentive to refer friends and family, others might appreciate the company's focus on improving its core services. In the long term, this decision could lead to a more sustainable and customer-centric approach, which may benefit both users and Zerodha."}),h.jsx("h2",{style:ce.h2,children:"Conclusion"}),h.jsx("p",{style:ce.p,children:"Zerodha's decision to cancel its referral program reflects its commitment to regulatory compliance, sustainable growth, and enhancing the user experience. While this move may seem surprising to some, it is likely a strategic decision aimed at positioning the company for long-term success in a rapidly evolving market. Users and stakeholders should view this change as a part of Zerodha's broader strategy to maintain its leadership position in the Indian stockbroking industry."}),h.jsxs("div",{style:ce.socialIcons,children:[h.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:ce.socialIcon,children:h.jsx("i",{className:"fab fa-twitter",style:ce.socialIconInner})}),h.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:ce.socialIcon,children:h.jsx("i",{className:"fab fa-facebook-f",style:ce.socialIconInner})}),h.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:ce.socialIcon,children:h.jsx("i",{className:"fab fa-whatsapp",style:ce.socialIconInner})}),h.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:ce.socialIcon,children:h.jsx("i",{className:"fab fa-telegram",style:ce.socialIconInner})}),h.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:ce.socialIcon,children:h.jsx("i",{className:"fab fa-linkedin",style:ce.socialIconInner})})]})]}),h.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.5em;
            }
            .social-icons a {
              margin: 0 8px;
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h1 {
              font-size: 1.8em;
            }
            h2 {
              font-size: 1.3em;
            }
            .social-icons {
              flex-direction: row;
              align-items: center;
            }
            .social-icons a {
              margin: 5px 5px;
              font-size: 18px;
            }
          }
        `})]}),iR=()=>h.jsxs("div",{style:pr.blogContainer,children:[h.jsx("h1",{className:"animated-heading",children:"Analyzing Indian Stock Market Trends During Festive Seasons: Insights from the Last 5 Years"}),h.jsxs("div",{style:pr.post,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725430842/festival_qj2rtg.png",alt:"Bajaj Stocks Surge",style:pr.postImage}),h.jsx("h2",{className:"subheading",children:"Introduction"}),h.jsx("p",{style:pr.postText,children:"The festive season in India is a significant period not only for cultural celebrations but also for the economy and the stock market. Historically, the stock market tends to reflect the positive sentiment and increased consumer spending during festivals like Diwali, Dussehra, and Christmas. This blog explores the Indian stock market's behavior during the festive seasons over the past five years, offering valuable insights for investors. We will also discuss what the 2024 festive season might hold for the markets."}),h.jsx("h2",{className:"subheading",children:"Market Overview: Festive Seasons (2019-2023)"}),h.jsxs("p",{style:pr.postText,children:["➡️2019: A robust rally pre-Diwali, fueled by strong earnings and reforms. FMCG and automotive sectors performed well.",h.jsx("br",{}),"➡️2020: Despite the pandemic, a sharp rally occurred in November due to vaccine news and earnings recovery. Pharma and IT sectors surged.",h.jsx("br",{}),"➡️2021: Bull run continued, with Sensex crossing 60,000. Real estate and infrastructure sectors saw strong gains.",h.jsx("br",{}),"➡️2022: Modest Diwali rally amid global uncertainties. Energy and consumer sectors performed well.",h.jsx("br",{}),"➡️2023: Record highs driven by economic recovery, led by banking, consumer goods, and automotive sectors.",h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725431242/334-removebg-preview_ezjbws.png",alt:"IPO",className:"inline-image right-image"})]}),h.jsx("h2",{className:"subheading",children:"Key Observations and Sectoral Performance"}),h.jsxs("p",{style:pr.postText,children:["The market generally reacts positively during the festive season, often leading to pre-festive rallies. This trend is fueled by investor optimism, increased consumer spending, and favorable economic conditions.",h.jsx("br",{}),"⭐Consumer Goods: This sector consistently performs well during the festive season, driven by increased demand for FMCG products.",h.jsx("br",{}),"⭐Automotive: Festive discounts and new model launches lead to higher sales, boosting the sector's stock performance.",h.jsx("br",{}),"⭐Banking: The festive season sees increased activity in the banking sector due to higher demand for loans and financial services. Stable interest rates further support this growth."]}),h.jsx("h2",{className:"subheading",children:"What to Expect in 2024"}),h.jsx("p",{style:pr.postText,children:"The Indian economy is expected to continue its growth trajectory, with GDP growth estimates ranging between 6-7% for the year. A strong economic backdrop generally supports positive market sentiment during the festive season. Inflation has been relatively stable, but any unexpected spikes could influence consumer spending and market performance. The Reserve Bank of India's monetary policy will play a crucial role in maintaining this balance.The earnings season leading up to the festive period will be critical. Strong corporate results could fuel a pre-festive rally, while any disappointments might temper expectations."}),h.jsx("h2",{className:"subheading",children:"Conclusion: Investing During the Festive Season"}),h.jsxs("p",{style:pr.postText,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725431425/Screenshot__26_-removebg-preview_mj8wnf.png",alt:"Investment",className:"inline-image"}),"The festive season presents unique opportunities for investors. Historical trends suggest that a pre-festive rally is likely, driven by positive sentiment and increased consumer spending. However, global uncertainties could moderate this rally, making it essential for investors to stay informed and consider sectoral performance when making investment decisions."]})]})]}),pr={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},re={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724921355/Screenshot_19_xwzfao.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"60px 20px",width:"100%",height:"280px",minHeight:"198px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"},headerH1:{fontSize:"3em",margin:0,textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff",animation:"fadeIn 1.5s ease-in-out"},section:{marginBottom:"40px"},sectionHeader:{fontSize:"2.2em",color:"#333",marginBottom:"20px",borderBottom:"2px solid #ddd",paddingBottom:"10px",animation:"fadeInUp 1s ease-in-out"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify",animation:"fadeInUp 1.4s ease-in-out"},imageGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px",marginTop:"20px"},imageCard:{position:"relative",overflow:"hidden",borderRadius:"12px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},imageCardOverlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.4)",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5em",opacity:0,transition:"opacity 0.3s ease"},imageCardOverlayHover:{opacity:1},fullWidthImageSection:{width:"100%",margin:"40px 0",position:"relative"},fullWidthImage:{width:"100%",height:"auto",borderRadius:"12px"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px",animation:"fadeIn 1.6s ease-in-out"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},oR=()=>h.jsxs("div",{style:re.body,children:[h.jsx("header",{style:re.header,children:h.jsx("h1",{style:re.headerH1,children:"IT Stocks Propel Nifty to Fresh All-Time High"})}),h.jsxs("main",{style:re.main,children:[h.jsxs("section",{style:re.section,children:[h.jsx("p",{style:re.p,children:"The Indian stock market witnessed a significant surge today as the Nifty 50 index reached a fresh all-time high, driven primarily by gains in IT stocks. Major IT companies like TCS, Infosys, and Wipro reported better-than-expected quarterly earnings, which bolstered investor confidence. The global demand for IT services, fueled by digital transformation, cloud computing, and remote work solutions, has positioned Indian IT companies at the forefront, leading to a strong performance in their stock prices. This sector's positive outlook has further spurred buying interest, contributing to the rally. Additionally, the broader market sentiment remains bullish, with sectors such as banking, finance, and FMCG also showing gains. The Sensex, another key benchmark index, mirrored this trend, climbing over 250 points, reflecting strong overall market momentum."}),h.jsxs("div",{style:re.imageGrid,children:[h.jsxs("div",{style:re.imageCard,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920780/Screenshot_16_oa5p7v.png",alt:"Stock Market Surge",style:{width:"100%",height:"auto"}}),h.jsx("div",{style:re.imageCardOverlay,children:"Market Surge"})]}),h.jsxs("div",{style:re.imageCard,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724921355/Screenshot_19_xwzfao.png",alt:"IT Stocks",style:{width:"100%",height:"auto"}}),h.jsx("div",{style:re.imageCardOverlay,children:"IT Stocks Lead"})]})]})]}),h.jsxs("section",{style:re.section,children:[h.jsx("h2",{style:re.sectionHeader,children:"Key Highlights"}),h.jsxs("p",{style:re.p,children:["⭐",h.jsx("strong",{children:"Nifty 50 Hits Record High:"})," The Nifty 50 index surged to an all-time high, crossing the previous records and setting a new benchmark."]}),h.jsxs("p",{style:re.p,children:["⭐",h.jsx("strong",{children:"Sensex Gains Over 250 Points:"})," The Sensex followed suit, gaining over 250 points. This rise is indicative of a broader market rally, with several sectors contributing to the positive momentum, though IT remains the standout performer."]}),h.jsxs("p",{style:re.p,children:["⭐",h.jsx("strong",{children:"Strong Performance of IT Stocks:"}),"Leading IT companies like TCS, Infosys, and Wipro were among the top gainers in today’s trade. The sector’s growth can be attributed to several factors, including robust quarterly earnings, positive outlooks, and increasing demand for IT services globally."]})]}),h.jsx("section",{style:re.fullWidthImageSection,children:h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920893/Screenshot_17_zimagw.png",alt:"Nifty 50 Record High",style:re.fullWidthImage})}),h.jsxs("section",{style:re.section,children:[h.jsx("h2",{style:re.sectionHeader,children:"Factors Driving the Rally"}),h.jsxs("p",{style:re.p,children:["➡️",h.jsx("strong",{children:"Robust Earnings Reports:"})," Several IT companies have posted better-than-expected quarterly results, which have bolstered investor sentiment."]}),h.jsxs("p",{style:re.p,children:["➡️",h.jsx("strong",{children:"Positive Market Sentiment:"}),"Overall, market sentiment has been buoyant, with investors showing optimism about the growth prospects of the Indian economy. The IT sector, being a major growth driver, has naturally benefited from this optimism.."]}),h.jsxs("p",{style:re.p,children:["➡️",h.jsx("strong",{children:"Global Demand for IT Services:"})," Several IT companies have posted better-than-expected quarterly results, which have bolstered investor sentiment."]}),h.jsxs("p",{style:re.p,children:["➡️",h.jsx("strong",{children:"Favorable Economic Indicators:"})," Recent economic data points, such as improved GDP growth rates and lower inflation, have also contributed to the positive market sentiment. The Indian economy’s resilience in the face of global challenges has instilled confidence among investors."]}),h.jsxs("p",{style:re.p,children:["➡️",h.jsx("strong",{children:"Foreign Institutional Investments (FII):"})," The Indian stock market has seen a steady inflow of foreign institutional investments, particularly in the IT sector. The consistent investment flow from global investors has further fueled the rally in IT stocks."]})]}),h.jsxs("div",{style:re.socialIcons,children:[h.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:re.socialIcon,children:h.jsx("i",{className:"fab fa-twitter",style:re.socialIconInner})}),h.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/it",target:"_blank",rel:"noopener noreferrer",style:re.socialIcon,children:h.jsx("i",{className:"fab fa-facebook-f",style:re.socialIconInner})}),h.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/it",target:"_blank",rel:"noopener noreferrer",style:re.socialIcon,children:h.jsx("i",{className:"fab fa-whatsapp",style:re.socialIconInner})}),h.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:re.socialIcon,children:h.jsx("i",{className:"fab fa-telegram",style:re.socialIconInner})}),h.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/it",target:"_blank",rel:"noopener noreferrer",style:re.socialIcon,children:h.jsx("i",{className:"fab fa-linkedin",style:re.socialIconInner})})]})]}),h.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .imageCard:hover .imageCardOverlay {
            opacity: 1;
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h2 {
              font-size: 1.5em;
            }
            img {
              margin: 10px auto;
              display: block;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h2 {
              font-size: 1.3em;
            }
            img {
              margin: 10px auto;
              display: block;
            }
          }
        `})]}),sR=()=>h.jsxs("div",{style:$n.blogContainer,children:[h.jsx("h1",{className:"animated-heading",children:"Bajaj Stocks Surge Following Recent IPO Announcement"}),h.jsxs("div",{style:$n.post,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725361124/Screenshot_25_jqc6ai.png",alt:"Bajaj Stocks Surge",style:$n.postImage}),h.jsx("h2",{className:"subheading",children:"The Impact of Bajaj's IPO Announcement"}),h.jsx("p",{style:$n.postText,children:"The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices. This surge reflects growing investor confidence in the company's future prospects and its ability to deliver strong returns."}),h.jsx("h2",{className:"subheading",children:"Investor Optimism and Market Reaction"}),h.jsxs("p",{style:$n.postText,children:["Over the past few weeks, Bajaj's stocks have seen a steady climb, culminating in a sharp rise immediately following the IPO announcement.",h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725350565/2_l0gtg8.png",alt:"IPO",className:"inline-image right-image"}),"Investors are optimistic about the potential growth opportunities that this IPO could unlock for Bajaj, particularly in expanding its market reach and enhancing its product offerings."]}),h.jsx("h2",{className:"subheading",children:"Analyst Predictions and Future Prospects"}),h.jsx("p",{style:$n.postText,children:"Market analysts have been closely monitoring this development, with many predicting continued upward momentum in Bajaj's stock prices. The company’s strong fundamentals, combined with favorable market conditions, have made this IPO one of the most anticipated events in the financial sector this year."}),h.jsx("h2",{className:"subheading",children:"Increased Trading Volumes Before the IPO"}),h.jsx("p",{style:$n.postText,children:"In the days leading up to the IPO, trading volumes in Bajaj stocks have also increased significantly, indicating heightened investor interest. The market's reaction suggests that Bajaj's strategic decisions are being well-received, and the IPO could serve as a catalyst for further growth in the company's valuation."}),h.jsx("h2",{className:"subheading",children:"Utilization of IPO Funds for Expansion"}),h.jsxs("p",{style:$n.postText,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725350564/3_zlc3pb.png",alt:"Investment",className:"inline-image"}),"As the IPO date approaches, investors will be keenly watching how Bajaj plans to utilize the capital raised. The company has indicated that the funds will be used for various expansion projects, including new product development and market diversification."]}),h.jsx("h2",{className:"subheading",children:"Conclusion: A Testament to Bajaj's Market Position"}),h.jsx("p",{style:$n.postText,children:"Overall, the recent surge in Bajaj stocks is a testament to the company's solid market position and the confidence that investors have in its future. As more details about the IPO become available, it will be interesting to see how the stock market continues to respond."})]})]}),$n={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},aR=()=>h.jsxs("div",{style:Un.blogContainer,children:[h.jsx("h1",{className:"animated-heading",children:"Bajaj Housing Finance IPO"}),h.jsxs("div",{style:Un.post,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792479/316945-bajaj-housing-finance-ipo_tx03z5.avif",alt:"Bajaj Stocks Surge",style:Un.postImage}),h.jsx("h2",{className:"subheading",children:"The Impact of Bajaj's IPO Announcement"}),h.jsx("p",{style:Un.postText,children:"The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices. This surge reflects growing investor confidence in the company's future prospects and its ability to deliver strong returns."}),h.jsx("h2",{className:"subheading",children:"About Bjaj Housing Finance"}),h.jsxs("p",{style:Un.postText,children:["Classified as an ‘Upper-Layer NBFC’ by the RBI pursuant to Scale Based Regulations, Bajaj Housing Finance Limited (BHFL) is a 100% subsidiary of Bajaj Finance Limited — one of the most diversified NBFCs in the Indian market, catering to more than 88.11 million customers across the country. Headquartered in Pune, BHFL offers finance to individuals as well as corporate entities for the purchase and renovation of homes, or commercial spaces.",h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792949/Bajaj-Housing-Finance-IPO-Price-Set-at-_66-70-Per-Share-IW-News-Title-removebg-preview_q15hyc.png",alt:"IPO",className:"inline-image right-image"}),"It also provides loans against property for business or personal needs as well as working capital for business expansion purposes. BHFL also offers finance to developers engaged in the construction of residential and commercial properties as well as lease rental discounting to developers and high-net-worth individuals. The Company is rated AAA/Stable for its long-term debt programme and A1+ for its short-term debt programme from CRISIL and India Ratings."]}),h.jsx("h2",{className:"subheading",children:"Bjaj Housing Finance IPO"}),h.jsx("p",{style:Un.postText,children:"Bajaj Housing Finance IPO is a book built issue of Rs 6,560.00 crores. The issue is a combination of fresh issue of 50.86 crore shares aggregating to Rs 3,560.00 crores and offer for sale of 42.86 crore shares aggregating to Rs 3,000.00 crores. Bajaj Housing Finance IPO opens for subscription on September 9, 2024 and closes on September 11, 2024. The allotment for the Bajaj Housing Finance IPO is expected to be finalized on Thursday, September 12, 2024. Bajaj Housing Finance IPO will list on BSE, NSE with tentative listing date fixed as Monday, September 16, 2024."}),h.jsx("h2",{className:"subheading",children:"Bajaj Housing Finance raises Rs 1,757 crore from anchor investors"}),h.jsx("p",{style:Un.postText,children:"Bajaj Housing Finance on Friday allotted shares worth Rs 1,757 crore to anchor investors. It allotted 251 million shares at Rs 70 apiece to over 100 investors. Some of the investors that got an allotment included the Government of Singapore, HDFC MF, New World Fund, and Capital Group."}),h.jsx("h2",{className:"subheading",children:"Utilization of IPO Funds for Expansion"}),h.jsxs("p",{style:Un.postText,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725793329/cvvcvcvcvcvcvcvcvcvcvcvcvbngfdtcgmhlk_jhg_fderxl-removebg-preview_g97zna.png",alt:"Investment",className:"inline-image"}),"As the IPO date approaches, investors will be keenly watching how Bajaj plans to utilize the capital raised. The company has indicated that the funds will be used for various expansion projects, including new product development and market diversification."]}),h.jsx("h2",{className:"subheading",children:"Conclusion: A Testament to Bajaj's Market Position"}),h.jsx("p",{style:Un.postText,children:"Overall, the recent surge in Bajaj stocks is a testament to the company's solid market position and the confidence that investors have in its future. As more details about the IPO become available, it will be interesting to see how the stock market continues to respond."})]})]}),Un={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},lR=()=>h.jsxs("div",{style:bt.blogContainer,children:[h.jsx("h1",{className:"animated-heading",children:"Five Things You Should Learn Fast, or the Market Will Make You Learn in Its Own Way❓"}),h.jsx("p",{style:bt.postText,children:"The stock market is an incredible platform for wealth creation, but it's also a place where overconfidence and poor decision-making can lead to significant losses. Many traders and investors start their journey thinking they can outsmart the market, but reality soon sets in. The market is not a casino; it's a disciplined game of strategy, patience, and resilience. Here are five crucial lessons every trader and investor must internalize to succeed in the stock market."}),h.jsxs("div",{style:bt.post,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726208591/Screenshot_36_jx5yb5.png",alt:"Bajaj Stocks Surge",style:bt.postImage}),h.jsx("h2",{className:"subheading",children:"You Can Never Outsmart the Market"}),h.jsx("p",{style:bt.postText,children:"No matter how much experience or knowledge you possess, you will never completely outsmart the market. The stock market is influenced by countless variables—economic indicators, geopolitical events, company-specific news, and even mass psychology—that are far beyond your control. Many new traders enter the market with a sense of invincibility, convinced they can predict every market movement. However, the most seasoned traders understand that attempting to outguess the market consistently is a futile exercise. The market will humble you if you come with overconfidence or an inflated sense of your own abilities."}),h.jsx("h2",{className:"subheading",children:"Lesson:"}),h.jsxs("p",{style:bt.postText,children:["⏩Focus on discipline, strategy, and risk management rather than trying to beat the market. It’s essential to accept that market fluctuations are inevitable, and you can only control your responses to them, not the market itself.",h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726208591/Screenshot_36_jx5yb5.png",alt:"IPO",className:"inline-image right-image"})]}),h.jsx("h2",{className:"subheading",children:"It’s a Stock Market, Not a Casino"}),h.jsx("p",{style:bt.postText,children:"The stock market is often compared to gambling, but this comparison couldn’t be further from the truth. In a casino, you are relying solely on luck. In the stock market, success comes from research, analysis, and careful decision-making.While day trading and speculative investments might feel similar to gambling, true long-term success in the market comes from disciplined strategies and understanding the fundamentals of the stocks you're investing in. Unlike a casino, where the odds are stacked against you, in the stock market, you can tilt the odds in your favor with proper research and strategy."}),h.jsx("h2",{className:"subheading",children:"Lesson:"}),h.jsx("p",{style:bt.postText,children:"⏩Treat the stock market as a disciplined investment platform. Informed decisions, backed by analysis and research, will always outperform speculative behavior and gambling-like trades."}),h.jsx("h2",{className:"subheading",children:"Stock Market as Primary or Secondary Source of Income"}),h.jsx("p",{style:bt.postText,children:"One of the most important decisions a trader has to make is whether they want to make the stock market their primary or secondary source of income. For many, full-time trading seems appealing because of the potential for large profits. However, the reality is that full-time trading is much more difficult than it seems. The market’s unpredictability can lead to extended periods of little to no gains or even losses.Before you consider transitioning to full-time trading, it’s critical to build a strong track record and ensure you have a financial cushion to absorb the inevitable downturns. For most people, keeping the stock market as a secondary source of income while maintaining a more stable primary income stream is the safer route."}),h.jsx("h2",{className:"subheading",children:"Lesson:"}),h.jsx("p",{style:bt.postText,children:"⏩The stock market can be a great supplementary source of income, but going full-time requires years of experience and a solid financial backup plan. Consider keeping trading as a secondary income until you’re consistently outperforming your main job"}),h.jsx("h2",{className:"subheading",children:"Stock Tips Will Burn Your Fingers"}),h.jsxs("p",{style:bt.postText,children:[h.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726208315/Screenshot__35_-removebg-preview_r3on92.png",alt:"Investment",className:"inline-image"}),"Stock tips from friends, family, or even online gurus might seem like a shortcut to success, but they often lead to poor outcomes. Acting on stock tips without conducting your own research is a recipe for disaster. While some tips may work in the short term, relying on them means you're essentially gambling with your money.Successful traders don’t rely on tips. They build their strategies based on thorough analysis, data-driven insights, and clear investment goals. By blindly following tips, you risk not only losing money but also damaging your ability to learn and grow as a trader"]}),h.jsx("h2",{className:"subheading",children:"Lesson:"}),h.jsx("p",{style:bt.postText,children:"⏩Avoid following stock tips blindly. Instead, focus on building your own knowledge and strategies, backed by solid research and analysis"}),h.jsx("h2",{className:"subheading",children:"Your Portfolio May Lag in a Bullish Market—And That’s Okay"}),h.jsx("p",{style:bt.postText,children:"One of the hardest lessons for new investors is that even in a bullish market, their portfolio may not perform as well as others’. This can be frustrating, but it's essential to understand that markets move in cycles, and not all stocks rise at the same pace. The temptation to chase hot stocks that are surging during a bull run can be strong, but doing so can lead to overpaying for stocks or taking unnecessary risks.Instead of chasing the hottest stocks, focus on the fundamentals of the companies you're invested in and the long-term potential of your portfolio. A disciplined approach will yield better results over time than constantly trying to keep up with the market or other investors."}),h.jsx("h2",{className:"subheading",children:"Lesson:"}),h.jsx("p",{style:bt.postText,children:"⏩ Don’t get disheartened if your portfolio lags in a bullish market. Focus on your long-term strategy and resist the urge to chase quick gains, as the market will eventually reward well-researched investments."}),h.jsx("h2",{className:"subheading",children:"Conclusion: The Market Teaches Tough Lessons"}),h.jsx("p",{style:bt.postText,children:"The stock market is a dynamic, unpredictable place, and those who fail to learn key lessons quickly are often taught in the harshest ways possible. You can never truly outsmart the market, and treating it like a casino or relying on stock tips is a surefire way to lose money. Whether you see the stock market as your primary or secondary income source, understanding risk management, discipline, and research will determine your long-term success. The market is a marathon, not a sprint, and while your portfolio might underperform during bullish times, staying committed to a thoughtful strategy will pay off in the long run.By learning these lessons early on, you can position yourself for success without being blindsided by the market’s unforgiving nature"})]})]}),bt={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},cR="_container_1e008_3",uR="_contentWrapper_1e008_47",dR="_leftSection_1e008_75",hR="_title_1e008_85",fR="_highlight_1e008_97",pR="_highlight2_1e008_105",mR="_description_1e008_113",gR="_rightSection_1e008_145",yR="_form_1e008_179",vR="_row_1e008_209",_R="_inputGroup_1e008_233",wR="_submitButton_1e008_271",xR="_videoSection_1e008_305",ER="_videoWrapper_1e008_341",TR="_video_1e008_305",bR="_applyButton_1e008_377",SR="_videoTextWrapper_1e008_417",kR="_videoTitle_1e008_427",IR="_cardContainer_1e008_447",CR="_approvalProcessCard_1e008_467",AR="_chooseStockArcheryCardContainer_1e008_489",PR="_required_1e008_503",RR="_iconCard_1e008_519",jR="_iconContainer_1e008_545",OR="_iconTitle_1e008_559",NR="_iconAreaTitle_1e008_571",MR="_iconInvestmentTitle_1e008_579",LR="_iconLocationTitle_1e008_587",DR="_iconText_1e008_595",FR="_approvalProcessContainer_1e008_627",VR="_approvalProcessContainerTitle_1e008_643",zR="_approvalProcessContainerSubTitle_1e008_657",BR="_approvalProcessIcon_1e008_715",$R="_icons_1e008_735",UR="_processIcons_1e008_745",HR="_approvalProcessTitle_1e008_755",WR="_approvalProcessText_1e008_767",GR="_chooseStockArcheryContainer_1e008_801",qR="_chooseStockArcheryTitle_1e008_819",QR="_chooseStockArcheryTitleHighlight_1e008_829",YR="_chooseStockArcheryCard_1e008_489",KR="_chooseIcon_1e008_901",XR="_chooseStockArcheryText_1e008_911",JR="_ourConceptContainer_1e008_949",ZR="_ourConceptContainerTitle_1e008_957",ej="_ourConceptContainerSubTitle_1e008_969",tj="_ourConceptCardContainer_1e008_981",nj="_ourConceptCard_1e008_981",rj="_ourConceptCardTitle_1e008_1017",ij="_ourConceptCardText_1e008_1029",oj="_ourConceptCardIcon_1e008_1039",sj="_listenFromUsersContainer_1e008_1063",aj="_listenFromUsersTitle_1e008_1077",lj="_listenFromUsersCardContainer_1e008_1091",cj="_listenFromUsersCard_1e008_1091",uj="_listenFromUsersVideo_1e008_1121",dj="_videoInfo_1e008_1131",hj="_host_1e008_1163",fj="_listenFromFounderContainer_1e008_1179",pj="_listenFromFounderVideo_1e008_1201",mj="_listenFromFounderWrapper_1e008_1213",gj="_listenFromFounderTitle_1e008_1227",yj="_listenFromFounderText_1e008_1237",F={container:cR,contentWrapper:uR,leftSection:dR,title:hR,highlight:fR,highlight2:pR,description:mR,rightSection:gR,form:yR,row:vR,inputGroup:_R,submitButton:wR,videoSection:xR,videoWrapper:ER,video:TR,applyButton:bR,videoTextWrapper:SR,videoTitle:kR,cardContainer:IR,approvalProcessCard:CR,chooseStockArcheryCardContainer:AR,required:PR,iconCard:RR,iconContainer:jR,iconTitle:OR,iconAreaTitle:NR,iconInvestmentTitle:MR,iconLocationTitle:LR,iconText:DR,approvalProcessContainer:FR,approvalProcessContainerTitle:VR,approvalProcessContainerSubTitle:zR,approvalProcessIcon:BR,icons:$R,processIcons:UR,approvalProcessTitle:HR,approvalProcessText:WR,chooseStockArcheryContainer:GR,chooseStockArcheryTitle:qR,chooseStockArcheryTitleHighlight:QR,chooseStockArcheryCard:YR,chooseIcon:KR,chooseStockArcheryText:XR,ourConceptContainer:JR,ourConceptContainerTitle:ZR,ourConceptContainerSubTitle:ej,ourConceptCardContainer:tj,ourConceptCard:nj,ourConceptCardTitle:rj,ourConceptCardText:ij,ourConceptCardIcon:oj,listenFromUsersContainer:sj,listenFromUsersTitle:aj,listenFromUsersCardContainer:lj,listenFromUsersCard:cj,listenFromUsersVideo:uj,videoInfo:dj,host:hj,listenFromFounderContainer:fj,listenFromFounderVideo:pj,listenFromFounderWrapper:mj,listenFromFounderTitle:gj,listenFromFounderText:yj};function vj(t){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M133.2 25l-53.69 94H432.5l-53.7-94H133.2zM25 137v46h462v-46H25zm32 64v46h46v-46H57zm352 0v46h46v-46h-46zm-171.4.6s-22 8.8-24 18.8c-4.6 22.8 33.9 60.8 33.9 60.8s-13.3-34.6-14.3-52.8c-.5-9.1 4.4-26.8 4.4-26.8zm54.4 14.8c-6.1 40.2-11.2 83.7-45.9 100.2-30.3 14.4-36.4-78.5-94.1-91.5 44.9 101.1-68.9 139.9 42.2 185.2h19.5c-24-25.9-34.4-90.8-34.4-90.8s30.2 72 62.5 74.2c15 1 33.5-30.2 33.5-30.2s5.9 29.8-.1 46.8H319c27.3-14.8 44.6-35.7 51.2-57.3 6.5-20.9 3-42.5-10.9-59.9-8.6 51.8-21.4 62.8-55.1 74.1 36.6-44.7 20.2-119.2-12.2-150.8zM57 265v46h46v-46H57zm352 0v46h46v-46h-46zM57 329v78h46v-78H57zm352 0v78h46v-78h-46zM25 425v62h462v-62H25z"},child:[]}]})(t)}function _j(t){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 27.88c-8.97 10.574-20.842 21.506-33.637 33.347-16.767 15.515-34.995 32.31-49.45 49.656-14.453 17.345-24.872 35.13-27.25 51.994-2.265 16.054 1.912 31.8 18.275 49.244h184.125c16.362-17.444 20.54-33.19 18.275-49.243-2.38-16.865-12.798-34.65-27.252-51.994-14.454-17.345-32.682-34.14-49.45-49.656C276.843 49.387 264.97 38.454 256 27.88zM32 68.12c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm448 0c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm-368 137c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm288 0c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm-231 25v14h174v-14zm0 32v222h39v-135c0-16 32-48 48-64 16 16 48 48 48 64v135h39v-222zm-96 32v190h78v-190zm288 0v190h78v-190zm-249 7s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 5.464s16 8.233 16 16v32h-32v-32c0-7.767 16-16 16-16zM112 365.12s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16zm-288 64s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16z"},child:[]}]})(t)}function wj(t){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M18.75 45.53v99.44l87.594 43.53 39.594-80.156L18.75 45.53zm254.594 71.22l.937 29.28c-15.953 2.838-31.072 8.025-45.03 15.19 25.204 19.133 48.265 40.868 68.406 64.75 32.97-2.95 64.406 14.304 78.594 44.124 2.312 4.858 4.298 10.327 5.625 15.72l1.78 7.248-.342.188c5.876 40.095-20.21 78.91-60.344 88.78-42.624 10.484-85.715-15.604-96.19-58.124-3.867-15.707-2.168-31.376 2.876-45.406-19.822-22.79-41.185-42.17-64.22-58.344-.197.322-.396.646-.592.97-.005.007.004.023 0 .03l-38.625 14.72 25.03 13.624c-5.953 16.32-9.346 33.89-9.688 52.188l-25.937 31.968L143.97 333c3.185 18.025 9.385 35.013 18.03 50.438l-6.5 39.625 23.75-14.688c11.736 13.965 25.802 25.92 41.594 35.25l14.062 36.75L248 456.405c16.868 6.087 35.053 9.45 54 9.533l30.875 24.937L332 463.25c18.2-3.34 35.333-9.69 50.844-18.594l39.656 6.375-14.844-23.967c13.472-11.57 25.007-25.325 34.063-40.72L480 371.75l-25.156-13.688c5.622-16.04 8.792-33.22 9.03-51.125L490.595 274l-29.5.688c-3.22-17.073-9.135-33.194-17.28-47.907l6.905-42.186-25.314 15.625c-11.09-13.006-24.214-24.213-38.875-33.157l-15.217-39.782-14.063 25.75c-15.873-5.706-32.888-8.983-50.625-9.405l-33.28-26.875zm-120.03 18.875l-6.876 13.875C208.536 181.288 251.48 218.91 287 267.906c1.16-.556 2.36-1.082 3.594-1.53 4.504-1.64 9.137-2.42 13.687-2.407.65 0 1.292.027 1.94.06 15.514.814 29.87 10.697 35.5 26.126 7.503 20.573-3.256 43.57-23.845 51.063-20.59 7.49-43.62-3.21-51.125-23.783-4.79-13.134-2.122-27.242 5.78-37.687-34.074-47.307-74.226-82.698-134.374-113.47l-6.094 12.314c43.22 21.705 81.69 52.072 115.344 91.812l3.813 4.47-2.376 5.343c-5.353 12.042-7.224 25.748-3.906 39.217 8.07 32.758 40.718 52.524 73.593 44.438 32.89-8.09 53.232-40.94 45.19-73.594-.99-4.02-2.646-8.585-4.345-12.155-11.388-23.935-37.086-37.296-64.156-33.094l-5.283.814-3.375-4.094c-35.76-43.51-81.952-79.968-133.25-106.125zm151 147c-2.428.004-4.914.428-7.345 1.313-11.115 4.044-16.694 16.058-12.658 27.125 4.037 11.066 16.074 16.638 27.188 12.593 11.114-4.044 16.693-16.027 12.656-27.094-3.027-8.3-10.552-13.52-18.812-13.906-.344-.016-.685-.032-1.03-.03z"},child:[]}]})(t)}function xj(t){return fe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 14h14v2h-16v-16h2zM4.5 13c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.044 0 0.088 0.002 0.131 0.006l1.612-2.687c-0.154-0.235-0.243-0.517-0.243-0.819 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.302-0.090 0.583-0.243 0.819l1.612 2.687c0.043-0.004 0.087-0.006 0.131-0.006 0.033 0 0.066 0.001 0.099 0.004l2.662-4.658c-0.165-0.241-0.261-0.532-0.261-0.845 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5-0.033 0-0.066-0.001-0.099-0.004l-2.662 4.658c0.165 0.241 0.261 0.532 0.261 0.845 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.302 0.090-0.583 0.243-0.819l-1.612-2.687c-0.043 0.004-0.087 0.006-0.131 0.006s-0.088-0.002-0.131-0.006l-1.612 2.687c0.154 0.235 0.243 0.517 0.243 0.819 0 0.828-0.672 1.5-1.5 1.5z"},child:[]}]})(t)}function Ej(t){return fe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352l41.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-76 0-4 0-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"},child:[]}]})(t)}function Tj(t){return fe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"},child:[]}]})(t)}function bj(t){return fe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L408 256.9 408 480c0 17.7 14.3 32 32 32s32-14.3 32-32zM190.9 18.1C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 50.5-7.8 24.3-40.5-55.2-38L315 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74z"},child:[]}]})(t)}function Sj(t){return fe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z"},child:[]}]})(t)}function kj(t){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.1 229.8C429 154.6 365.4 96 288 96c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 241.5 0 280.5 0 321.5 0 371.7 40.7 416 90.9 416h330.3c50.2 0 90.9-44.3 90.9-94.5-.1-44.7-32.4-84.1-75-91.7zm-74.6-17.3L228.8 346.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"},child:[]}]})(t)}function Ij(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6h4"},child:[]},{tag:"path",attr:{d:"M2 10h4"},child:[]},{tag:"path",attr:{d:"M2 14h4"},child:[]},{tag:"path",attr:{d:"M2 18h4"},child:[]},{tag:"rect",attr:{width:"16",height:"20",x:"4",y:"2",rx:"2"},child:[]},{tag:"path",attr:{d:"M9.5 8h5"},child:[]},{tag:"path",attr:{d:"M9.5 12H16"},child:[]},{tag:"path",attr:{d:"M9.5 16H14"},child:[]}]})(t)}function Cj(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z M6,22 L6,19 C6,15.6862915 8.6862915,13 12,13 C15.3137085,13 18,15.6862915 18,19 L18,22 M13,5 C13.4037285,3.33566165 15.0151447,2 17,2 C19.172216,2 20.98052,3.790861 21,6 C20.98052,8.209139 19.172216,10 17,10 L16,10 L17,10 C20.287544,10 23,12.6862915 23,16 L23,18 M11,5 C10.5962715,3.33566165 8.98485529,2 7,2 C4.82778404,2 3.01948003,3.790861 3,6 C3.01948003,8.209139 4.82778404,10 7,10 L8,10 L7,10 C3.71245602,10 1,12.6862915 1,16 L1,18"},child:[]}]})(t)}function Aj(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M14.6431888,15.6961461 C14.3091703,14.6675626 13.7524493,13.7598949 13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L11,23 M12,18.8235294 L16.1904762,22 L23,13"},child:[]}]})(t)}function Pj(t){return fe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{fill:"#333",d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"},child:[]},{tag:"path",attr:{fill:"#E6E6E6",d:"M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1 150.9-207.8c3-4.1 7.9-6.6 13-6.6z"},child:[]},{tag:"path",attr:{fill:"#333",d:"M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"},child:[]}]})(t)}function Rj(t){return fe({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"rect",attr:{x:"13",y:"30",fill:"#BF360C",width:"22",height:"12"},child:[]},{tag:"g",attr:{fill:"#FFA726"},child:[{tag:"circle",attr:{cx:"10",cy:"26",r:"4"},child:[]},{tag:"circle",attr:{cx:"38",cy:"26",r:"4"},child:[]}]},{tag:"path",attr:{fill:"#FFB74D",d:"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},child:[]},{tag:"g",attr:{fill:"#784719"},child:[{tag:"circle",attr:{cx:"30",cy:"26",r:"2"},child:[]},{tag:"circle",attr:{cx:"18",cy:"26",r:"2"},child:[]}]},{tag:"path",attr:{fill:"#FF5722",d:"M24,2C15.5,2,3,7.8,3,35.6L13,42V24l16.8-9.8L35,21v21l10-8.2c0-5.6-0.9-29-15.4-29L28.2,2H24z"},child:[]},{tag:"path",attr:{fill:"#757575",d:"M45,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-9c-0.6,0-1,0.4-1,1s0.4,1,1,1h9c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h13c5,0,9-4,9-9v-5C46,24.4,45.6,24,45,24z"},child:[]},{tag:"g",attr:{fill:"#37474F"},child:[{tag:"path",attr:{d:"M45,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C47,22.9,46.1,22,45,22z"},child:[]},{tag:"circle",attr:{cx:"24",cy:"38",r:"2"},child:[]}]}]})(t)}function jj(t){return fe({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#F44336",cx:"24",cy:"24",r:"21"},child:[]},{tag:"polygon",attr:{fill:"#FFCA28",points:"24,11 27.9,18.9 36.6,20.2 30.3,26.3 31.8,35 24,30.9 16.2,35 17.7,26.3 11.4,20.2 20.1,18.9"},child:[]}]})(t)}function M4(t){return fe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},child:[]}]})(t)}function Oj(t){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"},child:[]}]})(t)}function Nj(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"},child:[]}]})(t)}function Mj(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0z"},child:[]}]},{tag:"path",attr:{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zM12.51 4.05C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zM16.53 13.83C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z"},child:[]}]})(t)}function Lj(t){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M366.05 146a46.7 46.7 0 0 1-2.42-63.42 3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24 23.66 23.66 0 0 1-14.95 15 23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22 46.69 46.69 0 0 1 65.84 65.84 3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25 23.66 23.66 0 0 1 14.95-15 23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22 46.7 46.7 0 0 1-63.42-2.32z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"m250.5 140.44-16.51-16.51m60.53 60.53-11.01-11m55.03 55.03-11-11.01m60.53 60.53-16.51-16.51"},child:[]}]})(t)}function Dj(t){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"},child:[]},{tag:"path",attr:{d:"M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"},child:[]},{tag:"path",attr:{d:"M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"},child:[]},{tag:"path",attr:{d:"M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"},child:[]},{tag:"path",attr:{d:"M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"},child:[]},{tag:"path",attr:{d:"M5.058 18.306l2.88 -4.606"},child:[]},{tag:"path",attr:{d:"M10.061 10.303l2.877 -4.604"},child:[]},{tag:"path",attr:{d:"M10.065 13.705l2.876 4.6"},child:[]},{tag:"path",attr:{d:"M15.063 5.7l2.881 4.61"},child:[]}]})(t)}const Fj="/images/s1.mp4",Vj="/images/s2.mp4",zj="/images/s3.mp4",Bj=[{icon:h.jsx(kj,{className:F.icons,color:"green"}),title:"Apply Online",text:"Submit your application through our easy-to-use 'Apply Now' form. Provide your basic details and express your interest in partnering with us to bring stock market education to your city."},{icon:h.jsx(Ej,{className:F.icons,color:"green"}),title:"Introductory Call",text:"Connect with our franchise development team to share your background, discuss your region's potential, and learn more about our business model."},{icon:h.jsx(Ij,{className:F.icons,color:"green"}),title:"Business Plan Review & Evaluation",text:"Dive into the financial aspects, operational requirements, and market potential. We'll guide you through creating a sustainable plan for success."},{icon:h.jsx(Cj,{className:F.icons,color:"green"}),title:"Orientation Day",text:"Meet our leadership, explore our hybrid learning model, and experience how our innovative courses are changing lives. This step will help you align with our mission."},{icon:h.jsx(Sj,{className:F.icons,color:"green"}),title:"Final Approval & Partnership Launch",text:"Complete the documentation, finalize compliance, and receive all the resources needed to launch your Stock Market Learning Center in your territory."}],$j=[{icon:h.jsx(bj,{color:"green",className:F.chooseIcon}),title:"Proven Success"},{icon:h.jsx(Y8,{color:"brown",className:F.chooseIcon}),title:"Ownership Equity"},{icon:h.jsx(Pj,{className:F.chooseIcon}),title:"Operational Efficiency"},{icon:h.jsx(Rj,{className:F.chooseIcon}),title:"Support from central operations"},{icon:h.jsx(M4,{color:"#00a2ff",className:F.chooseIcon}),title:"50,000+ Social media followers"},{icon:h.jsx(Aj,{color:"#7acfff",className:F.chooseIcon}),title:"Led by Industry Experts"},{icon:h.jsx(J8,{color:"#6c3de3",className:F.chooseIcon}),title:"500+ Enrolled Learners"},{icon:h.jsx(_j,{color:"green",className:F.chooseIcon}),title:"Social Media Presence"},{icon:h.jsx(Oj,{color:"#07e30e",className:F.chooseIcon}),title:"1Cr+ Annualised Revenue"},{icon:h.jsx(jj,{className:F.chooseIcon}),title:"Rated 4.9 & Above"},{icon:h.jsx(Mj,{color:"#e3be07",className:F.chooseIcon}),title:"25+ New Monthly Hybrid Enrollments"},{icon:h.jsx(Lj,{color:"#670578",className:F.chooseIcon}),title:"INR 35000 Average Ticket Size"}],Uj=[{icon:h.jsx(Nj,{color:"green",className:F.chooseIcon}),title:"Vibrant & Positive",text:"Discover a vibrant and positive atmosphere at our Stock Market Hybrid Learning Center, where innovation and education flourish."},{icon:h.jsx(wj,{color:"brown",className:F.chooseIcon}),title:"Cutting-edge Technology",text:"We seamlessly integrate innovative tools to enhance the learning experience, ensuring our students stay ahead in the dynamic world of stock market education."},{icon:h.jsx(M4,{color:"#00a2ff",className:F.chooseIcon}),title:"Community Based Learning",text:"Experience hands-on, community-based learning at our Hybrid Learning Center, where practical skills meet a supportive environment for real-world success."},{icon:h.jsx(Dj,{color:"gray",className:F.chooseIcon}),title:"Social Engagement",text:"Fueling success through social engagement, our Hybrid Learning Center creates a dynamic space where students connect, collaborate, and thrive."}],Hj=[{name:"Arvind Sharma",role:"Student",videoSrc:Fj},{name:"Md Shanawaz Hussain",role:"Student",videoSrc:Vj},{name:"Priyanshu",role:"Student",videoSrc:zj}],Wj=()=>{const t=D.useRef(null),[e,n]=D.useState({name:"",email:"",city:"",phone:"",experience:"",budget:"",startTime:""}),r=()=>{setTimeout(()=>{t.current&&t.current.focus()},0)},i=s=>{n({...e,[s.target.name]:s.target.value})},o=async s=>{s.preventDefault();const l=new Date().toISOString().split("T")[0];try{const c=Ux(Om(Lm,"enquiries",l,"submissions"));await p9(c,e),alert("Enquiry submitted successfully!"),n({name:"",email:"",city:"",phone:"",experience:"",budget:"",startTime:""})}catch(c){console.error("Error submitting enquiry:",c),alert("Failed to submit enquiry.")}console.log("This is form data "+e)};return h.jsxs("div",{className:F.container,children:[h.jsxs("div",{className:F.contentWrapper,children:[h.jsxs("div",{className:F.leftSection,children:[h.jsx("h1",{className:F.title,children:h.jsxs("span",{className:F.highlight,children:["Stock ",h.jsx("span",{className:F.highlight2,children:"Archery"})]})}),h.jsx("p",{className:F.description,children:"Partner with us to revolutionize financial education in your city and make a lasting impact."}),h.jsx("button",{onClick:r,className:F.applyButton,children:"Apply Now →"})]}),h.jsx("div",{className:F.rightSection,children:h.jsxs("form",{className:F.form,onSubmit:o,children:[h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{htmlFor:"name",children:["Full Name ",h.jsx("span",{className:F.required,children:"*"})," "]}),h.jsx("input",{ref:t,name:"name",type:"text",placeholder:"Enter your name",required:!0,value:e.name,onChange:i})]}),h.jsxs("div",{className:F.row,children:[h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{htmlFor:"email",children:["Email ",h.jsx("span",{className:F.required,children:"*"})," "]}),h.jsx("input",{name:"email",type:"email",placeholder:"Enter your email",required:!0,value:e.email,onChange:i})]}),h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{htmlFor:"city",children:["City ",h.jsx("span",{className:F.required,children:"*"})," "]}),h.jsx("input",{name:"city",type:"text",placeholder:"Enter your city",required:!0,value:e.city,onChange:i})]})]}),h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{htmlFor:"phone",children:["Phone Number ",h.jsx("span",{className:F.required,children:"*"})," "]}),h.jsx("input",{name:"phone",type:"tel",placeholder:"Enter your phone number",required:!0,value:e.phone,onChange:i})]}),h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{children:["What is your Business Experience ",h.jsx("span",{className:F.required,children:"*"})]}),h.jsxs("select",{name:"experience",required:!0,value:e.experience,onChange:i,children:[h.jsx("option",{value:"",children:"Select an option"}),h.jsx("option",{value:"Beginner",children:"Beginner"}),h.jsx("option",{value:"Intermediate",children:"Intermediate"}),h.jsx("option",{value:"Expert",children:"Expert"})]})]}),h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{children:["What is your investment budget  ",h.jsx("span",{className:F.required,children:"*"})]}),h.jsxs("select",{name:"budget",required:!0,value:e.budget,onChange:i,children:[h.jsx("option",{value:"",children:"Select an option"}),h.jsx("option",{value:"5-10 Lakhs",children:"5-10 Lakhs"}),h.jsx("option",{value:"10-15 Lakhs",children:"10-15 Lakhs"}),h.jsx("option",{value:"Above 15 Lakhs",children:"Above 15 Lakhs"})]})]}),h.jsxs("div",{className:F.inputGroup,children:[h.jsxs("label",{children:["How soon you planning to start  ",h.jsx("span",{className:F.required,children:"*"})]}),h.jsxs("select",{name:"startTime",required:!0,value:e.startTime,onChange:i,children:[h.jsx("option",{value:"",children:"Select an option"}),h.jsx("option",{value:"Immediately",children:"Immediately"}),h.jsx("option",{value:"In 1 Month",children:"In 1 Month"}),h.jsx("option",{value:"In 2-3 Months",children:"In 2-3 Months"}),h.jsx("option",{value:"Not Sure",children:"Not Sure"})]})]}),h.jsx("button",{className:F.submitButton,type:"submit",children:"Send →"})]})})]}),h.jsxs("div",{className:F.videoSection,children:[h.jsx("div",{className:F.videoWrapper,children:h.jsxs("video",{controls:!0,className:F.video,children:[h.jsx("source",{src:"/pro.webm",type:"video/webm"}),h.jsx("source",{src:"/pro.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})}),h.jsxs("div",{className:F.videoTextWrapper,children:[h.jsx("h2",{className:F.videoTitle,children:"Why Choose Our Franchise?"}),h.jsx("p",{className:F.videoDescription,children:"Become a part of India's leading stock market education platform."})]})]}),h.jsxs("section",{className:F.iconCard,children:[h.jsxs("div",{className:F.iconContainer,children:[h.jsx(vj,{className:F.processIcons,color:"d88d3c"}),h.jsx("h4",{className:`${F.iconTitle} ${F.iconAreaTitle}`,children:"Minimum Area Required"}),h.jsx("p",{className:F.iconText,children:"1000 sqr ft."})]}),h.jsxs("div",{className:F.iconContainer,children:[h.jsx(xj,{className:F.processIcons,color:"3b873e"}),h.jsx("h4",{className:`${F.iconTitle} ${F.iconInvestmentTitle}`,children:"Investment starts @ INR"}),h.jsx("p",{className:F.iconText,children:"8 lakhs"})]}),h.jsxs("div",{className:F.iconContainer,children:[h.jsx(Tj,{className:F.processIcons,color:"37439e"}),h.jsx("h4",{className:`${F.iconTitle} ${F.iconLocationTitle}`,children:"Location"}),h.jsx("p",{className:F.iconText,children:"India 1 & India 2"})]})]}),h.jsxs("section",{className:F.approvalProcessContainer,children:[h.jsxs("h1",{className:F.approvalProcessContainerTitle,children:[h.jsx("span",{className:F.approvalProcessContainerSubTitle,children:"StockArchery  "}),"Centre Franchise Approval Process"]}),h.jsx("div",{className:F.cardContainer,children:Bj.map((s,l)=>h.jsxs("div",{className:F.approvalProcessCard,children:[h.jsx("div",{className:F.approvalProcessIcon,children:s.icon}),h.jsx("h3",{className:F.approvalProcessTitle,children:s.title}),h.jsx("p",{className:F.approvalProcessText,children:s.text})]},l))})]}),h.jsxs("section",{className:F.chooseStockArcheryContainer,children:[h.jsxs("h1",{className:F.chooseStockArcheryTitle,children:["Why Choose ",h.jsx("span",{className:F.chooseStockArcheryTitleHighlight,children:"StockArchery"})," ?"]}),h.jsx("div",{className:F.chooseStockArcheryCardContainer,children:$j.map((s,l)=>h.jsxs("div",{className:F.chooseStockArcheryCard,children:[h.jsx("div",{className:F.chooseStockArcheryIcon,children:s.icon}),h.jsx("p",{className:F.chooseStockArcheryText,children:s.title})]},l))})]}),h.jsxs("section",{className:F.ourConceptContainer,children:[h.jsxs("h1",{className:F.ourConceptContainerTitle,children:["OUR CONCEPT - ",h.jsx("span",{className:F.ourConceptContainerSubTitle,children:"HYBRID LEARNING"})]}),h.jsx("div",{className:F.ourConceptCardContainer,children:Uj.map((s,l)=>h.jsxs("div",{className:F.ourConceptCard,children:[h.jsx("div",{className:F.ourConceptCardIcon,children:s.icon}),h.jsx("h3",{className:F.ourConceptCardTitle,children:s.title}),h.jsx("p",{className:F.ourConceptCardText,children:s.text})]},l))})]}),h.jsxs("section",{className:F.listenFromUsersContainer,children:[h.jsx("h1",{className:F.listenFromUsersTitle,children:"Listen from our users & students"}),h.jsx("div",{className:F.listenFromUsersCardContainer,children:Hj.map((s,l)=>h.jsxs("div",{className:F.listenFromUsersCard,children:[h.jsxs("video",{controls:!0,className:F.listenFromUsersVideo,children:[h.jsx("source",{src:s.videoSrc,type:"video/mp4"}),"Your browser does not support the video tag."]}),h.jsxs("div",{className:F.videoInfo,children:[h.jsx("h3",{children:s.name}),h.jsx("p",{children:s.role})]})]},l))})]})]})},Gj={colors:{heading:"rgb(24 24 29)",text:"#febb12;",white:"#fff",yellow:"#febb12",black:"#212529",helper:"#8490ff",bg:"rgb(249 249 255)",footer_bg:"#0a1435",btn:"rgb(98 84 243)",border:"rgba(98, 84, 243, 0.5)",hr:"#ffffff",gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px"},media:{mobile:"768px",tab:"998px"}},qj=()=>h.jsxs(Fb,{theme:Gj,children:[h.jsx($b,{}),h.jsx(Z7,{}),h.jsxs(O5,{children:[h.jsx(eS,{}),h.jsxs(S5,{children:[h.jsx(We,{path:"/",element:h.jsx(N8,{})}),h.jsx(We,{path:"/about",element:h.jsx(G8,{})}),h.jsx(We,{path:"/contact",element:h.jsx(q8,{})}),h.jsx(We,{path:"/video",element:h.jsx(k4,{})}),h.jsx(We,{path:"/FAQ",element:h.jsx(K7,{})}),h.jsx(We,{path:"/blog",element:h.jsx(tR,{})}),h.jsx(We,{path:"/content",element:h.jsx(eR,{})}),h.jsx(We,{path:"/new",element:h.jsx(C4,{})}),h.jsx(We,{path:"/sect",element:h.jsx(I4,{})}),h.jsx(We,{path:"/ola",element:h.jsx(nR,{})}),h.jsx(We,{path:"/ref",element:h.jsx(rR,{})}),h.jsx(We,{path:"/festival",element:h.jsx(iR,{})}),h.jsx(We,{path:"/it",element:h.jsx(oR,{})}),h.jsx(We,{path:"/bjaj",element:h.jsx(sR,{})}),h.jsx(We,{path:"/bjaj2",element:h.jsx(aR,{})}),h.jsx(We,{path:"/five",element:h.jsx(lR,{})}),h.jsx(We,{path:"/franchise",element:h.jsx(Wj,{})}),h.jsx(We,{path:"*",element:h.jsx(T5,{to:"/"})})]}),h.jsx(y9,{})]})]});ph.createRoot(document.getElementById("root")).render(h.jsx(E9,{children:h.jsx(qj,{})}));
