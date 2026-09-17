(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa=globalThis,vn=wa.ShadowRoot&&(wa.ShadyCSS===void 0||wa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yn=Symbol(),Xn=new WeakMap;let Ho=class{constructor(t,r,a){if(this._$cssResult$=!0,a!==yn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(vn&&t===void 0){const a=r!==void 0&&r.length===1;a&&(t=Xn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Xn.set(r,t))}return t}toString(){return this.cssText}};const Vo=e=>new Ho(typeof e=="string"?e:e+"",void 0,yn),H=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((a,i,n)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new Ho(r,e,yn)},sl=(e,t)=>{if(vn)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const a=document.createElement("style"),i=wa.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=r.cssText,e.appendChild(a)}},Zn=vn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const a of t.cssRules)r+=a.cssText;return Vo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ll,defineProperty:cl,getOwnPropertyDescriptor:dl,getOwnPropertyNames:ul,getOwnPropertySymbols:pl,getPrototypeOf:hl}=Object,ht=globalThis,Jn=ht.trustedTypes,ml=Jn?Jn.emptyScript:"",fi=ht.reactiveElementPolyfillSupport,Mr=(e,t)=>e,Ta={toAttribute(e,t){switch(t){case Boolean:e=e?ml:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},bn=(e,t)=>!ll(e,t),eo={attribute:!0,type:String,converter:Ta,reflect:!1,useDefault:!1,hasChanged:bn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ht.litPropertyMetadata??(ht.litPropertyMetadata=new WeakMap);let Xt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=eo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,r);i!==void 0&&cl(this.prototype,t,i)}}static getPropertyDescriptor(t,r,a){const{get:i,set:n}=dl(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const s=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(t,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??eo}static _$Ei(){if(this.hasOwnProperty(Mr("elementProperties")))return;const t=hl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mr("properties"))){const r=this.properties,a=[...ul(r),...pl(r)];for(const i of a)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[a,i]of r)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const i=this._$Eu(r,a);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const i of a)r.unshift(Zn(i))}else t!==void 0&&r.push(Zn(t));return r}static _$Eu(t,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostConnected)==null?void 0:a.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostDisconnected)==null?void 0:a.call(r)})}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){var n;const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(i!==void 0&&a.reflect===!0){const o=(((n=a.converter)==null?void 0:n.toAttribute)!==void 0?a.converter:Ta).toAttribute(r,a.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){var n,o;const a=this.constructor,i=a._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=a.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:Ta;this._$Em=i;const c=l.fromAttribute(r,s.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(t,r,a,i=!1,n){var o;if(t!==void 0){const s=this.constructor;if(i===!1&&(n=this[t]),a??(a=s.getPropertyOptions(t)),!((a.hasChanged??bn)(n,r)||a.useDefault&&a.reflect&&n===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(s._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:i,wrapped:n},o){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??r??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:s}=o,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(a=this._$EO)==null||a.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(a=>{var i;return(i=a.hostUpdated)==null?void 0:i.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};Xt.elementStyles=[],Xt.shadowRootOptions={mode:"open"},Xt[Mr("elementProperties")]=new Map,Xt[Mr("finalized")]=new Map,fi==null||fi({ReactiveElement:Xt}),(ht.reactiveElementVersions??(ht.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=globalThis,to=e=>e,Da=Ar.trustedTypes,ro=Da?Da.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wo="$lit$",ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Qo="?"+ct,fl=`<${Qo}>`,zt=document,Dr=()=>zt.createComment(""),Or=e=>e===null||typeof e!="object"&&typeof e!="function",_n=Array.isArray,gl=e=>_n(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",gi=`[ 	
\f\r]`,yr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,io=/>/g,Et=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,oo=/"/g,Yo=/^(?:script|style|textarea|title)$/i,Xo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),d=Xo(1),Ne=Xo(2),rr=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),so=new WeakMap,Pt=zt.createTreeWalker(zt,129);function Zo(e,t){if(!_n(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ro!==void 0?ro.createHTML(t):t}const vl=(e,t)=>{const r=e.length-1,a=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=yr;for(let s=0;s<r;s++){const l=e[s];let c,u,p=-1,m=0;for(;m<l.length&&(o.lastIndex=m,u=o.exec(l),u!==null);)m=o.lastIndex,o===yr?u[1]==="!--"?o=ao:u[1]!==void 0?o=io:u[2]!==void 0?(Yo.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Et):u[3]!==void 0&&(o=Et):o===Et?u[0]===">"?(o=i??yr,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Et:u[3]==='"'?oo:no):o===oo||o===no?o=Et:o===ao||o===io?o=yr:(o=Et,i=void 0);const w=o===Et&&e[s+1].startsWith("/>")?" ":"";n+=o===yr?l+fl:p>=0?(a.push(c),l.slice(0,p)+Wo+l.slice(p)+ct+w):l+ct+(p===-2?s:w)}return[Zo(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class Rr{constructor({strings:t,_$litType$:r},a){let i;this.parts=[];let n=0,o=0;const s=t.length-1,l=this.parts,[c,u]=vl(t,r);if(this.el=Rr.createElement(c,a),Pt.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=Pt.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(Wo)){const m=u[o++],w=i.getAttribute(p).split(ct),h=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:h[2],strings:w,ctor:h[1]==="."?bl:h[1]==="?"?_l:h[1]==="@"?wl:ti}),i.removeAttribute(p)}else p.startsWith(ct)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(Yo.test(i.tagName)){const p=i.textContent.split(ct),m=p.length-1;if(m>0){i.textContent=Da?Da.emptyScript:"";for(let w=0;w<m;w++)i.append(p[w],Dr()),Pt.nextNode(),l.push({type:2,index:++n});i.append(p[m],Dr())}}}else if(i.nodeType===8)if(i.data===Qo)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(ct,p+1))!==-1;)l.push({type:7,index:n}),p+=ct.length-1}n++}}static createElement(t,r){const a=zt.createElement("template");return a.innerHTML=t,a}}function ar(e,t,r=e,a){var o,s;if(t===rr)return t;let i=a!==void 0?(o=r._$Co)==null?void 0:o[a]:r._$Cl;const n=Or(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,a)),a!==void 0?(r._$Co??(r._$Co=[]))[a]=i:r._$Cl=i),i!==void 0&&(t=ar(e,i._$AS(e,t.values),i,a)),t}class yl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:a}=this._$AD,i=((t==null?void 0:t.creationScope)??zt).importNode(r,!0);Pt.currentNode=i;let n=Pt.nextNode(),o=0,s=0,l=a[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Qr(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new xl(n,this,t)),this._$AV.push(c),l=a[++s]}o!==(l==null?void 0:l.index)&&(n=Pt.nextNode(),o++)}return Pt.currentNode=zt,i}p(t){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}}class Qr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,a,i){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ar(this,t,r),Or(t)?t===le||t==null||t===""?(this._$AH!==le&&this._$AR(),this._$AH=le):t!==this._$AH&&t!==rr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==le&&Or(this._$AH)?this._$AA.nextSibling.data=t:this.T(zt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:r,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Rr.createElement(Zo(a.h,a.h[0]),this.options)),a);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new yl(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=so.get(t.strings);return r===void 0&&so.set(t.strings,r=new Rr(t)),r}k(t){_n(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,i=0;for(const n of t)i===r.length?r.push(a=new Qr(this.O(Dr()),this.O(Dr()),this,this.options)):a=r[i],a._$AI(n),i++;i<r.length&&(this._$AR(a&&a._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,r);t!==this._$AB;){const i=to(t).nextSibling;to(t).remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class ti{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,i,n){this.type=1,this._$AH=le,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=le}_$AI(t,r=this,a,i){const n=this.strings;let o=!1;if(n===void 0)t=ar(this,t,r,0),o=!Or(t)||t!==this._$AH&&t!==rr,o&&(this._$AH=t);else{const s=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=ar(this,s[a+l],r,l),c===rr&&(c=this._$AH[l]),o||(o=!Or(c)||c!==this._$AH[l]),c===le?t=le:t!==le&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bl extends ti{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===le?void 0:t}}class _l extends ti{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==le)}}class wl extends ti{constructor(t,r,a,i,n){super(t,r,a,i,n),this.type=5}_$AI(t,r=this){if((t=ar(this,t,r,0)??le)===rr)return;const a=this._$AH,i=t===le&&a!==le||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==le&&(a===le||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class xl{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){ar(this,t)}}const vi=Ar.litHtmlPolyfillSupport;vi==null||vi(Rr,Qr),(Ar.litHtmlVersions??(Ar.litHtmlVersions=[])).push("3.3.3");const $l=(e,t,r)=>{const a=(r==null?void 0:r.renderBefore)??t;let i=a._$litPart$;if(i===void 0){const n=(r==null?void 0:r.renderBefore)??null;a._$litPart$=i=new Qr(t.insertBefore(Dr(),n),n,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis;class W extends Xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$l(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return rr}}var Go;W._$litElement$=!0,W.finalized=!0,(Go=Ot.litElementHydrateSupport)==null||Go.call(Ot,{LitElement:W});const yi=Ot.litElementPolyfillSupport;yi==null||yi({LitElement:W});(Ot.litElementVersions??(Ot.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Il={attribute:!0,type:String,converter:Ta,reflect:!1,hasChanged:bn},El=(e=Il,t,r)=>{const{kind:a,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),a==="accessor"){const{name:o}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,l,e,!0,s)},init(s){return s!==void 0&&this.C(o,void 0,e,s),s}}}if(a==="setter"){const{name:o}=r;return function(s){const l=this[o];t.call(this,s),this.requestUpdate(o,l,e,!0,s)}}throw Error("Unsupported decorator location: "+a)};function j(e){return(t,r)=>typeof r=="object"?El(e,t,r):((a,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,a),o?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){return j({...e,state:!0,attribute:!1})}const br={terracotta:"#D66B52",olive:"#6B7F5B",cream:"#F8F6EE",charcoal:"#2E2E2E",butter:"#F6E3A1"},Jo=`
  --etxa-color-primary: ${br.terracotta};
  --etxa-color-primary-strong: #a84432;
  --etxa-color-primary-hover: #8b3428;
  --etxa-color-secondary: ${br.olive};
  --etxa-color-background: ${br.cream};
  --etxa-color-surface: #fffdf8;
  --etxa-color-text: ${br.charcoal};
  --etxa-color-text-muted: #68665f;
  --etxa-color-accent: ${br.butter};
  --etxa-color-border: #dfdbce;
  --etxa-color-focus: #315caa;
  --etxa-color-success: #4f6f45;
  --etxa-color-danger: #b44138;

  /* Fondos y estados derivados de la paleta. Existen para que las vistas anteriores al rediseño
     puedan dejar de usar los grises y azules heredados sin perder el significado (peligro, aviso,
     éxito) que tenían esos colores. */
  --etxa-color-surface-muted: #f1eee2;
  --etxa-color-surface-hover: #ebe7d8;
  --etxa-color-primary-soft: #faede9;
  --etxa-color-danger-soft: #fbecea;
  --etxa-color-danger-hover: #f6dcd8;
  --etxa-color-danger-border: #efc6c1;
  --etxa-color-warning: #a07a1b;
  --etxa-color-warning-strong: #7a5a12;
  --etxa-color-warning-soft: #fdf4dc;
  --etxa-color-warning-border: #efdca0;
  --etxa-color-success-soft: #eef3ea;
  --etxa-color-success-border: #c9d8bf;
  --etxa-shadow-sm: 0 2px 8px rgb(46 46 46 / 8%);
  --etxa-shadow-md: 0 12px 30px rgb(46 46 46 / 12%);
  --etxa-radius-sm: 0.5rem;
  --etxa-radius-md: 0.875rem;
  --etxa-radius-lg: 1.25rem;
  --etxa-space-1: 0.25rem;
  --etxa-space-2: 0.5rem;
  --etxa-space-3: 0.75rem;
  --etxa-space-4: 1rem;
  --etxa-space-5: 1.5rem;
  --etxa-space-6: 2rem;
  --etxa-touch-target: 2.75rem;
  --etxa-content-width: 75rem;
  --etxa-font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --etxa-font-heading: 'Sora', 'Inter', system-ui, sans-serif;

  /* Aliases temporales para las vistas anteriores al rediseño E6/E7. */
  --primary: var(--etxa-color-primary-strong);
  --primary-hover: var(--etxa-color-primary-hover);
  --bg: var(--etxa-color-background);
  --surface: var(--etxa-color-surface);
  --text: var(--etxa-color-text);
  --text-muted: var(--etxa-color-text-muted);
  --border: var(--etxa-color-border);
  --radius: var(--etxa-radius-md);
`,es=H`
  :host {
    ${Vo(Jo)}
  }
`;function kl(){if(document.querySelector("[data-etxa-tokens]"))return;const e=document.createElement("style");e.dataset.etxaTokens="",e.textContent=`:root { ${Jo} }`,document.head.append(e)}const Sl="/asistente_domestico_build/assets/inter-variable-DiVDrmQJ.woff2",Cl="/asistente_domestico_build/assets/sora-variable-BedAVQot.woff2",ts=H`
  :host {
    font-family: var(--etxa-font-body);
    font-synthesis: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--etxa-font-heading);
    text-wrap: balance;
  }
`;function Ml(){if(document.querySelector("[data-etxa-typography]"))return;const e=document.createElement("style");e.dataset.etxaTypography="",e.textContent=`
    @font-face {
      font-family: 'Inter';
      src: url('${Sl}') format('woff2');
      font-style: normal;
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
      font-family: 'Sora';
      src: url('${Cl}') format('woff2');
      font-style: normal;
      font-weight: 100 800;
      font-display: swap;
    }
  `,document.head.append(e)}const Re=H`
  button, a, input, select, textarea {
    font: inherit;
  }

  button, a, [tabindex] {
    -webkit-tap-highlight-color: transparent;
  }

  :focus-visible {
    outline: 3px solid var(--etxa-color-focus);
    outline-offset: 3px;
  }

  button:disabled, [aria-disabled='true'] {
    cursor: not-allowed;
  }
`,ri=H`
  .state-message {
    border: 1px solid var(--etxa-color-border);
    border-radius: var(--etxa-radius-md);
    padding: var(--etxa-space-4);
    background: var(--etxa-color-surface);
    color: var(--etxa-color-text-muted);
  }

  .state-message[role='alert'] {
    border-color: color-mix(in srgb, var(--etxa-color-danger), white 55%);
    color: var(--etxa-color-danger);
  }
`,Ve=H`
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`,Al="/asistente_domestico_build/assets/done-house-BgF1dyos.webp",Pl="/asistente_domestico_build/assets/welcome-kitchen-8re3KmDC.webp",wn={welcomeKitchen:Pl,doneHouse:Al};function Tl(){if(document.querySelector("[data-etxa-welcome-preload]"))return;const e=document.createElement("link");e.rel="preload",e.as="image",e.href=wn.welcomeKitchen,e.dataset.etxaWelcomePreload="",document.head.append(e)}const ji={id:"inicio",label:"Inicio",icon:"home"},rs={id:"perfil",label:"Perfil",icon:"profile"},Yr=[{id:"MEALS",title:"Comidas",summary:"Planifica menús, guarda recetas y controla la nevera",description:"Planifica el menú de la semana, guarda tus recetas y aprovecha lo que ya tienes en la nevera antes de que caduque.",icon:"recipes",routes:[{id:"plan",label:"Planificar",icon:"calendar"},{id:"nevera",label:"Nevera",icon:"fridge"},{id:"recetas",label:"Recetas",icon:"recipes"}]},{id:"SHOPPING",title:"Compra",summary:"Una lista que se calcula sola a partir del plan",description:"La lista de la compra se genera a partir del plan y de lo que falta en casa, y se recalcula sola cuando cambias algo.",icon:"cart",routes:[{id:"compra",label:"Compras",icon:"cart"}]},{id:"HOUSEHOLD",title:"Hogar",summary:"Limpieza, higiene y todo lo que no se come",description:"Lleva el inventario de lo que no se come —limpieza, higiene, papelería— y avisa cuando algo baja del mínimo.",icon:"household",routes:[{id:"hogar",label:"Hogar",icon:"household"}]},{id:"CHORES",title:"Tareas",summary:"Tareas diarias y semanales repartidas en casa",description:"Reparte las tareas diarias y semanales entre quienes vivís en casa y ve de un vistazo lo que queda por hacer hoy.",icon:"chores",routes:[{id:"tareas",label:"Tareas",icon:"chores"}]}];function as(e){const t=Yr.find(r=>r.id===e);if(!t)throw new Error(`Módulo desconocido: ${e}`);return t}function is(e){return Yr.filter(t=>e.includes(t.id))}function Dl(e){return[ji,...is(e).flatMap(t=>t.routes),rs]}function Ol(e){const t=Yr.find(r=>r.routes.some(a=>a.id===e));return t?t.id:null}const xn=["MEALS","SHOPPING","HOUSEHOLD","CHORES"],Rl=["APARTMENT","HOUSE","OTHER"],Oa=1,Ra=5,Fa=["MEALS","SHOPPING"];function ns(e){return typeof e=="string"&&xn.includes(e)}function Ki(e){return typeof e=="string"&&Rl.includes(e)}function Fl(e,t=Fa){if(!Array.isArray(e))return[...t];const r=[...new Set(e.filter(ns))];return r.length>0?r:[...t]}function bi(e){if(!Array.isArray(e)||e.length===0)throw new Error("Selecciona al menos un módulo.");if(!e.every(ns))throw new Error("La selección contiene módulos no válidos.");return[...new Set(e)]}const Vt=new Date(0).toISOString();let _i=null,qi=null;async function wi(e){const t=await fetch(e);if(!t.ok)throw new Error(`No se pudo cargar ${e} (HTTP ${t.status})`);return t.json()}function Nl(e,t,r){const a=new Map,i=[];for(const c of e){const u=Object.freeze({...c,lastRefreshedAt:null,createdAt:Vt});a.set(u.id,u),i.push(u)}i.sort((c,u)=>c.name.localeCompare(u.name));const n=new Map,o=[];for(const c of t){const u=c.ingredients.map(m=>Object.freeze({...m,food:a.get(m.foodId)??null})),p=Object.freeze({...c,createdAt:Vt,updatedAt:Vt,ingredients:Object.freeze(u)});n.set(p.id,p),o.push(p)}const s=r.templates.map(c=>Object.freeze({...c,familyId:null,createdAt:Vt,updatedAt:Vt,meals:Object.freeze(c.meals.map((u,p)=>Object.freeze({...u,id:`${c.id}:${p}`,templateId:c.id})))})),l=r.householdItems.map(c=>Object.freeze({...c,createdAt:Vt}));return{version:r.catalogVersion,foodsById:a,foodsList:i,recipesById:n,recipesList:o,templates:s,householdItems:l}}function zl(){return _i||(_i=(async()=>{const[e,t,r]=await Promise.all([wi(new URL("/asistente_domestico_build/assets/catalog-foods-ko3gnLMN.json",import.meta.url)),wi(new URL("/asistente_domestico_build/assets/catalog-recipes-tHauV9ni.json",import.meta.url)),wi(new URL("/asistente_domestico_build/assets/catalog-meta-B47XD-FC.json",import.meta.url))]),a=Nl(e,t,r);return qi=a,a})()),_i}function je(){if(!qi)throw new Error("Catálogo todavía no disponible: usa `await whenReady()` antes de leer la tienda.");return qi}function Ll(e){return e instanceof Date&&!Number.isNaN(e.getTime())}function $n(e,t=new Date){if(!e.family)return{store:e,changed:!1};const r=e.family,a=!Object.prototype.hasOwnProperty.call(r,"onboardingVersion"),i=e.members.some(h=>typeof h.dailyCalories=="number"&&h.dailyCalories>0),n=a&&i?t:Ll(r.onboardingCompletedAt)?r.onboardingCompletedAt:null,o=n!==null,s=Fl(r.enabledModules,a&&i?xn:Fa),l=typeof r.onboardingStep=="number"&&Number.isInteger(r.onboardingStep)?r.onboardingStep:0,c=o?Ra:Math.min(Ra-1,Math.max(0,l)),u=typeof r.onboardingVersion=="number"&&Number.isInteger(r.onboardingVersion)?r.onboardingVersion:0,p=o?Oa:Math.min(Oa,Math.max(0,u)),m={...e.family,onboardingVersion:p,onboardingStep:c,onboardingCompletedAt:n,enabledModules:s,homeType:Ki(r.homeType)?r.homeType:null},w=r.onboardingVersion!==m.onboardingVersion||r.onboardingStep!==m.onboardingStep||r.onboardingCompletedAt!==m.onboardingCompletedAt||r.homeType!==m.homeType||!Array.isArray(r.enabledModules)||r.enabledModules.length!==m.enabledModules.length||r.enabledModules.some((h,g)=>h!==m.enabledModules[g]);return{store:{...e,family:m},changed:w}}function U(e){if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>U(t));if(e!==null&&typeof e=="object"){const t={};for(const[r,a]of Object.entries(e))a!==void 0&&(t[r]=U(a));return t}return e}const Na={family:["onboardingCompletedAt","createdAt"],members:["weightDate","createdAt","updatedAt"],weightHistory:["date"],foods:["lastRefreshedAt","createdAt"],pantryItems:["purchaseDate","expiryDate","createdAt","updatedAt"],recipes:["createdAt","updatedAt"],mealPlans:["weekStart","createdAt","updatedAt"],meals:[],templates:["createdAt","updatedAt"],shoppingLists:["weekStart","createdAt"],shoppingItems:[],shoppingSections:["createdAt"],shoppingSectionItems:[],householdItems:["createdAt"],householdStockItems:["createdAt","updatedAt"],chores:["createdAt"],choreCompletions:["date"]};function lo(e,t){if(t.length===0)return e;const r={...e};for(const a of t)r[a]instanceof Date&&(r[a]=r[a].toISOString());return r}function co(e,t){if(t.length===0)return e;const r={...e};for(const a of t)typeof r[a]=="string"&&(r[a]=new Date(r[a]));return r}function Bl(e){const t={};for(const r of Object.keys(Na)){const a=Na[r];r==="family"?t[r]=e.family?lo(e.family,a):null:t[r]=e[r].map(i=>lo(i,a))}return t}function jl(e){const t={};for(const r of Object.keys(Na)){const a=Na[r],i=e[r];r==="family"?t[r]=i?co(i,a):null:t[r]=Array.isArray(i)?i.map(n=>co(n,a)):[]}return $n(t).store}const os="MealPrepHelper",ss="backup",Ui=1;function Kl(e){return{app:os,kind:ss,schemaVersion:Ui,catalogVersion:je().version,exportedAt:new Date().toISOString(),data:Bl(e)}}function ql(e){if(!e||typeof e!="object")throw new Error("El fichero no es un backup válido de MealPrepHelper.");const t=e;if(t.app!==os||t.kind!==ss)throw new Error("El fichero no es un backup de MealPrepHelper.");if(t.schemaVersion!==Ui)throw new Error(`Versión de backup no soportada (${t.schemaVersion}). Esta versión de la app espera ${Ui}.`);if(!t.data||typeof t.data!="object")throw new Error("El backup no contiene datos.");if(!t.data.family)throw new Error("El backup no contiene una unidad familiar.");return t}function Ul(e){const t=je(),r={droppedMeals:0,droppedTemplateMeals:0,droppedPantryItems:0,droppedShoppingItems:0,droppedShoppingSections:0,droppedShoppingSectionItems:0,droppedStockItems:0,droppedChoreCompletions:0,droppedWeightHistory:0,nulledMemberRefs:0,nulledHouseholdRefs:0,totalDropped:0};for(const y of e.members)y.isStandardProfile=y.isStandardProfile??!1;const a=new Set(e.members.map(y=>y.id)),i=new Set([...t.foodsById.keys(),...e.foods.map(y=>y.id)]),n=new Set([...t.recipesById.keys(),...e.recipes.map(y=>y.id)]),o=new Set(e.mealPlans.map(y=>y.id)),s=new Set([...t.householdItems.map(y=>y.id),...e.householdItems.map(y=>y.id)]),l=e.meals.filter(y=>!(!o.has(y.planId)||y.recipeId&&!n.has(y.recipeId)));r.droppedMeals=e.meals.length-l.length;for(const y of l)y.assignedToMemberId&&!a.has(y.assignedToMemberId)&&(y.assignedToMemberId=null,r.nulledMemberRefs++);let c=0;const u=e.templates.map(y=>{const C=y.meals.filter(E=>n.has(E.recipeId));return c+=y.meals.length-C.length,{...y,meals:C}});r.droppedTemplateMeals=c;const p=e.pantryItems.filter(y=>i.has(y.foodId));r.droppedPantryItems=e.pantryItems.length-p.length;const m=new Set(e.shoppingLists.map(y=>y.id)),w=e.shoppingItems.filter(y=>m.has(y.listId)&&i.has(y.foodId));r.droppedShoppingItems=e.shoppingItems.length-w.length;const h=e.shoppingSections.filter(y=>m.has(y.listId));r.droppedShoppingSections=e.shoppingSections.length-h.length;const g=new Set(h.map(y=>y.id)),_=e.shoppingSectionItems.filter(y=>g.has(y.sectionId));r.droppedShoppingSectionItems=e.shoppingSectionItems.length-_.length;for(const y of _)y.householdItemId&&!s.has(y.householdItemId)&&(y.householdItemId=null,r.nulledHouseholdRefs++);const b=e.householdStockItems.filter(y=>s.has(y.householdItemId));r.droppedStockItems=e.householdStockItems.length-b.length;for(const y of e.chores)y.assignedToMemberId&&!a.has(y.assignedToMemberId)&&(y.assignedToMemberId=null,r.nulledMemberRefs++);const I=new Set(e.chores.map(y=>y.id)),$=e.choreCompletions.filter(y=>I.has(y.choreId));r.droppedChoreCompletions=e.choreCompletions.length-$.length;for(const y of $)y.completedByMemberId&&!a.has(y.completedByMemberId)&&(y.completedByMemberId=null,r.nulledMemberRefs++);const x=e.weightHistory.filter(y=>a.has(y.memberId));return r.droppedWeightHistory=e.weightHistory.length-x.length,r.totalDropped=r.droppedMeals+r.droppedTemplateMeals+r.droppedPantryItems+r.droppedShoppingItems+r.droppedShoppingSections+r.droppedShoppingSectionItems+r.droppedStockItems+r.droppedChoreCompletions+r.droppedWeightHistory,{store:{...e,meals:l,templates:u,pantryItems:p,shoppingItems:w,shoppingSections:h,shoppingSectionItems:_,householdStockItems:b,choreCompletions:$,weightHistory:x},report:r}}function Gl(e){const t=jl(e.data),{store:r,report:a}=Ul(t),i=e.catalogVersion!==je().version;return{store:r,report:a,catalogVersionMismatch:i}}const Hl="modulepreload",Vl=function(e){return"/asistente_domestico_build/"+e},uo={},ls=function(t,r,a){let i=Promise.resolve();if(r&&r.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=o(r.map(c=>{if(c=Vl(c),c in uo)return;uo[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Hl,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((w,h)=>{m.addEventListener("load",w),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return i.then(o=>{for(const s of o||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var Gi=function(e,t){return Gi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])},Gi(e,t)};function Wl(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Gi(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var K=function(){return K=Object.assign||function(t){for(var r,a=1,i=arguments.length;a<i;a++){r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},K.apply(this,arguments)};function za(e,t,r){for(var a=0,i=t.length,n;a<i;a++)(n||!(a in t))&&(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}var pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,de=Object.keys,ee=Array.isArray;typeof Promise<"u"&&!pe.Promise&&(pe.Promise=Promise);function Se(e,t){return typeof t!="object"||de(t).forEach(function(r){e[r]=t[r]}),e}var ir=Object.getPrototypeOf,Ql={}.hasOwnProperty;function Ce(e,t){return Ql.call(e,t)}function nr(e,t){typeof t=="function"&&(t=t(ir(e))),(typeof Reflect>"u"?de:Reflect.ownKeys)(t).forEach(function(r){mt(e,r,t[r])})}var cs=Object.defineProperty;function mt(e,t,r,a){cs(e,t,Se(r&&Ce(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,writable:!0},a))}function dr(e){return{from:function(t){return e.prototype=Object.create(t.prototype),mt(e.prototype,"constructor",e),{extend:nr.bind(null,e.prototype)}}}}var Yl=Object.getOwnPropertyDescriptor;function ds(e,t){var r=Yl(e,t),a;return r||(a=ir(e))&&ds(a,t)}var Xl=[].slice;function ai(e,t,r){return Xl.call(e,t,r)}function us(e,t){return t(e)}function Sr(e){if(!e)throw new Error("Assertion Failed")}function ps(e){pe.setImmediate?setImmediate(e):setTimeout(e,0)}function Zl(e,t){return e.reduce(function(r,a,i){var n=t(a,i);return n&&(r[n[0]]=n[1]),r},{})}function at(e,t){if(typeof t=="string"&&Ce(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var r=[],a=0,i=t.length;a<i;++a){var n=at(e,t[a]);r.push(n)}return r}var o=t.indexOf(".");if(o!==-1){var s=e[t.substr(0,o)];return s==null?void 0:at(s,t.substr(o+1))}}function Ie(e,t,r){if(!(!e||t===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Sr(typeof r!="string"&&"length"in r);for(var a=0,i=t.length;a<i;++a)Ie(e,t[a],r[a])}else{var n=t.indexOf(".");if(n!==-1){var o=t.substr(0,n),s=t.substr(n+1);if(s==="")r===void 0?ee(e)&&!isNaN(parseInt(o))?e.splice(o,1):delete e[o]:e[o]=r;else{var l=e[o];if(!l||!Ce(e,o)){if(r===void 0)return;l=e[o]={}}Ie(l,s,r)}}else r===void 0?ee(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=r}}function Jl(e,t){typeof t=="string"?Ie(e,t,void 0):"length"in t&&[].map.call(t,function(r){Ie(e,r,void 0)})}function hs(e){var t={};for(var r in e)Ce(e,r)&&(t[r]=e[r]);return t}var ec=[].concat;function ms(e){return ec.apply([],e)}var tc="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ms([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return pe[e]}),fs=new Set(tc.map(function(e){return pe[e]}));function gs(e){var t={};for(var r in e)if(Ce(e,r)){var a=e[r];t[r]=!a||typeof a!="object"||fs.has(a.constructor)?a:gs(a)}return t}var Pr=null;function Lt(e){Pr=new WeakMap;var t=Hi(e);return Pr=null,t}function Hi(e){if(!e||typeof e!="object")return e;var t=Pr.get(e);if(t)return t;if(ee(e)){t=[],Pr.set(e,t);for(var r=0,a=e.length;r<a;++r)t.push(Hi(e[r]))}else if(fs.has(e.constructor))t=e;else{var i=ir(e);t=i===Object.prototype?{}:Object.create(i),Pr.set(e,t);for(var n in e)Ce(e,n)&&(t[n]=Hi(e[n]))}return t}var rc={}.toString;function Vi(e){return rc.call(e).slice(8,-1)}var Wi=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ac=typeof Wi=="symbol"?function(e){var t;return e!=null&&(t=e[Wi])&&t.apply(e)}:function(){return null};function St(e,t){var r=e.indexOf(t);return r>=0&&e.splice(r,1),r>=0}var Zt={};function Ze(e){var t,r,a,i;if(arguments.length===1){if(ee(e))return e.slice();if(this===Zt&&typeof e=="string")return[e];if(i=ac(e)){for(r=[];a=i.next(),!a.done;)r.push(a.value);return r}if(e==null)return[e];if(t=e.length,typeof t=="number"){for(r=new Array(t);t--;)r[t]=e[t];return r}return[e]}for(t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];return r}var In=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ic=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],vs=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],En=ic.concat(vs),nc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function ur(e,t){this.name=e,this.message=t}dr(ur).from(Error).extend({toString:function(){return this.name+": "+this.message}});function ys(e,t){return e+". Errors: "+Object.keys(t).map(function(r){return t[r].toString()}).filter(function(r,a,i){return i.indexOf(r)===a}).join(`
`)}function La(e,t,r,a){this.failures=t,this.failedKeys=a,this.successCount=r,this.message=ys(e,t)}dr(La).from(ur);function Jt(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(r){return t[r]}),this.failuresByPos=t,this.message=ys(e,this.failures)}dr(Jt).from(ur);var kn=En.reduce(function(e,t){return e[t]=t+"Error",e},{}),oc=ur,N=En.reduce(function(e,t){var r=t+"Error";function a(i,n){this.name=r,i?typeof i=="string"?(this.message="".concat(i).concat(n?`
 `+n:""),this.inner=n||null):typeof i=="object"&&(this.message="".concat(i.name," ").concat(i.message),this.inner=i):(this.message=nc[t]||r,this.inner=null)}return dr(a).from(oc),e[t]=a,e},{});N.Syntax=SyntaxError;N.Type=TypeError;N.Range=RangeError;var po=vs.reduce(function(e,t){return e[t+"Error"]=N[t],e},{});function sc(e,t){if(!e||e instanceof ur||e instanceof TypeError||e instanceof SyntaxError||!e.name||!po[e.name])return e;var r=new po[e.name](t||e.message,e);return"stack"in e&&mt(r,"stack",{get:function(){return this.inner.stack}}),r}var ii=En.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=N[t]),e},{});ii.ModifyError=La;ii.DexieError=ur;ii.BulkError=Jt;function Q(){}function Xr(e){return e}function lc(e,t){return e==null||e===Xr?t:function(r){return t(e(r))}}function Bt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function cc(e,t){return e===Q?t:function(){var r=e.apply(this,arguments);r!==void 0&&(arguments[0]=r);var a=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var n=t.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?Bt(a,this.onsuccess):a),i&&(this.onerror=this.onerror?Bt(i,this.onerror):i),n!==void 0?n:r}}function dc(e,t){return e===Q?t:function(){e.apply(this,arguments);var r=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),r&&(this.onsuccess=this.onsuccess?Bt(r,this.onsuccess):r),a&&(this.onerror=this.onerror?Bt(a,this.onerror):a)}}function uc(e,t){return e===Q?t:function(r){var a=e.apply(this,arguments);Se(r,a);var i=this.onsuccess,n=this.onerror;this.onsuccess=null,this.onerror=null;var o=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?Bt(i,this.onsuccess):i),n&&(this.onerror=this.onerror?Bt(n,this.onerror):n),a===void 0?o===void 0?void 0:o:Se(a,o)}}function pc(e,t){return e===Q?t:function(){return t.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function Sn(e,t){return e===Q?t:function(){var r=e.apply(this,arguments);if(r&&typeof r.then=="function"){for(var a=this,i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];return r.then(function(){return t.apply(a,n)})}return t.apply(this,arguments)}}var Ue=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function bs(e,t){Ue=e}var Fr={},_s=100,Cn=typeof Promise>"u"?[]:(function(){var e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,ir(e),e];var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,ir(t),e]})(),ho=Cn[0],mo=Cn[1],hc=Cn[2],mc=mo&&mo.then,Mt=ho&&ho.constructor,Mn=!!hc;function fc(){queueMicrotask(vc)}var Nr=function(e,t){Cr.push([e,t]),Ba&&(fc(),Ba=!1)},Qi=!0,Ba=!0,Rt=[],xa=[],Yi=Xr,it={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Q,pgp:!1,env:{},finalize:Q},R=it,Cr=[],Ft=0,$a=[];function P(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=R;if(typeof e!="function"){if(e!==Fr)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Zi(this,this._value);return}this._state=null,this._value=null,++t.ref,xs(this,e)}var Xi={get:function(){var e=R,t=ja;function r(a,i){var n=this,o=!e.global&&(e!==R||t!==ja),s=o&&!gt(),l=new P(function(c,u){An(n,new ws(fo(a,e,o,s),fo(i,e,o,s),c,u,e))});return this._consoleTask&&(l._consoleTask=this._consoleTask),l}return r.prototype=Fr,r},set:function(e){mt(this,"then",e&&e.prototype===Fr?Xi:{get:function(){return e},set:Xi.set})}};nr(P.prototype,{then:Xi,_then:function(e,t){An(this,new ws(null,null,e,t,R))},catch:function(e){if(arguments.length===1)return this.then(null,e);var t=arguments[0],r=arguments[1];return typeof t=="function"?this.then(null,function(a){return a instanceof t?r(a):Ia(a)}):this.then(null,function(a){return a&&a.name===t?r(a):Ia(a)})},finally:function(e){return this.then(function(t){return P.resolve(e()).then(function(){return t})},function(t){return P.resolve(e()).then(function(){return Ia(t)})})},timeout:function(e,t){var r=this;return e<1/0?new P(function(a,i){var n=setTimeout(function(){return i(new N.Timeout(t))},e);r.then(a,i).finally(clearTimeout.bind(null,n))}):this}});typeof Symbol<"u"&&Symbol.toStringTag&&mt(P.prototype,Symbol.toStringTag,"Dexie.Promise");it.env=Is();function ws(e,t,r,a,i){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=r,this.reject=a,this.psd=i}nr(P,{all:function(){var e=Ze.apply(null,arguments).map(Ka);return new P(function(t,r){e.length===0&&t([]);var a=e.length;e.forEach(function(i,n){return P.resolve(i).then(function(o){e[n]=o,--a||t(e)},r)})})},resolve:function(e){if(e instanceof P)return e;if(e&&typeof e.then=="function")return new P(function(r,a){e.then(r,a)});var t=new P(Fr,!0,e);return t},reject:Ia,race:function(){var e=Ze.apply(null,arguments).map(Ka);return new P(function(t,r){e.map(function(a){return P.resolve(a).then(t,r)})})},PSD:{get:function(){return R},set:function(e){return R=e}},totalEchoes:{get:function(){return ja}},newPSD:ft,usePSD:jt,scheduler:{get:function(){return Nr},set:function(e){Nr=e}},rejectionMapper:{get:function(){return Yi},set:function(e){Yi=e}},follow:function(e,t){return new P(function(r,a){return ft(function(i,n){var o=R;o.unhandleds=[],o.onunhandled=n,o.finalize=Bt(function(){var s=this;yc(function(){s.unhandleds.length===0?i():n(s.unhandleds[0])})},o.finalize),e()},t,r,a)})}});Mt&&(Mt.allSettled&&mt(P,"allSettled",function(){var e=Ze.apply(null,arguments).map(Ka);return new P(function(t){e.length===0&&t([]);var r=e.length,a=new Array(r);e.forEach(function(i,n){return P.resolve(i).then(function(o){return a[n]={status:"fulfilled",value:o}},function(o){return a[n]={status:"rejected",reason:o}}).then(function(){return--r||t(a)})})})}),Mt.any&&typeof AggregateError<"u"&&mt(P,"any",function(){var e=Ze.apply(null,arguments).map(Ka);return new P(function(t,r){e.length===0&&r(new AggregateError([]));var a=e.length,i=new Array(a);e.forEach(function(n,o){return P.resolve(n).then(function(s){return t(s)},function(s){i[o]=s,--a||r(new AggregateError(i))})})})}),Mt.withResolvers&&(P.withResolvers=Mt.withResolvers));function xs(e,t){try{t(function(r){if(e._state===null){if(r===e)throw new TypeError("A promise cannot be resolved with itself.");var a=e._lib&&pr();r&&typeof r.then=="function"?xs(e,function(i,n){r instanceof P?r._then(i,n):r.then(i,n)}):(e._state=!0,e._value=r,$s(e)),a&&hr()}},Zi.bind(null,e))}catch(r){Zi(e,r)}}function Zi(e,t){if(xa.push(t),e._state===null){var r=e._lib&&pr();t=Yi(t),e._state=!1,e._value=t,bc(e),$s(e),r&&hr()}}function $s(e){var t=e._listeners;e._listeners=[];for(var r=0,a=t.length;r<a;++r)An(e,t[r]);var i=e._PSD;--i.ref||i.finalize(),Ft===0&&(++Ft,Nr(function(){--Ft===0&&Pn()},[]))}function An(e,t){if(e._state===null){e._listeners.push(t);return}var r=e._state?t.onFulfilled:t.onRejected;if(r===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ft,Nr(gc,[r,e,t])}function gc(e,t,r){try{var a,i=t._value;!t._state&&xa.length&&(xa=[]),a=Ue&&t._consoleTask?t._consoleTask.run(function(){return e(i)}):e(i),!t._state&&xa.indexOf(i)===-1&&_c(t),r.resolve(a)}catch(n){r.reject(n)}finally{--Ft===0&&Pn(),--r.psd.ref||r.psd.finalize()}}function vc(){jt(it,function(){pr()&&hr()})}function pr(){var e=Qi;return Qi=!1,Ba=!1,e}function hr(){var e,t,r;do for(;Cr.length>0;)for(e=Cr,Cr=[],r=e.length,t=0;t<r;++t){var a=e[t];a[0].apply(null,a[1])}while(Cr.length>0);Qi=!0,Ba=!0}function Pn(){var e=Rt;Rt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var t=$a.slice(0),r=t.length;r;)t[--r]()}function yc(e){function t(){e(),$a.splice($a.indexOf(t),1)}$a.push(t),++Ft,Nr(function(){--Ft===0&&Pn()},[])}function bc(e){Rt.some(function(t){return t._value===e._value})||Rt.push(e)}function _c(e){for(var t=Rt.length;t;)if(Rt[--t]._value===e._value){Rt.splice(t,1);return}}function Ia(e){return new P(Fr,!1,e)}function Z(e,t){var r=R;return function(){var a=pr(),i=R;try{return vt(r,!0),e.apply(this,arguments)}catch(n){t&&t(n)}finally{vt(i,!1),a&&hr()}}}var ce={awaits:0,echoes:0,id:0},wc=0,Ea=[],ka=0,ja=0,xc=0;function ft(e,t,r,a){var i=R,n=Object.create(i);n.parent=i,n.ref=0,n.global=!1,n.id=++xc,it.env,n.env=Mn?{Promise:P,PromiseProp:{value:P,configurable:!0,writable:!0},all:P.all,race:P.race,allSettled:P.allSettled,any:P.any,resolve:P.resolve,reject:P.reject}:{},t&&Se(n,t),++i.ref,n.finalize=function(){--this.parent.ref||this.parent.finalize()};var o=jt(n,e,r,a);return n.ref===0&&n.finalize(),o}function mr(){return ce.id||(ce.id=++wc),++ce.awaits,ce.echoes+=_s,ce.id}function gt(){return ce.awaits?(--ce.awaits===0&&(ce.id=0),ce.echoes=ce.awaits*_s,!0):!1}(""+mc).indexOf("[native code]")===-1&&(mr=gt=Q);function Ka(e){return ce.echoes&&e&&e.constructor===Mt?(mr(),e.then(function(t){return gt(),t},function(t){return gt(),ae(t)})):e}function $c(e){++ja,(!ce.echoes||--ce.echoes===0)&&(ce.echoes=ce.awaits=ce.id=0),Ea.push(R),vt(e,!0)}function Ic(){var e=Ea[Ea.length-1];Ea.pop(),vt(e,!1)}function vt(e,t){var r=R;if((t?ce.echoes&&(!ka++||e!==R):ka&&(!--ka||e!==R))&&queueMicrotask(t?$c.bind(null,e):Ic),e!==R&&(R=e,r===it&&(it.env=Is()),Mn)){var a=it.env.Promise,i=e.env;(r.global||e.global)&&(Object.defineProperty(pe,"Promise",i.PromiseProp),a.all=i.all,a.race=i.race,a.resolve=i.resolve,a.reject=i.reject,i.allSettled&&(a.allSettled=i.allSettled),i.any&&(a.any=i.any))}}function Is(){var e=pe.Promise;return Mn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(pe,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function jt(e,t,r,a,i){var n=R;try{return vt(e,!0),t(r,a,i)}finally{vt(n,!1)}}function fo(e,t,r,a){return typeof e!="function"?e:function(){var i=R;r&&mr(),vt(t,!0);try{return e.apply(this,arguments)}finally{vt(i,!1),a&&queueMicrotask(gt)}}}function xi(e){Promise===Mt&&ce.echoes===0?ka===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var ae=P.reject;function Ji(e,t,r,a){if(!e.idbdb||!e._state.openComplete&&!R.letThrough&&!e._vip){if(e._state.openComplete)return ae(new N.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return ae(new N.DatabaseClosed);e.open().catch(Q)}return e._state.dbReadyPromise.then(function(){return Ji(e,t,r,a)})}else{var i=e._createTransaction(t,r,e._dbSchema);try{i.create(),e._state.PR1398_maxLoop=3}catch(n){return n.name===kn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return Ji(e,t,r,a)})):ae(n)}return i._promise(t,function(n,o){return ft(function(){return R.trans=i,a(n,o,i)})}).then(function(n){if(t==="readwrite")try{i.idbtrans.commit()}catch{}return t==="readonly"?n:i._completion.then(function(){return n})})}}var go="4.4.4",Tt="￿",en=-1/0,Ye="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Es="String expected.",Ec=1e3,ni="__dbnames",$i="readonly",Ii="readwrite";function Kt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ks={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function oa(e){return typeof e=="string"&&!/\./.test(e)?function(t){return t[e]===void 0&&e in t&&(t=Lt(t),delete t[e]),t}:function(t){return t}}function kc(){throw N.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function V(e,t){try{var r=vo(e),a=vo(t);if(r!==a)return r==="Array"?1:a==="Array"?-1:r==="binary"?1:a==="binary"?-1:r==="string"?1:a==="string"?-1:r==="Date"?1:a!=="Date"?NaN:-1;switch(r){case"number":case"Date":case"string":return e>t?1:e<t?-1:0;case"binary":return Cc(yo(e),yo(t));case"Array":return Sc(e,t)}}catch{}return NaN}function Sc(e,t){for(var r=e.length,a=t.length,i=r<a?r:a,n=0;n<i;++n){var o=V(e[n],t[n]);if(o!==0)return o}return r===a?0:r<a?-1:1}function Cc(e,t){for(var r=e.length,a=t.length,i=r<a?r:a,n=0;n<i;++n)if(e[n]!==t[n])return e[n]<t[n]?-1:1;return r===a?0:r<a?-1:1}function vo(e){var t=typeof e;if(t!=="object")return t;if(ArrayBuffer.isView(e))return"binary";var r=Vi(e);return r==="ArrayBuffer"?"binary":r}function yo(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Sa(e,t,r){var a=e.schema.yProps;return a?(t&&r.numFailures>0&&(t=t.filter(function(i,n){return!r.failures[n]})),Promise.all(a.map(function(i){var n=i.updatesTable;return t?e.db.table(n).where("k").anyOf(t).delete():e.db.table(n).clear()})).then(function(){return r})):r}var Mc=(function(){function e(t){this["@@propmod"]=t}return e.prototype.execute=function(t){var r,a=this["@@propmod"];if(a.add!==void 0){var i=a.add;if(ee(i))return za(za([],ee(t)?t:[],!0),i).sort();if(typeof i=="number")return(Number(t)||0)+i;if(typeof i=="bigint")try{return BigInt(t)+i}catch{return BigInt(0)+i}throw new TypeError("Invalid term ".concat(i))}if(a.remove!==void 0){var n=a.remove;if(ee(n))return ee(t)?t.filter(function(s){return!n.includes(s)}).sort():[];if(typeof n=="number")return Number(t)-n;if(typeof n=="bigint")try{return BigInt(t)-n}catch{return BigInt(0)-n}throw new TypeError("Invalid subtrahend ".concat(n))}var o=(r=a.replacePrefix)===null||r===void 0?void 0:r[0];return o&&typeof t=="string"&&t.startsWith(o)?a.replacePrefix[1]+t.substring(o.length):t},e})();function Ss(e,t){for(var r=de(t),a=r.length,i=!1,n=0;n<a;++n){var o=r[n],s=t[o],l=at(e,o);s instanceof Mc?(Ie(e,o,s.execute(l)),i=!0):l!==s&&(Ie(e,o,s),i=!0)}return i}var Cs=(function(){function e(){}return e.prototype._trans=function(t,r,a){var i=this._tx||R.trans,n=this.name,o=Ue&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function s(u,p,m){if(!m.schema[n])throw new N.NotFound("Table "+n+" not part of transaction");return r(m.idbtrans,m)}var l=pr();try{var c=i&&i.db._novip===this.db._novip?i===R.trans?i._promise(t,s,a):ft(function(){return i._promise(t,s,a)},{trans:i,transless:R.transless||R}):Ji(this.db,t,[this.name],s);return o&&(c._consoleTask=o,c=c.catch(function(u){return console.trace(u),ae(u)})),c}finally{l&&hr()}},e.prototype.get=function(t,r){var a=this;return t&&t.constructor===Object?this.where(t).first(r):t==null?ae(new N.Type("Invalid argument to Table.get()")):this._trans("readonly",function(i){return a.core.get({trans:i,key:t}).then(function(n){return a.hook.reading.fire(n)})}).then(r)},e.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(ee(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var r=de(t);if(r.length===1)return this.where(r[0]).equals(t[r[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&r.every(function(m){return u.keyPath.indexOf(m)>=0})){for(var p=0;p<r.length;++p)if(r.indexOf(u.keyPath[p])===-1)return!1;return!0}return!1}).sort(function(u,p){return u.keyPath.length-p.keyPath.length})[0];if(a&&this.db._maxKey!==Tt){var i=a.keyPath.slice(0,r.length);return this.where(i).equals(i.map(function(u){return t[u]}))}!a&&Ue&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(r.join("+"),"]"));var n=this.schema.idxByName;function o(u,p){return V(u,p)===0}var s=r.reduce(function(u,p){var m=u[0],w=u[1],h=n[p],g=t[p];return[m||h,m||!h?Kt(w,h&&h.multi?function(_){var b=at(_,p);return ee(b)&&b.some(function(I){return o(g,I)})}:function(_){return o(g,at(_,p))}):w]},[null,null]),l=s[0],c=s[1];return l?this.where(l.name).equals(t[l.keyPath]).filter(c):a?this.filter(c):this.where(r).equals("")},e.prototype.filter=function(t){return this.toCollection().and(t)},e.prototype.count=function(t){return this.toCollection().count(t)},e.prototype.offset=function(t){return this.toCollection().offset(t)},e.prototype.limit=function(t){return this.toCollection().limit(t)},e.prototype.each=function(t){return this.toCollection().each(t)},e.prototype.toArray=function(t){return this.toCollection().toArray(t)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,ee(t)?"[".concat(t.join("+"),"]"):t))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(t){var r=this,a=r.db,i=r.name;this.schema.mappedClass=t,t.prototype instanceof kc&&(t=(function(l){Wl(c,l);function c(){return l!==null&&l.apply(this,arguments)||this}return Object.defineProperty(c.prototype,"db",{get:function(){return a},enumerable:!1,configurable:!0}),c.prototype.table=function(){return i},c})(t));for(var n=new Set,o=t.prototype;o;o=ir(o))Object.getOwnPropertyNames(o).forEach(function(l){return n.add(l)});var s=function(l){if(!l)return l;var c=Object.create(t.prototype);for(var u in l)if(!n.has(u))try{c[u]=l[u]}catch{}return c};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=s,this.hook("reading",s),t},e.prototype.defineClass=function(){function t(r){Se(this,r)}return this.mapToClass(t)},e.prototype.add=function(t,r){var a=this,i=this.schema.primKey,n=i.auto,o=i.keyPath,s=t;return o&&n&&(s=oa(o)(t)),this._trans("readwrite",function(l){return a.core.mutate({trans:l,type:"add",keys:r!=null?[r]:null,values:[s]})}).then(function(l){return l.numFailures?P.reject(l.failures[0]):l.lastResult}).then(function(l){if(o)try{Ie(t,o,l)}catch{}return l})},e.prototype.upsert=function(t,r){var a=this,i=this.schema.primKey.keyPath;return this._trans("readwrite",function(n){return a.core.get({trans:n,key:t}).then(function(o){var s=o??{};return Ss(s,r),i&&Ie(s,i,t),a.core.mutate({trans:n,type:"put",values:[s],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[r]}}).then(function(l){return l.numFailures?P.reject(l.failures[0]):!!o})})})},e.prototype.update=function(t,r){if(typeof t=="object"&&!ee(t)){var a=at(t,this.schema.primKey.keyPath);return a===void 0?ae(new N.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(r)}else return this.where(":id").equals(t).modify(r)},e.prototype.put=function(t,r){var a=this,i=this.schema.primKey,n=i.auto,o=i.keyPath,s=t;return o&&n&&(s=oa(o)(t)),this._trans("readwrite",function(l){return a.core.mutate({trans:l,type:"put",values:[s],keys:r!=null?[r]:null})}).then(function(l){return l.numFailures?P.reject(l.failures[0]):l.lastResult}).then(function(l){if(o)try{Ie(t,o,l)}catch{}return l})},e.prototype.delete=function(t){var r=this;return this._trans("readwrite",function(a){return r.core.mutate({trans:a,type:"delete",keys:[t]}).then(function(i){return Sa(r,[t],i)}).then(function(i){return i.numFailures?P.reject(i.failures[0]):void 0})})},e.prototype.clear=function(){var t=this;return this._trans("readwrite",function(r){return t.core.mutate({trans:r,type:"deleteRange",range:ks}).then(function(a){return Sa(t,null,a)})}).then(function(r){return r.numFailures?P.reject(r.failures[0]):void 0})},e.prototype.bulkGet=function(t){var r=this;return this._trans("readonly",function(a){return r.core.getMany({keys:t,trans:a}).then(function(i){return i.map(function(n){return r.hook.reading.fire(n)})})})},e.prototype.bulkAdd=function(t,r,a){var i=this,n=Array.isArray(r)?r:void 0;a=a||(n?void 0:r);var o=a?a.allKeys:void 0;return this._trans("readwrite",function(s){var l=i.schema.primKey,c=l.auto,u=l.keyPath;if(u&&n)throw new N.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(n&&n.length!==t.length)throw new N.InvalidArgument("Arguments objects and keys must have the same length");var p=t.length,m=u&&c?t.map(oa(u)):t;return i.core.mutate({trans:s,type:"add",keys:n,values:m,wantResults:o}).then(function(w){var h=w.numFailures,g=w.results,_=w.lastResult,b=w.failures,I=o?g:_;if(h===0)return I;throw new Jt("".concat(i.name,".bulkAdd(): ").concat(h," of ").concat(p," operations failed"),b)})})},e.prototype.bulkPut=function(t,r,a){var i=this,n=Array.isArray(r)?r:void 0;a=a||(n?void 0:r);var o=a?a.allKeys:void 0;return this._trans("readwrite",function(s){var l=i.schema.primKey,c=l.auto,u=l.keyPath;if(u&&n)throw new N.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(n&&n.length!==t.length)throw new N.InvalidArgument("Arguments objects and keys must have the same length");var p=t.length,m=u&&c?t.map(oa(u)):t;return i.core.mutate({trans:s,type:"put",keys:n,values:m,wantResults:o}).then(function(w){var h=w.numFailures,g=w.results,_=w.lastResult,b=w.failures,I=o?g:_;if(h===0)return I;throw new Jt("".concat(i.name,".bulkPut(): ").concat(h," of ").concat(p," operations failed"),b)})})},e.prototype.bulkUpdate=function(t){var r=this,a=this.core,i=t.map(function(s){return s.key}),n=t.map(function(s){return s.changes}),o=[];return this._trans("readwrite",function(s){return a.getMany({trans:s,keys:i,cache:"clone"}).then(function(l){var c=[],u=[];t.forEach(function(m,w){var h=m.key,g=m.changes,_=l[w];if(_){for(var b=0,I=Object.keys(g);b<I.length;b++){var $=I[b],x=g[$];if($===r.schema.primKey.keyPath){if(V(x,h)!==0)throw new N.Constraint("Cannot update primary key in bulkUpdate()")}else Ie(_,$,x)}o.push(w),c.push(h),u.push(_)}});var p=c.length;return a.mutate({trans:s,type:"put",keys:c,values:u,updates:{keys:i,changeSpecs:n}}).then(function(m){var w=m.numFailures,h=m.failures;if(w===0)return p;for(var g=0,_=Object.keys(h);g<_.length;g++){var b=_[g],I=o[Number(b)];if(I!=null){var $=h[b];delete h[b],h[I]=$}}throw new Jt("".concat(r.name,".bulkUpdate(): ").concat(w," of ").concat(p," operations failed"),h)})})})},e.prototype.bulkDelete=function(t){var r=this,a=t.length;return this._trans("readwrite",function(i){return r.core.mutate({trans:i,type:"delete",keys:t}).then(function(n){return Sa(r,t,n)})}).then(function(i){var n=i.numFailures,o=i.lastResult,s=i.failures;if(n===0)return o;throw new Jt("".concat(r.name,".bulkDelete(): ").concat(n," of ").concat(a," operations failed"),s)})},e})();function Zr(e){var t={},r=function(s,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return t[s].subscribe.apply(null,u),e}else if(typeof s=="string")return t[s]};r.addEventType=n;for(var a=1,i=arguments.length;a<i;++a)n(arguments[a]);return r;function n(s,l,c){if(typeof s=="object")return o(s);l||(l=pc),c||(c=Q);var u={subscribers:[],fire:c,subscribe:function(p){u.subscribers.indexOf(p)===-1&&(u.subscribers.push(p),u.fire=l(u.fire,p))},unsubscribe:function(p){u.subscribers=u.subscribers.filter(function(m){return m!==p}),u.fire=u.subscribers.reduce(l,c)}};return t[s]=r[s]=u,u}function o(s){de(s).forEach(function(l){var c=s[l];if(ee(c))n(l,s[l][0],s[l][1]);else if(c==="asap")var u=n(l,Xr,function(){for(var m=arguments.length,w=new Array(m);m--;)w[m]=arguments[m];u.subscribers.forEach(function(h){ps(function(){h.apply(null,w)})})});else throw new N.InvalidArgument("Invalid event config")})}}function Jr(e,t){return dr(t).from({prototype:e}),t}function Ac(e){return Jr(Cs.prototype,function(r,a,i){this.db=e,this._tx=i,this.name=r,this.schema=a,this.hook=e._allTables[r]?e._allTables[r].hook:Zr(null,{creating:[cc,Q],reading:[lc,Xr],updating:[uc,Q],deleting:[dc,Q]})})}function Wt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ei(e,t){e.filter=Kt(e.filter,t)}function ki(e,t,r){var a=e.replayFilter;e.replayFilter=a?function(){return Kt(a(),t())}:t,e.justLimit=r&&!a}function Pc(e,t){e.isMatch=Kt(e.isMatch,t)}function Ca(e,t){if(e.isPrimKey)return t.primaryKey;var r=t.getIndexByKeyPath(e.index);if(!r)throw new N.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return r}function bo(e,t,r){var a=Ca(e,t.schema);return t.openCursor({trans:r,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function sa(e,t,r,a){var i=e.replayFilter?Kt(e.filter,e.replayFilter()):e.filter;if(e.or){var n={},o=function(s,l,c){if(!i||i(l,c,function(m){return l.stop(m)},function(m){return l.fail(m)})){var u=l.primaryKey,p=""+u;p==="[object ArrayBuffer]"&&(p=""+new Uint8Array(u)),Ce(n,p)||(n[p]=!0,t(s,l,c))}};return Promise.all([e.or._iterate(o,r),_o(bo(e,a,r),e.algorithm,o,!e.keysOnly&&e.valueMapper)])}else return _o(bo(e,a,r),Kt(e.algorithm,i),t,!e.keysOnly&&e.valueMapper)}function _o(e,t,r,a){var i=a?function(o,s,l){return r(a(o),s,l)}:r,n=Z(i);return e.then(function(o){if(o)return o.start(function(){var s=function(){return o.continue()};(!t||t(o,function(l){return s=l},function(l){o.stop(l),s=Q},function(l){o.fail(l),s=Q}))&&n(o.value,o,function(l){return s=l}),s()})})}var Tc=(function(){function e(){}return e.prototype._read=function(t,r){var a=this._ctx;return a.error?a.table._trans(null,ae.bind(null,a.error)):a.table._trans("readonly",t).then(r)},e.prototype._write=function(t){var r=this._ctx;return r.error?r.table._trans(null,ae.bind(null,r.error)):r.table._trans("readwrite",t,"locked")},e.prototype._addAlgorithm=function(t){var r=this._ctx;r.algorithm=Kt(r.algorithm,t)},e.prototype._iterate=function(t,r){return sa(this._ctx,t,r,this._ctx.table.core)},e.prototype.clone=function(t){var r=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return t&&Se(a,t),r._ctx=a,r},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(t){var r=this._ctx;return this._read(function(a){return sa(r,t,a,r.table.core)})},e.prototype.count=function(t){var r=this;return this._read(function(a){var i=r._ctx,n=i.table.core;if(Wt(i,!0))return n.count({trans:a,query:{index:Ca(i,n.schema),range:i.range}}).then(function(s){return Math.min(s,i.limit)});var o=0;return sa(i,function(){return++o,!1},a,n).then(function(){return o})}).then(t)},e.prototype.sortBy=function(t,r){var a=t.split(".").reverse(),i=a[0],n=a.length-1;function o(c,u){return u?o(c[a[u]],u-1):c[i]}var s=this._ctx.dir==="next"?1:-1;function l(c,u){var p=o(c,n),m=o(u,n);return V(p,m)*s}return this.toArray(function(c){return c.slice().sort(l)}).then(r)},e.prototype.toArray=function(t){var r=this;return this._read(function(a){var i=r._ctx;if(Wt(i,!0)&&i.limit>0){var n=i.valueMapper,o=Ca(i,i.table.core.schema);return i.table.core.query({trans:a,limit:i.limit,values:!0,direction:i.dir==="prev"?"prev":void 0,query:{index:o,range:i.range}}).then(function(l){var c=l.result;return n?c.map(n):c})}else{var s=[];return sa(i,function(l){return s.push(l)},a,i.table.core).then(function(){return s})}},t)},e.prototype.offset=function(t){var r=this._ctx;return t<=0?this:(r.offset+=t,Wt(r)?ki(r,function(){var a=t;return function(i,n){return a===0?!0:a===1?(--a,!1):(n(function(){i.advance(a),a=0}),!1)}}):ki(r,function(){var a=t;return function(){return--a<0}}),this)},e.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),ki(this._ctx,function(){var r=t;return function(a,i,n){return--r<=0&&i(n),r>=0}},!0),this},e.prototype.until=function(t,r){return Ei(this._ctx,function(a,i,n){return t(a.value)?(i(n),r):!0}),this},e.prototype.first=function(t){return this.limit(1).toArray(function(r){return r[0]}).then(t)},e.prototype.last=function(t){return this.reverse().first(t)},e.prototype.filter=function(t){return Ei(this._ctx,function(r){return t(r.value)}),Pc(this._ctx,t),this},e.prototype.and=function(t){return this.filter(t)},e.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(a,i){t(i.key,i)})},e.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},e.prototype.eachPrimaryKey=function(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(a,i){t(i.primaryKey,i)})},e.prototype.keys=function(t){var r=this._ctx;r.keysOnly=!r.isMatch;var a=[];return this.each(function(i,n){a.push(n.key)}).then(function(){return a}).then(t)},e.prototype.primaryKeys=function(t){var r=this._ctx;if(Wt(r,!0)&&r.limit>0)return this._read(function(i){var n=Ca(r,r.table.core.schema);return r.table.core.query({trans:i,values:!1,limit:r.limit,direction:r.dir==="prev"?"prev":void 0,query:{index:n,range:r.range}})}).then(function(i){var n=i.result;return n}).then(t);r.keysOnly=!r.isMatch;var a=[];return this.each(function(i,n){a.push(n.primaryKey)}).then(function(){return a}).then(t)},e.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},e.prototype.firstKey=function(t){return this.limit(1).keys(function(r){return r[0]}).then(t)},e.prototype.lastKey=function(t){return this.reverse().firstKey(t)},e.prototype.distinct=function(){var t=this._ctx,r=t.index&&t.table.schema.idxByName[t.index];if(!r||!r.multi)return this;var a={};return Ei(this._ctx,function(i){var n=i.primaryKey.toString(),o=Ce(a,n);return a[n]=!0,!o}),this},e.prototype.modify=function(t){var r=this,a=this._ctx;return this._write(function(i){var n;typeof t=="function"?n=t:n=function(b){return Ss(b,t)};var o=a.table.core,s=o.schema.primaryKey,l=s.outbound,c=s.extractKey,u=200,p=r.db._options.modifyChunkSize;p&&(typeof p=="object"?u=p[o.name]||p["*"]||200:u=p);var m=[],w=0,h=[],g=function(b,I){var $=I.failures,x=I.numFailures;w+=b-x;for(var y=0,C=de($);y<C.length;y++){var E=C[y];m.push($[E])}},_=t===wo;return r.clone().primaryKeys().then(function(b){var I=Wt(a)&&a.limit===1/0&&(typeof t!="function"||_)&&{index:a.index,range:a.range},$=function(x){var y=Math.min(u,b.length-x),C=b.slice(x,x+y);return(_?Promise.resolve([]):o.getMany({trans:i,keys:C,cache:"immutable"})).then(function(E){var k=[],T=[],L=l?[]:null,S=_?C:[];if(!_)for(var O=0;O<y;++O){var M=E[O],A={value:Lt(M),primKey:b[x+O]};n.call(A,A.value,A)!==!1&&(A.value==null?S.push(b[x+O]):!l&&V(c(M),c(A.value))!==0?(S.push(b[x+O]),k.push(A.value)):(T.push(A.value),l&&L.push(b[x+O])))}return Promise.resolve(k.length>0&&o.mutate({trans:i,type:"add",values:k}).then(function(G){for(var F in G.failures)S.splice(parseInt(F),1);g(k.length,G)})).then(function(){return(T.length>0||I&&typeof t=="object")&&o.mutate({trans:i,type:"put",keys:L,values:T,criteria:I,changeSpec:typeof t!="function"&&t,isAdditionalChunk:x>0}).then(function(G){return g(T.length,G)})}).then(function(){return(S.length>0||I&&_)&&o.mutate({trans:i,type:"delete",keys:S,criteria:I,isAdditionalChunk:x>0}).then(function(G){return Sa(a.table,S,G)}).then(function(G){return g(S.length,G)})}).then(function(){return b.length>x+y&&$(x+u)})})};return $(0).then(function(){if(m.length>0)throw new La("Error modifying one or more objects",m,w,h);return b.length})})})},e.prototype.delete=function(){var t=this._ctx,r=t.range;return Wt(t)&&!t.table.schema.yProps&&(t.isPrimKey||r.type===3)?this._write(function(a){var i=t.table.core.schema.primaryKey,n=r;return t.table.core.count({trans:a,query:{index:i,range:n}}).then(function(o){return t.table.core.mutate({trans:a,type:"deleteRange",range:n}).then(function(s){var l=s.failures,c=s.numFailures;if(c)throw new La("Could not delete some values",Object.keys(l).map(function(u){return l[u]}),o-c);return o-c})})}):this.modify(wo)},e})(),wo=function(e,t){return t.value=null};function Dc(e){return Jr(Tc.prototype,function(r,a){this.db=e;var i=ks,n=null;if(a)try{i=a()}catch(c){n=c}var o=r._ctx,s=o.table,l=s.hook.reading.fire;this._ctx={table:s,index:o.index,isPrimKey:!o.index||s.schema.primKey.keyPath&&o.index===s.schema.primKey.name,range:i,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:n,or:o.or,valueMapper:l!==Xr?l:null}})}function Oc(e,t){return e<t?-1:e===t?0:1}function Rc(e,t){return e>t?-1:e===t?0:1}function ke(e,t,r){var a=e instanceof As?new e.Collection(e):e;return a._ctx.error=r?new r(t):new TypeError(t),a}function Qt(e){return new e.Collection(e,function(){return Ms("")}).limit(0)}function Fc(e){return e==="next"?function(t){return t.toUpperCase()}:function(t){return t.toLowerCase()}}function Nc(e){return e==="next"?function(t){return t.toLowerCase()}:function(t){return t.toUpperCase()}}function zc(e,t,r,a,i,n){for(var o=Math.min(e.length,a.length),s=-1,l=0;l<o;++l){var c=t[l];if(c!==a[l])return i(e[l],r[l])<0?e.substr(0,l)+r[l]+r.substr(l+1):i(e[l],a[l])<0?e.substr(0,l)+a[l]+r.substr(l+1):s>=0?e.substr(0,s)+t[s]+r.substr(s+1):null;i(e[l],c)<0&&(s=l)}return o<a.length&&n==="next"?e+r.substr(e.length):o<e.length&&n==="prev"?e.substr(0,r.length):s<0?null:e.substr(0,s)+a[s]+r.substr(s+1)}function la(e,t,r,a){var i,n,o,s,l,c,u,p=r.length;if(!r.every(function(g){return typeof g=="string"}))return ke(e,Es);function m(g){i=Fc(g),n=Nc(g),o=g==="next"?Oc:Rc;var _=r.map(function(b){return{lower:n(b),upper:i(b)}}).sort(function(b,I){return o(b.lower,I.lower)});s=_.map(function(b){return b.upper}),l=_.map(function(b){return b.lower}),c=g,u=g==="next"?"":a}m("next");var w=new e.Collection(e,function(){return st(s[0],l[p-1]+a)});w._ondirectionchange=function(g){m(g)};var h=0;return w._addAlgorithm(function(g,_,b){var I=g.key;if(typeof I!="string")return!1;var $=n(I);if(t($,l,h))return!0;for(var x=null,y=h;y<p;++y){var C=zc(I,$,s[y],l[y],o,c);C===null&&x===null?h=y+1:(x===null||o(x,C)>0)&&(x=C)}return _(x!==null?function(){g.continue(x+u)}:b),!1}),w}function st(e,t,r,a){return{type:2,lower:e,upper:t,lowerOpen:r,upperOpen:a}}function Ms(e){return{type:1,lower:e,upper:e}}var As=(function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(t,r,a,i){a=a!==!1,i=i===!0;try{return this._cmp(t,r)>0||this._cmp(t,r)===0&&(a||i)&&!(a&&i)?Qt(this):new this.Collection(this,function(){return st(t,r,!a,!i)})}catch{return ke(this,Ye)}},e.prototype.equals=function(t){return t==null?ke(this,Ye):new this.Collection(this,function(){return Ms(t)})},e.prototype.above=function(t){return t==null?ke(this,Ye):new this.Collection(this,function(){return st(t,void 0,!0)})},e.prototype.aboveOrEqual=function(t){return t==null?ke(this,Ye):new this.Collection(this,function(){return st(t,void 0,!1)})},e.prototype.below=function(t){return t==null?ke(this,Ye):new this.Collection(this,function(){return st(void 0,t,!1,!0)})},e.prototype.belowOrEqual=function(t){return t==null?ke(this,Ye):new this.Collection(this,function(){return st(void 0,t)})},e.prototype.startsWith=function(t){return typeof t!="string"?ke(this,Es):this.between(t,t+Tt,!0,!0)},e.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):la(this,function(r,a){return r.indexOf(a[0])===0},[t],Tt)},e.prototype.equalsIgnoreCase=function(t){return la(this,function(r,a){return r===a[0]},[t],"")},e.prototype.anyOfIgnoreCase=function(){var t=Ze.apply(Zt,arguments);return t.length===0?Qt(this):la(this,function(r,a){return a.indexOf(r)!==-1},t,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ze.apply(Zt,arguments);return t.length===0?Qt(this):la(this,function(r,a){return a.some(function(i){return r.indexOf(i)===0})},t,Tt)},e.prototype.anyOf=function(){var t=this,r=Ze.apply(Zt,arguments),a=this._cmp;try{r.sort(a)}catch{return ke(this,Ye)}if(r.length===0)return Qt(this);var i=new this.Collection(this,function(){return st(r[0],r[r.length-1])});i._ondirectionchange=function(o){a=o==="next"?t._ascending:t._descending,r.sort(a)};var n=0;return i._addAlgorithm(function(o,s,l){for(var c=o.key;a(c,r[n])>0;)if(++n,n===r.length)return s(l),!1;return a(c,r[n])===0?!0:(s(function(){o.continue(r[n])}),!1)}),i},e.prototype.notEqual=function(t){return this.inAnyRange([[en,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var t=Ze.apply(Zt,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return ke(this,Ye)}var r=t.reduce(function(a,i){return a?a.concat([[a[a.length-1][1],i]]):[[en,i]]},null);return r.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(t,r){var a=this,i=this._cmp,n=this._ascending,o=this._descending,s=this._min,l=this._max;if(t.length===0)return Qt(this);if(!t.every(function(y){return y[0]!==void 0&&y[1]!==void 0&&n(y[0],y[1])<=0}))return ke(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",N.InvalidArgument);var c=!r||r.includeLowers!==!1,u=r&&r.includeUppers===!0;function p(y,C){for(var E=0,k=y.length;E<k;++E){var T=y[E];if(i(C[0],T[1])<0&&i(C[1],T[0])>0){T[0]=s(T[0],C[0]),T[1]=l(T[1],C[1]);break}}return E===k&&y.push(C),y}var m=n;function w(y,C){return m(y[0],C[0])}var h;try{h=t.reduce(p,[]),h.sort(w)}catch{return ke(this,Ye)}var g=0,_=u?function(y){return n(y,h[g][1])>0}:function(y){return n(y,h[g][1])>=0},b=c?function(y){return o(y,h[g][0])>0}:function(y){return o(y,h[g][0])>=0};function I(y){return!_(y)&&!b(y)}var $=_,x=new this.Collection(this,function(){return st(h[0][0],h[h.length-1][1],!c,!u)});return x._ondirectionchange=function(y){y==="next"?($=_,m=n):($=b,m=o),h.sort(w)},x._addAlgorithm(function(y,C,E){for(var k=y.key;$(k);)if(++g,g===h.length)return C(E),!1;return I(k)?!0:(a._cmp(k,h[g][1])===0||a._cmp(k,h[g][0])===0||C(function(){m===n?y.continue(h[g][0]):y.continue(h[g][1])}),!1)}),x},e.prototype.startsWithAnyOf=function(){var t=Ze.apply(Zt,arguments);return t.every(function(r){return typeof r=="string"})?t.length===0?Qt(this):this.inAnyRange(t.map(function(r){return[r,r+Tt]})):ke(this,"startsWithAnyOf() only works with strings")},e})();function Lc(e){return Jr(As.prototype,function(r,a,i){if(this.db=e,this._ctx={table:r,index:a===":id"?null:a,or:i},this._cmp=this._ascending=V,this._descending=function(n,o){return V(o,n)},this._max=function(n,o){return V(n,o)>0?n:o},this._min=function(n,o){return V(n,o)<0?n:o},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new N.MissingAPI})}function ze(e){return Z(function(t){return zr(t),e(t.target.error),!1})}function zr(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var oi="storagemutated",tn="x-storagemutated-1",yt=Zr(null,oi),Bc=(function(){function e(){}return e.prototype._lock=function(){return Sr(!R.global),++this._reculock,this._reculock===1&&!R.global&&(R.lockOwnerFor=this),this},e.prototype._unlock=function(){if(Sr(!R.global),--this._reculock===0)for(R.global||(R.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var t=this._blockedFuncs.shift();try{jt(t[1],t[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&R.lockOwnerFor!==this},e.prototype.create=function(t){var r=this;if(!this.mode)return this;var a=this.db.idbdb,i=this.db._state.dbOpenError;if(Sr(!this.idbtrans),!t&&!a)switch(i&&i.name){case"DatabaseClosedError":throw new N.DatabaseClosed(i);case"MissingAPIError":throw new N.MissingAPI(i.message,i);default:throw new N.OpenFailed(i)}if(!this.active)throw new N.TransactionInactive;return Sr(this._completion._state===null),t=this.idbtrans=t||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):a.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),t.onerror=Z(function(n){zr(n),r._reject(t.error)}),t.onabort=Z(function(n){zr(n),r.active&&r._reject(new N.Abort(t.error)),r.active=!1,r.on("abort").fire(n)}),t.oncomplete=Z(function(){r.active=!1,r._resolve(),"mutatedParts"in t&&yt.storagemutated.fire(t.mutatedParts)}),this},e.prototype._promise=function(t,r,a){var i=this;if(t==="readwrite"&&this.mode!=="readwrite")return ae(new N.ReadOnly("Transaction is readonly"));if(!this.active)return ae(new N.TransactionInactive);if(this._locked())return new P(function(o,s){i._blockedFuncs.push([function(){i._promise(t,r,a).then(o,s)},R])});if(a)return ft(function(){var o=new P(function(s,l){i._lock();var c=r(s,l,i);c&&c.then&&c.then(s,l)});return o.finally(function(){return i._unlock()}),o._lib=!0,o});var n=new P(function(o,s){var l=r(o,s,i);l&&l.then&&l.then(o,s)});return n._lib=!0,n},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(t){var r=this._root(),a=P.resolve(t);if(r._waitingFor)r._waitingFor=r._waitingFor.then(function(){return a});else{r._waitingFor=a,r._waitingQueue=[];var i=r.idbtrans.objectStore(r.storeNames[0]);(function o(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(i.get(-1/0).onsuccess=o)})()}var n=r._waitingFor;return new P(function(o,s){a.then(function(l){return r._waitingQueue.push(Z(o.bind(null,l)))},function(l){return r._waitingQueue.push(Z(s.bind(null,l)))}).finally(function(){r._waitingFor===n&&(r._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new N.Abort))},e.prototype.table=function(t){var r=this._memoizedTables||(this._memoizedTables={});if(Ce(r,t))return r[t];var a=this.schema[t];if(!a)throw new N.NotFound("Table "+t+" not part of transaction");var i=new this.db.Table(t,a,this);return i.core=this.db.core.table(t),r[t]=i,i},e})();function jc(e){return Jr(Bc.prototype,function(r,a,i,n,o){var s=this;r!=="readonly"&&a.forEach(function(l){var c,u=(c=i[l])===null||c===void 0?void 0:c.yProps;u&&(a=a.concat(u.map(function(p){return p.updatesTable})))}),this.db=e,this.mode=r,this.storeNames=a,this.schema=i,this.chromeTransactionDurability=n,this.idbtrans=null,this.on=Zr(this,"complete","error","abort"),this.parent=o||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new P(function(l,c){s._resolve=l,s._reject=c}),this._completion.then(function(){s.active=!1,s.on.complete.fire()},function(l){var c=s.active;return s.active=!1,s.on.error.fire(l),s.parent?s.parent._reject(l):c&&s.idbtrans&&s.idbtrans.abort(),ae(l)})})}function rn(e,t,r,a,i,n,o,s){return{name:e,keyPath:t,unique:r,multi:a,auto:i,compound:n,src:(r&&!o?"&":"")+(a?"*":"")+(i?"++":"")+Ps(t),type:s}}function Ps(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Tn(e,t,r){return{name:e,primKey:t,indexes:r,mappedClass:null,idxByName:Zl(r,function(a){return[a.name,a]})}}function Kc(e){return e.length===1?e[0]:e}var Lr=function(e){try{return e.only([[]]),Lr=function(){return[[]]},[[]]}catch{return Lr=function(){return Tt},Tt}};function an(e){return e==null?function(){}:typeof e=="string"?qc(e):function(t){return at(t,e)}}function qc(e){var t=e.split(".");return t.length===1?function(r){return r[e]}:function(r){return at(r,e)}}function xo(e){return[].slice.call(e)}var Uc=0;function Tr(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Gc(e,t,r){function a(m,w){var h=xo(m.objectStoreNames),g=h.length>0?w.objectStore(h[0]):{};return{schema:{name:m.name,tables:h.map(function(_){return w.objectStore(_)}).map(function(_){var b=_.keyPath,I=_.autoIncrement,$=ee(b),x=b==null,y={},C={name:_.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:x,compound:$,keyPath:b,autoIncrement:I,unique:!0,extractKey:an(b)},indexes:xo(_.indexNames).map(function(E){return _.index(E)}).map(function(E){var k=E.name,T=E.unique,L=E.multiEntry,S=E.keyPath,O=ee(S),M={name:k,compound:O,keyPath:S,unique:T,multiEntry:L,extractKey:an(S)};return y[Tr(S)]=M,M}),getIndexByKeyPath:function(E){return y[Tr(E)]}};return y[":id"]=C.primaryKey,b!=null&&(y[Tr(b)]=C.primaryKey),C})},hasGetAll:h.length>0&&"getAll"in g&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in g}}function i(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var w=m.lower,h=m.upper,g=m.lowerOpen,_=m.upperOpen,b=w===void 0?h===void 0?null:t.upperBound(h,!!_):h===void 0?t.lowerBound(w,!!g):t.bound(w,h,!!g,!!_);return b}function n(m){var w=m.name;function h(b){var I=b.trans,$=b.type,x=b.keys,y=b.values,C=b.range;return new Promise(function(E,k){E=Z(E);var T=I.objectStore(w),L=T.keyPath==null,S=$==="put"||$==="add";if(!S&&$!=="delete"&&$!=="deleteRange")throw new Error("Invalid operation type: "+$);var O=(x||y||{length:1}).length;if(x&&y&&x.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(O===0)return E({numFailures:0,failures:{},results:[],lastResult:void 0});var M,A=[],G=[],F=0,ne=function(ue){++F,zr(ue)};if($==="deleteRange"){if(C.type===4)return E({numFailures:F,failures:G,results:[],lastResult:void 0});C.type===3?A.push(M=T.clear()):A.push(M=T.delete(i(C)))}else{var Ae=S?L?[y,x]:[y,null]:[x,null],ye=Ae[0],$t=Ae[1];if(S)for(var ge=0;ge<O;++ge)A.push(M=$t&&$t[ge]!==void 0?T[$](ye[ge],$t[ge]):T[$](ye[ge])),M.onerror=ne;else for(var ge=0;ge<O;++ge)A.push(M=T[$](ye[ge])),M.onerror=ne}var Pe=function(ue){var It=ue.target.result;A.forEach(function(Fe,na){return Fe.error!=null&&(G[na]=Fe.error)}),E({numFailures:F,failures:G,results:$==="delete"?x:A.map(function(Fe){return Fe.result}),lastResult:It})};M.onerror=function(ue){ne(ue),Pe(ue)},M.onsuccess=Pe})}function g(b){var I=b.trans,$=b.values,x=b.query,y=b.reverse,C=b.unique;return new Promise(function(E,k){E=Z(E);var T=x.index,L=x.range,S=I.objectStore(w),O=T.isPrimaryKey?S:S.index(T.name),M=y?C?"prevunique":"prev":C?"nextunique":"next",A=$||!("openKeyCursor"in O)?O.openCursor(i(L),M):O.openKeyCursor(i(L),M);A.onerror=ze(k),A.onsuccess=Z(function(G){var F=A.result;if(!F){E(null);return}F.___id=++Uc,F.done=!1;var ne=F.continue.bind(F),Ae=F.continuePrimaryKey;Ae&&(Ae=Ae.bind(F));var ye=F.advance.bind(F),$t=function(){throw new Error("Cursor not started")},ge=function(){throw new Error("Cursor not stopped")};F.trans=I,F.stop=F.continue=F.continuePrimaryKey=F.advance=$t,F.fail=Z(k),F.next=function(){var Pe=this,ue=1;return this.start(function(){return ue--?Pe.continue():Pe.stop()}).then(function(){return Pe})},F.start=function(Pe){var ue=new Promise(function(Fe,na){Fe=Z(Fe),A.onerror=ze(na),F.fail=na,F.stop=function(ol){F.stop=F.continue=F.continuePrimaryKey=F.advance=ge,Fe(ol)}}),It=function(){if(A.result)try{Pe()}catch(Fe){F.fail(Fe)}else F.done=!0,F.start=function(){throw new Error("Cursor behind last entry")},F.stop()};return A.onsuccess=Z(function(Fe){A.onsuccess=It,It()}),F.continue=ne,F.continuePrimaryKey=Ae,F.advance=ye,It(),ue},E(F)},k)})}function _(b,I){return function($){return new Promise(function(x,y){var C;x=Z(x);var E=$.trans,k=$.values,T=$.limit,L=$.query,S=(C=$.direction)!==null&&C!==void 0?C:"next",O=T===1/0?void 0:T,M=L.index,A=L.range,G=E.objectStore(w),F=M.isPrimaryKey?G:G.index(M.name),ne=i(A);if(T===0)return x({result:[]});if(I){var Ae={query:ne,count:O,direction:S},ye=k?F.getAll(Ae):F.getAllKeys(Ae);ye.onsuccess=function(ue){return x({result:ue.target.result})},ye.onerror=ze(y)}else if(b&&S==="next"){var ye=k?F.getAll(ne,O):F.getAllKeys(ne,O);ye.onsuccess=function(It){return x({result:It.target.result})},ye.onerror=ze(y)}else{var $t=0,ge=k||!("openKeyCursor"in F)?F.openCursor(ne,S):F.openKeyCursor(ne,S),Pe=[];ge.onsuccess=function(){var ue=ge.result;if(!ue)return x({result:Pe});if(Pe.push(k?ue.value:ue.primaryKey),++$t===T)return x({result:Pe});ue.continue()},ge.onerror=ze(y)}})}}return{name:w,schema:m,mutate:h,getMany:function(b){var I=b.trans,$=b.keys;return new Promise(function(x,y){x=Z(x);for(var C=I.objectStore(w),E=$.length,k=new Array(E),T=0,L=0,S,O=function(F){var ne=F.target;(k[ne._pos]=ne.result)!=null,++L===T&&x(k)},M=ze(y),A=0;A<E;++A){var G=$[A];G!=null&&(S=C.get($[A]),S._pos=A,S.onsuccess=O,S.onerror=M,++T)}T===0&&x(k)})},get:function(b){var I=b.trans,$=b.key;return new Promise(function(x,y){x=Z(x);var C=I.objectStore(w),E=C.get($);E.onsuccess=function(k){return x(k.target.result)},E.onerror=ze(y)})},query:_(l,c),openCursor:g,count:function(b){var I=b.query,$=b.trans,x=I.index,y=I.range;return new Promise(function(C,E){var k=$.objectStore(w),T=x.isPrimaryKey?k:k.index(x.name),L=i(y),S=L?T.count(L):T.count();S.onsuccess=Z(function(O){return C(O.target.result)}),S.onerror=ze(E)})}}}var o=a(e,r),s=o.schema,l=o.hasGetAll,c=o.hasIdb3Features,u=s.tables.map(function(m){return n(m)}),p={};return u.forEach(function(m){return p[m.name]=m}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(m){var w=p[m];if(!w)throw new Error("Table '".concat(m,"' not found"));return p[m]},MIN_KEY:-1/0,MAX_KEY:Lr(t),schema:s}}function Hc(e,t){return t.reduce(function(r,a){var i=a.create;return K(K({},r),i(r))},e)}function Vc(e,t,r,a){var i=r.IDBKeyRange;r.indexedDB;var n=Hc(Gc(t,i,a),e.dbcore);return{dbcore:n}}function qa(e,t){var r=t.db,a=Vc(e._middlewares,r,e._deps,t);e.core=a.dbcore,e.tables.forEach(function(i){var n=i.name;e.core.schema.tables.some(function(o){return o.name===n})&&(i.core=e.core.table(n),e[n]instanceof e.Table&&(e[n].core=i.core))})}function Ua(e,t,r,a){r.forEach(function(i){var n=a[i];t.forEach(function(o){var s=ds(o,i);(!s||"value"in s&&s.value===void 0)&&(o===e.Transaction.prototype||o instanceof e.Transaction?mt(o,i,{get:function(){return this.table(i)},set:function(l){cs(this,i,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[i]=new e.Table(i,n))})})}function nn(e,t){t.forEach(function(r){for(var a in r)r[a]instanceof e.Table&&delete r[a]})}function Wc(e,t){return e._cfg.version-t._cfg.version}function Qc(e,t,r,a){var i=e._dbSchema;r.objectStoreNames.contains("$meta")&&!i.$meta&&(i.$meta=Tn("$meta",Ds("")[0],[]),e._storeNames.push("$meta"));var n=e._createTransaction("readwrite",e._storeNames,i);n.create(r),n._completion.catch(a);var o=n._reject.bind(n),s=R.transless||R;ft(function(){if(R.trans=n,R.transless=s,t===0)de(i).forEach(function(l){On(r,l,i[l].primKey,i[l].indexes)}),qa(e,r),P.follow(function(){return e.on.populate.fire(n)}).catch(o);else return qa(e,r),Xc(e,n,t).then(function(l){return Zc(e,l,n,r)}).catch(o)})}function Yc(e,t){Ts(e._dbSchema,t),t.db.version%10===0&&!t.objectStoreNames.contains("$meta")&&t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var r=si(e,e.idbdb,t);Ha(e,e._dbSchema,t);for(var a=Dn(r,e._dbSchema),i=function(c){if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(p){Ue&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(p.src)),Ga(u,p)})},n=0,o=a.change;n<o.length;n++){var s=o[n],l=i(s);if(typeof l=="object")return l.value}}function Xc(e,t,r){return t.storeNames.includes("$meta")?t.table("$meta").get("version").then(function(a){return a??r}):P.resolve(r)}function Zc(e,t,r,a){var i=[],n=e._versions,o=e._dbSchema=si(e,e.idbdb,a),s=n.filter(function(c){return c._cfg.version>=t});if(s.length===0)return P.resolve();s.forEach(function(c){i.push(function(){var u=o,p=c._cfg.dbschema;Ha(e,u,a),Ha(e,p,a),o=e._dbSchema=p;var m=Dn(u,p);m.add.forEach(function(I){On(a,I[0],I[1].primKey,I[1].indexes)}),m.change.forEach(function(I){if(I.recreate)throw new N.Upgrade("Not yet support for changing primary key");var $=a.objectStore(I.name);I.add.forEach(function(x){return Ga($,x)}),I.change.forEach(function(x){$.deleteIndex(x.name),Ga($,x)}),I.del.forEach(function(x){return $.deleteIndex(x)})});var w=c._cfg.contentUpgrade;if(w&&c._cfg.version>t){qa(e,a),r._memoizedTables={};var h=hs(p);m.del.forEach(function(I){h[I]=u[I]}),nn(e,[e.Transaction.prototype]),Ua(e,[e.Transaction.prototype],de(h),h),r.schema=h;var g=In(w);g&&mr();var _,b=P.follow(function(){if(_=w(r),_&&g){var I=gt.bind(null,null);_.then(I,I)}});return _&&typeof _.then=="function"?P.resolve(_):b.then(function(){return _})}}),i.push(function(u){var p=c._cfg.dbschema;Jc(p,u),nn(e,[e.Transaction.prototype]),Ua(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),r.schema=e._dbSchema}),i.push(function(u){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===c._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(p){return p!=="$meta"})):u.objectStore("$meta").put(c._cfg.version,"version"))})});function l(){return i.length?P.resolve(i.shift()(r.idbtrans)).then(l):P.resolve()}return l().then(function(){Ts(o,a)})}function Dn(e,t){var r={del:[],add:[],change:[]},a;for(a in e)t[a]||r.del.push(a);for(a in t){var i=e[a],n=t[a];if(!i)r.add.push([a,n]);else{var o={name:a,def:n,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(n.primKey.keyPath||"")||i.primKey.auto!==n.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=i.idxByName,l=n.idxByName,c=void 0;for(c in s)l[c]||o.del.push(c);for(c in l){var u=s[c],p=l[c];u?u.src!==p.src&&o.change.push(p):o.add.push(p)}(o.del.length>0||o.add.length>0||o.change.length>0)&&r.change.push(o)}}}return r}function On(e,t,r,a){var i=e.db.createObjectStore(t,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:{autoIncrement:r.auto});return a.forEach(function(n){return Ga(i,n)}),i}function Ts(e,t){de(e).forEach(function(r){t.db.objectStoreNames.contains(r)||(Ue&&console.debug("Dexie: Creating missing table",r),On(t,r,e[r].primKey,e[r].indexes))})}function Jc(e,t){[].slice.call(t.db.objectStoreNames).forEach(function(r){return e[r]==null&&t.db.deleteObjectStore(r)})}function Ga(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function si(e,t,r){var a={},i=ai(t.objectStoreNames,0);return i.forEach(function(n){for(var o=r.objectStore(n),s=o.keyPath,l=rn(Ps(s),s||"",!0,!1,!!o.autoIncrement,s&&typeof s!="string",!0),c=[],u=0;u<o.indexNames.length;++u){var p=o.index(o.indexNames[u]);s=p.keyPath;var m=rn(p.name,s,!!p.unique,!!p.multiEntry,!1,s&&typeof s!="string",!1);c.push(m)}a[n]=Tn(n,l,c)}),a}function ed(e,t,r){e.verno=t.version/10;var a=e._dbSchema=si(e,t,r);e._storeNames=ai(t.objectStoreNames,0),Ua(e,[e._allTables],de(a),a)}function td(e,t){var r=si(e,e.idbdb,t),a=Dn(r,e._dbSchema);return!(a.add.length||a.change.some(function(i){return i.add.length||i.change.length}))}function Ha(e,t,r){for(var a=r.db.objectStoreNames,i=0;i<a.length;++i){var n=a[i],o=r.objectStore(n);e._hasGetAll="getAll"in o;for(var s=0;s<o.indexNames.length;++s){var l=o.indexNames[s],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+ai(c).join("+")+"]";if(t[n]){var p=t[n].idxByName[u];p&&(p.name=l,delete t[n].idxByName[u],t[n].idxByName[l]=p)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&pe.WorkerGlobalScope&&pe instanceof pe.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Ds(e){return e.split(",").map(function(t,r){var a,i=t.split(":"),n=(a=i[1])===null||a===void 0?void 0:a.trim();t=i[0].trim();var o=t.replace(/([&*]|\+\+)/g,""),s=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split("+"):o;return rn(o,s||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ee(s),r===0,n)})}var rd=(function(){function e(){}return e.prototype._createTableSchema=function(t,r,a){return Tn(t,r,a)},e.prototype._parseIndexSyntax=function(t){return Ds(t)},e.prototype._parseStoresSpec=function(t,r){var a=this;de(t).forEach(function(i){if(t[i]!==null){var n=a._parseIndexSyntax(t[i]),o=n.shift();if(!o)throw new N.Schema("Invalid schema for table "+i+": "+t[i]);if(o.unique=!0,o.multi)throw new N.Schema("Primary key cannot be multiEntry*");n.forEach(function(l){if(l.auto)throw new N.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new N.Schema("Index must have a name and cannot be an empty string")});var s=a._createTableSchema(i,o,n);r[i]=s}})},e.prototype.stores=function(t){var r=this.db;this._cfg.storesSource=this._cfg.storesSource?Se(this._cfg.storesSource,t):t;var a=r._versions,i={},n={};return a.forEach(function(o){Se(i,o._cfg.storesSource),n=o._cfg.dbschema={},o._parseStoresSpec(i,n)}),r._dbSchema=n,nn(r,[r._allTables,r,r.Transaction.prototype]),Ua(r,[r._allTables,r,r.Transaction.prototype,this._cfg.tables],de(n),n),r._storeNames=de(n),this},e.prototype.upgrade=function(t){return this._cfg.contentUpgrade=Sn(this._cfg.contentUpgrade||Q,t),this},e})();function ad(e){return Jr(rd.prototype,function(r){this.db=e,this._cfg={version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var Br=id();function id(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var e=new Set,t=new FinalizationRegistry(function(o){e.delete(o)}),r=function(){return Array.from(e).map(function(o){return o.deref()}).filter(function(o){return o!==void 0})},a=function(o){var s=new WeakRef(o._novip);if(e.add(s),t.register(o._novip,s,s),e.size>o._options.maxConnections){var l=e.values().next().value;e.delete(l),t.unregister(l)}},i=function(o){if(o)for(var s=e.values(),l=s.next();!l.done;){var c=l.value;if(c.deref()===o._novip){e.delete(c),t.unregister(c);return}l=s.next()}};return{toArray:r,add:a,remove:i}}else{var n=[],r=function(){return n},a=function(c){n.push(c._novip)},i=function(c){if(c){var u=n.indexOf(c._novip);u!==-1&&n.splice(u,1)}};return{toArray:r,add:a,remove:i}}}function Rn(e,t){var r=e._dbNamesDB;return r||(r=e._dbNamesDB=new Kr(ni,{addons:[],indexedDB:e,IDBKeyRange:t}),r.version(1).stores({dbnames:"name"})),r.table("dbnames")}function Fn(e){return e&&typeof e.databases=="function"}function nd(e){var t=e.indexedDB,r=e.IDBKeyRange;return Fn(t)?Promise.resolve(t.databases()).then(function(a){return a.map(function(i){return i.name}).filter(function(i){return i!==ni})}):Rn(t,r).toCollection().primaryKeys()}function od(e,t){var r=e.indexedDB,a=e.IDBKeyRange;!Fn(r)&&t!==ni&&Rn(r,a).put({name:t}).catch(Q)}function sd(e,t){var r=e.indexedDB,a=e.IDBKeyRange;!Fn(r)&&t!==ni&&Rn(r,a).delete(t).catch(Q)}function on(e){return ft(function(){return R.letThrough=!0,e()})}function ld(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var t;return new Promise(function(r){var a=function(){return indexedDB.databases().finally(r)};t=setInterval(a,100),a()}).finally(function(){return clearInterval(t)})}var Si;function Nn(e){return!("from"in e)}var be=function(e,t){if(this)Se(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0});else{var r=new be;return e&&"d"in e&&Se(r,e),r}};nr(be.prototype,(Si={add:function(e){return Va(this,e),this},addKey:function(e){return jr(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(r){return jr(t,r,r)}),this},hasKey:function(e){var t=Wa(this).next(e).value;return t&&V(t.from,e)<=0&&V(t.to,e)>=0}},Si[Wi]=function(){return Wa(this)},Si));function jr(e,t,r){var a=V(t,r);if(!isNaN(a)){if(a>0)throw RangeError();if(Nn(e))return Se(e,{from:t,to:r,d:1});var i=e.l,n=e.r;if(V(r,e.from)<0)return i?jr(i,t,r):e.l={from:t,to:r,d:1,l:null,r:null},$o(e);if(V(t,e.to)>0)return n?jr(n,t,r):e.r={from:t,to:r,d:1,l:null,r:null},$o(e);V(t,e.from)<0&&(e.from=t,e.l=null,e.d=n?n.d+1:1),V(r,e.to)>0&&(e.to=r,e.r=null,e.d=e.l?e.l.d+1:1);var o=!e.r;i&&!e.l&&Va(e,i),n&&o&&Va(e,n)}}function Va(e,t){function r(a,i){var n=i.from,o=i.to,s=i.l,l=i.r;jr(a,n,o),s&&r(a,s),l&&r(a,l)}Nn(t)||r(e,t)}function cd(e,t){var r=Wa(t),a=r.next();if(a.done)return!1;for(var i=a.value,n=Wa(e),o=n.next(i.from),s=o.value;!a.done&&!o.done;){if(V(s.from,i.to)<=0&&V(s.to,i.from)>=0)return!0;V(i.from,s.from)<0?i=(a=r.next(s.from)).value:s=(o=n.next(i.from)).value}return!1}function Wa(e){var t=Nn(e)?null:{s:0,n:e};return{next:function(r){for(var a=arguments.length>0;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&V(r,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||V(r,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function $o(e){var t,r,a=(((t=e.r)===null||t===void 0?void 0:t.d)||0)-(((r=e.l)===null||r===void 0?void 0:r.d)||0),i=a>1?"r":a<-1?"l":"";if(i){var n=i==="r"?"l":"r",o=K({},e),s=e[i];e.from=s.from,e.to=s.to,e[i]=s[i],o[i]=s[n],e[n]=o,o.d=Io(o)}e.d=Io(e)}function Io(e){var t=e.r,r=e.l;return(t?r?Math.max(t.d,r.d):t.d:r?r.d:0)+1}function li(e,t){return de(t).forEach(function(r){e[r]?Va(e[r],t[r]):e[r]=gs(t[r])}),e}function zn(e,t){return e.all||t.all||Object.keys(e).some(function(r){return t[r]&&cd(t[r],e[r])})}var Nt={},Ci={},Mi=!1;function ca(e,t){li(Ci,e),Mi||(Mi=!0,setTimeout(function(){Mi=!1;var r=Ci;Ci={},Ln(r,!1)},0))}function Ln(e,t){t===void 0&&(t=!1);var r=new Set;if(e.all)for(var a=0,i=Object.values(Nt);a<i.length;a++){var n=i[a];Eo(n,e,r,t)}else for(var o in e){var s=/^idb\:\/\/(.*)\/(.*)\//.exec(o);if(s){var l=s[1],c=s[2],n=Nt["idb://".concat(l,"/").concat(c)];n&&Eo(n,e,r,t)}}r.forEach(function(u){return u()})}function Eo(e,t,r,a){for(var i=[],n=0,o=Object.entries(e.queries.query);n<o.length;n++){for(var s=o[n],l=s[0],c=s[1],u=[],p=0,m=c;p<m.length;p++){var w=m[p];zn(t,w.obsSet)?w.subscribers.forEach(function(b){return r.add(b)}):a&&u.push(w)}a&&i.push([l,u])}if(a)for(var h=0,g=i;h<g.length;h++){var _=g[h],l=_[0],u=_[1];e.queries.query[l]=u}}function dd(e){var t=e._state,r=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?ae(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,i=Math.round(e.verno*10),n=!1;function o(){if(t.openCanceller!==a)throw new N.DatabaseClosed("db.open() was cancelled")}var s=t.dbReadyResolve,l=null,c=!1,u=function(){return new P(function(p,m){if(o(),!r)throw new N.MissingAPI;var w=e.name,h=t.autoSchema||!i?r.open(w):r.open(w,i);if(!h)throw new N.MissingAPI;h.onerror=ze(m),h.onblocked=Z(e._fireOnBlocked),h.onupgradeneeded=Z(function(g){if(l=h.transaction,t.autoSchema&&!e._options.allowEmptyDB){h.onerror=zr,l.abort(),h.result.close();var _=r.deleteDatabase(w);_.onsuccess=_.onerror=Z(function(){m(new N.NoSuchDatabase("Database ".concat(w," doesnt exist")))})}else{l.onerror=ze(m);var b=g.oldVersion>Math.pow(2,62)?0:g.oldVersion;c=b<1,e.idbdb=h.result,n&&Yc(e,l),Qc(e,b/10,l,m)}},m),h.onsuccess=Z(function(){l=null;var g=e.idbdb=h.result,_=ai(g.objectStoreNames);if(_.length>0)try{var b=g.transaction(Kc(_),"readonly");if(t.autoSchema)ed(e,g,b);else if(Ha(e,e._dbSchema,b),!td(e,b)&&!n)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),g.close(),i=g.version+1,n=!0,p(u());qa(e,b)}catch{}Br.add(e),g.onversionchange=Z(function(I){t.vcFired=!0,e.on("versionchange").fire(I)}),g.onclose=Z(function(){e.close({disableAutoOpen:!1})}),c&&od(e._deps,w),p()},m)}).catch(function(p){switch(p==null?void 0:p.name){case"UnknownError":if(t.PR1398_maxLoop>0)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(i>0)return i=0,u();break}return P.reject(p)})};return P.race([a,(typeof navigator>"u"?P.resolve():ld()).then(u)]).then(function(){return o(),t.onReadyBeingFired=[],P.resolve(on(function(){return e.on.ready.fire(e.vip)})).then(function p(){if(t.onReadyBeingFired.length>0){var m=t.onReadyBeingFired.reduce(Sn,Q);return t.onReadyBeingFired=[],P.resolve(on(function(){return m(e.vip)})).then(p)}})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(p){t.dbOpenError=p;try{l&&l.abort()}catch{}return a===t.openCanceller&&e._close(),ae(p)}).finally(function(){t.openComplete=!0,s()}).then(function(){if(c){var p={};e.tables.forEach(function(m){m.schema.indexes.forEach(function(w){w.name&&(p["idb://".concat(e.name,"/").concat(m.name,"/").concat(w.name)]=new be(-1/0,[[[]]]))}),p["idb://".concat(e.name,"/").concat(m.name,"/")]=p["idb://".concat(e.name,"/").concat(m.name,"/:dels")]=new be(-1/0,[[[]]])}),yt(oi).fire(p),Ln(p,!0)}return e})}function sn(e){var t=function(o){return e.next(o)},r=function(o){return e.throw(o)},a=n(t),i=n(r);function n(o){return function(s){var l=o(s),c=l.value;return l.done?c:!c||typeof c.then!="function"?ee(c)?Promise.all(c).then(a,i):a(c):c.then(a,i)}}return n(t)()}function ud(e,t,r){var a=arguments.length;if(a<2)throw new N.InvalidArgument("Too few arguments");for(var i=new Array(a-1);--a;)i[a-1]=arguments[a];r=i.pop();var n=ms(i);return[e,n,r]}function Os(e,t,r,a,i){return P.resolve().then(function(){var n=R.transless||R,o=e._createTransaction(t,r,e._dbSchema,a);o.explicit=!0;var s={trans:o,transless:n};if(a)o.idbtrans=a.idbtrans;else try{o.create(),o.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(p){return p.name===kn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return Os(e,t,r,null,i)})):ae(p)}var l=In(i);l&&mr();var c,u=P.follow(function(){if(c=i.call(o,o),c)if(l){var p=gt.bind(null,null);c.then(p,p)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=sn(c))},s);return(c&&typeof c.then=="function"?P.resolve(c).then(function(p){return o.active?p:ae(new N.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):u.then(function(){return c})).then(function(p){return a&&o._resolve(),o._completion.then(function(){return p})}).catch(function(p){return o._reject(p),ae(p)})})}function da(e,t,r){for(var a=ee(e)?e.slice():[e],i=0;i<r;++i)a.push(t);return a}function pd(e){return K(K({},e),{table:function(t){var r=e.table(t),a=r.schema,i={},n=[];function o(g,_,b){var I=Tr(g),$=i[I]=i[I]||[],x=g==null?0:typeof g=="string"?1:g.length,y=_>0,C=K(K({},b),{name:y?"".concat(I,"(virtual-from:").concat(b.name,")"):b.name,lowLevelIndex:b,isVirtual:y,keyTail:_,keyLength:x,extractKey:an(g),unique:!y&&b.unique});if($.push(C),C.isPrimaryKey||n.push(C),x>1){var E=x===2?g[0]:g.slice(0,x-1);o(E,_+1,b)}return $.sort(function(k,T){return k.keyTail-T.keyTail}),C}var s=o(a.primaryKey.keyPath,0,a.primaryKey);i[":id"]=[s];for(var l=0,c=a.indexes;l<c.length;l++){var u=c[l];o(u.keyPath,0,u)}function p(g){var _=i[Tr(g)];return _&&_[0]}function m(g,_){return{type:g.type===1?2:g.type,lower:da(g.lower,g.lowerOpen?e.MAX_KEY:e.MIN_KEY,_),lowerOpen:!0,upper:da(g.upper,g.upperOpen?e.MIN_KEY:e.MAX_KEY,_),upperOpen:!0}}function w(g){var _=g.query.index;return _.isVirtual?K(K({},g),{query:{index:_.lowLevelIndex,range:m(g.query.range,_.keyTail)}}):g}var h=K(K({},r),{schema:K(K({},a),{primaryKey:s,indexes:n,getIndexByKeyPath:p}),count:function(g){return r.count(w(g))},query:function(g){return r.query(w(g))},openCursor:function(g){var _=g.query.index,b=_.keyTail,I=_.isVirtual,$=_.keyLength;if(!I)return r.openCursor(g);function x(y){function C(k){k!=null?y.continue(da(k,g.reverse?e.MAX_KEY:e.MIN_KEY,b)):g.unique?y.continue(y.key.slice(0,$).concat(g.reverse?e.MIN_KEY:e.MAX_KEY,b)):y.continue()}var E=Object.create(y,{continue:{value:C},continuePrimaryKey:{value:function(k,T){y.continuePrimaryKey(da(k,e.MAX_KEY,b),T)}},primaryKey:{get:function(){return y.primaryKey}},key:{get:function(){var k=y.key;return $===1?k[0]:k.slice(0,$)}},value:{get:function(){return y.value}}});return E}return r.openCursor(w(g)).then(function(y){return y&&x(y)})}});return h}})}var hd={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:pd};function Bn(e,t,r,a){return r=r||{},a=a||"",de(e).forEach(function(i){if(!Ce(t,i))r[a+i]=void 0;else{var n=e[i],o=t[i];if(typeof n=="object"&&typeof o=="object"&&n&&o){var s=Vi(n),l=Vi(o);s!==l?r[a+i]=t[i]:s==="Object"?Bn(n,o,r,a+i+"."):n!==o&&(r[a+i]=t[i])}else n!==o&&(r[a+i]=t[i])}}),de(t).forEach(function(i){Ce(e,i)||(r[a+i]=t[i])}),r}function jn(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var md={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return K(K({},e),{table:function(t){var r=e.table(t),a=r.schema.primaryKey,i=K(K({},r),{mutate:function(n){var o=R.trans,s=o.table(t).hook,l=s.deleting,c=s.creating,u=s.updating;switch(n.type){case"add":if(c.fire===Q)break;return o._promise("readwrite",function(){return p(n)},!0);case"put":if(c.fire===Q&&u.fire===Q)break;return o._promise("readwrite",function(){return p(n)},!0);case"delete":if(l.fire===Q)break;return o._promise("readwrite",function(){return p(n)},!0);case"deleteRange":if(l.fire===Q)break;return o._promise("readwrite",function(){return m(n)},!0)}return r.mutate(n);function p(h){var g=R.trans,_=h.keys||jn(a,h);if(!_)throw new Error("Keys missing");return h=h.type==="add"||h.type==="put"?K(K({},h),{keys:_}):K({},h),h.type!=="delete"&&(h.values=za([],h.values)),h.keys&&(h.keys=za([],h.keys)),fd(r,h,_).then(function(b){var I=_.map(function($,x){var y=b[x],C={onerror:null,onsuccess:null};if(h.type==="delete")l.fire.call(C,$,y,g);else if(h.type==="add"||y===void 0){var E=c.fire.call(C,$,h.values[x],g);$==null&&E!=null&&($=E,h.keys[x]=$,a.outbound||Ie(h.values[x],a.keyPath,$))}else{var k=Bn(y,h.values[x]),T=u.fire.call(C,k,$,y,g);if(T){var L=h.values[x];Object.keys(T).forEach(function(S){Ce(L,S)?L[S]=T[S]:Ie(L,S,T[S])})}}return C});return r.mutate(h).then(function($){for(var x=$.failures,y=$.results,C=$.numFailures,E=$.lastResult,k=0;k<_.length;++k){var T=y?y[k]:_[k],L=I[k];T==null?L.onerror&&L.onerror(x[k]):L.onsuccess&&L.onsuccess(h.type==="put"&&b[k]?h.values[k]:T)}return{failures:x,results:y,numFailures:C,lastResult:E}}).catch(function($){return I.forEach(function(x){return x.onerror&&x.onerror($)}),Promise.reject($)})})}function m(h){return w(h.trans,h.range,1e4)}function w(h,g,_){return r.query({trans:h,values:!1,query:{index:a,range:g},limit:_}).then(function(b){var I=b.result;return p({type:"delete",keys:I,trans:h}).then(function($){return $.numFailures>0?Promise.reject($.failures[0]):I.length<_?{failures:[],numFailures:0,lastResult:void 0}:w(h,K(K({},g),{lower:I[I.length-1],lowerOpen:!0}),_)})})}}});return i}})}};function fd(e,t,r){return t.type==="add"?Promise.resolve([]):e.getMany({trans:t.trans,keys:r,cache:"immutable"})}function Rs(e,t,r){try{if(!t||t.keys.length<e.length)return null;for(var a=[],i=0,n=0;i<t.keys.length&&n<e.length;++i)V(t.keys[i],e[n])===0&&(a.push(r?Lt(t.values[i]):t.values[i]),++n);return a.length===e.length?a:null}catch{return null}}var gd={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var r=e.table(t);return K(K({},r),{getMany:function(a){if(!a.cache)return r.getMany(a);var i=Rs(a.keys,a.trans._cache,a.cache==="clone");return i?P.resolve(i):r.getMany(a).then(function(n){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Lt(n):n},n})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),r.mutate(a)}})}}}};function Fs(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ns(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var vd={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,r=new be(e.MIN_KEY,e.MAX_KEY);return K(K({},e),{transaction:function(a,i,n){if(R.subscr&&i!=="readonly")throw new N.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(R.querier));return e.transaction(a,i,n)},table:function(a){var i=e.table(a),n=i.schema,o=n.primaryKey,s=n.indexes,l=o.extractKey,c=o.outbound,u=o.autoIncrement&&s.filter(function(h){return h.compound&&h.keyPath.includes(o.keyPath)}),p=K(K({},i),{mutate:function(h){var g,_,b=h.trans,I=h.mutatedParts||(h.mutatedParts={}),$=function(M){var A="idb://".concat(t,"/").concat(a,"/").concat(M);return I[A]||(I[A]=new be)},x=$(""),y=$(":dels"),C=h.type,E=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[jn(o,h).filter(function(M){return M}),h.values]:[],k=E[0],T=E[1],L=h.trans._cache;if(ee(k)){x.addKeys(k);var S=C==="delete"||k.length===T.length?Rs(k,L):null;S||y.addKeys(k),(S||T)&&yd($,n,S,T)}else if(k){var O={from:(g=k.lower)!==null&&g!==void 0?g:e.MIN_KEY,to:(_=k.upper)!==null&&_!==void 0?_:e.MAX_KEY};y.add(O),x.add(O)}else x.add(r),y.add(r),n.indexes.forEach(function(M){return $(M.name).add(r)});return i.mutate(h).then(function(M){return k&&(h.type==="add"||h.type==="put")&&(x.addKeys(M.results),u&&u.forEach(function(A){for(var G=h.values.map(function(ye){return A.extractKey(ye)}),F=A.keyPath.findIndex(function(ye){return ye===o.keyPath}),ne=0,Ae=M.results.length;ne<Ae;++ne)G[ne][F]=M.results[ne];$(A.name).addKeys(G)})),b.mutatedParts=li(b.mutatedParts||{},I),M})}}),m=function(h){var g,_,b=h.query,I=b.index,$=b.range;return[I,new be((g=$.lower)!==null&&g!==void 0?g:e.MIN_KEY,(_=$.upper)!==null&&_!==void 0?_:e.MAX_KEY)]},w={get:function(h){return[o,new be(h.key)]},getMany:function(h){return[o,new be().addKeys(h.keys)]},count:m,query:m,openCursor:m};return de(w).forEach(function(h){p[h]=function(g){var _=R.subscr,b=!!_,I=Fs(R,i)&&Ns(h,g),$=I?g.obsSet={}:_;if(b){var x=function(S){var O="idb://".concat(t,"/").concat(a,"/").concat(S);return $[O]||($[O]=new be)},y=x(""),C=x(":dels"),E=w[h](g),k=E[0],T=E[1];if(h==="query"&&k.isPrimaryKey&&!g.values?C.add(T):x(k.name||"").add(T),!k.isPrimaryKey)if(h==="count")C.add(r);else{var L=h==="query"&&c&&g.values&&i.query(K(K({},g),{values:!1}));return i[h].apply(this,arguments).then(function(S){if(h==="query"){if(c&&g.values)return L.then(function(G){var F=G.result;return y.addKeys(F),S});var O=g.values?S.result.map(l):S.result;g.values?y.addKeys(O):C.addKeys(O)}else if(h==="openCursor"){var M=S,A=g.values;return M&&Object.create(M,{key:{get:function(){return C.addKey(M.primaryKey),M.key}},primaryKey:{get:function(){var G=M.primaryKey;return C.addKey(G),G}},value:{get:function(){return A&&y.addKey(M.primaryKey),M.value}}})}return S})}}return i[h].apply(this,arguments)}}),p}})}};function yd(e,t,r,a){function i(n){var o=e(n.name||"");function s(c){return c!=null?n.extractKey(c):null}var l=function(c){return n.multiEntry&&ee(c)?c.forEach(function(u){return o.addKey(u)}):o.addKey(c)};(r||a).forEach(function(c,u){var p=r&&s(r[u]),m=a&&s(a[u]);V(p,m)!==0&&(p!=null&&l(p),m!=null&&l(m))})}t.indexes.forEach(i)}function ko(e,t,r){if(r.numFailures===0)return t;if(t.type==="deleteRange")return null;var a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1;if(r.numFailures===a)return null;var i=K({},t);return ee(i.keys)&&(i.keys=i.keys.filter(function(n,o){return!(o in r.failures)})),"values"in i&&ee(i.values)&&(i.values=i.values.filter(function(n,o){return!(o in r.failures)})),i}function bd(e,t){return t.lower===void 0?!0:t.lowerOpen?V(e,t.lower)>0:V(e,t.lower)>=0}function _d(e,t){return t.upper===void 0?!0:t.upperOpen?V(e,t.upper)<0:V(e,t.upper)<=0}function Ai(e,t){return bd(e,t)&&_d(e,t)}function So(e,t,r,a,i,n){if(!r||r.length===0)return e;var o=t.query.index,s=o.multiEntry,l=t.query.range,c=a.schema.primaryKey,u=c.extractKey,p=o.extractKey,m=(o.lowLevelIndex||o).extractKey,w=r.reduce(function(g,_){var b=g,I=[];if(_.type==="add"||_.type==="put")for(var $=new be,x=_.values.length-1;x>=0;--x){var y=_.values[x],C=u(y);if(!$.hasKey(C)){var E=p(y);(s&&ee(E)?E.some(function(O){return Ai(O,l)}):Ai(E,l))&&($.addKey(C),I.push(y))}}switch(_.type){case"add":{var k=new be().addKeys(t.values?g.map(function(O){return u(O)}):g);b=g.concat(t.values?I.filter(function(O){var M=u(O);return k.hasKey(M)?!1:(k.addKey(M),!0)}):I.map(function(O){return u(O)}).filter(function(O){return k.hasKey(O)?!1:(k.addKey(O),!0)}));break}case"put":{var T=new be().addKeys(_.values.map(function(O){return u(O)}));b=g.filter(function(O){return!T.hasKey(t.values?u(O):O)}).concat(t.values?I:I.map(function(O){return u(O)}));break}case"delete":var L=new be().addKeys(_.keys);b=g.filter(function(O){return!L.hasKey(t.values?u(O):O)});break;case"deleteRange":var S=_.range;b=g.filter(function(O){return!Ai(u(O),S)});break}return b},e);if(w===e)return e;var h=function(g,_){return V(m(g),m(_))||V(u(g),u(_))};return w.sort(t.direction==="prev"||t.direction==="prevunique"?function(g,_){return h(_,g)}:h),t.limit&&t.limit<1/0&&(w.length>t.limit?w.length=t.limit:e.length===t.limit&&w.length<t.limit&&(i.dirty=!0)),n?Object.freeze(w):w}function Co(e,t){return V(e.lower,t.lower)===0&&V(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function wd(e,t,r,a){if(e===void 0)return t!==void 0?-1:0;if(t===void 0)return 1;var i=V(e,t);if(i===0){if(r&&a)return 0;if(r)return 1;if(a)return-1}return i}function xd(e,t,r,a){if(e===void 0)return t!==void 0?1:0;if(t===void 0)return-1;var i=V(e,t);if(i===0){if(r&&a)return 0;if(r)return-1;if(a)return 1}return i}function $d(e,t){return wd(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&xd(e.upper,t.upper,e.upperOpen,t.upperOpen)>=0}function Id(e,t,r,a){var i,n=Nt["idb://".concat(e,"/").concat(t)];if(!n)return[];var o=n.queries[r];if(!o)return[null,!1,n,null];var s=a.query?a.query.index.name:null,l=o[s||""];if(!l)return[null,!1,n,null];switch(r){case"query":var c=(i=a.direction)!==null&&i!==void 0?i:"next",u=l.find(function(w){var h;return w.req.limit===a.limit&&w.req.values===a.values&&((h=w.req.direction)!==null&&h!==void 0?h:"next")===c&&Co(w.req.query.range,a.query.range)});if(u)return[u,!0,n,l];var p=l.find(function(w){var h,g="limit"in w.req?w.req.limit:1/0;return g>=a.limit&&((h=w.req.direction)!==null&&h!==void 0?h:"next")===c&&(a.values?w.req.values:!0)&&$d(w.req.query.range,a.query.range)});return[p,!1,n,l];case"count":var m=l.find(function(w){return Co(w.req.query.range,a.query.range)});return[m,!!m,n,l]}}function Ed(e,t,r,a){e.subscribers.add(r),a.addEventListener("abort",function(){e.subscribers.delete(r),e.subscribers.size===0&&kd(e,t)})}function kd(e,t){setTimeout(function(){e.subscribers.size===0&&St(t,e)},3e3)}var Sd={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name,r=K(K({},e),{transaction:function(a,i,n){var o=e.transaction(a,i,n);if(i==="readwrite"){var s=new AbortController,l=s.signal,c=function(u){return function(){if(s.abort(),i==="readwrite"){for(var p=new Set,m=0,w=a;m<w.length;m++){var h=w[m],g=Nt["idb://".concat(t,"/").concat(h)];if(g){var _=e.table(h),b=g.optimisticOps.filter(function(A){return A.trans===o});if(o._explicit&&u&&o.mutatedParts)for(var I=0,$=Object.values(g.queries.query);I<$.length;I++)for(var x=$[I],y=0,C=x.slice();y<C.length;y++){var E=C[y];zn(E.obsSet,o.mutatedParts)&&(St(x,E),E.subscribers.forEach(function(A){return p.add(A)}))}else if(b.length>0){g.optimisticOps=g.optimisticOps.filter(function(A){return A.trans!==o});for(var k=0,T=Object.values(g.queries.query);k<T.length;k++)for(var x=T[k],L=0,S=x.slice();L<S.length;L++){var E=S[L];if(E.res!=null&&o.mutatedParts)if(u&&!E.dirty){var O=Object.isFrozen(E.res),M=So(E.res,E.req,b,_,E,O);E.dirty?(St(x,E),E.subscribers.forEach(function(F){return p.add(F)})):M!==E.res&&(E.res=M,E.promise=P.resolve({result:M}))}else E.dirty&&St(x,E),E.subscribers.forEach(function(F){return p.add(F)})}}}}p.forEach(function(A){return A()})}}};o.addEventListener("abort",c(!1),{signal:l}),o.addEventListener("error",c(!1),{signal:l}),o.addEventListener("complete",c(!0),{signal:l})}return o},table:function(a){var i=e.table(a),n=i.schema.primaryKey,o=K(K({},i),{mutate:function(s){var l=R.trans;if(n.outbound||l.db._options.cache==="disabled"||l.explicit||l.idbtrans.mode!=="readwrite")return i.mutate(s);var c=Nt["idb://".concat(t,"/").concat(a)];if(!c)return i.mutate(s);var u=i.mutate(s);return(s.type==="add"||s.type==="put")&&(s.values.length>=50||jn(n,s).some(function(p){return p==null}))?u.then(function(p){var m=K(K({},s),{values:s.values.map(function(h,g){var _;if(p.failures[g])return h;var b=!((_=n.keyPath)===null||_===void 0)&&_.includes(".")?Lt(h):K({},h);return Ie(b,n.keyPath,p.results[g]),b})}),w=ko(c,m,p);c.optimisticOps.push(w),queueMicrotask(function(){return s.mutatedParts&&ca(s.mutatedParts)})}):(c.optimisticOps.push(s),s.mutatedParts&&ca(s.mutatedParts),u.then(function(p){if(p.numFailures>0){St(c.optimisticOps,s);var m=ko(c,s,p);m&&c.optimisticOps.push(m),s.mutatedParts&&ca(s.mutatedParts)}}),u.catch(function(){St(c.optimisticOps,s),s.mutatedParts&&ca(s.mutatedParts)})),u},query:function(s){var l;if(!Fs(R,i)||!Ns("query",s))return i.query(s);var c=((l=R.trans)===null||l===void 0?void 0:l.db._options.cache)==="immutable",u=R,p=u.requery,m=u.signal,w=Id(t,a,"query",s),h=w[0],g=w[1],_=w[2],b=w[3];if(h&&g)h.obsSet=s.obsSet;else{var I=i.query(s).then(function($){var x=$.result;if(h&&(h.res=x),c){for(var y=0,C=x.length;y<C;++y)Object.freeze(x[y]);Object.freeze(x)}return $}).catch(function($){return b&&h&&St(b,h),Promise.reject($)});h={obsSet:s.obsSet,promise:I,subscribers:new Set,type:"query",req:s,dirty:!1},b?b.push(h):(b=[h],_||(_=Nt["idb://".concat(t,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),_.queries.query[s.query.index.name||""]=b)}return Ed(h,b,p,m),h.promise.then(function($){var x=So($.result,s,_==null?void 0:_.optimisticOps,i,h,c);return{result:c?x:Lt(x)}})}});return o}});return r}};function ua(e,t){return new Proxy(e,{get:function(r,a,i){return a==="db"?t:Reflect.get(r,a,i)}})}var Kr=(function(){function e(t,r){var a=this;this._middlewares={},this.verno=0;var i=e.dependencies;this._options=r=K({addons:e.addons,autoOpen:!0,indexedDB:i.indexedDB,IDBKeyRange:i.IDBKeyRange,cache:"cloned",maxConnections:Ec},r),this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};var n=r.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Q,dbReadyPromise:null,cancelOpen:Q,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:r.autoOpen};o.dbReadyPromise=new P(function(l){o.dbReadyResolve=l}),o.openCanceller=new P(function(l,c){o.cancelOpen=c}),this._state=o,this.name=t,this.on=Zr(this,"populate","blocked","versionchange","close",{ready:[Sn,Q]}),this.once=function(l,c){var u=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];a.on(l).unsubscribe(u),c.apply(a,p)};return a.on(l,u)},this.on.ready.subscribe=us(this.on.ready.subscribe,function(l){return function(c,u){e.vip(function(){var p=a._state;if(p.openComplete)p.dbOpenError||P.resolve().then(c),u&&l(c);else if(p.onReadyBeingFired)p.onReadyBeingFired.push(c),u&&l(c);else{l(c);var m=a;u||l(function w(){m.on.ready.unsubscribe(c),m.on.ready.unsubscribe(w)})}})}}),this.Collection=Dc(this),this.Table=Ac(this),this.Transaction=jc(this),this.Version=ad(this),this.WhereClause=Lc(this),this.on("versionchange",function(l){l.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(a.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(a.name,"'. Closing db now to resume the delete request.")),a.close({disableAutoOpen:!1})}),this.on("blocked",function(l){!l.newVersion||l.newVersion<l.oldVersion?console.warn("Dexie.delete('".concat(a.name,"') was blocked")):console.warn("Upgrade '".concat(a.name,"' blocked by other connection holding version ").concat(l.oldVersion/10))}),this._maxKey=Lr(r.IDBKeyRange),this._createTransaction=function(l,c,u,p){return new a.Transaction(l,c,u,a._options.chromeTransactionDurability,p)},this._fireOnBlocked=function(l){a.on("blocked").fire(l),Br.toArray().filter(function(c){return c.name===a.name&&c!==a&&!c._state.vcFired}).map(function(c){return c.on("versionchange").fire(l)})},this.use(gd),this.use(Sd),this.use(vd),this.use(hd),this.use(md);var s=new Proxy(this,{get:function(l,c,u){if(c==="_vip")return!0;if(c==="table")return function(m){return ua(a.table(m),s)};var p=Reflect.get(l,c,u);return p instanceof Cs?ua(p,s):c==="tables"?p.map(function(m){return ua(m,s)}):c==="_createTransaction"?function(){var m=p.apply(this,arguments);return ua(m,s)}:p}});this.vip=s,n.forEach(function(l){return l(a)})}return e.prototype.version=function(t){if(isNaN(t)||t<.1)throw new N.Type("Given version is not a positive number");if(t=Math.round(t*10)/10,this.idbdb||this._state.isBeingOpened)throw new N.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var r=this._versions,a=r.filter(function(i){return i._cfg.version===t})[0];return a||(a=new this.Version(t),r.push(a),r.sort(Wc),a.stores({}),this._state.autoSchema=!1,a)},e.prototype._whenReady=function(t){var r=this;return this.idbdb&&(this._state.openComplete||R.letThrough||this._vip)?t():new P(function(a,i){if(r._state.openComplete)return i(new N.DatabaseClosed(r._state.dbOpenError));if(!r._state.isBeingOpened){if(!r._state.autoOpen){i(new N.DatabaseClosed);return}r.open().catch(Q)}r._state.dbReadyPromise.then(a,i)}).then(t)},e.prototype.use=function(t){var r=t.stack,a=t.create,i=t.level,n=t.name;n&&this.unuse({stack:r,name:n});var o=this._middlewares[r]||(this._middlewares[r]=[]);return o.push({stack:r,create:a,level:i??10,name:n}),o.sort(function(s,l){return s.level-l.level}),this},e.prototype.unuse=function(t){var r=t.stack,a=t.name,i=t.create;return r&&this._middlewares[r]&&(this._middlewares[r]=this._middlewares[r].filter(function(n){return i?n.create!==i:a?n.name!==a:!1})),this},e.prototype.open=function(){var t=this;return jt(it,function(){return dd(t)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state;if(Br.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new P(function(r){t.dbReadyResolve=r}),t.openCanceller=new P(function(r,a){t.cancelOpen=a}))},e.prototype.close=function(t){var r=t===void 0?{disableAutoOpen:!0}:t,a=r.disableAutoOpen,i=this._state;a?(i.isBeingOpened&&i.cancelOpen(new N.DatabaseClosed),this._close(),i.autoOpen=!1,i.dbOpenError=new N.DatabaseClosed):(this._close(),i.autoOpen=this._options.autoOpen||i.isBeingOpened,i.openComplete=!1,i.dbOpenError=null)},e.prototype.delete=function(t){var r=this;t===void 0&&(t={disableAutoOpen:!0});var a=arguments.length>0&&typeof arguments[0]!="object",i=this._state;return new P(function(n,o){var s=function(){r.close(t);var l=r._deps.indexedDB.deleteDatabase(r.name);l.onsuccess=Z(function(){sd(r._deps,r.name),n()}),l.onerror=ze(o),l.onblocked=r._fireOnBlocked};if(a)throw new N.InvalidArgument("Invalid closeOptions argument to db.delete()");i.isBeingOpened?i.dbReadyPromise.then(s):s()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var t=this;return de(this._allTables).map(function(r){return t._allTables[r]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var t=ud.apply(this,arguments);return this._transaction.apply(this,t)},e.prototype._transaction=function(t,r,a){var i=this,n=R.trans;(!n||n.db!==this||t.indexOf("!")!==-1)&&(n=null);var o=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");var s,l;try{if(l=r.map(function(u){var p=u instanceof i.Table?u.name:u;if(typeof p!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return p}),t=="r"||t===$i)s=$i;else if(t=="rw"||t==Ii)s=Ii;else throw new N.InvalidArgument("Invalid transaction mode: "+t);if(n){if(n.mode===$i&&s===Ii)if(o)n=null;else throw new N.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");n&&l.forEach(function(u){if(n&&n.storeNames.indexOf(u)===-1)if(o)n=null;else throw new N.SubTransaction("Table "+u+" not included in parent transaction.")}),o&&n&&!n.active&&(n=null)}}catch(u){return n?n._promise(null,function(p,m){m(u)}):ae(u)}var c=Os.bind(null,this,s,l,n,a);return n?n._promise(s,c,"lock"):R.trans?jt(R.transless,function(){return i._whenReady(c)}):this._whenReady(c)},e.prototype.table=function(t){if(!Ce(this._allTables,t))throw new N.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},e})(),Cd=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Md=(function(){function e(t){this._subscribe=t}return e.prototype.subscribe=function(t,r,a){return this._subscribe(!t||typeof t=="function"?{next:t,error:r,complete:a}:t)},e.prototype[Cd]=function(){return this},e})(),Qa;try{Qa={indexedDB:pe.indexedDB||pe.mozIndexedDB||pe.webkitIndexedDB||pe.msIndexedDB,IDBKeyRange:pe.IDBKeyRange||pe.webkitIDBKeyRange}}catch{Qa={indexedDB:null,IDBKeyRange:null}}function Ad(e){var t=!1,r,a=new Md(function(i){var n=In(e);function o(b){var I=pr();try{n&&mr();var $=ft(e,b);return n&&($=$.finally(gt)),$}finally{I&&hr()}}var s=!1,l,c={},u={},p={get closed(){return s},unsubscribe:function(){s||(s=!0,l&&l.abort(),m&&yt.storagemutated.unsubscribe(g))}};i.start&&i.start(p);var m=!1,w=function(){return xi(_)};function h(){return zn(u,c)}var g=function(b){li(c,b),h()&&w()},_=function(){if(!(s||!Qa.indexedDB)){c={};var b={};l&&l.abort(),l=new AbortController;var I={subscr:b,signal:l.signal,requery:w,querier:e,trans:null},$=o(I);m||(yt.storagemutated.subscribe(g),m=!0),Promise.resolve($).then(function(x){t=!0,r=x,!(s||I.signal.aborted)&&(h()?w():(u=b,h()?w():(c={},xi(function(){return!s&&i.next&&i.next(x)}))))},function(x){t=!1,["DatabaseClosedError","AbortError"].includes(x==null?void 0:x.name)||s||xi(function(){s||i.error&&i.error(x)})})}};return setTimeout(w,0),p});return a.hasValue=function(){return t},a.getValue=function(){return r},a}var At=Kr;nr(At,K(K({},ii),{delete:function(e){var t=new At(e,{addons:[]});return t.delete()},exists:function(e){return new At(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return nd(At.dependencies).then(e)}catch{return ae(new N.MissingAPI)}},defineClass:function(){function e(t){Se(this,t)}return e},ignoreTransaction:function(e){return R.trans?jt(R.transless||it,e):e()},vip:on,async:function(e){return function(){try{var t=sn(e.apply(this,arguments));return!t||typeof t.then!="function"?P.resolve(t):t}catch(r){return ae(r)}}},spawn:function(e,t,r){try{var a=sn(e.apply(r,t||[]));return!a||typeof a.then!="function"?P.resolve(a):a}catch(i){return ae(i)}},currentTransaction:{get:function(){return R.trans||null}},waitFor:function(e,t){var r=P.resolve(typeof e=="function"?At.ignoreTransaction(e):e).timeout(t||6e4);return R.trans?R.trans.waitFor(r):r},Promise:P,debug:{get:function(){return Ue},set:function(e){bs(e)}},derive:dr,extend:Se,props:nr,override:us,Events:Zr,on:yt,liveQuery:Ad,extendObservabilitySet:li,getByKeyPath:at,setByKeyPath:Ie,delByKeyPath:Jl,shallowClone:hs,deepClone:Lt,getObjectDiff:Bn,cmp:V,asap:ps,minKey:en,addons:[],connections:{get:Br.toArray},errnames:kn,dependencies:Qa,cache:Nt,semVer:go,version:go.split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,r){return e+t/Math.pow(10,r*2)})}));At.maxKey=Lr(At.dependencies.IDBKeyRange);typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(yt(oi,function(e){if(!pt){var t;t=new CustomEvent(tn,{detail:e}),pt=!0,dispatchEvent(t),pt=!1}}),addEventListener(tn,function(e){var t=e.detail;pt||Kn(t)}));function Kn(e){var t=pt;try{pt=!0,yt.storagemutated.fire(e),Ln(e,!0)}finally{pt=t}}var pt=!1,dt,ln=function(){};typeof BroadcastChannel<"u"&&(ln=function(){dt=new BroadcastChannel(tn),dt.onmessage=function(e){return e.data&&Kn(e.data)}},ln(),typeof dt.unref=="function"&&dt.unref(),yt(oi,function(e){pt||dt.postMessage(e)}));typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Kr.disableBfCache&&e.persisted){Ue&&console.debug("Dexie: handling persisted pagehide"),dt==null||dt.close();for(var t=0,r=Br.toArray();t<r.length;t++){var a=r[t];a.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(e){!Kr.disableBfCache&&e.persisted&&(Ue&&console.debug("Dexie: handling persisted pageshow"),ln(),Kn({all:new be(-1/0,[[]])}))}));P.rejectionMapper=sc;bs(Ue);class Pd extends Kr{constructor(){super("MealPrepLocal"),this.version(1).stores({rows:"id"})}}const qn=new Pd,Un=1,Td=250;let Dt=null,cn=null;async function Dd(){const e=await qn.rows.get(Un);return(e==null?void 0:e.data)??null}function Od(e){Dt&&clearTimeout(Dt),Dt=setTimeout(()=>{Dt=null,cn=qn.rows.put({id:Un,data:e}).catch(t=>{console.error("No se pudo guardar en IndexedDB:",t)})},Td)}async function qr(e){Dt&&(clearTimeout(Dt),Dt=null),await qn.rows.put({id:Un,data:e}),cn&&await cn}function zs(){return{family:null,members:[],weightHistory:[],foods:[],pantryItems:[],recipes:[],mealPlans:[],meals:[],templates:[],shoppingLists:[],shoppingItems:[],shoppingSections:[],shoppingSectionItems:[],householdItems:[],householdStockItems:[],chores:[],choreCompletions:[]}}const f=zs();function $e(e){const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}`}function z(e){const t=e();return Od(f),t}async function pa(){await qr(f)}let Pi=null;function D(){return Pi||(Pi=(async()=>{await zl();const e=await Dd();if(e){const t=$n(e);Object.assign(f,t.store),t.changed&&await qr(f)}else{const{bootstrapIfEmpty:t}=await ls(async()=>{const{bootstrapIfEmpty:r}=await import("./bootstrap-B9ewJE3Z.js");return{bootstrapIfEmpty:r}},[]);t(),await qr(f)}})()),Pi}async function Rd(e){Object.assign(f,$n(e).store),await qr(f)}async function Fd(){const{bootstrapIfEmpty:e}=await ls(async()=>{const{bootstrapIfEmpty:t}=await import("./bootstrap-B9ewJE3Z.js");return{bootstrapIfEmpty:t}},[]);Object.assign(f,zs()),e(),await qr(f)}const Nd="local-user",zd="local@mealprep.app";function Ti(){var t;const e=f.family;return U({id:Nd,email:zd,name:((t=f.members[0])==null?void 0:t.name)??"Tú",familyId:e.id,family:{id:e.id,name:e.name,onboardingVersion:e.onboardingVersion,onboardingStep:e.onboardingStep,onboardingCompletedAt:e.onboardingCompletedAt,enabledModules:e.enabledModules,homeType:e.homeType,members:f.members.map(r=>({id:r.id,name:r.name,color:r.color,age:r.age,weightKg:r.weightKg,heightCm:r.heightCm,sex:r.sex,activityLevel:r.activityLevel,goal:r.goal,restrictions:r.restrictions,dailyCalories:r.dailyCalories,dailyProteinG:r.dailyProteinG,dailyCarbsG:r.dailyCarbsG,dailyFatG:r.dailyFatG,tmb:r.tmb,isStandardProfile:r.isStandardProfile}))}})}const ea={register:async e=>(await D(),{user:Ti(),accessToken:"local",refreshToken:"local"}),login:async e=>(await D(),{user:Ti(),accessToken:"local",refreshToken:"local"}),me:async()=>(await D(),Ti())};function Ls(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function xe(e=new Date){const t=e.getDay(),r=e.getDate()-t+(t===0?-6:1),a=new Date(e);return a.setDate(r),Ls(a)}function Ld(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r}const Mo=[{id:"hogar-basico",name:"Hogar básico",description:"Las tareas domésticas más habituales, diarias y semanales",chores:[{name:"Fregar los platos",frequency:"DIARIA"},{name:"Sacar la basura",frequency:"DIARIA"},{name:"Recoger la cocina",frequency:"DIARIA"},{name:"Hacer las camas",frequency:"DIARIA"},{name:"Poner una lavadora",frequency:"SEMANAL"},{name:"Tender y recoger la ropa",frequency:"SEMANAL"},{name:"Pasar la aspiradora",frequency:"SEMANAL"},{name:"Fregar el suelo",frequency:"SEMANAL"},{name:"Limpiar el baño",frequency:"SEMANAL"},{name:"Cambiar las sábanas",frequency:"SEMANAL"},{name:"Hacer la compra",frequency:"SEMANAL"}]}];function Di(e){return e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}const ut={minRecipesForPlan:35,expiringSoonDays:7,minKcalPorRacion:25,maxKcalPorRacion:1500};function Bd(e){var r;const t=new Map;for(const a of e){if(!((r=a.recipe)!=null&&r.ingredients))continue;const i=a.servingsMultiplier??1,n=a.recipe.servings&&a.recipe.servings>0?a.recipe.servings:1;for(const o of a.recipe.ingredients){const s=t.get(o.foodId),l=o.quantity/n*i;s?s.total+=l:t.set(o.foodId,{foodId:o.foodId,foodName:o.foodName,total:l,unit:o.unit})}}return t}function jd(e,t){return`${e}|${t}`}function Kd(e,t,r){return e.get(jd(t,r))??0}const Bs={SEDENTARIO:1.2,LIGERO:1.375,MODERADO:1.55,ACTIVO:1.725},js={PERDER_PESO:.8,MANTENER:1,GANAR_MUSCULO:1.15};function qd(e){const{weightKg:t,heightCm:r,age:a,sex:i}=e;return i==="MASCULINO"?10*t+6.25*r-5*a+5:10*t+6.25*r-5*a-161}function Ks(e,t,r){let a;switch(r){case"PERDER_PESO":a=2;break;case"GANAR_MUSCULO":a=2.2;break;default:a=1.6}const i=Math.round(t*a),n=e*.28,o=Math.round(n/9),s=i*4,l=e-s-n,c=Math.round(Math.max(0,l)/4);return{dailyProteinG:i,dailyCarbsG:c,dailyFatG:o}}function qs(e){const t=qd(e),r=Bs[e.activityLevel],a=js[e.goal],i=Math.round(t*r*a);return{tmb:Math.round(t),dailyCalories:i,...Ks(i,e.weightKg,e.goal)}}const Je={age:35,weightKg:70,heightCm:170,activityLevel:"LIGERO",goal:"MANTENER"},Oi=2e3;function Ud(){const e=Bs[Je.activityLevel],t=js[Je.goal];return{tmb:Math.round(Oi/e/t),dailyCalories:Oi,...Ks(Oi,Je.weightKg,Je.goal)}}const Gd={DESAYUNO:{calories:.2,protein:.24,carbs:.2,fat:.2},TENTEMPIE:{calories:.08,protein:.06,carbs:.1,fat:.05},ALMUERZO:{calories:.32,protein:.3,carbs:.3,fat:.35},MERIENDA:{calories:.08,protein:.1,carbs:.1,fat:.05},CENA:{calories:.27,protein:.25,carbs:.25,fat:.3},BUFFER:{calories:.05,protein:.05,carbs:.05,fat:.05}};function Us(e){return{calories:e.dailyCalories*7,proteinG:e.dailyProteinG*7,carbsG:e.dailyCarbsG*7,fatG:e.dailyFatG*7}}const Hd={calories:{under:.05,over:.05},proteinG:{under:.05,over:.45},carbsG:{under:.15,over:.15},fatG:{under:.15,over:.15}},Vd=2.5;function Gs(e,t){const r=Us(e),a={};for(const[i,n]of Object.entries(r)){const o=Hd[i];a[i]={min:Math.round(n*(1-o.under)),max:Math.round(n*(1+o.over))}}if(t&&t>0){const i=Math.round(Vd*t*7);a.proteinG.max=Math.max(a.proteinG.min,Math.min(a.proteinG.max,i))}return a}const Wd=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"],Qd=4,Yd=3,Ao=1e-9,Xd=6,Zd=8,Jd=5,Po=.5,eu=.5,tu=2.5,To={calories:{under:1,over:1},proteinG:{under:2,over:1},carbsG:{under:.5,over:.5},fatG:{under:.5,over:.5}},Le=["calories","proteinG","carbsG","fatG"];function ru(e){const t=[];for(let r=1;r<=7;r++)for(const a of Wd){const i=Gd[a].calories;t.push({dayOfWeek:r,mealType:a,recipeId:"",servingsMultiplier:1,targetCalories:e&&e>0?e*i:void 0})}return t}function Hs(e,t){const r=e.filter(a=>a.mealType.includes(t));return r.length>0?r:e}function au(e,t){const r=new Date(e);return r.setDate(r.getDate()+(t-1)),r.setHours(0,0,0,0),r}function iu(e,t,r){if(!r||r.urgencyMap.size===0)return 0;const a=au(r.weekStart,t.dayOfWeek);let i=0;for(const n of e.ingredients){const o=r.urgencyMap.get(n.foodId);o&&(o.expiryDate<a||(i+=o.urgency))}return i}function nu(e){const t=e.calorias??0;if(t<=0)return 0;const r=4*(e.proteinas??0);return Math.min(1,Math.max(0,r/t))}function ou(e,t){const r=t.reduce((i,n)=>i+n,0);let a=Math.random()*r;for(let i=0;i<e.length;i++)if(a-=t[i],a<=0)return e[i];return e[e.length-1]}function su(e,t){const r=t.targetCalories;if(!r||r<=0)return 1;const a=e.calorias??0;return 1/(1+Math.abs(a-r)/r)}function Vs(e,t,r){const a=e.map(i=>(1+Qd*iu(i,t,r))*(1+Xd*nu(i))*(1+Yd*su(i,t)));return ou(e,a)}function lu(e,t,r){const a=Hs(t,e.mealType);return Vs(a,e,r).id}function cu(e,t,r){for(let a=0;a<t.length;a++)t[a].recipeId=lu(t[a],e,r)}function Ya(e){return{calories:(e==null?void 0:e.calorias)??0,proteinG:(e==null?void 0:e.proteinas)??0,carbsG:(e==null?void 0:e.carbos)??0,fatG:(e==null?void 0:e.grasas)??0}}function ci(e,t){const r=Ya(t.get(e.recipeId)),a=e.servingsMultiplier||1;for(const i of Le)r[i]*=a;return r}function Gn(e,t){const r={calories:0,proteinG:0,carbsG:0,fatG:0};for(const a of e){const i=ci(a,t);for(const n of Le)r[n]+=i[n]}return r}function Ws(e,t,r){const a=r[t];return a?e<a.min?a.min>0?To[t].under*(a.min-e)/a.min:0:e>a.max&&a.max>0?To[t].over*(e-a.max)/a.max:0:0}function Xa(e,t){let r=0;for(const a of Le)r+=Ws(e[a],a,t);return r}function Ur(e,t){const r=e.targetCalories;return!r||r<=0?0:Math.abs(ci(e,t).calories-r)/r}function Qs(e,t){let r=0;for(const a of e)r+=Ur(a,t);return r}function dn(e,t,r,a){return e<r-Ao?!0:e>r+Ao?!1:t<a}const Do={calories:"calorías",proteinG:"proteína",carbsG:"carbohidratos",fatG:"grasas"};function du(e,t,r){const a=new Map(e.map(o=>[o.id,o])),i=Gn(t,a),n=[];for(const o of Le){const s=r[o];s&&(i[o]<s.min?n.push({macro:o,label:Do[o],total:Math.round(i[o]),limit:s.min,direction:"corto"}):i[o]>s.max&&n.push({macro:o,label:Do[o],total:Math.round(i[o]),limit:s.max,direction:"pasado"}))}return{withinRange:n.length===0,totals:i,misses:n}}function uu(e){return e.withinRange?null:`El catálogo no da para cuadrar la semana entera: ${e.misses.map(r=>{const a=Math.round(r.total/7),i=Math.round(r.limit/7);return`${r.label} se queda ${r.direction==="corto"?"por debajo":"por encima"} (${a} frente a ${i} al día)`}).join("; ")}.`}function pu(e,t){var i;let r=null,a=0;for(const n of Le){const o=Ws(e[n],n,t);o>a&&(a=o,r={key:n,short:e[n]<(((i=t[n])==null?void 0:i.min)??0)})}return r}function hu(e,t,r){if(!r)return Math.floor(Math.random()*e.length);const a=e.map((n,o)=>({index:o,value:ci(n,t)[r.key]})).sort((n,o)=>r.short?n.value-o.value:o.value-n.value),i=a.slice(0,Math.min(Jd,a.length));return i[Math.floor(Math.random()*i.length)].index}function mu(e,t,r,a,i=2e3){if(e.length===0||t.length===0)return;const n=new Map(e.map(m=>[m.id,m])),o=Gn(t,n);let s=Xa(o,r),l=Qs(t,n),c=s,u=l,p=t.map(m=>m.recipeId);for(let m=0;m<i&&s>0;m++){const w=pu(o,r),h=hu(t,n,w),g=t[h],_=ci(g,n),b=Ur(g,n),I=Hs(e,g.mealType),$=g.servingsMultiplier||1,x=g.recipeId;let y=null,C=s,E=l;for(let T=0;T<Zd;T++){const L=Vs(I,g,a);if(L.id===x)continue;const S=Ya(L);for(const G of Le)S[G]*=$;const O={...o};for(const G of Le)O[G]+=S[G]-_[G];g.recipeId=L.id;const M=l-b+Ur(g,n);g.recipeId=x;const A=Xa(O,r);dn(A,M,C,E)&&(C=A,E=M,y=L)}if(!y)continue;const k=Ya(y);for(const T of Le)k[T]*=$;for(const T of Le)o[T]+=k[T]-_[T];g.recipeId=y.id,s=C,l=E,dn(s,l,c,u)&&(c=s,u=l,p=t.map(T=>T.recipeId))}for(let m=0;m<t.length;m++)t[m].recipeId=p[m]}function fu(e,t,r,a=6){if(t.length===0)return;const i=new Map(e.map(l=>[l.id,l])),n=Gn(t,i);let o=Xa(n,r),s=Qs(t,i);for(let l=0;l<a;l++){let c=!1;for(const u of t){const p=i.get(u.recipeId);if(!p)continue;const m=Ya(p),w=u.servingsMultiplier||1;for(const h of[Po,-Po]){const g=Math.round((w+h)*2)/2;if(g<eu||g>tu)continue;const _={...n};for(const x of Le)_[x]+=m[x]*(g-w);const b=Ur(u,i);u.servingsMultiplier=g;const I=s-b+Ur(u,i);u.servingsMultiplier=w;const $=Xa(_,r);if(dn($,I,o,s)){for(const x of Le)n[x]=_[x];u.servingsMultiplier=g,o=$,s=I,c=!0;break}}}if(!c)break}}const gu=100;function vu(e){return e.unit==="UNIDAD"?e.quantity*gu:e.quantity}function Ri(e,t,r){const a=t&&t>0?t:1;let i=0,n=0,o=0,s=0,l=0,c=0,u=0,p=0,m=0,w=0,h=0,g=0,_=0,b=0,I=0,$=0,x=0,y=0,C=0,E=0,k=0,T=0,L=0;for(const O of e){const M=r.get(O.foodId);if(!M)continue;const A=vu(O)/100;i+=(M.calorias100g??0)*A,n+=(M.proteinas100g??0)*A,o+=(M.carbos100g??0)*A,s+=(M.grasas100g??0)*A,l+=(M.fibra100g??0)*A,c+=(M.sodioMg??0)*A,u+=(M.potasioMg??0)*A,p+=(M.calcioMg??0)*A,m+=(M.magnesioMg??0)*A,w+=(M.hierroMg??0)*A,h+=(M.zincMg??0)*A,g+=(M.fosforoMg??0)*A,_+=(M.vitaminaAIug??0)*A,b+=(M.vitaminaCMg??0)*A,I+=(M.vitaminaDIug??0)*A,$+=(M.vitaminaEMg??0)*A,x+=(M.vitaminaKIug??0)*A,y+=(M.vitaminaB6Mg??0)*A,C+=(M.vitaminaB12Iug??0)*A,E+=(M.tiaminaMg??0)*A,k+=(M.riboflavinaMg??0)*A,T+=(M.niacinaMg??0)*A,L+=(M.acidoFolicoIug??0)*A}const S=(O,M=0)=>{const A=O/a,G=10**M;return Math.round(A*G)/G};return{calorias:S(i),proteinas:S(n),carbos:S(o),grasas:S(s),fibra:S(l),sodioMg:S(c,1),potasioMg:S(u,1),calcioMg:S(p,1),magnesioMg:S(m,1),hierroMg:S(w,2),zincMg:S(h,2),fosforoMg:S(g,1),vitaminaAIug:S(_),vitaminaCMg:S(b,1),vitaminaDIug:S(I,1),vitaminaEMg:S($,1),vitaminaKIug:S(x,1),vitaminaB6Mg:S(y,2),vitaminaB12Iug:S(C,2),tiaminaMg:S(E,2),riboflavinaMg:S(k,2),niacinaMg:S(T,1),acidoFolicoIug:S(L)}}function Ys(e,t=new Date){const r=new Date(t);r.setHours(0,0,0,0);const a=new Date(e);return a.setHours(0,0,0,0),Math.round((a.getTime()-r.getTime())/864e5)}function yu(e,t){const r=new Map;for(const a of e){if(a.expired)continue;const i=(t+1-a.daysLeft)/(t+1),n=r.get(a.foodId);(!n||a.expiryDate<n.expiryDate)&&r.set(a.foodId,{urgency:i,expiryDate:a.expiryDate})}return r}function bu(e,t){const r=[...e].sort((o,s)=>o.expiryDate&&s.expiryDate?o.expiryDate.getTime()-s.expiryDate.getTime():o.expiryDate?-1:s.expiryDate?1:0),a=[];let i=t,n=0;for(const o of r){if(i<=0)break;if(o.quantity<=0)continue;const s=Math.min(o.quantity,i),l=Math.round((o.quantity-s)*10)/10;a.push({id:o.id,subtracted:s,remaining:l}),n+=s,i-=s}return{consumption:a,totalSubtracted:Math.round(n*10)/10}}const _u={VEGETARIANO:["CARNES","PESCADOS"],VEGANO:["CARNES","PESCADOS","LACTEOS","HUEVOS"],SIN_LACTOSA:["LACTEOS"],SIN_HUEVO:["HUEVOS"],SIN_FRUTOS_SECOS:["FRUTOS_SECOS"]},wu={SIN_GLUTEN:["trigo","cebada","centeno","espelta","kamut","triticale","malta","cerveza","harina","pan","pasta","macarron","espagueti","fideo","noodle","cuscus","semola","bulgur","seitan","galleta","bizcocho","reposteria","empanad","pizza","tortita","crep","salsa de soja","avena"],SIN_LACTOSA:["leche","queso","yogur","nata","mantequilla","requeson","cuajada","kefir"],SIN_FRUTOS_SECOS:["almendra","nuez","avellana","pistacho","anacardo","cacahuete","pecana","macadamia","castana","pinon","marañon","turron","praline"],SIN_HUEVO:["huevo","clara","yema","mayonesa","merengue","tortilla"],VEGANO:["miel","gelatina","manteca"]};function Xs(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim()}function xu(e){return Xs(e).replace(/\s+/g,"_").toUpperCase()}function $u(e,t){const r=Xs(e.name),a=e.category?e.category.toUpperCase():null;for(const i of t){const n=xu(i),o=_u[n];if(o&&a&&o.includes(a))return!0;const s=wu[n];if(s&&s.some(l=>r.includes(l)))return!0}return!1}function Iu(e,t,r){if(t.length===0)return!0;for(const a of e.ingredients){const i=r.get(a.foodId);if(!i||$u(i,t))return!1}return!0}function Eu(e,t,r){return t.length===0?e:e.filter(a=>Iu(a,t,r))}function X(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function Oo(){return f.members[0]}function Ma(){if(!f.family)throw new Error("No hay una unidad familiar configurada");return f.family}function ha(){const e=Ma();return{familyId:e.id,name:e.name,homeType:e.homeType,enabledModules:[...e.enabledModules],onboardingVersion:e.onboardingVersion,onboardingStep:e.onboardingStep,onboardingCompletedAt:e.onboardingCompletedAt}}function ku(e){if(!Number.isInteger(e)||e<0||e>Ra)throw new Error("El paso de onboarding no es válido.");return e}function Ro(e){const t=e.trim();if(!t)throw new Error("El nombre de la casa es obligatorio.");if(t.length>80)throw new Error("El nombre de la casa no puede superar 80 caracteres.");return t}function Za(e,t){const r=qs(t);return e.age=t.age,e.weightKg=t.weightKg,e.heightCm=t.heightCm,e.sex=t.sex,e.activityLevel=t.activityLevel,e.goal=t.goal,e.tmb=r.tmb,e.dailyCalories=r.dailyCalories,e.dailyProteinG=r.dailyProteinG,e.dailyCarbsG=r.dailyCarbsG,e.dailyFatG=r.dailyFatG,e.isStandardProfile=!1,e.weightDate=new Date,e.updatedAt=new Date,r}const tt={getHomeSettings:async()=>(await D(),U(ha())),saveOnboardingProgress:async e=>{await D();const t=z(()=>{const r=Ma();if(r.onboardingVersion=Oa,r.onboardingStep=ku(e.onboardingStep),e.name!==void 0&&(r.name=Ro(e.name)),e.homeType!==void 0){if(e.homeType!==null&&!Ki(e.homeType))throw new Error("El tipo de hogar no es válido.");r.homeType=e.homeType}return e.enabledModules!==void 0&&(r.enabledModules=bi(e.enabledModules)),U(ha())});return await pa(),t},completeHomeSetup:async e=>{await D();const t=z(()=>{if(!Ki(e.homeType))throw new Error("El tipo de hogar no es válido.");const r=Ma();return r.name=Ro(e.name),r.homeType=e.homeType,r.enabledModules=bi(e.enabledModules),r.onboardingVersion=Oa,r.onboardingStep=Ra,r.onboardingCompletedAt=new Date,U(ha())});return await pa(),t},updateEnabledModules:async e=>{await D();const t=z(()=>(Ma().enabledModules=bi(e),U(ha())));return await pa(),t},onboarding:async e=>(await D(),z(()=>{const t=e.memberId?f.members.find(a=>a.id===e.memberId):Oo();if(!t)throw new Error("Miembro no encontrado");const r=Za(t,e);return t.restrictions=e.restrictions??[],f.weightHistory.push({id:X(),memberId:t.id,weightKg:e.weightKg,date:new Date}),U({message:"Perfil nutricional completado",member:t,requirements:r})})),skipOnboarding:async(e={})=>{await D();const t=z(()=>{var n;const r=(n=e.memberIds)!=null&&n.length?f.members.filter(o=>e.memberIds.includes(o.id)):f.members.filter(o=>o.dailyCalories==null);if(r.length===0)throw new Error("No hay miembros a los que aplicar el perfil estándar");const a=Ud(),i=new Date;for(const o of r)o.age=Je.age,o.weightKg=Je.weightKg,o.heightCm=Je.heightCm,o.activityLevel=Je.activityLevel,o.goal=Je.goal,o.tmb=a.tmb,o.dailyCalories=a.dailyCalories,o.dailyProteinG=a.dailyProteinG,o.dailyCarbsG=a.dailyCarbsG,o.dailyFatG=a.dailyFatG,o.isStandardProfile=!0,o.updatedAt=i;return U({message:"Perfil estándar aplicado",members:r,requirements:a})});return await pa(),t},updateProfile:async e=>(await D(),z(()=>{const t=Oo();if(!t)throw new Error("No hay miembros en la familia");return Object.assign(t,e),t.isStandardProfile=!1,e.weightKg&&(f.weightHistory.push({id:X(),memberId:t.id,weightKg:e.weightKg,date:new Date}),t.weightDate=new Date),(e.weightKg||e.heightCm||e.activityLevel||e.goal)&&t.age&&t.sex&&t.activityLevel&&t.goal&&Za(t,t),t.updatedAt=new Date,U(t)}))},et={list:async()=>(await D(),f.members.map(e=>U(e))),create:async e=>(await D(),z(()=>{const t=new Date,r={id:X(),familyId:f.family.id,name:e.name,color:e.color||"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),age:e.age??null,weightKg:e.weightKg??null,weightDate:null,heightCm:e.heightCm??null,sex:e.sex??null,activityLevel:e.activityLevel??null,goal:e.goal??null,restrictions:[],tmb:null,dailyCalories:null,dailyProteinG:null,dailyCarbsG:null,dailyFatG:null,isStandardProfile:!1,createdAt:t,updatedAt:t};return e.age&&e.weightKg&&e.heightCm&&e.sex&&e.activityLevel&&e.goal&&Za(r,e),f.members.push(r),U(r)})),update:async(e,t)=>(await D(),z(()=>{const r=f.members.find(i=>i.id===e);if(!r)throw new Error("Miembro no encontrado");return t.weightKg&&(f.weightHistory.push({id:X(),memberId:r.id,weightKg:t.weightKg,date:new Date}),t={...t,weightDate:new Date}),Object.assign(r,t),r.isStandardProfile=!1,(t.weightKg||t.heightCm||t.activityLevel||t.goal)&&r.age&&r.sex&&r.activityLevel&&r.goal&&Za(r,r),r.updatedAt=new Date,U(r)})),remove:async e=>(await D(),z(()=>{if(f.members.length<=1)throw new Error("No puedes eliminar el único miembro");const t=f.members.findIndex(r=>r.id===e);if(t===-1)throw new Error("Miembro no encontrado");return f.members.splice(t,1),{message:"Miembro eliminado"}}))};function Fo(){const e=je(),t=f.foods.map(r=>U(r));return[...e.foodsList,...t].sort((r,a)=>r.name.localeCompare(a.name))}function fr(e){const r=je().foodsById.get(e);if(r)return r;const a=f.foods.find(i=>i.id===e);return a?U(a):null}function Zs(e){const t=e.ingredients.map(r=>({id:r.id,recipeId:r.recipeId,foodId:r.foodId,quantity:r.quantity,unit:r.unit,food:fr(r.foodId)}));return U({...e,ingredients:t})}function Hn(){const e=je();return[...f.recipes.map(Zs),...e.recipesList].sort((r,a)=>new Date(a.createdAt).getTime()-new Date(r.createdAt).getTime())}function rt(e){const r=je().recipesById.get(e);if(r)return r;const a=f.recipes.find(i=>i.id===e);return a?Zs(a):null}function Su(e){if(!e)return null;const t=f.members.find(r=>r.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function un(e){return U({...e,recipe:e.recipeId?rt(e.recipeId):null,member:Su(e.assignedToMemberId)})}const Ja=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"];function Cu(e,t){return f.meals.filter(r=>r.planId===e&&(!t||r.assignedToMemberId===t)).sort((r,a)=>r.dayOfWeek-a.dayOfWeek||Ja.indexOf(r.mealType)-Ja.indexOf(a.mealType))}function Aa(e,t){return U({...e,meals:Cu(e.id,t).map(un)})}function Mu(e){return U({...e,recipe:rt(e.recipeId)})}function Au(){const e=je();return[...f.templates.map(r=>U(r)),...e.templates].sort((r,a)=>r.isSystem===a.isSystem?0:r.isSystem?1:-1)}function Js(e){const t=f.templates.find(r=>r.id===e);return t||je().templates.find(r=>r.id===e)}function No(e){const t=Js(e);return t?U({...t,meals:[...t.meals].sort((r,a)=>r.dayOfWeek-a.dayOfWeek||Ja.indexOf(r.mealType)-Ja.indexOf(a.mealType)).map(Mu)}):null}function Pu(e){return Js(e)}function Tu(e){const t=je(),r=f.householdItems.map(i=>U(i));let a=[...t.householdItems,...r];if(e){const i=e.toLowerCase();a=a.filter(n=>n.name.toLowerCase().includes(i))}return a.sort((i,n)=>i.name.localeCompare(n.name))}function el(e){const r=je().householdItems.find(i=>i.id===e);if(r)return r;const a=f.householdItems.find(i=>i.id===e);return a?U(a):null}const ei={list:async()=>(await D(),Fo()),search:async e=>{await D();const t=e.trim().toLowerCase();return t?Fo().filter(r=>r.name.toLowerCase().includes(t)).slice(0,20):[]},create:async e=>(await D(),z(()=>{const t={id:X(),name:e.name,category:e.category??null,calorias100g:e.calorias100g??null,proteinas100g:e.proteinas100g??null,carbos100g:e.carbos100g??null,grasas100g:e.grasas100g??null,fibra100g:e.fibra100g??null,sodioMg:e.sodioMg??null,potasioMg:e.potasioMg??null,calcioMg:e.calcioMg??null,magnesioMg:e.magnesioMg??null,hierroMg:e.hierroMg??null,zincMg:e.zincMg??null,fosforoMg:e.fosforoMg??null,vitaminaAIug:e.vitaminaAIug??null,vitaminaCMg:e.vitaminaCMg??null,vitaminaDIug:e.vitaminaDIug??null,vitaminaEMg:e.vitaminaEMg??null,vitaminaKIug:e.vitaminaKIug??null,vitaminaB6Mg:e.vitaminaB6Mg??null,vitaminaB12Iug:e.vitaminaB12Iug??null,tiaminaMg:e.tiaminaMg??null,riboflavinaMg:e.riboflavinaMg??null,niacinaMg:e.niacinaMg??null,acidoFolicoIug:e.acidoFolicoIug??null,unidadBase:e.unidadBase??"g",familyId:f.family.id,source:null,sourceId:null,lastRefreshedAt:null,createdAt:new Date};return f.foods.push(t),U(t)}))};function _r(e){return U({...e,food:fr(e.foodId)})}function wr(e){if(e!==void 0)return e?new Date(e):null}const Xe={list:async()=>(await D(),[...f.pantryItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(_r)),expiring:async e=>{await D();const t=e&&e>0?e:ut.expiringSoonDays,r=new Date;r.setHours(23,59,59,999),r.setDate(r.getDate()+t);const a=f.pantryItems.filter(i=>i.quantity>0&&i.expiryDate!==null&&i.expiryDate<=r).sort((i,n)=>i.expiryDate.getTime()-n.expiryDate.getTime()).map(i=>{const n=i.expiryDate,o=Ys(n),s=fr(i.foodId);return U({id:i.id,foodId:i.foodId,foodName:(s==null?void 0:s.name)??"?",quantity:i.quantity,unit:i.unit,expiryDate:n,daysLeft:o,expired:o<0})});return{days:t,items:a}},add:async e=>(await D(),z(()=>{const t=new Date,r={id:X(),familyId:f.family.id,addedByUserId:null,foodId:e.foodId,quantity:e.quantity,unit:e.unit??"g",expiryDate:wr(e.expiryDate)??null,purchaseDate:wr(e.purchaseDate)??null,notes:e.notes??null,createdAt:t,updatedAt:t};return f.pantryItems.push(r),_r(r)})),update:async(e,t)=>(await D(),z(()=>{const r=f.pantryItems.find(a=>a.id===e);if(!r)throw new Error("Item no encontrado");return t.quantity!==void 0&&(r.quantity=t.quantity),t.unit!==void 0&&(r.unit=t.unit),t.expiryDate!==void 0&&(r.expiryDate=wr(t.expiryDate)??null),t.purchaseDate!==void 0&&(r.purchaseDate=wr(t.purchaseDate)??null),t.notes!==void 0&&(r.notes=t.notes),r.updatedAt=new Date,_r(r)})),split:async(e,t)=>(await D(),z(()=>{const r=f.pantryItems.find(n=>n.id===e);if(!r)throw new Error("Item no encontrado");if(t.quantity>=r.quantity)throw new Error(`La cantidad a separar debe ser menor que la del lote (${r.quantity} ${r.unit})`);const a=new Date;r.quantity=Math.round((r.quantity-t.quantity)*10)/10,r.updatedAt=a;const i={id:X(),familyId:r.familyId,addedByUserId:r.addedByUserId,foodId:r.foodId,quantity:t.quantity,unit:r.unit,expiryDate:wr(t.expiryDate)??null,purchaseDate:r.purchaseDate,notes:r.notes,createdAt:a,updatedAt:a};return f.pantryItems.push(i),{original:_r(r),created:_r(i)}})),remove:async e=>(await D(),z(()=>{const t=f.pantryItems.findIndex(r=>r.id===e);if(t===-1)throw new Error("Item no encontrado");return f.pantryItems.splice(t,1),{message:"Item eliminado"}}))};function Fi(e){const t=new Map;for(const r of e){const a=fr(r.foodId);a&&t.set(r.foodId,a)}return t}function Ni(e,t){var r;if(!e)throw new Error("Receta no encontrada");if(!e.familyId||e.familyId!==((r=f.family)==null?void 0:r.id))throw new Error(`No puedes ${t} una receta del sistema`)}const er={list:async e=>{var i,n;await D();let t=Hn();const r=(i=e==null?void 0:e.search)==null?void 0:i.toLowerCase();r&&(t=t.filter(o=>o.name.toLowerCase().includes(r)));const a=(n=e==null?void 0:e.ingredient)==null?void 0:n.toLowerCase();if(a&&(t=t.filter(o=>o.ingredients.some(s=>{var l;return(l=s.food)==null?void 0:l.name.toLowerCase().includes(a)}))),e!=null&&e.maxTime){const o=parseInt(e.maxTime,10);t=t.filter(s=>s.timeMinutes!=null&&s.timeMinutes<=o)}if(e!=null&&e.mealType&&(t=t.filter(o=>o.mealType.includes(e.mealType))),e!=null&&e.minCalories){const o=parseInt(e.minCalories,10);t=t.filter(s=>s.calorias==null||s.calorias>=o)}if(e!=null&&e.maxCalories){const o=parseInt(e.maxCalories,10);t=t.filter(s=>s.calorias==null||s.calorias<=o)}return t},get:async e=>{await D();const t=rt(e);if(!t)throw new Error("Receta no encontrada");return t},create:async e=>(await D(),z(()=>{const t=new Date,r=X(),a=e.servings??1,i=Fi(e.ingredients),n=e.ingredients.map(l=>({foodId:l.foodId,quantity:l.quantity,unit:l.unit})),o=Ri(n,a,i),s={id:r,familyId:f.family.id,name:e.name,description:e.description??null,instructions:e.instructions??null,mealType:e.mealType??[],timeMinutes:e.timeMinutes??null,difficulty:e.difficulty??null,imageUrl:e.imageUrl??null,servings:a,...o,isPublic:e.isPublic??!1,createdAt:t,updatedAt:t,ingredients:e.ingredients.map(l=>({id:`${r}:${l.foodId}`,recipeId:r,foodId:l.foodId,quantity:l.quantity,unit:l.unit}))};return f.recipes.push(s),rt(r)})),update:async(e,t)=>(await D(),z(()=>{const r=f.recipes.find(a=>a.id===e);if(Ni(r,"editar"),Object.assign(r,{name:t.name??r.name,description:t.description??r.description,instructions:t.instructions??r.instructions,mealType:t.mealType??r.mealType,timeMinutes:t.timeMinutes??r.timeMinutes,difficulty:t.difficulty??r.difficulty,imageUrl:t.imageUrl??r.imageUrl,servings:t.servings??r.servings}),t.ingredients){const a=Fi(t.ingredients),i=t.ingredients.map(o=>({foodId:o.foodId,quantity:o.quantity,unit:o.unit})),n=Ri(i,r.servings,a);Object.assign(r,n),r.ingredients=t.ingredients.map(o=>({id:`${r.id}:${o.foodId}`,recipeId:r.id,foodId:o.foodId,quantity:o.quantity,unit:o.unit}))}return r.updatedAt=new Date,rt(e)})),remove:async e=>(await D(),z(()=>{const t=f.recipes.find(a=>a.id===e);Ni(t,"eliminar");const r=f.recipes.indexOf(t);return f.recipes.splice(r,1),{message:"Receta eliminada"}})),recalculateNutrition:async e=>(await D(),z(()=>{const t=f.recipes.find(i=>i.id===e);Ni(t,"recalcular");const r=Fi(t.ingredients),a=Ri(t.ingredients,t.servings,r);return Object.assign(t,a),t.updatedAt=new Date,rt(e)}))};function tr(e){return f.mealPlans.find(t=>t.familyId===f.family.id&&t.weekKey===e)}function ma(e){const t=$e(e);let r=tr(t);if(!r){const a=new Date;r={id:X(),familyId:f.family.id,weekStart:e,weekKey:t,autoGenerated:!1,createdAt:a,updatedAt:a},f.mealPlans.push(r)}return r}function Du(){const e=f.family.id;return Hn().filter(t=>(t.isPublic&&t.familyId===null||t.familyId===e)&&t.calorias>=ut.minKcalPorRacion&&t.calorias<=ut.maxKcalPorRacion)}function Ou(e){const t=new Date;return t.setHours(23,59,59,999),t.setDate(t.getDate()+e),f.pantryItems.filter(r=>r.quantity>0&&r.expiryDate!==null&&r.expiryDate<=t).map(r=>{var n;const a=r.expiryDate,i=Ys(a);return{id:r.id,foodId:r.foodId,foodName:((n=fr(r.foodId))==null?void 0:n.name)??"?",quantity:r.quantity,unit:r.unit,expiryDate:a,daysLeft:i,expired:i<0}})}function Ru(e,t){if(!e.dailyCalories)return null;const r={tmb:e.tmb??0,dailyCalories:e.dailyCalories,dailyProteinG:e.dailyProteinG??0,dailyCarbsG:e.dailyCarbsG??0,dailyFatG:e.dailyFatG??0},a=Us(r),i=Gs(r,e.weightKg),n=tr($e(t)),o={calories:0,proteinG:0,carbsG:0,fatG:0};if(n){const l=f.meals.filter(c=>c.planId===n.id&&c.assignedToMemberId===e.id&&!c.isFasting&&!c.isEatingOut);for(const c of l){const u=c.recipeId?rt(c.recipeId):null;if(u){const p=c.servingsMultiplier??1;o.calories+=(u.calorias??0)*p,o.proteinG+=(u.proteinas??0)*p,o.carbsG+=(u.carbos??0)*p,o.fatG+=(u.grasas??0)*p}}}const s=o.calories>=i.calories.min&&o.calories<=i.calories.max&&o.proteinG>=i.proteinG.min&&o.proteinG<=i.proteinG.max&&o.carbsG>=i.carbsG.min&&o.carbsG<=i.carbsG.max&&o.fatG>=i.fatG.min&&o.fatG<=i.fatG.max;return{memberId:e.id,memberName:e.name,current:o,target:a,range:i,withinRange:s}}const Te={current:async e=>{await D();const t=xe(),r=ma(t);return z(()=>Aa(r,e))},generate:async(e,t=!0)=>(await D(),z(()=>{const r=xe(),a=e?f.members.filter(b=>b.id===e):f.members;if(a.length===0)throw new Error("No hay miembros en la unidad familiar");let i=a[0];if(e||(i=a.find(b=>b.dailyCalories)??a[0]),!i.dailyCalories)throw new Error(`El miembro "${i.name}" no tiene perfil nutricional completo. Completa su perfil en la sección Perfil.`);const n={tmb:i.tmb??0,dailyCalories:i.dailyCalories,dailyProteinG:i.dailyProteinG??0,dailyCarbsG:i.dailyCarbsG??0,dailyFatG:i.dailyFatG??0},o=Gs(n,i.weightKg),s=Du(),l=i.restrictions??[],c=new Map(f.foods.map(b=>[b.id,{id:b.id,name:b.name,category:b.category}])),u=l.length>0?Eu(s,l,c):s;if(u.length<ut.minRecipesForPlan){const b=l.length>0&&s.length>=ut.minRecipesForPlan?` Las restricciones de "${i.name}" (${l.join(", ")}) dejan fuera ${s.length-u.length} de ${s.length}.`:"";throw new Error(`Se necesitan al menos ${ut.minRecipesForPlan} recetas. Hay ${u.length}.${b}`)}let p;if(t){const b=Ou(ut.expiringSoonDays);p={urgencyMap:yu(b,ut.expiringSoonDays),weekStart:r}}const m=ru(n.dailyCalories),w=u;cu(w,m,p),mu(w,m,o,p),fu(w,m,o);const h=du(w,m,o),g=ma(r);g.autoGenerated=!0,g.updatedAt=new Date;const _=e??i.id;f.meals=f.meals.filter(b=>!(b.planId===g.id&&b.assignedToMemberId===_));for(const b of m)f.meals.push({id:X(),planId:g.id,dayOfWeek:b.dayOfWeek,mealType:b.mealType,recipeId:b.recipeId,assignedToMemberId:_,completed:!1,servingsMultiplier:b.servingsMultiplier,isEatingOut:!1,isFasting:!1,notes:null,order:0});return{...Aa(g),fit:{...h,message:uu(h)}}})),remove:async()=>(await D(),z(()=>{const e=xe(),t=tr($e(e));if(!t)throw new Error("No hay plan para esta semana");return f.meals=f.meals.filter(r=>r.planId!==t.id),f.mealPlans=f.mealPlans.filter(r=>r.id!==t.id),{message:"Plan semanal eliminado"}})),assignSlot:async e=>(await D(),z(()=>{const t=xe(),r=e.planId?f.mealPlans.find(l=>l.id===e.planId&&l.familyId===f.family.id):ma(t);if(!r)throw new Error("Plan no encontrado");const a=e.servingsMultiplier??1,i=e.isEatingOut??!1,n=e.isFasting??!1,o=f.meals.find(l=>l.planId===r.id&&l.dayOfWeek===e.dayOfWeek&&l.mealType===e.mealType&&(!e.assignedToMemberId||l.assignedToMemberId===e.assignedToMemberId));if(o)return o.recipeId=e.recipeId,o.completed=!1,o.servingsMultiplier=a,o.assignedToMemberId=e.assignedToMemberId??o.assignedToMemberId,o.isEatingOut=i,o.isFasting=n,un(o);const s={id:X(),planId:r.id,dayOfWeek:e.dayOfWeek,mealType:e.mealType,recipeId:e.recipeId,servingsMultiplier:a,assignedToMemberId:e.assignedToMemberId??null,isEatingOut:i,isFasting:n,completed:!1,notes:null,order:0};return f.meals.push(s),un(s)})),removeSlot:async(e,t,r)=>(await D(),z(()=>{const a=xe(),i=tr($e(a));if(!i)throw new Error("No hay plan para esta semana");const n=f.meals.filter(s=>s.planId===i.id&&s.dayOfWeek===e&&s.mealType===t&&(!r||s.assignedToMemberId===r));if(n.length===0)throw new Error("No hay comida en esa posición");const o=new Set(n.map(s=>s.id));return f.meals=f.meals.filter(s=>!o.has(s.id)),{message:"Comida(s) eliminada(s) del plan"}})),suggestions:async(e=5)=>(await D(),[...Hn().filter(a=>a.isPublic&&a.familyId===null).slice(0,50)].sort(()=>Math.random()-.5).slice(0,e)),progress:async e=>{await D();const t=xe(),r=e?f.members.filter(n=>n.id===e):f.members;if(r.length===0)return{withinRange:!0,current:null,target:null,message:"Sin familia"};if(!tr($e(t)))return{withinRange:!0,current:null,target:null,message:"Sin plan aún"};const i=r.map(n=>Ru(n,t)).filter(n=>n!==null);return e?U(i[0]??{withinRange:!0,current:null,target:null,message:"Sin plan aún"}):i.length===0?{withinRange:!0,current:null,target:null,message:"Sin plan aún"}:U(i)},cook:async e=>(await D(),z(()=>{var n,o;const t=f.meals.find(s=>s.id===e&&f.mealPlans.some(l=>l.id===s.planId&&l.familyId===f.family.id));if(!t)throw new Error("Comida no encontrada");if(!t.recipeId)throw new Error("Esta comida no tiene receta asignada");const r=rt(t.recipeId);if(!r)throw new Error("Esta comida no tiene receta asignada");if(t.completed)return{alreadyCooked:!0,summary:[]};const a=new Map;for(const s of f.pantryItems){const l=a.get(s.foodId);l?l.push(s):a.set(s.foodId,[s])}const i=[];for(const s of r.ingredients){const l=(a.get(s.foodId)??[]).filter(h=>h.unit===s.unit),c=l.reduce((h,g)=>h+g.quantity,0);if(l.length===0){i.push({name:((n=s.food)==null?void 0:n.name)??"?",subtracted:0,remaining:0,unit:s.unit});continue}const u=r.servings&&r.servings>0?r.servings:1,p=s.quantity/u*t.servingsMultiplier,{consumption:m,totalSubtracted:w}=bu(l.map(h=>({id:h.id,quantity:h.quantity,expiryDate:h.expiryDate})),p);for(const h of m){const g=f.pantryItems.find(_=>_.id===h.id);g.quantity=h.remaining,g.updatedAt=new Date}i.push({name:((o=s.food)==null?void 0:o.name)??"?",subtracted:w,remaining:Math.round((c-w)*10)/10,unit:l[0].unit})}return t.completed=!0,{alreadyCooked:!1,summary:i}})),history:async e=>{await D();const t=e??8,r=xe(),a=$e(r);return f.mealPlans.filter(n=>n.familyId===f.family.id&&n.weekKey<a&&f.meals.some(o=>o.planId===n.id)).sort((n,o)=>n.weekKey<o.weekKey?1:-1).slice(0,t).map(n=>U({id:n.id,weekStart:n.weekStart,autoGenerated:n.autoGenerated,mealCount:f.meals.filter(o=>o.planId===n.id).length}))},repeat:async e=>(await D(),z(()=>{const t=xe(),r=$e(t),a=e!=null&&e.sourcePlanId?f.mealPlans.find(s=>s.id===e.sourcePlanId&&s.familyId===f.family.id):tr($e(Ld(t,-7)));if(!a)throw new Error("No hay un plan anterior para repetir");const i=f.meals.filter(s=>s.planId===a.id);if(i.length===0)throw new Error("No hay un plan anterior para repetir");if(a.weekKey===r)throw new Error("No puedes repetir la semana actual sobre sí misma");const n=e!=null&&e.assignedToMemberId?i.filter(s=>s.assignedToMemberId===e.assignedToMemberId):i;if(n.length===0)throw new Error("El plan de origen no tiene comidas para ese miembro");const o=ma(t);o.autoGenerated=!1,o.updatedAt=new Date,e!=null&&e.assignedToMemberId?f.meals=f.meals.filter(s=>!(s.planId===o.id&&s.assignedToMemberId===e.assignedToMemberId)):f.meals=f.meals.filter(s=>s.planId!==o.id);for(const s of n)f.meals.push({id:X(),planId:o.id,dayOfWeek:s.dayOfWeek,mealType:s.mealType,recipeId:s.recipeId,servingsMultiplier:s.servingsMultiplier,order:s.order,isEatingOut:s.isEatingOut,isFasting:s.isFasting,notes:s.notes,completed:!1,assignedToMemberId:(e==null?void 0:e.assignedToMemberId)??s.assignedToMemberId});return Aa(o)}))};function zo(e){return f.mealPlans.find(t=>t.familyId===f.family.id&&t.weekKey===e)}const xr={list:async()=>(await D(),Au()),get:async e=>{await D();const t=No(e);if(!t)throw new Error("Plantilla no encontrada");return t},create:async e=>(await D(),z(()=>{const t=xe(),r=zo($e(t)),a=r?f.meals.filter(s=>s.planId===r.id):[];if(!r||a.length===0)throw new Error("No hay plan semanal para guardar como plantilla");const i=new Date,n=X(),o={id:n,familyId:f.family.id,name:e.name,description:e.description??null,goal:null,isSystem:!1,createdAt:i,updatedAt:i,meals:a.filter(s=>s.recipeId).map(s=>({id:X(),templateId:n,dayOfWeek:s.dayOfWeek,mealType:s.mealType,recipeId:s.recipeId,servingsMultiplier:s.servingsMultiplier??1,order:s.order}))};return f.templates.push(o),No(n)})),remove:async e=>(await D(),z(()=>{if(!f.templates.find(r=>r.id===e&&r.familyId===f.family.id))throw new Error("Plantilla no encontrada");return f.templates=f.templates.filter(r=>r.id!==e),{message:"Plantilla eliminada"}})),apply:async(e,t)=>(await D(),z(()=>{const r=Pu(e);if(!r)throw new Error("Plantilla no encontrada");const a=xe(),i=$e(a),n=zo(i);n&&(f.meals=f.meals.filter(c=>c.planId!==n.id),f.mealPlans=f.mealPlans.filter(c=>c.id!==n.id));const o=(t==null?void 0:t.assignedToMemberId)||null,s=new Date,l={id:X(),familyId:f.family.id,weekStart:a,weekKey:i,autoGenerated:!1,createdAt:s,updatedAt:s};f.mealPlans.push(l);for(const c of r.meals)f.meals.push({id:X(),planId:l.id,dayOfWeek:c.dayOfWeek,mealType:c.mealType,recipeId:c.recipeId,servingsMultiplier:c.servingsMultiplier,order:c.order,assignedToMemberId:o,completed:!1,isEatingOut:!1,isFasting:!1,notes:null});return Aa(l)}))};function zi(e){return f.shoppingLists.find(t=>t.familyId===f.family.id&&t.weekKey===e)}function tl(e){const t=$e(e),r=f.mealPlans.find(i=>i.familyId===f.family.id&&i.weekKey===t);if(!r)return new Map;const a=f.meals.filter(i=>i.planId===r.id&&!i.isFasting&&!i.isEatingOut&&!i.completed).map(i=>{const n=i.recipeId?rt(i.recipeId):null;return{servingsMultiplier:i.servingsMultiplier,recipe:n?{servings:n.servings,ingredients:n.ingredients.map(o=>{var s;return{foodId:o.foodId,foodName:((s=o.food)==null?void 0:s.name)??"?",quantity:o.quantity,unit:o.unit}})}:null}});return Bd(a)}function Fu(){const e=new Map;for(const t of f.pantryItems){const r=`${t.foodId}|${t.unit}`;e.set(r,(e.get(r)??0)+t.quantity)}return e}function rl(e){return U({...e,food:fr(e.foodId)})}function pn(e){return U({...e,householdItem:e.householdItemId?el(e.householdItemId):null})}function al(e){const t=f.shoppingSectionItems.filter(r=>r.sectionId===e.id).sort((r,a)=>r.sortOrder-a.sortOrder).map(pn);return U({...e,items:t})}function Nu(e){const t=f.shoppingItems.filter(a=>a.listId===e.id).map(rl),r=f.shoppingSections.filter(a=>a.listId===e.id).sort((a,i)=>a.sortOrder-i.sortOrder).map(al);return U({...e,items:t,sections:r})}function Lo(e){const t=tl(e.weekStart),r=Fu(),a=f.shoppingItems.filter(o=>o.listId===e.id),i=new Map(a.map(o=>[o.foodId,o]));for(const[o,s]of t){const l=Kd(r,o,s.unit),c=Math.max(0,s.total-l),u=l>=s.total,p=i.get(o),m=((p==null?void 0:p.purchased)??!1)||u;p?(p.totalNeeded=s.total,p.inPantry=l,p.toBuy=c,p.purchased=m,p.unit=s.unit):f.shoppingItems.push({id:X(),listId:e.id,foodId:o,totalNeeded:s.total,inPantry:l,toBuy:c,unit:s.unit,purchased:m})}const n=new Set(t.keys());return f.shoppingItems=f.shoppingItems.filter(o=>o.listId!==e.id||n.has(o.foodId)),Nu(e)}const qe={current:async()=>(await D(),z(()=>{const e=xe(),t=zi($e(e));return t?Lo(t):{items:[],sections:[],message:"Aún no se ha generado la lista"}})),generate:async()=>(await D(),z(()=>{const e=xe(),t=$e(e),r=tl(e),a=f.mealPlans.find(n=>n.familyId===f.family.id&&n.weekKey===t);if(r.size===0&&!a)throw new Error("No hay plan semanal para esta semana");let i=zi(t);return i||(i={id:X(),familyId:f.family.id,weekStart:e,weekKey:t,createdAt:new Date},f.shoppingLists.push(i)),Lo(i)})),toggleItem:async e=>(await D(),z(()=>{const t=f.shoppingItems.find(r=>r.id===e&&f.shoppingLists.some(a=>a.id===r.listId&&a.familyId===f.family.id));if(!t)throw new Error("Item no encontrado");return t.purchased=!t.purchased,rl(t)})),createSection:async e=>(await D(),z(()=>{const t=xe(),r=$e(t);let a=zi(r);a||(a={id:X(),familyId:f.family.id,weekStart:t,weekKey:r,createdAt:new Date},f.shoppingLists.push(a));const i=Math.max(-1,...f.shoppingSections.filter(o=>o.listId===a.id).map(o=>o.sortOrder)),n={id:X(),listId:a.id,name:e,sortOrder:i+1,createdAt:new Date};return f.shoppingSections.push(n),al(n)})),addSectionItem:async(e,t)=>(await D(),z(()=>{const r=f.shoppingSections.find(n=>n.id===e&&f.shoppingLists.some(o=>o.id===n.listId&&o.familyId===f.family.id));if(!r)throw new Error("Sección no encontrada");const a=Math.max(-1,...f.shoppingSectionItems.filter(n=>n.sectionId===r.id).map(n=>n.sortOrder)),i={id:X(),sectionId:r.id,name:t.name,quantity:t.quantity??1,purchased:!1,sortOrder:a+1,householdItemId:t.householdItemId??null};return f.shoppingSectionItems.push(i),pn(i)})),toggleSectionItem:async(e,t)=>(await D(),z(()=>{const r=f.shoppingSectionItems.find(i=>i.id===e&&f.shoppingSections.some(n=>n.id===i.sectionId&&f.shoppingLists.some(o=>o.id===n.listId&&o.familyId===f.family.id)));if(!r)throw new Error("Artículo no encontrado");const a=r.purchased;if(r.purchased=t,t&&!a&&r.householdItemId){const i=f.family.id,n=f.householdStockItems.find(o=>o.familyId===i&&o.householdItemId===r.householdItemId);if(n)n.quantity+=r.quantity,n.updatedAt=new Date;else{const o=new Date;f.householdStockItems.push({id:X(),familyId:i,householdItemId:r.householdItemId,quantity:r.quantity,unit:"UNIDAD",minThreshold:null,notes:null,createdAt:o,updatedAt:o})}}return pn(r)})),removeSectionItem:async e=>(await D(),z(()=>{const t=f.shoppingSectionItems.findIndex(r=>r.id===e&&f.shoppingSections.some(a=>a.id===r.sectionId&&f.shoppingLists.some(i=>i.id===a.listId&&i.familyId===f.family.id)));if(t===-1)throw new Error("Artículo no encontrado");return f.shoppingSectionItems.splice(t,1),{message:"Artículo eliminado"}}))};function fa(e){return U({...e,householdItem:el(e.householdItemId)})}const lt={items:async e=>(await D(),Tu(e)),createItem:async e=>(await D(),z(()=>{const t={id:X(),name:e.name,category:e.category??null,unit:e.unit??"UNIDAD",familyId:f.family.id,createdAt:new Date};return f.householdItems.push(t),U(t)})),stock:async()=>(await D(),[...f.householdStockItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(fa)),addStock:async e=>(await D(),z(()=>{const t=f.family.id,r=f.householdStockItems.find(n=>n.familyId===t&&n.householdItemId===e.householdItemId);if(r)return r.quantity+=e.quantity,r.unit=e.unit??r.unit,r.minThreshold=e.minThreshold??r.minThreshold,r.notes=e.notes??r.notes,r.updatedAt=new Date,fa(r);const a=new Date,i={id:X(),familyId:t,householdItemId:e.householdItemId,quantity:e.quantity,unit:e.unit??"UNIDAD",minThreshold:e.minThreshold??null,notes:e.notes??null,createdAt:a,updatedAt:a};return f.householdStockItems.push(i),fa(i)})),updateStock:async(e,t)=>(await D(),z(()=>{const r=f.householdStockItems.find(a=>a.id===e&&a.familyId===f.family.id);if(!r)throw new Error("Artículo no encontrado");return t.quantity!==void 0&&(r.quantity=t.quantity),t.unit!==void 0&&(r.unit=t.unit),t.minThreshold!==void 0&&(r.minThreshold=t.minThreshold),t.notes!==void 0&&(r.notes=t.notes),r.updatedAt=new Date,fa(r)})),removeStock:async e=>(await D(),z(()=>{const t=f.householdStockItems.findIndex(r=>r.id===e&&r.familyId===f.family.id);if(t===-1)throw new Error("Artículo no encontrado");return f.householdStockItems.splice(t,1),{message:"Artículo eliminado"}}))};function hn(e){return e==="DIARIA"?Ls(new Date):xe()}function zu(e){if(!e)return null;const t=f.members.find(r=>r.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function ga(e){const t=hn(e.frequency),a=f.choreCompletions.filter(i=>i.choreId===e.id&&i.date>=t).length>0;return U({...e,member:zu(e.assignedToMemberId),completedInPeriod:a})}const Ct={list:async()=>(await D(),f.chores.filter(e=>e.familyId===f.family.id&&e.active).sort((e,t)=>e.createdAt.getTime()-t.createdAt.getTime()).map(ga)),create:async e=>(await D(),z(()=>{const t={id:X(),familyId:f.family.id,name:e.name,frequency:e.frequency,assignedToMemberId:e.assignedToMemberId??null,active:!0,createdAt:new Date};return f.chores.push(t),ga(t)})),update:async(e,t)=>(await D(),z(()=>{const r=f.chores.find(a=>a.id===e&&a.familyId===f.family.id);if(!r)throw new Error("Tarea no encontrada");return Object.assign(r,t),ga(r)})),remove:async e=>(await D(),z(()=>{const t=f.chores.findIndex(r=>r.id===e&&r.familyId===f.family.id);if(t===-1)throw new Error("Tarea no encontrada");return f.chores.splice(t,1),{message:"Tarea eliminada"}})),complete:async(e,t)=>(await D(),z(()=>{const r=f.chores.find(n=>n.id===e&&n.familyId===f.family.id);if(!r)throw new Error("Tarea no encontrada");if(t&&!f.members.some(n=>n.id===t))throw new Error("Miembro no encontrado");const a=hn(r.frequency);return f.choreCompletions.find(n=>n.choreId===r.id&&n.date>=a)?{completedInPeriod:!0}:(f.choreCompletions.push({id:X(),choreId:r.id,date:new Date,completedByMemberId:t??null}),{completedInPeriod:!0})})),uncomplete:async e=>(await D(),z(()=>{const t=f.chores.find(a=>a.id===e&&a.familyId===f.family.id);if(!t)throw new Error("Tarea no encontrada");const r=hn(t.frequency);return f.choreCompletions=f.choreCompletions.filter(a=>!(a.choreId===t.id&&a.date>=r)),{completedInPeriod:!1}})),templates:async()=>(await D(),Mo.map(e=>({id:e.id,name:e.name,description:e.description,choreCount:e.chores.length}))),applyTemplate:async e=>(await D(),z(()=>{const t=Mo.find(s=>s.id===e);if(!t)throw new Error("Plantilla no encontrada");const r=f.family.id,a=new Set(f.chores.filter(s=>s.familyId===r&&s.active).map(s=>Di(s.name))),i=t.chores.filter(s=>!a.has(Di(s.name))),n=t.chores.filter(s=>a.has(Di(s.name))).map(s=>s.name);return{created:i.map(s=>{const l={id:X(),familyId:r,name:s.name,frequency:s.frequency,assignedToMemberId:null,active:!0,createdAt:new Date};return f.chores.push(l),ga(l)}),skipped:n}}))};function Bo(){return!0}async function Lu(){return await D(),JSON.stringify(Kl(f),null,2)}async function Bu(e){await D();const t=ql(JSON.parse(e)),{store:r,report:a,catalogVersionMismatch:i}=Gl(t);return await Rd(r),{report:a,catalogVersionMismatch:i}}async function ju(){await D(),await Fd()}var Ku=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Vn=(e,t,r,a)=>{for(var i=a>1?void 0:a?qu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Ku(t,r,i),i};let Gr=class extends W{constructor(){super(...arguments),this.variant="wordmark",this.showTagline=!1}_xCircle(){return d`
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <circle cx="50" cy="50" r="50" fill="var(--etxa-color-primary)"></circle>
        <path
          d="M34 34 66 66M66 34 34 66"
          fill="none"
          stroke="#ffffff"
          stroke-width="15"
          stroke-linecap="round"
        ></path>
      </svg>
    `}render(){return this.variant==="mark"?d`
        <svg class="app-mark" viewBox="0 0 100 100" role="img" aria-label="Etxa" focusable="false">
          <rect width="100" height="100" rx="26" fill="var(--etxa-color-background)"></rect>
          <circle cx="50" cy="50" r="27" fill="var(--etxa-color-primary)"></circle>
          <path
            d="M41 41 59 59M59 41 41 59"
            fill="none"
            stroke="#ffffff"
            stroke-width="8.5"
            stroke-linecap="round"
          ></path>
        </svg>
      `:d`
      <span
        class="wordmark"
        role="img"
        aria-label=${this.showTagline?"Etxa. La casa, hecha.":"Etxa"}
      >
        <span class="word" aria-hidden="true">
          <span class="letters">et</span>
          <span class="x-mark">${this._xCircle()}</span>
          <span class="letters">a</span>
        </span>
        ${this.showTagline?d`<span class="tagline" aria-hidden="true">La casa, hecha.</span>`:""}
      </span>
    `}};Gr.styles=[Re,H`
      :host {
        display: inline-flex;
        color: var(--etxa-color-text);
        font-size: var(--etxa-logo-size, 1.75rem);
        line-height: 1;
        -webkit-user-select: none;
        user-select: none;
      }

      .wordmark {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 0.08em;
      }

      .word {
        display: flex;
        align-items: baseline;
        font-family: var(--etxa-font-heading);
        font-weight: 800;
        font-size: 1em;
        letter-spacing: -0.035em;
        line-height: 1;
        white-space: nowrap;
      }

      /* La X ocupa el hueco de una letra: alineada a la línea base y bajada media altura de x
         para quedar centrada en el cuerpo de las minúsculas, como en la referencia de marca. */
      .x-mark {
        width: 0.86em;
        height: 0.86em;
        margin-bottom: -0.185em;
        margin-inline: 0.01em;
        flex: none;
      }

      .x-mark svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      .tagline {
        font-family: var(--etxa-font-body);
        font-weight: 500;
        font-size: 0.3em;
        letter-spacing: 0.005em;
        color: var(--etxa-color-text);
      }

      :host([variant='mark']) .app-mark {
        display: block;
        width: 1.6em;
        height: 1.6em;
      }
    `];Vn([j({reflect:!0})],Gr.prototype,"variant",2);Vn([j({type:Boolean,attribute:"show-tagline"})],Gr.prototype,"showTagline",2);Gr=Vn([Y("etxa-logo")],Gr);var Uu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,di=(e,t,r,a)=>{for(var i=a>1?void 0:a?Gu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Uu(t,r,i),i};let or=class extends W{constructor(){super(...arguments),this.name="home",this.size=24,this.label=""}_paths(){switch(this.name){case"calendar":return Ne`<path d="M6 3v3m12-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/>`;case"cart":return Ne`<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6H17a2 2 0 0 0 1.9-1.4L20 8H6m4 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>`;case"more":return Ne`<circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none"/>`;case"fridge":return Ne`<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 10h12M9 6v2m0 5v3"/>`;case"recipes":return Ne`<path d="M5 4h11a3 3 0 0 1 3 3v13H7a2 2 0 0 1-2-2V4Zm2 12h12M9 8h6"/>`;case"household":return Ne`<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/>`;case"chores":return Ne`<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2m-6 6 2 2 4-4m-6 9h6"/>`;case"profile":return Ne`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`;case"arrow-right":return Ne`<path d="M5 12h14m-5-5 5 5-5 5"/>`;case"check":return Ne`<path d="m5 12 4 4L19 6"/>`;default:return Ne`<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/>`}}render(){return d`
      <svg
        viewBox="0 0 24 24"
        width=${this.size}
        height=${this.size}
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        role=${this.label?"img":"presentation"}
        aria-label=${this.label||void 0}
        aria-hidden=${this.label?"false":"true"}
      >${this._paths()}</svg>
    `}};or.styles=H`
    :host { display: inline-flex; flex: none; }
    svg { display: block; width: 1em; height: 1em; }
  `;di([j({reflect:!0})],or.prototype,"name",2);di([j({type:Number})],or.prototype,"size",2);di([j()],or.prototype,"label",2);or=di([Y("app-icon")],or);var Hu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,Wn=(e,t,r,a)=>{for(var i=a>1?void 0:a?Vu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Hu(t,r,i),i};let Hr=class extends W{constructor(){super(...arguments),this.items=[],this.active=""}_select(e,t){t.preventDefault(),this.dispatchEvent(new CustomEvent("navigation-select",{detail:e,bubbles:!0,composed:!0}))}render(){return d`
      <nav aria-label="Navegación principal">
        ${this.items.map(e=>{const t=this.active===e.id?"page":void 0,r=d`<app-icon .name=${e.icon} size="22"></app-icon><span>${e.label}</span>`;return e.href?d`<a href=${e.href} aria-current=${t} @click=${a=>this._select(e,a)}>${r}</a>`:d`<button type="button" aria-current=${t} @click=${a=>this._select(e,a)}>${r}</button>`})}
      </nav>
    `}};Hr.styles=[Re,H`
    :host { display: block; background: var(--etxa-color-surface); border-top: 1px solid var(--etxa-color-border); }
    nav { min-height: 4rem; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; align-items: stretch; padding: 0.25rem max(0.25rem, env(safe-area-inset-right)) calc(0.25rem + env(safe-area-inset-bottom)) max(0.25rem, env(safe-area-inset-left)); }
    a, button { min-width: var(--etxa-touch-target); min-height: var(--etxa-touch-target); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.15rem; color: var(--etxa-color-text-muted); text-decoration: none; font-size: 0.72rem; font-weight: 600; border-radius: var(--etxa-radius-sm); background: none; border: 0; font-family: inherit; cursor: pointer; }
    [aria-current='page'] { color: var(--etxa-color-primary-strong); }
    a:hover, button:hover { background: color-mix(in srgb, var(--etxa-color-primary), transparent 93%); color: var(--etxa-color-primary-strong); }
  `];Wn([j({attribute:!1})],Hr.prototype,"items",2);Wn([j()],Hr.prototype,"active",2);Hr=Wn([Y("bottom-navigation")],Hr);var Wu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,gr=(e,t,r,a)=>{for(var i=a>1?void 0:a?Qu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Wu(t,r,i),i};let bt=class extends W{constructor(){super(...arguments),this.message="",this._email="",this._password="",this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t=await ea.login({email:this._email,password:this._password});t.accessToken,t.refreshToken,this.dispatchEvent(new CustomEvent("login-success"))}catch(t){this._error=t.message||"Error al iniciar sesión"}finally{this._loading=!1}},this._dispatchRegister=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("register"))}}render(){return d`
      <div class="card">
        <h1>MealPrepHelper</h1>
        <p class="sub">Inicia sesión para continuar</p>

        ${this.message?d`<div class="notice">${this.message}</div>`:""}
        ${this._error?d`<div class="error">${this._error}</div>`:""}

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
    `}};bt.styles=H`
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
      box-shadow: 0 1px 3px rgb(46 46 46 / 38%);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
      padding: 0.5rem 0.75rem;
      border-radius: var(--etxa-radius-sm);
      font-size: 0.8125rem;
      margin-bottom: 1rem;
    }

    .notice {
      background: var(--etxa-color-primary-soft);
      color: var(--etxa-color-primary-strong);
      padding: 0.5rem 0.75rem;
      border-radius: var(--etxa-radius-sm);
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
  `;gr([j({type:String})],bt.prototype,"message",2);gr([v()],bt.prototype,"_email",2);gr([v()],bt.prototype,"_password",2);gr([v()],bt.prototype,"_error",2);gr([v()],bt.prototype,"_loading",2);bt=gr([Y("login-page")],bt);var Yu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,wt=(e,t,r,a)=>{for(var i=a>1?void 0:a?Xu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Yu(t,r,i),i};let Ge=class extends W{constructor(){super(...arguments),this._name="",this._email="",this._password="",this._familyName="",this._extraMembers=[],this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t={name:this._name,email:this._email,password:this._password,familyName:this._familyName||`Familia de ${this._name}`,members:[{name:this._name},...this._extraMembers.filter(a=>a.trim()).map(a=>({name:a.trim()}))]},r=await ea.register(t);r.accessToken,r.refreshToken,this.dispatchEvent(new CustomEvent("register-success"))}catch(t){this._error=t.message||"Error al registrarse"}finally{this._loading=!1}},this._dispatchLogin=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("login"))}}_addMember(){this._extraMembers=[...this._extraMembers,""]}_updateMember(e,t){const r=[...this._extraMembers];r[e]=t,this._extraMembers=r}_removeMember(e){this._extraMembers=this._extraMembers.filter((t,r)=>r!==e)}render(){return d`
      <div class="card">
        <h1>Crear cuenta</h1>
        <p class="sub">Regístrate para empezar a planificar tus comidas</p>

        ${this._error?d`<div class="error">${this._error}</div>`:""}

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
            ${this._extraMembers.map((e,t)=>d`
              <div class="extra-member-row">
                <input type="text" .value=${e}
                  @input=${r=>{this._updateMember(t,r.target.value)}}
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
    `}};Ge.styles=H`
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
      box-shadow: 0 1px 3px rgb(46 46 46 / 38%);
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
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-surface-muted);
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
      border: 1px solid var(--etxa-color-danger-border);
      border-radius: var(--etxa-radius-sm);
      padding: 0.4rem 0.6rem;
      font-size: 0.8rem;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
    }

    .add-btn {
      background: none;
      border: 1px dashed var(--border);
      border-radius: var(--etxa-radius-sm);
      padding: 0.4rem 0.75rem;
      font-size: 0.8rem;
      color: var(--primary);
      cursor: pointer;
      font-family: inherit;
      width: 100%;
      transition: background 0.15s;
    }

    .add-btn:hover {
      background: var(--etxa-color-primary-soft);
    }

    button[type="submit"] {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
      padding: 0.5rem 0.75rem;
      border-radius: var(--etxa-radius-sm);
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
  `;wt([v()],Ge.prototype,"_name",2);wt([v()],Ge.prototype,"_email",2);wt([v()],Ge.prototype,"_password",2);wt([v()],Ge.prototype,"_familyName",2);wt([v()],Ge.prototype,"_extraMembers",2);wt([v()],Ge.prototype,"_error",2);wt([v()],Ge.prototype,"_loading",2);Ge=wt([Y("register-page")],Ge);const ui=["Vegetariano","Vegano","Sin gluten","Sin lactosa","Sin frutos secos","Sin huevo","Bajo en sodio","Diabético"],Li=ui.filter(e=>e!=="Vegetariano"&&e!=="Vegano");function il(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[_-]+/g," ").trim().toLowerCase()}const Zu=new Map(ui.map(e=>[il(e),e]));function Ju(e){return Zu.get(il(e))??e}function nl(e){return Array.isArray(e)?[...new Set(e.map(Ju))]:[]}var ep=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,fe=(e,t,r,a)=>{for(var i=a>1?void 0:a?tp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&ep(t,r,i),i};const rp=[{value:"SEDENTARIO",label:"Sedentario (poco o nada de ejercicio)"},{value:"LIGERO",label:"Ligero (1-3 días/semana)"},{value:"MODERADO",label:"Moderado (3-5 días/semana)"},{value:"ACTIVO",label:"Activo (6-7 días/semana)"}],ap=[{value:"PERDER_PESO",label:"Perder peso"},{value:"MANTENER",label:"Mantener peso"},{value:"GANAR_MUSCULO",label:"Ganar músculo"}];let se=class extends W{constructor(){super(...arguments),this._members=[],this._selectedMemberId="",this._onboardedIds=new Set,this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[],this._error="",this._success="",this._saving=!1,this._confirmingSkip=!1,this._skipping=!1,this._loading=!0,this._handleSubmit=async e=>{var t;if(e.preventDefault(),this._error="",this._success="",!this._sex||!this._activityLevel||!this._goal){this._error="Completa todos los campos obligatorios";return}this._saving=!0;try{await tt.onboarding({memberId:this._selectedMemberId,age:Number(this._age),weightKg:Number(this._weightKg),heightCm:Number(this._heightCm),sex:this._sex,activityLevel:this._activityLevel,goal:this._goal,restrictions:this._restrictions}),this._onboardedIds=new Set([...this._onboardedIds,this._selectedMemberId]);const r=((t=this._selectedMember)==null?void 0:t.name)||"";this._success=`Perfil de ${r} guardado correctamente`}catch(r){this._error=r.message||"Error al guardar perfil"}finally{this._saving=!1}},this._handleSkipAll=async()=>{this._error="",this._skipping=!0;try{await tt.skipOnboarding(),this.dispatchEvent(new CustomEvent("onboarding-complete"))}catch(e){this._error=e.message||"Error al aplicar el perfil estándar",this._confirmingSkip=!1}finally{this._skipping=!1}}}connectedCallback(){super.connectedCallback(),this._load()}async _load(){var e;try{const t=await ea.me();if(this._members=((e=t.family)==null?void 0:e.members)||[],this._members.length>0){this._selectMember(this._members[0].id);const r=this._members.filter(a=>a.dailyCalories).map(a=>a.id);this._onboardedIds=new Set(r)}}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}_selectMember(e){this._selectedMemberId=e,this._error="",this._success="";const t=this._members.find(r=>r.id===e);t&&t.dailyCalories?(this._age=String(t.age??""),this._weightKg=String(t.weightKg??""),this._heightCm=String(t.heightCm??""),this._sex=t.sex??"",this._activityLevel=t.activityLevel??"",this._goal=t.goal??"",this._restrictions=nl(t.restrictions)):(this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[])}get _selectedMember(){return this._members.find(e=>e.id===this._selectedMemberId)}get _pendingMembers(){return this._members.filter(e=>!this._onboardedIds.has(e.id))}_toggleRestriction(e){this._restrictions.includes(e)?this._restrictions=this._restrictions.filter(t=>t!==e):this._restrictions=[...this._restrictions,e]}_handleContinue(){this.dispatchEvent(new CustomEvent("onboarding-complete"))}_nextPendingMember(){const e=this._pendingMembers[0];e&&this._selectMember(e.id)}render(){var t;if(this._loading)return d`<div class="card"><p>Cargando...</p></div>`;const e=this._members.length>0&&this._pendingMembers.length===0;return d`
      <div class="card">
        <h1>Tu perfil nutricional</h1>
        <p class="sub">Configura los datos de cada miembro de la familia</p>

        ${this._error?d`<div class="error">${this._error}</div>`:""}

        ${e?d`
          <div class="all-done">
            <p>✅ Todos los miembros tienen su perfil configurado</p>
            <button @click=${this._handleContinue}>Ir al plan semanal</button>
          </div>
        `:d`
          <div class="member-bar">
            <select .value=${this._selectedMemberId} @change=${r=>this._selectMember(r.target.value)}>
              ${this._members.map(r=>d`
                <option value=${r.id}>
                  ${r.name}${this._onboardedIds.has(r.id)?" ✅":""}
                </option>
              `)}
            </select>
            ${this._onboardedIds.has(this._selectedMemberId)?d`<span class="badge-done">Completado</span>`:""}
          </div>

          ${this._confirmingSkip?d`
            <div class="info-box skip-confirm">
              <strong>Usaremos un plan estándar</strong>
              Calcularemos el plan para una persona adulta de unos 70 kg (2.000 kcal al día). Las
              calorías, las raciones y la lista de la compra pueden no ajustarse a ti. Puedes
              completar tus datos cuando quieras desde Perfil.
              <div class="btn-row">
                <button type="button" class="btn-outline" ?disabled=${this._skipping} @click=${()=>{this._confirmingSkip=!1}}>
                  Volver
                </button>
                <button type="button" class="btn-primary" ?disabled=${this._skipping} @click=${this._handleSkipAll}>
                  ${this._skipping?"Aplicando...":"Usar plan estándar"}
                </button>
              </div>
            </div>
          `:d`
          <div class="info-box">
            ${((t=this._selectedMember)==null?void 0:t.name)||"Este miembro"} — completa sus datos nutricionales para calcular las necesidades diarias.
          </div>

          ${this._success?d`<div class="success">
            <span>${this._success}</span>
            ${this._pendingMembers.length>0?d`
              <button @click=${this._nextPendingMember}>Siguiente: ${this._pendingMembers[0].name}</button>
            `:""}
          </div>`:""}

          <form @submit=${this._handleSubmit}>
            <div class="row">
              <div class="field">
                <label for="age">Edad</label>
                <input id="age" type="number" .value=${this._age} @input=${r=>{this._age=r.target.value}} min="1" max="120" required placeholder="28" />
              </div>
              <div class="field">
                <label for="weight">Peso (kg)</label>
                <input id="weight" type="number" .value=${this._weightKg} @input=${r=>{this._weightKg=r.target.value}} min="5" max="400" step="0.1" required placeholder="70" />
              </div>
              <div class="field">
                <label for="height">Altura (cm)</label>
                <input id="height" type="number" .value=${this._heightCm} @input=${r=>{this._heightCm=r.target.value}} min="40" max="250" required placeholder="175" />
              </div>
            </div>

            <div class="field">
              <label for="sex">Sexo biológico</label>
              <select id="sex" .value=${this._sex} @change=${r=>{this._sex=r.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENINO">Femenino</option>
              </select>
            </div>

            <div class="field">
              <label for="activity">Nivel de actividad física</label>
              <select id="activity" .value=${this._activityLevel} @change=${r=>{this._activityLevel=r.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                ${rp.map(r=>d`<option value=${r.value}>${r.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label for="goal">Objetivo nutricional</label>
              <select id="goal" .value=${this._goal} @change=${r=>{this._goal=r.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                ${ap.map(r=>d`<option value=${r.value}>${r.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label>Restricciones dietéticas (opcional)</label>
              <div class="check-grid">
                ${ui.map(r=>d`
                    <label class="check-label">
                      <input type="checkbox" ?checked=${this._restrictions.includes(r)} @change=${()=>this._toggleRestriction(r)} />
                      ${r}
                    </label>
                  `)}
              </div>
            </div>

            <div class="btn-row">
              <button type="submit" class="btn-primary" ?disabled=${this._saving}>
                ${this._saving?"Guardando...":"Guardar perfil"}
              </button>
              <button type="button" class="btn-outline" @click=${()=>{this._confirmingSkip=!0}}>
                Empezar sin mis datos
              </button>
            </div>
          </form>

          `}

          ${!this._confirmingSkip&&this._onboardedIds.size>0?d`
            <div style="margin-top:1rem;text-align:center">
              <button class="btn-outline" style="padding:0.5rem 1.5rem;border-radius:8px;font-size:0.85rem;cursor:pointer;font-family:inherit;background:var(--surface);color:var(--primary);border:1px solid var(--primary)" @click=${this._handleContinue}>
                Continuar al plan semanal
              </button>
            </div>
          `:""}
        `}
      </div>
    `}};se.styles=H`
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

    .info-box.skip-confirm {
      background: #fffbeb;
      border-color: #fde68a;
      color: #92400e;
    }

    .skip-confirm strong {
      display: block;
      margin-bottom: 0.35rem;
      font-size: 0.875rem;
    }

    .skip-confirm .btn-row {
      margin-top: 1rem;
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
  `;fe([v()],se.prototype,"_members",2);fe([v()],se.prototype,"_selectedMemberId",2);fe([v()],se.prototype,"_onboardedIds",2);fe([v()],se.prototype,"_age",2);fe([v()],se.prototype,"_weightKg",2);fe([v()],se.prototype,"_heightCm",2);fe([v()],se.prototype,"_sex",2);fe([v()],se.prototype,"_activityLevel",2);fe([v()],se.prototype,"_goal",2);fe([v()],se.prototype,"_restrictions",2);fe([v()],se.prototype,"_error",2);fe([v()],se.prototype,"_success",2);fe([v()],se.prototype,"_saving",2);fe([v()],se.prototype,"_confirmingSkip",2);fe([v()],se.prototype,"_skipping",2);fe([v()],se.prototype,"_loading",2);se=fe([Y("onboarding-page")],se);async function ip(e,t,r){t&&await e.skipOnboarding({}),await e.completeHomeSetup(r)}const ta=H`
  :host {
    display: flex;
    flex: 1;
    min-height: 0;
  }

  .step {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--etxa-space-4);
    width: 100%;
    max-width: 30rem;
    margin: 0 auto;
    padding: var(--etxa-space-5) var(--etxa-space-4)
      calc(var(--etxa-space-5) + env(safe-area-inset-bottom));
  }

  .headline {
    display: flex;
    flex-direction: column;
    gap: var(--etxa-space-2);
  }

  h1 {
    margin: 0;
    font-family: var(--etxa-font-heading);
    font-size: clamp(1.5rem, 5vw, 1.9rem);
    font-weight: 700;
    line-height: 1.15;
    color: var(--etxa-color-text);
  }

  .subtitle {
    margin: 0;
    color: var(--etxa-color-text-muted);
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: var(--etxa-space-3);
    flex: 1;
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: var(--etxa-space-3);
    margin-top: auto;
    padding-top: var(--etxa-space-4);
  }

  .footer primary-button {
    width: 100%;
  }

  .hint {
    margin: 0;
    color: var(--etxa-color-text-muted);
    font-size: 0.8rem;
    text-align: center;
  }

  .link-button {
    background: none;
    border: 0;
    color: var(--etxa-color-primary-strong);
    font-weight: 600;
    min-height: var(--etxa-touch-target);
    border-radius: var(--etxa-radius-sm);
    cursor: pointer;
    padding: 0 var(--etxa-space-3);
  }

  .link-button:hover {
    text-decoration: underline;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--etxa-space-2);
  }

  legend {
    padding: 0;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: var(--etxa-space-1);
  }

  label.field {
    display: flex;
    flex-direction: column;
    gap: var(--etxa-space-1);
    font-weight: 600;
    font-size: 0.9rem;
  }

  input[type='text'],
  select {
    min-height: var(--etxa-touch-target);
    border: 1px solid var(--etxa-color-border);
    border-radius: var(--etxa-radius-md);
    background: var(--etxa-color-surface);
    color: var(--etxa-color-text);
    padding: 0 var(--etxa-space-3);
    font-weight: 500;
    width: 100%;
  }

  input[type='text']:focus-visible,
  select:focus-visible {
    border-color: var(--etxa-color-primary);
  }
`;var np=Object.defineProperty,op=Object.getOwnPropertyDescriptor,pi=(e,t,r,a)=>{for(var i=a>1?void 0:a?op(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&np(t,r,i),i};let sr=class extends W{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.type="button"}render(){return d`
      <button type=${this.type} ?disabled=${this.disabled||this.loading} aria-busy=${this.loading?"true":"false"}>
        <slot>${this.loading?"Guardando…":"Continuar"}</slot>
        ${this.loading?"":d`<app-icon name="arrow-right" size="20"></app-icon>`}
      </button>
    `}};sr.styles=[Re,Ve,H`
    :host { display: inline-block; }
    button {
      min-height: var(--etxa-touch-target);
      width: 100%;
      border: 0;
      border-radius: 999px;
      padding: 0.7rem 1.25rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--etxa-space-2);
      background: var(--etxa-color-primary-strong);
      color: white;
      font-weight: 700;
      transition: background 160ms ease, transform 160ms ease;
    }
    button:hover:not(:disabled) { background: var(--etxa-color-primary-hover); }
    button:active:not(:disabled) { transform: translateY(1px); }
    button:disabled { opacity: 0.58; }
  `];pi([j({type:Boolean,reflect:!0})],sr.prototype,"disabled",2);pi([j({type:Boolean,reflect:!0})],sr.prototype,"loading",2);pi([j()],sr.prototype,"type",2);sr=pi([Y("primary-button")],sr);var sp=Object.getOwnPropertyDescriptor,lp=(e,t,r,a)=>{for(var i=a>1?void 0:a?sp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i};let mn=class extends W{_start(){this.dispatchEvent(new CustomEvent("step-submit",{bubbles:!0,composed:!0}))}render(){return d`
      <div class="step">
        <div class="brand">
          <etxa-logo style="--etxa-logo-size: 3.25rem" show-tagline></etxa-logo>
        </div>
        <img
          class="hero"
          src=${wn.welcomeKitchen}
          alt=""
          width="696"
          height="471"
          decoding="async"
        />
        <div class="headline">
          <p class="claim">Comidas. Compras. Tareas.</p>
          <p class="subtitle">Todo lo que hace funcionar tu casa, en un solo sitio.</p>
        </div>
        <div class="footer">
          <primary-button @click=${this._start}>Empezar</primary-button>
        </div>
      </div>
    `}};mn.styles=[Re,Ve,ta,H`
      .step {
        justify-content: center;
        gap: var(--etxa-space-5);
        text-align: center;
      }

      .brand {
        display: flex;
        justify-content: center;
        padding-top: var(--etxa-space-4);
      }

      .hero {
        display: block;
        width: 100%;
        aspect-ratio: 156 / 122;
        max-height: 40vh;
        object-fit: cover;
        border-radius: var(--etxa-radius-lg);
        box-shadow: var(--etxa-shadow-md);
        background: color-mix(in srgb, var(--etxa-color-accent), white 60%);
      }

      .claim {
        margin: 0;
        font-family: var(--etxa-font-heading);
        font-weight: 650;
        font-size: 1.05rem;
      }
    `];mn=lp([Y("welcome-step")],mn);var cp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,ra=(e,t,r,a)=>{for(var i=a>1?void 0:a?dp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&cp(t,r,i),i};let qt=class extends W{constructor(){super(...arguments),this.value="",this.icon="home",this.selected=!1,this.disabled=!1}_toggle(){this.disabled||this.dispatchEvent(new CustomEvent("feature-toggle",{detail:{value:this.value,selected:!this.selected},bubbles:!0,composed:!0}))}render(){return d`
      <button type="button" role="checkbox" aria-checked=${this.selected?"true":"false"} ?disabled=${this.disabled} @click=${this._toggle}>
        <app-icon .name=${this.icon} size="22"></app-icon>
        <span class="copy"><span class="title"><slot name="title"></slot></span><span class="description"><slot></slot></span></span>
        <span class="selection" aria-hidden="true">${this.selected?d`<app-icon name="check" size="16"></app-icon>`:""}</span>
      </button>
    `}};qt.styles=[Re,Ve,H`
    :host { display: block; }
    button {
      min-height: var(--etxa-touch-target);
      width: 100%;
      border: 1px solid var(--etxa-color-border);
      border-radius: var(--etxa-radius-md);
      padding: var(--etxa-space-3) var(--etxa-space-4);
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: var(--etxa-space-3);
      text-align: left;
      background: var(--etxa-color-surface);
      color: var(--etxa-color-text);
      transition: border-color 160ms ease, background 160ms ease;
    }
    button:hover:not(:disabled) { border-color: var(--etxa-color-secondary); }
    :host([selected]) button { border-color: var(--etxa-color-primary); background: color-mix(in srgb, var(--etxa-color-primary), white 92%); }
    button:disabled { opacity: 0.55; }
    .copy { min-width: 0; }
    .title { display: block; font-family: var(--etxa-font-heading); font-weight: 650; }
    .description { display: block; margin-top: 0.2rem; color: var(--etxa-color-text-muted); font-size: 0.875rem; }
    .selection { width: 1.4rem; height: 1.4rem; border: 1.5px solid var(--etxa-color-border); border-radius: 50%; display: grid; place-items: center; color: white; }
    :host([selected]) .selection { border-color: var(--etxa-color-primary); background: var(--etxa-color-primary); }
  `];ra([j()],qt.prototype,"value",2);ra([j()],qt.prototype,"icon",2);ra([j({type:Boolean,reflect:!0})],qt.prototype,"selected",2);ra([j({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);qt=ra([Y("feature-card")],qt);var up=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,hi=(e,t,r,a)=>{for(var i=a>1?void 0:a?pp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&up(t,r,i),i};let lr=class extends W{constructor(){super(...arguments),this.selected=[],this.saving=!1,this._error=""}_onToggle(e){const{value:t,selected:r}=e.detail,a=r?[...this.selected,t]:this.selected.filter(i=>i!==t);this._error="",this.dispatchEvent(new CustomEvent("modules-change",{detail:{modules:a},bubbles:!0,composed:!0}))}_submit(){if(this.selected.length===0){this._error="Elige al menos un área para empezar. Podrás añadir las demás cuando quieras.";return}this._error="",this.dispatchEvent(new CustomEvent("step-submit",{detail:{modules:this.selected},bubbles:!0,composed:!0}))}render(){return d`
      <div class="step">
        <div class="headline">
          <h1>¿Qué te gustaría tener bajo control?</h1>
          <p class="subtitle">Elige lo que más te interese. Puedes cambiarlo cuando quieras.</p>
        </div>
        <div class="body">
          <div class="cards" @feature-toggle=${this._onToggle}>
            ${Yr.map(e=>d`
              <feature-card
                value=${e.id}
                .icon=${e.icon}
                ?selected=${this.selected.includes(e.id)}
              >
                <span slot="title">${e.title}</span>
                ${e.summary}
              </feature-card>
            `)}
          </div>
          ${this._error?d`<p class="state-message" role="alert">${this._error}</p>`:""}
        </div>
        <div class="footer">
          <primary-button ?loading=${this.saving} @click=${this._submit}>Siguiente</primary-button>
        </div>
      </div>
    `}};lr.styles=[Re,Ve,ri,ta,H`
      .cards {
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-2);
      }
    `];hi([j({attribute:!1})],lr.prototype,"selected",2);hi([j({type:Boolean})],lr.prototype,"saving",2);hi([v()],lr.prototype,"_error",2);lr=hi([Y("module-selection-step")],lr);var hp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,aa=(e,t,r,a)=>{for(var i=a>1?void 0:a?mp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&hp(t,r,i),i};const jo=12,fp=[{value:"APARTMENT",label:"Piso"},{value:"HOUSE",label:"Casa"},{value:"OTHER",label:"Otro"}];function gp(e){return e.includes("Vegano")?"VEGAN":e.includes("Vegetariano")?"VEGETARIAN":e.length>0?"OTHER":"NONE"}let Ut=class extends W{constructor(){super(...arguments),this.draft={name:"",homeType:"APARTMENT",memberNames:["Miembro 1"],restrictions:[]},this.minPeople=1,this.saving=!1,this._error=""}get _preference(){return gp(this.draft.restrictions)}_emit(e){this._error="",this.dispatchEvent(new CustomEvent("household-change",{detail:{...this.draft,...e},bubbles:!0,composed:!0}))}_setPeople(e){const t=Math.min(jo,Math.max(this.minPeople,e)),r=[...this.draft.memberNames];for(;r.length<t;)r.push(`Miembro ${r.length+1}`);for(;r.length>t;)r.pop();this._emit({memberNames:r})}_setMemberName(e,t){const r=[...this.draft.memberNames];r[e]=t,this._emit({memberNames:r})}_setPreference(e){e==="NONE"?this._emit({restrictions:[]}):e==="VEGETARIAN"?this._emit({restrictions:["Vegetariano"]}):e==="VEGAN"?this._emit({restrictions:["Vegano"]}):this._emit({restrictions:this.draft.restrictions.filter(t=>Li.includes(t))})}_toggleOtherRestriction(e,t){const r=this.draft.restrictions.filter(i=>Li.includes(i)),a=t?[...r,e]:r.filter(i=>i!==e);this._emit({restrictions:a})}_submit(){if(!this.draft.name.trim()){this._error="Ponle un nombre a la casa para reconocerla.";return}if(this.draft.memberNames.some(e=>!e.trim())){this._error="Cada persona necesita un nombre.";return}this._error="",this.dispatchEvent(new CustomEvent("step-submit",{detail:{...this.draft,name:this.draft.name.trim(),memberNames:this.draft.memberNames.map(e=>e.trim())},bubbles:!0,composed:!0}))}render(){const e=this.draft.memberNames.length,t=this._preference;return d`
      <div class="step">
        <div class="headline">
          <h1>¡Hola!</h1>
          <p class="subtitle">Cuéntanos un poco más sobre tu hogar.</p>
        </div>

        <div class="body">
          <label class="field">
            ¿Cómo quieres llamar a tu casa?
            <input
              type="text"
              .value=${this.draft.name}
              maxlength="80"
              autocomplete="off"
              placeholder="Mi casa"
              @input=${r=>this._emit({name:r.target.value})}
            />
          </label>

          <fieldset>
            <legend>¿Dónde vivís?</legend>
            <div class="chips">
              ${fp.map(r=>d`
                <button
                  type="button"
                  class="chip"
                  aria-pressed=${this.draft.homeType===r.value?"true":"false"}
                  @click=${()=>this._emit({homeType:r.value})}
                >${r.label}</button>
              `)}
            </div>
          </fieldset>

          <fieldset>
            <legend id="people-legend">¿Cuántas personas vivís en casa?</legend>
            <div class="stepper">
              <button
                type="button"
                aria-label="Quitar una persona"
                ?disabled=${e<=this.minPeople}
                @click=${()=>this._setPeople(e-1)}
              >−</button>
              <span class="count" aria-live="polite">${e}</span>
              <button
                type="button"
                aria-label="Añadir una persona"
                ?disabled=${e>=jo}
                @click=${()=>this._setPeople(e+1)}
              >+</button>
            </div>
            ${e<=this.minPeople&&this.minPeople>1?d`<p class="hint">
                  No se pueden quitar personas que ya tienen datos guardados. Puedes hacerlo desde
                  Perfil cuando quieras.
                </p>`:""}
          </fieldset>

          <fieldset>
            <legend>¿Quiénes sois?</legend>
            <div class="members">
              ${this.draft.memberNames.map((r,a)=>d`
                <label class="field">
                  <span class="sr-only">Nombre de la persona ${a+1}</span>
                  <input
                    type="text"
                    .value=${r}
                    maxlength="60"
                    autocomplete="off"
                    placeholder=${`Miembro ${a+1}`}
                    @input=${i=>this._setMemberName(a,i.target.value)}
                  />
                </label>
              `)}
            </div>
          </fieldset>

          <fieldset>
            <legend>¿Tenéis alguna preferencia en las comidas?</legend>
            <label class="option">
              <input type="radio" name="preference" .checked=${t==="NONE"} @change=${()=>this._setPreference("NONE")} />
              Sin preferencia
            </label>
            <label class="option">
              <input type="radio" name="preference" .checked=${t==="VEGETARIAN"} @change=${()=>this._setPreference("VEGETARIAN")} />
              Vegetariana
            </label>
            <label class="option">
              <input type="radio" name="preference" .checked=${t==="VEGAN"} @change=${()=>this._setPreference("VEGAN")} />
              Vegana
            </label>
            <label class="option">
              <input type="radio" name="preference" .checked=${t==="OTHER"} @change=${()=>this._setPreference("OTHER")} />
              Otras restricciones
            </label>
            ${t==="OTHER"?d`
                  <div class="sub-options">
                    ${Li.map(r=>d`
                      <label class="option">
                        <input
                          type="checkbox"
                          .checked=${this.draft.restrictions.includes(r)}
                          @change=${a=>this._toggleOtherRestriction(r,a.target.checked)}
                        />
                        ${r}
                      </label>
                    `)}
                  </div>
                `:""}
            <p class="hint">Se aplica a toda la casa. Luego puedes afinarlo persona a persona en Perfil.</p>
          </fieldset>

          ${this._error?d`<p class="state-message" role="alert">${this._error}</p>`:""}
        </div>

        <div class="footer">
          <primary-button ?loading=${this.saving} @click=${this._submit}>Siguiente</primary-button>
        </div>
      </div>
    `}};Ut.styles=[Re,Ve,ri,ta,H`
      .chips {
        display: flex;
        gap: var(--etxa-space-2);
        flex-wrap: wrap;
      }

      .chip {
        flex: 1 1 5rem;
        min-height: var(--etxa-touch-target);
        border: 1px solid var(--etxa-color-border);
        border-radius: 999px;
        background: var(--etxa-color-surface);
        color: var(--etxa-color-text);
        font-weight: 600;
        cursor: pointer;
      }

      .chip[aria-pressed='true'] {
        border-color: var(--etxa-color-primary);
        background: color-mix(in srgb, var(--etxa-color-primary), white 88%);
        color: var(--etxa-color-primary-strong);
      }

      .stepper {
        display: grid;
        grid-template-columns: var(--etxa-touch-target) 1fr var(--etxa-touch-target);
        align-items: center;
        gap: var(--etxa-space-2);
        border: 1px solid var(--etxa-color-border);
        border-radius: var(--etxa-radius-md);
        background: var(--etxa-color-surface);
        padding: var(--etxa-space-1);
      }

      .stepper button {
        min-width: var(--etxa-touch-target);
        min-height: var(--etxa-touch-target);
        border: 0;
        border-radius: var(--etxa-radius-sm);
        background: color-mix(in srgb, var(--etxa-color-primary), white 90%);
        color: var(--etxa-color-primary-strong);
        font-size: 1.35rem;
        font-weight: 700;
        line-height: 1;
        cursor: pointer;
      }

      .stepper button:disabled {
        opacity: 0.45;
      }

      .stepper .count {
        text-align: center;
        font-weight: 700;
        font-size: 1.1rem;
      }

      .members {
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-2);
      }

      .option {
        display: flex;
        align-items: center;
        gap: var(--etxa-space-3);
        min-height: var(--etxa-touch-target);
        border: 1px solid var(--etxa-color-border);
        border-radius: var(--etxa-radius-md);
        background: var(--etxa-color-surface);
        padding: 0 var(--etxa-space-3);
        font-weight: 500;
        cursor: pointer;
      }

      .option:has(input:checked) {
        border-color: var(--etxa-color-primary);
        background: color-mix(in srgb, var(--etxa-color-primary), white 92%);
      }

      .option input {
        width: 1.15rem;
        height: 1.15rem;
        accent-color: var(--etxa-color-primary-strong);
        flex: none;
      }

      .sub-options {
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-2);
        padding-left: var(--etxa-space-4);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `];aa([j({attribute:!1})],Ut.prototype,"draft",2);aa([j({type:Number})],Ut.prototype,"minPeople",2);aa([j({type:Boolean})],Ut.prototype,"saving",2);aa([v()],Ut.prototype,"_error",2);Ut=aa([Y("household-step")],Ut);var vp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,Qn=(e,t,r,a)=>{for(var i=a>1?void 0:a?yp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&vp(t,r,i),i};let Vr=class extends W{constructor(){super(...arguments),this.modules=[],this.index=0}_next(){this.dispatchEvent(new CustomEvent("step-submit",{bubbles:!0,composed:!0}))}render(){const e=this.modules[this.index];if(!e)return d``;const t=as(e);return d`
      <div class="step">
        <div class="body">
          <div class="illustration">
            <app-icon .name=${t.icon}></app-icon>
          </div>
          <div class="headline">
            <h1>${t.title}</h1>
            <p class="subtitle">${t.description}</p>
          </div>
        </div>
        <div class="footer">
          ${this.modules.length>1?d`
                <div class="dots" role="presentation">
                  ${this.modules.map((r,a)=>d`<span class="dot" data-current=${a===this.index?"true":"false"}></span>`)}
                </div>
              `:""}
          <primary-button @click=${this._next}>Siguiente</primary-button>
        </div>
      </div>
    `}};Vr.styles=[Re,Ve,ta,H`
      .step {
        text-align: center;
        align-items: center;
      }

      .footer {
        align-self: stretch;
      }

      .body {
        justify-content: center;
        align-items: center;
        gap: var(--etxa-space-5);
      }

      .illustration {
        width: clamp(8rem, 40vw, 11rem);
        aspect-ratio: 1;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: color-mix(in srgb, var(--etxa-color-accent), white 35%);
        color: var(--etxa-color-primary-strong);
      }

      .illustration app-icon {
        font-size: clamp(3.5rem, 18vw, 4.75rem);
      }

      .dots {
        display: flex;
        gap: var(--etxa-space-2);
        justify-content: center;
      }

      .dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: var(--etxa-color-border);
      }

      .dot[data-current='true'] {
        background: var(--etxa-color-primary);
      }
    `];Qn([j({attribute:!1})],Vr.prototype,"modules",2);Qn([j({type:Number})],Vr.prototype,"index",2);Vr=Qn([Y("feature-tour-step")],Vr);var bp=Object.getOwnPropertyDescriptor,_p=(e,t,r,a)=>{for(var i=a>1?void 0:a?bp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=o(i)||i);return i};let fn=class extends W{_emit(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}render(){return d`
      <div class="step">
        <div class="body">
          <img
            src=${wn.doneHouse}
            alt=""
            width="468"
            height="366"
            decoding="async"
          />
          <div class="headline">
            <h1>¡Todo listo!</h1>
            <p class="subtitle">
              Ya tienes tu casa en marcha. Empezamos con unas raciones estándar: cuando quieras,
              ajusta los objetivos de cada persona en Perfil.
            </p>
          </div>
        </div>
        <div class="footer">
          <primary-button @click=${()=>this._emit("go-home")}>Ir a mi casa</primary-button>
          <button class="link-button" type="button" @click=${()=>this._emit("customize")}>
            Personalizar mi plan
          </button>
          <p class="storage-notice">
            Tus datos viven solo en este navegador. Desde Perfil puedes exportar una copia cuando
            quieras.
          </p>
          <p class="tagline">La casa, hecha.</p>
        </div>
      </div>
    `}};fn.styles=[Re,Ve,ta,H`
      .step {
        text-align: center;
        align-items: center;
      }

      .footer {
        align-self: stretch;
      }

      .body {
        justify-content: center;
        align-items: center;
        gap: var(--etxa-space-4);
      }

      img {
        width: clamp(11rem, 58vw, 15rem);
        height: auto;
        display: block;
      }

      .storage-notice {
        margin: 0;
        font-size: 0.78rem;
        line-height: 1.4;
        color: var(--etxa-color-text-muted);
      }

      .tagline {
        font-family: var(--etxa-font-heading);
        color: var(--etxa-color-text-muted);
        font-size: 0.9rem;
      }
    `];fn=_p([Y("completion-step")],fn);var wp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,mi=(e,t,r,a)=>{for(var i=a>1?void 0:a?xp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&wp(t,r,i),i};let cr=class extends W{constructor(){super(...arguments),this.current=1,this.total=1,this.label="Progreso"}render(){const e=Math.max(1,this.total),t=Math.min(e,Math.max(0,this.current)),r=Math.round(t/e*100);return d`
      <div class="track" role="progressbar" aria-label=${this.label} aria-valuemin="0" aria-valuemax=${e} aria-valuenow=${t}>
        <div class="value" style=${`width: ${r}%`}></div>
      </div>
      <span class="sr-only">${t} de ${e}</span>
    `}};cr.styles=H`
    :host { display: block; }
    .track { height: 0.25rem; border-radius: 999px; overflow: hidden; background: var(--etxa-color-border); }
    .value { height: 100%; border-radius: inherit; background: var(--etxa-color-secondary); transition: width 180ms ease; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    @media (prefers-reduced-motion: reduce) { .value { transition: none; } }
  `;mi([j({type:Number})],cr.prototype,"current",2);mi([j({type:Number})],cr.prototype,"total",2);mi([j()],cr.prototype,"label",2);cr=mi([Y("progress-indicator")],cr);var $p=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,nt=(e,t,r,a)=>{for(var i=a>1?void 0:a?Ip(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&$p(t,r,i),i};const va=0,$r=1,ya=2,Yt=3,ba=4;let Be=class extends W{constructor(){super(...arguments),this._step=va,this._tourIndex=0,this._loading=!0,this._saving=!1,this._error="",this._modules=[...Fa],this._memberRecords=[],this._draft={name:"",homeType:"APARTMENT",memberNames:["Miembro 1"],restrictions:[]},this._retry=null,this._onModulesChange=e=>{this._modules=e.detail.modules},this._onModulesSubmit=e=>{const t=e.detail.modules;this._run(async()=>{await tt.saveOnboardingProgress({onboardingStep:ya,enabledModules:t}),this._modules=t,this._step=ya},"No se pudo guardar tu selección. Inténtalo otra vez.")},this._onHouseholdChange=e=>{this._draft=e.detail},this._onHouseholdSubmit=e=>{const t=e.detail;this._run(async()=>{await tt.saveOnboardingProgress({onboardingStep:Yt,name:t.name,homeType:t.homeType,enabledModules:this._modules}),await this._syncMembers(t),this._draft=t,this._tourIndex=0,this._step=Yt},"No se pudieron guardar los datos de tu casa. Inténtalo otra vez.")},this._onTourNext=()=>{if(this._tourIndex<this._tourModules.length-1){this._tourIndex+=1;return}this._finish()},this._goBack=()=>{if(this._error="",this._retry=null,this._step===Yt&&this._tourIndex>0){this._tourIndex-=1;return}this._step=Math.max(va,this._step-1)}}connectedCallback(){super.connectedCallback(),this._load()}async _load(){var e;this._loading=!0;try{const[t,r]=await Promise.all([tt.getHomeSettings(),et.list()]);this._modules=t.enabledModules.length>0?[...t.enabledModules]:[...Fa],this._memberRecords=r.map(a=>({id:a.id,name:a.name,dailyCalories:a.dailyCalories??null,restrictions:a.restrictions??[]})),this._draft={name:t.name??"",homeType:t.homeType??"APARTMENT",memberNames:this._memberRecords.length>0?this._memberRecords.map(a=>a.name):["Miembro 1"],restrictions:((e=this._memberRecords[0])==null?void 0:e.restrictions)??[]},this._step=Math.min(Yt,Math.max(va,t.onboardingStep)),this._error="",this._retry=null}catch{this._error="No se pudo cargar la configuración de tu casa.",this._retry=()=>this._load()}finally{this._loading=!1}}get _minPeople(){let e=0;for(let t=this._memberRecords.length-1;t>=0&&this._memberRecords[t].dailyCalories==null;t-=1)e+=1;return e=Math.min(e,Math.max(0,this._memberRecords.length-1)),Math.max(1,this._memberRecords.length-e)}get _tourModules(){return is(this._modules).map(e=>e.id)}get _progressTotal(){return 2+this._tourModules.length+1}get _progressCurrent(){switch(this._step){case $r:return 1;case ya:return 2;case Yt:return 3+this._tourIndex;case ba:return this._progressTotal;default:return 0}}async _run(e,t){this._saving=!0,this._error="";try{await e(),this._retry=null}catch(r){this._error=r instanceof Error&&r.message?r.message:t,this._retry=async()=>{await this._run(e,t)}}finally{this._saving=!1}}async _syncMembers(e){const t=e.memberNames,r=[...this._memberRecords];for(let i=r.length-1;i>=t.length;i-=1){const n=r[i];if(n.dailyCalories!=null||r.length<=1)break;await et.remove(n.id),r.splice(i,1)}for(let i=0;i<t.length;i+=1){const n=t[i],o=r[i];if(!o){const s=await et.create({name:n});r.push({id:s.id,name:s.name,dailyCalories:s.dailyCalories??null,restrictions:[]});continue}o.name!==n&&(await et.update(o.id,{name:n}),o.name=n)}const a=[...e.restrictions];for(const i of r){const n=i.restrictions??[];n.length===a.length&&n.every((s,l)=>s===a[l])||(await et.update(i.id,{restrictions:a}),i.restrictions=a)}this._memberRecords=r}async _finish(){await this._run(async()=>{await ip(tt,this._memberRecords.some(e=>e.dailyCalories==null),{name:this._draft.name,homeType:this._draft.homeType,enabledModules:this._modules}),this._step=ba},"No se pudo terminar la configuración. Inténtalo otra vez.")}_leave(e){this.dispatchEvent(new CustomEvent("home-setup-complete",{detail:{destination:e},bubbles:!0,composed:!0}))}_renderStep(){switch(this._step){case $r:return d`<module-selection-step
          .selected=${this._modules}
          ?saving=${this._saving}
          @modules-change=${this._onModulesChange}
          @step-submit=${this._onModulesSubmit}
        ></module-selection-step>`;case ya:return d`<household-step
          .draft=${this._draft}
          .minPeople=${this._minPeople}
          ?saving=${this._saving}
          @household-change=${this._onHouseholdChange}
          @step-submit=${this._onHouseholdSubmit}
        ></household-step>`;case Yt:return d`<feature-tour-step
          .modules=${this._tourModules}
          .index=${this._tourIndex}
          @step-submit=${this._onTourNext}
        ></feature-tour-step>`;case ba:return d`<completion-step
          @go-home=${()=>this._leave("inicio")}
          @customize=${()=>this._leave("perfil")}
        ></completion-step>`;default:return d`<welcome-step @step-submit=${()=>{this._step=$r}}></welcome-step>`}}render(){if(this._loading)return d`<div class="loading"><p>Preparando tu casa…</p></div>`;const e=this._step>va&&this._step<ba,t=this._step>$r||this._step===$r;return d`
      ${e?d`
            <div class="chrome">
              ${t?d`<button class="back" type="button" aria-label="Volver atrás" @click=${this._goBack}>
                    <app-icon name="arrow-right" size="22"></app-icon>
                  </button>`:""}
              <progress-indicator
                .current=${this._progressCurrent}
                .total=${this._progressTotal}
                label="Progreso de la configuración"
              ></progress-indicator>
              <span class="counter">${this._progressCurrent}/${this._progressTotal}</span>
            </div>
          `:""}
      ${this._error?d`
            <div class="error">
              <p class="state-message" role="alert">${this._error}</p>
              ${this._retry?d`<button type="button" @click=${()=>{var r;(r=this._retry)==null||r.call(this)}}>Reintentar</button>`:""}
            </div>
          `:""}
      <div class="content">${this._renderStep()}</div>
    `}};Be.styles=[es,ts,Re,Ve,ri,H`
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 100dvh;
        background: var(--etxa-color-background);
        color: var(--etxa-color-text);
      }

      .chrome {
        display: flex;
        align-items: center;
        gap: var(--etxa-space-3);
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;
        padding: calc(var(--etxa-space-3) + env(safe-area-inset-top)) var(--etxa-space-4) 0;
      }

      .back {
        min-width: var(--etxa-touch-target);
        min-height: var(--etxa-touch-target);
        display: grid;
        place-items: center;
        border: 0;
        border-radius: var(--etxa-radius-sm);
        background: none;
        color: var(--etxa-color-text);
        cursor: pointer;
        transform: rotate(180deg);
      }

      .chrome progress-indicator {
        flex: 1;
      }

      .counter {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--etxa-color-text-muted);
        font-variant-numeric: tabular-nums;
      }

      .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      }

      .error {
        width: 100%;
        max-width: 30rem;
        margin: var(--etxa-space-3) auto 0;
        padding: 0 var(--etxa-space-4);
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-2);
      }

      .error button {
        align-self: flex-start;
        min-height: var(--etxa-touch-target);
        border: 1px solid var(--etxa-color-danger);
        border-radius: 999px;
        background: none;
        color: var(--etxa-color-danger);
        font-weight: 700;
        padding: 0 var(--etxa-space-4);
        cursor: pointer;
      }

      .loading {
        display: grid;
        place-items: center;
        flex: 1;
        color: var(--etxa-color-text-muted);
      }
    `];nt([v()],Be.prototype,"_step",2);nt([v()],Be.prototype,"_tourIndex",2);nt([v()],Be.prototype,"_loading",2);nt([v()],Be.prototype,"_saving",2);nt([v()],Be.prototype,"_error",2);nt([v()],Be.prototype,"_modules",2);nt([v()],Be.prototype,"_memberRecords",2);nt([v()],Be.prototype,"_draft",2);Be=nt([Y("home-onboarding-page")],Be);function Ep(e,t,r){return e.filter(a=>a.dayOfWeek===t&&!a.isEatingOut&&!a.isFasting).map(a=>{var i;return{id:a.id,label:r[a.mealType]??a.mealType,name:((i=a.recipe)==null?void 0:i.name)??"Sin receta",completed:!!a.completed}})}function kp(e){if(e.some(s=>s.status==="loading"))return"Preparando el resumen de hoy…";const t=e.flatMap(s=>{if(s.status!=="ready"||s.done===void 0||s.total===void 0)return[];const l=Math.max(0,s.total-s.done);return l===0?[]:[{left:l,text:`${l} ${l===1?s.singular:s.plural}`}]}),r=e.some(s=>s.status==="error");if(t.length===0)return r?"No se pudo comprobar todo lo pendiente. Revisa las tarjetas.":"Hoy no queda nada pendiente. La casa, hecha.";const a=t.at(-1),i=t.length===1?a.text:`${t.slice(0,-1).map(s=>s.text).join(", ")} y ${a.text}`,o=`Hoy te ${t.length===1&&a.left===1?"queda":"quedan"} ${i}.`;return r?`${o} Hay secciones sin comprobar.`:o}var Sp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,xt=(e,t,r,a)=>{for(var i=a>1?void 0:a?Cp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Sp(t,r,i),i};const Mp={DESAYUNO:"Desayuno",TENTEMPIE:"Tentempié",ALMUERZO:"Almuerzo",MERIENDA:"Merienda",CENA:"Cena"};function Ap(e=new Date){return(e.getDay()+6)%7}const Ir=()=>({status:"loading",data:null});let He=class extends W{constructor(){super(...arguments),this.modules=[],this.homeName="",this._meals=Ir(),this._shopping=Ir(),this._chores=Ir(),this._expiring=Ir(),this._lowStock=Ir()}connectedCallback(){super.connectedCallback(),this._loadAll()}_has(e){return this.modules.includes(e)}async _loadAll(){const e=[];this._has("MEALS")&&e.push(this._loadMeals(),this._loadExpiring()),this._has("SHOPPING")&&e.push(this._loadShopping()),this._has("CHORES")&&e.push(this._loadChores()),this._has("HOUSEHOLD")&&e.push(this._loadLowStock()),await Promise.allSettled(e)}async _loadMeals(){try{const e=await Te.current(),t=Ap(),r=Ep((e==null?void 0:e.meals)??[],t,Mp);this._meals={status:"ready",data:{done:r.filter(a=>a.completed).length,total:r.length,meals:r}}}catch{this._meals={status:"error",data:null}}}async _loadShopping(){try{const e=await qe.current(),t=(e==null?void 0:e.items)??[],r=((e==null?void 0:e.sections)??[]).flatMap(n=>n.items??[]),a=t.length+r.length,i=t.filter(n=>n.purchased).length+r.filter(n=>n.purchased).length;this._shopping={status:"ready",data:{done:i,total:a}}}catch{this._shopping={status:"error",data:null}}}async _loadChores(){try{const e=await Ct.list(),t=e.filter(r=>r.completedInPeriod).length;this._chores={status:"ready",data:{done:t,total:e.length}}}catch{this._chores={status:"error",data:null}}}async _loadExpiring(){try{const e=await Xe.expiring(),t=(e==null?void 0:e.items)??[];this._expiring={status:"ready",data:{count:t.length,names:t.slice(0,3).map(r=>r.foodName)}}}catch{this._expiring={status:"error",data:null}}}async _loadLowStock(){try{const t=(await lt.stock()).filter(r=>r.minThreshold!=null&&r.quantity<r.minThreshold);this._lowStock={status:"ready",data:{count:t.length,names:t.slice(0,3).map(r=>{var a;return((a=r.householdItem)==null?void 0:a.name)??"Artículo"})}}}catch{this._lowStock={status:"error",data:null}}}get _todayLabel(){const e=new Intl.DateTimeFormat("es-ES",{weekday:"long",day:"numeric",month:"long"}).format(new Date);return e.charAt(0).toUpperCase()+e.slice(1)}get _highlight(){var t,r,a,i,n,o;const e=[];return this._has("MEALS")&&e.push({status:this._meals.status,done:(t=this._meals.data)==null?void 0:t.done,total:(r=this._meals.data)==null?void 0:r.total,singular:"comida",plural:"comidas"}),this._has("CHORES")&&e.push({status:this._chores.status,done:(a=this._chores.data)==null?void 0:a.done,total:(i=this._chores.data)==null?void 0:i.total,singular:"tarea",plural:"tareas"}),this._has("SHOPPING")&&e.push({status:this._shopping.status,done:(n=this._shopping.data)==null?void 0:n.done,total:(o=this._shopping.data)==null?void 0:o.total,singular:"cosa que comprar",plural:"cosas que comprar"}),kp(e)}_renderCard(e){return d`
      <a class="card ${e.wide?"wide":""}" href=${e.href}>
        <div class="card-head">
          <span class="badge" data-tone=${e.tone??"terracotta"}>
            <app-icon .name=${e.icon}></app-icon>
          </span>
          <span>
            <p class="card-title">${e.title}</p>
            <p class="card-meta">${e.meta}</p>
          </span>
          <span class="chevron"><app-icon name="arrow-right" size="18"></app-icon></span>
        </div>
        ${e.body??""}
      </a>
    `}_renderBlockState(e,t){return e.status==="loading"?d`<p class="skeleton">Cargando ${t}…</p>`:d`<p class="state-message block-error" role="alert">No se pudo cargar ${t}.</p>`}_renderMeals(){if(this._meals.status!=="ready"||!this._meals.data)return d`<div class="card wide">${this._renderBlockState(this._meals,"el plan de hoy")}</div>`;const{done:e,total:t,meals:r}=this._meals.data;return this._renderCard({href:"#/plan",icon:"recipes",title:"Comidas",wide:!0,meta:t===0?"Aún no hay comidas para hoy":`${e} de ${t} hechas`,body:r.length?d`
            <ul class="detail">
              ${r.slice(0,5).map(a=>d`
                <li>
                  <span class="slot">${a.label}</span>
                  <span class="name">${a.name}</span>
                  ${a.completed?d`<span class="done"><app-icon name="check" size="16" label="Hecha"></app-icon></span>`:""}
                </li>
              `)}
            </ul>
          `:""})}_renderShopping(){if(this._shopping.status!=="ready"||!this._shopping.data)return d`<div class="card">${this._renderBlockState(this._shopping,"la compra")}</div>`;const{done:e,total:t}=this._shopping.data;return this._renderCard({href:"#/compra",icon:"cart",tone:"olive",title:"Compras",meta:t===0?"Todavía no hay lista esta semana":`${e} de ${t} marcados`})}_renderChores(){if(this._chores.status!=="ready"||!this._chores.data)return d`<div class="card">${this._renderBlockState(this._chores,"las tareas")}</div>`;const{done:e,total:t}=this._chores.data;return this._renderCard({href:"#/tareas",icon:"chores",title:"Tareas",meta:t===0?"Aún no hay tareas":`${e} de ${t} hechas`})}_renderExpiring(){if(this._expiring.status!=="ready"||!this._expiring.data)return d`<div class="card">${this._renderBlockState(this._expiring,"la nevera")}</div>`;const{count:e,names:t}=this._expiring.data;return this._renderCard({href:"#/nevera",icon:"fridge",tone:"butter",title:"Caduca pronto",meta:e===0?"Nada a punto de caducar":`${e} ${e===1?"alimento":"alimentos"}: ${t.join(", ")}`})}_renderLowStock(){if(this._lowStock.status!=="ready"||!this._lowStock.data)return d`<div class="card">${this._renderBlockState(this._lowStock,"el inventario del hogar")}</div>`;const{count:e,names:t}=this._lowStock.data;return this._renderCard({href:"#/hogar",icon:"household",tone:"olive",title:"Hogar",meta:e===0?"Todo por encima del mínimo":`${e} bajo mínimos: ${t.join(", ")}`})}render(){return d`
      <div class="page">
        <header>
          <h1>Hoy</h1>
          <p class="date">${this._todayLabel}${this.homeName?` · ${this.homeName}`:""}</p>
        </header>

        <p class="highlight">
          <app-icon name="home"></app-icon>
          <span>${this._highlight}</span>
        </p>

        <div class="cards">
          ${this._has("MEALS")?this._renderMeals():""}
          ${this._has("SHOPPING")?this._renderShopping():""}
          ${this._has("CHORES")?this._renderChores():""}
          ${this._has("MEALS")?this._renderExpiring():""}
          ${this._has("HOUSEHOLD")?this._renderLowStock():""}
        </div>
      </div>
    `}};He.styles=[Re,Ve,ri,H`
      :host {
        display: block;
      }

      .page {
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-4);
        max-width: 40rem;
        margin: 0 auto;
      }

      header {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
      }

      h1 {
        margin: 0;
        font-family: var(--etxa-font-heading);
        font-size: clamp(1.6rem, 6vw, 2rem);
        font-weight: 700;
      }

      .date {
        margin: 0;
        color: var(--etxa-color-text-muted);
        font-size: 0.9rem;
      }

      .highlight {
        display: flex;
        align-items: center;
        gap: var(--etxa-space-3);
        background: color-mix(in srgb, var(--etxa-color-accent), white 45%);
        border-radius: var(--etxa-radius-lg);
        padding: var(--etxa-space-4);
        font-weight: 600;
        line-height: 1.35;
      }

      .highlight app-icon {
        font-size: 1.6rem;
        color: var(--etxa-color-primary-strong);
      }

      .cards {
        display: grid;
        gap: var(--etxa-space-3);
      }

      .card {
        display: block;
        border: 1px solid var(--etxa-color-border);
        border-radius: var(--etxa-radius-lg);
        background: var(--etxa-color-surface);
        padding: var(--etxa-space-4);
        text-decoration: none;
        color: inherit;
        box-shadow: var(--etxa-shadow-sm);
        transition: border-color 160ms ease, transform 160ms ease;
      }

      a.card:hover {
        border-color: var(--etxa-color-primary);
      }

      a.card:active {
        transform: translateY(1px);
      }

      .card-head {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: var(--etxa-space-3);
      }

      .badge {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--etxa-radius-md);
        display: grid;
        place-items: center;
        font-size: 1.3rem;
        background: color-mix(in srgb, var(--etxa-color-primary), white 88%);
        color: var(--etxa-color-primary-strong);
      }

      .badge[data-tone='olive'] {
        background: color-mix(in srgb, var(--etxa-color-secondary), white 78%);
        color: var(--etxa-color-secondary);
      }

      .badge[data-tone='butter'] {
        background: color-mix(in srgb, var(--etxa-color-accent), white 40%);
        color: #8a6d1f;
      }

      .card-title {
        margin: 0;
        font-family: var(--etxa-font-heading);
        font-weight: 650;
        font-size: 1rem;
      }

      .card-meta {
        margin: 0.1rem 0 0;
        color: var(--etxa-color-text-muted);
        font-size: 0.85rem;
      }

      .chevron {
        color: var(--etxa-color-text-muted);
      }

      .detail {
        margin: var(--etxa-space-3) 0 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-2);
        border-top: 1px solid var(--etxa-color-border);
        padding-top: var(--etxa-space-3);
      }

      .detail li {
        display: flex;
        align-items: center;
        gap: var(--etxa-space-2);
        font-size: 0.9rem;
      }

      .detail .slot {
        color: var(--etxa-color-text-muted);
        min-width: 4.75rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.02em;
      }

      .detail .done {
        color: var(--etxa-color-success);
        flex: none;
      }

      .detail .name {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .skeleton {
        color: var(--etxa-color-text-muted);
        font-size: 0.9rem;
        margin: 0;
      }

      .block-error {
        font-size: 0.85rem;
      }

      @media (min-width: 40rem) {
        .cards {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .cards .wide {
          grid-column: 1 / -1;
        }
      }
    `];xt([j({attribute:!1})],He.prototype,"modules",2);xt([j()],He.prototype,"homeName",2);xt([v()],He.prototype,"_meals",2);xt([v()],He.prototype,"_shopping",2);xt([v()],He.prototype,"_chores",2);xt([v()],He.prototype,"_expiring",2);xt([v()],He.prototype,"_lowStock",2);He=xt([Y("home-view")],He);function oe(e,t){if(e instanceof Error&&e.message.trim())return e.message;if(typeof e=="object"&&e!==null&&"message"in e){const r=e.message;if(typeof r=="string"&&r.trim())return r}return t}const Ht=H`
  h2,
  h3,
  h4 {
    font-family: var(--etxa-font-heading);
    letter-spacing: -0.01em;
  }

  h2 {
    font-size: clamp(1.35rem, 5vw, 1.6rem);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    button,
    select {
      min-height: var(--etxa-touch-target);
    }
  }
`,Pp=[Ht,H`
    :host { display: block; }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
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
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-warning-soft);
      color: var(--etxa-color-warning-strong);
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
      background: var(--etxa-color-warning-soft);
      border: 1px solid var(--etxa-color-warning-border);
      border-radius: var(--etxa-radius-md);
      padding: 0.85rem 1rem;
      margin-bottom: 1rem;
      font-size: 0.8125rem;
      color: var(--etxa-color-warning-strong);
    }

    .standard-profile-warning a {
      color: var(--etxa-color-warning-strong);
      font-weight: 700;
      white-space: nowrap;
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
      color: var(--etxa-color-warning-strong);
      cursor: pointer;
      font-size: 0.9rem;
      padding: 0.1rem 0.3rem;
    }

    .expiry-dismiss:hover { background: none; color: var(--etxa-color-warning-strong); }

    .expiry-warning-note {
      margin: 0.35rem 0 0.5rem;
      font-size: 0.75rem;
      color: var(--etxa-color-warning-strong);
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
      color: var(--etxa-color-warning-strong);
      font-size: 0.75rem;
    }

    button {
      padding: 0.625rem 1.25rem;
      border: none;
      border-radius: var(--etxa-radius-sm);
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

    .btn-outline:hover { background: var(--etxa-color-surface-hover); }

    .btn-sm {
      padding: 0.375rem 0.75rem;
      font-size: 0.75rem;
    }

    .btn-danger {
      background: var(--etxa-color-danger);
      color: white;
    }
    .btn-danger:hover { background: var(--etxa-color-danger); }

    .menu-container {
      position: relative;
    }

    .menu-trigger {
      background: transparent;
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-sm);
      padding: 0.5rem;
      color: var(--text-muted);
      font-size: 1.25rem;
      line-height: 1;
    }

    .menu-trigger:hover { background: var(--etxa-color-surface-hover); }

    .menu-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-sm);
      box-shadow: var(--etxa-shadow-sm);
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
      border-radius: var(--etxa-radius-sm);
      cursor: pointer;
      font-family: inherit;
    }

    .menu-item:hover { background: var(--etxa-color-surface-hover); }
    .menu-item.danger { color: var(--etxa-color-danger); }
    .menu-item.danger:hover { background: var(--etxa-color-danger-soft); }

    .error {
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
      padding: 0.75rem;
      border-radius: var(--etxa-radius-sm);
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .empty-state {
      text-align: center;
      padding: 3rem 1rem;
      color: var(--text-muted);
    }

    .empty-state p { margin-bottom: 1rem; }

    /* Template modals */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgb(46 46 46 / 38%);
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
      border-radius: var(--etxa-radius-md);
      box-shadow: var(--etxa-shadow-md);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
    }

    .template-item:hover { border-color: var(--primary); background: var(--etxa-color-surface-muted); }
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
      color: var(--etxa-color-danger);
      font-size: 0.875rem;
      cursor: pointer;
      padding: 0.25rem;
      opacity: 0.5;
      flex-shrink: 0;
    }

    .template-item-delete:hover { opacity: 1; }

    /* Cooked summary */
    .cooked-summary { list-style: none; padding: 0; margin: 0.5rem 0; }
    .cooked-summary li { display: flex; justify-content: space-between; padding: 0.375rem 0; border-bottom: 1px solid var(--etxa-color-surface-hover); font-size: 0.8125rem; }
    .cooked-summary li:last-child { border-bottom: none; }
    .cooked-summary .subtracted { color: var(--etxa-color-success); font-weight: 600; }
    .cooked-summary .remaining { color: var(--text-muted); }

    @media (max-width: 768px) {
      .top-bar {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        align-items: stretch;
      }
      /* El bloque de controles y el menú comparten la primera fila: el menú queda arriba a la
         derecha, junto al título, y no suelto en una fila propia. */
      .top-bar-left { grid-column: 1 / -1; grid-row: 1; padding-right: 3.25rem; }
      /* El selector de miembro ocupa su propia línea: a media pantalla es el control que más se
         toca y compartir fila con el título lo dejaba diminuto. */
      .top-bar-left .member-select { flex: 1 1 100%; width: 100%; padding: 0.5rem 0.65rem; font-size: 0.9rem; }
      .top-bar-left .expiry-toggle { flex: 1 1 100%; }
      /* Sin esto, el menú de tres puntos caía suelto en la primera columna de la segunda fila. */
      .menu-container { grid-column: 1 / -1; grid-row: 1; justify-self: end; align-self: start; }
      .top-bar > button {
        width: 100%;
        min-width: 0;
        padding-inline: 0.45rem;
        white-space: normal;
      }
    }
  `];var Tp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Yn=(e,t,r,a)=>{for(var i=a>1?void 0:a?Dp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Tp(t,r,i),i};const Op=[{key:"calories",label:"Calorías",unit:"kcal"},{key:"proteinG",label:"Proteína",unit:"g"},{key:"carbsG",label:"Carbohidratos",unit:"g"},{key:"fatG",label:"Grasa",unit:"g"}];let Wr=class extends W{constructor(){super(...arguments),this.progress=null,this.heading="Progreso semanal"}renderMacro(e,t,r){var l;if(!this.progress)return"";const a=this.progress.current[e]??0,i=this.progress.target[e]??1,n=(l=this.progress.range)==null?void 0:l[e],o=Math.min(100,Math.round(a/i*100)),s=n?a>=n.min&&a<=n.max:null;return d`
      <div class="macro-row">
        <div class="macro-label">${t}</div>
        <div class="macro-bar-track">
          <div
            class="macro-bar-fill ${s===!0?"ok":s===!1?"over":""}"
            style="width: ${o}%"
          ></div>
        </div>
        <div class="macro-numbers">
          <strong>${a.toLocaleString()}</strong>
          <span>/ ${i.toLocaleString()} ${r}</span>
        </div>
      </div>
    `}render(){var e;return!((e=this.progress)!=null&&e.current)||!this.progress.target?"":d`
      <section class="overview" aria-label=${this.heading}>
        <h3>${this.heading}</h3>
        ${Op.map(({key:t,label:r,unit:a})=>this.renderMacro(t,r,a))}
        ${this.progress.withinRange==null?"":d`
          <span class="within-range ${this.progress.withinRange?"ok":"nok"}">
            ${this.progress.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
          </span>
        `}
      </section>
    `}};Wr.styles=H`
    :host { display: block; margin-top: 1.5rem; }
    .overview {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1rem;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: 0.8125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin: 0 0 0.75rem;
    }
    .macro-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
    .macro-label { font-size: 0.75rem; font-weight: 600; color: var(--text); min-width: 80px; }
    .macro-bar-track {
      flex: 1;
      height: 8px;
      background: var(--etxa-color-surface-hover);
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
    .macro-bar-fill.ok { background: var(--etxa-color-success); }
    .macro-bar-fill.over { background: var(--etxa-color-warning); }
    .macro-numbers { display: flex; gap: 0.25rem; font-size: 0.75rem; white-space: nowrap; }
    .macro-numbers strong { color: var(--text); }
    .macro-numbers span { color: var(--text-muted); }
    .within-range {
      display: inline-block;
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
      margin-top: 0.5rem;
    }
    .within-range.ok { background: var(--etxa-color-success-border); color: var(--etxa-color-success); }
    .within-range.nok { background: var(--etxa-color-warning-soft); color: var(--etxa-color-warning-strong); }
  `;Yn([j({attribute:!1})],Wr.prototype,"progress",2);Yn([j()],Wr.prototype,"heading",2);Wr=Yn([Y("plan-progress")],Wr);var Rp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,vr=(e,t,r,a)=>{for(var i=a>1?void 0:a?Fp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Rp(t,r,i),i};const Pa=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],gn=[{value:"DESAYUNO",label:"Desayuno"},{value:"TENTEMPIE",label:"Tentempié"},{value:"ALMUERZO",label:"Almuerzo"},{value:"MERIENDA",label:"Merienda"},{value:"CENA",label:"Cena"}];function ot(e,t,r){e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0}))}let _t=class extends W{constructor(){super(...arguments),this.plan=null,this.editMode=!1,this.multipliers={},this.expandedDay=1,this.dragOverSlot=""}getMeal(e,t){var r,a;return(a=(r=this.plan)==null?void 0:r.meals)==null?void 0:a.find(i=>i.dayOfWeek===e&&i.mealType===t)}slotDetail(e,t){return{dayOfWeek:e,mealType:t}}dropRecipe(e,t,r){var i;e.preventDefault(),this.dragOverSlot="";const a=(i=e.dataTransfer)==null?void 0:i.getData("text/plain");a&&ot(this,"schedule-drop-recipe",{dayOfWeek:t,mealType:r,recipeId:a})}multiplier(e,t,r){return this.multipliers[`${e}-${t}`]??(r==null?void 0:r.servingsMultiplier)??1}renderMultiplier(e,t,r){return this.editMode?d`
      <button
        class="mult-btn"
        @click=${a=>{a.stopPropagation(),ot(this,"schedule-adjust-multiplier",{dayOfWeek:e,mealType:t,delta:-.5})}}
        ?disabled=${r<=.5}
        aria-label="Reducir raciones"
      >−</button>
      <span class="mult-value">x${r.toFixed(1)}</span>
      <button
        class="mult-btn"
        @click=${a=>{a.stopPropagation(),ot(this,"schedule-adjust-multiplier",{dayOfWeek:e,mealType:t,delta:.5})}}
        ?disabled=${r>=5}
        aria-label="Aumentar raciones"
      >+</button>
    `:d`<span class="mult-value">x${r.toFixed(1)}</span>`}slotEvents(e,t){const r=`${e}-${t}`;return{key:r,open:this.editMode?()=>ot(this,"schedule-open-slot",this.slotDetail(e,t)):void 0,dragOver:this.editMode?a=>{a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect="copy")}:void 0,dragEnter:this.editMode?()=>{this.dragOverSlot=r}:void 0,dragLeave:this.editMode?()=>{this.dragOverSlot===r&&(this.dragOverSlot="")}:void 0,drop:this.editMode?a=>this.dropRecipe(a,e,t):void 0}}renderDesktopSlot(e,t){var o,s;const r=this.getMeal(e,t),a=this.slotEvents(e,t),i=["slot",this.dragOverSlot===a.key?"drag-over":"",this.editMode?"clickable":"",r?"":"empty"].filter(Boolean).join(" ");if(!r)return d`
        <div class=${i} @click=${a.open} @dragover=${a.dragOver}
          @dragenter=${a.dragEnter} @dragleave=${a.dragLeave} @drop=${a.drop}>
          ${this.editMode?d`<span class="add-icon">+</span>`:"—"}
        </div>
      `;const n=this.multiplier(e,t,r);return d`
      <div class=${i} @click=${a.open} @dragover=${a.dragOver}
        @dragenter=${a.dragEnter} @dragleave=${a.dragLeave} @drop=${a.drop}>
        <div class="slot-header">
          <div class="slot-name">${((o=r.recipe)==null?void 0:o.name)||"?"}</div>
          <button class="slot-view" @click=${l=>{var c;l.stopPropagation(),ot(this,"schedule-view-recipe",{recipeId:(c=r.recipe)==null?void 0:c.id,mealId:r.id})}} title="Ver receta">👁</button>
          ${this.editMode?d`
            <button class="slot-remove" @click=${l=>{l.stopPropagation(),ot(this,"schedule-remove-slot",this.slotDetail(e,t))}} title="Eliminar">✕</button>
          `:""}
        </div>
        ${(s=r.recipe)!=null&&s.calorias?d`<div class="slot-macro">${Math.round(r.recipe.calorias*n)} kcal</div>`:""}
        ${r.isEatingOut?d`<div class="eating-out">Comer fuera</div>`:""}
        ${this.editMode||n!==1?d`
          <div class="slot-multiplier">${this.renderMultiplier(e,t,n)}</div>
        `:""}
      </div>
    `}renderMobileDay(e,t){const r=this.expandedDay===t,a=gn.map(i=>({type:i,meal:this.getMeal(t,i.value)}));return d`
      <section class="mobile-day">
        <button class="mobile-day-header" @click=${()=>{this.expandedDay=r?null:t}}>
          <span>${e}</span>
          <span class="mobile-day-summary">${a.filter(({meal:i})=>i).length} comidas</span>
          <span class="mobile-day-arrow ${r?"open":""}">▶</span>
        </button>
        ${r?d`<div class="mobile-day-body">
          ${a.map(({type:i,meal:n})=>{var l,c;const o=this.slotEvents(t,i.value),s=this.multiplier(t,i.value,n);return d`
              <div class="mobile-meal ${this.editMode?"clickable":""} ${this.dragOverSlot===o.key?"drag-over":""}"
                @click=${o.open} @dragover=${o.dragOver} @dragenter=${o.dragEnter}
                @dragleave=${o.dragLeave} @drop=${o.drop}>
                <div class="mobile-meal-type">${i.label}</div>
                ${n?d`
                  <div class="mobile-meal-name">${((l=n.recipe)==null?void 0:l.name)||"?"}</div>
                  <button class="slot-view" @click=${u=>{var p;u.stopPropagation(),ot(this,"schedule-view-recipe",{recipeId:(p=n.recipe)==null?void 0:p.id,mealId:n.id})}} title="Ver receta">👁</button>
                  ${n.isEatingOut?d`<span class="eating-out">Comer fuera</span>`:""}
                  <div class="mobile-meal-kcal">${(c=n.recipe)!=null&&c.calorias?`${Math.round(n.recipe.calorias*s)} kcal`:""}</div>
                  <div class="mobile-multiplier">${this.renderMultiplier(t,i.value,s)}</div>
                  ${this.editMode?d`
                    <button class="slot-remove" @click=${u=>{u.stopPropagation(),ot(this,"schedule-remove-slot",this.slotDetail(t,i.value))}}>✕</button>
                  `:""}
                `:d`<div class="mobile-meal-empty">${this.editMode?"+ Añadir receta":"—"}</div>`}
              </div>
            `})}
        </div>`:""}
      </section>
    `}render(){return d`
      <div class="desktop-grid">
        <div class="grid">
          <div class="label-cell"></div>
          ${Pa.map(e=>d`<div class="header-cell">${e}</div>`)}
          ${gn.map(e=>d`
            <div class="label-cell">${e.label}</div>
            ${Pa.map((t,r)=>this.renderDesktopSlot(r+1,e.value))}
          `)}
        </div>
      </div>
      <div class="mobile-list">
        ${Pa.map((e,t)=>this.renderMobileDay(e,t+1))}
      </div>
    `}};_t.styles=H`
    :host { display: block; }
    .grid { display: grid; grid-template-columns: 100px repeat(7, 1fr); gap: 0.375rem; overflow-x: auto; }
    .header-cell, .label-cell { font-size: 0.6875rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem 0.25rem; }
    .header-cell { text-align: center; }
    .label-cell { display: flex; align-items: center; }
    .slot { background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); padding: 0.375rem; min-height: 52px; font-size: 0.6875rem; display: flex; flex-direction: column; justify-content: center; }
    .slot.empty { color: var(--text-muted); font-style: italic; align-items: center; }
    .clickable { cursor: pointer; }
    .slot.clickable { border-color: var(--primary); border-style: dashed; }
    .slot.clickable:hover { box-shadow: 0 0 0 2px rgb(111 125 92 / 18%); }
    .drag-over { border-color: var(--etxa-color-success); background: var(--etxa-color-success-soft); }
    .slot-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.25rem; }
    .slot-name { font-weight: 600; color: var(--text); line-height: 1.2; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    button { font: inherit; }
    .slot-view, .slot-remove { background: none; border: none; cursor: pointer; padding: 0.15rem; line-height: 1; opacity: 0.55; }
    .slot-view { color: var(--text-muted); }
    .slot-remove { color: var(--etxa-color-danger); }
    .slot-macro { font-size: 0.625rem; color: var(--text-muted); margin-top: 0.125rem; }
    .add-icon { font-size: 1rem; font-weight: 700; color: var(--primary); }
    .eating-out { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; padding: 0.0625rem 0.25rem; border-radius: 3px; background: var(--etxa-color-warning-soft); color: var(--etxa-color-warning-strong); }
    .slot-multiplier, .mobile-multiplier { display: flex; align-items: center; gap: 0.25rem; margin-top: 0.25rem; font-size: 0.625rem; }
    .mult-btn { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 0 0.375rem; font-size: 0.75rem; line-height: 1.25rem; cursor: pointer; color: var(--text); font-weight: 700; }
    .mult-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .mult-value { font-weight: 600; color: var(--text-muted); min-width: 2rem; text-align: center; }
    .mobile-list { display: none; }
    .mobile-day { background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-md); margin-bottom: 0.75rem; overflow: hidden; }
    .mobile-day-header { width: 100%; display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; cursor: pointer; font-weight: 600; font-size: 0.95rem; color: var(--text); background: var(--etxa-color-surface-muted); border: none; text-align: left; }
    .mobile-day-summary { font-weight: 400; font-size: 0.8rem; color: var(--text-muted); }
    .mobile-day-arrow { margin-left: auto; font-size: 0.7rem; color: var(--text-muted); transition: transform 0.2s; }
    .mobile-day-arrow.open { transform: rotate(90deg); }
    .mobile-day-body { border-top: 1px solid var(--border); }
    .mobile-meal { display: grid; grid-template-columns: 80px 1fr auto auto auto; gap: 0.5rem; align-items: center; padding: 0.625rem 1rem; border-bottom: 1px solid var(--etxa-color-surface-hover); font-size: 0.85rem; }
    .mobile-meal-type { font-weight: 600; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .mobile-meal-name { font-weight: 500; grid-column: 2; }
    .mobile-meal-kcal { font-size: 0.75rem; color: var(--primary); font-weight: 700; }
    .mobile-meal-empty { color: var(--text-muted); font-style: italic; grid-column: 2; }
    @media (max-width: 768px) {
      .desktop-grid { display: none; }
      .mobile-list { display: block; }
    }
  `;vr([j({attribute:!1})],_t.prototype,"plan",2);vr([j({type:Boolean})],_t.prototype,"editMode",2);vr([j({attribute:!1})],_t.prototype,"multipliers",2);vr([v()],_t.prototype,"expandedDay",2);vr([v()],_t.prototype,"dragOverSlot",2);_t=vr([Y("plan-week-schedule")],_t);var Np=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,ia=(e,t,r,a)=>{for(var i=a>1?void 0:a?zp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Np(t,r,i),i};function Er(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}let Gt=class extends W{constructor(){super(...arguments),this.recipe=null,this.loading=!1,this.canCook=!1,this.cooking=!1}difficultyLabel(e){return e==="FACIL"?"Fácil":e==="MEDIA"?"Media":"Difícil"}render(){var e;return d`
      <div class="overlay" @click=${()=>Er(this,"detail-close")}></div>
      <article class="dialog" role="dialog" aria-modal="true" aria-label="Detalle de receta">
        ${this.loading?d`<div class="loading">Cargando receta...</div>`:this.recipe?d`
            <header>
              <h3>${this.recipe.name}</h3>
              <button class="close" @click=${()=>Er(this,"detail-close")} aria-label="Cerrar">✕</button>
            </header>
            <div class="body">
              <div class="meta">
                ${this.recipe.difficulty?d`<span class="badge">${this.difficultyLabel(this.recipe.difficulty)}</span>`:""}
                ${this.recipe.timeMinutes?d`<span>⏱ ${this.recipe.timeMinutes} min</span>`:""}
                ${this.recipe.servings?d`<span>🍽 ${this.recipe.servings} porciones</span>`:""}
              </div>
              ${this.recipe.description?d`<p class="description">${this.recipe.description}</p>`:""}
              <div class="macros">
                ${this.recipe.calorias!=null?d`<span><strong>${this.recipe.calorias}</strong> kcal</span>`:""}
                ${this.recipe.proteinas!=null?d`<span><strong>${this.recipe.proteinas}g</strong> proteína</span>`:""}
                ${this.recipe.carbos!=null?d`<span><strong>${this.recipe.carbos}g</strong> carbohidratos</span>`:""}
                ${this.recipe.grasas!=null?d`<span><strong>${this.recipe.grasas}g</strong> grasa</span>`:""}
              </div>
              ${(e=this.recipe.ingredients)!=null&&e.length?d`
                <section>
                  <h4>Ingredientes</h4>
                  <ul>
                    ${this.recipe.ingredients.map(t=>{var r;return d`
                      <li>${t.quantity} ${t.unit==="UNIDAD"?"ud":t.unit} ${((r=t.food)==null?void 0:r.name)||"—"}</li>
                    `})}
                  </ul>
                </section>
              `:""}
              ${this.recipe.instructions?d`
                <section>
                  <h4>Paso a paso</h4>
                  <ol>
                    ${this.recipe.instructions.split(`
`).filter(t=>t.trim()).map(t=>d`<li>${t}</li>`)}
                  </ol>
                </section>
              `:""}
            </div>
            <footer>
              <button class="outline" @click=${()=>Er(this,"detail-close")}>Cerrar</button>
              ${this.recipe.familyId?d`<button class="outline" @click=${()=>Er(this,"detail-edit")}>Editar</button>`:""}
              ${this.canCook?d`
                <button class="cooked" @click=${()=>Er(this,"detail-cook")} ?disabled=${this.cooking}>
                  ${this.cooking?"Procesando...":"Cocinado!"}
                </button>
              `:""}
            </footer>
          `:""}
      </article>
    `}};Gt.styles=H`
    .overlay { position: fixed; inset: 0; background: rgb(46 46 46 / 38%); z-index: 200; }
    .dialog {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-md);
      box-shadow: var(--etxa-shadow-md);
      z-index: 210;
      width: 560px;
      max-width: 92vw;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
    }
    header { display: flex; align-items: flex-start; padding: 1.25rem 1.5rem 1rem; border-bottom: 1px solid var(--border); }
    h3 { margin: 0; font-size: 1.125rem; flex: 1; }
    button { font: inherit; cursor: pointer; }
    .close { background: none; border: none; font-size: 1.25rem; color: var(--text-muted); padding: 0.25rem; }
    .body { padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; }
    .meta { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; font-size: 0.8125rem; color: var(--text-muted); }
    .badge { font-size: 0.6875rem; font-weight: 600; padding: 0.125rem 0.5rem; border-radius: 999px; background: var(--etxa-color-primary-soft); color: var(--primary); }
    .description { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5; }
    .macros { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
    .macros span { background: var(--etxa-color-surface-muted); padding: 0.25rem 0.625rem; border-radius: var(--etxa-radius-sm); font-size: 0.8125rem; color: var(--text-muted); }
    .macros strong { color: var(--text); }
    section { margin-bottom: 1rem; }
    h4 { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 0.5rem; }
    ul, ol { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--text); }
    li { line-height: 1.6; }
    ol li { margin-bottom: 0.25rem; }
    footer { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-top: 1px solid var(--border); gap: 0.5rem; }
    footer button { padding: 0.5rem 1rem; border-radius: var(--etxa-radius-sm); font-size: 0.8125rem; font-weight: 600; }
    .outline { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .cooked { background: var(--etxa-color-success); color: white; border: none; }
    .cooked:disabled { opacity: 0.6; cursor: not-allowed; }
    .loading { padding: 2rem; text-align: center; color: var(--text-muted); }
  `;ia([j({attribute:!1})],Gt.prototype,"recipe",2);ia([j({type:Boolean})],Gt.prototype,"loading",2);ia([j({type:Boolean})],Gt.prototype,"canCook",2);ia([j({type:Boolean})],Gt.prototype,"cooking",2);Gt=ia([Y("recipe-detail-dialog")],Gt);var Lp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,We=(e,t,r,a)=>{for(var i=a>1?void 0:a?Bp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Lp(t,r,i),i};function _a(e,t,r){e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0}))}let De=class extends W{constructor(){super(...arguments),this.dayLabel="",this.mealType="",this.mealTypeLabel="",this.recipes=[],this.loading=!1,this.assigning=!1,this.eatingOut=!1,this.search="",this.showAll=!1}get matchingMealTypeCount(){return this.mealType?this.recipes.filter(e=>{var t;return(t=e.mealType)==null?void 0:t.includes(this.mealType)}).length:this.recipes.length}get filteredRecipes(){const e=!this.showAll&&this.mealType?this.recipes.filter(r=>{var a;return(a=r.mealType)==null?void 0:a.includes(this.mealType)}):this.recipes,t=this.search.toLocaleLowerCase("es").trim();return t?e.filter(r=>r.name.toLocaleLowerCase("es").includes(t)):e}startDrag(e,t){var r;this.assigning||((r=e.dataTransfer)==null||r.setData("text/plain",t),e.dataTransfer&&(e.dataTransfer.effectAllowed="copy"))}render(){return d`
      <div class="overlay" @click=${()=>_a(this,"picker-close")}></div>
      <aside class="panel" aria-label="Elegir receta">
        <header>
          <h3>Elegir receta</h3>
          <button class="close" @click=${()=>_a(this,"picker-close")} aria-label="Cerrar">✕</button>
        </header>
        <div class="context">
          ${this.dayLabel}, ${this.mealTypeLabel}
          <small>Arrastra una receta a una celda o haz clic para asignar</small>
          ${this.recipes.length>0&&this.matchingMealTypeCount<this.recipes.length?d`
            <label>
              <input
                type="checkbox"
                .checked=${this.showAll}
                @change=${e=>{this.showAll=e.target.checked}}
              >
              Mostrar todas las recetas (${this.recipes.length})
            </label>
          `:""}
          <label>
            <input
              type="checkbox"
              .checked=${this.eatingOut}
              @change=${e=>_a(this,"picker-eating-out-change",e.target.checked)}
            >
            Comer fuera — excluir de la lista de la compra, sí contar en nutrición
          </label>
        </div>
        <div class="search">
          <input
            type="search"
            placeholder="Buscar receta..."
            .value=${this.search}
            @input=${e=>{this.search=e.target.value}}
          >
        </div>
        <div class="list">
          ${this.loading?d`<div class="message">Cargando recetas...</div>`:this.filteredRecipes.length===0?d`<div class="message">${this.search?"No hay recetas que coincidan":"No hay recetas disponibles"}</div>`:this.filteredRecipes.map(e=>d`
                <button
                  class="recipe ${this.assigning?"disabled":""}"
                  draggable="true"
                  ?disabled=${this.assigning}
                  @dragstart=${t=>this.startDrag(t,e.id)}
                  @click=${()=>_a(this,"picker-assign",e.id)}
                >
                  <span>
                    <strong>${e.name}</strong>
                    <small>${e.timeMinutes?`${e.timeMinutes} min`:""} ${e.difficulty?`· ${e.difficulty}`:""}</small>
                  </span>
                  <b>${e.calorias?`${e.calorias} kcal`:""}</b>
                </button>
              `)}
        </div>
      </aside>
    `}};De.styles=H`
    .overlay { position: fixed; inset: 0; background: rgb(46 46 46 / 38%); z-index: 150; }
    .panel {
      position: fixed;
      inset: 0 0 0 auto;
      width: 380px;
      max-width: 90vw;
      background: var(--surface);
      border-left: 1px solid var(--border);
      box-shadow: -4px 0 24px rgb(46 46 46 / 38%);
      z-index: 160;
      display: flex;
      flex-direction: column;
      animation: slide-in 0.2s ease-out;
    }
    @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
    header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; border-bottom: 1px solid var(--border); }
    h3 { font-size: 1rem; margin: 0; }
    button { font: inherit; }
    .close { background: none; border: none; font-size: 1.25rem; color: var(--text-muted); cursor: pointer; padding: 0.25rem; }
    .context { font-size: 0.75rem; color: var(--text-muted); padding: 0.5rem 1.25rem; border-bottom: 1px solid var(--border); }
    .context small { display: block; font-size: 0.6875rem; margin-top: 0.25rem; }
    label { display: flex; align-items: center; gap: 0.375rem; margin-top: 0.5rem; cursor: pointer; }
    input[type='checkbox'] { accent-color: var(--primary); }
    .search { padding: 0.75rem 1.25rem; border-bottom: 1px solid var(--border); }
    .search input { width: 100%; box-sizing: border-box; padding: 0.5rem 0.625rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font: inherit; }
    .search input:focus { border-color: var(--primary); outline: none; }
    .list { flex: 1; overflow-y: auto; padding: 0.5rem; }
    .recipe {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      padding: 0.625rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-sm);
      color: var(--text);
      background: var(--surface);
      cursor: grab;
      margin-bottom: 0.375rem;
    }
    .recipe:hover { border-color: var(--primary); background: var(--etxa-color-surface-muted); }
    .recipe.disabled { opacity: 0.5; cursor: not-allowed; }
    .recipe span, .recipe small { display: block; }
    .recipe strong { font-size: 0.8125rem; }
    .recipe small { font-size: 0.6875rem; color: var(--text-muted); margin-top: 0.125rem; }
    .recipe b { font-size: 0.75rem; color: var(--primary); white-space: nowrap; }
    .message { text-align: center; padding: 2rem 1rem; color: var(--text-muted); font-size: 0.8125rem; }
    @media (max-width: 768px) {
      .panel { width: 100vw; max-width: 100vw; border-left: none; }
      .overlay { display: none; }
    }
  `;We([j()],De.prototype,"dayLabel",2);We([j()],De.prototype,"mealType",2);We([j()],De.prototype,"mealTypeLabel",2);We([j({attribute:!1})],De.prototype,"recipes",2);We([j({type:Boolean})],De.prototype,"loading",2);We([j({type:Boolean})],De.prototype,"assigning",2);We([j({type:Boolean})],De.prototype,"eatingOut",2);We([v()],De.prototype,"search",2);We([v()],De.prototype,"showAll",2);De=We([Y("recipe-picker-panel")],De);var jp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,q=(e,t,r,a)=>{for(var i=a>1?void 0:a?Kp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&jp(t,r,i),i};const Ko="mpp.useExpiring",qo="mpp.expiryWarningDismissedWeek";let B=class extends W{constructor(){super(...arguments),this._plan=null,this._loading=!0,this._error="",this._fitNotice=null,this._generating=!1,this._deleting=!1,this._useExpiring=!0,this._expiring=[],this._expiryDismissed=!1,this._progress=null,this._progressArray=null,this._showMenu=!1,this._editMode=!1,this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._allRecipes=[],this._panelLoading=!1,this._assigning=!1,this._isEatingOut=!1,this._multipliers={},this._members=[],this._selectedMemberId="",this._showSaveTemplate=!1,this._showLoadTemplate=!1,this._templateName="",this._templates=[],this._savingTemplate=!1,this._loadingTemplates=!1,this._applyingTemplate=!1,this._showRepeatWeek=!1,this._history=[],this._loadingHistory=!1,this._repeating=!1,this._detailRecipe=null,this._detailMealId=null,this._showRecipeDetail=!1,this._detailLoading=!1,this._cooking={},this._cookingSummary=null,this._showCookedSummary=!1,this._docClickHandler=e=>{this._showMenu&&(e.composedPath().some(a=>{var i,n;return(n=(i=a.classList)==null?void 0:i.contains)==null?void 0:n.call(i,"menu-container")})||(this._showMenu=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._docClickHandler),this._restorePreferences(),this._loadMembers().then(()=>this._loadPlan()),this._loadExpiring()}_restorePreferences(){try{this._useExpiring=localStorage.getItem(Ko)!=="false",this._expiryDismissed=localStorage.getItem(qo)===this._weekKey()}catch{}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._docClickHandler)}async _loadMembers(){var e,t;try{const r=await ea.me();this._members=((e=r.family)==null?void 0:e.members)||[];const a=this._members.find(i=>i.dailyCalories);this._selectedMemberId=(a==null?void 0:a.id)||((t=this._members[0])==null?void 0:t.id)||""}catch{this._members=[]}}async _loadPlan(){var e,t;this._loading=!0,this._error="";try{if(this._plan=await Te.current(this._selectedMemberId||void 0),(t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length){this._loadProgress();const r={};for(const a of this._plan.meals)r[`${a.dayOfWeek}-${a.mealType}`]=a.servingsMultiplier??1;this._multipliers=r}}catch(r){this._plan=null,this._error=oe(r,"Error al cargar el plan")}finally{this._loading=!1}}async _loadProgress(){try{const e=await Te.progress(this._selectedMemberId||void 0);Array.isArray(e)?(this._progressArray=e,this._progress=null):(this._progress=e,this._progressArray=null)}catch{this._progress=null,this._progressArray=null}}_onMemberChange(e){const t=e.target.value;this._selectedMemberId=t,this._loadPlan()}hasMeals(){var e,t;return!!((t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length)}async _generatePlan(){var e;this._generating=!0,this._error="",this._fitNotice=null;try{const t=await Te.generate(this._selectedMemberId||void 0,this._useExpiring);this._plan=t,this._fitNotice=((e=t==null?void 0:t.fit)==null?void 0:e.message)??null,this._progress=null,this._loadProgress()}catch(t){this._error=oe(t,"Error al generar el plan")}finally{this._generating=!1}}_toggleUseExpiring(e){this._useExpiring=e.target.checked;try{localStorage.setItem(Ko,String(this._useExpiring))}catch{}}async _loadExpiring(){try{const e=await Xe.expiring();this._expiring=e.items||[]}catch{this._expiring=[]}}_unusedExpiring(){var t,r;const e=new Set;for(const a of((t=this._plan)==null?void 0:t.meals)||[])for(const i of((r=a.recipe)==null?void 0:r.ingredients)||[])i.foodId&&e.add(i.foodId);return this._expiring.filter(a=>!e.has(a.foodId))}_dismissExpiryWarning(){this._expiryDismissed=!0;try{localStorage.setItem(qo,this._weekKey())}catch{}}_weekKey(){const e=new Date,t=e.getDay(),r=new Date(e);r.setDate(e.getDate()-t+(t===0?-6:1));const a=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),n=String(r.getDate()).padStart(2,"0");return`${a}-${i}-${n}`}async _deletePlan(){if(confirm("¿Eliminar el plan semanal actual?")){this._deleting=!0,this._error="";try{await Te.remove(),this._plan=null,this._progress=null,this._progressArray=null,this._editMode=!1,this._showMenu=!1}catch(e){this._error=oe(e,"Error al eliminar el plan")}finally{this._deleting=!1}}}_toggleMenu(){this._showMenu=!this._showMenu}_enterEditMode(){this._editMode=!0,this._showMenu=!1}_exitEditMode(){this._editMode=!1,this._closePanel()}async _openPanel(e,t){this._panelDay=e,this._panelMealType=t,this._showPanel=!0;const r=this._getMeal(e,t);this._isEatingOut=(r==null?void 0:r.isEatingOut)??!1,this._panelLoading=!0;try{this._allRecipes=await er.list()}catch{this._allRecipes=[]}finally{this._panelLoading=!1}}_closePanel(){this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._allRecipes=[]}async _clearPlan(){if(confirm("¿Limpiar todas las comidas del plan?")){this._error="",this._progress=null,this._progressArray=null;try{await Te.remove(),await this._loadPlan()}catch(e){this._error=oe(e,"Error al limpiar el plan")}}}async _removeSlotMeal(e,t){if(confirm("¿Eliminar esta comida del plan?")){this._error="";try{await Te.removeSlot(e,t,this._selectedMemberId||void 0),await this._loadPlan()}catch(r){this._error=oe(r,"Error al eliminar comida")}}}async _assignSlot(e,t,r){this._assigning=!0;const a=`${e}-${t}`,i=this._multipliers[a]??1,n=this._isEatingOut;console.log("[assignSlot] payload:",{dayOfWeek:e,mealType:t,recipeId:r,servingsMultiplier:i,isEatingOut:n});try{await Te.assignSlot({dayOfWeek:e,mealType:t,recipeId:r,servingsMultiplier:i,isEatingOut:n,assignedToMemberId:this._selectedMemberId||void 0}),this._showPanel&&e===this._panelDay&&t===this._panelMealType&&this._closePanel(),await this._loadPlan()}catch(o){this._error=oe(o,"Error al asignar receta")}finally{this._assigning=!1}}_assignFromPanel(e){this._assignSlot(this._panelDay,this._panelMealType,e.detail)}_toggleEatingOut(e){var r;this._isEatingOut=e.detail;const t=this._getMeal(this._panelDay,this._panelMealType);(r=t==null?void 0:t.recipe)!=null&&r.id&&this._isEatingOut!==t.isEatingOut&&this._assignSlot(this._panelDay,this._panelMealType,t.recipe.id)}_openScheduleSlot(e){this._openPanel(e.detail.dayOfWeek,e.detail.mealType)}_removeScheduleSlot(e){this._removeSlotMeal(e.detail.dayOfWeek,e.detail.mealType)}_viewScheduleRecipe(e){this._openRecipeDetail(e.detail.recipeId,e.detail.mealId)}_adjustScheduleMultiplier(e){const{dayOfWeek:t,mealType:r,delta:a}=e.detail;this._adjustMultiplier(t,r,a)}_dropScheduleRecipe(e){if(this._assigning)return;const{dayOfWeek:t,mealType:r,recipeId:a}=e.detail;this._assignSlot(t,r,a)}_adjustMultiplier(e,t,r){const a=`${e}-${t}`,i=this._multipliers[a]??1,n=Math.round((i+r)*10)/10;n<.5||n>5||(this._multipliers={...this._multipliers,[a]:n},this._persistMultiplier(e,t))}async _persistMultiplier(e,t){var n;const r=`${e}-${t}`,a=this._multipliers[r]??1,i=this._getMeal(e,t);if((n=i==null?void 0:i.recipe)!=null&&n.id)try{await Te.assignSlot({dayOfWeek:e,mealType:t,recipeId:i.recipe.id,servingsMultiplier:a}),await this._loadPlan()}catch(o){this._error=oe(o,"Error al actualizar ración"),await this._loadPlan()}}async _saveTemplate(){if(this._templateName.trim()){this._savingTemplate=!0;try{await xr.create({name:this._templateName.trim()}),this._showSaveTemplate=!1,this._templateName=""}catch(e){this._error=oe(e,"Error al guardar plantilla")}finally{this._savingTemplate=!1}}}async _openLoadTemplate(){this._showLoadTemplate=!0,this._loadingTemplates=!0;try{this._templates=await xr.list()}catch{this._templates=[]}finally{this._loadingTemplates=!1}}async _applyTemplate(e){if(!this._applyingTemplate){this._applyingTemplate=!0,this._error="";try{await xr.apply(e,{assignedToMemberId:this._selectedMemberId||void 0}),this._showLoadTemplate=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=oe(t,"Error al aplicar plantilla")}finally{this._applyingTemplate=!1}}}async _deleteTemplate(e,t){if(t.stopPropagation(),!!confirm("¿Eliminar esta plantilla?"))try{await xr.remove(e),this._templates=await xr.list()}catch(r){this._error=oe(r,"Error al eliminar plantilla")}}async _openRepeatWeek(){this._showRepeatWeek=!0,this._loadingHistory=!0;try{this._history=await Te.history()}catch{this._history=[]}finally{this._loadingHistory=!1}}_openRepeatWeekFromMenu(){this._showMenu=!1,confirm("¿Reemplazar el plan actual con una semana anterior?")&&this._openRepeatWeek()}_formatWeekRange(e){const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const a=i=>i.toLocaleDateString("es-ES",{day:"numeric",month:"short"});return`${a(t)} - ${a(r)}`}async _repeatWeek(e){if(!this._repeating){this._repeating=!0,this._error="";try{await Te.repeat({sourcePlanId:e,assignedToMemberId:this._selectedMemberId||void 0}),this._showRepeatWeek=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=oe(t,"Error al repetir el plan")}finally{this._repeating=!1}}}async _openRecipeDetail(e,t,r){if(r==null||r.stopPropagation(),!!e){this._detailLoading=!0,this._detailMealId=t??null,this._showRecipeDetail=!0;try{this._detailRecipe=await er.get(e)}catch{this._detailRecipe=null,this._showRecipeDetail=!1}finally{this._detailLoading=!1}}}_closeRecipeDetail(){this._showRecipeDetail=!1,this._detailRecipe=null,this._detailMealId=null}_openEditFromDetail(){this._showRecipeDetail=!1,window.location.hash="#/recetas"}async _markCooked(e){const t=this._detailMealId;if(!(!(e!=null&&e.id)||!t||this._cooking[t])){this._cooking={...this._cooking,[t]:!0};try{const r=await Te.cook(t);this._cookingSummary=r.summary,this._showCookedSummary=!0,this._cooking={...this._cooking,[t]:!1},await this._loadPlan(),await this._loadExpiring()}catch(r){this._error=oe(r,"Error al marcar como cocinado"),this._cooking={...this._cooking,[t]:!1}}}}_getMeal(e,t){var r,a;return(a=(r=this._plan)==null?void 0:r.meals)==null?void 0:a.find(i=>i.dayOfWeek===e&&i.mealType===t)}_renderExpiryWarning(){if(this._expiryDismissed||!this._plan||this._plan.autoGenerated||this._expiring.length===0)return"";const e=new Set(this._unusedExpiring().map(t=>t.id));return d`
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
          ${this._expiring.map(t=>d`
            <li class=${e.has(t.id)?"unused":""}>
              ${t.foodName} — ${t.quantity} ${t.unit==="UNIDAD"?"ud":t.unit}
              <span class="expiry-when">
                ${t.expired?"caducado":t.daysLeft===0?"caduca hoy":t.daysLeft===1?"caduca mañana":`caduca en ${t.daysLeft} días`}
              </span>
            </li>
          `)}
        </ul>
      </div>
    `}_renderStandardProfileWarning(){const e=this._members.filter(a=>a.isStandardProfile);if(e.length===0)return"";const t=e.map(a=>a.name),r=t.length===1?"":` para ${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`;return d`
      <div class="expiry-warning standard-profile-warning">
        <strong>⚠️ Plan estándar${r}</strong>
        <p class="expiry-warning-note">
          Está calculado para una persona adulta de unos 70 kg (2.000 kcal al día), no con datos
          reales. Completa el perfil para ajustar calorías, raciones y lista de la compra.
          <a href="#/perfil">Ir a Perfil</a>
        </p>
      </div>
    `}render(){var t,r,a;if(this._loading)return d`<p>Cargando plan...</p>`;const e=this.hasMeals();return d`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Plan semanal</h2>
          ${this._members.length>0?d`
            <select class="member-select" @change=${this._onMemberChange}>
              <option value="" ?selected=${this._selectedMemberId===""}>Todos los miembros</option>
              ${this._members.map(i=>d`
                <option value=${i.id} ?selected=${this._selectedMemberId===i.id}>${i.name}</option>
              `)}
            </select>
          `:""}
          ${this._editMode?d`<span class="edit-badge">Editando</span>`:""}
          ${this._editMode?d`<button class="btn-outline btn-sm" @click=${this._clearPlan}>Limpiar todo</button>`:""}
          <label class="expiry-toggle" title="Al generar, prioriza recetas que usan lo que caduca antes">
            <input type="checkbox" .checked=${this._useExpiring} @change=${this._toggleUseExpiring} />
            Aprovechar lo que caduca
          </label>
        </div>

        ${e?d`
            <div class="menu-container">
              <button class="menu-trigger" @click=${this._toggleMenu}>⋮</button>
              ${this._showMenu?d`
                <div class="menu-dropdown">
                  ${this._editMode?d`<button class="menu-item" @click=${this._exitEditMode}>✓ Terminar edición</button>`:d`<button class="menu-item" @click=${this._enterEditMode}>✏️ Editar plan</button>`}
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
          `:d`
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

      ${this._error?d`<div class="error">${this._error}</div>`:""}

      ${this._fitNotice?d`
          <div class="expiry-warning fit-warning">
            <strong>El plan no llega a tus objetivos</strong>
            <p class="expiry-warning-note">${this._fitNotice}</p>
            <p class="expiry-warning-note">
              Es la mejor combinación que se ha encontrado con las recetas disponibles. Puedes
              ajustar raciones a mano o añadir recetas que encajen mejor.
            </p>
          </div>
        `:""}

      ${this._renderStandardProfileWarning()}
      ${this._renderExpiryWarning()}

      ${!e&&!this._editMode?d`
          <div class="empty-state">
            <p>Aún no tienes un plan semanal. Genera uno automático o añade recetas manualmente desde el modo edición.</p>
          </div>
        `:d`
          <plan-week-schedule
            .plan=${this._plan}
            .editMode=${this._editMode}
            .multipliers=${this._multipliers}
            @schedule-open-slot=${this._openScheduleSlot}
            @schedule-remove-slot=${this._removeScheduleSlot}
            @schedule-view-recipe=${this._viewScheduleRecipe}
            @schedule-adjust-multiplier=${this._adjustScheduleMultiplier}
            @schedule-drop-recipe=${this._dropScheduleRecipe}
          ></plan-week-schedule>
          ${(t=this._progress)!=null&&t.current?d`<plan-progress .progress=${this._progress}></plan-progress>`:""}
          ${(r=this._progressArray)==null?void 0:r.map(i=>i!=null&&i.current?d`
              <plan-progress
                .progress=${i}
                .heading=${i.memberName||"Miembro"}
              ></plan-progress>
            `:"")}
        `}

      ${this._showPanel?d`
        <recipe-picker-panel
          .dayLabel=${Pa[this._panelDay-1]}
          .mealType=${this._panelMealType}
          .mealTypeLabel=${((a=gn.find(i=>i.value===this._panelMealType))==null?void 0:a.label)||""}
          .recipes=${this._allRecipes}
          .loading=${this._panelLoading}
          .assigning=${this._assigning}
          .eatingOut=${this._isEatingOut}
          @picker-close=${this._closePanel}
          @picker-assign=${this._assignFromPanel}
          @picker-eating-out-change=${this._toggleEatingOut}
        ></recipe-picker-panel>
      `:""}
      ${this._showSaveTemplate?d`
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
              @input=${i=>{this._templateName=i.target.value}}
              @keydown=${i=>{i.key==="Enter"&&this._saveTemplate()}}
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

      ${this._showLoadTemplate?d`
        <div class="modal-overlay" @click=${()=>{this._showLoadTemplate=!1}}></div>
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3>Cargar plantilla</h3>
            <button class="close-btn" @click=${()=>{this._showLoadTemplate=!1}}>✕</button>
          </div>
          <div class="modal-body">
            ${this._loadingTemplates?d`<div class="panel-loading">Cargando plantillas...</div>`:this._templates.length===0?d`<div class="panel-empty">No hay plantillas guardadas</div>`:d`
                  <div class="template-list">
                    ${this._templates.map(i=>d`
                      <div class="template-item ${this._applyingTemplate?"disabled":""}" @click=${this._applyingTemplate?void 0:()=>this._applyTemplate(i.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${i.name}</div>
                          <div class="template-item-meta">${i.isSystem?"Plantilla del sistema":"Plantilla personal"}</div>
                        </div>
                        ${i.isSystem?"":d`
                          <button class="template-item-delete" @click=${n=>this._deleteTemplate(i.id,n)} title="Eliminar plantilla">✕</button>
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

      ${this._showRepeatWeek?d`
        <div class="modal-overlay" @click=${()=>{this._showRepeatWeek=!1}}></div>
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3>Repetir semana</h3>
            <button class="close-btn" @click=${()=>{this._showRepeatWeek=!1}}>✕</button>
          </div>
          <div class="modal-body">
            ${this._loadingHistory?d`<div class="panel-loading">Cargando semanas anteriores...</div>`:this._history.length===0?d`<div class="panel-empty">No hay planes de semanas anteriores</div>`:d`
                  <div class="template-list">
                    ${this._history.map(i=>d`
                      <div class="template-item ${this._repeating?"disabled":""}" @click=${this._repeating?void 0:()=>this._repeatWeek(i.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${this._formatWeekRange(i.weekStart)}</div>
                          <div class="template-item-meta">${i.mealCount} comidas · ${i.autoGenerated?"generado automáticamente":"manual"}</div>
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

      ${this._showRecipeDetail?d`
        <recipe-detail-dialog
          .recipe=${this._detailRecipe}
          .loading=${this._detailLoading}
          .canCook=${!!this._detailMealId}
          .cooking=${!!(this._detailMealId&&this._cooking[this._detailMealId])}
          @detail-close=${this._closeRecipeDetail}
          @detail-edit=${this._openEditFromDetail}
          @detail-cook=${()=>this._markCooked(this._detailRecipe)}
        ></recipe-detail-dialog>
      `:""}
      ${this._showCookedSummary?d`
        <div class="modal-overlay" @click=${()=>{this._showCookedSummary=!1}}></div>
        <div class="modal" @click=${i=>i.stopPropagation()}>
          <div class="modal-header">
            <h3>Ingredientes restados de la nevera</h3>
            <button class="close-btn" @click=${()=>{this._showCookedSummary=!1}}>✕</button>
          </div>
          <div class="modal-body">
            <ul class="cooked-summary">
              ${(this._cookingSummary||[]).map(i=>d`
                <li>
                  <span>${i.name}</span>
                  <span>
                    <span class="subtracted">${i.subtracted>0?`-${i.subtracted}${i.unit}`:"sin stock"}</span>
                    <span class="remaining"> (${i.remaining}${i.unit} restantes)</span>
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
    `}};B.styles=Pp;q([v()],B.prototype,"_plan",2);q([v()],B.prototype,"_loading",2);q([v()],B.prototype,"_error",2);q([v()],B.prototype,"_fitNotice",2);q([v()],B.prototype,"_generating",2);q([v()],B.prototype,"_deleting",2);q([v()],B.prototype,"_useExpiring",2);q([v()],B.prototype,"_expiring",2);q([v()],B.prototype,"_expiryDismissed",2);q([v()],B.prototype,"_progress",2);q([v()],B.prototype,"_progressArray",2);q([v()],B.prototype,"_showMenu",2);q([v()],B.prototype,"_editMode",2);q([v()],B.prototype,"_showPanel",2);q([v()],B.prototype,"_panelDay",2);q([v()],B.prototype,"_panelMealType",2);q([v()],B.prototype,"_allRecipes",2);q([v()],B.prototype,"_panelLoading",2);q([v()],B.prototype,"_assigning",2);q([v()],B.prototype,"_isEatingOut",2);q([v()],B.prototype,"_multipliers",2);q([v()],B.prototype,"_members",2);q([v()],B.prototype,"_selectedMemberId",2);q([v()],B.prototype,"_showSaveTemplate",2);q([v()],B.prototype,"_showLoadTemplate",2);q([v()],B.prototype,"_templateName",2);q([v()],B.prototype,"_templates",2);q([v()],B.prototype,"_savingTemplate",2);q([v()],B.prototype,"_loadingTemplates",2);q([v()],B.prototype,"_applyingTemplate",2);q([v()],B.prototype,"_showRepeatWeek",2);q([v()],B.prototype,"_history",2);q([v()],B.prototype,"_loadingHistory",2);q([v()],B.prototype,"_repeating",2);q([v()],B.prototype,"_detailRecipe",2);q([v()],B.prototype,"_detailMealId",2);q([v()],B.prototype,"_showRecipeDetail",2);q([v()],B.prototype,"_detailLoading",2);q([v()],B.prototype,"_cooking",2);q([v()],B.prototype,"_cookingSummary",2);q([v()],B.prototype,"_showCookedSummary",2);B=q([Y("plan-view")],B);var qp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,re=(e,t,r,a)=>{for(var i=a>1?void 0:a?Up(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&qp(t,r,i),i};let J=class extends W{constructor(){super(...arguments),this._items=[],this._expiringIds=new Set,this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._adding=!1,this._splitItem=null,this._splitQuantity=1,this._splitExpiryDate="",this._splitting=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1}connectedCallback(){super.connectedCallback(),this._loadPantry()}async _loadPantry(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([Xe.list(),Xe.expiring()]);this._items=e,this._expiringIds=new Set((t.items||[]).filter(r=>!r.expired).map(r=>r.id))}catch(e){this._error=oe(e,"Error al cargar la nevera")}finally{this._loading=!1}}_groupedItems(){var t;const e=new Map;for(const r of this._items){const a=r.foodId,i=e.get(a);i?(i.total+=r.quantity,i.batches.push(r)):e.set(a,{foodId:a,name:((t=r.food)==null?void 0:t.name)||"?",total:r.quantity,unit:r.unit,batches:[r]})}for(const r of e.values())r.batches.sort((a,i)=>a.expiryDate&&i.expiryDate?a.expiryDate.localeCompare(i.expiryDate):a.expiryDate?-1:i.expiryDate?1:0);return Array.from(e.values()).sort((r,a)=>r.name.localeCompare(a.name))}_batchStatus(e){return e.expiryDate?new Date(e.expiryDate)<new Date(new Date().toDateString())?"expired":this._expiringIds.has(e.id)?"soon":"ok":"none"}_formatUnit(e){return e==="UNIDAD"?"ud":e}async _searchFood(e){const t=e.target.value;if(this._searchQuery=t,t.length<2){this._searchResults=[];return}try{this._searchResults=await ei.search(t)}catch{this._searchResults=[]}}async _selectFood(e){this._selectedFood=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unidadBase||"g"}async _addItem(e){if(e.preventDefault(),!!this._selectedFood){this._adding=!0;try{const t={quantity:Number(this._quantity),unit:this._unit,expiryDate:this._expiryDate||null,purchaseDate:this._purchaseDate||null};this._editingItem?await Xe.update(this._editingItem.id,t):await Xe.add({foodId:this._selectedFood.id,...t}),this._resetFormFields(),this._showAddForm=!1,this._editingItem=null,await this._loadPantry()}catch(t){this._error=oe(t,"Error al guardar el lote")}finally{this._adding=!1}}}async _removeItem(e){try{await Xe.remove(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar el lote"}}_editItem(e){var t;this._editingItem=e,this._selectedFood=e.food,this._searchQuery=((t=e.food)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._expiryDate=e.expiryDate?e.expiryDate.split("T")[0]:"",this._purchaseDate=e.purchaseDate?e.purchaseDate.split("T")[0]:"",this._showAddForm=!0}_openSplit(e){this._splitItem=e,this._splitQuantity=1,this._splitExpiryDate=""}_closeSplit(){this._splitItem=null,this._splitting=!1}async _confirmSplit(e){if(e.preventDefault(),!!this._splitItem){this._splitting=!0;try{await Xe.split(this._splitItem.id,{quantity:Number(this._splitQuantity),expiryDate:this._splitExpiryDate||null}),this._closeSplit(),await this._loadPantry()}catch(t){this._error=oe(t,"Error al dividir el lote"),this._splitting=!1}}}_resetFormFields(){this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._editingItem=null,this._showCreateFood=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetFormFields()}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._searchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},r=await ei.create(t);this._selectFood(r),this._closeCreateFood()}catch(t){this._error=oe(t,"Error al crear alimento")}finally{this._creatingFood=!1}}}_renderBatch(e){const t=this._batchStatus(e),r=e.expiryDate?new Date(e.expiryDate).toLocaleDateString():null;return d`
      <div class="batch ${t}">
        <span class="batch-qty">${e.quantity} ${this._formatUnit(e.unit)}</span>
        <span class="batch-date">
          ${r?d`Caduca: ${r}`:"Sin fecha de caducidad"}
          ${t==="expired"?d`<span class="tag">caducado</span>`:""}
          ${t==="soon"?d`<span class="tag">caduca pronto</span>`:""}
        </span>
        <div class="batch-actions">
          <button class="icon-btn" @click=${()=>this._openSplit(e)} title="Dividir lote">⑂</button>
          <button class="icon-btn" @click=${()=>this._editItem(e)} title="Editar lote">✎</button>
          <button class="icon-btn danger" @click=${()=>this._removeItem(e.id)} title="Eliminar lote">✕</button>
        </div>
      </div>
    `}render(){var t;if(this._loading)return d`<p>Cargando nevera...</p>`;const e=this._groupedItems();return d`
      <div class="top-bar">
        <h2>Nevera</h2>
        <button @click=${this._toggleForm}>
          ${this._showAddForm?"Cancelar":"Añadir alimento"}
        </button>
      </div>

      ${this._error?d`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?d`
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
                ${this._searchResults.length>0?d`
                  <div class="search-results">
                    ${this._searchResults.map(r=>d`
                      <div class="search-result-item" @click=${()=>this._selectFood(r)}>
                        <span>${r.name}</span>
                        <span style="font-size:0.6875rem;color:var(--text-muted)">${r.calorias100g??"?"} kcal/100g</span>
                      </div>
                    `)}
                  </div>
                `:this._searchQuery.length>=2&&!this._selectedFood&&!this._showCreateFood?d`
                  <div class="search-results">
                    <div class="search-result-item create-food" @click=${this._openCreateFood}>
                      + Crear "${this._searchQuery}" como nuevo alimento
                    </div>
                  </div>
                `:""}
              </div>

              ${this._showCreateFood?d`
                <div class="create-food-card">
                  <h4 style="margin:0 0 0.75rem;font-size:0.875rem">Nuevo alimento</h4>
                  <div class="form-row">
                    <label>Nombre</label>
                    <input type="text" .value=${this._createFoodForm.name}
                      @input=${r=>{this._createFoodForm={...this._createFoodForm,name:r.target.value}}}
                      placeholder="Nombre del alimento" />
                  </div>
                  <div class="form-row">
                    <label>Categoría</label>
                    <select .value=${this._createFoodForm.category}
                      @change=${r=>{this._createFoodForm={...this._createFoodForm,category:r.target.value}}}>
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
                        @input=${r=>{this._createFoodForm={...this._createFoodForm,calorias100g:parseFloat(r.target.value)||0}}}
                        step="1" />
                    </div>
                    <div class="form-row">
                      <label>Proteínas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.proteinas100g}
                        @input=${r=>{this._createFoodForm={...this._createFoodForm,proteinas100g:parseFloat(r.target.value)||0}}}
                        step="0.1" />
                    </div>
                  </div>
                  <div class="form-inline">
                    <div class="form-row">
                      <label>Carbohidratos (100g)</label>
                      <input type="number" .value=${this._createFoodForm.carbos100g}
                        @input=${r=>{this._createFoodForm={...this._createFoodForm,carbos100g:parseFloat(r.target.value)||0}}}
                        step="0.1" />
                    </div>
                    <div class="form-row">
                      <label>Grasas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.grasas100g}
                        @input=${r=>{this._createFoodForm={...this._createFoodForm,grasas100g:parseFloat(r.target.value)||0}}}
                        step="0.1" />
                    </div>
                  </div>
                  <div class="form-row">
                    <label>Unidad base</label>
                    <select .value=${this._createFoodForm.unidadBase}
                      @change=${r=>{this._createFoodForm={...this._createFoodForm,unidadBase:r.target.value}}}>
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

            ${this._selectedFood?d`
              <div class="form-inline">
                <div class="form-row">
                  <label>Cantidad</label>
                  <input type="number" .value=${this._quantity} @input=${r=>{this._quantity=r.target.value}} min="0" step="0.1" />
                </div>
                <div class="form-row">
                  <label>Unidad</label>
                  <select .value=${this._unit} @change=${r=>{this._unit=r.target.value}}>
                    <option value="g">g</option>
                    <option value="ml">ml</option>
                    <option value="UNIDAD">UNIDAD</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <label>Fecha de caducidad (opcional)</label>
                <div class="date-field">
                  <input type="date" .value=${this._expiryDate} @input=${r=>{this._expiryDate=r.target.value}} />
                  ${this._expiryDate?d`<button type="button" class="clear-date" @click=${()=>{this._expiryDate=""}}>Quitar</button>`:""}
                </div>
              </div>
              <div class="form-row">
                <label>Fecha de compra (opcional)</label>
                <div class="date-field">
                  <input type="date" .value=${this._purchaseDate} @input=${r=>{this._purchaseDate=r.target.value}} />
                  ${this._purchaseDate?d`<button type="button" class="clear-date" @click=${()=>{this._purchaseDate=""}}>Quitar</button>`:""}
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

      ${e.length===0?d`<div class="empty-state"><p>Tu nevera está vacía. Añade alimentos para empezar.</p></div>`:d`
          <div class="list">
            ${e.map(r=>d`
              <div class="food-group">
                <div class="group-header">
                  <span class="group-name">${r.name}</span>
                  <span class="group-total">
                    ${Math.round(r.total*10)/10} ${this._formatUnit(r.unit)}
                    ${r.batches.length>1?` · ${r.batches.length} lotes`:""}
                  </span>
                </div>
                ${r.batches.map(a=>this._renderBatch(a))}
              </div>
            `)}
          </div>
        `}

      ${this._splitItem?d`
        <div class="modal-overlay" @click=${this._closeSplit}>
          <div class="modal" @click=${r=>r.stopPropagation()}>
            <h3>Dividir lote de ${((t=this._splitItem.food)==null?void 0:t.name)||"?"}</h3>
            <p class="modal-hint">
              Separa parte de los ${this._splitItem.quantity} ${this._formatUnit(this._splitItem.unit)}
              en un lote nuevo con su propia caducidad.
            </p>
            <form @submit=${this._confirmSplit}>
              <div class="form-row">
                <label>Cantidad a separar</label>
                <input type="number" .value=${this._splitQuantity}
                  @input=${r=>{this._splitQuantity=r.target.value}}
                  min="0.1" step="0.1" max=${this._splitItem.quantity} />
              </div>
              <div class="form-row">
                <label>Caducidad del lote nuevo (opcional)</label>
                <input type="date" .value=${this._splitExpiryDate}
                  @input=${r=>{this._splitExpiryDate=r.target.value}} />
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
    `}};J.styles=[Ht,H`
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
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
      padding: 0.75rem;
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-md);
      overflow: hidden;
    }

    .group-header {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding: 0.65rem 1rem;
      background: var(--etxa-color-surface-muted);
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
      border-bottom: 1px solid var(--etxa-color-surface-hover);
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

    .batch.expired .tag { background: var(--etxa-color-danger-hover); color: var(--etxa-color-danger); }
    .batch.soon .tag { background: var(--etxa-color-warning-soft); color: var(--etxa-color-warning-strong); }
    .batch.expired { background: var(--etxa-color-surface); }
    .batch.soon { background: var(--etxa-color-surface); }

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
    .icon-btn.danger:hover { color: var(--etxa-color-danger); }

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
      border-radius: var(--etxa-radius-sm);
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

    .clear-date:hover { background: var(--etxa-color-surface-hover); color: var(--text); }

    .form-inline {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }

    .search-results {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-surface-hover);
    }

    .search-result-item.create-food {
      color: var(--primary);
      font-weight: 600;
      border-top: 1px solid var(--border);
    }

    .create-food-card {
      background: var(--etxa-color-surface-muted);
      border: 1px dashed var(--primary);
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-surface-hover);
    }

    /* Split modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgb(46 46 46 / 38%);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal {
      background: var(--surface);
      border-radius: var(--etxa-radius-md);
      padding: 1.5rem;
      max-width: 420px;
      width: 90%;
      box-shadow: var(--etxa-shadow-md);
    }

    .modal h3 { margin: 0 0 0.35rem; font-size: 1rem; }
    .modal .modal-hint { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem; }

    @media (max-width: 640px) {
      .top-bar { flex-direction: column; align-items: stretch; }
      .search-results { max-height: 30vh; }
      .batch { flex-wrap: wrap; }
      .batch-date { flex-basis: 100%; }
    }
  `];re([v()],J.prototype,"_items",2);re([v()],J.prototype,"_expiringIds",2);re([v()],J.prototype,"_loading",2);re([v()],J.prototype,"_error",2);re([v()],J.prototype,"_showAddForm",2);re([v()],J.prototype,"_editingItem",2);re([v()],J.prototype,"_searchQuery",2);re([v()],J.prototype,"_searchResults",2);re([v()],J.prototype,"_selectedFood",2);re([v()],J.prototype,"_quantity",2);re([v()],J.prototype,"_unit",2);re([v()],J.prototype,"_expiryDate",2);re([v()],J.prototype,"_purchaseDate",2);re([v()],J.prototype,"_adding",2);re([v()],J.prototype,"_splitItem",2);re([v()],J.prototype,"_splitQuantity",2);re([v()],J.prototype,"_splitExpiryDate",2);re([v()],J.prototype,"_splitting",2);re([v()],J.prototype,"_showCreateFood",2);re([v()],J.prototype,"_createFoodForm",2);re([v()],J.prototype,"_creatingFood",2);J=re([Y("pantry-view")],J);var Gp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,ie=(e,t,r,a)=>{for(var i=a>1?void 0:a?Hp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Gp(t,r,i),i};const Vp={FACIL:"Fácil",MEDIA:"Media",DIFICIL:"Difícil"},Wp=["g","ml","UNIDAD"],kr=24;let te=class extends W{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._editRecipe=null,this._isCreating=!1,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._searching=!1,this._savingEdit=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1,this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._totalCount=0,this._visibleCount=kr,this._searchTimeout=null,this._filterTimeout=null}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const e={};this._searchTerm&&(e.search=this._searchTerm),this._ingredientFilter&&(e.ingredient=this._ingredientFilter),this._maxTimeFilter&&(e.maxTime=this._maxTimeFilter),this._items=await er.list(Object.keys(e).length>0?e:void 0),this._totalCount=this._items.length,this._visibleCount=kr}catch(e){this._error=e.message||"Error al cargar recetas",this._items=[]}finally{this._loading=!1}}_onSearchInput(e){const t=e.target.value;this._searchTerm=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onIngredientInput(e){const t=e.target.value;this._ingredientFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onDifficultyChange(e){this._difficultyFilter=e.target.value,this._visibleCount=kr}_onMaxTimeInput(e){const t=e.target.value;this._maxTimeFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_clearFilters(){this._visibleCount=kr,this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._load()}get _filteredItems(){return this._difficultyFilter?this._items.filter(e=>e.difficulty===this._difficultyFilter):this._items}get _visibleItems(){return this._filteredItems.slice(0,this._visibleCount)}async _deleteRecipe(e,t){if(confirm(`¿Eliminar "${t}"?`))try{await er.remove(e),this._items=this._items.filter(r=>r.id!==e)}catch(r){this._error=r.message||"Error al eliminar receta"}}_openEdit(e){this._isCreating=!1,this._editRecipe=e,this._editForm={name:e.name??"",description:e.description??"",instructions:e.instructions??"",difficulty:e.difficulty??"FACIL",timeMinutes:e.timeMinutes??30,servings:e.servings??1},this._editIngredients=(e.ingredients??[]).map(t=>{var r;return{foodId:t.foodId,foodName:((r=t.food)==null?void 0:r.name)??"",quantity:t.quantity,unit:t.unit}}),this._foodSearchQuery="",this._foodSearchResults=[]}_openCreate(){this._isCreating=!0,this._editRecipe={id:null},this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[]}_closeEdit(){this._isCreating=!1,this._editRecipe=null,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._showCreateFood=!1}_onFieldChange(e,t){this._editForm={...this._editForm,[e]:t}}_onIngredientChange(e,t,r){const a=[...this._editIngredients];a[e]={...a[e],[t]:r},this._editIngredients=a}_removeIngredient(e){this._editIngredients=this._editIngredients.filter((t,r)=>r!==e)}_onFoodSearchInput(e){this._foodSearchQuery=e.target.value,this._searchTimeout&&clearTimeout(this._searchTimeout),this._searchTimeout=setTimeout(()=>{this._searchFoods()},300)}async _searchFoods(){const e=this._foodSearchQuery.trim();if(!e){this._foodSearchResults=[];return}this._searching=!0;try{this._foodSearchResults=await ei.search(e)}catch{this._foodSearchResults=[]}finally{this._searching=!1}}async _addIngredient(e){const t=e.id,r=e.name;this._editIngredients=[...this._editIngredients,{foodId:t,foodName:r,quantity:100,unit:"g"}],this._foodSearchQuery="",this._foodSearchResults=[]}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._foodSearchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},r=await ei.create(t);this._addIngredient(r),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}async _saveEdit(){if(!(!this._editRecipe||!this._editForm.name.trim())){this._savingEdit=!0;try{const e={name:this._editForm.name.trim(),description:this._editForm.description.trim()||void 0,instructions:this._editForm.instructions.trim()||void 0,difficulty:this._editForm.difficulty,timeMinutes:this._editForm.timeMinutes,servings:this._editForm.servings,ingredients:this._editIngredients.map(t=>({foodId:t.foodId,quantity:t.quantity,unit:t.unit}))};if(this._isCreating){const t=await er.create(e);this._items=[...this._items,t]}else{const t=await er.update(this._editRecipe.id,e);this._items=this._items.map(r=>r.id===this._editRecipe.id?{...r,...t}:r)}this._closeEdit()}catch(e){this._error=e.message||"Error al guardar receta"}finally{this._savingEdit=!1}}}_renderInstructions(e){const t=e.split(`
`).filter(r=>r.trim());return d`<ol>${t.map(r=>d`<li>${r}</li>`)}</ol>`}_macroBar(e,t,r){if(e==null)return"";const a=Math.round(e/t*100);return d`<span class="macro" title="${r}: ${e}g/${t}g">${r}: ${e}g <span class="pct">${a}%</span></span>`}_microsTooltip(e){const t=[["Sodio","mg",e.sodioMg],["Potasio","mg",e.potasioMg],["Calcio","mg",e.calcioMg],["Hierro","mg",e.hierroMg],["Zinc","mg",e.zincMg],["Fosforo","mg",e.fosforoMg],["Vit A","ug",e.vitaminaAIug],["Vit C","mg",e.vitaminaCMg],["Vit D","ug",e.vitaminaDIug],["Vit E","mg",e.vitaminaEMg],["Vit B6","mg",e.vitaminaB6Mg],["Vit B12","ug",e.vitaminaB12Iug],["Niacina","mg",e.niacinaMg],["Folico","ug",e.acidoFolicoIug]];if(!t.some(([,,i])=>i!=null&&i!==0))return"";const a=t.filter(([,,i])=>i!=null&&i!==0).map(([i,n,o])=>`${i}: ${o}${n}`);return d`<span class="micros-tooltip"><span class="macro">micros</span><span class="micros-tip">${a.join(" · ")}</span></span>`}render(){if(this._loading)return d`<p>Cargando recetas...</p>`;const e=this._filteredItems.length;return d`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <h2 style="margin:0">Recetas</h2>
        <button class="btn-primary" @click=${this._openCreate} style="font-size:0.8125rem;padding:0.5rem 1rem">+ Nueva receta</button>
      </div>

      ${this._error?d`<div class="error">${this._error}</div>`:""}

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

      <p class="results-count">
        Mostrando ${Math.min(this._visibleCount,e)} de ${e}
        ${e===this._totalCount?"recetas":`recetas filtradas (${this._totalCount} en total)`}
      </p>

      ${this._items.length===0&&!this._error?d`<div class="empty-state"><p>No hay recetas. Crea una receta nueva con el boton "+ Nueva receta".</p></div>`:e===0?d`<div class="empty-state"><p>No se encontraron recetas con estos filtros.</p></div>`:d`
          <div class="grid">
            ${this._visibleItems.map(t=>{var r;return d`
              <div class="card">
                <div class="card-header">
                  <h3>${t.name}</h3>
                  ${t.difficulty?d`<span class="badge">${Vp[t.difficulty]||t.difficulty}</span>`:""}
                </div>

                ${t.description?d`<div class="desc">${t.description}</div>`:""}
                ${t.instructions?d`<details class="instructions"><summary>Paso a paso</summary><div class="steps">${this._renderInstructions(t.instructions)}</div></details>`:""}

                <div class="meta">
                  ${t.timeMinutes?d`<span>⏱ ${t.timeMinutes} min</span>`:""}
                  ${t.servings?d`<span>🍽 ${t.servings} porc.</span>`:""}
                </div>

                <div class="macros">
                  ${t.calorias?d`<span class="kcal">${t.calorias} kcal</span>`:""}
                  ${this._macroBar(t.proteinas,999,"P")}
                  ${this._macroBar(t.carbos,999,"HC")}
                  ${this._macroBar(t.grasas,999,"G")}
                  ${this._microsTooltip(t)}
                </div>

                ${(r=t.ingredients)!=null&&r.length?d`
                  <details class="ingredients">
                    <summary>Ingredientes (${t.ingredients.length})</summary>
                    <ul>
                      ${t.ingredients.map(a=>{var i;return d`
                        <li>${a.quantity} ${a.unit==="UNIDAD"?"ud":a.unit} ${((i=a.food)==null?void 0:i.name)||"—"}</li>
                      `})}
                    </ul>
                  </details>
                `:""}

                <div class="actions">
                  ${t.familyId?d`
                    <button class="btn-edit" @click=${()=>this._openEdit(t)}>Editar</button>
                    <button class="btn-delete" @click=${()=>this._deleteRecipe(t.id,t.name)}>Eliminar</button>
                  `:d`
                    <span class="system-badge">Receta del sistema</span>
                  `}
                </div>
              </div>
            `})}
          </div>
          ${e>this._visibleCount?d`
            <div class="load-more">
              <button class="btn-clear-filters" @click=${()=>{this._visibleCount+=kr}}>
                Mostrar más recetas
              </button>
            </div>
          `:""}
        `}

      ${this._editRecipe?d`
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

              ${this._editIngredients.length===0?d`<p class="empty-ingredients">No hay ingredientes. Añade uno usando el campo de búsqueda.</p>`:d`
                  ${this._editIngredients.map((t,r)=>d`
                    <div class="ingredient-row">
                      <span class="food-name">${t.foodName}</span>
                      <input
                        class="qty"
                        type="number"
                        min="0.1"
                        step="1"
                        .value=${t.quantity}
                        @input=${a=>this._onIngredientChange(r,"quantity",parseFloat(a.target.value)||1)}
                      />
                      <select .value=${t.unit} @change=${a=>this._onIngredientChange(r,"unit",a.target.value)}>
                        ${Wp.map(a=>d`<option value=${a}>${a}</option>`)}
                      </select>
                      <button class="remove-btn" @click=${()=>this._removeIngredient(r)}>✕</button>
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
                ${this._foodSearchResults.length>0?d`
                  <div class="food-results">
                    ${this._foodSearchResults.map(t=>d`
                      <div class="food-result-item" @click=${()=>this._addIngredient(t)}>
                        <span>${t.name}</span>
                        <span class="f-cat">${t.category??""}</span>
                      </div>
                    `)}
                  </div>
                `:""}
                ${!this._searching&&this._foodSearchQuery.length>=2&&this._foodSearchResults.length===0&&!this._showCreateFood?d`
                  <div class="food-results">
                    <div class="food-result-item create-food" @click=${this._openCreateFood}>
                      + Crear "${this._foodSearchQuery}" como nuevo alimento
                    </div>
                  </div>
                `:""}
                ${this._searching?d`<p style="font-size:0.75rem;color:var(--text-muted);margin:0.25rem 0 0">Buscando...</p>`:""}
              </div>

              ${this._showCreateFood?d`
                <div class="create-food-section" style="margin-top:0.75rem;padding:0.75rem;border:1px dashed var(--primary);border-radius: var(--etxa-radius-sm);background:var(--etxa-color-surface-muted)">
                  <h4 style="margin:0 0 0.75rem;font-size:0.8125rem">Nuevo alimento</h4>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                    <div style="grid-column:1/-1">
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Nombre</label>
                      <input type="text" .value=${this._createFoodForm.name}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,name:t.target.value}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Categoría</label>
                      <select .value=${this._createFoodForm.category}
                        @change=${t=>{this._createFoodForm={...this._createFoodForm,category:t.target.value}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit;box-sizing:border-box">
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
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="UNIDAD">UNIDAD</option>
                      </select>
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Calorías (100g)</label>
                      <input type="number" .value=${this._createFoodForm.calorias100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,calorias100g:parseFloat(t.target.value)||0}}}
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Proteínas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.proteinas100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,proteinas100g:parseFloat(t.target.value)||0}}}
                        step="0.1"
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Carboh. (100g)</label>
                      <input type="number" .value=${this._createFoodForm.carbos100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,carbos100g:parseFloat(t.target.value)||0}}}
                        step="0.1"
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                    <div>
                      <label style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;display:block;margin-bottom:0.2rem">Grasas (100g)</label>
                      <input type="number" .value=${this._createFoodForm.grasas100g}
                        @input=${t=>{this._createFoodForm={...this._createFoodForm,grasas100g:parseFloat(t.target.value)||0}}}
                        step="0.1"
                        style="width:100%;padding:0.4rem 0.5rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-family:inherit;box-sizing:border-box" />
                    </div>
                  </div>
                  <div style="display:flex;gap:0.5rem;margin-top:0.75rem">
                    <button class="btn-primary" @click=${this._handleCreateFood} ?disabled=${this._creatingFood||!this._createFoodForm.name.trim()} style="flex:1;padding:0.4rem 0.75rem;border:none;border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-weight:600;font-family:inherit;cursor:pointer;background:var(--primary);color:white">
                      ${this._creatingFood?"Creando...":"Crear alimento"}
                    </button>
                    <button class="btn-cancel" @click=${this._closeCreateFood} style="padding:0.4rem 0.75rem;border:1px solid var(--border);border-radius: var(--etxa-radius-sm);font-size:0.8rem;font-weight:600;font-family:inherit;cursor:pointer;background:transparent;color:var(--text-muted)">Cancelar</button>
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
    `}};te.styles=[Ht,H`
    :host { display: block; }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .error {
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
      padding: 0.75rem;
      border-radius: var(--etxa-radius-sm);
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
      background: var(--etxa-color-primary-soft);
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
      background: var(--etxa-color-surface-muted);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      background: var(--surface);
      color: var(--text-muted);
      white-space: nowrap;
    }

    .btn-clear-filters:hover { background: var(--etxa-color-surface-hover); }

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
      border-radius: var(--etxa-radius-sm);
      padding: 0.5rem 0.75rem;
      font-size: 0.6875rem;
      line-height: 1.5;
      box-shadow: var(--etxa-shadow-sm);
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
      border-radius: var(--etxa-radius-sm);
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
    }

    .btn-edit {
      background: var(--etxa-color-primary-soft);
      color: var(--primary);
    }

    .btn-edit:hover { background: var(--etxa-color-primary-soft); }

    .btn-delete {
      background: var(--etxa-color-danger-soft);
      color: var(--etxa-color-danger);
    }

    .btn-delete:hover { background: var(--etxa-color-danger-hover); }

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
      background: rgb(46 46 46 / 38%);
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
      box-shadow: var(--etxa-shadow-md);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
      font-size: 0.8125rem;
      font-family: inherit;
      text-align: center;
    }

    .ingredient-row select {
      width: 90px;
      padding: 0.375rem 0.375rem;
      border: 1px solid var(--border);
      border-radius: var(--etxa-radius-sm);
      font-size: 0.75rem;
      font-family: inherit;
    }

    .remove-btn {
      background: none;
      border: none;
      color: var(--etxa-color-danger);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
      box-shadow: var(--etxa-shadow-sm);
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

    .food-result-item:hover { background: var(--etxa-color-surface-hover); }

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
      border-radius: var(--etxa-radius-sm);
      font-size: 0.8125rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
    }

    .load-more {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }

    .btn-primary {
      background: var(--primary);
      color: white;
      border: none;
      border-radius: var(--etxa-radius-sm);
      padding: 0.5rem 1.25rem;
      font-family: inherit;
      font-weight: 600;
      cursor: pointer;
    }

    .btn-primary:hover { background: var(--primary-hover); }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

    .btn-cancel {
      background: transparent;
      color: var(--text-muted);
      border: 1px solid var(--border) !important;
    }

    .btn-cancel:hover { background: var(--etxa-color-surface-hover); }

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
  `];ie([v()],te.prototype,"_items",2);ie([v()],te.prototype,"_loading",2);ie([v()],te.prototype,"_error",2);ie([v()],te.prototype,"_editRecipe",2);ie([v()],te.prototype,"_isCreating",2);ie([v()],te.prototype,"_editForm",2);ie([v()],te.prototype,"_editIngredients",2);ie([v()],te.prototype,"_foodSearchQuery",2);ie([v()],te.prototype,"_foodSearchResults",2);ie([v()],te.prototype,"_searching",2);ie([v()],te.prototype,"_savingEdit",2);ie([v()],te.prototype,"_showCreateFood",2);ie([v()],te.prototype,"_createFoodForm",2);ie([v()],te.prototype,"_creatingFood",2);ie([v()],te.prototype,"_searchTerm",2);ie([v()],te.prototype,"_ingredientFilter",2);ie([v()],te.prototype,"_difficultyFilter",2);ie([v()],te.prototype,"_maxTimeFilter",2);ie([v()],te.prototype,"_totalCount",2);ie([v()],te.prototype,"_visibleCount",2);te=ie([Y("recetas-view")],te);var Qp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,_e=(e,t,r,a)=>{for(var i=a>1?void 0:a?Yp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Qp(t,r,i),i};function Bi(e,t){const r=t??"g";if(r==="UNIDAD"){const a=Math.round(e*10)/10;return`${a} ${a===1?"unidad":"unidades"}`}return`${Math.round(e)}${r}`}const Uo={VERDURAS:0,FRUTAS:1,CARNES:2,PESCADOS:3,LACTEOS:4,HUEVOS:5,CEREALES:6,LEGUMBRES:7,FRUTOS_SECOS:8,ACEITES:9,CONDIMENTOS:10,BEBIDAS:11,OTROS:12},Xp={VERDURAS:"Verduras",FRUTAS:"Frutas",CARNES:"Carnes",PESCADOS:"Pescados",LACTEOS:"Lácteos",HUEVOS:"Huevos",CEREALES:"Cereales",LEGUMBRES:"Legumbres",FRUTOS_SECOS:"Frutos secos",ACEITES:"Aceites",CONDIMENTOS:"Condimentos",BEBIDAS:"Bebidas",OTROS:"Otros"};let he=class extends W{constructor(){super(...arguments),this._items=[],this._loading=!0,this._generating=!1,this._error="",this._collapsed={},this._addingToPantry=!1,this._showConfirmAdd=!1,this._expiryDrafts={},this._sections=[],this._newItemName="",this._newItemQuantity=1,this._catalogResults=[],this._selectedCatalogItem=null,this._addingItem=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const e=await qe.current();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch(e){this._items=[],this._sections=[],this._error=oe(e,"Error al cargar la lista de la compra")}finally{this._loading=!1}}async _generate(){this._generating=!0,this._error="";try{const e=await qe.generate();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch(e){this._error=oe(e,"Error al generar la lista de la compra")}finally{this._generating=!1}}async _toggle(e){const t=this._items.findIndex(a=>a.id===e);if(t===-1)return;const r=this._items[t].purchased;this._items=this._items.map(a=>a.id===e?{...a,purchased:!a.purchased}:a);try{await qe.toggleItem(e)}catch{this._items=this._items.map(a=>a.id===e?{...a,purchased:r}:a),this._error="Error al actualizar"}}_toggleCategory(e){this._collapsed={...this._collapsed,[e]:!this._collapsed[e]}}async _toggleCategoryItems(e){var n;const r=((n=this._getGroupedItems().find(([o])=>o===e))==null?void 0:n[1])||[];if(r.length===0)return;const i=!r.every(o=>o.purchased);this._items=this._items.map(o=>{var s;return((s=o.food)==null?void 0:s.category)===e?{...o,purchased:i}:o});try{for(const o of r)o.purchased!==i&&await qe.toggleItem(o.id)}catch{await this._load(),this._error="Error al actualizar categoría"}}_allItemsChecked(){return this._items.length>0&&this._items.every(e=>e.purchased)}_categoryAllChecked(e){var a;const r=((a=this._getGroupedItems().find(([i])=>i===e))==null?void 0:a[1])||[];return r.length>0&&r.every(i=>i.purchased)}_toggleAll(){const e=this._allItemsChecked(),t=!e,r=this._items.map(a=>a.id);this._items=this._items.map(a=>({...a,purchased:t})),(async()=>{try{for(const a of r){const i=this._items.find(n=>n.id===a);i&&i.purchased!==e&&await qe.toggleItem(a)}}catch{await this._load(),this._error="Error al actualizar"}})()}_getPurchasedItems(){return this._items.filter(e=>e.purchased&&e.toBuy>0)}async _addToPantry(){this._getPurchasedItems().length!==0&&(this._expiryDrafts={},this._showConfirmAdd=!0)}async _confirmAddToPantry(){var r;const e=this._getPurchasedItems();if(e.length===0)return;this._addingToPantry=!0,this._showConfirmAdd=!1;const t=new Date().toISOString().split("T")[0];try{for(const a of e)await Xe.add({foodId:a.foodId,quantity:a.toBuy,unit:((r=a.food)==null?void 0:r.unidadBase)||"g",expiryDate:this._expiryDrafts[a.id]||null,purchaseDate:t});this._items=this._items.map(a=>({...a,purchased:!1})),this._expiryDrafts={}}catch{this._error="Error al añadir a la nevera"}finally{this._addingToPantry=!1}}_getGroupedItems(){var t;const e=new Map;for(const r of this._items){const a=((t=r.food)==null?void 0:t.category)||"OTROS";e.has(a)||e.set(a,[]),e.get(a).push(r)}return Array.from(e.entries()).sort((r,a)=>(Uo[r[0]]??99)-(Uo[a[0]]??99))}async _searchHouseholdCatalog(e){const t=e.target.value;if(this._newItemName=t,this._selectedCatalogItem=null,t.length<2){this._catalogResults=[];return}try{this._catalogResults=await lt.items(t)}catch{this._catalogResults=[]}}_selectCatalogResult(e){this._selectedCatalogItem=e,this._newItemName=e.name,this._catalogResults=[]}async _addSectionItem(e){var t;if(e.preventDefault(),!!this._newItemName.trim()){this._addingItem=!0;try{let r=this._sections[0];r||(r=await qe.createSection("Hogar y otros"));const a=await qe.addSectionItem(r.id,{name:this._newItemName.trim(),quantity:Number(this._newItemQuantity)||1,householdItemId:(t=this._selectedCatalogItem)==null?void 0:t.id});this._sections.findIndex(n=>n.id===r.id)===-1?this._sections=[...this._sections,{...r,items:[a]}]:this._sections=this._sections.map(n=>n.id===r.id?{...n,items:[...n.items,a]}:n),this._newItemName="",this._newItemQuantity=1,this._selectedCatalogItem=null,this._catalogResults=[]}catch(r){this._error=oe(r,"Error al añadir artículo")}finally{this._addingItem=!1}}}async _toggleSectionItem(e){const t=!e.purchased;this._sections=this._sections.map(r=>({...r,items:r.items.map(a=>a.id===e.id?{...a,purchased:t}:a)}));try{await qe.toggleSectionItem(e.id,t)}catch{this._sections=this._sections.map(r=>({...r,items:r.items.map(a=>a.id===e.id?{...a,purchased:!t}:a)})),this._error="Error al actualizar artículo"}}async _removeSectionItem(e){try{await qe.removeSectionItem(e.id),this._sections=this._sections.map(t=>({...t,items:t.items.filter(r=>r.id!==e.id)}))}catch{this._error="Error al eliminar artículo"}}render(){if(this._loading)return d`<p>Cargando lista...</p>`;const e=this._getGroupedItems(),t=this._getPurchasedItems().length;return d`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Lista de la compra</h2>
          ${this._items.length>0?d`
            <button class="btn-outline btn-sm" @click=${this._toggleAll}>
              ${this._allItemsChecked()?"Desmarcar todo":"Marcar todo"}
            </button>
          `:""}
        </div>
        <button @click=${this._generate} ?disabled=${this._generating}>
          ${this._generating?"Generando...":"Generar lista"}
        </button>
      </div>
      ${this._error?d`<div class="error">${this._error}</div>`:""}
      ${this._items.length===0?d`<div class="empty-state"><p>La lista está vacía. Genera la lista desde el plan semanal.</p></div>`:e.map(([r,a])=>{const i=this._collapsed[r],n=this._categoryAllChecked(r);return d`
              <div class="category">
                <div class="category-header" @click=${()=>this._toggleCategory(r)}>
                  <span class="arrow ${i?"":"expanded"}">▶</span>
                  <span class="cat-check ${n?"checked":""}" @click=${o=>{o.stopPropagation(),this._toggleCategoryItems(r)}}>
                    ${n?"✓":""}
                  </span>
                  <span>${Xp[r]||r}</span>
                  <span class="count">${a.length} ${a.length===1?"artículo":"artículos"}</span>
                </div>
                <div class="items ${i?"collapsed":""}">
                  ${a.map(o=>{var s;return d`
                    <div class="item ${o.purchased?"checked":""}">
                      <button
                        class="item-toggle"
                        type="button"
                        aria-pressed=${o.purchased?"true":"false"}
                        @click=${()=>this._toggle(o.id)}
                      >
                        <span class="check" aria-hidden="true">${o.purchased?"✓":""}</span>
                        <span class="item-name">${((s=o.food)==null?void 0:s.name)||"?"}</span>
                        <span class="item-qty">${Bi(o.totalNeeded,o.unit)} ${o.toBuy?`(comprar: ${Bi(o.toBuy,o.unit)})`:"(✔ en nevera)"}</span>
                      </button>
                    </div>
                  `})}
                </div>
              </div>
            `})}

      <div class="category">
        <div class="category-header">
          <span>Hogar y otros</span>
          <span class="count">${this._sections.reduce((r,a)=>r+a.items.length,0)} artículo(s)</span>
        </div>
        <div class="items">
          ${this._sections.flatMap(r=>r.items).map(r=>d`
            <div class="item ${r.purchased?"checked":""}">
              <button
                class="item-toggle"
                type="button"
                aria-pressed=${r.purchased?"true":"false"}
                @click=${()=>this._toggleSectionItem(r)}
              >
                <span class="check" aria-hidden="true">${r.purchased?"✓":""}</span>
                <span class="item-name">${r.name}</span>
                <span class="item-qty">${r.quantity}</span>
              </button>
              <button class="item-remove-btn" @click=${()=>this._removeSectionItem(r)} aria-label=${`Eliminar ${r.name}`}>✕</button>
            </div>
          `)}
          <form class="add-item-row" @submit=${this._addSectionItem}>
            <div class="add-item-search">
              <input type="text" .value=${this._newItemName} @input=${this._searchHouseholdCatalog}
                placeholder="Añadir artículo (detergente, pilas...)" />
              ${this._catalogResults.length>0?d`
                <div class="search-results">
                  ${this._catalogResults.map(r=>d`
                    <div class="search-result-item" @click=${()=>this._selectCatalogResult(r)}>${r.name}</div>
                  `)}
                </div>
              `:""}
            </div>
            <input type="number" .value=${this._newItemQuantity} @input=${r=>{this._newItemQuantity=r.target.value}} min="1" step="1" class="add-item-qty" />
            <button type="submit" class="btn-sm" ?disabled=${this._addingItem||!this._newItemName.trim()}>Añadir</button>
          </form>
        </div>
      </div>

      ${this._items.length>0?d`
        <div class="bottom-bar">
          <span class="info">${t>0?`${t} artículo(s) marcado(s) para comprar`:"Marca artículos para añadir a la nevera"}</span>
          <button @click=${this._addToPantry} ?disabled=${t===0||this._addingToPantry}>
            ${this._addingToPantry?"Añadiendo...":"Añadir comprados a nevera"}
          </button>
        </div>
      `:""}

      ${this._showConfirmAdd?d`
        <div class="confirm-overlay" @click=${()=>{this._showConfirmAdd=!1}}>
          <div class="confirm-modal" @click=${r=>r.stopPropagation()}>
            <h3>Añadir a la nevera</h3>
            <p class="confirm-hint">Indica la caducidad de cada artículo (opcional). Cada uno entra como un lote propio.</p>
            <div class="confirm-list">
              ${this._getPurchasedItems().map(r=>{var a;return d`
                <div class="confirm-item">
                  <span class="confirm-name">${((a=r.food)==null?void 0:a.name)||"?"}</span>
                  <span class="qty">${Bi(r.toBuy,r.unit)}</span>
                  <input
                    type="date"
                    class="confirm-date"
                    .value=${this._expiryDrafts[r.id]||""}
                    @input=${i=>{this._expiryDrafts={...this._expiryDrafts,[r.id]:i.target.value}}}
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
    `}};he.styles=[Ht,H`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem; }
    .top-bar-left { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .top-bar button { padding: 0.625rem 1.25rem; border: none; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; }
    .top-bar button:hover { background: var(--primary-hover); }
    .top-bar button:disabled { opacity: 0.6; }
    .btn-outline { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .btn-outline:hover { background: var(--etxa-color-surface-hover); }
    .btn-sm { padding: 0.375rem 0.75rem; font-size: 0.75rem; }
    .empty-state { text-align: center; padding: 3rem 1rem; color: var(--text-muted); }
    .error { background: var(--etxa-color-danger-soft); color: var(--etxa-color-danger); padding: 0.75rem; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; margin-bottom: 1rem; }
    .category { background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-md); margin-bottom: 0.75rem; overflow: hidden; }
    .category-header { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; cursor: pointer; user-select: none; font-weight: 600; font-size: 0.9rem; background: var(--etxa-color-surface-muted); border-bottom: 1px solid var(--border); transition: background 0.15s; }
    .category-header:hover { background: var(--etxa-color-surface-hover); }
    .category-header .arrow { font-size: 0.75rem; color: var(--text-muted); transition: transform 0.2s; width: 16px; text-align: center; }
    .category-header .arrow.expanded { transform: rotate(90deg); }
    .category-header .count { color: var(--text-muted); font-weight: 400; font-size: 0.8rem; margin-left: auto; }
    .cat-check { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border: 2px solid var(--border); border-radius: 4px; flex-shrink: 0; font-size: 0.75rem; cursor: pointer; transition: background 0.15s, border-color 0.15s; }
    .cat-check:hover { border-color: var(--primary); }
    .cat-check.checked { background: var(--primary); border-color: var(--primary); color: white; }
    .items { transition: max-height 0.25s ease; }
    .items.collapsed { display: none; }
    .item { display: flex; align-items: center; gap: 0.25rem; padding-right: 0.5rem; border-bottom: 1px solid var(--etxa-color-surface-hover); }
    /* La fila era un div con @click: sin foco ni rol. Ahora el área de marcar es un botón real. */
    .item-toggle { flex: 1; min-width: 0; display: flex; align-items: center; gap: 0.75rem; background: none; border: 0; color: inherit; font: inherit; text-align: left; padding: 0.65rem 1rem; min-height: var(--etxa-touch-target); cursor: pointer; }
    .item:last-child { border-bottom: none; }
    .item.checked { opacity: 0.5; text-decoration: line-through; }
    .check { width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.75rem; }
    .item.checked .check { background: var(--primary); border-color: var(--primary); color: white; }
    .item-name { flex: 1; }
    .item-qty { color: var(--text-muted); font-size: 0.85rem; white-space: nowrap; }
    .item-remove-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1rem; padding: 0.125rem 0.25rem; }
    .item-remove-btn:hover { color: var(--etxa-color-danger); }
    .add-item-row { display: flex; gap: 0.5rem; align-items: flex-start; padding: 0.65rem 1rem; }
    .add-item-search { position: relative; flex: 1; }
    .add-item-search input { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.8125rem; font-family: inherit; }
    .add-item-search .search-results { position: absolute; top: 100%; left: 0; right: 0; z-index: 10; max-height: 160px; }
    .add-item-search .search-result-item { padding: 0.4rem 0.6rem; font-size: 0.8125rem; cursor: pointer; }
    .add-item-search .search-result-item:hover { background: var(--etxa-color-surface-hover); }
    .add-item-qty { width: 60px; padding: 0.5rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.8125rem; font-family: inherit; }
    .bottom-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; padding: 1rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-md); }
    .bottom-bar button { padding: 0.625rem 1.25rem; border: none; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; }
    .bottom-bar button:hover { background: var(--primary-hover); }
    .bottom-bar button:disabled { opacity: 0.6; cursor: not-allowed; }
    .bottom-bar .info { font-size: 0.8125rem; color: var(--text-muted); }

    .confirm-overlay {
      position: fixed;
      inset: 0;
      background: rgb(46 46 46 / 38%);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .confirm-modal {
      background: var(--surface);
      border-radius: var(--etxa-radius-md);
      padding: 1.5rem;
      max-width: 500px;
      width: 90%;
      max-height: 70vh;
      display: flex;
      flex-direction: column;
      box-shadow: var(--etxa-shadow-md);
    }
    .confirm-modal h3 { margin: 0 0 1rem; font-size: 1rem; }
    .confirm-list { overflow-y: auto; flex: 1; margin-bottom: 1rem; }
    .confirm-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid var(--etxa-color-surface-hover); font-size: 0.8125rem; }
    .confirm-item:last-child { border-bottom: none; }
    .confirm-item .confirm-name { flex: 1; }
    .confirm-item .qty { color: var(--primary); font-weight: 600; white-space: nowrap; }
    .confirm-hint { font-size: 0.75rem; color: var(--text-muted); margin: -0.5rem 0 0.75rem; }
    .confirm-date { padding: 0.3rem 0.4rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.75rem; font-family: inherit; }
    .confirm-actions { display: flex; justify-content: flex-end; gap: 0.5rem; }

    @media (max-width: 640px) {
      .category-header { padding: 0.75rem; font-size: 0.85rem; }
      .item { padding: 0.65rem 0.75rem; }
      .item-name { font-size: 0.9rem; }
      .top-bar { flex-direction: column; align-items: stretch; }
      .top-bar h2 { margin-bottom: 0; }
    }
  `];_e([v()],he.prototype,"_items",2);_e([v()],he.prototype,"_loading",2);_e([v()],he.prototype,"_generating",2);_e([v()],he.prototype,"_error",2);_e([v()],he.prototype,"_collapsed",2);_e([v()],he.prototype,"_addingToPantry",2);_e([v()],he.prototype,"_showConfirmAdd",2);_e([v()],he.prototype,"_expiryDrafts",2);_e([v()],he.prototype,"_sections",2);_e([v()],he.prototype,"_newItemName",2);_e([v()],he.prototype,"_newItemQuantity",2);_e([v()],he.prototype,"_catalogResults",2);_e([v()],he.prototype,"_selectedCatalogItem",2);_e([v()],he.prototype,"_addingItem",2);he=_e([Y("compra-view")],he);var Zp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,we=(e,t,r,a)=>{for(var i=a>1?void 0:a?Jp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&Zp(t,r,i),i};const eh={LIMPIEZA:"Limpieza",HIGIENE:"Higiene",PAPELERIA:"Papelería",COCINA_NO_ALIMENTO:"Cocina (no alimento)",OTROS:"Otros"};let me=class extends W{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._adding=!1,this._showCreateCatalogItem=!1,this._newCategory=""}connectedCallback(){super.connectedCallback(),this._loadStock()}async _loadStock(){this._loading=!0,this._error="";try{this._items=await lt.stock()}catch(e){this._error=e.message||"Error al cargar el inventario del hogar"}finally{this._loading=!1}}async _searchCatalog(e){const t=e.target.value;if(this._searchQuery=t,this._selectedCatalogItem=null,t.length<2){this._searchResults=[];return}try{this._searchResults=await lt.items(t)}catch{this._searchResults=[]}}_selectCatalogItem(e){this._selectedCatalogItem=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unit||"UNIDAD"}_openCreateCatalogItem(){this._showCreateCatalogItem=!0,this._newCategory=""}async _handleCreateCatalogItem(e){if(e.preventDefault(),!!this._searchQuery.trim())try{const t=await lt.createItem({name:this._searchQuery.trim(),category:this._newCategory||void 0,unit:this._unit});this._selectCatalogItem(t),this._showCreateCatalogItem=!1}catch(t){this._error=t.message||"Error al crear artículo"}}async _saveItem(e){if(e.preventDefault(),!(!this._selectedCatalogItem&&!this._editingItem)){this._adding=!0;try{this._editingItem?await lt.updateStock(this._editingItem.id,{quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):null}):await lt.addStock({householdItemId:this._selectedCatalogItem.id,quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):void 0}),this._resetForm(),this._showAddForm=!1,await this._loadStock()}catch(t){this._error=t.message||"Error al guardar"}finally{this._adding=!1}}}async _removeItem(e){try{await lt.removeStock(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar artículo"}}_editItem(e){var t;this._editingItem=e,this._selectedCatalogItem=e.householdItem,this._searchQuery=((t=e.householdItem)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._minThreshold=e.minThreshold!=null?String(e.minThreshold):"",this._showAddForm=!0}_resetForm(){this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._editingItem=null,this._showCreateCatalogItem=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetForm()}render(){return this._loading?d`<p>Cargando inventario del hogar...</p>`:d`
      <div class="top-bar">
        <h2>Hogar</h2>
        <button @click=${this._toggleForm}>${this._showAddForm?"Cancelar":"Añadir artículo"}</button>
      </div>

      ${this._error?d`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?d`
        <div class="form-card">
          <h3>${this._editingItem?"Editar artículo":"Añadir al inventario"}</h3>
          <form @submit=${this._saveItem}>
            <div class="form-row">
              <label>Buscar artículo</label>
              <input type="text" .value=${this._searchQuery} @input=${this._searchCatalog}
                placeholder="Ej: detergente, lejía, papel higiénico..." ?disabled=${!!this._editingItem} />
              ${this._searchResults.length>0?d`
                <div class="search-results">
                  ${this._searchResults.map(e=>d`
                    <div class="search-result-item" @click=${()=>this._selectCatalogItem(e)}>${e.name}</div>
                  `)}
                </div>
              `:this._searchQuery.length>=2&&!this._selectedCatalogItem&&!this._showCreateCatalogItem?d`
                <div class="search-results">
                  <div class="search-result-item create-item" @click=${this._openCreateCatalogItem}>
                    + Crear "${this._searchQuery}" como nuevo artículo
                  </div>
                </div>
              `:""}
            </div>

            ${this._showCreateCatalogItem?d`
              <div class="create-item-card">
                <div class="form-row">
                  <label>Categoría</label>
                  <select .value=${this._newCategory} @change=${e=>{this._newCategory=e.target.value}}>
                    <option value="">-- Sin categoría --</option>
                    ${Object.entries(eh).map(([e,t])=>d`<option value=${e}>${t}</option>`)}
                  </select>
                </div>
                <div class="form-actions">
                  <button type="button" @click=${this._handleCreateCatalogItem}>Crear artículo</button>
                  <button type="button" class="cancel" @click=${()=>{this._showCreateCatalogItem=!1}}>Cancelar</button>
                </div>
              </div>
            `:""}

            ${this._selectedCatalogItem||this._editingItem?d`
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

      ${this._items.length===0?d`<div class="empty-state"><p>Aún no has añadido nada al inventario del hogar (limpieza, higiene...).</p></div>`:d`
          <div class="list">
            ${this._items.map(e=>{var r;const t=e.minThreshold!=null&&e.quantity<e.minThreshold;return d`
                <div class="item ${t?"low":""}">
                  <div class="item-info">
                    <div class="item-name">${((r=e.householdItem)==null?void 0:r.name)||"?"}</div>
                    <div class="item-meta">
                      ${e.quantity} ${e.unit==="UNIDAD"?"ud":e.unit}
                      ${t?d` · <span class="low-label">queda poco</span>`:""}
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
    `}};me.styles=[Ht,H`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    button { padding: 0.625rem 1.25rem; border: none; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; transition: background 0.15s; }
    button:hover { background: var(--primary-hover); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { background: var(--etxa-color-danger-soft); color: var(--etxa-color-danger); padding: 0.75rem; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; margin-bottom: 1rem; }
    .empty-state { text-align: center; padding: 3rem 1rem; color: var(--text-muted); }
    .list { display: flex; flex-direction: column; gap: 0.5rem; }
    .item { background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; }
    .item.low { border-color: var(--etxa-color-warning); background: var(--etxa-color-warning-soft); }
    .item-info { display: flex; flex-direction: column; gap: 0.125rem; }
    .item-name { font-weight: 600; font-size: 0.875rem; }
    .item-meta { font-size: 0.75rem; color: var(--text-muted); }
    .item-meta .low-label { color: var(--etxa-color-warning-strong); font-weight: 600; }
    .item-remove, .item-edit { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem; padding: 0.25rem; transition: color 0.15s; }
    .item-remove:hover { color: var(--etxa-color-danger); }
    .item-edit:hover { color: var(--primary); }
    .form-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1.5rem; }
    .form-card h3 { font-size: 1rem; margin-bottom: 1rem; }
    .form-row { margin-bottom: 0.75rem; }
    .form-row label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
    .form-row input, .form-row select { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-family: inherit; outline: none; }
    .form-row input:focus { border-color: var(--primary); }
    .form-inline { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .search-results { background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); max-height: 200px; overflow-y: auto; }
    .search-result-item { padding: 0.5rem 0.75rem; font-size: 0.8125rem; cursor: pointer; }
    .search-result-item:hover { background: var(--etxa-color-surface-hover); }
    .search-result-item.create-item { color: var(--primary); font-weight: 600; border-top: 1px solid var(--border); }
    .create-item-card { background: var(--etxa-color-surface-muted); border: 1px dashed var(--primary); border-radius: var(--etxa-radius-sm); padding: 1rem; margin-top: 0.75rem; }
    .form-actions { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
    .form-actions .cancel { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .form-actions .cancel:hover { background: var(--etxa-color-surface-hover); }
    @media (max-width: 640px) { .top-bar { flex-direction: column; align-items: stretch; } }
  `];we([v()],me.prototype,"_items",2);we([v()],me.prototype,"_loading",2);we([v()],me.prototype,"_error",2);we([v()],me.prototype,"_showAddForm",2);we([v()],me.prototype,"_editingItem",2);we([v()],me.prototype,"_searchQuery",2);we([v()],me.prototype,"_searchResults",2);we([v()],me.prototype,"_selectedCatalogItem",2);we([v()],me.prototype,"_quantity",2);we([v()],me.prototype,"_unit",2);we([v()],me.prototype,"_minThreshold",2);we([v()],me.prototype,"_adding",2);we([v()],me.prototype,"_showCreateCatalogItem",2);we([v()],me.prototype,"_newCategory",2);me=we([Y("household-view")],me);var th=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,Ke=(e,t,r,a)=>{for(var i=a>1?void 0:a?rh(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&th(t,r,i),i};const ah={DIARIA:"Diaria",SEMANAL:"Semanal"};let Me=class extends W{constructor(){super(...arguments),this._chores=[],this._members=[],this._loading=!0,this._error="",this._showAddForm=!1,this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._saving=!1,this._applyingTemplate=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([Ct.list(),et.list()]);this._chores=e,this._members=t}catch(e){this._error=e.message||"Error al cargar las tareas"}finally{this._loading=!1}}async _toggle(e){const t=!e.completedInPeriod;this._chores=this._chores.map(r=>r.id===e.id?{...r,completedInPeriod:t}:r);try{t?await Ct.complete(e.id):await Ct.uncomplete(e.id)}catch{this._chores=this._chores.map(r=>r.id===e.id?{...r,completedInPeriod:!t}:r),this._error="Error al actualizar la tarea"}}async _addChore(e){if(e.preventDefault(),!!this._newName.trim()){this._saving=!0;try{const t=await Ct.create({name:this._newName.trim(),frequency:this._newFrequency,assignedToMemberId:this._newMemberId||void 0});this._chores=[...this._chores,t],this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._showAddForm=!1}catch(t){this._error=t.message||"Error al crear la tarea"}finally{this._saving=!1}}}async _applyStarterTemplate(){this._applyingTemplate=!0,this._error="";try{await Ct.applyTemplate("hogar-basico"),await this._load()}catch(e){this._error=e.message||"Error al cargar las tareas de ejemplo"}finally{this._applyingTemplate=!1}}async _removeChore(e){try{await Ct.remove(e),this._chores=this._chores.filter(t=>t.id!==e)}catch{this._error="Error al eliminar la tarea"}}_renderGroup(e){const t=this._chores.filter(r=>r.frequency===e);return t.length===0?"":d`
      <h3>${ah[e]}</h3>
      <div class="list">
        ${t.map(r=>d`
          <div class="item ${r.completedInPeriod?"done":""}">
            <button
              class="item-toggle"
              type="button"
              aria-pressed=${r.completedInPeriod?"true":"false"}
              @click=${()=>this._toggle(r)}
            >
              <span class="check" aria-hidden="true">${r.completedInPeriod?"✓":""}</span>
              <span class="item-name">${r.name}</span>
            </button>
            ${r.member?d`<span class="member-badge" style="background:${r.member.color}">${r.member.name}</span>`:""}
            <button class="item-remove" @click=${()=>this._removeChore(r.id)} aria-label=${`Eliminar ${r.name}`}>✕</button>
          </div>
        `)}
      </div>
    `}render(){return this._loading?d`<p>Cargando tareas...</p>`:d`
      <div class="top-bar">
        <h2>Tareas del hogar</h2>
        <button @click=${()=>{this._showAddForm=!this._showAddForm}}>
          ${this._showAddForm?"Cancelar":"Añadir tarea"}
        </button>
      </div>

      ${this._error?d`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?d`
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
                ${this._members.map(e=>d`<option value=${e.id}>${e.name}</option>`)}
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

      ${this._chores.length===0?d`
            <div class="empty-state">
              <p>Aún no hay tareas del hogar. Añade la primera.</p>
              <button ?disabled=${this._applyingTemplate} @click=${this._applyStarterTemplate}>
                ${this._applyingTemplate?"Cargando...":"Cargar tareas de ejemplo"}
              </button>
            </div>
          `:d`${this._renderGroup("DIARIA")}${this._renderGroup("SEMANAL")}`}
    `}};Me.styles=[Ht,H`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    h3 { font-size: 0.9rem; color: var(--text-muted); margin: 1.25rem 0 0.5rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    button { padding: 0.625rem 1.25rem; border: none; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-weight: 600; font-family: inherit; background: var(--primary); color: white; cursor: pointer; transition: background 0.15s; }
    button:hover { background: var(--primary-hover); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { background: var(--etxa-color-danger-soft); color: var(--etxa-color-danger); padding: 0.75rem; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; margin-bottom: 1rem; }
    .empty-state { text-align: center; padding: 2rem 1rem; color: var(--text-muted); }
    .empty-state button { margin-top: 0.75rem; }
    .list { display: flex; flex-direction: column; gap: 0.5rem; }
    .item { background: var(--surface); border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); padding-right: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
    /* La fila era un div con @click: sin foco ni rol. Ahora el área de marcar es un botón real. */
    .item-toggle { flex: 1; min-width: 0; display: flex; align-items: center; gap: 0.75rem; background: none; border: 0; color: inherit; font: inherit; text-align: left; padding: 0.75rem 1rem; min-height: var(--etxa-touch-target); cursor: pointer; }
    .item-toggle:hover { background: none; }
    .item.done { opacity: 0.55; }
    .check { width: 22px; height: 22px; border: 2px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.8rem; }
    .item.done .check { background: var(--primary); border-color: var(--primary); color: white; }
    .item-name { flex: 1; font-weight: 600; font-size: 0.875rem; }
    .item.done .item-name { text-decoration: line-through; }
    .member-badge { font-size: 0.6875rem; font-weight: 600; padding: 0.125rem 0.5rem; border-radius: 999px; color: white; white-space: nowrap; }
    .item-remove { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem; padding: 0.25rem; }
    .item-remove:hover { color: var(--etxa-color-danger); }
    .form-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1.5rem; }
    .form-row { margin-bottom: 0.75rem; }
    .form-row label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
    .form-row input, .form-row select { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-family: inherit; outline: none; }
    .form-actions { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
    .form-actions .cancel { background: transparent; color: var(--text-muted); border: 1px solid var(--border); }
    .form-actions .cancel:hover { background: var(--etxa-color-surface-hover); }
    @media (max-width: 640px) { .top-bar { flex-direction: column; align-items: stretch; } }
  `];Ke([v()],Me.prototype,"_chores",2);Ke([v()],Me.prototype,"_members",2);Ke([v()],Me.prototype,"_loading",2);Ke([v()],Me.prototype,"_error",2);Ke([v()],Me.prototype,"_showAddForm",2);Ke([v()],Me.prototype,"_newName",2);Ke([v()],Me.prototype,"_newFrequency",2);Ke([v()],Me.prototype,"_newMemberId",2);Ke([v()],Me.prototype,"_saving",2);Ke([v()],Me.prototype,"_applyingTemplate",2);Me=Ke([Y("chores-view")],Me);var ih=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,Ee=(e,t,r,a)=>{for(var i=a>1?void 0:a?nh(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&ih(t,r,i),i};const oh=!0;let ve=class extends W{constructor(){super(...arguments),this._user=null,this._familyMembers=[],this._selectedMemberId="",this._loading=!0,this._saving=!1,this._error="",this._success="",this._form={name:"",age:0,weightKg:0,heightCm:0,sex:"MASCULINO",activityLevel:"MODERADO",goal:"MANTENER",restrictions:[]},this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0},this._backupBusy=!1,this._modules=[],this._modulesError="",this._modulesSaving=!1}connectedCallback(){super.connectedCallback(),this._load()}get _selectedMember(){return this._familyMembers.find(e=>e.id===this._selectedMemberId)}async _load(){var e;try{const t=await ea.me();if(this._user=t,this._familyMembers=((e=t.family)==null?void 0:e.members)||[],this._familyMembers.length>0&&(this._selectedMemberId=this._familyMembers[0].id,this._applyMember(this._familyMembers[0])),oh){const r=await tt.getHomeSettings();this._modules=[...r.enabledModules]}}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}async _toggleModule(e){const{value:t,selected:r}=e.detail,a=r?[...this._modules,t]:this._modules.filter(n=>n!==t);if(a.length===0){this._modulesError="Deja al menos un área activa.";return}this._modulesError="",this._modulesSaving=!0;const i=this._modules;this._modules=a;try{const n=await tt.updateEnabledModules(a);this._modules=[...n.enabledModules],window.dispatchEvent(new CustomEvent("etxa-modules-changed",{detail:{modules:this._modules}}))}catch(n){this._modules=i,this._modulesError=(n==null?void 0:n.message)||"No se pudo guardar el cambio."}finally{this._modulesSaving=!1}}_applyMember(e){this._form={name:e.name||"",age:e.age||0,weightKg:e.weightKg||0,heightCm:e.heightCm||0,sex:e.sex||"MASCULINO",activityLevel:e.activityLevel||"MODERADO",goal:e.goal||"MANTENER",restrictions:nl(e.restrictions)},this._calculateMacros()}_selectMember(e){const t=e.target.value;this._selectedMemberId=t;const r=this._familyMembers.find(a=>a.id===t);r&&this._applyMember(r)}_handleInput(e){const t=e.target,r=t.name;if(r==="restrictions"){const a=t.value,i=t.checked;this._form={...this._form,restrictions:i?[...this._form.restrictions,a]:this._form.restrictions.filter(n=>n!==a)}}else r==="age"?this._form={...this._form,age:parseInt(t.value)||0}:["weightKg","heightCm"].includes(r)?this._form={...this._form,[r]:parseFloat(t.value)||0}:this._form={...this._form,[r]:t.value};this._calculateMacros()}async _save(){this._saving=!0,this._error="",this._success="";try{const e=await et.update(this._selectedMemberId,{name:this._form.name,age:this._form.age,weightKg:this._form.weightKg,heightCm:this._form.heightCm,sex:this._form.sex,activityLevel:this._form.activityLevel,goal:this._form.goal,restrictions:this._form.restrictions}),t=this._familyMembers.findIndex(r=>r.id===this._selectedMemberId);t>=0&&(this._familyMembers=[...this._familyMembers.slice(0,t),e,...this._familyMembers.slice(t+1)]),this._success="Perfil actualizado correctamente"}catch(e){this._error=e.message||"Error al guardar"}finally{this._saving=!1}}async _addMember(){const e=prompt("Nombre del nuevo miembro:");if(e)try{const t=await et.create({name:e});this._familyMembers=[...this._familyMembers,t],this._selectedMemberId=t.id,this._applyMember(t),this._success=`Miembro "${e}" añadido`}catch(t){this._error=t.message||"Error al añadir miembro"}}async _removeMember(e){var r;const t=this._familyMembers.find(a=>a.id===e);if(t&&confirm(`¿Eliminar a "${t.name}" de la familia?`))try{await et.remove(e),this._familyMembers=this._familyMembers.filter(a=>a.id!==e),this._selectedMemberId===e&&(this._selectedMemberId=((r=this._familyMembers[0])==null?void 0:r.id)||"",this._familyMembers[0]&&this._applyMember(this._familyMembers[0])),this._success=`"${t.name}" eliminado`}catch(a){this._error=a.message||"Error al eliminar miembro"}}_onLogout(){window.location.hash="#/login"}async _downloadBackup(){const e=await Lu(),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download=`mealprep-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(r)}async _handleExport(){this._error="",this._success="";try{await this._downloadBackup(),this._success="Backup descargado"}catch(e){this._error=e.message||"Error al exportar"}}async _handleImport(e){var a;const t=e.target,r=(a=t.files)==null?void 0:a[0];if(t.value="",!!r&&confirm("Importar reemplaza TODOS tus datos actuales por los del fichero. Se descargará antes una copia de seguridad del estado actual, por si acaso. ¿Continuar?")){this._backupBusy=!0,this._error="",this._success="";try{await this._downloadBackup();const i=await r.text(),{report:n,catalogVersionMismatch:o}=await Bu(i),s=[];o&&s.push("el catálogo del backup es de otra versión de la app"),n.totalDropped>0&&s.push(`se descartaron ${n.totalDropped} referencia(s) que ya no existían`),alert(`Importación completada.${s.length?" "+s.join("; ")+".":""}`),window.location.reload()}catch(i){this._error=i.message||"Error al importar",this._backupBusy=!1}}}async _handleReset(){if(confirm("Esto borra TODOS tus datos locales (nevera, recetas propias, plan, listas, tareas...) y empieza de cero. Se descargará antes una copia de seguridad. ¿Seguro?")){this._backupBusy=!0,this._error="";try{await this._downloadBackup(),await ju(),window.location.reload()}catch(e){this._error=e.message||"Error al reiniciar",this._backupBusy=!1}}}_calculateMacros(){const{age:e,weightKg:t,heightCm:r,sex:a,activityLevel:i,goal:n}=this._form;if(!e||!t||!r){this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0};return}this._liveMacros=qs({age:e,weightKg:t,heightCm:r,sex:a==="FEMENINO"?"FEMENINO":"MASCULINO",activityLevel:i,goal:n})}render(){var t;if(this._loading)return d`<p>Cargando perfil...</p>`;const e=this._selectedMember;return d`
      <h2>Mi perfil</h2>
      ${this._error?d`<div class="error">${this._error}</div>`:""}
      ${this._success?d`<div class="success">${this._success}</div>`:""}

      <div class="member-bar">
        <select .value=${this._selectedMemberId} @change=${this._selectMember}>
          ${this._familyMembers.map(r=>d`
            <option value=${r.id}>${r.name}</option>
          `)}
        </select>
        <button @click=${this._addMember}>+ Añadir</button>
        ${this._familyMembers.length>1?d`
          <button class="btn-danger" @click=${()=>this._removeMember(this._selectedMemberId)}>Eliminar</button>
        `:""}
      </div>

      ${e!=null&&e.isStandardProfile?d`
        <div class="standard-notice">
          <strong>Datos estándar</strong>
          Estos valores son la referencia de una persona adulta de unos 70 kg, no los datos reales de
          ${e.name}. Corrígelos y guarda para ajustar el plan.
        </div>
      `:""}

      ${d`
        <div class="card modules-card">
          <h3>Qué quieres tener bajo control</h3>
          <p class="modules-hint">
            Desactivar un área solo oculta sus accesos: no se borra nada de lo que ya tengas guardado.
          </p>
          <div class="modules-list" @feature-toggle=${this._toggleModule}>
            ${Yr.map(r=>d`
              <feature-card
                value=${r.id}
                .icon=${r.icon}
                ?selected=${this._modules.includes(r.id)}
                ?disabled=${this._modulesSaving}
              >
                <span slot="title">${r.title}</span>
                ${r.summary}
              </feature-card>
            `)}
          </div>
          ${this._modulesError?d`<div class="error" style="margin-top:0.75rem">${this._modulesError}</div>`:""}
        </div>
      `}

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
              ${ui.map(r=>d`
                <label>
                  <input type="checkbox" name="restrictions" value=${r}
                    ?checked=${this._form.restrictions.includes(r)}
                    @change=${this._handleInput}>
                  ${r}
                </label>
              `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn-primary" @click=${this._save} ?disabled=${this._saving}>
              ${this._saving?"Guardando...":"Guardar cambios"}
            </button>
            ${""}
          </div>

          ${d`
            <div class="backup-details">
              <p class="storage-notice">
                <strong>Tus datos viven solo en este navegador.</strong>
                No hay servidor ni copia en la nube: si cambias de móvil, borras los datos del
                navegador o el sistema libera espacio, se pierden. Exporta una copia de vez en
                cuando y guárdala donde tengas tus cosas importantes.
              </p>
              <details>
              <summary>Copia de seguridad</summary>
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
            </div>
          `}
        </div>
      </div>
    `}};ve.styles=[Ht,H`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1.5rem; }
    .member-bar { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .member-bar select { flex: 1; min-width: 180px; padding: 0.6rem 0.75rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.9rem; font-family: inherit; background: var(--bg); color: var(--text); }
    .member-bar button { padding: 0.5rem 1rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.85rem; font-weight: 600; font-family: inherit; cursor: pointer; background: var(--surface); color: var(--text); }
    .member-bar button:hover { background: var(--etxa-color-surface-hover); }
    .standard-notice { background: var(--etxa-color-warning-soft); border: 1px solid var(--etxa-color-warning-border); border-radius: var(--etxa-radius-md); padding: 0.75rem 1rem; margin-bottom: 1.5rem; font-size: 0.8125rem; color: var(--etxa-color-warning-strong); }
    .standard-notice strong { display: block; margin-bottom: 0.2rem; }
    .member-bar .btn-danger { background: var(--etxa-color-danger-soft); color: var(--etxa-color-danger); border-color: var(--etxa-color-danger-border); }
    .member-bar .btn-danger:hover { background: var(--etxa-color-danger-hover); }
    .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; }
    .card h3 { font-size: 1rem; margin-bottom: 1rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .field { margin-bottom: 1rem; }
    .field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem; color: var(--text); }
    .field input, .field select { width: 100%; padding: 0.6rem 0.75rem; border: 1px solid var(--border); border-radius: var(--etxa-radius-sm); font-size: 0.9rem; font-family: inherit; background: var(--bg); color: var(--text); box-sizing: border-box; }
    .field input:focus, .field select:focus { outline: 2px solid var(--primary); outline-offset: -1px; }
    .checkbox-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }
    .checkbox-grid label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; cursor: pointer; }
    .checkbox-grid input[type="checkbox"] { width: auto; }
    .macro-card { background: var(--etxa-color-primary-soft); border: 1px solid var(--etxa-color-border); border-radius: var(--etxa-radius-md); padding: 1.25rem; }
    .macro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem; }
    .macro-item { text-align: center; }
    .macro-item .value { font-size: 1.5rem; font-weight: 700; color: var(--primary); }
    .macro-item .label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
    .actions button { padding: 0.625rem 1.25rem; border: none; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; font-weight: 600; font-family: inherit; cursor: pointer; }
    .btn-primary { background: var(--primary); color: white; }
    .btn-primary:hover { background: var(--primary-hover); }
    .btn-primary:disabled { opacity: 0.6; }
    .btn-danger { background: var(--etxa-color-danger-soft); color: var(--etxa-color-danger); border: 1px solid var(--etxa-color-danger-border) !important; }
    .btn-danger:hover { background: var(--etxa-color-danger-hover); }
    .error { background: var(--etxa-color-danger-soft); color: var(--etxa-color-danger); padding: 0.75rem; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; margin-bottom: 1rem; }
    .success { background: var(--etxa-color-success-soft); color: var(--etxa-color-success); padding: 0.75rem; border-radius: var(--etxa-radius-sm); font-size: 0.875rem; margin-bottom: 1rem; }

    .modules-card { margin-bottom: 1.5rem; }
    .modules-hint { font-size: 0.8125rem; color: var(--text-muted); margin: -0.5rem 0 1rem; }
    .modules-list { display: grid; gap: 0.5rem; }
    @media (min-width: 48rem) { .modules-list { grid-template-columns: 1fr 1fr; } }

    .backup-details { margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border); }
    .backup-details summary { cursor: pointer; font-weight: 600; font-size: 0.9rem; color: var(--text); min-height: var(--etxa-touch-target); display: flex; align-items: center; }
    .storage-notice {
      background: var(--etxa-color-warning-soft);
      border: 1px solid var(--etxa-color-warning-border);
      color: var(--etxa-color-warning-strong);
      border-radius: var(--etxa-radius-md);
      padding: 0.75rem 1rem;
      font-size: 0.8125rem;
      line-height: 1.45;
      margin-bottom: 0.75rem;
    }
    .storage-notice strong { display: block; margin-bottom: 0.2rem; }
    .backup-details .hint { font-size: 0.8125rem; color: var(--text-muted); margin: 0.5rem 0 0.75rem; }
    .backup-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .backup-actions button, .backup-actions .file-label {
      padding: 0.5rem 1rem; border-radius: var(--etxa-radius-sm); font-size: 0.8125rem; font-weight: 600;
      font-family: inherit; cursor: pointer; display: inline-flex; align-items: center;
    }
    .btn-outline { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
    .btn-outline:hover { background: var(--etxa-color-surface-hover); }
    .backup-actions button:disabled, .file-label.disabled { opacity: 0.6; cursor: not-allowed; }

    @media (max-width: 768px) {
      .profile-grid { grid-template-columns: 1fr; }
      .checkbox-grid { grid-template-columns: 1fr; }
      .macro-grid { grid-template-columns: 1fr 1fr; }
    }
  `];Ee([v()],ve.prototype,"_user",2);Ee([v()],ve.prototype,"_familyMembers",2);Ee([v()],ve.prototype,"_selectedMemberId",2);Ee([v()],ve.prototype,"_loading",2);Ee([v()],ve.prototype,"_saving",2);Ee([v()],ve.prototype,"_error",2);Ee([v()],ve.prototype,"_success",2);Ee([v()],ve.prototype,"_form",2);Ee([v()],ve.prototype,"_liveMacros",2);Ee([v()],ve.prototype,"_backupBusy",2);Ee([v()],ve.prototype,"_modules",2);Ee([v()],ve.prototype,"_modulesError",2);Ee([v()],ve.prototype,"_modulesSaving",2);ve=Ee([Y("profile-page")],ve);var sh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,Qe=(e,t,r,a)=>{for(var i=a>1?void 0:a?lh(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,r,i):o(i))||i);return a&&i&&sh(t,r,i),i};kl();Ml();Tl();const ch=!0,dh=["loading","login","register","onboarding","inicio","plan","nevera","recetas","compra","hogar","tareas","perfil"],kt="inicio",uh=["plan","compra","tareas","hogar","nevera","recetas"];let Oe=class extends W{constructor(){super(...arguments),this._page="loading",this._authed=!1,this._needsOnboarding=!1,this._menuOpen=!1,this._loginMessage="",this._globalError="",this._routeNotice="",this._modules=[...xn],this._homeName="",this._onModulesChanged=e=>{var t;Array.isArray((t=e.detail)==null?void 0:t.modules)&&(this._modules=[...e.detail.modules],this._onHashChange())},this._onHashChange=()=>{const e=window.location.hash.replace(/^#\//,"")||kt;if(this._authed=Bo(),!this._authed){this._page=e==="register"?"register":"login";return}if(this._needsOnboarding&&e!=="onboarding"){window.location.hash="#/onboarding";return}if(!dh.includes(e)){window.location.hash=`#/${kt}`;return}if(e!=="onboarding"){const t=Ol(e);if(t&&!this._modules.includes(t)){this._routeNotice=`${as(t).title} está desactivado ahora mismo. Puedes volver a activarlo en Perfil.`,window.location.hash=`#/${kt}`;return}}e!==kt&&(this._routeNotice=""),this._page=e},this._goToRegister=e=>{e.preventDefault(),window.location.hash="#/register"},this._goToLogin=e=>{e.preventDefault(),window.location.hash="#/login"},this._onLogin=()=>{this._authed=!0,this._loginMessage="",this._checkOnboarding().then(()=>{window.location.hash=this._needsOnboarding?"#/onboarding":`#/${kt}`})},this._onOnboardingComplete=()=>{this._needsOnboarding=!1,window.location.hash="#/plan"},this._onHomeSetupComplete=async e=>{var r;this._needsOnboarding=!1,await this._checkOnboarding();const t=((r=e.detail)==null?void 0:r.destination)==="perfil"?"perfil":kt;window.location.hash=`#/${t}`},this._onLogout=e=>{e.preventDefault(),this._authed=!1,this._loginMessage="",window.location.hash="#/login"},this._navigate=e=>{const t=e.currentTarget;t&&(window.location.hash=t.hash)},this._onBottomSelect=e=>{if(e.detail.id==="__more__"){this._menuOpen=!0;return}window.location.hash=e.detail.href}}connectedCallback(){super.connectedCallback(),this._authed=Bo(),this._init(),window.addEventListener("hashchange",this._onHashChange),window.addEventListener("etxa-modules-changed",this._onModulesChanged)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChange),window.removeEventListener("etxa-modules-changed",this._onModulesChanged)}async _init(){this._authed?await this._checkOnboarding():(!window.location.hash||window.location.hash==="#/")&&(window.location.hash="#/login"),this._onHashChange()}async _checkOnboarding(){try{if(ch){const e=await tt.getHomeSettings();this._modules=[...e.enabledModules],this._homeName=e.name,this._needsOnboarding=e.onboardingCompletedAt===null}this._globalError=""}catch{this._globalError="No se pudo comprobar la configuración de tu casa. Vuelve a intentarlo en unos segundos."}}get _routes(){return Dl(this._modules)}get _bottomRoutes(){const e=this._routes.filter(r=>r.id!==ji.id&&r.id!==rs.id),t=uh.map(r=>e.find(a=>a.id===r)).filter(r=>r!==void 0).slice(0,2);return[ji,...t]}get _moreRoutes(){const e=new Set(this._bottomRoutes.map(t=>t.id));return this._routes.filter(t=>!e.has(t.id))}get _bottomItems(){return[...this._bottomRoutes.map(e=>({...e,href:`#/${e.id}`})),{id:"__more__",label:"Más",href:"",icon:"more"}]}_renderPage(){switch(this._page){case"loading":return d`<div class="loading-screen"><p>Cargando...</p></div>`;case"login":return d`<login-page
          .message=${this._loginMessage}
          @register=${this._goToRegister}
          @login-success=${this._onLogin}
        ></login-page>`;case"register":return d`<register-page
          @login=${this._goToLogin}
          @register-success=${this._onLogin}
        ></register-page>`;case"onboarding":return d`<home-onboarding-page
              @home-setup-complete=${this._onHomeSetupComplete}
            ></home-onboarding-page>`;case"inicio":return d`<home-view .modules=${this._routeModules} .homeName=${this._homeName}></home-view>`;case"plan":return d`<plan-view></plan-view>`;case"nevera":return d`<pantry-view></pantry-view>`;case"recetas":return d`<recetas-view></recetas-view>`;case"compra":return d`<compra-view></compra-view>`;case"hogar":return d`<household-view></household-view>`;case"tareas":return d`<chores-view></chores-view>`;case"perfil":return d`<profile-page></profile-page>`;default:return d`<p>Página no encontrada</p>`}}get _routeModules(){return this._modules}_isActive(e){return this._page===e?"active":""}render(){if(this._page==="loading"||this._page==="login"||this._page==="register"||this._page==="onboarding")return d`
        <div class="app-shell">
          ${this._renderPage()}
        </div>
      `;const e=()=>{this._menuOpen=!1},t=this._bottomRoutes.some(r=>r.id===this._page)?this._page:"__more__";return d`
      <div class="app-shell">
        <header>
          <a class="brand-link" href="#/${kt}" @click=${this._navigate} aria-label="Etxa, ir a Inicio">
            <etxa-logo></etxa-logo>
          </a>
          <nav class="desktop" aria-label="Navegación principal">
            ${this._routes.map(r=>d`
              <a href="#/${r.id}" class=${this._isActive(r.id)} @click=${this._navigate}>${r.label}</a>
            `)}
            ${""}
          </nav>
        </header>

        <main>
          ${this._globalError?d`<div class="global-banner">${this._globalError}</div>`:""}
          ${this._routeNotice?d`<div class="route-notice" role="status">
                ${this._routeNotice} <a href="#/perfil" @click=${this._navigate}>Ir a Perfil</a>
              </div>`:""}
          ${this._renderPage()}
        </main>

        <bottom-navigation
          .items=${this._bottomItems}
          .active=${t}
          @navigation-select=${this._onBottomSelect}
        ></bottom-navigation>

        <div class="overlay ${this._menuOpen?"open":""}" @click=${e}></div>
        ${this._menuOpen?d`
              <div class="sheet" role="dialog" aria-modal="true" aria-label="Más secciones" @click=${e}>
                <h2>Más</h2>
                ${this._moreRoutes.map(r=>d`
                  <a
                    href="#/${r.id}"
                    aria-current=${this._page===r.id?"page":void 0}
                    @click=${this._navigate}
                  >
                    <app-icon .name=${r.icon} size="22"></app-icon>${r.label}
                  </a>
                `)}
                ${""}
              </div>
            `:""}
      </div>
    `}};Oe.styles=[es,ts,Re,Ve,H`
    :host {
      display: block;
      min-height: 100dvh;
      background: var(--etxa-color-background);
      color: var(--etxa-color-text);
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
      background: var(--etxa-color-surface);
      border-bottom: 1px solid var(--etxa-color-border);
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      height: 64px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .brand-link {
      display: inline-flex;
      align-items: center;
      min-height: var(--etxa-touch-target);
      border-radius: var(--etxa-radius-sm);
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }

    .brand-link etxa-logo { pointer-events: none; }

    nav.desktop {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    nav.desktop a, nav.desktop button {
      text-decoration: none;
      color: var(--etxa-color-text-muted);
      padding: 0.5rem 0.75rem;
      min-height: var(--etxa-touch-target);
      display: inline-flex;
      align-items: center;
      border-radius: var(--etxa-radius-sm);
      font-size: 0.875rem;
      font-weight: 600;
      transition: background 0.15s, color 0.15s;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
    }

    nav.desktop a:hover, nav.desktop button:hover {
      background: color-mix(in srgb, var(--etxa-color-primary), transparent 92%);
      color: var(--etxa-color-primary-strong);
    }

    nav.desktop a.active {
      color: var(--etxa-color-primary-strong);
      background: color-mix(in srgb, var(--etxa-color-primary), transparent 88%);
    }

    main {
      flex: 1;
      padding: 1.5rem;
      max-width: var(--etxa-content-width);
      width: 100%;
      margin: 0 auto;
    }

    bottom-navigation {
      display: none;
      position: sticky;
      bottom: 0;
      z-index: 100;
    }

    .overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgb(46 46 46 / 40%);
      z-index: 110;
    }

    .overlay.open { display: block; }

    .sheet {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 120;
      background: var(--etxa-color-surface);
      border-radius: var(--etxa-radius-lg) var(--etxa-radius-lg) 0 0;
      box-shadow: var(--etxa-shadow-md);
      padding: var(--etxa-space-4) var(--etxa-space-4)
        calc(var(--etxa-space-4) + env(safe-area-inset-bottom));
      display: flex;
      flex-direction: column;
      gap: var(--etxa-space-2);
    }

    .sheet h2 {
      font-family: var(--etxa-font-heading);
      font-size: 1rem;
      margin-bottom: var(--etxa-space-1);
    }

    .sheet a, .sheet button {
      display: flex;
      align-items: center;
      gap: var(--etxa-space-3);
      min-height: var(--etxa-touch-target);
      padding: 0 var(--etxa-space-3);
      border: 0;
      border-radius: var(--etxa-radius-md);
      background: none;
      color: var(--etxa-color-text);
      text-decoration: none;
      font: inherit;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
    }

    .sheet a[aria-current='page'] {
      background: color-mix(in srgb, var(--etxa-color-primary), transparent 88%);
      color: var(--etxa-color-primary-strong);
    }

    .global-banner, .route-notice {
      background: color-mix(in srgb, var(--etxa-color-accent), white 45%);
      color: #7a5a12;
      border: 1px solid var(--etxa-color-accent);
      border-radius: var(--etxa-radius-md);
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .route-notice a {
      color: inherit;
      font-weight: 700;
    }

    .loading-screen {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      font-size: 1.125rem;
      color: var(--etxa-color-text-muted);
    }

    @media (max-width: 768px) {
      header { display: none; }
      bottom-navigation { display: block; }
      main { padding: 1rem; }
    }
  `];Qe([v()],Oe.prototype,"_page",2);Qe([v()],Oe.prototype,"_authed",2);Qe([v()],Oe.prototype,"_needsOnboarding",2);Qe([v()],Oe.prototype,"_menuOpen",2);Qe([v()],Oe.prototype,"_loginMessage",2);Qe([v()],Oe.prototype,"_globalError",2);Qe([v()],Oe.prototype,"_routeNotice",2);Qe([v()],Oe.prototype,"_modules",2);Qe([v()],Oe.prototype,"_homeName",2);Oe=Qe([Y("mpp-app")],Oe);export{Fa as R,X as n,f as s};
