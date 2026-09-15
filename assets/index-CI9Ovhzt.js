(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=globalThis,zn=yi.ShadowRoot&&(yi.ShadyCSS===void 0||yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nn=Symbol(),Ca=new WeakMap;let eo=class{constructor(t,i,a){if(this._$cssResult$=!0,a!==Nn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(zn&&t===void 0){const a=i!==void 0&&i.length===1;a&&(t=Ca.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Ca.set(i,t))}return t}toString(){return this.cssText}};const as=e=>new eo(typeof e=="string"?e:e+"",void 0,Nn),Xe=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((a,l,d)=>a+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+e[d+1],e[0]);return new eo(i,e,Nn)},os=(e,t)=>{if(zn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const a=document.createElement("style"),l=yi.litNonce;l!==void 0&&a.setAttribute("nonce",l),a.textContent=i.cssText,e.appendChild(a)}},Ma=zn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const a of t.cssRules)i+=a.cssText;return as(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ss,defineProperty:ls,getOwnPropertyDescriptor:cs,getOwnPropertyNames:ds,getOwnPropertySymbols:us,getPrototypeOf:ps}=Object,$t=globalThis,Aa=$t.trustedTypes,hs=Aa?Aa.emptyScript:"",mn=$t.reactiveElementPolyfillSupport,Or=(e,t)=>e,wi={toAttribute(e,t){switch(t){case Boolean:e=e?hs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},qn=(e,t)=>!ss(e,t),Da={attribute:!0,type:String,converter:wi,reflect:!1,useDefault:!1,hasChanged:qn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$t.litPropertyMetadata??($t.litPropertyMetadata=new WeakMap);let ar=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Da){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const a=Symbol(),l=this.getPropertyDescriptor(t,a,i);l!==void 0&&ls(this.prototype,t,l)}}static getPropertyDescriptor(t,i,a){const{get:l,set:d}=cs(this.prototype,t)??{get(){return this[i]},set(p){this[i]=p}};return{get:l,set(p){const f=l==null?void 0:l.call(this);d==null||d.call(this,p),this.requestUpdate(t,f,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Da}static _$Ei(){if(this.hasOwnProperty(Or("elementProperties")))return;const t=ps(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Or("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Or("properties"))){const i=this.properties,a=[...ds(i),...us(i)];for(const l of a)this.createProperty(l,i[l])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[a,l]of i)this.elementProperties.set(a,l)}this._$Eh=new Map;for(const[i,a]of this.elementProperties){const l=this._$Eu(i,a);l!==void 0&&this._$Eh.set(l,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const l of a)i.unshift(Ma(l))}else t!==void 0&&i.push(Ma(t));return i}static _$Eu(t,i){const a=i.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const a of i.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return os(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostConnected)==null?void 0:a.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostDisconnected)==null?void 0:a.call(i)})}attributeChangedCallback(t,i,a){this._$AK(t,a)}_$ET(t,i){var d;const a=this.constructor.elementProperties.get(t),l=this.constructor._$Eu(t,a);if(l!==void 0&&a.reflect===!0){const p=(((d=a.converter)==null?void 0:d.toAttribute)!==void 0?a.converter:wi).toAttribute(i,a.type);this._$Em=t,p==null?this.removeAttribute(l):this.setAttribute(l,p),this._$Em=null}}_$AK(t,i){var d,p;const a=this.constructor,l=a._$Eh.get(t);if(l!==void 0&&this._$Em!==l){const f=a.getPropertyOptions(l),E=typeof f.converter=="function"?{fromAttribute:f.converter}:((d=f.converter)==null?void 0:d.fromAttribute)!==void 0?f.converter:wi;this._$Em=l;const P=E.fromAttribute(i,f.type);this[l]=P??((p=this._$Ej)==null?void 0:p.get(l))??P,this._$Em=null}}requestUpdate(t,i,a,l=!1,d){var p;if(t!==void 0){const f=this.constructor;if(l===!1&&(d=this[t]),a??(a=f.getPropertyOptions(t)),!((a.hasChanged??qn)(d,i)||a.useDefault&&a.reflect&&d===((p=this._$Ej)==null?void 0:p.get(t))&&!this.hasAttribute(f._$Eu(t,a))))return;this.C(t,i,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:a,reflect:l,wrapped:d},p){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,p??i??this[t]),d!==!0||p!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(i=void 0),this._$AL.set(t,i)),l===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[d,p]of this._$Ep)this[d]=p;this._$Ep=void 0}const l=this.constructor.elementProperties;if(l.size>0)for(const[d,p]of l){const{wrapped:f}=p,E=this[d];f!==!0||this._$AL.has(d)||E===void 0||this.C(d,void 0,p,E)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(a=this._$EO)==null||a.forEach(l=>{var d;return(d=l.hostUpdate)==null?void 0:d.call(l)}),this.update(i)):this._$EM()}catch(l){throw t=!1,this._$EM(),l}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(a=>{var l;return(l=a.hostUpdated)==null?void 0:l.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};ar.elementStyles=[],ar.shadowRootOptions={mode:"open"},ar[Or("elementProperties")]=new Map,ar[Or("finalized")]=new Map,mn==null||mn({ReactiveElement:ar}),($t.reactiveElementVersions??($t.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=globalThis,Pa=e=>e,xi=Tr.trustedTypes,Oa=xi?xi.createPolicy("lit-html",{createHTML:e=>e}):void 0,to="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,ro="?"+xt,ms=`<${ro}>`,Bt=document,Fr=()=>Bt.createComment(""),Rr=e=>e===null||typeof e!="object"&&typeof e!="function",Ln=Array.isArray,fs=e=>Ln(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",fn=`[ 	
\f\r]`,Mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ta=/-->/g,Fa=/>/g,zt=RegExp(`>|${fn}(?:([^\\s"'>=/]+)(${fn}*=${fn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ra=/'/g,za=/"/g,io=/^(?:script|style|textarea|title)$/i,gs=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),g=gs(1),lr=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),Na=new WeakMap,qt=Bt.createTreeWalker(Bt,129);function no(e,t){if(!Ln(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oa!==void 0?Oa.createHTML(t):t}const ys=(e,t)=>{const i=e.length-1,a=[];let l,d=t===2?"<svg>":t===3?"<math>":"",p=Mr;for(let f=0;f<i;f++){const E=e[f];let P,j,N=-1,V=0;for(;V<E.length&&(p.lastIndex=V,j=p.exec(E),j!==null);)V=p.lastIndex,p===Mr?j[1]==="!--"?p=Ta:j[1]!==void 0?p=Fa:j[2]!==void 0?(io.test(j[2])&&(l=RegExp("</"+j[2],"g")),p=zt):j[3]!==void 0&&(p=zt):p===zt?j[0]===">"?(p=l??Mr,N=-1):j[1]===void 0?N=-2:(N=p.lastIndex-j[2].length,P=j[1],p=j[3]===void 0?zt:j[3]==='"'?za:Ra):p===za||p===Ra?p=zt:p===Ta||p===Fa?p=Mr:(p=zt,l=void 0);const ie=p===zt&&e[f+1].startsWith("/>")?" ":"";d+=p===Mr?E+ms:N>=0?(a.push(P),E.slice(0,N)+to+E.slice(N)+xt+ie):E+xt+(N===-2?f:ie)}return[no(e,d+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class zr{constructor({strings:t,_$litType$:i},a){let l;this.parts=[];let d=0,p=0;const f=t.length-1,E=this.parts,[P,j]=ys(t,i);if(this.el=zr.createElement(P,a),qt.currentNode=this.el.content,i===2||i===3){const N=this.el.content.firstChild;N.replaceWith(...N.childNodes)}for(;(l=qt.nextNode())!==null&&E.length<f;){if(l.nodeType===1){if(l.hasAttributes())for(const N of l.getAttributeNames())if(N.endsWith(to)){const V=j[p++],ie=l.getAttribute(N).split(xt),H=/([.?@])?(.*)/.exec(V);E.push({type:1,index:d,name:H[2],strings:ie,ctor:H[1]==="."?vs:H[1]==="?"?_s:H[1]==="@"?ws:Ci}),l.removeAttribute(N)}else N.startsWith(xt)&&(E.push({type:6,index:d}),l.removeAttribute(N));if(io.test(l.tagName)){const N=l.textContent.split(xt),V=N.length-1;if(V>0){l.textContent=xi?xi.emptyScript:"";for(let ie=0;ie<V;ie++)l.append(N[ie],Fr()),qt.nextNode(),E.push({type:2,index:++d});l.append(N[V],Fr())}}}else if(l.nodeType===8)if(l.data===ro)E.push({type:2,index:d});else{let N=-1;for(;(N=l.data.indexOf(xt,N+1))!==-1;)E.push({type:7,index:d}),N+=xt.length-1}d++}}static createElement(t,i){const a=Bt.createElement("template");return a.innerHTML=t,a}}function cr(e,t,i=e,a){var p,f;if(t===lr)return t;let l=a!==void 0?(p=i._$Co)==null?void 0:p[a]:i._$Cl;const d=Rr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((f=l==null?void 0:l._$AO)==null||f.call(l,!1),d===void 0?l=void 0:(l=new d(e),l._$AT(e,i,a)),a!==void 0?(i._$Co??(i._$Co=[]))[a]=l:i._$Cl=l),l!==void 0&&(t=cr(e,l._$AS(e,t.values),l,a)),t}class bs{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:a}=this._$AD,l=((t==null?void 0:t.creationScope)??Bt).importNode(i,!0);qt.currentNode=l;let d=qt.nextNode(),p=0,f=0,E=a[0];for(;E!==void 0;){if(p===E.index){let P;E.type===2?P=new Nr(d,d.nextSibling,this,t):E.type===1?P=new E.ctor(d,E.name,E.strings,this,t):E.type===6&&(P=new xs(d,this,t)),this._$AV.push(P),E=a[++f]}p!==(E==null?void 0:E.index)&&(d=qt.nextNode(),p++)}return qt.currentNode=Bt,l}p(t){let i=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,i),i+=a.strings.length-2):a._$AI(t[i])),i++}}class Nr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,a,l){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=l,this._$Cv=(l==null?void 0:l.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=cr(this,t,i),Rr(t)?t===Se||t==null||t===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):t!==this._$AH&&t!==lr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Se&&Rr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Bt.createTextNode(t)),this._$AH=t}$(t){var d;const{values:i,_$litType$:a}=t,l=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=zr.createElement(no(a.h,a.h[0]),this.options)),a);if(((d=this._$AH)==null?void 0:d._$AD)===l)this._$AH.p(i);else{const p=new bs(l,this),f=p.u(this.options);p.p(i),this.T(f),this._$AH=p}}_$AC(t){let i=Na.get(t.strings);return i===void 0&&Na.set(t.strings,i=new zr(t)),i}k(t){Ln(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let a,l=0;for(const d of t)l===i.length?i.push(a=new Nr(this.O(Fr()),this.O(Fr()),this,this.options)):a=i[l],a._$AI(d),l++;l<i.length&&(this._$AR(a&&a._$AB.nextSibling,l),i.length=l)}_$AR(t=this._$AA.nextSibling,i){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,i);t!==this._$AB;){const l=Pa(t).nextSibling;Pa(t).remove(),t=l}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Ci{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,a,l,d){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=t,this.name=i,this._$AM=l,this.options=d,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Se}_$AI(t,i=this,a,l){const d=this.strings;let p=!1;if(d===void 0)t=cr(this,t,i,0),p=!Rr(t)||t!==this._$AH&&t!==lr,p&&(this._$AH=t);else{const f=t;let E,P;for(t=d[0],E=0;E<d.length-1;E++)P=cr(this,f[a+E],i,E),P===lr&&(P=this._$AH[E]),p||(p=!Rr(P)||P!==this._$AH[E]),P===Se?t=Se:t!==Se&&(t+=(P??"")+d[E+1]),this._$AH[E]=P}p&&!l&&this.j(t)}j(t){t===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vs extends Ci{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Se?void 0:t}}class _s extends Ci{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Se)}}class ws extends Ci{constructor(t,i,a,l,d){super(t,i,a,l,d),this.type=5}_$AI(t,i=this){if((t=cr(this,t,i,0)??Se)===lr)return;const a=this._$AH,l=t===Se&&a!==Se||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,d=t!==Se&&(a===Se||l);l&&this.element.removeEventListener(this.name,this,a),d&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class xs{constructor(t,i,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){cr(this,t)}}const gn=Tr.litHtmlPolyfillSupport;gn==null||gn(zr,Nr),(Tr.litHtmlVersions??(Tr.litHtmlVersions=[])).push("3.3.3");const $s=(e,t,i)=>{const a=(i==null?void 0:i.renderBefore)??t;let l=a._$litPart$;if(l===void 0){const d=(i==null?void 0:i.renderBefore)??null;a._$litPart$=l=new Nr(t.insertBefore(Fr(),d),d,void 0,i??{})}return l._$AI(e),l};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=globalThis;class ze extends ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$s(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return lr}}var Za;ze._$litElement$=!0,ze.finalized=!0,(Za=Kt.litElementHydrateSupport)==null||Za.call(Kt,{LitElement:ze});const yn=Kt.litElementPolyfillSupport;yn==null||yn({LitElement:ze});(Kt.litElementVersions??(Kt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is={attribute:!0,type:String,converter:wi,reflect:!1,hasChanged:qn},ks=(e=Is,t,i)=>{const{kind:a,metadata:l}=i;let d=globalThis.litPropertyMetadata.get(l);if(d===void 0&&globalThis.litPropertyMetadata.set(l,d=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),d.set(i.name,e),a==="accessor"){const{name:p}=i;return{set(f){const E=t.get.call(this);t.set.call(this,f),this.requestUpdate(p,E,e,!0,f)},init(f){return f!==void 0&&this.C(p,void 0,e,f),f}}}if(a==="setter"){const{name:p}=i;return function(f){const E=this[p];t.call(this,f),this.requestUpdate(p,E,e,!0,f)}}throw Error("Unsupported decorator location: "+a)};function ao(e){return(t,i)=>typeof i=="object"?ks(e,t,i):((a,l,d)=>{const p=l.hasOwnProperty(d);return l.constructor.createProperty(d,a),p?Object.getOwnPropertyDescriptor(l,d):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(e){return ao({...e,state:!0,attribute:!1})}const ir=new Date(0).toISOString();let bn=null,An=null;async function vn(e){const t=await fetch(e);if(!t.ok)throw new Error(`No se pudo cargar ${e} (HTTP ${t.status})`);return t.json()}function Es(e,t,i){const a=new Map,l=[];for(const P of e){const j=Object.freeze({...P,lastRefreshedAt:null,createdAt:ir});a.set(j.id,j),l.push(j)}l.sort((P,j)=>P.name.localeCompare(j.name));const d=new Map,p=[];for(const P of t){const j=P.ingredients.map(V=>Object.freeze({...V,food:a.get(V.foodId)??null})),N=Object.freeze({...P,createdAt:ir,updatedAt:ir,ingredients:Object.freeze(j)});d.set(N.id,N),p.push(N)}const f=i.templates.map(P=>Object.freeze({...P,familyId:null,createdAt:ir,updatedAt:ir,meals:Object.freeze(P.meals.map((j,N)=>Object.freeze({...j,id:`${P.id}:${N}`,templateId:P.id})))})),E=i.householdItems.map(P=>Object.freeze({...P,createdAt:ir}));return{version:i.catalogVersion,foodsById:a,foodsList:l,recipesById:d,recipesList:p,templates:f,householdItems:E}}function Ss(){return bn||(bn=(async()=>{const[e,t,i]=await Promise.all([vn(new URL("/asistente_domestico_build/assets/catalog-foods-ko3gnLMN.json",import.meta.url)),vn(new URL("/asistente_domestico_build/assets/catalog-recipes-CT57ZbWv.json",import.meta.url)),vn(new URL("/asistente_domestico_build/assets/catalog-meta-Bui7b_bp.json",import.meta.url))]),a=Es(e,t,i);return An=a,a})()),bn}function Ze(){if(!An)throw new Error("Catálogo todavía no disponible: usa `await whenReady()` antes de leer la tienda.");return An}function ce(e){if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>ce(t));if(e!==null&&typeof e=="object"){const t={};for(const[i,a]of Object.entries(e))a!==void 0&&(t[i]=ce(a));return t}return e}const $i={family:["createdAt"],members:["weightDate","createdAt","updatedAt"],weightHistory:["date"],foods:["lastRefreshedAt","createdAt"],pantryItems:["purchaseDate","expiryDate","createdAt","updatedAt"],recipes:["createdAt","updatedAt"],mealPlans:["weekStart","createdAt","updatedAt"],meals:[],templates:["createdAt","updatedAt"],shoppingLists:["weekStart","createdAt"],shoppingItems:[],shoppingSections:["createdAt"],shoppingSectionItems:[],householdItems:["createdAt"],householdStockItems:["createdAt","updatedAt"],chores:["createdAt"],choreCompletions:["date"]};function qa(e,t){if(t.length===0)return e;const i={...e};for(const a of t)i[a]instanceof Date&&(i[a]=i[a].toISOString());return i}function La(e,t){if(t.length===0)return e;const i={...e};for(const a of t)typeof i[a]=="string"&&(i[a]=new Date(i[a]));return i}function Cs(e){const t={};for(const i of Object.keys($i)){const a=$i[i];i==="family"?t[i]=e.family?qa(e.family,a):null:t[i]=e[i].map(l=>qa(l,a))}return t}function Ms(e){const t={};for(const i of Object.keys($i)){const a=$i[i],l=e[i];i==="family"?t[i]=l?La(l,a):null:t[i]=Array.isArray(l)?l.map(d=>La(d,a)):[]}return t}const oo="MealPrepHelper",so="backup",Dn=1;function As(e){return{app:oo,kind:so,schemaVersion:Dn,catalogVersion:Ze().version,exportedAt:new Date().toISOString(),data:Cs(e)}}function Ds(e){if(!e||typeof e!="object")throw new Error("El fichero no es un backup válido de MealPrepHelper.");const t=e;if(t.app!==oo||t.kind!==so)throw new Error("El fichero no es un backup de MealPrepHelper.");if(t.schemaVersion!==Dn)throw new Error(`Versión de backup no soportada (${t.schemaVersion}). Esta versión de la app espera ${Dn}.`);if(!t.data||typeof t.data!="object")throw new Error("El backup no contiene datos.");if(!t.data.family)throw new Error("El backup no contiene una unidad familiar.");return t}function Ps(e){const t=Ze(),i={droppedMeals:0,droppedTemplateMeals:0,droppedPantryItems:0,droppedShoppingItems:0,droppedShoppingSections:0,droppedShoppingSectionItems:0,droppedStockItems:0,droppedChoreCompletions:0,droppedWeightHistory:0,nulledMemberRefs:0,nulledHouseholdRefs:0,totalDropped:0},a=new Set(e.members.map(G=>G.id)),l=new Set([...t.foodsById.keys(),...e.foods.map(G=>G.id)]),d=new Set([...t.recipesById.keys(),...e.recipes.map(G=>G.id)]),p=new Set(e.mealPlans.map(G=>G.id)),f=new Set([...t.householdItems.map(G=>G.id),...e.householdItems.map(G=>G.id)]),E=e.meals.filter(G=>!(!p.has(G.planId)||G.recipeId&&!d.has(G.recipeId)));i.droppedMeals=e.meals.length-E.length;for(const G of E)G.assignedToMemberId&&!a.has(G.assignedToMemberId)&&(G.assignedToMemberId=null,i.nulledMemberRefs++);let P=0;const j=e.templates.map(G=>{const Fe=G.meals.filter($e=>d.has($e.recipeId));return P+=G.meals.length-Fe.length,{...G,meals:Fe}});i.droppedTemplateMeals=P;const N=e.pantryItems.filter(G=>l.has(G.foodId));i.droppedPantryItems=e.pantryItems.length-N.length;const V=new Set(e.shoppingLists.map(G=>G.id)),ie=e.shoppingItems.filter(G=>V.has(G.listId)&&l.has(G.foodId));i.droppedShoppingItems=e.shoppingItems.length-ie.length;const H=e.shoppingSections.filter(G=>V.has(G.listId));i.droppedShoppingSections=e.shoppingSections.length-H.length;const le=new Set(H.map(G=>G.id)),Ie=e.shoppingSectionItems.filter(G=>le.has(G.sectionId));i.droppedShoppingSectionItems=e.shoppingSectionItems.length-Ie.length;for(const G of Ie)G.householdItemId&&!f.has(G.householdItemId)&&(G.householdItemId=null,i.nulledHouseholdRefs++);const de=e.householdStockItems.filter(G=>f.has(G.householdItemId));i.droppedStockItems=e.householdStockItems.length-de.length;for(const G of e.chores)G.assignedToMemberId&&!a.has(G.assignedToMemberId)&&(G.assignedToMemberId=null,i.nulledMemberRefs++);const Te=new Set(e.chores.map(G=>G.id)),ot=e.choreCompletions.filter(G=>Te.has(G.choreId));i.droppedChoreCompletions=e.choreCompletions.length-ot.length;for(const G of ot)G.completedByMemberId&&!a.has(G.completedByMemberId)&&(G.completedByMemberId=null,i.nulledMemberRefs++);const We=e.weightHistory.filter(G=>a.has(G.memberId));return i.droppedWeightHistory=e.weightHistory.length-We.length,i.totalDropped=i.droppedMeals+i.droppedTemplateMeals+i.droppedPantryItems+i.droppedShoppingItems+i.droppedShoppingSections+i.droppedShoppingSectionItems+i.droppedStockItems+i.droppedChoreCompletions+i.droppedWeightHistory,{store:{...e,meals:E,templates:j,pantryItems:N,shoppingItems:ie,shoppingSections:H,shoppingSectionItems:Ie,householdStockItems:de,choreCompletions:ot,weightHistory:We},report:i}}function Os(e){const t=Ms(e.data),{store:i,report:a}=Ps(t),l=e.catalogVersion!==Ze().version;return{store:i,report:a,catalogVersionMismatch:l}}const Ts="modulepreload",Fs=function(e){return"/asistente_domestico_build/"+e},ja={},lo=function(t,i,a){let l=Promise.resolve();if(i&&i.length>0){let p=function(P){return Promise.all(P.map(j=>Promise.resolve(j).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),E=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));l=p(i.map(P=>{if(P=Fs(P),P in ja)return;ja[P]=!0;const j=P.endsWith(".css"),N=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${P}"]${N}`))return;const V=document.createElement("link");if(V.rel=j?"stylesheet":Ts,j||(V.as="script"),V.crossOrigin="",V.href=P,E&&V.setAttribute("nonce",E),document.head.appendChild(V),j)return new Promise((ie,H)=>{V.addEventListener("load",ie),V.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${P}`)))})}))}function d(p){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=p,window.dispatchEvent(f),!f.defaultPrevented)throw p}return l.then(p=>{for(const f of p||[])f.status==="rejected"&&d(f.reason);return t().catch(d)})};var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bi={exports:{}},Ns=bi.exports,Ka;function qs(){return Ka||(Ka=1,(function(e,t){((i,a)=>{e.exports=a()})(Ns,function(){var i=function(r,n){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(o,s){o.__proto__=s}:function(o,s){for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(o[c]=s[c])}))(r,n)},a=function(){return(a=Object.assign||function(r){for(var n,o=1,s=arguments.length;o<s;o++)for(var c in n=arguments[o])Object.prototype.hasOwnProperty.call(n,c)&&(r[c]=n[c]);return r}).apply(this,arguments)};function l(r,n,o){for(var s,c=0,u=n.length;c<u;c++)!s&&c in n||((s=s||Array.prototype.slice.call(n,0,c))[c]=n[c]);return r.concat(s||Array.prototype.slice.call(n))}var d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Rs,p=Object.keys,f=Array.isArray;function E(r,n){return typeof n=="object"&&p(n).forEach(function(o){r[o]=n[o]}),r}typeof Promise>"u"||d.Promise||(d.Promise=Promise);var P=Object.getPrototypeOf,j={}.hasOwnProperty;function N(r,n){return j.call(r,n)}function V(r,n){typeof n=="function"&&(n=n(P(r))),(typeof Reflect>"u"?p:Reflect.ownKeys)(n).forEach(function(o){H(r,o,n[o])})}var ie=Object.defineProperty;function H(r,n,o,s){ie(r,n,E(o&&N(o,"get")&&typeof o.get=="function"?{get:o.get,set:o.set,configurable:!0}:{value:o,configurable:!0,writable:!0},s))}function le(r){return{from:function(n){return r.prototype=Object.create(n.prototype),H(r.prototype,"constructor",r),{extend:V.bind(null,r.prototype)}}}}var Ie=Object.getOwnPropertyDescriptor,de=[].slice;function Te(r,n,o){return de.call(r,n,o)}function ot(r,n){return n(r)}function We(r){if(!r)throw new Error("Assertion Failed")}function G(r){d.setImmediate?setImmediate(r):setTimeout(r,0)}function Fe(r,n){if(typeof n=="string"&&N(r,n))return r[n];if(!n)return r;if(typeof n!="string"){for(var o=[],s=0,c=n.length;s<c;++s){var u=Fe(r,n[s]);o.push(u)}return o}var h,m=n.indexOf(".");return m===-1||(h=r[n.substr(0,m)])==null?void 0:Fe(h,n.substr(m+1))}function $e(r,n,o){if(r&&n!==void 0&&!("isFrozen"in Object&&Object.isFrozen(r)))if(typeof n!="string"&&"length"in n){We(typeof o!="string"&&"length"in o);for(var s=0,c=n.length;s<c;++s)$e(r,n[s],o[s])}else{var u=n.indexOf(".");if(u!==-1){var h=n.substr(0,u),u=n.substr(u+1);if(u==="")o===void 0?f(r)&&!isNaN(parseInt(h))?r.splice(h,1):delete r[h]:r[h]=o;else{var m=r[h];if(!m||!N(r,h)){if(o===void 0)return;m=r[h]={}}$e(m,u,o)}}else o===void 0?f(r)&&!isNaN(parseInt(n))?r.splice(n,1):delete r[n]:r[n]=o}}function hr(r){var n,o={};for(n in r)N(r,n)&&(o[n]=r[n]);return o}var qr=[].concat;function mr(r){return qr.apply([],r)}var lt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(mr([8,16,32,64].map(function(r){return["Int","Uint","Float"].map(function(n){return n+r+"Array"})}))).filter(function(r){return d[r]}),me=new Set(lt.map(function(r){return d[r]})),rt=null;function oe(r){return rt=new WeakMap,r=(function n(o){if(!o||typeof o!="object")return o;var s=rt.get(o);if(s)return s;if(f(o)){s=[],rt.set(o,s);for(var c=0,u=o.length;c<u;++c)s.push(n(o[c]))}else if(me.has(o.constructor))s=o;else{var h,m=P(o);for(h in s=m===Object.prototype?{}:Object.create(m),rt.set(o,s),o)N(o,h)&&(s[h]=n(o[h]))}return s})(r),rt=null,r}var he={}.toString;function Gt(r){return he.call(r).slice(8,-1)}var Mi=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Eo=typeof Mi=="symbol"?function(r){var n;return r!=null&&(n=r[Mi])&&n.apply(r)}:function(){return null};function Et(r,n){n=r.indexOf(n),0<=n&&r.splice(n,1)}var Ht={};function st(r){var n,o,s,c;if(arguments.length===1){if(f(r))return r.slice();if(this===Ht&&typeof r=="string")return[r];if(c=Eo(r))for(o=[];!(s=c.next()).done;)o.push(s.value);else{if(r==null)return[r];if(typeof(n=r.length)!="number")return[r];for(o=new Array(n);n--;)o[n]=r[n]}}else for(n=arguments.length,o=new Array(n);n--;)o[n]=arguments[n];return o}var Ai=typeof Symbol<"u"?function(r){return r[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},lt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Be=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(lt),So={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Vt(r,n){this.name=r,this.message=n}function Gn(r,n){return r+". Errors: "+Object.keys(n).map(function(o){return n[o].toString()}).filter(function(o,s,c){return c.indexOf(o)===s}).join(`
`)}function Lr(r,n,o,s){this.failures=n,this.failedKeys=s,this.successCount=o,this.message=Gn(r,n)}function Wt(r,n){this.name="BulkError",this.failures=Object.keys(n).map(function(o){return n[o]}),this.failuresByPos=n,this.message=Gn(r,this.failures)}le(Vt).from(Error).extend({toString:function(){return this.name+": "+this.message}}),le(Lr).from(Vt),le(Wt).from(Vt);var Di=Be.reduce(function(r,n){return r[n]=n+"Error",r},{}),Co=Vt,Q=Be.reduce(function(r,n){var o=n+"Error";function s(c,u){this.name=o,c?typeof c=="string"?(this.message="".concat(c).concat(u?`
 `+u:""),this.inner=u||null):typeof c=="object"&&(this.message="".concat(c.name," ").concat(c.message),this.inner=c):(this.message=So[n]||o,this.inner=null)}return le(s).from(Co),r[n]=s,r},{}),Hn=(Q.Syntax=SyntaxError,Q.Type=TypeError,Q.Range=RangeError,lt.reduce(function(r,n){return r[n+"Error"]=Q[n],r},{}));lt=Be.reduce(function(r,n){return["Syntax","Type","Range"].indexOf(n)===-1&&(r[n+"Error"]=Q[n]),r},{});function ue(){}function fr(r){return r}function Mo(r,n){return r==null||r===fr?n:function(o){return n(r(o))}}function St(r,n){return function(){r.apply(this,arguments),n.apply(this,arguments)}}function Ao(r,n){return r===ue?n:function(){var o=r.apply(this,arguments),s=(o!==void 0&&(arguments[0]=o),this.onsuccess),c=this.onerror,u=(this.onsuccess=null,this.onerror=null,n.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?St(s,this.onsuccess):s),c&&(this.onerror=this.onerror?St(c,this.onerror):c),u!==void 0?u:o}}function Do(r,n){return r===ue?n:function(){r.apply(this,arguments);var o=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,n.apply(this,arguments),o&&(this.onsuccess=this.onsuccess?St(o,this.onsuccess):o),s&&(this.onerror=this.onerror?St(s,this.onerror):s)}}function Po(r,n){return r===ue?n:function(c){var s=r.apply(this,arguments),c=(E(c,s),this.onsuccess),u=this.onerror,h=(this.onsuccess=null,this.onerror=null,n.apply(this,arguments));return c&&(this.onsuccess=this.onsuccess?St(c,this.onsuccess):c),u&&(this.onerror=this.onerror?St(u,this.onerror):u),s===void 0?h===void 0?void 0:h:E(s,h)}}function Oo(r,n){return r===ue?n:function(){return n.apply(this,arguments)!==!1&&r.apply(this,arguments)}}function Pi(r,n){return r===ue?n:function(){var o=r.apply(this,arguments);if(o&&typeof o.then=="function"){for(var s=this,c=arguments.length,u=new Array(c);c--;)u[c]=arguments[c];return o.then(function(){return n.apply(s,u)})}return n.apply(this,arguments)}}lt.ModifyError=Lr,lt.DexieError=Vt,lt.BulkError=Wt;var it=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Vn(r){it=r}var gr={},Wn=100,yr=typeof Promise>"u"?[]:(Be=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[yr=crypto.subtle.digest("SHA-512",new Uint8Array([0])),P(yr),Be]:[Be,P(Be),Be]),Be=yr[0],tr=yr[1],tr=tr&&tr.then,Ct=Be&&Be.constructor,Oi=!!yr[2],br=function(r,n){vr.push([r,n]),jr&&(queueMicrotask(Fo),jr=!1)},Ti=!0,jr=!0,Mt=[],Kr=[],Fi=fr,ct={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ue,pgp:!1,env:{},finalize:ue},W=ct,vr=[],At=0,Br=[];function L(r){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var n=this._PSD=W;if(typeof r!="function"){if(r!==gr)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&zi(this,this._value)}else this._state=null,this._value=null,++n.ref,(function o(s,c){try{c(function(u){if(s._state===null){if(u===s)throw new TypeError("A promise cannot be resolved with itself.");var h=s._lib&&Qt();u&&typeof u.then=="function"?o(s,function(m,v){u instanceof L?u._then(m,v):u.then(m,v)}):(s._state=!0,s._value=u,Yn(s)),h&&Yt()}},zi.bind(null,s))}catch(u){zi(s,u)}})(this,r)}var Ri={get:function(){var r=W,n=Vr;function o(s,c){var u=this,h=!r.global&&(r!==W||n!==Vr),m=h&&!gt(),v=new L(function(S,w){Ni(u,new Qn(Jn(s,r,h,m),Jn(c,r,h,m),S,w,r))});return this._consoleTask&&(v._consoleTask=this._consoleTask),v}return o.prototype=gr,o},set:function(r){H(this,"then",r&&r.prototype===gr?Ri:{get:function(){return r},set:Ri.set})}};function Qn(r,n,o,s,c){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof n=="function"?n:null,this.resolve=o,this.reject=s,this.psd=c}function zi(r,n){var o,s;Kr.push(n),r._state===null&&(o=r._lib&&Qt(),n=Fi(n),r._state=!1,r._value=n,s=r,Mt.some(function(c){return c._value===s._value})||Mt.push(s),Yn(r),o)&&Yt()}function Yn(r){var n=r._listeners;r._listeners=[];for(var o=0,s=n.length;o<s;++o)Ni(r,n[o]);var c=r._PSD;--c.ref||c.finalize(),At===0&&(++At,br(function(){--At==0&&qi()},[]))}function Ni(r,n){if(r._state===null)r._listeners.push(n);else{var o=r._state?n.onFulfilled:n.onRejected;if(o===null)return(r._state?n.resolve:n.reject)(r._value);++n.psd.ref,++At,br(To,[o,r,n])}}function To(r,n,o){try{var s,c=n._value;!n._state&&Kr.length&&(Kr=[]),s=it&&n._consoleTask?n._consoleTask.run(function(){return r(c)}):r(c),n._state||Kr.indexOf(c)!==-1||(u=>{for(var h=Mt.length;h;)if(Mt[--h]._value===u._value)return Mt.splice(h,1)})(n),o.resolve(s)}catch(u){o.reject(u)}finally{--At==0&&qi(),--o.psd.ref||o.psd.finalize()}}function Fo(){Dt(ct,function(){Qt()&&Yt()})}function Qt(){var r=Ti;return jr=Ti=!1,r}function Yt(){var r,n,o;do for(;0<vr.length;)for(r=vr,vr=[],o=r.length,n=0;n<o;++n){var s=r[n];s[0].apply(null,s[1])}while(0<vr.length);jr=Ti=!0}function qi(){for(var r=Mt,n=(Mt=[],r.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),Br.slice(0)),o=n.length;o;)n[--o]()}function Ur(r){return new L(gr,!1,r)}function ge(r,n){var o=W;return function(){var s=Qt(),c=W;try{return yt(o,!0),r.apply(this,arguments)}catch(u){n&&n(u)}finally{yt(c,!1),s&&Yt()}}}V(L.prototype,{then:Ri,_then:function(r,n){Ni(this,new Qn(null,null,r,n,W))},catch:function(r){var n,o;return arguments.length===1?this.then(null,r):(n=r,o=arguments[1],typeof n=="function"?this.then(null,function(s){return(s instanceof n?o:Ur)(s)}):this.then(null,function(s){return(s&&s.name===n?o:Ur)(s)}))},finally:function(r){return this.then(function(n){return L.resolve(r()).then(function(){return n})},function(n){return L.resolve(r()).then(function(){return Ur(n)})})},timeout:function(r,n){var o=this;return r<1/0?new L(function(s,c){var u=setTimeout(function(){return c(new Q.Timeout(n))},r);o.then(s,c).finally(clearTimeout.bind(null,u))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&H(L.prototype,Symbol.toStringTag,"Dexie.Promise"),ct.env=Xn(),V(L,{all:function(){var r=st.apply(null,arguments).map(Wr);return new L(function(n,o){r.length===0&&n([]);var s=r.length;r.forEach(function(c,u){return L.resolve(c).then(function(h){r[u]=h,--s||n(r)},o)})})},resolve:function(r){return r instanceof L?r:r&&typeof r.then=="function"?new L(function(n,o){r.then(n,o)}):new L(gr,!0,r)},reject:Ur,race:function(){var r=st.apply(null,arguments).map(Wr);return new L(function(n,o){r.map(function(s){return L.resolve(s).then(n,o)})})},PSD:{get:function(){return W},set:function(r){return W=r}},totalEchoes:{get:function(){return Vr}},newPSD:ft,usePSD:Dt,scheduler:{get:function(){return br},set:function(r){br=r}},rejectionMapper:{get:function(){return Fi},set:function(r){Fi=r}},follow:function(r,n){return new L(function(o,s){return ft(function(c,u){var h=W;h.unhandleds=[],h.onunhandled=u,h.finalize=St(function(){var m,v=this;m=function(){v.unhandleds.length===0?c():u(v.unhandleds[0])},Br.push(function S(){m(),Br.splice(Br.indexOf(S),1)}),++At,br(function(){--At==0&&qi()},[])},h.finalize),r()},n,o,s)})}}),Ct&&(Ct.allSettled&&H(L,"allSettled",function(){var r=st.apply(null,arguments).map(Wr);return new L(function(n){r.length===0&&n([]);var o=r.length,s=new Array(o);r.forEach(function(c,u){return L.resolve(c).then(function(h){return s[u]={status:"fulfilled",value:h}},function(h){return s[u]={status:"rejected",reason:h}}).then(function(){return--o||n(s)})})})}),Ct.any&&typeof AggregateError<"u"&&H(L,"any",function(){var r=st.apply(null,arguments).map(Wr);return new L(function(n,o){r.length===0&&o(new AggregateError([]));var s=r.length,c=new Array(s);r.forEach(function(u,h){return L.resolve(u).then(function(m){return n(m)},function(m){c[h]=m,--s||o(new AggregateError(c))})})})}),Ct.withResolvers)&&(L.withResolvers=Ct.withResolvers);var ke={awaits:0,echoes:0,id:0},Ro=0,Gr=[],Hr=0,Vr=0,zo=0;function ft(r,h,o,s){var c=W,u=Object.create(c),h=(u.parent=c,u.ref=0,u.global=!1,u.id=++zo,ct.env,u.env=Oi?{Promise:L,PromiseProp:{value:L,configurable:!0,writable:!0},all:L.all,race:L.race,allSettled:L.allSettled,any:L.any,resolve:L.resolve,reject:L.reject}:{},h&&E(u,h),++c.ref,u.finalize=function(){--this.parent.ref||this.parent.finalize()},Dt(u,r,o,s));return u.ref===0&&u.finalize(),h}function Xt(){return ke.id||(ke.id=++Ro),++ke.awaits,ke.echoes+=Wn,ke.id}function gt(){return!!ke.awaits&&(--ke.awaits==0&&(ke.id=0),ke.echoes=ke.awaits*Wn,!0)}function Wr(r){return ke.echoes&&r&&r.constructor===Ct?(Xt(),r.then(function(n){return gt(),n},function(n){return gt(),_e(n)})):r}function No(){var r=Gr[Gr.length-1];Gr.pop(),yt(r,!1)}function yt(r,n){var o,s,c=W;(n?!ke.echoes||Hr++&&r===W:!Hr||--Hr&&r===W)||queueMicrotask(n?(function(u){++Vr,ke.echoes&&--ke.echoes!=0||(ke.echoes=ke.awaits=ke.id=0),Gr.push(W),yt(u,!0)}).bind(null,r):No),r!==W&&(W=r,c===ct&&(ct.env=Xn()),Oi)&&(o=ct.env.Promise,s=r.env,c.global||r.global)&&(Object.defineProperty(d,"Promise",s.PromiseProp),o.all=s.all,o.race=s.race,o.resolve=s.resolve,o.reject=s.reject,s.allSettled&&(o.allSettled=s.allSettled),s.any)&&(o.any=s.any)}function Xn(){var r=d.Promise;return Oi?{Promise:r,PromiseProp:Object.getOwnPropertyDescriptor(d,"Promise"),all:r.all,race:r.race,allSettled:r.allSettled,any:r.any,resolve:r.resolve,reject:r.reject}:{}}function Dt(r,n,o,s,c){var u=W;try{return yt(r,!0),n(o,s,c)}finally{yt(u,!1)}}function Jn(r,n,o,s){return typeof r!="function"?r:function(){var c=W;o&&Xt(),yt(n,!0);try{return r.apply(this,arguments)}finally{yt(c,!1),s&&queueMicrotask(gt)}}}function Li(r){Promise===Ct&&ke.echoes===0?Hr===0?r():enqueueNativeMicroTask(r):setTimeout(r,0)}(""+tr).indexOf("[native code]")===-1&&(Xt=gt=ue);var _e=L.reject,Pt="￿",dt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Zn="String expected.",Qr="__dbnames",ji="readonly",Ki="readwrite";function Ot(r,n){return r?n?function(){return r.apply(this,arguments)&&n.apply(this,arguments)}:r:n}var ea={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Yr(r){return typeof r!="string"||/\./.test(r)?function(n){return n}:function(n){return n[r]===void 0&&r in n&&delete(n=oe(n))[r],n}}function ta(){throw Q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ae(r,n){try{var o=ra(r),s=ra(n);if(o!==s)return o==="Array"?1:s==="Array"?-1:o==="binary"?1:s==="binary"?-1:o==="string"?1:s==="string"?-1:o==="Date"?1:s!=="Date"?NaN:-1;switch(o){case"number":case"Date":case"string":return n<r?1:r<n?-1:0;case"binary":for(var c=ia(r),u=ia(n),h=c.length,m=u.length,v=h<m?h:m,S=0;S<v;++S)if(c[S]!==u[S])return c[S]<u[S]?-1:1;return h===m?0:h<m?-1:1;case"Array":for(var w=r,y=n,_=w.length,k=y.length,$=_<k?_:k,x=0;x<$;++x){var I=ae(w[x],y[x]);if(I!==0)return I}return _===k?0:_<k?-1:1}}catch{}return NaN}function ra(r){var n=typeof r;return n=="object"&&(ArrayBuffer.isView(r)||(n=Gt(r))==="ArrayBuffer")?"binary":n}function ia(r){return r instanceof Uint8Array?r:ArrayBuffer.isView(r)?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r)}function Xr(r,n,o){var s=r.schema.yProps;return s?(n&&0<o.numFailures&&(n=n.filter(function(c,u){return!o.failures[u]})),Promise.all(s.map(function(c){return c=c.updatesTable,n?r.db.table(c).where("k").anyOf(n).delete():r.db.table(c).clear()})).then(function(){return o})):o}na.prototype.execute=function(r){var n=this["@@propmod"];if(n.add!==void 0){var o=n.add;if(f(o))return l(l([],f(r)?r:[],!0),o).sort();if(typeof o=="number")return(Number(r)||0)+o;if(typeof o=="bigint")try{return BigInt(r)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(n.remove!==void 0){var s=n.remove;if(f(s))return f(r)?r.filter(function(c){return!s.includes(c)}).sort():[];if(typeof s=="number")return Number(r)-s;if(typeof s=="bigint")try{return BigInt(r)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return o=(o=n.replacePrefix)==null?void 0:o[0],o&&typeof r=="string"&&r.startsWith(o)?n.replacePrefix[1]+r.substring(o.length):r};var _r=na;function na(r){this["@@propmod"]=r}function aa(r,n){for(var o=p(n),s=o.length,c=!1,u=0;u<s;++u){var h=o[u],m=n[h],v=Fe(r,h);m instanceof _r?($e(r,h,m.execute(v)),c=!0):v!==m&&($e(r,h,m),c=!0)}return c}fe.prototype._trans=function(r,n,o){var s=this._tx||W.trans,c=this.name,u=it&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(r==="readonly"?"read":"write"," ").concat(this.name));function h(S,w,y){if(y.schema[c])return n(y.idbtrans,y);throw new Q.NotFound("Table "+c+" not part of transaction")}var m=Qt();try{var v=s&&s.db._novip===this.db._novip?s===W.trans?s._promise(r,h,o):ft(function(){return s._promise(r,h,o)},{trans:s,transless:W.transless||W}):(function S(w,y,_,k){if(w.idbdb&&(w._state.openComplete||W.letThrough||w._vip)){var $=w._createTransaction(y,_,w._dbSchema);try{$.create(),w._state.PR1398_maxLoop=3}catch(x){return x.name===Di.InvalidState&&w.isOpen()&&0<--w._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),w.close({disableAutoOpen:!1}),w.open().then(function(){return S(w,y,_,k)})):_e(x)}return $._promise(y,function(x,I){return ft(function(){return W.trans=$,k(x,I,$)})}).then(function(x){if(y==="readwrite")try{$.idbtrans.commit()}catch{}return y==="readonly"?x:$._completion.then(function(){return x})})}if(w._state.openComplete)return _e(new Q.DatabaseClosed(w._state.dbOpenError));if(!w._state.isBeingOpened){if(!w._state.autoOpen)return _e(new Q.DatabaseClosed);w.open().catch(ue)}return w._state.dbReadyPromise.then(function(){return S(w,y,_,k)})})(this.db,r,[this.name],h);return u&&(v._consoleTask=u,v=v.catch(function(S){return console.trace(S),_e(S)})),v}finally{m&&Yt()}},fe.prototype.get=function(r,n){var o=this;return r&&r.constructor===Object?this.where(r).first(n):r==null?_e(new Q.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return o.core.get({trans:s,key:r}).then(function(c){return o.hook.reading.fire(c)})}).then(n)},fe.prototype.where=function(r){if(typeof r=="string")return new this.db.WhereClause(this,r);if(f(r))return new this.db.WhereClause(this,"[".concat(r.join("+"),"]"));var n=p(r);if(n.length===1)return this.where(n[0]).equals(r[n[0]]);var o=this.schema.indexes.concat(this.schema.primKey).filter(function(m){if(m.compound&&n.every(function(S){return 0<=m.keyPath.indexOf(S)})){for(var v=0;v<n.length;++v)if(n.indexOf(m.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(m,v){return m.keyPath.length-v.keyPath.length})[0];if(o&&this.db._maxKey!==Pt)return h=o.keyPath.slice(0,n.length),this.where(h).equals(h.map(function(m){return r[m]}));!o&&it&&console.warn("The query ".concat(JSON.stringify(r)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(n.join("+"),"]"));var s=this.schema.idxByName;function c(m,v){return ae(m,v)===0}var h=n.reduce(function(w,v){var S=w[0],w=w[1],y=s[v],_=r[v];return[S||y,S||!y?Ot(w,y&&y.multi?function(k){return k=Fe(k,v),f(k)&&k.some(function($){return c(_,$)})}:function(k){return c(_,Fe(k,v))}):w]},[null,null]),u=h[0],h=h[1];return u?this.where(u.name).equals(r[u.keyPath]).filter(h):o?this.filter(h):this.where(n).equals("")},fe.prototype.filter=function(r){return this.toCollection().and(r)},fe.prototype.count=function(r){return this.toCollection().count(r)},fe.prototype.offset=function(r){return this.toCollection().offset(r)},fe.prototype.limit=function(r){return this.toCollection().limit(r)},fe.prototype.each=function(r){return this.toCollection().each(r)},fe.prototype.toArray=function(r){return this.toCollection().toArray(r)},fe.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},fe.prototype.orderBy=function(r){return new this.db.Collection(new this.db.WhereClause(this,f(r)?"[".concat(r.join("+"),"]"):r))},fe.prototype.reverse=function(){return this.toCollection().reverse()},fe.prototype.mapToClass=function(r){for(var n=this.db,o=this.name,s=((this.schema.mappedClass=r).prototype instanceof ta&&(r=(h=>{var m=w,v=h;if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function S(){this.constructor=m}function w(){return h!==null&&h.apply(this,arguments)||this}return i(m,v),m.prototype=v===null?Object.create(v):(S.prototype=v.prototype,new S),Object.defineProperty(w.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),w.prototype.table=function(){return o},w})(r)),new Set),c=r.prototype;c;c=P(c))Object.getOwnPropertyNames(c).forEach(function(h){return s.add(h)});function u(h){if(!h)return h;var m,v=Object.create(r.prototype);for(m in h)if(!s.has(m))try{v[m]=h[m]}catch{}return v}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=u,this.hook("reading",u),r},fe.prototype.defineClass=function(){return this.mapToClass(function(r){E(this,r)})},fe.prototype.add=function(r,n){var o=this,s=this.schema.primKey,c=s.auto,u=s.keyPath,h=r;return u&&c&&(h=Yr(u)(r)),this._trans("readwrite",function(m){return o.core.mutate({trans:m,type:"add",keys:n!=null?[n]:null,values:[h]})}).then(function(m){return m.numFailures?L.reject(m.failures[0]):m.lastResult}).then(function(m){if(u)try{$e(r,u,m)}catch{}return m})},fe.prototype.upsert=function(r,n){var o=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(c){return o.core.get({trans:c,key:r}).then(function(u){var h=u??{};return aa(h,n),s&&$e(h,s,r),o.core.mutate({trans:c,type:"put",values:[h],keys:[r],upsert:!0,updates:{keys:[r],changeSpecs:[n]}}).then(function(m){return m.numFailures?L.reject(m.failures[0]):!!u})})})},fe.prototype.update=function(r,n){return typeof r!="object"||f(r)?this.where(":id").equals(r).modify(n):(r=Fe(r,this.schema.primKey.keyPath))===void 0?_e(new Q.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(r).modify(n)},fe.prototype.put=function(r,n){var o=this,s=this.schema.primKey,c=s.auto,u=s.keyPath,h=r;return u&&c&&(h=Yr(u)(r)),this._trans("readwrite",function(m){return o.core.mutate({trans:m,type:"put",values:[h],keys:n!=null?[n]:null})}).then(function(m){return m.numFailures?L.reject(m.failures[0]):m.lastResult}).then(function(m){if(u)try{$e(r,u,m)}catch{}return m})},fe.prototype.delete=function(r){var n=this;return this._trans("readwrite",function(o){return n.core.mutate({trans:o,type:"delete",keys:[r]}).then(function(s){return Xr(n,[r],s)}).then(function(s){return s.numFailures?L.reject(s.failures[0]):void 0})})},fe.prototype.clear=function(){var r=this;return this._trans("readwrite",function(n){return r.core.mutate({trans:n,type:"deleteRange",range:ea}).then(function(o){return Xr(r,null,o)})}).then(function(n){return n.numFailures?L.reject(n.failures[0]):void 0})},fe.prototype.bulkGet=function(r){var n=this;return this._trans("readonly",function(o){return n.core.getMany({keys:r,trans:o}).then(function(s){return s.map(function(c){return n.hook.reading.fire(c)})})})},fe.prototype.bulkAdd=function(r,n,o){var s=this,c=Array.isArray(n)?n:void 0,u=(o=o||(c?void 0:n))?o.allKeys:void 0;return this._trans("readwrite",function(h){var m=s.schema.primKey,S=m.auto,m=m.keyPath;if(m&&c)throw new Q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(c&&c.length!==r.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var v=r.length,S=m&&S?r.map(Yr(m)):r;return s.core.mutate({trans:h,type:"add",keys:c,values:S,wantResults:u}).then(function(w){var y=w.numFailures,_=w.failures;if(y===0)return u?w.results:w.lastResult;throw new Wt("".concat(s.name,".bulkAdd(): ").concat(y," of ").concat(v," operations failed"),_)})})},fe.prototype.bulkPut=function(r,n,o){var s=this,c=Array.isArray(n)?n:void 0,u=(o=o||(c?void 0:n))?o.allKeys:void 0;return this._trans("readwrite",function(h){var m=s.schema.primKey,S=m.auto,m=m.keyPath;if(m&&c)throw new Q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(c&&c.length!==r.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var v=r.length,S=m&&S?r.map(Yr(m)):r;return s.core.mutate({trans:h,type:"put",keys:c,values:S,wantResults:u}).then(function(w){var y=w.numFailures,_=w.failures;if(y===0)return u?w.results:w.lastResult;throw new Wt("".concat(s.name,".bulkPut(): ").concat(y," of ").concat(v," operations failed"),_)})})},fe.prototype.bulkUpdate=function(r){var n=this,o=this.core,s=r.map(function(h){return h.key}),c=r.map(function(h){return h.changes}),u=[];return this._trans("readwrite",function(h){return o.getMany({trans:h,keys:s,cache:"clone"}).then(function(m){var v=[],S=[],w=(r.forEach(function(y,_){var k=y.key,$=y.changes,x=m[_];if(x){for(var I=0,A=Object.keys($);I<A.length;I++){var M=A[I],D=$[M];if(M===n.schema.primKey.keyPath){if(ae(D,k)!==0)throw new Q.Constraint("Cannot update primary key in bulkUpdate()")}else $e(x,M,D)}u.push(_),v.push(k),S.push(x)}}),v.length);return o.mutate({trans:h,type:"put",keys:v,values:S,updates:{keys:s,changeSpecs:c}}).then(function(y){var _=y.numFailures,k=y.failures;if(_===0)return w;for(var $=0,x=Object.keys(k);$<x.length;$++){var I,A=x[$],M=u[Number(A)];M!=null&&(I=k[A],delete k[A],k[M]=I)}throw new Wt("".concat(n.name,".bulkUpdate(): ").concat(_," of ").concat(w," operations failed"),k)})})})},fe.prototype.bulkDelete=function(r){var n=this,o=r.length;return this._trans("readwrite",function(s){return n.core.mutate({trans:s,type:"delete",keys:r}).then(function(c){return Xr(n,r,c)})}).then(function(s){var c=s.numFailures,u=s.failures;if(c===0)return s.lastResult;throw new Wt("".concat(n.name,".bulkDelete(): ").concat(c," of ").concat(o," operations failed"),u)})};var oa=fe;function fe(){}function wr(r){function n(h,m){if(m){for(var v=arguments.length,S=new Array(v-1);--v;)S[v-1]=arguments[v];return o[h].subscribe.apply(null,S),r}if(typeof h=="string")return o[h]}var o={};n.addEventType=u;for(var s=1,c=arguments.length;s<c;++s)u(arguments[s]);return n;function u(h,m,v){var S,w;if(typeof h!="object")return m=m||Oo,w={subscribers:[],fire:v=v||ue,subscribe:function(y){w.subscribers.indexOf(y)===-1&&(w.subscribers.push(y),w.fire=m(w.fire,y))},unsubscribe:function(y){w.subscribers=w.subscribers.filter(function(_){return _!==y}),w.fire=w.subscribers.reduce(m,v)}},o[h]=n[h]=w;p(S=h).forEach(function(y){var _=S[y];if(f(_))u(y,S[y][0],S[y][1]);else{if(_!=="asap")throw new Q.InvalidArgument("Invalid event config");var k=u(y,fr,function(){for(var $=arguments.length,x=new Array($);$--;)x[$]=arguments[$];k.subscribers.forEach(function(I){G(function(){I.apply(null,x)})})})}})}}function xr(r,n){return le(n).from({prototype:r}),n}function Jt(r,n){return!(r.filter||r.algorithm||r.or)&&(n?r.justLimit:!r.replayFilter)}function Bi(r,n){r.filter=Ot(r.filter,n)}function Ui(r,n,o){var s=r.replayFilter;r.replayFilter=s?function(){return Ot(s(),n())}:n,r.justLimit=o&&!s}function Jr(r,n){if(r.isPrimKey)return n.primaryKey;var o=n.getIndexByKeyPath(r.index);if(o)return o;throw new Q.Schema("KeyPath "+r.index+" on object store "+n.name+" is not indexed")}function sa(r,n,o){var s=Jr(r,n.schema);return n.openCursor({trans:o,values:!r.keysOnly,reverse:r.dir==="prev",unique:!!r.unique,query:{index:s,range:r.range}})}function Zr(r,n,o,s){var c,u,h=r.replayFilter?Ot(r.filter,r.replayFilter()):r.filter;return r.or?(c={},u=function(m,v,S){var w,y;h&&!h(v,S,function(_){return v.stop(_)},function(_){return v.fail(_)})||((y=""+(w=v.primaryKey))=="[object ArrayBuffer]"&&(y=""+new Uint8Array(w)),N(c,y))||(c[y]=!0,n(m,v,S))},Promise.all([r.or._iterate(u,o),la(sa(r,s,o),r.algorithm,u,!r.keysOnly&&r.valueMapper)])):la(sa(r,s,o),Ot(r.algorithm,h),n,!r.keysOnly&&r.valueMapper)}function la(r,n,o,s){var c=ge(s?function(u,h,m){return o(s(u),h,m)}:o);return r.then(function(u){if(u)return u.start(function(){var h=function(){return u.continue()};n&&!n(u,function(m){return h=m},function(m){u.stop(m),h=ue},function(m){u.fail(m),h=ue})||c(u.value,u,function(m){return h=m}),h()})})}se.prototype._read=function(r,n){var o=this._ctx;return o.error?o.table._trans(null,_e.bind(null,o.error)):o.table._trans("readonly",r).then(n)},se.prototype._write=function(r){var n=this._ctx;return n.error?n.table._trans(null,_e.bind(null,n.error)):n.table._trans("readwrite",r,"locked")},se.prototype._addAlgorithm=function(r){var n=this._ctx;n.algorithm=Ot(n.algorithm,r)},se.prototype._iterate=function(r,n){return Zr(this._ctx,r,n,this._ctx.table.core)},se.prototype.clone=function(r){var n=Object.create(this.constructor.prototype),o=Object.create(this._ctx);return r&&E(o,r),n._ctx=o,n},se.prototype.raw=function(){return this._ctx.valueMapper=null,this},se.prototype.each=function(r){var n=this._ctx;return this._read(function(o){return Zr(n,r,o,n.table.core)})},se.prototype.count=function(r){var n=this;return this._read(function(o){var s,c=n._ctx,u=c.table.core;return Jt(c,!0)?u.count({trans:o,query:{index:Jr(c,u.schema),range:c.range}}).then(function(h){return Math.min(h,c.limit)}):(s=0,Zr(c,function(){return++s,!1},o,u).then(function(){return s}))}).then(r)},se.prototype.sortBy=function(r,n){var o=r.split(".").reverse(),s=o[0],c=o.length-1;function u(v,S){return S?u(v[o[S]],S-1):v[s]}var h=this._ctx.dir==="next"?1:-1;function m(v,S){return ae(u(v,c),u(S,c))*h}return this.toArray(function(v){return v.slice().sort(m)}).then(n)},se.prototype.toArray=function(r){var n=this;return this._read(function(o){var s,c,u,h=n._ctx;return Jt(h,!0)&&0<h.limit?(s=h.valueMapper,c=Jr(h,h.table.core.schema),h.table.core.query({trans:o,limit:h.limit,values:!0,direction:h.dir==="prev"?"prev":void 0,query:{index:c,range:h.range}}).then(function(m){return m=m.result,s?m.map(s):m})):(u=[],Zr(h,function(m){return u.push(m)},o,h.table.core).then(function(){return u}))},r)},se.prototype.offset=function(r){var n=this._ctx;return r<=0||(n.offset+=r,Jt(n)?Ui(n,function(){var o=r;return function(s,c){return o===0||(o===1?--o:c(function(){s.advance(o),o=0}),!1)}}):Ui(n,function(){var o=r;return function(){return--o<0}})),this},se.prototype.limit=function(r){return this._ctx.limit=Math.min(this._ctx.limit,r),Ui(this._ctx,function(){var n=r;return function(o,s,c){return--n<=0&&s(c),0<=n}},!0),this},se.prototype.until=function(r,n){return Bi(this._ctx,function(o,s,c){return!r(o.value)||(s(c),n)}),this},se.prototype.first=function(r){return this.limit(1).toArray(function(n){return n[0]}).then(r)},se.prototype.last=function(r){return this.reverse().first(r)},se.prototype.filter=function(r){var n;return Bi(this._ctx,function(o){return r(o.value)}),(n=this._ctx).isMatch=Ot(n.isMatch,r),this},se.prototype.and=function(r){return this.filter(r)},se.prototype.or=function(r){return new this.db.WhereClause(this._ctx.table,r,this)},se.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},se.prototype.desc=function(){return this.reverse()},se.prototype.eachKey=function(r){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(o,s){r(s.key,s)})},se.prototype.eachUniqueKey=function(r){return this._ctx.unique="unique",this.eachKey(r)},se.prototype.eachPrimaryKey=function(r){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(o,s){r(s.primaryKey,s)})},se.prototype.keys=function(r){var n=this._ctx,o=(n.keysOnly=!n.isMatch,[]);return this.each(function(s,c){o.push(c.key)}).then(function(){return o}).then(r)},se.prototype.primaryKeys=function(r){var n=this._ctx;if(Jt(n,!0)&&0<n.limit)return this._read(function(s){var c=Jr(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,direction:n.dir==="prev"?"prev":void 0,query:{index:c,range:n.range}})}).then(function(s){return s.result}).then(r);n.keysOnly=!n.isMatch;var o=[];return this.each(function(s,c){o.push(c.primaryKey)}).then(function(){return o}).then(r)},se.prototype.uniqueKeys=function(r){return this._ctx.unique="unique",this.keys(r)},se.prototype.firstKey=function(r){return this.limit(1).keys(function(n){return n[0]}).then(r)},se.prototype.lastKey=function(r){return this.reverse().firstKey(r)},se.prototype.distinct=function(){var r,n=this._ctx,n=n.index&&n.table.schema.idxByName[n.index];return n&&n.multi&&(r={},Bi(this._ctx,function(s){var s=s.primaryKey.toString(),c=N(r,s);return r[s]=!0,!c})),this},se.prototype.modify=function(r){var n=this,o=this._ctx;return this._write(function(s){function c(x,I){var A=I.failures;_+=x-I.numFailures;for(var M=0,D=p(A);M<D.length;M++){var O=D[M];y.push(A[O])}}var u=typeof r=="function"?r:function(x){return aa(x,r)},h=o.table.core,w=h.schema.primaryKey,m=w.outbound,v=w.extractKey,S=200,w=n.db._options.modifyChunkSize,y=(w&&(S=typeof w=="object"?w[h.name]||w["*"]||200:w),[]),_=0,k=[],$=r===ca;return n.clone().primaryKeys().then(function(x){function I(M){var D=Math.min(S,x.length-M),O=x.slice(M,M+D);return($?Promise.resolve([]):h.getMany({trans:s,keys:O,cache:"immutable"})).then(function(F){var q=[],R=[],K=m?[]:null,z=$?O:[];if(!$)for(var B=0;B<D;++B){var T=F[B],Y={value:oe(T),primKey:x[M+B]};u.call(Y,Y.value,Y)!==!1&&(Y.value==null?z.push(x[M+B]):m||ae(v(T),v(Y.value))===0?(R.push(Y.value),m&&K.push(x[M+B])):(z.push(x[M+B]),q.push(Y.value)))}return Promise.resolve(0<q.length&&h.mutate({trans:s,type:"add",values:q}).then(function(X){for(var te in X.failures)z.splice(parseInt(te),1);c(q.length,X)})).then(function(){return(0<R.length||A&&typeof r=="object")&&h.mutate({trans:s,type:"put",keys:K,values:R,criteria:A,changeSpec:typeof r!="function"&&r,isAdditionalChunk:0<M}).then(function(X){return c(R.length,X)})}).then(function(){return(0<z.length||A&&$)&&h.mutate({trans:s,type:"delete",keys:z,criteria:A,isAdditionalChunk:0<M}).then(function(X){return Xr(o.table,z,X)}).then(function(X){return c(z.length,X)})}).then(function(){return x.length>M+D&&I(M+S)})})}var A=Jt(o)&&o.limit===1/0&&(typeof r!="function"||$)&&{index:o.index,range:o.range};return I(0).then(function(){if(0<y.length)throw new Lr("Error modifying one or more objects",y,_,k);return x.length})})})},se.prototype.delete=function(){var r=this._ctx,n=r.range;return!Jt(r)||r.table.schema.yProps||!r.isPrimKey&&n.type!==3?this.modify(ca):this._write(function(o){var s=r.table.core.schema.primaryKey,c=n;return r.table.core.count({trans:o,query:{index:s,range:c}}).then(function(u){return r.table.core.mutate({trans:o,type:"deleteRange",range:c}).then(function(v){var m=v.failures,v=v.numFailures;if(v)throw new Lr("Could not delete some values",Object.keys(m).map(function(S){return m[S]}),u-v);return u-v})})})};var qo=se;function se(){}var ca=function(r,n){return n.value=null};function Lo(r,n){return r<n?-1:r===n?0:1}function jo(r,n){return n<r?-1:r===n?0:1}function Ue(r,n,o){return r=r instanceof ua?new r.Collection(r):r,r._ctx.error=new(o||TypeError)(n),r}function Zt(r){return new r.Collection(r,function(){return da("")}).limit(0)}function ei(k,n,o,s){var c,u,h,m,v,S,w,y=o.length;if(!o.every(function(x){return typeof x=="string"}))return Ue(k,Zn);function _(x){c=x==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},u=x==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},h=x==="next"?Lo:jo;var I=o.map(function(A){return{lower:u(A),upper:c(A)}}).sort(function(A,M){return h(A.lower,M.lower)});m=I.map(function(A){return A.upper}),v=I.map(function(A){return A.lower}),w=(S=x)==="next"?"":s}_("next");var k=new k.Collection(k,function(){return bt(m[0],v[y-1]+s)}),$=(k._ondirectionchange=function(x){_(x)},0);return k._addAlgorithm(function(x,I,A){var M=x.key;if(typeof M=="string"){var D=u(M);if(n(D,v,$))return!0;for(var O=null,F=$;F<y;++F){var q=((R,K,z,B,T,Y)=>{for(var X=Math.min(R.length,B.length),te=-1,ne=0;ne<X;++ne){var Ge=K[ne];if(Ge!==B[ne])return T(R[ne],z[ne])<0?R.substr(0,ne)+z[ne]+z.substr(ne+1):T(R[ne],B[ne])<0?R.substr(0,ne)+B[ne]+z.substr(ne+1):0<=te?R.substr(0,te)+K[te]+z.substr(te+1):null;T(R[ne],Ge)<0&&(te=ne)}return X<B.length&&Y==="next"?R+z.substr(R.length):X<R.length&&Y==="prev"?R.substr(0,z.length):te<0?null:R.substr(0,te)+B[te]+z.substr(te+1)})(M,D,m[F],v[F],h,S);q===null&&O===null?$=F+1:(O===null||0<h(O,q))&&(O=q)}I(O!==null?function(){x.continue(O+w)}:A)}return!1}),k}function bt(r,n,o,s){return{type:2,lower:r,upper:n,lowerOpen:o,upperOpen:s}}function da(r){return{type:1,lower:r,upper:r}}Object.defineProperty(Ee.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Ee.prototype.between=function(r,n,o,s){o=o!==!1,s=s===!0;try{return 0<this._cmp(r,n)||this._cmp(r,n)===0&&(o||s)&&(!o||!s)?Zt(this):new this.Collection(this,function(){return bt(r,n,!o,!s)})}catch{return Ue(this,dt)}},Ee.prototype.equals=function(r){return r==null?Ue(this,dt):new this.Collection(this,function(){return da(r)})},Ee.prototype.above=function(r){return r==null?Ue(this,dt):new this.Collection(this,function(){return bt(r,void 0,!0)})},Ee.prototype.aboveOrEqual=function(r){return r==null?Ue(this,dt):new this.Collection(this,function(){return bt(r,void 0,!1)})},Ee.prototype.below=function(r){return r==null?Ue(this,dt):new this.Collection(this,function(){return bt(void 0,r,!1,!0)})},Ee.prototype.belowOrEqual=function(r){return r==null?Ue(this,dt):new this.Collection(this,function(){return bt(void 0,r)})},Ee.prototype.startsWith=function(r){return typeof r!="string"?Ue(this,Zn):this.between(r,r+Pt,!0,!0)},Ee.prototype.startsWithIgnoreCase=function(r){return r===""?this.startsWith(r):ei(this,function(n,o){return n.indexOf(o[0])===0},[r],Pt)},Ee.prototype.equalsIgnoreCase=function(r){return ei(this,function(n,o){return n===o[0]},[r],"")},Ee.prototype.anyOfIgnoreCase=function(){var r=st.apply(Ht,arguments);return r.length===0?Zt(this):ei(this,function(n,o){return o.indexOf(n)!==-1},r,"")},Ee.prototype.startsWithAnyOfIgnoreCase=function(){var r=st.apply(Ht,arguments);return r.length===0?Zt(this):ei(this,function(n,o){return o.some(function(s){return n.indexOf(s)===0})},r,Pt)},Ee.prototype.anyOf=function(){var r,n,o=this,s=st.apply(Ht,arguments),c=this._cmp;try{s.sort(c)}catch{return Ue(this,dt)}return s.length===0?Zt(this):((r=new this.Collection(this,function(){return bt(s[0],s[s.length-1])}))._ondirectionchange=function(u){c=u==="next"?o._ascending:o._descending,s.sort(c)},n=0,r._addAlgorithm(function(u,h,m){for(var v=u.key;0<c(v,s[n]);)if(++n===s.length)return h(m),!1;return c(v,s[n])===0||(h(function(){u.continue(s[n])}),!1)}),r)},Ee.prototype.notEqual=function(r){return this.inAnyRange([[-1/0,r],[r,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Ee.prototype.noneOf=function(){var r=st.apply(Ht,arguments);if(r.length===0)return new this.Collection(this);try{r.sort(this._ascending)}catch{return Ue(this,dt)}var n=r.reduce(function(o,s){return o?o.concat([[o[o.length-1][1],s]]):[[-1/0,s]]},null);return n.push([r[r.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})},Ee.prototype.inAnyRange=function(r,A){var o=this,s=this._cmp,c=this._ascending,u=this._descending,h=this._min,m=this._max;if(r.length===0)return Zt(this);if(!r.every(function(M){return M[0]!==void 0&&M[1]!==void 0&&c(M[0],M[1])<=0}))return Ue(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Q.InvalidArgument);var v=!A||A.includeLowers!==!1,S=A&&A.includeUppers===!0,w,y=c;function _(M,D){return y(M[0],D[0])}try{(w=r.reduce(function(M,D){for(var O=0,F=M.length;O<F;++O){var q=M[O];if(s(D[0],q[1])<0&&0<s(D[1],q[0])){q[0]=h(q[0],D[0]),q[1]=m(q[1],D[1]);break}}return O===F&&M.push(D),M},[])).sort(_)}catch{return Ue(this,dt)}var k=0,$=S?function(M){return 0<c(M,w[k][1])}:function(M){return 0<=c(M,w[k][1])},x=v?function(M){return 0<u(M,w[k][0])}:function(M){return 0<=u(M,w[k][0])},I=$,A=new this.Collection(this,function(){return bt(w[0][0],w[w.length-1][1],!v,!S)});return A._ondirectionchange=function(M){y=M==="next"?(I=$,c):(I=x,u),w.sort(_)},A._addAlgorithm(function(M,D,O){for(var F,q=M.key;I(q);)if(++k===w.length)return D(O),!1;return!$(F=q)&&!x(F)||(o._cmp(q,w[k][1])===0||o._cmp(q,w[k][0])===0||D(function(){y===c?M.continue(w[k][0]):M.continue(w[k][1])}),!1)}),A},Ee.prototype.startsWithAnyOf=function(){var r=st.apply(Ht,arguments);return r.every(function(n){return typeof n=="string"})?r.length===0?Zt(this):this.inAnyRange(r.map(function(n){return[n,n+Pt]})):Ue(this,"startsWithAnyOf() only works with strings")};var ua=Ee;function Ee(){}function Qe(r){return ge(function(n){return $r(n),r(n.target.error),!1})}function $r(r){r.stopPropagation&&r.stopPropagation(),r.preventDefault&&r.preventDefault()}var ti="storagemutated",Gi="x-storagemutated-1",vt=wr(null,ti),Ko=(nt.prototype._lock=function(){return We(!W.global),++this._reculock,this._reculock!==1||W.global||(W.lockOwnerFor=this),this},nt.prototype._unlock=function(){if(We(!W.global),--this._reculock==0)for(W.global||(W.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var r=this._blockedFuncs.shift();try{Dt(r[1],r[0])}catch{}}return this},nt.prototype._locked=function(){return this._reculock&&W.lockOwnerFor!==this},nt.prototype.create=function(r){var n=this;if(this.mode){var o=this.db.idbdb,s=this.db._state.dbOpenError;if(We(!this.idbtrans),!r&&!o)switch(s&&s.name){case"DatabaseClosedError":throw new Q.DatabaseClosed(s);case"MissingAPIError":throw new Q.MissingAPI(s.message,s);default:throw new Q.OpenFailed(s)}if(!this.active)throw new Q.TransactionInactive;We(this._completion._state===null),(r=this.idbtrans=r||(this.db.core||o).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ge(function(c){$r(c),n._reject(r.error)}),r.onabort=ge(function(c){$r(c),n.active&&n._reject(new Q.Abort(r.error)),n.active=!1,n.on("abort").fire(c)}),r.oncomplete=ge(function(){n.active=!1,n._resolve(),"mutatedParts"in r&&vt.storagemutated.fire(r.mutatedParts)})}return this},nt.prototype._promise=function(r,n,o){var s,c=this;return r==="readwrite"&&this.mode!=="readwrite"?_e(new Q.ReadOnly("Transaction is readonly")):this.active?this._locked()?new L(function(u,h){c._blockedFuncs.push([function(){c._promise(r,n,o).then(u,h)},W])}):o?ft(function(){var u=new L(function(h,m){c._lock();var v=n(h,m,c);v&&v.then&&v.then(h,m)});return u.finally(function(){return c._unlock()}),u._lib=!0,u}):((s=new L(function(u,h){var m=n(u,h,c);m&&m.then&&m.then(u,h)}))._lib=!0,s):_e(new Q.TransactionInactive)},nt.prototype._root=function(){return this.parent?this.parent._root():this},nt.prototype.waitFor=function(r){var n,o=this._root(),s=L.resolve(r),c=(o._waitingFor?o._waitingFor=o._waitingFor.then(function(){return s}):(o._waitingFor=s,o._waitingQueue=[],n=o.idbtrans.objectStore(o.storeNames[0]),(function u(){for(++o._spinCount;o._waitingQueue.length;)o._waitingQueue.shift()();o._waitingFor&&(n.get(-1/0).onsuccess=u)})()),o._waitingFor);return new L(function(u,h){s.then(function(m){return o._waitingQueue.push(ge(u.bind(null,m)))},function(m){return o._waitingQueue.push(ge(h.bind(null,m)))}).finally(function(){o._waitingFor===c&&(o._waitingFor=null)})})},nt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Q.Abort))},nt.prototype.table=function(r){var n=this._memoizedTables||(this._memoizedTables={});if(N(n,r))return n[r];var o=this.schema[r];if(o)return(o=new this.db.Table(r,o,this)).core=this.db.core.table(r),n[r]=o;throw new Q.NotFound("Table "+r+" not part of transaction")},nt);function nt(){}function Hi(r,n,o,s,c,u,h,m){return{name:r,keyPath:n,unique:o,multi:s,auto:c,compound:u,src:(o&&!h?"&":"")+(s?"*":"")+(c?"++":"")+pa(n),type:m}}function pa(r){return typeof r=="string"?r:r?"["+[].join.call(r,"+")+"]":""}function Vi(r,n,o){return{name:r,primKey:n,indexes:o,mappedClass:null,idxByName:(s=function(c){return[c.name,c]},o.reduce(function(c,u,h){return u=s(u,h),u&&(c[u[0]]=u[1]),c},{}))};var s}var Ir=function(r){try{return r.only([[]]),Ir=function(){return[[]]},[[]]}catch{return Ir=function(){return Pt},Pt}};function Wi(r){return r==null?function(){}:typeof r=="string"?(n=r).split(".").length===1?function(o){return o[n]}:function(o){return Fe(o,n)}:function(o){return Fe(o,r)};var n}function ha(r){return[].slice.call(r)}var Bo=0;function kr(r){return r==null?":id":typeof r=="string"?r:"[".concat(r.join("+"),"]")}function Uo(r,n,h){function s(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var k=I.lower,$=I.upper,x=I.lowerOpen,I=I.upperOpen;return k===void 0?$===void 0?null:n.upperBound($,!!I):$===void 0?n.lowerBound(k,!!x):n.bound(k,$,!!x,!!I)}function c(_){var k,$,x=_.name;return{name:x,schema:_,mutate:function(I){var A=I.trans,M=I.type,D=I.keys,O=I.values,F=I.range;return new Promise(function(q,R){q=ge(q);var K=A.objectStore(x),z=K.keyPath==null,B=M==="put"||M==="add";if(!B&&M!=="delete"&&M!=="deleteRange")throw new Error("Invalid operation type: "+M);var T,Y=(D||O||{length:1}).length;if(D&&O&&D.length!==O.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return q({numFailures:0,failures:{},results:[],lastResult:void 0});function X(Re){++Ge,$r(Re)}var te=[],ne=[],Ge=0;if(M==="deleteRange"){if(F.type===4)return q({numFailures:Ge,failures:ne,results:[],lastResult:void 0});F.type===3?te.push(T=K.clear()):te.push(T=K.delete(s(F)))}else{var z=B?z?[O,D]:[O,null]:[D,null],ee=z[0],Pe=z[1];if(B)for(var Oe=0;Oe<Y;++Oe)te.push(T=Pe&&Pe[Oe]!==void 0?K[M](ee[Oe],Pe[Oe]):K[M](ee[Oe])),T.onerror=X;else for(Oe=0;Oe<Y;++Oe)te.push(T=K[M](ee[Oe])),T.onerror=X}function hi(Re){Re=Re.target.result,te.forEach(function(Rt,hn){return Rt.error!=null&&(ne[hn]=Rt.error)}),q({numFailures:Ge,failures:ne,results:M==="delete"?D:te.map(function(Rt){return Rt.result}),lastResult:Re})}T.onerror=function(Re){X(Re),hi(Re)},T.onsuccess=hi})},getMany:function(I){var A=I.trans,M=I.keys;return new Promise(function(D,O){D=ge(D);for(var F,q=A.objectStore(x),R=M.length,K=new Array(R),z=0,B=0,T=function(te){te=te.target,K[te._pos]=te.result,++B===z&&D(K)},Y=Qe(O),X=0;X<R;++X)M[X]!=null&&((F=q.get(M[X]))._pos=X,F.onsuccess=T,F.onerror=Y,++z);z===0&&D(K)})},get:function(I){var A=I.trans,M=I.key;return new Promise(function(D,O){D=ge(D);var F=A.objectStore(x).get(M);F.onsuccess=function(q){return D(q.target.result)},F.onerror=Qe(O)})},query:(k=v,$=S,function(I){return new Promise(function(A,M){A=ge(A);var D,O,F,q,Y=I.trans,R=I.values,K=I.limit,T=I.query,z=(z=I.direction)!=null?z:"next",B=K===1/0?void 0:K,X=T.index,T=T.range,Y=Y.objectStore(x),Y=X.isPrimaryKey?Y:Y.index(X.name),X=s(T);if(K===0)return A({result:[]});$?(T={query:X,count:B,direction:z},(D=R?Y.getAll(T):Y.getAllKeys(T)).onsuccess=function(te){return A({result:te.target.result})},D.onerror=Qe(M)):k&&z==="next"?((D=R?Y.getAll(X,B):Y.getAllKeys(X,B)).onsuccess=function(te){return A({result:te.target.result})},D.onerror=Qe(M)):(O=0,F=!R&&"openKeyCursor"in Y?Y.openKeyCursor(X,z):Y.openCursor(X,z),q=[],F.onsuccess=function(){var te=F.result;return!te||(q.push(R?te.value:te.primaryKey),++O===K)?A({result:q}):void te.continue()},F.onerror=Qe(M))})}),openCursor:function(I){var A=I.trans,M=I.values,D=I.query,O=I.reverse,F=I.unique;return new Promise(function(q,R){q=ge(q);var B=D.index,K=D.range,z=A.objectStore(x),z=B.isPrimaryKey?z:z.index(B.name),B=O?F?"prevunique":"prev":F?"nextunique":"next",T=!M&&"openKeyCursor"in z?z.openKeyCursor(s(K),B):z.openCursor(s(K),B);T.onerror=Qe(R),T.onsuccess=ge(function(Y){var X,te,ne,Ge,ee=T.result;ee?(ee.___id=++Bo,ee.done=!1,X=ee.continue.bind(ee),te=(te=ee.continuePrimaryKey)&&te.bind(ee),ne=ee.advance.bind(ee),Ge=function(){throw new Error("Cursor not stopped")},ee.trans=A,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ge(R),ee.next=function(){var Pe=this,Oe=1;return this.start(function(){return Oe--?Pe.continue():Pe.stop()}).then(function(){return Pe})},ee.start=function(Pe){function Oe(){if(T.result)try{Pe()}catch(Re){ee.fail(Re)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var hi=new Promise(function(Re,Rt){Re=ge(Re),T.onerror=Qe(Rt),ee.fail=Rt,ee.stop=function(hn){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=Ge,Re(hn)}});return T.onsuccess=ge(function(Re){T.onsuccess=Oe,Oe()}),ee.continue=X,ee.continuePrimaryKey=te,ee.advance=ne,Oe(),hi},q(ee)):q(null)},R)})},count:function(I){var A=I.query,M=I.trans,D=A.index,O=A.range;return new Promise(function(F,q){var R=M.objectStore(x),R=D.isPrimaryKey?R:R.index(D.name),K=s(O),K=K?R.count(K):R.count();K.onsuccess=ge(function(z){return F(z.target.result)}),K.onerror=Qe(q)})}}}u=h,m=ha((h=r).objectStoreNames),w=0<m.length?u.objectStore(m[0]):{};var u,h={schema:{name:h.name,tables:m.map(function(_){return u.objectStore(_)}).map(function(_){var k=_.keyPath,$=_.autoIncrement,I=f(k),x={},I={name:_.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:k==null,compound:I,keyPath:k,autoIncrement:$,unique:!0,extractKey:Wi(k)},indexes:ha(_.indexNames).map(function(A){return _.index(A)}).map(function(O){var F=O.name,M=O.unique,D=O.multiEntry,O=O.keyPath,F={name:F,compound:f(O),keyPath:O,unique:M,multiEntry:D,extractKey:Wi(O)};return x[kr(O)]=F}),getIndexByKeyPath:function(A){return x[kr(A)]}};return x[":id"]=I.primaryKey,k!=null&&(x[kr(k)]=I.primaryKey),I})},hasGetAll:0<m.length&&"getAll"in w&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in w},m=h.schema,v=h.hasGetAll,S=h.hasIdb3Features,w=m.tables.map(c),y={};return w.forEach(function(_){return y[_.name]=_}),{stack:"dbcore",transaction:r.transaction.bind(r),table:function(_){if(y[_])return y[_];throw new Error("Table '".concat(_,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Ir(n),schema:m}}function Go(r,n,o,s){return o=o.IDBKeyRange,n=Uo(n,o,s),{dbcore:r.dbcore.reduce(function(c,u){return u=u.create,a(a({},c),u(c))},n)}}function ri(r,n){var o=n.db,o=Go(r._middlewares,o,r._deps,n);r.core=o.dbcore,r.tables.forEach(function(s){var c=s.name;r.core.schema.tables.some(function(u){return u.name===c})&&(s.core=r.core.table(c),r[c]instanceof r.Table)&&(r[c].core=s.core)})}function ii(r,n,o,s){o.forEach(function(c){var u=s[c];n.forEach(function(h){var m=(function v(S,w){return Ie(S,w)||(S=P(S))&&v(S,w)})(h,c);(!m||"value"in m&&m.value===void 0)&&(h===r.Transaction.prototype||h instanceof r.Transaction?H(h,c,{get:function(){return this.table(c)},set:function(v){ie(this,c,{value:v,writable:!0,configurable:!0,enumerable:!0})}}):h[c]=new r.Table(c,u))})})}function Qi(r,n){n.forEach(function(o){for(var s in o)o[s]instanceof r.Table&&delete o[s]})}function Ho(r,n){return r._cfg.version-n._cfg.version}function Vo(r,n,o,s){var c=r._dbSchema,u=(o.objectStoreNames.contains("$meta")&&!c.$meta&&(c.$meta=Vi("$meta",fa("")[0],[]),r._storeNames.push("$meta")),r._createTransaction("readwrite",r._storeNames,c)),h=(u.create(o),u._completion.catch(s),u._reject.bind(u)),m=W.transless||W;ft(function(){if(W.trans=u,W.transless=m,n!==0)return ri(r,o),S=n,((v=u).storeNames.includes("$meta")?v.table("$meta").get("version").then(function(w){return w??S}):L.resolve(S)).then(function(I){var y=r,_=I,k=u,$=o,x=[],I=y._versions,A=y._dbSchema=ai(0,y.idbdb,$);return(I=I.filter(function(M){return M._cfg.version>=_})).length===0?L.resolve():(I.forEach(function(M){x.push(function(){var D,O,F,q=A,R=M._cfg.dbschema,K=(oi(y,q,$),oi(y,R,$),A=y._dbSchema=R,Yi(q,R)),z=(K.add.forEach(function(B){Xi($,B[0],B[1].primKey,B[1].indexes)}),K.change.forEach(function(B){if(B.recreate)throw new Q.Upgrade("Not yet support for changing primary key");var T=$.objectStore(B.name);B.add.forEach(function(Y){return ni(T,Y)}),B.change.forEach(function(Y){T.deleteIndex(Y.name),ni(T,Y)}),B.del.forEach(function(Y){return T.deleteIndex(Y)})}),M._cfg.contentUpgrade);if(z&&M._cfg.version>_)return ri(y,$),k._memoizedTables={},D=hr(R),K.del.forEach(function(B){D[B]=q[B]}),Qi(y,[y.Transaction.prototype]),ii(y,[y.Transaction.prototype],p(D),D),k.schema=D,(O=Ai(z))&&Xt(),R=L.follow(function(){var B;(F=z(k))&&O&&(B=gt.bind(null,null),F.then(B,B))}),F&&typeof F.then=="function"?L.resolve(F):R.then(function(){return F})}),x.push(function(D){var O,F,q=M._cfg.dbschema;O=q,F=D,[].slice.call(F.db.objectStoreNames).forEach(function(R){return O[R]==null&&F.db.deleteObjectStore(R)}),Qi(y,[y.Transaction.prototype]),ii(y,[y.Transaction.prototype],y._storeNames,y._dbSchema),k.schema=y._dbSchema}),x.push(function(D){y.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(y.idbdb.version/10)===M._cfg.version?(y.idbdb.deleteObjectStore("$meta"),delete y._dbSchema.$meta,y._storeNames=y._storeNames.filter(function(O){return O!=="$meta"})):D.objectStore("$meta").put(M._cfg.version,"version"))})}),(function M(){return x.length?L.resolve(x.shift()(k.idbtrans)).then(M):L.resolve()})().then(function(){ma(A,$)}))}).catch(h);var v,S;p(c).forEach(function(w){Xi(o,w,c[w].primKey,c[w].indexes)}),ri(r,o),L.follow(function(){return r.on.populate.fire(u)}).catch(h)})}function Wo(r,n){ma(r._dbSchema,n),n.db.version%10!=0||n.objectStoreNames.contains("$meta")||n.db.createObjectStore("$meta").add(Math.ceil(n.db.version/10-1),"version");var o=ai(0,r.idbdb,n);oi(r,r._dbSchema,n);for(var s=0,c=Yi(o,r._dbSchema).change;s<c.length;s++){var u=(h=>{if(h.change.length||h.recreate)return console.warn("Unable to patch indexes of table ".concat(h.name," because it has changes on the type of index or primary key.")),{value:void 0};var m=n.objectStore(h.name);h.add.forEach(function(v){it&&console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name,".").concat(v.src)),ni(m,v)})})(c[s]);if(typeof u=="object")return u.value}}function Yi(r,n){var o,s={del:[],add:[],change:[]};for(o in r)n[o]||s.del.push(o);for(o in n){var c=r[o],u=n[o];if(c){var h={name:o,def:u,recreate:!1,del:[],add:[],change:[]};if(""+(c.primKey.keyPath||"")!=""+(u.primKey.keyPath||"")||c.primKey.auto!==u.primKey.auto)h.recreate=!0,s.change.push(h);else{var m=c.idxByName,v=u.idxByName,S=void 0;for(S in m)v[S]||h.del.push(S);for(S in v){var w=m[S],y=v[S];w?w.src!==y.src&&h.change.push(y):h.add.push(y)}(0<h.del.length||0<h.add.length||0<h.change.length)&&s.change.push(h)}}else s.add.push([o,u])}return s}function Xi(r,n,o,s){var c=r.db.createObjectStore(n,o.keyPath?{keyPath:o.keyPath,autoIncrement:o.auto}:{autoIncrement:o.auto});s.forEach(function(u){return ni(c,u)})}function ma(r,n){p(r).forEach(function(o){n.db.objectStoreNames.contains(o)||(it&&console.debug("Dexie: Creating missing table",o),Xi(n,o,r[o].primKey,r[o].indexes))})}function ni(r,n){r.createIndex(n.name,n.keyPath,{unique:n.unique,multiEntry:n.multi})}function ai(r,n,o){var s={};return Te(n.objectStoreNames,0).forEach(function(c){for(var u=o.objectStore(c),h=Hi(pa(S=u.keyPath),S||"",!0,!1,!!u.autoIncrement,S&&typeof S!="string",!0),m=[],v=0;v<u.indexNames.length;++v){var w=u.index(u.indexNames[v]),S=w.keyPath,w=Hi(w.name,S,!!w.unique,!!w.multiEntry,!1,S&&typeof S!="string",!1);m.push(w)}s[c]=Vi(c,h,m)}),s}function oi(r,n,o){for(var s=o.db.objectStoreNames,c=0;c<s.length;++c){var u=s[c],h=o.objectStore(u);r._hasGetAll="getAll"in h;for(var m=0;m<h.indexNames.length;++m){var v,S=h.indexNames[m],w=h.index(S).keyPath,w=typeof w=="string"?w:"["+Te(w).join("+")+"]";n[u]&&(v=n[u].idxByName[w])&&(v.name=S,delete n[u].idxByName[w],n[u].idxByName[S]=v)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&d.WorkerGlobalScope&&d instanceof d.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(r._hasGetAll=!1)}function fa(r){return r.split(",").map(function(n,o){var c=n.split(":"),s=(s=c[1])==null?void 0:s.trim(),c=(n=c[0].trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(c)?c.match(/^\[(.*)\]$/)[1].split("+"):c;return Hi(c,u||null,/\&/.test(n),/\*/.test(n),/\+\+/.test(n),f(u),o===0,s)})}er.prototype._createTableSchema=Vi,er.prototype._parseIndexSyntax=fa,er.prototype._parseStoresSpec=function(r,n){var o=this;p(r).forEach(function(s){if(r[s]!==null){var c=o._parseIndexSyntax(r[s]),u=c.shift();if(!u)throw new Q.Schema("Invalid schema for table "+s+": "+r[s]);if(u.unique=!0,u.multi)throw new Q.Schema("Primary key cannot be multiEntry*");c.forEach(function(h){if(h.auto)throw new Q.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new Q.Schema("Index must have a name and cannot be an empty string")}),u=o._createTableSchema(s,u,c),n[s]=u}})},er.prototype.stores=function(o){var n=this.db,o=(this._cfg.storesSource=this._cfg.storesSource?E(this._cfg.storesSource,o):o,n._versions),s={},c={};return o.forEach(function(u){E(s,u._cfg.storesSource),c=u._cfg.dbschema={},u._parseStoresSpec(s,c)}),n._dbSchema=c,Qi(n,[n._allTables,n,n.Transaction.prototype]),ii(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],p(c),c),n._storeNames=p(c),this},er.prototype.upgrade=function(r){return this._cfg.contentUpgrade=Pi(this._cfg.contentUpgrade||ue,r),this};var Qo=er;function er(){}var Er=(()=>{var r,n,o;return typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"?(r=new Set,n=new FinalizationRegistry(function(s){r.delete(s)}),{toArray:function(){return Array.from(r).map(function(s){return s.deref()}).filter(function(s){return s!==void 0})},add:function(s){var c=new WeakRef(s._novip);r.add(c),n.register(s._novip,c,c),r.size>s._options.maxConnections&&(c=r.values().next().value,r.delete(c),n.unregister(c))},remove:function(s){if(s)for(var c=r.values(),u=c.next();!u.done;){var h=u.value;if(h.deref()===s._novip)return r.delete(h),void n.unregister(h);u=c.next()}}}):(o=[],{toArray:function(){return o},add:function(s){o.push(s._novip)},remove:function(s){s&&(s=o.indexOf(s._novip))!==-1&&o.splice(s,1)}})})();function Ji(r,n){var o=r._dbNamesDB;return o||(o=r._dbNamesDB=new ut(Qr,{addons:[],indexedDB:r,IDBKeyRange:n})).version(1).stores({dbnames:"name"}),o.table("dbnames")}function Zi(r){return r&&typeof r.databases=="function"}function en(r){return ft(function(){return W.letThrough=!0,r()})}function tn(r){return!("from"in r)}var De=function(r,n){var o;if(!this)return o=new De,r&&"d"in r&&E(o,r),o;E(this,arguments.length?{d:1,from:r,to:1<arguments.length?n:r}:{d:0})};function Sr(r,n,o){var s=ae(n,o);if(!isNaN(s)){if(0<s)throw RangeError();if(tn(r))return E(r,{from:n,to:o,d:1});var s=r.l,c=r.r;if(ae(o,r.from)<0)return s?Sr(s,n,o):r.l={from:n,to:o,d:1,l:null,r:null},ya(r);if(0<ae(n,r.to))return c?Sr(c,n,o):r.r={from:n,to:o,d:1,l:null,r:null},ya(r);ae(n,r.from)<0&&(r.from=n,r.l=null,r.d=c?c.d+1:1),0<ae(o,r.to)&&(r.to=o,r.r=null,r.d=r.l?r.l.d+1:1),n=!r.r,s&&!r.l&&Cr(r,s),c&&n&&Cr(r,c)}}function Cr(r,n){tn(n)||(function o(s,c){var u=c.from,h=c.l,m=c.r;Sr(s,u,c.to),h&&o(s,h),m&&o(s,m)})(r,n)}function ga(r,n){var o=si(n),s=o.next();if(!s.done)for(var c=s.value,u=si(r),h=u.next(c.from),m=h.value;!s.done&&!h.done;){if(ae(m.from,c.to)<=0&&0<=ae(m.to,c.from))return!0;ae(c.from,m.from)<0?c=(s=o.next(m.from)).value:m=(h=u.next(c.from)).value}return!1}function si(r){var n=tn(r)?null:{s:0,n:r};return{next:function(o){for(var s=0<arguments.length;n;)switch(n.s){case 0:if(n.s=1,s)for(;n.n.l&&ae(o,n.n.from)<0;)n={up:n,n:n.n.l,s:1};else for(;n.n.l;)n={up:n,n:n.n.l,s:1};case 1:if(n.s=2,!s||ae(o,n.n.to)<=0)return{value:n.n,done:!1};case 2:if(n.n.r){n.s=3,n={up:n,n:n.n.r,s:0};continue}case 3:n=n.up}return{done:!0}}}}function ya(r){var n,o,s,c=(((c=r.r)==null?void 0:c.d)||0)-(((c=r.l)==null?void 0:c.d)||0),c=1<c?"r":c<-1?"l":"";c&&(n=c=="r"?"l":"r",o=a({},r),s=r[c],r.from=s.from,r.to=s.to,r[c]=s[c],o[c]=s[n],(r[n]=o).d=ba(o)),r.d=ba(r)}function ba(o){var n=o.r,o=o.l;return(n?o?Math.max(n.d,o.d):n.d:o?o.d:0)+1}function li(r,n){return p(n).forEach(function(o){r[o]?Cr(r[o],n[o]):r[o]=(function s(c){var u,h,m={};for(u in c)N(c,u)&&(h=c[u],m[u]=!h||typeof h!="object"||me.has(h.constructor)?h:s(h));return m})(n[o])}),r}function rn(r,n){return r.all||n.all||Object.keys(r).some(function(o){return n[o]&&ga(n[o],r[o])})}V(De.prototype,((Be={add:function(r){return Cr(this,r),this},addKey:function(r){return Sr(this,r,r),this},addKeys:function(r){var n=this;return r.forEach(function(o){return Sr(n,o,o)}),this},hasKey:function(r){var n=si(this).next(r).value;return n&&ae(n.from,r)<=0&&0<=ae(n.to,r)}})[Mi]=function(){return si(this)},Be));var Tt={},nn={},an=!1;function ci(r){li(nn,r),an||(an=!0,setTimeout(function(){an=!1,on(nn,!(nn={}))},0))}function on(r,n){n===void 0&&(n=!1);var o=new Set;if(r.all)for(var s=0,c=Object.values(Tt);s<c.length;s++)va(m=c[s],r,o,n);else for(var u in r){var h,m,u=/^idb\:\/\/(.*)\/(.*)\//.exec(u);u&&(h=u[1],u=u[2],m=Tt["idb://".concat(h,"/").concat(u)])&&va(m,r,o,n)}o.forEach(function(v){return v()})}function va(r,n,o,s){for(var c=[],u=0,h=Object.entries(r.queries.query);u<h.length;u++){for(var m=h[u],v=m[0],S=[],w=0,y=m[1];w<y.length;w++){var _=y[w];rn(n,_.obsSet)?_.subscribers.forEach(function(I){return o.add(I)}):s&&S.push(_)}s&&c.push([v,S])}if(s)for(var k=0,$=c;k<$.length;k++){var x=$[k],v=x[0],S=x[1];r.queries.query[v]=S}}function Yo(r){var n=r._state,o=r._deps.indexedDB;if(n.isBeingOpened||r.idbdb)return n.dbReadyPromise.then(function(){return n.dbOpenError?_e(n.dbOpenError):r});n.isBeingOpened=!0,n.dbOpenError=null,n.openComplete=!1;var s=n.openCanceller,c=Math.round(10*r.verno),u=!1;function h(){if(n.openCanceller!==s)throw new Q.DatabaseClosed("db.open() was cancelled")}function m(){return new L(function(_,k){if(h(),!o)throw new Q.MissingAPI;var $=r.name,x=n.autoSchema||!c?o.open($):o.open($,c);if(!x)throw new Q.MissingAPI;x.onerror=Qe(k),x.onblocked=ge(r._fireOnBlocked),x.onupgradeneeded=ge(function(I){var A;w=x.transaction,n.autoSchema&&!r._options.allowEmptyDB?(x.onerror=$r,w.abort(),x.result.close(),(A=o.deleteDatabase($)).onsuccess=A.onerror=ge(function(){k(new Q.NoSuchDatabase("Database ".concat($," doesnt exist")))})):(w.onerror=Qe(k),A=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,y=A<1,r.idbdb=x.result,u&&Wo(r,w),Vo(r,A/10,w,k))},k),x.onsuccess=ge(function(){w=null;var I,A,M,D,O,F,q=r.idbdb=x.result,R=Te(q.objectStoreNames);if(0<R.length)try{var K=q.transaction((O=R).length===1?O[0]:O,"readonly");if(n.autoSchema)F=q,D=K,(M=r).verno=F.version/10,D=M._dbSchema=ai(0,F,D),M._storeNames=Te(F.objectStoreNames,0),ii(M,[M._allTables],p(D),D);else if(oi(r,r._dbSchema,K),A=K,((A=Yi(ai(0,(I=r).idbdb,A),I._dbSchema)).add.length||A.change.some(function(z){return z.add.length||z.change.length}))&&!u)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),q.close(),c=q.version+1,u=!0,_(m());ri(r,K)}catch{}Er.add(r),q.onversionchange=ge(function(z){n.vcFired=!0,r.on("versionchange").fire(z)}),q.onclose=ge(function(){r.close({disableAutoOpen:!1})}),y&&(R=r._deps,O=$,Zi(F=R.indexedDB)||O===Qr||Ji(F,R.IDBKeyRange).put({name:O}).catch(ue)),_()},k)}).catch(function(_){switch(_==null?void 0:_.name){case"UnknownError":if(0<n.PR1398_maxLoop)return n.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),m();break;case"VersionError":if(0<c)return c=0,m()}return L.reject(_)})}var v,S=n.dbReadyResolve,w=null,y=!1;return L.race([s,(typeof navigator>"u"?L.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(_){function k(){return indexedDB.databases().finally(_)}v=setInterval(k,100),k()}).finally(function(){return clearInterval(v)}):Promise.resolve()).then(m)]).then(function(){return h(),n.onReadyBeingFired=[],L.resolve(en(function(){return r.on.ready.fire(r.vip)})).then(function _(){var k;if(0<n.onReadyBeingFired.length)return k=n.onReadyBeingFired.reduce(Pi,ue),n.onReadyBeingFired=[],L.resolve(en(function(){return k(r.vip)})).then(_)})}).finally(function(){n.openCanceller===s&&(n.onReadyBeingFired=null,n.isBeingOpened=!1)}).catch(function(_){n.dbOpenError=_;try{w&&w.abort()}catch{}return s===n.openCanceller&&r._close(),_e(_)}).finally(function(){n.openComplete=!0,S()}).then(function(){var _;return y&&(_={},r.tables.forEach(function(k){k.schema.indexes.forEach(function($){$.name&&(_["idb://".concat(r.name,"/").concat(k.name,"/").concat($.name)]=new De(-1/0,[[[]]]))}),_["idb://".concat(r.name,"/").concat(k.name,"/")]=_["idb://".concat(r.name,"/").concat(k.name,"/:dels")]=new De(-1/0,[[[]]])}),vt(ti).fire(_),on(_,!0)),r})}function sn(r){function n(u){return r.next(u)}var o=c(n),s=c(function(u){return r.throw(u)});function c(u){return function(m){var m=u(m),v=m.value;return m.done?v:v&&typeof v.then=="function"?v.then(o,s):f(v)?Promise.all(v).then(o,s):o(v)}}return c(n)()}function di(r,n,o){for(var s=f(r)?r.slice():[r],c=0;c<o;++c)s.push(n);return s}var Xo={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(r){return a(a({},r),{table:function(s){var o=r.table(s),s=o.schema,c={},u=[];function h(_,k,$){var M=kr(_),x=c[M]=c[M]||[],I=_==null?0:typeof _=="string"?1:_.length,A=0<k,M=a(a({},$),{name:A?"".concat(M,"(virtual-from:").concat($.name,")"):$.name,lowLevelIndex:$,isVirtual:A,keyTail:k,keyLength:I,extractKey:Wi(_),unique:!A&&$.unique});return x.push(M),M.isPrimaryKey||u.push(M),1<I&&h(I===2?_[0]:_.slice(0,I-1),k+1,$),x.sort(function(D,O){return D.keyTail-O.keyTail}),M}var m=h(s.primaryKey.keyPath,0,s.primaryKey);c[":id"]=[m];for(var v=0,S=s.indexes;v<S.length;v++){var w=S[v];h(w.keyPath,0,w)}function y(_){var k,$=_.query.index;return $.isVirtual?a(a({},_),{query:{index:$.lowLevelIndex,range:(k=_.query.range,$=$.keyTail,{type:k.type===1?2:k.type,lower:di(k.lower,k.lowerOpen?r.MAX_KEY:r.MIN_KEY,$),lowerOpen:!0,upper:di(k.upper,k.upperOpen?r.MIN_KEY:r.MAX_KEY,$),upperOpen:!0})}}):_}return a(a({},o),{schema:a(a({},s),{primaryKey:m,indexes:u,getIndexByKeyPath:function(_){return(_=c[kr(_)])&&_[0]}}),count:function(_){return o.count(y(_))},query:function(_){return o.query(y(_))},openCursor:function(_){var k=_.query.index,$=k.keyTail,x=k.keyLength;return k.isVirtual?o.openCursor(y(_)).then(function(A){return A&&I(A)}):o.openCursor(_);function I(A){return Object.create(A,{continue:{value:function(M){M!=null?A.continue(di(M,_.reverse?r.MAX_KEY:r.MIN_KEY,$)):_.unique?A.continue(A.key.slice(0,x).concat(_.reverse?r.MIN_KEY:r.MAX_KEY,$)):A.continue()}},continuePrimaryKey:{value:function(M,D){A.continuePrimaryKey(di(M,r.MAX_KEY,$),D)}},primaryKey:{get:function(){return A.primaryKey}},key:{get:function(){var M=A.key;return x===1?M[0]:M.slice(0,x)}},value:{get:function(){return A.value}}})}}})}})}};function ln(r,n,o,s){return o=o||{},s=s||"",p(r).forEach(function(c){var u,h,m;N(n,c)?(u=r[c],h=n[c],typeof u=="object"&&typeof h=="object"&&u&&h?(m=Gt(u))!==Gt(h)?o[s+c]=n[c]:m==="Object"?ln(u,h,o,s+c+"."):u!==h&&(o[s+c]=n[c]):u!==h&&(o[s+c]=n[c])):o[s+c]=void 0}),p(n).forEach(function(c){N(r,c)||(o[s+c]=n[c])}),o}function cn(r,n){return n.type==="delete"?n.keys:n.keys||n.values.map(r.extractKey)}var Jo={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(r){return a(a({},r),{table:function(n){var o=r.table(n),s=o.schema.primaryKey;return a(a({},o),{mutate:function(c){var u=W.trans,h=u.table(n).hook,m=h.deleting,v=h.creating,S=h.updating;switch(c.type){case"add":if(v.fire===ue)break;return u._promise("readwrite",function(){return w(c)},!0);case"put":if(v.fire===ue&&S.fire===ue)break;return u._promise("readwrite",function(){return w(c)},!0);case"delete":if(m.fire===ue)break;return u._promise("readwrite",function(){return w(c)},!0);case"deleteRange":if(m.fire===ue)break;return u._promise("readwrite",function(){return(function y(_,k,$){return o.query({trans:_,values:!1,query:{index:s,range:k},limit:$}).then(function(x){var I=x.result;return w({type:"delete",keys:I,trans:_}).then(function(A){return 0<A.numFailures?Promise.reject(A.failures[0]):I.length<$?{failures:[],numFailures:0,lastResult:void 0}:y(_,a(a({},k),{lower:I[I.length-1],lowerOpen:!0}),$)})})})(c.trans,c.range,1e4)},!0)}return o.mutate(c);function w(y){var _,k,$,x=W.trans,I=y.keys||cn(s,y);if(I)return(y=y.type==="add"||y.type==="put"?a(a({},y),{keys:I}):a({},y)).type!=="delete"&&(y.values=l([],y.values)),y.keys&&(y.keys=l([],y.keys)),_=o,$=I,((k=y).type==="add"?Promise.resolve([]):_.getMany({trans:k.trans,keys:$,cache:"immutable"})).then(function(A){var M=I.map(function(D,O){var F,q,R,K=A[O],z={onerror:null,onsuccess:null};return y.type==="delete"?m.fire.call(z,D,K,x):y.type==="add"||K===void 0?(F=v.fire.call(z,D,y.values[O],x),D==null&&F!=null&&(y.keys[O]=D=F,s.outbound||$e(y.values[O],s.keyPath,D))):(F=ln(K,y.values[O]),(q=S.fire.call(z,F,D,K,x))&&(R=y.values[O],Object.keys(q).forEach(function(B){N(R,B)?R[B]=q[B]:$e(R,B,q[B])}))),z});return o.mutate(y).then(function(D){for(var O=D.failures,F=D.results,q=D.numFailures,D=D.lastResult,R=0;R<I.length;++R){var K=(F||I)[R],z=M[R];K==null?z.onerror&&z.onerror(O[R]):z.onsuccess&&z.onsuccess(y.type==="put"&&A[R]?y.values[R]:K)}return{failures:O,results:F,numFailures:q,lastResult:D}}).catch(function(D){return M.forEach(function(O){return O.onerror&&O.onerror(D)}),Promise.reject(D)})});throw new Error("Keys missing")}}})}})}};function _a(r,n,o){try{if(!n||n.keys.length<r.length)return null;for(var s=[],c=0,u=0;c<n.keys.length&&u<r.length;++c)ae(n.keys[c],r[u])===0&&(s.push(o?oe(n.values[c]):n.values[c]),++u);return s.length===r.length?s:null}catch{return null}}var Zo={stack:"dbcore",level:-1,create:function(r){return{table:function(n){var o=r.table(n);return a(a({},o),{getMany:function(s){var c;return s.cache?(c=_a(s.keys,s.trans._cache,s.cache==="clone"))?L.resolve(c):o.getMany(s).then(function(u){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?oe(u):u},u}):o.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),o.mutate(s)}})}}}};function wa(r,n){return r.trans.mode==="readonly"&&!!r.subscr&&!r.trans.explicit&&r.trans.db._options.cache!=="disabled"&&!n.schema.primaryKey.outbound}function xa(r,n){switch(r){case"query":return n.values&&!n.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var es={stack:"dbcore",level:0,name:"Observability",create:function(r){var n=r.schema.name,o=new De(r.MIN_KEY,r.MAX_KEY);return a(a({},r),{transaction:function(s,c,u){if(W.subscr&&c!=="readonly")throw new Q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(W.querier));return r.transaction(s,c,u)},table:function(s){function c(I){var x,I=I.query;return[x=I.index,new De((x=(I=I.range).lower)!=null?x:r.MIN_KEY,(x=I.upper)!=null?x:r.MAX_KEY)]}var u=r.table(s),h=u.schema,m=h.primaryKey,v=h.indexes,S=m.extractKey,w=m.outbound,y=m.autoIncrement&&v.filter(function($){return $.compound&&$.keyPath.includes(m.keyPath)}),_=a(a({},u),{mutate:function($){function x(T){return T="idb://".concat(n,"/").concat(s,"/").concat(T),O[T]||(O[T]=new De)}var I,A,M,D=$.trans,O=$.mutatedParts||($.mutatedParts={}),F=x(""),q=x(":dels"),R=$.type,z=$.type==="deleteRange"?[$.range]:$.type==="delete"?[$.keys]:$.values.length<50?[cn(m,$).filter(function(T){return T}),$.values]:[],K=z[0],z=z[1],B=$.trans._cache;return f(K)?(F.addKeys(K),(R=R==="delete"||K.length===z.length?_a(K,B):null)||q.addKeys(K),(R||z)&&(I=x,A=R,M=z,h.indexes.forEach(function(T){var Y=I(T.name||"");function X(ne){return ne!=null?T.extractKey(ne):null}function te(ne){T.multiEntry&&f(ne)?ne.forEach(function(Ge){return Y.addKey(Ge)}):Y.addKey(ne)}(A||M).forEach(function(ne,Pe){var ee=A&&X(A[Pe]),Pe=M&&X(M[Pe]);ae(ee,Pe)!==0&&(ee!=null&&te(ee),Pe!=null)&&te(Pe)})}))):K?(z={from:(B=K.lower)!=null?B:r.MIN_KEY,to:(R=K.upper)!=null?R:r.MAX_KEY},q.add(z),F.add(z)):(F.add(o),q.add(o),h.indexes.forEach(function(T){return x(T.name).add(o)})),u.mutate($).then(function(T){return!K||$.type!=="add"&&$.type!=="put"||(F.addKeys(T.results),y&&y.forEach(function(Y){for(var X=$.values.map(function(ee){return Y.extractKey(ee)}),te=Y.keyPath.findIndex(function(ee){return ee===m.keyPath}),ne=0,Ge=T.results.length;ne<Ge;++ne)X[ne][te]=T.results[ne];x(Y.name).addKeys(X)})),D.mutatedParts=li(D.mutatedParts||{},O),T})}}),k={get:function($){return[m,new De($.key)]},getMany:function($){return[m,new De().addKeys($.keys)]},count:c,query:c,openCursor:c};return p(k).forEach(function($){_[$]=function(x){var I=W.subscr,A=!!I,M=wa(W,u)&&xa($,x)?x.obsSet={}:I;if(A){var D,I=function(z){return z="idb://".concat(n,"/").concat(s,"/").concat(z),M[z]||(M[z]=new De)},O=I(""),F=I(":dels"),A=k[$](x),q=A[0],A=A[1];if(($==="query"&&q.isPrimaryKey&&!x.values?F:I(q.name||"")).add(A),!q.isPrimaryKey){if($!=="count")return D=$==="query"&&w&&x.values&&u.query(a(a({},x),{values:!1})),u[$].apply(this,arguments).then(function(z){if($==="query"){if(w&&x.values)return D.then(function(X){return X=X.result,O.addKeys(X),z});var B=x.values?z.result.map(S):z.result;(x.values?O:F).addKeys(B)}else{var T,Y;if($==="openCursor")return Y=x.values,(T=z)&&Object.create(T,{key:{get:function(){return F.addKey(T.primaryKey),T.key}},primaryKey:{get:function(){var X=T.primaryKey;return F.addKey(X),X}},value:{get:function(){return Y&&O.addKey(T.primaryKey),T.value}}})}return z});F.add(o)}}return u[$].apply(this,arguments)}}),_}})}};function $a(r,n,o){var s;return o.numFailures===0?n:n.type==="deleteRange"||(s=n.keys?n.keys.length:"values"in n&&n.values?n.values.length:1,o.numFailures===s)?null:(s=a({},n),f(s.keys)&&(s.keys=s.keys.filter(function(c,u){return!(u in o.failures)})),"values"in s&&f(s.values)&&(s.values=s.values.filter(function(c,u){return!(u in o.failures)})),s)}function dn(r,n){return o=r,((s=n).lower===void 0||(s.lowerOpen?0<ae(o,s.lower):0<=ae(o,s.lower)))&&(o=r,(s=n).upper===void 0||(s.upperOpen?ae(o,s.upper)<0:ae(o,s.upper)<=0));var o,s}function Ia(r,n,o,s,c,u){var h,m,v,S,w,y,_;return!o||o.length===0||(h=n.query.index,m=h.multiEntry,v=n.query.range,S=s.schema.primaryKey.extractKey,w=h.extractKey,y=(h.lowLevelIndex||h).extractKey,(s=o.reduce(function(k,$){var x=k,I=[];if($.type==="add"||$.type==="put")for(var A=new De,M=$.values.length-1;0<=M;--M){var D,O=$.values[M],F=S(O);!A.hasKey(F)&&(D=w(O),m&&f(D)?D.some(function(B){return dn(B,v)}):dn(D,v))&&(A.addKey(F),I.push(O))}switch($.type){case"add":var q=new De().addKeys(n.values?k.map(function(T){return S(T)}):k),x=k.concat(n.values?I.filter(function(T){return T=S(T),!q.hasKey(T)&&(q.addKey(T),!0)}):I.map(function(T){return S(T)}).filter(function(T){return!q.hasKey(T)&&(q.addKey(T),!0)}));break;case"put":var R=new De().addKeys($.values.map(function(T){return S(T)}));x=k.filter(function(T){return!R.hasKey(n.values?S(T):T)}).concat(n.values?I:I.map(function(T){return S(T)}));break;case"delete":var K=new De().addKeys($.keys);x=k.filter(function(T){return!K.hasKey(n.values?S(T):T)});break;case"deleteRange":var z=$.range;x=k.filter(function(T){return!dn(S(T),z)})}return x},r))===r)?r:(_=function(k,$){return ae(y(k),y($))||ae(S(k),S($))},s.sort(n.direction==="prev"||n.direction==="prevunique"?function(k,$){return _($,k)}:_),n.limit&&n.limit<1/0&&(s.length>n.limit?s.length=n.limit:r.length===n.limit&&s.length<n.limit&&(c.dirty=!0)),u?Object.freeze(s):s)}function ka(r,n){return ae(r.lower,n.lower)===0&&ae(r.upper,n.upper)===0&&!!r.lowerOpen==!!n.lowerOpen&&!!r.upperOpen==!!n.upperOpen}function ts(r,n){return((o,s,c,u)=>{if(o===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((o=ae(o,s))===0){if(c&&u)return 0;if(c)return 1;if(u)return-1}return o})(r.lower,n.lower,r.lowerOpen,n.lowerOpen)<=0&&0<=((o,s,c,u)=>{if(o===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((o=ae(o,s))===0){if(c&&u)return 0;if(c)return-1;if(u)return 1}return o})(r.upper,n.upper,r.upperOpen,n.upperOpen)}function rs(r,n,o,s){r.subscribers.add(o),s.addEventListener("abort",function(){var c,u;r.subscribers.delete(o),r.subscribers.size===0&&(c=r,u=n,setTimeout(function(){c.subscribers.size===0&&Et(u,c)},3e3))})}var is={stack:"dbcore",level:0,name:"Cache",create:function(r){var n=r.schema.name;return a(a({},r),{transaction:function(o,s,c){var u,h,m=r.transaction(o,s,c);return s==="readwrite"&&(c=(u=new AbortController).signal,m.addEventListener("abort",(h=function(v){return function(){if(u.abort(),s==="readwrite"){for(var S=new Set,w=0,y=o;w<y.length;w++){var _=y[w],k=Tt["idb://".concat(n,"/").concat(_)];if(k){var $=r.table(_),x=k.optimisticOps.filter(function(T){return T.trans===m});if(m._explicit&&v&&m.mutatedParts)for(var I=0,A=Object.values(k.queries.query);I<A.length;I++)for(var M=0,D=(q=A[I]).slice();M<D.length;M++)rn((R=D[M]).obsSet,m.mutatedParts)&&(Et(q,R),R.subscribers.forEach(function(T){return S.add(T)}));else if(0<x.length){k.optimisticOps=k.optimisticOps.filter(function(T){return T.trans!==m});for(var O=0,F=Object.values(k.queries.query);O<F.length;O++)for(var q,R,K,z=0,B=(q=F[O]).slice();z<B.length;z++)(R=B[z]).res!=null&&m.mutatedParts&&(v&&!R.dirty?(K=Object.isFrozen(R.res),K=Ia(R.res,R.req,x,$,R,K),R.dirty?(Et(q,R),R.subscribers.forEach(function(T){return S.add(T)})):K!==R.res&&(R.res=K,R.promise=L.resolve({result:K}))):(R.dirty&&Et(q,R),R.subscribers.forEach(function(T){return S.add(T)})))}}}S.forEach(function(T){return T()})}}})(!1),{signal:c}),m.addEventListener("error",h(!1),{signal:c}),m.addEventListener("complete",h(!0),{signal:c})),m},table:function(o){var s=r.table(o),c=s.schema.primaryKey;return a(a({},s),{mutate:function(u){var h,m=W.trans;return!c.outbound&&m.db._options.cache!=="disabled"&&!m.explicit&&m.idbtrans.mode==="readwrite"&&(h=Tt["idb://".concat(n,"/").concat(o)])?(m=s.mutate(u),u.type!=="add"&&u.type!=="put"||!(50<=u.values.length||cn(c,u).some(function(v){return v==null}))?(h.optimisticOps.push(u),u.mutatedParts&&ci(u.mutatedParts),m.then(function(v){0<v.numFailures&&(Et(h.optimisticOps,u),(v=$a(0,u,v))&&h.optimisticOps.push(v),u.mutatedParts)&&ci(u.mutatedParts)}),m.catch(function(){Et(h.optimisticOps,u),u.mutatedParts&&ci(u.mutatedParts)})):m.then(function(v){var S=$a(0,a(a({},u),{values:u.values.map(function(w,y){var _;return v.failures[y]?w:($e(_=(_=c.keyPath)!=null&&_.includes(".")?oe(w):a({},w),c.keyPath,v.results[y]),_)})}),v);h.optimisticOps.push(S),queueMicrotask(function(){return u.mutatedParts&&ci(u.mutatedParts)})}),m):s.mutate(u)},query:function(u){var h,m,v,S,w,y,_;return wa(W,s)&&xa("query",u)?(h=((v=W.trans)==null?void 0:v.db._options.cache)==="immutable",m=(v=W).requery,v=v.signal,y=((k,$,x,I)=>{var A=Tt["idb://".concat(k,"/").concat($)];if(!A)return[];if(!(k=A.queries[x]))return[null,!1,A,null];var M=k[(I.query?I.query.index.name:null)||""];if(!M)return[null,!1,A,null];switch(x){case"query":var D=(O=I.direction)!=null?O:"next",O=M.find(function(F){var q;return F.req.limit===I.limit&&F.req.values===I.values&&((q=F.req.direction)!=null?q:"next")===D&&ka(F.req.query.range,I.query.range)});return O?[O,!0,A,M]:[M.find(function(F){var q;return("limit"in F.req?F.req.limit:1/0)>=I.limit&&((q=F.req.direction)!=null?q:"next")===D&&(!I.values||F.req.values)&&ts(F.req.query.range,I.query.range)}),!1,A,M];case"count":return O=M.find(function(F){return ka(F.req.query.range,I.query.range)}),[O,!!O,A,M]}})(n,o,"query",u),_=y[0],S=y[2],w=y[3],_&&y[1]?_.obsSet=u.obsSet:(y=s.query(u).then(function(k){var $=k.result;if(_&&(_.res=$),h){for(var x=0,I=$.length;x<I;++x)Object.freeze($[x]);Object.freeze($)}return k}).catch(function(k){return w&&_&&Et(w,_),Promise.reject(k)}),_={obsSet:u.obsSet,promise:y,subscribers:new Set,type:"query",req:u,dirty:!1},w?w.push(_):(w=[_],(S=S||(Tt["idb://".concat(n,"/").concat(o)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[u.query.index.name||""]=w)),rs(_,w,m,v),_.promise.then(function(k){return k=Ia(k.result,u,S==null?void 0:S.optimisticOps,s,_,h),{result:h?k:oe(k)}})):s.query(u)}})}})}};function ui(r,n){return new Proxy(r,{get:function(o,s,c){return s==="db"?n:Reflect.get(o,s,c)}})}we.prototype.version=function(r){if(isNaN(r)||r<.1)throw new Q.Type("Given version is not a positive number");if(r=Math.round(10*r)/10,this.idbdb||this._state.isBeingOpened)throw new Q.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,r);var n=this._versions,o=n.filter(function(s){return s._cfg.version===r})[0];return o||(o=new this.Version(r),n.push(o),n.sort(Ho),o.stores({}),this._state.autoSchema=!1),o},we.prototype._whenReady=function(r){var n=this;return this.idbdb&&(this._state.openComplete||W.letThrough||this._vip)?r():new L(function(o,s){if(n._state.openComplete)return s(new Q.DatabaseClosed(n._state.dbOpenError));if(!n._state.isBeingOpened){if(!n._state.autoOpen)return void s(new Q.DatabaseClosed);n.open().catch(ue)}n._state.dbReadyPromise.then(o,s)}).then(r)},we.prototype.use=function(c){var n=c.stack,o=c.create,s=c.level,c=c.name,u=(c&&this.unuse({stack:n,name:c}),this._middlewares[n]||(this._middlewares[n]=[]));return u.push({stack:n,create:o,level:s??10,name:c}),u.sort(function(h,m){return h.level-m.level}),this},we.prototype.unuse=function(r){var n=r.stack,o=r.name,s=r.create;return n&&this._middlewares[n]&&(this._middlewares[n]=this._middlewares[n].filter(function(c){return s?c.create!==s:!!o&&c.name!==o})),this},we.prototype.open=function(){var r=this;return Dt(ct,function(){return Yo(r)})},we.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var r=this._state;if(Er.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}r.isBeingOpened||(r.dbReadyPromise=new L(function(n){r.dbReadyResolve=n}),r.openCanceller=new L(function(n,o){r.cancelOpen=o}))},we.prototype.close=function(n){var n=(n===void 0?{disableAutoOpen:!0}:n).disableAutoOpen,o=this._state;n?(o.isBeingOpened&&o.cancelOpen(new Q.DatabaseClosed),this._close(),o.autoOpen=!1,o.dbOpenError=new Q.DatabaseClosed):(this._close(),o.autoOpen=this._options.autoOpen||o.isBeingOpened,o.openComplete=!1,o.dbOpenError=null)},we.prototype.delete=function(r){var n=this,o=(r===void 0&&(r={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new L(function(c,u){function h(){n.close(r);var m=n._deps.indexedDB.deleteDatabase(n.name);m.onsuccess=ge(function(){var v,S,w;v=n._deps,S=n.name,Zi(w=v.indexedDB)||S===Qr||Ji(w,v.IDBKeyRange).delete(S).catch(ue),c()}),m.onerror=Qe(u),m.onblocked=n._fireOnBlocked}if(o)throw new Q.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(h):h()})},we.prototype.backendDB=function(){return this.idbdb},we.prototype.isOpen=function(){return this.idbdb!==null},we.prototype.hasBeenClosed=function(){var r=this._state.dbOpenError;return r&&r.name==="DatabaseClosed"},we.prototype.hasFailed=function(){return this._state.dbOpenError!==null},we.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(we.prototype,"tables",{get:function(){var r=this;return p(this._allTables).map(function(n){return r._allTables[n]})},enumerable:!1,configurable:!0}),we.prototype.transaction=function(){var r=(function(n,o,s){var c=arguments.length;if(c<2)throw new Q.InvalidArgument("Too few arguments");for(var u=new Array(c-1);--c;)u[c-1]=arguments[c];return s=u.pop(),[n,mr(u),s]}).apply(this,arguments);return this._transaction.apply(this,r)},we.prototype._transaction=function(r,n,o){var s,c,u=this,h=W.trans,m=(h&&h.db===this&&r.indexOf("!")===-1||(h=null),r.indexOf("?")!==-1);r=r.replace("!","").replace("?","");try{if(c=n.map(function(S){if(S=S instanceof u.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),r=="r"||r===ji)s=ji;else{if(r!="rw"&&r!=Ki)throw new Q.InvalidArgument("Invalid transaction mode: "+r);s=Ki}if(h){if(h.mode===ji&&s===Ki){if(!m)throw new Q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&c.forEach(function(S){if(h&&h.storeNames.indexOf(S)===-1){if(!m)throw new Q.SubTransaction("Table "+S+" not included in parent transaction.");h=null}}),m&&h&&!h.active&&(h=null)}}catch(S){return h?h._promise(null,function(w,y){y(S)}):_e(S)}var v=(function S(w,y,_,k,$){return L.resolve().then(function(){var M=W.transless||W,x=w._createTransaction(y,_,w._dbSchema,k),M=(x.explicit=!0,{trans:x,transless:M});if(k)x.idbtrans=k.idbtrans;else try{x.create(),x.idbtrans._explicit=!0,w._state.PR1398_maxLoop=3}catch(D){return D.name===Di.InvalidState&&w.isOpen()&&0<--w._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),w.close({disableAutoOpen:!1}),w.open().then(function(){return S(w,y,_,null,$)})):_e(D)}var I,A=Ai($),M=(A&&Xt(),L.follow(function(){var D;(I=$.call(x,x))&&(A?(D=gt.bind(null,null),I.then(D,D)):typeof I.next=="function"&&typeof I.throw=="function"&&(I=sn(I)))},M));return(I&&typeof I.then=="function"?L.resolve(I).then(function(D){return x.active?D:_e(new Q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):M.then(function(){return I})).then(function(D){return k&&x._resolve(),x._completion.then(function(){return D})}).catch(function(D){return x._reject(D),_e(D)})})}).bind(null,this,s,c,h,o);return h?h._promise(s,v,"lock"):W.trans?Dt(W.transless,function(){return u._whenReady(v)}):this._whenReady(v)},we.prototype.table=function(r){if(N(this._allTables,r))return this._allTables[r];throw new Q.InvalidTable("Table ".concat(r," does not exist"))};var ut=we;function we(r,n){var o,s,c,u,h,m=this,v=(this._middlewares={},this.verno=0,we.dependencies),v=(this._options=n=a({addons:we.addons,autoOpen:!0,indexedDB:v.indexedDB,IDBKeyRange:v.IDBKeyRange,cache:"cloned",maxConnections:1e3},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},n.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ue,dbReadyPromise:null,cancelOpen:ue,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen}),w=(S.dbReadyPromise=new L(function(y){S.dbReadyResolve=y}),S.openCanceller=new L(function(y,_){S.cancelOpen=_}),this._state=S,this.name=r,this.on=wr(this,"populate","blocked","versionchange","close",{ready:[Pi,ue]}),this.once=function(y,_){var k=function(){for(var $=[],x=0;x<arguments.length;x++)$[x]=arguments[x];m.on(y).unsubscribe(k),_.apply(m,$)};return m.on(y,k)},this.on.ready.subscribe=ot(this.on.ready.subscribe,function(y){return function(_,k){we.vip(function(){var $,x=m._state;x.openComplete?(x.dbOpenError||L.resolve().then(_),k&&y(_)):x.onReadyBeingFired?(x.onReadyBeingFired.push(_),k&&y(_)):(y(_),$=m,k||y(function I(){$.on.ready.unsubscribe(_),$.on.ready.unsubscribe(I)}))})}}),this.Collection=(o=this,xr(qo.prototype,function(I,x){this.db=o;var k=ea,$=null;if(x)try{k=x()}catch(M){$=M}var x=I._ctx,I=x.table,A=I.hook.reading.fire;this._ctx={table:I,index:x.index,isPrimKey:!x.index||I.schema.primKey.keyPath&&x.index===I.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:$,or:x.or,valueMapper:A!==fr?A:null}})),this.Table=(s=this,xr(oa.prototype,function(y,_,k){this.db=s,this._tx=k,this.name=y,this.schema=_,this.hook=s._allTables[y]?s._allTables[y].hook:wr(null,{creating:[Ao,ue],reading:[Mo,fr],updating:[Po,ue],deleting:[Do,ue]})})),this.Transaction=(c=this,xr(Ko.prototype,function(y,_,k,$,x){var I=this;y!=="readonly"&&_.forEach(function(A){A=(A=k[A])==null?void 0:A.yProps,A&&(_=_.concat(A.map(function(M){return M.updatesTable})))}),this.db=c,this.mode=y,this.storeNames=_,this.schema=k,this.chromeTransactionDurability=$,this.idbtrans=null,this.on=wr(this,"complete","error","abort"),this.parent=x||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new L(function(A,M){I._resolve=A,I._reject=M}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(A){var M=I.active;return I.active=!1,I.on.error.fire(A),I.parent?I.parent._reject(A):M&&I.idbtrans&&I.idbtrans.abort(),_e(A)})})),this.Version=(u=this,xr(Qo.prototype,function(y){this.db=u,this._cfg={version:y,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(h=this,xr(ua.prototype,function(y,_,k){if(this.db=h,this._ctx={table:y,index:_===":id"?null:_,or:k},this._cmp=this._ascending=ae,this._descending=function($,x){return ae(x,$)},this._max=function($,x){return 0<ae($,x)?$:x},this._min=function($,x){return ae($,x)<0?$:x},this._IDBKeyRange=h._deps.IDBKeyRange,!this._IDBKeyRange)throw new Q.MissingAPI})),this.on("versionchange",function(y){0<y.newVersion?console.warn("Another connection wants to upgrade database '".concat(m.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(m.name,"'. Closing db now to resume the delete request.")),m.close({disableAutoOpen:!1})}),this.on("blocked",function(y){!y.newVersion||y.newVersion<y.oldVersion?console.warn("Dexie.delete('".concat(m.name,"') was blocked")):console.warn("Upgrade '".concat(m.name,"' blocked by other connection holding version ").concat(y.oldVersion/10))}),this._maxKey=Ir(n.IDBKeyRange),this._createTransaction=function(y,_,k,$){return new m.Transaction(y,_,k,m._options.chromeTransactionDurability,$)},this._fireOnBlocked=function(y){m.on("blocked").fire(y),Er.toArray().filter(function(_){return _.name===m.name&&_!==m&&!_._state.vcFired}).map(function(_){return _.on("versionchange").fire(y)})},this.use(Zo),this.use(is),this.use(es),this.use(Xo),this.use(Jo),new Proxy(this,{get:function(y,_,k){var $;return _==="_vip"||(_==="table"?function(x){return ui(m.table(x),w)}:($=Reflect.get(y,_,k))instanceof oa?ui($,w):_==="tables"?$.map(function(x){return ui(x,w)}):_==="_createTransaction"?function(){return ui($.apply(this,arguments),w)}:$)}}));this.vip=w,v.forEach(function(y){return y(m)})}var pi,tr=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ns=(un.prototype.subscribe=function(r,n,o){return this._subscribe(r&&typeof r!="function"?r:{next:r,error:n,complete:o})},un.prototype[tr]=function(){return this},un);function un(r){this._subscribe=r}try{pi={indexedDB:d.indexedDB||d.mozIndexedDB||d.webkitIndexedDB||d.msIndexedDB,IDBKeyRange:d.IDBKeyRange||d.webkitIDBKeyRange}}catch{pi={indexedDB:null,IDBKeyRange:null}}function Ea(r){var n,o=!1,s=new ns(function(c){var u=Ai(r),h,m=!1,v={},S={},w={get closed(){return m},unsubscribe:function(){m||(m=!0,h&&h.abort(),y&&vt.storagemutated.unsubscribe($))}},y=(c.start&&c.start(w),!1),_=function(){return Li(x)};function k(){return rn(S,v)}var $=function(I){li(v,I),k()&&_()},x=function(){var I,A,M;!m&&pi.indexedDB&&(v={},I={},h&&h.abort(),h=new AbortController,M=(D=>{var O=Qt();try{u&&Xt();var F=ft(r,D);return F=u?F.finally(gt):F}finally{O&&Yt()}})(A={subscr:I,signal:h.signal,requery:_,querier:r,trans:null}),y||(vt.storagemutated.subscribe($),y=!0),Promise.resolve(M).then(function(D){o=!0,n=D,m||A.signal.aborted||(k()||(S=I,k())?_():(v={},Li(function(){return!m&&c.next&&c.next(D)})))},function(D){o=!1,["DatabaseClosedError","AbortError"].includes(D==null?void 0:D.name)||m||Li(function(){m||c.error&&c.error(D)})}))};return setTimeout(_,0),w});return s.hasValue=function(){return o},s.getValue=function(){return n},s}var Ft=ut;function pn(r){var n=_t;try{_t=!0,vt.storagemutated.fire(r),on(r,!0)}finally{_t=n}}V(Ft,a(a({},lt),{delete:function(r){return new Ft(r,{addons:[]}).delete()},exists:function(r){return new Ft(r,{addons:[]}).open().then(function(n){return n.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(r){try{return n=Ft.dependencies,o=n.indexedDB,n=n.IDBKeyRange,(Zi(o)?Promise.resolve(o.databases()).then(function(s){return s.map(function(c){return c.name}).filter(function(c){return c!==Qr})}):Ji(o,n).toCollection().primaryKeys()).then(r)}catch{return _e(new Q.MissingAPI)}var n,o},defineClass:function(){return function(r){E(this,r)}},ignoreTransaction:function(r){return W.trans?Dt(W.transless||ct,r):r()},vip:en,async:function(r){return function(){try{var n=sn(r.apply(this,arguments));return n&&typeof n.then=="function"?n:L.resolve(n)}catch(o){return _e(o)}}},spawn:function(r,n,o){try{var s=sn(r.apply(o,n||[]));return s&&typeof s.then=="function"?s:L.resolve(s)}catch(c){return _e(c)}},currentTransaction:{get:function(){return W.trans||null}},waitFor:function(r,n){return r=L.resolve(typeof r=="function"?Ft.ignoreTransaction(r):r).timeout(n||6e4),W.trans?W.trans.waitFor(r):r},Promise:L,debug:{get:function(){return it},set:function(r){Vn(r)}},derive:le,extend:E,props:V,override:ot,Events:wr,on:vt,liveQuery:Ea,extendObservabilitySet:li,getByKeyPath:Fe,setByKeyPath:$e,delByKeyPath:function(r,n){typeof n=="string"?$e(r,n,void 0):"length"in n&&[].map.call(n,function(o){$e(r,o,void 0)})},shallowClone:hr,deepClone:oe,getObjectDiff:ln,cmp:ae,asap:G,minKey:-1/0,addons:[],connections:{get:Er.toArray},errnames:Di,dependencies:pi,cache:Tt,semVer:"4.4.4",version:"4.4.4".split(".").map(function(r){return parseInt(r)}).reduce(function(r,n,o){return r+n/Math.pow(10,2*o)})})),Ft.maxKey=Ir(Ft.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(vt(ti,function(r){_t||(r=new CustomEvent(Gi,{detail:r}),_t=!0,dispatchEvent(r),_t=!1)}),addEventListener(Gi,function(r){r=r.detail,_t||pn(r)}));var rr,_t=!1,Sa=function(){};return typeof BroadcastChannel<"u"&&((Sa=function(){(rr=new BroadcastChannel(Gi)).onmessage=function(r){return r.data&&pn(r.data)}})(),typeof rr.unref=="function"&&rr.unref(),vt(ti,function(r){_t||rr.postMessage(r)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(r){if(!ut.disableBfCache&&r.persisted){it&&console.debug("Dexie: handling persisted pagehide"),rr!=null&&rr.close();for(var n=0,o=Er.toArray();n<o.length;n++)o[n].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(r){!ut.disableBfCache&&r.persisted&&(it&&console.debug("Dexie: handling persisted pageshow"),Sa(),pn({all:new De(-1/0,[[]])}))})),L.rejectionMapper=function(r,n){return!r||r instanceof Vt||r instanceof TypeError||r instanceof SyntaxError||!r.name||!Hn[r.name]?r:(n=new Hn[r.name](n||r.message,r),"stack"in r&&H(n,"stack",{get:function(){return this.inner.stack}}),n)},Vn(it),a(ut,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:ut,Entity:ta,PropModification:_r,RangeSet:De,add:function(r){return new _r({add:r})},cmp:ae,default:ut,liveQuery:Ea,mergeRanges:Cr,rangesOverlap:ga,remove:function(r){return new _r({remove:r})},replacePrefix:function(r,n){return new _r({replacePrefix:[r,n]})}}),{default:ut}),ut})})(bi)),bi.exports}var Ls=qs();const Pn=zs(Ls),Ba=Symbol.for("Dexie"),Ii=globalThis[Ba]||(globalThis[Ba]=Pn);if(Pn.semVer!==Ii.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Pn.semVer} and ${Ii.semVer}`);const{liveQuery:dc,mergeRanges:uc,rangesOverlap:pc,RangeSet:hc,cmp:mc,Entity:fc,PropModification:gc,replacePrefix:yc,add:bc,remove:vc,DexieYProvider:_c}=Ii;class js extends Ii{constructor(){super("MealPrepLocal"),this.version(1).stores({rows:"id"})}}const jn=new js,Kn=1,Ks=250;let Lt=null,On=null;async function Bs(){const e=await jn.rows.get(Kn);return(e==null?void 0:e.data)??null}function Us(e){Lt&&clearTimeout(Lt),Lt=setTimeout(()=>{Lt=null,On=jn.rows.put({id:Kn,data:e}).catch(t=>{console.error("No se pudo guardar en IndexedDB:",t)})},Ks)}async function Bn(e){Lt&&(clearTimeout(Lt),Lt=null),await jn.rows.put({id:Kn,data:e}),On&&await On}function co(){return{family:null,members:[],weightHistory:[],foods:[],pantryItems:[],recipes:[],mealPlans:[],meals:[],templates:[],shoppingLists:[],shoppingItems:[],shoppingSections:[],shoppingSectionItems:[],householdItems:[],householdStockItems:[],chores:[],choreCompletions:[]}}const b=co();function Ke(e){const t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${i}-${a}`}function re(e){const t=e();return Us(b),t}let _n=null;function U(){return _n||(_n=(async()=>{await Ss();const e=await Bs();if(e)Object.assign(b,e);else{const{bootstrapIfEmpty:t}=await lo(async()=>{const{bootstrapIfEmpty:i}=await import("./bootstrap-C2RX4fAj.js");return{bootstrapIfEmpty:i}},[]);t(),await Bn(b)}})()),_n}async function Gs(e){Object.assign(b,e),await Bn(b)}async function Hs(){const{bootstrapIfEmpty:e}=await lo(async()=>{const{bootstrapIfEmpty:t}=await import("./bootstrap-C2RX4fAj.js");return{bootstrapIfEmpty:t}},[]);Object.assign(b,co()),e(),await Bn(b)}const Vs="local-user",Ws="local@mealprep.app";function wn(){var t;const e=b.family;return ce({id:Vs,email:Ws,name:((t=b.members[0])==null?void 0:t.name)??"Tú",familyId:e.id,family:{id:e.id,name:e.name,members:b.members.map(i=>({id:i.id,name:i.name,color:i.color,age:i.age,weightKg:i.weightKg,heightCm:i.heightCm,sex:i.sex,activityLevel:i.activityLevel,goal:i.goal,restrictions:i.restrictions,dailyCalories:i.dailyCalories,dailyProteinG:i.dailyProteinG,dailyCarbsG:i.dailyCarbsG,dailyFatG:i.dailyFatG,tmb:i.tmb}))}})}const dr={register:async e=>(await U(),{user:wn(),accessToken:"local",refreshToken:"local"}),login:async e=>(await U(),{user:wn(),accessToken:"local",refreshToken:"local"}),me:async()=>(await U(),wn())};function uo(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function je(e=new Date){const t=e.getDay(),i=e.getDate()-t+(t===0?-6:1),a=new Date(e);return a.setDate(i),uo(a)}function Qs(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i}const Ua=[{id:"hogar-basico",name:"Hogar básico",description:"Las tareas domésticas más habituales, diarias y semanales",chores:[{name:"Fregar los platos",frequency:"DIARIA"},{name:"Sacar la basura",frequency:"DIARIA"},{name:"Recoger la cocina",frequency:"DIARIA"},{name:"Hacer las camas",frequency:"DIARIA"},{name:"Poner una lavadora",frequency:"SEMANAL"},{name:"Tender y recoger la ropa",frequency:"SEMANAL"},{name:"Pasar la aspiradora",frequency:"SEMANAL"},{name:"Fregar el suelo",frequency:"SEMANAL"},{name:"Limpiar el baño",frequency:"SEMANAL"},{name:"Cambiar las sábanas",frequency:"SEMANAL"},{name:"Hacer la compra",frequency:"SEMANAL"}]}];function xn(e){return e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}const jt={minRecipesForPlan:35,expiringSoonDays:7,minKcalPorRacion:25,maxKcalPorRacion:1500};function Ys(e){var i;const t=new Map;for(const a of e){if(!((i=a.recipe)!=null&&i.ingredients))continue;const l=a.servingsMultiplier??1,d=a.recipe.servings&&a.recipe.servings>0?a.recipe.servings:1;for(const p of a.recipe.ingredients){const f=t.get(p.foodId),E=p.quantity/d*l;f?f.total+=E:t.set(p.foodId,{foodId:p.foodId,foodName:p.foodName,total:E,unit:p.unit})}}return t}function Xs(e,t){return`${e}|${t}`}function po(e,t,i){return e.get(Xs(t,i))??0}const Js=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"],Zs=4;function el(){const e=[];for(let t=1;t<=7;t++)for(const i of Js)e.push({dayOfWeek:t,mealType:i,recipeId:""});return e}function ho(e,t){const i=e.filter(a=>a.mealType.includes(t));return i.length>0?i:e}function tl(e,t){const i=new Date(e);return i.setDate(i.getDate()+(t-1)),i.setHours(0,0,0,0),i}function rl(e,t,i){if(!i||i.urgencyMap.size===0)return 0;const a=tl(i.weekStart,t.dayOfWeek);let l=0;for(const d of e.ingredients){const p=i.urgencyMap.get(d.foodId);p&&(p.expiryDate<a||(l+=p.urgency))}return l}function il(e,t){const i=t.reduce((l,d)=>l+d,0);let a=Math.random()*i;for(let l=0;l<e.length;l++)if(a-=t[l],a<=0)return e[l];return e[e.length-1]}function mo(e,t,i){if(!i||i.urgencyMap.size===0)return e[Math.floor(Math.random()*e.length)];const a=e.map(l=>1+Zs*rl(l,t,i));return il(e,a)}function nl(e,t,i){const a=ho(t,e.mealType);return mo(a,e,i).id}function al(e,t,i){for(let a=0;a<t.length;a++)t[a].recipeId=nl(t[a],e,i)}function ol(e,t,i,a,l=500){const d=new Map(e.map(E=>[E.id,E])),p=e.reduce((E,P)=>E+(P.calorias??0),0)/e.length;let f=0;for(;f<l;){const E={calories:0,proteinG:0,carbsG:0,fatG:0};for(const H of t){const le=d.get(H.recipeId);le&&(E.calories+=le.calorias??0,E.proteinG+=le.proteinas??0,E.carbsG+=le.carbos??0,E.fatG+=le.grasas??0)}if(E.calories>=i.calories.min&&E.calories<=i.calories.max&&E.proteinG>=i.proteinG.min&&E.proteinG<=i.proteinG.max&&E.carbsG>=i.carbsG.min&&E.carbsG<=i.carbsG.max&&E.fatG>=i.fatG.min&&E.fatG<=i.fatG.max)break;const j=E.calories<i.calories.min,N=E.calories>i.calories.max,V=Math.floor(Math.random()*t.length),ie=e.filter(H=>j?(H.calorias??0)>p:N?(H.calorias??0)<p:!0);if(ie.length>0){const H=t[V],le=ho(ie,H.mealType),Ie=le.length>0?le:ie;H.recipeId=mo(Ie,H,a).id}f++}}const sl=100;function ll(e){return e.unit==="UNIDAD"?e.quantity*sl:e.quantity}function $n(e,t,i){const a=t&&t>0?t:1;let l=0,d=0,p=0,f=0,E=0,P=0,j=0,N=0,V=0,ie=0,H=0,le=0,Ie=0,de=0,Te=0,ot=0,We=0,G=0,Fe=0,$e=0,hr=0,qr=0,mr=0;for(const rt of e){const oe=i.get(rt.foodId);if(!oe)continue;const he=ll(rt)/100;l+=(oe.calorias100g??0)*he,d+=(oe.proteinas100g??0)*he,p+=(oe.carbos100g??0)*he,f+=(oe.grasas100g??0)*he,E+=(oe.fibra100g??0)*he,P+=(oe.sodioMg??0)*he,j+=(oe.potasioMg??0)*he,N+=(oe.calcioMg??0)*he,V+=(oe.magnesioMg??0)*he,ie+=(oe.hierroMg??0)*he,H+=(oe.zincMg??0)*he,le+=(oe.fosforoMg??0)*he,Ie+=(oe.vitaminaAIug??0)*he,de+=(oe.vitaminaCMg??0)*he,Te+=(oe.vitaminaDIug??0)*he,ot+=(oe.vitaminaEMg??0)*he,We+=(oe.vitaminaKIug??0)*he,G+=(oe.vitaminaB6Mg??0)*he,Fe+=(oe.vitaminaB12Iug??0)*he,$e+=(oe.tiaminaMg??0)*he,hr+=(oe.riboflavinaMg??0)*he,qr+=(oe.niacinaMg??0)*he,mr+=(oe.acidoFolicoIug??0)*he}const me=(rt,oe=0)=>{const he=rt/a,Gt=10**oe;return Math.round(he*Gt)/Gt};return{calorias:me(l),proteinas:me(d),carbos:me(p),grasas:me(f),fibra:me(E),sodioMg:me(P,1),potasioMg:me(j,1),calcioMg:me(N,1),magnesioMg:me(V,1),hierroMg:me(ie,2),zincMg:me(H,2),fosforoMg:me(le,1),vitaminaAIug:me(Ie),vitaminaCMg:me(de,1),vitaminaDIug:me(Te,1),vitaminaEMg:me(ot,1),vitaminaKIug:me(We,1),vitaminaB6Mg:me(G,2),vitaminaB12Iug:me(Fe,2),tiaminaMg:me($e,2),riboflavinaMg:me(hr,2),niacinaMg:me(qr,1),acidoFolicoIug:me(mr)}}function fo(e,t=new Date){const i=new Date(t);i.setHours(0,0,0,0);const a=new Date(e);return a.setHours(0,0,0,0),Math.round((a.getTime()-i.getTime())/864e5)}function cl(e,t){const i=new Map;for(const a of e){if(a.expired)continue;const l=(t+1-a.daysLeft)/(t+1),d=i.get(a.foodId);(!d||a.expiryDate<d.expiryDate)&&i.set(a.foodId,{urgency:l,expiryDate:a.expiryDate})}return i}function dl(e,t){const i=[...e].sort((p,f)=>p.expiryDate&&f.expiryDate?p.expiryDate.getTime()-f.expiryDate.getTime():p.expiryDate?-1:f.expiryDate?1:0),a=[];let l=t,d=0;for(const p of i){if(l<=0)break;if(p.quantity<=0)continue;const f=Math.min(p.quantity,l),E=Math.round((p.quantity-f)*10)/10;a.push({id:p.id,subtracted:f,remaining:E}),d+=f,l-=f}return{consumption:a,totalSubtracted:Math.round(d*10)/10}}const ul={SEDENTARIO:1.2,LIGERO:1.375,MODERADO:1.55,ACTIVO:1.725},pl={PERDER_PESO:.8,MANTENER:1,GANAR_MUSCULO:1.15};function hl(e){const{weightKg:t,heightCm:i,age:a,sex:l}=e;return l==="MASCULINO"?10*t+6.25*i-5*a+5:10*t+6.25*i-5*a-161}function ml(e){const t=hl(e),i=ul[e.activityLevel],a=pl[e.goal],l=Math.round(t*i*a);let d;switch(e.goal){case"PERDER_PESO":d=2;break;case"GANAR_MUSCULO":d=2.2;break;default:d=1.6}const p=Math.round(e.weightKg*d),f=l*.28,E=Math.round(f/9),P=p*4,j=l-P-f,N=Math.round(Math.max(0,j)/4);return{tmb:Math.round(t),dailyCalories:l,dailyProteinG:p,dailyCarbsG:N,dailyFatG:E}}function go(e){return{calories:e.dailyCalories*7,proteinG:e.dailyProteinG*7,carbsG:e.dailyCarbsG*7,fatG:e.dailyFatG*7}}function yo(e,t=.05){const i={};for(const[a,l]of Object.entries(e))i[a]={min:Math.round(l*(1-t)),max:Math.round(l*(1+t))};return i}function pe(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function Ga(){return b.members[0]}function ki(e,t){const i=ml(t);return e.age=t.age,e.weightKg=t.weightKg,e.heightCm=t.heightCm,e.sex=t.sex,e.activityLevel=t.activityLevel,e.goal=t.goal,e.tmb=i.tmb,e.dailyCalories=i.dailyCalories,e.dailyProteinG=i.dailyProteinG,e.dailyCarbsG=i.dailyCarbsG,e.dailyFatG=i.dailyFatG,e.weightDate=new Date,e.updatedAt=new Date,i}const fl={onboarding:async e=>(await U(),re(()=>{const t=e.memberId?b.members.find(a=>a.id===e.memberId):Ga();if(!t)throw new Error("Miembro no encontrado");const i=ki(t,e);return t.restrictions=e.restrictions??[],b.weightHistory.push({id:pe(),memberId:t.id,weightKg:e.weightKg,date:new Date}),ce({message:"Perfil nutricional completado",member:t,requirements:i})})),updateProfile:async e=>(await U(),re(()=>{const t=Ga();if(!t)throw new Error("No hay miembros en la familia");return Object.assign(t,e),e.weightKg&&(b.weightHistory.push({id:pe(),memberId:t.id,weightKg:e.weightKg,date:new Date}),t.weightDate=new Date),(e.weightKg||e.heightCm||e.activityLevel||e.goal)&&t.age&&t.sex&&t.activityLevel&&t.goal&&ki(t,t),t.updatedAt=new Date,ce(t)}))},vi={list:async()=>(await U(),b.members.map(e=>ce(e))),create:async e=>(await U(),re(()=>{const t=new Date,i={id:pe(),familyId:b.family.id,name:e.name,color:e.color||"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),age:e.age??null,weightKg:e.weightKg??null,weightDate:null,heightCm:e.heightCm??null,sex:e.sex??null,activityLevel:e.activityLevel??null,goal:e.goal??null,restrictions:[],tmb:null,dailyCalories:null,dailyProteinG:null,dailyCarbsG:null,dailyFatG:null,createdAt:t,updatedAt:t};return e.age&&e.weightKg&&e.heightCm&&e.sex&&e.activityLevel&&e.goal&&ki(i,e),b.members.push(i),ce(i)})),update:async(e,t)=>(await U(),re(()=>{const i=b.members.find(l=>l.id===e);if(!i)throw new Error("Miembro no encontrado");return t.weightKg&&(b.weightHistory.push({id:pe(),memberId:i.id,weightKg:t.weightKg,date:new Date}),t={...t,weightDate:new Date}),Object.assign(i,t),(t.weightKg||t.heightCm||t.activityLevel||t.goal)&&i.age&&i.sex&&i.activityLevel&&i.goal&&ki(i,i),i.updatedAt=new Date,ce(i)})),remove:async e=>(await U(),re(()=>{if(b.members.length<=1)throw new Error("No puedes eliminar el único miembro");const t=b.members.findIndex(i=>i.id===e);if(t===-1)throw new Error("Miembro no encontrado");return b.members.splice(t,1),{message:"Miembro eliminado"}}))};function Ha(){const e=Ze(),t=b.foods.map(i=>ce(i));return[...e.foodsList,...t].sort((i,a)=>i.name.localeCompare(a.name))}function ur(e){const i=Ze().foodsById.get(e);if(i)return i;const a=b.foods.find(l=>l.id===e);return a?ce(a):null}function bo(e){const t=e.ingredients.map(i=>({id:i.id,recipeId:i.recipeId,foodId:i.foodId,quantity:i.quantity,unit:i.unit,food:ur(i.foodId)}));return ce({...e,ingredients:t})}function Un(){const e=Ze();return[...b.recipes.map(bo),...e.recipesList].sort((i,a)=>new Date(a.createdAt).getTime()-new Date(i.createdAt).getTime())}function ht(e){const i=Ze().recipesById.get(e);if(i)return i;const a=b.recipes.find(l=>l.id===e);return a?bo(a):null}function gl(e){if(!e)return null;const t=b.members.find(i=>i.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function Tn(e){return ce({...e,recipe:e.recipeId?ht(e.recipeId):null,member:gl(e.assignedToMemberId)})}const Ei=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"];function yl(e,t){return b.meals.filter(i=>i.planId===e&&(!t||i.assignedToMemberId===t)).sort((i,a)=>i.dayOfWeek-a.dayOfWeek||Ei.indexOf(i.mealType)-Ei.indexOf(a.mealType))}function _i(e,t){return ce({...e,meals:yl(e.id,t).map(Tn)})}function bl(e){return ce({...e,recipe:ht(e.recipeId)})}function vl(){const e=Ze();return[...b.templates.map(i=>ce(i)),...e.templates].sort((i,a)=>i.isSystem===a.isSystem?0:i.isSystem?1:-1)}function vo(e){const t=b.templates.find(i=>i.id===e);return t||Ze().templates.find(i=>i.id===e)}function Va(e){const t=vo(e);return t?ce({...t,meals:[...t.meals].sort((i,a)=>i.dayOfWeek-a.dayOfWeek||Ei.indexOf(i.mealType)-Ei.indexOf(a.mealType)).map(bl)}):null}function _l(e){return vo(e)}function wl(e){const t=Ze(),i=b.householdItems.map(l=>ce(l));let a=[...t.householdItems,...i];if(e){const l=e.toLowerCase();a=a.filter(d=>d.name.toLowerCase().includes(l))}return a.sort((l,d)=>l.name.localeCompare(d.name))}function _o(e){const i=Ze().householdItems.find(l=>l.id===e);if(i)return i;const a=b.householdItems.find(l=>l.id===e);return a?ce(a):null}const Si={list:async()=>(await U(),Ha()),search:async e=>{await U();const t=e.trim().toLowerCase();return t?Ha().filter(i=>i.name.toLowerCase().includes(t)).slice(0,20):[]},create:async e=>(await U(),re(()=>{const t={id:pe(),name:e.name,category:e.category??null,calorias100g:e.calorias100g??null,proteinas100g:e.proteinas100g??null,carbos100g:e.carbos100g??null,grasas100g:e.grasas100g??null,fibra100g:e.fibra100g??null,sodioMg:e.sodioMg??null,potasioMg:e.potasioMg??null,calcioMg:e.calcioMg??null,magnesioMg:e.magnesioMg??null,hierroMg:e.hierroMg??null,zincMg:e.zincMg??null,fosforoMg:e.fosforoMg??null,vitaminaAIug:e.vitaminaAIug??null,vitaminaCMg:e.vitaminaCMg??null,vitaminaDIug:e.vitaminaDIug??null,vitaminaEMg:e.vitaminaEMg??null,vitaminaKIug:e.vitaminaKIug??null,vitaminaB6Mg:e.vitaminaB6Mg??null,vitaminaB12Iug:e.vitaminaB12Iug??null,tiaminaMg:e.tiaminaMg??null,riboflavinaMg:e.riboflavinaMg??null,niacinaMg:e.niacinaMg??null,acidoFolicoIug:e.acidoFolicoIug??null,unidadBase:e.unidadBase??"g",familyId:b.family.id,source:null,sourceId:null,lastRefreshedAt:null,createdAt:new Date};return b.foods.push(t),ce(t)}))};function Ar(e){return ce({...e,food:ur(e.foodId)})}function Dr(e){if(e!==void 0)return e?new Date(e):null}const wt={list:async()=>(await U(),[...b.pantryItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(Ar)),expiring:async e=>{await U();const t=e&&e>0?e:jt.expiringSoonDays,i=new Date;i.setHours(23,59,59,999),i.setDate(i.getDate()+t);const a=b.pantryItems.filter(l=>l.quantity>0&&l.expiryDate!==null&&l.expiryDate<=i).sort((l,d)=>l.expiryDate.getTime()-d.expiryDate.getTime()).map(l=>{const d=l.expiryDate,p=fo(d),f=ur(l.foodId);return ce({id:l.id,foodId:l.foodId,foodName:(f==null?void 0:f.name)??"?",quantity:l.quantity,unit:l.unit,expiryDate:d,daysLeft:p,expired:p<0})});return{days:t,items:a}},add:async e=>(await U(),re(()=>{const t=new Date,i={id:pe(),familyId:b.family.id,addedByUserId:null,foodId:e.foodId,quantity:e.quantity,unit:e.unit??"g",expiryDate:Dr(e.expiryDate)??null,purchaseDate:Dr(e.purchaseDate)??null,notes:e.notes??null,createdAt:t,updatedAt:t};return b.pantryItems.push(i),Ar(i)})),update:async(e,t)=>(await U(),re(()=>{const i=b.pantryItems.find(a=>a.id===e);if(!i)throw new Error("Item no encontrado");return t.quantity!==void 0&&(i.quantity=t.quantity),t.unit!==void 0&&(i.unit=t.unit),t.expiryDate!==void 0&&(i.expiryDate=Dr(t.expiryDate)??null),t.purchaseDate!==void 0&&(i.purchaseDate=Dr(t.purchaseDate)??null),t.notes!==void 0&&(i.notes=t.notes),i.updatedAt=new Date,Ar(i)})),split:async(e,t)=>(await U(),re(()=>{const i=b.pantryItems.find(d=>d.id===e);if(!i)throw new Error("Item no encontrado");if(t.quantity>=i.quantity)throw new Error(`La cantidad a separar debe ser menor que la del lote (${i.quantity} ${i.unit})`);const a=new Date;i.quantity=Math.round((i.quantity-t.quantity)*10)/10,i.updatedAt=a;const l={id:pe(),familyId:i.familyId,addedByUserId:i.addedByUserId,foodId:i.foodId,quantity:t.quantity,unit:i.unit,expiryDate:Dr(t.expiryDate)??null,purchaseDate:i.purchaseDate,notes:i.notes,createdAt:a,updatedAt:a};return b.pantryItems.push(l),{original:Ar(i),created:Ar(l)}})),remove:async e=>(await U(),re(()=>{const t=b.pantryItems.findIndex(i=>i.id===e);if(t===-1)throw new Error("Item no encontrado");return b.pantryItems.splice(t,1),{message:"Item eliminado"}}))};function In(e){const t=new Map;for(const i of e){const a=ur(i.foodId);a&&t.set(i.foodId,a)}return t}function kn(e,t){var i;if(!e)throw new Error("Receta no encontrada");if(!e.familyId||e.familyId!==((i=b.family)==null?void 0:i.id))throw new Error(`No puedes ${t} una receta del sistema`)}const or={list:async e=>{var l,d;await U();let t=Un();const i=(l=e==null?void 0:e.search)==null?void 0:l.toLowerCase();i&&(t=t.filter(p=>p.name.toLowerCase().includes(i)));const a=(d=e==null?void 0:e.ingredient)==null?void 0:d.toLowerCase();if(a&&(t=t.filter(p=>p.ingredients.some(f=>{var E;return(E=f.food)==null?void 0:E.name.toLowerCase().includes(a)}))),e!=null&&e.maxTime){const p=parseInt(e.maxTime,10);t=t.filter(f=>f.timeMinutes!=null&&f.timeMinutes<=p)}if(e!=null&&e.mealType&&(t=t.filter(p=>p.mealType.includes(e.mealType))),e!=null&&e.minCalories){const p=parseInt(e.minCalories,10);t=t.filter(f=>f.calorias==null||f.calorias>=p)}if(e!=null&&e.maxCalories){const p=parseInt(e.maxCalories,10);t=t.filter(f=>f.calorias==null||f.calorias<=p)}return t},get:async e=>{await U();const t=ht(e);if(!t)throw new Error("Receta no encontrada");return t},create:async e=>(await U(),re(()=>{const t=new Date,i=pe(),a=e.servings??1,l=In(e.ingredients),d=e.ingredients.map(E=>({foodId:E.foodId,quantity:E.quantity,unit:E.unit})),p=$n(d,a,l),f={id:i,familyId:b.family.id,name:e.name,description:e.description??null,instructions:e.instructions??null,mealType:e.mealType??[],timeMinutes:e.timeMinutes??null,difficulty:e.difficulty??null,imageUrl:e.imageUrl??null,servings:a,...p,isPublic:e.isPublic??!1,createdAt:t,updatedAt:t,ingredients:e.ingredients.map(E=>({id:`${i}:${E.foodId}`,recipeId:i,foodId:E.foodId,quantity:E.quantity,unit:E.unit}))};return b.recipes.push(f),ht(i)})),update:async(e,t)=>(await U(),re(()=>{const i=b.recipes.find(a=>a.id===e);if(kn(i,"editar"),Object.assign(i,{name:t.name??i.name,description:t.description??i.description,instructions:t.instructions??i.instructions,mealType:t.mealType??i.mealType,timeMinutes:t.timeMinutes??i.timeMinutes,difficulty:t.difficulty??i.difficulty,imageUrl:t.imageUrl??i.imageUrl,servings:t.servings??i.servings}),t.ingredients){const a=In(t.ingredients),l=t.ingredients.map(p=>({foodId:p.foodId,quantity:p.quantity,unit:p.unit})),d=$n(l,i.servings,a);Object.assign(i,d),i.ingredients=t.ingredients.map(p=>({id:`${i.id}:${p.foodId}`,recipeId:i.id,foodId:p.foodId,quantity:p.quantity,unit:p.unit}))}return i.updatedAt=new Date,ht(e)})),remove:async e=>(await U(),re(()=>{const t=b.recipes.find(a=>a.id===e);kn(t,"eliminar");const i=b.recipes.indexOf(t);return b.recipes.splice(i,1),{message:"Receta eliminada"}})),recalculateNutrition:async e=>(await U(),re(()=>{const t=b.recipes.find(l=>l.id===e);kn(t,"recalcular");const i=In(t.ingredients),a=$n(t.ingredients,t.servings,i);return Object.assign(t,a),t.updatedAt=new Date,ht(e)}))};function sr(e){return b.mealPlans.find(t=>t.familyId===b.family.id&&t.weekKey===e)}function mi(e){const t=Ke(e);let i=sr(t);if(!i){const a=new Date;i={id:pe(),familyId:b.family.id,weekStart:e,weekKey:t,autoGenerated:!1,createdAt:a,updatedAt:a},b.mealPlans.push(i)}return i}function xl(){const e=b.family.id;return Un().filter(t=>(t.isPublic&&t.familyId===null||t.familyId===e)&&t.calorias>=jt.minKcalPorRacion&&t.calorias<=jt.maxKcalPorRacion)}function $l(e){const t=new Date;return t.setHours(23,59,59,999),t.setDate(t.getDate()+e),b.pantryItems.filter(i=>i.quantity>0&&i.expiryDate!==null&&i.expiryDate<=t).map(i=>{var d;const a=i.expiryDate,l=fo(a);return{id:i.id,foodId:i.foodId,foodName:((d=ur(i.foodId))==null?void 0:d.name)??"?",quantity:i.quantity,unit:i.unit,expiryDate:a,daysLeft:l,expired:l<0}})}function Il(e,t){if(!e.dailyCalories)return null;const i={tmb:e.tmb??0,dailyCalories:e.dailyCalories,dailyProteinG:e.dailyProteinG??0,dailyCarbsG:e.dailyCarbsG??0,dailyFatG:e.dailyFatG??0},a=go(i),l=yo(a),d=sr(Ke(t)),p={calories:0,proteinG:0,carbsG:0,fatG:0};if(d){const E=b.meals.filter(P=>P.planId===d.id&&P.assignedToMemberId===e.id&&!P.isFasting);for(const P of E){const j=P.recipeId?ht(P.recipeId):null;if(j){const N=P.servingsMultiplier??1;p.calories+=(j.calorias??0)*N,p.proteinG+=(j.proteinas??0)*N,p.carbsG+=(j.carbos??0)*N,p.fatG+=(j.grasas??0)*N}}}const f=p.calories>=l.calories.min&&p.calories<=l.calories.max&&p.proteinG>=l.proteinG.min&&p.proteinG<=l.proteinG.max&&p.carbsG>=l.carbsG.min&&p.carbsG<=l.carbsG.max&&p.fatG>=l.fatG.min&&p.fatG<=l.fatG.max;return{memberId:e.id,memberName:e.name,current:p,target:a,range:l,withinRange:f}}const Ye={current:async e=>{await U();const t=je(),i=mi(t);return re(()=>_i(i,e))},generate:async(e,t=!0)=>(await U(),re(()=>{const i=je(),a=e?b.members.filter(H=>H.id===e):b.members;if(a.length===0)throw new Error("No hay miembros en la unidad familiar");let l=a[0];if(e||(l=a.find(H=>H.dailyCalories)??a[0]),!l.dailyCalories)throw new Error(`El miembro "${l.name}" no tiene perfil nutricional completo. Completa su perfil en la sección Perfil.`);const d={tmb:l.tmb??0,dailyCalories:l.dailyCalories,dailyProteinG:l.dailyProteinG??0,dailyCarbsG:l.dailyCarbsG??0,dailyFatG:l.dailyFatG??0},p=go(d),f=yo(p),E=xl();if(E.length<jt.minRecipesForPlan)throw new Error(`Se necesitan al menos ${jt.minRecipesForPlan} recetas. Hay ${E.length}.`);let P;if(t){const H=$l(jt.expiringSoonDays);P={urgencyMap:cl(H,jt.expiringSoonDays),weekStart:i}}const j=el(),N=E;al(N,j,P),ol(N,j,f,P);const V=mi(i);V.autoGenerated=!0,V.updatedAt=new Date;const ie=e??l.id;b.meals=b.meals.filter(H=>!(H.planId===V.id&&H.assignedToMemberId===ie));for(const H of j)b.meals.push({id:pe(),planId:V.id,dayOfWeek:H.dayOfWeek,mealType:H.mealType,recipeId:H.recipeId,assignedToMemberId:ie,completed:!1,servingsMultiplier:1,isEatingOut:!1,isFasting:!1,notes:null,order:0});return _i(V)})),remove:async()=>(await U(),re(()=>{const e=je(),t=sr(Ke(e));if(!t)throw new Error("No hay plan para esta semana");return b.meals=b.meals.filter(i=>i.planId!==t.id),b.mealPlans=b.mealPlans.filter(i=>i.id!==t.id),{message:"Plan semanal eliminado"}})),assignSlot:async e=>(await U(),re(()=>{const t=je(),i=e.planId?b.mealPlans.find(E=>E.id===e.planId&&E.familyId===b.family.id):mi(t);if(!i)throw new Error("Plan no encontrado");const a=e.servingsMultiplier??1,l=e.isEatingOut??!1,d=e.isFasting??!1,p=b.meals.find(E=>E.planId===i.id&&E.dayOfWeek===e.dayOfWeek&&E.mealType===e.mealType&&(!e.assignedToMemberId||E.assignedToMemberId===e.assignedToMemberId));if(p)return p.recipeId=e.recipeId,p.completed=!1,p.servingsMultiplier=a,p.assignedToMemberId=e.assignedToMemberId??p.assignedToMemberId,p.isEatingOut=l,p.isFasting=d,Tn(p);const f={id:pe(),planId:i.id,dayOfWeek:e.dayOfWeek,mealType:e.mealType,recipeId:e.recipeId,servingsMultiplier:a,assignedToMemberId:e.assignedToMemberId??null,isEatingOut:l,isFasting:d,completed:!1,notes:null,order:0};return b.meals.push(f),Tn(f)})),removeSlot:async(e,t,i)=>(await U(),re(()=>{const a=je(),l=sr(Ke(a));if(!l)throw new Error("No hay plan para esta semana");const d=b.meals.filter(f=>f.planId===l.id&&f.dayOfWeek===e&&f.mealType===t&&(!i||f.assignedToMemberId===i));if(d.length===0)throw new Error("No hay comida en esa posición");const p=new Set(d.map(f=>f.id));return b.meals=b.meals.filter(f=>!p.has(f.id)),{message:"Comida(s) eliminada(s) del plan"}})),suggestions:async(e=5)=>(await U(),[...Un().filter(a=>a.isPublic&&a.familyId===null).slice(0,50)].sort(()=>Math.random()-.5).slice(0,e)),progress:async e=>{await U();const t=je(),i=e?b.members.filter(d=>d.id===e):b.members;if(i.length===0)return{withinRange:!0,current:null,target:null,message:"Sin familia"};if(!sr(Ke(t)))return{withinRange:!0,current:null,target:null,message:"Sin plan aún"};const l=i.map(d=>Il(d,t)).filter(d=>d!==null);return e?ce(l[0]??{withinRange:!0,current:null,target:null,message:"Sin plan aún"}):l.length===0?{withinRange:!0,current:null,target:null,message:"Sin plan aún"}:ce(l)},cook:async e=>(await U(),re(()=>{var d,p;const t=b.meals.find(f=>f.id===e&&b.mealPlans.some(E=>E.id===f.planId&&E.familyId===b.family.id));if(!t)throw new Error("Comida no encontrada");if(!t.recipeId)throw new Error("Esta comida no tiene receta asignada");const i=ht(t.recipeId);if(!i)throw new Error("Esta comida no tiene receta asignada");if(t.completed)return{alreadyCooked:!0,summary:[]};const a=new Map;for(const f of b.pantryItems){const E=a.get(f.foodId);E?E.push(f):a.set(f.foodId,[f])}const l=[];for(const f of i.ingredients){const E=(a.get(f.foodId)??[]).filter(H=>H.unit===f.unit),P=E.reduce((H,le)=>H+le.quantity,0);if(E.length===0){l.push({name:((d=f.food)==null?void 0:d.name)??"?",subtracted:0,remaining:0,unit:f.unit});continue}const j=i.servings&&i.servings>0?i.servings:1,N=f.quantity/j*t.servingsMultiplier,{consumption:V,totalSubtracted:ie}=dl(E.map(H=>({id:H.id,quantity:H.quantity,expiryDate:H.expiryDate})),N);for(const H of V){const le=b.pantryItems.find(Ie=>Ie.id===H.id);le.quantity=H.remaining,le.updatedAt=new Date}l.push({name:((p=f.food)==null?void 0:p.name)??"?",subtracted:ie,remaining:Math.round((P-ie)*10)/10,unit:E[0].unit})}return t.completed=!0,{alreadyCooked:!1,summary:l}})),history:async e=>{await U();const t=e??8,i=je(),a=Ke(i);return b.mealPlans.filter(d=>d.familyId===b.family.id&&d.weekKey<a&&b.meals.some(p=>p.planId===d.id)).sort((d,p)=>d.weekKey<p.weekKey?1:-1).slice(0,t).map(d=>ce({id:d.id,weekStart:d.weekStart,autoGenerated:d.autoGenerated,mealCount:b.meals.filter(p=>p.planId===d.id).length}))},repeat:async e=>(await U(),re(()=>{const t=je(),i=Ke(t),a=e!=null&&e.sourcePlanId?b.mealPlans.find(f=>f.id===e.sourcePlanId&&f.familyId===b.family.id):sr(Ke(Qs(t,-7)));if(!a)throw new Error("No hay un plan anterior para repetir");const l=b.meals.filter(f=>f.planId===a.id);if(l.length===0)throw new Error("No hay un plan anterior para repetir");if(a.weekKey===i)throw new Error("No puedes repetir la semana actual sobre sí misma");const d=e!=null&&e.assignedToMemberId?l.filter(f=>f.assignedToMemberId===e.assignedToMemberId):l;if(d.length===0)throw new Error("El plan de origen no tiene comidas para ese miembro");const p=mi(t);p.autoGenerated=!1,p.updatedAt=new Date,e!=null&&e.assignedToMemberId?b.meals=b.meals.filter(f=>!(f.planId===p.id&&f.assignedToMemberId===e.assignedToMemberId)):b.meals=b.meals.filter(f=>f.planId!==p.id);for(const f of d)b.meals.push({id:pe(),planId:p.id,dayOfWeek:f.dayOfWeek,mealType:f.mealType,recipeId:f.recipeId,servingsMultiplier:f.servingsMultiplier,order:f.order,isEatingOut:f.isEatingOut,isFasting:f.isFasting,notes:f.notes,completed:!1,assignedToMemberId:(e==null?void 0:e.assignedToMemberId)??f.assignedToMemberId});return _i(p)}))};function Wa(e){return b.mealPlans.find(t=>t.familyId===b.family.id&&t.weekKey===e)}const Pr={list:async()=>(await U(),vl()),get:async e=>{await U();const t=Va(e);if(!t)throw new Error("Plantilla no encontrada");return t},create:async e=>(await U(),re(()=>{const t=je(),i=Wa(Ke(t)),a=i?b.meals.filter(f=>f.planId===i.id):[];if(!i||a.length===0)throw new Error("No hay plan semanal para guardar como plantilla");const l=new Date,d=pe(),p={id:d,familyId:b.family.id,name:e.name,description:e.description??null,goal:null,isSystem:!1,createdAt:l,updatedAt:l,meals:a.filter(f=>f.recipeId).map(f=>({id:pe(),templateId:d,dayOfWeek:f.dayOfWeek,mealType:f.mealType,recipeId:f.recipeId,servingsMultiplier:f.servingsMultiplier??1,order:f.order}))};return b.templates.push(p),Va(d)})),remove:async e=>(await U(),re(()=>{if(!b.templates.find(i=>i.id===e&&i.familyId===b.family.id))throw new Error("Plantilla no encontrada");return b.templates=b.templates.filter(i=>i.id!==e),{message:"Plantilla eliminada"}})),apply:async(e,t)=>(await U(),re(()=>{const i=_l(e);if(!i)throw new Error("Plantilla no encontrada");const a=je(),l=Ke(a),d=Wa(l);d&&(b.meals=b.meals.filter(P=>P.planId!==d.id),b.mealPlans=b.mealPlans.filter(P=>P.id!==d.id));const p=(t==null?void 0:t.assignedToMemberId)||null,f=new Date,E={id:pe(),familyId:b.family.id,weekStart:a,weekKey:l,autoGenerated:!1,createdAt:f,updatedAt:f};b.mealPlans.push(E);for(const P of i.meals)b.meals.push({id:pe(),planId:E.id,dayOfWeek:P.dayOfWeek,mealType:P.mealType,recipeId:P.recipeId,servingsMultiplier:P.servingsMultiplier,order:P.order,assignedToMemberId:p,completed:!1,isEatingOut:!1,isFasting:!1,notes:null});return _i(E)}))};function En(e){return b.shoppingLists.find(t=>t.familyId===b.family.id&&t.weekKey===e)}function wo(e){const t=Ke(e),i=b.mealPlans.find(l=>l.familyId===b.family.id&&l.weekKey===t);if(!i)return new Map;const a=b.meals.filter(l=>l.planId===i.id&&!l.isFasting&&!l.isEatingOut&&!l.completed).map(l=>{const d=l.recipeId?ht(l.recipeId):null;return{servingsMultiplier:l.servingsMultiplier,recipe:d?{servings:d.servings,ingredients:d.ingredients.map(p=>{var f;return{foodId:p.foodId,foodName:((f=p.food)==null?void 0:f.name)??"?",quantity:p.quantity,unit:p.unit}})}:null}});return Ys(a)}function xo(){const e=new Map;for(const t of b.pantryItems){const i=`${t.foodId}|${t.unit}`;e.set(i,(e.get(i)??0)+t.quantity)}return e}function $o(e){return ce({...e,food:ur(e.foodId)})}function Fn(e){return ce({...e,householdItem:e.householdItemId?_o(e.householdItemId):null})}function Io(e){const t=b.shoppingSectionItems.filter(i=>i.sectionId===e.id).sort((i,a)=>i.sortOrder-a.sortOrder).map(Fn);return ce({...e,items:t})}function ko(e){const t=b.shoppingItems.filter(a=>a.listId===e.id).map($o),i=b.shoppingSections.filter(a=>a.listId===e.id).sort((a,l)=>a.sortOrder-l.sortOrder).map(Io);return ce({...e,items:t,sections:i})}function kl(e){const t=wo(e.weekStart),i=xo(),a=b.shoppingItems.filter(p=>p.listId===e.id),l=new Map(a.map(p=>[p.foodId,p]));for(const[p,f]of t){const E=po(i,p,f.unit),P=Math.max(0,f.total-E),j=E>=f.total,N=l.get(p),V=((N==null?void 0:N.purchased)??!1)||j;N?(N.totalNeeded=f.total,N.inPantry=E,N.toBuy=P,N.purchased=V,N.unit=f.unit):b.shoppingItems.push({id:pe(),listId:e.id,foodId:p,totalNeeded:f.total,inPantry:E,toBuy:P,unit:f.unit,purchased:V})}const d=new Set(t.keys());return b.shoppingItems=b.shoppingItems.filter(p=>p.listId!==e.id||d.has(p.foodId)),ko(e)}const pt={current:async()=>(await U(),re(()=>{const e=je(),t=En(Ke(e));return t?kl(t):{items:[],sections:[],message:"Aún no se ha generado la lista"}})),generate:async()=>(await U(),re(()=>{const e=je(),t=Ke(e),i=wo(e),a=b.mealPlans.find(f=>f.familyId===b.family.id&&f.weekKey===t);if(i.size===0&&!a)throw new Error("No hay plan semanal para esta semana");const l=En(t);l&&(b.shoppingSectionItems=b.shoppingSectionItems.filter(f=>!b.shoppingSections.some(E=>E.id===f.sectionId&&E.listId===l.id)),b.shoppingSections=b.shoppingSections.filter(f=>f.listId!==l.id),b.shoppingItems=b.shoppingItems.filter(f=>f.listId!==l.id),b.shoppingLists=b.shoppingLists.filter(f=>f.id!==l.id));const d=xo(),p={id:pe(),familyId:b.family.id,weekStart:e,weekKey:t,createdAt:new Date};b.shoppingLists.push(p);for(const f of i.values()){const E=po(d,f.foodId,f.unit),P=Math.max(0,f.total-E);b.shoppingItems.push({id:pe(),listId:p.id,foodId:f.foodId,totalNeeded:f.total,inPantry:E,toBuy:P,unit:f.unit,purchased:E>=f.total})}return ko(p)})),toggleItem:async e=>(await U(),re(()=>{const t=b.shoppingItems.find(i=>i.id===e&&b.shoppingLists.some(a=>a.id===i.listId&&a.familyId===b.family.id));if(!t)throw new Error("Item no encontrado");return t.purchased=!t.purchased,$o(t)})),createSection:async e=>(await U(),re(()=>{const t=je(),i=Ke(t);let a=En(i);a||(a={id:pe(),familyId:b.family.id,weekStart:t,weekKey:i,createdAt:new Date},b.shoppingLists.push(a));const l=Math.max(-1,...b.shoppingSections.filter(p=>p.listId===a.id).map(p=>p.sortOrder)),d={id:pe(),listId:a.id,name:e,sortOrder:l+1,createdAt:new Date};return b.shoppingSections.push(d),Io(d)})),addSectionItem:async(e,t)=>(await U(),re(()=>{const i=b.shoppingSections.find(d=>d.id===e&&b.shoppingLists.some(p=>p.id===d.listId&&p.familyId===b.family.id));if(!i)throw new Error("Sección no encontrada");const a=Math.max(-1,...b.shoppingSectionItems.filter(d=>d.sectionId===i.id).map(d=>d.sortOrder)),l={id:pe(),sectionId:i.id,name:t.name,quantity:t.quantity??1,purchased:!1,sortOrder:a+1,householdItemId:t.householdItemId??null};return b.shoppingSectionItems.push(l),Fn(l)})),toggleSectionItem:async(e,t)=>(await U(),re(()=>{const i=b.shoppingSectionItems.find(l=>l.id===e&&b.shoppingSections.some(d=>d.id===l.sectionId&&b.shoppingLists.some(p=>p.id===d.listId&&p.familyId===b.family.id)));if(!i)throw new Error("Artículo no encontrado");const a=i.purchased;if(i.purchased=t,t&&!a&&i.householdItemId){const l=b.family.id,d=b.householdStockItems.find(p=>p.familyId===l&&p.householdItemId===i.householdItemId);if(d)d.quantity+=i.quantity,d.updatedAt=new Date;else{const p=new Date;b.householdStockItems.push({id:pe(),familyId:l,householdItemId:i.householdItemId,quantity:i.quantity,unit:"UNIDAD",minThreshold:null,notes:null,createdAt:p,updatedAt:p})}}return Fn(i)})),removeSectionItem:async e=>(await U(),re(()=>{const t=b.shoppingSectionItems.findIndex(i=>i.id===e&&b.shoppingSections.some(a=>a.id===i.sectionId&&b.shoppingLists.some(l=>l.id===a.listId&&l.familyId===b.family.id)));if(t===-1)throw new Error("Artículo no encontrado");return b.shoppingSectionItems.splice(t,1),{message:"Artículo eliminado"}}))};function fi(e){return ce({...e,householdItem:_o(e.householdItemId)})}const Nt={items:async e=>(await U(),wl(e)),createItem:async e=>(await U(),re(()=>{const t={id:pe(),name:e.name,category:e.category??null,unit:e.unit??"UNIDAD",familyId:b.family.id,createdAt:new Date};return b.householdItems.push(t),ce(t)})),stock:async()=>(await U(),[...b.householdStockItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(fi)),addStock:async e=>(await U(),re(()=>{const t=b.family.id,i=b.householdStockItems.find(d=>d.familyId===t&&d.householdItemId===e.householdItemId);if(i)return i.quantity+=e.quantity,i.unit=e.unit??i.unit,i.minThreshold=e.minThreshold??i.minThreshold,i.notes=e.notes??i.notes,i.updatedAt=new Date,fi(i);const a=new Date,l={id:pe(),familyId:t,householdItemId:e.householdItemId,quantity:e.quantity,unit:e.unit??"UNIDAD",minThreshold:e.minThreshold??null,notes:e.notes??null,createdAt:a,updatedAt:a};return b.householdStockItems.push(l),fi(l)})),updateStock:async(e,t)=>(await U(),re(()=>{const i=b.householdStockItems.find(a=>a.id===e&&a.familyId===b.family.id);if(!i)throw new Error("Artículo no encontrado");return t.quantity!==void 0&&(i.quantity=t.quantity),t.unit!==void 0&&(i.unit=t.unit),t.minThreshold!==void 0&&(i.minThreshold=t.minThreshold),t.notes!==void 0&&(i.notes=t.notes),i.updatedAt=new Date,fi(i)})),removeStock:async e=>(await U(),re(()=>{const t=b.householdStockItems.findIndex(i=>i.id===e&&i.familyId===b.family.id);if(t===-1)throw new Error("Artículo no encontrado");return b.householdStockItems.splice(t,1),{message:"Artículo eliminado"}}))};function Rn(e){return e==="DIARIA"?uo(new Date):je()}function El(e){if(!e)return null;const t=b.members.find(i=>i.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function gi(e){const t=Rn(e.frequency),a=b.choreCompletions.filter(l=>l.choreId===e.id&&l.date>=t).length>0;return ce({...e,member:El(e.assignedToMemberId),completedInPeriod:a})}const nr={list:async()=>(await U(),b.chores.filter(e=>e.familyId===b.family.id&&e.active).sort((e,t)=>e.createdAt.getTime()-t.createdAt.getTime()).map(gi)),create:async e=>(await U(),re(()=>{const t={id:pe(),familyId:b.family.id,name:e.name,frequency:e.frequency,assignedToMemberId:e.assignedToMemberId??null,active:!0,createdAt:new Date};return b.chores.push(t),gi(t)})),update:async(e,t)=>(await U(),re(()=>{const i=b.chores.find(a=>a.id===e&&a.familyId===b.family.id);if(!i)throw new Error("Tarea no encontrada");return Object.assign(i,t),gi(i)})),remove:async e=>(await U(),re(()=>{const t=b.chores.findIndex(i=>i.id===e&&i.familyId===b.family.id);if(t===-1)throw new Error("Tarea no encontrada");return b.chores.splice(t,1),{message:"Tarea eliminada"}})),complete:async(e,t)=>(await U(),re(()=>{const i=b.chores.find(d=>d.id===e&&d.familyId===b.family.id);if(!i)throw new Error("Tarea no encontrada");if(t&&!b.members.some(d=>d.id===t))throw new Error("Miembro no encontrado");const a=Rn(i.frequency);return b.choreCompletions.find(d=>d.choreId===i.id&&d.date>=a)?{completedInPeriod:!0}:(b.choreCompletions.push({id:pe(),choreId:i.id,date:new Date,completedByMemberId:t??null}),{completedInPeriod:!0})})),uncomplete:async e=>(await U(),re(()=>{const t=b.chores.find(a=>a.id===e&&a.familyId===b.family.id);if(!t)throw new Error("Tarea no encontrada");const i=Rn(t.frequency);return b.choreCompletions=b.choreCompletions.filter(a=>!(a.choreId===t.id&&a.date>=i)),{completedInPeriod:!1}})),templates:async()=>(await U(),Ua.map(e=>({id:e.id,name:e.name,description:e.description,choreCount:e.chores.length}))),applyTemplate:async e=>(await U(),re(()=>{const t=Ua.find(f=>f.id===e);if(!t)throw new Error("Plantilla no encontrada");const i=b.family.id,a=new Set(b.chores.filter(f=>f.familyId===i&&f.active).map(f=>xn(f.name))),l=t.chores.filter(f=>!a.has(xn(f.name))),d=t.chores.filter(f=>a.has(xn(f.name))).map(f=>f.name);return{created:l.map(f=>{const E={id:pe(),familyId:i,name:f.name,frequency:f.frequency,assignedToMemberId:null,active:!0,createdAt:new Date};return b.chores.push(E),gi(E)}),skipped:d}}))};function Qa(){return!0}async function Sl(){return await U(),JSON.stringify(As(b),null,2)}async function Cl(e){await U();const t=Ds(JSON.parse(e)),{store:i,report:a,catalogVersionMismatch:l}=Os(t);return await Gs(i),{report:a,catalogVersionMismatch:l}}async function Ml(){await U(),await Hs()}var Al=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,pr=(e,t,i,a)=>{for(var l=a>1?void 0:a?Dl(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Al(t,i,l),l};let It=class extends ze{constructor(){super(...arguments),this.message="",this._email="",this._password="",this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t=await dr.login({email:this._email,password:this._password});t.accessToken,t.refreshToken,this.dispatchEvent(new CustomEvent("login-success"))}catch(t){this._error=t.message||"Error al iniciar sesión"}finally{this._loading=!1}},this._dispatchRegister=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("register"))}}render(){return g`
      <div class="card">
        <h1>MealPrepHelper</h1>
        <p class="sub">Inicia sesión para continuar</p>

        ${this.message?g`<div class="notice">${this.message}</div>`:""}
        ${this._error?g`<div class="error">${this._error}</div>`:""}

        <form @submit=${this._handleSubmit}>
          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              .value=${this._email}
              @input=${e=>{this._email=e.target.value}}
              required
              autocomplete="email"
              placeholder="tu@email.com"
            />
          </div>

          <div class="field">
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              .value=${this._password}
              @input=${e=>{this._password=e.target.value}}
              required
              autocomplete="current-password"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" ?disabled=${this._loading}>
            ${this._loading?"Entrando...":"Entrar"}
          </button>
        </form>

        <div class="footer">
          ¿No tienes cuenta? <a @click=${this._dispatchRegister}>Regístrate</a>
        </div>
      </div>
    `}};It.styles=Xe`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100dvh;
      background: var(--bg);
    }

    .card {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 2rem;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    h1 {
      font-size: 1.5rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    p.sub {
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }

    .field {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
      color: var(--text);
    }

    input {
      width: 100%;
      padding: 0.625rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s;
    }

    input:focus {
      border-color: var(--primary);
    }

    button {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      font-family: inherit;
      background: var(--primary);
      color: white;
      cursor: pointer;
      transition: background 0.15s;
    }

    button:hover {
      background: var(--primary-hover);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
    }

    .notice {
      background: #eff6ff;
      color: #1d4ed8;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
    }

    .footer {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.8125rem;
      color: var(--text-muted);
    }

    .footer a {
      color: var(--primary);
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  `;pr([ao({type:String})],It.prototype,"message",2);pr([C()],It.prototype,"_email",2);pr([C()],It.prototype,"_password",2);pr([C()],It.prototype,"_error",2);pr([C()],It.prototype,"_loading",2);It=pr([Je("login-page")],It);var Pl=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,kt=(e,t,i,a)=>{for(var l=a>1?void 0:a?Ol(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Pl(t,i,l),l};let at=class extends ze{constructor(){super(...arguments),this._name="",this._email="",this._password="",this._familyName="",this._extraMembers=[],this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t={name:this._name,email:this._email,password:this._password,familyName:this._familyName||`Familia de ${this._name}`,members:[{name:this._name},...this._extraMembers.filter(a=>a.trim()).map(a=>({name:a.trim()}))]},i=await dr.register(t);i.accessToken,i.refreshToken,this.dispatchEvent(new CustomEvent("register-success"))}catch(t){this._error=t.message||"Error al registrarse"}finally{this._loading=!1}},this._dispatchLogin=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("login"))}}_addMember(){this._extraMembers=[...this._extraMembers,""]}_updateMember(e,t){const i=[...this._extraMembers];i[e]=t,this._extraMembers=i}_removeMember(e){this._extraMembers=this._extraMembers.filter((t,i)=>i!==e)}render(){return g`
      <div class="card">
        <h1>Crear cuenta</h1>
        <p class="sub">Regístrate para empezar a planificar tus comidas</p>

        ${this._error?g`<div class="error">${this._error}</div>`:""}

        <form @submit=${this._handleSubmit}>
          <div class="field">
            <label for="name">Tu nombre</label>
            <input
              id="name"
              type="text"
              .value=${this._name}
              @input=${e=>{this._name=e.target.value}}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              .value=${this._email}
              @input=${e=>{this._email=e.target.value}}
              required
              autocomplete="email"
              placeholder="tu@email.com"
            />
          </div>

          <div class="field">
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              .value=${this._password}
              @input=${e=>{this._password=e.target.value}}
              required
              minlength="8"
              autocomplete="new-password"
              placeholder="••••••••"
            />
          </div>

          <div class="family-section">
            <div class="field" style="margin-bottom:0.75rem">
              <label for="familyName">Nombre de la familia (opcional)</label>
              <input
                id="familyName"
                type="text"
                .value=${this._familyName}
                @input=${e=>{this._familyName=e.target.value}}
                placeholder="Familia de ${this._name||"..."}"
              />
            </div>

            <label style="font-size:0.85rem;font-weight:500;margin-bottom:0.5rem;display:block">Miembros adicionales</label>
            ${this._extraMembers.map((e,t)=>g`
              <div class="extra-member-row">
                <input type="text" .value=${e}
                  @input=${i=>{this._updateMember(t,i.target.value)}}
                  placeholder="Nombre del miembro" />
                <button type="button" @click=${()=>this._removeMember(t)}>✕</button>
              </div>
            `)}
            <button type="button" class="add-btn" @click=${this._addMember}>+ Añadir miembro</button>
          </div>

          <button type="submit" ?disabled=${this._loading}>
            ${this._loading?"Creando cuenta...":"Crear cuenta"}
          </button>
        </form>

        <div class="footer">
          ¿Ya tienes cuenta? <a @click=${this._dispatchLogin}>Inicia sesión</a>
        </div>
      </div>
    `}};at.styles=Xe`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100dvh;
      background: var(--bg);
    }

    .card {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 2rem;
      width: 100%;
      max-width: 440px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    h1 {
      font-size: 1.5rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    p.sub {
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }

    .field {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
      color: var(--text);
    }

    input {
      width: 100%;
      padding: 0.625rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--primary);
    }

    .family-section {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .extra-member-row {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .extra-member-row input {
      flex: 1;
    }

    .extra-member-row button {
      background: #fef2f2;
      color: #dc2626;
      border: 1px solid #fecaca;
      border-radius: 6px;
      padding: 0.4rem 0.6rem;
      font-size: 0.8rem;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
    }

    .add-btn {
      background: none;
      border: 1px dashed var(--border);
      border-radius: 6px;
      padding: 0.4rem 0.75rem;
      font-size: 0.8rem;
      color: var(--primary);
      cursor: pointer;
      font-family: inherit;
      width: 100%;
      transition: background 0.15s;
    }

    .add-btn:hover {
      background: #eef2ff;
    }

    button[type="submit"] {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      font-family: inherit;
      background: var(--primary);
      color: white;
      cursor: pointer;
      transition: background 0.15s;
    }

    button[type="submit"]:hover {
      background: var(--primary-hover);
    }

    button[type="submit"]:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
    }

    .footer {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.8125rem;
      color: var(--text-muted);
    }

    .footer a {
      color: var(--primary);
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  `;kt([C()],at.prototype,"_name",2);kt([C()],at.prototype,"_email",2);kt([C()],at.prototype,"_password",2);kt([C()],at.prototype,"_familyName",2);kt([C()],at.prototype,"_extraMembers",2);kt([C()],at.prototype,"_error",2);kt([C()],at.prototype,"_loading",2);at=kt([Je("register-page")],at);var Tl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,Ne=(e,t,i,a)=>{for(var l=a>1?void 0:a?Fl(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Tl(t,i,l),l};const Rl=[{value:"SEDENTARIO",label:"Sedentario (poco o nada de ejercicio)"},{value:"LIGERO",label:"Ligero (1-3 días/semana)"},{value:"MODERADO",label:"Moderado (3-5 días/semana)"},{value:"ACTIVO",label:"Activo (6-7 días/semana)"}],zl=[{value:"PERDER_PESO",label:"Perder peso"},{value:"MANTENER",label:"Mantener peso"},{value:"GANAR_MUSCULO",label:"Ganar músculo"}],Nl=["Vegetariano","Vegano","Sin gluten","Sin lactosa","Sin frutos secos","Sin huevo","Bajo en sodio","Diabético"];let Ce=class extends ze{constructor(){super(...arguments),this._members=[],this._selectedMemberId="",this._onboardedIds=new Set,this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[],this._error="",this._success="",this._saving=!1,this._loading=!0,this._handleSubmit=async e=>{var t;if(e.preventDefault(),this._error="",this._success="",!this._sex||!this._activityLevel||!this._goal){this._error="Completa todos los campos obligatorios";return}this._saving=!0;try{await fl.onboarding({memberId:this._selectedMemberId,age:Number(this._age),weightKg:Number(this._weightKg),heightCm:Number(this._heightCm),sex:this._sex,activityLevel:this._activityLevel,goal:this._goal,restrictions:this._restrictions}),this._onboardedIds=new Set([...this._onboardedIds,this._selectedMemberId]);const i=((t=this._selectedMember)==null?void 0:t.name)||"";this._success=`Perfil de ${i} guardado correctamente`}catch(i){this._error=i.message||"Error al guardar perfil"}finally{this._saving=!1}}}connectedCallback(){super.connectedCallback(),this._load()}async _load(){var e;try{const t=await dr.me();if(this._members=((e=t.family)==null?void 0:e.members)||[],this._members.length>0){this._selectMember(this._members[0].id);const i=this._members.filter(a=>a.dailyCalories).map(a=>a.id);this._onboardedIds=new Set(i)}}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}_selectMember(e){this._selectedMemberId=e,this._error="",this._success="";const t=this._members.find(i=>i.id===e);t&&t.dailyCalories?(this._age=String(t.age??""),this._weightKg=String(t.weightKg??""),this._heightCm=String(t.heightCm??""),this._sex=t.sex??"",this._activityLevel=t.activityLevel??"",this._goal=t.goal??"",this._restrictions=t.restrictions||[]):(this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[])}get _selectedMember(){return this._members.find(e=>e.id===this._selectedMemberId)}get _pendingMembers(){return this._members.filter(e=>!this._onboardedIds.has(e.id))}_toggleRestriction(e){this._restrictions.includes(e)?this._restrictions=this._restrictions.filter(t=>t!==e):this._restrictions=[...this._restrictions,e]}_handleSkip(){this._onboardedIds=new Set([...this._onboardedIds,this._selectedMemberId]);const e=this._pendingMembers[0];e&&this._selectMember(e.id)}_handleContinue(){this.dispatchEvent(new CustomEvent("onboarding-complete"))}_nextPendingMember(){const e=this._pendingMembers[0];e&&this._selectMember(e.id)}render(){var t;if(this._loading)return g`<div class="card"><p>Cargando...</p></div>`;const e=this._members.length>0&&this._pendingMembers.length===0;return g`
      <div class="card">
        <h1>Tu perfil nutricional</h1>
        <p class="sub">Configura los datos de cada miembro de la familia</p>

        ${this._error?g`<div class="error">${this._error}</div>`:""}

        ${e?g`
          <div class="all-done">
            <p>✅ Todos los miembros tienen su perfil configurado</p>
            <button @click=${this._handleContinue}>Ir al plan semanal</button>
          </div>
        `:g`
          <div class="member-bar">
            <select .value=${this._selectedMemberId} @change=${i=>this._selectMember(i.target.value)}>
              ${this._members.map(i=>g`
                <option value=${i.id}>
                  ${i.name}${this._onboardedIds.has(i.id)?" ✅":""}
                </option>
              `)}
            </select>
            ${this._onboardedIds.has(this._selectedMemberId)?g`<span class="badge-done">Completado</span>`:""}
          </div>

          <div class="info-box">
            ${((t=this._selectedMember)==null?void 0:t.name)||"Este miembro"} — completa sus datos nutricionales para calcular las necesidades diarias.
          </div>

          ${this._success?g`<div class="success">
            <span>${this._success}</span>
            ${this._pendingMembers.length>0?g`
              <button @click=${this._nextPendingMember}>Siguiente: ${this._pendingMembers[0].name}</button>
            `:""}
          </div>`:""}

          <form @submit=${this._handleSubmit}>
            <div class="row">
              <div class="field">
                <label for="age">Edad</label>
                <input id="age" type="number" .value=${this._age} @input=${i=>{this._age=i.target.value}} min="1" max="120" required placeholder="28" />
              </div>
              <div class="field">
                <label for="weight">Peso (kg)</label>
                <input id="weight" type="number" .value=${this._weightKg} @input=${i=>{this._weightKg=i.target.value}} min="5" max="400" step="0.1" required placeholder="70" />
              </div>
              <div class="field">
                <label for="height">Altura (cm)</label>
                <input id="height" type="number" .value=${this._heightCm} @input=${i=>{this._heightCm=i.target.value}} min="40" max="250" required placeholder="175" />
              </div>
            </div>

            <div class="field">
              <label for="sex">Sexo biológico</label>
              <select id="sex" .value=${this._sex} @change=${i=>{this._sex=i.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENINO">Femenino</option>
              </select>
            </div>

            <div class="field">
              <label for="activity">Nivel de actividad física</label>
              <select id="activity" .value=${this._activityLevel} @change=${i=>{this._activityLevel=i.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                ${Rl.map(i=>g`<option value=${i.value}>${i.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label for="goal">Objetivo nutricional</label>
              <select id="goal" .value=${this._goal} @change=${i=>{this._goal=i.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                ${zl.map(i=>g`<option value=${i.value}>${i.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label>Restricciones dietéticas (opcional)</label>
              <div class="check-grid">
                ${Nl.map(i=>g`
                    <label class="check-label">
                      <input type="checkbox" ?checked=${this._restrictions.includes(i)} @change=${()=>this._toggleRestriction(i)} />
                      ${i}
                    </label>
                  `)}
              </div>
            </div>

            <div class="btn-row">
              <button type="submit" class="btn-primary" ?disabled=${this._saving}>
                ${this._saving?"Guardando...":"Guardar perfil"}
              </button>
              <button type="button" class="btn-outline" @click=${this._handleSkip}>Saltar</button>
            </div>
          </form>

          ${this._onboardedIds.size>0?g`
            <div style="margin-top:1rem;text-align:center">
              <button class="btn-outline" style="padding:0.5rem 1.5rem;border-radius:8px;font-size:0.85rem;cursor:pointer;font-family:inherit;background:var(--surface);color:var(--primary);border:1px solid var(--primary)" @click=${this._handleContinue}>
                Continuar al plan semanal
              </button>
            </div>
          `:""}
        `}
      </div>
    `}};Ce.styles=Xe`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100dvh;
      background: var(--bg);
      padding: 1rem;
    }

    .card {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 2rem;
      width: 100%;
      max-width: 540px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    h1 {
      font-size: 1.375rem;
      color: var(--text);
      margin-bottom: 0.25rem;
    }

    p.sub {
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }

    .member-bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }

    .member-bar select {
      flex: 1;
      min-width: 140px;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: inherit;
      background: var(--bg);
      color: var(--text);
    }

    .badge-done {
      background: #dcfce7;
      color: #16a34a;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      white-space: nowrap;
    }

    .field {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.25rem;
    }

    input, select {
      width: 100%;
      padding: 0.625rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s;
      box-sizing: border-box;
    }

    input:focus, select:focus {
      border-color: var(--primary);
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.75rem;
    }

    .check-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .check-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      cursor: pointer;
      padding: 0.25rem 0;
    }

    .check-label input {
      width: auto;
      accent-color: var(--primary);
    }

    .info-box {
      background: #f0f5ff;
      border: 1px solid #dbeafe;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      font-size: 0.8125rem;
      color: #1e40af;
      margin-bottom: 1.25rem;
    }

    .btn-row {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .btn-row button {
      flex: 1;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.15s;
    }

    .btn-primary {
      background: var(--primary);
      color: white;
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-outline {
      background: var(--surface);
      color: var(--text-muted);
      border: 1px solid var(--border) !important;
    }

    .btn-outline:hover {
      background: #f1f5f9;
    }

    .btn-success {
      background: #16a34a;
      color: white;
    }

    .btn-success:hover {
      background: #15803d;
    }

    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.8125rem;
      margin-bottom: 1rem;
    }

    .success {
      background: #f0fdf4;
      color: #16a34a;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .success button {
      background: #16a34a;
      color: white;
      border: 1px solid #15803d;
      border-radius: 6px;
      padding: 0.3rem 0.75rem;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
    }

    .success button:hover {
      background: #15803d;
    }

    .all-done {
      text-align: center;
      padding: 2rem 0;
    }

    .all-done p {
      font-size: 1rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }

    .all-done button {
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      font-family: inherit;
      background: var(--primary);
      color: white;
      cursor: pointer;
    }

    .all-done button:hover {
      background: var(--primary-hover);
    }

    @media (max-width: 640px) {
      .row { grid-template-columns: 1fr; }
      .check-grid { grid-template-columns: 1fr 1fr; }
      .card { padding: 1rem; }
    }
  `;Ne([C()],Ce.prototype,"_members",2);Ne([C()],Ce.prototype,"_selectedMemberId",2);Ne([C()],Ce.prototype,"_onboardedIds",2);Ne([C()],Ce.prototype,"_age",2);Ne([C()],Ce.prototype,"_weightKg",2);Ne([C()],Ce.prototype,"_heightCm",2);Ne([C()],Ce.prototype,"_sex",2);Ne([C()],Ce.prototype,"_activityLevel",2);Ne([C()],Ce.prototype,"_goal",2);Ne([C()],Ce.prototype,"_restrictions",2);Ne([C()],Ce.prototype,"_error",2);Ne([C()],Ce.prototype,"_success",2);Ne([C()],Ce.prototype,"_saving",2);Ne([C()],Ce.prototype,"_loading",2);Ce=Ne([Je("onboarding-page")],Ce);var ql=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,Z=(e,t,i,a)=>{for(var l=a>1?void 0:a?Ll(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&ql(t,i,l),l};const Ya="mpp.useExpiring",Xa="mpp.expiryWarningDismissedWeek",Sn=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],Cn=[{value:"DESAYUNO",label:"Desayuno"},{value:"TENTEMPIE",label:"Tentempié"},{value:"ALMUERZO",label:"Almuerzo"},{value:"MERIENDA",label:"Merienda"},{value:"CENA",label:"Cena"}],jl={calories:"Calorías",proteinG:"Proteína",carbsG:"Carbohidratos",fatG:"Grasa"},Kl={calories:"kcal",proteinG:"g",carbsG:"g",fatG:"g"};let J=class extends ze{constructor(){super(...arguments),this._plan=null,this._loading=!0,this._error="",this._generating=!1,this._deleting=!1,this._useExpiring=!0,this._expiring=[],this._expiryDismissed=!1,this._progress=null,this._progressArray=null,this._showMenu=!1,this._editMode=!1,this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._showAllRecipes=!1,this._allRecipes=[],this._recipeSearch="",this._panelLoading=!1,this._assigning=!1,this._isEatingOut=!1,this._dragOverSlot="",this._expandedDay=1,this._multipliers={},this._members=[],this._selectedMemberId="",this._showSaveTemplate=!1,this._showLoadTemplate=!1,this._templateName="",this._templates=[],this._savingTemplate=!1,this._loadingTemplates=!1,this._applyingTemplate=!1,this._showRepeatWeek=!1,this._history=[],this._loadingHistory=!1,this._repeating=!1,this._detailRecipe=null,this._detailMealId=null,this._showRecipeDetail=!1,this._detailLoading=!1,this._cooking={},this._cookingSummary=null,this._showCookedSummary=!1,this._docClickHandler=e=>{this._showMenu&&(e.composedPath().some(a=>{var l,d;return(d=(l=a.classList)==null?void 0:l.contains)==null?void 0:d.call(l,"menu-container")})||(this._showMenu=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._docClickHandler),this._restorePreferences(),this._loadMembers().then(()=>this._loadPlan()),this._loadExpiring()}_restorePreferences(){try{this._useExpiring=localStorage.getItem(Ya)!=="false",this._expiryDismissed=localStorage.getItem(Xa)===this._weekKey()}catch{}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._docClickHandler)}async _loadMembers(){var e,t;try{const i=await dr.me();this._members=((e=i.family)==null?void 0:e.members)||[];const a=this._members.find(l=>l.dailyCalories);this._selectedMemberId=(a==null?void 0:a.id)||((t=this._members[0])==null?void 0:t.id)||""}catch{this._members=[]}}async _loadPlan(){var e,t;this._loading=!0,this._error="";try{if(this._plan=await Ye.current(this._selectedMemberId||void 0),(t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length){this._loadProgress();const i={};for(const a of this._plan.meals)i[`${a.dayOfWeek}-${a.mealType}`]=a.servingsMultiplier??1;this._multipliers=i}}catch{this._plan=null}finally{this._loading=!1}}async _loadProgress(){try{const e=await Ye.progress(this._selectedMemberId||void 0);Array.isArray(e)?(this._progressArray=e,this._progress=null):(this._progress=e,this._progressArray=null)}catch{this._progress=null,this._progressArray=null}}_onMemberChange(e){const t=e.target.value;this._selectedMemberId=t,this._loadPlan()}hasMeals(){var e,t;return!!((t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length)}async _generatePlan(){this._generating=!0,this._error="";try{this._plan=await Ye.generate(this._selectedMemberId||void 0,this._useExpiring),this._progress=null,this._loadProgress()}catch(e){this._error=e.message||"Error al generar el plan"}finally{this._generating=!1}}_toggleUseExpiring(e){this._useExpiring=e.target.checked;try{localStorage.setItem(Ya,String(this._useExpiring))}catch{}}async _loadExpiring(){try{const e=await wt.expiring();this._expiring=e.items||[]}catch{this._expiring=[]}}_unusedExpiring(){var t,i;const e=new Set;for(const a of((t=this._plan)==null?void 0:t.meals)||[])for(const l of((i=a.recipe)==null?void 0:i.ingredients)||[])l.foodId&&e.add(l.foodId);return this._expiring.filter(a=>!e.has(a.foodId))}_dismissExpiryWarning(){this._expiryDismissed=!0;try{localStorage.setItem(Xa,this._weekKey())}catch{}}_weekKey(){const e=new Date,t=e.getDay(),i=new Date(e);i.setDate(e.getDate()-t+(t===0?-6:1));const a=i.getFullYear(),l=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0");return`${a}-${l}-${d}`}async _deletePlan(){if(confirm("¿Eliminar el plan semanal actual?")){this._deleting=!0,this._error="";try{await Ye.remove(),this._plan=null,this._progress=null,this._progressArray=null,this._editMode=!1,this._showMenu=!1}catch(e){this._error=e.message||"Error al eliminar el plan"}finally{this._deleting=!1}}}_toggleMenu(){this._showMenu=!this._showMenu}_enterEditMode(){this._editMode=!0,this._showMenu=!1}_exitEditMode(){this._editMode=!1,this._closePanel()}async _openPanel(e,t){this._panelDay=e,this._panelMealType=t,this._showPanel=!0,this._recipeSearch="",this._showAllRecipes=!1;const i=this._getMeal(e,t);this._isEatingOut=(i==null?void 0:i.isEatingOut)??!1,this._panelLoading=!0;try{this._allRecipes=await or.list()}catch{this._allRecipes=[]}finally{this._panelLoading=!1}}_closePanel(){this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._allRecipes=[],this._recipeSearch="",this._showAllRecipes=!1}get _filteredRecipes(){let e=this._allRecipes;!this._showAllRecipes&&this._panelMealType&&(e=e.filter(i=>{var a;return(a=i.mealType)==null?void 0:a.includes(this._panelMealType)}));const t=this._recipeSearch.toLowerCase().trim();return t?e.filter(i=>i.name.toLowerCase().includes(t)):e}get _mealTypeFilteredCount(){return this._panelMealType?this._allRecipes.filter(e=>{var t;return(t=e.mealType)==null?void 0:t.includes(this._panelMealType)}).length:this._allRecipes.length}async _clearPlan(){if(confirm("¿Limpiar todas las comidas del plan?")){this._error="",this._progress=null,this._progressArray=null;try{await Ye.remove(),await this._loadPlan()}catch(e){this._error=e.message||"Error al limpiar el plan"}}}async _removeSlotMeal(e,t){if(confirm("¿Eliminar esta comida del plan?")){this._error="";try{await Ye.removeSlot(e,t,this._selectedMemberId||void 0),await this._loadPlan()}catch(i){this._error=i.message||"Error al eliminar comida"}}}_onDragStart(e,t){var i;(i=e.dataTransfer)==null||i.setData("text/plain",t),e.dataTransfer&&(e.dataTransfer.effectAllowed="copy")}_onDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")}_onDragEnter(e,t){this._dragOverSlot=`${e}-${t}`}_onDragLeave(e,t){this._dragOverSlot===`${e}-${t}`&&(this._dragOverSlot="")}_onDrop(e,t,i){var l;e.preventDefault();const a=(l=e.dataTransfer)==null?void 0:l.getData("text/plain");a&&(this._assigning||this._assignSlot(t,i,a))}async _assignSlot(e,t,i){this._assigning=!0;const a=`${e}-${t}`,l=this._multipliers[a]??1,d=this._isEatingOut;console.log("[assignSlot] payload:",{dayOfWeek:e,mealType:t,recipeId:i,servingsMultiplier:l,isEatingOut:d});try{await Ye.assignSlot({dayOfWeek:e,mealType:t,recipeId:i,servingsMultiplier:l,isEatingOut:d,assignedToMemberId:this._selectedMemberId||void 0}),this._showPanel&&e===this._panelDay&&t===this._panelMealType&&this._closePanel(),await this._loadPlan()}catch(p){this._error=p.message||"Error al asignar receta"}finally{this._assigning=!1}}_assignFromPanel(e){this._assignSlot(this._panelDay,this._panelMealType,e)}_adjustMultiplier(e,t,i){const a=`${e}-${t}`,l=this._multipliers[a]??1,d=Math.round((l+i)*10)/10;d<.5||d>5||(this._multipliers={...this._multipliers,[a]:d},this._persistMultiplier(e,t))}async _persistMultiplier(e,t){var d;const i=`${e}-${t}`,a=this._multipliers[i]??1,l=this._getMeal(e,t);if((d=l==null?void 0:l.recipe)!=null&&d.id)try{await Ye.assignSlot({dayOfWeek:e,mealType:t,recipeId:l.recipe.id,servingsMultiplier:a}),await this._loadPlan()}catch(p){this._error=p.message||"Error al actualizar ración",await this._loadPlan()}}async _saveTemplate(){if(this._templateName.trim()){this._savingTemplate=!0;try{await Pr.create({name:this._templateName.trim()}),this._showSaveTemplate=!1,this._templateName=""}catch(e){this._error=e.message||"Error al guardar plantilla"}finally{this._savingTemplate=!1}}}async _openLoadTemplate(){this._showLoadTemplate=!0,this._loadingTemplates=!0;try{this._templates=await Pr.list()}catch{this._templates=[]}finally{this._loadingTemplates=!1}}async _applyTemplate(e){if(!this._applyingTemplate){this._applyingTemplate=!0,this._error="";try{await Pr.apply(e,{assignedToMemberId:this._selectedMemberId||void 0}),this._showLoadTemplate=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=t.message||"Error al aplicar plantilla"}finally{this._applyingTemplate=!1}}}async _deleteTemplate(e,t){if(t.stopPropagation(),!!confirm("¿Eliminar esta plantilla?"))try{await Pr.remove(e),this._templates=await Pr.list()}catch(i){this._error=i.message||"Error al eliminar plantilla"}}async _openRepeatWeek(){this._showRepeatWeek=!0,this._loadingHistory=!0;try{this._history=await Ye.history()}catch{this._history=[]}finally{this._loadingHistory=!1}}_openRepeatWeekFromMenu(){this._showMenu=!1,confirm("¿Reemplazar el plan actual con una semana anterior?")&&this._openRepeatWeek()}_formatWeekRange(e){const t=new Date(e),i=new Date(t);i.setDate(i.getDate()+6);const a=l=>l.toLocaleDateString("es-ES",{day:"numeric",month:"short"});return`${a(t)} - ${a(i)}`}async _repeatWeek(e){if(!this._repeating){this._repeating=!0,this._error="";try{await Ye.repeat({sourcePlanId:e,assignedToMemberId:this._selectedMemberId||void 0}),this._showRepeatWeek=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=t.message||"Error al repetir el plan"}finally{this._repeating=!1}}}async _openRecipeDetail(e,t,i){if(i==null||i.stopPropagation(),!!e){this._detailLoading=!0,this._detailMealId=t??null,this._showRecipeDetail=!0;try{this._detailRecipe=await or.get(e)}catch{this._detailRecipe=null,this._showRecipeDetail=!1}finally{this._detailLoading=!1}}}_closeRecipeDetail(){this._showRecipeDetail=!1,this._detailRecipe=null,this._detailMealId=null}_openEditFromDetail(){this._showRecipeDetail=!1,window.location.hash="#/recetas"}async _markCooked(e){const t=this._detailMealId;if(!(!(e!=null&&e.id)||!t||this._cooking[t])){this._cooking={...this._cooking,[t]:!0};try{const i=await Ye.cook(t);this._cookingSummary=i.summary,this._showCookedSummary=!0,this._cooking={...this._cooking,[t]:!1},await this._loadPlan(),await this._loadExpiring()}catch(i){this._error=i.message||"Error al marcar como cocinado",this._cooking={...this._cooking,[t]:!1}}}}_macroBar(e,t){var j;const i=t||this._progress;if(!(i!=null&&i.current)||!(i!=null&&i.target))return"";const a=i.current[e]??0,l=i.target[e]??1,d=(j=i.range)==null?void 0:j[e],p=Math.min(100,Math.round(a/l*100)),f=jl[e]||e,E=Kl[e]||"",P=d?a>=d.min&&a<=d.max:null;return g`
      <div class="macro-row">
        <div class="macro-label">${f}</div>
        <div class="macro-bar-track">
          <div class="macro-bar-fill ${P===!0?"ok":P===!1?"over":""}" style="width: ${Math.min(p,100)}%"></div>
        </div>
        <div class="macro-numbers">
          <span class="macro-current">${a.toLocaleString()}</span>
          <span class="macro-sep">/</span>
          <span class="macro-target">${l.toLocaleString()}</span>
          <span class="macro-unit">${E}</span>
        </div>
      </div>
    `}_renderSlot(e,t){var ie,H,le,Ie;const i=(H=(ie=this._plan)==null?void 0:ie.meals)==null?void 0:H.find(de=>de.dayOfWeek===e&&de.mealType===t),a=`${e}-${t}`,l=this._dragOverSlot===a,d=this._editMode?this._onDragOver:void 0,p=this._editMode?de=>this._onDrop(de,e,t):void 0,f=this._editMode?()=>this._onDragEnter(e,t):void 0,E=this._editMode?()=>this._onDragLeave(e,t):void 0,P=this._editMode?()=>this._openPanel(e,t):void 0,j=["slot",l?"drag-over":"",this._editMode?"clickable":"",i?"":"empty"].filter(Boolean).join(" ");if(!i)return this._editMode?g`
          <div
            class=${j}
            @click=${P}
            @dragover=${d}
            @dragenter=${f}
            @dragleave=${E}
            @drop=${p}
          >
            <span class="add-icon">+</span>
          </div>`:g`<div class="slot empty">—</div>`;const N=`${e}-${t}`,V=this._multipliers[N]??i.servingsMultiplier??1;return g`
  <div
    class=${j}
    @click=${P}
    @dragover=${d}
    @dragenter=${f}
    @dragleave=${E}
    @drop=${p}
  >
    <div class="slot-header">
      <div class="slot-name">${((le=i.recipe)==null?void 0:le.name)||"?"}</div>
      <button class="slot-view" @click=${de=>{var Te;return this._openRecipeDetail((Te=i.recipe)==null?void 0:Te.id,i.id,de)}} title="Ver receta">👁</button>
      ${this._editMode?g`<button class="slot-remove" @click=${de=>{de.stopPropagation(),this._removeSlotMeal(e,t)}} title="Eliminar">✕</button>`:""}
    </div>
    ${(Ie=i.recipe)!=null&&Ie.calorias?g`<div class="slot-macro">${Math.round(i.recipe.calorias*V)} kcal</div>`:""}
    ${i.isEatingOut?g`<div class="slot-badge eating-out">Comer fuera</div>`:""}
    ${this._editMode||V!==1?g`
        <div class="slot-multiplier">
          ${this._editMode?g`
              <button class="mult-btn" @click=${de=>{de.stopPropagation(),this._adjustMultiplier(e,t,-.5)}} ?disabled=${V<=.5}>−</button>
              <span class="mult-value">x${V.toFixed(1)}</span>
              <button class="mult-btn" @click=${de=>{de.stopPropagation(),this._adjustMultiplier(e,t,.5)}} ?disabled=${V>=5}>+</button>
            `:g`<span class="mult-value">x${V.toFixed(1)}</span>`}
        </div>
      `:""}
  </div>
`}_getMeal(e,t){var i,a;return(a=(i=this._plan)==null?void 0:i.meals)==null?void 0:a.find(l=>l.dayOfWeek===e&&l.mealType===t)}_renderMobileList(){return Sn.map((e,t)=>{const i=t+1,a=this._expandedDay===i,l=Cn.map(d=>({type:d,meal:this._getMeal(i,d.value)}));return g`
        <div class="mobile-day">
          <div class="mobile-day-header" @click=${()=>{this._expandedDay=a?null:i}}>
            <span>${e}</span>
            <span class="mobile-day-summary">${l.filter(d=>d.meal).length} comidas</span>
            <span class="mobile-day-arrow ${a?"open":""}">▶</span>
          </div>
          ${a?g`
            <div class="mobile-day-body">
              ${l.map(({type:d,meal:p})=>{var le,Ie;const f=`${i}-${d.value}`,E=this._multipliers[f]??(p==null?void 0:p.servingsMultiplier)??1,P=this._dragOverSlot===f,j=this._editMode?this._onDragOver:void 0,N=this._editMode?de=>this._onDrop(de,i,d.value):void 0,V=this._editMode?()=>this._onDragEnter(i,d.value):void 0,ie=this._editMode?()=>this._onDragLeave(i,d.value):void 0,H=this._editMode?()=>this._openPanel(i,d.value):void 0;return g`
                  <div class="mobile-meal ${this._editMode?"clickable":""} ${P?"drag-over":""}"
                    @click=${H}
                    @dragover=${j}
                    @dragenter=${V}
                    @dragleave=${ie}
                    @drop=${N}
                  >
                    <div class="mobile-meal-type">${d.label}</div>
                    ${p?g`
                        <div class="mobile-meal-name">${((le=p.recipe)==null?void 0:le.name)||"?"}</div>
                        <button class="slot-view" @click=${de=>{var Te;return this._openRecipeDetail((Te=p.recipe)==null?void 0:Te.id,p.id,de)}} title="Ver receta">👁</button>
                        ${p.isEatingOut?g`<span class="eating-out-badge-mobile">Comer fuera</span>`:""}
                        <div class="mobile-meal-kcal">${(Ie=p.recipe)!=null&&Ie.calorias?`${Math.round(p.recipe.calorias*E)} kcal`:""}</div>
                        ${this._editMode?g`
                            <div class="mobile-meal-mult-edit">
                              <button class="mult-btn" @click=${de=>{de.stopPropagation(),this._adjustMultiplier(i,d.value,-.5)}} ?disabled=${E<=.5}>−</button>
                              <span class="mult-value">x${E.toFixed(1)}</span>
                              <button class="mult-btn" @click=${de=>{de.stopPropagation(),this._adjustMultiplier(i,d.value,.5)}} ?disabled=${E>=5}>+</button>
                            </div>
                            <button class="slot-remove" @click=${de=>{de.stopPropagation(),this._removeSlotMeal(i,d.value)}}>✕</button>
                          `:g`
                            <div class="mobile-meal-mult">x${E.toFixed(1)}</div>
                          `}
                      `:g`
                        <div class="mobile-meal-empty">${this._editMode?"+ Añadir receta":"—"}</div>
                      `}
                  </div>
                `})}
            </div>
          `:""}
        </div>
      `})}_renderExpiryWarning(){if(this._expiryDismissed||!this._plan||this._plan.autoGenerated||this._expiring.length===0)return"";const e=new Set(this._unusedExpiring().map(t=>t.id));return g`
      <div class="expiry-warning">
        <div class="expiry-warning-head">
          <strong>⚠️ Tienes alimentos a punto de caducar</strong>
          <button class="expiry-dismiss" @click=${this._dismissExpiryWarning} title="Ocultar esta semana">✕</button>
        </div>
        <p class="expiry-warning-note">
          Este plan no se generó automáticamente, así que no tiene en cuenta las caducidades.
          Lo marcado en negrita no lo usa ninguna receta del plan.
        </p>
        <ul class="expiry-list">
          ${this._expiring.map(t=>g`
            <li class=${e.has(t.id)?"unused":""}>
              ${t.foodName} — ${t.quantity} ${t.unit==="UNIDAD"?"ud":t.unit}
              <span class="expiry-when">
                ${t.expired?"caducado":t.daysLeft===0?"caduca hoy":t.daysLeft===1?"caduca mañana":`caduca en ${t.daysLeft} días`}
              </span>
            </li>
          `)}
        </ul>
      </div>
    `}render(){var t,i,a,l;if(this._loading)return g`<p>Cargando plan...</p>`;const e=this.hasMeals();return g`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Plan semanal</h2>
          ${this._members.length>0?g`
            <select class="member-select" @change=${this._onMemberChange}>
              <option value="" ?selected=${this._selectedMemberId===""}>Todos los miembros</option>
              ${this._members.map(d=>g`
                <option value=${d.id} ?selected=${this._selectedMemberId===d.id}>${d.name}</option>
              `)}
            </select>
          `:""}
          ${this._editMode?g`<span class="edit-badge">Editando</span>`:""}
          ${this._editMode?g`<button class="btn-outline btn-sm" @click=${this._clearPlan}>Limpiar todo</button>`:""}
          <label class="expiry-toggle" title="Al generar, prioriza recetas que usan lo que caduca antes">
            <input type="checkbox" .checked=${this._useExpiring} @change=${this._toggleUseExpiring} />
            Aprovechar lo que caduca
          </label>
        </div>

        ${e?g`
            <div class="menu-container">
              <button class="menu-trigger" @click=${this._toggleMenu}>⋮</button>
              ${this._showMenu?g`
                <div class="menu-dropdown">
                  ${this._editMode?g`<button class="menu-item" @click=${this._exitEditMode}>✓ Terminar edición</button>`:g`<button class="menu-item" @click=${this._enterEditMode}>✏️ Editar plan</button>`}
                  <button class="menu-item" @click=${()=>{this._showMenu=!1,this._generatePlan()}} ?disabled=${this._generating}>
                    🔄 ${this._generating?"Generando...":"Generar otro plan"}
                  </button>
                  <button class="menu-item" @click=${()=>{this._showMenu=!1,this._showSaveTemplate=!0}}>
                    Guardar como plantilla
                  </button>
                  <button class="menu-item" @click=${()=>{this._showMenu=!1,this._openLoadTemplate()}}>
                    Cargar plantilla
                  </button>
                  <button class="menu-item" @click=${this._openRepeatWeekFromMenu}>
                    Repetir semana
                  </button>
                  <button class="menu-item danger" @click=${this._deletePlan} ?disabled=${this._deleting}>
                    🗑 ${this._deleting?"Eliminando...":"Eliminar plan"}
                  </button>
                </div>
              `:""}
            </div>
          `:g`
            <button @click=${this._generatePlan} ?disabled=${this._generating}>
              ${this._generating?"Generando...":"Generar plan automático"}
            </button>
            <button class="btn-outline" @click=${this._openLoadTemplate}>
              Cargar plantilla
            </button>
            <button class="btn-outline" @click=${this._openRepeatWeek}>
              Repetir semana
            </button>
          `}
      </div>

      ${this._error?g`<div class="error">${this._error}</div>`:""}

      ${this._renderExpiryWarning()}

      ${!e&&!this._editMode?g`
          <div class="empty-state">
            <p>Aún no tienes un plan semanal. Genera uno automático o añade recetas manualmente desde el modo edición.</p>
          </div>
        `:g`
          <div class="desktop-grid">
            <div class="grid">
            <div class="label-cell"></div>
            ${Sn.map(d=>g`<div class="header-cell">${d}</div>`)}

            ${Cn.map(d=>g`
                <div class="label-cell">${d.label}</div>
                ${[1,2,3,4,5,6,7].map(p=>this._renderSlot(p,d.value))}
              `)}
          </div>

          ${(t=this._progress)!=null&&t.current?g`
            <div class="macro-overview" style="margin-top:1.5rem">
              <h3>Progreso semanal</h3>
              ${["calories","proteinG","carbsG","fatG"].map(d=>this._macroBar(d))}
              ${this._progress.withinRange!=null?g`
                <span class="within-range ${this._progress.withinRange?"ok":"nok"}">
                  ${this._progress.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
                </span>
              `:""}
            </div>
          `:""}
          ${(i=this._progressArray)!=null&&i.length?g`
            ${this._progressArray.map(d=>d!=null&&d.current?g`
              <div class="macro-overview" style="margin-top:1.5rem">
                <h3>${d.memberName||"Miembro"}</h3>
                ${["calories","proteinG","carbsG","fatG"].map(p=>this._macroBar(p,d))}
                ${d.withinRange!=null?g`
                  <span class="within-range ${d.withinRange?"ok":"nok"}">
                    ${d.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
                  </span>
                `:""}
              </div>
            `:"")}
          `:""}
          </div>
          <div class="mobile-list">
            ${this._renderMobileList()}
          </div>
        `}

      ${this._showPanel?g`
        <div class="panel-overlay" @click=${this._closePanel}></div>
        <div class="panel">
          <div class="panel-header">
            <h3>Elegir receta</h3>
            <button class="close-btn" @click=${this._closePanel}>✕</button>
          </div>
          <div class="panel-context">
            ${Sn[this._panelDay-1]}, ${(a=Cn.find(d=>d.value===this._panelMealType))==null?void 0:a.label}
            <span style="display:block;font-size:0.6875rem;margin-top:0.25rem;color:var(--text-muted)">Arrastra una receta a una celda o haz clic para asignar</span>
            ${this._allRecipes.length>0&&this._mealTypeFilteredCount<this._allRecipes.length?g`
              <label class="eating-out-check" style="display:flex;align-items:center;gap:0.375rem;margin-top:0.5rem;font-size:0.75rem;cursor:pointer">
                <input type="checkbox" .checked=${this._showAllRecipes} @change=${d=>{this._showAllRecipes=d.target.checked}}>
                Mostrar todas las recetas (${this._allRecipes.length})
              </label>
            `:""}
            <label class="eating-out-check" style="display:flex;align-items:center;gap:0.375rem;margin-top:0.375rem;font-size:0.75rem;cursor:pointer">
              <input type="checkbox" ?checked=${this._isEatingOut} @change=${d=>{var f;this._isEatingOut=d.target.checked;const p=this._getMeal(this._panelDay,this._panelMealType);(f=p==null?void 0:p.recipe)!=null&&f.id&&this._isEatingOut!==p.isEatingOut&&this._assignSlot(this._panelDay,this._panelMealType,p.recipe.id)}}>
              Comer fuera — excluir de la lista de la compra, sí contar en nutrición
            </label>
          </div>
          <div class="panel-search">
            <input
              type="text"
              placeholder="Buscar receta..."
              .value=${this._recipeSearch}
              @input=${d=>{this._recipeSearch=d.target.value}}
            />
          </div>
          <div class="panel-list">
            ${this._panelLoading?g`<div class="panel-loading">Cargando recetas...</div>`:this._filteredRecipes.length===0?g`<div class="panel-empty">${this._recipeSearch?"No hay recetas que coincidan":"No hay recetas disponibles"}</div>`:this._filteredRecipes.map(d=>g`
                  <div
                    class="panel-item ${this._assigning?"disabled":""}"
                    draggable="true"
                    @dragstart=${p=>!this._assigning&&this._onDragStart(p,d.id)}
                    @click=${this._assigning?void 0:()=>this._assignFromPanel(d.id)}
                  >
                    <div>
                      <div class="pi-name">${d.name}</div>
                      <div class="pi-meta">${d.timeMinutes?`${d.timeMinutes} min`:""} ${d.difficulty?`· ${d.difficulty}`:""}</div>
                    </div>
                    <div class="pi-kcal">${d.calorias?`${d.calorias} kcal`:""}</div>
                  </div>
                `)}
          </div>
        </div>
      `:""}
      ${this._showSaveTemplate?g`
        <div class="modal-overlay" @click=${()=>{this._showSaveTemplate=!1}}></div>
        <div class="modal">
          <div class="modal-header">
            <h3>Guardar plan como plantilla</h3>
            <button class="close-btn" @click=${()=>{this._showSaveTemplate=!1}}>✕</button>
          </div>
          <div class="modal-body">
            <label class="modal-label">Nombre de la plantilla</label>
            <input
              class="modal-input"
              type="text"
              placeholder="Ej: Semana alta en proteína"
              .value=${this._templateName}
              @input=${d=>{this._templateName=d.target.value}}
              @keydown=${d=>{d.key==="Enter"&&this._saveTemplate()}}
            />
          </div>
          <div class="modal-footer">
            <button class="btn-outline" @click=${()=>{this._showSaveTemplate=!1}}>Cancelar</button>
            <button @click=${this._saveTemplate} ?disabled=${this._savingTemplate||!this._templateName.trim()}>
              ${this._savingTemplate?"Guardando...":"Guardar"}
            </button>
          </div>
        </div>
      `:""}

      ${this._showLoadTemplate?g`
        <div class="modal-overlay" @click=${()=>{this._showLoadTemplate=!1}}></div>
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3>Cargar plantilla</h3>
            <button class="close-btn" @click=${()=>{this._showLoadTemplate=!1}}>✕</button>
          </div>
          <div class="modal-body">
            ${this._loadingTemplates?g`<div class="panel-loading">Cargando plantillas...</div>`:this._templates.length===0?g`<div class="panel-empty">No hay plantillas guardadas</div>`:g`
                  <div class="template-list">
                    ${this._templates.map(d=>g`
                      <div class="template-item ${this._applyingTemplate?"disabled":""}" @click=${this._applyingTemplate?void 0:()=>this._applyTemplate(d.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${d.name}</div>
                          <div class="template-item-meta">${d.isSystem?"Plantilla del sistema":"Plantilla personal"}</div>
                        </div>
                        ${d.isSystem?"":g`
                          <button class="template-item-delete" @click=${p=>this._deleteTemplate(d.id,p)} title="Eliminar plantilla">✕</button>
                        `}
                      </div>
                    `)}
                  </div>
                `}
          </div>
          <div class="modal-footer">
            <button class="btn-outline" @click=${()=>{this._showLoadTemplate=!1}}>Cerrar</button>
          </div>
        </div>
      `:""}

      ${this._showRepeatWeek?g`
        <div class="modal-overlay" @click=${()=>{this._showRepeatWeek=!1}}></div>
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3>Repetir semana</h3>
            <button class="close-btn" @click=${()=>{this._showRepeatWeek=!1}}>✕</button>
          </div>
          <div class="modal-body">
            ${this._loadingHistory?g`<div class="panel-loading">Cargando semanas anteriores...</div>`:this._history.length===0?g`<div class="panel-empty">No hay planes de semanas anteriores</div>`:g`
                  <div class="template-list">
                    ${this._history.map(d=>g`
                      <div class="template-item ${this._repeating?"disabled":""}" @click=${this._repeating?void 0:()=>this._repeatWeek(d.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${this._formatWeekRange(d.weekStart)}</div>
                          <div class="template-item-meta">${d.mealCount} comidas · ${d.autoGenerated?"generado automáticamente":"manual"}</div>
                        </div>
                      </div>
                    `)}
                  </div>
                `}
          </div>
          <div class="modal-footer">
            <button class="btn-outline" @click=${()=>{this._showRepeatWeek=!1}}>Cerrar</button>
          </div>
        </div>
      `:""}

      ${this._showRecipeDetail?g`
        <div class="modal-overlay" @click=${this._closeRecipeDetail}></div>
        <div class="detail-modal" @click=${d=>d.stopPropagation()}>
          ${this._detailLoading?g`<div style="padding:2rem;text-align:center;color:var(--text-muted)">Cargando receta...</div>`:this._detailRecipe?g`
              <div class="detail-header">
                <h3>${this._detailRecipe.name}</h3>
                <button class="close-btn" @click=${this._closeRecipeDetail}>✕</button>
              </div>
              <div class="detail-body">
                <div class="detail-meta">
                  ${this._detailRecipe.difficulty?g`<span class="badge">${this._detailRecipe.difficulty==="FACIL"?"Fácil":this._detailRecipe.difficulty==="MEDIA"?"Media":"Difícil"}</span>`:""}
                  ${this._detailRecipe.timeMinutes?g`<span>⏱ ${this._detailRecipe.timeMinutes} min</span>`:""}
                  ${this._detailRecipe.servings?g`<span>🍽 ${this._detailRecipe.servings} porciones</span>`:""}
                </div>
                ${this._detailRecipe.description?g`<div class="detail-desc">${this._detailRecipe.description}</div>`:""}
                <div class="detail-macros">
                  ${this._detailRecipe.calorias!=null?g`<span class="macro"><strong>${this._detailRecipe.calorias}</strong> kcal</span>`:""}
                  ${this._detailRecipe.proteinas!=null?g`<span class="macro"><strong>${this._detailRecipe.proteinas}g</strong> proteína</span>`:""}
                  ${this._detailRecipe.carbos!=null?g`<span class="macro"><strong>${this._detailRecipe.carbos}g</strong> carbohidratos</span>`:""}
                  ${this._detailRecipe.grasas!=null?g`<span class="macro"><strong>${this._detailRecipe.grasas}g</strong> grasa</span>`:""}
                </div>
                ${(l=this._detailRecipe.ingredients)!=null&&l.length?g`
                  <div class="detail-section">
                    <h4>Ingredientes</h4>
                    <ul>
                      ${this._detailRecipe.ingredients.map(d=>{var p;return g`
                        <li>${d.quantity} ${d.unit==="UNIDAD"?"ud":d.unit} ${((p=d.food)==null?void 0:p.name)||"—"}</li>
                      `})}
                    </ul>
                  </div>
                `:""}
                ${this._detailRecipe.instructions?g`
                  <div class="detail-section">
                    <h4>Paso a paso</h4>
                    <ol>
                      ${this._detailRecipe.instructions.split(`
`).filter(d=>d.trim()).map(d=>g`<li>${d}</li>`)}
                    </ol>
                  </div>
                `:""}
              </div>
              <div class="detail-footer">
                <button class="btn-outline" @click=${this._closeRecipeDetail}>Cerrar</button>
                ${this._detailRecipe.familyId?g`
                  <button class="btn-outline" @click=${this._openEditFromDetail}>Editar</button>
                `:""}
                ${this._detailMealId?g`
                  <button
                    class="btn-cooked"
                    @click=${()=>this._markCooked(this._detailRecipe)}
                    ?disabled=${this._cooking[this._detailMealId]}
                  >
                    ${this._cooking[this._detailMealId]?"Procesando...":"Cocinado!"}
                  </button>
                `:""}
              </div>
            `:""}
        </div>
      `:""}

      ${this._showCookedSummary?g`
        <div class="modal-overlay" @click=${()=>{this._showCookedSummary=!1}}></div>
        <div class="modal" @click=${d=>d.stopPropagation()}>
          <div class="modal-header">
            <h3>Ingredientes restados de la nevera</h3>
            <button class="close-btn" @click=${()=>{this._showCookedSummary=!1}}>✕</button>
          </div>
          <div class="modal-body">
            <ul class="cooked-summary">
              ${(this._cookingSummary||[]).map(d=>g`
                <li>
                  <span>${d.name}</span>
                  <span>
                    <span class="subtracted">${d.subtracted>0?`-${d.subtracted}${d.unit}`:"sin stock"}</span>
                    <span class="remaining"> (${d.remaining}${d.unit} restantes)</span>
                  </span>
                </li>
              `)}
            </ul>
          </div>
          <div class="modal-footer">
            <button @click=${()=>{this._showCookedSummary=!1}}>Aceptar</button>
          </div>
        </div>
      `:""}
    `}};J.styles=Xe`
    :host { display: block; }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .top-bar-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .member-select {
      padding: 0.375rem 0.5rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.8125rem;
      font-family: inherit;
      background: var(--surface);
      color: var(--text);
      cursor: pointer;
    }

    .member-select:focus {
      border-color: var(--primary);
      outline: none;
    }

    .edit-badge {
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      border-radius: 999px;
      background: #fef3c7;
      color: #92400e;
    }

    .expiry-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.75rem;
      color: var(--text-muted);
      cursor: pointer;
      white-space: nowrap;
    }

    .expiry-toggle input {
      accent-color: var(--primary);
      cursor: pointer;
    }

    .expiry-warning {
      background: #fffbeb;
      border: 1px solid #fcd34d;
      border-radius: 10px;
      padding: 0.85rem 1rem;
      margin-bottom: 1rem;
      font-size: 0.8125rem;
      color: #78350f;
    }

    .expiry-warning-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .expiry-dismiss {
      background: none;
      border: none;
      color: #92400e;
      cursor: pointer;
      font-size: 0.9rem;
      padding: 0.1rem 0.3rem;
    }

    .expiry-dismiss:hover { background: none; color: #78350f; }

    .expiry-warning-note {
      margin: 0.35rem 0 0.5rem;
      font-size: 0.75rem;
      color: #92400e;
    }

    .expiry-list {
      margin: 0;
      padding-left: 1.1rem;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }

    .expiry-list li.unused { font-weight: 700; }

    .expiry-when {
      color: #b45309;
      font-size: 0.75rem;
    }

    button {
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      font-family: inherit;
      background: var(--primary);
      color: white;
      cursor: pointer;
      transition: background 0.15s;
    }

    button:hover { background: var(--primary-hover); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }

    .btn-outline {
      background: transparent;
      color: var(--text-muted);
      border: 1px solid var(--border);
    }

    .btn-outline:hover { background: #f1f5f9; }

    .btn-sm {
      padding: 0.375rem 0.75rem;
      font-size: 0.75rem;
    }

    .btn-danger {
      background: #dc2626;
      color: white;
    }
    .btn-danger:hover { background: #b91c1c; }

    .menu-container {
      position: relative;
    }

    .menu-trigger {
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.5rem;
      color: var(--text-muted);
      font-size: 1.25rem;
      line-height: 1;
    }

    .menu-trigger:hover { background: #f1f5f9; }

    .menu-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      min-width: 200px;
      z-index: 50;
      padding: 0.25rem;
    }

    .menu-item {
      display: block;
      width: 100%;
      text-align: left;
      background: none;
      border: none;
      padding: 0.5rem 0.75rem;
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--text);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
    }

    .menu-item:hover { background: #f1f5f9; }
    .menu-item.danger { color: #dc2626; }
    .menu-item.danger:hover { background: #fef2f2; }

    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .empty-state {
      text-align: center;
      padding: 3rem 1rem;
      color: var(--text-muted);
    }

    .empty-state p { margin-bottom: 1rem; }

    /* Macro overview */
    .macro-overview {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1rem;
      margin-bottom: 1.5rem;
    }

    .macro-overview h3 {
      font-size: 0.8125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin: 0 0 0.75rem;
    }

    .macro-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }

    .macro-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text);
      min-width: 80px;
    }

    .macro-bar-track {
      flex: 1;
      height: 8px;
      background: #f1f5f9;
      border-radius: 999px;
      overflow: hidden;
      max-width: 200px;
    }

    .macro-bar-fill {
      height: 100%;
      border-radius: 999px;
      transition: width 0.3s;
      background: var(--primary);
    }

    .macro-bar-fill.ok { background: #22c55e; }
    .macro-bar-fill.over { background: #f59e0b; }

    .macro-numbers {
      font-size: 0.75rem;
      white-space: nowrap;
    }

    .macro-current { font-weight: 700; color: var(--text); }
    .macro-sep { color: var(--text-muted); margin: 0 0.125rem; }
    .macro-target { color: var(--text-muted); }
    .macro-unit { color: var(--text-muted); margin-left: 0.125rem; }

    .within-range {
      display: inline-block;
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
      margin-top: 0.5rem;
    }

    .within-range.ok { background: #dcfce7; color: #166534; }
    .within-range.nok { background: #fef3c7; color: #92400e; }

    /* Grid */
    .grid {
      display: grid;
      grid-template-columns: 100px repeat(7, 1fr);
      gap: 0.375rem;
      overflow-x: auto;
    }

    .header-cell {
      font-weight: 700;
      font-size: 0.6875rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.5rem 0.25rem;
      text-align: center;
    }

    .label-cell {
      font-size: 0.6875rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.5rem 0.25rem;
      display: flex;
      align-items: center;
    }

    .slot {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.375rem;
      min-height: 52px;
      font-size: 0.6875rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    .slot.empty {
      color: var(--text-muted);
      font-style: italic;
      align-items: center;
    }

    .slot.clickable {
      cursor: pointer;
      border-color: var(--primary);
      border-style: dashed;
    }

    .slot.clickable:hover {
      box-shadow: 0 0 0 2px rgba(79,70,229,0.15);
    }

    .slot.drag-over {
      border-color: #22c55e;
      background: #f0fdf4;
      box-shadow: 0 0 0 2px rgba(34,197,94,0.2);
    }

    .slot-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.25rem;
    }

    .slot-name {
      font-weight: 600;
      color: var(--text);
      line-height: 1.2;
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .slot-remove {
      background: none;
      border: none;
      color: #dc2626;
      font-size: 0.75rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      flex-shrink: 0;
      opacity: 0.5;
      transition: opacity 0.15s;
    }

    .slot-remove:hover { opacity: 1; }

    .slot-view {
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 0.7rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      flex-shrink: 0;
      opacity: 0.5;
      transition: opacity 0.15s;
    }

    .slot-view:hover { opacity: 1; color: var(--primary); }

    .slot-macro {
      font-size: 0.625rem;
      color: var(--text-muted);
      margin-top: 0.125rem;
    }

    .add-icon {
      font-size: 1rem;
      font-weight: 700;
      color: var(--primary);
    }

    .slot-badge {
      font-size: 0.5625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.0625rem 0.25rem;
      border-radius: 3px;
      margin-top: 0.125rem;
    }

    .slot-badge.eating-out {
      background: #fef3c7;
      color: #92400e;
    }

    .eating-out-badge-mobile {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.0625rem 0.25rem;
      border-radius: 3px;
      background: #fef3c7;
      color: #92400e;
    }

    .eating-out-check {
      user-select: none;
    }

    .eating-out-check input {
      accent-color: var(--primary);
    }

    /* Side panel */
    .panel-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.2);
      z-index: 150;
    }

    .panel {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 380px;
      max-width: 90vw;
      background: var(--surface);
      border-left: 1px solid var(--border);
      box-shadow: -4px 0 24px rgba(0,0,0,0.1);
      z-index: 160;
      display: flex;
      flex-direction: column;
      animation: slideIn 0.2s ease-out;
    }

    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .panel-header h3 {
      font-size: 1rem;
      margin: 0;
    }

    .panel-header .close-btn {
      background: none;
      border: none;
      font-size: 1.25rem;
      color: var(--text-muted);
      cursor: pointer;
      padding: 0.25rem;
    }

    .panel-context {
      font-size: 0.75rem;
      color: var(--text-muted);
      padding: 0.5rem 1.25rem;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .panel-search {
      padding: 0.75rem 1.25rem;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .panel-search input {
      width: 100%;
      padding: 0.5rem 0.625rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.8125rem;
      font-family: inherit;
      box-sizing: border-box;
    }

    .panel-search input:focus {
      border-color: var(--primary);
      outline: none;
    }

    .panel-list {
      flex: 1;
      overflow-y: auto;
      padding: 0.5rem;
    }

    .panel-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.625rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: grab;
      transition: border-color 0.15s, background 0.15s;
      margin-bottom: 0.375rem;
      user-select: none;
    }

    .panel-item:active { cursor: grabbing; }

    .panel-item:hover {
      border-color: var(--primary);
      background: #f8faff;
    }

    .panel-item.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .panel-item .pi-name {
      font-size: 0.8125rem;
      font-weight: 600;
    }

    .panel-item .pi-meta {
      font-size: 0.6875rem;
      color: var(--text-muted);
      margin-top: 0.125rem;
    }

    .panel-item .pi-kcal {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--primary);
      white-space: nowrap;
    }

    .panel-empty {
      text-align: center;
      padding: 2rem 1rem;
      color: var(--text-muted);
      font-size: 0.8125rem;
    }

    .panel-loading {
      text-align: center;
      padding: 2rem;
      color: var(--text-muted);
    }

    /* Mobile list */
    .desktop-grid { display: block; }
    .mobile-list { display: none; }

    .mobile-day {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      margin-bottom: 0.75rem;
      overflow: hidden;
    }

    .mobile-day-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      background: #f8fafc;
      user-select: none;
    }

    .mobile-day-summary {
      font-weight: 400;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .mobile-day-arrow {
      margin-left: auto;
      font-size: 0.7rem;
      color: var(--text-muted);
      transition: transform 0.2s;
    }

    .mobile-day-arrow.open { transform: rotate(90deg); }

    .mobile-day-body {
      border-top: 1px solid var(--border);
    }

    .mobile-meal {
      display: grid;
      grid-template-columns: 80px 1fr auto auto auto;
      gap: 0.5rem;
      align-items: center;
      padding: 0.625rem 1rem;
      border-bottom: 1px solid #f1f5f9;
      font-size: 0.85rem;
    }

    .mobile-meal:last-child { border-bottom: none; }
    .mobile-meal.clickable { cursor: pointer; }
    .mobile-meal.clickable:hover { background: #f8faff; }
    .mobile-meal.drag-over { background: #f0fdf4; }

    .mobile-meal-type {
      font-weight: 600;
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .mobile-meal-name { font-weight: 500; grid-column: 2; }

    .mobile-meal-kcal {
      font-size: 0.75rem;
      color: var(--primary);
      font-weight: 700;
      justify-self: end;
    }

    .mobile-meal-empty {
      color: var(--text-muted);
      font-style: italic;
      font-size: 0.8rem;
      grid-column: 2;
    }

    .mobile-meal .slot-remove {
      background: none;
      border: none;
      color: #dc2626;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0.25rem;
      opacity: 0.5;
    }

    .mobile-meal .slot-remove:hover { opacity: 1; }

    .mobile-meal .slot-view {
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 0.75rem;
      cursor: pointer;
      padding: 0.25rem;
      opacity: 0.5;
    }

    .mobile-meal .slot-view:hover { opacity: 1; color: var(--primary); }

    /* Multiplier controls */
    .slot-multiplier {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      margin-top: 0.25rem;
      font-size: 0.625rem;
    }

    .mult-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 0 0.375rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
      cursor: pointer;
      color: var(--text);
      font-family: inherit;
      font-weight: 700;
      min-width: 0;
    }

    .mult-btn:hover:not(:disabled) { background: #f1f5f9; }
    .mult-btn:disabled { opacity: 0.3; cursor: not-allowed; }

    .mult-value {
      font-weight: 600;
      color: var(--text-muted);
      min-width: 2rem;
      text-align: center;
    }

    .mobile-meal-mult {
      font-size: 0.7rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    .mobile-meal-mult-edit {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }

    .mobile-meal-mult-edit .mult-btn {
      font-size: 0.65rem;
      padding: 0 0.25rem;
      line-height: 1.125rem;
    }

    /* Template modals */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      z-index: 210;
      width: 420px;
      max-width: 90vw;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
    }

    .modal-lg { width: 520px; }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .modal-header h3 {
      font-size: 1rem;
      margin: 0;
    }

    .modal-header .close-btn {
      background: none;
      border: none;
      font-size: 1.25rem;
      color: var(--text-muted);
      cursor: pointer;
      padding: 0.25rem;
    }

    .modal-body {
      padding: 1.25rem;
      overflow-y: auto;
      flex: 1;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      padding: 1rem 1.25rem;
      border-top: 1px solid var(--border);
      flex-shrink: 0;
    }

    .modal-label {
      display: block;
      font-size: 0.8125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text);
    }

    .modal-input {
      width: 100%;
      padding: 0.5rem 0.625rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.875rem;
      font-family: inherit;
      box-sizing: border-box;
    }

    .modal-input:focus {
      border-color: var(--primary);
      outline: none;
    }

    .template-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .template-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
    }

    .template-item:hover { border-color: var(--primary); background: #f8faff; }
    .template-item.disabled { opacity: 0.5; cursor: not-allowed; }

    .template-item-name {
      font-size: 0.875rem;
      font-weight: 600;
    }

    .template-item-meta {
      font-size: 0.6875rem;
      color: var(--text-muted);
      margin-top: 0.125rem;
    }

    .template-item-delete {
      background: none;
      border: none;
      color: #dc2626;
      font-size: 0.875rem;
      cursor: pointer;
      padding: 0.25rem;
      opacity: 0.5;
      flex-shrink: 0;
    }

    .template-item-delete:hover { opacity: 1; }

    /* Recipe detail modal */
    .detail-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      z-index: 210;
      width: 560px;
      max-width: 92vw;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
    }

    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 1.25rem 1.5rem 1rem;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .detail-header h3 { margin: 0; font-size: 1.125rem; flex: 1; }
    .detail-header .close-btn { background: none; border: none; font-size: 1.25rem; color: var(--text-muted); cursor: pointer; padding: 0.25rem; }

    .detail-body { padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; }

    .detail-meta { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; font-size: 0.8125rem; color: var(--text-muted); }
    .detail-meta .badge { font-size: 0.6875rem; font-weight: 600; padding: 0.125rem 0.5rem; border-radius: 999px; background: #eef2ff; color: var(--primary); }

    .detail-desc { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5; }

    .detail-macros { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
    .detail-macros .macro { background: #f8fafc; padding: 0.25rem 0.625rem; border-radius: 6px; font-size: 0.8125rem; color: var(--text-muted); }
    .detail-macros .macro strong { color: var(--text); }

    .detail-section { margin-bottom: 1rem; }
    .detail-section h4 { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 0.5rem; }
    .detail-section ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--text); }
    .detail-section li { line-height: 1.6; }

    .detail-section ol { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--text); }
    .detail-section ol li { line-height: 1.6; margin-bottom: 0.25rem; }

    .detail-footer { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-top: 1px solid var(--border); flex-shrink: 0; gap: 0.5rem; }

    .btn-cooked {
      background: #16a34a;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      font-size: 0.8125rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.15s;
    }

    .btn-cooked:hover { background: #15803d; }
    .btn-cooked:disabled { opacity: 0.6; cursor: not-allowed; }

    /* Cooked summary */
    .cooked-summary { list-style: none; padding: 0; margin: 0.5rem 0; }
    .cooked-summary li { display: flex; justify-content: space-between; padding: 0.375rem 0; border-bottom: 1px solid #f1f5f9; font-size: 0.8125rem; }
    .cooked-summary li:last-child { border-bottom: none; }
    .cooked-summary .subtracted { color: #16a34a; font-weight: 600; }
    .cooked-summary .remaining { color: var(--text-muted); }

    @media (max-width: 768px) {
      .desktop-grid { display: none; }
      .mobile-list { display: block; }
      .panel { width: 100vw; max-width: 100vw; border-left: none; }
      .panel-overlay { display: none; }
    }
  `;Z([C()],J.prototype,"_plan",2);Z([C()],J.prototype,"_loading",2);Z([C()],J.prototype,"_error",2);Z([C()],J.prototype,"_generating",2);Z([C()],J.prototype,"_deleting",2);Z([C()],J.prototype,"_useExpiring",2);Z([C()],J.prototype,"_expiring",2);Z([C()],J.prototype,"_expiryDismissed",2);Z([C()],J.prototype,"_progress",2);Z([C()],J.prototype,"_progressArray",2);Z([C()],J.prototype,"_showMenu",2);Z([C()],J.prototype,"_editMode",2);Z([C()],J.prototype,"_showPanel",2);Z([C()],J.prototype,"_panelDay",2);Z([C()],J.prototype,"_panelMealType",2);Z([C()],J.prototype,"_showAllRecipes",2);Z([C()],J.prototype,"_allRecipes",2);Z([C()],J.prototype,"_recipeSearch",2);Z([C()],J.prototype,"_panelLoading",2);Z([C()],J.prototype,"_assigning",2);Z([C()],J.prototype,"_isEatingOut",2);Z([C()],J.prototype,"_dragOverSlot",2);Z([C()],J.prototype,"_expandedDay",2);Z([C()],J.prototype,"_multipliers",2);Z([C()],J.prototype,"_members",2);Z([C()],J.prototype,"_selectedMemberId",2);Z([C()],J.prototype,"_showSaveTemplate",2);Z([C()],J.prototype,"_showLoadTemplate",2);Z([C()],J.prototype,"_templateName",2);Z([C()],J.prototype,"_templates",2);Z([C()],J.prototype,"_savingTemplate",2);Z([C()],J.prototype,"_loadingTemplates",2);Z([C()],J.prototype,"_applyingTemplate",2);Z([C()],J.prototype,"_showRepeatWeek",2);Z([C()],J.prototype,"_history",2);Z([C()],J.prototype,"_loadingHistory",2);Z([C()],J.prototype,"_repeating",2);Z([C()],J.prototype,"_detailRecipe",2);Z([C()],J.prototype,"_detailMealId",2);Z([C()],J.prototype,"_showRecipeDetail",2);Z([C()],J.prototype,"_detailLoading",2);Z([C()],J.prototype,"_cooking",2);Z([C()],J.prototype,"_cookingSummary",2);Z([C()],J.prototype,"_showCookedSummary",2);J=Z([Je("plan-view")],J);var Bl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,ve=(e,t,i,a)=>{for(var l=a>1?void 0:a?Ul(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Bl(t,i,l),l};let ye=class extends ze{constructor(){super(...arguments),this._items=[],this._expiringIds=new Set,this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._adding=!1,this._splitItem=null,this._splitQuantity=1,this._splitExpiryDate="",this._splitting=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1}connectedCallback(){super.connectedCallback(),this._loadPantry()}async _loadPantry(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([wt.list(),wt.expiring()]);this._items=e,this._expiringIds=new Set((t.items||[]).filter(i=>!i.expired).map(i=>i.id))}catch(e){this._error=e.message||"Error al cargar la nevera"}finally{this._loading=!1}}_groupedItems(){var t;const e=new Map;for(const i of this._items){const a=i.foodId,l=e.get(a);l?(l.total+=i.quantity,l.batches.push(i)):e.set(a,{foodId:a,name:((t=i.food)==null?void 0:t.name)||"?",total:i.quantity,unit:i.unit,batches:[i]})}for(const i of e.values())i.batches.sort((a,l)=>a.expiryDate&&l.expiryDate?a.expiryDate.localeCompare(l.expiryDate):a.expiryDate?-1:l.expiryDate?1:0);return Array.from(e.values()).sort((i,a)=>i.name.localeCompare(a.name))}_batchStatus(e){return e.expiryDate?new Date(e.expiryDate)<new Date(new Date().toDateString())?"expired":this._expiringIds.has(e.id)?"soon":"ok":"none"}_formatUnit(e){return e==="UNIDAD"?"ud":e}async _searchFood(e){const t=e.target.value;if(this._searchQuery=t,t.length<2){this._searchResults=[];return}try{this._searchResults=await Si.search(t)}catch{this._searchResults=[]}}async _selectFood(e){this._selectedFood=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unidadBase||"g"}async _addItem(e){if(e.preventDefault(),!!this._selectedFood){this._adding=!0;try{const t={quantity:Number(this._quantity),unit:this._unit,expiryDate:this._expiryDate||null,purchaseDate:this._purchaseDate||null};this._editingItem?await wt.update(this._editingItem.id,t):await wt.add({foodId:this._selectedFood.id,...t}),this._resetFormFields(),this._showAddForm=!1,this._editingItem=null,await this._loadPantry()}catch(t){this._error=t.message||"Error al guardar el lote"}finally{this._adding=!1}}}async _removeItem(e){try{await wt.remove(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar el lote"}}_editItem(e){var t;this._editingItem=e,this._selectedFood=e.food,this._searchQuery=((t=e.food)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._expiryDate=e.expiryDate?e.expiryDate.split("T")[0]:"",this._purchaseDate=e.purchaseDate?e.purchaseDate.split("T")[0]:"",this._showAddForm=!0}_openSplit(e){this._splitItem=e,this._splitQuantity=1,this._splitExpiryDate=""}_closeSplit(){this._splitItem=null,this._splitting=!1}async _confirmSplit(e){if(e.preventDefault(),!!this._splitItem){this._splitting=!0;try{await wt.split(this._splitItem.id,{quantity:Number(this._splitQuantity),expiryDate:this._splitExpiryDate||null}),this._closeSplit(),await this._loadPantry()}catch(t){this._error=t.message||"Error al dividir el lote",this._splitting=!1}}}_resetFormFields(){this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._editingItem=null,this._showCreateFood=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetFormFields()}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._searchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},i=await Si.create(t);this._selectFood(i),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}_renderBatch(e){const t=this._batchStatus(e),i=e.expiryDate?new Date(e.expiryDate).toLocaleDateString():null;return g`
      <div class="batch ${t}">
        <span class="batch-qty">${e.quantity} ${this._formatUnit(e.unit)}</span>
        <span class="batch-date">
          ${i?g`Caduca: ${i}`:"Sin fecha de caducidad"}
          ${t==="expired"?g`<span class="tag">caducado</span>`:""}
          ${t==="soon"?g`<span class="tag">caduca pronto</span>`:""}
        </span>
        <div class="batch-actions">
          <button class="icon-btn" @click=${()=>this._openSplit(e)} title="Dividir lote">⑂</button>
          <button class="icon-btn" @click=${()=>this._editItem(e)} title="Editar lote">✎</button>
          <button class="icon-btn danger" @click=${()=>this._removeItem(e.id)} title="Eliminar lote">✕</button>
        </div>
      </div>
    `}render(){var t;if(this._loading)return g`<p>Cargando nevera...</p>`;const e=this._groupedItems();return g`
      <div class="top-bar">
        <h2>Nevera</h2>
        <button @click=${this._toggleForm}>
          ${this._showAddForm?"Cancelar":"Añadir alimento"}
        </button>
      </div>

      ${this._error?g`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?g`
        <div class="form-card">
          <h3>${this._editingItem?"Editar lote":"Añadir a la nevera"}</h3>
          <form @submit=${this._addItem}>
              <div class="form-row">
                <label>Buscar alimento</label>
                <input
                  type="text"
                  .value=${this._searchQuery}
                  @input=${this._searchFood}
                  placeholder="Ej: pollo, arroz, tomate..."
                  ?disabled=${!!this._editingItem}
                />
                ${this._searchResults.length>0?g`
                  <div class="search-results">
                    ${this._searchResults.map(i=>g`
                      <div class="search-result-item" @click=${()=>this._selectFood(i)}>
                        <span>${i.name}</span>
                        <span style="font-size:0.6875rem;color:var(--text-muted)">${i.calorias100g??"?"} kcal/100g</span>
                      </div>
                    `)}
                  </div>
                `:this._searchQuery.length>=2&&!this._selectedFood&&!this._showCreateFood?g`
                  <div class="search-results">
                    <div class="search-result-item create-food" @click=${this._openCreateFood}>
                      + Crear "${this._searchQuery}" como nuevo alimento
                    </div>
                  </div>
                `:""}
              </div>

              ${this._showCreateFood?g`
                <div class="create-food-card">
                  <h4 style="margin:0 0 0.75rem;font-size:0.875rem">Nuevo alimento</h4>
                  <div class="form-row">
                    <label>Nombre</label>
                    <input type="text" .value=${this._createFoodForm.name}
                      @input=${i=>{this._createFoodForm={...this._createFoodForm,name:i.target.value}}}
                      placeholder="Nombre del alimento" />
                  </div>
                  <div class="form-row">
                    <label>Categoría</label>
                    <select .value=${this._createFoodForm.category}
                      @change=${i=>{this._createFoodForm={...this._createFoodForm,category:i.target.value}}}>
                      <option value="">-- Sin categoría --</option>
                      <option value="VERDURAS">Verduras</option>
                      <option value="FRUTAS">Frutas</option>
                      <option value="CARNES">Carnes</option>
                      <option value="PESCADOS">Pescados</option>
                      <option value="LACTEOS">Lácteos</option>
                      <option value="HUEVOS">Huevos</option>
                      <option value="CEREALES">Cereales</option>
                      <option value="LEGUMBRES">Legumbres</option>
                      <option value="FRUTOS_SECOS">Frutos secos</option>
                      <option value="ACEITES">Aceites</option>
                      <option value="CONDIMENTOS">Condimentos</option>
                      <option value="BEBIDAS">Bebidas</option>
                      <option value="OTROS">Otros</option>
                    </select>
                  </div>
                  <div class="form-inline">
                    <div class="form-row">
                      <label>Calorías (100g)</label>
                      <input type="number" .value=${this._createFoodForm.calorias100g}
                        @input=${i=>{this._createFoodForm={...this._createFoodForm,calorias100g:parseFloat(i.target.value)||0}}}
                        step="1" />
                    </div>
                    <div class="form-row">
                      <label>Proteínas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.proteinas100g}
                        @input=${i=>{this._createFoodForm={...this._createFoodForm,proteinas100g:parseFloat(i.target.value)||0}}}
                        step="0.1" />
                    </div>
                  </div>
                  <div class="form-inline">
                    <div class="form-row">
                      <label>Carbohidratos (100g)</label>
                      <input type="number" .value=${this._createFoodForm.carbos100g}
                        @input=${i=>{this._createFoodForm={...this._createFoodForm,carbos100g:parseFloat(i.target.value)||0}}}
                        step="0.1" />
                    </div>
                    <div class="form-row">
                      <label>Grasas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.grasas100g}
                        @input=${i=>{this._createFoodForm={...this._createFoodForm,grasas100g:parseFloat(i.target.value)||0}}}
                        step="0.1" />
                    </div>
                  </div>
                  <div class="form-row">
                    <label>Unidad base</label>
                    <select .value=${this._createFoodForm.unidadBase}
                      @change=${i=>{this._createFoodForm={...this._createFoodForm,unidadBase:i.target.value}}}>
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                      <option value="UNIDAD">UNIDAD</option>
                    </select>
                  </div>
                  <div class="form-actions">
                    <button type="button" @click=${this._handleCreateFood} ?disabled=${this._creatingFood||!this._createFoodForm.name.trim()}>
                      ${this._creatingFood?"Creando...":"Crear alimento"}
                    </button>
                    <button type="button" class="cancel" @click=${this._closeCreateFood}>Cancelar</button>
                  </div>
                </div>
              `:""}

            ${this._selectedFood?g`
              <div class="form-inline">
                <div class="form-row">
                  <label>Cantidad</label>
                  <input type="number" .value=${this._quantity} @input=${i=>{this._quantity=i.target.value}} min="0" step="0.1" />
                </div>
                <div class="form-row">
                  <label>Unidad</label>
                  <select .value=${this._unit} @change=${i=>{this._unit=i.target.value}}>
                    <option value="g">g</option>
                    <option value="ml">ml</option>
                    <option value="UNIDAD">UNIDAD</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <label>Fecha de caducidad (opcional)</label>
                <div class="date-field">
                  <input type="date" .value=${this._expiryDate} @input=${i=>{this._expiryDate=i.target.value}} />
                  ${this._expiryDate?g`<button type="button" class="clear-date" @click=${()=>{this._expiryDate=""}}>Quitar</button>`:""}
                </div>
              </div>
              <div class="form-row">
                <label>Fecha de compra (opcional)</label>
                <div class="date-field">
                  <input type="date" .value=${this._purchaseDate} @input=${i=>{this._purchaseDate=i.target.value}} />
                  ${this._purchaseDate?g`<button type="button" class="clear-date" @click=${()=>{this._purchaseDate=""}}>Quitar</button>`:""}
                </div>
              </div>
              <div class="form-actions">
                <button type="submit" ?disabled=${this._adding}>
                  ${this._adding?"Guardando...":this._editingItem?"Guardar":"Añadir"}
                </button>
                <button type="button" class="cancel" @click=${()=>{this._resetFormFields(),this._showAddForm=!1}}>Cancelar</button>
              </div>
            `:""}
          </form>
        </div>
      `:""}

      ${e.length===0?g`<div class="empty-state"><p>Tu nevera está vacía. Añade alimentos para empezar.</p></div>`:g`
          <div class="list">
            ${e.map(i=>g`
              <div class="food-group">
                <div class="group-header">
                  <span class="group-name">${i.name}</span>
                  <span class="group-total">
                    ${Math.round(i.total*10)/10} ${this._formatUnit(i.unit)}
                    ${i.batches.length>1?` · ${i.batches.length} lotes`:""}
                  </span>
                </div>
                ${i.batches.map(a=>this._renderBatch(a))}
              </div>
            `)}
          </div>
        `}

      ${this._splitItem?g`
        <div class="modal-overlay" @click=${this._closeSplit}>
          <div class="modal" @click=${i=>i.stopPropagation()}>
            <h3>Dividir lote de ${((t=this._splitItem.food)==null?void 0:t.name)||"?"}</h3>
            <p class="modal-hint">
              Separa parte de los ${this._splitItem.quantity} ${this._formatUnit(this._splitItem.unit)}
              en un lote nuevo con su propia caducidad.
            </p>
            <form @submit=${this._confirmSplit}>
              <div class="form-row">
                <label>Cantidad a separar</label>
                <input type="number" .value=${this._splitQuantity}
                  @input=${i=>{this._splitQuantity=i.target.value}}
                  min="0.1" step="0.1" max=${this._splitItem.quantity} />
              </div>
              <div class="form-row">
                <label>Caducidad del lote nuevo (opcional)</label>
                <input type="date" .value=${this._splitExpiryDate}
                  @input=${i=>{this._splitExpiryDate=i.target.value}} />
              </div>
              <div class="form-actions">
                <button type="submit" ?disabled=${this._splitting||Number(this._splitQuantity)>=this._splitItem.quantity}>
                  ${this._splitting?"Dividiendo...":"Dividir"}
                </button>
                <button type="button" class="cancel" @click=${this._closeSplit}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      `:""}
    `}};ye.styles=Xe`
    :host {
      display: block;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    button {
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      font-family: inherit;
      background: var(--primary);
      color: white;
      cursor: pointer;
      transition: background 0.15s;
    }

    button:hover {
      background: var(--primary-hover);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .empty-state {
      text-align: center;
      padding: 3rem 1rem;
      color: var(--text-muted);
    }

    /* List grouped by food */
    .list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .food-group {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
    }

    .group-header {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding: 0.65rem 1rem;
      background: #f8fafc;
      border-bottom: 1px solid var(--border);
    }

    .group-name {
      font-weight: 600;
      font-size: 0.875rem;
    }

    .group-total {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-left: auto;
    }

    .batch {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1rem;
      border-bottom: 1px solid #f1f5f9;
    }

    .batch:last-child {
      border-bottom: none;
    }

    .batch-qty {
      font-size: 0.8125rem;
      font-weight: 600;
      min-width: 72px;
    }

    .batch-date {
      font-size: 0.75rem;
      color: var(--text-muted);
      flex: 1;
    }

    .batch-date .tag {
      display: inline-block;
      padding: 0.05rem 0.4rem;
      border-radius: 999px;
      font-weight: 600;
      margin-left: 0.35rem;
    }

    .batch.expired .tag { background: #fee2e2; color: #dc2626; }
    .batch.soon .tag { background: #fef3c7; color: #b45309; }
    .batch.expired { background: #fffafa; }
    .batch.soon { background: #fffdf5; }

    .batch-actions {
      display: flex;
      gap: 0.25rem;
    }

    .icon-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 1.05rem;
      padding: 0.25rem 0.35rem;
      transition: color 0.15s;
    }

    .icon-btn:hover { color: var(--primary); background: none; }
    .icon-btn.danger:hover { color: #dc2626; }

    /* Add form */
    .form-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .form-card h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .form-row {
      margin-bottom: 0.75rem;
    }

    .form-row label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.25rem;
    }

    .form-row input, .form-row select {
      width: 100%;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: inherit;
      outline: none;
    }

    .form-row input:focus {
      border-color: var(--primary);
    }

    .date-field {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .date-field input { flex: 1; }

    .clear-date {
      background: transparent;
      color: var(--text-muted);
      border: 1px solid var(--border);
      padding: 0.4rem 0.6rem;
      font-size: 0.75rem;
      white-space: nowrap;
    }

    .clear-date:hover { background: #f1f5f9; color: var(--text); }

    .form-inline {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }

    .search-results {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      max-height: 200px;
      overflow-y: auto;
    }

    .search-result-item {
      padding: 0.5rem 0.75rem;
      font-size: 0.8125rem;
      cursor: pointer;
      transition: background 0.1s;
    }

    .search-result-item:hover {
      background: #f1f5f9;
    }

    .search-result-item.create-food {
      color: var(--primary);
      font-weight: 600;
      border-top: 1px solid var(--border);
    }

    .create-food-card {
      background: #f8fafc;
      border: 1px dashed var(--primary);
      border-radius: 8px;
      padding: 1rem;
      margin-top: 0.75rem;
    }

    .form-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .form-actions .cancel {
      background: transparent;
      color: var(--text-muted);
      border: 1px solid var(--border);
    }

    .form-actions .cancel:hover {
      background: #f1f5f9;
    }

    /* Split modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal {
      background: var(--surface);
      border-radius: 12px;
      padding: 1.5rem;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }

    .modal h3 { margin: 0 0 0.35rem; font-size: 1rem; }
    .modal .modal-hint { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem; }

    @media (max-width: 640px) {
      .top-bar { flex-direction: column; align-items: stretch; }
      .search-results { max-height: 30vh; }
      .batch { flex-wrap: wrap; }
      .batch-date { flex-basis: 100%; }
    }
  `;ve([C()],ye.prototype,"_items",2);ve([C()],ye.prototype,"_expiringIds",2);ve([C()],ye.prototype,"_loading",2);ve([C()],ye.prototype,"_error",2);ve([C()],ye.prototype,"_showAddForm",2);ve([C()],ye.prototype,"_editingItem",2);ve([C()],ye.prototype,"_searchQuery",2);ve([C()],ye.prototype,"_searchResults",2);ve([C()],ye.prototype,"_selectedFood",2);ve([C()],ye.prototype,"_quantity",2);ve([C()],ye.prototype,"_unit",2);ve([C()],ye.prototype,"_expiryDate",2);ve([C()],ye.prototype,"_purchaseDate",2);ve([C()],ye.prototype,"_adding",2);ve([C()],ye.prototype,"_splitItem",2);ve([C()],ye.prototype,"_splitQuantity",2);ve([C()],ye.prototype,"_splitExpiryDate",2);ve([C()],ye.prototype,"_splitting",2);ve([C()],ye.prototype,"_showCreateFood",2);ve([C()],ye.prototype,"_createFoodForm",2);ve([C()],ye.prototype,"_creatingFood",2);ye=ve([Je("pantry-view")],ye);var Gl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,xe=(e,t,i,a)=>{for(var l=a>1?void 0:a?Hl(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Gl(t,i,l),l};const Vl={FACIL:"Fácil",MEDIA:"Media",DIFICIL:"Difícil"},Wl=["g","ml","UNIDAD"];let be=class extends ze{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._editRecipe=null,this._isCreating=!1,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._searching=!1,this._savingEdit=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1,this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._totalCount=0,this._searchTimeout=null,this._filterTimeout=null}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const e={};this._searchTerm&&(e.search=this._searchTerm),this._ingredientFilter&&(e.ingredient=this._ingredientFilter),this._maxTimeFilter&&(e.maxTime=this._maxTimeFilter),this._items=await or.list(Object.keys(e).length>0?e:void 0),this._totalCount=this._items.length}catch(e){this._error=e.message||"Error al cargar recetas",this._items=[]}finally{this._loading=!1}}_onSearchInput(e){const t=e.target.value;this._searchTerm=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onIngredientInput(e){const t=e.target.value;this._ingredientFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onDifficultyChange(e){this._difficultyFilter=e.target.value}_onMaxTimeInput(e){const t=e.target.value;this._maxTimeFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_clearFilters(){this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._load()}get _filteredItems(){return this._difficultyFilter?this._items.filter(e=>e.difficulty===this._difficultyFilter):this._items}async _deleteRecipe(e,t){if(confirm(`¿Eliminar "${t}"?`))try{await or.remove(e),this._items=this._items.filter(i=>i.id!==e)}catch(i){this._error=i.message||"Error al eliminar receta"}}_openEdit(e){this._isCreating=!1,this._editRecipe=e,this._editForm={name:e.name??"",description:e.description??"",instructions:e.instructions??"",difficulty:e.difficulty??"FACIL",timeMinutes:e.timeMinutes??30,servings:e.servings??1},this._editIngredients=(e.ingredients??[]).map(t=>{var i;return{foodId:t.foodId,foodName:((i=t.food)==null?void 0:i.name)??"",quantity:t.quantity,unit:t.unit}}),this._foodSearchQuery="",this._foodSearchResults=[]}_openCreate(){this._isCreating=!0,this._editRecipe={id:null},this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[]}_closeEdit(){this._isCreating=!1,this._editRecipe=null,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._showCreateFood=!1}_onFieldChange(e,t){this._editForm={...this._editForm,[e]:t}}_onIngredientChange(e,t,i){const a=[...this._editIngredients];a[e]={...a[e],[t]:i},this._editIngredients=a}_removeIngredient(e){this._editIngredients=this._editIngredients.filter((t,i)=>i!==e)}_onFoodSearchInput(e){this._foodSearchQuery=e.target.value,this._searchTimeout&&clearTimeout(this._searchTimeout),this._searchTimeout=setTimeout(()=>{this._searchFoods()},300)}async _searchFoods(){const e=this._foodSearchQuery.trim();if(!e){this._foodSearchResults=[];return}this._searching=!0;try{this._foodSearchResults=await Si.search(e)}catch{this._foodSearchResults=[]}finally{this._searching=!1}}async _addIngredient(e){const t=e.id,i=e.name;this._editIngredients=[...this._editIngredients,{foodId:t,foodName:i,quantity:100,unit:"g"}],this._foodSearchQuery="",this._foodSearchResults=[]}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._foodSearchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},i=await Si.create(t);this._addIngredient(i),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}async _saveEdit(){if(!(!this._editRecipe||!this._editForm.name.trim())){this._savingEdit=!0;try{const e={name:this._editForm.name.trim(),description:this._editForm.description.trim()||void 0,instructions:this._editForm.instructions.trim()||void 0,difficulty:this._editForm.difficulty,timeMinutes:this._editForm.timeMinutes,servings:this._editForm.servings,ingredients:this._editIngredients.map(t=>({foodId:t.foodId,quantity:t.quantity,unit:t.unit}))};if(this._isCreating){const t=await or.create(e);this._items=[...this._items,t]}else{const t=await or.update(this._editRecipe.id,e);this._items=this._items.map(i=>i.id===this._editRecipe.id?{...i,...t}:i)}this._closeEdit()}catch(e){this._error=e.message||"Error al guardar receta"}finally{this._savingEdit=!1}}}_renderInstructions(e){const t=e.split(`
`).filter(i=>i.trim());return g`<ol>${t.map(i=>g`<li>${i}</li>`)}</ol>`}_macroBar(e,t,i){if(e==null)return"";const a=Math.round(e/t*100);return g`<span class="macro" title="${i}: ${e}g/${t}g">${i}: ${e}g <span class="pct">${a}%</span></span>`}_microsTooltip(e){const t=[["Sodio","mg",e.sodioMg],["Potasio","mg",e.potasioMg],["Calcio","mg",e.calcioMg],["Hierro","mg",e.hierroMg],["Zinc","mg",e.zincMg],["Fosforo","mg",e.fosforoMg],["Vit A","ug",e.vitaminaAIug],["Vit C","mg",e.vitaminaCMg],["Vit D","ug",e.vitaminaDIug],["Vit E","mg",e.vitaminaEMg],["Vit B6","mg",e.vitaminaB6Mg],["Vit B12","ug",e.vitaminaB12Iug],["Niacina","mg",e.niacinaMg],["Folico","ug",e.acidoFolicoIug]];if(!t.some(([,,l])=>l!=null&&l!==0))return"";const a=t.filter(([,,l])=>l!=null&&l!==0).map(([l,d,p])=>`${l}: ${p}${d}`);return g`<span class="micros-tooltip"><span class="macro">micros</span><span class="micros-tip">${a.join(" · ")}</span></span>`}render(){if(this._loading)return g`<p>Cargando recetas...</p>`;const e=this._filteredItems.length;return g`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <h2 style="margin:0">Recetas</h2>
        <button class="btn-primary" @click=${this._openCreate} style="font-size:0.8125rem;padding:0.5rem 1rem">+ Nueva receta</button>
      </div>

      ${this._error?g`<div class="error">${this._error}</div>`:""}

      <div class="filters-bar">
        <input type="text" placeholder="Buscar receta..." .value=${this._searchTerm} @input=${this._onSearchInput}>
        <input type="text" placeholder="Contiene ingrediente..." .value=${this._ingredientFilter} @input=${this._onIngredientInput}>
        <select .value=${this._difficultyFilter} @change=${this._onDifficultyChange}>
          <option value="">Todas</option>
          <option value="FACIL">Facil</option>
          <option value="MEDIA">Media</option>
          <option value="DIFICIL">Dificil</option>
        </select>
        <input type="number" placeholder="Tiempo max. (min)" min="1" .value=${this._maxTimeFilter} @input=${this._onMaxTimeInput} style="flex:0 0 150px">
        <button class="btn-clear-filters" @click=${this._clearFilters}>Limpiar</button>
      </div>

      <p class="results-count">Mostrando ${e} de ${this._totalCount} recetas</p>

      ${this._items.length===0&&!this._error?g`<div class="empty-state"><p>No hay recetas. Crea una receta nueva con el boton "+ Nueva receta".</p></div>`:e===0?g`<div class="empty-state"><p>No se encontraron recetas con estos filtros.</p></div>`:g`
          <div class="grid">
            ${this._filteredItems.map(t=>{var i;return g`
              <div class="card">
                <div class="card-header">
                  <h3>${t.name}</h3>
                  ${t.difficulty?g`<span class="badge">${Vl[t.difficulty]||t.difficulty}</span>`:""}
                </div>

                ${t.description?g`<div class="desc">${t.description}</div>`:""}
                ${t.instructions?g`<details class="instructions"><summary>Paso a paso</summary><div class="steps">${this._renderInstructions(t.instructions)}</div></details>`:""}

                <div class="meta">
                  ${t.timeMinutes?g`<span>⏱ ${t.timeMinutes} min</span>`:""}
                  ${t.servings?g`<span>🍽 ${t.servings} porc.</span>`:""}
                </div>

                <div class="macros">
                  ${t.calorias?g`<span class="kcal">${t.calorias} kcal</span>`:""}
                  ${this._macroBar(t.proteinas,999,"P")}
                  ${this._macroBar(t.carbos,999,"HC")}
                  ${this._macroBar(t.grasas,999,"G")}
                  ${this._microsTooltip(t)}
                </div>

                ${(i=t.ingredients)!=null&&i.length?g`
                  <details class="ingredients">
                    <summary>Ingredientes (${t.ingredients.length})</summary>
                    <ul>
                      ${t.ingredients.map(a=>{var l;return g`
                        <li>${a.quantity} ${a.unit==="UNIDAD"?"ud":a.unit} ${((l=a.food)==null?void 0:l.name)||"—"}</li>
                      `})}
                    </ul>
                  </details>
                `:""}

                <div class="actions">
                  ${t.familyId?g`
                    <button class="btn-edit" @click=${()=>this._openEdit(t)}>Editar</button>
                    <button class="btn-delete" @click=${()=>this._deleteRecipe(t.id,t.name)}>Eliminar</button>
                  `:g`
                    <span class="system-badge">Receta del sistema</span>
                  `}
                </div>
              </div>
            `})}
          </div>
        `}

      ${this._editRecipe?g`
        <div class="overlay" @click=${this._closeEdit}>
          <div class="modal" @click=${t=>t.stopPropagation()}>
            <div class="modal-header">
              <h3>${this._isCreating?"Nueva receta":"Editar receta"}</h3>
              <button class="close-btn" @click=${this._closeEdit}>✕</button>
            </div>

            <div class="form-group">
              <label>Nombre</label>
              <input
                type="text"
                .value=${this._editForm.name}
                @input=${t=>this._onFieldChange("name",t.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Descripción</label>
              <textarea
                .value=${this._editForm.description}
                @input=${t=>this._onFieldChange("description",t.target.value)}
              ></textarea>
            </div>

            <div class="form-group">
              <label>Paso a paso (un paso por línea)</label>
              <textarea
                .value=${this._editForm.instructions}
                @input=${t=>this._onFieldChange("instructions",t.target.value)}
                rows="5"
              ></textarea>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Dificultad</label>
                <select .value=${this._editForm.difficulty} @change=${t=>this._onFieldChange("difficulty",t.target.value)}>
                  <option value="FACIL">Fácil</option>
                  <option value="MEDIA">Media</option>
                  <option value="DIFICIL">Difícil</option>
                </select>
              </div>
              <div class="form-group">
                <label>Tiempo (min)</label>
                <input
                  type="number"
                  min="1"
                  .value=${this._editForm.timeMinutes}
                  @input=${t=>this._onFieldChange("timeMinutes",parseInt(t.target.value,10)||1)}
                />
              </div>
              <div class="form-group">
                <label>Porciones</label>
                <input
                  type="number"
                  min="1"
                  .value=${this._editForm.servings}
                  @input=${t=>this._onFieldChange("servings",parseInt(t.target.value,10)||1)}
                />
              </div>
            </div>

            <div class="ingredients-section">
              <h4>Ingredientes</h4>

              ${this._editIngredients.length===0?g`<p class="empty-ingredients">No hay ingredientes. Añade uno usando el campo de búsqueda.</p>`:g`
                  ${this._editIngredients.map((t,i)=>g`
                    <div class="ingredient-row">
                      <span class="food-name">${t.foodName}</span>
                      <input
                        class="qty"
                        type="number"
                        min="0.1"
                        step="1"
                        .value=${t.quantity}
                        @input=${a=>this._onIngredientChange(i,"quantity",parseFloat(a.target.value)||1)}
                      />
                      <select .value=${t.unit} @change=${a=>this._onIngredientChange(i,"unit",a.target.value)}>
                        ${Wl.map(a=>g`<option value=${a}>${a}</option>`)}
                      </select>
                      <button class="remove-btn" @click=${()=>this._removeIngredient(i)}>✕</button>
                    </div>
                  `)}
                `}

              <div class="food-search-area" style="margin-top:0.75rem">
                <input
                  type="text"
                  placeholder="Buscar alimento para añadir..."
                  .value=${this._foodSearchQuery}
                  @input=${this._onFoodSearchInput}
                />
                ${this._foodSearchResults.length>0?g`
                  <div class="food-results">
                    ${this._foodSearchResults.map(t=>g`
                      <div class="food-result-item" @click=${()=>this._addIngredient(t)}>
                        <span>${t.name}</span>
                        <span class="f-cat">${t.category??""}</span>
                      </div>
                    `)}
                  </div>
                `:""}
                ${!this._searching&&this._foodSearchQuery.length>=2&&this._foodSearchResults.length===0&&!this._showCreateFood?g`
                  <div class="food-results">
                    <div class="food-result-item create-food" @click=${this._openCreateFood}>
                      + Crear "${this._foodSearchQuery}" como nuevo alimento
                    </div>
                  </div>
                `:""}
                ${this._searching?g`<p style="font-size:0.75rem;color:var(--text-muted);margin:0.25rem 0 0">Buscando...</p>`:""}
              </div>

              ${this._showCreateFood?g`
                <div class="create-food-section" style="margin-top:0.75rem;padding:0.75rem;border:1px dashed var(--primary);border-radius:8px;background:#f8fafc">
                  <h4 style="margin:0 0 0.75rem;font-size:0.8125rem">Nuevo alimento</h4>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                    <div style="grid-column:1/-1">
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Nombre</label>
                      <input type="text" .value=${this._createFoodForm.name}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,name:t.target.value}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Categoría</label>
                      <select .value=${this._createFoodForm.category}
                        @change=${t=>{this._createFoodForm={...this._createFoodForm,category:t.target.value}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit;box-sizing:border-box">
                        <option value="">-- Sin categoría --</option>
                        <option value="VERDURAS">Verduras</option>
                        <option value="FRUTAS">Frutas</option>
                        <option value="CARNES">Carnes</option>
                        <option value="PESCADOS">Pescados</option>
                        <option value="LACTEOS">Lácteos</option>
                        <option value="HUEVOS">Huevos</option>
                        <option value="CEREALES">Cereales</option>
                        <option value="LEGUMBRES">Legumbres</option>
                        <option value="FRUTOS_SECOS">Frutos secos</option>
                        <option value="ACEITES">Aceites</option>
                        <option value="CONDIMENTOS">Condimentos</option>
                        <option value="BEBIDAS">Bebidas</option>
                        <option value="OTROS">Otros</option>
                      </select>
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Unidad base</label>
                      <select .value=${this._createFoodForm.unidadBase}
                        @change=${t=>{this._createFoodForm={...this._createFoodForm,unidadBase:t.target.value}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="UNIDAD">UNIDAD</option>
                      </select>
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Calorías (100g)</label>
                      <input type="number" .value=${this._createFoodForm.calorias100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,calorias100g:parseFloat(t.target.value)||0}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Proteínas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.proteinas100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,proteinas100g:parseFloat(t.target.value)||0}}}
                        step="0.1"
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Carboh. (100g)</label>
                      <input type="number" .value=${this._createFoodForm.carbos100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,carbos100g:parseFloat(t.target.value)||0}}}
                        step="0.1"
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Grasas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.grasas100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,grasas100g:parseFloat(t.target.value)||0}}}
                        step="0.1"
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                  </div>
                  <div style="display:flex;gap:0.5rem;margin-top:0.75rem">
                    <button class="btn-primary" @click=${this._handleCreateFood} ?disabled=${this._creatingFood||!this._createFoodForm.name.trim()} style="flex:1;padding:0.4rem 0.75rem;border:none;border-radius:6px;font-size:0.8rem;font-weight:600;font-family:inherit;cursor:pointer;background:var(--primary);color:white">
                      ${this._creatingFood?"Creando...":"Crear alimento"}
                    </button>
                    <button class="btn-cancel" @click=${this._closeCreateFood} style="padding:0.4rem 0.75rem;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-weight:600;font-family:inherit;cursor:pointer;background:transparent;color:var(--text-muted)">Cancelar</button>
                  </div>
                </div>
              `:""}
            </div>

            <div class="modal-actions">
              <button class="btn-cancel" @click=${this._closeEdit}>Cancelar</button>
              <button class="btn-primary" @click=${this._saveEdit} ?disabled=${this._savingEdit||!this._editForm.name.trim()}>
                ${this._savingEdit?"Guardando...":this._isCreating?"Crear receta":"Guardar cambios"}
              </button>
            </div>
          </div>
        </div>
      `:""}
    `}};be.styles=Xe`
    :host { display: block; }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .empty-state {
      text-align: center;
      padding: 3rem 1rem;
      color: var(--text-muted);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .card-header h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      flex: 1;
    }

    .badge {
      display: inline-block;
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
      background: #eef2ff;
      color: var(--primary);
      white-space: nowrap;
    }

    .desc {
      font-size: 0.8125rem;
      color: var(--text-muted);
      line-height: 1.4;
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .macros {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.75rem;
    }

    .macro {
      background: #f8fafc;
      padding: 0.125rem 0.5rem;
      border-radius: 4px;
      color: var(--text-muted);
    }

    .pct { color: var(--primary); font-weight: 600; }

    .filters-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
      align-items: center;
    }

    .filters-bar input,
    .filters-bar select {
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.8125rem;
      font-family: inherit;
      background: var(--surface);
      min-width: 0;
    }

    .filters-bar input { flex: 1 1 180px; }
    .filters-bar select { flex: 0 0 auto; }

    .btn-clear-filters {
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      background: var(--surface);
      color: var(--text-muted);
      white-space: nowrap;
    }

    .btn-clear-filters:hover { background: #f1f5f9; }

    .results-count {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
    }

    .micros-tooltip {
      position: relative;
      cursor: help;
    }

    .micros-tooltip .micros-tip {
      display: none;
      position: absolute;
      bottom: 100%;
      left: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.5rem 0.75rem;
      font-size: 0.6875rem;
      line-height: 1.5;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 5;
      white-space: nowrap;
      color: var(--text-muted);
    }

    .micros-tooltip:hover .micros-tip { display: block; }

    .kcal {
      font-weight: 700;
      color: var(--text);
      font-size: 0.875rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-top: auto;
      padding-top: 0.5rem;
      border-top: 1px solid var(--border);
    }

    .actions button {
      padding: 0.375rem 0.75rem;
      border: none;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
    }

    .btn-edit {
      background: #eef2ff;
      color: var(--primary);
    }

    .btn-edit:hover { background: #e0e7ff; }

    .btn-delete {
      background: #fef2f2;
      color: #dc2626;
    }

    .btn-delete:hover { background: #fee2e2; }

    .system-badge {
      font-size: 0.6875rem;
      color: var(--text-muted);
      font-style: italic;
    }

    .ingredients {
      font-size: 0.8125rem;
      margin-top: 0.25rem;
    }

    .ingredients summary {
      cursor: pointer;
      color: var(--primary);
      font-weight: 600;
      font-size: 0.8125rem;
      user-select: none;
    }

    .ingredients ul {
      margin: 0.25rem 0 0 0;
      padding-left: 1.25rem;
      color: var(--text-muted);
    }

    .ingredients li {
      line-height: 1.5;
    }

    .instructions {
      font-size: 0.8125rem;
    }

    .instructions summary {
      cursor: pointer;
      color: var(--primary);
      font-weight: 600;
      font-size: 0.75rem;
    }

    .instructions ol {
      margin: 0.5rem 0 0 1.25rem;
      padding: 0;
    }

    .instructions li {
      margin-bottom: 0.25rem;
      line-height: 1.4;
    }

    /* --- Modal overlay --- */

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .modal {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 1.5rem;
      max-width: 600px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    .modal-header h3 {
      font-size: 1.125rem;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 1.25rem;
      color: var(--text-muted);
      cursor: pointer;
      padding: 0.25rem;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .form-group label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.375rem;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 0.5rem 0.625rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.875rem;
      font-family: inherit;
      box-sizing: border-box;
    }

    .form-group textarea {
      min-height: 60px;
      resize: vertical;
    }

    .form-row {
      display: flex;
      gap: 1rem;
    }

    .form-row .form-group { flex: 1; }

    /* --- Ingredients section --- */

    .ingredients-section {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .ingredients-section h4 {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin: 0 0 0.75rem;
    }

    .ingredient-row {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .ingredient-row .food-name {
      flex: 2;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--text);
    }

    .ingredient-row input.qty {
      width: 72px;
      padding: 0.375rem 0.5rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.8125rem;
      font-family: inherit;
      text-align: center;
    }

    .ingredient-row select {
      width: 90px;
      padding: 0.375rem 0.375rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.75rem;
      font-family: inherit;
    }

    .remove-btn {
      background: none;
      border: none;
      color: #dc2626;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.25rem;
      line-height: 1;
    }

    /* --- Food search --- */

    .food-search-area {
      position: relative;
    }

    .food-search-area input {
      width: 100%;
      padding: 0.5rem 0.625rem;
      border: 1px dashed var(--border);
      border-radius: 6px;
      font-size: 0.8125rem;
      font-family: inherit;
      box-sizing: border-box;
    }

    .food-search-area input:focus {
      border-color: var(--primary);
      outline: none;
    }

    .food-results {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 10;
      max-height: 200px;
      overflow-y: auto;
    }

    .food-result-item {
      padding: 0.5rem 0.625rem;
      font-size: 0.8125rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }

    .food-result-item:hover { background: #f1f5f9; }

    .food-result-item.create-food {
      color: var(--primary);
      font-weight: 600;
      border-top: 1px solid var(--border);
    }

    .food-result-item .f-cat {
      font-size: 0.6875rem;
      color: var(--text-muted);
    }

    /* --- Modal actions --- */

    .modal-actions {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
      margin-top: 1rem;
    }

    .modal-actions button {
      padding: 0.5rem 1.25rem;
      border: none;
      border-radius: 8px;
      font-size: 0.8125rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--primary);
      color: white;
    }

    .btn-primary:hover { background: var(--primary-hover); }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

    .btn-cancel {
      background: transparent;
      color: var(--text-muted);
      border: 1px solid var(--border) !important;
    }

    .btn-cancel:hover { background: #f1f5f9; }

    .empty-ingredients {
      font-size: 0.8125rem;
      color: var(--text-muted);
      font-style: italic;
    }

    @media (max-width: 768px) {
      .modal-overlay { background: var(--surface); }
      .modal { max-width: 100vw; max-height: 100dvh; border-radius: 0; top: 0; transform: none; left: 0; width: 100%; height: 100dvh; }
      .modal-body { max-height: calc(100dvh - 140px); }
    }
  `;xe([C()],be.prototype,"_items",2);xe([C()],be.prototype,"_loading",2);xe([C()],be.prototype,"_error",2);xe([C()],be.prototype,"_editRecipe",2);xe([C()],be.prototype,"_isCreating",2);xe([C()],be.prototype,"_editForm",2);xe([C()],be.prototype,"_editIngredients",2);xe([C()],be.prototype,"_foodSearchQuery",2);xe([C()],be.prototype,"_foodSearchResults",2);xe([C()],be.prototype,"_searching",2);xe([C()],be.prototype,"_savingEdit",2);xe([C()],be.prototype,"_showCreateFood",2);xe([C()],be.prototype,"_createFoodForm",2);xe([C()],be.prototype,"_creatingFood",2);xe([C()],be.prototype,"_searchTerm",2);xe([C()],be.prototype,"_ingredientFilter",2);xe([C()],be.prototype,"_difficultyFilter",2);xe([C()],be.prototype,"_maxTimeFilter",2);xe([C()],be.prototype,"_totalCount",2);be=xe([Je("recetas-view")],be);var Ql=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,qe=(e,t,i,a)=>{for(var l=a>1?void 0:a?Yl(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Ql(t,i,l),l};function Mn(e,t){const i=t??"g";if(i==="UNIDAD"){const a=Math.round(e*10)/10;return`${a} ${a===1?"unidad":"unidades"}`}return`${Math.round(e)}${i}`}const Ja={VERDURAS:0,FRUTAS:1,CARNES:2,PESCADOS:3,LACTEOS:4,HUEVOS:5,CEREALES:6,LEGUMBRES:7,FRUTOS_SECOS:8,ACEITES:9,CONDIMENTOS:10,BEBIDAS:11,OTROS:12},Xl={VERDURAS:"Verduras",FRUTAS:"Frutas",CARNES:"Carnes",PESCADOS:"Pescados",LACTEOS:"Lácteos",HUEVOS:"Huevos",CEREALES:"Cereales",LEGUMBRES:"Legumbres",FRUTOS_SECOS:"Frutos secos",ACEITES:"Aceites",CONDIMENTOS:"Condimentos",BEBIDAS:"Bebidas",OTROS:"Otros"};let Me=class extends ze{constructor(){super(...arguments),this._items=[],this._loading=!0,this._generating=!1,this._error="",this._collapsed={},this._addingToPantry=!1,this._showConfirmAdd=!1,this._expiryDrafts={},this._sections=[],this._newItemName="",this._newItemQuantity=1,this._catalogResults=[],this._selectedCatalogItem=null,this._addingItem=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0;try{const e=await pt.current();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch{this._items=[],this._sections=[]}finally{this._loading=!1}}async _generate(){this._generating=!0,this._error="";try{const e=await pt.generate();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch(e){this._error=e.message||"Error"}finally{this._generating=!1}}async _toggle(e){const t=this._items.findIndex(a=>a.id===e);if(t===-1)return;const i=this._items[t].purchased;this._items=this._items.map(a=>a.id===e?{...a,purchased:!a.purchased}:a);try{await pt.toggleItem(e)}catch{this._items=this._items.map(a=>a.id===e?{...a,purchased:i}:a),this._error="Error al actualizar"}}_toggleCategory(e){this._collapsed={...this._collapsed,[e]:!this._collapsed[e]}}async _toggleCategoryItems(e){var d;const i=((d=this._getGroupedItems().find(([p])=>p===e))==null?void 0:d[1])||[];if(i.length===0)return;const l=!i.every(p=>p.purchased);this._items=this._items.map(p=>{var f;return((f=p.food)==null?void 0:f.category)===e?{...p,purchased:l}:p});try{for(const p of i)p.purchased!==l&&await pt.toggleItem(p.id)}catch{await this._load(),this._error="Error al actualizar categoría"}}_allItemsChecked(){return this._items.length>0&&this._items.every(e=>e.purchased)}_categoryAllChecked(e){var a;const i=((a=this._getGroupedItems().find(([l])=>l===e))==null?void 0:a[1])||[];return i.length>0&&i.every(l=>l.purchased)}_toggleAll(){const e=this._allItemsChecked(),t=!e,i=this._items.map(a=>a.id);this._items=this._items.map(a=>({...a,purchased:t})),(async()=>{try{for(const a of i){const l=this._items.find(d=>d.id===a);l&&l.purchased!==e&&await pt.toggleItem(a)}}catch{await this._load(),this._error="Error al actualizar"}})()}_getPurchasedItems(){return this._items.filter(e=>e.purchased&&e.toBuy>0)}async _addToPantry(){this._getPurchasedItems().length!==0&&(this._expiryDrafts={},this._showConfirmAdd=!0)}async _confirmAddToPantry(){var i;const e=this._getPurchasedItems();if(e.length===0)return;this._addingToPantry=!0,this._showConfirmAdd=!1;const t=new Date().toISOString().split("T")[0];try{for(const a of e)await wt.add({foodId:a.foodId,quantity:a.toBuy,unit:((i=a.food)==null?void 0:i.unidadBase)||"g",expiryDate:this._expiryDrafts[a.id]||null,purchaseDate:t});this._items=this._items.map(a=>({...a,purchased:!1})),this._expiryDrafts={}}catch{this._error="Error al añadir a la nevera"}finally{this._addingToPantry=!1}}_getGroupedItems(){var t;const e=new Map;for(const i of this._items){const a=((t=i.food)==null?void 0:t.category)||"OTROS";e.has(a)||e.set(a,[]),e.get(a).push(i)}return Array.from(e.entries()).sort((i,a)=>(Ja[i[0]]??99)-(Ja[a[0]]??99))}async _searchHouseholdCatalog(e){const t=e.target.value;if(this._newItemName=t,this._selectedCatalogItem=null,t.length<2){this._catalogResults=[];return}try{this._catalogResults=await Nt.items(t)}catch{this._catalogResults=[]}}_selectCatalogResult(e){this._selectedCatalogItem=e,this._newItemName=e.name,this._catalogResults=[]}async _addSectionItem(e){var t;if(e.preventDefault(),!!this._newItemName.trim()){this._addingItem=!0;try{let i=this._sections[0];i||(i=await pt.createSection("Hogar y otros"));const a=await pt.addSectionItem(i.id,{name:this._newItemName.trim(),quantity:Number(this._newItemQuantity)||1,householdItemId:(t=this._selectedCatalogItem)==null?void 0:t.id});this._sections.findIndex(d=>d.id===i.id)===-1?this._sections=[...this._sections,{...i,items:[a]}]:this._sections=this._sections.map(d=>d.id===i.id?{...d,items:[...d.items,a]}:d),this._newItemName="",this._newItemQuantity=1,this._selectedCatalogItem=null,this._catalogResults=[]}catch(i){this._error=i.message||"Error al añadir artículo"}finally{this._addingItem=!1}}}async _toggleSectionItem(e){const t=!e.purchased;this._sections=this._sections.map(i=>({...i,items:i.items.map(a=>a.id===e.id?{...a,purchased:t}:a)}));try{await pt.toggleSectionItem(e.id,t)}catch{this._sections=this._sections.map(i=>({...i,items:i.items.map(a=>a.id===e.id?{...a,purchased:!t}:a)})),this._error="Error al actualizar artículo"}}async _removeSectionItem(e){try{await pt.removeSectionItem(e.id),this._sections=this._sections.map(t=>({...t,items:t.items.filter(i=>i.id!==e.id)}))}catch{this._error="Error al eliminar artículo"}}render(){if(this._loading)return g`<p>Cargando lista...</p>`;const e=this._getGroupedItems(),t=this._getPurchasedItems().length;return g`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Lista de la compra</h2>
          ${this._items.length>0?g`
            <button class="btn-outline btn-sm" @click=${this._toggleAll}>
              ${this._allItemsChecked()?"Desmarcar todo":"Marcar todo"}
            </button>
          `:""}
        </div>
        <button @click=${this._generate} ?disabled=${this._generating}>
          ${this._generating?"Generando...":"Generar lista"}
        </button>
      </div>
      ${this._error?g`<div class="error">${this._error}</div>`:""}
      ${this._items.length===0?g`<div class="empty-state"><p>La lista está vacía. Genera la lista desde el plan semanal.</p></div>`:e.map(([i,a])=>{const l=this._collapsed[i],d=this._categoryAllChecked(i);return g`
              <div class="category">
                <div class="category-header" @click=${()=>this._toggleCategory(i)}>
                  <span class="arrow ${l?"":"expanded"}">▶</span>
                  <span class="cat-check ${d?"checked":""}" @click=${p=>{p.stopPropagation(),this._toggleCategoryItems(i)}}>
                    ${d?"✓":""}
                  </span>
                  <span>${Xl[i]||i}</span>
                  <span class="count">${a.length} ${a.length===1?"artículo":"artículos"}</span>
                </div>
                <div class="items ${l?"collapsed":""}">
                  ${a.map(p=>{var f;return g`
                    <div class="item ${p.purchased?"checked":""}" @click=${()=>this._toggle(p.id)}>
                      <div class="check">${p.purchased?"✓":""}</div>
                      <span class="item-name">${((f=p.food)==null?void 0:f.name)||"?"}</span>
                      <span class="item-qty">${Mn(p.totalNeeded,p.unit)} ${p.toBuy?`(comprar: ${Mn(p.toBuy,p.unit)})`:"(✔ en nevera)"}</span>
                    </div>
                  `})}
                </div>
              </div>
            `})}

      <div class="category">
        <div class="category-header">
          <span>Hogar y otros</span>
          <span class="count">${this._sections.reduce((i,a)=>i+a.items.length,0)} artículo(s)</span>
        </div>
        <div class="items">
          ${this._sections.flatMap(i=>i.items).map(i=>g`
            <div class="item ${i.purchased?"checked":""}" @click=${()=>this._toggleSectionItem(i)}>
              <div class="check">${i.purchased?"✓":""}</div>
              <span class="item-name">${i.name}</span>
              <span class="item-qty">${i.quantity}</span>
              <button class="item-remove-btn" @click=${a=>{a.stopPropagation(),this._removeSectionItem(i)}} title="Eliminar">✕</button>
            </div>
          `)}
          <form class="add-item-row" @submit=${this._addSectionItem}>
            <div class="add-item-search">
              <input type="text" .value=${this._newItemName} @input=${this._searchHouseholdCatalog}
                placeholder="Añadir artículo (detergente, pilas...)" />
              ${this._catalogResults.length>0?g`
                <div class="search-results">
                  ${this._catalogResults.map(i=>g`
                    <div class="search-result-item" @click=${()=>this._selectCatalogResult(i)}>${i.name}</div>
                  `)}
                </div>
              `:""}
            </div>
            <input type="number" .value=${this._newItemQuantity} @input=${i=>{this._newItemQuantity=i.target.value}} min="1" step="1" class="add-item-qty" />
            <button type="submit" class="btn-sm" ?disabled=${this._addingItem||!this._newItemName.trim()}>Añadir</button>
          </form>
        </div>
      </div>

      ${this._items.length>0?g`
        <div class="bottom-bar">
          <span class="info">${t>0?`${t} artículo(s) marcado(s) para comprar`:"Marca artículos para añadir a la nevera"}</span>
          <button @click=${this._addToPantry} ?disabled=${t===0||this._addingToPantry}>
            ${this._addingToPantry?"Añadiendo...":"Añadir comprados a nevera"}
          </button>
        </div>
      `:""}

      ${this._showConfirmAdd?g`
        <div class="confirm-overlay" @click=${()=>{this._showConfirmAdd=!1}}>
          <div class="confirm-modal" @click=${i=>i.stopPropagation()}>
            <h3>Añadir a la nevera</h3>
            <p class="confirm-hint">Indica la caducidad de cada artículo (opcional). Cada uno entra como un lote propio.</p>
            <div class="confirm-list">
              ${this._getPurchasedItems().map(i=>{var a;return g`
                <div class="confirm-item">
                  <span class="confirm-name">${((a=i.food)==null?void 0:a.name)||"?"}</span>
                  <span class="qty">${Mn(i.toBuy,i.unit)}</span>
                  <input
                    type="date"
                    class="confirm-date"
                    .value=${this._expiryDrafts[i.id]||""}
                    @input=${l=>{this._expiryDrafts={...this._expiryDrafts,[i.id]:l.target.value}}}
                  />
                </div>
              `})}
            </div>
            <div class="confirm-actions">
              <button class="btn-outline" @click=${()=>{this._showConfirmAdd=!1}}>Cancelar</button>
              <button @click=${this._confirmAddToPantry}>Confirmar</button>
            </div>
          </div>
        </div>
      `:""}
    `}};Me.styles=Xe`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem; }
    .top-bar-left { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .top-bar button { padding: 0.625rem 1.25rem; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; }
    .top-bar button:hover { background: var(--primary-hover); }
    .top-bar button:disabled { opacity: 0.6; }
    .btn-outline { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .btn-outline:hover { background: #f1f5f9; }
    .btn-sm { padding: 0.375rem 0.75rem; font-size: 0.75rem; }
    .empty-state { text-align: center; padding: 3rem 1rem; color: var(--text-muted); }
    .error { background: #fef2f2; color: #dc2626; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; margin-bottom: 1rem; }
    .category { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; margin-bottom: 0.75rem; overflow: hidden; }
    .category-header { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; cursor: pointer; user-select: none; font-weight: 600; font-size: 0.9rem; background: #f8fafc; border-bottom: 1px solid var(--border); transition: background 0.15s; }
    .category-header:hover { background: #f1f5f9; }
    .category-header .arrow { font-size: 0.75rem; color: var(--text-muted); transition: transform 0.2s; width: 16px; text-align: center; }
    .category-header .arrow.expanded { transform: rotate(90deg); }
    .category-header .count { color: var(--text-muted); font-weight: 400; font-size: 0.8rem; margin-left: auto; }
    .cat-check { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border: 2px solid var(--border); border-radius: 4px; flex-shrink: 0; font-size: 0.75rem; cursor: pointer; transition: background 0.15s, border-color 0.15s; }
    .cat-check:hover { border-color: var(--primary); }
    .cat-check.checked { background: var(--primary); border-color: var(--primary); color: white; }
    .items { transition: max-height 0.25s ease; }
    .items.collapsed { display: none; }
    .item { display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; cursor: pointer; border-bottom: 1px solid #f1f5f9; }
    .item:last-child { border-bottom: none; }
    .item.checked { opacity: 0.5; text-decoration: line-through; }
    .check { width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.75rem; }
    .item.checked .check { background: var(--primary); border-color: var(--primary); color: white; }
    .item-name { flex: 1; }
    .item-qty { color: var(--text-muted); font-size: 0.85rem; white-space: nowrap; }
    .item-remove-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1rem; padding: 0.125rem 0.25rem; }
    .item-remove-btn:hover { color: #dc2626; }
    .add-item-row { display: flex; gap: 0.5rem; align-items: flex-start; padding: 0.65rem 1rem; }
    .add-item-search { position: relative; flex: 1; }
    .add-item-search input { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.8125rem; font-family: inherit; }
    .add-item-search .search-results { position: absolute; top: 100%; left: 0; right: 0; z-index: 10; max-height: 160px; }
    .add-item-search .search-result-item { padding: 0.4rem 0.6rem; font-size: 0.8125rem; cursor: pointer; }
    .add-item-search .search-result-item:hover { background: #f1f5f9; }
    .add-item-qty { width: 60px; padding: 0.5rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.8125rem; font-family: inherit; }
    .bottom-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; padding: 1rem; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; }
    .bottom-bar button { padding: 0.625rem 1.25rem; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; }
    .bottom-bar button:hover { background: var(--primary-hover); }
    .bottom-bar button:disabled { opacity: 0.6; cursor: not-allowed; }
    .bottom-bar .info { font-size: 0.8125rem; color: var(--text-muted); }

    .confirm-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .confirm-modal {
      background: var(--surface);
      border-radius: 12px;
      padding: 1.5rem;
      max-width: 500px;
      width: 90%;
      max-height: 70vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }
    .confirm-modal h3 { margin: 0 0 1rem; font-size: 1rem; }
    .confirm-list { overflow-y: auto; flex: 1; margin-bottom: 1rem; }
    .confirm-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; font-size: 0.8125rem; }
    .confirm-item:last-child { border-bottom: none; }
    .confirm-item .confirm-name { flex: 1; }
    .confirm-item .qty { color: var(--primary); font-weight: 600; white-space: nowrap; }
    .confirm-hint { font-size: 0.75rem; color: var(--text-muted); margin: -0.5rem 0 0.75rem; }
    .confirm-date { padding: 0.3rem 0.4rem; border: 1px solid var(--border); border-radius: 6px; font-size: 0.75rem; font-family: inherit; }
    .confirm-actions { display: flex; justify-content: flex-end; gap: 0.5rem; }

    @media (max-width: 640px) {
      .category-header { padding: 0.75rem; font-size: 0.85rem; }
      .item { padding: 0.65rem 0.75rem; }
      .item-name { font-size: 0.9rem; }
      .top-bar { flex-direction: column; align-items: stretch; }
      .top-bar h2 { margin-bottom: 0; }
    }
  `;qe([C()],Me.prototype,"_items",2);qe([C()],Me.prototype,"_loading",2);qe([C()],Me.prototype,"_generating",2);qe([C()],Me.prototype,"_error",2);qe([C()],Me.prototype,"_collapsed",2);qe([C()],Me.prototype,"_addingToPantry",2);qe([C()],Me.prototype,"_showConfirmAdd",2);qe([C()],Me.prototype,"_expiryDrafts",2);qe([C()],Me.prototype,"_sections",2);qe([C()],Me.prototype,"_newItemName",2);qe([C()],Me.prototype,"_newItemQuantity",2);qe([C()],Me.prototype,"_catalogResults",2);qe([C()],Me.prototype,"_selectedCatalogItem",2);qe([C()],Me.prototype,"_addingItem",2);Me=qe([Je("compra-view")],Me);var Jl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Le=(e,t,i,a)=>{for(var l=a>1?void 0:a?Zl(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&Jl(t,i,l),l};const ec={LIMPIEZA:"Limpieza",HIGIENE:"Higiene",PAPELERIA:"Papelería",COCINA_NO_ALIMENTO:"Cocina (no alimento)",OTROS:"Otros"};let Ae=class extends ze{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._adding=!1,this._showCreateCatalogItem=!1,this._newCategory=""}connectedCallback(){super.connectedCallback(),this._loadStock()}async _loadStock(){this._loading=!0,this._error="";try{this._items=await Nt.stock()}catch(e){this._error=e.message||"Error al cargar el inventario del hogar"}finally{this._loading=!1}}async _searchCatalog(e){const t=e.target.value;if(this._searchQuery=t,this._selectedCatalogItem=null,t.length<2){this._searchResults=[];return}try{this._searchResults=await Nt.items(t)}catch{this._searchResults=[]}}_selectCatalogItem(e){this._selectedCatalogItem=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unit||"UNIDAD"}_openCreateCatalogItem(){this._showCreateCatalogItem=!0,this._newCategory=""}async _handleCreateCatalogItem(e){if(e.preventDefault(),!!this._searchQuery.trim())try{const t=await Nt.createItem({name:this._searchQuery.trim(),category:this._newCategory||void 0,unit:this._unit});this._selectCatalogItem(t),this._showCreateCatalogItem=!1}catch(t){this._error=t.message||"Error al crear artículo"}}async _saveItem(e){if(e.preventDefault(),!(!this._selectedCatalogItem&&!this._editingItem)){this._adding=!0;try{this._editingItem?await Nt.updateStock(this._editingItem.id,{quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):null}):await Nt.addStock({householdItemId:this._selectedCatalogItem.id,quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):void 0}),this._resetForm(),this._showAddForm=!1,await this._loadStock()}catch(t){this._error=t.message||"Error al guardar"}finally{this._adding=!1}}}async _removeItem(e){try{await Nt.removeStock(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar artículo"}}_editItem(e){var t;this._editingItem=e,this._selectedCatalogItem=e.householdItem,this._searchQuery=((t=e.householdItem)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._minThreshold=e.minThreshold!=null?String(e.minThreshold):"",this._showAddForm=!0}_resetForm(){this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._editingItem=null,this._showCreateCatalogItem=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetForm()}render(){return this._loading?g`<p>Cargando inventario del hogar...</p>`:g`
      <div class="top-bar">
        <h2>Hogar</h2>
        <button @click=${this._toggleForm}>${this._showAddForm?"Cancelar":"Añadir artículo"}</button>
      </div>

      ${this._error?g`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?g`
        <div class="form-card">
          <h3>${this._editingItem?"Editar artículo":"Añadir al inventario"}</h3>
          <form @submit=${this._saveItem}>
            <div class="form-row">
              <label>Buscar artículo</label>
              <input type="text" .value=${this._searchQuery} @input=${this._searchCatalog}
                placeholder="Ej: detergente, lejía, papel higiénico..." ?disabled=${!!this._editingItem} />
              ${this._searchResults.length>0?g`
                <div class="search-results">
                  ${this._searchResults.map(e=>g`
                    <div class="search-result-item" @click=${()=>this._selectCatalogItem(e)}>${e.name}</div>
                  `)}
                </div>
              `:this._searchQuery.length>=2&&!this._selectedCatalogItem&&!this._showCreateCatalogItem?g`
                <div class="search-results">
                  <div class="search-result-item create-item" @click=${this._openCreateCatalogItem}>
                    + Crear "${this._searchQuery}" como nuevo artículo
                  </div>
                </div>
              `:""}
            </div>

            ${this._showCreateCatalogItem?g`
              <div class="create-item-card">
                <div class="form-row">
                  <label>Categoría</label>
                  <select .value=${this._newCategory} @change=${e=>{this._newCategory=e.target.value}}>
                    <option value="">-- Sin categoría --</option>
                    ${Object.entries(ec).map(([e,t])=>g`<option value=${e}>${t}</option>`)}
                  </select>
                </div>
                <div class="form-actions">
                  <button type="button" @click=${this._handleCreateCatalogItem}>Crear artículo</button>
                  <button type="button" class="cancel" @click=${()=>{this._showCreateCatalogItem=!1}}>Cancelar</button>
                </div>
              </div>
            `:""}

            ${this._selectedCatalogItem||this._editingItem?g`
              <div class="form-inline">
                <div class="form-row">
                  <label>Cantidad</label>
                  <input type="number" .value=${this._quantity} @input=${e=>{this._quantity=e.target.value}} min="0.1" step="0.1" />
                </div>
                <div class="form-row">
                  <label>Unidad</label>
                  <select .value=${this._unit} @change=${e=>{this._unit=e.target.value}}>
                    <option value="UNIDAD">UNIDAD</option>
                    <option value="g">g</option>
                    <option value="ml">ml</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <label>Avisar cuando queden menos de (opcional)</label>
                <input type="number" .value=${this._minThreshold} @input=${e=>{this._minThreshold=e.target.value}} min="0" step="0.1" />
              </div>
              <div class="form-actions">
                <button type="submit" ?disabled=${this._adding}>${this._adding?"Guardando...":this._editingItem?"Guardar":"Añadir"}</button>
                <button type="button" class="cancel" @click=${()=>{this._resetForm(),this._showAddForm=!1}}>Cancelar</button>
              </div>
            `:""}
          </form>
        </div>
      `:""}

      ${this._items.length===0?g`<div class="empty-state"><p>Aún no has añadido nada al inventario del hogar (limpieza, higiene...).</p></div>`:g`
          <div class="list">
            ${this._items.map(e=>{var i;const t=e.minThreshold!=null&&e.quantity<e.minThreshold;return g`
                <div class="item ${t?"low":""}">
                  <div class="item-info">
                    <div class="item-name">${((i=e.householdItem)==null?void 0:i.name)||"?"}</div>
                    <div class="item-meta">
                      ${e.quantity} ${e.unit==="UNIDAD"?"ud":e.unit}
                      ${t?g` · <span class="low-label">queda poco</span>`:""}
                    </div>
                  </div>
                  <div style="display:flex;gap:0.25rem">
                    <button class="item-edit" @click=${()=>this._editItem(e)} title="Editar">✎</button>
                    <button class="item-remove" @click=${()=>this._removeItem(e.id)} title="Eliminar">✕</button>
                  </div>
                </div>
              `})}
          </div>
        `}
    `}};Ae.styles=Xe`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    button { padding: 0.625rem 1.25rem; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; transition: background 0.15s; }
    button:hover { background: var(--primary-hover); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { background: #fef2f2; color: #dc2626; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; margin-bottom: 1rem; }
    .empty-state { text-align: center; padding: 3rem 1rem; color: var(--text-muted); }
    .list { display: flex; flex-direction: column; gap: 0.5rem; }
    .item { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; }
    .item.low { border-color: #f59e0b; background: #fffbeb; }
    .item-info { display: flex; flex-direction: column; gap: 0.125rem; }
    .item-name { font-weight: 600; font-size: 0.875rem; }
    .item-meta { font-size: 0.75rem; color: var(--text-muted); }
    .item-meta .low-label { color: #b45309; font-weight: 600; }
    .item-remove, .item-edit { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem; padding: 0.25rem; transition: color 0.15s; }
    .item-remove:hover { color: #dc2626; }
    .item-edit:hover { color: var(--primary); }
    .form-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1.5rem; }
    .form-card h3 { font-size: 1rem; margin-bottom: 1rem; }
    .form-row { margin-bottom: 0.75rem; }
    .form-row label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
    .form-row input, .form-row select { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.875rem; font-family: inherit; outline: none; }
    .form-row input:focus { border-color: var(--primary); }
    .form-inline { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .search-results { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; max-height: 200px; overflow-y: auto; }
    .search-result-item { padding: 0.5rem 0.75rem; font-size: 0.8125rem; cursor: pointer; }
    .search-result-item:hover { background: #f1f5f9; }
    .search-result-item.create-item { color: var(--primary); font-weight: 600; border-top: 1px solid var(--border); }
    .create-item-card { background: #f8fafc; border: 1px dashed var(--primary); border-radius: 8px; padding: 1rem; margin-top: 0.75rem; }
    .form-actions { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
    .form-actions .cancel { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .form-actions .cancel:hover { background: #f1f5f9; }
    @media (max-width: 640px) { .top-bar { flex-direction: column; align-items: stretch; } }
  `;Le([C()],Ae.prototype,"_items",2);Le([C()],Ae.prototype,"_loading",2);Le([C()],Ae.prototype,"_error",2);Le([C()],Ae.prototype,"_showAddForm",2);Le([C()],Ae.prototype,"_editingItem",2);Le([C()],Ae.prototype,"_searchQuery",2);Le([C()],Ae.prototype,"_searchResults",2);Le([C()],Ae.prototype,"_selectedCatalogItem",2);Le([C()],Ae.prototype,"_quantity",2);Le([C()],Ae.prototype,"_unit",2);Le([C()],Ae.prototype,"_minThreshold",2);Le([C()],Ae.prototype,"_adding",2);Le([C()],Ae.prototype,"_showCreateCatalogItem",2);Le([C()],Ae.prototype,"_newCategory",2);Ae=Le([Je("household-view")],Ae);var tc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,et=(e,t,i,a)=>{for(var l=a>1?void 0:a?rc(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&tc(t,i,l),l};const ic={DIARIA:"Diaria",SEMANAL:"Semanal"};let He=class extends ze{constructor(){super(...arguments),this._chores=[],this._members=[],this._loading=!0,this._error="",this._showAddForm=!1,this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._saving=!1,this._applyingTemplate=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([nr.list(),vi.list()]);this._chores=e,this._members=t}catch(e){this._error=e.message||"Error al cargar las tareas"}finally{this._loading=!1}}async _toggle(e){const t=!e.completedInPeriod;this._chores=this._chores.map(i=>i.id===e.id?{...i,completedInPeriod:t}:i);try{t?await nr.complete(e.id):await nr.uncomplete(e.id)}catch{this._chores=this._chores.map(i=>i.id===e.id?{...i,completedInPeriod:!t}:i),this._error="Error al actualizar la tarea"}}async _addChore(e){if(e.preventDefault(),!!this._newName.trim()){this._saving=!0;try{const t=await nr.create({name:this._newName.trim(),frequency:this._newFrequency,assignedToMemberId:this._newMemberId||void 0});this._chores=[...this._chores,t],this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._showAddForm=!1}catch(t){this._error=t.message||"Error al crear la tarea"}finally{this._saving=!1}}}async _applyStarterTemplate(){this._applyingTemplate=!0,this._error="";try{await nr.applyTemplate("hogar-basico"),await this._load()}catch(e){this._error=e.message||"Error al cargar las tareas de ejemplo"}finally{this._applyingTemplate=!1}}async _removeChore(e){try{await nr.remove(e),this._chores=this._chores.filter(t=>t.id!==e)}catch{this._error="Error al eliminar la tarea"}}_renderGroup(e){const t=this._chores.filter(i=>i.frequency===e);return t.length===0?"":g`
      <h3>${ic[e]}</h3>
      <div class="list">
        ${t.map(i=>g`
          <div class="item ${i.completedInPeriod?"done":""}" @click=${()=>this._toggle(i)}>
            <div class="check">${i.completedInPeriod?"✓":""}</div>
            <span class="item-name">${i.name}</span>
            ${i.member?g`<span class="member-badge" style="background:${i.member.color}">${i.member.name}</span>`:""}
            <button class="item-remove" @click=${a=>{a.stopPropagation(),this._removeChore(i.id)}} title="Eliminar">✕</button>
          </div>
        `)}
      </div>
    `}render(){return this._loading?g`<p>Cargando tareas...</p>`:g`
      <div class="top-bar">
        <h2>Tareas del hogar</h2>
        <button @click=${()=>{this._showAddForm=!this._showAddForm}}>
          ${this._showAddForm?"Cancelar":"Añadir tarea"}
        </button>
      </div>

      ${this._error?g`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?g`
        <div class="form-card">
          <form @submit=${this._addChore}>
            <div class="form-row">
              <label>Nombre de la tarea</label>
              <input type="text" .value=${this._newName} @input=${e=>{this._newName=e.target.value}}
                placeholder="Ej: sacar la basura, poner lavadora..." />
            </div>
            <div class="form-row">
              <label>Frecuencia</label>
              <select .value=${this._newFrequency} @change=${e=>{this._newFrequency=e.target.value}}>
                <option value="SEMANAL">Semanal</option>
                <option value="DIARIA">Diaria</option>
              </select>
            </div>
            <div class="form-row">
              <label>Asignar a (opcional)</label>
              <select .value=${this._newMemberId} @change=${e=>{this._newMemberId=e.target.value}}>
                <option value="">-- Sin asignar --</option>
                ${this._members.map(e=>g`<option value=${e.id}>${e.name}</option>`)}
              </select>
            </div>
            <div class="form-actions">
              <button type="submit" ?disabled=${this._saving||!this._newName.trim()}>
                ${this._saving?"Guardando...":"Crear tarea"}
              </button>
              <button type="button" class="cancel" @click=${()=>{this._showAddForm=!1}}>Cancelar</button>
            </div>
          </form>
        </div>
      `:""}

      ${this._chores.length===0?g`
            <div class="empty-state">
              <p>Aún no hay tareas del hogar. Añade la primera.</p>
              <button ?disabled=${this._applyingTemplate} @click=${this._applyStarterTemplate}>
                ${this._applyingTemplate?"Cargando...":"Cargar tareas de ejemplo"}
              </button>
            </div>
          `:g`${this._renderGroup("DIARIA")}${this._renderGroup("SEMANAL")}`}
    `}};He.styles=Xe`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    h3 { font-size: 0.9rem; color: var(--text-muted); margin: 1.25rem 0 0.5rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    button { padding: 0.625rem 1.25rem; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; transition: background 0.15s; }
    button:hover { background: var(--primary-hover); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { background: #fef2f2; color: #dc2626; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; margin-bottom: 1rem; }
    .empty-state { text-align: center; padding: 2rem 1rem; color: var(--text-muted); }
    .empty-state button { margin-top: 0.75rem; }
    .list { display: flex; flex-direction: column; gap: 0.5rem; }
    .item { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.75rem; cursor: pointer; }
    .item.done { opacity: 0.55; }
    .check { width: 22px; height: 22px; border: 2px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.8rem; }
    .item.done .check { background: var(--primary); border-color: var(--primary); color: white; }
    .item-name { flex: 1; font-weight: 600; font-size: 0.875rem; }
    .item.done .item-name { text-decoration: line-through; }
    .member-badge { font-size: 0.6875rem; font-weight: 600; padding: 0.125rem 0.5rem; border-radius: 999px; color: white; white-space: nowrap; }
    .item-remove { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem; padding: 0.25rem; }
    .item-remove:hover { color: #dc2626; }
    .form-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1.5rem; }
    .form-row { margin-bottom: 0.75rem; }
    .form-row label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
    .form-row input, .form-row select { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.875rem; font-family: inherit; outline: none; }
    .form-actions { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
    .form-actions .cancel { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .form-actions .cancel:hover { background: #f1f5f9; }
    @media (max-width: 640px) { .top-bar { flex-direction: column; align-items: stretch; } }
  `;et([C()],He.prototype,"_chores",2);et([C()],He.prototype,"_members",2);et([C()],He.prototype,"_loading",2);et([C()],He.prototype,"_error",2);et([C()],He.prototype,"_showAddForm",2);et([C()],He.prototype,"_newName",2);et([C()],He.prototype,"_newFrequency",2);et([C()],He.prototype,"_newMemberId",2);et([C()],He.prototype,"_saving",2);et([C()],He.prototype,"_applyingTemplate",2);He=et([Je("chores-view")],He);var nc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,tt=(e,t,i,a)=>{for(var l=a>1?void 0:a?ac(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&nc(t,i,l),l};let Ve=class extends ze{constructor(){super(...arguments),this._user=null,this._familyMembers=[],this._selectedMemberId="",this._loading=!0,this._saving=!1,this._error="",this._success="",this._form={name:"",age:0,weightKg:0,heightCm:0,sex:"MASCULINO",activityLevel:"MODERADO",goal:"MANTENER",restrictions:[]},this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0},this._backupBusy=!1}connectedCallback(){super.connectedCallback(),this._load()}get _selectedMember(){return this._familyMembers.find(e=>e.id===this._selectedMemberId)}async _load(){var e;try{const t=await dr.me();this._user=t,this._familyMembers=((e=t.family)==null?void 0:e.members)||[],this._familyMembers.length>0&&(this._selectedMemberId=this._familyMembers[0].id,this._applyMember(this._familyMembers[0]))}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}_applyMember(e){this._form={name:e.name||"",age:e.age||0,weightKg:e.weightKg||0,heightCm:e.heightCm||0,sex:e.sex||"MASCULINO",activityLevel:e.activityLevel||"MODERADO",goal:e.goal||"MANTENER",restrictions:e.restrictions||[]},this._calculateMacros()}_selectMember(e){const t=e.target.value;this._selectedMemberId=t;const i=this._familyMembers.find(a=>a.id===t);i&&this._applyMember(i)}_handleInput(e){const t=e.target,i=t.name;if(i==="restrictions"){const a=t.value,l=t.checked;this._form={...this._form,restrictions:l?[...this._form.restrictions,a]:this._form.restrictions.filter(d=>d!==a)}}else i==="age"?this._form={...this._form,age:parseInt(t.value)||0}:["weightKg","heightCm"].includes(i)?this._form={...this._form,[i]:parseFloat(t.value)||0}:this._form={...this._form,[i]:t.value};this._calculateMacros()}async _save(){this._saving=!0,this._error="",this._success="";try{const e=await vi.update(this._selectedMemberId,{name:this._form.name,age:this._form.age,weightKg:this._form.weightKg,heightCm:this._form.heightCm,sex:this._form.sex,activityLevel:this._form.activityLevel,goal:this._form.goal,restrictions:this._form.restrictions}),t=this._familyMembers.findIndex(i=>i.id===this._selectedMemberId);t>=0&&(this._familyMembers=[...this._familyMembers.slice(0,t),e,...this._familyMembers.slice(t+1)]),this._success="Perfil actualizado correctamente"}catch(e){this._error=e.message||"Error al guardar"}finally{this._saving=!1}}async _addMember(){const e=prompt("Nombre del nuevo miembro:");if(e)try{const t=await vi.create({name:e});this._familyMembers=[...this._familyMembers,t],this._selectedMemberId=t.id,this._applyMember(t),this._success=`Miembro "${e}" añadido`}catch(t){this._error=t.message||"Error al añadir miembro"}}async _removeMember(e){var i;const t=this._familyMembers.find(a=>a.id===e);if(t&&confirm(`¿Eliminar a "${t.name}" de la familia?`))try{await vi.remove(e),this._familyMembers=this._familyMembers.filter(a=>a.id!==e),this._selectedMemberId===e&&(this._selectedMemberId=((i=this._familyMembers[0])==null?void 0:i.id)||"",this._familyMembers[0]&&this._applyMember(this._familyMembers[0])),this._success=`"${t.name}" eliminado`}catch(a){this._error=a.message||"Error al eliminar miembro"}}_onLogout(){window.location.hash="#/login"}async _downloadBackup(){const e=await Sl(),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),a=document.createElement("a");a.href=i,a.download=`mealprep-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i)}async _handleExport(){this._error="",this._success="";try{await this._downloadBackup(),this._success="Backup descargado"}catch(e){this._error=e.message||"Error al exportar"}}async _handleImport(e){var a;const t=e.target,i=(a=t.files)==null?void 0:a[0];if(t.value="",!!i&&confirm("Importar reemplaza TODOS tus datos actuales por los del fichero. Se descargará antes una copia de seguridad del estado actual, por si acaso. ¿Continuar?")){this._backupBusy=!0,this._error="",this._success="";try{await this._downloadBackup();const l=await i.text(),{report:d,catalogVersionMismatch:p}=await Cl(l),f=[];p&&f.push("el catálogo del backup es de otra versión de la app"),d.totalDropped>0&&f.push(`se descartaron ${d.totalDropped} referencia(s) que ya no existían`),alert(`Importación completada.${f.length?" "+f.join("; ")+".":""}`),window.location.reload()}catch(l){this._error=l.message||"Error al importar",this._backupBusy=!1}}}async _handleReset(){if(confirm("Esto borra TODOS tus datos locales (nevera, recetas propias, plan, listas, tareas...) y empieza de cero. Se descargará antes una copia de seguridad. ¿Seguro?")){this._backupBusy=!0,this._error="";try{await this._downloadBackup(),await Ml(),window.location.reload()}catch(e){this._error=e.message||"Error al reiniciar",this._backupBusy=!1}}}_calculateMacros(){const{age:e,weightKg:t,heightCm:i,sex:a,activityLevel:l,goal:d}=this._form;if(!e||!t||!i){this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0};return}const p=Math.round(a==="FEMENINO"?10*t+6.25*i-5*e-161:10*t+6.25*i-5*e+5),f={SEDENTARIO:1.2,LIGERO:1.375,MODERADO:1.55,ACTIVO:1.725},E={PERDER_PESO:.8,MANTENER:1,GANAR_MUSCULO:1.15},P=Math.round(p*(f[l]||1.55)*(E[d]||1)),N=Math.round(t*(d==="PERDER_PESO"?2:d==="GANAR_MUSCULO"?2.2:1.6)),V=Math.round(P*.28/9),ie=Math.round(Math.max(0,P-N*4-V*9)/4);this._liveMacros={tmb:p,dailyCalories:P,dailyProteinG:N,dailyCarbsG:ie,dailyFatG:V}}render(){var t;if(this._loading)return g`<p>Cargando perfil...</p>`;const e=this._selectedMember;return g`
      <h2>Mi perfil</h2>
      ${this._error?g`<div class="error">${this._error}</div>`:""}
      ${this._success?g`<div class="success">${this._success}</div>`:""}

      <div class="member-bar">
        <select .value=${this._selectedMemberId} @change=${this._selectMember}>
          ${this._familyMembers.map(i=>g`
            <option value=${i.id}>${i.name}</option>
          `)}
        </select>
        <button @click=${this._addMember}>+ Añadir</button>
        ${this._familyMembers.length>1?g`
          <button class="btn-danger" @click=${()=>this._removeMember(this._selectedMemberId)}>Eliminar</button>
        `:""}
      </div>

      <div class="profile-grid">
        <div class="card">
          <h3>Datos personales</h3>
          <div class="field">
            <label>Nombre</label>
            <input name="name" .value=${this._form.name} @input=${this._handleInput} placeholder="Tu nombre">
          </div>
          <div class="field">
            <label>Email</label>
            <input .value=${((t=this._user)==null?void 0:t.email)||""} disabled style="opacity:0.6">
          </div>
          <div class="field">
            <label>Edad</label>
            <input name="age" type="number" min="10" max="120" .value=${this._form.age} @input=${this._handleInput}>
          </div>
          <div class="field">
            <label>Peso (kg)</label>
            <input name="weightKg" type="number" step="0.1" .value=${this._form.weightKg} @input=${this._handleInput}>
          </div>
          <div class="field">
            <label>Altura (cm)</label>
            <input name="heightCm" type="number" step="0.1" .value=${this._form.heightCm} @input=${this._handleInput}>
          </div>
          <div class="field">
            <label>Sexo</label>
            <select name="sex" .value=${this._form.sex} @change=${this._handleInput}>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMENINO">Femenino</option>
            </select>
          </div>
          <div class="field">
            <label>Actividad física</label>
            <select name="activityLevel" .value=${this._form.activityLevel} @change=${this._handleInput}>
              <option value="SEDENTARIO">Sedentario</option>
              <option value="LIGERO">Ligero (1-3 días/semana)</option>
              <option value="MODERADO">Moderado (3-5 días/semana)</option>
              <option value="ACTIVO">Activo (6-7 días/semana)</option>
            </select>
          </div>
          <div class="field">
            <label>Objetivo</label>
            <select name="goal" .value=${this._form.goal} @change=${this._handleInput}>
              <option value="PERDER_PESO">Perder peso</option>
              <option value="MANTENER">Mantener peso</option>
              <option value="GANAR_MUSCULO">Ganar músculo</option>
            </select>
          </div>
        </div>

        <div>
          <div class="card" style="margin-bottom:1rem">
            <h3>Macros calculados</h3>
            <div class="macro-card">
              <div class="macro-grid">
                <div class="macro-item"><div class="value">${this._liveMacros.dailyCalories||(e==null?void 0:e.dailyCalories)||"—"}</div><div class="label">Calorías</div></div>
                <div class="macro-item"><div class="value">${this._liveMacros.dailyProteinG||(e==null?void 0:e.dailyProteinG)||"—"}g</div><div class="label">Proteínas</div></div>
                <div class="macro-item"><div class="value">${this._liveMacros.dailyCarbsG||(e==null?void 0:e.dailyCarbsG)||"—"}g</div><div class="label">Carbohidratos</div></div>
                <div class="macro-item"><div class="value">${this._liveMacros.dailyFatG||(e==null?void 0:e.dailyFatG)||"—"}g</div><div class="label">Grasas</div></div>
              </div>
              <div style="margin-top:0.75rem;font-size:0.8rem;color:var(--text-muted);text-align:center">
                TMB: ${this._liveMacros.tmb||Math.round((e==null?void 0:e.tmb)||0)} kcal/día · Cálculo en vivo
              </div>
            </div>
          </div>

          <div class="card">
            <h3>Restricciones dietéticas</h3>
            <div class="checkbox-grid">
              ${["vegetariano","vegano","sin gluten","sin lactosa","sin frutos secos","sin huevo","bajo en sodio","diabético"].map(i=>{const a=i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ /g,"_");return g`
                  <label>
                    <input type="checkbox" name="restrictions" value=${a}
                      ?checked=${this._form.restrictions.includes(a)}
                      @change=${this._handleInput}>
                    ${i.charAt(0).toUpperCase()+i.slice(1)}
                  </label>
                `})}
            </div>
          </div>

          <div class="actions">
            <button class="btn-primary" @click=${this._save} ?disabled=${this._saving}>
              ${this._saving?"Guardando...":"Guardar cambios"}
            </button>
            ${""}
          </div>

          ${g`
            <details class="backup-details">
              <summary>Copia de seguridad</summary>
              <p class="hint">Tus datos solo viven en este navegador. Exporta de vez en cuando.</p>
              <div class="backup-actions">
                <button type="button" class="btn-outline" @click=${this._handleExport} ?disabled=${this._backupBusy}>
                  Exportar
                </button>
                <label class="btn-outline file-label ${this._backupBusy?"disabled":""}">
                  Importar
                  <input type="file" accept="application/json" @change=${this._handleImport} ?disabled=${this._backupBusy} hidden />
                </label>
                <button type="button" class="btn-danger" @click=${this._handleReset} ?disabled=${this._backupBusy}>
                  ${this._backupBusy?"Procesando...":"Reiniciar"}
                </button>
              </div>
            </details>
          `}
        </div>
      </div>
    `}};Ve.styles=Xe`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1.5rem; }
    .member-bar { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .member-bar select { flex: 1; min-width: 180px; padding: 0.6rem 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; font-family: inherit; background: var(--bg); color: var(--text); }
    .member-bar button { padding: 0.5rem 1rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.85rem; font-weight: 600; font-family: inherit; cursor: pointer; background: var(--surface); color: var(--text); }
    .member-bar button:hover { background: #f1f5f9; }
    .member-bar .btn-danger { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
    .member-bar .btn-danger:hover { background: #fee2e2; }
    .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; }
    .card h3 { font-size: 1rem; margin-bottom: 1rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .field { margin-bottom: 1rem; }
    .field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--text); }
    .field input, .field select { width: 100%; padding: 0.6rem 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; font-family: inherit; background: var(--bg); color: var(--text); box-sizing: border-box; }
    .field input:focus, .field select:focus { outline: 2px solid var(--primary); outline-offset: -1px; }
    .checkbox-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }
    .checkbox-grid label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; cursor: pointer; }
    .checkbox-grid input[type="checkbox"] { width: auto; }
    .macro-card { background: #f0f4ff; border: 1px solid #c7d2fe; border-radius: 12px; padding: 1.25rem; }
    .macro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem; }
    .macro-item { text-align: center; }
    .macro-item .value { font-size: 1.5rem; font-weight: 700; color: var(--primary); }
    .macro-item .label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
    .actions button { padding: 0.625rem 1.25rem; border: none; border-radius: 8px; font-size: 0.875rem; font-weight: 600; font-family: inherit; cursor: pointer; }
    .btn-primary { background: var(--primary); color: white; }
    .btn-primary:hover { background: var(--primary-hover); }
    .btn-primary:disabled { opacity: 0.6; }
    .btn-danger { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca !important; }
    .btn-danger:hover { background: #fee2e2; }
    .error { background: #fef2f2; color: #dc2626; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; margin-bottom: 1rem; }
    .success { background: #f0fdf4; color: #16a34a; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; margin-bottom: 1rem; }

    .backup-details { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border); }
    .backup-details summary { cursor: pointer; font-weight: 600; font-size: 0.9rem; color: var(--text); }
    .backup-details .hint { font-size: 0.8125rem; color: var(--text-muted); margin: 0.5rem 0 0.75rem; }
    .backup-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .backup-actions button, .backup-actions .file-label {
      padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8125rem; font-weight: 600;
      font-family: inherit; cursor: pointer; display: inline-flex; align-items: center;
    }
    .btn-outline { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
    .btn-outline:hover { background: #f1f5f9; }
    .backup-actions button:disabled, .file-label.disabled { opacity: 0.6; cursor: not-allowed; }

    @media (max-width: 768px) {
      .profile-grid { grid-template-columns: 1fr; }
      .checkbox-grid { grid-template-columns: 1fr; }
      .macro-grid { grid-template-columns: 1fr 1fr; }
    }
  `;tt([C()],Ve.prototype,"_user",2);tt([C()],Ve.prototype,"_familyMembers",2);tt([C()],Ve.prototype,"_selectedMemberId",2);tt([C()],Ve.prototype,"_loading",2);tt([C()],Ve.prototype,"_saving",2);tt([C()],Ve.prototype,"_error",2);tt([C()],Ve.prototype,"_success",2);tt([C()],Ve.prototype,"_form",2);tt([C()],Ve.prototype,"_liveMacros",2);tt([C()],Ve.prototype,"_backupBusy",2);Ve=tt([Je("profile-page")],Ve);var oc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,Ut=(e,t,i,a)=>{for(var l=a>1?void 0:a?sc(t,i):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(l=(a?p(t,i,l):p(l))||l);return a&&l&&oc(t,i,l),l};let mt=class extends ze{constructor(){super(...arguments),this._page="loading",this._authed=!1,this._needsOnboarding=!1,this._menuOpen=!1,this._loginMessage="",this._globalError="",this._onHashChange=()=>{const e=window.location.hash.replace(/^#\//,"")||"plan";if(this._authed=Qa(),!this._authed){e==="register"?this._page="register":this._page="login";return}if(this._needsOnboarding&&e!=="onboarding"){window.location.hash="#/onboarding";return}switch(e){case"onboarding":this._page="onboarding";break;case"plan":this._page="plan";break;case"nevera":this._page="nevera";break;case"recetas":this._page="recetas";break;case"compra":this._page="compra";break;case"hogar":this._page="hogar";break;case"tareas":this._page="tareas";break;case"perfil":this._page="perfil";break;default:this._page="plan",window.location.hash="#/plan"}},this._goToRegister=e=>{e.preventDefault(),window.location.hash="#/register"},this._goToLogin=e=>{e.preventDefault(),window.location.hash="#/login"},this._onLogin=()=>{this._authed=!0,this._loginMessage="",this._checkOnboarding().then(()=>{this._needsOnboarding?window.location.hash="#/onboarding":window.location.hash="#/plan"})},this._onOnboardingComplete=()=>{this._needsOnboarding=!1,window.location.hash="#/plan"},this._onLogout=e=>{e.preventDefault(),this._authed=!1,this._loginMessage="",window.location.hash="#/login"},this._navigate=e=>{const t=e.currentTarget;t&&(window.location.hash=t.hash)}}connectedCallback(){super.connectedCallback(),this._authed=Qa(),this._init(),window.addEventListener("hashchange",this._onHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChange)}async _init(){this._authed?await this._checkOnboarding():(!window.location.hash||window.location.hash==="#/")&&(window.location.hash="#/login"),this._onHashChange()}async _checkOnboarding(){var e,t;try{const a=(t=(e=(await dr.me()).family)==null?void 0:e.members)==null?void 0:t[0];this._needsOnboarding=!(a!=null&&a.dailyCalories),this._globalError=""}catch{this._globalError="No se pudo comprobar tu perfil. Vuelve a intentarlo en unos segundos."}}_renderPage(){switch(this._page){case"loading":return g`<div class="loading-screen"><p>Cargando...</p></div>`;case"login":return g`<login-page
          .message=${this._loginMessage}
          @register=${this._goToRegister}
          @login-success=${this._onLogin}
        ></login-page>`;case"register":return g`<register-page
          @login=${this._goToLogin}
          @register-success=${this._onLogin}
        ></register-page>`;case"onboarding":return g`<onboarding-page
          @onboarding-complete=${this._onOnboardingComplete}
        ></onboarding-page>`;case"plan":return g`<plan-view></plan-view>`;case"nevera":return g`<pantry-view></pantry-view>`;case"recetas":return g`<recetas-view></recetas-view>`;case"compra":return g`<compra-view></compra-view>`;case"hogar":return g`<household-view></household-view>`;case"tareas":return g`<chores-view></chores-view>`;case"perfil":return g`<profile-page></profile-page>`;default:return g`<p>Página no encontrada</p>`}}_isActive(e){return this._page===e?"active":""}render(){if(this._page==="loading"||this._page==="login"||this._page==="register"||this._page==="onboarding")return g`
        <div class="app-shell">
          ${this._renderPage()}
        </div>
      `;const e=()=>{this._menuOpen=!1};return g`
      <div class="app-shell">
        <div class="overlay ${this._menuOpen?"open":""}" @click=${e}></div>
        <header>
          <h1 @click=${this._navigate} hash="#/plan">MealPrepHelper</h1>
          <button class="hamburger" @click=${()=>{this._menuOpen=!this._menuOpen}}>
            ${this._menuOpen?"✕":"☰"}
          </button>
          <nav class=${this._menuOpen?"open":""} @click=${e}>
            <a href="#/plan" class=${this._isActive("plan")} @click=${this._navigate}>Plan semanal</a>
            <a href="#/nevera" class=${this._isActive("nevera")} @click=${this._navigate}>Nevera</a>
            <a href="#/recetas" class=${this._isActive("recetas")} @click=${this._navigate}>Recetas</a>
            <a href="#/compra" class=${this._isActive("compra")} @click=${this._navigate}>Compra</a>
            <a href="#/hogar" class=${this._isActive("hogar")} @click=${this._navigate}>Hogar</a>
            <a href="#/tareas" class=${this._isActive("tareas")} @click=${this._navigate}>Tareas</a>
            <a href="#/perfil" class=${this._isActive("perfil")} @click=${this._navigate}>Perfil</a>
            ${""}
          </nav>
        </header>
        <main>
          ${this._globalError?g`<div class="global-banner">${this._globalError}</div>`:""}
          ${this._renderPage()}
        </main>
      </div>
    `}};mt.styles=Xe`
    :host {
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --bg: #f8fafc;
      --surface: #ffffff;
      --text: #1e293b;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --radius: 12px;

      display: block;
      min-height: 100dvh;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
    }

    * {
      margin: 0;
      box-sizing: border-box;
    }

    .app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100dvh;
    }

    header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    header h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary);
      cursor: pointer;
    }

    .hamburger {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text);
      padding: 0.5rem;
      font-family: inherit;
      line-height: 1;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    nav a, nav button {
      text-decoration: none;
      color: var(--text-muted);
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background 0.15s, color 0.15s;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
    }

    nav a:hover, nav button:hover {
      background: #f1f5f9;
      color: var(--primary);
    }

    nav a.active {
      color: var(--primary);
      background: #eef2ff;
    }

    .overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      z-index: 98;
    }

    main {
      flex: 1;
      padding: 1.5rem;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }

    .global-banner {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .loading-screen {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      font-size: 1.125rem;
      color: var(--text-muted);
    }

    @media (max-width: 768px) {
      .hamburger { display: block; }
      nav {
        display: none;
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        flex-direction: column;
        padding: 0.75rem;
        gap: 0.25rem;
        z-index: 99;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      }
      nav.open { display: flex; }
      nav a, nav button { width: 100%; text-align: left; padding: 0.75rem; }
      .overlay.open { display: block; }
      main { padding: 1rem; }
    }
    @media (max-width: 480px) {
      header { padding: 0 0.75rem; }
    }
  `;Ut([C()],mt.prototype,"_page",2);Ut([C()],mt.prototype,"_authed",2);Ut([C()],mt.prototype,"_needsOnboarding",2);Ut([C()],mt.prototype,"_menuOpen",2);Ut([C()],mt.prototype,"_loginMessage",2);Ut([C()],mt.prototype,"_globalError",2);mt=Ut([Je("mpp-app")],mt);export{pe as n,b as s};
