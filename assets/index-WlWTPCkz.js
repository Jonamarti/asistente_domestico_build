(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=globalThis,mn=Dr.ShadowRoot&&(Dr.ShadyCSS===void 0||Dr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fn=Symbol(),jn=new WeakMap;let Da=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(mn&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=jn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&jn.set(r,t))}return t}toString(){return this.cssText}};const Ta=e=>new Da(typeof e=="string"?e:e+"",void 0,fn),de=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Da(r,e,fn)},Bo=(e,t)=>{if(mn)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Dr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Gn=mn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ta(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jo,defineProperty:Go,getOwnPropertyDescriptor:Uo,getOwnPropertyNames:qo,getOwnPropertySymbols:Ho,getPrototypeOf:Vo}=Object,Ye=globalThis,Un=Ye.trustedTypes,Wo=Un?Un.emptyScript:"",gi=Ye.reactiveElementPolyfillSupport,Zt=(e,t)=>e,jr={toAttribute(e,t){switch(t){case Boolean:e=e?Wo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},gn=(e,t)=>!jo(e,t),qn={attribute:!0,type:String,converter:jr,reflect:!1,useDefault:!1,hasChanged:gn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ye.litPropertyMetadata??(Ye.litPropertyMetadata=new WeakMap);let Mt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=qn){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Go(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=Uo(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:n,set(o){const s=n==null?void 0:n.call(this);a==null||a.call(this,o),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qn}static _$Ei(){if(this.hasOwnProperty(Zt("elementProperties")))return;const t=Vo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zt("properties"))){const r=this.properties,i=[...qo(r),...Ho(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Gn(n))}else t!==void 0&&r.push(Gn(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){var a;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:jr).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){var a,o;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:jr;this._$Em=n;const c=l.fromAttribute(r,s.type);this[n]=c??((o=this._$Ej)==null?void 0:o.get(n))??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){var o;if(t!==void 0){const s=this.constructor;if(n===!1&&(a=this[t]),i??(i=s.getPropertyOptions(t)),!((i.hasChanged??gn)(a,r)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??r??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[a,o]of n){const{wrapped:s}=o,l=this[a];s!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(n=>{var a;return(a=n.hostUpdate)==null?void 0:a.call(n)}),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};Mt.elementStyles=[],Mt.shadowRootOptions={mode:"open"},Mt[Zt("elementProperties")]=new Map,Mt[Zt("finalized")]=new Map,gi==null||gi({ReactiveElement:Mt}),(Ye.reactiveElementVersions??(Ye.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=globalThis,Hn=e=>e,Gr=er.trustedTypes,Vn=Gr?Gr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pa="$lit$",Ve=`lit$${Math.random().toFixed(9).slice(2)}$`,Oa="?"+Ve,Qo=`<${Oa}>`,bt=document,ir=()=>bt.createComment(""),nr=e=>e===null||typeof e!="object"&&typeof e!="function",vn=Array.isArray,Yo=e=>vn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",vi=`[ 	
\f\r]`,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wn=/-->/g,Qn=/>/g,ot=RegExp(`>|${vi}(?:([^\\s"'>=/]+)(${vi}*=${vi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yn=/'/g,Xn=/"/g,Ra=/^(?:script|style|textarea|title)$/i,Xo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),h=Xo(1),Ot=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Jn=new WeakMap,ut=bt.createTreeWalker(bt,129);function Fa(e,t){if(!vn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vn!==void 0?Vn.createHTML(t):t}const Jo=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",o=Ht;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===Ht?u[1]==="!--"?o=Wn:u[1]!==void 0?o=Qn:u[2]!==void 0?(Ra.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=ot):u[3]!==void 0&&(o=ot):o===ot?u[0]===">"?(o=n??Ht,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ot:u[3]==='"'?Xn:Yn):o===Xn||o===Yn?o=ot:o===Wn||o===Qn?o=Ht:(o=ot,n=void 0);const _=o===ot&&e[s+1].startsWith("/>")?" ":"";a+=o===Ht?l+Qo:d>=0?(i.push(c),l.slice(0,d)+Pa+l.slice(d)+Ve+_):l+Ve+(d===-2?s:_)}return[Fa(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ar{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,o=0;const s=t.length-1,l=this.parts,[c,u]=Jo(t,r);if(this.el=ar.createElement(c,i),ut.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ut.nextNode())!==null&&l.length<s;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Pa)){const f=u[o++],_=n.getAttribute(d).split(Ve),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:p[2],strings:_,ctor:p[1]==="."?es:p[1]==="?"?ts:p[1]==="@"?rs:li}),n.removeAttribute(d)}else d.startsWith(Ve)&&(l.push({type:6,index:a}),n.removeAttribute(d));if(Ra.test(n.tagName)){const d=n.textContent.split(Ve),f=d.length-1;if(f>0){n.textContent=Gr?Gr.emptyScript:"";for(let _=0;_<f;_++)n.append(d[_],ir()),ut.nextNode(),l.push({type:2,index:++a});n.append(d[f],ir())}}}else if(n.nodeType===8)if(n.data===Oa)l.push({type:2,index:a});else{let d=-1;for(;(d=n.data.indexOf(Ve,d+1))!==-1;)l.push({type:7,index:a}),d+=Ve.length-1}a++}}static createElement(t,r){const i=bt.createElement("template");return i.innerHTML=t,i}}function Rt(e,t,r=e,i){var o,s;if(t===Ot)return t;let n=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const a=nr(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((s=n==null?void 0:n._$AO)==null||s.call(n,!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(t=Rt(e,n._$AS(e,t.values),n,i)),t}class Zo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??bt).importNode(r,!0);ut.currentNode=n;let a=ut.nextNode(),o=0,s=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new fr(a,a.nextSibling,this,t):l.type===1?c=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(c=new is(a,this,t)),this._$AV.push(c),l=i[++s]}o!==(l==null?void 0:l.index)&&(a=ut.nextNode(),o++)}return ut.currentNode=bt,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class fr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Rt(this,t,r),nr(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==Ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ie&&nr(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){var a;const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ar.createElement(Fa(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(r);else{const o=new Zo(n,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=Jn.get(t.strings);return r===void 0&&Jn.set(t.strings,r=new ar(t)),r}k(t){vn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new fr(this.O(ir()),this.O(ir()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t!==this._$AB;){const n=Hn(t).nextSibling;Hn(t).remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class li{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ie}_$AI(t,r=this,i,n){const a=this.strings;let o=!1;if(a===void 0)t=Rt(this,t,r,0),o=!nr(t)||t!==this._$AH&&t!==Ot,o&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Rt(this,s[i+l],r,l),c===Ot&&(c=this._$AH[l]),o||(o=!nr(c)||c!==this._$AH[l]),c===ie?t=ie:t!==ie&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class es extends li{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}class ts extends li{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ie)}}class rs extends li{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Rt(this,t,r,0)??ie)===Ot)return;const i=this._$AH,n=t===ie&&i!==ie||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==ie&&(i===ie||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class is{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Rt(this,t)}}const yi=er.litHtmlPolyfillSupport;yi==null||yi(ar,fr),(er.litHtmlVersions??(er.litHtmlVersions=[])).push("3.3.3");const ns=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const a=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new fr(t.insertBefore(ir(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=globalThis;class he extends Mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ns(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ot}}var Aa;he._$litElement$=!0,he.finalized=!0,(Aa=ft.litElementHydrateSupport)==null||Aa.call(ft,{LitElement:he});const bi=ft.litElementPolyfillSupport;bi==null||bi({LitElement:he});(ft.litElementVersions??(ft.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as={attribute:!0,type:String,converter:jr,reflect:!1,hasChanged:gn},os=(e=as,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:o}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,l,e,!0,s)},init(s){return s!==void 0&&this.C(o,void 0,e,s),s}}}if(i==="setter"){const{name:o}=r;return function(s){const l=this[o];t.call(this,s),this.requestUpdate(o,l,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ci(e){return(t,r)=>typeof r=="object"?os(e,t,r):((i,n,a)=>{const o=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(e){return ci({...e,state:!0,attribute:!1})}const Vt={terracotta:"#D66B52",olive:"#6B7F5B",cream:"#F8F6EE",charcoal:"#2E2E2E",butter:"#F6E3A1"},za=`
  --etxa-color-primary: ${Vt.terracotta};
  --etxa-color-primary-strong: #a84432;
  --etxa-color-primary-hover: #8b3428;
  --etxa-color-secondary: ${Vt.olive};
  --etxa-color-background: ${Vt.cream};
  --etxa-color-surface: #fffdf8;
  --etxa-color-text: ${Vt.charcoal};
  --etxa-color-text-muted: #68665f;
  --etxa-color-accent: ${Vt.butter};
  --etxa-color-border: #dfdbce;
  --etxa-color-focus: #315caa;
  --etxa-color-success: #4f6f45;
  --etxa-color-danger: #b44138;
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
`,ss=de`
  :host {
    ${Ta(za)}
  }
`;function ls(){if(document.querySelector("[data-etxa-tokens]"))return;const e=document.createElement("style");e.dataset.etxaTokens="",e.textContent=`:root { ${za} }`,document.head.append(e)}const cs="/asistente_domestico_build/assets/inter-variable-DiVDrmQJ.woff2",ds="/asistente_domestico_build/assets/sora-variable-BedAVQot.woff2",us=de`
  :host {
    font-family: var(--etxa-font-body);
    font-synthesis: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--etxa-font-heading);
    text-wrap: balance;
  }
`;function ps(){if(document.querySelector("[data-etxa-typography]"))return;const e=document.createElement("style");e.dataset.etxaTypography="",e.textContent=`
    @font-face {
      font-family: 'Inter';
      src: url('${cs}') format('woff2');
      font-style: normal;
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
      font-family: 'Sora';
      src: url('${ds}') format('woff2');
      font-style: normal;
      font-weight: 100 800;
      font-display: swap;
    }
  `,document.head.append(e)}const Na=de`
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
`;de`
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
`;const hs=de`
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`,ms="/asistente_domestico_build/assets/welcome-kitchen-yG5FlH6H.webp",fs={welcomeKitchen:ms};function gs(){if(document.querySelector("[data-etxa-welcome-preload]"))return;const e=document.createElement("link");e.rel="preload",e.as="image",e.href=fs.welcomeKitchen,e.dataset.etxaWelcomePreload="",document.head.append(e)}const kt=new Date(0).toISOString();let _i=null,Gi=null;async function wi(e){const t=await fetch(e);if(!t.ok)throw new Error(`No se pudo cargar ${e} (HTTP ${t.status})`);return t.json()}function vs(e,t,r){const i=new Map,n=[];for(const c of e){const u=Object.freeze({...c,lastRefreshedAt:null,createdAt:kt});i.set(u.id,u),n.push(u)}n.sort((c,u)=>c.name.localeCompare(u.name));const a=new Map,o=[];for(const c of t){const u=c.ingredients.map(f=>Object.freeze({...f,food:i.get(f.foodId)??null})),d=Object.freeze({...c,createdAt:kt,updatedAt:kt,ingredients:Object.freeze(u)});a.set(d.id,d),o.push(d)}const s=r.templates.map(c=>Object.freeze({...c,familyId:null,createdAt:kt,updatedAt:kt,meals:Object.freeze(c.meals.map((u,d)=>Object.freeze({...u,id:`${c.id}:${d}`,templateId:c.id})))})),l=r.householdItems.map(c=>Object.freeze({...c,createdAt:kt}));return{version:r.catalogVersion,foodsById:i,foodsList:n,recipesById:a,recipesList:o,templates:s,householdItems:l}}function ys(){return _i||(_i=(async()=>{const[e,t,r]=await Promise.all([wi(new URL("/asistente_domestico_build/assets/catalog-foods-ko3gnLMN.json",import.meta.url)),wi(new URL("/asistente_domestico_build/assets/catalog-recipes-CT57ZbWv.json",import.meta.url)),wi(new URL("/asistente_domestico_build/assets/catalog-meta-Bui7b_bp.json",import.meta.url))]),i=vs(e,t,r);return Gi=i,i})()),_i}function Te(){if(!Gi)throw new Error("Catálogo todavía no disponible: usa `await whenReady()` antes de leer la tienda.");return Gi}const La=["MEALS","SHOPPING","HOUSEHOLD","CHORES"],bs=["APARTMENT","HOUSE","OTHER"],Ur=1,qr=5,Ka=["MEALS","SHOPPING"];function Ba(e){return typeof e=="string"&&La.includes(e)}function Ui(e){return typeof e=="string"&&bs.includes(e)}function _s(e,t=Ka){if(!Array.isArray(e))return[...t];const r=[...new Set(e.filter(Ba))];return r.length>0?r:[...t]}function xi(e){if(!Array.isArray(e)||e.length===0)throw new Error("Selecciona al menos un módulo.");if(!e.every(Ba))throw new Error("La selección contiene módulos no válidos.");return[...new Set(e)]}function ws(e){return e instanceof Date&&!Number.isNaN(e.getTime())}function yn(e,t=new Date){if(!e.family)return{store:e,changed:!1};const r=e.family,i=!Object.prototype.hasOwnProperty.call(r,"onboardingVersion"),n=e.members.some(p=>typeof p.dailyCalories=="number"&&p.dailyCalories>0),a=i&&n?t:ws(r.onboardingCompletedAt)?r.onboardingCompletedAt:null,o=a!==null,s=_s(r.enabledModules,i&&n?La:Ka),l=typeof r.onboardingStep=="number"&&Number.isInteger(r.onboardingStep)?r.onboardingStep:0,c=o?qr:Math.min(qr-1,Math.max(0,l)),u=typeof r.onboardingVersion=="number"&&Number.isInteger(r.onboardingVersion)?r.onboardingVersion:0,d=o?Ur:Math.min(Ur,Math.max(0,u)),f={...e.family,onboardingVersion:d,onboardingStep:c,onboardingCompletedAt:a,enabledModules:s,homeType:Ui(r.homeType)?r.homeType:null},_=r.onboardingVersion!==f.onboardingVersion||r.onboardingStep!==f.onboardingStep||r.onboardingCompletedAt!==f.onboardingCompletedAt||r.homeType!==f.homeType||!Array.isArray(r.enabledModules)||r.enabledModules.length!==f.enabledModules.length||r.enabledModules.some((p,g)=>p!==f.enabledModules[g]);return{store:{...e,family:f},changed:_}}function G(e){if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>G(t));if(e!==null&&typeof e=="object"){const t={};for(const[r,i]of Object.entries(e))i!==void 0&&(t[r]=G(i));return t}return e}const Hr={family:["onboardingCompletedAt","createdAt"],members:["weightDate","createdAt","updatedAt"],weightHistory:["date"],foods:["lastRefreshedAt","createdAt"],pantryItems:["purchaseDate","expiryDate","createdAt","updatedAt"],recipes:["createdAt","updatedAt"],mealPlans:["weekStart","createdAt","updatedAt"],meals:[],templates:["createdAt","updatedAt"],shoppingLists:["weekStart","createdAt"],shoppingItems:[],shoppingSections:["createdAt"],shoppingSectionItems:[],householdItems:["createdAt"],householdStockItems:["createdAt","updatedAt"],chores:["createdAt"],choreCompletions:["date"]};function Zn(e,t){if(t.length===0)return e;const r={...e};for(const i of t)r[i]instanceof Date&&(r[i]=r[i].toISOString());return r}function ea(e,t){if(t.length===0)return e;const r={...e};for(const i of t)typeof r[i]=="string"&&(r[i]=new Date(r[i]));return r}function xs(e){const t={};for(const r of Object.keys(Hr)){const i=Hr[r];r==="family"?t[r]=e.family?Zn(e.family,i):null:t[r]=e[r].map(n=>Zn(n,i))}return t}function $s(e){const t={};for(const r of Object.keys(Hr)){const i=Hr[r],n=e[r];r==="family"?t[r]=n?ea(n,i):null:t[r]=Array.isArray(n)?n.map(a=>ea(a,i)):[]}return yn(t).store}const ja="MealPrepHelper",Ga="backup",qi=1;function Is(e){return{app:ja,kind:Ga,schemaVersion:qi,catalogVersion:Te().version,exportedAt:new Date().toISOString(),data:xs(e)}}function ks(e){if(!e||typeof e!="object")throw new Error("El fichero no es un backup válido de MealPrepHelper.");const t=e;if(t.app!==ja||t.kind!==Ga)throw new Error("El fichero no es un backup de MealPrepHelper.");if(t.schemaVersion!==qi)throw new Error(`Versión de backup no soportada (${t.schemaVersion}). Esta versión de la app espera ${qi}.`);if(!t.data||typeof t.data!="object")throw new Error("El backup no contiene datos.");if(!t.data.family)throw new Error("El backup no contiene una unidad familiar.");return t}function Es(e){const t=Te(),r={droppedMeals:0,droppedTemplateMeals:0,droppedPantryItems:0,droppedShoppingItems:0,droppedShoppingSections:0,droppedShoppingSectionItems:0,droppedStockItems:0,droppedChoreCompletions:0,droppedWeightHistory:0,nulledMemberRefs:0,nulledHouseholdRefs:0,totalDropped:0};for(const v of e.members)v.isStandardProfile=v.isStandardProfile??!1;const i=new Set(e.members.map(v=>v.id)),n=new Set([...t.foodsById.keys(),...e.foods.map(v=>v.id)]),a=new Set([...t.recipesById.keys(),...e.recipes.map(v=>v.id)]),o=new Set(e.mealPlans.map(v=>v.id)),s=new Set([...t.householdItems.map(v=>v.id),...e.householdItems.map(v=>v.id)]),l=e.meals.filter(v=>!(!o.has(v.planId)||v.recipeId&&!a.has(v.recipeId)));r.droppedMeals=e.meals.length-l.length;for(const v of l)v.assignedToMemberId&&!i.has(v.assignedToMemberId)&&(v.assignedToMemberId=null,r.nulledMemberRefs++);let c=0;const u=e.templates.map(v=>{const C=v.meals.filter(k=>a.has(k.recipeId));return c+=v.meals.length-C.length,{...v,meals:C}});r.droppedTemplateMeals=c;const d=e.pantryItems.filter(v=>n.has(v.foodId));r.droppedPantryItems=e.pantryItems.length-d.length;const f=new Set(e.shoppingLists.map(v=>v.id)),_=e.shoppingItems.filter(v=>f.has(v.listId)&&n.has(v.foodId));r.droppedShoppingItems=e.shoppingItems.length-_.length;const p=e.shoppingSections.filter(v=>f.has(v.listId));r.droppedShoppingSections=e.shoppingSections.length-p.length;const g=new Set(p.map(v=>v.id)),w=e.shoppingSectionItems.filter(v=>g.has(v.sectionId));r.droppedShoppingSectionItems=e.shoppingSectionItems.length-w.length;for(const v of w)v.householdItemId&&!s.has(v.householdItemId)&&(v.householdItemId=null,r.nulledHouseholdRefs++);const y=e.householdStockItems.filter(v=>s.has(v.householdItemId));r.droppedStockItems=e.householdStockItems.length-y.length;for(const v of e.chores)v.assignedToMemberId&&!i.has(v.assignedToMemberId)&&(v.assignedToMemberId=null,r.nulledMemberRefs++);const I=new Set(e.chores.map(v=>v.id)),$=e.choreCompletions.filter(v=>I.has(v.choreId));r.droppedChoreCompletions=e.choreCompletions.length-$.length;for(const v of $)v.completedByMemberId&&!i.has(v.completedByMemberId)&&(v.completedByMemberId=null,r.nulledMemberRefs++);const x=e.weightHistory.filter(v=>i.has(v.memberId));return r.droppedWeightHistory=e.weightHistory.length-x.length,r.totalDropped=r.droppedMeals+r.droppedTemplateMeals+r.droppedPantryItems+r.droppedShoppingItems+r.droppedShoppingSections+r.droppedShoppingSectionItems+r.droppedStockItems+r.droppedChoreCompletions+r.droppedWeightHistory,{store:{...e,meals:l,templates:u,pantryItems:d,shoppingItems:_,shoppingSections:p,shoppingSectionItems:w,householdStockItems:y,choreCompletions:$,weightHistory:x},report:r}}function Ss(e){const t=$s(e.data),{store:r,report:i}=Es(t),n=e.catalogVersion!==Te().version;return{store:r,report:i,catalogVersionMismatch:n}}const Cs="modulepreload",Ms=function(e){return"/asistente_domestico_build/"+e},ta={},Ua=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=o(r.map(c=>{if(c=Ms(c),c in ta)return;ta[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Cs,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((_,p)=>{f.addEventListener("load",_),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return n.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})};var Hi=function(e,t){return Hi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])},Hi(e,t)};function As(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Hi(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var B=function(){return B=Object.assign||function(t){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},B.apply(this,arguments)};function Vr(e,t,r){for(var i=0,n=t.length,a;i<n;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ae=Object.keys,Y=Array.isArray;typeof Promise<"u"&&!se.Promise&&(se.Promise=Promise);function xe(e,t){return typeof t!="object"||ae(t).forEach(function(r){e[r]=t[r]}),e}var Ft=Object.getPrototypeOf,Ds={}.hasOwnProperty;function $e(e,t){return Ds.call(e,t)}function zt(e,t){typeof t=="function"&&(t=t(Ft(e))),(typeof Reflect>"u"?ae:Reflect.ownKeys)(t).forEach(function(r){Xe(e,r,t[r])})}var qa=Object.defineProperty;function Xe(e,t,r,i){qa(e,t,xe(r&&$e(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,writable:!0},i))}function Nt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Xe(e.prototype,"constructor",e),{extend:zt.bind(null,e.prototype)}}}}var Ts=Object.getOwnPropertyDescriptor;function Ha(e,t){var r=Ts(e,t),i;return r||(i=Ft(e))&&Ha(i,t)}var Ps=[].slice;function di(e,t,r){return Ps.call(e,t,r)}function Va(e,t){return t(e)}function Xt(e){if(!e)throw new Error("Assertion Failed")}function Wa(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Os(e,t){return e.reduce(function(r,i,n){var a=t(i,n);return a&&(r[a[0]]=a[1]),r},{})}function je(e,t){if(typeof t=="string"&&$e(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var r=[],i=0,n=t.length;i<n;++i){var a=je(e,t[i]);r.push(a)}return r}var o=t.indexOf(".");if(o!==-1){var s=e[t.substr(0,o)];return s==null?void 0:je(s,t.substr(o+1))}}function _e(e,t,r){if(!(!e||t===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Xt(typeof r!="string"&&"length"in r);for(var i=0,n=t.length;i<n;++i)_e(e,t[i],r[i])}else{var a=t.indexOf(".");if(a!==-1){var o=t.substr(0,a),s=t.substr(a+1);if(s==="")r===void 0?Y(e)&&!isNaN(parseInt(o))?e.splice(o,1):delete e[o]:e[o]=r;else{var l=e[o];if(!l||!$e(e,o)){if(r===void 0)return;l=e[o]={}}_e(l,s,r)}}else r===void 0?Y(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=r}}function Rs(e,t){typeof t=="string"?_e(e,t,void 0):"length"in t&&[].map.call(t,function(r){_e(e,r,void 0)})}function Qa(e){var t={};for(var r in e)$e(e,r)&&(t[r]=e[r]);return t}var Fs=[].concat;function Ya(e){return Fs.apply([],e)}var zs="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ya([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),Xa=new Set(zs.map(function(e){return se[e]}));function Ja(e){var t={};for(var r in e)if($e(e,r)){var i=e[r];t[r]=!i||typeof i!="object"||Xa.has(i.constructor)?i:Ja(i)}return t}var tr=null;function _t(e){tr=new WeakMap;var t=Vi(e);return tr=null,t}function Vi(e){if(!e||typeof e!="object")return e;var t=tr.get(e);if(t)return t;if(Y(e)){t=[],tr.set(e,t);for(var r=0,i=e.length;r<i;++r)t.push(Vi(e[r]))}else if(Xa.has(e.constructor))t=e;else{var n=Ft(e);t=n===Object.prototype?{}:Object.create(n),tr.set(e,t);for(var a in e)$e(e,a)&&(t[a]=Vi(e[a]))}return t}var Ns={}.toString;function Wi(e){return Ns.call(e).slice(8,-1)}var Qi=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ls=typeof Qi=="symbol"?function(e){var t;return e!=null&&(t=e[Qi])&&t.apply(e)}:function(){return null};function st(e,t){var r=e.indexOf(t);return r>=0&&e.splice(r,1),r>=0}var At={};function Le(e){var t,r,i,n;if(arguments.length===1){if(Y(e))return e.slice();if(this===At&&typeof e=="string")return[e];if(n=Ls(e)){for(r=[];i=n.next(),!i.done;)r.push(i.value);return r}if(e==null)return[e];if(t=e.length,typeof t=="number"){for(r=new Array(t);t--;)r[t]=e[t];return r}return[e]}for(t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];return r}var bn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ks=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],Za=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],_n=Ks.concat(Za),Bs={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Lt(e,t){this.name=e,this.message=t}Nt(Lt).from(Error).extend({toString:function(){return this.name+": "+this.message}});function eo(e,t){return e+". Errors: "+Object.keys(t).map(function(r){return t[r].toString()}).filter(function(r,i,n){return n.indexOf(r)===i}).join(`
`)}function Wr(e,t,r,i){this.failures=t,this.failedKeys=i,this.successCount=r,this.message=eo(e,t)}Nt(Wr).from(Lt);function Dt(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(r){return t[r]}),this.failuresByPos=t,this.message=eo(e,this.failures)}Nt(Dt).from(Lt);var wn=_n.reduce(function(e,t){return e[t]=t+"Error",e},{}),js=Lt,z=_n.reduce(function(e,t){var r=t+"Error";function i(n,a){this.name=r,n?typeof n=="string"?(this.message="".concat(n).concat(a?`
 `+a:""),this.inner=a||null):typeof n=="object"&&(this.message="".concat(n.name," ").concat(n.message),this.inner=n):(this.message=Bs[t]||r,this.inner=null)}return Nt(i).from(js),e[t]=i,e},{});z.Syntax=SyntaxError;z.Type=TypeError;z.Range=RangeError;var ra=Za.reduce(function(e,t){return e[t+"Error"]=z[t],e},{});function Gs(e,t){if(!e||e instanceof Lt||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ra[e.name])return e;var r=new ra[e.name](t||e.message,e);return"stack"in e&&Xe(r,"stack",{get:function(){return this.inner.stack}}),r}var ui=_n.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=z[t]),e},{});ui.ModifyError=Wr;ui.DexieError=Lt;ui.BulkError=Dt;function V(){}function gr(e){return e}function Us(e,t){return e==null||e===gr?t:function(r){return t(e(r))}}function wt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function qs(e,t){return e===V?t:function(){var r=e.apply(this,arguments);r!==void 0&&(arguments[0]=r);var i=this.onsuccess,n=this.onerror;this.onsuccess=null,this.onerror=null;var a=t.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?wt(i,this.onsuccess):i),n&&(this.onerror=this.onerror?wt(n,this.onerror):n),a!==void 0?a:r}}function Hs(e,t){return e===V?t:function(){e.apply(this,arguments);var r=this.onsuccess,i=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),r&&(this.onsuccess=this.onsuccess?wt(r,this.onsuccess):r),i&&(this.onerror=this.onerror?wt(i,this.onerror):i)}}function Vs(e,t){return e===V?t:function(r){var i=e.apply(this,arguments);xe(r,i);var n=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var o=t.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?wt(n,this.onsuccess):n),a&&(this.onerror=this.onerror?wt(a,this.onerror):a),i===void 0?o===void 0?void 0:o:xe(i,o)}}function Ws(e,t){return e===V?t:function(){return t.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function xn(e,t){return e===V?t:function(){var r=e.apply(this,arguments);if(r&&typeof r.then=="function"){for(var i=this,n=arguments.length,a=new Array(n);n--;)a[n]=arguments[n];return r.then(function(){return t.apply(i,a)})}return t.apply(this,arguments)}}var Re=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function to(e,t){Re=e}var or={},ro=100,$n=typeof Promise>"u"?[]:(function(){var e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,Ft(e),e];var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,Ft(t),e]})(),ia=$n[0],na=$n[1],Qs=$n[2],Ys=na&&na.then,ct=ia&&ia.constructor,In=!!Qs;function Xs(){queueMicrotask(Zs)}var sr=function(e,t){Jt.push([e,t]),Qr&&(Xs(),Qr=!1)},Yi=!0,Qr=!0,gt=[],Tr=[],Xi=gr,Ge={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:V,pgp:!1,env:{},finalize:V},R=Ge,Jt=[],vt=0,Pr=[];function A(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=R;if(typeof e!="function"){if(e!==or)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Zi(this,this._value);return}this._state=null,this._value=null,++t.ref,no(this,e)}var Ji={get:function(){var e=R,t=Yr;function r(i,n){var a=this,o=!e.global&&(e!==R||t!==Yr),s=o&&!Ze(),l=new A(function(c,u){kn(a,new io(aa(i,e,o,s),aa(n,e,o,s),c,u,e))});return this._consoleTask&&(l._consoleTask=this._consoleTask),l}return r.prototype=or,r},set:function(e){Xe(this,"then",e&&e.prototype===or?Ji:{get:function(){return e},set:Ji.set})}};zt(A.prototype,{then:Ji,_then:function(e,t){kn(this,new io(null,null,e,t,R))},catch:function(e){if(arguments.length===1)return this.then(null,e);var t=arguments[0],r=arguments[1];return typeof t=="function"?this.then(null,function(i){return i instanceof t?r(i):Or(i)}):this.then(null,function(i){return i&&i.name===t?r(i):Or(i)})},finally:function(e){return this.then(function(t){return A.resolve(e()).then(function(){return t})},function(t){return A.resolve(e()).then(function(){return Or(t)})})},timeout:function(e,t){var r=this;return e<1/0?new A(function(i,n){var a=setTimeout(function(){return n(new z.Timeout(t))},e);r.then(i,n).finally(clearTimeout.bind(null,a))}):this}});typeof Symbol<"u"&&Symbol.toStringTag&&Xe(A.prototype,Symbol.toStringTag,"Dexie.Promise");Ge.env=oo();function io(e,t,r,i,n){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=r,this.reject=i,this.psd=n}zt(A,{all:function(){var e=Le.apply(null,arguments).map(Xr);return new A(function(t,r){e.length===0&&t([]);var i=e.length;e.forEach(function(n,a){return A.resolve(n).then(function(o){e[a]=o,--i||t(e)},r)})})},resolve:function(e){if(e instanceof A)return e;if(e&&typeof e.then=="function")return new A(function(r,i){e.then(r,i)});var t=new A(or,!0,e);return t},reject:Or,race:function(){var e=Le.apply(null,arguments).map(Xr);return new A(function(t,r){e.map(function(i){return A.resolve(i).then(t,r)})})},PSD:{get:function(){return R},set:function(e){return R=e}},totalEchoes:{get:function(){return Yr}},newPSD:Je,usePSD:xt,scheduler:{get:function(){return sr},set:function(e){sr=e}},rejectionMapper:{get:function(){return Xi},set:function(e){Xi=e}},follow:function(e,t){return new A(function(r,i){return Je(function(n,a){var o=R;o.unhandleds=[],o.onunhandled=a,o.finalize=wt(function(){var s=this;el(function(){s.unhandleds.length===0?n():a(s.unhandleds[0])})},o.finalize),e()},t,r,i)})}});ct&&(ct.allSettled&&Xe(A,"allSettled",function(){var e=Le.apply(null,arguments).map(Xr);return new A(function(t){e.length===0&&t([]);var r=e.length,i=new Array(r);e.forEach(function(n,a){return A.resolve(n).then(function(o){return i[a]={status:"fulfilled",value:o}},function(o){return i[a]={status:"rejected",reason:o}}).then(function(){return--r||t(i)})})})}),ct.any&&typeof AggregateError<"u"&&Xe(A,"any",function(){var e=Le.apply(null,arguments).map(Xr);return new A(function(t,r){e.length===0&&r(new AggregateError([]));var i=e.length,n=new Array(i);e.forEach(function(a,o){return A.resolve(a).then(function(s){return t(s)},function(s){n[o]=s,--i||r(new AggregateError(n))})})})}),ct.withResolvers&&(A.withResolvers=ct.withResolvers));function no(e,t){try{t(function(r){if(e._state===null){if(r===e)throw new TypeError("A promise cannot be resolved with itself.");var i=e._lib&&Kt();r&&typeof r.then=="function"?no(e,function(n,a){r instanceof A?r._then(n,a):r.then(n,a)}):(e._state=!0,e._value=r,ao(e)),i&&Bt()}},Zi.bind(null,e))}catch(r){Zi(e,r)}}function Zi(e,t){if(Tr.push(t),e._state===null){var r=e._lib&&Kt();t=Xi(t),e._state=!1,e._value=t,tl(e),ao(e),r&&Bt()}}function ao(e){var t=e._listeners;e._listeners=[];for(var r=0,i=t.length;r<i;++r)kn(e,t[r]);var n=e._PSD;--n.ref||n.finalize(),vt===0&&(++vt,sr(function(){--vt===0&&En()},[]))}function kn(e,t){if(e._state===null){e._listeners.push(t);return}var r=e._state?t.onFulfilled:t.onRejected;if(r===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++vt,sr(Js,[r,e,t])}function Js(e,t,r){try{var i,n=t._value;!t._state&&Tr.length&&(Tr=[]),i=Re&&t._consoleTask?t._consoleTask.run(function(){return e(n)}):e(n),!t._state&&Tr.indexOf(n)===-1&&rl(t),r.resolve(i)}catch(a){r.reject(a)}finally{--vt===0&&En(),--r.psd.ref||r.psd.finalize()}}function Zs(){xt(Ge,function(){Kt()&&Bt()})}function Kt(){var e=Yi;return Yi=!1,Qr=!1,e}function Bt(){var e,t,r;do for(;Jt.length>0;)for(e=Jt,Jt=[],r=e.length,t=0;t<r;++t){var i=e[t];i[0].apply(null,i[1])}while(Jt.length>0);Yi=!0,Qr=!0}function En(){var e=gt;gt=[],e.forEach(function(i){i._PSD.onunhandled.call(null,i._value,i)});for(var t=Pr.slice(0),r=t.length;r;)t[--r]()}function el(e){function t(){e(),Pr.splice(Pr.indexOf(t),1)}Pr.push(t),++vt,sr(function(){--vt===0&&En()},[])}function tl(e){gt.some(function(t){return t._value===e._value})||gt.push(e)}function rl(e){for(var t=gt.length;t;)if(gt[--t]._value===e._value){gt.splice(t,1);return}}function Or(e){return new A(or,!1,e)}function W(e,t){var r=R;return function(){var i=Kt(),n=R;try{return et(r,!0),e.apply(this,arguments)}catch(a){t&&t(a)}finally{et(n,!1),i&&Bt()}}}var ne={awaits:0,echoes:0,id:0},il=0,Rr=[],Fr=0,Yr=0,nl=0;function Je(e,t,r,i){var n=R,a=Object.create(n);a.parent=n,a.ref=0,a.global=!1,a.id=++nl,Ge.env,a.env=In?{Promise:A,PromiseProp:{value:A,configurable:!0,writable:!0},all:A.all,race:A.race,allSettled:A.allSettled,any:A.any,resolve:A.resolve,reject:A.reject}:{},t&&xe(a,t),++n.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()};var o=xt(a,e,r,i);return a.ref===0&&a.finalize(),o}function jt(){return ne.id||(ne.id=++il),++ne.awaits,ne.echoes+=ro,ne.id}function Ze(){return ne.awaits?(--ne.awaits===0&&(ne.id=0),ne.echoes=ne.awaits*ro,!0):!1}(""+Ys).indexOf("[native code]")===-1&&(jt=Ze=V);function Xr(e){return ne.echoes&&e&&e.constructor===ct?(jt(),e.then(function(t){return Ze(),t},function(t){return Ze(),Z(t)})):e}function al(e){++Yr,(!ne.echoes||--ne.echoes===0)&&(ne.echoes=ne.awaits=ne.id=0),Rr.push(R),et(e,!0)}function ol(){var e=Rr[Rr.length-1];Rr.pop(),et(e,!1)}function et(e,t){var r=R;if((t?ne.echoes&&(!Fr++||e!==R):Fr&&(!--Fr||e!==R))&&queueMicrotask(t?al.bind(null,e):ol),e!==R&&(R=e,r===Ge&&(Ge.env=oo()),In)){var i=Ge.env.Promise,n=e.env;(r.global||e.global)&&(Object.defineProperty(se,"Promise",n.PromiseProp),i.all=n.all,i.race=n.race,i.resolve=n.resolve,i.reject=n.reject,n.allSettled&&(i.allSettled=n.allSettled),n.any&&(i.any=n.any))}}function oo(){var e=se.Promise;return In?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function xt(e,t,r,i,n){var a=R;try{return et(e,!0),t(r,i,n)}finally{et(a,!1)}}function aa(e,t,r,i){return typeof e!="function"?e:function(){var n=R;r&&jt(),et(t,!0);try{return e.apply(this,arguments)}finally{et(n,!1),i&&queueMicrotask(Ze)}}}function $i(e){Promise===ct&&ne.echoes===0?Fr===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var Z=A.reject;function en(e,t,r,i){if(!e.idbdb||!e._state.openComplete&&!R.letThrough&&!e._vip){if(e._state.openComplete)return Z(new z.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return Z(new z.DatabaseClosed);e.open().catch(V)}return e._state.dbReadyPromise.then(function(){return en(e,t,r,i)})}else{var n=e._createTransaction(t,r,e._dbSchema);try{n.create(),e._state.PR1398_maxLoop=3}catch(a){return a.name===wn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return en(e,t,r,i)})):Z(a)}return n._promise(t,function(a,o){return Je(function(){return R.trans=n,i(a,o,n)})}).then(function(a){if(t==="readwrite")try{n.idbtrans.commit()}catch{}return t==="readonly"?a:n._completion.then(function(){return a})})}}var oa="4.4.4",pt="￿",tn=-1/0,ze="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",so="String expected.",sl=1e3,pi="__dbnames",Ii="readonly",ki="readwrite";function $t(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var lo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function _r(e){return typeof e=="string"&&!/\./.test(e)?function(t){return t[e]===void 0&&e in t&&(t=_t(t),delete t[e]),t}:function(t){return t}}function ll(){throw z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function U(e,t){try{var r=sa(e),i=sa(t);if(r!==i)return r==="Array"?1:i==="Array"?-1:r==="binary"?1:i==="binary"?-1:r==="string"?1:i==="string"?-1:r==="Date"?1:i!=="Date"?NaN:-1;switch(r){case"number":case"Date":case"string":return e>t?1:e<t?-1:0;case"binary":return dl(la(e),la(t));case"Array":return cl(e,t)}}catch{}return NaN}function cl(e,t){for(var r=e.length,i=t.length,n=r<i?r:i,a=0;a<n;++a){var o=U(e[a],t[a]);if(o!==0)return o}return r===i?0:r<i?-1:1}function dl(e,t){for(var r=e.length,i=t.length,n=r<i?r:i,a=0;a<n;++a)if(e[a]!==t[a])return e[a]<t[a]?-1:1;return r===i?0:r<i?-1:1}function sa(e){var t=typeof e;if(t!=="object")return t;if(ArrayBuffer.isView(e))return"binary";var r=Wi(e);return r==="ArrayBuffer"?"binary":r}function la(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function zr(e,t,r){var i=e.schema.yProps;return i?(t&&r.numFailures>0&&(t=t.filter(function(n,a){return!r.failures[a]})),Promise.all(i.map(function(n){var a=n.updatesTable;return t?e.db.table(a).where("k").anyOf(t).delete():e.db.table(a).clear()})).then(function(){return r})):r}var ul=(function(){function e(t){this["@@propmod"]=t}return e.prototype.execute=function(t){var r,i=this["@@propmod"];if(i.add!==void 0){var n=i.add;if(Y(n))return Vr(Vr([],Y(t)?t:[],!0),n).sort();if(typeof n=="number")return(Number(t)||0)+n;if(typeof n=="bigint")try{return BigInt(t)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(i.remove!==void 0){var a=i.remove;if(Y(a))return Y(t)?t.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(t)-a;if(typeof a=="bigint")try{return BigInt(t)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}var o=(r=i.replacePrefix)===null||r===void 0?void 0:r[0];return o&&typeof t=="string"&&t.startsWith(o)?i.replacePrefix[1]+t.substring(o.length):t},e})();function co(e,t){for(var r=ae(t),i=r.length,n=!1,a=0;a<i;++a){var o=r[a],s=t[o],l=je(e,o);s instanceof ul?(_e(e,o,s.execute(l)),n=!0):l!==s&&(_e(e,o,s),n=!0)}return n}var uo=(function(){function e(){}return e.prototype._trans=function(t,r,i){var n=this._tx||R.trans,a=this.name,o=Re&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(t==="readonly"?"read":"write"," ").concat(this.name));function s(u,d,f){if(!f.schema[a])throw new z.NotFound("Table "+a+" not part of transaction");return r(f.idbtrans,f)}var l=Kt();try{var c=n&&n.db._novip===this.db._novip?n===R.trans?n._promise(t,s,i):Je(function(){return n._promise(t,s,i)},{trans:n,transless:R.transless||R}):en(this.db,t,[this.name],s);return o&&(c._consoleTask=o,c=c.catch(function(u){return console.trace(u),Z(u)})),c}finally{l&&Bt()}},e.prototype.get=function(t,r){var i=this;return t&&t.constructor===Object?this.where(t).first(r):t==null?Z(new z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(n){return i.core.get({trans:n,key:t}).then(function(a){return i.hook.reading.fire(a)})}).then(r)},e.prototype.where=function(t){if(typeof t=="string")return new this.db.WhereClause(this,t);if(Y(t))return new this.db.WhereClause(this,"[".concat(t.join("+"),"]"));var r=ae(t);if(r.length===1)return this.where(r[0]).equals(t[r[0]]);var i=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&r.every(function(f){return u.keyPath.indexOf(f)>=0})){for(var d=0;d<r.length;++d)if(r.indexOf(u.keyPath[d])===-1)return!1;return!0}return!1}).sort(function(u,d){return u.keyPath.length-d.keyPath.length})[0];if(i&&this.db._maxKey!==pt){var n=i.keyPath.slice(0,r.length);return this.where(n).equals(n.map(function(u){return t[u]}))}!i&&Re&&console.warn("The query ".concat(JSON.stringify(t)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(r.join("+"),"]"));var a=this.schema.idxByName;function o(u,d){return U(u,d)===0}var s=r.reduce(function(u,d){var f=u[0],_=u[1],p=a[d],g=t[d];return[f||p,f||!p?$t(_,p&&p.multi?function(w){var y=je(w,d);return Y(y)&&y.some(function(I){return o(g,I)})}:function(w){return o(g,je(w,d))}):_]},[null,null]),l=s[0],c=s[1];return l?this.where(l.name).equals(t[l.keyPath]).filter(c):i?this.filter(c):this.where(r).equals("")},e.prototype.filter=function(t){return this.toCollection().and(t)},e.prototype.count=function(t){return this.toCollection().count(t)},e.prototype.offset=function(t){return this.toCollection().offset(t)},e.prototype.limit=function(t){return this.toCollection().limit(t)},e.prototype.each=function(t){return this.toCollection().each(t)},e.prototype.toArray=function(t){return this.toCollection().toArray(t)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(t){return new this.db.Collection(new this.db.WhereClause(this,Y(t)?"[".concat(t.join("+"),"]"):t))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(t){var r=this,i=r.db,n=r.name;this.schema.mappedClass=t,t.prototype instanceof ll&&(t=(function(l){As(c,l);function c(){return l!==null&&l.apply(this,arguments)||this}return Object.defineProperty(c.prototype,"db",{get:function(){return i},enumerable:!1,configurable:!0}),c.prototype.table=function(){return n},c})(t));for(var a=new Set,o=t.prototype;o;o=Ft(o))Object.getOwnPropertyNames(o).forEach(function(l){return a.add(l)});var s=function(l){if(!l)return l;var c=Object.create(t.prototype);for(var u in l)if(!a.has(u))try{c[u]=l[u]}catch{}return c};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=s,this.hook("reading",s),t},e.prototype.defineClass=function(){function t(r){xe(this,r)}return this.mapToClass(t)},e.prototype.add=function(t,r){var i=this,n=this.schema.primKey,a=n.auto,o=n.keyPath,s=t;return o&&a&&(s=_r(o)(t)),this._trans("readwrite",function(l){return i.core.mutate({trans:l,type:"add",keys:r!=null?[r]:null,values:[s]})}).then(function(l){return l.numFailures?A.reject(l.failures[0]):l.lastResult}).then(function(l){if(o)try{_e(t,o,l)}catch{}return l})},e.prototype.upsert=function(t,r){var i=this,n=this.schema.primKey.keyPath;return this._trans("readwrite",function(a){return i.core.get({trans:a,key:t}).then(function(o){var s=o??{};return co(s,r),n&&_e(s,n,t),i.core.mutate({trans:a,type:"put",values:[s],keys:[t],upsert:!0,updates:{keys:[t],changeSpecs:[r]}}).then(function(l){return l.numFailures?A.reject(l.failures[0]):!!o})})})},e.prototype.update=function(t,r){if(typeof t=="object"&&!Y(t)){var i=je(t,this.schema.primKey.keyPath);return i===void 0?Z(new z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(r)}else return this.where(":id").equals(t).modify(r)},e.prototype.put=function(t,r){var i=this,n=this.schema.primKey,a=n.auto,o=n.keyPath,s=t;return o&&a&&(s=_r(o)(t)),this._trans("readwrite",function(l){return i.core.mutate({trans:l,type:"put",values:[s],keys:r!=null?[r]:null})}).then(function(l){return l.numFailures?A.reject(l.failures[0]):l.lastResult}).then(function(l){if(o)try{_e(t,o,l)}catch{}return l})},e.prototype.delete=function(t){var r=this;return this._trans("readwrite",function(i){return r.core.mutate({trans:i,type:"delete",keys:[t]}).then(function(n){return zr(r,[t],n)}).then(function(n){return n.numFailures?A.reject(n.failures[0]):void 0})})},e.prototype.clear=function(){var t=this;return this._trans("readwrite",function(r){return t.core.mutate({trans:r,type:"deleteRange",range:lo}).then(function(i){return zr(t,null,i)})}).then(function(r){return r.numFailures?A.reject(r.failures[0]):void 0})},e.prototype.bulkGet=function(t){var r=this;return this._trans("readonly",function(i){return r.core.getMany({keys:t,trans:i}).then(function(n){return n.map(function(a){return r.hook.reading.fire(a)})})})},e.prototype.bulkAdd=function(t,r,i){var n=this,a=Array.isArray(r)?r:void 0;i=i||(a?void 0:r);var o=i?i.allKeys:void 0;return this._trans("readwrite",function(s){var l=n.schema.primKey,c=l.auto,u=l.keyPath;if(u&&a)throw new z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(a&&a.length!==t.length)throw new z.InvalidArgument("Arguments objects and keys must have the same length");var d=t.length,f=u&&c?t.map(_r(u)):t;return n.core.mutate({trans:s,type:"add",keys:a,values:f,wantResults:o}).then(function(_){var p=_.numFailures,g=_.results,w=_.lastResult,y=_.failures,I=o?g:w;if(p===0)return I;throw new Dt("".concat(n.name,".bulkAdd(): ").concat(p," of ").concat(d," operations failed"),y)})})},e.prototype.bulkPut=function(t,r,i){var n=this,a=Array.isArray(r)?r:void 0;i=i||(a?void 0:r);var o=i?i.allKeys:void 0;return this._trans("readwrite",function(s){var l=n.schema.primKey,c=l.auto,u=l.keyPath;if(u&&a)throw new z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(a&&a.length!==t.length)throw new z.InvalidArgument("Arguments objects and keys must have the same length");var d=t.length,f=u&&c?t.map(_r(u)):t;return n.core.mutate({trans:s,type:"put",keys:a,values:f,wantResults:o}).then(function(_){var p=_.numFailures,g=_.results,w=_.lastResult,y=_.failures,I=o?g:w;if(p===0)return I;throw new Dt("".concat(n.name,".bulkPut(): ").concat(p," of ").concat(d," operations failed"),y)})})},e.prototype.bulkUpdate=function(t){var r=this,i=this.core,n=t.map(function(s){return s.key}),a=t.map(function(s){return s.changes}),o=[];return this._trans("readwrite",function(s){return i.getMany({trans:s,keys:n,cache:"clone"}).then(function(l){var c=[],u=[];t.forEach(function(f,_){var p=f.key,g=f.changes,w=l[_];if(w){for(var y=0,I=Object.keys(g);y<I.length;y++){var $=I[y],x=g[$];if($===r.schema.primKey.keyPath){if(U(x,p)!==0)throw new z.Constraint("Cannot update primary key in bulkUpdate()")}else _e(w,$,x)}o.push(_),c.push(p),u.push(w)}});var d=c.length;return i.mutate({trans:s,type:"put",keys:c,values:u,updates:{keys:n,changeSpecs:a}}).then(function(f){var _=f.numFailures,p=f.failures;if(_===0)return d;for(var g=0,w=Object.keys(p);g<w.length;g++){var y=w[g],I=o[Number(y)];if(I!=null){var $=p[y];delete p[y],p[I]=$}}throw new Dt("".concat(r.name,".bulkUpdate(): ").concat(_," of ").concat(d," operations failed"),p)})})})},e.prototype.bulkDelete=function(t){var r=this,i=t.length;return this._trans("readwrite",function(n){return r.core.mutate({trans:n,type:"delete",keys:t}).then(function(a){return zr(r,t,a)})}).then(function(n){var a=n.numFailures,o=n.lastResult,s=n.failures;if(a===0)return o;throw new Dt("".concat(r.name,".bulkDelete(): ").concat(a," of ").concat(i," operations failed"),s)})},e})();function vr(e){var t={},r=function(s,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return t[s].subscribe.apply(null,u),e}else if(typeof s=="string")return t[s]};r.addEventType=a;for(var i=1,n=arguments.length;i<n;++i)a(arguments[i]);return r;function a(s,l,c){if(typeof s=="object")return o(s);l||(l=Ws),c||(c=V);var u={subscribers:[],fire:c,subscribe:function(d){u.subscribers.indexOf(d)===-1&&(u.subscribers.push(d),u.fire=l(u.fire,d))},unsubscribe:function(d){u.subscribers=u.subscribers.filter(function(f){return f!==d}),u.fire=u.subscribers.reduce(l,c)}};return t[s]=r[s]=u,u}function o(s){ae(s).forEach(function(l){var c=s[l];if(Y(c))a(l,s[l][0],s[l][1]);else if(c==="asap")var u=a(l,gr,function(){for(var f=arguments.length,_=new Array(f);f--;)_[f]=arguments[f];u.subscribers.forEach(function(p){Wa(function(){p.apply(null,_)})})});else throw new z.InvalidArgument("Invalid event config")})}}function yr(e,t){return Nt(t).from({prototype:e}),t}function pl(e){return yr(uo.prototype,function(r,i,n){this.db=e,this._tx=n,this.name=r,this.schema=i,this.hook=e._allTables[r]?e._allTables[r].hook:vr(null,{creating:[qs,V],reading:[Us,gr],updating:[Vs,V],deleting:[Hs,V]})})}function Et(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ei(e,t){e.filter=$t(e.filter,t)}function Si(e,t,r){var i=e.replayFilter;e.replayFilter=i?function(){return $t(i(),t())}:t,e.justLimit=r&&!i}function hl(e,t){e.isMatch=$t(e.isMatch,t)}function Nr(e,t){if(e.isPrimKey)return t.primaryKey;var r=t.getIndexByKeyPath(e.index);if(!r)throw new z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return r}function ca(e,t,r){var i=Nr(e,t.schema);return t.openCursor({trans:r,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:i,range:e.range}})}function wr(e,t,r,i){var n=e.replayFilter?$t(e.filter,e.replayFilter()):e.filter;if(e.or){var a={},o=function(s,l,c){if(!n||n(l,c,function(f){return l.stop(f)},function(f){return l.fail(f)})){var u=l.primaryKey,d=""+u;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(u)),$e(a,d)||(a[d]=!0,t(s,l,c))}};return Promise.all([e.or._iterate(o,r),da(ca(e,i,r),e.algorithm,o,!e.keysOnly&&e.valueMapper)])}else return da(ca(e,i,r),$t(e.algorithm,n),t,!e.keysOnly&&e.valueMapper)}function da(e,t,r,i){var n=i?function(o,s,l){return r(i(o),s,l)}:r,a=W(n);return e.then(function(o){if(o)return o.start(function(){var s=function(){return o.continue()};(!t||t(o,function(l){return s=l},function(l){o.stop(l),s=V},function(l){o.fail(l),s=V}))&&a(o.value,o,function(l){return s=l}),s()})})}var ml=(function(){function e(){}return e.prototype._read=function(t,r){var i=this._ctx;return i.error?i.table._trans(null,Z.bind(null,i.error)):i.table._trans("readonly",t).then(r)},e.prototype._write=function(t){var r=this._ctx;return r.error?r.table._trans(null,Z.bind(null,r.error)):r.table._trans("readwrite",t,"locked")},e.prototype._addAlgorithm=function(t){var r=this._ctx;r.algorithm=$t(r.algorithm,t)},e.prototype._iterate=function(t,r){return wr(this._ctx,t,r,this._ctx.table.core)},e.prototype.clone=function(t){var r=Object.create(this.constructor.prototype),i=Object.create(this._ctx);return t&&xe(i,t),r._ctx=i,r},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(t){var r=this._ctx;return this._read(function(i){return wr(r,t,i,r.table.core)})},e.prototype.count=function(t){var r=this;return this._read(function(i){var n=r._ctx,a=n.table.core;if(Et(n,!0))return a.count({trans:i,query:{index:Nr(n,a.schema),range:n.range}}).then(function(s){return Math.min(s,n.limit)});var o=0;return wr(n,function(){return++o,!1},i,a).then(function(){return o})}).then(t)},e.prototype.sortBy=function(t,r){var i=t.split(".").reverse(),n=i[0],a=i.length-1;function o(c,u){return u?o(c[i[u]],u-1):c[n]}var s=this._ctx.dir==="next"?1:-1;function l(c,u){var d=o(c,a),f=o(u,a);return U(d,f)*s}return this.toArray(function(c){return c.slice().sort(l)}).then(r)},e.prototype.toArray=function(t){var r=this;return this._read(function(i){var n=r._ctx;if(Et(n,!0)&&n.limit>0){var a=n.valueMapper,o=Nr(n,n.table.core.schema);return n.table.core.query({trans:i,limit:n.limit,values:!0,direction:n.dir==="prev"?"prev":void 0,query:{index:o,range:n.range}}).then(function(l){var c=l.result;return a?c.map(a):c})}else{var s=[];return wr(n,function(l){return s.push(l)},i,n.table.core).then(function(){return s})}},t)},e.prototype.offset=function(t){var r=this._ctx;return t<=0?this:(r.offset+=t,Et(r)?Si(r,function(){var i=t;return function(n,a){return i===0?!0:i===1?(--i,!1):(a(function(){n.advance(i),i=0}),!1)}}):Si(r,function(){var i=t;return function(){return--i<0}}),this)},e.prototype.limit=function(t){return this._ctx.limit=Math.min(this._ctx.limit,t),Si(this._ctx,function(){var r=t;return function(i,n,a){return--r<=0&&n(a),r>=0}},!0),this},e.prototype.until=function(t,r){return Ei(this._ctx,function(i,n,a){return t(i.value)?(n(a),r):!0}),this},e.prototype.first=function(t){return this.limit(1).toArray(function(r){return r[0]}).then(t)},e.prototype.last=function(t){return this.reverse().first(t)},e.prototype.filter=function(t){return Ei(this._ctx,function(r){return t(r.value)}),hl(this._ctx,t),this},e.prototype.and=function(t){return this.filter(t)},e.prototype.or=function(t){return new this.db.WhereClause(this._ctx.table,t,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(i,n){t(n.key,n)})},e.prototype.eachUniqueKey=function(t){return this._ctx.unique="unique",this.eachKey(t)},e.prototype.eachPrimaryKey=function(t){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(i,n){t(n.primaryKey,n)})},e.prototype.keys=function(t){var r=this._ctx;r.keysOnly=!r.isMatch;var i=[];return this.each(function(n,a){i.push(a.key)}).then(function(){return i}).then(t)},e.prototype.primaryKeys=function(t){var r=this._ctx;if(Et(r,!0)&&r.limit>0)return this._read(function(n){var a=Nr(r,r.table.core.schema);return r.table.core.query({trans:n,values:!1,limit:r.limit,direction:r.dir==="prev"?"prev":void 0,query:{index:a,range:r.range}})}).then(function(n){var a=n.result;return a}).then(t);r.keysOnly=!r.isMatch;var i=[];return this.each(function(n,a){i.push(a.primaryKey)}).then(function(){return i}).then(t)},e.prototype.uniqueKeys=function(t){return this._ctx.unique="unique",this.keys(t)},e.prototype.firstKey=function(t){return this.limit(1).keys(function(r){return r[0]}).then(t)},e.prototype.lastKey=function(t){return this.reverse().firstKey(t)},e.prototype.distinct=function(){var t=this._ctx,r=t.index&&t.table.schema.idxByName[t.index];if(!r||!r.multi)return this;var i={};return Ei(this._ctx,function(n){var a=n.primaryKey.toString(),o=$e(i,a);return i[a]=!0,!o}),this},e.prototype.modify=function(t){var r=this,i=this._ctx;return this._write(function(n){var a;typeof t=="function"?a=t:a=function(y){return co(y,t)};var o=i.table.core,s=o.schema.primaryKey,l=s.outbound,c=s.extractKey,u=200,d=r.db._options.modifyChunkSize;d&&(typeof d=="object"?u=d[o.name]||d["*"]||200:u=d);var f=[],_=0,p=[],g=function(y,I){var $=I.failures,x=I.numFailures;_+=y-x;for(var v=0,C=ae($);v<C.length;v++){var k=C[v];f.push($[k])}},w=t===ua;return r.clone().primaryKeys().then(function(y){var I=Et(i)&&i.limit===1/0&&(typeof t!="function"||w)&&{index:i.index,range:i.range},$=function(x){var v=Math.min(u,y.length-x),C=y.slice(x,x+v);return(w?Promise.resolve([]):o.getMany({trans:n,keys:C,cache:"immutable"})).then(function(k){var E=[],O=[],j=l?[]:null,S=w?C:[];if(!w)for(var P=0;P<v;++P){var M=k[P],D={value:_t(M),primKey:y[x+P]};a.call(D,D.value,D)!==!1&&(D.value==null?S.push(y[x+P]):!l&&U(c(M),c(D.value))!==0?(S.push(y[x+P]),E.push(D.value)):(O.push(D.value),l&&j.push(y[x+P])))}return Promise.resolve(E.length>0&&o.mutate({trans:n,type:"add",values:E}).then(function(q){for(var F in q.failures)S.splice(parseInt(F),1);g(E.length,q)})).then(function(){return(O.length>0||I&&typeof t=="object")&&o.mutate({trans:n,type:"put",keys:j,values:O,criteria:I,changeSpec:typeof t!="function"&&t,isAdditionalChunk:x>0}).then(function(q){return g(O.length,q)})}).then(function(){return(S.length>0||I&&w)&&o.mutate({trans:n,type:"delete",keys:S,criteria:I,isAdditionalChunk:x>0}).then(function(q){return zr(i.table,S,q)}).then(function(q){return g(S.length,q)})}).then(function(){return y.length>x+v&&$(x+u)})})};return $(0).then(function(){if(f.length>0)throw new Wr("Error modifying one or more objects",f,_,p);return y.length})})})},e.prototype.delete=function(){var t=this._ctx,r=t.range;return Et(t)&&!t.table.schema.yProps&&(t.isPrimKey||r.type===3)?this._write(function(i){var n=t.table.core.schema.primaryKey,a=r;return t.table.core.count({trans:i,query:{index:n,range:a}}).then(function(o){return t.table.core.mutate({trans:i,type:"deleteRange",range:a}).then(function(s){var l=s.failures,c=s.numFailures;if(c)throw new Wr("Could not delete some values",Object.keys(l).map(function(u){return l[u]}),o-c);return o-c})})}):this.modify(ua)},e})(),ua=function(e,t){return t.value=null};function fl(e){return yr(ml.prototype,function(r,i){this.db=e;var n=lo,a=null;if(i)try{n=i()}catch(c){a=c}var o=r._ctx,s=o.table,l=s.hook.reading.fire;this._ctx={table:s,index:o.index,isPrimKey:!o.index||s.schema.primKey.keyPath&&o.index===s.schema.primKey.name,range:n,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:a,or:o.or,valueMapper:l!==gr?l:null}})}function gl(e,t){return e<t?-1:e===t?0:1}function vl(e,t){return e>t?-1:e===t?0:1}function we(e,t,r){var i=e instanceof ho?new e.Collection(e):e;return i._ctx.error=r?new r(t):new TypeError(t),i}function St(e){return new e.Collection(e,function(){return po("")}).limit(0)}function yl(e){return e==="next"?function(t){return t.toUpperCase()}:function(t){return t.toLowerCase()}}function bl(e){return e==="next"?function(t){return t.toLowerCase()}:function(t){return t.toUpperCase()}}function _l(e,t,r,i,n,a){for(var o=Math.min(e.length,i.length),s=-1,l=0;l<o;++l){var c=t[l];if(c!==i[l])return n(e[l],r[l])<0?e.substr(0,l)+r[l]+r.substr(l+1):n(e[l],i[l])<0?e.substr(0,l)+i[l]+r.substr(l+1):s>=0?e.substr(0,s)+t[s]+r.substr(s+1):null;n(e[l],c)<0&&(s=l)}return o<i.length&&a==="next"?e+r.substr(e.length):o<e.length&&a==="prev"?e.substr(0,r.length):s<0?null:e.substr(0,s)+i[s]+r.substr(s+1)}function xr(e,t,r,i){var n,a,o,s,l,c,u,d=r.length;if(!r.every(function(g){return typeof g=="string"}))return we(e,so);function f(g){n=yl(g),a=bl(g),o=g==="next"?gl:vl;var w=r.map(function(y){return{lower:a(y),upper:n(y)}}).sort(function(y,I){return o(y.lower,I.lower)});s=w.map(function(y){return y.upper}),l=w.map(function(y){return y.lower}),c=g,u=g==="next"?"":i}f("next");var _=new e.Collection(e,function(){return qe(s[0],l[d-1]+i)});_._ondirectionchange=function(g){f(g)};var p=0;return _._addAlgorithm(function(g,w,y){var I=g.key;if(typeof I!="string")return!1;var $=a(I);if(t($,l,p))return!0;for(var x=null,v=p;v<d;++v){var C=_l(I,$,s[v],l[v],o,c);C===null&&x===null?p=v+1:(x===null||o(x,C)>0)&&(x=C)}return w(x!==null?function(){g.continue(x+u)}:y),!1}),_}function qe(e,t,r,i){return{type:2,lower:e,upper:t,lowerOpen:r,upperOpen:i}}function po(e){return{type:1,lower:e,upper:e}}var ho=(function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(t,r,i,n){i=i!==!1,n=n===!0;try{return this._cmp(t,r)>0||this._cmp(t,r)===0&&(i||n)&&!(i&&n)?St(this):new this.Collection(this,function(){return qe(t,r,!i,!n)})}catch{return we(this,ze)}},e.prototype.equals=function(t){return t==null?we(this,ze):new this.Collection(this,function(){return po(t)})},e.prototype.above=function(t){return t==null?we(this,ze):new this.Collection(this,function(){return qe(t,void 0,!0)})},e.prototype.aboveOrEqual=function(t){return t==null?we(this,ze):new this.Collection(this,function(){return qe(t,void 0,!1)})},e.prototype.below=function(t){return t==null?we(this,ze):new this.Collection(this,function(){return qe(void 0,t,!1,!0)})},e.prototype.belowOrEqual=function(t){return t==null?we(this,ze):new this.Collection(this,function(){return qe(void 0,t)})},e.prototype.startsWith=function(t){return typeof t!="string"?we(this,so):this.between(t,t+pt,!0,!0)},e.prototype.startsWithIgnoreCase=function(t){return t===""?this.startsWith(t):xr(this,function(r,i){return r.indexOf(i[0])===0},[t],pt)},e.prototype.equalsIgnoreCase=function(t){return xr(this,function(r,i){return r===i[0]},[t],"")},e.prototype.anyOfIgnoreCase=function(){var t=Le.apply(At,arguments);return t.length===0?St(this):xr(this,function(r,i){return i.indexOf(r)!==-1},t,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var t=Le.apply(At,arguments);return t.length===0?St(this):xr(this,function(r,i){return i.some(function(n){return r.indexOf(n)===0})},t,pt)},e.prototype.anyOf=function(){var t=this,r=Le.apply(At,arguments),i=this._cmp;try{r.sort(i)}catch{return we(this,ze)}if(r.length===0)return St(this);var n=new this.Collection(this,function(){return qe(r[0],r[r.length-1])});n._ondirectionchange=function(o){i=o==="next"?t._ascending:t._descending,r.sort(i)};var a=0;return n._addAlgorithm(function(o,s,l){for(var c=o.key;i(c,r[a])>0;)if(++a,a===r.length)return s(l),!1;return i(c,r[a])===0?!0:(s(function(){o.continue(r[a])}),!1)}),n},e.prototype.notEqual=function(t){return this.inAnyRange([[tn,t],[t,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var t=Le.apply(At,arguments);if(t.length===0)return new this.Collection(this);try{t.sort(this._ascending)}catch{return we(this,ze)}var r=t.reduce(function(i,n){return i?i.concat([[i[i.length-1][1],n]]):[[tn,n]]},null);return r.push([t[t.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(t,r){var i=this,n=this._cmp,a=this._ascending,o=this._descending,s=this._min,l=this._max;if(t.length===0)return St(this);if(!t.every(function(v){return v[0]!==void 0&&v[1]!==void 0&&a(v[0],v[1])<=0}))return we(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",z.InvalidArgument);var c=!r||r.includeLowers!==!1,u=r&&r.includeUppers===!0;function d(v,C){for(var k=0,E=v.length;k<E;++k){var O=v[k];if(n(C[0],O[1])<0&&n(C[1],O[0])>0){O[0]=s(O[0],C[0]),O[1]=l(O[1],C[1]);break}}return k===E&&v.push(C),v}var f=a;function _(v,C){return f(v[0],C[0])}var p;try{p=t.reduce(d,[]),p.sort(_)}catch{return we(this,ze)}var g=0,w=u?function(v){return a(v,p[g][1])>0}:function(v){return a(v,p[g][1])>=0},y=c?function(v){return o(v,p[g][0])>0}:function(v){return o(v,p[g][0])>=0};function I(v){return!w(v)&&!y(v)}var $=w,x=new this.Collection(this,function(){return qe(p[0][0],p[p.length-1][1],!c,!u)});return x._ondirectionchange=function(v){v==="next"?($=w,f=a):($=y,f=o),p.sort(_)},x._addAlgorithm(function(v,C,k){for(var E=v.key;$(E);)if(++g,g===p.length)return C(k),!1;return I(E)?!0:(i._cmp(E,p[g][1])===0||i._cmp(E,p[g][0])===0||C(function(){f===a?v.continue(p[g][0]):v.continue(p[g][1])}),!1)}),x},e.prototype.startsWithAnyOf=function(){var t=Le.apply(At,arguments);return t.every(function(r){return typeof r=="string"})?t.length===0?St(this):this.inAnyRange(t.map(function(r){return[r,r+pt]})):we(this,"startsWithAnyOf() only works with strings")},e})();function wl(e){return yr(ho.prototype,function(r,i,n){if(this.db=e,this._ctx={table:r,index:i===":id"?null:i,or:n},this._cmp=this._ascending=U,this._descending=function(a,o){return U(o,a)},this._max=function(a,o){return U(a,o)>0?a:o},this._min=function(a,o){return U(a,o)<0?a:o},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new z.MissingAPI})}function De(e){return W(function(t){return lr(t),e(t.target.error),!1})}function lr(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var hi="storagemutated",rn="x-storagemutated-1",tt=vr(null,hi),xl=(function(){function e(){}return e.prototype._lock=function(){return Xt(!R.global),++this._reculock,this._reculock===1&&!R.global&&(R.lockOwnerFor=this),this},e.prototype._unlock=function(){if(Xt(!R.global),--this._reculock===0)for(R.global||(R.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var t=this._blockedFuncs.shift();try{xt(t[1],t[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&R.lockOwnerFor!==this},e.prototype.create=function(t){var r=this;if(!this.mode)return this;var i=this.db.idbdb,n=this.db._state.dbOpenError;if(Xt(!this.idbtrans),!t&&!i)switch(n&&n.name){case"DatabaseClosedError":throw new z.DatabaseClosed(n);case"MissingAPIError":throw new z.MissingAPI(n.message,n);default:throw new z.OpenFailed(n)}if(!this.active)throw new z.TransactionInactive;return Xt(this._completion._state===null),t=this.idbtrans=t||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):i.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),t.onerror=W(function(a){lr(a),r._reject(t.error)}),t.onabort=W(function(a){lr(a),r.active&&r._reject(new z.Abort(t.error)),r.active=!1,r.on("abort").fire(a)}),t.oncomplete=W(function(){r.active=!1,r._resolve(),"mutatedParts"in t&&tt.storagemutated.fire(t.mutatedParts)}),this},e.prototype._promise=function(t,r,i){var n=this;if(t==="readwrite"&&this.mode!=="readwrite")return Z(new z.ReadOnly("Transaction is readonly"));if(!this.active)return Z(new z.TransactionInactive);if(this._locked())return new A(function(o,s){n._blockedFuncs.push([function(){n._promise(t,r,i).then(o,s)},R])});if(i)return Je(function(){var o=new A(function(s,l){n._lock();var c=r(s,l,n);c&&c.then&&c.then(s,l)});return o.finally(function(){return n._unlock()}),o._lib=!0,o});var a=new A(function(o,s){var l=r(o,s,n);l&&l.then&&l.then(o,s)});return a._lib=!0,a},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(t){var r=this._root(),i=A.resolve(t);if(r._waitingFor)r._waitingFor=r._waitingFor.then(function(){return i});else{r._waitingFor=i,r._waitingQueue=[];var n=r.idbtrans.objectStore(r.storeNames[0]);(function o(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(n.get(-1/0).onsuccess=o)})()}var a=r._waitingFor;return new A(function(o,s){i.then(function(l){return r._waitingQueue.push(W(o.bind(null,l)))},function(l){return r._waitingQueue.push(W(s.bind(null,l)))}).finally(function(){r._waitingFor===a&&(r._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new z.Abort))},e.prototype.table=function(t){var r=this._memoizedTables||(this._memoizedTables={});if($e(r,t))return r[t];var i=this.schema[t];if(!i)throw new z.NotFound("Table "+t+" not part of transaction");var n=new this.db.Table(t,i,this);return n.core=this.db.core.table(t),r[t]=n,n},e})();function $l(e){return yr(xl.prototype,function(r,i,n,a,o){var s=this;r!=="readonly"&&i.forEach(function(l){var c,u=(c=n[l])===null||c===void 0?void 0:c.yProps;u&&(i=i.concat(u.map(function(d){return d.updatesTable})))}),this.db=e,this.mode=r,this.storeNames=i,this.schema=n,this.chromeTransactionDurability=a,this.idbtrans=null,this.on=vr(this,"complete","error","abort"),this.parent=o||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new A(function(l,c){s._resolve=l,s._reject=c}),this._completion.then(function(){s.active=!1,s.on.complete.fire()},function(l){var c=s.active;return s.active=!1,s.on.error.fire(l),s.parent?s.parent._reject(l):c&&s.idbtrans&&s.idbtrans.abort(),Z(l)})})}function nn(e,t,r,i,n,a,o,s){return{name:e,keyPath:t,unique:r,multi:i,auto:n,compound:a,src:(r&&!o?"&":"")+(i?"*":"")+(n?"++":"")+mo(t),type:s}}function mo(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Sn(e,t,r){return{name:e,primKey:t,indexes:r,mappedClass:null,idxByName:Os(r,function(i){return[i.name,i]})}}function Il(e){return e.length===1?e[0]:e}var cr=function(e){try{return e.only([[]]),cr=function(){return[[]]},[[]]}catch{return cr=function(){return pt},pt}};function an(e){return e==null?function(){}:typeof e=="string"?kl(e):function(t){return je(t,e)}}function kl(e){var t=e.split(".");return t.length===1?function(r){return r[e]}:function(r){return je(r,e)}}function pa(e){return[].slice.call(e)}var El=0;function rr(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Sl(e,t,r){function i(f,_){var p=pa(f.objectStoreNames),g=p.length>0?_.objectStore(p[0]):{};return{schema:{name:f.name,tables:p.map(function(w){return _.objectStore(w)}).map(function(w){var y=w.keyPath,I=w.autoIncrement,$=Y(y),x=y==null,v={},C={name:w.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:x,compound:$,keyPath:y,autoIncrement:I,unique:!0,extractKey:an(y)},indexes:pa(w.indexNames).map(function(k){return w.index(k)}).map(function(k){var E=k.name,O=k.unique,j=k.multiEntry,S=k.keyPath,P=Y(S),M={name:E,compound:P,keyPath:S,unique:O,multiEntry:j,extractKey:an(S)};return v[rr(S)]=M,M}),getIndexByKeyPath:function(k){return v[rr(k)]}};return v[":id"]=C.primaryKey,y!=null&&(v[rr(y)]=C.primaryKey),C})},hasGetAll:p.length>0&&"getAll"in g&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in g}}function n(f){if(f.type===3)return null;if(f.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var _=f.lower,p=f.upper,g=f.lowerOpen,w=f.upperOpen,y=_===void 0?p===void 0?null:t.upperBound(p,!!w):p===void 0?t.lowerBound(_,!!g):t.bound(_,p,!!g,!!w);return y}function a(f){var _=f.name;function p(y){var I=y.trans,$=y.type,x=y.keys,v=y.values,C=y.range;return new Promise(function(k,E){k=W(k);var O=I.objectStore(_),j=O.keyPath==null,S=$==="put"||$==="add";if(!S&&$!=="delete"&&$!=="deleteRange")throw new Error("Invalid operation type: "+$);var P=(x||v||{length:1}).length;if(x&&v&&x.length!==v.length)throw new Error("Given keys array must have same length as given values array.");if(P===0)return k({numFailures:0,failures:{},results:[],lastResult:void 0});var M,D=[],q=[],F=0,te=function(oe){++F,lr(oe)};if($==="deleteRange"){if(C.type===4)return k({numFailures:F,failures:q,results:[],lastResult:void 0});C.type===3?D.push(M=O.clear()):D.push(M=O.delete(n(C)))}else{var Ee=S?j?[v,x]:[v,null]:[x,null],me=Ee[0],nt=Ee[1];if(S)for(var pe=0;pe<P;++pe)D.push(M=nt&&nt[pe]!==void 0?O[$](me[pe],nt[pe]):O[$](me[pe])),M.onerror=te;else for(var pe=0;pe<P;++pe)D.push(M=O[$](me[pe])),M.onerror=te}var Se=function(oe){var at=oe.target.result;D.forEach(function(Me,br){return Me.error!=null&&(q[br]=Me.error)}),k({numFailures:F,failures:q,results:$==="delete"?x:D.map(function(Me){return Me.result}),lastResult:at})};M.onerror=function(oe){te(oe),Se(oe)},M.onsuccess=Se})}function g(y){var I=y.trans,$=y.values,x=y.query,v=y.reverse,C=y.unique;return new Promise(function(k,E){k=W(k);var O=x.index,j=x.range,S=I.objectStore(_),P=O.isPrimaryKey?S:S.index(O.name),M=v?C?"prevunique":"prev":C?"nextunique":"next",D=$||!("openKeyCursor"in P)?P.openCursor(n(j),M):P.openKeyCursor(n(j),M);D.onerror=De(E),D.onsuccess=W(function(q){var F=D.result;if(!F){k(null);return}F.___id=++El,F.done=!1;var te=F.continue.bind(F),Ee=F.continuePrimaryKey;Ee&&(Ee=Ee.bind(F));var me=F.advance.bind(F),nt=function(){throw new Error("Cursor not started")},pe=function(){throw new Error("Cursor not stopped")};F.trans=I,F.stop=F.continue=F.continuePrimaryKey=F.advance=nt,F.fail=W(E),F.next=function(){var Se=this,oe=1;return this.start(function(){return oe--?Se.continue():Se.stop()}).then(function(){return Se})},F.start=function(Se){var oe=new Promise(function(Me,br){Me=W(Me),D.onerror=De(br),F.fail=br,F.stop=function(Ko){F.stop=F.continue=F.continuePrimaryKey=F.advance=pe,Me(Ko)}}),at=function(){if(D.result)try{Se()}catch(Me){F.fail(Me)}else F.done=!0,F.start=function(){throw new Error("Cursor behind last entry")},F.stop()};return D.onsuccess=W(function(Me){D.onsuccess=at,at()}),F.continue=te,F.continuePrimaryKey=Ee,F.advance=me,at(),oe},k(F)},E)})}function w(y,I){return function($){return new Promise(function(x,v){var C;x=W(x);var k=$.trans,E=$.values,O=$.limit,j=$.query,S=(C=$.direction)!==null&&C!==void 0?C:"next",P=O===1/0?void 0:O,M=j.index,D=j.range,q=k.objectStore(_),F=M.isPrimaryKey?q:q.index(M.name),te=n(D);if(O===0)return x({result:[]});if(I){var Ee={query:te,count:P,direction:S},me=E?F.getAll(Ee):F.getAllKeys(Ee);me.onsuccess=function(oe){return x({result:oe.target.result})},me.onerror=De(v)}else if(y&&S==="next"){var me=E?F.getAll(te,P):F.getAllKeys(te,P);me.onsuccess=function(at){return x({result:at.target.result})},me.onerror=De(v)}else{var nt=0,pe=E||!("openKeyCursor"in F)?F.openCursor(te,S):F.openKeyCursor(te,S),Se=[];pe.onsuccess=function(){var oe=pe.result;if(!oe)return x({result:Se});if(Se.push(E?oe.value:oe.primaryKey),++nt===O)return x({result:Se});oe.continue()},pe.onerror=De(v)}})}}return{name:_,schema:f,mutate:p,getMany:function(y){var I=y.trans,$=y.keys;return new Promise(function(x,v){x=W(x);for(var C=I.objectStore(_),k=$.length,E=new Array(k),O=0,j=0,S,P=function(F){var te=F.target;(E[te._pos]=te.result)!=null,++j===O&&x(E)},M=De(v),D=0;D<k;++D){var q=$[D];q!=null&&(S=C.get($[D]),S._pos=D,S.onsuccess=P,S.onerror=M,++O)}O===0&&x(E)})},get:function(y){var I=y.trans,$=y.key;return new Promise(function(x,v){x=W(x);var C=I.objectStore(_),k=C.get($);k.onsuccess=function(E){return x(E.target.result)},k.onerror=De(v)})},query:w(l,c),openCursor:g,count:function(y){var I=y.query,$=y.trans,x=I.index,v=I.range;return new Promise(function(C,k){var E=$.objectStore(_),O=x.isPrimaryKey?E:E.index(x.name),j=n(v),S=j?O.count(j):O.count();S.onsuccess=W(function(P){return C(P.target.result)}),S.onerror=De(k)})}}}var o=i(e,r),s=o.schema,l=o.hasGetAll,c=o.hasIdb3Features,u=s.tables.map(function(f){return a(f)}),d={};return u.forEach(function(f){return d[f.name]=f}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(f){var _=d[f];if(!_)throw new Error("Table '".concat(f,"' not found"));return d[f]},MIN_KEY:-1/0,MAX_KEY:cr(t),schema:s}}function Cl(e,t){return t.reduce(function(r,i){var n=i.create;return B(B({},r),n(r))},e)}function Ml(e,t,r,i){var n=r.IDBKeyRange;r.indexedDB;var a=Cl(Sl(t,n,i),e.dbcore);return{dbcore:a}}function Jr(e,t){var r=t.db,i=Ml(e._middlewares,r,e._deps,t);e.core=i.dbcore,e.tables.forEach(function(n){var a=n.name;e.core.schema.tables.some(function(o){return o.name===a})&&(n.core=e.core.table(a),e[a]instanceof e.Table&&(e[a].core=n.core))})}function Zr(e,t,r,i){r.forEach(function(n){var a=i[n];t.forEach(function(o){var s=Ha(o,n);(!s||"value"in s&&s.value===void 0)&&(o===e.Transaction.prototype||o instanceof e.Transaction?Xe(o,n,{get:function(){return this.table(n)},set:function(l){qa(this,n,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[n]=new e.Table(n,a))})})}function on(e,t){t.forEach(function(r){for(var i in r)r[i]instanceof e.Table&&delete r[i]})}function Al(e,t){return e._cfg.version-t._cfg.version}function Dl(e,t,r,i){var n=e._dbSchema;r.objectStoreNames.contains("$meta")&&!n.$meta&&(n.$meta=Sn("$meta",go("")[0],[]),e._storeNames.push("$meta"));var a=e._createTransaction("readwrite",e._storeNames,n);a.create(r),a._completion.catch(i);var o=a._reject.bind(a),s=R.transless||R;Je(function(){if(R.trans=a,R.transless=s,t===0)ae(n).forEach(function(l){Mn(r,l,n[l].primKey,n[l].indexes)}),Jr(e,r),A.follow(function(){return e.on.populate.fire(a)}).catch(o);else return Jr(e,r),Pl(e,a,t).then(function(l){return Ol(e,l,a,r)}).catch(o)})}function Tl(e,t){fo(e._dbSchema,t),t.db.version%10===0&&!t.objectStoreNames.contains("$meta")&&t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var r=mi(e,e.idbdb,t);ti(e,e._dbSchema,t);for(var i=Cn(r,e._dbSchema),n=function(c){if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(d){Re&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(d.src)),ei(u,d)})},a=0,o=i.change;a<o.length;a++){var s=o[a],l=n(s);if(typeof l=="object")return l.value}}function Pl(e,t,r){return t.storeNames.includes("$meta")?t.table("$meta").get("version").then(function(i){return i??r}):A.resolve(r)}function Ol(e,t,r,i){var n=[],a=e._versions,o=e._dbSchema=mi(e,e.idbdb,i),s=a.filter(function(c){return c._cfg.version>=t});if(s.length===0)return A.resolve();s.forEach(function(c){n.push(function(){var u=o,d=c._cfg.dbschema;ti(e,u,i),ti(e,d,i),o=e._dbSchema=d;var f=Cn(u,d);f.add.forEach(function(I){Mn(i,I[0],I[1].primKey,I[1].indexes)}),f.change.forEach(function(I){if(I.recreate)throw new z.Upgrade("Not yet support for changing primary key");var $=i.objectStore(I.name);I.add.forEach(function(x){return ei($,x)}),I.change.forEach(function(x){$.deleteIndex(x.name),ei($,x)}),I.del.forEach(function(x){return $.deleteIndex(x)})});var _=c._cfg.contentUpgrade;if(_&&c._cfg.version>t){Jr(e,i),r._memoizedTables={};var p=Qa(d);f.del.forEach(function(I){p[I]=u[I]}),on(e,[e.Transaction.prototype]),Zr(e,[e.Transaction.prototype],ae(p),p),r.schema=p;var g=bn(_);g&&jt();var w,y=A.follow(function(){if(w=_(r),w&&g){var I=Ze.bind(null,null);w.then(I,I)}});return w&&typeof w.then=="function"?A.resolve(w):y.then(function(){return w})}}),n.push(function(u){var d=c._cfg.dbschema;Rl(d,u),on(e,[e.Transaction.prototype]),Zr(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),r.schema=e._dbSchema}),n.push(function(u){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===c._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(d){return d!=="$meta"})):u.objectStore("$meta").put(c._cfg.version,"version"))})});function l(){return n.length?A.resolve(n.shift()(r.idbtrans)).then(l):A.resolve()}return l().then(function(){fo(o,i)})}function Cn(e,t){var r={del:[],add:[],change:[]},i;for(i in e)t[i]||r.del.push(i);for(i in t){var n=e[i],a=t[i];if(!n)r.add.push([i,a]);else{var o={name:i,def:a,recreate:!1,del:[],add:[],change:[]};if(""+(n.primKey.keyPath||"")!=""+(a.primKey.keyPath||"")||n.primKey.auto!==a.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=n.idxByName,l=a.idxByName,c=void 0;for(c in s)l[c]||o.del.push(c);for(c in l){var u=s[c],d=l[c];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&r.change.push(o)}}}return r}function Mn(e,t,r,i){var n=e.db.createObjectStore(t,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:{autoIncrement:r.auto});return i.forEach(function(a){return ei(n,a)}),n}function fo(e,t){ae(e).forEach(function(r){t.db.objectStoreNames.contains(r)||(Re&&console.debug("Dexie: Creating missing table",r),Mn(t,r,e[r].primKey,e[r].indexes))})}function Rl(e,t){[].slice.call(t.db.objectStoreNames).forEach(function(r){return e[r]==null&&t.db.deleteObjectStore(r)})}function ei(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function mi(e,t,r){var i={},n=di(t.objectStoreNames,0);return n.forEach(function(a){for(var o=r.objectStore(a),s=o.keyPath,l=nn(mo(s),s||"",!0,!1,!!o.autoIncrement,s&&typeof s!="string",!0),c=[],u=0;u<o.indexNames.length;++u){var d=o.index(o.indexNames[u]);s=d.keyPath;var f=nn(d.name,s,!!d.unique,!!d.multiEntry,!1,s&&typeof s!="string",!1);c.push(f)}i[a]=Sn(a,l,c)}),i}function Fl(e,t,r){e.verno=t.version/10;var i=e._dbSchema=mi(e,t,r);e._storeNames=di(t.objectStoreNames,0),Zr(e,[e._allTables],ae(i),i)}function zl(e,t){var r=mi(e,e.idbdb,t),i=Cn(r,e._dbSchema);return!(i.add.length||i.change.some(function(n){return n.add.length||n.change.length}))}function ti(e,t,r){for(var i=r.db.objectStoreNames,n=0;n<i.length;++n){var a=i[n],o=r.objectStore(a);e._hasGetAll="getAll"in o;for(var s=0;s<o.indexNames.length;++s){var l=o.indexNames[s],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+di(c).join("+")+"]";if(t[a]){var d=t[a].idxByName[u];d&&(d.name=l,delete t[a].idxByName[u],t[a].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function go(e){return e.split(",").map(function(t,r){var i,n=t.split(":"),a=(i=n[1])===null||i===void 0?void 0:i.trim();t=n[0].trim();var o=t.replace(/([&*]|\+\+)/g,""),s=/^\[/.test(o)?o.match(/^\[(.*)\]$/)[1].split("+"):o;return nn(o,s||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),Y(s),r===0,a)})}var Nl=(function(){function e(){}return e.prototype._createTableSchema=function(t,r,i){return Sn(t,r,i)},e.prototype._parseIndexSyntax=function(t){return go(t)},e.prototype._parseStoresSpec=function(t,r){var i=this;ae(t).forEach(function(n){if(t[n]!==null){var a=i._parseIndexSyntax(t[n]),o=a.shift();if(!o)throw new z.Schema("Invalid schema for table "+n+": "+t[n]);if(o.unique=!0,o.multi)throw new z.Schema("Primary key cannot be multiEntry*");a.forEach(function(l){if(l.auto)throw new z.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new z.Schema("Index must have a name and cannot be an empty string")});var s=i._createTableSchema(n,o,a);r[n]=s}})},e.prototype.stores=function(t){var r=this.db;this._cfg.storesSource=this._cfg.storesSource?xe(this._cfg.storesSource,t):t;var i=r._versions,n={},a={};return i.forEach(function(o){xe(n,o._cfg.storesSource),a=o._cfg.dbschema={},o._parseStoresSpec(n,a)}),r._dbSchema=a,on(r,[r._allTables,r,r.Transaction.prototype]),Zr(r,[r._allTables,r,r.Transaction.prototype,this._cfg.tables],ae(a),a),r._storeNames=ae(a),this},e.prototype.upgrade=function(t){return this._cfg.contentUpgrade=xn(this._cfg.contentUpgrade||V,t),this},e})();function Ll(e){return yr(Nl.prototype,function(r){this.db=e,this._cfg={version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var dr=Kl();function Kl(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var e=new Set,t=new FinalizationRegistry(function(o){e.delete(o)}),r=function(){return Array.from(e).map(function(o){return o.deref()}).filter(function(o){return o!==void 0})},i=function(o){var s=new WeakRef(o._novip);if(e.add(s),t.register(o._novip,s,s),e.size>o._options.maxConnections){var l=e.values().next().value;e.delete(l),t.unregister(l)}},n=function(o){if(o)for(var s=e.values(),l=s.next();!l.done;){var c=l.value;if(c.deref()===o._novip){e.delete(c),t.unregister(c);return}l=s.next()}};return{toArray:r,add:i,remove:n}}else{var a=[],r=function(){return a},i=function(c){a.push(c._novip)},n=function(c){if(c){var u=a.indexOf(c._novip);u!==-1&&a.splice(u,1)}};return{toArray:r,add:i,remove:n}}}function An(e,t){var r=e._dbNamesDB;return r||(r=e._dbNamesDB=new pr(pi,{addons:[],indexedDB:e,IDBKeyRange:t}),r.version(1).stores({dbnames:"name"})),r.table("dbnames")}function Dn(e){return e&&typeof e.databases=="function"}function Bl(e){var t=e.indexedDB,r=e.IDBKeyRange;return Dn(t)?Promise.resolve(t.databases()).then(function(i){return i.map(function(n){return n.name}).filter(function(n){return n!==pi})}):An(t,r).toCollection().primaryKeys()}function jl(e,t){var r=e.indexedDB,i=e.IDBKeyRange;!Dn(r)&&t!==pi&&An(r,i).put({name:t}).catch(V)}function Gl(e,t){var r=e.indexedDB,i=e.IDBKeyRange;!Dn(r)&&t!==pi&&An(r,i).delete(t).catch(V)}function sn(e){return Je(function(){return R.letThrough=!0,e()})}function Ul(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var t;return new Promise(function(r){var i=function(){return indexedDB.databases().finally(r)};t=setInterval(i,100),i()}).finally(function(){return clearInterval(t)})}var Ci;function Tn(e){return!("from"in e)}var fe=function(e,t){if(this)xe(this,arguments.length?{d:1,from:e,to:arguments.length>1?t:e}:{d:0});else{var r=new fe;return e&&"d"in e&&xe(r,e),r}};zt(fe.prototype,(Ci={add:function(e){return ri(this,e),this},addKey:function(e){return ur(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(r){return ur(t,r,r)}),this},hasKey:function(e){var t=ii(this).next(e).value;return t&&U(t.from,e)<=0&&U(t.to,e)>=0}},Ci[Qi]=function(){return ii(this)},Ci));function ur(e,t,r){var i=U(t,r);if(!isNaN(i)){if(i>0)throw RangeError();if(Tn(e))return xe(e,{from:t,to:r,d:1});var n=e.l,a=e.r;if(U(r,e.from)<0)return n?ur(n,t,r):e.l={from:t,to:r,d:1,l:null,r:null},ha(e);if(U(t,e.to)>0)return a?ur(a,t,r):e.r={from:t,to:r,d:1,l:null,r:null},ha(e);U(t,e.from)<0&&(e.from=t,e.l=null,e.d=a?a.d+1:1),U(r,e.to)>0&&(e.to=r,e.r=null,e.d=e.l?e.l.d+1:1);var o=!e.r;n&&!e.l&&ri(e,n),a&&o&&ri(e,a)}}function ri(e,t){function r(i,n){var a=n.from,o=n.to,s=n.l,l=n.r;ur(i,a,o),s&&r(i,s),l&&r(i,l)}Tn(t)||r(e,t)}function ql(e,t){var r=ii(t),i=r.next();if(i.done)return!1;for(var n=i.value,a=ii(e),o=a.next(n.from),s=o.value;!i.done&&!o.done;){if(U(s.from,n.to)<=0&&U(s.to,n.from)>=0)return!0;U(n.from,s.from)<0?n=(i=r.next(s.from)).value:s=(o=a.next(n.from)).value}return!1}function ii(e){var t=Tn(e)?null:{s:0,n:e};return{next:function(r){for(var i=arguments.length>0;t;)switch(t.s){case 0:if(t.s=1,i)for(;t.n.l&&U(r,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!i||U(r,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ha(e){var t,r,i=(((t=e.r)===null||t===void 0?void 0:t.d)||0)-(((r=e.l)===null||r===void 0?void 0:r.d)||0),n=i>1?"r":i<-1?"l":"";if(n){var a=n==="r"?"l":"r",o=B({},e),s=e[n];e.from=s.from,e.to=s.to,e[n]=s[n],o[n]=s[a],e[a]=o,o.d=ma(o)}e.d=ma(e)}function ma(e){var t=e.r,r=e.l;return(t?r?Math.max(t.d,r.d):t.d:r?r.d:0)+1}function fi(e,t){return ae(t).forEach(function(r){e[r]?ri(e[r],t[r]):e[r]=Ja(t[r])}),e}function Pn(e,t){return e.all||t.all||Object.keys(e).some(function(r){return t[r]&&ql(t[r],e[r])})}var yt={},Mi={},Ai=!1;function $r(e,t){fi(Mi,e),Ai||(Ai=!0,setTimeout(function(){Ai=!1;var r=Mi;Mi={},On(r,!1)},0))}function On(e,t){t===void 0&&(t=!1);var r=new Set;if(e.all)for(var i=0,n=Object.values(yt);i<n.length;i++){var a=n[i];fa(a,e,r,t)}else for(var o in e){var s=/^idb\:\/\/(.*)\/(.*)\//.exec(o);if(s){var l=s[1],c=s[2],a=yt["idb://".concat(l,"/").concat(c)];a&&fa(a,e,r,t)}}r.forEach(function(u){return u()})}function fa(e,t,r,i){for(var n=[],a=0,o=Object.entries(e.queries.query);a<o.length;a++){for(var s=o[a],l=s[0],c=s[1],u=[],d=0,f=c;d<f.length;d++){var _=f[d];Pn(t,_.obsSet)?_.subscribers.forEach(function(y){return r.add(y)}):i&&u.push(_)}i&&n.push([l,u])}if(i)for(var p=0,g=n;p<g.length;p++){var w=g[p],l=w[0],u=w[1];e.queries.query[l]=u}}function Hl(e){var t=e._state,r=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Z(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var i=t.openCanceller,n=Math.round(e.verno*10),a=!1;function o(){if(t.openCanceller!==i)throw new z.DatabaseClosed("db.open() was cancelled")}var s=t.dbReadyResolve,l=null,c=!1,u=function(){return new A(function(d,f){if(o(),!r)throw new z.MissingAPI;var _=e.name,p=t.autoSchema||!n?r.open(_):r.open(_,n);if(!p)throw new z.MissingAPI;p.onerror=De(f),p.onblocked=W(e._fireOnBlocked),p.onupgradeneeded=W(function(g){if(l=p.transaction,t.autoSchema&&!e._options.allowEmptyDB){p.onerror=lr,l.abort(),p.result.close();var w=r.deleteDatabase(_);w.onsuccess=w.onerror=W(function(){f(new z.NoSuchDatabase("Database ".concat(_," doesnt exist")))})}else{l.onerror=De(f);var y=g.oldVersion>Math.pow(2,62)?0:g.oldVersion;c=y<1,e.idbdb=p.result,a&&Tl(e,l),Dl(e,y/10,l,f)}},f),p.onsuccess=W(function(){l=null;var g=e.idbdb=p.result,w=di(g.objectStoreNames);if(w.length>0)try{var y=g.transaction(Il(w),"readonly");if(t.autoSchema)Fl(e,g,y);else if(ti(e,e._dbSchema,y),!zl(e,y)&&!a)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),g.close(),n=g.version+1,a=!0,d(u());Jr(e,y)}catch{}dr.add(e),g.onversionchange=W(function(I){t.vcFired=!0,e.on("versionchange").fire(I)}),g.onclose=W(function(){e.close({disableAutoOpen:!1})}),c&&jl(e._deps,_),d()},f)}).catch(function(d){switch(d==null?void 0:d.name){case"UnknownError":if(t.PR1398_maxLoop>0)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(n>0)return n=0,u();break}return A.reject(d)})};return A.race([i,(typeof navigator>"u"?A.resolve():Ul()).then(u)]).then(function(){return o(),t.onReadyBeingFired=[],A.resolve(sn(function(){return e.on.ready.fire(e.vip)})).then(function d(){if(t.onReadyBeingFired.length>0){var f=t.onReadyBeingFired.reduce(xn,V);return t.onReadyBeingFired=[],A.resolve(sn(function(){return f(e.vip)})).then(d)}})}).finally(function(){t.openCanceller===i&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(d){t.dbOpenError=d;try{l&&l.abort()}catch{}return i===t.openCanceller&&e._close(),Z(d)}).finally(function(){t.openComplete=!0,s()}).then(function(){if(c){var d={};e.tables.forEach(function(f){f.schema.indexes.forEach(function(_){_.name&&(d["idb://".concat(e.name,"/").concat(f.name,"/").concat(_.name)]=new fe(-1/0,[[[]]]))}),d["idb://".concat(e.name,"/").concat(f.name,"/")]=d["idb://".concat(e.name,"/").concat(f.name,"/:dels")]=new fe(-1/0,[[[]]])}),tt(hi).fire(d),On(d,!0)}return e})}function ln(e){var t=function(o){return e.next(o)},r=function(o){return e.throw(o)},i=a(t),n=a(r);function a(o){return function(s){var l=o(s),c=l.value;return l.done?c:!c||typeof c.then!="function"?Y(c)?Promise.all(c).then(i,n):i(c):c.then(i,n)}}return a(t)()}function Vl(e,t,r){var i=arguments.length;if(i<2)throw new z.InvalidArgument("Too few arguments");for(var n=new Array(i-1);--i;)n[i-1]=arguments[i];r=n.pop();var a=Ya(n);return[e,a,r]}function vo(e,t,r,i,n){return A.resolve().then(function(){var a=R.transless||R,o=e._createTransaction(t,r,e._dbSchema,i);o.explicit=!0;var s={trans:o,transless:a};if(i)o.idbtrans=i.idbtrans;else try{o.create(),o.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(d){return d.name===wn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return vo(e,t,r,null,n)})):Z(d)}var l=bn(n);l&&jt();var c,u=A.follow(function(){if(c=n.call(o,o),c)if(l){var d=Ze.bind(null,null);c.then(d,d)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=ln(c))},s);return(c&&typeof c.then=="function"?A.resolve(c).then(function(d){return o.active?d:Z(new z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):u.then(function(){return c})).then(function(d){return i&&o._resolve(),o._completion.then(function(){return d})}).catch(function(d){return o._reject(d),Z(d)})})}function Ir(e,t,r){for(var i=Y(e)?e.slice():[e],n=0;n<r;++n)i.push(t);return i}function Wl(e){return B(B({},e),{table:function(t){var r=e.table(t),i=r.schema,n={},a=[];function o(g,w,y){var I=rr(g),$=n[I]=n[I]||[],x=g==null?0:typeof g=="string"?1:g.length,v=w>0,C=B(B({},y),{name:v?"".concat(I,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:v,keyTail:w,keyLength:x,extractKey:an(g),unique:!v&&y.unique});if($.push(C),C.isPrimaryKey||a.push(C),x>1){var k=x===2?g[0]:g.slice(0,x-1);o(k,w+1,y)}return $.sort(function(E,O){return E.keyTail-O.keyTail}),C}var s=o(i.primaryKey.keyPath,0,i.primaryKey);n[":id"]=[s];for(var l=0,c=i.indexes;l<c.length;l++){var u=c[l];o(u.keyPath,0,u)}function d(g){var w=n[rr(g)];return w&&w[0]}function f(g,w){return{type:g.type===1?2:g.type,lower:Ir(g.lower,g.lowerOpen?e.MAX_KEY:e.MIN_KEY,w),lowerOpen:!0,upper:Ir(g.upper,g.upperOpen?e.MIN_KEY:e.MAX_KEY,w),upperOpen:!0}}function _(g){var w=g.query.index;return w.isVirtual?B(B({},g),{query:{index:w.lowLevelIndex,range:f(g.query.range,w.keyTail)}}):g}var p=B(B({},r),{schema:B(B({},i),{primaryKey:s,indexes:a,getIndexByKeyPath:d}),count:function(g){return r.count(_(g))},query:function(g){return r.query(_(g))},openCursor:function(g){var w=g.query.index,y=w.keyTail,I=w.isVirtual,$=w.keyLength;if(!I)return r.openCursor(g);function x(v){function C(E){E!=null?v.continue(Ir(E,g.reverse?e.MAX_KEY:e.MIN_KEY,y)):g.unique?v.continue(v.key.slice(0,$).concat(g.reverse?e.MIN_KEY:e.MAX_KEY,y)):v.continue()}var k=Object.create(v,{continue:{value:C},continuePrimaryKey:{value:function(E,O){v.continuePrimaryKey(Ir(E,e.MAX_KEY,y),O)}},primaryKey:{get:function(){return v.primaryKey}},key:{get:function(){var E=v.key;return $===1?E[0]:E.slice(0,$)}},value:{get:function(){return v.value}}});return k}return r.openCursor(_(g)).then(function(v){return v&&x(v)})}});return p}})}var Ql={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:Wl};function Rn(e,t,r,i){return r=r||{},i=i||"",ae(e).forEach(function(n){if(!$e(t,n))r[i+n]=void 0;else{var a=e[n],o=t[n];if(typeof a=="object"&&typeof o=="object"&&a&&o){var s=Wi(a),l=Wi(o);s!==l?r[i+n]=t[n]:s==="Object"?Rn(a,o,r,i+n+"."):a!==o&&(r[i+n]=t[n])}else a!==o&&(r[i+n]=t[n])}}),ae(t).forEach(function(n){$e(e,n)||(r[i+n]=t[n])}),r}function Fn(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Yl={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return B(B({},e),{table:function(t){var r=e.table(t),i=r.schema.primaryKey,n=B(B({},r),{mutate:function(a){var o=R.trans,s=o.table(t).hook,l=s.deleting,c=s.creating,u=s.updating;switch(a.type){case"add":if(c.fire===V)break;return o._promise("readwrite",function(){return d(a)},!0);case"put":if(c.fire===V&&u.fire===V)break;return o._promise("readwrite",function(){return d(a)},!0);case"delete":if(l.fire===V)break;return o._promise("readwrite",function(){return d(a)},!0);case"deleteRange":if(l.fire===V)break;return o._promise("readwrite",function(){return f(a)},!0)}return r.mutate(a);function d(p){var g=R.trans,w=p.keys||Fn(i,p);if(!w)throw new Error("Keys missing");return p=p.type==="add"||p.type==="put"?B(B({},p),{keys:w}):B({},p),p.type!=="delete"&&(p.values=Vr([],p.values)),p.keys&&(p.keys=Vr([],p.keys)),Xl(r,p,w).then(function(y){var I=w.map(function($,x){var v=y[x],C={onerror:null,onsuccess:null};if(p.type==="delete")l.fire.call(C,$,v,g);else if(p.type==="add"||v===void 0){var k=c.fire.call(C,$,p.values[x],g);$==null&&k!=null&&($=k,p.keys[x]=$,i.outbound||_e(p.values[x],i.keyPath,$))}else{var E=Rn(v,p.values[x]),O=u.fire.call(C,E,$,v,g);if(O){var j=p.values[x];Object.keys(O).forEach(function(S){$e(j,S)?j[S]=O[S]:_e(j,S,O[S])})}}return C});return r.mutate(p).then(function($){for(var x=$.failures,v=$.results,C=$.numFailures,k=$.lastResult,E=0;E<w.length;++E){var O=v?v[E]:w[E],j=I[E];O==null?j.onerror&&j.onerror(x[E]):j.onsuccess&&j.onsuccess(p.type==="put"&&y[E]?p.values[E]:O)}return{failures:x,results:v,numFailures:C,lastResult:k}}).catch(function($){return I.forEach(function(x){return x.onerror&&x.onerror($)}),Promise.reject($)})})}function f(p){return _(p.trans,p.range,1e4)}function _(p,g,w){return r.query({trans:p,values:!1,query:{index:i,range:g},limit:w}).then(function(y){var I=y.result;return d({type:"delete",keys:I,trans:p}).then(function($){return $.numFailures>0?Promise.reject($.failures[0]):I.length<w?{failures:[],numFailures:0,lastResult:void 0}:_(p,B(B({},g),{lower:I[I.length-1],lowerOpen:!0}),w)})})}}});return n}})}};function Xl(e,t,r){return t.type==="add"?Promise.resolve([]):e.getMany({trans:t.trans,keys:r,cache:"immutable"})}function yo(e,t,r){try{if(!t||t.keys.length<e.length)return null;for(var i=[],n=0,a=0;n<t.keys.length&&a<e.length;++n)U(t.keys[n],e[a])===0&&(i.push(r?_t(t.values[n]):t.values[n]),++a);return i.length===e.length?i:null}catch{return null}}var Jl={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var r=e.table(t);return B(B({},r),{getMany:function(i){if(!i.cache)return r.getMany(i);var n=yo(i.keys,i.trans._cache,i.cache==="clone");return n?A.resolve(n):r.getMany(i).then(function(a){return i.trans._cache={keys:i.keys,values:i.cache==="clone"?_t(a):a},a})},mutate:function(i){return i.type!=="add"&&(i.trans._cache=null),r.mutate(i)}})}}}};function bo(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function _o(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var Zl={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,r=new fe(e.MIN_KEY,e.MAX_KEY);return B(B({},e),{transaction:function(i,n,a){if(R.subscr&&n!=="readonly")throw new z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(R.querier));return e.transaction(i,n,a)},table:function(i){var n=e.table(i),a=n.schema,o=a.primaryKey,s=a.indexes,l=o.extractKey,c=o.outbound,u=o.autoIncrement&&s.filter(function(p){return p.compound&&p.keyPath.includes(o.keyPath)}),d=B(B({},n),{mutate:function(p){var g,w,y=p.trans,I=p.mutatedParts||(p.mutatedParts={}),$=function(M){var D="idb://".concat(t,"/").concat(i,"/").concat(M);return I[D]||(I[D]=new fe)},x=$(""),v=$(":dels"),C=p.type,k=p.type==="deleteRange"?[p.range]:p.type==="delete"?[p.keys]:p.values.length<50?[Fn(o,p).filter(function(M){return M}),p.values]:[],E=k[0],O=k[1],j=p.trans._cache;if(Y(E)){x.addKeys(E);var S=C==="delete"||E.length===O.length?yo(E,j):null;S||v.addKeys(E),(S||O)&&ec($,a,S,O)}else if(E){var P={from:(g=E.lower)!==null&&g!==void 0?g:e.MIN_KEY,to:(w=E.upper)!==null&&w!==void 0?w:e.MAX_KEY};v.add(P),x.add(P)}else x.add(r),v.add(r),a.indexes.forEach(function(M){return $(M.name).add(r)});return n.mutate(p).then(function(M){return E&&(p.type==="add"||p.type==="put")&&(x.addKeys(M.results),u&&u.forEach(function(D){for(var q=p.values.map(function(me){return D.extractKey(me)}),F=D.keyPath.findIndex(function(me){return me===o.keyPath}),te=0,Ee=M.results.length;te<Ee;++te)q[te][F]=M.results[te];$(D.name).addKeys(q)})),y.mutatedParts=fi(y.mutatedParts||{},I),M})}}),f=function(p){var g,w,y=p.query,I=y.index,$=y.range;return[I,new fe((g=$.lower)!==null&&g!==void 0?g:e.MIN_KEY,(w=$.upper)!==null&&w!==void 0?w:e.MAX_KEY)]},_={get:function(p){return[o,new fe(p.key)]},getMany:function(p){return[o,new fe().addKeys(p.keys)]},count:f,query:f,openCursor:f};return ae(_).forEach(function(p){d[p]=function(g){var w=R.subscr,y=!!w,I=bo(R,n)&&_o(p,g),$=I?g.obsSet={}:w;if(y){var x=function(S){var P="idb://".concat(t,"/").concat(i,"/").concat(S);return $[P]||($[P]=new fe)},v=x(""),C=x(":dels"),k=_[p](g),E=k[0],O=k[1];if(p==="query"&&E.isPrimaryKey&&!g.values?C.add(O):x(E.name||"").add(O),!E.isPrimaryKey)if(p==="count")C.add(r);else{var j=p==="query"&&c&&g.values&&n.query(B(B({},g),{values:!1}));return n[p].apply(this,arguments).then(function(S){if(p==="query"){if(c&&g.values)return j.then(function(q){var F=q.result;return v.addKeys(F),S});var P=g.values?S.result.map(l):S.result;g.values?v.addKeys(P):C.addKeys(P)}else if(p==="openCursor"){var M=S,D=g.values;return M&&Object.create(M,{key:{get:function(){return C.addKey(M.primaryKey),M.key}},primaryKey:{get:function(){var q=M.primaryKey;return C.addKey(q),q}},value:{get:function(){return D&&v.addKey(M.primaryKey),M.value}}})}return S})}}return n[p].apply(this,arguments)}}),d}})}};function ec(e,t,r,i){function n(a){var o=e(a.name||"");function s(c){return c!=null?a.extractKey(c):null}var l=function(c){return a.multiEntry&&Y(c)?c.forEach(function(u){return o.addKey(u)}):o.addKey(c)};(r||i).forEach(function(c,u){var d=r&&s(r[u]),f=i&&s(i[u]);U(d,f)!==0&&(d!=null&&l(d),f!=null&&l(f))})}t.indexes.forEach(n)}function ga(e,t,r){if(r.numFailures===0)return t;if(t.type==="deleteRange")return null;var i=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1;if(r.numFailures===i)return null;var n=B({},t);return Y(n.keys)&&(n.keys=n.keys.filter(function(a,o){return!(o in r.failures)})),"values"in n&&Y(n.values)&&(n.values=n.values.filter(function(a,o){return!(o in r.failures)})),n}function tc(e,t){return t.lower===void 0?!0:t.lowerOpen?U(e,t.lower)>0:U(e,t.lower)>=0}function rc(e,t){return t.upper===void 0?!0:t.upperOpen?U(e,t.upper)<0:U(e,t.upper)<=0}function Di(e,t){return tc(e,t)&&rc(e,t)}function va(e,t,r,i,n,a){if(!r||r.length===0)return e;var o=t.query.index,s=o.multiEntry,l=t.query.range,c=i.schema.primaryKey,u=c.extractKey,d=o.extractKey,f=(o.lowLevelIndex||o).extractKey,_=r.reduce(function(g,w){var y=g,I=[];if(w.type==="add"||w.type==="put")for(var $=new fe,x=w.values.length-1;x>=0;--x){var v=w.values[x],C=u(v);if(!$.hasKey(C)){var k=d(v);(s&&Y(k)?k.some(function(P){return Di(P,l)}):Di(k,l))&&($.addKey(C),I.push(v))}}switch(w.type){case"add":{var E=new fe().addKeys(t.values?g.map(function(P){return u(P)}):g);y=g.concat(t.values?I.filter(function(P){var M=u(P);return E.hasKey(M)?!1:(E.addKey(M),!0)}):I.map(function(P){return u(P)}).filter(function(P){return E.hasKey(P)?!1:(E.addKey(P),!0)}));break}case"put":{var O=new fe().addKeys(w.values.map(function(P){return u(P)}));y=g.filter(function(P){return!O.hasKey(t.values?u(P):P)}).concat(t.values?I:I.map(function(P){return u(P)}));break}case"delete":var j=new fe().addKeys(w.keys);y=g.filter(function(P){return!j.hasKey(t.values?u(P):P)});break;case"deleteRange":var S=w.range;y=g.filter(function(P){return!Di(u(P),S)});break}return y},e);if(_===e)return e;var p=function(g,w){return U(f(g),f(w))||U(u(g),u(w))};return _.sort(t.direction==="prev"||t.direction==="prevunique"?function(g,w){return p(w,g)}:p),t.limit&&t.limit<1/0&&(_.length>t.limit?_.length=t.limit:e.length===t.limit&&_.length<t.limit&&(n.dirty=!0)),a?Object.freeze(_):_}function ya(e,t){return U(e.lower,t.lower)===0&&U(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function ic(e,t,r,i){if(e===void 0)return t!==void 0?-1:0;if(t===void 0)return 1;var n=U(e,t);if(n===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return n}function nc(e,t,r,i){if(e===void 0)return t!==void 0?1:0;if(t===void 0)return-1;var n=U(e,t);if(n===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return n}function ac(e,t){return ic(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&nc(e.upper,t.upper,e.upperOpen,t.upperOpen)>=0}function oc(e,t,r,i){var n,a=yt["idb://".concat(e,"/").concat(t)];if(!a)return[];var o=a.queries[r];if(!o)return[null,!1,a,null];var s=i.query?i.query.index.name:null,l=o[s||""];if(!l)return[null,!1,a,null];switch(r){case"query":var c=(n=i.direction)!==null&&n!==void 0?n:"next",u=l.find(function(_){var p;return _.req.limit===i.limit&&_.req.values===i.values&&((p=_.req.direction)!==null&&p!==void 0?p:"next")===c&&ya(_.req.query.range,i.query.range)});if(u)return[u,!0,a,l];var d=l.find(function(_){var p,g="limit"in _.req?_.req.limit:1/0;return g>=i.limit&&((p=_.req.direction)!==null&&p!==void 0?p:"next")===c&&(i.values?_.req.values:!0)&&ac(_.req.query.range,i.query.range)});return[d,!1,a,l];case"count":var f=l.find(function(_){return ya(_.req.query.range,i.query.range)});return[f,!!f,a,l]}}function sc(e,t,r,i){e.subscribers.add(r),i.addEventListener("abort",function(){e.subscribers.delete(r),e.subscribers.size===0&&lc(e,t)})}function lc(e,t){setTimeout(function(){e.subscribers.size===0&&st(t,e)},3e3)}var cc={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name,r=B(B({},e),{transaction:function(i,n,a){var o=e.transaction(i,n,a);if(n==="readwrite"){var s=new AbortController,l=s.signal,c=function(u){return function(){if(s.abort(),n==="readwrite"){for(var d=new Set,f=0,_=i;f<_.length;f++){var p=_[f],g=yt["idb://".concat(t,"/").concat(p)];if(g){var w=e.table(p),y=g.optimisticOps.filter(function(D){return D.trans===o});if(o._explicit&&u&&o.mutatedParts)for(var I=0,$=Object.values(g.queries.query);I<$.length;I++)for(var x=$[I],v=0,C=x.slice();v<C.length;v++){var k=C[v];Pn(k.obsSet,o.mutatedParts)&&(st(x,k),k.subscribers.forEach(function(D){return d.add(D)}))}else if(y.length>0){g.optimisticOps=g.optimisticOps.filter(function(D){return D.trans!==o});for(var E=0,O=Object.values(g.queries.query);E<O.length;E++)for(var x=O[E],j=0,S=x.slice();j<S.length;j++){var k=S[j];if(k.res!=null&&o.mutatedParts)if(u&&!k.dirty){var P=Object.isFrozen(k.res),M=va(k.res,k.req,y,w,k,P);k.dirty?(st(x,k),k.subscribers.forEach(function(F){return d.add(F)})):M!==k.res&&(k.res=M,k.promise=A.resolve({result:M}))}else k.dirty&&st(x,k),k.subscribers.forEach(function(F){return d.add(F)})}}}}d.forEach(function(D){return D()})}}};o.addEventListener("abort",c(!1),{signal:l}),o.addEventListener("error",c(!1),{signal:l}),o.addEventListener("complete",c(!0),{signal:l})}return o},table:function(i){var n=e.table(i),a=n.schema.primaryKey,o=B(B({},n),{mutate:function(s){var l=R.trans;if(a.outbound||l.db._options.cache==="disabled"||l.explicit||l.idbtrans.mode!=="readwrite")return n.mutate(s);var c=yt["idb://".concat(t,"/").concat(i)];if(!c)return n.mutate(s);var u=n.mutate(s);return(s.type==="add"||s.type==="put")&&(s.values.length>=50||Fn(a,s).some(function(d){return d==null}))?u.then(function(d){var f=B(B({},s),{values:s.values.map(function(p,g){var w;if(d.failures[g])return p;var y=!((w=a.keyPath)===null||w===void 0)&&w.includes(".")?_t(p):B({},p);return _e(y,a.keyPath,d.results[g]),y})}),_=ga(c,f,d);c.optimisticOps.push(_),queueMicrotask(function(){return s.mutatedParts&&$r(s.mutatedParts)})}):(c.optimisticOps.push(s),s.mutatedParts&&$r(s.mutatedParts),u.then(function(d){if(d.numFailures>0){st(c.optimisticOps,s);var f=ga(c,s,d);f&&c.optimisticOps.push(f),s.mutatedParts&&$r(s.mutatedParts)}}),u.catch(function(){st(c.optimisticOps,s),s.mutatedParts&&$r(s.mutatedParts)})),u},query:function(s){var l;if(!bo(R,n)||!_o("query",s))return n.query(s);var c=((l=R.trans)===null||l===void 0?void 0:l.db._options.cache)==="immutable",u=R,d=u.requery,f=u.signal,_=oc(t,i,"query",s),p=_[0],g=_[1],w=_[2],y=_[3];if(p&&g)p.obsSet=s.obsSet;else{var I=n.query(s).then(function($){var x=$.result;if(p&&(p.res=x),c){for(var v=0,C=x.length;v<C;++v)Object.freeze(x[v]);Object.freeze(x)}return $}).catch(function($){return y&&p&&st(y,p),Promise.reject($)});p={obsSet:s.obsSet,promise:I,subscribers:new Set,type:"query",req:s,dirty:!1},y?y.push(p):(y=[p],w||(w=yt["idb://".concat(t,"/").concat(i)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),w.queries.query[s.query.index.name||""]=y)}return sc(p,y,d,f),p.promise.then(function($){var x=va($.result,s,w==null?void 0:w.optimisticOps,n,p,c);return{result:c?x:_t(x)}})}});return o}});return r}};function kr(e,t){return new Proxy(e,{get:function(r,i,n){return i==="db"?t:Reflect.get(r,i,n)}})}var pr=(function(){function e(t,r){var i=this;this._middlewares={},this.verno=0;var n=e.dependencies;this._options=r=B({addons:e.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange,cache:"cloned",maxConnections:sl},r),this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};var a=r.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var o={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:V,dbReadyPromise:null,cancelOpen:V,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:r.autoOpen};o.dbReadyPromise=new A(function(l){o.dbReadyResolve=l}),o.openCanceller=new A(function(l,c){o.cancelOpen=c}),this._state=o,this.name=t,this.on=vr(this,"populate","blocked","versionchange","close",{ready:[xn,V]}),this.once=function(l,c){var u=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];i.on(l).unsubscribe(u),c.apply(i,d)};return i.on(l,u)},this.on.ready.subscribe=Va(this.on.ready.subscribe,function(l){return function(c,u){e.vip(function(){var d=i._state;if(d.openComplete)d.dbOpenError||A.resolve().then(c),u&&l(c);else if(d.onReadyBeingFired)d.onReadyBeingFired.push(c),u&&l(c);else{l(c);var f=i;u||l(function _(){f.on.ready.unsubscribe(c),f.on.ready.unsubscribe(_)})}})}}),this.Collection=fl(this),this.Table=pl(this),this.Transaction=$l(this),this.Version=Ll(this),this.WhereClause=wl(this),this.on("versionchange",function(l){l.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(i.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(i.name,"'. Closing db now to resume the delete request.")),i.close({disableAutoOpen:!1})}),this.on("blocked",function(l){!l.newVersion||l.newVersion<l.oldVersion?console.warn("Dexie.delete('".concat(i.name,"') was blocked")):console.warn("Upgrade '".concat(i.name,"' blocked by other connection holding version ").concat(l.oldVersion/10))}),this._maxKey=cr(r.IDBKeyRange),this._createTransaction=function(l,c,u,d){return new i.Transaction(l,c,u,i._options.chromeTransactionDurability,d)},this._fireOnBlocked=function(l){i.on("blocked").fire(l),dr.toArray().filter(function(c){return c.name===i.name&&c!==i&&!c._state.vcFired}).map(function(c){return c.on("versionchange").fire(l)})},this.use(Jl),this.use(cc),this.use(Zl),this.use(Ql),this.use(Yl);var s=new Proxy(this,{get:function(l,c,u){if(c==="_vip")return!0;if(c==="table")return function(f){return kr(i.table(f),s)};var d=Reflect.get(l,c,u);return d instanceof uo?kr(d,s):c==="tables"?d.map(function(f){return kr(f,s)}):c==="_createTransaction"?function(){var f=d.apply(this,arguments);return kr(f,s)}:d}});this.vip=s,a.forEach(function(l){return l(i)})}return e.prototype.version=function(t){if(isNaN(t)||t<.1)throw new z.Type("Given version is not a positive number");if(t=Math.round(t*10)/10,this.idbdb||this._state.isBeingOpened)throw new z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var r=this._versions,i=r.filter(function(n){return n._cfg.version===t})[0];return i||(i=new this.Version(t),r.push(i),r.sort(Al),i.stores({}),this._state.autoSchema=!1,i)},e.prototype._whenReady=function(t){var r=this;return this.idbdb&&(this._state.openComplete||R.letThrough||this._vip)?t():new A(function(i,n){if(r._state.openComplete)return n(new z.DatabaseClosed(r._state.dbOpenError));if(!r._state.isBeingOpened){if(!r._state.autoOpen){n(new z.DatabaseClosed);return}r.open().catch(V)}r._state.dbReadyPromise.then(i,n)}).then(t)},e.prototype.use=function(t){var r=t.stack,i=t.create,n=t.level,a=t.name;a&&this.unuse({stack:r,name:a});var o=this._middlewares[r]||(this._middlewares[r]=[]);return o.push({stack:r,create:i,level:n??10,name:a}),o.sort(function(s,l){return s.level-l.level}),this},e.prototype.unuse=function(t){var r=t.stack,i=t.name,n=t.create;return r&&this._middlewares[r]&&(this._middlewares[r]=this._middlewares[r].filter(function(a){return n?a.create!==n:i?a.name!==i:!1})),this},e.prototype.open=function(){var t=this;return xt(Ge,function(){return Hl(t)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var t=this._state;if(dr.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}t.isBeingOpened||(t.dbReadyPromise=new A(function(r){t.dbReadyResolve=r}),t.openCanceller=new A(function(r,i){t.cancelOpen=i}))},e.prototype.close=function(t){var r=t===void 0?{disableAutoOpen:!0}:t,i=r.disableAutoOpen,n=this._state;i?(n.isBeingOpened&&n.cancelOpen(new z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},e.prototype.delete=function(t){var r=this;t===void 0&&(t={disableAutoOpen:!0});var i=arguments.length>0&&typeof arguments[0]!="object",n=this._state;return new A(function(a,o){var s=function(){r.close(t);var l=r._deps.indexedDB.deleteDatabase(r.name);l.onsuccess=W(function(){Gl(r._deps,r.name),a()}),l.onerror=De(o),l.onblocked=r._fireOnBlocked};if(i)throw new z.InvalidArgument("Invalid closeOptions argument to db.delete()");n.isBeingOpened?n.dbReadyPromise.then(s):s()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var t=this._state.dbOpenError;return t&&t.name==="DatabaseClosed"},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var t=this;return ae(this._allTables).map(function(r){return t._allTables[r]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var t=Vl.apply(this,arguments);return this._transaction.apply(this,t)},e.prototype._transaction=function(t,r,i){var n=this,a=R.trans;(!a||a.db!==this||t.indexOf("!")!==-1)&&(a=null);var o=t.indexOf("?")!==-1;t=t.replace("!","").replace("?","");var s,l;try{if(l=r.map(function(u){var d=u instanceof n.Table?u.name:u;if(typeof d!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return d}),t=="r"||t===Ii)s=Ii;else if(t=="rw"||t==ki)s=ki;else throw new z.InvalidArgument("Invalid transaction mode: "+t);if(a){if(a.mode===Ii&&s===ki)if(o)a=null;else throw new z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");a&&l.forEach(function(u){if(a&&a.storeNames.indexOf(u)===-1)if(o)a=null;else throw new z.SubTransaction("Table "+u+" not included in parent transaction.")}),o&&a&&!a.active&&(a=null)}}catch(u){return a?a._promise(null,function(d,f){f(u)}):Z(u)}var c=vo.bind(null,this,s,l,a,i);return a?a._promise(s,c,"lock"):R.trans?xt(R.transless,function(){return n._whenReady(c)}):this._whenReady(c)},e.prototype.table=function(t){if(!$e(this._allTables,t))throw new z.InvalidTable("Table ".concat(t," does not exist"));return this._allTables[t]},e})(),dc=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",uc=(function(){function e(t){this._subscribe=t}return e.prototype.subscribe=function(t,r,i){return this._subscribe(!t||typeof t=="function"?{next:t,error:r,complete:i}:t)},e.prototype[dc]=function(){return this},e})(),ni;try{ni={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{ni={indexedDB:null,IDBKeyRange:null}}function pc(e){var t=!1,r,i=new uc(function(n){var a=bn(e);function o(y){var I=Kt();try{a&&jt();var $=Je(e,y);return a&&($=$.finally(Ze)),$}finally{I&&Bt()}}var s=!1,l,c={},u={},d={get closed(){return s},unsubscribe:function(){s||(s=!0,l&&l.abort(),f&&tt.storagemutated.unsubscribe(g))}};n.start&&n.start(d);var f=!1,_=function(){return $i(w)};function p(){return Pn(u,c)}var g=function(y){fi(c,y),p()&&_()},w=function(){if(!(s||!ni.indexedDB)){c={};var y={};l&&l.abort(),l=new AbortController;var I={subscr:y,signal:l.signal,requery:_,querier:e,trans:null},$=o(I);f||(tt.storagemutated.subscribe(g),f=!0),Promise.resolve($).then(function(x){t=!0,r=x,!(s||I.signal.aborted)&&(p()?_():(u=y,p()?_():(c={},$i(function(){return!s&&n.next&&n.next(x)}))))},function(x){t=!1,["DatabaseClosedError","AbortError"].includes(x==null?void 0:x.name)||s||$i(function(){s||n.error&&n.error(x)})})}};return setTimeout(_,0),d});return i.hasValue=function(){return t},i.getValue=function(){return r},i}var dt=pr;zt(dt,B(B({},ui),{delete:function(e){var t=new dt(e,{addons:[]});return t.delete()},exists:function(e){return new dt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return Bl(dt.dependencies).then(e)}catch{return Z(new z.MissingAPI)}},defineClass:function(){function e(t){xe(this,t)}return e},ignoreTransaction:function(e){return R.trans?xt(R.transless||Ge,e):e()},vip:sn,async:function(e){return function(){try{var t=ln(e.apply(this,arguments));return!t||typeof t.then!="function"?A.resolve(t):t}catch(r){return Z(r)}}},spawn:function(e,t,r){try{var i=ln(e.apply(r,t||[]));return!i||typeof i.then!="function"?A.resolve(i):i}catch(n){return Z(n)}},currentTransaction:{get:function(){return R.trans||null}},waitFor:function(e,t){var r=A.resolve(typeof e=="function"?dt.ignoreTransaction(e):e).timeout(t||6e4);return R.trans?R.trans.waitFor(r):r},Promise:A,debug:{get:function(){return Re},set:function(e){to(e)}},derive:Nt,extend:xe,props:zt,override:Va,Events:vr,on:tt,liveQuery:pc,extendObservabilitySet:fi,getByKeyPath:je,setByKeyPath:_e,delByKeyPath:Rs,shallowClone:Qa,deepClone:_t,getObjectDiff:Rn,cmp:U,asap:Wa,minKey:tn,addons:[],connections:{get:dr.toArray},errnames:wn,dependencies:ni,cache:yt,semVer:oa,version:oa.split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,r){return e+t/Math.pow(10,r*2)})}));dt.maxKey=cr(dt.dependencies.IDBKeyRange);typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(tt(hi,function(e){if(!Qe){var t;t=new CustomEvent(rn,{detail:e}),Qe=!0,dispatchEvent(t),Qe=!1}}),addEventListener(rn,function(e){var t=e.detail;Qe||zn(t)}));function zn(e){var t=Qe;try{Qe=!0,tt.storagemutated.fire(e),On(e,!0)}finally{Qe=t}}var Qe=!1,We,cn=function(){};typeof BroadcastChannel<"u"&&(cn=function(){We=new BroadcastChannel(rn),We.onmessage=function(e){return e.data&&zn(e.data)}},cn(),typeof We.unref=="function"&&We.unref(),tt(hi,function(e){Qe||We.postMessage(e)}));typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!pr.disableBfCache&&e.persisted){Re&&console.debug("Dexie: handling persisted pagehide"),We==null||We.close();for(var t=0,r=dr.toArray();t<r.length;t++){var i=r[t];i.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(e){!pr.disableBfCache&&e.persisted&&(Re&&console.debug("Dexie: handling persisted pageshow"),cn(),zn({all:new fe(-1/0,[[]])}))}));A.rejectionMapper=Gs;to(Re);class hc extends pr{constructor(){super("MealPrepLocal"),this.version(1).stores({rows:"id"})}}const Nn=new hc,Ln=1,mc=250;let ht=null,dn=null;async function fc(){const e=await Nn.rows.get(Ln);return(e==null?void 0:e.data)??null}function gc(e){ht&&clearTimeout(ht),ht=setTimeout(()=>{ht=null,dn=Nn.rows.put({id:Ln,data:e}).catch(t=>{console.error("No se pudo guardar en IndexedDB:",t)})},mc)}async function hr(e){ht&&(clearTimeout(ht),ht=null),await Nn.rows.put({id:Ln,data:e}),dn&&await dn}function wo(){return{family:null,members:[],weightHistory:[],foods:[],pantryItems:[],recipes:[],mealPlans:[],meals:[],templates:[],shoppingLists:[],shoppingItems:[],shoppingSections:[],shoppingSectionItems:[],householdItems:[],householdStockItems:[],chores:[],choreCompletions:[]}}const m=wo();function be(e){const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${i}`}function L(e){const t=e();return gc(m),t}async function Er(){await hr(m)}let Ti=null;function T(){return Ti||(Ti=(async()=>{await ys();const e=await fc();if(e){const t=yn(e);Object.assign(m,t.store),t.changed&&await hr(m)}else{const{bootstrapIfEmpty:t}=await Ua(async()=>{const{bootstrapIfEmpty:r}=await import("./bootstrap-Bu5oXdl6.js");return{bootstrapIfEmpty:r}},[]);t(),await hr(m)}})()),Ti}async function vc(e){Object.assign(m,yn(e).store),await hr(m)}async function yc(){const{bootstrapIfEmpty:e}=await Ua(async()=>{const{bootstrapIfEmpty:t}=await import("./bootstrap-Bu5oXdl6.js");return{bootstrapIfEmpty:t}},[]);Object.assign(m,wo()),e(),await hr(m)}const bc="local-user",_c="local@mealprep.app";function Pi(){var t;const e=m.family;return G({id:bc,email:_c,name:((t=m.members[0])==null?void 0:t.name)??"Tú",familyId:e.id,family:{id:e.id,name:e.name,onboardingVersion:e.onboardingVersion,onboardingStep:e.onboardingStep,onboardingCompletedAt:e.onboardingCompletedAt,enabledModules:e.enabledModules,homeType:e.homeType,members:m.members.map(r=>({id:r.id,name:r.name,color:r.color,age:r.age,weightKg:r.weightKg,heightCm:r.heightCm,sex:r.sex,activityLevel:r.activityLevel,goal:r.goal,restrictions:r.restrictions,dailyCalories:r.dailyCalories,dailyProteinG:r.dailyProteinG,dailyCarbsG:r.dailyCarbsG,dailyFatG:r.dailyFatG,tmb:r.tmb,isStandardProfile:r.isStandardProfile}))}})}const Gt={register:async e=>(await T(),{user:Pi(),accessToken:"local",refreshToken:"local"}),login:async e=>(await T(),{user:Pi(),accessToken:"local",refreshToken:"local"}),me:async()=>(await T(),Pi())};function xo(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function ye(e=new Date){const t=e.getDay(),r=e.getDate()-t+(t===0?-6:1),i=new Date(e);return i.setDate(r),xo(i)}function wc(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r}const ba=[{id:"hogar-basico",name:"Hogar básico",description:"Las tareas domésticas más habituales, diarias y semanales",chores:[{name:"Fregar los platos",frequency:"DIARIA"},{name:"Sacar la basura",frequency:"DIARIA"},{name:"Recoger la cocina",frequency:"DIARIA"},{name:"Hacer las camas",frequency:"DIARIA"},{name:"Poner una lavadora",frequency:"SEMANAL"},{name:"Tender y recoger la ropa",frequency:"SEMANAL"},{name:"Pasar la aspiradora",frequency:"SEMANAL"},{name:"Fregar el suelo",frequency:"SEMANAL"},{name:"Limpiar el baño",frequency:"SEMANAL"},{name:"Cambiar las sábanas",frequency:"SEMANAL"},{name:"Hacer la compra",frequency:"SEMANAL"}]}];function Oi(e){return e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}const mt={minRecipesForPlan:35,expiringSoonDays:7,minKcalPorRacion:25,maxKcalPorRacion:1500};function xc(e){var r;const t=new Map;for(const i of e){if(!((r=i.recipe)!=null&&r.ingredients))continue;const n=i.servingsMultiplier??1,a=i.recipe.servings&&i.recipe.servings>0?i.recipe.servings:1;for(const o of i.recipe.ingredients){const s=t.get(o.foodId),l=o.quantity/a*n;s?s.total+=l:t.set(o.foodId,{foodId:o.foodId,foodName:o.foodName,total:l,unit:o.unit})}}return t}function $c(e,t){return`${e}|${t}`}function $o(e,t,r){return e.get($c(t,r))??0}const Ic=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"],kc=4;function Ec(){const e=[];for(let t=1;t<=7;t++)for(const r of Ic)e.push({dayOfWeek:t,mealType:r,recipeId:""});return e}function Io(e,t){const r=e.filter(i=>i.mealType.includes(t));return r.length>0?r:e}function Sc(e,t){const r=new Date(e);return r.setDate(r.getDate()+(t-1)),r.setHours(0,0,0,0),r}function Cc(e,t,r){if(!r||r.urgencyMap.size===0)return 0;const i=Sc(r.weekStart,t.dayOfWeek);let n=0;for(const a of e.ingredients){const o=r.urgencyMap.get(a.foodId);o&&(o.expiryDate<i||(n+=o.urgency))}return n}function Mc(e,t){const r=t.reduce((n,a)=>n+a,0);let i=Math.random()*r;for(let n=0;n<e.length;n++)if(i-=t[n],i<=0)return e[n];return e[e.length-1]}function ko(e,t,r){if(!r||r.urgencyMap.size===0)return e[Math.floor(Math.random()*e.length)];const i=e.map(n=>1+kc*Cc(n,t,r));return Mc(e,i)}function Ac(e,t,r){const i=Io(t,e.mealType);return ko(i,e,r).id}function Dc(e,t,r){for(let i=0;i<t.length;i++)t[i].recipeId=Ac(t[i],e,r)}function Tc(e,t,r,i,n=500){const a=new Map(e.map(l=>[l.id,l])),o=e.reduce((l,c)=>l+(c.calorias??0),0)/e.length;let s=0;for(;s<n;){const l={calories:0,proteinG:0,carbsG:0,fatG:0};for(const p of t){const g=a.get(p.recipeId);g&&(l.calories+=g.calorias??0,l.proteinG+=g.proteinas??0,l.carbsG+=g.carbos??0,l.fatG+=g.grasas??0)}if(l.calories>=r.calories.min&&l.calories<=r.calories.max&&l.proteinG>=r.proteinG.min&&l.proteinG<=r.proteinG.max&&l.carbsG>=r.carbsG.min&&l.carbsG<=r.carbsG.max&&l.fatG>=r.fatG.min&&l.fatG<=r.fatG.max)break;const u=l.calories<r.calories.min,d=l.calories>r.calories.max,f=Math.floor(Math.random()*t.length),_=e.filter(p=>u?(p.calorias??0)>o:d?(p.calorias??0)<o:!0);if(_.length>0){const p=t[f],g=Io(_,p.mealType),w=g.length>0?g:_;p.recipeId=ko(w,p,i).id}s++}}const Pc=100;function Oc(e){return e.unit==="UNIDAD"?e.quantity*Pc:e.quantity}function Ri(e,t,r){const i=t&&t>0?t:1;let n=0,a=0,o=0,s=0,l=0,c=0,u=0,d=0,f=0,_=0,p=0,g=0,w=0,y=0,I=0,$=0,x=0,v=0,C=0,k=0,E=0,O=0,j=0;for(const P of e){const M=r.get(P.foodId);if(!M)continue;const D=Oc(P)/100;n+=(M.calorias100g??0)*D,a+=(M.proteinas100g??0)*D,o+=(M.carbos100g??0)*D,s+=(M.grasas100g??0)*D,l+=(M.fibra100g??0)*D,c+=(M.sodioMg??0)*D,u+=(M.potasioMg??0)*D,d+=(M.calcioMg??0)*D,f+=(M.magnesioMg??0)*D,_+=(M.hierroMg??0)*D,p+=(M.zincMg??0)*D,g+=(M.fosforoMg??0)*D,w+=(M.vitaminaAIug??0)*D,y+=(M.vitaminaCMg??0)*D,I+=(M.vitaminaDIug??0)*D,$+=(M.vitaminaEMg??0)*D,x+=(M.vitaminaKIug??0)*D,v+=(M.vitaminaB6Mg??0)*D,C+=(M.vitaminaB12Iug??0)*D,k+=(M.tiaminaMg??0)*D,E+=(M.riboflavinaMg??0)*D,O+=(M.niacinaMg??0)*D,j+=(M.acidoFolicoIug??0)*D}const S=(P,M=0)=>{const D=P/i,q=10**M;return Math.round(D*q)/q};return{calorias:S(n),proteinas:S(a),carbos:S(o),grasas:S(s),fibra:S(l),sodioMg:S(c,1),potasioMg:S(u,1),calcioMg:S(d,1),magnesioMg:S(f,1),hierroMg:S(_,2),zincMg:S(p,2),fosforoMg:S(g,1),vitaminaAIug:S(w),vitaminaCMg:S(y,1),vitaminaDIug:S(I,1),vitaminaEMg:S($,1),vitaminaKIug:S(x,1),vitaminaB6Mg:S(v,2),vitaminaB12Iug:S(C,2),tiaminaMg:S(k,2),riboflavinaMg:S(E,2),niacinaMg:S(O,1),acidoFolicoIug:S(j)}}function Eo(e,t=new Date){const r=new Date(t);r.setHours(0,0,0,0);const i=new Date(e);return i.setHours(0,0,0,0),Math.round((i.getTime()-r.getTime())/864e5)}function Rc(e,t){const r=new Map;for(const i of e){if(i.expired)continue;const n=(t+1-i.daysLeft)/(t+1),a=r.get(i.foodId);(!a||i.expiryDate<a.expiryDate)&&r.set(i.foodId,{urgency:n,expiryDate:i.expiryDate})}return r}function Fc(e,t){const r=[...e].sort((o,s)=>o.expiryDate&&s.expiryDate?o.expiryDate.getTime()-s.expiryDate.getTime():o.expiryDate?-1:s.expiryDate?1:0),i=[];let n=t,a=0;for(const o of r){if(n<=0)break;if(o.quantity<=0)continue;const s=Math.min(o.quantity,n),l=Math.round((o.quantity-s)*10)/10;i.push({id:o.id,subtracted:s,remaining:l}),a+=s,n-=s}return{consumption:i,totalSubtracted:Math.round(a*10)/10}}const So={SEDENTARIO:1.2,LIGERO:1.375,MODERADO:1.55,ACTIVO:1.725},Co={PERDER_PESO:.8,MANTENER:1,GANAR_MUSCULO:1.15};function zc(e){const{weightKg:t,heightCm:r,age:i,sex:n}=e;return n==="MASCULINO"?10*t+6.25*r-5*i+5:10*t+6.25*r-5*i-161}function Mo(e,t,r){let i;switch(r){case"PERDER_PESO":i=2;break;case"GANAR_MUSCULO":i=2.2;break;default:i=1.6}const n=Math.round(t*i),a=e*.28,o=Math.round(a/9),s=n*4,l=e-s-a,c=Math.round(Math.max(0,l)/4);return{dailyProteinG:n,dailyCarbsG:c,dailyFatG:o}}function Nc(e){const t=zc(e),r=So[e.activityLevel],i=Co[e.goal],n=Math.round(t*r*i);return{tmb:Math.round(t),dailyCalories:n,...Mo(n,e.weightKg,e.goal)}}const Ke={age:35,weightKg:70,heightCm:170,activityLevel:"LIGERO",goal:"MANTENER"},Fi=2e3;function Lc(){const e=So[Ke.activityLevel],t=Co[Ke.goal];return{tmb:Math.round(Fi/e/t),dailyCalories:Fi,...Mo(Fi,Ke.weightKg,Ke.goal)}}function Ao(e){return{calories:e.dailyCalories*7,proteinG:e.dailyProteinG*7,carbsG:e.dailyCarbsG*7,fatG:e.dailyFatG*7}}function Do(e,t=.05){const r={};for(const[i,n]of Object.entries(e))r[i]={min:Math.round(n*(1-t)),max:Math.round(n*(1+t))};return r}function H(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function _a(){return m.members[0]}function Lr(){if(!m.family)throw new Error("No hay una unidad familiar configurada");return m.family}function Sr(){const e=Lr();return{familyId:e.id,name:e.name,homeType:e.homeType,enabledModules:[...e.enabledModules],onboardingVersion:e.onboardingVersion,onboardingStep:e.onboardingStep,onboardingCompletedAt:e.onboardingCompletedAt}}function Kc(e){if(!Number.isInteger(e)||e<0||e>qr)throw new Error("El paso de onboarding no es válido.");return e}function wa(e){const t=e.trim();if(!t)throw new Error("El nombre de la casa es obligatorio.");if(t.length>80)throw new Error("El nombre de la casa no puede superar 80 caracteres.");return t}function ai(e,t){const r=Nc(t);return e.age=t.age,e.weightKg=t.weightKg,e.heightCm=t.heightCm,e.sex=t.sex,e.activityLevel=t.activityLevel,e.goal=t.goal,e.tmb=r.tmb,e.dailyCalories=r.dailyCalories,e.dailyProteinG=r.dailyProteinG,e.dailyCarbsG=r.dailyCarbsG,e.dailyFatG=r.dailyFatG,e.isStandardProfile=!1,e.weightDate=new Date,e.updatedAt=new Date,r}const xa={getHomeSettings:async()=>(await T(),G(Sr())),saveOnboardingProgress:async e=>{await T();const t=L(()=>{const r=Lr();if(r.onboardingVersion=Ur,r.onboardingStep=Kc(e.onboardingStep),e.name!==void 0&&(r.name=wa(e.name)),e.homeType!==void 0){if(e.homeType!==null&&!Ui(e.homeType))throw new Error("El tipo de hogar no es válido.");r.homeType=e.homeType}return e.enabledModules!==void 0&&(r.enabledModules=xi(e.enabledModules)),G(Sr())});return await Er(),t},completeHomeSetup:async e=>{await T();const t=L(()=>{if(!Ui(e.homeType))throw new Error("El tipo de hogar no es válido.");const r=Lr();return r.name=wa(e.name),r.homeType=e.homeType,r.enabledModules=xi(e.enabledModules),r.onboardingVersion=Ur,r.onboardingStep=qr,r.onboardingCompletedAt=new Date,G(Sr())});return await Er(),t},updateEnabledModules:async e=>{await T();const t=L(()=>(Lr().enabledModules=xi(e),G(Sr())));return await Er(),t},onboarding:async e=>(await T(),L(()=>{const t=e.memberId?m.members.find(i=>i.id===e.memberId):_a();if(!t)throw new Error("Miembro no encontrado");const r=ai(t,e);return t.restrictions=e.restrictions??[],m.weightHistory.push({id:H(),memberId:t.id,weightKg:e.weightKg,date:new Date}),G({message:"Perfil nutricional completado",member:t,requirements:r})})),skipOnboarding:async(e={})=>{await T();const t=L(()=>{var a;const r=(a=e.memberIds)!=null&&a.length?m.members.filter(o=>e.memberIds.includes(o.id)):m.members.filter(o=>o.dailyCalories==null);if(r.length===0)throw new Error("No hay miembros a los que aplicar el perfil estándar");const i=Lc(),n=new Date;for(const o of r)o.age=Ke.age,o.weightKg=Ke.weightKg,o.heightCm=Ke.heightCm,o.activityLevel=Ke.activityLevel,o.goal=Ke.goal,o.tmb=i.tmb,o.dailyCalories=i.dailyCalories,o.dailyProteinG=i.dailyProteinG,o.dailyCarbsG=i.dailyCarbsG,o.dailyFatG=i.dailyFatG,o.isStandardProfile=!0,o.updatedAt=n;return G({message:"Perfil estándar aplicado",members:r,requirements:i})});return await Er(),t},updateProfile:async e=>(await T(),L(()=>{const t=_a();if(!t)throw new Error("No hay miembros en la familia");return Object.assign(t,e),t.isStandardProfile=!1,e.weightKg&&(m.weightHistory.push({id:H(),memberId:t.id,weightKg:e.weightKg,date:new Date}),t.weightDate=new Date),(e.weightKg||e.heightCm||e.activityLevel||e.goal)&&t.age&&t.sex&&t.activityLevel&&t.goal&&ai(t,t),t.updatedAt=new Date,G(t)}))},Kr={list:async()=>(await T(),m.members.map(e=>G(e))),create:async e=>(await T(),L(()=>{const t=new Date,r={id:H(),familyId:m.family.id,name:e.name,color:e.color||"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),age:e.age??null,weightKg:e.weightKg??null,weightDate:null,heightCm:e.heightCm??null,sex:e.sex??null,activityLevel:e.activityLevel??null,goal:e.goal??null,restrictions:[],tmb:null,dailyCalories:null,dailyProteinG:null,dailyCarbsG:null,dailyFatG:null,isStandardProfile:!1,createdAt:t,updatedAt:t};return e.age&&e.weightKg&&e.heightCm&&e.sex&&e.activityLevel&&e.goal&&ai(r,e),m.members.push(r),G(r)})),update:async(e,t)=>(await T(),L(()=>{const r=m.members.find(n=>n.id===e);if(!r)throw new Error("Miembro no encontrado");return t.weightKg&&(m.weightHistory.push({id:H(),memberId:r.id,weightKg:t.weightKg,date:new Date}),t={...t,weightDate:new Date}),Object.assign(r,t),r.isStandardProfile=!1,(t.weightKg||t.heightCm||t.activityLevel||t.goal)&&r.age&&r.sex&&r.activityLevel&&r.goal&&ai(r,r),r.updatedAt=new Date,G(r)})),remove:async e=>(await T(),L(()=>{if(m.members.length<=1)throw new Error("No puedes eliminar el único miembro");const t=m.members.findIndex(r=>r.id===e);if(t===-1)throw new Error("Miembro no encontrado");return m.members.splice(t,1),{message:"Miembro eliminado"}}))};function $a(){const e=Te(),t=m.foods.map(r=>G(r));return[...e.foodsList,...t].sort((r,i)=>r.name.localeCompare(i.name))}function Ut(e){const r=Te().foodsById.get(e);if(r)return r;const i=m.foods.find(n=>n.id===e);return i?G(i):null}function To(e){const t=e.ingredients.map(r=>({id:r.id,recipeId:r.recipeId,foodId:r.foodId,quantity:r.quantity,unit:r.unit,food:Ut(r.foodId)}));return G({...e,ingredients:t})}function Kn(){const e=Te();return[...m.recipes.map(To),...e.recipesList].sort((r,i)=>new Date(i.createdAt).getTime()-new Date(r.createdAt).getTime())}function Be(e){const r=Te().recipesById.get(e);if(r)return r;const i=m.recipes.find(n=>n.id===e);return i?To(i):null}function Bc(e){if(!e)return null;const t=m.members.find(r=>r.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function un(e){return G({...e,recipe:e.recipeId?Be(e.recipeId):null,member:Bc(e.assignedToMemberId)})}const oi=["DESAYUNO","TENTEMPIE","ALMUERZO","MERIENDA","CENA"];function jc(e,t){return m.meals.filter(r=>r.planId===e&&(!t||r.assignedToMemberId===t)).sort((r,i)=>r.dayOfWeek-i.dayOfWeek||oi.indexOf(r.mealType)-oi.indexOf(i.mealType))}function Br(e,t){return G({...e,meals:jc(e.id,t).map(un)})}function Gc(e){return G({...e,recipe:Be(e.recipeId)})}function Uc(){const e=Te();return[...m.templates.map(r=>G(r)),...e.templates].sort((r,i)=>r.isSystem===i.isSystem?0:r.isSystem?1:-1)}function Po(e){const t=m.templates.find(r=>r.id===e);return t||Te().templates.find(r=>r.id===e)}function Ia(e){const t=Po(e);return t?G({...t,meals:[...t.meals].sort((r,i)=>r.dayOfWeek-i.dayOfWeek||oi.indexOf(r.mealType)-oi.indexOf(i.mealType)).map(Gc)}):null}function qc(e){return Po(e)}function Hc(e){const t=Te(),r=m.householdItems.map(n=>G(n));let i=[...t.householdItems,...r];if(e){const n=e.toLowerCase();i=i.filter(a=>a.name.toLowerCase().includes(n))}return i.sort((n,a)=>n.name.localeCompare(a.name))}function Oo(e){const r=Te().householdItems.find(n=>n.id===e);if(r)return r;const i=m.householdItems.find(n=>n.id===e);return i?G(i):null}const si={list:async()=>(await T(),$a()),search:async e=>{await T();const t=e.trim().toLowerCase();return t?$a().filter(r=>r.name.toLowerCase().includes(t)).slice(0,20):[]},create:async e=>(await T(),L(()=>{const t={id:H(),name:e.name,category:e.category??null,calorias100g:e.calorias100g??null,proteinas100g:e.proteinas100g??null,carbos100g:e.carbos100g??null,grasas100g:e.grasas100g??null,fibra100g:e.fibra100g??null,sodioMg:e.sodioMg??null,potasioMg:e.potasioMg??null,calcioMg:e.calcioMg??null,magnesioMg:e.magnesioMg??null,hierroMg:e.hierroMg??null,zincMg:e.zincMg??null,fosforoMg:e.fosforoMg??null,vitaminaAIug:e.vitaminaAIug??null,vitaminaCMg:e.vitaminaCMg??null,vitaminaDIug:e.vitaminaDIug??null,vitaminaEMg:e.vitaminaEMg??null,vitaminaKIug:e.vitaminaKIug??null,vitaminaB6Mg:e.vitaminaB6Mg??null,vitaminaB12Iug:e.vitaminaB12Iug??null,tiaminaMg:e.tiaminaMg??null,riboflavinaMg:e.riboflavinaMg??null,niacinaMg:e.niacinaMg??null,acidoFolicoIug:e.acidoFolicoIug??null,unidadBase:e.unidadBase??"g",familyId:m.family.id,source:null,sourceId:null,lastRefreshedAt:null,createdAt:new Date};return m.foods.push(t),G(t)}))};function Wt(e){return G({...e,food:Ut(e.foodId)})}function Qt(e){if(e!==void 0)return e?new Date(e):null}const He={list:async()=>(await T(),[...m.pantryItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(Wt)),expiring:async e=>{await T();const t=e&&e>0?e:mt.expiringSoonDays,r=new Date;r.setHours(23,59,59,999),r.setDate(r.getDate()+t);const i=m.pantryItems.filter(n=>n.quantity>0&&n.expiryDate!==null&&n.expiryDate<=r).sort((n,a)=>n.expiryDate.getTime()-a.expiryDate.getTime()).map(n=>{const a=n.expiryDate,o=Eo(a),s=Ut(n.foodId);return G({id:n.id,foodId:n.foodId,foodName:(s==null?void 0:s.name)??"?",quantity:n.quantity,unit:n.unit,expiryDate:a,daysLeft:o,expired:o<0})});return{days:t,items:i}},add:async e=>(await T(),L(()=>{const t=new Date,r={id:H(),familyId:m.family.id,addedByUserId:null,foodId:e.foodId,quantity:e.quantity,unit:e.unit??"g",expiryDate:Qt(e.expiryDate)??null,purchaseDate:Qt(e.purchaseDate)??null,notes:e.notes??null,createdAt:t,updatedAt:t};return m.pantryItems.push(r),Wt(r)})),update:async(e,t)=>(await T(),L(()=>{const r=m.pantryItems.find(i=>i.id===e);if(!r)throw new Error("Item no encontrado");return t.quantity!==void 0&&(r.quantity=t.quantity),t.unit!==void 0&&(r.unit=t.unit),t.expiryDate!==void 0&&(r.expiryDate=Qt(t.expiryDate)??null),t.purchaseDate!==void 0&&(r.purchaseDate=Qt(t.purchaseDate)??null),t.notes!==void 0&&(r.notes=t.notes),r.updatedAt=new Date,Wt(r)})),split:async(e,t)=>(await T(),L(()=>{const r=m.pantryItems.find(a=>a.id===e);if(!r)throw new Error("Item no encontrado");if(t.quantity>=r.quantity)throw new Error(`La cantidad a separar debe ser menor que la del lote (${r.quantity} ${r.unit})`);const i=new Date;r.quantity=Math.round((r.quantity-t.quantity)*10)/10,r.updatedAt=i;const n={id:H(),familyId:r.familyId,addedByUserId:r.addedByUserId,foodId:r.foodId,quantity:t.quantity,unit:r.unit,expiryDate:Qt(t.expiryDate)??null,purchaseDate:r.purchaseDate,notes:r.notes,createdAt:i,updatedAt:i};return m.pantryItems.push(n),{original:Wt(r),created:Wt(n)}})),remove:async e=>(await T(),L(()=>{const t=m.pantryItems.findIndex(r=>r.id===e);if(t===-1)throw new Error("Item no encontrado");return m.pantryItems.splice(t,1),{message:"Item eliminado"}}))};function zi(e){const t=new Map;for(const r of e){const i=Ut(r.foodId);i&&t.set(r.foodId,i)}return t}function Ni(e,t){var r;if(!e)throw new Error("Receta no encontrada");if(!e.familyId||e.familyId!==((r=m.family)==null?void 0:r.id))throw new Error(`No puedes ${t} una receta del sistema`)}const Tt={list:async e=>{var n,a;await T();let t=Kn();const r=(n=e==null?void 0:e.search)==null?void 0:n.toLowerCase();r&&(t=t.filter(o=>o.name.toLowerCase().includes(r)));const i=(a=e==null?void 0:e.ingredient)==null?void 0:a.toLowerCase();if(i&&(t=t.filter(o=>o.ingredients.some(s=>{var l;return(l=s.food)==null?void 0:l.name.toLowerCase().includes(i)}))),e!=null&&e.maxTime){const o=parseInt(e.maxTime,10);t=t.filter(s=>s.timeMinutes!=null&&s.timeMinutes<=o)}if(e!=null&&e.mealType&&(t=t.filter(o=>o.mealType.includes(e.mealType))),e!=null&&e.minCalories){const o=parseInt(e.minCalories,10);t=t.filter(s=>s.calorias==null||s.calorias>=o)}if(e!=null&&e.maxCalories){const o=parseInt(e.maxCalories,10);t=t.filter(s=>s.calorias==null||s.calorias<=o)}return t},get:async e=>{await T();const t=Be(e);if(!t)throw new Error("Receta no encontrada");return t},create:async e=>(await T(),L(()=>{const t=new Date,r=H(),i=e.servings??1,n=zi(e.ingredients),a=e.ingredients.map(l=>({foodId:l.foodId,quantity:l.quantity,unit:l.unit})),o=Ri(a,i,n),s={id:r,familyId:m.family.id,name:e.name,description:e.description??null,instructions:e.instructions??null,mealType:e.mealType??[],timeMinutes:e.timeMinutes??null,difficulty:e.difficulty??null,imageUrl:e.imageUrl??null,servings:i,...o,isPublic:e.isPublic??!1,createdAt:t,updatedAt:t,ingredients:e.ingredients.map(l=>({id:`${r}:${l.foodId}`,recipeId:r,foodId:l.foodId,quantity:l.quantity,unit:l.unit}))};return m.recipes.push(s),Be(r)})),update:async(e,t)=>(await T(),L(()=>{const r=m.recipes.find(i=>i.id===e);if(Ni(r,"editar"),Object.assign(r,{name:t.name??r.name,description:t.description??r.description,instructions:t.instructions??r.instructions,mealType:t.mealType??r.mealType,timeMinutes:t.timeMinutes??r.timeMinutes,difficulty:t.difficulty??r.difficulty,imageUrl:t.imageUrl??r.imageUrl,servings:t.servings??r.servings}),t.ingredients){const i=zi(t.ingredients),n=t.ingredients.map(o=>({foodId:o.foodId,quantity:o.quantity,unit:o.unit})),a=Ri(n,r.servings,i);Object.assign(r,a),r.ingredients=t.ingredients.map(o=>({id:`${r.id}:${o.foodId}`,recipeId:r.id,foodId:o.foodId,quantity:o.quantity,unit:o.unit}))}return r.updatedAt=new Date,Be(e)})),remove:async e=>(await T(),L(()=>{const t=m.recipes.find(i=>i.id===e);Ni(t,"eliminar");const r=m.recipes.indexOf(t);return m.recipes.splice(r,1),{message:"Receta eliminada"}})),recalculateNutrition:async e=>(await T(),L(()=>{const t=m.recipes.find(n=>n.id===e);Ni(t,"recalcular");const r=zi(t.ingredients),i=Ri(t.ingredients,t.servings,r);return Object.assign(t,i),t.updatedAt=new Date,Be(e)}))};function Pt(e){return m.mealPlans.find(t=>t.familyId===m.family.id&&t.weekKey===e)}function Cr(e){const t=be(e);let r=Pt(t);if(!r){const i=new Date;r={id:H(),familyId:m.family.id,weekStart:e,weekKey:t,autoGenerated:!1,createdAt:i,updatedAt:i},m.mealPlans.push(r)}return r}function Vc(){const e=m.family.id;return Kn().filter(t=>(t.isPublic&&t.familyId===null||t.familyId===e)&&t.calorias>=mt.minKcalPorRacion&&t.calorias<=mt.maxKcalPorRacion)}function Wc(e){const t=new Date;return t.setHours(23,59,59,999),t.setDate(t.getDate()+e),m.pantryItems.filter(r=>r.quantity>0&&r.expiryDate!==null&&r.expiryDate<=t).map(r=>{var a;const i=r.expiryDate,n=Eo(i);return{id:r.id,foodId:r.foodId,foodName:((a=Ut(r.foodId))==null?void 0:a.name)??"?",quantity:r.quantity,unit:r.unit,expiryDate:i,daysLeft:n,expired:n<0}})}function Qc(e,t){if(!e.dailyCalories)return null;const r={tmb:e.tmb??0,dailyCalories:e.dailyCalories,dailyProteinG:e.dailyProteinG??0,dailyCarbsG:e.dailyCarbsG??0,dailyFatG:e.dailyFatG??0},i=Ao(r),n=Do(i),a=Pt(be(t)),o={calories:0,proteinG:0,carbsG:0,fatG:0};if(a){const l=m.meals.filter(c=>c.planId===a.id&&c.assignedToMemberId===e.id&&!c.isFasting);for(const c of l){const u=c.recipeId?Be(c.recipeId):null;if(u){const d=c.servingsMultiplier??1;o.calories+=(u.calorias??0)*d,o.proteinG+=(u.proteinas??0)*d,o.carbsG+=(u.carbos??0)*d,o.fatG+=(u.grasas??0)*d}}}const s=o.calories>=n.calories.min&&o.calories<=n.calories.max&&o.proteinG>=n.proteinG.min&&o.proteinG<=n.proteinG.max&&o.carbsG>=n.carbsG.min&&o.carbsG<=n.carbsG.max&&o.fatG>=n.fatG.min&&o.fatG<=n.fatG.max;return{memberId:e.id,memberName:e.name,current:o,target:i,range:n,withinRange:s}}const Ae={current:async e=>{await T();const t=ye(),r=Cr(t);return L(()=>Br(r,e))},generate:async(e,t=!0)=>(await T(),L(()=>{const r=ye(),i=e?m.members.filter(p=>p.id===e):m.members;if(i.length===0)throw new Error("No hay miembros en la unidad familiar");let n=i[0];if(e||(n=i.find(p=>p.dailyCalories)??i[0]),!n.dailyCalories)throw new Error(`El miembro "${n.name}" no tiene perfil nutricional completo. Completa su perfil en la sección Perfil.`);const a={tmb:n.tmb??0,dailyCalories:n.dailyCalories,dailyProteinG:n.dailyProteinG??0,dailyCarbsG:n.dailyCarbsG??0,dailyFatG:n.dailyFatG??0},o=Ao(a),s=Do(o),l=Vc();if(l.length<mt.minRecipesForPlan)throw new Error(`Se necesitan al menos ${mt.minRecipesForPlan} recetas. Hay ${l.length}.`);let c;if(t){const p=Wc(mt.expiringSoonDays);c={urgencyMap:Rc(p,mt.expiringSoonDays),weekStart:r}}const u=Ec(),d=l;Dc(d,u,c),Tc(d,u,s,c);const f=Cr(r);f.autoGenerated=!0,f.updatedAt=new Date;const _=e??n.id;m.meals=m.meals.filter(p=>!(p.planId===f.id&&p.assignedToMemberId===_));for(const p of u)m.meals.push({id:H(),planId:f.id,dayOfWeek:p.dayOfWeek,mealType:p.mealType,recipeId:p.recipeId,assignedToMemberId:_,completed:!1,servingsMultiplier:1,isEatingOut:!1,isFasting:!1,notes:null,order:0});return Br(f)})),remove:async()=>(await T(),L(()=>{const e=ye(),t=Pt(be(e));if(!t)throw new Error("No hay plan para esta semana");return m.meals=m.meals.filter(r=>r.planId!==t.id),m.mealPlans=m.mealPlans.filter(r=>r.id!==t.id),{message:"Plan semanal eliminado"}})),assignSlot:async e=>(await T(),L(()=>{const t=ye(),r=e.planId?m.mealPlans.find(l=>l.id===e.planId&&l.familyId===m.family.id):Cr(t);if(!r)throw new Error("Plan no encontrado");const i=e.servingsMultiplier??1,n=e.isEatingOut??!1,a=e.isFasting??!1,o=m.meals.find(l=>l.planId===r.id&&l.dayOfWeek===e.dayOfWeek&&l.mealType===e.mealType&&(!e.assignedToMemberId||l.assignedToMemberId===e.assignedToMemberId));if(o)return o.recipeId=e.recipeId,o.completed=!1,o.servingsMultiplier=i,o.assignedToMemberId=e.assignedToMemberId??o.assignedToMemberId,o.isEatingOut=n,o.isFasting=a,un(o);const s={id:H(),planId:r.id,dayOfWeek:e.dayOfWeek,mealType:e.mealType,recipeId:e.recipeId,servingsMultiplier:i,assignedToMemberId:e.assignedToMemberId??null,isEatingOut:n,isFasting:a,completed:!1,notes:null,order:0};return m.meals.push(s),un(s)})),removeSlot:async(e,t,r)=>(await T(),L(()=>{const i=ye(),n=Pt(be(i));if(!n)throw new Error("No hay plan para esta semana");const a=m.meals.filter(s=>s.planId===n.id&&s.dayOfWeek===e&&s.mealType===t&&(!r||s.assignedToMemberId===r));if(a.length===0)throw new Error("No hay comida en esa posición");const o=new Set(a.map(s=>s.id));return m.meals=m.meals.filter(s=>!o.has(s.id)),{message:"Comida(s) eliminada(s) del plan"}})),suggestions:async(e=5)=>(await T(),[...Kn().filter(i=>i.isPublic&&i.familyId===null).slice(0,50)].sort(()=>Math.random()-.5).slice(0,e)),progress:async e=>{await T();const t=ye(),r=e?m.members.filter(a=>a.id===e):m.members;if(r.length===0)return{withinRange:!0,current:null,target:null,message:"Sin familia"};if(!Pt(be(t)))return{withinRange:!0,current:null,target:null,message:"Sin plan aún"};const n=r.map(a=>Qc(a,t)).filter(a=>a!==null);return e?G(n[0]??{withinRange:!0,current:null,target:null,message:"Sin plan aún"}):n.length===0?{withinRange:!0,current:null,target:null,message:"Sin plan aún"}:G(n)},cook:async e=>(await T(),L(()=>{var a,o;const t=m.meals.find(s=>s.id===e&&m.mealPlans.some(l=>l.id===s.planId&&l.familyId===m.family.id));if(!t)throw new Error("Comida no encontrada");if(!t.recipeId)throw new Error("Esta comida no tiene receta asignada");const r=Be(t.recipeId);if(!r)throw new Error("Esta comida no tiene receta asignada");if(t.completed)return{alreadyCooked:!0,summary:[]};const i=new Map;for(const s of m.pantryItems){const l=i.get(s.foodId);l?l.push(s):i.set(s.foodId,[s])}const n=[];for(const s of r.ingredients){const l=(i.get(s.foodId)??[]).filter(p=>p.unit===s.unit),c=l.reduce((p,g)=>p+g.quantity,0);if(l.length===0){n.push({name:((a=s.food)==null?void 0:a.name)??"?",subtracted:0,remaining:0,unit:s.unit});continue}const u=r.servings&&r.servings>0?r.servings:1,d=s.quantity/u*t.servingsMultiplier,{consumption:f,totalSubtracted:_}=Fc(l.map(p=>({id:p.id,quantity:p.quantity,expiryDate:p.expiryDate})),d);for(const p of f){const g=m.pantryItems.find(w=>w.id===p.id);g.quantity=p.remaining,g.updatedAt=new Date}n.push({name:((o=s.food)==null?void 0:o.name)??"?",subtracted:_,remaining:Math.round((c-_)*10)/10,unit:l[0].unit})}return t.completed=!0,{alreadyCooked:!1,summary:n}})),history:async e=>{await T();const t=e??8,r=ye(),i=be(r);return m.mealPlans.filter(a=>a.familyId===m.family.id&&a.weekKey<i&&m.meals.some(o=>o.planId===a.id)).sort((a,o)=>a.weekKey<o.weekKey?1:-1).slice(0,t).map(a=>G({id:a.id,weekStart:a.weekStart,autoGenerated:a.autoGenerated,mealCount:m.meals.filter(o=>o.planId===a.id).length}))},repeat:async e=>(await T(),L(()=>{const t=ye(),r=be(t),i=e!=null&&e.sourcePlanId?m.mealPlans.find(s=>s.id===e.sourcePlanId&&s.familyId===m.family.id):Pt(be(wc(t,-7)));if(!i)throw new Error("No hay un plan anterior para repetir");const n=m.meals.filter(s=>s.planId===i.id);if(n.length===0)throw new Error("No hay un plan anterior para repetir");if(i.weekKey===r)throw new Error("No puedes repetir la semana actual sobre sí misma");const a=e!=null&&e.assignedToMemberId?n.filter(s=>s.assignedToMemberId===e.assignedToMemberId):n;if(a.length===0)throw new Error("El plan de origen no tiene comidas para ese miembro");const o=Cr(t);o.autoGenerated=!1,o.updatedAt=new Date,e!=null&&e.assignedToMemberId?m.meals=m.meals.filter(s=>!(s.planId===o.id&&s.assignedToMemberId===e.assignedToMemberId)):m.meals=m.meals.filter(s=>s.planId!==o.id);for(const s of a)m.meals.push({id:H(),planId:o.id,dayOfWeek:s.dayOfWeek,mealType:s.mealType,recipeId:s.recipeId,servingsMultiplier:s.servingsMultiplier,order:s.order,isEatingOut:s.isEatingOut,isFasting:s.isFasting,notes:s.notes,completed:!1,assignedToMemberId:(e==null?void 0:e.assignedToMemberId)??s.assignedToMemberId});return Br(o)}))};function ka(e){return m.mealPlans.find(t=>t.familyId===m.family.id&&t.weekKey===e)}const Yt={list:async()=>(await T(),Uc()),get:async e=>{await T();const t=Ia(e);if(!t)throw new Error("Plantilla no encontrada");return t},create:async e=>(await T(),L(()=>{const t=ye(),r=ka(be(t)),i=r?m.meals.filter(s=>s.planId===r.id):[];if(!r||i.length===0)throw new Error("No hay plan semanal para guardar como plantilla");const n=new Date,a=H(),o={id:a,familyId:m.family.id,name:e.name,description:e.description??null,goal:null,isSystem:!1,createdAt:n,updatedAt:n,meals:i.filter(s=>s.recipeId).map(s=>({id:H(),templateId:a,dayOfWeek:s.dayOfWeek,mealType:s.mealType,recipeId:s.recipeId,servingsMultiplier:s.servingsMultiplier??1,order:s.order}))};return m.templates.push(o),Ia(a)})),remove:async e=>(await T(),L(()=>{if(!m.templates.find(r=>r.id===e&&r.familyId===m.family.id))throw new Error("Plantilla no encontrada");return m.templates=m.templates.filter(r=>r.id!==e),{message:"Plantilla eliminada"}})),apply:async(e,t)=>(await T(),L(()=>{const r=qc(e);if(!r)throw new Error("Plantilla no encontrada");const i=ye(),n=be(i),a=ka(n);a&&(m.meals=m.meals.filter(c=>c.planId!==a.id),m.mealPlans=m.mealPlans.filter(c=>c.id!==a.id));const o=(t==null?void 0:t.assignedToMemberId)||null,s=new Date,l={id:H(),familyId:m.family.id,weekStart:i,weekKey:n,autoGenerated:!1,createdAt:s,updatedAt:s};m.mealPlans.push(l);for(const c of r.meals)m.meals.push({id:H(),planId:l.id,dayOfWeek:c.dayOfWeek,mealType:c.mealType,recipeId:c.recipeId,servingsMultiplier:c.servingsMultiplier,order:c.order,assignedToMemberId:o,completed:!1,isEatingOut:!1,isFasting:!1,notes:null});return Br(l)}))};function Li(e){return m.shoppingLists.find(t=>t.familyId===m.family.id&&t.weekKey===e)}function Ro(e){const t=be(e),r=m.mealPlans.find(n=>n.familyId===m.family.id&&n.weekKey===t);if(!r)return new Map;const i=m.meals.filter(n=>n.planId===r.id&&!n.isFasting&&!n.isEatingOut&&!n.completed).map(n=>{const a=n.recipeId?Be(n.recipeId):null;return{servingsMultiplier:n.servingsMultiplier,recipe:a?{servings:a.servings,ingredients:a.ingredients.map(o=>{var s;return{foodId:o.foodId,foodName:((s=o.food)==null?void 0:s.name)??"?",quantity:o.quantity,unit:o.unit}})}:null}});return xc(i)}function Fo(){const e=new Map;for(const t of m.pantryItems){const r=`${t.foodId}|${t.unit}`;e.set(r,(e.get(r)??0)+t.quantity)}return e}function zo(e){return G({...e,food:Ut(e.foodId)})}function pn(e){return G({...e,householdItem:e.householdItemId?Oo(e.householdItemId):null})}function No(e){const t=m.shoppingSectionItems.filter(r=>r.sectionId===e.id).sort((r,i)=>r.sortOrder-i.sortOrder).map(pn);return G({...e,items:t})}function Lo(e){const t=m.shoppingItems.filter(i=>i.listId===e.id).map(zo),r=m.shoppingSections.filter(i=>i.listId===e.id).sort((i,n)=>i.sortOrder-n.sortOrder).map(No);return G({...e,items:t,sections:r})}function Yc(e){const t=Ro(e.weekStart),r=Fo(),i=m.shoppingItems.filter(o=>o.listId===e.id),n=new Map(i.map(o=>[o.foodId,o]));for(const[o,s]of t){const l=$o(r,o,s.unit),c=Math.max(0,s.total-l),u=l>=s.total,d=n.get(o),f=((d==null?void 0:d.purchased)??!1)||u;d?(d.totalNeeded=s.total,d.inPantry=l,d.toBuy=c,d.purchased=f,d.unit=s.unit):m.shoppingItems.push({id:H(),listId:e.id,foodId:o,totalNeeded:s.total,inPantry:l,toBuy:c,unit:s.unit,purchased:f})}const a=new Set(t.keys());return m.shoppingItems=m.shoppingItems.filter(o=>o.listId!==e.id||a.has(o.foodId)),Lo(e)}const Ne={current:async()=>(await T(),L(()=>{const e=ye(),t=Li(be(e));return t?Yc(t):{items:[],sections:[],message:"Aún no se ha generado la lista"}})),generate:async()=>(await T(),L(()=>{const e=ye(),t=be(e),r=Ro(e),i=m.mealPlans.find(s=>s.familyId===m.family.id&&s.weekKey===t);if(r.size===0&&!i)throw new Error("No hay plan semanal para esta semana");const n=Li(t);n&&(m.shoppingSectionItems=m.shoppingSectionItems.filter(s=>!m.shoppingSections.some(l=>l.id===s.sectionId&&l.listId===n.id)),m.shoppingSections=m.shoppingSections.filter(s=>s.listId!==n.id),m.shoppingItems=m.shoppingItems.filter(s=>s.listId!==n.id),m.shoppingLists=m.shoppingLists.filter(s=>s.id!==n.id));const a=Fo(),o={id:H(),familyId:m.family.id,weekStart:e,weekKey:t,createdAt:new Date};m.shoppingLists.push(o);for(const s of r.values()){const l=$o(a,s.foodId,s.unit),c=Math.max(0,s.total-l);m.shoppingItems.push({id:H(),listId:o.id,foodId:s.foodId,totalNeeded:s.total,inPantry:l,toBuy:c,unit:s.unit,purchased:l>=s.total})}return Lo(o)})),toggleItem:async e=>(await T(),L(()=>{const t=m.shoppingItems.find(r=>r.id===e&&m.shoppingLists.some(i=>i.id===r.listId&&i.familyId===m.family.id));if(!t)throw new Error("Item no encontrado");return t.purchased=!t.purchased,zo(t)})),createSection:async e=>(await T(),L(()=>{const t=ye(),r=be(t);let i=Li(r);i||(i={id:H(),familyId:m.family.id,weekStart:t,weekKey:r,createdAt:new Date},m.shoppingLists.push(i));const n=Math.max(-1,...m.shoppingSections.filter(o=>o.listId===i.id).map(o=>o.sortOrder)),a={id:H(),listId:i.id,name:e,sortOrder:n+1,createdAt:new Date};return m.shoppingSections.push(a),No(a)})),addSectionItem:async(e,t)=>(await T(),L(()=>{const r=m.shoppingSections.find(a=>a.id===e&&m.shoppingLists.some(o=>o.id===a.listId&&o.familyId===m.family.id));if(!r)throw new Error("Sección no encontrada");const i=Math.max(-1,...m.shoppingSectionItems.filter(a=>a.sectionId===r.id).map(a=>a.sortOrder)),n={id:H(),sectionId:r.id,name:t.name,quantity:t.quantity??1,purchased:!1,sortOrder:i+1,householdItemId:t.householdItemId??null};return m.shoppingSectionItems.push(n),pn(n)})),toggleSectionItem:async(e,t)=>(await T(),L(()=>{const r=m.shoppingSectionItems.find(n=>n.id===e&&m.shoppingSections.some(a=>a.id===n.sectionId&&m.shoppingLists.some(o=>o.id===a.listId&&o.familyId===m.family.id)));if(!r)throw new Error("Artículo no encontrado");const i=r.purchased;if(r.purchased=t,t&&!i&&r.householdItemId){const n=m.family.id,a=m.householdStockItems.find(o=>o.familyId===n&&o.householdItemId===r.householdItemId);if(a)a.quantity+=r.quantity,a.updatedAt=new Date;else{const o=new Date;m.householdStockItems.push({id:H(),familyId:n,householdItemId:r.householdItemId,quantity:r.quantity,unit:"UNIDAD",minThreshold:null,notes:null,createdAt:o,updatedAt:o})}}return pn(r)})),removeSectionItem:async e=>(await T(),L(()=>{const t=m.shoppingSectionItems.findIndex(r=>r.id===e&&m.shoppingSections.some(i=>i.id===r.sectionId&&m.shoppingLists.some(n=>n.id===i.listId&&n.familyId===m.family.id)));if(t===-1)throw new Error("Artículo no encontrado");return m.shoppingSectionItems.splice(t,1),{message:"Artículo eliminado"}}))};function Mr(e){return G({...e,householdItem:Oo(e.householdItemId)})}const lt={items:async e=>(await T(),Hc(e)),createItem:async e=>(await T(),L(()=>{const t={id:H(),name:e.name,category:e.category??null,unit:e.unit??"UNIDAD",familyId:m.family.id,createdAt:new Date};return m.householdItems.push(t),G(t)})),stock:async()=>(await T(),[...m.householdStockItems].sort((e,t)=>t.createdAt.getTime()-e.createdAt.getTime()).map(Mr)),addStock:async e=>(await T(),L(()=>{const t=m.family.id,r=m.householdStockItems.find(a=>a.familyId===t&&a.householdItemId===e.householdItemId);if(r)return r.quantity+=e.quantity,r.unit=e.unit??r.unit,r.minThreshold=e.minThreshold??r.minThreshold,r.notes=e.notes??r.notes,r.updatedAt=new Date,Mr(r);const i=new Date,n={id:H(),familyId:t,householdItemId:e.householdItemId,quantity:e.quantity,unit:e.unit??"UNIDAD",minThreshold:e.minThreshold??null,notes:e.notes??null,createdAt:i,updatedAt:i};return m.householdStockItems.push(n),Mr(n)})),updateStock:async(e,t)=>(await T(),L(()=>{const r=m.householdStockItems.find(i=>i.id===e&&i.familyId===m.family.id);if(!r)throw new Error("Artículo no encontrado");return t.quantity!==void 0&&(r.quantity=t.quantity),t.unit!==void 0&&(r.unit=t.unit),t.minThreshold!==void 0&&(r.minThreshold=t.minThreshold),t.notes!==void 0&&(r.notes=t.notes),r.updatedAt=new Date,Mr(r)})),removeStock:async e=>(await T(),L(()=>{const t=m.householdStockItems.findIndex(r=>r.id===e&&r.familyId===m.family.id);if(t===-1)throw new Error("Artículo no encontrado");return m.householdStockItems.splice(t,1),{message:"Artículo eliminado"}}))};function hn(e){return e==="DIARIA"?xo(new Date):ye()}function Xc(e){if(!e)return null;const t=m.members.find(r=>r.id===e);return t?{id:t.id,name:t.name,color:t.color}:null}function Ar(e){const t=hn(e.frequency),i=m.choreCompletions.filter(n=>n.choreId===e.id&&n.date>=t).length>0;return G({...e,member:Xc(e.assignedToMemberId),completedInPeriod:i})}const Ct={list:async()=>(await T(),m.chores.filter(e=>e.familyId===m.family.id&&e.active).sort((e,t)=>e.createdAt.getTime()-t.createdAt.getTime()).map(Ar)),create:async e=>(await T(),L(()=>{const t={id:H(),familyId:m.family.id,name:e.name,frequency:e.frequency,assignedToMemberId:e.assignedToMemberId??null,active:!0,createdAt:new Date};return m.chores.push(t),Ar(t)})),update:async(e,t)=>(await T(),L(()=>{const r=m.chores.find(i=>i.id===e&&i.familyId===m.family.id);if(!r)throw new Error("Tarea no encontrada");return Object.assign(r,t),Ar(r)})),remove:async e=>(await T(),L(()=>{const t=m.chores.findIndex(r=>r.id===e&&r.familyId===m.family.id);if(t===-1)throw new Error("Tarea no encontrada");return m.chores.splice(t,1),{message:"Tarea eliminada"}})),complete:async(e,t)=>(await T(),L(()=>{const r=m.chores.find(a=>a.id===e&&a.familyId===m.family.id);if(!r)throw new Error("Tarea no encontrada");if(t&&!m.members.some(a=>a.id===t))throw new Error("Miembro no encontrado");const i=hn(r.frequency);return m.choreCompletions.find(a=>a.choreId===r.id&&a.date>=i)?{completedInPeriod:!0}:(m.choreCompletions.push({id:H(),choreId:r.id,date:new Date,completedByMemberId:t??null}),{completedInPeriod:!0})})),uncomplete:async e=>(await T(),L(()=>{const t=m.chores.find(i=>i.id===e&&i.familyId===m.family.id);if(!t)throw new Error("Tarea no encontrada");const r=hn(t.frequency);return m.choreCompletions=m.choreCompletions.filter(i=>!(i.choreId===t.id&&i.date>=r)),{completedInPeriod:!1}})),templates:async()=>(await T(),ba.map(e=>({id:e.id,name:e.name,description:e.description,choreCount:e.chores.length}))),applyTemplate:async e=>(await T(),L(()=>{const t=ba.find(s=>s.id===e);if(!t)throw new Error("Plantilla no encontrada");const r=m.family.id,i=new Set(m.chores.filter(s=>s.familyId===r&&s.active).map(s=>Oi(s.name))),n=t.chores.filter(s=>!i.has(Oi(s.name))),a=t.chores.filter(s=>i.has(Oi(s.name))).map(s=>s.name);return{created:n.map(s=>{const l={id:H(),familyId:r,name:s.name,frequency:s.frequency,assignedToMemberId:null,active:!0,createdAt:new Date};return m.chores.push(l),Ar(l)}),skipped:a}}))};function Ea(){return!0}async function Jc(){return await T(),JSON.stringify(Is(m),null,2)}async function Zc(e){await T();const t=ks(JSON.parse(e)),{store:r,report:i,catalogVersionMismatch:n}=Ss(t);return await vc(r),{report:i,catalogVersionMismatch:n}}async function ed(){await T(),await yc()}var td=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,Bn=(e,t,r,i)=>{for(var n=i>1?void 0:i?rd(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&td(t,r,n),n};let mr=class extends he{constructor(){super(...arguments),this.variant="wordmark",this.showTagline=!1}render(){return this.variant==="mark"?h`
        <svg viewBox="0 0 64 64" role="img" aria-label="Etxa">
          <rect width="64" height="64" rx="18" fill="var(--etxa-color-background)"></rect>
          <circle cx="32" cy="32" r="21" fill="var(--etxa-color-primary)"></circle>
          <path d="M23 23l18 18m0-18L23 41" fill="none" stroke="white" stroke-width="7" stroke-linecap="round"></path>
        </svg>
      `:h`
      <svg viewBox="0 0 224 ${this.showTagline?80:56}" role="img" aria-label=${this.showTagline?"Etxa. La casa, hecha.":"Etxa"}>
        <text class="letters" x="4" y="44" font-size="52" fill="currentColor">et</text>
        <circle cx="113" cy="29" r="26" fill="var(--etxa-color-primary)"></circle>
        <path d="M101 18l24 24m0-24-24 24" fill="none" stroke="white" stroke-width="8" stroke-linecap="round"></path>
        <text class="letters" x="140" y="44" font-size="52" fill="currentColor">a</text>
        ${this.showTagline?h`<text class="tagline" x="112" y="73" font-size="14" text-anchor="middle" fill="currentColor">La casa, hecha.</text>`:""}
      </svg>
    `}};mr.styles=[Na,de`
      :host {
        display: inline-flex;
        color: var(--etxa-color-text);
        line-height: 1;
      }

      svg { display: block; height: 2.5rem; width: auto; overflow: visible; }
      :host([variant='mark']) svg { height: 2.75rem; }
      .letters { font-family: var(--etxa-font-heading); font-weight: 700; }
      .tagline { font-family: var(--etxa-font-body); font-weight: 500; }
    `];Bn([ci({reflect:!0})],mr.prototype,"variant",2);Bn([ci({type:Boolean,attribute:"show-tagline"})],mr.prototype,"showTagline",2);mr=Bn([Ce("etxa-logo")],mr);var id=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?nd(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&id(t,r,n),n};let rt=class extends he{constructor(){super(...arguments),this.message="",this._email="",this._password="",this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t=await Gt.login({email:this._email,password:this._password});t.accessToken,t.refreshToken,this.dispatchEvent(new CustomEvent("login-success"))}catch(t){this._error=t.message||"Error al iniciar sesión"}finally{this._loading=!1}},this._dispatchRegister=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("register"))}}render(){return h`
      <div class="card">
        <h1>MealPrepHelper</h1>
        <p class="sub">Inicia sesión para continuar</p>

        ${this.message?h`<div class="notice">${this.message}</div>`:""}
        ${this._error?h`<div class="error">${this._error}</div>`:""}

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
    `}};rt.styles=de`
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
  `;qt([ci({type:String})],rt.prototype,"message",2);qt([b()],rt.prototype,"_email",2);qt([b()],rt.prototype,"_password",2);qt([b()],rt.prototype,"_error",2);qt([b()],rt.prototype,"_loading",2);rt=qt([Ce("login-page")],rt);var ad=Object.defineProperty,od=Object.getOwnPropertyDescriptor,it=(e,t,r,i)=>{for(var n=i>1?void 0:i?od(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&ad(t,r,n),n};let Fe=class extends he{constructor(){super(...arguments),this._name="",this._email="",this._password="",this._familyName="",this._extraMembers=[],this._error="",this._loading=!1,this._handleSubmit=async e=>{e.preventDefault(),this._error="",this._loading=!0;try{const t={name:this._name,email:this._email,password:this._password,familyName:this._familyName||`Familia de ${this._name}`,members:[{name:this._name},...this._extraMembers.filter(i=>i.trim()).map(i=>({name:i.trim()}))]},r=await Gt.register(t);r.accessToken,r.refreshToken,this.dispatchEvent(new CustomEvent("register-success"))}catch(t){this._error=t.message||"Error al registrarse"}finally{this._loading=!1}},this._dispatchLogin=e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("login"))}}_addMember(){this._extraMembers=[...this._extraMembers,""]}_updateMember(e,t){const r=[...this._extraMembers];r[e]=t,this._extraMembers=r}_removeMember(e){this._extraMembers=this._extraMembers.filter((t,r)=>r!==e)}render(){return h`
      <div class="card">
        <h1>Crear cuenta</h1>
        <p class="sub">Regístrate para empezar a planificar tus comidas</p>

        ${this._error?h`<div class="error">${this._error}</div>`:""}

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
            ${this._extraMembers.map((e,t)=>h`
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
    `}};Fe.styles=de`
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
  `;it([b()],Fe.prototype,"_name",2);it([b()],Fe.prototype,"_email",2);it([b()],Fe.prototype,"_password",2);it([b()],Fe.prototype,"_familyName",2);it([b()],Fe.prototype,"_extraMembers",2);it([b()],Fe.prototype,"_error",2);it([b()],Fe.prototype,"_loading",2);Fe=it([Ce("register-page")],Fe);var sd=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,ue=(e,t,r,i)=>{for(var n=i>1?void 0:i?ld(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&sd(t,r,n),n};const cd=[{value:"SEDENTARIO",label:"Sedentario (poco o nada de ejercicio)"},{value:"LIGERO",label:"Ligero (1-3 días/semana)"},{value:"MODERADO",label:"Moderado (3-5 días/semana)"},{value:"ACTIVO",label:"Activo (6-7 días/semana)"}],dd=[{value:"PERDER_PESO",label:"Perder peso"},{value:"MANTENER",label:"Mantener peso"},{value:"GANAR_MUSCULO",label:"Ganar músculo"}],ud=["Vegetariano","Vegano","Sin gluten","Sin lactosa","Sin frutos secos","Sin huevo","Bajo en sodio","Diabético"];let re=class extends he{constructor(){super(...arguments),this._members=[],this._selectedMemberId="",this._onboardedIds=new Set,this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[],this._error="",this._success="",this._saving=!1,this._confirmingSkip=!1,this._skipping=!1,this._loading=!0,this._handleSubmit=async e=>{var t;if(e.preventDefault(),this._error="",this._success="",!this._sex||!this._activityLevel||!this._goal){this._error="Completa todos los campos obligatorios";return}this._saving=!0;try{await xa.onboarding({memberId:this._selectedMemberId,age:Number(this._age),weightKg:Number(this._weightKg),heightCm:Number(this._heightCm),sex:this._sex,activityLevel:this._activityLevel,goal:this._goal,restrictions:this._restrictions}),this._onboardedIds=new Set([...this._onboardedIds,this._selectedMemberId]);const r=((t=this._selectedMember)==null?void 0:t.name)||"";this._success=`Perfil de ${r} guardado correctamente`}catch(r){this._error=r.message||"Error al guardar perfil"}finally{this._saving=!1}},this._handleSkipAll=async()=>{this._error="",this._skipping=!0;try{await xa.skipOnboarding(),this.dispatchEvent(new CustomEvent("onboarding-complete"))}catch(e){this._error=e.message||"Error al aplicar el perfil estándar",this._confirmingSkip=!1}finally{this._skipping=!1}}}connectedCallback(){super.connectedCallback(),this._load()}async _load(){var e;try{const t=await Gt.me();if(this._members=((e=t.family)==null?void 0:e.members)||[],this._members.length>0){this._selectMember(this._members[0].id);const r=this._members.filter(i=>i.dailyCalories).map(i=>i.id);this._onboardedIds=new Set(r)}}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}_selectMember(e){this._selectedMemberId=e,this._error="",this._success="";const t=this._members.find(r=>r.id===e);t&&t.dailyCalories?(this._age=String(t.age??""),this._weightKg=String(t.weightKg??""),this._heightCm=String(t.heightCm??""),this._sex=t.sex??"",this._activityLevel=t.activityLevel??"",this._goal=t.goal??"",this._restrictions=t.restrictions||[]):(this._age="",this._weightKg="",this._heightCm="",this._sex="",this._activityLevel="",this._goal="",this._restrictions=[])}get _selectedMember(){return this._members.find(e=>e.id===this._selectedMemberId)}get _pendingMembers(){return this._members.filter(e=>!this._onboardedIds.has(e.id))}_toggleRestriction(e){this._restrictions.includes(e)?this._restrictions=this._restrictions.filter(t=>t!==e):this._restrictions=[...this._restrictions,e]}_handleContinue(){this.dispatchEvent(new CustomEvent("onboarding-complete"))}_nextPendingMember(){const e=this._pendingMembers[0];e&&this._selectMember(e.id)}render(){var t;if(this._loading)return h`<div class="card"><p>Cargando...</p></div>`;const e=this._members.length>0&&this._pendingMembers.length===0;return h`
      <div class="card">
        <h1>Tu perfil nutricional</h1>
        <p class="sub">Configura los datos de cada miembro de la familia</p>

        ${this._error?h`<div class="error">${this._error}</div>`:""}

        ${e?h`
          <div class="all-done">
            <p>✅ Todos los miembros tienen su perfil configurado</p>
            <button @click=${this._handleContinue}>Ir al plan semanal</button>
          </div>
        `:h`
          <div class="member-bar">
            <select .value=${this._selectedMemberId} @change=${r=>this._selectMember(r.target.value)}>
              ${this._members.map(r=>h`
                <option value=${r.id}>
                  ${r.name}${this._onboardedIds.has(r.id)?" ✅":""}
                </option>
              `)}
            </select>
            ${this._onboardedIds.has(this._selectedMemberId)?h`<span class="badge-done">Completado</span>`:""}
          </div>

          ${this._confirmingSkip?h`
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
          `:h`
          <div class="info-box">
            ${((t=this._selectedMember)==null?void 0:t.name)||"Este miembro"} — completa sus datos nutricionales para calcular las necesidades diarias.
          </div>

          ${this._success?h`<div class="success">
            <span>${this._success}</span>
            ${this._pendingMembers.length>0?h`
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
                ${cd.map(r=>h`<option value=${r.value}>${r.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label for="goal">Objetivo nutricional</label>
              <select id="goal" .value=${this._goal} @change=${r=>{this._goal=r.target.value}} required>
                <option value="" disabled>Selecciona...</option>
                ${dd.map(r=>h`<option value=${r.value}>${r.label}</option>`)}
              </select>
            </div>

            <div class="field">
              <label>Restricciones dietéticas (opcional)</label>
              <div class="check-grid">
                ${ud.map(r=>h`
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

          ${!this._confirmingSkip&&this._onboardedIds.size>0?h`
            <div style="margin-top:1rem;text-align:center">
              <button class="btn-outline" style="padding:0.5rem 1.5rem;border-radius:8px;font-size:0.85rem;cursor:pointer;font-family:inherit;background:var(--surface);color:var(--primary);border:1px solid var(--primary)" @click=${this._handleContinue}>
                Continuar al plan semanal
              </button>
            </div>
          `:""}
        `}
      </div>
    `}};re.styles=de`
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
  `;ue([b()],re.prototype,"_members",2);ue([b()],re.prototype,"_selectedMemberId",2);ue([b()],re.prototype,"_onboardedIds",2);ue([b()],re.prototype,"_age",2);ue([b()],re.prototype,"_weightKg",2);ue([b()],re.prototype,"_heightCm",2);ue([b()],re.prototype,"_sex",2);ue([b()],re.prototype,"_activityLevel",2);ue([b()],re.prototype,"_goal",2);ue([b()],re.prototype,"_restrictions",2);ue([b()],re.prototype,"_error",2);ue([b()],re.prototype,"_success",2);ue([b()],re.prototype,"_saving",2);ue([b()],re.prototype,"_confirmingSkip",2);ue([b()],re.prototype,"_skipping",2);ue([b()],re.prototype,"_loading",2);re=ue([Ce("onboarding-page")],re);var pd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,K=(e,t,r,i)=>{for(var n=i>1?void 0:i?hd(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&pd(t,r,n),n};const Sa="mpp.useExpiring",Ca="mpp.expiryWarningDismissedWeek",Ki=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],Bi=[{value:"DESAYUNO",label:"Desayuno"},{value:"TENTEMPIE",label:"Tentempié"},{value:"ALMUERZO",label:"Almuerzo"},{value:"MERIENDA",label:"Merienda"},{value:"CENA",label:"Cena"}],md={calories:"Calorías",proteinG:"Proteína",carbsG:"Carbohidratos",fatG:"Grasa"},fd={calories:"kcal",proteinG:"g",carbsG:"g",fatG:"g"};let N=class extends he{constructor(){super(...arguments),this._plan=null,this._loading=!0,this._error="",this._generating=!1,this._deleting=!1,this._useExpiring=!0,this._expiring=[],this._expiryDismissed=!1,this._progress=null,this._progressArray=null,this._showMenu=!1,this._editMode=!1,this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._showAllRecipes=!1,this._allRecipes=[],this._recipeSearch="",this._panelLoading=!1,this._assigning=!1,this._isEatingOut=!1,this._dragOverSlot="",this._expandedDay=1,this._multipliers={},this._members=[],this._selectedMemberId="",this._showSaveTemplate=!1,this._showLoadTemplate=!1,this._templateName="",this._templates=[],this._savingTemplate=!1,this._loadingTemplates=!1,this._applyingTemplate=!1,this._showRepeatWeek=!1,this._history=[],this._loadingHistory=!1,this._repeating=!1,this._detailRecipe=null,this._detailMealId=null,this._showRecipeDetail=!1,this._detailLoading=!1,this._cooking={},this._cookingSummary=null,this._showCookedSummary=!1,this._docClickHandler=e=>{this._showMenu&&(e.composedPath().some(i=>{var n,a;return(a=(n=i.classList)==null?void 0:n.contains)==null?void 0:a.call(n,"menu-container")})||(this._showMenu=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._docClickHandler),this._restorePreferences(),this._loadMembers().then(()=>this._loadPlan()),this._loadExpiring()}_restorePreferences(){try{this._useExpiring=localStorage.getItem(Sa)!=="false",this._expiryDismissed=localStorage.getItem(Ca)===this._weekKey()}catch{}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._docClickHandler)}async _loadMembers(){var e,t;try{const r=await Gt.me();this._members=((e=r.family)==null?void 0:e.members)||[];const i=this._members.find(n=>n.dailyCalories);this._selectedMemberId=(i==null?void 0:i.id)||((t=this._members[0])==null?void 0:t.id)||""}catch{this._members=[]}}async _loadPlan(){var e,t;this._loading=!0,this._error="";try{if(this._plan=await Ae.current(this._selectedMemberId||void 0),(t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length){this._loadProgress();const r={};for(const i of this._plan.meals)r[`${i.dayOfWeek}-${i.mealType}`]=i.servingsMultiplier??1;this._multipliers=r}}catch{this._plan=null}finally{this._loading=!1}}async _loadProgress(){try{const e=await Ae.progress(this._selectedMemberId||void 0);Array.isArray(e)?(this._progressArray=e,this._progress=null):(this._progress=e,this._progressArray=null)}catch{this._progress=null,this._progressArray=null}}_onMemberChange(e){const t=e.target.value;this._selectedMemberId=t,this._loadPlan()}hasMeals(){var e,t;return!!((t=(e=this._plan)==null?void 0:e.meals)!=null&&t.length)}async _generatePlan(){this._generating=!0,this._error="";try{this._plan=await Ae.generate(this._selectedMemberId||void 0,this._useExpiring),this._progress=null,this._loadProgress()}catch(e){this._error=e.message||"Error al generar el plan"}finally{this._generating=!1}}_toggleUseExpiring(e){this._useExpiring=e.target.checked;try{localStorage.setItem(Sa,String(this._useExpiring))}catch{}}async _loadExpiring(){try{const e=await He.expiring();this._expiring=e.items||[]}catch{this._expiring=[]}}_unusedExpiring(){var t,r;const e=new Set;for(const i of((t=this._plan)==null?void 0:t.meals)||[])for(const n of((r=i.recipe)==null?void 0:r.ingredients)||[])n.foodId&&e.add(n.foodId);return this._expiring.filter(i=>!e.has(i.foodId))}_dismissExpiryWarning(){this._expiryDismissed=!0;try{localStorage.setItem(Ca,this._weekKey())}catch{}}_weekKey(){const e=new Date,t=e.getDay(),r=new Date(e);r.setDate(e.getDate()-t+(t===0?-6:1));const i=r.getFullYear(),n=String(r.getMonth()+1).padStart(2,"0"),a=String(r.getDate()).padStart(2,"0");return`${i}-${n}-${a}`}async _deletePlan(){if(confirm("¿Eliminar el plan semanal actual?")){this._deleting=!0,this._error="";try{await Ae.remove(),this._plan=null,this._progress=null,this._progressArray=null,this._editMode=!1,this._showMenu=!1}catch(e){this._error=e.message||"Error al eliminar el plan"}finally{this._deleting=!1}}}_toggleMenu(){this._showMenu=!this._showMenu}_enterEditMode(){this._editMode=!0,this._showMenu=!1}_exitEditMode(){this._editMode=!1,this._closePanel()}async _openPanel(e,t){this._panelDay=e,this._panelMealType=t,this._showPanel=!0,this._recipeSearch="",this._showAllRecipes=!1;const r=this._getMeal(e,t);this._isEatingOut=(r==null?void 0:r.isEatingOut)??!1,this._panelLoading=!0;try{this._allRecipes=await Tt.list()}catch{this._allRecipes=[]}finally{this._panelLoading=!1}}_closePanel(){this._showPanel=!1,this._panelDay=1,this._panelMealType="",this._allRecipes=[],this._recipeSearch="",this._showAllRecipes=!1}get _filteredRecipes(){let e=this._allRecipes;!this._showAllRecipes&&this._panelMealType&&(e=e.filter(r=>{var i;return(i=r.mealType)==null?void 0:i.includes(this._panelMealType)}));const t=this._recipeSearch.toLowerCase().trim();return t?e.filter(r=>r.name.toLowerCase().includes(t)):e}get _mealTypeFilteredCount(){return this._panelMealType?this._allRecipes.filter(e=>{var t;return(t=e.mealType)==null?void 0:t.includes(this._panelMealType)}).length:this._allRecipes.length}async _clearPlan(){if(confirm("¿Limpiar todas las comidas del plan?")){this._error="",this._progress=null,this._progressArray=null;try{await Ae.remove(),await this._loadPlan()}catch(e){this._error=e.message||"Error al limpiar el plan"}}}async _removeSlotMeal(e,t){if(confirm("¿Eliminar esta comida del plan?")){this._error="";try{await Ae.removeSlot(e,t,this._selectedMemberId||void 0),await this._loadPlan()}catch(r){this._error=r.message||"Error al eliminar comida"}}}_onDragStart(e,t){var r;(r=e.dataTransfer)==null||r.setData("text/plain",t),e.dataTransfer&&(e.dataTransfer.effectAllowed="copy")}_onDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")}_onDragEnter(e,t){this._dragOverSlot=`${e}-${t}`}_onDragLeave(e,t){this._dragOverSlot===`${e}-${t}`&&(this._dragOverSlot="")}_onDrop(e,t,r){var n;e.preventDefault();const i=(n=e.dataTransfer)==null?void 0:n.getData("text/plain");i&&(this._assigning||this._assignSlot(t,r,i))}async _assignSlot(e,t,r){this._assigning=!0;const i=`${e}-${t}`,n=this._multipliers[i]??1,a=this._isEatingOut;console.log("[assignSlot] payload:",{dayOfWeek:e,mealType:t,recipeId:r,servingsMultiplier:n,isEatingOut:a});try{await Ae.assignSlot({dayOfWeek:e,mealType:t,recipeId:r,servingsMultiplier:n,isEatingOut:a,assignedToMemberId:this._selectedMemberId||void 0}),this._showPanel&&e===this._panelDay&&t===this._panelMealType&&this._closePanel(),await this._loadPlan()}catch(o){this._error=o.message||"Error al asignar receta"}finally{this._assigning=!1}}_assignFromPanel(e){this._assignSlot(this._panelDay,this._panelMealType,e)}_adjustMultiplier(e,t,r){const i=`${e}-${t}`,n=this._multipliers[i]??1,a=Math.round((n+r)*10)/10;a<.5||a>5||(this._multipliers={...this._multipliers,[i]:a},this._persistMultiplier(e,t))}async _persistMultiplier(e,t){var a;const r=`${e}-${t}`,i=this._multipliers[r]??1,n=this._getMeal(e,t);if((a=n==null?void 0:n.recipe)!=null&&a.id)try{await Ae.assignSlot({dayOfWeek:e,mealType:t,recipeId:n.recipe.id,servingsMultiplier:i}),await this._loadPlan()}catch(o){this._error=o.message||"Error al actualizar ración",await this._loadPlan()}}async _saveTemplate(){if(this._templateName.trim()){this._savingTemplate=!0;try{await Yt.create({name:this._templateName.trim()}),this._showSaveTemplate=!1,this._templateName=""}catch(e){this._error=e.message||"Error al guardar plantilla"}finally{this._savingTemplate=!1}}}async _openLoadTemplate(){this._showLoadTemplate=!0,this._loadingTemplates=!0;try{this._templates=await Yt.list()}catch{this._templates=[]}finally{this._loadingTemplates=!1}}async _applyTemplate(e){if(!this._applyingTemplate){this._applyingTemplate=!0,this._error="";try{await Yt.apply(e,{assignedToMemberId:this._selectedMemberId||void 0}),this._showLoadTemplate=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=t.message||"Error al aplicar plantilla"}finally{this._applyingTemplate=!1}}}async _deleteTemplate(e,t){if(t.stopPropagation(),!!confirm("¿Eliminar esta plantilla?"))try{await Yt.remove(e),this._templates=await Yt.list()}catch(r){this._error=r.message||"Error al eliminar plantilla"}}async _openRepeatWeek(){this._showRepeatWeek=!0,this._loadingHistory=!0;try{this._history=await Ae.history()}catch{this._history=[]}finally{this._loadingHistory=!1}}_openRepeatWeekFromMenu(){this._showMenu=!1,confirm("¿Reemplazar el plan actual con una semana anterior?")&&this._openRepeatWeek()}_formatWeekRange(e){const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const i=n=>n.toLocaleDateString("es-ES",{day:"numeric",month:"short"});return`${i(t)} - ${i(r)}`}async _repeatWeek(e){if(!this._repeating){this._repeating=!0,this._error="";try{await Ae.repeat({sourcePlanId:e,assignedToMemberId:this._selectedMemberId||void 0}),this._showRepeatWeek=!1,await this._loadPlan(),await this._loadExpiring()}catch(t){this._error=t.message||"Error al repetir el plan"}finally{this._repeating=!1}}}async _openRecipeDetail(e,t,r){if(r==null||r.stopPropagation(),!!e){this._detailLoading=!0,this._detailMealId=t??null,this._showRecipeDetail=!0;try{this._detailRecipe=await Tt.get(e)}catch{this._detailRecipe=null,this._showRecipeDetail=!1}finally{this._detailLoading=!1}}}_closeRecipeDetail(){this._showRecipeDetail=!1,this._detailRecipe=null,this._detailMealId=null}_openEditFromDetail(){this._showRecipeDetail=!1,window.location.hash="#/recetas"}async _markCooked(e){const t=this._detailMealId;if(!(!(e!=null&&e.id)||!t||this._cooking[t])){this._cooking={...this._cooking,[t]:!0};try{const r=await Ae.cook(t);this._cookingSummary=r.summary,this._showCookedSummary=!0,this._cooking={...this._cooking,[t]:!1},await this._loadPlan(),await this._loadExpiring()}catch(r){this._error=r.message||"Error al marcar como cocinado",this._cooking={...this._cooking,[t]:!1}}}}_macroBar(e,t){var u;const r=t||this._progress;if(!(r!=null&&r.current)||!(r!=null&&r.target))return"";const i=r.current[e]??0,n=r.target[e]??1,a=(u=r.range)==null?void 0:u[e],o=Math.min(100,Math.round(i/n*100)),s=md[e]||e,l=fd[e]||"",c=a?i>=a.min&&i<=a.max:null;return h`
      <div class="macro-row">
        <div class="macro-label">${s}</div>
        <div class="macro-bar-track">
          <div class="macro-bar-fill ${c===!0?"ok":c===!1?"over":""}" style="width: ${Math.min(o,100)}%"></div>
        </div>
        <div class="macro-numbers">
          <span class="macro-current">${i.toLocaleString()}</span>
          <span class="macro-sep">/</span>
          <span class="macro-target">${n.toLocaleString()}</span>
          <span class="macro-unit">${l}</span>
        </div>
      </div>
    `}_renderSlot(e,t){var _,p,g,w;const r=(p=(_=this._plan)==null?void 0:_.meals)==null?void 0:p.find(y=>y.dayOfWeek===e&&y.mealType===t),i=`${e}-${t}`,n=this._dragOverSlot===i,a=this._editMode?this._onDragOver:void 0,o=this._editMode?y=>this._onDrop(y,e,t):void 0,s=this._editMode?()=>this._onDragEnter(e,t):void 0,l=this._editMode?()=>this._onDragLeave(e,t):void 0,c=this._editMode?()=>this._openPanel(e,t):void 0,u=["slot",n?"drag-over":"",this._editMode?"clickable":"",r?"":"empty"].filter(Boolean).join(" ");if(!r)return this._editMode?h`
          <div
            class=${u}
            @click=${c}
            @dragover=${a}
            @dragenter=${s}
            @dragleave=${l}
            @drop=${o}
          >
            <span class="add-icon">+</span>
          </div>`:h`<div class="slot empty">—</div>`;const d=`${e}-${t}`,f=this._multipliers[d]??r.servingsMultiplier??1;return h`
  <div
    class=${u}
    @click=${c}
    @dragover=${a}
    @dragenter=${s}
    @dragleave=${l}
    @drop=${o}
  >
    <div class="slot-header">
      <div class="slot-name">${((g=r.recipe)==null?void 0:g.name)||"?"}</div>
      <button class="slot-view" @click=${y=>{var I;return this._openRecipeDetail((I=r.recipe)==null?void 0:I.id,r.id,y)}} title="Ver receta">👁</button>
      ${this._editMode?h`<button class="slot-remove" @click=${y=>{y.stopPropagation(),this._removeSlotMeal(e,t)}} title="Eliminar">✕</button>`:""}
    </div>
    ${(w=r.recipe)!=null&&w.calorias?h`<div class="slot-macro">${Math.round(r.recipe.calorias*f)} kcal</div>`:""}
    ${r.isEatingOut?h`<div class="slot-badge eating-out">Comer fuera</div>`:""}
    ${this._editMode||f!==1?h`
        <div class="slot-multiplier">
          ${this._editMode?h`
              <button class="mult-btn" @click=${y=>{y.stopPropagation(),this._adjustMultiplier(e,t,-.5)}} ?disabled=${f<=.5}>−</button>
              <span class="mult-value">x${f.toFixed(1)}</span>
              <button class="mult-btn" @click=${y=>{y.stopPropagation(),this._adjustMultiplier(e,t,.5)}} ?disabled=${f>=5}>+</button>
            `:h`<span class="mult-value">x${f.toFixed(1)}</span>`}
        </div>
      `:""}
  </div>
`}_getMeal(e,t){var r,i;return(i=(r=this._plan)==null?void 0:r.meals)==null?void 0:i.find(n=>n.dayOfWeek===e&&n.mealType===t)}_renderMobileList(){return Ki.map((e,t)=>{const r=t+1,i=this._expandedDay===r,n=Bi.map(a=>({type:a,meal:this._getMeal(r,a.value)}));return h`
        <div class="mobile-day">
          <div class="mobile-day-header" @click=${()=>{this._expandedDay=i?null:r}}>
            <span>${e}</span>
            <span class="mobile-day-summary">${n.filter(a=>a.meal).length} comidas</span>
            <span class="mobile-day-arrow ${i?"open":""}">▶</span>
          </div>
          ${i?h`
            <div class="mobile-day-body">
              ${n.map(({type:a,meal:o})=>{var g,w;const s=`${r}-${a.value}`,l=this._multipliers[s]??(o==null?void 0:o.servingsMultiplier)??1,c=this._dragOverSlot===s,u=this._editMode?this._onDragOver:void 0,d=this._editMode?y=>this._onDrop(y,r,a.value):void 0,f=this._editMode?()=>this._onDragEnter(r,a.value):void 0,_=this._editMode?()=>this._onDragLeave(r,a.value):void 0,p=this._editMode?()=>this._openPanel(r,a.value):void 0;return h`
                  <div class="mobile-meal ${this._editMode?"clickable":""} ${c?"drag-over":""}"
                    @click=${p}
                    @dragover=${u}
                    @dragenter=${f}
                    @dragleave=${_}
                    @drop=${d}
                  >
                    <div class="mobile-meal-type">${a.label}</div>
                    ${o?h`
                        <div class="mobile-meal-name">${((g=o.recipe)==null?void 0:g.name)||"?"}</div>
                        <button class="slot-view" @click=${y=>{var I;return this._openRecipeDetail((I=o.recipe)==null?void 0:I.id,o.id,y)}} title="Ver receta">👁</button>
                        ${o.isEatingOut?h`<span class="eating-out-badge-mobile">Comer fuera</span>`:""}
                        <div class="mobile-meal-kcal">${(w=o.recipe)!=null&&w.calorias?`${Math.round(o.recipe.calorias*l)} kcal`:""}</div>
                        ${this._editMode?h`
                            <div class="mobile-meal-mult-edit">
                              <button class="mult-btn" @click=${y=>{y.stopPropagation(),this._adjustMultiplier(r,a.value,-.5)}} ?disabled=${l<=.5}>−</button>
                              <span class="mult-value">x${l.toFixed(1)}</span>
                              <button class="mult-btn" @click=${y=>{y.stopPropagation(),this._adjustMultiplier(r,a.value,.5)}} ?disabled=${l>=5}>+</button>
                            </div>
                            <button class="slot-remove" @click=${y=>{y.stopPropagation(),this._removeSlotMeal(r,a.value)}}>✕</button>
                          `:h`
                            <div class="mobile-meal-mult">x${l.toFixed(1)}</div>
                          `}
                      `:h`
                        <div class="mobile-meal-empty">${this._editMode?"+ Añadir receta":"—"}</div>
                      `}
                  </div>
                `})}
            </div>
          `:""}
        </div>
      `})}_renderExpiryWarning(){if(this._expiryDismissed||!this._plan||this._plan.autoGenerated||this._expiring.length===0)return"";const e=new Set(this._unusedExpiring().map(t=>t.id));return h`
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
          ${this._expiring.map(t=>h`
            <li class=${e.has(t.id)?"unused":""}>
              ${t.foodName} — ${t.quantity} ${t.unit==="UNIDAD"?"ud":t.unit}
              <span class="expiry-when">
                ${t.expired?"caducado":t.daysLeft===0?"caduca hoy":t.daysLeft===1?"caduca mañana":`caduca en ${t.daysLeft} días`}
              </span>
            </li>
          `)}
        </ul>
      </div>
    `}_renderStandardProfileWarning(){const e=this._members.filter(i=>i.isStandardProfile);if(e.length===0)return"";const t=e.map(i=>i.name),r=t.length===1?"":` para ${t.slice(0,-1).join(", ")} y ${t[t.length-1]}`;return h`
      <div class="expiry-warning standard-profile-warning">
        <strong>⚠️ Plan estándar${r}</strong>
        <p class="expiry-warning-note">
          Está calculado para una persona adulta de unos 70 kg (2.000 kcal al día), no con datos
          reales. Completa el perfil para ajustar calorías, raciones y lista de la compra.
          <a href="#/perfil">Ir a Perfil</a>
        </p>
      </div>
    `}render(){var t,r,i,n;if(this._loading)return h`<p>Cargando plan...</p>`;const e=this.hasMeals();return h`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Plan semanal</h2>
          ${this._members.length>0?h`
            <select class="member-select" @change=${this._onMemberChange}>
              <option value="" ?selected=${this._selectedMemberId===""}>Todos los miembros</option>
              ${this._members.map(a=>h`
                <option value=${a.id} ?selected=${this._selectedMemberId===a.id}>${a.name}</option>
              `)}
            </select>
          `:""}
          ${this._editMode?h`<span class="edit-badge">Editando</span>`:""}
          ${this._editMode?h`<button class="btn-outline btn-sm" @click=${this._clearPlan}>Limpiar todo</button>`:""}
          <label class="expiry-toggle" title="Al generar, prioriza recetas que usan lo que caduca antes">
            <input type="checkbox" .checked=${this._useExpiring} @change=${this._toggleUseExpiring} />
            Aprovechar lo que caduca
          </label>
        </div>

        ${e?h`
            <div class="menu-container">
              <button class="menu-trigger" @click=${this._toggleMenu}>⋮</button>
              ${this._showMenu?h`
                <div class="menu-dropdown">
                  ${this._editMode?h`<button class="menu-item" @click=${this._exitEditMode}>✓ Terminar edición</button>`:h`<button class="menu-item" @click=${this._enterEditMode}>✏️ Editar plan</button>`}
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
          `:h`
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

      ${this._error?h`<div class="error">${this._error}</div>`:""}

      ${this._renderStandardProfileWarning()}
      ${this._renderExpiryWarning()}

      ${!e&&!this._editMode?h`
          <div class="empty-state">
            <p>Aún no tienes un plan semanal. Genera uno automático o añade recetas manualmente desde el modo edición.</p>
          </div>
        `:h`
          <div class="desktop-grid">
            <div class="grid">
            <div class="label-cell"></div>
            ${Ki.map(a=>h`<div class="header-cell">${a}</div>`)}

            ${Bi.map(a=>h`
                <div class="label-cell">${a.label}</div>
                ${[1,2,3,4,5,6,7].map(o=>this._renderSlot(o,a.value))}
              `)}
          </div>

          ${(t=this._progress)!=null&&t.current?h`
            <div class="macro-overview" style="margin-top:1.5rem">
              <h3>Progreso semanal</h3>
              ${["calories","proteinG","carbsG","fatG"].map(a=>this._macroBar(a))}
              ${this._progress.withinRange!=null?h`
                <span class="within-range ${this._progress.withinRange?"ok":"nok"}">
                  ${this._progress.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
                </span>
              `:""}
            </div>
          `:""}
          ${(r=this._progressArray)!=null&&r.length?h`
            ${this._progressArray.map(a=>a!=null&&a.current?h`
              <div class="macro-overview" style="margin-top:1.5rem">
                <h3>${a.memberName||"Miembro"}</h3>
                ${["calories","proteinG","carbsG","fatG"].map(o=>this._macroBar(o,a))}
                ${a.withinRange!=null?h`
                  <span class="within-range ${a.withinRange?"ok":"nok"}">
                    ${a.withinRange?"✓ Dentro del rango objetivo":"⚠ Fuera del rango objetivo"}
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

      ${this._showPanel?h`
        <div class="panel-overlay" @click=${this._closePanel}></div>
        <div class="panel">
          <div class="panel-header">
            <h3>Elegir receta</h3>
            <button class="close-btn" @click=${this._closePanel}>✕</button>
          </div>
          <div class="panel-context">
            ${Ki[this._panelDay-1]}, ${(i=Bi.find(a=>a.value===this._panelMealType))==null?void 0:i.label}
            <span style="display:block;font-size:0.6875rem;margin-top:0.25rem;color:var(--text-muted)">Arrastra una receta a una celda o haz clic para asignar</span>
            ${this._allRecipes.length>0&&this._mealTypeFilteredCount<this._allRecipes.length?h`
              <label class="eating-out-check" style="display:flex;align-items:center;gap:0.375rem;margin-top:0.5rem;font-size:0.75rem;cursor:pointer">
                <input type="checkbox" .checked=${this._showAllRecipes} @change=${a=>{this._showAllRecipes=a.target.checked}}>
                Mostrar todas las recetas (${this._allRecipes.length})
              </label>
            `:""}
            <label class="eating-out-check" style="display:flex;align-items:center;gap:0.375rem;margin-top:0.375rem;font-size:0.75rem;cursor:pointer">
              <input type="checkbox" ?checked=${this._isEatingOut} @change=${a=>{var s;this._isEatingOut=a.target.checked;const o=this._getMeal(this._panelDay,this._panelMealType);(s=o==null?void 0:o.recipe)!=null&&s.id&&this._isEatingOut!==o.isEatingOut&&this._assignSlot(this._panelDay,this._panelMealType,o.recipe.id)}}>
              Comer fuera — excluir de la lista de la compra, sí contar en nutrición
            </label>
          </div>
          <div class="panel-search">
            <input
              type="text"
              placeholder="Buscar receta..."
              .value=${this._recipeSearch}
              @input=${a=>{this._recipeSearch=a.target.value}}
            />
          </div>
          <div class="panel-list">
            ${this._panelLoading?h`<div class="panel-loading">Cargando recetas...</div>`:this._filteredRecipes.length===0?h`<div class="panel-empty">${this._recipeSearch?"No hay recetas que coincidan":"No hay recetas disponibles"}</div>`:this._filteredRecipes.map(a=>h`
                  <div
                    class="panel-item ${this._assigning?"disabled":""}"
                    draggable="true"
                    @dragstart=${o=>!this._assigning&&this._onDragStart(o,a.id)}
                    @click=${this._assigning?void 0:()=>this._assignFromPanel(a.id)}
                  >
                    <div>
                      <div class="pi-name">${a.name}</div>
                      <div class="pi-meta">${a.timeMinutes?`${a.timeMinutes} min`:""} ${a.difficulty?`· ${a.difficulty}`:""}</div>
                    </div>
                    <div class="pi-kcal">${a.calorias?`${a.calorias} kcal`:""}</div>
                  </div>
                `)}
          </div>
        </div>
      `:""}
      ${this._showSaveTemplate?h`
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
              @input=${a=>{this._templateName=a.target.value}}
              @keydown=${a=>{a.key==="Enter"&&this._saveTemplate()}}
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

      ${this._showLoadTemplate?h`
        <div class="modal-overlay" @click=${()=>{this._showLoadTemplate=!1}}></div>
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3>Cargar plantilla</h3>
            <button class="close-btn" @click=${()=>{this._showLoadTemplate=!1}}>✕</button>
          </div>
          <div class="modal-body">
            ${this._loadingTemplates?h`<div class="panel-loading">Cargando plantillas...</div>`:this._templates.length===0?h`<div class="panel-empty">No hay plantillas guardadas</div>`:h`
                  <div class="template-list">
                    ${this._templates.map(a=>h`
                      <div class="template-item ${this._applyingTemplate?"disabled":""}" @click=${this._applyingTemplate?void 0:()=>this._applyTemplate(a.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${a.name}</div>
                          <div class="template-item-meta">${a.isSystem?"Plantilla del sistema":"Plantilla personal"}</div>
                        </div>
                        ${a.isSystem?"":h`
                          <button class="template-item-delete" @click=${o=>this._deleteTemplate(a.id,o)} title="Eliminar plantilla">✕</button>
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

      ${this._showRepeatWeek?h`
        <div class="modal-overlay" @click=${()=>{this._showRepeatWeek=!1}}></div>
        <div class="modal modal-lg">
          <div class="modal-header">
            <h3>Repetir semana</h3>
            <button class="close-btn" @click=${()=>{this._showRepeatWeek=!1}}>✕</button>
          </div>
          <div class="modal-body">
            ${this._loadingHistory?h`<div class="panel-loading">Cargando semanas anteriores...</div>`:this._history.length===0?h`<div class="panel-empty">No hay planes de semanas anteriores</div>`:h`
                  <div class="template-list">
                    ${this._history.map(a=>h`
                      <div class="template-item ${this._repeating?"disabled":""}" @click=${this._repeating?void 0:()=>this._repeatWeek(a.id)}>
                        <div class="template-item-info">
                          <div class="template-item-name">${this._formatWeekRange(a.weekStart)}</div>
                          <div class="template-item-meta">${a.mealCount} comidas · ${a.autoGenerated?"generado automáticamente":"manual"}</div>
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

      ${this._showRecipeDetail?h`
        <div class="modal-overlay" @click=${this._closeRecipeDetail}></div>
        <div class="detail-modal" @click=${a=>a.stopPropagation()}>
          ${this._detailLoading?h`<div style="padding:2rem;text-align:center;color:var(--text-muted)">Cargando receta...</div>`:this._detailRecipe?h`
              <div class="detail-header">
                <h3>${this._detailRecipe.name}</h3>
                <button class="close-btn" @click=${this._closeRecipeDetail}>✕</button>
              </div>
              <div class="detail-body">
                <div class="detail-meta">
                  ${this._detailRecipe.difficulty?h`<span class="badge">${this._detailRecipe.difficulty==="FACIL"?"Fácil":this._detailRecipe.difficulty==="MEDIA"?"Media":"Difícil"}</span>`:""}
                  ${this._detailRecipe.timeMinutes?h`<span>⏱ ${this._detailRecipe.timeMinutes} min</span>`:""}
                  ${this._detailRecipe.servings?h`<span>🍽 ${this._detailRecipe.servings} porciones</span>`:""}
                </div>
                ${this._detailRecipe.description?h`<div class="detail-desc">${this._detailRecipe.description}</div>`:""}
                <div class="detail-macros">
                  ${this._detailRecipe.calorias!=null?h`<span class="macro"><strong>${this._detailRecipe.calorias}</strong> kcal</span>`:""}
                  ${this._detailRecipe.proteinas!=null?h`<span class="macro"><strong>${this._detailRecipe.proteinas}g</strong> proteína</span>`:""}
                  ${this._detailRecipe.carbos!=null?h`<span class="macro"><strong>${this._detailRecipe.carbos}g</strong> carbohidratos</span>`:""}
                  ${this._detailRecipe.grasas!=null?h`<span class="macro"><strong>${this._detailRecipe.grasas}g</strong> grasa</span>`:""}
                </div>
                ${(n=this._detailRecipe.ingredients)!=null&&n.length?h`
                  <div class="detail-section">
                    <h4>Ingredientes</h4>
                    <ul>
                      ${this._detailRecipe.ingredients.map(a=>{var o;return h`
                        <li>${a.quantity} ${a.unit==="UNIDAD"?"ud":a.unit} ${((o=a.food)==null?void 0:o.name)||"—"}</li>
                      `})}
                    </ul>
                  </div>
                `:""}
                ${this._detailRecipe.instructions?h`
                  <div class="detail-section">
                    <h4>Paso a paso</h4>
                    <ol>
                      ${this._detailRecipe.instructions.split(`
`).filter(a=>a.trim()).map(a=>h`<li>${a}</li>`)}
                    </ol>
                  </div>
                `:""}
              </div>
              <div class="detail-footer">
                <button class="btn-outline" @click=${this._closeRecipeDetail}>Cerrar</button>
                ${this._detailRecipe.familyId?h`
                  <button class="btn-outline" @click=${this._openEditFromDetail}>Editar</button>
                `:""}
                ${this._detailMealId?h`
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

      ${this._showCookedSummary?h`
        <div class="modal-overlay" @click=${()=>{this._showCookedSummary=!1}}></div>
        <div class="modal" @click=${a=>a.stopPropagation()}>
          <div class="modal-header">
            <h3>Ingredientes restados de la nevera</h3>
            <button class="close-btn" @click=${()=>{this._showCookedSummary=!1}}>✕</button>
          </div>
          <div class="modal-body">
            <ul class="cooked-summary">
              ${(this._cookingSummary||[]).map(a=>h`
                <li>
                  <span>${a.name}</span>
                  <span>
                    <span class="subtracted">${a.subtracted>0?`-${a.subtracted}${a.unit}`:"sin stock"}</span>
                    <span class="remaining"> (${a.remaining}${a.unit} restantes)</span>
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
    `}};N.styles=de`
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

    .standard-profile-warning a {
      color: #78350f;
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
      .top-bar {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        align-items: stretch;
      }
      .top-bar-left { grid-column: 1 / -1; }
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
  `;K([b()],N.prototype,"_plan",2);K([b()],N.prototype,"_loading",2);K([b()],N.prototype,"_error",2);K([b()],N.prototype,"_generating",2);K([b()],N.prototype,"_deleting",2);K([b()],N.prototype,"_useExpiring",2);K([b()],N.prototype,"_expiring",2);K([b()],N.prototype,"_expiryDismissed",2);K([b()],N.prototype,"_progress",2);K([b()],N.prototype,"_progressArray",2);K([b()],N.prototype,"_showMenu",2);K([b()],N.prototype,"_editMode",2);K([b()],N.prototype,"_showPanel",2);K([b()],N.prototype,"_panelDay",2);K([b()],N.prototype,"_panelMealType",2);K([b()],N.prototype,"_showAllRecipes",2);K([b()],N.prototype,"_allRecipes",2);K([b()],N.prototype,"_recipeSearch",2);K([b()],N.prototype,"_panelLoading",2);K([b()],N.prototype,"_assigning",2);K([b()],N.prototype,"_isEatingOut",2);K([b()],N.prototype,"_dragOverSlot",2);K([b()],N.prototype,"_expandedDay",2);K([b()],N.prototype,"_multipliers",2);K([b()],N.prototype,"_members",2);K([b()],N.prototype,"_selectedMemberId",2);K([b()],N.prototype,"_showSaveTemplate",2);K([b()],N.prototype,"_showLoadTemplate",2);K([b()],N.prototype,"_templateName",2);K([b()],N.prototype,"_templates",2);K([b()],N.prototype,"_savingTemplate",2);K([b()],N.prototype,"_loadingTemplates",2);K([b()],N.prototype,"_applyingTemplate",2);K([b()],N.prototype,"_showRepeatWeek",2);K([b()],N.prototype,"_history",2);K([b()],N.prototype,"_loadingHistory",2);K([b()],N.prototype,"_repeating",2);K([b()],N.prototype,"_detailRecipe",2);K([b()],N.prototype,"_detailMealId",2);K([b()],N.prototype,"_showRecipeDetail",2);K([b()],N.prototype,"_detailLoading",2);K([b()],N.prototype,"_cooking",2);K([b()],N.prototype,"_cookingSummary",2);K([b()],N.prototype,"_showCookedSummary",2);N=K([Ce("plan-view")],N);var gd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,J=(e,t,r,i)=>{for(var n=i>1?void 0:i?vd(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&gd(t,r,n),n};let Q=class extends he{constructor(){super(...arguments),this._items=[],this._expiringIds=new Set,this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._adding=!1,this._splitItem=null,this._splitQuantity=1,this._splitExpiryDate="",this._splitting=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1}connectedCallback(){super.connectedCallback(),this._loadPantry()}async _loadPantry(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([He.list(),He.expiring()]);this._items=e,this._expiringIds=new Set((t.items||[]).filter(r=>!r.expired).map(r=>r.id))}catch(e){this._error=e.message||"Error al cargar la nevera"}finally{this._loading=!1}}_groupedItems(){var t;const e=new Map;for(const r of this._items){const i=r.foodId,n=e.get(i);n?(n.total+=r.quantity,n.batches.push(r)):e.set(i,{foodId:i,name:((t=r.food)==null?void 0:t.name)||"?",total:r.quantity,unit:r.unit,batches:[r]})}for(const r of e.values())r.batches.sort((i,n)=>i.expiryDate&&n.expiryDate?i.expiryDate.localeCompare(n.expiryDate):i.expiryDate?-1:n.expiryDate?1:0);return Array.from(e.values()).sort((r,i)=>r.name.localeCompare(i.name))}_batchStatus(e){return e.expiryDate?new Date(e.expiryDate)<new Date(new Date().toDateString())?"expired":this._expiringIds.has(e.id)?"soon":"ok":"none"}_formatUnit(e){return e==="UNIDAD"?"ud":e}async _searchFood(e){const t=e.target.value;if(this._searchQuery=t,t.length<2){this._searchResults=[];return}try{this._searchResults=await si.search(t)}catch{this._searchResults=[]}}async _selectFood(e){this._selectedFood=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unidadBase||"g"}async _addItem(e){if(e.preventDefault(),!!this._selectedFood){this._adding=!0;try{const t={quantity:Number(this._quantity),unit:this._unit,expiryDate:this._expiryDate||null,purchaseDate:this._purchaseDate||null};this._editingItem?await He.update(this._editingItem.id,t):await He.add({foodId:this._selectedFood.id,...t}),this._resetFormFields(),this._showAddForm=!1,this._editingItem=null,await this._loadPantry()}catch(t){this._error=t.message||"Error al guardar el lote"}finally{this._adding=!1}}}async _removeItem(e){try{await He.remove(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar el lote"}}_editItem(e){var t;this._editingItem=e,this._selectedFood=e.food,this._searchQuery=((t=e.food)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._expiryDate=e.expiryDate?e.expiryDate.split("T")[0]:"",this._purchaseDate=e.purchaseDate?e.purchaseDate.split("T")[0]:"",this._showAddForm=!0}_openSplit(e){this._splitItem=e,this._splitQuantity=1,this._splitExpiryDate=""}_closeSplit(){this._splitItem=null,this._splitting=!1}async _confirmSplit(e){if(e.preventDefault(),!!this._splitItem){this._splitting=!0;try{await He.split(this._splitItem.id,{quantity:Number(this._splitQuantity),expiryDate:this._splitExpiryDate||null}),this._closeSplit(),await this._loadPantry()}catch(t){this._error=t.message||"Error al dividir el lote",this._splitting=!1}}}_resetFormFields(){this._searchQuery="",this._searchResults=[],this._selectedFood=null,this._quantity=1,this._unit="g",this._expiryDate="",this._purchaseDate="",this._editingItem=null,this._showCreateFood=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetFormFields()}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._searchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},r=await si.create(t);this._selectFood(r),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}_renderBatch(e){const t=this._batchStatus(e),r=e.expiryDate?new Date(e.expiryDate).toLocaleDateString():null;return h`
      <div class="batch ${t}">
        <span class="batch-qty">${e.quantity} ${this._formatUnit(e.unit)}</span>
        <span class="batch-date">
          ${r?h`Caduca: ${r}`:"Sin fecha de caducidad"}
          ${t==="expired"?h`<span class="tag">caducado</span>`:""}
          ${t==="soon"?h`<span class="tag">caduca pronto</span>`:""}
        </span>
        <div class="batch-actions">
          <button class="icon-btn" @click=${()=>this._openSplit(e)} title="Dividir lote">⑂</button>
          <button class="icon-btn" @click=${()=>this._editItem(e)} title="Editar lote">✎</button>
          <button class="icon-btn danger" @click=${()=>this._removeItem(e.id)} title="Eliminar lote">✕</button>
        </div>
      </div>
    `}render(){var t;if(this._loading)return h`<p>Cargando nevera...</p>`;const e=this._groupedItems();return h`
      <div class="top-bar">
        <h2>Nevera</h2>
        <button @click=${this._toggleForm}>
          ${this._showAddForm?"Cancelar":"Añadir alimento"}
        </button>
      </div>

      ${this._error?h`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?h`
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
                ${this._searchResults.length>0?h`
                  <div class="search-results">
                    ${this._searchResults.map(r=>h`
                      <div class="search-result-item" @click=${()=>this._selectFood(r)}>
                        <span>${r.name}</span>
                        <span style="font-size:0.6875rem;color:var(--text-muted)">${r.calorias100g??"?"} kcal/100g</span>
                      </div>
                    `)}
                  </div>
                `:this._searchQuery.length>=2&&!this._selectedFood&&!this._showCreateFood?h`
                  <div class="search-results">
                    <div class="search-result-item create-food" @click=${this._openCreateFood}>
                      + Crear "${this._searchQuery}" como nuevo alimento
                    </div>
                  </div>
                `:""}
              </div>

              ${this._showCreateFood?h`
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

            ${this._selectedFood?h`
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
                  ${this._expiryDate?h`<button type="button" class="clear-date" @click=${()=>{this._expiryDate=""}}>Quitar</button>`:""}
                </div>
              </div>
              <div class="form-row">
                <label>Fecha de compra (opcional)</label>
                <div class="date-field">
                  <input type="date" .value=${this._purchaseDate} @input=${r=>{this._purchaseDate=r.target.value}} />
                  ${this._purchaseDate?h`<button type="button" class="clear-date" @click=${()=>{this._purchaseDate=""}}>Quitar</button>`:""}
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

      ${e.length===0?h`<div class="empty-state"><p>Tu nevera está vacía. Añade alimentos para empezar.</p></div>`:h`
          <div class="list">
            ${e.map(r=>h`
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

      ${this._splitItem?h`
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
    `}};Q.styles=de`
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
  `;J([b()],Q.prototype,"_items",2);J([b()],Q.prototype,"_expiringIds",2);J([b()],Q.prototype,"_loading",2);J([b()],Q.prototype,"_error",2);J([b()],Q.prototype,"_showAddForm",2);J([b()],Q.prototype,"_editingItem",2);J([b()],Q.prototype,"_searchQuery",2);J([b()],Q.prototype,"_searchResults",2);J([b()],Q.prototype,"_selectedFood",2);J([b()],Q.prototype,"_quantity",2);J([b()],Q.prototype,"_unit",2);J([b()],Q.prototype,"_expiryDate",2);J([b()],Q.prototype,"_purchaseDate",2);J([b()],Q.prototype,"_adding",2);J([b()],Q.prototype,"_splitItem",2);J([b()],Q.prototype,"_splitQuantity",2);J([b()],Q.prototype,"_splitExpiryDate",2);J([b()],Q.prototype,"_splitting",2);J([b()],Q.prototype,"_showCreateFood",2);J([b()],Q.prototype,"_createFoodForm",2);J([b()],Q.prototype,"_creatingFood",2);Q=J([Ce("pantry-view")],Q);var yd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ee=(e,t,r,i)=>{for(var n=i>1?void 0:i?bd(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&yd(t,r,n),n};const _d={FACIL:"Fácil",MEDIA:"Media",DIFICIL:"Difícil"},wd=["g","ml","UNIDAD"];let X=class extends he{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._editRecipe=null,this._isCreating=!1,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._searching=!1,this._savingEdit=!1,this._showCreateFood=!1,this._createFoodForm={name:"",category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"},this._creatingFood=!1,this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._totalCount=0,this._searchTimeout=null,this._filterTimeout=null}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const e={};this._searchTerm&&(e.search=this._searchTerm),this._ingredientFilter&&(e.ingredient=this._ingredientFilter),this._maxTimeFilter&&(e.maxTime=this._maxTimeFilter),this._items=await Tt.list(Object.keys(e).length>0?e:void 0),this._totalCount=this._items.length}catch(e){this._error=e.message||"Error al cargar recetas",this._items=[]}finally{this._loading=!1}}_onSearchInput(e){const t=e.target.value;this._searchTerm=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onIngredientInput(e){const t=e.target.value;this._ingredientFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_onDifficultyChange(e){this._difficultyFilter=e.target.value}_onMaxTimeInput(e){const t=e.target.value;this._maxTimeFilter=t,this._filterTimeout&&clearTimeout(this._filterTimeout),this._filterTimeout=setTimeout(()=>this._load(),300)}_clearFilters(){this._searchTerm="",this._ingredientFilter="",this._difficultyFilter="",this._maxTimeFilter="",this._load()}get _filteredItems(){return this._difficultyFilter?this._items.filter(e=>e.difficulty===this._difficultyFilter):this._items}async _deleteRecipe(e,t){if(confirm(`¿Eliminar "${t}"?`))try{await Tt.remove(e),this._items=this._items.filter(r=>r.id!==e)}catch(r){this._error=r.message||"Error al eliminar receta"}}_openEdit(e){this._isCreating=!1,this._editRecipe=e,this._editForm={name:e.name??"",description:e.description??"",instructions:e.instructions??"",difficulty:e.difficulty??"FACIL",timeMinutes:e.timeMinutes??30,servings:e.servings??1},this._editIngredients=(e.ingredients??[]).map(t=>{var r;return{foodId:t.foodId,foodName:((r=t.food)==null?void 0:r.name)??"",quantity:t.quantity,unit:t.unit}}),this._foodSearchQuery="",this._foodSearchResults=[]}_openCreate(){this._isCreating=!0,this._editRecipe={id:null},this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[]}_closeEdit(){this._isCreating=!1,this._editRecipe=null,this._editForm={name:"",description:"",instructions:"",difficulty:"FACIL",timeMinutes:30,servings:1},this._editIngredients=[],this._foodSearchQuery="",this._foodSearchResults=[],this._showCreateFood=!1}_onFieldChange(e,t){this._editForm={...this._editForm,[e]:t}}_onIngredientChange(e,t,r){const i=[...this._editIngredients];i[e]={...i[e],[t]:r},this._editIngredients=i}_removeIngredient(e){this._editIngredients=this._editIngredients.filter((t,r)=>r!==e)}_onFoodSearchInput(e){this._foodSearchQuery=e.target.value,this._searchTimeout&&clearTimeout(this._searchTimeout),this._searchTimeout=setTimeout(()=>{this._searchFoods()},300)}async _searchFoods(){const e=this._foodSearchQuery.trim();if(!e){this._foodSearchResults=[];return}this._searching=!0;try{this._foodSearchResults=await si.search(e)}catch{this._foodSearchResults=[]}finally{this._searching=!1}}async _addIngredient(e){const t=e.id,r=e.name;this._editIngredients=[...this._editIngredients,{foodId:t,foodName:r,quantity:100,unit:"g"}],this._foodSearchQuery="",this._foodSearchResults=[]}_openCreateFood(){this._showCreateFood=!0,this._createFoodForm={name:this._foodSearchQuery,category:"",calorias100g:0,proteinas100g:0,carbos100g:0,grasas100g:0,unidadBase:"g"}}_closeCreateFood(){this._showCreateFood=!1}async _handleCreateFood(e){if(e.preventDefault(),!!this._createFoodForm.name.trim()){this._creatingFood=!0;try{const t={...this._createFoodForm,category:this._createFoodForm.category||void 0},r=await si.create(t);this._addIngredient(r),this._closeCreateFood()}catch(t){this._error=t.message||"Error al crear alimento"}finally{this._creatingFood=!1}}}async _saveEdit(){if(!(!this._editRecipe||!this._editForm.name.trim())){this._savingEdit=!0;try{const e={name:this._editForm.name.trim(),description:this._editForm.description.trim()||void 0,instructions:this._editForm.instructions.trim()||void 0,difficulty:this._editForm.difficulty,timeMinutes:this._editForm.timeMinutes,servings:this._editForm.servings,ingredients:this._editIngredients.map(t=>({foodId:t.foodId,quantity:t.quantity,unit:t.unit}))};if(this._isCreating){const t=await Tt.create(e);this._items=[...this._items,t]}else{const t=await Tt.update(this._editRecipe.id,e);this._items=this._items.map(r=>r.id===this._editRecipe.id?{...r,...t}:r)}this._closeEdit()}catch(e){this._error=e.message||"Error al guardar receta"}finally{this._savingEdit=!1}}}_renderInstructions(e){const t=e.split(`
`).filter(r=>r.trim());return h`<ol>${t.map(r=>h`<li>${r}</li>`)}</ol>`}_macroBar(e,t,r){if(e==null)return"";const i=Math.round(e/t*100);return h`<span class="macro" title="${r}: ${e}g/${t}g">${r}: ${e}g <span class="pct">${i}%</span></span>`}_microsTooltip(e){const t=[["Sodio","mg",e.sodioMg],["Potasio","mg",e.potasioMg],["Calcio","mg",e.calcioMg],["Hierro","mg",e.hierroMg],["Zinc","mg",e.zincMg],["Fosforo","mg",e.fosforoMg],["Vit A","ug",e.vitaminaAIug],["Vit C","mg",e.vitaminaCMg],["Vit D","ug",e.vitaminaDIug],["Vit E","mg",e.vitaminaEMg],["Vit B6","mg",e.vitaminaB6Mg],["Vit B12","ug",e.vitaminaB12Iug],["Niacina","mg",e.niacinaMg],["Folico","ug",e.acidoFolicoIug]];if(!t.some(([,,n])=>n!=null&&n!==0))return"";const i=t.filter(([,,n])=>n!=null&&n!==0).map(([n,a,o])=>`${n}: ${o}${a}`);return h`<span class="micros-tooltip"><span class="macro">micros</span><span class="micros-tip">${i.join(" · ")}</span></span>`}render(){if(this._loading)return h`<p>Cargando recetas...</p>`;const e=this._filteredItems.length;return h`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <h2 style="margin:0">Recetas</h2>
        <button class="btn-primary" @click=${this._openCreate} style="font-size:0.8125rem;padding:0.5rem 1rem">+ Nueva receta</button>
      </div>

      ${this._error?h`<div class="error">${this._error}</div>`:""}

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

      ${this._items.length===0&&!this._error?h`<div class="empty-state"><p>No hay recetas. Crea una receta nueva con el boton "+ Nueva receta".</p></div>`:e===0?h`<div class="empty-state"><p>No se encontraron recetas con estos filtros.</p></div>`:h`
          <div class="grid">
            ${this._filteredItems.map(t=>{var r;return h`
              <div class="card">
                <div class="card-header">
                  <h3>${t.name}</h3>
                  ${t.difficulty?h`<span class="badge">${_d[t.difficulty]||t.difficulty}</span>`:""}
                </div>

                ${t.description?h`<div class="desc">${t.description}</div>`:""}
                ${t.instructions?h`<details class="instructions"><summary>Paso a paso</summary><div class="steps">${this._renderInstructions(t.instructions)}</div></details>`:""}

                <div class="meta">
                  ${t.timeMinutes?h`<span>⏱ ${t.timeMinutes} min</span>`:""}
                  ${t.servings?h`<span>🍽 ${t.servings} porc.</span>`:""}
                </div>

                <div class="macros">
                  ${t.calorias?h`<span class="kcal">${t.calorias} kcal</span>`:""}
                  ${this._macroBar(t.proteinas,999,"P")}
                  ${this._macroBar(t.carbos,999,"HC")}
                  ${this._macroBar(t.grasas,999,"G")}
                  ${this._microsTooltip(t)}
                </div>

                ${(r=t.ingredients)!=null&&r.length?h`
                  <details class="ingredients">
                    <summary>Ingredientes (${t.ingredients.length})</summary>
                    <ul>
                      ${t.ingredients.map(i=>{var n;return h`
                        <li>${i.quantity} ${i.unit==="UNIDAD"?"ud":i.unit} ${((n=i.food)==null?void 0:n.name)||"—"}</li>
                      `})}
                    </ul>
                  </details>
                `:""}

                <div class="actions">
                  ${t.familyId?h`
                    <button class="btn-edit" @click=${()=>this._openEdit(t)}>Editar</button>
                    <button class="btn-delete" @click=${()=>this._deleteRecipe(t.id,t.name)}>Eliminar</button>
                  `:h`
                    <span class="system-badge">Receta del sistema</span>
                  `}
                </div>
              </div>
            `})}
          </div>
        `}

      ${this._editRecipe?h`
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

              ${this._editIngredients.length===0?h`<p class="empty-ingredients">No hay ingredientes. Añade uno usando el campo de búsqueda.</p>`:h`
                  ${this._editIngredients.map((t,r)=>h`
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
                        ${wd.map(i=>h`<option value=${i}>${i}</option>`)}
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
                ${this._foodSearchResults.length>0?h`
                  <div class="food-results">
                    ${this._foodSearchResults.map(t=>h`
                      <div class="food-result-item" @click=${()=>this._addIngredient(t)}>
                        <span>${t.name}</span>
                        <span class="f-cat">${t.category??""}</span>
                      </div>
                    `)}
                  </div>
                `:""}
                ${!this._searching&&this._foodSearchQuery.length>=2&&this._foodSearchResults.length===0&&!this._showCreateFood?h`
                  <div class="food-results">
                    <div class="food-result-item create-food" @click=${this._openCreateFood}>
                      + Crear "${this._foodSearchQuery}" como nuevo alimento
                    </div>
                  </div>
                `:""}
                ${this._searching?h`<p style="font-size:0.75rem;color:var(--text-muted);margin:0.25rem 0 0">Buscando...</p>`:""}
              </div>

              ${this._showCreateFood?h`
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
    `}};X.styles=de`
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
  `;ee([b()],X.prototype,"_items",2);ee([b()],X.prototype,"_loading",2);ee([b()],X.prototype,"_error",2);ee([b()],X.prototype,"_editRecipe",2);ee([b()],X.prototype,"_isCreating",2);ee([b()],X.prototype,"_editForm",2);ee([b()],X.prototype,"_editIngredients",2);ee([b()],X.prototype,"_foodSearchQuery",2);ee([b()],X.prototype,"_foodSearchResults",2);ee([b()],X.prototype,"_searching",2);ee([b()],X.prototype,"_savingEdit",2);ee([b()],X.prototype,"_showCreateFood",2);ee([b()],X.prototype,"_createFoodForm",2);ee([b()],X.prototype,"_creatingFood",2);ee([b()],X.prototype,"_searchTerm",2);ee([b()],X.prototype,"_ingredientFilter",2);ee([b()],X.prototype,"_difficultyFilter",2);ee([b()],X.prototype,"_maxTimeFilter",2);ee([b()],X.prototype,"_totalCount",2);X=ee([Ce("recetas-view")],X);var xd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,ge=(e,t,r,i)=>{for(var n=i>1?void 0:i?$d(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&xd(t,r,n),n};function ji(e,t){const r=t??"g";if(r==="UNIDAD"){const i=Math.round(e*10)/10;return`${i} ${i===1?"unidad":"unidades"}`}return`${Math.round(e)}${r}`}const Ma={VERDURAS:0,FRUTAS:1,CARNES:2,PESCADOS:3,LACTEOS:4,HUEVOS:5,CEREALES:6,LEGUMBRES:7,FRUTOS_SECOS:8,ACEITES:9,CONDIMENTOS:10,BEBIDAS:11,OTROS:12},Id={VERDURAS:"Verduras",FRUTAS:"Frutas",CARNES:"Carnes",PESCADOS:"Pescados",LACTEOS:"Lácteos",HUEVOS:"Huevos",CEREALES:"Cereales",LEGUMBRES:"Legumbres",FRUTOS_SECOS:"Frutos secos",ACEITES:"Aceites",CONDIMENTOS:"Condimentos",BEBIDAS:"Bebidas",OTROS:"Otros"};let le=class extends he{constructor(){super(...arguments),this._items=[],this._loading=!0,this._generating=!1,this._error="",this._collapsed={},this._addingToPantry=!1,this._showConfirmAdd=!1,this._expiryDrafts={},this._sections=[],this._newItemName="",this._newItemQuantity=1,this._catalogResults=[],this._selectedCatalogItem=null,this._addingItem=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0;try{const e=await Ne.current();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch{this._items=[],this._sections=[]}finally{this._loading=!1}}async _generate(){this._generating=!0,this._error="";try{const e=await Ne.generate();this._items=(e==null?void 0:e.items)||[],this._sections=(e==null?void 0:e.sections)||[]}catch(e){this._error=e.message||"Error"}finally{this._generating=!1}}async _toggle(e){const t=this._items.findIndex(i=>i.id===e);if(t===-1)return;const r=this._items[t].purchased;this._items=this._items.map(i=>i.id===e?{...i,purchased:!i.purchased}:i);try{await Ne.toggleItem(e)}catch{this._items=this._items.map(i=>i.id===e?{...i,purchased:r}:i),this._error="Error al actualizar"}}_toggleCategory(e){this._collapsed={...this._collapsed,[e]:!this._collapsed[e]}}async _toggleCategoryItems(e){var a;const r=((a=this._getGroupedItems().find(([o])=>o===e))==null?void 0:a[1])||[];if(r.length===0)return;const n=!r.every(o=>o.purchased);this._items=this._items.map(o=>{var s;return((s=o.food)==null?void 0:s.category)===e?{...o,purchased:n}:o});try{for(const o of r)o.purchased!==n&&await Ne.toggleItem(o.id)}catch{await this._load(),this._error="Error al actualizar categoría"}}_allItemsChecked(){return this._items.length>0&&this._items.every(e=>e.purchased)}_categoryAllChecked(e){var i;const r=((i=this._getGroupedItems().find(([n])=>n===e))==null?void 0:i[1])||[];return r.length>0&&r.every(n=>n.purchased)}_toggleAll(){const e=this._allItemsChecked(),t=!e,r=this._items.map(i=>i.id);this._items=this._items.map(i=>({...i,purchased:t})),(async()=>{try{for(const i of r){const n=this._items.find(a=>a.id===i);n&&n.purchased!==e&&await Ne.toggleItem(i)}}catch{await this._load(),this._error="Error al actualizar"}})()}_getPurchasedItems(){return this._items.filter(e=>e.purchased&&e.toBuy>0)}async _addToPantry(){this._getPurchasedItems().length!==0&&(this._expiryDrafts={},this._showConfirmAdd=!0)}async _confirmAddToPantry(){var r;const e=this._getPurchasedItems();if(e.length===0)return;this._addingToPantry=!0,this._showConfirmAdd=!1;const t=new Date().toISOString().split("T")[0];try{for(const i of e)await He.add({foodId:i.foodId,quantity:i.toBuy,unit:((r=i.food)==null?void 0:r.unidadBase)||"g",expiryDate:this._expiryDrafts[i.id]||null,purchaseDate:t});this._items=this._items.map(i=>({...i,purchased:!1})),this._expiryDrafts={}}catch{this._error="Error al añadir a la nevera"}finally{this._addingToPantry=!1}}_getGroupedItems(){var t;const e=new Map;for(const r of this._items){const i=((t=r.food)==null?void 0:t.category)||"OTROS";e.has(i)||e.set(i,[]),e.get(i).push(r)}return Array.from(e.entries()).sort((r,i)=>(Ma[r[0]]??99)-(Ma[i[0]]??99))}async _searchHouseholdCatalog(e){const t=e.target.value;if(this._newItemName=t,this._selectedCatalogItem=null,t.length<2){this._catalogResults=[];return}try{this._catalogResults=await lt.items(t)}catch{this._catalogResults=[]}}_selectCatalogResult(e){this._selectedCatalogItem=e,this._newItemName=e.name,this._catalogResults=[]}async _addSectionItem(e){var t;if(e.preventDefault(),!!this._newItemName.trim()){this._addingItem=!0;try{let r=this._sections[0];r||(r=await Ne.createSection("Hogar y otros"));const i=await Ne.addSectionItem(r.id,{name:this._newItemName.trim(),quantity:Number(this._newItemQuantity)||1,householdItemId:(t=this._selectedCatalogItem)==null?void 0:t.id});this._sections.findIndex(a=>a.id===r.id)===-1?this._sections=[...this._sections,{...r,items:[i]}]:this._sections=this._sections.map(a=>a.id===r.id?{...a,items:[...a.items,i]}:a),this._newItemName="",this._newItemQuantity=1,this._selectedCatalogItem=null,this._catalogResults=[]}catch(r){this._error=r.message||"Error al añadir artículo"}finally{this._addingItem=!1}}}async _toggleSectionItem(e){const t=!e.purchased;this._sections=this._sections.map(r=>({...r,items:r.items.map(i=>i.id===e.id?{...i,purchased:t}:i)}));try{await Ne.toggleSectionItem(e.id,t)}catch{this._sections=this._sections.map(r=>({...r,items:r.items.map(i=>i.id===e.id?{...i,purchased:!t}:i)})),this._error="Error al actualizar artículo"}}async _removeSectionItem(e){try{await Ne.removeSectionItem(e.id),this._sections=this._sections.map(t=>({...t,items:t.items.filter(r=>r.id!==e.id)}))}catch{this._error="Error al eliminar artículo"}}render(){if(this._loading)return h`<p>Cargando lista...</p>`;const e=this._getGroupedItems(),t=this._getPurchasedItems().length;return h`
      <div class="top-bar">
        <div class="top-bar-left">
          <h2>Lista de la compra</h2>
          ${this._items.length>0?h`
            <button class="btn-outline btn-sm" @click=${this._toggleAll}>
              ${this._allItemsChecked()?"Desmarcar todo":"Marcar todo"}
            </button>
          `:""}
        </div>
        <button @click=${this._generate} ?disabled=${this._generating}>
          ${this._generating?"Generando...":"Generar lista"}
        </button>
      </div>
      ${this._error?h`<div class="error">${this._error}</div>`:""}
      ${this._items.length===0?h`<div class="empty-state"><p>La lista está vacía. Genera la lista desde el plan semanal.</p></div>`:e.map(([r,i])=>{const n=this._collapsed[r],a=this._categoryAllChecked(r);return h`
              <div class="category">
                <div class="category-header" @click=${()=>this._toggleCategory(r)}>
                  <span class="arrow ${n?"":"expanded"}">▶</span>
                  <span class="cat-check ${a?"checked":""}" @click=${o=>{o.stopPropagation(),this._toggleCategoryItems(r)}}>
                    ${a?"✓":""}
                  </span>
                  <span>${Id[r]||r}</span>
                  <span class="count">${i.length} ${i.length===1?"artículo":"artículos"}</span>
                </div>
                <div class="items ${n?"collapsed":""}">
                  ${i.map(o=>{var s;return h`
                    <div class="item ${o.purchased?"checked":""}" @click=${()=>this._toggle(o.id)}>
                      <div class="check">${o.purchased?"✓":""}</div>
                      <span class="item-name">${((s=o.food)==null?void 0:s.name)||"?"}</span>
                      <span class="item-qty">${ji(o.totalNeeded,o.unit)} ${o.toBuy?`(comprar: ${ji(o.toBuy,o.unit)})`:"(✔ en nevera)"}</span>
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
          ${this._sections.flatMap(r=>r.items).map(r=>h`
            <div class="item ${r.purchased?"checked":""}" @click=${()=>this._toggleSectionItem(r)}>
              <div class="check">${r.purchased?"✓":""}</div>
              <span class="item-name">${r.name}</span>
              <span class="item-qty">${r.quantity}</span>
              <button class="item-remove-btn" @click=${i=>{i.stopPropagation(),this._removeSectionItem(r)}} title="Eliminar">✕</button>
            </div>
          `)}
          <form class="add-item-row" @submit=${this._addSectionItem}>
            <div class="add-item-search">
              <input type="text" .value=${this._newItemName} @input=${this._searchHouseholdCatalog}
                placeholder="Añadir artículo (detergente, pilas...)" />
              ${this._catalogResults.length>0?h`
                <div class="search-results">
                  ${this._catalogResults.map(r=>h`
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

      ${this._items.length>0?h`
        <div class="bottom-bar">
          <span class="info">${t>0?`${t} artículo(s) marcado(s) para comprar`:"Marca artículos para añadir a la nevera"}</span>
          <button @click=${this._addToPantry} ?disabled=${t===0||this._addingToPantry}>
            ${this._addingToPantry?"Añadiendo...":"Añadir comprados a nevera"}
          </button>
        </div>
      `:""}

      ${this._showConfirmAdd?h`
        <div class="confirm-overlay" @click=${()=>{this._showConfirmAdd=!1}}>
          <div class="confirm-modal" @click=${r=>r.stopPropagation()}>
            <h3>Añadir a la nevera</h3>
            <p class="confirm-hint">Indica la caducidad de cada artículo (opcional). Cada uno entra como un lote propio.</p>
            <div class="confirm-list">
              ${this._getPurchasedItems().map(r=>{var i;return h`
                <div class="confirm-item">
                  <span class="confirm-name">${((i=r.food)==null?void 0:i.name)||"?"}</span>
                  <span class="qty">${ji(r.toBuy,r.unit)}</span>
                  <input
                    type="date"
                    class="confirm-date"
                    .value=${this._expiryDrafts[r.id]||""}
                    @input=${n=>{this._expiryDrafts={...this._expiryDrafts,[r.id]:n.target.value}}}
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
    `}};le.styles=de`
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
  `;ge([b()],le.prototype,"_items",2);ge([b()],le.prototype,"_loading",2);ge([b()],le.prototype,"_generating",2);ge([b()],le.prototype,"_error",2);ge([b()],le.prototype,"_collapsed",2);ge([b()],le.prototype,"_addingToPantry",2);ge([b()],le.prototype,"_showConfirmAdd",2);ge([b()],le.prototype,"_expiryDrafts",2);ge([b()],le.prototype,"_sections",2);ge([b()],le.prototype,"_newItemName",2);ge([b()],le.prototype,"_newItemQuantity",2);ge([b()],le.prototype,"_catalogResults",2);ge([b()],le.prototype,"_selectedCatalogItem",2);ge([b()],le.prototype,"_addingItem",2);le=ge([Ce("compra-view")],le);var kd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,ve=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ed(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&kd(t,r,n),n};const Sd={LIMPIEZA:"Limpieza",HIGIENE:"Higiene",PAPELERIA:"Papelería",COCINA_NO_ALIMENTO:"Cocina (no alimento)",OTROS:"Otros"};let ce=class extends he{constructor(){super(...arguments),this._items=[],this._loading=!0,this._error="",this._showAddForm=!1,this._editingItem=null,this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._adding=!1,this._showCreateCatalogItem=!1,this._newCategory=""}connectedCallback(){super.connectedCallback(),this._loadStock()}async _loadStock(){this._loading=!0,this._error="";try{this._items=await lt.stock()}catch(e){this._error=e.message||"Error al cargar el inventario del hogar"}finally{this._loading=!1}}async _searchCatalog(e){const t=e.target.value;if(this._searchQuery=t,this._selectedCatalogItem=null,t.length<2){this._searchResults=[];return}try{this._searchResults=await lt.items(t)}catch{this._searchResults=[]}}_selectCatalogItem(e){this._selectedCatalogItem=e,this._searchQuery=e.name,this._searchResults=[],this._unit=e.unit||"UNIDAD"}_openCreateCatalogItem(){this._showCreateCatalogItem=!0,this._newCategory=""}async _handleCreateCatalogItem(e){if(e.preventDefault(),!!this._searchQuery.trim())try{const t=await lt.createItem({name:this._searchQuery.trim(),category:this._newCategory||void 0,unit:this._unit});this._selectCatalogItem(t),this._showCreateCatalogItem=!1}catch(t){this._error=t.message||"Error al crear artículo"}}async _saveItem(e){if(e.preventDefault(),!(!this._selectedCatalogItem&&!this._editingItem)){this._adding=!0;try{this._editingItem?await lt.updateStock(this._editingItem.id,{quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):null}):await lt.addStock({householdItemId:this._selectedCatalogItem.id,quantity:Number(this._quantity),unit:this._unit,minThreshold:this._minThreshold?Number(this._minThreshold):void 0}),this._resetForm(),this._showAddForm=!1,await this._loadStock()}catch(t){this._error=t.message||"Error al guardar"}finally{this._adding=!1}}}async _removeItem(e){try{await lt.removeStock(e),this._items=this._items.filter(t=>t.id!==e)}catch{this._error="Error al eliminar artículo"}}_editItem(e){var t;this._editingItem=e,this._selectedCatalogItem=e.householdItem,this._searchQuery=((t=e.householdItem)==null?void 0:t.name)||"",this._quantity=e.quantity,this._unit=e.unit,this._minThreshold=e.minThreshold!=null?String(e.minThreshold):"",this._showAddForm=!0}_resetForm(){this._searchQuery="",this._searchResults=[],this._selectedCatalogItem=null,this._quantity=1,this._unit="UNIDAD",this._minThreshold="",this._editingItem=null,this._showCreateCatalogItem=!1}_toggleForm(){this._showAddForm=!this._showAddForm,this._showAddForm||this._resetForm()}render(){return this._loading?h`<p>Cargando inventario del hogar...</p>`:h`
      <div class="top-bar">
        <h2>Hogar</h2>
        <button @click=${this._toggleForm}>${this._showAddForm?"Cancelar":"Añadir artículo"}</button>
      </div>

      ${this._error?h`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?h`
        <div class="form-card">
          <h3>${this._editingItem?"Editar artículo":"Añadir al inventario"}</h3>
          <form @submit=${this._saveItem}>
            <div class="form-row">
              <label>Buscar artículo</label>
              <input type="text" .value=${this._searchQuery} @input=${this._searchCatalog}
                placeholder="Ej: detergente, lejía, papel higiénico..." ?disabled=${!!this._editingItem} />
              ${this._searchResults.length>0?h`
                <div class="search-results">
                  ${this._searchResults.map(e=>h`
                    <div class="search-result-item" @click=${()=>this._selectCatalogItem(e)}>${e.name}</div>
                  `)}
                </div>
              `:this._searchQuery.length>=2&&!this._selectedCatalogItem&&!this._showCreateCatalogItem?h`
                <div class="search-results">
                  <div class="search-result-item create-item" @click=${this._openCreateCatalogItem}>
                    + Crear "${this._searchQuery}" como nuevo artículo
                  </div>
                </div>
              `:""}
            </div>

            ${this._showCreateCatalogItem?h`
              <div class="create-item-card">
                <div class="form-row">
                  <label>Categoría</label>
                  <select .value=${this._newCategory} @change=${e=>{this._newCategory=e.target.value}}>
                    <option value="">-- Sin categoría --</option>
                    ${Object.entries(Sd).map(([e,t])=>h`<option value=${e}>${t}</option>`)}
                  </select>
                </div>
                <div class="form-actions">
                  <button type="button" @click=${this._handleCreateCatalogItem}>Crear artículo</button>
                  <button type="button" class="cancel" @click=${()=>{this._showCreateCatalogItem=!1}}>Cancelar</button>
                </div>
              </div>
            `:""}

            ${this._selectedCatalogItem||this._editingItem?h`
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

      ${this._items.length===0?h`<div class="empty-state"><p>Aún no has añadido nada al inventario del hogar (limpieza, higiene...).</p></div>`:h`
          <div class="list">
            ${this._items.map(e=>{var r;const t=e.minThreshold!=null&&e.quantity<e.minThreshold;return h`
                <div class="item ${t?"low":""}">
                  <div class="item-info">
                    <div class="item-name">${((r=e.householdItem)==null?void 0:r.name)||"?"}</div>
                    <div class="item-meta">
                      ${e.quantity} ${e.unit==="UNIDAD"?"ud":e.unit}
                      ${t?h` · <span class="low-label">queda poco</span>`:""}
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
    `}};ce.styles=de`
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
  `;ve([b()],ce.prototype,"_items",2);ve([b()],ce.prototype,"_loading",2);ve([b()],ce.prototype,"_error",2);ve([b()],ce.prototype,"_showAddForm",2);ve([b()],ce.prototype,"_editingItem",2);ve([b()],ce.prototype,"_searchQuery",2);ve([b()],ce.prototype,"_searchResults",2);ve([b()],ce.prototype,"_selectedCatalogItem",2);ve([b()],ce.prototype,"_quantity",2);ve([b()],ce.prototype,"_unit",2);ve([b()],ce.prototype,"_minThreshold",2);ve([b()],ce.prototype,"_adding",2);ve([b()],ce.prototype,"_showCreateCatalogItem",2);ve([b()],ce.prototype,"_newCategory",2);ce=ve([Ce("household-view")],ce);var Cd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Pe=(e,t,r,i)=>{for(var n=i>1?void 0:i?Md(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&Cd(t,r,n),n};const Ad={DIARIA:"Diaria",SEMANAL:"Semanal"};let Ie=class extends he{constructor(){super(...arguments),this._chores=[],this._members=[],this._loading=!0,this._error="",this._showAddForm=!1,this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._saving=!1,this._applyingTemplate=!1}connectedCallback(){super.connectedCallback(),this._load()}async _load(){this._loading=!0,this._error="";try{const[e,t]=await Promise.all([Ct.list(),Kr.list()]);this._chores=e,this._members=t}catch(e){this._error=e.message||"Error al cargar las tareas"}finally{this._loading=!1}}async _toggle(e){const t=!e.completedInPeriod;this._chores=this._chores.map(r=>r.id===e.id?{...r,completedInPeriod:t}:r);try{t?await Ct.complete(e.id):await Ct.uncomplete(e.id)}catch{this._chores=this._chores.map(r=>r.id===e.id?{...r,completedInPeriod:!t}:r),this._error="Error al actualizar la tarea"}}async _addChore(e){if(e.preventDefault(),!!this._newName.trim()){this._saving=!0;try{const t=await Ct.create({name:this._newName.trim(),frequency:this._newFrequency,assignedToMemberId:this._newMemberId||void 0});this._chores=[...this._chores,t],this._newName="",this._newFrequency="SEMANAL",this._newMemberId="",this._showAddForm=!1}catch(t){this._error=t.message||"Error al crear la tarea"}finally{this._saving=!1}}}async _applyStarterTemplate(){this._applyingTemplate=!0,this._error="";try{await Ct.applyTemplate("hogar-basico"),await this._load()}catch(e){this._error=e.message||"Error al cargar las tareas de ejemplo"}finally{this._applyingTemplate=!1}}async _removeChore(e){try{await Ct.remove(e),this._chores=this._chores.filter(t=>t.id!==e)}catch{this._error="Error al eliminar la tarea"}}_renderGroup(e){const t=this._chores.filter(r=>r.frequency===e);return t.length===0?"":h`
      <h3>${Ad[e]}</h3>
      <div class="list">
        ${t.map(r=>h`
          <div class="item ${r.completedInPeriod?"done":""}" @click=${()=>this._toggle(r)}>
            <div class="check">${r.completedInPeriod?"✓":""}</div>
            <span class="item-name">${r.name}</span>
            ${r.member?h`<span class="member-badge" style="background:${r.member.color}">${r.member.name}</span>`:""}
            <button class="item-remove" @click=${i=>{i.stopPropagation(),this._removeChore(r.id)}} title="Eliminar">✕</button>
          </div>
        `)}
      </div>
    `}render(){return this._loading?h`<p>Cargando tareas...</p>`:h`
      <div class="top-bar">
        <h2>Tareas del hogar</h2>
        <button @click=${()=>{this._showAddForm=!this._showAddForm}}>
          ${this._showAddForm?"Cancelar":"Añadir tarea"}
        </button>
      </div>

      ${this._error?h`<div class="error">${this._error}</div>`:""}

      ${this._showAddForm?h`
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
                ${this._members.map(e=>h`<option value=${e.id}>${e.name}</option>`)}
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

      ${this._chores.length===0?h`
            <div class="empty-state">
              <p>Aún no hay tareas del hogar. Añade la primera.</p>
              <button ?disabled=${this._applyingTemplate} @click=${this._applyStarterTemplate}>
                ${this._applyingTemplate?"Cargando...":"Cargar tareas de ejemplo"}
              </button>
            </div>
          `:h`${this._renderGroup("DIARIA")}${this._renderGroup("SEMANAL")}`}
    `}};Ie.styles=de`
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
  `;Pe([b()],Ie.prototype,"_chores",2);Pe([b()],Ie.prototype,"_members",2);Pe([b()],Ie.prototype,"_loading",2);Pe([b()],Ie.prototype,"_error",2);Pe([b()],Ie.prototype,"_showAddForm",2);Pe([b()],Ie.prototype,"_newName",2);Pe([b()],Ie.prototype,"_newFrequency",2);Pe([b()],Ie.prototype,"_newMemberId",2);Pe([b()],Ie.prototype,"_saving",2);Pe([b()],Ie.prototype,"_applyingTemplate",2);Ie=Pe([Ce("chores-view")],Ie);var Dd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Oe=(e,t,r,i)=>{for(var n=i>1?void 0:i?Td(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&Dd(t,r,n),n};let ke=class extends he{constructor(){super(...arguments),this._user=null,this._familyMembers=[],this._selectedMemberId="",this._loading=!0,this._saving=!1,this._error="",this._success="",this._form={name:"",age:0,weightKg:0,heightCm:0,sex:"MASCULINO",activityLevel:"MODERADO",goal:"MANTENER",restrictions:[]},this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0},this._backupBusy=!1}connectedCallback(){super.connectedCallback(),this._load()}get _selectedMember(){return this._familyMembers.find(e=>e.id===this._selectedMemberId)}async _load(){var e;try{const t=await Gt.me();this._user=t,this._familyMembers=((e=t.family)==null?void 0:e.members)||[],this._familyMembers.length>0&&(this._selectedMemberId=this._familyMembers[0].id,this._applyMember(this._familyMembers[0]))}catch{this._error="Error al cargar perfil"}finally{this._loading=!1}}_applyMember(e){this._form={name:e.name||"",age:e.age||0,weightKg:e.weightKg||0,heightCm:e.heightCm||0,sex:e.sex||"MASCULINO",activityLevel:e.activityLevel||"MODERADO",goal:e.goal||"MANTENER",restrictions:e.restrictions||[]},this._calculateMacros()}_selectMember(e){const t=e.target.value;this._selectedMemberId=t;const r=this._familyMembers.find(i=>i.id===t);r&&this._applyMember(r)}_handleInput(e){const t=e.target,r=t.name;if(r==="restrictions"){const i=t.value,n=t.checked;this._form={...this._form,restrictions:n?[...this._form.restrictions,i]:this._form.restrictions.filter(a=>a!==i)}}else r==="age"?this._form={...this._form,age:parseInt(t.value)||0}:["weightKg","heightCm"].includes(r)?this._form={...this._form,[r]:parseFloat(t.value)||0}:this._form={...this._form,[r]:t.value};this._calculateMacros()}async _save(){this._saving=!0,this._error="",this._success="";try{const e=await Kr.update(this._selectedMemberId,{name:this._form.name,age:this._form.age,weightKg:this._form.weightKg,heightCm:this._form.heightCm,sex:this._form.sex,activityLevel:this._form.activityLevel,goal:this._form.goal,restrictions:this._form.restrictions}),t=this._familyMembers.findIndex(r=>r.id===this._selectedMemberId);t>=0&&(this._familyMembers=[...this._familyMembers.slice(0,t),e,...this._familyMembers.slice(t+1)]),this._success="Perfil actualizado correctamente"}catch(e){this._error=e.message||"Error al guardar"}finally{this._saving=!1}}async _addMember(){const e=prompt("Nombre del nuevo miembro:");if(e)try{const t=await Kr.create({name:e});this._familyMembers=[...this._familyMembers,t],this._selectedMemberId=t.id,this._applyMember(t),this._success=`Miembro "${e}" añadido`}catch(t){this._error=t.message||"Error al añadir miembro"}}async _removeMember(e){var r;const t=this._familyMembers.find(i=>i.id===e);if(t&&confirm(`¿Eliminar a "${t.name}" de la familia?`))try{await Kr.remove(e),this._familyMembers=this._familyMembers.filter(i=>i.id!==e),this._selectedMemberId===e&&(this._selectedMemberId=((r=this._familyMembers[0])==null?void 0:r.id)||"",this._familyMembers[0]&&this._applyMember(this._familyMembers[0])),this._success=`"${t.name}" eliminado`}catch(i){this._error=i.message||"Error al eliminar miembro"}}_onLogout(){window.location.hash="#/login"}async _downloadBackup(){const e=await Jc(),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`mealprep-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(r)}async _handleExport(){this._error="",this._success="";try{await this._downloadBackup(),this._success="Backup descargado"}catch(e){this._error=e.message||"Error al exportar"}}async _handleImport(e){var i;const t=e.target,r=(i=t.files)==null?void 0:i[0];if(t.value="",!!r&&confirm("Importar reemplaza TODOS tus datos actuales por los del fichero. Se descargará antes una copia de seguridad del estado actual, por si acaso. ¿Continuar?")){this._backupBusy=!0,this._error="",this._success="";try{await this._downloadBackup();const n=await r.text(),{report:a,catalogVersionMismatch:o}=await Zc(n),s=[];o&&s.push("el catálogo del backup es de otra versión de la app"),a.totalDropped>0&&s.push(`se descartaron ${a.totalDropped} referencia(s) que ya no existían`),alert(`Importación completada.${s.length?" "+s.join("; ")+".":""}`),window.location.reload()}catch(n){this._error=n.message||"Error al importar",this._backupBusy=!1}}}async _handleReset(){if(confirm("Esto borra TODOS tus datos locales (nevera, recetas propias, plan, listas, tareas...) y empieza de cero. Se descargará antes una copia de seguridad. ¿Seguro?")){this._backupBusy=!0,this._error="";try{await this._downloadBackup(),await ed(),window.location.reload()}catch(e){this._error=e.message||"Error al reiniciar",this._backupBusy=!1}}}_calculateMacros(){const{age:e,weightKg:t,heightCm:r,sex:i,activityLevel:n,goal:a}=this._form;if(!e||!t||!r){this._liveMacros={tmb:0,dailyCalories:0,dailyProteinG:0,dailyCarbsG:0,dailyFatG:0};return}const o=Math.round(i==="FEMENINO"?10*t+6.25*r-5*e-161:10*t+6.25*r-5*e+5),s={SEDENTARIO:1.2,LIGERO:1.375,MODERADO:1.55,ACTIVO:1.725},l={PERDER_PESO:.8,MANTENER:1,GANAR_MUSCULO:1.15},c=Math.round(o*(s[n]||1.55)*(l[a]||1)),d=Math.round(t*(a==="PERDER_PESO"?2:a==="GANAR_MUSCULO"?2.2:1.6)),f=Math.round(c*.28/9),_=Math.round(Math.max(0,c-d*4-f*9)/4);this._liveMacros={tmb:o,dailyCalories:c,dailyProteinG:d,dailyCarbsG:_,dailyFatG:f}}render(){var t;if(this._loading)return h`<p>Cargando perfil...</p>`;const e=this._selectedMember;return h`
      <h2>Mi perfil</h2>
      ${this._error?h`<div class="error">${this._error}</div>`:""}
      ${this._success?h`<div class="success">${this._success}</div>`:""}

      <div class="member-bar">
        <select .value=${this._selectedMemberId} @change=${this._selectMember}>
          ${this._familyMembers.map(r=>h`
            <option value=${r.id}>${r.name}</option>
          `)}
        </select>
        <button @click=${this._addMember}>+ Añadir</button>
        ${this._familyMembers.length>1?h`
          <button class="btn-danger" @click=${()=>this._removeMember(this._selectedMemberId)}>Eliminar</button>
        `:""}
      </div>

      ${e!=null&&e.isStandardProfile?h`
        <div class="standard-notice">
          <strong>Datos estándar</strong>
          Estos valores son la referencia de una persona adulta de unos 70 kg, no los datos reales de
          ${e.name}. Corrígelos y guarda para ajustar el plan.
        </div>
      `:""}

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
              ${["vegetariano","vegano","sin gluten","sin lactosa","sin frutos secos","sin huevo","bajo en sodio","diabético"].map(r=>{const i=r.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ /g,"_");return h`
                  <label>
                    <input type="checkbox" name="restrictions" value=${i}
                      ?checked=${this._form.restrictions.includes(i)}
                      @change=${this._handleInput}>
                    ${r.charAt(0).toUpperCase()+r.slice(1)}
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

          ${h`
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
    `}};ke.styles=de`
    :host { display: block; }
    h2 { font-size: 1.25rem; margin-bottom: 1.5rem; }
    .member-bar { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .member-bar select { flex: 1; min-width: 180px; padding: 0.6rem 0.75rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.9rem; font-family: inherit; background: var(--bg); color: var(--text); }
    .member-bar button { padding: 0.5rem 1rem; border: 1px solid var(--border); border-radius: 8px; font-size: 0.85rem; font-weight: 600; font-family: inherit; cursor: pointer; background: var(--surface); color: var(--text); }
    .member-bar button:hover { background: #f1f5f9; }
    .standard-notice { background: #fffbeb; border: 1px solid #fcd34d; border-radius: 10px; padding: 0.75rem 1rem; margin-bottom: 1.5rem; font-size: 0.8125rem; color: #78350f; }
    .standard-notice strong { display: block; margin-bottom: 0.2rem; }
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
  `;Oe([b()],ke.prototype,"_user",2);Oe([b()],ke.prototype,"_familyMembers",2);Oe([b()],ke.prototype,"_selectedMemberId",2);Oe([b()],ke.prototype,"_loading",2);Oe([b()],ke.prototype,"_saving",2);Oe([b()],ke.prototype,"_error",2);Oe([b()],ke.prototype,"_success",2);Oe([b()],ke.prototype,"_form",2);Oe([b()],ke.prototype,"_liveMacros",2);Oe([b()],ke.prototype,"_backupBusy",2);ke=Oe([Ce("profile-page")],ke);var Pd=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,It=(e,t,r,i)=>{for(var n=i>1?void 0:i?Od(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&Pd(t,r,n),n};ls();ps();gs();let Ue=class extends he{constructor(){super(...arguments),this._page="loading",this._authed=!1,this._needsOnboarding=!1,this._menuOpen=!1,this._loginMessage="",this._globalError="",this._onHashChange=()=>{const e=window.location.hash.replace(/^#\//,"")||"plan";if(this._authed=Ea(),!this._authed){e==="register"?this._page="register":this._page="login";return}if(this._needsOnboarding&&e!=="onboarding"){window.location.hash="#/onboarding";return}switch(e){case"onboarding":this._page="onboarding";break;case"plan":this._page="plan";break;case"nevera":this._page="nevera";break;case"recetas":this._page="recetas";break;case"compra":this._page="compra";break;case"hogar":this._page="hogar";break;case"tareas":this._page="tareas";break;case"perfil":this._page="perfil";break;default:this._page="plan",window.location.hash="#/plan"}},this._goToRegister=e=>{e.preventDefault(),window.location.hash="#/register"},this._goToLogin=e=>{e.preventDefault(),window.location.hash="#/login"},this._onLogin=()=>{this._authed=!0,this._loginMessage="",this._checkOnboarding().then(()=>{this._needsOnboarding?window.location.hash="#/onboarding":window.location.hash="#/plan"})},this._onOnboardingComplete=()=>{this._needsOnboarding=!1,window.location.hash="#/plan"},this._onLogout=e=>{e.preventDefault(),this._authed=!1,this._loginMessage="",window.location.hash="#/login"},this._navigate=e=>{const t=e.currentTarget;t&&(window.location.hash=t.hash)}}connectedCallback(){super.connectedCallback(),this._authed=Ea(),this._init(),window.addEventListener("hashchange",this._onHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._onHashChange)}async _init(){this._authed?await this._checkOnboarding():(!window.location.hash||window.location.hash==="#/")&&(window.location.hash="#/login"),this._onHashChange()}async _checkOnboarding(){var e,t;try{const i=(t=(e=(await Gt.me()).family)==null?void 0:e.members)==null?void 0:t[0];this._needsOnboarding=!(i!=null&&i.dailyCalories),this._globalError=""}catch{this._globalError="No se pudo comprobar tu perfil. Vuelve a intentarlo en unos segundos."}}_renderPage(){switch(this._page){case"loading":return h`<div class="loading-screen"><p>Cargando...</p></div>`;case"login":return h`<login-page
          .message=${this._loginMessage}
          @register=${this._goToRegister}
          @login-success=${this._onLogin}
        ></login-page>`;case"register":return h`<register-page
          @login=${this._goToLogin}
          @register-success=${this._onLogin}
        ></register-page>`;case"onboarding":return h`<onboarding-page
          @onboarding-complete=${this._onOnboardingComplete}
        ></onboarding-page>`;case"plan":return h`<plan-view></plan-view>`;case"nevera":return h`<pantry-view></pantry-view>`;case"recetas":return h`<recetas-view></recetas-view>`;case"compra":return h`<compra-view></compra-view>`;case"hogar":return h`<household-view></household-view>`;case"tareas":return h`<chores-view></chores-view>`;case"perfil":return h`<profile-page></profile-page>`;default:return h`<p>Página no encontrada</p>`}}_isActive(e){return this._page===e?"active":""}render(){if(this._page==="loading"||this._page==="login"||this._page==="register"||this._page==="onboarding")return h`
        <div class="app-shell">
          ${this._renderPage()}
        </div>
      `;const e=()=>{this._menuOpen=!1};return h`
      <div class="app-shell">
        <div class="overlay ${this._menuOpen?"open":""}" @click=${e}></div>
        <header>
          <a class="brand-link" href="#/plan" @click=${this._navigate} aria-label="Etxa, ir al plan">
            <etxa-logo></etxa-logo>
          </a>
          <button class="hamburger" aria-label=${this._menuOpen?"Cerrar menú":"Abrir menú"} aria-expanded=${this._menuOpen?"true":"false"} @click=${()=>{this._menuOpen=!this._menuOpen}}>
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
          ${this._globalError?h`<div class="global-banner">${this._globalError}</div>`:""}
          ${this._renderPage()}
        </main>
      </div>
    `}};Ue.styles=[ss,us,Na,hs,de`
    :host {
      display: block;
      min-height: 100dvh;
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

    .brand-link {
      display: inline-flex;
      align-items: center;
      min-height: var(--etxa-touch-target);
      border-radius: var(--etxa-radius-sm);
      cursor: pointer;
    }

    .brand-link etxa-logo { pointer-events: none; }

    .hamburger {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text);
      min-width: var(--etxa-touch-target);
      min-height: var(--etxa-touch-target);
      place-items: center;
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
      min-height: var(--etxa-touch-target);
      display: inline-flex;
      align-items: center;
      border-radius: var(--etxa-radius-sm);
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
      background: color-mix(in srgb, var(--primary), transparent 92%);
      color: var(--primary);
    }

    nav a.active {
      color: var(--primary);
      background: color-mix(in srgb, var(--primary), transparent 88%);
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
      .hamburger { display: grid; }
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
  `];It([b()],Ue.prototype,"_page",2);It([b()],Ue.prototype,"_authed",2);It([b()],Ue.prototype,"_needsOnboarding",2);It([b()],Ue.prototype,"_menuOpen",2);It([b()],Ue.prototype,"_loginMessage",2);It([b()],Ue.prototype,"_globalError",2);Ue=It([Ce("mpp-app")],Ue);export{Ka as R,H as n,m as s};
