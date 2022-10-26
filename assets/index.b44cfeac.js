var Zh=Object.defineProperty;var u=(s,e)=>Zh(s,"name",{value:e,configurable:!0});u(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}u(t,"getFetchOpts");function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}u(n,"processPreload")},"polyfill")();const Oa="on:";class Oc{constructor(e,t){this.componentContext=t;const r=new DOMParser().parseFromString(e,"text/html").querySelector("body");if(this.parsedFragment=document.createDocumentFragment(),r)for(const o of[...r.children])this.parsedFragment.appendChild(o)}processEventListeners(){const e=this.getRootElements(),t=u(n=>{for(const i of n.getAttributeNames())if(i.startsWith(Oa)){const r=i.substring(Oa.length),o=n.getAttribute(i);if(!o)continue;n.addEventListener(r,new Function(`return ${o}`).apply(this.componentContext).bind(this.componentContext))}for(const i of n.children)t(i)},"addEventListenersToNodes");e.forEach(t)}getRootElements(){return[...this.parsedFragment.children]}}u(Oc,"HTMLParser");const ia=u(s=>s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),"camelCaseToKebabCase"),Qh=u(s=>ia(s).substring(1),"pascalCaseToKebabCase"),ed=u((s,e)=>{const t=Object.getOwnPropertyNames(e),n=Object.values(e);return new Function(...t,`return \`${s}\`;`).apply(e,...n)},"evaluateStringTemplate");class qi extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"}),setTimeout(()=>this.lazyConstructor())}lazyConstructor(){var t;const e=ed(this.template,this);this.htmlParser=new Oc(e,this),this.styles&&this.processStyles(),this.template&&this.shadowDOM.append(...this.processTemplate()),(t=this.onInit)==null||t.call(this)}processStyles(){const e=new CSSStyleSheet;e.replaceSync(this.styles),this.shadowDOM.adoptedStyleSheets=[e]}processTemplate(){return this.htmlParser.processEventListeners(),this.htmlParser.getRootElements()}getElement(e){return this.shadowDOM.querySelector(`*[\\:${e}]`)}}u(qi,"Component");const Is=u(s=>e=>{Reflect.defineProperty(e.prototype,"template",{value:s})},"template"),Sr=u(s=>e=>{Reflect.defineProperty(e.prototype,"styles",{value:s})},"styles"),td=u(s=>(e,t)=>{const n=s!=null?s:ia(t.toString()),i={get(){return this.getAttribute(n)},set(r){this.setAttribute(n,r)}};return t!==void 0?nd(e,t,i):id(e,i)},"property"),nd=u((s,e,t)=>{Reflect.defineProperty(s,e,t)},"legacyProperty"),id=u((s,e)=>({kind:"field",key:s==null?void 0:s.key,placement:"own",descriptor:e}),"currentProperty"),Os=u(s=>{const e=Qh(s.name);customElements.define(`mp-${e}`,s)},"registerComponent"),sd=`<header :continentHeader class="continent-header">
  <nav>
    <button class="arrow-back-icon" title="Go back" on:click="this.onBackClick">
      <span class="bar top"></span>
      <span class="bar mid"></span>
      <span class="bar bottom"></span>
    </button>
  </nav>
  <h1 class="continent-title"><slot></slot></h1>
</header>
`,rd=`.continent-header {
  padding: 2.5rem 0;
  transition: margin-top 0.5s;
}

.continent-title {
  font-size: 3.5rem;
  margin: 0;
}

/* Back Icon */

.arrow-back-icon {
  all: unset;
  position: relative;
  height: 2rem;
  width: 3.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.arrow-back-icon .bar {
  position: absolute;
  top: calc(50% - 0.125rem);
  left: 0;
  background: var(--primary);
  border-radius: 0.25rem;
  transform-origin: 0.125rem center;
}

.arrow-back-icon .bar.bottom {
  transform: rotateZ(45deg);
  width: 1rem;
  height: 0.25rem;
}

.arrow-back-icon .bar.mid {
  width: 3rem;
  height: 0.25rem;
}

.arrow-back-icon .bar.top {
  transform: rotateZ(-45deg);
  width: 1rem;
  height: 0.25rem;
}

/* Mobile */
@media screen and (max-width: 768px) {
  .continent-header {
    padding: 1.5rem 0;
  }

  .continent-title {
    font-size: 2.5rem;
    margin: 0;
  }
}
`;var od=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,ld=u((s,e,t,n)=>{for(var i=n>1?void 0:n?ad(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&od(e,t,i),i},"__decorateClass$4");let Lo=u(class extends qi{onBackClick(s){var e;s.stopPropagation(),window.planet.resetControls(),(e=document.querySelector("mp-continent-info[open]"))==null||e.removeAttribute("open")}},"ContinentHeader");Lo=ld([Is(sd),Sr(rd)],Lo);Os(Lo);const cd=`<slot></slot>
`;var ud=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,dd=u((s,e,t,n)=>{for(var i=n>1?void 0:n?hd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ud(e,t,i),i},"__decorateClass$3");let Ro=u(class extends qi{},"ContinentBody");Ro=dd([Is(cd)],Ro);Os(Ro);const fd=`<article
  :continent
  class="continent"
  on:wheel="this.onWrapperMouseWheel"
  on:scroll="this.onWrapperScroll"
  on:click="this.onWrapperClick"
  on:touchstart="this.onWrapperTouchStart"
  on:touchend="this.onWrapperTouchEnd"
>
  <slot name="continent-header">Placeholder Continent Header</slot>
  <div
    :continentBody
    class="continent-body"
    on:wheel="this.onBodyMouseWheel"
    on:scroll="this.onBodyScroll"
  >
    <div class="continent-body-inner">
      <slot name="continent-body"></slot>
    </div>
  </div>
</article>
`,pd=`:host {
  --continent-vertical-spacing: 35vh;
  --continent-open-close-duration: 1s;
  --continent-scroll-duration: 0.5s;
}

.continent {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 40%;
  top: 0;
  bottom: 0;
  left: 0;
  color: var(--primary);
  padding-top: var(--continent-vertical-spacing);
  padding-left: 4rem;
  padding-right: 4rem;
  overflow: auto;

  /* Open/Close Animation */
  visibility: hidden;
  transform: translateY(15rem);
  opacity: 0;
  transition: all var(--continent-open-close-duration),
    padding-top var(--continent-scroll-duration);

  /* Hide Scrollbar */
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

:host([open]) .continent {
  /* Open/Close Animation */
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
}

.continent-body {
  font-size: 1.25rem;
  padding-bottom: var(--continent-vertical-spacing);
  direction: rtl;
  -webkit-mask-image: linear-gradient(to top, transparent, #000000 10%);
  overflow: hidden;

  /* Scrollbar Styles */
  /* Firefox has 0.5rem width of scroll for \`thin\`. */
  scrollbar-width: thin;
  scrollbar-color: var(--primary) transparent;
}

.continent-body > .continent-body-inner {
  direction: ltr;
}

/* Handling Scroll */

.continent.continent-active {
  overflow: hidden;
  padding-top: 0;
}

.continent.continent-active > .continent-body.has-scroll {
  overflow: auto;

  /* Scrollbar */
  /* 0.5rem left for the width of scrollbar. */
  padding-left: 1.5rem;
  margin-left: -2rem;
}

/* Scrollbar Styles */

.continent::-webkit-scrollbar {
  display: none;
}

.continent-body::-webkit-scrollbar {
  width: 0.5rem;
}

.continent-body::-webkit-scrollbar-track {
  background: transparent;
}

.continent-body::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 1rem;
}

.continent-body::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dim);
}

.continent-body::-webkit-scrollbar-track-piece:end {
  background: transparent;
  margin-bottom: 10rem;
}

.continent-body::-webkit-scrollbar-track-piece:start {
  background: transparent;
  margin-top: 10rem;
}

/* Tablet */
@media screen and (max-width: 992px) {
  .continent-body::-webkit-scrollbar-track-piece:end {
    margin-bottom: 0;
  }

  .continent-body::-webkit-scrollbar-track-piece:start {
    margin-top: 0;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  :host {
    --continent-vertical-spacing: 5rem;
  }

  .continent {
    width: unset;
    top: 0;
    bottom: 42%;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .continent-body {
    font-size: 1rem;
  }
}
`;var md=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,_d=u((s,e,t,n)=>{for(var i=n>1?void 0:n?gd(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&md(e,t,i),i},"__decorateClass$2");let Po=u(class extends qi{constructor(){super(...arguments),this.continentActive=!1,this.touchStartY=0}onInit(){this.continent=this.getElement("continent"),this.continentBody=this.getElement("continentBody")}static get observedAttributes(){return["open"]}attributeChangedCallback(s,e,t){if(s!=="open")return;if(t!==null){const{scrollHeight:i,offsetHeight:r}=this.continentBody;i>r&&this.continentBody.classList.add("has-scroll")}else this.deactivateContinent()}onWrapperMouseWheel(s){s.preventDefault(),this.isScrollDown(s)&&this.activateContinent()}onBodyMouseWheel(s){this.continentActive&&s.stopPropagation(),this.continentBody.scrollTop===0&&this.isScrollUp(s)&&this.deactivateContinent()}onWrapperScroll(){this.activateContinent()}onBodyScroll(s){this.continentActive&&s.stopPropagation(),this.continentBody.scrollTop===0&&this.deactivateContinent()}onWrapperClick(){this.continentActive||this.activateContinent()}onWrapperTouchStart(s){this.touchStartY=s.changedTouches[0].clientY}onWrapperTouchEnd(s){if(this.continentActive)return;s.changedTouches[0].clientY<this.touchStartY&&this.activateContinent()}isScrollUp(s){return s.deltaY<0}isScrollDown(s){return s.deltaY>0}activateContinent(){this.continent.classList.add("continent-active"),this.continentBody.scrollTop=1,this.continentActive=!0}deactivateContinent(){this.continent.classList.remove("continent-active"),this.continentActive=!1}},"ContinentInfo");Po=_d([Is(fd),Sr(pd)],Po);Os(Po);const vd="modulepreload",xd=u(function(s,e){return new URL(s,e).href},"assetsURL"),Na={},yd=u(function(e,t,n){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=xd(i,n),i in Na)return;Na[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":vd,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},"preload"),bd=u((s,e)=>{const t=s[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})},"__variableDynamicImportRuntimeHelper"),Md=`<button :continentPinButton class="continent-icon">
  <!-- Icon is dynamically loaded here. -->
  <span class="continent-icon-label">\${this.label}</span>
</button>
`,Sd="";var wd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Nc=u((s,e,t,n)=>{for(var i=n>1?void 0:n?Td(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&wd(e,t,i),i},"__decorateClass$1");let gr=u(class extends qi{onInit(){this.loadIcon()}async loadIcon(){var t;const s=ia(this.name),e=(await bd(Object.assign({"../../../assets/icons/projects-continent.svg":()=>yd(()=>import("./projects-continent.2d382e5e.js"),[],import.meta.url)}),`../../../assets/icons/${s}.svg`)).default;(t=this.getElement("continentPinButton"))==null||t.insertAdjacentHTML("afterbegin",e)}},"ContinentPin");Nc([td()],gr.prototype,"name",2);gr=Nc([Is(Md),Sr(Sd)],gr);Os(gr);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="144",Ed=0,Fa=1,Ad=2,Fc=1,Cd=2,hs=3,si=0,zt=1,nn=2,In=0,Oi=1,Ua=2,za=3,ka=4,Ld=5,Ai=100,Rd=101,Pd=102,Ba=103,Ha=104,Dd=200,Id=201,Od=202,Nd=203,Uc=204,zc=205,Fd=206,Ud=207,zd=208,kd=209,Bd=210,Hd=0,Vd=1,Gd=2,Do=3,Wd=4,jd=5,Xd=6,qd=7,ra=0,Yd=1,Kd=2,_n=0,$d=1,Jd=2,Zd=3,Qd=4,ef=5,kc=300,zi=301,ki=302,Io=303,Oo=304,wr=306,Bi=1e3,Ut=1001,_r=1002,mt=1003,No=1004,Fo=1005,At=1006,Bc=1007,Yi=1008,ri=1009,tf=1010,nf=1011,Hc=1012,sf=1013,ei=1014,Pn=1015,ws=1016,rf=1017,of=1018,Ni=1020,af=1021,lf=1022,Xt=1023,cf=1024,uf=1025,ni=1026,Hi=1027,hf=1028,df=1029,ff=1030,pf=1031,mf=1033,jr=33776,Xr=33777,qr=33778,Yr=33779,Va=35840,Ga=35841,Wa=35842,ja=35843,gf=36196,Xa=37492,qa=37496,Ya=37808,Ka=37809,$a=37810,Ja=37811,Za=37812,Qa=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,ll=36492,Ts=2300,Vi=2301,Kr=2302,cl=2400,ul=2401,hl=2402,_f=2500,vf=1,Vc=2,oi=3e3,je=3001,xf=3200,yf=3201,Tr=0,bf=1,mn="srgb",ti="srgb-linear",$r=7680,Mf=519,Uo=35044,dl="300 es",zo=1035;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}u(Bn,"EventDispatcher");const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const gs=Math.PI/180,Es=180/Math.PI;function kt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}u(kt,"generateUUID");function gt(s,e,t){return Math.max(e,Math.min(t,s))}u(gt,"clamp");function oa(s,e){return(s%e+e)%e}u(oa,"euclideanModulo");function Sf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}u(Sf,"mapLinear");function wf(s,e,t){return s!==e?(t-s)/(e-s):0}u(wf,"inverseLerp");function _s(s,e,t){return(1-t)*s+t*e}u(_s,"lerp");function Tf(s,e,t,n){return _s(s,e,1-Math.exp(-t*n))}u(Tf,"damp");function Ef(s,e=1){return e-Math.abs(oa(s,e*2)-e)}u(Ef,"pingpong");function Af(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}u(Af,"smoothstep");function Cf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}u(Cf,"smootherstep");function Lf(s,e){return s+Math.floor(Math.random()*(e-s+1))}u(Lf,"randInt");function Rf(s,e){return s+Math.random()*(e-s)}u(Rf,"randFloat");function Pf(s){return s*(.5-Math.random())}u(Pf,"randFloatSpread");function Df(s){s!==void 0&&(fl=s);let e=fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(Df,"seededRandom");function If(s){return s*gs}u(If,"degToRad");function Of(s){return s*Es}u(Of,"radToDeg");function ko(s){return(s&s-1)===0&&s!==0}u(ko,"isPowerOfTwo");function Gc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}u(Gc,"ceilPowerOfTwo");function vr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}u(vr,"floorPowerOfTwo");function Nf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(Nf,"setQuaternionFromProperEuler");function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}u(gn,"denormalize");function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}u($e,"normalize");var sn=Object.freeze({__proto__:null,DEG2RAD:gs,RAD2DEG:Es,generateUUID:kt,clamp:gt,euclideanModulo:oa,mapLinear:Sf,inverseLerp:wf,lerp:_s,damp:Tf,pingpong:Ef,smoothstep:Af,smootherstep:Cf,randInt:Lf,randFloat:Rf,randFloatSpread:Pf,seededRandom:Df,degToRad:If,radToDeg:Of,isPowerOfTwo:ko,ceilPowerOfTwo:Gc,floorPowerOfTwo:vr,setQuaternionFromProperEuler:Nf,normalize:$e,denormalize:gn});class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}u(se,"Vector2");class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=i[0],p=i[3],v=i[6],M=i[1],w=i[4],y=i[7],T=i[2],L=i[5],I=i[8];return r[0]=o*g+a*M+l*T,r[3]=o*p+a*w+l*L,r[6]=o*v+a*y+l*I,r[1]=c*g+h*M+d*T,r[4]=c*p+h*w+d*L,r[7]=c*v+h*y+d*I,r[2]=f*g+m*M+_*T,r[5]=f*p+m*w+_*L,r[8]=f*v+m*y+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}u(It,"Matrix3");function Wc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}u(Wc,"arrayNeedsUint32");function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}u(As,"createElementNS");function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}u(ii,"SRGBToLinear");function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}u(pr,"LinearToSRGB");const Jr={[mn]:{[ti]:ii},[ti]:{[mn]:pr}},Vt={legacyMode:!0,get workingColorSpace(){return ti},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Jr[e]&&Jr[e][t]!==void 0){const n=Jr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},Gt={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Zr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}u(Zr,"hue2rgb");function Bs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}u(Bs,"toComponents");class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ti){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ti){if(e=oa(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zr(o,r,e+1/3),this.g=Zr(o,r,e),this.b=Zr(o,r,e-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(e,t=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Vt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Vt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Vt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Vt.fromWorkingColorSpace(Bs(this,ct),e),gt(ct.r*255,0,255)<<16^gt(ct.g*255,0,255)<<8^gt(ct.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ti){Vt.fromWorkingColorSpace(Bs(this,ct),t);const n=ct.r,i=ct.g,r=ct.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ti){return Vt.fromWorkingColorSpace(Bs(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=mn){return Vt.fromWorkingColorSpace(Bs(this,ct),e),e!==mn?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(ks);const n=_s(Gt.h,ks.h,t),i=_s(Gt.s,ks.s,t),r=_s(Gt.l,ks.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}u(Ae,"Color$1");Ae.NAMES=jc;let fi;class aa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=As("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}u(aa,"ImageUtils");class la{constructor(e=null){this.isSource=!0,this.uuid=kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Qr(i[o].image)):r.push(Qr(i[o]))}else r=Qr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}u(la,"Source");function Qr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}u(Qr,"serializeImage");let Ff=0;class _t extends Bn{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Ut,i=Ut,r=At,o=Yi,a=Xt,l=ri,c=1,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=kt(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}u(_t,"Texture");_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=kc;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(m+1)/2,T=(v+1)/2,L=(h+f)/4,I=(d+g)/4,x=(_+p)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=L/n,r=I/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=L/i,r=x/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=I/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}u(Ke,"Vector4");class Nn extends Bn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new _t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:At,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new la(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}u(Nn,"WebGLRenderTarget");class ca extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}u(ca,"DataArrayTexture");class Xc extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}u(Xc,"Data3DTexture");class pt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||c!==m||h!==_){let p=1-a;const v=l*f+c*m+h*_+d*g,M=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const T=Math.sqrt(w),L=Math.atan2(T,v*M);p=Math.sin(p*L)/T,a=Math.sin(a*L)/T}const y=a*M;if(l=l*p+f*y,c=c*p+m*y,h=h*p+_*y,d=d*p+g*y,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*m-c*f,e[t+1]=l*_+h*f+c*d-a*m,e[t+2]=c*_+h*m+a*f-l*d,e[t+3]=h*_-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}u(pt,"Quaternion");class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,d=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+h*-a-d*-o,this.y=h*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}u(A,"Vector3");const eo=new A,pl=new pt;class Hn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],f=e[l+2];h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>r&&(r=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),f=e.getZ(l);h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>r&&(r=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Yn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox),to.applyMatrix4(e.matrixWorld),this.union(to);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Hs.subVectors(this.max,is),pi.subVectors(e.a,is),mi.subVectors(e.b,is),gi.subVectors(e.c,is),yn.subVectors(mi,pi),bn.subVectors(gi,mi),Kn.subVectors(pi,gi);let t=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-Kn.z,Kn.y,yn.z,0,-yn.x,bn.z,0,-bn.x,Kn.z,0,-Kn.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-Kn.y,Kn.x,0];return!no(t,pi,mi,gi,Hs)||(t=[1,0,0,0,1,0,0,0,1],!no(t,pi,mi,gi,Hs))?!1:(Vs.crossVectors(yn,bn),t=[Vs.x,Vs.y,Vs.z],no(t,pi,mi,gi,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}u(Hn,"Box3");const ln=[new A,new A,new A,new A,new A,new A,new A,new A],Yn=new A,to=new Hn,pi=new A,mi=new A,gi=new A,yn=new A,bn=new A,Kn=new A,is=new A,Hs=new A,Vs=new A,$n=new A;function no(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$n.fromArray(s,r);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(no,"satForAxes");const Uf=new Hn,ml=new A,Gs=new A,io=new A;class Vn{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(io.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Gs.set(0,0,1).multiplyScalar(e.radius):Gs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ml.copy(e.center).add(Gs)),this.expandByPoint(ml.copy(e.center).sub(Gs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}u(Vn,"Sphere");const cn=new A,so=new A,Ws=new A,Mn=new A,ro=new A,js=new A,oo=new A;class Ki{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.direction).multiplyScalar(t).add(this.origin),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(so);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=Mn.dot(this.direction),l=-Mn.dot(Ws),c=Mn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Ws).multiplyScalar(f).add(so),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,i,r){ro.subVectors(t,e),js.subVectors(n,e),oo.crossVectors(ro,js);let o=this.direction.dot(oo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(Mn,js));if(l<0)return null;const c=a*this.direction.dot(ro.cross(Mn));if(c<0||l+c>o)return null;const h=-a*Mn.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}u(Ki,"Ray");class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,h,d,f,m,_,g,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=f,v[3]=m,v[7]=_,v[11]=g,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*d,_=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,_=c*h,g=c*d;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,_=c*h,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,_=a*h,g=a*d;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+g,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zf,e,kf)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Sn.crossVectors(n,Pt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Sn.crossVectors(n,Pt)),Sn.normalize(),Xs.crossVectors(Pt,Sn),i[0]=Sn.x,i[4]=Xs.x,i[8]=Pt.x,i[1]=Sn.y,i[5]=Xs.y,i[9]=Pt.y,i[2]=Sn.z,i[6]=Xs.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],v=n[14],M=n[3],w=n[7],y=n[11],T=n[15],L=i[0],I=i[4],x=i[8],C=i[12],O=i[1],R=i[5],V=i[9],D=i[13],P=i[2],B=i[6],G=i[10],te=i[14],W=i[3],F=i[7],z=i[11],ie=i[15];return r[0]=o*L+a*O+l*P+c*W,r[4]=o*I+a*R+l*B+c*F,r[8]=o*x+a*V+l*G+c*z,r[12]=o*C+a*D+l*te+c*ie,r[1]=h*L+d*O+f*P+m*W,r[5]=h*I+d*R+f*B+m*F,r[9]=h*x+d*V+f*G+m*z,r[13]=h*C+d*D+f*te+m*ie,r[2]=_*L+g*O+p*P+v*W,r[6]=_*I+g*R+p*B+v*F,r[10]=_*x+g*V+p*G+v*z,r[14]=_*C+g*D+p*te+v*ie,r[3]=M*L+w*O+y*P+T*W,r[7]=M*I+w*R+y*B+T*F,r[11]=M*x+w*V+y*G+T*z,r[15]=M*C+w*D+y*te+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],v=e[15];return _*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*m-n*l*m)+g*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+v*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],v=e[15],M=d*p*c-g*f*c+g*l*m-a*p*m-d*l*v+a*f*v,w=_*f*c-h*p*c-_*l*m+o*p*m+h*l*v-o*f*v,y=h*g*c-_*d*c+_*a*m-o*g*m-h*a*v+o*d*v,T=_*d*l-h*g*l-_*a*f+o*g*f+h*a*p-o*d*p,L=t*M+n*w+i*y+r*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=M*I,e[1]=(g*f*r-d*p*r-g*i*m+n*p*m+d*i*v-n*f*v)*I,e[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*v+n*l*v)*I,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*m-n*l*m)*I,e[4]=w*I,e[5]=(h*p*r-_*f*r+_*i*m-t*p*m-h*i*v+t*f*v)*I,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*v-t*l*v)*I,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*m+t*l*m)*I,e[8]=y*I,e[9]=(_*d*r-h*g*r-_*n*m+t*g*m+h*n*v-t*d*v)*I,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*v+t*a*v)*I,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*I,e[12]=T*I,e[13]=(h*g*i-_*d*i+_*n*f-t*g*f-h*n*p+t*d*p)*I,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*I,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,_=r*d,g=o*h,p=o*d,v=a*d,M=l*c,w=l*h,y=l*d,T=n.x,L=n.y,I=n.z;return i[0]=(1-(g+v))*T,i[1]=(m+y)*T,i[2]=(_-w)*T,i[3]=0,i[4]=(m-y)*L,i[5]=(1-(f+v))*L,i[6]=(p+M)*L,i[7]=0,i[8]=(_+w)*I,i[9]=(p-M)*I,i[10]=(1-(f+g))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=_i.set(i[0],i[1],i[2]).length();const o=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/r,h=1/o,d=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*c,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}u(ke,"Matrix4");const _i=new A,Wt=new ke,zf=new A(0,0,0),kf=new A(1,1,1),Sn=new A,Xs=new A,Pt=new A,gl=new ke,_l=new pt;class $i{constructor(e=0,t=0,n=0,i=$i.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}u($i,"Euler");$i.DefaultOrder="XYZ";$i.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Er{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}u(Er,"Layers");let Bf=0;const vl=new A,vi=new pt,un=new ke,qs=new A,ss=new A,Hf=new A,Vf=new pt,xl=new A(1,0,0),yl=new A(0,1,0),bl=new A(0,0,1),Gf={type:"added"},Ml={type:"removed"};class Qe extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new A,t=new $i,n=new pt,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}u(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new It}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DefaultMatrixWorldAutoUpdate,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(ss,qs,this.up):un.lookAt(qs,ss,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(un),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ml)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ml)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}u(Qe,"Object3D");Qe.DefaultUp=new A(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;Qe.DefaultMatrixWorldAutoUpdate=!0;const jt=new A,hn=new A,ao=new A,dn=new A,xi=new A,yi=new A,Sl=new A,lo=new A,co=new A,uo=new A;class tn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),hn.subVectors(n,t),ao.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(hn),l=jt.dot(ao),c=hn.dot(hn),h=hn.dot(ao),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,dn),l.set(0,0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),hn.subVectors(e,t),jt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),jt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return tn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;xi.subVectors(i,n),yi.subVectors(r,n),lo.subVectors(e,n);const l=xi.dot(lo),c=yi.dot(lo);if(l<=0&&c<=0)return t.copy(n);co.subVectors(e,i);const h=xi.dot(co),d=yi.dot(co);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(xi,o);uo.subVectors(e,r);const m=xi.dot(uo),_=yi.dot(uo);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(yi,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Sl.subVectors(r,i),a=(d-h)/(d-h+(m-_)),t.copy(i).addScaledVector(Sl,a);const v=1/(p+g+f);return o=g*v,a=f*v,t.copy(n).addScaledVector(xi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}u(tn,"Triangle");let Wf=0;class Bt extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=kt(),this.name="",this.type="Material",this.blending=Oi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uc,this.blendDst=zc,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}u(Bt,"Material");class Dn extends Bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}u(Dn,"MeshBasicMaterial");const lt=new A,Ys=new se;class Ct{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Uo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}u(Ct,"BufferAttribute");class ua extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}u(ua,"Uint16BufferAttribute");class ha extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}u(ha,"Uint32BufferAttribute");class ut extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}u(ut,"Float32BufferAttribute");let jf=0;const Ft=new ke,ho=new Qe,bi=new A,Dt=new Hn,rs=new Hn,dt=new A;class Et extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)?ha:ua)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Dt.min,rs.min),Dt.expandByPoint(dt),dt.addVectors(Dt.max,rs.max),Dt.expandByPoint(dt)):(Dt.expandByPoint(rs.min),Dt.expandByPoint(rs.max))}Dt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dt.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(e,c),dt.add(bi)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let O=0;O<a;O++)c[O]=new A,h[O]=new A;const d=new A,f=new A,m=new A,_=new se,g=new se,p=new se,v=new A,M=new A;function w(O,R,V){d.fromArray(i,O*3),f.fromArray(i,R*3),m.fromArray(i,V*3),_.fromArray(o,O*2),g.fromArray(o,R*2),p.fromArray(o,V*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const D=1/(g.x*p.y-p.x*g.y);!isFinite(D)||(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(D),M.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(D),c[O].add(v),c[R].add(v),c[V].add(v),h[O].add(M),h[R].add(M),h[V].add(M))}u(w,"handleTriangle");let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let O=0,R=y.length;O<R;++O){const V=y[O],D=V.start,P=V.count;for(let B=D,G=D+P;B<G;B+=3)w(n[B+0],n[B+1],n[B+2])}const T=new A,L=new A,I=new A,x=new A;function C(O){I.fromArray(r,O*3),x.copy(I);const R=c[O];T.copy(R),T.sub(I.multiplyScalar(I.dot(R))).normalize(),L.crossVectors(x,R);const D=L.dot(h[O])<0?-1:1;l[O*4]=T.x,l[O*4+1]=T.y,l[O*4+2]=T.z,l[O*4+3]=D}u(C,"handleVertex");for(let O=0,R=y.length;O<R;++O){const V=y[O],D=V.start,P=V.count;for(let B=D,G=D+P;B<G;B+=3)C(n[B+0]),C(n[B+1]),C(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let v=0;v<h;v++)f[_++]=c[m++]}return new Ct(f,h,d)}if(u(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}u(Et,"BufferGeometry");const wl=new ke,Mi=new Ki,fo=new Vn,wn=new A,Tn=new A,En=new A,po=new A,mo=new A,go=new A,Ks=new A,$s=new A,Js=new A,Zs=new se,Qs=new se,er=new se,_o=new A,tr=new A;class st extends Qe{constructor(e=new Et,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),e.ray.intersectsSphere(fo)===!1)||(wl.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(wl),n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,p=m.length;g<p;g++){const v=m[g],M=i[v.materialIndex],w=Math.max(v.start,_.start),y=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let T=w,L=y;T<L;T+=3){const I=a.getX(T),x=a.getX(T+1),C=a.getX(T+2);o=nr(this,M,e,Mi,l,c,h,d,f,I,x,C),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let v=g,M=p;v<M;v+=3){const w=a.getX(v),y=a.getX(v+1),T=a.getX(v+2);o=nr(this,i,e,Mi,l,c,h,d,f,w,y,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,p=m.length;g<p;g++){const v=m[g],M=i[v.materialIndex],w=Math.max(v.start,_.start),y=Math.min(l.count,Math.min(v.start+v.count,_.start+_.count));for(let T=w,L=y;T<L;T+=3){const I=T,x=T+1,C=T+2;o=nr(this,M,e,Mi,l,c,h,d,f,I,x,C),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let v=g,M=p;v<M;v+=3){const w=v,y=v+1,T=v+2;o=nr(this,i,e,Mi,l,c,h,d,f,w,y,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}u(st,"Mesh");function Xf(s,e,t,n,i,r,o,a){let l;if(e.side===zt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==nn,a),l===null)return null;tr.copy(a),tr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:s}}u(Xf,"checkIntersection");function nr(s,e,t,n,i,r,o,a,l,c,h,d){wn.fromBufferAttribute(i,c),Tn.fromBufferAttribute(i,h),En.fromBufferAttribute(i,d);const f=s.morphTargetInfluences;if(r&&f){Ks.set(0,0,0),$s.set(0,0,0),Js.set(0,0,0);for(let _=0,g=r.length;_<g;_++){const p=f[_],v=r[_];p!==0&&(po.fromBufferAttribute(v,c),mo.fromBufferAttribute(v,h),go.fromBufferAttribute(v,d),o?(Ks.addScaledVector(po,p),$s.addScaledVector(mo,p),Js.addScaledVector(go,p)):(Ks.addScaledVector(po.sub(wn),p),$s.addScaledVector(mo.sub(Tn),p),Js.addScaledVector(go.sub(En),p)))}wn.add(Ks),Tn.add($s),En.add(Js)}s.isSkinnedMesh&&(s.boneTransform(c,wn),s.boneTransform(h,Tn),s.boneTransform(d,En));const m=Xf(s,e,t,n,wn,Tn,En,_o);if(m){a&&(Zs.fromBufferAttribute(a,c),Qs.fromBufferAttribute(a,h),er.fromBufferAttribute(a,d),m.uv=tn.getUV(_o,wn,Tn,En,Zs,Qs,er,new se)),l&&(Zs.fromBufferAttribute(l,c),Qs.fromBufferAttribute(l,h),er.fromBufferAttribute(l,d),m.uv2=tn.getUV(_o,wn,Tn,En,Zs,Qs,er,new se));const _={a:c,b:h,c:d,normal:new A,materialIndex:0};tn.getNormal(wn,Tn,En,_.normal),m.face=_}return m}u(nr,"checkBufferGeometryIntersection");class qt extends Et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function _(g,p,v,M,w,y,T,L,I,x,C){const O=y/I,R=T/x,V=y/2,D=T/2,P=L/2,B=I+1,G=x+1;let te=0,W=0;const F=new A;for(let z=0;z<G;z++){const ie=z*R-D;for(let ee=0;ee<B;ee++){const re=ee*O-V;F[g]=re*M,F[p]=ie*w,F[v]=P,c.push(F.x,F.y,F.z),F[g]=0,F[p]=0,F[v]=L>0?1:-1,h.push(F.x,F.y,F.z),d.push(ee/I),d.push(1-z/x),te+=1}}for(let z=0;z<x;z++)for(let ie=0;ie<I;ie++){const ee=f+ie+B*z,re=f+ie+B*(z+1),ge=f+(ie+1)+B*(z+1),Ee=f+(ie+1)+B*z;l.push(ee,re,Ee),l.push(re,ge,Ee),W+=6}a.addGroup(m,W,C),m+=W,f+=te}u(_,"buildPlane")}static fromJSON(e){return new qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}u(qt,"BoxGeometry");function Gi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}u(Gi,"cloneUniforms");function xt(s){const e={};for(let t=0;t<s.length;t++){const n=Gi(s[t]);for(const i in n)e[i]=n[i]}return e}u(xt,"mergeUniforms");function qf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}u(qf,"cloneUniformsGroups");const Yf={clone:Gi,merge:xt};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}u(Fn,"ShaderMaterial");class da extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}u(da,"Camera");class yt extends da{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}u(yt,"PerspectiveCamera");const Si=90,wi=1;class qc extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yt(Si,wi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new A(1,0,0)),this.add(i);const r=new yt(Si,wi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(-1,0,0)),this.add(r);const o=new yt(Si,wi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);const a=new yt(Si,wi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);const l=new yt(Si,wi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new yt(Si,wi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=_n,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}u(qc,"CubeCamera");class fa extends _t{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}u(fa,"CubeTexture");class Yc extends Nn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qt(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:In});r.uniforms.tEquirect.value=t;const o=new st(i,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=At),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}u(Yc,"WebGLCubeRenderTarget");const vo=new A,Jf=new A,Zf=new It;class Ln{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vo.subVectors(n,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zf.getNormalMatrix(e),i=this.coplanarPoint(vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}u(Ln,"Plane");const Ti=new Vn,ir=new A;class Ar{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,r=new Ln,o=new Ln){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],f=n[8],m=n[9],_=n[10],g=n[11],p=n[12],v=n[13],M=n[14],w=n[15];return t[0].setComponents(a-i,d-l,g-f,w-p).normalize(),t[1].setComponents(a+i,d+l,g+f,w+p).normalize(),t[2].setComponents(a+r,d+c,g+m,w+v).normalize(),t[3].setComponents(a-r,d-c,g-m,w-v).normalize(),t[4].setComponents(a-o,d-h,g-_,w-M).normalize(),t[5].setComponents(a+o,d+h,g+_,w+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}u(Ar,"Frustum");function Kc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return u(i,"onAnimationFrame"),{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}u(Kc,"WebGLAnimation");function Qf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}u(i,"createBuffer");function r(c,h,d){const f=h.array,m=h.updateRange;s.bindBuffer(d,c),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}u(r,"updateBuffer");function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}u(o,"get");function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}u(a,"remove");function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return u(l,"update"),{get:o,remove:a,update:l}}u(Qf,"WebGLAttributes");class Cr extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let v=0;v<h;v++){const M=v*f-o;for(let w=0;w<c;w++){const y=w*d-r;_.push(y,-M,0),g.push(0,0,1),p.push(w/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<a;M++){const w=M+c*v,y=M+c*(v+1),T=M+1+c*(v+1),L=M+1+c*v;m.push(w,y,L),m.push(y,T,L)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(p,2))}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}u(Cr,"PlaneGeometry");var ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op="vec3 transformed = vec3( position );",ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Km=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:ep,alphamap_pars_fragment:tp,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:up,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:vp,common:xp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:wp,emissivemap_pars_fragment:Tp,encodings_fragment:Ep,encodings_pars_fragment:Ap,envmap_fragment:Cp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Dp,fog_vertex:Ip,fog_pars_vertex:Op,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Up,lightmap_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:jp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:Kp,lights_fragment_begin:$p,lights_fragment_maps:Jp,lights_fragment_end:Zp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphcolor_vertex:cm,morphnormal_vertex:um,morphtarget_pars_vertex:hm,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Mm,output_fragment:Sm,packing:wm,premultiplied_alpha_fragment:Tm,project_vertex:Em,dithering_fragment:Am,dithering_pars_fragment:Cm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Im,shadowmask_pars_fragment:Om,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Um,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Bm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:jm,uv_pars_vertex:Xm,uv_vertex:qm,uv2_pars_fragment:Ym,uv2_pars_vertex:Km,uv2_vertex:$m,worldpos_vertex:Jm,background_vert:Zm,background_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:wg,points_frag:Tg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:Cg,sprite_frag:Lg},le={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new It},uv2Transform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}}},en={basic:{uniforms:xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:xt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:xt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:xt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:xt([le.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:xt([le.common,le.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:xt([le.lights,le.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};en.physical={uniforms:xt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function Rg(s,e,t,n,i,r){const o=new Ae(0);let a=i===!0?0:1,l,c,h=null,d=0,f=null;function m(g,p){let v=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=e.get(M));const w=s.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?_(o,a):M&&M.isColor&&(_(M,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===wr)?(c===void 0&&(c=new st(new qt(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Gi(en.cube.uniforms),vertexShader:en.cube.vertexShader,fragmentShader:en.cube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(h!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new st(new Cr(2,2),new Fn({name:"BackgroundMaterial",uniforms:Gi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}u(m,"render");function _(g,p){t.buffers.color.setClear(g.r,g.g,g.b,p,r)}return u(_,"setClear"),{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,_(o,a)},render:m}}u(Rg,"WebGLBackground");function Pg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function d(P,B,G,te,W){let F=!1;if(o){const z=g(te,G,B);c!==z&&(c=z,m(c.object)),F=v(P,te,G,W),F&&M(P,te,G,W)}else{const z=B.wireframe===!0;(c.geometry!==te.id||c.program!==G.id||c.wireframe!==z)&&(c.geometry=te.id,c.program=G.id,c.wireframe=z,F=!0)}W!==null&&t.update(W,34963),(F||h)&&(h=!1,x(P,B,G,te),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}u(d,"setup");function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}u(f,"createVertexArrayObject");function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}u(m,"bindVertexArrayObject");function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}u(_,"deleteVertexArrayObject");function g(P,B,G){const te=G.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let F=W[B.id];F===void 0&&(F={},W[B.id]=F);let z=F[te];return z===void 0&&(z=p(f()),F[te]=z),z}u(g,"getBindingState");function p(P){const B=[],G=[],te=[];for(let W=0;W<i;W++)B[W]=0,G[W]=0,te[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:te,object:P,attributes:{},index:null}}u(p,"createBindingState");function v(P,B,G,te){const W=c.attributes,F=B.attributes;let z=0;const ie=G.getAttributes();for(const ee in ie)if(ie[ee].location>=0){const ge=W[ee];let Ee=F[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;z++}return c.attributesNum!==z||c.index!==te}u(v,"needsUpdate");function M(P,B,G,te){const W={},F=B.attributes;let z=0;const ie=G.getAttributes();for(const ee in ie)if(ie[ee].location>=0){let ge=F[ee];ge===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor));const Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),W[ee]=Ee,z++}c.attributes=W,c.attributesNum=z,c.index=te}u(M,"saveCache");function w(){const P=c.newAttributes;for(let B=0,G=P.length;B<G;B++)P[B]=0}u(w,"initAttributes");function y(P){T(P,0)}u(y,"enableAttribute");function T(P,B){const G=c.newAttributes,te=c.enabledAttributes,W=c.attributeDivisors;G[P]=1,te[P]===0&&(s.enableVertexAttribArray(P),te[P]=1),W[P]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),W[P]=B)}u(T,"enableAttributeAndDivisor");function L(){const P=c.newAttributes,B=c.enabledAttributes;for(let G=0,te=B.length;G<te;G++)B[G]!==P[G]&&(s.disableVertexAttribArray(G),B[G]=0)}u(L,"disableUnusedAttributes");function I(P,B,G,te,W,F){n.isWebGL2===!0&&(G===5124||G===5125)?s.vertexAttribIPointer(P,B,G,W,F):s.vertexAttribPointer(P,B,G,te,W,F)}u(I,"vertexAttribPointer");function x(P,B,G,te){if(n.isWebGL2===!1&&(P.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const W=te.attributes,F=G.getAttributes(),z=B.defaultAttributeValues;for(const ie in F){const ee=F[ie];if(ee.location>=0){let re=W[ie];if(re===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),re!==void 0){const ge=re.normalized,Ee=re.itemSize,$=t.get(re);if($===void 0)continue;const Oe=$.buffer,we=$.type,Ce=$.bytesPerElement;if(re.isInterleavedBufferAttribute){const ue=re.data,ze=ue.stride,Q=re.offset;if(ue.isInstancedInterleavedBuffer){for(let J=0;J<ee.locationSize;J++)T(ee.location+J,ue.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let J=0;J<ee.locationSize;J++)y(ee.location+J);s.bindBuffer(34962,Oe);for(let J=0;J<ee.locationSize;J++)I(ee.location+J,Ee/ee.locationSize,we,ge,ze*Ce,(Q+Ee/ee.locationSize*J)*Ce)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<ee.locationSize;ue++)T(ee.location+ue,re.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<ee.locationSize;ue++)y(ee.location+ue);s.bindBuffer(34962,Oe);for(let ue=0;ue<ee.locationSize;ue++)I(ee.location+ue,Ee/ee.locationSize,we,ge,Ee*Ce,Ee/ee.locationSize*ue*Ce)}}else if(z!==void 0){const ge=z[ie];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(ee.location,ge);break;case 3:s.vertexAttrib3fv(ee.location,ge);break;case 4:s.vertexAttrib4fv(ee.location,ge);break;default:s.vertexAttrib1fv(ee.location,ge)}}}}L()}u(x,"setupVertexAttributes");function C(){V();for(const P in a){const B=a[P];for(const G in B){const te=B[G];for(const W in te)_(te[W].object),delete te[W];delete B[G]}delete a[P]}}u(C,"dispose");function O(P){if(a[P.id]===void 0)return;const B=a[P.id];for(const G in B){const te=B[G];for(const W in te)_(te[W].object),delete te[W];delete B[G]}delete a[P.id]}u(O,"releaseStatesOfGeometry");function R(P){for(const B in a){const G=a[B];if(G[P.id]===void 0)continue;const te=G[P.id];for(const W in te)_(te[W].object),delete te[W];delete G[P.id]}}u(R,"releaseStatesOfProgram");function V(){D(),h=!0,c!==l&&(c=l,m(c.object))}u(V,"reset");function D(){l.geometry=null,l.program=null,l.wireframe=!1}return u(D,"resetDefaultState"),{setup:d,reset:V,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:R,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}u(Pg,"WebGLBindingStates");function Dg(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}u(o,"setMode");function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}u(a,"render");function l(c,h,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,d),t.update(h,r,d)}u(l,"renderInstances"),this.setMode=o,this.render=a,this.renderInstances=l}u(Dg,"WebGLBufferRenderer");function Ig(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}u(i,"getMaxAnisotropy");function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}u(r,"getMaxPrecision");const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),g=s.getParameter(34921),p=s.getParameter(36347),v=s.getParameter(36348),M=s.getParameter(36349),w=f>0,y=o||e.has("OES_texture_float"),T=w&&y,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:L}}u(Ig,"WebGLCapabilities");function Og(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ln,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const _=d.length!==0||f||n!==0||i;return i=f,t=h(d,m,0),n=d.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,v=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,w=M*4;let y=v.clippingState||null;l.value=y,y=h(_,f,w,m);for(let T=0;T!==w;++T)y[T]=t[T];v.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const v=m+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<v)&&(p=new Float32Array(v));for(let w=0,y=m;w!==g;++w,y+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}u(h,"projectPlanes")}u(Og,"WebGLClipping");function Ng(s){let e=new WeakMap;function t(o,a){return a===Io?o.mapping=zi:a===Oo&&(o.mapping=ki),o}u(t,"mapTextureMapping");function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Io||a===Oo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yc(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}u(n,"get");function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}u(i,"onTextureDispose");function r(){e=new WeakMap}return u(r,"dispose"),{get:n,dispose:r}}u(Ng,"WebGLCubeMaps");class Lr extends da{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}u(Lr,"OrthographicCamera");const Pi=4,Tl=[.125,.215,.35,.446,.526,.582],Qn=20,xo=new Lr,El=new Ae;let yo=null;const Jn=(1+Math.sqrt(5))/2,Ei=1/Jn,Al=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Jn,Ei),new A(0,Jn,-Ei),new A(Ei,0,Jn),new A(-Ei,0,Jn),new A(Jn,Ei,0),new A(-Jn,Ei,0)];class Bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){yo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yo),e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:ws,format:Xt,encoding:oi,depthBuffer:!1},i=Cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Ug(r,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(El),h.toneMapping=_n,h.autoClear=!1;const m=new Dn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new st(new qt,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(El),g=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):M===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const w=this._cubeSize;sr(i,M*w,v>2?w:0,w,w),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zi||e.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Al[(i-1)%Al.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Qn;p>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const v=[];let M=0;for(let I=0;I<Qn;++I){const x=I/g,C=Math.exp(-x*x/2);v.push(C),I===0?M+=C:I<p&&(M+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-n;const y=this._sizeLods[i],T=3*y*(i>w-Pi?i-w+Pi:0),L=4*(this._cubeSize-y);sr(t,T,L,3*y,2*y),l.setRenderTarget(t),l.render(d,xo)}}u(Bo,"PMREMGenerator");function Fg(s){const e=[],t=[],n=[];let i=s;const r=s-Pi+1+Tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Pi?l=Tl[o-s+Pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,v=1,M=new Float32Array(g*_*m),w=new Float32Array(p*_*m),y=new Float32Array(v*_*m);for(let L=0;L<m;L++){const I=L%3*2/3-1,x=L>2?0:-1,C=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];M.set(C,g*_*L),w.set(f,p*_*L);const O=[L,L,L,L,L,L];y.set(O,v*_*L)}const T=new Et;T.setAttribute("position",new Ct(M,g)),T.setAttribute("uv",new Ct(w,p)),T.setAttribute("faceIndex",new Ct(y,v)),e.push(T),i>Pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}u(Fg,"_createPlanes");function Cl(s,e,t){const n=new Nn(s,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}u(Cl,"_createRenderTarget");function sr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}u(sr,"_setViewport");function Ug(s,e,t){const n=new Float32Array(Qn),i=new A(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}u(Ug,"_getBlurShader");function Ll(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}u(Ll,"_getEquirectMaterial");function Rl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}u(Rl,"_getCubemapMaterial");function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}u(pa,"_getCommonVertexShader");function zg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Io||l===Oo,h=l===zi||l===ki;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Bo(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Bo(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}u(n,"get");function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}u(i,"isCubeTextureComplete");function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}u(r,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return u(o,"dispose"),{get:n,dispose:o}}u(zg,"WebGLCubeUVMaps");function kg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return u(t,"getExtension"),{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}u(kg,"WebGLExtensions");function Bg(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}u(o,"onGeometryDispose");function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}u(a,"get");function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,v=g.length;p<v;p++)e.update(g[p],34962)}}u(l,"update");function c(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let w=0,y=M.length;w<y;w+=3){const T=M[w+0],L=M[w+1],I=M[w+2];f.push(T,L,L,I,I,T)}}else{const M=_.array;g=_.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const T=w+0,L=w+1,I=w+2;f.push(T,L,L,I,I,T)}}const p=new(Wc(f)?ha:ua)(f,1);p.version=g;const v=r.get(d);v&&e.remove(v),r.set(d,p)}u(c,"updateWireframeAttribute");function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return u(h,"getWireframeAttribute"),{get:a,update:l,getWireframeAttribute:h}}u(Bg,"WebGLGeometries");function Hg(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}u(o,"setMode");let a,l;function c(f){a=f.type,l=f.bytesPerElement}u(c,"setIndex");function h(f,m){s.drawElements(r,m,a,f*l),t.update(m,r,1)}u(h,"render");function d(f,m,_){if(_===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,_),t.update(m,r,_)}u(d,"renderInstances"),this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}u(Hg,"WebGLIndexedBufferRenderer");function Vg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(Vg,"WebGLInfo");function Gg(s,e){return s[0]-e[0]}u(Gg,"numericalSort");function Wg(s,e){return Math.abs(e[1])-Math.abs(s[1])}u(Wg,"absNumericalSort");function jg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let B=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",B)};u(B,"disposeTexture"),p!==void 0&&p.texture.dispose();const w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let C=0;w===!0&&(C=1),y===!0&&(C=2),T===!0&&(C=3);let O=h.attributes.position.count*C,R=1;O>e.maxTextureSize&&(R=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const V=new Float32Array(O*R*4*g),D=new ca(V,O,R,g);D.type=Pn,D.needsUpdate=!0;const P=C*4;for(let G=0;G<g;G++){const te=L[G],W=I[G],F=x[G],z=O*R*4*G;for(let ie=0;ie<te.count;ie++){const ee=ie*P;w===!0&&(o.fromBufferAttribute(te,ie),V[z+ee+0]=o.x,V[z+ee+1]=o.y,V[z+ee+2]=o.z,V[z+ee+3]=0),y===!0&&(o.fromBufferAttribute(W,ie),V[z+ee+4]=o.x,V[z+ee+5]=o.y,V[z+ee+6]=o.z,V[z+ee+7]=0),T===!0&&(o.fromBufferAttribute(F,ie),V[z+ee+8]=o.x,V[z+ee+9]=o.y,V[z+ee+10]=o.z,V[z+ee+11]=F.itemSize===4?o.w:1)}}p={count:g,texture:D,size:new se(O,R)},r.set(h,p),h.addEventListener("dispose",B)}let v=0;for(let w=0;w<m.length;w++)v+=m[w];const M=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=m===void 0?0:m.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<_;y++){const T=g[y];T[0]=y,T[1]=m[y]}g.sort(Wg);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Gg);const p=h.morphAttributes.position,v=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const T=a[y],L=T[0],I=T[1];L!==Number.MAX_SAFE_INTEGER&&I?(p&&h.getAttribute("morphTarget"+y)!==p[L]&&h.setAttribute("morphTarget"+y,p[L]),v&&h.getAttribute("morphNormal"+y)!==v[L]&&h.setAttribute("morphNormal"+y,v[L]),i[y]=I,M+=I):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),v&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const w=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return u(l,"update"),{update:l}}u(jg,"WebGLMorphtargets");function Xg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}u(r,"update");function o(){i=new WeakMap}u(o,"dispose");function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return u(a,"onInstancedMeshDispose"),{update:r,dispose:o}}u(Xg,"WebGLObjects");const $c=new _t,Jc=new ca,Zc=new Xc,Qc=new fa,Pl=[],Dl=[],Il=new Float32Array(16),Ol=new Float32Array(9),Nl=new Float32Array(4);function Ji(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pl[i];if(r===void 0&&(r=new Float32Array(i),Pl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}u(Ji,"flatten");function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}u(wt,"arraysEqual");function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}u(Tt,"copyArray");function Rr(s,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}u(Rr,"allocTexUnits");function qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}u(qg,"setValueV1f");function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}u(Yg,"setValueV2f");function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}u(Kg,"setValueV3f");function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}u($g,"setValueV4f");function Jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Nl.set(n),s.uniformMatrix2fv(this.addr,!1,Nl),Tt(t,n)}}u(Jg,"setValueM2");function Zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Ol.set(n),s.uniformMatrix3fv(this.addr,!1,Ol),Tt(t,n)}}u(Zg,"setValueM3");function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Il.set(n),s.uniformMatrix4fv(this.addr,!1,Il),Tt(t,n)}}u(Qg,"setValueM4");function e_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}u(e_,"setValueV1i");function t_(s,e){const t=this.cache;wt(t,e)||(s.uniform2iv(this.addr,e),Tt(t,e))}u(t_,"setValueV2i");function n_(s,e){const t=this.cache;wt(t,e)||(s.uniform3iv(this.addr,e),Tt(t,e))}u(n_,"setValueV3i");function i_(s,e){const t=this.cache;wt(t,e)||(s.uniform4iv(this.addr,e),Tt(t,e))}u(i_,"setValueV4i");function s_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}u(s_,"setValueV1ui");function r_(s,e){const t=this.cache;wt(t,e)||(s.uniform2uiv(this.addr,e),Tt(t,e))}u(r_,"setValueV2ui");function o_(s,e){const t=this.cache;wt(t,e)||(s.uniform3uiv(this.addr,e),Tt(t,e))}u(o_,"setValueV3ui");function a_(s,e){const t=this.cache;wt(t,e)||(s.uniform4uiv(this.addr,e),Tt(t,e))}u(a_,"setValueV4ui");function l_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$c,i)}u(l_,"setValueT1");function c_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zc,i)}u(c_,"setValueT3D1");function u_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qc,i)}u(u_,"setValueT6");function h_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jc,i)}u(h_,"setValueT2DArray1");function d_(s){switch(s){case 5126:return qg;case 35664:return Yg;case 35665:return Kg;case 35666:return $g;case 35674:return Jg;case 35675:return Zg;case 35676:return Qg;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}u(d_,"getSingularSetter");function f_(s,e){s.uniform1fv(this.addr,e)}u(f_,"setValueV1fArray");function p_(s,e){const t=Ji(e,this.size,2);s.uniform2fv(this.addr,t)}u(p_,"setValueV2fArray");function m_(s,e){const t=Ji(e,this.size,3);s.uniform3fv(this.addr,t)}u(m_,"setValueV3fArray");function g_(s,e){const t=Ji(e,this.size,4);s.uniform4fv(this.addr,t)}u(g_,"setValueV4fArray");function __(s,e){const t=Ji(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}u(__,"setValueM2Array");function v_(s,e){const t=Ji(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}u(v_,"setValueM3Array");function x_(s,e){const t=Ji(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}u(x_,"setValueM4Array");function y_(s,e){s.uniform1iv(this.addr,e)}u(y_,"setValueV1iArray");function b_(s,e){s.uniform2iv(this.addr,e)}u(b_,"setValueV2iArray");function M_(s,e){s.uniform3iv(this.addr,e)}u(M_,"setValueV3iArray");function S_(s,e){s.uniform4iv(this.addr,e)}u(S_,"setValueV4iArray");function w_(s,e){s.uniform1uiv(this.addr,e)}u(w_,"setValueV1uiArray");function T_(s,e){s.uniform2uiv(this.addr,e)}u(T_,"setValueV2uiArray");function E_(s,e){s.uniform3uiv(this.addr,e)}u(E_,"setValueV3uiArray");function A_(s,e){s.uniform4uiv(this.addr,e)}u(A_,"setValueV4uiArray");function C_(s,e,t){const n=e.length,i=Rr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||$c,i[r])}u(C_,"setValueT1Array");function L_(s,e,t){const n=e.length,i=Rr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Zc,i[r])}u(L_,"setValueT3DArray");function R_(s,e,t){const n=e.length,i=Rr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Qc,i[r])}u(R_,"setValueT6Array");function P_(s,e,t){const n=e.length,i=Rr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Jc,i[r])}u(P_,"setValueT2DArrayArray");function D_(s){switch(s){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return b_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return T_;case 36295:return E_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}u(D_,"getPureArraySetter");class eu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=d_(t.type)}}u(eu,"SingleUniform");class tu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=D_(t.type)}}u(tu,"PureArrayUniform");class nu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}u(nu,"StructuredUniform");const bo=/(\w+)(\])?(\[|\.)?/g;function Fl(s,e){s.seq.push(e),s.map[e.id]=e}u(Fl,"addUniform");function I_(s,e,t){const n=s.name,i=n.length;for(bo.lastIndex=0;;){const r=bo.exec(n),o=bo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fl(t,c===void 0?new eu(a,s,e):new tu(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new nu(a),Fl(t,d)),t=d}}}u(I_,"parseUniform");class vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);I_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}u(vs,"WebGLUniforms");function Ul(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}u(Ul,"WebGLShader");let O_=0;function N_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(N_,"handleSource");function F_(s){switch(s){case oi:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}u(F_,"getEncodingComponents");function zl(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+N_(s.getShaderSource(e),o)}else return i}u(zl,"getShaderErrors");function U_(s,e){const t=F_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}u(U_,"getTexelEncodingFunction");function z_(s,e){let t;switch(e){case $d:t="Linear";break;case Jd:t="Reinhard";break;case Zd:t="OptimizedCineon";break;case Qd:t="ACESFilmic";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(z_,"getToneMappingFunction");function k_(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}u(k_,"generateExtensions");function B_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(B_,"generateDefines");function H_(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}u(H_,"fetchAttributeLocations");function ds(s){return s!==""}u(ds,"filterEmptyLine");function kl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}u(kl,"replaceLightNums");function Bl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(Bl,"replaceClippingPlaneNums");const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(s){return s.replace(V_,G_)}u(Ho,"resolveIncludes");function G_(s,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ho(t)}u(G_,"includeReplacer");const W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(s){return s.replace(W_,j_)}u(Hl,"unrollLoops");function j_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}u(j_,"loopReplacer");function Vl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}u(Vl,"generatePrecision");function X_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}u(X_,"generateShadowMapTypeDefine");function q_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zi:case ki:e="ENVMAP_TYPE_CUBE";break;case wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}u(q_,"generateEnvMapTypeDefine");function Y_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}u(Y_,"generateEnvMapModeDefine");function K_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ra:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case Kd:e="ENVMAP_BLENDING_ADD";break}return e}u(K_,"generateEnvMapBlendingDefine");function $_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}u($_,"generateCubeUVSize");function J_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=X_(t),c=q_(t),h=Y_(t),d=K_(t),f=$_(t),m=t.isWebGL2?"":k_(t),_=B_(r),g=i.createProgram();let p,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(ds).join(`
`),p.length>0&&(p+=`
`),v=[m,_].filter(ds).join(`
`),v.length>0&&(v+=`
`)):(p=[Vl(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),v=[m,Vl(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Fe.tonemapping_pars_fragment:"",t.toneMapping!==_n?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,U_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Ho(o),o=kl(o,t),o=Bl(o,t),a=Ho(a),a=kl(a,t),a=Bl(a,t),o=Hl(o),a=Hl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=M+p+o,y=M+v+a,T=Ul(i,35633,w),L=Ul(i,35632,y);if(i.attachShader(g,T),i.attachShader(g,L),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(T).trim(),R=i.getShaderInfoLog(L).trim();let V=!0,D=!0;if(i.getProgramParameter(g,35714)===!1){V=!1;const P=zl(i,T,"vertex"),B=zl(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+C+`
`+P+`
`+B)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||R==="")&&(D=!1);D&&(this.diagnostics={runnable:V,programLog:C,vertexShader:{log:O,prefix:p},fragmentShader:{log:R,prefix:v}})}i.deleteShader(T),i.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new vs(i,g)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=H_(i,g)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=L,this}u(J_,"WebGLProgram");let Z_=0;class iu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new su(e),t.set(e,n)),n}}u(iu,"WebGLShaderCache");class su{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}}u(su,"WebGLShaderStage");function Q_(s,e,t,n,i,r,o){const a=new Er,l=new iu,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x,C,O,R,V){const D=R.fog,P=V.geometry,B=x.isMeshStandardMaterial?R.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),te=!!G&&G.mapping===wr?G.image.height:null,W=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const F=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,z=F!==void 0?F.length:0;let ie=0;P.morphAttributes.position!==void 0&&(ie=1),P.morphAttributes.normal!==void 0&&(ie=2),P.morphAttributes.color!==void 0&&(ie=3);let ee,re,ge,Ee;if(W){const ze=en[W];ee=ze.vertexShader,re=ze.fragmentShader}else ee=x.vertexShader,re=x.fragmentShader,l.update(x),ge=l.getVertexShaderID(x),Ee=l.getFragmentShaderID(x);const $=s.getRenderTarget(),Oe=x.alphaTest>0,we=x.clearcoat>0,Ce=x.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:x.type,vertexShader:ee,fragmentShader:re,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?s.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:oi,map:!!x.map,matcap:!!x.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:te,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===bf,tangentSpaceNormalMap:x.normalMapType===Tr,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===je,clearcoat:we,clearcoatMap:we&&!!x.clearcoatMap,clearcoatRoughnessMap:we&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!x.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!x.iridescenceMap,iridescenceThicknessMap:Ce&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Oi,alphaMap:!!x.alphaMap,alphaTest:Oe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:_n,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===zt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}u(g,"getParameters");function p(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)C.push(O),C.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(v(C,x),M(C,x),C.push(s.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}u(p,"getProgramCacheKey");function v(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}u(v,"getProgramCacheKeyParameters");function M(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),x.push(a.mask)}u(M,"getProgramCacheKeyBooleans");function w(x){const C=_[x.type];let O;if(C){const R=en[C];O=Yf.clone(R.uniforms)}else O=x.uniforms;return O}u(w,"getUniforms");function y(x,C){let O;for(let R=0,V=c.length;R<V;R++){const D=c[R];if(D.cacheKey===C){O=D,++O.usedTimes;break}}return O===void 0&&(O=new J_(s,C,x,r),c.push(O)),O}u(y,"acquireProgram");function T(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}u(T,"releaseProgram");function L(x){l.remove(x)}u(L,"releaseShaderCache");function I(){l.dispose()}return u(I,"dispose"),{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:y,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:I}}u(Q_,"WebGLPrograms");function e0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}u(e,"get");function t(r){s.delete(r)}u(t,"remove");function n(r,o,a){s.get(r)[o]=a}u(n,"update");function i(){s=new WeakMap}return u(i,"dispose"),{get:e,remove:t,update:n,dispose:i}}u(e0,"WebGLProperties");function t0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}u(t0,"painterSortStable");function Gl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}u(Gl,"reversePainterSortStable");function Wl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}u(r,"init");function o(d,f,m,_,g,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=p),e++,v}u(o,"getNextRenderItem");function a(d,f,m,_,g,p){const v=o(d,f,m,_,g,p);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}u(a,"push");function l(d,f,m,_,g,p){const v=o(d,f,m,_,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}u(l,"unshift");function c(d,f){t.length>1&&t.sort(d||t0),n.length>1&&n.sort(f||Gl),i.length>1&&i.sort(f||Gl)}u(c,"sort");function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return u(h,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}u(Wl,"WebGLRenderList");function n0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Wl,s.set(n,[o])):i>=r.length?(o=new Wl,r.push(o)):o=r[i],o}u(e,"get");function t(){s=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(n0,"WebGLRenderLists");function i0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ae};break;case"SpotLight":t={position:new A,direction:new A,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}u(i0,"UniformsCache");function s0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}u(s0,"ShadowUniformsCache");let r0=0;function o0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}u(o0,"shadowCastingAndTexturingLightsFirst");function a0(s,e){const t=new i0,n=s0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new A);const r=new A,o=new ke,a=new ke;function l(h,d){let f=0,m=0,_=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,p=0,v=0,M=0,w=0,y=0,T=0,L=0,I=0,x=0;h.sort(o0);const C=d!==!0?Math.PI:1;for(let R=0,V=h.length;R<V;R++){const D=h[R],P=D.color,B=D.intensity,G=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=P.r*B*C,m+=P.g*B*C,_+=P.b*B*C;else if(D.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],B);else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*C),D.castShadow){const F=D.shadow,z=n.get(D);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.directionalShadow[g]=z,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=D.shadow.matrix,y++}i.directional[g]=W,g++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(P).multiplyScalar(B*C),W.distance=G,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[v]=W;const F=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,F.updateMatrices(D),D.castShadow&&x++),i.spotLightMatrix[v]=F.matrix,D.castShadow){const z=n.get(D);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=te,L++}v++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(P).multiplyScalar(B),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=W,M++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*C),W.distance=D.distance,W.decay=D.decay,D.castShadow){const F=D.shadow,z=n.get(D);z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,i.pointShadow[p]=z,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(B*C),W.groundColor.copy(D.groundColor).multiplyScalar(B*C),i.hemi[w]=W,w++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const O=i.hash;(O.directionalLength!==g||O.pointLength!==p||O.spotLength!==v||O.rectAreaLength!==M||O.hemiLength!==w||O.numDirectionalShadows!==y||O.numPointShadows!==T||O.numSpotShadows!==L||O.numSpotMaps!==I)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=M,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=L+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,O.directionalLength=g,O.pointLength=p,O.spotLength=v,O.rectAreaLength=M,O.hemiLength=w,O.numDirectionalShadows=y,O.numPointShadows=T,O.numSpotShadows=L,O.numSpotMaps=I,i.version=r0++)}u(l,"setup");function c(h,d){let f=0,m=0,_=0,g=0,p=0;const v=d.matrixWorldInverse;for(let M=0,w=h.length;M<w;M++){const y=h[M];if(y.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),f++}else if(y.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),_++}else if(y.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(v),p++}}}return u(c,"setupView"),{setup:l,setupView:c,state:i}}u(a0,"WebGLLights");function jl(s,e){const t=new a0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}u(r,"init");function o(d){n.push(d)}u(o,"pushLight");function a(d){i.push(d)}u(a,"pushShadow");function l(d){t.setup(n,d)}u(l,"setupLights");function c(d){t.setupView(n,d)}return u(c,"setupLightsView"),{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(jl,"WebGLRenderState");function l0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new jl(s,e),t.set(r,[l])):o>=a.length?(l=new jl(s,e),a.push(l)):l=a[o],l}u(n,"get");function i(){t=new WeakMap}return u(i,"dispose"),{get:n,dispose:i}}u(l0,"WebGLRenderStates");class ru extends Bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}u(ru,"MeshDepthMaterial");class ou extends Bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}u(ou,"MeshDistanceMaterial");const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h0(s,e,t){let n=new Ar;const i=new se,r=new se,o=new Ke,a=new ru({depthPacking:yf}),l=new ou,c={},h=t.maxTextureSize,d={0:zt,1:si,2:nn},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:c0,fragmentShader:u0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Et;_.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc,this.render=function(y,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),O=s.state;O.setBlending(In),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let R=0,V=y.length;R<V;R++){const D=y[R],P=D.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const B=P.getFrameExtents();if(i.multiply(B),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,P.mapSize.y=r.y)),P.map===null){const te=this.type!==hs?{minFilter:mt,magFilter:mt}:{};P.map=new Nn(i.x,i.y,te),P.map.texture.name=D.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const G=P.getViewportCount();for(let te=0;te<G;te++){const W=P.getViewport(te);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),O.viewport(o),P.updateMatrices(D,te),n=P.getFrustum(),w(T,L,P.camera,D,this.type)}P.isPointLightShadow!==!0&&this.type===hs&&v(P,L),P.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(I,x,C)};function v(y,T){const L=e.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Nn(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(T,null,L,f,g,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(T,null,L,m,g,null)}u(v,"VSMPass");function M(y,T,L,I,x,C){let O=null;const R=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0?O=R:O=L.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const V=O.uuid,D=T.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let B=P[D];B===void 0&&(B=O.clone(),P[D]=B),O=B}return O.visible=T.visible,O.wireframe=T.wireframe,C===hs?O.side=T.shadowSide!==null?T.shadowSide:T.side:O.side=T.shadowSide!==null?T.shadowSide:d[T.side],O.alphaMap=T.alphaMap,O.alphaTest=T.alphaTest,O.clipShadows=T.clipShadows,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.displacementMap=T.displacementMap,O.displacementScale=T.displacementScale,O.displacementBias=T.displacementBias,O.wireframeLinewidth=T.wireframeLinewidth,O.linewidth=T.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(L.matrixWorld),O.nearDistance=I,O.farDistance=x),O}u(M,"getDepthMaterial");function w(y,T,L,I,x){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===hs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const R=e.update(y),V=y.material;if(Array.isArray(V)){const D=R.groups;for(let P=0,B=D.length;P<B;P++){const G=D[P],te=V[G.materialIndex];if(te&&te.visible){const W=M(y,te,I,L.near,L.far,x);s.renderBufferDirect(L,null,R,W,y,G)}}}else if(V.visible){const D=M(y,V,I,L.near,L.far,x);s.renderBufferDirect(L,null,R,D,y,null)}}const O=y.children;for(let R=0,V=O.length;R<V;R++)w(O[R],T,L,I,x)}u(w,"renderObject")}u(h0,"WebGLShadowMap");function d0(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const pe=new Ke;let q=null;const fe=new Ke(0,0,0,0);return{setMask:function(de){q!==de&&!N&&(s.colorMask(de,de,de,de),q=de)},setLocked:function(de){N=de},setClear:function(de,Ve,ht,ot,vn){vn===!0&&(de*=ot,Ve*=ot,ht*=ot),pe.set(de,Ve,ht,ot),fe.equals(pe)===!1&&(s.clearColor(de,Ve,ht,ot),fe.copy(pe))},reset:function(){N=!1,q=null,fe.set(-1,0,0,0)}}}u(i,"ColorBuffer");function r(){let N=!1,pe=null,q=null,fe=null;return{setTest:function(de){de?Oe(2929):we(2929)},setMask:function(de){pe!==de&&!N&&(s.depthMask(de),pe=de)},setFunc:function(de){if(q!==de){if(de)switch(de){case Hd:s.depthFunc(512);break;case Vd:s.depthFunc(519);break;case Gd:s.depthFunc(513);break;case Do:s.depthFunc(515);break;case Wd:s.depthFunc(514);break;case jd:s.depthFunc(518);break;case Xd:s.depthFunc(516);break;case qd:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);q=de}},setLocked:function(de){N=de},setClear:function(de){fe!==de&&(s.clearDepth(de),fe=de)},reset:function(){N=!1,pe=null,q=null,fe=null}}}u(r,"DepthBuffer");function o(){let N=!1,pe=null,q=null,fe=null,de=null,Ve=null,ht=null,ot=null,vn=null;return{setTest:function(nt){N||(nt?Oe(2960):we(2960))},setMask:function(nt){pe!==nt&&!N&&(s.stencilMask(nt),pe=nt)},setFunc:function(nt,an,Ot){(q!==nt||fe!==an||de!==Ot)&&(s.stencilFunc(nt,an,Ot),q=nt,fe=an,de=Ot)},setOp:function(nt,an,Ot){(Ve!==nt||ht!==an||ot!==Ot)&&(s.stencilOp(nt,an,Ot),Ve=nt,ht=an,ot=Ot)},setLocked:function(nt){N=nt},setClear:function(nt){vn!==nt&&(s.clearStencil(nt),vn=nt)},reset:function(){N=!1,pe=null,q=null,fe=null,de=null,Ve=null,ht=null,ot=null,vn=null}}}u(o,"StencilBuffer");const a=new i,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,v=!1,M=null,w=null,y=null,T=null,L=null,I=null,x=null,C=!1,O=null,R=null,V=null,D=null,P=null;const B=s.getParameter(35661);let G=!1,te=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=te>=2);let F=null,z={};const ie=s.getParameter(3088),ee=s.getParameter(2978),re=new Ke().fromArray(ie),ge=new Ke().fromArray(ee);function Ee(N,pe,q){const fe=new Uint8Array(4),de=s.createTexture();s.bindTexture(N,de),s.texParameteri(N,10241,9728),s.texParameteri(N,10240,9728);for(let Ve=0;Ve<q;Ve++)s.texImage2D(pe+Ve,0,6408,1,1,0,6408,5121,fe);return de}u(Ee,"createTexture");const $={};$[3553]=Ee(3553,3553,1),$[34067]=Ee(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(2929),l.setFunc(Do),ce(!1),De(Fa),Oe(2884),oe(In);function Oe(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}u(Oe,"enable");function we(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}u(we,"disable");function Ce(N,pe){return m[N]!==pe?(s.bindFramebuffer(N,pe),m[N]=pe,n&&(N===36009&&(m[36160]=pe),N===36160&&(m[36009]=pe)),!0):!1}u(Ce,"bindFramebuffer");function ue(N,pe){let q=g,fe=!1;if(N)if(q=_.get(pe),q===void 0&&(q=[],_.set(pe,q)),N.isWebGLMultipleRenderTargets){const de=N.texture;if(q.length!==de.length||q[0]!==36064){for(let Ve=0,ht=de.length;Ve<ht;Ve++)q[Ve]=36064+Ve;q.length=de.length,fe=!0}}else q[0]!==36064&&(q[0]=36064,fe=!0);else q[0]!==1029&&(q[0]=1029,fe=!0);fe&&(t.isWebGL2?s.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}u(ue,"drawBuffers");function ze(N){return p!==N?(s.useProgram(N),p=N,!0):!1}u(ze,"useProgram");const Q={[Ai]:32774,[Rd]:32778,[Pd]:32779};if(n)Q[Ba]=32775,Q[Ha]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Q[Ba]=N.MIN_EXT,Q[Ha]=N.MAX_EXT)}const J={[Dd]:0,[Id]:1,[Od]:768,[Uc]:770,[Bd]:776,[zd]:774,[Fd]:772,[Nd]:769,[zc]:771,[kd]:775,[Ud]:773};function oe(N,pe,q,fe,de,Ve,ht,ot){if(N===In){v===!0&&(we(3042),v=!1);return}if(v===!1&&(Oe(3042),v=!0),N!==Ld){if(N!==M||ot!==C){if((w!==Ai||L!==Ai)&&(s.blendEquation(32774),w=Ai,L=Ai),ot)switch(N){case Oi:s.blendFuncSeparate(1,771,1,771);break;case Ua:s.blendFunc(1,1);break;case za:s.blendFuncSeparate(0,769,0,1);break;case ka:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Oi:s.blendFuncSeparate(770,771,1,771);break;case Ua:s.blendFunc(770,1);break;case za:s.blendFuncSeparate(0,769,0,1);break;case ka:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,T=null,I=null,x=null,M=N,C=ot}return}de=de||pe,Ve=Ve||q,ht=ht||fe,(pe!==w||de!==L)&&(s.blendEquationSeparate(Q[pe],Q[de]),w=pe,L=de),(q!==y||fe!==T||Ve!==I||ht!==x)&&(s.blendFuncSeparate(J[q],J[fe],J[Ve],J[ht]),y=q,T=fe,I=Ve,x=ht),M=N,C=null}u(oe,"setBlending");function ve(N,pe){N.side===nn?we(2884):Oe(2884);let q=N.side===zt;pe&&(q=!q),ce(q),N.blending===Oi&&N.transparent===!1?oe(In):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const fe=N.stencilWrite;c.setTest(fe),fe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Oe(32926):we(32926)}u(ve,"setMaterial");function ce(N){O!==N&&(N?s.frontFace(2304):s.frontFace(2305),O=N)}u(ce,"setFlipSided");function De(N){N!==Ed?(Oe(2884),N!==R&&(N===Fa?s.cullFace(1029):N===Ad?s.cullFace(1028):s.cullFace(1032))):we(2884),R=N}u(De,"setCullFace");function Te(N){N!==V&&(G&&s.lineWidth(N),V=N)}u(Te,"setLineWidth");function Se(N,pe,q){N?(Oe(32823),(D!==pe||P!==q)&&(s.polygonOffset(pe,q),D=pe,P=q)):we(32823)}u(Se,"setPolygonOffset");function Ze(N){N?Oe(3089):we(3089)}u(Ze,"setScissorTest");function Ye(N){N===void 0&&(N=33984+B-1),F!==N&&(s.activeTexture(N),F=N)}u(Ye,"activeTexture");function E(N,pe){F===null&&Ye();let q=z[F];q===void 0&&(q={type:void 0,texture:void 0},z[F]=q),(q.type!==N||q.texture!==pe)&&(s.bindTexture(N,pe||$[N]),q.type=N,q.texture=pe)}u(E,"bindTexture");function b(){const N=z[F];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}u(b,"unbindTexture");function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(j,"compressedTexImage2D");function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(ne,"texSubImage2D");function ae(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(ae,"texSubImage3D");function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(he,"compressedTexSubImage2D");function Le(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(Le,"texStorage2D");function X(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(X,"texStorage3D");function xe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(xe,"texImage2D");function me(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}u(me,"texImage3D");function be(N){re.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),re.copy(N))}u(be,"scissor");function _e(N){ge.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}u(_e,"viewport");function Ie(N,pe){let q=d.get(pe);q===void 0&&(q=new WeakMap,d.set(pe,q));let fe=q.get(N);fe===void 0&&(fe=s.getUniformBlockIndex(pe,N.name),q.set(N,fe))}u(Ie,"updateUBOMapping");function Ge(N,pe){const fe=d.get(pe).get(N);h.get(N)!==fe&&(s.uniformBlockBinding(pe,fe,N.__bindingPointIndex),h.set(N,fe))}u(Ge,"uniformBlockBinding");function rt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},F=null,z={},m={},_=new WeakMap,g=[],p=null,v=!1,M=null,w=null,y=null,T=null,L=null,I=null,x=null,C=!1,O=null,R=null,V=null,D=null,P=null,re.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return u(rt,"reset"),{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:we,bindFramebuffer:Ce,drawBuffers:ue,useProgram:ze,setBlending:oe,setMaterial:ve,setFlipSided:ce,setCullFace:De,setLineWidth:Te,setPolygonOffset:Se,setScissorTest:Ze,activeTexture:Ye,bindTexture:E,unbindTexture:b,compressedTexImage2D:j,texImage2D:xe,texImage3D:me,updateUBOMapping:Ie,uniformBlockBinding:Ge,texStorage2D:Le,texStorage3D:X,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:he,scissor:be,viewport:_e,reset:rt}}u(d0,"WebGLState");function f0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,b){return v?new OffscreenCanvas(E,b):As("canvas")}u(M,"createCanvas");function w(E,b,j,ne){let ae=1;if((E.width>ne||E.height>ne)&&(ae=ne/Math.max(E.width,E.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const he=b?vr:Math.floor,Le=he(ae*E.width),X=he(ae*E.height);g===void 0&&(g=M(Le,X));const xe=j?M(Le,X):g;return xe.width=Le,xe.height=X,xe.getContext("2d").drawImage(E,0,0,Le,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Le+"x"+X+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}u(w,"resizeImage");function y(E){return ko(E.width)&&ko(E.height)}u(y,"isPowerOfTwo$1");function T(E){return a?!1:E.wrapS!==Ut||E.wrapT!==Ut||E.minFilter!==mt&&E.minFilter!==At}u(T,"textureNeedsPowerOfTwo");function L(E,b){return E.generateMipmaps&&b&&E.minFilter!==mt&&E.minFilter!==At}u(L,"textureNeedsGenerateMipmaps");function I(E){s.generateMipmap(E)}u(I,"generateMipmap");function x(E,b,j,ne,ae=!1){if(a===!1)return b;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he=b;return b===6403&&(j===5126&&(he=33326),j===5131&&(he=33325),j===5121&&(he=33321)),b===33319&&(j===5126&&(he=33328),j===5131&&(he=33327),j===5121&&(he=33323)),b===6408&&(j===5126&&(he=34836),j===5131&&(he=34842),j===5121&&(he=ne===je&&ae===!1?35907:32856),j===32819&&(he=32854),j===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}u(x,"getInternalFormat");function C(E,b,j){return L(E,j)===!0||E.isFramebufferTexture&&E.minFilter!==mt&&E.minFilter!==At?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}u(C,"getMipLevels");function O(E){return E===mt||E===No||E===Fo?9728:9729}u(O,"filterFallback");function R(E){const b=E.target;b.removeEventListener("dispose",R),D(b),b.isVideoTexture&&_.delete(b)}u(R,"onTextureDispose");function V(E){const b=E.target;b.removeEventListener("dispose",V),B(b)}u(V,"onRenderTargetDispose");function D(E){const b=n.get(E);if(b.__webglInit===void 0)return;const j=E.source,ne=p.get(j);if(ne){const ae=ne[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(E),Object.keys(ne).length===0&&p.delete(j)}n.remove(E)}u(D,"deallocateTexture");function P(E){const b=n.get(E);s.deleteTexture(b.__webglTexture);const j=E.source,ne=p.get(j);delete ne[b.__cacheKey],o.memory.textures--}u(P,"deleteTexture");function B(E){const b=E.texture,j=n.get(E),ne=n.get(b);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)s.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(s.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ae=0,he=b.length;ae<he;ae++){const Le=n.get(b[ae]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(b[ae])}n.remove(b),n.remove(E)}u(B,"deallocateRenderTarget");let G=0;function te(){G=0}u(te,"resetTextureUnits");function W(){const E=G;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),G+=1,E}u(W,"allocateTextureUnit");function F(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}u(F,"getTextureCacheKey");function z(E,b){const j=n.get(E);if(E.isVideoTexture&&Ze(E),E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(j,E,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,j.__webglTexture)}u(z,"setTexture2D");function ie(E,b){const j=n.get(E);if(E.version>0&&j.__version!==E.version){we(j,E,b);return}t.activeTexture(33984+b),t.bindTexture(35866,j.__webglTexture)}u(ie,"setTexture2DArray");function ee(E,b){const j=n.get(E);if(E.version>0&&j.__version!==E.version){we(j,E,b);return}t.activeTexture(33984+b),t.bindTexture(32879,j.__webglTexture)}u(ee,"setTexture3D");function re(E,b){const j=n.get(E);if(E.version>0&&j.__version!==E.version){Ce(j,E,b);return}t.activeTexture(33984+b),t.bindTexture(34067,j.__webglTexture)}u(re,"setTextureCube");const ge={[Bi]:10497,[Ut]:33071,[_r]:33648},Ee={[mt]:9728,[No]:9984,[Fo]:9986,[At]:9729,[Bc]:9985,[Yi]:9987};function $(E,b,j){if(j?(s.texParameteri(E,10242,ge[b.wrapS]),s.texParameteri(E,10243,ge[b.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,ge[b.wrapR]),s.texParameteri(E,10240,Ee[b.magFilter]),s.texParameteri(E,10241,Ee[b.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(b.wrapS!==Ut||b.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,O(b.magFilter)),s.texParameteri(E,10241,O(b.minFilter)),b.minFilter!==mt&&b.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(b.type===Pn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ws&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}u($,"setTextureParameters");function Oe(E,b){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R));const ne=b.source;let ae=p.get(ne);ae===void 0&&(ae={},p.set(ne,ae));const he=F(b);if(he!==E.__cacheKey){ae[he]===void 0&&(ae[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[he].usedTimes++;const Le=ae[E.__cacheKey];Le!==void 0&&(ae[E.__cacheKey].usedTimes--,Le.usedTimes===0&&P(b)),E.__cacheKey=he,E.__webglTexture=ae[he].texture}return j}u(Oe,"initTexture");function we(E,b,j){let ne=3553;b.isDataArrayTexture&&(ne=35866),b.isData3DTexture&&(ne=32879);const ae=Oe(E,b),he=b.source;if(t.activeTexture(33984+j),t.bindTexture(ne,E.__webglTexture),he.version!==he.__currentVersion||ae===!0){s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const Le=T(b)&&y(b.image)===!1;let X=w(b.image,Le,!1,h);X=Ye(b,X);const xe=y(X)||a,me=r.convert(b.format,b.encoding);let be=r.convert(b.type),_e=x(b.internalFormat,me,be,b.encoding,b.isVideoTexture);$(ne,b,xe);let Ie;const Ge=b.mipmaps,rt=a&&b.isVideoTexture!==!0,N=he.__currentVersion===void 0||ae===!0,pe=C(b,X,xe);if(b.isDepthTexture)_e=6402,a?b.type===Pn?_e=36012:b.type===ei?_e=33190:b.type===Ni?_e=35056:_e=33189:b.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ni&&_e===6402&&b.type!==Hc&&b.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ei,be=r.convert(b.type)),b.format===Hi&&_e===6402&&(_e=34041,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,be=r.convert(b.type))),N&&(rt?t.texStorage2D(3553,1,_e,X.width,X.height):t.texImage2D(3553,0,_e,X.width,X.height,0,me,be,null));else if(b.isDataTexture)if(Ge.length>0&&xe){rt&&N&&t.texStorage2D(3553,pe,_e,Ge[0].width,Ge[0].height);for(let q=0,fe=Ge.length;q<fe;q++)Ie=Ge[q],rt?t.texSubImage2D(3553,q,0,0,Ie.width,Ie.height,me,be,Ie.data):t.texImage2D(3553,q,_e,Ie.width,Ie.height,0,me,be,Ie.data);b.generateMipmaps=!1}else rt?(N&&t.texStorage2D(3553,pe,_e,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,me,be,X.data)):t.texImage2D(3553,0,_e,X.width,X.height,0,me,be,X.data);else if(b.isCompressedTexture){rt&&N&&t.texStorage2D(3553,pe,_e,Ge[0].width,Ge[0].height);for(let q=0,fe=Ge.length;q<fe;q++)Ie=Ge[q],b.format!==Xt?me!==null?rt?t.compressedTexSubImage2D(3553,q,0,0,Ie.width,Ie.height,me,Ie.data):t.compressedTexImage2D(3553,q,_e,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(3553,q,0,0,Ie.width,Ie.height,me,be,Ie.data):t.texImage2D(3553,q,_e,Ie.width,Ie.height,0,me,be,Ie.data)}else if(b.isDataArrayTexture)rt?(N&&t.texStorage3D(35866,pe,_e,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,me,be,X.data)):t.texImage3D(35866,0,_e,X.width,X.height,X.depth,0,me,be,X.data);else if(b.isData3DTexture)rt?(N&&t.texStorage3D(32879,pe,_e,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,me,be,X.data)):t.texImage3D(32879,0,_e,X.width,X.height,X.depth,0,me,be,X.data);else if(b.isFramebufferTexture){if(N)if(rt)t.texStorage2D(3553,pe,_e,X.width,X.height);else{let q=X.width,fe=X.height;for(let de=0;de<pe;de++)t.texImage2D(3553,de,_e,q,fe,0,me,be,null),q>>=1,fe>>=1}}else if(Ge.length>0&&xe){rt&&N&&t.texStorage2D(3553,pe,_e,Ge[0].width,Ge[0].height);for(let q=0,fe=Ge.length;q<fe;q++)Ie=Ge[q],rt?t.texSubImage2D(3553,q,0,0,me,be,Ie):t.texImage2D(3553,q,_e,me,be,Ie);b.generateMipmaps=!1}else rt?(N&&t.texStorage2D(3553,pe,_e,X.width,X.height),t.texSubImage2D(3553,0,0,0,me,be,X)):t.texImage2D(3553,0,_e,me,be,X);L(b,xe)&&I(ne),he.__currentVersion=he.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}u(we,"uploadTexture");function Ce(E,b,j){if(b.image.length!==6)return;const ne=Oe(E,b),ae=b.source;if(t.activeTexture(33984+j),t.bindTexture(34067,E.__webglTexture),ae.version!==ae.__currentVersion||ne===!0){s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,Le=b.image[0]&&b.image[0].isDataTexture,X=[];for(let q=0;q<6;q++)!he&&!Le?X[q]=w(b.image[q],!1,!0,c):X[q]=Le?b.image[q].image:b.image[q],X[q]=Ye(b,X[q]);const xe=X[0],me=y(xe)||a,be=r.convert(b.format,b.encoding),_e=r.convert(b.type),Ie=x(b.internalFormat,be,_e,b.encoding),Ge=a&&b.isVideoTexture!==!0,rt=ae.__currentVersion===void 0||ne===!0;let N=C(b,xe,me);$(34067,b,me);let pe;if(he){Ge&&rt&&t.texStorage2D(34067,N,Ie,xe.width,xe.height);for(let q=0;q<6;q++){pe=X[q].mipmaps;for(let fe=0;fe<pe.length;fe++){const de=pe[fe];b.format!==Xt?be!==null?Ge?t.compressedTexSubImage2D(34069+q,fe,0,0,de.width,de.height,be,de.data):t.compressedTexImage2D(34069+q,fe,Ie,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+q,fe,0,0,de.width,de.height,be,_e,de.data):t.texImage2D(34069+q,fe,Ie,de.width,de.height,0,be,_e,de.data)}}}else{pe=b.mipmaps,Ge&&rt&&(pe.length>0&&N++,t.texStorage2D(34067,N,Ie,X[0].width,X[0].height));for(let q=0;q<6;q++)if(Le){Ge?t.texSubImage2D(34069+q,0,0,0,X[q].width,X[q].height,be,_e,X[q].data):t.texImage2D(34069+q,0,Ie,X[q].width,X[q].height,0,be,_e,X[q].data);for(let fe=0;fe<pe.length;fe++){const Ve=pe[fe].image[q].image;Ge?t.texSubImage2D(34069+q,fe+1,0,0,Ve.width,Ve.height,be,_e,Ve.data):t.texImage2D(34069+q,fe+1,Ie,Ve.width,Ve.height,0,be,_e,Ve.data)}}else{Ge?t.texSubImage2D(34069+q,0,0,0,be,_e,X[q]):t.texImage2D(34069+q,0,Ie,be,_e,X[q]);for(let fe=0;fe<pe.length;fe++){const de=pe[fe];Ge?t.texSubImage2D(34069+q,fe+1,0,0,be,_e,de.image[q]):t.texImage2D(34069+q,fe+1,Ie,be,_e,de.image[q])}}}L(b,me)&&I(34067),ae.__currentVersion=ae.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}u(Ce,"uploadCubeTexture");function ue(E,b,j,ne,ae){const he=r.convert(j.format,j.encoding),Le=r.convert(j.type),X=x(j.internalFormat,he,Le,j.encoding);n.get(b).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,X,b.width,b.height,b.depth,0,he,Le,null):t.texImage2D(ae,0,X,b.width,b.height,0,he,Le,null)),t.bindFramebuffer(36160,E),Se(b)?f.framebufferTexture2DMultisampleEXT(36160,ne,ae,n.get(j).__webglTexture,0,Te(b)):s.framebufferTexture2D(36160,ne,ae,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}u(ue,"setupFrameBufferTexture");function ze(E,b,j){if(s.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let ne=33189;if(j||Se(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Pn?ne=36012:ae.type===ei&&(ne=33190));const he=Te(b);Se(b)?f.renderbufferStorageMultisampleEXT(36161,he,ne,b.width,b.height):s.renderbufferStorageMultisample(36161,he,ne,b.width,b.height)}else s.renderbufferStorage(36161,ne,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const ne=Te(b);j&&Se(b)===!1?s.renderbufferStorageMultisample(36161,ne,35056,b.width,b.height):Se(b)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<ne.length;ae++){const he=ne[ae],Le=r.convert(he.format,he.encoding),X=r.convert(he.type),xe=x(he.internalFormat,Le,X,he.encoding),me=Te(b);j&&Se(b)===!1?s.renderbufferStorageMultisample(36161,me,xe,b.width,b.height):Se(b)?f.renderbufferStorageMultisampleEXT(36161,me,xe,b.width,b.height):s.renderbufferStorage(36161,xe,b.width,b.height)}}s.bindRenderbuffer(36161,null)}u(ze,"setupRenderBufferStorage");function Q(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const ne=n.get(b.depthTexture).__webglTexture,ae=Te(b);if(b.depthTexture.format===ni)Se(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ae):s.framebufferTexture2D(36160,36096,3553,ne,0);else if(b.depthTexture.format===Hi)Se(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ae):s.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}u(Q,"setupDepthTexture");function J(E){const b=n.get(E),j=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Q(b.__webglFramebuffer,E)}else if(j){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=s.createRenderbuffer(),ze(b.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),ze(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}u(J,"setupDepthRenderbuffer");function oe(E,b,j){const ne=n.get(E);b!==void 0&&ue(ne.__webglFramebuffer,E,E.texture,36064,3553),j!==void 0&&J(E)}u(oe,"rebindTextures");function ve(E){const b=E.texture,j=n.get(E),ne=n.get(b);E.addEventListener("dispose",V),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=b.version,o.memory.textures++);const ae=E.isWebGLCubeRenderTarget===!0,he=E.isWebGLMultipleRenderTargets===!0,Le=y(E)||a;if(ae){j.__webglFramebuffer=[];for(let X=0;X<6;X++)j.__webglFramebuffer[X]=s.createFramebuffer()}else{if(j.__webglFramebuffer=s.createFramebuffer(),he)if(i.drawBuffers){const X=E.texture;for(let xe=0,me=X.length;xe<me;xe++){const be=n.get(X[xe]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Se(E)===!1){const X=he?b:[b];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let xe=0;xe<X.length;xe++){const me=X[xe];j.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(36161,j.__webglColorRenderbuffer[xe]);const be=r.convert(me.format,me.encoding),_e=r.convert(me.type),Ie=x(me.internalFormat,be,_e,me.encoding),Ge=Te(E);s.renderbufferStorageMultisample(36161,Ge,Ie,E.width,E.height),s.framebufferRenderbuffer(36160,36064+xe,36161,j.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(j.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,ne.__webglTexture),$(34067,b,Le);for(let X=0;X<6;X++)ue(j.__webglFramebuffer[X],E,b,36064,34069+X);L(b,Le)&&I(34067),t.unbindTexture()}else if(he){const X=E.texture;for(let xe=0,me=X.length;xe<me;xe++){const be=X[xe],_e=n.get(be);t.bindTexture(3553,_e.__webglTexture),$(3553,be,Le),ue(j.__webglFramebuffer,E,be,36064+xe,3553),L(be,Le)&&I(3553)}t.unbindTexture()}else{let X=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?X=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,ne.__webglTexture),$(X,b,Le),ue(j.__webglFramebuffer,E,b,36064,X),L(b,Le)&&I(X),t.unbindTexture()}E.depthBuffer&&J(E)}u(ve,"setupRenderTarget");function ce(E){const b=y(E)||a,j=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ae=j.length;ne<ae;ne++){const he=j[ne];if(L(he,b)){const Le=E.isWebGLCubeRenderTarget?34067:3553,X=n.get(he).__webglTexture;t.bindTexture(Le,X),I(Le),t.unbindTexture()}}}u(ce,"updateRenderTargetMipmap");function De(E){if(a&&E.samples>0&&Se(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],j=E.width,ne=E.height;let ae=16384;const he=[],Le=E.stencilBuffer?33306:36096,X=n.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let me=0;me<b.length;me++)t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,X.__webglFramebuffer),s.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer);for(let me=0;me<b.length;me++){he.push(36064+me),E.depthBuffer&&he.push(Le);const be=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(be===!1&&(E.depthBuffer&&(ae|=256),E.stencilBuffer&&(ae|=1024)),xe&&s.framebufferRenderbuffer(36008,36064,36161,X.__webglColorRenderbuffer[me]),be===!0&&(s.invalidateFramebuffer(36008,[Le]),s.invalidateFramebuffer(36009,[Le])),xe){const _e=n.get(b[me]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,_e,0)}s.blitFramebuffer(0,0,j,ne,0,0,j,ne,ae,9728),m&&s.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),xe)for(let me=0;me<b.length;me++){t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+me,36161,X.__webglColorRenderbuffer[me]);const be=n.get(b[me]).__webglTexture;t.bindFramebuffer(36160,X.__webglFramebuffer),s.framebufferTexture2D(36009,36064+me,3553,be,0)}t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}}u(De,"updateMultisampleRenderTarget");function Te(E){return Math.min(d,E.samples)}u(Te,"getRenderTargetSamples");function Se(E){const b=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}u(Se,"useMultisampledRTT");function Ze(E){const b=o.render.frame;_.get(E)!==b&&(_.set(E,b),E.update())}u(Ze,"updateVideoTexture");function Ye(E,b){const j=E.encoding,ne=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===zo||j!==oi&&(j===je?a===!1?e.has("EXT_sRGB")===!0&&ne===Xt?(E.format=zo,E.minFilter=At,E.generateMipmaps=!1):b=aa.sRGBToLinear(b):(ne!==Xt||ae!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),b}u(Ye,"verifyColorSpace"),this.allocateTextureUnit=W,this.resetTextureUnits=te,this.setTexture2D=z,this.setTexture2DArray=ie,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=oe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Se}u(f0,"WebGLTextures");function p0(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===ri)return 5121;if(r===rf)return 32819;if(r===of)return 32820;if(r===tf)return 5120;if(r===nf)return 5122;if(r===Hc)return 5123;if(r===sf)return 5124;if(r===ei)return 5125;if(r===Pn)return 5126;if(r===ws)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===af)return 6406;if(r===Xt)return 6408;if(r===cf)return 6409;if(r===uf)return 6410;if(r===ni)return 6402;if(r===Hi)return 34041;if(r===hf)return 6403;if(r===lf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===zo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===df)return 36244;if(r===ff)return 33319;if(r===pf)return 33320;if(r===mf)return 36249;if(r===jr||r===Xr||r===qr||r===Yr)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Va||r===Ga||r===Wa||r===ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Va)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ga)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xa||r===qa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Xa)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ya||r===Ka||r===$a||r===Ja||r===Za||r===Qa||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===ol||r===al)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ya)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ka)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$a)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ja)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Za)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===el)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===il)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ol)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===al)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ll)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ll)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ni?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return u(i,"convert"),{convert:i}}u(p0,"WebGLUtils");class au extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}u(au,"ArrayCamera");class et extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}u(et,"Group$1");const m0={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const M=new et;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[g.jointName]=M,c.add(M)}const v=c.joints[g.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}u(mr,"WebXRController");class lu extends _t{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:ni,h!==ni&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=ei),n===void 0&&h===Hi&&(n=Ni),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1}}u(lu,"DepthTexture");class cu extends Bn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const v=[],M=[],w=new yt;w.layers.enable(1),w.viewport=new Ke;const y=new yt;y.layers.enable(2),y.viewport=new Ke;const T=[w,y],L=new au;L.layers.enable(1),L.layers.enable(2);let I=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let z=v[F];return z===void 0&&(z=new mr,v[F]=z),z.getTargetRaySpace()},this.getControllerGrip=function(F){let z=v[F];return z===void 0&&(z=new mr,v[F]=z),z.getGripSpace()},this.getHand=function(F){let z=v[F];return z===void 0&&(z=new mr,v[F]=z),z.getHandSpace()};function C(F){const z=M.indexOf(F.inputSource);if(z===-1)return;const ie=v[z];ie!==void 0&&ie.dispatchEvent({type:F.type,data:F.inputSource})}u(C,"onSessionEvent");function O(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",R);for(let F=0;F<v.length;F++){const z=M[F];z!==null&&(M[F]=null,v[F].disconnect(z))}I=null,x=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}u(O,"onSessionEnd"),this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",O),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:f}),p=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Xt,type:ri,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let z=null,ie=null,ee=null;_.depth&&(ee=_.stencil?35056:33190,z=_.stencil?Hi:ni,ie=_.stencil?Ni:ei);const re={colorFormat:32856,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(re),i.updateRenderState({layers:[d]}),p=new Nn(d.textureWidth,d.textureHeight,{format:Xt,type:ri,depthTexture:new lu(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ge=e.properties.get(p);ge.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(F){for(let z=0;z<F.removed.length;z++){const ie=F.removed[z],ee=M.indexOf(ie);ee>=0&&(M[ee]=null,v[ee].dispatchEvent({type:"disconnected",data:ie}))}for(let z=0;z<F.added.length;z++){const ie=F.added[z];let ee=M.indexOf(ie);if(ee===-1){for(let ge=0;ge<v.length;ge++)if(ge>=M.length){M.push(ie),ee=ge;break}else if(M[ge]===null){M[ge]=ie,ee=ge;break}if(ee===-1)break}const re=v[ee];re&&re.dispatchEvent({type:"connected",data:ie})}}u(R,"onInputSourcesChange");const V=new A,D=new A;function P(F,z,ie){V.setFromMatrixPosition(z.matrixWorld),D.setFromMatrixPosition(ie.matrixWorld);const ee=V.distanceTo(D),re=z.projectionMatrix.elements,ge=ie.projectionMatrix.elements,Ee=re[14]/(re[10]-1),$=re[14]/(re[10]+1),Oe=(re[9]+1)/re[5],we=(re[9]-1)/re[5],Ce=(re[8]-1)/re[0],ue=(ge[8]+1)/ge[0],ze=Ee*Ce,Q=Ee*ue,J=ee/(-Ce+ue),oe=J*-Ce;z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(oe),F.translateZ(J),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ve=Ee+J,ce=$+J,De=ze-oe,Te=Q+(ee-oe),Se=Oe*$/ce*ve,Ze=we*$/ce*ve;F.projectionMatrix.makePerspective(De,Te,Se,Ze,ve,ce)}u(P,"setProjectionFromUnion");function B(F,z){z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}u(B,"updateCamera"),this.updateCamera=function(F){if(i===null)return;L.near=y.near=w.near=F.near,L.far=y.far=w.far=F.far,(I!==L.near||x!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,x=L.far);const z=F.parent,ie=L.cameras;B(L,z);for(let re=0;re<ie.length;re++)B(ie[re],z);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),F.matrix.copy(L.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const ee=F.children;for(let re=0,ge=ee.length;re<ge;re++)ee[re].updateMatrixWorld(!0);ie.length===2?P(L,w,y):L.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let G=null;function te(F,z){if(c=z.getViewerPose(l||o),m=z,c!==null){const ie=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ee=!1;ie.length!==L.cameras.length&&(L.cameras.length=0,ee=!0);for(let re=0;re<ie.length;re++){const ge=ie[re];let Ee=null;if(f!==null)Ee=f.getViewport(ge);else{const Oe=h.getViewSubImage(d,ge);Ee=Oe.viewport,re===0&&(e.setRenderTargetTextures(p,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(p))}let $=T[re];$===void 0&&($=new yt,$.layers.enable(re),$.viewport=new Ke,T[re]=$),$.matrix.fromArray(ge.transform.matrix),$.projectionMatrix.fromArray(ge.projectionMatrix),$.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),re===0&&L.matrix.copy($.matrix),ee===!0&&L.cameras.push($)}}for(let ie=0;ie<v.length;ie++){const ee=M[ie],re=v[ie];ee!==null&&re!==void 0&&re.update(ee,z,l||o)}G&&G(F,z),m=null}u(te,"onAnimationFrame");const W=new Kc;W.setAnimationLoop(te),this.setAnimationLoop=function(F){G=F},this.dispose=function(){}}}u(cu,"WebXRManager");function g0(s,e){function t(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}u(t,"refreshFogUniforms");function n(g,p,v,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(g,p):p.isMeshToonMaterial?(i(g,p),h(g,p)):p.isMeshPhongMaterial?(i(g,p),c(g,p)):p.isMeshStandardMaterial?(i(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(i(g,p),m(g,p)):p.isMeshDepthMaterial?i(g,p):p.isMeshDistanceMaterial?(i(g,p),_(g,p)):p.isMeshNormalMaterial?i(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?a(g,p,v,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}u(n,"refreshMaterialUniforms");function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===zt&&(g.bumpScale.value*=-1)),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===zt&&g.normalScale.value.negate()),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}u(i,"refreshUniformsCommon");function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}u(r,"refreshUniformsLine");function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}u(o,"refreshUniformsDash");function a(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}u(a,"refreshUniformsPoints");function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),g.uvTransform.value.copy(v.matrix))}u(l,"refreshUniformsSprites");function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}u(c,"refreshUniformsPhong");function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}u(h,"refreshUniformsToon");function d(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}u(d,"refreshUniformsStandard");function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===zt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}u(f,"refreshUniformsPhysical");function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}u(m,"refreshUniformsMatcap");function _(g,p){g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:t,refreshMaterialUniforms:n}}u(g0,"WebGLMaterials");function _0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(M,w){const y=w.program;n.uniformBlockBinding(M,y)}u(l,"bind");function c(M,w){let y=i[M.id];y===void 0&&(_(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",p));const T=w.program;n.updateUBOMapping(M,T);const L=e.render.frame;r[M.id]!==L&&(f(M),r[M.id]=L)}u(c,"update");function h(M){const w=d();M.__bindingPointIndex=w;const y=s.createBuffer(),T=M.__size,L=M.usage;return s.bindBuffer(35345,y),s.bufferData(35345,T,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,y),y}u(h,"createBuffer");function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}u(d,"allocateBindingPointIndex");function f(M){const w=i[M.id],y=M.uniforms,T=M.__cache;s.bindBuffer(35345,w);for(let L=0,I=y.length;L<I;L++){const x=y[L];if(m(x,L,T)===!0){const C=x.value,O=x.__offset;typeof C=="number"?(x.__data[0]=C,s.bufferSubData(35345,O,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):C.toArray(x.__data),s.bufferSubData(35345,O,x.__data))}}s.bindBuffer(35345,null)}u(f,"updateBufferData");function m(M,w,y){const T=M.value;if(y[w]===void 0)return typeof T=="number"?y[w]=T:y[w]=T.clone(),!0;if(typeof T=="number"){if(y[w]!==T)return y[w]=T,!0}else{const L=y[w];if(L.equals(T)===!1)return L.copy(T),!0}return!1}u(m,"hasUniformChanged");function _(M){const w=M.uniforms;let y=0;const T=16;let L=0;for(let I=0,x=w.length;I<x;I++){const C=w[I],O=g(C);if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,I>0){L=y%T;const R=T-L;L!==0&&R-O.boundary<0&&(y+=T-L,C.__offset=y)}y+=O.storage}return L=y%T,L>0&&(y+=T-L),M.__size=y,M.__cache={},this}u(_,"prepareUniformsGroup");function g(M){const w=M.value,y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}u(g,"getUniformSize");function p(M){const w=M.target;w.removeEventListener("dispose",p);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}u(p,"onUniformsGroupsDispose");function v(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return u(v,"dispose"),{bind:l,update:c,dispose:v}}u(_0,"WebGLUniformsGroups");function v0(){const s=As("canvas");return s.style.display="block",s}u(v0,"createCanvasElement");function uu(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:v0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oi,this.physicallyCorrectLights=!1,this.toneMapping=_n,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let p=!1,v=0,M=0,w=null,y=-1,T=null;const L=new Ke,I=new Ke;let x=null,C=e.width,O=e.height,R=1,V=null,D=null;const P=new Ke(0,0,C,O),B=new Ke(0,0,C,O);let G=!1;const te=new Ar;let W=!1,F=!1,z=null;const ie=new ke,ee=new se,re=new A,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return w===null?R:1}u(Ee,"getTargetPixelRatio");let $=t;function Oe(S,k){for(let Y=0;Y<S.length;Y++){const U=S[Y],K=e.getContext(U,k);if(K!==null)return K}return null}u(Oe,"getContext");try{const S={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Ge,!1),e.addEventListener("webglcontextcreationerror",rt,!1),$===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),$=Oe(k,S),$===null)throw Oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let we,Ce,ue,ze,Q,J,oe,ve,ce,De,Te,Se,Ze,Ye,E,b,j,ne,ae,he,Le,X,xe,me;function be(){we=new kg($),Ce=new Ig($,we,s),we.init(Ce),X=new p0($,we,Ce),ue=new d0($,we,Ce),ze=new Vg,Q=new e0,J=new f0($,we,ue,Q,Ce,X,ze),oe=new Ng(g),ve=new zg(g),ce=new Qf($,Ce),xe=new Pg($,we,ce,Ce),De=new Bg($,ce,ze,xe),Te=new Xg($,De,ce,ze),ae=new jg($,Ce,J),b=new Og(Q),Se=new Q_(g,oe,ve,we,Ce,xe,b),Ze=new g0(g,Q),Ye=new n0,E=new l0(we,Ce),ne=new Rg(g,oe,ue,Te,h,o),j=new h0(g,Te,Ce),me=new _0($,ze,Ce,ue),he=new Dg($,we,ze,Ce),Le=new Hg($,we,ze,Ce),ze.programs=Se.programs,g.capabilities=Ce,g.extensions=we,g.properties=Q,g.renderLists=Ye,g.shadowMap=j,g.state=ue,g.info=ze}u(be,"initGLContext"),be();const _e=new cu(g,$);this.xr=_e,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const S=we.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=we.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(S){S!==void 0&&(R=S,this.setSize(C,O,!1))},this.getSize=function(S){return S.set(C,O)},this.setSize=function(S,k,Y){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=S,O=k,e.width=Math.floor(S*R),e.height=Math.floor(k*R),Y!==!1&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(C*R,O*R).floor()},this.setDrawingBufferSize=function(S,k,Y){C=S,O=k,R=Y,e.width=Math.floor(S*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,k,Y,U){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,k,Y,U),ue.viewport(L.copy(P).multiplyScalar(R).floor())},this.getScissor=function(S){return S.copy(B)},this.setScissor=function(S,k,Y,U){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,k,Y,U),ue.scissor(I.copy(B).multiplyScalar(R).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(S){ue.setScissorTest(G=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){D=S},this.getClearColor=function(S){return S.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(S=!0,k=!0,Y=!0){let U=0;S&&(U|=16384),k&&(U|=256),Y&&(U|=1024),$.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Ge,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Ye.dispose(),E.dispose(),Q.dispose(),oe.dispose(),ve.dispose(),Te.dispose(),xe.dispose(),me.dispose(),Se.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ve),_e.removeEventListener("sessionend",ht),z&&(z.dispose(),z=null),ot.stop()};function Ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}u(Ie,"onContextLost");function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=ze.autoReset,k=j.enabled,Y=j.autoUpdate,U=j.needsUpdate,K=j.type;be(),ze.autoReset=S,j.enabled=k,j.autoUpdate=Y,j.needsUpdate=U,j.type=K}u(Ge,"onContextRestore");function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}u(rt,"onContextCreationError");function N(S){const k=S.target;k.removeEventListener("dispose",N),pe(k)}u(N,"onMaterialDispose");function pe(S){q(S),Q.remove(S)}u(pe,"deallocateMaterial");function q(S){const k=Q.get(S).programs;k!==void 0&&(k.forEach(function(Y){Se.releaseProgram(Y)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}u(q,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(S,k,Y,U,K,Me){k===null&&(k=ge);const Re=K.isMesh&&K.matrixWorld.determinant()<0,Ne=Yh(S,k,Y,U,K);ue.setMaterial(U,Re);let Pe=Y.index;const qe=Y.attributes.position;if(Pe===null){if(qe===void 0||qe.count===0)return}else if(Pe.count===0)return;let Be=1;U.wireframe===!0&&(Pe=De.getWireframeAttribute(Y),Be=2),xe.setup(K,U,Ne,Y,Pe);let He,it=he;Pe!==null&&(He=ce.get(Pe),it=Le,it.setIndex(He));const Xn=Pe!==null?Pe.count:qe.count,ui=Y.drawRange.start*Be,hi=Y.drawRange.count*Be,Zt=Me!==null?Me.start*Be:0,We=Me!==null?Me.count*Be:1/0,di=Math.max(ui,Zt),at=Math.min(Xn,ui+hi,Zt+We)-1,Nt=Math.max(0,at-di+1);if(Nt!==0){if(K.isMesh)U.wireframe===!0?(ue.setLineWidth(U.wireframeLinewidth*Ee()),it.setMode(1)):it.setMode(4);else if(K.isLine){let xn=U.linewidth;xn===void 0&&(xn=1),ue.setLineWidth(xn*Ee()),K.isLineSegments?it.setMode(1):K.isLineLoop?it.setMode(2):it.setMode(3)}else K.isPoints?it.setMode(0):K.isSprite&&it.setMode(4);if(K.isInstancedMesh)it.renderInstances(di,Nt,K.count);else if(Y.isInstancedBufferGeometry){const xn=Math.min(Y.instanceCount,Y._maxInstanceCount);it.renderInstances(di,Nt,xn)}else it.render(di,Nt)}},this.compile=function(S,k){function Y(U,K,Me){U.transparent===!0&&U.side===nn?(U.side=zt,U.needsUpdate=!0,zs(U,K,Me),U.side=si,U.needsUpdate=!0,zs(U,K,Me),U.side=nn):zs(U,K,Me)}u(Y,"prepare"),f=E.get(S),f.init(),_.push(f),S.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(g.physicallyCorrectLights),S.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let Me=0;Me<K.length;Me++){const Re=K[Me];Y(Re,S,U)}else Y(K,S,U)}),_.pop(),f=null};let fe=null;function de(S){fe&&fe(S)}u(de,"onAnimationFrame");function Ve(){ot.stop()}u(Ve,"onXRSessionStart");function ht(){ot.start()}u(ht,"onXRSessionEnd");const ot=new Kc;ot.setAnimationLoop(de),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(S){fe=S,_e.setAnimationLoop(S),S===null?ot.stop():ot.start()},_e.addEventListener("sessionstart",Ve),_e.addEventListener("sessionend",ht),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(k),k=_e.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,k,w),f=E.get(S,_.length),f.init(),_.push(f),ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(ie),F=this.localClippingEnabled,W=b.init(this.clippingPlanes,F,k),d=Ye.get(S,m.length),d.init(),m.push(d),vn(S,k,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(V,D),W===!0&&b.beginShadows();const Y=f.state.shadowsArray;if(j.render(Y,S,k),W===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,S),f.setupLights(g.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let K=0,Me=U.length;K<Me;K++){const Re=U[K];nt(d,S,Re,Re.viewport)}}else nt(d,S,k);w!==null&&(J.updateMultisampleRenderTarget(w),J.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(g,S,k),xe.resetDefaultState(),y=-1,T=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function vn(S,k,Y,U){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){U&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Re=Te.update(S),Ne=S.material;Ne.visible&&d.push(S,Re,Ne,Y,re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==ze.render.frame&&(S.skeleton.update(),S.skeleton.frame=ze.render.frame),!S.frustumCulled||te.intersectsObject(S))){U&&re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Re=Te.update(S),Ne=S.material;if(Array.isArray(Ne)){const Pe=Re.groups;for(let qe=0,Be=Pe.length;qe<Be;qe++){const He=Pe[qe],it=Ne[He.materialIndex];it&&it.visible&&d.push(S,Re,it,Y,re.z,He)}}else Ne.visible&&d.push(S,Re,Ne,Y,re.z,null)}}const Me=S.children;for(let Re=0,Ne=Me.length;Re<Ne;Re++)vn(Me[Re],k,Y,U)}u(vn,"projectObject");function nt(S,k,Y,U){const K=S.opaque,Me=S.transmissive,Re=S.transparent;f.setupLightsView(Y),Me.length>0&&an(K,k,Y),U&&ue.viewport(L.copy(U)),K.length>0&&Ot(K,k,Y),Me.length>0&&Ot(Me,k,Y),Re.length>0&&Ot(Re,k,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}u(nt,"renderScene");function an(S,k,Y){const U=Ce.isWebGL2;z===null&&(z=new Nn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?ws:ri,minFilter:Yi,samples:U&&r===!0?4:0})),g.getDrawingBufferSize(ee),U?z.setSize(ee.x,ee.y):z.setSize(vr(ee.x),vr(ee.y));const K=g.getRenderTarget();g.setRenderTarget(z),g.clear();const Me=g.toneMapping;g.toneMapping=_n,Ot(S,k,Y),g.toneMapping=Me,J.updateMultisampleRenderTarget(z),J.updateRenderTargetMipmap(z),g.setRenderTarget(K)}u(an,"renderTransmissionPass");function Ot(S,k,Y){const U=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Me=S.length;K<Me;K++){const Re=S[K],Ne=Re.object,Pe=Re.geometry,qe=U===null?Re.material:U,Be=Re.group;Ne.layers.test(Y.layers)&&qh(Ne,k,Y,Pe,qe,Be)}}u(Ot,"renderObjects");function qh(S,k,Y,U,K,Me){S.onBeforeRender(g,k,Y,U,K,Me),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),K.onBeforeRender(g,k,Y,U,S,Me),K.transparent===!0&&K.side===nn?(K.side=zt,K.needsUpdate=!0,g.renderBufferDirect(Y,k,U,K,S,Me),K.side=si,K.needsUpdate=!0,g.renderBufferDirect(Y,k,U,K,S,Me),K.side=nn):g.renderBufferDirect(Y,k,U,K,S,Me),S.onAfterRender(g,k,Y,U,K,Me)}u(qh,"renderObject");function zs(S,k,Y){k.isScene!==!0&&(k=ge);const U=Q.get(S),K=f.state.lights,Me=f.state.shadowsArray,Re=K.state.version,Ne=Se.getParameters(S,K.state,Me,k,Y),Pe=Se.getProgramCacheKey(Ne);let qe=U.programs;U.environment=S.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(S.isMeshStandardMaterial?ve:oe).get(S.envMap||U.environment),qe===void 0&&(S.addEventListener("dispose",N),qe=new Map,U.programs=qe);let Be=qe.get(Pe);if(Be!==void 0){if(U.currentProgram===Be&&U.lightsStateVersion===Re)return Da(S,Ne),Be}else Ne.uniforms=Se.getUniforms(S),S.onBuild(Y,Ne,g),S.onBeforeCompile(Ne,g),Be=Se.acquireProgram(Ne,Pe),qe.set(Pe,Be),U.uniforms=Ne.uniforms;const He=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=b.uniform),Da(S,Ne),U.needsLights=$h(S),U.lightsStateVersion=Re,U.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix);const it=Be.getUniforms(),Xn=vs.seqWithValue(it.seq,He);return U.currentProgram=Be,U.uniformsList=Xn,Be}u(zs,"getProgram");function Da(S,k){const Y=Q.get(S);Y.outputEncoding=k.outputEncoding,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}u(Da,"updateCommonMaterialProperties");function Yh(S,k,Y,U,K){k.isScene!==!0&&(k=ge),J.resetTextureUnits();const Me=k.fog,Re=U.isMeshStandardMaterial?k.environment:null,Ne=w===null?g.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:oi,Pe=(U.isMeshStandardMaterial?ve:oe).get(U.envMap||Re),qe=U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!U.normalMap&&!!Y.attributes.tangent,He=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,Xn=!!Y.morphAttributes.color,ui=U.toneMapped?g.toneMapping:_n,hi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Zt=hi!==void 0?hi.length:0,We=Q.get(U),di=f.state.lights;if(W===!0&&(F===!0||S!==T)){const Rt=S===T&&U.id===y;b.setState(U,S,Rt)}let at=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==di.state.version||We.outputEncoding!==Ne||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||We.envMap!==Pe||U.fog===!0&&We.fog!==Me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==b.numPlanes||We.numIntersection!==b.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Be||We.morphTargets!==He||We.morphNormals!==it||We.morphColors!==Xn||We.toneMapping!==ui||Ce.isWebGL2===!0&&We.morphTargetsCount!==Zt)&&(at=!0):(at=!0,We.__version=U.version);let Nt=We.currentProgram;at===!0&&(Nt=zs(U,k,K));let xn=!1,ns=!1,Vr=!1;const bt=Nt.getUniforms(),qn=We.uniforms;if(ue.useProgram(Nt.program)&&(xn=!0,ns=!0,Vr=!0),U.id!==y&&(y=U.id,ns=!0),xn||T!==S){if(bt.setValue($,"projectionMatrix",S.projectionMatrix),Ce.logarithmicDepthBuffer&&bt.setValue($,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),T!==S&&(T=S,ns=!0,Vr=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Rt=bt.map.cameraPosition;Rt!==void 0&&Rt.setValue($,re.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&bt.setValue($,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&bt.setValue($,"viewMatrix",S.matrixWorldInverse)}if(K.isSkinnedMesh){bt.setOptional($,K,"bindMatrix"),bt.setOptional($,K,"bindMatrixInverse");const Rt=K.skeleton;Rt&&(Ce.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),bt.setValue($,"boneTexture",Rt.boneTexture,J),bt.setValue($,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gr=Y.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&Ce.isWebGL2===!0)&&ae.update(K,Y,U,Nt),(ns||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,bt.setValue($,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(qn.envMap.value=Pe,qn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ns&&(bt.setValue($,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&Kh(qn,Vr),Me&&U.fog===!0&&Ze.refreshFogUniforms(qn,Me),Ze.refreshMaterialUniforms(qn,U,R,O,z),vs.upload($,We.uniformsList,qn,J)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(vs.upload($,We.uniformsList,qn,J),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&bt.setValue($,"center",K.center),bt.setValue($,"modelViewMatrix",K.modelViewMatrix),bt.setValue($,"normalMatrix",K.normalMatrix),bt.setValue($,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Rt=U.uniformsGroups;for(let Wr=0,Jh=Rt.length;Wr<Jh;Wr++)if(Ce.isWebGL2){const Ia=Rt[Wr];me.update(Ia,Nt),me.bind(Ia,Nt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nt}u(Yh,"setProgram");function Kh(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}u(Kh,"markUniformsLightsNeedsUpdate");function $h(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}u($h,"materialNeedsLights"),this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,k,Y){Q.get(S.texture).__webglTexture=k,Q.get(S.depthTexture).__webglTexture=Y;const U=Q.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Y===void 0,U.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,k){const Y=Q.get(S);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,Y=0){w=S,v=k,M=Y;let U=!0;if(S){const Pe=Q.get(S);Pe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),U=!1):Pe.__webglFramebuffer===void 0?J.setupRenderTarget(S):Pe.__hasExternalTextures&&J.rebindTextures(S,Q.get(S.texture).__webglTexture,Q.get(S.depthTexture).__webglTexture)}let K=null,Me=!1,Re=!1;if(S){const Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Re=!0);const qe=Q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(K=qe[k],Me=!0):Ce.isWebGL2&&S.samples>0&&J.useMultisampledRTT(S)===!1?K=Q.get(S).__webglMultisampledFramebuffer:K=qe,L.copy(S.viewport),I.copy(S.scissor),x=S.scissorTest}else L.copy(P).multiplyScalar(R).floor(),I.copy(B).multiplyScalar(R).floor(),x=G;if(ue.bindFramebuffer(36160,K)&&Ce.drawBuffers&&U&&ue.drawBuffers(S,K),ue.viewport(L),ue.scissor(I),ue.setScissorTest(x),Me){const Pe=Q.get(S.texture);$.framebufferTexture2D(36160,36064,34069+k,Pe.__webglTexture,Y)}else if(Re){const Pe=Q.get(S.texture),qe=k||0;$.framebufferTextureLayer(36160,36064,Pe.__webglTexture,Y||0,qe)}y=-1},this.readRenderTargetPixels=function(S,k,Y,U,K,Me,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ue.bindFramebuffer(36160,Ne);try{const Pe=S.texture,qe=Pe.format,Be=Pe.type;if(qe!==Xt&&X.convert(qe)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===ws&&(we.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&we.has("EXT_color_buffer_float"));if(Be!==ri&&X.convert(Be)!==$.getParameter(35738)&&!(Be===Pn&&(Ce.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-U&&Y>=0&&Y<=S.height-K&&$.readPixels(k,Y,U,K,X.convert(qe),X.convert(Be),Me)}finally{const Pe=w!==null?Q.get(w).__webglFramebuffer:null;ue.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(S,k,Y=0){const U=Math.pow(2,-Y),K=Math.floor(k.image.width*U),Me=Math.floor(k.image.height*U);J.setTexture2D(k,0),$.copyTexSubImage2D(3553,Y,0,0,S.x,S.y,K,Me),ue.unbindTexture()},this.copyTextureToTexture=function(S,k,Y,U=0){const K=k.image.width,Me=k.image.height,Re=X.convert(Y.format),Ne=X.convert(Y.type);J.setTexture2D(Y,0),$.pixelStorei(37440,Y.flipY),$.pixelStorei(37441,Y.premultiplyAlpha),$.pixelStorei(3317,Y.unpackAlignment),k.isDataTexture?$.texSubImage2D(3553,U,S.x,S.y,K,Me,Re,Ne,k.image.data):k.isCompressedTexture?$.compressedTexSubImage2D(3553,U,S.x,S.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):$.texSubImage2D(3553,U,S.x,S.y,Re,Ne,k.image),U===0&&Y.generateMipmaps&&$.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,k,Y,U,K=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=S.max.x-S.min.x+1,Re=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Pe=X.convert(U.format),qe=X.convert(U.type);let Be;if(U.isData3DTexture)J.setTexture3D(U,0),Be=32879;else if(U.isDataArrayTexture)J.setTexture2DArray(U,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,U.flipY),$.pixelStorei(37441,U.premultiplyAlpha),$.pixelStorei(3317,U.unpackAlignment);const He=$.getParameter(3314),it=$.getParameter(32878),Xn=$.getParameter(3316),ui=$.getParameter(3315),hi=$.getParameter(32877),Zt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;$.pixelStorei(3314,Zt.width),$.pixelStorei(32878,Zt.height),$.pixelStorei(3316,S.min.x),$.pixelStorei(3315,S.min.y),$.pixelStorei(32877,S.min.z),Y.isDataTexture||Y.isData3DTexture?$.texSubImage3D(Be,K,k.x,k.y,k.z,Me,Re,Ne,Pe,qe,Zt.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Be,K,k.x,k.y,k.z,Me,Re,Ne,Pe,Zt.data)):$.texSubImage3D(Be,K,k.x,k.y,k.z,Me,Re,Ne,Pe,qe,Zt),$.pixelStorei(3314,He),$.pixelStorei(32878,it),$.pixelStorei(3316,Xn),$.pixelStorei(3315,ui),$.pixelStorei(32877,hi),K===0&&U.generateMipmaps&&$.generateMipmap(Be),ue.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){v=0,M=0,w=null,ue.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}u(uu,"WebGLRenderer");class hu extends uu{}u(hu,"WebGL1Renderer");hu.prototype.isWebGL1Renderer=!0;class du extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}u(du,"Scene");class fu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}u(fu,"InterleavedBuffer");const Mt=new A;class Pr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}u(Pr,"InterleavedBufferAttribute");const Xl=new A,ql=new Ke,Yl=new Ke,x0=new A,Kl=new ke;class pu extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;ql.fromBufferAttribute(i.attributes.skinIndex,e),Yl.fromBufferAttribute(i.attributes.skinWeight,e),Xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Yl.getComponent(r);if(o!==0){const a=ql.getComponent(r);Kl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(x0.copy(Xl).applyMatrix4(Kl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}u(pu,"SkinnedMesh");class ma extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}u(ma,"Bone");class mu extends _t{constructor(e=null,t=1,n=1,i,r,o,a,l,c=mt,h=mt,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}u(mu,"DataTexture");const $l=new ke,y0=new ke;class Dr{constructor(e=[],t=[]){this.uuid=kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:y0;$l.multiplyMatrices(a,t[r]),$l.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Gc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mu(t,e,e,Xt,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ma),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}u(Dr,"Skeleton");class ga extends Bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}u(ga,"LineBasicMaterial");const Jl=new A,Zl=new A,Ql=new ke,Mo=new Ki,rr=new Vn;class Ir extends Qe{constructor(e=new Et,t=new ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jl.fromBufferAttribute(t,i-1),Zl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jl.distanceTo(Zl);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;Ql.copy(i).invert(),Mo.copy(e.ray).applyMatrix4(Ql);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,h=new A,d=new A,f=new A,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const v=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let w=v,y=M-1;w<y;w+=m){const T=_.getX(w),L=_.getX(w+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,L),Mo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let w=v,y=M-1;w<y;w+=m){if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,w+1),Mo.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}u(Ir,"Line");const ec=new A,tc=new A;class gu extends Ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ec.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ec.distanceTo(tc);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}u(gu,"LineSegments");class _u extends Ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}u(_u,"LineLoop");class Or extends Bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}u(Or,"PointsMaterial");const nc=new ke,Vo=new Ki,or=new Vn,ar=new A;class _a extends Qe{constructor(e=new Et,t=new Or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;nc.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m;_<g;_++){const p=c.getX(_);ar.fromBufferAttribute(d,p),ic(ar,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m;_<g;_++)ar.fromBufferAttribute(d,_),ic(ar,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}u(_a,"Points");function ic(s,e,t,n,i,r,o){const a=Vo.distanceSqToPoint(s);if(a<t){const l=new A;Vo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}u(ic,"testPoint");class Yt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new se:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,l=new ke;for(let m=0;m<=e;m++){const _=m/e;i[m]=this.getTangentAt(_,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(gt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(gt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],m*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}u(Yt,"Curve");class Nr extends Yt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new se,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*d+this.aX,c=f*d+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}u(Nr,"EllipseCurve");class vu extends Nr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}u(vu,"ArcCurve");function va(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return u(i,"init"),{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,m*=h,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}u(va,"CubicPoly");const lr=new A,So=new va,wo=new va,To=new va;class xu extends Yt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(lr.subVectors(i[0],i[1]).add(i[0]),c=lr);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(lr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),So.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,g,p),wo.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,g,p),To.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(So.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),wo.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),To.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(So.calc(l),wo.calc(l),To.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}u(xu,"CatmullRomCurve3");function sc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}u(sc,"CatmullRom");function b0(s,e){const t=1-s;return t*t*e}u(b0,"QuadraticBezierP0");function M0(s,e){return 2*(1-s)*s*e}u(M0,"QuadraticBezierP1");function S0(s,e){return s*s*e}u(S0,"QuadraticBezierP2");function xs(s,e,t,n){return b0(s,e)+M0(s,t)+S0(s,n)}u(xs,"QuadraticBezier");function w0(s,e){const t=1-s;return t*t*t*e}u(w0,"CubicBezierP0");function T0(s,e){const t=1-s;return 3*t*t*s*e}u(T0,"CubicBezierP1");function E0(s,e){return 3*(1-s)*s*s*e}u(E0,"CubicBezierP2");function A0(s,e){return s*s*s*e}u(A0,"CubicBezierP3");function ys(s,e,t,n,i){return w0(s,e)+T0(s,t)+E0(s,n)+A0(s,i)}u(ys,"CubicBezier");class xa extends Yt{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,o.x,a.x),ys(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}u(xa,"CubicBezierCurve");class yu extends Yt{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,o.x,a.x),ys(e,i.y,r.y,o.y,a.y),ys(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}u(yu,"CubicBezierCurve3");class Fr extends Yt{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new se;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}u(Fr,"LineCurve");class bu extends Yt{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}u(bu,"LineCurve3");class ya extends Yt{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(xs(e,i.x,r.x,o.x),xs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}u(ya,"QuadraticBezierCurve");class Mu extends Yt{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(xs(e,i.x,r.x,o.x),xs(e,i.y,r.y,o.y),xs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}u(Mu,"QuadraticBezierCurve3");class ba extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(sc(a,l.x,c.x,h.x,d.x),sc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}u(ba,"SplineCurve");var Su=Object.freeze({__proto__:null,ArcCurve:vu,CatmullRomCurve3:xu,CubicBezierCurve:xa,CubicBezierCurve3:yu,EllipseCurve:Nr,LineCurve:Fr,LineCurve3:bu,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Mu,SplineCurve:ba});class wu extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Fr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Su[i.type]().fromJSON(i))}return this}}u(wu,"CurvePath");class Go extends wu{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fr(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ya(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new xa(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Nr(e,t,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}u(Go,"Path");class Ns extends Et{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let _=0;const g=[],p=n/2;let v=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(m,2));function M(){const y=new A,T=new A;let L=0;const I=(t-e)/n;for(let x=0;x<=r;x++){const C=[],O=x/r,R=O*(t-e)+e;for(let V=0;V<=i;V++){const D=V/i,P=D*l+a,B=Math.sin(P),G=Math.cos(P);T.x=R*B,T.y=-O*n+p,T.z=R*G,d.push(T.x,T.y,T.z),y.set(B,I,G).normalize(),f.push(y.x,y.y,y.z),m.push(D,1-O),C.push(_++)}g.push(C)}for(let x=0;x<i;x++)for(let C=0;C<r;C++){const O=g[C][x],R=g[C+1][x],V=g[C+1][x+1],D=g[C][x+1];h.push(O,R,D),h.push(R,V,D),L+=6}c.addGroup(v,L,0),v+=L}u(M,"generateTorso");function w(y){const T=_,L=new se,I=new A;let x=0;const C=y===!0?e:t,O=y===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,p*O,0),f.push(0,O,0),m.push(.5,.5),_++;const R=_;for(let V=0;V<=i;V++){const P=V/i*l+a,B=Math.cos(P),G=Math.sin(P);I.x=C*G,I.y=p*O,I.z=C*B,d.push(I.x,I.y,I.z),f.push(0,O,0),L.x=B*.5+.5,L.y=G*.5*O+.5,m.push(L.x,L.y),_++}for(let V=0;V<i;V++){const D=T+V,P=R+V;y===!0?h.push(P,P+1,D):h.push(P+1,P,D),x+=3}c.addGroup(v,x,y===!0?1:2),v+=x}u(w,"generateCap")}static fromJSON(e){return new Ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}u(Ns,"CylinderGeometry");class Zi extends Ns{constructor(e=1,t=1,n=8,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Zi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}u(Zi,"ConeGeometry");class Ma extends Go{constructor(e){super(e),this.uuid=kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Go().fromJSON(i))}return this}}u(Ma,"Shape");const C0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Tu(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,m;if(n&&(r=I0(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let _=t;_<i;_+=t)d=s[_],f=s[_+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?1/m:0}return Cs(r,o,t,a,l,m),o}};function Tu(s,e,t,n,i){let r,o;if(i===W0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=rc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=rc(r,s[r],s[r+1],o);return o&&Ur(o,o.next)&&(Rs(o),o=o.next),o}u(Tu,"linkedList");function Un(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ur(t,t.next)||tt(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}u(Un,"filterPoints");function Cs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&z0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?R0(s,n,i,r):L0(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),Rs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=P0(Un(s),e,t),Cs(s,e,t,n,i,r,2)):o===2&&D0(s,e,t,n,i,r):Cs(Un(s),e,t,n,i,r,1);break}}}u(Cs,"earcutLinked");function L0(s){const e=s.prev,t=s,n=s.next;if(tt(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Di(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&tt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}u(L0,"isEar");function R0(s,e,t,n){const i=s.prev,r=s,o=s.next;if(tt(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,d=Wo(a,l,e,t,n),f=Wo(c,h,e,t,n);let m=s.prevZ,_=s.nextZ;for(;m&&m.z>=d&&_&&_.z<=f;){if(m!==s.prev&&m!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&tt(m.prev,m,m.next)>=0||(m=m.prevZ,_!==s.prev&&_!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,_.x,_.y)&&tt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;m&&m.z>=d;){if(m!==s.prev&&m!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&tt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;_&&_.z<=f;){if(_!==s.prev&&_!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,_.x,_.y)&&tt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}u(R0,"isEarHashed");function P0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ur(i,r)&&Eu(i,n,n.next,r)&&Ls(i,r)&&Ls(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Rs(n),Rs(n.next),n=s=r),n=n.next}while(n!==s);return Un(n)}u(P0,"cureLocalIntersections");function D0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H0(o,a)){let l=Au(o,a);o=Un(o,o.next),l=Un(l,l.next),Cs(o,e,t,n,i,r),Cs(l,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}u(D0,"splitEarcut");function I0(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Tu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(B0(c));for(i.sort(O0),r=0;r<i.length;r++)N0(i[r],t),t=Un(t,t.next);return t}u(I0,"eliminateHoles");function O0(s,e){return s.x-e.x}u(O0,"compareX");function N0(s,e){if(e=F0(s,e),e){const t=Au(e,s);Un(e,e.next),Un(t,t.next)}}u(N0,"eliminateHole");function F0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let h=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Di(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Ls(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&U0(o,t)))&&(o=t,h=d)),t=t.next;while(t!==a);return o}u(F0,"findHoleBridge");function U0(s,e){return tt(s.prev,s,e.prev)<0&&tt(e.next,s,s.next)<0}u(U0,"sectorContainsSector");function z0(s,e,t,n){let i=s;do i.z===null&&(i.z=Wo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,k0(i)}u(z0,"indexCurve");function k0(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}u(k0,"sortLinked");function Wo(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}u(Wo,"zOrder");function B0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}u(B0,"getLeftmost");function Di(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}u(Di,"pointInTriangle");function H0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!V0(s,e)&&(Ls(s,e)&&Ls(e,s)&&G0(s,e)&&(tt(s.prev,s,e.prev)||tt(s,e.prev,e))||Ur(s,e)&&tt(s.prev,s,s.next)>0&&tt(e.prev,e,e.next)>0)}u(H0,"isValidDiagonal");function tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}u(tt,"area");function Ur(s,e){return s.x===e.x&&s.y===e.y}u(Ur,"equals");function Eu(s,e,t,n){const i=ur(tt(s,e,t)),r=ur(tt(s,e,n)),o=ur(tt(t,n,s)),a=ur(tt(t,n,e));return!!(i!==r&&o!==a||i===0&&cr(s,t,e)||r===0&&cr(s,n,e)||o===0&&cr(t,s,n)||a===0&&cr(t,e,n))}u(Eu,"intersects");function cr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}u(cr,"onSegment");function ur(s){return s>0?1:s<0?-1:0}u(ur,"sign");function V0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Eu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}u(V0,"intersectsPolygon");function Ls(s,e){return tt(s.prev,s,s.next)<0?tt(s,e,s.next)>=0&&tt(s,s.prev,e)>=0:tt(s,e,s.prev)<0||tt(s,s.next,e)<0}u(Ls,"locallyInside");function G0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}u(G0,"middleInside");function Au(s,e){const t=new jo(s.i,s.x,s.y),n=new jo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}u(Au,"splitPolygon");function rc(s,e,t,n){const i=new jo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}u(rc,"insertNode");function Rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}u(Rs,"removeNode");function jo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}u(jo,"Node");function W0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}u(W0,"signedArea");class Fi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];oc(e),ac(n,e);let o=e.length;t.forEach(oc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ac(n,t[l]);const a=C0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}u(Fi,"ShapeUtils");function oc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}u(oc,"removeDupEndPts");function ac(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}u(ac,"addContour");class zr extends Et{constructor(e=new Ma([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ut(i,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:j0;let w,y=!1,T,L,I,x;v&&(w=v.getSpacedPoints(h),y=!0,f=!1,T=v.computeFrenetFrames(h,!1),L=new A,I=new A,x=new A),f||(p=0,m=0,_=0,g=0);const C=a.extractPoints(c);let O=C.shape;const R=C.holes;if(!Fi.isClockWise(O)){O=O.reverse();for(let Q=0,J=R.length;Q<J;Q++){const oe=R[Q];Fi.isClockWise(oe)&&(R[Q]=oe.reverse())}}const D=Fi.triangulateShape(O,R),P=O;for(let Q=0,J=R.length;Q<J;Q++){const oe=R[Q];O=O.concat(oe)}function B(Q,J,oe){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(oe).add(Q)}u(B,"scalePt2");const G=O.length,te=D.length;function W(Q,J,oe){let ve,ce,De;const Te=Q.x-J.x,Se=Q.y-J.y,Ze=oe.x-Q.x,Ye=oe.y-Q.y,E=Te*Te+Se*Se,b=Te*Ye-Se*Ze;if(Math.abs(b)>Number.EPSILON){const j=Math.sqrt(E),ne=Math.sqrt(Ze*Ze+Ye*Ye),ae=J.x-Se/j,he=J.y+Te/j,Le=oe.x-Ye/ne,X=oe.y+Ze/ne,xe=((Le-ae)*Ye-(X-he)*Ze)/(Te*Ye-Se*Ze);ve=ae+Te*xe-Q.x,ce=he+Se*xe-Q.y;const me=ve*ve+ce*ce;if(me<=2)return new se(ve,ce);De=Math.sqrt(me/2)}else{let j=!1;Te>Number.EPSILON?Ze>Number.EPSILON&&(j=!0):Te<-Number.EPSILON?Ze<-Number.EPSILON&&(j=!0):Math.sign(Se)===Math.sign(Ye)&&(j=!0),j?(ve=-Se,ce=Te,De=Math.sqrt(E)):(ve=Te,ce=Se,De=Math.sqrt(E/2))}return new se(ve/De,ce/De)}u(W,"getBevelVec");const F=[];for(let Q=0,J=P.length,oe=J-1,ve=Q+1;Q<J;Q++,oe++,ve++)oe===J&&(oe=0),ve===J&&(ve=0),F[Q]=W(P[Q],P[oe],P[ve]);const z=[];let ie,ee=F.concat();for(let Q=0,J=R.length;Q<J;Q++){const oe=R[Q];ie=[];for(let ve=0,ce=oe.length,De=ce-1,Te=ve+1;ve<ce;ve++,De++,Te++)De===ce&&(De=0),Te===ce&&(Te=0),ie[ve]=W(oe[ve],oe[De],oe[Te]);z.push(ie),ee=ee.concat(ie)}for(let Q=0;Q<p;Q++){const J=Q/p,oe=m*Math.cos(J*Math.PI/2),ve=_*Math.sin(J*Math.PI/2)+g;for(let ce=0,De=P.length;ce<De;ce++){const Te=B(P[ce],F[ce],ve);Oe(Te.x,Te.y,-oe)}for(let ce=0,De=R.length;ce<De;ce++){const Te=R[ce];ie=z[ce];for(let Se=0,Ze=Te.length;Se<Ze;Se++){const Ye=B(Te[Se],ie[Se],ve);Oe(Ye.x,Ye.y,-oe)}}}const re=_+g;for(let Q=0;Q<G;Q++){const J=f?B(O[Q],ee[Q],re):O[Q];y?(I.copy(T.normals[0]).multiplyScalar(J.x),L.copy(T.binormals[0]).multiplyScalar(J.y),x.copy(w[0]).add(I).add(L),Oe(x.x,x.y,x.z)):Oe(J.x,J.y,0)}for(let Q=1;Q<=h;Q++)for(let J=0;J<G;J++){const oe=f?B(O[J],ee[J],re):O[J];y?(I.copy(T.normals[Q]).multiplyScalar(oe.x),L.copy(T.binormals[Q]).multiplyScalar(oe.y),x.copy(w[Q]).add(I).add(L),Oe(x.x,x.y,x.z)):Oe(oe.x,oe.y,d/h*Q)}for(let Q=p-1;Q>=0;Q--){const J=Q/p,oe=m*Math.cos(J*Math.PI/2),ve=_*Math.sin(J*Math.PI/2)+g;for(let ce=0,De=P.length;ce<De;ce++){const Te=B(P[ce],F[ce],ve);Oe(Te.x,Te.y,d+oe)}for(let ce=0,De=R.length;ce<De;ce++){const Te=R[ce];ie=z[ce];for(let Se=0,Ze=Te.length;Se<Ze;Se++){const Ye=B(Te[Se],ie[Se],ve);y?Oe(Ye.x,Ye.y+w[h-1].y,w[h-1].x+oe):Oe(Ye.x,Ye.y,d+oe)}}}ge(),Ee();function ge(){const Q=i.length/3;if(f){let J=0,oe=G*J;for(let ve=0;ve<te;ve++){const ce=D[ve];we(ce[2]+oe,ce[1]+oe,ce[0]+oe)}J=h+p*2,oe=G*J;for(let ve=0;ve<te;ve++){const ce=D[ve];we(ce[0]+oe,ce[1]+oe,ce[2]+oe)}}else{for(let J=0;J<te;J++){const oe=D[J];we(oe[2],oe[1],oe[0])}for(let J=0;J<te;J++){const oe=D[J];we(oe[0]+G*h,oe[1]+G*h,oe[2]+G*h)}}n.addGroup(Q,i.length/3-Q,0)}u(ge,"buildLidFaces");function Ee(){const Q=i.length/3;let J=0;$(P,J),J+=P.length;for(let oe=0,ve=R.length;oe<ve;oe++){const ce=R[oe];$(ce,J),J+=ce.length}n.addGroup(Q,i.length/3-Q,1)}u(Ee,"buildSideFaces");function $(Q,J){let oe=Q.length;for(;--oe>=0;){const ve=oe;let ce=oe-1;ce<0&&(ce=Q.length-1);for(let De=0,Te=h+p*2;De<Te;De++){const Se=G*De,Ze=G*(De+1),Ye=J+ve+Se,E=J+ce+Se,b=J+ce+Ze,j=J+ve+Ze;Ce(Ye,E,b,j)}}}u($,"sidewalls");function Oe(Q,J,oe){l.push(Q),l.push(J),l.push(oe)}u(Oe,"v");function we(Q,J,oe){ue(Q),ue(J),ue(oe);const ve=i.length/3,ce=M.generateTopUV(n,i,ve-3,ve-2,ve-1);ze(ce[0]),ze(ce[1]),ze(ce[2])}u(we,"f3");function Ce(Q,J,oe,ve){ue(Q),ue(J),ue(ve),ue(J),ue(oe),ue(ve);const ce=i.length/3,De=M.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);ze(De[0]),ze(De[1]),ze(De[3]),ze(De[1]),ze(De[2]),ze(De[3])}u(Ce,"f4");function ue(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}u(ue,"addVertex");function ze(Q){r.push(Q.x),r.push(Q.y)}u(ze,"addUV")}u(o,"addShape")}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return X0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Su[i.type]().fromJSON(i)),new zr(n,e.options)}}u(zr,"ExtrudeGeometry");const j0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],m=e[i*3+1],_=e[i*3+2],g=e[r*3],p=e[r*3+1],v=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-d),new se(f,1-_),new se(g,1-v)]:[new se(a,1-l),new se(h,1-d),new se(m,1-_),new se(p,1-v)]}};function X0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}u(X0,"toJSON$1");class kr extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new A,f=new A,m=[],_=[],g=[],p=[];for(let v=0;v<=n;v++){const M=[],w=v/n;let y=0;v==0&&o==0?y=.5/t:v==n&&l==Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const L=T/t;d.x=-e*Math.cos(i+L*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(i+L*r)*Math.sin(o+w*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(L+y,1-w),M.push(c++)}h.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){const w=h[v][M+1],y=h[v][M],T=h[v+1][M],L=h[v+1][M+1];(v!==0||o>0)&&m.push(w,y,L),(v!==n-1||l<Math.PI)&&m.push(y,T,L)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(p,2))}static fromJSON(e){return new kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}u(kr,"SphereGeometry");class Fs extends Bt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}u(Fs,"MeshStandardMaterial");class Gn extends Fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}u(Gn,"MeshPhysicalMaterial");class Ht extends Bt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}u(Ht,"MeshLambertMaterial");function An(s,e,t){return Cu(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}u(An,"arraySlice");function hr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}u(hr,"convertArray");function Cu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}u(Cu,"isTypedArray");function q0(s){function e(i,r){return s[i]-s[r]}u(e,"compareTime");const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(q0,"getKeyframeOrder");function lc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}u(lc,"sortedArray");function Lu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}u(Lu,"flattenJSON");class Qi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}u(Qi,"Interpolant");class Ru extends Qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ul:r=e,a=2*t-n;break;case hl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ul:o=e,l=2*n-t;break;case hl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,v=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,w=(-1-m)*p+(1.5+m)*g+.5*_,y=m*p-m*g;for(let T=0;T!==a;++T)r[T]=v*o[h+T]+M*o[c+T]+w*o[l+T]+y*o[d+T];return r}}u(Ru,"CubicInterpolant");class Pu extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}u(Pu,"LinearInterpolant");class Du extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}u(Du,"DiscreteInterpolant");class Kt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ru(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case Vi:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=An(n,r,o),this.values=An(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Cu(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=An(this.times),t=An(this.values),n=this.getValueSize(),i=this.getInterpolation()===Kr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){const g=t[d+_];if(g!==t[f+_]||g!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=An(e,0,o),this.values=An(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=An(this.times,0),t=An(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}u(Kt,"KeyframeTrack");Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=Vi;class ai extends Kt{}u(ai,"BooleanKeyframeTrack");ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ts;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends Kt{}u(Sa,"ColorKeyframeTrack");Sa.prototype.ValueTypeName="color";class Wi extends Kt{}u(Wi,"NumberKeyframeTrack");Wi.prototype.ValueTypeName="number";class Iu extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)pt.slerpFlat(r,0,o,c-a,o,c,l);return r}}u(Iu,"QuaternionLinearInterpolant");class zn extends Kt{InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}}u(zn,"QuaternionKeyframeTrack");zn.prototype.ValueTypeName="quaternion";zn.prototype.DefaultInterpolation=Vi;zn.prototype.InterpolantFactoryMethodSmooth=void 0;class li extends Kt{}u(li,"StringKeyframeTrack");li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ts;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends Kt{}u(ji,"VectorKeyframeTrack");ji.prototype.ValueTypeName="vector";class Ou{constructor(e,t=-1,n,i=_f){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(K0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Kt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=q0(l);l=lc(l,1,h),c=lc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=u(function(d,f,m,_,g){if(m.length!==0){const p=[],v=[];Lu(m,p,v,_),p.length!==0&&g.push(new d(f,p,v))}},"addNonemptyTrack"),i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)m[f[_].morphTargets[g]]=-1;for(const g in m){const p=[],v=[];for(let M=0;M!==f[_].morphTargets.length;++M){const w=f[_];p.push(w.time),v.push(w.morphTarget===g?1:0)}i.push(new Wi(".morphTargetInfluence["+g+"]",p,v))}l=m.length*o}else{const m=".bones["+t[d].name+"]";n(ji,m+".position",f,"pos",i),n(zn,m+".quaternion",f,"rot",i),n(ji,m+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}u(Ou,"AnimationClip");function Y0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Sa;case"quaternion":return zn;case"bool":case"boolean":return ai;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}u(Y0,"getTrackTypeForValueTypeName");function K0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y0(s.type);if(s.times===void 0){const t=[],n=[];Lu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}u(K0,"parseKeyframeTrack");const Xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Nu{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}u(Nu,"LoadingManager");const $0=new Nu;class es{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}u(es,"Loader");const fn={};class Fu extends Error{constructor(e,t){super(e),this.response=t}}u(Fu,"HttpError");class wa extends es{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fn[e]!==void 0){fn[e].push({onLoad:t,onProgress:n,onError:i});return}fn[e]=[],fn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=fn[e],d=c.body.getReader(),f=c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let g=0;const p=new ReadableStream({start(v){M();function M(){d.read().then(({done:w,value:y})=>{if(w)v.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let L=0,I=h.length;L<I;L++){const x=h[L];x.onProgress&&x.onProgress(T)}v.enqueue(y),M()}})}u(M,"readData")}});return new Response(p)}else throw new Fu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Xi.add(e,c);const h=fn[e];delete fn[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=fn[e];if(h===void 0)throw this.manager.itemError(e),c;delete fn[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}u(wa,"FileLoader");class Uu extends es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=As("img");function l(){h(),Xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}u(l,"onImageLoad");function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}u(Uu,"ImageLoader");class zu extends es{constructor(e){super(e)}load(e,t,n,i){const r=new _t,o=new Uu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}u(zu,"TextureLoader");class Us extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}u(Us,"Light");const cc=new ke,uc=new A,hc=new A;class Br{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(uc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}u(Br,"LightShadow");class ku extends Br{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}u(ku,"SpotLightShadow");class Bu extends Us{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ku}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}u(Bu,"SpotLight");const dc=new ke,os=new A,Eo=new A;class Hu extends Br{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc)}}u(Hu,"PointLightShadow");class Vu extends Us{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}u(Vu,"PointLight");class Gu extends Br{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}u(Gu,"DirectionalLightShadow");class Ta extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new Gu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}u(Ta,"DirectionalLight");class Wu extends Us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}u(Wu,"AmbientLight");class On{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}u(On,"LoaderUtils");class ju extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Xi.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}u(ju,"ImageBitmapLoader");class Xu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}u(Xu,"Clock");function fc(){return(typeof performance>"u"?Date:performance).now()}u(fc,"now$2");const Ea="\\[\\]\\.:\\/",J0=new RegExp("["+Ea+"]","g"),Aa="[^"+Ea+"]",Z0="[^"+Ea.replace("\\.","")+"]",Q0=/((?:WC+[\/:])*)/.source.replace("WC",Aa),ev=/(WCOD+)?/.source.replace("WCOD",Z0),tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Aa),nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Aa),iv=new RegExp("^"+Q0+ev+tv+nv+"$"),sv=["material","materials","bones","map"];class qu{constructor(e,t,n){const i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}u(qu,"Composite");class Xe{constructor(e,t,n){this.path=t,this.parsedPath=n||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,n):new Xe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){const t=iv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=u(function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}u(Xe,"PropertyBinding");Xe.Composite=qu;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yu{constructor(e,t,n=0,i=1/0){this.ray=new Ki(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Xo(e,this,n,t),n.sort(pc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xo(e[i],this,n,t);return n.sort(pc),n}}u(Yu,"Raycaster");function pc(s,e){return s.distance-e.distance}u(pc,"ascSort");function Xo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Xo(i[r],e,t,!0)}}u(Xo,"intersectObject");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);var bs={Linear:{None:function(s){return s}},Quadratic:{In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}},Cubic:{In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}},Quartic:{In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}},Quintic:{In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}},Sinusoidal:{In:function(s){return 1-Math.cos(s*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.cos(Math.PI*s))}},Exponential:{In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}},Circular:{In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}},Elastic:{In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}},Back:{In:function(s){var e=1.70158;return s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}},Bounce:{In:function(s){return 1-bs.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?bs.Bounce.In(s*2)*.5:bs.Bounce.Out(s*2-1)*.5+.5}}},fs;typeof self>"u"&&typeof process<"u"&&process.hrtime?fs=u(function(){var s=process.hrtime();return s[0]*1e3+s[1]/1e6},"now"):typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?fs=self.performance.now.bind(self.performance):Date.now!==void 0?fs=Date.now:fs=u(function(){return new Date().getTime()},"now");var Ci=fs,rv=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return u(s,"Group"),s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},s.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},s.prototype.update=function(e,t){e===void 0&&(e=Ci()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),ps={Linear:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=ps.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},Bezier:function(s,e){for(var t=0,n=s.length-1,i=Math.pow,r=ps.Utils.Bernstein,o=0;o<=n;o++)t+=i(1-e,n-o)*i(e,o)*s[o]*r(n,o);return t},CatmullRom:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=ps.Utils.CatmullRom;return s[0]===s[t]?(e<0&&(i=Math.floor(n=t*(1+e))),r(s[(i-1+t)%t],s[i],s[(i+1)%t],s[(i+2)%t],n-i)):e<0?s[0]-(r(s[0],s[0],s[1],s[1],-n)-s[0]):e>1?s[t]-(r(s[t],s[t],s[t-1],s[t-1],n-t)-s[t]):r(s[i?i-1:0],s[i],s[t<i+1?t:i+1],s[t<i+2?t:i+2],n-i)},Utils:{Linear:function(s,e,t){return(e-s)*t+s},Bernstein:function(s,e){var t=ps.Utils.Factorial;return t(s)/t(e)/t(s-e)},Factorial:function(){var s=[1];return function(e){var t=1;if(s[e])return s[e];for(var n=e;n>1;n--)t*=n;return s[e]=t,t}}(),CatmullRom:function(s,e,t,n,i){var r=(t-s)*.5,o=(n-e)*.5,a=i*i,l=i*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*i+e}}},Ku=function(){function s(){}return u(s,"Sequence"),s.nextId=function(){return s._nextId++},s._nextId=0,s}(),$u=new rv,qo=function(){function s(e,t){t===void 0&&(t=$u),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=bs.Linear.None,this._interpolationFunction=ps.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Ku.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return u(s,"Tween"),s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},s.prototype.duration=function(e){return this._duration=e,this},s.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Ci()+parseFloat(e):e:Ci(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},s.prototype._setupProperties=function(e,t,n,i){for(var r in n){var o=e[r],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(n[r]);if(!(l==="undefined"||l==="function")){if(c){var h=n[r];if(h.length===0)continue;h=h.map(this._handleRelativeValue.bind(this,o)),n[r]=[o].concat(h)}if((l==="object"||a)&&o&&!c){t[r]=a?[]:{};for(var d in o)t[r][d]=o[d];i[r]=a?[]:{},this._setupProperties(o,t[r],n[r],i[r])}else typeof t[r]>"u"&&(t[r]=o),a||(t[r]*=1),c?i[r]=n[r].slice().reverse():i[r]=t[r]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(e){return e===void 0&&(e=Ci()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},s.prototype.resume=function(e){return e===void 0&&(e=Ci()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return this._group=e,this},s.prototype.delay=function(e){return this._delayTime=e,this},s.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return this._yoyo=e,this},s.prototype.easing=function(e){return this._easingFunction=e,this},s.prototype.interpolation=function(e){return this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){if(e===void 0&&(e=Ci()),t===void 0&&(t=!0),this._isPaused)return!0;var n,i,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var o=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),c=Array.isArray(a),h=!l&&c;h?e[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(e[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s}();Ku.nextId;var rn=$u;rn.getAll.bind(rn);rn.removeAll.bind(rn);rn.add.bind(rn);rn.remove.bind(rn);var ov=rn.update.bind(rn),xr=u(function(s,e,t,n){var i=this;this.object=s,this.trackballRadius=e,this.camera=t,this.domElement=n!==void 0?n:document,this.enabled=!0,this.rotateSensitivity=1,this.relativelySpinOffTrackball=!0,this.enableDamping=!0,this.dampingFactor=5,this.spinAxisConstraint,this.POINTER_SPHERE_MAPPING={SHOEMAKE:"shoemake",HOLROYD:"holroyd",AZIMUTHAL:"azimuthal",RAYCAST:"raycast"},this.offTrackBallVelocityGainMap={shoemake:20,holroyd:8,azimuthal:8,raycast:20},this._pointerMapping=this.POINTER_SPHERE_MAPPING.RAYCAST,this._offTrackBallVelocityGain=this.offTrackBallVelocityGainMap[this._pointerMapping],this._pointerUpVelDamping=2e3,this.screen={left:0,top:0,width:0,height:0};var r=new A(0,0,0),o=new pt,a,l=new A,c=new se,h=new A,d=0,f=!1,m=!1,_=1e-6,g={type:"change"},p={type:"start"},v={type:"end"};this.update=function(){var R,V=performance.now()/1e3,D;return u(function(){R=performance.now()/1e3,D=R-V,V=R,!m&&i.enableDamping&&(r.multiplyScalar(1/(D*i.dampingFactor+1)),i.applyVelocity()),i.enableDamping||(a=performance.now()),i.hasPointerMovedThisFrame=!1},"update")}(),this.updateAngularVelocity=function(){var R=new pt,V=new pt,D=new pt;return u(function(B,G,te){D.set(G.x,G.y,G.z,0),D.normalize(),D.conjugate(),V.set(B.x,B.y,B.z,0).multiply(D),te*=2,R.set(G.x,G.y,G.z,1);var W=V.angleTo(R)/te;r.crossVectors(G,B),r.setLength(W),i.applyVelocity()},"updateAngularVelocity")}(),this.applyVelocity=function(){var R=new pt,V=new A,D,P,B;return u(function(){B=performance.now(),P=(B-a)/1e3,a=B,i.spinAxisConstraint?(V.copy(i.spinAxisConstraint),D=V.dot(r)):(V.copy(r),D=r.length()),D&&P&&(V.normalize(),R.setFromAxisAngle(V,D*P*i.rotateSensitivity),i.object.quaternion.normalize(),i.object.quaternion.premultiply(R),8*(1-o.dot(i.object.quaternion))>_&&(i.dispatchEvent(g),o.copy(i.object.quaternion)))},"applyVelocity")}(),this.onWindowResize=function(){if(i.domElement===document)i.screen.left=0,i.screen.top=0,i.screen.width=window.innerWidth,i.screen.height=window.innerHeight;else{var R=i.domElement.getBoundingClientRect(),V=i.domElement.ownerDocument.documentElement;i.screen.left=R.left+window.pageXOffset-V.clientLeft,i.screen.top=R.top+window.pageYOffset-V.clientTop,i.screen.width=R.width,i.screen.height=R.height}},this.resetInputAfterCameraMovement=function(){m&&(i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),l.copy(y(M(c.x,c.y))))};var M=function(){var R=new se;return u(function(D,P){return R.set((D-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-P))/i.screen.height),R},"getPointerInNdc")}();this.getPointerInNdc=M;var w=function(){var R=new A,V=new A,D=new A,P=new se,B=new pt;return u(function(te){i.object.updateWorldMatrix(!0,!1),R.setFromMatrixPosition(i.object.matrixWorld),i.camera.updateWorldMatrix(!0,!1),i.camera.matrixWorldInverse.copy(i.camera.matrixWorld).invert(),R.project(i.camera),P.set(R.x,R.y),P.subVectors(te,P),V.setFromMatrixPosition(i.object.matrixWorld),D.set(i.trackballRadius,0,0),D.applyQuaternion(B.setFromRotationMatrix(i.camera.matrixWorld)),V.add(D),V.project(i.camera),V.z=0,R.z=0;var W=V.distanceTo(R);return P.x/=W,P.y/=W,i.camera.aspect&&(P.y/=i.camera.aspect),P},"getObjectToPointer")}(),y=function(){var R=new A,V=new A,D=new se,P=new pt,B=new Vn,G=new Ki;return u(function(W){if(D.copy(w(W)),P.setFromRotationMatrix(i.camera.matrixWorld),i._pointerMapping===i.POINTER_SPHERE_MAPPING.RAYCAST)D.lengthSq()<1?(V.setFromMatrixPosition(i.object.matrixWorld),B.set(V,i.trackballRadius),G.origin.copy(i.camera.position),G.direction.set(W.x,W.y,.5),G.direction.unproject(i.camera),G.direction.sub(i.camera.position).normalize(),G.intersectSphere(B,R),R.sub(V),R.normalize()):(D.normalize(),R.set(D.x,D.y,0),R.applyQuaternion(P));else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.HOLROYD){var F=D.lengthSq();F<.5?R.set(D.x,D.y,Math.sqrt(1-F)):(R.set(D.x,D.y,1/(2*Math.sqrt(F))),R.normalize()),R.applyQuaternion(P)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.SHOEMAKE){var F=D.lengthSq();F<1?R.set(D.x,D.y,Math.sqrt(1-F)):(D.normalize(),R.set(D.x,D.y,0)),R.applyQuaternion(P)}else if(i._pointerMapping===i.POINTER_SPHERE_MAPPING.AZIMUTHAL){var F=Math.PI/2*D.length(),z=F<Number.EPSILON?1:Math.sin(F)/F;D.multiplyScalar(Math.PI/2*z),R.set(D.x,D.y,Math.cos(F)),R.applyQuaternion(P)}return R},"getPointerInSphere")}();this.onPointerDown=function(R,V,D){var P=M(R,V),B=w(P);B.lengthSq()<1?(f=!0,l.copy(y(P))):f=!1,c.set(R,V),d=D,r.set(0,0,0),m=!0},this.onPointerMove=function(){var R=new A,V=new se,D=new se,P=new se,B=new A,G=new A,te=new A,W=new A;return u(function(z,ie,ee){var re=(ee-d)/1e3;if(d=ee,h.copy(l),R.copy(M(z,ie)),V.copy(w(R)),V.lengthSq()<1||!this.relativelySpinOffTrackball)l.copy(y(R)),f?re>0&&i.updateAngularVelocity(l,h,re):(r.set(0,0,0),a=ee),f=!0;else{if(f)r.set(0,0,0),a=ee;else if(re>0){P.copy(M(c.x,c.y)),D.subVectors(R,P),B.setFromMatrixPosition(i.object.matrixWorld),i.camera.isPerspectiveCamera?G.copy(i.camera.position).sub(B):(i.camera.getWorldDirection(G),G.negate()),l.copy(y(R)),r.crossVectors(G,l);var ge;i.camera.isPerspectiveCamera?ge=2/i.camera.fov/Math.atan(i.trackballRadius/G.length()):ge=i.trackballRadius/((i.camera.top-i.camera.bottom)/i.camera.zoom*2),V.normalize();var Ee=D.dot(V)*ge/re;r.setLength(Ee*i._offTrackBallVelocityGain),W.copy(y(P));var $=W.angleTo(l)/re;te.crossVectors(W,l),te.setLength($),r.add(te),i.applyVelocity()}f=!1}c.set(z,ie),i.hasPointerMovedThisFrame=!0},"onPointerMove")}(),this.setPointerToSphereMapping=function(R){i._pointerMapping=R,i._offTrackBallVelocityGain=i.offTrackBallVelocityGainMap[i._pointerMapping]},this.handlePointerDown=function(R){R.preventDefault(),R.stopImmediatePropagation(),i.domElement.focus?i.domElement.focus():window.focus(),i.dispatchEvent(p)},this.handlePointerUp=function(R){if(R.preventDefault(),!i.hasPointerMovedThisFrame){var V=(R.timeStamp-d)/1e3;r.multiplyScalar(1/(i._pointerUpVelDamping*Math.pow(V,2)+i.dampingFactor*V+1))}m=!1,i.dispatchEvent(v)};function T(R){i.enabled===!1||R.button!==0||(i.onPointerDown(R.pageX,R.pageY,R.timeStamp),document.addEventListener("mousemove",L,!1),document.addEventListener("mouseup",I,!1),i.handlePointerDown(R))}u(T,"onMouseDown");function L(R){i.enabled!==!1&&(R.preventDefault(),i.onPointerMove(R.pageX,R.pageY,R.timeStamp))}u(L,"onMouseMove");function I(R){i.enabled!==!1&&(document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",I),i.handlePointerUp(R))}u(I,"onMouseUp"),this.cancelSpin=function(){r.set(0,0,0)},this.handleTouchStart=function(R){i.onPointerDown(R.pageX,R.pageY,R.timeStamp),i.applyVelocity()};function x(R){i.enabled!==!1&&(i.handleTouchStart(R),i.handlePointerDown(R))}u(x,"onTouchStart");function C(R){i.enabled===!1||!m||(R.preventDefault(),R.stopImmediatePropagation(),i.onPointerMove(R.touches[0].pageX,R.touches[0].pageY,R.timeStamp))}u(C,"onTouchMove");function O(R){i.enabled!==!1&&(i.handlePointerUp(R),R.touches.length>0&&(m=!0))}u(O,"onTouchEnd"),this.dispose=function(){i.domElement.removeEventListener("mousedown",T),document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",I),i.domElement.removeEventListener("touchstart",x),i.domElement.removeEventListener("touchmove",C),i.domElement.removeEventListener("touchend",O)},i.domElement.addEventListener("mousedown",T),i.domElement.addEventListener("touchstart",x,{passive:!1}),i.domElement.addEventListener("touchmove",C,{passive:!1}),i.domElement.addEventListener("touchend",O,{passive:!1}),i.onWindowResize(),i.update()},"SpinControls");xr.prototype=Object.create(Bn.prototype);xr.prototype.constructor=xr;class Ju{constructor(e){this.defaultSpinControlsState={autoRotateAxis:new A(0,1,0),trackballRadius:100,spinAxisConstraint:void 0},this.autoRotateAxis=new A(0,1,0),this.autoRotateQuaternion=new pt,this.autoRotateEnabled=!0;const t=e.getRenderer().domElement;this.camera=this.buildPerspectiveCamera(t),this.spinControls=this.buildSpinControls(t),this.defaultCameraState=this.camera.clone()}buildPerspectiveCamera(e){const t=e.parentElement,n=u(()=>t.offsetWidth/t.offsetHeight,"aspectRatio"),i=new yt(36,n(),1,3e3);return i.position.set(0,0,400),window.addEventListener("resize",()=>{i.aspect=n(),i.updateProjectionMatrix();const r=this.defaultCameraState;r.aspect=n(),r.updateProjectionMatrix()}),i}buildSpinControls(e){const t=new Qe,n=new xr(t,0,this.getCamera(),e);return n.rotateSensitivity=.25,n.dampingFactor=10,window.addEventListener("resize",()=>n.onWindowResize()),n.addEventListener("start",()=>{this.autoRotateEnabled=!1}),n.addEventListener("end",()=>{this.autoRotateEnabled=!0}),n}setSpinControlsObject(e,t,n){this.spinControls.object=e,this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n,this.defaultSpinControlsState.trackballRadius=t,this.defaultSpinControlsState.spinAxisConstraint=n}setRotationAxis(e){this.autoRotateAxis.copy(e),this.spinControls.spinAxisConstraint=e}resetSpinControls(){const{autoRotateAxis:e,trackballRadius:t,spinAxisConstraint:n}=this.defaultSpinControlsState;this.autoRotateAxis.copy(e),this.spinControls.trackballRadius=t,this.spinControls.spinAxisConstraint=n}autoRotate(e){this.autoRotateQuaternion.setFromAxisAngle(this.autoRotateAxis,e*-.1),this.spinControls.object.quaternion.premultiply(this.autoRotateQuaternion)}update(e){this.spinControls.update(),this.autoRotateEnabled&&this.autoRotate(e)}getCamera(){return this.camera}getSpinControls(){return this.spinControls}getDefaultCameraState(){return this.defaultCameraState}}u(Ju,"ThreeControls");class Zu{constructor(e){this.renderer=this.buildRenderer(e)}buildRenderer(e){const t=e.parentElement,n=new uu({canvas:e,antialias:!0,alpha:!0});n.outputEncoding=je,n.setPixelRatio(window.devicePixelRatio);const i=u(()=>n.setSize(this.rendererWidth(t),this.rendererHeight(t),!1),"updateWebGlRendererSize");return i(),window.addEventListener("resize",i),n}getRenderer(){return this.renderer}rendererWidth(e){return e.offsetWidth>0?e.offsetWidth:window.innerWidth}rendererHeight(e){return e.offsetHeight>0?e.offsetHeight:window.innerWidth}}u(Zu,"ThreeRenderer");const St=u(s=>{const e=new Ae(s);return e.convertSRGBToLinear(),e},"rgbColor"),Lt={ambientLight:St("#ffffff"),star:St("#ffffff"),sun:St("#fcd900"),earth:St("#4d96ff"),tree:{trunk:St("#be8c63"),crown:St("#9ede73")},mountain:St("#9ede73"),house:{roof:St("#b20600"),base:St("#f1eee9")},land:{brown:St("#ffcc8f"),green:St("#83bd75")},building:{floor:St("#f1eee9"),split:St("#73777b")},hut:{roof:St("#a64b2a"),pillar:St("#d7a86e")}};class Qu{constructor(){this.scene=new du,this.setupLights()}setupLights(){const e=new Wu(Lt.ambientLight),t=new et;t.name="lights",t.add(e),this.scene.add(t)}getScene(){return this.scene}}u(Qu,"ThreeScene");class eh{constructor(e,t){this.controls=t,this.rayCasterPoint=new se(0,0),this.objectsToIgnore=new Set,this.intersectableMouseMoveObjects=new Set,this.intersectableClickObjects=new Set,this.mouseOverListenersMap=new Map,this.mouseOutListenersMap=new Map,this.clickableListenersMap=new Map,this.rayCaster=new Yu,this.rendererElement=e.getRenderer().domElement,this.setupMouseMoveListeners(),this.setupMouseClickListener()}setupMouseMoveListeners(){const e=new Set,t=u(n=>{var r,o;if(!this.hasMouseMoveListeners())return;const i=this.getIntersectedObject(n,this.intersectableMouseMoveObjects);for(const a of e)i!==a&&(e.delete(a),(r=this.mouseOutListenersMap.get(a))==null||r());i&&!e.has(i)&&(e.add(i),(o=this.mouseOverListenersMap.get(i))==null||o())},"mouseMoveEventHandler");this.rendererElement.addEventListener("mousemove",t),this.rendererElement.addEventListener("touchmove",n=>{t(n.changedTouches[0])})}setupMouseClickListener(){const e=u(t=>{var i;if(!this.hasClickListeners())return;const n=this.getIntersectedObject(t,this.intersectableClickObjects);n&&((i=this.clickableListenersMap.get(n))==null||i())},"mouseClickEventHandler");this.rendererElement.addEventListener("click",e),this.rendererElement.addEventListener("touchend",t=>{e(t.changedTouches[0])})}getIntersectedObject(e,t){this.rayCasterPoint.setX(e.clientX/this.rendererElement.clientWidth*2-1),this.rayCasterPoint.setY(-(e.clientY/this.rendererElement.clientHeight)*2+1),this.rayCaster.setFromCamera(this.rayCasterPoint,this.controls.getCamera());const n=this.rayCaster.intersectObjects([...t]);if(n.length!==0)return this.findIntersectedObject(n[0].object,t)}onMouseOver(e,t){this.mouseOverListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onMouseOut(e,t){this.mouseOutListenersMap.set(e,t),this.intersectableMouseMoveObjects.add(e)}onClick(e,t){this.clickableListenersMap.set(e,t),this.intersectableClickObjects.add(e)}intersectButIgnoreObject(e){this.objectsToIgnore.add(e),this.intersectableClickObjects.add(e),this.intersectableMouseMoveObjects.add(e)}findIntersectedObject(e,t){if(!this.objectsToIgnore.has(e))return t.has(e)?e:e.parent?this.findIntersectedObject(e.parent,t):void 0}hasMouseMoveListeners(){return this.mouseOverListenersMap.size>0||this.mouseOutListenersMap.size>0}hasClickListeners(){return this.clickableListenersMap.size>0}}u(eh,"ThreeSelector");class th{constructor(e){this.threeScene=new Qu,this.threeRenderer=new Zu(e.canvasElement),this.threeControls=new Ju(this.threeRenderer),this.threeSelector=new eh(this.threeRenderer,this.threeControls),this.animate()}animate(){const e=this.threeScene.getScene(),t=this.threeControls.getCamera(),n=this.threeRenderer.getRenderer(),i=new Xu;n.setAnimationLoop(()=>{const r=i.getDelta();this.threeControls.update(r),n.render(e,t),ov()})}getScene(){return this.threeScene.getScene()}getControls(){return this.threeControls}getSelector(){return this.threeSelector}}u(th,"Three");const av=u((s,e)=>new A().subVectors(e,s).normalize(),"getDirectionBetweenVectors"),lv=u(s=>{const e=new A;return s.getWorldDirection(e),e},"getObjectDirection"),cv=u((s,e,t)=>{const n=sn.degToRad(-e+90),i=sn.degToRad(t),r=new A;return r.setFromSphericalCoords(s,n,i),r},"getPositionFromLatLng");class on{constructor(...[e]){var t,n;this.properties=e,this.object=this.constructObject(),(t=this.properties)!=null&&t.name&&(this.object.name=this.properties.name),(n=this.properties)!=null&&n.scale&&this.object.scale.setScalar(this.properties.scale)}getObject(){return this.object}addTo(e){e.add(this.object)}applyLatLng(e,t,n){const i=cv(e,t,n);this.object.position.copy(i),this.object.lookAt(0,0,0),this.object.rotateX(sn.degToRad(-90))}}u(on,"BaseObject");class nh extends on{constructObject(){const{size:e,color:t=Lt.earth}=this.properties,n=new kr(e,e/2,e/3),i=new Ht({color:t}),r=new st(n,i);return r.name="globe",r}getRadius(){return this.properties.size}}u(nh,"Globe");class ih extends on{constructObject(){var i;const e=new et,t=new et,n=(i=this.properties.radius)!=null?i:120;return t.add(this.constructLight()),t.position.setScalar(n),e.add(t),e.name="sun",e}constructLight(){return new Ta(Lt.sun,.8)}setPosition(e){this.object.position.copy(e)}}u(ih,"Sun");class sh extends on{constructObject(){var i;const e=new et,{floors:t=3,size:n}=(i=this.properties)!=null?i:{};for(let r=0;r<t;r++){const o=this.constructFloor(r,n),a=this.constructSplit(r,n);e.add(o,a)}return e.name="building",e}constructFloor(e,t=10){var l,c;const n=new qt(t,t,t),i=new Ht({color:(c=(l=this.properties)==null?void 0:l.floorColor)!=null?c:Lt.building.floor}),r=new st(n,i),o=t/2,a=this.getSplitHeight(t);return n.translate(0,o+e*(t+a),0),r}constructSplit(e,t=10){var l,c;const n=this.getSplitHeight(t),i=new qt(t*.8,n,t*.8),r=new Ht({color:(c=(l=this.properties)==null?void 0:l.splitColor)!=null?c:Lt.building.split}),o=new st(i,r),a=n/2;return i.translate(0,(e+1)*(t+n)-a,0),o}getSplitHeight(e){return e*.1}}u(sh,"Building");class rh extends on{constructObject(){var i,r;const e=new et,t=this.constructRoof((i=this.properties)==null?void 0:i.size),n=this.constructBase((r=this.properties)==null?void 0:r.size);return e.add(t,n),e.name="house",e}constructBase(e=10){const t=new qt(e*.7,e/2,e),n=new Ht({color:Lt.house.base}),i=new st(t,n);return t.translate(0,e/2/2,0),i}constructRoof(e=10){const[t,n]=[e,e/3],i=e/2,r=this.constructRoofGeometry(t,n),o=new Ht({color:Lt.house.roof,side:nn}),a=new st(r,o);return r.translate(0,i+n/2,0),a}constructRoofGeometry(e,t){const n=[[0,0],[e/2,t],[e,0]].map(o=>new se(...o)),i=new Ma(n),r=new zr(i,{depth:e});return r.translate(-e/2,-t/2,-e/2),r}}u(rh,"House");class oh extends on{constructObject(){var i,r;const e=new et,t=this.constructRoof((i=this.properties)==null?void 0:i.size),n=this.constructPillars((r=this.properties)==null?void 0:r.size);return e.add(t,n),e.name="hut",e}constructRoof(e=5){const t=e/1.25,n=new Zi(e*1.2,t,6),i=new Ht({color:Lt.hut.roof}),r=new st(n,i),o=e/1.1;return n.translate(0,o+t/2,0),r}constructPillars(e=5){const t=[{x:2.5,z:2.5},{x:-2.5,z:2.5},{x:2.5,z:-2.5},{x:-2.5,z:-2.5}],n=new et;n.name="pillars";for(const i of t)n.add(this.constructPillar(i,e));return n}constructPillar(e,t){const[n,i,r]=[t/5,t/1.1,t/5],o=new qt(n,i,r),a=new Ht({color:Lt.hut.pillar}),l=new st(o,a);return o.translate(e.x,i/2,e.z),l}}u(oh,"Hut");class ah extends on{constructObject(){var l;const{size:e=10,height:t=1,sides:n=6,color:i=Lt.land.green}=(l=this.properties)!=null?l:{},r=new Ns(e,e,t,n,1),o=new Ht({color:i}),a=new st(r,o);return a.name="land",a}}u(ah,"Land");class lh extends on{constructObject(){const{size:e,color:t=Lt.mountain,height:n=e}=this.properties,i=new Zi(e,n,4),r=new Ht({color:t}),o=new st(i,r);return o.name="mountain",i.translate(0,n/2,0),o}}u(lh,"Mountain");class ch extends on{constructObject(){const e=new et,t=this.constructTrunk(),n=this.constructCrown();return e.add(t,n),e.name="tree",e}constructTrunk(e=3){const t=new qt(1,e,1),n=new Ht({color:Lt.tree.trunk}),i=new st(t,n);return t.translate(0,e/2,0),i}constructCrown(e=3){const n=new Zi(3,7,3),i=new Ht({color:Lt.tree.crown}),r=new st(n,i);return n.translate(0,e+7/2,0),r}}u(ch,"Tree");var ye=(s=>(s[s.LevelOne=2.25]="LevelOne",s[s.LevelTwo=4.5]="LevelTwo",s))(ye||{});function uv(s){if(!!s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}u(uv,"___$insertStyle");function Ii(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),c=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}u(Ii,"colorToString");var mc=Array.prototype.forEach,as=Array.prototype.slice,Z={BREAK:{},extend:u(function(e){return this.each(as.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},"extend"),defaults:u(function(e){return this.each(as.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},"defaults"),compose:u(function(){var e=as.call(arguments);return function(){for(var t=as.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},"compose"),each:u(function(e,t,n){if(!!e){if(mc&&e.forEach&&e.forEach===mc)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},"each"),defer:u(function(e){setTimeout(e,0)},"defer"),debounce:u(function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}u(a,"delayed");var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},"debounce"),toArray:u(function(e){return e.toArray?e.toArray():as.call(e)},"toArray"),isUndefined:u(function(e){return e===void 0},"isUndefined"),isNull:u(function(e){return e===null},"isNull"),isNaN:function(s){function e(t){return s.apply(this,arguments)}return u(e,"isNaN"),e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:u(function(e){return e===Object(e)},"isObject"),isNumber:u(function(e){return e===e+0},"isNumber"),isString:u(function(e){return e===e+""},"isString"),isBoolean:u(function(e){return e===!1||e===!0},"isBoolean"),isFunction:u(function(e){return e instanceof Function},"isFunction")},hv=[{litmus:Z.isString,conversions:{THREE_CHAR_HEX:{read:u(function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},"read"),write:Ii},SIX_CHAR_HEX:{read:u(function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},"read"),write:Ii},CSS_RGB:{read:u(function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},"read"),write:Ii},CSS_RGBA:{read:u(function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},"read"),write:Ii}}},{litmus:Z.isNumber,conversions:{HEX:{read:u(function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},"read"),write:u(function(e){return e.hex},"write")}}},{litmus:Z.isArray,conversions:{RGB_ARRAY:{read:u(function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},"read"),write:u(function(e){return[e.r,e.g,e.b]},"write")},RGBA_ARRAY:{read:u(function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},"read"),write:u(function(e){return[e.r,e.g,e.b,e.a]},"write")}}},{litmus:Z.isObject,conversions:{RGBA_OBJ:{read:u(function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)&&Z.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},"read"),write:u(function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}},"write")},RGB_OBJ:{read:u(function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},"read"),write:u(function(e){return{r:e.r,g:e.g,b:e.b}},"write")},HSVA_OBJ:{read:u(function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)&&Z.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},"read"),write:u(function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}},"write")},HSV_OBJ:{read:u(function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},"read"),write:u(function(e){return{h:e.h,s:e.s,v:e.v}},"write")}}}],ls=void 0,dr=void 0,Yo=u(function(){dr=!1;var e=arguments.length>1?Z.toArray(arguments):arguments[0];return Z.each(hv,function(t){if(t.litmus(e))return Z.each(t.conversions,function(n,i){if(ls=n.read(e),dr===!1&&ls!==!1)return dr=ls,ls.conversionName=i,ls.conversion=n,Z.BREAK}),Z.BREAK}),dr},"interpret"),gc=void 0,yr={hsv_to_rgb:u(function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},"hsv_to_rgb"),rgb_to_hsv:u(function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},"rgb_to_hsv"),rgb_to_hex:u(function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},"rgb_to_hex"),component_from_hex:u(function(e,t){return e>>t*8&255},"component_from_hex"),hex_with_component:u(function(e,t,n){return n<<(gc=t*8)|e&~(255<<gc)},"hex_with_component")},dv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$t=u(function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},"classCallCheck"),Jt=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return u(s,"defineProperties"),function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),kn=u(function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},"get"),Wn=u(function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},"inherits"),jn=u(function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},"possibleConstructorReturn"),ft=function(){function s(){if($t(this,s),this.__state=Yo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return u(s,"Color"),Jt(s,[{key:"toString",value:u(function(){return Ii(this)},"toString")},{key:"toHexString",value:u(function(){return Ii(this,!0)},"toHexString")},{key:"toOriginal",value:u(function(){return this.__state.conversion.write(this)},"toOriginal")}]),s}();function Ca(s,e,t){Object.defineProperty(s,e,{get:u(function(){return this.__state.space==="RGB"?this.__state[e]:(ft.recalculateRGB(this,e,t),this.__state[e])},"get$$1"),set:u(function(i){this.__state.space!=="RGB"&&(ft.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i},"set$$1")})}u(Ca,"defineRGBComponent");function La(s,e){Object.defineProperty(s,e,{get:u(function(){return this.__state.space==="HSV"?this.__state[e]:(ft.recalculateHSV(this),this.__state[e])},"get$$1"),set:u(function(n){this.__state.space!=="HSV"&&(ft.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n},"set$$1")})}u(La,"defineHSVComponent");ft.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=yr.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")Z.extend(s.__state,yr.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};ft.recalculateHSV=function(s){var e=yr.rgb_to_hsv(s.r,s.g,s.b);Z.extend(s.__state,{s:e.s,v:e.v}),Z.isNaN(e.h)?Z.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};ft.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ca(ft.prototype,"r",2);Ca(ft.prototype,"g",1);Ca(ft.prototype,"b",0);La(ft.prototype,"h");La(ft.prototype,"s");La(ft.prototype,"v");Object.defineProperty(ft.prototype,"a",{get:u(function(){return this.__state.a},"get$$1"),set:u(function(e){this.__state.a=e},"set$$1")});Object.defineProperty(ft.prototype,"hex",{get:u(function(){return this.__state.space!=="HEX"&&(this.__state.hex=yr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},"get$$1"),set:u(function(e){this.__state.space="HEX",this.__state.hex=e},"set$$1")});var ci=function(){function s(e,t){$t(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return u(s,"Controller"),Jt(s,[{key:"onChange",value:u(function(t){return this.__onChange=t,this},"onChange")},{key:"onFinishChange",value:u(function(t){return this.__onFinishChange=t,this},"onFinishChange")},{key:"setValue",value:u(function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this},"setValue")},{key:"getValue",value:u(function(){return this.object[this.property]},"getValue")},{key:"updateDisplay",value:u(function(){return this},"updateDisplay")},{key:"isModified",value:u(function(){return this.initialValue!==this.getValue()},"isModified")}]),s}(),fv={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},uh={};Z.each(fv,function(s,e){Z.each(s,function(t){uh[t]=e})});var pv=/(\d+(\.\d+)?)px/;function Qt(s){if(s==="0"||Z.isUndefined(s))return 0;var e=s.match(pv);return Z.isNull(e)?0:parseFloat(e[1])}u(Qt,"cssValueToPixels");var H={makeSelectable:u(function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},"makeSelectable"),makeFullscreen:u(function(e,t,n){var i=n,r=t;Z.isUndefined(r)&&(r=!0),Z.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},"makeFullscreen"),fakeEvent:u(function(e,t,n,i){var r=n||{},o=uh[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;Z.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}Z.defaults(a,i),e.dispatchEvent(a)},"fakeEvent"),bind:u(function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),H},"bind"),unbind:u(function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),H},"unbind"),addClass:u(function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return H},"addClass"),removeClass:u(function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return H},"removeClass"),hasClass:u(function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},"hasClass"),getWidth:u(function(e){var t=getComputedStyle(e);return Qt(t["border-left-width"])+Qt(t["border-right-width"])+Qt(t["padding-left"])+Qt(t["padding-right"])+Qt(t.width)},"getWidth"),getHeight:u(function(e){var t=getComputedStyle(e);return Qt(t["border-top-width"])+Qt(t["border-bottom-width"])+Qt(t["padding-top"])+Qt(t["padding-bottom"])+Qt(t.height)},"getHeight"),getOffset:u(function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},"getOffset"),isActive:u(function(e){return e===document.activeElement&&(e.type||e.href)},"isActive")},hh=function(s){Wn(e,s);function e(t,n){$t(this,e);var i=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return u(o,"onChange"),H.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return u(e,"BooleanController"),Jt(e,[{key:"setValue",value:u(function(n){var i=kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i},"setValue")},{key:"updateDisplay",value:u(function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(ci),mv=function(s){Wn(e,s);function e(t,n,i){$t(this,e);var r=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),Z.isArray(o)){var l={};Z.each(o,function(c){l[c]=c}),o=l}return Z.each(o,function(c,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",c),a.__select.appendChild(d)}),r.updateDisplay(),H.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),r.domElement.appendChild(r.__select),r}return u(e,"OptionController"),Jt(e,[{key:"setValue",value:u(function(n){var i=kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i},"setValue")},{key:"updateDisplay",value:u(function(){return H.isActive(this.__select)?this:(this.__select.value=this.getValue(),kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))},"updateDisplay")}]),e}(ci),gv=function(s){Wn(e,s);function e(t,n){$t(this,e);var i=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}u(o,"onChange");function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return u(a,"onBlur"),i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),H.bind(i.__input,"keyup",o),H.bind(i.__input,"change",o),H.bind(i.__input,"blur",a),H.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return u(e,"StringController"),Jt(e,[{key:"updateDisplay",value:u(function(){return H.isActive(this.__input)||(this.__input.value=this.getValue()),kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(ci);function _c(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}u(_c,"numDecimals");var dh=function(s){Wn(e,s);function e(t,n,i){$t(this,e);var r=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,Z.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=_c(r.__impliedStep),r}return u(e,"NumberController"),Jt(e,[{key:"setValue",value:u(function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)},"setValue")},{key:"min",value:u(function(n){return this.__min=n,this},"min")},{key:"max",value:u(function(n){return this.__max=n,this},"max")},{key:"step",value:u(function(n){return this.__step=n,this.__impliedStep=n,this.__precision=_c(n),this},"step")}]),e}(ci);function _v(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}u(_v,"roundToDecimal");var br=function(s){Wn(e,s);function e(t,n,i){$t(this,e);var r=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var _=parseFloat(o.__input.value);Z.isNaN(_)||o.setValue(_)}u(l,"onChange");function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}u(c,"onFinish");function h(){c()}u(h,"onBlur");function d(_){var g=a-_.clientY;o.setValue(o.getValue()+g*o.__impliedStep),a=_.clientY}u(d,"onMouseDrag");function f(){H.unbind(window,"mousemove",d),H.unbind(window,"mouseup",f),c()}u(f,"onMouseUp");function m(_){H.bind(window,"mousemove",d),H.bind(window,"mouseup",f),a=_.clientY}return u(m,"onMouseDown"),r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),H.bind(r.__input,"change",l),H.bind(r.__input,"blur",h),H.bind(r.__input,"mousedown",m),H.bind(r.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return u(e,"NumberControllerBox"),Jt(e,[{key:"updateDisplay",value:u(function(){return this.__input.value=this.__truncationSuspended?this.getValue():_v(this.getValue(),this.__precision),kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(dh);function vc(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}u(vc,"map");var Ko=function(s){Wn(e,s);function e(t,n,i,r,o){$t(this,e);var a=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),H.bind(a.__background,"mousedown",c),H.bind(a.__background,"touchstart",f),H.addClass(a.__background,"slider"),H.addClass(a.__foreground,"slider-fg");function c(g){document.activeElement.blur(),H.bind(window,"mousemove",h),H.bind(window,"mouseup",d),h(g)}u(c,"onMouseDown");function h(g){g.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(vc(g.clientX,p.left,p.right,l.__min,l.__max)),!1}u(h,"onMouseDrag");function d(){H.unbind(window,"mousemove",h),H.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}u(d,"onMouseUp");function f(g){g.touches.length===1&&(H.bind(window,"touchmove",m),H.bind(window,"touchend",_),m(g))}u(f,"onTouchStart");function m(g){var p=g.touches[0].clientX,v=l.__background.getBoundingClientRect();l.setValue(vc(p,v.left,v.right,l.__min,l.__max))}u(m,"onTouchMove");function _(){H.unbind(window,"touchmove",m),H.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return u(_,"onTouchEnd"),a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return u(e,"NumberControllerSlider"),Jt(e,[{key:"updateDisplay",value:u(function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",kn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(dh),fh=function(s){Wn(e,s);function e(t,n,i){$t(this,e);var r=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,H.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),H.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return u(e,"FunctionController"),Jt(e,[{key:"fire",value:u(function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},"fire")}]),e}(ci),$o=function(s){Wn(e,s);function e(t,n){$t(this,e);var i=jn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new ft(i.getValue()),i.__temp=new ft(0);var r=i;i.domElement=document.createElement("div"),H.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",H.bind(i.__input,"keydown",function(g){g.keyCode===13&&d.call(this)}),H.bind(i.__input,"blur",d),H.bind(i.__selector,"mousedown",function(){H.addClass(this,"drag").bind(window,"mouseup",function(){H.removeClass(r.__selector,"drag")})}),H.bind(i.__selector,"touchstart",function(){H.addClass(this,"drag").bind(window,"touchend",function(){H.removeClass(r.__selector,"drag")})});var o=document.createElement("div");Z.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Z.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Z.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Z.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Z.extend(o.style,{width:"100%",height:"100%",background:"none"}),xc(o,"top","rgba(0,0,0,0)","#000"),Z.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),xv(i.__hue_field),Z.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),H.bind(i.__saturation_field,"mousedown",a),H.bind(i.__saturation_field,"touchstart",a),H.bind(i.__field_knob,"mousedown",a),H.bind(i.__field_knob,"touchstart",a),H.bind(i.__hue_field,"mousedown",l),H.bind(i.__hue_field,"touchstart",l);function a(g){m(g),H.bind(window,"mousemove",m),H.bind(window,"touchmove",m),H.bind(window,"mouseup",c),H.bind(window,"touchend",c)}u(a,"fieldDown");function l(g){_(g),H.bind(window,"mousemove",_),H.bind(window,"touchmove",_),H.bind(window,"mouseup",h),H.bind(window,"touchend",h)}u(l,"fieldDownH");function c(){H.unbind(window,"mousemove",m),H.unbind(window,"touchmove",m),H.unbind(window,"mouseup",c),H.unbind(window,"touchend",c),f()}u(c,"fieldUpSV");function h(){H.unbind(window,"mousemove",_),H.unbind(window,"touchmove",_),H.unbind(window,"mouseup",h),H.unbind(window,"touchend",h),f()}u(h,"fieldUpH");function d(){var g=Yo(this.value);g!==!1?(r.__color.__state=g,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}u(d,"onBlur");function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}u(f,"onFinish"),i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(g){g.type.indexOf("touch")===-1&&g.preventDefault();var p=r.__saturation_field.getBoundingClientRect(),v=g.touches&&g.touches[0]||g,M=v.clientX,w=v.clientY,y=(M-p.left)/(p.right-p.left),T=1-(w-p.top)/(p.bottom-p.top);return T>1?T=1:T<0&&(T=0),y>1?y=1:y<0&&(y=0),r.__color.v=T,r.__color.s=y,r.setValue(r.__color.toOriginal()),!1}u(m,"setSV");function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var p=r.__hue_field.getBoundingClientRect(),v=g.touches&&g.touches[0]||g,M=v.clientY,w=1-(M-p.top)/(p.bottom-p.top);return w>1?w=1:w<0&&(w=0),r.__color.h=w*360,r.setValue(r.__color.toOriginal()),!1}return u(_,"setH"),i}return u(e,"ColorController"),Jt(e,[{key:"updateDisplay",value:u(function(){var n=Yo(this.getValue());if(n!==!1){var i=!1;Z.each(ft.COMPONENTS,function(a){if(!Z.isUndefined(n[a])&&!Z.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&Z.extend(this.__color.__state,n)}Z.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;Z.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,xc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Z.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},"updateDisplay")}]),e}(ci),vv=["-moz-","-o-","-webkit-","-ms-",""];function xc(s,e,t,n){s.style.background="",Z.each(vv,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}u(xc,"linearGradient");function xv(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}u(xv,"hueGradient");var yv={load:u(function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},"load"),inject:u(function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}},"inject")},bv=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Mv=u(function(e,t){var n=e[t];return Z.isArray(arguments[2])||Z.isObject(arguments[2])?new mv(e,t,arguments[2]):Z.isNumber(n)?Z.isNumber(arguments[2])&&Z.isNumber(arguments[3])?Z.isNumber(arguments[4])?new Ko(e,t,arguments[2],arguments[3],arguments[4]):new Ko(e,t,arguments[2],arguments[3]):Z.isNumber(arguments[4])?new br(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new br(e,t,{min:arguments[2],max:arguments[3]}):Z.isString(n)?new gv(e,t):Z.isFunction(n)?new fh(e,t,""):Z.isBoolean(n)?new hh(e,t):null},"ControllerFactory");function Sv(s){setTimeout(s,1e3/60)}u(Sv,"requestAnimationFrame");var wv=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Sv,Tv=function(){function s(){$t(this,s),this.backgroundElement=document.createElement("div"),Z.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),H.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Z.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;H.bind(this.backgroundElement,"click",function(){e.hide()})}return u(s,"CenteredDiv"),Jt(s,[{key:"show",value:u(function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Z.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},"show")},{key:"hide",value:u(function(){var t=this,n=u(function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",H.unbind(t.domElement,"webkitTransitionEnd",i),H.unbind(t.domElement,"transitionend",i),H.unbind(t.domElement,"oTransitionEnd",i)},"hide");H.bind(this.domElement,"webkitTransitionEnd",n),H.bind(this.domElement,"transitionend",n),H.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},"hide")},{key:"layout",value:u(function(){this.domElement.style.left=window.innerWidth/2-H.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-H.getHeight(this.domElement)/2+"px"},"layout")}]),s}(),Ev=uv(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);yv.inject(Ev);var yc="dg",bc=72,Mc=20,Ps="Default",ms=function(){try{return!!window.localStorage}catch{return!1}}(),Ms=void 0,Sc=!0,Li=void 0,Ao=!1,ph=[],Je=u(function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),H.addClass(this.domElement,yc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Z.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=Z.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Z.isUndefined(n.load)?n.load={preset:Ps}:n.preset&&(n.load.preset=n.preset),Z.isUndefined(n.parent)&&n.hideable&&ph.push(this),n.resizable=Z.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Z.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=ms&&localStorage.getItem(Ri(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:u(function(){return n.parent},"get$$1")},scrollable:{get:u(function(){return n.scrollable},"get$$1")},autoPlace:{get:u(function(){return n.autoPlace},"get$$1")},closeOnTop:{get:u(function(){return n.closeOnTop},"get$$1")},preset:{get:u(function(){return t.parent?t.getRoot().preset:n.load.preset},"get$$1"),set:u(function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,Rv(this),t.revert()},"set$$1")},width:{get:u(function(){return n.width},"get$$1"),set:u(function(f){n.width=f,Qo(t,f)},"set$$1")},name:{get:u(function(){return n.name},"get$$1"),set:u(function(f){n.name=f,o&&(o.innerHTML=n.name)},"set$$1")},closed:{get:u(function(){return n.closed},"get$$1"),set:u(function(f){n.closed=f,n.closed?H.addClass(t.__ul,s.CLASS_CLOSED):H.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)},"set$$1")},load:{get:u(function(){return n.load},"get$$1")},useLocalStorage:{get:u(function(){return i},"get$$1"),set:u(function(f){ms&&(i=f,f?H.bind(window,"unload",r):H.unbind(window,"unload",r),localStorage.setItem(Ri(t,"isLocal"),f))},"set$$1")}}),Z.isUndefined(n.parent)){if(this.closed=n.closed||!1,H.addClass(this.domElement,s.CLASS_MAIN),H.makeSelectable(this.domElement,!1),ms&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Ri(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,H.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(H.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(H.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),H.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);H.addClass(l,"controller-name"),o=Ra(t,l);var c=u(function(f){return f.preventDefault(),t.closed=!t.closed,!1},"onClickTitle");H.addClass(this.__ul,s.CLASS_CLOSED),H.addClass(o,"title"),H.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(Z.isUndefined(n.parent)&&(Sc&&(Li=document.createElement("div"),H.addClass(Li,yc),H.addClass(Li,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Li),Sc=!1),Li.appendChild(this.domElement),H.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Qo(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},H.bind(window,"resize",this.__resizeHandler),H.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),H.bind(this.__ul,"transitionend",this.__resizeHandler),H.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Lv(this),r=u(function(){ms&&localStorage.getItem(Ri(t,"isLocal"))==="true"&&localStorage.setItem(Ri(t,"gui"),JSON.stringify(t.getSaveObject()))},"saveToLocalStorage"),this.saveToLocalStorageIfPossible=r;function h(){var d=t.getRoot();d.width+=1,Z.defer(function(){d.width-=1})}u(h,"resetWidth"),n.parent||h()},"GUI");Je.toggleHide=function(){Ao=!Ao,Z.each(ph,function(s){s.domElement.style.display=Ao?"none":""})};Je.CLASS_AUTO_PLACE="a";Je.CLASS_AUTO_PLACE_CONTAINER="ac";Je.CLASS_MAIN="main";Je.CLASS_CONTROLLER_ROW="cr";Je.CLASS_TOO_TALL="taller-than-window";Je.CLASS_CLOSED="closed";Je.CLASS_CLOSE_BUTTON="close-button";Je.CLASS_CLOSE_TOP="close-top";Je.CLASS_CLOSE_BOTTOM="close-bottom";Je.CLASS_DRAG="drag";Je.DEFAULT_WIDTH=245;Je.TEXT_CLOSED="Close Controls";Je.TEXT_OPEN="Open Controls";Je._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===bc||s.keyCode===bc)&&Je.toggleHide()};H.bind(window,"keydown",Je._keydownHandler,!1);Z.extend(Je.prototype,{add:u(function(e,t){return Ss(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},"add"),addColor:u(function(e,t){return Ss(this,e,t,{color:!0})},"addColor"),remove:u(function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Z.defer(function(){t.onResize()})},"remove"),destroy:u(function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Li.removeChild(this.domElement);var e=this;Z.each(this.__folders,function(t){e.removeFolder(t)}),H.unbind(window,"keydown",Je._keydownHandler,!1),wc(this)},"destroy"),addFolder:u(function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Je(t);this.__folders[e]=n;var i=Ra(this,n.domElement);return H.addClass(i,"folder"),n},"addFolder"),removeFolder:u(function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],wc(e);var t=this;Z.each(e.__folders,function(n){e.removeFolder(n)}),Z.defer(function(){t.onResize()})},"removeFolder"),open:u(function(){this.closed=!1},"open"),close:u(function(){this.closed=!0},"close"),hide:u(function(){this.domElement.style.display="none"},"hide"),show:u(function(){this.domElement.style.display=""},"show"),onResize:u(function(){var e=this.getRoot();if(e.scrollable){var t=H.getOffset(e.__ul).top,n=0;Z.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=H.getHeight(i))}),window.innerHeight-t-Mc<n?(H.addClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Mc+"px"):(H.removeClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Z.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},"onResize"),onResizeDebounced:Z.debounce(function(){this.onResize()},50),remember:u(function(){if(Z.isUndefined(Ms)&&(Ms=new Tv,Ms.domElement.innerHTML=bv),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Z.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Cv(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Qo(this,this.width)},"remember"),getRoot:u(function(){for(var e=this;e.parent;)e=e.parent;return e},"getRoot"),getSaveObject:u(function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=fr(this)),e.folders={},Z.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},"getSaveObject"),save:u(function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=fr(this),Jo(this,!1),this.saveToLocalStorageIfPossible()},"save"),saveAs:u(function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ps]=fr(this,!0)),this.load.remembered[e]=fr(this),this.preset=e,Zo(this,e,!0),this.saveToLocalStorageIfPossible()},"saveAs"),revert:u(function(e){Z.each(this.__controllers,function(t){this.getRoot().load.remembered?mh(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Z.each(this.__folders,function(t){t.revert(t)}),e||Jo(this.getRoot(),!1)},"revert"),listen:u(function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&gh(this.__listening)},"listen"),updateDisplay:u(function(){Z.each(this.__controllers,function(e){e.updateDisplay()}),Z.each(this.__folders,function(e){e.updateDisplay()})},"updateDisplay")});function Ra(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}u(Ra,"addRow");function wc(s){H.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&H.unbind(window,"unload",s.saveToLocalStorageIfPossible)}u(wc,"removeListeners");function Jo(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}u(Jo,"markPresetModified");function Av(s,e,t){if(t.__li=e,t.__gui=s,Z.extend(t,{options:u(function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ss(s,t.object,t.property,{before:a,factoryArgs:[Z.toArray(arguments)]})}if(Z.isArray(o)||Z.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ss(s,t.object,t.property,{before:l,factoryArgs:[o]})}},"options"),name:u(function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},"name"),listen:u(function(){return t.__gui.listen(t),t},"listen"),remove:u(function(){return t.__gui.remove(t),t},"remove")}),t instanceof Ko){var n=new br(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Z.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),H.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof br){var i=u(function(o){if(Z.isNumber(t.__min)&&Z.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ss(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o},"r");t.min=Z.compose(i,t.min),t.max=Z.compose(i,t.max)}else t instanceof hh?(H.bind(e,"click",function(){H.fakeEvent(t.__checkbox,"click")}),H.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof fh?(H.bind(e,"click",function(){H.fakeEvent(t.__button,"click")}),H.bind(e,"mouseover",function(){H.addClass(t.__button,"hover")}),H.bind(e,"mouseout",function(){H.removeClass(t.__button,"hover")})):t instanceof $o&&(H.addClass(e,"color"),t.updateDisplay=Z.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=Z.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&Jo(s.getRoot(),!0),r},t.setValue)}u(Av,"augmentController");function mh(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[Ps])o=r[Ps];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}u(mh,"recallSavedValue");function Ss(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new $o(e,t);else{var r=[e,t].concat(n.factoryArgs);i=Mv.apply(s,r)}n.before instanceof ci&&(n.before=n.before.__li),mh(s,i),H.addClass(i.domElement,"c");var o=document.createElement("span");H.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Ra(s,a,n.before);return H.addClass(l,Je.CLASS_CONTROLLER_ROW),i instanceof $o?H.addClass(l,"color"):H.addClass(l,dv(i.getValue())),Av(s,l,i),s.__controllers.push(i),i}u(Ss,"_add");function Ri(s,e){return document.location.href+"."+e}u(Ri,"getLocalStorageHash");function Zo(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}u(Zo,"addPresetOption");function Tc(s,e){e.style.display=s.useLocalStorage?"block":"none"}u(Tc,"showHideExplain");function Cv(s){var e=s.__save_row=document.createElement("li");H.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),H.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",H.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",H.addClass(n,"button"),H.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",H.addClass(i,"button"),H.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",H.addClass(r,"button"),H.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?Z.each(s.load.remembered,function(d,f){Zo(s,f,f===s.preset)}):Zo(s,Ps,!1),H.bind(o,"change",function(){for(var d=0;d<s.__preset_select.length;d++)s.__preset_select[d].innerHTML=s.__preset_select[d].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),ms){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ri(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Tc(s,a),H.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,Tc(s,a)})}var h=document.getElementById("dg-new-constructor");H.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Ms.hide()}),H.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Ms.show(),h.focus(),h.select()}),H.bind(n,"click",function(){s.save()}),H.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&s.saveAs(d)}),H.bind(r,"click",function(){s.revert()})}u(Cv,"addSaveMenu");function Lv(s){var e=void 0;s.__resize_handle=document.createElement("div"),Z.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}u(t,"drag");function n(){H.removeClass(s.__closeButton,Je.CLASS_DRAG),H.unbind(window,"mousemove",t),H.unbind(window,"mouseup",n)}u(n,"dragStop");function i(r){return r.preventDefault(),e=r.clientX,H.addClass(s.__closeButton,Je.CLASS_DRAG),H.bind(window,"mousemove",t),H.bind(window,"mouseup",n),!1}u(i,"dragStart"),H.bind(s.__resize_handle,"mousedown",i),H.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}u(Lv,"addResizeHandle");function Qo(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}u(Qo,"setWidth");function fr(s,e){var t={};return Z.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];Z.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}u(fr,"getCurrentPreset");function Rv(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}u(Rv,"setPresetSelectIndex");function gh(s){s.length!==0&&wv.call(window,function(){gh(s)}),Z.each(s,function(e){e.updateDisplay()})}u(gh,"updateDisplays");var Pv=Je;class _h{constructor(e){this.globeRadius=e,this.gui=new Pv}addObjectOptions(e,t,{lat:n,lng:i,rotation:r,landHeight:o},a){var g;const l=(g=this.gui.__folders[e])!=null?g:this.gui.addFolder(e),c=t.getObject(),h=l.addFolder(c.name+a);h.add(c,"visible"),h.add({scale:c.scale.x},"scale",0,5).onChange(p=>{c.scale.setScalar(p)});const d=c.clone();r&&d.rotateY(-sn.degToRad(r));const f=d.rotation.clone(),m={y:r!=null?r:0};h.add(m,"y",0,360).name("rotation").onChange(p=>{c.rotation.copy(f),c.rotateY(sn.degToRad(p))});const _={lat:n,lng:i,landHeight:o!=null?o:0};Object.keys(_).forEach(p=>{h.add(_,p,-360,360,1).onChange(()=>{var v;t.applyLatLng(this.globeRadius+((v=_.landHeight)!=null?v:0),_.lat,_.lng),f.copy(c.rotation),c.rotateY(sn.degToRad(m.y))})})}}u(_h,"ContinentDebugControls");class ts{constructor(e,t=!1){this.properties=e,t&&(this.debugControls=new _h(e.globeRadius)),this.continent=this.constructContinent(),this.continent.name&&this.continent.traverse(n=>{n.userData.continent=this.continent.name})}getObject(){return this.continent}addTo(e){e.add(this.continent)}constructObject(e,t){const{lat:n,lng:i,rotation:r,landHeight:o=ye.LevelOne,...a}=t,l=new e({...a});return l.applyLatLng(this.properties.globeRadius+o,n,i),r!==void 0&&l.getObject().rotateY(sn.degToRad(r)),l}constructObjectsGroup(e,t,n){const i=new et;return i.name=t,n.forEach((r,o)=>{var l;const a=this.constructObject(e,r);i.add(a.getObject()),(l=this.debugControls)==null||l.addObjectOptions(t,a,r,o)}),i}constructLands(e,t){return this.constructObjectsGroup(ah,e,t)}constructTrees(e,t){return this.constructObjectsGroup(ch,e,t)}constructMountains(e,t){return this.constructObjectsGroup(lh,e,t)}constructHouses(e,t){return this.constructObjectsGroup(rh,e,t)}constructBuildings(e,t){return this.constructObjectsGroup(sh,e,t)}constructHuts(e,t){return this.constructObjectsGroup(oh,e,t)}}u(ts,"BaseContinent");const Dv=[{scale:1.5,landHeight:ye.LevelTwo,lat:20,lng:100,rotation:10},{scale:1,landHeight:ye.LevelOne,lat:40,lng:90,rotation:0}],Iv=[{scale:1.2,landHeight:ye.LevelOne,lat:18,lng:88},{scale:1.5,landHeight:ye.LevelOne,lat:23,lng:88},{scale:2,landHeight:ye.LevelOne,lat:21,lng:83},{scale:1.2,landHeight:ye.LevelOne,lat:40,lng:110},{scale:1.5,landHeight:ye.LevelOne,lat:40,lng:105},{scale:2,landHeight:ye.LevelOne,lat:35,lng:110}];class vh extends ts{constructContinent(){const e=new et;return e.name="aboutContinent",e.add(this.constructTrees("aboutTrees",Iv)),e.add(this.constructHouses("aboutHouses",Dv)),e}}u(vh,"AboutContinent");const Ov=[{size:15,lat:53,lng:4,rotation:7,landHeight:ye.LevelTwo-.75}],Nv=[{scale:1,lat:48,lng:-20,landHeight:ye.LevelTwo},{scale:1.2,lat:31,lng:-14,rotation:36,landHeight:ye.LevelOne}],Fv=[{scale:1,lat:52,lng:-12,landHeight:ye.LevelTwo},{scale:1.2,lat:48,lng:-10,landHeight:ye.LevelTwo},{scale:1.2,lat:32,lng:-6,landHeight:ye.LevelOne},{scale:1.5,lat:36,lng:-6,landHeight:ye.LevelOne},{scale:1,lat:33,lng:-2,landHeight:ye.LevelOne}],Uv=[{lat:40,lng:18,landHeight:ye.LevelOne},{lat:35,lng:8,landHeight:ye.LevelOne}];class xh extends ts{constructContinent(){const e=new et;return e.name="projectsContinent",e.add(this.constructMountains("projectsMountains",Ov)),e.add(this.constructHouses("projectsHouses",Nv)),e.add(this.constructTrees("projectsTrees",Fv)),e.add(this.constructHuts("projectsHuts",Uv)),e}}u(xh,"ProjectsContinent");class yh extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Ih(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=On.extractUrlBase(e),this.manager.itemStart(e);const a=u(function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new wa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={};if(typeof e=="string")r=e;else if(On.decodeText(new Uint8Array(e,0,4))===Oh){try{o[Ue.KHR_BINARY_GLTF]=new Nh(e)}catch(d){i&&i(d);return}r=o[Ue.KHR_BINARY_GLTF].content}else r=On.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Hh(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);a[d.name]=d,o[d.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const d=l.extensionsUsed[h],f=l.extensionsRequired||[];switch(d){case Ue.KHR_MATERIALS_UNLIT:o[d]=new Mh;break;case Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[d]=new zh;break;case Ue.KHR_DRACO_MESH_COMPRESSION:o[d]=new Fh(l,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:o[d]=new Uh;break;case Ue.KHR_MESH_QUANTIZATION:o[d]=new kh;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}u(yh,"GLTFLoader");function zv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}u(zv,"GLTFRegistry");const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class bh{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ae(16777215);l.color!==void 0&&h.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ta(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vu(h),c.distance=d;break;case"spot":c=new Bu(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}u(bh,"GLTFLightsExtension");class Mh{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,je))}return Promise.all(i)}}u(Mh,"GLTFMaterialsUnlitExtension");class Sh{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}u(Sh,"GLTFMaterialsEmissiveStrengthExtension");class wh{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}}u(wh,"GLTFMaterialsClearcoatExtension");class Th{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}u(Th,"GLTFMaterialsIridescenceExtension");class Eh{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,je)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}u(Eh,"GLTFMaterialsSheenExtension");class Ah{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}u(Ah,"GLTFMaterialsTransmissionExtension");class Ch{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae(a[0],a[1],a[2]),Promise.all(r)}}u(Ch,"GLTFMaterialsVolumeExtension");class Lh{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}u(Lh,"GLTFMaterialsIorExtension");class Rh{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,je)),Promise.all(r)}}u(Rh,"GLTFMaterialsSpecularExtension");class Ph{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}u(Ph,"GLTFTextureBasisUExtension");class Dh{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}u(Dh,"GLTFTextureWebPExtension");class Ih{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(m),h,d,f,i.mode,i.filter),m})})}else return null}}u(Ih,"GLTFMeshoptCompression");const Oh="glTF",cs=12,Ec={JSON:1313821514,BIN:5130562};class Nh{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cs);if(this.header={magic:On.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Oh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-cs,i=new DataView(e,cs);let r=0;for(;r<n;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Ec.JSON){const l=new Uint8Array(e,cs+r,o);this.content=On.decodeText(l)}else if(a===Ec.BIN){const l=cs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}u(Nh,"GLTFBinaryExtension");class Fh{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=ea[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=ea[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],m=Ds[f.componentType];c[d]=m.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}d(f)},a,c)})})}}u(Fh,"GLTFDracoMeshCompressionExtension");class Uh{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}u(Uh,"GLTFTextureTransformExtension");class Mr extends Fs{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Ae().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}u(Mr,"GLTFMeshStandardSGMaterial");class zh{constructor(){this.name=Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Mr}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Ae(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,je)),e.emissive=new Ae(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Ae(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,je))}return Promise.all(r)}createMaterial(e){const t=new Mr(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Tr,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}u(zh,"GLTFMaterialsPbrSpecularGlossinessExtension");class kh{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}u(kh,"GLTFMeshQuantizationExtension");class Pa extends Qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,f=d*d,m=f*d,_=e*c,g=_-c,p=-2*m+3*f,v=m-f,M=1-p,w=v-f+d;for(let y=0;y!==a;y++){const T=o[g+y+a],L=o[g+y+l]*h,I=o[_+y+a],x=o[_+y]*h;r[y]=M*T+w*L+p*I+v*x}return r}}u(Pa,"GLTFCubicSplineInterpolant");const kv=new pt;class Bh extends Pa{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return kv.fromArray(r).normalize().toArray(r),r}}u(Bh,"GLTFCubicSplineQuaternionInterpolant");const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ac={9728:mt,9729:At,9984:No,9985:Bc,9986:Fo,9987:Yi},Cc={33071:Ut,33648:_r,10497:Bi},Lc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ea={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Bv={CUBICSPLINE:void 0,LINEAR:Vi,STEP:Ts},Co={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),s.DefaultMaterial}u(Hv,"createDefaultMaterial");function us(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u(us,"addUnknownExtensionsToUserData");function Zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(Zn,"assignExtrasToUserData");function Vv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}u(Vv,"addMorphTargets");function Gv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(Gv,"updateMorphTargets");function Wv(s){const e=s.extensions&&s.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Rc(e.attributes):t=s.indices+":"+Rc(s.attributes)+":"+s.mode,t}u(Wv,"createPrimitiveKey");function Rc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}u(Rc,"createAttributesKey");function ta(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(ta,"getNormalizedComponentScale");function jv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}u(jv,"getImageURIMimeType");class Hh{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zv,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new zu(this.options.manager):this.textureLoader=new ju(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};us(r,a,i),Zn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=u((o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(On.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Lc[i.type],c=Ds[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(m&&m!==d){const v=Math.floor(f/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let w=t.cache.get(M);w||(g=new c(a,v*m,i.count*m/h),w=new fu(g,m/h),t.cache.add(M,w)),p=new Pr(w,l,f%m/h,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Ct(g,l,_);if(i.sparse!==void 0){const v=Lc.SCALAR,M=Ds[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new M(o[1],w,i.sparse.count*v),L=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new Ct(p.array.slice(),p.itemSize,p.normalized));for(let I=0,x=T.length;I<x;I++){const C=T[I];if(p.setX(C,L[I*l]),l>=2&&p.setY(C,L[I*l+1]),l>=3&&p.setZ(C,L[I*l+2]),l>=4&&p.setW(C,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,o.name&&(h.name=o.name);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ac[f.magFilter]||At,h.minFilter=Ac[f.minFilter]||Yi,h.wrapS=Cc[f.wrapS]||Bi,h.wrapT=Cc[f.wrapT]||Bi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=u(function(g){const p=new _t(g);p.needsUpdate=!0,f(p)},"onLoad")),t.load(On.resolveURL(d,r.path),_,void 0,m)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||jv(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Or,Bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ga,Bt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Fs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const d=i[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else if(l[Ue.KHR_MATERIALS_UNLIT]){const d=i[Ue.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,je)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);const h=r.alphaMode||Co.OPAQUE;if(h===Co.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Co.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&o!==Dn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dn&&(a.emissive=new Ae().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Dn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,je)),Promise.all(c).then(function(){let d;return o===Mr?d=i[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):d=new o(a),r.name&&(d.name=r.name),Zn(d,r),t.associations.set(d,{materials:e}),r.extensions&&us(i,d,r),d})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Pc(l,a,t)})}u(r,"createDracoPrimitive");const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Wv(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Pc(new Et,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Hv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[m];let v;const M=c[m];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)v=r.isSkinnedMesh===!0?new pu(g,M):new st(g,M),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?v.geometry=Dc(v.geometry,vf):p.mode===pn.TRIANGLE_FAN&&(v.geometry=Dc(v.geometry,Vc));else if(p.mode===pn.LINES)v=new gu(g,M);else if(p.mode===pn.LINE_STRIP)v=new Ir(g,M);else if(p.mode===pn.LINE_LOOP)v=new _u(g,M);else if(p.mode===pn.POINTS)v=new _a(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&Gv(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),Zn(v,r),p.extensions&&us(i,v,p),t.assignFinalMaterial(v),d.push(v)}for(let m=0,_=d.length;m<_;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return d[0];const f=new et;t.associations.set(f,{meshes:e});for(let m=0,_=d.length;m<_;m++)f.add(d[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(sn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Lr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const d=n.channels[c],f=n.samplers[d.sampler],m=d.target,_=m.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",_)),r.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",p)),a.push(f),l.push(m)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2],m=c[3],_=c[4],g=[];for(let v=0,M=h.length;v<M;v++){const w=h[v],y=d[v],T=f[v],L=m[v],I=_[v];if(w===void 0)continue;w.updateMatrix();let x;switch(Cn[I.path]){case Cn.weights:x=Wi;break;case Cn.rotation:x=zn;break;case Cn.position:case Cn.scale:default:x=ji;break}const C=w.name?w.name:w.uuid,O=L.interpolation!==void 0?Bv[L.interpolation]:Vi,R=[];Cn[I.path]===Cn.weights?w.traverse(function(D){D.morphTargetInfluences&&R.push(D.name?D.name:D.uuid)}):R.push(C);let V=T.array;if(T.normalized){const D=ta(V.constructor),P=new Float32Array(V.length);for(let B=0,G=V.length;B<G;B++)P[B]=V[B]*D;V=P}for(let D=0,P=R.length;D<P;D++){const B=new x(R[D]+"."+Cn[I.path],y.array,V,O);L.interpolation==="CUBICSPLINE"&&(B.createInterpolant=u(function(te){const W=this instanceof zn?Bh:Pa;return new W(this.times,this.values,this.getValueSize()/3,te)},"InterpolantFactoryMethodGLTFCubicSpline"),B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(B)}}const p=n.name?n.name:"animation_"+e;return new Ou(p,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new ma:a.length>1?l=new et:a.length===1?l=a[0]:l=new Qe,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),Zn(l,r),r.extensions&&us(n,l,r),r.matrix!==void 0){const c=new ke;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,o=new et;i.name&&(o.name=r.createUniqueName(i.name)),Zn(o,i),i.extensions&&us(n,o,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(Vh(a[c],o,t,r));return Promise.all(l).then(function(){const c=u(h=>{const d=new Map;for(const[f,m]of r.associations)(f instanceof Bt||f instanceof _t)&&d.set(f,m);return h.traverse(f=>{const m=r.associations.get(f);m!=null&&d.set(f,m)}),d},"reduceAssociations");return r.associations=c(o),o})}}u(Hh,"GLTFParser");function Vh(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){if(i.skin===void 0)return r;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;const l=[];for(let c=0,h=o.joints.length;c<h;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let d=0,f=a.length;d<f;d++){const m=a[d];if(m){c.push(m);const _=new ke;o.inverseBindMatrices!==void 0&&_.fromArray(o.inverseBindMatrices.array,d*16),h.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[d])}l.bind(new Dr(c,h),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];o.push(Vh(h,r,t,n))}}return Promise.all(o)})}u(Vh,"buildNodeHierarchy");function Xv(s,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const h=ta(Ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,l=new A;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],m=f.min,_=f.max;if(m!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),f.normalized){const g=ta(Ds[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}u(Xv,"computeBounds");function Pc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}u(r,"assignAttributeAccessor");for(const o in n){const a=ea[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Zn(s,e),Xv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vv(s,e.targets,t):s})}u(Pc,"addPrimitiveAttributes");function Dc(s,e){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Vc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}u(Dc,"toTrianglesDrawMode");class Rn{constructor(){return this.prefix="LOGGER:",Rn.getInstance()}static getInstance(){return Rn.instance===void 0&&(Rn.instance=new Rn),Rn.instance}logInfo(e,...t){console.info(this.prefix,"[INFO]",e,...t)}logWarning(e,...t){console.warn(this.prefix,"[WARN]",e,...t)}logError(e,...t){console.error(this.prefix,"[ERROR]",e,...t)}}u(Rn,"Logger");class Ui{constructor(){return this.loader=new yh,Ui.instance==null&&(Ui.instance=this),Ui.instance}async loadFile(e){try{return(await this.loader.loadAsync(e)).scene}catch(t){throw Rn.getInstance().logError("Failed to load glTF file",e,`
`,t),t}}}u(Ui,"GltfLoader");const qv=[{lat:33,lng:-77,rotation:30,landHeight:ye.LevelOne},{scale:1.5,lat:30,lng:-72,landHeight:ye.LevelOne},{scale:1.2,lat:26,lng:-68,landHeight:ye.LevelOne},{lat:26,lng:-73,rotation:60,landHeight:ye.LevelOne},{scale:.8,lat:31,lng:-67,landHeight:ye.LevelOne},{scale:1,lat:12,lng:-79,landHeight:ye.LevelTwo},{scale:1.2,lat:13,lng:-83,landHeight:ye.LevelTwo}],Yv=[{lat:21,lng:-83,rotation:65,landHeight:ye.LevelTwo,floors:2},{lat:16,lng:-73,rotation:65,landHeight:ye.LevelTwo}],Kv=[{scale:.7,lat:-1,lng:-78,landHeight:ye.LevelOne},{lat:1,lng:-84,landHeight:ye.LevelOne},{lat:7,lng:-94,landHeight:ye.LevelOne}];class Gh extends ts{constructContinent(){const e=new et;return e.name="workContinent",e.add(this.constructTrees("workTrees",qv)),e.add(this.constructBuildings("workBuildings",Yv)),e.add(this.constructHuts("workHuts",Kv)),e}}u(Gh,"WorkContinent");const $v=[{scale:1.1,size:20,lat:-29,lng:-142,rotation:70,height:15,landHeight:ye.LevelOne-2}],Jv=[{scale:1.2,lat:-11,lng:-158,landHeight:ye.LevelOne},{lat:-16,lng:-158,landHeight:ye.LevelOne},{scale:1.3,lat:-21,lng:-172,rotation:10,landHeight:ye.LevelTwo},{scale:1.1,lat:-23,lng:-168,rotation:60,landHeight:ye.LevelTwo},{lat:-21,lng:-177,rotation:30,landHeight:ye.LevelTwo},{scale:1.2,lat:-25,lng:-174,landHeight:ye.LevelTwo},{scale:1.5,lat:-50,lng:-142,landHeight:ye.LevelOne},{scale:1.2,lat:-46,lng:-137,rotation:60,landHeight:ye.LevelOne},{lat:-45,lng:-144,rotation:15,landHeight:ye.LevelOne}],Zv=[{lat:-16,lng:-153,rotation:20,landHeight:ye.LevelOne},{scale:.8,lat:-14,lng:-163,rotation:45,landHeight:ye.LevelOne}],Qv=[{scale:1,lat:-37,lng:-164,rotation:30,landHeight:ye.LevelTwo},{scale:.7,lat:-30,lng:-168,rotation:30,landHeight:ye.LevelTwo}];class Wh extends ts{constructContinent(){const e=new et;return e.name="lifeContinent",e.add(this.constructMountains("lifeMountains",$v)),e.add(this.constructTrees("lifeTrees",Jv)),e.add(this.constructHouses("lifeHouses",Zv)),e.add(this.constructBuildings("lifeBuildings",Qv)),e}}u(Wh,"LifeContinent");const ex=[{scale:1.2,lat:222,lng:-157,landHeight:ye.LevelTwo},{lat:225,lng:-159,landHeight:ye.LevelTwo},{scale:1.3,lat:-126,lng:-132,landHeight:ye.LevelOne},{lat:-128,lng:-165,landHeight:ye.LevelOne},{scale:.9,lat:-125,lng:-161,rotation:45,landHeight:ye.LevelOne}],tx=[{scale:1,lat:-140,lng:-167,rotation:120,landHeight:ye.LevelTwo}],nx=[{scale:1,lat:-133,lng:-147,rotation:70,landHeight:ye.LevelTwo,floors:2}],ix=[{lat:-50,lng:-5,landHeight:ye.LevelOne}];class jh extends ts{constructContinent(){const e=new et;return e.name="placeholderContinent",e.add(this.constructTrees("placeholderTrees",ex)),e.add(this.constructHouses("placeholderHouses",tx)),e.add(this.constructBuildings("placeholderBuildings",nx)),e.add(this.constructHuts("placeholderHuts",ix)),e}}u(jh,"PlaceholderContinent");class Xh extends on{constructObject(){const{starsCount:e,far:t}=this.properties,n=4,i=new et;i.name="galaxy";for(let r=0;r<n;r++){const o=this.constructStarsGroup(e/n,t);i.add(o)}return i}constructStarsGroup(e,t=3e3){const n=new Et;n.setAttribute("position",this.constructStarsPositions(e,t));const i=new Or({color:Lt.star,size:7,map:this.createStarTexture(),transparent:!0,depthWrite:!1}),r=new _a(n,i);return r.name="stars",r}constructStarsPositions(e,t=3e3){const i=[];for(let r=0;r<e;r++){const o=new A;o.randomDirection(),o.multiplyScalar(sn.randFloat(700,t/2)),i.push(o.x,o.y,o.z)}return new ut(i,3)}createStarTexture(){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=128/2;n.beginPath(),n.arc(i,i,128/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle="#ffffff",n.fill();const r=new _t(t);return r.needsUpdate=!0,r}animateGalaxy(){const e=this.object.children,t=.02,n=1e3,i=u((r,o=1)=>{const a=new qo(r.rotation);a.to({y:r.rotation.y+t*o}),a.duration(n),a.start(),a.onComplete(()=>i(r,o))},"animateStarsGroup");for(let r=0;r<e.length;r++)i(e[r],r%2===0?1:-1)}}u(Xh,"Galaxy");const Ic=u((s,e=.1,t=document.body)=>{t.addEventListener("mousemove",n=>{const i=t.clientWidth/2,r=t.clientHeight/2;s.position.x=(n.clientX-i)*e,s.position.y=(n.clientY-r)*e})},"enableParallax"),sx={cameraDistanceUpContinent:100,cameraDistanceToContinent:250,cameraRotation:0,cameraLeftSpace:0,cameraTopSpace:60},rx={cameraDistanceUpContinent:100,cameraDistanceToContinent:150,cameraRotation:30,cameraLeftSpace:50,cameraTopSpace:0},ox=u(()=>window.innerHeight>window.innerWidth,"isScreenPortrait"),ax=""+new URL("geometries/continents.gltf",import.meta.url).href;class Hr{constructor(e){this.cameraAnimationOptions={duration:2e3,easing:bs.Cubic.Out},this.three=new th(e),this.initializePlanet()}static build(e){return new Hr(e)}async initializePlanet(){const e=this.three.getScene(),t=new ih({size:10});t.setPosition(this.three.getControls().getCamera().position),t.addTo(e),this.sun=t;const n=new et;Ic(n,.002),n.name="planet",e.add(n);const i=new nh({size:100});i.addTo(n);const r=i.getRadius();this.three.getSelector().intersectButIgnoreObject(i.getObject()),this.three.getControls().setSpinControlsObject(n,r);const o=this.three.getControls().getCamera().far,a=new Xh({starsCount:1e3,far:o});a.animateGalaxy(),Ic(a.getObject(),.05),a.addTo(e);const l=await this.loadContinentsLand();[new vh({globeRadius:r}),new xh({globeRadius:r}),new Gh({globeRadius:r}),new Wh({globeRadius:r}),new jh({globeRadius:r})].forEach(c=>{const h=l[c.getObject().name];h.name=h.name+"Land",c.getObject().add(h),this.three.getSelector().onClick(c.getObject(),()=>{this.onContinentClick(c.getObject())}),c.addTo(n)})}resetControls(){const e=this.three.getControls(),t=e.getDefaultCameraState();e.resetSpinControls(),this.animateCameraToTarget(t.position,t.quaternion)}async loadContinentsLand(){const t=await new Ui().loadFile(ax),n={};for(const i of t.children)n[i.name]=i;return n}onContinentClick(e){if(this.isContinentInfoOpen(e.name)||this.isAnyContinentInfoOpening())return;const t=new Hn().setFromObject(e).getCenter(new A),n=new A(0,0,0),i=av(n,t),r=this.three.getControls();r.getSpinControls().trackballRadius=50,r.setRotationAxis(i);const o=this.getContinentCameraTransform(i,t);this.animateCameraToTarget(o.position,o.quaternion),this.openContinentInfo(e.name,this.cameraAnimationOptions.duration/2)}animateCameraToTarget(e,t){const n=[this.three.getControls().getCamera()];this.sun&&n.push(this.sun.getObject());const{duration:i,easing:r}=this.cameraAnimationOptions;for(const o of n){const a=new qo(o.position).to(e).duration(i).easing(r),l=new qo(o.quaternion).to(t).duration(i).easing(r);a.start(),l.start()}}openContinentInfo(e,t){var i;(i=document.querySelector("mp-continent-info[open]"))==null||i.removeAttribute("open");const n=document.querySelector(`mp-continent-info[name="${e}"]`);n==null||n.setAttribute("opening",""),setTimeout(()=>{n==null||n.setAttribute("open",""),n==null||n.removeAttribute("opening")},t)}isContinentInfoOpen(e){var n;const t=document.querySelector(`mp-continent-info[name="${e}"]`);return(n=t==null?void 0:t.hasAttribute("open"))!=null?n:!1}isAnyContinentInfoOpening(){return!!document.querySelector("mp-continent-info[opening]")}getContinentCameraTransform(e,t){const{cameraDistanceUpContinent:n,cameraDistanceToContinent:i,cameraRotation:r,cameraLeftSpace:o,cameraTopSpace:a}=ox()?sx:rx,l=new Qe;l.lookAt(e),l.position.copy(t),l.translateZ(n).translateX(i),l.lookAt(t);const c=lv(l),h=new A().copy(e).applyAxisAngle(c,sn.degToRad(r)),d=new pt().setFromRotationMatrix(new ke().lookAt(l.position,t,h));return l.quaternion.copy(d),l.translateX(-o),l.translateY(a),{position:l.position,quaternion:l.quaternion}}}u(Hr,"Planet$1");const lx=`<main class="planet">
  <canvas id="planet-canvas"></canvas>
</main>
`,cx=`.planet {
  width: 100%;
  height: 100%;
  background: radial-gradient(#424242, #000000);
}

#planet-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
`;var ux=Object.defineProperty,hx=Object.getOwnPropertyDescriptor,dx=u((s,e,t,n)=>{for(var i=n>1?void 0:n?hx(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ux(e,t,i),i},"__decorateClass");let na=u(class extends qi{onInit(){const s=this.shadowDOM.querySelector("#planet-canvas");window.planet=Hr.build({canvasElement:s}),this.closeContinentOnEscape()}closeContinentOnEscape(){document.addEventListener("keydown",s=>{s.key==="Escape"&&this.deactiveContinentInfo()})}deactiveContinentInfo(){const s=document.querySelector("mp-continent-info[open]");s&&(s.removeAttribute("open"),window.planet.resetControls())}},"Planet");na=dx([Is(lx),Sr(cx)],na);Os(na);
