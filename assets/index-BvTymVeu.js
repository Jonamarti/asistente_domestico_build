(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=globalThis,on=di.ShadowRoot&&(di.ShadyCSS===void 0||di.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sn=Symbol(),Ln=new WeakMap;let Po=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==sn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(on&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Ln.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ln.set(r,t))}return t}toString(){return this.cssText}};const Oo=e=>new Po(typeof e=="string"?e:e+"",void 0,sn),H=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,a,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[n+1],e[0]);return new Po(r,e,sn)},Xs=(e,t)=>{if(on)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=di.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},Bn=on?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Oo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zs,defineProperty:Js,getOwnPropertyDescriptor:el,getOwnPropertyNames:tl,getOwnPropertySymbols:rl,getPrototypeOf:il}=Object,ct=globalThis,Kn=ct.trustedTypes,al=Kn?Kn.emptyScript:"",ia=ct.reactiveElementPolyfillSupport,wr=(e,t)=>e,_i={toAttribute(e,t){switch(t){case Boolean:e=e?al:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ln=(e,t)=>!Zs(e,t),jn={attribute:!0,type:String,converter:_i,reflect:!1,useDefault:!1,hasChanged:ln};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ct.litPropertyMetadata??(ct.litPropertyMetadata=new WeakMap);let qt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=jn){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,r);a!==void 0&&Js(this.prototype,t,a)}}static getPropertyDescriptor(t,r,i){const{get:a,set:n}=el(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:a,set(o){const s=a==null?void 0:a.call(this);n==null||n.call(this,o),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jn}static _$Ei(){if(this.hasOwnProperty(wr("elementProperties")))return;const t=il(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wr("properties"))){const r=this.properties,i=[...tl(r),...rl(r)];for(const a of i)this.createProperty(a,r[a])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,a]of r)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const a=this._$Eu(r,i);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)r.unshift(Bn(a))}else t!==void 0&&r.push(Bn(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){var n;const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:_i).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,r){var n,o;const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const s=i.getPropertyOptions(a),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:_i;this._$Em=a;const c=l.fromAttribute(r,s.type);this[a]=c??((o=this._$Ej)==null?void 0:o.get(a))??c,this._$Em=null}}requestUpdate(t,r,i,a=!1,n){var o;if(t!==void 0){const s=this.constructor;if(a===!1&&(n=this[t]),i??(i=s.getPropertyOptions(t)),!((i.hasChanged??ln)(n,r)||i.useDefault&&i.reflect&&n===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??r??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),a===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[n,o]of a){const{wrapped:s}=o,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(a=>{var n;return(n=a.hostUpdate)==null?void 0:n.call(a)}),this.update(r)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};qt.elementStyles=[],qt.shadowRootOptions={mode:"open"},qt[wr("elementProperties")]=new Map,qt[wr("finalized")]=new Map,ia==null||ia({ReactiveElement:qt}),(ct.reactiveElementVersions??(ct.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xr=globalThis,Gn=e=>e,wi=xr.trustedTypes,Un=wi?wi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ro="$lit$",nt=`lit$${Math.random().toFixed(9).slice(2)}$`,Fo="?"+nt,nl=`<${Fo}>`,Pt=document,kr=()=>Pt.createComment(""),Er=e=>e===null||typeof e!="object"&&typeof e!="function",cn=Array.isArray,ol=e=>cn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",aa=`[ 	
\f\r]`,ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qn=/-->/g,Hn=/>/g,_t=RegExp(`>|${aa}(?:([^\\s"'>=/]+)(${aa}*=${aa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vn=/'/g,Wn=/"/g,No=/^(?:script|style|textarea|title)$/i,zo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),d=zo(1),Re=zo(2),Yt=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),Qn=new WeakMap,Et=Pt.createTreeWalker(Pt,129);function Lo(e,t){if(!cn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Un!==void 0?Un.createHTML(t):t}const sl=(e,t)=>{const r=e.length-1,i=[];let a,n=t===2?"<svg>":t===3?"<math>":"",o=ur;for(let s=0;s<r;s++){const l=e[s];let c,u,p=-1,m=0;for(;m<l.length&&(o.lastIndex=m,u=o.exec(l),u!==null);)m=o.lastIndex,o===ur?u[1]==="!--"?o=qn:u[1]!==void 0?o=Hn:u[2]!==void 0?(No.test(u[2])&&(a=RegExp("</"+u[2],"g")),o=_t):u[3]!==void 0&&(o=_t):o===_t?u[0]===">"?(o=a??ur,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_t:u[3]==='"'?Wn:Vn):o===Wn||o===Vn?o=_t:o===qn||o===Hn?o=ur:(o=_t,a=void 0);const w=o===_t&&e[s+1].startsWith("/>")?" ":"";n+=o===ur?l+nl:p>=0?(i.push(c),l.slice(0,p)+Ro+l.slice(p)+nt+w):l+nt+(p===-2?s:w)}return[Lo(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Sr{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let n=0,o=0;const s=t.length-1,l=this.parts,[c,u]=sl(t,r);if(this.el=Sr.createElement(c,i),Et.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=Et.nextNode())!==null&&l.length<s;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(Ro)){const m=u[o++],w=a.getAttribute(p).split(nt),h=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:h[2],strings:w,ctor:h[1]==="."?cl:h[1]==="?"?dl:h[1]==="@"?ul:Gi}),a.removeAttribute(p)}else p.startsWith(nt)&&(l.push({type:6,index:n}),a.removeAttribute(p));if(No.test(a.tagName)){const p=a.textContent.split(nt),m=p.length-1;if(m>0){a.textContent=wi?wi.emptyScript:"";for(let w=0;w<m;w++)a.append(p[w],kr()),Et.nextNode(),l.push({type:2,index:++n});a.append(p[m],kr())}}}else if(a.nodeType===8)if(a.data===Fo)l.push({type:2,index:n});else{let p=-1;for(;(p=a.data.indexOf(nt,p+1))!==-1;)l.push({type:7,index:n}),p+=nt.length-1}n++}}static createElement(t,r){const i=Pt.createElement("template");return i.innerHTML=t,i}}function Xt(e,t,r=e,i){var o,s;if(t===Yt)return t;let a=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=Er(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==n&&((s=a==null?void 0:a._$AO)==null||s.call(a,!1),n===void 0?a=void 0:(a=new n(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=a:r._$Cl=a),a!==void 0&&(t=Xt(e,a._$AS(e,t.values),a,i)),t}class ll{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,a=((t==null?void 0:t.creationScope)??Pt).importNode(r,!0);Et.currentNode=a;let n=Et.nextNode(),o=0,s=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Br(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new pl(n,this,t)),this._$AV.push(c),l=i[++s]}o!==(l==null?void 0:l.index)&&(n=Et.nextNode(),o++)}return Et.currentNode=Pt,a}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Br{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Xt(this,t,r),Er(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==Yt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ol(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&Er(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Sr.createElement(Lo(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===a)this._$AH.p(r);else{const o=new ll(a,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=Qn.get(t.strings);return r===void 0&&Qn.set(t.strings,r=new Sr(t)),r}k(t){cn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const n of t)a===r.length?r.push(i=new Br(this.O(kr()),this.O(kr()),this,this.options)):i=r[a],i._$AI(n),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t!==this._$AB;){const a=Gn(t).nextSibling;Gn(t).remove(),t=a}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Gi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,a,n){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=se}_$AI(t,r=this,i,a){const n=this.strings;let o=!1;if(n===void 0)t=Xt(this,t,r,0),o=!Er(t)||t!==this._$AH&&t!==Yt,o&&(this._$AH=t);else{const s=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=Xt(this,s[i+l],r,l),c===Yt&&(c=this._$AH[l]),o||(o=!Er(c)||c!==this._$AH[l]),c===se?t=se:t!==se&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!a&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class cl extends Gi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class dl extends Gi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class ul extends Gi{constructor(t,r,i,a,n){super(t,r,i,a,n),this.type=5}_$AI(t,r=this){if((t=Xt(this,t,r,0)??se)===Yt)return;const i=this._$AH,a=t===se&&i!==se||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==se&&(i===se||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class pl{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Xt(this,t)}}const na=xr.litHtmlPolyfillSupport;na==null||na(Sr,Br),(xr.litHtmlVersions??(xr.litHtmlVersions=[])).push("3.3.3");const hl=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let a=i._$litPart$;if(a===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=a=new Br(t.insertBefore(kr(),n),n,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis;class Q extends qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Yt}}var To;Q._$litElement$=!0,Q.finalized=!0,(To=Mt.litElementHydrateSupport)==null||To.call(Mt,{LitElement:Q});const oa=Mt.litElementPolyfillSupport;oa==null||oa({LitElement:Q});(Mt.litElementVersions??(Mt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ml={attribute:!0,type:String,converter:_i,reflect:!1,hasChanged:ln},fl=(e=ml,t,r)=>{const{kind:i,metadata:a}=r;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),i==="accessor"){const{name:o}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,l,e,!0,s)},init(s){return s!==void 0&&this.C(o,void 0,e,s),s}}}if(i==="setter"){const{name:o}=r;return function(s){const l=this[o];t.call(this,s),this.requestUpdate(o,l,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function Y(e){return(t,r)=>typeof r=="object"?fl(e,t,r):((i,a,n)=>{const o=a.hasOwnProperty(n);return a.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(a,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(e){return Y({...e,state:!0,attribute:!1})}const pr={terracotta:"#D66B52",olive:"#6B7F5B",cream:"#F8F6EE",charcoal:"#2E2E2E",butter:"#F6E3A1"},Bo=`
  --etxa-color-primary: ${pr.terracotta};
  --etxa-color-primary-strong: #a84432;
  --etxa-color-primary-hover: #8b3428;
  --etxa-color-secondary: ${pr.olive};
  --etxa-color-background: ${pr.cream};
  --etxa-color-surface: #fffdf8;
  --etxa-color-text: ${pr.charcoal};
  --etxa-color-text-muted: #68665f;
  --etxa-color-accent: ${pr.butter};
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
`,Ko=H`
  :host {
    ${Oo(Bo)}
  }
`;function gl(){if(document.querySelector("[data-etxa-tokens]"))return;const e=document.createElement("style");e.dataset.etxaTokens="",e.textContent=`:root { ${Bo} }`,document.head.append(e)}const vl="/asistente_domestico_build/assets/inter-variable-DiVDrmQJ.woff2",yl="/asistente_domestico_build/assets/sora-variable-BedAVQot.woff2",jo=H`
  :host {
    font-family: var(--etxa-font-body);
    font-synthesis: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--etxa-font-heading);
    text-wrap: balance;
  }
`;function bl(){if(document.querySelector("[data-etxa-typography]"))return;const e=document.createElement("style");e.dataset.etxaTypography="",e.textContent=`
    @font-face {
      font-family: 'Inter';
      src: url('${vl}') format('woff2');
      font-style: normal;
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
      font-family: 'Sora';
      src: url('${yl}') format('woff2');
      font-style: normal;
      font-weight: 100 800;
      font-display: swap;
    }
  `,document.head.append(e)}const Pe=H`
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
`,Ui=H`
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
`,He=H`
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`,_l="/asistente_domestico_build/assets/done-house-BgF1dyos.webp",wl="/asistente_domestico_build/assets/welcome-kitchen-8re3KmDC.webp",dn={welcomeKitchen:wl,doneHouse:_l};function xl(){if(document.querySelector("[data-etxa-welcome-preload]"))return;const e=document.createElement("link");e.rel="preload",e.as="image",e.href=dn.welcomeKitchen,e.dataset.etxaWelcomePreload="",document.head.append(e)}const Da={id:"inicio",label:"Inicio",icon:"home"},Go={id:"perfil",label:"Perfil",icon:"profile"},Kr=[{id:"MEALS",title:"Comidas",summary:"Planifica menús, guarda recetas y controla la nevera",description:"Planifica el menú de la semana, guarda tus recetas y aprovecha lo que ya tienes en la nevera antes de que caduque.",icon:"recipes",routes:[{id:"plan",label:"Planificar",icon:"calendar"},{id:"nevera",label:"Nevera",icon:"fridge"},{id:"recetas",label:"Recetas",icon:"recipes"}]},{id:"SHOPPING",title:"Compra",summary:"Una lista que se calcula sola a partir del plan",description:"La lista de la compra se genera a partir del plan y de lo que falta en casa, y se recalcula sola cuando cambias algo.",icon:"cart",routes:[{id:"compra",label:"Compras",icon:"cart"}]},{id:"HOUSEHOLD",title:"Hogar",summary:"Limpieza, higiene y todo lo que no se come",description:"Lleva el inventario de lo que no se come —limpieza, higiene, papelería— y avisa cuando algo baja del mínimo.",icon:"household",routes:[{id:"hogar",label:"Hogar",icon:"household"}]},{id:"CHORES",title:"Tareas",summary:"Tareas diarias y semanales repartidas en casa",description:"Reparte las tareas diarias y semanales entre quienes vivís en casa y ve de un vistazo lo que queda por hacer hoy.",icon:"chores",routes:[{id:"tareas",label:"Tareas",icon:"chores"}]}];function Uo(e){const t=Kr.find(r=>r.id===e);if(!t)throw new Error(`Módulo desconocido: ${e}`);return t}function qo(e){return Kr.filter(t=>e.includes(t.id))}function $l(e){return[Da,...qo(e).flatMap(t=>t.routes),Go]}function Il(e){const t=Kr.find(r=>r.routes.some(i=>i.id===e));return t?t.id:null}const un=["MEALS","SHOPPING","HOUSEHOLD","CHORES"],kl=["APARTMENT","HOUSE","OTHER"],xi=1,$i=5,Ii=["MEALS","SHOPPING"];function Ho(e){return typeof e=="string"&&un.includes(e)}function Ta(e){return typeof e=="string"&&kl.includes(e)}function El(e,t=Ii){if(!Array.isArray(e))return[...t];const r=[...new Set(e.filter(Ho))];return r.length>0?r:[...t]}function sa(e){if(!Array.isArray(e)||e.length===0)throw new Error("Selecciona al menos un módulo.");if(!e.every(Ho))throw new Error("La selección contiene módulos no válidos.");return[...new Set(e)]}const Kt=new Date(0).toISOString();let la=null,Pa=null;async function ca(e){const t=await fetch(e);if(!t.ok)throw new Error(`No se pudo cargar ${e} (HTTP ${t.status})`);return t.json()}function Sl(e,t,r){const i=new Map,a=[];for(const c of e){const u=Object.freeze({...c,lastRefreshedAt:null,createdAt:Kt});i.set(u.id,u),a.push(u)}a.sort((c,u)=>c.name.localeCompare(u.name));const n=new Map,o=[];for(const c of t){const u=c.ingredients.map(m=>Object.freeze({...m,food:i.get(m.foodId)??null})),p=Object.freeze({...c,createdAt:Kt,updatedAt:Kt,ingredients:Object.freeze(u)});n.set(p.id,p),o.push(p)}const s=r.templates.map(c=>Object.freeze({...c,familyId:null,createdAt:Kt,updatedAt:Kt,meals:Object.freeze(c.meals.map((u,p)=>Object.freeze({...u,id:`${c.id}:${p}`,templateId:c.id})))})),l=r.householdItems.map(c=>Object.freeze({...c,createdAt:Kt}));return{version:r.catalogVersion,foodsById:i,foodsList:a,recipesById:n,recipesList:o,templates:s,householdItems:l}}function Cl(){return la||(la=(async()=>{const[e,t,r]=await Promise.all([ca(new URL("/asistente_domestico_build/assets/catalog-foods-ko3gnLMN.json",import.meta.url)),ca(new URL("/asistente_domestico_build/assets/catalog-recipes-D-w00Vw2.json",import.meta.url)),ca(new URL("/asistente_domestico_build/assets/catalog-meta-CoearB-A.json",import.meta.url))]),i=Sl(e,t,r);return Pa=i,i})()),la}function Le(){if(!Pa)throw new Error("Catálogo todavía no disponible: usa `await whenReady()` antes de leer la tienda.");return Pa}function Ml(e){return e instanceof Date&&!Number.isNaN(e.getTime())}function pn(e,t=new Date){if(!e.family)return{store:e,changed:!1};const r=e.family,i=!Object.prototype.hasOwnProperty.call(r,"onboardingVersion"),a=e.members.some(h=>typeof h.dailyCalories=="number"&&h.dailyCalories>0),n=i&&a?t:Ml(r.onboardingCompletedAt)?r.onboardingCompletedAt:null,o=n!==null,s=El(r.enabledModules,i&&a?un:Ii),l=typeof r.onboardingStep=="number"&&Number.isInteger(r.onboardingStep)?r.onboardingStep:0,c=o?$i:Math.min($i-1,Math.max(0,l)),u=typeof r.onboardingVersion=="number"&&Number.isInteger(r.onboardingVersion)?r.onboardingVersion:0,p=o?xi:Math.min(xi,Math.max(0,u)),m={...e.family,onboardingVersion:p,onboardingStep:c,onboardingCompletedAt:n,enabledModules:s,homeType:Ta(r.homeType)?r.homeType:null},w=r.onboardingVersion!==m.onboardingVersion||r.onboardingStep!==m.onboardingStep||r.onboardingCompletedAt!==m.onboardingCompletedAt||r.homeType!==m.homeType||!Array.isArray(r.enabledModules)||r.enabledModules.length!==m.enabledModules.length||r.enabledModules.some((h,g)=>h!==m.enabledModules[g]);return{store:{...e,family:m},changed:w}}function G(e){if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>G(t));if(e!==null&&typeof e=="object"){const t={};for(const[r,i]of Object.entries(e))i!==void 0&&(t[r]=G(i));return t}return e}const ki={family:["onboardingCompletedAt","createdAt"],members:["weightDate","createdAt","updatedAt"],weightHistory:["date"],foods:["lastRefreshedAt","createdAt"],pantryItems:["purchaseDate","expiryDate","createdAt","updatedAt"],recipes:["createdAt","updatedAt"],mealPlans:["weekStart","createdAt","updatedAt"],meals:[],templates:["createdAt","updatedAt"],shoppingLists:["weekStart","createdAt"],shoppingItems:[],shoppingSections:["createdAt"],shoppingSectionItems:[],householdItems:["createdAt"],householdStockItems:["createdAt","updatedAt"],chores:["createdAt"],choreCompletions:["date"]};function Yn(e,t){if(t.length===0)return e;const r={...e};for(const i of t)r[i]instanceof Date&&(r[i]=r[i].toISOString());return r}function Xn(e,t){if(t.length===0)return e;const r={...e};for(const i of t)typeof r[i]=="string"&&(r[i]=new Date(r[i]));return r}function Al(e){const t={};for(const r of Object.keys(ki)){const i=ki[r];r==="family"?t[r]=e.family?Yn(e.family,i):null:t[r]=e[r].map(a=>Yn(a,i))}return t}function Dl(e){const t={};for(const r of Object.keys(ki)){const i=ki[r],a=e[r];r==="family"?t[r]=a?Xn(a,i):null:t[r]=Array.isArray(a)?a.map(n=>Xn(n,i)):[]}return pn(t).store}const Vo="MealPrepHelper",Wo="backup",Oa=1;function Tl(e){return{app:Vo,kind:Wo,schemaVersion:Oa,catalogVersion:Le().version,exportedAt:new Date().toISOString(),data:Al(e)}}function Pl(e){if(!e||typeof e!="object")throw new Error("El fichero no es un backup válido de MealPrepHelper.");const t=e;if(t.app!==Vo||t.kind!==Wo)throw new Error("El fichero no es un backup de MealPrepHelper.");if(t.schemaVersion!==Oa)throw new Error(`Versión de backup no soportada (${t.schemaVersion}). Esta versión de la app espera ${Oa}.`);if(!t.data||typeof t.data!="object")throw new Error("El backup no contiene datos.");if(!t.data.family)throw new Error("El backup no contiene una unidad familiar.");return t}function Ol(e){const t=Le(),r={droppedMeals:0,droppedTemplateMeals:0,droppedPantryItems:0,droppedShoppingItems:0,droppedShoppingSections:0,droppedShoppingSectionItems:0,droppedStockItems:0,droppedChoreCompletions:0,droppedWeightHistory:0,nulledMemberRefs:0,nulledHouseholdRefs:0,totalDropped:0};for(const b of e.members)b.isStandardProfile=b.isStandardProfile??!1;const i=new Set(e.members.map(b=>b.id)),a=new Set([...t.foodsById.keys(),...e.foods.map(b=>b.id)]),n=new Set([...t.recipesById.keys(),...e.recipes.map(b=>b.id)]),o=new Set(e.mealPlans.map(b=>b.id)),s=new Set([...t.householdItems.map(b=>b.id),...e.householdItems.map(b=>b.id)]),l=e.meals.filter(b=>!(!o.has(b.planId)||b.recipeId&&!n.has(b.recipeId)));r.droppedMeals=e.meals.length-l.length;for(const b of l)b.assignedToMemberId&&!i.has(b.assignedToMemberId)&&(b.assignedToMemberId=null,r.nulledMemberRefs++);let c=0;const u=e.templates.map(b=>{const C=b.meals.filter(k=>n.has(k.recipeId));return c+=b.meals.length-C.length,{...b,meals:C}});r.droppedTemplateMeals=c;const p=e.pantryItems.filter(b=>a.has(b.foodId));r.droppedPantryItems=e.pantryItems.length-p.length;const m=new Set(e.shoppingLists.map(b=>b.id)),w=e.shoppingItems.filter(b=>m.has(b.listId)&&a.has(b.foodId));r.droppedShoppingItems=e.shoppingItems.length-w.length;const h=e.shoppingSections.filter(b=>m.has(b.listId));r.droppedShoppingSections=e.shoppingSections.length-h.length;const g=new Set(h.map(b=>b.id)),_=e.shoppingSectionItems.filter(b=>g.has(b.sectionId));r.droppedShoppingSectionItems=e.shoppingSectionItems.length-_.length;for(const b of _)b.householdItemId&&!s.has(b.householdItemId)&&(b.householdItemId=null,r.nulledHouseholdRefs++);const v=e.householdStockItems.filter(b=>s.has(b.householdItemId));r.droppedStockItems=e.householdStockItems.length-v.length;for(const b of e.chores)b.assignedToMemberId&&!i.has(b.assignedToMemberId)&&(b.assignedToMemberId=null,r.nulledMemberRefs++);const I=new Set(e.chores.map(b=>b.id)),$=e.choreCompletions.filter(b=>I.has(b.choreId));r.droppedChoreCompletions=e.choreCompletions.length-$.length;for(const b of $)b.completedByMemberId&&!i.has(b.completedByMemberId)&&(b.completedByMemberId=null,r.nulledMemberRefs++);const x=e.weightHistory.filter(b=>i.has(b.memberId));return r.droppedWeightHistory=e.weightHistory.length-x.length,r.totalDropped=r.droppedMeals+r.droppedTemplateMeals+r.droppedPantryItems+r.droppedShoppingItems+r.droppedShoppingSections+r.droppedShoppingSectionItems+r.droppedStockItems+r.droppedChoreCompletions+r.droppedWeightHistory,{store:{...e,meals:l,templates:u,pantryItems:p,shoppingItems:w,shoppingSections:h,shoppingSectionItems:_,householdStockItems:v,choreCompletions:$,weightHistory:x},report:r}}function Rl(e){const t=Dl(e.data),{store:r,report:i}=Ol(t),a=e.catalogVersion!==Le().version;return{store:r,report:i,catalogVersionMismatch:a}}const Fl="modulepreload",Nl=function(e){return"/asistente_domestico_build/"+e},Zn={},Qo=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=o(r.map(c=>{if(c=Nl(c),c in Zn)return;Zn[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Fl,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((w,h)=>{m.addEventListener("load",w),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return a.then(o=>{for(const s of o||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var Ra=function(e,t){return Ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},Ra(e,t)};function zl(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ra(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var j=function(){return j=Object.assign||function(t){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},j.apply(this,arguments)};function Ei(e,t,r){for(var i=0,a=t.length,n;i<a;i++)(n||!(i in t))&&(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var ue=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ce=Object.keys,ee=Array.isArray;typeof Promise<"u"&&!ue.Promise&&(ue.Promise=Promise);function Ee(e,t){return typeof t!="object"||ce(t).forEach(function(r){e[r]=t[r]}),e}var Zt=Object.getPrototypeOf,Ll={}.hasOwnProperty;function Se(e,t){return Ll.call(e,t)}function Jt(e,t){typeof t=="function"&&(t=t(Zt(e))),(typeof Reflect>"u"?ce:Reflect.ownKeys)(t).forEach(function(r){dt(e,r,t[r])})}var Yo=Object.defineProperty;function dt(e,t,r,i){Yo(e,t,Ee(r&&Se(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,writable:!0},i))}function ar(e){return{from:function(t){return e.prototype=Object.create(t.prototype),dt(e.prototype,"constructor",e),{extend:Jt.bind(null,e.prototype)}}}}var Bl=Object.getOwnPropertyDescriptor;function Xo(e,t){var r=Bl(e,t),i;return r||(i=Zt(e))&&Xo(i,t)}var Kl=[].slice;function qi(e,t,r){return Kl.call(e,t,r)}function Zo(e,t){return t(e)}function br(e){if(!e)throw new Error("Assertion Failed")}function Jo(e){ue.setImmediate?setImmediate(e):setTimeout(e,0)}function jl(e,t){return e.reduce(function(r,i,a){var n=t(i,a);return n&&(r[n[0]]=n[1]),r},{})}function et(e,t){if(typeof t=="string"&&Se(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var r=[],i=0,a=t.length;i<a;++i){var n=et(e,t[i]);r.push(n)}return r}var o=t.indexOf(".");if(o!==-1){var s=e[t.substr(0,o)];return s==null?void 0:et(s,t.substr(o+1))}}function $e(e,t,r){if(!(!e||t===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){br(typeof r!="string"&&"length"in r);for(var i=0,a=t.length;i<a;++i)$e(e,t[i],r[i])}else{var n=t.indexOf(".");if(n!==-1){var o=t.substr(0,n),s=t.substr(n+1);if(s==="")r===void 0?ee(e)&&!isNaN(parseInt(o))?e.splice(o,1):delete e[o]:e[o]=r;else{var l=e[o];if(!l||!Se(e,o)){if(r===void 0)return;l=e[o]={}}$e(l,s,r)}}else r===void 0?ee(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=r}}function Gl(e,t){typeof t=="string"?$e(e,t,void 0):"length"in t&&[].map.call(t,function(r){$e(e,r,void 0)})}function es(e){var t={};for(var r in e)Se(e,r)&&(t[r]=e[r]);return t}var Ul=[].concat;function ts(e){return Ul.apply([],e)}var ql="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ts([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ue[e]}),rs=new Set(ql.map(function(e){return ue[e]}));function is(e){var t={};for(var r in e)if(Se(e,r)){var i=e[r];t[r]=!i||typeof i!="object"||rs.has(i.constructor)?i:is(i)}return t}var $r=null;function Ot(e){$r=new WeakMap;var t=Fa(e);return $r=null,t}function Fa(e){if(!e||typeof e!="object")return e;var t=$r.get(e);if(t)return t;if(ee(e)){t=[],$r.set(e,t);for(var r=0,i=e.length;r<i;++r)t.push(Fa(e[r]))}else if(rs.has(e.constructor))t=e;else{var a=Zt(e);t=a===Object.prototype?{}:Object.create(a),$r.set(e,t);for(var n in e)Se(e,n)&&(t[n]=Fa(e[n]))}return t}var Hl={}.toString;function Na(e){return Hl.call(e).slice(8,-1)}var za=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Vl=typeof za=="symbol"?function(e){var t;return e!=null&&(t=e[za])&&t.apply(e)}:function(){return null};function xt(e,t){var r=e.indexOf(t);return r>=0&&e.splice(r,1),r>=0}var Ht={};function Ye(e){var t,r,i,a;if(arguments.length===1){if(ee(e))return e.slice();if(this===Ht&&typeof e=="string")return[e];if(a=Vl(e)){for(r=[];i=a.next(),!i.done;)r.push(i.value);return r}if(e==null)return[e];if(t=e.length,typeof t=="number"){for(r=new Array(t);t--;)r[t]=e[t];return r}return[e]}for(t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];return r}var hn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Wl=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],as=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],mn=Wl.concat(as),Ql={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function nr(e,t){this.name=e,this.message=t}ar(nr).from(Error).extend({toString:function(){return this.name+": "+this.message}});function ns(e,t){return e+". Errors: "+Object.keys(t).map(function(r){return t[r].toString()}).filter(function(r,i,a){return a.indexOf(r)===i}).join(`
`)}function Si(e,t,r,i){this.failures=t,this.failedKeys=i,this.successCount=r,this.message=ns(e,t)}ar(Si).from(nr);function Vt(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(r){return t[r]}),this.failuresByPos=t,this.message=ns(e,this.failures)}ar(Vt).from(nr);var fn=mn.reduce(function(e,t){return e[t]=t+"Error",e},{}),Yl=nr,N=mn.reduce(function(e,t){var r=t+"Error";function i(a,n){this.name=r,a?typeof a=="string"?(this.message="".concat(a).concat(n?`
 `+n:""),this.inner=n||null):typeof a=="object"&&(this.message="".concat(a.name," ").concat(a.message),this.inner=a):(this.message=Ql[t]||r,this.inner=null)}return ar(i).from(Yl),e[t]=i,e},{});N.Syntax=SyntaxError;N.Type=TypeError;N.Range=RangeError;var Jn=as.reduce(function(e,t){return e[t+"Error"]=N[t],e},{});function Xl(e,t){if(!e||e instanceof nr||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Jn[e.name])return e;var r=new Jn[e.name](t||e.message,e);return"stack"in e&&dt(r,"stack",{get:function(){return this.inner.stack}}),r}var Hi=mn.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=N[t]),e},{});Hi.ModifyError=Si;Hi.DexieError=nr;Hi.BulkError=Vt;function W(){}function jr(e){return e}function Zl(e,t){return e==null||e===jr?t:function(r){return t(e(r))}}function Rt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Jl(e,t){return e===W?t:function(){var r=e.apply(this,arguments);r!==void 0&&(arguments[0]=r);var i=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var n=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?Rt(i,this.onsuccess):i),a&&(this.onerror=this.onerror?Rt(a,this.onerror):a),n!==void 0?n:r}}function ec(e,t){return e===W?t:function(){e.apply(this,arguments);var r=this.onsuccess,i=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),r&&(this.onsuccess=this.onsuccess?Rt(r,this.onsuccess):r),i&&(this.onerror=this.onerror?Rt(i,this.onerror):i)}}function tc(e,t){return e===W?t:function(r){var i=e.apply(this,arguments);Ee(r,i);var a=this.onsuccess,n=this.onerror;this.onsuccess=null,this.onerror=null;var o=t.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?Rt(a,this.onsuccess):a),n&&(this.onerror=this.onerror?Rt(n,this.onerror):n),i===void 0?o===void 0?void 0:o:Ee(i,o)}}function rc(e,t){return e===W?t:function(){return t.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function gn(e,t){return e===W?t:function(){var r=e.apply(this,arguments);if(r&&typeof r.then=="function"){for(var i=this,a=arguments.length,n=new Array(a);a--;)n[a]=arguments[a];return r.then(function(){return t.apply(i,n)})}return t.apply(this,arguments)}}var Ge=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function os(e,t){Ge=e}var Cr={},ss=100,vn=typeof Promise>"u"?[]:(function(){var e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,Zt(e),e];var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,Zt(t),e]})(),eo=vn[0],to=vn[1],ic=vn[2],ac=to&&to.then,It=eo&&eo.constructor,yn=!!ic;function nc(){queueMicrotask(sc)}var Mr=function(e,t){_r.push([e,t]),Ci&&(nc(),Ci=!1)},La=!0,Ci=!0,At=[],ui=[],Ba=jr,tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:W,pgp:!1,env:{},finalize:W},R=tt,_r=[],Dt=0,pi=[];function D(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=R;if(typeof e!="function"){if(e!==Cr)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ja(this,this._value);return}this._state=null,this._value=null,++t.ref,cs(this,e)}var Ka={get:function(){var e=R,t=Mi;function r(i,a){var n=this,o=!e.global&&(e!==R||t!==Mi),s=o&&!pt(),l=new D(function(c,u){bn(n,new ls(ro(i,e,o,s),ro(a,e,o,s),c,u,e))});return this._consoleTask&&(l._consoleTask=this._consoleTask),l}return r.prototype=Cr,r},set:function(e){dt(this,"then",e&&e.prototype===Cr?Ka:{get:function(){return e},set:Ka.set})}};Jt(D.prototype,{then:Ka,_then:function(e,t){bn(this,new ls(null,null,e,t,R))},catch:function(e){if(arguments.length===1)return this.then(null,e);var t=arguments[0],r=arguments[1];return typeof t=="function"?this.then(null,function(i){return i instanceof t?r(i):hi(i)}):this.then(null,function(i){return i&&i.name===t?r(i):hi(i)})},finally:function(e){return this.then(function(t){return D.resolve(e()).then(function(){return t})},function(t){return D.resolve(e()).then(function(){return hi(t)})})},timeout:function(e,t){var r=this;return e<1/0?new D(function(i,a){var n=setTimeout(function(){return a(new N.Timeout(t))},e);r.then(i,a).finally(clearTimeout.bind(null,n))}):this}});typeof Symbol<"u"&&Symbol.toStringTag&&dt(D.prototype,Symbol.toStringTag,"Dexie.Promise");tt.env=us();function ls(e,t,r,i,a){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=r,this.reject=i,this.psd=a}Jt(D,{all:function(){var e=Ye.apply(null,arguments).map(Ai);return new D(function(t,r){e.length===0&&t([]);var i=e.length;e.forEach(function(a,n){return D.resolve(a).then(function(o){e[n]=o,--i||t(e)},r)})})},resolve:function(e){if(e instanceof D)return e;if(e&&typeof e.then=="function")return new D(function(r,i){e.then(r,i)});var t=new D(Cr,!0,e);return t},reject:hi,race:function(){var e=Ye.apply(null,arguments).map(Ai);return new D(function(t,r){e.map(function(i){return D.resolve(i).then(t,r)})})},PSD:{get:function(){return R},set:function(e){return R=e}},totalEchoes:{get:function(){return Mi}},newPSD:ut,usePSD:Ft,scheduler:{get:function(){return Mr},set:function(e){Mr=e}},rejectionMapper:{get:function(){return Ba},set:function(e){Ba=e}},follow:function(e,t){return new D(function(r,i){return ut(function(a,n){var o=R;o.unhandleds=[],o.onunhandled=n,o.finalize=Rt(function(){var s=this;lc(function(){s.unhandleds.length===0?a():n(s.unhandleds[0])})},o.finalize),e()},t,r,i)})}});It&&(It.allSettled&&dt(D,"allSettled",function(){var e=Ye.apply(null,arguments).map(Ai);return new D(function(t){e.length===0&&t([]);var r=e.length,i=new Array(r);e.forEach(function(a,n){return D.resolve(a).then(function(o){return i[n]={status:"fulfilled",value:o}},function(o){return i[n]={status:"rejected",reason:o}}).then(function(){return--r||t(i)})})})}),It.any&&typeof AggregateError<"u"&&dt(D,"any",function(){var e=Ye.apply(null,arguments).map(Ai);return new D(function(t,r){e.length===0&&r(new AggregateError([]));var i=e.length,a=new Array(i);e.forEach(function(n,o){return D.resolve(n).then(function(s){return t(s)},function(s){a[o]=s,--i||r(new AggregateError(a))})})})}),It.withResolvers&&(D.withResolvers=It.withResolvers));function cs(e,t){try{t(function(r){if(e._state===null){if(r===e)throw new TypeError("A promise cannot be resolved with itself.");var i=e._lib&&or();r&&typeof r.then=="function"?cs(e,function(a,n){r instanceof D?r._then(a,n):r.then(a,n)}):(e._state=!0,e._value=r,ds(e)),i&&sr()}},ja.bind(null,e))}catch(r){ja(e,r)}}function ja(e,t){if(ui.push(t),e._state===null){var r=e._lib&&or();t=Ba(t),e._state=!1,e._value=t,cc(e),ds(e),r&&sr()}}function ds(e){var t=e._listeners;e._listeners=[];for(var r=0,i=t.length;r<i;++r)bn(e,t[r]);var a=e._PSD;--a.ref||a.finalize(),Dt===0&&(++Dt,Mr(function(){--Dt===0&&_n()},[]))}function bn(e,t){if(e._state===null){e._listeners.push(t);return}var r=e._state?t.onFulfilled:t.onRejected;if(r===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Dt,Mr(oc,[r,e,t])}function oc(e,t,r){try{var i,a=t._value;!t._state&&ui.length&&(ui=[]),i=Ge&&t._consoleTask?t._consoleTask.run(function(){return e(a)}):e(a),!t._state&&ui.indexOf(a)===-1&&dc(t),r.resolve(i)}catch(n){r.reject(n)}finally{--Dt===0&&_n(),--r.psd.ref||r.psd.finalize()}}function sc(){Ft(tt,function(){or()&&sr()})}function or(){var e=La;return La=!1,Ci=!1,e}function sr(){var e,t,r;do for(;_r.length>0;)for(e=_r,_r=[],r=e.length,t=0;t<r;++t){var i=e[t];i[0].apply(null,i[1])}while(_r.length>0);La=!0,Ci=!0}function _n(){var e=At;At=[],e.forEach(function(i){i._PSD.onunhandled.call(null,i._value,i)});for(var t=pi.slice(0),r=t.length;r;)t[--r]()}function lc(e){function t(){e(),pi.splice(pi.indexOf(t),1)}pi.push(t),++Dt,Mr(function(){--Dt===0&&_n()},[])}function cc(e){At.some(function(t){return t._value===e._value})||At.push(e)}function dc(e){for(var t=At.length;t;)if(At[--t]._value===e._value){At.splice(t,1);return}}function hi(e){return new D(Cr,!1,e)}function X(e,t){var r=R;return function(){var i=or(),a=R;try{return ht(r,!0),e.apply(this,arguments)}catch(n){t&&t(n)}finally{ht(a,!1),i&&sr()}}}var le={awaits:0,echoes:0,id:0},uc=0,mi=[],fi=0,Mi=0,pc=0;function ut(e,t,r,i){var a=R,n=Object.create(a);n.parent=a,n.ref=0,n.global=!1,n.id=++pc,tt.env,n.env=yn?{Promise:D,PromiseProp:{value:D,configurable:!0,writable:!0},all:D.all,race:D.race,allSettled:D.allSettled,any:D.any,resolve:D.resolve,reject:D.reject}:{},t&&Ee(n,t),++a.ref,n.finalize=function(){--this.parent.ref||this.parent.finalize()};var o=Ft(n,e,r,i);return n.ref===0&&n.finalize(),o}function lr(){return le.id||(le.id=++uc),++le.awaits,le.echoes+=ss,le.id}function pt(){return le.awaits?(--le.awaits===0&&(le.id=0),le.echoes=le.awaits*ss,!0):!1}(""+ac).indexOf("[native code]")===-1&&(lr=pt=W);function Ai(e){return le.echoes&&e&&e.constructor===It?(lr(),e.then(function(t){return pt(),t},function(t){return pt(),ie(t)})):e}function hc(e){++Mi,(!le.echoes||--le.echoes===0)&&(le.echoes=le.awaits=le.id=0),mi.push(R),ht(e,!0)}function mc(){var e=mi[mi.length-1];mi.pop(),ht(e,!1)}function ht(e,t){var r=R;if((t?le.echoes&&(!fi++||e!==R):fi&&(!--fi||e!==R))&&queueMicrotask(t?hc.bind(null,e):mc),e!==R&&(R=e,r===tt&&(tt.env=us()),yn)){var i=tt.env.Promise,a=e.env;(r.global||e.global)&&(Object.defineProperty(ue,"Promise",a.PromiseProp),i.all=a.all,i.race=a.race,i.resolve=a.resolve,i.reject=a.reject,a.allSettled&&(i.allSettled=a.allSettled),a.any&&(i.any=a.any))}}function us(){var e=ue.Promise;return yn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ue,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Ft(e,t,r,i,a){var n=R;try{return ht(e,!0),t(r,i,a)}finally{ht(n,!1)}}function ro(e,t,r,i){return typeof e!="function"?e:function(){var a=R;r&&lr(),ht(t,!0);try{return e.apply(this,arguments)}finally{ht(a,!1),i&&queueMicrotask(pt)}}}function da(e){Promise===It&&le.echoes===0?fi===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var ie=D.reject;function Ga(e,t,r,i){if(!e.idbdb||!e._state.openComplete&&!R.letThrough&&!e._vip){if(e._state.openComplete)return ie(new N.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return ie(new N.DatabaseClosed);e.open().catch(W)}return e._state.dbReadyPromise.then(function(){return Ga(e,t,r,i)})}else{var a=e._createTransaction(t,r,e._dbSchema);try{a.create(),e._state.PR1398_maxLoop=3}catch(n){return n.name===fn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return Ga(e,t,r,i)})):ie(n)}return a._promise(t,function(n,o){return ut(function(){return R.trans=a,i(n,o,a)})}).then(function(n){if(t==="readwrite")try{a.idbtrans.commit()}catch{}return t==="readonly"?n:a._completion.then(function(){return n})})}}var io="4.4.4",St="￿",Ua=-1/0,We="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ps="String expected.",fc=1e3,Vi="__dbnames",ua="readonly",pa="readwrite";function Nt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var hs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Yr(e){return typeof e=="string"&&!/\./.test(e)?function(t){return t[e]===void 0&&e in t&&(t=Ot(t),delete t[e]),t}:function(t){return t}}function gc(){throw N.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function q(e,t){try{var r=ao(e),i=ao(t);if(r!==i)return r==="Array"?1:i==="Array"?-1:r==="binary"?1:i==="binary"?-1:r==="string"?1:i==="string"?-1:r==="Date"?1:i!=="Date"?NaN:-1;switch(r){case"number":case"Date":case"string":return e>t?1:e<t?-1:0;case"binary":return yc(no(e),no(t));case"Array":return vc(e,t)}}catch{}return NaN}function vc(e,t){for(var r=e.length,i=t.length,a=r<i?r:i,n=0;n<a;++n){var o=q(e[n],t[n]);if(o!==0)return o}return r===i?0:r<i?-1:1}function yc(e,t){for(var r=e.length,i=t.length,a=r<i?r:i,n=0;n<a;++n)if(e[n]!==t[n])return e[n]<t[n]?-1:1;return r===i?0:r<i?-1:1}function ao(e){var t=typeof e;if(t!=="object")return t;if(ArrayBuffer.isView(e))return"binary";var r=Na(e);return r==="ArrayBuffer"?"binary":r}function no(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function gi(e,t,r){var i=e.schema.yProps;return i?(t&&r.numFailures>0&&(t=t.filter(function(a,n){return!r.failures[n]})),Promise.all(i.map(function(a){var n=a.updatesTable;return t?e.db.table(n).where("k").anyOf(t).delete():e.db.table(n).clear()})).then(function(){return r})):r}var bc=(function(){function e(t){this["@@propmod"]=t}return e.prototype.execute=function(t){var r,i=this["@@propmod"];if(i.add!==void 0){var a=i.add;if(ee(a))return Ei(Ei([],ee(t)?t:[],!0),a).sort();if(typeof a=="number")return(Number(t)||0)+a;if(typeof a=="bigint")try{return BigInt(t)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(i.remove!==void 0){var n=i.remove;if(ee(n))return ee(t)?t.filter(function(s){return!n.includes(s)}).sort():[];if(typeof n=="number")return Number(t)-n;if(typeof n=="bigint")try{return BigInt(t)-n}catch{return BigInt(0)-n}throw new TypeError("Invalid subtrahend ".concat(n))}var o=(r=i.replacePrefix)===null||r===void 0?void 0:r[0];return o&&typeof t=="string"&&t.startsWith(o)?i.replacePrefix[1]+t.substring(o.length):t},e})();function ms(e,t){for(var r=ce(t),i=r.length,a=!1,n=0;n<i;++n){var o=r[n],s=t[o],l=et(e,o);s instanceof bc?($e(e,o,s.execute(l)),a=!0):l!==s&&($e(e,o,s),a=!0)}return a}var fs=(function(){function e(){}return e.prototype._trans=function(t,r,i){var a=this._tx||R.trans,n=this.name,o=Ge&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function s(u,p,m){if(!m.schema[n])throw new N.NotFound("Table "+n+" not part of transaction");return r(m.idbtrans,m)}var l=or();try{var c=a&&a.db._novip===this.db._novip?a===R.trans?a._promise(t,s,i):ut(function(){return a._promise(t,s,i)},{trans:a,transless:R.transless||R}):Ga(this.db,t,[this.name],s);return o&&(c._consoleTask=o,c=c.catch(function(u){return console.trace(u),ie(u)})),c}finally{l&&sr()}},e.prototype.get=function(t,r){var i=this;return t&&t.constructor===Object?this.where(t).first(r):t==null?ie(new N.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return i.core.get({trans:a,key:t}).then(function(n){return i.hook.reading.fire(n)})}).then(r)},e.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(ee(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var r=ce(t);if(r.length===1)return this.where(r[0]).equals(t[r[0]]);var i=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&r.every(function(m){return u.keyPath.indexOf(m)>=0})){for(var p=0;p<r.length;++p)if(r.indexOf(u.keyPath[p])===-1)return!1;return!0}return!1}).sort(function(u,p){return u.keyPath.length-p.keyPath.length})[0];if(i&&this.db._maxKey!==St){var a=i.keyPath.slice(0,r.length);return this.where(a).equals(a.map(function(u){return t[u]}))}!i&&Ge&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(r.join("+"),"]"));var n=this.schema.idxByName;function o(u,p){return q(u,p)===0}var s=r.reduce(function(u,p){var m=u[0],w=u[1],h=n[p],g=t[p];return[m||h,m||!h?Nt(w,h&&h.multi?function(_){var v=et(_,p);return ee(v)&&v.some(function(I){return o(g,I)})}:function(_){return o(g,et(_,p))}):w]},[null,null]),l=s[0],c=s[1];return l?this.where(l.name).equals(t[l.keyPath]).filter(c):i?this.filter(c):this.where(r).equals("")},e.prototype.filter=function(t){return this.toCollection().and(t)},e.prototype.count=function(t){return this.toCollection().count(t)},e.prototype.offset=function(t){return this.toCollection().offset(t)},e.prototype.limit=function(t){return this.toCollection().limit(t)},e.prototype.each=function(t){return this.toCollection().each(t)},e.prototype.toArray=function(t){return this.toCollection().toArray(t)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,ee(t)?"[".concat(t.join("+"),"]"):t))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(t){var r=this,i=r.db,a=r.name;this.schema.mappedClass=t,t.prototype instanceof gc&&(t=(function(l){zl(c,l);function c(){return l!==null&&l.apply(this,arguments)||this}return Object.defineProperty(c.prototype,"db",{get:function(){return i},enumerable:!1,configurable:!0}),c.prototype.table=function(){return a},c})(t));for(var n=new Set,o=t.prototype;o;o=Zt(o))Object.getOwnPropertyNames(o).forEach(function(l){return n.add(l)});var s=function(l){if(!l)return l;var c=Object.create(t.prototype);for(var u in l)if(!n.has(u))try{c[u]=l[u]}catch{}return c};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=s,this.hook("reading",s),t},e.prototype.defineClass=function(){function t(r){Ee(this,r)}return this.mapToClass(t)},e.prototype.add=function(t,r){var i=this,a=this.schema.primKey,n=a.auto,o=a.keyPath,s=t;return o&&n&&(s=Yr(o)(t)),this._trans("readwrite",function(l){return i.core.mutate({trans:l,type:"add",keys:r!=null?[r]:null,values:[s]})}).then(function(l){return l.numFailures?D.reject(l.failures[0]):l.lastResult}).then(function(l){if(o)try{$e(t,o,l)}catch{}return l})},e.prototype.upsert=function(t,r){var i=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(n){return i.core.get({trans:n,key:t}).then(function(o){var s=o??{};return ms(s,r),a&&$e(s,a,t),i.core.mutate({trans:n,type:"put",values:[s],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[r]}}).then(function(l){return l.numFailures?D.reject(l.failures[0]):!!o})})})},e.prototype.update=function(t,r){if(typeof t=="object"&&!ee(t)){var i=et(t,this.schema.primKey.keyPath);return i===void 0?ie(new N.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(r)}else return this.where(":id").equals(t).modify(r)},e.prototype.put=function(t,r){var i=this,a=this.schema.primKey,n=a.auto,o=a.keyPath,s=t;return o&&n&&(s=Yr(o)(t)),this._trans("readwrite",function(l){return i.core.mutate({trans:l,type:"put",values:[s],keys:r!=null?[r]:null})}).then(function(l){return l.numFailures?D.reject(l.failures[0]):l.lastResult}).then(function(l){if(o)try{$e(t,o,l)}catch{}return l})},e.prototype.delete=function(t){var r=this;return this._trans("readwrite",function(i){return r.core.mutate({trans:i,type:"delete",keys:[t]}).then(function(a){return gi(r,[t],a)}).then(function(a){return a.numFailures?D.reject(a.failures[0]):void 0})})},e.prototype.clear=function(){var t=this;return this._trans("readwrite",function(r){return t.core.mutate({trans:r,type:"deleteRange",range:hs}).then(function(i){return gi(t,null,i)})}).then(function(r){return r.numFailures?D.reject(r.failures[0]):void 0})},e.prototype.bulkGet=function(t){var r=this;return this._trans("readonly",function(i){return r.core.getMany({keys:t,trans:i}).then(function(a){return a.map(function(n){return r.hook.reading.fire(n)})})})},e.prototype.bulkAdd=function(t,r,i){var a=this,n=Array.isArray(r)?r:void 0;i=i||(n?void 0:r);var o=i?i.allKeys:void 0;return this._trans("readwrite",function(s){var l=a.schema.primKey,c=l.auto,u=l.keyPath;if(u&&n)throw new N.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(n&&n.length!==t.length)throw new N.InvalidArgument("Arguments objects and keys must have the same length");var p=t.length,m=u&&c?t.map(Yr(u)):t;return a.core.mutate({trans:s,type:"add",keys:n,values:m,wantResults:o}).then(function(w){var h=w.numFailures,g=w.results,_=w.lastResult,v=w.failures,I=o?g:_;if(h===0)return I;throw new Vt("".concat(a.name,".bulkAdd(): ").concat(h," of ").concat(p," operations failed"),v)})})},e.prototype.bulkPut=function(t,r,i){var a=this,n=Array.isArray(r)?r:void 0;i=i||(n?void 0:r);var o=i?i.allKeys:void 0;return this._trans("readwrite",function(s){var l=a.schema.primKey,c=l.auto,u=l.keyPath;if(u&&n)throw new N.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(n&&n.length!==t.length)throw new N.InvalidArgument("Arguments objects and keys must have the same length");var p=t.length,m=u&&c?t.map(Yr(u)):t;return a.core.mutate({trans:s,type:"put",keys:n,values:m,wantResults:o}).then(function(w){var h=w.numFailures,g=w.results,_=w.lastResult,v=w.failures,I=o?g:_;if(h===0)return I;throw new Vt("".concat(a.name,".bulkPut(): ").concat(h," of ").concat(p," operations failed"),v)})})},e.prototype.bulkUpdate=function(t){var r=this,i=this.core,a=t.map(function(s){return s.key}),n=t.map(function(s){return s.changes}),o=[];return this._trans("readwrite",function(s){return i.getMany({trans:s,keys:a,cache:"clone"}).then(function(l){var c=[],u=[];t.forEach(function(m,w){var h=m.key,g=m.changes,_=l[w];if(_){for(var v=0,I=Object.keys(g);v<I.length;v++){var $=I[v],x=g[$];if($===r.schema.primKey.keyPath){if(q(x,h)!==0)throw new N.Constraint("Cannot update primary key in bulkUpdate()")}else $e(_,$,x)}o.push(w),c.push(h),u.push(_)}});var p=c.length;return i.mutate({trans:s,type:"put",keys:c,values:u,updates:{keys:a,changeSpecs:n}}).then(function(m){var w=m.numFailures,h=m.failures;if(w===0)return p;for(var g=0,_=Object.keys(h);g<_.length;g++){var v=_[g],I=o[Number(v)];if(I!=null){var $=h[v];delete h[v],h[I]=$}}throw new Vt("".concat(r.name,".bulkUpdate(): ").concat(w," of ").concat(p," operations failed"),h)})})})},e.prototype.bulkDelete=function(t){var r=this,i=t.length;return this._trans("readwrite",function(a){return r.core.mutate({trans:a,type:"delete",keys:t}).then(function(n){return gi(r,t,n)})}).then(function(a){var n=a.numFailures,o=a.lastResult,s=a.failures;if(n===0)return o;throw new Vt("".concat(r.name,".bulkDelete(): ").concat(n," of ").concat(i," operations failed"),s)})},e})();function Gr(e){var t={},r=function(s,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return t[s].subscribe.apply(null,u),e}else if(typeof s=="string")return t[s]};r.addEventType=n;for(var i=1,a=arguments.length;i<a;++i)n(arguments[i]);return r;function n(s,l,c){if(typeof s=="object")return o(s);l||(l=rc),c||(c=W);var u={subscribers:[],fire:c,subscribe:function(p){u.subscribers.indexOf(p)===-1&&(u.subscribers.push(p),u.fire=l(u.fire,p))},unsubscribe:function(p){u.subscribers=u.subscribers.filter(function(m){return m!==p}),u.fire=u.subscribers.reduce(l,c)}};return t[s]=r[s]=u,u}function o(s){ce(s).forEach(function(l){var c=s[l];if(ee(c))n(l,s[l][0],s[l][1]);else if(c==="asap")var u=n(l,jr,function(){for(var m=arguments.length,w=new Array(m);m--;)w[m]=arguments[m];u.subscribers.forEach(function(h){Jo(function(){h.apply(null,w)})})});else throw new N.InvalidArgument("Invalid event config")})}}function Ur(e,t){return ar(t).from({prototype:e}),t}function _c(e){return Ur(fs.prototype,function(r,i,a){this.db=e,this._tx=a,this.name=r,this.schema=i,this.hook=e._allTables[r]?e._allTables[r].hook:Gr(null,{creating:[Jl,W],reading:[Zl,jr],updating:[tc,W],deleting:[ec,W]})})}function jt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function ha(e,t){e.filter=Nt(e.filter,t)}function ma(e,t,r){var i=e.replayFilter;e.replayFilter=i?function(){return Nt(i(),t())}:t,e.justLimit=r&&!i}function wc(e,t){e.isMatch=Nt(e.isMatch,t)}function vi(e,t){if(e.isPrimKey)return t.primaryKey;var r=t.getIndexByKeyPath(e.index);if(!r)throw new N.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return r}function oo(e,t,r){var i=vi(e,t.schema);return t.openCursor({trans:r,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:i,range:e.range}})}function Xr(e,t,r,i){var a=e.replayFilter?Nt(e.filter,e.replayFilter()):e.filter;if(e.or){var n={},o=function(s,l,c){if(!a||a(l,c,function(m){return l.stop(m)},function(m){return l.fail(m)})){var u=l.primaryKey,p=""+u;p==="[object ArrayBuffer]"&&(p=""+new Uint8Array(u)),Se(n,p)||(n[p]=!0,t(s,l,c))}};return Promise.all([e.or._iterate(o,r),so(oo(e,i,r),e.algorithm,o,!e.keysOnly&&e.valueMapper)])}else return so(oo(e,i,r),Nt(e.algorithm,a),t,!e.keysOnly&&e.valueMapper)}function so(e,t,r,i){var a=i?function(o,s,l){return r(i(o),s,l)}:r,n=X(a);return e.then(function(o){if(o)return o.start(function(){var s=function(){return o.continue()};(!t||t(o,function(l){return s=l},function(l){o.stop(l),s=W},function(l){o.fail(l),s=W}))&&n(o.value,o,function(l){return s=l}),s()})})}var xc=(function(){function e(){}return e.prototype._read=function(t,r){var i=this._ctx;return i.error?i.table._trans(null,ie.bind(null,i.error)):i.table._trans("readonly",t).then(r)},e.prototype._write=function(t){var r=this._ctx;return r.error?r.table._trans(null,ie.bind(null,r.error)):r.table._trans("readwrite",t,"locked")},e.prototype._addAlgorithm=function(t){var r=this._ctx;r.algorithm=Nt(r.algorithm,t)},e.prototype._iterate=function(t,r){return Xr(this._ctx,t,r,this._ctx.table.core)},e.prototype.clone=function(t){var r=Object.create(this.constructor.prototype),i=Object.create(this._ctx);return t&&Ee(i,t),r._ctx=i,r},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(t){var r=this._ctx;return this._read(function(i){return Xr(r,t,i,r.table.core)})},e.prototype.count=function(t){var r=this;return this._read(function(i){var a=r._ctx,n=a.table.core;if(jt(a,!0))return n.count({trans:i,query:{index:vi(a,n.schema),range:a.range}}).then(function(s){return Math.min(s,a.limit)});var o=0;return Xr(a,function(){return++o,!1},i,n).then(function(){return o})}).then(t)},e.prototype.sortBy=function(t,r){var i=t.split(".").reverse(),a=i[0],n=i.length-1;function o(c,u){return u?o(c[i[u]],u-1):c[a]}var s=this._ctx.dir==="next"?1:-1;function l(c,u){var p=o(c,n),m=o(u,n);return q(p,m)*s}return this.toArray(function(c){return c.slice().sort(l)}).then(r)},e.prototype.toArray=function(t){var r=this;return this._read(function(i){var a=r._ctx;if(jt(a,!0)&&a.limit>0){var n=a.valueMapper,o=vi(a,a.table.core.schema);return a.table.core.query({trans:i,limit:a.limit,values:!0,direction:a.dir==="prev"?"prev":void 0,query:{index:o,range:a.range}}).then(function(l){var c=l.result;return n?c.map(n):c})}else{var s=[];return Xr(a,function(l){return s.push(l)},i,a.table.core).then(function(){return s})}},t)},e.prototype.offset=function(t){var r=this._ctx;return t<=0?this:(r.offset+=t,jt(r)?ma(r,function(){var i=t;return function(a,n){return i===0?!0:i===1?(--i,!1):(n(function(){a.advance(i),i=0}),!1)}}):ma(r,function(){var i=t;return function(){return--i<0}}),this)},e.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),ma(this._ctx,function(){var r=t;return function(i,a,n){return--r<=0&&a(n),r>=0}},!0),this},e.prototype.until=function(t,r){return ha(this._ctx,function(i,a,n){return t(i.value)?(a(n),r):!0}),this},e.prototype.first=function(t){return this.limit(1).toArray(function(r){return r[0]}).then(t)},e.prototype.last=function(t){return this.reverse().first(t)},e.prototype.filter=function(t){return ha(this._ctx,function(r){return t(r.value)}),wc(this._ctx,t),this},e.prototype.and=function(t){return this.filter(t)},e.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(i,a){t(a.key,a)})},e.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},e.prototype.eachPrimaryKey=function(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(i,a){t(a.primaryKey,a)})},e.prototype.keys=function(t){var r=this._ctx;r.keysOnly=!r.isMatch;var i=[];return this.each(function(a,n){i.push(n.key)}).then(function(){return i}).then(t)},e.prototype.primaryKeys=function(t){var r=this._ctx;if(jt(r,!0)&&r.limit>0)return this._read(function(a){var n=vi(r,r.table.core.schema);return r.table.core.query({trans:a,values:!1,limit:r.limit,direction:r.dir==="prev"?"prev":void 0,query:{index:n,range:r.range}})}).then(function(a){var n=a.result;return n}).then(t);r.keysOnly=!r.isMatch;var i=[];return this.each(function(a,n){i.push(n.primaryKey)}).then(function(){return i}).then(t)},e.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},e.prototype.firstKey=function(t){return this.limit(1).keys(function(r){return r[0]}).then(t)},e.prototype.lastKey=function(t){return this.reverse().firstKey(t)},e.prototype.distinct=function(){var t=this._ctx,r=t.index&&t.table.schema.idxByName[t.index];if(!r||!r.multi)return this;var i={};return ha(this._ctx,function(a){var n=a.primaryKey.toString(),o=Se(i,n);return i[n]=!0,!o}),this},e.prototype.modify=function(t){var r=this,i=this._ctx;return this._write(function(a){var n;typeof t=="function"?n=t:n=function(v){return ms(v,t)};var o=i.table.core,s=o.schema.primaryKey,l=s.outbound,c=s.extractKey,u=200,p=r.db._options.modifyChunkSize;p&&(typeof p=="object"?u=p[o.name]||p["*"]||200:u=p);var m=[],w=0,h=[],g=function(v,I){var $=I.failures,x=I.numFailures;w+=v-x;for(var b=0,C=ce($);b<C.length;b++){var k=C[b];m.push($[k])}},_=t===lo;return r.clone().primaryKeys().then(function(v){var I=jt(i)&&i.limit===1/0&&(typeof t!="function"||_)&&{index:i.index,range:i.range},$=function(x){var b=Math.min(u,v.length-x),C=v.slice(x,x+b);return(_?Promise.resolve([]):o.getMany({trans:a,keys:C,cache:"immutable"})).then(function(k){var E=[],T=[],K=l?[]:null,S=_?C:[];if(!_)for(var O=0;O<b;++O){var M=k[O],A={value:Ot(M),primKey:v[x+O]};n.call(A,A.value,A)!==!1&&(A.value==null?S.push(v[x+O]):!l&&q(c(M),c(A.value))!==0?(S.push(v[x+O]),E.push(A.value)):(T.push(A.value),l&&K.push(v[x+O])))}return Promise.resolve(E.length>0&&o.mutate({trans:a,type:"add",values:E}).then(function(U){for(var F in U.failures)S.splice(parseInt(F),1);g(E.length,U)})).then(function(){return(T.length>0||I&&typeof t=="object")&&o.mutate({trans:a,type:"put",keys:K,values:T,criteria:I,changeSpec:typeof t!="function"&&t,isAdditionalChunk:x>0}).then(function(U){return g(T.length,U)})}).then(function(){return(S.length>0||I&&_)&&o.mutate({trans:a,type:"delete",keys:S,criteria:I,isAdditionalChunk:x>0}).then(function(U){return gi(i.table,S,U)}).then(function(U){return g(S.length,U)})}).then(function(){return v.length>x+b&&$(x+u)})})};return $(0).then(function(){if(m.length>0)throw new Si("Error modifying one or more objects",m,w,h);return v.length})})})},e.prototype.delete=function(){var t=this._ctx,r=t.range;return jt(t)&&!t.table.schema.yProps&&(t.isPrimKey||r.type===3)?this._write(function(i){var a=t.table.core.schema.primaryKey,n=r;return t.table.core.count({trans:i,query:{index:a,range:n}}).then(function(o){return t.table.core.mutate({trans:i,type:"deleteRange",range:n}).then(function(s){var l=s.failures,c=s.numFailures;if(c)throw new Si("Could not delete some values",Object.keys(l).map(function(u){return l[u]}),o-c);return o-c})})}):this.modify(lo)},e})(),lo=function(e,t){return t.value=null};function $c(e){return Ur(xc.prototype,function(r,i){this.db=e;var a=hs,n=null;if(i)try{a=i()}catch(c){n=c}var o=r._ctx,s=o.table,l=s.hook.reading.fire;this._ctx={table:s,index:o.index,isPrimKey:!o.index||s.schema.primKey.keyPath&&o.index===s.schema.primKey.name,range:a,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:n,or:o.or,valueMapper:l!==jr?l:null}})}function Ic(e,t){return e<t?-1:e===t?0:1}function kc(e,t){return e>t?-1:e===t?0:1}function ke(e,t,r){var i=e instanceof vs?new e.Collection(e):e;return i._ctx.error=r?new r(t):new TypeError(t),i}function Gt(e){return new e.Collection(e,function(){return gs("")}).limit(0)}function Ec(e){return e==="next"?function(t){return t.toUpperCase()}:function(t){return t.toLowerCase()}}function Sc(e){return e==="next"?function(t){return t.toLowerCase()}:function(t){return t.toUpperCase()}}function Cc(e,t,r,i,a,n){for(var o=Math.min(e.length,i.length),s=-1,l=0;l<o;++l){var c=t[l];if(c!==i[l])return a(e[l],r[l])<0?e.substr(0,l)+r[l]+r.substr(l+1):a(e[l],i[l])<0?e.substr(0,l)+i[l]+r.substr(l+1):s>=0?e.substr(0,s)+t[s]+r.substr(s+1):null;a(e[l],c)<0&&(s=l)}return o<i.length&&n==="next"?e+r.substr(e.length):o<e.length&&n==="prev"?e.substr(0,r.length):s<0?null:e.substr(0,s)+i[s]+r.substr(s+1)}function Zr(e,t,r,i){var a,n,o,s,l,c,u,p=r.length;if(!r.every(function(g){return typeof g=="string"}))return ke(e,ps);function m(g){a=Ec(g),n=Sc(g),o=g==="next"?Ic:kc;var _=r.map(function(v){return{lower:n(v),upper:a(v)}}).sort(function(v,I){return o(v.lower,I.lower)});s=_.map(function(v){return v.upper}),l=_.map(function(v){return v.lower}),c=g,u=g==="next"?"":i}m("next");var w=new e.Collection(e,function(){return it(s[0],l[p-1]+i)});w._ondirectionchange=function(g){m(g)};var h=0;return w._addAlgorithm(function(g,_,v){var I=g.key;if(typeof I!="string")return!1;var $=n(I);if(t($,l,h))return!0;for(var x=null,b=h;b<p;++b){var C=Cc(I,$,s[b],l[b],o,c);C===null&&x===null?h=b+1:(x===null||o(x,C)>0)&&(x=C)}return _(x!==null?function(){g.continue(x+u)}:v),!1}),w}function it(e,t,r,i){return{type:2,lower:e,upper:t,lowerOpen:r,upperOpen:i}}function gs(e){return{type:1,lower:e,upper:e}}var vs=(function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(t,r,i,a){i=i!==!1,a=a===!0;try{return this._cmp(t,r)>0||this._cmp(t,r)===0&&(i||a)&&!(i&&a)?Gt(this):new this.Collection(this,function(){return it(t,r,!i,!a)})}catch{return ke(this,We)}},e.prototype.equals=function(t){return t==null?ke(this,We):new this.Collection(this,function(){return gs(t)})},e.prototype.above=function(t){return t==null?ke(this,We):new this.Collection(this,function(){return it(t,void 0,!0)})},e.prototype.aboveOrEqual=function(t){return t==null?ke(this,We):new this.Collection(this,function(){return it(t,void 0,!1)})},e.prototype.below=function(t){return t==null?ke(this,We):new this.Collection(this,function(){return it(void 0,t,!1,!0)})},e.prototype.belowOrEqual=function(t){return t==null?ke(this,We):new this.Collection(this,function(){return it(void 0,t)})},e.prototype.startsWith=function(t){return typeof t!="string"?ke(this,ps):this.between(t,t+St,!0,!0)},e.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):Zr(this,function(r,i){return r.indexOf(i[0])===0},[t],St)},e.prototype.equalsIgnoreCase=function(t){return Zr(this,function(r,i){return r===i[0]},[t],"")},e.prototype.anyOfIgnoreCase=function(){var t=Ye.apply(Ht,arguments);return t.length===0?Gt(this):Zr(this,function(r,i){return i.indexOf(r)!==-1},t,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var t=Ye.apply(Ht,arguments);return t.length===0?Gt(this):Zr(this,function(r,i){return i.some(function(a){return r.indexOf(a)===0})},t,St)},e.prototype.anyOf=function(){var t=this,r=Ye.apply(Ht,arguments),i=this._cmp;try{r.sort(i)}catch{return ke(this,We)}if(r.length===0)return Gt(this);var a=new this.Collection(this,function(){return it(r[0],r[r.length-1])});a._ondirectionchange=function(o){i=o==="next"?t._ascending:t._descending,r.sort(i)};var n=0;return a._addAlgorithm(function(o,s,l){for(var c=o.key;i(c,r[n])>0;)if(++n,n===r.length)return s(l),!1;return i(c,r[n])===0?!0:(s(function(){o.continue(r[n])}),!1)}),a},e.prototype.notEqual=function(t){return this.inAnyRange([[Ua,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var t=Ye.apply(Ht,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return ke(this,We)}var r=t.reduce(function(i,a){return i?i.concat([[i[i.length-1][1],a]]):[[Ua,a]]},null);return r.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(t,r){var i=this,a=this._cmp,n=this._ascending,o=this._descending,s=this._min,l=this._max;if(t.length===0)return Gt(this);if(!t.every(function(b){return b[0]!==void 0&&b[1]!==void 0&&n(b[0],b[1])<=0}))return ke(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",N.InvalidArgument);var c=!r||r.includeLowers!==!1,u=r&&r.includeUppers===!0;function p(b,C){for(var k=0,E=b.length;k<E;++k){var T=b[k];if(a(C[0],T[1])<0&&a(C[1],T[0])>0){T[0]=s(T[0],C[0]),T[1]=l(T[1],C[1]);break}}return k===E&&b.push(C),b}var m=n;function w(b,C){return m(b[0],C[0])}var h;try{h=t.reduce(p,[]),h.sort(w)}catch{return ke(this,We)}var g=0,_=u?function(b){return n(b,h[g][1])>0}:function(b){return n(b,h[g][1])>=0},v=c?function(b){return o(b,h[g][0])>0}:function(b){return o(b,h[g][0])>=0};function I(b){return!_(b)&&!v(b)}var $=_,x=new this.Collection(this,function(){return it(h[0][0],h[h.length-1][1],!c,!u)});return x._ondirectionchange=function(b){b==="next"?($=_,m=n):($=v,m=o),h.sort(w)},x._addAlgorithm(function(b,C,k){for(var E=b.key;$(E);)if(++g,g===h.length)return C(k),!1;return I(E)?!0:(i._cmp(E,h[g][1])===0||i._cmp(E,h[g][0])===0||C(function(){m===n?b.continue(h[g][0]):b.continue(h[g][1])}),!1)}),x},e.prototype.startsWithAnyOf=function(){var t=Ye.apply(Ht,arguments);return t.every(function(r){return typeof r=="string"})?t.length===0?Gt(this):this.inAnyRange(t.map(function(r){return[r,r+St]})):ke(this,"startsWithAnyOf() only works with strings")},e})();function Mc(e){return Ur(vs.prototype,function(r,i,a){if(this.db=e,this._ctx={table:r,index:i===":id"?null:i,or:a},this._cmp=this._ascending=q,this._descending=function(n,o){return q(o,n)},this._max=function(n,o){return q(n,o)>0?n:o},this._min=function(n,o){return q(n,o)<0?n:o},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new N.MissingAPI})}function Fe(e){return X(function(t){return Ar(t),e(t.target.error),!1})}function Ar(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Wi="storagemutated",qa="x-storagemutated-1",mt=Gr(null,Wi),Ac=(function(){function e(){}return e.prototype._lock=function(){return br(!R.global),++this._reculock,this._reculock===1&&!R.global&&(R.lockOwnerFor=this),this},e.prototype._unlock=function(){if(br(!R.global),--this._reculock===0)for(R.global||(R.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var t=this._blockedFuncs.shift();try{Ft(t[1],t[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&R.lockOwnerFor!==this},e.prototype.create=function(t){var r=this;if(!this.mode)return this;var i=this.db.idbdb,a=this.db._state.dbOpenError;if(br(!this.idbtrans),!t&&!i)switch(a&&a.name){case"DatabaseClosedError":throw new N.DatabaseClosed(a);case"MissingAPIError":throw new N.MissingAPI(a.message,a);default:throw new N.OpenFailed(a)}if(!this.active)throw new N.TransactionInactive;return br(this._completion._state===null),t=this.idbtrans=t||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):i.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),t.onerror=X(function(n){Ar(n),r._reject(t.error)}),t.onabort=X(function(n){Ar(n),r.active&&r._reject(new N.Abort(t.error)),r.active=!1,r.on("abort").fire(n)}),t.oncomplete=X(function(){r.active=!1,r._resolve(),"mutatedParts"in t&&mt.storagemutated.fire(t.mutatedParts)}),this},e.prototype._promise=function(t,r,i){var a=this;if(t==="readwrite"&&this.mode!=="readwrite")return ie(new N.ReadOnly("Transaction is readonly"));if(!this.active)return ie(new N.TransactionInactive);if(this._locked())return new D(function(o,s){a._blockedFuncs.push([function(){a._promise(t,r,i).then(o,s)},R])});if(i)return ut(function(){var o=new D(function(s,l){a._lock();var c=r(s,l,a);c&&c.then&&c.then(s,l)});return o.finally(function(){return a._unlock()}),o._lib=!0,o});var n=new D(function(o,s){var l=r(o,s,a);l&&l.then&&l.then(o,s)});return n._lib=!0,n},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(t){var r=this._root(),i=D.resolve(t);if(r._waitingFor)r._waitingFor=r._waitingFor.then(function(){return i});else{r._waitingFor=i,r._waitingQueue=[];var a=r.idbtrans.objectStore(r.storeNames[0]);(function o(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(a.get(-1/0).onsuccess=o)})()}var n=r._waitingFor;return new D(function(o,s){i.then(function(l){return r._waitingQueue.push(X(o.bind(null,l)))},function(l){return r._waitingQueue.push(X(s.bind(null,l)))}).finally(function(){r._waitingFor===n&&(r._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new N.Abort))},e.prototype.table=function(t){var r=this._memoizedTables||(this._memoizedTables={});if(Se(r,t))return r[t];var i=this.schema[t];if(!i)throw new N.NotFound("Table "+t+" not part of transaction");var a=new this.db.Table(t,i,this);return a.core=this.db.core.table(t),r[t]=a,a},e})();function Dc(e){return Ur(Ac.prototype,function(r,i,a,n,o){var s=this;r!=="readonly"&&i.forEach(function(l){var c,u=(c=a[l])===null||c===void 0?void 0:c.yProps;u&&(i=i.concat(u.map(function(p){return p.updatesTable})))}),this.db=e,this.mode=r,this.storeNames=i,this.schema=a,this.chromeTransactionDurability=n,this.idbtrans=null,this.on=Gr(this,"complete","error","abort"),this.parent=o||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new D(function(l,c){s._resolve=l,s._reject=c}),this._completion.then(function(){s.active=!1,s.on.complete.fire()},function(l){var c=s.active;return s.active=!1,s.on.error.fire(l),s.parent?s.parent._reject(l):c&&s.idbtrans&&s.idbtrans.abort(),ie(l)})})}function Ha(e,t,r,i,a,n,o,s){return{name:e,keyPath:t,unique:r,multi:i,auto:a,compound:n,src:(r&&!o?"&":"")+(i?"*":"")+(a?"++":"")+ys(t),type:s}}function ys(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function wn(e,t,r){return{name:e,primKey:t,indexes:r,mappedClass:null,idxByName:jl(r,function(i){return[i.name,i]})}}function Tc(e){return e.length===1?e[0]:e}var Dr=function(e){try{return e.only([[]]),Dr=function(){return[[]]},[[]]}catch{return Dr=function(){return St},St}};function Va(e){return e==null?function(){}:typeof e=="string"?Pc(e):function(t){return et(t,e)}}function Pc(e){var t=e.split(".");return t.length===1?function(r){return r[e]}:function(r){return et(r,e)}}function co(e){return[].slice.call(e)}var Oc=0;function Ir(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Rc(e,t,r){function i(m,w){var h=co(m.objectStoreNames),g=h.length>0?w.objectStore(h[0]):{};return{schema:{name:m.name,tables:h.map(function(_){return w.objectStore(_)}).map(function(_){var v=_.keyPath,I=_.autoIncrement,$=ee(v),x=v==null,b={},C={name:_.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:x,compound:$,keyPath:v,autoIncrement:I,unique:!0,extractKey:Va(v)},indexes:co(_.indexNames).map(function(k){return _.index(k)}).map(function(k){var E=k.name,T=k.unique,K=k.multiEntry,S=k.keyPath,O=ee(S),M={name:E,compound:O,keyPath:S,unique:T,multiEntry:K,extractKey:Va(S)};return b[Ir(S)]=M,M}),getIndexByKeyPath:function(k){return b[Ir(k)]}};return b[":id"]=C.primaryKey,v!=null&&(b[Ir(v)]=C.primaryKey),C})},hasGetAll:h.length>0&&"getAll"in g&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in g}}function a(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var w=m.lower,h=m.upper,g=m.lowerOpen,_=m.upperOpen,v=w===void 0?h===void 0?null:t.upperBound(h,!!_):h===void 0?t.lowerBound(w,!!g):t.bound(w,h,!!g,!!_);return v}function n(m){var w=m.name;function h(v){var I=v.trans,$=v.type,x=v.keys,b=v.values,C=v.range;return new Promise(function(k,E){k=X(k);var T=I.objectStore(w),K=T.keyPath==null,S=$==="put"||$==="add";if(!S&&$!=="delete"&&$!=="deleteRange")throw new Error("Invalid operation type: "+$);var O=(x||b||{length:1}).length;if(x&&b&&x.length!==b.length)throw new Error("Given keys array must have same length as given values array.");if(O===0)return k({numFailures:0,failures:{},results:[],lastResult:void 0});var M,A=[],U=[],F=0,ne=function(de){++F,Ar(de)};if($==="deleteRange"){if(C.type===4)return k({numFailures:F,failures:U,results:[],lastResult:void 0});C.type===3?A.push(M=T.clear()):A.push(M=T.delete(a(C)))}else{var Me=S?K?[b,x]:[b,null]:[x,null],ve=Me[0],yt=Me[1];if(S)for(var fe=0;fe<O;++fe)A.push(M=yt&&yt[fe]!==void 0?T[$](ve[fe],yt[fe]):T[$](ve[fe])),M.onerror=ne;else for(var fe=0;fe<O;++fe)A.push(M=T[$](ve[fe])),M.onerror=ne}var Ae=function(de){var bt=de.target.result;A.forEach(function(Oe,Qr){return Oe.error!=null&&(U[Qr]=Oe.error)}),k({numFailures:F,failures:U,results:$==="delete"?x:A.map(function(Oe){return Oe.result}),lastResult:bt})};M.onerror=function(de){ne(de),Ae(de)},M.onsuccess=Ae})}function g(v){var I=v.trans,$=v.values,x=v.query,b=v.reverse,C=v.unique;return new Promise(function(k,E){k=X(k);var T=x.index,K=x.range,S=I.objectStore(w),O=T.isPrimaryKey?S:S.index(T.name),M=b?C?"prevunique":"prev":C?"nextunique":"next",A=$||!("openKeyCursor"in O)?O.openCursor(a(K),M):O.openKeyCursor(a(K),M);A.onerror=Fe(E),A.onsuccess=X(function(U){var F=A.result;if(!F){k(null);return}F.___id=++Oc,F.done=!1;var ne=F.continue.bind(F),Me=F.continuePrimaryKey;Me&&(Me=Me.bind(F));var ve=F.advance.bind(F),yt=function(){throw new Error("Cursor not started")},fe=function(){throw new Error("Cursor not stopped")};F.trans=I,F.stop=F.continue=F.continuePrimaryKey=F.advance=yt,F.fail=X(E),F.next=function(){var Ae=this,de=1;return this.start(function(){return de--?Ae.continue():Ae.stop()}).then(function(){return Ae})},F.start=function(Ae){var de=new Promise(function(Oe,Qr){Oe=X(Oe),A.onerror=Fe(Qr),F.fail=Qr,F.stop=function(Ys){F.stop=F.continue=F.continuePrimaryKey=F.advance=fe,Oe(Ys)}}),bt=function(){if(A.result)try{Ae()}catch(Oe){F.fail(Oe)}else F.done=!0,F.start=function(){throw new Error("Cursor behind last entry")},F.stop()};return A.onsuccess=X(function(Oe){A.onsuccess=bt,bt()}),F.continue=ne,F.continuePrimaryKey=Me,F.advance=ve,bt(),de},k(F)},E)})}function _(v,I){return function($){return new Promise(function(x,b){var C;x=X(x);var k=$.trans,E=$.values,T=$.limit,K=$.query,S=(C=$.direction)!==null&&C!==void 0?C:"next",O=T===1/0?void 0:T,M=K.index,A=K.range,U=k.objectStore(w),F=M.isPrimaryKey?U:U.index(M.name),ne=a(A);if(T===0)return x({result:[]});if(I){var Me={query:ne,count:O,direction:S},ve=E?F.getAll(Me):F.getAllKeys(Me);ve.onsuccess=function(de){return x({result:de.target.result})},ve.onerror=Fe(b)}else if(v&&S==="next"){var ve=E?F.getAll(ne,O):F.getAllKeys(ne,O);ve.onsuccess=function(bt){return x({result:bt.target.result})},ve.onerror=Fe(b)}else{var yt=0,fe=E||!("openKeyCursor"in F)?F.openCursor(ne,S):F.openKeyCursor(ne,S),Ae=[];fe.onsuccess=function(){var de=fe.result;if(!de)return x({result:Ae});if(Ae.push(E?de.value:de.primaryKey),++yt===T)return x({result:Ae});de.continue()},fe.onerror=Fe(b)}})}}return{name:w,schema:m,mutate:h,getMany:function(v){var I=v.trans,$=v.keys;return new Promise(function(x,b){x=X(x);for(var C=I.objectStore(w),k=$.length,E=new Array(k),T=0,K=0,S,O=function(F){var ne=F.target;(E[ne._pos]=ne.result)!=null,++K===T&&x(E)},M=Fe(b),A=0;A<k;++A){var U=$[A];U!=null&&(S=C.get($[A]),S._pos=A,S.onsuccess=O,S.onerror=M,++T)}T===0&&x(E)})},get:function(v){var I=v.trans,$=v.key;return new Promise(function(x,b){x=X(x);var C=I.objectStore(w),k=C.get($);k.onsuccess=function(E){return x(E.target.result)},k.onerror=Fe(b)})},query:_(l,c),openCursor:g,count:function(v){var I=v.query,$=v.trans,x=I.index,b=I.range;return new Promise(function(C,k){var E=$.objectStore(w),T=x.isPrimaryKey?E:E.index(x.name),K=a(b),S=K?T.count(K):T.count();S.onsuccess=X(function(O){return C(O.target.result)}),S.onerror=Fe(k)})}}}var o=i(e,r),s=o.schema,l=o.hasGetAll,c=o.hasIdb3Features,u=s.tables.map(function(m){return n(m)}),p={};return u.forEach(function(m){return p[m.name]=m}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(m){var w=p[m];if(!w)throw new Error("Table '".concat(m,"' not found"));return p[m]},MIN_KEY:-1/0,MAX_KEY:Dr(t),schema:s}}function Fc(e,t){return t.reduce(function(r,i){var a=i.create;return j(j({},r),a(r))},e)}function Nc(e,t,r,i){var a=r.IDBKeyRange;r.indexedDB;var n=Fc(Rc(t,a,i),e.dbcore);return{dbcore:n}}function Di(e,t){var r=t.db,i=Nc(e._middlewares,r,e._deps,t);e.core=i.dbcore,e.tables.forEach(function(a){var n=a.name;e.core.schema.tables.some(function(o){return o.name===n})&&(a.core=e.core.table(n),e[n]instanceof e.Table&&(e[n].core=a.core))})}function Ti(e,t,r,i){r.forEach(function(a){var n=i[a];t.forEach(function(o){var s=Xo(o,a);(!s||"value"in s&&s.value===void 0)&&(o===e.Transaction.prototype||o instanceof e.Transaction?dt(o,a,{get:function(){return this.table(a)},set:function(l){Yo(this,a,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[a]=new e.Table(a,n))})})}function Wa(e,t){t.forEach(function(r){for(var i in r)r[i]instanceof e.Table&&delete r[i]})}function zc(e,t){return e._cfg.version-t._cfg.version}function Lc(e,t,r,i){var a=e._dbSchema;r.objectStoreNames.contains("$meta")&&!a.$meta&&(a.$meta=wn("$meta",_s("")[0],[]),e._storeNames.push("$meta"));var n=e._createTransaction("readwrite",e._storeNames,a);n.create(r),n._completion.catch(i);var o=n._reject.bind(n),s=R.transless||R;ut(function(){if(R.trans=n,R.transless=s,t===0)ce(a).forEach(function(l){$n(r,l,a[l].primKey,a[l].indexes)}),Di(e,r),D.follow(function(){return e.on.populate.fire(n)}).catch(o);else return Di(e,r),Kc(e,n,t).then(function(l){return jc(e,l,n,r)}).catch(o)})}function Bc(e,t){bs(e._dbSchema,t),t.db.version%10===0&&!t.objectStoreNames.contains("$meta")&&t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var r=Qi(e,e.idbdb,t);Oi(e,e._dbSchema,t);for(var i=xn(r,e._dbSchema),a=function(c){if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(p){Ge&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(p.src)),Pi(u,p)})},n=0,o=i.change;n<o.length;n++){var s=o[n],l=a(s);if(typeof l=="object")return l.value}}function Kc(e,t,r){return t.storeNames.includes("$meta")?t.table("$meta").get("version").then(function(i){return i??r}):D.resolve(r)}function jc(e,t,r,i){var a=[],n=e._versions,o=e._dbSchema=Qi(e,e.idbdb,i),s=n.filter(function(c){return c._cfg.version>=t});if(s.length===0)return D.resolve();s.forEach(function(c){a.push(function(){var u=o,p=c._cfg.dbschema;Oi(e,u,i),Oi(e,p,i),o=e._dbSchema=p;var m=xn(u,p);m.add.forEach(function(I){$n(i,I[0],I[1].primKey,I[1].indexes)}),m.change.forEach(function(I){if(I.recreate)throw new N.Upgrade("Not yet support for changing primary key");var $=i.objectStore(I.name);I.add.forEach(function(x){return Pi($,x)}),I.change.forEach(function(x){$.deleteIndex(x.name),Pi($,x)}),I.del.forEach(function(x){return $.deleteIndex(x)})});var w=c._cfg.contentUpgrade;if(w&&c._cfg.version>t){Di(e,i),r._memoizedTables={};var h=es(p);m.del.forEach(function(I){h[I]=u[I]}),Wa(e,[e.Transaction.prototype]),Ti(e,[e.Transaction.prototype],ce(h),h),r.schema=h;var g=hn(w);g&&lr();var _,v=D.follow(function(){if(_=w(r),_&&g){var I=pt.bind(null,null);_.then(I,I)}});return _&&typeof _.then=="function"?D.resolve(_):v.then(function(){return _})}}),a.push(function(u){var p=c._cfg.dbschema;Gc(p,u),Wa(e,[e.Transaction.prototype]),Ti(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),r.schema=e._dbSchema}),a.push(function(u){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===c._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(p){return p!=="$meta"})):u.objectStore("$meta").put(c._cfg.version,"version"))})});function l(){return a.length?D.resolve(a.shift()(r.idbtrans)).then(l):D.resolve()}return l().then(function(){bs(o,i)})}function xn(e,t){var r={del:[],add:[],change:[]},i;for(i in e)t[i]||r.del.push(i);for(i in t){var a=e[i],n=t[i];if(!a)r.add.push([i,n]);else{var o={name:i,def:n,recreate:!1,del:[],add:[],change:[]};if(""+(a.primKey.keyPath||"")!=""+(n.primKey.keyPath||"")||a.primKey.auto!==n.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=a.idxByName,l=n.idxByName,c=void 0;for(c in s)l[c]||o.del.push(c);for(c in l){var u=s[c],p=l[c];u?u.src!==p.src&&o.change.push(p):o.add.push(p)}(o.del.length>0||o.add.length>0||o.change.length>0)&&r.change.push(o)}}}return r}function $n(e,t,r,i){var a=e.db.createObjectStore(t,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:{autoIncrement:r.auto});return i.forEach(function(n){return Pi(a,n)}),a}function bs(e,t){ce(e).forEach(function(r){t.db.objectStoreNames.contains(r)||(Ge&&console.debug("Dexie: Creating missing table",r),$n(t,r,e[r].primKey,e[r].indexes))})}function Gc(e,t){[].slice.call(t.db.objectStoreNames).forEach(function(r){return e[r]==null&&t.db.deleteObjectStore(r)})}function Pi(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Qi(e,t,r){var i={},a=qi(t.objectStoreNames,0);return a.forEach(function(n){for(var o=r.objectStore(n),s=o.keyPath,l=Ha(ys(s),s||"",!0,!1,!!o.autoIncrement,s&&typeof s!="string",!0),c=[],u=0;u<o.indexNames.length;++u){var p=o.index(o.indexNames[u]);s=p.keyPath;var m=Ha(p.name,s,!!p.unique,!!p.multiEntry,!1,s&&typeof s!="string",!1);c.push(m)}i[n]=wn(n,l,c)}),i}function Uc(e,t,r){e.verno=t.version/10;var i=e._dbSchema=Qi(e,t,r);e._storeNames=qi(t.objectStoreNames,0),Ti(e,[e._allTables],ce(i),i)}function qc(e,t){var r=Qi(e,e.idbdb,t),i=xn(r,e._dbSchema);return!(i.add.length||i.change.some(function(a){return a.add.length||a.change.length}))}function Oi(e,t,r){for(var i=r.db.objectStoreNames,a=0;a<i.length;++a){var n=i[a],o=r.objectStore(n);e._hasGetAll="getAll"in o;for(var s=0;s<o.indexNames.length;++s){var l=o.indexNames[s],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+qi(c).join("+")+"]";if(t[n]){var p=t[n].idxByName[u];p&&(p.name=l,delete t[n].idxByName[u],t[n].idxByName[l]=p)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ue.WorkerGlobalScope&&ue instanceof ue.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function _s(e){return e.split(",").map(function(t,r){var i,a=t.split(":"),n=(i=a[1])===null||i===void 0?void 0:i.trim();t=a[0].trim();var o=t.replace(/([&*]|\+\+)/g,""),s=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split("+"):o;return Ha(o,s||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ee(s),r===0,n)})}var Hc=(function(){function e(){}return e.prototype._createTableSchema=function(t,r,i){return wn(t,r,i)},e.prototype._parseIndexSyntax=function(t){return _s(t)},e.prototype._parseStoresSpec=function(t,r){var i=this;ce(t).forEach(function(a){if(t[a]!==null){var n=i._parseIndexSyntax(t[a]),o=n.shift();if(!o)throw new N.Schema("Invalid schema for table "+a+": "+t[a]);if(o.unique=!0,o.multi)throw new N.Schema("Primary key cannot be multiEntry*");n.forEach(function(l){if(l.auto)throw new N.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new N.Schema("Index must have a name and cannot be an empty string")});var s=i._createTableSchema(a,o,n);r[a]=s}})},e.prototype.stores=function(t){var r=this.db;this._cfg.storesSource=this._cfg.storesSource?Ee(this._cfg.storesSource,t):t;var i=r._versions,a={},n={};return i.forEach(function(o){Ee(a,o._cfg.storesSource),n=o._cfg.dbschema={},o._parseStoresSpec(a,n)}),r._dbSchema=n,Wa(r,[r._allTables,r,r.Transaction.prototype]),Ti(r,[r._allTables,r,r.Transaction.prototype,this._cfg.tables],ce(n),n),r._storeNames=ce(n),this},e.prototype.upgrade=function(t){return this._cfg.contentUpgrade=gn(this._cfg.contentUpgrade||W,t),this},e})();function Vc(e){return Ur(Hc.prototype,function(r){this.db=e,this._cfg={version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var Tr=Wc();function Wc(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var e=new Set,t=new FinalizationRegistry(function(o){e.delete(o)}),r=function(){return Array.from(e).map(function(o){return o.deref()}).filter(function(o){return o!==void 0})},i=function(o){var s=new WeakRef(o._novip);if(e.add(s),t.register(o._novip,s,s),e.size>o._options.maxConnections){var l=e.values().next().value;e.delete(l),t.unregister(l)}},a=function(o){if(o)for(var s=e.values(),l=s.next();!l.done;){var c=l.value;if(c.deref()===o._novip){e.delete(c),t.unregister(c);return}l=s.next()}};return{toArray:r,add:i,remove:a}}else{var n=[],r=function(){return n},i=function(c){n.push(c._novip)},a=function(c){if(c){var u=n.indexOf(c._novip);u!==-1&&n.splice(u,1)}};return{toArray:r,add:i,remove:a}}}function In(e,t){var r=e._dbNamesDB;return r||(r=e._dbNamesDB=new Or(Vi,{addons:[],indexedDB:e,IDBKeyRange:t}),r.version(1).stores({dbnames:"name"})),r.table("dbnames")}function kn(e){return e&&typeof e.databases=="function"}function Qc(e){var t=e.indexedDB,r=e.IDBKeyRange;return kn(t)?Promise.resolve(t.databases()).then(function(i){return i.map(function(a){return a.name}).filter(function(a){return a!==Vi})}):In(t,r).toCollection().primaryKeys()}function Yc(e,t){var r=e.indexedDB,i=e.IDBKeyRange;!kn(r)&&t!==Vi&&In(r,i).put({name:t}).catch(W)}function Xc(e,t){var r=e.indexedDB,i=e.IDBKeyRange;!kn(r)&&t!==Vi&&In(r,i).delete(t).catch(W)}function Qa(e){return ut(function(){return R.letThrough=!0,e()})}function Zc(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var t;return new Promise(function(r){var i=function(){return indexedDB.databases().finally(r)};t=setInterval(i,100),i()}).finally(function(){return clearInterval(t)})}var fa;function En(e){return!("from"in e)}var ye=function(e,t){if(this)Ee(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0});else{var r=new ye;return e&&"d"in e&&Ee(r,e),r}};Jt(ye.prototype,(fa={add:function(e){return Ri(this,e),this},addKey:function(e){return Pr(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(r){return Pr(t,r,r)}),this},hasKey:function(e){var t=Fi(this).next(e).value;return t&&q(t.from,e)<=0&&q(t.to,e)>=0}},fa[za]=function(){return Fi(this)},fa));function Pr(e,t,r){var i=q(t,r);if(!isNaN(i)){if(i>0)throw RangeError();if(En(e))return Ee(e,{from:t,to:r,d:1});var a=e.l,n=e.r;if(q(r,e.from)<0)return a?Pr(a,t,r):e.l={from:t,to:r,d:1,l:null,r:null},uo(e);if(q(t,e.to)>0)return n?Pr(n,t,r):e.r={from:t,to:r,d:1,l:null,r:null},uo(e);q(t,e.from)<0&&(e.from=t,e.l=null,e.d=n?n.d+1:1),q(r,e.to)>0&&(e.to=r,e.r=null,e.d=e.l?e.l.d+1:1);var o=!e.r;a&&!e.l&&Ri(e,a),n&&o&&Ri(e,n)}}function Ri(e,t){function r(i,a){var n=a.from,o=a.to,s=a.l,l=a.r;Pr(i,n,o),s&&r(i,s),l&&r(i,l)}En(t)||r(e,t)}function Jc(e,t){var r=Fi(t),i=r.next();if(i.done)return!1;for(var a=i.value,n=Fi(e),o=n.next(a.from),s=o.value;!i.done&&!o.done;){if(q(s.from,a.to)<=0&&q(s.to,a.from)>=0)return!0;q(a.from,s.from)<0?a=(i=r.next(s.from)).value:s=(o=n.next(a.from)).value}return!1}function Fi(e){var t=En(e)?null:{s:0,n:e};return{next:function(r){for(var i=arguments.length>0;t;)switch(t.s){case 0:if(t.s=1,i)for(;t.n.l&&q(r,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!i||q(r,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function uo(e){var t,r,i=(((t=e.r)===null||t===void 0?void 0:t.d)||0)-(((r=e.l)===null||r===void 0?void 0:r.d)||0),a=i>1?"r":i<-1?"l":"";if(a){var n=a==="r"?"l":"r",o=j({},e),s=e[a];e.from=s.from,e.to=s.to,e[a]=s[a],o[a]=s[n],e[n]=o,o.d=po(o)}e.d=po(e)}function po(e){var t=e.r,r=e.l;return(t?r?Math.max(t.d,r.d):t.d:r?r.d:0)+1}function Yi(e,t){return ce(t).forEach(function(r){e[r]?Ri(e[r],t[r]):e[r]=is(t[r])}),e}function Sn(e,t){return e.all||t.all||Object.keys(e).some(function(r){return t[r]&&Jc(t[r],e[r])})}var Tt={},ga={},va=!1;function Jr(e,t){Yi(ga,e),va||(va=!0,setTimeout(function(){va=!1;var r=ga;ga={},Cn(r,!1)},0))}function Cn(e,t){t===void 0&&(t=!1);var r=new Set;if(e.all)for(var i=0,a=Object.values(Tt);i<a.length;i++){var n=a[i];ho(n,e,r,t)}else for(var o in e){var s=/^idb\:\/\/(.*)\/(.*)\//.exec(o);if(s){var l=s[1],c=s[2],n=Tt["idb://".concat(l,"/").concat(c)];n&&ho(n,e,r,t)}}r.forEach(function(u){return u()})}function ho(e,t,r,i){for(var a=[],n=0,o=Object.entries(e.queries.query);n<o.length;n++){for(var s=o[n],l=s[0],c=s[1],u=[],p=0,m=c;p<m.length;p++){var w=m[p];Sn(t,w.obsSet)?w.subscribers.forEach(function(v){return r.add(v)}):i&&u.push(w)}i&&a.push([l,u])}if(i)for(var h=0,g=a;h<g.length;h++){var _=g[h],l=_[0],u=_[1];e.queries.query[l]=u}}function ed(e){var t=e._state,r=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?ie(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var i=t.openCanceller,a=Math.round(e.verno*10),n=!1;function o(){if(t.openCanceller!==i)throw new N.DatabaseClosed("db.open() was cancelled")}var s=t.dbReadyResolve,l=null,c=!1,u=function(){return new D(function(p,m){if(o(),!r)throw new N.MissingAPI;var w=e.name,h=t.autoSchema||!a?r.open(w):r.open(w,a);if(!h)throw new N.MissingAPI;h.onerror=Fe(m),h.onblocked=X(e._fireOnBlocked),h.onupgradeneeded=X(function(g){if(l=h.transaction,t.autoSchema&&!e._options.allowEmptyDB){h.onerror=Ar,l.abort(),h.result.close();var _=r.deleteDatabase(w);_.onsuccess=_.onerror=X(function(){m(new N.NoSuchDatabase("Database ".concat(w," doesnt exist")))})}else{l.onerror=Fe(m);var v=g.oldVersion>Math.pow(2,62)?0:g.oldVersion;c=v<1,e.idbdb=h.result,n&&Bc(e,l),Lc(e,v/10,l,m)}},m),h.onsuccess=X(function(){l=null;var g=e.idbdb=h.result,_=qi(g.objectStoreNames);if(_.length>0)try{var v=g.transaction(Tc(_),"readonly");if(t.autoSchema)Uc(e,g,v);else if(Oi(e,e._dbSchema,v),!qc(e,v)&&!n)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),g.close(),a=g.version+1,n=!0,p(u());Di(e,v)}catch{}Tr.add(e),g.onversionchange=X(function(I){t.vcFired=!0,e.on("versionchange").fire(I)}),g.onclose=X(function(){e.close({disableAutoOpen:!1})}),c&&Yc(e._deps,w),p()},m)}).catch(function(p){switch(p==null?void 0:p.name){case"UnknownError":if(t.PR1398_maxLoop>0)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(a>0)return a=0,u();break}return D.reject(p)})};return D.race([i,(typeof navigator>"u"?D.resolve():Zc()).then(u)]).then(function(){return o(),t.onReadyBeingFired=[],D.resolve(Qa(function(){return e.on.ready.fire(e.vip)})).then(function p(){if(t.onReadyBeingFired.length>0){var m=t.onReadyBeingFired.reduce(gn,W);return t.onReadyBeingFired=[],D.resolve(Qa(function(){return m(e.vip)})).then(p)}})}).finally(function(){t.openCanceller===i&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(p){t.dbOpenError=p;try{l&&l.abort()}catch{}return i===t.openCanceller&&e._close(),ie(p)}).finally(function(){t.openComplete=!0,s()}).then(function(){if(c){var p={};e.tables.forEach(function(m){m.schema.indexes.forEach(function(w){w.name&&(p["idb://".concat(e.name,"/").concat(m.name,"/").concat(w.name)]=new ye(-1/0,[[[]]]))}),p["idb://".concat(e.name,"/").concat(m.name,"/")]=p["idb://".concat(e.name,"/").concat(m.name,"/:dels")]=new ye(-1/0,[[[]]])}),mt(Wi).fire(p),Cn(p,!0)}return e})}function Ya(e){var t=function(o){return e.next(o)},r=function(o){return e.throw(o)},i=n(t),a=n(r);function n(o){return function(s){var l=o(s),c=l.value;return l.done?c:!c||typeof c.then!="function"?ee(c)?Promise.all(c).then(i,a):i(c):c.then(i,a)}}return n(t)()}function td(e,t,r){var i=arguments.length;if(i<2)throw new N.InvalidArgument("Too few arguments");for(var a=new Array(i-1);--i;)a[i-1]=arguments[i];r=a.pop();var n=ts(a);return[e,n,r]}function ws(e,t,r,i,a){return D.resolve().then(function(){var n=R.transless||R,o=e._createTransaction(t,r,e._dbSchema,i);o.explicit=!0;var s={trans:o,transless:n};if(i)o.idbtrans=i.idbtrans;else try{o.create(),o.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(p){return p.name===fn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return ws(e,t,r,null,a)})):ie(p)}var l=hn(a);l&&lr();var c,u=D.follow(function(){if(c=a.call(o,o),c)if(l){var p=pt.bind(null,null);c.then(p,p)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=Ya(c))},s);return(c&&typeof c.then=="function"?D.resolve(c).then(function(p){return o.active?p:ie(new N.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):u.then(function(){return c})).then(function(p){return i&&o._resolve(),o._completion.then(function(){return p})}).catch(function(p){return o._reject(p),ie(p)})})}function ei(e,t,r){for(var i=ee(e)?e.slice():[e],a=0;a<r;++a)i.push(t);return i}function rd(e){return j(j({},e),{table:function(t){var r=e.table(t),i=r.schema,a={},n=[];function o(g,_,v){var I=Ir(g),$=a[I]=a[I]||[],x=g==null?0:typeof g=="string"?1:g.length,b=_>0,C=j(j({},v),{name:b?"".concat(I,"(virtual-from:").concat(v.name,")"):v.name,lowLevelIndex:v,isVirtual:b,keyTail:_,keyLength:x,extractKey:Va(g),unique:!b&&v.unique});if($.push(C),C.isPrimaryKey||n.push(C),x>1){var k=x===2?g[0]:g.slice(0,x-1);o(k,_+1,v)}return $.sort(function(E,T){return E.keyTail-T.keyTail}),C}var s=o(i.primaryKey.keyPath,0,i.primaryKey);a[":id"]=[s];for(var l=0,c=i.indexes;l<c.length;l++){var u=c[l];o(u.keyPath,0,u)}function p(g){var _=a[Ir(g)];return _&&_[0]}function m(g,_){return{type:g.type===1?2:g.type,lower:ei(g.lower,g.lowerOpen?e.MAX_KEY:e.MIN_KEY,_),lowerOpen:!0,upper:ei(g.upper,g.upperOpen?e.MIN_KEY:e.MAX_KEY,_),upperOpen:!0}}function w(g){var _=g.query.index;return _.isVirtual?j(j({},g),{query:{index:_.lowLevelIndex,range:m(g.query.range,_.keyTail)}}):g}var h=j(j({},r),{schema:j(j({},i),{primaryKey:s,indexes:n,getIndexByKeyPath:p}),count:function(g){return r.count(w(g))},query:function(g){return r.query(w(g))},openCursor:function(g){var _=g.query.index,v=_.keyTail,I=_.isVirtual,$=_.keyLength;if(!I)return r.openCursor(g);function x(b){function C(E){E!=null?b.continue(ei(E,g.reverse?e.MAX_KEY:e.MIN_KEY,v)):g.unique?b.continue(b.key.slice(0,$).concat(g.reverse?e.MIN_KEY:e.MAX_KEY,v)):b.continue()}var k=Object.create(b,{continue:{value:C},continuePrimaryKey:{value:function(E,T){b.continuePrimaryKey(ei(E,e.MAX_KEY,v),T)}},primaryKey:{get:function(){return b.primaryKey}},key:{get:function(){var E=b.key;return $===1?E[0]:E.slice(0,$)}},value:{get:function(){return b.value}}});return k}return r.openCursor(w(g)).then(function(b){return b&&x(b)})}});return h}})}var id={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:rd};function Mn(e,t,r,i){return r=r||{},i=i||"",ce(e).forEach(function(a){if(!Se(t,a))r[i+a]=void 0;else{var n=e[a],o=t[a];if(typeof n=="object"&&typeof o=="object"&&n&&o){var s=Na(n),l=Na(o);s!==l?r[i+a]=t[a]:s==="Object"?Mn(n,o,r,i+a+"."):n!==o&&(r[i+a]=t[a])}else n!==o&&(r[i+a]=t[a])}}),ce(t).forEach(function(a){Se(e,a)||(r[i+a]=t[a])}),r}function An(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var ad={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return j(j({},e),{table:function(t){var r=e.table(t),i=r.schema.primaryKey,a=j(j({},r),{mutate:function(n){var o=R.trans,s=o.table(t).hook,l=s.deleting,c=s.creating,u=s.updating;switch(n.type){case"add":if(c.fire===W)break;return o._promise("readwrite",function(){return p(n)},!0);case"put":if(c.fire===W&&u.fire===W)break;return o._promise("readwrite",function(){return p(n)},!0);case"delete":if(l.fire===W)break;return o._promise("readwrite",function(){return p(n)},!0);case"deleteRange":if(l.fire===W)break;return o._promise("readwrite",function(){return m(n)},!0)}return r.mutate(n);function p(h){var g=R.trans,_=h.keys||An(i,h);if(!_)throw new Error("Keys missing");return h=h.type==="add"||h.type==="put"?j(j({},h),{keys:_}):j({},h),h.type!=="delete"&&(h.values=Ei([],h.values)),h.keys&&(h.keys=Ei([],h.keys)),nd(r,h,_).then(function(v){var I=_.map(function($,x){var b=v[x],C={onerror:null,onsuccess:null};if(h.type==="delete")l.fire.call(C,$,b,g);else if(h.type==="add"||b===void 0){var k=c.fire.call(C,$,h.values[x],g);$==null&&k!=null&&($=k,h.keys[x]=$,i.outbound||$e(h.values[x],i.keyPath,$))}else{var E=Mn(b,h.values[x]),T=u.fire.call(C,E,$,b,g);if(T){var K=h.values[x];Object.keys(T).forEach(function(S){Se(K,S)?K[S]=T[S]:$e(K,S,T[S])})}}return C});return r.mutate(h).then(function($){for(var x=$.failures,b=$.results,C=$.numFailures,k=$.lastResult,E=0;E<_.length;++E){var T=b?b[E]:_[E],K=I[E];T==null?K.onerror&&K.onerror(x[E]):K.onsuccess&&K.onsuccess(h.type==="put"&&v[E]?h.values[E]:T)}return{failures:x,results:b,numFailures:C,lastResult:k}}).catch(function($){return I.forEach(function(x){return x.onerror&&x.onerror($)}),Promise.reject($)})})}function m(h){return w(h.trans,h.range,1e4)}function w(h,g,_){return r.query({trans:h,values:!1,query:{index:i,range:g},limit:_}).then(function(v){var I=v.result;return p({type:"delete",keys:I,trans:h}).then(function($){return $.numFailures>0?Promise.reject($.failures[0]):I.length<_?{failures:[],numFailures:0,lastResult:void 0}:w(h,j(j({},g),{lower:I[I.length-1],lowerOpen:!0}),_)})})}}});return a}})}};function nd(e,t,r){return t.type==="add"?Promise.resolve([]):e.getMany({trans:t.trans,keys:r,cache:"immutable"})}function xs(e,t,r){try{if(!t||t.keys.length<e.length)return null;for(var i=[],a=0,n=0;a<t.keys.length&&n<e.length;++a)q(t.keys[a],e[n])===0&&(i.push(r?Ot(t.values[a]):t.values[a]),++n);return i.length===e.length?i:null}catch{return null}}var od={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var r=e.table(t);return j(j({},r),{getMany:function(i){if(!i.cache)return r.getMany(i);var a=xs(i.keys,i.trans._cache,i.cache==="clone");return a?D.resolve(a):r.getMany(i).then(function(n){return i.trans._cache={keys:i.keys,values:i.cache==="clone"?Ot(n):n},n})},mutate:function(i){return i.type!=="add"&&(i.trans._cache=null),r.mutate(i)}})}}}};function $s(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Is(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var sd={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,r=new ye(e.MIN_KEY,e.MAX_KEY);return j(j({},e),{transaction:function(i,a,n){if(R.subscr&&a!=="readonly")throw new N.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(R.querier));return e.transaction(i,a,n)},table:function(i){var a=e.table(i),n=a.schema,o=n.primaryKey,s=n.indexes,l=o.extractKey,c=o.outbound,u=o.autoIncrement&&s.filter(function(h){return h.compound&&h.keyPath.includes(o.keyPath)}),p=j(j({},a),{mutate:function(h){var g,_,v=h.trans,I=h.mutatedParts||(h.mutatedParts={}),$=function(M){var A="idb://".concat(t,"/").concat(i,"/").concat(M);return I[A]||(I[A]=new ye)},x=$(""),b=$(":dels"),C=h.type,k=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[An(o,h).filter(function(M){return M}),h.values]:[],E=k[0],T=k[1],K=h.trans._cache;if(ee(E)){x.addKeys(E);var S=C==="delete"||E.length===T.length?xs(E,K):null;S||b.addKeys(E),(S||T)&&ld($,n,S,T)}else if(E){var O={from:(g=E.lower)!==null&&g!==void 0?g:e.MIN_KEY,to:(_=E.upper)!==null&&_!==void 0?_:e.MAX_KEY};b.add(O),x.add(O)}else x.add(r),b.add(r),n.indexes.forEach(function(M){return $(M.name).add(r)});return a.mutate(h).then(function(M){return E&&(h.type==="add"||h.type==="put")&&(x.addKeys(M.results),u&&u.forEach(function(A){for(var U=h.values.map(function(ve){return A.extractKey(ve)}),F=A.keyPath.findIndex(function(ve){return ve===o.keyPath}),ne=0,Me=M.results.length;ne<Me;++ne)U[ne][F]=M.results[ne];$(A.name).addKeys(U)})),v.mutatedParts=Yi(v.mutatedParts||{},I),M})}}),m=function(h){var g,_,v=h.query,I=v.index,$=v.range;return[I,new ye((g=$.lower)!==null&&g!==void 0?g:e.MIN_KEY,(_=$.upper)!==null&&_!==void 0?_:e.MAX_KEY)]},w={get:function(h){return[o,new ye(h.key)]},getMany:function(h){return[o,new ye().addKeys(h.keys)]},count:m,query:m,openCursor:m};return ce(w).forEach(function(h){p[h]=function(g){var _=R.subscr,v=!!_,I=$s(R,a)&&Is(h,g),$=I?g.obsSet={}:_;if(v){var x=function(S){var O="idb://".concat(t,"/").concat(i,"/").concat(S);return $[O]||($[O]=new ye)},b=x(""),C=x(":dels"),k=w[h](g),E=k[0],T=k[1];if(h==="query"&&E.isPrimaryKey&&!g.values?C.add(T):x(E.name||"").add(T),!E.isPrimaryKey)if(h==="count")C.add(r);else{var K=h==="query"&&c&&g.values&&a.query(j(j({},g),{values:!1}));return a[h].apply(this,arguments).then(function(S){if(h==="query"){if(c&&g.values)return K.then(function(U){var F=U.result;return b.addKeys(F),S});var O=g.values?S.result.map(l):S.result;g.values?b.addKeys(O):C.addKeys(O)}else if(h==="openCursor"){var M=S,A=g.values;return M&&Object.create(M,{key:{get:function(){return C.addKey(M.primaryKey),M.key}},primaryKey:{get:function(){var U=M.primaryKey;return C.addKey(U),U}},value:{get:function(){return A&&b.addKey(M.primaryKey),M.value}}})}return S})}}return a[h].apply(this,arguments)}}),p}})}};function ld(e,t,r,i){function a(n){var o=e(n.name||"");function s(c){return c!=null?n.extractKey(c):null}var l=function(c){return n.multiEntry&&ee(c)?c.forEach(function(u){return o.addKey(u)}):o.addKey(c)};(r||i).forEach(function(c,u){var p=r&&s(r[u]),m=i&&s(i[u]);q(p,m)!==0&&(p!=null&&l(p),m!=null&&l(m))})}t.indexes.forEach(a)}function mo(e,t,r){if(r.numFailures===0)return t;if(t.type==="deleteRange")return null;var i=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1;if(r.numFailures===i)return null;var a=j({},t);return ee(a.keys)&&(a.keys=a.keys.filter(function(n,o){return!(o in r.failures)})),"values"in a&&ee(a.values)&&(a.values=a.values.filter(function(n,o){return!(o in r.failures)})),a}function cd(e,t){return t.lower===void 0?!0:t.lowerOpen?q(e,t.lower)>0:q(e,t.lower)>=0}function dd(e,t){return t.upper===void 0?!0:t.upperOpen?q(e,t.upper)<0:q(e,t.upper)<=0}function ya(e,t){return cd(e,t)&&dd(e,t)}function fo(e,t,r,i,a,n){if(!r||r.length===0)return e;var o=t.query.index,s=o.multiEntry,l=t.query.range,c=i.schema.primaryKey,u=c.extractKey,p=o.extractKey,m=(o.lowLevelIndex||o).extractKey,w=r.reduce(function(g,_){var v=g,I=[];if(_.type==="add"||_.type==="put")for(var $=new ye,x=_.values.length-1;x>=0;--x){var b=_.values[x],C=u(b);if(!$.hasKey(C)){var k=p(b);(s&&ee(k)?k.some(function(O){return ya(O,l)}):ya(k,l))&&($.addKey(C),I.push(b))}}switch(_.type){case"add":{var E=new ye().addKeys(t.values?g.map(function(O){return u(O)}):g);v=g.concat(t.values?I.filter(function(O){var M=u(O);return E.hasKey(M)?!1:(E.addKey(M),!0)}):I.map(function(O){return u(O)}).filter(function(O){return E.hasKey(O)?!1:(E.addKey(O),!0)}));break}case"put":{var T=new ye().addKeys(_.values.map(function(O){return u(O)}));v=g.filter(function(O){return!T.hasKey(t.values?u(O):O)}).concat(t.values?I:I.map(function(O){return u(O)}));break}case"delete":var K=new ye().addKeys(_.keys);v=g.filter(function(O){return!K.hasKey(t.values?u(O):O)});break;case"deleteRange":var S=_.range;v=g.filter(function(O){return!ya(u(O),S)});break}return v},e);if(w===e)return e;var h=function(g,_){return q(m(g),m(_))||q(u(g),u(_))};return w.sort(t.direction==="prev"||t.direction==="prevunique"?function(g,_){return h(_,g)}:h),t.limit&&t.limit<1/0&&(w.length>t.limit?w.length=t.limit:e.length===t.limit&&w.length<t.limit&&(a.dirty=!0)),n?Object.freeze(w):w}function go(e,t){return q(e.lower,t.lower)===0&&q(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function ud(e,t,r,i){if(e===void 0)return t!==void 0?-1:0;if(t===void 0)return 1;var a=q(e,t);if(a===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return a}function pd(e,t,r,i){if(e===void 0)return t!==void 0?1:0;if(t===void 0)return-1;var a=q(e,t);if(a===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return a}function hd(e,t){return ud(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&pd(e.upper,t.upper,e.upperOpen,t.upperOpen)>=0}function md(e,t,r,i){var a,n=Tt["idb://".concat(e,"/").concat(t)];if(!n)return[];var o=n.queries[r];if(!o)return[null,!1,n,null];var s=i.query?i.query.index.name:null,l=o[s||""];if(!l)return[null,!1,n,null];switch(r){case"query":var c=(a=i.direction)!==null&&a!==void 0?a:"next",u=l.find(function(w){var h;return w.req.limit===i.limit&&w.req.values===i.values&&((h=w.req.direction)!==null&&h!==void 0?h:"next")===c&&go(w.req.query.range,i.query.range)});if(u)return[u,!0,n,l];var p=l.find(function(w){var h,g="limit"in w.req?w.req.limit:1/0;return g>=i.limit&&((h=w.req.direction)!==null&&h!==void 0?h:"next")===c&&(i.values?w.req.values:!0)&&hd(w.req.query.range,i.query.range)});return[p,!1,n,l];case"count":var m=l.find(function(w){return go(w.req.query.range,i.query.range)});return[m,!!m,n,l]}}function fd(e,t,r,i){e.subscribers.add(r),i.addEventListener("abort",function(){e.subscribers.delete(r),e.subscribers.size===0&&gd(e,t)})}function gd(e,t){setTimeout(function(){e.subscribers.size===0&&xt(t,e)},3e3)}var vd={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name,r=j(j({},e),{transaction:function(i,a,n){var o=e.transaction(i,a,n);if(a==="readwrite"){var s=new AbortController,l=s.signal,c=function(u){return function(){if(s.abort(),a==="readwrite"){for(var p=new Set,m=0,w=i;m<w.length;m++){var h=w[m],g=Tt["idb://".concat(t,"/").concat(h)];if(g){var _=e.table(h),v=g.optimisticOps.filter(function(A){return A.trans===o});if(o._explicit&&u&&o.mutatedParts)for(var I=0,$=Object.values(g.queries.query);I<$.length;I++)for(var x=$[I],b=0,C=x.slice();b<C.length;b++){var k=C[b];Sn(k.obsSet,o.mutatedParts)&&(xt(x,k),k.subscribers.forEach(function(A){return p.add(A)}))}else if(v.length>0){g.optimisticOps=g.optimisticOps.filter(function(A){return A.trans!==o});for(var E=0,T=Object.values(g.queries.query);E<T.length;E++)for(var x=T[E],K=0,S=x.slice();K<S.length;K++){var k=S[K];if(k.res!=null&&o.mutatedParts)if(u&&!k.dirty){var O=Object.isFrozen(k.res),M=fo(k.res,k.req,v,_,k,O);k.dirty?(xt(x,k),k.subscribers.forEach(function(F){return p.add(F)})):M!==k.res&&(k.res=M,k.promise=D.resolve({result:M}))}else k.dirty&&xt(x,k),k.subscribers.forEach(function(F){return p.add(F)})}}}}p.forEach(function(A){return A()})}}};o.addEventListener("abort",c(!1),{signal:l}),o.addEventListener("error",c(!1),{signal:l}),o.addEventListener("complete",c(!0),{signal:l})}return o},table:function(i){var a=e.table(i),n=a.schema.primaryKey,o=j(j({},a),{mutate:function(s){var l=R.trans;if(n.outbound||l.db._options.cache==="disabled"||l.explicit||l.idbtrans.mode!=="readwrite")return a.mutate(s);var c=Tt["idb://".concat(t,"/").concat(i)];if(!c)return a.mutate(s);var u=a.mutate(s);return(s.type==="add"||s.type==="put")&&(s.values.length>=50||An(n,s).some(function(p){return p==null}))?u.then(function(p){var m=j(j({},s),{values:s.values.map(function(h,g){var _;if(p.failures[g])return h;var v=!((_=n.keyPath)===null||_===void 0)&&_.includes(".")?Ot(h):j({},h);return $e(v,n.keyPath,p.results[g]),v})}),w=mo(c,m,p);c.optimisticOps.push(w),queueMicrotask(function(){return s.mutatedParts&&Jr(s.mutatedParts)})}):(c.optimisticOps.push(s),s.mutatedParts&&Jr(s.mutatedParts),u.then(function(p){if(p.numFailures>0){xt(c.optimisticOps,s);var m=mo(c,s,p);m&&c.optimisticOps.push(m),s.mutatedParts&&Jr(s.mutatedParts)}}),u.catch(function(){xt(c.optimisticOps,s),s.mutatedParts&&Jr(s.mutatedParts)})),u},query:function(s){var l;if(!$s(R,a)||!Is("query",s))return a.query(s);var c=((l=R.trans)===null||l===void 0?void 0:l.db._options.cache)==="immutable",u=R,p=u.requery,m=u.signal,w=md(t,i,"query",s),h=w[0],g=w[1],_=w[2],v=w[3];if(h&&g)h.obsSet=s.obsSet;else{var I=a.query(s).then(function($){var x=$.result;if(h&&(h.res=x),c){for(var b=0,C=x.length;b<C;++b)Object.freeze(x[b]);Object.freeze(x)}return $}).catch(function($){return v&&h&&xt(v,h),Promise.reject($)});h={obsSet:s.obsSet,promise:I,subscribers:new Set,type:"query",req:s,dirty:!1},v?v.push(h):(v=[h],_||(_=Tt["idb://".concat(t,"/").concat(i)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),_.queries.query[s.query.index.name||""]=v)}return fd(h,v,p,m),h.promise.then(function($){var x=fo($.result,s,_==null?void 0:_.optimisticOps,a,h,c);return{result:c?x:Ot(x)}})}});return o}});return r}};function ti(e,t){return new Proxy(e,{get:function(r,i,a){return i==="db"?t:Reflect.get(r,i,a)}})}var Or=(function(){function e(t,r){var i=this;this._middlewares={},this.verno=0;var a=e.dependencies;this._options=r=j({addons:e.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned",maxConnections:fc},r),this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};var n=r.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:W,dbReadyPromise:null,cancelOpen:W,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:r.autoOpen};o.dbReadyPromise=new D(function(l){o.dbReadyResolve=l}),o.openCanceller=new D(function(l,c){o.cancelOpen=c}),this._state=o,this.name=t,this.on=Gr(this,"populate","blocked","versionchange","close",{ready:[gn,W]}),this.once=function(l,c){var u=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];i.on(l).unsubscribe(u),c.apply(i,p)};return i.on(l,u)},this.on.ready.subscribe=Zo(this.on.ready.subscribe,function(l){return function(c,u){e.vip(function(){var p=i._state;if(p.openComplete)p.dbOpenError||D.resolve().then(c),u&&l(c);else if(p.onReadyBeingFired)p.onReadyBeingFired.push(c),u&&l(c);else{l(c);var m=i;u||l(function w(){m.on.ready.unsubscribe(c),m.on.ready.unsubscribe(w)})}})}}),this.Collection=$c(this),this.Table=_c(this),this.Transaction=Dc(this),this.Version=Vc(this),this.WhereClause=Mc(this),this.on("versionchange",function(l){l.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(i.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(i.name,"'. Closing db now to resume the delete request.")),i.close({disableAutoOpen:!1})}),this.on("blocked",function(l){!l.newVersion||l.newVersion<l.oldVersion?console.warn("Dexie.delete('".concat(i.name,"') was blocked")):console.warn("Upgrade '".concat(i.name,"' blocked by other connection holding version ").concat(l.oldVersion/10))}),this._maxKey=Dr(r.IDBKeyRange),this._createTransaction=function(l,c,u,p){return new i.Transaction(l,c,u,i._options.chromeTransactionDurability,p)},this._fireOnBlocked=function(l){i.on("blocked").fire(l),Tr.toArray().filter(function(c){return c.name===i.name&&c!==i&&!c._state.vcFired}).map(function(c){return c.on("versionchange").fire(l)})},this.use(od),this.use(vd),this.use(sd),this.use(id),this.use(ad);var s=new Proxy(this,{get:function(l,c,u){if(c==="_vip")return!0;if(c==="table")return function(m){return ti(i.table(m),s)};var p=Reflect.get(l,c,u);return p instanceof fs?ti(p,s):c==="tables"?p.map(function(m){return ti(m,s)}):c==="_createTransaction"?function(){var m=p.apply(this,arguments);return ti(m,s)}:p}});this.vip=s,n.forEach(function(l){return l(i)})}return e.prototype.version=function(t){if(isNaN(t)||t<.1)throw new N.Type("Given version is not a positive number");if(t=Math.round(t*10)/10,this.idbdb||this._state.isBeingOpened)throw new N.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var r=this._versions,i=r.filter(function(a){return a._cfg.version===t})[0];return i||(i=new this.Version(t),r.push(i),r.sort(zc),i.stores({}),this._state.autoSchema=!1,i)},e.prototype._whenReady=function(t){var r=this;return this.idbdb&&(this._state.openComplete||R.letThrough||this._vip)?t():new D(function(i,a){if(r._state.openComplete)return a(new N.DatabaseClosed(r._state.dbOpenError));if(!r._state.isBeingOpened){if(!r._state.autoOpen){a(new N.DatabaseClosed);return}r.open().catch(W)}r._state.dbReadyPromise.then(i,a)}).then(t)},e.prototype.use=function(t){var r=t.stack,i=t.create,a=t.level,n=t.name;n&&this.unuse({stack:r,name:n});var o=this._middlewares[r]||(this._middlewares[r]=[]);return o.push({stack:r,create:i,level:a??10,name:n}),o.sort(function(s,l){return s.level-l.level}),this},e.prototype.unuse=function(t){var r=t.stack,i=t.name,a=t.create;return r&&this._middlewares[r]&&(this._middlewares[r]=this._middlewares[r].filter(function(n){return a?n.create!==a:i?n.name!==i:!1})),this},e.prototype.open=function(){var t=this;return Ft(tt,function(){return ed(t)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state;if(Tr.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new D(function(r){t.dbReadyResolve=r}),t.openCanceller=new D(function(r,i){t.cancelOpen=i}))},e.prototype.close=function(t){var r=t===void 0?{disableAutoOpen:!0}:t,i=r.disableAutoOpen,a=this._state;i?(a.isBeingOpened&&a.cancelOpen(new N.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new N.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},e.prototype.delete=function(t){var r=this;t===void 0&&(t={disableAutoOpen:!0});var i=arguments.length>0&&typeof arguments[0]!="object",a=this._state;return new D(function(n,o){var s=function(){r.close(t);var l=r._deps.indexedDB.deleteDatabase(r.name);l.onsuccess=X(function(){Xc(r._deps,r.name),n()}),l.onerror=Fe(o),l.onblocked=r._fireOnBlocked};if(i)throw new N.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(s):s()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var t=this;return ce(this._allTables).map(function(r){return t._allTables[r]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var t=td.apply(this,arguments);return this._transaction.apply(this,t)},e.prototype._transaction=function(t,r,i){var a=this,n=R.trans;(!n||n.db!==this||t.indexOf("!")!==-1)&&(n=null);var o=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");var s,l;try{if(l=r.map(function(u){var p=u instanceof a.Table?u.name:u;if(typeof p!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return p}),t=="r"||t===ua)s=ua;else if(t=="rw"||t==pa)s=pa;else throw new N.InvalidArgument("Invalid transaction mode: "+t);if(n){if(n.mode===ua&&s===pa)if(o)n=null;else throw new N.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");n&&l.forEach(function(u){if(n&&n.storeNames.indexOf(u)===-1)if(o)n=null;else throw new N.SubTransaction("Table "+u+" not included in parent transaction.")}),o&&n&&!n.active&&(n=null)}}catch(u){return n?n._promise(null,function(p,m){m(u)}):ie(u)}var c=ws.bind(null,this,s,l,n,i);return n?n._promise(s,c,"lock"):R.trans?Ft(R.transless,function(){return a._whenReady(c)}):this._whenReady(c)},e.prototype.table=function(t){if(!Se(this._allTables,t))throw new N.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},e})(),yd=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",bd=(function(){function e(t){this._subscribe=t}return e.prototype.subscribe=function(t,r,i){return this._subscribe(!t||typeof t=="function"?{next:t,error:r,complete:i}:t)},e.prototype[yd]=function(){return this},e})(),Ni;try{Ni={indexedDB:ue.indexedDB||ue.mozIndexedDB||ue.webkitIndexedDB||ue.msIndexedDB,IDBKeyRange:ue.IDBKeyRange||ue.webkitIDBKeyRange}}catch{Ni={indexedDB:null,IDBKeyRange:null}}function _d(e){var t=!1,r,i=new bd(function(a){var n=hn(e);function o(v){var I=or();try{n&&lr();var $=ut(e,v);return n&&($=$.finally(pt)),$}finally{I&&sr()}}var s=!1,l,c={},u={},p={get closed(){return s},unsubscribe:function(){s||(s=!0,l&&l.abort(),m&&mt.storagemutated.unsubscribe(g))}};a.start&&a.start(p);var m=!1,w=function(){return da(_)};function h(){return Sn(u,c)}var g=function(v){Yi(c,v),h()&&w()},_=function(){if(!(s||!Ni.indexedDB)){c={};var v={};l&&l.abort(),l=new AbortController;var I={subscr:v,signal:l.signal,requery:w,querier:e,trans:null},$=o(I);m||(mt.storagemutated.subscribe(g),m=!0),Promise.resolve($).then(function(x){t=!0,r=x,!(s||I.signal.aborted)&&(h()?w():(u=v,h()?w():(c={},da(function(){return!s&&a.next&&a.next(x)}))))},function(x){t=!1,["DatabaseClosedError","AbortError"].includes(x==null?void 0:x.name)||s||da(function(){s||a.error&&a.error(x)})})}};return setTimeout(w,0),p});return i.hasValue=function(){return t},i.getValue=function(){return r},i}var kt=Or;Jt(kt,j(j({},Hi),{delete:function(e){var t=new kt(e,{addons:[]});return t.delete()},exists:function(e){return new kt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return Qc(kt.dependencies).then(e)}catch{return ie(new N.MissingAPI)}},defineClass:function(){function e(t){Ee(this,t)}return e},ignoreTransaction:function(e){return R.trans?Ft(R.transless||tt,e):e()},vip:Qa,async:function(e){return function(){try{var t=Ya(e.apply(this,arguments));return!t||typeof t.then!="function"?D.resolve(t):t}catch(r){return ie(r)}}},spawn:function(e,t,r){try{var i=Ya(e.apply(r,t||[]));return!i||typeof i.then!="function"?D.resolve(i):i}catch(a){return ie(a)}},currentTransaction:{get:function(){return R.trans||null}},waitFor:function(e,t){var r=D.resolve(typeof e=="function"?kt.ignoreTransaction(e):e).timeout(t||6e4);return R.trans?R.trans.waitFor(r):r},Promise:D,debug:{get:function(){return Ge},set:function(e){os(e)}},derive:ar,extend:Ee,props:Jt,override:Zo,Events:Gr,on:mt,liveQuery:_d,extendObservabilitySet:Yi,getByKeyPath:et,setByKeyPath:$e,delByKeyPath:Gl,shallowClone:es,deepClone:Ot,getObjectDiff:Mn,cmp:q,asap:Jo,minKey:Ua,addons:[],connections:{get:Tr.toArray},errnames:fn,dependencies:Ni,cache:Tt,semVer:io,version:io.split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,r){return e+t/Math.pow(10,r*2)})}));kt.maxKey=Dr(kt.dependencies.IDBKeyRange);typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(mt(Wi,function(e){if(!lt){var t;t=new CustomEvent(qa,{detail:e}),lt=!0,dispatchEvent(t),lt=!1}}),addEventListener(qa,function(e){var t=e.detail;lt||Dn(t)}));function Dn(e){var t=lt;try{lt=!0,mt.storagemutated.fire(e),Cn(e,!0)}finally{lt=t}}var lt=!1,ot,Xa=function(){};typeof BroadcastChannel<"u"&&(Xa=function(){ot=new BroadcastChannel(qa),ot.onmessage=function(e){return e.data&&Dn(e.data)}},Xa(),typeof ot.unref=="function"&&ot.unref(),mt(Wi,function(e){lt||ot.postMessage(e)}));typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Or.disableBfCache&&e.persisted){Ge&&console.debug("Dexie: handling persisted pagehide"),ot==null||ot.close();for(var t=0,r=Tr.toArray();t<r.length;t++){var i=r[t];i.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(e){!Or.disableBfCache&&e.persisted&&(Ge&&console.debug("Dexie: handling persisted pageshow"),Xa(),Dn({all:new ye(-1/0,[[]])}))}));D.rejectionMapper=Xl;os(Ge);class wd extends Or{constructor(){super("MealPrepLocal"),this.version(1).stores({rows:"id"})}}const Tn=new wd,Pn=1,xd=250;let Ct=null,Za=null;async function $d(){const e=await Tn.rows.get(Pn);return(e==null?void 0:e.data)??null}function Id(e){Ct&&clearTimeout(Ct),Ct=setTimeout(()=>{Ct=null,Za=Tn.rows.put({id:Pn,data:e}).catch(t=>{console.error("No se pudo guardar en IndexedDB:",t)})},xd)}async function Rr(e){Ct&&(clearTimeout(Ct),Ct=null),await Tn.rows.put({id:Pn,data:e}),Za&&await Za}function ks(){return{family:null,members:[],weightHistory:[],foods:[],pantryItems:[],recipes:[],mealPlans:[],meals:[],templates:[],shoppingLists:[],shoppingItems:[],shoppingSections:[],shoppingSectionItems:[],householdItems:[],householdStockItems:[],chores:[],choreCompletions:[]}}const f=ks();function xe(e){const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${i}`}function B(e){const t=e();return Id(f),t}async function ri(){await Rr(f)}let ba=null;function P(){return ba||(ba=(async()=>{await Cl();const e=await $d();if(e){const t=pn(e);Object.assign(f,t.store),t.changed&&await Rr(f)}else{const{bootstrapIfEmpty:t}=await Qo(async()=>{const{bootstrapIfEmpty:r}=await import("./bootstrap-D_pThJ7w.js");return{bootstrapIfEmpty:r}},[]);t(),await Rr(f)}})()),ba}async function kd(e){Object.assign(f,pn(e).store),await Rr(f)}async function Ed(){const{bootstrapIfEmpty:e}=await Qo(async()=>{const{bootstrapIfEmpty:t}=await import("./bootstrap-D_pThJ7w.js");return{bootstrapIfEmpty:t}},[]);Object.assign(f,ks()),e(),await Rr(f)}const Sd="local-user",Cd="local@mealprep.app";function _a(){var t;const e=f.family;return G({id:Sd,email:Cd,name:((t=f.members[0])==null?void 0:t.name)??"Tú",familyId:e.id,family:{id:e.id,name:e.name,onboardingVersion:e.onboardingVersion,onboardingStep:e.onboardingStep,onboardingCompletedAt:e.onboardingCompletedAt,enabledModules:e.enabledModules,homeType:e.homeType,members:f.members.map(r=>({id:r.id,name:r.name,color:r.color,age:r.age,weightKg:r.weightKg,heightCm:r.heightCm,sex:r.sex,activityLevel:r.activityLevel,goal:r.goal,restrictions:r.restrictions,dailyCalories:r.dailyCalories,dailyProteinG:r.dailyProteinG,dailyCarbsG:r.dailyCarbsG,dailyFatG:r.dailyFatG,tmb:r.tmb,isStandardProfile:r.isStandardProfile}))}})}const qr={register:async e=>(await P(),{user:_a(),accessToken:"local",refreshToken:"local"}),login:async e=>(await P(),{user:_a(),accessToken:"local",refreshToken:"local"}),me:async()=>(await P(),_a())};function Es(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function we(e=new Date){const t=e.getDay(),r=e.getDate()-t+(t===0?-6:1),i=new Date(e);return i.setDate(r),Es(i)}function Md(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r}const vo=[{id:"hogar-basico",name:"Hogar básico",description:"Las tareas domésticas más habituales, diarias y semanales",chores:[{name:"Fregar los platos",frequency:"DIARIA"},{name:"Sacar la basura",frequency:"DIARIA"},{name:"Recoger la cocina",frequency:"DIARIA"},{name:"Hacer las camas",frequency:"DIARIA"},{name:"Poner una lavadora",frequency:"SEMANAL"},{name:"Tender y recoger la ropa",frequency:"SEMANAL"},{name:"Pasar la aspiradora",frequency:"SEMANAL"},{name:"Fregar el suelo",frequency:"SEMANAL"},{name:"Limpiar el baño",frequency:"SEMANAL"},{name:"Cambiar las sábanas",frequency:"SEMANAL"},{name:"Hacer la compra",frequency:"SEMANAL"}]}];function wa(e){return e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}const st={minRecipesForPlan:35,expiringSoonDays:7,minKcalPorRacion:25,maxKcalPorRacion:1500};function Ad(e){var r;const t=new Map;for(const i of e){if(!((r=i.recipe)!=null&&r.ingredients))continue;const a=i.servingsMultiplier??1,n=i.recipe.servings&&i.recipe.servings>0?i.recipe.servings:1;for(const o of i.recipe.ingredients){const s=t.get(o.foodId),l=o.quantity/n*a;s?s.total+=l:t.set(o.foodId,{foodId:o.foodId,foodName:o.foodName,total:l,unit:o.unit})}}return t}function Dd(e,t){return`${e}|${t}`}function Ss(e,t,r){return e.get(Dd(t,r))??0}const Cs={SEDENTARIO:1.2,LIGERO:1.375,MODERADO:1.55,ACTIVO:1.725},Ms={PERDER_PESO:.8,MANTENER:1,GANAR_MUSCULO:1.15};function Td(e){const{weightKg:t,heightCm:r,age:i,sex:a}=e;return a==="MASCULINO"?10*t+6.25*r-5*i+5:10*t+6.25*r-5*i-161}function As(e,t,r){let i;switch(r){case"PERDER_PESO":i=2;break;case"GANAR_MUSCULO":i=2.2;break;default:i=1.6}const a=Math.round(t*i),n=e*.28,o=Math.round(n/9),s=a*4,l=e-s-n,c=Math.round(Math.max(0,l)/4);return{dailyProteinG:a,dailyCarbsG:c,dailyFatG:o}}function Ds(e){const t=Td(e),r=Cs[e.activityLevel],i=Ms[e.goal],a=Math.round(t*r*i);return{tmb:Math.round(t),dailyCalories:a,...As(a,e.weightKg,e.goal)}}const Xe={age:35,weightKg:70,heightCm:170,activityLevel:"LIGERO",goal:"MANTENER"},xa=2e3;function Pd(){const e=Cs[Xe.activityLevel],t=Ms[Xe.goal];return{tmb:Math.round(xa/e/t),dailyCalories:xa,...As(xa,Xe.weightKg,Xe.goal)}}const Od={DESAYUNO:{calories:.2,protein:.24,carbs:.2,fat:.2},TENTEMPIE:{calories:.08,protein:.06,carbs:.1,fat:.05},ALMUERZO:{calories:.32,protein:.3,carbs:.3,fat:.35},MERIENDA:{calories:.08,protein:.1,carbs:.1,fat:.05},CENA:{calories:.27,protein:.25,carbs:.25,fat:.3},BUFFER:{calories:.05,protein:.05,carbs:.05,fat:.05}};function Ts(e){return{calories:e.dailyCalories*7,proteinG:e.dailyProteinG*7,carbsG:e.dailyCarbsG*7,fatG:e.dailyFatG*7}}const Rd={calories:{under:.05,over:.05},proteinG:{under:.05,over:.45},carbsG:{under:.15,over:.15},fatG:{under:.15,over:.15}},Fd=2.5;function Ps(e,t){const r=Ts(e),i={};for(const[a,n]of Object.entries(r)){const o=Rd[a];i[a]={min:Math.round(n*(1-o.under)),max:Math.round(n*(1+o.over))}}if(t&&t>0){const a=Math.round(Fd*t*7);i.proteinG.max=Math.max(i.proteinG.min,Math.min(i.proteinG.max,a))}return i}const Nd=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"],zd=4,Ld=3,yo=1e-9,Bd=6,Kd=8,jd=5,bo=.5,Gd=.5,Ud=2.5,_o={calories:{under:1,over:1},proteinG:{under:2,over:1},carbsG:{under:.5,over:.5},fatG:{under:.5,over:.5}},Ne=["calories","proteinG","carbsG","fatG"];function qd(e){const t=[];for(let r=1;r<=7;r++)for(const i of Nd){const a=Od[i].calories;t.push({dayOfWeek:r,mealType:i,recipeId:"",servingsMultiplier:1,targetCalories:e&&e>0?e*a:void 0})}return t}function Os(e,t){const r=e.filter(i=>i.mealType.includes(t));return r.length>0?r:e}function Hd(e,t){const r=new Date(e);return r.setDate(r.getDate()+(t-1)),r.setHours(0,0,0,0),r}function Vd(e,t,r){if(!r||r.urgencyMap.size===0)return 0;const i=Hd(r.weekStart,t.dayOfWeek);let a=0;for(const n of e.ingredients){const o=r.urgencyMap.get(n.foodId);o&&(o.expiryDate<i||(a+=o.urgency))}return a}function Wd(e){const t=e.calorias??0;if(t<=0)return 0;const r=4*(e.proteinas??0);return Math.min(1,Math.max(0,r/t))}function Qd(e,t){const r=t.reduce((a,n)=>a+n,0);let i=Math.random()*r;for(let a=0;a<e.length;a++)if(i-=t[a],i<=0)return e[a];return e[e.length-1]}function Yd(e,t){const r=t.targetCalories;if(!r||r<=0)return 1;const i=e.calorias??0;return 1/(1+Math.abs(i-r)/r)}function Rs(e,t,r){const i=e.map(a=>(1+zd*Vd(a,t,r))*(1+Bd*Wd(a))*(1+Ld*Yd(a,t)));return Qd(e,i)}function Xd(e,t,r){const i=Os(t,e.mealType);return Rs(i,e,r).id}function Zd(e,t,r){for(let i=0;i<t.length;i++)t[i].recipeId=Xd(t[i],e,r)}function zi(e){return{calories:(e==null?void 0:e.calorias)??0,proteinG:(e==null?void 0:e.proteinas)??0,carbsG:(e==null?void 0:e.carbos)??0,fatG:(e==null?void 0:e.grasas)??0}}function Xi(e,t){const r=zi(t.get(e.recipeId)),i=e.servingsMultiplier||1;for(const a of Ne)r[a]*=i;return r}function On(e,t){const r={calories:0,proteinG:0,carbsG:0,fatG:0};for(const i of e){const a=Xi(i,t);for(const n of Ne)r[n]+=a[n]}return r}function Fs(e,t,r){const i=r[t];return i?e<i.min?i.min>0?_o[t].under*(i.min-e)/i.min:0:e>i.max&&i.max>0?_o[t].over*(e-i.max)/i.max:0:0}function Li(e,t){let r=0;for(const i of Ne)r+=Fs(e[i],i,t);return r}function Fr(e,t){const r=e.targetCalories;return!r||r<=0?0:Math.abs(Xi(e,t).calories-r)/r}function Ns(e,t){let r=0;for(const i of e)r+=Fr(i,t);return r}function Ja(e,t,r,i){return e<r-yo?!0:e>r+yo?!1:t<i}const wo={calories:"calorías",proteinG:"proteína",carbsG:"carbohidratos",fatG:"grasas"};function Jd(e,t,r){const i=new Map(e.map(o=>[o.id,o])),a=On(t,i),n=[];for(const o of Ne){const s=r[o];s&&(a[o]<s.min?n.push({macro:o,label:wo[o],total:Math.round(a[o]),limit:s.min,direction:"corto"}):a[o]>s.max&&n.push({macro:o,label:wo[o],total:Math.round(a[o]),limit:s.max,direction:"pasado"}))}return{withinRange:n.length===0,totals:a,misses:n}}function eu(e){return e.withinRange?null:`El catálogo no da para cuadrar la semana entera: ${e.misses.map(r=>{const i=Math.round(r.total/7),a=Math.round(r.limit/7);return`${r.label} se queda ${r.direction==="corto"?"por debajo":"por encima"} (${i} frente a ${a} al día)`}).join("; ")}.`}function tu(e,t){var a;let r=null,i=0;for(const n of Ne){const o=Fs(e[n],n,t);o>i&&(i=o,r={key:n,short:e[n]<(((a=t[n])==null?void 0:a.min)??0)})}return r}function ru(e,t,r){if(!r)return Math.floor(Math.random()*e.length);const i=e.map((n,o)=>({index:o,value:Xi(n,t)[r.key]})).sort((n,o)=>r.short?n.value-o.value:o.value-n.value),a=i.slice(0,Math.min(jd,i.length));return a[Math.floor(Math.random()*a.length)].index}function iu(e,t,r,i,a=2e3){if(e.length===0||t.length===0)return;const n=new Map(e.map(m=>[m.id,m])),o=On(t,n);let s=Li(o,r),l=Ns(t,n),c=s,u=l,p=t.map(m=>m.recipeId);for(let m=0;m<a&&s>0;m++){const w=tu(o,r),h=ru(t,n,w),g=t[h],_=Xi(g,n),v=Fr(g,n),I=Os(e,g.mealType),$=g.servingsMultiplier||1,x=g.recipeId;let b=null,C=s,k=l;for(let T=0;T<Kd;T++){const K=Rs(I,g,i);if(K.id===x)continue;const S=zi(K);for(const U of Ne)S[U]*=$;const O={...o};for(const U of Ne)O[U]+=S[U]-_[U];g.recipeId=K.id;const M=l-v+Fr(g,n);g.recipeId=x;const A=Li(O,r);Ja(A,M,C,k)&&(C=A,k=M,b=K)}if(!b)continue;const E=zi(b);for(const T of Ne)E[T]*=$;for(const T of Ne)o[T]+=E[T]-_[T];g.recipeId=b.id,s=C,l=k,Ja(s,l,c,u)&&(c=s,u=l,p=t.map(T=>T.recipeId))}for(let m=0;m<t.length;m++)t[m].recipeId=p[m]}function au(e,t,r,i=6){if(t.length===0)return;const a=new Map(e.map(l=>[l.id,l])),n=On(t,a);let o=Li(n,r),s=Ns(t,a);for(let l=0;l<i;l++){let c=!1;for(const u of t){const p=a.get(u.recipeId);if(!p)continue;const m=zi(p),w=u.servingsMultiplier||1;for(const h of[bo,-bo]){const g=Math.round((w+h)*2)/2;if(g<Gd||g>Ud)continue;const _={...n};for(const x of Ne)_[x]+=m[x]*(g-w);const v=Fr(u,a);u.servingsMultiplier=g;const I=s-v+Fr(u,a);u.servingsMultiplier=w;const $=Li(_,r);if(Ja($,I,o,s)){for(const x of Ne)n[x]=_[x];u.servingsMultiplier=g,o=$,s=I,c=!0;break}}}if(!c)break}}const nu=100;function ou(e){return e.unit==="UNIDAD"?e.quantity*nu:e.quantity}function $a(e,t,r){const i=t&&t>0?t:1;let a=0,n=0,o=0,s=0,l=0,c=0,u=0,p=0,m=0,w=0,h=0,g=0,_=0,v=0,I=0,$=0,x=0,b=0,C=0,k=0,E=0,T=0,K=0;for(const O of e){const M=r.get(O.foodId);if(!M)continue;const A=ou(O)/100;a+=(M.calorias100g??0)*A,n+=(M.proteinas100g??0)*A,o+=(M.carbos100g??0)*A,s+=(M.grasas100g??0)*A,l+=(M.fibra100g??0)*A,c+=(M.sodioMg??0)*A,u+=(M.potasioMg??0)*A,p+=(M.calcioMg??0)*A,m+=(M.magnesioMg??0)*A,w+=(M.hierroMg??0)*A,h+=(M.zincMg??0)*A,g+=(M.fosforoMg??0)*A,_+=(M.vitaminaAIug??0)*A,v+=(M.vitaminaCMg??0)*A,I+=(M.vitaminaDIug??0)*A,$+=(M.vitaminaEMg??0)*A,x+=(M.vitaminaKIug??0)*A,b+=(M.vitaminaB6Mg??0)*A,C+=(M.vitaminaB12Iug??0)*A,k+=(M.tiaminaMg??0)*A,E+=(M.riboflavinaMg??0)*A,T+=(M.niacinaMg??0)*A,K+=(M.acidoFolicoIug??0)*A}const S=(O,M=0)=>{const A=O/i,U=10**M;return Math.round(A*U)/U};return{calorias:S(a),proteinas:S(n),carbos:S(o),grasas:S(s),fibra:S(l),sodioMg:S(c,1),potasioMg:S(u,1),calcioMg:S(p,1),magnesioMg:S(m,1),hierroMg:S(w,2),zincMg:S(h,2),fosforoMg:S(g,1),vitaminaAIug:S(_),vitaminaCMg:S(v,1),vitaminaDIug:S(I,1),vitaminaEMg:S($,1),vitaminaKIug:S(x,1),vitaminaB6Mg:S(b,2),vitaminaB12Iug:S(C,2),tiaminaMg:S(k,2),riboflavinaMg:S(E,2),niacinaMg:S(T,1),acidoFolicoIug:S(K)}}function zs(e,t=new Date){const r=new Date(t);r.setHours(0,0,0,0);const i=new Date(e);return i.setHours(0,0,0,0),Math.round((i.getTime()-r.getTime())/864e5)}function su(e,t){const r=new Map;for(const i of e){if(i.expired)continue;const a=(t+1-i.daysLeft)/(t+1),n=r.get(i.foodId);(!n||i.expiryDate<n.expiryDate)&&r.set(i.foodId,{urgency:a,expiryDate:i.expiryDate})}return r}function lu(e,t){const r=[...e].sort((o,s)=>o.expiryDate&&s.expiryDate?o.expiryDate.getTime()-s.expiryDate.getTime():o.expiryDate?-1:s.expiryDate?1:0),i=[];let a=t,n=0;for(const o of r){if(a<=0)break;if(o.quantity<=0)continue;const s=Math.min(o.quantity,a),l=Math.round((o.quantity-s)*10)/10;i.push({id:o.id,subtracted:s,remaining:l}),n+=s,a-=s}return{consumption:i,totalSubtracted:Math.round(n*10)/10}}const cu={VEGETARIANO:["CARNES","PESCADOS"],VEGANO:["CARNES","PESCADOS","LACTEOS","HUEVOS"],SIN_LACTOSA:["LACTEOS"],SIN_HUEVO:["HUEVOS"],SIN_FRUTOS_SECOS:["FRUTOS_SECOS"]},du={SIN_GLUTEN:["trigo","cebada","centeno","espelta","kamut","triticale","malta","cerveza","harina","pan","pasta","macarron","espagueti","fideo","noodle","cuscus","semola","bulgur","seitan","galleta","bizcocho","reposteria","empanad","pizza","tortita","crep","salsa de soja","avena"],SIN_LACTOSA:["leche","queso","yogur","nata","mantequilla","requeson","cuajada","kefir"],SIN_FRUTOS_SECOS:["almendra","nuez","avellana","pistacho","anacardo","cacahuete","pecana","macadamia","castana","pinon","marañon","turron","praline"],SIN_HUEVO:["huevo","clara","yema","mayonesa","merengue","tortilla"],VEGANO:["miel","gelatina","manteca"]};function Ls(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim()}function uu(e){return Ls(e).replace(/\s+/g,"_").toUpperCase()}function pu(e,t){const r=Ls(e.name),i=e.category?e.category.toUpperCase():null;for(const a of t){const n=uu(a),o=cu[n];if(o&&i&&o.includes(i))return!0;const s=du[n];if(s&&s.some(l=>r.includes(l)))return!0}return!1}function hu(e,t,r){if(t.length===0)return!0;for(const i of e.ingredients){const a=r.get(i.foodId);if(!a||pu(a,t))return!1}return!0}function mu(e,t,r){return t.length===0?e:e.filter(i=>hu(i,t,r))}function V(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function xo(){return f.members[0]}function yi(){if(!f.family)throw new Error("No hay una unidad familiar configurada");return f.family}function ii(){const e=yi();return{familyId:e.id,name:e.name,homeType:e.homeType,enabledModules:[...e.enabledModules],onboardingVersion:e.onboardingVersion,onboardingStep:e.onboardingStep,onboardingCompletedAt:e.onboardingCompletedAt}}function fu(e){if(!Number.isInteger(e)||e<0||e>$i)throw new Error("El paso de onboarding no es válido.");return e}function $o(e){const t=e.trim();if(!t)throw new Error("El nombre de la casa es obligatorio.");if(t.length>80)throw new Error("El nombre de la casa no puede superar 80 caracteres.");return t}function Bi(e,t){const r=Ds(t);return e.age=t.age,e.weightKg=t.weightKg,e.heightCm=t.heightCm,e.sex=t.sex,e.activityLevel=t.activityLevel,e.goal=t.goal,e.tmb=r.tmb,e.dailyCalories=r.dailyCalories,e.dailyProteinG=r.dailyProteinG,e.dailyCarbsG=r.dailyCarbsG,e.dailyFatG=r.dailyFatG,e.isStandardProfile=!1,e.weightDate=new Date,e.updatedAt=new Date,r}const je={getHomeSettings:async()=>(await P(),G(ii())),saveOnboardingProgress:async e=>{await P();const t=B(()=>{const r=yi();if(r.onboardingVersion=xi,r.onboardingStep=fu(e.onboardingStep),e.name!==void 0&&(r.name=$o(e.name)),e.homeType!==void 0){if(e.homeType!==null&&!Ta(e.homeType))throw new Error("El tipo de hogar no es válido.");r.homeType=e.homeType}return e.enabledModules!==void 0&&(r.enabledModules=sa(e.enabledModules)),G(ii())});return await ri(),t},completeHomeSetup:async e=>{await P();const t=B(()=>{if(!Ta(e.homeType))throw new Error("El tipo de hogar no es válido.");const r=yi();return r.name=$o(e.name),r.homeType=e.homeType,r.enabledModules=sa(e.enabledModules),r.onboardingVersion=xi,r.onboardingStep=$i,r.onboardingCompletedAt=new Date,G(ii())});return await ri(),t},updateEnabledModules:async e=>{await P();const t=B(()=>(yi().enabledModules=sa(e),G(ii())));return await ri(),t},onboarding:async e=>(await P(),B(()=>{const t=e.memberId?f.members.find(i=>i.id===e.memberId):xo();if(!t)throw new Error("Miembro no encontrado");const r=Bi(t,e);return t.restrictions=e.restrictions??[],f.weightHistory.push({id:V(),memberId:t.id,weightKg:e.weightKg,date:new Date}),G({message:"Perfil nutricional completado",member:t,requirements:r})})),skipOnboarding:async(e={})=>{await P();const t=B(()=>{var n;const r=(n=e.memberIds)!=null&&n.length?f.members.filter(o=>e.memberIds.includes(o.id)):f.members.filter(o=>o.dailyCalories==null);if(r.length===0)throw new Error("No hay miembros a los que aplicar el perfil estándar");const i=Pd(),a=new Date;for(const o of r)o.age=Xe.age,o.weightKg=Xe.weightKg,o.heightCm=Xe.heightCm,o.activityLevel=Xe.activityLevel,o.goal=Xe.goal,o.tmb=i.tmb,o.dailyCalories=i.dailyCalories,o.dailyProteinG=i.dailyProteinG,o.dailyCarbsG=i.dailyCarbsG,o.dailyFatG=i.dailyFatG,o.isStandardProfile=!0,o.updatedAt=a;return G({message:"Perfil estándar aplicado",members:r,requirements:i})});return await ri(),t},updateProfile:async e=>(await P(),B(()=>{const t=xo();if(!t)throw new Error("No hay miembros en la familia");return Object.assign(t,e),t.isStandardProfile=!1,e.weightKg&&(f.weightHistory.push({id:V(),memberId:t.id,weightKg:e.weightKg,date:new Date}),t.weightDate=new Date),(e.weightKg||e.heightCm||e.activityLevel||e.goal)&&t.age&&t.sex&&t.activityLevel&&t.goal&&Bi(t,t),t.updatedAt=new Date,G(t)}))},Ze={list:async()=>(await P(),f.members.map(e=>G(e))),create:async e=>(await P(),B(()=>{const t=new Date,r={id:V(),familyId:f.family.id,name:e.name,color:e.color||"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),age:e.age??null,weightKg:e.weightKg??null,weightDate:null,heightCm:e.heightCm??null,sex:e.sex??null,activityLevel:e.activityLevel??null,goal:e.goal??null,restrictions:[],tmb:null,dailyCalories:null,dailyProteinG:null,dailyCarbsG:null,dailyFatG:null,isStandardProfile:!1,createdAt:t,updatedAt:t};return e.age&&e.weightKg&&e.heightCm&&e.sex&&e.activityLevel&&e.goal&&Bi(r,e),f.members.push(r),G(r)})),update:async(e,t)=>(await P(),B(()=>{const r=f.members.find(a=>a.id===e);if(!r)throw new Error("Miembro no encontrado");return t.weightKg&&(f.weightHistory.push({id:V(),memberId:r.id,weightKg:t.weightKg,date:new Date}),t={...t,weightDate:new Date}),Object.assign(r,t),r.isStandardProfile=!1,(t.weightKg||t.heightCm||t.activityLevel||t.goal)&&r.age&&r.sex&&r.activityLevel&&r.goal&&Bi(r,r),r.updatedAt=new Date,G(r)})),remove:async e=>(await P(),B(()=>{if(f.members.length<=1)throw new Error("No puedes eliminar el único miembro");const t=f.members.findIndex(r=>r.id===e);if(t===-1)throw new Error("Miembro no encontrado");return f.members.splice(t,1),{message:"Miembro eliminado"}}))};function Io(){const e=Le(),t=f.foods.map(r=>G(r));return[...e.foodsList,...t].sort((r,i)=>r.name.localeCompare(i.name))}function cr(e){const r=Le().foodsById.get(e);if(r)return r;const i=f.foods.find(a=>a.id===e);return i?G(i):null}function Bs(e){const t=e.ingredients.map(r=>({id:r.id,recipeId:r.recipeId,foodId:r.foodId,quantity:r.quantity,unit:r.unit,food:cr(r.foodId)}));return G({...e,ingredients:t})}function Rn(){const e=Le();return[...f.recipes.map(Bs),...e.recipesList].sort((r,i)=>new Date(i.createdAt).getTime()-new Date(r.createdAt).getTime())}function Je(e){const r=Le().recipesById.get(e);if(r)return r;const i=f.recipes.find(a=>a.id===e);return i?Bs(i):null}function gu(e){if(!e)return null;const t=f.members.find(r=>r.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function en(e){return G({...e,recipe:e.recipeId?Je(e.recipeId):null,member:gu(e.assignedToMemberId)})}const Ki=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"];function vu(e,t){return f.meals.filter(r=>r.planId===e&&(!t||r.assignedToMemberId===t)).sort((r,i)=>r.dayOfWeek-i.dayOfWeek||Ki.indexOf(r.mealType)-Ki.indexOf(i.mealType))}function bi(e,t){return G({...e,meals:vu(e.id,t).map(en)})}function yu(e){return G({...e,recipe:Je(e.recipeId)})}function bu(){const e=Le();return[...f.templates.map(r=>G(r)),...e.templates].sort((r,i)=>r.isSystem===i.isSystem?0:r.isSystem?1:-1)}function Ks(e){const t=f.templates.find(r=>r.id===e);return t||Le().templates.find(r=>r.id===e)}function ko(e){const t=Ks(e);return t?G({...t,meals:[...t.meals].sort((r,i)=>r.dayOfWeek-i.dayOfWeek||Ki.indexOf(r.mealType)-Ki.indexOf(i.mealType)).map(yu)}):null}function _u(e){return Ks(e)}function wu(e){const t=Le(),r=f.householdItems.map(a=>G(a));let i=[...t.householdItems,...r];if(e){const a=e.toLowerCase();i=i.filter(n=>n.name.toLowerCase().includes(a))}return i.sort((a,n)=>a.name.localeCompare(n.name))}function js(e){const r=Le().householdItems.find(a=>a.id===e);if(r)return r;const i=f.householdItems.find(a=>a.id===e);return i?G(i):null}const ji={list:async()=>(await P(),Io()),search:async e=>{await P();const t=e.trim().toLowerCase();return t?Io().filter(r=>r.name.toLowerCase().includes(t)).slice(0,20):[]},create:async e=>(await P(),B(()=>{const t={id:V(),name:e.name,category:e.category??null,calorias100g:e.calorias100g??null,proteinas100g:e.proteinas100g??null,carbos100g:e.carbos100g??null,grasas100g:e.grasas100g??null,fibra100g:e.fibra100g??null,sodioMg:e.sodioMg??null,potasioMg:e.potasioMg??null,calcioMg:e.calcioMg??null,magnesioMg:e.magnesioMg??null,hierroMg:e.hierroMg??null,zincMg:e.zincMg??null,fosforoMg:e.fosforoMg??null,vitaminaAIug:e.vitaminaAIug??null,vitaminaCMg:e.vitaminaCMg??null,vitaminaDIug:e.vitaminaDIug??null,vitaminaEMg:e.vitaminaEMg??null,vitaminaKIug:e.vitaminaKIug??null,vitaminaB6Mg:e.vitaminaB6Mg??null,vitaminaB12Iug:e.vitaminaB12Iug??null,tiaminaMg:e.tiaminaMg??null,riboflavinaMg:e.riboflavinaMg??null,niacinaMg:e.niacinaMg??null,acidoFolicoIug:e.acidoFolicoIug??null,unidadBase:e.unidadBase??"g",familyId:f.family.id,source:null,sourceId:null,lastRefreshedAt:null,createdAt:new Date};return f.foods.push(t),G(t)}))};function hr(e){return G({...e,food:cr(e.foodId)})}function mr(e){if(e!==void 0)return e?new Date(e):null}const Qe={list:async()=>(await P(),[...f.pantryItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(hr)),expiring:async e=>{await P();const t=e&&e>0?e:st.expiringSoonDays,r=new Date;r.setHours(23,59,59,999),r.setDate(r.getDate()+t);const i=f.pantryItems.filter(a=>a.quantity>0&&a.expiryDate!==null&&a.expiryDate<=r).sort((a,n)=>a.expiryDate.getTime()-n.expiryDate.getTime()).map(a=>{const n=a.expiryDate,o=zs(n),s=cr(a.foodId);return G({id:a.id,foodId:a.foodId,foodName:(s==null?void 0:s.name)??"?",quantity:a.quantity,unit:a.unit,expiryDate:n,daysLeft:o,expired:o<0})});return{days:t,items:i}},add:async e=>(await P(),B(()=>{const t=new Date,r={id:V(),familyId:f.family.id,addedByUserId:null,foodId:e.foodId,quantity:e.quantity,unit:e.unit??"g",expiryDate:mr(e.expiryDate)??null,purchaseDate:mr(e.purchaseDate)??null,notes:e.notes??null,createdAt:t,updatedAt:t};return f.pantryItems.push(r),hr(r)})),update:async(e,t)=>(await P(),B(()=>{const r=f.pantryItems.find(i=>i.id===e);if(!r)throw new Error("Item no encontrado");return t.quantity!==void 0&&(r.quantity=t.quantity),t.unit!==void 0&&(r.unit=t.unit),t.expiryDate!==void 0&&(r.expiryDate=mr(t.expiryDate)??null),t.purchaseDate!==void 0&&(r.purchaseDate=mr(t.purchaseDate)??null),t.notes!==void 0&&(r.notes=t.notes),r.updatedAt=new Date,hr(r)})),split:async(e,t)=>(await P(),B(()=>{const r=f.pantryItems.find(n=>n.id===e);if(!r)throw new Error("Item no encontrado");if(t.quantity>=r.quantity)throw new Error(`La cantidad a separar debe ser menor que la del lote (${r.quantity} ${r.unit})`);const i=new Date;r.quantity=Math.round((r.quantity-t.quantity)*10)/10,r.updatedAt=i;const a={id:V(),familyId:r.familyId,addedByUserId:r.addedByUserId,foodId:r.foodId,quantity:t.quantity,unit:r.unit,expiryDate:mr(t.expiryDate)??null,purchaseDate:r.purchaseDate,notes:r.notes,createdAt:i,updatedAt:i};return f.pantryItems.push(a),{original:hr(r),created:hr(a)}})),remove:async e=>(await P(),B(()=>{const t=f.pantryItems.findIndex(r=>r.id===e);if(t===-1)throw new Error("Item no encontrado");return f.pantryItems.splice(t,1),{message:"Item eliminado"}}))};function Ia(e){const t=new Map;for(const r of e){const i=cr(r.foodId);i&&t.set(r.foodId,i)}return t}function ka(e,t){var r;if(!e)throw new Error("Receta no encontrada");if(!e.familyId||e.familyId!==((r=f.family)==null?void 0:r.id))throw new Error(`No puedes ${t} una receta del sistema`)}const Wt={list:async e=>{var a,n;await P();let t=Rn();const r=(a=e==null?void 0:e.search)==null?void 0:a.toLowerCase();r&&(t=t.filter(o=>o.name.toLowerCase().includes(r)));const i=(n=e==null?void 0:e.ingredient)==null?void 0:n.toLowerCase();if(i&&(t=t.filter(o=>o.ingredients.some(s=>{var l;return(l=s.food)==null?void 0:l.name.toLowerCase().includes(i)}))),e!=null&&e.maxTime){const o=parseInt(e.maxTime,10);t=t.filter(s=>s.timeMinutes!=null&&s.timeMinutes<=o)}if(e!=null&&e.mealType&&(t=t.filter(o=>o.mealType.includes(e.mealType))),e!=null&&e.minCalories){const o=parseInt(e.minCalories,10);t=t.filter(s=>s.calorias==null||s.calorias>=o)}if(e!=null&&e.maxCalories){const o=parseInt(e.maxCalories,10);t=t.filter(s=>s.calorias==null||s.calorias<=o)}return t},get:async e=>{await P();const t=Je(e);if(!t)throw new Error("Receta no encontrada");return t},create:async e=>(await P(),B(()=>{const t=new Date,r=V(),i=e.servings??1,a=Ia(e.ingredients),n=e.ingredients.map(l=>({foodId:l.foodId,quantity:l.quantity,unit:l.unit})),o=$a(n,i,a),s={id:r,familyId:f.family.id,name:e.name,description:e.description??null,instructions:e.instructions??null,mealType:e.mealType??[],timeMinutes:e.timeMinutes??null,difficulty:e.difficulty??null,imageUrl:e.imageUrl??null,servings:i,...o,isPublic:e.isPublic??!1,createdAt:t,updatedAt:t,ingredients:e.ingredients.map(l=>({id:`${r}:${l.foodId}`,recipeId:r,foodId:l.foodId,quantity:l.quantity,unit:l.unit}))};return f.recipes.push(s),Je(r)})),update:async(e,t)=>(await P(),B(()=>{const r=f.recipes.find(i=>i.id===e);if(ka(r,"editar"),Object.assign(r,{name:t.name??r.name,description:t.description??r.description,instructions:t.instructions??r.instructions,mealType:t.mealType??r.mealType,timeMinutes:t.timeMinutes??r.timeMinutes,difficulty:t.difficulty??r.difficulty,imageUrl:t.imageUrl??r.imageUrl,servings:t.servings??r.servings}),t.ingredients){const i=Ia(t.ingredients),a=t.ingredients.map(o=>({foodId:o.foodId,quantity:o.quantity,unit:o.unit})),n=$a(a,r.servings,i);Object.assign(r,n),r.ingredients=t.ingredients.map(o=>({id:`${r.id}:${o.foodId}`,recipeId:r.id,foodId:o.foodId,quantity:o.quantity,unit:o.unit}))}return r.updatedAt=new Date,Je(e)})),remove:async e=>(await P(),B(()=>{const t=f.recipes.find(i=>i.id===e);ka(t,"eliminar");const r=f.recipes.indexOf(t);return f.recipes.splice(r,1),{message:"Receta eliminada"}})),recalculateNutrition:async e=>(await P(),B(()=>{const t=f.recipes.find(a=>a.id===e);ka(t,"recalcular");const r=Ia(t.ingredients),i=$a(t.ingredients,t.servings,r);return Object.assign(t,i),t.updatedAt=new Date,Je(e)}))};function Qt(e){return f.mealPlans.find(t=>t.familyId===f.family.id&&t.weekKey===e)}function ai(e){const t=xe(e);let r=Qt(t);if(!r){const i=new Date;r={id:V(),familyId:f.family.id,weekStart:e,weekKey:t,autoGenerated:!1,createdAt:i,updatedAt:i},f.mealPlans.push(r)}return r}function xu(){const e=f.family.id;return Rn().filter(t=>(t.isPublic&&t.familyId===null||t.familyId===e)&&t.calorias>=st.minKcalPorRacion&&t.calorias<=st.maxKcalPorRacion)}function $u(e){const t=new Date;return t.setHours(23,59,59,999),t.setDate(t.getDate()+e),f.pantryItems.filter(r=>r.quantity>0&&r.expiryDate!==null&&r.expiryDate<=t).map(r=>{var n;const i=r.expiryDate,a=zs(i);return{id:r.id,foodId:r.foodId,foodName:((n=cr(r.foodId))==null?void 0:n.name)??"?",quantity:r.quantity,unit:r.unit,expiryDate:i,daysLeft:a,expired:a<0}})}function Iu(e,t){if(!e.dailyCalories)return null;const r={tmb:e.tmb??0,dailyCalories:e.dailyCalories,dailyProteinG:e.dailyProteinG??0,dailyCarbsG:e.dailyCarbsG??0,dailyFatG:e.dailyFatG??0},i=Ts(r),a=Ps(r,e.weightKg),n=Qt(xe(t)),o={calories:0,proteinG:0,carbsG:0,fatG:0};if(n){const l=f.meals.filter(c=>c.planId===n.id&&c.assignedToMemberId===e.id&&!c.isFasting&&!c.isEatingOut);for(const c of l){const u=c.recipeId?Je(c.recipeId):null;if(u){const p=c.servingsMultiplier??1;o.calories+=(u.calorias??0)*p,o.proteinG+=(u.proteinas??0)*p,o.carbsG+=(u.carbos??0)*p,o.fatG+=(u.grasas??0)*p}}}const s=o.calories>=a.calories.min&&o.calories<=a.calories.max&&o.proteinG>=a.proteinG.min&&o.proteinG<=a.proteinG.max&&o.carbsG>=a.carbsG.min&&o.carbsG<=a.carbsG.max&&o.fatG>=a.fatG.min&&o.fatG<=a.fatG.max;return{memberId:e.id,memberName:e.name,current:o,target:i,range:a,withinRange:s}}const De={current:async e=>{await P();const t=we(),r=ai(t);return B(()=>bi(r,e))},generate:async(e,t=!0)=>(await P(),B(()=>{const r=we(),i=e?f.members.filter(v=>v.id===e):f.members;if(i.length===0)throw new Error("No hay miembros en la unidad familiar");let a=i[0];if(e||(a=i.find(v=>v.dailyCalories)??i[0]),!a.dailyCalories)throw new Error(`El miembro "${a.name}" no tiene perfil nutricional completo. Completa su perfil en la sección Perfil.`);const n={tmb:a.tmb??0,dailyCalories:a.dailyCalories,dailyProteinG:a.dailyProteinG??0,dailyCarbsG:a.dailyCarbsG??0,dailyFatG:a.dailyFatG??0},o=Ps(n,a.weightKg),s=xu(),l=a.restrictions??[],c=new Map(f.foods.map(v=>[v.id,{id:v.id,name:v.name,category:v.category}])),u=l.length>0?mu(s,l,c):s;if(u.length<st.minRecipesForPlan){const v=l.length>0&&s.length>=st.minRecipesForPlan?` Las restricciones de "${a.name}" (${l.join(", ")}) dejan fuera ${s.length-u.length} de ${s.length}.`:"";throw new Error(`Se necesitan al menos ${st.minRecipesForPlan} recetas. Hay ${u.length}.${v}`)}let p;if(t){const v=$u(st.expiringSoonDays);p={urgencyMap:su(v,st.expiringSoonDays),weekStart:r}}const m=qd(n.dailyCalories),w=u;Zd(w,m,p),iu(w,m,o,p),au(w,m,o);const h=Jd(w,m,o),g=ai(r);g.autoGenerated=!0,g.updatedAt=new Date;const _=e??a.id;f.meals=f.meals.filter(v=>!(v.planId===g.id&&v.assignedToMemberId===_));for(const v of m)f.meals.push({id:V(),planId:g.id,dayOfWeek:v.dayOfWeek,mealType:v.mealType,recipeId:v.recipeId,assignedToMemberId:_,completed:!1,servingsMultiplier:v.servingsMultiplier,isEatingOut:!1,isFasting:!1,notes:null,order:0});return{...bi(g),fit:{...h,message:eu(h)}}})),remove:async()=>(await P(),B(()=>{const e=we(),t=Qt(xe(e));if(!t)throw new Error("No hay plan para esta semana");return f.meals=f.meals.filter(r=>r.planId!==t.id),f.mealPlans=f.mealPlans.filter(r=>r.id!==t.id),{message:"Plan semanal eliminado"}})),assignSlot:async e=>(await P(),B(()=>{const t=we(),r=e.planId?f.mealPlans.find(l=>l.id===e.planId&&l.familyId===f.family.id):ai(t);if(!r)throw new Error("Plan no encontrado");const i=e.servingsMultiplier??1,a=e.isEatingOut??!1,n=e.isFasting??!1,o=f.meals.find(l=>l.planId===r.id&&l.dayOfWeek===e.dayOfWeek&&l.mealType===e.mealType&&(!e.assignedToMemberId||l.assignedToMemberId===e.assignedToMemberId));if(o)return o.recipeId=e.recipeId,o.completed=!1,o.servingsMultiplier=i,o.assignedToMemberId=e.assignedToMemberId??o.assignedToMemberId,o.isEatingOut=a,o.isFasting=n,en(o);const s={id:V(),planId:r.id,dayOfWeek:e.dayOfWeek,mealType:e.mealType,recipeId:e.recipeId,servingsMultiplier:i,assignedToMemberId:e.assignedToMemberId??null,isEatingOut:a,isFasting:n,completed:!1,notes:null,order:0};return f.meals.push(s),en(s)})),removeSlot:async(e,t,r)=>(await P(),B(()=>{const i=we(),a=Qt(xe(i));if(!a)throw new Error("No hay plan para esta semana");const n=f.meals.filter(s=>s.planId===a.id&&s.dayOfWeek===e&&s.mealType===t&&(!r||s.assignedToMemberId===r));if(n.length===0)throw new Error("No hay comida en esa posición");const o=new Set(n.map(s=>s.id));return f.meals=f.meals.filter(s=>!o.has(s.id)),{message:"Comida(s) eliminada(s) del plan"}})),suggestions:async(e=5)=>(await P(),[...Rn().filter(i=>i.isPublic&&i.familyId===null).slice(0,50)].sort(()=>Math.random()-.5).slice(0,e)),progress:async e=>{await P();const t=we(),r=e?f.members.filter(n=>n.id===e):f.members;if(r.length===0)return{withinRange:!0,current:null,target:null,message:"Sin familia"};if(!Qt(xe(t)))return{withinRange:!0,current:null,target:null,message:"Sin plan aún"};const a=r.map(n=>Iu(n,t)).filter(n=>n!==null);return e?G(a[0]??{withinRange:!0,current:null,target:null,message:"Sin plan aún"}):a.length===0?{withinRange:!0,current:null,target:null,message:"Sin plan aún"}:G(a)},cook:async e=>(await P(),B(()=>{var n,o;const t=f.meals.find(s=>s.id===e&&f.mealPlans.some(l=>l.id===s.planId&&l.familyId===f.family.id));if(!t)throw new Error("Comida no encontrada");if(!t.recipeId)throw new Error("Esta comida no tiene receta asignada");const r=Je(t.recipeId);if(!r)throw new Error("Esta comida no tiene receta asignada");if(t.completed)return{alreadyCooked:!0,summary:[]};const i=new Map;for(const s of f.pantryItems){const l=i.get(s.foodId);l?l.push(s):i.set(s.foodId,[s])}const a=[];for(const s of r.ingredients){const l=(i.get(s.foodId)??[]).filter(h=>h.unit===s.unit),c=l.reduce((h,g)=>h+g.quantity,0);if(l.length===0){a.push({name:((n=s.food)==null?void 0:n.name)??"?",subtracted:0,remaining:0,unit:s.unit});continue}const u=r.servings&&r.servings>0?r.servings:1,p=s.quantity/u*t.servingsMultiplier,{consumption:m,totalSubtracted:w}=lu(l.map(h=>({id:h.id,quantity:h.quantity,expiryDate:h.expiryDate})),p);for(const h of m){const g=f.pantryItems.find(_=>_.id===h.id);g.quantity=h.remaining,g.updatedAt=new Date}a.push({name:((o=s.food)==null?void 0:o.name)??"?",subtracted:w,remaining:Math.round((c-w)*10)/10,unit:l[0].unit})}return t.completed=!0,{alreadyCooked:!1,summary:a}})),history:async e=>{await P();const t=e??8,r=we(),i=xe(r);return f.mealPlans.filter(n=>n.familyId===f.family.id&&n.weekKey<i&&f.meals.some(o=>o.planId===n.id)).sort((n,o)=>n.weekKey<o.weekKey?1:-1).slice(0,t).map(n=>G({id:n.id,weekStart:n.weekStart,autoGenerated:n.autoGenerated,mealCount:f.meals.filter(o=>o.planId===n.id).length}))},repeat:async e=>(await P(),B(()=>{const t=we(),r=xe(t),i=e!=null&&e.sourcePlanId?f.mealPlans.find(s=>s.id===e.sourcePlanId&&s.familyId===f.family.id):Qt(xe(Md(t,-7)));if(!i)throw new Error("No hay un plan anterior para repetir");const a=f.meals.filter(s=>s.planId===i.id);if(a.length===0)throw new Error("No hay un plan anterior para repetir");if(i.weekKey===r)throw new Error("No puedes repetir la semana actual sobre sí misma");const n=e!=null&&e.assignedToMemberId?a.filter(s=>s.assignedToMemberId===e.assignedToMemberId):a;if(n.length===0)throw new Error("El plan de origen no tiene comidas para ese miembro");const o=ai(t);o.autoGenerated=!1,o.updatedAt=new Date,e!=null&&e.assignedToMemberId?f.meals=f.meals.filter(s=>!(s.planId===o.id&&s.assignedToMemberId===e.assignedToMemberId)):f.meals=f.meals.filter(s=>s.planId!==o.id);for(const s of n)f.meals.push({id:V(),planId:o.id,dayOfWeek:s.dayOfWeek,mealType:s.mealType,recipeId:s.recipeId,servingsMultiplier:s.servingsMultiplier,order:s.order,isEatingOut:s.isEatingOut,isFasting:s.isFasting,notes:s.notes,completed:!1,assignedToMemberId:(e==null?void 0:e.assignedToMemberId)??s.assignedToMemberId});return bi(o)}))};function Eo(e){return f.mealPlans.find(t=>t.familyId===f.family.id&&t.weekKey===e)}const fr={list:async()=>(await P(),bu()),get:async e=>{await P();const t=ko(e);if(!t)throw new Error("Plantilla no encontrada");return t},create:async e=>(await P(),B(()=>{const t=we(),r=Eo(xe(t)),i=r?f.meals.filter(s=>s.planId===r.id):[];if(!r||i.length===0)throw new Error("No hay plan semanal para guardar como plantilla");const a=new Date,n=V(),o={id:n,familyId:f.family.id,name:e.name,description:e.description??null,goal:null,isSystem:!1,createdAt:a,updatedAt:a,meals:i.filter(s=>s.recipeId).map(s=>({id:V(),templateId:n,dayOfWeek:s.dayOfWeek,mealType:s.mealType,recipeId:s.recipeId,servingsMultiplier:s.servingsMultiplier??1,order:s.order}))};return f.templates.push(o),ko(n)})),remove:async e=>(await P(),B(()=>{if(!f.templates.find(r=>r.id===e&&r.familyId===f.family.id))throw new Error("Plantilla no encontrada");return f.templates=f.templates.filter(r=>r.id!==e),{message:"Plantilla eliminada"}})),apply:async(e,t)=>(await P(),B(()=>{const r=_u(e);if(!r)throw new Error("Plantilla no encontrada");const i=we(),a=xe(i),n=Eo(a);n&&(f.meals=f.meals.filter(c=>c.planId!==n.id),f.mealPlans=f.mealPlans.filter(c=>c.id!==n.id));const o=(t==null?void 0:t.assignedToMemberId)||null,s=new Date,l={id:V(),familyId:f.family.id,weekStart:i,weekKey:a,autoGenerated:!1,createdAt:s,updatedAt:s};f.mealPlans.push(l);for(const c of r.meals)f.meals.push({id:V(),planId:l.id,dayOfWeek:c.dayOfWeek,mealType:c.mealType,recipeId:c.recipeId,servingsMultiplier:c.servingsMultiplier,order:c.order,assignedToMemberId:o,completed:!1,isEatingOut:!1,isFasting:!1,notes:null});return bi(l)}))};function Ea(e){return f.shoppingLists.find(t=>t.familyId===f.family.id&&t.weekKey===e)}function Gs(e){const t=xe(e),r=f.mealPlans.find(a=>a.familyId===f.family.id&&a.weekKey===t);if(!r)return new Map;const i=f.meals.filter(a=>a.planId===r.id&&!a.isFasting&&!a.isEatingOut&&!a.completed).map(a=>{const n=a.recipeId?Je(a.recipeId):null;return{servingsMultiplier:a.servingsMultiplier,recipe:n?{servings:n.servings,ingredients:n.ingredients.map(o=>{var s;return{foodId:o.foodId,foodName:((s=o.food)==null?void 0:s.name)??"?",quantity:o.quantity,unit:o.unit}})}:null}});return Ad(i)}function Us(){const e=new Map;for(const t of f.pantryItems){const r=`${t.foodId}|${t.unit}`;e.set(r,(e.get(r)??0)+t.quantity)}return e}function qs(e){return G({...e,food:cr(e.foodId)})}function tn(e){return G({...e,householdItem:e.householdItemId?js(e.householdItemId):null})}function Hs(e){const t=f.shoppingSectionItems.filter(r=>r.sectionId===e.id).sort((r,i)=>r.sortOrder-i.sortOrder).map(tn);return G({...e,items:t})}function Vs(e){const t=f.shoppingItems.filter(i=>i.listId===e.id).map(qs),r=f.shoppingSections.filter(i=>i.listId===e.id).sort((i,a)=>i.sortOrder-a.sortOrder).map(Hs);return G({...e,items:t,sections:r})}function ku(e){const t=Gs(e.weekStart),r=Us(),i=f.shoppingItems.filter(o=>o.listId===e.id),a=new Map(i.map(o=>[o.foodId,o]));for(const[o,s]of t){const l=Ss(r,o,s.unit),c=Math.max(0,s.total-l),u=l>=s.total,p=a.get(o),m=((p==null?void 0:p.purchased)??!1)||u;p?(p.totalNeeded=s.total,p.inPantry=l,p.toBuy=c,p.purchased=m,p.unit=s.unit):f.shoppingItems.push({id:V(),listId:e.id,foodId:o,totalNeeded:s.total,inPantry:l,toBuy:c,unit:s.unit,purchased:m})}const n=new Set(t.keys());return f.shoppingItems=f.shoppingItems.filter(o=>o.listId!==e.id||n.has(o.foodId)),Vs(e)}const Ke={current:async()=>(await P(),B(()=>{const e=we(),t=Ea(xe(e));return t?ku(t):{items:[],sections:[],message:"Aún no se ha generado la lista"}})),generate:async()=>(await P(),B(()=>{const e=we(),t=xe(e),r=Gs(e),i=f.mealPlans.find(s=>s.familyId===f.family.id&&s.weekKey===t);if(r.size===0&&!i)throw new Error("No hay plan semanal para esta semana");const a=Ea(t);a&&(f.shoppingSectionItems=f.shoppingSectionItems.filter(s=>!f.shoppingSections.some(l=>l.id===s.sectionId&&l.listId===a.id)),f.shoppingSections=f.shoppingSections.filter(s=>s.listId!==a.id),f.shoppingItems=f.shoppingItems.filter(s=>s.listId!==a.id),f.shoppingLists=f.shoppingLists.filter(s=>s.id!==a.id));const n=Us(),o={id:V(),familyId:f.family.id,weekStart:e,weekKey:t,createdAt:new Date};f.shoppingLists.push(o);for(const s of r.values()){const l=Ss(n,s.foodId,s.unit),c=Math.max(0,s.total-l);f.shoppingItems.push({id:V(),listId:o.id,foodId:s.foodId,totalNeeded:s.total,inPantry:l,toBuy:c,unit:s.unit,purchased:l>=s.total})}return Vs(o)})),toggleItem:async e=>(await P(),B(()=>{const t=f.shoppingItems.find(r=>r.id===e&&f.shoppingLists.some(i=>i.id===r.listId&&i.familyId===f.family.id));if(!t)throw new Error("Item no encontrado");return t.purchased=!t.purchased,qs(t)})),createSection:async e=>(await P(),B(()=>{const t=we(),r=xe(t);let i=Ea(r);i||(i={id:V(),familyId:f.family.id,weekStart:t,weekKey:r,createdAt:new Date},f.shoppingLists.push(i));const a=Math.max(-1,...f.shoppingSections.filter(o=>o.listId===i.id).map(o=>o.sortOrder)),n={id:V(),listId:i.id,name:e,sortOrder:a+1,createdAt:new Date};return f.shoppingSections.push(n),Hs(n)})),addSectionItem:async(e,t)=>(await P(),B(()=>{const r=f.shoppingSections.find(n=>n.id===e&&f.shoppingLists.some(o=>o.id===n.listId&&o.familyId===f.family.id));if(!r)throw new Error("Sección no encontrada");const i=Math.max(-1,...f.shoppingSectionItems.filter(n=>n.sectionId===r.id).map(n=>n.sortOrder)),a={id:V(),sectionId:r.id,name:t.name,quantity:t.quantity??1,purchased:!1,sortOrder:i+1,householdItemId:t.householdItemId??null};return f.shoppingSectionItems.push(a),tn(a)})),toggleSectionItem:async(e,t)=>(await P(),B(()=>{const r=f.shoppingSectionItems.find(a=>a.id===e&&f.shoppingSections.some(n=>n.id===a.sectionId&&f.shoppingLists.some(o=>o.id===n.listId&&o.familyId===f.family.id)));if(!r)throw new Error("Artículo no encontrado");const i=r.purchased;if(r.purchased=t,t&&!i&&r.householdItemId){const a=f.family.id,n=f.householdStockItems.find(o=>o.familyId===a&&o.householdItemId===r.householdItemId);if(n)n.quantity+=r.quantity,n.updatedAt=new Date;else{const o=new Date;f.householdStockItems.push({id:V(),familyId:a,householdItemId:r.householdItemId,quantity:r.quantity,unit:"UNIDAD",minThreshold:null,notes:null,createdAt:o,updatedAt:o})}}return tn(r)})),removeSectionItem:async e=>(await P(),B(()=>{const t=f.shoppingSectionItems.findIndex(r=>r.id===e&&f.shoppingSections.some(i=>i.id===r.sectionId&&f.shoppingLists.some(a=>a.id===i.listId&&a.familyId===f.family.id)));if(t===-1)throw new Error("Artículo no encontrado");return f.shoppingSectionItems.splice(t,1),{message:"Artículo eliminado"}}))};function ni(e){return G({...e,householdItem:js(e.householdItemId)})}const at={items:async e=>(await P(),wu(e)),createItem:async e=>(await P(),B(()=>{const t={id:V(),name:e.name,category:e.category??null,unit:e.unit??"UNIDAD",familyId:f.family.id,createdAt:new Date};return f.householdItems.push(t),G(t)})),stock:async()=>(await P(),[...f.householdStockItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(ni)),addStock:async e=>(await P(),B(()=>{const t=f.family.id,r=f.householdStockItems.find(n=>n.familyId===t&&n.householdItemId===e.householdItemId);if(r)return r.quantity+=e.quantity,r.unit=e.unit??r.unit,r.minThreshold=e.minThreshold??r.minThreshold,r.notes=e.notes??r.notes,r.updatedAt=new Date,ni(r);const i=new Date,a={id:V(),familyId:t,householdItemId:e.householdItemId,quantity:e.quantity,unit:e.unit??"UNIDAD",minThreshold:e.minThreshold??null,notes:e.notes??null,createdAt:i,updatedAt:i};return f.householdStockItems.push(a),ni(a)})),updateStock:async(e,t)=>(await P(),B(()=>{const r=f.householdStockItems.find(i=>i.id===e&&i.familyId===f.family.id);if(!r)throw new Error("Artículo no encontrado");return t.quantity!==void 0&&(r.quantity=t.quantity),t.unit!==void 0&&(r.unit=t.unit),t.minThreshold!==void 0&&(r.minThreshold=t.minThreshold),t.notes!==void 0&&(r.notes=t.notes),r.updatedAt=new Date,ni(r)})),removeStock:async e=>(await P(),B(()=>{const t=f.householdStockItems.findIndex(r=>r.id===e&&r.familyId===f.family.id);if(t===-1)throw new Error("Artículo no encontrado");return f.householdStockItems.splice(t,1),{message:"Artículo eliminado"}}))};function rn(e){return e==="DIARIA"?Es(new Date):we()}function Eu(e){if(!e)return null;const t=f.members.find(r=>r.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function oi(e){const t=rn(e.frequency),i=f.choreCompletions.filter(a=>a.choreId===e.id&&a.date>=t).length>0;return G({...e,member:Eu(e.assignedToMemberId),completedInPeriod:i})}const $t={list:async()=>(await P(),f.chores.filter(e=>e.familyId===f.family.id&&e.active).sort((e,t)=>e.createdAt.getTime()-t.createdAt.getTime()).map(oi)),create:async e=>(await P(),B(()=>{const t={id:V(),familyId:f.family.id,name:e.name,frequency:e.frequency,assignedToMemberId:e.assignedToMemberId??null,active:!0,createdAt:new Date};return f.chores.push(t),oi(t)})),update:async(e,t)=>(await P(),B(()=>{const r=f.chores.find(i=>i.id===e&&i.familyId===f.family.id);if(!r)throw new Error("Tarea no encontrada");return Object.assign(r,t),oi(r)})),remove:async e=>(await P(),B(()=>{const t=f.chores.findIndex(r=>r.id===e&&r.familyId===f.family.id);if(t===-1)throw new Error("Tarea no encontrada");return f.chores.splice(t,1),{message:"Tarea eliminada"}})),complete:async(e,t)=>(await P(),B(()=>{const r=f.chores.find(n=>n.id===e&&n.familyId===f.family.id);if(!r)throw new Error("Tarea no encontrada");if(t&&!f.members.some(n=>n.id===t))throw new Error("Miembro no encontrado");const i=rn(r.frequency);return f.choreCompletions.find(n=>n.choreId===r.id&&n.date>=i)?{completedInPeriod:!0}:(f.choreCompletions.push({id:V(),choreId:r.id,date:new Date,completedByMemberId:t??null}),{completedInPeriod:!0})})),uncomplete:async e=>(await P(),B(()=>{const t=f.chores.find(i=>i.id===e&&i.familyId===f.family.id);if(!t)throw new Error("Tarea no encontrada");const r=rn(t.frequency);return f.choreCompletions=f.choreCompletions.filter(i=>!(i.choreId===t.id&&i.date>=r)),{completedInPeriod:!1}})),templates:async()=>(await P(),vo.map(e=>({id:e.id,name:e.name,description:e.description,choreCount:e.chores.length}))),applyTemplate:async e=>(await P(),B(()=>{const t=vo.find(s=>s.id===e);if(!t)throw new Error("Plantilla no encontrada");const r=f.family.id,i=new Set(f.chores.filter(s=>s.familyId===r&&s.active).map(s=>wa(s.name))),a=t.chores.filter(s=>!i.has(wa(s.name))),n=t.chores.filter(s=>i.has(wa(s.name))).map(s=>s.name);return{created:a.map(s=>{const l={id:V(),familyId:r,name:s.name,frequency:s.frequency,assignedToMemberId:null,active:!0,createdAt:new Date};return f.chores.push(l),oi(l)}),skipped:n}}))};function So(){return!0}async function Su(){return await P(),JSON.stringify(Tl(f),null,2)}async function Cu(e){await P();const t=Pl(JSON.parse(e)),{store:r,report:i,catalogVersionMismatch:a}=Rl(t);return await kd(r),{report:i,catalogVersionMismatch:a}}async function Mu(){await P(),await Ed()}var Au=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,Fn=(e,t,r,i)=>{for(var a=i>1?void 0:i?Du(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Au(t,r,a),a};let Nr=class extends Q{constructor(){super(...arguments),this.variant="wordmark",this.showTagline=!1}_xCircle(){return d`
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
    `}};Nr.styles=[Pe,H`
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
    `];Fn([Y({reflect:!0})],Nr.prototype,"variant",2);Fn([Y({type:Boolean,attribute:"show-tagline"})],Nr.prototype,"showTagline",2);Nr=Fn([J("etxa-logo")],Nr);var Tu=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,Zi=(e,t,r,i)=>{for(var a=i>1?void 0:i?Pu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Tu(t,r,a),a};let er=class extends Q{constructor(){super(...arguments),this.name="home",this.size=24,this.label=""}_paths(){switch(this.name){case"calendar":return Re`<path d="M6 3v3m12-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/>`;case"cart":return Re`<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6H17a2 2 0 0 0 1.9-1.4L20 8H6m4 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>`;case"more":return Re`<circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none"/>`;case"fridge":return Re`<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 10h12M9 6v2m0 5v3"/>`;case"recipes":return Re`<path d="M5 4h11a3 3 0 0 1 3 3v13H7a2 2 0 0 1-2-2V4Zm2 12h12M9 8h6"/>`;case"household":return Re`<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/>`;case"chores":return Re`<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2m-6 6 2 2 4-4m-6 9h6"/>`;case"profile":return Re`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`;case"arrow-right":return Re`<path d="M5 12h14m-5-5 5 5-5 5"/>`;case"check":return Re`<path d="m5 12 4 4L19 6"/>`;default:return Re`<path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/>`}}render(){return d`
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
    `}};er.styles=H`
    :host { display: inline-flex; flex: none; }
    svg { display: block; width: 1em; height: 1em; }
  `;Zi([Y({reflect:!0})],er.prototype,"name",2);Zi([Y({type:Number})],er.prototype,"size",2);Zi([Y()],er.prototype,"label",2);er=Zi([J("app-icon")],er);var Ou=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,Nn=(e,t,r,i)=>{for(var a=i>1?void 0:i?Ru(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Ou(t,r,a),a};let zr=class extends Q{constructor(){super(...arguments),this.items=[],this.active=""}_select(e,t){t.preventDefault(),this.dispatchEvent(new CustomEvent("navigation-select",{detail:e,bubbles:!0,composed:!0}))}render(){return d`
      <nav aria-label="Navegación principal">
        ${this.items.map(e=>{const t=this.active===e.id?"page":void 0,r=d`<app-icon .name=${e.icon} size="22"></app-icon><span>${e.label}</span>`;return e.href?d`<a href=${e.href} aria-current=${t} @click=${i=>this._select(e,i)}>${r}</a>`:d`<button type="button" aria-current=${t} @click=${i=>this._select(e,i)}>${r}</button>`})}
      </nav>
    `}};zr.styles=[Pe,H`
    :host { display: block; background: var(--etxa-color-surface); border-top: 1px solid var(--etxa-color-border); }
    nav { min-height: 4rem; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; align-items: stretch; padding: 0.25rem max(0.25rem, env(safe-area-inset-right)) calc(0.25rem + env(safe-area-inset-bottom)) max(0.25rem, env(safe-area-inset-left)); }
    a, button { min-width: var(--etxa-touch-target); min-height: var(--etxa-touch-target); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.15rem; color: var(--etxa-color-text-muted); text-decoration: none; font-size: 0.72rem; font-weight: 600; border-radius: var(--etxa-radius-sm); background: none; border: 0; font-family: inherit; cursor: pointer; }
    [aria-current='page'] { color: var(--etxa-color-primary-strong); }
    a:hover, button:hover { background: color-mix(in srgb, var(--etxa-color-primary), transparent 93%); color: var(--etxa-color-primary-strong); }
  `];Nn([Y({attribute:!1})],zr.prototype,"items",2);Nn([Y()],zr.prototype,"active",2);zr=Nn([J("bottom-navigation")],zr);var Fu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,dr=(e,t,r,i)=>{for(var a=i>1?void 0:i?Nu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Fu(t,r,a),a};let ft=class extends Q{constructor(){super(...arguments),this.message="",this._email="",this._password="",this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t=await qr.login({email:this._email,password:this._password});t.accessToken,t.refreshToken,this.dispatchEvent(new CustomEvent("login-success"))}catch(t){this._error=t.message||"Error al iniciar sesión"}finally{this._loading=!1}},this._dispatchRegister=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("register"))}}render(){return d`
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
    `}};ft.styles=H`
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
  `;dr([Y({type:String})],ft.prototype,"message",2);dr([y()],ft.prototype,"_email",2);dr([y()],ft.prototype,"_password",2);dr([y()],ft.prototype,"_error",2);dr([y()],ft.prototype,"_loading",2);ft=dr([J("login-page")],ft);var zu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,gt=(e,t,r,i)=>{for(var a=i>1?void 0:i?Lu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&zu(t,r,a),a};let Ue=class extends Q{constructor(){super(...arguments),this._name="",this._email="",this._password="",this._familyName="",this._extraMembers=[],this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t={name:this._name,email:this._email,password:this._password,familyName:this._familyName||`Familia de ${this._name}`,members:[{name:this._name},...this._extraMembers.filter(i=>i.trim()).map(i=>({name:i.trim()}))]},r=await qr.register(t);r.accessToken,r.refreshToken,this.dispatchEvent(new CustomEvent("register-success"))}catch(t){this._error=t.message||"Error al registrarse"}finally{this._loading=!1}},this._dispatchLogin=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("login"))}}_addMember(){this._extraMembers=[...this._extraMembers,""]}_updateMember(e,t){const r=[...this._extraMembers];r[e]=t,this._extraMembers=r}_removeMember(e){this._extraMembers=this._extraMembers.filter((t,r)=>r!==e)}render(){return d`
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
    `}};Ue.styles=H`
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
  `;gt([y()],Ue.prototype,"_name",2);gt([y()],Ue.prototype,"_email",2);gt([y()],Ue.prototype,"_password",2);gt([y()],Ue.prototype,"_familyName",2);gt([y()],Ue.prototype,"_extraMembers",2);gt([y()],Ue.prototype,"_error",2);gt([y()],Ue.prototype,"_loading",2);Ue=gt([J("register-page")],Ue);const Ji=["Vegetariano","Vegano","Sin gluten","Sin lactosa","Sin frutos secos","Sin huevo","Bajo en sodio","Diabético"],Sa=Ji.filter(e=>e!=="Vegetariano"&&e!=="Vegano");function Ws(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[_-]+/g," ").trim().toLowerCase()}const Bu=new Map(Ji.map(e=>[Ws(e),e]));function Ku(e){return Bu.get(Ws(e))??e}function Qs(e){return Array.isArray(e)?[...new Set(e.map(Ku))]:[]}var ju=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,me=(e,t,r,i)=>{for(var a=i>1?void 0:i?Gu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&ju(t,r,a),a};const Uu=[{value:"SEDENTARIO",label:"Sedentario (poco o nada de ejercicio)"},{value:"LIGERO",label:"Ligero (1-3 días/semana)"},{value:"MODERADO",label:"Moderado (3-5 días/semana)"},{value:"ACTIVO",label:"Activo (6-7 días/semana)"}],qu=[{value:"PERDER_PESO",label:"Perder peso"},{value:"MANTENER",label:"Mantener peso"},{value:"GANAR_MUSCULO",label:"Ganar músculo"}];let oe=class extends Q{constructor(){super(...arguments),this._members=[],this._selectedMemberId="",this._onboardedIds=new Set,this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[],this._error="",this._success="",this._saving=!1,this._confirmingSkip=!1,this._skipping=!1,this._loading=!0,this._handleSubmit=async e=>{var t;if(e.preventDefault(),this._error="",this._success="",!this._sex||!this._activityLevel||!this._goal){this._error="Completa todos los campos obligatorios";return}this._saving=!0;try{await je.onboarding({memberId:this._selectedMemberId,age:Number(this._age),weightKg:Number(this._weightKg),heightCm:Number(this._heightCm),sex:this._sex,activityLevel:this._activityLevel,goal:this._goal,restrictions:this._restrictions}),this._onboardedIds=new Set([...this._onboardedIds,this._selectedMemberId]);const r=((t=this._selectedMember)==null?void 0:t.name)||"";this._success=`Perfil de ${r} guardado correctamente`}catch(r){this._error=r.message||"Error al guardar perfil"}finally{this._saving=!1}},this._handleSkipAll=async()=>{this._error="",this._skipping=!0;try{await je.skipOnboarding(),this.dispatchEvent(new CustomEvent("onboarding-complete"))}catch(e){this._error=e.message||"Error al aplicar el perfil estándar",this._confirmingSkip=!1}finally{this._skipping=!1}}}connectedCallback(){super.connectedCallback(),this._load()}async _load(){var e;try{const t=await qr.me();if(this._members=((e=t.family)==null?void 0:e.members)||[],this._members.length>0){this._selectMember(this._members[0].id);const r=this._members.filter(i=>i.dailyCalories).map(i=>i.id);this._onboardedIds=new Set(r)}}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}_selectMember(e){this._selectedMemberId=e,this._error="",this._success="";const t=this._members.find(r=>r.id===e);t&&t.dailyCalories?(this._age=String(t.age??""),this._weightKg=String(t.weightKg??""),this._heightCm=String(t.heightCm??""),this._sex=t.sex??"",this._activityLevel=t.activityLevel??"",this._goal=t.goal??"",this._restrictions=Qs(t.restrictions)):(this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[])}get _selectedMember(){return this._members.find(e=>e.id===this._selectedMemberId)}get _pendingMembers(){return this._members.filter(e=>!this._onboardedIds.has(e.id))}_toggleRestriction(e){this._restrictions.includes(e)?this._restrictions=this._restrictions.filter(t=>t!==e):this._restrictions=[...this._restrictions,e]}_handleContinue(){this.dispatchEvent(new CustomEvent("onboarding-complete"))}_nextPendingMember(){const e=this._pendingMembers[0];e&&this._selectMember(e.id)}render(){var t;if(this._loading)return d`<div class="card"><p>Cargando...</p></div>`;const e=this._members.length>0&&this._pendingMembers.length===0;return d`
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
                ${Uu.map(r=>d`<option value=${r.value}>${r.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label for="goal">Objetivo nutricional</label>
              <select id="goal" .value=${this._goal} @change=${r=>{this._goal=r.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                ${qu.map(r=>d`<option value=${r.value}>${r.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label>Restricciones dietéticas (opcional)</label>
              <div class="check-grid">
                ${Ji.map(r=>d`
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
    `}};oe.styles=H`
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
  `;me([y()],oe.prototype,"_members",2);me([y()],oe.prototype,"_selectedMemberId",2);me([y()],oe.prototype,"_onboardedIds",2);me([y()],oe.prototype,"_age",2);me([y()],oe.prototype,"_weightKg",2);me([y()],oe.prototype,"_heightCm",2);me([y()],oe.prototype,"_sex",2);me([y()],oe.prototype,"_activityLevel",2);me([y()],oe.prototype,"_goal",2);me([y()],oe.prototype,"_restrictions",2);me([y()],oe.prototype,"_error",2);me([y()],oe.prototype,"_success",2);me([y()],oe.prototype,"_saving",2);me([y()],oe.prototype,"_confirmingSkip",2);me([y()],oe.prototype,"_skipping",2);me([y()],oe.prototype,"_loading",2);oe=me([J("onboarding-page")],oe);const Hr=H`
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
`;var Hu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,ea=(e,t,r,i)=>{for(var a=i>1?void 0:i?Vu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Hu(t,r,a),a};let tr=class extends Q{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.type="button"}render(){return d`
      <button type=${this.type} ?disabled=${this.disabled||this.loading} aria-busy=${this.loading?"true":"false"}>
        <slot>${this.loading?"Guardando…":"Continuar"}</slot>
        ${this.loading?"":d`<app-icon name="arrow-right" size="20"></app-icon>`}
      </button>
    `}};tr.styles=[Pe,He,H`
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
  `];ea([Y({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);ea([Y({type:Boolean,reflect:!0})],tr.prototype,"loading",2);ea([Y()],tr.prototype,"type",2);tr=ea([J("primary-button")],tr);var Wu=Object.getOwnPropertyDescriptor,Qu=(e,t,r,i)=>{for(var a=i>1?void 0:i?Wu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=o(a)||a);return a};let an=class extends Q{_start(){this.dispatchEvent(new CustomEvent("step-submit",{bubbles:!0,composed:!0}))}render(){return d`
      <div class="step">
        <div class="brand">
          <etxa-logo style="--etxa-logo-size: 3.25rem" show-tagline></etxa-logo>
        </div>
        <img
          class="hero"
          src=${dn.welcomeKitchen}
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
    `}};an.styles=[Pe,He,Hr,H`
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
    `];an=Qu([J("welcome-step")],an);var Yu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Vr=(e,t,r,i)=>{for(var a=i>1?void 0:i?Xu(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Yu(t,r,a),a};let zt=class extends Q{constructor(){super(...arguments),this.value="",this.icon="home",this.selected=!1,this.disabled=!1}_toggle(){this.disabled||this.dispatchEvent(new CustomEvent("feature-toggle",{detail:{value:this.value,selected:!this.selected},bubbles:!0,composed:!0}))}render(){return d`
      <button type="button" role="checkbox" aria-checked=${this.selected?"true":"false"} ?disabled=${this.disabled} @click=${this._toggle}>
        <app-icon .name=${this.icon} size="22"></app-icon>
        <span class="copy"><span class="title"><slot name="title"></slot></span><span class="description"><slot></slot></span></span>
        <span class="selection" aria-hidden="true">${this.selected?d`<app-icon name="check" size="16"></app-icon>`:""}</span>
      </button>
    `}};zt.styles=[Pe,He,H`
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
  `];Vr([Y()],zt.prototype,"value",2);Vr([Y()],zt.prototype,"icon",2);Vr([Y({type:Boolean,reflect:!0})],zt.prototype,"selected",2);Vr([Y({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);zt=Vr([J("feature-card")],zt);var Zu=Object.defineProperty,Ju=Object.getOwnPropertyDescriptor,ta=(e,t,r,i)=>{for(var a=i>1?void 0:i?Ju(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Zu(t,r,a),a};let rr=class extends Q{constructor(){super(...arguments),this.selected=[],this.saving=!1,this._error=""}_onToggle(e){const{value:t,selected:r}=e.detail,i=r?[...this.selected,t]:this.selected.filter(a=>a!==t);this._error="",this.dispatchEvent(new CustomEvent("modules-change",{detail:{modules:i},bubbles:!0,composed:!0}))}_submit(){if(this.selected.length===0){this._error="Elige al menos un área para empezar. Podrás añadir las demás cuando quieras.";return}this._error="",this.dispatchEvent(new CustomEvent("step-submit",{detail:{modules:this.selected},bubbles:!0,composed:!0}))}render(){return d`
      <div class="step">
        <div class="headline">
          <h1>¿Qué te gustaría tener bajo control?</h1>
          <p class="subtitle">Elige lo que más te interese. Puedes cambiarlo cuando quieras.</p>
        </div>
        <div class="body">
          <div class="cards" @feature-toggle=${this._onToggle}>
            ${Kr.map(e=>d`
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
    `}};rr.styles=[Pe,He,Ui,Hr,H`
      .cards {
        display: flex;
        flex-direction: column;
        gap: var(--etxa-space-2);
      }
    `];ta([Y({attribute:!1})],rr.prototype,"selected",2);ta([Y({type:Boolean})],rr.prototype,"saving",2);ta([y()],rr.prototype,"_error",2);rr=ta([J("module-selection-step")],rr);var ep=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,Wr=(e,t,r,i)=>{for(var a=i>1?void 0:i?tp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&ep(t,r,a),a};const Co=12,rp=[{value:"APARTMENT",label:"Piso"},{value:"HOUSE",label:"Casa"},{value:"OTHER",label:"Otro"}];function ip(e){return e.includes("Vegano")?"VEGAN":e.includes("Vegetariano")?"VEGETARIAN":e.length>0?"OTHER":"NONE"}let Lt=class extends Q{constructor(){super(...arguments),this.draft={name:"",homeType:"APARTMENT",memberNames:["Miembro 1"],restrictions:[]},this.minPeople=1,this.saving=!1,this._error=""}get _preference(){return ip(this.draft.restrictions)}_emit(e){this._error="",this.dispatchEvent(new CustomEvent("household-change",{detail:{...this.draft,...e},bubbles:!0,composed:!0}))}_setPeople(e){const t=Math.min(Co,Math.max(this.minPeople,e)),r=[...this.draft.memberNames];for(;r.length<t;)r.push(`Miembro ${r.length+1}`);for(;r.length>t;)r.pop();this._emit({memberNames:r})}_setMemberName(e,t){const r=[...this.draft.memberNames];r[e]=t,this._emit({memberNames:r})}_setPreference(e){e==="NONE"?this._emit({restrictions:[]}):e==="VEGETARIAN"?this._emit({restrictions:["Vegetariano"]}):e==="VEGAN"?this._emit({restrictions:["Vegano"]}):this._emit({restrictions:this.draft.restrictions.filter(t=>Sa.includes(t))})}_toggleOtherRestriction(e,t){const r=this.draft.restrictions.filter(a=>Sa.includes(a)),i=t?[...r,e]:r.filter(a=>a!==e);this._emit({restrictions:i})}_submit(){if(!this.draft.name.trim()){this._error="Ponle un nombre a la casa para reconocerla.";return}if(this.draft.memberNames.some(e=>!e.trim())){this._error="Cada persona necesita un nombre.";return}this._error="",this.dispatchEvent(new CustomEvent("step-submit",{detail:{...this.draft,name:this.draft.name.trim(),memberNames:this.draft.memberNames.map(e=>e.trim())},bubbles:!0,composed:!0}))}render(){const e=this.draft.memberNames.length,t=this._preference;return d`
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
              ${rp.map(r=>d`
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
                ?disabled=${e>=Co}
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
              ${this.draft.memberNames.map((r,i)=>d`
                <label class="field">
                  <span class="sr-only">Nombre de la persona ${i+1}</span>
                  <input
                    type="text"
                    .value=${r}
                    maxlength="60"
                    autocomplete="off"
                    placeholder=${`Miembro ${i+1}`}
                    @input=${a=>this._setMemberName(i,a.target.value)}
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
                    ${Sa.map(r=>d`
                      <label class="option">
                        <input
                          type="checkbox"
                          .checked=${this.draft.restrictions.includes(r)}
                          @change=${i=>this._toggleOtherRestriction(r,i.target.checked)}
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
    `}};Lt.styles=[Pe,He,Ui,Hr,H`
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
    `];Wr([Y({attribute:!1})],Lt.prototype,"draft",2);Wr([Y({type:Number})],Lt.prototype,"minPeople",2);Wr([Y({type:Boolean})],Lt.prototype,"saving",2);Wr([y()],Lt.prototype,"_error",2);Lt=Wr([J("household-step")],Lt);var ap=Object.defineProperty,np=Object.getOwnPropertyDescriptor,zn=(e,t,r,i)=>{for(var a=i>1?void 0:i?np(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&ap(t,r,a),a};let Lr=class extends Q{constructor(){super(...arguments),this.modules=[],this.index=0}_next(){this.dispatchEvent(new CustomEvent("step-submit",{bubbles:!0,composed:!0}))}render(){const e=this.modules[this.index];if(!e)return d``;const t=Uo(e);return d`
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
                  ${this.modules.map((r,i)=>d`<span class="dot" data-current=${i===this.index?"true":"false"}></span>`)}
                </div>
              `:""}
          <primary-button @click=${this._next}>Siguiente</primary-button>
        </div>
      </div>
    `}};Lr.styles=[Pe,He,Hr,H`
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
    `];zn([Y({attribute:!1})],Lr.prototype,"modules",2);zn([Y({type:Number})],Lr.prototype,"index",2);Lr=zn([J("feature-tour-step")],Lr);var op=Object.getOwnPropertyDescriptor,sp=(e,t,r,i)=>{for(var a=i>1?void 0:i?op(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=o(a)||a);return a};let nn=class extends Q{_emit(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}render(){return d`
      <div class="step">
        <div class="body">
          <img
            src=${dn.doneHouse}
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
    `}};nn.styles=[Pe,He,Hr,H`
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
    `];nn=sp([J("completion-step")],nn);var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,ra=(e,t,r,i)=>{for(var a=i>1?void 0:i?cp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&lp(t,r,a),a};let ir=class extends Q{constructor(){super(...arguments),this.current=1,this.total=1,this.label="Progreso"}render(){const e=Math.max(1,this.total),t=Math.min(e,Math.max(0,this.current)),r=Math.round(t/e*100);return d`
      <div class="track" role="progressbar" aria-label=${this.label} aria-valuemin="0" aria-valuemax=${e} aria-valuenow=${t}>
        <div class="value" style=${`width: ${r}%`}></div>
      </div>
      <span class="sr-only">${t} de ${e}</span>
    `}};ir.styles=H`
    :host { display: block; }
    .track { height: 0.25rem; border-radius: 999px; overflow: hidden; background: var(--etxa-color-border); }
    .value { height: 100%; border-radius: inherit; background: var(--etxa-color-secondary); transition: width 180ms ease; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    @media (prefers-reduced-motion: reduce) { .value { transition: none; } }
  `;ra([Y({type:Number})],ir.prototype,"current",2);ra([Y({type:Number})],ir.prototype,"total",2);ra([Y()],ir.prototype,"label",2);ir=ra([J("progress-indicator")],ir);var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,rt=(e,t,r,i)=>{for(var a=i>1?void 0:i?up(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&dp(t,r,a),a};const si=0,gr=1,li=2,Ut=3,ci=4;let ze=class extends Q{constructor(){super(...arguments),this._step=si,this._tourIndex=0,this._loading=!0,this._saving=!1,this._error="",this._modules=[...Ii],this._memberRecords=[],this._draft={name:"",homeType:"APARTMENT",memberNames:["Miembro 1"],restrictions:[]},this._retry=null,this._onModulesChange=e=>{this._modules=e.detail.modules},this._onModulesSubmit=e=>{const t=e.detail.modules;this._run(async()=>{await je.saveOnboardingProgress({onboardingStep:li,enabledModules:t}),this._modules=t,this._step=li},"No se pudo guardar tu selección. Inténtalo otra vez.")},this._onHouseholdChange=e=>{this._draft=e.detail},this._onHouseholdSubmit=e=>{const t=e.detail;this._run(async()=>{await je.saveOnboardingProgress({onboardingStep:Ut,name:t.name,homeType:t.homeType,enabledModules:this._modules}),await this._syncMembers(t),this._draft=t,this._tourIndex=0,this._step=Ut},"No se pudieron guardar los datos de tu casa. Inténtalo otra vez.")},this._onTourNext=()=>{if(this._tourIndex<this._tourModules.length-1){this._tourIndex+=1;return}this._finish()},this._goBack=()=>{if(this._error="",this._retry=null,this._step===Ut&&this._tourIndex>0){this._tourIndex-=1;return}this._step=Math.max(si,this._step-1)}}connectedCallback(){super.connectedCallback(),this._load()}async _load(){var e;this._loading=!0;try{const[t,r]=await Promise.all([je.getHomeSettings(),Ze.list()]);this._modules=t.enabledModules.length>0?[...t.enabledModules]:[...Ii],this._memberRecords=r.map(i=>({id:i.id,name:i.name,dailyCalories:i.dailyCalories??null,restrictions:i.restrictions??[]})),this._draft={name:t.name??"",homeType:t.homeType??"APARTMENT",memberNames:this._memberRecords.length>0?this._memberRecords.map(i=>i.name):["Miembro 1"],restrictions:((e=this._memberRecords[0])==null?void 0:e.restrictions)??[]},this._step=Math.min(Ut,Math.max(si,t.onboardingStep)),this._error="",this._retry=null}catch{this._error="No se pudo cargar la configuración de tu casa.",this._retry=()=>this._load()}finally{this._loading=!1}}get _minPeople(){let e=0;for(let t=this._memberRecords.length-1;t>=0&&this._memberRecords[t].dailyCalories==null;t-=1)e+=1;return e=Math.min(e,Math.max(0,this._memberRecords.length-1)),Math.max(1,this._memberRecords.length-e)}get _tourModules(){return qo(this._modules).map(e=>e.id)}get _progressTotal(){return 2+this._tourModules.length+1}get _progressCurrent(){switch(this._step){case gr:return 1;case li:return 2;case Ut:return 3+this._tourIndex;case ci:return this._progressTotal;default:return 0}}async _run(e,t){this._saving=!0,this._error="";try{await e(),this._retry=null}catch(r){this._error=r instanceof Error&&r.message?r.message:t,this._retry=async()=>{await this._run(e,t)}}finally{this._saving=!1}}async _syncMembers(e){const t=e.memberNames,r=[...this._memberRecords];for(let a=r.length-1;a>=t.length;a-=1){const n=r[a];if(n.dailyCalories!=null||r.length<=1)break;await Ze.remove(n.id),r.splice(a,1)}for(let a=0;a<t.length;a+=1){const n=t[a],o=r[a];if(!o){const s=await Ze.create({name:n});r.push({id:s.id,name:s.name,dailyCalories:s.dailyCalories??null,restrictions:[]});continue}o.name!==n&&(await Ze.update(o.id,{name:n}),o.name=n)}const i=[...e.restrictions];for(const a of r){const n=a.restrictions??[];n.length===i.length&&n.every((s,l)=>s===i[l])||(await Ze.update(a.id,{restrictions:i}),a.restrictions=i)}this._memberRecords=r}async _finish(){await this._run(async()=>{await je.completeHomeSetup({name:this._draft.name,homeType:this._draft.homeType,enabledModules:this._modules}),this._memberRecords.some(e=>e.dailyCalories==null)&&await je.skipOnboarding({}),this._step=ci},"No se pudo terminar la configuración. Inténtalo otra vez.")}_leave(e){this.dispatchEvent(new CustomEvent("home-setup-complete",{detail:{destination:e},bubbles:!0,composed:!0}))}_renderStep(){switch(this._step){case gr:return d`<module-selection-step
          .selected=${this._modules}
          ?saving=${this._saving}
          @modules-change=${this._onModulesChange}
          @step-submit=${this._onModulesSubmit}
        ></module-selection-step>`;case li:return d`<household-step
          .draft=${this._draft}
          .minPeople=${this._minPeople}
          ?saving=${this._saving}
          @household-change=${this._onHouseholdChange}
          @step-submit=${this._onHouseholdSubmit}
        ></household-step>`;case Ut:return d`<feature-tour-step
          .modules=${this._tourModules}
          .index=${this._tourIndex}
          @step-submit=${this._onTourNext}
        ></feature-tour-step>`;case ci:return d`<completion-step
          @go-home=${()=>this._leave("inicio")}
          @customize=${()=>this._leave("perfil")}
        ></completion-step>`;default:return d`<welcome-step @step-submit=${()=>{this._step=gr}}></welcome-step>`}}render(){if(this._loading)return d`<div class="loading"><p>Preparando tu casa…</p></div>`;const e=this._step>si&&this._step<ci,t=this._step>gr||this._step===gr;return d`
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
    `}};ze.styles=[Ko,jo,Pe,He,Ui,H`
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
    `];rt([y()],ze.prototype,"_step",2);rt([y()],ze.prototype,"_tourIndex",2);rt([y()],ze.prototype,"_loading",2);rt([y()],ze.prototype,"_saving",2);rt([y()],ze.prototype,"_error",2);rt([y()],ze.prototype,"_modules",2);rt([y()],ze.prototype,"_memberRecords",2);rt([y()],ze.prototype,"_draft",2);ze=rt([J("home-onboarding-page")],ze);var pp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,vt=(e,t,r,i)=>{for(var a=i>1?void 0:i?hp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&pp(t,r,a),a};const mp={DESAYUNO:"Desayuno",TENTEMPIE:"Tentempié",ALMUERZO:"Almuerzo",MERIENDA:"Merienda",CENA:"Cena"};function fp(e=new Date){return(e.getDay()+6)%7}const vr=()=>({status:"loading",data:null});let qe=class extends Q{constructor(){super(...arguments),this.modules=[],this.homeName="",this._meals=vr(),this._shopping=vr(),this._chores=vr(),this._expiring=vr(),this._lowStock=vr()}connectedCallback(){super.connectedCallback(),this._loadAll()}_has(e){return this.modules.includes(e)}async _loadAll(){const e=[];this._has("MEALS")&&e.push(this._loadMeals(),this._loadExpiring()),this._has("SHOPPING")&&e.push(this._loadShopping()),this._has("CHORES")&&e.push(this._loadChores()),this._has("HOUSEHOLD")&&e.push(this._loadLowStock()),await Promise.allSettled(e)}async _loadMeals(){try{const e=await De.current(),t=fp(),r=((e==null?void 0:e.meals)??[]).filter(i=>i.dayOfWeek===t&&!i.isEatingOut).map(i=>{var a;return{id:i.id,label:mp[i.mealType]??i.mealType,name:((a=i.recipe)==null?void 0:a.name)??"Sin receta",completed:!!i.completed}});this._meals={status:"ready",data:{done:r.filter(i=>i.completed).length,total:r.length,meals:r}}}catch{this._meals={status:"error",data:null}}}async _loadShopping(){try{const e=await Ke.current(),t=(e==null?void 0:e.items)??[],r=((e==null?void 0:e.sections)??[]).flatMap(n=>n.items??[]),i=t.length+r.length,a=t.filter(n=>n.purchased).length+r.filter(n=>n.purchased).length;this._shopping={status:"ready",data:{done:a,total:i}}}catch{this._shopping={status:"error",data:null}}}async _loadChores(){try{const e=await $t.list(),t=e.filter(r=>r.completedInPeriod).length;this._chores={status:"ready",data:{done:t,total:e.length}}}catch{this._chores={status:"error",data:null}}}async _loadExpiring(){try{const e=await Qe.expiring(),t=(e==null?void 0:e.items)??[];this._expiring={status:"ready",data:{count:t.length,names:t.slice(0,3).map(r=>r.foodName)}}}catch{this._expiring={status:"error",data:null}}}async _loadLowStock(){try{const t=(await at.stock()).filter(r=>r.minThreshold!=null&&r.quantity<r.minThreshold);this._lowStock={status:"ready",data:{count:t.length,names:t.slice(0,3).map(r=>{var i;return((i=r.householdItem)==null?void 0:i.name)??"Artículo"})}}}catch{this._lowStock={status:"error",data:null}}}get _todayLabel(){const e=new Intl.DateTimeFormat("es-ES",{weekday:"long",day:"numeric",month:"long"}).format(new Date);return e.charAt(0).toUpperCase()+e.slice(1)}get _highlight(){const e=[];if(this._meals.data&&this._meals.data.total>this._meals.data.done){const r=this._meals.data.total-this._meals.data.done;e.push(r===1?"1 comida":`${r} comidas`)}if(this._chores.data&&this._chores.data.total>this._chores.data.done){const r=this._chores.data.total-this._chores.data.done;e.push(r===1?"1 tarea":`${r} tareas`)}if(this._shopping.data&&this._shopping.data.total>this._shopping.data.done){const r=this._shopping.data.total-this._shopping.data.done;e.push(r===1?"1 cosa que comprar":`${r} cosas que comprar`)}if(e.length===0)return"Hoy no queda nada pendiente. La casa, hecha.";if(e.length===1)return`Hoy te queda ${e[0]}.`;const t=e.pop();return`Hoy te quedan ${e.join(", ")} y ${t}.`}_renderCard(e){return d`
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
              ${r.slice(0,5).map(i=>d`
                <li>
                  <span class="slot">${i.label}</span>
                  <span class="name">${i.name}</span>
                  ${i.completed?d`<span class="done"><app-icon name="check" size="16" label="Hecha"></app-icon></span>`:""}
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
    `}};qe.styles=[Pe,He,Ui,H`
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
    `];vt([Y({attribute:!1})],qe.prototype,"modules",2);vt([Y()],qe.prototype,"homeName",2);vt([y()],qe.prototype,"_meals",2);vt([y()],qe.prototype,"_shopping",2);vt([y()],qe.prototype,"_chores",2);vt([y()],qe.prototype,"_expiring",2);vt([y()],qe.prototype,"_lowStock",2);qe=vt([J("home-view")],qe);const Bt=H`
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
`;var gp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,L=(e,t,r,i)=>{for(var a=i>1?void 0:i?vp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&gp(t,r,a),a};const Mo="mpp.useExpiring",Ao="mpp.expiryWarningDismissedWeek",Ca=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],Ma=[{value:"DESAYUNO",label:"Desayuno"},{value:"TENTEMPIE",label:"Tentempié"},{value:"ALMUERZO",label:"Almuerzo"},{value:"MERIENDA",label:"Merienda"},{value:"CENA",label:"Cena"}],yp={calories:"Calorías",proteinG:"Proteína",carbsG:"Carbohidratos",fatG:"Grasa"},bp={calories:"kcal",proteinG:"g",carbsG:"g",fatG:"g"};let z=class extends Q{constructor(){super(...arguments),this._plan=null,this._loading=!0,this._error="",this._fitNotice=null,this._generating=!1,this._deleting=!1,this._useExpiring=!0,this._expiring=[],this._expiryDismissed=!1,this._progress=null,this._progressArray=null,this._showMenu=!1,this._editMode=!1,this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._showAllRecipes=!1,this._allRecipes=[],this._recipeSearch="",this._panelLoading=!1,this._assigning=!1,this._isEatingOut=!1,this._dragOverSlot="",this._expandedDay=1,this._multipliers={},this._members=[],this._selectedMemberId="",this._showSaveTemplate=!1,this._showLoadTemplate=!1,this._templateName="",this._templates=[],this._savingTemplate=!1,this._loadingTemplates=!1,this._applyingTemplate=!1,this._showRepeatWeek=!1,this._history=[],this._loadingHistory=!1,this._repeating=!1,this._detailRecipe=null,this._detailMealId=null,this._showRecipeDetail=!1,this._detailLoading=!1,this._cooking={},this._cookingSummary=null,this._showCookedSummary=!1,this._docClickHandler=e=>{this._showMenu&&(e.composedPath().some(i=>{var a,n;return(n=(a=i.classList)==null?void 0:a.contains)==null?void 0:n.call(a,"menu-container")})||(this._showMenu=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._docClickHandler),this._restorePreferences(),this._loadMembers().then(()=>this._loadPlan()),this._loadExpiring()}_restorePreferences(){try{this._useExpiring=localStorage.getItem(Mo)!=="false",this._expiryDismissed=localStorage.getItem(Ao)===this._weekKey()}catch{}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._docClickHandler)}async _loadMembers(){var e,t;try{const r=await qr.me();this._members=((e=r.family)==null?void 0:e.members)||[];const i=this._members.find(a=>a.dailyCalories);this._selectedMemberId=(i==null?void 0:i.id)||((t=this._members[0])==null?void 0:t.id)||""}catch{this._members=[]}}async _loadPlan(){var e,t;this._loading=!0,this._error="";try{if(this._plan=await De.current(this._selectedMemberId||void 0),(t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length){this._loadProgress();const r={};for(const i of this._plan.meals)r[`${i.dayOfWeek}-${i.mealType}`]=i.servingsMultiplier??1;this._multipliers=r}}catch{this._plan=null}finally{this._loading=!1}}async _loadProgress(){try{const e=await De.progress(this._selectedMemberId||void 0);Array.isArray(e)?(this._progressArray=e,this._progress=null):(this._progress=e,this._progressArray=null)}catch{this._progress=null,this._progressArray=null}}_onMemberChange(e){const t=e.target.value;this._selectedMemberId=t,this._loadPlan()}hasMeals(){var e,t;return!!((t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length)}async _generatePlan(){var e;this._generating=!0,this._error="",this._fitNotice=null;try{const t=await De.generate(this._selectedMemberId||void 0,this._useExpiring);this._plan=t,this._fitNotice=((e=t==null?void 0:t.fit)==null?void 0:e.message)??null,this._progress=null,this._loadProgress()}catch(t){this._error=t.message||"Error al generar el plan"}finally{this._generating=!1}}_toggleUseExpiring(e){this._useExpiring=e.target.checked;try{localStorage.setItem(Mo,String(this._useExpiring))}catch{}}async _loadExpiring(){try{const e=await Qe.expiring();this._expiring=e.items||[]}catch{this._expiring=[]}}_unusedExpiring(){var t,r;const e=new Set;for(const i of((t=this._plan)==null?void 0:t.meals)||[])for(const a of((r=i.recipe)==null?void 0:r.ingredients)||[])a.foodId&&e.add(a.foodId);return this._expiring.filter(i=>!e.has(i.foodId))}_dismissExpiryWarning(){this._expiryDismissed=!0;try{localStorage.setItem(Ao,this._weekKey())}catch{}}_weekKey(){const e=new Date,t=e.getDay(),r=new Date(e);r.setDate(e.getDate()-t+(t===0?-6:1));const i=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),n=String(r.getDate()).padStart(2,"0");return`${i}-${a}-${n}`}async _deletePlan(){if(confirm("¿Eliminar el plan semanal actual?")){this._deleting=!0,this._error="";try{await De.remove(),this._plan=null,this._progress=null,this._progressArray=null,this._editMode=!1,this._showMenu=!1}catch(e){this._error=e.message||"Error al eliminar el plan"}finally{this._deleting=!1}}}_toggleMenu(){this._showMenu=!this._showMenu}_enterEditMode(){this._editMode=!0,this._showMenu=!1}_exitEditMode(){this._editMode=!1,this._closePanel()}async _openPanel(e,t){this._panelDay=e,this._panelMealType=t,this._showPanel=!0,this._recipeSearch="",this._showAllRecipes=!1;const r=this._getMeal(e,t);this._isEatingOut=(r==null?void 0:r.isEatingOut)??!1,this._panelLoading=!0;try{this._allRecipes=await Wt.list()}catch{this._allRecipes=[]}finally{this._panelLoading=!1}}_closePanel(){this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._allRecipes=[],this._recipeSearch="",this._showAllRecipes=!1}get _filteredRecipes(){let e=this._allRecipes;!this._showAllRecipes&&this._panelMealType&&(e=e.filter(r=>{var i;return(i=r.mealType)==null?void 0:i.includes(this._panelMealType)}));const t=this._recipeSearch.toLowerCase().trim();return t?e.filter(r=>r.name.toLowerCase().includes(t)):e}get _mealTypeFilteredCount(){return this._panelMealType?this._allRecipes.filter(e=>{var t;return(t=e.mealType)==null?void 0:t.includes(this._panelMealType)}).length:this._allRecipes.length}async _clearPlan(){if(confirm("¿Limpiar todas las comidas del plan?")){this._error="",this._progress=null,this._progressArray=null;try{await De.remove(),await this._loadPlan()}catch(e){this._error=e.message||"Error al limpiar el plan"}}}async _removeSlotMeal(e,t){if(confirm("¿Eliminar esta comida del plan?")){this._error="";try{await De.removeSlot(e,t,this._selectedMemberId||void 0),await this._loadPlan()}catch(r){this._error=r.message||"Error al eliminar comida"}}}_onDragStart(e,t){var r;(r=e.dataTransfer)==null||r.setData("text/plain",t),e.dataTransfer&&(e.dataTransfer.effectAllowed="copy")}_onDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")}_onDragEnter(e,t){this._dragOverSlot=`${e}-${t}`}_onDragLeave(e,t){this._dragOverSlot===`${e}-${t}`&&(this._dragOverSlot="")}_onDrop(e,t,r){var a;e.preventDefault();const i=(a=e.dataTransfer)==null?void 0:a.getData("text/plain");i&&(this._assigning||this._assignSlot(t,r,i))}async _assignSlot(e,t,r){this._assigning=!0;const i=`${e}-${t}`,a=this._multipliers[i]??1,n=this._isEatingOut;console.log("[assignSlot] payload:",{dayOfWeek:e,mealType:t,recipeId:r,servingsMultiplier:a,isEatingOut:n});try{await De.assignSlot({dayOfWeek:e,mealType:t,recipeId:r,servingsMultiplier:a,isEatingOut:n,assignedToMemberId:this._selectedMemberId||void 0}),this._showPanel&&e===this._panelDay&&t===this._panelMealType&&this._closePanel(),await this._loadPlan()}catch(o){this._error=o.message||"Error al asignar receta"}finally{this._assigning=!1}}_assignFromPanel(e){this._assignSlot(this._panelDay,this._panelMealType,e)}_adjustMultiplier(e,t,r){const i=`${e}-${t}`,a=this._multipliers[i]??1,n=Math.round((a+r)*10)/10;n<.5||n>5||(this._multipliers={...this._multipliers,[i]:n},this._persistMultiplier(e,t))}async _persistMultiplier(e,t){var n;const r=`${e}-${t}`,i=this._multipliers[r]??1,a=this._getMeal(e,t);if((n=a==null?void 0:a.recipe)!=null&&n.id)try{await De.assignSlot({dayOfWeek:e,mealType:t,recipeId:a.recipe.id,servingsMultiplier:i}),await this._loadPlan()}catch(o){this._error=o.message||"Error al actualizar ración",await this._loadPlan()}}async _saveTemplate(){if(this._templateName.trim()){this._savingTemplate=!0;try{await fr.create({name:this._templateName.trim()}),this._showSaveTemplate=!1,this._templateName=""}catch(e){this._error=e.message||"Error al guardar plantilla"}finally{this._savingTemplate=!1}}}async _openLoadTemplate(){this._showLoadTemplate=!0,this._loadingTemplates=!0;try{this._templates=await fr.list()}catch{this._templates=[]}finally{this._loadingTemplates=!1}}async _applyTemplate(e){if(!this._applyingTemplate){this._applyingTemplate=!0,this._error="";try{await fr.apply(e,{assignedToMemberId:this._selectedMemberId||void 0}),this._showLoadTemplate=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=t.message||"Error al aplicar plantilla"}finally{this._applyingTemplate=!1}}}async _deleteTemplate(e,t){if(t.stopPropagation(),!!confirm("¿Eliminar esta plantilla?"))try{await fr.remove(e),this._templates=await fr.list()}catch(r){this._error=r.message||"Error al eliminar plantilla"}}async _openRepeatWeek(){this._showRepeatWeek=!0,this._loadingHistory=!0;try{this._history=await De.history()}catch{this._history=[]}finally{this._loadingHistory=!1}}_openRepeatWeekFromMenu(){this._showMenu=!1,confirm("¿Reemplazar el plan actual con una semana anterior?")&&this._openRepeatWeek()}_formatWeekRange(e){const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const i=a=>a.toLocaleDateString("es-ES",{day:"numeric",month:"short"});return`${i(t)} - ${i(r)}`}async _repeatWeek(e){if(!this._repeating){this._repeating=!0,this._error="";try{await De.repeat({sourcePlanId:e,assignedToMemberId:this._selectedMemberId||void 0}),this._showRepeatWeek=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=t.message||"Error al repetir el plan"}finally{this._repeating=!1}}}async _openRecipeDetail(e,t,r){if(r==null||r.stopPropagation(),!!e){this._detailLoading=!0,this._detailMealId=t??null,this._showRecipeDetail=!0;try{this._detailRecipe=await Wt.get(e)}catch{this._detailRecipe=null,this._showRecipeDetail=!1}finally{this._detailLoading=!1}}}_closeRecipeDetail(){this._showRecipeDetail=!1,this._detailRecipe=null,this._detailMealId=null}_openEditFromDetail(){this._showRecipeDetail=!1,window.location.hash="#/recetas"}async _markCooked(e){const t=this._detailMealId;if(!(!(e!=null&&e.id)||!t||this._cooking[t])){this._cooking={...this._cooking,[t]:!0};try{const r=await De.cook(t);this._cookingSummary=r.summary,this._showCookedSummary=!0,this._cooking={...this._cooking,[t]:!1},await this._loadPlan(),await this._loadExpiring()}catch(r){this._error=r.message||"Error al marcar como cocinado",this._cooking={...this._cooking,[t]:!1}}}}_macroBar(e,t){var u;const r=t||this._progress;if(!(r!=null&&r.current)||!(r!=null&&r.target))return"";const i=r.current[e]??0,a=r.target[e]??1,n=(u=r.range)==null?void 0:u[e],o=Math.min(100,Math.round(i/a*100)),s=yp[e]||e,l=bp[e]||"",c=n?i>=n.min&&i<=n.max:null;return d`
      <div class="macro-row">
        <div class="macro-label">${s}</div>
        <div class="macro-bar-track">
          <div class="macro-bar-fill ${c===!0?"ok":c===!1?"over":""}" style="width: ${Math.min(o,100)}%"></div>
        </div>
        <div class="macro-numbers">
          <span class="macro-current">${i.toLocaleString()}</span>
          <span class="macro-sep">/</span>
          <span class="macro-target">${a.toLocaleString()}</span>
          <span class="macro-unit">${l}</span>
        </div>
      </div>
    `}_renderSlot(e,t){var w,h,g,_;const r=(h=(w=this._plan)==null?void 0:w.meals)==null?void 0:h.find(v=>v.dayOfWeek===e&&v.mealType===t),i=`${e}-${t}`,a=this._dragOverSlot===i,n=this._editMode?this._onDragOver:void 0,o=this._editMode?v=>this._onDrop(v,e,t):void 0,s=this._editMode?()=>this._onDragEnter(e,t):void 0,l=this._editMode?()=>this._onDragLeave(e,t):void 0,c=this._editMode?()=>this._openPanel(e,t):void 0,u=["slot",a?"drag-over":"",this._editMode?"clickable":"",r?"":"empty"].filter(Boolean).join(" ");if(!r)return this._editMode?d`
          <div
            class=${u}
            @click=${c}
            @dragover=${n}
            @dragenter=${s}
            @dragleave=${l}
            @drop=${o}
          >
            <span class="add-icon">+</span>
          </div>`:d`<div class="slot empty">—</div>`;const p=`${e}-${t}`,m=this._multipliers[p]??r.servingsMultiplier??1;return d`
  <div
    class=${u}
    @click=${c}
    @dragover=${n}
    @dragenter=${s}
    @dragleave=${l}
    @drop=${o}
  >
    <div class="slot-header">
      <div class="slot-name">${((g=r.recipe)==null?void 0:g.name)||"?"}</div>
      <button class="slot-view" @click=${v=>{var I;return this._openRecipeDetail((I=r.recipe)==null?void 0:I.id,r.id,v)}} title="Ver receta">👁</button>
      ${this._editMode?d`<button class="slot-remove" @click=${v=>{v.stopPropagation(),this._removeSlotMeal(e,t)}} title="Eliminar">✕</button>`:""}
    </div>
    ${(_=r.recipe)!=null&&_.calorias?d`<div class="slot-macro">${Math.round(r.recipe.calorias*m)} kcal</div>`:""}
    ${r.isEatingOut?d`<div class="slot-badge eating-out">Comer fuera</div>`:""}
    ${this._editMode||m!==1?d`
        <div class="slot-multiplier">
          ${this._editMode?d`
              <button class="mult-btn" @click=${v=>{v.stopPropagation(),this._adjustMultiplier(e,t,-.5)}} ?disabled=${m<=.5}>−</button>
              <span class="mult-value">x${m.toFixed(1)}</span>
              <button class="mult-btn" @click=${v=>{v.stopPropagation(),this._adjustMultiplier(e,t,.5)}} ?disabled=${m>=5}>+</button>
            `:d`<span class="mult-value">x${m.toFixed(1)}</span>`}
        </div>
      `:""}
  </div>
`}_getMeal(e,t){var r,i;return(i=(r=this._plan)==null?void 0:r.meals)==null?void 0:i.find(a=>a.dayOfWeek===e&&a.mealType===t)}_renderMobileList(){return Ca.map((e,t)=>{const r=t+1,i=this._expandedDay===r,a=Ma.map(n=>({type:n,meal:this._getMeal(r,n.value)}));return d`
        <div class="mobile-day">
          <div class="mobile-day-header" @click=${()=>{this._expandedDay=i?null:r}}>
            <span>${e}</span>
            <span class="mobile-day-summary">${a.filter(n=>n.meal).length} comidas</span>
            <span class="mobile-day-arrow ${i?"open":""}">▶</span>
          </div>
          ${i?d`
            <div class="mobile-day-body">
              ${a.map(({type:n,meal:o})=>{var g,_;const s=`${r}-${n.value}`,l=this._multipliers[s]??(o==null?void 0:o.servingsMultiplier)??1,c=this._dragOverSlot===s,u=this._editMode?this._onDragOver:void 0,p=this._editMode?v=>this._onDrop(v,r,n.value):void 0,m=this._editMode?()=>this._onDragEnter(r,n.value):void 0,w=this._editMode?()=>this._onDragLeave(r,n.value):void 0,h=this._editMode?()=>this._openPanel(r,n.value):void 0;return d`
                  <div class="mobile-meal ${this._editMode?"clickable":""} ${c?"drag-over":""}"
                    @click=${h}
                    @dragover=${u}
                    @dragenter=${m}
                    @dragleave=${w}
                    @drop=${p}
                  >
                    <div class="mobile-meal-type">${n.label}</div>
                    ${o?d`
                        <div class="mobile-meal-name">${((g=o.recipe)==null?void 0:g.name)||"?"}</div>
                        <button class="slot-view" @click=${v=>{var I;return this._openRecipeDetail((I=o.recipe)==null?void 0:I.id,o.id,v)}} title="Ver receta">👁</button>
                        ${o.isEatingOut?d`<span class="eating-out-badge-mobile">Comer fuera</span>`:""}
                        <div class="mobile-meal-kcal">${(_=o.recipe)!=null&&_.calorias?`${Math.round(o.recipe.calorias*l)} kcal`:""}</div>
                        ${this._editMode?d`
                            <div class="mobile-meal-mult-edit">
                              <button class="mult-btn" @click=${v=>{v.stopPropagation(),this._adjustMultiplier(r,n.value,-.5)}} ?disabled=${l<=.5}>−</button>
                              <span class="mult-value">x${l.toFixed(1)}</span>
                              <button class="mult-btn" @click=${v=>{v.stopPropagation(),this._adjustMultiplier(r,n.value,.5)}} ?disabled=${l>=5}>+</button>
                            </div>
                            <button class="slot-remove" @click=${v=>{v.stopPropagation(),this._removeSlotMeal(r,n.value)}}>✕</button>
                          `:d`
                            <div class="mobile-meal-mult">x${l.toFixed(1)}</div>
                          `}
                      `:d`
                        <div class="mobile-meal-empty">${this._editMode?"+ Añadir receta":"—"}</div>
                      `}
                  </div>
                `})}
            </div>
          `:""}
        </div>
      `})}_renderExpiryWarning(){if(this._expiryDismissed||!this._plan||this._plan.autoGenerated||this._expiring.length===0)return"";const e=new Set(this._unusedExpiring().map(t=>t.id));return d`
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
    `}_renderStandardProfileWarning(){const e=this._members.filter(i=>i.isStandardProfile);if(e.length===0)return"";const t=e.map(i=>i.name),r=t.length===1?"":` para ${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`;return d`
      <div class="expiry-warning standard-profile-warning">
        <strong>⚠️ Plan estándar${r}</strong>
        <p class="expiry-warning-note">
          Está calculado para una persona adulta de unos 70 kg (2.000 kcal al día), no con datos
          reales. Completa el perfil para ajustar calorías, raciones y lista de la compra.
          <a href="#/perfil">Ir a Perfil</a>
        </p>
      </div>
    `}render(){var t,r,i,a;if(this._loading)return d`<p>Cargando plan...</p>`;const e=this.hasMeals();return d`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Plan semanal</h2>
          ${this._members.length>0?d`
            <select class="member-select" @change=${this._onMemberChange}>
              <option value="" ?selected=${this._selectedMemberId===""}>Todos los miembros</option>
              ${this._members.map(n=>d`
                <option value=${n.id} ?selected=${this._selectedMemberId===n.id}>${n.name}</option>
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
          <div class="desktop-grid">
            <div class="grid">
            <div class="label-cell"></div>
            ${Ca.map(n=>d`<div class="header-cell">${n}</div>`)}

            ${Ma.map(n=>d`
                <div class="label-cell">${n.label}</div>
                ${[1,2,3,4,5,6,7].map(o=>this._renderSlot(o,n.value))}
              `)}
          </div>

          ${(t=this._progress)!=null&&t.current?d`
            <div class="macro-overview" style="margin-top:1.5rem">
              <h3>Progreso semanal</h3>
              ${["calories","proteinG","carbsG","fatG"].map(n=>this._macroBar(n))}
              ${this._progress.withinRange!=null?d`
                <span class="within-range ${this._progress.withinRange?"ok":"nok"}">
                  ${this._progress.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
                </span>
              `:""}
            </div>
          `:""}
          ${(r=this._progressArray)!=null&&r.length?d`
            ${this._progressArray.map(n=>n!=null&&n.current?d`
              <div class="macro-overview" style="margin-top:1.5rem">
                <h3>${n.memberName||"Miembro"}</h3>
                ${["calories","proteinG","carbsG","fatG"].map(o=>this._macroBar(o,n))}
                ${n.withinRange!=null?d`
                  <span class="within-range ${n.withinRange?"ok":"nok"}">
                    ${n.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
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

      ${this._showPanel?d`
        <div class="panel-overlay" @click=${this._closePanel}></div>
        <div class="panel">
          <div class="panel-header">
            <h3>Elegir receta</h3>
            <button class="close-btn" @click=${this._closePanel}>✕</button>
          </div>
          <div class="panel-context">
            ${Ca[this._panelDay-1]}, ${(i=Ma.find(n=>n.value===this._panelMealType))==null?void 0:i.label}
            <span style="display:block;font-size:0.6875rem;margin-top:0.25rem;color:var(--text-muted)">Arrastra una receta a una celda o haz clic para asignar</span>
            ${this._allRecipes.length>0&&this._mealTypeFilteredCount<this._allRecipes.length?d`
              <label class="eating-out-check" style="display:flex;align-items:center;gap:0.375rem;margin-top:0.5rem;font-size:0.75rem;cursor:pointer">
                <input type="checkbox" .checked=${this._showAllRecipes} @change=${n=>{this._showAllRecipes=n.target.checked}}>
                Mostrar todas las recetas (${this._allRecipes.length})
              </label>
            `:""}
            <label class="eating-out-check" style="display:flex;align-items:center;gap:0.375rem;margin-top:0.375rem;font-size:0.75rem;cursor:pointer">
              <input type="checkbox" ?checked=${this._isEatingOut} @change=${n=>{var s;this._isEatingOut=n.target.checked;const o=this._getMeal(this._panelDay,this._panelMealType);(s=o==null?void 0:o.recipe)!=null&&s.id&&this._isEatingOut!==o.isEatingOut&&this._assignSlot(this._panelDay,this._panelMealType,o.recipe.id)}}>
              Comer fuera — excluir de la lista de la compra, sí contar en nutrición
            </label>
          </div>
          <div class="panel-search">
            <input
              type="text"
              placeholder="Buscar receta..."
              .value=${this._recipeSearch}
              @input=${n=>{this._recipeSearch=n.target.value}}
            />
          </div>
          <div class="panel-list">
            ${this._panelLoading?d`<div class="panel-loading">Cargando recetas...</div>`:this._filteredRecipes.length===0?d`<div class="panel-empty">${this._recipeSearch?"No hay recetas que coincidan":"No hay recetas disponibles"}</div>`:this._filteredRecipes.map(n=>d`
                  <div
                    class="panel-item ${this._assigning?"disabled":""}"
                    draggable="true"
                    @dragstart=${o=>!this._assigning&&this._onDragStart(o,n.id)}
                    @click=${this._assigning?void 0:()=>this._assignFromPanel(n.id)}
                  >
                    <div>
                      <div class="pi-name">${n.name}</div>
                      <div class="pi-meta">${n.timeMinutes?`${n.timeMinutes} min`:""} ${n.difficulty?`· ${n.difficulty}`:""}</div>
                    </div>
                    <div class="pi-kcal">${n.calorias?`${n.calorias} kcal`:""}</div>
                  </div>
                `)}
          </div>
        </div>
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
              @input=${n=>{this._templateName=n.target.value}}
              @keydown=${n=>{n.key==="Enter"&&this._saveTemplate()}}
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
                    ${this._templates.map(n=>d`
                      <div class="template-item ${this._applyingTemplate?"disabled":""}" @click=${this._applyingTemplate?void 0:()=>this._applyTemplate(n.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${n.name}</div>
                          <div class="template-item-meta">${n.isSystem?"Plantilla del sistema":"Plantilla personal"}</div>
                        </div>
                        ${n.isSystem?"":d`
                          <button class="template-item-delete" @click=${o=>this._deleteTemplate(n.id,o)} title="Eliminar plantilla">✕</button>
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
                    ${this._history.map(n=>d`
                      <div class="template-item ${this._repeating?"disabled":""}" @click=${this._repeating?void 0:()=>this._repeatWeek(n.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${this._formatWeekRange(n.weekStart)}</div>
                          <div class="template-item-meta">${n.mealCount} comidas · ${n.autoGenerated?"generado automáticamente":"manual"}</div>
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
        <div class="modal-overlay" @click=${this._closeRecipeDetail}></div>
        <div class="detail-modal" @click=${n=>n.stopPropagation()}>
          ${this._detailLoading?d`<div style="padding:2rem;text-align:center;color:var(--text-muted)">Cargando receta...</div>`:this._detailRecipe?d`
              <div class="detail-header">
                <h3>${this._detailRecipe.name}</h3>
                <button class="close-btn" @click=${this._closeRecipeDetail}>✕</button>
              </div>
              <div class="detail-body">
                <div class="detail-meta">
                  ${this._detailRecipe.difficulty?d`<span class="badge">${this._detailRecipe.difficulty==="FACIL"?"Fácil":this._detailRecipe.difficulty==="MEDIA"?"Media":"Difícil"}</span>`:""}
                  ${this._detailRecipe.timeMinutes?d`<span>⏱ ${this._detailRecipe.timeMinutes} min</span>`:""}
                  ${this._detailRecipe.servings?d`<span>🍽 ${this._detailRecipe.servings} porciones</span>`:""}
                </div>
                ${this._detailRecipe.description?d`<div class="detail-desc">${this._detailRecipe.description}</div>`:""}
                <div class="detail-macros">
                  ${this._detailRecipe.calorias!=null?d`<span class="macro"><strong>${this._detailRecipe.calorias}</strong> kcal</span>`:""}
                  ${this._detailRecipe.proteinas!=null?d`<span class="macro"><strong>${this._detailRecipe.proteinas}g</strong> proteína</span>`:""}
                  ${this._detailRecipe.carbos!=null?d`<span class="macro"><strong>${this._detailRecipe.carbos}g</strong> carbohidratos</span>`:""}
                  ${this._detailRecipe.grasas!=null?d`<span class="macro"><strong>${this._detailRecipe.grasas}g</strong> grasa</span>`:""}
                </div>
                ${(a=this._detailRecipe.ingredients)!=null&&a.length?d`
                  <div class="detail-section">
                    <h4>Ingredientes</h4>
                    <ul>
                      ${this._detailRecipe.ingredients.map(n=>{var o;return d`
                        <li>${n.quantity} ${n.unit==="UNIDAD"?"ud":n.unit} ${((o=n.food)==null?void 0:o.name)||"—"}</li>
                      `})}
                    </ul>
                  </div>
                `:""}
                ${this._detailRecipe.instructions?d`
                  <div class="detail-section">
                    <h4>Paso a paso</h4>
                    <ol>
                      ${this._detailRecipe.instructions.split(`
`).filter(n=>n.trim()).map(n=>d`<li>${n}</li>`)}
                    </ol>
                  </div>
                `:""}
              </div>
              <div class="detail-footer">
                <button class="btn-outline" @click=${this._closeRecipeDetail}>Cerrar</button>
                ${this._detailRecipe.familyId?d`
                  <button class="btn-outline" @click=${this._openEditFromDetail}>Editar</button>
                `:""}
                ${this._detailMealId?d`
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

      ${this._showCookedSummary?d`
        <div class="modal-overlay" @click=${()=>{this._showCookedSummary=!1}}></div>
        <div class="modal" @click=${n=>n.stopPropagation()}>
          <div class="modal-header">
            <h3>Ingredientes restados de la nevera</h3>
            <button class="close-btn" @click=${()=>{this._showCookedSummary=!1}}>✕</button>
          </div>
          <div class="modal-body">
            <ul class="cooked-summary">
              ${(this._cookingSummary||[]).map(n=>d`
                <li>
                  <span>${n.name}</span>
                  <span>
                    <span class="subtracted">${n.subtracted>0?`-${n.subtracted}${n.unit}`:"sin stock"}</span>
                    <span class="remaining"> (${n.remaining}${n.unit} restantes)</span>
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
    `}};z.styles=[Bt,H`
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

    .within-range.ok { background: var(--etxa-color-success-border); color: var(--etxa-color-success); }
    .within-range.nok { background: var(--etxa-color-warning-soft); color: var(--etxa-color-warning-strong); }

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
      border-radius: var(--etxa-radius-sm);
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
      border-color: var(--etxa-color-success);
      background: var(--etxa-color-success-soft);
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
      color: var(--etxa-color-danger);
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
      background: var(--etxa-color-warning-soft);
      color: var(--etxa-color-warning-strong);
    }

    .eating-out-badge-mobile {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.0625rem 0.25rem;
      border-radius: 3px;
      background: var(--etxa-color-warning-soft);
      color: var(--etxa-color-warning-strong);
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
      background: rgb(46 46 46 / 38%);
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
      box-shadow: -4px 0 24px rgb(46 46 46 / 38%);
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
      border-radius: var(--etxa-radius-sm);
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
      border-radius: var(--etxa-radius-sm);
      cursor: grab;
      transition: border-color 0.15s, background 0.15s;
      margin-bottom: 0.375rem;
      user-select: none;
    }

    .panel-item:active { cursor: grabbing; }

    .panel-item:hover {
      border-color: var(--primary);
      background: var(--etxa-color-surface-muted);
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
      border-radius: var(--etxa-radius-md);
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
      background: var(--etxa-color-surface-muted);
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
      border-bottom: 1px solid var(--etxa-color-surface-hover);
      font-size: 0.85rem;
    }

    .mobile-meal:last-child { border-bottom: none; }
    .mobile-meal.clickable { cursor: pointer; }
    .mobile-meal.clickable:hover { background: var(--etxa-color-surface-muted); }
    .mobile-meal.drag-over { background: var(--etxa-color-success-soft); }

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
      color: var(--etxa-color-danger);
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

    .mult-btn:hover:not(:disabled) { background: var(--etxa-color-surface-hover); }
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

    /* Recipe detail modal */
    .detail-modal {
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
    .detail-meta .badge { font-size: 0.6875rem; font-weight: 600; padding: 0.125rem 0.5rem; border-radius: 999px; background: var(--etxa-color-primary-soft); color: var(--primary); }

    .detail-desc { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5; }

    .detail-macros { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
    .detail-macros .macro { background: var(--etxa-color-surface-muted); padding: 0.25rem 0.625rem; border-radius: var(--etxa-radius-sm); font-size: 0.8125rem; color: var(--text-muted); }
    .detail-macros .macro strong { color: var(--text); }

    .detail-section { margin-bottom: 1rem; }
    .detail-section h4 { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 0.5rem; }
    .detail-section ul { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--text); }
    .detail-section li { line-height: 1.6; }

    .detail-section ol { margin: 0; padding-left: 1.25rem; font-size: 0.8125rem; color: var(--text); }
    .detail-section ol li { line-height: 1.6; margin-bottom: 0.25rem; }

    .detail-footer { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-top: 1px solid var(--border); flex-shrink: 0; gap: 0.5rem; }

    .btn-cooked {
      background: var(--etxa-color-success);
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: var(--etxa-radius-sm);
      font-size: 0.8125rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.15s;
    }

    .btn-cooked:hover { background: var(--etxa-color-success); }
    .btn-cooked:disabled { opacity: 0.6; cursor: not-allowed; }

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
      .desktop-grid { display: none; }
      .mobile-list { display: block; }
      .panel { width: 100vw; max-width: 100vw; border-left: none; }
      .panel-overlay { display: none; }
    }
  `];L([y()],z.prototype,"_plan",2);L([y()],z.prototype,"_loading",2);L([y()],z.prototype,"_error",2);L([y()],z.prototype,"_fitNotice",2);L([y()],z.prototype,"_generating",2);L([y()],z.prototype,"_deleting",2);L([y()],z.prototype,"_useExpiring",2);L([y()],z.prototype,"_expiring",2);L([y()],z.prototype,"_expiryDismissed",2);L([y()],z.prototype,"_progress",2);L([y()],z.prototype,"_progressArray",2);L([y()],z.prototype,"_showMenu",2);L([y()],z.prototype,"_editMode",2);L([y()],z.prototype,"_showPanel",2);L([y()],z.prototype,"_panelDay",2);L([y()],z.prototype,"_panelMealType",2);L([y()],z.prototype,"_showAllRecipes",2);L([y()],z.prototype,"_allRecipes",2);L([y()],z.prototype,"_recipeSearch",2);L([y()],z.prototype,"_panelLoading",2);L([y()],z.prototype,"_assigning",2);L([y()],z.prototype,"_isEatingOut",2);L([y()],z.prototype,"_dragOverSlot",2);L([y()],z.prototype,"_expandedDay",2);L([y()],z.prototype,"_multipliers",2);L([y()],z.prototype,"_members",2);L([y()],z.prototype,"_selectedMemberId",2);L([y()],z.prototype,"_showSaveTemplate",2);L([y()],z.prototype,"_showLoadTemplate",2);L([y()],z.prototype,"_templateName",2);L([y()],z.prototype,"_templates",2);L([y()],z.prototype,"_savingTemplate",2);L([y()],z.prototype,"_loadingTemplates",2);L([y()],z.prototype,"_applyingTemplate",2);L([y()],z.prototype,"_showRepeatWeek",2);L([y()],z.prototype,"_history",2);L([y()],z.prototype,"_loadingHistory",2);L([y()],z.prototype,"_repeating",2);L([y()],z.prototype,"_detailRecipe",2);L([y()],z.prototype,"_detailMealId",2);L([y()],z.prototype,"_showRecipeDetail",2);L([y()],z.prototype,"_detailLoading",2);L([y()],z.prototype,"_cooking",2);L([y()],z.prototype,"_cookingSummary",2);L([y()],z.prototype,"_showCookedSummary",2);z=L([J("plan-view")],z);var _p=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,re=(e,t,r,i)=>{for(var a=i>1?void 0:i?wp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&_p(t,r,a),a};let Z=class extends Q{constructor(){super(...arguments),this._items=[],this._expiringIds=new Set,this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._adding=!1,this._splitItem=null,this._splitQuantity=1,this._splitExpiryDate="",this._splitting=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1}connectedCallback(){super.connectedCallback(),this._loadPantry()}async _loadPantry(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([Qe.list(),Qe.expiring()]);this._items=e,this._expiringIds=new Set((t.items||[]).filter(r=>!r.expired).map(r=>r.id))}catch(e){this._error=e.message||"Error al cargar la nevera"}finally{this._loading=!1}}_groupedItems(){var t;const e=new Map;for(const r of this._items){const i=r.foodId,a=e.get(i);a?(a.total+=r.quantity,a.batches.push(r)):e.set(i,{foodId:i,name:((t=r.food)==null?void 0:t.name)||"?",total:r.quantity,unit:r.unit,batches:[r]})}for(const r of e.values())r.batches.sort((i,a)=>i.expiryDate&&a.expiryDate?i.expiryDate.localeCompare(a.expiryDate):i.expiryDate?-1:a.expiryDate?1:0);return Array.from(e.values()).sort((r,i)=>r.name.localeCompare(i.name))}_batchStatus(e){return e.expiryDate?new Date(e.expiryDate)<new Date(new Date().toDateString())?"expired":this._expiringIds.has(e.id)?"soon":"ok":"none"}_formatUnit(e){return e==="UNIDAD"?"ud":e}async _searchFood(e){const t=e.target.value;if(this._searchQuery=t,t.length<2){this._searchResults=[];return}try{this._searchResults=await ji.search(t)}catch{this._searchResults=[]}}async _selectFood(e){this._selectedFood=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unidadBase||"g"}async _addItem(e){if(e.preventDefault(),!!this._selectedFood){this._adding=!0;try{const t={quantity:Number(this._quantity),unit:this._unit,expiryDate:this._expiryDate||null,purchaseDate:this._purchaseDate||null};this._editingItem?await Qe.update(this._editingItem.id,t):await Qe.add({foodId:this._selectedFood.id,...t}),this._resetFormFields(),this._showAddForm=!1,this._editingItem=null,await this._loadPantry()}catch(t){this._error=t.message||"Error al guardar el lote"}finally{this._adding=!1}}}async _removeItem(e){try{await Qe.remove(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar el lote"}}_editItem(e){var t;this._editingItem=e,this._selectedFood=e.food,this._searchQuery=((t=e.food)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._expiryDate=e.expiryDate?e.expiryDate.split("T")[0]:"",this._purchaseDate=e.purchaseDate?e.purchaseDate.split("T")[0]:"",this._showAddForm=!0}_openSplit(e){this._splitItem=e,this._splitQuantity=1,this._splitExpiryDate=""}_closeSplit(){this._splitItem=null,this._splitting=!1}async _confirmSplit(e){if(e.preventDefault(),!!this._splitItem){this._splitting=!0;try{await Qe.split(this._splitItem.id,{quantity:Number(this._splitQuantity),expiryDate:this._splitExpiryDate||null}),this._closeSplit(),await this._loadPantry()}catch(t){this._error=t.message||"Error al dividir el lote",this._splitting=!1}}}_resetFormFields(){this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._editingItem=null,this._showCreateFood=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetFormFields()}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._searchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},r=await ji.create(t);this._selectFood(r),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}_renderBatch(e){const t=this._batchStatus(e),r=e.expiryDate?new Date(e.expiryDate).toLocaleDateString():null;return d`
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
                ${r.batches.map(i=>this._renderBatch(i))}
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
    `}};Z.styles=[Bt,H`
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
  `];re([y()],Z.prototype,"_items",2);re([y()],Z.prototype,"_expiringIds",2);re([y()],Z.prototype,"_loading",2);re([y()],Z.prototype,"_error",2);re([y()],Z.prototype,"_showAddForm",2);re([y()],Z.prototype,"_editingItem",2);re([y()],Z.prototype,"_searchQuery",2);re([y()],Z.prototype,"_searchResults",2);re([y()],Z.prototype,"_selectedFood",2);re([y()],Z.prototype,"_quantity",2);re([y()],Z.prototype,"_unit",2);re([y()],Z.prototype,"_expiryDate",2);re([y()],Z.prototype,"_purchaseDate",2);re([y()],Z.prototype,"_adding",2);re([y()],Z.prototype,"_splitItem",2);re([y()],Z.prototype,"_splitQuantity",2);re([y()],Z.prototype,"_splitExpiryDate",2);re([y()],Z.prototype,"_splitting",2);re([y()],Z.prototype,"_showCreateFood",2);re([y()],Z.prototype,"_createFoodForm",2);re([y()],Z.prototype,"_creatingFood",2);Z=re([J("pantry-view")],Z);var xp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,ae=(e,t,r,i)=>{for(var a=i>1?void 0:i?$p(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&xp(t,r,a),a};const Ip={FACIL:"Fácil",MEDIA:"Media",DIFICIL:"Difícil"},kp=["g","ml","UNIDAD"],yr=24;let te=class extends Q{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._editRecipe=null,this._isCreating=!1,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._searching=!1,this._savingEdit=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1,this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._totalCount=0,this._visibleCount=yr,this._searchTimeout=null,this._filterTimeout=null}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const e={};this._searchTerm&&(e.search=this._searchTerm),this._ingredientFilter&&(e.ingredient=this._ingredientFilter),this._maxTimeFilter&&(e.maxTime=this._maxTimeFilter),this._items=await Wt.list(Object.keys(e).length>0?e:void 0),this._totalCount=this._items.length,this._visibleCount=yr}catch(e){this._error=e.message||"Error al cargar recetas",this._items=[]}finally{this._loading=!1}}_onSearchInput(e){const t=e.target.value;this._searchTerm=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onIngredientInput(e){const t=e.target.value;this._ingredientFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onDifficultyChange(e){this._difficultyFilter=e.target.value,this._visibleCount=yr}_onMaxTimeInput(e){const t=e.target.value;this._maxTimeFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_clearFilters(){this._visibleCount=yr,this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._load()}get _filteredItems(){return this._difficultyFilter?this._items.filter(e=>e.difficulty===this._difficultyFilter):this._items}get _visibleItems(){return this._filteredItems.slice(0,this._visibleCount)}async _deleteRecipe(e,t){if(confirm(`¿Eliminar "${t}"?`))try{await Wt.remove(e),this._items=this._items.filter(r=>r.id!==e)}catch(r){this._error=r.message||"Error al eliminar receta"}}_openEdit(e){this._isCreating=!1,this._editRecipe=e,this._editForm={name:e.name??"",description:e.description??"",instructions:e.instructions??"",difficulty:e.difficulty??"FACIL",timeMinutes:e.timeMinutes??30,servings:e.servings??1},this._editIngredients=(e.ingredients??[]).map(t=>{var r;return{foodId:t.foodId,foodName:((r=t.food)==null?void 0:r.name)??"",quantity:t.quantity,unit:t.unit}}),this._foodSearchQuery="",this._foodSearchResults=[]}_openCreate(){this._isCreating=!0,this._editRecipe={id:null},this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[]}_closeEdit(){this._isCreating=!1,this._editRecipe=null,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._showCreateFood=!1}_onFieldChange(e,t){this._editForm={...this._editForm,[e]:t}}_onIngredientChange(e,t,r){const i=[...this._editIngredients];i[e]={...i[e],[t]:r},this._editIngredients=i}_removeIngredient(e){this._editIngredients=this._editIngredients.filter((t,r)=>r!==e)}_onFoodSearchInput(e){this._foodSearchQuery=e.target.value,this._searchTimeout&&clearTimeout(this._searchTimeout),this._searchTimeout=setTimeout(()=>{this._searchFoods()},300)}async _searchFoods(){const e=this._foodSearchQuery.trim();if(!e){this._foodSearchResults=[];return}this._searching=!0;try{this._foodSearchResults=await ji.search(e)}catch{this._foodSearchResults=[]}finally{this._searching=!1}}async _addIngredient(e){const t=e.id,r=e.name;this._editIngredients=[...this._editIngredients,{foodId:t,foodName:r,quantity:100,unit:"g"}],this._foodSearchQuery="",this._foodSearchResults=[]}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._foodSearchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},r=await ji.create(t);this._addIngredient(r),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}async _saveEdit(){if(!(!this._editRecipe||!this._editForm.name.trim())){this._savingEdit=!0;try{const e={name:this._editForm.name.trim(),description:this._editForm.description.trim()||void 0,instructions:this._editForm.instructions.trim()||void 0,difficulty:this._editForm.difficulty,timeMinutes:this._editForm.timeMinutes,servings:this._editForm.servings,ingredients:this._editIngredients.map(t=>({foodId:t.foodId,quantity:t.quantity,unit:t.unit}))};if(this._isCreating){const t=await Wt.create(e);this._items=[...this._items,t]}else{const t=await Wt.update(this._editRecipe.id,e);this._items=this._items.map(r=>r.id===this._editRecipe.id?{...r,...t}:r)}this._closeEdit()}catch(e){this._error=e.message||"Error al guardar receta"}finally{this._savingEdit=!1}}}_renderInstructions(e){const t=e.split(`
`).filter(r=>r.trim());return d`<ol>${t.map(r=>d`<li>${r}</li>`)}</ol>`}_macroBar(e,t,r){if(e==null)return"";const i=Math.round(e/t*100);return d`<span class="macro" title="${r}: ${e}g/${t}g">${r}: ${e}g <span class="pct">${i}%</span></span>`}_microsTooltip(e){const t=[["Sodio","mg",e.sodioMg],["Potasio","mg",e.potasioMg],["Calcio","mg",e.calcioMg],["Hierro","mg",e.hierroMg],["Zinc","mg",e.zincMg],["Fosforo","mg",e.fosforoMg],["Vit A","ug",e.vitaminaAIug],["Vit C","mg",e.vitaminaCMg],["Vit D","ug",e.vitaminaDIug],["Vit E","mg",e.vitaminaEMg],["Vit B6","mg",e.vitaminaB6Mg],["Vit B12","ug",e.vitaminaB12Iug],["Niacina","mg",e.niacinaMg],["Folico","ug",e.acidoFolicoIug]];if(!t.some(([,,a])=>a!=null&&a!==0))return"";const i=t.filter(([,,a])=>a!=null&&a!==0).map(([a,n,o])=>`${a}: ${o}${n}`);return d`<span class="micros-tooltip"><span class="macro">micros</span><span class="micros-tip">${i.join(" · ")}</span></span>`}render(){if(this._loading)return d`<p>Cargando recetas...</p>`;const e=this._filteredItems.length;return d`
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
                  ${t.difficulty?d`<span class="badge">${Ip[t.difficulty]||t.difficulty}</span>`:""}
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
                      ${t.ingredients.map(i=>{var a;return d`
                        <li>${i.quantity} ${i.unit==="UNIDAD"?"ud":i.unit} ${((a=i.food)==null?void 0:a.name)||"—"}</li>
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
              <button class="btn-clear-filters" @click=${()=>{this._visibleCount+=yr}}>
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
                        @input=${i=>this._onIngredientChange(r,"quantity",parseFloat(i.target.value)||1)}
                      />
                      <select .value=${t.unit} @change=${i=>this._onIngredientChange(r,"unit",i.target.value)}>
                        ${kp.map(i=>d`<option value=${i}>${i}</option>`)}
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
    `}};te.styles=[Bt,H`
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
  `];ae([y()],te.prototype,"_items",2);ae([y()],te.prototype,"_loading",2);ae([y()],te.prototype,"_error",2);ae([y()],te.prototype,"_editRecipe",2);ae([y()],te.prototype,"_isCreating",2);ae([y()],te.prototype,"_editForm",2);ae([y()],te.prototype,"_editIngredients",2);ae([y()],te.prototype,"_foodSearchQuery",2);ae([y()],te.prototype,"_foodSearchResults",2);ae([y()],te.prototype,"_searching",2);ae([y()],te.prototype,"_savingEdit",2);ae([y()],te.prototype,"_showCreateFood",2);ae([y()],te.prototype,"_createFoodForm",2);ae([y()],te.prototype,"_creatingFood",2);ae([y()],te.prototype,"_searchTerm",2);ae([y()],te.prototype,"_ingredientFilter",2);ae([y()],te.prototype,"_difficultyFilter",2);ae([y()],te.prototype,"_maxTimeFilter",2);ae([y()],te.prototype,"_totalCount",2);ae([y()],te.prototype,"_visibleCount",2);te=ae([J("recetas-view")],te);var Ep=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,be=(e,t,r,i)=>{for(var a=i>1?void 0:i?Sp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Ep(t,r,a),a};function Aa(e,t){const r=t??"g";if(r==="UNIDAD"){const i=Math.round(e*10)/10;return`${i} ${i===1?"unidad":"unidades"}`}return`${Math.round(e)}${r}`}const Do={VERDURAS:0,FRUTAS:1,CARNES:2,PESCADOS:3,LACTEOS:4,HUEVOS:5,CEREALES:6,LEGUMBRES:7,FRUTOS_SECOS:8,ACEITES:9,CONDIMENTOS:10,BEBIDAS:11,OTROS:12},Cp={VERDURAS:"Verduras",FRUTAS:"Frutas",CARNES:"Carnes",PESCADOS:"Pescados",LACTEOS:"Lácteos",HUEVOS:"Huevos",CEREALES:"Cereales",LEGUMBRES:"Legumbres",FRUTOS_SECOS:"Frutos secos",ACEITES:"Aceites",CONDIMENTOS:"Condimentos",BEBIDAS:"Bebidas",OTROS:"Otros"};let pe=class extends Q{constructor(){super(...arguments),this._items=[],this._loading=!0,this._generating=!1,this._error="",this._collapsed={},this._addingToPantry=!1,this._showConfirmAdd=!1,this._expiryDrafts={},this._sections=[],this._newItemName="",this._newItemQuantity=1,this._catalogResults=[],this._selectedCatalogItem=null,this._addingItem=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0;try{const e=await Ke.current();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch{this._items=[],this._sections=[]}finally{this._loading=!1}}async _generate(){this._generating=!0,this._error="";try{const e=await Ke.generate();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch(e){this._error=e.message||"Error"}finally{this._generating=!1}}async _toggle(e){const t=this._items.findIndex(i=>i.id===e);if(t===-1)return;const r=this._items[t].purchased;this._items=this._items.map(i=>i.id===e?{...i,purchased:!i.purchased}:i);try{await Ke.toggleItem(e)}catch{this._items=this._items.map(i=>i.id===e?{...i,purchased:r}:i),this._error="Error al actualizar"}}_toggleCategory(e){this._collapsed={...this._collapsed,[e]:!this._collapsed[e]}}async _toggleCategoryItems(e){var n;const r=((n=this._getGroupedItems().find(([o])=>o===e))==null?void 0:n[1])||[];if(r.length===0)return;const a=!r.every(o=>o.purchased);this._items=this._items.map(o=>{var s;return((s=o.food)==null?void 0:s.category)===e?{...o,purchased:a}:o});try{for(const o of r)o.purchased!==a&&await Ke.toggleItem(o.id)}catch{await this._load(),this._error="Error al actualizar categoría"}}_allItemsChecked(){return this._items.length>0&&this._items.every(e=>e.purchased)}_categoryAllChecked(e){var i;const r=((i=this._getGroupedItems().find(([a])=>a===e))==null?void 0:i[1])||[];return r.length>0&&r.every(a=>a.purchased)}_toggleAll(){const e=this._allItemsChecked(),t=!e,r=this._items.map(i=>i.id);this._items=this._items.map(i=>({...i,purchased:t})),(async()=>{try{for(const i of r){const a=this._items.find(n=>n.id===i);a&&a.purchased!==e&&await Ke.toggleItem(i)}}catch{await this._load(),this._error="Error al actualizar"}})()}_getPurchasedItems(){return this._items.filter(e=>e.purchased&&e.toBuy>0)}async _addToPantry(){this._getPurchasedItems().length!==0&&(this._expiryDrafts={},this._showConfirmAdd=!0)}async _confirmAddToPantry(){var r;const e=this._getPurchasedItems();if(e.length===0)return;this._addingToPantry=!0,this._showConfirmAdd=!1;const t=new Date().toISOString().split("T")[0];try{for(const i of e)await Qe.add({foodId:i.foodId,quantity:i.toBuy,unit:((r=i.food)==null?void 0:r.unidadBase)||"g",expiryDate:this._expiryDrafts[i.id]||null,purchaseDate:t});this._items=this._items.map(i=>({...i,purchased:!1})),this._expiryDrafts={}}catch{this._error="Error al añadir a la nevera"}finally{this._addingToPantry=!1}}_getGroupedItems(){var t;const e=new Map;for(const r of this._items){const i=((t=r.food)==null?void 0:t.category)||"OTROS";e.has(i)||e.set(i,[]),e.get(i).push(r)}return Array.from(e.entries()).sort((r,i)=>(Do[r[0]]??99)-(Do[i[0]]??99))}async _searchHouseholdCatalog(e){const t=e.target.value;if(this._newItemName=t,this._selectedCatalogItem=null,t.length<2){this._catalogResults=[];return}try{this._catalogResults=await at.items(t)}catch{this._catalogResults=[]}}_selectCatalogResult(e){this._selectedCatalogItem=e,this._newItemName=e.name,this._catalogResults=[]}async _addSectionItem(e){var t;if(e.preventDefault(),!!this._newItemName.trim()){this._addingItem=!0;try{let r=this._sections[0];r||(r=await Ke.createSection("Hogar y otros"));const i=await Ke.addSectionItem(r.id,{name:this._newItemName.trim(),quantity:Number(this._newItemQuantity)||1,householdItemId:(t=this._selectedCatalogItem)==null?void 0:t.id});this._sections.findIndex(n=>n.id===r.id)===-1?this._sections=[...this._sections,{...r,items:[i]}]:this._sections=this._sections.map(n=>n.id===r.id?{...n,items:[...n.items,i]}:n),this._newItemName="",this._newItemQuantity=1,this._selectedCatalogItem=null,this._catalogResults=[]}catch(r){this._error=r.message||"Error al añadir artículo"}finally{this._addingItem=!1}}}async _toggleSectionItem(e){const t=!e.purchased;this._sections=this._sections.map(r=>({...r,items:r.items.map(i=>i.id===e.id?{...i,purchased:t}:i)}));try{await Ke.toggleSectionItem(e.id,t)}catch{this._sections=this._sections.map(r=>({...r,items:r.items.map(i=>i.id===e.id?{...i,purchased:!t}:i)})),this._error="Error al actualizar artículo"}}async _removeSectionItem(e){try{await Ke.removeSectionItem(e.id),this._sections=this._sections.map(t=>({...t,items:t.items.filter(r=>r.id!==e.id)}))}catch{this._error="Error al eliminar artículo"}}render(){if(this._loading)return d`<p>Cargando lista...</p>`;const e=this._getGroupedItems(),t=this._getPurchasedItems().length;return d`
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
      ${this._items.length===0?d`<div class="empty-state"><p>La lista está vacía. Genera la lista desde el plan semanal.</p></div>`:e.map(([r,i])=>{const a=this._collapsed[r],n=this._categoryAllChecked(r);return d`
              <div class="category">
                <div class="category-header" @click=${()=>this._toggleCategory(r)}>
                  <span class="arrow ${a?"":"expanded"}">▶</span>
                  <span class="cat-check ${n?"checked":""}" @click=${o=>{o.stopPropagation(),this._toggleCategoryItems(r)}}>
                    ${n?"✓":""}
                  </span>
                  <span>${Cp[r]||r}</span>
                  <span class="count">${i.length} ${i.length===1?"artículo":"artículos"}</span>
                </div>
                <div class="items ${a?"collapsed":""}">
                  ${i.map(o=>{var s;return d`
                    <div class="item ${o.purchased?"checked":""}">
                      <button
                        class="item-toggle"
                        type="button"
                        aria-pressed=${o.purchased?"true":"false"}
                        @click=${()=>this._toggle(o.id)}
                      >
                        <span class="check" aria-hidden="true">${o.purchased?"✓":""}</span>
                        <span class="item-name">${((s=o.food)==null?void 0:s.name)||"?"}</span>
                        <span class="item-qty">${Aa(o.totalNeeded,o.unit)} ${o.toBuy?`(comprar: ${Aa(o.toBuy,o.unit)})`:"(✔ en nevera)"}</span>
                      </button>
                    </div>
                  `})}
                </div>
              </div>
            `})}

      <div class="category">
        <div class="category-header">
          <span>Hogar y otros</span>
          <span class="count">${this._sections.reduce((r,i)=>r+i.items.length,0)} artículo(s)</span>
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
              ${this._getPurchasedItems().map(r=>{var i;return d`
                <div class="confirm-item">
                  <span class="confirm-name">${((i=r.food)==null?void 0:i.name)||"?"}</span>
                  <span class="qty">${Aa(r.toBuy,r.unit)}</span>
                  <input
                    type="date"
                    class="confirm-date"
                    .value=${this._expiryDrafts[r.id]||""}
                    @input=${a=>{this._expiryDrafts={...this._expiryDrafts,[r.id]:a.target.value}}}
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
    `}};pe.styles=[Bt,H`
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
  `];be([y()],pe.prototype,"_items",2);be([y()],pe.prototype,"_loading",2);be([y()],pe.prototype,"_generating",2);be([y()],pe.prototype,"_error",2);be([y()],pe.prototype,"_collapsed",2);be([y()],pe.prototype,"_addingToPantry",2);be([y()],pe.prototype,"_showConfirmAdd",2);be([y()],pe.prototype,"_expiryDrafts",2);be([y()],pe.prototype,"_sections",2);be([y()],pe.prototype,"_newItemName",2);be([y()],pe.prototype,"_newItemQuantity",2);be([y()],pe.prototype,"_catalogResults",2);be([y()],pe.prototype,"_selectedCatalogItem",2);be([y()],pe.prototype,"_addingItem",2);pe=be([J("compra-view")],pe);var Mp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,_e=(e,t,r,i)=>{for(var a=i>1?void 0:i?Ap(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Mp(t,r,a),a};const Dp={LIMPIEZA:"Limpieza",HIGIENE:"Higiene",PAPELERIA:"Papelería",COCINA_NO_ALIMENTO:"Cocina (no alimento)",OTROS:"Otros"};let he=class extends Q{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._adding=!1,this._showCreateCatalogItem=!1,this._newCategory=""}connectedCallback(){super.connectedCallback(),this._loadStock()}async _loadStock(){this._loading=!0,this._error="";try{this._items=await at.stock()}catch(e){this._error=e.message||"Error al cargar el inventario del hogar"}finally{this._loading=!1}}async _searchCatalog(e){const t=e.target.value;if(this._searchQuery=t,this._selectedCatalogItem=null,t.length<2){this._searchResults=[];return}try{this._searchResults=await at.items(t)}catch{this._searchResults=[]}}_selectCatalogItem(e){this._selectedCatalogItem=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unit||"UNIDAD"}_openCreateCatalogItem(){this._showCreateCatalogItem=!0,this._newCategory=""}async _handleCreateCatalogItem(e){if(e.preventDefault(),!!this._searchQuery.trim())try{const t=await at.createItem({name:this._searchQuery.trim(),category:this._newCategory||void 0,unit:this._unit});this._selectCatalogItem(t),this._showCreateCatalogItem=!1}catch(t){this._error=t.message||"Error al crear artículo"}}async _saveItem(e){if(e.preventDefault(),!(!this._selectedCatalogItem&&!this._editingItem)){this._adding=!0;try{this._editingItem?await at.updateStock(this._editingItem.id,{quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):null}):await at.addStock({householdItemId:this._selectedCatalogItem.id,quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):void 0}),this._resetForm(),this._showAddForm=!1,await this._loadStock()}catch(t){this._error=t.message||"Error al guardar"}finally{this._adding=!1}}}async _removeItem(e){try{await at.removeStock(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar artículo"}}_editItem(e){var t;this._editingItem=e,this._selectedCatalogItem=e.householdItem,this._searchQuery=((t=e.householdItem)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._minThreshold=e.minThreshold!=null?String(e.minThreshold):"",this._showAddForm=!0}_resetForm(){this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._editingItem=null,this._showCreateCatalogItem=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetForm()}render(){return this._loading?d`<p>Cargando inventario del hogar...</p>`:d`
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
                    ${Object.entries(Dp).map(([e,t])=>d`<option value=${e}>${t}</option>`)}
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
    `}};he.styles=[Bt,H`
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
  `];_e([y()],he.prototype,"_items",2);_e([y()],he.prototype,"_loading",2);_e([y()],he.prototype,"_error",2);_e([y()],he.prototype,"_showAddForm",2);_e([y()],he.prototype,"_editingItem",2);_e([y()],he.prototype,"_searchQuery",2);_e([y()],he.prototype,"_searchResults",2);_e([y()],he.prototype,"_selectedCatalogItem",2);_e([y()],he.prototype,"_quantity",2);_e([y()],he.prototype,"_unit",2);_e([y()],he.prototype,"_minThreshold",2);_e([y()],he.prototype,"_adding",2);_e([y()],he.prototype,"_showCreateCatalogItem",2);_e([y()],he.prototype,"_newCategory",2);he=_e([J("household-view")],he);var Tp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Be=(e,t,r,i)=>{for(var a=i>1?void 0:i?Pp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Tp(t,r,a),a};const Op={DIARIA:"Diaria",SEMANAL:"Semanal"};let Ce=class extends Q{constructor(){super(...arguments),this._chores=[],this._members=[],this._loading=!0,this._error="",this._showAddForm=!1,this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._saving=!1,this._applyingTemplate=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([$t.list(),Ze.list()]);this._chores=e,this._members=t}catch(e){this._error=e.message||"Error al cargar las tareas"}finally{this._loading=!1}}async _toggle(e){const t=!e.completedInPeriod;this._chores=this._chores.map(r=>r.id===e.id?{...r,completedInPeriod:t}:r);try{t?await $t.complete(e.id):await $t.uncomplete(e.id)}catch{this._chores=this._chores.map(r=>r.id===e.id?{...r,completedInPeriod:!t}:r),this._error="Error al actualizar la tarea"}}async _addChore(e){if(e.preventDefault(),!!this._newName.trim()){this._saving=!0;try{const t=await $t.create({name:this._newName.trim(),frequency:this._newFrequency,assignedToMemberId:this._newMemberId||void 0});this._chores=[...this._chores,t],this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._showAddForm=!1}catch(t){this._error=t.message||"Error al crear la tarea"}finally{this._saving=!1}}}async _applyStarterTemplate(){this._applyingTemplate=!0,this._error="";try{await $t.applyTemplate("hogar-basico"),await this._load()}catch(e){this._error=e.message||"Error al cargar las tareas de ejemplo"}finally{this._applyingTemplate=!1}}async _removeChore(e){try{await $t.remove(e),this._chores=this._chores.filter(t=>t.id!==e)}catch{this._error="Error al eliminar la tarea"}}_renderGroup(e){const t=this._chores.filter(r=>r.frequency===e);return t.length===0?"":d`
      <h3>${Op[e]}</h3>
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
    `}};Ce.styles=[Bt,H`
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
  `];Be([y()],Ce.prototype,"_chores",2);Be([y()],Ce.prototype,"_members",2);Be([y()],Ce.prototype,"_loading",2);Be([y()],Ce.prototype,"_error",2);Be([y()],Ce.prototype,"_showAddForm",2);Be([y()],Ce.prototype,"_newName",2);Be([y()],Ce.prototype,"_newFrequency",2);Be([y()],Ce.prototype,"_newMemberId",2);Be([y()],Ce.prototype,"_saving",2);Be([y()],Ce.prototype,"_applyingTemplate",2);Ce=Be([J("chores-view")],Ce);var Rp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Ie=(e,t,r,i)=>{for(var a=i>1?void 0:i?Fp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&Rp(t,r,a),a};const Np=!0;let ge=class extends Q{constructor(){super(...arguments),this._user=null,this._familyMembers=[],this._selectedMemberId="",this._loading=!0,this._saving=!1,this._error="",this._success="",this._form={name:"",age:0,weightKg:0,heightCm:0,sex:"MASCULINO",activityLevel:"MODERADO",goal:"MANTENER",restrictions:[]},this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0},this._backupBusy=!1,this._modules=[],this._modulesError="",this._modulesSaving=!1}connectedCallback(){super.connectedCallback(),this._load()}get _selectedMember(){return this._familyMembers.find(e=>e.id===this._selectedMemberId)}async _load(){var e;try{const t=await qr.me();if(this._user=t,this._familyMembers=((e=t.family)==null?void 0:e.members)||[],this._familyMembers.length>0&&(this._selectedMemberId=this._familyMembers[0].id,this._applyMember(this._familyMembers[0])),Np){const r=await je.getHomeSettings();this._modules=[...r.enabledModules]}}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}async _toggleModule(e){const{value:t,selected:r}=e.detail,i=r?[...this._modules,t]:this._modules.filter(n=>n!==t);if(i.length===0){this._modulesError="Deja al menos un área activa.";return}this._modulesError="",this._modulesSaving=!0;const a=this._modules;this._modules=i;try{const n=await je.updateEnabledModules(i);this._modules=[...n.enabledModules],window.dispatchEvent(new CustomEvent("etxa-modules-changed",{detail:{modules:this._modules}}))}catch(n){this._modules=a,this._modulesError=(n==null?void 0:n.message)||"No se pudo guardar el cambio."}finally{this._modulesSaving=!1}}_applyMember(e){this._form={name:e.name||"",age:e.age||0,weightKg:e.weightKg||0,heightCm:e.heightCm||0,sex:e.sex||"MASCULINO",activityLevel:e.activityLevel||"MODERADO",goal:e.goal||"MANTENER",restrictions:Qs(e.restrictions)},this._calculateMacros()}_selectMember(e){const t=e.target.value;this._selectedMemberId=t;const r=this._familyMembers.find(i=>i.id===t);r&&this._applyMember(r)}_handleInput(e){const t=e.target,r=t.name;if(r==="restrictions"){const i=t.value,a=t.checked;this._form={...this._form,restrictions:a?[...this._form.restrictions,i]:this._form.restrictions.filter(n=>n!==i)}}else r==="age"?this._form={...this._form,age:parseInt(t.value)||0}:["weightKg","heightCm"].includes(r)?this._form={...this._form,[r]:parseFloat(t.value)||0}:this._form={...this._form,[r]:t.value};this._calculateMacros()}async _save(){this._saving=!0,this._error="",this._success="";try{const e=await Ze.update(this._selectedMemberId,{name:this._form.name,age:this._form.age,weightKg:this._form.weightKg,heightCm:this._form.heightCm,sex:this._form.sex,activityLevel:this._form.activityLevel,goal:this._form.goal,restrictions:this._form.restrictions}),t=this._familyMembers.findIndex(r=>r.id===this._selectedMemberId);t>=0&&(this._familyMembers=[...this._familyMembers.slice(0,t),e,...this._familyMembers.slice(t+1)]),this._success="Perfil actualizado correctamente"}catch(e){this._error=e.message||"Error al guardar"}finally{this._saving=!1}}async _addMember(){const e=prompt("Nombre del nuevo miembro:");if(e)try{const t=await Ze.create({name:e});this._familyMembers=[...this._familyMembers,t],this._selectedMemberId=t.id,this._applyMember(t),this._success=`Miembro "${e}" añadido`}catch(t){this._error=t.message||"Error al añadir miembro"}}async _removeMember(e){var r;const t=this._familyMembers.find(i=>i.id===e);if(t&&confirm(`¿Eliminar a "${t.name}" de la familia?`))try{await Ze.remove(e),this._familyMembers=this._familyMembers.filter(i=>i.id!==e),this._selectedMemberId===e&&(this._selectedMemberId=((r=this._familyMembers[0])==null?void 0:r.id)||"",this._familyMembers[0]&&this._applyMember(this._familyMembers[0])),this._success=`"${t.name}" eliminado`}catch(i){this._error=i.message||"Error al eliminar miembro"}}_onLogout(){window.location.hash="#/login"}async _downloadBackup(){const e=await Su(),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`mealprep-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(r)}async _handleExport(){this._error="",this._success="";try{await this._downloadBackup(),this._success="Backup descargado"}catch(e){this._error=e.message||"Error al exportar"}}async _handleImport(e){var i;const t=e.target,r=(i=t.files)==null?void 0:i[0];if(t.value="",!!r&&confirm("Importar reemplaza TODOS tus datos actuales por los del fichero. Se descargará antes una copia de seguridad del estado actual, por si acaso. ¿Continuar?")){this._backupBusy=!0,this._error="",this._success="";try{await this._downloadBackup();const a=await r.text(),{report:n,catalogVersionMismatch:o}=await Cu(a),s=[];o&&s.push("el catálogo del backup es de otra versión de la app"),n.totalDropped>0&&s.push(`se descartaron ${n.totalDropped} referencia(s) que ya no existían`),alert(`Importación completada.${s.length?" "+s.join("; ")+".":""}`),window.location.reload()}catch(a){this._error=a.message||"Error al importar",this._backupBusy=!1}}}async _handleReset(){if(confirm("Esto borra TODOS tus datos locales (nevera, recetas propias, plan, listas, tareas...) y empieza de cero. Se descargará antes una copia de seguridad. ¿Seguro?")){this._backupBusy=!0,this._error="";try{await this._downloadBackup(),await Mu(),window.location.reload()}catch(e){this._error=e.message||"Error al reiniciar",this._backupBusy=!1}}}_calculateMacros(){const{age:e,weightKg:t,heightCm:r,sex:i,activityLevel:a,goal:n}=this._form;if(!e||!t||!r){this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0};return}this._liveMacros=Ds({age:e,weightKg:t,heightCm:r,sex:i==="FEMENINO"?"FEMENINO":"MASCULINO",activityLevel:a,goal:n})}render(){var t;if(this._loading)return d`<p>Cargando perfil...</p>`;const e=this._selectedMember;return d`
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
            ${Kr.map(r=>d`
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
              ${Ji.map(r=>d`
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
    `}};ge.styles=[Bt,H`
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
  `];Ie([y()],ge.prototype,"_user",2);Ie([y()],ge.prototype,"_familyMembers",2);Ie([y()],ge.prototype,"_selectedMemberId",2);Ie([y()],ge.prototype,"_loading",2);Ie([y()],ge.prototype,"_saving",2);Ie([y()],ge.prototype,"_error",2);Ie([y()],ge.prototype,"_success",2);Ie([y()],ge.prototype,"_form",2);Ie([y()],ge.prototype,"_liveMacros",2);Ie([y()],ge.prototype,"_backupBusy",2);Ie([y()],ge.prototype,"_modules",2);Ie([y()],ge.prototype,"_modulesError",2);Ie([y()],ge.prototype,"_modulesSaving",2);ge=Ie([J("profile-page")],ge);var zp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Ve=(e,t,r,i)=>{for(var a=i>1?void 0:i?Lp(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&zp(t,r,a),a};gl();bl();xl();const Bp=!0,Kp=["loading","login","register","onboarding","inicio","plan","nevera","recetas","compra","hogar","tareas","perfil"],wt="inicio",jp=["plan","compra","tareas","hogar","nevera","recetas"];let Te=class extends Q{constructor(){super(...arguments),this._page="loading",this._authed=!1,this._needsOnboarding=!1,this._menuOpen=!1,this._loginMessage="",this._globalError="",this._routeNotice="",this._modules=[...un],this._homeName="",this._onModulesChanged=e=>{var t;Array.isArray((t=e.detail)==null?void 0:t.modules)&&(this._modules=[...e.detail.modules],this._onHashChange())},this._onHashChange=()=>{const e=window.location.hash.replace(/^#\//,"")||wt;if(this._authed=So(),!this._authed){this._page=e==="register"?"register":"login";return}if(this._needsOnboarding&&e!=="onboarding"){window.location.hash="#/onboarding";return}if(!Kp.includes(e)){window.location.hash=`#/${wt}`;return}if(e!=="onboarding"){const t=Il(e);if(t&&!this._modules.includes(t)){this._routeNotice=`${Uo(t).title} está desactivado ahora mismo. Puedes volver a activarlo en Perfil.`,window.location.hash=`#/${wt}`;return}}e!==wt&&(this._routeNotice=""),this._page=e},this._goToRegister=e=>{e.preventDefault(),window.location.hash="#/register"},this._goToLogin=e=>{e.preventDefault(),window.location.hash="#/login"},this._onLogin=()=>{this._authed=!0,this._loginMessage="",this._checkOnboarding().then(()=>{window.location.hash=this._needsOnboarding?"#/onboarding":`#/${wt}`})},this._onOnboardingComplete=()=>{this._needsOnboarding=!1,window.location.hash="#/plan"},this._onHomeSetupComplete=async e=>{var r;this._needsOnboarding=!1,await this._checkOnboarding();const t=((r=e.detail)==null?void 0:r.destination)==="perfil"?"perfil":wt;window.location.hash=`#/${t}`},this._onLogout=e=>{e.preventDefault(),this._authed=!1,this._loginMessage="",window.location.hash="#/login"},this._navigate=e=>{const t=e.currentTarget;t&&(window.location.hash=t.hash)},this._onBottomSelect=e=>{if(e.detail.id==="__more__"){this._menuOpen=!0;return}window.location.hash=e.detail.href}}connectedCallback(){super.connectedCallback(),this._authed=So(),this._init(),window.addEventListener("hashchange",this._onHashChange),window.addEventListener("etxa-modules-changed",this._onModulesChanged)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChange),window.removeEventListener("etxa-modules-changed",this._onModulesChanged)}async _init(){this._authed?await this._checkOnboarding():(!window.location.hash||window.location.hash==="#/")&&(window.location.hash="#/login"),this._onHashChange()}async _checkOnboarding(){try{if(Bp){const e=await je.getHomeSettings();this._modules=[...e.enabledModules],this._homeName=e.name,this._needsOnboarding=e.onboardingCompletedAt===null}this._globalError=""}catch{this._globalError="No se pudo comprobar la configuración de tu casa. Vuelve a intentarlo en unos segundos."}}get _routes(){return $l(this._modules)}get _bottomRoutes(){const e=this._routes.filter(r=>r.id!==Da.id&&r.id!==Go.id),t=jp.map(r=>e.find(i=>i.id===r)).filter(r=>r!==void 0).slice(0,2);return[Da,...t]}get _moreRoutes(){const e=new Set(this._bottomRoutes.map(t=>t.id));return this._routes.filter(t=>!e.has(t.id))}get _bottomItems(){return[...this._bottomRoutes.map(e=>({...e,href:`#/${e.id}`})),{id:"__more__",label:"Más",href:"",icon:"more"}]}_renderPage(){switch(this._page){case"loading":return d`<div class="loading-screen"><p>Cargando...</p></div>`;case"login":return d`<login-page
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
          <a class="brand-link" href="#/${wt}" @click=${this._navigate} aria-label="Etxa, ir a Inicio">
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
    `}};Te.styles=[Ko,jo,Pe,He,H`
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
  `];Ve([y()],Te.prototype,"_page",2);Ve([y()],Te.prototype,"_authed",2);Ve([y()],Te.prototype,"_needsOnboarding",2);Ve([y()],Te.prototype,"_menuOpen",2);Ve([y()],Te.prototype,"_loginMessage",2);Ve([y()],Te.prototype,"_globalError",2);Ve([y()],Te.prototype,"_routeNotice",2);Ve([y()],Te.prototype,"_modules",2);Ve([y()],Te.prototype,"_homeName",2);Te=Ve([J("mpp-app")],Te);export{Ii as R,V as n,f as s};
