(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
    typeof define === 'function' && define.amd ? define(['jquery'], factory) :
    (global.CustomKeyboard = factory(global.$));
}(this, (function ($$1) { 'use strict';

    $$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var commonjsGlobal$1="undefined"==typeof window?"undefined"==typeof commonjsGlobal?"undefined"==typeof self?{}:self:commonjsGlobal:window;function createCommonjsModule$1(e,t){return t={exports:{}},e(t,t.exports),t.exports}var jquery=createCommonjsModule$1(function(e){var t=Math.round,n=String.fromCharCode,a=Math.max;(function(t,n){e.exports=t.document?n(t,!0):function(e){if(!e.document){ throw new Error("jQuery requires a window with a document"); }return n(e)};})("undefined"==typeof window?commonjsGlobal$1:window,function(e,s){var le=Math.ceil;function r(e,t,n){t=t||pe;var a=t.createElement("script"),s;if(a.text=e,n){ for(s in Te){ n[s]&&(a[s]=n[s]); } }t.head.appendChild(a).parentNode.removeChild(a);}function o(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ge[ye.call(e)]||"object":typeof e}function l(e){var t=!!e&&"length"in e&&e.length,n=o(e);return !(Le(e)||qe(e))&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function d(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function p(e,t,n){return Le(t)?ke.grep(e,function(e,a){return !!t.call(e,a,e)!==n}):t.nodeType?ke.grep(e,function(e){return e===t!==n}):"string"==typeof t?ke.filter(t,e,n):ke.grep(e,function(e){return -1<fe.call(t,e)!==n})}function c(e,t){for(;(e=e[t])&&1!==e.nodeType;){ }return e}function u(e){var t={};return ke.each(e.match(He)||[],function(e,n){t[n]=!0;}),t}function m(e){return e}function h(e){throw e}function f(e,t,n,a){var s;try{e&&Le(s=e.promise)?s.call(e).done(t).fail(n):e&&Le(s=e.then)?s.call(e,t,n):t.apply(void 0,[e].slice(a));}catch(e){n.apply(void 0,[e]);}}function g(){pe.removeEventListener("DOMContentLoaded",g),e.removeEventListener("load",g),ke.ready();}function y(e,t){return t.toUpperCase()}function b(e){return e.replace(Fe,"ms-").replace(ze,y)}function x(){this.expando=ke.expando+x.uid++;}function w(e){return "true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Xe.test(e)?JSON.parse(e):e)}function v(e,t,n){var a;if(void 0===n&&1===e.nodeType){ if(a="data-"+t.replace(Ge,"-$&").toLowerCase(),n=e.getAttribute(a),"string"==typeof n){try{n=w(n);}catch(t){}Ue.set(e,t,n);}else { n=void 0; } }return n}function L(e,t,n,a){var s=20,r=a?function(){return a.cur()}:function(){return ke.css(e,t,"")},o=r(),i=n&&n[3]||(ke.cssNumber[t]?"":"px"),l=(ke.cssNumber[t]||"px"!==i&&+o)&&Ye.exec(ke.css(e,t)),d,p;if(l&&l[3]!==i){for(o/=2,i=i||l[3],l=+o||1;s--;){ ke.style(e,t,l+i),0>=(1-p)*(1-(p=r()/o||.5))&&(s=0),l/=p; }l*=2,ke.style(e,t,l+i),n=n||[];}return n&&(l=+l||+o||0,d=n[1]?l+(n[1]+1)*n[2]:+n[2],a&&(a.unit=i,a.start=l,a.end=d)),d}function q(e){var t=e.ownerDocument,n=e.nodeName,a=et[n],s;return a?a:(s=t.body.appendChild(t.createElement(n)),a=ke.css(s,"display"),s.parentNode.removeChild(s),"none"===a&&(a="block"),et[n]=a,a)}function T(e,t){for(var n=[],a=0,s=e.length,r,o;a<s;a++){ (o=e[a],!!o.style)&&(r=o.style.display,t?("none"===r&&(n[a]=$e.get(o,"display")||null,!n[a]&&(o.style.display="")),""===o.style.display&&Je(o)&&(n[a]=q(o))):"none"!==r&&(n[a]="none",$e.set(o,"display",r))); }for(a=0;a<s;a++){ null!=n[a]&&(e[a].style.display=n[a]); }return e}function C(e,t){var n;return n="undefined"==typeof e.getElementsByTagName?"undefined"==typeof e.querySelectorAll?[]:e.querySelectorAll(t||"*"):e.getElementsByTagName(t||"*"),void 0===t||t&&d(e,t)?ke.merge([e],n):n}function k(e,t){for(var n=0,a=e.length;n<a;n++){ $e.set(e[n],"globalEval",!t||$e.get(t[n],"globalEval")); }}function j(e,t,n,a,s){for(var r=t.createDocumentFragment(),d=[],p=0,c=e.length,l,u,m,h,f,g;p<c;p++){ if(l=e[p],l||0===l){ if("object"===o(l)){ ke.merge(d,l.nodeType?[l]:l); }else if(!rt.test(l)){ d.push(t.createTextNode(l)); }else{for(u=u||r.appendChild(t.createElement("div")),m=(nt.exec(l)||["",""])[1].toLowerCase(),h=st[m]||st._default,u.innerHTML=h[1]+ke.htmlPrefilter(l)+h[2],g=h[0];g--;){ u=u.lastChild; }ke.merge(d,u.childNodes),u=r.firstChild,u.textContent="";} } }for(r.textContent="",p=0;l=d[p++];){if(a&&-1<ke.inArray(l,a)){s&&s.push(l);continue}if(f=ke.contains(l.ownerDocument,l),u=C(r.appendChild(l),"script"),f&&k(u),n){ for(g=0;l=u[g++];){ at.test(l.type||"")&&n.push(l); } }}return r}function O(){return !0}function S(){return !1}function D(){try{return pe.activeElement}catch(e){}}function R(e,t,n,a,s,r){var o,i;if("object"==typeof t){for(i in"string"!=typeof n&&(a=a||n,n=void 0),t){ R(e,i,n,a,t[i],r); }return e}if(null==a&&null==s?(s=n,a=n=void 0):null==s&&("string"==typeof n?(s=a,a=void 0):(s=a,a=n,n=void 0)),!1===s){ s=S; }else if(!s){ return e; }return 1===r&&(o=s,s=function(e){return ke().off(e),o.apply(this,arguments)},s.guid=o.guid||(o.guid=ke.guid++)),e.each(function(){ke.event.add(this,t,s,a,n);})}function i(e,t){return d(e,"table")&&d(11===t.nodeType?t.firstChild:t,"tr")?ke(e).children("tbody")[0]||e:e}function E(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function A(e){return "true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function N(e,t){var n,a,s,r,o,d,p,c;if(1===t.nodeType){if($e.hasData(e)&&(r=$e.access(e),o=$e.set(t,r),c=r.events,c)){ for(s in delete o.handle,o.events={},c){ for(n=0,a=c[s].length;n<a;n++){ ke.event.add(t,s,c[s][n]); } } }Ue.hasData(e)&&(d=Ue.access(e),p=ke.extend({},d),Ue.set(t,p));}}function _(e,t){var n=t.nodeName.toLowerCase();"input"===n&&tt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue);}function Q(e,t,n,a){t=me.apply([],t);var s=0,o=e.length,l=t[0],d=Le(l),p,c,u,m,h,f;if(d||1<o&&"string"==typeof l&&!ve.checkClone&&ut.test(l)){ return e.each(function(s){var r=e.eq(s);d&&(t[0]=l.call(this,s,r.html())),Q(r,t,n,a);}); }if(o&&(p=j(t,e[0].ownerDocument,!1,e,a),c=p.firstChild,1===p.childNodes.length&&(p=c),c||a)){for(u=ke.map(C(p,"script"),E),m=u.length;s<o;s++){ h=p,s!=o-1&&(h=ke.clone(h,!0,!0),m&&ke.merge(u,C(h,"script"))),n.call(e[s],h,s); }if(m){ for(f=u[u.length-1].ownerDocument,ke.map(u,A),s=0;s<m;s++){ h=u[s],at.test(h.type||"")&&!$e.access(h,"globalEval")&&ke.contains(f,h)&&(h.src&&"module"!==(h.type||"").toLowerCase()?ke._evalUrl&&ke._evalUrl(h.src):r(h.textContent.replace(mt,""),f,h)); } }}return e}function I(e,t,n){for(var a=t?ke.filter(t,e):e,s=0,r;null!=(r=a[s]);s++){ n||1!==r.nodeType||ke.cleanData(C(r)),r.parentNode&&(n&&ke.contains(r.ownerDocument,r)&&k(C(r,"script")),r.parentNode.removeChild(r)); }return e}function H(e,t,n){var a=e.style,s,r,o,i;return n=n||ft(e),n&&(i=n.getPropertyValue(t)||n[t],""===i&&!ke.contains(e.ownerDocument,e)&&(i=ke.style(e,t)),!ve.pixelBoxStyles()&&ht.test(i)&&gt.test(t)&&(s=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=i,i=n.width,a.width=s,a.minWidth=r,a.maxWidth=o)),void 0===i?i:i+""}function P(e,t){return {get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function B(e){if(e in Lt){ return e; }for(var t=e[0].toUpperCase()+e.slice(1),n=vt.length;n--;){ if(e=vt[n]+t,e in Lt){ return e } }}function M(e){var t=ke.cssProps[e];return t||(t=ke.cssProps[e]=B(e)||e),t}function F(e,t,n){var s=Ye.exec(t);return s?a(0,s[2]-(n||0))+(s[3]||"px"):t}function z(e,t,n,s,r,o){var l="width"===t?1:0,d=0,p=0;if(n===(s?"border":"content")){ return 0; }for(;4>l;l+=2){ "margin"===n&&(p+=ke.css(e,n+Ke[l],!0,r)),s?("content"===n&&(p-=ke.css(e,"padding"+Ke[l],!0,r)),"margin"!==n&&(p-=ke.css(e,"border"+Ke[l]+"Width",!0,r))):(p+=ke.css(e,"padding"+Ke[l],!0,r),"padding"===n?d+=ke.css(e,"border"+Ke[l]+"Width",!0,r):p+=ke.css(e,"border"+Ke[l]+"Width",!0,r)); }return !s&&0<=o&&(p+=a(0,le(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-p-d-.5))),p}function W(e,t,n){var a=ft(e),s=H(e,t,a),r="border-box"===ke.css(e,"boxSizing",!1,a),o=r;if(ht.test(s)){if(!n){ return s; }s="auto";}return o=o&&(ve.boxSizingReliable()||s===e.style[t]),"auto"!==s&&(parseFloat(s)||"inline"!==ke.css(e,"display",!1,a))||(s=e["offset"+t[0].toUpperCase()+t.slice(1)],o=!0),s=parseFloat(s)||0,s+z(e,t,n||(r?"border":"content"),o,a,s)+"px"}function $(e,t,n,a,s){return new $.prototype.init(e,t,n,a,s)}function U(){kt&&(!1===pe.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(U):e.setTimeout(U,ke.fx.interval),ke.fx.tick());}function X(){return e.setTimeout(function(){Ct=void 0;}),Ct=Date.now()}function G(e,t){var n=0,a={height:e},s;for(t=t?1:0;4>n;n+=2-t){ s=Ke[n],a["margin"+s]=a["padding"+s]=e; }return t&&(a.opacity=a.width=e),a}function V(e,t,n){for(var a=(J.tweeners[t]||[]).concat(J.tweeners["*"]),s=0,r=a.length,o;s<r;s++){ if(o=a[s].call(n,t,e)){ return o } }}function Y(e,t,n){var a="width"in t||"height"in t,s=this,r={},o=e.style,i=e.nodeType&&Je(e),l=$e.get(e,"fxshow"),d,p,c,u,m,h,f,g;for(d in n.queue||(u=ke._queueHooks(e,"fx"),null==u.unqueued&&(u.unqueued=0,m=u.empty.fire,u.empty.fire=function(){u.unqueued||m();}),u.unqueued++,s.always(function(){s.always(function(){u.unqueued--,ke.queue(e,"fx").length||u.empty.fire();});})),t){ if(p=t[d],qt.test(p)){if(delete t[d],c=c||"toggle"===p,p===(i?"hide":"show")){ if("show"===p&&l&&void 0!==l[d]){ i=!0; }else { continue; } }r[d]=l&&l[d]||ke.style(e,d);} }if(h=!ke.isEmptyObject(t),h||!ke.isEmptyObject(r)){ for(d in a&&1===e.nodeType&&(n.overflow=[o.overflow,o.overflowX,o.overflowY],f=l&&l.display,null==f&&(f=$e.get(e,"display")),g=ke.css(e,"display"),"none"===g&&(f?g=f:(T([e],!0),f=e.style.display||f,g=ke.css(e,"display"),T([e]))),("inline"===g||"inline-block"===g&&null!=f)&&"none"===ke.css(e,"float")&&(!h&&(s.done(function(){o.display=f;}),null==f&&(g=o.display,f="none"===g?"":g)),o.display="inline-block")),n.overflow&&(o.overflow="hidden",s.always(function(){o.overflow=n.overflow[0],o.overflowX=n.overflow[1],o.overflowY=n.overflow[2];})),h=!1,r){ h||(l?"hidden"in l&&(i=l.hidden):l=$e.access(e,"fxshow",{display:f}),c&&(l.hidden=!i),i&&T([e],!0),s.done(function(){for(d in i||T([e]),$e.remove(e,"fxshow"),r){ ke.style(e,d,r[d]); }})),h=V(i?l[d]:0,d,s),d in l||(l[d]=h.start,i&&(h.end=h.start,h.start=0)); } }}function K(e,t){var n,a,s,r,o;for(n in e){ if(a=b(n),s=t[a],r=e[n],Array.isArray(r)&&(s=r[1],r=e[n]=r[0]),n!==a&&(e[a]=r,delete e[n]),o=ke.cssHooks[a],o&&"expand"in o){ for(n in r=o.expand(r),delete e[a],r){ n in e||(e[n]=r[n],t[n]=s); } }else { t[a]=s; } }}function J(e,t,n){var s=0,r=J.prefilters.length,o=ke.Deferred().always(function(){delete i.elem;}),i=function(){if(c){ return !1; }for(var t=Ct||X(),n=a(0,l.startTime+l.duration-t),s=n/l.duration||0,r=1-s,i=0,d=l.tweens.length;i<d;i++){ l.tweens[i].run(r); }return (o.notifyWith(e,[l,r,n]),1>r&&d)?n:(d||o.notifyWith(e,[l,1,0]),o.resolveWith(e,[l]),!1)},l=o.promise({elem:e,props:ke.extend({},t),opts:ke.extend(!0,{specialEasing:{},easing:ke.easing._default},n),originalProperties:t,originalOptions:n,startTime:Ct||X(),duration:n.duration,tweens:[],createTween:function(t,n){var a=ke.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(a),a},stop:function(t){var n=0,a=t?l.tweens.length:0;if(c){ return this; }for(c=!0;n<a;n++){ l.tweens[n].run(1); }return t?(o.notifyWith(e,[l,1,0]),o.resolveWith(e,[l,t])):o.rejectWith(e,[l,t]),this}}),d=l.props,p,c;for(K(d,l.opts.specialEasing);s<r;s++){ if(p=J.prefilters[s].call(l,e,d,l.opts),p){ return Le(p.stop)&&(ke._queueHooks(l.elem,l.opts.queue).stop=p.stop.bind(p)),p; } }return ke.map(d,V,l),Le(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ke.fx.timer(ke.extend(i,{elem:e,anim:l,queue:l.opts.queue})),l}function Z(e){var t=e.match(He)||[];return t.join(" ")}function ee(e){return e.getAttribute&&e.getAttribute("class")||""}function te(e){return Array.isArray(e)?e:"string"==typeof e?e.match(He)||[]:[]}function ne(e,t,n,a){if(Array.isArray(t)){ ke.each(t,function(t,s){n||It.test(e)?a(e,s):ne(e+"["+("object"==typeof s&&null!=s?t:"")+"]",s,n,a);}); }else if(!n&&"object"===o(t)){ for(var s in t){ ne(e+"["+s+"]",t[s],n,a); } }else { a(e,t); }}function ae(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var a=0,s=t.toLowerCase().match(He)||[],r;if(Le(n)){ for(;r=s[a++];){ "+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n); } }}}function se(e,t,n,a){function s(i){var l;return r[i]=!0,ke.each(e[i]||[],function(e,i){var d=i(t,n,a);return "string"!=typeof d||o||r[d]?o?!(l=d):void 0:(t.dataTypes.unshift(d),s(d),!1)}),l}var r={},o=e===Vt;return s(t.dataTypes[0])||!r["*"]&&s("*")}function re(e,t){var n=ke.ajaxSettings.flatOptions||{},a,s;for(a in t){ void 0!==t[a]&&((n[a]?e:s||(s={}))[a]=t[a]); }return s&&ke.extend(!0,e,s),e}function oe(e,t,n){for(var a=e.contents,s=e.dataTypes,r,o,i,l;"*"===s[0];){ s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type")); }if(r){ for(o in a){ if(a[o]&&a[o].test(r)){s.unshift(o);break} } }if(s[0]in n){ i=s[0]; }else{for(o in n){if(!s[0]||e.converters[o+" "+s[0]]){i=o;break}l||(l=o);}i=i||l;}return i?(i!==s[0]&&s.unshift(i),n[i]):void 0}function ie(e,t,n,a){var s={},r=e.dataTypes.slice(),o,i,l,d,p;if(r[1]){ for(l in e.converters){ s[l.toLowerCase()]=e.converters[l]; } }for(i=r.shift();i;){ if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!p&&a&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),p=i,i=r.shift(),i){ if("*"===i){ i=p; }else if("*"!==p&&p!=i){if(l=s[p+" "+i]||s["* "+i],!l){ for(o in s){ if(d=o.split(" "),d[1]===i&&(l=s[p+" "+d[0]]||s["* "+d[0]],l)){!0===l?l=s[o]:!0!==s[o]&&(i=d[0],r.unshift(d[1]));break} } }if(!0!==l){ if(l&&e.throws){ t=l(t); }else { try{t=l(t);}catch(t){return {state:"parsererror",error:l?t:"No conversion from "+p+" to "+i}} } }} } }return {state:"success",data:t}}var de=[],pe=e.document,ce=Object.getPrototypeOf,ue=de.slice,me=de.concat,he=de.push,fe=de.indexOf,ge={},ye=ge.toString,be=ge.hasOwnProperty,xe=be.toString,we=xe.call(Object),ve={},Le=function(e){return "function"==typeof e&&"number"!=typeof e.nodeType},qe=function(e){return null!=e&&e===e.window},Te={type:!0,src:!0,noModule:!0},Ce="3.3.1",ke=function(e,t){return new ke.fn.init(e,t)},je=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;ke.fn=ke.prototype={jquery:Ce,constructor:ke,length:0,toArray:function(){return ue.call(this)},get:function(e){return null==e?ue.call(this):0>e?this[e+this.length]:this[e]},pushStack:function(e){var t=ke.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ke.each(this,e)},map:function(e){return this.pushStack(ke.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:he,sort:de.sort,splice:de.splice},ke.extend=ke.fn.extend=function(){
    var arguments$1 = arguments;
    var e=arguments[0]||{},t=1,n=arguments.length,a=!1,s,r,o,l,d,p;for("boolean"==typeof e&&(a=e,e=arguments[t]||{},t++),"object"==typeof e||Le(e)||(e={}),t===n&&(e=this,t--);t<n;t++){ if(null!=(s=arguments$1[t])){ for(r in s){ (o=e[r],l=s[r],e!==l)&&(a&&l&&(ke.isPlainObject(l)||(d=Array.isArray(l)))?(d?(d=!1,p=o&&Array.isArray(o)?o:[]):p=o&&ke.isPlainObject(o)?o:{},e[r]=ke.extend(a,p,l)):void 0!==l&&(e[r]=l)); } } }return e},ke.extend({expando:"jQuery"+(Ce+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return !!(e&&"[object Object]"===ye.call(e))&&((t=ce(e),!!!t)||(n=be.call(t,"constructor")&&t.constructor,"function"==typeof n&&xe.call(n)===we))},isEmptyObject:function(e){for(var t in e){ return !1; }return !0},globalEval:function(e){r(e);},each:function(e,t){var n=0,a;if(l(e)){ for(a=e.length;n<a&&!1!==t.call(e[n],n,e[n]);n++){ } }else { for(n in e){ if(!1===t.call(e[n],n,e[n])){ break; } } }return e},trim:function(e){return null==e?"":(e+"").replace(je,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(l(Object(e))?ke.merge(n,"string"==typeof e?[e]:e):he.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:fe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,a=0,s=e.length;a<n;a++){ e[s++]=t[a]; }return e.length=s,e},grep:function(e,t,n){for(var a=[],s=0,r=e.length,o;s<r;s++){ o=!t(e[s],s),o!==!n&&a.push(e[s]); }return a},map:function(e,t,n){var a=0,s=[],r,o;if(l(e)){ for(r=e.length;a<r;a++){ o=t(e[a],a,n),null!=o&&s.push(o); } }else { for(a in e){ o=t(e[a],a,n),null!=o&&s.push(o); } }return me.apply([],s)},guid:1,support:ve}),"function"==typeof Symbol&&(ke.fn[Symbol.iterator]=de[Symbol.iterator]),ke.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol"],function(e,t){ge["[object "+t+"]"]=t.toLowerCase();});var Oe=function(e){function t(e,t,n,a){var s=t&&t.ownerDocument,r=t?t.nodeType:9,o,l,d,p,c,u,h;if(n=n||[],"string"!=typeof e||!e||1!==r&&9!==r&&11!==r){ return n; }if(!a&&((t?t.ownerDocument||t:T)!==fe&&he(t),t=t||fe,ye)){if(11!==r&&(c=V.exec(e))){ if(!(o=c[1])){if(c[2]){ return _.apply(n,t.getElementsByTagName(e)),n; }if((o=c[3])&&se.getElementsByClassName&&t.getElementsByClassName){ return _.apply(n,t.getElementsByClassName(o)),n }}else if(9===r){if(!(d=t.getElementById(o))){ return n; }if(d.id===o){ return n.push(d),n }}else if(s&&(d=s.getElementById(o))&&ve(t,d)&&d.id===o){ return n.push(d),n; } }if(se.qsa&&!S[e+" "]&&(!be||!be.test(e))){if(1!==r){ s=t,h=e; }else if("object"!==t.nodeName.toLowerCase()){for((p=t.getAttribute("id"))?p=p.replace(Z,ee):t.setAttribute("id",p=q),u=le(e),l=u.length;l--;){ u[l]="#"+p+" "+f(u[l]); }h=u.join(","),s=Y.test(e)&&m(t.parentNode)||t;}if(h){ try{return _.apply(n,s.querySelectorAll(h)),n}catch(e){}finally{p===q&&t.removeAttribute("id");} }}}return pe(e.replace(P,"$1"),t,n,a)}function a(){function e(n,a){return t.push(n+" ")>re.cacheLength&&delete e[t.shift()],e[n+" "]=a}var t=[];return e}function s(e){return e[q]=!0,e}function r(e){var t=fe.createElement("fieldset");try{return !!e(t)}catch(t){return !1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null;}}function o(e,t){for(var n=e.split("|"),a=n.length;a--;){ re.attrHandle[n[a]]=t; }}function l(e,t){var n=t&&e,a=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(a){ return a; }if(n){ for(;n=n.nextSibling;){ if(n===t){ return -1; } } }return e?1:-1}function d(e){return function(t){var n=t.nodeName.toLowerCase();return "input"===n&&t.type===e}}function p(e){return function(t){var n=t.nodeName.toLowerCase();return ("input"===n||"button"===n)&&t.type===e}}function c(e){return function(t){return "form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ne(t)===e:t.disabled===e:!!("label"in t)&&t.disabled===e}}function u(e){return s(function(t){return t=+t,s(function(n,a){for(var s=e([],n.length,t),r=s.length,o;r--;){ n[o=s[r]]&&(n[o]=!(a[o]=n[o])); }})})}function m(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function h(){}function f(e){for(var t=0,n=e.length,a="";t<n;t++){ a+=e[t].value; }return a}function g(e,t,n){var a=t.dir,s=t.next,r=s||a,o=n&&"parentNode"===r,i=k++;return t.first?function(t,n,s){for(;t=t[a];){ if(1===t.nodeType||o){ return e(t,n,s); } }return !1}:function(t,n,l){var d=[C,i],p,c,u;if(l){for(;t=t[a];){ if((1===t.nodeType||o)&&e(t,n,l)){ return !0; } }}else { for(;t=t[a];){ if(1===t.nodeType||o){ if(u=t[q]||(t[q]={}),c=u[t.uniqueID]||(u[t.uniqueID]={}),s&&s===t.nodeName.toLowerCase()){ t=t[a]||t; }else{if((p=c[r])&&p[0]===C&&p[1]===i){ return d[2]=p[2]; }if(c[r]=d,d[2]=e(t,n,l)){ return !0 }} } } }return !1}}function y(e){return 1<e.length?function(t,n,a){for(var s=e.length;s--;){ if(!e[s](t,n,a)){ return !1; } }return !0}:e[0]}function b(e,n,a){for(var s=0,r=n.length;s<r;s++){ t(e,n[s],a); }return a}function x(e,t,n,a,s){for(var r=[],o=0,l=e.length,d;o<l;o++){ (d=e[o])&&(!n||n(d,a,s))&&(r.push(d),null!=t&&t.push(o)); }return r}function w(e,t,n,a,r,o){return a&&!a[q]&&(a=w(a)),r&&!r[q]&&(r=w(r,o)),s(function(s,o,l,d){var p=[],c=[],u=o.length,m=s||b(t||"*",l.nodeType?[l]:l,[]),h=e&&(s||!t)?x(m,p,e,l,d):m,f=n?r||(s?e:u||a)?[]:o:h,g,y,w;if(n&&n(h,f,l,d),a){ for(g=x(f,c),a(g,[],l,d),y=g.length;y--;){ (w=g[y])&&(f[c[y]]=!(h[c[y]]=w)); } }if(!s){ f=x(f===o?f.splice(u,f.length):f),r?r(null,o,f,d):_.apply(o,f); }else if(r||e){if(r){for(g=[],y=f.length;y--;){ (w=f[y])&&g.push(h[y]=w); }r(null,f=[],g,d);}for(y=f.length;y--;){ (w=f[y])&&-1<(g=r?I(s,w):p[y])&&(s[g]=!(o[g]=w)); }}})}function v(e){for(var t=e.length,n=re.relative[e[0].type],a=n||re.relative[" "],s=n?1:0,r=g(function(e){return e===d},a,!0),o=g(function(e){return -1<I(d,e)},a,!0),l=[function(e,t,a){var s=!n&&(a||t!==ce)||((d=t).nodeType?r(e,t,a):o(e,t,a));return d=null,s}],d,p,c;s<t;s++){ if(p=re.relative[e[s].type]){ l=[g(y(l),p)]; }else{if(p=re.filter[e[s].type].apply(null,e[s].matches),p[q]){for(c=++s;c<t&&!re.relative[e[c].type];c++){ }return w(1<s&&y(l),1<s&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(P,"$1"),p,s<c&&v(e.slice(s,c)),c<t&&v(e=e.slice(c)),c<t&&f(e))}l.push(p);} }return y(l)}function L(e,n){var a=0<n.length,r=0<e.length,o=function(s,o,l,d,p){var c=0,u="0",m=s&&[],h=[],f=ce,g=s||r&&re.find.TAG("*",p),y=C+=null==f?1:Math.random()||.1,b=g.length,w,v,L;for(p&&(ce=o===fe||o||p);u!==b&&null!=(w=g[u]);u++){if(r&&w){for(v=0,o||w.ownerDocument===fe||(he(w),l=!ye);L=e[v++];){ if(L(w,o||fe,l)){d.push(w);break} }p&&(C=y);}a&&((w=!L&&w)&&c--,s&&m.push(w));}if(c+=u,a&&u!==c){for(v=0;L=n[v++];){ L(m,h,o,l); }if(s){if(0<c){ for(;u--;){ m[u]||h[u]||(h[u]=A.call(d)); } }h=x(h);}_.apply(d,h),p&&!s&&0<h.length&&1<c+n.length&&t.uniqueSort(d);}return p&&(C=y,ce=f),m};return a?s(o):o}var q="sizzle"+1*new Date,T=e.document,C=0,k=0,j=a(),O=a(),S=a(),D=function(e,t){return e===t&&(me=!0),0},R={}.hasOwnProperty,E=[],A=E.pop,N=E.push,_=E.push,Q=E.slice,I=function(e,t){for(var n=0,a=e.length;n<a;n++){ if(e[n]===t){ return n; } }return -1},H=/[\x20\t\r\n\f]+/g,P=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,B=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,M=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,F=/=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,z=/:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,W=/^(?:\\.|[\w-]|[^\0-\xa0])+$/,$={ID:/^#((?:\\.|[\w-]|[^\0-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,TAG:/^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,PSEUDO:/^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},U=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,V=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Y=/[+~]/,K=/\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,J=function(e,t,a){var s="0x"+t-65536;return s!=s||a?t:0>s?n(s+65536):n(55296|s>>10,56320|1023&s)},Z=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ee=function(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},te=function(){he();},ne=g(function(e){return !0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"}),ae,se,re,oe,ie,le,de,pe,ce,ue,me,he,fe,ge,ye,be,xe,we,ve;try{_.apply(E=Q.call(T.childNodes),T.childNodes),E[T.childNodes.length].nodeType;}catch(t){_={apply:E.length?function(e,t){N.apply(e,Q.call(t));}:function(e,t){for(var n=e.length,a=0;e[n++]=t[a++];){ }e.length=n-1;}};}for(ae in se=t.support={},ie=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return !!t&&"HTML"!==t.nodeName},he=t.setDocument=function(e){var t=e?e.ownerDocument||e:T,n,a;return t!==fe&&9===t.nodeType&&t.documentElement?(fe=t,ge=fe.documentElement,ye=!ie(fe),T!==fe&&(a=fe.defaultView)&&a.top!==a&&(a.addEventListener?a.addEventListener("unload",te,!1):a.attachEvent&&a.attachEvent("onunload",te)),se.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),se.getElementsByTagName=r(function(e){return e.appendChild(fe.createComment("")),!e.getElementsByTagName("*").length}),se.getElementsByClassName=G.test(fe.getElementsByClassName),se.getById=r(function(e){return ge.appendChild(e).id=q,!fe.getElementsByName||!fe.getElementsByName(q).length}),se.getById?(re.filter.ID=function(e){var t=e.replace(K,J);return function(e){return e.getAttribute("id")===t}},re.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&ye){var n=t.getElementById(e);return n?[n]:[]}}):(re.filter.ID=function(e){var t=e.replace(K,J);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},re.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&ye){var n=t.getElementById(e),a,s,r;if(n){if(a=n.getAttributeNode("id"),a&&a.value===e){ return [n]; }for(r=t.getElementsByName(e),s=0;n=r[s++];){ if(a=n.getAttributeNode("id"),a&&a.value===e){ return [n] } }}return []}}),re.find.TAG=se.getElementsByTagName?function(e,t){return "undefined"==typeof t.getElementsByTagName?se.qsa?t.querySelectorAll(e):void 0:t.getElementsByTagName(e)}:function(e,t){var n=[],a=0,s=t.getElementsByTagName(e),r;if("*"===e){for(;r=s[a++];){ 1===r.nodeType&&n.push(r); }return n}return s},re.find.CLASS=se.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&ye){ return t.getElementsByClassName(e) }},xe=[],be=[],(se.qsa=G.test(fe.querySelectorAll))&&(r(function(e){ge.appendChild(e).innerHTML="<a id='"+q+"'></a><select id='"+q+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&be.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||be.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"),e.querySelectorAll("[id~="+q+"-]").length||be.push("~="),e.querySelectorAll(":checked").length||be.push(":checked"),e.querySelectorAll("a#"+q+"+*").length||be.push(".#.+[+~]");}),r(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=fe.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&be.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&be.push(":enabled",":disabled"),ge.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&be.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),be.push(",.*:");})),(se.matchesSelector=G.test(we=ge.matches||ge.webkitMatchesSelector||ge.mozMatchesSelector||ge.oMatchesSelector||ge.msMatchesSelector))&&r(function(e){se.disconnectedMatch=we.call(e,"*"),we.call(e,"[s!='']:x"),xe.push("!=",":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");}),be=be.length&&new RegExp(be.join("|")),xe=xe.length&&new RegExp(xe.join("|")),n=G.test(ge.compareDocumentPosition),ve=n||G.test(ge.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,a=t&&t.parentNode;return e===a||!!(a&&1===a.nodeType&&(n.contains?n.contains(a):e.compareDocumentPosition&&16&e.compareDocumentPosition(a)))}:function(e,t){if(t){ for(;t=t.parentNode;){ if(t===e){ return !0; } } }return !1},D=n?function(e,t){if(e===t){ return me=!0,0; }var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!se.sortDetached&&t.compareDocumentPosition(e)===n?e===fe||e.ownerDocument===T&&ve(T,e)?-1:t===fe||t.ownerDocument===T&&ve(T,t)?1:ue?I(ue,e)-I(ue,t):0:4&n?-1:1)}:function(e,t){if(e===t){ return me=!0,0; }var n=0,a=e.parentNode,s=t.parentNode,r=[e],o=[t],d;if(!a||!s){ return e===fe?-1:t===fe?1:a?-1:s?1:ue?I(ue,e)-I(ue,t):0; }if(a===s){ return l(e,t); }for(d=e;d=d.parentNode;){ r.unshift(d); }for(d=t;d=d.parentNode;){ o.unshift(d); }for(;r[n]===o[n];){ n++; }return n?l(r[n],o[n]):r[n]===T?-1:o[n]===T?1:0},fe):fe},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==fe&&he(e),n=n.replace(F,"='$1']"),se.matchesSelector&&ye&&!S[n+" "]&&(!xe||!xe.test(n))&&(!be||!be.test(n))){ try{var a=we.call(e,n);if(a||se.disconnectedMatch||e.document&&11!==e.document.nodeType){ return a }}catch(t){} }return 0<t(n,fe,null,[e]).length},t.contains=function(e,t){return (e.ownerDocument||e)!==fe&&he(e),ve(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==fe&&he(e);var n=re.attrHandle[t.toLowerCase()],a=n&&R.call(re.attrHandle,t.toLowerCase())?n(e,t,!ye):void 0;return void 0===a?se.attributes||!ye?e.getAttribute(t):(a=e.getAttributeNode(t))&&a.specified?a.value:null:a},t.escape=function(e){return (e+"").replace(Z,ee)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t=[],n=0,a=0,s;if(me=!se.detectDuplicates,ue=!se.sortStable&&e.slice(0),e.sort(D),me){for(;s=e[a++];){ s===e[a]&&(n=t.push(a)); }for(;n--;){ e.splice(t[n],1); }}return ue=null,e},oe=t.getText=function(e){var t="",n=0,a=e.nodeType,s;if(!a){ for(;s=e[n++];){ t+=oe(s); } }else if(1===a||9===a||11===a){if("string"==typeof e.textContent){ return e.textContent; }for(e=e.firstChild;e;e=e.nextSibling){ t+=oe(e); }}else if(3===a||4===a){ return e.nodeValue; }return t},re=t.selectors={cacheLength:50,createPseudo:s,match:$,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(K,J),e[3]=(e[3]||e[4]||e[5]||"").replace(K,J),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(!e[3]&&t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t=!e[6]&&e[2],n;return $.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":t&&z.test(t)&&(n=le(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(e[0]=e[0].slice(0,n),e[2]=t.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(K,J).toLowerCase();return "*"===e?function(){return !0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=j[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"([\\x20\\t\\r\\n\\f]|$)"))&&j(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,a){return function(s){var r=t.attr(s,e);return null==r?"!="===n:!n||(r+="","="===n?r===a:"!="===n?r!==a:"^="===n?a&&0===r.indexOf(a):"*="===n?a&&-1<r.indexOf(a):"$="===n?a&&r.slice(-a.length)===a:"~="===n?-1<(" "+r.replace(H," ")+" ").indexOf(a):"|="==n&&(r===a||r.slice(0,a.length+1)===a+"-"))}},CHILD:function(e,t,n,a,s){var r="nth"!==e.slice(0,3),o="last"!==e.slice(-4),i="of-type"===t;return 1===a&&0===s?function(e){return !!e.parentNode}:function(t,n,l){var d=r==o?"previousSibling":"nextSibling",p=t.parentNode,c=i&&t.nodeName.toLowerCase(),u=!l&&!i,m=!1,h,f,g,y,b,x;if(p){if(r){for(;d;){for(y=t;y=y[d];){ if(i?y.nodeName.toLowerCase()===c:1===y.nodeType){ return !1; } }x=d="only"===e&&!x&&"nextSibling";}return !0}if(x=[o?p.firstChild:p.lastChild],o&&u){for(y=p,g=y[q]||(y[q]={}),f=g[y.uniqueID]||(g[y.uniqueID]={}),h=f[e]||[],b=h[0]===C&&h[1],m=b&&h[2],y=b&&p.childNodes[b];y=++b&&y&&y[d]||(m=b=0)||x.pop();){ if(1===y.nodeType&&++m&&y===t){f[e]=[C,b,m];break} }}else if(u&&(y=t,g=y[q]||(y[q]={}),f=g[y.uniqueID]||(g[y.uniqueID]={}),h=f[e]||[],b=h[0]===C&&h[1],m=b),!1===m){ for(;(y=++b&&y&&y[d]||(m=b=0)||x.pop())&&!((i?y.nodeName.toLowerCase()===c:1===y.nodeType)&&++m&&(u&&(g=y[q]||(y[q]={}),f=g[y.uniqueID]||(g[y.uniqueID]={}),f[e]=[C,m]),y===t));){ } }return m-=s,m===a||0==m%a&&0<=m/a}}},PSEUDO:function(e,n){var a=re.pseudos[e]||re.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e),r;return a[q]?a(n):1<a.length?(r=[e,e,"",n],re.setFilters.hasOwnProperty(e.toLowerCase())?s(function(e,t){for(var s=a(e,n),r=s.length,o;r--;){ o=I(e,s[r]),e[o]=!(t[o]=s[r]); }}):function(e){return a(e,0,r)}):a}},pseudos:{not:s(function(e){var t=[],n=[],a=de(e.replace(P,"$1"));return a[q]?s(function(e,t,n,s){for(var r=a(e,null,s,[]),o=e.length,l;o--;){ (l=r[o])&&(e[o]=!(t[o]=l)); }}):function(e,s,r){return t[0]=e,a(t,null,r,n),t[0]=null,!n.pop()}}),has:s(function(e){return function(n){return 0<t(e,n).length}}),contains:s(function(e){return e=e.replace(K,J),function(t){return -1<(t.textContent||t.innerText||oe(t)).indexOf(e)}}),lang:s(function(e){return W.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(K,J).toLowerCase(),function(t){var n;do { if(n=ye?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){ return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-"); } }while((t=t.parentNode)&&1===t.nodeType);return !1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===ge},focus:function(e){return e===fe.activeElement&&(!fe.hasFocus||fe.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:c(!1),disabled:c(!0),checked:function(e){var t=e.nodeName.toLowerCase();return "input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){ if(6>e.nodeType){ return !1; } }return !0},parent:function(e){return !re.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return U.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return "input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return "input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return [0]}),last:u(function(e,t){return [t-1]}),eq:u(function(e,t,n){return [0>n?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2){ e.push(n); }return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2){ e.push(n); }return e}),lt:u(function(e,t,n){for(var a=0>n?n+t:n;0<=--a;){ e.push(a); }return e}),gt:u(function(e,t,n){for(var a=0>n?n+t:n;++a<t;){ e.push(a); }return e})}},re.pseudos.nth=re.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){ re.pseudos[ae]=d(ae); }for(ae in{submit:!0,reset:!0}){ re.pseudos[ae]=p(ae); }return h.prototype=re.filters=re.pseudos,re.setFilters=new h,le=t.tokenize=function(e,n){var a=O[e+" "],s,r,o,i,l,d,p;if(a){ return n?0:a.slice(0); }for(l=e,d=[],p=re.preFilter;l;){for(i in(!s||(r=B.exec(l)))&&(r&&(l=l.slice(r[0].length)||l),d.push(o=[])),s=!1,(r=M.exec(l))&&(s=r.shift(),o.push({value:s,type:r[0].replace(P," ")}),l=l.slice(s.length)),re.filter){ (r=$[i].exec(l))&&(!p[i]||(r=p[i](r)))&&(s=r.shift(),o.push({value:s,type:i,matches:r}),l=l.slice(s.length)); }if(!s){ break }}return n?l.length:l?t.error(e):O(e,d).slice(0)},de=t.compile=function(e,t){var n=[],a=[],s=S[e+" "],r;if(!s){for(t||(t=le(e)),r=t.length;r--;){ s=v(t[r]),s[q]?n.push(s):a.push(s); }s=S(e,L(a,n)),s.selector=e;}return s},pe=t.select=function(e,t,n,a){var s="function"==typeof e&&e,r=!a&&le(e=s.selector||e),o,l,d,p,c;if(n=n||[],1===r.length){if(l=r[0]=r[0].slice(0),2<l.length&&"ID"===(d=l[0]).type&&9===t.nodeType&&ye&&re.relative[l[1].type]){if(t=(re.find.ID(d.matches[0].replace(K,J),t)||[])[0],!t){ return n; }s&&(t=t.parentNode),e=e.slice(l.shift().value.length);}for(o=$.needsContext.test(e)?0:l.length;o--&&(d=l[o],!re.relative[p=d.type]);){ if((c=re.find[p])&&(a=c(d.matches[0].replace(K,J),Y.test(l[0].type)&&m(t.parentNode)||t))){if(l.splice(o,1),e=a.length&&f(l),!e){ return _.apply(n,a),n; }break} }}return (s||de(e,r))(a,t,!ye,n,!t||Y.test(e)&&m(t.parentNode)||t),n},se.sortStable=q.split("").sort(D).join("")===q,se.detectDuplicates=!!me,he(),se.sortDetached=r(function(e){return 1&e.compareDocumentPosition(fe.createElement("fieldset"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n){ return e.getAttribute(t,"type"===t.toLowerCase()?1:2) }}),se.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase()){ return e.defaultValue }}),r(function(e){return null==e.getAttribute("disabled")})||o("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",function(e,t,n){var a;if(!n){ return !0===e[t]?t.toLowerCase():(a=e.getAttributeNode(t))&&a.specified?a.value:null }}),t}(e);ke.find=Oe,ke.expr=Oe.selectors,ke.expr[":"]=ke.expr.pseudos,ke.uniqueSort=ke.unique=Oe.uniqueSort,ke.text=Oe.getText,ke.isXMLDoc=Oe.isXML,ke.contains=Oe.contains,ke.escapeSelector=Oe.escape;var Se=function(e,t,n){for(var a=[];(e=e[t])&&9!==e.nodeType;){ if(1===e.nodeType){if(void 0!==n&&ke(e).is(n)){ break; }a.push(e);} }return a},De=function(e,t){for(var a=[];e;e=e.nextSibling){ 1===e.nodeType&&e!==t&&a.push(e); }return a},Re=ke.expr.match.needsContext,Ee=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;ke.filter=function(e,t,n){var a=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===a.nodeType?ke.find.matchesSelector(a,e)?[a]:[]:ke.find.matches(e,ke.grep(t,function(e){return 1===e.nodeType}))},ke.fn.extend({find:function(e){var t=this.length,n=this,a,s;if("string"!=typeof e){ return this.pushStack(ke(e).filter(function(){for(a=0;a<t;a++){ if(ke.contains(n[a],this)){ return !0 } }})); }for(s=this.pushStack([]),a=0;a<t;a++){ ke.find(e,n[a],s); }return 1<t?ke.uniqueSort(s):s},filter:function(e){return this.pushStack(p(this,e||[],!1))},not:function(e){return this.pushStack(p(this,e||[],!0))},is:function(e){return !!p(this,"string"==typeof e&&Re.test(e)?ke(e):e||[],!1).length}});var Ae=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ne=ke.fn.init=function(e,t,n){var a,s;if(!e){ return this; }if(n=n||_e,"string"==typeof e){if(a="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Ae.exec(e),a&&(a[1]||!t)){if(a[1]){if(t=t instanceof ke?t[0]:t,ke.merge(this,ke.parseHTML(a[1],t&&t.nodeType?t.ownerDocument||t:pe,!0)),Ee.test(a[1])&&ke.isPlainObject(t)){ for(a in t){ Le(this[a])?this[a](t[a]):this.attr(a,t[a]); } }return this}return s=pe.getElementById(a[2]),s&&(this[0]=s,this.length=1),this}return !t||t.jquery?(t||n).find(e):this.constructor(t).find(e)}return e.nodeType?(this[0]=e,this.length=1,this):Le(e)?void 0===n.ready?e(ke):n.ready(e):ke.makeArray(e,this)},_e;Ne.prototype=ke.fn,_e=ke(pe);var Qe=/^(?:parents|prev(?:Until|All))/,Ie={children:!0,contents:!0,next:!0,prev:!0};ke.fn.extend({has:function(e){var t=ke(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++){ if(ke.contains(this,t[e])){ return !0 } }})},closest:function(e,t){var n=0,a=this.length,s=[],r="string"!=typeof e&&ke(e),o;if(!Re.test(e)){ for(;n<a;n++){ for(o=this[n];o&&o!==t;o=o.parentNode){ if(11>o.nodeType&&(r?-1<r.index(o):1===o.nodeType&&ke.find.matchesSelector(o,e))){s.push(o);break} } } }return this.pushStack(1<s.length?ke.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?fe.call(ke(e),this[0]):fe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ke.uniqueSort(ke.merge(this.get(),ke(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ke.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Se(e,"parentNode")},parentsUntil:function(e,t,n){return Se(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return Se(e,"nextSibling")},prevAll:function(e){return Se(e,"previousSibling")},nextUntil:function(e,t,n){return Se(e,"nextSibling",n)},prevUntil:function(e,t,n){return Se(e,"previousSibling",n)},siblings:function(e){return De((e.parentNode||{}).firstChild,e)},children:function(e){return De(e.firstChild)},contents:function(e){return d(e,"iframe")?e.contentDocument:(d(e,"template")&&(e=e.content||e),ke.merge([],e.childNodes))}},function(e,t){ke.fn[e]=function(n,a){var s=ke.map(this,t,n);return "Until"!==e.slice(-5)&&(a=n),a&&"string"==typeof a&&(s=ke.filter(a,s)),1<this.length&&(!Ie[e]&&ke.uniqueSort(s),Qe.test(e)&&s.reverse()),this.pushStack(s)};});var He=/[^\x20\t\r\n\f]+/g;ke.Callbacks=function(e){e="string"==typeof e?u(e):ke.extend({},e);var t=[],n=[],a=-1,s=function(){for(p=p||e.once,d=i=!0;n.length;a=-1){ for(l=n.shift();++a<t.length;){ !1===t[a].apply(l[0],l[1])&&e.stopOnFalse&&(a=t.length,l=!1); } }e.memory||(l=!1),i=!1,p&&(l?t=[]:t="");},r={add:function(){return t&&(l&&!i&&(a=t.length-1,n.push(l)),function n(a){ke.each(a,function(a,s){Le(s)?(!e.unique||!r.has(s))&&t.push(s):s&&s.length&&"string"!==o(s)&&n(s);});}(arguments),l&&!i&&s()),this},remove:function(){return ke.each(arguments,function(e,n){for(var s;-1<(s=ke.inArray(n,t,s));){ t.splice(s,1),s<=a&&a--; }}),this},has:function(e){return e?-1<ke.inArray(e,t):0<t.length},empty:function(){return t&&(t=[]),this},disable:function(){return p=n=[],t=l="",this},disabled:function(){return !t},lock:function(){return p=n=[],l||i||(t=l=""),this},locked:function(){return !!p},fireWith:function(e,t){return p||(t=t||[],t=[e,t.slice?t.slice():t],n.push(t),!i&&s()),this},fire:function(){return r.fireWith(this,arguments),this},fired:function(){return !!d}},i,l,d,p;return r},ke.extend({Deferred:function(t){var n=[["notify","progress",ke.Callbacks("memory"),ke.Callbacks("memory"),2],["resolve","done",ke.Callbacks("once memory"),ke.Callbacks("once memory"),0,"resolved"],["reject","fail",ke.Callbacks("once memory"),ke.Callbacks("once memory"),1,"rejected"]],a="pending",s={state:function(){return a},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},pipe:function(){var e=arguments;return ke.Deferred(function(t){ke.each(n,function(n,a){var s=Le(e[a[4]])&&e[a[4]];r[a[1]](function(){var e=s&&s.apply(this,arguments);e&&Le(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[a[0]+"With"](this,s?[e]:arguments);});}),e=null;}).promise()},then:function(t,a,s){function r(t,n,a,s){return function(){var i=this,l=arguments,d=function(){var e,d;if(!(t<o)){if(e=a.apply(i,l),e===n.promise()){ throw new TypeError("Thenable self-resolution"); }d=e&&("object"==typeof e||"function"==typeof e)&&e.then,Le(d)?s?d.call(e,r(o,n,m,s),r(o,n,h,s)):(o++,d.call(e,r(o,n,m,s),r(o,n,h,s),r(o,n,m,n.notifyWith))):(a!==m&&(i=void 0,l=[e]),(s||n.resolveWith)(i,l));}},p=s?d:function(){try{d();}catch(s){ke.Deferred.exceptionHook&&ke.Deferred.exceptionHook(s,p.stackTrace),t+1>=o&&(a!==h&&(i=void 0,l=[s]),n.rejectWith(i,l));}};t?p():(ke.Deferred.getStackHook&&(p.stackTrace=ke.Deferred.getStackHook()),e.setTimeout(p));}}var o=0;return ke.Deferred(function(e){n[0][3].add(r(0,e,Le(s)?s:m,e.notifyWith)),n[1][3].add(r(0,e,Le(t)?t:m)),n[2][3].add(r(0,e,Le(a)?a:h));}).promise()},promise:function(e){return null==e?s:ke.extend(e,s)}},r={};return ke.each(n,function(e,t){var o=t[2],i=t[5];s[t[1]]=o.add,i&&o.add(function(){a=i;},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),o.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},r[t[0]+"With"]=o.fireWith;}),s.promise(r),t&&t.call(r,r),r},when:function(e){var t=arguments.length,n=t,a=Array(n),s=ue.call(arguments),r=ke.Deferred(),o=function(e){return function(n){a[e]=this,s[e]=1<arguments.length?ue.call(arguments):n,--t||r.resolveWith(a,s);}};if(1>=t&&(f(e,r.done(o(n)).resolve,r.reject,!t),"pending"===r.state()||Le(s[n]&&s[n].then))){ return r.then(); }for(;n--;){ f(s[n],o(n),r.reject); }return r.promise()}});var Pe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ke.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Pe.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n);},ke.readyException=function(t){e.setTimeout(function(){throw t});};var Be=ke.Deferred();ke.fn.ready=function(e){return Be.then(e).catch(function(e){ke.readyException(e);}),this},ke.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?! --ke.readyWait:!ke.isReady)&&(ke.isReady=!0,!0!==e&&0<--ke.readyWait||Be.resolveWith(pe,[ke]));}}),ke.ready.then=Be.then,"complete"!==pe.readyState&&("loading"===pe.readyState||pe.documentElement.doScroll)?(pe.addEventListener("DOMContentLoaded",g),e.addEventListener("load",g)):e.setTimeout(ke.ready);var Me=function(e,t,n,a,s,r,l){var d=0,p=e.length,c=null==n;if("object"===o(n)){ for(d in s=!0,n){ Me(e,t,d,n[d],!0,r,l); } }else if(void 0!==a&&(s=!0,Le(a)||(l=!0),c&&(l?(t.call(e,a),t=null):(c=t,t=function(e,t,n){return c.call(ke(e),n)})),t)){ for(;d<p;d++){ t(e[d],n,l?a:a.call(e[d],d,t(e[d],n))); } }return s?e:c?t.call(e):p?t(e[0],n):r},Fe=/^-ms-/,ze=/-([a-z])/g,We=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};x.uid=1,x.prototype={cache:function(e){var t=e[this.expando];return t||(t={},We(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var a=this.cache(e),s;if("string"==typeof t){ a[b(t)]=n; }else { for(s in t){ a[b(s)]=t[s]; } }return a},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][b(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0===n?t:n)},remove:function(e,t){var n=e[this.expando],a;if(void 0!==n){if(void 0!==t){ for(Array.isArray(t)?t=t.map(b):(t=b(t),t=(t in n)?[t]:t.match(He)||[]),a=t.length;a--;){ delete n[t[a]]; } }(void 0===t||ke.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ke.isEmptyObject(t)}};var $e=new x,Ue=new x,Xe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ge=/[A-Z]/g;ke.extend({hasData:function(e){return Ue.hasData(e)||$e.hasData(e)},data:function(e,t,n){return Ue.access(e,t,n)},removeData:function(e,t){Ue.remove(e,t);},_data:function(e,t,n){return $e.access(e,t,n)},_removeData:function(e,t){$e.remove(e,t);}}),ke.fn.extend({data:function(e,t){var n=this[0],a=n&&n.attributes,s,r,o;if(void 0===e){if(this.length&&(o=Ue.get(n),1===n.nodeType&&!$e.get(n,"hasDataAttrs"))){for(s=a.length;s--;){ a[s]&&(r=a[s].name,0===r.indexOf("data-")&&(r=b(r.slice(5)),v(n,r,o[r]))); }$e.set(n,"hasDataAttrs",!0);}return o}return "object"==typeof e?this.each(function(){Ue.set(this,e);}):Me(this,function(t){var a;return n&&void 0===t?(a=Ue.get(n,e),void 0!==a)?a:(a=v(n,e),void 0===a?void 0:a):void this.each(function(){Ue.set(this,e,t);})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Ue.remove(this,e);})}}),ke.extend({queue:function(e,t,n){var a;if(e){ return t=(t||"fx")+"queue",a=$e.get(e,t),n&&(!a||Array.isArray(n)?a=$e.access(e,t,ke.makeArray(n)):a.push(n)),a||[] }},dequeue:function(e,t){t=t||"fx";var n=ke.queue(e,t),a=n.length,s=n.shift(),r=ke._queueHooks(e,t),o=function(){ke.dequeue(e,t);};"inprogress"===s&&(s=n.shift(),a--),s&&("fx"===t&&n.unshift("inprogress"),delete r.stop,s.call(e,o,r)),!a&&r&&r.empty.fire();},_queueHooks:function(e,t){var n=t+"queueHooks";return $e.get(e,n)||$e.access(e,n,{empty:ke.Callbacks("once memory").add(function(){$e.remove(e,[t+"queue",n]);})})}}),ke.fn.extend({queue:function(e,t){var n=2;return "string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ke.queue(this[0],e):void 0===t?this:this.each(function(){var n=ke.queue(this,e,t);ke._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ke.dequeue(this,e);})},dequeue:function(e){return this.each(function(){ke.dequeue(this,e);})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n=1,a=ke.Deferred(),s=this,r=this.length,o=function(){--n||a.resolveWith(s,[s]);},l;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;){ l=$e.get(s[r],e+"queueHooks"),l&&l.empty&&(n++,l.empty.add(o)); }return o(),a.promise(t)}});var Ve=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ye=new RegExp("^(?:([+-])=|)("+Ve+")([a-z%]*)$","i"),Ke=["Top","Right","Bottom","Left"],Je=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&ke.contains(e.ownerDocument,e)&&"none"===ke.css(e,"display")},Ze=function(e,t,n,a){var s={},r,o;for(o in t){ s[o]=e.style[o],e.style[o]=t[o]; }for(o in r=n.apply(e,a||[]),t){ e.style[o]=s[o]; }return r},et={};ke.fn.extend({show:function(){return T(this,!0)},hide:function(){return T(this)},toggle:function(e){return "boolean"==typeof e?e?this.show():this.hide():this.each(function(){Je(this)?ke(this).show():ke(this).hide();})}});var tt=/^(?:checkbox|radio)$/i,nt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,at=/^$|^module$|\/(?:java|ecma)script/i,st={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};st.optgroup=st.option,st.tbody=st.tfoot=st.colgroup=st.caption=st.thead,st.th=st.td;var rt=/<|&#?\w+;/;(function(){var e=pe.createDocumentFragment(),t=e.appendChild(pe.createElement("div")),n=pe.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ve.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ve.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue;})();var ot=pe.documentElement,it=/^key/,lt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,dt=/^([^.]*)(?:\.(.+)|)/;ke.event={global:{},add:function(n,a,s,r,o){var i=$e.get(n),l,d,p,c,u,e,m,h,f,g,y;if(i){ for(s.handler&&(l=s,s=l.handler,o=l.selector),o&&ke.find.matchesSelector(ot,o),s.guid||(s.guid=ke.guid++),(c=i.events)||(c=i.events={}),(d=i.handle)||(d=i.handle=function(t){return "undefined"!=typeof ke&&ke.event.triggered!==t.type?ke.event.dispatch.apply(n,arguments):void 0}),a=(a||"").match(He)||[""],u=a.length;u--;){ (p=dt.exec(a[u])||[],f=y=p[1],g=(p[2]||"").split(".").sort(),!!f)&&(m=ke.event.special[f]||{},f=(o?m.delegateType:m.bindType)||f,m=ke.event.special[f]||{},e=ke.extend({type:f,origType:y,data:r,handler:s,guid:s.guid,selector:o,needsContext:o&&ke.expr.match.needsContext.test(o),namespace:g.join(".")},l),(h=c[f])||(h=c[f]=[],h.delegateCount=0,(!m.setup||!1===m.setup.call(n,r,g,d))&&n.addEventListener&&n.addEventListener(f,d)),m.add&&(m.add.call(n,e),!e.handler.guid&&(e.handler.guid=s.guid)),o?h.splice(h.delegateCount++,0,e):h.push(e),ke.event.global[f]=!0); } }},remove:function(e,n,a,s,r){var o=$e.hasData(e)&&$e.get(e),i,l,d,p,c,u,m,h,f,g,y;if(o&&(p=o.events)){for(n=(n||"").match(He)||[""],c=n.length;c--;){if(d=dt.exec(n[c])||[],f=y=d[1],g=(d[2]||"").split(".").sort(),!f){for(f in p){ ke.event.remove(e,f+n[c],a,s,!0); }continue}for(m=ke.event.special[f]||{},f=(s?m.delegateType:m.bindType)||f,h=p[f]||[],d=d[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=i=h.length;i--;){ u=h[i],(r||y===u.origType)&&(!a||a.guid===u.guid)&&(!d||d.test(u.namespace))&&(!s||s===u.selector||"**"===s&&u.selector)&&(h.splice(i,1),u.selector&&h.delegateCount--,m.remove&&m.remove.call(e,u)); }l&&!h.length&&((!m.teardown||!1===m.teardown.call(e,g,o.handle))&&ke.removeEvent(e,f,o.handle),delete p[f]);}ke.isEmptyObject(p)&&$e.remove(e,"handle events");}},dispatch:function(e){
    var arguments$1 = arguments;
    var t=ke.event.fix(e),n=Array(arguments.length),a=($e.get(this,"events")||{})[t.type]||[],s=ke.event.special[t.type]||{},r,o,l,d,p,c;for(n[0]=t,r=1;r<arguments.length;r++){ n[r]=arguments$1[r]; }if(t.delegateTarget=this,!(s.preDispatch&&!1===s.preDispatch.call(this,t))){for(c=ke.event.handlers.call(this,t,a),r=0;(d=c[r++])&&!t.isPropagationStopped();){ for(t.currentTarget=d.elem,o=0;(p=d.handlers[o++])&&!t.isImmediatePropagationStopped();){ (!t.rnamespace||t.rnamespace.test(p.namespace))&&(t.handleObj=p,t.data=p.data,l=((ke.event.special[p.origType]||{}).handle||p.handler).apply(d.elem,n),void 0!==l&&!1===(t.result=l)&&(t.preventDefault(),t.stopPropagation())); } }return s.postDispatch&&s.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n=[],a=t.delegateCount,s=e.target,r,o,l,d,p;if(a&&s.nodeType&&!("click"===e.type&&1<=e.button)){ for(;s!==this;s=s.parentNode||this){ if(1===s.nodeType&&("click"!==e.type||!0!==s.disabled)){for(d=[],p={},r=0;r<a;r++){ o=t[r],l=o.selector+" ",void 0===p[l]&&(p[l]=o.needsContext?-1<ke(l,this).index(s):ke.find(l,this,null,[s]).length),p[l]&&d.push(o); }d.length&&n.push({elem:s,handlers:d});} } }return s=this,a<t.length&&n.push({elem:s,handlers:t.slice(a)}),n},addProp:function(e,t){Object.defineProperty(ke.Event.prototype,e,{enumerable:!0,configurable:!0,get:Le(t)?function(){if(this.originalEvent){ return t(this.originalEvent) }}:function(){if(this.originalEvent){ return this.originalEvent[e] }},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});}});},fix:function(e){return e[ke.expando]?e:new ke.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==D()&&this.focus){ return this.focus(),!1 }},delegateType:"focusin"},blur:{trigger:function(){if(this===D()&&this.blur){ return this.blur(),!1 }},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&d(this,"input")){ return this.click(),!1 }},_default:function(e){return d(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);}}}},ke.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);},ke.Event=function(e,t){return this instanceof ke.Event?void(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?O:S,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ke.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ke.expando]=!0):new ke.Event(e,t)},ke.Event.prototype={constructor:ke.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=O,t&&!this.isSimulated&&t.preventDefault();},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=O,t&&!this.isSimulated&&t.stopPropagation();},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=O,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation();}},ke.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&it.test(e.type)?null==e.charCode?e.keyCode:e.charCode:!e.which&&void 0!==t&&lt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},ke.event.addProp),ke.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ke.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n=this,a=e.relatedTarget,s=e.handleObj,r;return a&&(a===n||ke.contains(n,a))||(e.type=s.origType,r=s.handler.apply(this,arguments),e.type=t),r}};}),ke.fn.extend({on:function(e,t,n,a){return R(this,e,t,n,a)},one:function(e,t,n,a){return R(this,e,t,n,a,1)},off:function(e,t,n){var a,s;if(e&&e.preventDefault&&e.handleObj){ return a=e.handleObj,ke(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this; }if("object"==typeof e){for(s in e){ this.off(s,t,e[s]); }return this}return (!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=S),this.each(function(){ke.event.remove(this,e,n,t);})}});var pt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ct=/<script|<style|<link/i,ut=/checked\s*(?:[^=]|=\s*.checked.)/i,mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ke.extend({htmlPrefilter:function(e){return e.replace(pt,"<$1></$2>")},clone:function(e,t,n){var a=e.cloneNode(!0),s=ke.contains(e.ownerDocument,e),r,o,d,p;if(!ve.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!ke.isXMLDoc(e)){ for(p=C(a),d=C(e),(r=0,o=d.length);r<o;r++){ _(d[r],p[r]); } }if(t){ if(n){ for(d=d||C(e),p=p||C(a),(r=0,o=d.length);r<o;r++){ N(d[r],p[r]); } }else { N(e,a); } }return p=C(a,"script"),0<p.length&&k(p,!s&&C(e,"script")),a},cleanData:function(e){for(var t=ke.event.special,n=0,a,s,r;void 0!==(s=e[n]);n++){ if(We(s)){if(a=s[$e.expando]){if(a.events){ for(r in a.events){ t[r]?ke.event.remove(s,r):ke.removeEvent(s,r,a.handle); } }s[$e.expando]=void 0;}s[Ue.expando]&&(s[Ue.expando]=void 0);} }}}),ke.fn.extend({detach:function(e){return I(this,e,!0)},remove:function(e){return I(this,e)},text:function(e){return Me(this,function(e){return void 0===e?ke.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e);})},null,e,arguments.length)},append:function(){return Q(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=i(this,e);t.appendChild(e);}})},prepend:function(){return Q(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=i(this,e);t.insertBefore(e,t.firstChild);}})},before:function(){return Q(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);})},after:function(){return Q(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);})},empty:function(){for(var e=0,t;null!=(t=this[e]);e++){ 1===t.nodeType&&(ke.cleanData(C(t,!1)),t.textContent=""); }return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ke.clone(this,e,t)})},html:function(e){return Me(this,function(e){var t=this[0]||{},n=0,a=this.length;if(void 0===e&&1===t.nodeType){ return t.innerHTML; }if("string"==typeof e&&!ct.test(e)&&!st[(nt.exec(e)||["",""])[1].toLowerCase()]){e=ke.htmlPrefilter(e);try{for(;n<a;n++){ t=this[n]||{},1===t.nodeType&&(ke.cleanData(C(t,!1)),t.innerHTML=e); }t=0;}catch(t){}}t&&this.empty().append(e);},null,e,arguments.length)},replaceWith:function(){var e=[];return Q(this,arguments,function(t){var n=this.parentNode;0>ke.inArray(this,e)&&(ke.cleanData(C(this)),n&&n.replaceChild(t,this));},e)}}),ke.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ke.fn[e]=function(e){for(var n=[],a=ke(e),s=a.length-1,r=0,o;r<=s;r++){ o=r===s?this:this.clone(!0),ke(a[r])[t](o),he.apply(n,o.get()); }return this.pushStack(n)};});var ht=new RegExp("^("+Ve+")(?!px)[a-z%]+$","i"),ft=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},gt=new RegExp(Ke.join("|"),"i");(function(){function n(){if(r){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",r.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ot.appendChild(s).appendChild(r);var t=e.getComputedStyle(r);o="1%"!==t.top,p=12===a(t.marginLeft),r.style.right="60%",d=36===a(t.right),i=36===a(t.width),r.style.position="absolute",l=36===r.offsetWidth||"absolute",ot.removeChild(s),r=null;}}function a(e){return t(parseFloat(e))}var s=pe.createElement("div"),r=pe.createElement("div"),o,i,l,d,p;r.style&&(r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",ve.clearCloneStyle="content-box"===r.style.backgroundClip,ke.extend(ve,{boxSizingReliable:function(){return n(),i},pixelBoxStyles:function(){return n(),d},pixelPosition:function(){return n(),o},reliableMarginLeft:function(){return n(),p},scrollboxSize:function(){return n(),l}}));})();var yt=/^(none|table(?!-c[ea]).+)/,bt=/^--/,xt={position:"absolute",visibility:"hidden",display:"block"},wt={letterSpacing:"0",fontWeight:"400"},vt=["Webkit","Moz","ms"],Lt=pe.createElement("div").style;ke.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=H(e,"opacity");return ""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,a){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var s=b(t),r=bt.test(t),o=e.style,i,l,d;if(r||(t=M(s)),d=ke.cssHooks[t]||ke.cssHooks[s],void 0!==n){if(l=typeof n,"string"===l&&(i=Ye.exec(n))&&i[1]&&(n=L(e,t,i),l="number"),null==n||n!==n){ return; }"number"===l&&(n+=i&&i[3]||(ke.cssNumber[s]?"":"px")),ve.clearCloneStyle||""!==n||0!==t.indexOf("background")||(o[t]="inherit"),d&&"set"in d&&void 0===(n=d.set(e,n,a))||(r?o.setProperty(t,n):o[t]=n);}else { return d&&"get"in d&&void 0!==(i=d.get(e,!1,a))?i:o[t] }}},css:function(e,t,n,a){var s=b(t),r=bt.test(t),o,i,l;return r||(t=M(s)),l=ke.cssHooks[t]||ke.cssHooks[s],l&&"get"in l&&(o=l.get(e,!0,n)),void 0===o&&(o=H(e,t,a)),"normal"===o&&t in wt&&(o=wt[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),ke.each(["height","width"],function(e,t){ke.cssHooks[t]={get:function(e,n,a){if(n){ return !yt.test(ke.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?W(e,t,a):Ze(e,xt,function(){return W(e,t,a)}) }},set:function(e,n,a){var s=ft(e),r="border-box"===ke.css(e,"boxSizing",!1,s),o=a&&z(e,t,a,r,s),i;return r&&ve.scrollboxSize()===s.position&&(o-=le(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-z(e,t,"border",!1,s)-.5)),o&&(i=Ye.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=ke.css(e,t)),F(e,n,o)}};}),ke.cssHooks.marginLeft=P(ve.reliableMarginLeft,function(e,t){if(t){ return (parseFloat(H(e,"marginLeft"))||e.getBoundingClientRect().left-Ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px" }}),ke.each({margin:"",padding:"",border:"Width"},function(e,t){ke.cssHooks[e+t]={expand:function(n){for(var a=0,s={},r="string"==typeof n?n.split(" "):[n];4>a;a++){ s[e+Ke[a]+t]=r[a]||r[a-2]||r[0]; }return s}},"margin"!==e&&(ke.cssHooks[e+t].set=F);}),ke.fn.extend({css:function(e,t){return Me(this,function(e,t,n){var a={},s=0,r,o;if(Array.isArray(t)){for(r=ft(e),o=t.length;s<o;s++){ a[t[s]]=ke.css(e,t[s],!1,r); }return a}return void 0===n?ke.css(e,t):ke.style(e,t,n)},e,t,1<arguments.length)}}),ke.Tween=$,$.prototype={constructor:$,init:function(e,t,n,a,s,r){this.elem=e,this.prop=n,this.easing=s||ke.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=a,this.unit=r||(ke.cssNumber[n]?"":"px");},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t=$.propHooks[this.prop],n;return this.pos=this.options.duration?n=ke.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):n=e,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),t&&t.set?t.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ke.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){ke.fx.step[e.prop]?ke.fx.step[e.prop](e):1===e.elem.nodeType&&(null!=e.elem.style[ke.cssProps[e.prop]]||ke.cssHooks[e.prop])?ke.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now;}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);}},ke.easing={linear:function(e){return e},swing:function(e){var t=Math.cos,n=Math.PI;return .5-t(e*n)/2},_default:"swing"},ke.fx=$.prototype.init,ke.fx.step={};var qt=/^(?:toggle|show|hide)$/,Tt=/queueHooks$/,Ct,kt;ke.Animation=ke.extend(J,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return L(n.elem,e,Ye.exec(t),n),n}]},tweener:function(e,t){Le(e)?(t=e,e=["*"]):e=e.match(He);for(var n=0,a=e.length,s;n<a;n++){ s=e[n],J.tweeners[s]=J.tweeners[s]||[],J.tweeners[s].unshift(t); }},prefilters:[Y],prefilter:function(e,t){t?J.prefilters.unshift(e):J.prefilters.push(e);}}),ke.speed=function(e,t,n){var a=e&&"object"==typeof e?ke.extend({},e):{complete:n||!n&&t||Le(e)&&e,duration:e,easing:n&&t||t&&!Le(t)&&t};return ke.fx.off?a.duration=0:"number"!=typeof a.duration&&(a.duration in ke.fx.speeds?a.duration=ke.fx.speeds[a.duration]:a.duration=ke.fx.speeds._default),(null==a.queue||!0===a.queue)&&(a.queue="fx"),a.old=a.complete,a.complete=function(){Le(a.old)&&a.old.call(this),a.queue&&ke.dequeue(this,a.queue);},a},ke.fn.extend({fadeTo:function(e,t,n,a){return this.filter(Je).css("opacity",0).show().end().animate({opacity:t},e,n,a)},animate:function(e,t,n,a){var s=ke.isEmptyObject(e),r=ke.speed(t,n,a),o=function(){var t=J(this,ke.extend({},e),r);(s||$e.get(this,"finish"))&&t.stop(!0);};return o.finish=o,s||!1===r.queue?this.each(o):this.queue(r.queue,o)},stop:function(e,t,n){var a=function(e){var t=e.stop;delete e.stop,t(n);};return "string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,s=null!=e&&e+"queueHooks",r=ke.timers,o=$e.get(this);if(s){ o[s]&&o[s].stop&&a(o[s]); }else { for(s in o){ o[s]&&o[s].stop&&Tt.test(s)&&a(o[s]); } }for(s=r.length;s--;){ r[s].elem===this&&(null==e||r[s].queue===e)&&(r[s].anim.stop(n),t=!1,r.splice(s,1)); }(t||!n)&&ke.dequeue(this,e);})},finish:function(e){return !1!==e&&(e=e||"fx"),this.each(function(){var t=$e.get(this),n=t[e+"queue"],a=t[e+"queueHooks"],s=ke.timers,r=n?n.length:0,o;for(t.finish=!0,ke.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),o=s.length;o--;){ s[o].elem===this&&s[o].queue===e&&(s[o].anim.stop(!0),s.splice(o,1)); }for(o=0;o<r;o++){ n[o]&&n[o].finish&&n[o].finish.call(this); }delete t.finish;})}}),ke.each(["toggle","show","hide"],function(e,t){var n=ke.fn[t];ke.fn[t]=function(e,a,s){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(G(t,!0),e,a,s)};}),ke.each({slideDown:G("show"),slideUp:G("hide"),slideToggle:G("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ke.fn[e]=function(e,n,a){return this.animate(t,e,n,a)};}),ke.timers=[],ke.fx.tick=function(){var e=0,t=ke.timers,n;for(Ct=Date.now();e<t.length;e++){ n=t[e],n()||t[e]!==n||t.splice(e--,1); }t.length||ke.fx.stop(),Ct=void 0;},ke.fx.timer=function(e){ke.timers.push(e),ke.fx.start();},ke.fx.interval=13,ke.fx.start=function(){kt||(kt=!0,U());},ke.fx.stop=function(){kt=null;},ke.fx.speeds={slow:600,fast:200,_default:400},ke.fn.delay=function(t,n){return t=ke.fx?ke.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,a){var s=e.setTimeout(n,t);a.stop=function(){e.clearTimeout(s);};})},function(){var e=pe.createElement("input"),t=pe.createElement("select"),n=t.appendChild(pe.createElement("option"));e.type="checkbox",ve.checkOn=""!==e.value,ve.optSelected=n.selected,e=pe.createElement("input"),e.value="t",e.type="radio",ve.radioValue="t"===e.value;}();var jt=ke.expr.attrHandle,Ot;ke.fn.extend({attr:function(e,t){return Me(this,ke.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ke.removeAttr(this,e);})}}),ke.extend({attr:function(e,t,n){var a=e.nodeType,s,r;if(3!==a&&8!==a&&2!==a){ return "undefined"==typeof e.getAttribute?ke.prop(e,t,n):(1===a&&ke.isXMLDoc(e)||(r=ke.attrHooks[t.toLowerCase()]||(ke.expr.match.bool.test(t)?Ot:void 0)),void 0!==n)?null===n?void ke.removeAttr(e,t):r&&"set"in r&&void 0!==(s=r.set(e,n,t))?s:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(s=r.get(e,t))?s:(s=ke.find.attr(e,t),null==s?void 0:s) }},attrHooks:{type:{set:function(e,t){if(!ve.radioValue&&"radio"===t&&d(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n=0,a=t&&t.match(He),s;if(a&&1===e.nodeType){ for(;s=a[n++];){ e.removeAttribute(s); } }}}),Ot={set:function(e,t,n){return !1===t?ke.removeAttr(e,n):e.setAttribute(n,n),n}},ke.each(ke.expr.match.bool.source.match(/\w+/g),function(e,t){var n=jt[t]||ke.find.attr;jt[t]=function(e,t,a){var s=t.toLowerCase(),r,o;return a||(o=jt[s],jt[s]=r,r=null==n(e,t,a)?null:s,jt[s]=o),r};});var St=/^(?:input|select|textarea|button)$/i,Dt=/^(?:a|area)$/i;ke.fn.extend({prop:function(e,t){return Me(this,ke.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ke.propFix[e]||e];})}}),ke.extend({prop:function(e,t,n){var a=e.nodeType,s,r;if(3!==a&&8!==a&&2!==a){ return 1===a&&ke.isXMLDoc(e)||(t=ke.propFix[t]||t,r=ke.propHooks[t]),void 0===n?r&&"get"in r&&null!==(s=r.get(e,t))?s:e[t]:r&&"set"in r&&void 0!==(s=r.set(e,n,t))?s:e[t]=n }},propHooks:{tabIndex:{get:function(e){var t=ke.find.attr(e,"tabindex");return t?parseInt(t,10):St.test(e.nodeName)||Dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ve.optSelected||(ke.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),ke.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ke.propFix[this.toLowerCase()]=this;}),ke.fn.extend({addClass:function(e){var t=0,n,a,s,r,o,l,d;if(Le(e)){ return this.each(function(t){ke(this).addClass(e.call(this,t,ee(this)));}); }if(n=te(e),n.length){ for(;a=this[t++];){ if(r=ee(a),s=1===a.nodeType&&" "+Z(r)+" ",s){for(l=0;o=n[l++];){ 0>s.indexOf(" "+o+" ")&&(s+=o+" "); }d=Z(s),r!==d&&a.setAttribute("class",d);} } }return this},removeClass:function(e){var t=0,n,a,s,r,o,l,d;if(Le(e)){ return this.each(function(t){ke(this).removeClass(e.call(this,t,ee(this)));}); }if(!arguments.length){ return this.attr("class",""); }if(n=te(e),n.length){ for(;a=this[t++];){ if(r=ee(a),s=1===a.nodeType&&" "+Z(r)+" ",s){for(l=0;o=n[l++];){ for(;-1<s.indexOf(" "+o+" ");){ s=s.replace(" "+o+" "," "); } }d=Z(s),r!==d&&a.setAttribute("class",d);} } }return this},toggleClass:function(e,t){var n=typeof e,a="string"==n||Array.isArray(e);return "boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):Le(e)?this.each(function(n){ke(this).toggleClass(e.call(this,n,ee(this),t),t);}):this.each(function(){var t,s,r,o;if(a){ for(s=0,r=ke(this),o=te(e);t=o[s++];){ r.hasClass(t)?r.removeClass(t):r.addClass(t); } }else{ (void 0===e||"boolean"==n)&&(t=ee(this),t&&$e.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":$e.get(this,"__className__")||"")); }})},hasClass:function(e){var t=0,n,a;for(n=" "+e+" ";a=this[t++];){ if(1===a.nodeType&&-1<(" "+Z(ee(a))+" ").indexOf(n)){ return !0; } }return !1}});var Rt=/\r/g;ke.fn.extend({val:function(e){var t=this[0],n,a,s;return arguments.length?(s=Le(e),this.each(function(t){var a;1!==this.nodeType||(a=s?e.call(this,t,ke(this).val()):e,null==a?a="":"number"==typeof a?a+="":Array.isArray(a)&&(a=ke.map(a,function(e){return null==e?"":e+""})),n=ke.valHooks[this.type]||ke.valHooks[this.nodeName.toLowerCase()],(!n||!("set"in n)||void 0===n.set(this,a,"value"))&&(this.value=a));})):t?(n=ke.valHooks[t.type]||ke.valHooks[t.nodeName.toLowerCase()],n&&"get"in n&&void 0!==(a=n.get(t,"value")))?a:(a=t.value,"string"==typeof a?a.replace(Rt,""):null==a?"":a):void 0}}),ke.extend({valHooks:{option:{get:function(e){var t=ke.find.attr(e,"value");return null==t?Z(ke.text(e)):t}},select:{get:function(e){var t=e.options,n=e.selectedIndex,a="select-one"===e.type,s=a?null:[],r=a?n+1:t.length,o,l,p;for(p=0>n?r:a?n:0;p<r;p++){ if(l=t[p],(l.selected||p===n)&&!l.disabled&&(!l.parentNode.disabled||!d(l.parentNode,"optgroup"))){if(o=ke(l).val(),a){ return o; }s.push(o);} }return s},set:function(e,t){for(var n=e.options,a=ke.makeArray(t),s=n.length,r,o;s--;){ o=n[s],(o.selected=-1<ke.inArray(ke.valHooks.option.get(o),a))&&(r=!0); }return r||(e.selectedIndex=-1),a}}}}),ke.each(["radio","checkbox"],function(){ke.valHooks[this]={set:function(e,t){if(Array.isArray(t)){ return e.checked=-1<ke.inArray(ke(e).val(),t) }}},ve.checkOn||(ke.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value});}),ve.focusin="onfocusin"in e;var Et=/^(?:focusinfocus|focusoutblur)$/,At=function(t){t.stopPropagation();};ke.extend(ke.event,{trigger:function(t,n,a,s){var r=[a||pe],o=be.call(t,"type")?t.type:t,l=be.call(t,"namespace")?t.namespace.split("."):[],d,p,c,u,m,h,f,g;if((p=g=c=a=a||pe,3!==a.nodeType&&8!==a.nodeType)&&!Et.test(o+ke.event.triggered)&&(-1<o.indexOf(".")&&(l=o.split("."),o=l.shift(),l.sort()),m=0>o.indexOf(":")&&"on"+o,t=t[ke.expando]?t:new ke.Event(o,"object"==typeof t&&t),t.isTrigger=s?2:3,t.namespace=l.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+l.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=a),n=null==n?[t]:ke.makeArray(n,[t]),f=ke.event.special[o]||{},s||!f.trigger||!1!==f.trigger.apply(a,n))){if(!s&&!f.noBubble&&!qe(a)){for(u=f.delegateType||o,Et.test(u+o)||(p=p.parentNode);p;p=p.parentNode){ r.push(p),c=p; }c===(a.ownerDocument||pe)&&r.push(c.defaultView||c.parentWindow||e);}for(d=0;(p=r[d++])&&!t.isPropagationStopped();){ g=p,t.type=1<d?u:f.bindType||o,h=($e.get(p,"events")||{})[t.type]&&$e.get(p,"handle"),h&&h.apply(p,n),h=m&&p[m],h&&h.apply&&We(p)&&(t.result=h.apply(p,n),!1===t.result&&t.preventDefault()); }return t.type=o,s||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(r.pop(),n)||!We(a)||!m||!Le(a[o])||qe(a)||(c=a[m],c&&(a[m]=null),ke.event.triggered=o,t.isPropagationStopped()&&g.addEventListener(o,At),a[o](),t.isPropagationStopped()&&g.removeEventListener(o,At),ke.event.triggered=void 0,c&&(a[m]=c)),t.result}},simulate:function(t,n,a){var s=ke.extend(new ke.Event,a,{type:t,isSimulated:!0});ke.event.trigger(s,null,n);}}),ke.fn.extend({trigger:function(e,t){return this.each(function(){ke.event.trigger(e,t,this);})},triggerHandler:function(e,t){var n=this[0];if(n){ return ke.event.trigger(e,t,n,!0) }}}),ve.focusin||ke.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ke.event.simulate(t,e.target,ke.event.fix(e));};ke.event.special[t]={setup:function(){var a=this.ownerDocument||this,s=$e.access(a,t);s||a.addEventListener(e,n,!0),$e.access(a,t,(s||0)+1);},teardown:function(){var a=this.ownerDocument||this,s=$e.access(a,t)-1;s?$e.access(a,t,s):(a.removeEventListener(e,n,!0),$e.remove(a,t));}};});var Nt=e.location,_t=Date.now(),Qt=/\?/;ke.parseXML=function(t){var n;if(!t||"string"!=typeof t){ return null; }try{n=new e.DOMParser().parseFromString(t,"text/xml");}catch(t){n=void 0;}return (!n||n.getElementsByTagName("parsererror").length)&&ke.error("Invalid XML: "+t),n};var It=/\[\]$/,Ht=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Bt=/^(?:input|select|textarea|keygen)/i;ke.param=function(e,t){var n=[],a=function(e,t){var a=Le(t)?t():t;n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==a?"":a);},s;if(Array.isArray(e)||e.jquery&&!ke.isPlainObject(e)){ ke.each(e,function(){a(this.name,this.value);}); }else { for(s in e){ ne(s,e[s],t,a); } }return n.join("&")},ke.fn.extend({serialize:function(){return ke.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ke.prop(this,"elements");return e?ke.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ke(this).is(":disabled")&&Bt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!tt.test(e))}).map(function(e,t){var n=ke(this).val();return null==n?null:Array.isArray(n)?ke.map(n,function(e){return {name:t.name,value:e.replace(Ht,"\r\n")}}):{name:t.name,value:n.replace(Ht,"\r\n")}}).get()}});var Mt=/%20/g,Ft=/#.*$/,zt=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/mg,$t=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ut=/^(?:GET|HEAD)$/,Xt=/^\/\//,Gt={},Vt={},Kt=pe.createElement("a");Kt.href=Nt.href,ke.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt.href,type:"GET",isLocal:$t.test(Nt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ke.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?re(re(e,ke.ajaxSettings),t):re(ke.ajaxSettings,e)},ajaxPrefilter:ae(Gt),ajaxTransport:ae(Vt),ajax:function(t,n){function a(t,n,a,i){var c=n,u,m,b,w,q;v||(v=!0,x&&e.clearTimeout(x),f=void 0,y=i||"",h.readyState=0<t?4:0,u=200<=t&&300>t||304===t,a&&(w=oe(r,h,a)),w=ie(r,w,h,u),u?(r.ifModified&&(q=h.getResponseHeader("Last-Modified"),q&&(ke.lastModified[g]=q),q=h.getResponseHeader("etag"),q&&(ke.etag[g]=q)),204===t||"HEAD"===r.type?c="nocontent":304===t?c="notmodified":(c=w.state,m=w.data,b=w.error,u=!b)):(b=c,(t||!c)&&(c="error",0>t&&(t=0))),h.status=t,h.statusText=(n||c)+"",u?l.resolveWith(s,[m,c,h]):l.rejectWith(s,[h,c,b]),h.statusCode(p),p=void 0,L&&o.trigger(u?"ajaxSuccess":"ajaxError",[h,r,u?m:b]),d.fireWith(s,[h,c]),L&&(o.trigger("ajaxComplete",[h,r]),! --ke.active&&ke.event.trigger("ajaxStop")));}"object"==typeof t&&(n=t,t=void 0),n=n||{};var r=ke.ajaxSetup({},n),s=r.context||r,o=r.context&&(s.nodeType||s.jquery)?ke(s):ke.event,l=ke.Deferred(),d=ke.Callbacks("once memory"),p=r.statusCode||{},c={},u={},m="canceled",h={readyState:0,getResponseHeader:function(e){var t;if(v){if(!b){ for(b={};t=Wt.exec(y);){ b[t[1].toLowerCase()]=t[2]; } }t=b[e.toLowerCase()];}return null==t?null:t},getAllResponseHeaders:function(){return v?y:null},setRequestHeader:function(e,t){return null==v&&(e=u[e.toLowerCase()]=u[e.toLowerCase()]||e,c[e]=t),this},overrideMimeType:function(e){return null==v&&(r.mimeType=e),this},statusCode:function(e){if(e){ if(v){ h.always(e[h.status]); }else { for(var t in e){ p[t]=[p[t],e[t]]; } } }return this},abort:function(e){var t=e||m;return f&&f.abort(t),a(0,t),this}},f,g,y,b,x,w,v,L,q,T;if(l.promise(h),r.url=((t||r.url||Nt.href)+"").replace(Xt,Nt.protocol+"//"),r.type=n.method||n.type||r.method||r.type,r.dataTypes=(r.dataType||"*").toLowerCase().match(He)||[""],null==r.crossDomain){w=pe.createElement("a");try{w.href=r.url,w.href=w.href,r.crossDomain=Kt.protocol+"//"+Kt.host!=w.protocol+"//"+w.host;}catch(t){r.crossDomain=!0;}}if(r.data&&r.processData&&"string"!=typeof r.data&&(r.data=ke.param(r.data,r.traditional)),se(Gt,r,n,h),v){ return h; }for(q in L=ke.event&&r.global,L&&0==ke.active++&&ke.event.trigger("ajaxStart"),r.type=r.type.toUpperCase(),r.hasContent=!Ut.test(r.type),g=r.url.replace(Ft,""),r.hasContent?r.data&&r.processData&&0===(r.contentType||"").indexOf("application/x-www-form-urlencoded")&&(r.data=r.data.replace(Mt,"+")):(T=r.url.slice(g.length),r.data&&(r.processData||"string"==typeof r.data)&&(g+=(Qt.test(g)?"&":"?")+r.data,delete r.data),!1===r.cache&&(g=g.replace(zt,"$1"),T=(Qt.test(g)?"&":"?")+"_="+_t++ +T),r.url=g+T),r.ifModified&&(ke.lastModified[g]&&h.setRequestHeader("If-Modified-Since",ke.lastModified[g]),ke.etag[g]&&h.setRequestHeader("If-None-Match",ke.etag[g])),(r.data&&r.hasContent&&!1!==r.contentType||n.contentType)&&h.setRequestHeader("Content-Type",r.contentType),h.setRequestHeader("Accept",r.dataTypes[0]&&r.accepts[r.dataTypes[0]]?r.accepts[r.dataTypes[0]]+("*"===r.dataTypes[0]?"":", */*; q=0.01"):r.accepts["*"]),r.headers){ h.setRequestHeader(q,r.headers[q]); }if(r.beforeSend&&(!1===r.beforeSend.call(s,h,r)||v)){ return h.abort(); }if(m="abort",d.add(r.complete),h.done(r.success),h.fail(r.error),f=se(Vt,r,n,h),!f){ a(-1,"No Transport"); }else{if(h.readyState=1,L&&o.trigger("ajaxSend",[h,r]),v){ return h; }r.async&&0<r.timeout&&(x=e.setTimeout(function(){h.abort("timeout");},r.timeout));try{v=!1,f.send(c,a);}catch(t){if(v){ throw t; }a(-1,t);}}return h},getJSON:function(e,t,n){return ke.get(e,t,n,"json")},getScript:function(e,t){return ke.get(e,void 0,t,"script")}}),ke.each(["get","post"],function(e,t){ke[t]=function(e,n,a,s){return Le(n)&&(s=s||a,a=n,n=void 0),ke.ajax(ke.extend({url:e,type:t,dataType:s,data:n,success:a},ke.isPlainObject(e)&&e))};}),ke._evalUrl=function(e){return ke.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ke.fn.extend({wrapAll:function(e){var t;return this[0]&&(Le(e)&&(e=e.call(this[0])),t=ke(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;){ e=e.firstElementChild; }return e}).append(this)),this},wrapInner:function(e){return Le(e)?this.each(function(t){ke(this).wrapInner(e.call(this,t));}):this.each(function(){var t=ke(this),n=t.contents();n.length?n.wrapAll(e):t.append(e);})},wrap:function(e){var t=Le(e);return this.each(function(n){ke(this).wrapAll(t?e.call(this,n):e);})},unwrap:function(e){return this.parent(e).not("body").each(function(){ke(this).replaceWith(this.childNodes);}),this}}),ke.expr.pseudos.hidden=function(e){return !ke.expr.pseudos.visible(e)},ke.expr.pseudos.visible=function(e){return !!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ke.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var Jt={0:200,1223:204},Zt=ke.ajaxSettings.xhr();ve.cors=!!Zt&&"withCredentials"in Zt,ve.ajax=Zt=!!Zt,ke.ajaxTransport(function(t){var n,a;if(ve.cors||Zt&&!t.crossDomain){ return {send:function(s,r){var o=t.xhr(),l;if(o.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields){ for(l in t.xhrFields){ o[l]=t.xhrFields[l]; } }for(l in t.mimeType&&o.overrideMimeType&&o.overrideMimeType(t.mimeType),t.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),s){ o.setRequestHeader(l,s[l]); }n=function(e){return function(){n&&(n=a=o.onload=o.onerror=o.onabort=o.ontimeout=o.onreadystatechange=null,"abort"===e?o.abort():"error"===e?"number"==typeof o.status?r(o.status,o.statusText):r(0,"error"):r(Jt[o.status]||o.status,o.statusText,"text"!==(o.responseType||"text")||"string"!=typeof o.responseText?{binary:o.response}:{text:o.responseText},o.getAllResponseHeaders()));}},o.onload=n(),a=o.onerror=o.ontimeout=n("error"),void 0===o.onabort?o.onreadystatechange=function(){4===o.readyState&&e.setTimeout(function(){n&&a();});}:o.onabort=a,n=n("abort");try{o.send(t.hasContent&&t.data||null);}catch(t){if(n){ throw t }}},abort:function(){n&&n();}} }}),ke.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),ke.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ke.globalEval(e),e}}}),ke.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),ke.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return {send:function(a,s){t=ke("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&s("error"===e.type?404:200,e.type);}),pe.head.appendChild(t[0]);},abort:function(){n&&n();}}}});var en=[],tn=/(=)\?(?=&|$)|\?\?/;ke.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=en.pop()||ke.expando+"_"+_t++;return this[e]=!0,e}}),ke.ajaxPrefilter("json jsonp",function(t,n,a){var s=!1!==t.jsonp&&(tn.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tn.test(t.data)&&"data"),r,o,i;if(s||"jsonp"===t.dataTypes[0]){ return r=t.jsonpCallback=Le(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tn,"$1"+r):!1!==t.jsonp&&(t.url+=(Qt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return i||ke.error(r+" was not called"),i[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){i=arguments;},a.always(function(){void 0===o?ke(e).removeProp(r):e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,en.push(r)),i&&Le(o)&&o(i[0]),i=o=void 0;}),"script" }}),ve.createHTMLDocument=function(){var e=pe.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),ke.parseHTML=function(e,t,n){if("string"!=typeof e){ return []; }"boolean"==typeof t&&(n=t,t=!1);var a,s,r;return (t||(ve.createHTMLDocument?(t=pe.implementation.createHTMLDocument(""),a=t.createElement("base"),a.href=pe.location.href,t.head.appendChild(a)):t=pe),s=Ee.exec(e),r=!n&&[],s)?[t.createElement(s[1])]:(s=j([e],t,r),r&&r.length&&ke(r).remove(),ke.merge([],s.childNodes))},ke.fn.load=function(e,t,n){var a=this,s=e.indexOf(" "),r,o,i;return -1<s&&(r=Z(e.slice(s)),e=e.slice(0,s)),Le(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<a.length&&ke.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?ke("<div>").append(ke.parseHTML(e)).find(r):e);}).always(n&&function(e,t){a.each(function(){n.apply(this,i||[e.responseText,t,e]);});}),this},ke.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ke.fn[t]=function(e){return this.on(t,e)};}),ke.expr.pseudos.animated=function(e){return ke.grep(ke.timers,function(t){return e===t.elem}).length},ke.offset={setOffset:function(e,t,n){var a=ke.css(e,"position"),s=ke(e),r={},o,i,l,d,p,c,u;"static"===a&&(e.style.position="relative"),p=s.offset(),l=ke.css(e,"top"),c=ke.css(e,"left"),u=("absolute"===a||"fixed"===a)&&-1<(l+c).indexOf("auto"),u?(o=s.position(),d=o.top,i=o.left):(d=parseFloat(l)||0,i=parseFloat(c)||0),Le(t)&&(t=t.call(e,n,ke.extend({},p))),null!=t.top&&(r.top=t.top-p.top+d),null!=t.left&&(r.left=t.left-p.left+i),"using"in t?t.using.call(e,r):s.css(r);}},ke.fn.extend({offset:function(e){if(arguments.length){ return void 0===e?this:this.each(function(t){ke.offset.setOffset(this,e,t);}); }var t=this[0],n,a;if(t){ return t.getClientRects().length?(n=t.getBoundingClientRect(),a=t.ownerDocument.defaultView,{top:n.top+a.pageYOffset,left:n.left+a.pageXOffset}):{top:0,left:0} }},position:function(){if(this[0]){var e=this[0],t={top:0,left:0},n,a,s;if("fixed"===ke.css(e,"position")){ a=e.getBoundingClientRect(); }else{for(a=this.offset(),s=e.ownerDocument,n=e.offsetParent||s.documentElement;n&&(n===s.body||n===s.documentElement)&&"static"===ke.css(n,"position");){ n=n.parentNode; }n&&n!==e&&1===n.nodeType&&(t=ke(n).offset(),t.top+=ke.css(n,"borderTopWidth",!0),t.left+=ke.css(n,"borderLeftWidth",!0));}return {top:a.top-t.top-ke.css(e,"marginTop",!0),left:a.left-t.left-ke.css(e,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ke.css(e,"position");){ e=e.offsetParent; }return e||ot})}}),ke.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ke.fn[e]=function(a){return Me(this,function(e,a,s){var r;return qe(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===s?r?r[t]:e[a]:void(r?r.scrollTo(n?r.pageXOffset:s,n?s:r.pageYOffset):e[a]=s)},e,a,arguments.length)};}),ke.each(["top","left"],function(e,t){ke.cssHooks[t]=P(ve.pixelPosition,function(e,n){if(n){ return n=H(e,t),ht.test(n)?ke(e).position()[t]+"px":n }});}),ke.each({Height:"height",Width:"width"},function(e,t){ke.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,s){ke.fn[s]=function(r,o){var i=arguments.length&&(n||"boolean"!=typeof r),l=n||(!0===r||!0===o?"margin":"border");return Me(this,function(t,n,r){var o;return qe(t)?0===s.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,a(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?ke.css(t,n,l):ke.style(t,n,r,l)},t,i?r:void 0,i)};});}),ke.each(["blur","focus","focusin","focusout","resize","scroll","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","contextmenu"],function(e,t){ke.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)};}),ke.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ke.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,a){return this.on(t,e,n,a)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),ke.proxy=function(e,t){var n,a,s;if("string"==typeof t&&(n=e[t],t=e,e=n),!!Le(e)){ return a=ue.call(arguments,2),s=function(){return e.apply(t||this,a.concat(ue.call(arguments)))},s.guid=e.guid=e.guid||ke.guid++,s }},ke.holdReady=function(e){e?ke.readyWait++:ke.ready(!0);},ke.isArray=Array.isArray,ke.parseJSON=JSON.parse,ke.nodeName=d,ke.isFunction=Le,ke.isWindow=qe,ke.camelCase=b,ke.type=o,ke.now=Date.now,ke.isNumeric=function(e){var t=ke.type(e);return ("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))};var nn=e.jQuery,an=e.$;return ke.noConflict=function(t){return e.$===ke&&(e.$=an),t&&e.jQuery===ke&&(e.jQuery=nn),ke},s||(e.jQuery=e.$=ke),ke});});var globals={jQuery:jquery};(function(){var g=Math.round,y=String.fromCharCode;function t(){}function n(e){var t=e.length-1;return function(){var n=v.call(arguments,0,t),a=v.call(arguments,t);return e.apply(this,n.concat([a]))}}function a(e){return n(function(t,n){"function"!=typeof t&&(t=q(t));var a=function(e){return t.apply(e,[e].concat(n))};return e.call(this,a)})}function s(e){var t=v.call(arguments,1);return function(){return e.apply(this,t)}}function r(e,t){if(!t){ throw new Error("prayer failed: "+e) }}function o(e){r("a direction was passed",e===-1||e===1);}function i(e,t,n){r("a parent is always present",e),r("leftward is properly set up",function(){return t?t[1]===n&&t.parent===e:e.ends[-1]===n}()),r("rightward is properly set up",function(){return n?n[-1]===t&&n.parent===e:e.ends[1]===t}());}function l(){}function d(e){return l(),Be(e)}function p(e){function n(e){if(!e||!e.nodeType){ return null; }var t=k(e).children(".mq-root-block").attr("mathquill-block-id"),n=t&&j.byId[t].controller;return n?s[n.KIND_OF_MQ](n):null}function a(e,t){for(var n in t&&t.handlers&&(t.handlers={fns:t.handlers,APIClasses:s}),t){ if(t.hasOwnProperty(n)){var a=t[n];e[n]=a;} }}if(!(B<=e&&e<=M)){ throw"Only interface versions between "+B+" and "+M+" supported. You specified: "+e; }var s={};n.L=-1,n.R=1,n.config=function(e){return a(Q.p,e),this},n.registerEmbed=function(e,t){if(!/^[a-z][a-z0-9]*$/i.test(e)){ throw"Embed name must start with letter and be only letters and digits"; }P[e]=t;};var r=s.AbstractMathQuill=T(H,function(e){e.init=function(e){this.__controller=e,this.__options=e.options,this.id=e.id,this.data=e.data;},e.__mathquillify=function(e){var t=this.__controller,n=t.root,a=t.container;t.createTextarea();var s=a.addClass(e).contents().detach();n.jQ=k("<span class=\"mq-root-block\"/>").attr("mathquill-block-id",n.id).appendTo(a),this.latex(s.text()),this.revert=function(){return a.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(s)};},e.config=function(e){return a(this.__options,e),this},e.el=function(){return this.__controller.container[0]},e.text=function(){return this.__controller.exportText()},e.latex=function(e){return 0<arguments.length?(this.__controller.renderLatexMath(e),this.__controller.blurred&&this.__controller.cursor.hide().parent.blur(),this):this.__controller.exportLatex()},e.html=function(){return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g,"").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i,"").replace(/ mq-hasCursor|mq-hasCursor ?/,"").replace(/ class=(""|(?= |>))/g,"")},e.reflow=function(){return this.__controller.root.postOrder("reflow"),this};});for(var o in n.prototype=r.prototype,s.EditableField=T(r,function(e,n){e.__mathquillify=function(){return n.__mathquillify.apply(this,arguments),this.__controller.editable=!0,this.__controller.delegateMouseEvents(),this.__controller.editablesTextareaEvents(),this},e.focus=function(){return this.__controller.textarea.focus(),this},e.blur=function(){return this.__controller.textarea.blur(),this},e.write=function(e){return this.__controller.writeLatex(e),this.__controller.scrollHoriz(),this.__controller.blurred&&this.__controller.cursor.hide().parent.blur(),this},e.cmd=function(e){var t=this.__controller.notify(),n=t.cursor;if(/^\\[a-z]+$/i.test(e)){e=e.slice(1);}else { n.parent.write(n,e); }return t.blurred&&n.hide().parent.blur(),this},e.select=function(){var e=this.__controller;for(e.notify("move").cursor.insAtRightEnd(e.root);e.cursor[-1];){ e.selectLeft(); }return this},e.clearSelection=function(){return this.__controller.cursor.clearSelection(),this},e.moveToDirEnd=function(e){return this.__controller.notify("move").cursor.insAtDirEnd(e,this.__controller.root),this},e.moveToLeftEnd=function(){return this.moveToDirEnd(-1)},e.moveToRightEnd=function(){return this.moveToDirEnd(1)},e.keystroke=function(e){for(var e=e.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<e.length;n+=1){ this.__controller.keystroke(e[n],{preventDefault:t}); }return this},e.typedText=function(e){for(var t=0;t<e.length;t+=1){ this.__controller.typedText(e.charAt(t)); }return this},e.dropEmbedded=function(e,t,n){var a=e-k(window).scrollLeft(),s=t-k(window).scrollTop(),r=document.elementFromPoint(a,s);this.__controller.seek(k(r),e,t);var o=He().setOptions(n);o.createLeftOf(this.__controller.cursor);},e.clickAt=function(e,t,n){n=n||document.elementFromPoint(e,t);var a=this.__controller,s=a.root;return b.contains(s.jQ[0],n)||(n=s.jQ[0]),a.seek(k(n),e+pageXOffset,t+pageYOffset),a.blurred&&this.focus(),this},e.ignoreNextMousedown=function(e){return this.__controller.cursor.options.ignoreNextMousedown=e,this};}),n.EditableField=function(){throw"wtf don't call me, I'm 'abstract'"},n.EditableField.prototype=s.EditableField.prototype,N){ (function(t,a){var r=s[t]=a(s);n[t]=function(a,s){var o=n(a);if(o instanceof r||!a||!a.nodeType){ return o; }var i=A(r.RootBlock(),k(a),Q());return i.KIND_OF_MQ=t,r(i).__mathquillify(s,e)},n[t].prototype=r.prototype;})(o,N[o]); }return n}function c(e){for(var t=["moveOutOf","deleteOutOf","selectOutOf","upOutOf","downOutOf"],n=0;n<t.length;n+=1){ (function(t){e[t]=function(e){this.controller.handle(t,e);};})(t[n]); }e.reflow=function(){this.controller.handle("reflow"),this.controller.handle("edited"),this.controller.handle("edit");};}function u(e,t,n){return T(Z,{ctrlSeq:e,htmlTemplate:"<"+t+" "+n+">&0</"+t+">"})}function m(e){var t=this.parent,n=e;do{if(n[1]){ return e.insLeftOf(t); }n=n.parent.parent;}while(n!==t);e.insRightOf(t);}function h(e,t){e.jQadd=function(){t.jQadd.apply(this,arguments),this.delimjQs=this.jQ.children(":first").add(this.jQ.children(":last")),this.contentjQ=this.jQ.children(":eq(1)");},e.reflow=function(){var e=this.contentjQ.outerHeight()/parseFloat(this.contentjQ.css("fontSize"));ve(this.delimjQs,x(1+.2*(e-1),1.2),1.2*e);};}function f(e,t){var t=t||e,n=_e[e],a=_e[t];D[e]=s(Ne,-1,e,n,t,a),D[n]=s(Ne,1,e,n,t,a);}var b=globals.jQuery,x=Math.min,w=Math.max,v=[].slice,q=n(function(e,t){return n(function(n,a){if(e in n){ return n[e].apply(n,t.concat(a)) }})}),T=function(e,t){function n(e){return "object"==typeof e}function a(e){return "function"==typeof e}function s(){}return function r(o,i){function l(){var e=new d;return a(e.init)&&e.init.apply(e,arguments),e}function d(){}void 0===i&&(i=o,o=Object),l.Bare=d;var p=s[e]=o[e],c=d[e]=l[e]=l.p=new s,u;return c.constructor=l,l.extend=function(e){return r(l,e)},(l.open=function(e){if(u={},a(e)?u=e.call(l,c,p,l,o):n(e)&&(u=e),n(u)){ for(var s in u){ t.call(u,s)&&(c[s]=u[s]); } }return a(c.init)||(c.init=o),l})(i)}}("prototype",{}.hasOwnProperty),C=-1,L=1,k=T(b,function(e){e.insDirOf=function(e,t){return e===C?this.insertBefore(t.first()):this.insertAfter(t.last())},e.insAtDirEnd=function(e,t){return e===C?this.prependTo(t):this.appendTo(t)};}),e=T(function(t){t.parent=0,t[C]=0,t[L]=0,t.init=function(e,t,n){this.parent=e,this[C]=t,this[L]=n;},this.copy=function(t){return e(t.parent,t[C],t[L])};}),j=T(function(e){function t(){return n+=1}e[C]=0,e[L]=0,e.parent=0;var n=0;this.byId={},e.init=function(){this.id=t(),j.byId[this.id]=this,this.ends={},this.ends[C]=0,this.ends[L]=0;},e.dispose=function(){delete j.byId[this.id];},e.toString=function(){return "{{ MathQuill Node #"+this.id+" }}"},e.jQ=k(),e.jQadd=function(e){return this.jQ=this.jQ.add(e)},e.jQize=function(e){function t(e){if(e.getAttribute){var n=e.getAttribute("mathquill-command-id"),a=e.getAttribute("mathquill-block-id");n&&j.byId[n].jQadd(e),a&&j.byId[a].jQadd(e);}for(e=e.firstChild;e;e=e.nextSibling){ t(e); }}for(var e=k(e||this.html()),n=0;n<e.length;n+=1){ t(e[n]); }return e},e.createDir=function(e,t){o(e);var n=this;return n.jQize(),n.jQ.insDirOf(e,t.jQ),t[e]=n.adopt(t.parent,t[C],t[L]),n},e.createLeftOf=function(e){return this.createDir(C,e)},e.selectChildren=function(e,t){return E(e,t)},e.bubble=a(function(e){for(var t=this,n;t&&(n=e(t),!1!==n);t=t.parent){ }return this}),e.postOrder=a(function(e){return function t(n){n.eachChild(t),e(n);}(this),this}),e.isEmpty=function(){return 0===this.ends[C]&&0===this.ends[L]},e.children=function(){return O(this.ends[C],this.ends[L])},e.eachChild=function(){var e=this.children();return e.each.apply(e,arguments),this},e.foldChildren=function(e,t){return this.children().fold(e,t)},e.withDirAdopt=function(e,t,n,a){return O(this,this).withDirAdopt(e,t,n,a),this},e.adopt=function(e,t,n){return O(this,this).adopt(e,t,n),this},e.disown=function(){return O(this,this).disown(),this},e.remove=function(){return this.jQ.remove(),this.postOrder("dispose"),this.disown()};}),O=T(function(e){e.init=function(e,t,n){if(void 0===n&&(n=C),o(n),r("no half-empty fragments",!e==!t),this.ends={},!!e){r("withDir is passed to Fragment",e instanceof j),r("oppDir is passed to Fragment",t instanceof j),r("withDir and oppDir have the same parent",e.parent===t.parent),this.ends[n]=e,this.ends[-n]=t;var a=this.fold([],function(e,t){return e.push.apply(e,t.jQ.get()),e});this.jQ=this.jQ.add(a);}},e.jQ=k(),e.withDirAdopt=function(e,t,n,a){return e===C?this.adopt(t,n,a):this.adopt(t,a,n)},e.adopt=function(e,t,n){i(e,t,n);var a=this;a.disowned=!1;var s=a.ends[C];if(!s){ return this; }var r=a.ends[L];if(t);else { e.ends[C]=s; }return n?n[C]=r:e.ends[L]=r,a.ends[L][L]=n,a.each(function(n){n[C]=t,n.parent=e,t&&(t[L]=n),t=n;}),a},e.disown=function(){var e=this,t=e.ends[C];if(!t||e.disowned){ return e; }e.disowned=!0;var n=e.ends[L],a=t.parent;return i(a,t[C],t),i(a,n,n[L]),t[C]?t[C][L]=n[L]:a.ends[C]=n[L],n[L]?n[L][C]=t[C]:a.ends[L]=t[C],e},e.remove=function(){return this.jQ.remove(),this.each("postOrder","dispose"),this.disown()},e.each=a(function(e){var t=this,n=t.ends[C];if(!n){ return t; }for(;n!==t.ends[L][L];n=n[L]){var a=e(n);if(!1===a){ break }}return t}),e.fold=function(e,t){return this.each(function(n){e=t.call(this,e,n);}),e};}),S={},D={},R=T(e,function(t){t.init=function(e,t){this.parent=e,this.options=t;var n=this.jQ=this._jQ=k("<span class=\"mq-cursor\">&#8203;</span>");this.blink=function(){n.toggleClass("mq-blink");},this.upDownCache={};},t.show=function(){return this.jQ=this._jQ.removeClass("mq-blink"),"intervalId"in this?clearInterval(this.intervalId):(this[L]?this.selection&&this.selection.ends[C][C]===this[C]?this.jQ.insertBefore(this.selection.jQ):this.jQ.insertBefore(this[L].jQ.first()):this.jQ.appendTo(this.parent.jQ),this.parent.focus()),this.intervalId=setInterval(this.blink,500),this},t.hide=function(){return "intervalId"in this&&clearInterval(this.intervalId),delete this.intervalId,this.jQ.detach(),this.jQ=k(),this},t.withDirInsertAt=function(e,t,n,a){var s=this.parent;this.parent=t,this[e]=n,this[-e]=a,s!==t&&s.blur&&s.blur(this);},t.insDirOf=function(e,t){return o(e),this.jQ.insDirOf(e,t.jQ),this.withDirInsertAt(e,t.parent,t[e],t),this.parent.jQ.addClass("mq-hasCursor"),this},t.insLeftOf=function(e){return this.insDirOf(C,e)},t.insRightOf=function(e){return this.insDirOf(L,e)},t.insAtDirEnd=function(e,t){return o(e),this.jQ.insAtDirEnd(e,t.jQ),this.withDirInsertAt(e,t,0,t.ends[e]),t.focus(),this},t.insAtLeftEnd=function(e){return this.insAtDirEnd(C,e)},t.insAtRightEnd=function(e){return this.insAtDirEnd(L,e)},t.jumpUpDown=function(t,n){var a=this;a.upDownCache[t.id]=e.copy(a);var s=a.upDownCache[n.id];if(s){ s[L]?a.insLeftOf(s[L]):a.insAtRightEnd(s.parent); }else{var r=a.offset().left;n.seek(r,a);}},t.offset=function(){var e=this,t=e.jQ.removeClass("mq-cursor").offset();return e.jQ.addClass("mq-cursor"),t},t.unwrapGramp=function(){var e=this.parent.parent,t=e.parent,n=e[L],a=this,s=e[C];if(e.disown().eachChild(function(a){a.isEmpty()||(a.children().adopt(t,s,n).each(function(t){t.jQ.insertBefore(e.jQ.first());}),s=a.ends[L]);}),!this[L]){ if(this[C]){ this[L]=this[C][L]; }else { for(;!this[L];){ if(this.parent=this.parent[L],this.parent){ this[L]=this.parent.ends[C]; }else{this[L]=e[L],this.parent=t;break} } } }this[L]?this.insLeftOf(this[L]):this.insAtRightEnd(t),e.jQ.remove(),e[C].siblingDeleted&&e[C].siblingDeleted(a.options,L),e[L].siblingDeleted&&e[L].siblingDeleted(a.options,C);},t.startSelection=function(){for(var t=this.anticursor=e.copy(this),n=t.ancestors={},a=t;a.parent;a=a.parent){ n[a.parent.id]=a; }},t.endSelection=function(){delete this.anticursor;},t.select=function(){var t=this.anticursor;if(this[C]===t[C]&&this.parent===t.parent){ return !1; }for(var n=this;n.parent;n=n.parent){ if(n.parent.id in t.ancestors){var a=n.parent;break} }r("cursor and anticursor in the same tree",a);var s=t.ancestors[a.id],o=L,i,l;if(n[C]!==s){ for(var d=n;d;d=d[L]){ if(d[L]===s[L]){o=C,i=n,l=s;break} } }return o===L&&(i=s,l=n),i instanceof e&&(i=i[L]),l instanceof e&&(l=l[C]),this.hide().selection=a.selectChildren(i,l),this.insDirOf(o,this.selection.ends[o]),this.selectionChanged(),!0},t.clearSelection=function(){return this.selection&&(this.selection.clear(),delete this.selection,this.selectionChanged()),this},t.deleteSelection=function(){this.selection&&(this[C]=this.selection.ends[C][C],this[L]=this.selection.ends[L][L],this.selection.remove(),this.selectionChanged(),delete this.selection);},t.replaceSelection=function(){var e=this.selection;return e&&(this[C]=e.ends[C][C],this[L]=e.ends[L][L],delete this.selection),e};}),E=T(O,function(e,t){e.init=function(){t.init.apply(this,arguments),this.jQ=this.jQ.wrapAll("<span class=\"mq-selection\"></span>").parent();},e.adopt=function(){return this.jQ.replaceWith(this.jQ=this.jQ.children()),t.adopt.apply(this,arguments)},e.clear=function(){return this.jQ.replaceWith(this.jQ[0].childNodes),this},e.join=function(e){return this.fold("",function(t,n){return t+n[e]()})};}),A=T(function(e){e.init=function(e,t,n){this.id=e.id,this.data={},this.root=e,this.container=t,this.options=n,e.controller=this,this.cursor=e.cursor=R(e,n);},e.handle=function(e,t){var n=this.options.handlers;if(n&&n.fns[e]){var a=n.APIClasses[this.KIND_OF_MQ](this);t===C||t===L?n.fns[e](t,a):n.fns[e](a);}};var t=[];this.onNotify=function(e){t.push(e);},e.notify=function(){
    var arguments$1 = arguments;
    for(var e=0;e<t.length;e+=1){ t[e].apply(this.cursor,arguments$1); }return this};}),N={},Q=T(),I={},H=T(),P={};d.prototype=H.p,d.interfaceVersion=function(e){if(1!==e){ throw"Only interface version 1 supported. You specified: "+e; }return l=function(){},l(),d},d.getInterface=p;var B=p.MIN=1,M=p.MAX=2;d.noConflict=function(){return globals.MathQuill=F,d};var F=globals.MathQuill;globals.MathQuill=d;var z=T(function(e,t,n){function a(e,t){throw e=e?"'"+e+"'":"EOF","Parse Error: "+t+" at "+e}e.init=function(e){this._=e;},e.parse=function(e){return this.skip(y)._(""+e,function(e,t){return t},a)},e.or=function(e){r("or is passed a parser",e instanceof n);var t=this;return n(function(n,a,s){return t._(n,a,function(){return e._(n,a,s)})})},e.then=function(e){var t=this;return n(function(a,s,o){return t._(a,function(t,a){var i=e instanceof n?e:e(a);return r("a parser is returned",i instanceof n),i._(t,s,o)},o)})},e.many=function(){var e=this;return n(function(t,n){function a(e,n){return t=e,r.push(n),!0}function s(){return !1}for(var r=[];e._(t,a,s);){ }return n(t,r)})},e.times=function(e,t){2>arguments.length&&(t=e);var a=this;return n(function(n,s,r){function o(e,t){return p.push(t),n=e,!0}function l(e,t){return m=t,n=e,!1}function d(){return !1}for(var p=[],c=!0,u=0,m;u<e;u+=1){ if(c=a._(n,o,l),!c){ return r(n,m); } }for(;u<t&&c;u+=1){ c=a._(n,o,d); }return s(n,p)})},e.result=function(e){return this.then(i(e))},e.atMost=function(e){return this.times(0,e)},e.atLeast=function(e){var t=this;return t.times(e).then(function(e){return t.many().map(function(t){return e.concat(t)})})},e.map=function(e){return this.then(function(t){return i(e(t))})},e.skip=function(e){return this.then(function(t){return e.result(t)})};var s=this.string=function(e){var t=e.length;return n(function(n,a,s){var r=n.slice(0,t);return r===e?a(n.slice(t),r):s(n,"expected '"+e+"'")})},o=this.regex=function(e){r("regexp parser is anchored","^"===e.toString().charAt(1));return n(function(t,n,a){var s=e.exec(t);if(s){var r=s[0];return n(t.slice(r.length),r)}return a(t,"expected "+e)})},i=n.succeed=function(e){return n(function(t,n){return n(t,e)})},l=n.fail=function(e){return n(function(t,n,a){return a(t,e)})},d=n.letter=o(/^[a-z]/i),p=n.letters=o(/^[a-z]*/i),c=n.digit=o(/^[0-9]/),u=n.digits=o(/^[0-9]*/),m=n.whitespace=o(/^\s+/),h=n.optWhitespace=o(/^\s*/),f=n.any=n(function(e,t,n){return e?t(e.slice(1),e.charAt(0)):n(e,"expected any character")}),g=n.all=n(function(e,t){return t("",e)}),y=n.eof=n(function(e,t,n){return e?n(e,"expected EOF"):t(e,e)});}),W=function(){function e(e){var t=e.which||e.keyCode,a=n[t],s=[],r;return (e.ctrlKey&&s.push("Ctrl"),e.originalEvent&&e.originalEvent.metaKey&&s.push("Meta"),e.altKey&&s.push("Alt"),e.shiftKey&&s.push("Shift"),r=a||y(t),!s.length&&!a)?r:(s.push(r),s.join("-"))}var n={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"};return function(n,a){function s(e){g=e,clearTimeout(y),y=setTimeout(e);}function r(e){g(),g=t,clearTimeout(y),h.val(e),e&&h[0].select&&h[0].select(),x=!!e;}function o(){var e=h[0];return !!("selectionStart"in e)&&e.selectionStart!==e.selectionEnd}function i(){a.keystroke(e(u),u);}function l(n){u=n,m=null,x&&s(function(n){!(n&&"focusout"===n.type)&&h[0].select&&h[0].select(),g=t,clearTimeout(y);}),i();}function d(t){u&&m&&i(),m=t,s(p);}function p(){if(!o()){var e=h.val();1===e.length?(h.val(""),a.typedText(e)):e&&h[0].select&&h[0].select();}}function c(){var e=h.val();h.val(""),e&&a.paste(e);}var u=null,m=null,h=b(n),f=b(a.container||h),g=t,y;f.bind("keydown keypress input keyup focusout paste",function(t){g(t);});var x=!1;return f.bind({keydown:l,keypress:d,focusout:function(){u=m=null;},paste:function(){h.focus(),s(c);}}),{select:r}}}();A.open(function(e){e.exportText=function(){return this.root.foldChildren("",function(e,t){return e+t.text()})};}),A.open(function(e){e.focusBlurEvents=function(){function e(){clearTimeout(r),s.selection&&s.selection.jQ.addClass("mq-blur"),t();}function t(){s.hide().parent.blur(),n.container.removeClass("mq-focused"),k(window).off("blur",e);}var n=this,a=n.root,s=n.cursor,r;n.textarea.focus(function(){n.blurred=!1,clearTimeout(r),n.container.addClass("mq-focused"),s.parent||s.insAtRightEnd(a),s.selection?(s.selection.jQ.removeClass("mq-blur"),n.selectionChanged()):s.show();}).blur(function(){n.blurred=!0,r=setTimeout(function(){a.postOrder("intentionalBlur"),s.clearSelection().endSelection(),t();}),k(window).on("blur",e);}),n.blurred=!0,s.hide().parent.blur();};}),A.open(function(e){e.keystroke=function(e,t){this.cursor.parent.keystroke(e,t,this);};}),j.open(function(e){e.keystroke=function(t,n,e){var a=e.cursor;switch(t){case"Ctrl-Shift-Backspace":case"Ctrl-Backspace":e.ctrlDeleteDir(C);break;case"Shift-Backspace":case"Backspace":e.backspace();break;case"Esc":case"Tab":return void e.escapeDir(L,t,n);case"Shift-Tab":case"Shift-Esc":return void e.escapeDir(C,t,n);case"End":e.notify("move").cursor.insAtRightEnd(a.parent);break;case"Ctrl-End":e.notify("move").cursor.insAtRightEnd(e.root);break;case"Shift-End":for(;a[L];){ e.selectRight(); }break;case"Ctrl-Shift-End":for(;a[L]||a.parent!==e.root;){ e.selectRight(); }break;case"Home":e.notify("move").cursor.insAtLeftEnd(a.parent);break;case"Ctrl-Home":e.notify("move").cursor.insAtLeftEnd(e.root);break;case"Shift-Home":for(;a[C];){ e.selectLeft(); }break;case"Ctrl-Shift-Home":for(;a[C]||a.parent!==e.root;){ e.selectLeft(); }break;case"Left":e.moveLeft();break;case"Shift-Left":e.selectLeft();break;case"Ctrl-Left":break;case"Right":e.moveRight();break;case"Shift-Right":e.selectRight();break;case"Ctrl-Right":break;case"Up":e.moveUp();break;case"Down":e.moveDown();break;case"Shift-Up":if(a[C]){ for(;a[C];){ e.selectLeft(); } }else { e.selectLeft(); }case"Shift-Down":if(a[L]){ for(;a[L];){ e.selectRight(); } }else { e.selectRight(); }case"Ctrl-Up":break;case"Ctrl-Down":break;case"Ctrl-Shift-Del":case"Ctrl-Del":e.ctrlDeleteDir(L);break;case"Shift-Del":case"Del":e.deleteForward();break;case"Meta-A":case"Ctrl-A":for(e.notify("move").cursor.insAtRightEnd(e.root);a[C];){ e.selectLeft(); }break;default:return;}n.preventDefault(),e.scrollHoriz();},e.moveOutOf=e.moveTowards=e.deleteOutOf=e.deleteTowards=e.unselectInto=e.selectOutOf=e.selectTowards=function(){r("overridden or never called on this node");};}),A.open(function(e){function t(e,t){var n=e.notify("upDown").cursor,a=t+"Into",s=t+"OutOf";return n[L][a]?n.insAtLeftEnd(n[L][a]):n[C][a]?n.insAtRightEnd(n[C][a]):n.parent.bubble(function(e){var t=e[s];if(t&&("function"==typeof t&&(t=e[s](n)),t instanceof j&&n.jumpUpDown(e,t),!0!==t)){ return !1 }}),e}this.onNotify(function(t){("move"===t||"upDown"===t)&&this.show().clearSelection();}),e.escapeDir=function(t,n,a){o(t);var e=this.cursor;if(e.parent!==this.root&&a.preventDefault(),e.parent!==this.root){ return e.parent.moveOutOf(t,e),this.notify("move") }},I.leftRightIntoCmdGoes=function(e){if(e&&"up"!==e&&"down"!==e){ throw"\"up\" or \"down\" required for leftRightIntoCmdGoes option, got \""+e+"\""; }return e},e.moveDir=function(e){o(e);var t=this.cursor,n=t.options.leftRightIntoCmdGoes;return t.selection?t.insDirOf(e,t.selection.ends[e]):t[e]?t[e].moveTowards(e,t,n):t.parent.moveOutOf(e,t,n),this.notify("move")},e.moveLeft=function(){return this.moveDir(C)},e.moveRight=function(){return this.moveDir(L)},e.moveUp=function(){return t(this,"up")},e.moveDown=function(){return t(this,"down")},this.onNotify(function(t){"upDown"!==t&&(this.upDownCache={});}),this.onNotify(function(t){"edit"===t&&this.show().deleteSelection();}),e.deleteDir=function(e){o(e);var t=this.cursor,n=t.selection;return this.notify("edit"),n||(t[e]?t[e].deleteTowards(e,t):t.parent.deleteOutOf(e,t)),t[C].siblingDeleted&&t[C].siblingDeleted(t.options,L),t[L].siblingDeleted&&t[L].siblingDeleted(t.options,C),t.parent.bubble("reflow"),this},e.ctrlDeleteDir=function(e){o(e);var t=this.cursor;return !t[C]||t.selection?ctrlr.deleteDir():(this.notify("edit"),O(t.parent.ends[C],t[C]).remove(),t.insAtDirEnd(C,t.parent),t[C].siblingDeleted&&t[C].siblingDeleted(t.options,L),t[L].siblingDeleted&&t[L].siblingDeleted(t.options,C),t.parent.bubble("reflow"),this)},e.backspace=function(){return this.deleteDir(C)},e.deleteForward=function(){return this.deleteDir(L)},this.onNotify(function(t){"select"!==t&&this.endSelection();}),e.selectDir=function(e){var t=this.notify("select").cursor,n=t.selection;o(e),t.anticursor||t.startSelection();var a=t[e];a?n&&n.ends[e]===a&&t.anticursor[-e]!==a?a.unselectInto(e,t):a.selectTowards(e,t):t.parent.selectOutOf(e,t),t.clearSelection(),t.select()||t.show();},e.selectLeft=function(){return this.selectDir(C)},e.selectRight=function(){return this.selectDir(L)};});var $=function(){function e(e){for(var t=e[0]||K(),n=1;n<e.length;n+=1){ e[n].children().adopt(t,t.ends[L],0); }return t}var t=z.string,n=z.regex,a=z.letter,s=z.any,r=z.optWhitespace,o=z.succeed,i=z.fail,l=a.map(function(e){return re(e)}),d=n(/^[^${}\\_^]/).map(function(e){return V(e)}),p=n(/^[^\\a-eg-zA-Z]/).or(t("\\").then(n(/^[a-z]+/i).or(n(/^\s+/).result(" ")).or(s))).then(function(e){return i("unknown command: \\"+e)}),c=p.or(l).or(d),u=t("{").then(function(){return h}).skip(t("}")),m=r.then(u.or(c.map(function(e){var t=K();return e.adopt(t,0,0),t}))),h=m.many().map(e).skip(r),f=t("[").then(m.then(function(e){return "]"===e.join("latex")?i():o(e)}).many().map(e).skip(r)).skip(t("]")),g=h;return g.block=m,g.optBlock=f,g}();A.open(function(e){e.exportLatex=function(){return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/ig,"$1")},e.writeLatex=function(e){var t=this.notify("edit").cursor,n=z.all,a=z.eof,s=$.skip(a).or(n.result(!1)).parse(e);if(s&&!s.isEmpty()){s.children().adopt(t.parent,t[C],t[L]);var r=s.jQize();r.insertBefore(t.jQ),t[C]=s.ends[L],s.finalizeInsert(t.options,t),s.ends[L][L].siblingCreated&&s.ends[L][L].siblingCreated(t.options,C),s.ends[C][C].siblingCreated&&s.ends[C][C].siblingCreated(t.options,L),t.parent.bubble("reflow");}return this},e.renderLatexMath=function(e){var t=this.root,n=this.cursor,a=z.all,s=z.eof,r=$.skip(s).or(a.result(!1)).parse(e);t.eachChild("postOrder","dispose"),t.ends[C]=t.ends[L]=0,r&&r.children().adopt(t,0,0);var o=t.jQ;if(r){var i=r.join("html");o.html(i),t.jQize(o.children()),t.finalizeInsert(n.options);}else { o.empty(); }delete n.selection,n.insAtRightEnd(t);},e.renderLatexText=function(e){var t=this.root,n=this.cursor;t.jQ.children().slice(1).remove(),t.eachChild("postOrder","dispose"),t.ends[C]=t.ends[L]=0,delete n.selection,n.show().insAtRightEnd(t);var a=z.regex,s=z.string,r=z.eof,o=z.all,l=s("$").then($).skip(s("$").or(r)).map(function(e){var t=te(n);t.createBlocks();var a=t.ends[C];return e.children().adopt(a,0,0),t}),d=s("\\$").result("$"),p=d.or(a(/^[^$]/)).map(V),c=l.or(p).many(),u=c.skip(r).or(o.result(!1)).parse(e);if(u){for(var m=0;m<u.length;m+=1){ u[m].adopt(t,t.ends[L],0); }t.jQize().appendTo(t.jQ),t.finalizeInsert(n.options);}};}),A.open(function(e){Q.p.ignoreNextMousedown=t,e.delegateMouseEvents=function(){var n=this.root.jQ;this.container.bind("mousedown.mathquill",function(a){function s(t){h=k(t.target);}function r(t){p.anticursor||p.startSelection(),d.seek(h,t.pageX,t.pageY).cursor.select(),h=void 0;}function o(t){p.blink=c,p.selection||(d.editable?p.show():u.detach()),i.unbind("mousemove",s),k(t.target.ownerDocument).unbind("mousemove",r).unbind("mouseup",o);}var i=k(a.target).closest(".mq-root-block"),l=j.byId[i.attr("mathquill-block-id")||n.attr("mathquill-block-id")],d=l.controller,p=d.cursor,c=p.blink,u=d.textareaSpan,m=d.textarea;if(a.preventDefault(),a.target.unselectable=!0,!p.options.ignoreNextMousedown(a)){p.options.ignoreNextMousedown=t;var h;d.blurred&&(!d.editable&&i.prepend(u),m.focus()),p.blink=t,d.seek(k(a.target),a.pageX,a.pageY).cursor.startSelection(),i.mousemove(s),k(a.target.ownerDocument).mousemove(r).mouseup(o);}});};}),A.open(function(e){e.seek=function(e,t){var n=this.notify("select").cursor;if(e){var a=e.attr("mathquill-block-id")||e.attr("mathquill-command-id");if(!a){var s=e.parent();a=s.attr("mathquill-block-id")||s.attr("mathquill-command-id");}}var o=a?j.byId[a]:this.root;return r("nodeId is the id of some Node that exists",o),n.clearSelection().show(),o.seek(t,n),this.scrollHoriz(),this};}),A.open(function(e){e.scrollHoriz=function(){var e=this.cursor,t=e.selection,n=this.root.jQ[0].getBoundingClientRect();if(!t){var a=e.jQ[0].getBoundingClientRect().left;if(a>n.right-20){ var s=a-(n.right-20); }else if(a<n.left+20){ var s=a-(n.left+20); }else { return }}else{var r=t.jQ[0].getBoundingClientRect(),o=r.left-(n.left+20),i=r.right-(n.right-20);if(t.ends[C]===e[L]){if(0>o){ var s=o; }else{if(!(0<i)){ return; }if(r.left-i<n.left+20){ var s=o; }else { var s=i; }}}else if(0<i){ var s=i; }else{if(!(0>o)){ return; }if(r.right-o>n.right-20){ var s=i; }else { var s=o; }}}this.root.jQ.stop().animate({scrollLeft:"+="+s},100);};}),A.open(function(e){Q.p.substituteTextarea=function(){return k("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0]},e.createTextarea=function(){var e=this.textareaSpan=k("<span class=\"mq-textarea\"></span>"),t=this.options.substituteTextarea();if(!t.nodeType){ throw"substituteTextarea() must return a DOM element, got "+t; }t=this.textarea=k(t).appendTo(e);var n=this;n.cursor.selectionChanged=function(){n.selectionChanged();},n.container.bind("copy",function(){n.setTextareaSelection();});},e.selectionChanged=function(){var e=this;ye(e.container[0]),e.textareaSelectionTimeout===void 0&&(e.textareaSelectionTimeout=setTimeout(function(){e.setTextareaSelection();}));},e.setTextareaSelection=function(){this.textareaSelectionTimeout=void 0;var e="";this.cursor.selection&&(e=this.cursor.selection.join("latex"),this.options.statelessClipboard&&(e="$"+e+"$")),this.selectFn(e);},e.staticMathTextareaEvents=function(){function e(){r.detach(),t.blurred=!0;}var t=this,n=t.root,a=t.cursor,s=t.textarea,r=t.textareaSpan;this.container.prepend("<span class=\"mq-selectable\">$"+t.exportLatex()+"$</span>"),t.blurred=!0,s.bind("cut paste",!1).focus(function(){t.blurred=!1;}).blur(function(){a.selection&&a.selection.clear(),setTimeout(e);}),t.selectFn=function(e){s.val(e),e&&s.select();};},e.editablesTextareaEvents=function(){var e=this,t=e.root,n=e.cursor,a=e.textarea,s=e.textareaSpan,r=W(a,this);this.selectFn=function(e){r.select(e);},this.container.prepend(s).on("cut",function(){n.selection&&setTimeout(function(){e.notify("edit"),n.parent.bubble("reflow");});}),this.focusBlurEvents();},e.typedText=function(e){if("\n"===e){ return this.handle("enter"); }var t=this.notify().cursor;t.parent.write(t,e),this.scrollHoriz();},e.paste=function(e){this.options.statelessClipboard&&("$"===e.slice(0,1)&&"$"===e.slice(-1)?e=e.slice(1,-1):e="\\text{"+e+"}"),this.writeLatex(e).cursor.show();};});var U=T(j,function(e){e.finalizeInsert=function(e,t){var n=this;n.postOrder("finalizeTree",e),n.postOrder("contactWeld",t),n.postOrder("blur"),n.postOrder("reflow"),n[L].siblingCreated&&n[L].siblingCreated(e,C),n[C].siblingCreated&&n[C].siblingCreated(e,L),n.bubble("reflow");};}),X=T(U,function(e,t){e.init=function(e,n,a){var s=this;t.init.call(s),s.ctrlSeq||(s.ctrlSeq=e),n&&(s.htmlTemplate=n),a&&(s.textTemplate=a);},e.replaces=function(e){e.disown(),this.replacedFragment=e;},e.isEmpty=function(){return this.foldChildren(!0,function(e,t){return e&&t.isEmpty()})},e.parser=function(){var e=$.block,t=this;return e.times(t.numBlocks()).map(function(e){t.blocks=e;for(var n=0;n<e.length;n+=1){ e[n].adopt(t,t.ends[L],0); }return t})},e.createLeftOf=function(e){var n=this,a=n.replacedFragment;n.createBlocks(),t.createLeftOf.call(n,e),a&&(a.adopt(n.ends[C],0,0),a.jQ.appendTo(n.ends[C].jQ)),n.finalizeInsert(e.options),n.placeCursor(e);},e.createBlocks=function(){for(var e=this,t=e.numBlocks(),n=e.blocks=Array(t),a=0,s;a<t;a+=1){ s=n[a]=K(),s.adopt(e,e.ends[L],0); }},e.placeCursor=function(e){e.insAtRightEnd(this.foldChildren(this.ends[C],function(e,t){return e.isEmpty()?e:t}));},e.moveTowards=function(e,t,n){var a=n&&this[n+"Into"];t.insAtDirEnd(-e,a||this.ends[-e]);},e.deleteTowards=function(e,t){this.isEmpty()?t[e]=this.remove()[e]:this.moveTowards(e,t,null);},e.selectTowards=function(e,t){t[-e]=this,t[e]=this[e];},e.selectChildren=function(){return E(this,this)},e.unselectInto=function(e,t){t.insAtDirEnd(-e,t.anticursor.ancestors[this.id]);},e.seek=function(e,t){function n(e){var t={};return t[C]=e.jQ.offset().left,t[L]=t[C]+e.jQ.outerWidth(),t}var a=this,s=n(a);if(e<s[C]){ return t.insLeftOf(a); }if(e>s[L]){ return t.insRightOf(a); }var r=s[C];a.eachChild(function(o){var i=n(o);return e<i[C]?(e-r<i[C]-e?o[C]?t.insAtRightEnd(o[C]):t.insLeftOf(a):t.insAtLeftEnd(o),!1):e>i[L]?void(o[L]?r=i[L]:s[L]-e<e-i[L]?t.insRightOf(a):t.insAtRightEnd(o)):(o.seek(e,t),!1)});},e.numBlocks=function(){var e=this.htmlTemplate.match(/&\d+/g);return e?e.length:0},e.html=function(){var e=this,t=e.blocks,n=" mathquill-command-id="+e.id,a=e.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);r("no unmatched angle brackets",a.join("")===this.htmlTemplate);for(var s=0,o=a[0];o;s+=1,o=a[s]){ if("/>"===o.slice(-2)){ a[s]=o.slice(0,-2)+n+"/>"; }else if("<"===o.charAt(0)){r("not an unmatched top-level close tag","/"!==o.charAt(1)),a[s]=o.slice(0,-1)+n+">";var l=1;do { s+=1,o=a[s],r("no missing close tags",o),"</"===o.slice(0,2)?l-=1:"<"===o.charAt(0)&&"/>"!==o.slice(-2)&&(l+=1); }while(0<l)} }return a.join("").replace(/>&(\d+)/g,function(e,n){return " mathquill-block-id="+t[n].id+">"+t[n].join("html")})},e.latex=function(){return this.foldChildren(this.ctrlSeq,function(e,t){return e+"{"+(t.latex()||" ")+"}"})},e.textTemplate=[""],e.text=function(){var e=this,t=0;return e.foldChildren(e.textTemplate[t],function(n,a){t+=1;var s=a.text();return n&&"("===e.textTemplate[t]&&"("===s[0]&&")"===s.slice(-1)?n+s.slice(1,-1)+e.textTemplate[t]:n+a.text()+(e.textTemplate[t]||"")})};}),G=T(X,function(e,n){e.init=function(e,t,a){a||(a=e&&1<e.length?e.slice(1):e),n.init.call(this,e,t,[a]);},e.parser=function(){return z.succeed(this)},e.numBlocks=function(){return 0},e.replaces=function(e){e.remove();},e.createBlocks=t,e.moveTowards=function(e,t){t.jQ.insDirOf(e,this.jQ),t[-e]=this,t[e]=this[e];},e.deleteTowards=function(e,t){t[e]=this.remove()[e];},e.seek=function(e,t){e-this.jQ.offset().left<this.jQ.outerWidth()/2?t.insLeftOf(this):t.insRightOf(this);},e.latex=function(){return this.ctrlSeq},e.text=function(){return this.textTemplate},e.placeCursor=t,e.isEmpty=function(){return !0};}),V=T(G,function(e,t){e.init=function(e,n){t.init.call(this,e,"<span>"+(n||e)+"</span>");};}),Y=T(G,function(e,t){e.init=function(e,n,a){t.init.call(this,e,"<span class=\"mq-binary-operator\">"+n+"</span>",a);};}),K=T(U,function(e,t){e.join=function(e){return this.foldChildren("",function(t,n){return t+n[e]()})},e.html=function(){return this.join("html")},e.latex=function(){return this.join("latex")},e.text=function(){return this.ends[C]===this.ends[L]&&0!==this.ends[C]?this.ends[C].text():this.join("text")},e.keystroke=function(n,a,e){return e.options.spaceBehavesLikeTab&&("Spacebar"===n||"Shift-Spacebar"===n)?(a.preventDefault(),void e.escapeDir("Shift-Spacebar"===n?C:L,n,a)):t.keystroke.apply(this,arguments)},e.moveOutOf=function(e,t,n){var a=n&&this.parent[n+"Into"];!a&&this[e]?t.insAtDirEnd(-e,this[e]):t.insDirOf(e,this.parent);},e.selectOutOf=function(e,t){t.insDirOf(e,this.parent);},e.deleteOutOf=function(e,t){t.unwrapGramp();},e.seek=function(e,t){var n=this.ends[L];if(!n||n.jQ.offset().left+n.jQ.outerWidth()<e){ return t.insAtRightEnd(this); }if(e<this.ends[C].jQ.offset().left){ return t.insAtLeftEnd(this); }for(;e<n.jQ.offset().left;){ n=n[C]; }return n.seek(e,t)},e.chToCmd=function(e){var t;return e.match(/^[a-eg-zA-Z]$/)?re(e):/^\d$/.test(e)?ae(e):(t=D[e]||S[e])?t(e):V(e)},e.write=function(e,t){var n=this.chToCmd(t);e.selection&&n.replaces(e.replaceSelection()),n.createLeftOf(e.show());},e.focus=function(){return this.jQ.addClass("mq-hasCursor"),this.jQ.removeClass("mq-empty"),this},e.blur=function(){return this.jQ.removeClass("mq-hasCursor"),this.isEmpty()&&this.jQ.addClass("mq-empty"),this};});N.StaticMath=function(e){return T(e.AbstractMathQuill,function(t,n){this.RootBlock=K,t.__mathquillify=function(){return n.__mathquillify.call(this,"mq-math-mode"),this.__controller.delegateMouseEvents(),this.__controller.staticMathTextareaEvents(),this},t.init=function(){n.init.apply(this,arguments),this.__controller.root.postOrder("registerInnerField",this.innerFields=[],e.MathField);},t.latex=function(){var t=n.latex.apply(this,arguments);return 0<arguments.length&&this.__controller.root.postOrder("registerInnerField",this.innerFields=[],e.MathField),t};})};var J=T(K,c);N.MathField=function(e){return T(e.EditableField,function(e,n){this.RootBlock=J,e.__mathquillify=function(e,a){return this.config(e),1<a&&(this.__controller.root.reflow=t),n.__mathquillify.call(this,"mq-editable-field mq-math-mode"),delete this.__controller.root.reflow,this};})};var Z=T(j,function(t,n){function a(e){e.jQ[0].normalize();var t=e.jQ[0].firstChild;if(t){r("only node in TextBlock span is Text node",3===t.nodeType);var n=ee(t.data);return n.jQadd(t),e.children().disown(),n.adopt(e,0,0)}}t.ctrlSeq="\\text",t.replaces=function(e){e instanceof O?this.replacedText=e.remove().jQ.text():"string"==typeof e&&(this.replacedText=e);},t.jQadd=function(e){n.jQadd.call(this,e),this.ends[C]&&this.ends[C].jQadd(this.jQ[0].firstChild);},t.createLeftOf=function(e){var t=this;if(n.createLeftOf.call(this,e),t[L].siblingCreated&&t[L].siblingCreated(e.options,C),t[C].siblingCreated&&t[C].siblingCreated(e.options,L),t.bubble("reflow"),e.insAtRightEnd(t),t.replacedText){ for(var a=0;a<t.replacedText.length;a+=1){ t.write(e,t.replacedText.charAt(a)); } }},t.parser=function(){var e=this,t=z.string,n=z.regex,a=z.optWhitespace;return a.then(t("{")).then(n(/^[^}]*/)).skip(t("}")).map(function(t){return 0===t.length?O():(ee(t).adopt(e,0,0),e)})},t.textContents=function(){return this.foldChildren("",function(e,t){return e+t.text})},t.text=function(){return "\""+this.textContents()+"\""},t.latex=function(){var e=this.textContents();return 0===e.length?"":"\\text{"+e+"}"},t.html=function(){return "<span class=\"mq-text-mode\" mathquill-command-id="+this.id+">"+this.textContents()+"</span>"},t.moveTowards=function(e,t){t.insAtDirEnd(-e,this);},t.moveOutOf=function(e,t){t.insDirOf(e,this);},t.unselectInto=t.moveTowards,t.selectTowards=X.prototype.selectTowards,t.deleteTowards=X.prototype.deleteTowards,t.selectOutOf=function(e,t){t.insDirOf(e,this);},t.deleteOutOf=function(e,t){this.isEmpty()&&t.insRightOf(this);},t.write=function(e,t){if(e.show().deleteSelection(),"$"!==t){ e[C]?e[C].appendText(t):ee(t).createLeftOf(e); }else if(this.isEmpty()){ e.insRightOf(this),V("\\$","$").createLeftOf(e); }else if(!e[L]){ e.insRightOf(this); }else if(!e[C]){ e.insLeftOf(this); }else{var a=Z(),s=this.ends[C];s.disown().jQ.detach(),s.adopt(a,0,0),e.insLeftOf(this),n.createLeftOf.call(a,e);}},t.seek=function(t,n){n.hide();var s=a(this),r=this.jQ.width()/this.text.length,o=g((t-this.jQ.offset().left)/r);0>=o?n.insAtLeftEnd(this):o>=s.text.length?n.insAtRightEnd(this):n.insLeftOf(s.splitRight(o));for(var i=t-n.show().offset().left,l=i&&0>i?C:L,d=l;n[l]&&0<i*d;){ n[l].moveTowards(l,n),d=i,i=t-n.offset().left; }if(l*i<-l*d&&n[-l].moveTowards(-l,n),!n.anticursor){ this.anticursorPosition=n[C]&&n[C].text.length; }else if(n.anticursor.parent===this){var p=n[C]&&n[C].text.length;if(this.anticursorPosition===p){ n.anticursor=e.copy(n); }else{if(this.anticursorPosition<p){var c=n[C].splitRight(this.anticursorPosition);n[C]=c;}else { var c=n[L].splitRight(this.anticursorPosition-p); }n.anticursor=e(this,c[C],c);}}},t.blur=function(e){K.prototype.blur.call(this);e&&(""===this.textContents()?(this.remove(),e[C]===this?e[C]=this[C]:e[L]===this&&(e[L]=this[L])):a(this));},t.focus=K.prototype.focus;}),ee=T(j,function(e,t){function n(e,t){return t.charAt(e===C?0:-1+t.length)}e.init=function(e){t.init.call(this),this.text=e;},e.jQadd=function(e){this.dom=e,this.jQ=k(e);},e.jQize=function(){return this.jQadd(document.createTextNode(this.text))},e.appendText=function(e){this.text+=e,this.dom.appendData(e);},e.prependText=function(e){this.text=e+this.text,this.dom.insertData(0,e);},e.insTextAtDirEnd=function(e,t){o(t),t===L?this.appendText(e):this.prependText(e);},e.splitRight=function(e){var t=ee(this.text.slice(e)).adopt(this.parent,this,this[L]);return t.jQadd(this.dom.splitText(e)),this.text=this.text.slice(0,e),t},e.moveTowards=function(e,t){o(e);var a=n(-e,this.text),s=this[-e];return s?s.insTextAtDirEnd(a,e):ee(a).createDir(-e,t),this.deleteTowards(e,t)},e.latex=function(){return this.text},e.deleteTowards=function(e,t){1<this.text.length?e===L?(this.dom.deleteData(0,1),this.text=this.text.slice(1)):(this.dom.deleteData(-1+this.text.length,1),this.text=this.text.slice(0,-1)):(this.remove(),this.jQ.remove(),t[e]=this[e]);},e.selectTowards=function(e,t){o(e);var a=t.anticursor,s=n(-e,this.text);if(a[e]===this){var r=ee(s).createDir(e,t);a[e]=r,t.insDirOf(e,r);}else{var i=this[-e];if(i){ i.insTextAtDirEnd(s,e); }else{var r=ee(s).createDir(-e,t);r.jQ.insDirOf(-e,t.selection.jQ);}1===this.text.length&&a[-e]===this&&(a[-e]=this[-e]);}return this.deleteTowards(e,t)};});D.$=S.text=S.textnormal=S.textrm=S.textup=S.textmd=Z,S.em=S.italic=S.italics=S.emph=S.textit=S.textsl=u("\\textit","i","class=\"mq-text-mode\""),S.strong=S.bold=S.textbf=u("\\textbf","b","class=\"mq-text-mode\""),S.sf=S.textsf=u("\\textsf","span","class=\"mq-sans-serif mq-text-mode\""),S.tt=S.texttt=u("\\texttt","span","class=\"mq-monospace mq-text-mode\""),S.textsc=u("\\textsc","span","style=\"font-variant:small-caps\" class=\"mq-text-mode\""),S.uppercase=u("\\uppercase","span","style=\"text-transform:uppercase\" class=\"mq-text-mode\""),S.lowercase=u("\\lowercase","span","style=\"text-transform:lowercase\" class=\"mq-text-mode\"");var te=T(X,function(e,t){e.init=function(e){t.init.call(this,"$"),this.cursor=e;},e.htmlTemplate="<span class=\"mq-math-mode\">&0</span>",e.createBlocks=function(){t.createBlocks.call(this),this.ends[C].cursor=this.cursor,this.ends[C].write=function(e,t){"$"===t?this.isEmpty()?(e.insRightOf(this.parent),this.parent.deleteTowards(dir,e),V("\\$","$").createLeftOf(e.show())):e[L]?e[C]?K.prototype.write.call(this,e,t):e.insLeftOf(this.parent):e.insRightOf(this.parent):K.prototype.write.call(this,e,t);};},e.latex=function(){return "$"+this.ends[C].latex()+"$"};}),ne=T(J,function(e,t){e.keystroke=function(e){return "Spacebar"===e||"Shift-Spacebar"===e?void 0:t.keystroke.apply(this,arguments)},e.write=function(e,t){if(e.show().deleteSelection(),"$"===t){ te(e).createLeftOf(e); }else{var n;"<"===t?n="&lt;":">"==t&&(n="&gt;"),V(t,n).createLeftOf(e);}};});N.TextField=function(e){return T(e.EditableField,function(e,t){this.RootBlock=ne,e.__mathquillify=function(){return t.__mathquillify.call(this,"mq-editable-field mq-text-mode")},e.latex=function(e){return 0<arguments.length?(this.__controller.renderLatexText(e),this.__controller.blurred&&this.__controller.cursor.hide().parent.blur(),this):this.__controller.exportLatex()};})},S.notin=S.cong=S.equiv=S.oplus=S.otimes=T(Y,function(e,t){e.init=function(e){t.init.call(this,"\\"+e+" ","&"+e+";");};}),S["\u2260"]=S.ne=S.neq=s(Y,"\\ne ","&ne;"),S.ast=S.star=S.loast=S.lowast=s(Y,"\\ast ","&lowast;"),S.therefor=S.therefore=s(Y,"\\therefore ","&there4;"),S.cuz=S.because=s(Y,"\\because ","&#8757;"),S.prop=S.propto=s(Y,"\\propto ","&prop;"),S["\u2248"]=S.asymp=S.approx=s(Y,"\\approx ","&asymp;"),S.isin=S["in"]=s(Y,"\\in ","&isin;"),S.ni=S.contains=s(Y,"\\ni ","&ni;"),S.notni=S.niton=S.notcontains=S.doesnotcontain=s(Y,"\\not\\ni ","&#8716;"),S.sub=S.subset=s(Y,"\\subset ","&sub;"),S.sup=S.supset=S.superset=s(Y,"\\supset ","&sup;"),S.nsub=S.notsub=S.nsubset=S.notsubset=s(Y,"\\not\\subset ","&#8836;"),S.nsup=S.notsup=S.nsupset=S.notsupset=S.nsuperset=S.notsuperset=s(Y,"\\not\\supset ","&#8837;"),S.sube=S.subeq=S.subsete=S.subseteq=s(Y,"\\subseteq ","&sube;"),S.supe=S.supeq=S.supsete=S.supseteq=S.supersete=S.superseteq=s(Y,"\\supseteq ","&supe;"),S.nsube=S.nsubeq=S.notsube=S.notsubeq=S.nsubsete=S.nsubseteq=S.notsubsete=S.notsubseteq=s(Y,"\\not\\subseteq ","&#8840;"),S.nsupe=S.nsupeq=S.notsupe=S.notsupeq=S.nsupsete=S.nsupseteq=S.notsupsete=S.notsupseteq=S.nsupersete=S.nsuperseteq=S.notsupersete=S.notsuperseteq=s(Y,"\\not\\supseteq ","&#8841;"),S.N=S.naturals=S.Naturals=s(V,"\\mathbb{N}","&#8469;"),S.P=S.primes=S.Primes=S.projective=S.Projective=S.probability=S.Probability=s(V,"\\mathbb{P}","&#8473;"),S.Z=S.integers=S.Integers=s(V,"\\mathbb{Z}","&#8484;"),S.Q=S.rationals=S.Rationals=s(V,"\\mathbb{Q}","&#8474;"),S.R=S.reals=S.Reals=s(V,"\\mathbb{R}","&#8477;"),S.C=S.complex=S.Complex=S.complexes=S.Complexes=S.complexplane=S.Complexplane=S.ComplexPlane=s(V,"\\mathbb{C}","&#8450;"),S.H=S.Hamiltonian=S.quaternions=S.Quaternions=s(V,"\\mathbb{H}","&#8461;"),S.quad=S.emsp=s(V,"\\quad ","    "),S.qquad=s(V,"\\qquad ","        "),S.diamond=s(V,"\\diamond ","&#9671;"),S.bigtriangleup=s(V,"\\bigtriangleup ","&#9651;"),S.ominus=s(V,"\\ominus ","&#8854;"),S.uplus=s(V,"\\uplus ","&#8846;"),S.bigtriangledown=s(V,"\\bigtriangledown ","&#9661;"),S.sqcap=s(V,"\\sqcap ","&#8851;"),S.triangleleft=s(V,"\\triangleleft ","&#8882;"),S.sqcup=s(V,"\\sqcup ","&#8852;"),S.triangleright=s(V,"\\triangleright ","&#8883;"),S.odot=S.circledot=s(V,"\\odot ","&#8857;"),S.bigcirc=s(V,"\\bigcirc ","&#9711;"),S.dagger=s(V,"\\dagger ","&#0134;"),S.ddagger=s(V,"\\ddagger ","&#135;"),S.wr=s(V,"\\wr ","&#8768;"),S.amalg=s(V,"\\amalg ","&#8720;"),S.models=s(V,"\\models ","&#8872;"),S.prec=s(V,"\\prec ","&#8826;"),S.succ=s(V,"\\succ ","&#8827;"),S.preceq=s(V,"\\preceq ","&#8828;"),S.succeq=s(V,"\\succeq ","&#8829;"),S.simeq=s(V,"\\simeq ","&#8771;"),S.mid=s(V,"\\mid ","&#8739;"),S.ll=s(V,"\\ll ","&#8810;"),S.gg=s(V,"\\gg ","&#8811;"),S.parallel=s(V,"\\parallel ","&#8741;"),S.nparallel=s(V,"\\nparallel ","&#8742;"),S.bowtie=s(V,"\\bowtie ","&#8904;"),S.sqsubset=s(V,"\\sqsubset ","&#8847;"),S.sqsupset=s(V,"\\sqsupset ","&#8848;"),S.smile=s(V,"\\smile ","&#8995;"),S.sqsubseteq=s(V,"\\sqsubseteq ","&#8849;"),S.sqsupseteq=s(V,"\\sqsupseteq ","&#8850;"),S.doteq=s(V,"\\doteq ","&#8784;"),S.frown=s(V,"\\frown ","&#8994;"),S.vdash=s(V,"\\vdash ","&#8870;"),S.dashv=s(V,"\\dashv ","&#8867;"),S.nless=s(V,"\\nless ","&#8814;"),S.ngtr=s(V,"\\ngtr ","&#8815;"),S.longleftarrow=s(V,"\\longleftarrow ","&#8592;"),S.longrightarrow=s(V,"\\longrightarrow ","&#8594;"),S.Longleftarrow=s(V,"\\Longleftarrow ","&#8656;"),S.Longrightarrow=s(V,"\\Longrightarrow ","&#8658;"),S.longleftrightarrow=s(V,"\\longleftrightarrow ","&#8596;"),S.updownarrow=s(V,"\\updownarrow ","&#8597;"),S.Longleftrightarrow=s(V,"\\Longleftrightarrow ","&#8660;"),S.Updownarrow=s(V,"\\Updownarrow ","&#8661;"),S.mapsto=s(V,"\\mapsto ","&#8614;"),S.nearrow=s(V,"\\nearrow ","&#8599;"),S.hookleftarrow=s(V,"\\hookleftarrow ","&#8617;"),S.hookrightarrow=s(V,"\\hookrightarrow ","&#8618;"),S.searrow=s(V,"\\searrow ","&#8600;"),S.leftharpoonup=s(V,"\\leftharpoonup ","&#8636;"),S.rightharpoonup=s(V,"\\rightharpoonup ","&#8640;"),S.swarrow=s(V,"\\swarrow ","&#8601;"),S.leftharpoondown=s(V,"\\leftharpoondown ","&#8637;"),S.rightharpoondown=s(V,"\\rightharpoondown ","&#8641;"),S.nwarrow=s(V,"\\nwarrow ","&#8598;"),S.ldots=s(V,"\\ldots ","&#8230;"),S.cdots=s(V,"\\cdots ","&#8943;"),S.vdots=s(V,"\\vdots ","&#8942;"),S.ddots=s(V,"\\ddots ","&#8945;"),S.surd=s(V,"\\surd ","&#8730;"),S.triangle=s(V,"\\triangle ","&#9651;"),S.ell=s(V,"\\ell ","&#8467;"),S.top=s(V,"\\top ","&#8868;"),S.flat=s(V,"\\flat ","&#9837;"),S.natural=s(V,"\\natural ","&#9838;"),S.sharp=s(V,"\\sharp ","&#9839;"),S.wp=s(V,"\\wp ","&#8472;"),S.bot=s(V,"\\bot ","&#8869;"),S.clubsuit=s(V,"\\clubsuit ","&#9827;"),S.diamondsuit=s(V,"\\diamondsuit ","&#9826;"),S.heartsuit=s(V,"\\heartsuit ","&#9825;"),S.spadesuit=s(V,"\\spadesuit ","&#9824;"),S.parallelogram=s(V,"\\parallelogram ","&#9649;"),S.square=s(V,"\\square ","&#11036;"),S.oint=s(V,"\\oint ","&#8750;"),S.bigcap=s(V,"\\bigcap ","&#8745;"),S.bigcup=s(V,"\\bigcup ","&#8746;"),S.bigsqcup=s(V,"\\bigsqcup ","&#8852;"),S.bigvee=s(V,"\\bigvee ","&#8744;"),S.bigwedge=s(V,"\\bigwedge ","&#8743;"),S.bigodot=s(V,"\\bigodot ","&#8857;"),S.bigotimes=s(V,"\\bigotimes ","&#8855;"),S.bigoplus=s(V,"\\bigoplus ","&#8853;"),S.biguplus=s(V,"\\biguplus ","&#8846;"),S.lfloor=s(V,"\\lfloor ","&#8970;"),S.rfloor=s(V,"\\rfloor ","&#8971;"),S.lceil=s(V,"\\lceil ","&#8968;"),S.rceil=s(V,"\\rceil ","&#8969;"),S.opencurlybrace=S.lbrace=s(V,"\\lbrace ","{"),S.closecurlybrace=S.rbrace=s(V,"\\rbrace ","}"),S.lbrack=s(V,"["),S.rbrack=s(V,"]"),S.slash=s(V,"/"),S.vert=s(V,"|"),S.perp=S.perpendicular=s(V,"\\perp ","&perp;"),S.nabla=S.del=s(V,"\\nabla ","&nabla;"),S.hbar=s(V,"\\hbar ","&#8463;"),S.AA=S.Angstrom=S.angstrom=s(V,"\\text\\AA ","&#8491;"),S.ring=S.circ=S.circle=s(V,"\\circ ","&#8728;"),S.bull=S.bullet=s(V,"\\bullet ","&bull;"),S.setminus=S.smallsetminus=s(V,"\\setminus ","&#8726;"),S.not=S["\xAC"]=S.neg=s(V,"\\neg ","&not;"),S["\u2026"]=S.dots=S.ellip=S.hellip=S.ellipsis=S.hellipsis=s(V,"\\dots ","&hellip;"),S.converges=S.darr=S.dnarr=S.dnarrow=S.downarrow=s(V,"\\downarrow ","&darr;"),S.dArr=S.dnArr=S.dnArrow=S.Downarrow=s(V,"\\Downarrow ","&dArr;"),S.diverges=S.uarr=S.uparrow=s(V,"\\uparrow ","&uarr;"),S.uArr=S.Uparrow=s(V,"\\Uparrow ","&uArr;"),S.to=s(Y,"\\to ","&rarr;"),S.rarr=S.rightarrow=s(V,"\\rightarrow ","&rarr;"),S.implies=s(Y,"\\Rightarrow ","&rArr;"),S.rArr=S.Rightarrow=s(V,"\\Rightarrow ","&rArr;"),S.gets=s(Y,"\\gets ","&larr;"),S.larr=S.leftarrow=s(V,"\\leftarrow ","&larr;"),S.impliedby=s(Y,"\\Leftarrow ","&lArr;"),S.lArr=S.Leftarrow=s(V,"\\Leftarrow ","&lArr;"),S.harr=S.lrarr=S.leftrightarrow=s(V,"\\leftrightarrow ","&harr;"),S.iff=s(Y,"\\Leftrightarrow ","&hArr;"),S.hArr=S.lrArr=S.Leftrightarrow=s(V,"\\Leftrightarrow ","&hArr;"),S.Re=S.Real=S.real=s(V,"\\Re ","&real;"),S.Im=S.imag=S.image=S.imagin=S.imaginary=S.Imaginary=s(V,"\\Im ","&image;"),S.part=S.partial=s(V,"\\partial ","&part;"),S.infty=S.infin=S.infinity=s(V,"\\infty ","&infin;"),S.alef=S.alefsym=S.aleph=S.alephsym=s(V,"\\aleph ","&alefsym;"),S.xist=S.xists=S.exist=S.exists=s(V,"\\exists ","&exist;"),S.nexists=S.nexist=s(V,"\\nexists ","&#8708;"),S.and=S.land=S.wedge=s(V,"\\wedge ","&and;"),S.or=S.lor=S.vee=s(V,"\\vee ","&or;"),S.o=S.O=S.empty=S.emptyset=S.oslash=S.Oslash=S.nothing=S.varnothing=s(Y,"\\varnothing ","&empty;"),S.cup=S.union=s(Y,"\\cup ","&cup;"),S.cap=S.intersect=S.intersection=s(Y,"\\cap ","&cap;"),S.deg=S.degree=s(V,"\\degree ","&deg;"),S.ang=S.angle=s(V,"\\angle ","&ang;"),S.measuredangle=s(V,"\\measuredangle ","&#8737;");var ae=T(V,function(e,t){e.createLeftOf=function(e){e.options.autoSubscriptNumerals&&e.parent!==e.parent.parent.sub&&(e[C]instanceof se&&!1!==e[C].isItalic||e[C]instanceof je&&e[C][C]instanceof se&&!1!==e[C][C].isItalic)?(S._().createLeftOf(e),t.createLeftOf.call(this,e),e.insRightOf(e.parent.parent)):t.createLeftOf.call(this,e);};}),se=T(G,function(e,t){e.init=function(e,n){t.init.call(this,e,"<var>"+(n||e)+"</var>");},e.text=function(){var e=this.ctrlSeq;return !this[C]||this[C]instanceof se||this[C]instanceof Y||"\\ "===this[C].ctrlSeq||(e="*"+e),!this[L]||this[L]instanceof Y||this[L]instanceof je||(e+="*"),e};});Q.p.autoCommands={_maxLength:0},I.autoCommands=function(e){if(!/^[a-z]+(?: [a-z]+)*$/i.test(e)){ throw"\""+e+"\" not a space-delimited list of only letters"; }for(var t=e.split(" "),n={},a=0,s=0,r;s<t.length;s+=1){if(r=t[s],2>r.length){ throw"autocommand \""+r+"\" not minimum length of 2"; }if(S[r]===de){ throw"\""+r+"\" is a built-in operator name"; }n[r]=1,a=w(a,r.length);}return n._maxLength=a,n};var re=T(se,function(e,t){function n(e){return !e||e instanceof Y||e instanceof Oe}e.init=function(e){return t.init.call(this,this.letter=e)},e.createLeftOf=function(e){t.createLeftOf.apply(this,arguments);var n=e.options.autoCommands,a=n._maxLength;if(0<a){for(var s="",r=this,o=0;r instanceof re&&r.ctrlSeq===r.letter&&o<a;){ s=r.letter+s,r=r[C],o+=1; }for(;s.length;){if(n.hasOwnProperty(s)){for(var o=1,r=this;o<s.length;o+=1,r=r[C]){ }return O(r,this).remove(),e[C]=r[C],S[s](s).createLeftOf(e)}s=s.slice(1);}}},e.italicize=function(e){return this.isItalic=e,this.jQ.toggleClass("mq-operator-name",!e),this},e.finalizeTree=e.siblingDeleted=e.siblingCreated=function(e,t){t!==C&&this[L]instanceof re||this.autoUnItalicize(e);},e.autoUnItalicize=function(e){var t=e.autoOperatorNames;if(0!==t._maxLength){for(var a=this.letter,s=this[C];s instanceof re;s=s[C]){ a=s.letter+a; }for(var o=this[L];o instanceof re;o=o[L]){ a+=o.letter; }O(s[L]||this.parent.ends[C],o[C]||this.parent.ends[L]).each(function(e){e.italicize(!0).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"),e.ctrlSeq=e.letter;});outer:for(var d=0,p=s[L]||this.parent.ends[C];d<a.length;d+=1,p=p[L]){ for(var c=x(t._maxLength,a.length-d),u;0<c;c-=1){ if(u=a.slice(d,d+c),t.hasOwnProperty(u)){for(var m=0,h=p;m<c;m+=1,h=h[L]){h.italicize(!1);var f=h;}var g=oe.hasOwnProperty(u);if(p.ctrlSeq=(g?"\\":"\\operatorname{")+p.ctrlSeq,f.ctrlSeq+=g?" ":"}",le.hasOwnProperty(u)&&f[C][C][C].jQ.addClass("mq-last"),n(p[C])||p.jQ.addClass("mq-first"),!n(f[L])){ if(f[L]instanceof je){var y=f[L],b=y.siblingCreated=y.siblingDeleted=function(){y.jQ.toggleClass("mq-after-operator-name",!(y[L]instanceof Ne));};b();}else { f.jQ.toggleClass("mq-last",!(f[L]instanceof Ne)); } }d+=c-1,p=f;continue outer} } }}};}),oe={},ie=Q.p.autoOperatorNames={_maxLength:9},le={limsup:1,liminf:1,projlim:1,injlim:1};(function(){for(var e="arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" "),t=0;t<e.length;t+=1){ oe[e[t]]=ie[e[t]]=1; }for(var n=["sin","cos","tan","arcsin","arccos","arctan","sinh","cosh","tanh","sec","csc","cot","coth"],t=0;t<n.length;t+=1){ oe[n[t]]=1; }for(var a=["sin","cos","tan","sec","cosec","csc","cotan","cot","ctg"],t=0;t<a.length;t+=1){ ie[a[t]]=ie["arc"+a[t]]=ie[a[t]+"h"]=ie["ar"+a[t]+"h"]=ie["arc"+a[t]+"h"]=1; }for(var s=["gcf","hcf","lcm","proj","span"],t=0;t<s.length;t+=1){ ie[s[t]]=1; }})(),I.autoOperatorNames=function(e){if(!/^[a-z]+(?: [a-z]+)*$/i.test(e)){ throw"\""+e+"\" not a space-delimited list of only letters"; }for(var t=e.split(" "),n={},a=0,s=0,r;s<t.length;s+=1){if(r=t[s],2>r.length){ throw"\""+r+"\" not minimum length of 2"; }n[r]=1,a=w(a,r.length);}return n._maxLength=a,n};var de=T(G,function(e){e.init=function(e){this.ctrlSeq=e;},e.createLeftOf=function(e){for(var t=this.ctrlSeq,n=0;n<t.length;n+=1){ re(t.charAt(n)).createLeftOf(e); }},e.parser=function(){for(var e=this.ctrlSeq,t=K(),n=0;n<e.length;n+=1){ re(e.charAt(n)).adopt(t,t.ends[L],0); }return z.succeed(t.children())};});for(var pe in ie){ ie.hasOwnProperty(pe)&&(S[pe]=de); }S.operatorname=T(X,function(e){e.createLeftOf=t,e.numBlocks=function(){return 1},e.parser=function(){return $.block.map(function(e){return e.children()})};}),S.f=T(re,function(e,t){e.init=function(){G.p.init.call(this,this.letter="f","<var class=\"mq-f\">f</var>");},e.italicize=function(e){return this.jQ.html("f").toggleClass("mq-f",e),t.italicize.apply(this,arguments)};}),S[" "]=S.space=s(V,"\\ ","&nbsp;"),S["'"]=S.prime=s(V,"'","&prime;"),S.backslash=s(V,"\\backslash ","\\"),D["\\"]||(D["\\"]=S.backslash),S.$=s(V,"\\$","$");var _=T(G,function(e,t){e.init=function(e,n){t.init.call(this,e,"<span class=\"mq-nonSymbola\">"+(n||e)+"</span>");};});S["@"]=_,S["&"]=s(_,"\\&","&amp;"),S["%"]=s(_,"\\%","%"),S.alpha=S.beta=S.gamma=S.delta=S.zeta=S.eta=S.theta=S.iota=S.kappa=S.mu=S.nu=S.xi=S.rho=S.sigma=S.tau=S.chi=S.psi=S.omega=T(se,function(e,t){e.init=function(e){t.init.call(this,"\\"+e+" ","&"+e+";");};}),S.phi=s(se,"\\phi ","&#981;"),S.phiv=S.varphi=s(se,"\\varphi ","&phi;"),S.epsilon=s(se,"\\epsilon ","&#1013;"),S.epsiv=S.varepsilon=s(se,"\\varepsilon ","&epsilon;"),S.piv=S.varpi=s(se,"\\varpi ","&piv;"),S.sigmaf=S.sigmav=S.varsigma=s(se,"\\varsigma ","&sigmaf;"),S.thetav=S.vartheta=S.thetasym=s(se,"\\vartheta ","&thetasym;"),S.upsilon=S.upsi=s(se,"\\upsilon ","&upsilon;"),S.gammad=S.Gammad=S.digamma=s(se,"\\digamma ","&#989;"),S.kappav=S.varkappa=s(se,"\\varkappa ","&#1008;"),S.rhov=S.varrho=s(se,"\\varrho ","&#1009;"),S.pi=S.π=s(_,"\\pi ","&pi;"),S.lambda=s(_,"\\lambda ","&lambda;"),S.Upsilon=S.Upsi=S.upsih=S.Upsih=s(G,"\\Upsilon ","<var style=\"font-family: serif\">&upsih;</var>"),S.Gamma=S.Delta=S.Theta=S.Lambda=S.Xi=S.Pi=S.Sigma=S.Phi=S.Psi=S.Omega=S.forall=T(V,function(e,t){e.init=function(e){t.init.call(this,"\\"+e+" ","&"+e+";");};});var ce=T(X,function(e){e.init=function(e){this.latex=e;},e.createLeftOf=function(e){var t=$.parse(this.latex);t.children().adopt(e.parent,e[C],e[L]),e[C]=t.ends[L],t.jQize().insertBefore(e.jQ),t.finalizeInsert(e.options,e),t.ends[L][L].siblingCreated&&t.ends[L][L].siblingCreated(e.options,C),t.ends[C][C].siblingCreated&&t.ends[C][C].siblingCreated(e.options,L),e.parent.bubble("reflow");},e.parser=function(){var e=$.parse(this.latex).children();return z.succeed(e)};});S["\xB9"]=s(ce,"^1"),S["\xB2"]=s(ce,"^2"),S["\xB3"]=s(ce,"^3"),S["\xBC"]=s(ce,"\\frac14"),S["\xBD"]=s(ce,"\\frac12"),S["\xBE"]=s(ce,"\\frac34");var ue=T(Y,function(e){e.init=V.prototype.init,e.contactWeld=e.siblingCreated=e.siblingDeleted=function(e,t){if(t!==L){ return this.jQ[0].className=!this[C]||this[C]instanceof Y||/^[,;:\(\[]$/.test(this[C].ctrlSeq)?"":"mq-binary-operator",this }};});S["+"]=s(ue,"+","+"),S["\u2013"]=S["-"]=s(ue,"-","&minus;"),S["\xB1"]=S.pm=S.plusmn=S.plusminus=s(ue,"\\pm ","&plusmn;"),S.mp=S.mnplus=S.minusplus=s(ue,"\\mp ","&#8723;"),D["*"]=S.sdot=S.cdot=s(Y,"\\cdot ","&middot;","*");var me=T(Y,function(e,t){e.init=function(e,n){this.data=e,this.strict=n;var a=n?"Strict":"";t.init.call(this,e["ctrlSeq"+a],e["html"+a],e["text"+a]);},e.swap=function(e){this.strict=e;var t=e?"Strict":"";this.ctrlSeq=this.data["ctrlSeq"+t],this.jQ.html(this.data["html"+t]),this.textTemplate=[this.data["text"+t]];},e.deleteTowards=function(e){return e!==C||this.strict?void t.deleteTowards.apply(this,arguments):(this.swap(!0),void this.bubble("reflow"))};}),he={ctrlSeq:"\\le ",html:"&le;",text:"\u2264",ctrlSeqStrict:"<",htmlStrict:"&lt;",textStrict:"<"},fe={ctrlSeq:"\\ge ",html:"&ge;",text:"\u2265",ctrlSeqStrict:">",htmlStrict:"&gt;",textStrict:">"};S["<"]=S.lt=s(me,he,!0),S[">"]=S.gt=s(me,fe,!0),S["\u2264"]=S.le=S.leq=s(me,he,!1),S["\u2265"]=S.ge=S.geq=s(me,fe,!1);var ge=T(Y,function(e,t){e.init=function(){t.init.call(this,"=","=");},e.createLeftOf=function(e){return e[C]instanceof me&&e[C].strict?(e[C].swap(!1),void e[C].bubble("reflow")):void t.createLeftOf.apply(this,arguments)};});S["="]=ge,S["\xD7"]=S.times=s(Y,"\\times ","&times;","[x]"),S["\xF7"]=S.div=S.divide=S.divides=s(Y,"\\div ","&divide;","[/]"),D["~"]=S.sim=s(Y,"\\sim ","~","~");var ye=t,be=document.createElement("div"),xe=be.style,we={transform:1,WebkitTransform:1,MozTransform:1,OTransform:1,msTransform:1},ve,Le;for(var qe in we){ if(qe in xe){Le=qe;break} }Le?ve=function(e,t,n){e.css(Le,"scale("+t+","+n+")");}:"filter"in xe?(ye=function(e){e.className=e.className;},ve=function(e,t,n){function a(){e.css("marginRight",(s.width()-1)*(t-1)/t+"px");}t/=1+(n-1)/2,e.css("fontSize",n+"em"),e.hasClass("mq-matrixed-container")||e.addClass("mq-matrixed-container").wrapInner("<span class=\"mq-matrixed\"></span>");var s=e.children().css("filter","progid:DXImageTransform.Microsoft.Matrix(M11="+t+",SizingMethod='auto expand')");a();var r=setInterval(a);k(window).load(function(){clearTimeout(r),a();});}):ve=function(e,t,n){e.css("fontSize",n+"em");};var Te=T(X,function(e,t){e.init=function(e,n,a){t.init.call(this,e,"<"+n+" "+a+">&0</"+n+">");};});S.mathrm=s(Te,"\\mathrm","span","class=\"mq-roman mq-font\""),S.mathit=s(Te,"\\mathit","i","class=\"mq-font\""),S.mathbf=s(Te,"\\mathbf","b","class=\"mq-font\""),S.mathsf=s(Te,"\\mathsf","span","class=\"mq-sans-serif mq-font\""),S.mathtt=s(Te,"\\mathtt","span","class=\"mq-monospace mq-font\""),S.underline=s(Te,"\\underline","span","class=\"mq-non-leaf mq-underline\""),S.overline=S.bar=s(Te,"\\overline","span","class=\"mq-non-leaf mq-overline\""),S.overrightarrow=s(Te,"\\overrightarrow","span","class=\"mq-non-leaf mq-overarrow mq-arrow-right\""),S.overleftarrow=s(Te,"\\overleftarrow","span","class=\"mq-non-leaf mq-overarrow mq-arrow-left\"");var Ce=S.textcolor=T(X,function(e,t){e.setColor=function(e){this.color=e,this.htmlTemplate="<span class=\"mq-textcolor\" style=\"color:"+e+"\">&0</span>";},e.latex=function(){return "\\textcolor{"+this.color+"}{"+this.blocks[0].latex()+"}"},e.parser=function(){var e=this,n=z.optWhitespace,a=z.string,s=z.regex;return n.then(a("{")).then(s(/^[#\w\s.,()%-]*/)).skip(a("}")).then(function(n){return e.setColor(n),t.parser.call(e)})};}),ke=S["class"]=T(X,function(e,t){e.parser=function(){var e=this,n=z.string,a=z.regex;return z.optWhitespace.then(n("{")).then(a(/^[-\w\s\\\xA0-\xFF]*/)).skip(n("}")).then(function(n){return e.htmlTemplate="<span class=\"mq-class "+n+"\">&0</span>",t.parser.call(e)})};}),je=T(X,function(t,n){t.ctrlSeq="_{...}^{...}",t.createLeftOf=function(e){return !e[C]&&e.options.supSubsRequireOperand?void 0:n.createLeftOf.apply(this,arguments)},t.contactWeld=function(t){for(var n=C;n;n=!(n!==C)&&L){ if(this[n]instanceof je){for(var a="sub";a;a=!("sub"!==a)&&"sup"){var s=this[a],r=this[n][a];if(s){if(!r){ this[n].addBlock(s.disown()); }else if(!s.isEmpty()){s.jQ.children().insAtDirEnd(-n,r.jQ);var o=s.children().disown(),i=e(r,o.ends[L],r.ends[C]);n===C?o.adopt(r,r.ends[L],0):o.adopt(r,0,r.ends[C]);}else { var i=e(r,0,r.ends[C]); }this.placeCursor=function(e,t){return function(a){a.insAtDirEnd(-n,e||t);}}(r,s);}}this.remove(),t&&t[C]===this&&(n===L&&i?i[C]?t.insRightOf(i[C]):t.insAtLeftEnd(i.parent):t.insRightOf(this[n]));break} }},Q.p.charsThatBreakOutOfSupSub="",t.finalizeTree=function(){this.ends[C].write=function(e,t){if(e.options.autoSubscriptNumerals&&this===this.parent.sub){if("_"===t){ return; }var n=this.chToCmd(t);return n instanceof G?e.deleteSelection():e.clearSelection().insRightOf(this.parent),n.createLeftOf(e.show())}e[C]&&!e[L]&&!e.selection&&-1<e.options.charsThatBreakOutOfSupSub.indexOf(t)&&e.insRightOf(this.parent),K.p.write.apply(this,arguments);};},t.moveTowards=function(e,t){t.options.autoSubscriptNumerals&&!this.sup?t.insDirOf(e,this):n.moveTowards.apply(this,arguments);},t.deleteTowards=function(e,t){if(t.options.autoSubscriptNumerals&&this.sub){var a=this.sub.ends[-e];a instanceof G?a.remove():a&&a.deleteTowards(e,t.insAtDirEnd(-e,this.sub)),this.sub.isEmpty()&&(this.sub.deleteOutOf(C,t.insAtLeftEnd(this.sub)),this.sup&&t.insDirOf(-e,this));}else { n.deleteTowards.apply(this,arguments); }},t.latex=function(){function e(e,t){var n=t&&t.latex();return t?e+(1===n.length?n:"{"+(n||" ")+"}"):""}return e("_",this.sub)+e("^",this.sup)},t.addBlock=function(e){"sub"===this.supsub?(this.sup=this.upInto=this.sub.upOutOf=e,e.adopt(this,this.sub,0).downOutOf=this.sub,e.jQ=k("<span class=\"mq-sup\"/>").append(e.jQ.children()).attr("mathquill-block-id",e.id).prependTo(this.jQ)):(this.sub=this.downInto=this.sup.downOutOf=e,e.adopt(this,0,this.sup).upOutOf=this.sup,e.jQ=k("<span class=\"mq-sub\"></span>").append(e.jQ.children()).attr("mathquill-block-id",e.id).appendTo(this.jQ.removeClass("mq-sup-only")),this.jQ.append("<span style=\"display:inline-block;width:0\">&#8203;</span>"));for(var t=0;2>t;t+=1){ (function(e,t,n,a){e[t].deleteOutOf=function(s,r){if(r.insDirOf(this[s]?-s:s,this.parent),!this.isEmpty()){var o=this.ends[s];this.children().disown().withDirAdopt(s,r.parent,r[s],r[-s]).jQ.insDirOf(-s,r.jQ),r[-s]=o;}e.supsub=n,delete e[t],delete e[a+"Into"],e[n][a+"OutOf"]=m,delete e[n].deleteOutOf,"sub"===t&&k(e.jQ.addClass("mq-sup-only")[0].lastChild).remove(),this.remove();};})(this,["sub","sup"][t],["sup","sub"][t],["down","up"][t]); }};});S.subscript=S._=T(je,function(e,t){e.supsub="sub",e.htmlTemplate="<span class=\"mq-supsub mq-non-leaf\"><span class=\"mq-sub\">&0</span><span style=\"display:inline-block;width:0\">&#8203;</span></span>",e.textTemplate=["_"],e.finalizeTree=function(){this.downInto=this.sub=this.ends[C],this.sub.upOutOf=m,t.finalizeTree.call(this);};}),S.superscript=S.supscript=S["^"]=T(je,function(e,t){e.supsub="sup",e.htmlTemplate="<span class=\"mq-supsub mq-non-leaf mq-sup-only\"><span class=\"mq-sup\">&0</span></span>",e.textTemplate=["^"],e.finalizeTree=function(){this.upInto=this.sup=this.ends[L],this.sup.downOutOf=m,t.finalizeTree.call(this);};});var Oe=T(X,function(e,t){e.init=function(e,t){G.prototype.init.call(this,e,"<span class=\"mq-large-operator mq-non-leaf\"><span class=\"mq-to\"><span>&1</span></span><big>"+t+"</big><span class=\"mq-from\"><span>&0</span></span></span>");},e.createLeftOf=function(e){t.createLeftOf.apply(this,arguments),e.options.sumStartsWithNEquals&&(re("n").createLeftOf(e),ge().createLeftOf(e));},e.latex=function(){function e(e){return 1===e.length?e:"{"+(e||" ")+"}"}return this.ctrlSeq+"_"+e(this.ends[C].latex())+"^"+e(this.ends[L].latex())},e.parser=function(){for(var e=z.string,t=z.optWhitespace,n=z.succeed,a=$.block,s=this,r=s.blocks=[K(),K()],o=0;o<r.length;o+=1){ r[o].adopt(s,s.ends[L],0); }return t.then(e("_").or(e("^"))).then(function(e){var t=r["_"===e?0:1];return a.then(function(e){return e.children().adopt(t,t.ends[L],0),n(s)})}).many().result(s)},e.finalizeTree=function(){this.downInto=this.ends[C],this.upInto=this.ends[L],this.ends[C].upOutOf=this.ends[L],this.ends[L].downOutOf=this.ends[C];};});S["\u2211"]=S.sum=S.summation=s(Oe,"\\sum ","&sum;"),S["\u220F"]=S.prod=S.product=s(Oe,"\\prod ","&prod;"),S.coprod=S.coproduct=s(Oe,"\\coprod ","&#8720;"),S["\u222B"]=S.int=S.integral=T(Oe,function(e){e.init=function(){G.prototype.init.call(this,"\\int ","<span class=\"mq-int mq-non-leaf\"><big>&int;</big><span class=\"mq-supsub mq-non-leaf\"><span class=\"mq-sup\"><span class=\"mq-sup-inner\">&1</span></span><span class=\"mq-sub\">&0</span><span style=\"display:inline-block;width:0\">&#8203</span></span></span>");},e.createLeftOf=X.p.createLeftOf;});var Se=S.frac=S.dfrac=S.cfrac=S.fraction=T(X,function(e){e.ctrlSeq="\\frac",e.htmlTemplate="<span class=\"mq-fraction mq-non-leaf\"><span class=\"mq-numerator\">&0</span><span class=\"mq-denominator\">&1</span><span style=\"display:inline-block;width:0\">&#8203;</span></span>",e.textTemplate=["(",")/(",")"],e.finalizeTree=function(){this.upInto=this.ends[L].upOutOf=this.ends[C],this.downInto=this.ends[C].downOutOf=this.ends[L];};}),De=S.over=D["/"]=T(Se,function(e,n){e.createLeftOf=function(e){if(!this.replacedFragment){for(var a=e[C];a&&!(a instanceof Y||a instanceof(S.text||t)||a instanceof Oe||"\\ "===a.ctrlSeq||/^[,;:]$/.test(a.ctrlSeq));){ a=a[C]; }a instanceof Oe&&a[L]instanceof je&&(a=a[L],a[L]instanceof je&&a[L].ctrlSeq!=a.ctrlSeq&&(a=a[L])),a!==e[C]&&(this.replaces(O(a[L]||e.parent.ends[C],e[C])),e[C]=a);}n.createLeftOf.call(this,e);};}),Re=S.sqrt=S["\u221A"]=T(X,function(e,t){e.ctrlSeq="\\sqrt",e.htmlTemplate="<span class=\"mq-non-leaf\"><span class=\"mq-scaled mq-sqrt-prefix\">&radic;</span><span class=\"mq-non-leaf mq-sqrt-stem\">&0</span></span>",e.textTemplate=["sqrt(",")"],e.parser=function(){return $.optBlock.then(function(e){return $.block.map(function(t){var n=Ae();return n.blocks=[e,t],e.adopt(n,0,0),t.adopt(n,e,0),n})}).or(t.parser.call(this))},e.reflow=function(){var e=this.ends[L].jQ;ve(e.prev(),1,e.innerHeight()/+e.css("fontSize").slice(0,-2)-.1);};}),Ee=S.vec=T(X,function(e){e.ctrlSeq="\\vec",e.htmlTemplate="<span class=\"mq-non-leaf\"><span class=\"mq-vector-prefix\">&rarr;</span><span class=\"mq-vector-stem\">&0</span></span>",e.textTemplate=["vec(",")"];}),Ae=S.nthroot=T(Re,function(e){e.htmlTemplate="<sup class=\"mq-nthroot mq-non-leaf\">&0</sup><span class=\"mq-scaled\"><span class=\"mq-sqrt-prefix mq-scaled\">&radic;</span><span class=\"mq-sqrt-stem mq-non-leaf\">&1</span></span>",e.textTemplate=["sqrt[","](",")"],e.latex=function(){return "\\sqrt["+this.ends[C].latex()+"]{"+this.ends[L].latex()+"}"};}),Ne=T(T(X,h),function(e,n){e.init=function(e,t,a,s,r){n.init.call(this,"\\left"+s,void 0,[t,a]),this.side=e,this.sides={},this.sides[C]={ch:t,ctrlSeq:s},this.sides[L]={ch:a,ctrlSeq:r};},e.numBlocks=function(){return 1},e.html=function(){return this.htmlTemplate="<span class=\"mq-non-leaf\"><span class=\"mq-scaled mq-paren"+(this.side===L?" mq-ghost":"")+"\">"+this.sides[C].ch+"</span><span class=\"mq-non-leaf\">&0</span><span class=\"mq-scaled mq-paren"+(this.side===C?" mq-ghost":"")+"\">"+this.sides[L].ch+"</span></span>",n.html.call(this)},e.latex=function(){return "\\left"+this.sides[C].ctrlSeq+this.ends[C].latex()+"\\right"+this.sides[L].ctrlSeq},e.oppBrack=function(e,t,n){return t instanceof Ne&&t.side&&t.side!==-n&&("|"===this.sides[this.side].ch||t.side===-this.side)&&(!e.restrictMismatchedBrackets||_e[this.sides[this.side].ch]===t.sides[t.side].ch||{"(":"]","[":")"}[this.sides[C].ch]===t.sides[L].ch)&&t},e.closeOpposing=function(e){e.side=0,e.sides[this.side]=this.sides[this.side],e.delimjQs.eq(this.side===C?0:1).removeClass("mq-ghost").html(this.sides[this.side].ch);},e.createLeftOf=function(e){if(!this.replacedFragment){ var t=e.options,a=this.oppBrack(t,e[C],C)||this.oppBrack(t,e[L],L)||this.oppBrack(t,e.parent.parent); }if(a){var s=this.side=-a.side;this.closeOpposing(a),a===e.parent.parent&&e[s]&&(O(e[s],e.parent.ends[s],-s).disown().withDirAdopt(-s,a.parent,a,a[s]).jQ.insDirOf(s,a.jQ),a.bubble("reflow"));}else { a=this,s=a.side,a.replacedFragment?a.side=0:e[-s]&&(a.replaces(O(e[-s],e.parent.ends[-s],s)),e[-s]=0),n.createLeftOf.call(a,e); }s===C?e.insAtLeftEnd(a.ends[C]):e.insRightOf(a);},e.placeCursor=t,e.unwrap=function(){this.ends[C].children().disown().adopt(this.parent,this,this[L]).jQ.insertAfter(this.jQ),this.remove();},e.deleteSide=function(e,t,n){var a=this.parent,s=this[e],r=a.ends[e];if(e===this.side){ return this.unwrap(),void(s?n.insDirOf(-e,s):n.insAtDirEnd(e,a)); }var o=n.options,i=!this.side;if(this.side=-e,this.oppBrack(o,this.ends[C].ends[this.side],e)){this.closeOpposing(this.ends[C].ends[this.side]);var l=this.ends[C].ends[e];this.unwrap(),l.siblingCreated&&l.siblingCreated(n.options,e),s?n.insDirOf(-e,s):n.insAtDirEnd(e,a);}else{if(this.oppBrack(o,this.parent.parent,e)){ this.parent.parent.closeOpposing(this),this.parent.parent.unwrap(); }else{if(t&&i){ return this.unwrap(),void(s?n.insDirOf(-e,s):n.insAtDirEnd(e,a)); }this.sides[e]={ch:_e[this.sides[this.side].ch],ctrlSeq:_e[this.sides[this.side].ctrlSeq]},this.delimjQs.removeClass("mq-ghost").eq(e===C?0:1).addClass("mq-ghost").html(this.sides[e].ch);}if(s){var l=this.ends[C].ends[e];O(s,r,-e).disown().withDirAdopt(-e,this.ends[C],l,0).jQ.insAtDirEnd(e,this.ends[C].jQ.removeClass("mq-empty")),l.siblingCreated&&l.siblingCreated(n.options,e),n.insDirOf(-e,s);}else { t?n.insDirOf(e,this):n.insAtDirEnd(e,this.ends[C]); }}},e.deleteTowards=function(e,t){this.deleteSide(-e,!1,t);},e.finalizeTree=function(){this.ends[C].deleteOutOf=function(e,t){this.parent.deleteSide(e,!0,t);},this.finalizeTree=this.intentionalBlur=function(){this.delimjQs.eq(this.side===C?1:0).removeClass("mq-ghost"),this.side=0;};},e.siblingCreated=function(e,t){t===-this.side&&this.finalizeTree();};}),_e={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{","&lang;":"&rang;","&rang;":"&lang;","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|"};f("("),f("["),f("{","\\{"),S.langle=s(Ne,C,"&lang;","&rang;","\\langle ","\\rangle "),S.rangle=s(Ne,L,"&lang;","&rang;","\\langle ","\\rangle "),D["|"]=s(Ne,C,"|","|","|","|"),S.left=T(X,function(e){e.parser=function(){var e=z.regex,t=z.string,n=z.succeed,a=z.optWhitespace;return a.then(e(/^(?:[([|]|\\\{)/)).then(function(n){var s="\\"===n.charAt(0)?n.slice(1):n;return $.then(function(r){return t("\\right").skip(a).then(e(/^(?:[\])|]|\\\})/)).map(function(e){var t="\\"===e.charAt(0)?e.slice(1):e,a=Ne(0,s,t,n,e);return a.blocks=[r],r.adopt(a,0,0),a})})})};}),S.right=T(X,function(e){e.parser=function(){return z.fail("unmatched \\right")};});var Qe=S.binom=S.binomial=T(T(X,h),function(e){e.ctrlSeq="\\binom",e.htmlTemplate="<span class=\"mq-non-leaf\"><span class=\"mq-paren mq-scaled\">(</span><span class=\"mq-non-leaf\"><span class=\"mq-array mq-non-leaf\"><span>&0</span><span>&1</span></span></span><span class=\"mq-paren mq-scaled\">)</span></span>",e.textTemplate=["choose(",",",")"];}),Ie=S.choose=T(Qe,function(e){e.createLeftOf=De.prototype.createLeftOf;});S.editable=S.MathQuillMathField=T(X,function(e,t){e.ctrlSeq="\\MathQuillMathField",e.htmlTemplate="<span class=\"mq-editable-field\"><span class=\"mq-root-block\">&0</span></span>",e.parser=function(){var e=this,n=z.string,a=z.regex,s=z.succeed;return n("[").then(a(/^[a-z][a-z0-9]*/i)).skip(n("]")).map(function(t){e.name=t;}).or(s()).then(t.parser.call(e))},e.finalizeTree=function(){var e=A(this.ends[C],this.jQ,Q());e.KIND_OF_MQ="MathField",e.editable=!0,e.createTextarea(),e.editablesTextareaEvents(),e.cursor.insAtRightEnd(e.root),c(e.root);},e.registerInnerField=function(e,t){e.push(e[this.name]=t(this.ends[C].controller));},e.latex=function(){return this.ends[C].latex()},e.text=function(){return this.ends[C].text()};});var He=S.embed=T(G,function(e){e.setOptions=function(e){function t(){return ""}return this.text=e.text||t,this.htmlTemplate=e.htmlString||"",this.latex=e.latex||t,this},e.parser=function(){var e=this;return string=z.string,regex=z.regex,succeed=z.succeed,string("{").then(regex(/^[a-z][a-z0-9]*/i)).skip(string("}")).then(function(t){return string("[").then(regex(/^[-\w\s]*/)).skip(string("]")).or(succeed()).map(function(n){return e.setOptions(P[t](n))})})};}),Pe=D["\\"]=T(X,function(e,t){e.ctrlSeq="\\",e.replaces=function(e){this._replacedFragment=e.disown(),this.isEmpty=function(){return !1};},e.htmlTemplate="<span class=\"mq-latex-command-input mq-non-leaf\">\\<span>&0</span></span>",e.textTemplate=["\\"],e.createBlocks=function(){t.createBlocks.call(this),this.ends[C].focus=function(){return this.parent.jQ.addClass("mq-hasCursor"),this.isEmpty()&&this.parent.jQ.removeClass("mq-empty"),this},this.ends[C].blur=function(){return this.parent.jQ.removeClass("mq-hasCursor"),this.isEmpty()&&this.parent.jQ.addClass("mq-empty"),this},this.ends[C].write=function(e,t){e.show().deleteSelection(),t.match(/[a-z]/i)?V(t).createLeftOf(e):(this.parent.renderCommand(e),("\\"!==t||!this.isEmpty())&&this.parent.parent.write(e,t));},this.ends[C].keystroke=function(n,a,e){return "Tab"===n||"Enter"===n||"Spacebar"===n?(this.parent.renderCommand(e.cursor),void a.preventDefault()):t.keystroke.apply(this,arguments)};},e.createLeftOf=function(e){if(t.createLeftOf.call(this,e),this._replacedFragment){var n=this.jQ[0];this.jQ=this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove",function(t){return k(t.target=n).trigger(t),!1}).insertBefore(this.jQ).add(this.jQ);}},e.latex=function(){return "\\"+this.ends[C].latex()+" "},e.renderCommand=function(e){this.jQ=this.jQ.last(),this.remove(),this[L]?e.insLeftOf(this[L]):e.insAtRightEnd(this.parent);var t=this.ends[C].latex();t||(t=" ");var n=S[t];n?(n=n(t),this._replacedFragment&&n.replaces(this._replacedFragment),n.createLeftOf(e)):(n=Z(),n.replaces(t),n.createLeftOf(e),e.insRightOf(n),this._replacedFragment&&this._replacedFragment.remove());};}),Be=p(1);for(var Me in Be){ (function(e,t){"function"==typeof t?(d[e]=function(){return l(),t.apply(this,arguments)},d[e].prototype=t.prototype):d[e]=t;})(Me,Be[Me]); }})();var tmp=globals.MathQuill;var build=tmp;

    var jquery_nicescroll = createCommonjsModule(function (module, exports) {
    /* jquery.nicescroll
    -- version 3.7.6
    -- copyright 2017-07-19 InuYaksa*2017
    -- licensed under the MIT
    --
    -- https://nicescroll.areaaperta.com/
    -- https://github.com/inuyaksa/jquery.nicescroll
    --
    */

    /* jshint expr: true */

    (function (factory) {
      {
        // Node/CommonJS.
        module.exports = factory($$1);
      }
    }(function (jQuery) {

      // globals
      var domfocus = false,
        mousefocus = false,
        tabindexcounter = 0,
        ascrailcounter = 2000,
        globalmaxzindex = 0;

      var $ = jQuery,       // sandbox
        _doc = document,
        _win = window,
        $window = $(_win);

      var delegatevents = [];

      // http://stackoverflow.com/questions/2161159/get-script-path
      function getScriptPath() {
        var scripts = _doc.currentScript || (function () { var s = _doc.getElementsByTagName('script'); return (s.length) ? s[s.length - 1] : false; })();
        var path = scripts ? scripts.src.split('?')[0] : '';
        return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : '';
      }

      // based on code by Paul Irish https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/  
      var setAnimationFrame = _win.requestAnimationFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || false;
      var clearAnimationFrame = _win.cancelAnimationFrame || _win.webkitCancelAnimationFrame || _win.mozCancelAnimationFrame || false;

      if (!setAnimationFrame) {
        var anilasttime = 0;
        setAnimationFrame = function (callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - anilasttime));
          var id = _win.setTimeout(function () { callback(currTime + timeToCall); },
            timeToCall);
          anilasttime = currTime + timeToCall;
          return id;
        };
        clearAnimationFrame = function (id) {
          _win.clearTimeout(id);
        };
      } else {
        if (!_win.cancelAnimationFrame) { clearAnimationFrame = function (id) { }; }
      }

      var ClsMutationObserver = _win.MutationObserver || _win.WebKitMutationObserver || false;

      var now = Date.now || function () { return new Date().getTime(); };

      var _globaloptions = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 9 * 3,
        touchbehavior: false,   // deprecated
        emulatetouch: false,    // replacing touchbehavior
        hwacceleration: true,
        usetransition: true,
        boxzoom: false,
        dblclickzoom: true,
        gesturezoom: true,
        grabcursorenabled: true,
        autohidemode: true,
        background: "",
        iframeautoresize: true,
        cursorminheight: 32,
        preservenativescrolling: true,
        railoffset: false,
        railhoffset: false,
        bouncescroll: true,
        spacebarenabled: true,
        railpadding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        disableoutline: true,
        horizrailenabled: true,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: true,
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
        sensitiverail: true,
        enablemouselockapi: true,
        //      cursormaxheight:false,
        cursorfixedheight: false,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: true,
        enablescrollonselection: true,
        overflowx: true,
        overflowy: true,
        cursordragspeed: 0.3,
        rtlmode: "auto",
        cursordragontouch: false,
        oneaxismousemode: "auto",
        scriptpath: getScriptPath(),
        preventmultitouchscrolling: true,
        disablemutationobserver: false,
        enableobserver: true,
        scrollbarid: false
      };

      var browserdetected = false;

      var getBrowserDetection = function () {

        if (browserdetected) { return browserdetected; }

        var _el = _doc.createElement('DIV'),
          _style = _el.style,
          _agent = navigator.userAgent,
          _platform = navigator.platform,
          d = {};

        d.haspointerlock = "pointerLockElement" in _doc || "webkitPointerLockElement" in _doc || "mozPointerLockElement" in _doc;

        d.isopera = ("opera" in _win); // 12-
        d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
        d.isoperamini = (Object.prototype.toString.call(_win.operamini) === "[object OperaMini]");

        d.isie = (("all" in _doc) && ("attachEvent" in _el) && !d.isopera); //IE10-
        d.isieold = (d.isie && !("msInterpolationMode" in _style)); // IE6 and older
        d.isie7 = d.isie && !d.isieold && (!("documentMode" in _doc) || (_doc.documentMode === 7));
        d.isie8 = d.isie && ("documentMode" in _doc) && (_doc.documentMode === 8);
        d.isie9 = d.isie && ("performance" in _win) && (_doc.documentMode === 9);
        d.isie10 = d.isie && ("performance" in _win) && (_doc.documentMode === 10);
        d.isie11 = ("msRequestFullscreen" in _el) && (_doc.documentMode >= 11); // IE11+

        d.ismsedge = ("msCredentials" in _win);  // MS Edge 14+

        d.ismozilla = ("MozAppearance" in _style);

        d.iswebkit = !d.ismsedge && ("WebkitAppearance" in _style);

        d.ischrome = d.iswebkit && ("chrome" in _win);
        d.ischrome38 = (d.ischrome && ("touchAction" in _style)); // behavior changed in touch emulation    
        d.ischrome22 = (!d.ischrome38) && (d.ischrome && d.haspointerlock);
        d.ischrome26 = (!d.ischrome38) && (d.ischrome && ("transition" in _style)); // issue with transform detection (maintain prefix)

        d.cantouch = ("ontouchstart" in _doc.documentElement) || ("ontouchstart" in _win); // with detection for Chrome Touch Emulation    
        d.hasw3ctouch = (_win.PointerEvent || false) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); //IE11 pointer events, following W3C Pointer Events spec
        d.hasmstouch = (!d.hasw3ctouch) && (_win.MSPointerEvent || false); // IE10 pointer events

        d.ismac = /^mac$/i.test(_platform);

        d.isios = d.cantouch && /iphone|ipad|ipod/i.test(_platform);
        d.isios4 = d.isios && !("seal" in Object);
        d.isios7 = d.isios && ("webkitHidden" in _doc);  //iOS 7+
        d.isios8 = d.isios && ("hidden" in _doc);  //iOS 8+
        d.isios10 = d.isios && _win.Proxy;  //iOS 10+

        d.isandroid = (/android/i.test(_agent));

        d.haseventlistener = ("addEventListener" in _el);

        d.trstyle = false;
        d.hastransform = false;
        d.hastranslate3d = false;
        d.transitionstyle = false;
        d.hastransition = false;
        d.transitionend = false;

        d.trstyle = "transform";
        d.hastransform = ("transform" in _style) || (function () {
          var check = ['msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
          for (var a = 0, c = check.length; a < c; a++) {
            if (_style[check[a]] !== undefined) {
              d.trstyle = check[a];
              break;
            }
          }
          d.hastransform = (!!d.trstyle);
        })();

        if (d.hastransform) {
          _style[d.trstyle] = "translate3d(1px,2px,3px)";
          d.hastranslate3d = /translate3d/.test(_style[d.trstyle]);
        }

        d.transitionstyle = "transition";
        d.prefixstyle = '';
        d.transitionend = "transitionend";

        d.hastransition = ("transition" in _style) || (function () {

          d.transitionend = false;
          var check = ['webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition'];
          var prefix = ['-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-'];
          var evs = ['webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd'];
          for (var a = 0, c = check.length; a < c; a++) {
            if (check[a] in _style) {
              d.transitionstyle = check[a];
              d.prefixstyle = prefix[a];
              d.transitionend = evs[a];
              break;
            }
          }
          if (d.ischrome26) { d.prefixstyle = prefix[1]; }  // always use prefix

          d.hastransition = (d.transitionstyle);

        })();

        function detectCursorGrab() {
          var lst = ['grab', '-webkit-grab', '-moz-grab'];
          if ((d.ischrome && !d.ischrome38) || d.isie) { lst = []; } // force setting for IE returns false positive and chrome cursor bug
          for (var a = 0, l = lst.length; a < l; a++) {
            var p = lst[a];
            _style.cursor = p;
            if (_style.cursor == p) { return p; }
          }
          return 'url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize'; // thanks to https://cdnjs.com/ for the openhand cursor!
        }
        d.cursorgrabvalue = detectCursorGrab();

        d.hasmousecapture = ("setCapture" in _el);

        d.hasMutationObserver = (ClsMutationObserver !== false);

        _el = null; //memory released

        browserdetected = d;

        return d;
      };

      var NiceScrollClass = function (myopt, me) {

        var self = this;

        this.version = '3.7.6';
        this.name = 'nicescroll';

        this.me = me;

        var $body = $("body");

        var opt = this.opt = {
          doc: $body,
          win: false
        };

        $.extend(opt, _globaloptions);  // clone opts

        // Options for internal use
        opt.snapbackspeed = 80;

        if (myopt || false) {
          for (var a in opt) {
            if (myopt[a] !== undefined) { opt[a] = myopt[a]; }
          }
        }

        if (opt.disablemutationobserver) { ClsMutationObserver = false; }

        this.doc = opt.doc;
        this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
        this.ispage = /^BODY|HTML/.test((opt.win) ? opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper = (opt.win !== false);
        this.win = opt.win || (this.ispage ? $window : this.doc);
        this.docscroll = (this.ispage && !this.haswrapper) ? $window : this.win;
        this.body = $body;
        this.viewport = false;

        this.isfixed = false;

        this.iframe = false;
        this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));

        this.istextarea = (this.win[0].nodeName == 'TEXTAREA');

        this.forcescreen = false; //force to use screen position on events

        this.canshowonmouseevent = (opt.autohidemode != "scroll");

        // Events jump table    
        this.onmousedown = false;
        this.onmouseup = false;
        this.onmousemove = false;
        this.onmousewheel = false;
        this.onkeypress = false;
        this.ongesturezoom = false;
        this.onclick = false;

        // Nicescroll custom events
        this.onscrollstart = false;
        this.onscrollend = false;
        this.onscrollcancel = false;

        this.onzoomin = false;
        this.onzoomout = false;

        // Let's start!  
        this.view = false;
        this.page = false;

        this.scroll = {
          x: 0,
          y: 0
        };
        this.scrollratio = {
          x: 0,
          y: 0
        };
        this.cursorheight = 20;
        this.scrollvaluemax = 0;

        // http://dev.w3.org/csswg/css-writing-modes-3/#logical-to-physical
        // http://dev.w3.org/csswg/css-writing-modes-3/#svg-writing-mode
        if (opt.rtlmode == "auto") {
          var target = this.win[0] == _win ? this.body : this.win;
          var writingMode = target.css("writing-mode") || target.css("-webkit-writing-mode") || target.css("-ms-writing-mode") || target.css("-moz-writing-mode");

          if (writingMode == "horizontal-tb" || writingMode == "lr-tb" || writingMode === "") {
            this.isrtlmode = (target.css("direction") == "rtl");
            this.isvertical = false;
          } else {
            this.isrtlmode = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl" || writingMode == "rl-tb");
            this.isvertical = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl");
          }
        } else {
          this.isrtlmode = (opt.rtlmode === true);
          this.isvertical = false;
        }
        //    this.checkrtlmode = false;

        this.scrollrunning = false;

        this.scrollmom = false;

        this.observer = false;  // observer div changes
        this.observerremover = false;  // observer on parent for remove detection
        this.observerbody = false;  // observer on body for position change

        if (opt.scrollbarid !== false) {
          this.id = opt.scrollbarid;
        } else {
          do {
            this.id = "ascrail" + (ascrailcounter++);
          } while (_doc.getElementById(this.id));
        }

        this.rail = false;
        this.cursor = false;
        this.cursorfreezed = false;
        this.selectiondrag = false;

        this.zoom = false;
        this.zoomactive = false;

        this.hasfocus = false;
        this.hasmousefocus = false;

        //this.visibility = true;
        this.railslocked = false;  // locked by resize
        this.locked = false;  // prevent lost of locked status sets by user
        this.hidden = false; // rails always hidden
        this.cursoractive = true; // user can interact with cursors

        this.wheelprevented = false; //prevent mousewheel event

        this.overflowx = opt.overflowx;
        this.overflowy = opt.overflowy;

        this.nativescrollingarea = false;
        this.checkarea = 0;

        this.events = []; // event list for unbind

        this.saved = {};  // style saved

        this.delaylist = {};
        this.synclist = {};

        this.lastdeltax = 0;
        this.lastdeltay = 0;

        this.detected = getBrowserDetection();

        var cap = $.extend({}, this.detected);

        this.canhwscroll = (cap.hastransform && opt.hwacceleration);
        this.ishwscroll = (this.canhwscroll && self.haswrapper);

        if (!this.isrtlmode) {
          this.hasreversehr = false;
        } else if (this.isvertical) { // RTL mode with reverse horizontal axis
          this.hasreversehr = !(cap.iswebkit || cap.isie || cap.isie11);
        } else {
          this.hasreversehr = !(cap.iswebkit || (cap.isie && !cap.isie10 && !cap.isie11));
        }

        this.istouchcapable = false; // desktop devices with touch screen support

        //## Check WebKit-based desktop with touch support
        //## + Firefox 18 nightly build (desktop) false positive (or desktop with touch support)

        if (!cap.cantouch && (cap.hasw3ctouch || cap.hasmstouch)) {  // desktop device with multiple input
          this.istouchcapable = true;
        } else if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
          this.istouchcapable = true;
        }

        //## disable MouseLock API on user request
        if (!opt.enablemouselockapi) {
          cap.hasmousecapture = false;
          cap.haspointerlock = false;
        }

        this.debounced = function (name, fn, tm) {
          if (!self) { return; }
          var dd = self.delaylist[name] || false;
          if (!dd) {
            self.delaylist[name] = {
              h: setAnimationFrame(function () {
                self.delaylist[name].fn.call(self);
                self.delaylist[name] = false;
              }, tm)
            };
            fn.call(self);
          }
          self.delaylist[name].fn = fn;
        };


        this.synched = function (name, fn) {
          if (self.synclist[name]) { self.synclist[name] = fn; }
          else {
            self.synclist[name] = fn;
            setAnimationFrame(function () {
              if (!self) { return; }
              self.synclist[name] && self.synclist[name].call(self);
              self.synclist[name] = null;
            });
          }
        };

        this.unsynched = function (name) {
          if (self.synclist[name]) { self.synclist[name] = false; }
        };

        this.css = function (el, pars) { // save & set
          for (var n in pars) {
            self.saved.css.push([el, n, el.css(n)]);
            el.css(n, pars[n]);
          }
        };

        this.scrollTop = function (val) {
          return (val === undefined) ? self.getScrollTop() : self.setScrollTop(val);
        };

        this.scrollLeft = function (val) {
          return (val === undefined) ? self.getScrollLeft() : self.setScrollLeft(val);
        };

        // derived by by Dan Pupius www.pupius.net
        var BezierClass = function (st, ed, spd, p1, p2, p3, p4) {

          this.st = st;
          this.ed = ed;
          this.spd = spd;

          this.p1 = p1 || 0;
          this.p2 = p2 || 1;
          this.p3 = p3 || 0;
          this.p4 = p4 || 1;

          this.ts = now();
          this.df = ed - st;
        };
        BezierClass.prototype = {
          B2: function (t) {
            return 3 * (1 - t) * (1 - t) * t;
          },
          B3: function (t) {
            return 3 * (1 - t) * t * t;
          },
          B4: function (t) {
            return t * t * t;
          },
          getPos: function () {
            return (now() - this.ts) / this.spd;
          },
          getNow: function () {
            var pc = (now() - this.ts) / this.spd;
            var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
            return (pc >= 1) ? this.ed : this.st + (this.df * bz) | 0;
          },
          update: function (ed, spd) {
            this.st = this.getNow();
            this.ed = ed;
            this.spd = spd;
            this.ts = now();
            this.df = this.ed - this.st;
            return this;
          }
        };

        //derived from http://stackoverflow.com/questions/11236090/
        function getMatrixValues() {
          var tr = self.doc.css(cap.trstyle);
          if (tr && (tr.substr(0, 6) == "matrix")) {
            return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
          }
          return false;
        }

        if (this.ishwscroll) {    // hw accelerated scroll

          this.doc.translate = {
            x: 0,
            y: 0,
            tx: "0px",
            ty: "0px"
          };

          //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
          if (cap.hastranslate3d && cap.isios) { this.doc.css("-webkit-backface-visibility", "hidden"); } // prevent flickering http://stackoverflow.com/questions/3461441/      

          this.getScrollTop = function (last) {
            if (!last) {
              var mtx = getMatrixValues();
              if (mtx) { return (mtx.length == 16) ? -mtx[13] : -mtx[5]; } //matrix3d 16 on IE10
              if (self.timerscroll && self.timerscroll.bz) { return self.timerscroll.bz.getNow(); }
            }
            return self.doc.translate.y;
          };

          this.getScrollLeft = function (last) {
            if (!last) {
              var mtx = getMatrixValues();
              if (mtx) { return (mtx.length == 16) ? -mtx[12] : -mtx[4]; } //matrix3d 16 on IE10
              if (self.timerscroll && self.timerscroll.bh) { return self.timerscroll.bh.getNow(); }
            }
            return self.doc.translate.x;
          };

          this.notifyScrollEvent = function (el) {
            var e = _doc.createEvent("UIEvents");
            e.initUIEvent("scroll", false, false, _win, 1);
            e.niceevent = true;
            el.dispatchEvent(e);
          };

          var cxscrollleft = (this.isrtlmode) ? 1 : -1;

          if (cap.hastranslate3d && opt.enabletranslate3d) {
            this.setScrollTop = function (val, silent) {
              self.doc.translate.y = val;
              self.doc.translate.ty = (val * -1) + "px";
              self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
              if (!silent) { self.notifyScrollEvent(self.win[0]); }
            };
            this.setScrollLeft = function (val, silent) {
              self.doc.translate.x = val;
              self.doc.translate.tx = (val * cxscrollleft) + "px";
              self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
              if (!silent) { self.notifyScrollEvent(self.win[0]); }
            };
          } else {
            this.setScrollTop = function (val, silent) {
              self.doc.translate.y = val;
              self.doc.translate.ty = (val * -1) + "px";
              self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
              if (!silent) { self.notifyScrollEvent(self.win[0]); }
            };
            this.setScrollLeft = function (val, silent) {
              self.doc.translate.x = val;
              self.doc.translate.tx = (val * cxscrollleft) + "px";
              self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
              if (!silent) { self.notifyScrollEvent(self.win[0]); }
            };
          }
        } else {    // native scroll

          this.getScrollTop = function () {
            return self.docscroll.scrollTop();
          };
          this.setScrollTop = function (val) {
            self.docscroll.scrollTop(val);
          };

          this.getScrollLeft = function () {
            var val;
            if (!self.hasreversehr) {
              val = self.docscroll.scrollLeft();
            } else if (self.detected.ismozilla) {
              val = self.page.maxw - Math.abs(self.docscroll.scrollLeft());
            } else {
              val = self.page.maxw - self.docscroll.scrollLeft();
            }
            return val;
          };
          this.setScrollLeft = function (val) {
            return setTimeout(function () {
              if (!self) { return; }
              if (self.hasreversehr) {
                if (self.detected.ismozilla) {
                  val = -(self.page.maxw - val);
                } else {
                  val = self.page.maxw - val;
                }
              }
              return self.docscroll.scrollLeft(val);
            }, 1);
          };
        }

        this.getTarget = function (e) {
          if (!e) { return false; }
          if (e.target) { return e.target; }
          if (e.srcElement) { return e.srcElement; }
          return false;
        };

        this.hasParent = function (e, id) {
          if (!e) { return false; }
          var el = e.target || e.srcElement || e || false;
          while (el && el.id != id) {
            el = el.parentNode || false;
          }
          return (el !== false);
        };

        function getZIndex() {
          var dom = self.win;
          if ("zIndex" in dom) { return dom.zIndex(); } // use jQuery UI method when available
          while (dom.length > 0) {
            if (dom[0].nodeType == 9) { return false; }
            var zi = dom.css('zIndex');
            if (!isNaN(zi) && zi !== 0) { return parseInt(zi); }
            dom = dom.parent();
          }
          return false;
        }

        //inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
        var _convertBorderWidth = {
          "thin": 1,
          "medium": 3,
          "thick": 5
        };

        function getWidthToPixel(dom, prop, chkheight) {
          var wd = dom.css(prop);
          var px = parseFloat(wd);
          if (isNaN(px)) {
            px = _convertBorderWidth[wd] || 0;
            var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
            if (self.isie8 && px) { px += 1; }
            return (brd) ? px : 0;
          }
          return px;
        }

        this.getDocumentScrollOffset = function () {
          return {
            top: _win.pageYOffset || _doc.documentElement.scrollTop,
            left: _win.pageXOffset || _doc.documentElement.scrollLeft
          };
        };

        this.getOffset = function () {
          if (self.isfixed) {
            var ofs = self.win.offset();  // fix Chrome auto issue (when right/bottom props only)
            var scrl = self.getDocumentScrollOffset();
            ofs.top -= scrl.top;
            ofs.left -= scrl.left;
            return ofs;
          }
          var ww = self.win.offset();
          if (!self.viewport) { return ww; }
          var vp = self.viewport.offset();
          return {
            top: ww.top - vp.top,
            left: ww.left - vp.left
          };
        };

        this.updateScrollBar = function (len) {
          var pos, off;
          if (self.ishwscroll) {
            self.rail.css({
              height: self.win.innerHeight() - (opt.railpadding.top + opt.railpadding.bottom)
            });
            if (self.railh) { self.railh.css({
              width: self.win.innerWidth() - (opt.railpadding.left + opt.railpadding.right)
            }); }
          } else {
            var wpos = self.getOffset();
            pos = {
              top: wpos.top,
              left: wpos.left - (opt.railpadding.left + opt.railpadding.right)
            };
            pos.top += getWidthToPixel(self.win, 'border-top-width', true);
            pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');

            off = opt.railoffset;
            if (off) {
              if (off.top) { pos.top += off.top; }
              if (off.left) { pos.left += off.left; }
            }

            if (!self.railslocked) { self.rail.css({
              top: pos.top,
              left: pos.left,
              height: ((len) ? len.h : self.win.innerHeight()) - (opt.railpadding.top + opt.railpadding.bottom)
            }); }

            if (self.zoom) {
              self.zoom.css({
                top: pos.top + 1,
                left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
              });
            }

            if (self.railh && !self.railslocked) {
              pos = {
                top: wpos.top,
                left: wpos.left
              };
              off = opt.railhoffset;
              if (off) {
                if (off.top) { pos.top += off.top; }
                if (off.left) { pos.left += off.left; }
              }
              var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
              var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
              self.railh.css({
                top: y - (opt.railpadding.top + opt.railpadding.bottom),
                left: x,
                width: self.railh.width
              });
            }

          }
        };

        this.doRailClick = function (e, dbl, hr) {
          var fn, pg, cur, pos;

          if (self.railslocked) { return; }

          self.cancelEvent(e);

          if (!("pageY" in e)) {
            e.pageX = e.clientX + _doc.documentElement.scrollLeft;
            e.pageY = e.clientY + _doc.documentElement.scrollTop;
          }

          if (dbl) {
            fn = (hr) ? self.doScrollLeft : self.doScrollTop;
            cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
            self.unsynched("relativexy");
            fn(cur|0);
          } else {
            fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
            cur = (hr) ? self.scroll.x : self.scroll.y;
            pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
            pg = (hr) ? self.view.w : self.view.h;
            fn((cur >= pos) ? pg : -pg);
          }

        };

        self.newscrolly = self.newscrollx = 0;

        self.hasanimationframe = ("requestAnimationFrame" in _win);
        self.hascancelanimationframe = ("cancelAnimationFrame" in _win);

        self.hasborderbox = false;

        this.init = function () {

          self.saved.css = [];

          if (cap.isoperamini) { return true; } // SORRY, DO NOT WORK!
          if (cap.isandroid && !("hidden" in _doc)) { return true; } // Android 3- SORRY, DO NOT WORK!

          opt.emulatetouch = opt.emulatetouch || opt.touchbehavior;  // mantain compatibility with "touchbehavior"      

          self.hasborderbox = _win.getComputedStyle && (_win.getComputedStyle(_doc.body)['box-sizing'] === "border-box");

          var _scrollyhidden = { 'overflow-y': 'hidden' };
          if (cap.isie11 || cap.isie10) { _scrollyhidden['-ms-overflow-style'] = 'none'; }  // IE 10 & 11 is always a world apart!

          if (self.ishwscroll) {
            this.doc.css(cap.transitionstyle, cap.prefixstyle + 'transform 0ms ease-out');
            if (cap.transitionend) { self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, false); } //I have got to do something usefull!!
          }

          self.zindex = "auto";
          if (!self.ispage && opt.zindex == "auto") {
            self.zindex = getZIndex() || "auto";
          } else {
            self.zindex = opt.zindex;
          }

          if (!self.ispage && self.zindex != "auto" && self.zindex > globalmaxzindex) {
            globalmaxzindex = self.zindex;
          }

          if (self.isie && self.zindex === 0 && opt.zindex == "auto") { // fix IE auto == 0
            self.zindex = "auto";
          }

          if (!self.ispage || !cap.isieold) {

            var cont = self.docscroll;
            if (self.ispage) { cont = (self.haswrapper) ? self.win : self.doc; }

            self.css(cont, _scrollyhidden);

            if (self.ispage && (cap.isie11 || cap.isie)) { // IE 7-11
              self.css($("html"), _scrollyhidden);
            }

            if (cap.isios && !self.ispage && !self.haswrapper) { self.css($body, {
              "-webkit-overflow-scrolling": "touch"
            }); } //force hw acceleration

            var cursor = $(_doc.createElement('div'));
            cursor.css({
              position: "relative",
              top: 0,
              "float": "right",
              width: opt.cursorwidth,
              height: 0,
              'background-color': opt.cursorcolor,
              border: opt.cursorborder,
              'background-clip': 'padding-box',
              '-webkit-border-radius': opt.cursorborderradius,
              '-moz-border-radius': opt.cursorborderradius,
              'border-radius': opt.cursorborderradius
            });

            cursor.addClass('nicescroll-cursors');

            self.cursor = cursor;

            var rail = $(_doc.createElement('div'));
            rail.attr('id', self.id);
            rail.addClass('nicescroll-rails nicescroll-rails-vr');

            var v, a, kp = ["left", "right", "top", "bottom"];  //**
            for (var n in kp) {
              a = kp[n];
              v = opt.railpadding[a] || 0;
              v && rail.css("padding-" + a, v + "px");
            }

            rail.append(cursor);

            rail.width = Math.max(parseFloat(opt.cursorwidth), cursor.outerWidth());
            rail.css({
              width: rail.width + "px",
              zIndex: self.zindex,
              background: opt.background,
              cursor: "default"
            });

            rail.visibility = true;
            rail.scrollable = true;

            rail.align = (opt.railalign == "left") ? 0 : 1;

            self.rail = rail;

            self.rail.drag = false;

            var zoom = false;
            if (opt.boxzoom && !self.ispage && !cap.isieold) {
              zoom = _doc.createElement('div');

              self.bind(zoom, "click", self.doZoom);
              self.bind(zoom, "mouseenter", function () {
                self.zoom.css('opacity', opt.cursoropacitymax);
              });
              self.bind(zoom, "mouseleave", function () {
                self.zoom.css('opacity', opt.cursoropacitymin);
              });

              self.zoom = $(zoom);
              self.zoom.css({
                cursor: "pointer",
                zIndex: self.zindex,
                backgroundImage: 'url(' + opt.scriptpath + 'zoomico.png)',
                height: 18,
                width: 18,
                backgroundPosition: '0 0'
              });
              if (opt.dblclickzoom) { self.bind(self.win, "dblclick", self.doZoom); }
              if (cap.cantouch && opt.gesturezoom) {
                self.ongesturezoom = function (e) {
                  if (e.scale > 1.5) { self.doZoomIn(e); }
                  if (e.scale < 0.8) { self.doZoomOut(e); }
                  return self.cancelEvent(e);
                };
                self.bind(self.win, "gestureend", self.ongesturezoom);
              }
            }

            // init HORIZ

            self.railh = false;
            var railh;

            if (opt.horizrailenabled) {

              self.css(cont, {
                overflowX: 'hidden'
              });

              cursor = $(_doc.createElement('div'));
              cursor.css({
                position: "absolute",
                top: 0,
                height: opt.cursorwidth,
                width: 0,
                backgroundColor: opt.cursorcolor,
                border: opt.cursorborder,
                backgroundClip: 'padding-box',
                '-webkit-border-radius': opt.cursorborderradius,
                '-moz-border-radius': opt.cursorborderradius,
                'border-radius': opt.cursorborderradius
              });

              if (cap.isieold) { cursor.css('overflow', 'hidden'); }  //IE6 horiz scrollbar issue

              cursor.addClass('nicescroll-cursors');

              self.cursorh = cursor;

              railh = $(_doc.createElement('div'));
              railh.attr('id', self.id + '-hr');
              railh.addClass('nicescroll-rails nicescroll-rails-hr');
              railh.height = Math.max(parseFloat(opt.cursorwidth), cursor.outerHeight());
              railh.css({
                height: railh.height + "px",
                'zIndex': self.zindex,
                "background": opt.background
              });

              railh.append(cursor);

              railh.visibility = true;
              railh.scrollable = true;

              railh.align = (opt.railvalign == "top") ? 0 : 1;

              self.railh = railh;

              self.railh.drag = false;

            }

            if (self.ispage) {

              rail.css({
                position: "fixed",
                top: 0,
                height: "100%"
              });

              rail.css((rail.align) ? { right: 0 } : { left: 0 });

              self.body.append(rail);
              if (self.railh) {
                railh.css({
                  position: "fixed",
                  left: 0,
                  width: "100%"
                });

                railh.css((railh.align) ? { bottom: 0 } : { top: 0 });

                self.body.append(railh);
              }
            } else {
              if (self.ishwscroll) {
                if (self.win.css('position') == 'static') { self.css(self.win, { 'position': 'relative' }); }
                var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
                $(bd).scrollTop(0).scrollLeft(0);  // fix rail position if content already scrolled
                if (self.zoom) {
                  self.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": rail.width + 4
                  });
                  bd.append(self.zoom);
                }
                rail.css({
                  position: "absolute",
                  top: 0
                });
                rail.css((rail.align) ? { right: 0 } : { left: 0 });
                bd.append(rail);
                if (railh) {
                  railh.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0
                  });
                  railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
                  bd.append(railh);
                }
              } else {
                self.isfixed = (self.win.css("position") == "fixed");
                var rlpos = (self.isfixed) ? "fixed" : "absolute";

                if (!self.isfixed) { self.viewport = self.getViewport(self.win[0]); }
                if (self.viewport) {
                  self.body = self.viewport;
                  if (!(/fixed|absolute/.test(self.viewport.css("position")))) { self.css(self.viewport, {
                    "position": "relative"
                  }); }
                }

                rail.css({
                  position: rlpos
                });
                if (self.zoom) { self.zoom.css({
                  position: rlpos
                }); }
                self.updateScrollBar();
                self.body.append(rail);
                if (self.zoom) { self.body.append(self.zoom); }
                if (self.railh) {
                  railh.css({
                    position: rlpos
                  });
                  self.body.append(railh);
                }
              }

              if (cap.isios) { self.css(self.win, {
                '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
                '-webkit-touch-callout': 'none'
              }); } // prevent grey layer on click

              if (opt.disableoutline) {
                if (cap.isie) { self.win.attr("hideFocus", "true"); } // IE, prevent dotted rectangle on focused div
                if (cap.iswebkit) { self.win.css('outline', 'none'); }  // Webkit outline
              }

            }

            if (opt.autohidemode === false) {
              self.autohidedom = false;
              self.rail.css({
                opacity: opt.cursoropacitymax
              });
              if (self.railh) { self.railh.css({
                opacity: opt.cursoropacitymax
              }); }
            } else if ((opt.autohidemode === true) || (opt.autohidemode === "leave")) {
              self.autohidedom = $().add(self.rail);
              if (cap.isie8) { self.autohidedom = self.autohidedom.add(self.cursor); }
              if (self.railh) { self.autohidedom = self.autohidedom.add(self.railh); }
              if (self.railh && cap.isie8) { self.autohidedom = self.autohidedom.add(self.cursorh); }
            } else if (opt.autohidemode == "scroll") {
              self.autohidedom = $().add(self.rail);
              if (self.railh) { self.autohidedom = self.autohidedom.add(self.railh); }
            } else if (opt.autohidemode == "cursor") {
              self.autohidedom = $().add(self.cursor);
              if (self.railh) { self.autohidedom = self.autohidedom.add(self.cursorh); }
            } else if (opt.autohidemode == "hidden") {
              self.autohidedom = false;
              self.hide();
              self.railslocked = false;
            }

            if (cap.cantouch || self.istouchcapable || opt.emulatetouch || cap.hasmstouch) {

              self.scrollmom = new ScrollMomentumClass2D(self);

              self.ontouchstart = function (e) {

                if (self.locked) { return false; }

                //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
                if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) { return false; }  // need test on surface!!

                self.hasmoving = false;

                if (self.scrollmom.timer) {
                  self.triggerScrollEnd();
                  self.scrollmom.stop();
                }

                if (!self.railslocked) {
                  var tg = self.getTarget(e);

                  if (tg) {
                    var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                    if (skp) { return self.stopPropagation(e); }
                  }

                  var ismouse = (e.type === "mousedown");

                  if (!("clientX" in e) && ("changedTouches" in e)) {
                    e.clientX = e.changedTouches[0].clientX;
                    e.clientY = e.changedTouches[0].clientY;
                  }

                  if (self.forcescreen) {
                    var le = e;
                    e = {
                      "original": (e.original) ? e.original : e
                    };
                    e.clientX = le.screenX;
                    e.clientY = le.screenY;
                  }

                  self.rail.drag = {
                    x: e.clientX,
                    y: e.clientY,
                    sx: self.scroll.x,
                    sy: self.scroll.y,
                    st: self.getScrollTop(),
                    sl: self.getScrollLeft(),
                    pt: 2,
                    dl: false,
                    tg: tg
                  };

                  if (self.ispage || !opt.directionlockdeadzone) {

                    self.rail.drag.dl = "f";

                  } else {

                    var view = {
                      w: $window.width(),
                      h: $window.height()
                    };

                    var page = self.getContentSize();

                    var maxh = page.h - view.h;
                    var maxw = page.w - view.w;

                    if (self.rail.scrollable && !self.railh.scrollable) { self.rail.drag.ck = (maxh > 0) ? "v" : false; }
                    else if (!self.rail.scrollable && self.railh.scrollable) { self.rail.drag.ck = (maxw > 0) ? "h" : false; }
                    else { self.rail.drag.ck = false; }

                  }

                  if (opt.emulatetouch && self.isiframe && cap.isie) {
                    var wp = self.win.position();
                    self.rail.drag.x += wp.left;
                    self.rail.drag.y += wp.top;
                  }

                  self.hasmoving = false;
                  self.lastmouseup = false;
                  self.scrollmom.reset(e.clientX, e.clientY);

                  if (tg&&ismouse) {

                    var ip = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);
                    if (!ip) {
                      if (cap.hasmousecapture) { tg.setCapture(); }
                      if (opt.emulatetouch) {
                        if (tg.onclick && !(tg._onclick || false)) { // intercept DOM0 onclick event
                          tg._onclick = tg.onclick;
                          tg.onclick = function (e) {
                            if (self.hasmoving) { return false; }
                            tg._onclick.call(this, e);
                          };
                        }
                        return self.cancelEvent(e);
                      }
                      return self.stopPropagation(e);
                    }

                    if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                      self.preventclick = {
                        "tg": tg,
                        "click": false
                      };
                    }

                  }
                }

              };

              self.ontouchend = function (e) {

                if (!self.rail.drag) { return true; }

                if (self.rail.drag.pt == 2) {
                  //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
                  if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) { return false; }

                  self.rail.drag = false;

                  var ismouse = (e.type === "mouseup");

                  if (self.hasmoving) {
                    self.scrollmom.doMomentum();
                    self.lastmouseup = true;
                    self.hideCursor();
                    if (cap.hasmousecapture) { _doc.releaseCapture(); }
                    if (ismouse) { return self.cancelEvent(e); }
                  }

                }
                else if (self.rail.drag.pt == 1) {
                  return self.onmouseup(e);
                }

              };

              var moveneedoffset = (opt.emulatetouch && self.isiframe && !cap.hasmousecapture);

              var locktollerance = opt.directionlockdeadzone * 0.3 | 0;

              self.ontouchmove = function (e, byiframe) {

                if (!self.rail.drag) { return true; }

                if (e.targetTouches && opt.preventmultitouchscrolling) {
                  if (e.targetTouches.length > 1) { return true; } // multitouch
                }

                //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
                if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) { return true; }

                if (self.rail.drag.pt == 2) {

                  if (("changedTouches" in e)) {
                    e.clientX = e.changedTouches[0].clientX;
                    e.clientY = e.changedTouches[0].clientY;
                  }

                  var ofy, ofx;
                  ofx = ofy = 0;

                  if (moveneedoffset && !byiframe) {
                    var wp = self.win.position();
                    ofx = -wp.left;
                    ofy = -wp.top;
                  }

                  var fy = e.clientY + ofy;
                  var my = (fy - self.rail.drag.y);
                  var fx = e.clientX + ofx;
                  var mx = (fx - self.rail.drag.x);

                  var ny = self.rail.drag.st - my;

                  if (self.ishwscroll && opt.bouncescroll) {
                    if (ny < 0) {
                      ny = Math.round(ny / 2);
                    } else if (ny > self.page.maxh) {
                      ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
                    }
                  } else {
                    if (ny < 0) {
                      ny = 0;
                      fy = 0;
                    }
                    else if (ny > self.page.maxh) {
                      ny = self.page.maxh;
                      fy = 0;
                    }
                    if (fy === 0 && !self.hasmoving) {
                      if (!self.ispage) { self.rail.drag = false; }
                      return true;
                    }
                  }

                  var nx = self.getScrollLeft();

                  if (self.railh && self.railh.scrollable) {
                    nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;

                    if (self.ishwscroll && opt.bouncescroll) {
                      if (nx < 0) {
                        nx = Math.round(nx / 2);
                      } else if (nx > self.page.maxw) {
                        nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
                      }
                    } else {
                      if (nx < 0) {
                        nx = 0;
                        fx = 0;
                      }
                      if (nx > self.page.maxw) {
                        nx = self.page.maxw;
                        fx = 0;
                      }
                    }

                  }


                  if (!self.hasmoving) {

                    if (self.rail.drag.y === e.clientY && self.rail.drag.x === e.clientX) { return self.cancelEvent(e); }  // prevent first useless move event 

                    var ay = Math.abs(my);
                    var ax = Math.abs(mx);
                    var dz = opt.directionlockdeadzone;

                    if (!self.rail.drag.ck) {
                      if (ay > dz && ax > dz) { self.rail.drag.dl = "f"; }
                      else if (ay > dz) { self.rail.drag.dl = (ax > locktollerance) ? "f" : "v"; }
                      else if (ax > dz) { self.rail.drag.dl = (ay > locktollerance) ? "f" : "h"; }
                    }
                    else if (self.rail.drag.ck == "v") {
                      if (ax > dz && ay <= locktollerance) {
                        self.rail.drag = false;
                      }
                      else if (ay > dz) { self.rail.drag.dl = "v"; }

                    }
                    else if (self.rail.drag.ck == "h") {

                      if (ay > dz && ax <= locktollerance) {
                        self.rail.drag = false;
                      }
                      else if (ax > dz) { self.rail.drag.dl = "h"; }

                    }

                    if (!self.rail.drag.dl) { return self.cancelEvent(e); }

                    self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                    self.hasmoving = true;
                  }

                  if (self.preventclick && !self.preventclick.click) {
                    self.preventclick.click = self.preventclick.tg.onclick || false;
                    self.preventclick.tg.onclick = self.onpreventclick;
                  }

                  if (self.rail.drag.dl) {
                    if (self.rail.drag.dl == "v") { nx = self.rail.drag.sl; }
                    else if (self.rail.drag.dl == "h") { ny = self.rail.drag.st; }
                  }

                  self.synched("touchmove", function () {
                    if (self.rail.drag && (self.rail.drag.pt == 2)) {
                      if (self.prepareTransition) { self.resetTransition(); }
                      if (self.rail.scrollable) { self.setScrollTop(ny); }
                      self.scrollmom.update(fx, fy);
                      if (self.railh && self.railh.scrollable) {
                        self.setScrollLeft(nx);
                        self.showCursor(ny, nx);
                      } else {
                        self.showCursor(ny);
                      }
                      if (cap.isie10) { _doc.selection.clear(); }
                    }
                  });

                  return self.cancelEvent(e);

                }
                else if (self.rail.drag.pt == 1) { // drag on cursor
                  return self.onmousemove(e);
                }

              };

              self.ontouchstartCursor = function (e, hronly) {
                if (self.rail.drag && self.rail.drag.pt != 3) { return; }
                if (self.locked) { return self.cancelEvent(e); }
                self.cancelScroll();
                self.rail.drag = {
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY,
                  sx: self.scroll.x,
                  sy: self.scroll.y,
                  pt: 3,
                  hr: (!!hronly)
                };
                var tg = self.getTarget(e);
                if (!self.ispage && cap.hasmousecapture) { tg.setCapture(); }
                if (self.isiframe && !cap.hasmousecapture) {
                  self.saved.csspointerevents = self.doc.css("pointer-events");
                  self.css(self.doc, { "pointer-events": "none" });
                }
                return self.cancelEvent(e);
              };

              self.ontouchendCursor = function (e) {
                if (self.rail.drag) {
                  if (cap.hasmousecapture) { _doc.releaseCapture(); }
                  if (self.isiframe && !cap.hasmousecapture) { self.doc.css("pointer-events", self.saved.csspointerevents); }
                  if (self.rail.drag.pt != 3) { return; }
                  self.rail.drag = false;
                  return self.cancelEvent(e);
                }
              };

              self.ontouchmoveCursor = function (e) {
                if (self.rail.drag) {
                  if (self.rail.drag.pt != 3) { return; }

                  self.cursorfreezed = true;

                  if (self.rail.drag.hr) {
                    self.scroll.x = self.rail.drag.sx + (e.touches[0].clientX - self.rail.drag.x);
                    if (self.scroll.x < 0) { self.scroll.x = 0; }
                    var mw = self.scrollvaluemaxw;
                    if (self.scroll.x > mw) { self.scroll.x = mw; }
                  } else {
                    self.scroll.y = self.rail.drag.sy + (e.touches[0].clientY - self.rail.drag.y);
                    if (self.scroll.y < 0) { self.scroll.y = 0; }
                    var my = self.scrollvaluemax;
                    if (self.scroll.y > my) { self.scroll.y = my; }
                  }

                  self.synched('touchmove', function () {
                    if (self.rail.drag && (self.rail.drag.pt == 3)) {
                      self.showCursor();
                      if (self.rail.drag.hr) { self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), opt.cursordragspeed); }
                      else { self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), opt.cursordragspeed); }
                    }
                  });

                  return self.cancelEvent(e);
                }

              };

            }

            self.onmousedown = function (e, hronly) {
              if (self.rail.drag && self.rail.drag.pt != 1) { return; }
              if (self.railslocked) { return self.cancelEvent(e); }
              self.cancelScroll();
              self.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: self.scroll.x,
                sy: self.scroll.y,
                pt: 1,
                hr: hronly || false
              };
              var tg = self.getTarget(e);

              if (cap.hasmousecapture) { tg.setCapture(); }
              if (self.isiframe && !cap.hasmousecapture) {
                self.saved.csspointerevents = self.doc.css("pointer-events");
                self.css(self.doc, {
                  "pointer-events": "none"
                });
              }
              self.hasmoving = false;
              return self.cancelEvent(e);
            };

            self.onmouseup = function (e) {
              if (self.rail.drag) {
                if (self.rail.drag.pt != 1) { return true; }

                if (cap.hasmousecapture) { _doc.releaseCapture(); }
                if (self.isiframe && !cap.hasmousecapture) { self.doc.css("pointer-events", self.saved.csspointerevents); }
                self.rail.drag = false;
                self.cursorfreezed = false;
                if (self.hasmoving) { self.triggerScrollEnd(); }
                return self.cancelEvent(e);
              }
            };

            self.onmousemove = function (e) {
              if (self.rail.drag) {
                if (self.rail.drag.pt !== 1) { return; }

                if (cap.ischrome && e.which === 0) { return self.onmouseup(e); }

                self.cursorfreezed = true;

                if (!self.hasmoving) { self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0); }

                self.hasmoving = true;

                if (self.rail.drag.hr) {
                  self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
                  if (self.scroll.x < 0) { self.scroll.x = 0; }
                  var mw = self.scrollvaluemaxw;
                  if (self.scroll.x > mw) { self.scroll.x = mw; }
                } else {
                  self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
                  if (self.scroll.y < 0) { self.scroll.y = 0; }
                  var my = self.scrollvaluemax;
                  if (self.scroll.y > my) { self.scroll.y = my; }
                }

                self.synched('mousemove', function () {

                  if (self.cursorfreezed) {
                    self.showCursor();

                    if (self.rail.drag.hr) {
                      self.scrollLeft(Math.round(self.scroll.x * self.scrollratio.x));
                    } else {
                      self.scrollTop(Math.round(self.scroll.y * self.scrollratio.y));
                    }

                  }
                });

                return self.cancelEvent(e);
              }
              else {
                self.checkarea = 0;
              }
            };

            if (cap.cantouch || opt.emulatetouch) {

              self.onpreventclick = function (e) {
                if (self.preventclick) {
                  self.preventclick.tg.onclick = self.preventclick.click;
                  self.preventclick = false;
                  return self.cancelEvent(e);
                }
              };

              self.onclick = (cap.isios) ? false : function (e) {  // it needs to check IE11 ???
                if (self.lastmouseup) {
                  self.lastmouseup = false;
                  return self.cancelEvent(e);
                } else {
                  return true;
                }
              };

              if (opt.grabcursorenabled && cap.cursorgrabvalue) {
                self.css((self.ispage) ? self.doc : self.win, {
                  'cursor': cap.cursorgrabvalue
                });
                self.css(self.rail, {
                  'cursor': cap.cursorgrabvalue
                });
              }

            } else {

              var checkSelectionScroll = function (e) {
                if (!self.selectiondrag) { return; }

                if (e) {
                  var ww = self.win.outerHeight();
                  var df = (e.pageY - self.selectiondrag.top);
                  if (df > 0 && df < ww) { df = 0; }
                  if (df >= ww) { df -= ww; }
                  self.selectiondrag.df = df;
                }
                if (self.selectiondrag.df === 0) { return; }

                var rt = -(self.selectiondrag.df*2/6)|0;
                self.doScrollBy(rt);

                self.debounced("doselectionscroll", function () {
                  checkSelectionScroll();
                }, 50);
              };

              if ("getSelection" in _doc) { // A grade - Major browsers
                self.hasTextSelected = function () {
                  return (_doc.getSelection().rangeCount > 0);
                };
              } else if ("selection" in _doc) { //IE9-
                self.hasTextSelected = function () {
                  return (_doc.selection.type != "None");
                };
              } else {
                self.hasTextSelected = function () { // no support
                  return false;
                };
              }

              self.onselectionstart = function (e) {
                //  More testing - severe chrome issues           
                /* 
                              if (!self.haswrapper&&(e.which&&e.which==2)) {  // fool browser to manage middle button scrolling
                                self.win.css({'overflow':'auto'});
                                setTimeout(function(){
                                  self.win.css({'overflow':'hidden'});
                                },10);                
                                return true;
                              }            
                */
                if (self.ispage) { return; }
                self.selectiondrag = self.win.offset();
              };

              self.onselectionend = function (e) {
                self.selectiondrag = false;
              };
              self.onselectiondrag = function (e) {
                if (!self.selectiondrag) { return; }
                if (self.hasTextSelected()) { self.debounced("selectionscroll", function () {
                  checkSelectionScroll(e);
                }, 250); }
              };
            }

            if (cap.hasw3ctouch) { //IE11+
              self.css((self.ispage) ? $("html") : self.win, { 'touch-action': 'none' });
              self.css(self.rail, {
                'touch-action': 'none'
              });
              self.css(self.cursor, {
                'touch-action': 'none'
              });
              self.bind(self.win, "pointerdown", self.ontouchstart);
              self.bind(_doc, "pointerup", self.ontouchend);
              self.delegate(_doc, "pointermove", self.ontouchmove);
            } else if (cap.hasmstouch) { //IE10
              self.css((self.ispage) ? $("html") : self.win, { '-ms-touch-action': 'none' });
              self.css(self.rail, {
                '-ms-touch-action': 'none'
              });
              self.css(self.cursor, {
                '-ms-touch-action': 'none'
              });
              self.bind(self.win, "MSPointerDown", self.ontouchstart);
              self.bind(_doc, "MSPointerUp", self.ontouchend);
              self.delegate(_doc, "MSPointerMove", self.ontouchmove);
              self.bind(self.cursor, "MSGestureHold", function (e) {
                e.preventDefault();
              });
              self.bind(self.cursor, "contextmenu", function (e) {
                e.preventDefault();
              });
            } else if (cap.cantouch) { // smartphones/touch devices
              self.bind(self.win, "touchstart", self.ontouchstart, false, true);
              self.bind(_doc, "touchend", self.ontouchend, false, true);
              self.bind(_doc, "touchcancel", self.ontouchend, false, true);
              self.delegate(_doc, "touchmove", self.ontouchmove, false, true);
            }

            if (opt.emulatetouch) {
              self.bind(self.win, "mousedown", self.ontouchstart, false, true);
              self.bind(_doc, "mouseup", self.ontouchend, false, true);
              self.bind(_doc, "mousemove", self.ontouchmove, false, true);
            }

            if (opt.cursordragontouch || (!cap.cantouch && !opt.emulatetouch)) {

              self.rail.css({
                cursor: "default"
              });
              self.railh && self.railh.css({
                cursor: "default"
              });

              self.jqbind(self.rail, "mouseenter", function () {
                if (!self.ispage && !self.win.is(":visible")) { return false; }
                if (self.canshowonmouseevent) { self.showCursor(); }
                self.rail.active = true;
              });
              self.jqbind(self.rail, "mouseleave", function () {
                self.rail.active = false;
                if (!self.rail.drag) { self.hideCursor(); }
              });

              if (opt.sensitiverail) {
                self.bind(self.rail, "click", function (e) {
                  self.doRailClick(e, false, false);
                });
                self.bind(self.rail, "dblclick", function (e) {
                  self.doRailClick(e, true, false);
                });
                self.bind(self.cursor, "click", function (e) {
                  self.cancelEvent(e);
                });
                self.bind(self.cursor, "dblclick", function (e) {
                  self.cancelEvent(e);
                });
              }

              if (self.railh) {
                self.jqbind(self.railh, "mouseenter", function () {
                  if (!self.ispage && !self.win.is(":visible")) { return false; }
                  if (self.canshowonmouseevent) { self.showCursor(); }
                  self.rail.active = true;
                });
                self.jqbind(self.railh, "mouseleave", function () {
                  self.rail.active = false;
                  if (!self.rail.drag) { self.hideCursor(); }
                });

                if (opt.sensitiverail) {
                  self.bind(self.railh, "click", function (e) {
                    self.doRailClick(e, false, true);
                  });
                  self.bind(self.railh, "dblclick", function (e) {
                    self.doRailClick(e, true, true);
                  });
                  self.bind(self.cursorh, "click", function (e) {
                    self.cancelEvent(e);
                  });
                  self.bind(self.cursorh, "dblclick", function (e) {
                    self.cancelEvent(e);
                  });
                }

              }

            }

            if (opt.cursordragontouch && (this.istouchcapable || cap.cantouch)) {
              self.bind(self.cursor, "touchstart", self.ontouchstartCursor);
              self.bind(self.cursor, "touchmove", self.ontouchmoveCursor);
              self.bind(self.cursor, "touchend", self.ontouchendCursor);
              self.cursorh && self.bind(self.cursorh, "touchstart", function (e) {
                self.ontouchstartCursor(e, true);
              });
              self.cursorh && self.bind(self.cursorh, "touchmove", self.ontouchmoveCursor);
              self.cursorh && self.bind(self.cursorh, "touchend", self.ontouchendCursor);
            }

    //        if (!cap.cantouch && !opt.emulatetouch) {
            if (!opt.emulatetouch && !cap.isandroid && !cap.isios) {

              self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.onmouseup);
              self.bind(_doc, "mousemove", self.onmousemove);
              if (self.onclick) { self.bind(_doc, "click", self.onclick); }

              self.bind(self.cursor, "mousedown", self.onmousedown);
              self.bind(self.cursor, "mouseup", self.onmouseup);

              if (self.railh) {
                self.bind(self.cursorh, "mousedown", function (e) {
                  self.onmousedown(e, true);
                });
                self.bind(self.cursorh, "mouseup", self.onmouseup);
              }

              if (!self.ispage && opt.enablescrollonselection) {
                self.bind(self.win[0], "mousedown", self.onselectionstart);
                self.bind(_doc, "mouseup", self.onselectionend);
                self.bind(self.cursor, "mouseup", self.onselectionend);
                if (self.cursorh) { self.bind(self.cursorh, "mouseup", self.onselectionend); }
                self.bind(_doc, "mousemove", self.onselectiondrag);
              }

              if (self.zoom) {
                self.jqbind(self.zoom, "mouseenter", function () {
                  if (self.canshowonmouseevent) { self.showCursor(); }
                  self.rail.active = true;
                });
                self.jqbind(self.zoom, "mouseleave", function () {
                  self.rail.active = false;
                  if (!self.rail.drag) { self.hideCursor(); }
                });
              }

            } else {

              self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.ontouchend);
              if (self.onclick) { self.bind(_doc, "click", self.onclick); }

              if (opt.cursordragontouch) {
                self.bind(self.cursor, "mousedown", self.onmousedown);
                self.bind(self.cursor, "mouseup", self.onmouseup);
                self.cursorh && self.bind(self.cursorh, "mousedown", function (e) {
                  self.onmousedown(e, true);
                });
                self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup);
              } else {
                self.bind(self.rail, "mousedown", function (e) { e.preventDefault(); });  // prevent text selection             
                self.railh && self.bind(self.railh, "mousedown", function (e) { e.preventDefault(); });
              }

            }


            if (opt.enablemousewheel) {
              if (!self.isiframe) { self.mousewheel((cap.isie && self.ispage) ? _doc : self.win, self.onmousewheel); }
              self.mousewheel(self.rail, self.onmousewheel);
              if (self.railh) { self.mousewheel(self.railh, self.onmousewheelhr); }
            }

            if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[0].nodeName))) {
              if (!self.win.attr("tabindex")) { self.win.attr({
                "tabindex": ++tabindexcounter
              }); }

              self.bind(self.win, "focus", function (e) {  // better using native events
                domfocus = (self.getTarget(e)).id || self.getTarget(e) || false;
                self.hasfocus = true;
                if (self.canshowonmouseevent) { self.noticeCursor(); }
              });
              self.bind(self.win, "blur", function (e) {  // *
                domfocus = false;
                self.hasfocus = false;
              });

              self.bind(self.win, "mouseenter", function (e) {   // *
                mousefocus = (self.getTarget(e)).id || self.getTarget(e) || false;
                self.hasmousefocus = true;
                if (self.canshowonmouseevent) { self.noticeCursor(); }
              });
              self.bind(self.win, "mouseleave", function (e) {   // *       
                mousefocus = false;
                self.hasmousefocus = false;
                if (!self.rail.drag) { self.hideCursor(); }
              });

            }


            //Thanks to http://www.quirksmode.org !!
            self.onkeypress = function (e) {
              if (self.railslocked && self.page.maxh === 0) { return true; }

              e = e || _win.event;
              var tg = self.getTarget(e);
              if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
                var tp = tg.getAttribute('type') || tg.type || false;
                if ((!tp) || !(/submit|button|cancel/i.tp)) { return true; }
              }

              if ($(tg).attr('contenteditable')) { return true; }

              if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
                var key = e.keyCode;

                if (self.railslocked && key != 27) { return self.cancelEvent(e); }

                var ctrl = e.ctrlKey || false;
                var shift = e.shiftKey || false;

                var ret = false;
                switch (key) {
                  case 38:
                  case 63233: //safari
                    self.doScrollBy(24 * 3);
                    ret = true;
                    break;
                  case 40:
                  case 63235: //safari
                    self.doScrollBy(-24 * 3);
                    ret = true;
                    break;
                  case 37:
                  case 63232: //safari
                    if (self.railh) {
                      (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
                      ret = true;
                    }
                    break;
                  case 39:
                  case 63234: //safari
                    if (self.railh) {
                      (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
                      ret = true;
                    }
                    break;
                  case 33:
                  case 63276: // safari
                    self.doScrollBy(self.view.h);
                    ret = true;
                    break;
                  case 34:
                  case 63277: // safari
                    self.doScrollBy(-self.view.h);
                    ret = true;
                    break;
                  case 36:
                  case 63273: // safari                
                    (self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
                    ret = true;
                    break;
                  case 35:
                  case 63275: // safari
                    (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
                    ret = true;
                    break;
                  case 32:
                    if (opt.spacebarenabled) {
                      (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                      ret = true;
                    }
                    break;
                  case 27: // ESC
                    if (self.zoomactive) {
                      self.doZoom();
                      ret = true;
                    }
                    break;
                }
                if (ret) { return self.cancelEvent(e); }
              }
            };

            if (opt.enablekeyboard) { self.bind(_doc, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress); }

            self.bind(_doc, "keydown", function (e) {
              var ctrl = e.ctrlKey || false;
              if (ctrl) { self.wheelprevented = true; }
            });
            self.bind(_doc, "keyup", function (e) {
              var ctrl = e.ctrlKey || false;
              if (!ctrl) { self.wheelprevented = false; }
            });
            self.bind(_win, "blur", function (e) {
              self.wheelprevented = false;
            });

            self.bind(_win, 'resize', self.onscreenresize);
            self.bind(_win, 'orientationchange', self.onscreenresize);

            self.bind(_win, "load", self.lazyResize);

            if (cap.ischrome && !self.ispage && !self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
              var tmp = self.win.attr("style");
              var ww = parseFloat(self.win.css("width")) + 1;
              self.win.css('width', ww);
              self.synched("chromefix", function () {
                self.win.attr("style", tmp);
              });
            }


            // Trying a cross-browser implementation - good luck!

            self.onAttributeChange = function (e) {
              self.lazyResize(self.isieold ? 250 : 30);
            };

            if (opt.enableobserver) {

              if ((!self.isie11) && (ClsMutationObserver !== false)) {  // IE11 crashes  #568
                self.observerbody = new ClsMutationObserver(function (mutations) {
                  mutations.forEach(function (mut) {
                    if (mut.type == "attributes") {
                      return ($body.hasClass("modal-open") && $body.hasClass("modal-dialog") && !$.contains($('.modal-dialog')[0], self.doc[0])) ? self.hide() : self.show();  // Support for Bootstrap modal; Added check if the nice scroll element is inside a modal
                    }
                  });
                  if (self.me.clientWidth != self.page.width || self.me.clientHeight != self.page.height) { return self.lazyResize(30); }
                });
                self.observerbody.observe(_doc.body, {
                  childList: true,
                  subtree: true,
                  characterData: false,
                  attributes: true,
                  attributeFilter: ['class']
                });
              }

              if (!self.ispage && !self.haswrapper) {

                var _dom = self.win[0];

                // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
                if (ClsMutationObserver !== false) {
                  self.observer = new ClsMutationObserver(function (mutations) {
                    mutations.forEach(self.onAttributeChange);
                  });
                  self.observer.observe(_dom, {
                    childList: true,
                    characterData: false,
                    attributes: true,
                    subtree: false
                  });
                  self.observerremover = new ClsMutationObserver(function (mutations) {
                    mutations.forEach(function (mo) {
                      if (mo.removedNodes.length > 0) {
                        for (var dd in mo.removedNodes) {
                          if (!!self && (mo.removedNodes[dd] === _dom)) { return self.remove(); }
                        }
                      }
                    });
                  });
                  self.observerremover.observe(_dom.parentNode, {
                    childList: true,
                    characterData: false,
                    attributes: false,
                    subtree: false
                  });
                } else {
                  self.bind(_dom, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
                  if (cap.isie9) { _dom.attachEvent("onpropertychange", self.onAttributeChange); } //IE9 DOMAttrModified bug
                  self.bind(_dom, "DOMNodeRemoved", function (e) {
                    if (e.target === _dom) { self.remove(); }
                  });
                }
              }

            }

            //

            if (!self.ispage && opt.boxzoom) { self.bind(_win, "resize", self.resizeZoom); }
            if (self.istextarea) {
              self.bind(self.win, "keydown", self.lazyResize);
              self.bind(self.win, "mouseup", self.lazyResize);
            }

            self.lazyResize(30);

          }

          if (this.doc[0].nodeName == 'IFRAME') {
            var oniframeload = function () {
              self.iframexd = false;
              var doc;
              try {
                doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow._doc;
                var a = doc.domain;
              } catch (e) {
                self.iframexd = true;
                doc = false;
              }

              if (self.iframexd) {
                if ("console" in _win) { console.log('NiceScroll error: policy restriced iframe'); }
                return true; //cross-domain - I can't manage this        
              }

              self.forcescreen = true;

              if (self.isiframe) {
                self.iframe = {
                  "doc": $(doc),
                  "html": self.doc.contents().find('html')[0],
                  "body": self.doc.contents().find('body')[0]
                };
                self.getContentSize = function () {
                  return {
                    w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                    h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
                  };
                };
                self.docscroll = $(self.iframe.body);
              }

              if (!cap.isios && opt.iframeautoresize && !self.isiframe) {
                self.win.scrollTop(0); // reset position
                self.doc.height(""); //reset height to fix browser bug
                var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
                self.doc.height(hh);
              }
              self.lazyResize(30);

              self.css($(self.iframe.body), _scrollyhidden);

              if (cap.isios && self.haswrapper) {
                self.css($(doc.body), {
                  '-webkit-transform': 'translate3d(0,0,0)'
                }); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
              }

              if ('contentWindow' in this) {
                self.bind(this.contentWindow, "scroll", self.onscroll); //IE8 & minor
              } else {
                self.bind(doc, "scroll", self.onscroll);
              }

              if (opt.enablemousewheel) {
                self.mousewheel(doc, self.onmousewheel);
              }

              if (opt.enablekeyboard) { self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress); }

              if (cap.cantouch) {
                self.bind(doc, "touchstart", self.ontouchstart);
                self.bind(doc, "touchmove", self.ontouchmove);
              }
              else if (opt.emulatetouch) {
                self.bind(doc, "mousedown", self.ontouchstart);
                self.bind(doc, "mousemove", function (e) {
                  return self.ontouchmove(e, true);
                });
                if (opt.grabcursorenabled && cap.cursorgrabvalue) { self.css($(doc.body), {
                  'cursor': cap.cursorgrabvalue
                }); }
              }

              self.bind(doc, "mouseup", self.ontouchend);

              if (self.zoom) {
                if (opt.dblclickzoom) { self.bind(doc, 'dblclick', self.doZoom); }
                if (self.ongesturezoom) { self.bind(doc, "gestureend", self.ongesturezoom); }
              }
            };

            if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
              setTimeout(function () {
                oniframeload.call(self.doc[0], false);
              }, 500);
            }
            self.bind(this.doc, "load", oniframeload);

          }

        };

        this.showCursor = function (py, px) {
          if (self.cursortimeout) {
            clearTimeout(self.cursortimeout);
            self.cursortimeout = 0;
          }
          if (!self.rail) { return; }
          if (self.autohidedom) {
            self.autohidedom.stop().css({
              opacity: opt.cursoropacitymax
            });
            self.cursoractive = true;
          }

          if (!self.rail.drag || self.rail.drag.pt != 1) {
            if (py !== undefined && py !== false) {
              self.scroll.y = (py / self.scrollratio.y) | 0;
            }
            if (px !== undefined) {
              self.scroll.x = (px / self.scrollratio.x) | 0;
            }
          }

          self.cursor.css({
            height: self.cursorheight,
            top: self.scroll.y
          });
          if (self.cursorh) {
            var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
            self.cursorh.css({
              width: self.cursorwidth,
              left: (!self.rail.align && self.rail.visibility) ? lx + self.rail.width : lx
            });
            self.cursoractive = true;
          }

          if (self.zoom) { self.zoom.stop().css({
            opacity: opt.cursoropacitymax
          }); }
        };

        this.hideCursor = function (tm) {
          if (self.cursortimeout) { return; }
          if (!self.rail) { return; }
          if (!self.autohidedom) { return; }

          if (self.hasmousefocus && opt.autohidemode === "leave") { return; }
          self.cursortimeout = setTimeout(function () {
            if (!self.rail.active || !self.showonmouseevent) {
              self.autohidedom.stop().animate({
                opacity: opt.cursoropacitymin
              });
              if (self.zoom) { self.zoom.stop().animate({
                opacity: opt.cursoropacitymin
              }); }
              self.cursoractive = false;
            }
            self.cursortimeout = 0;
          }, tm || opt.hidecursordelay);
        };

        this.noticeCursor = function (tm, py, px) {
          self.showCursor(py, px);
          if (!self.rail.active) { self.hideCursor(tm); }
        };

        this.getContentSize =
          (self.ispage) ?
            function () {
              return {
                w: Math.max(_doc.body.scrollWidth, _doc.documentElement.scrollWidth),
                h: Math.max(_doc.body.scrollHeight, _doc.documentElement.scrollHeight)
              };
            } : (self.haswrapper) ?
              function () {
                return {
                  w: self.doc[0].offsetWidth,
                  h: self.doc[0].offsetHeight
                };
              } : function () {
                return {
                  w: self.docscroll[0].scrollWidth,
                  h: self.docscroll[0].scrollHeight
                };
              };

        this.onResize = function (e, page) {

          if (!self || !self.win) { return false; }

          var premaxh = self.page.maxh,
              premaxw = self.page.maxw,
              previewh = self.view.h,
              previeww = self.view.w;

          self.view = {
            w: (self.ispage) ? self.win.width() : self.win[0].clientWidth,
            h: (self.ispage) ? self.win.height() : self.win[0].clientHeight
          };

          self.page = (page) ? page : self.getContentSize();

          self.page.maxh = Math.max(0, self.page.h - self.view.h);
          self.page.maxw = Math.max(0, self.page.w - self.view.w);

          if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == previeww) && (self.view.h == previewh)) {
            // test position        
            if (!self.ispage) {
              var pos = self.win.offset();
              if (self.lastposition) {
                var lst = self.lastposition;
                if ((lst.top == pos.top) && (lst.left == pos.left)) { return self; } //nothing to do            
              }
              self.lastposition = pos;
            } else {
              return self; //nothing to do
            }
          }

          if (self.page.maxh === 0) {
            self.hideRail();
            self.scrollvaluemax = 0;
            self.scroll.y = 0;
            self.scrollratio.y = 0;
            self.cursorheight = 0;
            self.setScrollTop(0);
            if (self.rail) { self.rail.scrollable = false; }
          } else {
            self.page.maxh -= (opt.railpadding.top + opt.railpadding.bottom);
            self.rail.scrollable = true;
          }

          if (self.page.maxw === 0) {
            self.hideRailHr();
            self.scrollvaluemaxw = 0;
            self.scroll.x = 0;
            self.scrollratio.x = 0;
            self.cursorwidth = 0;
            self.setScrollLeft(0);
            if (self.railh) {
              self.railh.scrollable = false;
            }
          } else {
            self.page.maxw -= (opt.railpadding.left + opt.railpadding.right);
            if (self.railh) { self.railh.scrollable = (opt.horizrailenabled); }
          }

          self.railslocked = (self.locked) || ((self.page.maxh === 0) && (self.page.maxw === 0));
          if (self.railslocked) {
            if (!self.ispage) { self.updateScrollBar(self.view); }
            return false;
          }

          if (!self.hidden) {
            if (!self.rail.visibility) { self.showRail(); }
            if (self.railh && !self.railh.visibility) { self.showRailHr(); }
          }

          if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') { self.view.h -= 20; }

          self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
          self.cursorheight = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorheight);

          self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
          self.cursorwidth = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorwidth);

          self.scrollvaluemax = self.view.h - self.cursorheight - (opt.railpadding.top + opt.railpadding.bottom);
          if (!self.hasborderbox) { self.scrollvaluemax -= self.cursor[0].offsetHeight - self.cursor[0].clientHeight; }

          if (self.railh) {
            self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
            self.scrollvaluemaxw = self.railh.width - self.cursorwidth - (opt.railpadding.left + opt.railpadding.right);
          }

          if (!self.ispage) { self.updateScrollBar(self.view); }

          self.scrollratio = {
            x: (self.page.maxw / self.scrollvaluemaxw),
            y: (self.page.maxh / self.scrollvaluemax)
          };

          var sy = self.getScrollTop();
          if (sy > self.page.maxh) {
            self.doScrollTop(self.page.maxh);
          } else {
            self.scroll.y = (self.getScrollTop() / self.scrollratio.y) | 0;
            self.scroll.x = (self.getScrollLeft() / self.scrollratio.x) | 0;
            if (self.cursoractive) { self.noticeCursor(); }
          }

          if (self.scroll.y && (self.getScrollTop() === 0)) { self.doScrollTo((self.scroll.y * self.scrollratio.y)|0); }

          return self;
        };

        this.resize = self.onResize;

        var hlazyresize = 0;

        this.onscreenresize = function(e) {
          clearTimeout(hlazyresize);

          var hiderails = (!self.ispage && !self.haswrapper);
          if (hiderails) { self.hideRails(); }

          hlazyresize = setTimeout(function () {
            if (self) {
              if (hiderails) { self.showRails(); }
              self.resize();
            }
            hlazyresize=0;
          }, 120);
        };

        this.lazyResize = function (tm) { // event debounce

          clearTimeout(hlazyresize);

          tm = isNaN(tm) ? 240 : tm;

          hlazyresize = setTimeout(function () {
            self && self.resize();
            hlazyresize=0;
          }, tm);

          return self;

        };

        // derived by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
        function _modernWheelEvent(dom, name, fn, bubble) {
          self._bind(dom, name, function (e) {
            e = e || _win.event;
            var event = {
              original: e,
              target: e.target || e.srcElement,
              type: "wheel",
              deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function () {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                return false;
              },
              stopImmediatePropagation: function () {
                (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
              }
            };

            if (name == "mousewheel") {
              e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
              e.wheelDeltaY && (event.deltaY = -1 / 40 * e.wheelDeltaY);
              !event.deltaY && !event.deltaX && (event.deltaY = -1 / 40 * e.wheelDelta);
            } else {
              event.deltaY = e.detail;
            }

            return fn.call(dom, event);
          }, bubble);
        }



        this.jqbind = function (dom, name, fn) { // use jquery bind for non-native events (mouseenter/mouseleave)
          self.events.push({
            e: dom,
            n: name,
            f: fn,
            q: true
          });
          $(dom).on(name, fn);
        };

        this.mousewheel = function (dom, fn, bubble) { // bind mousewheel
          var el = ("jquery" in dom) ? dom[0] : dom;
          if ("onwheel" in _doc.createElement("div")) { // Modern browsers support "wheel"
            self._bind(el, "wheel", fn, bubble || false);
          } else {
            var wname = (_doc.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll"; // older Webkit+IE support or older Firefox          
            _modernWheelEvent(el, wname, fn, bubble || false);
            if (wname == "DOMMouseScroll") { _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false); } // Firefox legacy
          }
        };

        var passiveSupported = false;

        if (cap.haseventlistener) {  // W3C standard event model

          // thanks to https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
          try { var options = Object.defineProperty({}, "passive", { get: function () { passiveSupported = !0; } }); _win.addEventListener("test", null, options); } catch (err) { }

          this.stopPropagation = function (e) {
            if (!e) { return false; }
            e = (e.original) ? e.original : e;
            e.stopPropagation();
            return false;
          };

          this.cancelEvent = function(e) {
            if (e.cancelable) { e.preventDefault(); }
            e.stopImmediatePropagation();
            if (e.preventManipulation) { e.preventManipulation(); }  // IE10+
            return false;
          };      

        } else {

          // inspired from https://gist.github.com/jonathantneal/2415137      

          Event.prototype.preventDefault = function () {
            this.returnValue = false;
          };

          Event.prototype.stopPropagation = function () {
            this.cancelBubble = true;
          };

          _win.constructor.prototype.addEventListener = _doc.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (type, listener, useCapture) {
            this.attachEvent("on" + type, listener);
          };
          _win.constructor.prototype.removeEventListener = _doc.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (type, listener, useCapture) {
            this.detachEvent("on" + type, listener);
          };

          // Thanks to http://www.switchonthecode.com !!
          this.cancelEvent = function (e) {
            e = e || _win.event;
            if (e) {          
              e.cancelBubble = true;
              e.cancel = true;
              e.returnValue = false;
            }  
            return false;
          };

          this.stopPropagation = function (e) {
            e = e || _win.event;
            if (e) { e.cancelBubble = true; }
            return false;
          };

        }

        this.delegate = function (dom, name, fn, bubble, active) {

          var de = delegatevents[name] || false;

          if (!de) {

            de = {
              a: [],
              l: [],
              f: function (e) {
                var lst = de.l, l = lst.length - 1;
                var r = false;
                for (var a = l; a >= 0; a--) {
                  r = lst[a].call(e.target, e);
                  if (r === false) { return false; }
                }
                return r;
              }
            };

            self.bind(dom, name, de.f, bubble, active);

            delegatevents[name] = de;

          }

          if (self.ispage) {
            de.a = [self.id].concat(de.a);
            de.l = [fn].concat(de.l);
          } else {
            de.a.push(self.id);
            de.l.push(fn);        
          }

        };

        this.undelegate = function (dom, name, fn, bubble, active) {
          var de = delegatevents[name]||false;
          if (de&&de.l) {  // quick fix #683
            for (var a=0,l=de.l.length;a<l;a++) {
              if (de.a[a] === self.id) {
                de.a.splice(a);
                de.l.splice(a);
                if (de.a.length===0) {
                  self._unbind(dom,name,de.l.f);
                  delegatevents[name] = null;
                }
              }
            }
          }
        };

        this.bind = function (dom, name, fn, bubble, active) {
          var el = ("jquery" in dom) ? dom[0] : dom;
          self._bind(el, name, fn, bubble || false, active || false);
        };

        this._bind = function (el, name, fn, bubble, active) { // primitive bind

          self.events.push({
            e: el,
            n: name,
            f: fn,
            b: bubble,
            q: false
          });

          (passiveSupported && active) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false);
        };

        this._unbind = function (el, name, fn, bub) { // primitive unbind
          if (delegatevents[name]) { self.undelegate(el, name, fn, bub); }
          else { el.removeEventListener(name, fn, bub); }
        };

        this.unbindAll = function () {
          for (var a = 0; a < self.events.length; a++) {
            var r = self.events[a];
            (r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
          }
        };

        this.showRails = function () {
          return self.showRail().showRailHr();
        };

        this.showRail = function () {
          if ((self.page.maxh !== 0) && (self.ispage || self.win.css('display') != 'none')) {
            //self.visibility = true;
            self.rail.visibility = true;
            self.rail.css('display', 'block');
          }
          return self;
        };

        this.showRailHr = function () {
          if (self.railh) {
            if ((self.page.maxw !== 0) && (self.ispage || self.win.css('display') != 'none')) {
              self.railh.visibility = true;
              self.railh.css('display', 'block');
            }
          }
          return self;
        };

        this.hideRails = function () {
          return self.hideRail().hideRailHr();
        };

        this.hideRail = function () {
          //self.visibility = false;
          self.rail.visibility = false;
          self.rail.css('display', 'none');
          return self;
        };

        this.hideRailHr = function () {
          if (self.railh) {
            self.railh.visibility = false;
            self.railh.css('display', 'none');
          }
          return self;
        };

        this.show = function () {
          self.hidden = false;
          self.railslocked = false;
          return self.showRails();
        };

        this.hide = function () {
          self.hidden = true;
          self.railslocked = true;
          return self.hideRails();
        };

        this.toggle = function () {
          return (self.hidden) ? self.show() : self.hide();
        };

        this.remove = function () {
          self.stop();
          if (self.cursortimeout) { clearTimeout(self.cursortimeout); }
          for (var n in self.delaylist) { if (self.delaylist[n]) { clearAnimationFrame(self.delaylist[n].h); } }
          self.doZoomOut();
          self.unbindAll();

          if (cap.isie9) { self.win[0].detachEvent("onpropertychange", self.onAttributeChange); } //IE9 DOMAttrModified bug

          if (self.observer !== false) { self.observer.disconnect(); }
          if (self.observerremover !== false) { self.observerremover.disconnect(); }
          if (self.observerbody !== false) { self.observerbody.disconnect(); }

          self.events = null;

          if (self.cursor) {
            self.cursor.remove();
          }
          if (self.cursorh) {
            self.cursorh.remove();
          }
          if (self.rail) {
            self.rail.remove();
          }
          if (self.railh) {
            self.railh.remove();
          }
          if (self.zoom) {
            self.zoom.remove();
          }
          for (var a = 0; a < self.saved.css.length; a++) {
            var d = self.saved.css[a];
            d[0].css(d[1], (d[2] === undefined) ? '' : d[2]);
          }
          self.saved = false;
          self.me.data('__nicescroll', ''); //erase all traces

          // memory leak fixed by GianlucaGuarini - thanks a lot!
          // remove the current nicescroll from the $.nicescroll array & normalize array
          var lst = $.nicescroll;
          lst.each(function (i) {
            if (!this) { return; }
            if (this.id === self.id) {
              delete lst[i];
              for (var b = ++i; b < lst.length; b++ , i++) { lst[i] = lst[b]; }
              lst.length--;
              if (lst.length) { delete lst[lst.length]; }
            }
          });

          for (var i in self) {
            self[i] = null;
            delete self[i];
          }

          self = null;

        };

        this.scrollstart = function (fn) {
          this.onscrollstart = fn;
          return self;
        };
        this.scrollend = function (fn) {
          this.onscrollend = fn;
          return self;
        };
        this.scrollcancel = function (fn) {
          this.onscrollcancel = fn;
          return self;
        };

        this.zoomin = function (fn) {
          this.onzoomin = fn;
          return self;
        };
        this.zoomout = function (fn) {
          this.onzoomout = fn;
          return self;
        };

        this.isScrollable = function (e) {
          var dom = (e.target) ? e.target : e;
          if (dom.nodeName == 'OPTION') { return true; }
          while (dom && (dom.nodeType == 1) && (dom !== this.me[0]) && !(/^BODY|HTML/.test(dom.nodeName))) {
            var dd = $(dom);
            var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
            if (/scroll|auto/.test(ov)) { return (dom.clientHeight != dom.scrollHeight); }
            dom = (dom.parentNode) ? dom.parentNode : false;
          }
          return false;
        };

        this.getViewport = function (me) {
          var dom = (me && me.parentNode) ? me.parentNode : false;
          while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
            var dd = $(dom);
            if (/fixed|absolute/.test(dd.css("position"))) { return dd; }
            var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
            if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) { return dd; }
            if (dd.getNiceScroll().length > 0) { return dd; }
            dom = (dom.parentNode) ? dom.parentNode : false;
          }
          return false;
        };

        this.triggerScrollStart = function (cx, cy, rx, ry, ms) {

          if (self.onscrollstart) {
            var info = {
              type: "scrollstart",
              current: {
                x: cx,
                y: cy
              },
              request: {
                x: rx,
                y: ry
              },
              end: {
                x: self.newscrollx,
                y: self.newscrolly
              },
              speed: ms
            };
            self.onscrollstart.call(self, info);
          }

        };

        this.triggerScrollEnd = function () {
          if (self.onscrollend) {

            var px = self.getScrollLeft();
            var py = self.getScrollTop();

            var info = {
              type: "scrollend",
              current: {
                x: px,
                y: py
              },
              end: {
                x: px,
                y: py
              }
            };

            self.onscrollend.call(self, info);

          }

        };

        var scrolldiry = 0, scrolldirx = 0, scrolltmr = 0, scrollspd = 1;

        function doScrollRelative(px, py, chkscroll, iswheel) {

          if (!self.scrollrunning) {
            self.newscrolly = self.getScrollTop();
            self.newscrollx = self.getScrollLeft();
            scrolltmr = now();
          }

          var gap = (now() - scrolltmr);
          scrolltmr = now();

          if (gap > 350) {
            scrollspd = 1;
          } else {
            scrollspd += (2 - scrollspd) / 10;
          }

          px = px * scrollspd | 0;
          py = py * scrollspd | 0;

          if (px) {

            if (iswheel) { // mouse-only
              if (px < 0) {  // fix apple magic mouse swipe back/forward
                if (self.getScrollLeft() >= self.page.maxw) { return true; }
              } else {
                if (self.getScrollLeft() <= 0) { return true; }
              }
            }

            var dx = px > 0 ? 1 : -1;

            if (scrolldirx !== dx) {
              if (self.scrollmom) { self.scrollmom.stop(); }
              self.newscrollx = self.getScrollLeft();
              scrolldirx = dx;
            }

            self.lastdeltax -= px;

          }

          if (py) {

            var chk = (function () {
              var top = self.getScrollTop();
              if (py < 0) {
                if (top >= self.page.maxh) { return true; }
              } else {
                if (top <= 0) { return true; }
              }
            })();

            if (chk) {
              if (opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) { return true; }
              var ny = self.view.h >> 1;
              if (self.newscrolly < -ny) { self.newscrolly = -ny; py = -1; }
              else if (self.newscrolly > self.page.maxh + ny) { self.newscrolly = self.page.maxh + ny; py = 1; }
              else { py = 0; }
            }

            var dy = py > 0 ? 1 : -1;

            if (scrolldiry !== dy) {
              if (self.scrollmom) { self.scrollmom.stop(); }
              self.newscrolly = self.getScrollTop();
              scrolldiry = dy;
            }

            self.lastdeltay -= py;

          }

          if (py || px) {
            self.synched("relativexy", function () {

              var dty = self.lastdeltay + self.newscrolly;
              self.lastdeltay = 0;

              var dtx = self.lastdeltax + self.newscrollx;
              self.lastdeltax = 0;

              if (!self.rail.drag) { self.doScrollPos(dtx, dty); }

            });
          }

        }

        var hasparentscrollingphase = false;

        function execScrollWheel(e, hr, chkscroll) {
          var px, py;

          if (!chkscroll && hasparentscrollingphase) { return true; }

          if (e.deltaMode === 0) { // PIXEL
            px = -(e.deltaX * (opt.mousescrollstep / (18 * 3))) | 0;
            py = -(e.deltaY * (opt.mousescrollstep / (18 * 3))) | 0;
          } else if (e.deltaMode === 1) { // LINE
            px = -(e.deltaX * opt.mousescrollstep * 50 / 80) | 0;
            py = -(e.deltaY * opt.mousescrollstep * 50 / 80) | 0;
          }

          if (hr && opt.oneaxismousemode && (px === 0) && py) { // classic vertical-only mousewheel + browser with x/y support 
            px = py;
            py = 0;

            if (chkscroll) {
              var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
              if (hrend) {  // preserve vertical scrolling
                py = px;
                px = 0;
              }
            }

          }

          // invert horizontal direction for rtl mode
          if (self.isrtlmode) { px = -px; }

          var chk = doScrollRelative(px, py, chkscroll, true);

          if (chk) {
            if (chkscroll) { hasparentscrollingphase = true; }
          } else {
            hasparentscrollingphase = false;
            e.stopImmediatePropagation();
            return e.preventDefault();
          }

        }

        this.onmousewheel = function (e) {
          if (self.wheelprevented||self.locked) { return false; }
          if (self.railslocked) {
            self.debounced("checkunlock", self.resize, 250);
            return false;
          }
          if (self.rail.drag) { return self.cancelEvent(e); }

          if (opt.oneaxismousemode === "auto" && e.deltaX !== 0) { opt.oneaxismousemode = false; } // check two-axis mouse support (not very elegant)

          if (opt.oneaxismousemode && e.deltaX === 0) {
            if (!self.rail.scrollable) {
              if (self.railh && self.railh.scrollable) {
                return self.onmousewheelhr(e);
              } else {
                return true;
              }
            }
          }

          var nw = now();
          var chk = false;
          if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
            self.nativescrollingarea = self.isScrollable(e);
            chk = true;
          }
          self.checkarea = nw;
          if (self.nativescrollingarea) { return true; } // this isn't my business
          var ret = execScrollWheel(e, false, chk);
          if (ret) { self.checkarea = 0; }
          return ret;
        };

        this.onmousewheelhr = function (e) {
          if (self.wheelprevented) { return; }
          if (self.railslocked || !self.railh.scrollable) { return true; }
          if (self.rail.drag) { return self.cancelEvent(e); }

          var nw = now();
          var chk = false;
          if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
            self.nativescrollingarea = self.isScrollable(e);
            chk = true;
          }
          self.checkarea = nw;
          if (self.nativescrollingarea) { return true; } // this is not my business
          if (self.railslocked) { return self.cancelEvent(e); }

          return execScrollWheel(e, true, chk);
        };

        this.stop = function () {
          self.cancelScroll();
          if (self.scrollmon) { self.scrollmon.stop(); }
          self.cursorfreezed = false;
          self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
          self.noticeCursor();
          return self;
        };

        this.getTransitionSpeed = function (dif) {

          return 80 + (dif / 72) * opt.scrollspeed |0;

        };

        if (!opt.smoothscroll) {
          this.doScrollLeft = function (x, spd) { //direct
            var y = self.getScrollTop();
            self.doScrollPos(x, y, spd);
          };
          this.doScrollTop = function (y, spd) { //direct
            var x = self.getScrollLeft();
            self.doScrollPos(x, y, spd);
          };
          this.doScrollPos = function (x, y, spd) { //direct
            var nx = (x > self.page.maxw) ? self.page.maxw : x;
            if (nx < 0) { nx = 0; }
            var ny = (y > self.page.maxh) ? self.page.maxh : y;
            if (ny < 0) { ny = 0; }
            self.synched('scroll', function () {
              self.setScrollTop(ny);
              self.setScrollLeft(nx);
            });
          };
          this.cancelScroll = function () { }; // direct

        } else if (self.ishwscroll && cap.hastransition && opt.usetransition && !!opt.smoothscroll) {

          var lasttransitionstyle = '';

          this.resetTransition = function () {
            lasttransitionstyle = '';
            self.doc.css(cap.prefixstyle + 'transition-duration', '0ms');
          };

          this.prepareTransition = function (dif, istime) {
            var ex = (istime) ? dif : self.getTransitionSpeed(dif);
            var trans = ex + 'ms';
            if (lasttransitionstyle !== trans) {
              lasttransitionstyle = trans;
              self.doc.css(cap.prefixstyle + 'transition-duration', trans);
            }
            return ex;
          };

          this.doScrollLeft = function (x, spd) { //trans
            var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
            self.doScrollPos(x, y, spd);
          };

          this.doScrollTop = function (y, spd) { //trans
            var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
            self.doScrollPos(x, y, spd);
          };

          this.cursorupdate = {
            running: false,
            start: function () {
              var m = this;

              if (m.running) { return; }
              m.running = true;

              var loop = function () {
                if (m.running) { setAnimationFrame(loop); }
                self.showCursor(self.getScrollTop(), self.getScrollLeft());
                self.notifyScrollEvent(self.win[0]);
              };

              setAnimationFrame(loop);
            },
            stop: function () {
              this.running = false;
            }
          };

          this.doScrollPos = function (x, y, spd) { //trans

            var py = self.getScrollTop();
            var px = self.getScrollLeft();

            if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) { self.cancelScroll(); } //inverted movement detection      

            if (!opt.bouncescroll) {
              if (y < 0) { y = 0; }
              else if (y > self.page.maxh) { y = self.page.maxh; }
              if (x < 0) { x = 0; }
              else if (x > self.page.maxw) { x = self.page.maxw; }
            } else {
              if (y < 0) { y = y / 2 | 0; }
              else if (y > self.page.maxh) { y = self.page.maxh + (y - self.page.maxh) / 2 | 0; }
              if (x < 0) { x = x / 2 | 0; }
              else if (x > self.page.maxw) { x = self.page.maxw + (x - self.page.maxw) / 2 | 0; }
            }

            if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) { return false; }

            self.newscrolly = y;
            self.newscrollx = x;

            var top = self.getScrollTop();
            var lft = self.getScrollLeft();

            var dst = {};
            dst.x = x - lft;
            dst.y = y - top;

            var dd = Math.sqrt((dst.x * dst.x) + (dst.y * dst.y)) | 0;

            var ms = self.prepareTransition(dd);

            if (!self.scrollrunning) {
              self.scrollrunning = true;
              self.triggerScrollStart(lft, top, x, y, ms);
              self.cursorupdate.start();
            }

            self.scrollendtrapped = true;

            if (!cap.transitionend) {
              if (self.scrollendtrapped) { clearTimeout(self.scrollendtrapped); }
              self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms); // simulate transitionend event
            }

            self.setScrollTop(self.newscrolly);
            self.setScrollLeft(self.newscrollx);

          };

          this.cancelScroll = function () {
            if (!self.scrollendtrapped) { return true; }
            var py = self.getScrollTop();
            var px = self.getScrollLeft();
            self.scrollrunning = false;
            if (!cap.transitionend) { clearTimeout(cap.transitionend); }
            self.scrollendtrapped = false;
            self.resetTransition();
            self.setScrollTop(py); // fire event onscroll
            if (self.railh) { self.setScrollLeft(px); }
            if (self.timerscroll && self.timerscroll.tm) { clearInterval(self.timerscroll.tm); }
            self.timerscroll = false;

            self.cursorfreezed = false;

            self.cursorupdate.stop();
            self.showCursor(py, px);
            return self;
          };

          this.onScrollTransitionEnd = function () {

            if (!self.scrollendtrapped) { return; }

            var py = self.getScrollTop();
            var px = self.getScrollLeft();

            if (py < 0) { py = 0; }
            else if (py > self.page.maxh) { py = self.page.maxh; }
            if (px < 0) { px = 0; }
            else if (px > self.page.maxw) { px = self.page.maxw; }
            if ((py != self.newscrolly) || (px != self.newscrollx)) { return self.doScrollPos(px, py, opt.snapbackspeed); }

            if (self.scrollrunning) { self.triggerScrollEnd(); }
            self.scrollrunning = false;

            self.scrollendtrapped = false;
            self.resetTransition();
            self.timerscroll = false;
            self.setScrollTop(py); // fire event onscroll        
            if (self.railh) { self.setScrollLeft(px); } // fire event onscroll left

            self.cursorupdate.stop();
            self.noticeCursor(false, py, px);

            self.cursorfreezed = false;

          };

        } else {

          this.doScrollLeft = function (x, spd) { //no-trans
            var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
            self.doScrollPos(x, y, spd);
          };

          this.doScrollTop = function (y, spd) { //no-trans
            var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
            self.doScrollPos(x, y, spd);
          };

          this.doScrollPos = function (x, y, spd) { //no-trans

            var py = self.getScrollTop();
            var px = self.getScrollLeft();

            if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) { self.cancelScroll(); } //inverted movement detection

            var clipped = false;

            if (!self.bouncescroll || !self.rail.visibility) {
              if (y < 0) {
                y = 0;
                clipped = true;
              } else if (y > self.page.maxh) {
                y = self.page.maxh;
                clipped = true;
              }
            }
            if (!self.bouncescroll || !self.railh.visibility) {
              if (x < 0) {
                x = 0;
                clipped = true;
              } else if (x > self.page.maxw) {
                x = self.page.maxw;
                clipped = true;
              }
            }

            if (self.scrollrunning && (self.newscrolly === y) && (self.newscrollx === x)) { return true; }

            self.newscrolly = y;
            self.newscrollx = x;

            self.dst = {};
            self.dst.x = x - px;
            self.dst.y = y - py;
            self.dst.px = px;
            self.dst.py = py;

            var dd = Math.sqrt((self.dst.x * self.dst.x) + (self.dst.y * self.dst.y)) | 0;
            var ms = self.getTransitionSpeed(dd);

            self.bzscroll = {};

            var p3 = (clipped) ? 1 : 0.58;
            self.bzscroll.x = new BezierClass(px, self.newscrollx, ms, 0, 0, p3, 1);
            self.bzscroll.y = new BezierClass(py, self.newscrolly, ms, 0, 0, p3, 1);

            var loopid = now();

            var loop = function () {

              if (!self.scrollrunning) { return; }
              var x = self.bzscroll.y.getPos();

              self.setScrollLeft(self.bzscroll.x.getNow());
              self.setScrollTop(self.bzscroll.y.getNow());

              if (x <= 1) {
                self.timer = setAnimationFrame(loop);
              } else {
                self.scrollrunning = false;
                self.timer = 0;
                self.triggerScrollEnd();
              }

            };

            if (!self.scrollrunning) {
              self.triggerScrollStart(px, py, x, y, ms);
              self.scrollrunning = true;
              self.timer = setAnimationFrame(loop);
            }

          };

          this.cancelScroll = function () {
            if (self.timer) { clearAnimationFrame(self.timer); }
            self.timer = 0;
            self.bzscroll = false;
            self.scrollrunning = false;
            return self;
          };

        }

        this.doScrollBy = function (stp, relative) {
          doScrollRelative(0, stp);
        };

        this.doScrollLeftBy = function (stp, relative) {
          doScrollRelative(stp, 0);
        };

        this.doScrollTo = function (pos, relative) {
          var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
          if (ny < 0) { ny = 0; }
          else if (ny > self.page.maxh) { ny = self.page.maxh; }
          self.cursorfreezed = false;
          self.doScrollTop(pos);
        };

        this.checkContentSize = function () {
          var pg = self.getContentSize();
          if ((pg.h != self.page.h) || (pg.w != self.page.w)) { self.resize(false, pg); }
        };

        self.onscroll = function (e) {
          if (self.rail.drag) { return; }
          if (!self.cursorfreezed) {
            self.synched('scroll', function () {
              self.scroll.y = Math.round(self.getScrollTop() / self.scrollratio.y);
              if (self.railh) { self.scroll.x = Math.round(self.getScrollLeft() / self.scrollratio.x); }
              self.noticeCursor();
            });
          }
        };
        self.bind(self.docscroll, "scroll", self.onscroll);

        this.doZoomIn = function (e) {
          if (self.zoomactive) { return; }
          self.zoomactive = true;

          self.zoomrestore = {
            style: {}
          };
          var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
          var win = self.win[0].style;
          for (var a in lst) {
            var pp = lst[a];
            self.zoomrestore.style[pp] = (win[pp] !== undefined) ? win[pp] : '';
          }

          self.zoomrestore.style.width = self.win.css('width');
          self.zoomrestore.style.height = self.win.css('height');

          self.zoomrestore.padding = {
            w: self.win.outerWidth() - self.win.width(),
            h: self.win.outerHeight() - self.win.height()
          };

          if (cap.isios4) {
            self.zoomrestore.scrollTop = $window.scrollTop();
            $window.scrollTop(0);
          }

          self.win.css({
            position: (cap.isios4) ? "absolute" : "fixed",
            top: 0,
            left: 0,
            zIndex: globalmaxzindex + 100,
            margin: 0
          });
          var bkg = self.win.css("backgroundColor");
          if ("" === bkg || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) { self.win.css("backgroundColor", "#fff"); }
          self.rail.css({
            zIndex: globalmaxzindex + 101
          });
          self.zoom.css({
            zIndex: globalmaxzindex + 102
          });
          self.zoom.css('backgroundPosition', '0 -18px');
          self.resizeZoom();

          if (self.onzoomin) { self.onzoomin.call(self); }

          return self.cancelEvent(e);
        };

        this.doZoomOut = function (e) {
          if (!self.zoomactive) { return; }
          self.zoomactive = false;

          self.win.css("margin", "");
          self.win.css(self.zoomrestore.style);

          if (cap.isios4) {
            $window.scrollTop(self.zoomrestore.scrollTop);
          }

          self.rail.css({
            "z-index": self.zindex
          });
          self.zoom.css({
            "z-index": self.zindex
          });
          self.zoomrestore = false;
          self.zoom.css('backgroundPosition', '0 0');
          self.onResize();

          if (self.onzoomout) { self.onzoomout.call(self); }

          return self.cancelEvent(e);
        };

        this.doZoom = function (e) {
          return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
        };

        this.resizeZoom = function () {
          if (!self.zoomactive) { return; }

          var py = self.getScrollTop(); //preserve scrolling position
          self.win.css({
            width: $window.width() - self.zoomrestore.padding.w + "px",
            height: $window.height() - self.zoomrestore.padding.h + "px"
          });
          self.onResize();

          self.setScrollTop(Math.min(self.page.maxh, py));
        };

        this.init();

        $.nicescroll.push(this);

      };

      // Inspired by the work of Kin Blas
      // http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
      var ScrollMomentumClass2D = function (nc) {
        var self = this;
        this.nc = nc;

        this.lastx = 0;
        this.lasty = 0;
        this.speedx = 0;
        this.speedy = 0;
        this.lasttime = 0;
        this.steptime = 0;
        this.snapx = false;
        this.snapy = false;
        this.demulx = 0;
        this.demuly = 0;

        this.lastscrollx = -1;
        this.lastscrolly = -1;

        this.chkx = 0;
        this.chky = 0;

        this.timer = 0;

        this.reset = function (px, py) {
          self.stop();
          self.steptime = 0;
          self.lasttime = now();
          self.speedx = 0;
          self.speedy = 0;
          self.lastx = px;
          self.lasty = py;
          self.lastscrollx = -1;
          self.lastscrolly = -1;
        };

        this.update = function (px, py) {
          var tm = now();
          self.steptime = tm - self.lasttime;
          self.lasttime = tm;
          var dy = py - self.lasty;
          var dx = px - self.lastx;
          var sy = self.nc.getScrollTop();
          var sx = self.nc.getScrollLeft();
          var newy = sy + dy;
          var newx = sx + dx;
          self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
          self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
          self.speedx = dx;
          self.speedy = dy;
          self.lastx = px;
          self.lasty = py;
        };

        this.stop = function () {
          self.nc.unsynched("domomentum2d");
          if (self.timer) { clearTimeout(self.timer); }
          self.timer = 0;
          self.lastscrollx = -1;
          self.lastscrolly = -1;
        };

        this.doSnapy = function (nx, ny) {
          var snap = false;

          if (ny < 0) {
            ny = 0;
            snap = true;
          } else if (ny > self.nc.page.maxh) {
            ny = self.nc.page.maxh;
            snap = true;
          }

          if (nx < 0) {
            nx = 0;
            snap = true;
          } else if (nx > self.nc.page.maxw) {
            nx = self.nc.page.maxw;
            snap = true;
          }

          (snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed) : self.nc.triggerScrollEnd();
        };

        this.doMomentum = function (gp) {
          var t = now();
          var l = (gp) ? t + gp : self.lasttime;

          var sl = self.nc.getScrollLeft();
          var st = self.nc.getScrollTop();

          var pageh = self.nc.page.maxh;
          var pagew = self.nc.page.maxw;

          self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
          self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;

          var chk = l && (t - l) <= 60;

          if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) { chk = false; }

          var sy = (self.speedy && chk) ? self.speedy : false;
          var sx = (self.speedx && chk) ? self.speedx : false;

          if (sy || sx) {
            var tm = Math.max(16, self.steptime); //timeout granularity

            if (tm > 50) { // do smooth
              var xm = tm / 50;
              self.speedx *= xm;
              self.speedy *= xm;
              tm = 50;
            }

            self.demulxy = 0;

            self.lastscrollx = self.nc.getScrollLeft();
            self.chkx = self.lastscrollx;
            self.lastscrolly = self.nc.getScrollTop();
            self.chky = self.lastscrolly;

            var nx = self.lastscrollx;
            var ny = self.lastscrolly;

            var onscroll = function () {
              var df = ((now() - t) > 600) ? 0.04 : 0.02;

              if (self.speedx) {
                nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
                self.lastscrollx = nx;
                if ((nx < 0) || (nx > pagew)) { df = 0.10; }
              }

              if (self.speedy) {
                ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
                self.lastscrolly = ny;
                if ((ny < 0) || (ny > pageh)) { df = 0.10; }
              }

              self.demulxy = Math.min(1, self.demulxy + df);

              self.nc.synched("domomentum2d", function () {

                if (self.speedx) {
                  var scx = self.nc.getScrollLeft();
                  //              if (scx != self.chkx) self.stop();
                  self.chkx = nx;
                  self.nc.setScrollLeft(nx);
                }

                if (self.speedy) {
                  var scy = self.nc.getScrollTop();
                  //              if (scy != self.chky) self.stop();
                  self.chky = ny;
                  self.nc.setScrollTop(ny);
                }

                if (!self.timer) {
                  self.nc.hideCursor();
                  self.doSnapy(nx, ny);
                }

              });

              if (self.demulxy < 1) {
                self.timer = setTimeout(onscroll, tm);
              } else {
                self.stop();
                self.nc.hideCursor();
                self.doSnapy(nx, ny);
              }
            };

            onscroll();

          } else {
            self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
          }

        };

      };


      // override jQuery scrollTop
      var _scrollTop = jQuery.fn.scrollTop; // preserve original function

      jQuery.cssHooks.pageYOffset = {
        get: function (elem, computed, extra) {
          var nice = $.data(elem, '__nicescroll') || false;
          return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
        },
        set: function (elem, value) {
          var nice = $.data(elem, '__nicescroll') || false;
          (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
          return this;
        }
      };

      jQuery.fn.scrollTop = function (value) {
        if (value === undefined) {
          var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
          return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
        } else {
          return this.each(function () {
            var nice = $.data(this, '__nicescroll') || false;
            (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
          });
        }
      };

      // override jQuery scrollLeft
      var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function

      $.cssHooks.pageXOffset = {
        get: function (elem, computed, extra) {
          var nice = $.data(elem, '__nicescroll') || false;
          return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
        },
        set: function (elem, value) {
          var nice = $.data(elem, '__nicescroll') || false;
          (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
          return this;
        }
      };

      jQuery.fn.scrollLeft = function (value) {
        if (value === undefined) {
          var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
          return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
        } else {
          return this.each(function () {
            var nice = $.data(this, '__nicescroll') || false;
            (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
          });
        }
      };

      var NiceScrollArray = function (doms) {
        var self = this;
        this.length = 0;
        this.name = "nicescrollarray";

        this.each = function (fn) {
          $.each(self, fn);
          return self;
        };

        this.push = function (nice) {
          self[self.length] = nice;
          self.length++;
        };

        this.eq = function (idx) {
          return self[idx];
        };

        if (doms) {
          for (var a = 0; a < doms.length; a++) {
            var nice = $.data(doms[a], '__nicescroll') || false;
            if (nice) {
              this[this.length] = nice;
              this.length++;
            }
          }
        }

        return this;
      };

      function mplex(el, lst, fn) {
        for (var a = 0, l = lst.length; a < l; a++) { fn(el, lst[a]); }
      }
      mplex(
        NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'],
        function (e, n) {
          e[n] = function () {
            var args = arguments;
            return this.each(function () {
              this[n].apply(this, args);
            });
          };
        }
      );

      jQuery.fn.getNiceScroll = function (index) {
        if (index === undefined) {
          return new NiceScrollArray(this);
        } else {
          return this[index] && $.data(this[index], '__nicescroll') || false;
        }
      };

      var pseudos = jQuery.expr.pseudos || jQuery.expr[':'];  // jQuery 3 migration
      pseudos.nicescroll = function (a) {
        return $.data(a, '__nicescroll') !== undefined;
      };

      $.fn.niceScroll = function (wrapper, _opt) {
        if (_opt === undefined && typeof wrapper == "object" && !("jquery" in wrapper)) {
          _opt = wrapper;
          wrapper = false;
        }

        var ret = new NiceScrollArray();

        this.each(function () {
          var $this = $(this);

          var opt = $.extend({}, _opt); // cloning

          if (wrapper || false) {
            var wrp = $(wrapper);
            opt.doc = (wrp.length > 1) ? $(wrapper, $this) : wrp;
            opt.win = $this;
          }
          var docundef = !("doc" in opt);
          if (!docundef && !("win" in opt)) { opt.win = $this; }

          var nice = $this.data('__nicescroll') || false;
          if (!nice) {
            opt.doc = opt.doc || $this;
            nice = new NiceScrollClass(opt, $this);
            $this.data('__nicescroll', nice);
          }
          ret.push(nice);
        });

        return (ret.length === 1) ? ret[0] : ret;
      };

      _win.NiceScroll = {
        getjQuery: function () {
          return jQuery;
        }
      };

      if (!$.nicescroll) {
        $.nicescroll = new NiceScrollArray();
        $.nicescroll.options = _globaloptions;
      }

    }));
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var myUtils = function () {
      function myUtils() {
        _classCallCheck(this, myUtils);
      }

      _createClass(myUtils, null, [{
        key: 'isNull',

        /**
         * 判断字符串是否为空
         * @param str
         * @return {boolean}
        */
        value: function isNull(str) {
          return str == null || str.length === 0 || str === '';
        }
        /**
         * @desc 判断是否为身份证号
         * @param {String|Number}str
         * @return {Boolean}
         */

      }, {
        key: 'isIdCard',
        value: function isIdCard(str) {
          return (/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
          );
        }
        /**
         * @desc 判断是否为手机号
         * @param {String|Number} str
         * @return {Boolean}
        */

      }, {
        key: 'isPhoneNum',
        value: function isPhoneNum(str) {
          return (/^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
          );
        }
      }, {
        key: 'isPhone',
        value: function isPhone() {

          return this.osInfo().isAndroid || this.osInfo().isPhone;
        }
      }, {
        key: 'isPC',
        value: function isPC() {
          return this.osInfo().isPc;
        }
      }, {
        key: 'osInfo',
        value: function osInfo() {
          var ua = navigator.userAgent,
              isWindowsPhone = /(?:Windows Phone)/.test(ua),
              isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
              isAndroid = /(?:Android)/.test(ua),
              isFireFox = /(?:Firefox)/.test(ua),
              isChrome = /(?:Chrome|CriOS)/.test(ua),
              isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua),
              isPhone = /(?:iPhone)/.test(ua) && !isTablet,
              isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
          return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
          };
        }
      }]);

      return myUtils;
    }();

    var keyboardTmpl = "<script id=\"zy-keyboard-tpl\" type=\"text/html\">\n<div class=\"ZY__keyboard\">\n \n</div>\n</script>";

    var keyboardToolsTmpl = "<script id=\"zy-keyboard-tools-tpl\" type=\"text/html\">\n<div class=\"keyboard-toolbar\">\n    <div class=\"left\">\n        {{each left}}\n            <div class = \"layer-switch action\">\n                {{#$value.text}}\n            </div>\n        {{/each}}\n    </div>\n    <div class=\"right\">\n        <div>X</div>\n    </div>\n</div>\n</script>";

    var keyboardTools = {
      actionEl: function actionEl() {
        return $$1(".ZY__keyboard .keyboard-toolbar .left .action");
      },
      actionSelEl: function actionSelEl() {
        return $$1(".ZY__keyboard .keyboard-toolbar .left .action.selected");
      },
      init: function init(insert) {
        $$1("body").append(keyboardToolsTmpl);
        var data = { left: [{ text: "abc" }, { text: "123" }] };

        var el = template("zy-keyboard-tools-tpl", data);
        var tag = ".ZY__keyboard .keyboard-toolbar";
        insert(el, ".ZY__keyboard .keyboard-toolbar");

        var actionEl = this.actionEl();
        actionEl.on("click", function (e) {
          var index = actionEl.index(this);
          $$1(tag).trigger("selected", { index: index });
        });
      },
      currentIndex: function currentIndex() {
        var actionSelEl = this.actionSelEl().get(0);
        return this.actionEl().index(actionSelEl);
      },
      selectByIndex: function selectByIndex(index) {
        var actionEl = this.actionEl();
        actionEl.removeClass("selected");
        $$1(actionEl.get(index)).addClass("selected");
      }
    };

    var keyboardEnglishTmpl = "<script id=\"zy-keyboard-english-tpl\" type=\"text/html\">\n<div class=\"keyboard-layer is-visible\">\n    <div class=\"rows\">\n     <ul>\n     <li>q</li>\n      <li>w</li>\n      <li>e</li>\n      <li>r</li>\n      <li>t</li>\n      <li>y</li>\n      <li>u</li>\n      <li>i</li>\n      <li>o</li>\n      <li>p</li>\n     </ul>\n     <ul>\n     <li>q</li>\n      <li>w</li>\n      <li>e</li>\n      <li>r</li>\n      <li>t</li>\n      <li>y</li>\n      <li>u</li>\n      <li>i</li>\n      <li>o</li>\n     </ul>\n    </div>\n</div>\n</script>";

    var keyboardNumTmpl = "<script id=\"zy-keyboard-num-tpl\" type=\"text/html\">\n<div class=\"keyboard-layer\">\n    <div style=\"width:100px\">123</div>\n</div>\n</script>";

    var keyboardBody = {
        actionEl: function actionEl() {
            return $('.ZY__keyboard .keyboard-layer');
        },
        actionSelEl: function actionSelEl() {
            return $('.ZY__keyboard .keyboard-layer.is-visible');
        },
        init: function init(insert) {
            $('body').append(keyboardEnglishTmpl);
            $('body').append(keyboardNumTmpl);

            var el = template('zy-keyboard-english-tpl', {});
            insert(el);

            el = template('zy-keyboard-num-tpl', {});
            insert(el);
        },
        selectByIndex: function selectByIndex(index) {
            var actionEl = this.actionEl();
            actionEl.removeClass('is-visible');
            $(actionEl.get(index)).addClass('is-visible');
        }

    };

    var content = {
      init: function init() {
        $("body").append(keyboardTmpl);
        $("body").append(template("zy-keyboard-tpl", {}));

        var that = this;

        keyboardTools.init(function (el, tag) {
          $(".ZY__keyboard").append(el);
          $(tag).on("selected", function (e, data) {
            var index = data.index;
            that.selectByIndex(index);
          });
        });

        keyboardBody.init(function (el) {
          $(".ZY__keyboard").append(el);
        });

        that.selectByIndex(0);

        $(".ZY__keyboard").mousedown(function (e) {
          e.preventDefault();
        });
      },
      selectByIndex: function selectByIndex(index) {
        keyboardTools.selectByIndex(index);
        keyboardBody.selectByIndex(index);
      }
    };

    // https://blog.csdn.net/qq_40323256/article/details/89282801
    window.MQ = null;
    window.MQCurrentField = null;

    function init() {
      MQ = build.getInterface(2);

      $$1(document).on("focusin", ".mq-textarea textarea", function (e) {
        MQCurrentField = $$1(e.target).parents(".save_span_tag");
      });

      $$1(document).on("focusout", ".mq-textarea textarea", function (e) {
        MQCurrentField = null;
      });

      content.init();
    }

    function initEl(elstr, config) {
      var value = $$1(elstr);
      value.addClass("save_span_tag");
      var answerMathField = MQ.MathField($$1(elstr).get(0), config);
      value.data("save_span", answerMathField);
      if (myUtils.isPC() == false) {
        $$1(elstr + " textarea").attr("readonly", "readonly");
      }
      return answerMathField;
    }

    $$1.fn.latex = function () {
      return this.data("save_span").latex();
    };

    var index = { init: init, initEl: initEl };

    return index;

})));
//# sourceMappingURL=index.js.map
